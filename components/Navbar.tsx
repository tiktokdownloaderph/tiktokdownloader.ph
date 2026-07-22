import Link from "next/link";
import { LOGO_B64 } from "./logo";

type NavLinkItem = { href: string; label: string; active?: boolean; muted?: boolean };

const primaryLinks: NavLinkItem[] = [
  { href: "/", label: "Home", active: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About" },
];

const paanoLinks: NavLinkItem[] = [
  { href: "/download-sa-pc", label: "I-download sa PC" },
  { href: "/download-tiktok-videos-sa-android", label: "I-download sa Android" },
  { href: "/download-tiktok-videos-sa-iphone", label: "I-download sa iPhone" },
  { href: "/paano-mag-download-ng-mga-video-sa-tiktok", label: "Download TikTok Videos" },
];

const downloaderLinks: NavLinkItem[] = [
  { href: "/download-tiktok-stories", label: "TikTok Stories Downloader" },
  { href: "/download-ang-larawan-at-slide-ng-tiktok", label: "Download TikTok Slideshows" },
  { href: "/download-tiktok-mp3", label: "Download TikTok MP3" },
  { href: "/tiktok-to-mp4", label: "TikTok to MP4" },
];

const mobileLinks: NavLinkItem[] = [
  ...primaryLinks,
  ...paanoLinks,
  ...downloaderLinks,
  { href: "/privacy-policy", label: "Privacy Policy", muted: true },
  { href: "/disclaimer", label: "Disclaimer", muted: true },
  { href: "/terms", label: "Terms & Conditions", muted: true },
];

function Brand() {
  return (
    <Link className="navbar-brand d-flex align-items-center" href="/" title="TikTok Downloader" translate="no" style={{ fontSize: 26 }}>
      <img className="img-fluid" src={LOGO_B64} width={45} height={45} alt="TikTok Downloader Logo" style={{ marginRight: 2 }} fetchPriority="high" loading="eager" />
      <span className="d-flex justify-content-center align-items-center" style={{ marginRight: "0 !important", fontFamily: "proxima nova", fontWeight: 800 }}>
        TikTok Downloader
      </span>
    </Link>
  );
}

function NavIcon({ type }: { type: "home" | "blog" | "contact" | "menu" | "download" | "about" }) {
  const paths = {
    home: "M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289l-7 7c-.39052.39053-.39052 1.02371.0 1.41421C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14h2C11.5523 14 12 14.4477 12 15v2C12 17.5523 12.4477 18 13 18h2C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071 18.0976 10.3166 18.0976 9.68342 17.7071 9.29289l-7-7z",
    blog: "M4 3C3.44772 3 3 3.44772 3 4v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1V4c0-.55228-.4477-1-1-1H4zm2 4c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1s-.4477 1-1 1H7c-.55228 0-1-.44772-1-1zm0 4c0-.5523.44772-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.55228 0-1-.4477-1-1zm0 4c0-.5523.44772-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.55228 0-1-.4477-1-1z",
    contact: "M18 10c0 3.866-3.5817 7-8 7C8.50836 17 7.11208 16.6428 5.91677 16.0208L2 17l1.3383-3.1227C2.4928 12.7673 2 11.434 2 10c0-3.86599 3.58172-7 8-7 4.4183.0 8 3.13401 8 7zM7 9H5v2H7V9zm8 0H13v2h2V9zM9 9h2v2H9V9z",
    menu: "M4 5C4 4.44772 4.44772 4 5 4h10c.5523 0 1 .44772 1 1v1c0 .55228-.4477 1-1 1H5c-.55228 0-1-.44772-1-1V5zm0 5c0-.5523.44772-1 1-1h10c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1H5c-.55228 0-1-.4477-1-1v-1zm1 4c-.55228 0-1 .4477-1 1v1c0 .5523.44772 1 1 1h6c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1H5z",
    download: "M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.3905-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z",
    about: "M18 10c0 4.4183-3.5817 8-8 8-4.41828.0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183.0 8 3.58172 8 8zM11 6C11 6.55228 10.5523 7 10 7c-.55228.0-1-.44772-1-1s.44772-1 1-1C10.5523 5 11 5.44772 11 6zM9 9c-.55228.0-1 .44772-1 1C8 10.5523 8.44772 11 9 11v3C9 14.5523 9.44772 15 10 15h1C11.5523 15 12 14.5523 12 14S11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9z",
  };
  return <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={paths[type]} fill="currentColor" /></svg>;
}

export default function Navbar() {
  const firstMutedIndex = mobileLinks.findIndex((item) => item.muted);

  return (
    <nav className="navbar navbar-expand-md bg-dark py-3 navbar-dark" style={{ borderBottom: "2px solid rgba(255, 255, 255, 8%)" }}>
      <div className="container">
        <Brand />
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link active" href="/"><NavIcon type="home" />&nbsp;Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/blog"><NavIcon type="blog" />&nbsp;Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact"><NavIcon type="contact" />&nbsp;Contact Us</Link></li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle nav-dropdown-button" type="button" aria-expanded="false"><NavIcon type="menu" />&nbsp;Paano</button>
              <ul className="dropdown-menu dropdown-menu-dark" style={{ minWidth: 220 }}>
                {paanoLinks.map((link) => <li key={link.href}><Link className="dropdown-item" href={link.href}>{link.label}</Link></li>)}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle nav-dropdown-button" type="button" aria-expanded="false"><NavIcon type="download" />&nbsp;TikTok Downloaders</button>
              <ul className="dropdown-menu dropdown-menu-dark" style={{ minWidth: 210 }}>
                {downloaderLinks.map((link) => <li key={link.href}><Link className="dropdown-item" href={link.href}>{link.label}</Link></li>)}
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link d-lg-flex" href="/about"><NavIcon type="about" />&nbsp;About</Link></li>
          </ul>
        </div>
        <details className="mobile-nav-shell d-md-none">
          <summary aria-label="Menu" className="btn btn-primary d-flex justify-content-center align-items-center mobile-nav-trigger">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{ fontSize: 22 }} aria-hidden="true">
              <path d="M4 6H20M4 12H20m-7 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="mobile-nav-panel">
            <div className="offcanvas-header mobile-nav-header"><Brand /></div>
            <div className="offcanvas-body" style={{ padding: 0, paddingTop: 16 }}>
              <nav className="navbar navbar-dark" style={{ padding: "5px 10px" }}>
                <div className="container" style={{ padding: 0 }}>
                  <ul className="navbar-nav d-flex flex-fill">
                    {mobileLinks.map((link, index) => (
                      <li className="nav-item" key={link.href + index} style={link.muted && index === firstMutedIndex ? { marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 8 } : undefined}>
                        <Link className={"nav-link" + (link.active ? " active" : "")} href={link.href} style={link.muted ? { fontSize: ".875rem", opacity: 0.6 } : undefined}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
