import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tungkol sa Amin - TikTok Downloader PH",
  description: "Alamin ang tungkol sa TikTok Downloader PH — ang aming misyon, serbisyo, at pangako sa aming mga gumagamit.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/about" },
  openGraph: {
    title: "Tungkol sa Amin - TikTok Downloader PH",
    description: "Alamin ang tungkol sa TikTok Downloader PH — ang aming misyon, serbisyo, at pangako sa aming mga gumagamit.",
    type: "website",
    url: "https://tiktokdownloader.ph/about",
    siteName: "TikTok Downloader",
    images: [{ url: "https://tiktokdownloader.ph/favicon.png", width: 180, height: 180 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tungkol sa Amin - TikTok Downloader PH",
    description: "Alamin ang tungkol sa TikTok Downloader PH — ang aming misyon, serbisyo, at pangako sa aming mga gumagamit.",
    images: ["https://tiktokdownloader.ph/favicon.png"],
  },
  other: { referrer: "no-referrer" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://tiktokdownloader.ph/about#webpage",
      "url": "https://tiktokdownloader.ph/about",
      "name": "Tungkol sa Amin - TikTok Downloader PH",
      "description": "Alamin ang tungkol sa TikTok Downloader PH.",
      "inLanguage": "tl",
      "isPartOf": { "@id": "https://tiktokdownloader.ph/#website" },
      "dateModified": "2026-07-23T04:32:39+08:00"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tiktokdownloader.ph/about#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiktokdownloader.ph/" },
        { "@type": "ListItem", "position": 2, "name": "Tungkol sa Amin - TikTok Downloader PH", "item": "https://tiktokdownloader.ph/about" }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <main>
      <div className="container" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6, textAlign: "center" }}>Tungkol sa TikTok Downloader PH</h1>
        <p className="text-center" style={{ color: "rgba(255,255,255,0.45)", fontSize: ".875rem", marginBottom: 32 }}>Ang aming misyon, serbisyo, at pangako sa aming mga gumagamit</p>
        <div className="row g-3">
          <div className="col-12 col-md-6"><div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%" }}><h2 style={{ color: "#ff3b5c", fontSize: ".95rem", fontWeight: 700, marginBottom: 10 }}>Sino Kami</h2><p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem", lineHeight: 1.8, margin: 0 }}>Ang TikTok Downloader PH ay isang libreng online na tool na espesyal na ginawa para sa mga Pilipinong gumagamit ng TikTok. Naniniwala kami na ang pag-download ng mga video para sa personal na paggamit ay dapat maging simple, mabilis, at libre &mdash; nang walang ads, walang registration, at walang abala.</p></div></div>
          <div className="col-12 col-md-6"><div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%" }}><h2 style={{ color: "#ff3b5c", fontSize: ".95rem", fontWeight: 700, marginBottom: 10 }}>Ang Aming Misyon</h2><p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem", lineHeight: 1.8, margin: 0 }}>Ang aming layunin ay magbigay ng pinaka-madali at pinaka-maaasahang paraan para ma-download ang mga TikTok na video nang walang watermark. Gusto naming matulungan ang bawat Pilipino na i-save ang kanilang mga paboritong content para sa offline na panonood anumang oras.</p></div></div>
          <div className="col-12 col-md-6"><div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%" }}><h2 style={{ color: "#ff3b5c", fontSize: ".95rem", fontWeight: 700, marginBottom: 10 }}>Ano ang Aming Inaalok</h2><ul style={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem", lineHeight: 1.9, margin: 0, padding: 0, listStyle: "none" }}><li style={{ display: "flex", gap: 8, padding: "2px 0" }}><CheckIcon />Pag-download ng TikTok video nang walang watermark</li><li style={{ display: "flex", gap: 8, padding: "2px 0" }}><CheckIcon />HD at 4K na kalidad ng MP4</li><li style={{ display: "flex", gap: 8, padding: "2px 0" }}><CheckIcon />Pag-convert ng TikTok sa MP3 audio</li><li style={{ display: "flex", gap: 8, padding: "2px 0" }}><CheckIcon />100% libre &mdash; walang registration</li></ul></div></div>
          <div className="col-12 col-md-6"><div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%" }}><h2 style={{ color: "#ff3b5c", fontSize: ".95rem", fontWeight: 700, marginBottom: 10 }}>Aming Pangako</h2><p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem", lineHeight: 1.8, marginBottom: 10 }}>Hindi namin ino-store o ibinabahagi ang inyong data. Ang inyong privacy ay aming prayoridad.</p><p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".9rem", lineHeight: 1.8, margin: 0 }}>Para sa anumang katanungan, <a href="/contact" style={{ color: "#ff3b5c", textDecoration: "none" }}>makipag-ugnayan sa amin</a>.</p></div></div>
        </div>
        <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(255,59,92,0.05)", border: "1px solid rgba(255,59,92,0.18)", borderRadius: 10, textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: ".825rem", margin: 0 }}>Ang TikTok Downloader PH ay hindi kaakibat o ineendorso ng TikTok, Douyin, o ByteDance Ltd.</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    </main>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="12" cy="12" r="10" fill="rgba(255,59,92,0.15)" />
      <path d="M8 12l3 3 5-5" stroke="#ff3b5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
