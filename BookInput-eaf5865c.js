import { j as t, c as de, b as O, F as pe } from "./library-c328e858.js";
import { g as ue, h as he, R as me, i as fe, j as ge, u as ye, F as be, b as c, D as E, T, Q as v, d as N, Y as ae } from "./Boolean-90bc6f90.js";
import { c as w } from "./configureQueriedCombo-0f7db575.js";
import { r as d, c as ve } from "./react-6f5a8403.js";
import { F as we } from "./icons-ad9f8a73.js";
import { a as Ce } from "./DictionaryCell-9be52052.js";
import { a as _e, T as De, c as C } from "./useQueriedTable-552e23b2.js";
import { f as Fe } from "./faPlus-da331287.js";
import { B as Te, u as Ie } from "./faEye-c7d9d039.js";
import { u as ke, B as Se } from "./mui-2ff488a7.js";
import { f as Re } from "./faPenAlt-b6fc506d.js";
const ir = ({
  children: e,
  ...n
}) => /* @__PURE__ */ t(de.Split, { defaultSplitterColors: {
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
}] }), ...n, children: e });
var ie = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "up-right-and-down-left-from-center", r = 512, a = 512, i = ["expand-alt"], l = "f424", s = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      r,
      a,
      i,
      l,
      s
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = n, e.iconName = o, e.width = r, e.height = a, e.ligatures = i, e.unicode = l, e.svgPathData = s, e.aliases = i;
})(ie);
var le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "down-left-and-up-right-to-center", r = 512, a = 512, i = ["compress-alt"], l = "f422", s = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      r,
      a,
      i,
      l,
      s
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = n, e.iconName = o, e.width = r, e.height = a, e.ligatures = i, e.unicode = l, e.svgPathData = s, e.aliases = i;
})(le);
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "window-minimize", r = 512, a = 512, i = [128469], l = "f2d1", s = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      r,
      a,
      i,
      l,
      s
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = n, e.iconName = o, e.width = r, e.height = a, e.ligatures = i, e.unicode = l, e.svgPathData = s, e.aliases = i;
})(ce);
const Be = d.createContext(null), X = {
  didCatch: !1,
  error: null
};
class Ee extends d.Component {
  constructor(n) {
    super(n), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = X;
  }
  static getDerivedStateFromError(n) {
    return {
      didCatch: !0,
      error: n
    };
  }
  resetErrorBoundary() {
    const {
      error: n
    } = this.state;
    if (n !== null) {
      for (var o, r, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
        i[l] = arguments[l];
      (o = (r = this.props).onReset) === null || o === void 0 || o.call(r, {
        args: i,
        reason: "imperative-api"
      }), this.setState(X);
    }
  }
  componentDidCatch(n, o) {
    var r, a;
    (r = (a = this.props).onError) === null || r === void 0 || r.call(a, n, o);
  }
  componentDidUpdate(n, o) {
    const {
      didCatch: r
    } = this.state, {
      resetKeys: a
    } = this.props;
    if (r && o.error !== null && He(n.resetKeys, a)) {
      var i, l;
      (i = (l = this.props).onReset) === null || i === void 0 || i.call(l, {
        next: a,
        prev: n.resetKeys,
        reason: "keys"
      }), this.setState(X);
    }
  }
  render() {
    const {
      children: n,
      fallbackRender: o,
      FallbackComponent: r,
      fallback: a
    } = this.props, {
      didCatch: i,
      error: l
    } = this.state;
    let s = n;
    if (i) {
      const h = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof o == "function")
        s = o(h);
      else if (r)
        s = d.createElement(r, h);
      else if (a === null || d.isValidElement(a))
        s = a;
      else
        throw l;
    }
    return d.createElement(Be.Provider, {
      value: {
        didCatch: i,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, s);
  }
}
function He() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== n.length || e.some((o, r) => !Object.is(o, n[r]));
}
const z = ({
  onClick: e,
  ...n
}) => /* @__PURE__ */ t("div", { role: "button", onClick: e, onMouseDown: (o) => o.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ t(we, { ...n }) }), qe = ({
  bounds: e,
  height: n = 500,
  width: o = 600,
  maximizable: r = !1,
  children: a,
  title: i,
  closable: l = !1,
  onClose: s,
  focused: h = !0,
  onFocus: f,
  folded: H = !1,
  foldable: S = !1,
  position: g,
  resizable: A = !0,
  onFold: q,
  onMaximize: R,
  maximized: u,
  onMinimize: B,
  updatePosition: y,
  setWidth: L,
  setHeight: m,
  autoHeight: W = !1
}) => {
  const U = d.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: M,
    height: b
  } = ue(), p = d.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, M, b]), F = d.useRef(null), j = d.useRef(null), [Q, Y] = d.useState(0);
  return d.useLayoutEffect(() => {
    if (j.current) {
      const k = j.current.children[0];
      if (k) {
        Y(k.clientHeight);
        const x = new ResizeObserver(($) => {
          for (const se of $)
            Y(se.contentRect.height);
        });
        return x.observe(k), () => {
          x.disconnect();
        };
      }
    }
  }, [j.current]), d.useEffect(() => {
    if (W && j.current && Q > 0 && (e || b && b > 0) && F.current) {
      const k = Math.min((e == null ? void 0 : e.clientHeight) || b, Q + 52);
      m == null || m(k), F.current.updateSize({
        width: o,
        height: k
      });
    }
  }, [j.current, e, W, Q]), d.useEffect(() => {
    F.current && !F.current.state.resizing && (u ? F.current.updateSize(p ? {
      width: p.width,
      height: p.height
    } : {
      width: M || 0,
      height: b || 0
    }) : F.current.updateSize({
      width: o,
      height: n
    }));
  }, [u, M, b, p, o, n, H]), d.useEffect(() => {
    F.current && (u ? F.current.updatePosition({
      x: (p == null ? void 0 : p.leftOffset) || 0,
      y: (p == null ? void 0 : p.topOffset) || 0
    }) : g && F.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [u, F.current, p, g, H]), d.useEffect(() => {
    e && !p || b && M && b + M > 0 && !g && !u && (y == null || y({
      x: p ? p.leftOffset + p.width / 2 - o / 2 : (M ?? 0) / 2 - o / 2,
      y: p ? p.topOffset + p.height / 2 - n / 2 : (b ?? 0) / 2 - o / 2
    }));
  }, [g, y, p, u, b, M]), e && !p || !b || !b ? null : /* @__PURE__ */ t(
    me,
    {
      ref: F,
      enableResizing: !u && A,
      disableDragging: u,
      dragHandleClassName: U,
      className: "window",
      bounds: e ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: H ? {
        display: "none"
      } : {},
      onResizeStop: (k, x, $) => {
        L == null || L($.offsetWidth), m == null || m($.offsetHeight);
      },
      onDragStop: (k, x) => {
        y == null || y({
          x: x.lastX,
          y: x.lastY
        });
      },
      default: {
        height: n,
        width: o,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ O("div", { role: "dialog", onMouseDown: () => {
        !h && f && f();
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
        /* @__PURE__ */ O("div", { className: U, onDoubleClick: () => r && (u ? B == null ? void 0 : B() : R == null ? void 0 : R()), css: [{
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
          /* @__PURE__ */ O("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            S && /* @__PURE__ */ t(z, { icon: ce.faWindowMinimize, onClick: q, transform: "shrink-4" }),
            r && (u ? /* @__PURE__ */ t(z, { icon: le.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: B }) : /* @__PURE__ */ t(z, { icon: ie.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: R })),
            l && /* @__PURE__ */ t(z, { icon: he.faXmark, onClick: s })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { ref: j, css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ t(Ee, { fallbackRender: ({
          error: k
        }) => /* @__PURE__ */ t("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: k }), children: a }) })
      ] })
    }
  );
}, Le = ({
  children: e,
  open: n = !1,
  onClose: o,
  title: r,
  width: a,
  height: i,
  autoHeight: l = !1,
  maximized: s,
  maximizable: h,
  closable: f = !0,
  resizable: H = !0
}) => {
  const [S, g] = d.useState(void 0), [A, q] = d.useState(a), [R, u] = d.useState(i), [B, y] = d.useState(n);
  return d.useEffect(() => {
    y(n);
  }, [n]), B ? ve.createPortal(/* @__PURE__ */ t("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    zIndex: "10",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(qe, { position: S, updatePosition: (L) => {
    g(L);
  }, autoHeight: l, closable: f, resizable: H, title: r, width: A, setWidth: q, height: S ? R : 0, setHeight: u, maximized: s, maximizable: h, onClose: () => {
    o ? o() : y(!1);
  }, children: e }) }), document.body) : null;
}, _ = (e, n, o) => d.forwardRef(({
  multiple: r = !1,
  onChange: a,
  value: i,
  url: l,
  idField: s = ge,
  ...h
}, f) => {
  const H = fe(l, s), [S, g] = d.useState(), [A, q] = d.useState(!1), [R, u] = d.useState(""), B = () => {
    u(""), q(!1);
  }, y = ke(f, g), L = (m) => {
    H(m), a && a(r ? [...i ?? [], m[s]] : m[s]), B();
  };
  return /* @__PURE__ */ O(pe, { children: [
    /* @__PURE__ */ t(e, { ref: y, extraOptionsRenderer: ({
      search: m,
      searchIsLoading: W,
      closePopup: U
    }) => !W && /* @__PURE__ */ t(Me, { search: m, onClick: () => {
      u((m || "").trim()), q(!0), U(), S == null || S.blur();
    } }), ...h, idField: s, value: i, multiple: r, onChange: a, url: l }),
    /* @__PURE__ */ t(Le, { open: A, autoHeight: !0, onClose: () => q(!1), ...o, children: /* @__PURE__ */ t(n, { ...h, search: R, onSave: L }) })
  ] });
}), Me = ({
  search: e,
  onClick: n
}) => /* @__PURE__ */ t("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ O(Te, { variant: "outlined", color: "success", icon: Fe.faPlus, onClick: n, children: [
  "Создать",
  e && ` «${e}»`
] }) }), Ne = ({
  items: e,
  onDelete: n,
  columns: o,
  isLoading: r
}) => {
  const a = C(), i = _e({
    enableSorting: !1,
    isLoading: r,
    columns: [...o, a.actions([{
      icon: Re.faTrash,
      key: "delete",
      onClick: (l) => n(l)
    }])],
    data: e || []
  });
  return /* @__PURE__ */ t(De, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: i });
}, I = (e, n) => d.forwardRef((o, r) => {
  const a = d.useCallback(({
    items: i,
    onDelete: l,
    valueCount: s
  }) => /* @__PURE__ */ t(Ne, { items: i, valueCount: s, onDelete: l, columns: n }), [n]);
  return /* @__PURE__ */ t(e, { ref: r, tagListPosition: o.tagListPosition || "bottom", tagListRenderer: a, ...o });
}), D = ({
  fit: e = !1,
  onSave: n,
  onSubmit: o,
  onError: r,
  initialValues: a,
  url: i,
  children: l
}) => {
  const s = Ie({
    method: a != null && a.id ? "PUT" : "POST",
    url: `${i}${a != null && a.id ? `/${a.id}` : ""}`,
    onMutate: (f) => {
      o == null || o(f);
    },
    onSuccess: ({
      data: f
    }) => {
      n == null || n(f);
    },
    onError: (f) => {
      r == null || r(f);
    }
  }), h = ye({
    defaultValues: a,
    mutation: s
  });
  return /* @__PURE__ */ t(Ce, { fit: e, footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(Se, { variant: "contained", color: "success", disabled: s.isPending, onClick: () => h.submit(), children: a != null && a.id ? "Обновить" : "Создать" }) }), children: /* @__PURE__ */ t(be, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: h, children: l(h) }) });
}, je = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-results", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "category_id", control: o.control, rules: {
  required: "Выберите категорию"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }, "category_id"), /* @__PURE__ */ t(c, { name: "title", control: o.control, defaultValue: e, rules: {
  required: "Введите наименование"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title")] }), V = C(), lr = I(w(_(v, je, {
  title: "Новый планируемый результат",
  width: 500
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [V.dictionary("category_id", "programDocCategories", "Категория"), V.display("title", "Наименование")]), xe = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-objectives", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "title", rules: {
  required: "Введите наименование"
}, control: o.control, defaultValue: e, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }, "title")] }), cr = w(_(v, xe, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Ae = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-forms", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "control_type_id", rules: {
  required: "Выберите тип формы аттестации"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }, "control_type_id"), /* @__PURE__ */ t(c, { name: "description", control: o.control, defaultValue: e, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), G = C(), sr = I(w(_(v, Ae, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [G.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), G.display("description", "Описание", {
  size: 200
})]), Pe = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-criteria", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "criterion_type_id", control: o.control, rules: {
  required: "Введите тип критерия"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }, "criterion_type_id"), /* @__PURE__ */ t(c, { name: "description", rules: {
  required: "Введите описание критерия"
}, control: o.control, defaultValue: e, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), J = C(), dr = I(w(_(v, Pe, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [J.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), J.display("description", "Критерий")]), Oe = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-fixations", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "method_id", rules: {
  required: "Выберите метод"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }, "method_id"), /* @__PURE__ */ t(c, { name: "description", defaultValue: e, rules: {
  required: "Введите описание"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), Z = C(), pr = I(w(_(v, Oe, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [Z.dictionary("method_id", "programDocMethodTypes", "Метод"), Z.display("description", "Описание способа фиксации")]), We = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-materials", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "base_knowledge", control: o.control, rules: {
  required: "Введите базовые знания"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }, "base_knowledge"), /* @__PURE__ */ t(c, { name: "material", rules: {
  required: "Введите материалы"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Материалы", placeholder: "Введите материалы", ...r }) }, "material")] }), ee = C(), ur = I(w(_(v, We, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [ee.display("base_knowledge", "Базовые знания"), ee.display("material", "Материалы")]), Ue = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-managements", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "management_type_id", control: o.control, rules: {
  required: "Выберите тип организации образовательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }, "management_type_id"), /* @__PURE__ */ t(c, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), re = C(), hr = I(w(_(v, Ue, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [re.dictionary("management_type_id", "programDocManagementTypes", "Тип"), re.display("description", "Описание")]), $e = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-indoctrinations", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "indoctrination_type_id", control: o.control, rules: {
  required: "Выберите тип воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }, "indoctrination_type_id"), /* @__PURE__ */ t(c, { name: "description", defaultValue: e, control: o.control, rules: {
  required: "Введите наименование воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) }, "description")] }), te = C(), mr = I(w(_(v, $e, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [te.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), te.display("description", "Описание")]), ze = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-developments", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "development_type_id", control: o.control, rules: {
  required: "Введите тип развивающей деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }, "development_type_id"), /* @__PURE__ */ t(c, { name: "description", defaultValue: e, control: o.control, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) }, "description")] }), oe = C(), fr = I(w(_(v, ze, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [oe.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), oe.display("description", "Развивающая деятельность")]), Ke = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-inventories", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "inventory_type_id", rules: {
  required: "Выберите тип материально-технического обеспечения"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(E, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }, "inventory_type_id"), /* @__PURE__ */ t(c, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(N, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), ne = C(), gr = I(w(_(v, Ke, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [ne.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), ne.display("description", "Описание")]), Qe = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-information", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ t(c, { name: "title", rules: {
  required: "Введите наименование"
}, defaultValue: e, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ t(c, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ t(c, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(ae, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year"), /* @__PURE__ */ t(c, { name: "isbn", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) }, "isbn")] }), P = C(), yr = I(w(_(v, Qe, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [P.display("title", "Наименование"), P.display("authors", "Авторы"), P.display("publisher", "Издательство"), P.display("publish_year", "Год издательства"), P.display("isbn", "ISBN")]), Xe = ({
  search: e,
  ...n
}) => /* @__PURE__ */ t(D, { url: "/api/rest/program-doc-books", ...n, children: (o) => [/* @__PURE__ */ t(c, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ t(c, { name: "title", control: o.control, rules: {
  required: "Введите наименование"
}, defaultValue: e, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ t(c, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(T, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ t(c, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ t(ae, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year")] }), K = C(), br = I(w(_(v, Xe, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [K.display("title", "Наименование"), K.display("authors", "Авторы"), K.display("publisher", "Издательство"), K.display("publish_year", "Год издательства")]);
export {
  sr as A,
  br as B,
  D as C,
  fr as D,
  pr as F,
  mr as I,
  Le as M,
  lr as R,
  ir as S,
  cr as T,
  dr as a,
  ur as b,
  hr as c,
  gr as d,
  yr as e,
  je as f,
  xe as g,
  Ae as h,
  Pe as i,
  Oe as j,
  We as k,
  Ue as l,
  $e as m,
  ze as n,
  Ke as o,
  Qe as p,
  Xe as q
};
