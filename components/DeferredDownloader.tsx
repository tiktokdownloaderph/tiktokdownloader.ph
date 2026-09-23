"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import DownloaderShell from "./DownloaderShell";

type DownloaderComponent = typeof import("./Downloader").default;

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export default function DeferredDownloader() {
  const [Downloader, setDownloader] = useState<DownloaderComponent | null>(null);
  const [initialUrl, setInitialUrl] = useState("");
  const loadingRef = useRef(false);
  const focusRef = useRef(false);

  const loadDownloader = useCallback((focusInput = false) => {
    if (focusInput) focusRef.current = true;
    if (loadingRef.current || Downloader) return;

    loadingRef.current = true;
    void import("./Downloader").then(({ default: Component }) => {
      const shellInput = document.getElementById("tiktokUrl-shell") as HTMLInputElement | null;
      setInitialUrl(shellInput?.value ?? "");
      setDownloader(() => Component);
    });
  }, [Downloader]);

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    let timeoutId: number | undefined;
    let idleId: number | undefined;

    if (idleWindow.requestIdleCallback) {
      idleId = idleWindow.requestIdleCallback(() => loadDownloader(), { timeout: 3500 });
    } else {
      timeoutId = window.setTimeout(() => loadDownloader(), 2500);
    }

    return () => {
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [loadDownloader]);

  if (Downloader) {
    return <Downloader initialUrl={initialUrl} autoFocus={focusRef.current} />;
  }

  return (
    <div
      onPointerEnter={() => loadDownloader()}
      onPointerDownCapture={() => loadDownloader(true)}
      onFocusCapture={() => loadDownloader(true)}
    >
      <DownloaderShell />
    </div>
  );
}
