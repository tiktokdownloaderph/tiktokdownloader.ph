"use client";
import { useRef, useState } from "react";

interface MediaItem {
  url: string;
  filename: string;
  filetype: string;
  label: string;
  quality?: string;
}

interface VideoInfo {
  thumbnail?: string;
  profilePic?: string;
  author?: string;
  authorUrl?: string;
  noWatermark?: MediaItem;
  withWatermark?: MediaItem;
  audio?: MediaItem;
}

export default function Downloader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [removeWatermark, setRemoveWatermark] = useState(true);
  const [downloadModal, setDownloadModal] = useState(false);
  const [progressText, setProgressText] = useState("Preparing download...");
  const [downloadProgress, setDownloadProgress] = useState(0);

  async function pasteUrl() {
    try {
      const text = await navigator.clipboard.readText();
      if (inputRef.current) inputRef.current.value = text;
    } catch {
      // clipboard read failed silently
    }
  }

  async function loadVideo() {
    const url = inputRef.current?.value?.trim();
    if (!url) return;
    setLoading(true);
    setError(null);
    setVideoInfo(null);
    try {
      const res = await fetch(`/api/tiktok?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error("Failed to load video");
      const data = await res.json();
      const info = parseApiResponse(data);
      setVideoInfo(info);
    } catch {
      setError("Hindi ma-load ang video. Tiyaking tama ang link at subukan ulit.");
    } finally {
      setLoading(false);
    }
  }

  function parseApiResponse(data: Record<string, unknown>): VideoInfo {
    const d = data as Record<string, unknown>;
    const info: VideoInfo = {};
    info.thumbnail = (d.thumbnail as string) || (d.cover as string) || (d.thumb as string) || "";
    info.profilePic = (d.authorThumb as string) || (d.author_thumbnail as string) || "";
    info.author = (d.author as string) || (d.creator as string) || "tiktok";
    info.authorUrl = (d.authorUrl as string) || "#";

    const hdUrl =
      (d.hdUrl as string) ||
      (d.hd_url as string) ||
      (d.nowm as string) ||
      (d.no_watermark as string) ||
      (d.url as string) ||
      "";
    if (hdUrl) {
      info.noWatermark = { url: hdUrl, filename: "tiktok_hd.mp4", filetype: "video/mp4", label: "Download Video", quality: "HD MP4" };
    }

    const wmUrl =
      (d.wmUrl as string) ||
      (d.wm_url as string) ||
      (d.wm as string) ||
      (d.watermark as string) ||
      "";
    if (wmUrl) {
      info.withWatermark = { url: wmUrl, filename: "tiktok_wm.mp4", filetype: "video/mp4", label: "Download Video", quality: "MP4" };
    }

    const audioUrl =
      (d.music as string) ||
      (d.audio as string) ||
      (d.music_url as string) ||
      (d.audioUrl as string) ||
      "";
    if (audioUrl) {
      info.audio = { url: audioUrl, filename: "tiktok_audio.mp3", filetype: "audio/mpeg", label: "Download Audio", quality: "MP3" };
    }

    return info;
  }

  async function downloadFile(mediaUrl: string, filename: string) {
    setDownloadModal(true);
    setDownloadProgress(12);
    setProgressText("Preparing download...");
    try {
      window.setTimeout(() => {
        setDownloadProgress(46);
        setProgressText("Starting download...");
      }, 180);

      const dlUrl = `/api/download?url=${encodeURIComponent(mediaUrl)}&filename=${encodeURIComponent(filename)}`;
      const link = document.createElement("a");
      link.href = dlUrl;
      link.download = filename;
      link.rel = "nofollow noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(() => {
        setDownloadProgress(100);
        setProgressText("Download started!");
      }, 360);
      window.setTimeout(() => setDownloadModal(false), 2200);
    } catch {
      setDownloadProgress(100);
      setProgressText("Download failed. Try the direct link.");
      setTimeout(() => setDownloadModal(false), 2200);
    }
  }

  const activeDownload = removeWatermark ? videoInfo?.noWatermark : videoInfo?.withWatermark;

  return (
    <>
      <div className="home-downloader-hero d-flex justify-content-center align-items-start" style={{ marginBottom: 10 }}>
        <div className="row gy-4 row-cols-1" style={{ width: "100%", marginTop: 0 }}>
          <div className="col d-flex justify-content-center">
            <div
              className="row gx-0 gy-3 row-cols-1 flex-grow-1 justify-content-center align-items-center"
              style={{ maxWidth: 512 }}
            >
              <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="flex-grow-1 form-clean">
                    <div className="flex-grow-1 form-floatingx">
                      <button
                        className="btn btn-dark btn-sm align-items-center"
                        onClick={pasteUrl}
                        type="button"
                        style={{ position: "absolute", right: 10, top: "50%", transform: "translate(0%, -50%)", marginTop: 5, background: "#191919", border: "none" }}
                      >
                        <svg viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor">
                          <path d="M280 64h40c35.3.0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3.0 192 0s71 27.5 78.4 64h9.6zM64 112c-8.8.0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256c8.8.0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-16v24c0 13.3-10.7 24-24 24h-88-88c-13.3.0-24-10.7-24-24v-24H64zm128-8a24 24 0 100-48 24 24 0 100 48z" />
                        </svg>
                        &nbsp;Paste
                      </button>
                      <input
                        className="form-control-lg form-control"
                        id="tiktokUrl"
                        ref={inputRef}
                        required
                        name="url"
                        autoComplete="off"
                        minLength={1}
                        inputMode="url"
                        spellCheck={false}
                        autoCapitalize="off"
                        autoCorrect="off"
                        enterKeyHint="go"
                        placeholder="example.com/@example/video/....."
                        onKeyDown={(e) => e.key === "Enter" && loadVideo()}
                      />
                      <label className="form-label d-flex align-items-center" htmlFor="tiktokUrl" style={{ fontSize: 16 }}>
                        <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.5858 4.58579C13.3668 3.80474 14.6331 3.80474 15.4142 4.58579 16.1952 5.36683 16.1952 6.63316 15.4142 7.41421l-3 2.99999c-.781099999999999.7811-2.0474.7811-2.82843.0C9.19524 10.0237 8.56208 10.0237 8.17156 10.4142 7.78103 10.8047 7.78103 11.4379 8.17156 11.8284c1.56209 1.5621 4.09474 1.5621 5.65684.0l3-2.99997c1.5621-1.5621 1.5621-4.09476.0-5.65686-1.5621-1.56209-4.0947-1.56209-5.6568.0l-1.50004 1.5c-.39053.39053-.39053 1.02369.0 1.41422.39054.39052 1.02364.39052 1.41424.0l1.5-1.5zm-5.00001 5C8.36683 8.80474 9.63316 8.80474 10.4142 9.58579c.390500000000001.39052 1.0237.39052 1.4142.0C12.219 9.19526 12.219 8.5621 11.8284 8.17157c-1.5621-1.56209-4.09473-1.56209-5.65683.0l-3 3.00003c-1.56209 1.5621-1.56209 4.0947.0 5.6568 1.5621 1.5621 4.09476 1.5621 5.65686.0l1.49997-1.5C10.719 14.9379 10.719 14.3047 10.3284 13.9142 9.9379 13.5237 9.30474 13.5237 8.91421 13.9142l-1.5 1.5c-.78105.7811-2.04737.7811-2.82842.0C3.80474 14.6332 3.80474 13.3668 4.58579 12.5858l3-3.00001z" fill="currentColor" />
                        </svg>
                        &nbsp;TikTok Link
                      </label>
                    </div>
                    <div className="row" style={{ marginTop: 8 }}>
                      <div className="col">
                        <button
                          className={`btn btn-primary btn-lg d-flex justify-content-center align-items-center button-dark-clean${loading ? " disabled" : ""}`}
                          id="loadVideos"
                          type="button"
                          onClick={loadVideo}
                        >
                          <span className="d-flex align-items-center label">
                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{ fontSize: 24 }}>
                              <path d="M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z" fill="currentColor" />
                              <path d="M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1z" fill="currentColor" />
                            </svg>
                            &nbsp;Load Video
                          </span>
                          {loading && (
                            <span className="spinner-border spinner-border-sm" role="status" style={{ fontSize: 20, height: 24, width: 24, color: "#fff" }} />
                          )}
                        </button>
                        {loading && (
                          <div className="d-flex justify-content-center align-items-center" style={{ marginTop: 15 }}>
                            <div className="tiktok-container">
                              <div className="tiktok" />
                              <div className="tiktok red" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="col d-flex justify-content-center">
              <div style={{ maxWidth: 512, width: "100%" }}>
                <div className="alert" style={{ background: "rgba(220,53,69,0.12)", border: "1px solid rgba(220,53,69,0.3)", color: "#ff6b7a", borderRadius: 8, padding: "12px 16px", fontSize: ".9rem" }}>
                  {error}
                </div>
              </div>
            </div>
          )}

          {/* Media result */}
          {videoInfo && (
            <div className="col" id="mediaList" data-nosnippet>
              <div className="row gy-3 justify-content-center" style={{ minHeight: 0 }}>
                <div className="col-12 col-sm-10 col-md-auto media-loaded">
                  <div className="card">
                    <div className="thumbnail-div">
                      {/* User info */}
                      <div>
                        <div className="d-flex justify-content-center align-items-center" id="userInfo" style={{ marginBottom: 10 }}>
                          {videoInfo.profilePic && (
                            <img
                              className="img-fluid rounded-circle"
                              width={24}
                              height={24}
                              src={videoInfo.profilePic}
                              alt="TikTok Profile Picture"
                              loading="lazy"
                              style={{ width: 24, height: 24 }}
                            />
                          )}
                          <a
                            className="d-flex align-items-center"
                            href={videoInfo.authorUrl || "#"}
                            style={{ marginLeft: 5, color: "#fff", fontSize: 18 }}
                            target="_blank"
                            rel="nofollow noreferrer noopener"
                          >
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                              <path d="M16 12c0-2.20914-1.7909-4-4-4-2.20914.0-4 1.79086-4 4 0 2.2091 1.79086 4 4 4 2.2091.0 4-1.7909 4-4zm0 0v1.5c0 1.3807 1.1193 2.5 2.5 2.5S21 14.8807 21 13.5V12c0-4.97056-4.0294-9-9-9-4.97056.0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9m4.5-1.2058C15.0801 20.614 13.5296 21.0029 12 21.0015" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{videoInfo.author || "tiktok"}</span>
                          </a>
                        </div>
                      </div>
                      {/* Thumbnail */}
                      {videoInfo.thumbnail && (
                        <div className="d-flex justify-content-center align-items-center" id="videoPreview">
                          <a href="#" target="_blank" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} rel="nofollow noreferrer noopener">
                            <svg className="bi bi-play-fill" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ position: "absolute", fontSize: 40, pointerEvents: "none", opacity: 0.6, color: "#fff" }}>
                              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802.0 010 1.393" />
                            </svg>
                            <img className="img-fluid" loading="eager" style={{ minHeight: 180 }} src={videoInfo.thumbnail} alt="TikTok Thumbnail" />
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-center" style={{ margin: "0 14px", marginBottom: 4 }}>
                        <div className="vstack flex-grow-0 gap-2 my-auto download-list">
                          {/* Watermark toggle */}
                          <div className="d-flex justify-content-end" id="removeWatermarkParent" style={{ marginBottom: -2, marginRight: 2 }}>
                            <div className="d-flex align-items-center form-check form-switch form-check-reverse">
                              <label className="form-label text-secondary d-flex align-items-center" htmlFor="watermarkMode" style={{ padding: 0, margin: 0, marginBottom: -2, cursor: "pointer" }}>
                                <svg viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" style={{ fontSize: 13 }}>
                                  <path d="M448 209.91a210.06 210.06.0 01-122.77-39.25V349.38A162.55 162.55.0 11185 188.31V278.2a74.62 74.62.0 1052.23 71.18V0h88a121.18 121.18.0 001.86 22.17h0A122.18 122.18.0 00381 102.39a121.43 121.43.0 0067 20.14z" />
                                </svg>
                                &nbsp;Remove Watermark:&nbsp;
                              </label>
                              <input
                                type="checkbox"
                                id="watermarkMode"
                                className="form-check-input"
                                checked={removeWatermark}
                                onChange={(e) => setRemoveWatermark(e.target.checked)}
                              />
                            </div>
                          </div>

                          {/* HD / No-watermark download */}
                          {videoInfo.noWatermark && (
                            <div id="downloadNoWatermark" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid #ff3b5c", background: "rgba(255, 255, 255, 4%)", color: "#ff3b5c" }}>
                              <button
                                className="btn download-button"
                                type="button"
                                onClick={() => downloadFile(videoInfo.noWatermark!.url, videoInfo.noWatermark!.filename)}
                              >
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{ fontSize: 22 }}>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z" fill="currentColor" />
                                </svg>
                                &nbsp;Download Video
                                <span className="resolution-badge">
                                  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                                    <path d="M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z" fill="currentColor" />
                                    <path d="M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1z" fill="currentColor" />
                                  </svg>
                                  &nbsp;<span>HD MP4</span>
                                </span>
                              </button>
                              <a className="btn media-url" role="button" href={videoInfo.noWatermark.url} target="_blank" aria-label="Open raw video link in new tab" rel="nofollow noreferrer noopener">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{ fontSize: 20 }}>
                                  <path d="M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z" fill="currentColor" />
                                  <path d="M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                          )}

                          {/* With-watermark download */}
                          {videoInfo.withWatermark && (
                            <div id="downloadWatermark" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid #ff3b5c", background: "rgba(255, 255, 255, 4%)", color: "#ff3b5c" }}>
                              <button
                                className="btn download-button"
                                type="button"
                                onClick={() => downloadFile(videoInfo.withWatermark!.url, videoInfo.withWatermark!.filename)}
                              >
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{ fontSize: 22 }}>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z" fill="currentColor" />
                                </svg>
                                &nbsp;Download Video
                                <span className="resolution-badge">
                                  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                                    <path d="M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z" fill="currentColor" />
                                    <path d="M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1z" fill="currentColor" />
                                  </svg>
                                  &nbsp;<span>MP4</span>
                                </span>
                              </button>
                              <a className="btn media-url" role="button" href={videoInfo.withWatermark.url} target="_blank" aria-label="Open raw video link in new tab" rel="nofollow noreferrer noopener">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{ fontSize: 20 }}>
                                  <path d="M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z" fill="currentColor" />
                                  <path d="M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                          )}

                          {/* Audio download */}
                          {videoInfo.audio && (
                            <div id="downloadAudio" style={{ borderRadius: 4, overflow: "hidden", border: "1px solid #ff3b5c", background: "rgba(255, 255, 255, 4%)", color: "#ff3b5c" }}>
                              <button
                                className="btn download-button"
                                type="button"
                                onClick={() => downloadFile(videoInfo.audio!.url, videoInfo.audio!.filename)}
                              >
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{ fontSize: 22 }}>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17S16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17zM6.29289 9.29289c.39053-.39052 1.02369-.39052 1.41422.0L9 10.5858V3C9 2.44772 9.44771 2 10 2 10.5523 2 11 2.44771 11 3v7.5858l1.2929-1.29291c.390500000000001-.39052 1.0237-.39052 1.4142.0C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071l-3 3C10.5196 13.8946 10.2652 14 10 14 9.73478 14 9.48043 13.8946 9.29289 13.7071l-3-3C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289z" fill="currentColor" />
                                </svg>
                                &nbsp;Download Audio
                                <span className="resolution-badge">
                                  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                                    <path d="M18 3.00001c0-.29959-.1343-.5834-.366-.77334S17.0977 1.96067 16.8039 2.01943l-10.00002 2C6.33646 4.11291 6 4.52333 6 5.00001V14.1138C5.68722 14.0401 5.35064 14 5 14c-1.65685.0-3 .8954-3 2 0 1.1046 1.34315 2 3 2S7.99999 17.1046 8 16V7.81981l8-1.6V12.1138C15.6872 12.0401 15.3506 12 15 12c-1.6569.0-3 .8954-3 2s1.3431 2 3 2 3-.8954 3-2V3.00001z" fill="currentColor" />
                                  </svg>
                                  &nbsp;<span>MP3</span>
                                </span>
                              </button>
                              <a className="btn media-url" role="button" href={videoInfo.audio.url} target="_blank" aria-label="Open raw audio link in new tab" rel="nofollow noreferrer noopener">
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" style={{ fontSize: 20 }}>
                                  <path d="M15.6396 7.02527H12.0181v-2h7V12.0253h-2V8.47528L12.1042 13.3892 10.6899 11.975l4.9497-4.94973z" fill="currentColor" />
                                  <path d="M10.9819 6.97473H4.98193V18.9747H16.9819v-6h-2v4H6.98193V8.97473H10.9819v-2z" fill="currentColor" />
                                </svg>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Download modal */}
      {downloadModal && (
        <div
          className="modal fade show modal-dark"
          role="dialog"
          tabIndex={-1}
          id="downloadModal"
          style={{ display: "flex", backgroundColor: "rgba(0,0,0,0.5)" }}
          data-bs-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center" style={{ color: "#fff" }}>Downloading...</h5>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center align-items-center" id="loading">
                  <div id="progress" style={{ width: `${downloadProgress}%` }} />
                  <span className="d-flex justify-content-center align-items-center" style={{ zIndex: 1, fontSize: "1.25rem", color: "#fff" }}>
                    <span className="spinner-border spinner-border-sm" role="status" style={{ fontSize: 16, marginRight: 5 }} />
                    <span id="progressText" style={{ fontSize: 16 }}>{progressText}</span>
                  </span>
                </div>
                <p className="text-center" style={{ margin: 0, marginTop: 5, fontSize: 15, marginBottom: 3, color: "rgba(121, 126, 146, 0.5)" }}>
                  Do not close this tab or your download will cancel
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message modal placeholder */}
      <div className="modal fade modal-dark" role="dialog" tabIndex={-1} id="messageModal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Title</h4>
              <button className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              <div className="modal-html"><span>Placeholder</span></div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary modal-close-left" type="button" data-bs-dismiss2="modal">Go Back</button>
              <button className="btn btn-primary modal-close" type="button" data-bs-dismiss2="modal">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
