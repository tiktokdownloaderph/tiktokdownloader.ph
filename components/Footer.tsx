import Link from "next/link";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594866052702",
    icon: <path d="M16 8.05C16 3.6 12.42 0 8 0S0 3.6 0 8.05C0 12.07 2.93 15.4 6.75 16v-5.62H4.72V8.05h2.03V6.28c0-2.02 1.19-3.13 3.02-3.13.88 0 1.79.16 1.79.16v1.98h-1.01c-.99 0-1.3.62-1.3 1.26v1.5h2.22l-.36 2.33H9.25V16C13.08 15.4 16 12.07 16 8.05Z" />,
  },
  {
    label: "X",
    href: "https://x.com/tiktokdowload",
    icon: <path d="M12.6.75h2.45L9.7 6.88 16 15.25h-4.94L7.2 10.19l-4.43 5.06H.32l5.73-6.56L0 .75h5.06l3.5 4.62L12.6.75Zm-.86 13.03h1.36L4.32 2.15H2.87l8.87 11.63Z" />,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/tiktokdownloaderph/",
    icon: <path d="M8 0a8 8 0 0 0-2.92 15.45c-.07-.63-.13-1.59.03-2.27.15-.62.94-3.98.94-3.98s-.24-.48-.24-1.19c0-1.11.65-1.95 1.45-1.95.68 0 1.01.51 1.01 1.13 0 .69-.44 1.71-.66 2.67-.19.8.4 1.45 1.18 1.45 1.42 0 2.52-1.5 2.52-3.67 0-1.92-1.38-3.26-3.34-3.26-2.28 0-3.61 1.71-3.61 3.47 0 .69.26 1.43.59 1.83.07.08.08.15.06.23l-.22.91c-.04.15-.12.18-.27.11-1-.47-1.62-1.93-1.62-3.1 0-2.53 1.84-4.84 5.29-4.84 2.77 0 4.93 1.98 4.93 4.62 0 2.76-1.74 4.98-4.15 4.98-.81 0-1.57-.42-1.83-.92l-.5 1.9c-.18.7-.67 1.57-1 2.1A8 8 0 1 0 8 0Z" />,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__grid">
          <section className="site-footer__brand" aria-labelledby="footer-brand-title">
            <h2 id="footer-brand-title">TikTok Downloader</h2>
            <p>Libreng online tool para mag-save ng TikTok video nang walang watermark sa MP4 o MP3, direkta sa browser.</p>
          </section>

          <section className="site-footer__links" aria-labelledby="footer-links-title">
            <h2 id="footer-links-title">Links</h2>
            <nav aria-label="Footer links">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/terms">Terms Of Service</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </section>

          <section className="site-footer__social" aria-labelledby="footer-social-title">
            <h2 id="footer-social-title">Follow Us</h2>
            <div className="site-footer__social-list">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="site-footer__social-icon"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow TikTok Downloader on ${social.label}`}
                  title={social.label}
                >
                  <svg viewBox="0 0 16 16" width="21" height="21" fill="currentColor" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; 2026 TikTok Downloader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
