import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagtatanggi - TikTok Downloader PH",
  description: "Basahin ang aming disclaimer tungkol sa paggamit ng TikTok Downloader PH at mga limitasyon ng aming serbisyo.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/disclaimer" },
  openGraph: {
    title: "Pagtatanggi - TikTok Downloader PH",
    description: "Basahin ang aming disclaimer tungkol sa paggamit ng TikTok Downloader PH at mga limitasyon ng aming serbisyo.",
    type: "website",
    url: "https://tiktokdownloader.ph/disclaimer",
    siteName: "TikTok Downloader",
    images: [{ url: "https://tiktokdownloader.ph/favicon.png", width: 180, height: 180 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pagtatanggi - TikTok Downloader PH",
    description: "Basahin ang aming disclaimer tungkol sa paggamit ng TikTok Downloader PH at mga limitasyon ng aming serbisyo.",
    images: ["https://tiktokdownloader.ph/favicon.png"],
  },
};

const s = { color: "#fff", fontSize: "1rem", fontWeight: 700, margin: "22px 0 10px", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.08)" } as const;

export default function DisclaimerPage() {
  return (
    <main>
      <div className="container" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6 }}>Pagtatanggi (Disclaimer)</h1>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: ".8rem", marginBottom: 28 }}>Huling na-update: Hulyo 23, 2026</p>
            <div style={{ background: "rgba(255,59,92,0.05)", border: "1px solid rgba(255,59,92,0.18)", borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
              <p style={{ margin: 0, fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}>Ang tiktokdownloader.ph ay isang independiyenteng third-party na tool at hindi ito kaakibat, konektado, o ineendorso ng TikTok, Douyin, ByteDance Ltd., o anumang mga kaakibat na kumpanya.</p>
            </div>
            <div style={{ color: "rgba(255,255,255,0.68)", fontSize: ".9rem", lineHeight: 1.85 }}>
              <h2 style={s}>Walang Opisyal na Koneksyon sa TikTok</h2>
              <p>Ang TikTok at lahat ng kaugnay na trademark at brand name ay pag-aari ng TikTok Ltd. o ByteDance Ltd. Ang paggamit ng mga pangalang ito ay para lamang sa descriptive na layunin.</p>
              <h2 style={s}>Responsibilidad ng Gumagamit</h2>
              <p>Ang pag-download ng mga video ay para sa personal, non-commercial na paggamit lamang. Ikaw ang responsable para matiyak na ang iyong paggamit ay sumusunod sa copyright laws at gumagalang sa mga karapatan ng orihinal na creator.</p>
              <h2 style={s}>Hosting ng Content</h2>
              <p style={{ margin: 0 }}>Hindi kami nagho-host o nag-iimbak ng anumang video o audio. Ang lahat ng media ay direktang nido-download mula sa mga server ng TikTok patungo sa device ng gumagamit.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
