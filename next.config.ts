import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/tiktok",
        destination: "https://api-tp.threadsdownloader.com/tiktok/mediav2",
      },
    ];
  },
  async redirects() {
    return [
      { source: "/about.html", destination: "/about", statusCode: 301 },
      { source: "/blog.html", destination: "/blog", statusCode: 301 },
      { source: "/contact.html", destination: "/contact", statusCode: 301 },
      { source: "/disclaimer.html", destination: "/disclaimer", statusCode: 301 },
      { source: "/privacy-policy.html", destination: "/privacy-policy", statusCode: 301 },
      { source: "/terms.html", destination: "/terms", statusCode: 301 },
      { source: "/download-tiktok-videos-sa-android.html", destination: "/download-tiktok-videos-sa-android", statusCode: 301 },
      { source: "/download-tiktok-videos-sa-iphone.html", destination: "/download-tiktok-videos-sa-iphone", statusCode: 301 },
      { source: "/download-ang-larawan-at-slide-ng-tiktok.html", destination: "/download-ang-larawan-at-slide-ng-tiktok", statusCode: 301 },
      { source: "/download-sa-pc.html", destination: "/download-sa-pc", statusCode: 301 },
      { source: "/download-tiktok-mp3.html", destination: "/download-tiktok-mp3", statusCode: 301 },
      { source: "/download-tiktok-stories.html", destination: "/download-tiktok-stories", statusCode: 301 },
      { source: "/paano-mag-download-ng-mga-video-sa-tiktok.html", destination: "/paano-mag-download-ng-mga-video-sa-tiktok", statusCode: 301 },
      { source: "/tiktok-to-mp4.html", destination: "/tiktok-to-mp4", statusCode: 301 },
    ];
  },
};

export default nextConfig;
