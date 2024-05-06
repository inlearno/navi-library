import { j as t, d as pe, b as W, F as ue } from "./library-cedc3deb.js";
import { g as he, h as fe, R as me, i as ge, j as ye, B as ve, u as be, F as we, a as s, D as R, T, Q as b, c as N, Y as ne } from "./Checkbox-99638ef1.js";
import { c as w } from "./configureQueriedCombo-f2ec2687.js";
import { r as d, c as _e } from "./react-6f5a8403.js";
import { F as Ce } from "./icons-ad9f8a73.js";
import { a as De } from "./DictionaryCell-728213ab.js";
import { a as Fe, T as Te, c as _ } from "./index-c378ac40.js";
import { a as ke } from "./faPenAlt-466fde8a.js";
import { u as Ie, B as Se } from "./mui-bfddf798.js";
import { u as qe } from "./useHttpMutation-768b8cd0.js";
const nr = ({
  children: e,
  ...a
}) => /* @__PURE__ */ t(pe.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: o,
  dragging: r
}) => /* @__PURE__ */ t("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, o ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, r && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...a, children: e });
var ie = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", o = "up-right-and-down-left-from-center", r = 512, n = 512, i = ["expand-alt"], l = "f424", c = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: a,
    iconName: o,
    icon: [
      r,
      n,
      i,
      l,
      c
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = a, e.iconName = o, e.width = r, e.height = n, e.ligatures = i, e.unicode = l, e.svgPathData = c, e.aliases = i;
})(ie);
var le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", o = "down-left-and-up-right-to-center", r = 512, n = 512, i = ["compress-alt"], l = "f422", c = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: a,
    iconName: o,
    icon: [
      r,
      n,
      i,
      l,
      c
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = a, e.iconName = o, e.width = r, e.height = n, e.ligatures = i, e.unicode = l, e.svgPathData = c, e.aliases = i;
})(le);
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", o = "window-minimize", r = 512, n = 512, i = [128469], l = "f2d1", c = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: a,
    iconName: o,
    icon: [
      r,
      n,
      i,
      l,
      c
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = a, e.iconName = o, e.width = r, e.height = n, e.ligatures = i, e.unicode = l, e.svgPathData = c, e.aliases = i;
})(ce);
const He = d.createContext(null), X = {
  didCatch: !1,
  error: null
};
class Re extends d.Component {
  constructor(a) {
    super(a), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = X;
  }
  static getDerivedStateFromError(a) {
    return {
      didCatch: !0,
      error: a
    };
  }
  resetErrorBoundary() {
    const {
      error: a
    } = this.state;
    if (a !== null) {
      for (var o, r, n = arguments.length, i = new Array(n), l = 0; l < n; l++)
        i[l] = arguments[l];
      (o = (r = this.props).onReset) === null || o === void 0 || o.call(r, {
        args: i,
        reason: "imperative-api"
      }), this.setState(X);
    }
  }
  componentDidCatch(a, o) {
    var r, n;
    (r = (n = this.props).onError) === null || r === void 0 || r.call(n, a, o);
  }
  componentDidUpdate(a, o) {
    const {
      didCatch: r
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (r && o.error !== null && Be(a.resetKeys, n)) {
      var i, l;
      (i = (l = this.props).onReset) === null || i === void 0 || i.call(l, {
        next: n,
        prev: a.resetKeys,
        reason: "keys"
      }), this.setState(X);
    }
  }
  render() {
    const {
      children: a,
      fallbackRender: o,
      FallbackComponent: r,
      fallback: n
    } = this.props, {
      didCatch: i,
      error: l
    } = this.state;
    let c = a;
    if (i) {
      const h = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof o == "function")
        c = o(h);
      else if (r)
        c = d.createElement(r, h);
      else if (n === null || d.isValidElement(n))
        c = n;
      else
        throw l;
    }
    return d.createElement(He.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, c);
  }
}
function Be() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== a.length || e.some((o, r) => !Object.is(o, a[r]));
}
const z = ({
  onClick: e,
  ...a
}) => /* @__PURE__ */ t("div", { role: "button", onClick: e, onMouseDown: (o) => o.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ t(Ce, { ...a }) }), Le = ({
  bounds: e,
  height: a = 500,
  width: o = 600,
  maximizable: r = !1,
  children: n,
  title: i,
  closable: l = !1,
  onClose: c,
  focused: h = !0,
  onFocus: m,
  folded: B = !1,
  foldable: S = !1,
  position: g,
  resizable: A = !0,
  onFold: L,
  onMaximize: q,
  maximized: u,
  onMinimize: H,
  updatePosition: y,
  setWidth: E,
  setHeight: f,
  autoHeight: U = !1
}) => {
  const $ = d.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: M,
    height: v
  } = he(), p = d.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, M, v]), F = d.useRef(null), P = d.useRef(null), [Q, Y] = d.useState(0);
  return d.useLayoutEffect(() => {
    if (P.current) {
      const I = P.current.children[0];
      if (I) {
        Y(I.clientHeight);
        const j = new ResizeObserver((x) => {
          for (const de of x)
            Y(de.contentRect.height);
        });
        return j.observe(I), () => {
          j.disconnect();
        };
      }
    }
  }, [P.current]), d.useEffect(() => {
    if (U && P.current && Q > 0 && (e || v && v > 0) && F.current) {
      const I = Math.min((e == null ? void 0 : e.clientHeight) || v, Q + 52);
      f == null || f(I), F.current.updateSize({
        width: o,
        height: I
      });
    }
  }, [P.current, e, U, Q]), d.useEffect(() => {
    F.current && !F.current.state.resizing && (u ? F.current.updateSize(p ? {
      width: p.width,
      height: p.height
    } : {
      width: M || 0,
      height: v || 0
    }) : F.current.updateSize({
      width: o,
      height: a
    }));
  }, [u, M, v, p, o, a, B]), d.useEffect(() => {
    F.current && (u ? F.current.updatePosition({
      x: (p == null ? void 0 : p.leftOffset) || 0,
      y: (p == null ? void 0 : p.topOffset) || 0
    }) : g && F.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [u, F.current, p, g, B]), d.useEffect(() => {
    e && !p || v && M && v + M > 0 && !g && !u && (y == null || y({
      x: p ? p.leftOffset + p.width / 2 - o / 2 : (M ?? 0) / 2 - o / 2,
      y: p ? p.topOffset + p.height / 2 - a / 2 : (v ?? 0) / 2 - o / 2
    }));
  }, [g, y, p, u, v, M]), e && !p || !v || !v ? null : /* @__PURE__ */ t(
    me,
    {
      ref: F,
      enableResizing: !u && A,
      disableDragging: u,
      dragHandleClassName: $,
      className: "window",
      bounds: e ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: B ? {
        display: "none"
      } : {},
      onResizeStop: (I, j, x) => {
        E == null || E(x.offsetWidth), f == null || f(x.offsetHeight);
      },
      onDragStop: (I, j) => {
        y == null || y({
          x: j.lastX,
          y: j.lastY
        });
      },
      default: {
        height: a,
        width: o,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ W("div", { role: "dialog", onMouseDown: () => {
        !h && m && m();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, u ? {
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
        /* @__PURE__ */ W("div", { className: $, onDoubleClick: () => r && (u ? H == null ? void 0 : H() : q == null ? void 0 : q()), css: [{
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
        }, !u && {
          cursor: "move"
        }, h ? {
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
          }, children: i }),
          /* @__PURE__ */ W("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            S && /* @__PURE__ */ t(z, { icon: ce.faWindowMinimize, onClick: L, transform: "shrink-4" }),
            r && (u ? /* @__PURE__ */ t(z, { icon: le.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: H }) : /* @__PURE__ */ t(z, { icon: ie.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: q })),
            l && /* @__PURE__ */ t(z, { icon: fe.faXmark, onClick: c })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { ref: P, css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ t(Re, { fallbackRender: ({
          error: I
        }) => /* @__PURE__ */ t("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: I }), children: n }) })
      ] })
    }
  );
}, Ee = ({
  children: e,
  open: a = !1,
  onClose: o,
  title: r,
  width: n,
  height: i,
  autoHeight: l = !1,
  maximized: c,
  maximizable: h,
  closable: m = !0,
  resizable: B = !0
}) => {
  const [S, g] = d.useState(void 0), [A, L] = d.useState(n), [q, u] = d.useState(i), [H, y] = d.useState(a);
  return d.useEffect(() => {
    y(a);
  }, [a]), H ? _e.createPortal(/* @__PURE__ */ t("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(Le, { position: S, updatePosition: (E) => {
    g(E);
  }, autoHeight: l, closable: m, resizable: B, title: r, width: A, setWidth: L, height: S ? q : 0, setHeight: u, maximized: c, maximizable: h, onClose: () => {
    o ? o() : y(!1);
  }, children: e }) }), document.body) : null;
}, C = (e, a, o) => d.forwardRef(({
  multiple: r = !1,
  onChange: n,
  value: i,
  url: l,
  idField: c = ye,
  ...h
}, m) => {
  const B = ge(l, c), [S, g] = d.useState(), [A, L] = d.useState(!1), [q, u] = d.useState(""), H = () => {
    u(""), L(!1);
  }, y = Ie(m, g), E = (f) => {
    B(f), n && n(r ? [...i ?? [], f[c]] : f[c]), H();
  };
  return /* @__PURE__ */ W(ue, { children: [
    /* @__PURE__ */ t(e, { ref: y, extraOptionsRenderer: ({
      search: f,
      searchIsLoading: U,
      closePopup: $
    }) => !U && /* @__PURE__ */ t(Me, { search: f, onClick: () => {
      u((f || "").trim()), L(!0), $(), S == null || S.blur();
    } }), ...h, idField: c, value: i, multiple: r, onChange: n, url: l }),
    /* @__PURE__ */ t(Ee, { open: A, autoHeight: !0, onClose: () => L(!1), ...o, children: /* @__PURE__ */ t(a, { ...h, search: q, onSave: E }) })
  ] });
}), Me = ({
  search: e,
  onClick: a
}) => /* @__PURE__ */ t("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ W(ve, { variant: "outlined", color: "success", icon: ke.faPlus, onClick: a, children: [
  "Создать",
  e && ` «${e}»`
] }) });
var se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", o = "trash", r = 448, n = 512, i = [], l = "f1f8", c = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  e.definition = {
    prefix: a,
    iconName: o,
    icon: [
      r,
      n,
      i,
      l,
      c
    ]
  }, e.faTrash = e.definition, e.prefix = a, e.iconName = o, e.width = r, e.height = n, e.ligatures = i, e.unicode = l, e.svgPathData = c, e.aliases = i;
})(se);
const Ne = ({
  items: e,
  onDelete: a,
  columns: o,
  isLoading: r
}) => {
  const n = _(), i = Fe({
    enableSorting: !1,
    isLoading: r,
    columns: [...o, n.actions([{
      icon: se.faTrash,
      key: "delete",
      onClick: (l) => a(l)
    }])],
    data: e || []
  });
  return /* @__PURE__ */ t(Te, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: i });
}, k = (e, a) => d.forwardRef((o, r) => {
  const n = d.useCallback(({
    items: i,
    onDelete: l,
    valueCount: c
  }) => /* @__PURE__ */ t(Ne, { items: i, valueCount: c, onDelete: l, columns: a }), [a]);
  return /* @__PURE__ */ t(e, { ref: r, tagListPosition: o.tagListPosition || "bottom", tagListRenderer: n, ...o });
}), D = ({
  fit: e = !1,
  onSave: a,
  onSubmit: o,
  onError: r,
  initialValues: n,
  url: i,
  children: l
}) => {
  const c = qe({
    method: n != null && n.id ? "PUT" : "POST",
    url: `${i}${n != null && n.id ? `/${n.id}` : ""}`,
    onMutate: (m) => {
      o == null || o(m);
    },
    onSuccess: ({
      data: m
    }) => {
      a == null || a(m);
    },
    onError: (m) => {
      r == null || r(m);
    }
  }), h = be({
    defaultValues: n,
    mutation: c
  });
  return /* @__PURE__ */ t(De, { fit: e, footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(Se, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => h.submit(), children: n != null && n.id ? "Обновить" : "Создать" }) }), children: /* @__PURE__ */ t(we, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: h, children: l(h) }) });
}, Pe = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-results", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "category_id", control: o.control, rules: {
  required: "Выберите категорию"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }, "category_id"), /* @__PURE__ */ t(s, { name: "title", control: o.control, defaultValue: e, rules: {
  required: "Введите наименование"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title")] }), V = _(), ir = k(w(C(b, Pe, {
  title: "Новый планируемый результат",
  width: 500
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [V.dictionary("category_id", "programDocCategories", "Категория"), V.display("title", "Наименование")]), je = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-objectives", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "title", rules: {
  required: "Введите наименование"
}, control: o.control, defaultValue: e, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }, "title")] }), lr = w(C(b, je, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Ae = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-forms", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "control_type_id", rules: {
  required: "Выберите тип формы аттестации"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }, "control_type_id"), /* @__PURE__ */ t(s, { name: "description", control: o.control, defaultValue: e, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), G = _(), cr = k(w(C(b, Ae, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [G.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), G.display("description", "Описание", {
  size: 200
})]), Oe = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-criteria", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "criterion_type_id", control: o.control, rules: {
  required: "Введите тип критерия"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }, "criterion_type_id"), /* @__PURE__ */ t(s, { name: "description", rules: {
  required: "Введите описание критерия"
}, control: o.control, defaultValue: e, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), J = _(), sr = k(w(C(b, Oe, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [J.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), J.display("description", "Критерий")]), We = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-fixations", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "method_id", rules: {
  required: "Выберите метод"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }, "method_id"), /* @__PURE__ */ t(s, { name: "description", defaultValue: e, rules: {
  required: "Введите описание"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), Z = _(), dr = k(w(C(b, We, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [Z.dictionary("method_id", "programDocMethodTypes", "Метод"), Z.display("description", "Описание способа фиксации")]), Ue = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-materials", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "base_knowledge", control: o.control, rules: {
  required: "Введите базовые знания"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }, "base_knowledge"), /* @__PURE__ */ t(s, { name: "material", rules: {
  required: "Введите материалы"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Материалы", placeholder: "Введите материалы", ...r }) }, "material")] }), ee = _(), pr = k(w(C(b, Ue, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [ee.display("base_knowledge", "Базовые знания"), ee.display("material", "Материалы")]), $e = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-managements", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "management_type_id", control: o.control, rules: {
  required: "Выберите тип организации образовательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }, "management_type_id"), /* @__PURE__ */ t(s, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), re = _(), ur = k(w(C(b, $e, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [re.dictionary("management_type_id", "programDocManagementTypes", "Тип"), re.display("description", "Описание")]), xe = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-indoctrinations", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "indoctrination_type_id", control: o.control, rules: {
  required: "Выберите тип воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }, "indoctrination_type_id"), /* @__PURE__ */ t(s, { name: "description", defaultValue: e, control: o.control, rules: {
  required: "Введите наименование воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) }, "description")] }), te = _(), hr = k(w(C(b, xe, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [te.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), te.display("description", "Описание")]), ze = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-developments", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "development_type_id", control: o.control, rules: {
  required: "Введите тип развивающей деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }, "development_type_id"), /* @__PURE__ */ t(s, { name: "description", defaultValue: e, control: o.control, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) }, "description")] }), oe = _(), fr = k(w(C(b, ze, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [oe.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), oe.display("description", "Развивающая деятельность")]), Ke = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-inventories", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "inventory_type_id", rules: {
  required: "Выберите тип материально-технического обеспечения"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(R, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }, "inventory_type_id"), /* @__PURE__ */ t(s, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), ae = _(), mr = k(w(C(b, Ke, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [ae.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), ae.display("description", "Описание")]), Qe = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-information", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ t(s, { name: "title", rules: {
  required: "Введите наименование"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ t(s, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ t(s, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(ne, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year"), /* @__PURE__ */ t(s, { name: "isbn", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) }, "isbn")] }), O = _(), gr = k(w(C(b, Qe, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [O.display("title", "Наименование"), O.display("authors", "Авторы"), O.display("publisher", "Издательство"), O.display("publish_year", "Год издательства"), O.display("isbn", "ISBN")]), Xe = ({
  search: e,
  ...a
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-books", ...a, children: (o) => [/* @__PURE__ */ t(s, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ t(s, { name: "title", control: o.control, rules: {
  required: "Введите наименование"
}, defaultValue: e, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ t(s, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ t(s, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(ne, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year")] }), K = _(), yr = k(w(C(b, Xe, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
}), [K.display("title", "Наименование"), K.display("authors", "Авторы"), K.display("publisher", "Издательство"), K.display("publish_year", "Год издательства")]);
export {
  cr as A,
  yr as B,
  D as C,
  fr as D,
  dr as F,
  hr as I,
  Ee as M,
  ir as R,
  nr as S,
  lr as T,
  sr as a,
  pr as b,
  ur as c,
  mr as d,
  gr as e,
  se as f,
  Pe as g,
  je as h,
  Ae as i,
  Oe as j,
  We as k,
  Ue as l,
  $e as m,
  xe as n,
  ze as o,
  Ke as p,
  Qe as q,
  Xe as r
};
