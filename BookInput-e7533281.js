import { j as t, d as de, a as m, F as ue } from "./library-ce9feb41.js";
import { h as pe, i as me, R as he, j as fe, k as ge, B as T, z as a, e as y, u as b, F as s, D as B, T as D, a as v, g as S, Q as k, c as M, Y as oe } from "./Boolean-6991984d.js";
import { r as p, c as ye } from "./react-6f5a8403.js";
import { F as be } from "./icons-ad9f8a73.js";
import { a as w } from "./DictionaryCell-1271e557.js";
import { a as ve, T as we, c as x } from "./index-cf733dba.js";
import { u as _e, B as X } from "./mui-4f485058.js";
import { f as De } from "./faPlus-da331287.js";
const ar = ({
  children: e,
  ...o
}) => /* @__PURE__ */ t(de.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: n,
  dragging: i
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
}, i && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...o, children: e });
var ae = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = "fas", n = "up-right-and-down-left-from-center", i = 512, r = 512, c = ["expand-alt"], l = "f424", d = "M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z";
  e.definition = {
    prefix: o,
    iconName: n,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faUpRightAndDownLeftFromCenter = e.definition, e.prefix = o, e.iconName = n, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(ae);
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = "fas", n = "down-left-and-up-right-to-center", i = 512, r = 512, c = ["compress-alt"], l = "f422", d = "M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H296c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272H216c13.3 0 24 10.7 24 24V440c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z";
  e.definition = {
    prefix: o,
    iconName: n,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faDownLeftAndUpRightToCenter = e.definition, e.prefix = o, e.iconName = n, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(ce);
var le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = "fas", n = "window-minimize", i = 512, r = 512, c = [128469], l = "f2d1", d = "M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z";
  e.definition = {
    prefix: o,
    iconName: n,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faWindowMinimize = e.definition, e.prefix = o, e.iconName = n, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(le);
const Se = p.createContext(null), Q = {
  didCatch: !1,
  error: null
};
class ke extends p.Component {
  constructor(o) {
    super(o), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Q;
  }
  static getDerivedStateFromError(o) {
    return {
      didCatch: !0,
      error: o
    };
  }
  resetErrorBoundary() {
    const {
      error: o
    } = this.state;
    if (o !== null) {
      for (var n, i, r = arguments.length, c = new Array(r), l = 0; l < r; l++)
        c[l] = arguments[l];
      (n = (i = this.props).onReset) === null || n === void 0 || n.call(i, {
        args: c,
        reason: "imperative-api"
      }), this.setState(Q);
    }
  }
  componentDidCatch(o, n) {
    var i, r;
    (i = (r = this.props).onError) === null || i === void 0 || i.call(r, o, n);
  }
  componentDidUpdate(o, n) {
    const {
      didCatch: i
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (i && n.error !== null && xe(o.resetKeys, r)) {
      var c, l;
      (c = (l = this.props).onReset) === null || c === void 0 || c.call(l, {
        next: r,
        prev: o.resetKeys,
        reason: "keys"
      }), this.setState(Q);
    }
  }
  render() {
    const {
      children: o,
      fallbackRender: n,
      FallbackComponent: i,
      fallback: r
    } = this.props, {
      didCatch: c,
      error: l
    } = this.state;
    let d = o;
    if (c) {
      const f = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof n == "function")
        d = n(f);
      else if (i)
        d = p.createElement(i, f);
      else if (r === null || p.isValidElement(r))
        d = r;
      else
        throw l;
    }
    return p.createElement(Se.Provider, {
      value: {
        didCatch: c,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, d);
  }
}
function xe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== o.length || e.some((n, i) => !Object.is(n, o[i]));
}
const $ = ({
  onClick: e,
  ...o
}) => /* @__PURE__ */ t("div", { role: "button", onClick: e, onMouseDown: (n) => n.stopPropagation(), draggable: "false", css: {
  cursor: "pointer",
  opacity: "0.7",
  transitionProperty: "opacity",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    opacity: "1"
  }
}, children: /* @__PURE__ */ t(be, { ...o }) }), Fe = ({
  bounds: e,
  height: o = 500,
  width: n = 600,
  maximizable: i = !1,
  children: r,
  title: c,
  closable: l = !1,
  onClose: d,
  focused: f = !0,
  onFocus: N,
  folded: E = !1,
  foldable: P = !1,
  position: g,
  onFold: U,
  onMaximize: R,
  maximized: h,
  onMinimize: L,
  updatePosition: q,
  setWidth: V,
  setHeight: A
}) => {
  const C = p.useMemo(() => "header-" + Math.random().toString(16).slice(2), []), {
    width: I,
    height: _
  } = pe(), u = p.useMemo(() => e && e.clientWidth > 0 && e.clientHeight > 0 ? {
    topOffset: e.offsetTop || 0,
    leftOffset: e.offsetLeft || 0,
    width: e.clientWidth,
    height: e.clientHeight
  } : null, [e, I, _]), H = p.useRef(null);
  return p.useEffect(() => {
    H.current && !H.current.state.resizing && (h ? H.current.updateSize(u ? {
      width: u.width,
      height: u.height
    } : {
      width: I || 0,
      height: _ || 0
    }) : H.current.updateSize({
      width: n,
      height: o
    }));
  }, [h, I, _, u, n, o, E]), p.useEffect(() => {
    H.current && (h ? H.current.updatePosition({
      x: (u == null ? void 0 : u.leftOffset) || 0,
      y: (u == null ? void 0 : u.topOffset) || 0
    }) : g && H.current.updatePosition({
      x: g.x,
      y: g.y
    }));
  }, [h, H.current, u, g, E]), p.useEffect(() => {
    e && !u || _ && I && _ + I > 0 && !g && !h && (q == null || q({
      x: u ? u.leftOffset + u.width / 2 - n / 2 : (I ?? 0) / 2 - n / 2,
      y: u ? u.topOffset + u.height / 2 - o / 2 : (_ ?? 0) / 2 - n / 2
    }));
  }, [g, q, u, h, _, I]), e && !u || !_ || !_ ? null : /* @__PURE__ */ t(
    he,
    {
      ref: H,
      enableResizing: !h,
      disableDragging: h,
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
        height: o,
        width: n,
        ...g || {
          x: 0,
          y: 0
        }
      },
      children: /* @__PURE__ */ m("div", { role: "dialog", onMouseDown: () => {
        !f && N && N();
      }, css: [{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        overflow: "hidden"
      }, h ? {
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
        /* @__PURE__ */ m("div", { className: C, onDoubleClick: () => i && (h ? L == null ? void 0 : L() : R == null ? void 0 : R()), css: [{
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
        }, !h && {
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
          }, children: c }),
          /* @__PURE__ */ m("div", { css: {
            display: "flex",
            alignItems: "center",
            gap: "0.625rem"
          }, children: [
            P && /* @__PURE__ */ t($, { icon: le.faWindowMinimize, onClick: U, transform: "shrink-4" }),
            i && (h ? /* @__PURE__ */ t($, { icon: ce.faDownLeftAndUpRightToCenter, transform: "shrink-4", onClick: L }) : /* @__PURE__ */ t($, { icon: ae.faUpRightAndDownLeftFromCenter, transform: "shrink-4", onClick: R })),
            l && /* @__PURE__ */ t($, { icon: me.faXmark, onClick: d })
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
}, Te = ({
  children: e,
  open: o = !1,
  onClose: n,
  title: i,
  width: r,
  height: c,
  maximized: l,
  maximizable: d
}) => {
  const [f, N] = p.useState(void 0), [E, P] = p.useState(o);
  return p.useEffect(() => {
    P(o);
  }, [o]), E ? ye.createPortal(/* @__PURE__ */ t("div", { className: "inl-modal", css: {
    position: "fixed",
    left: "0px",
    top: "0px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(0 0 0 / 0.3)"
  }, children: /* @__PURE__ */ t(Fe, { position: f, updatePosition: (g) => {
    N(g);
  }, closable: !0, title: i, width: r, height: f ? c : 0, maximized: l, maximizable: d, onClose: () => {
    n ? n() : P(!1);
  }, children: e }) }), document.body) : null;
}, F = (e, o, n) => p.forwardRef(({
  multiple: i = !1,
  onChange: r,
  value: c,
  url: l,
  idField: d = ge,
  ...f
}, N) => {
  const E = fe(l, d), [P, g] = p.useState(), [U, R] = p.useState(!1), [h, L] = p.useState(""), q = () => {
    L(""), R(!1);
  }, V = _e(N, g), A = (C) => {
    E(C), r && r(i ? [...c ?? [], C[d]] : C[d]), q();
  };
  return /* @__PURE__ */ m(ue, { children: [
    /* @__PURE__ */ t(e, { ref: V, extraOptionsRenderer: ({
      search: C,
      searchIsLoading: I,
      closePopup: _
    }) => !I && /* @__PURE__ */ t(je, { search: C, onClick: () => {
      L((C || "").trim()), R(!0), _(), P == null || P.blur();
    } }), ...f, idField: d, value: c, multiple: i, onChange: r, url: l }),
    /* @__PURE__ */ t(Te, { open: U, onClose: () => R(!1), ...n, children: /* @__PURE__ */ t(o, { ...f, search: h, onCreate: A }) })
  ] });
}), je = ({
  search: e,
  onClick: o
}) => /* @__PURE__ */ t("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ m(T, { variant: "outlined", color: "success", icon: De.faPlus, onClick: o, children: [
  "Создать",
  e && ` «${e}»`
] }) });
var se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = "fas", n = "trash", i = 448, r = 512, c = [], l = "f1f8", d = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  e.definition = {
    prefix: o,
    iconName: n,
    icon: [
      i,
      r,
      c,
      l,
      d
    ]
  }, e.faTrash = e.definition, e.prefix = o, e.iconName = n, e.width = i, e.height = r, e.ligatures = c, e.unicode = l, e.svgPathData = d, e.aliases = c;
})(se);
const qe = ({
  items: e,
  onDelete: o,
  columns: n,
  isLoading: i
}) => {
  const r = x(), c = ve({
    enableSorting: !1,
    isLoading: i,
    columns: [...n, r.actions([{
      icon: se.faTrash,
      key: "delete",
      onClick: (l) => o(l)
    }])],
    data: e || []
  });
  return /* @__PURE__ */ t(we, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: c });
}, j = (e, o) => p.forwardRef((n, i) => {
  const r = p.useCallback(({
    items: c,
    onDelete: l,
    valueCount: d
  }) => /* @__PURE__ */ t(qe, { items: c, valueCount: d, onDelete: l, columns: o }), [o]);
  return /* @__PURE__ */ t(e, { ref: i, tagListPosition: n.tagListPosition || "bottom", tagListRenderer: r, ...n });
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
const Ce = ({
  onSave: e,
  search: o
}) => {
  const n = y({
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
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "category_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }),
    /* @__PURE__ */ t(s, { name: "title", control: i.control, defaultValue: o, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Наименование", placeholder: "Введите наименование", ...r }) })
  ] }) });
}, G = x(), cr = j(S(F(k, Ce, {
  title: "Новый планируемый результат"
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [G.dictionary("category_id", "programDocCategories", "Категория"), G.display("title", "Наименование")]), Ie = a.object({
  title: a.string({
    required_error: "Введите наименование"
  }).min(1, "Заполните наименование")
}).required({
  title: !0
}), He = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-objectives", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    mutation: n,
    schema: Ie
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ t(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: /* @__PURE__ */ t(s, { name: "title", control: i.control, defaultValue: o, render: ({
    field: r
  }) => /* @__PURE__ */ t(D, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }) }) });
}, lr = S(F(k, He, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Pe = a.object({
  control_type_id: a.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: a.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  control_type_id: !0,
  description: !0
}), Re = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-forms", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Pe,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "control_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", control: i.control, defaultValue: o, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, J = x(), sr = j(S(F(k, Re, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [J.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), J.display("description", "Описание", {
  size: 200
})]), Be = a.object({
  criterion_type_id: a.number({
    required_error: "Заполните тип критерия"
  }),
  description: a.string({
    required_error: "Заполните описание критерия"
  }).min(1, "Заполните описание")
}).required({
  criterion_type_id: !0
}), Ee = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-criteria", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Be,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "criterion_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", control: i.control, defaultValue: o, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, Z = x(), dr = j(S(F(k, Ee, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [Z.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), Z.display("description", "Критерий")]), Le = a.object({
  method_id: a.number({
    required_error: "Заполните метод"
  }),
  description: a.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  method_id: !0,
  description: !0
}), ur = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-fixations", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    mutation: n,
    schema: Le
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "method_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, Me = a.object({
  base_knowledge: a.string({
    required_error: "Заполните базовые знания"
  }),
  material: a.string({
    required_error: "Заполните материалы"
  }).min(1, "Заполните материалы")
}).required({
  base_knowledge: !0,
  material: !0
}), Ne = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-materials", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Me,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "base_knowledge", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }),
    /* @__PURE__ */ t(s, { name: "material", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Материалы", placeholder: "Введите материалы", ...r }) })
  ] }) });
}, ee = x(), pr = j(S(F(k, Ne, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [ee.display("base_knowledge", "Базовые знания"), ee.display("material", "Материалы")]), Ve = a.object({
  management_type_id: a.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  management_type_id: !0
}), Ae = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-managements", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Ve,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "management_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, re = x(), mr = j(S(F(k, Ae, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [re.dictionary("management_type_id", "programDocManagementTypes", "Тип"), re.display("description", "Описание")]), Oe = a.object({
  indoctrination_type_id: a.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  indoctrination_type_id: !0
}), $e = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-indoctrinations", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Oe,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "indoctrination_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) })
  ] }) });
}, te = x(), hr = j(S(F(k, $e, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [te.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), te.display("description", "Описание")]), We = a.object({
  development_type_id: a.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  }).min(1, "Заполните описание")
}).required({
  development_type_id: !0
}), Ue = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-developments", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: We,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "development_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) })
  ] }) });
}, ie = x(), fr = j(S(F(k, Ue, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [ie.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), ie.display("description", "Развивающая деятельность")]), ze = a.object({
  inventory_type_id: a.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: a.string({
    required_error: "Заполните описание"
  }).min(1, "Заполните описание")
}).required({
  inventory_type_id: !0,
  description: !0
}), Ke = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-inventories", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: ze,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "inventory_type_id", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(B, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }),
    /* @__PURE__ */ t(s, { name: "description", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(M, { label: "Описание", placeholder: "Введите описание", ...r }) })
  ] }) });
}, ne = x(), gr = j(S(F(k, Ke, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [ne.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), ne.display("description", "Описание")]), Qe = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименование"),
  publisher: a.string().optional(),
  publish_year: a.string().optional(),
  isbn: a.string().optional()
}).required({
  title: !0
}), Xe = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-information", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Qe,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(T, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "authors", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Авторы", placeholder: "Введите авторов", ...r }) }),
    /* @__PURE__ */ t(s, { name: "title", defaultValue: o, control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Наименование", placeholder: "Введите наименование", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publisher", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Издательство", placeholder: "Введите издательство", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publish_year", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(oe, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }),
    /* @__PURE__ */ t(s, { name: "isbn", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) })
  ] }) });
}, O = x(), yr = j(S(F(k, Xe, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [O.display("title", "Наименование"), O.display("authors", "Авторы"), O.display("publisher", "Издательство"), O.display("publish_year", "Год издательства"), O.display("isbn", "ISBN")]), Ye = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }).min(1, "Заполните наименования"),
  publisher: a.string().optional(),
  publish_year: a.string().optional()
}).required({
  title: !0
}), Ge = ({
  onSave: e,
  search: o
}) => {
  const n = y("/api/rest/program-doc-books", {
    onSuccess: ({
      data: r
    }) => {
      e == null || e(r);
    }
  }), i = b({
    schema: Ye,
    mutation: n
  });
  return /* @__PURE__ */ t(w, { bbar: /* @__PURE__ */ t("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ t(X, { variant: "contained", color: "success", disabled: n.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ m(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ t(s, { name: "authors", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Авторы", placeholder: "Введите авторов", ...r }) }),
    /* @__PURE__ */ t(s, { name: "title", control: i.control, defaultValue: o, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Наименование", placeholder: "Введите наименование", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publisher", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(D, { label: "Издательство", placeholder: "Введите издательство", ...r }) }),
    /* @__PURE__ */ t(s, { name: "publish_year", control: i.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(oe, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) })
  ] }) });
}, W = x(), br = j(S(F(k, Ge, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [W.display("title", "Наименование"), W.display("authors", "Авторы"), W.display("publisher", "Издательство"), W.display("publish_year", "Год издательства")]);
export {
  sr as A,
  br as B,
  dr as C,
  fr as D,
  ur as F,
  hr as I,
  Te as M,
  cr as R,
  ar as S,
  lr as T,
  j as a,
  F as b,
  pr as c,
  mr as d,
  gr as e,
  se as f,
  yr as g,
  Ce as h,
  He as i,
  Re as j,
  Ee as k,
  Ne as l,
  Ae as m,
  $e as n,
  Ue as o,
  Ke as p,
  Xe as q,
  Ge as r
};
