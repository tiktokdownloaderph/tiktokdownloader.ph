const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

function loadTypeScript(file) {
  const filename = path.resolve(__dirname, '..', file);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  loaded._compile(compiled, filename);
  return loaded.exports;
}

const { createTikTokService } = loadTypeScript('lib/tiktok-service.ts');
const url = 'https://www.tiktok.com/@test/video/7231338487075638570';
const success = () => Response.json({ code: 0, data: {
  play: 'https://v.tiktokcdn.com/video.mp4', hdplay: 'https://v.tiktokcdn.com/hd.mp4',
  wmplay: 'https://v.tiktokcdn.com/wm.mp4', music: 'https://v.tiktokcdn.com/audio.mp3',
  cover: 'https://p.tiktokcdn.com/cover.jpg', author: { nickname: 'Test', unique_id: 'test', avatar: 'https://p.tiktokcdn.com/avatar.jpg' },
} });

test('validates links before making an upstream request', async () => {
  let calls = 0;
  const api = createTikTokService({ fetcher: async () => { calls++; return success(); } });
  for (const input of ['bad', 'https://tiktok.com.evil.example/video/123', 'https://evil.example/?tiktok.com', 'https://user:pass@www.tiktok.com/video/123']) assert.equal((await api.load(input)).status, 400);
  assert.equal(calls, 0);
});

test('keyed API uses the documented header and preserves the existing fields', async () => {
  const api = createTikTokService({ getApiKey: () => 'test-secret', fetcher: async (input, options) => {
    const target = new URL(input);
    assert.equal(target.origin, 'https://api.tikwmapi.com');
    assert.equal(target.searchParams.get('url'), url);
    assert.equal(target.searchParams.get('hd'), '1');
    assert.equal(options.headers['x-tikwmapi-key'], 'test-secret');
    assert.ok(!target.toString().includes('test-secret'));
    return success();
  } });
  const result = await api.load(url);
  assert.equal(result.status, 200);
  assert.equal(result.body.hdUrl, 'https://v.tiktokcdn.com/hd.mp4');
  assert.equal(result.body.audioUrl, result.body.music);
  assert.ok(!JSON.stringify(result).includes('test-secret'));
});

test('preserves public access when no key is configured', async () => {
  const api = createTikTokService({ getApiKey: () => undefined, fetcher: async (input, options) => {
    assert.equal(input, 'https://www.tikwm.com/api/');
    assert.equal(options.method, 'POST');
    assert.equal(new URLSearchParams(options.body).get('url'), url);
    return success();
  } });
  assert.equal((await api.load(url)).status, 200);
});

test('deduplicates concurrent requests and ignores direct-video tracking parameters', async () => {
  let calls = 0;
  let finish;
  const waiting = new Promise(resolve => { finish = resolve; });
  const api = createTikTokService({ fetcher: async () => { calls++; await waiting; return success(); } });
  const first = api.load(url + '?is_from_webapp=1');
  const second = api.load(url + '?share_app_id=123');
  finish();
  assert.equal((await first).status, 200);
  assert.equal((await second).status, 200);
  assert.equal((await api.load(url)).status, 200);
  assert.equal(calls, 1);
});

test('successful cache entries expire', async () => {
  let time = 0, calls = 0;
  const api = createTikTokService({ now: () => time, fetcher: async () => { calls++; return success(); } });
  await api.load(url);
  time = 5 * 60 * 1000 + 1;
  await api.load(url);
  assert.equal(calls, 2);
});

test('cache is bounded and evicts old entries', async () => {
  let calls = 0;
  const api = createTikTokService({ fetcher: async () => { calls++; return success(); } });
  for (let i = 0; i < 257; i++) await api.load(String(10000000000 + i));
  await api.load('10000000000');
  assert.equal(calls, 258);
});

test('quota responses are temporary service errors with a provider-wide cooldown', async () => {
  let time = 0, calls = 0;
  const api = createTikTokService({ now: () => time, fetcher: async () => {
    calls++;
    return Response.json({ code: -1, msg: 'Free Api Limit: 10000 request/ 1 day.' });
  } });
  const result = await api.load(url);
  assert.equal(result.status, 503);
  assert.equal(result.body.code, 'UPSTREAM_LIMIT');
  assert.equal(result.retryAfter, 60);
  await api.load('https://www.tiktok.com/@other/video/7231338487075638571');
  assert.equal(calls, 1);
  time = 60001;
  await api.load(url);
  assert.equal(calls, 2);
});

test('recognizes HTTP 429 even without JSON', async () => {
  const api = createTikTokService({ fetcher: async () => new Response('Too many requests', { status: 429 }) });
  assert.equal((await api.load(url)).body.code, 'UPSTREAM_LIMIT');
});

test('invalid credentials never leak upstream messages or keys', async () => {
  const api = createTikTokService({ getApiKey: () => 'test-secret', fetcher: async () => Response.json({ msg: 'Invalid test-secret' }, { status: 401 }) });
  const result = await api.load(url);
  assert.equal(result.status, 503);
  assert.ok(!JSON.stringify(result).includes('test-secret'));
});

test('timeouts are recoverable and do not poison the cache', async () => {
  let calls = 0;
  const api = createTikTokService({ fetcher: async () => {
    if (calls++ === 0) throw new DOMException('Timed out', 'TimeoutError');
    return success();
  } });
  assert.equal((await api.load(url)).status, 504);
  assert.equal((await api.load(url)).status, 200);
});

test('JSON authentication failures and malformed responses are service errors', async () => {
  for (const response of [Response.json({ code: -1, msg: 'API key is invalid' }), new Response('<html>Upstream challenge</html>')]) {
    const api = createTikTokService({ fetcher: async () => response });
    assert.equal((await api.load(url)).status, 503);
  }
});

test('distinguishes unavailable videos from provider outages', async () => {
  const api = createTikTokService({ fetcher: async () => Response.json({ code: -1, msg: 'Video is private' }) });
  const result = await api.load(url);
  assert.equal(result.status, 422);
  assert.equal(result.body.code, 'VIDEO_UNAVAILABLE');
});

test('client quota message does not blame the video link', async () => {
  const { fetchVideoDetails } = loadTypeScript('lib/fetch-video-details.ts');
  const originalFetch = global.fetch;
  try {
    global.fetch = async () => Response.json({ code: 'UPSTREAM_LIMIT' }, { status: 503 });
    await assert.rejects(fetchVideoDetails(url), /Hindi ito problema sa iyong link/);
  } finally {
    global.fetch = originalFetch;
  }
});
