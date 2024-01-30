import { u as Rt, j as e, a as B, F as Pt, f as He, S as It } from "./library-e3cc51d1.js";
import { r as D, c as Ft, R as Ze } from "./react-54946355.js";
import { f as Mt, R as qt, D as Nt, u as U, a as Wt, B as Ye, z as i, T as L, F as p, P as Lt, b as ie, c as Vt, Y as ze, d as k, e as Ee, g as Y, N as Z, L as $t, h as Ue, i as X, j as J, k as Yt } from "./RootSection-cf898e35.js";
import { F as ae } from "./icons-6b7f2986.js";
import { l as Ht, P as G, b as Zt } from "./useDictionary-92405419.js";
import { u as Ut, a as Xt, B as K } from "./mui-02912ce2.js";
import { f as Gt } from "./faPen-6d05924c.js";
import { N as Jt, f as Kt } from "./index-38b3fe08.js";
import { u as je } from "./useWindowController-c9172174.js";
var W = /* @__PURE__ */ ((t) => (t.DONE = "done", t.ACTIVE = "active", t.WAIT = "wait", t.DISABLED = "disabled", t.LOADING = "loading", t.ERROR = "error", t.EDIT = "edit", t))(W || {});
const Qt = ({
  stepsDefinition: t,
  values: r,
  stateKey: s
}) => {
  const [o, n] = D.useState(!1), [l, v] = D.useState({});
  D.useEffect(() => {
    r && s in r && r[s] && v(r[s]);
  }, [r]);
  const a = D.useMemo(() => t.map((S) => ({
    ...S,
    status: l[S.id] ?? W.WAIT
  })), [t, l]), [h, m] = D.useState(a[0]), y = D.useRef(null), w = D.useMemo(() => a.findIndex((S) => S.id === (h == null ? void 0 : h.id)) || 0, [h]), g = D.useCallback((S) => {
    v((j) => ({
      ...j,
      [h.id]: j[h.id] === W.ERROR && S === W.EDIT ? W.ERROR : S
    }));
  }, [h, v]), f = w === a.length - 1, A = async () => {
    try {
      n(!0), g(W.LOADING), y.current && await y.current.save();
    } catch {
      g(W.ERROR);
    } finally {
      n(!1);
    }
  }, x = D.useCallback(async () => {
    if (!f)
      try {
        await A(), m(a[w + 1]);
      } catch {
      }
  }, [w, f]), T = D.useCallback(() => {
    w !== 0 && m(a[w - 1]);
  }, [w]);
  return {
    steps: a,
    stepFormRef: y,
    isSubmitting: o,
    setActiveStepStatus: g,
    getNextButtonProps: () => ({
      onClick: f ? A : x,
      disabled: o
    }),
    activeStep: h,
    activeStepIndex: w,
    setActiveStep: m,
    getPrevButtonProps: () => ({
      onClick: T,
      disabled: w === 0
    })
  };
};
var Xe = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "up-right-and-down-left-from-center", o = 512, n = 512, l = ["expand-alt"], v = "f424", a = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faUpRightAndDownLeftFromCenter = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(Xe);
var Ge = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "down-left-and-up-right-to-center", o = 512, n = 512, l = ["compress-alt"], v = "f422", a = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faDownLeftAndUpRightToCenter = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(Ge);
var Je = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "window-minimize", o = 512, n = 512, l = [128469], v = "f2d1", a = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faWindowMinimize = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(Je);
const er = D.createContext(null), Oe = {
  didCatch: !1,
  error: null
};
class tr extends D.Component {
  constructor(r) {
    super(r), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Oe;
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
      for (var s, o, n = arguments.length, l = new Array(n), v = 0; v < n; v++)
        l[v] = arguments[v];
      (s = (o = this.props).onReset) === null || s === void 0 || s.call(o, {
        args: l,
        reason: "imperative-api"
      }), this.setState(Oe);
    }
  }
  componentDidCatch(r, s) {
    var o, n;
    (o = (n = this.props).onError) === null || o === void 0 || o.call(n, r, s);
  }
  componentDidUpdate(r, s) {
    const {
      didCatch: o
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (o && s.error !== null && rr(r.resetKeys, n)) {
      var l, v;
      (l = (v = this.props).onReset) === null || l === void 0 || l.call(v, {
        next: n,
        prev: r.resetKeys,
        reason: "keys"
      }), this.setState(Oe);
    }
  }
  render() {
    const {
      children: r,
      fallbackRender: s,
      FallbackComponent: o,
      fallback: n
    } = this.props, {
      didCatch: l,
      error: v
    } = this.state;
    let a = r;
    if (l) {
      const h = {
        error: v,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof s == "function")
        a = s(h);
      else if (o)
        a = D.createElement(o, h);
      else if (n === null || D.isValidElement(n))
        a = n;
      else
        throw v;
    }
    return D.createElement(er.Provider, {
      value: {
        didCatch: l,
        error: v,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a);
  }
}
function rr() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return t.length !== r.length || t.some((s, o) => !Object.is(s, r[o]));
}
const xe = ({
  onClick: t,
  ...r
}) => /* @__PURE__ */ e("div", { role: "button", onClick: t, onMouseDown: (s) => s.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ e(ae, { ...r }) }), nr = ({
  bounds: t,
  height: r = 500,
  width: s = 600,
  maximizable: o = !1,
  children: n,
  title: l,
  closable: v = !1,
  onClose: a,
  focused: h = !0,
  onFocus: m,
  folded: y = !1,
  foldable: w = !1,
  position: g,
  onFold: f,
  onMaximize: A,
  maximized: x,
  onMinimize: T,
  updatePosition: S,
  setWidth: j,
  setHeight: E
}) => {
  const q = D.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: I,
    height: V
  } = Rt(), R = D.useMemo(() => t && t.clientWidth > 0 && t.clientHeight > 0 ? {
    topOffset: t.offsetTop || 0,
    leftOffset: t.offsetLeft || 0,
    width: t.clientWidth,
    height: t.clientHeight
  } : null, [t, I, V]), ee = D.useRef(null);
  return D.useEffect(() => {
    ee.current && !ee.current.state.resizing && (x ? ee.current.updateSize(R ? {
      width: R.width,
      height: R.height
    } : {
      width: I || 0,
      height: V || 0
    }) : ee.current.updateSize({
      width: s,
      height: r
    }));
  }, [x, I, V, R, s, r, y]), D.useEffect(() => {
    ee.current && (x ? ee.current.updatePosition({
      x: (R == null ? void 0 : R.leftOffset) || 0,
      y: (R == null ? void 0 : R.topOffset) || 0
    }) : g && ee.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [x, ee.current, R, g, y]), D.useEffect(() => {
    t && !R || V && I && V + I > 0 && !g && !x && (S == null || S({
      x: R ? R.leftOffset + R.width / 2 - s / 2 : (I ?? 0) / 2 - s / 2,
      y: R ? R.topOffset + R.height / 2 - r / 2 : (V ?? 0) / 2 - s / 2
    }));
  }, [g, S, R, x, V, I]), t && !R || !V || !V ? null : /* @__PURE__ */ e(
    qt,
    {
      ref: ee,
      enableResizing: !x,
      disableDragging: x,
      dragHandleClassName: q,
      className: "window",
      bounds: t ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: y ? {
        display: "none"
      } : {},
      onResizeStop: (se, pe, te) => {
        j == null || j(te.offsetWidth), E == null || E(te.offsetHeight);
      },
      onDragStop: (se, pe) => {
        S == null || S({
          x: pe.lastX,
          y: pe.lastY
        });
      },
      default: {
        height: r,
        width: s,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ B("div", { role: "dialog", onMouseDown: () => {
        !h && m && m();
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
      }, h ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ B("div", { className: q, onDoubleClick: () => o && (x ? T == null ? void 0 : T() : A == null ? void 0 : A()), css: [{
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
        }, h ? {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
        } : {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 88 173 / var(--tw-bg-opacity))"
        }], children: [
          /* @__PURE__ */ e("div", { css: {
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: l }),
          /* @__PURE__ */ B("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            w && /* @__PURE__ */ e(xe, { icon: Je.faWindowMinimize, onClick: f, transform: "shrink-4" }),
            o && (x ? /* @__PURE__ */ e(xe, { icon: Ge.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: T }) : /* @__PURE__ */ e(xe, { icon: Xe.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: A })),
            v && /* @__PURE__ */ e(xe, { icon: Mt.faXmark, onClick: a })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ e(tr, { fallbackRender: ({
          error: se
        }) => /* @__PURE__ */ e("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: se }), children: n }) })
      ] })
    }
  );
}, ir = ({
  children: t,
  open: r = !1,
  onClose: s,
  title: o,
  width: n,
  height: l,
  maximized: v,
  maximizable: a
}) => {
  const [h, m] = D.useState(void 0), [y, w] = D.useState(r);
  return D.useEffect(() => {
    w(r);
  }, [r]), y ? Ft.createPortal(/* @__PURE__ */ e("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ e(nr, { position: h, updatePosition: (g) => {
    m(g);
  }, closable: !0, title: o, width: n, height: l, maximized: v, maximizable: a, onClose: () => {
    s ? s() : w(!1);
  }, children: t }) }), document.body) : null;
}, Q = (t, r, s) => D.forwardRef(({
  multiple: o = !1,
  onChange: n,
  value: l,
  idField: v = Nt,
  ...a
}, h) => {
  const [m, y] = D.useState(), [w, g] = D.useState(!1), [f, A] = D.useState(""), x = () => {
    A(""), g(!1);
  }, T = Ut(h, y), S = (j) => {
    n && n(o ? [...l ?? [], j[v]] : j[v]), x();
  };
  return /* @__PURE__ */ B(Pt, { children: [
    /* @__PURE__ */ e(t, { ...a, idField: v, value: l, multiple: o, onChange: n, ref: T, extraOptionsRenderer: ({
      search: j,
      searchIsLoading: E,
      closePopup: q
    }) => !E && /* @__PURE__ */ e(or, { search: j, onClick: () => {
      A((j || "").trim()), g(!0), q(), m == null || m.blur();
    } }) }),
    /* @__PURE__ */ e(ir, { open: w, onClose: () => g(!1), ...s, children: /* @__PURE__ */ e(r, { ...a, search: f, onCreate: S }) })
  ] });
}), or = ({
  search: t,
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
  t && ` «${t}»`,
  "?"
] }), Ke = Ze.createContext(null), ar = ({
  children: t,
  value: r
}) => {
  const [s, o] = Ze.useState({}), {
    activeStep: {
      id: n
    }
  } = r, l = D.useCallback(() => s[n] || {}, [n, s]), v = D.useCallback((a) => o((h) => ({
    ...h,
    [n]: {
      ...h[n],
      ...a
    }
  })), [n, s, o]);
  return /* @__PURE__ */ e(Ke.Provider, { value: {
    ...r,
    getStepState: l,
    setStepState: v
  }, children: t });
};
function lr() {
  const t = D.useContext(Ke);
  if (!t)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return t;
}
const M = ({
  ...t
}) => {
  const {
    stepFormRef: r,
    activeStep: s,
    stateKey: o,
    getStepState: n,
    setStepState: l,
    values: v,
    mutation: a,
    setActiveStepStatus: h
  } = lr(), m = n(), {
    errors: y,
    fields: w
  } = m, g = U({
    mutation: a,
    errors: y,
    defaultValues: w ?? v,
    transformSendData: (f) => ({
      ...f,
      [o]: {
        ...v ? v[o] : {},
        [s.id]: W.DONE
      }
    }),
    ...t
  });
  return D.useEffect(() => {
    l({
      errors: g.formState.errors
    });
  }, [g.formState.errors]), D.useEffect(() => {
    Ht.isEqual(g.getValues(), v) || (h(W.EDIT), l({
      fields: g.getValues()
    }));
  }, [s, JSON.stringify(g.formState.dirtyFields)]), D.useImperativeHandle(r, () => ({
    save: async () => {
      await g.submit(), l({
        fields: void 0
      });
    }
  })), g;
};
var Qe = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "arrow-left", o = 448, n = 512, l = [8592], v = "f060", a = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faArrowLeft = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(Qe);
var et = { exports: {} };
(function(t, r) {
  (function(s, o) {
    t.exports = o(D);
  })(self, (s) => (() => {
    var o = { 58: (a, h, m) => {
      m.d(h, { Z: () => A });
      var y = m(864), w = m.n(y), g = m(352), f = m.n(g)()(w());
      f.push([a.id, `
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
      const A = f;
    }, 672: (a, h, m) => {
      m.d(h, { Z: () => A });
      var y = m(864), w = m.n(y), g = m(352), f = m.n(g)()(w());
      f.push([a.id, `/* The top-level element of the splitter*/
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
      const A = f;
    }, 352: (a) => {
      a.exports = function(h) {
        var m = [];
        return m.toString = function() {
          return this.map(function(y) {
            var w = "", g = y[5] !== void 0;
            return y[4] && (w += "@supports (".concat(y[4], ") {")), y[2] && (w += "@media ".concat(y[2], " {")), g && (w += "@layer".concat(y[5].length > 0 ? " ".concat(y[5]) : "", " {")), w += h(y), g && (w += "}"), y[2] && (w += "}"), y[4] && (w += "}"), w;
          }).join("");
        }, m.i = function(y, w, g, f, A) {
          typeof y == "string" && (y = [[null, y, void 0]]);
          var x = {};
          if (g)
            for (var T = 0; T < this.length; T++) {
              var S = this[T][0];
              S != null && (x[S] = !0);
            }
          for (var j = 0; j < y.length; j++) {
            var E = [].concat(y[j]);
            g && x[E[0]] || (A !== void 0 && (E[5] === void 0 || (E[1] = "@layer".concat(E[5].length > 0 ? " ".concat(E[5]) : "", " {").concat(E[1], "}")), E[5] = A), w && (E[2] && (E[1] = "@media ".concat(E[2], " {").concat(E[1], "}")), E[2] = w), f && (E[4] ? (E[1] = "@supports (".concat(E[4], ") {").concat(E[1], "}"), E[4] = f) : E[4] = "".concat(f)), m.push(E));
          }
        }, m;
      };
    }, 864: (a) => {
      a.exports = function(h) {
        var m = h[1], y = h[3];
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
    }, 372: (a, h, m) => {
      var y = m(567);
      function w() {
      }
      function g() {
      }
      g.resetWarningCache = w, a.exports = function() {
        function f(T, S, j, E, q, I) {
          if (I !== y) {
            var V = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw V.name = "Invariant Violation", V;
          }
        }
        function A() {
          return f;
        }
        f.isRequired = f;
        var x = { array: f, bigint: f, bool: f, func: f, number: f, object: f, string: f, symbol: f, any: f, arrayOf: A, element: f, elementType: f, instanceOf: A, node: f, objectOf: A, oneOf: A, oneOfType: A, shape: A, exact: A, checkPropTypes: g, resetWarningCache: w };
        return x.PropTypes = x, x;
      };
    }, 652: (a, h, m) => {
      a.exports = m(372)();
    }, 567: (a) => {
      a.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (a) => {
      var h = [];
      function m(g) {
        for (var f = -1, A = 0; A < h.length; A++)
          if (h[A].identifier === g) {
            f = A;
            break;
          }
        return f;
      }
      function y(g, f) {
        for (var A = {}, x = [], T = 0; T < g.length; T++) {
          var S = g[T], j = f.base ? S[0] + f.base : S[0], E = A[j] || 0, q = "".concat(j, " ").concat(E);
          A[j] = E + 1;
          var I = m(q), V = { css: S[1], media: S[2], sourceMap: S[3], supports: S[4], layer: S[5] };
          if (I !== -1)
            h[I].references++, h[I].updater(V);
          else {
            var R = w(V, f);
            f.byIndex = T, h.splice(T, 0, { identifier: q, updater: R, references: 1 });
          }
          x.push(q);
        }
        return x;
      }
      function w(g, f) {
        var A = f.domAPI(f);
        return A.update(g), function(x) {
          if (x) {
            if (x.css === g.css && x.media === g.media && x.sourceMap === g.sourceMap && x.supports === g.supports && x.layer === g.layer)
              return;
            A.update(g = x);
          } else
            A.remove();
        };
      }
      a.exports = function(g, f) {
        var A = y(g = g || [], f = f || {});
        return function(x) {
          x = x || [];
          for (var T = 0; T < A.length; T++) {
            var S = m(A[T]);
            h[S].references--;
          }
          for (var j = y(x, f), E = 0; E < A.length; E++) {
            var q = m(A[E]);
            h[q].references === 0 && (h[q].updater(), h.splice(q, 1));
          }
          A = j;
        };
      };
    }, 80: (a) => {
      var h = {};
      a.exports = function(m, y) {
        var w = function(g) {
          if (h[g] === void 0) {
            var f = document.querySelector(g);
            if (window.HTMLIFrameElement && f instanceof window.HTMLIFrameElement)
              try {
                f = f.contentDocument.head;
              } catch {
                f = null;
              }
            h[g] = f;
          }
          return h[g];
        }(m);
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        w.appendChild(y);
      };
    }, 182: (a) => {
      a.exports = function(h) {
        var m = document.createElement("style");
        return h.setAttributes(m, h.attributes), h.insert(m, h.options), m;
      };
    }, 850: (a, h, m) => {
      a.exports = function(y) {
        var w = m.nc;
        w && y.setAttribute("nonce", w);
      };
    }, 236: (a) => {
      a.exports = function(h) {
        var m = h.insertStyleElement(h);
        return { update: function(y) {
          (function(w, g, f) {
            var A = "";
            f.supports && (A += "@supports (".concat(f.supports, ") {")), f.media && (A += "@media ".concat(f.media, " {"));
            var x = f.layer !== void 0;
            x && (A += "@layer".concat(f.layer.length > 0 ? " ".concat(f.layer) : "", " {")), A += f.css, x && (A += "}"), f.media && (A += "}"), f.supports && (A += "}");
            var T = f.sourceMap;
            T && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(T)))), " */")), g.styleTagTransform(A, w, g.options);
          })(m, h, y);
        }, remove: function() {
          (function(y) {
            if (y.parentNode === null)
              return !1;
            y.parentNode.removeChild(y);
          })(m);
        } };
      };
    }, 213: (a) => {
      a.exports = function(h, m) {
        if (m.styleSheet)
          m.styleSheet.cssText = h;
        else {
          for (; m.firstChild; )
            m.removeChild(m.firstChild);
          m.appendChild(document.createTextNode(h));
        }
      };
    }, 359: (a) => {
      a.exports = s;
    } }, n = {};
    function l(a) {
      var h = n[a];
      if (h !== void 0)
        return h.exports;
      var m = n[a] = { id: a, exports: {} };
      return o[a](m, m.exports, l), m.exports;
    }
    l.n = (a) => {
      var h = a && a.__esModule ? () => a.default : () => a;
      return l.d(h, { a: h }), h;
    }, l.d = (a, h) => {
      for (var m in h)
        l.o(h, m) && !l.o(a, m) && Object.defineProperty(a, m, { enumerable: !0, get: h[m] });
    }, l.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), l.o = (a, h) => Object.prototype.hasOwnProperty.call(a, h), l.r = (a) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    }, l.nc = void 0;
    var v = {};
    return (() => {
      l.r(v), l.d(v, { DefaultSplitter: () => R, Split: () => gt });
      var a = l(359), h = l(701), m = l.n(h), y = l(236), w = l.n(y), g = l(80), f = l.n(g), A = l(850), x = l.n(A), T = l(182), S = l.n(T), j = l(213), E = l.n(j), q = l(58), I = {};
      I.styleTagTransform = E(), I.setAttributes = x(), I.insert = f().bind(null, "head"), I.domAPI = w(), I.insertStyleElement = S(), m()(q.Z, I), q.Z && q.Z.locals && q.Z.locals;
      const V = (d) => (d % 2 == 0 ? 2 : 3) + "px", R = (d) => {
        const { dragging: c, pixelSize: u, color: b = "silver", hoverColor: _ = "gray", dragColor: O = "black" } = d, P = { "--default-splitter-line-margin": ($ = u, `${Math.max(0, Math.floor($ / 2) - 1)}px`), "--default-splitter-line-size": V(u), "--default-splitter-line-color": c ? O : b, "--default-splitter-line-hover-color": c ? O : _ };
        var $;
        return a.createElement("div", { className: "default-splitter", style: P }, a.createElement("div", { className: "line" }));
      };
      function ee() {
        return ee = Object.assign ? Object.assign.bind() : function(d) {
          for (var c = 1; c < arguments.length; c++) {
            var u = arguments[c];
            for (var b in u)
              Object.prototype.hasOwnProperty.call(u, b) && (d[b] = u[b]);
          }
          return d;
        }, ee.apply(this, arguments);
      }
      function se(d, c) {
        return se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, b) {
          return u.__proto__ = b, u;
        }, se(d, c);
      }
      var pe = l(652), te = l.n(pe), Re = function() {
        if (typeof Map < "u")
          return Map;
        function d(c, u) {
          var b = -1;
          return c.some(function(_, O) {
            return _[0] === u && (b = O, !0);
          }), b;
        }
        return function() {
          function c() {
            this.__entries__ = [];
          }
          return Object.defineProperty(c.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), c.prototype.get = function(u) {
            var b = d(this.__entries__, u), _ = this.__entries__[b];
            return _ && _[1];
          }, c.prototype.set = function(u, b) {
            var _ = d(this.__entries__, u);
            ~_ ? this.__entries__[_][1] = b : this.__entries__.push([u, b]);
          }, c.prototype.delete = function(u) {
            var b = this.__entries__, _ = d(b, u);
            ~_ && b.splice(_, 1);
          }, c.prototype.has = function(u) {
            return !!~d(this.__entries__, u);
          }, c.prototype.clear = function() {
            this.__entries__.splice(0);
          }, c.prototype.forEach = function(u, b) {
            b === void 0 && (b = null);
            for (var _ = 0, O = this.__entries__; _ < O.length; _++) {
              var P = O[_];
              u.call(b, P[1], P[0]);
            }
          }, c;
        }();
      }(), Se = typeof window < "u" && typeof document < "u" && window.document === document, ge = l.g !== void 0 && l.g.Math === Math ? l.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), it = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ge) : function(d) {
        return setTimeout(function() {
          return d(Date.now());
        }, 1e3 / 60);
      }, ot = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], at = typeof MutationObserver < "u", lt = function() {
        function d() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(c, u) {
            var b = !1, _ = !1, O = 0;
            function P() {
              b && (b = !1, c()), _ && C();
            }
            function $() {
              it(P);
            }
            function C() {
              var N = Date.now();
              if (b) {
                if (N - O < 2)
                  return;
                _ = !0;
              } else
                b = !0, _ = !1, setTimeout($, 20);
              O = N;
            }
            return C;
          }(this.refresh.bind(this));
        }
        return d.prototype.addObserver = function(c) {
          ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
        }, d.prototype.removeObserver = function(c) {
          var u = this.observers_, b = u.indexOf(c);
          ~b && u.splice(b, 1), !u.length && this.connected_ && this.disconnect_();
        }, d.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, d.prototype.updateObservers_ = function() {
          var c = this.observers_.filter(function(u) {
            return u.gatherActive(), u.hasActive();
          });
          return c.forEach(function(u) {
            return u.broadcastActive();
          }), c.length > 0;
        }, d.prototype.connect_ = function() {
          Se && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), at ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, d.prototype.disconnect_ = function() {
          Se && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, d.prototype.onTransitionEnd_ = function(c) {
          var u = c.propertyName, b = u === void 0 ? "" : u;
          ot.some(function(_) {
            return !!~b.indexOf(_);
          }) && this.refresh();
        }, d.getInstance = function() {
          return this.instance_ || (this.instance_ = new d()), this.instance_;
        }, d.instance_ = null, d;
      }(), Pe = function(d, c) {
        for (var u = 0, b = Object.keys(c); u < b.length; u++) {
          var _ = b[u];
          Object.defineProperty(d, _, { value: c[_], enumerable: !1, writable: !1, configurable: !0 });
        }
        return d;
      }, ce = function(d) {
        return d && d.ownerDocument && d.ownerDocument.defaultView || ge;
      }, Ie = ve(0, 0, 0, 0);
      function be(d) {
        return parseFloat(d) || 0;
      }
      function Fe(d) {
        for (var c = [], u = 1; u < arguments.length; u++)
          c[u - 1] = arguments[u];
        return c.reduce(function(b, _) {
          return b + be(d["border-" + _ + "-width"]);
        }, 0);
      }
      var st = typeof SVGGraphicsElement < "u" ? function(d) {
        return d instanceof ce(d).SVGGraphicsElement;
      } : function(d) {
        return d instanceof ce(d).SVGElement && typeof d.getBBox == "function";
      };
      function ct(d) {
        return Se ? st(d) ? function(c) {
          var u = c.getBBox();
          return ve(0, 0, u.width, u.height);
        }(d) : function(c) {
          var u = c.clientWidth, b = c.clientHeight;
          if (!u && !b)
            return Ie;
          var _ = ce(c).getComputedStyle(c), O = function(H) {
            for (var F = {}, le = 0, oe = ["top", "right", "bottom", "left"]; le < oe.length; le++) {
              var Ae = oe[le], ue = H["padding-" + Ae];
              F[Ae] = be(ue);
            }
            return F;
          }(_), P = O.left + O.right, $ = O.top + O.bottom, C = be(_.width), N = be(_.height);
          if (_.boxSizing === "border-box" && (Math.round(C + P) !== u && (C -= Fe(_, "left", "right") + P), Math.round(N + $) !== b && (N -= Fe(_, "top", "bottom") + $)), !function(H) {
            return H === ce(H).document.documentElement;
          }(c)) {
            var ne = Math.round(C + P) - u, re = Math.round(N + $) - b;
            Math.abs(ne) !== 1 && (C -= ne), Math.abs(re) !== 1 && (N -= re);
          }
          return ve(O.left, O.top, C, N);
        }(d) : Ie;
      }
      function ve(d, c, u, b) {
        return { x: d, y: c, width: u, height: b };
      }
      var dt = function() {
        function d(c) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ve(0, 0, 0, 0), this.target = c;
        }
        return d.prototype.isActive = function() {
          var c = ct(this.target);
          return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
        }, d.prototype.broadcastRect = function() {
          var c = this.contentRect_;
          return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
        }, d;
      }(), ut = function(d, c) {
        var u, b, _, O, P, $, C, N = (b = (u = c).x, _ = u.y, O = u.width, P = u.height, $ = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, C = Object.create($.prototype), Pe(C, { x: b, y: _, width: O, height: P, top: _, right: b + O, bottom: P + _, left: b }), C);
        Pe(this, { target: d, contentRect: N });
      }, pt = function() {
        function d(c, u, b) {
          if (this.activeObservations_ = [], this.observations_ = new Re(), typeof c != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = c, this.controller_ = u, this.callbackCtx_ = b;
        }
        return d.prototype.observe = function(c) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(c instanceof ce(c).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var u = this.observations_;
            u.has(c) || (u.set(c, new dt(c)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, d.prototype.unobserve = function(c) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(c instanceof ce(c).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var u = this.observations_;
            u.has(c) && (u.delete(c), u.size || this.controller_.removeObserver(this));
          }
        }, d.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, d.prototype.gatherActive = function() {
          var c = this;
          this.clearActive(), this.observations_.forEach(function(u) {
            u.isActive() && c.activeObservations_.push(u);
          });
        }, d.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var c = this.callbackCtx_, u = this.activeObservations_.map(function(b) {
              return new ut(b.target, b.broadcastRect());
            });
            this.callback_.call(c, u, c), this.clearActive();
          }
        }, d.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, d.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, d;
      }(), Me = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Re(), qe = function d(c) {
        if (!(this instanceof d))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var u = lt.getInstance(), b = new pt(c, u, this);
        Me.set(this, b);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(d) {
        qe.prototype[d] = function() {
          var c;
          return (c = Me.get(this))[d].apply(c, arguments);
        };
      });
      const ht = ge.ResizeObserver !== void 0 ? ge.ResizeObserver : qe;
      var mt = ["client", "offset", "scroll", "bounds", "margin"];
      function Ne(d) {
        var c = [];
        return mt.forEach(function(u) {
          d[u] && c.push(u);
        }), c;
      }
      function We(d, c) {
        var u = {};
        if (c.indexOf("client") > -1 && (u.client = { top: d.clientTop, left: d.clientLeft, width: d.clientWidth, height: d.clientHeight }), c.indexOf("offset") > -1 && (u.offset = { top: d.offsetTop, left: d.offsetLeft, width: d.offsetWidth, height: d.offsetHeight }), c.indexOf("scroll") > -1 && (u.scroll = { top: d.scrollTop, left: d.scrollLeft, width: d.scrollWidth, height: d.scrollHeight }), c.indexOf("bounds") > -1) {
          var b = d.getBoundingClientRect();
          u.bounds = { top: b.top, right: b.right, bottom: b.bottom, left: b.left, width: b.width, height: b.height };
        }
        if (c.indexOf("margin") > -1) {
          var _ = getComputedStyle(d);
          u.margin = { top: _ ? parseInt(_.marginTop) : 0, right: _ ? parseInt(_.marginRight) : 0, bottom: _ ? parseInt(_.marginBottom) : 0, left: _ ? parseInt(_.marginLeft) : 0 };
        }
        return u;
      }
      function ft(d) {
        return d && d.ownerDocument && d.ownerDocument.defaultView || window;
      }
      var De = function(d) {
        var c, u;
        return u = c = function(b) {
          var _, O;
          function P() {
            for (var C, N = arguments.length, ne = new Array(N), re = 0; re < N; re++)
              ne[re] = arguments[re];
            return (C = b.call.apply(b, [this].concat(ne)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, C._animationFrameID = null, C._resizeObserver = null, C._node = null, C._window = null, C.measure = function(H) {
              var F = We(C._node, Ne(C.props));
              H && (F.entry = H[0].contentRect), C._animationFrameID = C._window.requestAnimationFrame(function() {
                C._resizeObserver !== null && (C.setState({ contentRect: F }), typeof C.props.onResize == "function" && C.props.onResize(F));
              });
            }, C._handleRef = function(H) {
              C._resizeObserver !== null && C._node !== null && C._resizeObserver.unobserve(C._node), C._node = H, C._window = ft(C._node);
              var F = C.props.innerRef;
              F && (typeof F == "function" ? F(C._node) : F.current = C._node), C._resizeObserver !== null && C._node !== null && C._resizeObserver.observe(C._node);
            }, C;
          }
          O = b, (_ = P).prototype = Object.create(O.prototype), _.prototype.constructor = _, se(_, O);
          var $ = P.prototype;
          return $.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new ht(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(We(this._node, Ne(this.props))));
          }, $.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, $.render = function() {
            var C = this.props, N = (C.innerRef, C.onResize, function(ne, re) {
              if (ne == null)
                return {};
              var H, F, le = {}, oe = Object.keys(ne);
              for (F = 0; F < oe.length; F++)
                H = oe[F], re.indexOf(H) >= 0 || (le[H] = ne[H]);
              return le;
            }(C, ["innerRef", "onResize"]));
            return (0, a.createElement)(d, ee({}, N, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, P;
        }(a.Component), c.propTypes = { client: te().bool, offset: te().bool, scroll: te().bool, bounds: te().bool, margin: te().bool, innerRef: te().oneOfType([te().object, te().func]), onResize: te().func }, u;
      }(function(d) {
        var c = d.measure, u = d.measureRef, b = d.contentRect;
        return (0, d.children)({ measure: c, measureRef: u, contentRect: b });
      });
      De.displayName = "Measure", De.propTypes.children = te().func;
      const ke = De;
      var ye = l(672), de = {};
      de.styleTagTransform = E(), de.setAttributes = x(), de.insert = f().bind(null, "head"), de.domAPI = w(), de.insertStyleElement = S(), m()(ye.Z, de), ye.Z && ye.Z.locals && ye.Z.locals;
      const gt = (d) => {
        const { horizontal: c = !1, initialPrimarySize: u = "50%", minPrimarySize: b = "0px", minSecondarySize: _ = "0px", splitterSize: O = "7px", renderSplitter: P, resetOnDoubleClick: $ = !1, defaultSplitterColors: C = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: N, onMeasuredSizesChanged: ne } = d, [re, H] = a.useState({ height: 0, width: 0 }), [F, le] = a.useState({ height: 0, width: 0 }), [oe, Ae] = a.useState({ height: 0, width: 0 }), ue = a.useMemo(() => c ? re.height : re.width, [c, re]), _e = a.useMemo(() => c ? F.height : F.width, [c, F]), we = a.useMemo(() => c ? oe.height : oe.width, [c, oe]), [he, Le] = a.useState(void 0), [bt, vt] = a.useState(0), [yt, At] = a.useState(0), [Be, Ve] = a.useState(!1);
        a.useEffect(() => {
          N && N(he !== void 0 ? `${he}%` : u);
        }, [he, u]), a.useEffect(() => {
          ne && ne({ primary: _e, splitter: we, secondary: ue - (_e + we) });
        }, [c, ue, _e, we]);
        const _t = (z) => {
          z.bounds && le({ height: z.bounds.height, width: z.bounds.width });
        }, wt = (z) => {
          z.bounds && Ae({ height: z.bounds.height, width: z.bounds.width });
        }, Ct = (z) => {
          z.currentTarget.setPointerCapture(z.pointerId), vt(c ? z.clientY : z.clientX), At(_e), Ve(!0);
        }, xt = (z) => {
          if (z.currentTarget.hasPointerCapture(z.pointerId)) {
            const me = c ? z.clientY : z.clientX, zt = yt + (me - bt), jt = Math.max(0, Math.min(zt, ue));
            Le(jt / ue * 100);
          }
        }, Et = (z) => {
          z.currentTarget.releasePointerCapture(z.pointerId), Ve(!1);
        }, St = () => {
          $ && Le(void 0);
        }, Ce = a.Children.toArray(d.children), Dt = Ce.length > 0 ? Ce[0] : a.createElement("div", null), kt = Ce.length > 1 ? Ce[1] : a.createElement("div", null), Te = { primary: he !== void 0 ? `${he}%` : u, minPrimary: b ?? "0px", minSecondary: _ ?? "0px" }, $e = { pixelSize: we, horizontal: c, dragging: Be }, Bt = P ?? (() => a.createElement(R, Object.assign({}, $e, { color: Be ? C.drag : C.color, hoverColor: Be ? C.drag : C.hover }))), Tt = c ? "split-container horizontal" : "split-container vertical", Ot = { "--react-split-min-primary": Te.minPrimary, "--react-split-min-secondary": Te.minSecondary, "--react-split-primary": Te.primary, "--react-split-splitter": O };
        return a.createElement(ke, { bounds: !0, onResize: (z) => {
          z.bounds && H({ height: z.bounds.height, width: z.bounds.width });
        } }, ({ measureRef: z }) => a.createElement("div", { className: "react-split", ref: z }, a.createElement("div", { className: Tt, style: Ot }, a.createElement("div", { className: "primary" }, a.createElement(ke, { bounds: !0, onResize: _t }, ({ measureRef: me }) => a.createElement("div", { className: "full-content", ref: me }, Dt))), a.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Ct, onPointerUp: Et, onPointerMove: xt, onDoubleClick: St }, a.createElement(ke, { bounds: !0, onResize: wt }, ({ measureRef: me }) => a.createElement("div", { className: "full-content", ref: me }, Bt($e)))), a.createElement("div", { className: "secondary" }, a.createElement("div", { className: "full-content" }, kt)))));
      };
    })(), v;
  })());
})(et);
var sr = et.exports;
const cr = ({
  children: t,
  ...r
}) => /* @__PURE__ */ e(sr.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: s,
  dragging: o
}) => /* @__PURE__ */ e("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, s ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, o && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...r, children: t });
var tt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "pencil", o = 512, n = 512, l = [9999, 61504, "pencil-alt"], v = "f303", a = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faPencil = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(tt);
var fe = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "circle", o = 512, n = 512, l = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], v = "f111", a = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faCircle = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(fe);
var rt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", s = "lock", o = 448, n = 512, l = [128274], v = "f023", a = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faLock = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(rt);
var nt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "far", s = "clock", o = 512, n = 512, l = [128339, "clock-four"], v = "f017", a = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  t.definition = {
    prefix: r,
    iconName: s,
    icon: [
      o,
      n,
      l,
      v,
      a
    ]
  }, t.faClock = t.definition, t.prefix = r, t.iconName = s, t.width = o, t.height = n, t.ligatures = l, t.unicode = v, t.svgPathData = a, t.aliases = l;
})(nt);
const dr = ({
  status: t
}) => Jt(t).with(W.DONE, () => /* @__PURE__ */ e(ae, { icon: Kt.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(W.ACTIVE, () => /* @__PURE__ */ e(ae, { mask: fe.faCircle, icon: Gt.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(W.WAIT, () => /* @__PURE__ */ e(ae, { mask: fe.faCircle, icon: nt.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(W.LOADING, () => /* @__PURE__ */ e(ae, { icon: He.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(W.DISABLED, () => /* @__PURE__ */ e(ae, { mask: fe.faCircle, transform: "shrink-8", icon: rt.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(W.ERROR, () => /* @__PURE__ */ e(ae, { icon: Wt.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(W.EDIT, () => /* @__PURE__ */ e(ae, { mask: fe.faCircle, transform: "shrink-8", icon: tt.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), ur = ({
  items: t,
  activeItem: r,
  className: s,
  onChange: o
}) => /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: t.map((n, l) => {
  const v = (r == null ? void 0 : r.id) === n.id;
  return /* @__PURE__ */ e("li", { onClick: () => n.status !== W.DISABLED ? o == null ? void 0 : o(n) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, v ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : n.status === W.DISABLED ? {
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
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ B("div", { children: [
      l + 1,
      ". ",
      n.title
    ] }) }),
    /* @__PURE__ */ e(dr, { status: n.status })
  ] }) }, n.id);
}) }) }), pr = ({
  steps: t,
  values: r,
  mutation: s,
  stateKey: o = "state"
}) => {
  const {
    isSubmitting: n,
    steps: l,
    stepFormRef: v,
    setActiveStepStatus: a,
    getNextButtonProps: h,
    getPrevButtonProps: m,
    setActiveStep: y,
    activeStepIndex: w,
    activeStep: g
  } = Qt({
    stepsDefinition: t,
    values: r,
    stateKey: o
  }), {
    Component: f
  } = g;
  return /* @__PURE__ */ e(ar, { value: {
    activeStep: g,
    mutation: s,
    stepFormRef: v,
    stateKey: o,
    values: r,
    setActiveStepStatus: a
  }, children: /* @__PURE__ */ e(G, { bbar: [/* @__PURE__ */ e(Ye, { icon: Qe.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ B(Ye, { ...h(), variant: "contained", color: "success", children: [
    n && /* @__PURE__ */ e(ae, { icon: He.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ B(cr, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(ur, { activeItem: g, onChange: y, items: l }) }),
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
      /* @__PURE__ */ e("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ e(f, {}) })
    ] })
  ] }) }) });
}, hr = i.object({
  partner_id: i.string({
    required_error: "Выберите организацию",
    coerce: !0
  }),
  name: i.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: i.coerce.number({
    required_error: "Выберите тип программы",
    invalid_type_error: "Выберите тип программы"
  }).positive({
    message: "Выберите тип программы"
  }),
  program_level_id: i.string({
    required_error: "Выберите уровень программы",
    invalid_type_error: "Выберите уровень программы"
  }),
  section_id: i.string({
    required_error: "Выберите направленность",
    invalid_type_error: "Выберите направленность"
  }).optional(),
  year_created: i.string({
    required_error: "Выберите год создания"
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((t) => {
    const r = Number(t);
    return isNaN(r) ? !1 : r >= 1900 && r <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
  city_created: i.string({
    required_error: "Выберите город создания"
  })
}).required(), mr = () => {
  const t = M({
    schema: hr
  });
  return /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(p, { control: t.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(Lt, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(ie, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (s) => s.filter(({
      id: o
    }) => o === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(Vt, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(ie, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(ze, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, fr = i.object({
  protocol_number: i.string().nullish(),
  protocol_date: i.string().nullish(),
  decree_number: i.string().nullish(),
  decree_date: i.string().nullish(),
  authors: i.string().nullish(),
  comment: i.string().nullish()
}), gr = () => {
  const t = M({
    schema: fr
  });
  return /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(p, { control: t.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ e(Ee, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ e(Ee, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, br = i.object({
  min_age: i.coerce.number().optional(),
  max_age: i.coerce.number().optional(),
  competence_level_id: i.number().nullish(),
  program_volume: i.coerce.number().optional(),
  program_duration: i.coerce.number().optional(),
  edu_sessions_per_week: i.coerce.number().optional(),
  edu_sessions_per_day: i.coerce.number().optional(),
  edu_session_hour_limit: i.coerce.number().optional(),
  break_duration: i.coerce.number().optional(),
  education_form_id: i.string().nullish(),
  min_group_size: i.coerce.number().optional(),
  max_group_size: i.coerce.number().optional(),
  is_one_age_group: i.boolean().optional()
}), vr = () => {
  const t = M({
    schema: br
  });
  return /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e($t, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ B("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ e(p, { control: t.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ e(Z, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ e("div", { children: "-" }),
      /* @__PURE__ */ e(p, { control: t.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ e(Z, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "competence_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(ie, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "program_volume", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "program_duration", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "edu_sessions_per_week", render: ({
      field: r
    }) => /* @__PURE__ */ e(
      Z,
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
    /* @__PURE__ */ e(p, { control: t.control, name: "edu_sessions_per_day", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "edu_session_hour_limit", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "break_duration", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "education_form_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(ie, { dictionary: "educationForm", ...r, label: "Форма обучения" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "min_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "max_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ e(Z, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "is_one_age_group", render: ({
      field: r
    }) => /* @__PURE__ */ e(Ue, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, yr = i.object({
  explanatory_note: i.string().nullish(),
  program_relevance: i.string().nullish(),
  pedagogical_expediency: i.string().nullish(),
  distinctive_features: i.string().nullish(),
  actual: i.string().nullish()
}), Ar = () => {
  const t = M({
    schema: yr
  });
  return /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(p, { control: t.control, name: "explanatory_note", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "program_relevance", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "pedagogical_expediency", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "distinctive_features", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(p, { control: t.control, name: "actual", render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...r }) })
  ] });
};
i.object({
  category_id: i.number({
    required_error: "Выберите категорию"
  }),
  title: i.string({
    required_error: "Заполните наименование"
  })
}).required({
  category_id: !0,
  title: !0
});
const _r = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-results", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: i.object({
      category_id: i.number({
        required_error: "Выберите категорию"
      }),
      title: i.string({
        required_error: "Заполните наименование"
      })
    }).required({
      category_id: !0,
      title: !0
    }),
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "category_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...n }) }),
    /* @__PURE__ */ e(p, { name: "title", control: o.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Наименование", placeholder: "Введите наименование", ...n }) })
  ] }) });
}, wr = Q(J({
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), _r, {
  title: "Новый планируемый результат"
}), Cr = i.object({
  program_results: i.array(i.string())
}), xr = () => {
  const t = M({
    schema: Cr
  });
  return /* @__PURE__ */ e(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: /* @__PURE__ */ e(p, { name: "program_results", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(wr, { ...r, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Er = i.object({
  title: i.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), Sr = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    mutation: s,
    schema: Er
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ e(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: /* @__PURE__ */ e(p, { name: "title", control: o.control, defaultValue: r, render: ({
    field: n
  }) => /* @__PURE__ */ e(L, { label: "Наименование", placeholder: "Введите наименование задачи", ...n }) }) }) });
}, Dr = Q(J({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Sr, {
  title: "Новая задача"
}), kr = i.object({
  mission: i.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: i.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: i.array(i.string())
}).required({
  goal: !0
}), Br = () => {
  const t = M({
    schema: kr
  });
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(p, { name: "mission", control: t.control, render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
    /* @__PURE__ */ e(p, { name: "goal", control: t.control, render: ({
      field: r
    }) => /* @__PURE__ */ e(Y, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
    /* @__PURE__ */ e(p, { name: "program_objectives", control: t.control, render: ({
      field: r
    }) => /* @__PURE__ */ e(Dr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
  ] }) });
}, Tr = i.object({
  theme: i.string({
    required_error: "Заполните тему"
  }),
  theory: i.string().optional(),
  theory_volume: i.number().optional(),
  practice: i.string().optional(),
  practice_volume: i.number().optional(),
  sort_index: i.number(),
  doc_id: i.string()
}), Or = ({
  doc_id: t,
  onCreate: r,
  search: s
}) => {
  const o = X("/api/rest/program-doc-plans", {
    onSuccess: ({
      data: l
    }) => {
      r(l);
    }
  }), n = U({
    schema: Tr,
    mutation: o,
    defaultValues: {
      doc_id: t,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(p, { name: "theme", control: n.control, defaultValue: s, render: ({
      field: l
    }) => /* @__PURE__ */ e(L, { label: "Тема", placeholder: "Введите тему", ...l }) }),
    /* @__PURE__ */ e(p, { name: "theory", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(L, { label: "Теория", placeholder: "Введите теорию", ...l }) }),
    /* @__PURE__ */ e(p, { name: "theory_volume", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Z, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...l }) }),
    /* @__PURE__ */ e(p, { name: "practice", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(L, { label: "Практика", placeholder: "Введите практику", ...l }) }),
    /* @__PURE__ */ e(p, { name: "practice_volume", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Z, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...l }) })
  ] }) });
}, zr = Q(J({
  url: "/api/rest/program-doc-plans",
  displayField: "theme"
}), Or, {
  title: "Новая тема"
}), jr = i.object({
  program_plans: i.array(i.string())
}), Rr = () => {
  const {
    params: {
      id: t
    }
  } = je(), r = M({
    schema: jr
  });
  return /* @__PURE__ */ e("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ e(k, { form: r, children: /* @__PURE__ */ e(p, { name: "program_plans", control: r.control, render: ({
    field: s
  }) => /* @__PURE__ */ e(zr, { ...s, doc_id: t, multiple: !0, label: "Темы" }) }) }) });
}, Pr = i.object({
  control_type_id: i.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), Ir = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-forms", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: Pr,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "control_type_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", control: o.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, Fr = Q(J({
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), Ir, {
  title: "Новая аттестационная форма"
}), Mr = i.object({
  program_att_forms: i.array(i.string())
}), qr = () => {
  const t = M({
    schema: Mr
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_att_forms", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(Fr, { ...r, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, Nr = i.object({
  criterion_type_id: i.number({
    required_error: "Заполните тип критерия"
  }),
  description: i.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), Wr = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-criteria", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: Nr,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "criterion_type_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", control: o.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, Lr = Q(J({
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), Wr, {
  title: "Новый критерий оценки учебных результатов"
}), Vr = i.object({
  program_criteria: i.array(i.string())
}), $r = () => {
  const t = M({
    schema: Vr
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_criteria", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(Lr, { ...r, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, Yr = i.object({
  method_id: i.number({
    required_error: "Заполните метод"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), Hr = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-fixations", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    mutation: s,
    schema: Yr
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "method_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, Zr = Q(J({
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), Hr, {
  title: "Новый способ фиксации учебных результатов"
}), Ur = i.object({
  program_fixations: i.array(i.string())
}), Xr = () => {
  const t = M({
    schema: Ur
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_fixations", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(Zr, { ...r, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, Gr = i.object({
  base_knowledge: i.string({
    required_error: "Заполните базовые знания"
  }),
  material: i.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), Jr = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-materials", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: Gr,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "base_knowledge", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Базовые знания", placeholder: "Введите базовые знания", ...n }) }),
    /* @__PURE__ */ e(p, { name: "material", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Материалы", placeholder: "Введите материалы", ...n }) })
  ] }) });
}, Kr = Q(J({
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), Jr, {
  title: "Новый критерий оценки учебных результатов"
}), Qr = i.object({
  program_materials: i.array(i.string())
}), en = () => {
  const t = M({
    schema: Qr
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_materials", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(Kr, { ...r, multiple: !0, label: "Методические материалы" }) }) }) });
}, tn = i.object({
  management_type_id: i.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), rn = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-managements", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: tn,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "management_type_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, nn = Q(J({
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), rn, {
  title: "Новая особенность организации образовательной деятельности"
}), on = i.object({
  program_managements: i.array(i.string())
}), an = () => {
  const t = M({
    schema: on
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_managements", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(nn, { ...r, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, ln = i.object({
  indoctrination_type_id: i.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), sn = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-indoctrinations", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: ln,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "indoctrination_type_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...n }) })
  ] }) });
}, cn = Q(J({
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), sn, {
  title: "Новая Воспитательная деятельность"
}), dn = i.object({
  program_indoctrinations: i.array(i.string())
}), un = () => {
  const t = M({
    schema: dn
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_indoctrinations", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(cn, { ...r, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, pn = i.object({
  development_type_id: i.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), hn = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-developments", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: pn,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "development_type_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...n }) })
  ] }) });
}, mn = Q(J({
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), hn, {
  title: "Новая развивающая деятельность"
}), fn = i.object({
  program_developments: i.array(i.string())
}), gn = () => {
  const t = M({
    schema: fn
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_developments", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(mn, { ...r, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, bn = () => {
  const t = M({
    schema: i.object({
      staff_description: i.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(k, { tw: "flex flex-col gap-4", form: t, children: /* @__PURE__ */ e(p, { control: t.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ e(Y, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, vn = i.object({
  inventory_type_id: i.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), yn = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-inventories", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: vn,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "inventory_type_id", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ie, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...n }) }),
    /* @__PURE__ */ e(p, { name: "description", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, An = Q(J({
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), yn, {
  title: "Новое материально-техническое обеспечение"
}), _n = i.object({
  program_inventories: i.array(i.string())
}), wn = () => {
  const t = M({
    schema: _n
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_inventories", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(An, { ...r, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, Cn = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.string().optional(),
  isbn: i.string().optional()
}).required({
  title: !0
}), xn = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-information", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: Cn,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "authors", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ e(p, { name: "title", defaultValue: r, control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ e(p, { name: "publisher", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ e(p, { name: "publish_year", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) }),
    /* @__PURE__ */ e(p, { name: "isbn", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...n }) })
  ] }) });
}, En = Q(J({
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), xn, {
  title: "Новое информационное обеспечение"
}), Sn = i.object({
  program_information: i.array(i.string())
}), Dn = () => {
  const t = M({
    schema: Sn
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_information", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(En, { ...r, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, kn = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.string().optional()
}).required({
  title: !0
}), Bn = ({
  onCreate: t,
  search: r
}) => {
  const s = X("/api/rest/program-doc-books", {
    onSuccess: ({
      data: n
    }) => {
      t(n);
    }
  }), o = U({
    schema: kn,
    mutation: s
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => o.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(p, { name: "authors", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ e(p, { name: "title", control: o.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ e(p, { name: "publisher", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(L, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ e(p, { name: "publish_year", control: o.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) })
  ] }) });
}, Tn = Q(J({
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), Bn, {
  title: "Новая литература"
}), On = i.object({
  program_books: i.array(i.string())
}), zn = () => {
  const t = M({
    schema: On
  });
  return /* @__PURE__ */ e("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ e(k, { form: t, children: /* @__PURE__ */ e(p, { name: "program_books", control: t.control, render: ({
    field: r
  }) => /* @__PURE__ */ e(Tn, { ...r, multiple: !0, label: "Список литературы" }) }) }) });
}, jn = i.object({
  number_year: i.coerce.number({
    required_error: "Заполните год"
  }),
  date_start: i.string({
    required_error: "Заполните дата начала обучения"
  }),
  date_end: i.string({
    required_error: "Заполните дата окончания обучения"
  }),
  edu_week_count: i.number({
    required_error: "Заполните количество учебных недель"
  }),
  is_vacations: i.boolean({
    required_error: "Заполните поле"
  }),
  // vacation: z.array(z.string()),
  edu_sessions_per_week: i.number().optional(),
  edu_sessions_per_day: i.number().optional(),
  doc_id: i.string()
}).required({
  number_year: !0,
  date_start: !0,
  date_end: !0,
  edu_week_count: !0,
  is_vacations: !0
}), Rn = ({
  doc_id: t,
  onCreate: r,
  search: s
}) => {
  const o = X("/api/rest/program-doc-schedules", {
    onSuccess: ({
      data: l
    }) => {
      r(l);
    }
  }), n = U({
    schema: jn,
    mutation: o,
    defaultValues: {
      doc_id: t
    }
  });
  return /* @__PURE__ */ e(G, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(K, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ B(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(p, { name: "number_year", defaultValue: Number(s), control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Z, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...l }) }),
    /* @__PURE__ */ e(p, { name: "date_start", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Ee, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...l }) }),
    /* @__PURE__ */ e(p, { name: "date_end", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Ee, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...l }) }),
    /* @__PURE__ */ e(p, { name: "edu_week_count", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Z, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...l }) }),
    /* @__PURE__ */ e(p, { name: "is_vacations", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Ue, { label: "Есть каникулы?", ...l }) }),
    /* @__PURE__ */ e(p, { name: "edu_sessions_per_week", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Z, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...l }) }),
    /* @__PURE__ */ e(p, { name: "edu_sessions_per_day", control: n.control, render: ({
      field: l
    }) => /* @__PURE__ */ e(Z, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...l }) })
  ] }) });
}, Pn = Q(J({
  url: "/api/rest/program-doc-schedules",
  displayField: "number_year"
}), Rn, {
  title: "Новый учебный график"
}), In = i.object({
  program_schedules: i.array(i.string())
}), Fn = () => {
  const {
    params: {
      id: t
    }
  } = je(), r = M({
    schema: In
  });
  return /* @__PURE__ */ e("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ e(k, { form: r, children: /* @__PURE__ */ e(p, { name: "program_schedules", control: r.control, render: ({
    field: s
  }) => /* @__PURE__ */ e(Pn, { ...s, doc_id: t, multiple: !0, label: "Учебный график" }) }) }) });
}, Mn = [{
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
  Component: xr
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Br
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: Rr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: qr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: $r
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: Xr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: en
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: an
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: un
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: gn
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: bn
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: wn
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: Dn
}, {
  title: "Список литературы",
  id: "books",
  Component: zn
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Fn
}, {
  id: "description",
  title: "Утверждение",
  Component: gr
}], qn = i.object({
  min_age: i.coerce.number().nullable(),
  max_age: i.coerce.number().nullable(),
  program_volume: i.coerce.number().nullable(),
  program_duration: i.coerce.number().nullable(),
  edu_sessions_per_week: i.coerce.number().nullable(),
  edu_sessions_per_day: i.coerce.number().nullable(),
  edu_session_hour_limit: i.coerce.number().nullable(),
  break_duration: i.coerce.number().nullable(),
  min_group_size: i.coerce.number().nullable(),
  max_group_size: i.coerce.number().nullable(),
  competence_level_id: i.coerce.number().nullable()
}).passthrough(), Nn = i.object({
  data: i.array(qn).transform((t) => t[0])
}).transform((t) => t.data), Gn = () => {
  const {
    params: {
      id: t
    },
    setTitle: r
  } = je(), s = Yt(), o = Zt(`/api/rest/program-docs/${t}`, {
    schema: Nn,
    refetchOnWindowFocus: !1
  }), n = X("PUT", `/api/rest/program-docs/${t}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      s("/api/rest/program-docs");
    }
  });
  return D.useEffect(() => {
    r(`Конструктор программы #${t}`);
  }, [t, r]), o.isLoading ? /* @__PURE__ */ e(It, { spinning: !0 }) : o.isError ? /* @__PURE__ */ e("div", { children: o.error.message }) : /* @__PURE__ */ e(pr, { steps: Mn, stateKey: "steps_info", mutation: n, values: o.data });
};
export {
  Gn as default
};
