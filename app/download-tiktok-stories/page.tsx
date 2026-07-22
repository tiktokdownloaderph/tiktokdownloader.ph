import type { Metadata } from "next";
import ToolDownloader from "@/components/ToolDownloader";

export const metadata: Metadata = {
  title: "Manood at mag-download ng mga TikTok Story",
  description: "Tingnan at i-save ang mga TikTok story nang anonymous online nang libre, sa UHD quality.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://tiktokdownloader.ph/download-tiktok-stories" },
  openGraph: {
    title: "Manood at mag-download ng mga TikTok Story",
    description: "Tingnan at i-save ang mga TikTok story nang anonymous online nang libre, sa UHD quality.",
    type: "article",
    url: "https://tiktokdownloader.ph/download-tiktok-stories",
    siteName: "TikTok Downloader",
    publishedTime: "2026-07-23T04:32:39+08:00",
    modifiedTime: "2026-07-23T04:32:39+08:00",
    images: [{ url: "https://tiktokdownloader.ph/images/featuredimg5.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manood at mag-download ng mga TikTok Story",
    description: "Tingnan at i-save ang mga TikTok story nang anonymous online nang libre, sa UHD quality.",
    images: ["https://tiktokdownloader.ph/images/featuredimg5.webp"],
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
      "description": "TikTok downloader na walang watermark, mabilis, at libre. I-convert sa MP3 na may walang limitasyong pag-download."
    },
    {
      "@type": "WebPage",
      "@id": "https://tiktokdownloader.ph/download-tiktok-stories#webpage",
      "url": "https://tiktokdownloader.ph/download-tiktok-stories",
      "name": "Manood at mag-download ng mga TikTok Story",
      "description": "Tingnan at i-save ang mga TikTok story nang anonymous online nang libre, sa UHD quality.",
      "inLanguage": "tl",
      "image": "https://tiktokdownloader.ph/images/featuredimg5.webp",
      "isPartOf": {
        "@id": "https://tiktokdownloader.ph/#website"
      }
    },
    {
      "@type": "Article",
      "@id": "https://tiktokdownloader.ph/download-tiktok-stories#article",
      "headline": "Manood at mag-download ng mga TikTok Story",
      "description": "Tingnan at i-save ang mga TikTok story nang anonymous online nang libre, sa UHD quality.",
      "inLanguage": "tl",
      "url": "https://tiktokdownloader.ph/download-tiktok-stories",
      "image": "https://tiktokdownloader.ph/images/featuredimg5.webp",
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
      "datePublished": "2026-07-23T04:32:39+08:00",
      "dateModified": "2026-07-23T04:32:39+08:00",
      "isPartOf": {
        "@id": "https://tiktokdownloader.ph/download-tiktok-stories#webpage"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://tiktokdownloader.ph/download-tiktok-stories#app",
      "name": "TikTok Story Downloader",
      "description": "I-download ang mga TikTok stories sa HD quality nang walang watermark. Libre, mabilis, at hindi kailangan ng login.",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "url": "https://tiktokdownloader.ph/download-tiktok-stories",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "PHP"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://tiktokdownloader.ph/download-tiktok-stories#howto",
      "name": "Paano Mag-download ng TikTok Stories",
      "description": "Sundan ang tatlong hakbang na ito para i-save ang anumang TikTok story sa mataas na kalidad nang libre at walang watermark.",
      "totalTime": "PT2M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "PHP",
        "value": "0"
      },
      "image": "https://tiktokdownloader.ph/images/featuredimg5.webp",
      "tool": [
        {
          "@type": "HowToTool",
          "name": "TikTok Downloader (tiktokdownloader.ph)"
        },
        {
          "@type": "HowToTool",
          "name": "Web browser (Chrome, Firefox, Edge, Safari)"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Kopyahin ang Link ng TikTok Story",
          "text": "Buksan ang TikTok app o website, i-play ang story na gusto mo, i-tap ang Share button, at kopyahin ang link ng story."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "I-paste ang Link",
          "text": "I-paste ang kinopyang URL ng TikTok Story sa input box sa pahinang ito at hintaying makuha ng system ang impormasyon ng Story."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Mag-download ng Story",
          "text": "I-click ang Download button at piliin ang format. Mase-save ang iyong Story file sa iyong device sa loob ng ilang segundo."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tiktokdownloader.ph/download-tiktok-stories#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Paano mag-download ng TikTok story gamit ang username?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maaari mong i-download ang mga TikTok story gamit ang username sa pamamagitan lamang ng paglalagay ng username sa aming tool. Kukunin nito agad ang mga available na kwento, na magbibigay-daan sa iyong i-download ang mga ito sa kalidad ng HD nang walang watermark."
          }
        },
        {
          "@type": "Question",
          "name": "Maaari ko bang tingnan ang mga TikTok story nang hindi nagpapakilala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, ang aming tool ay gumagana bilang isang hindi nagpapakilalang TikTok story viewer. Maaari kang manood at mag-download ng mga kwento nang hindi nagla-log in o nag-aabiso sa user."
          }
        },
        {
          "@type": "Question",
          "name": "Libre bang gamitin ang TikTok story downloader na ito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, ang aming TikTok story downloader ay libre. Walang mga nakatagong singil, subscription, o limitasyon."
          }
        },
        {
          "@type": "Question",
          "name": "Maaari ba akong mag-download ng mga TikTok story nang walang watermark?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Talaga. Maaari kang mag-download ng mga TikTok story sa kalidad ng HD nang walang watermark gamit ang aming online tool."
          }
        },
        {
          "@type": "Question",
          "name": "Kailangan ko bang mag-install ng anumang app para mag-download ng mga TikTok story?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hindi, hindi mo kailangang mag-install ng anumang app o software. Ang aming tool ay gumagana nang buo online sa lahat ng device."
          }
        },
        {
          "@type": "Question",
          "name": "Sinusuportahan ba ng tool na ito ang pag-download ng TikTok story sa pamamagitan ng link?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, maaari mong i-paste ang link ng TikTok story sa input box at agad na i-download ang story."
          }
        },
        {
          "@type": "Question",
          "name": "Maaari ba akong mag-download ng mga video ng TikTok story sa HD na kalidad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, lahat ng story ay maaaring i-download sa high-definition (HD) na kalidad na may malinaw na video at audio."
          }
        },
        {
          "@type": "Question",
          "name": "Posible bang mag-download ng mga TikTok story nang hindi nagpapakilala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, maaari kang mag-download ng mga TikTok story nang hindi nagpapakilala nang hindi nagla-log in o inilalantad ang iyong pagkakakilanlan."
          }
        },
        {
          "@type": "Question",
          "name": "Gumagana ba ang TikTok story downloader na ito sa mobile at PC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oo, ang aming tool ay ganap na tugma sa mga mobile phone, tablet, at desktop device."
          }
        },
        {
          "@type": "Question",
          "name": "Maaari ba akong mag-download ng mga pribadong TikTok story?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hindi, sinusuportahan lamang ng aming tool ang mga pampublikong TikTok story. Hindi maaaring ma-access o ma-download ang pribado o pinaghihigpitang nilalaman."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tiktokdownloader.ph/download-tiktok-stories#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiktokdownloader.ph/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tiktokdownloader.ph/blog" },
        { "@type": "ListItem", "position": 3, "name": "Manood at mag-download ng mga TikTok Story", "item": "https://tiktokdownloader.ph/download-tiktok-stories" }
      ]
    }
  ]
};

const MAIN_HTML = "<div class=\"container\">\r\n        <div class=\"d-flex justify-content-center align-items-start\" style=\"margin-bottom: 10px;\">\r\n          <div class=\"row gy-4 row-cols-1\" style=\"width: 100%; margin-top: 0\">\r\n            <div class=\"col d-flex justify-content-center\">\r\n              <div class=\"row gx-0 gy-3 row-cols-1 flex-grow-1 justify-content-center align-items-center\" style=\"max-width: 512px\">\r\n                <div class=\"col\">\r\n                  <h1 class=\"text-center\" style=\"color: #fff; font-size: clamp(1.35rem, 5.5vw, 1.75rem); font-family: proxima nova; font-weight: 700;\">\r\n                    Download TikTok Stories Without Watermark\r\n                  </h1>\r\n                  <p class=\"text-center\" style=\"color: rgba(255,255,255,0.65); font-size: 0.95rem; margin-top: 10px; margin-bottom: 20px; line-height: 1.7;\">\r\n                    I-download ang mga kwento ng TikTok sa kalidad ng HD nang walang watermark. Tingnan at i-save ang mga kwento nang hindi nagpapakilala online nang libre.\r\n                  </p>\r\n                  <div class=\"d-flex justify-content-center align-items-center\">\r\n                    <div class=\"flex-grow-1 form-clean\">\r\n                      <div class=\"flex-grow-1 form-floatingx\">\r\n                        <button class=\"btn btn-dark btn-sm align-items-center\" id=\"pasteButton\" type=\"button\" style=\"position: absolute; right: 10px; top: 50%; transform: translate(0%, -50%); margin-top: 5px; background: #191919; border: none;\">\r\n                          <svg viewBox=\"-64 0 512 512\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M280 64h40c35.3.0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3.0 192 0s71 27.5 78.4 64h9.6zM64 112c-8.8.0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256c8.8.0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-16v24c0 13.3-10.7 24-24 24h-88-88c-13.3.0-24-10.7-24-24v-24H64zm128-8a24 24 0 100-48 24 24 0 100 48z\"/></svg>&nbsp;Paste\r\n                        </button>\r\n                        <input class=\"form-control-lg form-control\" id=\"tiktokUrl\" required name=\"url\" autocomplete=\"off\" minlength=\"1\" inputmode=\"verbatim\" spellcheck=\"false\" autocapitalize=\"off\" autocorrect=\"off\" enterkeyhint=\"go\" placeholder=\"example.com/@example/photo/..... or /video/.....\" />\r\n                        <label class=\"form-label d-flex align-items-center\" for=\"tiktokUrl\" style=\"font-size: 16px !important\">\r\n                          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5858 4.58579C13.3668 3.80474 14.6331 3.80474 15.4142 4.58579 16.1952 5.36683 16.1952 6.63316 15.4142 7.41421l-3 2.99999c-.781099999999999.7811-2.0474.7811-2.82843.0C9.19524 10.0237 8.56208 10.0237 8.17156 10.4142 7.78103 10.8047 7.78103 11.4379 8.17156 11.8284c1.56209 1.5621 4.09474 1.5621 5.65684.0l3-2.99997c1.5621-1.5621 1.5621-4.09476.0-5.65686-1.5621-1.56209-4.0947-1.56209-5.6568.0l-1.50004 1.5c-.39053.39053-.39053 1.02369.0 1.41422.39054.39052 1.02364.39052 1.41424.0l1.5-1.5zm-5.00001 5C8.36683 8.80474 9.63316 8.80474 10.4142 9.58579c.390500000000001.39052 1.0237.39052 1.4142.0C12.219 9.19526 12.219 8.5621 11.8284 8.17157c-1.5621-1.56209-4.09473-1.56209-5.65683.0l-3 3.00003c-1.56209 1.5621-1.56209 4.0947.0 5.6568 1.5621 1.5621 4.09476 1.5621 5.65686.0l1.49997-1.5C10.719 14.9379 10.719 14.3047 10.3284 13.9142 9.9379 13.5237 9.30474 13.5237 8.91421 13.9142l-1.5 1.5c-.78105.7811-2.04737.7811-2.82842.0C3.80474 14.6332 3.80474 13.3668 4.58579 12.5858l3-3.00001z\" fill=\"currentColor\"/></svg>&nbsp;TikTok Story Link\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"row\" style=\"margin-top: 8px\">\r\n                        <div class=\"col\">\r\n                          <button class=\"btn btn-primary btn-lg d-flex justify-content-center align-items-center button-dark-clean\" id=\"loadVideos\" type=\"button\" onclick=\"window.loadVideosClicked||(window.loadVideosClicked=!0,this.classList.add('disabled'))\">\r\n                            <span class=\"d-flex align-items-center label\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 24px\"><path d=\"M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z\" fill=\"currentColor\"/><path d=\"M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1z\" fill=\"currentColor\"/></svg>&nbsp;Load Story\r\n                            </span>\r\n                            <span class=\"spinner-border spinner-border-sm d-none\" role=\"status\" style=\"font-size: 20px; height: 24px; width: 24px; color: #fff;\"></span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" id=\"mediaList\" data-nosnippet>\r\n              <div class=\"row gy-3 justify-content-center\" style=\"min-height: 0\">\r\n                <div class=\"col d-none\" id=\"tiktokLoader\" style=\"margin-top: -8px; margin-bottom: 5px\">\r\n                  <div class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 15px\">\r\n                    <div class=\"tiktok-container\"><div class=\"tiktok\"></div><div class=\"tiktok red\"></div></div>\r\n                  </div>\r\n                  <div class=\"d-flex justify-content-center mt-1\">\r\n                    <span class=\"text-muted d-none\" id=\"estimatedTime\" style=\"opacity: 0.5; font-size: 14px\">Est. Time:&nbsp;sec</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-sm-10 col-md-auto media-loaded\" style=\"margin-top: 4px; display: none\">\r\n                  <div class=\"card\">\r\n                    <div class=\"thumbnail-div\">\r\n                      <div>\r\n                        <div class=\"d-flex justify-content-center align-items-center\" id=\"userInfo\" style=\"margin-bottom: 10px\">\r\n                          <img class=\"img-fluid rounded-circle\" width=\"24\" height=\"24\" alt=\"TikTok story creator profile\" loading=\"lazy\" style=\"width: 24px; height: 24px\" />\r\n                          <a class=\"d-flex align-items-center\" href=\"#\" style=\"margin-left: 5px; color: #fff; font-size: 18px;\" target=\"_blank\">\r\n                            <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M16 12c0-2.20914-1.7909-4-4-4-2.20914.0-4 1.79086-4 4 0 2.2091 1.79086 4 4 4 2.2091.0 4-1.7909 4-4zm0 0v1.5c0 1.3807 1.1193 2.5 2.5 2.5S21 14.8807 21 13.5V12c0-4.97056-4.0294-9-9-9-4.97056.0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9m4.5-1.2058C15.0801 20.614 13.5296 21.0029 12 21.0015\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\r\n                            <span>tiktok</span>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"d-flex justify-content-center align-items-center\" id=\"videoPreview\">\r\n                        <a href=\"#\" target=\"_blank\" style=\"position: relative; display: flex; justify-content: center; align-items: center;\" rel=\"nofollow noreferrer noopener\">\r\n                          <svg class=\"bi bi-play-fill\" width=\"1em\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 16 16\" style=\"position: absolute; font-size: 40px; pointer-events: none; opacity: 0.6; color: #fff;\"><path d=\"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802.0 010 1.393\"/></svg>\r\n                          <img class=\"img-fluid\" loading=\"eager\" style=\"min-height: 180px\" alt=\"TikTok story thumbnail\" />\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"d-flex justify-content-center\" style=\"margin: 0 14px; margin-bottom: 4px\">\r\n                        <div class=\"vstack flex-grow-0 gap-2 my-auto download-list\">\r\n                          <div class=\"d-flex justify-content-end\" id=\"removeWatermarkParent\" style=\"margin-bottom: -2px; margin-right: 2px\">\r\n                            <div class=\"d-flex align-items-center form-check form-switch form-check-reverse\">\r\n                              <label class=\"form-label text-secondary d-flex align-items-center\" for=\"watermarkMode\" style=\"padding: 0; margin: 0; margin-bottom: -2px; cursor: pointer;\">\r\n                                <svg viewBox=\"-32 0 512 512\" width=\"1em\" height=\"1em\" fill=\"currentColor\" style=\"font-size: 13px\"><path d=\"M448 209.91a210.06 210.06.0 01-122.77-39.25V349.38A162.55 162.55.0 11185 188.31V278.2a74.62 74.62.0 1052.23 71.18V0h88a121.18 121.18.0 001.86 22.17h0A122.18 122.18.0 00381 102.39a121.43 121.43.0 0067 20.14z\"/></svg>&nbsp;Remove Watermark:&nbsp;\r\n                              </label>\r\n                              <input type=\"checkbox\" id=\"watermarkMode\" class=\"form-check-input\" checked />\r\n                            </div>\r\n                          </div>\r\n                          <div id=\"downloadNoWatermark\" style=\"border-radius: 4px; overflow: hidden; border: 1px solid #ff3b5c; background: rgba(255, 255, 255, 4%); color: #ff3b5c;\">\r\n                            <button class=\"btn download-button\" type=\"button\" data-media-url=\"/\" data-filename=\"/\" data-filetype=\"/\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 22px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z\" fill=\"currentColor\"/></svg>&nbsp;Download Story<span class=\"resolution-badge\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z\" fill=\"currentColor\"/><path d=\"M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1z\" fill=\"currentColor\"/></svg>&nbsp;<span>HD MP4</span></span></button>\r\n                            <a class=\"btn media-url\" role=\"button\" href=\"#\" target=\"_blank\" aria-label=\"Open raw story link in new tab\" rel=\"nofollow noreferrer noopener\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"font-size: 20px\"><path d=\"M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z\" fill=\"currentColor\"/><path d=\"M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z\" fill=\"currentColor\"/></svg></a>\r\n                          </div>\r\n                          <div id=\"downloadWatermark\" style=\"border-radius: 4px; overflow: hidden; border: 1px solid #ff3b5c; background: rgba(255, 255, 255, 4%); color: #ff3b5c;\">\r\n                            <button class=\"btn download-button\" type=\"button\" data-media-url=\"/\" data-filename=\"/\" data-filetype=\"/\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 22px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z\" fill=\"currentColor\"/></svg>&nbsp;Download Story<span class=\"resolution-badge\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z\" fill=\"currentColor\"/><path d=\"M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1\" fill=\"currentColor\"/></svg>&nbsp;<span>MP4</span></span></button>\r\n                            <a class=\"btn media-url\" role=\"button\" href=\"#\" target=\"_blank\" aria-label=\"Open raw story link in new tab\" rel=\"nofollow noreferrer noopener\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"font-size: 20px\"><path d=\"M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z\" fill=\"currentColor\"/><path d=\"M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z\" fill=\"currentColor\"/></svg></a>\r\n                          </div>\r\n                          <div id=\"downloadAudio\" style=\"border-radius: 4px; overflow: hidden; border: 1px solid #ff3b5c; background: rgba(255, 255, 255, 4%); color: #ff3b5c;\">\r\n                            <button class=\"btn download-button\" type=\"button\" data-media-url=\"/\" data-filename=\"/\" data-filetype=\"/\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\" style=\"font-size: 22px\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z\" fill=\"currentColor\"/></svg>&nbsp;Download Audio<span class=\"resolution-badge\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M18 3.00001c0-.29959-.1343-.5834-.366-.77334S17.0977 1.96067 16.8039 2.01943l-10.00002 2C6.33646 4.11291 6 4.52333 6 5.00001V14.1138C5.68722 14.0401 5.35064 14 5 14c-1.65685.0-3 .8954-3 2 0 1.1046 1.34315 2 3 2S7.99999 17.1046 8 16V7.81981l8-1.6V12.1138C15.6872 12.0401 15.3506 12 15 12c-1.6569.0-3 .8954-3 2s1.3431 2 3 2 3-.8954 3-2V3.00001z\" fill=\"currentColor\"/></svg>&nbsp;<span>MP3</span></span></button>\r\n                            <a class=\"btn media-url\" role=\"button\" href=\"#\" target=\"_blank\" aria-label=\"Open raw audio link in new tab\" rel=\"nofollow noreferrer noopener\"><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"font-size: 20px\"><path d=\"M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z\" fill=\"currentColor\"/><path d=\"M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z\" fill=\"currentColor\"/></svg></a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"margin-top: 32px; padding-bottom: 20px;\">\r\n\r\n          <section style=\"margin-top:32px;\">\r\n            <h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:14px;\">Paano Kopyahin ang Tamang Link ng Kwento ng TikTok</h2>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Para mag-download ng kwento ng TikTok, pakikopya ang eksaktong link ng kwento. Hindi sinusuportahan ang mga link sa profile. Halimbawa, hindi gagana ang link tulad ng <strong style=\"color:#fff;\">https://example.com/@username</strong>. Buksan ang profile ng TikTok, i-click ang display picture (kwento), i-click ang share button at kopyahin ang URL.</p>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Dapat magmukhang ganito ang iyong link:</p>\r\n            <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:16px 20px;margin-bottom:10px;\">\r\n              <code style=\"color:#ff3b5c;font-size:.9rem;\">https://example.com/@username/photo/1234567890123456789?</code>\r\n            </div>\r\n            <p style=\"color:rgba(255,255,255,0.5);font-size:.9rem;margin-bottom:4px;text-align:center;\">O</p>\r\n            <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:16px 20px;\">\r\n              <code style=\"color:#ff3b5c;font-size:.9rem;\">https://example.com/@username/video/1234567890123456789?</code>\r\n            </div>\r\n          </section>\r\n\r\n          <figure style=\"margin:40px 0 0;\">\r\n            <img src=\"/images/download-tiktok-stories.webp\" alt=\"TikTok stories downloader preview\" title=\"TikTok stories downloader\" style=\"width:100%;border-radius:12px;\" loading=\"lazy\" />\r\n          </figure>\r\n\r\n          <section style=\"margin-top:40px;\">\r\n            <h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:14px;\">Paano Mag-download ng Mga Kwento ng TikTok?</h2>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:24px;\">Mabilis at walang abala ang pag-download ng mga kwento ng TikTok. Hindi mo kailangan ng anumang teknikal na kasanayan, app, o pagpaparehistro. Sundin lamang ang simpleng proseso sa ibaba at i-save ang iyong mga paboritong TikTok stories sa mataas na kalidad sa loob ng ilang segundo.</p>\r\n            <div style=\"display:grid;gap:24px;\">\r\n              <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:22px;\">\r\n                <h3 style=\"color:#fff;font-size:1.1rem;font-weight:600;margin-bottom:12px;\">Hakbang 1: Kopyahin ang Link ng TikTok Story</h3>\r\n                <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.8;margin-bottom:0;\">Buksan ang TikTok app o website, i-play ang story na gusto mo, i-tap ang Share button, at kopyahin ang link ng story.</p>\r\n              </div>\r\n              <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:22px;\">\r\n                <h3 style=\"color:#fff;font-size:1.1rem;font-weight:600;margin-bottom:12px;\">Hakbang 2: I-paste ang Link</h3>\r\n                <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.8;margin-bottom:0;\">I-paste ang kinopyang URL ng TikTok Story sa input box na makikita sa pahinang ito at hintaying makuha ng system ang impormasyon ng Story.</p>\r\n              </div>\r\n              <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:22px;\">\r\n                <h3 style=\"color:#fff;font-size:1.1rem;font-weight:600;margin-bottom:12px;\">Hakbang 3: Mag-download ng Story</h3>\r\n                <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.8;margin-bottom:0;\">I-click ang Download button at piliin ang format. Mase-save ang iyong Story file sa iyong device sa loob ng ilang segundo.</p>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <section style=\"margin-top:40px;\">\r\n            <h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:14px;\">Mag-download ng TikTok Stories Nang Walang Watermark sa HD</h2>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Madaling mag-download ng TikTok stories gamit ang aming mabilis at maaasahang TikTok story downloader. Maaari kang mag-download ng TikTok stories gamit ang username o link sa HD quality nang walang watermark. Gumagana rin ang tool na ito bilang isang anonymous TikTok story viewer, na nagbibigay-daan sa iyong tingnan at i-save ang mga stories nang pribado nang hindi nagla-log in.</p>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:10px;\">Ang aming online TikTok story downloader ay tugma sa lahat ng device, kabilang ang mobile, tablet, at desktop. Gusto mo mang mag-save ng mga stories para sa offline na panonood, inspirasyon ng content, o pagbabahagi, ang tool na ito ay nagbibigay ng agarang resulta na may mataas na kalidad na output. Kung naghahanap ka ng paraan para mag-extract ng audio, maaari mo ring gamitin ang aming <a href=\"/download-tiktok-mp3\" style=\"color:#ff3b5c;text-decoration:none;\">TikTok MP3 downloader</a> para mabilis at madaling mag-download ng TikTok MP3 music online.</p>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:0;\">Hindi tulad ng ibang mga tool, ang aming TikTok story saver ay libre, ligtas, at madaling gamitin. Hindi mo na kailangang mag-install ng anumang app o gumawa ng account. Ilagay lang ang username o i-paste ang story link, at i-download ang TikTok stories sa loob ng ilang segundo.</p>\r\n          </section>\r\n\r\n          <section style=\"margin-top:40px;\">\r\n            <h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:14px;\">Paano Mag-download ng TikTok Stories Gamit ang Username</h2>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-bottom:0;\">Madali mong mada-download ang TikTok stories gamit ang username nang hindi nangangailangan ng direktang link. Ilagay lang ang TikTok username, at agad na kukunin ng aming tool ang mga available na stories. Mabilis, anonymous, at gumagana nang walang login ang paraang ito, kaya perpekto ito para sa pribadong panonood at pag-download.</p>\r\n          </section>\r\n\r\n          <section style=\"margin-top:40px;\">\r\n            <h2 class=\"text-center\" style=\"color:#fff;font-size:1.5rem;font-weight:700;margin-bottom:14px;\">Mga Tampok ng Aming TikTok Story Downloader</h2>\r\n            <div class=\"row g-3 row-cols-1 row-cols-md-2\">\r\n              <div class=\"col\">\r\n                <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\">\r\n                  <h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Mabilis na Story Downloader</h3>\r\n                  <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">I-download ang mga TikTok stories sa loob ng wala pang 5 segundo  -  mabilis, tumpak, at walang pagkaantala.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\">\r\n                  <h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Gumagana sa Lahat ng Device</h3>\r\n                  <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Tugma sa mga mobile, Tablet, at Desktop device  -  gamitin ito kahit saan at kahit kailan.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\">\r\n                  <h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Mataas na Kalidad ng HD</h3>\r\n                  <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">I-download ang mga TikTok story videos sa high-definition na kalidad na may malinaw na tunog at walang compression.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\">\r\n                  <h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Hindi Kailangan ng Login</h3>\r\n                  <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Walang kinakailangang login, signup, o registration. Gamitin lang ang tool at i-download kaagad.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\">\r\n                  <h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">Libre at Walang Limitasyon</h3>\r\n                  <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">100% libre na may walang limitasyong downloads. Mag-save ng kahit gaano karaming TikTok stories araw-araw.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div style=\"background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px;height:100%;\">\r\n                  <h3 style=\"color:#fff;font-size:1rem;font-weight:600;margin-bottom:8px;\">SSL-Secured at Privacy-Friendly</h3>\r\n                  <p style=\"color:rgba(255,255,255,0.55);font-size:.95rem;line-height:1.7;margin:0;\">Ang aming tool ay protektado ng SSL encryption. Ang iyong privacy ay palaging pinoprotektahan.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <p style=\"color:rgba(255,255,255,0.65);font-size:.95rem;line-height:1.8;margin-top:20px;margin-bottom:0;\">Ang TikTok story downloader na ito ay idinisenyo para tulungan ang mga user na mag-download ng TikTok stories nang mabilis at mahusay. Kung gusto mong mag-save ng mga kwento gamit ang username, tingnan ang mga ito nang hindi nagpapakilala, o mag-download sa HD nang walang watermark, ang aming tool ay nagbibigay ng kumpletong solusyon para sa lahat ng iyong pangangailangan.</p>\r\n          </section>\r\n\r\n          <!-- FAQ Section -->\r\n          <section class=\"home-faq\">\r\n            <h2 class=\"text-center\">Mga Madalas Itanong</h2>\r\n            <p class=\"home-faq__intro\">Hanapin ang mabilis na sagot tungkol sa page na ito, mga download option, device support, at ligtas na paggamit.</p>\r\n            <div class=\"faq-list\">\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Paano mag-download ng TikTok story gamit ang username?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Maaari mong i-download ang mga TikTok story gamit ang username sa pamamagitan lamang ng paglalagay ng username sa aming tool. Kukunin nito agad ang mga available na kwento, na magbibigay-daan sa iyong i-download ang mga ito sa kalidad ng HD nang walang watermark.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Maaari ko bang tingnan ang mga TikTok story nang hindi nagpapakilala?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Oo, ang aming tool ay gumagana bilang isang hindi nagpapakilalang TikTok story viewer. Maaari kang manood at mag-download ng mga kwento nang hindi nagla-log in o nag-aabiso sa user.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Libre bang gamitin ang TikTok story downloader na ito?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Oo, ang aming TikTok story downloader ay libre. Walang mga nakatagong singil, subscription, o limitasyon.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Maaari ba akong mag-download ng mga TikTok story nang walang watermark?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Talaga. Maaari kang mag-download ng mga TikTok story sa kalidad ng HD nang walang watermark gamit ang aming online tool.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Kailangan ko bang mag-install ng anumang app para mag-download ng mga TikTok story?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Hindi, hindi mo kailangang mag-install ng anumang app o software. Ang aming tool ay gumagana nang buo online sa lahat ng device.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Sinusuportahan ba ng tool na ito ang pag-download ng TikTok story sa pamamagitan ng link?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Oo, maaari mong i-paste ang link ng TikTok story sa input box at agad na i-download ang story. Sinusuportahan ang parehong <strong style=\"color:#fff;\">/photo/</strong> at <strong style=\"color:#fff;\">/video/</strong> na mga URL.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Maaari ba akong mag-download ng mga video ng TikTok story sa HD na kalidad?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Oo, lahat ng story ay maaaring i-download sa high-definition (HD) na kalidad na may malinaw na video at audio.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Posible bang mag-download ng mga TikTok story nang hindi nagpapakilala?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Oo, maaari kang mag-download ng mga TikTok story nang hindi nagpapakilala nang hindi nagla-log in o inilalantad ang iyong pagkakakilanlan.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Gumagana ba ang TikTok story downloader na ito sa mobile at PC?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Oo, ang aming tool ay ganap na tugma sa mga mobile phone, tablet, at desktop device.</p>\r\n              </div>\r\n\r\n              <div class=\"faq-item\">\r\n                <h3 style=\"color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px;\">Maaari ba akong mag-download ng mga pribadong TikTok story?</h3>\r\n                <p style=\"color:rgba(255,255,255,0.6);font-size:.875rem;line-height:1.7;margin:0;\">Hindi, sinusuportahan lamang ng aming tool ang mga pampublikong TikTok story. Hindi maaaring ma-access o ma-download ang pribado o pinaghihigpitang nilalaman.</p>\r\n              </div>\r\n\r\n            </div>\r\n          </section>\r\n\r\n          <div style=\"margin-top:32px;margin-bottom:40px;padding:16px 20px;background:rgba(255,255,255,0.03);border-radius:9px;border:1px solid rgba(255,255,255,0.07);\">\r\n            <p style=\"color:rgba(255,255,255,0.38);font-size:.8rem;line-height:1.7;margin:0;\"><strong style=\"color:rgba(255,255,255,0.5);\">Pagtatanggi:</strong> Ang <a href=\"/\" style=\"color:rgba(255,59,92,0.7);text-decoration:none;\">tiktokdownloader.ph</a> ay isang independiyenteng tool at hindi kaakibat o ineendorso ng TikTok o ByteDance Ltd. Lahat ng trademark ay pagmamay-ari ng kani-kanilang mga may-ari.</p>\r\n          </div>\r\n        </div>\r\n      </div>";

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
