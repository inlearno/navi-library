import { j as l, b as P } from "./library-edebc13d.js";
import { r as f, c as _ } from "./react-6f5a8403.js";
import { k as z, l as I, R as Y, u as q, a as G, F as J } from "./Phone-e554deed.js";
import { F as Q } from "./icons-ad9f8a73.js";
import { a as Z } from "./DictionaryCell-0ed6c265.js";
import { B as $ } from "./mui-d84d21b5.js";
var W = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "up-right-and-down-left-from-center", a = 512, n = 512, i = ["expand-alt"], c = "f424", o = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      a,
      n,
      i,
      c,
      o
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = r, e.iconName = t, e.width = a, e.height = n, e.ligatures = i, e.unicode = c, e.svgPathData = o, e.aliases = i;
})(W);
var U = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "down-left-and-up-right-to-center", a = 512, n = 512, i = ["compress-alt"], c = "f422", o = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      a,
      n,
      i,
      c,
      o
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = r, e.iconName = t, e.width = a, e.height = n, e.ligatures = i, e.unicode = c, e.svgPathData = o, e.aliases = i;
})(U);
var K = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "window-minimize", a = 512, n = 512, i = [128469], c = "f2d1", o = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      a,
      n,
      i,
      c,
      o
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = r, e.iconName = t, e.width = a, e.height = n, e.ligatures = i, e.unicode = c, e.svgPathData = o, e.aliases = i;
})(K);
const x = f.createContext(null), j = {
  didCatch: !1,
  error: null
};
class V extends f.Component {
  constructor(r) {
    super(r), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = j;
  }
  static getDerivedStateFromError(r) {
    return {
      didCatch: !0,
      error: r
    };
  }
  resetErrorBoundary() {
    const {
      error: r
    } = this.state;
    if (r !== null) {
      for (var t, a, n = arguments.length, i = new Array(n), c = 0; c < n; c++)
        i[c] = arguments[c];
      (t = (a = this.props).onReset) === null || t === void 0 || t.call(a, {
        args: i,
        reason: "imperative-api"
      }), this.setState(j);
    }
  }
  componentDidCatch(r, t) {
    var a, n;
    (a = (n = this.props).onError) === null || a === void 0 || a.call(n, r, t);
  }
  componentDidUpdate(r, t) {
    const {
      didCatch: a
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (a && t.error !== null && ee(r.resetKeys, n)) {
      var i, c;
      (i = (c = this.props).onReset) === null || i === void 0 || i.call(c, {
        next: n,
        prev: r.resetKeys,
        reason: "keys"
      }), this.setState(j);
    }
  }
  render() {
    const {
      children: r,
      fallbackRender: t,
      FallbackComponent: a,
      fallback: n
    } = this.props, {
      didCatch: i,
      error: c
    } = this.state;
    let o = r;
    if (i) {
      const h = {
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof t == "function")
        o = t(h);
      else if (a)
        o = f.createElement(a, h);
      else if (n === null || f.isValidElement(n))
        o = n;
      else
        throw c;
    }
    return f.createElement(x.Provider, {
      value: {
        didCatch: i,
        error: c,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, o);
  }
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== r.length || e.some((t, a) => !Object.is(t, r[a]));
}
const H = ({
  onClick: e,
  ...r
}) => /* @__PURE__ */ l("div", { role: "button", onClick: e, onMouseDown: (t) => t.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ l(Q, { ...r }) }), re = ({
  bounds: e,
  height: r = 500,
  width: t = 600,
  maximizable: a = !1,
  children: n,
  title: i,
  closable: c = !1,
  onClose: o,
  focused: h = !0,
  onFocus: v,
  folded: L = !1,
  foldable: N = !1,
  position: w,
  resizable: M = !0,
  onFold: B,
  onMaximize: C,
  maximized: d,
  onMinimize: b,
  updatePosition: m,
  setWidth: R,
  setHeight: D,
  autoHeight: F = !1
}) => {
  const T = f.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: p,
    height: u
  } = z(), s = f.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, p, u]), g = f.useRef(null), E = f.useRef(null), [O, A] = f.useState(0);
  return f.useLayoutEffect(() => {
    if (E.current) {
      const y = E.current.children[0];
      if (y) {
        A(y.clientHeight);
        const k = new ResizeObserver((S) => {
          for (const X of S)
            A(X.contentRect.height);
        });
        return k.observe(y), () => {
          k.disconnect();
        };
      }
    }
  }, [E.current]), f.useEffect(() => {
    if (F && E.current && O > 0 && (e || u && u > 0) && g.current) {
      const y = Math.min((e == null ? void 0 : e.clientHeight) || u, O + 52);
      D == null || D(y), g.current.updateSize({
        width: t,
        height: y
      });
    }
  }, [E.current, e, F, O]), f.useEffect(() => {
    g.current && !g.current.state.resizing && (d ? g.current.updateSize(s ? {
      width: s.width,
      height: s.height
    } : {
      width: p || 0,
      height: u || 0
    }) : g.current.updateSize({
      width: t,
      height: r
    }));
  }, [d, p, u, s, t, r, L]), f.useEffect(() => {
    g.current && (d ? g.current.updatePosition({
      x: (s == null ? void 0 : s.leftOffset) || 0,
      y: (s == null ? void 0 : s.topOffset) || 0
    }) : w && g.current.updatePosition({
      x: w.x,
      y: w.y
    }));
  }, [d, g.current, s, w, L]), f.useEffect(() => {
    e && !s || u && p && u + p > 0 && !w && !d && (m == null || m({
      x: s ? s.leftOffset + s.width / 2 - t / 2 : (p ?? 0) / 2 - t / 2,
      y: s ? s.topOffset + s.height / 2 - r / 2 : (u ?? 0) / 2 - t / 2
    }));
  }, [w, m, s, d, u, p]), e && !s || !u || !u ? null : /* @__PURE__ */ l(
    Y,
    {
      ref: g,
      enableResizing: !d && M,
      disableDragging: d,
      dragHandleClassName: T,
      className: "window",
      bounds: e ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: L ? {
        display: "none"
      } : {},
      onResizeStop: (y, k, S) => {
        R == null || R(S.offsetWidth), D == null || D(S.offsetHeight);
      },
      onDragStop: (y, k) => {
        m == null || m({
          x: k.lastX,
          y: k.lastY
        });
      },
      default: {
        height: r,
        width: t,
        ...w || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ P("div", { role: "dialog", onMouseDown: () => {
        !h && v && v();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, d ? {
        borderBottomWidth: "1px"
      } : [{
        borderWidth: "2px",
        "--tw-shadow": "0 0 25px 0px rgba(0, 0, 0, 0.3)",
        "--tw-shadow-colored": "0 0 25px 0px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, h ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ P("div", { className: T, onDoubleClick: () => a && (d ? b == null ? void 0 : b() : C == null ? void 0 : C()), css: [{
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
        }, !d && {
          cursor: "move"
        }, h ? {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
        } : {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 88 173 / var(--tw-bg-opacity))"
        }], children: [
          /* @__PURE__ */ l("div", { css: {
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: i }),
          /* @__PURE__ */ P("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            N && /* @__PURE__ */ l(H, { icon: K.faWindowMinimize, onClick: B, transform: "shrink-4" }),
            a && (d ? /* @__PURE__ */ l(H, { icon: U.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: b }) : /* @__PURE__ */ l(H, { icon: W.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: C })),
            c && /* @__PURE__ */ l(H, { icon: I.faXmark, onClick: o })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { ref: E, css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ l(V, { fallbackRender: ({
          error: y
        }) => /* @__PURE__ */ l("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: y }), children: n }) })
      ] })
    }
  );
}, fe = ({
  children: e,
  open: r = !1,
  onClose: t,
  title: a,
  width: n,
  height: i,
  autoHeight: c = !1,
  maximized: o,
  maximizable: h,
  closable: v = !0,
  resizable: L = !0
}) => {
  const [N, w] = f.useState(void 0), [M, B] = f.useState(n), [C, d] = f.useState(i), [b, m] = f.useState(r);
  return f.useEffect(() => {
    m(r);
  }, [r]), b ? _.createPortal(/* @__PURE__ */ l("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ l(re, { position: N, updatePosition: (R) => {
    w(R);
  }, autoHeight: c, closable: v, resizable: L, title: a, width: M, setWidth: B, height: N ? C : 0, setHeight: d, maximized: o, maximizable: h, onClose: () => {
    t ? t() : m(!1);
  }, children: e }) }), document.body) : null;
};
var te = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "trash", a = 448, n = 512, i = [], c = "f1f8", o = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      a,
      n,
      i,
      c,
      o
    ]
  }, e.faTrash = e.definition, e.prefix = r, e.iconName = t, e.width = a, e.height = n, e.ligatures = i, e.unicode = c, e.svgPathData = o, e.aliases = i;
})(te);
const le = ({
  fit: e = !1,
  onSave: r,
  onSubmit: t,
  onError: a,
  initialValues: n,
  url: i,
  children: c
}) => {
  const o = q({
    method: n != null && n.id ? "PUT" : "POST",
    url: `${i}${n != null && n.id ? `/${n.id}` : ""}`,
    onMutate: (v) => {
      t == null || t(v);
    },
    onSuccess: ({
      data: v
    }) => {
      r == null || r(v);
    },
    onError: (v) => {
      a == null || a(v);
    }
  }), h = G({
    defaultValues: n,
    mutation: o
  });
  return /* @__PURE__ */ l(Z, { fit: e, footer: /* @__PURE__ */ l("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ l($, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => h.submit(), children: n != null && n.id ? "Обновить" : "Создать" }) }), children: /* @__PURE__ */ l(J, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: h, children: c(h) }) });
};
export {
  le as C,
  fe as M,
  te as f
};
