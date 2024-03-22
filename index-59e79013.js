import { H as Te, g as Ee, h as ie, M as _e, i as ne, k as je, m as Ve, n as Oe, o as te, p as W, q as B, s as Fe, r as re, t as ce, v as oe, w as se, x as le, y as Y, z as Z, K as _, A as Re, B as Ue, C as Ke, E as Ye, R as We, D as Be, N as ae, j as l, a as M, F as J, G as Ze, S as Ge, I as qe } from "./library-731656e2.js";
import { j as T, a as G } from "./mui-4f485058.js";
import { C as Je, f as Qe, c as Xe, b as $e, A as xe, h as ea, D as aa } from "./DictionaryCell-1acc0f0b.js";
import { F as L } from "./icons-ad9f8a73.js";
import { f as ue, u as ia, g as na } from "./table-f5369550.js";
import { r as s, c as ta } from "./react-6f5a8403.js";
const de = (e, a) => {
  const i = /* @__PURE__ */ s.memo(a), t = /* @__PURE__ */ s.forwardRef((r, n) => {
    const c = s.useRef(null);
    return /* @__PURE__ */ T.jsx(i, {
      ...r,
      itemRef: c,
      externalRef: n,
      isHovering: s.useContext(Te) === c.current
    });
  });
  return t.displayName = `WithHovering(${e})`, t;
}, fe = (e, a, i) => {
  Ee(() => {
    if (e)
      return;
    const t = a.current;
    return i(t, !0), () => {
      i(t);
    };
  }, [e, a, i]);
}, ra = /* @__PURE__ */ de("SubMenu", function({
  "aria-label": a,
  className: i,
  disabled: t,
  direction: r,
  label: n,
  openTrigger: c,
  onMenuChange: o,
  isHovering: v,
  instanceRef: f,
  itemRef: u,
  captureFocus: j,
  repositionFlag: k,
  itemProps: y = {},
  ...C
}) {
  const P = s.useContext(ie), {
    rootMenuRef: V,
    submenuOpenDelay: z,
    submenuCloseDelay: b
  } = P, {
    parentMenuRef: h,
    parentDir: w,
    overflow: H
  } = s.useContext(_e), {
    isParentOpen: I,
    submenuCtx: D,
    dispatch: N,
    updateItems: O
  } = s.useContext(ne), S = H !== "visible", [d, g, R] = je(P), {
    state: Q
  } = d, A = !!t, p = Ve(Q), X = s.useRef(null), [E] = s.useState({
    v: 0
  }), $ = () => {
    D.off(), E.v && (clearTimeout(E.v), E.v = 0);
  }, U = (...m) => {
    $(), x(), !A && R(...m);
  }, x = () => !v && !A && N(Z.SET, u.current), ee = (m) => {
    x(), c || (E.v = setTimeout(() => Ke(U), Math.max(m, 0)));
  }, De = (m) => {
    A || (m.stopPropagation(), !(E.v || p) && D.on(b, () => ee(z - b), () => ee(z)));
  }, Ne = () => {
    $(), p || N(Z.UNSET, u.current);
  }, Se = (m) => {
    if (v)
      switch (m.key) {
        case _.ENTER:
          m.preventDefault();
        case _.SPACE:
        case _.RIGHT:
          c !== "none" && U(Re.FIRST);
      }
  }, ke = (m) => {
    let F = !1;
    switch (m.key) {
      case _.LEFT:
        p && (u.current.focus(), g(!1), F = !0);
        break;
      case _.RIGHT:
        p || (F = !0);
        break;
    }
    F && (m.preventDefault(), m.stopPropagation());
  };
  fe(A, u, O), Oe(o, p), s.useEffect(() => D.toggle(p), [D, p]), s.useEffect(() => () => clearTimeout(E.v), [E]), s.useEffect(() => {
    v && I ? u.current.focus() : g(!1);
  }, [v, I, g, u]), s.useImperativeHandle(f, () => ({
    openMenu: (...m) => {
      I && U(...m);
    },
    closeMenu: () => {
      p && (u.current.focus(), g(!1));
    }
  }));
  const q = s.useMemo(() => ({
    open: p,
    hover: v,
    disabled: A,
    submenu: !0
  }), [p, v, A]), {
    ref: ze,
    className: He,
    ...Ie
  } = y, Ae = te({
    onPointerEnter: D.off,
    onPointerMove: De,
    onPointerLeave: Ne,
    onKeyDown: Se,
    onClick: () => c !== "none" && U()
  }, Ie), Le = () => {
    const m = /* @__PURE__ */ T.jsx(Ue, {
      ...C,
      ...d,
      ariaLabel: a || (typeof n == "string" ? n : "Submenu"),
      anchorRef: u,
      containerRef: S ? V : X,
      direction: r || (w === "right" || w === "left" ? w : "right"),
      parentScrollingRef: S && h,
      isDisabled: A
    }), F = V.current;
    return S && F ? /* @__PURE__ */ ta.createPortal(m, F) : m;
  };
  return /* @__PURE__ */ T.jsxs("li", {
    className: W({
      block: B,
      element: Fe,
      className: i
    }),
    style: {
      position: "relative"
    },
    role: re,
    ref: X,
    onKeyDown: ke,
    children: [/* @__PURE__ */ T.jsx("div", {
      role: ce,
      "aria-haspopup": !0,
      "aria-expanded": p,
      ...oe(A, v),
      ...Ae,
      ref: se(ze, u),
      className: W({
        block: B,
        element: le,
        modifiers: q,
        className: He
      }),
      children: s.useMemo(() => Y(n, q), [n, q])
    }), Q && Le()]
  });
}), ca = (e, a, i, t) => {
  const {
    submenuCloseDelay: r
  } = s.useContext(ie), {
    isParentOpen: n,
    submenuCtx: c,
    dispatch: o,
    updateItems: v
  } = s.useContext(ne), f = () => {
    !i && !t && o(Z.SET, e.current);
  }, u = () => {
    !t && o(Z.UNSET, e.current);
  }, j = (C) => {
    i && !C.currentTarget.contains(C.relatedTarget) && u();
  }, k = (C) => {
    t || (C.stopPropagation(), c.on(r, f, f));
  }, y = (C, P) => {
    c.off(), !P && u();
  };
  return fe(t, e, v), s.useEffect(() => {
    i && n && a.current && a.current.focus();
  }, [a, i, n]), {
    setHover: f,
    onBlur: j,
    onPointerMove: k,
    onPointerLeave: y
  };
}, K = /* @__PURE__ */ de("MenuItem", function({
  className: a,
  value: i,
  href: t,
  type: r,
  checked: n,
  disabled: c,
  children: o,
  onClick: v,
  isHovering: f,
  itemRef: u,
  externalRef: j,
  ...k
}) {
  const y = !!c, {
    setHover: C,
    ...P
  } = ca(u, u, f, y), V = s.useContext(Ye), z = s.useContext(We), b = r === "radio", h = r === "checkbox", w = !!t && !y && !b && !h, H = b ? z.value === i : h ? !!n : !1, I = (d) => {
    if (y) {
      d.stopPropagation(), d.preventDefault();
      return;
    }
    const g = {
      value: i,
      syntheticEvent: d
    };
    d.key !== void 0 && (g.key = d.key), h && (g.checked = !H), b && (g.name = z.name), Y(v, g), b && Y(z.onRadioChange, g), V.handleClick(g, h || b);
  }, D = (d) => {
    if (f)
      switch (d.key) {
        case _.ENTER:
          d.preventDefault();
        case _.SPACE:
          w ? u.current.click() : I(d);
      }
  }, N = s.useMemo(() => ({
    type: r,
    disabled: y,
    hover: f,
    checked: H,
    anchor: w
  }), [r, y, f, H, w]), O = te({
    ...P,
    onPointerDown: C,
    onKeyDown: D,
    onClick: I
  }, k), S = {
    role: b ? "menuitemradio" : h ? "menuitemcheckbox" : ce,
    "aria-checked": b || h ? H : void 0,
    ...oe(y, f),
    ...O,
    ref: se(j, u),
    className: W({
      block: B,
      element: le,
      modifiers: N,
      className: a
    }),
    children: s.useMemo(() => Y(o, N), [o, N])
  };
  return w ? /* @__PURE__ */ T.jsx("li", {
    role: re,
    children: /* @__PURE__ */ T.jsx("a", {
      href: t,
      ...S
    })
  }) : /* @__PURE__ */ T.jsx("li", {
    ...S
  });
}), oa = /* @__PURE__ */ s.memo(/* @__PURE__ */ s.forwardRef(function({
  className: a,
  ...i
}, t) {
  return /* @__PURE__ */ T.jsx("li", {
    role: "separator",
    ...i,
    ref: t,
    className: W({
      block: B,
      element: Be,
      className: a
    })
  });
}));
var he = {}, ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-info", t = 512, r = 512, n = ["info-circle"], c = "f05a", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faCircleInfo = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(ge);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = ge;
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
})(he);
var me = {}, ve = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-xmark", t = 512, r = 512, n = [61532, "times-circle", "xmark-circle"], c = "f057", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faCircleXmark = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(ve);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = ve;
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
})(me);
var Ce = {}, we = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-check", t = 512, r = 512, n = [61533, "check-circle"], c = "f058", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faCircleCheck = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
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
  }, e.faCheckCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(Ce);
const sa = ({
  type: e = "info",
  title: a,
  description: i,
  className: t,
  iconColor: r
}) => {
  const n = s.useMemo(() => ae(e).with("success", () => Ce.faCheckCircle).with("error", () => me.faTimesCircle).with("info", () => he.faInfoCircle).exhaustive(), [e]), c = s.useMemo(() => r || ae(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ l("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: t, children: /* @__PURE__ */ l("div", { children: /* @__PURE__ */ M("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ l("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ l(L, { icon: n, css: G`
                color: ${c};
              `, size: "6x" }) }),
    /* @__PURE__ */ l("div", { children: a }),
    /* @__PURE__ */ l("div", { children: i })
  ] }) }) });
}, la = ({
  onRowDoubleClick: e,
  ...a
}) => /* @__PURE__ */ l("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (i) => e == null ? void 0 : e(a.original, i), children: a.getVisibleCells().map((i) => /* @__PURE__ */ l(Je, { ...i }, i.id)) }, a.id);
var be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down", t = 384, r = 512, n = [8595], c = "f063", o = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowDown = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(be);
var ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up", t = 384, r = 512, n = [8593], c = "f062", o = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowUp = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(ye);
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "table-columns", t = 512, r = 512, n = ["columns"], c = "f0db", o = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faTableColumns = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(pe);
var Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down-z-a", t = 576, r = 512, n = ["sort-alpha-desc", "sort-alpha-down-alt"], c = "f881", o = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(Me);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up-a-z", t = 576, r = 512, n = ["sort-alpha-up"], c = "f15e", o = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(Pe);
const ua = ({
  children: e,
  header: a
}) => {
  const i = a.getContext(), {
    table: t
  } = i, {
    column: r
  } = a, n = t.getVisibleLeafColumns().length, c = [];
  return r.getCanSort() && c.push(/* @__PURE__ */ M(K, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ l(L, { icon: Pe.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ M(K, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ l(L, { icon: Me.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && c.push(/* @__PURE__ */ M(K, { disabled: n === 1, onClick: () => a.column.toggleVisibility(), children: [
    /* @__PURE__ */ l(L, { icon: Qe.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ M(Ze, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    c.length > 0 && /* @__PURE__ */ M(J, { children: [
      c,
      /* @__PURE__ */ l(oa, {})
    ] }),
    /* @__PURE__ */ l(ra, { label: /* @__PURE__ */ M(J, { children: [
      /* @__PURE__ */ l(L, { icon: pe.faTableColumns }),
      "Колонки"
    ] }), children: t.getAllLeafColumns().filter((o) => o.getCanHide()).map((o) => /* @__PURE__ */ l(K, { type: "checkbox", checked: o.getIsVisible(), disabled: n === 1 && o.getIsVisible(), onClick: (v) => {
      v.keepOpen = !0, o.toggleVisibility();
    }, children: ue(o.columnDef.header, i) }, o.id)) })
  ] });
}, da = (e) => {
  const {
    colSpan: a,
    column: i,
    isPlaceholder: t,
    getContext: r,
    getResizeHandler: n
  } = e;
  return /* @__PURE__ */ M("th", { css: [{
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
    /* @__PURE__ */ M("div", { css: [{
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
      /* @__PURE__ */ M("div", { onClick: () => {
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
        t ? null : ue(i.columnDef.header, r()),
        " ",
        i.getIsSorted() === "asc" && /* @__PURE__ */ l(L, { icon: ye.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        i.getIsSorted() === "desc" && /* @__PURE__ */ l(L, { icon: be.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ l(ua, { header: e, children: ({
        open: c
      }) => /* @__PURE__ */ l("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, c ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ l(L, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: Xe.faCaretDown }) }) })
    ] }),
    i.getCanResize() && /* @__PURE__ */ l("div", { css: [{
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
}, fa = ({
  ...e
}) => /* @__PURE__ */ l("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((a) => /* @__PURE__ */ l("tr", { children: a.headers.map((i) => /* @__PURE__ */ l(da, { ...i }, i.id)) }, a.id)) }), Sa = ({
  table: e,
  border: a = !1,
  className: i,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ l(sa, { type: "error", title: e.error.message }) : /* @__PURE__ */ l(Ge, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ l("div", { css: [{
  minHeight: "200px"
}], children: /* @__PURE__ */ M("table", { className: i, css: [a && {
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
  e.getHeaderGroups().map((r) => /* @__PURE__ */ l("colgroup", { children: r.headers.map((n) => /* @__PURE__ */ l("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, r.id)),
  /* @__PURE__ */ l(fa, { ...e }),
  /* @__PURE__ */ l("tbody", { children: e.getRowModel().rows.map((r) => /* @__PURE__ */ l(la, { onRowDoubleClick: t, ...r }, r.id)) })
] }) }) }), ha = ({
  columns: e,
  data: a = [],
  isLoading: i,
  isFetching: t,
  ...r
}) => {
  const n = ia({
    getCoreRowModel: na(),
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
}, ka = (e, a, {
  defaultSorting: i = [],
  defaultPageSize: t = 25,
  defaultColumnVisibility: r = {},
  defaultFilters: n,
  isLoading: c = !1,
  keepPrevious: o = !0,
  loadingOnFetch: v = !1,
  ...f
} = {}) => {
  var N, O, S;
  const [u, j] = s.useState({
    pageIndex: 0,
    pageSize: t
  }), [k, y] = s.useState(n || []), [C, P] = s.useState(i), [V, z] = s.useState(r);
  s.useEffect(() => {
    var d;
    (d = f.state) != null && d.sorting && P(f.state.sorting);
  }, [(N = f.state) == null ? void 0 : N.sorting]);
  const b = s.useMemo(() => {
    const {
      pageIndex: d,
      pageSize: g
    } = u;
    return {
      start: d * g,
      length: g,
      sort: JSON.stringify(C.map((R) => ({
        property: R.id,
        direction: R.desc ? "DESC" : "ASC"
      }))),
      ...k.length > 0 && {
        extFilters: JSON.stringify(k)
      }
    };
  }, [u, k, C]), h = $e(e, {
    params: b,
    placeholderData: o ? qe : void 0
  }), w = s.useMemo(() => {
    var d, g;
    return isNaN(Number((d = h.data) == null ? void 0 : d.recordsFiltered)) ? 0 : Number((g = h.data) == null ? void 0 : g.recordsFiltered);
  }, [(O = h.data) == null ? void 0 : O.recordsFiltered]), H = s.useMemo(() => w > 0 ? Math.ceil(w / u.pageSize) : 1, [u.pageSize, w]), I = ha({
    ...f,
    columns: a,
    data: (S = h.data) == null ? void 0 : S.data,
    isLoading: h.isLoading || v && h.isFetching || c,
    isFetching: h.isFetching,
    manualPagination: !0,
    onPaginationChange: j,
    onSortingChange: (d) => {
      P(d), f.onSortingChange && f.onSortingChange(d);
    },
    onColumnVisibilityChange: z,
    pageCount: H,
    state: {
      pagination: u,
      sorting: C,
      columnVisibility: V,
      ...f == null ? void 0 : f.state
    }
  }), D = s.useCallback(() => {
    h.refetch();
  }, [h]);
  return {
    ...I,
    recordsTotal: w,
    refetch: D,
    error: h.error
  };
}, ga = (e, a) => ({
  header: a == null ? void 0 : a.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (i) => /* @__PURE__ */ l(xe, { info: i, actions: e })
}), ma = () => (e, a, i) => ({
  header: a,
  accessorKey: e,
  cell: (t) => /* @__PURE__ */ l(J, { children: t.getValue() ? "Да" : "Нет" }),
  ...i
}), va = () => (e, a, {
  inputFormat: i = "YYYY-MM-DD HH:mm:ss",
  displayFormat: t = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: a,
  accessorKey: e,
  ...r,
  cell: (n) => n.getValue() ? ea(n.getValue(), i).format(t) : ""
}), Ca = () => (e, a, i, t) => ({
  header: i,
  accessorKey: e,
  ...t,
  cell: (r) => /* @__PURE__ */ l(aa, { info: r, dictionary: a })
}), wa = () => (e, a, i) => ({
  ...i,
  header: a,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), ba = () => (e = "id", a) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...a
}), za = () => ({
  id: ba(),
  actions: ga,
  display: wa(),
  boolean: ma(),
  date: va(),
  dictionary: Ca()
});
export {
  sa as S,
  Sa as T,
  ha as a,
  za as c,
  Ce as f,
  ka as u
};
