export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return Response.json({ error: "url required" }, { status: 400 });
  }

  const upstream = await fetch(
    `https://api-tp.threadsdownloader.com/tiktok/mediav2?url=${encodeURIComponent(videoUrl)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept: "application/json, */*",
        Referer: "https://threadsdownloader.com/",
        Origin: "https://threadsdownloader.com",
      },
    }
  ).catch(() => null);

  if (!upstream || !upstream.ok) {
    return Response.json(
      { error: "upstream failed", status: upstream?.status ?? 0 },
      { status: upstream?.status ?? 502 }
    );
  }

  const data = await upstream.json().catch(() => null);
  if (!data) {
    return Response.json({ error: "invalid json" }, { status: 502 });
  }

  return Response.json(data);
}
