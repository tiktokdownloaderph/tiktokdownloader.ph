"use client";

import { useEffect } from "react";

interface ApiData {
  [key: string]: unknown;
}

function pick(d: ApiData, ...keys: string[]): string {
  for (const k of keys) {
    if (typeof d[k] === "string" && d[k]) return d[k] as string;
  }
  return "";
}

function doDownload(mediaUrl: string, filename: string) {
  const dlUrl = `/api/download?url=${encodeURIComponent(mediaUrl)}&filename=${encodeURIComponent(filename)}`;
  const a = document.createElement("a");
  a.href = dlUrl;
  a.download = filename;
  a.rel = "nofollow noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function wireBtn(container: HTMLElement | null, mediaUrl: string, filename: string) {
  if (!container || !mediaUrl) return;
  const btn = container.querySelector("button");
  const link = container.querySelector("a.media-url") as HTMLAnchorElement | null;
  if (btn) btn.onclick = () => doDownload(mediaUrl, filename);
  if (link) link.href = mediaUrl;
}

export default function ToolDownloader() {
  useEffect(() => {
    const pasteBtn = document.getElementById("pasteButton");
    const input = document.getElementById("tiktokUrl") as HTMLInputElement | null;
    const loadBtn = document.getElementById("loadVideos");
    const mediaLoaded = document.querySelector("#mediaList .media-loaded") as HTMLElement | null;
    const userInfoDiv = document.getElementById("userInfo");
    const videoPreviewDiv = document.getElementById("videoPreview");
    const downloadNW = document.getElementById("downloadNoWatermark");
    const downloadWM = document.getElementById("downloadWatermark");
    const downloadAudioEl = document.getElementById("downloadAudio");
    const spinner = loadBtn?.querySelector(".spinner-border");

    if (!input || !loadBtn) return;

    // Paste from clipboard
    pasteBtn?.addEventListener("click", async () => {
      try {
        input.value = await navigator.clipboard.readText();
      } catch {
        // clipboard denied silently
      }
    });

    async function loadVideo() {
      const url = input?.value?.trim();
      if (!url) return;

      loadBtn!.classList.add("disabled");
      spinner?.classList.remove("d-none");

      // clear previous error
      document.querySelector(".td-error-msg")?.remove();

      try {
        const res = await fetch(`/api/tiktok?url=${encodeURIComponent(url)}`);
        if (!res.ok) throw new Error("api");
        const d: ApiData = await res.json();

        const hdUrl    = pick(d, "hdUrl", "hd_url", "nowm", "no_watermark", "url");
        const wmUrl    = pick(d, "wmUrl", "wm_url", "wm", "watermark");
        const audioUrl = pick(d, "music", "audio", "music_url", "audioUrl");
        const thumb    = pick(d, "thumbnail", "cover", "thumb");
        const author   = pick(d, "author", "creator") || "tiktok";
        const authorUrl = pick(d, "authorUrl") || "#";
        const profilePic = pick(d, "authorThumb", "author_thumbnail");

        // Show result card
        if (mediaLoaded) mediaLoaded.style.display = "";

        // User info
        if (userInfoDiv) {
          const img = userInfoDiv.querySelector("img");
          const a   = userInfoDiv.querySelector("a");
          if (img && profilePic) img.src = profilePic;
          if (a) {
            a.href = authorUrl;
            const span = a.querySelector("span");
            if (span) span.textContent = author;
          }
        }

        // Thumbnail
        if (videoPreviewDiv && thumb) {
          const img = videoPreviewDiv.querySelector("img");
          if (img) img.src = thumb;
        }

        // Wire download buttons
        wireBtn(downloadNW,      hdUrl,    "tiktok_hd.mp4");
        wireBtn(downloadWM,      wmUrl,    "tiktok_wm.mp4");
        wireBtn(downloadAudioEl, audioUrl, "tiktok_audio.mp3");

      } catch {
        const div = document.createElement("div");
        div.className = "td-error-msg";
        div.style.cssText =
          "background:rgba(220,53,69,.12);border:1px solid rgba(220,53,69,.3);color:#ff6b7a;" +
          "border-radius:8px;padding:12px 16px;font-size:.9rem;margin-top:8px;" +
          "max-width:512px;margin-left:auto;margin-right:auto";
        div.textContent =
          "Hindi ma-load ang video. Tiyaking tama ang link at subukan ulit.";
        loadBtn!.closest(".row")?.after(div);
        setTimeout(() => div.remove(), 5000);
      } finally {
        loadBtn!.classList.remove("disabled");
        spinner?.classList.add("d-none");
        // reset the guard set by the inline onclick
        (window as Window & { loadVideosClicked?: boolean }).loadVideosClicked = false;
      }
    }

    loadBtn.addEventListener("click", loadVideo);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") loadVideo();
    });
  }, []);

  return null;
}
