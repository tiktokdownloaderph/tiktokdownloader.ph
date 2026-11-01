import unittest
from unittest.mock import Mock, patch

from app import create_app

URL = "https://www.tiktok.com/@livbedumb/video/7664638157358517534"
KEY = "test-only-key-not-a-real-secret-123456789"
HEADERS = {"Authorization": "Bearer " + KEY}


def info():
    return {"uploader": "Creator", "formats": [
        {"url": "https://v.tiktokcdn.com/720.mp4", "vcodec": "h264", "acodec": "aac", "ext": "mp4", "height": 720},
        {"url": "https://v.tiktokcdn.com/1080.mp4", "vcodec": "h264", "acodec": "aac", "ext": "mp4", "height": 1080},
        {"url": "https://v.tiktokcdn.com/audio.mp3", "vcodec": "none", "acodec": "mp3", "ext": "mp3"},
    ]}


class ExtractorTests(unittest.TestCase):
    def setUp(self):
        self.time = 0
        self.extractor = Mock(side_effect=lambda url: info())
        self.app = create_app(self.extractor, lambda: self.time)
        self.app.config.update(TESTING=True, API_KEY=KEY, PUBLIC_BASE_URL="https://test.onrender.com")
        self.client = self.app.test_client()

    def load(self, url=URL):
        return self.client.post("/extract", json={"url": url}, headers=HEADERS)

    def test_authentication_and_health(self):
        self.assertEqual(self.client.get("/health").status_code, 200)
        self.assertEqual(self.client.post("/extract", json={"url": URL}).status_code, 401)
        self.app.config["API_KEY"] = ""
        self.assertEqual(self.client.get("/health").status_code, 503)
        self.assertEqual(self.load().status_code, 503)
        self.extractor.assert_not_called()

    def test_rejects_profiles_playlists_private_networks_and_host_spoofing(self):
        for url in ["https://127.0.0.1/", "https://tiktok.com.evil.test/@x/video/7664638157358517534", "https://www.tiktok.com/@x", "https://www.tiktok.com/@x/photo/7664638157358517534", "http://www.tiktok.com/@x/video/7664638157358517534", "https://user:pass@www.tiktok.com/@x/video/7664638157358517534"]:
            self.assertEqual(self.load(url).status_code, 400)
        self.extractor.assert_not_called()

    def test_normalization_cache_and_real_audio(self):
        result = self.load().get_json()
        self.assertTrue(result["hdUrl"].startswith("https://test.onrender.com/media/"))
        self.assertTrue(result["audioUrl"])
        self.assertEqual(result["wmUrl"], "")
        self.assertEqual(self.load(URL + "?lang=en").get_json(), result)
        self.assertEqual(self.extractor.call_count, 1)
        self.time = 241
        self.assertNotEqual(self.load().get_json()["hdUrl"], result["hdUrl"])

    def test_missing_audio_is_not_faked(self):
        self.extractor.side_effect = lambda url: {"formats": info()["formats"][:2]}
        self.assertEqual(self.load().get_json()["audioUrl"], "")

    def test_no_video_and_failures_do_not_leak_details(self):
        self.extractor.side_effect = lambda url: {"formats": []}
        self.assertEqual(self.load().status_code, 422)
        self.extractor.side_effect = RuntimeError("private upstream cookie")
        response = self.load()
        self.assertEqual(response.status_code, 502)
        self.assertNotIn("cookie", response.get_data(as_text=True))

    def test_invalid_and_expired_media(self):
        self.assertEqual(self.client.get("/media/unknown").status_code, 410)
        path = self.load().get_json()["hdUrl"].replace("https://test.onrender.com", "")
        self.time = 601
        self.assertEqual(self.client.get(path).status_code, 410)

    def test_extraction_failures_have_safe_diagnostics(self):
        for message, reason in [("HTTP Error 403: secret URL", "SOURCE_BLOCKED"), ("HTTP Error 429", "SOURCE_RATE_LIMIT"), ("Login required", "SOURCE_RESTRICTED"), ("Unable to extract webpage video data", "SOURCE_RESPONSE_UNREADABLE")]:
            self.extractor.side_effect = RuntimeError(message)
            response = self.load()
            self.assertEqual(response.status_code, 502)
            self.assertEqual(response.get_json()["reason"], reason)
            self.assertNotIn("secret URL", response.get_data(as_text=True))

    @patch("app.requests.Session")
    def test_media_uses_best_format_and_streams_bytes(self, session_class):
        path = self.load().get_json()["hdUrl"].replace("https://test.onrender.com", "")
        upstream = Mock(status_code=200, headers={"Content-Type": "video/mp4", "Content-Length": "4"})
        upstream.iter_content.return_value = [b"test"]
        session_class.return_value.get.return_value = upstream
        response = self.client.get(path)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b"test")
        self.assertEqual(session_class.return_value.get.call_args.args[0], "https://v.tiktokcdn.com/1080.mp4")
        upstream.close.assert_called()

    @patch("app.requests.Session")
    def test_media_rejects_redirects_to_private_network(self, session_class):
        path = self.load().get_json()["hdUrl"].replace("https://test.onrender.com", "")
        session_class.return_value.get.return_value = Mock(status_code=302, headers={"Location": "https://127.0.0.1/private"})
        self.assertEqual(self.client.get(path).status_code, 502)
        self.assertEqual(session_class.return_value.get.call_count, 1)

    @patch("app.requests.Session")
    def test_public_session_cookies_stay_server_side_and_reach_media_request(self, session_class):
        cookie = object()
        self.extractor.side_effect = lambda url: {**info(), "_media_cookies": [cookie]}
        response = self.load()
        self.assertNotIn("_media_cookies", response.get_json())
        path = response.get_json()["hdUrl"].replace("https://test.onrender.com", "")
        upstream = Mock(status_code=200, headers={"Content-Type": "video/mp4"})
        upstream.iter_content.return_value = [b"test"]
        session_class.return_value.get.return_value = upstream
        self.assertEqual(self.client.get(path).data, b"test")
        session_class.return_value.cookies.set_cookie.assert_called_once_with(cookie)

    def test_rate_limit_and_request_size(self):
        for i in range(20):
            self.load(URL[:-2] + str(10 + i))
        self.assertEqual(self.load().status_code, 429)
        self.assertEqual(self.client.post("/extract", data="x" * 5000, content_type="application/json", headers=HEADERS).status_code, 413)


if __name__ == "__main__":
    unittest.main()
