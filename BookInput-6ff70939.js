import { j as t, e as ue, a as m, F as pe } from "./library-d3ab1de2.js";
import { h as me, i as fe, R as he, j as ge, k as ye, B as j, z as a, e as y, u as b, F as s, D as B, T as F, a as v, g as w, Q as _, c as M, Y as ae } from "./Boolean-ba03f157.js";
import { r as p, c as be } from "./react-6f5a8403.js";
import { F as ve } from "./icons-ad9f8a73.js";
import { a as D } from "./DictionaryCell-f9be5d5e.js";
import { a as we, T as _e, c as S } from "./index-f96d2d88.js";
import { u as De, B as X } from "./mui-4f485058.js";
import { f as Se } from "./faPlus-da331287.js";
const lr = ({
  children: e,
  ...n
}) => /* @__PURE__ */ t(ue.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: o,
  dragging: i
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
}, i && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...n, children: e });
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "up-right-and-down-left-from-center", i = 512, r = 512, c = ["expand-alt"], l = "f424", d = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = n, e.iconName = o, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(ce);
var le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "down-left-and-up-right-to-center", i = 512, r = 512, c = ["compress-alt"], l = "f422", d = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = n, e.iconName = o, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(le);
var se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "window-minimize", i = 512, r = 512, c = [128469], l = "f2d1", d = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = n, e.iconName = o, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(se);
const xe = p.createContext(null), Q = {
  didCatch: !1,
  error: null
};
class ke extends p.Component {
  constructor(n) {
    super(n), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Q;
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
      for (var o, i, r = arguments.length, c = new Array(r), l = 0; l < r; l++)
        c[l] = arguments[l];
      (o = (i = this.props).onReset) === null || o === void 0 || o.call(i, {
        args: c,
        reason: "imperative-api"
      }), this.setState(Q);
    }
  }
  componentDidCatch(n, o) {
    var i, r;
    (i = (r = this.props).onError) === null || i === void 0 || i.call(r, n, o);
  }
  componentDidUpdate(n, o) {
    const {
      didCatch: i
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (i && o.error !== null && Fe(n.resetKeys, r)) {
      var c, l;
      (c = (l = this.props).onReset) === null || c === void 0 || c.call(l, {
        next: r,
        prev: n.resetKeys,
        reason: "keys"
      }), this.setState(Q);
    }
  }
  render() {
    const {
      children: n,
      fallbackRender: o,
      FallbackComponent: i,
      fallback: r
    } = this.props, {
      didCatch: c,
      error: l
    } = this.state;
    let d = n;
    if (c) {
      const h = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof o == "function")
        d = o(h);
      else if (i)
        d = p.createElement(i, h);
      else if (r === null || p.isValidElement(r))
        d = r;
      else
        throw l;
    }
    return p.createElement(xe.Provider, {
      value: {
        didCatch: c,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, d);
  }
}
function Fe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== n.length || e.some((o, i) => !Object.is(o, n[i]));
}
const O = ({
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
}, children: /* @__PURE__ */ t(ve, { ...n }) }), Te = ({
  bounds: e,
  height: n = 500,
  width: o = 600,
  maximizable: i = !1,
  children: r,
  title: c,
  closable: l = !1,
  onClose: d,
  focused: h = !0,
  onFocus: N,
  folded: E = !1,
  foldable: P = !1,
  position: g,
  onFold: U,
  onMaximize: R,
  maximized: f,
  onMinimize: L,
  updatePosition: q,
  setWidth: V,
  setHeight: A
}) => {
  const C = p.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: I,
    height: k
  } = me(), u = p.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, I, k]), H = p.useRef(null);
  return p.useEffect(() => {
    H.current && !H.current.state.resizing && (f ? H.current.updateSize(u ? {
      width: u.width,
      height: u.height
    } : {
      width: I || 0,
      height: k || 0
    }) : H.current.updateSize({
      width: o,
      height: n
    }));
  }, [f, I, k, u, o, n, E]), p.useEffect(() => {
    H.current && (f ? H.current.updatePosition({
      x: (u == null ? void 0 : u.leftOffset) || 0,
      y: (u == null ? void 0 : u.topOffset) || 0
    }) : g && H.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [f, H.current, u, g, E]), p.useEffect(() => {
    e && !u || k && I && k + I > 0 && !g && !f && (q == null || q({
      x: u ? u.leftOffset + u.width / 2 - o / 2 : (I ?? 0) / 2 - o / 2,
      y: u ? u.topOffset + u.height / 2 - n / 2 : (k ?? 0) / 2 - o / 2
    }));
  }, [g, q, u, f, k, I]), e && !u || !k || !k ? null : /* @__PURE__ */ t(
    he,
    {
      ref: H,
      enableResizing: !f,
      disableDragging: f,
      dragHandleClassName: C,
      className: "window",
      bounds: e ?? void 0,
      css: [{
        willChange: "transform"
      }],
      minHeight: 50,
      minWidth: 200,
      style: E ? {
        display: "none"
      } : {},
      onResizeStop: (z, K, Y) => {
        V == null || V(Y.offsetWidth), A == null || A(Y.offsetHeight);
      },
      onDragStop: (z, K) => {
        q == null || q({
          x: K.lastX,
          y: K.lastY
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
      children: /* @__PURE__ */ m("div", { role: "dialog", onMouseDown: () => {
        !h && N && N();
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
      }, h ? {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 84 161 / var(--tw-border-opacity))"
      } : {
        "--tw-border-opacity": "1",
        borderColor: "rgb(90 88 173 / var(--tw-border-opacity))"
      }]], children: [
        /* @__PURE__ */ m("div", { className: C, onDoubleClick: () => i && (f ? L == null ? void 0 : L() : R == null ? void 0 : R()), css: [{
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
          }, children: c }),
          /* @__PURE__ */ m("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            P && /* @__PURE__ */ t(O, { icon: se.faWindowMinimize, onClick: U, transform: "shrink-4" }),
            i && (f ? /* @__PURE__ */ t(O, { icon: le.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: L }) : /* @__PURE__ */ t(O, { icon: ce.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: R })),
            l && /* @__PURE__ */ t(O, { icon: fe.faXmark, onClick: d })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { css: {
          flex: "1 1 0%",
          overflow: "auto",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
        }, children: /* @__PURE__ */ t(ke, { fallbackRender: ({
          error: z
        }) => /* @__PURE__ */ t("div", { css: {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, children: z }), children: r }) })
      ] })
    }
  );
}, je = ({
  children: e,
  open: n = !1,
  onClose: o,
  title: i,
  width: r,
  height: c,
  maximized: l,
  maximizable: d
}) => {
  const [h, N] = p.useState(void 0), [E, P] = p.useState(n);
  return p.useEffect(() => {
    P(n);
  }, [n]), E ? be.createPortal(/* @__PURE__ */ t("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(Te, { position: h, updatePosition: (g) => {
    N(g);
  }, closable: !0, title: i, width: r, height: h ? c : 0, maximized: l, maximizable: d, onClose: () => {
    o ? o() : P(!1);
  }, children: e }) }), document.body) : null;
}, x = (e, n, o) => p.forwardRef(({
  multiple: i = !1,
  onChange: r,
  value: c,
  url: l,
  idField: d = ye,
  ...h
}, N) => {
  const E = ge(l, d), [P, g] = p.useState(), [U, R] = p.useState(!1), [f, L] = p.useState(""), q = () => {
    L(""), R(!1);
  }, V = De(N, g), A = (C) => {
    E(C), r && r(i ? [...c ?? [], C[d]] : C[d]), q();
  };
  return /* @__PURE__ */ m(pe, { children: [
    /* @__PURE__ */ t(e, { ref: V, extraOptionsRenderer: ({
      search: C,
      searchIsLoading: I,
      closePopup: k
    }) => !I && /* @__PURE__ */ t(qe, { search: C, onClick: () => {
      L((C || "").trim()), R(!0), k(), P == null || P.blur();
    } }), ...h, idField: d, value: c, multiple: i, onChange: r, url: l }),
    /* @__PURE__ */ t(je, { open: U, onClose: () => R(!1), ...o, children: /* @__PURE__ */ t(n, { ...h, search: f, onCreate: A }) })
  ] });
}), qe = ({
  search: e,
  onClick: n
}) => /* @__PURE__ */ t("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ m(j, { variant: "outlined", color: "success", icon: Se.faPlus, onClick: n, children: [
  "Создать",
  e && ` «${e}»`
] }) });
var de = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", o = "trash", i = 448, r = 512, c = [], l = "f1f8", d = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  e.definition = {
    prefix: n,
    iconName: o,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faTrash = e.definition, e.prefix = n, e.iconName = o, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(de);
const Ce = ({
  items: e,
  onDelete: n,
  columns: o,
  isLoading: i
}) => {
  const r = S(), c = we({
    enableSorting: !1,
    isLoading: i,
    columns: [...o, r.actions([{
      icon: de.faTrash,
      key: "delete",
      onClick: (l) => n(l)
    }])],
    data: e || []
  });
  return /* @__PURE__ */ t(_e, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: c });
}, T = (e, n) => p.forwardRef((o, i) => {
  const r = p.useCallback(({
    items: c,
    onDelete: l,
    valueCount: d
  }) => /* @__PURE__ */ t(Ce, { items: c, valueCount: d, onDelete: l, columns: n }), [n]);
  return /* @__PURE__ */ t(e, { ref: i, tagListPosition: o.tagListPosition || "bottom", tagListRenderer: r, ...o });
});
a.object({
  id: a.coerce.number().nullish(),
  category_id: a.coerce.number({
    required_error: "Выберите категорию"
  }),
  title: a.string({
    required_error: "Заполните наименование"
  }).min(1, "Заполните наименование")
}).required({
  category_id: !0,
  title: !0
});
const Ie = ({
  onSave: e,
  search: n
}) => {
  const o = y({
    method: "POST",
    url: "/api/rest/program-doc-results",
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: a.object({
      category_id: a.number({
        required_error: "Выберите категорию"
      }),
      title: a.string({
        required_error: "Заполните наименование"
      })
    }).required({
      category_id: !0,
      title: !0
    }),
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "category_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }),
    /* @__PURE__ */ t(s, { name: "title", control: i.control, defaultValue: n, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Наименование", placeholder: "Введите наименование", ...r }) })
  ] }) });
}, G = S(), sr = T(w(x(_, Ie, {
  title: "Новый планируемый результат"
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [G.dictionary("category_id", "programDocCategories", "Категория"), G.display("title", "Наименование")]), He = a.object({
  title: a.string({
    required_error: "Введите наименование"
  }).min(1, "Заполните наименование")
}).required({
  title: !0
}), Pe = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    mutation: o,
    schema: He
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ t(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: /* @__PURE__ */ t(s, { name: "title", control: i.control, defaultValue: n, render: ({
    field: r
  }) => /* @__PURE__ */ t(F, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }) }) });
}, dr = w(x(_, Pe, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Re = a.object({
  control_type_id: a.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: a.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  control_type_id: !0,
  description: !0
}), Be = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-forms", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Re,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "control_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", control: i.control, defaultValue: n, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, J = S(), ur = T(w(x(_, Be, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [J.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), J.display("description", "Описание", {
  size: 200
})]), Ee = a.object({
  criterion_type_id: a.number({
    required_error: "Заполните тип критерия"
  }),
  description: a.string({
    required_error: "Заполните описание критерия"
  }).min(1, "Заполните описание")
}).required({
  criterion_type_id: !0
}), Le = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-criteria", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Ee,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "criterion_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", control: i.control, defaultValue: n, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, Z = S(), pr = T(w(x(_, Le, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [Z.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), Z.display("description", "Критерий")]), Me = a.object({
  method_id: a.number({
    required_error: "Заполните метод"
  }),
  description: a.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  method_id: !0,
  description: !0
}), Ne = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-fixations", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    mutation: o,
    schema: Me
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "method_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, ee = S(), mr = T(w(x(_, Ne, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [ee.dictionary("method_id", "programDocMethodTypes", "Метод"), ee.display("description", "Описание способа фиксации")]), Ve = a.object({
  base_knowledge: a.string({
    required_error: "Заполните базовые знания"
  }),
  material: a.string({
    required_error: "Заполните материалы"
  }).min(1, "Заполните материалы")
}).required({
  base_knowledge: !0,
  material: !0
}), Ae = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-materials", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Ve,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "base_knowledge", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }),
    /* @__PURE__ */ t(s, { name: "material", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Материалы", placeholder: "Введите материалы", ...r }) })
  ] }) });
}, re = S(), fr = T(w(x(_, Ae, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [re.display("base_knowledge", "Базовые знания"), re.display("material", "Материалы")]), $e = a.object({
  management_type_id: a.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  management_type_id: !0
}), Oe = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-managements", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: $e,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "management_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, te = S(), hr = T(w(x(_, Oe, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [te.dictionary("management_type_id", "programDocManagementTypes", "Тип"), te.display("description", "Описание")]), We = a.object({
  indoctrination_type_id: a.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  indoctrination_type_id: !0
}), Ue = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-indoctrinations", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: We,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "indoctrination_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) })
  ] }) });
}, ie = S(), gr = T(w(x(_, Ue, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [ie.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), ie.display("description", "Описание")]), ze = a.object({
  development_type_id: a.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  development_type_id: !0
}), Ke = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-developments", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: ze,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "development_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) })
  ] }) });
}, oe = S(), yr = T(w(x(_, Ke, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [oe.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), oe.display("description", "Развивающая деятельность")]), Qe = a.object({
  inventory_type_id: a.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: a.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  inventory_type_id: !0,
  description: !0
}), Xe = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-inventories", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Qe,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "inventory_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, ne = S(), br = T(w(x(_, Xe, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [ne.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), ne.display("description", "Описание")]), Ye = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименование"),
  publisher: a.string().optional(),
  publish_year: a.string().optional(),
  isbn: a.string().optional()
}).required({
  title: !0
}), Ge = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-information", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Ye,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(j, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "authors", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Авторы", placeholder: "Введите авторов", ...r }) }),
    /* @__PURE__ */ t(s, { name: "title", defaultValue: n, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Наименование", placeholder: "Введите наименование", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publisher", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Издательство", placeholder: "Введите издательство", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publish_year", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(ae, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }),
    /* @__PURE__ */ t(s, { name: "isbn", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) })
  ] }) });
}, $ = S(), vr = T(w(x(_, Ge, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [$.display("title", "Наименование"), $.display("authors", "Авторы"), $.display("publisher", "Издательство"), $.display("publish_year", "Год издательства"), $.display("isbn", "ISBN")]), Je = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименования"),
  publisher: a.string().optional(),
  publish_year: a.string().optional()
}).required({
  title: !0
}), Ze = ({
  onSave: e,
  search: n
}) => {
  const o = y("/api/rest/program-doc-books", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Je,
    mutation: o
  });
  return /* @__PURE__ */ t(D, { footer: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: o.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "authors", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Авторы", placeholder: "Введите авторов", ...r }) }),
    /* @__PURE__ */ t(s, { name: "title", control: i.control, defaultValue: n, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Наименование", placeholder: "Введите наименование", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publisher", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(F, { label: "Издательство", placeholder: "Введите издательство", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publish_year", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(ae, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) })
  ] }) });
}, W = S(), wr = T(w(x(_, Ze, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [W.display("title", "Наименование"), W.display("authors", "Авторы"), W.display("publisher", "Издательство"), W.display("publish_year", "Год издательства")]);
export {
  ur as A,
  wr as B,
  pr as C,
  yr as D,
  mr as F,
  gr as I,
  je as M,
  sr as R,
  lr as S,
  dr as T,
  fr as a,
  hr as b,
  br as c,
  vr as d,
  Ie as e,
  de as f,
  Pe as g,
  Be as h,
  Le as i,
  Ne as j,
  Ae as k,
  Oe as l,
  Ue as m,
  Ke as n,
  Xe as o,
  Ge as p,
  Ze as q
};
