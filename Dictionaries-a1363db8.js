import { b as v, j as n, F as I } from "./library-cedc3deb.js";
import { F as S } from "./icons-ad9f8a73.js";
import { a as L, P as O } from "./DictionaryCell-728213ab.js";
import { M as j, f as Q, S as X, g as Y, R as G, T as J, h as K, A as Z, i as ee, a as te, j as oe, F as ie, k as re, b as ne, l as le, c as se, m as ae, I as de, n as ce, D as ue, o as pe, d as me, p as fe, e as he, q as ye, B as ge, r as ve } from "./BookInput-183197dc.js";
import { r as f, d as N, g as be } from "./react-6f5a8403.js";
import { u as Fe, T as xe, c as we } from "./index-c378ac40.js";
import { u as Te } from "./useHttpMutation-768b8cd0.js";
import { u as $ } from "./configureQueriedCombo-f2ec2687.js";
import { B as P, e as _e, a as Ce, F as Ie } from "./Checkbox-99638ef1.js";
import { P as Ee, a as Pe, A as ke, I as R } from "./mui-bfddf798.js";
import { a as De, f as Se } from "./faPenAlt-466fde8a.js";
import "./table-f5369550.js";
import "./faEye-ea161ce6.js";
function C(e) {
  if (typeof window > "u")
    return e;
  const t = f.useRef(null);
  return f.useLayoutEffect(() => {
    t.current = e;
  }), f.useCallback((...o) => {
    var s;
    (s = t.current) === null || s === void 0 || s.call(t, ...o);
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
  variant: o,
  disableAutoFocus: s
}) {
  const d = f.useRef(!0);
  f.useEffect(() => (d.current = !0, () => {
    d.current = !1;
  }), []);
  const [a, p] = f.useState(ze), u = f.useCallback((l) => {
    d.current && p(l);
  }, []), h = f.useCallback((l) => u((r) => ({
    ...r,
    setAnchorElUsed: !0,
    anchorEl: l ?? void 0
  })), []), y = C((l) => (a.isOpen ? F(l) : m(l), a)), m = C((l) => {
    const r = l instanceof Element ? void 0 : l, c = l instanceof Element ? l : (l == null ? void 0 : l.currentTarget) instanceof Element ? l.currentTarget : void 0;
    if ((r == null ? void 0 : r.type) === "touchstart") {
      u((g) => ({
        ...g,
        _deferNextOpen: !0
      }));
      return;
    }
    const z = r == null ? void 0 : r.clientX, B = r == null ? void 0 : r.clientY, W = typeof z == "number" && typeof B == "number" ? {
      left: z,
      top: B
    } : void 0, M = (g) => {
      if (!l && !g.setAnchorElUsed && o !== "dialog" && Re("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), e) {
        if (!e.isOpen)
          return g;
        setTimeout(() => e._setChildPopupState(x));
      }
      const k = {
        ...g,
        isOpen: !0,
        anchorPosition: W,
        hovered: (r == null ? void 0 : r.type) === "mouseover" || g.hovered,
        focused: (r == null ? void 0 : r.type) === "focus" || g.focused,
        _openEventType: r == null ? void 0 : r.type
      };
      return r != null && r.currentTarget ? g.setAnchorElUsed || (k.anchorEl = r == null ? void 0 : r.currentTarget) : c && (k.anchorEl = c), k;
    };
    u((g) => g._deferNextOpen ? (setTimeout(() => u(M), 0), {
      ...g,
      _deferNextOpen: !1
    }) : M(g));
  }), b = (l) => {
    const {
      _childPopupState: r
    } = l;
    return setTimeout(() => {
      r == null || r.close(), e == null || e._setChildPopupState(null);
    }), {
      ...l,
      isOpen: !1,
      hovered: !1,
      focused: !1
    };
  }, F = C((l) => {
    const r = l instanceof Element ? void 0 : l;
    if ((r == null ? void 0 : r.type) === "touchstart") {
      u((c) => ({
        ...c,
        _deferNextClose: !0
      }));
      return;
    }
    u((c) => c._deferNextClose ? (setTimeout(() => u(b), 0), {
      ...c,
      _deferNextClose: !1
    }) : b(c));
  }), w = f.useCallback((l, r) => {
    l ? m(r) : F(r);
  }, []), T = C((l) => {
    const {
      relatedTarget: r
    } = l;
    u((c) => c.hovered && !(r instanceof Element && D(r, x)) ? c.focused ? {
      ...c,
      hovered: !1
    } : b(c) : c);
  }), _ = C((l) => {
    if (!l)
      return;
    const {
      relatedTarget: r
    } = l;
    u((c) => c.focused && !(r instanceof Element && D(r, x)) ? c.hovered ? {
      ...c,
      focused: !1
    } : b(c) : c);
  }), E = f.useCallback((l) => u((r) => ({
    ...r,
    _childPopupState: l
  })), []), x = {
    ...a,
    setAnchorEl: h,
    popupId: t,
    variant: o,
    open: m,
    close: F,
    toggle: y,
    setOpen: w,
    onBlur: _,
    onMouseLeave: T,
    disableAutoFocus: s ?? !!(a.hovered || a.focused),
    _setChildPopupState: E
  };
  return x;
}
function Me({
  isOpen: e,
  popupId: t,
  variant: o
}) {
  return {
    ...o === "popover" ? {
      "aria-haspopup": !0,
      "aria-controls": e && t != null ? t : void 0
    } : o === "popper" ? {
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
  anchorPosition: o,
  close: s,
  popupId: d,
  onMouseLeave: a,
  disableAutoFocus: p,
  _openEventType: u
}) {
  return {
    id: d,
    anchorEl: t,
    anchorPosition: o,
    anchorReference: u === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: s,
    onMouseLeave: a,
    ...p && {
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0
    }
  };
}
function qe(e, {
  popupId: t
}) {
  if (!t)
    return null;
  const o = typeof e.getRootNode == "function" ? e.getRootNode() : document;
  return typeof o.getElementById == "function" ? o.getElementById(t) : null;
}
function D(e, t) {
  const {
    anchorEl: o,
    _childPopupState: s
  } = t;
  return q(o, e) || q(qe(e, t), e) || s != null && D(e, s);
}
function q(e, t) {
  if (!e)
    return !1;
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
const He = ({
  children: e,
  onConfirm: t
}) => {
  const o = Be({
    variant: "popover",
    popupId: "confirm-popover"
  }), {
    anchorPosition: s,
    anchorReference: d,
    ...a
  } = Ae(o);
  return /* @__PURE__ */ v(I, { children: [
    e(Ne(o)),
    /* @__PURE__ */ v(Ee, { ...a, disablePortal: !1, onBlur: () => o.close(), placement: "bottom-end", modifiers: [
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
          /* @__PURE__ */ n(P, { variant: "outlined", size: "small", onClick: () => o.close(), children: "Нет" }),
          /* @__PURE__ */ n(P, { size: "small", autoFocus: !0, variant: "contained", onClick: () => {
            o.close(), t();
          }, children: "Да" })
        ] })
      ] })
    ] })
  ] });
}, Le = ({
  id: e,
  open: t,
  onClose: o,
  record: s,
  titleField: d,
  mutation: a,
  inputField: p
}) => {
  const [u, h] = f.useState(), y = _e({
    onValid: ({
      replace: m
    }) => {
      a.mutate({
        type: "replace_links",
        new_id: m
      }, {
        onError: (b) => {
          var F;
          h(((F = b.response) == null ? void 0 : F.data.message) || b.message);
        }
      });
    }
  });
  return /* @__PURE__ */ n(j, { title: "Удаление", width: 450, autoHeight: !0, open: t, resizable: !1, onClose: o, children: /* @__PURE__ */ n(L, { footer: /* @__PURE__ */ v("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    gap: "0.5rem"
  }, children: [
    /* @__PURE__ */ n(P, { size: "small", variant: "contained", onClick: () => {
      o();
    }, children: "Закрыть" }),
    /* @__PURE__ */ n(P, { size: "small", variant: "contained", color: "error", onClick: () => {
      y.submit();
    }, children: "Заменить" })
  ] }), children: /* @__PURE__ */ n("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ v(Ie, { form: y, css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    u && /* @__PURE__ */ n(ke, { severity: "error", children: u }),
    /* @__PURE__ */ v("p", { children: [
      "Значение",
      " ",
      d ? /* @__PURE__ */ v(I, { children: [
        '"',
        s[d],
        '"'
      ] }) : null,
      " ",
      "используется в существующих документах."
    ] }),
    /* @__PURE__ */ n("p", { children: "Выберите значение для замены:" }),
    /* @__PURE__ */ n(Ce, { control: y.control, name: "replace", rules: {
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
}, je = ({
  id: e,
  url: t,
  record: o,
  titleField: s,
  inputField: d
}) => {
  const a = $(), [p, u] = f.useState(!1), h = Te({
    method: "DELETE",
    url: `${t}/${o.id}`,
    onSuccess: () => {
      a(t);
    }
  }), y = f.useCallback(async () => {
    try {
      await h.mutateAsync({});
    } catch {
      u(!0);
    }
  }, [o]);
  return /* @__PURE__ */ v(I, { children: [
    /* @__PURE__ */ n(He, { onConfirm: () => {
      y();
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
    }], ...m, children: /* @__PURE__ */ n(S, { icon: Q.faTrash }) }) }),
    p && /* @__PURE__ */ n(Le, { id: e, open: p, record: o, titleField: s, inputField: d, mutation: h, onClose: () => u(!1) })
  ] });
}, U = ({
  title: e,
  onClose: t,
  record: o,
  form: s,
  onSave: d
}) => /* @__PURE__ */ n(j, { title: e, resizable: !1, width: 450, autoHeight: !0, open: !0, onClose: t, children: /* @__PURE__ */ n(s, { fit: !1, initialValues: o, onSave: (a) => {
  d == null || d(a), t();
} }) }), $e = ({
  form: e,
  title: t,
  onSave: o
}) => {
  const [s, d] = f.useState(!1);
  return /* @__PURE__ */ v(I, { children: [
    /* @__PURE__ */ n(R, { size: "small", onClick: () => d(!0), children: /* @__PURE__ */ n(S, { icon: De.faPlus }) }),
    s && /* @__PURE__ */ n(U, { form: e, title: t, onClose: () => {
      d(!1);
    }, onSave: (a) => {
      o == null || o(a);
    } })
  ] });
}, Ue = ({
  record: e,
  title: t,
  form: o,
  onSave: s
}) => {
  const [d, a] = f.useState(!1);
  return /* @__PURE__ */ v(I, { children: [
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
    d && /* @__PURE__ */ n(U, { form: o, record: e, title: t, onSave: (p) => {
      s == null || s(p);
    }, onClose: () => {
      a(!1);
    } })
  ] });
};
var V = { exports: {} };
(function(e) {
  (function(t) {
    function o(a) {
      var p = new Error(a);
      return p.name = "ValueError", p;
    }
    function s(a) {
      return function(p) {
        var u = Array.prototype.slice.call(arguments, 1), h = 0, y = "UNDEFINED";
        return p.replace(
          /([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,
          function(m, b, F, w) {
            if (b != null)
              return b;
            var T = F;
            if (T.length > 0) {
              if (y === "IMPLICIT")
                throw o("cannot switch from implicit to explicit numbering");
              y = "EXPLICIT";
            } else {
              if (y === "EXPLICIT")
                throw o("cannot switch from explicit to implicit numbering");
              y = "IMPLICIT", T = String(h), h += 1;
            }
            var _ = T.split("."), E = (/^\d+$/.test(_[0]) ? _ : ["0"].concat(_)).reduce(function(x, l) {
              return x.reduce(function(r, c) {
                return c != null && l in Object(c) ? [typeof c[l] == "function" ? c[l]() : c[l]] : [];
              }, []);
            }, [u]).reduce(function(x, l) {
              return l;
            }, "");
            if (w == null)
              return E;
            if (Object.prototype.hasOwnProperty.call(a, w))
              return a[w](E);
            throw o('no transformer named "' + w + '"');
          }
        );
      };
    }
    var d = s({});
    d.create = s, d.extend = function(a, p) {
      var u = s(p);
      a.format = function() {
        var h = Array.prototype.slice.call(arguments);
        return h.unshift(this), u.apply(t, h);
      };
    }, e.exports = d;
  }).call(N, N);
})(V);
var Ve = V.exports;
const We = /* @__PURE__ */ be(Ve), i = we(), H = [{
  id: "results",
  title: "Планируемые результаты",
  url: "/api/rest/program-doc-results",
  form: Y,
  titleField: "title",
  inputField: G,
  createFormTitle: "Новый планируемый результат",
  editFormTitle: "Планируемый результат #{id}",
  columns: [i.id(), i.dictionary("category_id", "programDocCategories", "Категория"), i.display("title", "Наименование")]
}, {
  id: "goals",
  title: "Задачи",
  titleField: "title",
  url: "/api/rest/program-doc-objectives",
  inputField: J,
  form: K,
  createFormTitle: "Новая задача",
  editFormTitle: "Задача #{id}",
  columns: [i.id(), i.display("title", "Задача")]
}, {
  id: "attestation-forms",
  title: "Формы аттестации",
  url: "/api/rest/program-doc-forms",
  titleField: "description",
  inputField: Z,
  form: ee,
  createFormTitle: "Новая аттестационная форма",
  editFormTitle: "Аттестационная форма #{id}",
  columns: [i.id(), i.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
    size: 100
  }), i.display("description", "Описание", {
    size: 200
  }), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  url: "/api/rest/program-doc-criteria",
  titleField: "description",
  inputField: te,
  form: oe,
  createFormTitle: "Новый критерий оценки учебных результатов",
  editFormTitle: "Критерий оценки #{id}",
  columns: [i.id(), i.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), i.display("description", "Критерий"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: ie,
  form: re,
  createFormTitle: "Новый способ фиксации учебных результатов",
  editFormTitle: "Способ фиксации #{id}",
  columns: [i.id(), i.dictionary("method_id", "programDocMethodTypes", "Метод"), i.display("description", "Описание способа фиксации"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "materials",
  title: "Методические материалы",
  url: "/api/rest/program-doc-materials",
  titleField: "material",
  inputField: ne,
  form: le,
  createFormTitle: "Новый методический материал",
  editFormTitle: "Методический материал #{id}",
  columns: [i.id(), i.display("base_knowledge", "Базовые знания"), i.display("material", "Материалы"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "managements",
  title: "Особенности организации образовательной деятельности",
  url: "/api/rest/program-doc-managements",
  titleField: "description",
  inputField: se,
  form: ae,
  createFormTitle: "Новая особенность организации образовательной деятельности",
  editFormTitle: "Особенность организации образовательной деятельности #{id}",
  columns: [i.id(), i.dictionary("management_type_id", "programDocManagementTypes", "Тип"), i.display("description", "Описание"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "indoctrinations",
  title: "Воспитательная деятельность",
  url: "/api/rest/program-doc-indoctrinations",
  titleField: "description",
  inputField: de,
  form: ce,
  createFormTitle: "Новая воспитательная деятельность",
  editFormTitle: "Воспитательная деятельность #{id}",
  columns: [i.id(), i.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), i.display("description", "Описание")]
}, {
  id: "developments",
  title: "Развивающая деятельность",
  url: "/api/rest/program-doc-developments",
  titleField: "description",
  inputField: ue,
  form: pe,
  createFormTitle: "Новая развивающая деятельность",
  editFormTitle: "Развивающая деятельность #{id}",
  columns: [i.id(), i.dictionary("development_type_id", "programDocDevelopmentTypes", "Тип"), i.display("description", "Развивающая деятельность"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "inventories",
  title: "Материально-техническое обеспечение",
  url: "/api/rest/program-doc-inventories",
  titleField: "description",
  inputField: me,
  form: fe,
  createFormTitle: "Новое материально-техническое обеспечение",
  editFormTitle: "Материально-техническое обеспечение #{id}",
  columns: [i.id(), i.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), i.display("description", "Описание")]
}, {
  id: "information",
  title: "Информационное обеспечение",
  url: "/api/rest/program-doc-information",
  titleField: "title",
  inputField: he,
  form: ye,
  createFormTitle: "Новое информационное обеспечение",
  editFormTitle: "Информационное обеспечение #{id}",
  columns: [i.id(), i.display("title", "Наименование"), i.display("authors", "Авторы"), i.display("publisher", "Издательство"), i.display("publish_year", "Год издательства"), i.display("isbn", "ISBN"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}, {
  id: "books",
  title: "Список литературы",
  url: "/api/rest/program-doc-books",
  titleField: "title",
  inputField: ge,
  form: ve,
  createFormTitle: "Новая литература",
  editFormTitle: "Литература #{id}",
  columns: [i.id(), i.display("title", "Наименование"), i.display("authors", "Авторы"), i.display("publisher", "Издательство"), i.display("publish_year", "Год издательства"), i.boolean("is_deleted", "Удалена")],
  filters: [{
    property: "is_deleted",
    value: !1,
    comparison: "eq",
    type: "boolean"
  }]
}], Oe = ({
  items: e,
  active: t,
  setActive: o
}) => /* @__PURE__ */ n("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: e.map(({
  id: s,
  title: d
}) => /* @__PURE__ */ n(Qe, { title: d, active: t === s, onClick: () => o(s) }, s)) }), Qe = ({
  title: e,
  onClick: t,
  active: o
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
}, o ? {
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
}], onClick: t, children: /* @__PURE__ */ n("span", { children: e }) }), Xe = ({
  dictionary: {
    url: e,
    form: t,
    createFormTitle: o,
    editFormTitle: s,
    columns: d,
    titleField: a,
    filters: p,
    inputField: u
  }
}) => {
  const h = $(), y = Fe(e, [...d, i.actions([{
    key: "edit",
    render: (m) => /* @__PURE__ */ n(Ue, { title: We(s, m), form: t, onSave: () => h(e), record: m })
  }, {
    key: "delete",
    render: (m) => /* @__PURE__ */ n(je, { id: m.id, url: e, titleField: a, inputField: u, record: m })
  }])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    },
    defaultFilters: p
  });
  return /* @__PURE__ */ n(L, { fit: !0, header: /* @__PURE__ */ n($e, { title: o, onSave: () => h(e), form: t }), footer: /* @__PURE__ */ n(O, { table: y }), children: /* @__PURE__ */ n(xe, { table: y }) });
}, at = () => {
  const [e, t] = f.useState("results"), o = f.useMemo(() => H.find(({
    id: s
  }) => s === e), [e]);
  return /* @__PURE__ */ v(X, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ n("div", { css: {
      height: "100%",
      minWidth: "9rem",
      flexBasis: "20%",
      overflowY: "auto"
    }, children: /* @__PURE__ */ n(Oe, { items: H, active: e, setActive: t }) }),
    /* @__PURE__ */ n("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      borderLeftWidth: "1px"
    }, children: o && /* @__PURE__ */ n(Xe, { dictionary: o }, o.id) })
  ] });
};
export {
  at as default
};
