import { j as t, a as S, F as rr, f as ht, S as nr } from "./library-349d48a8.js";
import { r as x, c as ir, R as mt } from "./react-54946355.js";
import { u as or, f as ar, R as sr, a as lr, D as cr, B as we, b as X, c as dr, z as o, T as W, F as h, P as ur, d as ne, e as pr, Y as Ne, g as k, h as Re, i as $, N as U, L as hr, j as ft, k as Y, l as ie, Q as oe, m as We } from "./RootSection-89604b10.js";
import { F as se } from "./icons-6b7f2986.js";
import { l as mr, N as fr, a as G, b as gr } from "./DictionaryCell-7ffb8cbc.js";
import { a as br, T as He, c as Q, f as vr, u as gt, S as yr } from "./index-4b986912.js";
import { u as _r, a as Ar, B as J } from "./mui-02912ce2.js";
import { a as $e, f as wr } from "./faPen-2519e1be.js";
import { u as Ye } from "./useWindowController-b8b5284b.js";
import "./table-e52be9b1.js";
var q = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(q || {});
const Cr = ({
  stepsDefinition: e,
  values: r,
  stateKey: a,
  mutation: i
}) => {
  const [n, l] = x.useState(!1), [d, s] = x.useState({});
  x.useEffect(() => {
    r && a in r && r[a] && s(r[a]);
  }, [r]);
  const f = x.useMemo(() => e.map((O) => ({
    ...O,
    status: d[O.id] ?? q.WAIT
  })), [e, d]), [m, y] = x.useState(f[0]), _ = x.useRef(null), g = x.useMemo(() => f.findIndex((O) => O.id === (m == null ? void 0 : m.id)) || 0, [m]), b = x.useCallback((O) => {
    s((D) => ({
      ...D,
      [m.id]: D[m.id] === q.ERROR && O === q.EDIT ? q.ERROR : O
    }));
  }, [m, s]), A = g === f.length - 1, E = async () => {
    try {
      l(!0), b(q.LOADING), _.current ? await _.current.save() : await i.mutateAsync({
        ...r,
        [a]: {
          ...r[a],
          [m.id]: q.DONE
        }
      });
    } catch {
      b(q.ERROR);
    } finally {
      l(!1);
    }
  }, T = x.useCallback(async () => {
    if (!A)
      try {
        await E(), y(f[g + 1]);
      } catch {
      }
  }, [g, A]), B = x.useCallback(() => {
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
      onClick: B,
      disabled: g === 0
    })
  };
};
var bt = {};
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
})(bt);
var vt = {};
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
})(vt);
var yt = {};
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
})(yt);
const Er = x.createContext(null), qe = {
  didCatch: !1,
  error: null
};
class xr extends x.Component {
  constructor(r) {
    super(r), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = qe;
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
      }), this.setState(qe);
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
    if (i && a.error !== null && Dr(r.resetKeys, n)) {
      var l, d;
      (l = (d = this.props).onReset) === null || l === void 0 || l.call(d, {
        next: n,
        prev: r.resetKeys,
        reason: "keys"
      }), this.setState(qe);
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
    return x.createElement(Er.Provider, {
      value: {
        didCatch: l,
        error: d,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, s);
  }
}
function Dr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== r.length || e.some((a, i) => !Object.is(a, r[i]));
}
const Oe = ({
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
}, children: /* @__PURE__ */ t(se, { ...r }) }), Sr = ({
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
  updatePosition: B,
  setWidth: O,
  setHeight: D
}) => {
  const P = x.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: M,
    height: L
  } = or(), j = x.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, M, L]), K = x.useRef(null);
  return x.useEffect(() => {
    K.current && !K.current.state.resizing && (E ? K.current.updateSize(j ? {
      width: j.width,
      height: j.height
    } : {
      width: M || 0,
      height: L || 0
    }) : K.current.updateSize({
      width: a,
      height: r
    }));
  }, [E, M, L, j, a, r, y]), x.useEffect(() => {
    K.current && (E ? K.current.updatePosition({
      x: (j == null ? void 0 : j.leftOffset) || 0,
      y: (j == null ? void 0 : j.topOffset) || 0
    }) : g && K.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [E, K.current, j, g, y]), x.useEffect(() => {
    e && !j || L && M && L + M > 0 && !g && !E && (B == null || B({
      x: j ? j.leftOffset + j.width / 2 - a / 2 : (M ?? 0) / 2 - a / 2,
      y: j ? j.topOffset + j.height / 2 - r / 2 : (L ?? 0) / 2 - a / 2
    }));
  }, [g, B, j, E, L, M]), e && !j || !L || !L ? null : /* @__PURE__ */ t(
    sr,
    {
      ref: K,
      enableResizing: !E,
      disableDragging: E,
      dragHandleClassName: P,
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
      onResizeStop: (pe, be, ee) => {
        O == null || O(ee.offsetWidth), D == null || D(ee.offsetHeight);
      },
      onDragStop: (pe, be) => {
        B == null || B({
          x: be.lastX,
          y: be.lastY
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
      children: /* @__PURE__ */ S("div", { role: "dialog", onMouseDown: () => {
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
        /* @__PURE__ */ S("div", { className: P, onDoubleClick: () => i && (E ? T == null ? void 0 : T() : A == null ? void 0 : A()), css: [{
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
          /* @__PURE__ */ S("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            _ && /* @__PURE__ */ t(Oe, { icon: yt.faWindowMinimize, onClick: b, transform: "shrink-4" }),
            i && (E ? /* @__PURE__ */ t(Oe, { icon: vt.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: T }) : /* @__PURE__ */ t(Oe, { icon: bt.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: A })),
            d && /* @__PURE__ */ t(Oe, { icon: ar.faXmark, onClick: s })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ t(xr, { fallbackRender: ({
          error: pe
        }) => /* @__PURE__ */ t("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: pe }), children: n }) })
      ] })
    }
  );
}, Ve = ({
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
  }, [r]), y ? ir.createPortal(/* @__PURE__ */ t("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(Sr, { position: f, updatePosition: (g) => {
    m(g);
  }, closable: !0, title: i, width: n, height: l, maximized: d, maximizable: s, onClose: () => {
    a ? a() : _(!1);
  }, children: e }) }), document.body) : null;
}, ae = (e, r, a) => x.forwardRef(({
  multiple: i = !1,
  onChange: n,
  value: l,
  url: d,
  idField: s = cr,
  ...f
}, m) => {
  const y = lr(d, s), [_, g] = x.useState(), [b, A] = x.useState(!1), [E, T] = x.useState(""), B = () => {
    T(""), A(!1);
  }, O = _r(m, g), D = (P) => {
    y(P), n && n(i ? [...l ?? [], P[s]] : P[s]), B();
  };
  return /* @__PURE__ */ S(rr, { children: [
    /* @__PURE__ */ t(e, { ref: O, extraOptionsRenderer: ({
      search: P,
      searchIsLoading: M,
      closePopup: L
    }) => !M && /* @__PURE__ */ t(kr, { search: P, onClick: () => {
      T((P || "").trim()), A(!0), L(), _ == null || _.blur();
    } }), ...f, idField: s, value: l, multiple: i, onChange: n, url: d }),
    /* @__PURE__ */ t(Ve, { open: b, onClose: () => A(!1), ...a, children: /* @__PURE__ */ t(r, { ...f, search: E, onCreate: D }) })
  ] });
}), kr = ({
  search: e,
  onClick: r
}) => /* @__PURE__ */ t("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ S(we, { variant: "outlined", color: "success", icon: $e.faPlus, onClick: r, children: [
  "Создать",
  e && ` «${e}»`
] }) });
var je = {};
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
})(je);
const Tr = ({
  items: e,
  onDelete: r,
  columns: a,
  isLoading: i
}) => {
  const n = Q(), l = br({
    enableSorting: !1,
    isLoading: i,
    columns: [...a, n.actions([{
      icon: je.faTrash,
      key: "delete",
      onClick: (d) => r(d)
    }])],
    data: e || []
  });
  return /* @__PURE__ */ t(He, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: l });
}, le = (e, r) => x.forwardRef((a, i) => {
  const n = x.useCallback(({
    items: l,
    onDelete: d,
    valueCount: s
  }) => /* @__PURE__ */ t(Tr, { items: l, valueCount: s, onDelete: d, columns: r }), [r]);
  return /* @__PURE__ */ t(e, { ref: i, tagListPosition: a.tagListPosition || "bottom", tagListRenderer: n, ...a });
}), _t = mt.createContext(null), Br = ({
  children: e,
  value: r
}) => {
  const [a, i] = mt.useState({}), {
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
  return /* @__PURE__ */ t(_t.Provider, { value: {
    ...r,
    getStepState: l,
    setStepState: d
  }, children: e });
};
function Or() {
  const e = x.useContext(_t);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const V = ({
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
  } = Or(), m = n(), {
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
        [a.id]: q.DONE
      }
    }),
    ...e
  });
  return x.useEffect(() => {
    l({
      errors: g.formState.errors
    });
  }, [g.formState.errors]), x.useEffect(() => {
    mr.isEqual(g.getValues(), d) || (f(q.EDIT), l({
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
var At = {};
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
})(At);
var wt = { exports: {} };
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
              var B = this[T][0];
              B != null && (E[B] = !0);
            }
          for (var O = 0; O < y.length; O++) {
            var D = [].concat(y[O]);
            g && E[D[0]] || (A !== void 0 && (D[5] === void 0 || (D[1] = "@layer".concat(D[5].length > 0 ? " ".concat(D[5]) : "", " {").concat(D[1], "}")), D[5] = A), _ && (D[2] && (D[1] = "@media ".concat(D[2], " {").concat(D[1], "}")), D[2] = _), b && (D[4] ? (D[1] = "@supports (".concat(D[4], ") {").concat(D[1], "}"), D[4] = b) : D[4] = "".concat(b)), m.push(D));
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
        function b(T, B, O, D, P, M) {
          if (M !== y) {
            var L = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw L.name = "Invariant Violation", L;
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
          var B = g[T], O = b.base ? B[0] + b.base : B[0], D = A[O] || 0, P = "".concat(O, " ").concat(D);
          A[O] = D + 1;
          var M = m(P), L = { css: B[1], media: B[2], sourceMap: B[3], supports: B[4], layer: B[5] };
          if (M !== -1)
            f[M].references++, f[M].updater(L);
          else {
            var j = _(L, b);
            b.byIndex = T, f.splice(T, 0, { identifier: P, updater: j, references: 1 });
          }
          E.push(P);
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
            var B = m(A[T]);
            f[B].references--;
          }
          for (var O = y(E, b), D = 0; D < A.length; D++) {
            var P = m(A[D]);
            f[P].references === 0 && (f[P].updater(), f.splice(P, 1));
          }
          A = O;
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
      l.r(d), l.d(d, { DefaultSplitter: () => j, Split: () => It });
      var s = l(359), f = l(701), m = l.n(f), y = l(236), _ = l.n(y), g = l(80), b = l.n(g), A = l(850), E = l.n(A), T = l(182), B = l.n(T), O = l(213), D = l.n(O), P = l(58), M = {};
      M.styleTagTransform = D(), M.setAttributes = E(), M.insert = b().bind(null, "head"), M.domAPI = _(), M.insertStyleElement = B(), m()(P.Z, M), P.Z && P.Z.locals && P.Z.locals;
      const L = (u) => (u % 2 == 0 ? 2 : 3) + "px", j = (u) => {
        const { dragging: c, pixelSize: p, color: v = "silver", hoverColor: w = "gray", dragColor: z = "black" } = u, F = { "--default-splitter-line-margin": (H = p, `${Math.max(0, Math.floor(H / 2) - 1)}px`), "--default-splitter-line-size": L(p), "--default-splitter-line-color": c ? z : v, "--default-splitter-line-hover-color": c ? z : w };
        var H;
        return s.createElement("div", { className: "default-splitter", style: F }, s.createElement("div", { className: "line" }));
      };
      function K() {
        return K = Object.assign ? Object.assign.bind() : function(u) {
          for (var c = 1; c < arguments.length; c++) {
            var p = arguments[c];
            for (var v in p)
              Object.prototype.hasOwnProperty.call(p, v) && (u[v] = p[v]);
          }
          return u;
        }, K.apply(this, arguments);
      }
      function pe(u, c) {
        return pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, v) {
          return p.__proto__ = v, p;
        }, pe(u, c);
      }
      var be = l(652), ee = l.n(be), Ze = function() {
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
              var F = z[w];
              p.call(v, F[1], F[0]);
            }
          }, c;
        }();
      }(), Pe = typeof window < "u" && typeof document < "u" && window.document === document, Ce = l.g !== void 0 && l.g.Math === Math ? l.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Dt = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ce) : function(u) {
        return setTimeout(function() {
          return u(Date.now());
        }, 1e3 / 60);
      }, St = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], kt = typeof MutationObserver < "u", Tt = function() {
        function u() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(c, p) {
            var v = !1, w = !1, z = 0;
            function F() {
              v && (v = !1, c()), w && C();
            }
            function H() {
              Dt(F);
            }
            function C() {
              var N = Date.now();
              if (v) {
                if (N - z < 2)
                  return;
                w = !0;
              } else
                v = !0, w = !1, setTimeout(H, 20);
              z = N;
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
          Pe && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), kt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, u.prototype.disconnect_ = function() {
          Pe && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, u.prototype.onTransitionEnd_ = function(c) {
          var p = c.propertyName, v = p === void 0 ? "" : p;
          St.some(function(w) {
            return !!~v.indexOf(w);
          }) && this.refresh();
        }, u.getInstance = function() {
          return this.instance_ || (this.instance_ = new u()), this.instance_;
        }, u.instance_ = null, u;
      }(), Ue = function(u, c) {
        for (var p = 0, v = Object.keys(c); p < v.length; p++) {
          var w = v[p];
          Object.defineProperty(u, w, { value: c[w], enumerable: !1, writable: !1, configurable: !0 });
        }
        return u;
      }, he = function(u) {
        return u && u.ownerDocument && u.ownerDocument.defaultView || Ce;
      }, Xe = xe(0, 0, 0, 0);
      function Ee(u) {
        return parseFloat(u) || 0;
      }
      function Ge(u) {
        for (var c = [], p = 1; p < arguments.length; p++)
          c[p - 1] = arguments[p];
        return c.reduce(function(v, w) {
          return v + Ee(u["border-" + w + "-width"]);
        }, 0);
      }
      var Bt = typeof SVGGraphicsElement < "u" ? function(u) {
        return u instanceof he(u).SVGGraphicsElement;
      } : function(u) {
        return u instanceof he(u).SVGElement && typeof u.getBBox == "function";
      };
      function Ot(u) {
        return Pe ? Bt(u) ? function(c) {
          var p = c.getBBox();
          return xe(0, 0, p.width, p.height);
        }(u) : function(c) {
          var p = c.clientWidth, v = c.clientHeight;
          if (!p && !v)
            return Xe;
          var w = he(c).getComputedStyle(c), z = function(Z) {
            for (var I = {}, de = 0, ce = ["top", "right", "bottom", "left"]; de < ce.length; de++) {
              var Se = ce[de], fe = Z["padding-" + Se];
              I[Se] = Ee(fe);
            }
            return I;
          }(w), F = z.left + z.right, H = z.top + z.bottom, C = Ee(w.width), N = Ee(w.height);
          if (w.boxSizing === "border-box" && (Math.round(C + F) !== p && (C -= Ge(w, "left", "right") + F), Math.round(N + H) !== v && (N -= Ge(w, "top", "bottom") + H)), !function(Z) {
            return Z === he(Z).document.documentElement;
          }(c)) {
            var re = Math.round(C + F) - p, te = Math.round(N + H) - v;
            Math.abs(re) !== 1 && (C -= re), Math.abs(te) !== 1 && (N -= te);
          }
          return xe(z.left, z.top, C, N);
        }(u) : Xe;
      }
      function xe(u, c, p, v) {
        return { x: u, y: c, width: p, height: v };
      }
      var zt = function() {
        function u(c) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xe(0, 0, 0, 0), this.target = c;
        }
        return u.prototype.isActive = function() {
          var c = Ot(this.target);
          return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
        }, u.prototype.broadcastRect = function() {
          var c = this.contentRect_;
          return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
        }, u;
      }(), Rt = function(u, c) {
        var p, v, w, z, F, H, C, N = (v = (p = c).x, w = p.y, z = p.width, F = p.height, H = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, C = Object.create(H.prototype), Ue(C, { x: v, y: w, width: z, height: F, top: w, right: v + z, bottom: F + w, left: v }), C);
        Ue(this, { target: u, contentRect: N });
      }, jt = function() {
        function u(c, p, v) {
          if (this.activeObservations_ = [], this.observations_ = new Ze(), typeof c != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = c, this.controller_ = p, this.callbackCtx_ = v;
        }
        return u.prototype.observe = function(c) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(c instanceof he(c).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var p = this.observations_;
            p.has(c) || (p.set(c, new zt(c)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, u.prototype.unobserve = function(c) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(c instanceof he(c).Element))
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
              return new Rt(v.target, v.broadcastRect());
            });
            this.callback_.call(c, p, c), this.clearActive();
          }
        }, u.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, u.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, u;
      }(), Qe = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ze(), Je = function u(c) {
        if (!(this instanceof u))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var p = Tt.getInstance(), v = new jt(c, p, this);
        Qe.set(this, v);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(u) {
        Je.prototype[u] = function() {
          var c;
          return (c = Qe.get(this))[u].apply(c, arguments);
        };
      });
      const Pt = Ce.ResizeObserver !== void 0 ? Ce.ResizeObserver : Je;
      var Mt = ["client", "offset", "scroll", "bounds", "margin"];
      function Ke(u) {
        var c = [];
        return Mt.forEach(function(p) {
          u[p] && c.push(p);
        }), c;
      }
      function et(u, c) {
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
      function Ft(u) {
        return u && u.ownerDocument && u.ownerDocument.defaultView || window;
      }
      var Me = function(u) {
        var c, p;
        return p = c = function(v) {
          var w, z;
          function F() {
            for (var C, N = arguments.length, re = new Array(N), te = 0; te < N; te++)
              re[te] = arguments[te];
            return (C = v.call.apply(v, [this].concat(re)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, C._animationFrameID = null, C._resizeObserver = null, C._node = null, C._window = null, C.measure = function(Z) {
              var I = et(C._node, Ke(C.props));
              Z && (I.entry = Z[0].contentRect), C._animationFrameID = C._window.requestAnimationFrame(function() {
                C._resizeObserver !== null && (C.setState({ contentRect: I }), typeof C.props.onResize == "function" && C.props.onResize(I));
              });
            }, C._handleRef = function(Z) {
              C._resizeObserver !== null && C._node !== null && C._resizeObserver.unobserve(C._node), C._node = Z, C._window = Ft(C._node);
              var I = C.props.innerRef;
              I && (typeof I == "function" ? I(C._node) : I.current = C._node), C._resizeObserver !== null && C._node !== null && C._resizeObserver.observe(C._node);
            }, C;
          }
          z = v, (w = F).prototype = Object.create(z.prototype), w.prototype.constructor = w, pe(w, z);
          var H = F.prototype;
          return H.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new Pt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(et(this._node, Ke(this.props))));
          }, H.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, H.render = function() {
            var C = this.props, N = (C.innerRef, C.onResize, function(re, te) {
              if (re == null)
                return {};
              var Z, I, de = {}, ce = Object.keys(re);
              for (I = 0; I < ce.length; I++)
                Z = ce[I], te.indexOf(Z) >= 0 || (de[Z] = re[Z]);
              return de;
            }(C, ["innerRef", "onResize"]));
            return (0, s.createElement)(u, K({}, N, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, F;
        }(s.Component), c.propTypes = { client: ee().bool, offset: ee().bool, scroll: ee().bool, bounds: ee().bool, margin: ee().bool, innerRef: ee().oneOfType([ee().object, ee().func]), onResize: ee().func }, p;
      }(function(u) {
        var c = u.measure, p = u.measureRef, v = u.contentRect;
        return (0, u.children)({ measure: c, measureRef: p, contentRect: v });
      });
      Me.displayName = "Measure", Me.propTypes.children = ee().func;
      const Fe = Me;
      var De = l(672), me = {};
      me.styleTagTransform = D(), me.setAttributes = E(), me.insert = b().bind(null, "head"), me.domAPI = _(), me.insertStyleElement = B(), m()(De.Z, me), De.Z && De.Z.locals && De.Z.locals;
      const It = (u) => {
        const { horizontal: c = !1, initialPrimarySize: p = "50%", minPrimarySize: v = "0px", minSecondarySize: w = "0px", splitterSize: z = "7px", renderSplitter: F, resetOnDoubleClick: H = !1, defaultSplitterColors: C = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: N, onMeasuredSizesChanged: re } = u, [te, Z] = s.useState({ height: 0, width: 0 }), [I, de] = s.useState({ height: 0, width: 0 }), [ce, Se] = s.useState({ height: 0, width: 0 }), fe = s.useMemo(() => c ? te.height : te.width, [c, te]), ke = s.useMemo(() => c ? I.height : I.width, [c, I]), Te = s.useMemo(() => c ? ce.height : ce.width, [c, ce]), [ve, tt] = s.useState(void 0), [Lt, qt] = s.useState(0), [Nt, Wt] = s.useState(0), [Ie, rt] = s.useState(!1);
        s.useEffect(() => {
          N && N(ve !== void 0 ? `${ve}%` : p);
        }, [ve, p]), s.useEffect(() => {
          re && re({ primary: ke, splitter: Te, secondary: fe - (ke + Te) });
        }, [c, fe, ke, Te]);
        const Ht = (R) => {
          R.bounds && de({ height: R.bounds.height, width: R.bounds.width });
        }, $t = (R) => {
          R.bounds && Se({ height: R.bounds.height, width: R.bounds.width });
        }, Yt = (R) => {
          R.currentTarget.setPointerCapture(R.pointerId), qt(c ? R.clientY : R.clientX), Wt(ke), rt(!0);
        }, Vt = (R) => {
          if (R.currentTarget.hasPointerCapture(R.pointerId)) {
            const ye = c ? R.clientY : R.clientX, er = Nt + (ye - Lt), tr = Math.max(0, Math.min(er, fe));
            tt(tr / fe * 100);
          }
        }, Zt = (R) => {
          R.currentTarget.releasePointerCapture(R.pointerId), rt(!1);
        }, Ut = () => {
          H && tt(void 0);
        }, Be = s.Children.toArray(u.children), Xt = Be.length > 0 ? Be[0] : s.createElement("div", null), Gt = Be.length > 1 ? Be[1] : s.createElement("div", null), Le = { primary: ve !== void 0 ? `${ve}%` : p, minPrimary: v ?? "0px", minSecondary: w ?? "0px" }, nt = { pixelSize: Te, horizontal: c, dragging: Ie }, Qt = F ?? (() => s.createElement(j, Object.assign({}, nt, { color: Ie ? C.drag : C.color, hoverColor: Ie ? C.drag : C.hover }))), Jt = c ? "split-container horizontal" : "split-container vertical", Kt = { "--react-split-min-primary": Le.minPrimary, "--react-split-min-secondary": Le.minSecondary, "--react-split-primary": Le.primary, "--react-split-splitter": z };
        return s.createElement(Fe, { bounds: !0, onResize: (R) => {
          R.bounds && Z({ height: R.bounds.height, width: R.bounds.width });
        } }, ({ measureRef: R }) => s.createElement("div", { className: "react-split", ref: R }, s.createElement("div", { className: Jt, style: Kt }, s.createElement("div", { className: "primary" }, s.createElement(Fe, { bounds: !0, onResize: Ht }, ({ measureRef: ye }) => s.createElement("div", { className: "full-content", ref: ye }, Xt))), s.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Yt, onPointerUp: Zt, onPointerMove: Vt, onDoubleClick: Ut }, s.createElement(Fe, { bounds: !0, onResize: $t }, ({ measureRef: ye }) => s.createElement("div", { className: "full-content", ref: ye }, Qt(nt)))), s.createElement("div", { className: "secondary" }, s.createElement("div", { className: "full-content" }, Gt)))));
      };
    })(), d;
  })());
})(wt);
var zr = wt.exports;
const Rr = ({
  children: e,
  ...r
}) => /* @__PURE__ */ t(zr.Split, { defaultSplitterColors: {
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
var Ct = {};
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
})(Ct);
var Ae = {};
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
})(Ae);
var Et = {};
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
})(Et);
var xt = {};
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
})(xt);
const jr = ({
  status: e
}) => fr(e).with(q.DONE, () => /* @__PURE__ */ t(se, { icon: vr.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(q.ACTIVE, () => /* @__PURE__ */ t(se, { mask: Ae.faCircle, icon: wr.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(q.WAIT, () => /* @__PURE__ */ t(se, { mask: Ae.faCircle, icon: xt.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(q.LOADING, () => /* @__PURE__ */ t(se, { icon: ht.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(q.DISABLED, () => /* @__PURE__ */ t(se, { mask: Ae.faCircle, transform: "shrink-8", icon: Et.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(q.ERROR, () => /* @__PURE__ */ t(se, { icon: dr.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(q.EDIT, () => /* @__PURE__ */ t(se, { mask: Ae.faCircle, transform: "shrink-8", icon: Ct.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), Pr = ({
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
  return /* @__PURE__ */ t("li", { onClick: () => n.status !== q.DISABLED ? i == null ? void 0 : i(n) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, d ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : n.status === q.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, d && Ar`
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
                  `], children: /* @__PURE__ */ S("div", { css: {
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
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ S("div", { children: [
      l + 1,
      ". ",
      n.title
    ] }) }),
    /* @__PURE__ */ t(jr, { status: n.status })
  ] }) }, n.id);
}) }) }), Mr = ({
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
  } = Cr({
    stepsDefinition: e,
    mutation: a,
    values: r,
    stateKey: i
  }), {
    Component: b
  } = g;
  return /* @__PURE__ */ t(Br, { value: {
    activeStep: g,
    mutation: a,
    stepFormRef: d,
    stateKey: i,
    values: r,
    setActiveStepStatus: s
  }, children: /* @__PURE__ */ t(G, { bbar: [/* @__PURE__ */ t(we, { icon: At.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ S(we, { ...f(), variant: "contained", color: "success", children: [
    n && /* @__PURE__ */ t(se, { icon: ht.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ S(Rr, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ t(Pr, { activeItem: g, onChange: y, items: l }) }),
    /* @__PURE__ */ S("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ S("h1", { css: {
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
}, Fr = o.object({
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
}).required(), Ir = () => {
  const e = V({
    schema: Fr
  });
  return /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ t(W, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ur, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ne, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (a) => a.filter(({
      id: i
    }) => i === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(pr, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(ne, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ t(Ne, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ t(W, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, Lr = o.object({
  protocol_number: o.string().nullish(),
  protocol_date: o.string().nullish(),
  decree_number: o.string().nullish(),
  decree_date: o.string().nullish(),
  authors: o.string().nullish(),
  comment: o.string().nullish()
}), qr = () => {
  const e = V({
    schema: Lr
  });
  return /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(h, { control: e.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(W, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(Re, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(W, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(Re, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ t(h, { control: e.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ t($, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Nr = o.object({
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
}), Wr = () => {
  const e = V({
    schema: Nr
  });
  return /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(hr, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ S("div", { css: {
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
    }) => /* @__PURE__ */ t(ne, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки" }) }),
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
    }) => /* @__PURE__ */ t(ne, { dictionary: "educationForm", ...r, label: "Форма обучения" }) }),
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
    }) => /* @__PURE__ */ t(ft, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, Hr = o.object({
  explanatory_note: o.string().nullish(),
  program_relevance: o.string().nullish(),
  pedagogical_expediency: o.string().nullish(),
  distinctive_features: o.string().nullish(),
  actual: o.string().nullish()
}), $r = () => {
  const e = V({
    schema: Hr
  });
  return /* @__PURE__ */ S(k, { css: {
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
  }).min(1, "Заполните наименование")
}).required({
  category_id: !0,
  title: !0
});
const Yr = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-results", {
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
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "category_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Наименование", placeholder: "Введите наименование", ...n }) })
  ] }) });
}, it = Q(), Vr = le(ie(ae(oe, Yr, {
  title: "Новый планируемый результат"
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [it.dictionary("category_id", "programDocCategories", "Категория"), it.display("title", "Наименование")]), Zr = o.object({
  program_results: o.array(o.string())
}), Ur = () => {
  const e = V({
    schema: Zr
  });
  return /* @__PURE__ */ t(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ t(h, { name: "program_results", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Vr, { ...r, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Xr = o.object({
  title: o.string({
    required_error: "Введите наименование"
  }).min(1, "Заполните наименование")
}).required({
  title: !0
}), Gr = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    mutation: a,
    schema: Xr
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ t(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: /* @__PURE__ */ t(h, { name: "title", control: i.control, defaultValue: r, render: ({
    field: n
  }) => /* @__PURE__ */ t(W, { label: "Наименование", placeholder: "Введите наименование задачи", ...n }) }) }) });
}, Qr = ie(ae(oe, Gr, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Jr = o.object({
  mission: o.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: o.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: o.array(o.string())
}).required({
  goal: !0
}), Kr = () => {
  const e = V({
    schema: Jr
  });
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ S(k, { css: {
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
    }) => /* @__PURE__ */ t(Qr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
  ] }) });
}, en = o.object({
  theme: o.string({
    required_error: "Заполните тему"
  }).min(1, "Заполните тему"),
  theory: o.string().optional(),
  theory_volume: o.number().optional(),
  practice: o.string().optional(),
  practice_volume: o.number().optional(),
  sort_index: o.number(),
  doc_id: o.string()
}), tn = ({
  doc_id: e,
  onCreate: r,
  onSubmit: a,
  onError: i
}) => {
  const n = Y("/api/rest/program-doc-plans", {
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
    schema: en,
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
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => l.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: l, children: [
    /* @__PURE__ */ t(h, { name: "theme", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(W, { label: "Тема", placeholder: "Введите тему", ...d }) }),
    /* @__PURE__ */ t(h, { name: "theory", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(W, { label: "Теория", placeholder: "Введите теорию", ...d }) }),
    /* @__PURE__ */ t(h, { name: "theory_volume", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...d }) }),
    /* @__PURE__ */ t(h, { name: "practice", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(W, { label: "Практика", placeholder: "Введите практику", ...d }) }),
    /* @__PURE__ */ t(h, { name: "practice_volume", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...d }) })
  ] }) });
}, ge = Q(), rn = () => {
  const {
    params: {
      id: e
    }
  } = Ye(), [r, a] = x.useState(!1), [i, n] = x.useState(!1), l = Y("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      y();
    }
  }), d = [ge.display("theme", "Тема"), ge.display("theory", "Теория"), ge.display("theory_volume", "Объём теории"), ge.display("practice", "Практика"), ge.display("practice_volume", "Объём практики"), ge.actions([{
    key: "download",
    icon: je.faTrash,
    tooltip: "Удалить тему",
    onClick: async (_) => {
      l.mutate({
        id: _.id
      });
    }
  }])], s = gt("/api/rest/program-doc-plans", d, {
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
  }, []), m = We(), y = () => m("/api/rest/program-doc-plans");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ S("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ S("div", { children: [
      /* @__PURE__ */ S(we, { variant: "outlined", onClick: () => a((_) => !_), color: "success", children: [
        /* @__PURE__ */ t(se, { icon: $e.faPlus }),
        "Добавить тему"
      ] }),
      /* @__PURE__ */ t(Ve, { title: "Новая тема", onClose: () => a(!1), open: r, children: /* @__PURE__ */ t(tn, { doc_id: e, onCreate: f, onSubmit: () => n(!0), onError: () => n(!1) }) })
    ] }),
    /* @__PURE__ */ t(He, { border: !0, table: s })
  ] }) });
}, nn = o.object({
  control_type_id: o.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: o.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  control_type_id: !0,
  description: !0
}), on = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-forms", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: nn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "control_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, ot = Q(), an = le(ie(ae(oe, on, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [ot.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), ot.display("description", "Описание", {
  size: 200
})]), sn = o.object({
  program_att_forms: o.array(o.string())
}), ln = () => {
  const e = V({
    schema: sn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_att_forms", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(an, { ...r, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, cn = o.object({
  criterion_type_id: o.number({
    required_error: "Заполните тип критерия"
  }),
  description: o.string({
    required_error: "Заполните описание критерия"
  }).min(1, "Заполните описание")
}).required({
  criterion_type_id: !0
}), dn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-criteria", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: cn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "criterion_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, at = Q(), un = le(ie(ae(oe, dn, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [at.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), at.display("description", "Критерий")]), pn = o.object({
  program_criteria: o.array(o.string())
}), hn = () => {
  const e = V({
    schema: pn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_criteria", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(un, { ...r, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, mn = o.object({
  method_id: o.number({
    required_error: "Заполните метод"
  }),
  description: o.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  method_id: !0,
  description: !0
}), fn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-fixations", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    mutation: a,
    schema: mn
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "method_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, st = Q(), gn = le(ie(ae(oe, fn, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [st.dictionary("method_id", "programDocMethodTypes", "Метод"), st.display("description", "Описание способа фиксации")]), bn = o.object({
  program_fixations: o.array(o.string())
}), vn = () => {
  const e = V({
    schema: bn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_fixations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(gn, { ...r, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, yn = o.object({
  base_knowledge: o.string({
    required_error: "Заполните базовые знания"
  }),
  material: o.string({
    required_error: "Заполните материалы"
  }).min(1, "Заполните материалы")
}).required({
  base_knowledge: !0,
  material: !0
}), _n = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-materials", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: yn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "base_knowledge", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Базовые знания", placeholder: "Введите базовые знания", ...n }) }),
    /* @__PURE__ */ t(h, { name: "material", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Материалы", placeholder: "Введите материалы", ...n }) })
  ] }) });
}, lt = Q(), An = le(ie(ae(oe, _n, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [lt.display("base_knowledge", "Базовые знания"), lt.display("material", "Материалы")]), wn = o.object({
  program_materials: o.array(o.string())
}), Cn = () => {
  const e = V({
    schema: wn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_materials", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(An, { ...r, multiple: !0, label: "Методические материалы" }) }) }) });
}, En = o.object({
  management_type_id: o.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  management_type_id: !0
}), xn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-managements", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: En,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "management_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, ct = Q(), Dn = le(ie(ae(oe, xn, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [ct.dictionary("management_type_id", "programDocManagementTypes", "Тип"), ct.display("description", "Описание")]), Sn = o.object({
  program_managements: o.array(o.string())
}), kn = () => {
  const e = V({
    schema: Sn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_managements", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Dn, { ...r, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, Tn = o.object({
  indoctrination_type_id: o.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  indoctrination_type_id: !0
}), Bn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-indoctrinations", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Tn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "indoctrination_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...n }) })
  ] }) });
}, dt = Q(), On = le(ie(ae(oe, Bn, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [dt.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), dt.display("description", "Описание")]), zn = o.object({
  program_indoctrinations: o.array(o.string())
}), Rn = () => {
  const e = V({
    schema: zn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_indoctrinations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(On, { ...r, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, jn = o.object({
  development_type_id: o.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: o.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  development_type_id: !0
}), Pn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-developments", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: jn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "development_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...n }) })
  ] }) });
}, ut = Q(), Mn = le(ie(ae(oe, Pn, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [ut.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), ut.display("description", "Развивающая деятельность")]), Fn = o.object({
  program_developments: o.array(o.string())
}), In = () => {
  const e = V({
    schema: Fn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_developments", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Mn, { ...r, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, Ln = () => {
  const e = V({
    schema: o.object({
      staff_description: o.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ t(k, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ t(h, { control: e.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ t($, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, qn = o.object({
  inventory_type_id: o.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: o.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  inventory_type_id: !0,
  description: !0
}), Nn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-inventories", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: qn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "inventory_type_id", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(ne, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...n }) }),
    /* @__PURE__ */ t(h, { name: "description", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t($, { label: "Описание", placeholder: "Введите описание", ...n }) })
  ] }) });
}, pt = Q(), Wn = le(ie(ae(oe, Nn, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [pt.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), pt.display("description", "Описание")]), Hn = o.object({
  program_inventories: o.array(o.string())
}), $n = () => {
  const e = V({
    schema: Hn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_inventories", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Wn, { ...r, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, Yn = o.object({
  authors: o.string().optional(),
  title: o.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименование"),
  publisher: o.string().optional(),
  publish_year: o.string().optional(),
  isbn: o.string().optional()
}).required({
  title: !0
}), Vn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-information", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Yn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "authors", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", defaultValue: r, control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publisher", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publish_year", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Ne, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) }),
    /* @__PURE__ */ t(h, { name: "isbn", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...n }) })
  ] }) });
}, _e = Q(), Zn = le(ie(ae(oe, Vn, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [_e.display("title", "Наименование"), _e.display("authors", "Авторы"), _e.display("publisher", "Издательство"), _e.display("publish_year", "Год издательства"), _e.display("isbn", "ISBN")]), Un = o.object({
  program_information: o.array(o.string())
}), Xn = () => {
  const e = V({
    schema: Un
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_information", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Zn, { ...r, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, Gn = o.object({
  authors: o.string().optional(),
  title: o.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименования"),
  publisher: o.string().optional(),
  publish_year: o.string().optional()
}).required({
  title: !0
}), Qn = ({
  onCreate: e,
  search: r
}) => {
  const a = Y("/api/rest/program-doc-books", {
    onSuccess: ({
      data: n
    }) => {
      e(n);
    }
  }), i = X({
    schema: Gn,
    mutation: a
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(h, { name: "authors", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Авторы", placeholder: "Введите авторов", ...n }) }),
    /* @__PURE__ */ t(h, { name: "title", control: i.control, defaultValue: r, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Наименование", placeholder: "Введите наименование", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publisher", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(W, { label: "Издательство", placeholder: "Введите издательство", ...n }) }),
    /* @__PURE__ */ t(h, { name: "publish_year", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ t(Ne, { label: "Год издательства", placeholder: "Выберите год издательства", ...n }) })
  ] }) });
}, ze = Q(), Jn = le(ie(ae(oe, Qn, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [ze.display("title", "Наименование"), ze.display("authors", "Авторы"), ze.display("publisher", "Издательство"), ze.display("publish_year", "Год издательства")]), Kn = o.object({
  program_books: o.array(o.string())
}), ei = () => {
  const e = V({
    schema: Kn
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(k, { form: e, children: /* @__PURE__ */ t(h, { name: "program_books", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Jn, { ...r, multiple: !0, label: "Список литературы" }) }) }) });
}, ti = o.object({
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
}), ri = ({
  doc_id: e,
  onCreate: r,
  onSubmit: a,
  onError: i
}) => {
  const n = Y("/api/rest/program-doc-schedules", {
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
    schema: ti,
    mutation: n,
    defaultValues: {
      doc_id: e
    }
  });
  return /* @__PURE__ */ t(G, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(J, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => l.submit(), children: "Создать" }) }), children: /* @__PURE__ */ S(k, { css: {
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
    }) => /* @__PURE__ */ t(Re, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...d }) }),
    /* @__PURE__ */ t(h, { name: "date_end", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(Re, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...d }) }),
    /* @__PURE__ */ t(h, { name: "edu_week_count", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...d }) }),
    /* @__PURE__ */ t(h, { name: "is_vacations", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(ft, { label: "Есть каникулы?", ...d }) }),
    /* @__PURE__ */ t(h, { name: "edu_sessions_per_week", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...d }) }),
    /* @__PURE__ */ t(h, { name: "edu_sessions_per_day", control: l.control, render: ({
      field: d
    }) => /* @__PURE__ */ t(U, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...d }) })
  ] }) });
}, ue = Q(), ni = () => {
  const {
    params: {
      id: e
    }
  } = Ye(), [r, a] = x.useState(!1), [i, n] = x.useState(!1), l = Y("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      y();
    }
  }), d = [
    ue.display("number_year", "Год обучения (по порядку)"),
    ue.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    ue.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    ue.display("edu_week_count", "Учебных недель"),
    ue.boolean("is_vacations", "Есть каникулы"),
    ue.display("edu_sessions_per_week", "Количество занятий в неделю"),
    ue.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    ue.actions([{
      key: "download",
      icon: je.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (_) => {
        l.mutate({
          id: _.id
        });
      }
    }])
  ], s = gt("/api/rest/program-doc-schedules", d, {
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
  }, []), m = We(), y = () => m("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ S("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ S("div", { children: [
      /* @__PURE__ */ S(we, { variant: "outlined", onClick: () => a((_) => !_), color: "success", children: [
        /* @__PURE__ */ t(se, { icon: $e.faPlus }),
        "Добавить"
      ] }),
      /* @__PURE__ */ t(Ve, { title: "Новый учебный график", onClose: () => a(!1), open: r, children: /* @__PURE__ */ t(ri, { doc_id: e, onCreate: f, onSubmit: () => n(!0), onError: () => n(!1) }) })
    ] }),
    /* @__PURE__ */ t(He, { border: !0, table: s })
  ] }) });
}, ii = [{
  id: "general",
  title: "Основное",
  Component: Ir
}, {
  id: "params",
  title: "Параметры",
  Component: Wr
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: $r
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Ur
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Kr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: rn
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: ln
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: hn
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: vn
}, {
  id: "materials",
  title: "Методические материалы",
  Component: Cn
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: kn
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: Rn
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: In
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: Ln
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: $n
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: Xn
}, {
  title: "Список литературы",
  id: "books",
  Component: ei
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: ni
}, {
  id: "description",
  title: "Утверждение",
  Component: qr
}], oi = o.object({
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
}).passthrough(), ai = o.object({
  data: o.array(oi).transform((e) => e[0])
}).transform((e) => e.data), bi = () => {
  const {
    params: {
      id: e
    },
    setTitle: r
  } = Ye(), a = We(), i = gr(`/api/rest/program-docs/${e}`, {
    schema: ai
  }), n = Y("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      a("/api/rest/program-docs");
    }
  });
  return x.useEffect(() => {
    r(`Конструктор программы #${e}`);
  }, [e, r]), i.isLoading ? /* @__PURE__ */ t(nr, { spinning: !0 }) : i.isError ? /* @__PURE__ */ t(yr, { type: "error", title: i.error.message }) : /* @__PURE__ */ t(Mr, { steps: ii, stateKey: "steps_info", mutation: n, values: i.data });
};
export {
  bi as default
};
