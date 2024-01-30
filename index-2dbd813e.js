import { j as m, a as I, F as Ge, S as cn, k as ln, f as un } from "./library-4e772ba4.js";
import { j as k, n as dn, a as Ae, I as le, M as fn } from "./mui-02912ce2.js";
import { f as tt, u as hn, g as gn } from "./table-e52be9b1.js";
import { R as He, c as pe, r as c } from "./react-54946355.js";
import { f as mn, a as vn, b as pn, h as bn, c as wn } from "./useDictionary-a8c39cbd.js";
import { F as H } from "./icons-6b7f2986.js";
import { N as vt, f as Cn } from "./index-38b3fe08.js";
const yn = ({
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
}], children: tt(e.column.columnDef.cell, e.getContext()) }, e.id), Sn = He.memo(yn), Mn = ({
  onRowDoubleClick: e,
  ...t
}) => /* @__PURE__ */ m("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (n) => e == null ? void 0 : e(t.original, n), children: t.getVisibleCells().map((n) => /* @__PURE__ */ m(Sn, { ...n }, n.id)) }, t.id);
var Mt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", o = 384, r = 512, i = [8595], a = "f063", s = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Mt);
var Et = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", o = 384, r = 512, i = [8593], a = "f062", s = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Et);
var Pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", o = 512, r = 512, i = ["columns"], a = "f0db", s = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Pt);
var Nt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", o = 576, r = 512, i = ["sort-alpha-desc", "sort-alpha-down-alt"], a = "f881", s = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Nt);
var kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", o = 576, r = 512, i = ["sort-alpha-up"], a = "f15e", s = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(kt);
const nt = (e) => !!e && e[0] === "o", Ze = pe.unstable_batchedUpdates || ((e) => e()), ce = (e, t, n = 1e-4) => Math.abs(e - t) < n, be = (e, t) => e === !0 || !!(e && e[t]), F = (e, t) => typeof e == "function" ? e(t) : e, En = "_szhsinMenu", Pn = (e) => e[En], Ce = (e, t) => (t && Object.keys(t).forEach((n) => {
  const o = e[n], r = t[n];
  typeof r == "function" && o ? e[n] = (...i) => {
    r(...i), o(...i);
  } : e[n] = r;
}), e), Nn = (e) => {
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
  const r = t ? `${e}__${t}` : e;
  let i = r;
  n && Object.keys(n).forEach((s) => {
    const d = n[s];
    d && (i += ` ${r}--${d === !0 ? s : `${s}-${d}`}`);
  });
  let a = typeof o == "function" ? o(n) : o;
  return typeof a == "string" && (a = a.trim(), a && (i += ` ${a}`)), i;
}, [e, t, n, o]), kn = "szh-menu-container", ne = "szh-menu", Dn = "arrow", Dt = "item", Tn = "divider", In = "submenu", Tt = /* @__PURE__ */ c.createContext(), ot = /* @__PURE__ */ c.createContext({}), qe = /* @__PURE__ */ c.createContext({}), It = /* @__PURE__ */ c.createContext({}), Rn = /* @__PURE__ */ c.createContext({}), je = /* @__PURE__ */ c.createContext({}), L = /* @__PURE__ */ Object.freeze({
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
}), zn = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ye = "absolute", Rt = "presentation", at = "menuitem", bt = {
  "aria-hidden": !0,
  role: at
}, An = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: o,
  isOpen: r,
  theming: i,
  transition: a,
  onClose: s
}) => {
  const d = be(a, "item"), b = ({
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
  }, h = (g) => {
    r && !g.currentTarget.contains(g.relatedTarget) && F(s, {
      reason: we.BLUR
    });
  };
  return /* @__PURE__ */ k.jsx("div", {
    ...Ce({
      onKeyDown: b,
      onBlur: h
    }, n),
    className: ie({
      block: kn,
      modifiers: c.useMemo(() => ({
        theme: i,
        itemTransition: d
      }), [i, d]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: o
  });
}, Ln = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, o, r) => {
      t ? e || (e = setTimeout(() => {
        e = 0, o();
      }, n)) : r == null || r();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, xn = (e, t) => {
  const [n, o] = c.useState(), i = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, a = c.useCallback((d, b) => {
    const {
      items: h
    } = i;
    if (!d)
      i.items = [];
    else if (b)
      h.push(d);
    else {
      const g = h.indexOf(d);
      g > -1 && (h.splice(g, 1), d.contains(document.activeElement) && (t.current.focus(), o()));
    }
    i.hoverIndex = -1, i.sorted = !1;
  }, [i, t]), s = c.useCallback((d, b, h) => {
    const {
      items: g,
      hoverIndex: y
    } = i, f = () => {
      if (i.sorted)
        return;
      const p = e.current.querySelectorAll(".szh-menu__item");
      g.sort((w, v) => pt(p, w) - pt(p, v)), i.sorted = !0;
    };
    let l = -1, u;
    switch (d) {
      case N.RESET:
        break;
      case N.SET:
        u = b;
        break;
      case N.UNSET:
        u = (p) => p === b ? void 0 : p;
        break;
      case N.FIRST:
        f(), l = 0, u = g[l];
        break;
      case N.LAST:
        f(), l = g.length - 1, u = g[l];
        break;
      case N.SET_INDEX:
        f(), l = h, u = g[l];
        break;
      case N.INCREASE:
        f(), l = y, l < 0 && (l = g.indexOf(b)), l++, l >= g.length && (l = 0), u = g[l];
        break;
      case N.DECREASE:
        f(), l = y, l < 0 && (l = g.indexOf(b)), l--, l < 0 && (l = g.length - 1), u = g[l];
        break;
    }
    u || (l = -1), o(u), i.hoverIndex = l;
  }, [e, i]);
  return {
    hoverItem: n,
    dispatch: s,
    updateItems: a
  };
}, On = (e, t, n, o) => {
  const r = t.current.getBoundingClientRect(), i = e.current.getBoundingClientRect(), a = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), s = Nn(o), d = (l) => l + i.left - a.left - s.left, b = (l) => l + i.left + r.width - a.right + s.right, h = (l) => l + i.top - a.top - s.top, g = (l) => l + i.top + r.height - a.bottom + s.bottom;
  return {
    menuRect: r,
    containerRect: i,
    getLeftOverflow: d,
    getRightOverflow: b,
    getTopOverflow: h,
    getBottomOverflow: g,
    confineHorizontally: (l) => {
      let u = d(l);
      if (u < 0)
        l -= u;
      else {
        const p = b(l);
        p > 0 && (l -= p, u = d(l), u < 0 && (l -= u));
      }
      return l;
    },
    confineVertically: (l) => {
      let u = h(l);
      if (u < 0)
        l -= u;
      else {
        const p = g(l);
        p > 0 && (l -= p, u = h(l), u < 0 && (l -= u));
      }
      return l;
    }
  };
}, Hn = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: o,
  menuRect: r
}) => {
  let i = n.top - o.top - t + n.height / 2;
  const a = e.current.offsetHeight * 1.25;
  return i = Math.max(a, i), i = Math.min(i, r.height - a), i;
}, jn = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: o,
  placeLeftX: r,
  placeRightX: i,
  getLeftOverflow: a,
  getRightOverflow: s,
  confineHorizontally: d,
  confineVertically: b,
  arrowRef: h,
  arrow: g,
  direction: y,
  position: f
}) => {
  let l = y, u = o;
  f !== "initial" && (u = b(u), f === "anchor" && (u = Math.min(u, e.bottom - t.top), u = Math.max(u, e.top - t.top - n.height)));
  let p, w, v;
  return l === "left" ? (p = r, f !== "initial" && (w = a(p), w < 0 && (v = s(i), (v <= 0 || -w > v) && (p = i, l = "right")))) : (p = i, f !== "initial" && (v = s(p), v > 0 && (w = a(r), (w >= 0 || -w < v) && (p = r, l = "left")))), f === "auto" && (p = d(p)), {
    arrowY: g ? Hn({
      menuY: u,
      arrowRef: h,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: p,
    y: u,
    computedDirection: l
  };
}, _n = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: o,
  menuRect: r
}) => {
  let i = n.left - o.left - t + n.width / 2;
  const a = e.current.offsetWidth * 1.25;
  return i = Math.max(a, i), i = Math.min(i, r.width - a), i;
}, Vn = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: o,
  placeTopY: r,
  placeBottomY: i,
  getTopOverflow: a,
  getBottomOverflow: s,
  confineHorizontally: d,
  confineVertically: b,
  arrowRef: h,
  arrow: g,
  direction: y,
  position: f
}) => {
  let l = y === "top" ? "top" : "bottom", u = o;
  f !== "initial" && (u = d(u), f === "anchor" && (u = Math.min(u, e.right - t.left), u = Math.max(u, e.left - t.left - n.width)));
  let p, w, v;
  return l === "top" ? (p = r, f !== "initial" && (w = a(p), w < 0 && (v = s(i), (v <= 0 || -w > v) && (p = i, l = "bottom")))) : (p = i, f !== "initial" && (v = s(p), v > 0 && (w = a(r), (w >= 0 || -w < v) && (p = r, l = "top")))), f === "auto" && (p = b(p)), {
    arrowX: g ? _n({
      menuX: u,
      arrowRef: h,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: u,
    y: p,
    computedDirection: l
  };
}, Fn = ({
  arrow: e,
  align: t,
  direction: n,
  gap: o,
  shift: r,
  position: i,
  anchorRect: a,
  arrowRef: s,
  positionHelpers: d
}) => {
  const {
    menuRect: b,
    containerRect: h
  } = d, g = n === "left" || n === "right";
  let y = g ? o : r, f = g ? r : o;
  if (e) {
    const E = s.current;
    g ? y += E.offsetWidth : f += E.offsetHeight;
  }
  const l = a.left - h.left - b.width - y, u = a.right - h.left + y, p = a.top - h.top - b.height - f, w = a.bottom - h.top + f;
  let v, C;
  t === "end" ? (v = a.right - h.left - b.width, C = a.bottom - h.top - b.height) : t === "center" ? (v = a.left - h.left - (b.width - a.width) / 2, C = a.top - h.top - (b.height - a.height) / 2) : (v = a.left - h.left, C = a.top - h.top), v += y, C += f;
  const M = {
    ...d,
    anchorRect: a,
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
      return jn(M);
    case "top":
    case "bottom":
    default:
      return Vn(M);
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
  arrowProps: r = {},
  anchorPoint: i,
  anchorRef: a,
  containerRef: s,
  containerProps: d,
  focusProps: b,
  externalRef: h,
  parentScrollingRef: g,
  align: y = "start",
  direction: f = "bottom",
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
  }), [de, Y] = c.useState({}), [D, J] = c.useState(), [_, ye] = c.useState(f), [K] = c.useState(Ln), [fe, he] = c.useReducer((S) => S + 1, 1), {
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
  } = xn(V, ke), U = nt(C), lt = be(Se, "open"), ut = be(Se, "close"), X = Ve.current, Zt = (S) => {
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
    const G = a ? (O = a.current) == null ? void 0 : O.getBoundingClientRect() : i ? {
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
    const B = On(s, V, X.menu, Me);
    let {
      arrowX: A,
      arrowY: oe,
      x: ae,
      y: Z,
      computedDirection: We
    } = Fn({
      arrow: o,
      align: y,
      direction: f,
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
  }, [o, y, Me, f, x, W, l, u, i, a, s, ge, Ee, X]);
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
    element: Dn,
    modifiers: on,
    className: r.className
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
    ref: _e(h, V),
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
      ...r,
      className: an,
      style: {
        display: "block",
        position: Ye,
        left: de.x,
        top: de.y,
        ...r.style
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
  return d ? /* @__PURE__ */ k.jsx(An, {
    ...d,
    isOpen: U,
    children: ht
  }) : ht;
}, $n = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: o,
  initialMounted: r,
  unmountOnClose: i,
  transition: a,
  transitionTimeout: s,
  boundingBoxRef: d,
  boundingBoxPadding: b,
  reposition: h = "auto",
  submenuOpenDelay: g = 300,
  submenuCloseDelay: y = 150,
  viewScroll: f = "initial",
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
    initialMounted: r,
    unmountOnClose: i,
    transition: a,
    transitionTimeout: s,
    boundingBoxRef: d,
    boundingBoxPadding: b,
    rootMenuRef: C,
    rootAnchorRef: E,
    scrollNodesRef: M,
    reposition: h,
    viewScroll: f,
    submenuOpenDelay: g,
    submenuCloseDelay: y
  }), [r, i, a, s, E, d, b, h, f, g, y]), q = c.useMemo(() => ({
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
          transition: a,
          onClose: x
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ pe.createPortal(j, document.body) : l ? l.target ? /* @__PURE__ */ pe.createPortal(j, l.target) : l.stablePosition ? null : j : j;
}), Qe = 0, Je = 1, Le = 2, xe = 3, Oe = 4, Un = 5, At = 6, Bn = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Lt = (e) => ({
  _s: e,
  status: Bn[e],
  isEnter: e < xe,
  isMounted: e !== At,
  isResolved: e === Le || e > Oe
}), et = (e) => e ? At : Un, Wn = (e, t) => {
  switch (e) {
    case Je:
    case Qe:
      return Le;
    case Oe:
    case xe:
      return et(t);
  }
}, Kn = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Xn = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), yt = (e, t, n, o, r) => {
  clearTimeout(o.current);
  const i = Lt(e);
  t(i), n.current = i, r && r({
    current: i
  });
}, Yn = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: o,
  timeout: r,
  initialEntered: i,
  mountOnEnter: a,
  unmountOnExit: s,
  onStateChange: d
} = {}) => {
  const [b, h] = c.useState(() => Lt(i ? Le : et(a))), g = c.useRef(b), y = c.useRef(), [f, l] = Kn(r), u = c.useCallback(() => {
    const w = Wn(g.current._s, s);
    w && yt(w, h, g, y, d);
  }, [d, s]), p = c.useCallback((w) => {
    const v = (M) => {
      switch (yt(M, h, g, y, d), M) {
        case Je:
          f >= 0 && (y.current = setTimeout(u, f));
          break;
        case Oe:
          l >= 0 && (y.current = setTimeout(u, l));
          break;
        case Qe:
        case xe:
          y.current = Xn(v, M);
          break;
      }
    }, C = g.current.isEnter;
    typeof w != "boolean" && (w = !C), w ? !C && v(e ? n ? Qe : Je : Le) : C && v(t ? o ? xe : Oe : et(s));
  }, [u, d, e, t, n, o, f, l, s]);
  return c.useEffect(() => () => clearTimeout(y.current), []), [b, p, u];
}, Gn = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: o,
  transitionTimeout: r = 500
} = {}) => {
  const [{
    status: i
  }, a, s] = Yn({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: r,
    enter: be(o, "open"),
    exit: be(o, "close")
  });
  return [{
    state: zn[i],
    endTransition: s
  }, a];
}, xt = (e) => {
  const [t, n] = Gn(e), [o, r] = c.useState(), i = (a, s) => {
    r({
      position: a,
      alwaysUpdate: s
    }), n(!0);
  };
  return [{
    menuItemFocus: o,
    ...t
  }, n, i];
}, Zn = (e, t) => {
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
}, qn = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: o,
  menuButton: r,
  instanceRef: i,
  onMenuChange: a,
  ...s
}, d) {
  const [b, h, g] = xt(s), {
    state: y
  } = b, f = nt(y), l = c.useRef(null), u = Zn(y, (E, R) => g(R.detail ? void 0 : ue.FIRST)), p = c.useCallback((E) => {
    h(!1), E.key && l.current.focus();
  }, [h]), w = (E) => {
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
  }, v = F(r, {
    open: f
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
  Pn(v.type) === "MenuButton" && (C.isOpen = f);
  const M = /* @__PURE__ */ c.cloneElement(v, C);
  return Ot(a, f), c.useImperativeHandle(i, () => ({
    openMenu: g,
    closeMenu: () => h(!1)
  })), /* @__PURE__ */ k.jsxs(c.Fragment, {
    children: [M, /* @__PURE__ */ k.jsx($n, {
      ...s,
      ...b,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: l,
      ref: d,
      onClose: p
    })]
  });
}), Ht = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), o = /* @__PURE__ */ c.forwardRef((r, i) => {
    const a = c.useRef(null);
    return /* @__PURE__ */ k.jsx(n, {
      ...r,
      itemRef: a,
      externalRef: i,
      isHovering: c.useContext(Tt) === a.current
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
}, Qn = /* @__PURE__ */ Ht("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: o,
  direction: r,
  label: i,
  openTrigger: a,
  onMenuChange: s,
  isHovering: d,
  instanceRef: b,
  itemRef: h,
  captureFocus: g,
  repositionFlag: y,
  itemProps: f = {},
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
  }, fe = () => !d && !Y && W(N.SET, h.current), he = (T) => {
    fe(), a || (_.v = setTimeout(() => Ze(K), Math.max(T, 0)));
  }, Se = (T) => {
    Y || (T.stopPropagation(), !(_.v || D) && x.on(v, () => he(w - v), () => he(w)));
  }, ge = () => {
    ye(), D || W(N.UNSET, h.current);
  }, Me = (T) => {
    if (d)
      switch (T.key) {
        case L.ENTER:
          T.preventDefault();
        case L.SPACE:
        case L.RIGHT:
          a !== "none" && K(ue.FIRST);
      }
  }, Ee = (T) => {
    let V = !1;
    switch (T.key) {
      case L.LEFT:
        D && (h.current.focus(), z(!1), V = !0);
        break;
      case L.RIGHT:
        D || (V = !0);
        break;
    }
    V && (T.preventDefault(), T.stopPropagation());
  };
  jt(Y, h, q), Ot(s, D), c.useEffect(() => x.toggle(D), [x, D]), c.useEffect(() => () => clearTimeout(_.v), [_]), c.useEffect(() => {
    d && R ? h.current.focus() : z(!1);
  }, [d, R, z, h]), c.useImperativeHandle(b, () => ({
    openMenu: (...T) => {
      R && K(...T);
    },
    closeMenu: () => {
      D && (h.current.focus(), z(!1));
    }
  }));
  const ee = c.useMemo(() => ({
    open: D,
    hover: d,
    disabled: Y,
    submenu: !0
  }), [D, d, Y]), {
    ref: Ve,
    className: Pe,
    ...me
  } = f, Fe = Ce({
    onPointerEnter: x.off,
    onPointerMove: Se,
    onPointerLeave: ge,
    onKeyDown: Me,
    onClick: () => a !== "none" && K()
  }, me), Ne = () => {
    const T = /* @__PURE__ */ k.jsx(zt, {
      ...l,
      ...P,
      ariaLabel: t || (typeof i == "string" ? i : "Submenu"),
      anchorRef: h,
      containerRef: j ? p : J,
      direction: r || (M === "right" || M === "left" ? M : "right"),
      parentScrollingRef: j && C,
      isDisabled: Y
    }), V = p.current;
    return j && V ? /* @__PURE__ */ pe.createPortal(T, V) : T;
  };
  return /* @__PURE__ */ k.jsxs("li", {
    className: ie({
      block: ne,
      element: In,
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
      ...it(Y, d),
      ...Fe,
      ref: _e(Ve, h),
      className: ie({
        block: ne,
        element: Dt,
        modifiers: ee,
        className: Pe
      }),
      children: c.useMemo(() => F(i, ee), [i, ee])
    }), de && Ne()]
  });
}), Jn = (e, t, n, o) => {
  const {
    submenuCloseDelay: r
  } = c.useContext(je), {
    isParentOpen: i,
    submenuCtx: a,
    dispatch: s,
    updateItems: d
  } = c.useContext(ot), b = () => {
    !n && !o && s(N.SET, e.current);
  }, h = () => {
    !o && s(N.UNSET, e.current);
  }, g = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && h();
  }, y = (l) => {
    o || (l.stopPropagation(), a.on(r, b, b));
  }, f = (l, u) => {
    a.off(), !u && h();
  };
  return jt(o, e, d), c.useEffect(() => {
    n && i && t.current && t.current.focus();
  }, [t, n, i]), {
    setHover: b,
    onBlur: g,
    onPointerMove: y,
    onPointerLeave: f
  };
}, Re = /* @__PURE__ */ Ht("MenuItem", function({
  className: t,
  value: n,
  href: o,
  type: r,
  checked: i,
  disabled: a,
  children: s,
  onClick: d,
  isHovering: b,
  itemRef: h,
  externalRef: g,
  ...y
}) {
  const f = !!a, {
    setHover: l,
    ...u
  } = Jn(h, h, b, f), p = c.useContext(It), w = c.useContext(Rn), v = r === "radio", C = r === "checkbox", M = !!o && !f && !v && !C, E = v ? w.value === n : C ? !!i : !1, R = (P) => {
    if (f) {
      P.stopPropagation(), P.preventDefault();
      return;
    }
    const z = {
      value: n,
      syntheticEvent: P
    };
    P.key !== void 0 && (z.key = P.key), C && (z.checked = !E), v && (z.name = w.name), F(d, z), v && F(w.onRadioChange, z), p.handleClick(z, C || v);
  }, x = (P) => {
    if (b)
      switch (P.key) {
        case L.ENTER:
          P.preventDefault();
        case L.SPACE:
          M ? h.current.click() : R(P);
      }
  }, W = c.useMemo(() => ({
    type: r,
    disabled: f,
    hover: b,
    checked: E,
    anchor: M
  }), [r, f, b, E, M]), q = Ce({
    ...u,
    onPointerDown: l,
    onKeyDown: x,
    onClick: R
  }, y), j = {
    role: v ? "menuitemradio" : C ? "menuitemcheckbox" : at,
    "aria-checked": v || C ? E : void 0,
    ...it(f, b),
    ...q,
    ref: _e(g, h),
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
}), ei = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, o) {
  return /* @__PURE__ */ k.jsx("li", {
    role: "separator",
    ...n,
    ref: o,
    className: ie({
      block: ne,
      element: Tn,
      className: t
    })
  });
}));
const ti = "szh-menu", ni = "item", ii = (e) => (t) => (n) => {
  let o = `.${e}`;
  return t && (o += `__${t}`), n && (o += `--${n}`), o;
}, _t = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((o) => {
    const r = o.split("-").reduce((i, a) => `${i}${a[0].toUpperCase()}${a.slice(1)}`);
    Object.defineProperty(n, r, {
      value: e(o),
      enumerable: !0
    });
  }), n;
}, oi = ["dir-left", "dir-right", "dir-top", "dir-bottom"], Vt = /* @__PURE__ */ ii(ti);
[...oi];
const St = /* @__PURE__ */ _t(/* @__PURE__ */ Vt(ni), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), ai = dn(qn)`
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
`, ri = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: o
  } = n, {
    column: r
  } = t, i = o.getVisibleLeafColumns().length, a = [];
  return r.getCanSort() && a.push(/* @__PURE__ */ I(Re, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ m(H, { icon: kt.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ I(Re, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ m(H, { icon: Nt.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && a.push(/* @__PURE__ */ I(Re, { disabled: i === 1, onClick: () => t.column.toggleVisibility(), children: [
    /* @__PURE__ */ m(H, { icon: mn.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ I(ai, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    a.length > 0 && /* @__PURE__ */ I(Ge, { children: [
      a,
      /* @__PURE__ */ m(ei, {})
    ] }),
    /* @__PURE__ */ m(Qn, { label: /* @__PURE__ */ I(Ge, { children: [
      /* @__PURE__ */ m(H, { icon: Pt.faTableColumns }),
      "Колонки"
    ] }), children: o.getAllLeafColumns().filter((s) => s.getCanHide()).map((s) => /* @__PURE__ */ m(Re, { type: "checkbox", checked: s.getIsVisible(), disabled: i === 1 && s.getIsVisible(), onClick: (d) => {
      d.keepOpen = !0, s.toggleVisibility();
    }, children: tt(s.columnDef.header, n) }, s.id)) })
  ] });
}, si = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: o,
    getContext: r,
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
        o ? null : tt(n.columnDef.header, r()),
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
      /* @__PURE__ */ m(ri, { header: e, children: ({
        open: a
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
      }, a ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ m(H, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: vn.faCaretDown }) }) })
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
}, ci = ({
  ...e
}) => /* @__PURE__ */ m("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ m("tr", { children: t.headers.map((n) => /* @__PURE__ */ m(si, { ...n }, n.id)) }, t.id)) });
var Ft = {}, $t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-info", o = 512, r = 512, i = ["info-circle"], a = "f05a", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faCircleInfo = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
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
  var t = "fas", n = "circle-xmark", o = 512, r = 512, i = [61532, "times-circle", "xmark-circle"], a = "f057", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faCircleXmark = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
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
const li = ({
  type: e = "info",
  title: t,
  description: n,
  className: o,
  iconColor: r
}) => {
  const i = c.useMemo(() => vt(e).with("success", () => Cn.faCheckCircle).with("error", () => Ut.faTimesCircle).with("info", () => Ft.faInfoCircle).exhaustive(), [e]), a = c.useMemo(() => r || vt(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
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
                color: ${a};
              `, size: "6x" }) }),
    /* @__PURE__ */ m("div", { children: t }),
    /* @__PURE__ */ m("div", { children: n })
  ] }) }) });
}, Ti = ({
  table: e,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ m(li, { type: "error", title: e.error.message }) : /* @__PURE__ */ m(cn, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ I("table", { css: [{
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
  e.isLoading === !0 ? null : /* @__PURE__ */ m(ci, { ...e }),
  /* @__PURE__ */ m("tbody", { children: e.getRowModel().rows.map((n) => /* @__PURE__ */ m(Mn, { onRowDoubleClick: t, ...n }, n.id)) })
] }) });
var Wt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", o = 512, r = 512, i = [128472, "refresh", "sync"], a = "f021", s = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Wt);
var Kt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", o = 512, r = 512, i = [187, "angle-double-right"], a = "f101", s = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Kt);
var Xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", o = 320, r = 512, i = [8250], a = "f105", s = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Xt);
var Yt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", o = 320, r = 512, i = [8249], a = "f104", s = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Yt);
var Gt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", o = 512, r = 512, i = [171, "angle-double-left"], a = "f100", s = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      o,
      r,
      i,
      a,
      s
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = o, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = s, e.aliases = i;
})(Gt);
const ui = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...n
  }
}) => {
  const o = n.getState(), {
    pagination: r
  } = o, i = c.useMemo(() => r.pageIndex * r.pageSize + (t > 0 ? 1 : 0), [r, t]), a = c.useMemo(() => Math.min(t, (r.pageIndex + 1) * r.pageSize), [r, t]);
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
          const d = s.target.value ? Number(s.target.value) - 1 : 0;
          n.setPageIndex(d);
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
          a,
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
      }, value: r.pageSize, onChange: (s) => {
        n.setPageSize(Number(s.target.value));
      }, children: [25, 50, 100].map((s) => /* @__PURE__ */ m("option", { value: s, children: s }, s)) })
    ] })
  ] });
}, Ii = He.memo(ui), di = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: o,
  ...r
}) => {
  const i = hn({
    getCoreRowModel: gn(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: o,
    ...i
  };
}, Ri = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: o = 25,
  defaultColumnVisibility: r = {},
  ...i
} = {}) => {
  var v, C;
  const [a, s] = c.useState({
    pageIndex: 0,
    pageSize: o
  }), [d, b] = c.useState(n), [h, g] = c.useState(r), y = c.useMemo(() => {
    const {
      pageIndex: M,
      pageSize: E
    } = a;
    return {
      start: M * E,
      length: E,
      sort: JSON.stringify(d.map((R) => ({
        property: R.id,
        direction: R.desc ? "DESC" : "ASC"
      })))
    };
  }, [a, d]), f = pn(e, {
    params: y,
    placeholderData: ln
  }), l = c.useMemo(() => {
    var M, E;
    return isNaN(Number((M = f.data) == null ? void 0 : M.recordsFiltered)) ? 0 : Number((E = f.data) == null ? void 0 : E.recordsFiltered);
  }, [(v = f.data) == null ? void 0 : v.recordsFiltered]), u = c.useMemo(() => l > 0 ? Math.ceil(l / a.pageSize) : 1, [a.pageSize, l]), p = di({
    ...i,
    columns: t,
    data: (C = f.data) == null ? void 0 : C.data,
    isLoading: f.isLoading,
    isFetching: f.isFetching,
    manualPagination: !0,
    onPaginationChange: s,
    onSortingChange: b,
    onColumnVisibilityChange: g,
    pageCount: u,
    state: {
      ...i == null ? void 0 : i.state,
      pagination: a,
      sorting: d,
      columnVisibility: h
    }
  }), w = c.useCallback(() => {
    f.refetch();
  }, [f]);
  return {
    ...p,
    recordsTotal: l,
    refetch: w,
    error: f.error
  };
}, fi = ({
  info: e,
  actions: t
}) => /* @__PURE__ */ m("div", { css: {
  display: "flex",
  gap: "0.25rem"
}, children: t.map(({
  key: n,
  icon: o,
  tooltip: r,
  css: i,
  onClick: a
}) => {
  const s = /* @__PURE__ */ m(le, { onClick: (d) => {
    a == null || a(e.row.original), d.stopPropagation();
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
  }, i], children: /* @__PURE__ */ m(H, { icon: o }) }, n);
  return r ? /* @__PURE__ */ m(fn, { title: r, children: s }, n) : s;
}) }), hi = He.memo(fi), gi = (e, t) => ({
  header: t == null ? void 0 : t.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (n) => /* @__PURE__ */ m(hi, { info: n, actions: e })
}), mi = () => (e, t, n) => ({
  header: t,
  accessorKey: e,
  cell: (o) => /* @__PURE__ */ m(Ge, { children: o.getValue() ? "Да" : "Нет" }),
  ...n
}), vi = () => (e, t, {
  inputFormat: n = "YYYY-MM-DD HH:mm:ss",
  displayFormat: o = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: t,
  accessorKey: e,
  ...r,
  cell: (i) => i.getValue() ? bn(i.getValue(), n).format(o) : ""
}), pi = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: n,
    isLoading: o
  } = wn(t);
  return o ? /* @__PURE__ */ m(H, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: un.faCircleNotch, spin: !0 }) : n(e.getValue());
}, bi = He.memo(pi), wi = () => (e, t, n, o) => ({
  header: n,
  accessorKey: e,
  ...o,
  cell: (r) => /* @__PURE__ */ m(bi, { info: r, dictionary: t })
}), Ci = () => (e, t, n) => ({
  ...n,
  header: t,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), yi = () => (e = "id", t) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...t
}), zi = () => ({
  id: yi(),
  actions: gi,
  display: Ci(),
  boolean: mi(),
  date: vi(),
  dictionary: wi()
});
export {
  Ii as P,
  Ti as T,
  zi as c,
  Ri as u
};
