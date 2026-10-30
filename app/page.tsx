import { SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import DeferredDownloader from "@/components/DeferredDownloader";
import HowToSlider from "@/components/HowToSlider";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tiktokdownloader.ph#website",
      "url": "https://tiktokdownloader.ph",
      "name": SITE_NAME,
      "description": "TikTok downloader na walang watermark, mabilis, at libre. I-convert sa MP3 na may walang limitasyong pag-download."
    },
    {
      "@type": "WebPage",
      "@id": "https://tiktokdownloader.ph#webpage",
      "url": "https://tiktokdownloader.ph",
      "name": "TikTok Downloader na Walang Watermark - HD at Mabilis",
      "description": "I-save ang paborito mong videos gamit ang TikTok Downloader. Libre, HD at walang watermark, walang app o login. Gumagana sa Android, iPhone at PC.",
      "inLanguage": "fil-PH",
      "datePublished": "2026-10-30T15:51:50+08:00",
      "dateModified": "2026-10-30T15:51:50+08:00",
      "isPartOf": { "@id": "https://tiktokdownloader.ph#website" },
      "about": { "@id": "https://tiktokdownloader.ph#app" }
    },
    {
      "@type": "Organization",
      "@id": "https://tiktokdownloader.ph#organization",
      "name": SITE_NAME,
      "url": "https://tiktokdownloader.ph",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tiktokdownloader.ph/icon-192.png",
        "width": 192,
        "height": 192
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://tiktokdownloader.ph/contact"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://tiktokdownloader.ph#app",
      "name": SITE_NAME,
      "url": "https://tiktokdownloader.ph",
      "applicationCategory": "MultimediaApplication",
      "applicationSubCategory": "VideoDownloader",
      "operatingSystem": "Android, iOS, Windows, macOS, Web Browser",
      "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Edge, Safari.",
      "description": "Libreng TikTok video downloader na nagbibigay-daan sa pag-save ng mga TikTok video nang walang watermark sa HD MP4 o MP3 na format. Walang login, walang app, walang limitasyon.",
      "featureList": [
        "Mag-download ng TikTok video nang walang watermark",
        "HD MP4 hanggang 1080p Full HD, depende sa orihinal",
        "Pag-extract ng MP3 audio",
        "Walang kailangang pagpaparehistro",
        "Walang pang-araw-araw na limitasyon",
        "Gumagana sa lahat ng device"
      ],
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
      "isPartOf": { "@id": "https://tiktokdownloader.ph#website" }
    },
    {
      "@type": "ItemList",
      "@id": "https://tiktokdownloader.ph#articles",
      "name": "Mga Gabay at Artikulo - TikTok Downloader Blog",
      "description": "Mga step-by-step na gabay at tips para sa pag-download ng TikTok videos.",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://tiktokdownloader.ph/download-sa-pc", "name": "Paano Mag-download ng mga TikTok Video sa PC (Windows at Mac)" },
        { "@type": "ListItem", "position": 2, "url": "https://tiktokdownloader.ph/download-tiktok-videos-sa-android", "name": "Mag-download ng mga TikTok Video sa Android (Walang Watermark)" },
        { "@type": "ListItem", "position": 3, "url": "https://tiktokdownloader.ph/tiktok-to-mp4", "name": "TikTok to MP4 Converter Online" },
        { "@type": "ListItem", "position": 4, "url": "https://tiktokdownloader.ph/download-tiktok-mp3", "name": "Download TikTok MP3 Online" },
        { "@type": "ListItem", "position": 5, "url": "https://tiktokdownloader.ph/tiktok-photo-downloader", "name": "Download TikTok Photos & Slideshows" },
        { "@type": "ListItem", "position": 6, "url": "https://tiktokdownloader.ph/download-tiktok-stories", "name": "Download TikTok Stories Without Watermark" },
        { "@type": "ListItem", "position": 7, "url": "https://tiktokdownloader.ph/paano-mag-download-ng-mga-video-sa-tiktok", "name": "Paano Mag-save ng TikTok Video gamit ang TikTok Downloader" },
        { "@type": "ListItem", "position": 8, "url": "https://tiktokdownloader.ph/download-tiktok-videos-sa-iphone", "name": "Mag-download ng mga TikTok Video sa iPhone at iPad" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "TikTok Downloader Without Watermark - Free HD Videos",
  description: "I-save ang paborito mong videos gamit ang TikTok Downloader. Libre, HD at walang watermark, walang app o login. Gumagana sa Android, iPhone at PC.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    siteName: SITE_NAME,
    title: "TikTok Downloader Without Watermark - Free HD Videos",
    description: "I-save ang paborito mong videos gamit ang TikTok Downloader. Libre, HD at walang watermark, walang app o login. Gumagana sa Android, iPhone at PC.",
    type: "website",
    url: "/",
    locale: "fil_PH",
    images: [{ url: "https://tiktokdownloader.ph/images/homepage-og-1200x630.webp", width: 1200, height: 630, alt: "TikTok Downloader na walang watermark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Downloader Without Watermark - Free HD Videos",
    description: "I-save ang paborito mong videos gamit ang TikTok Downloader. Libre, HD at walang watermark, walang app o login. Gumagana sa Android, iPhone at PC.",
    images: [{ url: "https://tiktokdownloader.ph/images/homepage-og-1200x630.webp", alt: "TikTok Downloader na walang watermark" }],
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
            <p className="home-hero-redesign__copy">Ang <strong>TikTok Downloader</strong> ay isang libreng online tool na nagbibigay-daan sa iyong mag-download at mag-save ng mga TikTok video nang walang watermark, sa HD MP4 o MP3 na format, direkta mula sa iyong browser, walang app, walang APK, at walang kailangang account.</p>
            <DeferredDownloader />
            <div className="home-hero-redesign__chips" aria-label="TikTok Downloader benefits">
              {[
                { label: "Walang Limitasyon", icon: <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M7.5 8.5c-2.2 0-4 1.6-4 3.5s1.8 3.5 4 3.5c1.8 0 3.2-1 4.5-3.5 1.3-2.5 2.7-3.5 4.5-3.5 2.2 0 4 1.6 4 3.5s-1.8 3.5-4 3.5c-1.8 0-3.2-1-4.5-3.5-1.3-2.5-2.7-3.5-4.5-3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { label: "Walang Watermark", icon: <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true"><path d="M12 3.5 19 6v5.2c0 4.4-2.8 7.9-7 9.3-4.2-1.4-7-4.9-7-9.3V6l7-2.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m8.8 12.2 2.1 2.1 4.4-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
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
            <div className="home-intro-white__body">
              <div className="home-intro-white__text">
                <p style={{ color: "rgba(33, 37, 41, 0.78)", WebkitTextFillColor: "rgba(33, 37, 41, 0.78)" }}>Kung sinubukan mo nang mag-save ng mga video sa TikTok, malamang na naranasan mo na ang mga karaniwang problema tulad ng watermark, mababang kalidad, o mga tool na humihingi ng pagpaparehistro bago ka makapag-download. Tinatanggal ng aming TikTok Downloader ang mga hadlang na iyon at ginagawang simple ang buong proseso: kopyahin, i-paste, i-download.</p>
                <p style={{ color: "rgba(33, 37, 41, 0.78)", WebkitTextFillColor: "rgba(33, 37, 41, 0.78)" }}>Isa itong libreng TikTok video downloader na nagpapahintulot sa iyong mag-save ng mga video na walang TikTok logo sa mataas na kalidad na MP4. Walang kailangang app, walang APK na ida-download, at walang account, at gumagana ang lahat direkta sa iyong browser. Sinusuportahan din nito ang mga video mula sa TikTok Lite at Douyin (ang Chinese na bersyon ng TikTok, dating kilala bilang Musically). Gumagamit ka man ng <strong>Android</strong>, <strong>iPhone</strong>, <strong>Windows</strong>, o Mac, handa itong gamitin anumang oras.</p>
              </div>
              <div className="home-intro-white__media">
                <Image src="/images/tiktokdownloader.webp" alt="Tiktok downloader free HD" width={1586} height={992} loading="eager" fetchPriority="high" quality={75} sizes="(max-width: 991px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          <section className="home-dark-content-section">
            <h2 className="text-center">Ano ang TikTok Downloader?</h2>
            <p>Ang TikTok downloader ay isang ligtas at madaling gamitin na online na programa na nagbibigay-daan sa mga user na mag-download ng TikTok videos nang walang watermark, habang pinapanatili ang orihinal na kalidad ng content. Dahil dito, nagiging kapaki-pakinabang ito para sa mga content creator, guro, at mga user ng social media na nangangailangan ng malinis at mataas na resolusyon na video para i-repost, gamitin muli, o panoorin offline.</p>
            <p>Isa sa mga pinakatampok na feature ng TikTok downloader ay ang pagpapahintulot nito sa maraming format ng file. Partikular, may opsyon ang mga user na i-save ang video sa MP4 format o i-save lang ang audio sa MP3 format, na perpekto para sa sinumang gustong mag-save ng musika, diyalogo, o sound effects mula sa TikTok videos. Kaya naman, pinapalawak ng kakayahang ito ang gamit nito sa iba’t ibang sitwasyon, mula sa pag-edit ng video hanggang sa paggawa ng audio compilations.</p>
          </section>

          {/* How to Download */}
          <section className="home-howto-showcase" id="step1">
            <div className="home-howto-showcase__inner">
              <div className="home-howto-showcase__heading">
                <h2>Paano Mag-download ng TikTok Video nang Walang Watermark</h2>
                <p>Tatlong malinaw na hakbang lang: kunin ang link, idikit sa TikTok link downloader, at i-save ang video.</p>
              </div>

              <div className="home-howto-showcase__grid">
                <div className="home-howto-steps" aria-label="Mga hakbang sa pag-download ng TikTok video">
                  <article className="home-howto-step">
                    <div className="home-howto-step__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93" />
                        <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07" />
                      </svg>
                    </div>
                    <div className="home-howto-step__body">
                      <span className="home-howto-step__number">Hakbang 1</span>
                      <h3>Kopyahin ang Link ng Video</h3>
                      <p>Buksan ang TikTok, i-tap ang <strong>Ibahagi</strong>, at piliin ang <strong>Copy Link</strong>.</p>
                    </div>
                  </article>

                  <article className="home-howto-step" id="step2">
                    <div className="home-howto-step__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="8" y="2" width="8" height="4" rx="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <path d="M9 14h6" />
                        <path d="M12 11v6" />
                      </svg>
                    </div>
                    <div className="home-howto-step__body">
                      <span className="home-howto-step__number">Hakbang 2</span>
                      <h3>Idikit ang Link</h3>
                      <p>I-paste ang URL sa input box sa itaas at hayaang kunin ng tool ang video.</p>
                    </div>
                  </article>

                  <article className="home-howto-step" id="step3">
                    <div className="home-howto-step__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                      </svg>
                    </div>
                    <div className="home-howto-step__body">
                      <span className="home-howto-step__number">Hakbang 3</span>
                      <h3>I-download ang Video</h3>
                      <p>I-click ang download button at i-save ang MP4 sa iyong device. Piliin ang bersyong walang watermark, o ang may watermark kung iyon ang gusto mo.</p>
                    </div>
                  </article>
                </div>

                <HowToSlider />
              </div>
            </div>
          </section>

          {/* Download formats */}
          <section className="home-formats-white">
            <div className="home-formats-white__inner">
              <div className="home-formats-white__heading">
                <h2>Ano ang Puwede Mong I-save Gamit ang TikTok Video Downloader</h2>
                <p>Piliin ang uri ng content na kailangan mo at buksan ang dedikadong page para sa kumpletong detalye.</p>
              </div>
              <div className="home-specs-table-wrap">
                <table className="home-specs-table">
                  <thead>
                    <tr>
                      <th scope="col">Format</th>
                      <th scope="col">Ano ito</th>
                      <th scope="col">Dedikadong page</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>MP4</strong></td><td>Video na may tunog, hanggang HD</td><td><a href="/tiktok-to-mp4">TikTok to MP4</a></td></tr>
                    <tr><td><strong>MP3</strong></td><td>Tunog lang, mabuti para sa ringtone</td><td><a href="/download-tiktok-mp3">TikTok MP3</a></td></tr>
                    <tr><td><strong>Stories</strong></td><td>Post na nawawala pagkatapos ng 24 oras</td><td><a href="/download-tiktok-stories">TikTok Stories</a></td></tr>
                    <tr><td><strong>Slideshow</strong></td><td>Photo post na may musika</td><td><a href="/tiktok-photo-downloader">TikTok Photo Downloader (Larawan at Slide)</a></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* Features */}
          <section className="home-features-white home-features-preview">
            <div className="home-features-white__inner">
              <div className="home-features-white__heading">
                <h2 style={{ color: "#212529", WebkitTextFillColor: "#212529" }}>Mga Tampok at Benepisyo ng TikTok Downloader</h2>
                <p style={{ color: "rgba(33, 37, 41, 0.74)", WebkitTextFillColor: "rgba(33, 37, 41, 0.74)" }}>Binuo para sa bilis, kalidad, at pagiging simple sa lahat ng device.</p>
              </div>

              <div className="home-specs-table-wrap" style={{ marginBottom: 28 }}>
                <table className="home-specs-table">
                  <thead><tr><th scope="col">Katangian</th><th scope="col">Detalye</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Format ng Output</strong></td><td>MP4 (video) at MP3 (audio), universal compatibility sa lahat ng device</td></tr>
                    <tr><td><strong>Kalidad</strong></td><td>Hanggang 1080p Full HD, depende sa orihinal na upload ng creator</td></tr>
                    <tr><td><strong>Bilis ng Pag-download</strong></td><td>Karaniwang 5 hanggang 15 segundo bawat video</td></tr>
                    <tr><td><strong>Limitasyon</strong></td><td>Walang limitasyon sa bilang ng pag-download</td></tr>
                    <tr><td><strong>Presyo</strong></td><td>100% libre, walang subscription o nakatagong bayad</td></tr>
                    <tr><td><strong>Suporta sa Device</strong></td><td>Android, iPhone, iPad, Windows, Mac, at Linux</td></tr>
                    <tr><td><strong>Seguridad</strong></td><td>SSL-encrypted, walang login, at walang naka-imbak na data</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="home-feature-list">
                {[
                  {
                    svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" /></svg>,
                    title: "Mabilis na Bilis ng Pag-download",
                    desc: "Pinoproseso ng aming tool ang mga link ng video at inihahanda ang mga file sa loob lamang ng ilang segundo."
                  },
                  {
                    svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.6-2.9 7.6-7 9-4.1-1.4-7-4.4-7-9V6l7-3Z" /><path d="m9 12 2 2 4-5" /></svg>,
                    title: "Walang Watermark",
                    desc: "I-save ang malinis na TikTok video, kasama ang HD quality. Awtomatiko nitong tinatanggal ang watermark at TikTok logo, kaya hindi mo na kailangan ng hiwalay na logo remover."
                  },
                  {
                    svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="m10 8 5 3-5 3V8Z" /><path d="M8 22h8M12 18v4" /></svg>,
                    title: "HD TikTok Downloader sa MP4 Format",
                    desc: "Mag-download ng mga video sa HD MP4 na format at makakuha ng mataas na kalidad na nilalaman nang madali."
                  },
                  {
                    svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a4 4 0 1 0 0 8c4 0 8-8 12-8a4 4 0 0 1 0 8C14 16 10 8 6 8Z" /></svg>,
                    title: "Walang Limitasyon sa Pag-download",
                    desc: "Mag-download ng maraming video hangga't gusto mo nang walang anumang pang-araw-araw na limitasyon."
                  },
                  {
                    svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 7.5-2M12 15v2" /></svg>,
                    title: "Walang Kinakailangang Sign-up",
                    desc: "Gamitin kaagad ang libreng TikTok video downloader nang hindi nagsa-sign up o nagbabahagi ng personal na impormasyon."
                  },
                  {
                    svg: <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /><path d="m9 16 2 2 4-4" /></svg>,
                    title: "Ligtas at Secure",
                    desc: "Gumagamit kami ng mga secure na koneksyon upang protektahan ang iyong data at matiyak ang ligtas na karanasan."
                  }
                ].map((feature, i) => (
                  <article className="home-feature-box" key={i}>
                    <span className="home-feature-box__icon" aria-hidden="true">{feature.svg}</span>
                    <h3 style={{ color: "#212529", WebkitTextFillColor: "#212529" }}>{feature.title}</h3>
                    <p style={{ color: "rgba(33, 37, 41, 0.76)", WebkitTextFillColor: "rgba(33, 37, 41, 0.76)" }}>{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {/* Why You Need It */}
          <section className="home-dark-content-section">
            <h2 className="text-center">Bakit Kailangan Mo ng TikTok Video Downloader na Walang Watermark?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Ang aming tool ay perpekto para sa pag-download ng mga video para sa offline na panonood o pagbabahagi sa mga kaibigan. Tinutulungan ka nitong permanenteng i-save ang iyong mga paboritong clip, kahit na ang orihinal na video ay tinanggal na ng platform sa ibang pagkakataon. Bukod sa pag-download, gumagana rin ang aming tool bilang isang <strong style={{ color: "#fff" }}>TikTok watermark remover</strong> na awtomatiko nitong tinatanggal ang TikTok logo at username sa video, kaya malinis ang makukuha mong file.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Maaari mong i-save ang iyong mga video nang walang logo ng TikTok at i-repost ang mga ito sa mga platform tulad ng YouTube Shorts, Instagram Reels, at Facebook para palakihin ang iyong audience.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Mabilis, libre, at gumagana sa lahat ng device: walang login, walang app, walang limitasyon.</p>
          </section>

          {/* Downloader vs Watermark Remover */}
          <section className="home-dark-content-section">
            <h2 className="text-center">Downloader o Watermark Remover: Ano ang Pagkakaiba?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Madalas itong ipinagkakamali, pero magkaugnay lang ang dalawa. Ang <strong style={{ color: "#fff" }}>TikTok downloader</strong> ang tool na nagse-save ng video mula sa TikTok papunta sa iyong device. Ang <strong style={{ color: "#fff" }}>remover</strong> naman ay tumutukoy sa proseso ng pagtanggal ng TikTok logo sa video.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Ang mabuting balita: sa aming tool, iisang hakbang lang ang dalawa. Kapag nag-download ka rito, awtomatiko nang tinatanggal ang logo, kaya malinis na ang makukuha mong file nang hindi na kailangan ng hiwalay na app.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Kaya kung naghahanap ka man ng downloader o remover, iisa lang ang sagot: kopyahin ang link, i-paste sa itaas, at makukuha mo agad ang malinis na video, libre at walang app.</p>
          </section>

          {/* Data Usage */}
          <section className="home-dark-content-section home-dark-content-section--data">
            <h2 className="text-center">Gaano Karaming Data ang Kinakain?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 10 }}>Kaunti lang. Ang isang karaniwang 15 to 30 segundong TikTok video sa HD ay humigit-kumulang <strong style={{ color: "#fff" }}>5 to 15 MB</strong> lang, mas maliit pa kaysa sa isang larawang mataas ang resolution. Ibig sabihin, kahit nasa mobile data ka, hindi nito lalamunin agad ang iyong load.</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 8 }}>Ilang halimbawa:</p>
            <ul style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 12, paddingLeft: 20 }}>
              <li><strong style={{ color: "#fff" }}>Maikling video (15 seg, HD):</strong> mga 5 to 8 MB</li>
              <li><strong style={{ color: "#fff" }}>Mas mahabang video (60 seg, HD):</strong> mga 12 to 20 MB</li>
              <li><strong style={{ color: "#fff" }}>MP3 audio lang:</strong> mas maliit pa, mga 1 to 3 MB</li>
            </ul>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8, marginBottom: 0 }}>Kung marami kang plano i-download o mahahabang video, mas mainam gumamit ng <strong style={{ color: "#fff" }}>WiFi</strong> para makatipid sa prepaid data. Pero para sa isa o dalawang video, kaya ito ng kahit maliit na data allowance.</p>
          </section>

          {/* Pros and Cons */}
          <section className="pros-cons">
            <h2>Mga Kalamangan at Kahinaan ng TikTok Video Downloader</h2>
            <div className="pros-cons__grid">
              <div className="pros-cons__panel pros-cons__panel--pros">
                <p className="pros-cons__badge"><span aria-hidden="true" className="pros-cons__badge-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M7 21H4.8A1.8 1.8 0 0 1 3 19.2v-7.4A1.8 1.8 0 0 1 4.8 10H7v11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M7 10l4.2-6.2c.5-.8 1.7-.9 2.4-.2.4.4.6 1 .5 1.6L13.5 9H19a2 2 0 0 1 2 2.3l-1.2 7.2A3 3 0 0 1 16.8 21H7V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></span>Mga Kalamangan</p>
                <ul className="pros-cons__list">
                  {["Palaging libre, walang mga nakatagong bayad", "Ligtas, secure, at madaling gamitin", "Mabilis at maayos na pag-download", "Mag-download ng mga video sa HD na kalidad", "Walang kinakailangang pag-install ng app", "Maramihang mga pagpipilian sa pag-download"].map((item, i) => (
                    <li key={i}><span className="pros-cons__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M7 21H4.8A1.8 1.8 0 0 1 3 19.2v-7.4A1.8 1.8 0 0 1 4.8 10H7v11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M7 10l4.2-6.2c.5-.8 1.7-.9 2.4-.2.4.4.6 1 .5 1.6L13.5 9H19a2 2 0 0 1 2 2.3l-1.2 7.2A3 3 0 0 1 16.8 21H7V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pros-cons__divider" aria-hidden="true"></div>
              <div className="pros-cons__panel pros-cons__panel--cons">
                <p className="pros-cons__badge"><span aria-hidden="true" className="pros-cons__badge-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M17 3h2.2A1.8 1.8 0 0 1 21 4.8v7.4a1.8 1.8 0 0 1-1.8 1.8H17V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M17 14l-4.2 6.2c-.5.8-1.7.9-2.4.2-.4-.4-.6-1-.5-1.6l.6-3.8H5a2 2 0 0 1-2-2.3l1.2-7.2A3 3 0 0 1 7.2 3H17v11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></span>Mga Kahinaan</p>
                <ul className="pros-cons__list">
                  {["Sinusuportahan lamang ang nilalaman ng TikTok", "Kinakailangan ang koneksyon sa internet", "Hindi makapag-download ng mga pribadong video", "Hindi sinusuportahan ang pag-scrape ng profile", "Maaaring hindi available ang inalis na content"].map((item, i) => (
                    <li key={i}><span className="pros-cons__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M17 3h2.2A1.8 1.8 0 0 1 21 4.8v7.4a1.8 1.8 0 0 1-1.8 1.8H17V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M17 14l-4.2 6.2c-.5.8-1.7.9-2.4.2-.4-.4-.6-1-.5-1.6l.6-3.8H5a2 2 0 0 1-2-2.3l1.2-7.2A3 3 0 0 1 7.2 3H17v11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></span>{item}</li>
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
                { title: "I-save ang Mga Viral Video Bago Pa Matanggal", text: "Minsan tinatanggal ng mga creator ang kanilang mga video o ginagawang pribado. Kung may gusto kang i-save, tulad ng viral dance, tutorial, o memorable clip, i-download agad bago pa mawala ang video." }
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
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: ".8rem", lineHeight: 1.7, margin: 0 }}><strong style={{ color: "rgba(255,255,255,0.5)" }}>Pagtatanggi:</strong> Ang <a href="/" style={{ color: "#ff3b5c", textDecoration: "underline" }}>tiktokdownloader.ph</a> ay isang independiyenteng tool at hindi kaakibat o ineendorso ng TikTok, Douyin o ByteDance Ltd. Ang lahat ng mga trademark ay pag-aari ng kani-kanilang mga may-ari. Hindi kami nagho-host o nag-iimbak ng anumang nilalamang video; ang media ay ina-access mula sa mga pampublikong panlabas na mapagkukunan.</p>
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
    { q: "Ligtas ba ang TikTok Downloader?", a: <p className="mb-0">Oo, ligtas na ligtas. Protektado ng <strong>SSL encryption</strong> ang lahat ng koneksyon sa aming site, kaya secure ang iyong data. Hindi ito naglalaman ng <strong>malware</strong> o <strong>virus</strong>, hindi humihingi ng login o password, at <strong>anonymous</strong> ang paggamit, walang tracking at walang naka-imbak na history ng iyong mga pinanood o na-download. Ligtas itong gamitin sa anumang device.</p> },
    { q: "Paano Gamitin ang Tool na Ito?", a: <p className="mb-0">I-paste ang link ng TikTok video sa input box sa itaas at i-click ang Hanapin ang Video. Kapag lumabas ang mga download button, piliin ang iyong gustong format: MP4 na walang watermark, MP4 na may watermark, o MP3 audio.</p> },
    { q: "Maaari Ko Bang Mag-download ng TikTok Videos Nang Walang Watermark sa Aking Telepono?", a: <p className="mb-0">Oo! Gumagana ang web app na ito sa halos bawat platform: iPhone, iPad, Android, iOS, Windows, Mac, at Linux, direkta mula sa iyong browser nang walang anumang pag-install.</p> },
    { q: "Maaari Ko Bang I-convert ang isang TikTok sa MP3?", a: <p className="mb-0">Oo! I-paste ang link sa itaas, i-load ang video, at i-click ang Download Audio button para i-save ang audio bilang MP3.</p> },
    { q: "Paano Mag-download ng TikTok Videos sa iOS?", a: <p className="mb-0">Kopyahin ang link ng video mula sa TikTok app, bisitahin ang tiktokdownloader.ph sa Safari o ibang browser, i-paste ang link, at i-click ang download. Maaari mong i-save ang video nang direkta sa iyong camera roll o photos library.</p> },
    { q: "Gaano Katagal ang Pag-download ng Video?", a: <p className="mb-0">Ang bilis ng pag-download ay depende sa iyong koneksyon sa internet at laki ng video. Ang aming tool ay na-optimize para maging mabilis, karamihan sa mga video ay handa sa loob ng ilang segundo.</p> },
    { q: "Libre ba ang TikTok Downloader na Gamitin?", a: <p className="mb-0">Oo, ganap na libre itong gamitin. Walang nakatagong singil, subscription, o kinakailangan sa pagbabayad, mag-download ng walang limitasyong TikTok video nang libre.</p> },
    { q: "Kailangan Ko Bang Mag-install ng Anumang Software, App, o Extension ng Browser?", a: <p className="mb-0">Hindi! Ito ay isang ganap na online na tool, walang software, app, o browser extension ay kinakailangan. Buksan lamang ito sa iyong browser, i-paste ang link ng TikTok video, at i-download kaagad ang iyong video.</p> },
    { q: "Maaari ba akong Mag-download ng Mga Video mula sa Mga Pribadong Account?", a: <p className="mb-0">Hindi. Makakapag-download lang ng mga pampublikong TikTok na video. Pribado o pinaghihigpitang nilalaman ay hindi suportado.</p> },
    { q: "Ano ang Kalidad ng mga Na-download na TikTok Video?", a: <p className="mb-0">Sinusuportahan ng platform ang pag-download ng mga TikTok na video sa HD MP4 na format, hanggang 1080p Full HD, depende sa orihinal na upload.</p> },
    { q: "Sinusuportahan ba nito ang Bultuhang Pag-download ng mga TikTok Video?", a: <p className="mb-0">Sa kasalukuyan, sinusuportahan nito ang pag-download ng isang TikTok video o audio file sa isang pagkakataon.</p> },
    { q: "Maaari ba akong Mag-download ng Mga TikTok Video ayon sa Username, Hashtag, o Account?", a: <p className="mb-0">Hindi, kasalukuyang hindi sumusuporta sa pag-download ng mga video sa pamamagitan ng username, hashtag, o buong profile. Kailangan mong i-paste ang direct link ng isang partikular na TikTok na video para ma-download ito.</p> },
    { q: "Bakit Hindi Gumagana ang Downloader sa Aking Device?", a: <p className="mb-0">Ito ay maaaring dahil sa mga isyu sa browser, isang di-wastong link ng video, o isang pansamantalang paghihigpit sa TikTok. I-refresh ang page, tingnan ang link, o subukan ang ibang browser.</p> },
    { q: "Mayroon bang Magagamit na App sa Google Play Store?", a: <p className="mb-0">Hindi. Wala kaming opisyal na mobile app. Ito ay dinisenyo upang gumana online sa pamamagitan ng mga web browser.</p> },
    { q: "Iniimbak ba namin ang Mga Kopya ng Na-download na TikTok Video?", a: <p className="mb-0">Hindi. Hindi kami nag-iimbak ng mga video o nagtatago ng mga kopya ng na-download na nilalaman. Ang lahat ng mga file ay naka-save sa iyong device.</p> },
    { q: "Mayroon bang Limitasyon sa Pag-download?", a: <p className="mb-0">Hindi. Sinusuportahan namin ang walang limitasyong pag-download.</p> },
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
    <div className="home-faq home-faq--polished">
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
    <details className="faq-item">
      <summary>{question}</summary>
      <div className="faq-answer">{answer}</div>
    </details>
  );
}
