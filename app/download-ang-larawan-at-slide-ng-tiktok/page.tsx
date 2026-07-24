import type { Metadata } from "next";
import ToolDownloader from "@/components/ToolDownloader";

export const metadata: Metadata = {
  title: "TikTok Photo Downloader - I-download ang TikTok Slideshow HD (Walang Watermark)",
  description: "Libreng TikTok photo at slideshow downloader. I-save ang bawat larawan sa HD JPG, ang buong slideshow bilang MP4 na may musika, o ang audio bilang MP3 - walang watermark, walang app.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok" },
  openGraph: {
    title: "TikTok Photo Downloader - I-download ang TikTok Slideshow HD (Walang Watermark)",
    description: "Libreng TikTok photo at slideshow downloader. I-save ang bawat larawan sa HD JPG, ang buong slideshow bilang MP4 na may musika, o ang audio bilang MP3 - walang watermark, walang app.",
    type: "article",
    url: "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok",
    siteName: "TikTok Downloader",
    publishedTime: "2026-07-24T15:21:08+08:00",
    modifiedTime: "2026-07-24T15:21:08+08:00",
    images: [{ url: "https://tiktokdownloader.ph/images/featuredimg6.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Photo Downloader - I-download ang TikTok Slideshow HD (Walang Watermark)",
    description: "Libreng TikTok photo at slideshow downloader. I-save ang bawat larawan sa HD JPG, ang buong slideshow bilang MP4 na may musika, o ang audio bilang MP3 - walang watermark, walang app.",
    images: ["https://tiktokdownloader.ph/images/featuredimg6.webp"],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tiktokdownloader.ph/#website",
      "url": "https://tiktokdownloader.ph/",
      "name": "TikTok Downloader",
      "description": "TikTok downloader na walang watermark, mabilis, at libre."
    },
    {
      "@type": "WebPage",
      "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#webpage",
      "url": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok",
      "name": "TikTok Photo Downloader — I-download ang TikTok Slideshow HD (Walang Watermark)",
      "description": "Libreng TikTok photo at slideshow downloader. I-save ang bawat larawan sa HD JPG, ang buong slideshow bilang MP4 na may musika, o ang audio bilang MP3 — walang watermark, walang app.",
      "inLanguage": "tl",
      "image": "https://tiktokdownloader.ph/images/featuredimg6.webp",
      "isPartOf": {
        "@id": "https://tiktokdownloader.ph/#website"
      }
    },
    {
      "@type": "Article",
      "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#article",
      "headline": "TikTok Photo Downloader — I-download ang TikTok Slideshow HD (Walang Watermark)",
      "description": "Libreng TikTok photo at slideshow downloader. I-save ang bawat larawan sa HD JPG, ang buong slideshow bilang MP4 na may musika, o ang audio bilang MP3 — walang watermark, walang app.",
      "inLanguage": "tl",
      "url": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok",
      "image": "https://tiktokdownloader.ph/images/featuredimg6.webp",
      "author": {
        "@type": "Organization",
        "name": "TikTok Downloader PH",
        "url": "https://tiktokdownloader.ph/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TikTok Downloader PH",
        "url": "https://tiktokdownloader.ph/"
      },
      "datePublished": "2026-07-24T15:21:08+08:00",
      "dateModified": "2026-07-24T15:21:08+08:00",
      "isPartOf": {
        "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#webpage"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#app",
      "name": "TikTok Photo & Slideshow Downloader",
      "description": "Libreng TikTok photo at slideshow downloader. I-save ang bawat larawan sa HD JPG, ang buong slideshow bilang MP4 na may musika, o ang audio bilang MP3 — walang watermark, walang app.",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "url": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "PHP"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#howto",
      "name": "Paano Mag-download ng TikTok Photos at Slideshow",
      "description": "Sundan ang tatlong hakbang para i-save ang TikTok photos, slideshow MP4, o audio MP3 gamit ang browser.",
      "totalTime": "PT1M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "PHP",
        "value": "0"
      },
      "image": "https://tiktokdownloader.ph/images/featuredimg6.webp",
      "tool": [
        {
          "@type": "HowToTool",
          "name": "TikTok Downloader (tiktokdownloader.ph)"
        },
        {
          "@type": "HowToTool",
          "name": "Web browser"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Kopyahin ang link ng photo post",
          "text": "Buksan ang TikTok app o tiktok.com, hanapin ang slideshow o photo post, i-tap ang Share, at piliin ang Copy link."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "I-paste ang link dito",
          "text": "Bumalik sa page na ito, i-paste ang link sa input box, at i-tap ang Load Photos."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Piliin kung ano ang ida-download",
          "text": "Piliin ang Download Photo HD, Download Video MP4, o Download Audio MP3 depende sa kailangan mo."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Paano ko i-download ang isang TikTok slideshow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kopyahin ang link ng photo post, i-paste ito sa box sa itaas, i-tap ang Load Photos, at piliin ang JPG, MP4, o MP3 na opsyon."
          }
        },
        {
          "@type": "Question",
          "name": "Puwede ko bang i-download ang lahat ng larawan sa isang slideshow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo. Ipinapakita ng tool ang bawat larawan sa carousel — hanggang 35 slide — at puwede mong i-save ang alinman o lahat ng ito."
          }
        },
        {
          "@type": "Question",
          "name": "May watermark ba ang mga na-download na larawan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wala. Malinis ang mga larawan — walang TikTok logo at walang @username overlay."
          }
        },
        {
          "@type": "Question",
          "name": "Anong kalidad ang mga larawan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ang pinakamataas na available mula sa orihinal na post, kadalasan ay 1080×1920 JPG."
          }
        },
        {
          "@type": "Question",
          "name": "Puwede bang gawing video ang buong slideshow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo. Piliin ang **Download Video MP4** at pagsasama-samahin ang lahat ng slide sa isang video na may kasabay na musika, tulad ng orihinal sa TikTok."
          }
        },
        {
          "@type": "Question",
          "name": "Puwede ko bang kunin ang musika lang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo. Piliin ang **Download Audio MP3** para makuha ang background sound bilang audio file."
          }
        },
        {
          "@type": "Question",
          "name": "Libre ba ito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, 100% libre. Walang bayad, walang subscription, at walang hidden na limitasyon."
          }
        },
        {
          "@type": "Question",
          "name": "Kailangan ba ng app o account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hindi. Online tool ito na gumagana sa browser. Walang installation, walang registration, at walang TikTok login."
          }
        },
        {
          "@type": "Question",
          "name": "Puwede ba sa video mula sa private account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hindi. Public na post lang ang maaaring i-access, para sa privacy ng mga user."
          }
        },
        {
          "@type": "Question",
          "name": "Gumagana ba ito sa iPhone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo. Gamitin ang Safari, at i-save ang larawan sa Photos o sa Files app."
          }
        },
        {
          "@type": "Question",
          "name": "May limitasyon ba sa dami ng download?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wala. Walang daily limit at walang queue."
          }
        },
        {
          "@type": "Question",
          "name": "Bakit ang unang larawan lang ang lumalabas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Malamang ay video link ang na-paste, hindi photo post. Tingnan kung may `/photo/` ang URL."
          }
        },
        {
          "@type": "Question",
          "name": "Ligtas ba ang tool na ito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo. Hindi ito humihingi ng password, hindi nag-iinstall ng software, at hindi nag-iimbak ng iyong mga file."
          }
        },
        {
          "@type": "Question",
          "name": "Puwede ko bang gamitin ang larawan sa sarili kong post?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para sa personal na paggamit, oo. Para sa pag-repost o komersyal na paggamit, kailangan mo ng pahintulot mula sa creator."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tiktokdownloader.ph/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://tiktokdownloader.ph/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "TikTok Photo Downloader — I-download ang TikTok Slideshow HD (Walang Watermark)",
          "item": "https://tiktokdownloader.ph/download-ang-larawan-at-slide-ng-tiktok"
        }
      ]
    }
  ]
};

const MAIN_HTML = "<div class=\"container\">\r\n        <div class=\"d-flex justify-content-center align-items-start\" style=\"margin-bottom: 10px;\">\r\n          <div class=\"row gy-4 row-cols-1\" style=\"width: 100%; margin-top: 0\">\r\n            <div class=\"col d-flex justify-content-center\">\r\n              <div class=\"row gx-0 gy-3 row-cols-1 flex-grow-1 justify-content-center align-items-center\" style=\"max-width: 512px\">\r\n                <div class=\"col\">\r\n                  <h1 class=\"text-center\" style=\"color: #fff; font-size: clamp(1.35rem, 5.5vw, 1.75rem); font-family: proxima nova; font-weight: 700;\">\r\n                    TikTok Photo &amp; Slideshow Downloader\r\n                  </h1>\r\n                  <p class=\"text-center\" style=\"color: rgba(255,255,255,0.65); font-size: 0.95rem; margin-top: 10px; margin-bottom: 20px; line-height: 1.7;\">\r\n                    I-download ang mga larawan ng TikTok sa HD, ang buong slideshow bilang MP4, o ang audio bilang MP3 — libre at walang watermark.\r\n                  </p>\r\n                  <div class=\"d-flex justify-content-center align-items-center\">\r\n                    <div class=\"flex-grow-1 form-clean\">\r\n                      <div class=\"flex-grow-1 form-floatingx\">\r\n                        <button class=\"btn btn-dark btn-sm align-items-center\" id=\"pasteButton\" type=\"button\" style=\"position: absolute; right: 10px; top: 50%; transform: translate(0%, -50%); margin-top: 5px; background: #191919; border: none;\">\r\n                          <svg viewBox=\"-64 0 512 512\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M280 64h40c35.3.0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3.0 192 0s71 27.5 78.4 64h9.6zM64 112c-8.8.0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256c8.8.0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-16v24c0 13.3-10.7 24-24 24h-88-88c-13.3.0-24-10.7-24-24v-24H64zm128-8a24 24 0 100-48 24 24 0 100 48z\"/></svg>&nbsp;Paste\r\n                        </button>\r\n                        <input class=\"form-control-lg form-control\" id=\"tiktokUrl\" required name=\"url\" autocomplete=\"off\" minlength=\"1\" inputmode=\"verbatim\" spellcheck=\"false\" autocapitalize=\"off\" autocorrect=\"off\" enterkeyhint=\"go\" placeholder=\"example.com/@example/photo/.....\" />\r\n                        <label class=\"form-label d-flex align-items-center\" for=\"tiktokUrl\" style=\"font-size: 16px !important\">\r\n                          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5858 4.58579C13.3668 3.80474 14.6331 3.80474 15.4142 4.58579 16.1952 5.36683 16.1952 6.63316 15.4142 7.41421l-3 2.99999c-.781099999999999.7811-2.0474.7811-2.82843.0C9.19524 10.0237 8.56208 10.0237 8.17156 10.4142 7.78103 10.8047 7.78103 11.4379 8.17156 11.8284c1.56209 1.5621 4.09474 1.5621 5.65684.0l3-2.99997c1.5621-1.5621 1.5621-4.09476.0-5.65686-1.5621-1.56209-4.0947-1.56209-5.6568.0l-1.50004 1.5c-.39053.39053-.39053 1.02369.0 1.41422.39054.39052 1.02364.39052 1.41424.0l1.5-1.5zm-5.00001 5C8.36683 8.80474 9.63316 8.80474 10.4142 9.58579c.390500000000001.39052 1.0237.39052 1.4142.0C12.219 9.19526 12.219 8.5621 11.8284 8.17157c-1.5621-1.56209-4.09473-1.56209-5.65683.0l-3 3.00003c-1.56209 1.5621-1.56209 4.0947.0 5.6568 1.5621 1.5621 4.09476 1.5621 5.65686.0l1.49997-1.5C10.719 14.9379 10.719 14.3047 10.3284 13.9142 9.9379 13.5237 9.30474 13.5237 8.91421 13.9142l-1.5 1.5c-.78105.7811-2.04737.7811-2.82842.0C3.80474 14.6332 3.80474 13.3668 4.58579 12.5858l3-3.00001z\" fill=\"currentColor\"/></svg>&nbsp;TikTok Photo Link\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"row\" style=\"margin-top: 8px\">\r\n                        <div class=\"col\">\r\n                          <button class=\"btn btn-primary btn-lg d-flex justify-content-center align-items-center button-dark-clean\" id=\"loadVideos\" type=\"button\" onclick=\"window.loadVideosClicked||(window.loadVideosClicked=!0,this.classList.add('disabled'))\">\r\n                            <span class=\"d-flex align-items-center label\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 24px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 3C3.44772 3 3 3.44772 3 4v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1V4c0-.55228-.4477-1-1-1H4zM8 7a1 1 0 11-2 0 1 1 0 012 0zM3.75 14l2.25-3 1.5 2 2.5-3.5L14.25 14H3.75z\" fill=\"currentColor\"/></svg>&nbsp;Load Photos\r\n                            </span>\r\n                            <span class=\"spinner-border spinner-border-sm d-none\" role=\"status\" style=\"font-size: 20px; height: 24px; width: 24px; color: #fff;\"></span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" id=\"mediaList\" data-nosnippet>\r\n              <div class=\"row gy-3 justify-content-center\" style=\"min-height: 0\">\r\n                <div class=\"col d-none\" id=\"tiktokLoader\" style=\"margin-top: -8px; margin-bottom: 5px\">\r\n                  <div class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 15px\">\r\n                    <div class=\"tiktok-container\"><div class=\"tiktok\"></div><div class=\"tiktok red\"></div></div>\r\n                  </div>\r\n                  <div class=\"d-flex justify-content-center mt-1\">\r\n                    <span class=\"text-muted d-none\" id=\"estimatedTime\" style=\"opacity: 0.5; font-size: 14px\">Est. Time:&nbsp;sec</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-10 col-md-auto media-loaded\" style=\"margin-top: 4px; display: none\">\r\n                  <div class=\"card\">\r\n                    <div class=\"thumbnail-div\">\r\n                      <div>\r\n                        <div class=\"d-flex justify-content-center align-items-center\" id=\"userInfo\" style=\"margin-bottom: 10px\">\r\n                          <img class=\"img-fluid rounded-circle\" width=\"24\" height=\"24\" alt=\"TikTok photo creator profile\" loading=\"lazy\" style=\"width: 24px; height: 24px\" />\r\n                          <a class=\"d-flex align-items-center\" href=\"#\" style=\"margin-left: 5px; color: #fff; font-size: 18px;\" target=\"_blank\">\r\n                            <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M16 12c0-2.20914-1.7909-4-4-4-2.20914.0-4 1.79086-4 4 0 2.2091 1.79086 4 4 4 2.2091.0 4-1.7909 4-4zm0 0v1.5c0 1.3807 1.1193 2.5 2.5 2.5S21 14.8807 21 13.5V12c0-4.97056-4.0294-9-9-9-4.97056.0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9m4.5-1.2058C15.0801 20.614 13.5296 21.0029 12 21.0015\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\r\n                            <span>tiktok</span>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"d-flex justify-content-center align-items-center\" id=\"videoPreview\">\r\n                        <a href=\"#\" target=\"_blank\" style=\"position: relative; display: flex; justify-content: center; align-items: center;\" rel=\"nofollow noreferrer noopener\">\r\n                          <svg class=\"bi bi-play-fill\" width=\"1em\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 16 16\" style=\"position: absolute; font-size: 40px; pointer-events: none; opacity: 0.6; color: #fff;\"><path d=\"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802.0 010 1.393\"/></svg>\r\n                          <img class=\"img-fluid\" loading=\"eager\" style=\"min-height: 180px\" alt=\"TikTok photo thumbnail\" />\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"d-flex justify-content-center\" style=\"margin: 0 14px; margin-bottom: 4px\">\r\n                        <div class=\"vstack flex-grow-0 gap-2 my-auto download-list\">\r\n                          <div class=\"d-flex justify-content-end\" id=\"removeWatermarkParent\" style=\"margin-bottom: -2px; margin-right: 2px\">\r\n                            <div class=\"d-flex align-items-center form-check form-switch form-check-reverse\">\r\n                              <label class=\"form-label text-secondary d-flex align-items-center\" for=\"watermarkMode\" style=\"padding: 0; margin: 0; margin-bottom: -2px; cursor: pointer;\">\r\n                                <svg viewBox=\"-32 0 512 512\" width=\"1em\" height=\"1em\" fill=\"currentColor\" style=\"font-size: 13px\"><path d=\"M448 209.91a210.06 210.06.0 01-122.77-39.25V349.38A162.55 162.55.0 11185 188.31V278.2a74.62 74.62.0 1052.23 71.18V0h88a121.18 121.18.0 001.86 22.17h0A122.18 122.18.0 00381 102.39a121.43 121.43.0 0067 20.14z\"/></svg>&nbsp;Remove Watermark:&nbsp;\r\n                              </label>\r\n                              <input type=\"checkbox\" id=\"watermarkMode\" class=\"form-check-input\" checked />\r\n                            </div>\r\n                          </div>\r\n                          <div id=\"downloadNoWatermark\" style=\"border-radius: 4px; overflow: hidden; border: 1px solid #ff3b5c; background: rgba(255, 255, 255, 4%); color: #ff3b5c;\">\r\n                            <button class=\"btn download-button\" type=\"button\" data-media-url=\"/\" data-filename=\"/\" data-filetype=\"/\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 22px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z\" fill=\"currentColor\"/></svg>&nbsp;Download Photo<span class=\"resolution-badge\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4 3C3.44772 3 3 3.44772 3 4v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1V4c0-.55228-.4477-1-1-1H4zM8 7a1 1 0 11-2 0 1 1 0 012 0zM3.75 14l2.25-3 1.5 2 2.5-3.5L14.25 14H3.75z\" fill=\"currentColor\"/></svg>&nbsp;<span>HD</span></span></button>\r\n                            <a class=\"btn media-url\" role=\"button\" href=\"#\" target=\"_blank\" aria-label=\"Open raw photo link in new tab\" rel=\"nofollow noreferrer noopener\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"font-size: 20px\"><path d=\"M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z\" fill=\"currentColor\"/><path d=\"M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z\" fill=\"currentColor\"/></svg></a>\r\n                          </div>\r\n                          <div id=\"downloadWatermark\" style=\"border-radius: 4px; overflow: hidden; border: 1px solid #ff3b5c; background: rgba(255, 255, 255, 4%); color: #ff3b5c;\">\r\n                            <button class=\"btn download-button\" type=\"button\" data-media-url=\"/\" data-filename=\"/\" data-filetype=\"/\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 22px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z\" fill=\"currentColor\"/></svg>&nbsp;Download Video<span class=\"resolution-badge\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z\" fill=\"currentColor\"/><path d=\"M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1\" fill=\"currentColor\"/></svg>&nbsp;<span>MP4</span></span></button>\r\n                            <a class=\"btn media-url\" role=\"button\" href=\"#\" target=\"_blank\" aria-label=\"Open raw video link in new tab\" rel=\"nofollow noreferrer noopener\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"font-size: 20px\"><path d=\"M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z\" fill=\"currentColor\"/><path d=\"M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z\" fill=\"currentColor\"/></svg></a>\r\n                          </div>\r\n                          <div id=\"downloadAudio\" style=\"border-radius: 4px; overflow: hidden; border: 1px solid #ff3b5c; background: rgba(255, 255, 255, 4%); color: #ff3b5c;\">\r\n                            <button class=\"btn download-button\" type=\"button\" data-media-url=\"/\" data-filename=\"/\" data-filetype=\"/\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 22px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z\" fill=\"currentColor\"/></svg>&nbsp;Download Audio<span class=\"resolution-badge\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M18 3.00001c0-.29959-.1343-.5834-.366-.77334S17.0977 1.96067 16.8039 2.01943l-10.00002 2C6.33646 4.11291 6 4.52333 6 5.00001V14.1138C5.68722 14.0401 5.35064 14 5 14c-1.65685.0-3 .8954-3 2 0 1.1046 1.34315 2 3 2S7.99999 17.1046 8 16V7.81981l8-1.6V12.1138C15.6872 12.0401 15.3506 12 15 12c-1.6569.0-3 .8954-3 2s1.3431 2 3 2 3-.8954 3-2V3.00001z\" fill=\"currentColor\"/></svg>&nbsp;<span>MP3</span></span></button>\r\n                            <a class=\"btn media-url\" role=\"button\" href=\"#\" target=\"_blank\" aria-label=\"Open raw audio link in new tab\" rel=\"nofollow noreferrer noopener\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"font-size: 20px\"><path d=\"M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z\" fill=\"currentColor\"/><path d=\"M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z\" fill=\"currentColor\"/></svg></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"margin-top:32px;padding-bottom:20px;\"><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Nakakita ka ba ng TikTok photo post o slideshow na gusto mong itago? Kopyahin ang link, i-paste ito sa box sa itaas, at makukuha mo ang bawat larawan sa orihinal na kalidad — walang TikTok logo, walang username overlay, at walang screenshot na malabo.</p><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Ang <strong style=\"color:#fff;\">Photo Mode</strong> ng TikTok (tinatawag ding slideshow o carousel) ay isang uri ng post kung saan puwedeng maglagay ang creator ng <strong style=\"color:#fff;\">hanggang 35 larawan</strong> na may background music, at sini-swipe ito ng viewer isa-isa. Karaniwang naka-<strong style=\"color:#fff;\">1080×1920 (9:16)</strong> ang mga larawan, kaya kapag na-download mo nang tama, malinaw pa rin ang mga ito bilang wallpaper o pang-edit.</p><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Kaya lang, walang built-in na \"save\" button ang TikTok para sa mga larawan. Ang screenshot naman ay nagbibigay ng mababang kalidad na imahe na may nakadikit na caption, buttons, at username. Dito pumapasok ang tool na ito — kinukuha nito ang <strong style=\"color:#fff;\">orihinal na image file</strong> mismo mula sa public na post.</p><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Kung ang tunog lang ang kailangan mo, gamitin ang aming <a href=\"https://tiktokdownloader.ph/download-tiktok-mp3\" style=\"color:#ff3b5c;text-decoration:none;\">TikTok MP3 Downloader</a>. Kung regular na video naman, nandiyan ang <a href=\"https://tiktokdownloader.ph/tiktok-to-mp4\" style=\"color:#ff3b5c;text-decoration:none;\">TikTok to MP4 converter</a>.</p><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Paano Mag-download ng TikTok Photos at Slideshow</h2><h3 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin:20px 0 10px;\">Hakbang 1 — Kopyahin ang link ng photo post</h3><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Buksan ang TikTok app o ang tiktok.com. Hanapin ang slideshow o photo post na gusto mong i-save, i-tap ang <strong style=\"color:#fff;\">Share</strong> (arrow icon sa kanan), at piliin ang <strong style=\"color:#fff;\">Copy link</strong>. Puwede rin ang short link tulad ng <code>vt.tiktok.com/...</code> o ang buong URL mula sa address bar ng browser.</p><h3 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin:20px 0 10px;\">Hakbang 2 — I-paste ang link dito</h3><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Bumalik sa page na ito at i-paste ang link sa input box sa itaas, pagkatapos ay i-tap ang <strong style=\"color:#fff;\">Load Photos</strong>. Sa loob ng ilang segundo, lalabas ang lahat ng larawan mula sa slideshow — hindi lang ang unang larawan.</p><h3 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin:20px 0 10px;\">Hakbang 3 — Piliin kung ano ang ida-download</h3><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">May tatlong opsyon ka:</p><ul style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li><strong style=\"color:#fff;\">Download Photo HD</strong> — i-save ang bawat larawan bilang JPG sa orihinal na resolution.</li><li><strong style=\"color:#fff;\">Download Video MP4</strong> — i-render ang buong slideshow bilang isang video na may kasabay na musika, tulad ng nakikita sa TikTok.</li><li><strong style=\"color:#fff;\">Download Audio MP3</strong> — kunin lang ang background sound.</li></ul></section><figure style=\"margin:24px 0 0;\"><img src=\"/images/featuredimg6.webp\" alt=\"TikTok photo at slideshow downloader ? i-save ang larawan sa HD nang walang watermark\" title=\"TikTok Photo at Slideshow Downloader\" style=\"width:100%;border-radius:12px;\" loading=\"lazy\" /></figure><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Tatlong Paraan ng Pag-save — Alin ang Bagay sa Iyo?</h2><div style=\"overflow-x:auto;background:#212529;border:1px solid rgba(255,255,255,0.08);border-radius:10px;margin-top:14px;\"><table style=\"width:100%;border-collapse:collapse;color:rgba(255,255,255,0.65);font-size:.92rem;\"><thead><tr><th style=\"padding:14px 16px;color:#fff;text-align:left;border-bottom:1px solid rgba(255,255,255,0.08);\">Format</th><th style=\"padding:14px 16px;color:#fff;text-align:left;border-bottom:1px solid rgba(255,255,255,0.08);\">Ano ang makukuha mo</th><th style=\"padding:14px 16px;color:#fff;text-align:left;border-bottom:1px solid rgba(255,255,255,0.08);\">Para saan ito bagay</th></tr></thead><tbody><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\"><strong style=\"color:#fff;\">JPG (bawat larawan)</strong></td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Isa-isang image file sa orihinal na resolution, walang watermark</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Wallpaper, moodboard, pag-edit, pag-print, pag-save ng recipe o notes</td></tr><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\"><strong style=\"color:#fff;\">MP4 (buong slideshow)</strong></td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Isang video na pinagsama-sama ang lahat ng slide, kasama ang musika at timing</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Pag-repost sa Reels o Shorts, pagbabahagi sa Messenger, offline na panonood</td></tr><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\"><strong style=\"color:#fff;\">MP3 (audio lang)</strong></td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Ang background sound bilang audio file</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Paggamit ng trending sound sa sarili mong post, ringtone, playlist</td></tr></tbody></table></div><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Kung hindi ka sigurado, kunin ang <strong style=\"color:#fff;\">JPG</strong> — ito ang pinakamataas na kalidad na bersyon ng mismong larawan.</p></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Bakit Hindi Sapat ang Screenshot</h2><div style=\"overflow-x:auto;background:#212529;border:1px solid rgba(255,255,255,0.08);border-radius:10px;margin-top:14px;\"><table style=\"width:100%;border-collapse:collapse;color:rgba(255,255,255,0.65);font-size:.92rem;\"><thead><tr><th style=\"padding:14px 16px;color:#fff;text-align:left;border-bottom:1px solid rgba(255,255,255,0.08);\"></th><th style=\"padding:14px 16px;color:#fff;text-align:left;border-bottom:1px solid rgba(255,255,255,0.08);\">Screenshot</th><th style=\"padding:14px 16px;color:#fff;text-align:left;border-bottom:1px solid rgba(255,255,255,0.08);\">Aming downloader</th></tr></thead><tbody><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Kalidad</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Naka-compress, nakadepende sa screen ng phone</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Orihinal na resolution mula sa TikTok</td></tr><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Watermark at UI</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">May caption, username, buttons, at TikTok logo</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Malinis, walang overlay</td></tr><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Buong slideshow</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Kailangang isa-isahin nang manu-mano</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Lahat ng larawan sa isang beses</td></tr><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Aspect ratio</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">May putol o may itim na bahagi</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Buong 9:16 frame</td></tr><tr><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Audio</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Wala</td><td style=\"padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06);\">Available bilang MP3 o kasama sa MP4</td></tr></tbody></table></div></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Anong Kalidad ang Makukuha Mo</h2><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Ang tool ay kumukuha ng <strong style=\"color:#fff;\">pinakamataas na resolution na na-upload ng creator</strong>, hindi ang naka-compress na preview:</p><ul style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li><strong style=\"color:#fff;\">1080×1920 (9:16)</strong> — ang karaniwang laki ng TikTok photo post.</li><li><strong style=\"color:#fff;\">JPG format</strong> — bukas sa lahat ng gallery app, photo editor, at document.</li><li><strong style=\"color:#fff;\">Walang watermark</strong> — walang TikTok logo at walang @username na nakadikit.</li><li><strong style=\"color:#fff;\">Walang re-compression</strong> — hindi na namin muling kino-compress ang file.</li></ul><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Isang paalala: kung mababa ang kalidad ng larawan na na-upload ng creator, mababa pa rin ito pagkatapos i-download. Walang downloader ang makakadagdag ng detalyeng wala sa orihinal na file.</p></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Mga Tampok</h2><div class=\"row g-3 row-cols-1 row-cols-md-2\"><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Buong slideshow, hindi lang ang cover</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Maraming site ang nagpapakita lang ng unang larawan. Kinukuha ng aming tool ang lahat ng slide sa carousel — hanggang 35 larawan bawat post.</p></div></div><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Walang watermark, walang username overlay</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Malinis na image file, handa nang gamitin bilang wallpaper o sa iyong sariling edit.</p></div></div><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Tatlong output: JPG, MP4, MP3</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Ikaw ang pipili kung larawan, video, o audio ang kailangan mo — sa iisang link lang.</p></div></div><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Walang app, walang account</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Gumagana lahat sa browser — Chrome, Safari, Firefox, Edge, Opera. Walang installation at walang sign-up.</p></div></div><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Walang limitasyon</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Walang daily cap at walang queue. Mag-download ng kasingdami ng gusto mo.</p></div></div><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Ligtas at pribado</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Hindi humihingi ng TikTok login o password. Hindi namin iniimbak ang mga larawang dina-download mo, at protektado ang koneksyon ng SSL.</p></div></div><div class=\"col\"><div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\"><h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Gumagana sa lahat ng device</h3><p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Android, iPhone, iPad, Windows, macOS, at Linux — pare-pareho ang proseso.</p></div></div></div></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Saan Napupunta ang Larawan Pagkatapos I-download</h2><h3 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin:20px 0 10px;\">Sa iPhone at iPad</h3><ol style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li>Gamitin ang <strong style=\"color:#fff;\">Safari</strong> (mas maayos ang download handling nito kaysa sa in-app browser).</li><li>I-tap nang matagal ang larawan at piliin ang <strong style=\"color:#fff;\">Add to Photos</strong> — o i-tap ang download button, at mapupunta ito sa <strong style=\"color:#fff;\">Files → Downloads</strong>.</li><li>Para mailipat sa Photos: buksan ang Files, i-tap nang matagal ang file, at piliin ang <strong style=\"color:#fff;\">Share → Save Image</strong>.</li></ol><p style=\"color:rgba(255,255,255,0.55);font-size:.9rem;line-height:1.8;margin:10px 0;padding:12px 14px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,59,92,.7);border-radius:8px;\">Kung walang nangyari kapag pinindot ang download, i-tap nang matagal ang link at piliin ang <strong style=\"color:#fff;\">Download Linked File</strong>.</p><h3 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin:20px 0 10px;\">Sa Android</h3><ol style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li>Buksan ang page na ito sa <strong style=\"color:#fff;\">Chrome</strong>.</li><li>I-tap ang download button — mase-save ang larawan sa <strong style=\"color:#fff;\">Downloads</strong> folder.</li><li>Lalabas din ito sa Gallery o Google Photos pagkatapos ng ilang segundo. Kung hindi, i-refresh ang gallery o hanapin ito sa Files app.</li></ol><h3 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin:20px 0 10px;\">Sa PC, Laptop, o Mac</h3><ol style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li>Kopyahin ang URL ng post mula sa address bar ng browser.</li><li>Pagkatapos i-load, i-right click ang larawan at piliin ang <strong style=\"color:#fff;\">Save image as…</strong> para pumili ng folder.</li><li>Para sa maraming slide, i-download ang mga ito isa-isa o gamitin ang MP4 option para sa isang file lang.</li></ol></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Mga Karaniwang Problema at Solusyon</h2><div style=\"padding:16px 18px;background:rgba(255,255,255,0.04);border-radius:9px;margin-bottom:10px;\"><strong style=\"color:#fff;\">\"Hindi mahanap ang larawan\" o error kapag nag-load</strong><p style=\"color:rgba(255,255,255,.58);font-size:.92rem;line-height:1.75;margin:6px 0 0;\">Karaniwang dahilan: (1) private ang account, (2) na-delete o na-restrict ang post, (3) hindi available sa iyong rehiyon, o (4) hindi kompleto ang na-copy na link.</p></div><div style=\"padding:16px 18px;background:rgba(255,255,255,0.04);border-radius:9px;margin-bottom:10px;\"><strong style=\"color:#fff;\">Ang unang larawan lang ang lumalabas</strong><p style=\"color:rgba(255,255,255,.58);font-size:.92rem;line-height:1.75;margin:6px 0 0;\">Siguraduhing photo post talaga ang link at hindi regular na video. Ang link ng photo post ay may <code>/photo/</code> sa URL; ang video ay may <code>/video/</code>.</p></div><div style=\"padding:16px 18px;background:rgba(255,255,255,0.04);border-radius:9px;margin-bottom:10px;\"><strong style=\"color:#fff;\">Hindi ma-save sa iPhone</strong><p style=\"color:rgba(255,255,255,.58);font-size:.92rem;line-height:1.75;margin:6px 0 0;\">Gumamit ng Safari, hindi ng in-app browser ng TikTok o Facebook. Pagkatapos, siguraduhing pinayagan mo ang Photos access sa Settings.</p></div><div style=\"padding:16px 18px;background:rgba(255,255,255,0.04);border-radius:9px;margin-bottom:10px;\"><strong style=\"color:#fff;\">Malabo ang larawan</strong><p style=\"color:rgba(255,255,255,.58);font-size:.92rem;line-height:1.75;margin:6px 0 0;\">Mababa ang orihinal na upload, o na-screenshot ito ng creator bago i-post. Hindi ito naaayos ng downloader.</p></div><div style=\"padding:16px 18px;background:rgba(255,255,255,0.04);border-radius:9px;margin-bottom:10px;\"><strong style=\"color:#fff;\">May watermark pa rin</strong><p style=\"color:rgba(255,255,255,.58);font-size:.92rem;line-height:1.75;margin:6px 0 0;\">Kung nakadikit mismo sa larawan ang logo (inilagay ng creator sa loob ng imahe), bahagi na ito ng file at hindi ito matatanggal ng anumang tool.</p></div><div style=\"padding:16px 18px;background:rgba(255,255,255,0.04);border-radius:9px;margin-bottom:10px;\"><strong style=\"color:#fff;\">Hindi gumagana ang link ng private account</strong><p style=\"color:rgba(255,255,255,.58);font-size:.92rem;line-height:1.75;margin:6px 0 0;\">Public na post lang ang maaaring i-download. Hindi humihingi ang tool ng TikTok login, kaya hindi ito puwedeng gamitin sa mga naka-private na account.</p></div></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Ano ang Puwede Mong Gawin sa Na-download na Larawan</h2><ul style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li><strong style=\"color:#fff;\">Wallpaper</strong> — 9:16 na sukat, sakto sa phone screen nang walang crop.</li><li><strong style=\"color:#fff;\">Moodboard at inspiration board</strong> — outfit inspo, interior design, nail art, hair reference.</li><li><strong style=\"color:#fff;\">Recipe at tutorial steps</strong> — i-save ang mga hakbang para magamit offline sa kusina o gym.</li><li><strong style=\"color:#fff;\">Study notes at reviewer</strong> — maraming slideshow ang naglalaman ng buod ng aralin.</li><li><strong style=\"color:#fff;\">Sariling edit</strong> — gamitin sa CapCut, Canva, o Picsart bilang bahagi ng iyong content.</li><li><strong style=\"color:#fff;\">Alaala at archive</strong> — i-save ang photo dump ng mga kaibigan bago ito ma-delete.</li></ul></section><section style=\"margin-top:40px;\"><h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:18px;\">Legal ba ang Pag-download ng TikTok Photos?</h2><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Pinapayagan ang pag-save ng <strong style=\"color:#fff;\">public</strong> na larawan para sa <strong style=\"color:#fff;\">personal at offline na paggamit</strong>. Ang hindi pinapayagan ay ang mag-repost, mag-monetize, o mag-claim ng likha ng ibang creator bilang sarili mo.</p><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Bago mo gamitin ang larawan sa labas ng personal na panonood:</p><ul style=\"color:rgba(255,255,255,0.62);font-size:.95rem;line-height:1.8;margin-bottom:12px;padding-left:20px;\"><li>Humingi ng pahintulot sa orihinal na creator.</li><li>Magbigay ng credit kapag nagbahagi.</li><li>Iwasan ang paggamit sa ads, merchandise, o monetized na content nang walang lisensya.</li></ul><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Ang tool na ito ay para sa personal na paggamit lamang, hindi nag-iimbak ng anumang file, at hindi kaakibat ng TikTok o ByteDance Ltd.</p></section><section class=\"home-faq\"><h2 class=\"text-center\">Mga Madalas Itanong</h2><p class=\"home-faq__intro\">Hanapin ang mabilis na sagot tungkol sa TikTok photo posts, slideshow downloads, format options, at ligtas na paggamit.</p><div class=\"faq-list\"><details class=\"faq-item\"><summary>Paano ko i-download ang isang TikTok slideshow?</summary><p>Kopyahin ang link ng photo post, i-paste ito sa box sa itaas, i-tap ang Load Photos, at piliin ang JPG, MP4, o MP3 na opsyon.</p></details><details class=\"faq-item\"><summary>Puwede ko bang i-download ang lahat ng larawan sa isang slideshow?</summary><p>Oo. Ipinapakita ng tool ang bawat larawan sa carousel — hanggang 35 slide — at puwede mong i-save ang alinman o lahat ng ito.</p></details><details class=\"faq-item\"><summary>May watermark ba ang mga na-download na larawan?</summary><p>Wala. Malinis ang mga larawan — walang TikTok logo at walang @username overlay.</p></details><details class=\"faq-item\"><summary>Anong kalidad ang mga larawan?</summary><p>Ang pinakamataas na available mula sa orihinal na post, kadalasan ay 1080×1920 JPG.</p></details><details class=\"faq-item\"><summary>Puwede bang gawing video ang buong slideshow?</summary><p>Oo. Piliin ang <strong style=\"color:#fff;\">Download Video MP4</strong> at pagsasama-samahin ang lahat ng slide sa isang video na may kasabay na musika, tulad ng orihinal sa TikTok.</p></details><details class=\"faq-item\"><summary>Puwede ko bang kunin ang musika lang?</summary><p>Oo. Piliin ang <strong style=\"color:#fff;\">Download Audio MP3</strong> para makuha ang background sound bilang audio file.</p></details><details class=\"faq-item\"><summary>Libre ba ito?</summary><p>Oo, 100% libre. Walang bayad, walang subscription, at walang hidden na limitasyon.</p></details><details class=\"faq-item\"><summary>Kailangan ba ng app o account?</summary><p>Hindi. Online tool ito na gumagana sa browser. Walang installation, walang registration, at walang TikTok login.</p></details><details class=\"faq-item\"><summary>Puwede ba sa video mula sa private account?</summary><p>Hindi. Public na post lang ang maaaring i-access, para sa privacy ng mga user.</p></details><details class=\"faq-item\"><summary>Gumagana ba ito sa iPhone?</summary><p>Oo. Gamitin ang Safari, at i-save ang larawan sa Photos o sa Files app.</p></details><details class=\"faq-item\"><summary>May limitasyon ba sa dami ng download?</summary><p>Wala. Walang daily limit at walang queue.</p></details><details class=\"faq-item\"><summary>Bakit ang unang larawan lang ang lumalabas?</summary><p>Malamang ay video link ang na-paste, hindi photo post. Tingnan kung may <code>/photo/</code> ang URL.</p></details><details class=\"faq-item\"><summary>Ligtas ba ang tool na ito?</summary><p>Oo. Hindi ito humihingi ng password, hindi nag-iinstall ng software, at hindi nag-iimbak ng iyong mga file.</p></details><details class=\"faq-item\"><summary>Puwede ko bang gamitin ang larawan sa sarili kong post?</summary><p>Para sa personal na paggamit, oo. Para sa pag-repost o komersyal na paggamit, kailangan mo ng pahintulot mula sa creator.</p></details></div></section><section class=\"closing-callout\"><h2 style=\"color:#fff;font-size:1.1rem;font-weight:700;margin-bottom:10px;\">Pangwakas</h2><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Ang aming TikTok Photo at Slideshow Downloader ay ginawa para sa isang simpleng layunin: makuha mo ang mismong larawan mula sa isang TikTok photo post — malinis, HD, at walang abala. Hindi screenshot, hindi naka-crop, at walang watermark.</p><p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Kopyahin ang link, i-paste ito sa itaas, at piliin kung larawan, video, o audio ang gusto mo. Libre, walang limitasyon, at gumagana sa Android, iPhone, at PC.</p></section></div></div>";

export default function Page() {
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: MAIN_HTML }} />
      <ToolDownloader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </>
  );
}
