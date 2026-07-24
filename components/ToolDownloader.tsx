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

let modalCloseTimer: number | undefined;

function ensureDownloadModal() {
  let modal = document.getElementById("toolDownloadModal") as HTMLDivElement | null;
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "modal fade show modal-dark";
  modal.id = "toolDownloadModal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("tabindex", "-1");
  modal.style.cssText = "display:none;background-color:rgba(0,0,0,0.5);";
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title d-flex align-items-center" style="color:#fff">Downloading...</h5>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center align-items-center" id="loading">
            <div id="progress"></div>
            <span class="d-flex justify-content-center align-items-center" style="z-index:1;font-size:1.25rem;color:#fff">
              <span class="spinner-border spinner-border-sm" role="status" style="font-size:16px;margin-right:5px"></span>
              <span id="toolProgressText" style="font-size:16px">Preparing download...</span>
            </span>
          </div>
          <p class="text-center" style="margin:5px 0 3px;font-size:15px;color:rgba(121,126,146,0.5)">Do not close this tab or your download will cancel</p>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  return modal;
}

function updateDownloadModal(text: string, progress: number) {
  const modal = ensureDownloadModal();
  const bar = modal.querySelector("#progress") as HTMLElement | null;
  const label = modal.querySelector("#toolProgressText") as HTMLElement | null;
  modal.style.display = "flex";
  if (bar) bar.style.width = `${progress}%`;
  if (label) label.textContent = text;
}

function hideDownloadModal() {
  const modal = document.getElementById("toolDownloadModal") as HTMLDivElement | null;
  if (modal) modal.style.display = "none";
}

function doDownload(mediaUrl: string, filename: string) {
  window.clearTimeout(modalCloseTimer);
  updateDownloadModal("Preparing download...", 12);
  window.setTimeout(() => updateDownloadModal("Starting download...", 46), 180);

  try {
    const dlUrl = `/api/download?url=${encodeURIComponent(mediaUrl)}&filename=${encodeURIComponent(filename)}`;
    const a = document.createElement("a");
    a.href = dlUrl;
    a.download = filename;
    a.rel = "nofollow noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => updateDownloadModal("Download started!", 100), 360);
  } catch {
    updateDownloadModal("Download failed. Try the direct link.", 100);
  }

  modalCloseTimer = window.setTimeout(hideDownloadModal, 2200);
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
    const loader = document.getElementById("tiktokLoader");

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
      loader?.classList.remove("d-none");

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
        loader?.classList.add("d-none");
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
