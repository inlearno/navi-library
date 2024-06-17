import { j as L, b as Pt } from "./library-5ad54f6e.js";
import { j as Hi, R as _i, k as zi } from "./Phone-0baa4629.js";
import { r as g, c as un } from "./react-bd6781bd.js";
import { F as xs } from "./icons-56df5d3c.js";
import { c as $i, a as Xi } from "./faEye-6d8181c7.js";
import { j as K, I as Yi } from "./mui-51f6b52b.js";
const Fe = g.createContext({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), Yt = g.createContext({}), qt = g.createContext(null), Be = typeof document < "u", ke = Be ? g.useLayoutEffect : g.useEffect, Ts = g.createContext({ strict: !1 }), je = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), qi = "framerAppearId", Ps = "data-" + je(qi), Zi = {
  skipAnimations: !1,
  useManualTiming: !1
};
class hn {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function Qi(t) {
  let e = new hn(), n = new hn(), s = 0, i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const h = c && i, f = h ? e : n;
      return u && r.add(l), f.add(l) && h && i && (s = e.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), r.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (i) {
        o = !0;
        return;
      }
      if (i = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
        for (let u = 0; u < s; u++) {
          const c = e.order[u];
          r.has(c) && (a.schedule(c), t()), c(l);
        }
      i = !1, o && (o = !1, a.process(l));
    }
  };
  return a;
}
const jt = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Ji = 40;
function ws(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = jt.reduce((h, f) => (h[f] = Qi(() => n = !0), h), {}), r = (h) => {
    o[h].process(i);
  }, a = () => {
    const h = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Ji), 1), i.timestamp = h, i.isProcessing = !0, jt.forEach(r), i.isProcessing = !1, n && e && (s = !1, t(a));
  }, l = () => {
    n = !0, s = !0, i.isProcessing || t(a);
  };
  return { schedule: jt.reduce((h, f) => {
    const d = o[f];
    return h[f] = (m, p = !1, x = !1) => (n || l(), d.schedule(m, p, x)), h;
  }, {}), cancel: (h) => jt.forEach((f) => o[f].cancel(h)), state: i, steps: o };
}
const { schedule: Oe, cancel: Dc } = ws(queueMicrotask, !1);
function tr(t, e, n, s) {
  const { visualElement: i } = g.useContext(Yt), o = g.useContext(Ts), r = g.useContext(qt), a = g.useContext(Fe).reducedMotion, l = g.useRef();
  s = s || o.renderer, !l.current && s && (l.current = s(t, {
    visualState: e,
    parent: i,
    props: n,
    presenceContext: r,
    blockInitialAnimation: r ? r.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = l.current;
  g.useInsertionEffect(() => {
    u && u.update(n, r);
  });
  const c = g.useRef(!!(n[Ps] && !window.HandoffComplete));
  return ke(() => {
    u && (Oe.render(u.render), c.current && u.animationState && u.animationState.animateChanges());
  }), g.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
  }), u;
}
function ft(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function er(t, e, n) {
  return g.useCallback(
    (s) => {
      s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : ft(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function Vt(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Zt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const Ie = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ne = ["initial", ...Ie];
function Qt(t) {
  return Zt(t.animate) || Ne.some((e) => Vt(t[e]));
}
function bs(t) {
  return !!(Qt(t) || t.variants);
}
function nr(t, e) {
  if (Qt(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Vt(n) ? n : void 0,
      animate: Vt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function sr(t) {
  const { initial: e, animate: n } = nr(t, g.useContext(Yt));
  return g.useMemo(() => ({ initial: e, animate: n }), [fn(e), fn(n)]);
}
function fn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const dn = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, At = {};
for (const t in dn)
  At[t] = {
    isEnabled: (e) => dn[t].some((n) => !!e[n])
  };
function ir(t) {
  for (const e in t)
    At[e] = {
      ...At[e],
      ...t[e]
    };
}
const Ue = g.createContext({}), Ss = g.createContext({}), rr = Symbol.for("motionComponentSymbol");
function or({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  t && ir(t);
  function o(a, l) {
    let u;
    const c = {
      ...g.useContext(Fe),
      ...a,
      layoutId: ar(a)
    }, { isStatic: h } = c, f = sr(a), d = s(a, h);
    if (!h && Be) {
      f.visualElement = tr(i, d, c, e);
      const m = g.useContext(Ss), p = g.useContext(Ts).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        p,
        t,
        m
      ));
    }
    return K.jsxs(Yt.Provider, { value: f, children: [u && f.visualElement ? K.jsx(u, { visualElement: f.visualElement, ...c }) : null, n(i, a, er(d, f.visualElement, l), d, h, f.visualElement)] });
  }
  const r = g.forwardRef(o);
  return r[rr] = i, r;
}
function ar({ layoutId: t }) {
  const e = g.useContext(Ue).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function lr(t) {
  function e(s, i = {}) {
    return or(t(s, i));
  }
  if (typeof Proxy > "u")
    return e;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
  });
}
const cr = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ke(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(cr.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const Gt = {};
function ur(t) {
  Object.assign(Gt, t);
}
const Et = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ut = new Set(Et);
function Cs(t, { layout: e, layoutId: n }) {
  return ut.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Gt[t] || t === "opacity");
}
const O = (t) => !!(t && t.getVelocity), hr = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, fr = Et.length;
function dr(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, s, i) {
  let o = "";
  for (let r = 0; r < fr; r++) {
    const a = Et[r];
    if (t[a] !== void 0) {
      const l = hr[a] || a;
      o += `${l}(${t[a]}) `;
    }
  }
  return e && !t.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(t, s ? "" : o) : n && s && (o = "none"), o;
}
const Vs = (t) => (e) => typeof e == "string" && e.startsWith(t), As = Vs("--"), pr = Vs("var(--"), We = (t) => pr(t) ? mr.test(t.split("/*")[0].trim()) : !1, mr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, gr = (t, e) => e && typeof t == "number" ? e.transform(t) : t, tt = (t, e, n) => n > e ? e : n < t ? t : n, yt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, wt = {
  ...yt,
  transform: (t) => tt(0, 1, t)
}, Ot = {
  ...yt,
  default: 1
}, bt = (t) => Math.round(t * 1e5) / 1e5, Ge = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, yr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, vr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Lt(t) {
  return typeof t == "string";
}
const Ft = (t) => ({
  test: (e) => Lt(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Z = Ft("deg"), _ = Ft("%"), w = Ft("px"), xr = Ft("vh"), Tr = Ft("vw"), pn = {
  ..._,
  parse: (t) => _.parse(t) / 100,
  transform: (t) => _.transform(t * 100)
}, mn = {
  ...yt,
  transform: Math.round
}, Ds = {
  // Border props
  borderWidth: w,
  borderTopWidth: w,
  borderRightWidth: w,
  borderBottomWidth: w,
  borderLeftWidth: w,
  borderRadius: w,
  radius: w,
  borderTopLeftRadius: w,
  borderTopRightRadius: w,
  borderBottomRightRadius: w,
  borderBottomLeftRadius: w,
  // Positioning props
  width: w,
  maxWidth: w,
  height: w,
  maxHeight: w,
  size: w,
  top: w,
  right: w,
  bottom: w,
  left: w,
  // Spacing props
  padding: w,
  paddingTop: w,
  paddingRight: w,
  paddingBottom: w,
  paddingLeft: w,
  margin: w,
  marginTop: w,
  marginRight: w,
  marginBottom: w,
  marginLeft: w,
  // Transform props
  rotate: Z,
  rotateX: Z,
  rotateY: Z,
  rotateZ: Z,
  scale: Ot,
  scaleX: Ot,
  scaleY: Ot,
  scaleZ: Ot,
  skew: Z,
  skewX: Z,
  skewY: Z,
  distance: w,
  translateX: w,
  translateY: w,
  translateZ: w,
  x: w,
  y: w,
  z: w,
  perspective: w,
  transformPerspective: w,
  opacity: wt,
  originX: pn,
  originY: pn,
  originZ: w,
  // Misc
  zIndex: mn,
  backgroundPositionX: w,
  backgroundPositionY: w,
  // SVG
  fillOpacity: wt,
  strokeOpacity: wt,
  numOctaves: mn
};
function He(t, e, n, s) {
  const { style: i, vars: o, transform: r, transformOrigin: a } = t;
  let l = !1, u = !1, c = !0;
  for (const h in e) {
    const f = e[h];
    if (As(h)) {
      o[h] = f;
      continue;
    }
    const d = Ds[h], m = gr(f, d);
    if (ut.has(h)) {
      if (l = !0, r[h] = m, !c)
        continue;
      f !== (d.default || 0) && (c = !1);
    } else
      h.startsWith("origin") ? (u = !0, a[h] = m) : i[h] = m;
  }
  if (e.transform || (l || s ? i.transform = dr(t.transform, n, c, s) : i.transform && (i.transform = "none")), u) {
    const { originX: h = "50%", originY: f = "50%", originZ: d = 0 } = a;
    i.transformOrigin = `${h} ${f} ${d}`;
  }
}
const _e = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Rs(t, e, n) {
  for (const s in e)
    !O(e[s]) && !Cs(s, n) && (t[s] = e[s]);
}
function Pr({ transformTemplate: t }, e, n) {
  return g.useMemo(() => {
    const s = _e();
    return He(s, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, s.vars, s.style);
  }, [e]);
}
function wr(t, e, n) {
  const s = t.style || {}, i = {};
  return Rs(i, s, t), Object.assign(i, Pr(t, e, n)), i;
}
function br(t, e, n) {
  const s = {}, i = wr(t, e, n);
  return t.drag && t.dragListener !== !1 && (s.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = i, s;
}
const Sr = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ht(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Sr.has(t);
}
let Ms = (t) => !Ht(t);
function Cr(t) {
  t && (Ms = (e) => e.startsWith("on") ? !Ht(e) : t(e));
}
try {
  Cr(require("@emotion/is-prop-valid").default);
} catch {
}
function Vr(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Ms(i) || n === !0 && Ht(i) || !e && !Ht(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
function gn(t, e, n) {
  return typeof t == "string" ? t : w.transform(e + n * t);
}
function Ar(t, e, n) {
  const s = gn(e, t.x, t.width), i = gn(n, t.y, t.height);
  return `${s} ${i}`;
}
const Dr = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Rr = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Mr(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Dr : Rr;
  t[o.offset] = w.transform(-s);
  const r = w.transform(e), a = w.transform(n);
  t[o.array] = `${r} ${a}`;
}
function ze(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, h, f) {
  if (He(t, u, c, f), h) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: m, dimensions: p } = t;
  d.transform && (p && (m.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = Ar(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && Mr(d, r, a, l, !1);
}
const Es = () => ({
  ..._e(),
  attrs: {}
}), $e = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Er(t, e, n, s) {
  const i = g.useMemo(() => {
    const o = Es();
    return ze(o, e, { enableHardwareAcceleration: !1 }, $e(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Rs(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
function Lr(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (Ke(n) ? Er : br)(s, o, r, n), u = Vr(s, typeof n == "string", t), c = n !== g.Fragment ? { ...u, ...l, ref: i } : {}, { children: h } = s, f = g.useMemo(() => O(h) ? h.get() : h, [h]);
    return g.createElement(n, {
      ...c,
      children: f
    });
  };
}
function Ls(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const Fs = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Bs(t, e, n, s) {
  Ls(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(Fs.has(i) ? i : je(i), e.attrs[i]);
}
function Xe(t, e, n) {
  var s;
  const { style: i } = t, o = {};
  for (const r in i)
    (O(i[r]) || e.style && O(e.style[r]) || Cs(r, t) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
function ks(t, e, n) {
  const s = Xe(t, e, n);
  for (const i in t)
    if (O(t[i]) || O(e[i])) {
      const o = Et.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
function yn(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function Ye(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = yn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = yn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function js(t) {
  const e = g.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const ve = (t) => Array.isArray(t), Fr = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Br = (t) => ve(t) ? t[t.length - 1] || 0 : t;
function Ut(t) {
  const e = O(t) ? t.get() : t;
  return Fr(e) ? e.toValue() : e;
}
function kr({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, s, i, o) {
  const r = {
    latestValues: jr(s, i, o, t),
    renderState: e()
  };
  return n && (r.mount = (a) => n(s, a, r)), r;
}
const Os = (t) => (e, n) => {
  const s = g.useContext(Yt), i = g.useContext(qt), o = () => kr(t, e, s, i);
  return n ? o() : js(o);
};
function jr(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const f in o)
    i[f] = Ut(o[f]);
  let { initial: r, animate: a } = t;
  const l = Qt(t), u = bs(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  return h && typeof h != "boolean" && !Zt(h) && (Array.isArray(h) ? h : [h]).forEach((d) => {
    const m = Ye(t, d);
    if (!m)
      return;
    const { transitionEnd: p, transition: x, ...T } = m;
    for (const v in T) {
      let y = T[v];
      if (Array.isArray(y)) {
        const P = c ? y.length - 1 : 0;
        y = y[P];
      }
      y !== null && (i[v] = y);
    }
    for (const v in p)
      i[v] = p[v];
  }), i;
}
const k = (t) => t, { schedule: V, cancel: et, state: B, steps: se } = ws(typeof requestAnimationFrame < "u" ? requestAnimationFrame : k, !0), Or = {
  useVisualState: Os({
    scrapeMotionValuesFromProps: ks,
    createRenderState: Es,
    onMount: (t, e, { renderState: n, latestValues: s }) => {
      V.read(() => {
        try {
          n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), V.render(() => {
        ze(n, s, { enableHardwareAcceleration: !1 }, $e(e.tagName), t.transformTemplate), Bs(e, n);
      });
    }
  })
}, Ir = {
  useVisualState: Os({
    scrapeMotionValuesFromProps: Xe,
    createRenderState: _e
  })
};
function Nr(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...Ke(t) ? Or : Ir,
    preloadedFeatures: n,
    useRender: Lr(e),
    createVisualElement: s,
    Component: t
  };
}
function z(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const Is = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function Jt(t, e = "page") {
  return {
    point: {
      x: t[`${e}X`],
      y: t[`${e}Y`]
    }
  };
}
const Ur = (t) => (e) => Is(e) && t(e, Jt(e));
function $(t, e, n, s) {
  return z(t, e, Ur(n), s);
}
const Kr = (t, e) => (n) => e(t(n)), X = (...t) => t.reduce(Kr);
function Ns(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const vn = Ns("dragHorizontal"), xn = Ns("dragVertical");
function Us(t) {
  let e = !1;
  if (t === "y")
    e = xn();
  else if (t === "x")
    e = vn();
  else {
    const n = vn(), s = xn();
    n && s ? e = () => {
      n(), s();
    } : (n && n(), s && s());
  }
  return e;
}
function Ks() {
  const t = Us(!0);
  return t ? (t(), !1) : !0;
}
class st {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function Tn(t, e) {
  const n = e ? "pointerenter" : "pointerleave", s = e ? "onHoverStart" : "onHoverEnd", i = (o, r) => {
    if (o.pointerType === "touch" || Ks())
      return;
    const a = t.getProps();
    t.animationState && a.whileHover && t.animationState.setActive("whileHover", e);
    const l = a[s];
    l && V.postRender(() => l(o, r));
  };
  return $(t.current, n, i, {
    passive: !t.getProps()[s]
  });
}
class Wr extends st {
  mount() {
    this.unmount = X(Tn(this.node, !0), Tn(this.node, !1));
  }
  unmount() {
  }
}
class Gr extends st {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = X(z(this.node.current, "focus", () => this.onFocus()), z(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Ws = (t, e) => e ? t === e ? !0 : Ws(t, e.parentElement) : !1;
function ie(t, e) {
  if (!e)
    return;
  const n = new PointerEvent("pointer" + t);
  e(n, Jt(n));
}
class Hr extends st {
  constructor() {
    super(...arguments), this.removeStartListeners = k, this.removeEndListeners = k, this.removeAccessibleListeners = k, this.startPointerPress = (e, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const s = this.node.getProps(), o = $(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c, globalTapTarget: h } = this.node.getProps(), f = !h && !Ws(this.node.current, a.target) ? c : u;
        f && V.update(() => f(a, l));
      }, {
        passive: !(s.onTap || s.onPointerUp)
      }), r = $(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
        passive: !(s.onTapCancel || s.onPointerCancel)
      });
      this.removeEndListeners = X(o, r), this.startPress(e, n);
    }, this.startAccessiblePress = () => {
      const e = (o) => {
        if (o.key !== "Enter" || this.isPressing)
          return;
        const r = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || ie("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && V.postRender(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = z(this.node.current, "keyup", r), ie("down", (a, l) => {
          this.startPress(a, l);
        });
      }, n = z(this.node.current, "keydown", e), s = () => {
        this.isPressing && ie("cancel", (o, r) => this.cancelPress(o, r));
      }, i = z(this.node.current, "blur", s);
      this.removeAccessibleListeners = X(n, i);
    };
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && V.postRender(() => s(e, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ks();
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: s } = this.node.getProps();
    s && V.postRender(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(), n = $(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(e.onTapStart || e.onPointerStart)
    }), s = z(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = X(n, s);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const xe = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), _r = (t) => {
  const e = xe.get(t.target);
  e && e(t);
}, zr = (t) => {
  t.forEach(_r);
};
function $r({ root: t, ...e }) {
  const n = t || document;
  re.has(n) || re.set(n, {});
  const s = re.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(zr, { root: t, ...e })), s[i];
}
function Xr(t, e, n) {
  const s = $r(e);
  return xe.set(t, n), s.observe(t), () => {
    xe.delete(t), s.unobserve(t);
  };
}
const Yr = {
  some: 0,
  all: 1
};
class qr extends st {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Yr[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Xr(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Zr(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Zr({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Qr = {
  inView: {
    Feature: qr
  },
  tap: {
    Feature: Hr
  },
  focus: {
    Feature: Gr
  },
  hover: {
    Feature: Wr
  }
};
function Gs(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function te(t, e, n) {
  const s = t.getProps();
  return Ye(s, e, n !== void 0 ? n : s.custom, t);
}
const Y = (t) => t * 1e3, q = (t) => t / 1e3, Jr = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, to = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), eo = {
  type: "keyframes",
  duration: 0.8
}, no = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, so = (t, { keyframes: e }) => e.length > 2 ? eo : ut.has(t) ? t.startsWith("scale") ? to(e[1]) : Jr : no;
function io({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function qe(t, e) {
  return t[e] || t.default || t;
}
const ro = (t) => t !== null;
function ee(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(ro), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
let Kt;
function oo() {
  Kt = void 0;
}
const J = {
  now: () => (Kt === void 0 && J.set(B.isProcessing || Zi.useManualTiming ? B.timestamp : performance.now()), Kt),
  set: (t) => {
    Kt = t, queueMicrotask(oo);
  }
}, Hs = (t) => /^0[^.\s]+$/u.test(t);
function ao(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Hs(t) : !0;
}
let lo = k, _s = k;
const zs = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), co = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function uo(t) {
  const e = co.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function $s(t, e, n = 1) {
  const [s, i] = uo(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return zs(r) ? parseFloat(r) : r;
  }
  return We(i) ? $s(i, e, n + 1) : i;
}
const ho = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Pn = (t) => t === yt || t === w, wn = (t, e) => parseFloat(t.split(", ")[e]), bn = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return wn(i[1], e);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? wn(o[1], t) : 0;
  }
}, fo = /* @__PURE__ */ new Set(["x", "y", "z"]), po = Et.filter((t) => !fo.has(t));
function mo(t) {
  const e = [];
  return po.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const gt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: bn(4, 13),
  y: bn(5, 14)
};
gt.translateX = gt.x;
gt.translateY = gt.y;
const Xs = (t) => (e) => e.test(t), go = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Ys = [yt, w, _, Z, Tr, xr, go], Sn = (t) => Ys.find(Xs(t)), ct = /* @__PURE__ */ new Set();
let Te = !1, Pe = !1;
function qs() {
  if (Pe) {
    const t = Array.from(ct).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = mo(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var a;
        (a = s.getValue(o)) === null || a === void 0 || a.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Pe = !1, Te = !1, ct.forEach((t) => t.complete()), ct.clear();
}
function Zs() {
  ct.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Pe = !0);
  });
}
function yo() {
  Zs(), qs();
}
class Ze {
  constructor(e, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ct.add(this), Te || (Te = !0, V.read(Zs), V.resolveKeyframes(qs))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = i == null ? void 0 : i.get(), a = e[e.length - 1];
          if (r !== void 0)
            e[0] = r;
          else if (s && n) {
            const l = s.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0]);
        } else
          e[o] = e[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ct.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ct.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Qe = (t, e) => (n) => !!(Lt(n) && vr.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), Qs = (t, e, n) => (s) => {
  if (!Lt(s))
    return s;
  const [i, o, r, a] = s.match(Ge);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, vo = (t) => tt(0, 255, t), oe = {
  ...yt,
  transform: (t) => Math.round(vo(t))
}, lt = {
  test: Qe("rgb", "red"),
  parse: Qs("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + oe.transform(t) + ", " + oe.transform(e) + ", " + oe.transform(n) + ", " + bt(wt.transform(s)) + ")"
};
function xo(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const we = {
  test: Qe("#"),
  parse: xo,
  transform: lt.transform
}, dt = {
  test: Qe("hsl", "hue"),
  parse: Qs("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + _.transform(bt(e)) + ", " + _.transform(bt(n)) + ", " + bt(wt.transform(s)) + ")"
}, j = {
  test: (t) => lt.test(t) || we.test(t) || dt.test(t),
  parse: (t) => lt.test(t) ? lt.parse(t) : dt.test(t) ? dt.parse(t) : we.parse(t),
  transform: (t) => Lt(t) ? t : t.hasOwnProperty("red") ? lt.transform(t) : dt.transform(t)
};
function To(t) {
  var e, n;
  return isNaN(t) && Lt(t) && (((e = t.match(Ge)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(yr)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Js = "number", ti = "color", Po = "var", wo = "var(", Cn = "${}", bo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Dt(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(bo, (l) => (j.test(l) ? (s.color.push(o), i.push(ti), n.push(j.parse(l))) : l.startsWith(wo) ? (s.var.push(o), i.push(Po), n.push(l)) : (s.number.push(o), i.push(Js), n.push(parseFloat(l))), ++o, Cn)).split(Cn);
  return { values: n, split: a, indexes: s, types: i };
}
function ei(t) {
  return Dt(t).values;
}
function ni(t) {
  const { split: e, types: n } = Dt(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === Js ? o += bt(i[r]) : a === ti ? o += j.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const So = (t) => typeof t == "number" ? 0 : t;
function Co(t) {
  const e = ei(t);
  return ni(t)(e.map(So));
}
const nt = {
  test: To,
  parse: ei,
  createTransformer: ni,
  getAnimatableNone: Co
}, Vo = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ao(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(Ge) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = Vo.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Do = /\b([a-z-]*)\(.*?\)/gu, be = {
  ...nt,
  getAnimatableNone: (t) => {
    const e = t.match(Do);
    return e ? e.map(Ao).join(" ") : t;
  }
}, Ro = {
  ...Ds,
  // Color props
  color: j,
  backgroundColor: j,
  outlineColor: j,
  fill: j,
  stroke: j,
  // Border props
  borderColor: j,
  borderTopColor: j,
  borderRightColor: j,
  borderBottomColor: j,
  borderLeftColor: j,
  filter: be,
  WebkitFilter: be
}, Je = (t) => Ro[t];
function si(t, e) {
  let n = Je(t);
  return n !== be && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Mo = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Eo(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !Mo.has(o) && Dt(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = si(n, i);
}
class ii extends Ze {
  constructor(e, n, s, i) {
    super(e, n, s, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      const u = e[l];
      if (typeof u == "string" && We(u)) {
        const c = $s(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !ho.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = Sn(i), a = Sn(o);
    if (r !== a)
      if (Pn(r) && Pn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      ao(e[i]) && s.push(i);
    s.length && Eo(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = gt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n.current)
      return;
    const o = n.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const r = i.length - 1, a = i[r];
    i[r] = gt[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function Lo(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Vn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(nt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Fo(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Bo(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Vn(i, e), a = Vn(o, e);
  return !r || !a ? !1 : Fo(t) || n === "spring" && s;
}
class ri {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && yo(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !Bo(e, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        l == null || l(ee(e, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
function oi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ko = 5;
function ai(t, e, n) {
  const s = Math.max(e - ko, 0);
  return oi(n - t(s), e - s);
}
const ae = 1e-3, jo = 0.01, An = 10, Oo = 0.05, Io = 1;
function No({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: s = 1 }) {
  let i, o;
  lo(t <= Y(An));
  let r = 1 - e;
  r = tt(Oo, Io, r), t = tt(jo, An, q(t)), r < 1 ? (i = (u) => {
    const c = u * r, h = c * t, f = c - n, d = Se(u, r), m = Math.exp(-h);
    return ae - f / d * m;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), p = Se(Math.pow(u, 2), r);
    return (-i(u) + ae > 0 ? -1 : 1) * ((f - d) * m) / p;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -ae + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Ko(i, o, a);
  if (t = Y(t), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(s * u),
      duration: t
    };
  }
}
const Uo = 12;
function Ko(t, e, n) {
  let s = n;
  for (let i = 1; i < Uo; i++)
    s = s - t(s) / e(s);
  return s;
}
function Se(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Wo = ["duration", "bounce"], Go = ["stiffness", "damping", "mass"];
function Dn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ho(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Dn(t, Go) && Dn(t, Wo)) {
    const n = No(t);
    e = {
      ...e,
      ...n,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
function li({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0], o = t[t.length - 1], r = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: c, velocity: h, isResolvedFromDuration: f } = Ho({
    ...s,
    velocity: -q(s.velocity || 0)
  }), d = h || 0, m = l / (2 * Math.sqrt(a * u)), p = o - i, x = q(Math.sqrt(a / u)), T = Math.abs(p) < 5;
  n || (n = T ? 0.01 : 2), e || (e = T ? 5e-3 : 0.5);
  let v;
  if (m < 1) {
    const y = Se(x, m);
    v = (P) => {
      const C = Math.exp(-m * x * P);
      return o - C * ((d + m * x * p) / y * Math.sin(y * P) + p * Math.cos(y * P));
    };
  } else if (m === 1)
    v = (y) => o - Math.exp(-x * y) * (p + (d + x * p) * y);
  else {
    const y = x * Math.sqrt(m * m - 1);
    v = (P) => {
      const C = Math.exp(-m * x * P), D = Math.min(y * P, 300);
      return o - C * ((d + m * x * p) * Math.sinh(D) + y * p * Math.cosh(D)) / y;
    };
  }
  return {
    calculatedDuration: f && c || null,
    next: (y) => {
      const P = v(y);
      if (f)
        r.done = y >= c;
      else {
        let C = d;
        y !== 0 && (m < 1 ? C = ai(v, y, P) : C = 0);
        const D = Math.abs(C) <= n, F = Math.abs(o - P) <= e;
        r.done = D && F;
      }
      return r.value = r.done ? o : P, r;
    }
  };
}
function Rn({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (b) => a !== void 0 && b < a || l !== void 0 && b > l, m = (b) => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
  let p = n * e;
  const x = h + p, T = r === void 0 ? x : r(x);
  T !== x && (p = T - h);
  const v = (b) => -p * Math.exp(-b / s), y = (b) => T + v(b), P = (b) => {
    const S = v(b), A = y(b);
    f.done = Math.abs(S) <= u, f.value = f.done ? T : A;
  };
  let C, D;
  const F = (b) => {
    d(f.value) && (C = b, D = li({
      keyframes: [f.value, m(f.value)],
      velocity: ai(y, b, f.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return F(0), {
    calculatedDuration: null,
    next: (b) => {
      let S = !1;
      return !D && C === void 0 && (S = !0, P(b), F(b)), C !== void 0 && b >= C ? D.next(b - C) : (!S && P(b), f);
    }
  };
}
const ci = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, _o = 1e-7, zo = 12;
function $o(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = ci(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > _o && ++a < zo);
  return r;
}
function Bt(t, e, n, s) {
  if (t === e && n === s)
    return k;
  const i = (o) => $o(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : ci(i(o), e, s);
}
const Xo = Bt(0.42, 0, 1, 1), Yo = Bt(0, 0, 0.58, 1), ui = Bt(0.42, 0, 0.58, 1), qo = (t) => Array.isArray(t) && typeof t[0] != "number", hi = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, fi = (t) => (e) => 1 - t(1 - e), tn = (t) => 1 - Math.sin(Math.acos(t)), di = fi(tn), Zo = hi(tn), pi = Bt(0.33, 1.53, 0.69, 0.99), en = fi(pi), Qo = hi(en), Jo = (t) => (t *= 2) < 1 ? 0.5 * en(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), ta = {
  linear: k,
  easeIn: Xo,
  easeInOut: ui,
  easeOut: Yo,
  circIn: tn,
  circInOut: Zo,
  circOut: di,
  backIn: en,
  backInOut: Qo,
  backOut: pi,
  anticipate: Jo
}, Mn = (t) => {
  if (Array.isArray(t)) {
    _s(t.length === 4);
    const [e, n, s, i] = t;
    return Bt(e, n, s, i);
  } else if (typeof t == "string")
    return ta[t];
  return t;
}, Rt = (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, R = (t, e, n) => t + (e - t) * n;
function le(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function ea({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = le(l, a, t + 1 / 3), o = le(l, a, t), r = le(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
const ce = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, na = [we, lt, dt], sa = (t) => na.find((e) => e.test(t));
function En(t) {
  const e = sa(t);
  let n = e.parse(t);
  return e === dt && (n = ea(n)), n;
}
const Ln = (t, e) => {
  const n = En(t), s = En(e), i = { ...n };
  return (o) => (i.red = ce(n.red, s.red, o), i.green = ce(n.green, s.green, o), i.blue = ce(n.blue, s.blue, o), i.alpha = R(n.alpha, s.alpha, o), lt.transform(i));
}, Ce = /* @__PURE__ */ new Set(["none", "hidden"]);
function ia(t, e) {
  return Ce.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function Ve(t, e) {
  return (n) => n > 0 ? e : t;
}
function ra(t, e) {
  return (n) => R(t, e, n);
}
function nn(t) {
  return typeof t == "number" ? ra : typeof t == "string" ? We(t) ? Ve : j.test(t) ? Ln : la : Array.isArray(t) ? mi : typeof t == "object" ? j.test(t) ? Ln : oa : Ve;
}
function mi(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => nn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function oa(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = nn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function aa(t, e) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][i[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = l, i[r]++;
  }
  return s;
}
const la = (t, e) => {
  const n = nt.createTransformer(e), s = Dt(t), i = Dt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Ce.has(t) && !i.values.length || Ce.has(e) && !s.values.length ? ia(t, e) : X(mi(aa(s, i), i.values), n) : Ve(t, e);
};
function gi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? R(t, e, n) : nn(t)(t, e);
}
function ca(t, e, n) {
  const s = [], i = n || gi, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || k : e;
      a = X(l, a);
    }
    s.push(a);
  }
  return s;
}
function ua(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (_s(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && t[0] === t[1])
    return () => e[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const r = ca(e, s, i), a = r.length, l = (u) => {
    let c = 0;
    if (a > 1)
      for (; c < t.length - 2 && !(u < t[c + 1]); c++)
        ;
    const h = Rt(t[c], t[c + 1], u);
    return r[c](h);
  };
  return n ? (u) => l(tt(t[0], t[o - 1], u)) : l;
}
function ha(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Rt(0, e, s);
    t.push(R(n, 1, i));
  }
}
function fa(t) {
  const e = [0];
  return ha(e, t.length - 1), e;
}
function da(t, e) {
  return t.map((n) => n * e);
}
function pa(t, e) {
  return t.map(() => e || ui).splice(0, t.length - 1);
}
function _t({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = qo(s) ? s.map(Mn) : Mn(s), o = {
    done: !1,
    value: e[0]
  }, r = da(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : fa(e),
    t
  ), a = ua(r, e, {
    ease: Array.isArray(i) ? i : pa(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Fn = 2e4;
function ma(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Fn; )
    e += n, s = t.next(e);
  return e >= Fn ? 1 / 0 : e;
}
const ga = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => V.update(e, !0),
    stop: () => et(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => B.isProcessing ? B.timestamp : J.now()
  };
}, ya = {
  decay: Rn,
  inertia: Rn,
  tween: _t,
  keyframes: _t,
  spring: li
}, va = (t) => t / 100;
class sn extends ri {
  constructor({ KeyframeResolver: e = Ze, ...n }) {
    super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: s, motionValue: i, keyframes: o } = this.options, r = (a, l) => this.onKeyframesResolved(a, l);
    s && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, r, s, i) : this.resolver = new e(o, r, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = ya[n] || _t;
    let l, u;
    a !== _t && typeof e[0] != "number" && (l = X(va, gi(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = ma(c));
    const { calculatedDuration: h } = c, f = h + i, d = f * (s + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: f,
      totalDuration: d
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: h } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: f, repeat: d, repeatType: m, repeatDelay: p, onUpdate: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const T = this.currentTime - f * (this.speed >= 0 ? 1 : -1), v = this.speed >= 0 ? T < 0 : T > c;
    this.currentTime = Math.max(T, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let y = this.currentTime, P = o;
    if (d) {
      const b = Math.min(this.currentTime, c) / h;
      let S = Math.floor(b), A = b % 1;
      !A && b >= 1 && (A = 1), A === 1 && S--, S = Math.min(S, d + 1), !!(S % 2) && (m === "reverse" ? (A = 1 - A, p && (A -= p / h)) : m === "mirror" && (P = r)), y = tt(0, 1, A) * h;
    }
    const C = v ? { done: !1, value: l[0] } : P.next(y);
    a && (C.value = a(C.value));
    let { done: D } = C;
    !v && u !== null && (D = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return F && i !== void 0 && (C.value = ee(l, this.options, i)), x && x(C.value), F && this.finish(), C;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? q(e.calculatedDuration) : 0;
  }
  get time() {
    return q(this.currentTime);
  }
  set time(e) {
    e = Y(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = q(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = ga, onPlay: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = s), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
}
const yi = (t) => Array.isArray(t) && typeof t[0] == "number";
function vi(t) {
  return !!(!t || typeof t == "string" && t in rn || yi(t) || Array.isArray(t) && t.every(vi));
}
const Tt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, rn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Tt([0, 0.65, 0.55, 1]),
  circOut: Tt([0.55, 0, 1, 0.45]),
  backIn: Tt([0.31, 0.01, 0.66, -0.59]),
  backOut: Tt([0.33, 1.53, 0.69, 0.99])
};
function xa(t) {
  return xi(t) || rn.easeOut;
}
function xi(t) {
  if (t)
    return yi(t) ? Tt(t) : Array.isArray(t) ? t.map(xa) : rn[t];
}
function Ta(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a, times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = xi(a);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: s,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Pa = Lo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), wa = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), zt = 10, ba = 2e4;
function Sa(t) {
  return t.type === "spring" || t.name === "backgroundColor" || !vi(t.ease);
}
function Ca(t, e) {
  const n = new sn({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < ba; )
    s = n.sample(o), i.push(s.value), o += zt;
  return {
    times: void 0,
    keyframes: i,
    duration: o - zt,
    ease: "linear"
  };
}
class Bn extends ri {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, keyframes: i } = this.options;
    this.resolver = new ii(i, (o, r) => this.onKeyframesResolved(o, r), n, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    var s;
    let { duration: i = 300, times: o, ease: r, type: a, motionValue: l, name: u } = this.options;
    if (!(!((s = l.owner) === null || s === void 0) && s.current))
      return !1;
    if (Sa(this.options)) {
      const { onComplete: h, onUpdate: f, motionValue: d, ...m } = this.options, p = Ca(e, m);
      e = p.keyframes, e.length === 1 && (e[1] = e[0]), i = p.duration, o = p.times, r = p.ease, a = "keyframes";
    }
    const c = Ta(l.owner.current, u, e, { ...this.options, duration: i, times: o, ease: r });
    return c.startTime = J.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      l.set(ee(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: i,
      times: o,
      type: a,
      ease: r,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return q(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return q(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = Y(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return k;
      const { animation: s } = n;
      s.timeline = e, s.onfinish = null;
    }
    return k;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: s, duration: i, type: o, ease: r, times: a } = e;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const { motionValue: l, onUpdate: u, onComplete: c, ...h } = this.options, f = new sn({
          ...h,
          keyframes: s,
          duration: i,
          type: o,
          ease: r,
          times: a,
          isGenerator: !0
        }), d = Y(this.time);
        l.setWithVelocity(f.sample(d - zt).value, f.sample(d).value, zt);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a } = e;
    return Pa() && s && wa.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const on = (t, e, n, s = {}, i, o) => (r) => {
  const a = qe(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - Y(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  io(a) || (c = {
    ...c,
    ...so(t, c)
  }), c.duration && (c.duration = Y(c.duration)), c.repeatDelay && (c.repeatDelay = Y(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
    const f = ee(c.keyframes, a);
    if (f !== void 0) {
      V.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return !o && Bn.supports(c) ? new Bn(c) : new sn(c);
};
function $t(t) {
  return !!(O(t) && t.add);
}
function an(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ln(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class cn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return an(this.subscriptions, e), () => ln(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const kn = 30, Va = (t) => !isNaN(parseFloat(t));
class Aa {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "11.2.6", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = J.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = J.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Va(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new cn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), V.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = J.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > kn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, kn);
    return oi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Mt(t, e) {
  return new Aa(t, e);
}
function Da(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Mt(n));
}
function Ra(t, e) {
  const n = te(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Br(o[r]);
    Da(t, r, a);
  }
}
function Ma({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function Ti(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  const u = t.getValue("willChange");
  s && (r = s);
  const c = [], h = i && t.animationState && t.animationState.getState()[i];
  for (const f in l) {
    const d = t.getValue(f, (o = t.latestValues[f]) !== null && o !== void 0 ? o : null), m = l[f];
    if (m === void 0 || h && Ma(h, f))
      continue;
    const p = {
      delay: n,
      elapsed: 0,
      ...qe(r || {}, f)
    };
    let x = !1;
    if (window.HandoffAppearAnimations) {
      const y = t.getProps()[Ps];
      if (y) {
        const P = window.HandoffAppearAnimations(y, f, d, V);
        P !== null && (p.elapsed = P, x = !0);
      }
    }
    d.start(on(f, d, m, t.shouldReduceMotion && ut.has(f) ? { type: !1 } : p, t, x));
    const T = d.animation;
    T && ($t(u) && (u.add(f), T.then(() => u.remove(f))), c.push(T));
  }
  return a && Promise.all(c).then(() => {
    V.update(() => {
      a && Ra(t, a);
    });
  }), c;
}
function Ae(t, e, n = {}) {
  var s;
  const i = te(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(Ti(t, i, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: f } = o;
    return Ea(t, e, c + u, h, f, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function Ea(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(La).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(Ae(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function La(t, e) {
  return t.sortNodePosition(e);
}
function Fa(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Ae(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = Ae(t, e, n);
  else {
    const i = typeof e == "function" ? te(t, e, n.custom) : e;
    s = Promise.all(Ti(t, i, n));
  }
  return s.then(() => {
    V.postRender(() => {
      t.notify("AnimationComplete", e);
    });
  });
}
const Ba = [...Ie].reverse(), ka = Ie.length;
function ja(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => Fa(t, n, s)));
}
function Oa(t) {
  let e = ja(t);
  const n = Na();
  let s = !0;
  const i = (l) => (u, c) => {
    var h;
    const f = te(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (f) {
      const { transition: d, transitionEnd: m, ...p } = f;
      u = { ...u, ...p, ...m };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const u = t.getProps(), c = t.getVariantContext(!0) || {}, h = [], f = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let x = 0; x < ka; x++) {
      const T = Ba[x], v = n[T], y = u[T] !== void 0 ? u[T] : c[T], P = Vt(y), C = T === l ? v.isActive : null;
      C === !1 && (m = x);
      let D = y === c[T] && y !== u[T] && P;
      if (D && s && t.manuallyAnimateOnMount && (D = !1), v.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !y && !v.prevProp || // Or if the prop doesn't define an animation
      Zt(y) || typeof y == "boolean")
        continue;
      let b = Ia(v.prevProp, y) || // If we're making this variant active, we want to always make it active
      T === l && v.isActive && !D && P || // If we removed a higher-priority variant (i is in reverse order)
      x > m && P, S = !1;
      const A = Array.isArray(y) ? y : [y];
      let N = A.reduce(i(T), {});
      C === !1 && (N = {});
      const { prevResolvedValues: ht = {} } = v, kt = {
        ...ht,
        ...N
      }, U = (M) => {
        b = !0, f.has(M) && (S = !0, f.delete(M)), v.needsAnimating[M] = !0;
        const I = t.getValue(M);
        I && (I.liveStyle = !1);
      };
      for (const M in kt) {
        const I = N[M], vt = ht[M];
        if (d.hasOwnProperty(M))
          continue;
        let ne = !1;
        ve(I) && ve(vt) ? ne = !Gs(I, vt) : ne = I !== vt, ne ? I != null ? U(M) : f.add(M) : I !== void 0 && f.has(M) ? U(M) : v.protectedKeys[M] = !0;
      }
      v.prevProp = y, v.prevResolvedValues = N, v.isActive && (d = { ...d, ...N }), s && t.blockInitialAnimation && (b = !1), b && (!D || S) && h.push(...A.map((M) => ({
        animation: M,
        options: { type: T }
      })));
    }
    if (f.size) {
      const x = {};
      f.forEach((T) => {
        const v = t.getBaseTarget(T), y = t.getValue(T);
        y && (y.liveStyle = !0), x[T] = v ?? null;
      }), h.push({ animation: x });
    }
    let p = !!h.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (p = !1), s = !1, p ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((f) => {
      var d;
      return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u);
    }), n[l].isActive = u;
    const h = r(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n
  };
}
function Ia(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Gs(e, t) : !1;
}
function it(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Na() {
  return {
    animate: it(!0),
    whileInView: it(),
    whileHover: it(),
    whileTap: it(),
    whileDrag: it(),
    whileFocus: it(),
    exit: it()
  };
}
class Ua extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Oa(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), Zt(e) && (this.unmount = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let Ka = 0;
class Wa extends st {
  constructor() {
    super(...arguments), this.id = Ka++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Ga = {
  animation: {
    Feature: Ua
  },
  exit: {
    Feature: Wa
  }
}, jn = (t, e) => Math.abs(t - e);
function Ha(t, e) {
  const n = jn(t.x, e.x), s = jn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Pi {
  constructor(e, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = he(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = Ha(h.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !d)
        return;
      const { point: m } = h, { timestamp: p } = B;
      this.history.push({ ...m, timestamp: p });
      const { onStart: x, onMove: T } = this.handlers;
      f || (x && x(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), T && T(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, f) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = ue(f, this.transformPagePoint), V.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, f) => {
      this.end();
      const { onEnd: d, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = he(h.type === "pointercancel" ? this.lastMoveEventInfo : ue(f, this.transformPagePoint), this.history);
      this.startEvent && d && d(h, x), m && m(h, x);
    }, !Is(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const r = Jt(e), a = ue(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = B;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, he(a, this.history)), this.removeListeners = X($(this.contextWindow, "pointermove", this.handlePointerMove), $(this.contextWindow, "pointerup", this.handlePointerUp), $(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), et(this.updatePoint);
  }
}
function ue(t, e) {
  return e ? { point: e(t.point) } : t;
}
function On(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function he({ point: t }, e) {
  return {
    point: t,
    delta: On(t, wi(e)),
    offset: On(t, _a(e)),
    velocity: za(e, 0.1)
  };
}
function _a(t) {
  return t[0];
}
function wi(t) {
  return t[t.length - 1];
}
function za(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = wi(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > Y(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = q(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function W(t) {
  return t.max - t.min;
}
function De(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function In(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = R(e.min, e.max, t.origin), t.scale = W(n) / W(e), (De(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = R(n.min, n.max, t.origin) - t.originPoint, (De(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function St(t, e, n, s) {
  In(t.x, e.x, n.x, s ? s.originX : void 0), In(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Nn(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + W(e);
}
function $a(t, e, n) {
  Nn(t.x, e.x, n.x), Nn(t.y, e.y, n.y);
}
function Un(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + W(e);
}
function Ct(t, e, n) {
  Un(t.x, e.x, n.x), Un(t.y, e.y, n.y);
}
function Xa(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? R(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? R(n, t, s.max) : Math.min(t, n)), t;
}
function Kn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Ya(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: Kn(t.x, n, i),
    y: Kn(t.y, e, s)
  };
}
function Wn(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function qa(t, e) {
  return {
    x: Wn(t.x, e.x),
    y: Wn(t.y, e.y)
  };
}
function Za(t, e) {
  let n = 0.5;
  const s = W(t), i = W(e);
  return i > s ? n = Rt(e.min, e.max - s, t.min) : s > i && (n = Rt(t.min, t.max - i, e.min)), tt(0, 1, n);
}
function Qa(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Re = 0.35;
function Ja(t = Re) {
  return t === !1 ? t = 0 : t === !0 && (t = Re), {
    x: Gn(t, "left", "right"),
    y: Gn(t, "top", "bottom")
  };
}
function Gn(t, e, n) {
  return {
    min: Hn(t, e),
    max: Hn(t, n)
  };
}
function Hn(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const _n = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), pt = () => ({
  x: _n(),
  y: _n()
}), zn = () => ({ min: 0, max: 0 }), E = () => ({
  x: zn(),
  y: zn()
});
function H(t) {
  return [t("x"), t("y")];
}
function bi({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function tl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function el(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function fe(t) {
  return t === void 0 || t === 1;
}
function Me({ scale: t, scaleX: e, scaleY: n }) {
  return !fe(t) || !fe(e) || !fe(n);
}
function rt(t) {
  return Me(t) || Si(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Si(t) {
  return $n(t.x) || $n(t.y);
}
function $n(t) {
  return t && t !== "0%";
}
function Xt(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Xn(t, e, n, s, i) {
  return i !== void 0 && (t = Xt(t, i, s)), Xt(t, n, s) + e;
}
function Ee(t, e = 0, n = 1, s, i) {
  t.min = Xn(t.min, e, n, s, i), t.max = Xn(t.max, e, n, s, i);
}
function Ci(t, { x: e, y: n }) {
  Ee(t.x, e.translate, e.scale, e.originPoint), Ee(t.y, n.translate, n.scale, n.originPoint);
}
function nl(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const l = o.instance;
    l && l.style && l.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && mt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ci(t, r)), s && rt(o.latestValues) && mt(t, o.latestValues));
  }
  e.x = Yn(e.x), e.y = Yn(e.y);
}
function Yn(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function Q(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function qn(t, e, [n, s, i]) {
  const o = e[i] !== void 0 ? e[i] : 0.5, r = R(t.min, t.max, o);
  Ee(t, e[n], e[s], r, e.scale);
}
const sl = ["x", "scaleX", "originX"], il = ["y", "scaleY", "originY"];
function mt(t, e) {
  qn(t.x, e, sl), qn(t.y, e, il);
}
function Vi(t, e) {
  return bi(el(t.getBoundingClientRect(), e));
}
function rl(t, e, n) {
  const s = Vi(t, n), { scroll: i } = e;
  return i && (Q(s.x, i.offset.x), Q(s.y, i.offset.y)), s;
}
const Ai = ({ current: t }) => t ? t.ownerDocument.defaultView : null, ol = /* @__PURE__ */ new WeakMap();
class al {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Jt(c, "page").point);
    }, o = (c, h) => {
      const { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
      if (f && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Us(f), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((x) => {
        let T = this.getAxisMotionValue(x).get() || 0;
        if (_.test(T)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const y = v.layout.layoutBox[x];
            y && (T = W(y) * (parseFloat(T) / 100));
          }
        }
        this.originPoint[x] = T;
      }), m && V.postRender(() => m(c, h));
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: f, dragDirectionLock: d, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!f && !this.openGlobalLock)
        return;
      const { offset: x } = h;
      if (d && this.currentDirection === null) {
        this.currentDirection = ll(x), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, x), this.updateAxis("y", h.point, x), this.visualElement.render(), p && p(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => H((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Pi(e, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Ai(this.visualElement)
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && V.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !It(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Xa(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && ft(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Ya(i.layoutBox, n) : this.constraints = !1, this.elastic = Ja(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && H((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Qa(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ft(e))
      return !1;
    const s = e.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = rl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = qa(i.layout.layoutBox, o);
    if (n) {
      const a = n(tl(r));
      this.hasMutatedConstraints = !!a, a && (r = bi(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = H((c) => {
      if (!It(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, d = i ? 40 : 1e7, m = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(on(e, s, 0, n, this.visualElement));
  }
  stopAnimation() {
    H((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    H((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    H((n) => {
      const { drag: s } = this.getProps();
      if (!It(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - R(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!ft(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    H((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Za({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), H((r) => {
      if (!It(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(R(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    ol.set(this.visualElement, this);
    const e = this.visualElement.current, n = $(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      ft(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
    const r = z(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (H((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = Re, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function It(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function ll(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class cl extends st {
  constructor(e) {
    super(e), this.removeGroupControls = k, this.removeListeners = k, this.controls = new al(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || k;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Zn = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class ul extends st {
  constructor() {
    super(...arguments), this.removePointerDownListener = k;
  }
  onPointerDown(e) {
    this.session = new Pi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ai(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Zn(e),
      onStart: Zn(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && V.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = $(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function hl() {
  const t = g.useContext(qt);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t, i = g.useId();
  return g.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const Wt = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Qn(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const xt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (w.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Qn(t, e.target.x), s = Qn(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, fl = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = nt.parse(t);
    if (i.length > 5)
      return s;
    const o = nt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const u = R(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
  }
};
class dl extends g.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    ur(pl), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Wt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || V.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Oe.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Di(t) {
  const [e, n] = hl(), s = g.useContext(Ue);
  return K.jsx(dl, { ...t, layoutGroup: s, switchLayoutGroup: g.useContext(Ss), isPresent: e, safeToRemove: n });
}
const pl = {
  borderRadius: {
    ...xt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: xt,
  borderTopRightRadius: xt,
  borderBottomLeftRadius: xt,
  borderBottomRightRadius: xt,
  boxShadow: fl
}, Ri = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ml = Ri.length, Jn = (t) => typeof t == "string" ? parseFloat(t) : t, ts = (t) => typeof t == "number" || w.test(t);
function gl(t, e, n, s, i, o) {
  i ? (t.opacity = R(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    yl(s)
  ), t.opacityExit = R(e.opacity !== void 0 ? e.opacity : 1, 0, vl(s))) : o && (t.opacity = R(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < ml; r++) {
    const a = `border${Ri[r]}Radius`;
    let l = es(e, a), u = es(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || ts(l) === ts(u) ? (t[a] = Math.max(R(Jn(l), Jn(u), s), 0), (_.test(u) || _.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, s));
}
function es(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const yl = Mi(0, 0.5, di), vl = Mi(0.5, 0.95, k);
function Mi(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(Rt(t, e, s));
}
function ns(t, e) {
  t.min = e.min, t.max = e.max;
}
function G(t, e) {
  ns(t.x, e.x), ns(t.y, e.y);
}
function ss(t, e, n, s, i) {
  return t -= e, t = Xt(t, 1 / n, s), i !== void 0 && (t = Xt(t, 1 / i, s)), t;
}
function xl(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (_.test(e) && (e = parseFloat(e), e = R(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = R(o.min, o.max, s);
  t === o && (a -= e), t.min = ss(t.min, e, n, a, i), t.max = ss(t.max, e, n, a, i);
}
function is(t, e, [n, s, i], o, r) {
  xl(t, e[n], e[s], e[i], e.scale, o, r);
}
const Tl = ["x", "scaleX", "originX"], Pl = ["y", "scaleY", "originY"];
function rs(t, e, n, s) {
  is(t.x, e, Tl, n ? n.x : void 0, s ? s.x : void 0), is(t.y, e, Pl, n ? n.y : void 0, s ? s.y : void 0);
}
function os(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ei(t) {
  return os(t.x) && os(t.y);
}
function wl(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Li(t, e) {
  return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
}
function as(t) {
  return W(t.x) / W(t.y);
}
class bl {
  constructor() {
    this.members = [];
  }
  add(e) {
    an(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (ln(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ls(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: m } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), m && (s += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const Sl = (t, e) => t.depth - e.depth;
class Cl {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    an(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    ln(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Sl), this.isDirty = !1, this.children.forEach(e);
  }
}
function Vl(t, e) {
  const n = J.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (et(s), t(o - e));
  };
  return V.read(s, !0), () => et(s);
}
function Al(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function Dl(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Rl(t, e, n) {
  const s = O(t) ? t : Mt(t);
  return s.start(on("", s, e, n)), s.animation;
}
const de = ["", "X", "Y", "Z"], Ml = { visibility: "hidden" }, cs = 1e3;
let El = 0;
const ot = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function pe(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Fi({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = El++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, ot.totalNodes = ot.resolvedTargetDeltas = ot.recalculatedProjection = 0, this.nodes.forEach(Bl), this.nodes.forEach(Nl), this.nodes.forEach(Ul), this.nodes.forEach(kl), Al(ot);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Cl());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new cn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Dl(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const f = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Vl(f, 250), Wt.hasAnimatedSinceResize && (Wt.hasAnimatedSinceResize = !1, this.nodes.forEach(hs));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || _l, { onLayoutAnimationStart: x, onLayoutAnimationComplete: T } = c.getProps(), v = !this.targetLayout || !Li(this.targetLayout, m) || d, y = !f && d;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, y);
          const P = {
            ...qe(p, "layout"),
            onPlay: x,
            onComplete: T
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P);
        } else
          f || hs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, et(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes && this.nodes.forEach(Kl), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(us);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ol), this.isUpdating = !1, this.nodes.forEach(Il), this.nodes.forEach(Ll), this.nodes.forEach(Fl), this.clearAllSnapshots();
      const a = J.now();
      B.delta = tt(0, 1e3 / 60, a - B.timestamp), B.timestamp = a, B.isProcessing = !0, se.update.process(B), se.preRender.process(B), se.render.process(B), B.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Oe.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jl), this.sharedNodes.forEach(Wl);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = E(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: r,
        isRoot: s(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Ei(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || rt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), zl(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return E();
      const a = r.measureViewportBox(), { scroll: l } = this.root;
      return l && (Q(a.x, l.offset.x), Q(a.y, l.offset.y)), a;
    }
    removeElementScroll(r) {
      const a = E();
      G(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        if (u !== this.root && c && h.layoutScroll) {
          if (c.isRoot) {
            G(a, r);
            const { scroll: f } = this.root;
            f && (Q(a.x, -f.offset.x), Q(a.y, -f.offset.y));
          }
          Q(a.x, c.offset.x), Q(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = E();
      G(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && mt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), rt(c.latestValues) && mt(l, c.latestValues);
      }
      return rt(this.latestValues) && mt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = E();
      G(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !rt(u.latestValues))
          continue;
        Me(u.latestValues) && u.updateSnapshot();
        const c = E(), h = u.measurePageBox();
        G(c, h), rs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return rt(this.latestValues) && rs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (this.resolvedRelativeTargetAt = B.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Ct(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), G(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), $a(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : G(this.target, this.layout.layoutBox), Ci(this.target, this.targetDelta)) : G(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const d = this.getClosestProjectingParent();
            d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Ct(this.relativeTargetOrigin, this.target, d.target), G(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          ot.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Me(this.parent.latestValues) || Si(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === B.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      G(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      nl(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = E());
      const { target: m } = a;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = pt(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = pt(), this.projectionDeltaWithTransform = pt());
      const p = this.projectionTransform;
      St(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = ls(this.projectionDelta, this.treeScale), (this.projectionTransform !== p || this.treeScale.x !== f || this.treeScale.y !== d) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), ot.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = pt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = E(), d = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = d !== m, x = this.getStack(), T = !x || x.members.length <= 1, v = !!(p && !T && this.options.crossfade === !0 && !this.path.some(Hl));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (P) => {
        const C = P / 1e3;
        fs(h.x, r.x, C), fs(h.y, r.y, C), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ct(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Gl(this.relativeTarget, this.relativeTargetOrigin, f, C), y && wl(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = E()), G(y, this.relativeTarget)), p && (this.animationValues = c, gl(c, u, this.latestValues, C, v, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (et(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        Wt.hasAnimatedSinceResize = !0, this.currentAnimation = Rl(0, cs, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && Bi(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || E();
          const h = W(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = W(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        G(a, l), mt(a, c), St(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new bl()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && pe("z", r, u, this.animationValues);
      for (let c = 0; c < de.length; c++)
        pe(`rotate${de[c]}`, r, u, this.animationValues), pe(`skew${de[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Ml;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ut(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Ut(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !rt(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = ls(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: d, y: m } = this.projectionDelta;
      u.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in Gt) {
        if (f[p] === void 0)
          continue;
        const { correct: x, applyTo: T } = Gt[p], v = u.transform === "none" ? f[p] : x(f[p], h);
        if (T) {
          const y = T.length;
          for (let P = 0; P < y; P++)
            u[T[P]] = v;
        } else
          u[p] = v;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? Ut(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(us), this.root.sharedNodes.clear();
    }
  };
}
function Ll(t) {
  t.updateLayout();
}
function Fl(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? H((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = W(f);
      f.min = s[h].min, f.max = f.min + d;
    }) : Bi(o, n.layoutBox, s) && H((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = W(s[h]);
      f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d);
    });
    const a = pt();
    St(a, s, n.layoutBox);
    const l = pt();
    r ? St(l, t.applyTransform(i, !0), n.measuredBox) : St(l, s, n.layoutBox);
    const u = !Ei(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = E();
          Ct(m, n.layoutBox, f.layoutBox);
          const p = E();
          Ct(p, s, d.layoutBox), Li(m, p) || (c = !0), h.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Bl(t) {
  ot.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function kl(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function jl(t) {
  t.clearSnapshot();
}
function us(t) {
  t.clearMeasurements();
}
function Ol(t) {
  t.isLayoutDirty = !1;
}
function Il(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function hs(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Nl(t) {
  t.resolveTargetDelta();
}
function Ul(t) {
  t.calcProjection();
}
function Kl(t) {
  t.resetSkewAndRotation();
}
function Wl(t) {
  t.removeLeadSnapshot();
}
function fs(t, e, n) {
  t.translate = R(e.translate, 0, n), t.scale = R(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function ds(t, e, n, s) {
  t.min = R(e.min, n.min, s), t.max = R(e.max, n.max, s);
}
function Gl(t, e, n, s) {
  ds(t.x, e.x, n.x, s), ds(t.y, e.y, n.y, s);
}
function Hl(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const _l = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ps = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ms = ps("applewebkit/") && !ps("chrome/") ? Math.round : k;
function gs(t) {
  t.min = ms(t.min), t.max = ms(t.max);
}
function zl(t) {
  gs(t.x), gs(t.y);
}
function Bi(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !De(as(e), as(n), 0.2);
}
const $l = Fi({
  attachResizeListener: (t, e) => z(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), me = {
  current: void 0
}, ki = Fi({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!me.current) {
      const t = new $l({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), me.current = t;
    }
    return me.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Xl = {
  pan: {
    Feature: ul
  },
  drag: {
    Feature: cl,
    ProjectionNode: ki,
    MeasureLayout: Di
  }
}, Le = { current: null }, ji = { current: !1 };
function Yl() {
  if (ji.current = !0, !!Be)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Le.current = t.matches;
      t.addListener(e), e();
    } else
      Le.current = !1;
}
function ql(t, e, n) {
  const { willChange: s } = e;
  for (const i in e) {
    const o = e[i], r = n[i];
    if (O(o))
      t.addValue(i, o), $t(s) && s.add(i);
    else if (O(r))
      t.addValue(i, Mt(o, { owner: t })), $t(s) && s.remove(i);
    else if (r !== o)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, Mt(a !== void 0 ? a : o, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const ys = /* @__PURE__ */ new WeakMap(), Zl = [...Ys, j, nt], Ql = (t) => Zl.find(Xs(t)), Oi = Object.keys(At), Jl = Oi.length, vs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], tc = Ne.length;
function Ii(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Ii(t.parent);
}
class ec {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.resolveKeyframes = (f, d, m, p) => new this.KeyframeResolver(f, d, m, p, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ze, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => V.render(this.render, !1, !0);
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Qt(n), this.isVariantNode = bs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const d = h[f];
      l[f] !== void 0 && O(d) && (d.set(l[f], !1), $t(c) && c.add(f));
    }
  }
  mount(e) {
    this.current = e, ys.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), ji.current || Yl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Le.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var e;
    ys.delete(this.current), this.projection && this.projection.unmount(), et(this.notifyUpdate), et(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features)
      (e = this.features[n]) === null || e === void 0 || e.unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const s = ut.has(e), i = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && V.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, s, i, o) {
    let r, a;
    for (let l = 0; l < Jl; l++) {
      const u = Oi[l], { isEnabled: c, Feature: h, ProjectionNode: f, MeasureLayout: d } = At[u];
      f && (r = f), c(n) && (!this.features[u] && h && (this.features[u] = new h(this)), d && (a = d));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && r) {
      const { layoutId: l, layout: u, drag: c, dragConstraints: h, layoutScroll: f, layoutRoot: d } = n;
      this.projection = new r(this.latestValues, n["data-framer-portal-id"] ? void 0 : Ii(this.parent)), this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || h && ft(h),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: d
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < vs.length; s++) {
      const i = vs[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = ql(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(e = !1) {
    if (e)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const n = {};
    for (let s = 0; s < tc; s++) {
      const i = Ne[s], o = this.props[i];
      (Vt(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = Mt(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var s;
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (zs(i) || Hs(i)) ? i = parseFloat(i) : !Ql(i) && nt.test(n) && (i = si(e, n)), this.setBaseTarget(e, O(i) ? i.get() : i)), O(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const r = Ye(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[e]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !O(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new cn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Ni extends ec {
  constructor() {
    super(...arguments), this.KeyframeResolver = ii;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
}
function nc(t) {
  return window.getComputedStyle(t);
}
class sc extends Ni {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const s = Je(n);
      return s && s.default || 0;
    } else {
      const s = nc(e), i = (As(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Vi(e, n);
  }
  build(e, n, s, i) {
    He(e, n, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Xe(e, n, s);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    O(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(e, n, s, i) {
    Ls(e, n, s, i);
  }
}
class ic extends Ni {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const s = Je(n);
      return s && s.default || 0;
    }
    return n = Fs.has(n) ? n : je(n), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return E();
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return ks(e, n, s);
  }
  build(e, n, s, i) {
    ze(e, n, s, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    Bs(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = $e(e.tagName), super.mount(e);
  }
}
const rc = (t, e) => Ke(t) ? new ic(e, { enableHardwareAcceleration: !1 }) : new sc(e, {
  allowProjection: t !== g.Fragment,
  enableHardwareAcceleration: !0
}), oc = {
  layout: {
    ProjectionNode: ki,
    MeasureLayout: Di
  }
}, ac = {
  ...Ga,
  ...Qr,
  ...Xl,
  ...oc
}, lc = /* @__PURE__ */ lr((t, e) => Nr(t, e, ac, rc));
function Ui() {
  const t = g.useRef(!1);
  return ke(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function cc() {
  const t = Ui(), [e, n] = g.useState(0), s = g.useCallback(() => {
    t.current && n(e + 1);
  }, [e]);
  return [g.useCallback(() => V.postRender(s), [s]), e];
}
class uc extends g.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function hc({ children: t, isPresent: e }) {
  const n = g.useId(), s = g.useRef(null), i = g.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: o } = g.useContext(Fe);
  return g.useInsertionEffect(() => {
    const { width: r, height: a, top: l, left: u } = i.current;
    if (e || !s.current || !r || !a)
      return;
    s.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [e]), K.jsx(uc, { isPresent: e, childRef: s, sizeRef: i, children: g.cloneElement(t, { ref: s }) });
}
const ge = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r }) => {
  const a = js(fc), l = g.useId(), u = g.useMemo(
    () => ({
      id: l,
      initial: e,
      isPresent: n,
      custom: i,
      onExitComplete: (c) => {
        a.set(c, !0);
        for (const h of a.values())
          if (!h)
            return;
        s && s();
      },
      register: (c) => (a.set(c, !1), () => a.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random()] : [n]
  );
  return g.useMemo(() => {
    a.forEach((c, h) => a.set(h, !1));
  }, [n]), g.useEffect(() => {
    !n && !a.size && s && s();
  }, [n]), r === "popLayout" && (t = K.jsx(hc, { isPresent: n, children: t })), K.jsx(qt.Provider, { value: u, children: t });
};
function fc() {
  return /* @__PURE__ */ new Map();
}
function dc(t) {
  return g.useEffect(() => () => t(), []);
}
const at = (t) => t.key || "";
function pc(t, e) {
  t.forEach((n) => {
    const s = at(n);
    e.set(s, n);
  });
}
function mc(t) {
  const e = [];
  return g.Children.forEach(t, (n) => {
    g.isValidElement(n) && e.push(n);
  }), e;
}
const gc = ({ children: t, custom: e, initial: n = !0, onExitComplete: s, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: r = "sync" }) => {
  const a = g.useContext(Ue).forceRender || cc()[0], l = Ui(), u = mc(t);
  let c = u;
  const h = g.useRef(/* @__PURE__ */ new Map()).current, f = g.useRef(c), d = g.useRef(/* @__PURE__ */ new Map()).current, m = g.useRef(!0);
  if (ke(() => {
    m.current = !1, pc(u, d), f.current = c;
  }), dc(() => {
    m.current = !0, d.clear(), h.clear();
  }), m.current)
    return K.jsx(K.Fragment, { children: c.map((v) => K.jsx(ge, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: r, children: v }, at(v))) });
  c = [...c];
  const p = f.current.map(at), x = u.map(at), T = p.length;
  for (let v = 0; v < T; v++) {
    const y = p[v];
    x.indexOf(y) === -1 && !h.has(y) && h.set(y, void 0);
  }
  return r === "wait" && h.size && (c = []), h.forEach((v, y) => {
    if (x.indexOf(y) !== -1)
      return;
    const P = d.get(y);
    if (!P)
      return;
    const C = p.indexOf(y);
    let D = v;
    if (!D) {
      const F = () => {
        h.delete(y);
        const b = Array.from(d.keys()).filter((S) => !x.includes(S));
        if (b.forEach((S) => d.delete(S)), f.current = u.filter((S) => {
          const A = at(S);
          return (
            // filter out the node exiting
            A === y || // filter out the leftover children
            b.includes(A)
          );
        }), !h.size) {
          if (l.current === !1)
            return;
          a(), s && s();
        }
      };
      D = K.jsx(ge, { isPresent: !1, onExitComplete: F, custom: e, presenceAffectsLayout: o, mode: r, children: P }, at(P)), h.set(y, D);
    }
    c.splice(C, 0, D);
  }), c = c.map((v) => {
    const y = v.key;
    return h.has(y) ? v : K.jsx(ge, { isPresent: !0, presenceAffectsLayout: o, mode: r, children: v }, at(v));
  }), K.jsx(K.Fragment, { children: h.size ? c : c.map((v) => g.cloneElement(v)) });
};
var Ki = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", n = "up-right-and-down-left-from-center", s = 512, i = 512, o = ["expand-alt"], r = "f424", a = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  t.definition = {
    prefix: e,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      a
    ]
  }, t.faUpRightAndDownLeftFromCenter = t.definition, t.prefix = e, t.iconName = n, t.width = s, t.height = i, t.ligatures = o, t.unicode = r, t.svgPathData = a, t.aliases = o;
})(Ki);
var Wi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", n = "down-left-and-up-right-to-center", s = 512, i = 512, o = ["compress-alt"], r = "f422", a = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  t.definition = {
    prefix: e,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      a
    ]
  }, t.faDownLeftAndUpRightToCenter = t.definition, t.prefix = e, t.iconName = n, t.width = s, t.height = i, t.ligatures = o, t.unicode = r, t.svgPathData = a, t.aliases = o;
})(Wi);
var Gi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", n = "window-minimize", s = 512, i = 512, o = [128469], r = "f2d1", a = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  t.definition = {
    prefix: e,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      a
    ]
  }, t.faWindowMinimize = t.definition, t.prefix = e, t.iconName = n, t.width = s, t.height = i, t.ligatures = o, t.unicode = r, t.svgPathData = a, t.aliases = o;
})(Gi);
const yc = g.createContext(null), ye = {
  didCatch: !1,
  error: null
};
class vc extends g.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = ye;
  }
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0,
      error: e
    };
  }
  resetErrorBoundary() {
    const {
      error: e
    } = this.state;
    if (e !== null) {
      for (var n, s, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
        o[r] = arguments[r];
      (n = (s = this.props).onReset) === null || n === void 0 || n.call(s, {
        args: o,
        reason: "imperative-api"
      }), this.setState(ye);
    }
  }
  componentDidCatch(e, n) {
    var s, i;
    (s = (i = this.props).onError) === null || s === void 0 || s.call(i, e, n);
  }
  componentDidUpdate(e, n) {
    const {
      didCatch: s
    } = this.state, {
      resetKeys: i
    } = this.props;
    if (s && n.error !== null && xc(e.resetKeys, i)) {
      var o, r;
      (o = (r = this.props).onReset) === null || o === void 0 || o.call(r, {
        next: i,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(ye);
    }
  }
  render() {
    const {
      children: e,
      fallbackRender: n,
      FallbackComponent: s,
      fallback: i
    } = this.props, {
      didCatch: o,
      error: r
    } = this.state;
    let a = e;
    if (o) {
      const l = {
        error: r,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        a = n(l);
      else if (s)
        a = g.createElement(s, l);
      else if (i === null || g.isValidElement(i))
        a = i;
      else
        throw r;
    }
    return g.createElement(yc.Provider, {
      value: {
        didCatch: o,
        error: r,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a);
  }
}
function xc() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return t.length !== e.length || t.some((n, s) => !Object.is(n, e[s]));
}
const Nt = ({
  onClick: t,
  ...e
}) => /* @__PURE__ */ L("div", { role: "button", onClick: t, onMouseDown: (n) => n.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ L(xs, { ...e }) }), Tc = ({
  bounds: t,
  height: e = 500,
  width: n = 600,
  maximizable: s = !1,
  children: i,
  title: o,
  closable: r = !1,
  onClose: a,
  focused: l = !0,
  onFocus: u,
  folded: c = !1,
  foldable: h = !1,
  position: f,
  resizable: d = !0,
  onFold: m,
  onMaximize: p,
  maximized: x,
  onMinimize: T,
  updatePosition: v,
  setWidth: y,
  setHeight: P,
  autoHeight: C = !1
}) => {
  const D = g.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: F,
    height: b
  } = $i(), S = g.useMemo(() => t && t.clientWidth > 0 && t.clientHeight > 0 ? {
    topOffset: t.offsetTop || 0,
    leftOffset: t.offsetLeft || 0,
    width: t.clientWidth,
    height: t.clientHeight
  } : null, [t, F, b]), A = g.useRef(null), N = g.useRef(null), [ht, kt] = g.useState(0);
  return g.useLayoutEffect(() => {
    if (N.current) {
      const U = N.current.children[0];
      if (U) {
        kt(U.clientHeight);
        const M = new ResizeObserver((I) => {
          for (const vt of I)
            kt(vt.contentRect.height);
        });
        return M.observe(U), () => {
          M.disconnect();
        };
      }
    }
  }, [N.current]), g.useEffect(() => {
    if (C && N.current && ht > 0 && (t || b && b > 0) && A.current) {
      const U = Math.min((t == null ? void 0 : t.clientHeight) || b, ht + 52);
      P == null || P(U), A.current.updateSize({
        width: n,
        height: U
      });
    }
  }, [N.current, t, C, ht]), g.useEffect(() => {
    A.current && !A.current.state.resizing && (x ? A.current.updateSize(S ? {
      width: S.width,
      height: S.height
    } : {
      width: F || 0,
      height: b || 0
    }) : A.current.updateSize({
      width: n,
      height: e
    }));
  }, [x, F, b, S, n, e, c]), g.useEffect(() => {
    A.current && (x ? A.current.updatePosition({
      x: (S == null ? void 0 : S.leftOffset) || 0,
      y: (S == null ? void 0 : S.topOffset) || 0
    }) : f && A.current.updatePosition({
      x: f.x,
      y: f.y
    }));
  }, [x, A.current, S, f, c]), g.useEffect(() => {
    t && !S || b && F && b + F > 0 && !f && !x && (v == null || v({
      x: S ? S.leftOffset + S.width / 2 - n / 2 : (F ?? 0) / 2 - n / 2,
      y: S ? S.topOffset + S.height / 2 - e / 2 : (b ?? 0) / 2 - n / 2
    }));
  }, [f, v, S, x, b, F]), t && !S || !b || !b ? null : /* @__PURE__ */ L(
    _i,
    {
      ref: A,
      enableResizing: !x && d,
      disableDragging: x,
      dragHandleClassName: D,
      className: "window",
      bounds: t ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: c ? {
        display: "none"
      } : {},
      onResizeStop: (U, M, I) => {
        y == null || y(I.offsetWidth), P == null || P(I.offsetHeight);
      },
      onDragStop: (U, M) => {
        v == null || v({
          x: M.lastX,
          y: M.lastY
        });
      },
      default: {
        height: e,
        width: n,
        ...f || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ Pt("div", { role: "dialog", onMouseDown: () => {
        !l && u && u();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, x ? {
        borderBottomWidth: "1px"
      } : [{
        borderWidth: "2px",
        "--tw-shadow": "0 0 25px 0px rgba(0, 0, 0, 0.3)",
        "--tw-shadow-colored": "0 0 25px 0px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, l ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ Pt("div", { className: D, onDoubleClick: () => s && (x ? T == null ? void 0 : T() : p == null ? void 0 : p()), css: [{
          zIndex: "10",
          display: "flex",
          userSelect: "none",
          justifyContent: "space-between",
          gap: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          fontSize: "1rem",
          lineHeight: "1.5rem",
          color: "rgb(255 255 255 / 0.9)"
        }, !x && {
          cursor: "move"
        }, l ? {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
        } : {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 88 173 / var(--tw-bg-opacity))"
        }], children: [
          /* @__PURE__ */ L("div", { css: {
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: o }),
          /* @__PURE__ */ Pt("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            h && /* @__PURE__ */ L(Nt, { icon: Gi.faWindowMinimize, onClick: m, transform: "shrink-4" }),
            s && (x ? /* @__PURE__ */ L(Nt, { icon: Wi.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: T }) : /* @__PURE__ */ L(Nt, { icon: Ki.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: p })),
            r && /* @__PURE__ */ L(Nt, { icon: Hi.faXmark, onClick: a })
          ] })
        ] }),
        /* @__PURE__ */ L("div", { ref: N, css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ L(vc, { fallbackRender: ({
          error: U
        }) => /* @__PURE__ */ L("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: U }), children: i }) })
      ] })
    }
  );
}, Pc = ({
  title: t,
  children: e,
  onClose: n
}) => /* @__PURE__ */ Pt(lc.div, { css: {
  position: "fixed",
  left: "0px",
  top: "0px",
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, initial: {
  y: "100%"
}, animate: {
  y: 0
}, exit: {
  y: "100%",
  transition: {
    duration: 0.3
  }
}, transition: {
  duration: 0.3
}, children: [
  /* @__PURE__ */ Pt("div", { css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    padding: "1rem"
  }, children: [
    /* @__PURE__ */ L("div", { children: t }),
    /* @__PURE__ */ L(Yi, { onClick: n, children: /* @__PURE__ */ L(xs, { icon: zi.faTimes }) })
  ] }),
  /* @__PURE__ */ L("div", { css: {
    flex: "1 1 0%"
  }, children: e })
] }), Mc = ({
  children: t,
  open: e = !1,
  onClose: n,
  title: s,
  width: i,
  height: o,
  autoHeight: r = !1,
  maximized: a,
  maximizable: l,
  closable: u = !0,
  resizable: c = !0
}) => {
  const h = Xi(), [f, d] = g.useState(void 0), [m, p] = g.useState(i), [x, T] = g.useState(o), [v, y] = g.useState(e);
  g.useEffect(() => {
    y(e);
  }, [e]);
  const P = g.useCallback(() => {
    y(!1), n && n();
  }, [n]);
  return h ? un.createPortal(/* @__PURE__ */ L(gc, { mode: "wait", children: v && /* @__PURE__ */ L(Pc, { title: s, onClose: P, children: t }) }), document.body) : v ? un.createPortal(/* @__PURE__ */ L("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    zIndex: "10",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ L(Tc, { position: f, updatePosition: (C) => {
    d(C);
  }, autoHeight: r, closable: u, resizable: c, title: s, width: m, setWidth: p, height: f ? x : 0, setHeight: T, maximized: a, maximizable: l, onClose: P, children: t }) }), document.body) : null;
};
export {
  gc as A,
  Mc as M,
  lc as m
};
