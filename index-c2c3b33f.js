import { H as Ee, e as _e, g as te, M as je, h as ne, i as Oe, k as Re, m as Ve, n as re, o as U, p as K, s as Fe, r as oe, q as ce, t as se, v as le, w as de, x as W, y as Y, K as _, z as Be, A as xe, B as We, E as Ue, R as Ke, C as Ye, N as ae, j as s, b, F as q, D as Ze, S as Ge, G as qe } from "./library-5ad54f6e.js";
import { j as T, a as Z, I as Je, d as Qe } from "./mui-51f6b52b.js";
import { f as J, u as Xe, g as $e } from "./table-bbae3ab0.js";
import { r as l, c as ei, R as ii } from "./react-bd6781bd.js";
import { f as ai, c as ti, b as ni, h as ri, D as oi } from "./DictionaryCell-a7ae3894.js";
import { F as P } from "./icons-56df5d3c.js";
import { u as ci } from "./useUser-8c01750e.js";
const ue = (e, i) => {
  const a = /* @__PURE__ */ l.memo(i), t = /* @__PURE__ */ l.forwardRef((r, n) => {
    const o = l.useRef(null);
    return /* @__PURE__ */ T.jsx(a, {
      ...r,
      itemRef: o,
      externalRef: n,
      isHovering: l.useContext(Ee) === o.current
    });
  });
  return t.displayName = `WithHovering(${e})`, t;
}, he = (e, i, a) => {
  _e(() => {
    if (e)
      return;
    const t = i.current;
    return a(t, !0), () => {
      a(t);
    };
  }, [e, i, a]);
}, si = /* @__PURE__ */ ue("SubMenu", function({
  "aria-label": i,
  className: a,
  disabled: t,
  direction: r,
  label: n,
  openTrigger: o,
  onMenuChange: c,
  isHovering: g,
  instanceRef: d,
  itemRef: u,
  captureFocus: j,
  repositionFlag: z,
  itemProps: y = {},
  ...w
}) {
  const D = l.useContext(te), {
    rootMenuRef: O,
    submenuOpenDelay: L,
    submenuCloseDelay: p
  } = D, {
    parentMenuRef: f,
    parentDir: C,
    overflow: H
  } = l.useContext(je), {
    isParentOpen: I,
    submenuCtx: N,
    dispatch: S,
    updateItems: R
  } = l.useContext(ne), k = H !== "visible", [h, m, F] = Oe(D), {
    state: Q
  } = h, A = !!t, M = Re(Q), X = l.useRef(null), [E] = l.useState({
    v: 0
  }), $ = () => {
    N.off(), E.v && (clearTimeout(E.v), E.v = 0);
  }, B = (...v) => {
    $(), ee(), !A && F(...v);
  }, ee = () => !g && !A && S(Y.SET, u.current), ie = (v) => {
    ee(), o || (E.v = setTimeout(() => We(B), Math.max(v, 0)));
  }, Ne = (v) => {
    A || (v.stopPropagation(), !(E.v || M) && N.on(p, () => ie(L - p), () => ie(L)));
  }, Se = () => {
    $(), M || S(Y.UNSET, u.current);
  }, ke = (v) => {
    if (g)
      switch (v.key) {
        case _.ENTER:
          v.preventDefault();
        case _.SPACE:
        case _.RIGHT:
          o !== "none" && B(Be.FIRST);
      }
  }, ze = (v) => {
    let V = !1;
    switch (v.key) {
      case _.LEFT:
        M && (u.current.focus(), m(!1), V = !0);
        break;
      case _.RIGHT:
        M || (V = !0);
        break;
    }
    V && (v.preventDefault(), v.stopPropagation());
  };
  he(A, u, R), Ve(c, M), l.useEffect(() => N.toggle(M), [N, M]), l.useEffect(() => () => clearTimeout(E.v), [E]), l.useEffect(() => {
    g && I ? u.current.focus() : m(!1);
  }, [g, I, m, u]), l.useImperativeHandle(d, () => ({
    openMenu: (...v) => {
      I && B(...v);
    },
    closeMenu: () => {
      M && (u.current.focus(), m(!1));
    }
  }));
  const G = l.useMemo(() => ({
    open: M,
    hover: g,
    disabled: A,
    submenu: !0
  }), [M, g, A]), {
    ref: Le,
    className: He,
    ...Ie
  } = y, Ae = re({
    onPointerEnter: N.off,
    onPointerMove: Ne,
    onPointerLeave: Se,
    onKeyDown: ke,
    onClick: () => o !== "none" && B()
  }, Ie), Te = () => {
    const v = /* @__PURE__ */ T.jsx(xe, {
      ...w,
      ...h,
      ariaLabel: i || (typeof n == "string" ? n : "Submenu"),
      anchorRef: u,
      containerRef: k ? O : X,
      direction: r || (C === "right" || C === "left" ? C : "right"),
      parentScrollingRef: k && f,
      isDisabled: A
    }), V = O.current;
    return k && V ? /* @__PURE__ */ ei.createPortal(v, V) : v;
  };
  return /* @__PURE__ */ T.jsxs("li", {
    className: U({
      block: K,
      element: Fe,
      className: a
    }),
    style: {
      position: "relative"
    },
    role: oe,
    ref: X,
    onKeyDown: ze,
    children: [/* @__PURE__ */ T.jsx("div", {
      role: ce,
      "aria-haspopup": !0,
      "aria-expanded": M,
      ...se(A, g),
      ...Ae,
      ref: le(Le, u),
      className: U({
        block: K,
        element: de,
        modifiers: G,
        className: He
      }),
      children: l.useMemo(() => W(n, G), [n, G])
    }), Q && Te()]
  });
}), li = (e, i, a, t) => {
  const {
    submenuCloseDelay: r
  } = l.useContext(te), {
    isParentOpen: n,
    submenuCtx: o,
    dispatch: c,
    updateItems: g
  } = l.useContext(ne), d = () => {
    !a && !t && c(Y.SET, e.current);
  }, u = () => {
    !t && c(Y.UNSET, e.current);
  }, j = (w) => {
    a && !w.currentTarget.contains(w.relatedTarget) && u();
  }, z = (w) => {
    t || (w.stopPropagation(), o.on(r, d, d));
  }, y = (w, D) => {
    o.off(), !D && u();
  };
  return he(t, e, g), l.useEffect(() => {
    a && n && i.current && i.current.focus();
  }, [i, a, n]), {
    setHover: d,
    onBlur: j,
    onPointerMove: z,
    onPointerLeave: y
  };
}, x = /* @__PURE__ */ ue("MenuItem", function({
  className: i,
  value: a,
  href: t,
  type: r,
  checked: n,
  disabled: o,
  children: c,
  onClick: g,
  isHovering: d,
  itemRef: u,
  externalRef: j,
  ...z
}) {
  const y = !!o, {
    setHover: w,
    ...D
  } = li(u, u, d, y), O = l.useContext(Ue), L = l.useContext(Ke), p = r === "radio", f = r === "checkbox", C = !!t && !y && !p && !f, H = p ? L.value === a : f ? !!n : !1, I = (h) => {
    if (y) {
      h.stopPropagation(), h.preventDefault();
      return;
    }
    const m = {
      value: a,
      syntheticEvent: h
    };
    h.key !== void 0 && (m.key = h.key), f && (m.checked = !H), p && (m.name = L.name), W(g, m), p && W(L.onRadioChange, m), O.handleClick(m, f || p);
  }, N = (h) => {
    if (d)
      switch (h.key) {
        case _.ENTER:
          h.preventDefault();
        case _.SPACE:
          C ? u.current.click() : I(h);
      }
  }, S = l.useMemo(() => ({
    type: r,
    disabled: y,
    hover: d,
    checked: H,
    anchor: C
  }), [r, y, d, H, C]), R = re({
    ...D,
    onPointerDown: w,
    onKeyDown: N,
    onClick: I
  }, z), k = {
    role: p ? "menuitemradio" : f ? "menuitemcheckbox" : ce,
    "aria-checked": p || f ? H : void 0,
    ...se(y, d),
    ...R,
    ref: le(j, u),
    className: U({
      block: K,
      element: de,
      modifiers: S,
      className: i
    }),
    children: l.useMemo(() => W(c, S), [c, S])
  };
  return C ? /* @__PURE__ */ T.jsx("li", {
    role: oe,
    children: /* @__PURE__ */ T.jsx("a", {
      href: t,
      ...k
    })
  }) : /* @__PURE__ */ T.jsx("li", {
    ...k
  });
}), di = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: i,
  ...a
}, t) {
  return /* @__PURE__ */ T.jsx("li", {
    role: "separator",
    ...a,
    ref: t,
    className: U({
      block: K,
      element: Ye,
      className: i
    })
  });
}));
var fe = {}, ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "circle-info", t = 512, r = 512, n = ["info-circle"], o = "f05a", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleInfo = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ge);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = ge;
  e.definition = {
    prefix: i.prefix,
    iconName: i.iconName,
    icon: [
      i.width,
      i.height,
      i.aliases,
      i.unicode,
      i.svgPathData
    ]
  }, e.faInfoCircle = e.definition, e.prefix = i.prefix, e.iconName = i.iconName, e.width = i.width, e.height = i.height, e.ligatures = i.aliases, e.unicode = i.unicode, e.svgPathData = i.svgPathData, e.aliases = i.aliases;
})(fe);
var me = {}, ve = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "circle-xmark", t = 512, r = 512, n = [61532, "times-circle", "xmark-circle"], o = "f057", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleXmark = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ve);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = ve;
  e.definition = {
    prefix: i.prefix,
    iconName: i.iconName,
    icon: [
      i.width,
      i.height,
      i.aliases,
      i.unicode,
      i.svgPathData
    ]
  }, e.faTimesCircle = e.definition, e.prefix = i.prefix, e.iconName = i.iconName, e.width = i.width, e.height = i.height, e.ligatures = i.aliases, e.unicode = i.unicode, e.svgPathData = i.svgPathData, e.aliases = i.aliases;
})(me);
var we = {}, Ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "circle-check", t = 512, r = 512, n = [61533, "check-circle"], o = "f058", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleCheck = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Ce);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = Ce;
  e.definition = {
    prefix: i.prefix,
    iconName: i.iconName,
    icon: [
      i.width,
      i.height,
      i.aliases,
      i.unicode,
      i.svgPathData
    ]
  }, e.faCheckCircle = e.definition, e.prefix = i.prefix, e.iconName = i.iconName, e.width = i.width, e.height = i.height, e.ligatures = i.aliases, e.unicode = i.unicode, e.svgPathData = i.svgPathData, e.aliases = i.aliases;
})(we);
const ui = ({
  type: e = "info",
  title: i,
  description: a,
  className: t,
  iconColor: r
}) => {
  const n = l.useMemo(() => ae(e).with("success", () => we.faCheckCircle).with("error", () => me.faTimesCircle).with("info", () => fe.faInfoCircle).exhaustive(), [e]), o = l.useMemo(() => r || ae(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: t, children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ b("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ s("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ s(P, { icon: n, css: Z`
                color: ${o};
              `, size: "6x" }) }),
    /* @__PURE__ */ s("div", { children: i }),
    /* @__PURE__ */ s("div", { children: a })
  ] }) }) });
};
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "box-open", t = 640, r = 512, n = [], o = "f49e", c = "M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faBoxOpen = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(pe);
const hi = ({
  ...e
}) => l.useMemo(() => /* @__PURE__ */ s("td", { css: [{
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
}], children: J(e.column.columnDef.cell, e.getContext()) }, e.id), [e.column.columnDef.cell, e]), fi = ({
  onRowDoubleClick: e,
  ...i
}) => /* @__PURE__ */ s("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (a) => e == null ? void 0 : e(i.original, a), children: i.getVisibleCells().map((a) => /* @__PURE__ */ s(hi, { ...a }, a.id)) }, i.id);
var be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "arrow-down", t = 384, r = 512, n = [8595], o = "f063", c = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowDown = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(be);
var ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "arrow-up", t = 384, r = 512, n = [8593], o = "f062", c = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowUp = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ye);
var Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "table-columns", t = 512, r = 512, n = ["columns"], o = "f0db", c = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faTableColumns = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Me);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "arrow-down-z-a", t = 576, r = 512, n = ["sort-alpha-desc", "sort-alpha-down-alt"], o = "f881", c = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Pe);
var De = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", a = "arrow-up-a-z", t = 576, r = 512, n = ["sort-alpha-up"], o = "f15e", c = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: i,
    iconName: a,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = i, e.iconName = a, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(De);
const gi = ({
  children: e,
  header: i
}) => {
  const a = i.getContext(), {
    table: t
  } = a, {
    column: r
  } = i, n = t.getVisibleLeafColumns().length, o = [];
  return r.getCanSort() && o.push(/* @__PURE__ */ b(x, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ s(P, { icon: De.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ b(x, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ s(P, { icon: Pe.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && o.push(/* @__PURE__ */ b(x, { disabled: n === 1, onClick: () => i.column.toggleVisibility(), children: [
    /* @__PURE__ */ s(P, { icon: ai.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ b(Ze, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    o.length > 0 && /* @__PURE__ */ b(q, { children: [
      o,
      /* @__PURE__ */ s(di, {})
    ] }),
    /* @__PURE__ */ s(si, { label: /* @__PURE__ */ b(q, { children: [
      /* @__PURE__ */ s(P, { icon: Me.faTableColumns }),
      "Колонки"
    ] }), children: t.getAllLeafColumns().filter((c) => c.getCanHide()).map((c) => /* @__PURE__ */ s(x, { type: "checkbox", checked: c.getIsVisible(), disabled: n === 1 && c.getIsVisible(), onClick: (g) => {
      g.keepOpen = !0, c.toggleVisibility();
    }, children: J(c.columnDef.header, a) }, c.id)) })
  ] });
}, mi = (e) => {
  const {
    colSpan: i,
    column: a,
    isPlaceholder: t,
    getContext: r,
    getResizeHandler: n
  } = e;
  return /* @__PURE__ */ b("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, Z`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: i, children: [
    /* @__PURE__ */ b("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Z`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ b("div", { onClick: () => {
        if (a.getCanSort())
          return a.toggleSorting();
      }, css: [a.getCanSort() ? {
        cursor: "pointer"
      } : null, {
        position: "relative",
        flex: "1 1 0%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem"
      }], children: [
        t ? null : J(a.columnDef.header, r()),
        " ",
        a.getIsSorted() === "asc" && /* @__PURE__ */ s(P, { icon: ye.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        a.getIsSorted() === "desc" && /* @__PURE__ */ s(P, { icon: be.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ s(gi, { header: e, children: ({
        open: o
      }) => /* @__PURE__ */ s("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, o ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ s(P, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: ti.faCaretDown }) }) })
    ] }),
    a.getCanResize() && /* @__PURE__ */ s("div", { css: [{
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
    }, a.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: n(), onTouchStart: n(), className: "resizer" })
  ] });
}, vi = ({
  ...e
}) => /* @__PURE__ */ s("thead", { css: {
  position: "sticky",
  top: "0px",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((i) => /* @__PURE__ */ s("tr", { children: i.headers.map((a) => /* @__PURE__ */ s(mi, { ...a }, a.id)) }, i.id)) }), Ai = ({
  table: e,
  border: i = !1,
  className: a,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ s(ui, { type: "error", title: e.error.message }) : /* @__PURE__ */ s(Ge, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ b("table", { className: a, css: [i && {
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
}, Z`
            table-layout: fixed;
          `, e.getRowModel().rows.length === 0 && {
  height: "100%"
}, e.isLoading && {
  height: "200px"
}], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((r) => /* @__PURE__ */ s("colgroup", { children: r.headers.map((n) => /* @__PURE__ */ s("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, r.id)),
  /* @__PURE__ */ s("tbody", { children: e.getRowModel().rows.length === 0 && !e.isLoading ? /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s("td", { colSpan: e.getAllColumns().length, css: {
    borderBottomWidth: "1px",
    borderRightWidth: "1px"
  }, children: /* @__PURE__ */ b("div", { css: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    textAlign: "center",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, children: [
    /* @__PURE__ */ s(P, { size: "2x", icon: pe.faBoxOpen }),
    /* @__PURE__ */ s("div", { children: "Нет данных" })
  ] }) }) }) : e.getRowModel().rows.map((r) => /* @__PURE__ */ s(fi, { onRowDoubleClick: t, ...r }, r.id)) }),
  /* @__PURE__ */ s(vi, { ...e })
] }) }), wi = ({
  columns: e,
  data: i = [],
  isLoading: a,
  isFetching: t,
  ...r
}) => {
  const n = Xe({
    getCoreRowModel: $e(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: i
  });
  return {
    isLoading: a,
    isFetching: t,
    ...n
  };
}, Ti = (e, i, {
  defaultSorting: a = [],
  defaultPageSize: t = 25,
  defaultColumnVisibility: r = {},
  defaultFilters: n,
  isLoading: o = !1,
  keepPrevious: c = !0,
  loadingOnFetch: g = !1,
  ...d
} = {}) => {
  var S, R, k;
  const [u, j] = l.useState({
    pageIndex: 0,
    pageSize: t
  }), [z, y] = l.useState(n || []), [w, D] = l.useState(a), [O, L] = l.useState(r);
  l.useEffect(() => {
    var h;
    (h = d.state) != null && h.sorting && D(d.state.sorting);
  }, [(S = d.state) == null ? void 0 : S.sorting]);
  const p = l.useMemo(() => {
    const {
      pageIndex: h,
      pageSize: m
    } = u;
    return {
      start: h * m,
      length: m,
      sort: JSON.stringify(w.map((F) => ({
        property: F.id,
        direction: F.desc ? "DESC" : "ASC"
      }))),
      ...z.length > 0 && {
        extFilters: JSON.stringify(z)
      }
    };
  }, [u, z, w]), f = ni(e, {
    params: p,
    placeholderData: c ? qe : void 0
  }), C = l.useMemo(() => {
    var h, m;
    return isNaN(Number((h = f.data) == null ? void 0 : h.recordsFiltered)) ? 0 : Number((m = f.data) == null ? void 0 : m.recordsFiltered);
  }, [(R = f.data) == null ? void 0 : R.recordsFiltered]), H = l.useMemo(() => C > 0 ? Math.ceil(C / u.pageSize) : 1, [u.pageSize, C]), I = wi({
    ...d,
    columns: i,
    data: (k = f.data) == null ? void 0 : k.data,
    isLoading: f.isLoading || g && f.isFetching || o,
    isFetching: f.isFetching,
    manualPagination: !0,
    onPaginationChange: j,
    onSortingChange: (h) => {
      D(h), d.onSortingChange && d.onSortingChange(h);
    },
    onColumnVisibilityChange: L,
    pageCount: H,
    state: {
      pagination: u,
      sorting: w,
      columnVisibility: O,
      ...d == null ? void 0 : d.state
    }
  }), N = l.useCallback(() => {
    f.refetch();
  }, [f]);
  return {
    ...I,
    recordsTotal: C,
    refetch: N,
    error: f.error
  };
}, Ci = ({
  info: e,
  actions: i
}) => {
  const a = ci();
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    gap: "0.25rem"
  }, children: i.filter((t) => a.can(t.privilege)).map(({
    key: t,
    icon: r,
    css: n,
    tooltip: o,
    onClick: c,
    render: g
  }) => {
    const d = r ? /* @__PURE__ */ s(Je, { onClick: (u) => {
      c == null || c(e.row.original), u.stopPropagation();
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
    }, n], children: /* @__PURE__ */ s(P, { icon: r }) }, t) : g ? /* @__PURE__ */ s(ii.Fragment, { children: g(e.row.original) }, t) : null;
    return o && d ? /* @__PURE__ */ s(Qe, { title: o, children: d }, t) : d;
  }) });
}, pi = (e, i) => ({
  header: i == null ? void 0 : i.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (a) => /* @__PURE__ */ s(Ci, { info: a, actions: e })
}), bi = () => (e, i, a) => ({
  header: i,
  accessorKey: e,
  cell: (t) => /* @__PURE__ */ s(q, { children: t.getValue() ? "Да" : "Нет" }),
  ...a
}), yi = () => (e, i, {
  inputFormat: a = "YYYY-MM-DD HH:mm:ss",
  displayFormat: t = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: i,
  accessorKey: e,
  ...r,
  cell: (n) => n.getValue() ? ri(n.getValue(), a).format(t) : ""
}), Mi = () => (e, i, a, t) => ({
  header: a,
  accessorKey: e,
  ...t,
  cell: (r) => /* @__PURE__ */ s(oi, { info: r, dictionary: i })
}), Pi = () => (e, i, a) => ({
  ...a,
  header: i,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), Di = () => (e = "id", i) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...i
}), Ei = () => ({
  id: Di(),
  actions: pi,
  display: Pi(),
  boolean: bi(),
  date: yi(),
  dictionary: Mi()
});
export {
  ui as S,
  Ai as T,
  wi as a,
  Ei as c,
  we as f,
  Ti as u
};
