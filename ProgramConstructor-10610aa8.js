import { u as jt, j as t, a as B, F as Pt, f as $e, S as Mt } from "./library-b88a8cfa.js";
import { r as S, c as Ft, R as Ze } from "./react-54946355.js";
import { f as It, R as qt, D as Wt, u as Z, a as Nt, B as Ve, z as o, T as I, F as h, P as Lt, b as ee, c as Yt, Y as ke, d as j, e as we, g as $, N as V, L as Ht, h as Ue, i as U, j as Te, k as Vt } from "./RootSection-c76851fc.js";
import { F as re } from "./icons-6b7f2986.js";
import { l as $t, P as Ce, b as Zt } from "./useDictionary-79366cbc.js";
import { u as Ut, a as Xt, B as X } from "./mui-02912ce2.js";
import { f as Gt } from "./faPen-6d05924c.js";
import { N as Jt, f as Kt } from "./index-38b3fe08.js";
import { u as Oe } from "./useWindowController-8e79bd7b.js";
var N = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(N || {});
const Qt = ({
  stepsDefinition: e,
  values: r,
  stateKey: n
}) => {
  const [c, u] = S.useState(!1), [s, v] = S.useState({});
  S.useEffect(() => {
    r && n in r && r[n] && v(r[n]);
  }, [r]);
  const i = S.useMemo(() => e.map((D) => ({
    ...D,
    status: s[D.id] ?? N.WAIT
  })), [e, s]), [p, m] = S.useState(i[0]), y = S.useRef(null), w = S.useMemo(() => i.findIndex((D) => D.id === (p == null ? void 0 : p.id)) || 0, [p]), g = S.useCallback((D) => {
    v((z) => ({
      ...z,
      [p.id]: z[p.id] === N.ERROR && D === N.EDIT ? N.ERROR : D
    }));
  }, [p, v]), f = w === i.length - 1, _ = S.useCallback(async () => {
    if (!f)
      try {
        u(!0), g(N.LOADING), y.current && await y.current.save(), m(i[w + 1]);
      } catch {
        g(N.ERROR);
      } finally {
        u(!1);
      }
  }, [w, f]), E = S.useCallback(() => {
    w !== 0 && m(i[w - 1]);
  }, [w]);
  return {
    steps: i,
    stepFormRef: y,
    isSubmitting: c,
    setActiveStepStatus: g,
    getNextButtonProps: () => ({
      onClick: _,
      disabled: f || c
    }),
    activeStep: p,
    activeStepIndex: w,
    setActiveStep: m,
    getPrevButtonProps: () => ({
      onClick: E,
      disabled: w === 0
    })
  };
};
var Xe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "up-right-and-down-left-from-center", c = 512, u = 512, s = ["expand-alt"], v = "f424", i = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(Xe);
var Ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "down-left-and-up-right-to-center", c = 512, u = 512, s = ["compress-alt"], v = "f422", i = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(Ge);
var Je = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "window-minimize", c = 512, u = 512, s = [128469], v = "f2d1", i = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(Je);
const er = S.createContext(null), ze = {
  didCatch: !1,
  error: null
};
class tr extends S.Component {
  constructor(r) {
    super(r), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = ze;
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
      for (var n, c, u = arguments.length, s = new Array(u), v = 0; v < u; v++)
        s[v] = arguments[v];
      (n = (c = this.props).onReset) === null || n === void 0 || n.call(c, {
        args: s,
        reason: "imperative-api"
      }), this.setState(ze);
    }
  }
  componentDidCatch(r, n) {
    var c, u;
    (c = (u = this.props).onError) === null || c === void 0 || c.call(u, r, n);
  }
  componentDidUpdate(r, n) {
    const {
      didCatch: c
    } = this.state, {
      resetKeys: u
    } = this.props;
    if (c && n.error !== null && rr(r.resetKeys, u)) {
      var s, v;
      (s = (v = this.props).onReset) === null || s === void 0 || s.call(v, {
        next: u,
        prev: r.resetKeys,
        reason: "keys"
      }), this.setState(ze);
    }
  }
  render() {
    const {
      children: r,
      fallbackRender: n,
      FallbackComponent: c,
      fallback: u
    } = this.props, {
      didCatch: s,
      error: v
    } = this.state;
    let i = r;
    if (s) {
      const p = {
        error: v,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        i = n(p);
      else if (c)
        i = S.createElement(c, p);
      else if (u === null || S.isValidElement(u))
        i = u;
      else
        throw v;
    }
    return S.createElement(er.Provider, {
      value: {
        didCatch: s,
        error: v,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, i);
  }
}
function rr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== r.length || e.some((n, c) => !Object.is(n, r[c]));
}
const _e = ({
  onClick: e,
  ...r
}) => /* @__PURE__ */ t("div", { role: "button", onClick: e, onMouseDown: (n) => n.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ t(re, { ...r }) }), nr = ({
  bounds: e,
  height: r = 500,
  width: n = 600,
  maximizable: c = !1,
  children: u,
  title: s,
  closable: v = !1,
  onClose: i,
  focused: p = !0,
  onFocus: m,
  folded: y = !1,
  foldable: w = !1,
  position: g,
  onFold: f,
  onMaximize: _,
  maximized: E,
  onMinimize: D,
  updatePosition: z,
  setWidth: R,
  setHeight: x
}) => {
  const q = S.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: M,
    height: L
  } = jt(), O = S.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, M, L]), G = S.useRef(null);
  return S.useEffect(() => {
    G.current && !G.current.state.resizing && (E ? G.current.updateSize(O ? {
      width: O.width,
      height: O.height
    } : {
      width: M || 0,
      height: L || 0
    }) : G.current.updateSize({
      width: n,
      height: r
    }));
  }, [E, M, L, O, n, r, y]), S.useEffect(() => {
    G.current && (E ? G.current.updatePosition({
      x: (O == null ? void 0 : O.leftOffset) || 0,
      y: (O == null ? void 0 : O.topOffset) || 0
    }) : g && G.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [E, G.current, O, g, y]), S.useEffect(() => {
    e && !O || L && M && L + M > 0 && !g && !E && (z == null || z({
      x: O ? O.leftOffset + O.width / 2 - n / 2 : (M ?? 0) / 2 - n / 2,
      y: O ? O.topOffset + O.height / 2 - r / 2 : (L ?? 0) / 2 - n / 2
    }));
  }, [g, z, O, E, L, M]), e && !O || !L || !L ? null : /* @__PURE__ */ t(
    qt,
    {
      ref: G,
      enableResizing: !E,
      disableDragging: E,
      dragHandleClassName: q,
      className: "window",
      bounds: e ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: y ? {
        display: "none"
      } : {},
      onResizeStop: (oe, ce, J) => {
        R == null || R(J.offsetWidth), x == null || x(J.offsetHeight);
      },
      onDragStop: (oe, ce) => {
        z == null || z({
          x: ce.lastX,
          y: ce.lastY
        });
      },
      default: {
        height: r,
        width: n,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ B("div", { role: "dialog", onMouseDown: () => {
        !p && m && m();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, E ? {
        borderBottomWidth: "1px"
      } : [{
        borderWidth: "2px",
        "--tw-shadow": "0 0 25px 0px rgba(0, 0, 0, 0.3)",
        "--tw-shadow-colored": "0 0 25px 0px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, p ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ B("div", { className: q, onDoubleClick: () => c && (E ? D == null ? void 0 : D() : _ == null ? void 0 : _()), css: [{
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
        }, !E && {
          cursor: "move"
        }, p ? {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
        } : {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 88 173 / var(--tw-bg-opacity))"
        }], children: [
          /* @__PURE__ */ t("div", { css: {
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: s }),
          /* @__PURE__ */ B("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            w && /* @__PURE__ */ t(_e, { icon: Je.faWindowMinimize, onClick: f, transform: "shrink-4" }),
            c && (E ? /* @__PURE__ */ t(_e, { icon: Ge.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: D }) : /* @__PURE__ */ t(_e, { icon: Xe.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: _ })),
            v && /* @__PURE__ */ t(_e, { icon: It.faXmark, onClick: i })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ t(tr, { fallbackRender: ({
          error: oe
        }) => /* @__PURE__ */ t("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: oe }), children: u }) })
      ] })
    }
  );
}, ir = ({
  children: e,
  open: r = !1,
  onClose: n,
  title: c,
  width: u,
  height: s,
  maximized: v,
  maximizable: i
}) => {
  const [p, m] = S.useState(void 0), [y, w] = S.useState(r);
  return S.useEffect(() => {
    w(r);
  }, [r]), y ? Ft.createPortal(/* @__PURE__ */ t("div", { css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(nr, { position: p, updatePosition: (g) => {
    m(g);
  }, closable: !0, title: c, width: u, height: s, maximized: v, maximizable: i, onClose: () => {
    n ? n() : w(!1);
  }, children: e }) }), document.body) : null;
}, Re = (e, r, n) => S.forwardRef(({
  multiple: c = !1,
  onChange: u,
  value: s,
  idField: v = Wt,
  ...i
}, p) => {
  const [m, y] = S.useState(), [w, g] = S.useState(!1), [f, _] = S.useState(""), E = () => {
    _(""), g(!1);
  }, D = Ut(p, y), z = (R) => {
    u && u(c ? [...s ?? [], R[v]] : R[v]), E();
  };
  return /* @__PURE__ */ B(Pt, { children: [
    /* @__PURE__ */ t(e, { ...i, idField: v, value: s, multiple: c, onChange: u, ref: D, extraOptionsRenderer: ({
      search: R,
      searchIsLoading: x,
      closePopup: q
    }) => !x && /* @__PURE__ */ t(or, { search: R, onClick: () => {
      _((R || "").trim()), g(!0), q(), m == null || m.blur();
    } }) }),
    /* @__PURE__ */ t(ir, { open: w, onClose: () => g(!1), ...n, children: /* @__PURE__ */ t(r, { ...i, search: f, onCreate: z }) })
  ] });
}), or = ({
  search: e,
  onClick: r
}) => /* @__PURE__ */ B("li", { css: {
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(229 230 244 / var(--tw-bg-opacity))"
  }
}, onClick: r, children: [
  "Создать",
  e && ` «${e}»`,
  "?"
] }), Ke = Ze.createContext(null), ar = ({
  children: e,
  value: r
}) => {
  const [n, c] = Ze.useState({}), {
    activeStep: {
      id: u
    }
  } = r, s = S.useCallback(() => n[u] || {}, [u, n]), v = S.useCallback((i) => c((p) => ({
    ...p,
    [u]: {
      ...p[u],
      ...i
    }
  })), [u, n, c]);
  return /* @__PURE__ */ t(Ke.Provider, { value: {
    ...r,
    getStepState: s,
    setStepState: v
  }, children: e });
};
function sr() {
  const e = S.useContext(Ke);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const ie = ({
  ...e
}) => {
  const {
    stepFormRef: r,
    activeStep: n,
    stateKey: c,
    getStepState: u,
    setStepState: s,
    values: v,
    mutation: i,
    setActiveStepStatus: p
  } = sr(), m = u(), {
    errors: y,
    fields: w
  } = m, g = Z({
    mutation: i,
    errors: y,
    defaultValues: w ?? v,
    transformSendData: (f) => ({
      ...f,
      [c]: {
        ...v ? v[c] : {},
        [n.id]: N.DONE
      }
    }),
    ...e
  });
  return S.useEffect(() => {
    s({
      errors: g.formState.errors
    });
  }, [g.formState.errors]), S.useEffect(() => {
    $t.isEqual(g.getValues(), v) || (p(N.EDIT), s({
      fields: g.getValues()
    }));
  }, [n, JSON.stringify(g.formState.dirtyFields)]), S.useImperativeHandle(r, () => ({
    save: async () => {
      await g.submit(), s({
        fields: void 0
      });
    }
  })), g;
};
var Qe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "arrow-left", c = 448, u = 512, s = [8592], v = "f060", i = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faArrowLeft = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(Qe);
var et = { exports: {} };
(function(e, r) {
  (function(n, c) {
    e.exports = c(S);
  })(self, (n) => (() => {
    var c = { 58: (i, p, m) => {
      m.d(p, { Z: () => _ });
      var y = m(864), w = m.n(y), g = m(352), f = m.n(g)()(w());
      f.push([i.id, `
/* The default splitter within a react-split */
.react-split > .split-container > .splitter .default-splitter {
  box-sizing: border-box;
  height: 100%;
  outline: none;
  overflow: hidden;
  user-select: none;
  width: 100%;
  --default-splitter-line-color: silver;
  --default-splitter-line-hover-color: black;
  --default-splitter-line-margin: 2px;
  --default-splitter-line-size: 3px;
}

.react-split > .split-container.horizontal > .splitter .default-splitter {
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter .default-splitter {
  cursor: col-resize;
}

/* The thin line within a default splitter hit area */
.react-split > .split-container > .splitter .default-splitter > .line {
  background: var(--default-splitter-line-color);
}

.react-split > .split-container > .splitter .default-splitter:hover > .line {
  background: var(--default-splitter-line-hover-color);
}

.react-split > .split-container.horizontal > .splitter .default-splitter > .line {
  height: var(--default-splitter-line-size);
  width: 100%;
  margin-top: var(--default-splitter-line-margin);
  margin-left: 0;
}

.react-split > .split-container.vertical > .splitter .default-splitter > .line {
  height: 100%;
  width: var(--default-splitter-line-size);
  margin-top: 0;
  margin-left: var(--default-splitter-line-margin);
}`, "", { version: 3, sources: ["webpack://./src/defaultSplitter.css"], names: [], mappings: ";AACA,8CAA8C;AAC9C;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,qCAAqC;EACrC,0CAA0C;EAC1C,mCAAmC;EACnC,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,qDAAqD;AACrD;EACE,8CAA8C;AAChD;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,yCAAyC;EACzC,WAAW;EACX,+CAA+C;EAC/C,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,wCAAwC;EACxC,aAAa;EACb,gDAAgD;AAClD", sourcesContent: [`
/* The default splitter within a react-split */
.react-split > .split-container > .splitter .default-splitter {
  box-sizing: border-box;
  height: 100%;
  outline: none;
  overflow: hidden;
  user-select: none;
  width: 100%;
  --default-splitter-line-color: silver;
  --default-splitter-line-hover-color: black;
  --default-splitter-line-margin: 2px;
  --default-splitter-line-size: 3px;
}

.react-split > .split-container.horizontal > .splitter .default-splitter {
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter .default-splitter {
  cursor: col-resize;
}

/* The thin line within a default splitter hit area */
.react-split > .split-container > .splitter .default-splitter > .line {
  background: var(--default-splitter-line-color);
}

.react-split > .split-container > .splitter .default-splitter:hover > .line {
  background: var(--default-splitter-line-hover-color);
}

.react-split > .split-container.horizontal > .splitter .default-splitter > .line {
  height: var(--default-splitter-line-size);
  width: 100%;
  margin-top: var(--default-splitter-line-margin);
  margin-left: 0;
}

.react-split > .split-container.vertical > .splitter .default-splitter > .line {
  height: 100%;
  width: var(--default-splitter-line-size);
  margin-top: 0;
  margin-left: var(--default-splitter-line-margin);
}`], sourceRoot: "" }]);
      const _ = f;
    }, 672: (i, p, m) => {
      m.d(p, { Z: () => _ });
      var y = m(864), w = m.n(y), g = m(352), f = m.n(g)()(w());
      f.push([i.id, `/* The top-level element of the splitter*/
.react-split {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  --react-split-min-primary: 0;
  --react-split-min-secondary: 0;
  --react-split-primary: 50%;
  --react-split-splitter: 7px;
}

/* The container for the primary pane, splitter, and secondary pane.*/
.react-split > .split-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  display: grid;
}

/* When the container is splitting horizontally */
.react-split > .split-container.horizontal {
  grid-template-columns: 1fr;
  grid-template-rows: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-areas: "primary" "split" "secondary";
}

/* When the container is splitting vertical */
.react-split > .split-container.vertical {
  grid-template-columns: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "primary split secondary";
}

/* The primary pane. This is either the left or top depending on the split type */
.react-split > .split-container > .primary {
  grid-area: primary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .primary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .primary {
  height: 100%;
  width: auto;
}

/* The splitter between panes. */
.react-split > .split-container > .splitter {
  grid-area: split;
  background: transparent;
  user-select: none;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .splitter {
  height: auto;
  width: 100%;
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter {
  height: 100%;
  width: auto;
  cursor: col-resize;
}

/* The secondary pane. This is either the right or bottom depending on the split type */
.react-split > .split-container >.secondary {
  grid-area: secondary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .secondary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .secondary {
  height: 100%;
  width: auto;
}

/* The content within the primary pane, splitter, or secondary pane.*/
.react-split .full-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}
`, "", { version: 3, sources: ["webpack://./src/split.css"], names: [], mappings: "AAAA,yCAAyC;AACzC;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,4BAA4B;EAC5B,8BAA8B;EAC9B,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA,qEAAqE;AACrE;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,aAAa;AACf;;AAEA,iDAAiD;AACjD;EACE,0BAA0B;EAC1B,+JAA+J;EAC/J,kDAAkD;AACpD;;AAEA,6CAA6C;AAC7C;EACE,kKAAkK;EAClK,uBAAuB;EACvB,8CAA8C;AAChD;;AAEA,iFAAiF;AACjF;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,gCAAgC;AAChC;EACE,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA,uFAAuF;AACvF;EACE,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,qEAAqE;AACrE;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB", sourcesContent: [`/* The top-level element of the splitter*/
.react-split {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  --react-split-min-primary: 0;
  --react-split-min-secondary: 0;
  --react-split-primary: 50%;
  --react-split-splitter: 7px;
}

/* The container for the primary pane, splitter, and secondary pane.*/
.react-split > .split-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  display: grid;
}

/* When the container is splitting horizontally */
.react-split > .split-container.horizontal {
  grid-template-columns: 1fr;
  grid-template-rows: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-areas: "primary" "split" "secondary";
}

/* When the container is splitting vertical */
.react-split > .split-container.vertical {
  grid-template-columns: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "primary split secondary";
}

/* The primary pane. This is either the left or top depending on the split type */
.react-split > .split-container > .primary {
  grid-area: primary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .primary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .primary {
  height: 100%;
  width: auto;
}

/* The splitter between panes. */
.react-split > .split-container > .splitter {
  grid-area: split;
  background: transparent;
  user-select: none;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .splitter {
  height: auto;
  width: 100%;
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter {
  height: 100%;
  width: auto;
  cursor: col-resize;
}

/* The secondary pane. This is either the right or bottom depending on the split type */
.react-split > .split-container >.secondary {
  grid-area: secondary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .secondary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .secondary {
  height: 100%;
  width: auto;
}

/* The content within the primary pane, splitter, or secondary pane.*/
.react-split .full-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}
`], sourceRoot: "" }]);
      const _ = f;
    }, 352: (i) => {
      i.exports = function(p) {
        var m = [];
        return m.toString = function() {
          return this.map(function(y) {
            var w = "", g = y[5] !== void 0;
            return y[4] && (w += "@supports (".concat(y[4], ") {")), y[2] && (w += "@media ".concat(y[2], " {")), g && (w += "@layer".concat(y[5].length > 0 ? " ".concat(y[5]) : "", " {")), w += p(y), g && (w += "}"), y[2] && (w += "}"), y[4] && (w += "}"), w;
          }).join("");
        }, m.i = function(y, w, g, f, _) {
          typeof y == "string" && (y = [[null, y, void 0]]);
          var E = {};
          if (g)
            for (var D = 0; D < this.length; D++) {
              var z = this[D][0];
              z != null && (E[z] = !0);
            }
          for (var R = 0; R < y.length; R++) {
            var x = [].concat(y[R]);
            g && E[x[0]] || (_ !== void 0 && (x[5] === void 0 || (x[1] = "@layer".concat(x[5].length > 0 ? " ".concat(x[5]) : "", " {").concat(x[1], "}")), x[5] = _), w && (x[2] && (x[1] = "@media ".concat(x[2], " {").concat(x[1], "}")), x[2] = w), f && (x[4] ? (x[1] = "@supports (".concat(x[4], ") {").concat(x[1], "}"), x[4] = f) : x[4] = "".concat(f)), m.push(x));
          }
        }, m;
      };
    }, 864: (i) => {
      i.exports = function(p) {
        var m = p[1], y = p[3];
        if (!y)
          return m;
        if (typeof btoa == "function") {
          var w = btoa(unescape(encodeURIComponent(JSON.stringify(y)))), g = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(w), f = "/*# ".concat(g, " */");
          return [m].concat([f]).join(`
`);
        }
        return [m].join(`
`);
      };
    }, 372: (i, p, m) => {
      var y = m(567);
      function w() {
      }
      function g() {
      }
      g.resetWarningCache = w, i.exports = function() {
        function f(D, z, R, x, q, M) {
          if (M !== y) {
            var L = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw L.name = "Invariant Violation", L;
          }
        }
        function _() {
          return f;
        }
        f.isRequired = f;
        var E = { array: f, bigint: f, bool: f, func: f, number: f, object: f, string: f, symbol: f, any: f, arrayOf: _, element: f, elementType: f, instanceOf: _, node: f, objectOf: _, oneOf: _, oneOfType: _, shape: _, exact: _, checkPropTypes: g, resetWarningCache: w };
        return E.PropTypes = E, E;
      };
    }, 652: (i, p, m) => {
      i.exports = m(372)();
    }, 567: (i) => {
      i.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (i) => {
      var p = [];
      function m(g) {
        for (var f = -1, _ = 0; _ < p.length; _++)
          if (p[_].identifier === g) {
            f = _;
            break;
          }
        return f;
      }
      function y(g, f) {
        for (var _ = {}, E = [], D = 0; D < g.length; D++) {
          var z = g[D], R = f.base ? z[0] + f.base : z[0], x = _[R] || 0, q = "".concat(R, " ").concat(x);
          _[R] = x + 1;
          var M = m(q), L = { css: z[1], media: z[2], sourceMap: z[3], supports: z[4], layer: z[5] };
          if (M !== -1)
            p[M].references++, p[M].updater(L);
          else {
            var O = w(L, f);
            f.byIndex = D, p.splice(D, 0, { identifier: q, updater: O, references: 1 });
          }
          E.push(q);
        }
        return E;
      }
      function w(g, f) {
        var _ = f.domAPI(f);
        return _.update(g), function(E) {
          if (E) {
            if (E.css === g.css && E.media === g.media && E.sourceMap === g.sourceMap && E.supports === g.supports && E.layer === g.layer)
              return;
            _.update(g = E);
          } else
            _.remove();
        };
      }
      i.exports = function(g, f) {
        var _ = y(g = g || [], f = f || {});
        return function(E) {
          E = E || [];
          for (var D = 0; D < _.length; D++) {
            var z = m(_[D]);
            p[z].references--;
          }
          for (var R = y(E, f), x = 0; x < _.length; x++) {
            var q = m(_[x]);
            p[q].references === 0 && (p[q].updater(), p.splice(q, 1));
          }
          _ = R;
        };
      };
    }, 80: (i) => {
      var p = {};
      i.exports = function(m, y) {
        var w = function(g) {
          if (p[g] === void 0) {
            var f = document.querySelector(g);
            if (window.HTMLIFrameElement && f instanceof window.HTMLIFrameElement)
              try {
                f = f.contentDocument.head;
              } catch {
                f = null;
              }
            p[g] = f;
          }
          return p[g];
        }(m);
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        w.appendChild(y);
      };
    }, 182: (i) => {
      i.exports = function(p) {
        var m = document.createElement("style");
        return p.setAttributes(m, p.attributes), p.insert(m, p.options), m;
      };
    }, 850: (i, p, m) => {
      i.exports = function(y) {
        var w = m.nc;
        w && y.setAttribute("nonce", w);
      };
    }, 236: (i) => {
      i.exports = function(p) {
        var m = p.insertStyleElement(p);
        return { update: function(y) {
          (function(w, g, f) {
            var _ = "";
            f.supports && (_ += "@supports (".concat(f.supports, ") {")), f.media && (_ += "@media ".concat(f.media, " {"));
            var E = f.layer !== void 0;
            E && (_ += "@layer".concat(f.layer.length > 0 ? " ".concat(f.layer) : "", " {")), _ += f.css, E && (_ += "}"), f.media && (_ += "}"), f.supports && (_ += "}");
            var D = f.sourceMap;
            D && typeof btoa < "u" && (_ += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(D)))), " */")), g.styleTagTransform(_, w, g.options);
          })(m, p, y);
        }, remove: function() {
          (function(y) {
            if (y.parentNode === null)
              return !1;
            y.parentNode.removeChild(y);
          })(m);
        } };
      };
    }, 213: (i) => {
      i.exports = function(p, m) {
        if (m.styleSheet)
          m.styleSheet.cssText = p;
        else {
          for (; m.firstChild; )
            m.removeChild(m.firstChild);
          m.appendChild(document.createTextNode(p));
        }
      };
    }, 359: (i) => {
      i.exports = n;
    } }, u = {};
    function s(i) {
      var p = u[i];
      if (p !== void 0)
        return p.exports;
      var m = u[i] = { id: i, exports: {} };
      return c[i](m, m.exports, s), m.exports;
    }
    s.n = (i) => {
      var p = i && i.__esModule ? () => i.default : () => i;
      return s.d(p, { a: p }), p;
    }, s.d = (i, p) => {
      for (var m in p)
        s.o(p, m) && !s.o(i, m) && Object.defineProperty(i, m, { enumerable: !0, get: p[m] });
    }, s.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), s.o = (i, p) => Object.prototype.hasOwnProperty.call(i, p), s.r = (i) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
    }, s.nc = void 0;
    var v = {};
    return (() => {
      s.r(v), s.d(v, { DefaultSplitter: () => O, Split: () => gt });
      var i = s(359), p = s(701), m = s.n(p), y = s(236), w = s.n(y), g = s(80), f = s.n(g), _ = s(850), E = s.n(_), D = s(182), z = s.n(D), R = s(213), x = s.n(R), q = s(58), M = {};
      M.styleTagTransform = x(), M.setAttributes = E(), M.insert = f().bind(null, "head"), M.domAPI = w(), M.insertStyleElement = z(), m()(q.Z, M), q.Z && q.Z.locals && q.Z.locals;
      const L = (l) => (l % 2 == 0 ? 2 : 3) + "px", O = (l) => {
        const { dragging: a, pixelSize: d, color: b = "silver", hoverColor: A = "gray", dragColor: k = "black" } = l, P = { "--default-splitter-line-margin": (Y = d, `${Math.max(0, Math.floor(Y / 2) - 1)}px`), "--default-splitter-line-size": L(d), "--default-splitter-line-color": a ? k : b, "--default-splitter-line-hover-color": a ? k : A };
        var Y;
        return i.createElement("div", { className: "default-splitter", style: P }, i.createElement("div", { className: "line" }));
      };
      function G() {
        return G = Object.assign ? Object.assign.bind() : function(l) {
          for (var a = 1; a < arguments.length; a++) {
            var d = arguments[a];
            for (var b in d)
              Object.prototype.hasOwnProperty.call(d, b) && (l[b] = d[b]);
          }
          return l;
        }, G.apply(this, arguments);
      }
      function oe(l, a) {
        return oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, b) {
          return d.__proto__ = b, d;
        }, oe(l, a);
      }
      var ce = s(652), J = s.n(ce), je = function() {
        if (typeof Map < "u")
          return Map;
        function l(a, d) {
          var b = -1;
          return a.some(function(A, k) {
            return A[0] === d && (b = k, !0);
          }), b;
        }
        return function() {
          function a() {
            this.__entries__ = [];
          }
          return Object.defineProperty(a.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), a.prototype.get = function(d) {
            var b = l(this.__entries__, d), A = this.__entries__[b];
            return A && A[1];
          }, a.prototype.set = function(d, b) {
            var A = l(this.__entries__, d);
            ~A ? this.__entries__[A][1] = b : this.__entries__.push([d, b]);
          }, a.prototype.delete = function(d) {
            var b = this.__entries__, A = l(b, d);
            ~A && b.splice(A, 1);
          }, a.prototype.has = function(d) {
            return !!~l(this.__entries__, d);
          }, a.prototype.clear = function() {
            this.__entries__.splice(0);
          }, a.prototype.forEach = function(d, b) {
            b === void 0 && (b = null);
            for (var A = 0, k = this.__entries__; A < k.length; A++) {
              var P = k[A];
              d.call(b, P[1], P[0]);
            }
          }, a;
        }();
      }(), Ee = typeof window < "u" && typeof document < "u" && window.document === document, he = s.g !== void 0 && s.g.Math === Math ? s.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), it = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(he) : function(l) {
        return setTimeout(function() {
          return l(Date.now());
        }, 1e3 / 60);
      }, ot = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], at = typeof MutationObserver < "u", st = function() {
        function l() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(a, d) {
            var b = !1, A = !1, k = 0;
            function P() {
              b && (b = !1, a()), A && C();
            }
            function Y() {
              it(P);
            }
            function C() {
              var W = Date.now();
              if (b) {
                if (W - k < 2)
                  return;
                A = !0;
              } else
                b = !0, A = !1, setTimeout(Y, 20);
              k = W;
            }
            return C;
          }(this.refresh.bind(this));
        }
        return l.prototype.addObserver = function(a) {
          ~this.observers_.indexOf(a) || this.observers_.push(a), this.connected_ || this.connect_();
        }, l.prototype.removeObserver = function(a) {
          var d = this.observers_, b = d.indexOf(a);
          ~b && d.splice(b, 1), !d.length && this.connected_ && this.disconnect_();
        }, l.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, l.prototype.updateObservers_ = function() {
          var a = this.observers_.filter(function(d) {
            return d.gatherActive(), d.hasActive();
          });
          return a.forEach(function(d) {
            return d.broadcastActive();
          }), a.length > 0;
        }, l.prototype.connect_ = function() {
          Ee && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), at ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, l.prototype.disconnect_ = function() {
          Ee && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, l.prototype.onTransitionEnd_ = function(a) {
          var d = a.propertyName, b = d === void 0 ? "" : d;
          ot.some(function(A) {
            return !!~b.indexOf(A);
          }) && this.refresh();
        }, l.getInstance = function() {
          return this.instance_ || (this.instance_ = new l()), this.instance_;
        }, l.instance_ = null, l;
      }(), Pe = function(l, a) {
        for (var d = 0, b = Object.keys(a); d < b.length; d++) {
          var A = b[d];
          Object.defineProperty(l, A, { value: a[A], enumerable: !1, writable: !1, configurable: !0 });
        }
        return l;
      }, ae = function(l) {
        return l && l.ownerDocument && l.ownerDocument.defaultView || he;
      }, Me = fe(0, 0, 0, 0);
      function me(l) {
        return parseFloat(l) || 0;
      }
      function Fe(l) {
        for (var a = [], d = 1; d < arguments.length; d++)
          a[d - 1] = arguments[d];
        return a.reduce(function(b, A) {
          return b + me(l["border-" + A + "-width"]);
        }, 0);
      }
      var lt = typeof SVGGraphicsElement < "u" ? function(l) {
        return l instanceof ae(l).SVGGraphicsElement;
      } : function(l) {
        return l instanceof ae(l).SVGElement && typeof l.getBBox == "function";
      };
      function ct(l) {
        return Ee ? lt(l) ? function(a) {
          var d = a.getBBox();
          return fe(0, 0, d.width, d.height);
        }(l) : function(a) {
          var d = a.clientWidth, b = a.clientHeight;
          if (!d && !b)
            return Me;
          var A = ae(a).getComputedStyle(a), k = function(H) {
            for (var F = {}, ne = 0, te = ["top", "right", "bottom", "left"]; ne < te.length; ne++) {
              var be = te[ne], le = H["padding-" + be];
              F[be] = me(le);
            }
            return F;
          }(A), P = k.left + k.right, Y = k.top + k.bottom, C = me(A.width), W = me(A.height);
          if (A.boxSizing === "border-box" && (Math.round(C + P) !== d && (C -= Fe(A, "left", "right") + P), Math.round(W + Y) !== b && (W -= Fe(A, "top", "bottom") + Y)), !function(H) {
            return H === ae(H).document.documentElement;
          }(a)) {
            var Q = Math.round(C + P) - d, K = Math.round(W + Y) - b;
            Math.abs(Q) !== 1 && (C -= Q), Math.abs(K) !== 1 && (W -= K);
          }
          return fe(k.left, k.top, C, W);
        }(l) : Me;
      }
      function fe(l, a, d, b) {
        return { x: l, y: a, width: d, height: b };
      }
      var dt = function() {
        function l(a) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = fe(0, 0, 0, 0), this.target = a;
        }
        return l.prototype.isActive = function() {
          var a = ct(this.target);
          return this.contentRect_ = a, a.width !== this.broadcastWidth || a.height !== this.broadcastHeight;
        }, l.prototype.broadcastRect = function() {
          var a = this.contentRect_;
          return this.broadcastWidth = a.width, this.broadcastHeight = a.height, a;
        }, l;
      }(), ut = function(l, a) {
        var d, b, A, k, P, Y, C, W = (b = (d = a).x, A = d.y, k = d.width, P = d.height, Y = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, C = Object.create(Y.prototype), Pe(C, { x: b, y: A, width: k, height: P, top: A, right: b + k, bottom: P + A, left: b }), C);
        Pe(this, { target: l, contentRect: W });
      }, pt = function() {
        function l(a, d, b) {
          if (this.activeObservations_ = [], this.observations_ = new je(), typeof a != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = a, this.controller_ = d, this.callbackCtx_ = b;
        }
        return l.prototype.observe = function(a) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(a instanceof ae(a).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var d = this.observations_;
            d.has(a) || (d.set(a, new dt(a)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, l.prototype.unobserve = function(a) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(a instanceof ae(a).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var d = this.observations_;
            d.has(a) && (d.delete(a), d.size || this.controller_.removeObserver(this));
          }
        }, l.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, l.prototype.gatherActive = function() {
          var a = this;
          this.clearActive(), this.observations_.forEach(function(d) {
            d.isActive() && a.activeObservations_.push(d);
          });
        }, l.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var a = this.callbackCtx_, d = this.activeObservations_.map(function(b) {
              return new ut(b.target, b.broadcastRect());
            });
            this.callback_.call(a, d, a), this.clearActive();
          }
        }, l.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, l.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, l;
      }(), Ie = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new je(), qe = function l(a) {
        if (!(this instanceof l))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var d = st.getInstance(), b = new pt(a, d, this);
        Ie.set(this, b);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(l) {
        qe.prototype[l] = function() {
          var a;
          return (a = Ie.get(this))[l].apply(a, arguments);
        };
      });
      const ht = he.ResizeObserver !== void 0 ? he.ResizeObserver : qe;
      var mt = ["client", "offset", "scroll", "bounds", "margin"];
      function We(l) {
        var a = [];
        return mt.forEach(function(d) {
          l[d] && a.push(d);
        }), a;
      }
      function Ne(l, a) {
        var d = {};
        if (a.indexOf("client") > -1 && (d.client = { top: l.clientTop, left: l.clientLeft, width: l.clientWidth, height: l.clientHeight }), a.indexOf("offset") > -1 && (d.offset = { top: l.offsetTop, left: l.offsetLeft, width: l.offsetWidth, height: l.offsetHeight }), a.indexOf("scroll") > -1 && (d.scroll = { top: l.scrollTop, left: l.scrollLeft, width: l.scrollWidth, height: l.scrollHeight }), a.indexOf("bounds") > -1) {
          var b = l.getBoundingClientRect();
          d.bounds = { top: b.top, right: b.right, bottom: b.bottom, left: b.left, width: b.width, height: b.height };
        }
        if (a.indexOf("margin") > -1) {
          var A = getComputedStyle(l);
          d.margin = { top: A ? parseInt(A.marginTop) : 0, right: A ? parseInt(A.marginRight) : 0, bottom: A ? parseInt(A.marginBottom) : 0, left: A ? parseInt(A.marginLeft) : 0 };
        }
        return d;
      }
      function ft(l) {
        return l && l.ownerDocument && l.ownerDocument.defaultView || window;
      }
      var xe = function(l) {
        var a, d;
        return d = a = function(b) {
          var A, k;
          function P() {
            for (var C, W = arguments.length, Q = new Array(W), K = 0; K < W; K++)
              Q[K] = arguments[K];
            return (C = b.call.apply(b, [this].concat(Q)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, C._animationFrameID = null, C._resizeObserver = null, C._node = null, C._window = null, C.measure = function(H) {
              var F = Ne(C._node, We(C.props));
              H && (F.entry = H[0].contentRect), C._animationFrameID = C._window.requestAnimationFrame(function() {
                C._resizeObserver !== null && (C.setState({ contentRect: F }), typeof C.props.onResize == "function" && C.props.onResize(F));
              });
            }, C._handleRef = function(H) {
              C._resizeObserver !== null && C._node !== null && C._resizeObserver.unobserve(C._node), C._node = H, C._window = ft(C._node);
              var F = C.props.innerRef;
              F && (typeof F == "function" ? F(C._node) : F.current = C._node), C._resizeObserver !== null && C._node !== null && C._resizeObserver.observe(C._node);
            }, C;
          }
          k = b, (A = P).prototype = Object.create(k.prototype), A.prototype.constructor = A, oe(A, k);
          var Y = P.prototype;
          return Y.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new ht(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Ne(this._node, We(this.props))));
          }, Y.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, Y.render = function() {
            var C = this.props, W = (C.innerRef, C.onResize, function(Q, K) {
              if (Q == null)
                return {};
              var H, F, ne = {}, te = Object.keys(Q);
              for (F = 0; F < te.length; F++)
                H = te[F], K.indexOf(H) >= 0 || (ne[H] = Q[H]);
              return ne;
            }(C, ["innerRef", "onResize"]));
            return (0, i.createElement)(l, G({}, W, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, P;
        }(i.Component), a.propTypes = { client: J().bool, offset: J().bool, scroll: J().bool, bounds: J().bool, margin: J().bool, innerRef: J().oneOfType([J().object, J().func]), onResize: J().func }, d;
      }(function(l) {
        var a = l.measure, d = l.measureRef, b = l.contentRect;
        return (0, l.children)({ measure: a, measureRef: d, contentRect: b });
      });
      xe.displayName = "Measure", xe.propTypes.children = J().func;
      const Se = xe;
      var ge = s(672), se = {};
      se.styleTagTransform = x(), se.setAttributes = E(), se.insert = f().bind(null, "head"), se.domAPI = w(), se.insertStyleElement = z(), m()(ge.Z, se), ge.Z && ge.Z.locals && ge.Z.locals;
      const gt = (l) => {
        const { horizontal: a = !1, initialPrimarySize: d = "50%", minPrimarySize: b = "0px", minSecondarySize: A = "0px", splitterSize: k = "7px", renderSplitter: P, resetOnDoubleClick: Y = !1, defaultSplitterColors: C = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: W, onMeasuredSizesChanged: Q } = l, [K, H] = i.useState({ height: 0, width: 0 }), [F, ne] = i.useState({ height: 0, width: 0 }), [te, be] = i.useState({ height: 0, width: 0 }), le = i.useMemo(() => a ? K.height : K.width, [a, K]), ve = i.useMemo(() => a ? F.height : F.width, [a, F]), ye = i.useMemo(() => a ? te.height : te.width, [a, te]), [de, Le] = i.useState(void 0), [bt, vt] = i.useState(0), [yt, At] = i.useState(0), [De, Ye] = i.useState(!1);
        i.useEffect(() => {
          W && W(de !== void 0 ? `${de}%` : d);
        }, [de, d]), i.useEffect(() => {
          Q && Q({ primary: ve, splitter: ye, secondary: le - (ve + ye) });
        }, [a, le, ve, ye]);
        const _t = (T) => {
          T.bounds && ne({ height: T.bounds.height, width: T.bounds.width });
        }, wt = (T) => {
          T.bounds && be({ height: T.bounds.height, width: T.bounds.width });
        }, Ct = (T) => {
          T.currentTarget.setPointerCapture(T.pointerId), vt(a ? T.clientY : T.clientX), At(ve), Ye(!0);
        }, Et = (T) => {
          if (T.currentTarget.hasPointerCapture(T.pointerId)) {
            const ue = a ? T.clientY : T.clientX, Ot = yt + (ue - bt), Rt = Math.max(0, Math.min(Ot, le));
            Le(Rt / le * 100);
          }
        }, xt = (T) => {
          T.currentTarget.releasePointerCapture(T.pointerId), Ye(!1);
        }, St = () => {
          Y && Le(void 0);
        }, Ae = i.Children.toArray(l.children), Dt = Ae.length > 0 ? Ae[0] : i.createElement("div", null), Bt = Ae.length > 1 ? Ae[1] : i.createElement("div", null), Be = { primary: de !== void 0 ? `${de}%` : d, minPrimary: b ?? "0px", minSecondary: A ?? "0px" }, He = { pixelSize: ye, horizontal: a, dragging: De }, zt = P ?? (() => i.createElement(O, Object.assign({}, He, { color: De ? C.drag : C.color, hoverColor: De ? C.drag : C.hover }))), kt = a ? "split-container horizontal" : "split-container vertical", Tt = { "--react-split-min-primary": Be.minPrimary, "--react-split-min-secondary": Be.minSecondary, "--react-split-primary": Be.primary, "--react-split-splitter": k };
        return i.createElement(Se, { bounds: !0, onResize: (T) => {
          T.bounds && H({ height: T.bounds.height, width: T.bounds.width });
        } }, ({ measureRef: T }) => i.createElement("div", { className: "react-split", ref: T }, i.createElement("div", { className: kt, style: Tt }, i.createElement("div", { className: "primary" }, i.createElement(Se, { bounds: !0, onResize: _t }, ({ measureRef: ue }) => i.createElement("div", { className: "full-content", ref: ue }, Dt))), i.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Ct, onPointerUp: xt, onPointerMove: Et, onDoubleClick: St }, i.createElement(Se, { bounds: !0, onResize: wt }, ({ measureRef: ue }) => i.createElement("div", { className: "full-content", ref: ue }, zt(He)))), i.createElement("div", { className: "secondary" }, i.createElement("div", { className: "full-content" }, Bt)))));
      };
    })(), v;
  })());
})(et);
var lr = et.exports;
const cr = ({
  children: e,
  ...r
}) => /* @__PURE__ */ t(lr.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: n,
  dragging: c
}) => /* @__PURE__ */ t("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, n ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, c && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...r, children: e });
var tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "pencil", c = 512, u = 512, s = [9999, 61504, "pencil-alt"], v = "f303", i = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faPencil = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(tt);
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "circle", c = 512, u = 512, s = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], v = "f111", i = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faCircle = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(pe);
var rt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", n = "lock", c = 448, u = 512, s = [128274], v = "f023", i = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faLock = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(rt);
var nt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "far", n = "clock", c = 512, u = 512, s = [128339, "clock-four"], v = "f017", i = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: r,
    iconName: n,
    icon: [
      c,
      u,
      s,
      v,
      i
    ]
  }, e.faClock = e.definition, e.prefix = r, e.iconName = n, e.width = c, e.height = u, e.ligatures = s, e.unicode = v, e.svgPathData = i, e.aliases = s;
})(nt);
const dr = ({
  status: e
}) => Jt(e).with(N.DONE, () => /* @__PURE__ */ t(re, { icon: Kt.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(N.ACTIVE, () => /* @__PURE__ */ t(re, { mask: pe.faCircle, icon: Gt.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(N.WAIT, () => /* @__PURE__ */ t(re, { mask: pe.faCircle, icon: nt.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(N.LOADING, () => /* @__PURE__ */ t(re, { icon: $e.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(N.DISABLED, () => /* @__PURE__ */ t(re, { mask: pe.faCircle, transform: "shrink-8", icon: rt.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(N.ERROR, () => /* @__PURE__ */ t(re, { icon: Nt.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(N.EDIT, () => /* @__PURE__ */ t(re, { mask: pe.faCircle, transform: "shrink-8", icon: tt.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), ur = ({
  items: e,
  activeItem: r,
  className: n,
  onChange: c
}) => /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((u, s) => {
  const v = (r == null ? void 0 : r.id) === u.id;
  return /* @__PURE__ */ t("li", { onClick: () => u.status !== N.DISABLED ? c == null ? void 0 : c(u) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, v ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : u.status === N.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, v && Xt`
                    &::after {
                      content: "";
                      left: -0.4em;
                      top: 13%;
                      width: 0.2em;
                      height: 74%;
                      ${{
    position: "absolute",
    borderRadius: "0.5rem",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(141 148 205 / var(--tw-bg-opacity))"
  }};
                    }
                  `], children: /* @__PURE__ */ B("div", { css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "0.5rem",
    padding: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }, children: [
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ B("div", { children: [
      s + 1,
      ". ",
      u.title
    ] }) }),
    /* @__PURE__ */ t(dr, { status: u.status })
  ] }) }, u.id);
}) }) }), pr = ({
  steps: e,
  values: r,
  mutation: n,
  stateKey: c = "state"
}) => {
  const {
    isSubmitting: u,
    steps: s,
    stepFormRef: v,
    setActiveStepStatus: i,
    getNextButtonProps: p,
    getPrevButtonProps: m,
    setActiveStep: y,
    activeStepIndex: w,
    activeStep: g
  } = Qt({
    stepsDefinition: e,
    values: r,
    stateKey: c
  }), {
    Component: f
  } = g;
  return /* @__PURE__ */ t(ar, { value: {
    activeStep: g,
    mutation: n,
    stepFormRef: v,
    stateKey: c,
    values: r,
    setActiveStepStatus: i
  }, children: /* @__PURE__ */ t(Ce, { bbar: [/* @__PURE__ */ t(Ve, { icon: Qe.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ B(Ve, { ...p(), variant: "contained", color: "success", children: [
    u && /* @__PURE__ */ t(re, { icon: $e.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ B(cr, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ t(ur, { activeItem: g, onChange: y, items: s }) }),
    /* @__PURE__ */ B("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ B("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        w + 1,
        ". ",
        g == null ? void 0 : g.title
      ] }),
      /* @__PURE__ */ t("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ t(f, {}) })
    ] })
  ] }) }) });
}, hr = o.object({
  partner_id: o.string({
    required_error: "Выберите организацию",
    coerce: !0
  }),
  name: o.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: o.coerce.number({
    required_error: "Выберите тип программы",
    invalid_type_error: "Выберите тип программы"
  }).positive({
    message: "Выберите тип программы"
  }),
  program_level_id: o.string({
    required_error: "Выберите уровень программы",
    invalid_type_error: "Выберите уровень программы"
  }),
  section_id: o.string({
    required_error: "Выберите направленность",
    invalid_type_error: "Выберите направленность"
  }).optional(),
  year_created: o.string({
    required_error: "Выберите год создания"
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((e) => {
    const r = Number(e);
    return isNaN(r) ? !1 : r >= 1900 && r <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
  city_created: o.string({
    required_error: "Выберите город создания"
  })
}).required(), mr = () => {
  const e = ie({
    schema: hr
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(Lt, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ee, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (n) => n.filter(({
      id: c
    }) => c === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(Yt, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ee, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ t(ke, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, fr = o.object({
  protocol_number: o.string().optional(),
  protocol_date: o.string().optional(),
  decree_number: o.string().optional(),
  decree_date: o.string().optional(),
  authors: o.string().optional(),
  comment: o.string().optional()
}), gr = () => {
  const e = ie({
    schema: fr
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(we, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(we, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, br = o.object({
  min_age: o.coerce.number().optional(),
  max_age: o.coerce.number().optional(),
  competence_level_id: o.number().nullish(),
  program_volume: o.coerce.number().optional(),
  program_duration: o.coerce.number().optional(),
  edu_sessions_per_week: o.coerce.number().optional(),
  edu_sessions_per_day: o.coerce.number().optional(),
  edu_session_hour_limit: o.coerce.number().optional(),
  break_duration: o.coerce.number().optional(),
  education_form_id: o.string().nullish(),
  min_group_size: o.coerce.number().optional(),
  max_group_size: o.coerce.number().optional(),
  is_one_age_group: o.boolean().optional()
}), vr = () => {
  const e = ie({
    schema: br
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(Ht, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ B("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ t(h, { control: e.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ t(V, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ t("div", { children: "-" }),
      /* @__PURE__ */ t(h, { control: e.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ t(V, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "competence_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ee, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_volume", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_duration", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "edu_sessions_per_week", render: ({
      field: r
    }) => /* @__PURE__ */ t(
      V,
      {
        ...r,
        css: {
          width: "20rem",
          maxWidth: "100%"
        },
        allowFloat: !1,
        label: "Количество занятий в неделю"
      }
    ) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "edu_sessions_per_day", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "edu_session_hour_limit", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "break_duration", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "education_form_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ee, { dictionary: "educationForm", ...r, label: "Форма обучения" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "min_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "max_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ t(V, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "is_one_age_group", render: ({
      field: r
    }) => /* @__PURE__ */ t(Ue, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, yr = o.object({
  explanatory_note: o.string().nullish(),
  program_relevance: o.string().nullish(),
  pedagogical_expediency: o.string().nullish(),
  distinctive_features: o.string().nullish(),
  actual: o.string().nullish()
}), Ar = () => {
  const e = ie({
    schema: yr
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "explanatory_note", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_relevance", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "pedagogical_expediency", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "distinctive_features", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "actual", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...r }) })
  ] });
};
o.object({
  category_id: o.number({
    required_error: "Выберите категорию"
  }),
  title: o.string({
    required_error: "Заполните наименование"
  })
}).required({
  category_id: !0,
  title: !0
});
const _r = ({
  onCreate: e,
  search: r
}) => {
  const n = U("/api/rest/program-doc-results", {
    onSuccess: ({
      data: u
    }) => {
      e(u);
    }
  }), c = Z({
    schema: o.object({
      category_id: o.number({
        required_error: "Выберите категорию"
      }),
      title: o.string({
        required_error: "Заполните наименование"
      })
    }).required({
      category_id: !0,
      title: !0
    }),
    mutation: n
  });
  return /* @__PURE__ */ t(Ce, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => c.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: c, children: [
    /* @__PURE__ */ t(h, { name: "category_id", control: c.control, render: ({
      field: u
    }) => /* @__PURE__ */ t(ee, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...u }) }),
    /* @__PURE__ */ t(h, { name: "title", control: c.control, defaultValue: r, render: ({
      field: u
    }) => /* @__PURE__ */ t(I, { label: "Наименование", placeholder: "Введите наименование", ...u }) })
  ] }) });
}, wr = Re(Te({
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), _r, {
  title: "Новый планируемый результат"
}), Cr = o.object({
  program_results: o.array(o.string())
}), Er = () => {
  const e = ie({
    schema: Cr
  });
  return /* @__PURE__ */ t(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ t(h, { name: "program_results", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(wr, { ...r, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, xr = o.object({
  title: o.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), Sr = ({
  onCreate: e,
  search: r
}) => {
  const n = U("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: u
    }) => {
      e(u);
    }
  }), c = Z({
    mutation: n,
    schema: xr
  });
  return /* @__PURE__ */ t(Ce, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => c.submit(), children: "Создать" }) }), children: /* @__PURE__ */ t(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: c, children: /* @__PURE__ */ t(h, { name: "title", control: c.control, defaultValue: r, render: ({
    field: u
  }) => /* @__PURE__ */ t(I, { label: "Наименование", placeholder: "Введите наименование задачи", ...u }) }) }) });
}, Dr = Re(Te({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Sr, {
  title: "Новая задача"
}), Br = o.object({
  mission: o.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: o.string({
    required_error: "Заполните цель"
  }),
  program_objectives: o.array(o.string())
}).required({
  goal: !0
}), zr = () => {
  const e = ie({
    schema: Br
  });
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { name: "mission", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
    /* @__PURE__ */ t(h, { name: "goal", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t($, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
    /* @__PURE__ */ t(h, { name: "program_objectives", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(Dr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
  ] }) });
}, kr = o.object({
  theme: o.string({
    required_error: "Заполните тему"
  }),
  theory: o.string().optional(),
  theory_volume: o.number().optional(),
  practice: o.string().optional(),
  practice_volume: o.number().optional(),
  sort_index: o.number(),
  doc_id: o.string()
}), Tr = ({
  doc_id: e,
  onCreate: r,
  search: n
}) => {
  const c = U("/api/rest/program-doc-plans", {
    onSuccess: ({
      data: s
    }) => {
      r(s);
    }
  }), u = Z({
    schema: kr,
    mutation: c,
    defaultValues: {
      doc_id: e,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ t(Ce, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => u.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: u, children: [
    /* @__PURE__ */ t(h, { name: "theme", control: u.control, defaultValue: n, render: ({
      field: s
    }) => /* @__PURE__ */ t(I, { label: "Тема", placeholder: "Введите тему", ...s }) }),
    /* @__PURE__ */ t(h, { name: "theory", control: u.control, render: ({
      field: s
    }) => /* @__PURE__ */ t(I, { label: "Теория", placeholder: "Введите теорию", ...s }) }),
    /* @__PURE__ */ t(h, { name: "theory_volume", control: u.control, render: ({
      field: s
    }) => /* @__PURE__ */ t(V, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...s }) }),
    /* @__PURE__ */ t(h, { name: "practice", control: u.control, render: ({
      field: s
    }) => /* @__PURE__ */ t(I, { label: "Практика", placeholder: "Введите практику", ...s }) }),
    /* @__PURE__ */ t(h, { name: "practice_volume", control: u.control, render: ({
      field: s
    }) => /* @__PURE__ */ t(V, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...s }) })
  ] }) });
}, Or = Re(Te({
  url: "/api/rest/program-doc-plans",
  displayField: "theme"
}), Tr, {
  title: "Новая тема"
}), Rr = o.object({
  program_plans: o.array(o.string())
}), jr = () => {
  const {
    params: {
      id: e
    }
  } = Oe(), r = ie({
    schema: Rr
  });
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ t(j, { form: r, children: /* @__PURE__ */ t(h, { name: "program_plans", control: r.control, render: ({
    field: n
  }) => /* @__PURE__ */ t(Or, { ...n, doc_id: e, multiple: !0, label: "Темы" }) }) }) });
}, Pr = o.object({
  control_type_id: o.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: o.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), Mr = () => {
  const e = U("/api/rest/program-doc-forms"), r = Z({
    schema: Pr,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "control_type_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Fr = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Mr, {}) }), Ir = o.object({
  criterion_type_id: o.number({
    required_error: "Заполните тип критерия"
  }),
  description: o.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), qr = () => {
  const e = U("/api/rest/program-doc-criteria"), r = Z({
    schema: Ir,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "criterion_type_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Wr = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(qr, {}) }), Nr = o.object({
  method_id: o.number({
    required_error: "Заполните метод"
  }),
  description: o.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), Lr = () => {
  const e = U("/api/rest/program-doc-fixations"), r = Z({
    mutation: e,
    schema: Nr
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "method_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Yr = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Lr, {}) }), Hr = o.object({
  base_knowledge: o.string({
    required_error: "Заполните базовые знания"
  }),
  material: o.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), Vr = () => {
  const e = U("/api/rest/program-doc-materials"), r = Z({
    schema: Hr,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "base_knowledge", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Базовые знания", placeholder: "Введите базовые знания", ...n }) }),
    /* @__PURE__ */ t(h, { name: "material", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Материалы", placeholder: "Введите материалы", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, $r = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Vr, {}) }), Zr = o.object({
  management_type_id: o.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), Ur = () => {
  const e = U("/api/rest/program-doc-managements"), r = Z({
    schema: Zr,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "management_type_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Xr = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Ur, {}) }), Gr = o.object({
  indoctrination_type_id: o.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), Jr = () => {
  const e = U("/api/rest/program-doc-indoctrinations"), r = Z({
    schema: Gr,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "indoctrination_type_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocCriteriaTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Kr = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Jr, {}) }), Qr = o.object({
  development_type_id: o.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), en = () => {
  const e = U("/api/rest/program-doc-developments"), r = Z({
    schema: Qr,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "development_type_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocCriteriaTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, tn = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(en, {}) }), rn = () => {
  const e = ie({
    schema: o.object({
      staff_description: o.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ t(j, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ t(h, { control: e.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ t($, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, nn = o.object({
  inventory_type_id: o.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: o.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), on = () => {
  const e = U("/api/rest/program-doc-inventories"), r = Z({
    schema: nn,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "inventory_type_id", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ee, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, an = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(on, {}) }), sn = o.object({
  authors: o.string().optional(),
  title: o.string({
    required_error: "Заполните наименования"
  }),
  publisher: o.string().optional(),
  publish_year: o.number().optional(),
  isbn: o.string().optional()
}).required({
  title: !0
}), ln = () => {
  const e = U("/api/rest/program-doc-information"), r = Z({
    schema: sn,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "authors", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publisher", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publish_year", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ke, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) }),
    /* @__PURE__ */ t(h, { name: "isbn", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, cn = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(ln, {}) }), dn = o.object({
  authors: o.string().optional(),
  title: o.string({
    required_error: "Заполните наименования"
  }),
  publisher: o.string().optional(),
  publish_year: o.number().optional()
}).required({
  title: !0
}), un = () => {
  const e = U("/api/rest/program-doc-books"), r = Z({
    schema: dn,
    mutation: e
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(h, { name: "authors", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publisher", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(I, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publish_year", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ke, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, pn = () => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(un, {}) }), hn = o.object({
  number_year: o.number({
    required_error: "Заполните год"
  }),
  date_start: o.string({
    required_error: "Заполните дата начала обучения"
  }),
  date_end: o.string({
    required_error: "Заполните дата окончания обучения"
  }),
  edu_week_count: o.number({
    required_error: "Заполните количество учебных недель"
  }),
  is_vacations: o.boolean({
    required_error: "Заполните поле"
  }),
  // vacation: z.array(z.string()),
  edu_sessions_per_week: o.number().optional(),
  edu_sessions_per_day: o.number().optional(),
  doc_id: o.string()
}).required({
  number_year: !0,
  date_start: !0,
  date_end: !0,
  edu_week_count: !0,
  is_vacations: !0
}), mn = ({
  doc_id: e
}) => {
  const r = U("/api/rest/program-doc-schedules"), n = Z({
    schema: hn,
    mutation: r,
    defaultValues: {
      doc_id: e
    }
  });
  return /* @__PURE__ */ B(j, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ t(h, { name: "number_year", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(V, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...c }) }),
    /* @__PURE__ */ t(h, { name: "date_start", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(we, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...c }) }),
    /* @__PURE__ */ t(h, { name: "date_end", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(we, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...c }) }),
    /* @__PURE__ */ t(h, { name: "edu_week_count", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(V, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...c }) }),
    /* @__PURE__ */ t(h, { name: "is_vacations", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(Ue, { label: "Есть каникулы?", ...c }) }),
    /* @__PURE__ */ t(h, { name: "edu_sessions_per_week", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(V, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...c }) }),
    /* @__PURE__ */ t(h, { name: "edu_sessions_per_day", control: n.control, render: ({
      field: c
    }) => /* @__PURE__ */ t(V, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...c }) }),
    /* @__PURE__ */ t(X, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, fn = () => {
  const {
    params: {
      id: e
    }
  } = Oe();
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(mn, { doc_id: e }) });
}, gn = [{
  id: "general",
  title: "Основное",
  Component: mr
}, {
  id: "params",
  title: "Параметры",
  Component: vr
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Ar
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Er
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: zr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: jr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: Fr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: Wr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: Yr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: $r
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: Xr
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: Kr
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: tn
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: rn
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: an
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: cn
}, {
  title: "Список литературы",
  id: "books",
  Component: pn
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: fn
}, {
  id: "description",
  title: "Утверждение",
  Component: gr
}], bn = o.object({
  min_age: o.coerce.number().nullable(),
  max_age: o.coerce.number().nullable(),
  program_volume: o.coerce.number().nullable(),
  program_duration: o.coerce.number().nullable(),
  edu_sessions_per_week: o.coerce.number().nullable(),
  edu_sessions_per_day: o.coerce.number().nullable(),
  edu_session_hour_limit: o.coerce.number().nullable(),
  break_duration: o.coerce.number().nullable(),
  min_group_size: o.coerce.number().nullable(),
  max_group_size: o.coerce.number().nullable(),
  competence_level_id: o.coerce.number().nullable()
}).passthrough(), vn = o.object({
  data: o.array(bn).transform((e) => e[0])
}).transform((e) => e.data), Bn = () => {
  const {
    params: {
      id: e
    },
    setTitle: r
  } = Oe(), n = Vt(), c = Zt(`/api/rest/program-docs/${e}`, {
    schema: vn,
    refetchOnWindowFocus: !1
  }), u = U("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      n("/api/rest/program-docs");
    }
  });
  return S.useEffect(() => {
    r(`Конструктор программы #${e}`);
  }, [e, r]), c.isLoading ? /* @__PURE__ */ t(Mt, { spinning: !0 }) : c.isError ? /* @__PURE__ */ t("div", { children: c.error.message }) : /* @__PURE__ */ t(pr, { steps: gn, stateKey: "steps_info", mutation: u, values: c.data });
};
export {
  Bn as default
};
