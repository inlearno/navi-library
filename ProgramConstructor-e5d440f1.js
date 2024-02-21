import { j as r, b as Ee, a as p, F as qe, N as Ne, f as we, S as Me } from "./library-0cf44c66.js";
import { r as u, c as Re, R as Ce } from "./react-6f5a8403.js";
import { u as He, f as Ae, R as $e, a as Be, D as Oe, B as F, b as T, c as ze, z as i, T as w, F as s, P as Ve, d as E, e as We, Y as ie, g as h, h as Z, i as x, N as S, L as Ye, j as xe, k as D, l as q, Q as N, m as ae } from "./RootSection-50947b49.js";
import { F as $ } from "./icons-ad9f8a73.js";
import { l as Ue, a as j, b as Qe } from "./DictionaryCell-aea7ff60.js";
import { a as Ge, T as le, c as I, f as Xe, u as De, S as Je } from "./index-1866da9b.js";
import { u as Ke, a as Ze, B as ee } from "./mui-4f485058.js";
import { a as ce, f as er } from "./faPen-2519e1be.js";
import { u as se } from "./useWindowController-aed1c1e2.js";
import "./table-f5369550.js";
const rr = ({
  children: e,
  ...t
}) => /* @__PURE__ */ r(Ee.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: a,
  dragging: n
}) => /* @__PURE__ */ r("div", { css: [{
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
}, n && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...t, children: e });
var v = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(v || {});
const tr = ({
  stepsDefinition: e,
  values: t,
  stateKey: a,
  mutation: n
}) => {
  const [o, c] = u.useState(!1), [l, d] = u.useState({});
  if (e.length === 0)
    throw new Error("No steps defined");
  u.useEffect(() => {
    t && a in t && t[a] && d(t[a]);
  }, [t]);
  const f = u.useMemo(() => e.map((P) => ({
    ...P,
    status: l[P.id] ?? v.WAIT
  })), [e, l]), [g, y] = u.useState(f[0]), b = u.useRef(null), m = u.useMemo(() => f.findIndex((P) => P.id === (g == null ? void 0 : g.id)) || 0, [g]), R = u.useCallback((P) => {
    d((Y) => ({
      ...Y,
      [g.id]: Y[g.id] === v.ERROR && P === v.EDIT ? v.ERROR : P
    }));
  }, [g, d]), L = m === f.length - 1, C = async () => {
    try {
      c(!0), R(v.LOADING), b.current ? await b.current.save() : await n.mutateAsync({
        ...t,
        [a]: {
          ...t[a],
          [g.id]: v.DONE
        }
      });
    } catch {
      R(v.ERROR);
    } finally {
      c(!1);
    }
  }, O = u.useCallback(async () => {
    if (!L)
      try {
        await C(), y(f[m + 1]);
      } catch {
      }
  }, [m, L]), H = u.useCallback(() => {
    m !== 0 && y(f[m - 1]);
  }, [m]);
  return {
    steps: f,
    stepFormRef: b,
    isSubmitting: o,
    setActiveStepStatus: R,
    getNextButtonProps: () => ({
      onClick: L ? C : O,
      disabled: o
    }),
    activeStep: g,
    activeStepIndex: m,
    setActiveStep: y,
    getPrevButtonProps: () => ({
      onClick: H,
      disabled: m === 0
    })
  };
};
var ke = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "up-right-and-down-left-from-center", n = 512, o = 512, c = ["expand-alt"], l = "f424", d = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(ke);
var Se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "down-left-and-up-right-to-center", n = 512, o = 512, c = ["compress-alt"], l = "f422", d = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(Se);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "window-minimize", n = 512, o = 512, c = [128469], l = "f2d1", d = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(Pe);
const or = u.createContext(null), ne = {
  didCatch: !1,
  error: null
};
class nr extends u.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = ne;
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: !0,
      error: t
    };
  }
  resetErrorBoundary() {
    const {
      error: t
    } = this.state;
    if (t !== null) {
      for (var a, n, o = arguments.length, c = new Array(o), l = 0; l < o; l++)
        c[l] = arguments[l];
      (a = (n = this.props).onReset) === null || a === void 0 || a.call(n, {
        args: c,
        reason: "imperative-api"
      }), this.setState(ne);
    }
  }
  componentDidCatch(t, a) {
    var n, o;
    (n = (o = this.props).onError) === null || n === void 0 || n.call(o, t, a);
  }
  componentDidUpdate(t, a) {
    const {
      didCatch: n
    } = this.state, {
      resetKeys: o
    } = this.props;
    if (n && a.error !== null && ir(t.resetKeys, o)) {
      var c, l;
      (c = (l = this.props).onReset) === null || c === void 0 || c.call(l, {
        next: o,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(ne);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: a,
      FallbackComponent: n,
      fallback: o
    } = this.props, {
      didCatch: c,
      error: l
    } = this.state;
    let d = t;
    if (c) {
      const f = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof a == "function")
        d = a(f);
      else if (n)
        d = u.createElement(n, f);
      else if (o === null || u.isValidElement(o))
        d = o;
      else
        throw l;
    }
    return u.createElement(or.Provider, {
      value: {
        didCatch: c,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, d);
  }
}
function ir() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((a, n) => !Object.is(a, t[n]));
}
const J = ({
  onClick: e,
  ...t
}) => /* @__PURE__ */ r("div", { role: "button", onClick: e, onMouseDown: (a) => a.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ r($, { ...t }) }), ar = ({
  bounds: e,
  height: t = 500,
  width: a = 600,
  maximizable: n = !1,
  children: o,
  title: c,
  closable: l = !1,
  onClose: d,
  focused: f = !0,
  onFocus: g,
  folded: y = !1,
  foldable: b = !1,
  position: m,
  onFold: R,
  onMaximize: L,
  maximized: C,
  onMinimize: O,
  updatePosition: H,
  setWidth: P,
  setHeight: Y
}) => {
  const z = u.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: V,
    height: A
  } = He(), _ = u.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, V, A]), W = u.useRef(null);
  return u.useEffect(() => {
    W.current && !W.current.state.resizing && (C ? W.current.updateSize(_ ? {
      width: _.width,
      height: _.height
    } : {
      width: V || 0,
      height: A || 0
    }) : W.current.updateSize({
      width: a,
      height: t
    }));
  }, [C, V, A, _, a, t, y]), u.useEffect(() => {
    W.current && (C ? W.current.updatePosition({
      x: (_ == null ? void 0 : _.leftOffset) || 0,
      y: (_ == null ? void 0 : _.topOffset) || 0
    }) : m && W.current.updatePosition({
      x: m.x,
      y: m.y
    }));
  }, [C, W.current, _, m, y]), u.useEffect(() => {
    e && !_ || A && V && A + V > 0 && !m && !C && (H == null || H({
      x: _ ? _.leftOffset + _.width / 2 - a / 2 : (V ?? 0) / 2 - a / 2,
      y: _ ? _.topOffset + _.height / 2 - t / 2 : (A ?? 0) / 2 - a / 2
    }));
  }, [m, H, _, C, A, V]), e && !_ || !A || !A ? null : /* @__PURE__ */ r(
    $e,
    {
      ref: W,
      enableResizing: !C,
      disableDragging: C,
      dragHandleClassName: z,
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
      onResizeStop: (te, oe, ue) => {
        P == null || P(ue.offsetWidth), Y == null || Y(ue.offsetHeight);
      },
      onDragStop: (te, oe) => {
        H == null || H({
          x: oe.lastX,
          y: oe.lastY
        });
      },
      default: {
        height: t,
        width: a,
        ...m || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ p("div", { role: "dialog", onMouseDown: () => {
        !f && g && g();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, C ? {
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
        /* @__PURE__ */ p("div", { className: z, onDoubleClick: () => n && (C ? O == null ? void 0 : O() : L == null ? void 0 : L()), css: [{
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
        }, !C && {
          cursor: "move"
        }, f ? {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
        } : {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(90 88 173 / var(--tw-bg-opacity))"
        }], children: [
          /* @__PURE__ */ r("div", { css: {
            flex: "1 1 0%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: c }),
          /* @__PURE__ */ p("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            b && /* @__PURE__ */ r(J, { icon: Pe.faWindowMinimize, onClick: R, transform: "shrink-4" }),
            n && (C ? /* @__PURE__ */ r(J, { icon: Se.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: O }) : /* @__PURE__ */ r(J, { icon: ke.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: L })),
            l && /* @__PURE__ */ r(J, { icon: Ae.faXmark, onClick: d })
          ] })
        ] }),
        /* @__PURE__ */ r("div", { css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ r(nr, { fallbackRender: ({
          error: te
        }) => /* @__PURE__ */ r("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: te }), children: o }) })
      ] })
    }
  );
}, de = ({
  children: e,
  open: t = !1,
  onClose: a,
  title: n,
  width: o,
  height: c,
  maximized: l,
  maximizable: d
}) => {
  const [f, g] = u.useState(void 0), [y, b] = u.useState(t);
  return u.useEffect(() => {
    b(t);
  }, [t]), y ? Re.createPortal(/* @__PURE__ */ r("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ r(ar, { position: f, updatePosition: (m) => {
    g(m);
  }, closable: !0, title: n, width: o, height: c, maximized: l, maximizable: d, onClose: () => {
    a ? a() : b(!1);
  }, children: e }) }), document.body) : null;
}, M = (e, t, a) => u.forwardRef(({
  multiple: n = !1,
  onChange: o,
  value: c,
  url: l,
  idField: d = Oe,
  ...f
}, g) => {
  const y = Be(l, d), [b, m] = u.useState(), [R, L] = u.useState(!1), [C, O] = u.useState(""), H = () => {
    O(""), L(!1);
  }, P = Ke(g, m), Y = (z) => {
    y(z), o && o(n ? [...c ?? [], z[d]] : z[d]), H();
  };
  return /* @__PURE__ */ p(qe, { children: [
    /* @__PURE__ */ r(e, { ref: P, extraOptionsRenderer: ({
      search: z,
      searchIsLoading: V,
      closePopup: A
    }) => !V && /* @__PURE__ */ r(lr, { search: z, onClick: () => {
      O((z || "").trim()), L(!0), A(), b == null || b.blur();
    } }), ...f, idField: d, value: c, multiple: n, onChange: o, url: l }),
    /* @__PURE__ */ r(de, { open: R, onClose: () => L(!1), ...a, children: /* @__PURE__ */ r(t, { ...f, search: C, onCreate: Y }) })
  ] });
}), lr = ({
  search: e,
  onClick: t
}) => /* @__PURE__ */ r("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ p(F, { variant: "outlined", color: "success", icon: ce.faPlus, onClick: t, children: [
  "Создать",
  e && ` «${e}»`
] }) });
var re = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "trash", n = 448, o = 512, c = [], l = "f1f8", d = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faTrash = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(re);
const cr = ({
  items: e,
  onDelete: t,
  columns: a,
  isLoading: n
}) => {
  const o = I(), c = Ge({
    enableSorting: !1,
    isLoading: n,
    columns: [...a, o.actions([{
      icon: re.faTrash,
      key: "delete",
      onClick: (l) => t(l)
    }])],
    data: e || []
  });
  return /* @__PURE__ */ r(le, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: c });
}, B = (e, t) => u.forwardRef((a, n) => {
  const o = u.useCallback(({
    items: c,
    onDelete: l,
    valueCount: d
  }) => /* @__PURE__ */ r(cr, { items: c, valueCount: d, onDelete: l, columns: t }), [t]);
  return /* @__PURE__ */ r(e, { ref: n, tagListPosition: a.tagListPosition || "bottom", tagListRenderer: o, ...a });
}), Fe = Ce.createContext(null), sr = ({
  children: e,
  value: t
}) => {
  const [a, n] = Ce.useState({}), {
    activeStep: {
      id: o
    }
  } = t, c = u.useCallback(() => a[o] || {}, [o, a]), l = u.useCallback((d) => n((f) => ({
    ...f,
    [o]: {
      ...f[o],
      ...d
    }
  })), [o, a, n]);
  return /* @__PURE__ */ r(Fe.Provider, { value: {
    ...t,
    getStepState: c,
    setStepState: l
  }, children: e });
};
function dr() {
  const e = u.useContext(Fe);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const k = ({
  ...e
}) => {
  const {
    stepFormRef: t,
    activeStep: a,
    stateKey: n,
    getStepState: o,
    setStepState: c,
    values: l,
    mutation: d,
    setActiveStepStatus: f
  } = dr(), g = o(), {
    errors: y,
    fields: b
  } = g, m = T({
    mutation: d,
    errors: y,
    defaultValues: b ?? l,
    transformSendData: (R) => ({
      ...R,
      [n]: {
        ...l ? l[n] : {},
        [a.id]: v.DONE
      }
    }),
    ...e
  });
  return u.useEffect(() => {
    c({
      errors: m.formState.errors
    });
  }, [m.formState.errors]), u.useEffect(() => {
    Ue.isEqual(m.getValues(), l) || (f(v.EDIT), c({
      fields: m.getValues()
    }));
  }, [a, JSON.stringify(m.formState.dirtyFields)]), u.useImperativeHandle(t, () => ({
    save: async () => {
      await m.submit(), c({
        fields: void 0
      });
    }
  })), m;
};
var Te = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "arrow-left", n = 448, o = 512, c = [8592], l = "f060", d = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faArrowLeft = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(Te);
var je = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "pencil", n = 512, o = 512, c = [9999, 61504, "pencil-alt"], l = "f303", d = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faPencil = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(je);
var X = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "circle", n = 512, o = 512, c = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], l = "f111", d = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faCircle = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(X);
var Ie = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", a = "lock", n = 448, o = 512, c = [128274], l = "f023", d = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faLock = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(Ie);
var Le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "far", a = "clock", n = 512, o = 512, c = [128339, "clock-four"], l = "f017", d = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: t,
    iconName: a,
    icon: [
      n,
      o,
      c,
      l,
      d
    ]
  }, e.faClock = e.definition, e.prefix = t, e.iconName = a, e.width = n, e.height = o, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(Le);
const ur = ({
  status: e
}) => Ne(e).with(v.DONE, () => /* @__PURE__ */ r($, { icon: Xe.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(v.ACTIVE, () => /* @__PURE__ */ r($, { mask: X.faCircle, icon: er.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(v.WAIT, () => /* @__PURE__ */ r($, { mask: X.faCircle, icon: Le.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(v.LOADING, () => /* @__PURE__ */ r($, { icon: we.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(v.DISABLED, () => /* @__PURE__ */ r($, { mask: X.faCircle, transform: "shrink-8", icon: Ie.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(v.ERROR, () => /* @__PURE__ */ r($, { icon: ze.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(v.EDIT, () => /* @__PURE__ */ r($, { mask: X.faCircle, transform: "shrink-8", icon: je.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), mr = ({
  items: e,
  activeItem: t,
  className: a,
  onChange: n
}) => /* @__PURE__ */ r("div", { className: a, children: /* @__PURE__ */ r("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((o, c) => {
  const l = (t == null ? void 0 : t.id) === o.id;
  return /* @__PURE__ */ r("li", { onClick: () => o.status !== v.DISABLED ? n == null ? void 0 : n(o) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, l ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : o.status === v.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, l && Ze`
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
                  `], children: /* @__PURE__ */ p("div", { css: {
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
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ p("div", { children: [
      c + 1,
      ". ",
      o.title
    ] }) }),
    /* @__PURE__ */ r(ur, { status: o.status })
  ] }) }, o.id);
}) }) }), pr = ({
  steps: e,
  values: t,
  mutation: a,
  stateKey: n = "state"
}) => {
  const {
    isSubmitting: o,
    steps: c,
    stepFormRef: l,
    setActiveStepStatus: d,
    getNextButtonProps: f,
    getPrevButtonProps: g,
    setActiveStep: y,
    activeStepIndex: b,
    activeStep: m
  } = tr({
    stepsDefinition: e,
    mutation: a,
    values: t,
    stateKey: n
  }), {
    Component: R
  } = m;
  return /* @__PURE__ */ r(sr, { value: {
    activeStep: m,
    mutation: a,
    stepFormRef: l,
    stateKey: n,
    values: t,
    setActiveStepStatus: d
  }, children: /* @__PURE__ */ r(j, { bbar: [/* @__PURE__ */ r(F, { icon: Te.faArrowLeft, ...g(), children: "Назад" }, "previous"), /* @__PURE__ */ p(F, { ...f(), variant: "contained", color: "success", children: [
    o && /* @__PURE__ */ r($, { icon: we.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ p(rr, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ r("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ r(mr, { activeItem: m, onChange: y, items: c }) }),
    /* @__PURE__ */ p("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ p("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        b + 1,
        ". ",
        m == null ? void 0 : m.title
      ] }),
      /* @__PURE__ */ r("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ r(R, {}) })
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
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((e) => {
    const t = Number(e);
    return isNaN(t) ? !1 : t >= 1900 && t <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
  city_created: i.string({
    required_error: "Выберите город создания"
  })
}).required(), fr = () => {
  const e = k({
    schema: hr
  });
  return /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(s, { control: e.control, name: "name", render: ({
      field: t
    }) => /* @__PURE__ */ r(w, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "partner_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(Ve, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "program_type_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(E, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (a) => a.filter(({
      id: n
    }) => n === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(We, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "program_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(E, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "year_created", render: ({
      field: t
    }) => /* @__PURE__ */ r(ie, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ r(w, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, gr = i.object({
  protocol_number: i.string().nullish(),
  protocol_date: i.string().nullish(),
  decree_number: i.string().nullish(),
  decree_date: i.string().nullish(),
  authors: i.string().nullish(),
  comment: i.string().nullish()
}), br = () => {
  const e = k({
    schema: gr
  });
  return /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(s, { control: e.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ r(w, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ r(Z, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ r(w, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ r(Z, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, yr = i.object({
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
}), _r = () => {
  const e = k({
    schema: yr
  });
  return /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(Ye, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ p("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ r(s, { control: e.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ r(S, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ r("div", { children: "-" }),
      /* @__PURE__ */ r(s, { control: e.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ r(S, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(E, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "edu_sessions_per_week", render: ({
      field: t
    }) => /* @__PURE__ */ r(
      S,
      {
        ...t,
        css: {
          width: "20rem",
          maxWidth: "100%"
        },
        allowFloat: !1,
        label: "Количество занятий в неделю"
      }
    ) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(E, { dictionary: "educationForm", ...t, label: "Форма обучения" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ r(S, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ r(xe, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, vr = i.object({
  explanatory_note: i.string().nullish(),
  program_relevance: i.string().nullish(),
  pedagogical_expediency: i.string().nullish(),
  distinctive_features: i.string().nullish(),
  actual: i.string().nullish()
}), wr = () => {
  const e = k({
    schema: vr
  });
  return /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(s, { control: e.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(s, { control: e.control, name: "actual", render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...t }) })
  ] });
};
i.object({
  category_id: i.number({
    required_error: "Выберите категорию"
  }),
  title: i.string({
    required_error: "Заполните наименование"
  }).min(1, "Заполните наименование")
}).required({
  category_id: !0,
  title: !0
});
const Cr = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-results", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
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
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "category_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...o }) }),
    /* @__PURE__ */ r(s, { name: "title", control: n.control, defaultValue: t, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Наименование", placeholder: "Введите наименование", ...o }) })
  ] }) });
}, me = I(), xr = B(q(M(N, Cr, {
  title: "Новый планируемый результат"
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [me.dictionary("category_id", "programDocCategories", "Категория"), me.display("title", "Наименование")]), Dr = i.object({
  program_results: i.array(i.string())
}), kr = () => {
  const e = k({
    schema: Dr
  });
  return /* @__PURE__ */ r(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ r(s, { name: "program_results", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(xr, { ...t, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Sr = i.object({
  title: i.string({
    required_error: "Введите наименование"
  }).min(1, "Заполните наименование")
}).required({
  title: !0
}), Pr = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    mutation: a,
    schema: Sr
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(ee, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ r(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: /* @__PURE__ */ r(s, { name: "title", control: n.control, defaultValue: t, render: ({
    field: o
  }) => /* @__PURE__ */ r(w, { label: "Наименование", placeholder: "Введите наименование задачи", ...o }) }) }) });
}, Fr = q(M(N, Pr, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Tr = i.object({
  mission: i.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: i.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: i.array(i.string())
}).required({
  goal: !0
}), jr = () => {
  const e = k({
    schema: Tr
  });
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(s, { name: "mission", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...t }) }),
    /* @__PURE__ */ r(s, { name: "goal", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(x, { label: "Цель программы", placeholder: "Введите цель программы", ...t }) }),
    /* @__PURE__ */ r(s, { name: "program_objectives", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(Fr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...t }) })
  ] }) });
}, Ir = i.object({
  theme: i.string({
    required_error: "Заполните тему"
  }).min(1, "Заполните тему"),
  theory: i.string().optional(),
  theory_volume: i.number().optional(),
  practice: i.string().optional(),
  practice_volume: i.number().optional(),
  sort_index: i.number(),
  doc_id: i.string()
}), Lr = ({
  doc_id: e,
  onCreate: t,
  onSubmit: a,
  onError: n
}) => {
  const o = D("/api/rest/program-doc-plans", {
    onMutate: (l) => {
      a == null || a(l);
    },
    onSuccess: ({
      data: l
    }) => {
      t(l);
    },
    onError: (l) => {
      n == null || n(l);
    }
  }), c = T({
    schema: Ir,
    mutation: o,
    defaultValues: {
      doc_id: e,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(ee, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => c.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: c, children: [
    /* @__PURE__ */ r(s, { name: "theme", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(w, { label: "Тема", placeholder: "Введите тему", ...l }) }),
    /* @__PURE__ */ r(s, { name: "theory", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(w, { label: "Теория", placeholder: "Введите теорию", ...l }) }),
    /* @__PURE__ */ r(s, { name: "theory_volume", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(S, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...l }) }),
    /* @__PURE__ */ r(s, { name: "practice", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(w, { label: "Практика", placeholder: "Введите практику", ...l }) }),
    /* @__PURE__ */ r(s, { name: "practice_volume", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(S, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...l }) })
  ] }) });
}, Q = I(), Er = () => {
  const {
    params: {
      id: e
    }
  } = se(), [t, a] = u.useState(!1), [n, o] = u.useState(!1), c = D("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      y();
    }
  }), l = [Q.display("theme", "Тема"), Q.display("theory", "Теория"), Q.display("theory_volume", "Объём теории"), Q.display("practice", "Практика"), Q.display("practice_volume", "Объём практики"), Q.actions([{
    key: "download",
    icon: re.faTrash,
    tooltip: "Удалить тему",
    onClick: async (b) => {
      c.mutate({
        id: b.id
      });
    }
  }])], d = De("/api/rest/program-doc-plans", l, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: c.isPending || n,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), f = u.useCallback(() => {
    y(), a(!1), o(!1);
  }, []), g = ae(), y = () => g("/api/rest/program-doc-plans");
  return /* @__PURE__ */ r("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p(F, { variant: "outlined", onClick: () => a((b) => !b), color: "success", children: [
        /* @__PURE__ */ r($, { icon: ce.faPlus }),
        "Добавить тему"
      ] }),
      /* @__PURE__ */ r(de, { title: "Новая тема", onClose: () => a(!1), open: t, children: /* @__PURE__ */ r(Lr, { doc_id: e, onCreate: f, onSubmit: () => o(!0), onError: () => o(!1) }) })
    ] }),
    /* @__PURE__ */ r(le, { border: !0, table: d })
  ] }) });
}, qr = i.object({
  control_type_id: i.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: i.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  control_type_id: !0,
  description: !0
}), Nr = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-forms", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: qr,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(ee, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "control_type_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", control: n.control, defaultValue: t, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Описание", placeholder: "Введите описание", ...o }) })
  ] }) });
}, pe = I(), Mr = B(q(M(N, Nr, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [pe.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), pe.display("description", "Описание", {
  size: 200
})]), Rr = i.object({
  program_att_forms: i.array(i.string())
}), Hr = () => {
  const e = k({
    schema: Rr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_att_forms", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Mr, { ...t, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, Ar = i.object({
  criterion_type_id: i.number({
    required_error: "Заполните тип критерия"
  }),
  description: i.string({
    required_error: "Заполните описание критерия"
  }).min(1, "Заполните описание")
}).required({
  criterion_type_id: !0
}), $r = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-criteria", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: Ar,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "criterion_type_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", control: n.control, defaultValue: t, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Описание", placeholder: "Введите описание", ...o }) })
  ] }) });
}, he = I(), Br = B(q(M(N, $r, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [he.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), he.display("description", "Критерий")]), Or = i.object({
  program_criteria: i.array(i.string())
}), zr = () => {
  const e = k({
    schema: Or
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_criteria", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Br, { ...t, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, Vr = i.object({
  method_id: i.number({
    required_error: "Заполните метод"
  }),
  description: i.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  method_id: !0,
  description: !0
}), Wr = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-fixations", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    mutation: a,
    schema: Vr
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "method_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Описание", placeholder: "Введите описание", ...o }) })
  ] }) });
}, fe = I(), Yr = B(q(M(N, Wr, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [fe.dictionary("method_id", "programDocMethodTypes", "Метод"), fe.display("description", "Описание способа фиксации")]), Ur = i.object({
  program_fixations: i.array(i.string())
}), Qr = () => {
  const e = k({
    schema: Ur
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_fixations", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Yr, { ...t, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, Gr = i.object({
  base_knowledge: i.string({
    required_error: "Заполните базовые знания"
  }),
  material: i.string({
    required_error: "Заполните материалы"
  }).min(1, "Заполните материалы")
}).required({
  base_knowledge: !0,
  material: !0
}), Xr = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-materials", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: Gr,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "base_knowledge", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Базовые знания", placeholder: "Введите базовые знания", ...o }) }),
    /* @__PURE__ */ r(s, { name: "material", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Материалы", placeholder: "Введите материалы", ...o }) })
  ] }) });
}, ge = I(), Jr = B(q(M(N, Xr, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [ge.display("base_knowledge", "Базовые знания"), ge.display("material", "Материалы")]), Kr = i.object({
  program_materials: i.array(i.string())
}), Zr = () => {
  const e = k({
    schema: Kr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_materials", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Jr, { ...t, multiple: !0, label: "Методические материалы" }) }) }) });
}, et = i.object({
  management_type_id: i.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  management_type_id: !0
}), rt = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-managements", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: et,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "management_type_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Описание", placeholder: "Введите описание", ...o }) })
  ] }) });
}, be = I(), tt = B(q(M(N, rt, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [be.dictionary("management_type_id", "programDocManagementTypes", "Тип"), be.display("description", "Описание")]), ot = i.object({
  program_managements: i.array(i.string())
}), nt = () => {
  const e = k({
    schema: ot
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_managements", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(tt, { ...t, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, it = i.object({
  indoctrination_type_id: i.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  indoctrination_type_id: !0
}), at = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-indoctrinations", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: it,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "indoctrination_type_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...o }) })
  ] }) });
}, ye = I(), lt = B(q(M(N, at, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [ye.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), ye.display("description", "Описание")]), ct = i.object({
  program_indoctrinations: i.array(i.string())
}), st = () => {
  const e = k({
    schema: ct
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_indoctrinations", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(lt, { ...t, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, dt = i.object({
  development_type_id: i.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  development_type_id: !0
}), ut = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-developments", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: dt,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "development_type_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...o }) })
  ] }) });
}, _e = I(), mt = B(q(M(N, ut, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [_e.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), _e.display("description", "Развивающая деятельность")]), pt = i.object({
  program_developments: i.array(i.string())
}), ht = () => {
  const e = k({
    schema: pt
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_developments", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(mt, { ...t, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, ft = () => {
  const e = k({
    schema: i.object({
      staff_description: i.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ r(h, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ r(s, { control: e.control, name: "staff_description", render: ({
    field: t
  }) => /* @__PURE__ */ r(x, { tw: "w-full", ...t, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, gt = i.object({
  inventory_type_id: i.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: i.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  inventory_type_id: !0,
  description: !0
}), bt = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-inventories", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: gt,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "inventory_type_id", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(E, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...o }) }),
    /* @__PURE__ */ r(s, { name: "description", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(x, { label: "Описание", placeholder: "Введите описание", ...o }) })
  ] }) });
}, ve = I(), yt = B(q(M(N, bt, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [ve.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), ve.display("description", "Описание")]), _t = i.object({
  program_inventories: i.array(i.string())
}), vt = () => {
  const e = k({
    schema: _t
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_inventories", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(yt, { ...t, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, wt = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименование"),
  publisher: i.string().optional(),
  publish_year: i.string().optional(),
  isbn: i.string().optional()
}).required({
  title: !0
}), Ct = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-information", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: wt,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "authors", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Авторы", placeholder: "Введите авторов", ...o }) }),
    /* @__PURE__ */ r(s, { name: "title", defaultValue: t, control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Наименование", placeholder: "Введите наименование", ...o }) }),
    /* @__PURE__ */ r(s, { name: "publisher", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Издательство", placeholder: "Введите издательство", ...o }) }),
    /* @__PURE__ */ r(s, { name: "publish_year", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(ie, { label: "Год издательства", placeholder: "Выберите год издательства", ...o }) }),
    /* @__PURE__ */ r(s, { name: "isbn", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...o }) })
  ] }) });
}, G = I(), xt = B(q(M(N, Ct, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [G.display("title", "Наименование"), G.display("authors", "Авторы"), G.display("publisher", "Издательство"), G.display("publish_year", "Год издательства"), G.display("isbn", "ISBN")]), Dt = i.object({
  program_information: i.array(i.string())
}), kt = () => {
  const e = k({
    schema: Dt
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_information", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(xt, { ...t, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, St = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименования"),
  publisher: i.string().optional(),
  publish_year: i.string().optional()
}).required({
  title: !0
}), Pt = ({
  onCreate: e,
  search: t
}) => {
  const a = D("/api/rest/program-doc-books", {
    onSuccess: ({
      data: o
    }) => {
      e(o);
    }
  }), n = T({
    schema: St,
    mutation: a
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(ee, { variant: "contained", color: "success", disabled: a.isPending, onClick: () => n.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ r(s, { name: "authors", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Авторы", placeholder: "Введите авторов", ...o }) }),
    /* @__PURE__ */ r(s, { name: "title", control: n.control, defaultValue: t, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Наименование", placeholder: "Введите наименование", ...o }) }),
    /* @__PURE__ */ r(s, { name: "publisher", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(w, { label: "Издательство", placeholder: "Введите издательство", ...o }) }),
    /* @__PURE__ */ r(s, { name: "publish_year", control: n.control, render: ({
      field: o
    }) => /* @__PURE__ */ r(ie, { label: "Год издательства", placeholder: "Выберите год издательства", ...o }) })
  ] }) });
}, K = I(), Ft = B(q(M(N, Pt, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [K.display("title", "Наименование"), K.display("authors", "Авторы"), K.display("publisher", "Издательство"), K.display("publish_year", "Год издательства")]), Tt = i.object({
  program_books: i.array(i.string())
}), jt = () => {
  const e = k({
    schema: Tt
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(h, { form: e, children: /* @__PURE__ */ r(s, { name: "program_books", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Ft, { ...t, multiple: !0, label: "Список литературы" }) }) }) });
}, It = i.object({
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
}), Lt = ({
  doc_id: e,
  onCreate: t,
  onSubmit: a,
  onError: n
}) => {
  const o = D("/api/rest/program-doc-schedules", {
    onMutate: (l) => {
      a == null || a(l);
    },
    onSuccess: ({
      data: l
    }) => {
      t(l);
    },
    onError: (l) => {
      n == null || n(l);
    }
  }), c = T({
    schema: It,
    mutation: o,
    defaultValues: {
      doc_id: e
    }
  });
  return /* @__PURE__ */ r(j, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => c.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(h, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: c, children: [
    /* @__PURE__ */ r(s, { name: "number_year", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(S, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...l }) }),
    /* @__PURE__ */ r(s, { name: "date_start", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(Z, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...l }) }),
    /* @__PURE__ */ r(s, { name: "date_end", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(Z, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...l }) }),
    /* @__PURE__ */ r(s, { name: "edu_week_count", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(S, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...l }) }),
    /* @__PURE__ */ r(s, { name: "is_vacations", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(xe, { label: "Есть каникулы?", ...l }) }),
    /* @__PURE__ */ r(s, { name: "edu_sessions_per_week", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(S, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...l }) }),
    /* @__PURE__ */ r(s, { name: "edu_sessions_per_day", control: c.control, render: ({
      field: l
    }) => /* @__PURE__ */ r(S, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...l }) })
  ] }) });
}, U = I(), Et = () => {
  const {
    params: {
      id: e
    }
  } = se(), [t, a] = u.useState(!1), [n, o] = u.useState(!1), c = D("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      y();
    }
  }), l = [
    U.display("number_year", "Год обучения (по порядку)"),
    U.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    U.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    U.display("edu_week_count", "Учебных недель"),
    U.boolean("is_vacations", "Есть каникулы"),
    U.display("edu_sessions_per_week", "Количество занятий в неделю"),
    U.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    U.actions([{
      key: "download",
      icon: re.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (b) => {
        c.mutate({
          id: b.id
        });
      }
    }])
  ], d = De("/api/rest/program-doc-schedules", l, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: c.isPending || n,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), f = u.useCallback(() => {
    y(), a(!1), o(!1);
  }, []), g = ae(), y = () => g("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ r("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p(F, { variant: "outlined", onClick: () => a((b) => !b), color: "success", children: [
        /* @__PURE__ */ r($, { icon: ce.faPlus }),
        "Добавить"
      ] }),
      /* @__PURE__ */ r(de, { title: "Новый учебный график", onClose: () => a(!1), open: t, children: /* @__PURE__ */ r(Lt, { doc_id: e, onCreate: f, onSubmit: () => o(!0), onError: () => o(!1) }) })
    ] }),
    /* @__PURE__ */ r(le, { border: !0, table: d })
  ] }) });
}, qt = [{
  id: "general",
  title: "Основное",
  Component: fr
}, {
  id: "params",
  title: "Параметры",
  Component: _r
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: wr
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: kr
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: jr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: Er
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: Hr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: zr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: Qr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: Zr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: nt
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: st
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: ht
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: ft
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: vt
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: kt
}, {
  title: "Список литературы",
  id: "books",
  Component: jt
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Et
}, {
  id: "description",
  title: "Утверждение",
  Component: br
}], Nt = i.object({
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
}).passthrough(), Mt = i.object({
  data: i.array(Nt).transform((e) => e[0])
}).transform((e) => e.data), Ut = () => {
  const {
    params: {
      id: e
    },
    setTitle: t
  } = se(), a = ae(), n = Qe(`/api/rest/program-docs/${e}`, {
    schema: Mt
  }), o = D("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      a("/api/rest/program-docs");
    }
  });
  return u.useEffect(() => {
    t(`Конструктор программы #${e}`);
  }, [e, t]), n.isLoading ? /* @__PURE__ */ r(Me, { spinning: !0 }) : n.isError ? /* @__PURE__ */ r(Je, { type: "error", title: n.error.message }) : /* @__PURE__ */ r(pr, { steps: qt, stateKey: "steps_info", mutation: o, values: n.data });
};
export {
  Ut as default
};
