type JsonObject = Record<string, unknown>;
type ApiResult = { status: number; body: JsonObject; retryAfter?: number; fallbackStatus?: string };
type SharedCache = Pick<Cache, "match" | "put">;
type ExtractorConfig = { url: string; key: string };
type Options = { fetcher?: typeof fetch; now?: () => number; getApiKey?: () => string | undefined; freeFallback?: boolean; getSharedCache?: () => SharedCache | undefined; getExtractor?: () => ExtractorConfig | undefined };

export function getExtractorConfig(): ExtractorConfig | undefined {
  try {
    const url = new URL(process.env.EXTRACTOR_BACKEND_URL || "");
    const key = process.env.EXTRACTOR_API_KEY?.trim();
    if (url.protocol !== "https:" || !url.hostname.endsWith(".onrender.com") || url.username || url.password || url.port || url.pathname !== "/" || url.search || url.hash || !key || key.length < 32) return undefined;
    return { url: url.origin, key };
  } catch { return undefined; }
}

export function isExtractorMediaUrl(value: string, base: string): boolean {
  try {
    const url = new URL(value);
    return url.origin === new URL(base).origin && !url.username && !url.password && !url.search && !url.hash && /^\/media\/[A-Za-z0-9_-]{43}$/.test(url.pathname);
  } catch { return false; }
}

const CACHE_TTL = 5 * 60 * 1000;
const MAX_ENTRIES = 256;
const COOLDOWN = 60 * 1000;

function object(value: unknown): JsonObject {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value as JsonObject : {};
}

function string(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function normalizeUrl(value: string): { url: string; id: string } | null {
  if (/^\d{10,25}$/.test(value)) return { url: value, id: value };
  try {
    const url = new URL(value);
    const allowed = ["tiktok.com", "douyin.com", "iesdouyin.com"].some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
    if (!allowed || !["https:", "http:"].includes(url.protocol) || url.username || url.password || url.port) return null;
    url.protocol = "https:";
    url.hash = "";
    const videoId = url.pathname.match(/\/(?:video|photo|v)\/(\d+)/)?.[1];
    if (videoId) url.search = "";
    return { url: url.toString(), id: videoId || url.toString() };
  } catch {
    return null;
  }
}

// Memory caches deduplicate within an instance; Workers Cache also reuses successes across instances in a data center.
export function createTikTokService(options: Options = {}) {
  const fetcher = options.fetcher ?? fetch;
  const now = options.now ?? Date.now;
  const getApiKey = options.getApiKey ?? (() => process.env.TIKWM_API_KEY);
  const getExtractor = options.getExtractor ?? getExtractorConfig;
  const getSharedCache = options.getSharedCache ?? (() => (globalThis as typeof globalThis & { caches?: CacheStorage & { default?: SharedCache } }).caches?.default);
  const cache = new Map<string, { expires: number; result: ApiResult }>();
  const pending = new Map<string, Promise<ApiResult>>();
  const blockedUntil = new Map<string, number>();

  async function load(value: string): Promise<ApiResult> {
    const input = normalizeUrl(value.trim());
    if (!input) return { status: 400, body: { code: "INVALID_URL", error: "A valid TikTok video link is required." } };
    const apiKey = getApiKey()?.trim();
    const provider = apiKey ? "authenticated" : "public";
    const extractor = getExtractor();
    const useExtractor = extractor && (/^\d+$/.test(input.url) || /https:\/\/(?:www\.)?tiktok\.com\/@[^/]+\/video\/\d+/.test(input.url) || /https:\/\/(?:vm|vt)\.tiktok\.com\//.test(input.url));
    const ttl = useExtractor ? 60 * 1000 : CACHE_TTL;
    const key = `${useExtractor ? `render-mp3-v1:${extractor.url}` : provider}:${input.id}`;
    const cached = cache.get(key);
    if (cached && cached.expires > now()) return cached.result;
    if (cached) cache.delete(key);
    const cooldown = (blockedUntil.get(provider) ?? 0) - now();
    const existing = pending.get(key);
    if (existing) return existing;
    if (pending.size >= 20) return { status: 503, body: { code: "SERVICE_BUSY", error: "Video service is busy. Please try again shortly." }, retryAfter: 10 };
    let sharedExpires: number | undefined;
    const task = (async () => {
      try {
        const shared = await getSharedCache()?.match(sharedKey(key));
        if (shared) {
          const entry = object(await shared.json());
          const result = object(entry.result);
          if (typeof entry.expires === "number" && entry.expires > now() && result.status === 200 && string(object(result.body).hdUrl).startsWith("https://")) {
            sharedExpires = entry.expires;
            return result as ApiResult;
          }
        }
      } catch { /* Cache availability must not prevent a provider request. */ }
      if (useExtractor) {
        const extracted = await requestExtractor(input.url, extractor);
        if (extracted.status === 200 || extracted.status === 422) return extracted;
      }
      const primary: ApiResult = cooldown > 0
        ? { status: 503, body: { code: "UPSTREAM_LIMIT", error: "Video service capacity is temporarily unavailable." }, retryAfter: Math.ceil(cooldown / 1000) }
        : await request(input.url, apiKey, provider);
      if (primary.status < 500 || options.freeFallback === false) return primary;
      const fallback = await freeApi(input.url);
      return fallback.status === 200 ? fallback : { ...primary, fallbackStatus: fallback.fallbackStatus, retryAfter: Math.max(primary.retryAfter ?? 0, fallback.retryAfter ?? 0) || undefined };
    })();
    pending.set(key, task);
    try {
      const result = await task;
      if (result.status === 200) {
        for (const [entryKey, entry] of cache) if (entry.expires <= now()) cache.delete(entryKey);
        if (cache.size >= MAX_ENTRIES) cache.delete(cache.keys().next().value!);
        cache.set(key, { expires: sharedExpires ?? now() + ttl, result });
        try {
          if (!sharedExpires) await getSharedCache()?.put(sharedKey(key), Response.json({ expires: now() + ttl, result }, {
            headers: { "Cache-Control": `public, max-age=${ttl / 1000}` },
          }));
        } catch { /* Return a successful download even if the edge cache cannot be written. */ }
      }
      return result;
    } finally {
      pending.delete(key);
    }
  }

  async function requestExtractor(value: string, config: ExtractorConfig): Promise<ApiResult> {
    try {
      const response = await fetcher(`${config.url}/extract`, {
        method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.key}` },
        body: JSON.stringify({ url: /^\d+$/.test(value) ? `https://www.tiktok.com/@_/video/${value}` : value }),
        signal: AbortSignal.timeout(120000), cache: "no-store", redirect: "manual",
      });
      const data = object(await response.json());
      if (!response.ok) {
        if (data.reason === "SOURCE_RESTRICTED") return { status: 422, body: { code: "VIDEO_UNAVAILABLE", error: "This public video is unavailable." } };
        return { status: 503, body: { code: "SERVICE_UNAVAILABLE", error: "Video service is temporarily unavailable." } };
      }
      const hdUrl = string(data.hdUrl), audioUrl = string(data.audioUrl);
      if (!isExtractorMediaUrl(hdUrl, config.url) || (audioUrl && !isExtractorMediaUrl(audioUrl, config.url))) throw new Error("Invalid extractor media");
      return { status: 200, fallbackStatus: "render", body: {
        hdUrl, wmUrl: "", audioUrl, music: audioUrl,
        thumbnail: string(data.thumbnail), author: string(data.author) || "tiktok",
        authorUrl: string(data.authorUrl) || "#", authorThumb: string(data.authorThumb),
      } };
    } catch { return { status: 503, body: { code: "SERVICE_UNAVAILABLE", error: "Video service is temporarily unavailable." } }; }
  }

  function sharedKey(key: string) {
    return `https://tiktokdownloader.ph/__video-cache/v1/${encodeURIComponent(key)}`;
  }

  function retrySeconds(response: Response) {
    const value = response.headers.get("retry-after");
    if (!value) return 60;
    const seconds = /^\d+$/.test(value) ? Number(value) : Math.ceil((Date.parse(value) - now()) / 1000);
    return Number.isFinite(seconds) ? Math.max(60, seconds) : 60;
  }

  async function freeApi(value: string): Promise<ApiResult> {
    const failed = (fallbackStatus: string, retryAfter?: number): ApiResult => ({ status: 503, body: {}, fallbackStatus, retryAfter });
    const remaining = Math.ceil(((blockedUntil.get("freeapi") ?? 0) - now()) / 1000);
    if (remaining > 0) return failed("cooldown", remaining);
    const target = /^\d+$/.test(value) ? `https://www.tiktok.com/@_/video/${value}` : value;
    if (!new URL(target).hostname.endsWith("tiktok.com")) return failed("unsupported");
    try {
      // Independent, documented free API. Never follow the promotional links in its response.
      const response = await fetcher(`https://freeapi.pro/api/alldl?${new URLSearchParams({ url: target })}`, {
        headers: { Accept: "application/json" }, signal: AbortSignal.timeout(15000), cache: "no-store", redirect: "manual",
      });
      if (!response.ok) {
        const retryAfter = retrySeconds(response);
        await response.body?.cancel();
        blockedUntil.set("freeapi", now() + retryAfter * 1000);
        return failed(`http-${response.status}`, retryAfter);
      }
      if (!response.headers.get("content-type")?.includes("application/json")) {
        await response.body?.cancel();
        blockedUntil.set("freeapi", now() + COOLDOWN);
        return failed("non-json-response");
      }
      const json = object(await response.json());
      if (json.success !== true) { blockedUntil.set("freeapi", now() + COOLDOWN); return failed("provider-error"); }
      const info = object(json.mediaInfo);
      const media = (value: unknown) => {
        try {
          const url = new URL(string(value));
          const allowed = ["tiktok.com", "tiktokcdn.com", "tiktokcdn-us.com", "tiktokcdn-eu.com", "muscdn.com"].some(host => url.hostname === host || url.hostname.endsWith(`.${host}`));
          return allowed && url.protocol === "https:" && !url.username && !url.password && !url.port ? url.toString() : "";
        } catch { return ""; }
      };
      const playback = media(info.videoUrl);
      if (!playback) return failed("no-video");
      const audio = media(info.audioUrl) || media(info.musicUrl);
      const author = object(info.author);
      return { status: 200, fallbackStatus: "success", body: {
        hdUrl: playback, wmUrl: "", music: audio, audioUrl: audio,
        thumbnail: media(info.thumbnail) || media(info.coverImage),
        author: string(author.nickname) || string(info.authorName) || "tiktok",
        authorUrl: string(author.unique_id) ? `https://www.tiktok.com/@${encodeURIComponent(string(author.unique_id))}` : "#",
        authorThumb: media(author.avatar),
      } };
    } catch (error) {
      blockedUntil.set("freeapi", now() + COOLDOWN);
      const name = error instanceof Error ? error.name : "unknown";
      const message = error instanceof Error ? error.message : "";
      const reason = /redirect/i.test(message) ? "redirect" : /certificate|SSL|TLS/i.test(message) ? "tls" : /cache/i.test(message) ? "cache" : /1042|cross.worker/i.test(message) ? "worker-routing" : "request";
      return failed(`${reason}-${["SyntaxError", "TypeError", "TimeoutError", "AbortError"].includes(name) ? name : "error"}`);
    }
  }

  async function request(videoUrl: string, apiKey: string | undefined, provider: string): Promise<ApiResult> {
    try {
      const params = new URLSearchParams({ url: videoUrl, hd: "1" });
      const response = apiKey
        ? await fetcher(`https://api.tikwmapi.com/?${params}`, {
          headers: { Accept: "application/json", "x-tikwmapi-key": apiKey },
          signal: AbortSignal.timeout(20000), cache: "no-store",
        })
        : await fetcher("https://www.tikwm.com/api/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json", Referer: "https://www.tikwm.com/" },
          body: params.toString(), signal: AbortSignal.timeout(20000), cache: "no-store",
        });
      let json: JsonObject = {};
      try { json = object(await response.json()); } catch { /* Upstream may return a non-JSON error page. */ }
      const limited = response.status === 429 || (json.code !== 0 && /limit|quota|too many|exceed/i.test(string(json.msg)));
      if (limited) {
        const retryAfter = retrySeconds(response);
        blockedUntil.set(provider, now() + retryAfter * 1000);
        return { status: 503, body: { code: "UPSTREAM_LIMIT", error: "Video service capacity is temporarily unavailable." }, retryAfter };
      }
      if (!response.ok) return { status: 503, body: { code: "SERVICE_UNAVAILABLE", error: "Video service is temporarily unavailable." } };
      if (typeof json.code !== "number" || (json.code !== 0 && /api.?key|token|auth|subscription|balance|credit|permission|plan/i.test(string(json.msg)))) {
        return { status: 503, body: { code: "SERVICE_UNAVAILABLE", error: "Video service is temporarily unavailable." } };
      }
      if (json.code !== 0 || !json.data) return { status: 422, body: { code: "VIDEO_UNAVAILABLE", error: "This video could not be retrieved. Check that it is public and the link is correct." } };
      const d = object(json.data);
      const author = object(d.author);
      const music = string(d.music);
      return { status: 200, body: {
        hdUrl: string(d.hdplay) || string(d.play),
        wmUrl: string(d.wmplay), music, audioUrl: music,
        thumbnail: string(d.cover) || string(d.origin_cover),
        author: string(author.nickname) || "tiktok",
        authorUrl: string(author.unique_id) ? `https://www.tiktok.com/@${encodeURIComponent(string(author.unique_id))}` : "#",
        authorThumb: string(author.avatar),
      } };
    } catch (error) {
      const timeout = error instanceof Error && ["TimeoutError", "AbortError"].includes(error.name);
      return { status: timeout ? 504 : 503, body: { code: timeout ? "UPSTREAM_TIMEOUT" : "SERVICE_UNAVAILABLE", error: "Video service is temporarily unavailable." } };
    }
  }

  return { load };
}
