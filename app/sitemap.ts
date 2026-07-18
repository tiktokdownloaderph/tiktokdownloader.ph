import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tiktokdownloader.ph";
  const today = new Date("2026-07-18");

  return [
    { url: `${base}/`, lastModified: today, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tiktok-to-mp4`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/download-tiktok-mp3`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/download-ang-larawan-at-slide-ng-tiktok`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-stories`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-sa-pc`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/paano-mag-download-ng-mga-video-sa-tiktok`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-videos-sa-android`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-videos-sa-iphone`, lastModified: today, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy-policy`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/disclaimer`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
  ];
}
