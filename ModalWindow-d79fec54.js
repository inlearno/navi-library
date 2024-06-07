import { j as d, b as j } from "./library-d5a831b9.js";
import { r as l, c as X } from "./react-6f5a8403.js";
import { l as I, m as Y, R as _ } from "./Phone-15635d21.js";
import { F as q } from "./icons-ad9f8a73.js";
var U = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "up-right-and-down-left-from-center", n = 512, a = 512, i = ["expand-alt"], o = "f424", s = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      n,
      a,
      i,
      o,
      s
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = r, e.iconName = t, e.width = n, e.height = a, e.ligatures = i, e.unicode = o, e.svgPathData = s, e.aliases = i;
})(U);
var P = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "down-left-and-up-right-to-center", n = 512, a = 512, i = ["compress-alt"], o = "f422", s = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      n,
      a,
      i,
      o,
      s
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = r, e.iconName = t, e.width = n, e.height = a, e.ligatures = i, e.unicode = o, e.svgPathData = s, e.aliases = i;
})(P);
var V = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "window-minimize", n = 512, a = 512, i = [128469], o = "f2d1", s = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      n,
      a,
      i,
      o,
      s
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = r, e.iconName = t, e.width = n, e.height = a, e.ligatures = i, e.unicode = o, e.svgPathData = s, e.aliases = i;
})(V);
const G = l.createContext(null), M = {
  didCatch: !1,
  error: null
};
class J extends l.Component {
  constructor(r) {
    super(r), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = M;
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
      for (var t, n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      (t = (n = this.props).onReset) === null || t === void 0 || t.call(n, {
        args: i,
        reason: "imperative-api"
      }), this.setState(M);
    }
  }
  componentDidCatch(r, t) {
    var n, a;
    (n = (a = this.props).onError) === null || n === void 0 || n.call(a, r, t);
  }
  componentDidUpdate(r, t) {
    const {
      didCatch: n
    } = this.state, {
      resetKeys: a
    } = this.props;
    if (n && t.error !== null && Q(r.resetKeys, a)) {
      var i, o;
      (i = (o = this.props).onReset) === null || i === void 0 || i.call(o, {
        next: a,
        prev: r.resetKeys,
        reason: "keys"
      }), this.setState(M);
    }
  }
  render() {
    const {
      children: r,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: a
    } = this.props, {
      didCatch: i,
      error: o
    } = this.state;
    let s = r;
    if (i) {
      const y = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof t == "function")
        s = t(y);
      else if (n)
        s = l.createElement(n, y);
      else if (a === null || l.isValidElement(a))
        s = a;
      else
        throw o;
    }
    return l.createElement(G.Provider, {
      value: {
        didCatch: i,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, s);
  }
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== r.length || e.some((t, n) => !Object.is(t, r[n]));
}
const B = ({
  onClick: e,
  ...r
}) => /* @__PURE__ */ d("div", { role: "button", onClick: e, onMouseDown: (t) => t.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ d(q, { ...r }) }), Z = ({
  bounds: e,
  height: r = 500,
  width: t = 600,
  maximizable: n = !1,
  children: a,
  title: i,
  closable: o = !1,
  onClose: s,
  focused: y = !0,
  onFocus: k,
  folded: S = !1,
  foldable: L = !1,
  position: g,
  resizable: O = !0,
  onFold: A,
  onMaximize: p,
  maximized: f,
  onMinimize: b,
  updatePosition: v,
  setWidth: R,
  setHeight: C,
  autoHeight: H = !1
}) => {
  const F = l.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: m,
    height: h
  } = I(), c = l.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, m, h]), u = l.useRef(null), D = l.useRef(null), [W, T] = l.useState(0);
  return l.useLayoutEffect(() => {
    if (D.current) {
      const w = D.current.children[0];
      if (w) {
        T(w.clientHeight);
        const E = new ResizeObserver((N) => {
          for (const K of N)
            T(K.contentRect.height);
        });
        return E.observe(w), () => {
          E.disconnect();
        };
      }
    }
  }, [D.current]), l.useEffect(() => {
    if (H && D.current && W > 0 && (e || h && h > 0) && u.current) {
      const w = Math.min((e == null ? void 0 : e.clientHeight) || h, W + 52);
      C == null || C(w), u.current.updateSize({
        width: t,
        height: w
      });
    }
  }, [D.current, e, H, W]), l.useEffect(() => {
    u.current && !u.current.state.resizing && (f ? u.current.updateSize(c ? {
      width: c.width,
      height: c.height
    } : {
      width: m || 0,
      height: h || 0
    }) : u.current.updateSize({
      width: t,
      height: r
    }));
  }, [f, m, h, c, t, r, S]), l.useEffect(() => {
    u.current && (f ? u.current.updatePosition({
      x: (c == null ? void 0 : c.leftOffset) || 0,
      y: (c == null ? void 0 : c.topOffset) || 0
    }) : g && u.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [f, u.current, c, g, S]), l.useEffect(() => {
    e && !c || h && m && h + m > 0 && !g && !f && (v == null || v({
      x: c ? c.leftOffset + c.width / 2 - t / 2 : (m ?? 0) / 2 - t / 2,
      y: c ? c.topOffset + c.height / 2 - r / 2 : (h ?? 0) / 2 - t / 2
    }));
  }, [g, v, c, f, h, m]), e && !c || !h || !h ? null : /* @__PURE__ */ d(
    _,
    {
      ref: u,
      enableResizing: !f && O,
      disableDragging: f,
      dragHandleClassName: F,
      className: "window",
      bounds: e ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: S ? {
        display: "none"
      } : {},
      onResizeStop: (w, E, N) => {
        R == null || R(N.offsetWidth), C == null || C(N.offsetHeight);
      },
      onDragStop: (w, E) => {
        v == null || v({
          x: E.lastX,
          y: E.lastY
        });
      },
      default: {
        height: r,
        width: t,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ j("div", { role: "dialog", onMouseDown: () => {
        !y && k && k();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, f ? {
        borderBottomWidth: "1px"
      } : [{
        borderWidth: "2px",
        "--tw-shadow": "0 0 25px 0px rgba(0, 0, 0, 0.3)",
        "--tw-shadow-colored": "0 0 25px 0px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, y ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ j("div", { className: F, onDoubleClick: () => n && (f ? b == null ? void 0 : b() : p == null ? void 0 : p()), css: [{
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
        }, !f && {
          cursor: "move"
        }, y ? {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
        } : {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 88 173 / var(--tw-bg-opacity))"
        }], children: [
          /* @__PURE__ */ d("div", { css: {
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: i }),
          /* @__PURE__ */ j("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            L && /* @__PURE__ */ d(B, { icon: V.faWindowMinimize, onClick: A, transform: "shrink-4" }),
            n && (f ? /* @__PURE__ */ d(B, { icon: P.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: b }) : /* @__PURE__ */ d(B, { icon: U.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: p })),
            o && /* @__PURE__ */ d(B, { icon: Y.faXmark, onClick: s })
          ] })
        ] }),
        /* @__PURE__ */ d("div", { ref: D, css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ d(J, { fallbackRender: ({
          error: w
        }) => /* @__PURE__ */ d("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: w }), children: a }) })
      ] })
    }
  );
}, re = ({
  children: e,
  open: r = !1,
  onClose: t,
  title: n,
  width: a,
  height: i,
  autoHeight: o = !1,
  maximized: s,
  maximizable: y,
  closable: k = !0,
  resizable: S = !0
}) => {
  const [L, g] = l.useState(void 0), [O, A] = l.useState(a), [p, f] = l.useState(i), [b, v] = l.useState(r);
  return l.useEffect(() => {
    v(r);
  }, [r]), b ? X.createPortal(/* @__PURE__ */ d("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ d(Z, { position: L, updatePosition: (R) => {
    g(R);
  }, autoHeight: o, closable: k, resizable: S, title: n, width: O, setWidth: A, height: L ? p : 0, setHeight: f, maximized: s, maximizable: y, onClose: () => {
    t ? t() : v(!1);
  }, children: e }) }), document.body) : null;
};
export {
  re as M
};
