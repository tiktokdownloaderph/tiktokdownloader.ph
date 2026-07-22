import type { Metadata } from "next";
import Image from "next/image";
import DeferredDownloader from "@/components/DeferredDownloader";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tiktokdownloader.ph/#website",
      "url": "https://tiktokdownloader.ph/",
      "name": "TikTok Downloader",
      "description": "TikTok downloader na walang watermark, mabilis, at libre. I-convert sa MP3 na may walang limitasyong pag-download."
    },
    {
      "@type": "WebPage",
      "@id": "https://tiktokdownloader.ph/#webpage",
      "url": "https://tiktokdownloader.ph/",
      "name": "TikTok Downloader na Walang Watermark (HD at Mabilis) 2026",
      "description": "Subukan ang aming TikTok downloader para makakuha ng mga video na walang watermark sa HD na kalidad. 100% libre, mabilis at walang kinakailangang pag-login. I-convert sa MP3 na may walang limitasyong pag-download.",
      "inLanguage": "tl",
      "isPartOf": { "@id": "https://tiktokdownloader.ph/#website" },
      "about": { "@id": "https://tiktokdownloader.ph/#app" }
    },
    {
      "@type": "Article",
      "@id": "https://tiktokdownloader.ph/#article",
      "headline": "TikTok Downloader na Walang Watermark (HD at Mabilis) 2026",
      "description": "Subukan ang aming TikTok downloader para makakuha ng mga video na walang watermark sa HD na kalidad. 100% libre, mabilis at walang kinakailangang pag-login.",
      "inLanguage": "tl",
      "url": "https://tiktokdownloader.ph/",
      "author": { "@type": "Organization", "name": "TikTok Downloader PH", "url": "https://tiktokdownloader.ph/" },
      "publisher": { "@type": "Organization", "name": "TikTok Downloader PH", "url": "https://tiktokdownloader.ph/" },
      "datePublished": "2026-07-23T04:32:39+08:00",
      "dateModified": "2026-07-23T04:32:39+08:00",
      "isPartOf": { "@id": "https://tiktokdownloader.ph/#webpage" }
    },
    {
      "@type": "Organization",
      "@id": "https://tiktokdownloader.ph/#organization",
      "name": "TikTok Downloader PH",
      "url": "https://tiktokdownloader.ph/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tiktokdownloader.ph/favicon.png",
        "width": 180,
        "height": 180
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://tiktokdownloader.ph/contact"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://tiktokdownloader.ph/#app",
      "name": "TikTok Downloader",
      "url": "https://tiktokdownloader.ph/",
      "applicationCategory": "MultimediaApplication",
      "applicationSubCategory": "VideoDownloader",
      "operatingSystem": "Android, iOS, Windows, macOS, Web Browser",
      "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Edge, Safari.",
      "description": "Libreng TikTok video downloader na nagbibigay-daan sa pag-save ng mga TikTok video nang walang watermark sa HD MP4 o MP3 na format. Walang login, walang app, walang limitasyon.",
      "featureList": [
        "Download TikTok videos without watermark",
        "HD MP4 and 4K quality support",
        "MP3 audio extraction",
        "No registration required",
        "No daily download limits",
        "Works on all devices"
      ],
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
      "isPartOf": { "@id": "https://tiktokdownloader.ph/#website" }
    },
    {
      "@type": "HowTo",
      "@id": "https://tiktokdownloader.ph/#howto",
      "name": "Paano Mag-download ng TikTok Videos without Watermark",
      "description": "Tatlong hakbang lang — kopyahin ang link, i-paste sa downloader, at i-download ang MP4 na walang watermark.",
      "totalTime": "PT1M",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "PHP", "value": "0" },
      "tool": [
        { "@type": "HowToTool", "name": "TikTok Downloader (tiktokdownloader.ph)" },
        { "@type": "HowToTool", "name": "Web browser (Chrome, Firefox, Edge, Safari)" }
      ],
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Kopyahin ang Link ng Video", "text": "Buksan ang TikTok sa iyong device. Hanapin ang video na gusto mong i-download, i-tap ang Ibahagi (share icon), at piliin ang 'Copy Link' upang makopya ang URL ng video.", "url": "https://tiktokdownloader.ph/#step1" },
        { "@type": "HowToStep", "position": 2, "name": "I-paste ang Link sa TikTok Downloader", "text": "Pumunta sa tiktokdownloader.ph at i-paste ang kinopyang TikTok URL sa input box. I-click ang 'Load Video' button at hintaying ma-load ang video.", "url": "https://tiktokdownloader.ph/#step2" },
        { "@type": "HowToStep", "position": 3, "name": "I-download ang Video o Audio", "text": "Piliin ang gusto mong format: 'Download Video HD MP4' para sa walang watermark na video, o 'Download Audio MP3' para sa audio lamang. I-click ang button at awtomatikong mase-save ang file sa iyong device.", "url": "https://tiktokdownloader.ph/#step3" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tiktokdownloader.ph/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Libre ba ang TikTok Downloader?", "acceptedAnswer": { "@type": "Answer", "text": "Oo, ang TikTokDownloader.ph ay 100% libre na gamitin. Walang nakatagong bayad, subscription, o kinakailangang account. Maaari kang mag-download ng walang limitasyong bilang ng mga video nang walang bayad." } },
        { "@type": "Question", "name": "Paano mag-download ng TikTok video nang walang watermark?", "acceptedAnswer": { "@type": "Answer", "text": "Kopyahin ang link ng TikTok video sa pamamagitan ng Share > Copy Link. Pumunta sa TikTokDownloader.ph at i-paste ang link sa input box. I-click ang Load Video, pagkatapos ay piliin ang 'Download Video HD MP4' para makuha ang video nang walang watermark nang libre." } },
        { "@type": "Question", "name": "Anong mga format ang sinusuportahan ng TikTok Downloader?", "acceptedAnswer": { "@type": "Answer", "text": "Sinusuportahan ng TikTokDownloader.ph ang HD MP4 (walang watermark), standard MP4 (may watermark), at MP3 (audio only). Ang lahat ng format ay available nang libre at walang limitasyon sa laki ng file." } },
        { "@type": "Question", "name": "Gumagana ba ang TikTok Downloader sa iPhone at Android?", "acceptedAnswer": { "@type": "Answer", "text": "Oo, gumagana ang TikTokDownloader.ph sa lahat ng device — iPhone, Android, Windows PC, at Mac. Web-based ang tool kaya walang kailangang i-install na app. Buksan lang ang aming website sa iyong browser at simulan na mag-download." } },
        { "@type": "Question", "name": "Ligtas ba ang paggamit ng TikTok Downloader?", "acceptedAnswer": { "@type": "Answer", "text": "Oo, ang TikTokDownloader.ph ay ligtas at secure. Hindi kami nangongolekta ng personal na impormasyon, hindi namin iniingatan ang mga video URL pagkatapos maproseso, at hindi kami nagho-host ng anumang video content sa aming mga server." } },
        { "@type": "Question", "name": "Mayroon bang limitasyon sa bilang ng pag-download?", "acceptedAnswer": { "@type": "Answer", "text": "Wala. Maaari kang mag-download ng maraming TikTok video hangga't gusto mo nang walang pang-araw-araw na limitasyon, walang rate limit, at walang kinakailangang pag-sign up." } },
        { "@type": "Question", "name": "Paano mag-download ng TikTok video sa PC o laptop?", "acceptedAnswer": { "@type": "Answer", "text": "Buksan ang TikTok sa iyong browser, i-click ang Share icon ng video, at kopyahin ang link. Pumunta sa TikTokDownloader.ph sa isang bagong tab, i-paste ang link, at i-click ang Load Video. Pipiliin mo ang format (HD MP4 o MP3) at awtomatikong mae-save ang file sa Downloads folder ng iyong PC." } },
        { "@type": "Question", "name": "Maaari bang i-convert ang TikTok video sa MP3?", "acceptedAnswer": { "@type": "Answer", "text": "Oo. Pagkatapos mag-load ng TikTok video sa TikTokDownloader.ph, makikita mo ang 'Download Audio MP3' button. I-click ito para makuha ang audio track ng video sa MP3 format nang libre at walang kinakailangang pag-install ng software." } }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://tiktokdownloader.ph/#articles",
      "name": "Mga Gabay at Artikulo — TikTok Downloader Blog",
      "description": "Mga step-by-step na gabay at tips para sa pag-download ng TikTok videos.",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://tiktokdownloader.ph/download-sa-pc", "name": "Paano Mag-download ng mga TikTok Video sa PC (Windows at Mac)" },
        { "@type": "ListItem", "position": 2, "url": "https://tiktokdownloader.ph/download-tiktok-videos-sa-android", "name": "Mag-download ng mga TikTok Video sa Android (Walang Watermark)" },
        { "@type": "ListItem", "position": 3, "url": "https://tiktokdownloader.ph/tiktok-to-mp4", "name": "TikTok to MP4 Converter Online" },
        { "@type": "ListItem", "position": 4, "url": "https://tiktokdownloader.ph/download-tiktok-mp3", "name": "Download TikTok MP3 Online" },
        { "@type": "ListItem", "position": 5, "url": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok", "name": "Download TikTok Photos & Slideshows" },
        { "@type": "ListItem", "position": 6, "url": "https://tiktokdownloader.ph/download-tiktok-stories", "name": "Download TikTok Stories Without Watermark" },
        { "@type": "ListItem", "position": 7, "url": "https://tiktokdownloader.ph/paano-mag-download-ng-mga-video-sa-tiktok", "name": "Paano Mag-save ng TikTok Video gamit ang TikTok Downloader" },
        { "@type": "ListItem", "position": 8, "url": "https://tiktokdownloader.ph/download-tiktok-videos-sa-iphone", "name": "Mag-download ng mga TikTok Video sa iPhone at iPad" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "TikTok Downloader Without Watermark (HD and Fast) 2026",
  description: "Libreng TikTok downloader para agad na ma-save ang kahit anong video nang walang watermark. Sinusuportahan ang HD MP4 at MP3, hindi na kailangan mag-login.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/" },
  openGraph: {
    siteName: "TikTok Downloader",
    title: "TikTok Downloader na Walang Watermark (HD at Mabilis) 2026",
    description: "Libreng TikTok downloader para agad na ma-save ang kahit anong video nang walang watermark. Sinusuportahan ang HD MP4 at MP3, hindi na kailangan mag-login.",
    type: "website",
    url: "https://tiktokdownloader.ph/",
    images: [{ url: "https://tiktokdownloader.ph/favicon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Downloader na Walang Watermark (HD at Mabilis) 2026",
    description: "Libreng TikTok downloader para agad na ma-save ang kahit anong video nang walang watermark. Sinusuportahan ang HD MP4 at MP3, hindi na kailangan mag-login.",
    images: ["https://tiktokdownloader.ph/favicon.png"],
  },
  other: {
    "google-site-verification": "hnAYVvigNOIi0f_kuc4Vp21YY9U7B49_ndP9cuSIiI0",
    "msvalidate.01": "96D989D56448B78BB07EFC6132F9E401",
    referrer: "no-referrer",
  },
};

export default function HomePage() {
  return (
    <main>
      <div className="container">
        {/* H1 rendered server-side — stays in SSR HTML regardless of client hydration */}
        <div className="d-flex justify-content-center" style={{ paddingTop: 28 }}>
          <h1
            className="text-center"
            style={{
              fontSize: "clamp(1.35rem, 5.5vw, 1.75rem)",
              fontWeight: 700,
              marginBottom: 6,
              marginTop: 0,
              maxWidth: 512,
              width: "100%",
            }}
          >
            TikTok Downloader Without Watermark
          </h1>
        </div>
        <DeferredDownloader />

        <div style={{ marginTop: 32, paddingBottom: 20 }}>

          {/* Intro */}
          <section style={{ marginTop: 32 }}>
            <div className="intro-split">
              <div className="intro-split__text">
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Kung sinubukan mo nang mag-save ng mga video sa TikTok, malamang na nakatagpo ka ng mga karaniwang isyu tulad ng mga watermark, mababang kalidad ng video, o mga tool na nangangailangan ng pagpaparehistro bago mag-download. Tinatanggal ng TikTok downloader ang mga hadlang na iyon at ginagawang simple ang proseso.</p>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Isa itong libreng TikTok video downloader na hinahayaan kang mag-save ng mga video na walang watermark sa mataas na kalidad na MP4 na format. Walang kinakailangang pag-login, app, o pagpaparehistro &mdash; i-paste lang ang link ng video at i-download sa ilang segundo. Gumagamit ka man ng <a href="/download-tiktok-videos-sa-android" style={{ color: "#ff3b5c", textDecoration: "none" }}>Android</a>, <a href="/download-tiktok-videos-sa-iphone" style={{ color: "#ff3b5c", textDecoration: "none" }}>iPhone</a>, <a href="/download-sa-pc" style={{ color: "#ff3b5c", textDecoration: "none" }}>Windows</a>, o Mac, gumagana ang tool nang direkta mula sa iyong browser.</p>
              </div>
              <div className="intro-split__media">
                <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(180deg, rgba(255,59,92,0.12), rgba(255,255,255,0.03))", boxShadow: "0 24px 70px rgba(0,0,0,0.35)" }}>
                  <Image src="/images/tiktok-downloader.webp" alt="TikTok Downloader preview" width={960} height={600} loading="lazy" quality={60} sizes="(max-width: 991px) 100vw, 50vw" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "16/10", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </section>

          {/* How to Download */}
          <section style={{ marginTop: 40 }} id="step1">
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6 }}>Paano Mag-download ng TikTok Videos without Watermark</h2>
            <p className="text-center" style={{ color: "rgba(255,255,255,0.45)", fontSize: ".875rem", marginBottom: 20 }}>Tatlong hakbang lang &mdash; kopyahin, i-paste, i-download.</p>
            <div className="how-to-steps">
              <div className="how-to-step-row">
                <div className="how-to-step-copy">
                  <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%", textAlign: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,59,92,0.12)", border: "1px solid rgba(255,59,92,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: ".82rem", fontWeight: 700, color: "#ff3b5c" }}>1</div>
                    <h3 style={{ color: "#fff", fontSize: ".95rem", fontWeight: 600, marginBottom: 8 }}>Kopyahin ang Link ng Video</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", margin: 0, lineHeight: 1.7 }}>Buksan ang TikTok, i-tap ang <strong style={{ color: "#fff" }}>Ibahagi</strong>, at piliin ang <strong style={{ color: "#fff" }}>Copy Link</strong>.</p>
                  </div>
                </div>
                <div className="how-to-step-media">
                  <div className="step-image-strip step-image-strip--between">
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-ibahagi.webp" alt="I-tap ang Ibahagi" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/Kopyahin-ang-Link-ng-Video.webp" alt="Kopyahin ang Link ng Video" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="how-to-step-row how-to-step-row--reverse" id="step2">
                <div className="how-to-step-copy">
                  <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%", textAlign: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,59,92,0.12)", border: "1px solid rgba(255,59,92,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: ".82rem", fontWeight: 700, color: "#ff3b5c" }}>2</div>
                    <h3 style={{ color: "#fff", fontSize: ".95rem", fontWeight: 600, marginBottom: 8 }}>Idikit ang Link</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", margin: 0, lineHeight: 1.7 }}>I-paste ang URL sa input box sa itaas at hayaang kunin ng tool ang video.</p>
                  </div>
                </div>
                <div className="how-to-step-media">
                  <div className="step-image-strip step-image-strip--between">
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-pindutan-ng-i-paste.webp" alt="I-tap ang pindutan ng i-paste" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-pindutan-ng-i-paste2.webp" alt="I-tap ang pindutan ng i-paste 2" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="how-to-step-row" id="step3">
                <div className="how-to-step-copy">
                  <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 22, height: "100%", textAlign: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,59,92,0.12)", border: "1px solid rgba(255,59,92,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: ".82rem", fontWeight: 700, color: "#ff3b5c" }}>3</div>
                    <h3 style={{ color: "#fff", fontSize: ".95rem", fontWeight: 600, marginBottom: 8 }}>I-download ang Video</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", margin: 0, lineHeight: 1.7 }}>I-click ang download button at i-save ang MP4 na walang watermark sa iyong device.</p>
                  </div>
                </div>
                <div className="how-to-step-media">
                  <div className="step-image-strip step-image-strip--between">
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-pindutan-ng pag-download.webp" alt="I-tap ang pindutan ng pag-download" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specs Table */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>Pinakamahusay na TikTok MP4 Downloader</h2>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <table className="table table-dark mb-0" style={{ fontSize: ".9rem", borderColor: "rgba(255,255,255,0.06)" }}>
                <tbody>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)", width: "36%" }}>Format ng Video</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 500 }}>MP4 (Universal Compatibility)</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)" }}>Kalidad ng Output</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 500 }}>1080p, 4K, at Orihinal na HD</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)" }}>Watermark</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 600 }}>Walang Watermark</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)" }}>Bilis ng Pag-download</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 500 }}>Instant at Napakabilis</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)" }}>Limitasyon ng Gumagamit</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 600 }}>Walang Pang-araw-araw na Limitasyon</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)" }}>Presyo ng Serbisyo</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 600 }}>100% Libre (Walang Subscription)</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)" }}>Suporta sa Device</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 500 }}>Android, iOS, Windows, Mac</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.5)", borderBottom: "none" }}>Seguridad</td><td style={{ padding: "12px 18px", color: "#fff", fontWeight: 600, borderBottom: "none" }}>Ligtas, Pribado, at Secure</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Features */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6 }}>Mga Tampok ng TikTok Downloader</h2>
            <p className="text-center" style={{ color: "rgba(255,255,255,0.5)", fontSize: ".875rem", marginBottom: 20 }}>Binuo para sa bilis, kalidad, at pagiging simple sa lahat ng device.</p>
            <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
              {[
                {
                  svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 2 4 13h6l-1 9 11-13h-6l-1-7Z" fill="currentColor"/><path d="M8 13h4l-.5 4.5L16 9h-4l-.4-3.2L8 13Z" fill="#fff" opacity=".9"/></svg>,
                  title: "Mabilis na Bilis ng Pag-download",
                  desc: "Pinoproseso ng aming tool ang mga link ng video at inihahanda ang mga file sa loob lamang ng ilang segundo."
                },
                {
                  svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" fill="currentColor"/><path d="M7.2 7.2 16.8 16.8" stroke="#fff" strokeWidth="2.3" strokeLinecap="round"/><path d="M8.2 12.5h3.2m1.8-1h2.6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity=".85"/></svg>,
                  title: "Walang Watermark",
                  desc: "I-save ang malinis na TikTok na mga video nang walang anumang watermark, perpekto para sa offline na panonood."
                },
                {
                  svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="currentColor"/><path d="M8 20h8M10 17l-.7 3M14 17l.7 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><path d="M8 9h3v3H8zM13 9h3v3h-3z" fill="#fff" opacity=".9"/></svg>,
                  title: "Suporta sa HD MP4 Format",
                  desc: "Mag-download ng mga video sa HD MP4 na format at makakuha ng mataas na kalidad na nilalaman nang madali."
                },
                {
                  svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 20h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".85"/><rect x="6" y="11" width="3" height="7" rx="1.2" fill="currentColor"/><rect x="10.5" y="6" width="3" height="12" rx="1.2" fill="currentColor"/><rect x="15" y="9" width="3" height="9" rx="1.2" fill="currentColor"/><path d="M7.5 8.5 12 4l4.5 4.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  title: "Walang Limitasyon sa Pag-download",
                  desc: "Mag-download ng maraming video hangga't gusto mo nang walang anumang pang-araw-araw na limitasyon."
                },
                {
                  svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M5 20a7 7 0 0 1 14 0" fill="currentColor"/><path d="m15.5 5.5 3 3 4-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  title: "Walang Kinakailangang Sign-up",
                  desc: "Gamitin kaagad ang TikTok video downloader nang hindi nagsa-sign up o nagbabahagi ng personal na impormasyon."
                },
                {
                  svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5 20 6v6c0 5.2-3.4 8.2-8 9.5-4.6-1.3-8-4.3-8-9.5V6l8-3.5Z" fill="currentColor"/><path d="m8.5 12 2.2 2.2 4.8-5" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  title: "Ligtas at Secure",
                  desc: "Gumagamit kami ng mga secure na koneksyon upang protektahan ang iyong data at matiyak ang ligtas na karanasan."
                }
              ].map((f, i) => (
                <div className="col" key={i}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 20, height: "100%" }}>
                    <span className="feature-icon" aria-hidden="true">{f.svg}</span>
                    <h3 style={{ color: "#fff", fontSize: ".95rem", fontWeight: 600, marginBottom: 6 }}>{f.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.52)", fontSize: ".875rem", margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why You Need It */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Bakit Kailangan Mo ng TikTok Downloader?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Ang aming tool ay perpekto para sa pag-download ng mga video na walang watermark para sa offline na panonood o pagbabahagi sa mga kaibigan. Tinutulungan ka nitong permanenteng i-save ang iyong mga paboritong clip, kahit na ang orihinal na video ay tinanggal na ng platform sa ibang pagkakataon.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Maaari mong i-save ang iyong mga video nang walang logo ng TikTok at i-repost ang mga ito sa mga platform tulad ng YouTube Shorts, Instagram Reels, at Facebook para palakihin ang iyong audience.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Mabilis, libre, at gumagana sa lahat ng device &mdash; walang login, walang app, walang limitasyon.</p>
          </section>

          {/* What You Can Download */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Ano ang Maaari Mong I-download Gamit ang Aming Downloader?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 16 }}>Sinusuportahan ng aming tool ang maraming opsyon sa pag-download upang matugunan ang iba&rsquo;t ibang pangangailangan:</p>
            <div className="row g-0 download-options-grid" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, overflow: "hidden", marginBottom: 28 }}>
              <div className="col-12 col-md-6">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}><span className="download-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h6A2.5 2.5 0 0 1 16 7.5v9A2.5 2.5 0 0 1 13.5 19h-6A2.5 2.5 0 0 1 5 16.5v-9Z"/><path d="m16 10 3.5-2v8L16 14"/></svg></span>Mga TikTok na video nang walang watermark</li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}><span className="download-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6 5h12v14H6z"/><path d="M9 9h6M9 13h4"/><path d="m15 16 3 3"/></svg></span>Mga TikTok na video na may watermark</li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}><span className="download-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 4h7l4 4v12H7z"/><path d="M14 4v5h5"/><path d="M10 14h5M10 17h3"/></svg></span>I-convert ang TikTok na video sa MP4</li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}><span className="download-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/></svg></span>Musika at mga trending na tunog</li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}><span className="download-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4z"/><path d="M8 11h2v2H8zM14 11h2v2h-2z"/><path d="M7 20h10"/></svg></span>Mga video sa orihinal na kalidad ng HD</li>
                  <li style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: ".9rem", color: "rgba(255,255,255,0.75)" }}><span className="download-option-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 18h14"/></svg></span>Para sa offline na panonood at personal na paggamit</li>
                </ul>
              </div>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 600, marginBottom: 12 }}>Paano Mag-download ng Mga TikTok Video na Walang Watermark</h3>
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Buksan ang TikTok at kopyahin ang link ng video na gusto mong i-download.",
                <>Bisitahin ang <a href="https://tiktokdownloader.ph/" style={{ color: "#ff3b5c", textDecoration: "none" }}>tiktokdownloader.ph</a> sa iyong Android, iPhone, PC, o Mac.</>,
                "I-paste ang URL ng video ng TikTok sa input box.",
                <><strong style={{ color: "#fff" }}>I-click ang I-download</strong> at piliin ang iyong gustong opsyon sa pag-download.</>,
                "I-save ang video at panoorin ito offline anumang oras."
              ].map((step, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <span style={{ minWidth: 26, height: 26, borderRadius: "50%", background: "rgba(255,59,92,0.12)", border: "1px solid rgba(255,59,92,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 700, color: "#ff3b5c", flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ color: "rgba(255,255,255,0.68)", fontSize: ".9rem", lineHeight: 1.7, paddingTop: 3 }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Pros and Cons */}
          <section className="pros-cons">
            <h2>Mga Kalamangan at Kahinaan ng TikTok Downloader</h2>
            <div className="pros-cons__grid">
              <div className="pros-cons__panel pros-cons__panel--pros">
                <p className="pros-cons__badge">Mga Kalamangan <span aria-hidden="true">+</span></p>
                <ul className="pros-cons__list">
                  {["Palaging libre, walang mga nakatagong bayad", "Ligtas, secure, at madaling gamitin", "Mabilis at maayos na pag-download", "Mag-download ng mga video sa HD na kalidad", "Walang kinakailangang pag-install ng app", "Maramihang mga pagpipilian sa pag-download"].map((item, i) => (
                    <li key={i}><span className="pros-cons__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pros-cons__divider" aria-hidden="true"></div>
              <div className="pros-cons__panel pros-cons__panel--cons">
                <p className="pros-cons__badge">Mga Kahinaan <span aria-hidden="true">-</span></p>
                <ul className="pros-cons__list">
                  {["Sinusuportahan lamang ang nilalaman ng TikTok", "Kinakailangan ang koneksyon sa internet", "Hindi makapag-download ng mga pribadong video", "Hindi sinusuportahan ang pag-scrape ng profile", "Maaaring hindi available ang inalis na content"].map((item, i) => (
                    <li key={i}><span className="pros-cons__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m18 6-12 12M6 6l12 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg></span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Responsible Use Tips */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Mga Tip para sa Responsableng Paggamit</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 16 }}>Ang pag-download ng mga video ng TikTok ay maginhawa, ngunit ang mga gumagamit ay dapat palaging kumilos nang responsable at igalang ang mga tagalikha ng nilalaman.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { title: "Igalang ang Copyright", text: "Ang mga video ng TikTok ay pagmamay-ari ng kani-kanilang mga tagalikha. Palaging humingi ng pahintulot bago i-repost o gamitin ang nilalaman." },
                { title: "Gamitin para sa Personal o Pang-edukasyon na Layunin", text: "Ang na-download na nilalaman ay dapat gamitin sa etikal na paraan para sa personal na pagtingin, pag-aaral, o mga layunin ng sanggunian lamang." },
                { title: "Magbigay ng Credit", text: "Kapag nagbabahagi ng mga video sa ibang mga platform, palaging bigyan ng kredito ang orihinal na lumikha sa pamamagitan ng pagbanggit sa kanilang TikTok username." },
                { title: "Umasa sa Mabilis na Internet", text: "Ang mabilis na Wi-Fi o matibay na signal ng mobile ay nakakatulong sa mga clip na mapunta sa iyong telepono nang mabilisan. Ang mas mabagal na network ay karaniwang nangangahulugan ng mas mahabang paghihintay na mas gugustuhin mong laktawan." },
                { title: "I-save ang Pahina bilang Bookmark", text: "Ang pagta-type ng URL sa bawat pagkakataon ay nagiging luma, kaya i-pin ang site sa toolbar ng iyong browser. Isang tap lang ay dadalhin ka agad sa download box." },
                { title: "Suriin ang Available Storage", text: "Ang pagkaubusan ng espasyo sa kalagitnaan ng pag-download ay maaaring nakakainis. Silipin muna ang memorya ng iyong device para maiwasan ang sakit ng ulo." }
              ].map((tip, i) => (
                <div key={i} style={{ padding: "16px 18px", background: "rgba(255,255,255,0.04)", borderRadius: 9, borderLeft: "2px solid rgba(255,59,92,0.5)" }}>
                  <strong style={{ color: "#fff", fontSize: ".95rem", display: "block", marginBottom: 4 }}>{tip.title}</strong>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", lineHeight: 1.7 }}>{tip.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <HomeFaq />

          {/* Disclaimer */}
          <div className="home-disclaimer" style={{ marginTop: 32, marginBottom: 40, padding: "16px 20px", background: "rgba(255,255,255,0.03)", borderRadius: 9, border: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: ".8rem", lineHeight: 1.7, margin: 0 }}><strong style={{ color: "rgba(255,255,255,0.5)" }}>Pagtatanggi:</strong> Ang tiktokdownloader.ph ay isang independiyenteng tool at hindi kaakibat o ineendorso ng TikTok, Douyin o ByteDance Ltd. Ang lahat ng mga trademark ay pag-aari ng kani-kanilang mga may-ari. Hindi kami nagho-host o nag-iimbak ng anumang nilalamang video; ang media ay ina-access mula sa mga pampublikong panlabas na mapagkukunan.</p>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </main>
  );
}

function HomeFaq() {
  const faqs = [
    { q: "Ligtas ba ang TikTok Downloader?", a: <p className="mb-0">Oo, ligtas itong gamitin. Hindi ito nangangailangan ng pag-login, pagpaparehistro, o personal na impormasyon, at hindi ito nag-iimbak ng data ng user o mga na-download na file.</p> },
    { q: "Paano Gamitin ang Tool na Ito?", a: <p className="mb-0">I-paste ang link ng TikTok video sa input box sa itaas at i-click ang Load Video. Kapag lumabas ang mga download button, piliin ang iyong gustong format &mdash; MP4 na walang watermark, MP4 na may watermark, o MP3 audio.</p> },
    { q: "Maaari Ko Bang Mag-download ng TikTok Videos Nang Walang Watermark sa Aking Telepono?", a: <p className="mb-0">Oo! Gumagana ang web app na ito sa halos bawat platform &mdash; iPhone, iPad, Android, iOS, Windows, Mac, at Linux &mdash; direkta mula sa iyong browser nang walang anumang pag-install.</p> },
    { q: "Maaari Ko Bang I-convert ang isang TikTok sa MP3?", a: <p className="mb-0">Oo! I-paste ang link sa itaas, i-load ang video, at i-click ang Download Audio button para i-save ang audio bilang MP3.</p> },
    { q: "Paano Mag-download ng TikTok Videos sa iOS?", a: <p className="mb-0">Kopyahin ang link ng video mula sa TikTok app, bisitahin ang tiktokdownloader.ph sa Safari o ibang browser, i-paste ang link, at i-click ang download. Maaari mong i-save ang video nang direkta sa iyong camera roll o photos library.</p> },
    { q: "Gaano Katagal ang Pag-download ng Video?", a: <p className="mb-0">Ang bilis ng pag-download ay depende sa iyong koneksyon sa internet at laki ng video. Ang aming tool ay na-optimize para maging mabilis &mdash; karamihan sa mga video ay handa sa loob ng ilang segundo.</p> },
    { q: "Libre ba ang TikTok Downloader na Gamitin?", a: <p className="mb-0">Oo, ganap na libre itong gamitin. Walang nakatagong singil, subscription, o kinakailangan sa pagbabayad &mdash; mag-download ng walang limitasyong TikTok video nang libre.</p> },
    { q: "Ligtas ba Gamitin ang TikTok Downloader?", a: <p className="mb-0">Oo. Hindi nangangailangan ng pag-login o personal na impormasyon ang tool. Gumagamit kami ng mga secure na koneksyon at hindi namin nag-iimbak o ibinabahagi ang anumang data ng user o na-download na nilalaman.</p> },
    { q: "Kailangan Ko Bang Mag-install ng Anumang Software, App, o Extension ng Browser?", a: <p className="mb-0">Hindi! Ito ay isang ganap na online na tool &mdash; walang software, app, o browser extension ay kinakailangan. Buksan lamang ito sa iyong browser, i-paste ang link ng TikTok video, at i-download kaagad ang iyong video.</p> },
    { q: "Maaari ba kaming Mag-download ng Mga Video mula sa Mga Pribadong Account?", a: <p className="mb-0">Hindi. Makakapag-download lang ng mga pampublikong TikTok na video. Pribado o pinaghihigpitang nilalaman ay hindi suportado.</p> },
    { q: "Ano ang Kalidad ng mga Na-download na TikTok Video?", a: <p className="mb-0">Sinusuportahan ng platform ang pag-download ng mga TikTok na video sa HD MP4 na format na walang watermark &mdash; kasama ang 1080p, 4K, at orihinal na kalidad.</p> },
    { q: "Sinusuportahan ba nito ang Bultuhang Pag-download ng mga TikTok Video?", a: <p className="mb-0">Sa kasalukuyan, sinusuportahan nito ang pag-download ng isang TikTok video o audio file sa isang pagkakataon.</p> },
    { q: "Maaari ba akong Mag-download ng Mga TikTok Video ayon sa Username, Hashtag, o Account?", a: <p className="mb-0">Hindi, kasalukuyang hindi sumusuporta sa pag-download ng mga video sa pamamagitan ng username, hashtag, o buong profile. Kailangan mong i-paste ang direct link ng isang partikular na TikTok na video para ma-download ito.</p> },
    { q: "Bakit Hindi Gumagana ang TikTok Downloader sa Aking Device?", a: <p className="mb-0">Ito ay maaaring dahil sa mga isyu sa browser, isang di-wastong link ng video, o isang pansamantalang paghihigpit sa TikTok. I-refresh ang page, tingnan ang link, o subukan ang ibang browser.</p> },
    { q: "Mayroon bang Magagamit na App sa Google Play Store?", a: <p className="mb-0">Hindi. Wala kaming opisyal na mobile app. Ito ay dinisenyo upang gumana online sa pamamagitan ng mga web browser.</p> },
    { q: "Nag-iimbak ba tayo ng Mga Kopya ng Na-download na TikTok Video?", a: <p className="mb-0">Hindi. Hindi nag-iimbak ng mga video o nagtatago ng mga kopya ng na-download na nilalaman. Ang lahat ng mga file ay naka-save sa iyong device.</p> },
    { q: "Mayroon bang Limitasyon sa Pag-download?", a: <p className="mb-0">Hindi. Sinusuportahan namin ang walang limitasyong pag-download nang walang mga watermark.</p> },
    { q: "Saan Nakaimbak ang Mga TikTok Video Pagkatapos Mag-download?", a: <p className="mb-0">Ang mga na-download na video at audio file ay naka-save sa default na folder ng pag-download ng iyong device.</p> },
    { q: "Bakit Nabigo o Hindi Gumagana ang Aking TikTok Video Download?", a: (
      <div>
        <p className="mb-0">Mayroong 3 karaniwang dahilan kung bakit hindi ma-download ang isang TikTok video:</p>
        <ul style={{ marginTop: 8, paddingLeft: 0, listStyle: "none" }}>
          <li style={{ display: "flex", gap: 8, padding: "4px 0" }}><span style={{ color: "#ff3b5c", lineHeight: 1.4 }} aria-hidden="true"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ display: "block", marginTop: 4 }}><circle cx="12" cy="12" r="9" fill="rgba(255,59,92,0.18)"/><path d="M8 12l2.5 2.5L16 9" stroke="#ff3b5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><strong style={{ color: "#fff" }}>Hindi Available o Na-delete ang Video:</strong> Maaaring na-delete o inalis ng creator ang video.</span></li>
          <li style={{ display: "flex", gap: 8, padding: "4px 0" }}><span style={{ color: "#ff3b5c", lineHeight: 1.4 }} aria-hidden="true"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ display: "block", marginTop: 4 }}><circle cx="12" cy="12" r="9" fill="rgba(255,59,92,0.18)"/><path d="M8 12l2.5 2.5L16 9" stroke="#ff3b5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><strong style={{ color: "#fff" }}>Pribadong Account:</strong> Hindi mada-download ang mga video mula sa mga pribadong account.</span></li>
          <li style={{ display: "flex", gap: 8, padding: "4px 0" }}><span style={{ color: "#ff3b5c", lineHeight: 1.4 }} aria-hidden="true"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ display: "block", marginTop: 4 }}><circle cx="12" cy="12" r="9" fill="rgba(255,59,92,0.18)"/><path d="M8 12l2.5 2.5L16 9" stroke="#ff3b5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><strong style={{ color: "#fff" }}>Maling URL:</strong> Tiyaking i-paste mo ang tama at kumpletong link ng video o audio ng TikTok.</span></li>
        </ul>
      </div>
    )}
  ];

  return (
    <div className="home-faq" itemScope itemType="https://schema.org/FAQPage">
      <h2 className="text-center">Mga Madalas Itanong</h2>
      <p className="home-faq__intro">Hanapin ang mabilis na sagot tungkol sa TikTok Downloader, mga format, seguridad, at paggamit sa iba&apos;t ibang device.</p>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <details className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <summary itemProp="name">{question}</summary>
      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">{answer}</div>
      </div>
    </details>
  );
}
