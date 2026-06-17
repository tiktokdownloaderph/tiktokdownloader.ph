export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const videoUrl = searchParams.get('url');
  const filename = searchParams.get('filename') || 'TikTokDownloader.mp4';

  if (!videoUrl || (!videoUrl.includes('tiktok') && !videoUrl.includes('tiktokcdn') && !videoUrl.includes('muscdn'))) {
    return new Response('Invalid URL', { status: 400 });
  }

  try {
    const upstream = await fetch(videoUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });

    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);
    headers.set('Content-Type', upstream.headers.get('Content-Type') || 'video/mp4');
    const cl = upstream.headers.get('Content-Length');
    if (cl) headers.set('Content-Length', cl);

    return new Response(upstream.body, { status: upstream.status, headers });
  } catch (e) {
    return new Response('Download failed', { status: 500 });
  }
}
