type JsonObject = Record<string, unknown>;
type ApiResult = { status: number; body: JsonObject; retryAfter?: number; fallbackStatus?: string };
type Options = { fetcher?: typeof fetch; now?: () => number; getApiKey?: () => string | undefined; freeFallback?: boolean };

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

// These bounded caches are per server instance, not a global/persistent quota store.
export function createTikTokService(options: Options = {}) {
  const fetcher = options.fetcher ?? fetch;
  const now = options.now ?? Date.now;
  const getApiKey = options.getApiKey ?? (() => process.env.TIKWM_API_KEY);
  const cache = new Map<string, { expires: number; result: ApiResult }>();
  const pending = new Map<string, Promise<ApiResult>>();
  const blockedUntil = new Map<string, number>();

  async function load(value: string): Promise<ApiResult> {
    const input = normalizeUrl(value.trim());
    if (!input) return { status: 400, body: { code: "INVALID_URL", error: "A valid TikTok video link is required." } };
    const apiKey = getApiKey()?.trim();
    const provider = apiKey ? "authenticated" : "public";
    const key = `${provider}:${input.id}`;
    const cached = cache.get(key);
    if (cached && cached.expires > now()) return cached.result;
    if (cached) cache.delete(key);
    const cooldown = (blockedUntil.get(provider) ?? 0) - now();
    const existing = pending.get(key);
    if (existing) return existing;
    if (pending.size >= 20) return { status: 503, body: { code: "SERVICE_BUSY", error: "Video service is busy. Please try again shortly." }, retryAfter: 10 };
    const task = (async () => {
      const primary: ApiResult = cooldown > 0
        ? { status: 503, body: { code: "UPSTREAM_LIMIT", error: "Video service capacity is temporarily unavailable." }, retryAfter: Math.ceil(cooldown / 1000) }
        : await request(input.url, apiKey, provider);
      if (primary.status < 500 || options.freeFallback === false) return primary;
      const fallback = await freeApi(input.url);
      return fallback.status === 200 ? fallback : { ...primary, fallbackStatus: fallback.fallbackStatus };
    })();
    pending.set(key, task);
    try {
      const result = await task;
      if (result.status === 200) {
        for (const [entryKey, entry] of cache) if (entry.expires <= now()) cache.delete(entryKey);
        if (cache.size >= MAX_ENTRIES) cache.delete(cache.keys().next().value!);
        cache.set(key, { expires: now() + CACHE_TTL, result });
      }
      return result;
    } finally {
      pending.delete(key);
    }
  }

  async function freeApi(value: string): Promise<ApiResult> {
    const failed = (fallbackStatus: string): ApiResult => ({ status: 503, body: {}, fallbackStatus });
    if ((blockedUntil.get("freeapi") ?? 0) > now()) return failed("cooldown");
    const target = /^\d+$/.test(value) ? `https://www.tiktok.com/@_/video/${value}` : value;
    if (!new URL(target).hostname.endsWith("tiktok.com")) return failed("unsupported");
    try {
      // Independent, documented free API. Never follow the promotional links in its response.
      const response = await fetcher(`https://freeapi.pro/api/alldl?${new URLSearchParams({ url: target })}`, {
        headers: { Accept: "application/json" }, signal: AbortSignal.timeout(15000), cache: "no-store", redirect: "error",
      });
      if (!response.ok) {
        await response.body?.cancel();
        blockedUntil.set("freeapi", now() + COOLDOWN);
        return failed(`http-${response.status}`);
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
    } catch { blockedUntil.set("freeapi", now() + COOLDOWN); return failed("connection-or-json"); }
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
        blockedUntil.set(provider, now() + COOLDOWN);
        return { status: 503, body: { code: "UPSTREAM_LIMIT", error: "Video service capacity is temporarily unavailable." }, retryAfter: 60 };
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
