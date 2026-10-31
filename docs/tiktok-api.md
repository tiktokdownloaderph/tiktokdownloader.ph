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

Successful results are cached for five minutes and simultaneous requests for
the same video are combined. These are bounded **per-instance** caches; they
are not persistent or shared between serverless instances. Quota failures start
a one-minute per-instance cooldown to avoid hammering the provider. This is a
retry backoff, not a promise that the daily quota resets in one minute.

After deployment, load a public TikTok video once, check that MP4/MP3 options
appear, and download a file. Never include the API key in a public test URL.

Run the isolated mocked tests with:

```sh
node --test tests/tiktok-service.test.cjs
```
