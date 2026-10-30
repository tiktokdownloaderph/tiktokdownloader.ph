import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const homepageLastModified = new Date("2026-10-30T15:51:50+08:00");
  const otherPagesLastModified = new Date("2026-09-28");

  return [
    { url: base, lastModified: homepageLastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/blog`, lastModified: new Date("2026-10-30T13:32:07+08:00"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/is-it-safe-to-download-tiktok-videos`, lastModified: new Date("2026-10-22T14:40:35+08:00"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/bakit-malabo-ang-tiktok-video`, lastModified: new Date("2026-10-27T14:00:59+08:00"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tiktok-video-hindi-nadadownload`, lastModified: new Date("2026-10-30T13:32:07+08:00"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tiktok-to-mp4`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/download-tiktok-mp3`, lastModified: new Date("2026-10-27T14:09:57+08:00"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tiktok-photo-downloader`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-stories`, lastModified: new Date("2026-10-29T14:31:59+08:00"), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-sa-pc`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/paano-mag-download-ng-mga-video-sa-tiktok`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-videos-sa-android`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-videos-sa-iphone`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy-policy`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/disclaimer`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`, lastModified: otherPagesLastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
