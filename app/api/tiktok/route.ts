import { createTikTokService } from "@/lib/tiktok-service";

export const runtime = "nodejs";
const service = createTikTokService();

export async function GET(request: Request) {
  const videoUrl = new URL(request.url).searchParams.get("url");
  if (!videoUrl) return Response.json({ code: "INVALID_URL", error: "url required" }, { status: 400 });
  const result = await service.load(videoUrl);
  const headers: Record<string, string> = { "Cache-Control": "no-store" };
  if (result.retryAfter) headers["Retry-After"] = String(result.retryAfter);
  return Response.json(result.body, { status: result.status, headers });
}
