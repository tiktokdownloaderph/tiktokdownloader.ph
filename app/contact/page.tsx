"use client";
import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata cannot be used in a "use client" file.
// It's defined separately in a server wrapper component pattern.
// Since this page is simple and non-indexed, we keep it as a client component.

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <main>
      <div className="container" style={{ paddingTop: 36, paddingBottom: 56 }}>
        <h1 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: 6, textAlign: "center" }}>Makipag-ugnayan sa Amin</h1>
        <p className="text-center" style={{ color: "rgba(255,255,255,0.45)", fontSize: ".875rem", marginBottom: 32 }}>May tanong o mungkahi? Nandito kami para tumulong.</p>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-6">
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 28 }}>
              <h2 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, marginBottom: 20 }}>Ipadala ang iyong mensahe</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label style={{ color: "rgba(255,255,255,0.65)", fontSize: ".875rem", display: "block", marginBottom: 6 }}>Pangalan</label>
                  <input type="text" className="form-control" placeholder="Iyong pangalan" required style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "#fff" }} />
                </div>
                <div className="mb-3">
                  <label style={{ color: "rgba(255,255,255,0.65)", fontSize: ".875rem", display: "block", marginBottom: 6 }}>Email Address</label>
                  <input type="email" className="form-control" placeholder="ikaw@example.com" required style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "#fff" }} />
                </div>
                <div className="mb-3">
                  <label style={{ color: "rgba(255,255,255,0.65)", fontSize: ".875rem", display: "block", marginBottom: 6 }}>Paksa</label>
                  <select className="form-select" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "#fff" }}>
                    <option>Teknikal na Tulong</option>
                    <option>Ulat ng Bug</option>
                    <option>Feedback</option>
                    <option>Iba Pa</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label style={{ color: "rgba(255,255,255,0.65)", fontSize: ".875rem", display: "block", marginBottom: 6 }}>Mensahe</label>
                  <textarea className="form-control" rows={5} placeholder="Isulat ang iyong mensahe..." required style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "#fff", resize: "vertical" }} />
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ fontWeight: 600, padding: 10 }}>Ipadala ang Mensahe</button>
                {submitted && (
                  <div style={{ display: "block", marginTop: 14, padding: 12, background: "rgba(255,59,92,0.08)", border: "1px solid rgba(255,59,92,0.25)", borderRadius: 8, color: "#ff3b5c", fontSize: ".875rem", textAlign: "center" }}>
                    Salamat! Natanggap na namin ang iyong mensahe.
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 18 }}>
                <h3 style={{ color: "#fff", fontSize: ".9rem", fontWeight: 600, marginBottom: 6 }}>Email</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", margin: 0 }}>tiktokdownloader.ph@gmail.com</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 18 }}>
                <h3 style={{ color: "#fff", fontSize: ".9rem", fontWeight: 600, marginBottom: 6 }}>Oras ng Tugon</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", margin: 0 }}>Lunes&ndash;Biyernes<br />24&ndash;48 oras ang average na tugon</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 18 }}>
                <h3 style={{ color: "#fff", fontSize: ".9rem", fontWeight: 600, marginBottom: 6 }}>Mabilis na Tulong</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: ".875rem", marginBottom: 10 }}>Para sa karaniwang tanong, tingnan ang aming FAQ.</p>
                <a href="/paano-mag-download-ng-mga-video-sa-tiktok" className="btn btn-outline-secondary btn-sm w-100" style={{ fontSize: ".825rem" }}>Bisitahin ang FAQ &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
