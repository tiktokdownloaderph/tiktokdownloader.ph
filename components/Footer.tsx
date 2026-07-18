import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        marginTop: 25,
        paddingTop: 10,
        borderTop: "2px solid rgba(255, 255, 255, 8%)",
        background: "#121212",
        paddingBottom: 1,
      }}
    >
      <div className="container">
        <section
          className="text-center d-flex d-lg-flex justify-content-center justify-content-lg-center"
          style={{ fontSize: 14, textTransform: "uppercase" }}
        >
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </section>
        <section style={{ marginTop: 5 }}>
          <p style={{ color: "#999", textAlign: "center", fontSize: 13 }}>
            &copy; Copyright 2026 TikTokDownloader.ph - All Rights Reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
