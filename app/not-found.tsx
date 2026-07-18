import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div
        className="container"
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          textAlign: "center",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "5rem",
            fontWeight: 800,
            color: "#ff3b5c",
            lineHeight: 1,
            marginBottom: 16,
            fontFamily: "proxima nova",
          }}
        >
          404
        </div>
        <h1
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          Hindi Nahanap ang Pahina
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: ".95rem",
            lineHeight: 1.8,
            maxWidth: 440,
            marginBottom: 32,
          }}
        >
          Paumanhin, wala sa aming site ang pahinang hinahangad mo. Maaaring
          nabago o natanggal na ang link.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#ff3b5c",
            color: "#fff",
            fontWeight: 700,
            fontSize: ".95rem",
            padding: "12px 28px",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          ← Bumalik sa Home
        </Link>
        <div style={{ marginTop: 40 }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: ".85rem", marginBottom: 12 }}>
            O bisitahin ang isa sa mga sikat na pahina:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { href: "/download-sa-pc", label: "Download sa PC" },
              { href: "/download-tiktok-mp3", label: "TikTok MP3" },
              { href: "/tiktok-to-mp4", label: "TikTok to MP4" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,59,92,0.2)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: ".85rem",
                  padding: "8px 18px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
