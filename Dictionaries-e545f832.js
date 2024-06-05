import { b as v, j as n, F as _ } from "./library-b46aabc8.js";
import { F as S } from "./icons-ad9f8a73.js";
import { a as j, P as V } from "./DictionaryCell-43b9ac3c.js";
import { M as $, f as X, S as Y, g as q, R as G, T as J, h as K, A as Z, i as ee, a as te, j as re, F as ie, k as oe, b as ne, l as se, c as le, m as ae, I as de, n as ce, D as ue, o as pe, d as me, p as fe, e as he, q as ge, B as ye, r as ve } from "./BookInput-1175a6d3.js";
import { r as f, d as N, g as Fe } from "./react-6f5a8403.js";
import { u as be, T as xe, c as we } from "./index-6fd53625.js";
import { B as P, g as Te, b as Ce, F as Ie, u as _e } from "./Boolean-093779dd.js";
import { u as U } from "./configureQueriedCombo-9938bbed.js";
import { P as Ee, a as Pe, A as ke, I as R } from "./mui-2ff488a7.js";
import { a as De, f as Se } from "./faPenAlt-466fde8a.js";
import "./table-f5369550.js";
import "./faEye-ea161ce6.js";
function I(e) {
  if (typeof window > "u")
    return e;
  const t = f.useRef(null);
  return f.useLayoutEffect(() => {
    t.current = e;
  }), f.useCallback((...r) => {
    var l;
    (l = t.current) === null || l === void 0 || l.call(t, ...r);
  }, []);
}
const A = {};
function Re(e, t) {
  A[e] || (A[e] = !0, console.error("[material-ui-popup-state] WARNING", t));
}
const ze = {
  isOpen: !1,
  setAnchorElUsed: !1,
  anchorEl: void 0,
  anchorPosition: void 0,
  hovered: !1,
  focused: !1,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: !1,
  _deferNextClose: !1
};
function Be({
  parentPopupState: e,
  popupId: t,
  variant: r,
  disableAutoFocus: l
}) {
  const d = f.useRef(!0);
  f.useEffect(() => (d.current = !0, () => {
    d.current = !1;
  }), []);
  const [a, p] = f.useState(ze), u = f.useCallback((s) => {
    d.current && p(s);
  }, []), h = f.useCallback((s) => u((i) => ({
    ...i,
    setAnchorElUsed: !0,
    anchorEl: s ?? void 0
  })), []), g = I((s) => (a.isOpen ? b(s) : m(s), a)), m = I((s) => {
    const i = s instanceof Element ? void 0 : s, c = s instanceof Element ? s : (s == null ? void 0 : s.currentTarget) instanceof Element ? s.currentTarget : void 0;
    if ((i == null ? void 0 : i.type) === "touchstart") {
      u((y) => ({
        ...y,
        _deferNextOpen: !0
      }));
      return;
    }
    const z = i == null ? void 0 : i.clientX, B = i == null ? void 0 : i.clientY, Q = typeof z == "number" && typeof B == "number" ? {
      left: z,
      top: B
    } : void 0, M = (y) => {
      if (!s && !y.setAnchorElUsed && r !== "dialog" && Re("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), e) {
        if (!e.isOpen)
          return y;
        setTimeout(() => e._setChildPopupState(x));
      }
      const k = {
        ...y,
        isOpen: !0,
        anchorPosition: Q,
        hovered: (i == null ? void 0 : i.type) === "mouseover" || y.hovered,
        focused: (i == null ? void 0 : i.type) === "focus" || y.focused,
        _openEventType: i == null ? void 0 : i.type
      };
      return i != null && i.currentTarget ? y.setAnchorElUsed || (k.anchorEl = i == null ? void 0 : i.currentTarget) : c && (k.anchorEl = c), k;
    };
    u((y) => y._deferNextOpen ? (setTimeout(() => u(M), 0), {
      ...y,
      _deferNextOpen: !1
    }) : M(y));
  }), F = (s) => {
    const {
      _childPopupState: i
    } = s;
    return setTimeout(() => {
      i == null || i.close(), e == null || e._setChildPopupState(null);
    }), {
      ...s,
      isOpen: !1,
      hovered: !1,
      focused: !1
    };
  }, b = I((s) => {
    const i = s instanceof Element ? void 0 : s;
    if ((i == null ? void 0 : i.type) === "touchstart") {
      u((c) => ({
        ...c,
        _deferNextClose: !0
      }));
      return;
    }
    u((c) => c._deferNextClose ? (setTimeout(() => u(F), 0), {
      ...c,
      _deferNextClose: !1
    }) : F(c));
  }), w = f.useCallback((s, i) => {
    s ? m(i) : b(i);
  }, []), T = I((s) => {
    const {
      relatedTarget: i
    } = s;
    u((c) => c.hovered && !(i instanceof Element && D(i, x)) ? c.focused ? {
      ...c,
      hovered: !1
    } : F(c) : c);
  }), C = I((s) => {
    if (!s)
      return;
    const {
      relatedTarget: i
    } = s;
    u((c) => c.focused && !(i instanceof Element && D(i, x)) ? c.hovered ? {
      ...c,
      focused: !1
    } : F(c) : c);
  }), E = f.useCallback((s) => u((i) => ({
    ...i,
    _childPopupState: s
  })), []), x = {
    ...a,
    setAnchorEl: h,
    popupId: t,
    variant: r,
    open: m,
    close: b,
    toggle: g,
    setOpen: w,
    onBlur: C,
    onMouseLeave: T,
    disableAutoFocus: l ?? !!(a.hovered || a.focused),
    _setChildPopupState: E
  };
  return x;
}
function Me({
  isOpen: e,
  popupId: t,
  variant: r
}) {
  return {
    ...r === "popover" ? {
      "aria-haspopup": !0,
      "aria-controls": e && t != null ? t : void 0
    } : r === "popper" ? {
      "aria-describedby": e && t != null ? t : void 0
    } : void 0
  };
}
function Ne(e) {
  return {
    ...Me(e),
    onClick: e.open,
    onTouchStart: e.open
  };
}
function Ae({
  isOpen: e,
  anchorEl: t,
  anchorPosition: r,
  close: l,
  popupId: d,
  onMouseLeave: a,
  disableAutoFocus: p,
  _openEventType: u
}) {
  return {
    id: d,
    anchorEl: t,
    anchorPosition: r,
    anchorReference: u === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: l,
    onMouseLeave: a,
    ...p && {
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0
    }
  };
}
function He(e, {
  popupId: t
}) {
  if (!t)
    return null;
  const r = typeof e.getRootNode == "function" ? e.getRootNode() : document;
  return typeof r.getElementById == "function" ? r.getElementById(t) : null;
}
function D(e, t) {
  const {
    anchorEl: r,
    _childPopupState: l
  } = t;
  return H(r, e) || H(He(e, t), e) || l != null && D(e, l);
}
function H(e, t) {
  if (!e)
    return !1;
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
const Le = ({
  children: e,
  onConfirm: t
}) => {
  const r = Be({
    variant: "popover",
    popupId: "confirm-popover"
  }), {
    anchorPosition: l,
    anchorReference: d,
    ...a
  } = Ae(r);
  return /* @__PURE__ */ v(_, { children: [
    e(Ne(r)),
    /* @__PURE__ */ v(Ee, { ...a, disablePortal: !1, onBlur: () => r.close(), placement: "bottom-end", modifiers: [
      {
        name: "offset",
        options: {
          offset: [10, 10]
        }
      },
      {
        name: "arrow",
        enabled: !0,
        options: {
          padding: 15
          // 5px from the edges of the popper
        }
      }
      // {
      //   name: "flip",
      //   enabled: true,
      //   options: {
      //     altBoundary: true,
      //     rootBoundary: "document",
      //     padding: 8,
      //   },
      // },
      // {
      //   name: "preventOverflow",
      //   enabled: true,
      //   options: {
      //     altAxis: true,
      //     altBoundary: true,
      //     tether: true,
      //     rootBoundary: "document",
      //     padding: 8,
      //   },
      // },
    ], children: [
      /* @__PURE__ */ n("div", { "data-popper-arrow": !0, css: Pe`
            width: 12px;
            height: 12px;
            &:before {
              background-color: white;
              content: "";
              display: block;
              position: absolute;
              width: 12px;
              height: 12px;
              top: -6px;
              transform: rotate(45deg);
              left: calc(50% - 6px);
            }
          ` }),
      /* @__PURE__ */ v("div", { css: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "1rem",
        borderRadius: "0.25rem",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        "--tw-shadow": "12px 12px 15px 0px rgb(0 0 0 / 0.1),0 -5px 38px -1px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored": "12px 12px 15px 0px var(--tw-shadow-color), 0 -5px 38px -1px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, children: [
        /* @__PURE__ */ n("div", { children: "Вы действительно хотите удалить этот элемент?" }),
        /* @__PURE__ */ v("div", { css: {
          display: "flex",
          gap: "0.5rem"
        }, children: [
          /* @__PURE__ */ n(P, { variant: "outlined", size: "small", onClick: () => r.close(), children: "Нет" }),
          /* @__PURE__ */ n(P, { size: "small", autoFocus: !0, variant: "contained", onClick: () => {
            r.close(), t();
          }, children: "Да" })
        ] })
      ] })
    ] })
  ] });
}, je = ({
  id: e,
  open: t,
  onClose: r,
  record: l,
  titleField: d,
  mutation: a,
  inputField: p
}) => {
  const [u, h] = f.useState(), g = Te({
    onValid: ({
      replace: m
    }) => {
      a.mutate({
        type: "replace_links",
        new_id: m
      }, {
        onError: (F) => {
          var b;
          h(((b = F.response) == null ? void 0 : b.data.message) || F.message);
        }
      });
    }
  });
  return /* @__PURE__ */ n($, { title: "Удаление", width: 450, autoHeight: !0, open: t, resizable: !1, onClose: r, children: /* @__PURE__ */ n(j, { footer: /* @__PURE__ */ v("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    gap: "0.5rem"
  }, children: [
    /* @__PURE__ */ n(P, { size: "small", variant: "contained", onClick: () => {
      r();
    }, children: "Закрыть" }),
    /* @__PURE__ */ n(P, { size: "small", variant: "contained", color: "error", onClick: () => {
      g.submit();
    }, children: "Заменить" })
  ] }), children: /* @__PURE__ */ n("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ v(Ie, { form: g, css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    u && /* @__PURE__ */ n(ke, { severity: "error", children: u }),
    /* @__PURE__ */ v("p", { children: [
      "Значение",
      " ",
      d ? /* @__PURE__ */ v(_, { children: [
        '"',
        l[d],
        '"'
      ] }) : null,
      " ",
      "используется в существующих документах."
    ] }),
    /* @__PURE__ */ n("p", { children: "Выберите значение для замены:" }),
    /* @__PURE__ */ n(Ce, { control: g.control, name: "replace", rules: {
      required: "Выберите замену"
    }, render: ({
      field: m
    }) => /* @__PURE__ */ n(p, { filters: [{
      property: "id",
      value: e,
      type: "numeric",
      comparison: "neq"
    }], ...m }) })
  ] }) }) }) });
}, $e = ({
  id: e,
  url: t,
  record: r,
  titleField: l,
  inputField: d
}) => {
  const a = U(), [p, u] = f.useState(!1), h = _e({
    method: "DELETE",
    url: `${t}/${r.id}`,
    onSuccess: () => {
      a(t);
    }
  }), g = f.useCallback(async () => {
    try {
      await h.mutateAsync({});
    } catch {
      u(!0);
    }
  }, [r]);
  return /* @__PURE__ */ v(_, { children: [
    /* @__PURE__ */ n(Le, { onConfirm: () => {
      g();
    }, children: (m) => /* @__PURE__ */ n(R, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))"
      }
    }], ...m, children: /* @__PURE__ */ n(S, { icon: X.faTrash }) }) }),
    p && /* @__PURE__ */ n(je, { id: e, open: p, record: r, titleField: l, inputField: d, mutation: h, onClose: () => u(!1) })
  ] });
}, W = ({
  title: e,
  onClose: t,
  record: r,
  form: l,
  onSave: d
}) => /* @__PURE__ */ n($, { title: e, resizable: !1, width: 450, autoHeight: !0, open: !0, onClose: t, children: /* @__PURE__ */ n(l, { fit: !1, initialValues: r, onSave: (a) => {
  d == null || d(a), t();
} }) }), Ue = ({
  form: e,
  title: t,
  onSave: r
}) => {
  const [l, d] = f.useState(!1);
  return /* @__PURE__ */ v(_, { children: [
    /* @__PURE__ */ n(R, { size: "small", onClick: () => d(!0), children: /* @__PURE__ */ n(S, { icon: De.faPlus }) }),
    l && /* @__PURE__ */ n(W, { form: e, title: t, onClose: () => {
      d(!1);
    }, onSave: (a) => {
      r == null || r(a);
    } })
  ] });
}, We = ({
  record: e,
  title: t,
  form: r,
  onSave: l
}) => {
  const [d, a] = f.useState(!1);
  return /* @__PURE__ */ v(_, { children: [
    /* @__PURE__ */ n(R, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(202 138 4 / var(--tw-text-opacity))"
      }
    }], onClick: () => a(!0), children: /* @__PURE__ */ n(S, { icon: Se.faPenAlt }) }),
    d && /* @__PURE__ */ n(W, { form: r, record: e, title: t, onSave: (p) => {
      l == null || l(p);
    }, onClose: () => {
      a(!1);
    } })
  ] });
};
var O = { exports: {} };
(function(e) {
  (function(t) {
    function r(a) {
      var p = new Error(a);
      return p.name = "ValueError", p;
    }
    function l(a) {
      return function(p) {
        var u = Array.prototype.slice.call(arguments, 1), h = 0, g = "UNDEFINED";
        return p.replace(
          /([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,
          function(m, F, b, w) {
            if (F != null)
              return F;
            var T = b;
            if (T.length > 0) {
              if (g === "IMPLICIT")
                throw r("cannot switch from implicit to explicit numbering");
              g = "EXPLICIT";
            } else {
              if (g === "EXPLICIT")
                throw r("cannot switch from explicit to implicit numbering");
              g = "IMPLICIT", T = String(h), h += 1;
            }
            var C = T.split("."), E = (/^\d+$/.test(C[0]) ? C : ["0"].concat(C)).reduce(function(x, s) {
              return x.reduce(function(i, c) {
                return c != null && s in Object(c) ? [typeof c[s] == "function" ? c[s]() : c[s]] : [];
              }, []);
            }, [u]).reduce(function(x, s) {
              return s;
            }, "");
            if (w == null)
              return E;
            if (Object.prototype.hasOwnProperty.call(a, w))
              return a[w](E);
            throw r('no transformer named "' + w + '"');
          }
        );
      };
    }
    var d = l({});
    d.create = l, d.extend = function(a, p) {
      var u = l(p);
      a.format = function() {
        var h = Array.prototype.slice.call(arguments);
        return h.unshift(this), u.apply(t, h);
      };
    }, e.exports = d;
  }).call(N, N);
})(O);
var Oe = O.exports;
const Qe = /* @__PURE__ */ Fe(Oe), o = we(), L = [{
  id: "results",
  title: "Планируемые результаты",
  url: "/api/rest/program-doc-results",
  form: q,
  titleField: "title",
  inputField: G,
  createFormTitle: "Новый планируемый результат",
  editFormTitle: "Планируемый результат #{id}",
  columns: [o.id(), o.dictionary("category_id", "programDocCategories", "Категория"), o.display("title", "Наименование")]
}, {
  id: "goals",
  title: "Задачи",
  titleField: "title",
  url: "/api/rest/program-doc-objectives",
  inputField: J,
  form: K,
  createFormTitle: "Новая задача",
  editFormTitle: "Задача #{id}",
  columns: [o.id(), o.display("title", "Задача")]
}, {
  id: "attestation-forms",
  title: "Формы аттестации",
  url: "/api/rest/program-doc-forms",
  titleField: "description",
  inputField: Z,
  form: ee,
  createFormTitle: "Новая аттестационная форма",
  editFormTitle: "Аттестационная форма #{id}",
  columns: [o.id(), o.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
    size: 100
  }), o.display("description", "Описание", {
    size: 200
  })]
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  url: "/api/rest/program-doc-criteria",
  titleField: "description",
  inputField: te,
  form: re,
  createFormTitle: "Новый критерий оценки учебных результатов",
  editFormTitle: "Критерий оценки #{id}",
  columns: [o.id(), o.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), o.display("description", "Критерий")]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: ie,
  form: oe,
  createFormTitle: "Новый способ фиксации учебных результатов",
  editFormTitle: "Способ фиксации #{id}",
  columns: [o.id(), o.dictionary("method_id", "programDocMethodTypes", "Метод"), o.display("description", "Описание способа фиксации")]
}, {
  id: "materials",
  title: "Методические материалы",
  url: "/api/rest/program-doc-materials",
  titleField: "material",
  inputField: ne,
  form: se,
  createFormTitle: "Новый методический материал",
  editFormTitle: "Методический материал #{id}",
  columns: [o.id(), o.display("base_knowledge", "Базовые знания"), o.display("material", "Материалы")]
}, {
  id: "managements",
  title: "Особенности организации образовательной деятельности",
  url: "/api/rest/program-doc-managements",
  titleField: "description",
  inputField: le,
  form: ae,
  createFormTitle: "Новая особенность организации образовательной деятельности",
  editFormTitle: "Особенность организации образовательной деятельности #{id}",
  columns: [o.id(), o.dictionary("management_type_id", "programDocManagementTypes", "Тип"), o.display("description", "Описание")]
}, {
  id: "indoctrinations",
  title: "Воспитательная деятельность",
  url: "/api/rest/program-doc-indoctrinations",
  titleField: "description",
  inputField: de,
  form: ce,
  createFormTitle: "Новая воспитательная деятельность",
  editFormTitle: "Воспитательная деятельность #{id}",
  columns: [o.id(), o.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), o.display("description", "Описание")]
}, {
  id: "developments",
  title: "Развивающая деятельность",
  url: "/api/rest/program-doc-developments",
  titleField: "description",
  inputField: ue,
  form: pe,
  createFormTitle: "Новая развивающая деятельность",
  editFormTitle: "Развивающая деятельность #{id}",
  columns: [o.id(), o.dictionary("development_type_id", "programDocDevelopmentTypes", "Тип"), o.display("description", "Развивающая деятельность")]
}, {
  id: "inventories",
  title: "Материально-техническое обеспечение",
  url: "/api/rest/program-doc-inventories",
  titleField: "description",
  inputField: me,
  form: fe,
  createFormTitle: "Новое материально-техническое обеспечение",
  editFormTitle: "Материально-техническое обеспечение #{id}",
  columns: [o.id(), o.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), o.display("description", "Описание")]
}, {
  id: "information",
  title: "Информационное обеспечение",
  url: "/api/rest/program-doc-information",
  titleField: "title",
  inputField: he,
  form: ge,
  createFormTitle: "Новое информационное обеспечение",
  editFormTitle: "Информационное обеспечение #{id}",
  columns: [o.id(), o.display("title", "Наименование"), o.display("authors", "Авторы"), o.display("publisher", "Издательство"), o.display("publish_year", "Год издательства"), o.display("isbn", "ISBN")]
}, {
  id: "books",
  title: "Список литературы",
  url: "/api/rest/program-doc-books",
  titleField: "title",
  inputField: ye,
  form: ve,
  createFormTitle: "Новая литература",
  editFormTitle: "Литература #{id}",
  columns: [o.id(), o.display("title", "Наименование"), o.display("authors", "Авторы"), o.display("publisher", "Издательство"), o.display("publish_year", "Год издательства")]
}], Ve = ({
  items: e,
  active: t,
  setActive: r
}) => /* @__PURE__ */ n("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: e.map(({
  id: l,
  title: d
}) => /* @__PURE__ */ n(Xe, { title: d, active: t === l, onClick: () => r(l) }, l)) }), Xe = ({
  title: e,
  onClick: t,
  active: r
}) => /* @__PURE__ */ n("div", { css: [{
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, r ? {
  userSelect: "none",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  color: "rgb(255 255 255 / var(--tw-text-opacity))"
} : {
  cursor: "pointer",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(229 230 244 / var(--tw-bg-opacity))"
  }
}], onClick: t, children: /* @__PURE__ */ n("span", { children: e }) }), Ye = ({
  dictionary: {
    url: e,
    form: t,
    createFormTitle: r,
    editFormTitle: l,
    columns: d,
    titleField: a,
    filters: p,
    inputField: u
  }
}) => {
  const h = U(), g = be(e, [...d, o.actions([{
    key: "edit",
    render: (m) => /* @__PURE__ */ n(We, { title: Qe(l, m), form: t, onSave: () => h(e), record: m })
  }, {
    key: "delete",
    render: (m) => /* @__PURE__ */ n($e, { id: m.id, url: e, titleField: a, inputField: u, record: m })
  }])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultFilters: p
  });
  return /* @__PURE__ */ n(j, { fit: !0, header: /* @__PURE__ */ n(Ue, { title: r, onSave: () => h(e), form: t }), footer: /* @__PURE__ */ n(V, { table: g }), children: /* @__PURE__ */ n(xe, { table: g }) });
}, lt = () => {
  const [e, t] = f.useState("results"), r = f.useMemo(() => L.find(({
    id: l
  }) => l === e), [e]);
  return /* @__PURE__ */ v(Y, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ n("div", { css: {
      height: "100%",
      minWidth: "9rem",
      flexBasis: "20%",
      overflowY: "auto"
    }, children: /* @__PURE__ */ n(Ve, { items: L, active: e, setActive: t }) }),
    /* @__PURE__ */ n("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      borderLeftWidth: "1px"
    }, children: r && /* @__PURE__ */ n(Ye, { dictionary: r }, r.id) })
  ] });
};
export {
  lt as default
};
