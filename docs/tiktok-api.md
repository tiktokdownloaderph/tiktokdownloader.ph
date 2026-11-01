# TikTok API access

The video route supports the authenticated API linked by TikWM:
https://tikwmapi.com/docs.html

Configure `TIKWM_API_KEY` as a **server-side secret** in the production hosting
environment. Never use a `NEXT_PUBLIC_` variable for this key or commit it.

- Vercel: add `TIKWM_API_KEY` under the project's Production environment variables,
  then redeploy.
- Cloudflare Workers: add the secret in the Worker's settings, or run
  `npx wrangler secret put TIKWM_API_KEY` for the intended production Worker.
  Enter the key at the hidden terminal prompt, not in the command itself.
- Local development: put `TIKWM_API_KEY=...` in the ignored `.env.local` file,
  then restart the development server.

With a key, the server sends `GET https://api.tikwmapi.com/?url=...&hd=1` with
the `x-tikwmapi-key` header. Without one, the existing public TikWM endpoint is
still used. No key is sent to the browser or included in error messages.

Make sure the provider account has adequate remaining quota. Adding a key does
not remove the provider's plan limits. An exhausted public quota cannot be fixed
by this code alone.

When TikWM reports quota exhaustion, a server/authentication error, or a timeout,
the route now tries the independent free API documented at
https://freeapi.pro/alldl (`GET /api/alldl?url=...`). No account or key is
required for this fallback. Only validated TikTok media URLs from `mediaInfo`
are used; promotional `links` are ignored. The response is normalized to the
existing frontend fields. Unavailable/private videos are not retried elsewhere.

Both services have independent per-instance cooldowns. The fallback is a
third-party fair-use service, not a guarantee of unlimited capacity or uptime.
It may not supply a separate watermarked version or audio for every post.
The requested public video URL is sent to the fallback only after TikWM fails.

Successful results are cached for five minutes and simultaneous requests for
the same video are combined. Bounded per-instance caches are supplemented by
the Workers Cache API, where available, to reuse successes across instances
within the same Cloudflare data center. This is best-effort regional caching,
not globally shared durable storage. Cache reads never extend signed URL lifetime,
and failures are never cached. Unavailable caches do not block the providers.

Provider cooldowns respect `Retry-After` (seconds or HTTP date), with a minimum
one-minute backoff. This is not a promise that a daily quota resets in one minute.
If both providers refuse a new video, caching cannot manufacture a valid result.

After deployment, load a public TikTok video once, check that MP4/MP3 options
appear, and download a file. Never include the API key in a public test URL.

Run the isolated mocked tests with:

```sh
node --test tests/tiktok-service.test.cjs
```
