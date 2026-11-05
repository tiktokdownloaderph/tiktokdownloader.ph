# PWA

- Manifest: `/manifest.json`, stable app ID and scope `/`, standalone start URL `/`.
- Install controls are in the shared footer. Chromium's button appears only after
  `beforeinstallprompt`; dismissing consumes that event. Installed/standalone
  windows hide the control. iPhone/iPad visitors get Safari Home Screen steps.
- `/sw.js` registers in production only, over HTTPS (or trusted localhost).
  Development does not register a worker, avoiding stale development bundles.
- Cache Storage contains only `/offline.html`. No visited pages, API responses,
  download requests, media, Next.js resources, or external requests are cached
  by the worker. Ordinary browser HTTP caching is separate.
- Navigation failures show the offline fallback. Downloads still require internet.
  HTTP errors are returned unchanged, rather than masked as offline pages.
- The worker does not force reloads or skip waiting. Changed workers activate
  when old clients close. Bump the offline cache version when editing the fallback.
- `node --test tests/pwa.test.cjs` checks cache boundaries, fallback, and icons.

## Device acceptance checks after deployment

1. Android Chrome: visit over HTTPS, use the footer install button when offered,
   confirm installation, and launch from the Home Screen. Verify no browser bar.
2. iPhone Safari: expand footer instructions, Share > Add to Home Screen > Add.
   Enable Open as Web App if offered. Launch the new icon and verify standalone.
3. Desktop Chrome/Edge: install using the footer button or browser install icon,
   launch from the app shortcut, and confirm the install button is hidden.
4. On each device, open once online, close it, disable internet, and relaunch.
   Confirm the offline message, reconnect, and choose Subukan muli.
5. Online, test loading a public video and downloading MP4/MP3. Inspect Cache
   Storage: only the offline fallback should be present. Confirm network-only
   API/media requests fail normally offline and never return cached media.

Browser emulation and simulated install events do not prove native OS installation.
Real device installation and launch checks must be recorded separately.
