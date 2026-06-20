import {
  B as e,
  S as t,
  a as n,
  E as o,
  b as i,
  F as a,
  r,
  i as s,
  c as d,
  e as l,
  d as c,
} from "./vendor.js";
const u = ".".concat("bs.modal"),
  m = "hide".concat(u),
  h = "hidePrevented".concat(u),
  g = "hidden".concat(u),
  p = "show".concat(u),
  f = "shown".concat(u),
  y = "resize".concat(u),
  v = "click.dismiss".concat(u),
  w = "mousedown.dismiss".concat(u),
  k = "keydown.dismiss".concat(u),
  _ = "click".concat(u).concat(".data-api"),
  b = "modal-open",
  E = "show",
  T = "modal-static",
  S = { backdrop: !0, focus: !0, keyboard: !0 },
  L = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class P extends e {
  constructor(e, s) {
    super(e, s),
      (this._dialog = t.findOne(".modal-dialog", this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new n()),
      this._addEventListeners();
  }
  static get Default() {
    return S;
  }
  static get DefaultType() {
    return L;
  }
  static get NAME() {
    return "modal";
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (this._isShown || this._isTransitioning) return;
    o.trigger(this._element, p, { relatedTarget: e }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(b),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(e)));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) return;
    o.trigger(this._element, m).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(E),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    o.off(window, u),
      o.off(this._dialog, u),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new i({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new a({ trapElement: this._element });
  }
  _showElement(e) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = t.findOne(".modal-body", this._dialog);
    n && (n.scrollTop = 0),
      r(this._element),
      this._element.classList.add(E),
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            o.trigger(this._element, f, { relatedTarget: e });
        },
        this._dialog,
        this._isAnimated()
      );
  }
  _addEventListeners() {
    o.on(this._element, k, (e) => {
      "Escape" === e.key &&
        (this._config.keyboard
          ? this.hide()
          : this._triggerBackdropTransition());
    }),
      o.on(window, y, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      o.on(this._element, w, (e) => {
        o.one(this._element, v, (t) => {
          this._element === e.target &&
            this._element === t.target &&
            ("static" !== this._config.backdrop
              ? this._config.backdrop && this.hide()
              : this._triggerBackdropTransition());
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(b),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          o.trigger(this._element, g);
      });
  }
  _isAnimated() {
    return this._element.classList.contains("fade");
  }
  _triggerBackdropTransition() {
    if (o.trigger(this._element, h).defaultPrevented) return;
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      e = this._element.style.overflowY;
    "hidden" === e ||
      this._element.classList.contains(T) ||
      (t || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(T),
      this._queueCallback(() => {
        this._element.classList.remove(T),
          this._queueCallback(() => {
            this._element.style.overflowY = e;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      e = this._scrollBar.getWidth(),
      n = e > 0;
    if (n && !t) {
      const t = s() ? "paddingLeft" : "paddingRight";
      this._element.style[t] = "".concat(e, "px");
    }
    if (!n && t) {
      const t = s() ? "paddingRight" : "paddingLeft";
      this._element.style[t] = "".concat(e, "px");
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(e, t) {
    return this.each(function () {
      const n = P.getOrCreateInstance(this, e);
      if ("string" == typeof e) {
        if ((0)[0] === n[e])
          throw new TypeError('No method named "'.concat(e, '"'));
        n[e](t);
      }
    });
  }
}
function A(e, t = 0) {
  return (
    (e = (function (e, t = 0) {
      return Math.round(e * 10 ** t) / 10 ** t;
    })(e, t).toString()),
    0 == t
      ? e.toString().split(".")[0]
      : 1 == e.toString().split(".").length
      ? e + "." + "0".repeat(t)
      : e.toString().split(".")[1].length == t
      ? e
      : e + "0".repeat(t - e.toString().split(".")[1].length)
  );
}
function M(e) {
  return new Promise((t) => setTimeout(t, e));
}
function x(e = {}) {
  e = {
    title: e.title || "",
    message: e.message || "",
    size: e.size,
    button: e.button || e.button_right || "Continue",
    button_extra: e.button_extra || e.button_left,
    locked: e.locked || !1,
    close_button: null == e.close_button || e.close_button,
  };
  const t = document.getElementById("messageModal"),
    n = new P(t, { backdrop: !e.locked || "static", keyboard: !e.locked }),
    a = t.querySelector(".btn-close"),
    s = t.querySelector(".modal-close"),
    o = t.querySelector(".modal-close-left"),
    i = t.querySelector(".modal-dialog"),
    r = t.querySelector(".modal-title"),
    c = t.querySelector(".modal-html");
  return (
    (a.style.display = e.close_button ? "" : "none"),
    (s.style.display = "hidden" === e.button ? "none" : ""),
    (o.style.display = e.button_extra ? "" : "none"),
    i.classList.remove("modal-lg", "modal-sm", "modal-xl"),
    e.size && i.classList.add("modal-" + e.size),
    (r.textContent = e.title),
    (c.innerHTML = e.message),
    (s.textContent = e.button),
    e.button_extra && (o.textContent = e.button_extra),
    n.show(),
    new Promise(function (e) {
      s.addEventListener("click", function () {
        n.hide(), e("right");
      }),
        o.addEventListener("click", function () {
          n.hide(), e("left");
        }),
        t.addEventListener("hidden.bs.modal", function () {
          e("left");
        });
    })
  );
}
o.on(document, _, '[data-bs-toggle="modal"]', function (e) {
  const n = t.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    o.one(n, p, (e) => {
      e.defaultPrevented ||
        o.one(n, g, () => {
          d(this) && this.focus();
        });
    });
  const s = t.findOne(".modal.show");
  s && P.getInstance(s).hide(), P.getOrCreateInstance(n).toggle(this);
}),
  l(P),
  c(P);
const B = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return B.Android() || B.BlackBerry() || B.iOS() || B.Opera() || B.Windows();
  },
};
function I(e, t) {
  return "show" == t
    ? new Promise((t) => {
        const n = () => {
          e._element.removeEventListener("shown.bs.modal", n), t();
        };
        e._element.addEventListener("shown.bs.modal", n, { once: !0 }),
          e.show();
      })
    : "hide" == t
    ? new Promise((t) => {
        const n = () => {
          e._element.removeEventListener("hidden.bs.modal", n), t();
        };
        e._element.addEventListener("hidden.bs.modal", n, { once: !0 }),
          e.hide();
      })
    : (0)[0];
}
function C({ name: e, data: t }) {
  try {
    gtag("event", e, t);
  } catch (e) {}
  try {
    zaraz.track(e, t);
  } catch (e) {}
}
function W(e, t) {
  try {
    if (!t) return;
    window.clarity("set", e, t);
  } catch (e) {}
}
async function q(e, t = 32) {
  const n = new TextEncoder().encode(e),
    s = await crypto.subtle.digest("SHA-256", n);
  return Array.from(new Uint8Array(s))
    .map((e) => e.toString(16).padStart(2, "0"))
    .join("")
    .substring(0, t);
}
function D(e) {
  e && (e.style.display = "none");
}
function U(e) {
  e && (e.style.display = "");
}
function R(e, t) {
  e && e.classList.add(t);
}
function z(e, t) {
  e && e.classList.remove(t);
}
const O = "___haptic-switch___";
let j = null,
  N = null,
  F = !1;
function H() {
  (N && j) ||
    ((F = (function () {
      if ("undefined" == typeof navigator || "undefined" == typeof window)
        return !1;
      const e = /iPad|iPhone|iPod/.test(navigator.userAgent),
        t = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
      return e || t;
    })()),
    (j = document.querySelector("#".concat(O))),
    (N = document.querySelector('label[for="'.concat(O, '"]'))),
    (j && N) ||
      ((j = document.createElement("input")),
      (j.type = "checkbox"),
      (j.id = O),
      j.setAttribute("switch", ""),
      (j.style.display = "none"),
      document.body.appendChild(j),
      (N = document.createElement("label")),
      (N.htmlFor = O),
      (N.style.display = "none"),
      document.body.appendChild(N)));
}
function V(e = 10) {
  "undefined" != typeof window &&
    (F
      ? ((j && N) || H(), N == null || N.click())
      : (navigator == null ? (0)[0] : navigator.vibrate)
      ? navigator.vibrate(e)
      : N == null || N.click());
}
"undefined" != typeof window &&
  ("loading" === document.readyState
    ? document.addEventListener("DOMContentLoaded", H, { once: !0 })
    : H());
const K = window.location.pathname || "",
  Y = document.getElementById("tiktokUrl"),
  $ = document.getElementById("loadVideos"),
  G = document.getElementById("pasteButton");
function Q(e) {
  let t = (e = e
    .replace("https://", "")
    .replace("http://", "")
    .trim()
    .split("?")[0]
    .split("&")[0]);
  return (
    t.includes("/video/") ? (t = t.split("/video/")[1]) : t.includes("/photo/") && (t = t.split("/photo/")[1]),
    (t = t.split("/")[0]),
    /^\d+$/.test(t) ||
      ((t = e),
      e.endsWith("/") && (t = t.slice(0, -1)),
      (t = t
        .split("/")
        .filter(
          (e) =>
            e && e.match(/^[a-zA-Z0-9-]+$/) && e.length > 4 && e.length < 20
        )[0]),
      t ||
        (t =
          (e.match(/\d+/g) || []).sort((e, t) => t.length - e.length)[0] ||
          !1)),
    t
  );
}
let Z, J;
const X = document.getElementById("estimatedTime");
let ee, te, ne, oe;
function ie(e) {
  if (
    (ee || (ee = document.querySelector("#mediaList .media-loaded")),
    te || (te = document.querySelector("#mediaList .media-unloaded")),
    "loading" == e)
  ) {
    R(X, "d-none"), (Z = Math.floor(5 * Math.random()) + 5);
    const e = Z;
    (J = setInterval(function () {
      if (Z <= 0)
        return (
          (X.textContent = "Scanning TikTok Media..."), void clearInterval(J)
        );
      e - Z >= 2 && z(X, "d-none"),
        Z--,
        (X.textContent = "Est. Time: ".concat(Z, "sec"));
    }, 950)),
      (t = document.querySelector("#loadVideos .spinner-border")) && t.remove(),
      z(document.getElementById("tiktokLoader"), "d-none"),
      R($, "disabled"),
      Y.setAttribute("disabled", ""),
      R(G, "d-none"),
      D(ee),
      D(te);
  }
  var t;
  "loaded" == e &&
    (J && clearInterval(J),
    R(document.getElementById("tiktokLoader"), "d-none"),
    Y.removeAttribute("disabled"),
    z(G, "d-none"),
    setTimeout(function () {
      !(async function (e, t = 500) {
        !(function (e) {
          (e.style.display = "none"),
            e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property");
        })(e),
          e.style.removeProperty("display");
        let n = window.getComputedStyle(e).display;
        "none" === n && (n = "block"), (e.style.display = n);
        let s = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = 0),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.boxSizing = "border-box"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = s + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          (e._currentAnimation = "slide_down"),
          await M(t),
          "slide_down" === e._currentAnimation &&
            (function (e) {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property");
            })(e);
      })(ee, 650),
        D(te);
    }, 50),
    setTimeout(function () {
      z($, "disabled");
    }, 100)),
    "reset" == e &&
      (J && clearInterval(J),
      z($, "disabled"),
      Y.removeAttribute("disabled"),
      z(G, "d-none"),
      D(ee),
      U(te),
      R(document.getElementById("tiktokLoader"), "d-none"),
      document.getElementById("watermarkMode").removeAttribute("disabled"),
      z(document.getElementById("removeWatermarkParent"), "d-none"));
}
async function ae(e, t = 0.1) {
  return new Promise((n, s) => {
    const o = document.createElement("video");
    let r = !1;
    const c = (e, t) => {
        r || ((r = !0), o.pause(), o.removeAttribute("src"), o.load(), e(t));
      },
      i = (e) => {
        c(
          s,
          e instanceof Error ? e : new Error("Failed to extract video frame")
        );
      },
      a = () => {
        if (!o.videoWidth || !o.videoHeight)
          return void i(new Error("Invalid video frame"));
        const e = document.createElement("canvas");
        (e.width = o.videoWidth), (e.height = o.videoHeight);
        const t = e.getContext("2d");
        if (t)
          try {
            t.drawImage(o, 0, 0, e.width, e.height),
              c(n, e.toDataURL("image/jpeg", 0.85));
          } catch (e) {
            i(e);
          }
        else i(new Error("Failed to create canvas context"));
      };
    (o.crossOrigin = "anonymous"),
      (o.preload = "auto"),
      (o.muted = !0),
      (o.playsInline = !0),
      o.addEventListener(
        "error",
        () => {
          i(new Error("Failed to load video"));
        },
        { once: !0 }
      ),
      o.addEventListener(
        "loadedmetadata",
        () => {
          const e = Number.isFinite(o.duration)
            ? Math.max(0, Math.min(t, Math.max(o.duration - 0.1, 0)))
            : 0;
          0 !== e
            ? (o.currentTime = e)
            : o.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
            ? a()
            : o.addEventListener("loadeddata", a, { once: !0 });
        },
        { once: !0 }
      ),
      o.addEventListener("seeked", a, { once: !0 }),
      (o.src = e),
      o.load();
  });
}
document
  .getElementById("watermarkMode")
  .addEventListener("change", function () {
    try {
      V();
    } catch (e) {}
    ne || (ne = document.getElementById("downloadWatermark")),
      oe || (oe = document.getElementById("downloadNoWatermark")),
      this.checked ? (D(ne), U(oe)) : (U(ne), D(oe));
  });
let re = 0;
async function se(e) {
  var c, d, u, h, f;
  const l = document.querySelector("#userInfo a"),
    v = l.getElementsByTagName("span")[0],
    t = document.querySelector("#userInfo img"),
    p = document.querySelector("#videoPreview img"),
    g = document.querySelector("#videoPreview a"),
    a = document.getElementById("downloadNoWatermark"),
    i = document.getElementById("downloadWatermark"),
    s = document.getElementById("downloadAudio"),
    n = document.getElementById("watermarkMode"),
    r = document.getElementById("removeWatermarkParent");
  (v.textContent = e.user.username),
    (l.href = "https://example.com/@".concat(e.user.username)),
    (t.onload = () => {
      U(t);
    }),
    (t.onerror = () => {
      D(t);
    }),
    U(t),
    (t.src = e.user.image_small || e.user.image);
  const m =
    (null == (d = e.video_no_watermark) ? (0)[0] : d.url) ||
    (null == (f = e.video_watermark) ? (0)[0] : f.url) ||
    "";
  !(function (e, t, n) {
    const o = ++re,
      s = async () => {
        if (!n) return;
        const t = await ae(n).catch(() => "");
        t && o === re && ((e.onerror = null), (e.src = t));
      };
    if (((e.onerror = null), !t)) return e.removeAttribute("src"), void s();
    (e.onerror = () => {
      (e.onerror = null), s();
    }),
      (e.src = t);
  })(
    p,
    "/" == K || "/app/" == K
      ? e.thumbnail_animated || e.thumbnail
      : e.thumbnail || e.thumbnail_animated,
    m
  ),
    (g.href = m),
    (n.disabled = !1),
    z(r, "d-none");
  let o = 0;
  if (null == (h = e.video_no_watermark) ? (0)[0] : h.url) {
    const n = await q("".concat(e.id, "-nwm"), 5).catch(() => "NoWatermark");
    o++;
    const s = e.video_no_watermark.hd || !1;
    U(a);
    const i = a.querySelector("a"),
      t = a.querySelector(".download-button"),
      r = a.querySelector(".resolution-badge span");
    i.href = e.video_no_watermark.url;
    const c = s ? "HD MP4" : "MP4";
    (r.textContent = c),
      (t.dataset.mediaUrl = e.video_no_watermark.url),
      (t.dataset.filename = ""
        .concat(e.user.username, "_TikTokDownloader.com_")
        .concat(n, ".mp4")),
      (t.dataset.filetype = "video/mp4");
  } else (n.checked = !1), (n.disabled = !0), R(r, "d-none");
  if (null == (u = e.video_watermark) ? (0)[0] : u.url) {
    const n = await q("".concat(e.id, "-wm"), 5).catch(() => "Watermark");
    o++;
    const s = e.video_watermark.hd || !1;
    U(i);
    const a = i.getElementsByTagName("a")[0],
      t = i.getElementsByClassName("download-button")[0],
      r = i.querySelector(".resolution-badge span");
    a.href = e.video_watermark.url;
    const c = s ? "HD MP4" : "MP4";
    (r.textContent = c),
      (t.dataset.mediaUrl = e.video_watermark.url),
      (t.dataset.filename = ""
        .concat(e.user.username, "_TikTokDownloader.com_")
        .concat(n, ".mp4")),
      (t.dataset.filetype = "video/mp4");
  } else (n.checked = !0), (n.disabled = !0), R(r, "d-none");
  if (null == (c = e.audio) ? (0)[0] : c.url) {
    const n = await q("".concat(e.id, "-audio"), 5).catch(() => "Audio");
    o++, U(s);
    const i = s.querySelector("a"),
      t = s.querySelector(".download-button"),
      a = s.querySelector(".resolution-badge span");
    (i.href = e.audio.url),
      (a.textContent = "MP3"),
      (t.dataset.mediaUrl = e.audio.url),
      (t.dataset.filename = ""
        .concat(e.user.username, "_TikTokDownloader.com_")
        .concat(n, ".mp3")),
      (t.dataset.filetype = "audio/mpeg");
  } else D(s);
  return n.dispatchEvent(new Event("change")), o;
}
async function de(e) {
  if (((e = e || Q(Y.value)), W("tiktok_link", Y.value), !e)) {
    const e = Y.value;
    return (
      e.length > 1 &&
        (C({
          name: "LoadTikTokError",
          data: {
            load_tiktok_error: "Missing or Invalid TikTok URL",
            tiktok_id: e,
            tiktok_link: Y.value,
          },
        }),
        W("load_tiktok_error", "Missing or Invalid TikTok URL")),
      x({
        title: "Missing or Invalid TikTok URL",
        message: "Please enter a valid TikTok link and try again.",
        button: "OK",
      })
    );
  }
  let t;
  W("tiktok_id", e), ie("loading");
  try {
    const _apiBase = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "https://api-tp.threadsdownloader.com/tiktok/mediav2" : "/api/tiktok";
    const n = await fetch(_apiBase + "?id=" + e);
    if (((t = await n.json()), !n.ok)) throw { response: { data: t } };
  } catch (n) {
    const t = (
      n.response
        ? n.response.data.message
        : "Please make sure you are connected to the internet and try again."
    )
      .replace("Sorry, that page does not exist.", "Invalid TikTok")
      .replace(
        "Sorry, you are not authorized to see this status.",
        "TikTok is private"
      )
      .replace("No status found with that ID.", "Invalid TikTok")
      .replace(
        "Not Found",
        "Invalid, Deleted, or Private TikTok. Please ensure you are using a valid, public TikTok."
      )
      .replace("invalid id parameter", "Invalid TikTok URL")
      .replace(
        "Tiktok not found",
        "Invalid, Deleted, or Private TikTok. Please ensure you are using a valid, public TikTok link."
      );
    return (
      x({ title: "Error Loading TikTok", message: t, button: "OK" }),
      C({
        name: "LoadTikTokError",
        data: { load_tiktok_error: t, tiktok_id: e, tiktok_link: Y.value },
      }),
      W("load_tiktok_error", t),
      ie("reset")
    );
  }
  if (0 == (await se(t)))
    return (
      x({
        title: "Error Loading TikTok",
        message:
          "No video data detected in this TikTok. Please try another URL.",
        button: "OK",
      }),
      C({
        name: "LoadTikTokError",
        data: {
          load_tiktok_error:
            "No video data detected in this TikTok. Please try another URL.",
          tiktok_id: t.id,
          tiktok_link: Y.value,
        },
      }),
      W(
        "load_tiktok_error",
        "No video data detected in this TikTok. Please try another URL."
      ),
      ie("reset")
    );
  ie("loaded"),
    C({ name: "TikTokID", data: { tiktok_id: t.id, tiktok_link: Y.value } });
}
Y.addEventListener("keydown", (e) => {
  "Enter" == e.key && de();
}),
  $.addEventListener("click", () => {
    try {
      V();
    } catch (e) {}
    de();
  }),
  Y.addEventListener("focus", function () {
    this.select();
  });
try {
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    Y.addEventListener("click", async function () {
      try {
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) return;
        if ((await M(50), "" != this.value)) return;
        const s = await navigator.clipboard.read();
        let e,
          t,
          n = {
            "text/plain": (0)[0],
            "text/uri-list": (0)[0],
            "text/html": (0)[0],
          };
        for (const o of s)
          for (const s of o.types)
            try {
              (t = await (await o.getType(s)).text()),
                (e = Q(t)),
                e && (n[s] = t);
            } catch (e) {}
        if (((e = n["text/plain"] || n["text/uri-list"] || n["text/html"]), !e))
          return;
        this.value = t;
      } catch (e) {}
    });
} catch (e) {}
G.addEventListener("click", async function () {
  try {
    const o = await navigator.clipboard.read();
    let s,
      e,
      t,
      n = {
        "text/plain": (0)[0],
        "text/uri-list": (0)[0],
        "text/html": (0)[0],
      };
    for (const s of o)
      for (const o of s.types)
        try {
          (e = await (await s.getType(o)).text()),
            e && (t || (t = e), e.includes("tiktok.") && (n[o] = e));
        } catch (e) {}
    if (((s = n["text/plain"] || n["text/uri-list"] || n["text/html"]), !s)) {
      if (!t)
        return x({
          title: "No TikTok URL Found",
          message:
            "No valid TikTok URL found in clipboard. Please copy/paste a TikTok link and try again.",
          button: "OK",
        });
      e = t;
    }
    Y.value = s || e;
  } catch (e) {}
}),
  (function () {
    try {
      if (K.includes("/video/") || K.includes("/photo/") || K.includes("/t/")) {
        const e = "https://example.com".concat(K),
          t = Q(e);
        if (!t) return;
        (Y.value = e), de(t);
      }
    } catch (e) {}
  })(),
  window.loadVideosClicked && de(),
  (window.loadVideosClicked = !0);
try {
  navigator.serviceWorker.getRegistrations().then(function (e) {
    for (let t of e)
      !t.active.scriptURL.includes("mitm") &&
        t.active.scriptURL.endsWith("/sw.js") &&
        t.unregister();
  });
} catch (e) {}
const le = {};
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ue,
  me = { exports: {} };
const he = ce(
  (ue ||
    ((ue = 1),
    (function () {
      me.exports = (() => {
        const t = "object" == typeof window ? window : this;
        t.HTMLElement;
        let e = null,
          o = !1;
        const c = t.WebStreamsPolyfill || {},
          i = t.isSecureContext;
        let n =
          /constructor/i.test(t.HTMLElement) || !!t.safari || !!t.WebKitPoint;
        const a =
            i || "MozAppearance" in document.documentElement.style
              ? "iframe"
              : "navigate",
          s = {
            createWriteStream: function (c, l, d) {
              let h = {
                size: null,
                pathname: null,
                writableStrategy: (0)[0],
                readableStrategy: (0)[0],
                onBlob: (0)[0],
              };
              const v = l && l.size ? l.size / 1e6 : 0;
              v > 300 &&
                v < 3e3 &&
                navigator &&
                (navigator.userAgent.includes("Gecko/") ||
                  navigator.userAgent.includes("Firefox/")) &&
                (n = !0);
              let g = 0,
                m = null,
                u = null,
                f = null;
              if (
                (Number.isFinite(l)
                  ? (([d, l] = [l, d]), (h.size = d), (h.writableStrategy = l))
                  : l && l.highWaterMark
                  ? ((h.size = d), (h.writableStrategy = l))
                  : (h = l || {}),
                !n)
              ) {
                e ||
                  (e = i
                    ? r(s.mitm)
                    : (function (e) {
                        const i = "width=200,height=100",
                          s = document.createDocumentFragment(),
                          n = {
                            frame: t.open(e, "popup", i),
                            loaded: !1,
                            isIframe: !1,
                            isPopup: !0,
                            remove() {
                              n.frame.close();
                            },
                            addEventListener(...e) {
                              s.addEventListener(...e);
                            },
                            dispatchEvent(...e) {
                              s.dispatchEvent(...e);
                            },
                            removeEventListener(...e) {
                              s.removeEventListener(...e);
                            },
                            postMessage(...e) {
                              n.frame.postMessage(...e);
                            },
                          },
                          o = (e) => {
                            e.source === n.frame &&
                              ((n.loaded = !0),
                              t.removeEventListener("message", o),
                              n.dispatchEvent(new Event("load")));
                          };
                        return t.addEventListener("message", o), n;
                      })(s.mitm)),
                  (u = new MessageChannel()),
                  (c = encodeURIComponent(c.replace(/\//g, ":"))
                    .replace(/['()]/g, escape)
                    .replace(/\*/g, "%2A"));
                const n = {
                  transferringReadable: o,
                  pathname:
                    h.pathname || Math.random().toString().slice(-6) + "/" + c,
                  headers: {
                    "Content-Type": "application/octet-stream; charset=utf-8",
                    "Content-Disposition": "attachment; filename*=UTF-8''" + c,
                  },
                };
                h.size && (n.headers["Content-Length"] = h.size);
                const l = [n, "*", [u.port2]];
                if (o) {
                  const t =
                    "iframe" === a
                      ? (0)[0]
                      : {
                          transform(e, t) {
                            if (!(e instanceof Uint8Array))
                              throw new TypeError("Can only write Uint8Arrays");
                            (g += e.length),
                              t.enqueue(e),
                              m && ((location.href = m), (m = null));
                          },
                          flush() {
                            m && (location.href = m);
                          },
                        };
                  f = new s.TransformStream(
                    t,
                    h.writableStrategy,
                    h.readableStrategy
                  );
                  const e = f.readable;
                  u.port1.postMessage({ readableStream: e }, [e]);
                }
                (u.port1.onmessage = (t) => {
                  t.data.download
                    ? "navigate" === a
                      ? (e.remove(),
                        (e = null),
                        g
                          ? (location.href = t.data.download)
                          : (m = t.data.download))
                      : (e.isPopup &&
                          (e.remove(), (e = null), "iframe" === a && r(s.mitm)),
                        r(t.data.download))
                    : t.data.abort &&
                      ((p = []),
                      u.port1.postMessage("abort"),
                      (u.port1.onmessage = null),
                      u.port1.close(),
                      u.port2.close(),
                      (u = null));
                }),
                  e.loaded
                    ? e.postMessage(...l)
                    : e.addEventListener(
                        "load",
                        () => {
                          e.postMessage(...l);
                        },
                        { once: !0 }
                      );
              }
              let p = [];
              return (
                (!n && f && f.writable) ||
                new s.WritableStream(
                  {
                    write(e) {
                      if (!(e instanceof Uint8Array))
                        throw new TypeError("Can only write Uint8Arrays");
                      n
                        ? p.push(e)
                        : (u.port1.postMessage(e),
                          (g += e.length),
                          m && ((location.href = m), (m = null)));
                    },
                    close() {
                      if (n) {
                        let e = function () {
                          const e = document.createElement("a");
                          (e.href = URL.createObjectURL(t)),
                            (e.download = c),
                            e.click();
                        };
                        const t = (function (e, t = 10) {
                          const s = 1024 * t * 1024,
                            n = [];
                          for (let o = 0; o < e.length; o++) {
                            const i = e[o],
                              a = i.length;
                            let t = 0;
                            for (; t < a; ) {
                              const e = Math.min(s, a - t),
                                o = i.subarray(t, t + e);
                              n.push(new Blob([o])), (t += e);
                            }
                          }
                          return new Blob(n, {
                            type: "application/octet-stream; charset=utf-8",
                          });
                        })(p);
                        if ("function" == typeof h.onBlob)
                          return h.onBlob(t, e);
                        e();
                      } else u.port1.postMessage("end");
                    },
                    abort() {
                      (p = []),
                        u.port1.postMessage("abort"),
                        (u.port1.onmessage = null),
                        u.port1.close(),
                        u.port2.close(),
                        (u = null);
                    },
                  },
                  h.writableStrategy
                )
              );
            },
            WritableStream: t.WritableStream || c.WritableStream,
            supported: !0,
            version: { full: "2.0.5", major: 2, minor: 0, dot: 5 },
            mitm: "https://vastblast.github.io/StreamSaver.js/mitm.html",
          };
        function r(e) {
          if (!e) throw new Error("meh");
          const t = document.createElement("iframe");
          return (
            (t.hidden = !0),
            (t.src = e),
            (t.loaded = !1),
            (t.name = "iframe"),
            (t.isIframe = !0),
            (t.postMessage = (...e) => t.contentWindow.postMessage(...e)),
            t.addEventListener(
              "load",
              () => {
                t.loaded = !0;
              },
              { once: !0 }
            ),
            document.body.appendChild(t),
            t
          );
        }
        try {
          new Response(new ReadableStream()),
            i && !("serviceWorker" in navigator) && (n = !0);
        } catch (e) {
          n = !0;
        }
        return (
          ((e) => {
            try {
              e();
            } catch (e) {}
          })(() => {
            const { readable: t } = new TransformStream(),
              e = new MessageChannel();
            e.port1.postMessage(t, [t]),
              e.port1.close(),
              e.port2.close(),
              (o = !0),
              Object.defineProperty(s, "TransformStream", {
                configurable: !1,
                writable: !1,
                value: TransformStream,
              });
          }),
          s
        );
      })();
    })()),
  me.exports)
);
async function ge() {
  if (((he.mitm = "/service_workers/mitm/mitm.html"), !he.WritableStream)) {
    const { WritableStream: e } = await (function (e, t) {
      let n = Promise.resolve();
      if (t && t.length > 0) {
        let o = function (e) {
          return Promise.all(
            e.map((e) =>
              Promise.resolve(e).then(
                (e) => ({ status: "fulfilled", value: e }),
                (e) => ({ status: "rejected", reason: e })
              )
            )
          );
        };
        document.getElementsByTagName("link");
        const e = document.querySelector("meta[property=csp-nonce]"),
          s =
            (e == null ? (0)[0] : e.nonce) ||
            (e == null ? (0)[0] : e.getAttribute("nonce"));
        n = o(
          t.map((e) => {
            if (
              (e = (function (e) {
                return "/" + e;
              })(e)) in le
            )
              return;
            le[e] = !0;
            const n = e.endsWith(".css"),
              o = n ? '[rel="stylesheet"]' : "";
            if (document.querySelector('link[href="'.concat(e, '"]').concat(o)))
              return;
            const t = document.createElement("link");
            return (
              (t.rel = n ? "stylesheet" : "modulepreload"),
              n || (t.as = "script"),
              (t.crossOrigin = ""),
              (t.href = e),
              s && t.setAttribute("nonce", s),
              document.head.appendChild(t),
              n
                ? new Promise((n, s) => {
                    t.addEventListener("load", n),
                      t.addEventListener("error", () =>
                        s(new Error("Unable to preload CSS for ".concat(e)))
                      );
                  })
                : (0)[0]
            );
          })
        );
      }
      function s(e) {
        const t = new Event("vite:preloadError", { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      }
      return n.then((t) => {
        for (const e of t || []) "rejected" === e.status && s(e.reason);
        return e().catch(s);
      });
    })(async () => {
      const { WritableStream: e } = await import("./ce-c-BEzTDoDd.js");
      return { WritableStream: e };
    }, []);
    he.WritableStream = e;
  }
}
function pe(e) {
  return (e.returnValue = !0), !0;
}
let fe, ye;
function ve(e, t) {
  fe || (fe = document.getElementById("progress")),
    ye || (ye = document.getElementById("progressText")),
    (0)[0] !== e && (fe.style.width = e),
    (0)[0] !== t && (ye.textContent = t);
}
let we = new P("#downloadModal");
async function ke(e) {
  "loading" == e &&
    (await I(we, "show"),
    document
      .querySelectorAll(".download-list button")
      .forEach((e) => e.classList.add("disabled")),
    window.addEventListener("beforeunload", pe)),
    "reset" == e &&
      (await M(500),
      document
        .querySelectorAll(".download-list button")
        .forEach((e) => e.classList.remove("disabled")),
      I(we, "hide"),
      ve("0%", ""),
      window.removeEventListener("beforeunload", pe));
}
function _e(e) {
  const t = document.getElementById(e);
  t && t.classList.remove("d-none");
}
document
  .querySelector("#mediaList .media-loaded")
  .addEventListener("click", function (e) {
    const t = e.target.closest(".download-button");
    if (t) {
      try {
        V();
      } catch (e) {}
      const n = t.getAttribute("data-media-url");
      let e = t.getAttribute("data-filename");
      try {
        e = atob(e);
      } catch (e) {}
      !(async function (e) {
        e = {
          url: e.url,
          filename: e.filename || "TikTokDownloader.com.mp4",
          filetype: e.filetype || "video/mp4",
        };
        const { url: n, filename: s, filetype: o } = e;
        { ke("loading"); fetch(n).then(function(r){ var tot=+r.headers.get("Content-Length")||0,rd=r.body.getReader(),ch=[],rcv=0; function p(){return rd.read().then(function(x){ if(x.done){ var b=new Blob(ch,{type:o}),u=URL.createObjectURL(b),_a=document.createElement("a"); _a.href=u; _a.download=s; document.body.appendChild(_a); _a.click(); document.body.removeChild(_a); setTimeout(function(){URL.revokeObjectURL(u);},1e3); ke("reset"); return; } ch.push(x.value); rcv+=x.value.length; if(tot){var pct=Math.round(rcv/tot*100); ve(pct+"%",(rcv/1e6).toFixed(2)+" / "+(tot/1e6).toFixed(2)+" MB");} return p(); });} return p(); }).catch(function(){ ke("reset"); window.open(n,"_blank"); }); return; }
        let t;
        try {
          ke("loading"), await ge();
          const a = await fetch(n),
            e = +a.headers.get("Content-Length"),
            u = he.createWriteStream(s, {
              pathname: n,
              size: e,
              onBlob: async function (e, t) {
                if (!B.iOS()) return t();
                try {
                  const t = {
                    files: [
                      new File([e], s, {
                        type: o,
                        lastModified: new Date().getTime(),
                      }),
                    ],
                  };
                  if (!navigator.canShare || !navigator.canShare(t))
                    throw "cant share";
                  await Promise.race([navigator.share(t), M(3e3)]);
                } catch (e) {
                  t();
                }
              },
            }),
            h = a.body;
          t = u.getWriter();
          const m = h.getReader(),
            r = e / 1e6,
            c = r > 30 ? 0 : r > 10 ? 1 : 2,
            f = A(e / 1e6, c);
          let i = 0,
            l = "",
            d = "";
          const p = ({ value: t }) => {
            if (!t) return;
            i += t.length;
            const n = Math.round((i / e) * 100) + "%";
            n != l && ve(n, (0)[0]), (l = n);
            const o = A(i / 1e6, c),
              s =
                0 == e
                  ? "".concat(o, " MB")
                  : "".concat(o, " / ").concat(f, " MB");
            s != d && ve((0)[0], s), (d = s);
          };
          for (;;) {
            const e = await m.read();
            if ((p(e), e.done)) return await t.close(), ke("reset");
            await t.write(e.value);
          }
        } catch (e) {
          try {
            await t.abort("Download Failed");
          } catch (e) {}
          return (
            await ke("reset"),
            e.message &&
            ("Failed to fetch" == e.message ||
              "Load failed" == e.message ||
              e.message.includes("NetworkError"))
              ? window.open(n, "_blank")
              : alert(
                  "There was an error downloading the file. Please try again later."
                ),
            ke("reset")
          );
        }
        ke("reset");
      })({ url: n, filename: e, filetype: t.getAttribute("data-filetype") });
    }
  }),
  navigator.userAgent.includes("Firefox")
    ? (_e("firefoxExtension"),
      (function (e) {
        const t = document.getElementById(e);
        t && t.classList.add("d-none");
      })("contactUs"))
    : navigator.userAgent.includes("iPhone") ||
      navigator.userAgent.includes("iPad")
    ? _e("iosExtension")
    : navigator.userAgent.includes("Android")
    ? _e("androidExtension")
    : navigator.userAgent.includes("Chrome");
