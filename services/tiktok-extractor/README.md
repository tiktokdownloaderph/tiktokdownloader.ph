# Separate Render extractor test

This service does not change the Cloudflare website. It uses yt-dlp directly;
there is no TikWM or other shared downloader API in its extraction path.
It is an experiment, not a guarantee that TikTok permits the Render IP.

## Create the service in your own Render dashboard

Choose **New > Web Service > Git Provider**, connect GitHub, and select:

| Setting | Value |
| --- | --- |
| Repository | `tiktokdownloaderph/tiktokdownloader.ph` |
| Branch | `extractor-render-test` |
| Name | `tiktok-extractor-test` (or another available name) |
| Region | Singapore |
| Root Directory | `services/tiktok-extractor` |
| Language | Python 3 |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `gunicorn --bind 0.0.0.0:$PORT --workers 1 --threads 4 --timeout 90 --access-logfile /dev/null app:app` |
| Instance Type | **Free** |
| Health Check Path | `/health` |

Use one worker: short-lived media tokens and caches are in memory. Do not add
a database, disk, paid instance, or keep-alive cron. Keep this test off main so
unrelated website pushes do not redeploy it.

Add one environment variable before deploying:

- Name: `EXTRACTOR_API_KEY`
- Value: a unique random password of at least 32 characters. Use a password
  manager's generator. Keep it private; do not commit it or paste it into chat.

Render supplies `PORT` and `RENDER_EXTERNAL_URL` automatically. The health URL
should show `ready: true`. This only proves startup, not working extraction.

## Test a real video

In PowerShell, run this with your service URL. The password prompt is hidden:

```powershell
$base = 'https://YOUR-SERVICE.onrender.com'
$secure = Read-Host 'EXTRACTOR_API_KEY' -AsSecureString
$key = [System.Net.NetworkCredential]::new('', $secure).Password
try {
  $result = Invoke-RestMethod -Method Post -Uri "$base/extract" `
    -Headers @{ Authorization = "Bearer $key" } -ContentType 'application/json' `
    -Body '{"url":"https://www.tiktok.com/@livbedumb/video/7664638157358517534"}' `
    -TimeoutSec 120
  Invoke-WebRequest -Uri $result.hdUrl -OutFile "$env:TEMP\tiktok-render-test.mp4" -TimeoutSec 120
  Start-Process "$env:TEMP\tiktok-render-test.mp4"
} finally { $key = $null; $secure = $null }
```

Confirm that the saved file plays with sound. Send only the public service URL
and whether the test worked. Do not share the password or media token URLs.
If TikTok refuses access, stop and inspect the failure; do not rotate IPs,
import private cookies, or bypass login restrictions.

## Limits

- Render Free sleeps after 15 idle minutes; a cold start can take about a minute.
- Free hosting has bandwidth/build limits and may suspend high outbound traffic.
  Without a payment method, usage exhaustion can suspend the service rather than
  add bandwidth charges. Do not upgrade or add a payment method for this test.
- Public individual videos only, not profiles, playlists, stories, or photos.
- Highest available progressive MP4 with sound; no upscaling or watermark-removal
  claim. A native MP3 is used when available; otherwise bundled FFmpeg converts
  the video's audio to a real 128 kbps MP3 on demand. This is lossy conversion,
  not a claim to preserve the original audio bitrate.
- Only one MP3 conversion runs at a time, with bounded input size, a 30-second
  source-transfer budget and a 45-second conversion timeout. Conversion uses
  temporary files removed after the response; it consumes CPU and bandwidth.
- Media is streamed from Render (up to 150 MiB per request). This consumes its
  bandwidth. Tokens expire after ten minutes and are lost on restart.
- Extraction requires the API key. Media URLs are temporary bearer capabilities.
- Public-session cookies obtained by yt-dlp remain server-side and are reused
  for media delivery. No user login or private-account cookies are requested.
- Website integration is opt-in via server-only `EXTRACTOR_BACKEND_URL` and
  `EXTRACTOR_API_KEY` on the Cloudflare Worker. Do not expose either as a
  `NEXT_PUBLIC_` variable. See `docs/tiktok-api.md` for setup.

Run mocked tests from this folder: `python -m unittest -v test_app.py`.

References: https://render.com/docs/deploy-flask and https://render.com/docs/free
