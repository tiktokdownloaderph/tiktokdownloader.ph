import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patakaran sa Privacy - TikTok Downloader PH",
  description: "Basahin ang aming Patakaran sa Privacy para malaman kung paano namin pinangangalagaan ang inyong personal na impormasyon.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/privacy-policy" },
  openGraph: {
    title: "Patakaran sa Privacy - TikTok Downloader PH",
    description: "Basahin ang aming Patakaran sa Privacy para malaman kung paano namin pinangangalagaan ang inyong personal na impormasyon.",
    type: "website",
    url: "https://tiktokdownloader.ph/privacy-policy",
    siteName: "TikTok Downloader",
    images: [{ url: "https://tiktokdownloader.ph/favicon.png", width: 180, height: 180 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patakaran sa Privacy - TikTok Downloader PH",
    description: "Basahin ang aming Patakaran sa Privacy para malaman kung paano namin pinangangalagaan ang inyong personal na impormasyon.",
    images: ["https://tiktokdownloader.ph/favicon.png"],
  },
};

const s = { color: "#fff", fontSize: "1rem", fontWeight: 700, margin: "22px 0 10px", paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.08)" } as const;

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className="container" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6 }}>Patakaran sa Privacy</h1>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: ".8rem", marginBottom: 28 }}>Huling na-update: Hulyo 11, 2026</p>
            <div style={{ color: "rgba(255,255,255,0.68)", fontSize: ".9rem", lineHeight: 1.85 }}>
              <p>Ang tiktokdownloader.ph ay nakatuon sa pagprotekta ng iyong privacy. Ang Patakaran sa Privacy na ito ay nagpapaliwanag kung paano namin pinamamahalaan ang impormasyon kapag ginamit mo ang aming website.</p>
              <h2 style={s}>1. Impormasyong Hindi Namin Kinokolekta</h2>
              <p>Hindi namin kinokolekta o iniimbak ang personal na impormasyon, mga TikTok URL pagkatapos maproseso, mga na-download na video o audio file, kasaysayan ng pag-download, o data ng account.</p>
              <h2 style={s}>2. Awtomatikong Data</h2>
              <p>Maaaring pansamantalang magproseso ang hosting at security systems ng basic technical logs tulad ng IP address, browser type, at request path para sa seguridad, rate limiting, at uptime monitoring. Hindi namin ginagamit ang mga ito para gumawa ng user profile o i-store ang download history.</p>
              <h2 style={s}>3. Pagbabahagi ng Data</h2>
              <p>Hindi namin ibinebenta, ipinagpapalit, o inililipat sa mga third party ang iyong personal na impormasyon maliban kung kinakailangan ng batas.</p>
              <h2 style={s}>4. Seguridad</h2>
              <p>Gumagamit kami ng HTTPS encryption para sa lahat ng koneksyon para matiyak ang seguridad ng iyong data.</p>
              <h2 style={s}>5. Mga Pagbabago at Pakikipag-ugnayan</h2>
              <p style={{ margin: 0 }}>Maaari naming i-update ang patakarang ito anumang oras. Para sa mga katanungan: <a href="/contact" style={{ color: "#ff3b5c", textDecoration: "none" }}>contact page</a> o tiktokdownloader.ph@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
