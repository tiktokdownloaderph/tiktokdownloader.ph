import hmac
import os
import re
import secrets
import threading
import time
from collections import OrderedDict, deque
from urllib.parse import urljoin, urlsplit

import requests
import yt_dlp
from flask import Flask, Response, jsonify, request, stream_with_context

MEDIA_HOSTS = ("tiktok.com", "tiktokcdn.com", "tiktokcdn-us.com", "tiktokcdn-eu.com", "muscdn.com", "byteoversea.com", "ibytedtos.com")
MAX_BYTES = 150 * 1024 * 1024
TTL = 600


def allowed_url(value, hosts):
    try:
        url = urlsplit(value)
        return url.scheme == "https" and not url.username and not url.password and not url.port and any(url.hostname == host or url.hostname.endswith("." + host) for host in hosts)
    except (ValueError, AttributeError, TypeError):
        return False


def video_url(value):
    if not isinstance(value, str) or len(value) > 2048 or not allowed_url(value, ("tiktok.com",)):
        return None
    url = urlsplit(value)
    if not (re.fullmatch(r"/@[^/]+/video/\d{10,25}/?", url.path) or (url.hostname in ("vm.tiktok.com", "vt.tiktok.com") and re.fullmatch(r"/[A-Za-z0-9]+/?", url.path))):
        return None
    return value.split("?")[0].split("#")[0]


def extract(url):
    with yt_dlp.YoutubeDL({"quiet": True, "no_warnings": True, "noplaylist": True, "skip_download": True, "socket_timeout": 12, "retries": 0, "extractor_retries": 0}) as downloader:
        info = downloader.extract_info(url, download=False)
        if info:
            info["_media_cookies"] = list(downloader.cookiejar)
        return info


def create_app(extractor=extract, clock=time.monotonic):
    app = Flask(__name__)
    app.config["MAX_CONTENT_LENGTH"] = 4096
    app.config["API_KEY"] = os.environ.get("EXTRACTOR_API_KEY", "")
    app.config["PUBLIC_BASE_URL"] = os.environ.get("RENDER_EXTERNAL_URL", "")
    slots = threading.BoundedSemaphore(2)
    lock = threading.Lock()
    media = OrderedDict()
    results = OrderedDict()
    attempts = deque()

    def fail(code, status):
        response = jsonify({"code": code})
        response.status_code = status
        if status in (429, 503):
            response.headers["Retry-After"] = "60"
        return response

    @app.after_request
    def private_response(response):
        response.headers["Cache-Control"] = "no-store"
        response.headers["X-Content-Type-Options"] = "nosniff"
        return response

    @app.get("/")
    @app.get("/health")
    def health():
        ready = len(app.config["API_KEY"]) >= 32
        return jsonify({"ready": ready, "engine": "yt-dlp", "version": yt_dlp.version.__version__}), 200 if ready else 503

    @app.post("/extract")
    def load():
        key = app.config["API_KEY"]
        if len(key) < 32:
            return fail("NOT_CONFIGURED", 503)
        if not hmac.compare_digest(request.headers.get("Authorization", "").encode(), ("Bearer " + key).encode()):
            return fail("UNAUTHORIZED", 401)
        body = request.get_json(silent=True)
        url = video_url(body.get("url")) if isinstance(body, dict) else None
        if not url:
            return fail("INVALID_URL", 400)
        base = app.config["PUBLIC_BASE_URL"].rstrip("/")
        if not base.startswith("https://"):
            return fail("NOT_CONFIGURED", 503)
        with lock:
            for token, entry in list(media.items()):
                if entry["expires"] <= clock():
                    del media[token]
            for cached_url, entry in list(results.items()):
                if entry["expires"] <= clock():
                    del results[cached_url]
            if url in results:
                return jsonify(results[url]["body"])
            while attempts and attempts[0] <= clock() - 60:
                attempts.popleft()
            if len(attempts) >= 20:
                return fail("BUSY", 429)
            attempts.append(clock())
        if not slots.acquire(blocking=False):
            return fail("BUSY", 503)
        try:
            info = extractor(url) or {}
            formats = info.get("formats") or []
            videos = [item for item in formats if allowed_url(item.get("url"), MEDIA_HOSTS) and item.get("vcodec") not in (None, "none") and item.get("acodec") not in (None, "none") and item.get("ext") == "mp4" and not item.get("has_drm") and item.get("protocol") in (None, "http", "https")]
            if not videos:
                return fail("NO_PLAYABLE_VIDEO", 422)
            best = max(videos, key=lambda item: (item.get("height") or 0, item.get("tbr") or 0))
            audio = next((item for item in formats if allowed_url(item.get("url"), MEDIA_HOSTS) and item.get("vcodec") == "none" and item.get("ext") == "mp3"), None)
            # Media stays on this host because TikTok may bind it to the extractor's IP and headers.
            def register(item):
                if not item:
                    return ""
                token = secrets.token_urlsafe(32)
                with lock:
                    media[token] = {"url": item["url"], "headers": {**(info.get("http_headers") or {}), **(item.get("http_headers") or {})}, "cookies": info.get("_media_cookies") or [], "expires": clock() + TTL, "audio": item is audio}
                    while len(media) > 256:
                        media.popitem(last=False)
                return base + "/media/" + token
            playback, soundtrack = register(best), register(audio)
            result = {"hdUrl": playback, "wmUrl": "", "audioUrl": soundtrack, "music": soundtrack, "thumbnail": info.get("thumbnail") or "", "author": info.get("uploader") or "tiktok", "authorUrl": info.get("uploader_url") or "#", "authorThumb": ""}
            with lock:
                results[url] = {"expires": clock() + 240, "body": result}
                while len(results) > 64:
                    results.popitem(last=False)
            return jsonify(result)
        except Exception:
            app.logger.warning("TikTok extraction failed; credentials and upstream URLs omitted")
            return fail("EXTRACTION_FAILED", 502)
        finally:
            slots.release()

    @app.get("/media/<token>")
    def download(token):
        with lock:
            entry = media.get(token)
            if not entry or entry["expires"] <= clock():
                return fail("EXPIRED", 410)
        session = requests.Session()
        session.trust_env = False
        for cookie in entry["cookies"]:
            session.cookies.set_cookie(cookie)
        target = entry["url"]
        try:
            for _ in range(4):
                if not allowed_url(target, MEDIA_HOSTS):
                    session.close()
                    return fail("INVALID_MEDIA", 502)
                upstream = session.get(target, headers=entry["headers"], stream=True, timeout=(5, 20), allow_redirects=False)
                if upstream.status_code not in (301, 302, 303, 307, 308):
                    break
                target = urljoin(target, upstream.headers.get("Location", ""))
                upstream.close()
            else:
                session.close()
                return fail("INVALID_MEDIA", 502)
            mime = upstream.headers.get("Content-Type", "").split(";")[0]
            if upstream.status_code != 200 or not mime.startswith(("video/", "audio/")) or int(upstream.headers.get("Content-Length", "0")) > MAX_BYTES:
                upstream.close()
                session.close()
                return fail("MEDIA_UNAVAILABLE", 502)

            def chunks():
                total = 0
                try:
                    for chunk in upstream.iter_content(65536):
                        total += len(chunk)
                        if total > MAX_BYTES:
                            break
                        yield chunk
                finally:
                    upstream.close()
                    session.close()

            response = Response(stream_with_context(chunks()), content_type=mime, headers={"Content-Disposition": "attachment; filename=tiktok." + ("mp3" if entry["audio"] else "mp4")})
            response.call_on_close(upstream.close)
            response.call_on_close(session.close)
            return response
        except (requests.RequestException, ValueError):
            session.close()
            return fail("MEDIA_UNAVAILABLE", 502)

    return app


app = create_app()
