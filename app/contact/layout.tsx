import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makipag-ugnayan - TikTok Downloader PH",
  description: "Makipag-ugnayan sa TikTok Downloader PH. May tanong, feedback, o alalahanin? Nandito kami para tumulong.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/contact" },
  openGraph: {
    title: "Makipag-ugnayan - TikTok Downloader PH",
    description: "Makipag-ugnayan sa TikTok Downloader PH. May tanong, feedback, o alalahanin? Nandito kami para tumulong.",
    type: "website",
    url: "https://tiktokdownloader.ph/contact",
    siteName: "TikTok Downloader",
    images: [{ url: "https://tiktokdownloader.ph/images/tiktok-downloader.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makipag-ugnayan - TikTok Downloader PH",
    description: "Makipag-ugnayan sa TikTok Downloader PH. May tanong, feedback, o alalahanin? Nandito kami para tumulong.",
    images: ["https://tiktokdownloader.ph/images/tiktok-downloader.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
