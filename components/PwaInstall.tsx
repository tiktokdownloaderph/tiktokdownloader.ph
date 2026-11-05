"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Share, PlusSquare } from "lucide-react";

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PwaInstall() {
  const promptEvent = useRef<InstallPromptEvent | null>(null);
  const [canInstall, setCanInstall] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [standalone, setStandalone] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const displayMode = window.matchMedia("(display-mode: standalone)");
    const iosNavigator = navigator as Navigator & { standalone?: boolean };
    const updateDisplay = () => setStandalone(displayMode.matches || iosNavigator.standalone === true);
    updateDisplay();
    setIsIos(/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

    const beforeInstall = (event: Event) => {
      event.preventDefault();
      promptEvent.current = event as InstallPromptEvent;
      setCanInstall(true);
    };
    const installed = () => {
      promptEvent.current = null;
      setCanInstall(false);
      setStandalone(true);
    };
    window.addEventListener("beforeinstallprompt", beforeInstall);
    window.addEventListener("appinstalled", installed);
    displayMode.addEventListener("change", updateDisplay);

    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator && window.isSecureContext) {
      void navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch(() => { /* Installation is optional; the online tool still works. */ });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstall);
      window.removeEventListener("appinstalled", installed);
      displayMode.removeEventListener("change", updateDisplay);
    };
  }, []);

  async function install() {
    const event = promptEvent.current;
    if (!event || busy) return;
    promptEvent.current = null;
    setBusy(true);
    try {
      await event.prompt();
      const choice = await event.userChoice;
      if (choice.outcome === "accepted") setStandalone(true);
    } catch {
      // A prompt can expire or be dismissed by the browser.
    } finally {
      setCanInstall(false);
      setBusy(false);
    }
  }

  if (standalone || (!isIos && !canInstall)) return null;

  return (
    <div className="pwa-install">
      {isIos ? (
        <details>
          <summary><PlusSquare size={18} aria-hidden="true" /> Idagdag sa Home Screen</summary>
          <ol>
            <li>Buksan ang site na ito sa Safari.</li>
            <li>I-tap ang <Share size={16} aria-hidden="true" /> Share sa menu ng Safari.</li>
            <li>Piliin ang <span lang="en">Add to Home Screen</span>.</li>
            <li>Kung may <span lang="en">Open as Web App</span>, i-on ito, pagkatapos ay i-tap ang <span lang="en">Add</span>.</li>
          </ol>
        </details>
      ) : (
        <button type="button" onClick={install} disabled={busy}>
          <Download size={18} aria-hidden="true" /> {busy ? "Binubuksan..." : "I-install ang App"}
        </button>
      )}
    </div>
  );
}
