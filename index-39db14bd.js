import { j as g, a as z, F as Xe, S as Tn, k as In, f as An } from "./library-0b835891.js";
import { j as T, n as Rn, a as Ye, I as Ce, M as On } from "./mui-02912ce2.js";
import { f as wt, u as zn, g as Ln } from "./table-e52be9b1.js";
import { R as et, c as Te, r as c } from "./react-54946355.js";
import { f as xn, b as jn, a as Hn, h as _n, c as Fn } from "./useDictionary-77ad08ad.js";
import { F } from "./icons-6b7f2986.js";
const Vn = ({
  ...e
}) => /* @__PURE__ */ g("td", { css: [{
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  borderBottomWidth: "1px",
  borderRightWidth: "1px",
  padding: "0.375rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, e.column.getIsResizing() && {
  "--tw-border-opacity": "1",
  borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
}], children: wt(e.column.columnDef.cell, e.getContext()) }, e.id), Bn = et.memo(Vn), $n = ({
  onRowDoubleClick: e,
  ...t
}) => /* @__PURE__ */ g("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (n) => e == null ? void 0 : e(t.original, n), children: t.getVisibleCells().map((n) => /* @__PURE__ */ g(Bn, { ...n }, n.id)) }, t.id);
var Bt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", i = 384, r = 512, o = [8595], a = "f063", s = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(Bt);
var $t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", i = 384, r = 512, o = [8593], a = "f062", s = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})($t);
var Ut = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", i = 512, r = 512, o = ["columns"], a = "f0db", s = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(Ut);
var Wt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", i = 576, r = 512, o = ["sort-alpha-desc", "sort-alpha-down-alt"], a = "f881", s = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(Wt);
var Kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", i = 576, r = 512, o = ["sort-alpha-up"], a = "f15e", s = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(Kt);
const yt = (e) => !!e && e[0] === "o", ft = Te.unstable_batchedUpdates || ((e) => e()), ye = (e, t, n = 1e-4) => Math.abs(e - t) < n, Ie = (e, t) => e === !0 || !!(e && e[t]), U = (e, t) => typeof e == "function" ? e(t) : e, Un = "_szhsinMenu", Wn = (e) => e[Un], Oe = (e, t) => (t && Object.keys(t).forEach((n) => {
  const i = e[n], r = t[n];
  typeof r == "function" && i ? e[n] = (...o) => {
    r(...o), i(...o);
  } : e[n] = r;
}), e), Kn = (e) => {
  if (typeof e != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const t = e.trim().split(/\s+/, 4).map(parseFloat), n = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? n : t[1];
  return {
    top: n,
    right: i,
    bottom: isNaN(t[2]) ? n : t[2],
    left: isNaN(t[3]) ? i : t[3]
  };
}, ut = (e) => {
  for (; e; ) {
    if (e = e.parentNode, !e || e === document.body || !e.parentNode)
      return;
    const {
      overflow: t,
      overflowX: n,
      overflowY: i
    } = getComputedStyle(e);
    if (/auto|scroll|overlay|hidden/.test(t + i + n))
      return e;
  }
};
function Ct(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function zt(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t)
      return n;
  return -1;
}
const me = ({
  block: e,
  element: t,
  modifiers: n,
  className: i
}) => c.useMemo(() => {
  const r = t ? `${e}__${t}` : e;
  let o = r;
  n && Object.keys(n).forEach((s) => {
    const f = n[s];
    f && (o += ` ${r}--${f === !0 ? s : `${s}-${f}`}`);
  });
  let a = typeof i == "function" ? i(n) : i;
  return typeof a == "string" && (a = a.trim(), a && (o += ` ${a}`)), o;
}, [e, t, n, i]), Xn = "szh-menu-container", ge = "szh-menu", Yn = "arrow", Xt = "item", Gn = "divider", Zn = "submenu", Yt = /* @__PURE__ */ c.createContext(), St = /* @__PURE__ */ c.createContext({}), ht = /* @__PURE__ */ c.createContext({}), Gt = /* @__PURE__ */ c.createContext({}), qn = /* @__PURE__ */ c.createContext({}), tt = /* @__PURE__ */ c.createContext({}), j = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), D = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), Ae = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), Se = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), Jn = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), dt = "absolute", Zt = "presentation", Mt = "menuitem", Lt = {
  "aria-hidden": !0,
  role: Mt
}, Qn = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: i,
  isOpen: r,
  theming: o,
  transition: a,
  onClose: s
}) => {
  const f = Ie(a, "item"), h = ({
    key: m
  }) => {
    switch (m) {
      case j.ESC:
        U(s, {
          key: m,
          reason: Ae.CANCEL
        });
        break;
    }
  }, u = (m) => {
    r && !m.currentTarget.contains(m.relatedTarget) && U(s, {
      reason: Ae.BLUR
    });
  };
  return /* @__PURE__ */ T.jsx("div", {
    ...Oe({
      onKeyDown: h,
      onBlur: u
    }, n),
    className: me({
      block: Xn,
      modifiers: c.useMemo(() => ({
        theme: o,
        itemTransition: f
      }), [o, f]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: i
  });
}, ei = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, i, r) => {
      t ? e || (e = setTimeout(() => {
        e = 0, i();
      }, n)) : r == null || r();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, ti = (e, t) => {
  const [n, i] = c.useState(), o = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, a = c.useCallback((f, h) => {
    const {
      items: u
    } = o;
    if (!f)
      o.items = [];
    else if (h)
      u.push(f);
    else {
      const m = u.indexOf(f);
      m > -1 && (u.splice(m, 1), f.contains(document.activeElement) && (t.current.focus(), i()));
    }
    o.hoverIndex = -1, o.sorted = !1;
  }, [o, t]), s = c.useCallback((f, h, u) => {
    const {
      items: m,
      hoverIndex: C
    } = o, b = () => {
      if (o.sorted)
        return;
      const p = e.current.querySelectorAll(".szh-menu__item");
      m.sort((y, v) => zt(p, y) - zt(p, v)), o.sorted = !0;
    };
    let l = -1, d;
    switch (f) {
      case D.RESET:
        break;
      case D.SET:
        d = h;
        break;
      case D.UNSET:
        d = (p) => p === h ? void 0 : p;
        break;
      case D.FIRST:
        b(), l = 0, d = m[l];
        break;
      case D.LAST:
        b(), l = m.length - 1, d = m[l];
        break;
      case D.SET_INDEX:
        b(), l = u, d = m[l];
        break;
      case D.INCREASE:
        b(), l = C, l < 0 && (l = m.indexOf(h)), l++, l >= m.length && (l = 0), d = m[l];
        break;
      case D.DECREASE:
        b(), l = C, l < 0 && (l = m.indexOf(h)), l--, l < 0 && (l = m.length - 1), d = m[l];
        break;
    }
    d || (l = -1), i(d), o.hoverIndex = l;
  }, [e, o]);
  return {
    hoverItem: n,
    dispatch: s,
    updateItems: a
  };
}, ni = (e, t, n, i) => {
  const r = t.current.getBoundingClientRect(), o = e.current.getBoundingClientRect(), a = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), s = Kn(i), f = (l) => l + o.left - a.left - s.left, h = (l) => l + o.left + r.width - a.right + s.right, u = (l) => l + o.top - a.top - s.top, m = (l) => l + o.top + r.height - a.bottom + s.bottom;
  return {
    menuRect: r,
    containerRect: o,
    getLeftOverflow: f,
    getRightOverflow: h,
    getTopOverflow: u,
    getBottomOverflow: m,
    confineHorizontally: (l) => {
      let d = f(l);
      if (d < 0)
        l -= d;
      else {
        const p = h(l);
        p > 0 && (l -= p, d = f(l), d < 0 && (l -= d));
      }
      return l;
    },
    confineVertically: (l) => {
      let d = u(l);
      if (d < 0)
        l -= d;
      else {
        const p = m(l);
        p > 0 && (l -= p, d = u(l), d < 0 && (l -= d));
      }
      return l;
    }
  };
}, ii = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: i,
  menuRect: r
}) => {
  let o = n.top - i.top - t + n.height / 2;
  const a = e.current.offsetHeight * 1.25;
  return o = Math.max(a, o), o = Math.min(o, r.height - a), o;
}, oi = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: i,
  placeLeftX: r,
  placeRightX: o,
  getLeftOverflow: a,
  getRightOverflow: s,
  confineHorizontally: f,
  confineVertically: h,
  arrowRef: u,
  arrow: m,
  direction: C,
  position: b
}) => {
  let l = C, d = i;
  b !== "initial" && (d = h(d), b === "anchor" && (d = Math.min(d, e.bottom - t.top), d = Math.max(d, e.top - t.top - n.height)));
  let p, y, v;
  return l === "left" ? (p = r, b !== "initial" && (y = a(p), y < 0 && (v = s(o), (v <= 0 || -y > v) && (p = o, l = "right")))) : (p = o, b !== "initial" && (v = s(p), v > 0 && (y = a(r), (y >= 0 || -y < v) && (p = r, l = "left")))), b === "auto" && (p = f(p)), {
    arrowY: m ? ii({
      menuY: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: p,
    y: d,
    computedDirection: l
  };
}, ri = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: i,
  menuRect: r
}) => {
  let o = n.left - i.left - t + n.width / 2;
  const a = e.current.offsetWidth * 1.25;
  return o = Math.max(a, o), o = Math.min(o, r.width - a), o;
}, ai = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: i,
  placeTopY: r,
  placeBottomY: o,
  getTopOverflow: a,
  getBottomOverflow: s,
  confineHorizontally: f,
  confineVertically: h,
  arrowRef: u,
  arrow: m,
  direction: C,
  position: b
}) => {
  let l = C === "top" ? "top" : "bottom", d = i;
  b !== "initial" && (d = f(d), b === "anchor" && (d = Math.min(d, e.right - t.left), d = Math.max(d, e.left - t.left - n.width)));
  let p, y, v;
  return l === "top" ? (p = r, b !== "initial" && (y = a(p), y < 0 && (v = s(o), (v <= 0 || -y > v) && (p = o, l = "bottom")))) : (p = o, b !== "initial" && (v = s(p), v > 0 && (y = a(r), (y >= 0 || -y < v) && (p = r, l = "top")))), b === "auto" && (p = h(p)), {
    arrowX: m ? ri({
      menuX: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: d,
    y: p,
    computedDirection: l
  };
}, si = ({
  arrow: e,
  align: t,
  direction: n,
  gap: i,
  shift: r,
  position: o,
  anchorRect: a,
  arrowRef: s,
  positionHelpers: f
}) => {
  const {
    menuRect: h,
    containerRect: u
  } = f, m = n === "left" || n === "right";
  let C = m ? i : r, b = m ? r : i;
  if (e) {
    const k = s.current;
    m ? C += k.offsetWidth : b += k.offsetHeight;
  }
  const l = a.left - u.left - h.width - C, d = a.right - u.left + C, p = a.top - u.top - h.height - b, y = a.bottom - u.top + b;
  let v, w;
  t === "end" ? (v = a.right - u.left - h.width, w = a.bottom - u.top - h.height) : t === "center" ? (v = a.left - u.left - (h.width - a.width) / 2, w = a.top - u.top - (h.height - a.height) / 2) : (v = a.left - u.left, w = a.top - u.top), v += C, w += b;
  const N = {
    ...f,
    anchorRect: a,
    placeLeftX: l,
    placeRightX: d,
    placeLeftorRightY: w,
    placeTopY: p,
    placeBottomY: y,
    placeToporBottomX: v,
    arrowRef: s,
    arrow: e,
    direction: n,
    position: o
  };
  switch (n) {
    case "left":
    case "right":
      return oi(N);
    case "top":
    case "bottom":
    default:
      return ai(N);
  }
}, We = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect;
function xt(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const nt = (e, t) => c.useMemo(() => e ? t ? (n) => {
  xt(e, n), xt(t, n);
} : e : t, [e, t]), jt = -9999, qt = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: i,
  arrowProps: r = {},
  anchorPoint: o,
  anchorRef: a,
  containerRef: s,
  containerProps: f,
  focusProps: h,
  externalRef: u,
  parentScrollingRef: m,
  align: C = "start",
  direction: b = "bottom",
  position: l = "auto",
  overflow: d = "visible",
  setDownOverflow: p,
  repositionFlag: y,
  captureFocus: v = !0,
  state: w,
  endTransition: N,
  isDisabled: k,
  menuItemFocus: H,
  gap: L = 0,
  shift: V = 0,
  children: q,
  onClose: I,
  ...M
}) => {
  const [A, ce] = c.useState({
    x: jt,
    y: jt
  }), [Me, J] = c.useState({}), [R, le] = c.useState(), [B, ze] = c.useState(b), [Y] = c.useState(ei), [Pe, Ne] = c.useReducer((S) => S + 1, 1), {
    transition: Le,
    boundingBoxRef: Ee,
    boundingBoxPadding: xe,
    rootMenuRef: je,
    rootAnchorRef: ue,
    scrollNodesRef: it,
    reposition: He,
    viewScroll: ke,
    submenuCloseDelay: ot
  } = c.useContext(tt), {
    submenuCtx: _e,
    reposSubmenu: O = y
  } = c.useContext(ht), $ = c.useRef(null), Fe = c.useRef(), Pt = c.useRef(), Nt = c.useRef(!1), Ve = c.useRef({
    width: 0,
    height: 0
  }), Et = c.useRef(() => {
  }), {
    hoverItem: rt,
    dispatch: W,
    updateItems: Be
  } = ti($, Fe), K = yt(w), kt = Ie(Le, "open"), Dt = Ie(Le, "close"), G = it.current, bn = (S) => {
    switch (S.key) {
      case j.HOME:
        W(D.FIRST);
        break;
      case j.END:
        W(D.LAST);
        break;
      case j.UP:
        W(D.DECREASE, rt);
        break;
      case j.DOWN:
        W(D.INCREASE, rt);
        break;
      case j.SPACE:
        S.target && S.target.className.indexOf(ge) !== -1 && S.preventDefault();
        return;
      default:
        return;
    }
    S.preventDefault(), S.stopPropagation();
  }, wn = () => {
    w === "closing" && le(), U(N);
  }, yn = (S) => {
    S.stopPropagation(), Y.on(ot, () => {
      W(D.RESET), Fe.current.focus();
    });
  }, Cn = (S) => {
    S.target === S.currentTarget && Y.off();
  }, de = c.useCallback((S) => {
    var _;
    const Q = a ? (_ = a.current) == null ? void 0 : _.getBoundingClientRect() : o ? {
      left: o.x,
      right: o.x,
      top: o.y,
      bottom: o.y,
      width: 0,
      height: 0
    } : null;
    if (!Q)
      return;
    G.menu || (G.menu = (Ee ? Ee.current : ut(je.current)) || window);
    const X = ni(s, $, G.menu, xe);
    let {
      arrowX: x,
      arrowY: ve,
      x: pe,
      y: ie,
      computedDirection: ct
    } = si({
      arrow: i,
      align: C,
      direction: b,
      gap: L,
      shift: V,
      position: l,
      anchorRect: Q,
      arrowRef: Pt,
      positionHelpers: X
    });
    const {
      menuRect: Rt
    } = X;
    let be = Rt.height;
    if (!S && d !== "visible") {
      const {
        getTopOverflow: kn,
        getBottomOverflow: Dn
      } = X;
      let we, lt;
      const Ot = Ve.current.height, $e = Dn(ie);
      if ($e > 0 || ye($e, 0) && ye(be, Ot))
        we = be - $e, lt = $e;
      else {
        const De = kn(ie);
        (De < 0 || ye(De, 0) && ye(be, Ot)) && (we = be + De, lt = 0 - De, we >= 0 && (ie -= De));
      }
      we >= 0 ? (be = we, le({
        height: we,
        overflowAmt: lt
      })) : le();
    }
    i && J({
      x,
      y: ve
    }), ce({
      x: pe,
      y: ie
    }), ze(ct), Ve.current = {
      width: Rt.width,
      height: be
    };
  }, [i, C, xe, b, L, V, l, d, o, a, s, Ee, je, G]);
  We(() => {
    K && (de(), Nt.current && Ne()), Nt.current = K, Et.current = de;
  }, [K, de, O]), We(() => {
    R && !p && ($.current.scrollTop = 0);
  }, [R, p]), We(() => Be, [Be]), c.useEffect(() => {
    let {
      menu: S
    } = G;
    if (!K || !S)
      return;
    if (S = S.addEventListener ? S : window, !G.anchors) {
      G.anchors = [];
      let x = ut(ue && ue.current);
      for (; x && x !== S; )
        G.anchors.push(x), x = ut(x);
    }
    let _ = ke;
    if (G.anchors.length && _ === "initial" && (_ = "auto"), _ === "initial")
      return;
    const Q = () => {
      _ === "auto" ? ft(() => de(!0)) : U(I, {
        reason: Ae.SCROLL
      });
    }, X = G.anchors.concat(ke !== "initial" ? S : []);
    return X.forEach((x) => x.addEventListener("scroll", Q)), () => X.forEach((x) => x.removeEventListener("scroll", Q));
  }, [ue, G, K, I, ke, de]);
  const Tt = !!R && R.overflowAmt > 0;
  c.useEffect(() => {
    if (Tt || !K || !m)
      return;
    const S = () => ft(de), _ = m.current;
    return _.addEventListener("scroll", S), () => _.removeEventListener("scroll", S);
  }, [K, Tt, m, de]), c.useEffect(() => {
    if (typeof ResizeObserver != "function" || He === "initial")
      return;
    const S = new ResizeObserver(([Q]) => {
      const {
        borderBoxSize: X,
        target: x
      } = Q;
      let ve, pe;
      if (X) {
        const {
          inlineSize: ie,
          blockSize: ct
        } = X[0] || X;
        ve = ie, pe = ct;
      } else {
        const ie = x.getBoundingClientRect();
        ve = ie.width, pe = ie.height;
      }
      ve === 0 || pe === 0 || ye(ve, Ve.current.width, 1) && ye(pe, Ve.current.height, 1) || Te.flushSync(() => {
        Et.current(), Ne();
      });
    }), _ = $.current;
    return S.observe(_, {
      box: "border-box"
    }), () => S.unobserve(_);
  }, [He]), c.useEffect(() => {
    if (!K) {
      W(D.RESET), Dt || le();
      return;
    }
    const {
      position: S,
      alwaysUpdate: _
    } = H || {}, Q = () => {
      S === Se.FIRST ? W(D.FIRST) : S === Se.LAST ? W(D.LAST) : S >= -1 && W(D.SET_INDEX, void 0, S);
    };
    if (_)
      Q();
    else if (v) {
      const X = setTimeout(() => {
        const x = $.current;
        x && !x.contains(document.activeElement) && (Fe.current.focus(), Q());
      }, kt ? 170 : 100);
      return () => clearTimeout(X);
    }
  }, [K, kt, Dt, v, H, W]);
  const Sn = c.useMemo(() => ({
    isParentOpen: K,
    submenuCtx: Y,
    dispatch: W,
    updateItems: Be
  }), [K, Y, W, Be]);
  let at, st;
  R && (p ? st = R.overflowAmt : at = R.height);
  const Mn = c.useMemo(() => ({
    reposSubmenu: Pe,
    submenuCtx: Y,
    overflow: d,
    overflowAmt: st,
    parentMenuRef: $,
    parentDir: B
  }), [Pe, Y, d, st, B]), Pn = at >= 0 ? {
    maxHeight: at,
    overflow: d
  } : void 0, It = c.useMemo(() => ({
    state: w,
    dir: B
  }), [w, B]), Nn = c.useMemo(() => ({
    dir: B
  }), [B]), En = me({
    block: ge,
    element: Yn,
    modifiers: Nn,
    className: r.className
  }), At = /* @__PURE__ */ T.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ct(k),
    ...Oe({
      onPointerEnter: _e == null ? void 0 : _e.off,
      onPointerMove: yn,
      onPointerLeave: Cn,
      onKeyDown: bn,
      onAnimationEnd: wn
    }, M),
    ref: nt(u, $),
    className: me({
      block: ge,
      modifiers: It,
      className: t
    }),
    style: {
      ...n,
      ...Pn,
      margin: 0,
      display: w === "closed" ? "none" : void 0,
      position: dt,
      left: A.x,
      top: A.y
    },
    children: [/* @__PURE__ */ T.jsx("li", {
      tabIndex: -1,
      style: {
        position: dt,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: Fe,
      ...Lt,
      ...h
    }), i && /* @__PURE__ */ T.jsx("li", {
      ...Lt,
      ...r,
      className: En,
      style: {
        display: "block",
        position: dt,
        left: Me.x,
        top: Me.y,
        ...r.style
      },
      ref: Pt
    }), /* @__PURE__ */ T.jsx(ht.Provider, {
      value: Mn,
      children: /* @__PURE__ */ T.jsx(St.Provider, {
        value: Sn,
        children: /* @__PURE__ */ T.jsx(Yt.Provider, {
          value: rt,
          children: U(q, It)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ T.jsx(Qn, {
    ...f,
    isOpen: K,
    children: At
  }) : At;
}, ci = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: i,
  initialMounted: r,
  unmountOnClose: o,
  transition: a,
  transitionTimeout: s,
  boundingBoxRef: f,
  boundingBoxPadding: h,
  reposition: u = "auto",
  submenuOpenDelay: m = 300,
  submenuCloseDelay: C = 150,
  viewScroll: b = "initial",
  portal: l,
  theming: d,
  onItemClick: p,
  ...y
}, v) {
  const w = c.useRef(null), N = c.useRef({}), {
    anchorRef: k,
    state: H,
    onClose: L
  } = y, V = c.useMemo(() => ({
    initialMounted: r,
    unmountOnClose: o,
    transition: a,
    transitionTimeout: s,
    boundingBoxRef: f,
    boundingBoxPadding: h,
    rootMenuRef: w,
    rootAnchorRef: k,
    scrollNodesRef: N,
    reposition: u,
    viewScroll: b,
    submenuOpenDelay: m,
    submenuCloseDelay: C
  }), [r, o, a, s, k, f, h, u, b, m, C]), q = c.useMemo(() => ({
    handleClick(M, A) {
      M.stopPropagation || U(p, M);
      let ce = M.keepOpen;
      ce === void 0 && (ce = A && M.key === j.SPACE), ce || U(L, {
        value: M.value,
        key: M.key,
        reason: Ae.CLICK
      });
    },
    handleClose(M) {
      U(L, {
        key: M,
        reason: Ae.CLICK
      });
    }
  }), [p, L]);
  if (!H)
    return null;
  const I = /* @__PURE__ */ T.jsx(tt.Provider, {
    value: V,
    children: /* @__PURE__ */ T.jsx(Gt.Provider, {
      value: q,
      children: /* @__PURE__ */ T.jsx(qt, {
        ...y,
        ariaLabel: t || "Menu",
        externalRef: v,
        containerRef: w,
        containerProps: {
          className: n,
          containerRef: w,
          containerProps: i,
          theming: d,
          transition: a,
          onClose: L
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ Te.createPortal(I, document.body) : l ? l.target ? /* @__PURE__ */ Te.createPortal(I, l.target) : l.stablePosition ? null : I : I;
}), gt = 0, mt = 1, Ge = 2, Ze = 3, qe = 4, li = 5, Jt = 6, ui = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Qt = (e) => ({
  _s: e,
  status: ui[e],
  isEnter: e < Ze,
  isMounted: e !== Jt,
  isResolved: e === Ge || e > qe
}), vt = (e) => e ? Jt : li, di = (e, t) => {
  switch (e) {
    case mt:
    case gt:
      return Ge;
    case qe:
    case Ze:
      return vt(t);
  }
}, fi = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], hi = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), Ht = (e, t, n, i, r) => {
  clearTimeout(i.current);
  const o = Qt(e);
  t(o), n.current = o, r && r({
    current: o
  });
}, gi = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: i,
  timeout: r,
  initialEntered: o,
  mountOnEnter: a,
  unmountOnExit: s,
  onStateChange: f
} = {}) => {
  const [h, u] = c.useState(() => Qt(o ? Ge : vt(a))), m = c.useRef(h), C = c.useRef(), [b, l] = fi(r), d = c.useCallback(() => {
    const y = di(m.current._s, s);
    y && Ht(y, u, m, C, f);
  }, [f, s]), p = c.useCallback((y) => {
    const v = (N) => {
      switch (Ht(N, u, m, C, f), N) {
        case mt:
          b >= 0 && (C.current = setTimeout(d, b));
          break;
        case qe:
          l >= 0 && (C.current = setTimeout(d, l));
          break;
        case gt:
        case Ze:
          C.current = hi(v, N);
          break;
      }
    }, w = m.current.isEnter;
    typeof y != "boolean" && (y = !w), y ? !w && v(e ? n ? gt : mt : Ge) : w && v(t ? i ? Ze : qe : vt(s));
  }, [d, f, e, t, n, i, b, l, s]);
  return c.useEffect(() => () => clearTimeout(C.current), []), [h, p, d];
}, mi = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: i,
  transitionTimeout: r = 500
} = {}) => {
  const [{
    status: o
  }, a, s] = gi({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: r,
    enter: Ie(i, "open"),
    exit: Ie(i, "close")
  });
  return [{
    state: Jn[o],
    endTransition: s
  }, a];
}, en = (e) => {
  const [t, n] = mi(e), [i, r] = c.useState(), o = (a, s) => {
    r({
      position: a,
      alwaysUpdate: s
    }), n(!0);
  };
  return [{
    menuItemFocus: i,
    ...t
  }, n, o];
}, vi = (e, t) => {
  const [n] = c.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (i) => n.v ? n.v = !1 : t(!0, i)
  };
}, tn = (e, t) => {
  const n = c.useRef(t);
  c.useEffect(() => {
    n.current !== t && U(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, pi = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: i,
  menuButton: r,
  instanceRef: o,
  onMenuChange: a,
  ...s
}, f) {
  const [h, u, m] = en(s), {
    state: C
  } = h, b = yt(C), l = c.useRef(null), d = vi(C, (k, H) => m(H.detail ? void 0 : Se.FIRST)), p = c.useCallback((k) => {
    u(!1), k.key && l.current.focus();
  }, [u]), y = (k) => {
    switch (k.key) {
      case j.UP:
        m(Se.LAST);
        break;
      case j.DOWN:
        m(Se.FIRST);
        break;
      default:
        return;
    }
    k.preventDefault();
  }, v = U(r, {
    open: b
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const w = {
    ref: nt(v.ref, l),
    ...Oe({
      onKeyDown: y,
      ...d
    }, v.props)
  };
  Wn(v.type) === "MenuButton" && (w.isOpen = b);
  const N = /* @__PURE__ */ c.cloneElement(v, w);
  return tn(a, b), c.useImperativeHandle(o, () => ({
    openMenu: m,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ T.jsxs(c.Fragment, {
    children: [N, /* @__PURE__ */ T.jsx(ci, {
      ...s,
      ...h,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: l,
      ref: f,
      onClose: p
    })]
  });
}), nn = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), i = /* @__PURE__ */ c.forwardRef((r, o) => {
    const a = c.useRef(null);
    return /* @__PURE__ */ T.jsx(n, {
      ...r,
      itemRef: a,
      externalRef: o,
      isHovering: c.useContext(Yt) === a.current
    });
  });
  return i.displayName = `WithHovering(${e})`, i;
}, on = (e, t, n) => {
  We(() => {
    if (e)
      return;
    const i = t.current;
    return n(i, !0), () => {
      n(i);
    };
  }, [e, t, n]);
}, bi = /* @__PURE__ */ nn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: i,
  direction: r,
  label: o,
  openTrigger: a,
  onMenuChange: s,
  isHovering: f,
  instanceRef: h,
  itemRef: u,
  captureFocus: m,
  repositionFlag: C,
  itemProps: b = {},
  ...l
}) {
  const d = c.useContext(tt), {
    rootMenuRef: p,
    submenuOpenDelay: y,
    submenuCloseDelay: v
  } = d, {
    parentMenuRef: w,
    parentDir: N,
    overflow: k
  } = c.useContext(ht), {
    isParentOpen: H,
    submenuCtx: L,
    dispatch: V,
    updateItems: q
  } = c.useContext(St), I = k !== "visible", [M, A, ce] = en(d), {
    state: Me
  } = M, J = !!i, R = yt(Me), le = c.useRef(null), [B] = c.useState({
    v: 0
  }), ze = () => {
    L.off(), B.v && (clearTimeout(B.v), B.v = 0);
  }, Y = (...O) => {
    ze(), Pe(), !J && ce(...O);
  }, Pe = () => !f && !J && V(D.SET, u.current), Ne = (O) => {
    Pe(), a || (B.v = setTimeout(() => ft(Y), Math.max(O, 0)));
  }, Le = (O) => {
    J || (O.stopPropagation(), !(B.v || R) && L.on(v, () => Ne(y - v), () => Ne(y)));
  }, Ee = () => {
    ze(), R || V(D.UNSET, u.current);
  }, xe = (O) => {
    if (f)
      switch (O.key) {
        case j.ENTER:
          O.preventDefault();
        case j.SPACE:
        case j.RIGHT:
          a !== "none" && Y(Se.FIRST);
      }
  }, je = (O) => {
    let $ = !1;
    switch (O.key) {
      case j.LEFT:
        R && (u.current.focus(), A(!1), $ = !0);
        break;
      case j.RIGHT:
        R || ($ = !0);
        break;
    }
    $ && (O.preventDefault(), O.stopPropagation());
  };
  on(J, u, q), tn(s, R), c.useEffect(() => L.toggle(R), [L, R]), c.useEffect(() => () => clearTimeout(B.v), [B]), c.useEffect(() => {
    f && H ? u.current.focus() : A(!1);
  }, [f, H, A, u]), c.useImperativeHandle(h, () => ({
    openMenu: (...O) => {
      H && Y(...O);
    },
    closeMenu: () => {
      R && (u.current.focus(), A(!1));
    }
  }));
  const ue = c.useMemo(() => ({
    open: R,
    hover: f,
    disabled: J,
    submenu: !0
  }), [R, f, J]), {
    ref: it,
    className: He,
    ...ke
  } = b, ot = Oe({
    onPointerEnter: L.off,
    onPointerMove: Le,
    onPointerLeave: Ee,
    onKeyDown: xe,
    onClick: () => a !== "none" && Y()
  }, ke), _e = () => {
    const O = /* @__PURE__ */ T.jsx(qt, {
      ...l,
      ...M,
      ariaLabel: t || (typeof o == "string" ? o : "Submenu"),
      anchorRef: u,
      containerRef: I ? p : le,
      direction: r || (N === "right" || N === "left" ? N : "right"),
      parentScrollingRef: I && w,
      isDisabled: J
    }), $ = p.current;
    return I && $ ? /* @__PURE__ */ Te.createPortal(O, $) : O;
  };
  return /* @__PURE__ */ T.jsxs("li", {
    className: me({
      block: ge,
      element: Zn,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Zt,
    ref: le,
    onKeyDown: je,
    children: [/* @__PURE__ */ T.jsx("div", {
      role: Mt,
      "aria-haspopup": !0,
      "aria-expanded": R,
      ...Ct(J, f),
      ...ot,
      ref: nt(it, u),
      className: me({
        block: ge,
        element: Xt,
        modifiers: ue,
        className: He
      }),
      children: c.useMemo(() => U(o, ue), [o, ue])
    }), Me && _e()]
  });
}), wi = (e, t, n, i) => {
  const {
    submenuCloseDelay: r
  } = c.useContext(tt), {
    isParentOpen: o,
    submenuCtx: a,
    dispatch: s,
    updateItems: f
  } = c.useContext(St), h = () => {
    !n && !i && s(D.SET, e.current);
  }, u = () => {
    !i && s(D.UNSET, e.current);
  }, m = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && u();
  }, C = (l) => {
    i || (l.stopPropagation(), a.on(r, h, h));
  }, b = (l, d) => {
    a.off(), !d && u();
  };
  return on(i, e, f), c.useEffect(() => {
    n && o && t.current && t.current.focus();
  }, [t, n, o]), {
    setHover: h,
    onBlur: m,
    onPointerMove: C,
    onPointerLeave: b
  };
}, Ue = /* @__PURE__ */ nn("MenuItem", function({
  className: t,
  value: n,
  href: i,
  type: r,
  checked: o,
  disabled: a,
  children: s,
  onClick: f,
  isHovering: h,
  itemRef: u,
  externalRef: m,
  ...C
}) {
  const b = !!a, {
    setHover: l,
    ...d
  } = wi(u, u, h, b), p = c.useContext(Gt), y = c.useContext(qn), v = r === "radio", w = r === "checkbox", N = !!i && !b && !v && !w, k = v ? y.value === n : w ? !!o : !1, H = (M) => {
    if (b) {
      M.stopPropagation(), M.preventDefault();
      return;
    }
    const A = {
      value: n,
      syntheticEvent: M
    };
    M.key !== void 0 && (A.key = M.key), w && (A.checked = !k), v && (A.name = y.name), U(f, A), v && U(y.onRadioChange, A), p.handleClick(A, w || v);
  }, L = (M) => {
    if (h)
      switch (M.key) {
        case j.ENTER:
          M.preventDefault();
        case j.SPACE:
          N ? u.current.click() : H(M);
      }
  }, V = c.useMemo(() => ({
    type: r,
    disabled: b,
    hover: h,
    checked: k,
    anchor: N
  }), [r, b, h, k, N]), q = Oe({
    ...d,
    onPointerDown: l,
    onKeyDown: L,
    onClick: H
  }, C), I = {
    role: v ? "menuitemradio" : w ? "menuitemcheckbox" : Mt,
    "aria-checked": v || w ? k : void 0,
    ...Ct(b, h),
    ...q,
    ref: nt(m, u),
    className: me({
      block: ge,
      element: Xt,
      modifiers: V,
      className: t
    }),
    children: c.useMemo(() => U(s, V), [s, V])
  };
  return N ? /* @__PURE__ */ T.jsx("li", {
    role: Zt,
    children: /* @__PURE__ */ T.jsx("a", {
      href: i,
      ...I
    })
  }) : /* @__PURE__ */ T.jsx("li", {
    ...I
  });
}), yi = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, i) {
  return /* @__PURE__ */ T.jsx("li", {
    role: "separator",
    ...n,
    ref: i,
    className: me({
      block: ge,
      element: Gn,
      className: t
    })
  });
}));
const Ci = "szh-menu", Si = "item", Mi = (e) => (t) => (n) => {
  let i = `.${e}`;
  return t && (i += `__${t}`), n && (i += `--${n}`), i;
}, rn = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((i) => {
    const r = i.split("-").reduce((o, a) => `${o}${a[0].toUpperCase()}${a.slice(1)}`);
    Object.defineProperty(n, r, {
      value: e(i),
      enumerable: !0
    });
  }), n;
}, Pi = ["dir-left", "dir-right", "dir-top", "dir-bottom"], an = /* @__PURE__ */ Mi(Ci);
[...Pi];
const _t = /* @__PURE__ */ rn(/* @__PURE__ */ an(Si), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), Ni = Rn(pi)`
  ${_t.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${_t.typeCheckbox} {
      ${{
  paddingLeft: "2rem"
}}
    }
    .svg-inline--fa {
      ${{
  "--tw-text-opacity": "1",
  color: "rgb(75 85 99 / var(--tw-text-opacity))"
}}
    }
  }
`, Ei = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: i
  } = n, {
    column: r
  } = t, o = i.getVisibleLeafColumns().length, a = [];
  return r.getCanSort() && a.push(/* @__PURE__ */ z(Ue, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ g(F, { icon: Kt.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ z(Ue, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ g(F, { icon: Wt.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && a.push(/* @__PURE__ */ z(Ue, { disabled: o === 1, onClick: () => t.column.toggleVisibility(), children: [
    /* @__PURE__ */ g(F, { icon: xn.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ z(Ni, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    a.length > 0 && /* @__PURE__ */ z(Xe, { children: [
      a,
      /* @__PURE__ */ g(yi, {})
    ] }),
    /* @__PURE__ */ g(bi, { label: /* @__PURE__ */ z(Xe, { children: [
      /* @__PURE__ */ g(F, { icon: Ut.faTableColumns }),
      "Колонки"
    ] }), children: i.getAllLeafColumns().filter((s) => s.getCanHide()).map((s) => /* @__PURE__ */ g(Ue, { type: "checkbox", checked: s.getIsVisible(), disabled: o === 1 && s.getIsVisible(), onClick: (f) => {
      f.keepOpen = !0, s.toggleVisibility();
    }, children: wt(s.columnDef.header, n) }, s.id)) })
  ] });
}, ki = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: i,
    getContext: r,
    getResizeHandler: o
  } = e;
  return /* @__PURE__ */ z("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, Ye`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ z("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Ye`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ z("div", { onClick: () => {
        if (n.getCanSort())
          return n.toggleSorting();
      }, css: [n.getCanSort() ? {
        cursor: "pointer"
      } : null, {
        position: "relative",
        flex: "1 1 0%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem"
      }], children: [
        i ? null : wt(n.columnDef.header, r()),
        " ",
        n.getIsSorted() === "asc" && /* @__PURE__ */ g(F, { icon: $t.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ g(F, { icon: Bt.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ g(Ei, { header: e, children: ({
        open: a
      }) => /* @__PURE__ */ g("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, a ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ g(F, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: jn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ g("div", { css: [{
      position: "absolute",
      right: "-4px",
      top: "0px",
      zIndex: "10",
      height: "100%",
      width: "7px",
      cursor: "col-resize",
      ":hover": {
        backgroundColor: "rgb(141 148 205 / 0.3)"
      }
    }, n.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: o(), onTouchStart: o(), className: "resizer" })
  ] });
}, Di = ({
  ...e
}) => /* @__PURE__ */ g("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ g("tr", { children: t.headers.map((n) => /* @__PURE__ */ g(ki, { ...n }, n.id)) }, t.id)) });
var sn = {}, cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-info", i = 512, r = 512, o = ["info-circle"], a = "f05a", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faCircleInfo = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(cn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = cn;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faInfoCircle = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(sn);
var ln = {}, un = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-xmark", i = 512, r = 512, o = [61532, "times-circle", "xmark-circle"], a = "f057", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faCircleXmark = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(un);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = un;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faTimesCircle = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(ln);
var dn = {}, fn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-check", i = 512, r = 512, o = [61533, "check-circle"], a = "f058", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faCircleCheck = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(fn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = fn;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faCheckCircle = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(dn);
const oe = Symbol.for("@ts-pattern/matcher"), Ti = Symbol.for("@ts-pattern/isVariadic"), Je = "@ts-pattern/anonymous-select-key", pt = (e) => !!(e && typeof e == "object"), Ke = (e) => e && !!e[oe], ne = (e, t, n) => {
  if (Ke(e)) {
    const i = e[oe](), { matched: r, selections: o } = i.match(t);
    return r && o && Object.keys(o).forEach((a) => n(a, o[a])), r;
  }
  if (pt(e)) {
    if (!pt(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let i = [], r = [], o = [];
      for (const a of e.keys()) {
        const s = e[a];
        Ke(s) && s[Ti] ? o.push(s) : o.length ? r.push(s) : i.push(s);
      }
      if (o.length) {
        if (o.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < i.length + r.length)
          return !1;
        const a = t.slice(0, i.length), s = r.length === 0 ? [] : t.slice(-r.length), f = t.slice(i.length, r.length === 0 ? 1 / 0 : -r.length);
        return i.every((h, u) => ne(h, a[u], n)) && r.every((h, u) => ne(h, s[u], n)) && (o.length === 0 || ne(o[0], f, n));
      }
      return e.length === t.length && e.every((a, s) => ne(a, t[s], n));
    }
    return Object.keys(e).every((i) => {
      const r = e[i];
      return (i in t || Ke(o = r) && o[oe]().matcherType === "optional") && ne(r, t[i], n);
      var o;
    });
  }
  return Object.is(t, e);
}, se = (e) => {
  var t, n, i;
  return pt(e) ? Ke(e) ? (t = (n = (i = e[oe]()).getSelectionKeys) == null ? void 0 : n.call(i)) != null ? t : [] : Array.isArray(e) ? Re(e, se) : Re(Object.values(e), se) : [];
}, Re = (e, t) => e.reduce((n, i) => n.concat(t(i)), []);
function Z(e) {
  return Object.assign(e, { optional: () => Ii(e), and: (t) => E(e, t), or: (t) => Ai(e, t), select: (t) => t === void 0 ? Ft(e) : Ft(t, e) });
}
function Ii(e) {
  return Z({ [oe]: () => ({ match: (t) => {
    let n = {};
    const i = (r, o) => {
      n[r] = o;
    };
    return t === void 0 ? (se(e).forEach((r) => i(r, void 0)), { matched: !0, selections: n }) : { matched: ne(e, t, i), selections: n };
  }, getSelectionKeys: () => se(e), matcherType: "optional" }) });
}
function E(...e) {
  return Z({ [oe]: () => ({ match: (t) => {
    let n = {};
    const i = (r, o) => {
      n[r] = o;
    };
    return { matched: e.every((r) => ne(r, t, i)), selections: n };
  }, getSelectionKeys: () => Re(e, se), matcherType: "and" }) });
}
function Ai(...e) {
  return Z({ [oe]: () => ({ match: (t) => {
    let n = {};
    const i = (r, o) => {
      n[r] = o;
    };
    return Re(e, se).forEach((r) => i(r, void 0)), { matched: e.some((r) => ne(r, t, i)), selections: n };
  }, getSelectionKeys: () => Re(e, se), matcherType: "or" }) });
}
function P(e) {
  return { [oe]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function Ft(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return Z({ [oe]: () => ({ match: (i) => {
    let r = { [t ?? Je]: i };
    return { matched: n === void 0 || ne(n, i, (o, a) => {
      r[o] = a;
    }), selections: r };
  }, getSelectionKeys: () => [t ?? Je].concat(n === void 0 ? [] : se(n)) }) });
}
function ee(e) {
  return typeof e == "number";
}
function fe(e) {
  return typeof e == "string";
}
function re(e) {
  return typeof e == "bigint";
}
Z(P(function(e) {
  return !0;
}));
const he = (e) => Object.assign(Z(e), { startsWith: (t) => {
  return he(E(e, (n = t, P((i) => fe(i) && i.startsWith(n)))));
  var n;
}, endsWith: (t) => {
  return he(E(e, (n = t, P((i) => fe(i) && i.endsWith(n)))));
  var n;
}, minLength: (t) => he(E(e, ((n) => P((i) => fe(i) && i.length >= n))(t))), maxLength: (t) => he(E(e, ((n) => P((i) => fe(i) && i.length <= n))(t))), includes: (t) => {
  return he(E(e, (n = t, P((i) => fe(i) && i.includes(n)))));
  var n;
}, regex: (t) => {
  return he(E(e, (n = t, P((i) => fe(i) && !!i.match(n)))));
  var n;
} });
he(P(fe));
const te = (e) => Object.assign(Z(e), { between: (t, n) => te(E(e, ((i, r) => P((o) => ee(o) && i <= o && r >= o))(t, n))), lt: (t) => te(E(e, ((n) => P((i) => ee(i) && i < n))(t))), gt: (t) => te(E(e, ((n) => P((i) => ee(i) && i > n))(t))), lte: (t) => te(E(e, ((n) => P((i) => ee(i) && i <= n))(t))), gte: (t) => te(E(e, ((n) => P((i) => ee(i) && i >= n))(t))), int: () => te(E(e, P((t) => ee(t) && Number.isInteger(t)))), finite: () => te(E(e, P((t) => ee(t) && Number.isFinite(t)))), positive: () => te(E(e, P((t) => ee(t) && t > 0))), negative: () => te(E(e, P((t) => ee(t) && t < 0))) });
te(P(ee));
const ae = (e) => Object.assign(Z(e), { between: (t, n) => ae(E(e, ((i, r) => P((o) => re(o) && i <= o && r >= o))(t, n))), lt: (t) => ae(E(e, ((n) => P((i) => re(i) && i < n))(t))), gt: (t) => ae(E(e, ((n) => P((i) => re(i) && i > n))(t))), lte: (t) => ae(E(e, ((n) => P((i) => re(i) && i <= n))(t))), gte: (t) => ae(E(e, ((n) => P((i) => re(i) && i >= n))(t))), positive: () => ae(E(e, P((t) => re(t) && t > 0))), negative: () => ae(E(e, P((t) => re(t) && t < 0))) });
ae(P(re));
Z(P(function(e) {
  return typeof e == "boolean";
}));
Z(P(function(e) {
  return typeof e == "symbol";
}));
Z(P(function(e) {
  return e == null;
}));
const bt = { matched: !1, value: void 0 };
function Vt(e) {
  return new Qe(e, bt);
}
class Qe {
  constructor(t, n) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = n;
  }
  with(...t) {
    if (this.state.matched)
      return this;
    const n = t[t.length - 1], i = [t[0]];
    let r;
    t.length === 3 && typeof t[1] == "function" ? (i.push(t[0]), r = t[1]) : t.length > 2 && i.push(...t.slice(1, t.length - 1));
    let o = !1, a = {};
    const s = (h, u) => {
      o = !0, a[h] = u;
    }, f = !i.some((h) => ne(h, this.input, s)) || r && !r(this.input) ? bt : { matched: !0, value: n(o ? Je in a ? a[Je] : a : this.input, this.input) };
    return new Qe(this.input, f);
  }
  when(t, n) {
    if (this.state.matched)
      return this;
    const i = !!t(this.input);
    return new Qe(this.input, i ? { matched: !0, value: n(this.input, this.input) } : bt);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    return this.run();
  }
  run() {
    if (this.state.matched)
      return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  returnType() {
    return this;
  }
}
const Ri = ({
  type: e = "info",
  title: t,
  description: n,
  className: i,
  iconColor: r
}) => {
  const o = c.useMemo(() => Vt(e).with("success", () => dn.faCheckCircle).with("error", () => ln.faTimesCircle).with("info", () => sn.faInfoCircle).exhaustive(), [e]), a = c.useMemo(() => r || Vt(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ g("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: i, children: /* @__PURE__ */ g("div", { children: /* @__PURE__ */ z("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ g("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ g(F, { icon: o, css: Ye`
                color: ${a};
              `, size: "6x" }) }),
    /* @__PURE__ */ g("div", { children: t }),
    /* @__PURE__ */ g("div", { children: n })
  ] }) }) });
}, qi = ({
  table: e,
  border: t = !1,
  onRowDoubleClick: n
}) => e.error ? /* @__PURE__ */ g(Ri, { type: "error", title: e.error.message }) : /* @__PURE__ */ g(Tn, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ g("div", { css: [{
  minHeight: "200px"
}], children: /* @__PURE__ */ z("table", { css: [t && {
  borderLeftWidth: "1px",
  borderTopWidth: "1px"
}, {
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, Ye`
              table-layout: fixed;
            `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((i) => /* @__PURE__ */ g("colgroup", { children: i.headers.map((r) => /* @__PURE__ */ g("col", { span: r.colSpan, style: {
    width: r.column.getSize()
  } }, r.id)) }, i.id)),
  e.isLoading === !0 ? null : /* @__PURE__ */ z(Xe, { children: [
    /* @__PURE__ */ g(Di, { ...e }),
    /* @__PURE__ */ g("tbody", { children: e.getRowModel().rows.map((i) => /* @__PURE__ */ g($n, { onRowDoubleClick: n, ...i }, i.id)) })
  ] })
] }) }) });
var hn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", i = 512, r = 512, o = [128472, "refresh", "sync"], a = "f021", s = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(hn);
var gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", i = 512, r = 512, o = [187, "angle-double-right"], a = "f101", s = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(gn);
var mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", i = 320, r = 512, o = [8250], a = "f105", s = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(mn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", i = 320, r = 512, o = [8249], a = "f104", s = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(vn);
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", i = 512, r = 512, o = [171, "angle-double-left"], a = "f100", s = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      o,
      a,
      s
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(pn);
const Oi = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...n
  }
}) => {
  const i = n.getState(), {
    pagination: r
  } = i, o = c.useMemo(() => r.pageIndex * r.pageSize + (t > 0 ? 1 : 0), [r, t]), a = c.useMemo(() => Math.min(t, (r.pageIndex + 1) * r.pageSize), [r, t]);
  return /* @__PURE__ */ z("div", { css: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    containerType: "inline-size"
  }, children: [
    /* @__PURE__ */ z("div", { css: {
      display: "flex",
      flex: "1 1 0%",
      justifyContent: "center",
      gap: "0.25rem",
      "@container (min-width: 300px)": {
        justifyContent: "flex-start"
      },
      "@container (min-width: 670px)": {
        gap: "0.75rem"
      }
    }, children: [
      /* @__PURE__ */ g(Ce, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ g(F, { icon: pn.faAnglesLeft }) }),
      /* @__PURE__ */ g(Ce, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ g(F, { css: {
        width: "18px"
      }, icon: vn.faAngleLeft }) }),
      /* @__PURE__ */ z("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ g("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ g("input", { type: "number", value: n.getState().pagination.pageIndex + 1, onChange: (s) => {
          const f = s.target.value ? Number(s.target.value) - 1 : 0;
          n.setPageIndex(f);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        n.getPageCount()
      ] }),
      /* @__PURE__ */ g(Ce, { size: "small", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ g(F, { css: {
        width: "18px"
      }, icon: mn.faAngleRight }) }),
      /* @__PURE__ */ g(Ce, { size: "small", onClick: () => n.setPageIndex(n.getPageCount() - 1), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ g(F, { icon: gn.faAnglesRight }) }),
      e && /* @__PURE__ */ g(Ce, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ g(F, { spin: n.isFetching, icon: hn.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ z("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ z("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ g("span", { css: {
          display: "none",
          "@container (min-width: 540px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ z("span", { css: {
          display: "none",
          "@container (min-width: 410px)": {
            display: "block"
          }
        }, children: [
          "c ",
          o,
          " по ",
          a,
          ","
        ] }),
        /* @__PURE__ */ z("span", { css: {
          display: "none",
          paddingLeft: "0.25rem",
          "@container (min-width: 360px)": {
            display: "block"
          }
        }, children: [
          " всего ",
          t
        ] })
      ] }),
      /* @__PURE__ */ g("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: r.pageSize, onChange: (s) => {
        n.setPageSize(Number(s.target.value));
      }, children: [25, 50, 100].map((s) => /* @__PURE__ */ g("option", { value: s, children: s }, s)) })
    ] })
  ] });
}, Ji = et.memo(Oi), zi = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: i,
  ...r
}) => {
  const o = zn({
    getCoreRowModel: Ln(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: i,
    ...o
  };
}, Qi = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: i = 25,
  defaultColumnVisibility: r = {},
  defaultFilters: o,
  isLoading: a = !1,
  keepPrevious: s = !0,
  loadingOnFetch: f = !1,
  ...h
} = {}) => {
  var V, q;
  const [u, m] = c.useState({
    pageIndex: 0,
    pageSize: i
  }), [C, b] = c.useState(o || []), [l, d] = c.useState(n), [p, y] = c.useState(r), v = c.useMemo(() => {
    const {
      pageIndex: I,
      pageSize: M
    } = u;
    return {
      start: I * M,
      length: M,
      sort: JSON.stringify(l.map((A) => ({
        property: A.id,
        direction: A.desc ? "DESC" : "ASC"
      }))),
      ...C.length > 0 && {
        extFilters: JSON.stringify(C)
      }
    };
  }, [u, C, l]), w = Hn(e, {
    params: v,
    placeholderData: s ? In : void 0
  }), N = c.useMemo(() => {
    var I, M;
    return isNaN(Number((I = w.data) == null ? void 0 : I.recordsFiltered)) ? 0 : Number((M = w.data) == null ? void 0 : M.recordsFiltered);
  }, [(V = w.data) == null ? void 0 : V.recordsFiltered]), k = c.useMemo(() => N > 0 ? Math.ceil(N / u.pageSize) : 1, [u.pageSize, N]), H = zi({
    ...h,
    columns: t,
    data: (q = w.data) == null ? void 0 : q.data,
    isLoading: w.isLoading || f && w.isFetching || a,
    isFetching: w.isFetching,
    manualPagination: !0,
    onPaginationChange: m,
    onSortingChange: d,
    onColumnVisibilityChange: y,
    pageCount: k,
    state: {
      ...h == null ? void 0 : h.state,
      pagination: u,
      sorting: l,
      columnVisibility: p
    }
  }), L = c.useCallback(() => {
    w.refetch();
  }, [w]);
  return {
    ...H,
    recordsTotal: N,
    refetch: L,
    error: w.error
  };
}, Li = ({
  info: e,
  actions: t
}) => /* @__PURE__ */ g("div", { css: {
  display: "flex",
  gap: "0.25rem"
}, children: t.map(({
  key: n,
  icon: i,
  tooltip: r,
  css: o,
  onClick: a
}) => {
  const s = /* @__PURE__ */ g(Ce, { onClick: (f) => {
    a == null || a(e.row.original), f.stopPropagation();
  }, css: [{
    padding: "4px",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-text-opacity": "1",
      color: "rgb(75 85 99 / var(--tw-text-opacity))"
    }
  }, o], children: /* @__PURE__ */ g(F, { icon: i }) }, n);
  return r ? /* @__PURE__ */ g(On, { title: r, children: s }, n) : s;
}) }), xi = et.memo(Li), ji = (e, t) => ({
  header: t == null ? void 0 : t.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (n) => /* @__PURE__ */ g(xi, { info: n, actions: e })
}), Hi = () => (e, t, n) => ({
  header: t,
  accessorKey: e,
  cell: (i) => /* @__PURE__ */ g(Xe, { children: i.getValue() ? "Да" : "Нет" }),
  ...n
}), _i = () => (e, t, {
  inputFormat: n = "YYYY-MM-DD HH:mm:ss",
  displayFormat: i = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: t,
  accessorKey: e,
  ...r,
  cell: (o) => o.getValue() ? _n(o.getValue(), n).format(i) : ""
}), Fi = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: n,
    isLoading: i
  } = Fn(t);
  return i ? /* @__PURE__ */ g(F, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: An.faCircleNotch, spin: !0 }) : n(e.getValue());
}, Vi = et.memo(Fi), Bi = () => (e, t, n, i) => ({
  header: n,
  accessorKey: e,
  ...i,
  cell: (r) => /* @__PURE__ */ g(Vi, { info: r, dictionary: t })
}), $i = () => (e, t, n) => ({
  ...n,
  header: t,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), Ui = () => (e = "id", t) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...t
}), eo = () => ({
  id: Ui(),
  actions: ji,
  display: $i(),
  boolean: Hi(),
  date: _i(),
  dictionary: Bi()
});
export {
  Vt as N,
  Ji as P,
  qi as T,
  eo as c,
  dn as f,
  Qi as u
};
