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
      "name": "TikTok Downloader na Walang Watermark - HD at Mabilis",
      "description": "Mag-download ng TikTok video nang walang watermark sa Tagalog. Libre, mabilis, at gumagana sa Android, iPhone, PC, at Mac nang walang app o login.",
      "inLanguage": "tl",
      "isPartOf": { "@id": "https://tiktokdownloader.ph/#website" },
      "about": { "@id": "https://tiktokdownloader.ph/#app" }
    },
    {
      "@type": "Article",
      "@id": "https://tiktokdownloader.ph/#article",
      "headline": "TikTok Downloader na Walang Watermark - HD at Mabilis",
      "description": "Mag-download ng TikTok video nang walang watermark sa Tagalog. Libre, mabilis, at gumagana sa Android, iPhone, PC, at Mac nang walang app o login.",
      "inLanguage": "tl",
      "url": "https://tiktokdownloader.ph/",
      "author": { "@type": "Organization", "name": "TikTok Downloader PH", "url": "https://tiktokdownloader.ph/" },
      "publisher": { "@type": "Organization", "name": "TikTok Downloader PH", "url": "https://tiktokdownloader.ph/" },
      "datePublished": "2026-08-21T13:34:28+08:00",
      "dateModified": "2026-08-21T13:34:28+08:00",
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
        "HD MP4 hanggang 1080p Full HD, depende sa orihinal",
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
  title: "TikTok Downloader na Walang Watermark - HD at Mabilis",
  description: "Mag-download ng TikTok video nang walang watermark sa Tagalog. Libre, mabilis, at gumagana sa Android, iPhone, PC, at Mac nang walang app o login.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/" },
  openGraph: {
    siteName: "TikTok Downloader",
    title: "TikTok Downloader na Walang Watermark - HD at Mabilis",
    description: "Mag-download ng TikTok video nang walang watermark sa Tagalog. Libre, mabilis, at gumagana sa Android, iPhone, PC, at Mac nang walang app o login.",
    type: "website",
    url: "https://tiktokdownloader.ph/",
    images: [{ url: "https://tiktokdownloader.ph/images/homepage-og-1200x630.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Downloader na Walang Watermark - HD at Mabilis",
    description: "Mag-download ng TikTok video nang walang watermark sa Tagalog. Libre, mabilis, at gumagana sa Android, iPhone, PC, at Mac nang walang app o login.",
    images: ["https://tiktokdownloader.ph/images/homepage-og-1200x630.webp"],
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
        {/* H1 rendered server-side ? stays in SSR HTML regardless of client hydration */}
        <section className="home-hero-redesign">
          <div className="home-hero-redesign__inner">
            <h1 className="home-hero-redesign__title">TikTok Downloader Without Watermark</h1>
            <p className="home-hero-redesign__copy">Ang <strong>TikTok Downloader</strong> ay isang libreng online tool na nagbibigay-daan sa iyong mag-download at mag-save ng mga TikTok video nang walang watermark, sa HD MP4 o MP3 na format, direkta mula sa iyong browser &mdash; walang app, walang APK, at walang kailangang account.</p>
            <DeferredDownloader />
            <div className="home-hero-redesign__chips" aria-label="TikTok Downloader benefits">
              {[
                { label: "Unlimited", icon: <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M7.5 8.5c-2.2 0-4 1.6-4 3.5s1.8 3.5 4 3.5c1.8 0 3.2-1 4.5-3.5 1.3-2.5 2.7-3.5 4.5-3.5 2.2 0 4 1.6 4 3.5s-1.8 3.5-4 3.5c-1.8 0-3.2-1-4.5-3.5-1.3-2.5-2.7-3.5-4.5-3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { label: "No Watermark", icon: <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M12 3.5 19 6v5.2c0 4.4-2.8 7.9-7 9.3-4.2-1.4-7-4.9-7-9.3V6l7-2.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m8.8 12.2 2.1 2.1 4.4-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { label: "MP4 & MP3", icon: <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M5 5.5h8.5v13H5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M13.5 9.5 19 7v10l-5.5-2.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M8 9.5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> }
              ].map((chip) => (
                <span key={chip.label} className="home-hero-redesign__chip">
                  <span className="home-hero-redesign__chip-icon">{chip.icon}</span>
                  <span><strong>{chip.label}</strong></span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <div style={{ marginTop: 32, paddingBottom: 20 }}>

          {/* Intro */}
          <section className="home-intro-white">
            <h2>TikTok Downloader</h2>
            <div className="home-intro-white__body">
              <div className="home-intro-white__text">
                <p>Kung sinubukan mo nang mag-save ng mga video sa TikTok, malamang na naranasan mo na ang mga karaniwang problema &mdash; watermark, mababang kalidad, o mga tool na humihingi ng pagpaparehistro bago ka makapag-download. Tinatanggal ng aming TikTok Downloader ang mga hadlang na iyon at ginagawang simple ang buong proseso: kopyahin, i-paste, i-download.</p>
                <p>Isa itong libreng TikTok video downloader na nagpapahintulot sa iyong mag-save ng mga video nang walang watermark sa mataas na kalidad na MP4. Walang kailangang app, walang APK na ida-download, at walang account &mdash; gumagana ang lahat direkta sa iyong browser. Sinusuportahan din nito ang mga video mula sa TikTok Lite at Douyin (ang Chinese na bersyon ng TikTok, dating kilala bilang Musically). Gumagamit ka man ng <a href="/download-tiktok-videos-sa-android">Android</a>, <a href="/download-tiktok-videos-sa-iphone">iPhone</a>, <a href="/download-sa-pc">Windows</a>, o Mac, handa itong gamitin anumang oras.</p>
              </div>
              <div className="home-intro-white__media">
                <Image src="/images/tiktok-downloader.webp" alt={"TikTok Downloader na walang watermark \u2014 libreng tool para mag-download ng TikTok video sa HD"} width={960} height={600} loading="lazy" quality={60} sizes="(max-width: 991px) 100vw, 50vw" />
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
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-ibahagi.webp" alt="I-tap ang Share button sa TikTok para kopyahin ang video link" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/Kopyahin-ang-Link-ng-Video.webp" alt="Kopyahin ang link ng TikTok video mula sa Share button" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
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
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-pindutan-ng-i-paste.webp" alt="I-paste ang TikTok link sa downloader box" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                    <div className="step-image-strip__item">
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-pindutan-ng-i-paste2.webp" alt="I-tap ang Paste para ilagay ang TikTok URL sa downloader" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
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
                      <Image className="step-image-strip__img" src="/images/i-tap-ang-pindutan-ng pag-download.webp" alt="I-download ang TikTok video bilang MP4 na walang watermark" width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 46vw, 360px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Screenshot Gallery */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>Mga Larawan ng Tool na Gumagana</h2>
            <p className="text-center" style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", marginBottom: 20 }}>Tingnan ang aktwal na daloy ng pag-copy, pag-paste, at pag-download sa TikTok Downloader.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14 }}>
              {[
                { src: "/images/i-tap-ang-ibahagi.webp", alt: "TikTok app na ipinapakita ang Share button para kopyahin ang video link", caption: "Ibahagi" },
                { src: "/images/Kopyahin-ang-Link-ng-Video.webp", alt: "Pagkopya ng TikTok video link mula sa share menu", caption: "Copy Link" },
                { src: "/images/i-tap-ang-pindutan-ng-i-paste.webp", alt: "TikTok link na ipina-paste sa downloader box", caption: "I-paste ang link" },
                { src: "/images/i-tap-ang-pindutan-ng-i-paste2.webp", alt: "Downloader box na may TikTok URL na handa nang i-load", caption: "Handa nang i-load" },
                { src: "/images/i-tap-ang-pindutan-ng pag-download.webp", alt: "Pag-download ng TikTok video bilang MP4 na walang watermark", caption: "Download MP4" }
              ].map((shot) => (
                <figure key={shot.src} style={{ margin: 0, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 10 }}>
                  <Image src={shot.src} alt={shot.alt} width={400} height={650} loading="lazy" quality={50} sizes="(max-width: 767px) 45vw, 180px" style={{ display: "block", width: "100%", height: "auto", borderRadius: 8 }} />
                  <figcaption style={{ color: "rgba(255,255,255,0.62)", fontSize: ".78rem", textAlign: "center", marginTop: 8 }}>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Specs Table */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 16 }}>TikTok Downloader &mdash; Buod ng mga Tampok</h2>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <table className="table table-dark mb-0" style={{ fontSize: ".9rem", borderColor: "rgba(255,255,255,0.06)", tableLayout: "fixed", width: "100%" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ padding: "12px 18px", color: "#fff", width: "38%" }}>Katangian</th>
                    <th scope="col" style={{ padding: "12px 18px", color: "#fff" }}>Detalye</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)", width: "38%" }}><strong>Format ng Output</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)" }}>MP4 (video), MP3 (audio) &mdash; universal compatibility sa lahat ng device</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)" }}><strong>Kalidad</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)" }}>Hanggang 1080p Full HD, depende sa orihinal na upload ng creator</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)" }}><strong>Bilis ng Pag-download</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)" }}>Karaniwang 5&ndash;15 segundo bawat video</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)" }}><strong>Limitasyon</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)" }}>Walang limitasyon &mdash; unlimited na pag-download</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)" }}><strong>Presyo</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)" }}>100% libre, walang subscription o nakatagong bayad</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)" }}><strong>Suporta sa Device</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)" }}>Android, iPhone, iPad, Windows, Mac, Linux</td></tr>
                  <tr><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.72)", borderBottom: "none" }}><strong>Seguridad</strong></td><td style={{ padding: "12px 18px", color: "rgba(255,255,255,0.82)", borderBottom: "none" }}>SSL-encrypted, walang login, walang naka-imbak na data</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Formats and Quality */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Mga Format at Kalidad na Sinusuportahan</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 18 }}>Iba&rsquo;t ibang format ang maaari mong makuha depende sa kung ano ang kailangan mo &mdash; video, audio, o mataas na kalidad na file para sa pag-edit.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>MP4 (Video)</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Ang <strong style={{ color: "#fff" }}>MP4</strong> ang pangunahing format ng aming downloader. Gumagamit ito ng <strong style={{ color: "#fff" }}>H.264</strong> na compression, kaya maliit ang file size pero mataas pa rin ang kalidad. Nagpe-play ang MP4 sa halos lahat ng device at editor &mdash; Android, iPhone, Windows, Mac, CapCut, at Canva &mdash; nang walang extra na software.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>MP3 (Audio)</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Kung ang tunog lang ang kailangan mo, i-convert ang TikTok sa <strong style={{ color: "#fff" }}>MP3</strong>. Perpekto ito para sa musika, trending sounds, podcast clips, o kahit ringtone. Kinukuha nito ang orihinal na audio nang hindi kasama ang video.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>HD, Full HD, at 1080p</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Kinukuha ng tool ang <strong style={{ color: "#fff" }}>pinakamataas na resolution na available sa orihinal na post</strong> &mdash; kadalasang <strong style={{ color: "#fff" }}>720p HD</strong> o <strong style={{ color: "#fff" }}>1080p Full HD</strong>. Kung mataas ang kalidad ng na-upload ng creator, mataas din ang makukuha mo. Ngunit tandaan: kung mababa o na-compress ang orihinal, hindi ito magiging mas malinaw pagkatapos i-download. Walang downloader ang makakadagdag ng detalye na wala sa orihinal na file &mdash; ang <strong style={{ color: "#fff" }}>bitrate</strong> at <strong style={{ color: "#fff" }}>resolution</strong> ay laging nakadepende sa source.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>Puwede bang gawing GIF?</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Sa kasalukuyan, hindi direktang sumusuporta ang tool sa <strong style={{ color: "#fff" }}>GIF</strong> na output. Puwede mo namang i-download ang video bilang MP4 at gamitin ang isang libreng MP4-to-GIF converter kung kailangan mo ng GIF format.</p>
          </section>

          {/* Features */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6 }}>Mga Tampok ng TikTok Downloader</h2>
            <p className="text-center" style={{ color: "rgba(255,255,255,0.5)", fontSize: ".875rem", marginBottom: 20 }}>Binuo para sa bilis, kalidad, at pagiging simple sa lahat ng device.</p>
            <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
              {[
                {
                  svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" /></svg>,
                  title: "Mabilis na Bilis ng Pag-download",
                  desc: "Pinoproseso ng aming tool ang mga link ng video at inihahanda ang mga file sa loob lamang ng ilang segundo."
                },
                {
                  svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.6-2.9 7.6-7 9-4.1-1.4-7-4.4-7-9V6l7-3Z" /><path d="m9 12 2 2 4-5" /></svg>,
                  title: "Walang Watermark",
                  desc: <>I-save ang malinis na TikTok video nang walang anumang watermark. Awtomatiko nitong <strong>tinatanggal ang watermark</strong> at TikTok logo, kaya hindi mo na kailangan ng hiwalay na <strong>logo remover</strong>.</>
                },
                {
                  svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3V9Z" /><path d="M7 3v4" /><path d="M17 3v4" /></svg>,
                  title: "Suporta sa HD MP4 Format",
                  desc: "Mag-download ng mga video sa HD MP4 na format at makakuha ng mataas na kalidad na nilalaman nang madali."
                },
                {
                  svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 15c-2 0-4-1.6-4-4s2-4 4-4c1.4 0 2.7.8 3.4 2" /><path d="M17 9c2 0 4 1.6 4 4s-2 4-4 4c-1.4 0-2.7-.8-3.4-2" /><path d="M8 12h8" /></svg>,
                  title: "Walang Limitasyon sa Pag-download",
                  desc: "Mag-download ng maraming video hangga't gusto mo nang walang anumang pang-araw-araw na limitasyon."
                },
                {
                  svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M17 8l5-5" /><path d="M22 8l-5-5" /></svg>,
                  title: "Walang Kinakailangang Sign-up",
                  desc: "Gamitin kaagad ang TikTok video downloader nang hindi nagsa-sign up o nagbabahagi ng personal na impormasyon."
                },
                {
                  svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /><path d="m9 16 2 2 4-4" /></svg>,
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
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Ang aming tool ay perpekto para sa pag-download ng mga video na walang watermark para sa offline na panonood o pagbabahagi sa mga kaibigan. Tinutulungan ka nitong permanenteng i-save ang iyong mga paboritong clip, kahit na ang orihinal na video ay tinanggal na ng platform sa ibang pagkakataon. Bukod sa pag-download, gumagana rin ang aming tool bilang isang <strong style={{ color: "#fff" }}>TikTok watermark remover</strong> &mdash; awtomatiko nitong tinatanggal ang TikTok logo at username sa video, kaya malinis ang makukuha mong file.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Maaari mong i-save ang iyong mga video nang walang logo ng TikTok at i-repost ang mga ito sa mga platform tulad ng YouTube Shorts, Instagram Reels, at Facebook para palakihin ang iyong audience.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Mabilis, libre, at gumagana sa lahat ng device &mdash; walang login, walang app, walang limitasyon.</p>
          </section>

          {/* Downloader vs Watermark Remover */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>TikTok Downloader vs Watermark Remover &mdash; Pareho Ba?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Madalas itong ipinagkakamali, pero magkaugnay lang ang dalawa. Ang <strong style={{ color: "#fff" }}>TikTok downloader</strong> ang tool na nagse-save ng video mula sa TikTok papunta sa iyong device. Ang <strong style={{ color: "#fff" }}>watermark remover</strong> naman ay tumutukoy sa proseso ng pagtanggal ng TikTok logo at username sa video.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Ang mabuting balita: sa aming tool, iisang hakbang lang ang dalawa. Kapag nag-download ka gamit ang aming <strong style={{ color: "#fff" }}>TikTok Downloader</strong>, awtomatiko nang tinatanggal ang watermark &mdash; kaya malinis na ang makukuha mong file nang hindi na kailangan ng hiwalay na app o <strong style={{ color: "#fff" }}>watermark remover</strong>.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Kaya kung naghahanap ka man ng &quot;TikTok downloader&quot; o &quot;TikTok watermark remover,&quot; iisa lang ang sagot: kopyahin ang link, i-paste sa itaas, at makukuha mo agad ang video nang walang watermark &mdash; libre at walang app.</p>
          </section>
          {/* What You Can Download */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Ano ang Puwede Mong I-download</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 16 }}>Hindi lang basic na video ang kaya ng aming tool. Sinusuportahan nito ang halos lahat ng uri ng TikTok content:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>TikTok Video (walang watermark)</strong> &mdash; ang pangunahing gamit: i-save ang kahit anong public na video bilang malinis na MP4. <a href="https://tiktokdownloader.ph/tiktok-to-mp4" style={{ color: "#ff3b5c", textDecoration: "none" }}>I-convert sa MP4</a></li>
              <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>TikTok Photo at Slideshow</strong> &mdash; i-download ang bawat larawan sa isang photo post o carousel bilang HD JPG, o ang buong slideshow bilang video. <a href="https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok" style={{ color: "#ff3b5c", textDecoration: "none" }}>Download Slideshow</a></li>
              <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>TikTok Stories</strong> &mdash; i-save ang mga TikTok Stories bago ito mawala pagkatapos ng 24 oras. <a href="https://tiktokdownloader.ph/download-tiktok-stories" style={{ color: "#ff3b5c", textDecoration: "none" }}>Download Stories</a></li>
              <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>Sound at Musika (MP3)</strong> &mdash; kunin ang audio, trending sound, o kanta bilang MP3 file, perpekto rin bilang ringtone. <a href="https://tiktokdownloader.ph/download-tiktok-mp3" style={{ color: "#ff3b5c", textDecoration: "none" }}>Download MP3</a></li>
              <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>Duet at Stitch</strong> &mdash; i-download ang mga collaborative na video tulad ng duet at stitch, kasama ang orihinal na audio.</li>
              <li style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>Live Replay</strong> &mdash; hindi puwedeng kunin ang live habang nangyayari pa, ngunit puwede mong i-download ang naka-save na replay ng isang public na TikTok Live.</li>
              <li style={{ padding: "12px 0", color: "rgba(255,255,255,0.68)", fontSize: ".92rem", lineHeight: 1.75 }}><strong style={{ color: "#fff" }}>Subtitles / Caption</strong> &mdash; kung may naka-burn na caption ang video, kasama ito sa na-download na MP4. (Hindi kayang kunin ang auto-generated na subtitle bilang hiwalay na file.)</li>
            </ul>
          </section>

          {/* Device and Browser Compatibility */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Gumagana sa Lahat ng Device at Browser</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 18 }}>Ang aming TikTok Downloader ay ganap na web-based &mdash; walang app o APK na kailangang i-install. Basta&rsquo;t may browser at internet ka, gumagana ito kahit saang device.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>Mga Suportadong Device</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Gumagana ang tool sa lahat ng modernong device: <strong style={{ color: "#fff" }}>Android</strong> phone at <strong style={{ color: "#fff" }}>tablet</strong>, <strong style={{ color: "#fff" }}>iPhone</strong> at <strong style={{ color: "#fff" }}>iPad</strong> (<strong style={{ color: "#fff" }}>iOS</strong>), <strong style={{ color: "#fff" }}>Windows</strong> PC, <strong style={{ color: "#fff" }}>Mac</strong> (<strong style={{ color: "#fff" }}>macOS</strong>), <strong style={{ color: "#fff" }}>Linux</strong>, at kahit <strong style={{ color: "#fff" }}>Chromebook</strong>. Pareho ang simpleng proseso saan ka man naka-download &mdash; kopyahin, i-paste, i-save.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>Mga Suportadong Phone Brand</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Sinubukan at gumagana ang downloader sa lahat ng sikat na brand sa Pilipinas &mdash; <strong style={{ color: "#fff" }}>Samsung</strong> (Galaxy), <strong style={{ color: "#fff" }}>Xiaomi</strong>, <strong style={{ color: "#fff" }}>Redmi</strong>, <strong style={{ color: "#fff" }}>POCO</strong>, <strong style={{ color: "#fff" }}>OPPO</strong>, <strong style={{ color: "#fff" }}>realme</strong>, <strong style={{ color: "#fff" }}>vivo</strong>, <strong style={{ color: "#fff" }}>Google Pixel</strong>, at <strong style={{ color: "#fff" }}>OnePlus</strong>. Walang espesyal na setting na kailangan; pareho ang hakbang sa lahat ng device.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>Mga Suportadong Browser</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Buksan lang ang site sa kahit anong browser: <strong style={{ color: "#fff" }}>Chrome</strong>, <strong style={{ color: "#fff" }}>Safari</strong>, <strong style={{ color: "#fff" }}>Firefox</strong>, <strong style={{ color: "#fff" }}>Microsoft Edge</strong>, <strong style={{ color: "#fff" }}>Opera</strong>, o <strong style={{ color: "#fff" }}>Samsung Internet</strong> &mdash; na siyang default browser sa maraming Samsung phone sa Pilipinas. Lahat ng ito ay sumusuporta sa mabilis at ligtas na pag-download.</p>
            <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: "20px 0 8px" }}>Panonood sa Malaking Screen</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12 }}>Dahil MP4 ang output, puwede mong panoorin ang mga na-download na video offline sa <strong style={{ color: "#fff" }}>Smart TV</strong>, laptop, o tablet &mdash; walang kailangang app, walang buffering.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Dahil malinis at walang watermark ang mga na-download na video, direkta mo itong magagamit sa mga editing app tulad ng <strong style={{ color: "#fff" }}>CapCut</strong>, <strong style={{ color: "#fff" }}>VN</strong>, at <strong style={{ color: "#fff" }}>Canva</strong> para sa iyong sariling content.</p>
          </section>

          {/* Philippines Download Context */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Paano Mag-download ng TikTok sa Pilipinas</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Ginawa ang aming TikTok Downloader para gumana nang maayos para sa mga Pinoy &mdash; kahit sa iba&rsquo;t ibang klase ng koneksyon at network dito sa Pilipinas.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Gumagana ito sa lahat ng major na network: <strong style={{ color: "#fff" }}>Globe</strong>, <strong style={{ color: "#fff" }}>Smart</strong>, at <strong style={{ color: "#fff" }}>DITO</strong> para sa mobile data, at <strong style={{ color: "#fff" }}>Converge</strong>, <strong style={{ color: "#fff" }}>PLDT Home</strong>, o iba pang home WiFi para sa mas mabilis na pag-download. Dahil web-based ang tool, hindi ito humihingi ng sobrang bilis &mdash; gumagana pa rin ito kahit sa <strong style={{ color: "#fff" }}>mabagal na LTE</strong> o sa lugar na mahina ang signal, tulad ng ilang bahagi ng probinsya. Bumabagal lang ang download kung mabagal ang koneksyon, pero hindi ito humihinto.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Marami ring Pinoy ang nag-do-download gamit ang libreng WiFi &mdash; sa <strong style={{ color: "#fff" }}>Piso WiFi</strong>, <strong style={{ color: "#fff" }}>GoWiFi</strong>, o WiFi ng kapitbahay o kainan. Dahil maliit lang ang karaniwang file ng TikTok video, mabilis itong matatapos kahit sa ganitong koneksyon, na malaking tulong kung nagtitipid ka sa <strong style={{ color: "#fff" }}>prepaid load</strong>.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Saan ka man sa Pilipinas, libre at pareho ang serbisyo &mdash; walang region lock at walang extra na bayad.</p>
          </section>

          {/* Data Usage */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 14 }}>Gaano Karaming Data ang Kinakain ng Pag-download?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Kaunti lang. Ang isang karaniwang 15&ndash;30 segundong TikTok video sa HD ay humigit-kumulang <strong style={{ color: "#fff" }}>5&ndash;15 MB</strong> lang &mdash; mas maliit pa kaysa sa isang larawang mataas ang resolution. Ibig sabihin, kahit nasa mobile data ka, hindi nito lalamunin agad ang iyong load.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 8 }}>Ilang halimbawa:</p>
            <ul style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12, paddingLeft: 20 }}>
              <li><strong style={{ color: "#fff" }}>Maikling video (15 seg, HD):</strong> mga 5&ndash;8 MB</li>
              <li><strong style={{ color: "#fff" }}>Mas mahabang video (60 seg, HD):</strong> mga 12&ndash;20 MB</li>
              <li><strong style={{ color: "#fff" }}>MP3 audio lang:</strong> mas maliit pa, mga 1&ndash;3 MB</li>
            </ul>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Kung marami kang plano i-download o mahahabang video, mas mainam gumamit ng <strong style={{ color: "#fff" }}>WiFi</strong> para makatipid sa prepaid data. Pero para sa isa o dalawang video, kaya ito ng kahit maliit na data allowance.</p>
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
                { title: "Mag-download sa Wi-Fi Kapag Marami ang Ise-save", text: "Kung sunod-sunod ang ida-download mo o mahaba ang video, mas praktikal gumamit ng Wi-Fi para mas tuloy-tuloy ang proseso at hindi mabilis maubos ang data mo." },
                { title: "Hintayin ang Pag-load Bago Mag-download", text: "Kung mabagal ang pag-load ng video, hintayin munang lumabas ang mga download option bago pindutin ang button para mas maayos ang pag-save." },
                { title: "I-save ang Mga Viral Video Bago Pa Matanggal", text: "Minsan tinatanggal ng mga creator ang kanilang mga video o ginagawang pribado. Kung may gusto kang i-save — viral dance, tutorial, o memorable clip — i-download agad bago pa mawala ang video." }
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
    { q: "Ligtas ba ang TikTok Downloader?", a: <p className="mb-0">Oo, ligtas na ligtas. Protektado ng <strong>SSL encryption</strong> ang lahat ng koneksyon sa aming site, kaya secure ang iyong data. Hindi ito naglalaman ng <strong>malware</strong> o <strong>virus</strong>, hindi humihingi ng login o password, at <strong>anonymous</strong> ang paggamit &mdash; walang tracking at walang naka-imbak na history ng iyong mga pinanood o na-download. Ligtas itong gamitin sa anumang device.</p> },
    { q: "Paano Gamitin ang Tool na Ito?", a: <p className="mb-0">I-paste ang link ng TikTok video sa input box sa itaas at i-click ang Load Video. Kapag lumabas ang mga download button, piliin ang iyong gustong format &mdash; MP4 na walang watermark, MP4 na may watermark, o MP3 audio.</p> },
    { q: "Maaari Ko Bang Mag-download ng TikTok Videos Nang Walang Watermark sa Aking Telepono?", a: <p className="mb-0">Oo! Gumagana ang web app na ito sa halos bawat platform &mdash; iPhone, iPad, Android, iOS, Windows, Mac, at Linux &mdash; direkta mula sa iyong browser nang walang anumang pag-install.</p> },
    { q: "Maaari Ko Bang I-convert ang isang TikTok sa MP3?", a: <p className="mb-0">Oo! I-paste ang link sa itaas, i-load ang video, at i-click ang Download Audio button para i-save ang audio bilang MP3.</p> },
    { q: "Paano Mag-download ng TikTok Videos sa iOS?", a: <p className="mb-0">Kopyahin ang link ng video mula sa TikTok app, bisitahin ang tiktokdownloader.ph sa Safari o ibang browser, i-paste ang link, at i-click ang download. Maaari mong i-save ang video nang direkta sa iyong camera roll o photos library.</p> },
    { q: "Gaano Katagal ang Pag-download ng Video?", a: <p className="mb-0">Ang bilis ng pag-download ay depende sa iyong koneksyon sa internet at laki ng video. Ang aming tool ay na-optimize para maging mabilis &mdash; karamihan sa mga video ay handa sa loob ng ilang segundo.</p> },
    { q: "Libre ba ang TikTok Downloader na Gamitin?", a: <p className="mb-0">Oo, ganap na libre itong gamitin. Walang nakatagong singil, subscription, o kinakailangan sa pagbabayad &mdash; mag-download ng walang limitasyong TikTok video nang libre.</p> },
    { q: "Kailangan Ko Bang Mag-install ng Anumang Software, App, o Extension ng Browser?", a: <p className="mb-0">Hindi! Ito ay isang ganap na online na tool &mdash; walang software, app, o browser extension ay kinakailangan. Buksan lamang ito sa iyong browser, i-paste ang link ng TikTok video, at i-download kaagad ang iyong video.</p> },
    { q: "Maaari ba akong Mag-download ng Mga Video mula sa Mga Pribadong Account?", a: <p className="mb-0">Hindi. Makakapag-download lang ng mga pampublikong TikTok na video. Pribado o pinaghihigpitang nilalaman ay hindi suportado.</p> },
    { q: "Ano ang Kalidad ng mga Na-download na TikTok Video?", a: <p className="mb-0">Sinusuportahan ng platform ang pag-download ng mga TikTok na video sa HD MP4 na format na walang watermark &mdash; hanggang 1080p Full HD, depende sa orihinal na upload.</p> },
    { q: "Sinusuportahan ba nito ang Bultuhang Pag-download ng mga TikTok Video?", a: <p className="mb-0">Sa kasalukuyan, sinusuportahan nito ang pag-download ng isang TikTok video o audio file sa isang pagkakataon.</p> },
    { q: "Maaari ba akong Mag-download ng Mga TikTok Video ayon sa Username, Hashtag, o Account?", a: <p className="mb-0">Hindi, kasalukuyang hindi sumusuporta sa pag-download ng mga video sa pamamagitan ng username, hashtag, o buong profile. Kailangan mong i-paste ang direct link ng isang partikular na TikTok na video para ma-download ito.</p> },
    { q: "Bakit Hindi Gumagana ang TikTok Downloader sa Aking Device?", a: <p className="mb-0">Ito ay maaaring dahil sa mga isyu sa browser, isang di-wastong link ng video, o isang pansamantalang paghihigpit sa TikTok. I-refresh ang page, tingnan ang link, o subukan ang ibang browser.</p> },
    { q: "Mayroon bang Magagamit na App sa Google Play Store?", a: <p className="mb-0">Hindi. Wala kaming opisyal na mobile app. Ito ay dinisenyo upang gumana online sa pamamagitan ng mga web browser.</p> },
    { q: "Iniimbak ba namin ang Mga Kopya ng Na-download na TikTok Video?", a: <p className="mb-0">Hindi. Hindi kami nag-iimbak ng mga video o nagtatago ng mga kopya ng na-download na nilalaman. Ang lahat ng mga file ay naka-save sa iyong device.</p> },
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
