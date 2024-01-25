import { j as m, a as I, F as Ge, S as cn, k as ln, f as un } from "./library-1a956507.js";
import { j as k, n as dn, a as Ae, I as le } from "./mui-d2313b11.js";
import { f as tt, u as fn, g as hn } from "./table-90839a50.js";
import { R as He, c as pe, r as c } from "./react-181b9648.js";
import { f as gn, a as mn, u as vn, h as pn, b as bn } from "./useDictionary-be508e70.js";
import { F as H } from "./icons-42066a3f.js";
import { N as vt, f as wn } from "./index-38b3fe08.js";
const Cn = ({
  ...e
}) => /* @__PURE__ */ m("td", { css: [{
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
}], children: tt(e.column.columnDef.cell, e.getContext()) }, e.id), yn = He.memo(Cn), Sn = ({
  onRowDoubleClick: e,
  ...t
}) => /* @__PURE__ */ m("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (n) => e == null ? void 0 : e(t.original, n), children: t.getVisibleCells().map((n) => /* @__PURE__ */ m(yn, { ...n }, n.id)) }, t.id);
var Mt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", o = 384, a = 512, i = [8595], r = "f063", s = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Mt);
var Et = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", o = 384, a = 512, i = [8593], r = "f062", s = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Et);
var Pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", o = 512, a = 512, i = ["columns"], r = "f0db", s = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Pt);
var Nt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", o = 576, a = 512, i = ["sort-alpha-desc", "sort-alpha-down-alt"], r = "f881", s = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Nt);
var kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", o = 576, a = 512, i = ["sort-alpha-up"], r = "f15e", s = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(kt);
const nt = (e) => !!e && e[0] === "o", Ze = pe.unstable_batchedUpdates || ((e) => e()), ce = (e, t, n = 1e-4) => Math.abs(e - t) < n, be = (e, t) => e === !0 || !!(e && e[t]), F = (e, t) => typeof e == "function" ? e(t) : e, Mn = "_szhsinMenu", En = (e) => e[Mn], Ce = (e, t) => (t && Object.keys(t).forEach((n) => {
  const o = e[n], a = t[n];
  typeof a == "function" && o ? e[n] = (...i) => {
    a(...i), o(...i);
  } : e[n] = a;
}), e), Pn = (e) => {
  if (typeof e != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const t = e.trim().split(/\s+/, 4).map(parseFloat), n = isNaN(t[0]) ? 0 : t[0], o = isNaN(t[1]) ? n : t[1];
  return {
    top: n,
    right: o,
    bottom: isNaN(t[2]) ? n : t[2],
    left: isNaN(t[3]) ? o : t[3]
  };
}, Xe = (e) => {
  for (; e; ) {
    if (e = e.parentNode, !e || e === document.body || !e.parentNode)
      return;
    const {
      overflow: t,
      overflowX: n,
      overflowY: o
    } = getComputedStyle(e);
    if (/auto|scroll|overlay|hidden/.test(t + o + n))
      return e;
  }
};
function it(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function pt(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t)
      return n;
  return -1;
}
const ie = ({
  block: e,
  element: t,
  modifiers: n,
  className: o
}) => c.useMemo(() => {
  const a = t ? `${e}__${t}` : e;
  let i = a;
  n && Object.keys(n).forEach((s) => {
    const h = n[s];
    h && (i += ` ${a}--${h === !0 ? s : `${s}-${h}`}`);
  });
  let r = typeof o == "function" ? o(n) : o;
  return typeof r == "string" && (r = r.trim(), r && (i += ` ${r}`)), i;
}, [e, t, n, o]), Nn = "szh-menu-container", ne = "szh-menu", kn = "arrow", Dt = "item", Dn = "divider", Tn = "submenu", Tt = /* @__PURE__ */ c.createContext(), ot = /* @__PURE__ */ c.createContext({}), qe = /* @__PURE__ */ c.createContext({}), It = /* @__PURE__ */ c.createContext({}), In = /* @__PURE__ */ c.createContext({}), je = /* @__PURE__ */ c.createContext({}), L = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), N = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), we = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), ue = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), Rn = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ye = "absolute", Rt = "presentation", at = "menuitem", bt = {
  "aria-hidden": !0,
  role: at
}, zn = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: o,
  isOpen: a,
  theming: i,
  transition: r,
  onClose: s
}) => {
  const h = be(r, "item"), b = ({
    key: g
  }) => {
    switch (g) {
      case L.ESC:
        F(s, {
          key: g,
          reason: we.CANCEL
        });
        break;
    }
  }, f = (g) => {
    a && !g.currentTarget.contains(g.relatedTarget) && F(s, {
      reason: we.BLUR
    });
  };
  return /* @__PURE__ */ k.jsx("div", {
    ...Ce({
      onKeyDown: b,
      onBlur: f
    }, n),
    className: ie({
      block: Nn,
      modifiers: c.useMemo(() => ({
        theme: i,
        itemTransition: h
      }), [i, h]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: o
  });
}, An = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, o, a) => {
      t ? e || (e = setTimeout(() => {
        e = 0, o();
      }, n)) : a == null || a();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, Ln = (e, t) => {
  const [n, o] = c.useState(), i = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = c.useCallback((h, b) => {
    const {
      items: f
    } = i;
    if (!h)
      i.items = [];
    else if (b)
      f.push(h);
    else {
      const g = f.indexOf(h);
      g > -1 && (f.splice(g, 1), h.contains(document.activeElement) && (t.current.focus(), o()));
    }
    i.hoverIndex = -1, i.sorted = !1;
  }, [i, t]), s = c.useCallback((h, b, f) => {
    const {
      items: g,
      hoverIndex: y
    } = i, d = () => {
      if (i.sorted)
        return;
      const p = e.current.querySelectorAll(".szh-menu__item");
      g.sort((w, v) => pt(p, w) - pt(p, v)), i.sorted = !0;
    };
    let l = -1, u;
    switch (h) {
      case N.RESET:
        break;
      case N.SET:
        u = b;
        break;
      case N.UNSET:
        u = (p) => p === b ? void 0 : p;
        break;
      case N.FIRST:
        d(), l = 0, u = g[l];
        break;
      case N.LAST:
        d(), l = g.length - 1, u = g[l];
        break;
      case N.SET_INDEX:
        d(), l = f, u = g[l];
        break;
      case N.INCREASE:
        d(), l = y, l < 0 && (l = g.indexOf(b)), l++, l >= g.length && (l = 0), u = g[l];
        break;
      case N.DECREASE:
        d(), l = y, l < 0 && (l = g.indexOf(b)), l--, l < 0 && (l = g.length - 1), u = g[l];
        break;
    }
    u || (l = -1), o(u), i.hoverIndex = l;
  }, [e, i]);
  return {
    hoverItem: n,
    dispatch: s,
    updateItems: r
  };
}, xn = (e, t, n, o) => {
  const a = t.current.getBoundingClientRect(), i = e.current.getBoundingClientRect(), r = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), s = Pn(o), h = (l) => l + i.left - r.left - s.left, b = (l) => l + i.left + a.width - r.right + s.right, f = (l) => l + i.top - r.top - s.top, g = (l) => l + i.top + a.height - r.bottom + s.bottom;
  return {
    menuRect: a,
    containerRect: i,
    getLeftOverflow: h,
    getRightOverflow: b,
    getTopOverflow: f,
    getBottomOverflow: g,
    confineHorizontally: (l) => {
      let u = h(l);
      if (u < 0)
        l -= u;
      else {
        const p = b(l);
        p > 0 && (l -= p, u = h(l), u < 0 && (l -= u));
      }
      return l;
    },
    confineVertically: (l) => {
      let u = f(l);
      if (u < 0)
        l -= u;
      else {
        const p = g(l);
        p > 0 && (l -= p, u = f(l), u < 0 && (l -= u));
      }
      return l;
    }
  };
}, On = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: o,
  menuRect: a
}) => {
  let i = n.top - o.top - t + n.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return i = Math.max(r, i), i = Math.min(i, a.height - r), i;
}, Hn = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: o,
  placeLeftX: a,
  placeRightX: i,
  getLeftOverflow: r,
  getRightOverflow: s,
  confineHorizontally: h,
  confineVertically: b,
  arrowRef: f,
  arrow: g,
  direction: y,
  position: d
}) => {
  let l = y, u = o;
  d !== "initial" && (u = b(u), d === "anchor" && (u = Math.min(u, e.bottom - t.top), u = Math.max(u, e.top - t.top - n.height)));
  let p, w, v;
  return l === "left" ? (p = a, d !== "initial" && (w = r(p), w < 0 && (v = s(i), (v <= 0 || -w > v) && (p = i, l = "right")))) : (p = i, d !== "initial" && (v = s(p), v > 0 && (w = r(a), (w >= 0 || -w < v) && (p = a, l = "left")))), d === "auto" && (p = h(p)), {
    arrowY: g ? On({
      menuY: u,
      arrowRef: f,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: p,
    y: u,
    computedDirection: l
  };
}, jn = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: o,
  menuRect: a
}) => {
  let i = n.left - o.left - t + n.width / 2;
  const r = e.current.offsetWidth * 1.25;
  return i = Math.max(r, i), i = Math.min(i, a.width - r), i;
}, _n = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: o,
  placeTopY: a,
  placeBottomY: i,
  getTopOverflow: r,
  getBottomOverflow: s,
  confineHorizontally: h,
  confineVertically: b,
  arrowRef: f,
  arrow: g,
  direction: y,
  position: d
}) => {
  let l = y === "top" ? "top" : "bottom", u = o;
  d !== "initial" && (u = h(u), d === "anchor" && (u = Math.min(u, e.right - t.left), u = Math.max(u, e.left - t.left - n.width)));
  let p, w, v;
  return l === "top" ? (p = a, d !== "initial" && (w = r(p), w < 0 && (v = s(i), (v <= 0 || -w > v) && (p = i, l = "bottom")))) : (p = i, d !== "initial" && (v = s(p), v > 0 && (w = r(a), (w >= 0 || -w < v) && (p = a, l = "top")))), d === "auto" && (p = b(p)), {
    arrowX: g ? jn({
      menuX: u,
      arrowRef: f,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: u,
    y: p,
    computedDirection: l
  };
}, Vn = ({
  arrow: e,
  align: t,
  direction: n,
  gap: o,
  shift: a,
  position: i,
  anchorRect: r,
  arrowRef: s,
  positionHelpers: h
}) => {
  const {
    menuRect: b,
    containerRect: f
  } = h, g = n === "left" || n === "right";
  let y = g ? o : a, d = g ? a : o;
  if (e) {
    const E = s.current;
    g ? y += E.offsetWidth : d += E.offsetHeight;
  }
  const l = r.left - f.left - b.width - y, u = r.right - f.left + y, p = r.top - f.top - b.height - d, w = r.bottom - f.top + d;
  let v, C;
  t === "end" ? (v = r.right - f.left - b.width, C = r.bottom - f.top - b.height) : t === "center" ? (v = r.left - f.left - (b.width - r.width) / 2, C = r.top - f.top - (b.height - r.height) / 2) : (v = r.left - f.left, C = r.top - f.top), v += y, C += d;
  const M = {
    ...h,
    anchorRect: r,
    placeLeftX: l,
    placeRightX: u,
    placeLeftorRightY: C,
    placeTopY: p,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: s,
    arrow: e,
    direction: n,
    position: i
  };
  switch (n) {
    case "left":
    case "right":
      return Hn(M);
    case "top":
    case "bottom":
    default:
      return _n(M);
  }
}, ze = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect;
function wt(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const _e = (e, t) => c.useMemo(() => e ? t ? (n) => {
  wt(e, n), wt(t, n);
} : e : t, [e, t]), Ct = -9999, zt = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: o,
  arrowProps: a = {},
  anchorPoint: i,
  anchorRef: r,
  containerRef: s,
  containerProps: h,
  focusProps: b,
  externalRef: f,
  parentScrollingRef: g,
  align: y = "start",
  direction: d = "bottom",
  position: l = "auto",
  overflow: u = "visible",
  setDownOverflow: p,
  repositionFlag: w,
  captureFocus: v = !0,
  state: C,
  endTransition: M,
  isDisabled: E,
  menuItemFocus: R,
  gap: x = 0,
  shift: W = 0,
  children: q,
  onClose: j,
  ...P
}) => {
  const [z, Q] = c.useState({
    x: Ct,
    y: Ct
  }), [de, Y] = c.useState({}), [D, J] = c.useState(), [_, ye] = c.useState(d), [K] = c.useState(An), [fe, he] = c.useReducer((S) => S + 1, 1), {
    transition: Se,
    boundingBoxRef: ge,
    boundingBoxPadding: Me,
    rootMenuRef: Ee,
    rootAnchorRef: ee,
    scrollNodesRef: Ve,
    reposition: Pe,
    viewScroll: me,
    submenuCloseDelay: Fe
  } = c.useContext(je), {
    submenuCtx: Ne,
    reposSubmenu: T = w
  } = c.useContext(qe), V = c.useRef(null), ke = c.useRef(), rt = c.useRef(), st = c.useRef(!1), De = c.useRef({
    width: 0,
    height: 0
  }), ct = c.useRef(() => {
  }), {
    hoverItem: $e,
    dispatch: $,
    updateItems: Te
  } = Ln(V, ke), U = nt(C), lt = be(Se, "open"), ut = be(Se, "close"), X = Ve.current, Zt = (S) => {
    switch (S.key) {
      case L.HOME:
        $(N.FIRST);
        break;
      case L.END:
        $(N.LAST);
        break;
      case L.UP:
        $(N.DECREASE, $e);
        break;
      case L.DOWN:
        $(N.INCREASE, $e);
        break;
      case L.SPACE:
        S.target && S.target.className.indexOf(ne) !== -1 && S.preventDefault();
        return;
      default:
        return;
    }
    S.preventDefault(), S.stopPropagation();
  }, qt = () => {
    C === "closing" && J(), F(M);
  }, Qt = (S) => {
    S.stopPropagation(), K.on(Fe, () => {
      $(N.RESET), ke.current.focus();
    });
  }, Jt = (S) => {
    S.target === S.currentTarget && K.off();
  }, te = c.useCallback((S) => {
    var O;
    const G = r ? (O = r.current) == null ? void 0 : O.getBoundingClientRect() : i ? {
      left: i.x,
      right: i.x,
      top: i.y,
      bottom: i.y,
      width: 0,
      height: 0
    } : null;
    if (!G)
      return;
    X.menu || (X.menu = (ge ? ge.current : Xe(Ee.current)) || window);
    const B = xn(s, V, X.menu, Me);
    let {
      arrowX: A,
      arrowY: oe,
      x: ae,
      y: Z,
      computedDirection: We
    } = Vn({
      arrow: o,
      align: y,
      direction: d,
      gap: x,
      shift: W,
      position: l,
      anchorRect: G,
      arrowRef: rt,
      positionHelpers: B
    });
    const {
      menuRect: gt
    } = B;
    let re = gt.height;
    if (!S && u !== "visible") {
      const {
        getTopOverflow: rn,
        getBottomOverflow: sn
      } = B;
      let se, Ke;
      const mt = De.current.height, Ie = sn(Z);
      if (Ie > 0 || ce(Ie, 0) && ce(re, mt))
        se = re - Ie, Ke = Ie;
      else {
        const ve = rn(Z);
        (ve < 0 || ce(ve, 0) && ce(re, mt)) && (se = re + ve, Ke = 0 - ve, se >= 0 && (Z -= ve));
      }
      se >= 0 ? (re = se, J({
        height: se,
        overflowAmt: Ke
      })) : J();
    }
    o && Y({
      x: A,
      y: oe
    }), Q({
      x: ae,
      y: Z
    }), ye(We), De.current = {
      width: gt.width,
      height: re
    };
  }, [o, y, Me, d, x, W, l, u, i, r, s, ge, Ee, X]);
  ze(() => {
    U && (te(), st.current && he()), st.current = U, ct.current = te;
  }, [U, te, T]), ze(() => {
    D && !p && (V.current.scrollTop = 0);
  }, [D, p]), ze(() => Te, [Te]), c.useEffect(() => {
    let {
      menu: S
    } = X;
    if (!U || !S)
      return;
    if (S = S.addEventListener ? S : window, !X.anchors) {
      X.anchors = [];
      let A = Xe(ee && ee.current);
      for (; A && A !== S; )
        X.anchors.push(A), A = Xe(A);
    }
    let O = me;
    if (X.anchors.length && O === "initial" && (O = "auto"), O === "initial")
      return;
    const G = () => {
      O === "auto" ? Ze(() => te(!0)) : F(j, {
        reason: we.SCROLL
      });
    }, B = X.anchors.concat(me !== "initial" ? S : []);
    return B.forEach((A) => A.addEventListener("scroll", G)), () => B.forEach((A) => A.removeEventListener("scroll", G));
  }, [ee, X, U, j, me, te]);
  const dt = !!D && D.overflowAmt > 0;
  c.useEffect(() => {
    if (dt || !U || !g)
      return;
    const S = () => Ze(te), O = g.current;
    return O.addEventListener("scroll", S), () => O.removeEventListener("scroll", S);
  }, [U, dt, g, te]), c.useEffect(() => {
    if (typeof ResizeObserver != "function" || Pe === "initial")
      return;
    const S = new ResizeObserver(([G]) => {
      const {
        borderBoxSize: B,
        target: A
      } = G;
      let oe, ae;
      if (B) {
        const {
          inlineSize: Z,
          blockSize: We
        } = B[0] || B;
        oe = Z, ae = We;
      } else {
        const Z = A.getBoundingClientRect();
        oe = Z.width, ae = Z.height;
      }
      oe === 0 || ae === 0 || ce(oe, De.current.width, 1) && ce(ae, De.current.height, 1) || pe.flushSync(() => {
        ct.current(), he();
      });
    }), O = V.current;
    return S.observe(O, {
      box: "border-box"
    }), () => S.unobserve(O);
  }, [Pe]), c.useEffect(() => {
    if (!U) {
      $(N.RESET), ut || J();
      return;
    }
    const {
      position: S,
      alwaysUpdate: O
    } = R || {}, G = () => {
      S === ue.FIRST ? $(N.FIRST) : S === ue.LAST ? $(N.LAST) : S >= -1 && $(N.SET_INDEX, void 0, S);
    };
    if (O)
      G();
    else if (v) {
      const B = setTimeout(() => {
        const A = V.current;
        A && !A.contains(document.activeElement) && (ke.current.focus(), G());
      }, lt ? 170 : 100);
      return () => clearTimeout(B);
    }
  }, [U, lt, ut, v, R, $]);
  const en = c.useMemo(() => ({
    isParentOpen: U,
    submenuCtx: K,
    dispatch: $,
    updateItems: Te
  }), [U, K, $, Te]);
  let Ue, Be;
  D && (p ? Be = D.overflowAmt : Ue = D.height);
  const tn = c.useMemo(() => ({
    reposSubmenu: fe,
    submenuCtx: K,
    overflow: u,
    overflowAmt: Be,
    parentMenuRef: V,
    parentDir: _
  }), [fe, K, u, Be, _]), nn = Ue >= 0 ? {
    maxHeight: Ue,
    overflow: u
  } : void 0, ft = c.useMemo(() => ({
    state: C,
    dir: _
  }), [C, _]), on = c.useMemo(() => ({
    dir: _
  }), [_]), an = ie({
    block: ne,
    element: kn,
    modifiers: on,
    className: a.className
  }), ht = /* @__PURE__ */ k.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...it(E),
    ...Ce({
      onPointerEnter: Ne == null ? void 0 : Ne.off,
      onPointerMove: Qt,
      onPointerLeave: Jt,
      onKeyDown: Zt,
      onAnimationEnd: qt
    }, P),
    ref: _e(f, V),
    className: ie({
      block: ne,
      modifiers: ft,
      className: t
    }),
    style: {
      ...n,
      ...nn,
      margin: 0,
      display: C === "closed" ? "none" : void 0,
      position: Ye,
      left: z.x,
      top: z.y
    },
    children: [/* @__PURE__ */ k.jsx("li", {
      tabIndex: -1,
      style: {
        position: Ye,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: ke,
      ...bt,
      ...b
    }), o && /* @__PURE__ */ k.jsx("li", {
      ...bt,
      ...a,
      className: an,
      style: {
        display: "block",
        position: Ye,
        left: de.x,
        top: de.y,
        ...a.style
      },
      ref: rt
    }), /* @__PURE__ */ k.jsx(qe.Provider, {
      value: tn,
      children: /* @__PURE__ */ k.jsx(ot.Provider, {
        value: en,
        children: /* @__PURE__ */ k.jsx(Tt.Provider, {
          value: $e,
          children: F(q, ft)
        })
      })
    })]
  });
  return h ? /* @__PURE__ */ k.jsx(zn, {
    ...h,
    isOpen: U,
    children: ht
  }) : ht;
}, Fn = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: o,
  initialMounted: a,
  unmountOnClose: i,
  transition: r,
  transitionTimeout: s,
  boundingBoxRef: h,
  boundingBoxPadding: b,
  reposition: f = "auto",
  submenuOpenDelay: g = 300,
  submenuCloseDelay: y = 150,
  viewScroll: d = "initial",
  portal: l,
  theming: u,
  onItemClick: p,
  ...w
}, v) {
  const C = c.useRef(null), M = c.useRef({}), {
    anchorRef: E,
    state: R,
    onClose: x
  } = w, W = c.useMemo(() => ({
    initialMounted: a,
    unmountOnClose: i,
    transition: r,
    transitionTimeout: s,
    boundingBoxRef: h,
    boundingBoxPadding: b,
    rootMenuRef: C,
    rootAnchorRef: E,
    scrollNodesRef: M,
    reposition: f,
    viewScroll: d,
    submenuOpenDelay: g,
    submenuCloseDelay: y
  }), [a, i, r, s, E, h, b, f, d, g, y]), q = c.useMemo(() => ({
    handleClick(P, z) {
      P.stopPropagation || F(p, P);
      let Q = P.keepOpen;
      Q === void 0 && (Q = z && P.key === L.SPACE), Q || F(x, {
        value: P.value,
        key: P.key,
        reason: we.CLICK
      });
    },
    handleClose(P) {
      F(x, {
        key: P,
        reason: we.CLICK
      });
    }
  }), [p, x]);
  if (!R)
    return null;
  const j = /* @__PURE__ */ k.jsx(je.Provider, {
    value: W,
    children: /* @__PURE__ */ k.jsx(It.Provider, {
      value: q,
      children: /* @__PURE__ */ k.jsx(zt, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: v,
        containerRef: C,
        containerProps: {
          className: n,
          containerRef: C,
          containerProps: o,
          theming: u,
          transition: r,
          onClose: x
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ pe.createPortal(j, document.body) : l ? l.target ? /* @__PURE__ */ pe.createPortal(j, l.target) : l.stablePosition ? null : j : j;
}), Qe = 0, Je = 1, Le = 2, xe = 3, Oe = 4, $n = 5, At = 6, Un = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Lt = (e) => ({
  _s: e,
  status: Un[e],
  isEnter: e < xe,
  isMounted: e !== At,
  isResolved: e === Le || e > Oe
}), et = (e) => e ? At : $n, Bn = (e, t) => {
  switch (e) {
    case Je:
    case Qe:
      return Le;
    case Oe:
    case xe:
      return et(t);
  }
}, Wn = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Kn = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), yt = (e, t, n, o, a) => {
  clearTimeout(o.current);
  const i = Lt(e);
  t(i), n.current = i, a && a({
    current: i
  });
}, Xn = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: o,
  timeout: a,
  initialEntered: i,
  mountOnEnter: r,
  unmountOnExit: s,
  onStateChange: h
} = {}) => {
  const [b, f] = c.useState(() => Lt(i ? Le : et(r))), g = c.useRef(b), y = c.useRef(), [d, l] = Wn(a), u = c.useCallback(() => {
    const w = Bn(g.current._s, s);
    w && yt(w, f, g, y, h);
  }, [h, s]), p = c.useCallback((w) => {
    const v = (M) => {
      switch (yt(M, f, g, y, h), M) {
        case Je:
          d >= 0 && (y.current = setTimeout(u, d));
          break;
        case Oe:
          l >= 0 && (y.current = setTimeout(u, l));
          break;
        case Qe:
        case xe:
          y.current = Kn(v, M);
          break;
      }
    }, C = g.current.isEnter;
    typeof w != "boolean" && (w = !C), w ? !C && v(e ? n ? Qe : Je : Le) : C && v(t ? o ? xe : Oe : et(s));
  }, [u, h, e, t, n, o, d, l, s]);
  return c.useEffect(() => () => clearTimeout(y.current), []), [b, p, u];
}, Yn = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: o,
  transitionTimeout: a = 500
} = {}) => {
  const [{
    status: i
  }, r, s] = Xn({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: a,
    enter: be(o, "open"),
    exit: be(o, "close")
  });
  return [{
    state: Rn[i],
    endTransition: s
  }, r];
}, xt = (e) => {
  const [t, n] = Yn(e), [o, a] = c.useState(), i = (r, s) => {
    a({
      position: r,
      alwaysUpdate: s
    }), n(!0);
  };
  return [{
    menuItemFocus: o,
    ...t
  }, n, i];
}, Gn = (e, t) => {
  const [n] = c.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (o) => n.v ? n.v = !1 : t(!0, o)
  };
}, Ot = (e, t) => {
  const n = c.useRef(t);
  c.useEffect(() => {
    n.current !== t && F(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, Zn = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: o,
  menuButton: a,
  instanceRef: i,
  onMenuChange: r,
  ...s
}, h) {
  const [b, f, g] = xt(s), {
    state: y
  } = b, d = nt(y), l = c.useRef(null), u = Gn(y, (E, R) => g(R.detail ? void 0 : ue.FIRST)), p = c.useCallback((E) => {
    f(!1), E.key && l.current.focus();
  }, [f]), w = (E) => {
    switch (E.key) {
      case L.UP:
        g(ue.LAST);
        break;
      case L.DOWN:
        g(ue.FIRST);
        break;
      default:
        return;
    }
    E.preventDefault();
  }, v = F(a, {
    open: d
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const C = {
    ref: _e(v.ref, l),
    ...Ce({
      onKeyDown: w,
      ...u
    }, v.props)
  };
  En(v.type) === "MenuButton" && (C.isOpen = d);
  const M = /* @__PURE__ */ c.cloneElement(v, C);
  return Ot(r, d), c.useImperativeHandle(i, () => ({
    openMenu: g,
    closeMenu: () => f(!1)
  })), /* @__PURE__ */ k.jsxs(c.Fragment, {
    children: [M, /* @__PURE__ */ k.jsx(Fn, {
      ...s,
      ...b,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: l,
      ref: h,
      onClose: p
    })]
  });
}), Ht = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), o = /* @__PURE__ */ c.forwardRef((a, i) => {
    const r = c.useRef(null);
    return /* @__PURE__ */ k.jsx(n, {
      ...a,
      itemRef: r,
      externalRef: i,
      isHovering: c.useContext(Tt) === r.current
    });
  });
  return o.displayName = `WithHovering(${e})`, o;
}, jt = (e, t, n) => {
  ze(() => {
    if (e)
      return;
    const o = t.current;
    return n(o, !0), () => {
      n(o);
    };
  }, [e, t, n]);
}, qn = /* @__PURE__ */ Ht("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: o,
  direction: a,
  label: i,
  openTrigger: r,
  onMenuChange: s,
  isHovering: h,
  instanceRef: b,
  itemRef: f,
  captureFocus: g,
  repositionFlag: y,
  itemProps: d = {},
  ...l
}) {
  const u = c.useContext(je), {
    rootMenuRef: p,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = u, {
    parentMenuRef: C,
    parentDir: M,
    overflow: E
  } = c.useContext(qe), {
    isParentOpen: R,
    submenuCtx: x,
    dispatch: W,
    updateItems: q
  } = c.useContext(ot), j = E !== "visible", [P, z, Q] = xt(u), {
    state: de
  } = P, Y = !!o, D = nt(de), J = c.useRef(null), [_] = c.useState({
    v: 0
  }), ye = () => {
    x.off(), _.v && (clearTimeout(_.v), _.v = 0);
  }, K = (...T) => {
    ye(), fe(), !Y && Q(...T);
  }, fe = () => !h && !Y && W(N.SET, f.current), he = (T) => {
    fe(), r || (_.v = setTimeout(() => Ze(K), Math.max(T, 0)));
  }, Se = (T) => {
    Y || (T.stopPropagation(), !(_.v || D) && x.on(v, () => he(w - v), () => he(w)));
  }, ge = () => {
    ye(), D || W(N.UNSET, f.current);
  }, Me = (T) => {
    if (h)
      switch (T.key) {
        case L.ENTER:
          T.preventDefault();
        case L.SPACE:
        case L.RIGHT:
          r !== "none" && K(ue.FIRST);
      }
  }, Ee = (T) => {
    let V = !1;
    switch (T.key) {
      case L.LEFT:
        D && (f.current.focus(), z(!1), V = !0);
        break;
      case L.RIGHT:
        D || (V = !0);
        break;
    }
    V && (T.preventDefault(), T.stopPropagation());
  };
  jt(Y, f, q), Ot(s, D), c.useEffect(() => x.toggle(D), [x, D]), c.useEffect(() => () => clearTimeout(_.v), [_]), c.useEffect(() => {
    h && R ? f.current.focus() : z(!1);
  }, [h, R, z, f]), c.useImperativeHandle(b, () => ({
    openMenu: (...T) => {
      R && K(...T);
    },
    closeMenu: () => {
      D && (f.current.focus(), z(!1));
    }
  }));
  const ee = c.useMemo(() => ({
    open: D,
    hover: h,
    disabled: Y,
    submenu: !0
  }), [D, h, Y]), {
    ref: Ve,
    className: Pe,
    ...me
  } = d, Fe = Ce({
    onPointerEnter: x.off,
    onPointerMove: Se,
    onPointerLeave: ge,
    onKeyDown: Me,
    onClick: () => r !== "none" && K()
  }, me), Ne = () => {
    const T = /* @__PURE__ */ k.jsx(zt, {
      ...l,
      ...P,
      ariaLabel: t || (typeof i == "string" ? i : "Submenu"),
      anchorRef: f,
      containerRef: j ? p : J,
      direction: a || (M === "right" || M === "left" ? M : "right"),
      parentScrollingRef: j && C,
      isDisabled: Y
    }), V = p.current;
    return j && V ? /* @__PURE__ */ pe.createPortal(T, V) : T;
  };
  return /* @__PURE__ */ k.jsxs("li", {
    className: ie({
      block: ne,
      element: Tn,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Rt,
    ref: J,
    onKeyDown: Ee,
    children: [/* @__PURE__ */ k.jsx("div", {
      role: at,
      "aria-haspopup": !0,
      "aria-expanded": D,
      ...it(Y, h),
      ...Fe,
      ref: _e(Ve, f),
      className: ie({
        block: ne,
        element: Dt,
        modifiers: ee,
        className: Pe
      }),
      children: c.useMemo(() => F(i, ee), [i, ee])
    }), de && Ne()]
  });
}), Qn = (e, t, n, o) => {
  const {
    submenuCloseDelay: a
  } = c.useContext(je), {
    isParentOpen: i,
    submenuCtx: r,
    dispatch: s,
    updateItems: h
  } = c.useContext(ot), b = () => {
    !n && !o && s(N.SET, e.current);
  }, f = () => {
    !o && s(N.UNSET, e.current);
  }, g = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && f();
  }, y = (l) => {
    o || (l.stopPropagation(), r.on(a, b, b));
  }, d = (l, u) => {
    r.off(), !u && f();
  };
  return jt(o, e, h), c.useEffect(() => {
    n && i && t.current && t.current.focus();
  }, [t, n, i]), {
    setHover: b,
    onBlur: g,
    onPointerMove: y,
    onPointerLeave: d
  };
}, Re = /* @__PURE__ */ Ht("MenuItem", function({
  className: t,
  value: n,
  href: o,
  type: a,
  checked: i,
  disabled: r,
  children: s,
  onClick: h,
  isHovering: b,
  itemRef: f,
  externalRef: g,
  ...y
}) {
  const d = !!r, {
    setHover: l,
    ...u
  } = Qn(f, f, b, d), p = c.useContext(It), w = c.useContext(In), v = a === "radio", C = a === "checkbox", M = !!o && !d && !v && !C, E = v ? w.value === n : C ? !!i : !1, R = (P) => {
    if (d) {
      P.stopPropagation(), P.preventDefault();
      return;
    }
    const z = {
      value: n,
      syntheticEvent: P
    };
    P.key !== void 0 && (z.key = P.key), C && (z.checked = !E), v && (z.name = w.name), F(h, z), v && F(w.onRadioChange, z), p.handleClick(z, C || v);
  }, x = (P) => {
    if (b)
      switch (P.key) {
        case L.ENTER:
          P.preventDefault();
        case L.SPACE:
          M ? f.current.click() : R(P);
      }
  }, W = c.useMemo(() => ({
    type: a,
    disabled: d,
    hover: b,
    checked: E,
    anchor: M
  }), [a, d, b, E, M]), q = Ce({
    ...u,
    onPointerDown: l,
    onKeyDown: x,
    onClick: R
  }, y), j = {
    role: v ? "menuitemradio" : C ? "menuitemcheckbox" : at,
    "aria-checked": v || C ? E : void 0,
    ...it(d, b),
    ...q,
    ref: _e(g, f),
    className: ie({
      block: ne,
      element: Dt,
      modifiers: W,
      className: t
    }),
    children: c.useMemo(() => F(s, W), [s, W])
  };
  return M ? /* @__PURE__ */ k.jsx("li", {
    role: Rt,
    children: /* @__PURE__ */ k.jsx("a", {
      href: o,
      ...j
    })
  }) : /* @__PURE__ */ k.jsx("li", {
    ...j
  });
}), Jn = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, o) {
  return /* @__PURE__ */ k.jsx("li", {
    role: "separator",
    ...n,
    ref: o,
    className: ie({
      block: ne,
      element: Dn,
      className: t
    })
  });
}));
const ei = "szh-menu", ti = "item", ni = (e) => (t) => (n) => {
  let o = `.${e}`;
  return t && (o += `__${t}`), n && (o += `--${n}`), o;
}, _t = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((o) => {
    const a = o.split("-").reduce((i, r) => `${i}${r[0].toUpperCase()}${r.slice(1)}`);
    Object.defineProperty(n, a, {
      value: e(o),
      enumerable: !0
    });
  }), n;
}, ii = ["dir-left", "dir-right", "dir-top", "dir-bottom"], Vt = /* @__PURE__ */ ni(ei);
[...ii];
const St = /* @__PURE__ */ _t(/* @__PURE__ */ Vt(ti), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), oi = dn(Zn)`
  ${St.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${St.typeCheckbox} {
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
`, ai = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: o
  } = n, {
    column: a
  } = t, i = o.getVisibleLeafColumns().length, r = [];
  return a.getCanSort() && r.push(/* @__PURE__ */ I(Re, { onClick: () => a.toggleSorting(!1), children: [
    /* @__PURE__ */ m(H, { icon: kt.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ I(Re, { onClick: () => a.toggleSorting(!0), children: [
    /* @__PURE__ */ m(H, { icon: Nt.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), a.getCanHide() && r.push(/* @__PURE__ */ I(Re, { disabled: i === 1, onClick: () => t.column.toggleVisibility(), children: [
    /* @__PURE__ */ m(H, { icon: gn.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ I(oi, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    r.length > 0 && /* @__PURE__ */ I(Ge, { children: [
      r,
      /* @__PURE__ */ m(Jn, {})
    ] }),
    /* @__PURE__ */ m(qn, { label: /* @__PURE__ */ I(Ge, { children: [
      /* @__PURE__ */ m(H, { icon: Pt.faTableColumns }),
      "Колонки"
    ] }), children: o.getAllLeafColumns().filter((s) => s.getCanHide()).map((s) => /* @__PURE__ */ m(Re, { type: "checkbox", checked: s.getIsVisible(), disabled: i === 1 && s.getIsVisible(), onClick: (h) => {
      h.keepOpen = !0, s.toggleVisibility();
    }, children: tt(s.columnDef.header, n) }, s.id)) })
  ] });
}, ri = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: o,
    getContext: a,
    getResizeHandler: i
  } = e;
  return /* @__PURE__ */ I("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, Ae`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ I("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Ae`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ I("div", { onClick: () => {
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
        o ? null : tt(n.columnDef.header, a()),
        " ",
        n.getIsSorted() === "asc" && /* @__PURE__ */ m(H, { icon: Et.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ m(H, { icon: Mt.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ m(ai, { header: e, children: ({
        open: r
      }) => /* @__PURE__ */ m("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, r ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ m(H, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: mn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ m("div", { css: [{
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
    }], onMouseDown: i(), onTouchStart: i(), className: "resizer" })
  ] });
}, si = ({
  ...e
}) => /* @__PURE__ */ m("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ m("tr", { children: t.headers.map((n) => /* @__PURE__ */ m(ri, { ...n }, n.id)) }, t.id)) });
var Ft = {}, $t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-info", o = 512, a = 512, i = ["info-circle"], r = "f05a", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faCircleInfo = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})($t);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = $t;
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
})(Ft);
var Ut = {}, Bt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-xmark", o = 512, a = 512, i = [61532, "times-circle", "xmark-circle"], r = "f057", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faCircleXmark = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Bt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Bt;
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
})(Ut);
const ci = ({
  type: e = "info",
  title: t,
  description: n,
  className: o,
  iconColor: a
}) => {
  const i = c.useMemo(() => vt(e).with("success", () => wn.faCheckCircle).with("error", () => Ut.faTimesCircle).with("info", () => Ft.faInfoCircle).exhaustive(), [e]), r = c.useMemo(() => a || vt(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [a, e]);
  return /* @__PURE__ */ m("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: o, children: /* @__PURE__ */ m("div", { children: /* @__PURE__ */ I("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ m("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ m(H, { icon: i, css: Ae`
                color: ${r};
              `, size: "6x" }) }),
    /* @__PURE__ */ m("div", { children: t }),
    /* @__PURE__ */ m("div", { children: n })
  ] }) }) });
}, Di = ({
  table: e,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ m(ci, { type: "error", title: e.error.message }) : /* @__PURE__ */ m(cn, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ I("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, Ae`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((n) => /* @__PURE__ */ m("colgroup", { children: n.headers.map((o) => /* @__PURE__ */ m("col", { span: o.colSpan, style: {
    width: o.column.getSize()
  } }, o.id)) }, n.id)),
  e.isLoading === !0 ? null : /* @__PURE__ */ m(si, { ...e }),
  /* @__PURE__ */ m("tbody", { children: e.getRowModel().rows.map((n) => /* @__PURE__ */ m(Sn, { onRowDoubleClick: t, ...n }, n.id)) })
] }) });
var Wt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", o = 512, a = 512, i = [128472, "refresh", "sync"], r = "f021", s = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Wt);
var Kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", o = 512, a = 512, i = [187, "angle-double-right"], r = "f101", s = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Kt);
var Xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", o = 320, a = 512, i = [8250], r = "f105", s = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Xt);
var Yt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", o = 320, a = 512, i = [8249], r = "f104", s = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Yt);
var Gt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", o = 512, a = 512, i = [171, "angle-double-left"], r = "f100", s = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      a,
      i,
      r,
      s
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = a, e.ligatures = i, e.unicode = r, e.svgPathData = s, e.aliases = i;
})(Gt);
const li = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...n
  }
}) => {
  const o = n.getState(), {
    pagination: a
  } = o, i = c.useMemo(() => a.pageIndex * a.pageSize + (t > 0 ? 1 : 0), [a, t]), r = c.useMemo(() => Math.min(t, (a.pageIndex + 1) * a.pageSize), [a, t]);
  return /* @__PURE__ */ I("div", { css: {
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
    /* @__PURE__ */ I("div", { css: {
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
      /* @__PURE__ */ m(le, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ m(H, { icon: Gt.faAnglesLeft }) }),
      /* @__PURE__ */ m(le, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ m(H, { css: {
        width: "18px"
      }, icon: Yt.faAngleLeft }) }),
      /* @__PURE__ */ I("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ m("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ m("input", { type: "number", value: n.getState().pagination.pageIndex + 1, onChange: (s) => {
          const h = s.target.value ? Number(s.target.value) - 1 : 0;
          n.setPageIndex(h);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        n.getPageCount()
      ] }),
      /* @__PURE__ */ m(le, { size: "small", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ m(H, { css: {
        width: "18px"
      }, icon: Xt.faAngleRight }) }),
      /* @__PURE__ */ m(le, { size: "small", onClick: () => n.setPageIndex(n.getPageCount() - 1), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ m(H, { icon: Kt.faAnglesRight }) }),
      e && /* @__PURE__ */ m(le, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ m(H, { spin: n.isFetching, icon: Wt.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ I("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ I("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ m("span", { css: {
          display: "none",
          "@container (min-width: 540px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ I("span", { css: {
          display: "none",
          "@container (min-width: 410px)": {
            display: "block"
          }
        }, children: [
          "c ",
          i,
          " по ",
          r,
          ","
        ] }),
        /* @__PURE__ */ I("span", { css: {
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
      /* @__PURE__ */ m("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: a.pageSize, onChange: (s) => {
        n.setPageSize(Number(s.target.value));
      }, children: [25, 50, 100].map((s) => /* @__PURE__ */ m("option", { value: s, children: s }, s)) })
    ] })
  ] });
}, Ti = He.memo(li), ui = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: o,
  ...a
}) => {
  const i = fn({
    getCoreRowModel: hn(),
    columnResizeMode: "onChange",
    ...a,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: o,
    ...i
  };
}, Ii = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: o = 25,
  defaultColumnVisibility: a = {},
  ...i
} = {}) => {
  var v, C;
  const [r, s] = c.useState({
    pageIndex: 0,
    pageSize: o
  }), [h, b] = c.useState(n), [f, g] = c.useState(a), y = c.useMemo(() => {
    const {
      pageIndex: M,
      pageSize: E
    } = r;
    return {
      start: M * E,
      length: E,
      sort: JSON.stringify(h.map((R) => ({
        property: R.id,
        direction: R.desc ? "DESC" : "ASC"
      })))
    };
  }, [r, h]), d = vn(e, {
    params: y,
    placeholderData: ln
  }), l = c.useMemo(() => {
    var M, E;
    return isNaN(Number((M = d.data) == null ? void 0 : M.recordsFiltered)) ? 0 : Number((E = d.data) == null ? void 0 : E.recordsFiltered);
  }, [(v = d.data) == null ? void 0 : v.recordsFiltered]), u = c.useMemo(() => l > 0 ? Math.ceil(l / r.pageSize) : 1, [r.pageSize, l]), p = ui({
    ...i,
    columns: t,
    data: (C = d.data) == null ? void 0 : C.data,
    isLoading: d.isLoading,
    isFetching: d.isFetching,
    manualPagination: !0,
    onPaginationChange: s,
    onSortingChange: b,
    onColumnVisibilityChange: g,
    pageCount: u,
    state: {
      ...i == null ? void 0 : i.state,
      pagination: r,
      sorting: h,
      columnVisibility: f
    }
  }), w = c.useCallback(() => {
    d.refetch();
  }, [d]);
  return {
    ...p,
    recordsTotal: l,
    refetch: w,
    error: d.error
  };
}, di = ({
  info: e,
  actions: t
}) => /* @__PURE__ */ m("div", { css: {
  display: "flex",
  gap: "0.25rem"
}, children: t.map(({
  key: n,
  icon: o,
  onClick: a
}) => /* @__PURE__ */ m(le, { onClick: () => a == null ? void 0 : a(e.row.original), css: {
  padding: "4px",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))",
  ":hover": {
    "--tw-text-opacity": "1",
    color: "rgb(75 85 99 / var(--tw-text-opacity))"
  }
}, children: /* @__PURE__ */ m(H, { icon: o }) }, n)) }), fi = He.memo(di), hi = (e) => ({
  header: "",
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (t) => /* @__PURE__ */ m(fi, { info: t, actions: e })
}), gi = () => (e, t, n) => ({
  header: t,
  accessorKey: e,
  cell: (o) => /* @__PURE__ */ m(Ge, { children: o.getValue() ? "Да" : "Нет" }),
  ...n
}), mi = () => (e, t, {
  inputFormat: n = "YYYY-MM-DD HH:mm:ss",
  displayFormat: o = "DD.MM.YYYY HH:mm:ss",
  ...a
} = {}) => ({
  header: t,
  accessorKey: e,
  ...a,
  cell: (i) => i.getValue() ? pn(i.getValue(), n).format(o) : ""
}), vi = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: n,
    isLoading: o
  } = bn(t);
  return o ? /* @__PURE__ */ m(H, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: un.faCircleNotch, spin: !0 }) : n(e.getValue());
}, pi = He.memo(vi), bi = () => (e, t, n, o) => ({
  header: n,
  accessorKey: e,
  ...o,
  cell: (a) => /* @__PURE__ */ m(pi, { info: a, dictionary: t })
}), wi = () => (e, t, n) => ({
  ...n,
  header: t,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), Ci = () => (e = "id", t) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...t
}), Ri = () => ({
  id: Ci(),
  actions: hi,
  display: wi(),
  boolean: gi(),
  date: mi(),
  dictionary: bi()
});
export {
  Ti as P,
  Di as T,
  Ri as c,
  Ii as u
};
