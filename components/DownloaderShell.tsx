export default function DownloaderShell() {
  return (
    <div className="home-downloader-hero d-flex justify-content-center align-items-start" style={{ marginBottom: 10 }}>
      <div className="row gy-4 row-cols-1" style={{ width: "100%", marginTop: 0 }}>
        <div className="col d-flex justify-content-center">
          <div className="row gx-0 gy-3 row-cols-1 flex-grow-1 justify-content-center align-items-center" style={{ maxWidth: 512 }}>
            <div className="col">
              <div className="d-flex justify-content-center align-items-center">
                <div className="flex-grow-1 form-clean">
                  <div className="flex-grow-1 form-floatingx">
                    <button
                      className="btn btn-dark btn-sm align-items-center"
                      type="button"
                      aria-label="Paste TikTok link"
                      style={{ position: "absolute", right: 10, top: "50%", transform: "translate(0%, -50%)", marginTop: 5, background: "#191919", border: "none" }}
                    >
                      <svg viewBox="-64 0 512 512" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M280 64h40c35.3.0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3.0 192 0s71 27.5 78.4 64h9.6zM64 112c-8.8.0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256c8.8.0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-16v24c0 13.3-10.7 24-24 24h-88-88c-13.3.0-24-10.7-24-24v-24H64zm128-8a24 24 0 100-48 24 24.0 0 0 0 48z" />
                      </svg>
                      &nbsp;Paste
                    </button>
                    <input
                      className="form-control-lg form-control"
                      id="tiktokUrl-shell"
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
                      aria-label="TikTok Link"
                    />
                    <label className="form-label d-flex align-items-center" htmlFor="tiktokUrl-shell" style={{ fontSize: 16 }}>
                      <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5858 4.58579C13.3668 3.80474 14.6331 3.80474 15.4142 4.58579 16.1952 5.36683 16.1952 6.63316 15.4142 7.41421l-3 2.99999c-.781099999999999.7811-2.0474.7811-2.82843.0C9.19524 10.0237 8.56208 10.0237 8.17156 10.4142 7.78103 10.8047 7.78103 11.4379 8.17156 11.8284c1.56209 1.5621 4.09474 1.5621 5.65684.0l3-2.99997c1.5621-1.5621 1.5621-4.09476.0-5.65686-1.5621-1.56209-4.0947-1.56209-5.6568.0l-1.50004 1.5c-.39053.39053-.39053 1.02369.0 1.41422.39054.39052 1.02364.39052 1.41424.0l1.5-1.5zm-5.00001 5C8.36683 8.80474 9.63316 8.80474 10.4142 9.58579c.390500000000001.39052 1.0237.39052 1.4142.0C12.219 9.19526 12.219 8.5621 11.8284 8.17157c-1.5621-1.56209-4.09473-1.56209-5.65683.0l-3 3.00003c-1.56209 1.5621-1.56209 4.0947.0 5.6568 1.5621 1.5621 4.09476 1.5621 5.65686.0l1.49997-1.5C10.719 14.9379 10.719 14.3047 10.3284 13.9142 9.9379 13.5237 9.30474 13.5237 8.91421 13.9142l-1.5 1.5c-.78105.7811-2.04737.7811-2.82842.0C3.80474 14.6332 3.80474 13.3668 4.58579 12.5858l3-3.00001z" fill="currentColor" />
                      </svg>
                      &nbsp;TikTok Link
                    </label>
                  </div>
                  <div className="row" style={{ marginTop: 8 }}>
                    <div className="col">
                      <button className="btn btn-primary btn-lg d-flex justify-content-center align-items-center button-dark-clean" id="loadVideos-shell" type="button">
                        <span className="d-flex align-items-center label">
                          <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" style={{ fontSize: 24 }} aria-hidden="true">
                            <path d="M2 6c0-1.10457.89543-2 2-2h6c1.1046.0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2H4c-1.10457.0-2-.8954-2-2V6z" fill="currentColor" />
                            <path d="M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8v4c0 .3788.214.725.5528.894399999999999l2 1C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507 17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935 17.2309 5.96714 16.8628 5.95058 16.5528 6.10557l-2 1z" fill="currentColor" />
                          </svg>
                          &nbsp;Load Video
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
