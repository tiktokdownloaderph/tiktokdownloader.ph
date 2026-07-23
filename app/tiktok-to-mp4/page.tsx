import type { Metadata } from "next";
import ToolDownloader from "@/components/ToolDownloader";

const pageTitle = "TikTok to MP4 Converter — Mag-download ng TikTok MP4 HD (Libre)";
const pageDescription = "Libreng TikTok to MP4 converter. I-paste ang link at mag-download ng TikTok MP4 video sa HD, walang watermark, walang app at walang sign-up. Gumagana sa Android, iPhone at PC.";
const pageUrl = "https://tiktokdownloader.ph/tiktok-to-mp4";
const imageUrl = "https://tiktokdownloader.ph/images/featuredimg8.webp";
const publishedAt = "2026-07-23T22:03:14+08:00";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, type: "article", url: pageUrl, siteName: "TikTok Downloader", publishedTime: publishedAt, modifiedTime: publishedAt, images: [{ url: imageUrl, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [imageUrl] },
};

const features = [
  ["Walang watermark", "Kapag may available na clean version ang public link, kinukuha ng tool ang MP4 na walang TikTok logo at walang username overlay - malinis na video para sa panonood o pag-edit."],
  ["Mabilis na conversion", "Karaniwang tapos ang proseso sa loob ng 5-15 segundo, depende sa haba ng video at bilis ng iyong internet."],
  ["HD quality", "Ini-save ang video sa pinakamataas na resolution na available mula sa orihinal na post."],
  ["Walang limitasyon", "Walang daily cap, walang queue, at walang speed throttling. Mag-download ng kasingdami ng gusto mo."],
  ["Walang app, walang sign-up", "Gumagana lahat sa browser - Chrome, Safari, Firefox, Edge, o Opera. Walang installation at walang account."],
  ["Ligtas at pribado", "Hindi kailangan ng TikTok login. Hindi namin iniimbak ang mga na-download na video sa aming server."],
];

const supportedRows = [
  ["Regular na TikTok video", "Oo", "MP4"],
  ["Duet at Stitch", "Oo", "MP4"],
  ["TikTok Live replay (public)", "Oo", "MP4"],
  ["TikTok photo / slideshow post", "Oo", "Mga larawan + MP3 audio"],
  ["Video mula sa private account", "Hindi", "Hindi maa-access"],
  ["Video na na-delete o na-restrict", "Hindi", "Hindi available"],
];

const problems = [
  ["Hindi gumagana ang link", "Siguraduhing kompleto ang URL at nagsisimula sa https://. Ang short link tulad ng vt.tiktok.com/... ay gumagana rin."],
  ["Sabi ay private o unavailable ang video", "Hindi maa-access ang mga video mula sa private account, o mga video na na-delete, na-restrict ayon sa edad, o hindi available sa iyong rehiyon."],
  ["Nagla-load pero walang lumalabas na download", "I-refresh ang page at subukan ulit. Kung may ad blocker ka, pansamantalang i-disable ito para sa site na ito."],
  ["Wala sa Gallery ang na-download na video (iPhone)", "Normal ito - napupunta muna sa Files app ang mga download sa iOS. Sundin ang hakbang sa itaas para mailipat sa Photos."],
  ["May watermark pa rin", "May ilang video na walang available na clean source version. Sa ganitong kaso, ang watermarked na MP4 lang ang maibibigay."],
];

const faqItems = [
  ["Paano ko i-convert ang TikTok sa MP4?", "Kopyahin ang link ng video, i-paste ito sa download box sa itaas, i-click ang Download, at piliin ang MP4 option. Ma-save agad ang file sa iyong device."],
  ["Libre ba ang TikTok to MP4 converter na ito?", "Oo, 100% libre. Walang bayad, walang subscription, at walang hidden na limitasyon."],
  ["Puwede bang mag-download nang walang watermark?", "Oo. Kapag may available na clean version ang public link, ibinibigay ang MP4 na walang TikTok logo at username overlay."],
  ["Anong kalidad ang makukuha ko?", "Ang pinakamataas na available mula sa orihinal na post - kadalasan ay 720p HD, at 1080p Full HD kung ganoon ang na-upload ng creator."],
  ["Kailangan ba ng app o extension?", "Hindi. Online tool ito na gumagana nang buo sa browser - Chrome, Safari, Firefox, Edge, at iba pa."],
  ["Gumagana ba ito sa iPhone?", "Oo. Gamitin ang Safari, at mase-save ang MP4 sa Files app. Mailalipat mo ito sa Photos sa pamamagitan ng Share at Save Video."],
  ["Puwede ba akong mag-download ng video mula sa private account?", "Hindi. Public na video lang ang maaaring i-download. Hindi humihingi ang tool ng TikTok login."],
  ["Puwede bang i-download ang TikTok photo o slideshow post?", "Oo. Para sa slideshow post, makukuha mo ang mga larawan at ang audio bilang hiwalay na file."],
  ["May limitasyon ba sa dami ng download?", "Wala. Walang daily limit, walang queue, at walang speed throttling."],
  ["Ligtas ba ang tool na ito?", "Oo. Hindi ito humihingi ng password, hindi nag-iimbak ng iyong mga video, at hindi nangangailangan ng pagpaparehistro."],
  ["Bakit hindi gumagana ang link ko?", "Karaniwang dahilan: hindi kompletong URL, private o na-delete na video, o naka-region lock. Subukan ulit gamit ang buong link mula sa Copy Link."],
  ["Puwede ko bang gamitin ang na-download na video sa sarili kong content?", "Para sa personal na panonood, oo. Para sa pag-repost o komersyal na paggamit, kailangan mo ng pahintulot mula sa orihinal na creator."],
  ["Ano ang pagkakaiba ng MP4 at MP3 download?", "Ang MP4 ay kumpletong video na may tunog. Ang MP3 ay audio lang. Kung sound lang ang gusto mo, gamitin ang TikTok to MP3 tool."],
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://tiktokdownloader.ph/#website", "url": "https://tiktokdownloader.ph/", "name": "TikTok Downloader", "description": "TikTok downloader na walang watermark, mabilis, at libre." },
    { "@type": "WebPage", "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#webpage", "url": pageUrl, "name": pageTitle, "description": pageDescription, "inLanguage": "tl", "image": imageUrl, "isPartOf": { "@id": "https://tiktokdownloader.ph/#website" } },
    { "@type": "Article", "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#article", "headline": pageTitle, "description": pageDescription, "inLanguage": "tl", "url": pageUrl, "image": imageUrl, "author": { "@type": "Organization", "name": "TikTok Downloader PH", "url": "https://tiktokdownloader.ph/" }, "publisher": { "@type": "Organization", "name": "TikTok Downloader PH", "url": "https://tiktokdownloader.ph/" }, "datePublished": publishedAt, "dateModified": publishedAt, "isPartOf": { "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#webpage" } },
    { "@type": "SoftwareApplication", "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#app", "name": "TikTok to MP4 Converter", "description": pageDescription, "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any", "url": pageUrl, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" } },
    { "@type": "HowTo", "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#howto", "name": "Paano Mag-download ng TikTok MP4 Video", "description": "Sundan ang tatlong hakbang para i-convert at i-save ang TikTok video sa MP4 format nang libre.", "totalTime": "PT1M", "estimatedCost": { "@type": "MonetaryAmount", "currency": "PHP", "value": "0" }, "image": imageUrl, "tool": [{ "@type": "HowToTool", "name": "TikTok Downloader (tiktokdownloader.ph)" }, { "@type": "HowToTool", "name": "Web browser" }], "step": [{ "@type": "HowToStep", "position": 1, "name": "Kopyahin ang link ng TikTok video", "text": "Buksan ang TikTok app o tiktok.com, i-play ang video, i-tap ang Share, at piliin ang Copy link." }, { "@type": "HowToStep", "position": 2, "name": "I-paste ang link sa download box", "text": "Bumalik sa page na ito, i-paste ang link sa input box, at pindutin ang Download." }, { "@type": "HowToStep", "position": 3, "name": "I-save ang MP4 file", "text": "Piliin ang MP4 na walang watermark o HD option kung available, pagkatapos ay i-download ang file." }] },
    { "@type": "FAQPage", "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#faq", "mainEntity": faqItems.map(([question, answer]) => ({ "@type": "Question", "name": question, "acceptedAnswer": { "@type": "Answer", "text": answer } })) },
    { "@type": "BreadcrumbList", "@id": "https://tiktokdownloader.ph/tiktok-to-mp4#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tiktokdownloader.ph/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tiktokdownloader.ph/blog" }, { "@type": "ListItem", "position": 3, "name": "TikTok to MP4 Converter", "item": pageUrl }] }
  ]
};

const sectionTitle = { color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 18 };
const mutedText = { color: "rgba(255,255,255,0.65)", fontSize: ".95rem", lineHeight: 1.8 };
const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 20, height: "100%" };

function DownloaderBox() {
  return (
    <div className="d-flex justify-content-center align-items-start" style={{ marginBottom: 10 }}>
      <div className="row gy-4 row-cols-1" style={{ width: "100%", marginTop: 0 }}>
        <div className="col d-flex justify-content-center">
          <div className="row gx-0 gy-3 row-cols-1 flex-grow-1 justify-content-center align-items-center" style={{ maxWidth: 512 }}>
            <div className="col">
              <h1 className="text-center" style={{ color: "#fff", fontSize: "clamp(1.45rem,5.8vw,1.9rem)", fontWeight: 700 }}>TikTok to MP4 Converter</h1>
              <p className="text-center" style={{ ...mutedText, marginTop: 12, marginBottom: 20 }}>I-convert at i-download ang TikTok videos sa MP4 - HD quality, walang watermark, direkta sa browser.</p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="flex-grow-1 form-clean">
                  <div className="flex-grow-1 form-floatingx">
                    <button className="btn btn-dark btn-sm align-items-center" id="pasteButton" type="button" style={{ position: "absolute", right: 10, top: "50%", transform: "translate(0%,-50%)", marginTop: 5, background: "#191919", border: "none" }}>Paste</button>
                    <input className="form-control-lg form-control" id="tiktokUrl" required name="url" autoComplete="off" minLength={1} inputMode="url" spellCheck={false} autoCapitalize="off" enterKeyHint="go" placeholder="example.com/@example/video/....." />
                    <label className="form-label d-flex align-items-center" htmlFor="tiktokUrl" style={{ fontSize: "16px" }}>TikTok Video Link</label>
                  </div>
                  <div className="row" style={{ marginTop: 8 }}><div className="col"><button className="btn btn-primary btn-lg d-flex justify-content-center align-items-center button-dark-clean" id="loadVideos" type="button"><span className="d-flex align-items-center label">Load MP4</span><span className="spinner-border spinner-border-sm d-none" role="status" style={{ fontSize: 20, height: 24, width: 24, color: "#fff" }} /></button></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="mediaList" data-nosnippet>
          <div className="row gy-3 justify-content-center" style={{ minHeight: 0 }}>
            <div className="col d-none" id="tiktokLoader" style={{ marginTop: -8, marginBottom: 5 }}><div className="d-flex justify-content-center align-items-center" style={{ marginTop: 15 }}><div className="tiktok-container"><div className="tiktok" /><div className="tiktok red" /></div></div></div>
            <div className="col-12 col-sm-10 col-md-auto media-loaded" style={{ marginTop: 4, display: "none" }}>
              <div className="card"><div className="thumbnail-div"><div><div className="d-flex justify-content-center align-items-center" id="userInfo" style={{ marginBottom: 10 }}><img className="img-fluid rounded-circle" width="24" height="24" alt="TikTok video creator profile" loading="lazy" style={{ width: 24, height: 24 }} /><a className="d-flex align-items-center" href="#" style={{ marginLeft: 5, color: "#fff", fontSize: 18 }} target="_blank" rel="nofollow noreferrer noopener"><span>tiktok</span></a></div></div><div className="d-flex justify-content-center align-items-center" id="videoPreview"><a href="#" target="_blank" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} rel="nofollow noreferrer noopener"><img className="img-fluid" loading="eager" style={{ minHeight: 180 }} alt="TikTok video thumbnail for MP4 download" /></a></div></div>
                <div className="card-body"><div className="d-flex justify-content-center" style={{ margin: "0 14px", marginBottom: 4 }}><div className="vstack flex-grow-0 gap-2 my-auto download-list">
                  <div id="downloadNoWatermark" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid #ff3b5c", background: "rgba(255,255,255,4%)", color: "#ff3b5c" }}><button className="btn download-button" type="button">Download MP4 <span className="resolution-badge">HD MP4</span></button><a className="btn media-url" role="button" href="#" target="_blank" aria-label="Open raw video link in new tab" rel="nofollow noreferrer noopener">Open</a></div>
                  <div id="downloadWatermark" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid #ff3b5c", background: "rgba(255,255,255,4%)", color: "#ff3b5c" }}><button className="btn download-button" type="button">Download MP4 <span className="resolution-badge">MP4</span></button><a className="btn media-url" role="button" href="#" target="_blank" aria-label="Open raw video link in new tab" rel="nofollow noreferrer noopener">Open</a></div>
                  <div id="downloadAudio" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid #ff3b5c", background: "rgba(255,255,255,4%)", color: "#ff3b5c" }}><button className="btn download-button" type="button">Download Audio <span className="resolution-badge">MP3</span></button><a className="btn media-url" role="button" href="#" target="_blank" aria-label="Open raw audio link in new tab" rel="nofollow noreferrer noopener">Open</a></div>
                </div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 22 }}><h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, marginBottom: 10 }}>{title}</h3><p style={{ color: "rgba(255,255,255,0.62)", fontSize: ".95rem", lineHeight: 1.8, margin: 0 }}>{children}</p></div>;
}

function IntroAndHowTo() {
  return <>
    <section style={{ marginTop: 32 }}>
      <p style={{ ...mutedText, marginBottom: 12 }}>Kailangan mong i-save ang isang TikTok video bilang MP4 file? Kopyahin ang link ng video, i-paste ito sa box sa itaas, at handa na ang iyong MP4 sa loob ng ilang segundo.</p>
      <p style={{ ...mutedText, marginBottom: 12 }}>Ang MP4 ang pinakakaraniwang format ng video sa mundo - nagpe-play ito nang diretso sa Android, iPhone, iPad, Windows, macOS, smart TV, at halos lahat ng media player at video editor. Kaya kapag ni-save mo ang isang TikTok bilang MP4, hindi mo na kailangan ng anumang converter app pagkatapos.</p>
      <p style={{ ...mutedText, margin: 0 }}>Gumagana ang aming tool sa loob mismo ng browser mo. Walang app na ida-download, walang extension, at walang account na kailangang gawin. Kung audio lang ang kailangan mo, gamitin ang aming <a href="/download-tiktok-mp3" style={{ color: "#ff3b5c", textDecoration: "none" }}>TikTok to MP3 downloader</a>.</p>
    </section>
    <section style={{ marginTop: 40 }}>
      <h2 className="text-center" style={sectionTitle}>Paano Mag-download ng TikTok MP4 Video (3 Hakbang)</h2>
      <div style={{ display: "grid", gap: 16 }}>
        <StepCard title="Hakbang 1 - Kopyahin ang link ng TikTok video">Buksan ang TikTok app o ang tiktok.com sa browser. I-play ang video na gusto mong i-save, i-tap ang Share at piliin ang Copy link. Puwede mo ring kopyahin nang diretso ang URL mula sa address bar ng browser.</StepCard>
        <StepCard title="Hakbang 2 - I-paste ang link sa download box">Bumalik sa page na ito at i-paste ang link sa input box sa itaas. Pindutin ang Download at maghintay ng ilang segundo habang kinukuha ng tool ang video file mula sa TikTok.</StepCard>
        <StepCard title="Hakbang 3 - I-save ang MP4 file">Piliin ang MP4 (walang watermark) o ang HD option kung available, pagkatapos ay i-tap ang download button. Mase-save ang file sa iyong device - handa nang panoorin offline, i-edit, o i-share.</StepCard>
      </div>
    </section>
  </>;
}

function SupportAndQuality() {
  return <>
    <section style={{ marginTop: 40 }}>
      <h2 className="text-center" style={sectionTitle}>Anong mga TikTok Content ang Sinusuportahan</h2>
      <div style={{ overflowX: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, background: "#212529" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", color: "rgba(255,255,255,0.72)", fontSize: ".92rem" }}>
          <thead><tr>{["Uri ng post", "Sinusuportahan", "Output"].map(h => <th key={h} style={{ padding: 14, textAlign: "left", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{h}</th>)}</tr></thead>
          <tbody>{supportedRows.map(row => <tr key={row[0]}>{row.map(cell => <td key={cell} style={{ padding: 13, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p style={{ ...mutedText, margin: "16px 0 0" }}>Ang lahat ng video na kinukuha ay dapat <strong style={{ color: "#fff" }}>public</strong>. Hindi humihingi ang tool ng TikTok username o password, at hindi ito puwedeng gamitin sa mga naka-private na account.</p>
    </section>
    <section style={{ marginTop: 40 }}>
      <h2 className="text-center" style={sectionTitle}>Anong Kalidad ang Makukuha Mo</h2>
      <p style={{ ...mutedText, marginBottom: 14 }}>Hindi lahat ng TikTok video ay pareho ang resolution. Ang kinukuha ng tool ay ang <strong style={{ color: "#fff" }}>pinakamataas na kalidad na available sa orihinal na post</strong>:</p>
      <ul style={{ ...mutedText, lineHeight: 1.9, marginBottom: 14 }}><li><strong style={{ color: "#fff" }}>1080p Full HD</strong> - kung ganito ang na-upload ng creator at pinapayagan ng source.</li><li><strong style={{ color: "#fff" }}>720p HD</strong> - ang pinakakaraniwang kalidad ng karamihan sa mga TikTok video.</li><li><strong style={{ color: "#fff" }}>Vertical 9:16 aspect ratio</strong> - pinapanatili ang orihinal na hugis ng video, walang crop.</li><li><strong style={{ color: "#fff" }}>Orihinal na audio</strong> - kasama sa MP4 file, hindi hiwalay.</li></ul>
      <p style={{ ...mutedText, margin: 0 }}>Mahalagang tandaan: kung ang video ay na-upload sa mababang kalidad o na-compress ng TikTok, hindi ito magiging mas malinaw pagkatapos i-download. Walang downloader ang makakadagdag ng detalyeng wala sa orihinal na file. Kung 4K o Full HD talaga ang hanap mo, tingnan ang aming <a href="/" style={{ color: "#ff3b5c", textDecoration: "none" }}>HD TikTok downloader</a>.</p>
    </section>
  </>;
}

function BenefitsAndFeatures() {
  const benefits = ["Universal compatibility - nagpe-play sa halos lahat ng phone, computer, at TV nang walang extra software.", "Maliit na file size - mahusay ang H.264 compression, kaya hindi masyadong kumakain ng storage.", "Video at audio sa isang file - hindi na kailangang pagsamahin pa.", "Editor-ready - direktang mai-import sa CapCut, VN, Premiere Pro, iMovie, at Canva.", "Muling ma-upload - tanggap ng Facebook, Instagram, YouTube Shorts, at Messenger nang walang conversion."];
  return <>
    <section style={{ marginTop: 40 }}><h2 className="text-center" style={sectionTitle}>Bakit MP4 ang Pinakamahusay na Format</h2><div style={{ display: "grid", gap: 10 }}>{benefits.map(item => <div key={item} style={{ padding: "14px 18px", background: "rgba(255,255,255,0.04)", borderRadius: 9, borderLeft: "3px solid rgba(255,59,92,0.6)", color: "rgba(255,255,255,0.7)" }}>{item}</div>)}</div></section>
    <section style={{ marginTop: 40 }}><h2 className="text-center" style={sectionTitle}>Mga Tampok ng Aming TikTok to MP4 Converter</h2><div className="row g-3 row-cols-1 row-cols-md-2">{features.map(([title, body]) => <div className="col" key={title}><div style={card}><h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3><p style={{ color: "rgba(255,255,255,0.58)", fontSize: ".95rem", lineHeight: 1.7, margin: 0 }}>{body}</p></div></div>)}</div></section>
  </>;
}

function DeviceAndProblems() {
  return <>
    <section style={{ marginTop: 40 }}>
      <h2 className="text-center" style={sectionTitle}>Paano Mag-download Base sa Device</h2>
      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 22 }}><h3 style={{ color: "#fff", fontSize: "1.08rem", fontWeight: 700, marginBottom: 10 }}>Sa iPhone at iPad</h3><ol style={{ ...mutedText, lineHeight: 1.8, margin: "0 0 10px", paddingLeft: "1.2rem" }}><li>Buksan ang Safari at pumunta sa tiktokdownloader.ph/tiktok-to-mp4.</li><li>I-paste ang link at i-tap ang Download.</li><li>Kapag lumabas ang video, i-tap ang download button - mapupunta ang MP4 sa Files app &gt; Downloads.</li><li>Para mailipat sa Photos: buksan ang Files, i-tap nang matagal ang video, piliin ang Share &gt; Save Video.</li></ol><p style={{ color: "rgba(255,255,255,0.7)", fontSize: ".9rem", lineHeight: 1.7, margin: 0 }}>Tip: kung walang nangyari kapag pinindot ang download sa iOS, i-tap nang matagal ang link at piliin ang Download Linked File.</p></div>
        <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 22 }}><h3 style={{ color: "#fff", fontSize: "1.08rem", fontWeight: 700, marginBottom: 10 }}>Sa Android</h3><ol style={{ ...mutedText, lineHeight: 1.8, margin: 0, paddingLeft: "1.2rem" }}><li>Buksan ang Chrome at pumunta sa page na ito.</li><li>I-paste ang link, i-tap ang Download, pagkatapos ay piliin ang MP4.</li><li>Mase-save ang file sa Downloads folder - makikita rin ito sa Gallery o Files app.</li></ol></div>
        <div style={{ background: "#212529", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 22 }}><h3 style={{ color: "#fff", fontSize: "1.08rem", fontWeight: 700, marginBottom: 10 }}>Sa Windows at Mac</h3><ol style={{ ...mutedText, lineHeight: 1.8, margin: 0, paddingLeft: "1.2rem" }}><li>Kopyahin ang URL ng TikTok video mula sa address bar ng browser.</li><li>I-paste sa download box at i-click ang Download.</li><li>I-right click ang MP4 link at piliin ang Save link as... kung gusto mong pumili ng folder.</li></ol></div>
      </div>
    </section>
    <section style={{ marginTop: 40 }}><h2 className="text-center" style={sectionTitle}>Mga Karaniwang Problema at Solusyon</h2><div style={{ display: "grid", gap: 12 }}>{problems.map(([title, body]) => <div key={title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 18 }}><h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3><p style={{ color: "rgba(255,255,255,0.6)", fontSize: ".95rem", lineHeight: 1.7, margin: 0 }}>{body}</p></div>)}</div></section>
  </>;
}

function ProsConsLegalFaq() {
  const pros = ["Libre at walang limitasyon", "HD MP4 na walang watermark", "Gumagana sa Android, iPhone, tablet, at desktop", "Walang app installation o pagpaparehistro", "Pinapanatili ang orihinal na audio at aspect ratio", "Mabilis - ilang segundo lang bawat video"];
  const cons = ["TikTok content lang ang sinusuportahan", "Kailangan ng koneksyon sa internet", "Hindi puwede sa private, deleted, o region-locked na video", "Hindi sinusuportahan ang bulk o buong-profile na pag-download", "Nakadepende ang final quality sa orihinal na upload"];
  return <>
    <section style={{ marginTop: 40 }}>
      <h2 className="text-center" style={sectionTitle}>Mga Kalamangan at Kahinaan</h2>
      <div className="row g-3"><div className="col-12 col-md-6"><div style={{ background: "rgba(30,126,73,0.1)", border: "1px solid rgba(59,180,112,0.3)", borderRadius: 10, padding: 20, height: "100%" }}><div style={{ display: "inline-block", background: "#55b85f", color: "#fff", fontWeight: 700, fontSize: ".8rem", padding: "6px 14px", borderRadius: 4, marginBottom: 14 }}>POSITIVES</div><ul style={{ color: "rgba(255,255,255,0.72)", fontSize: ".92rem", lineHeight: 1.9, margin: 0, paddingLeft: "1.2em" }}>{pros.map(item => <li key={item}>{item}</li>)}</ul></div></div><div className="col-12 col-md-6"><div style={{ background: "rgba(255,59,92,0.08)", border: "1px solid rgba(255,59,92,0.3)", borderRadius: 10, padding: 20, height: "100%" }}><div style={{ display: "inline-block", background: "#ff3b5c", color: "#fff", fontWeight: 700, fontSize: ".8rem", padding: "6px 14px", borderRadius: 4, marginBottom: 14 }}>NEGATIVES</div><ul style={{ color: "rgba(255,255,255,0.72)", fontSize: ".92rem", lineHeight: 1.9, margin: 0, paddingLeft: "1.2em" }}>{cons.map(item => <li key={item}>{item}</li>)}</ul></div></div></div>
    </section>
    <section style={{ marginTop: 40 }}>
      <h2 className="text-center" style={sectionTitle}>Legal ba ang Pag-download ng TikTok Video?</h2>
      <p style={{ ...mutedText, marginBottom: 14 }}>Pinapayagan ang pag-save ng public na video para sa <strong style={{ color: "#fff" }}>personal at offline na paggamit</strong>. Ang hindi pinapayagan ay ang mag-repost, gumamit sa komersyal na paraan, o mag-claim ng nilalaman ng ibang creator bilang sarili mo.</p>
      <p style={{ ...mutedText, marginBottom: 10 }}>Bago mo gamitin ang isang na-download na video sa labas ng personal na panonood:</p>
      <ul style={{ ...mutedText, lineHeight: 1.9, marginBottom: 14 }}><li>Humingi ng pahintulot sa orihinal na creator.</li><li>Magbigay ng credit kapag nag-share.</li><li>Iwasan ang paggamit sa ads o monetized na content nang walang lisensya.</li></ul>
      <p style={{ ...mutedText, margin: 0 }}>Ang tool na ito ay para sa personal na paggamit lamang at hindi nag-iimbak ng anumang video sa server.</p>
    </section>
    <section className="home-faq"><h2 className="text-center">Mga Madalas Itanong</h2><p className="home-faq__intro">Hanapin ang mabilis na sagot tungkol sa TikTok to MP4 download, kalidad, device support, at ligtas na paggamit.</p><div className="faq-list">{faqItems.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}{question.includes("MP4 at MP3") ? <> <a href="/download-tiktok-mp3" style={{ color: "#ff3b5c", textDecoration: "none" }}>TikTok to MP3 tool</a>.</> : null}</p></details>)}</div></section>
    <section className="closing-callout"><h2 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, marginBottom: 10 }}>Pangwakas</h2><p style={{ ...mutedText, marginBottom: 12 }}>Ang aming TikTok to MP4 converter ay ginawa para sa isang simpleng layunin: kunin ang TikTok video na gusto mo, sa MP4 format, sa pinakamataas na kalidad, nang mabilis at walang abala. Walang app, walang account, at walang limitasyon - kopyahin lang ang link at i-paste.</p><p style={{ ...mutedText, margin: 0 }}>Gumagamit ka man ng Android, iPhone, tablet, o desktop, makakakuha ka ng malinis at HD na MP4 file sa loob ng ilang segundo. Subukan ito ngayon at i-save ang mga paborito mong TikTok video para sa offline na panonood.</p></section>
  </>;
}

export default function Page() {
  return (
    <>
      <main><div className="container"><DownloaderBox /><div style={{ marginTop: 32, paddingBottom: 20 }}><IntroAndHowTo /><SupportAndQuality /><BenefitsAndFeatures /><DeviceAndProblems /><ProsConsLegalFaq /></div></div></main>
      <ToolDownloader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
    </>
  );
}
