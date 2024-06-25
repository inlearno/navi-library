import { H as Ee, e as Ve, g as ne, M as _e, h as re, i as je, k as Re, m as Oe, n as oe, o as Y, p as K, s as Fe, r as ce, q as se, t as le, v as ue, w as de, x as B, y as Z, K as _, z as xe, A as Ue, B as We, E as Be, R as Ye, C as Ke, N as ie, j as s, b as P, F, D as Ze, S as Ge, G as qe, f as Je } from "./library-6ace56c9.js";
import { j as E, a as G, I as Qe, d as Xe } from "./mui-2ff488a7.js";
import { f as J, u as $e, g as ea } from "./table-f5369550.js";
import { r as l, c as aa, R as ia } from "./react-6f5a8403.js";
import { f as ta, c as na, b as ra, h as oa, D as ca, d as sa } from "./DictionaryCell-9553281c.js";
import { F as N } from "./icons-ad9f8a73.js";
import { u as la } from "./useUser-9f55d042.js";
const fe = (e, a) => {
  const i = /* @__PURE__ */ l.memo(a), t = /* @__PURE__ */ l.forwardRef((r, n) => {
    const o = l.useRef(null);
    return /* @__PURE__ */ E.jsx(i, {
      ...r,
      itemRef: o,
      externalRef: n,
      isHovering: l.useContext(Ee) === o.current
    });
  });
  return t.displayName = `WithHovering(${e})`, t;
}, he = (e, a, i) => {
  Ve(() => {
    if (e)
      return;
    const t = a.current;
    return i(t, !0), () => {
      i(t);
    };
  }, [e, a, i]);
}, ua = /* @__PURE__ */ fe("SubMenu", function({
  "aria-label": a,
  className: i,
  disabled: t,
  direction: r,
  label: n,
  openTrigger: o,
  onMenuChange: c,
  isHovering: h,
  instanceRef: d,
  itemRef: u,
  captureFocus: w,
  repositionFlag: D,
  itemProps: y = {},
  ...C
}) {
  const S = l.useContext(ne), {
    rootMenuRef: j,
    submenuOpenDelay: I,
    submenuCloseDelay: p
  } = S, {
    parentMenuRef: g,
    parentDir: b,
    overflow: A
  } = l.useContext(_e), {
    isParentOpen: L,
    submenuCtx: k,
    dispatch: z,
    updateItems: R
  } = l.useContext(re), H = A !== "visible", [f, m, x] = je(S), {
    state: Q
  } = f, T = !!t, M = Re(Q), X = l.useRef(null), [V] = l.useState({
    v: 0
  }), $ = () => {
    k.off(), V.v && (clearTimeout(V.v), V.v = 0);
  }, U = (...v) => {
    $(), ee(), !T && x(...v);
  }, ee = () => !h && !T && z(Z.SET, u.current), ae = (v) => {
    ee(), o || (V.v = setTimeout(() => We(U), Math.max(v, 0)));
  }, Ne = (v) => {
    T || (v.stopPropagation(), !(V.v || M) && k.on(p, () => ae(I - p), () => ae(I)));
  }, Se = () => {
    $(), M || z(Z.UNSET, u.current);
  }, ke = (v) => {
    if (h)
      switch (v.key) {
        case _.ENTER:
          v.preventDefault();
        case _.SPACE:
        case _.RIGHT:
          o !== "none" && U(xe.FIRST);
      }
  }, ze = (v) => {
    let O = !1;
    switch (v.key) {
      case _.LEFT:
        M && (u.current.focus(), m(!1), O = !0);
        break;
      case _.RIGHT:
        M || (O = !0);
        break;
    }
    O && (v.preventDefault(), v.stopPropagation());
  };
  he(T, u, R), Oe(c, M), l.useEffect(() => k.toggle(M), [k, M]), l.useEffect(() => () => clearTimeout(V.v), [V]), l.useEffect(() => {
    h && L ? u.current.focus() : m(!1);
  }, [h, L, m, u]), l.useImperativeHandle(d, () => ({
    openMenu: (...v) => {
      L && U(...v);
    },
    closeMenu: () => {
      M && (u.current.focus(), m(!1));
    }
  }));
  const q = l.useMemo(() => ({
    open: M,
    hover: h,
    disabled: T,
    submenu: !0
  }), [M, h, T]), {
    ref: He,
    className: Ie,
    ...Ae
  } = y, Le = oe({
    onPointerEnter: k.off,
    onPointerMove: Ne,
    onPointerLeave: Se,
    onKeyDown: ke,
    onClick: () => o !== "none" && U()
  }, Ae), Te = () => {
    const v = /* @__PURE__ */ E.jsx(Ue, {
      ...C,
      ...f,
      ariaLabel: a || (typeof n == "string" ? n : "Submenu"),
      anchorRef: u,
      containerRef: H ? j : X,
      direction: r || (b === "right" || b === "left" ? b : "right"),
      parentScrollingRef: H && g,
      isDisabled: T
    }), O = j.current;
    return H && O ? /* @__PURE__ */ aa.createPortal(v, O) : v;
  };
  return /* @__PURE__ */ E.jsxs("li", {
    className: Y({
      block: K,
      element: Fe,
      className: i
    }),
    style: {
      position: "relative"
    },
    role: ce,
    ref: X,
    onKeyDown: ze,
    children: [/* @__PURE__ */ E.jsx("div", {
      role: se,
      "aria-haspopup": !0,
      "aria-expanded": M,
      ...le(T, h),
      ...Le,
      ref: ue(He, u),
      className: Y({
        block: K,
        element: de,
        modifiers: q,
        className: Ie
      }),
      children: l.useMemo(() => B(n, q), [n, q])
    }), Q && Te()]
  });
}), da = (e, a, i, t) => {
  const {
    submenuCloseDelay: r
  } = l.useContext(ne), {
    isParentOpen: n,
    submenuCtx: o,
    dispatch: c,
    updateItems: h
  } = l.useContext(re), d = () => {
    !i && !t && c(Z.SET, e.current);
  }, u = () => {
    !t && c(Z.UNSET, e.current);
  }, w = (C) => {
    i && !C.currentTarget.contains(C.relatedTarget) && u();
  }, D = (C) => {
    t || (C.stopPropagation(), o.on(r, d, d));
  }, y = (C, S) => {
    o.off(), !S && u();
  };
  return he(t, e, h), l.useEffect(() => {
    i && n && a.current && a.current.focus();
  }, [a, i, n]), {
    setHover: d,
    onBlur: w,
    onPointerMove: D,
    onPointerLeave: y
  };
}, W = /* @__PURE__ */ fe("MenuItem", function({
  className: a,
  value: i,
  href: t,
  type: r,
  checked: n,
  disabled: o,
  children: c,
  onClick: h,
  isHovering: d,
  itemRef: u,
  externalRef: w,
  ...D
}) {
  const y = !!o, {
    setHover: C,
    ...S
  } = da(u, u, d, y), j = l.useContext(Be), I = l.useContext(Ye), p = r === "radio", g = r === "checkbox", b = !!t && !y && !p && !g, A = p ? I.value === i : g ? !!n : !1, L = (f) => {
    if (y) {
      f.stopPropagation(), f.preventDefault();
      return;
    }
    const m = {
      value: i,
      syntheticEvent: f
    };
    f.key !== void 0 && (m.key = f.key), g && (m.checked = !A), p && (m.name = I.name), B(h, m), p && B(I.onRadioChange, m), j.handleClick(m, g || p);
  }, k = (f) => {
    if (d)
      switch (f.key) {
        case _.ENTER:
          f.preventDefault();
        case _.SPACE:
          b ? u.current.click() : L(f);
      }
  }, z = l.useMemo(() => ({
    type: r,
    disabled: y,
    hover: d,
    checked: A,
    anchor: b
  }), [r, y, d, A, b]), R = oe({
    ...S,
    onPointerDown: C,
    onKeyDown: k,
    onClick: L
  }, D), H = {
    role: p ? "menuitemradio" : g ? "menuitemcheckbox" : se,
    "aria-checked": p || g ? A : void 0,
    ...le(y, d),
    ...R,
    ref: ue(w, u),
    className: Y({
      block: K,
      element: de,
      modifiers: z,
      className: a
    }),
    children: l.useMemo(() => B(c, z), [c, z])
  };
  return b ? /* @__PURE__ */ E.jsx("li", {
    role: ce,
    children: /* @__PURE__ */ E.jsx("a", {
      href: t,
      ...H
    })
  }) : /* @__PURE__ */ E.jsx("li", {
    ...H
  });
}), fa = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: a,
  ...i
}, t) {
  return /* @__PURE__ */ E.jsx("li", {
    role: "separator",
    ...i,
    ref: t,
    className: Y({
      block: K,
      element: Ke,
      className: a
    })
  });
}));
var ge = {}, me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-info", t = 512, r = 512, n = ["info-circle"], o = "f05a", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleInfo = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(me);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = me;
  e.definition = {
    prefix: a.prefix,
    iconName: a.iconName,
    icon: [
      a.width,
      a.height,
      a.aliases,
      a.unicode,
      a.svgPathData
    ]
  }, e.faInfoCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(ge);
var ve = {}, we = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-xmark", t = 512, r = 512, n = [61532, "times-circle", "xmark-circle"], o = "f057", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleXmark = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(we);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = we;
  e.definition = {
    prefix: a.prefix,
    iconName: a.iconName,
    icon: [
      a.width,
      a.height,
      a.aliases,
      a.unicode,
      a.svgPathData
    ]
  }, e.faTimesCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(ve);
var Ce = {}, be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-check", t = 512, r = 512, n = [61533, "check-circle"], o = "f058", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleCheck = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(be);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = be;
  e.definition = {
    prefix: a.prefix,
    iconName: a.iconName,
    icon: [
      a.width,
      a.height,
      a.aliases,
      a.unicode,
      a.svgPathData
    ]
  }, e.faCheckCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(Ce);
const ha = ({
  type: e = "info",
  title: a,
  description: i,
  className: t,
  iconColor: r
}) => {
  const n = l.useMemo(() => ie(e).with("success", () => Ce.faCheckCircle).with("error", () => ve.faTimesCircle).with("info", () => ge.faInfoCircle).exhaustive(), [e]), o = l.useMemo(() => r || ie(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: t, children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ P("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ s("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ s(N, { icon: n, css: G`
                color: ${o};
              `, size: "6x" }) }),
    /* @__PURE__ */ s("div", { children: a }),
    /* @__PURE__ */ s("div", { children: i })
  ] }) }) });
}, ga = ({
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
}], children: J(e.column.columnDef.cell, e.getContext()) }, e.id), [e.column.columnDef.cell, e]), ma = ({
  onRowDoubleClick: e,
  ...a
}) => /* @__PURE__ */ s("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (i) => e == null ? void 0 : e(a.original, i), children: a.getVisibleCells().map((i) => /* @__PURE__ */ s(ga, { ...i }, i.id)) }, a.id);
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down", t = 384, r = 512, n = [8595], o = "f063", c = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowDown = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(pe);
var ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up", t = 384, r = 512, n = [8593], o = "f062", c = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowUp = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ye);
var Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "table-columns", t = 512, r = 512, n = ["columns"], o = "f0db", c = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faTableColumns = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Me);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down-z-a", t = 576, r = 512, n = ["sort-alpha-desc", "sort-alpha-down-alt"], o = "f881", c = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Pe);
var De = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up-a-z", t = 576, r = 512, n = ["sort-alpha-up"], o = "f15e", c = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(De);
const va = ({
  children: e,
  header: a
}) => {
  const i = a.getContext(), {
    table: t
  } = i, {
    column: r
  } = a, n = t.getVisibleLeafColumns().length, o = [];
  return r.getCanSort() && o.push(/* @__PURE__ */ P(W, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ s(N, { icon: De.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ P(W, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ s(N, { icon: Pe.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && o.push(/* @__PURE__ */ P(W, { disabled: n === 1, onClick: () => a.column.toggleVisibility(), children: [
    /* @__PURE__ */ s(N, { icon: ta.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ P(Ze, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    o.length > 0 && /* @__PURE__ */ P(F, { children: [
      o,
      /* @__PURE__ */ s(fa, {})
    ] }),
    /* @__PURE__ */ s(ua, { label: /* @__PURE__ */ P(F, { children: [
      /* @__PURE__ */ s(N, { icon: Me.faTableColumns }),
      "Колонки"
    ] }), children: t.getAllLeafColumns().filter((c) => c.getCanHide()).map((c) => /* @__PURE__ */ s(W, { type: "checkbox", checked: c.getIsVisible(), disabled: n === 1 && c.getIsVisible(), onClick: (h) => {
      h.keepOpen = !0, c.toggleVisibility();
    }, children: J(c.columnDef.header, i) }, c.id)) })
  ] });
}, wa = (e) => {
  const {
    colSpan: a,
    column: i,
    isPlaceholder: t,
    getContext: r,
    getResizeHandler: n
  } = e;
  return /* @__PURE__ */ P("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, G`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: a, children: [
    /* @__PURE__ */ P("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, G`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ P("div", { onClick: () => {
        if (i.getCanSort())
          return i.toggleSorting();
      }, css: [i.getCanSort() ? {
        cursor: "pointer"
      } : null, {
        position: "relative",
        flex: "1 1 0%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem"
      }], children: [
        t ? null : J(i.columnDef.header, r()),
        " ",
        i.getIsSorted() === "asc" && /* @__PURE__ */ s(N, { icon: ye.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        i.getIsSorted() === "desc" && /* @__PURE__ */ s(N, { icon: pe.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ s(va, { header: e, children: ({
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
      }], children: /* @__PURE__ */ s(N, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: na.faCaretDown }) }) })
    ] }),
    i.getCanResize() && /* @__PURE__ */ s("div", { css: [{
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
    }, i.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: n(), onTouchStart: n(), className: "resizer" })
  ] });
}, Ca = ({
  ...e
}) => /* @__PURE__ */ s("thead", { css: {
  position: "sticky",
  top: "0px",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((a) => /* @__PURE__ */ s("tr", { children: a.headers.map((i) => /* @__PURE__ */ s(wa, { ...i }, i.id)) }, a.id)) }), _a = ({
  table: e,
  border: a = !1,
  className: i,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ s(ha, { type: "error", title: e.error.message }) : /* @__PURE__ */ s(Ge, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ s("div", { css: [{
  minHeight: "200px"
}], children: /* @__PURE__ */ P("table", { className: i, css: [a && {
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
}, G`
              table-layout: fixed;
            `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((r) => /* @__PURE__ */ s("colgroup", { children: r.headers.map((n) => /* @__PURE__ */ s("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, r.id)),
  /* @__PURE__ */ s(Ca, { ...e }),
  /* @__PURE__ */ s("tbody", { children: e.getRowModel().rows.map((r) => /* @__PURE__ */ s(ma, { onRowDoubleClick: t, ...r }, r.id)) })
] }) }) }), ba = ({
  columns: e,
  data: a = [],
  isLoading: i,
  isFetching: t,
  ...r
}) => {
  const n = $e({
    getCoreRowModel: ea(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: a
  });
  return {
    isLoading: i,
    isFetching: t,
    ...n
  };
}, ja = (e, a, {
  defaultSorting: i = [],
  defaultPageSize: t = 25,
  defaultColumnVisibility: r = {},
  defaultFilters: n,
  isLoading: o = !1,
  keepPrevious: c = !0,
  loadingOnFetch: h = !1,
  ...d
} = {}) => {
  var z, R, H;
  const [u, w] = l.useState({
    pageIndex: 0,
    pageSize: t
  }), [D, y] = l.useState(n || []), [C, S] = l.useState(i), [j, I] = l.useState(r);
  l.useEffect(() => {
    var f;
    (f = d.state) != null && f.sorting && S(d.state.sorting);
  }, [(z = d.state) == null ? void 0 : z.sorting]);
  const p = l.useMemo(() => {
    const {
      pageIndex: f,
      pageSize: m
    } = u;
    return {
      start: f * m,
      length: m,
      sort: JSON.stringify(C.map((x) => ({
        property: x.id,
        direction: x.desc ? "DESC" : "ASC"
      }))),
      ...D.length > 0 && {
        extFilters: JSON.stringify(D)
      }
    };
  }, [u, D, C]), g = ra(e, {
    params: p,
    placeholderData: c ? qe : void 0
  }), b = l.useMemo(() => {
    var f, m;
    return isNaN(Number((f = g.data) == null ? void 0 : f.recordsFiltered)) ? 0 : Number((m = g.data) == null ? void 0 : m.recordsFiltered);
  }, [(R = g.data) == null ? void 0 : R.recordsFiltered]), A = l.useMemo(() => b > 0 ? Math.ceil(b / u.pageSize) : 1, [u.pageSize, b]), L = ba({
    ...d,
    columns: a,
    data: (H = g.data) == null ? void 0 : H.data,
    isLoading: g.isLoading || h && g.isFetching || o,
    isFetching: g.isFetching,
    manualPagination: !0,
    onPaginationChange: w,
    onSortingChange: (f) => {
      S(f), d.onSortingChange && d.onSortingChange(f);
    },
    onColumnVisibilityChange: I,
    pageCount: A,
    state: {
      pagination: u,
      sorting: C,
      columnVisibility: j,
      ...d == null ? void 0 : d.state
    }
  }), k = l.useCallback(() => {
    g.refetch();
  }, [g]);
  return {
    ...L,
    recordsTotal: b,
    refetch: k,
    error: g.error
  };
}, pa = ({
  info: e,
  actions: a
}) => {
  const i = la();
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    gap: "0.25rem"
  }, children: a.filter((t) => i.can(t.privilege)).map(({
    key: t,
    icon: r,
    css: n,
    tooltip: o,
    onClick: c,
    render: h
  }) => {
    const d = r ? /* @__PURE__ */ s(Qe, { onClick: (u) => {
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
    }, n], children: /* @__PURE__ */ s(N, { icon: r }) }, t) : h ? /* @__PURE__ */ s(ia.Fragment, { children: h(e.row.original) }, t) : null;
    return o && d ? /* @__PURE__ */ s(Xe, { title: o, children: d }, t) : d;
  }) });
}, ya = (e, a) => ({
  header: a == null ? void 0 : a.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (i) => /* @__PURE__ */ s(pa, { info: i, actions: e })
}), Ma = () => (e, a, i) => ({
  header: a,
  accessorKey: e,
  cell: (t) => /* @__PURE__ */ s(F, { children: t.getValue() ? "Да" : "Нет" }),
  ...i
}), Pa = () => (e, a, {
  inputFormat: i = "YYYY-MM-DD HH:mm:ss",
  displayFormat: t = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: a,
  accessorKey: e,
  ...r,
  cell: (n) => n.getValue() ? oa(n.getValue(), i).format(t) : ""
}), Da = () => (e, a, i, t) => ({
  header: i,
  accessorKey: e,
  ...t,
  cell: (r) => /* @__PURE__ */ s(ca, { info: r, dictionary: a })
}), Na = () => (e, a, i) => ({
  ...i,
  header: a,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), Sa = () => (e = "id", a) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...a
}), te = /* @__PURE__ */ new WeakMap(), ka = ({
  url: e,
  column: a,
  idField: i = "id",
  displayField: t = "name",
  params: r,
  info: n
}) => {
  const o = n.table.getRowModel().rows, c = l.useMemo(() => {
    let w = te.get(o);
    return w || (w = o.map((D) => D.getValue(a)), te.set(o, w), w);
  }, [o]), {
    records: h,
    isLoading: d
  } = sa({
    url: e,
    params: r,
    idField: i,
    value: c
  });
  if (d)
    return /* @__PURE__ */ s(N, { css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Je.faCircleNotch, spin: !0 });
  const u = h.find((w) => w[i] == n.getValue());
  return u ? /* @__PURE__ */ s(F, { children: u[t] }) : /* @__PURE__ */ s(F, { children: "-" });
}, za = () => (e, {
  url: a,
  params: i,
  label: t,
  idField: r,
  displayField: n,
  ...o
}) => ({
  header: t,
  accessorKey: e,
  ...o,
  cell: (c) => /* @__PURE__ */ s(ka, { column: e, info: c, displayField: n, url: a, idField: r, params: i })
}), Ra = () => ({
  id: Sa(),
  actions: ya,
  display: Na(),
  boolean: Ma(),
  date: Pa(),
  dictionary: Da(),
  resource: za()
});
export {
  ha as S,
  _a as T,
  ba as a,
  Ra as c,
  Ce as f,
  ja as u
};
