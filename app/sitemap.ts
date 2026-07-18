import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tiktokdownloader.ph";
  const jul11 = new Date("2026-07-11");
  const jul13 = new Date("2026-07-13");

  return [
    { url: `${base}/`, lastModified: jul11, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/blog`, lastModified: jul13, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: jul11, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: jul11, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tiktok-to-mp4`, lastModified: jul13, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/download-tiktok-mp3`, lastModified: jul13, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/download-ang-larawan-at-slide-ng-tiktok`, lastModified: jul13, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-stories`, lastModified: jul13, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-sa-pc`, lastModified: jul13, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/paano-mag-download-ng-mga-video-sa-tiktok`, lastModified: jul13, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-videos-sa-android`, lastModified: jul13, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/download-tiktok-videos-sa-iphone`, lastModified: jul13, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy-policy`, lastModified: jul11, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/disclaimer`, lastModified: jul11, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`, lastModified: jul11, changeFrequency: "monthly", priority: 0.7 },
  ];
}
