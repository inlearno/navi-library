import { j as t, a as D, F as Ht, f as Je, S as Yt } from "./library-b520397f.js";
import { r as x, c as Vt, R as Qe } from "./react-54946355.js";
import { u as $t, f as Zt, R as Ut, D as Xt, a as X, b as Gt, B as De, z as o, T as N, F as h, P as Jt, c as re, d as Qt, Y as Pe, e as B, g as ke, h as Y, N as U, L as Kt, i as Ke, j as V, k as ne, l as Me } from "./RootSection-2582b37e.js";
import { F as oe } from "./icons-6b7f2986.js";
import { l as er, P as G, a as tr } from "./useDictionary-d9296957.js";
import { u as rr, a as nr, B as J } from "./mui-02912ce2.js";
import { f as ir, a as et } from "./faPen-2519e1be.js";
import { N as or, f as ar, u as tt, T as rt, c as nt } from "./index-2888c0cb.js";
import { u as Fe } from "./useWindowController-3f6bf528.js";
import "./table-e52be9b1.js";
var I = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(I || {});
const sr = ({
  stepsDefinition: e,
  values: r,
  stateKey: a,
  mutation: i
}) => {
  const [n, l] = x.useState(!1), [d, s] = x.useState({});
  x.useEffect(() => {
    r && a in r && r[a] && s(r[a]);
  }, [r]);
  const f = x.useMemo(() => e.map((k) => ({
    ...k,
    status: d[k.id] ?? I.WAIT
  })), [e, d]), [m, y] = x.useState(f[0]), _ = x.useRef(null), g = x.useMemo(() => f.findIndex((k) => k.id === (m == null ? void 0 : m.id)) || 0, [m]), b = x.useCallback((k) => {
    s((S) => ({
      ...S,
      [m.id]: S[m.id] === I.ERROR && k === I.EDIT ? I.ERROR : k
    }));
  }, [m, s]), A = g === f.length - 1, E = async () => {
    try {
      l(!0), b(I.LOADING), _.current ? await _.current.save() : await i.mutateAsync({
        ...r,
        [a]: {
          ...r[a],
          [m.id]: I.DONE
        }
      });
    } catch {
      b(I.ERROR);
    } finally {
      l(!1);
    }
  }, T = x.useCallback(async () => {
    if (!A)
      try {
        await E(), y(f[g + 1]);
      } catch {
      }
  }, [g, A]), O = x.useCallback(() => {
    g !== 0 && y(f[g - 1]);
  }, [g]);
  return {
    steps: f,
    stepFormRef: _,
    isSubmitting: n,
    setActiveStepStatus: b,
    getNextButtonProps: () => ({
      onClick: A ? E : T,
      disabled: n
    }),
    activeStep: m,
    activeStepIndex: g,
    setActiveStep: y,
    getPrevButtonProps: () => ({
      onClick: O,
      disabled: g === 0
    })
  };
};
var it = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "up-right-and-down-left-from-center", i = 512, n = 512, l = ["expand-alt"], d = "f424", s = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(it);
var ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "down-left-and-up-right-to-center", i = 512, n = 512, l = ["compress-alt"], d = "f422", s = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(ot);
var at = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "window-minimize", i = 512, n = 512, l = [128469], d = "f2d1", s = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(at);
const lr = x.createContext(null), je = {
  didCatch: !1,
  error: null
};
class cr extends x.Component {
  constructor(r) {
    super(r), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = je;
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
      for (var a, i, n = arguments.length, l = new Array(n), d = 0; d < n; d++)
        l[d] = arguments[d];
      (a = (i = this.props).onReset) === null || a === void 0 || a.call(i, {
        args: l,
        reason: "imperative-api"
      }), this.setState(je);
    }
  }
  componentDidCatch(r, a) {
    var i, n;
    (i = (n = this.props).onError) === null || i === void 0 || i.call(n, r, a);
  }
  componentDidUpdate(r, a) {
    const {
      didCatch: i
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (i && a.error !== null && dr(r.resetKeys, n)) {
      var l, d;
      (l = (d = this.props).onReset) === null || l === void 0 || l.call(d, {
        next: n,
        prev: r.resetKeys,
        reason: "keys"
      }), this.setState(je);
    }
  }
  render() {
    const {
      children: r,
      fallbackRender: a,
      FallbackComponent: i,
      fallback: n
    } = this.props, {
      didCatch: l,
      error: d
    } = this.state;
    let s = r;
    if (l) {
      const f = {
        error: d,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof a == "function")
        s = a(f);
      else if (i)
        s = x.createElement(i, f);
      else if (n === null || x.isValidElement(n))
        s = n;
      else
        throw d;
    }
    return x.createElement(lr.Provider, {
      value: {
        didCatch: l,
        error: d,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, s);
  }
}
function dr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== r.length || e.some((a, i) => !Object.is(a, r[i]));
}
const Se = ({
  onClick: e,
  ...r
}) => /* @__PURE__ */ t("div", { role: "button", onClick: e, onMouseDown: (a) => a.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ t(oe, { ...r }) }), ur = ({
  bounds: e,
  height: r = 500,
  width: a = 600,
  maximizable: i = !1,
  children: n,
  title: l,
  closable: d = !1,
  onClose: s,
  focused: f = !0,
  onFocus: m,
  folded: y = !1,
  foldable: _ = !1,
  position: g,
  onFold: b,
  onMaximize: A,
  maximized: E,
  onMinimize: T,
  updatePosition: O,
  setWidth: k,
  setHeight: S
}) => {
  const q = x.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: M,
    height: W
  } = $t(), j = x.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, M, W]), Q = x.useRef(null);
  return x.useEffect(() => {
    Q.current && !Q.current.state.resizing && (E ? Q.current.updateSize(j ? {
      width: j.width,
      height: j.height
    } : {
      width: M || 0,
      height: W || 0
    }) : Q.current.updateSize({
      width: a,
      height: r
    }));
  }, [E, M, W, j, a, r, y]), x.useEffect(() => {
    Q.current && (E ? Q.current.updatePosition({
      x: (j == null ? void 0 : j.leftOffset) || 0,
      y: (j == null ? void 0 : j.topOffset) || 0
    }) : g && Q.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [E, Q.current, j, g, y]), x.useEffect(() => {
    e && !j || W && M && W + M > 0 && !g && !E && (O == null || O({
      x: j ? j.leftOffset + j.width / 2 - a / 2 : (M ?? 0) / 2 - a / 2,
      y: j ? j.topOffset + j.height / 2 - r / 2 : (W ?? 0) / 2 - a / 2
    }));
  }, [g, O, j, E, W, M]), e && !j || !W || !W ? null : /* @__PURE__ */ t(
    Ut,
    {
      ref: Q,
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
      onResizeStop: (ce, me, K) => {
        k == null || k(K.offsetWidth), S == null || S(K.offsetHeight);
      },
      onDragStop: (ce, me) => {
        O == null || O({
          x: me.lastX,
          y: me.lastY
        });
      },
      default: {
        height: r,
        width: a,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ D("div", { role: "dialog", onMouseDown: () => {
        !f && m && m();
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
      }, f ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ D("div", { className: q, onDoubleClick: () => i && (E ? T == null ? void 0 : T() : A == null ? void 0 : A()), css: [{
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
        }, f ? {
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
          }, children: l }),
          /* @__PURE__ */ D("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            _ && /* @__PURE__ */ t(Se, { icon: at.faWindowMinimize, onClick: b, transform: "shrink-4" }),
            i && (E ? /* @__PURE__ */ t(Se, { icon: ot.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: T }) : /* @__PURE__ */ t(Se, { icon: it.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: A })),
            d && /* @__PURE__ */ t(Se, { icon: Zt.faXmark, onClick: s })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ t(cr, { fallbackRender: ({
          error: ce
        }) => /* @__PURE__ */ t("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: ce }), children: n }) })
      ] })
    }
  );
}, Ie = ({
  children: e,
  open: r = !1,
  onClose: a,
  title: i,
  width: n,
  height: l,
  maximized: d,
  maximizable: s
}) => {
  const [f, m] = x.useState(void 0), [y, _] = x.useState(r);
  return x.useEffect(() => {
    _(r);
  }, [r]), y ? Vt.createPortal(/* @__PURE__ */ t("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(ur, { position: f, updatePosition: (g) => {
    m(g);
  }, closable: !0, title: i, width: n, height: l, maximized: d, maximizable: s, onClose: () => {
    a ? a() : _(!1);
  }, children: e }) }), document.body) : null;
}, ie = (e, r, a) => x.forwardRef(({
  multiple: i = !1,
  onChange: n,
  value: l,
  idField: d = Xt,
  ...s
}, f) => {
  const [m, y] = x.useState(), [_, g] = x.useState(!1), [b, A] = x.useState(""), E = () => {
    A(""), g(!1);
  }, T = rr(f, y), O = (k) => {
    n && n(i ? [...l ?? [], k[d]] : k[d]), E();
  };
  return /* @__PURE__ */ D(Ht, { children: [
    /* @__PURE__ */ t(e, { ...s, idField: d, value: l, multiple: i, onChange: n, ref: T, extraOptionsRenderer: ({
      search: k,
      searchIsLoading: S,
      closePopup: q
    }) => !S && /* @__PURE__ */ t(pr, { search: k, onClick: () => {
      A((k || "").trim()), g(!0), q(), m == null || m.blur();
    } }) }),
    /* @__PURE__ */ t(Ie, { open: _, onClose: () => g(!1), ...a, children: /* @__PURE__ */ t(r, { ...s, search: b, onCreate: O }) })
  ] });
}), pr = ({
  search: e,
  onClick: r
}) => /* @__PURE__ */ D("li", { css: {
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
] }), st = Qe.createContext(null), hr = ({
  children: e,
  value: r
}) => {
  const [a, i] = Qe.useState({}), {
    activeStep: {
      id: n
    }
  } = r, l = x.useCallback(() => a[n] || {}, [n, a]), d = x.useCallback((s) => i((f) => ({
    ...f,
    [n]: {
      ...f[n],
      ...s
    }
  })), [n, a, i]);
  return /* @__PURE__ */ t(st.Provider, { value: {
    ...r,
    getStepState: l,
    setStepState: d
  }, children: e });
};
function mr() {
  const e = x.useContext(st);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const $ = ({
  ...e
}) => {
  const {
    stepFormRef: r,
    activeStep: a,
    stateKey: i,
    getStepState: n,
    setStepState: l,
    values: d,
    mutation: s,
    setActiveStepStatus: f
  } = mr(), m = n(), {
    errors: y,
    fields: _
  } = m, g = X({
    mutation: s,
    errors: y,
    defaultValues: _ ?? d,
    transformSendData: (b) => ({
      ...b,
      [i]: {
        ...d ? d[i] : {},
        [a.id]: I.DONE
      }
    }),
    ...e
  });
  return x.useEffect(() => {
    l({
      errors: g.formState.errors
    });
  }, [g.formState.errors]), x.useEffect(() => {
    er.isEqual(g.getValues(), d) || (f(I.EDIT), l({
      fields: g.getValues()
    }));
  }, [a, JSON.stringify(g.formState.dirtyFields)]), x.useImperativeHandle(r, () => ({
    save: async () => {
      await g.submit(), l({
        fields: void 0
      });
    }
  })), g;
};
var lt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "arrow-left", i = 448, n = 512, l = [8592], d = "f060", s = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faArrowLeft = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(lt);
var ct = { exports: {} };
(function(e, r) {
  (function(a, i) {
    e.exports = i(x);
  })(self, (a) => (() => {
    var i = { 58: (s, f, m) => {
      m.d(f, { Z: () => A });
      var y = m(864), _ = m.n(y), g = m(352), b = m.n(g)()(_());
      b.push([s.id, `
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
      const A = b;
    }, 672: (s, f, m) => {
      m.d(f, { Z: () => A });
      var y = m(864), _ = m.n(y), g = m(352), b = m.n(g)()(_());
      b.push([s.id, `/* The top-level element of the splitter*/
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
      const A = b;
    }, 352: (s) => {
      s.exports = function(f) {
        var m = [];
        return m.toString = function() {
          return this.map(function(y) {
            var _ = "", g = y[5] !== void 0;
            return y[4] && (_ += "@supports (".concat(y[4], ") {")), y[2] && (_ += "@media ".concat(y[2], " {")), g && (_ += "@layer".concat(y[5].length > 0 ? " ".concat(y[5]) : "", " {")), _ += f(y), g && (_ += "}"), y[2] && (_ += "}"), y[4] && (_ += "}"), _;
          }).join("");
        }, m.i = function(y, _, g, b, A) {
          typeof y == "string" && (y = [[null, y, void 0]]);
          var E = {};
          if (g)
            for (var T = 0; T < this.length; T++) {
              var O = this[T][0];
              O != null && (E[O] = !0);
            }
          for (var k = 0; k < y.length; k++) {
            var S = [].concat(y[k]);
            g && E[S[0]] || (A !== void 0 && (S[5] === void 0 || (S[1] = "@layer".concat(S[5].length > 0 ? " ".concat(S[5]) : "", " {").concat(S[1], "}")), S[5] = A), _ && (S[2] && (S[1] = "@media ".concat(S[2], " {").concat(S[1], "}")), S[2] = _), b && (S[4] ? (S[1] = "@supports (".concat(S[4], ") {").concat(S[1], "}"), S[4] = b) : S[4] = "".concat(b)), m.push(S));
          }
        }, m;
      };
    }, 864: (s) => {
      s.exports = function(f) {
        var m = f[1], y = f[3];
        if (!y)
          return m;
        if (typeof btoa == "function") {
          var _ = btoa(unescape(encodeURIComponent(JSON.stringify(y)))), g = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_), b = "/*# ".concat(g, " */");
          return [m].concat([b]).join(`
`);
        }
        return [m].join(`
`);
      };
    }, 372: (s, f, m) => {
      var y = m(567);
      function _() {
      }
      function g() {
      }
      g.resetWarningCache = _, s.exports = function() {
        function b(T, O, k, S, q, M) {
          if (M !== y) {
            var W = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw W.name = "Invariant Violation", W;
          }
        }
        function A() {
          return b;
        }
        b.isRequired = b;
        var E = { array: b, bigint: b, bool: b, func: b, number: b, object: b, string: b, symbol: b, any: b, arrayOf: A, element: b, elementType: b, instanceOf: A, node: b, objectOf: A, oneOf: A, oneOfType: A, shape: A, exact: A, checkPropTypes: g, resetWarningCache: _ };
        return E.PropTypes = E, E;
      };
    }, 652: (s, f, m) => {
      s.exports = m(372)();
    }, 567: (s) => {
      s.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (s) => {
      var f = [];
      function m(g) {
        for (var b = -1, A = 0; A < f.length; A++)
          if (f[A].identifier === g) {
            b = A;
            break;
          }
        return b;
      }
      function y(g, b) {
        for (var A = {}, E = [], T = 0; T < g.length; T++) {
          var O = g[T], k = b.base ? O[0] + b.base : O[0], S = A[k] || 0, q = "".concat(k, " ").concat(S);
          A[k] = S + 1;
          var M = m(q), W = { css: O[1], media: O[2], sourceMap: O[3], supports: O[4], layer: O[5] };
          if (M !== -1)
            f[M].references++, f[M].updater(W);
          else {
            var j = _(W, b);
            b.byIndex = T, f.splice(T, 0, { identifier: q, updater: j, references: 1 });
          }
          E.push(q);
        }
        return E;
      }
      function _(g, b) {
        var A = b.domAPI(b);
        return A.update(g), function(E) {
          if (E) {
            if (E.css === g.css && E.media === g.media && E.sourceMap === g.sourceMap && E.supports === g.supports && E.layer === g.layer)
              return;
            A.update(g = E);
          } else
            A.remove();
        };
      }
      s.exports = function(g, b) {
        var A = y(g = g || [], b = b || {});
        return function(E) {
          E = E || [];
          for (var T = 0; T < A.length; T++) {
            var O = m(A[T]);
            f[O].references--;
          }
          for (var k = y(E, b), S = 0; S < A.length; S++) {
            var q = m(A[S]);
            f[q].references === 0 && (f[q].updater(), f.splice(q, 1));
          }
          A = k;
        };
      };
    }, 80: (s) => {
      var f = {};
      s.exports = function(m, y) {
        var _ = function(g) {
          if (f[g] === void 0) {
            var b = document.querySelector(g);
            if (window.HTMLIFrameElement && b instanceof window.HTMLIFrameElement)
              try {
                b = b.contentDocument.head;
              } catch {
                b = null;
              }
            f[g] = b;
          }
          return f[g];
        }(m);
        if (!_)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        _.appendChild(y);
      };
    }, 182: (s) => {
      s.exports = function(f) {
        var m = document.createElement("style");
        return f.setAttributes(m, f.attributes), f.insert(m, f.options), m;
      };
    }, 850: (s, f, m) => {
      s.exports = function(y) {
        var _ = m.nc;
        _ && y.setAttribute("nonce", _);
      };
    }, 236: (s) => {
      s.exports = function(f) {
        var m = f.insertStyleElement(f);
        return { update: function(y) {
          (function(_, g, b) {
            var A = "";
            b.supports && (A += "@supports (".concat(b.supports, ") {")), b.media && (A += "@media ".concat(b.media, " {"));
            var E = b.layer !== void 0;
            E && (A += "@layer".concat(b.layer.length > 0 ? " ".concat(b.layer) : "", " {")), A += b.css, E && (A += "}"), b.media && (A += "}"), b.supports && (A += "}");
            var T = b.sourceMap;
            T && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(T)))), " */")), g.styleTagTransform(A, _, g.options);
          })(m, f, y);
        }, remove: function() {
          (function(y) {
            if (y.parentNode === null)
              return !1;
            y.parentNode.removeChild(y);
          })(m);
        } };
      };
    }, 213: (s) => {
      s.exports = function(f, m) {
        if (m.styleSheet)
          m.styleSheet.cssText = f;
        else {
          for (; m.firstChild; )
            m.removeChild(m.firstChild);
          m.appendChild(document.createTextNode(f));
        }
      };
    }, 359: (s) => {
      s.exports = a;
    } }, n = {};
    function l(s) {
      var f = n[s];
      if (f !== void 0)
        return f.exports;
      var m = n[s] = { id: s, exports: {} };
      return i[s](m, m.exports, l), m.exports;
    }
    l.n = (s) => {
      var f = s && s.__esModule ? () => s.default : () => s;
      return l.d(f, { a: f }), f;
    }, l.d = (s, f) => {
      for (var m in f)
        l.o(f, m) && !l.o(s, m) && Object.defineProperty(s, m, { enumerable: !0, get: f[m] });
    }, l.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), l.o = (s, f) => Object.prototype.hasOwnProperty.call(s, f), l.r = (s) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
    }, l.nc = void 0;
    var d = {};
    return (() => {
      l.r(d), l.d(d, { DefaultSplitter: () => j, Split: () => xt });
      var s = l(359), f = l(701), m = l.n(f), y = l(236), _ = l.n(y), g = l(80), b = l.n(g), A = l(850), E = l.n(A), T = l(182), O = l.n(T), k = l(213), S = l.n(k), q = l(58), M = {};
      M.styleTagTransform = S(), M.setAttributes = E(), M.insert = b().bind(null, "head"), M.domAPI = _(), M.insertStyleElement = O(), m()(q.Z, M), q.Z && q.Z.locals && q.Z.locals;
      const W = (u) => (u % 2 == 0 ? 2 : 3) + "px", j = (u) => {
        const { dragging: c, pixelSize: p, color: v = "silver", hoverColor: w = "gray", dragColor: z = "black" } = u, P = { "--default-splitter-line-margin": (H = p, `${Math.max(0, Math.floor(H / 2) - 1)}px`), "--default-splitter-line-size": W(p), "--default-splitter-line-color": c ? z : v, "--default-splitter-line-hover-color": c ? z : w };
        var H;
        return s.createElement("div", { className: "default-splitter", style: P }, s.createElement("div", { className: "line" }));
      };
      function Q() {
        return Q = Object.assign ? Object.assign.bind() : function(u) {
          for (var c = 1; c < arguments.length; c++) {
            var p = arguments[c];
            for (var v in p)
              Object.prototype.hasOwnProperty.call(p, v) && (u[v] = p[v]);
          }
          return u;
        }, Q.apply(this, arguments);
      }
      function ce(u, c) {
        return ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, v) {
          return p.__proto__ = v, p;
        }, ce(u, c);
      }
      var me = l(652), K = l.n(me), Le = function() {
        if (typeof Map < "u")
          return Map;
        function u(c, p) {
          var v = -1;
          return c.some(function(w, z) {
            return w[0] === p && (v = z, !0);
          }), v;
        }
        return function() {
          function c() {
            this.__entries__ = [];
          }
          return Object.defineProperty(c.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), c.prototype.get = function(p) {
            var v = u(this.__entries__, p), w = this.__entries__[v];
            return w && w[1];
          }, c.prototype.set = function(p, v) {
            var w = u(this.__entries__, p);
            ~w ? this.__entries__[w][1] = v : this.__entries__.push([p, v]);
          }, c.prototype.delete = function(p) {
            var v = this.__entries__, w = u(v, p);
            ~w && v.splice(w, 1);
          }, c.prototype.has = function(p) {
            return !!~u(this.__entries__, p);
          }, c.prototype.clear = function() {
            this.__entries__.splice(0);
          }, c.prototype.forEach = function(p, v) {
            v === void 0 && (v = null);
            for (var w = 0, z = this.__entries__; w < z.length; w++) {
              var P = z[w];
              p.call(v, P[1], P[0]);
            }
          }, c;
        }();
      }(), Be = typeof window < "u" && typeof document < "u" && window.document === document, ve = l.g !== void 0 && l.g.Math === Math ? l.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), ht = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ve) : function(u) {
        return setTimeout(function() {
          return u(Date.now());
        }, 1e3 / 60);
      }, mt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ft = typeof MutationObserver < "u", gt = function() {
        function u() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(c, p) {
            var v = !1, w = !1, z = 0;
            function P() {
              v && (v = !1, c()), w && C();
            }
            function H() {
              ht(P);
            }
            function C() {
              var L = Date.now();
              if (v) {
                if (L - z < 2)
                  return;
                w = !0;
              } else
                v = !0, w = !1, setTimeout(H, 20);
              z = L;
            }
            return C;
          }(this.refresh.bind(this));
        }
        return u.prototype.addObserver = function(c) {
          ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
        }, u.prototype.removeObserver = function(c) {
          var p = this.observers_, v = p.indexOf(c);
          ~v && p.splice(v, 1), !p.length && this.connected_ && this.disconnect_();
        }, u.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, u.prototype.updateObservers_ = function() {
          var c = this.observers_.filter(function(p) {
            return p.gatherActive(), p.hasActive();
          });
          return c.forEach(function(p) {
            return p.broadcastActive();
          }), c.length > 0;
        }, u.prototype.connect_ = function() {
          Be && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ft ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, u.prototype.disconnect_ = function() {
          Be && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, u.prototype.onTransitionEnd_ = function(c) {
          var p = c.propertyName, v = p === void 0 ? "" : p;
          mt.some(function(w) {
            return !!~v.indexOf(w);
          }) && this.refresh();
        }, u.getInstance = function() {
          return this.instance_ || (this.instance_ = new u()), this.instance_;
        }, u.instance_ = null, u;
      }(), Ne = function(u, c) {
        for (var p = 0, v = Object.keys(c); p < v.length; p++) {
          var w = v[p];
          Object.defineProperty(u, w, { value: c[w], enumerable: !1, writable: !1, configurable: !0 });
        }
        return u;
      }, de = function(u) {
        return u && u.ownerDocument && u.ownerDocument.defaultView || ve;
      }, We = _e(0, 0, 0, 0);
      function ye(u) {
        return parseFloat(u) || 0;
      }
      function He(u) {
        for (var c = [], p = 1; p < arguments.length; p++)
          c[p - 1] = arguments[p];
        return c.reduce(function(v, w) {
          return v + ye(u["border-" + w + "-width"]);
        }, 0);
      }
      var bt = typeof SVGGraphicsElement < "u" ? function(u) {
        return u instanceof de(u).SVGGraphicsElement;
      } : function(u) {
        return u instanceof de(u).SVGElement && typeof u.getBBox == "function";
      };
      function vt(u) {
        return Be ? bt(u) ? function(c) {
          var p = c.getBBox();
          return _e(0, 0, p.width, p.height);
        }(u) : function(c) {
          var p = c.clientWidth, v = c.clientHeight;
          if (!p && !v)
            return We;
          var w = de(c).getComputedStyle(c), z = function(Z) {
            for (var F = {}, se = 0, ae = ["top", "right", "bottom", "left"]; se < ae.length; se++) {
              var we = ae[se], pe = Z["padding-" + we];
              F[we] = ye(pe);
            }
            return F;
          }(w), P = z.left + z.right, H = z.top + z.bottom, C = ye(w.width), L = ye(w.height);
          if (w.boxSizing === "border-box" && (Math.round(C + P) !== p && (C -= He(w, "left", "right") + P), Math.round(L + H) !== v && (L -= He(w, "top", "bottom") + H)), !function(Z) {
            return Z === de(Z).document.documentElement;
          }(c)) {
            var te = Math.round(C + P) - p, ee = Math.round(L + H) - v;
            Math.abs(te) !== 1 && (C -= te), Math.abs(ee) !== 1 && (L -= ee);
          }
          return _e(z.left, z.top, C, L);
        }(u) : We;
      }
      function _e(u, c, p, v) {
        return { x: u, y: c, width: p, height: v };
      }
      var yt = function() {
        function u(c) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _e(0, 0, 0, 0), this.target = c;
        }
        return u.prototype.isActive = function() {
          var c = vt(this.target);
          return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
        }, u.prototype.broadcastRect = function() {
          var c = this.contentRect_;
          return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
        }, u;
      }(), _t = function(u, c) {
        var p, v, w, z, P, H, C, L = (v = (p = c).x, w = p.y, z = p.width, P = p.height, H = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, C = Object.create(H.prototype), Ne(C, { x: v, y: w, width: z, height: P, top: w, right: v + z, bottom: P + w, left: v }), C);
        Ne(this, { target: u, contentRect: L });
      }, At = function() {
        function u(c, p, v) {
          if (this.activeObservations_ = [], this.observations_ = new Le(), typeof c != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = c, this.controller_ = p, this.callbackCtx_ = v;
        }
        return u.prototype.observe = function(c) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(c instanceof de(c).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var p = this.observations_;
            p.has(c) || (p.set(c, new yt(c)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, u.prototype.unobserve = function(c) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(c instanceof de(c).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var p = this.observations_;
            p.has(c) && (p.delete(c), p.size || this.controller_.removeObserver(this));
          }
        }, u.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, u.prototype.gatherActive = function() {
          var c = this;
          this.clearActive(), this.observations_.forEach(function(p) {
            p.isActive() && c.activeObservations_.push(p);
          });
        }, u.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var c = this.callbackCtx_, p = this.activeObservations_.map(function(v) {
              return new _t(v.target, v.broadcastRect());
            });
            this.callback_.call(c, p, c), this.clearActive();
          }
        }, u.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, u.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, u;
      }(), Ye = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Le(), Ve = function u(c) {
        if (!(this instanceof u))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var p = gt.getInstance(), v = new At(c, p, this);
        Ye.set(this, v);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(u) {
        Ve.prototype[u] = function() {
          var c;
          return (c = Ye.get(this))[u].apply(c, arguments);
        };
      });
      const wt = ve.ResizeObserver !== void 0 ? ve.ResizeObserver : Ve;
      var Ct = ["client", "offset", "scroll", "bounds", "margin"];
      function $e(u) {
        var c = [];
        return Ct.forEach(function(p) {
          u[p] && c.push(p);
        }), c;
      }
      function Ze(u, c) {
        var p = {};
        if (c.indexOf("client") > -1 && (p.client = { top: u.clientTop, left: u.clientLeft, width: u.clientWidth, height: u.clientHeight }), c.indexOf("offset") > -1 && (p.offset = { top: u.offsetTop, left: u.offsetLeft, width: u.offsetWidth, height: u.offsetHeight }), c.indexOf("scroll") > -1 && (p.scroll = { top: u.scrollTop, left: u.scrollLeft, width: u.scrollWidth, height: u.scrollHeight }), c.indexOf("bounds") > -1) {
          var v = u.getBoundingClientRect();
          p.bounds = { top: v.top, right: v.right, bottom: v.bottom, left: v.left, width: v.width, height: v.height };
        }
        if (c.indexOf("margin") > -1) {
          var w = getComputedStyle(u);
          p.margin = { top: w ? parseInt(w.marginTop) : 0, right: w ? parseInt(w.marginRight) : 0, bottom: w ? parseInt(w.marginBottom) : 0, left: w ? parseInt(w.marginLeft) : 0 };
        }
        return p;
      }
      function Et(u) {
        return u && u.ownerDocument && u.ownerDocument.defaultView || window;
      }
      var Te = function(u) {
        var c, p;
        return p = c = function(v) {
          var w, z;
          function P() {
            for (var C, L = arguments.length, te = new Array(L), ee = 0; ee < L; ee++)
              te[ee] = arguments[ee];
            return (C = v.call.apply(v, [this].concat(te)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, C._animationFrameID = null, C._resizeObserver = null, C._node = null, C._window = null, C.measure = function(Z) {
              var F = Ze(C._node, $e(C.props));
              Z && (F.entry = Z[0].contentRect), C._animationFrameID = C._window.requestAnimationFrame(function() {
                C._resizeObserver !== null && (C.setState({ contentRect: F }), typeof C.props.onResize == "function" && C.props.onResize(F));
              });
            }, C._handleRef = function(Z) {
              C._resizeObserver !== null && C._node !== null && C._resizeObserver.unobserve(C._node), C._node = Z, C._window = Et(C._node);
              var F = C.props.innerRef;
              F && (typeof F == "function" ? F(C._node) : F.current = C._node), C._resizeObserver !== null && C._node !== null && C._resizeObserver.observe(C._node);
            }, C;
          }
          z = v, (w = P).prototype = Object.create(z.prototype), w.prototype.constructor = w, ce(w, z);
          var H = P.prototype;
          return H.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new wt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Ze(this._node, $e(this.props))));
          }, H.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, H.render = function() {
            var C = this.props, L = (C.innerRef, C.onResize, function(te, ee) {
              if (te == null)
                return {};
              var Z, F, se = {}, ae = Object.keys(te);
              for (F = 0; F < ae.length; F++)
                Z = ae[F], ee.indexOf(Z) >= 0 || (se[Z] = te[Z]);
              return se;
            }(C, ["innerRef", "onResize"]));
            return (0, s.createElement)(u, Q({}, L, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, P;
        }(s.Component), c.propTypes = { client: K().bool, offset: K().bool, scroll: K().bool, bounds: K().bool, margin: K().bool, innerRef: K().oneOfType([K().object, K().func]), onResize: K().func }, p;
      }(function(u) {
        var c = u.measure, p = u.measureRef, v = u.contentRect;
        return (0, u.children)({ measure: c, measureRef: p, contentRect: v });
      });
      Te.displayName = "Measure", Te.propTypes.children = K().func;
      const Oe = Te;
      var Ae = l(672), ue = {};
      ue.styleTagTransform = S(), ue.setAttributes = E(), ue.insert = b().bind(null, "head"), ue.domAPI = _(), ue.insertStyleElement = O(), m()(Ae.Z, ue), Ae.Z && Ae.Z.locals && Ae.Z.locals;
      const xt = (u) => {
        const { horizontal: c = !1, initialPrimarySize: p = "50%", minPrimarySize: v = "0px", minSecondarySize: w = "0px", splitterSize: z = "7px", renderSplitter: P, resetOnDoubleClick: H = !1, defaultSplitterColors: C = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: L, onMeasuredSizesChanged: te } = u, [ee, Z] = s.useState({ height: 0, width: 0 }), [F, se] = s.useState({ height: 0, width: 0 }), [ae, we] = s.useState({ height: 0, width: 0 }), pe = s.useMemo(() => c ? ee.height : ee.width, [c, ee]), Ce = s.useMemo(() => c ? F.height : F.width, [c, F]), Ee = s.useMemo(() => c ? ae.height : ae.width, [c, ae]), [fe, Ue] = s.useState(void 0), [St, Dt] = s.useState(0), [kt, Bt] = s.useState(0), [ze, Xe] = s.useState(!1);
        s.useEffect(() => {
          L && L(fe !== void 0 ? `${fe}%` : p);
        }, [fe, p]), s.useEffect(() => {
          te && te({ primary: Ce, splitter: Ee, secondary: pe - (Ce + Ee) });
        }, [c, pe, Ce, Ee]);
        const Tt = (R) => {
          R.bounds && se({ height: R.bounds.height, width: R.bounds.width });
        }, Ot = (R) => {
          R.bounds && we({ height: R.bounds.height, width: R.bounds.width });
        }, zt = (R) => {
          R.currentTarget.setPointerCapture(R.pointerId), Dt(c ? R.clientY : R.clientX), Bt(Ce), Xe(!0);
        }, Rt = (R) => {
          if (R.currentTarget.hasPointerCapture(R.pointerId)) {
            const ge = c ? R.clientY : R.clientX, Nt = kt + (ge - St), Wt = Math.max(0, Math.min(Nt, pe));
            Ue(Wt / pe * 100);
          }
        }, jt = (R) => {
          R.currentTarget.releasePointerCapture(R.pointerId), Xe(!1);
        }, Pt = () => {
          H && Ue(void 0);
        }, xe = s.Children.toArray(u.children), Mt = xe.length > 0 ? xe[0] : s.createElement("div", null), Ft = xe.length > 1 ? xe[1] : s.createElement("div", null), Re = { primary: fe !== void 0 ? `${fe}%` : p, minPrimary: v ?? "0px", minSecondary: w ?? "0px" }, Ge = { pixelSize: Ee, horizontal: c, dragging: ze }, It = P ?? (() => s.createElement(j, Object.assign({}, Ge, { color: ze ? C.drag : C.color, hoverColor: ze ? C.drag : C.hover }))), qt = c ? "split-container horizontal" : "split-container vertical", Lt = { "--react-split-min-primary": Re.minPrimary, "--react-split-min-secondary": Re.minSecondary, "--react-split-primary": Re.primary, "--react-split-splitter": z };
        return s.createElement(Oe, { bounds: !0, onResize: (R) => {
          R.bounds && Z({ height: R.bounds.height, width: R.bounds.width });
        } }, ({ measureRef: R }) => s.createElement("div", { className: "react-split", ref: R }, s.createElement("div", { className: qt, style: Lt }, s.createElement("div", { className: "primary" }, s.createElement(Oe, { bounds: !0, onResize: Tt }, ({ measureRef: ge }) => s.createElement("div", { className: "full-content", ref: ge }, Mt))), s.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: zt, onPointerUp: jt, onPointerMove: Rt, onDoubleClick: Pt }, s.createElement(Oe, { bounds: !0, onResize: Ot }, ({ measureRef: ge }) => s.createElement("div", { className: "full-content", ref: ge }, It(Ge)))), s.createElement("div", { className: "secondary" }, s.createElement("div", { className: "full-content" }, Ft)))));
      };
    })(), d;
  })());
})(ct);
var fr = ct.exports;
const gr = ({
  children: e,
  ...r
}) => /* @__PURE__ */ t(fr.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: a,
  dragging: i
}) => /* @__PURE__ */ t("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, a ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, i && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...r, children: e });
var dt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "pencil", i = 512, n = 512, l = [9999, 61504, "pencil-alt"], d = "f303", s = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faPencil = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(dt);
var be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "circle", i = 512, n = 512, l = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], d = "f111", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faCircle = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(be);
var ut = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "lock", i = 448, n = 512, l = [128274], d = "f023", s = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faLock = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(ut);
var pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "far", a = "clock", i = 512, n = 512, l = [128339, "clock-four"], d = "f017", s = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faClock = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(pt);
const br = ({
  status: e
}) => or(e).with(I.DONE, () => /* @__PURE__ */ t(oe, { icon: ar.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(I.ACTIVE, () => /* @__PURE__ */ t(oe, { mask: be.faCircle, icon: ir.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(I.WAIT, () => /* @__PURE__ */ t(oe, { mask: be.faCircle, icon: pt.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(I.LOADING, () => /* @__PURE__ */ t(oe, { icon: Je.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(I.DISABLED, () => /* @__PURE__ */ t(oe, { mask: be.faCircle, transform: "shrink-8", icon: ut.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(I.ERROR, () => /* @__PURE__ */ t(oe, { icon: Gt.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(I.EDIT, () => /* @__PURE__ */ t(oe, { mask: be.faCircle, transform: "shrink-8", icon: dt.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), vr = ({
  items: e,
  activeItem: r,
  className: a,
  onChange: i
}) => /* @__PURE__ */ t("div", { className: a, children: /* @__PURE__ */ t("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((n, l) => {
  const d = (r == null ? void 0 : r.id) === n.id;
  return /* @__PURE__ */ t("li", { onClick: () => n.status !== I.DISABLED ? i == null ? void 0 : i(n) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, d ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : n.status === I.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, d && nr`
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
                  `], children: /* @__PURE__ */ D("div", { css: {
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
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ D("div", { children: [
      l + 1,
      ". ",
      n.title
    ] }) }),
    /* @__PURE__ */ t(br, { status: n.status })
  ] }) }, n.id);
}) }) }), yr = ({
  steps: e,
  values: r,
  mutation: a,
  stateKey: i = "state"
}) => {
  const {
    isSubmitting: n,
    steps: l,
    stepFormRef: d,
    setActiveStepStatus: s,
    getNextButtonProps: f,
    getPrevButtonProps: m,
    setActiveStep: y,
    activeStepIndex: _,
    activeStep: g
  } = sr({
    stepsDefinition: e,
    mutation: a,
    values: r,
    stateKey: i
  }), {
    Component: b
  } = g;
  return /* @__PURE__ */ t(hr, { value: {
    activeStep: g,
    mutation: a,
    stepFormRef: d,
    stateKey: i,
    values: r,
    setActiveStepStatus: s
  }, children: /* @__PURE__ */ t(G, { bbar: [/* @__PURE__ */ t(De, { icon: lt.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ D(De, { ...f(), variant: "contained", color: "success", children: [
    n && /* @__PURE__ */ t(oe, { icon: Je.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ D(gr, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ t(vr, { activeItem: g, onChange: y, items: l }) }),
    /* @__PURE__ */ D("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ D("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        _ + 1,
        ". ",
        g == null ? void 0 : g.title
      ] }),
      /* @__PURE__ */ t("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ t(b, {}) })
    ] })
  ] }) }) });
}, _r = o.object({
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
}).required(), Ar = () => {
  const e = $({
    schema: _r
  });
  return /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(Jt, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(re, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (a) => a.filter(({
      id: i
    }) => i === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(Qt, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(re, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ t(Pe, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, wr = o.object({
  protocol_number: o.string().nullish(),
  protocol_date: o.string().nullish(),
  decree_number: o.string().nullish(),
  decree_date: o.string().nullish(),
  authors: o.string().nullish(),
  comment: o.string().nullish()
}), Cr = () => {
  const e = $({
    schema: wr
  });
  return /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(ke, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(ke, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Er = o.object({
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
}), xr = () => {
  const e = $({
    schema: Er
  });
  return /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(Kt, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ D("div", { css: {
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
      }) => /* @__PURE__ */ t(U, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ t("div", { children: "-" }),
      /* @__PURE__ */ t(h, { control: e.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ t(U, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "competence_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(re, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_volume", render: ({
      field: r
    }) => /* @__PURE__ */ t(U, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_duration", render: ({
      field: r
    }) => /* @__PURE__ */ t(U, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "edu_sessions_per_week", render: ({
      field: r
    }) => /* @__PURE__ */ t(
      U,
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
    }) => /* @__PURE__ */ t(U, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "edu_session_hour_limit", render: ({
      field: r
    }) => /* @__PURE__ */ t(U, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "break_duration", render: ({
      field: r
    }) => /* @__PURE__ */ t(U, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "education_form_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(re, { dictionary: "educationForm", ...r, label: "Форма обучения" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "min_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ t(U, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "max_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ t(U, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "is_one_age_group", render: ({
      field: r
    }) => /* @__PURE__ */ t(Ke, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, Sr = o.object({
  explanatory_note: o.string().nullish(),
  program_relevance: o.string().nullish(),
  pedagogical_expediency: o.string().nullish(),
  distinctive_features: o.string().nullish(),
  actual: o.string().nullish()
}), Dr = () => {
  const e = $({
    schema: Sr
  });
  return /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "explanatory_note", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_relevance", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "pedagogical_expediency", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "distinctive_features", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "actual", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Новизна", placeholder: "Введите новизну", css: {
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
  }).min(1, "Заполните наименование")
}).required({
  category_id: !0,
  title: !0
});
const kr = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-results", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
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
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "category_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Наименование", placeholder: "Введите наименование", ...n }) })
  ] }) });
}, Br = ie(ne({
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), kr, {
  title: "Новый планируемый результат"
}), Tr = o.object({
  program_results: o.array(o.string())
}), Or = () => {
  const e = $({
    schema: Tr
  });
  return /* @__PURE__ */ t(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ t(h, { name: "program_results", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Br, { ...r, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, zr = o.object({
  title: o.string({
    required_error: "Введите наименование"
  }).min(1, "Заполните наименование")
}).required({
  title: !0
}), Rr = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    mutation: a,
    schema: zr
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ t(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: /* @__PURE__ */ t(h, { name: "title", control: i.control, defaultValue: r, render: ({
    field: n
  }) => /* @__PURE__ */ t(N, { label: "Наименование", placeholder: "Введите наименование задачи", ...n }) }) }) });
}, jr = ie(ne({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Rr, {
  title: "Новая задача"
}), Pr = o.object({
  mission: o.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: o.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: o.array(o.string())
}).required({
  goal: !0
}), Mr = () => {
  const e = $({
    schema: Pr
  });
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { name: "mission", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
    /* @__PURE__ */ t(h, { name: "goal", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
    /* @__PURE__ */ t(h, { name: "program_objectives", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(jr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
  ] }) });
};
var qe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "trash", i = 448, n = 512, l = [], d = "f1f8", s = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      i,
      n,
      l,
      d,
      s
    ]
  }, e.faTrash = e.definition, e.prefix = r, e.iconName = a, e.width = i, e.height = n, e.ligatures = l, e.unicode = d, e.svgPathData = s, e.aliases = l;
})(qe);
const Fr = o.object({
  theme: o.string({
    required_error: "Заполните тему"
  }).min(1, "Заполните тему"),
  theory: o.string().optional(),
  theory_volume: o.number().optional(),
  practice: o.string().optional(),
  practice_volume: o.number().optional(),
  sort_index: o.number(),
  doc_id: o.string()
}), Ir = ({
  doc_id: e,
  onCreate: r,
  onSubmit: a,
  onError: i
}) => {
  const n = V("/api/rest/program-doc-plans", {
    onMutate: (d) => {
      a == null || a(d);
    },
    onSuccess: ({
      data: d
    }) => {
      r(d);
    },
    onError: (d) => {
      i == null || i(d);
    }
  }), l = X({
    schema: Fr,
    mutation: n,
    defaultValues: {
      doc_id: e,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => l.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: l, children: [
    /* @__PURE__ */ t(h, { name: "theme", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(N, { label: "Тема", placeholder: "Введите тему", ...d }) }),
    /* @__PURE__ */ t(h, { name: "theory", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(N, { label: "Теория", placeholder: "Введите теорию", ...d }) }),
    /* @__PURE__ */ t(h, { name: "theory_volume", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...d }) }),
    /* @__PURE__ */ t(h, { name: "practice", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(N, { label: "Практика", placeholder: "Введите практику", ...d }) }),
    /* @__PURE__ */ t(h, { name: "practice_volume", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...d }) })
  ] }) });
}, he = nt(), qr = () => {
  const {
    params: {
      id: e
    }
  } = Fe(), [r, a] = x.useState(!1), [i, n] = x.useState(!1), l = V("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      y();
    }
  }), d = [he.display("theme", "Тема"), he.display("theory", "Теория"), he.display("theory_volume", "Объём теории"), he.display("practice", "Практика"), he.display("practice_volume", "Объём практики"), he.actions([{
    key: "download",
    icon: qe.faTrash,
    tooltip: "Удалить тему",
    onClick: async (_) => {
      l.mutate({
        id: _.id
      });
    }
  }])], s = tt("/api/rest/program-doc-plans", d, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: l.isPending || i,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), f = x.useCallback(() => {
    y(), a(!1), n(!1);
  }, []), m = Me(), y = () => m("/api/rest/program-doc-plans");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ D("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ D("div", { children: [
      /* @__PURE__ */ D(De, { variant: "outlined", onClick: () => a((_) => !_), color: "success", children: [
        /* @__PURE__ */ t(oe, { icon: et.faPlus }),
        "Добавить тему"
      ] }),
      /* @__PURE__ */ t(Ie, { title: "Новая тема", onClose: () => a(!1), open: r, children: /* @__PURE__ */ t(Ir, { doc_id: e, onCreate: f, onSubmit: () => n(!0), onError: () => n(!1) }) })
    ] }),
    /* @__PURE__ */ t(rt, { border: !0, table: s })
  ] }) });
}, Lr = o.object({
  control_type_id: o.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: o.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  control_type_id: !0,
  description: !0
}), Nr = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-forms", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Lr,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "control_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, Wr = ie(ne({
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), Nr, {
  title: "Новая аттестационная форма"
}), Hr = o.object({
  program_att_forms: o.array(o.string())
}), Yr = () => {
  const e = $({
    schema: Hr
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_att_forms", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Wr, { ...r, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, Vr = o.object({
  criterion_type_id: o.number({
    required_error: "Заполните тип критерия"
  }),
  description: o.string({
    required_error: "Заполните описание критерия"
  }).min(1, "Заполните описание")
}).required({
  criterion_type_id: !0
}), $r = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-criteria", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Vr,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "criterion_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, Zr = ie(ne({
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), $r, {
  title: "Новый критерий оценки учебных результатов"
}), Ur = o.object({
  program_criteria: o.array(o.string())
}), Xr = () => {
  const e = $({
    schema: Ur
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_criteria", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Zr, { ...r, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, Gr = o.object({
  method_id: o.number({
    required_error: "Заполните метод"
  }),
  description: o.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  method_id: !0,
  description: !0
}), Jr = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-fixations", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    mutation: a,
    schema: Gr
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "method_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, Qr = ie(ne({
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), Jr, {
  title: "Новый способ фиксации учебных результатов"
}), Kr = o.object({
  program_fixations: o.array(o.string())
}), en = () => {
  const e = $({
    schema: Kr
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_fixations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Qr, { ...r, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, tn = o.object({
  base_knowledge: o.string({
    required_error: "Заполните базовые знания"
  }),
  material: o.string({
    required_error: "Заполните материалы"
  }).min(1, "Заполните материалы")
}).required({
  base_knowledge: !0,
  material: !0
}), rn = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-materials", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: tn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "base_knowledge", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Базовые знания", placeholder: "Введите базовые знания", ...n }) }),
    /* @__PURE__ */ t(h, { name: "material", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Материалы", placeholder: "Введите материалы", ...n }) })
  ] }) });
}, nn = ie(ne({
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), rn, {
  title: "Новый методический материал"
}), on = o.object({
  program_materials: o.array(o.string())
}), an = () => {
  const e = $({
    schema: on
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_materials", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(nn, { ...r, multiple: !0, label: "Методические материалы" }) }) }) });
}, sn = o.object({
  management_type_id: o.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  management_type_id: !0
}), ln = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-managements", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: sn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "management_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, cn = ie(ne({
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), ln, {
  title: "Новая особенность организации образовательной деятельности"
}), dn = o.object({
  program_managements: o.array(o.string())
}), un = () => {
  const e = $({
    schema: dn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_managements", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(cn, { ...r, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, pn = o.object({
  indoctrination_type_id: o.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  indoctrination_type_id: !0
}), hn = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-indoctrinations", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: pn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "indoctrination_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...n }) })
  ] }) });
}, mn = ie(ne({
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), hn, {
  title: "Новая Воспитательная деятельность"
}), fn = o.object({
  program_indoctrinations: o.array(o.string())
}), gn = () => {
  const e = $({
    schema: fn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_indoctrinations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(mn, { ...r, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, bn = o.object({
  development_type_id: o.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  development_type_id: !0
}), vn = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-developments", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: bn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "development_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...n }) })
  ] }) });
}, yn = ie(ne({
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), vn, {
  title: "Новая развивающая деятельность"
}), _n = o.object({
  program_developments: o.array(o.string())
}), An = () => {
  const e = $({
    schema: _n
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_developments", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(yn, { ...r, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, wn = () => {
  const e = $({
    schema: o.object({
      staff_description: o.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ t(B, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ t(h, { control: e.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ t(Y, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, Cn = o.object({
  inventory_type_id: o.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: o.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  inventory_type_id: !0,
  description: !0
}), En = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-inventories", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Cn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "inventory_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(re, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Y, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, xn = ie(ne({
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), En, {
  title: "Новое материально-техническое обеспечение"
}), Sn = o.object({
  program_inventories: o.array(o.string())
}), Dn = () => {
  const e = $({
    schema: Sn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_inventories", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(xn, { ...r, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, kn = o.object({
  authors: o.string().optional(),
  title: o.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименование"),
  publisher: o.string().optional(),
  publish_year: o.string().optional(),
  isbn: o.string().optional()
}).required({
  title: !0
}), Bn = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-information", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: kn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "authors", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publisher", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publish_year", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Pe, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) }),
    /* @__PURE__ */ t(h, { name: "isbn", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...n }) })
  ] }) });
}, Tn = ie(ne({
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), Bn, {
  title: "Новое информационное обеспечение"
}), On = o.object({
  program_information: o.array(o.string())
}), zn = () => {
  const e = $({
    schema: On
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_information", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Tn, { ...r, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, Rn = o.object({
  authors: o.string().optional(),
  title: o.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименования"),
  publisher: o.string().optional(),
  publish_year: o.string().optional()
}).required({
  title: !0
}), jn = ({
  onCreate: e,
  search: r
}) => {
  const a = V("/api/rest/program-doc-books", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Rn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "authors", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publisher", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(N, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publish_year", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Pe, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) })
  ] }) });
}, Pn = ie(ne({
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), jn, {
  title: "Новая литература"
}), Mn = o.object({
  program_books: o.array(o.string())
}), Fn = () => {
  const e = $({
    schema: Mn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(B, { form: e, children: /* @__PURE__ */ t(h, { name: "program_books", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Pn, { ...r, multiple: !0, label: "Список литературы" }) }) }) });
}, In = o.object({
  number_year: o.coerce.number({
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
}), qn = ({
  doc_id: e,
  onCreate: r,
  onSubmit: a,
  onError: i
}) => {
  const n = V("/api/rest/program-doc-schedules", {
    onMutate: (d) => {
      a == null || a(d);
    },
    onSuccess: ({
      data: d
    }) => {
      r(d);
    },
    onError: (d) => {
      i == null || i(d);
    }
  }), l = X({
    schema: In,
    mutation: n,
    defaultValues: {
      doc_id: e
    }
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => l.submit(), children: "Создать" }) }), children: /* @__PURE__ */ D(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: l, children: [
    /* @__PURE__ */ t(h, { name: "number_year", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...d }) }),
    /* @__PURE__ */ t(h, { name: "date_start", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(ke, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...d }) }),
    /* @__PURE__ */ t(h, { name: "date_end", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(ke, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...d }) }),
    /* @__PURE__ */ t(h, { name: "edu_week_count", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...d }) }),
    /* @__PURE__ */ t(h, { name: "is_vacations", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(Ke, { label: "Есть каникулы?", ...d }) }),
    /* @__PURE__ */ t(h, { name: "edu_sessions_per_week", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...d }) }),
    /* @__PURE__ */ t(h, { name: "edu_sessions_per_day", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...d }) })
  ] }) });
}, le = nt(), Ln = () => {
  const {
    params: {
      id: e
    }
  } = Fe(), [r, a] = x.useState(!1), [i, n] = x.useState(!1), l = V("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      y();
    }
  }), d = [
    le.display("number_year", "Год обучения (по порядку)"),
    le.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    le.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    le.display("edu_week_count", "Учебных недель"),
    le.boolean("is_vacations", "Есть каникулы"),
    le.display("edu_sessions_per_week", "Количество занятий в неделю"),
    le.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    le.actions([{
      key: "download",
      icon: qe.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (_) => {
        l.mutate({
          id: _.id
        });
      }
    }])
  ], s = tt("/api/rest/program-doc-schedules", d, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: l.isPending || i,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), f = x.useCallback(() => {
    y(), a(!1), n(!1);
  }, []), m = Me(), y = () => m("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ D("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ D("div", { children: [
      /* @__PURE__ */ D(De, { variant: "outlined", onClick: () => a((_) => !_), color: "success", children: [
        /* @__PURE__ */ t(oe, { icon: et.faPlus }),
        "Добавить"
      ] }),
      /* @__PURE__ */ t(Ie, { title: "Новый учебный график", onClose: () => a(!1), open: r, children: /* @__PURE__ */ t(qn, { doc_id: e, onCreate: f, onSubmit: () => n(!0), onError: () => n(!1) }) })
    ] }),
    /* @__PURE__ */ t(rt, { border: !0, table: s })
  ] }) });
}, Nn = [{
  id: "general",
  title: "Основное",
  Component: Ar
}, {
  id: "params",
  title: "Параметры",
  Component: xr
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Dr
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Or
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Mr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: qr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: Yr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: Xr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: en
}, {
  id: "materials",
  title: "Методические материалы",
  Component: an
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: un
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: gn
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: An
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: wn
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: Dn
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: zn
}, {
  title: "Список литературы",
  id: "books",
  Component: Fn
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Ln
}, {
  id: "description",
  title: "Утверждение",
  Component: Cr
}], Wn = o.object({
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
}).passthrough(), Hn = o.object({
  data: o.array(Wn).transform((e) => e[0])
}).transform((e) => e.data), ei = () => {
  const {
    params: {
      id: e
    },
    setTitle: r
  } = Fe(), a = Me(), i = tr(`/api/rest/program-docs/${e}`, {
    schema: Hn,
    refetchOnWindowFocus: !1
  }), n = V("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      a("/api/rest/program-docs");
    }
  });
  return x.useEffect(() => {
    r(`Конструктор программы #${e}`);
  }, [e, r]), i.isLoading ? /* @__PURE__ */ t(Yt, { spinning: !0 }) : i.isError ? /* @__PURE__ */ t("div", { children: i.error.message }) : /* @__PURE__ */ t(yr, { steps: Nn, stateKey: "steps_info", mutation: n, values: i.data });
};
export {
  ei as default
};
