import { j as v, a as R, F as dt, S as kn, k as Tn, f as Dn } from "./library-364e75ac.js";
import { j as D, n as In, a as Xe, I as Ce } from "./mui-d2313b11.js";
import { f as wt, u as An, g as Rn } from "./table-90839a50.js";
import { R as Qe, c as De, r as c } from "./react-181b9648.js";
import { f as zn, a as On, u as xn, h as Ln, b as jn } from "./useDictionary-403c6ca6.js";
import { F as _ } from "./icons-42066a3f.js";
import { f as Hn } from "./faCheckCircle-ad748d9a.js";
const _n = ({
  ...e
}) => /* @__PURE__ */ v("td", { css: [{
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
}], children: wt(e.column.columnDef.cell, e.getContext()) }, e.id), Vn = Qe.memo(_n), Fn = ({
  onRowDoubleClick: e,
  ...t
}) => /* @__PURE__ */ v("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (n) => e == null ? void 0 : e(t.original, n), children: t.getVisibleCells().map((n) => /* @__PURE__ */ v(Vn, { ...n }, n.id)) }, t.id);
var $t = {};
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
})($t);
var Bt = {};
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
})(Bt);
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
var Kt = {};
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
})(Kt);
var Wt = {};
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
})(Wt);
const yt = (e) => !!e && e[0] === "o", ft = De.unstable_batchedUpdates || ((e) => e()), ye = (e, t, n = 1e-4) => Math.abs(e - t) < n, Ie = (e, t) => e === !0 || !!(e && e[t]), B = (e, t) => typeof e == "function" ? e(t) : e, $n = "_szhsinMenu", Bn = (e) => e[$n], ze = (e, t) => (t && Object.keys(t).forEach((n) => {
  const i = e[n], r = t[n];
  typeof r == "function" && i ? e[n] = (...o) => {
    r(...o), i(...o);
  } : e[n] = r;
}), e), Un = (e) => {
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
}, lt = (e) => {
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
function Ot(e, t) {
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
}, [e, t, n, i]), Kn = "szh-menu-container", ge = "szh-menu", Wn = "arrow", Xt = "item", Xn = "divider", Yn = "submenu", Yt = /* @__PURE__ */ c.createContext(), St = /* @__PURE__ */ c.createContext({}), ht = /* @__PURE__ */ c.createContext({}), Gt = /* @__PURE__ */ c.createContext({}), Gn = /* @__PURE__ */ c.createContext({}), et = /* @__PURE__ */ c.createContext({}), L = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), T = /* @__PURE__ */ Object.freeze({
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
}), Zn = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), ut = "absolute", Zt = "presentation", Mt = "menuitem", xt = {
  "aria-hidden": !0,
  role: Mt
}, qn = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: i,
  isOpen: r,
  theming: o,
  transition: a,
  onClose: s
}) => {
  const f = Ie(a, "item"), g = ({
    key: m
  }) => {
    switch (m) {
      case L.ESC:
        B(s, {
          key: m,
          reason: Ae.CANCEL
        });
        break;
    }
  }, d = (m) => {
    r && !m.currentTarget.contains(m.relatedTarget) && B(s, {
      reason: Ae.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...ze({
      onKeyDown: g,
      onBlur: d
    }, n),
    className: me({
      block: Kn,
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
}, Jn = () => {
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
}, Qn = (e, t) => {
  const [n, i] = c.useState(), o = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, a = c.useCallback((f, g) => {
    const {
      items: d
    } = o;
    if (!f)
      o.items = [];
    else if (g)
      d.push(f);
    else {
      const m = d.indexOf(f);
      m > -1 && (d.splice(m, 1), f.contains(document.activeElement) && (t.current.focus(), i()));
    }
    o.hoverIndex = -1, o.sorted = !1;
  }, [o, t]), s = c.useCallback((f, g, d) => {
    const {
      items: m,
      hoverIndex: C
    } = o, h = () => {
      if (o.sorted)
        return;
      const b = e.current.querySelectorAll(".szh-menu__item");
      m.sort((w, p) => Ot(b, w) - Ot(b, p)), o.sorted = !0;
    };
    let l = -1, u;
    switch (f) {
      case T.RESET:
        break;
      case T.SET:
        u = g;
        break;
      case T.UNSET:
        u = (b) => b === g ? void 0 : b;
        break;
      case T.FIRST:
        h(), l = 0, u = m[l];
        break;
      case T.LAST:
        h(), l = m.length - 1, u = m[l];
        break;
      case T.SET_INDEX:
        h(), l = d, u = m[l];
        break;
      case T.INCREASE:
        h(), l = C, l < 0 && (l = m.indexOf(g)), l++, l >= m.length && (l = 0), u = m[l];
        break;
      case T.DECREASE:
        h(), l = C, l < 0 && (l = m.indexOf(g)), l--, l < 0 && (l = m.length - 1), u = m[l];
        break;
    }
    u || (l = -1), i(u), o.hoverIndex = l;
  }, [e, o]);
  return {
    hoverItem: n,
    dispatch: s,
    updateItems: a
  };
}, ei = (e, t, n, i) => {
  const r = t.current.getBoundingClientRect(), o = e.current.getBoundingClientRect(), a = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), s = Un(i), f = (l) => l + o.left - a.left - s.left, g = (l) => l + o.left + r.width - a.right + s.right, d = (l) => l + o.top - a.top - s.top, m = (l) => l + o.top + r.height - a.bottom + s.bottom;
  return {
    menuRect: r,
    containerRect: o,
    getLeftOverflow: f,
    getRightOverflow: g,
    getTopOverflow: d,
    getBottomOverflow: m,
    confineHorizontally: (l) => {
      let u = f(l);
      if (u < 0)
        l -= u;
      else {
        const b = g(l);
        b > 0 && (l -= b, u = f(l), u < 0 && (l -= u));
      }
      return l;
    },
    confineVertically: (l) => {
      let u = d(l);
      if (u < 0)
        l -= u;
      else {
        const b = m(l);
        b > 0 && (l -= b, u = d(l), u < 0 && (l -= u));
      }
      return l;
    }
  };
}, ti = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: i,
  menuRect: r
}) => {
  let o = n.top - i.top - t + n.height / 2;
  const a = e.current.offsetHeight * 1.25;
  return o = Math.max(a, o), o = Math.min(o, r.height - a), o;
}, ni = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: i,
  placeLeftX: r,
  placeRightX: o,
  getLeftOverflow: a,
  getRightOverflow: s,
  confineHorizontally: f,
  confineVertically: g,
  arrowRef: d,
  arrow: m,
  direction: C,
  position: h
}) => {
  let l = C, u = i;
  h !== "initial" && (u = g(u), h === "anchor" && (u = Math.min(u, e.bottom - t.top), u = Math.max(u, e.top - t.top - n.height)));
  let b, w, p;
  return l === "left" ? (b = r, h !== "initial" && (w = a(b), w < 0 && (p = s(o), (p <= 0 || -w > p) && (b = o, l = "right")))) : (b = o, h !== "initial" && (p = s(b), p > 0 && (w = a(r), (w >= 0 || -w < p) && (b = r, l = "left")))), h === "auto" && (b = f(b)), {
    arrowY: m ? ti({
      menuY: u,
      arrowRef: d,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: b,
    y: u,
    computedDirection: l
  };
}, ii = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: i,
  menuRect: r
}) => {
  let o = n.left - i.left - t + n.width / 2;
  const a = e.current.offsetWidth * 1.25;
  return o = Math.max(a, o), o = Math.min(o, r.width - a), o;
}, oi = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: i,
  placeTopY: r,
  placeBottomY: o,
  getTopOverflow: a,
  getBottomOverflow: s,
  confineHorizontally: f,
  confineVertically: g,
  arrowRef: d,
  arrow: m,
  direction: C,
  position: h
}) => {
  let l = C === "top" ? "top" : "bottom", u = i;
  h !== "initial" && (u = f(u), h === "anchor" && (u = Math.min(u, e.right - t.left), u = Math.max(u, e.left - t.left - n.width)));
  let b, w, p;
  return l === "top" ? (b = r, h !== "initial" && (w = a(b), w < 0 && (p = s(o), (p <= 0 || -w > p) && (b = o, l = "bottom")))) : (b = o, h !== "initial" && (p = s(b), p > 0 && (w = a(r), (w >= 0 || -w < p) && (b = r, l = "top")))), h === "auto" && (b = g(b)), {
    arrowX: m ? ii({
      menuX: u,
      arrowRef: d,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: u,
    y: b,
    computedDirection: l
  };
}, ri = ({
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
    menuRect: g,
    containerRect: d
  } = f, m = n === "left" || n === "right";
  let C = m ? i : r, h = m ? r : i;
  if (e) {
    const P = s.current;
    m ? C += P.offsetWidth : h += P.offsetHeight;
  }
  const l = a.left - d.left - g.width - C, u = a.right - d.left + C, b = a.top - d.top - g.height - h, w = a.bottom - d.top + h;
  let p, y;
  t === "end" ? (p = a.right - d.left - g.width, y = a.bottom - d.top - g.height) : t === "center" ? (p = a.left - d.left - (g.width - a.width) / 2, y = a.top - d.top - (g.height - a.height) / 2) : (p = a.left - d.left, y = a.top - d.top), p += C, y += h;
  const E = {
    ...f,
    anchorRect: a,
    placeLeftX: l,
    placeRightX: u,
    placeLeftorRightY: y,
    placeTopY: b,
    placeBottomY: w,
    placeToporBottomX: p,
    arrowRef: s,
    arrow: e,
    direction: n,
    position: o
  };
  switch (n) {
    case "left":
    case "right":
      return ni(E);
    case "top":
    case "bottom":
    default:
      return oi(E);
  }
}, Ke = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect;
function Lt(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const tt = (e, t) => c.useMemo(() => e ? t ? (n) => {
  Lt(e, n), Lt(t, n);
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
  focusProps: g,
  externalRef: d,
  parentScrollingRef: m,
  align: C = "start",
  direction: h = "bottom",
  position: l = "auto",
  overflow: u = "visible",
  setDownOverflow: b,
  repositionFlag: w,
  captureFocus: p = !0,
  state: y,
  endTransition: E,
  isDisabled: P,
  menuItemFocus: z,
  gap: j = 0,
  shift: X = 0,
  children: se,
  onClose: V,
  ...N
}) => {
  const [O, ce] = c.useState({
    x: jt,
    y: jt
  }), [Me, q] = c.useState({}), [I, le] = c.useState(), [F, Oe] = c.useState(h), [Y] = c.useState(Jn), [Ee, Pe] = c.useReducer((S) => S + 1, 1), {
    transition: xe,
    boundingBoxRef: Ne,
    boundingBoxPadding: Le,
    rootMenuRef: je,
    rootAnchorRef: ue,
    scrollNodesRef: nt,
    reposition: He,
    viewScroll: ke,
    submenuCloseDelay: it
  } = c.useContext(et), {
    submenuCtx: _e,
    reposSubmenu: A = w
  } = c.useContext(ht), $ = c.useRef(null), Ve = c.useRef(), Et = c.useRef(), Pt = c.useRef(!1), Fe = c.useRef({
    width: 0,
    height: 0
  }), Nt = c.useRef(() => {
  }), {
    hoverItem: ot,
    dispatch: U,
    updateItems: $e
  } = Qn($, Ve), K = yt(y), kt = Ie(xe, "open"), Tt = Ie(xe, "close"), G = nt.current, vn = (S) => {
    switch (S.key) {
      case L.HOME:
        U(T.FIRST);
        break;
      case L.END:
        U(T.LAST);
        break;
      case L.UP:
        U(T.DECREASE, ot);
        break;
      case L.DOWN:
        U(T.INCREASE, ot);
        break;
      case L.SPACE:
        S.target && S.target.className.indexOf(ge) !== -1 && S.preventDefault();
        return;
      default:
        return;
    }
    S.preventDefault(), S.stopPropagation();
  }, pn = () => {
    y === "closing" && le(), B(E);
  }, bn = (S) => {
    S.stopPropagation(), Y.on(it, () => {
      U(T.RESET), Ve.current.focus();
    });
  }, wn = (S) => {
    S.target === S.currentTarget && Y.off();
  }, de = c.useCallback((S) => {
    var H;
    const J = a ? (H = a.current) == null ? void 0 : H.getBoundingClientRect() : o ? {
      left: o.x,
      right: o.x,
      top: o.y,
      bottom: o.y,
      width: 0,
      height: 0
    } : null;
    if (!J)
      return;
    G.menu || (G.menu = (Ne ? Ne.current : lt(je.current)) || window);
    const W = ei(s, $, G.menu, Le);
    let {
      arrowX: x,
      arrowY: ve,
      x: pe,
      y: ne,
      computedDirection: st
    } = ri({
      arrow: i,
      align: C,
      direction: h,
      gap: j,
      shift: X,
      position: l,
      anchorRect: J,
      arrowRef: Et,
      positionHelpers: W
    });
    const {
      menuRect: Rt
    } = W;
    let be = Rt.height;
    if (!S && u !== "visible") {
      const {
        getTopOverflow: Pn,
        getBottomOverflow: Nn
      } = W;
      let we, ct;
      const zt = Fe.current.height, Be = Nn(ne);
      if (Be > 0 || ye(Be, 0) && ye(be, zt))
        we = be - Be, ct = Be;
      else {
        const Te = Pn(ne);
        (Te < 0 || ye(Te, 0) && ye(be, zt)) && (we = be + Te, ct = 0 - Te, we >= 0 && (ne -= Te));
      }
      we >= 0 ? (be = we, le({
        height: we,
        overflowAmt: ct
      })) : le();
    }
    i && q({
      x,
      y: ve
    }), ce({
      x: pe,
      y: ne
    }), Oe(st), Fe.current = {
      width: Rt.width,
      height: be
    };
  }, [i, C, Le, h, j, X, l, u, o, a, s, Ne, je, G]);
  Ke(() => {
    K && (de(), Pt.current && Pe()), Pt.current = K, Nt.current = de;
  }, [K, de, A]), Ke(() => {
    I && !b && ($.current.scrollTop = 0);
  }, [I, b]), Ke(() => $e, [$e]), c.useEffect(() => {
    let {
      menu: S
    } = G;
    if (!K || !S)
      return;
    if (S = S.addEventListener ? S : window, !G.anchors) {
      G.anchors = [];
      let x = lt(ue && ue.current);
      for (; x && x !== S; )
        G.anchors.push(x), x = lt(x);
    }
    let H = ke;
    if (G.anchors.length && H === "initial" && (H = "auto"), H === "initial")
      return;
    const J = () => {
      H === "auto" ? ft(() => de(!0)) : B(V, {
        reason: Ae.SCROLL
      });
    }, W = G.anchors.concat(ke !== "initial" ? S : []);
    return W.forEach((x) => x.addEventListener("scroll", J)), () => W.forEach((x) => x.removeEventListener("scroll", J));
  }, [ue, G, K, V, ke, de]);
  const Dt = !!I && I.overflowAmt > 0;
  c.useEffect(() => {
    if (Dt || !K || !m)
      return;
    const S = () => ft(de), H = m.current;
    return H.addEventListener("scroll", S), () => H.removeEventListener("scroll", S);
  }, [K, Dt, m, de]), c.useEffect(() => {
    if (typeof ResizeObserver != "function" || He === "initial")
      return;
    const S = new ResizeObserver(([J]) => {
      const {
        borderBoxSize: W,
        target: x
      } = J;
      let ve, pe;
      if (W) {
        const {
          inlineSize: ne,
          blockSize: st
        } = W[0] || W;
        ve = ne, pe = st;
      } else {
        const ne = x.getBoundingClientRect();
        ve = ne.width, pe = ne.height;
      }
      ve === 0 || pe === 0 || ye(ve, Fe.current.width, 1) && ye(pe, Fe.current.height, 1) || De.flushSync(() => {
        Nt.current(), Pe();
      });
    }), H = $.current;
    return S.observe(H, {
      box: "border-box"
    }), () => S.unobserve(H);
  }, [He]), c.useEffect(() => {
    if (!K) {
      U(T.RESET), Tt || le();
      return;
    }
    const {
      position: S,
      alwaysUpdate: H
    } = z || {}, J = () => {
      S === Se.FIRST ? U(T.FIRST) : S === Se.LAST ? U(T.LAST) : S >= -1 && U(T.SET_INDEX, void 0, S);
    };
    if (H)
      J();
    else if (p) {
      const W = setTimeout(() => {
        const x = $.current;
        x && !x.contains(document.activeElement) && (Ve.current.focus(), J());
      }, kt ? 170 : 100);
      return () => clearTimeout(W);
    }
  }, [K, kt, Tt, p, z, U]);
  const yn = c.useMemo(() => ({
    isParentOpen: K,
    submenuCtx: Y,
    dispatch: U,
    updateItems: $e
  }), [K, Y, U, $e]);
  let rt, at;
  I && (b ? at = I.overflowAmt : rt = I.height);
  const Cn = c.useMemo(() => ({
    reposSubmenu: Ee,
    submenuCtx: Y,
    overflow: u,
    overflowAmt: at,
    parentMenuRef: $,
    parentDir: F
  }), [Ee, Y, u, at, F]), Sn = rt >= 0 ? {
    maxHeight: rt,
    overflow: u
  } : void 0, It = c.useMemo(() => ({
    state: y,
    dir: F
  }), [y, F]), Mn = c.useMemo(() => ({
    dir: F
  }), [F]), En = me({
    block: ge,
    element: Wn,
    modifiers: Mn,
    className: r.className
  }), At = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ct(P),
    ...ze({
      onPointerEnter: _e == null ? void 0 : _e.off,
      onPointerMove: bn,
      onPointerLeave: wn,
      onKeyDown: vn,
      onAnimationEnd: pn
    }, N),
    ref: tt(d, $),
    className: me({
      block: ge,
      modifiers: It,
      className: t
    }),
    style: {
      ...n,
      ...Sn,
      margin: 0,
      display: y === "closed" ? "none" : void 0,
      position: ut,
      left: O.x,
      top: O.y
    },
    children: [/* @__PURE__ */ D.jsx("li", {
      tabIndex: -1,
      style: {
        position: ut,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: Ve,
      ...xt,
      ...g
    }), i && /* @__PURE__ */ D.jsx("li", {
      ...xt,
      ...r,
      className: En,
      style: {
        display: "block",
        position: ut,
        left: Me.x,
        top: Me.y,
        ...r.style
      },
      ref: Et
    }), /* @__PURE__ */ D.jsx(ht.Provider, {
      value: Cn,
      children: /* @__PURE__ */ D.jsx(St.Provider, {
        value: yn,
        children: /* @__PURE__ */ D.jsx(Yt.Provider, {
          value: ot,
          children: B(se, It)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ D.jsx(qn, {
    ...f,
    isOpen: K,
    children: At
  }) : At;
}, ai = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: i,
  initialMounted: r,
  unmountOnClose: o,
  transition: a,
  transitionTimeout: s,
  boundingBoxRef: f,
  boundingBoxPadding: g,
  reposition: d = "auto",
  submenuOpenDelay: m = 300,
  submenuCloseDelay: C = 150,
  viewScroll: h = "initial",
  portal: l,
  theming: u,
  onItemClick: b,
  ...w
}, p) {
  const y = c.useRef(null), E = c.useRef({}), {
    anchorRef: P,
    state: z,
    onClose: j
  } = w, X = c.useMemo(() => ({
    initialMounted: r,
    unmountOnClose: o,
    transition: a,
    transitionTimeout: s,
    boundingBoxRef: f,
    boundingBoxPadding: g,
    rootMenuRef: y,
    rootAnchorRef: P,
    scrollNodesRef: E,
    reposition: d,
    viewScroll: h,
    submenuOpenDelay: m,
    submenuCloseDelay: C
  }), [r, o, a, s, P, f, g, d, h, m, C]), se = c.useMemo(() => ({
    handleClick(N, O) {
      N.stopPropagation || B(b, N);
      let ce = N.keepOpen;
      ce === void 0 && (ce = O && N.key === L.SPACE), ce || B(j, {
        value: N.value,
        key: N.key,
        reason: Ae.CLICK
      });
    },
    handleClose(N) {
      B(j, {
        key: N,
        reason: Ae.CLICK
      });
    }
  }), [b, j]);
  if (!z)
    return null;
  const V = /* @__PURE__ */ D.jsx(et.Provider, {
    value: X,
    children: /* @__PURE__ */ D.jsx(Gt.Provider, {
      value: se,
      children: /* @__PURE__ */ D.jsx(qt, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: p,
        containerRef: y,
        containerProps: {
          className: n,
          containerRef: y,
          containerProps: i,
          theming: u,
          transition: a,
          onClose: j
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ De.createPortal(V, document.body) : l ? l.target ? /* @__PURE__ */ De.createPortal(V, l.target) : l.stablePosition ? null : V : V;
}), gt = 0, mt = 1, Ye = 2, Ge = 3, Ze = 4, si = 5, Jt = 6, ci = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Qt = (e) => ({
  _s: e,
  status: ci[e],
  isEnter: e < Ge,
  isMounted: e !== Jt,
  isResolved: e === Ye || e > Ze
}), vt = (e) => e ? Jt : si, li = (e, t) => {
  switch (e) {
    case mt:
    case gt:
      return Ye;
    case Ze:
    case Ge:
      return vt(t);
  }
}, ui = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], di = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), Ht = (e, t, n, i, r) => {
  clearTimeout(i.current);
  const o = Qt(e);
  t(o), n.current = o, r && r({
    current: o
  });
}, fi = ({
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
  const [g, d] = c.useState(() => Qt(o ? Ye : vt(a))), m = c.useRef(g), C = c.useRef(), [h, l] = ui(r), u = c.useCallback(() => {
    const w = li(m.current._s, s);
    w && Ht(w, d, m, C, f);
  }, [f, s]), b = c.useCallback((w) => {
    const p = (E) => {
      switch (Ht(E, d, m, C, f), E) {
        case mt:
          h >= 0 && (C.current = setTimeout(u, h));
          break;
        case Ze:
          l >= 0 && (C.current = setTimeout(u, l));
          break;
        case gt:
        case Ge:
          C.current = di(p, E);
          break;
      }
    }, y = m.current.isEnter;
    typeof w != "boolean" && (w = !y), w ? !y && p(e ? n ? gt : mt : Ye) : y && p(t ? i ? Ge : Ze : vt(s));
  }, [u, f, e, t, n, i, h, l, s]);
  return c.useEffect(() => () => clearTimeout(C.current), []), [g, b, u];
}, hi = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: i,
  transitionTimeout: r = 500
} = {}) => {
  const [{
    status: o
  }, a, s] = fi({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: r,
    enter: Ie(i, "open"),
    exit: Ie(i, "close")
  });
  return [{
    state: Zn[o],
    endTransition: s
  }, a];
}, en = (e) => {
  const [t, n] = hi(e), [i, r] = c.useState(), o = (a, s) => {
    r({
      position: a,
      alwaysUpdate: s
    }), n(!0);
  };
  return [{
    menuItemFocus: i,
    ...t
  }, n, o];
}, gi = (e, t) => {
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
    n.current !== t && B(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, mi = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: i,
  menuButton: r,
  instanceRef: o,
  onMenuChange: a,
  ...s
}, f) {
  const [g, d, m] = en(s), {
    state: C
  } = g, h = yt(C), l = c.useRef(null), u = gi(C, (P, z) => m(z.detail ? void 0 : Se.FIRST)), b = c.useCallback((P) => {
    d(!1), P.key && l.current.focus();
  }, [d]), w = (P) => {
    switch (P.key) {
      case L.UP:
        m(Se.LAST);
        break;
      case L.DOWN:
        m(Se.FIRST);
        break;
      default:
        return;
    }
    P.preventDefault();
  }, p = B(r, {
    open: h
  });
  if (!p || !p.type)
    throw new Error("Menu requires a menuButton prop.");
  const y = {
    ref: tt(p.ref, l),
    ...ze({
      onKeyDown: w,
      ...u
    }, p.props)
  };
  Bn(p.type) === "MenuButton" && (y.isOpen = h);
  const E = /* @__PURE__ */ c.cloneElement(p, y);
  return tn(a, h), c.useImperativeHandle(o, () => ({
    openMenu: m,
    closeMenu: () => d(!1)
  })), /* @__PURE__ */ D.jsxs(c.Fragment, {
    children: [E, /* @__PURE__ */ D.jsx(ai, {
      ...s,
      ...g,
      "aria-label": t || (typeof p.props.children == "string" ? p.props.children : "Menu"),
      anchorRef: l,
      ref: f,
      onClose: b
    })]
  });
}), nn = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), i = /* @__PURE__ */ c.forwardRef((r, o) => {
    const a = c.useRef(null);
    return /* @__PURE__ */ D.jsx(n, {
      ...r,
      itemRef: a,
      externalRef: o,
      isHovering: c.useContext(Yt) === a.current
    });
  });
  return i.displayName = `WithHovering(${e})`, i;
}, on = (e, t, n) => {
  Ke(() => {
    if (e)
      return;
    const i = t.current;
    return n(i, !0), () => {
      n(i);
    };
  }, [e, t, n]);
}, vi = /* @__PURE__ */ nn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: i,
  direction: r,
  label: o,
  openTrigger: a,
  onMenuChange: s,
  isHovering: f,
  instanceRef: g,
  itemRef: d,
  captureFocus: m,
  repositionFlag: C,
  itemProps: h = {},
  ...l
}) {
  const u = c.useContext(et), {
    rootMenuRef: b,
    submenuOpenDelay: w,
    submenuCloseDelay: p
  } = u, {
    parentMenuRef: y,
    parentDir: E,
    overflow: P
  } = c.useContext(ht), {
    isParentOpen: z,
    submenuCtx: j,
    dispatch: X,
    updateItems: se
  } = c.useContext(St), V = P !== "visible", [N, O, ce] = en(u), {
    state: Me
  } = N, q = !!i, I = yt(Me), le = c.useRef(null), [F] = c.useState({
    v: 0
  }), Oe = () => {
    j.off(), F.v && (clearTimeout(F.v), F.v = 0);
  }, Y = (...A) => {
    Oe(), Ee(), !q && ce(...A);
  }, Ee = () => !f && !q && X(T.SET, d.current), Pe = (A) => {
    Ee(), a || (F.v = setTimeout(() => ft(Y), Math.max(A, 0)));
  }, xe = (A) => {
    q || (A.stopPropagation(), !(F.v || I) && j.on(p, () => Pe(w - p), () => Pe(w)));
  }, Ne = () => {
    Oe(), I || X(T.UNSET, d.current);
  }, Le = (A) => {
    if (f)
      switch (A.key) {
        case L.ENTER:
          A.preventDefault();
        case L.SPACE:
        case L.RIGHT:
          a !== "none" && Y(Se.FIRST);
      }
  }, je = (A) => {
    let $ = !1;
    switch (A.key) {
      case L.LEFT:
        I && (d.current.focus(), O(!1), $ = !0);
        break;
      case L.RIGHT:
        I || ($ = !0);
        break;
    }
    $ && (A.preventDefault(), A.stopPropagation());
  };
  on(q, d, se), tn(s, I), c.useEffect(() => j.toggle(I), [j, I]), c.useEffect(() => () => clearTimeout(F.v), [F]), c.useEffect(() => {
    f && z ? d.current.focus() : O(!1);
  }, [f, z, O, d]), c.useImperativeHandle(g, () => ({
    openMenu: (...A) => {
      z && Y(...A);
    },
    closeMenu: () => {
      I && (d.current.focus(), O(!1));
    }
  }));
  const ue = c.useMemo(() => ({
    open: I,
    hover: f,
    disabled: q,
    submenu: !0
  }), [I, f, q]), {
    ref: nt,
    className: He,
    ...ke
  } = h, it = ze({
    onPointerEnter: j.off,
    onPointerMove: xe,
    onPointerLeave: Ne,
    onKeyDown: Le,
    onClick: () => a !== "none" && Y()
  }, ke), _e = () => {
    const A = /* @__PURE__ */ D.jsx(qt, {
      ...l,
      ...N,
      ariaLabel: t || (typeof o == "string" ? o : "Submenu"),
      anchorRef: d,
      containerRef: V ? b : le,
      direction: r || (E === "right" || E === "left" ? E : "right"),
      parentScrollingRef: V && y,
      isDisabled: q
    }), $ = b.current;
    return V && $ ? /* @__PURE__ */ De.createPortal(A, $) : A;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: me({
      block: ge,
      element: Yn,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Zt,
    ref: le,
    onKeyDown: je,
    children: [/* @__PURE__ */ D.jsx("div", {
      role: Mt,
      "aria-haspopup": !0,
      "aria-expanded": I,
      ...Ct(q, f),
      ...it,
      ref: tt(nt, d),
      className: me({
        block: ge,
        element: Xt,
        modifiers: ue,
        className: He
      }),
      children: c.useMemo(() => B(o, ue), [o, ue])
    }), Me && _e()]
  });
}), pi = (e, t, n, i) => {
  const {
    submenuCloseDelay: r
  } = c.useContext(et), {
    isParentOpen: o,
    submenuCtx: a,
    dispatch: s,
    updateItems: f
  } = c.useContext(St), g = () => {
    !n && !i && s(T.SET, e.current);
  }, d = () => {
    !i && s(T.UNSET, e.current);
  }, m = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && d();
  }, C = (l) => {
    i || (l.stopPropagation(), a.on(r, g, g));
  }, h = (l, u) => {
    a.off(), !u && d();
  };
  return on(i, e, f), c.useEffect(() => {
    n && o && t.current && t.current.focus();
  }, [t, n, o]), {
    setHover: g,
    onBlur: m,
    onPointerMove: C,
    onPointerLeave: h
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
  isHovering: g,
  itemRef: d,
  externalRef: m,
  ...C
}) {
  const h = !!a, {
    setHover: l,
    ...u
  } = pi(d, d, g, h), b = c.useContext(Gt), w = c.useContext(Gn), p = r === "radio", y = r === "checkbox", E = !!i && !h && !p && !y, P = p ? w.value === n : y ? !!o : !1, z = (N) => {
    if (h) {
      N.stopPropagation(), N.preventDefault();
      return;
    }
    const O = {
      value: n,
      syntheticEvent: N
    };
    N.key !== void 0 && (O.key = N.key), y && (O.checked = !P), p && (O.name = w.name), B(f, O), p && B(w.onRadioChange, O), b.handleClick(O, y || p);
  }, j = (N) => {
    if (g)
      switch (N.key) {
        case L.ENTER:
          N.preventDefault();
        case L.SPACE:
          E ? d.current.click() : z(N);
      }
  }, X = c.useMemo(() => ({
    type: r,
    disabled: h,
    hover: g,
    checked: P,
    anchor: E
  }), [r, h, g, P, E]), se = ze({
    ...u,
    onPointerDown: l,
    onKeyDown: j,
    onClick: z
  }, C), V = {
    role: p ? "menuitemradio" : y ? "menuitemcheckbox" : Mt,
    "aria-checked": p || y ? P : void 0,
    ...Ct(h, g),
    ...se,
    ref: tt(m, d),
    className: me({
      block: ge,
      element: Xt,
      modifiers: X,
      className: t
    }),
    children: c.useMemo(() => B(s, X), [s, X])
  };
  return E ? /* @__PURE__ */ D.jsx("li", {
    role: Zt,
    children: /* @__PURE__ */ D.jsx("a", {
      href: i,
      ...V
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...V
  });
}), bi = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, i) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...n,
    ref: i,
    className: me({
      block: ge,
      element: Xn,
      className: t
    })
  });
}));
const wi = "szh-menu", yi = "item", Ci = (e) => (t) => (n) => {
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
}, Si = ["dir-left", "dir-right", "dir-top", "dir-bottom"], an = /* @__PURE__ */ Ci(wi);
[...Si];
const _t = /* @__PURE__ */ rn(/* @__PURE__ */ an(yi), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), Mi = In(mi)`
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
  return r.getCanSort() && a.push(/* @__PURE__ */ R(Ue, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ v(_, { icon: Wt.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ R(Ue, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ v(_, { icon: Kt.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && a.push(/* @__PURE__ */ R(Ue, { disabled: o === 1, onClick: () => t.column.toggleVisibility(), children: [
    /* @__PURE__ */ v(_, { icon: zn.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ R(Mi, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    a.length > 0 && /* @__PURE__ */ R(dt, { children: [
      a,
      /* @__PURE__ */ v(bi, {})
    ] }),
    /* @__PURE__ */ v(vi, { label: /* @__PURE__ */ R(dt, { children: [
      /* @__PURE__ */ v(_, { icon: Ut.faTableColumns }),
      "Колонки"
    ] }), children: i.getAllLeafColumns().filter((s) => s.getCanHide()).map((s) => /* @__PURE__ */ v(Ue, { type: "checkbox", checked: s.getIsVisible(), disabled: o === 1 && s.getIsVisible(), onClick: (f) => {
      f.keepOpen = !0, s.toggleVisibility();
    }, children: wt(s.columnDef.header, n) }, s.id)) })
  ] });
}, Pi = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: i,
    getContext: r,
    getResizeHandler: o
  } = e;
  return /* @__PURE__ */ R("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, Xe`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ R("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Xe`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ R("div", { onClick: () => {
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
        n.getIsSorted() === "asc" && /* @__PURE__ */ v(_, { icon: Bt.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ v(_, { icon: $t.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ v(Ei, { header: e, children: ({
        open: a
      }) => /* @__PURE__ */ v("div", { className: "menu", css: [{
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
      }], children: /* @__PURE__ */ v(_, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: On.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ v("div", { css: [{
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
}, Ni = ({
  ...e
}) => /* @__PURE__ */ v("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ v("tr", { children: t.headers.map((n) => /* @__PURE__ */ v(Pi, { ...n }, n.id)) }, t.id)) });
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
const ie = Symbol.for("@ts-pattern/matcher"), ki = Symbol.for("@ts-pattern/isVariadic"), qe = "@ts-pattern/anonymous-select-key", pt = (e) => !!(e && typeof e == "object"), We = (e) => e && !!e[ie], te = (e, t, n) => {
  if (We(e)) {
    const i = e[ie](), { matched: r, selections: o } = i.match(t);
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
        We(s) && s[ki] ? o.push(s) : o.length ? r.push(s) : i.push(s);
      }
      if (o.length) {
        if (o.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < i.length + r.length)
          return !1;
        const a = t.slice(0, i.length), s = r.length === 0 ? [] : t.slice(-r.length), f = t.slice(i.length, r.length === 0 ? 1 / 0 : -r.length);
        return i.every((g, d) => te(g, a[d], n)) && r.every((g, d) => te(g, s[d], n)) && (o.length === 0 || te(o[0], f, n));
      }
      return e.length === t.length && e.every((a, s) => te(a, t[s], n));
    }
    return Object.keys(e).every((i) => {
      const r = e[i];
      return (i in t || We(o = r) && o[ie]().matcherType === "optional") && te(r, t[i], n);
      var o;
    });
  }
  return Object.is(t, e);
}, ae = (e) => {
  var t, n, i;
  return pt(e) ? We(e) ? (t = (n = (i = e[ie]()).getSelectionKeys) == null ? void 0 : n.call(i)) != null ? t : [] : Array.isArray(e) ? Re(e, ae) : Re(Object.values(e), ae) : [];
}, Re = (e, t) => e.reduce((n, i) => n.concat(t(i)), []);
function Z(e) {
  return Object.assign(e, { optional: () => Ti(e), and: (t) => k(e, t), or: (t) => Di(e, t), select: (t) => t === void 0 ? Vt(e) : Vt(t, e) });
}
function Ti(e) {
  return Z({ [ie]: () => ({ match: (t) => {
    let n = {};
    const i = (r, o) => {
      n[r] = o;
    };
    return t === void 0 ? (ae(e).forEach((r) => i(r, void 0)), { matched: !0, selections: n }) : { matched: te(e, t, i), selections: n };
  }, getSelectionKeys: () => ae(e), matcherType: "optional" }) });
}
function k(...e) {
  return Z({ [ie]: () => ({ match: (t) => {
    let n = {};
    const i = (r, o) => {
      n[r] = o;
    };
    return { matched: e.every((r) => te(r, t, i)), selections: n };
  }, getSelectionKeys: () => Re(e, ae), matcherType: "and" }) });
}
function Di(...e) {
  return Z({ [ie]: () => ({ match: (t) => {
    let n = {};
    const i = (r, o) => {
      n[r] = o;
    };
    return Re(e, ae).forEach((r) => i(r, void 0)), { matched: e.some((r) => te(r, t, i)), selections: n };
  }, getSelectionKeys: () => Re(e, ae), matcherType: "or" }) });
}
function M(e) {
  return { [ie]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function Vt(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return Z({ [ie]: () => ({ match: (i) => {
    let r = { [t ?? qe]: i };
    return { matched: n === void 0 || te(n, i, (o, a) => {
      r[o] = a;
    }), selections: r };
  }, getSelectionKeys: () => [t ?? qe].concat(n === void 0 ? [] : ae(n)) }) });
}
function Q(e) {
  return typeof e == "number";
}
function fe(e) {
  return typeof e == "string";
}
function oe(e) {
  return typeof e == "bigint";
}
Z(M(function(e) {
  return !0;
}));
const he = (e) => Object.assign(Z(e), { startsWith: (t) => {
  return he(k(e, (n = t, M((i) => fe(i) && i.startsWith(n)))));
  var n;
}, endsWith: (t) => {
  return he(k(e, (n = t, M((i) => fe(i) && i.endsWith(n)))));
  var n;
}, minLength: (t) => he(k(e, ((n) => M((i) => fe(i) && i.length >= n))(t))), maxLength: (t) => he(k(e, ((n) => M((i) => fe(i) && i.length <= n))(t))), includes: (t) => {
  return he(k(e, (n = t, M((i) => fe(i) && i.includes(n)))));
  var n;
}, regex: (t) => {
  return he(k(e, (n = t, M((i) => fe(i) && !!i.match(n)))));
  var n;
} });
he(M(fe));
const ee = (e) => Object.assign(Z(e), { between: (t, n) => ee(k(e, ((i, r) => M((o) => Q(o) && i <= o && r >= o))(t, n))), lt: (t) => ee(k(e, ((n) => M((i) => Q(i) && i < n))(t))), gt: (t) => ee(k(e, ((n) => M((i) => Q(i) && i > n))(t))), lte: (t) => ee(k(e, ((n) => M((i) => Q(i) && i <= n))(t))), gte: (t) => ee(k(e, ((n) => M((i) => Q(i) && i >= n))(t))), int: () => ee(k(e, M((t) => Q(t) && Number.isInteger(t)))), finite: () => ee(k(e, M((t) => Q(t) && Number.isFinite(t)))), positive: () => ee(k(e, M((t) => Q(t) && t > 0))), negative: () => ee(k(e, M((t) => Q(t) && t < 0))) });
ee(M(Q));
const re = (e) => Object.assign(Z(e), { between: (t, n) => re(k(e, ((i, r) => M((o) => oe(o) && i <= o && r >= o))(t, n))), lt: (t) => re(k(e, ((n) => M((i) => oe(i) && i < n))(t))), gt: (t) => re(k(e, ((n) => M((i) => oe(i) && i > n))(t))), lte: (t) => re(k(e, ((n) => M((i) => oe(i) && i <= n))(t))), gte: (t) => re(k(e, ((n) => M((i) => oe(i) && i >= n))(t))), positive: () => re(k(e, M((t) => oe(t) && t > 0))), negative: () => re(k(e, M((t) => oe(t) && t < 0))) });
re(M(oe));
Z(M(function(e) {
  return typeof e == "boolean";
}));
Z(M(function(e) {
  return typeof e == "symbol";
}));
Z(M(function(e) {
  return e == null;
}));
const bt = { matched: !1, value: void 0 };
function Ft(e) {
  return new Je(e, bt);
}
class Je {
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
    const s = (g, d) => {
      o = !0, a[g] = d;
    }, f = !i.some((g) => te(g, this.input, s)) || r && !r(this.input) ? bt : { matched: !0, value: n(o ? qe in a ? a[qe] : a : this.input, this.input) };
    return new Je(this.input, f);
  }
  when(t, n) {
    if (this.state.matched)
      return this;
    const i = !!t(this.input);
    return new Je(this.input, i ? { matched: !0, value: n(this.input, this.input) } : bt);
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
const Ii = ({
  type: e = "info",
  title: t,
  description: n,
  className: i,
  iconColor: r
}) => {
  const o = c.useMemo(() => Ft(e).with("success", () => Hn.faCheckCircle).with("error", () => ln.faTimesCircle).with("info", () => sn.faInfoCircle).exhaustive(), [e]), a = c.useMemo(() => r || Ft(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ v("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: i, children: /* @__PURE__ */ v("div", { children: /* @__PURE__ */ R("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ v("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ v(_, { icon: o, css: Xe`
                color: ${a};
              `, size: "6x" }) }),
    /* @__PURE__ */ v("div", { children: t }),
    /* @__PURE__ */ v("div", { children: n })
  ] }) }) });
}, Zi = ({
  table: e,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ v(Ii, { type: "error", title: e.error.message }) : /* @__PURE__ */ v(kn, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ R("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, Xe`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((n) => /* @__PURE__ */ v("colgroup", { children: n.headers.map((i) => /* @__PURE__ */ v("col", { span: i.colSpan, style: {
    width: i.column.getSize()
  } }, i.id)) }, n.id)),
  e.isLoading === !0 ? null : /* @__PURE__ */ v(Ni, { ...e }),
  /* @__PURE__ */ v("tbody", { children: e.getRowModel().rows.map((n) => /* @__PURE__ */ v(Fn, { onRowDoubleClick: t, ...n }, n.id)) })
] }) });
var dn = {};
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
})(dn);
var fn = {};
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
})(fn);
var hn = {};
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
})(hn);
var gn = {};
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
})(gn);
var mn = {};
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
})(mn);
const Ai = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...n
  }
}) => {
  const i = n.getState(), {
    pagination: r
  } = i, o = c.useMemo(() => r.pageIndex * r.pageSize + (t > 0 ? 1 : 0), [r, t]), a = c.useMemo(() => Math.min(t, (r.pageIndex + 1) * r.pageSize), [r, t]);
  return /* @__PURE__ */ R("div", { css: {
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
    /* @__PURE__ */ R("div", { css: {
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
      /* @__PURE__ */ v(Ce, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ v(_, { icon: mn.faAnglesLeft }) }),
      /* @__PURE__ */ v(Ce, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ v(_, { css: {
        width: "18px"
      }, icon: gn.faAngleLeft }) }),
      /* @__PURE__ */ R("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ v("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ v("input", { type: "number", value: n.getState().pagination.pageIndex + 1, onChange: (s) => {
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
      /* @__PURE__ */ v(Ce, { size: "small", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ v(_, { css: {
        width: "18px"
      }, icon: hn.faAngleRight }) }),
      /* @__PURE__ */ v(Ce, { size: "small", onClick: () => n.setPageIndex(n.getPageCount() - 1), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ v(_, { icon: fn.faAnglesRight }) }),
      e && /* @__PURE__ */ v(Ce, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ v(_, { spin: n.isFetching, icon: dn.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ R("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ R("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ v("span", { css: {
          display: "none",
          "@container (min-width: 540px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ R("span", { css: {
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
        /* @__PURE__ */ R("span", { css: {
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
      /* @__PURE__ */ v("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: r.pageSize, onChange: (s) => {
        n.setPageSize(Number(s.target.value));
      }, children: [25, 50, 100].map((s) => /* @__PURE__ */ v("option", { value: s, children: s }, s)) })
    ] })
  ] });
}, qi = Qe.memo(Ai), Ri = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: i,
  ...r
}) => {
  const o = An({
    getCoreRowModel: Rn(),
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
}, Ji = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: i = 25,
  defaultColumnVisibility: r = {},
  ...o
} = {}) => {
  var p, y;
  const [a, s] = c.useState({
    pageIndex: 0,
    pageSize: i
  }), [f, g] = c.useState(n), [d, m] = c.useState(r), C = c.useMemo(() => {
    const {
      pageIndex: E,
      pageSize: P
    } = a;
    return {
      start: E * P,
      length: P,
      sort: JSON.stringify(f.map((z) => ({
        property: z.id,
        direction: z.desc ? "DESC" : "ASC"
      })))
    };
  }, [a, f]), h = xn(e, {
    params: C,
    placeholderData: Tn
  }), l = c.useMemo(() => {
    var E, P;
    return isNaN(Number((E = h.data) == null ? void 0 : E.recordsFiltered)) ? 0 : Number((P = h.data) == null ? void 0 : P.recordsFiltered);
  }, [(p = h.data) == null ? void 0 : p.recordsFiltered]), u = c.useMemo(() => l > 0 ? Math.ceil(l / a.pageSize) : 1, [a.pageSize, l]), b = Ri({
    ...o,
    columns: t,
    data: (y = h.data) == null ? void 0 : y.data,
    isLoading: h.isLoading,
    isFetching: h.isFetching,
    manualPagination: !0,
    onPaginationChange: s,
    onSortingChange: g,
    onColumnVisibilityChange: m,
    pageCount: u,
    state: {
      ...o == null ? void 0 : o.state,
      pagination: a,
      sorting: f,
      columnVisibility: d
    }
  }), w = c.useCallback(() => {
    h.refetch();
  }, [h]);
  return {
    ...b,
    recordsTotal: l,
    refetch: w,
    error: h.error
  };
}, zi = ({
  info: e,
  actions: t
}) => /* @__PURE__ */ v("div", { css: {
  display: "flex",
  gap: "0.25rem"
}, children: t.map(({
  key: n,
  icon: i,
  onClick: r
}) => /* @__PURE__ */ v(Ce, { onClick: () => r == null ? void 0 : r(e.row.original), css: {
  padding: "4px",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))",
  ":hover": {
    "--tw-text-opacity": "1",
    color: "rgb(75 85 99 / var(--tw-text-opacity))"
  }
}, children: /* @__PURE__ */ v(_, { icon: i }) }, n)) }), Oi = Qe.memo(zi), xi = (e) => ({
  header: "",
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (t) => /* @__PURE__ */ v(Oi, { info: t, actions: e })
}), Li = () => (e, t, n) => ({
  header: t,
  accessorKey: e,
  cell: (i) => /* @__PURE__ */ v(dt, { children: i.getValue() ? "Да" : "Нет" }),
  ...n
}), ji = () => (e, t, {
  inputFormat: n = "YYYY-MM-DD HH:mm:ss",
  displayFormat: i = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: t,
  accessorKey: e,
  ...r,
  cell: (o) => o.getValue() ? Ln(o.getValue(), n).format(i) : ""
}), Hi = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: n,
    isLoading: i
  } = jn(t);
  return i ? /* @__PURE__ */ v(_, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: Dn.faCircleNotch, spin: !0 }) : n(e.getValue());
}, _i = Qe.memo(Hi), Vi = () => (e, t, n, i) => ({
  header: n,
  accessorKey: e,
  ...i,
  cell: (r) => /* @__PURE__ */ v(_i, { info: r, dictionary: t })
}), Fi = () => (e, t, n) => ({
  ...n,
  header: t,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), $i = () => (e = "id", t) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...t
}), Qi = () => ({
  id: $i(),
  actions: xi,
  display: Fi(),
  boolean: Li(),
  date: ji(),
  dictionary: Vi()
});
export {
  qi as P,
  Zi as T,
  Qi as c,
  Ji as u
};
