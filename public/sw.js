const OFFLINE_CACHE = "tiktokdownloader-offline-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(OFFLINE_CACHE).then((cache) =>
      cache.add(new Request(OFFLINE_URL, { cache: "reload" })),
    ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith("tiktokdownloader-offline-") && name !== OFFLINE_CACHE)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Never intercept API calls, RSC requests, download URLs, or media.
  if (request.method !== "GET" || request.mode !== "navigate" ||
      url.origin !== self.location.origin || url.search ||
      /^\/(api|download|downloads|media|_next)(\/|$)/.test(url.pathname) ||
      /\.[^/]+$/.test(url.pathname)) return;

  event.respondWith((async () => {
    try {
      // Do not put the network response in Cache Storage.
      return await fetch(request);
    } catch {
      const cache = await caches.open(OFFLINE_CACHE);
      return await cache.match(OFFLINE_URL) || new Response("Walang koneksyon sa internet.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
  })());
});
