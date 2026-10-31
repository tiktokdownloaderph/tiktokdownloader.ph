export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return Response.json({ error: "url required" }, { status: 400 });
  }

  try {
    const body = new URLSearchParams({
      url: videoUrl,
      hd: "1",
    });

    const res = await fetch("https://www.tikwm.com/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36",
      },
      body: body.toString(),
    });

    const raw = await res.text();

    if (!res.ok) {
      return Response.json(
        {
          error: "upstream error",
          status: res.status,
          body: raw.slice(0, 500),
        },
        { status: 502 }
      );
    }

    let json;

    try {
      json = JSON.parse(raw);
    } catch {
      return Response.json(
        {
          error: "invalid upstream response",
          body: raw.slice(0, 500),
        },
        { status: 502 }
      );
    }

    if (json.code !== 0 || !json.data) {
      return Response.json(
        {
          error: json.msg || "api failed",
          upstream: json,
        },
        { status: 422 }
      );
    }

    const d = json.data;

    return Response.json({
      hdUrl: d.hdplay || d.play || "",
      wmUrl: d.wmplay || "",
      music: d.music || "",
      audioUrl: d.music || "",
      thumbnail: d.cover || d.origin_cover || "",
      author: d.author?.nickname || "tiktok",
      authorUrl: d.author?.unique_id
        ? `https://www.tiktok.com/@${d.author.unique_id}`
        : "#",
      authorThumb: d.author?.avatar || "",
    });
  } catch (err) {
    return Response.json(
      {
        error: "proxy error",
        detail: String(err),
      },
      { status: 500 }
    );
  }
}
