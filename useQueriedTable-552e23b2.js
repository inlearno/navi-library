import { H as Ee, e as je, g as ne, M as Ve, h as te, i as Oe, k as Fe, m as Ue, n as re, o as Y, p as Z, s as Be, r as oe, q as ce, t as se, v as le, w as de, x as K, y as G, K as V, z as We, A as Ke, B as Ye, E as Ze, R as Ge, C as $e, N as ie, j as s, b as p, F as $, D as qe, S as Je, G as Qe } from "./library-c328e858.js";
import { j as _, a as q, I as ue, d as Xe } from "./mui-2ff488a7.js";
import { a as Q, u as xe, g as ea } from "./table-7e833027.js";
import { r as l, c as aa, R as ia } from "./react-6f5a8403.js";
import { f as na, c as ta, h as ra, D as oa, b as ca } from "./DictionaryCell-9be52052.js";
import { F as z } from "./icons-ad9f8a73.js";
import { u as sa } from "./useUser-a967c6ae.js";
const fe = (e, a) => {
  const i = /* @__PURE__ */ l.memo(a), n = /* @__PURE__ */ l.forwardRef((t, r) => {
    const o = l.useRef(null);
    return /* @__PURE__ */ _.jsx(i, {
      ...t,
      itemRef: o,
      externalRef: r,
      isHovering: l.useContext(Ee) === o.current
    });
  });
  return n.displayName = `WithHovering(${e})`, n;
}, he = (e, a, i) => {
  je(() => {
    if (e)
      return;
    const n = a.current;
    return i(n, !0), () => {
      i(n);
    };
  }, [e, a, i]);
}, la = /* @__PURE__ */ fe("SubMenu", function({
  "aria-label": a,
  className: i,
  disabled: n,
  direction: t,
  label: r,
  openTrigger: o,
  onMenuChange: c,
  isHovering: h,
  instanceRef: d,
  itemRef: u,
  captureFocus: D,
  repositionFlag: O,
  itemProps: v = {},
  ...N
}) {
  const S = l.useContext(ne), {
    rootMenuRef: E,
    submenuOpenDelay: L,
    submenuCloseDelay: C
  } = S, {
    parentMenuRef: k,
    parentDir: f,
    overflow: y
  } = l.useContext(Ve), {
    isParentOpen: R,
    submenuCtx: I,
    dispatch: A,
    updateItems: U
  } = l.useContext(te), H = y !== "visible", [m, w, b] = Oe(S), {
    state: T
  } = m, M = !!n, P = Fe(T), X = l.useRef(null), [j] = l.useState({
    v: 0
  }), x = () => {
    I.off(), j.v && (clearTimeout(j.v), j.v = 0);
  }, B = (...g) => {
    x(), ee(), !M && b(...g);
  }, ee = () => !h && !M && A(G.SET, u.current), ae = (g) => {
    ee(), o || (j.v = setTimeout(() => Ye(B), Math.max(g, 0)));
  }, ke = (g) => {
    M || (g.stopPropagation(), !(j.v || P) && I.on(C, () => ae(L - C), () => ae(L)));
  }, ze = () => {
    x(), P || A(G.UNSET, u.current);
  }, Ie = (g) => {
    if (h)
      switch (g.key) {
        case V.ENTER:
          g.preventDefault();
        case V.SPACE:
        case V.RIGHT:
          o !== "none" && B(We.FIRST);
      }
  }, He = (g) => {
    let F = !1;
    switch (g.key) {
      case V.LEFT:
        P && (u.current.focus(), w(!1), F = !0);
        break;
      case V.RIGHT:
        P || (F = !0);
        break;
    }
    F && (g.preventDefault(), g.stopPropagation());
  };
  he(M, u, U), Ue(c, P), l.useEffect(() => I.toggle(P), [I, P]), l.useEffect(() => () => clearTimeout(j.v), [j]), l.useEffect(() => {
    h && R ? u.current.focus() : w(!1);
  }, [h, R, w, u]), l.useImperativeHandle(d, () => ({
    openMenu: (...g) => {
      R && B(...g);
    },
    closeMenu: () => {
      P && (u.current.focus(), w(!1));
    }
  }));
  const J = l.useMemo(() => ({
    open: P,
    hover: h,
    disabled: M,
    submenu: !0
  }), [P, h, M]), {
    ref: Le,
    className: Re,
    ...Ae
  } = v, Te = re({
    onPointerEnter: I.off,
    onPointerMove: ke,
    onPointerLeave: ze,
    onKeyDown: Ie,
    onClick: () => o !== "none" && B()
  }, Ae), _e = () => {
    const g = /* @__PURE__ */ _.jsx(Ke, {
      ...N,
      ...m,
      ariaLabel: a || (typeof r == "string" ? r : "Submenu"),
      anchorRef: u,
      containerRef: H ? E : X,
      direction: t || (f === "right" || f === "left" ? f : "right"),
      parentScrollingRef: H && k,
      isDisabled: M
    }), F = E.current;
    return H && F ? /* @__PURE__ */ aa.createPortal(g, F) : g;
  };
  return /* @__PURE__ */ _.jsxs("li", {
    className: Y({
      block: Z,
      element: Be,
      className: i
    }),
    style: {
      position: "relative"
    },
    role: oe,
    ref: X,
    onKeyDown: He,
    children: [/* @__PURE__ */ _.jsx("div", {
      role: ce,
      "aria-haspopup": !0,
      "aria-expanded": P,
      ...se(M, h),
      ...Te,
      ref: le(Le, u),
      className: Y({
        block: Z,
        element: de,
        modifiers: J,
        className: Re
      }),
      children: l.useMemo(() => K(r, J), [r, J])
    }), T && _e()]
  });
}), da = (e, a, i, n) => {
  const {
    submenuCloseDelay: t
  } = l.useContext(ne), {
    isParentOpen: r,
    submenuCtx: o,
    dispatch: c,
    updateItems: h
  } = l.useContext(te), d = () => {
    !i && !n && c(G.SET, e.current);
  }, u = () => {
    !n && c(G.UNSET, e.current);
  }, D = (N) => {
    i && !N.currentTarget.contains(N.relatedTarget) && u();
  }, O = (N) => {
    n || (N.stopPropagation(), o.on(t, d, d));
  }, v = (N, S) => {
    o.off(), !S && u();
  };
  return he(n, e, h), l.useEffect(() => {
    i && r && a.current && a.current.focus();
  }, [a, i, r]), {
    setHover: d,
    onBlur: D,
    onPointerMove: O,
    onPointerLeave: v
  };
}, W = /* @__PURE__ */ fe("MenuItem", function({
  className: a,
  value: i,
  href: n,
  type: t,
  checked: r,
  disabled: o,
  children: c,
  onClick: h,
  isHovering: d,
  itemRef: u,
  externalRef: D,
  ...O
}) {
  const v = !!o, {
    setHover: N,
    ...S
  } = da(u, u, d, v), E = l.useContext(Ze), L = l.useContext(Ge), C = t === "radio", k = t === "checkbox", f = !!n && !v && !C && !k, y = C ? L.value === i : k ? !!r : !1, R = (m) => {
    if (v) {
      m.stopPropagation(), m.preventDefault();
      return;
    }
    const w = {
      value: i,
      syntheticEvent: m
    };
    m.key !== void 0 && (w.key = m.key), k && (w.checked = !y), C && (w.name = L.name), K(h, w), C && K(L.onRadioChange, w), E.handleClick(w, k || C);
  }, I = (m) => {
    if (d)
      switch (m.key) {
        case V.ENTER:
          m.preventDefault();
        case V.SPACE:
          f ? u.current.click() : R(m);
      }
  }, A = l.useMemo(() => ({
    type: t,
    disabled: v,
    hover: d,
    checked: y,
    anchor: f
  }), [t, v, d, y, f]), U = re({
    ...S,
    onPointerDown: N,
    onKeyDown: I,
    onClick: R
  }, O), H = {
    role: C ? "menuitemradio" : k ? "menuitemcheckbox" : ce,
    "aria-checked": C || k ? y : void 0,
    ...se(v, d),
    ...U,
    ref: le(D, u),
    className: Y({
      block: Z,
      element: de,
      modifiers: A,
      className: a
    }),
    children: l.useMemo(() => K(c, A), [c, A])
  };
  return f ? /* @__PURE__ */ _.jsx("li", {
    role: oe,
    children: /* @__PURE__ */ _.jsx("a", {
      href: n,
      ...H
    })
  }) : /* @__PURE__ */ _.jsx("li", {
    ...H
  });
}), ua = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: a,
  ...i
}, n) {
  return /* @__PURE__ */ _.jsx("li", {
    role: "separator",
    ...i,
    ref: n,
    className: Y({
      block: Z,
      element: $e,
      className: a
    })
  });
}));
var ge = {}, me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-info", n = 512, t = 512, r = ["info-circle"], o = "f05a", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faCircleInfo = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
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
  var a = "fas", i = "circle-xmark", n = 512, t = 512, r = [61532, "times-circle", "xmark-circle"], o = "f057", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faCircleXmark = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
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
  var a = "fas", i = "circle-check", n = 512, t = 512, r = [61533, "check-circle"], o = "f058", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faCircleCheck = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
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
const fa = ({
  type: e = "info",
  title: a,
  description: i,
  className: n,
  iconColor: t
}) => {
  const r = l.useMemo(() => ie(e).with("success", () => Ce.faCheckCircle).with("error", () => ve.faTimesCircle).with("info", () => ge.faInfoCircle).exhaustive(), [e]), o = l.useMemo(() => t || ie(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [t, e]);
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: n, children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ s("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ s(z, { icon: r, css: q`
                color: ${o};
              `, size: "6x" }) }),
    /* @__PURE__ */ s("div", { children: a }),
    /* @__PURE__ */ s("div", { children: i })
  ] }) }) });
}, ha = ({
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
}], children: Q(e.column.columnDef.cell, e.getContext()) }, e.id), [e.column.columnDef.cell, e]), ga = ({
  renderRowInfo: e,
  ...a
}) => /* @__PURE__ */ s("tr", { children: /* @__PURE__ */ s("td", { css: {
  borderBottomWidth: "1px",
  paddingLeft: "4rem",
  paddingRight: "4rem",
  paddingTop: "1rem",
  paddingBottom: "1rem"
}, colSpan: a.getVisibleCells().length, children: /* @__PURE__ */ s("div", { children: e(a.original) }) }) }, `rowSpan-${a.id}`), ma = ({
  onRowDoubleClick: e,
  renderRowInfo: a,
  ...i
}) => {
  var n;
  return /* @__PURE__ */ p($, { children: [
    /* @__PURE__ */ s("tr", { css: [{
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
      }
    }], onDoubleClick: (t) => e == null ? void 0 : e(i.original, t), children: i.getVisibleCells().map((t) => /* @__PURE__ */ s(ha, { ...t }, t.id)) }, i.id),
    (n = i.getIsRowInfoVisible) != null && n.call(i) && a ? /* @__PURE__ */ s(ga, { renderRowInfo: a, ...i }) : null
  ] });
};
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down", n = 384, t = 512, r = [8595], o = "f063", c = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faArrowDown = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(pe);
var ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up", n = 384, t = 512, r = [8593], o = "f062", c = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faArrowUp = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(ye);
var Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "table-columns", n = 512, t = 512, r = ["columns"], o = "f0db", c = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faTableColumns = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(Me);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down-z-a", n = 576, t = 512, r = ["sort-alpha-desc", "sort-alpha-down-alt"], o = "f881", c = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(Pe);
var De = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up-a-z", n = 576, t = 512, r = ["sort-alpha-up"], o = "f15e", c = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(De);
const va = ({
  children: e,
  header: a
}) => {
  const i = a.getContext(), {
    table: n
  } = i, {
    column: t
  } = a, r = n.getVisibleLeafColumns().length, o = [];
  return t.getCanSort() && o.push(/* @__PURE__ */ p(W, { onClick: () => t.toggleSorting(!1), children: [
    /* @__PURE__ */ s(z, { icon: De.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ p(W, { onClick: () => t.toggleSorting(!0), children: [
    /* @__PURE__ */ s(z, { icon: Pe.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), t.getCanHide() && o.push(/* @__PURE__ */ p(W, { disabled: r === 1, onClick: () => a.column.toggleVisibility(), children: [
    /* @__PURE__ */ s(z, { icon: na.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ p(qe, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    o.length > 0 && /* @__PURE__ */ p($, { children: [
      o,
      /* @__PURE__ */ s(ua, {})
    ] }),
    /* @__PURE__ */ s(la, { label: /* @__PURE__ */ p($, { children: [
      /* @__PURE__ */ s(z, { icon: Me.faTableColumns }),
      "Колонки"
    ] }), children: n.getAllLeafColumns().filter((c) => c.getCanHide()).map((c) => /* @__PURE__ */ s(W, { type: "checkbox", checked: c.getIsVisible(), disabled: r === 1 && c.getIsVisible(), onClick: (h) => {
      h.keepOpen = !0, c.toggleVisibility();
    }, children: Q(c.columnDef.header, i) }, c.id)) })
  ] });
}, wa = (e) => {
  const {
    colSpan: a,
    column: i,
    isPlaceholder: n,
    getContext: t,
    getResizeHandler: r
  } = e;
  return /* @__PURE__ */ p("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, q`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: a, children: [
    /* @__PURE__ */ p("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, q`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ p("div", { onClick: () => {
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
        n ? null : Q(i.columnDef.header, t()),
        " ",
        i.getIsSorted() === "asc" && /* @__PURE__ */ s(z, { icon: ye.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        i.getIsSorted() === "desc" && /* @__PURE__ */ s(z, { icon: pe.faArrowDown, css: {
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
      }], children: /* @__PURE__ */ s(z, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: ta.faCaretDown }) }) })
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
    }], onMouseDown: r(), onTouchStart: r(), className: "resizer" })
  ] });
}, Ca = ({
  ...e
}) => /* @__PURE__ */ s("thead", { css: {
  position: "sticky",
  top: "0px",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((a) => /* @__PURE__ */ s("tr", { children: a.headers.map((i) => /* @__PURE__ */ s(wa, { ...i }, i.id)) }, a.id)) }), ja = ({
  table: e,
  border: a = !1,
  className: i,
  onRowDoubleClick: n
}) => e.error ? /* @__PURE__ */ s(fa, { type: "error", title: e.error.message }) : /* @__PURE__ */ s(Je, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ s("div", { css: [{
  minHeight: "200px"
}], children: /* @__PURE__ */ p("table", { className: i, css: [a && {
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
}, q`
              table-layout: fixed;
            `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ s("colgroup", { children: t.headers.map((r) => /* @__PURE__ */ s("col", { span: r.colSpan, style: {
    width: r.column.getSize()
  } }, r.id)) }, t.id)),
  /* @__PURE__ */ s(Ca, { ...e }),
  /* @__PURE__ */ s("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ s(ma, { onRowDoubleClick: n, renderRowInfo: e.options.renderRowInfo, ...t }, t.id)) })
] }) }) }), ba = ({
  columns: e,
  data: a = [],
  isLoading: i,
  isFetching: n,
  ...t
}) => {
  const r = xe({
    getCoreRowModel: ea(),
    columnResizeMode: "onChange",
    ...t,
    columns: e,
    data: a
  });
  return {
    isLoading: i,
    isFetching: n,
    ...r
  };
}, pa = ({
  info: e,
  actions: a
}) => {
  const i = sa();
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    gap: "0.25rem"
  }, children: a.filter((n) => i.can(n.privilege)).map(({
    key: n,
    icon: t,
    css: r,
    tooltip: o,
    onClick: c,
    render: h
  }) => {
    const d = t ? /* @__PURE__ */ s(ue, { onClick: (u) => {
      c == null || c(e.row.original, e.row), u.stopPropagation();
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
    }, r], children: /* @__PURE__ */ s(z, { icon: t }) }, n) : h ? /* @__PURE__ */ s(ia.Fragment, { children: h(e.row.original) }, n) : null;
    return o && d ? /* @__PURE__ */ s(Xe, { title: o, children: d }, n) : d;
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
  cell: (n) => /* @__PURE__ */ s($, { children: n.getValue() ? "Да" : "Нет" }),
  ...i
}), Pa = () => (e, a, {
  inputFormat: i = "YYYY-MM-DD HH:mm:ss",
  displayFormat: n = "DD.MM.YYYY HH:mm:ss",
  ...t
} = {}) => ({
  header: a,
  accessorKey: e,
  ...t,
  cell: (r) => r.getValue() ? ra(r.getValue(), i).format(n) : ""
}), Da = () => (e, a, i, n) => ({
  header: i,
  accessorKey: e,
  ...n,
  cell: (t) => /* @__PURE__ */ s(oa, { info: t, dictionary: a })
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
});
var Ne = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "chevron-down", n = 512, t = 512, r = [], o = "f078", c = "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faChevronDown = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(Ne);
var Se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "chevron-up", n = 512, t = 512, r = [], o = "f077", c = "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      n,
      t,
      r,
      o,
      c
    ]
  }, e.faChevronUp = e.definition, e.prefix = a, e.iconName = i, e.width = n, e.height = t, e.ligatures = r, e.unicode = o, e.svgPathData = c, e.aliases = r;
})(Se);
const ka = (e) => /* @__PURE__ */ s(ue, { onClick: (a) => {
  e.toggleRowInfo(), a.stopPropagation();
}, css: [{
  padding: "4px",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))",
  ":hover": {
    "--tw-text-opacity": "1",
    color: "rgb(90 88 173 / var(--tw-text-opacity))"
  }
}], children: /* @__PURE__ */ s(z, { icon: e.getIsRowInfoVisible() ? Se.faChevronUp : Ne.faChevronDown }) }), za = () => () => ({
  header: "",
  size: 40,
  id: "toggleRow",
  cell: ({
    row: e
  }) => /* @__PURE__ */ s(ka, { ...e })
}), Ia = () => ({
  id: Sa(),
  toggleRow: za(),
  actions: ya,
  display: Na(),
  boolean: Ma(),
  date: Pa(),
  dictionary: Da()
}), Va = (e, a, {
  defaultSorting: i = [],
  defaultPageSize: n = 25,
  defaultColumnVisibility: t = {},
  defaultFilters: r,
  isLoading: o = !1,
  keepPrevious: c = !0,
  loadingOnFetch: h = !1,
  ...d
} = {}) => {
  var H, m, w;
  const u = Ia(), [D, O] = l.useState({
    pageIndex: 0,
    pageSize: n
  }), [v, N] = l.useState(r || []), [S, E] = l.useState(i), [L, C] = l.useState(t);
  l.useEffect(() => {
    var b;
    (b = d.state) != null && b.sorting && E(d.state.sorting);
  }, [(H = d.state) == null ? void 0 : H.sorting]);
  const k = l.useMemo(() => {
    const {
      pageIndex: b,
      pageSize: T
    } = D;
    return {
      start: b * T,
      length: T,
      sort: JSON.stringify(S.map((M) => ({
        property: M.id,
        direction: M.desc ? "DESC" : "ASC"
      }))),
      ...v.length > 0 && {
        extFilters: JSON.stringify(v)
      }
    };
  }, [D, v, S]), f = ca(e, {
    params: k,
    placeholderData: c ? Qe : void 0
  }), y = l.useMemo(() => {
    var b, T;
    return isNaN(Number((b = f.data) == null ? void 0 : b.recordsFiltered)) ? 0 : Number((T = f.data) == null ? void 0 : T.recordsFiltered);
  }, [(m = f.data) == null ? void 0 : m.recordsFiltered]), R = l.useMemo(() => y > 0 ? Math.ceil(y / D.pageSize) : 1, [D.pageSize, y]), I = l.useMemo(() => [d.rowInfoEnabled ? u.toggleRow() : [], ...a].flat(), [a]), A = ba({
    ...d,
    columns: I,
    data: (w = f.data) == null ? void 0 : w.data,
    isLoading: f.isLoading || h && f.isFetching || o,
    isFetching: f.isFetching,
    manualPagination: !0,
    onPaginationChange: O,
    onSortingChange: (b) => {
      E(b), d.onSortingChange && d.onSortingChange(b);
    },
    onColumnVisibilityChange: C,
    pageCount: R,
    state: {
      pagination: D,
      sorting: S,
      columnVisibility: L,
      ...d == null ? void 0 : d.state
    }
  }), U = l.useCallback(() => {
    f.refetch();
  }, [f]);
  return {
    ...A,
    recordsTotal: y,
    refetch: U,
    error: f.error
  };
};
export {
  fa as S,
  ja as T,
  ba as a,
  Ia as c,
  Ce as f,
  Va as u
};
