!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const e = new Map(),
  t = {
    set(t, n, s) {
      e.has(t) || e.set(t, new Map());
      const o = e.get(t);
      (o.has(n) || 0 === o.size) && o.set(n, s);
    },
    get: (t, n) => (e.has(t) && e.get(t).get(n)) || null,
    remove(t, n) {
      if (!e.has(t)) return;
      const s = e.get(t);
      s.delete(n), 0 === s.size && e.delete(t);
    },
  },
  n = "transitionend",
  o = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (e, t) => "#".concat(CSS.escape(t)))),
    e
  ),
  r = (e) =>
    e == null
      ? "".concat(e)
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  i = (e) =>
    !!e &&
    "object" == typeof e &&
    ((0)[0] !== e.jquery && (e = e[0]), (0)[0] !== e.nodeType),
  s = (e) =>
    i(e)
      ? e.jquery
        ? e[0]
        : e
      : "string" == typeof e && e.length > 0
      ? document.querySelector(o(e))
      : null,
  a = (e) => {
    if (!i(e) || 0 === e.getClientRects().length) return !1;
    const n = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
      t = e.closest("details:not([open])");
    if (!t) return n;
    if (t !== e) {
      const n = e.closest("summary");
      if (n && n.parentNode !== t) return !1;
      if (null === n) return !1;
    }
    return n;
  },
  c = (e) =>
    !e ||
    e.nodeType !== Node.ELEMENT_NODE ||
    !!e.classList.contains("disabled") ||
    ((0)[0] !== e.disabled
      ? e.disabled
      : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
  l = () => {},
  f = (e) => {
    e.offsetHeight;
  },
  u = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  d = [],
  p = () => "rtl" === document.documentElement.dir,
  h = (e) => {
    var t = () => {
      const t = u();
      if (t) {
        const n = e.NAME,
          s = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = s), e.jQueryInterface));
      }
    };
    "loading" === document.readyState
      ? (d.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const e of d) e();
          }),
        d.push(t))
      : t();
  },
  m = (e, t = [], n = e) => ("function" == typeof e ? e.call(...t) : n),
  g = (e, t, s = !0) => {
    if (!s) return void m(e);
    const a =
      ((e) => {
        if (!e) return 0;
        let { transitionDuration: t, transitionDelay: n } =
          window.getComputedStyle(e);
        const s = Number.parseFloat(t),
          o = Number.parseFloat(n);
        return s || o
          ? ((t = t.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
          : 0;
      })(t) + 5;
    let o = !1;
    const i = ({ target: s }) => {
      s === t && ((o = !0), t.removeEventListener(n, i), m(e));
    };
    t.addEventListener(n, i),
      setTimeout(() => {
        o || t.dispatchEvent(new Event(n));
      }, a);
  },
  b = /[^.]*(?=\..*)\.|.*/,
  v = /\..*/,
  y = /::\d+$/,
  _ = {};
let w = 1;
const E = { mouseenter: "mouseover", mouseleave: "mouseout" },
  O = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function x(e, t) {
  return (t && "".concat(t, "::").concat(w++)) || e.uidEvent || w++;
}
function A(e) {
  const t = x(e);
  return (e.uidEvent = t), (_[t] = _[t] || {}), _[t];
}
function k(e, t, n = null) {
  return Object.values(e).find(
    (e) => e.callable === t && e.delegationSelector === n
  );
}
function C(e, t, n) {
  const o = "string" == typeof t,
    i = o ? n : t || n;
  let s = N(e);
  return O.has(s) || (s = e), [o, i, s];
}
function D(e, t, n, s, o) {
  if ("string" != typeof t || !e) return;
  let [r, i, c] = C(t, n, s);
  t in E &&
    (i = ((e) =>
      function (t) {
        if (
          !t.relatedTarget ||
          (t.relatedTarget !== t.delegateTarget &&
            !t.delegateTarget.contains(t.relatedTarget))
        )
          return e.call(this, t);
      })(i));
  const d = A(e),
    u = d[c] || (d[c] = {}),
    l = k(u, i, r ? n : null);
  if (l) return void (l.oneOff = l.oneOff && o);
  const h = x(i, t.replace(b, "")),
    a = r
      ? (function (e, t, n) {
          return function s(o) {
            const i = e.querySelectorAll(t);
            for (let { target: a } = o; a && a !== this; a = a.parentNode)
              for (const r of i)
                if (r === a)
                  return (
                    L(o, { delegateTarget: a }),
                    s.oneOff && T.off(e, o.type, t, n),
                    n.apply(a, [o])
                  );
          };
        })(e, n, i)
      : (function (e, t) {
          return function n(s) {
            return (
              L(s, { delegateTarget: e }),
              n.oneOff && T.off(e, s.type, t),
              t.apply(e, [s])
            );
          };
        })(e, i);
  (a.delegationSelector = r ? n : null),
    (a.callable = i),
    (a.oneOff = o),
    (a.uidEvent = h),
    (u[h] = a),
    e.addEventListener(c, a, r);
}
function j(e, t, n, s, o) {
  const i = k(t[n], s, o);
  i && (e.removeEventListener(n, i, Boolean(o)), delete t[n][i.uidEvent]);
}
function S(e, t, n, s) {
  const o = t[n] || {};
  for (const [a, i] of Object.entries(o))
    a.includes(s) && j(e, t, n, i.callable, i.delegationSelector);
}
function N(e) {
  return (e = e.replace(v, "")), E[e] || e;
}
const T = {
  on(e, t, n, s) {
    D(e, t, n, s, !1);
  },
  one(e, t, n, s) {
    D(e, t, n, s, !0);
  },
  off(e, t, n, s) {
    if ("string" != typeof t || !e) return;
    const [c, a, i] = C(t, n, s),
      l = i !== t,
      o = A(e),
      r = o[i] || {},
      d = t.startsWith(".");
    if ((0)[0] === a) {
      if (d) for (const n of Object.keys(o)) S(e, o, n, t.slice(1));
      for (const [s, n] of Object.entries(r)) {
        const a = s.replace(y, "");
        (l && !t.includes(a)) || j(e, o, i, n.callable, n.delegationSelector);
      }
    } else {
      if (!Object.keys(r).length) return;
      j(e, o, i, a, c ? n : null);
    }
  },
  trigger(e, t, n) {
    if ("string" != typeof t || !e) return null;
    const i = u();
    let s = null,
      a = !0,
      r = !0,
      c = !1;
    t !== N(t) &&
      i &&
      ((s = i.Event(t, n)),
      i(e).trigger(s),
      (a = !s.isPropagationStopped()),
      (r = !s.isImmediatePropagationStopped()),
      (c = s.isDefaultPrevented()));
    const o = L(new Event(t, { bubbles: a, cancelable: !0 }), n);
    return (
      c && o.preventDefault(),
      r && e.dispatchEvent(o),
      o.defaultPrevented && s && s.preventDefault(),
      o
    );
  },
};
function L(e, t = {}) {
  for (const [n, s] of Object.entries(t))
    try {
      e[n] = s;
    } catch (t) {
      Object.defineProperty(e, n, { configurable: !0, get: () => s });
    }
  return e;
}
function P(e) {
  if ("true" === e) return !0;
  if ("false" === e) return !1;
  if (e === Number(e).toString()) return Number(e);
  if ("" === e || "null" === e) return null;
  if ("string" != typeof e) return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch (t) {
    return e;
  }
}
function M(e) {
  return e.replace(/[A-Z]/g, (e) => "-".concat(e.toLowerCase()));
}
const W = {
  setDataAttribute(e, t, n) {
    e.setAttribute("data-bs-".concat(M(t)), n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute("data-bs-".concat(M(t)));
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
      );
    for (const o of n) {
      let s = o.replace(/^bs/, "");
      (s = s.charAt(0).toLowerCase() + s.slice(1)), (t[s] = P(e.dataset[o]));
    }
    return t;
  },
  getDataAttribute: (e, t) => P(e.getAttribute("data-bs-".concat(M(t)))),
};
class I {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  _configAfterMerge(e) {
    return e;
  }
  _mergeConfigObj(e, t) {
    const n = i(t) ? W.getDataAttribute(t, "config") : {};
    return {
      ...this.constructor.Default,
      ...("object" == typeof n ? n : {}),
      ...(i(t) ? W.getDataAttributes(t) : {}),
      ...("object" == typeof e ? e : {}),
    };
  }
  _typeCheckConfig(e, t = this.constructor.DefaultType) {
    for (const [n, s] of Object.entries(t)) {
      const o = e[n],
        a = i(o) ? "element" : r(o);
      if (!new RegExp(s).test(a))
        throw new TypeError(
          ""
            .concat(this.constructor.NAME.toUpperCase(), ': Option "')
            .concat(n, '" provided type "')
            .concat(a, '" but expected type "')
            .concat(s, '".')
        );
    }
  }
}
class B extends I {
  constructor(e, n) {
    super(),
      (e = s(e)) &&
        ((this._element = e),
        (this._config = this._getConfig(n)),
        t.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    t.remove(this._element, this.constructor.DATA_KEY),
      T.off(this._element, this.constructor.EVENT_KEY);
    for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
  }
  _queueCallback(e, t, n = !0) {
    g(e, t, n);
  }
  _getConfig(e) {
    return (
      (e = this._mergeConfigObj(e, this._element)),
      (e = this._configAfterMerge(e)),
      this._typeCheckConfig(e),
      e
    );
  }
  static getInstance(e) {
    return t.get(s(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, t = {}) {
    return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
  }
  static get VERSION() {
    return "5.3.7";
  }
  static get DATA_KEY() {
    return "bs.".concat(this.NAME);
  }
  static get EVENT_KEY() {
    return ".".concat(this.DATA_KEY);
  }
  static eventName(e) {
    return "".concat(e).concat(this.EVENT_KEY);
  }
}
const R = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || "#" === t) {
      let n = e.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") &&
        !n.startsWith("#") &&
        (n = "#".concat(n.split("#")[1])),
        (t = n && "#" !== n ? n.trim() : null);
    }
    return t
      ? t
          .split(",")
          .map((e) => o(e))
          .join(",")
      : null;
  },
  V = {
    find: (e, t = document.documentElement) =>
      [].concat(...Element.prototype.querySelectorAll.call(t, e)),
    findOne: (e, t = document.documentElement) =>
      Element.prototype.querySelector.call(t, e),
    children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
    parents(e, t) {
      const s = [];
      let n = e.parentNode.closest(t);
      for (; n; ) s.push(n), (n = n.parentNode.closest(t));
      return s;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((e) => "".concat(e, ':not([tabindex^="-"])'))
        .join(",");
      return this.find(t, e).filter((e) => !c(e) && a(e));
    },
    getSelectorFromElement(e) {
      const t = R(e);
      return t && V.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = R(e);
      return t ? V.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = R(e);
      return t ? V.find(t) : [];
    },
  },
  H = (e, t = "hide") => {
    const s = "click.dismiss".concat(e.EVENT_KEY),
      n = e.NAME;
    T.on(document, s, '[data-bs-dismiss="'.concat(n, '"]'), function (s) {
      if ((["A", "AREA"].includes(this.tagName) && s.preventDefault(), c(this)))
        return;
      const o = V.getElementFromSelector(this) || this.closest(".".concat(n));
      e.getOrCreateInstance(o)[t]();
    });
  };
var Re,
  qe,
  Ke,
  Ye,
  pt,
  gt,
  q = "top",
  F = "bottom",
  K = "right",
  z = "left",
  Y = "auto",
  U = [q, F, K, z],
  Q = "start",
  X = "end",
  G = "clippingParents",
  J = "viewport",
  Z = "popper",
  $ = "reference",
  ee = U.reduce(function (e, t) {
    return e.concat([t + "-" + Q, t + "-" + X]);
  }, []),
  te = [].concat(U, [Y]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Q, t + "-" + X]);
  }, []),
  ne = "beforeRead",
  oe = "read",
  re = "afterRead",
  ie = "beforeMain",
  se = "main",
  ae = "afterMain",
  ce = "beforeWrite",
  le = "write",
  fe = "afterWrite",
  ue = [ne, oe, re, ie, se, ae, ce, le, fe];
function de(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function pe(e) {
  if (e == null) return window;
  if ("[object Window]" !== e.toString()) {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function he(e) {
  return e instanceof pe(e).Element || e instanceof Element;
}
function me(e) {
  return e instanceof pe(e).HTMLElement || e instanceof HTMLElement;
}
function ge(e) {
  return (
    "undefined" != typeof ShadowRoot &&
    (e instanceof pe(e).ShadowRoot || e instanceof ShadowRoot)
  );
}
const be = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: function (e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (e) {
      var o = t.styles[e] || {},
        s = t.attributes[e] || {},
        n = t.elements[e];
      me(n) &&
        de(n) &&
        (Object.assign(n.style, o),
        Object.keys(s).forEach(function (e) {
          var t = s[e];
          !1 === t
            ? n.removeAttribute(e)
            : n.setAttribute(e, !0 === t ? "" : t);
        }));
    });
  },
  effect: function (e) {
    var t = e.state,
      n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0",
        },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(t.elements.popper.style, n.popper),
      (t.styles = n),
      t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
      function () {
        Object.keys(t.elements).forEach(function (e) {
          var s = t.elements[e],
            o = t.attributes[e] || {},
            i = Object.keys(
              t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
            ).reduce(function (e, t) {
              return (e[t] = ""), e;
            }, {});
          me(s) &&
            de(s) &&
            (Object.assign(s.style, i),
            Object.keys(o).forEach(function (e) {
              s.removeAttribute(e);
            }));
        });
      }
    );
  },
  requires: ["computeStyles"],
};
function ve(e) {
  return e.split("-")[0];
}
var ye = Math.max,
  _e = Math.min,
  we = Math.round;
function Ee() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Oe() {
  return !/^((?!chrome|android).)*safari/i.test(Ee());
}
function xe(e, t, n) {
  (0)[0] === t && (t = !1), (0)[0] === n && (n = !1);
  var s = e.getBoundingClientRect(),
    i = 1,
    a = 1;
  t &&
    me(e) &&
    ((i = (e.offsetWidth > 0 && we(s.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && we(s.height) / e.offsetHeight) || 1));
  var o = (he(e) ? pe(e) : window).visualViewport,
    l = !Oe() && n,
    r = (s.left + (l && o ? o.offsetLeft : 0)) / i,
    c = (s.top + (l && o ? o.offsetTop : 0)) / a,
    d = s.width / i,
    u = s.height / a;
  return {
    width: d,
    height: u,
    top: c,
    right: r + d,
    bottom: c + u,
    left: r,
    x: r,
    y: c,
  };
}
function Ae(e) {
  var t = xe(e),
    n = e.offsetWidth,
    s = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - s) <= 1 && (s = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: s }
  );
}
function ke(e, t) {
  var n,
    s = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (s && ge(s)) {
    n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ce(e) {
  return pe(e).getComputedStyle(e);
}
function De(e) {
  return ["table", "td", "th"].indexOf(de(e)) >= 0;
}
function je(e) {
  return ((he(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Se(e) {
  return "html" === de(e)
    ? e
    : e.assignedSlot || e.parentNode || (ge(e) ? e.host : null) || je(e);
}
function Ne(e) {
  return me(e) && "fixed" !== Ce(e).position ? e.offsetParent : null;
}
function Te(e) {
  for (var n = pe(e), t = Ne(e); t && De(t) && "static" === Ce(t).position; )
    t = Ne(t);
  return t &&
    ("html" === de(t) || ("body" === de(t) && "static" === Ce(t).position))
    ? n
    : t ||
        (function (e) {
          var t,
            n,
            s = /firefox/i.test(Ee());
          if (/Trident/i.test(Ee()) && me(e) && "fixed" === Ce(e).position)
            return null;
          t = Se(e);
          for (
            ge(t) && (t = t.host);
            me(t) && ["html", "body"].indexOf(de(t)) < 0;

          ) {
            if (
              ((n = Ce(t)),
              "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (s && "filter" === n.willChange) ||
                (s && n.filter && "none" !== n.filter))
            )
              return t;
            t = t.parentNode;
          }
          return null;
        })(e) ||
        n;
}
function Le(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pe(e, t, n) {
  return ye(e, _e(t, n));
}
function Me(e) {
  return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function We(e, t) {
  return t.reduce(function (t, n) {
    return (t[n] = e), t;
  }, {});
}
const Ie = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var i,
      t = e.state,
      f = e.name,
      w = e.options,
      r = t.elements.arrow,
      a = t.modifiersData.popperOffsets,
      c = ve(t.placement),
      n = Le(c),
      s = [z, K].indexOf(c) >= 0 ? "height" : "width";
    if (r && a) {
      var d = (function (e, t) {
          return Me(
            "number" !=
              typeof (e =
                "function" == typeof e
                  ? e(Object.assign({}, t.rects, { placement: t.placement }))
                  : e)
              ? e
              : We(e, U)
          );
        })(w.padding, t),
        u = Ae(r),
        _ = "y" === n ? q : z,
        v = "y" === n ? F : K,
        g =
          t.rects.reference[s] +
          t.rects.reference[n] -
          a[n] -
          t.rects.popper[s],
        p = a[n] - t.rects.reference[n],
        o = Te(r),
        m = o ? ("y" === n ? o.clientHeight || 0 : o.clientWidth || 0) : 0,
        b = g / 2 - p / 2,
        j = d[_],
        y = m - u[s] - d[v],
        h = m / 2 - u[s] / 2 + b,
        l = Pe(j, h, y),
        O = n;
      t.modifiersData[f] = (((i = {})[O] = l), (i.centerOffset = l - h), i);
    }
  },
  effect: function (e) {
    var n = e.state,
      s = e.options.element,
      t = (0)[0] === s ? "[data-popper-arrow]" : s;
    t != null &&
      ("string" != typeof t || (t = n.elements.popper.querySelector(t))) &&
      ke(n.elements.popper, t) &&
      (n.elements.arrow = t);
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Be(e) {
  return e.split("-")[1];
}
Re = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ve(e) {
  var r,
    l,
    h,
    f,
    a = e.popper,
    C = e.popperRect,
    o = e.placement,
    w = e.variation,
    c = e.offsets,
    _ = e.position,
    u = e.gpuAcceleration,
    g = e.adaptive,
    m = e.roundOffsets,
    y = e.isFixed,
    k = c.x,
    t = (0)[0] === k ? 0 : k,
    E = c.y,
    n = (0)[0] === E ? 0 : E,
    j = "function" == typeof m ? m({ x: t, y: n }) : { x: t, y: n },
    t = j.x,
    n = j.y,
    v = c.hasOwnProperty("x"),
    b = c.hasOwnProperty("y"),
    d = z,
    p = q,
    s = window;
  if (g) {
    var i = Te(a),
      O = "clientHeight",
      x = "clientWidth";
    (i === pe(a) &&
      "static" !== Ce((i = je(a))).position &&
      "absolute" === _ &&
      ((O = "scrollHeight"), (x = "scrollWidth")),
    o === q || ((o === z || o === K) && w === X)) &&
      ((p = F),
      (n -=
        (y && i === s && s.visualViewport ? s.visualViewport.height : i[O]) -
        C.height),
      (n *= u ? 1 : -1)),
      (o === z || ((o === q || o === F) && w === X)) &&
        ((d = K),
        (t -=
          (y && i === s && s.visualViewport ? s.visualViewport.width : i[x]) -
          C.width),
        (t *= u ? 1 : -1));
  }
  return (
    (f = Object.assign({ position: _ }, g && Re)),
    (h =
      !0 === m
        ? (function (e, t) {
            var s = e.x,
              o = e.y,
              n = t.devicePixelRatio || 1;
            return { x: we(s * n) / n || 0, y: we(o * n) / n || 0 };
          })({ x: t, y: n }, pe(a))
        : { x: t, y: n }),
    (t = h.x),
    (n = h.y),
    u
      ? Object.assign(
          {},
          f,
          (((r = {})[p] = b ? "0" : ""),
          (r[d] = v ? "0" : ""),
          (r.transform =
            (s.devicePixelRatio || 1) <= 1
              ? "translate(" + t + "px, " + n + "px)"
              : "translate3d(" + t + "px, " + n + "px, 0)"),
          r)
        )
      : Object.assign(
          {},
          f,
          (((l = {})[p] = b ? n + "px" : ""),
          (l[d] = v ? t + "px" : ""),
          (l.transform = ""),
          l)
        )
  );
}
const He = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: function (e) {
    var t = e.state,
      n = e.options,
      s = n.gpuAcceleration,
      c = (0)[0] === s || s,
      o = n.adaptive,
      l = (0)[0] === o || o,
      i = n.roundOffsets,
      a = (0)[0] === i || i,
      r = {
        placement: ve(t.placement),
        variation: Be(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: c,
        isFixed: "fixed" === t.options.strategy,
      };
    null != t.modifiersData.popperOffsets &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        Ve(
          Object.assign({}, r, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: l,
            roundOffsets: a,
          })
        )
      )),
      null != t.modifiersData.arrow &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          Ve(
            Object.assign({}, r, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: a,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  },
  data: {},
};
qe = { passive: !0 };
const Fe = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: function (e) {
    var n = e.state,
      t = e.instance,
      s = e.options,
      o = s.scroll,
      i = (0)[0] === o || o,
      a = s.resize,
      r = (0)[0] === a || a,
      c = pe(n.elements.popper),
      l = [].concat(n.scrollParents.reference, n.scrollParents.popper);
    return (
      i &&
        l.forEach(function (e) {
          e.addEventListener("scroll", t.update, qe);
        }),
      r && c.addEventListener("resize", t.update, qe),
      function () {
        i &&
          l.forEach(function (e) {
            e.removeEventListener("scroll", t.update, qe);
          }),
          r && c.removeEventListener("resize", t.update, qe);
      }
    );
  },
  data: {},
};
Ke = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ze(e) {
  return e.replace(/left|right|bottom|top/g, function (e) {
    return Ke[e];
  });
}
Ye = { start: "end", end: "start" };
function Ue(e) {
  return e.replace(/start|end/g, function (e) {
    return Ye[e];
  });
}
function Qe(e) {
  var t = pe(e);
  return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Xe(e) {
  return xe(je(e)).left + Qe(e).scrollLeft;
}
function Ge(e) {
  var t = Ce(e),
    n = t.overflow,
    s = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + s);
}
function Je(e) {
  return ["html", "body", "#document"].indexOf(de(e)) >= 0
    ? e.ownerDocument.body
    : me(e) && Ge(e)
    ? e
    : Je(Se(e));
}
function Ze(e, t) {
  (0)[0] === t && (t = []);
  var s,
    n = Je(e),
    o = n === (null == (s = e.ownerDocument) ? (0)[0] : s.body),
    i = pe(n),
    a = o ? [i].concat(i.visualViewport || [], Ge(n) ? n : []) : n,
    r = t.concat(a);
  return o ? r : r.concat(Ze(Se(a)));
}
function $e(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function et(e, t, n) {
  return t === J
    ? $e(
        (function (e, t) {
          var s,
            l = pe(e),
            o = je(e),
            n = l.visualViewport,
            i = o.clientWidth,
            a = o.clientHeight,
            r = 0,
            c = 0;
          return (
            n &&
              ((i = n.width),
              (a = n.height),
              (s = Oe()),
              (s || (!s && "fixed" === t)) &&
                ((r = n.offsetLeft), (c = n.offsetTop))),
            { width: i, height: a, x: r + Xe(e), y: c }
          );
        })(e, n)
      )
    : he(t)
    ? (function (e, t) {
        var n = xe(e, !1, "fixed" === t);
        return (
          (n.top = n.top + e.clientTop),
          (n.left = n.left + e.clientLeft),
          (n.bottom = n.top + e.clientHeight),
          (n.right = n.left + e.clientWidth),
          (n.width = e.clientWidth),
          (n.height = e.clientHeight),
          (n.x = n.left),
          (n.y = n.top),
          n
        );
      })(t, n)
    : $e(
        (function (e) {
          var s,
            n = je(e),
            o = Qe(e),
            t = null == (s = e.ownerDocument) ? (0)[0] : s.body,
            i = ye(
              n.scrollWidth,
              n.clientWidth,
              t ? t.scrollWidth : 0,
              t ? t.clientWidth : 0
            ),
            r = ye(
              n.scrollHeight,
              n.clientHeight,
              t ? t.scrollHeight : 0,
              t ? t.clientHeight : 0
            ),
            a = -o.scrollLeft + Xe(e),
            c = -o.scrollTop;
          return (
            "rtl" === Ce(t || n).direction &&
              (a += ye(n.clientWidth, t ? t.clientWidth : 0) - i),
            { width: i, height: r, x: a, y: c }
          );
        })(je(e))
      );
}
function tt(e, t, n, s) {
  var a =
      "clippingParents" === t
        ? (function (e) {
            var n = Ze(Se(e)),
              t =
                ["absolute", "fixed"].indexOf(Ce(e).position) >= 0 && me(e)
                  ? Te(e)
                  : e;
            return he(t)
              ? n.filter(function (e) {
                  return he(e) && ke(e, t) && "body" !== de(e);
                })
              : [];
          })(e)
        : [].concat(t),
    i = [].concat(a, [n]),
    r = i[0],
    o = i.reduce(function (t, n) {
      var o = et(e, n, s);
      return (
        (t.top = ye(o.top, t.top)),
        (t.right = _e(o.right, t.right)),
        (t.bottom = _e(o.bottom, t.bottom)),
        (t.left = ye(o.left, t.left)),
        t
      );
    }, et(e, r, s));
  return (
    (o.width = o.right - o.left),
    (o.height = o.bottom - o.top),
    (o.x = o.left),
    (o.y = o.top),
    o
  );
}
function nt(e) {
  var n,
    s,
    i,
    t = e.reference,
    o = e.element,
    a = e.placement,
    r = a ? ve(a) : null,
    d = a ? Be(a) : null,
    c = t.x + t.width / 2 - o.width / 2,
    l = t.y + t.height / 2 - o.height / 2;
  switch (r) {
    case q:
      n = { x: c, y: t.y - o.height };
      break;
    case F:
      n = { x: c, y: t.y + t.height };
      break;
    case K:
      n = { x: t.x + t.width, y: l };
      break;
    case z:
      n = { x: t.x - o.width, y: l };
      break;
    default:
      n = { x: t.x, y: t.y };
  }
  if (((s = r ? Le(r) : null), s != null))
    switch (((i = "y" === s ? "height" : "width"), d)) {
      case Q:
        n[s] = n[s] - (t[i] / 2 - o[i] / 2);
        break;
      case X:
        n[s] = n[s] + (t[i] / 2 - o[i] / 2);
    }
  return n;
}
function ot(e, t) {
  (0)[0] === t && (t = {});
  var m,
    n = t,
    d = n.placement,
    u = (0)[0] === d ? e.placement : d,
    _ = n.strategy,
    A = (0)[0] === _ ? e.strategy : _,
    y = n.boundary,
    w = (0)[0] === y ? G : y,
    g = n.rootBoundary,
    k = (0)[0] === g ? J : g,
    b = n.elementContext,
    i = (0)[0] === b ? Z : b,
    h = n.altBoundary,
    E = (0)[0] !== h && h,
    p = n.padding,
    l = (0)[0] === p ? 0 : p,
    s = Me("number" != typeof l ? l : We(l, U)),
    C = i === Z ? $ : Z,
    j = e.rects.popper,
    c = e.elements[E ? C : i],
    o = tt(he(c) ? c : c.contextElement || je(e.elements.popper), w, k, A),
    v = xe(e.elements.reference),
    O = nt({ reference: v, element: j, placement: u }),
    x = $e(Object.assign({}, j, O)),
    a = i === Z ? x : v,
    r = {
      top: o.top - a.top + s.top,
      bottom: a.bottom - o.bottom + s.bottom,
      left: o.left - a.left + s.left,
      right: a.right - o.right + s.right,
    },
    f = e.modifiersData.offset;
  return (
    i === Z &&
      f &&
      ((m = f[u]),
      Object.keys(r).forEach(function (e) {
        var t = [K, F].indexOf(e) >= 0 ? 1 : -1,
          n = [q, F].indexOf(e) >= 0 ? "y" : "x";
        r[e] += m[n] * t;
      })),
    r
  );
}
const rt = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: function (e) {
    var t = e.state,
      n = e.options,
      p = e.name;
    if (!t.modifiersData[p]._skip) {
      for (
        var s,
          a,
          g,
          b,
          v = n.mainAxis,
          D = (0)[0] === v || v,
          y = n.altAxis,
          A = (0)[0] === y || y,
          S = n.fallbackPlacements,
          f = n.padding,
          m = n.boundary,
          j = n.rootBoundary,
          R = n.altBoundary,
          x = n.flipVariations,
          d = (0)[0] === x || x,
          P = n.allowedAutoPlacements,
          i = t.options.placement,
          L = ve(i),
          N =
            S ||
            (L === i || !d
              ? [ze(i)]
              : (function (e) {
                  if (ve(e) === Y) return [];
                  var t = ze(e);
                  return [Ue(e), t, Ue(t)];
                })(i)),
          l = [i].concat(N).reduce(function (e, n) {
            return e.concat(
              ve(n) === Y
                ? (function (e, t) {
                    (0)[0] === t && (t = {});
                    var s,
                      n = t,
                      c = n.placement,
                      l = n.boundary,
                      d = n.rootBoundary,
                      u = n.padding,
                      h = n.flipVariations,
                      i = n.allowedAutoPlacements,
                      m = (0)[0] === i ? te : i,
                      a = Be(c),
                      r = a
                        ? h
                          ? ee
                          : ee.filter(function (e) {
                              return Be(e) === a;
                            })
                        : U,
                      o = r.filter(function (e) {
                        return m.indexOf(e) >= 0;
                      });
                    return (
                      0 === o.length && (o = r),
                      (s = o.reduce(function (t, n) {
                        return (
                          (t[n] = ot(e, {
                            placement: n,
                            boundary: l,
                            rootBoundary: d,
                            padding: u,
                          })[ve(n)]),
                          t
                        );
                      }, {})),
                      Object.keys(s).sort(function (e, t) {
                        return s[e] - s[t];
                      })
                    );
                  })(t, {
                    placement: n,
                    boundary: m,
                    rootBoundary: j,
                    padding: f,
                    flipVariations: d,
                    allowedAutoPlacements: P,
                  })
                : n
            );
          }, []),
          T = t.rects.reference,
          M = t.rects.popper,
          w = new Map(),
          O = !0,
          c = l[0],
          h = 0;
        h < l.length;
        h++
      ) {
        var o = l[h],
          k = ve(o),
          E = Be(o) === Q,
          C = [q, F].indexOf(k) >= 0,
          _ = C ? "width" : "height",
          u = ot(t, {
            placement: o,
            boundary: m,
            rootBoundary: j,
            altBoundary: R,
            padding: f,
          }),
          r = C ? (E ? K : z) : E ? F : q;
        if (
          (T[_] > M[_] && (r = ze(r)),
          (b = ze(r)),
          (s = []),
          D && s.push(u[k] <= 0),
          A && s.push(u[r] <= 0, u[b] <= 0),
          s.every(function (e) {
            return e;
          }))
        ) {
          (c = o), (O = !1);
          break;
        }
        w.set(o, s);
      }
      if (O)
        for (
          g = function (e) {
            var t = l.find(function (t) {
              var n = w.get(t);
              if (n)
                return n.slice(0, e).every(function (e) {
                  return e;
                });
            });
            if (t) return (c = t), "break";
          },
            a = d ? 3 : 1;
          a > 0;
          a--
        )
          if ("break" === g(a)) break;
      t.placement !== c &&
        ((t.modifiersData[p]._skip = !0), (t.placement = c), (t.reset = !0));
    }
  },
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function it(e, t, n) {
  return (
    (0)[0] === n && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function st(e) {
  return [q, K, F, z].some(function (t) {
    return e[t] >= 0;
  });
}
const at = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
      var t = e.state,
        a = e.name,
        r = t.rects.reference,
        c = t.rects.popper,
        l = t.modifiersData.preventOverflow,
        d = ot(t, { elementContext: "reference" }),
        u = ot(t, { altBoundary: !0 }),
        n = it(d, r),
        s = it(u, c, l),
        o = st(n),
        i = st(s);
      (t.modifiersData[a] = {
        referenceClippingOffsets: n,
        popperEscapeOffsets: s,
        isReferenceHidden: o,
        hasPopperEscaped: i,
      }),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": o,
          "data-popper-escaped": i,
        }));
    },
  },
  ct = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        i = e.options,
        a = e.name,
        n = i.offset,
        r = (0)[0] === n ? [0, 0] : n,
        s = te.reduce(function (e, n) {
          return (
            (e[n] = (function (e, t, n) {
              var i = ve(e),
                r = [z, q].indexOf(i) >= 0 ? -1 : 1,
                a =
                  "function" == typeof n
                    ? n(Object.assign({}, t, { placement: e }))
                    : n,
                s = a[0],
                o = a[1];
              return (
                (s = s || 0),
                (o = (o || 0) * r),
                [z, K].indexOf(i) >= 0 ? { x: o, y: s } : { x: s, y: o }
              );
            })(n, t.rects, r)),
            e
          );
        }, {}),
        o = s[t.placement],
        c = o.x,
        l = o.y;
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += c),
        (t.modifiersData.popperOffsets.y += l)),
        (t.modifiersData[a] = s);
    },
  },
  lt = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (e) {
      var t = e.state,
        n = e.name;
      t.modifiersData[n] = nt({
        reference: t.rects.reference,
        element: t.rects.popper,
        placement: t.placement,
      });
    },
    data: {},
  },
  ft = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var y,
        E,
        t = e.state,
        o = e.options,
        ce = e.name,
        C = o.mainAxis,
        te = (0)[0] === C || C,
        N = o.altAxis,
        me = (0)[0] !== N && N,
        pe = o.boundary,
        ge = o.rootBoundary,
        ae = o.altBoundary,
        fe = o.padding,
        Z = o.tether,
        a = (0)[0] === Z || Z,
        V = o.tetherOffset,
        _ = (0)[0] === V ? 0 : V,
        g = ot(t, {
          boundary: pe,
          rootBoundary: ge,
          padding: fe,
          altBoundary: ae,
        }),
        k = ve(t.placement),
        b = Be(t.placement),
        $ = !b,
        n = Le(k),
        h = "x" === n ? "y" : "x",
        u = t.modifiersData.popperOffsets,
        r = t.rects.reference,
        d = t.rects.popper,
        f =
          "function" == typeof _
            ? _(Object.assign({}, t.rects, { placement: t.placement }))
            : _,
        c =
          "number" == typeof f
            ? { mainAxis: f, altAxis: f }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, f),
        m = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        j = { x: 0, y: 0 };
      if (u) {
        if (te) {
          var S,
            M = "y" === n ? q : z,
            T = "y" === n ? F : K,
            s = "y" === n ? "height" : "width",
            l = u[n],
            L = l + g[M],
            R = l - g[T],
            P = a ? -d[s] / 2 : 0,
            he = b === Q ? r[s] : d[s],
            ue = b === Q ? -d[s] : -r[s],
            B = t.elements.arrow,
            ne = a && B ? Ae(B) : { width: 0, height: 0 },
            x = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            W = x[M],
            U = x[T],
            p = Pe(0, r[s], ne[s]),
            de = $
              ? r[s] / 2 - P - p - W - c.mainAxis
              : he - p - W - c.mainAxis,
            se = $
              ? -r[s] / 2 + P + p + U + c.mainAxis
              : ue + p + U + c.mainAxis,
            O = t.elements.arrow && Te(t.elements.arrow),
            re = O ? ("y" === n ? O.clientTop || 0 : O.clientLeft || 0) : 0,
            ee = null != (S = m == null ? (0)[0] : m[n]) ? S : 0,
            le = l + se - ee,
            J = Pe(a ? _e(L, l + de - ee - re) : L, l, a ? ye(R, le) : R);
          (u[n] = J), (j[n] = J - l);
        }
        if (me) {
          var X,
            oe = "x" === n ? q : z,
            ie = "x" === n ? F : K,
            i = u[h],
            v = "y" === h ? "height" : "width",
            G = i + g[oe],
            Y = i - g[ie],
            w = -1 !== [q, z].indexOf(k),
            I = null != (X = m == null ? (0)[0] : m[h]) ? X : 0,
            H = w ? G : i - r[v] - d[v] - I + c.altAxis,
            D = w ? i + r[v] + d[v] - I - c.altAxis : Y,
            A =
              a && w
                ? (E = Pe(H, i, (y = D))) > y
                  ? y
                  : E
                : Pe(a ? H : G, i, a ? D : Y);
          (u[h] = A), (j[h] = A - i);
        }
        t.modifiersData[ce] = j;
      }
    },
    requiresIfExists: ["offset"],
  };
function ut(e, t, n) {
  (0)[0] === n && (n = !1);
  var s,
    c,
    l = me(t),
    d =
      me(t) &&
      (function (e) {
        var t = e.getBoundingClientRect(),
          n = we(t.width) / e.offsetWidth || 1,
          s = we(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== s;
      })(t),
    a = je(t),
    i = xe(e, d, n),
    r = { scrollLeft: 0, scrollTop: 0 },
    o = { x: 0, y: 0 };
  return (
    (l || (!l && !n)) &&
      (("body" !== de(t) || Ge(a)) &&
        (r =
          (s = t) !== pe(s) && me(s)
            ? { scrollLeft: (c = s).scrollLeft, scrollTop: c.scrollTop }
            : Qe(s)),
      me(t)
        ? (((o = xe(t, !0)).x += t.clientLeft), (o.y += t.clientTop))
        : a && (o.x = Xe(a))),
    {
      x: i.left + r.scrollLeft - o.x,
      y: i.top + r.scrollTop - o.y,
      width: i.width,
      height: i.height,
    }
  );
}
function dt(e) {
  var n = new Map(),
    t = new Set(),
    s = [];
  function o(e) {
    t.add(e.name),
      []
        .concat(e.requires || [], e.requiresIfExists || [])
        .forEach(function (e) {
          if (!t.has(e)) {
            var s = n.get(e);
            s && o(s);
          }
        }),
      s.push(e);
  }
  return (
    e.forEach(function (e) {
      n.set(e.name, e);
    }),
    e.forEach(function (e) {
      t.has(e.name) || o(e);
    }),
    s
  );
}
pt = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ht() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  return !n.some(function (e) {
    return !e || "function" != typeof e.getBoundingClientRect;
  });
}
function mt(e) {
  (0)[0] === e && (e = {});
  var n = e,
    s = n.defaultModifiers,
    i = (0)[0] === s ? [] : s,
    o = n.defaultOptions,
    t = (0)[0] === o ? pt : o;
  return function (e, n, s) {
    (0)[0] === s && (s = t);
    var r,
      d,
      o = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, pt, t),
        modifiersData: {},
        elements: { reference: e, popper: n },
        attributes: {},
        styles: {},
      },
      c = [],
      l = !1,
      a = {
        state: o,
        setOptions: function (s) {
          var r,
            l,
            d,
            h = "function" == typeof s ? s(o.options) : s;
          return (
            u(),
            (o.options = Object.assign({}, t, o.options, h)),
            (o.scrollParents = {
              reference: he(e)
                ? Ze(e)
                : e.contextElement
                ? Ze(e.contextElement)
                : [],
              popper: Ze(n),
            }),
            (d = (function (e) {
              var t = dt(e);
              return ue.reduce(function (e, n) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === n;
                  })
                );
              }, []);
            })(
              ((l = [].concat(i, o.options.modifiers)),
              (r = l.reduce(function (e, t) {
                var n = e[t.name];
                return (
                  (e[t.name] = n
                    ? Object.assign({}, n, t, {
                        options: Object.assign({}, n.options, t.options),
                        data: Object.assign({}, n.data, t.data),
                      })
                    : t),
                  e
                );
              }, {})),
              Object.keys(r).map(function (e) {
                return r[e];
              }))
            )),
            (o.orderedModifiers = d.filter(function (e) {
              return e.enabled;
            })),
            o.orderedModifiers.forEach(function (e) {
              var s,
                i,
                r = e.name,
                t = e.options,
                l = (0)[0] === t ? {} : t,
                n = e.effect;
              "function" == typeof n &&
                ((s = n({ state: o, name: r, instance: a, options: l })),
                (i = function () {}),
                c.push(s || i));
            }),
            a.update()
          );
        },
        forceUpdate: function () {
          if (!l) {
            var s = o.elements,
              i = s.reference,
              t = s.popper;
            if (ht(i, t)) {
              (o.rects = {
                reference: ut(i, Te(t), "fixed" === o.options.strategy),
                popper: Ae(t),
              }),
                (o.reset = !1),
                (o.placement = o.options.placement),
                o.orderedModifiers.forEach(function (e) {
                  return (o.modifiersData[e.name] = Object.assign({}, e.data));
                });
              for (e = 0; e < o.orderedModifiers.length; e++)
                if (!0 !== o.reset) {
                  var e,
                    n = o.orderedModifiers[e],
                    r = n.fn,
                    c = n.options,
                    d = (0)[0] === c ? {} : c,
                    u = n.name;
                  "function" == typeof r &&
                    (o =
                      r({ state: o, options: d, name: u, instance: a }) || o);
                } else (o.reset = !1), (e = -1);
            }
          }
        },
        update:
          ((d = function () {
            return new Promise(function (e) {
              a.forceUpdate(), e(o);
            });
          }),
          function () {
            return (
              r ||
                (r = new Promise(function (e) {
                  Promise.resolve().then(function () {
                    (r = (0)[0]), e(d());
                  });
                })),
              r
            );
          }),
        destroy: function () {
          u(), (l = !0);
        },
      };
    if (!ht(e, n)) return a;
    function u() {
      c.forEach(function (e) {
        return e();
      }),
        (c = []);
    }
    return (
      a.setOptions(s).then(function (e) {
        !l && s.onFirstUpdate && s.onFirstUpdate(e);
      }),
      a
    );
  };
}
gt = mt({ defaultModifiers: [Fe, lt, He, be, ct, rt, ft, Ie, at] });
const bt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        afterMain: ae,
        afterRead: re,
        afterWrite: fe,
        applyStyles: be,
        arrow: Ie,
        auto: Y,
        basePlacements: U,
        beforeMain: ie,
        beforeRead: ne,
        beforeWrite: ce,
        bottom: F,
        clippingParents: G,
        computeStyles: He,
        createPopper: gt,
        detectOverflow: ot,
        end: X,
        eventListeners: Fe,
        flip: rt,
        hide: at,
        left: z,
        main: se,
        modifierPhases: ue,
        offset: ct,
        placements: te,
        popper: Z,
        popperGenerator: mt,
        popperOffsets: lt,
        preventOverflow: ft,
        read: oe,
        reference: $,
        right: K,
        start: Q,
        top: q,
        variationPlacements: ee,
        viewport: J,
        write: le,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vt = "dropdown",
  yt = ".".concat("bs.dropdown"),
  _t = ".data-api",
  wt = "ArrowUp",
  Et = "ArrowDown",
  Ot = "hide".concat(yt),
  xt = "hidden".concat(yt),
  At = "show".concat(yt),
  kt = "shown".concat(yt),
  Ct = "click".concat(yt).concat(_t),
  Dt = "keydown".concat(yt).concat(_t),
  jt = "keyup".concat(yt).concat(_t),
  St = "show",
  Nt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Tt = "".concat(Nt, ".").concat(St),
  Lt = ".dropdown-menu",
  Pt = p() ? "top-end" : "top-start",
  Mt = p() ? "top-start" : "top-end",
  Wt = p() ? "bottom-end" : "bottom-start",
  It = p() ? "bottom-start" : "bottom-end",
  Bt = p() ? "left-start" : "right-start",
  Rt = p() ? "right-start" : "left-start",
  Vt = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  Ht = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class qt extends B {
  constructor(e, t) {
    super(e, t),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        V.next(this._element, Lt)[0] ||
        V.prev(this._element, Lt)[0] ||
        V.findOne(Lt, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return Vt;
  }
  static get DefaultType() {
    return Ht;
  }
  static get NAME() {
    return vt;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (c(this._element) || this._isShown()) return;
    const e = { relatedTarget: this._element };
    if (!T.trigger(this._element, At, e).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement &&
          !this._parent.closest(".navbar-nav"))
      )
        for (const e of [].concat(...document.body.children))
          T.on(e, "mouseover", l);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(St),
        this._element.classList.add(St),
        T.trigger(this._element, kt, e);
    }
  }
  hide() {
    if (c(this._element) || !this._isShown()) return;
    const e = { relatedTarget: this._element };
    this._completeHide(e);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(e) {
    if (!T.trigger(this._element, Ot, e).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const e of [].concat(...document.body.children))
          T.off(e, "mouseover", l);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(St),
        this._element.classList.remove(St),
        this._element.setAttribute("aria-expanded", "false"),
        W.removeDataAttribute(this._menu, "popper"),
        T.trigger(this._element, xt, e),
        this._element.focus();
    }
  }
  _getConfig(e) {
    if (
      "object" == typeof (e = super._getConfig(e)).reference &&
      !i(e.reference) &&
      "function" != typeof e.reference.getBoundingClientRect
    )
      throw new TypeError(
        "".concat(
          vt.toUpperCase(),
          ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        )
      );
    return e;
  }
  _createPopper() {
    if ((0)[0] === bt)
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)"
      );
    let e = this._element;
    "parent" === this._config.reference
      ? (e = this._parent)
      : i(this._config.reference)
      ? (e = s(this._config.reference))
      : "object" == typeof this._config.reference &&
        (e = this._config.reference);
    const t = this._getPopperConfig();
    this._popper = gt(e, this._menu, t);
  }
  _isShown() {
    return this._menu.classList.contains(St);
  }
  _getPlacement() {
    const e = this._parent;
    if (e.classList.contains("dropend")) return Bt;
    if (e.classList.contains("dropstart")) return Rt;
    if (e.classList.contains("dropup-center")) return "top";
    if (e.classList.contains("dropdown-center")) return "bottom";
    const t =
      "end" ===
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
    return e.classList.contains("dropup") ? (t ? Mt : Pt) : t ? It : Wt;
  }
  _detectNavbar() {
    return null !== this._element.closest(".navbar");
  }
  _getOffset() {
    const { offset: e } = this._config;
    return "string" == typeof e
      ? e.split(",").map((e) => Number.parseInt(e, 10))
      : "function" == typeof e
      ? (t) => e(t, this._element)
      : e;
  }
  _getPopperConfig() {
    const e = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || "static" === this._config.display) &&
        (W.setDataAttribute(this._menu, "popper", "static"),
        (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...e, ...m(this._config.popperConfig, [(0)[0], e]) }
    );
  }
  _selectMenuItem({ key: e, target: t }) {
    const n = V.find(
      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      this._menu
    ).filter((e) => a(e));
    n.length &&
      ((e, t, n, s) => {
        const i = e.length;
        let o = e.indexOf(t);
        return -1 === o
          ? !n && s
            ? e[i - 1]
            : e[0]
          : ((o += n ? 1 : -1),
            s && (o = (o + i) % i),
            e[Math.max(0, Math.min(o, i - 1))]);
      })(n, t, e === Et, !n.includes(t)).focus();
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const t = qt.getOrCreateInstance(this, e);
      if ("string" == typeof e) {
        if ((0)[0] === t[e])
          throw new TypeError('No method named "'.concat(e, '"'));
        t[e]();
      }
    });
  }
  static clearMenus(e) {
    if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)) return;
    const t = V.find(Tt);
    for (const a of t) {
      const n = qt.getInstance(a);
      if (!n || !1 === n._config.autoClose) continue;
      const s = e.composedPath(),
        o = s.includes(n._menu);
      if (
        s.includes(n._element) ||
        ("inside" === n._config.autoClose && !o) ||
        ("outside" === n._config.autoClose && o)
      )
        continue;
      if (
        n._menu.contains(e.target) &&
        (("keyup" === e.type && "Tab" === e.key) ||
          /input|select|option|textarea|form/i.test(e.target.tagName))
      )
        continue;
      const i = { relatedTarget: n._element };
      "click" === e.type && (i.clickEvent = e), n._completeHide(i);
    }
  }
  static dataApiKeydownHandler(e) {
    const i = /input|textarea/i.test(e.target.tagName),
      n = "Escape" === e.key,
      s = [wt, Et].includes(e.key);
    if (!s && !n) return;
    if (i && !n) return;
    e.preventDefault();
    const o = this.matches(Nt)
        ? this
        : V.prev(this, Nt)[0] ||
          V.next(this, Nt)[0] ||
          V.findOne(Nt, e.delegateTarget.parentNode),
      t = qt.getOrCreateInstance(o);
    if (s) return e.stopPropagation(), t.show(), void t._selectMenuItem(e);
    t._isShown() && (e.stopPropagation(), t.hide(), o.focus());
  }
}
T.on(document, Dt, Nt, qt.dataApiKeydownHandler),
  T.on(document, Dt, Lt, qt.dataApiKeydownHandler),
  T.on(document, Ct, qt.clearMenus),
  T.on(document, jt, qt.clearMenus),
  T.on(document, Ct, Nt, function (e) {
    e.preventDefault(), qt.getOrCreateInstance(this).toggle();
  }),
  h(qt);
const Ft = "backdrop",
  Kt = "show",
  zt = "mousedown.bs.".concat(Ft),
  Yt = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  Ut = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class Qt extends I {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return Yt;
  }
  static get DefaultType() {
    return Ut;
  }
  static get NAME() {
    return Ft;
  }
  show(e) {
    if (!this._config.isVisible) return void m(e);
    this._append();
    const t = this._getElement();
    this._config.isAnimated && f(t),
      t.classList.add(Kt),
      this._emulateAnimation(() => {
        m(e);
      });
  }
  hide(e) {
    this._config.isVisible
      ? (this._getElement().classList.remove(Kt),
        this._emulateAnimation(() => {
          this.dispose(), m(e);
        }))
      : m(e);
  }
  dispose() {
    this._isAppended &&
      (T.off(this._element, zt),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const e = document.createElement("div");
      (e.className = this._config.className),
        this._config.isAnimated && e.classList.add("fade"),
        (this._element = e);
    }
    return this._element;
  }
  _configAfterMerge(e) {
    return (e.rootElement = s(e.rootElement)), e;
  }
  _append() {
    if (this._isAppended) return;
    const e = this._getElement();
    this._config.rootElement.append(e),
      T.on(e, zt, () => {
        m(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(e) {
    g(e, this._getElement(), this._config.isAnimated);
  }
}
const Xt = ".".concat("bs.focustrap"),
  Gt = "focusin".concat(Xt),
  Jt = "keydown.tab".concat(Xt),
  Zt = "backward",
  $t = { autofocus: !0, trapElement: null },
  en = { autofocus: "boolean", trapElement: "element" };
class tn extends I {
  constructor(e) {
    super(),
      (this._config = this._getConfig(e)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return $t;
  }
  static get DefaultType() {
    return en;
  }
  static get NAME() {
    return "focustrap";
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      T.off(document, Xt),
      T.on(document, Gt, (e) => this._handleFocusin(e)),
      T.on(document, Jt, (e) => this._handleKeydown(e)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), T.off(document, Xt));
  }
  _handleFocusin(e) {
    const { trapElement: t } = this._config;
    if (e.target === document || e.target === t || t.contains(e.target)) return;
    const n = V.focusableChildren(t);
    0 === n.length
      ? t.focus()
      : this._lastTabNavDirection === Zt
      ? n[n.length - 1].focus()
      : n[0].focus();
  }
  _handleKeydown(e) {
    "Tab" === e.key &&
      (this._lastTabNavDirection = e.shiftKey ? Zt : "forward");
  }
}
const nn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  on = ".sticky-top",
  rn = "padding-right",
  sn = "margin-right";
class an {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const e = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - e);
  }
  hide() {
    const e = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, rn, (t) => t + e),
      this._setElementAttributes(nn, rn, (t) => t + e),
      this._setElementAttributes(on, sn, (t) => t - e);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, rn),
      this._resetElementAttributes(nn, rn),
      this._resetElementAttributes(on, sn);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(e, t, n) {
    const s = this.getWidth();
    this._applyManipulationCallback(e, (e) => {
      if (e !== this._element && window.innerWidth > e.clientWidth + s) return;
      this._saveInitialAttribute(e, t);
      const o = window.getComputedStyle(e).getPropertyValue(t);
      e.style.setProperty(t, "".concat(n(Number.parseFloat(o)), "px"));
    });
  }
  _saveInitialAttribute(e, t) {
    const n = e.style.getPropertyValue(t);
    n && W.setDataAttribute(e, t, n);
  }
  _resetElementAttributes(e, t) {
    this._applyManipulationCallback(e, (e) => {
      const n = W.getDataAttribute(e, t);
      null !== n
        ? (W.removeDataAttribute(e, t), e.style.setProperty(t, n))
        : e.style.removeProperty(t);
    });
  }
  _applyManipulationCallback(e, t) {
    if (i(e)) t(e);
    else for (const n of V.find(e, this._element)) t(n);
  }
}
const cn = ".".concat("bs.offcanvas"),
  ln = ".data-api",
  fn = "load".concat(cn).concat(ln),
  un = "show",
  dn = "showing",
  pn = "hiding",
  hn = ".offcanvas.show",
  mn = "show".concat(cn),
  gn = "shown".concat(cn),
  bn = "hide".concat(cn),
  vn = "hidePrevented".concat(cn),
  yn = "hidden".concat(cn),
  _n = "resize".concat(cn),
  wn = "click".concat(cn).concat(ln),
  En = "keydown.dismiss".concat(cn),
  On = { backdrop: !0, keyboard: !0, scroll: !1 },
  xn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class An extends B {
  constructor(e, t) {
    super(e, t),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return On;
  }
  static get DefaultType() {
    return xn;
  }
  static get NAME() {
    return "offcanvas";
  }
  toggle(e) {
    return this._isShown ? this.hide() : this.show(e);
  }
  show(e) {
    if (this._isShown) return;
    if (T.trigger(this._element, mn, { relatedTarget: e }).defaultPrevented)
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new an().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(dn),
      this._queueCallback(
        () => {
          (this._config.scroll && !this._config.backdrop) ||
            this._focustrap.activate(),
            this._element.classList.add(un),
            this._element.classList.remove(dn),
            T.trigger(this._element, gn, { relatedTarget: e });
        },
        this._element,
        !0
      );
  }
  hide() {
    if (!this._isShown) return;
    if (T.trigger(this._element, bn).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(pn),
      this._backdrop.hide(),
      this._queueCallback(
        () => {
          this._element.classList.remove(un, pn),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._config.scroll || new an().reset(),
            T.trigger(this._element, yn);
        },
        this._element,
        !0
      );
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const e = Boolean(this._config.backdrop);
    return new Qt({
      className: "offcanvas-backdrop",
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e
        ? () => {
            "static" !== this._config.backdrop
              ? this.hide()
              : T.trigger(this._element, vn);
          }
        : null,
    });
  }
  _initializeFocusTrap() {
    return new tn({ trapElement: this._element });
  }
  _addEventListeners() {
    T.on(this._element, En, (e) => {
      "Escape" === e.key &&
        (this._config.keyboard ? this.hide() : T.trigger(this._element, vn));
    });
  }
  static jQueryInterface(e) {
    return this.each(function () {
      const t = An.getOrCreateInstance(this, e);
      if ("string" == typeof e) {
        if ((0)[0] === t[e] || e.startsWith("_") || "constructor" === e)
          throw new TypeError('No method named "'.concat(e, '"'));
        t[e](this);
      }
    });
  }
}
T.on(document, wn, '[data-bs-toggle="offcanvas"]', function (e) {
  const t = V.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), c(this)))
    return;
  T.one(t, yn, () => {
    a(this) && this.focus();
  });
  const n = V.findOne(hn);
  n && n !== t && An.getInstance(n).hide(),
    An.getOrCreateInstance(t).toggle(this);
}),
  T.on(window, fn, () => {
    for (const e of V.find(hn)) An.getOrCreateInstance(e).show();
  }),
  T.on(window, _n, () => {
    for (const e of V.find("[aria-modal][class*=show][class*=offcanvas-]"))
      "fixed" !== getComputedStyle(e).position &&
        An.getOrCreateInstance(e).hide();
  }),
  H(An),
  h(An);
try {
  new An("#navbar-mobile"), new qt("#langDropdown");
} catch (e) {}
export {
  B,
  T as E,
  tn as F,
  V as S,
  an as a,
  Qt as b,
  a as c,
  h as d,
  H as e,
  p as i,
  f as r,
};
