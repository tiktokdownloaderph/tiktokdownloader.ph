import Link from "next/link";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594866052702",
    icon: <path d="M14 8.2h2.2V4.6A14 14 0 0 0 13 4.4c-3.2 0-5.4 1.9-5.4 5.5V13H4v4h3.6v9h4.4v-9h3.4l.6-4h-4V10.3c0-1.2.3-2.1 2-2.1Z" />,
  },
  {
    label: "X",
    href: "https://x.com/tiktokdowload",
    icon: <path d="M18.7 4h3.1l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.4 22H3.2l7.3-8.4L2.8 4h6.4l4.4 5.8L18.7 4Zm-1.1 16.2h1.7L8.3 5.7H6.5l11.1 14.5Z" />,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/tiktokdownloaderph/",
    icon: <path d="M12.3 3.5C7.5 3.5 5 6.7 5 10.3c0 2.1 1.2 4.7 3.1 5.5.3.1.5.1.6-.3l.3-1.3c.1-.4 0-.5-.2-.8-.6-.7-1-1.6-1-2.9 0-3 2.3-5.8 6.1-5.8 3.3 0 5.2 2 5.2 4.9 0 3.7-1.9 6.3-4.3 6.3-1.3 0-2.2-1.1-1.9-2.3.4-1.5 1.1-3.1 1.1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.6 6.7c-.3 1.2-.2 2.8-.1 3.9h.2c.6-.9 1.3-2.2 1.6-3.4l.8-3.1c.5.9 1.8 1.6 3.2 1.6 4.2 0 7.3-3.9 7.3-8.8 0-4.2-3.4-7.7-8.6-7.7Z" />,
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
                  <svg viewBox="0 0 28 28" width="18" height="18" fill="currentColor" stroke="currentColor" strokeWidth="0" aria-hidden="true">
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
