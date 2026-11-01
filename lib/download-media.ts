import { getExtractorConfig, isExtractorMediaUrl } from "@/lib/tiktok-service";

type Options = { fetcher?: typeof fetch; getExtractor?: typeof getExtractorConfig };

export function createDownloadHandler(options: Options = {}) {
  const fetcher = options.fetcher ?? fetch;
  const getExtractor = options.getExtractor ?? getExtractorConfig;
  return async function download(request: Request) {
    const params = new URL(request.url).searchParams;
    const value = params.get("url");
    const filename = (params.get("filename") || "TikTokDownloader.mp4").replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 120);
    const config = getExtractor();
    const allowed = (value: string) => {
      try {
        const url = new URL(value);
        if (url.protocol !== "https:" || url.username || url.password || url.port) return false;
        if (config && isExtractorMediaUrl(value, config.url)) return true;
        return ["tiktok.com", "tiktokcdn.com", "tiktokcdn-us.com", "tiktokcdn-eu.com", "muscdn.com", "tikwm.com"].some(host => url.hostname === host || url.hostname.endsWith(`.${host}`));
      } catch { return false; }
    };
    if (!value || !allowed(value)) return new Response("Invalid URL", { status: 400 });
    try {
      let target = value;
      const signal = AbortSignal.timeout(120000);
      for (let hop = 0; hop < 5; hop++) {
        if (!allowed(target)) return new Response("Invalid redirect", { status: 502 });
        const upstream = await fetcher(target, {
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
          redirect: "manual", cache: "no-store", signal,
        });
        if ([301, 302, 303, 307, 308].includes(upstream.status)) {
          const location = upstream.headers.get("location");
          await upstream.body?.cancel();
          if (!location) return new Response("Invalid redirect", { status: 502 });
          target = new URL(location, target).toString();
          continue;
        }
        const mime = upstream.headers.get("content-type") || "";
        if (!upstream.ok || !/^(video|audio)\//i.test(mime)) {
          await upstream.body?.cancel();
          return new Response("Download unavailable. Please load the video again.", { status: upstream.status === 410 ? 410 : upstream.status === 503 ? 503 : 502, headers: { "Cache-Control": "no-store" } });
        }
        const headers = new Headers({ "Content-Type": mime, "Content-Disposition": `attachment; filename="${filename}"`, "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
        const length = upstream.headers.get("content-length");
        if (length && /^\d+$/.test(length)) headers.set("Content-Length", length);
        return new Response(upstream.body, { status: upstream.status, headers });
      }
      return new Response("Too many redirects", { status: 502 });
    } catch { return new Response("Download failed", { status: 502 }); }
  };
}
