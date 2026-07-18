"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
            fontSize: "4rem",
            fontWeight: 800,
            color: "#ff3b5c",
            lineHeight: 1,
            marginBottom: 16,
            fontFamily: "proxima nova",
          }}
        >
          500
        </div>
        <h1
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          May Nangyaring Mali
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
          Paumanhin, nagkaroon ng hindi inaasahang error. Pakisubukan muli o
          bumalik sa homepage.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={reset}
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
              border: "none",
              cursor: "pointer",
            }}
          >
            Subukan Ulit
          </button>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              fontWeight: 600,
              fontSize: ".95rem",
              padding: "12px 28px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            ← Home
          </Link>
        </div>
      </div>
    </main>
  );
}
