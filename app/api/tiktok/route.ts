export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return Response.json({ error: "url required" }, { status: 400 });
  }

  try {
    const body = new URLSearchParams({ url: videoUrl, hd: "1" });

    const res = await fetch("https://www.tikwm.com/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept: "application/json",
        Referer: "https://www.tikwm.com/",
      },
      body: body.toString(),
    });

    if (!res.ok) {
      return Response.json({ error: "upstream error" }, { status: 502 });
    }

    const json = await res.json();

    if (json.code !== 0 || !json.data) {
      return Response.json(
        { error: json.msg || "api failed" },
        { status: 422 }
      );
    }

    const d = json.data;

    // Normalise to the shape Downloader.tsx + ToolDownloader.tsx expect
    return Response.json({
      hdUrl:       d.hdplay || d.play || "",
      wmUrl:       d.wmplay || "",
      music:       d.music  || "",
      audioUrl:    d.music  || "",
      thumbnail:   d.cover  || d.origin_cover || "",
      author:      d.author?.nickname  || "tiktok",
      authorUrl:   d.author?.unique_id
                     ? `https://www.tiktok.com/@${d.author.unique_id}`
                     : "#",
      authorThumb: d.author?.avatar || "",
    });
  } catch (err) {
    return Response.json({ error: "proxy error" }, { status: 500 });
  }
}
