import { createTikTokService } from "@/lib/tiktok-service";

export const runtime = "nodejs";
const service = createTikTokService();

export async function GET(request: Request) {
  const videoUrl = new URL(request.url).searchParams.get("url");
  const headers: Record<string, string> = {
    "Cache-Control": "no-store",
    "X-Video-Access": process.env.TIKWM_API_KEY?.trim() ? "keyed" : "public",
  };
  if (!videoUrl) return Response.json({ code: "INVALID_URL", error: "url required" }, { status: 400, headers });
  const result = await service.load(videoUrl);
  if (result.fallbackStatus) headers["X-Video-Fallback"] = result.fallbackStatus;
  if (result.retryAfter) headers["Retry-After"] = String(result.retryAfter);
  return Response.json(result.body, { status: result.status, headers });
}
