import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mga Tuntunin ng Paggamit - TikTok Downloader PH",
  description: "Basahin ang mga Tuntunin ng Paggamit ng tiktokdownloader.ph bago gamitin ang aming libreng TikTok downloader.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/terms" },
  openGraph: {
    title: "Mga Tuntunin ng Paggamit - TikTok Downloader PH",
    description: "Basahin ang mga Tuntunin ng Paggamit ng tiktokdownloader.ph bago gamitin ang aming libreng TikTok downloader.",
    type: "website",
    url: "https://tiktokdownloader.ph/terms",
    siteName: "TikTok Downloader",
    images: [{ url: "https://tiktokdownloader.ph/favicon.png", width: 180, height: 180 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mga Tuntunin ng Paggamit - TikTok Downloader PH",
    description: "Basahin ang mga Tuntunin ng Paggamit ng tiktokdownloader.ph bago gamitin ang aming libreng TikTok downloader.",
    images: ["https://tiktokdownloader.ph/favicon.png"],
  },
};

const s = { color: "#fff", fontSize: "1rem", fontWeight: 700, margin: "22px 0 10px", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.08)" } as const;

export default function TermsPage() {
  return (
    <main>
      <div className="container" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6 }}>Mga Tuntunin ng Paggamit</h1>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: ".8rem", marginBottom: 28 }}>Terms and Conditions &mdash; Huling na-update: Hulyo 11, 2026</p>
            <div style={{ color: "rgba(255,255,255,0.68)", fontSize: ".9rem", lineHeight: 1.85 }}>
              <p>Sa pag-access at paggamit ng tiktokdownloader.ph, sumasang-ayon ka sa mga tuntunin at kundisyon na ito.</p>
              <h2 style={s}>1. Paglalarawan ng Serbisyo</h2>
              <p>Ang tiktokdownloader.ph ay nagbibigay ng libreng serbisyo para mag-download ng mga TikTok video para sa personal, non-commercial na paggamit.</p>
              <h2 style={s}>2. Katanggap-tanggap na Paggamit</h2>
              <p>Pinahihintulutan ang paggamit para sa personal na panonood. Ipinagbabawal ang komersyal na paggamit ng na-download na content nang walang pahintulot, pag-distribute ng copyrighted na content, at anumang ilegal na aktibidad.</p>
              <h2 style={s}>3. Intellectual Property</h2>
              <p>Ang lahat ng TikTok video ay may copyright na pag-aari ng kani-kanilang mga creator. Humingi ng pahintulot bago i-repost at bigyan ng credit ang orihinal na creator.</p>
              <h2 style={s}>4. Limitasyon ng Responsibilidad</h2>
              <p>Hindi mananagot ang tiktokdownloader.ph sa anumang pinsala o pagkalugi na nagmumula sa paggamit ng aming serbisyo.</p>
              <h2 style={s}>5. Mga Pagbabago</h2>
              <p style={{ margin: 0 }}>Nakalaan ang aming karapatang baguhin ang mga tuntuning ito anumang oras. Para sa mga katanungan: <a href="/contact" style={{ color: "#ff3b5c", textDecoration: "none" }}>makipag-ugnayan sa amin</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
