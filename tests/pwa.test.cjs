const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const root = path.join(__dirname, "..");

function worker(fetcher = async () => new Response("online")) {
  const handlers = {};
  const cache = new Map();
  const removed = [];
  const context = {
    URL, Request, Response,
    fetch: fetcher,
    self: {
      location: { origin: "https://tiktokdownloader.ph" },
      clients: { claim: async () => {} },
      addEventListener: (name, handler) => { handlers[name] = handler; },
    },
    caches: {
      open: async () => ({
        add: async (request) => { cache.set(new URL(request.url).pathname, new Response("offline")); },
        match: async (key) => cache.get(key)?.clone(),
      }),
      keys: async () => ["tiktokdownloader-offline-v0", "tiktokdownloader-offline-v1", "unrelated-cache"],
      delete: async (key) => { removed.push(key); },
    },
  };
  // Resolve root-relative URLs like the browser's Request constructor does.
  context.Request = class extends Request {
    constructor(url, options) { super(new URL(url, context.self.location.origin), options); }
  };
  vm.runInNewContext(fs.readFileSync(path.join(root, "public/sw.js"), "utf8"), context);
  const dispatch = (type) => {
    let work;
    handlers[type]({ waitUntil: (promise) => { work = promise; } });
    return work;
  };
  const navigate = (url, options = {}) => {
    let response;
    handlers.fetch({
      request: { url: new URL(url, context.self.location.origin).href, method: "GET", mode: "navigate", ...options },
      respondWith: (promise) => { response = promise; },
    });
    return response;
  };
  return { cache, removed, dispatch, navigate };
}

test("manifest has stable identity, root scope, standalone launch and valid icon dimensions", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, "public/manifest.json")));
  assert.equal(manifest.id, "/");
  assert.equal(manifest.scope, "/");
  assert.equal(manifest.start_url, "/");
  assert.equal(manifest.display, "standalone");
  for (const icon of manifest.icons) {
    const png = fs.readFileSync(path.join(root, "public", icon.src));
    assert.equal(`${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`, icon.sizes);
  }
  for (const size of [192, 512]) assert.ok(manifest.icons.some((icon) => icon.sizes === `${size}x${size}`));
  const apple = fs.readFileSync(path.join(root, "public/apple-touch-icon.png"));
  assert.equal(apple.readUInt32BE(16), 180);
  assert.equal(apple.readUInt32BE(20), 180);
});

test("installation caches only the offline fallback", async () => {
  const sw = worker();
  await sw.dispatch("install");
  assert.deepEqual([...sw.cache.keys()], ["/offline.html"]);
});

test("activation deletes only obsolete caches owned by this service worker", async () => {
  const sw = worker();
  await sw.dispatch("activate");
  assert.deepEqual(sw.removed, ["tiktokdownloader-offline-v0"]);
});

test("successful page navigations stay network-only", async () => {
  const sw = worker();
  await sw.dispatch("install");
  assert.equal(await (await sw.navigate("/about")).text(), "online");
  assert.deepEqual([...sw.cache.keys()], ["/offline.html"]);
});

test("offline navigations receive the precached fallback", async () => {
  const sw = worker(async () => { throw new Error("offline"); });
  await sw.dispatch("install");
  assert.equal(await (await sw.navigate("/about")).text(), "offline");
});

test("API, downloads, media, query URLs, RSC and cross-origin requests are never intercepted", () => {
  const sw = worker();
  for (const url of ["/api/tiktok?url=test", "/api/download", "/download", "/downloads/test", "/media/token", "/_next/image", "/video.mp4", "/sound.mp3", "/?url=test", "https://cdn.example.com/video"]) {
    assert.equal(sw.navigate(url), undefined, url);
  }
  assert.equal(sw.navigate("/about", { mode: "cors" }), undefined);
  assert.equal(sw.navigate("/about", { method: "POST" }), undefined);
});

test("server errors are not hidden by the offline fallback", async () => {
  const sw = worker(async () => new Response("server error", { status: 500 }));
  assert.equal((await sw.navigate("/")).status, 500);
});
