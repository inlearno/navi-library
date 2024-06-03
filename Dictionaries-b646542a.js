import { b, j as n, F as _ } from "./library-13fd97e1.js";
import { F as S } from "./icons-ad9f8a73.js";
import { a as j, P as V } from "./DictionaryCell-d02866e3.js";
import { M as $, f as X, S as Y, g as q, R as G, T as J, h as K, A as Z, i as ee, a as te, j as ie, F as re, k as oe, b as ne, l as se, c as le, m as ae, I as de, n as ce, D as ue, o as pe, d as me, p as fe, e as he, q as ge, B as ye, r as ve } from "./BookInput-400afa07.js";
import { r as m, d as N, g as Fe } from "./react-6f5a8403.js";
import { u as be, T as we, c as xe } from "./index-5194c745.js";
import { B as P, g as Te, b as Ce, F as Ie, u as _e } from "./Boolean-f89df973.js";
import { u as U } from "./configureQueriedCombo-d2dec9d5.js";
import { P as Ee, a as Pe, A as ke, I as R } from "./mui-2ff488a7.js";
import { a as De, f as Se } from "./faPenAlt-466fde8a.js";
import "./table-f5369550.js";
import "./faEye-ea161ce6.js";
function I(e) {
  if (typeof window > "u")
    return e;
  const t = m.useRef(null);
  return m.useLayoutEffect(() => {
    t.current = e;
  }), m.useCallback((...i) => {
    var l;
    (l = t.current) === null || l === void 0 || l.call(t, ...i);
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
  variant: i,
  disableAutoFocus: l
}) {
  const a = m.useRef(!0);
  m.useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []);
  const [d, p] = m.useState(ze), c = m.useCallback((s) => {
    a.current && p(s);
  }, []), h = m.useCallback((s) => c((r) => ({
    ...r,
    setAnchorElUsed: !0,
    anchorEl: s ?? void 0
  })), []), g = I((s) => (d.isOpen ? f(s) : y(s), d)), y = I((s) => {
    const r = s instanceof Element ? void 0 : s, u = s instanceof Element ? s : (s == null ? void 0 : s.currentTarget) instanceof Element ? s.currentTarget : void 0;
    if ((r == null ? void 0 : r.type) === "touchstart") {
      c((F) => ({
        ...F,
        _deferNextOpen: !0
      }));
      return;
    }
    const z = r == null ? void 0 : r.clientX, B = r == null ? void 0 : r.clientY, Q = typeof z == "number" && typeof B == "number" ? {
      left: z,
      top: B
    } : void 0, M = (F) => {
      if (!s && !F.setAnchorElUsed && i !== "dialog" && Re("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), e) {
        if (!e.isOpen)
          return F;
        setTimeout(() => e._setChildPopupState(w));
      }
      const k = {
        ...F,
        isOpen: !0,
        anchorPosition: Q,
        hovered: (r == null ? void 0 : r.type) === "mouseover" || F.hovered,
        focused: (r == null ? void 0 : r.type) === "focus" || F.focused,
        _openEventType: r == null ? void 0 : r.type
      };
      return r != null && r.currentTarget ? F.setAnchorElUsed || (k.anchorEl = r == null ? void 0 : r.currentTarget) : u && (k.anchorEl = u), k;
    };
    c((F) => F._deferNextOpen ? (setTimeout(() => c(M), 0), {
      ...F,
      _deferNextOpen: !1
    }) : M(F));
  }), v = (s) => {
    const {
      _childPopupState: r
    } = s;
    return setTimeout(() => {
      r == null || r.close(), e == null || e._setChildPopupState(null);
    }), {
      ...s,
      isOpen: !1,
      hovered: !1,
      focused: !1
    };
  }, f = I((s) => {
    const r = s instanceof Element ? void 0 : s;
    if ((r == null ? void 0 : r.type) === "touchstart") {
      c((u) => ({
        ...u,
        _deferNextClose: !0
      }));
      return;
    }
    c((u) => u._deferNextClose ? (setTimeout(() => c(v), 0), {
      ...u,
      _deferNextClose: !1
    }) : v(u));
  }), x = m.useCallback((s, r) => {
    s ? y(r) : f(r);
  }, []), T = I((s) => {
    const {
      relatedTarget: r
    } = s;
    c((u) => u.hovered && !(r instanceof Element && D(r, w)) ? u.focused ? {
      ...u,
      hovered: !1
    } : v(u) : u);
  }), C = I((s) => {
    if (!s)
      return;
    const {
      relatedTarget: r
    } = s;
    c((u) => u.focused && !(r instanceof Element && D(r, w)) ? u.hovered ? {
      ...u,
      focused: !1
    } : v(u) : u);
  }), E = m.useCallback((s) => c((r) => ({
    ...r,
    _childPopupState: s
  })), []), w = {
    ...d,
    setAnchorEl: h,
    popupId: t,
    variant: i,
    open: y,
    close: f,
    toggle: g,
    setOpen: x,
    onBlur: C,
    onMouseLeave: T,
    disableAutoFocus: l ?? !!(d.hovered || d.focused),
    _setChildPopupState: E
  };
  return w;
}
function Me({
  isOpen: e,
  popupId: t,
  variant: i
}) {
  return {
    ...i === "popover" ? {
      "aria-haspopup": !0,
      "aria-controls": e && t != null ? t : void 0
    } : i === "popper" ? {
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
  anchorPosition: i,
  close: l,
  popupId: a,
  onMouseLeave: d,
  disableAutoFocus: p,
  _openEventType: c
}) {
  return {
    id: a,
    anchorEl: t,
    anchorPosition: i,
    anchorReference: c === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: e,
    onClose: l,
    onMouseLeave: d,
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
  const i = typeof e.getRootNode == "function" ? e.getRootNode() : document;
  return typeof i.getElementById == "function" ? i.getElementById(t) : null;
}
function D(e, t) {
  const {
    anchorEl: i,
    _childPopupState: l
  } = t;
  return H(i, e) || H(He(e, t), e) || l != null && D(e, l);
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
  const i = Be({
    variant: "popover",
    popupId: "confirm-popover"
  }), {
    anchorPosition: l,
    anchorReference: a,
    ...d
  } = Ae(i);
  return /* @__PURE__ */ b(_, { children: [
    e(Ne(i)),
    /* @__PURE__ */ b(Ee, { ...d, disablePortal: !1, onBlur: () => i.close(), placement: "bottom-end", modifiers: [
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
      /* @__PURE__ */ b("div", { css: {
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
        /* @__PURE__ */ b("div", { css: {
          display: "flex",
          gap: "0.5rem"
        }, children: [
          /* @__PURE__ */ n(P, { variant: "outlined", size: "small", onClick: () => i.close(), children: "Нет" }),
          /* @__PURE__ */ n(P, { size: "small", autoFocus: !0, variant: "contained", onClick: () => {
            i.close(), t();
          }, children: "Да" })
        ] })
      ] })
    ] })
  ] });
}, je = ({
  id: e,
  open: t,
  onClose: i,
  record: l,
  titleField: a,
  mutation: d,
  inputField: p
}) => {
  const [c, h] = m.useState(), g = Te({
    onValid: ({
      replace: y
    }) => {
      d.mutate({
        type: "replace_links",
        new_id: y
      }, {
        onError: (v) => {
          var f;
          h(((f = v.response) == null ? void 0 : f.data.message) || v.message);
        }
      });
    }
  });
  return /* @__PURE__ */ n($, { title: "Удаление", width: 450, autoHeight: !0, open: t, resizable: !1, onClose: i, children: /* @__PURE__ */ n(j, { footer: /* @__PURE__ */ b("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    gap: "0.5rem"
  }, children: [
    /* @__PURE__ */ n(P, { size: "small", variant: "contained", onClick: () => {
      i();
    }, children: "Закрыть" }),
    /* @__PURE__ */ n(P, { size: "small", variant: "contained", color: "error", onClick: () => {
      g.submit();
    }, children: "Заменить" })
  ] }), children: /* @__PURE__ */ n("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ b(Ie, { form: g, css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    c && /* @__PURE__ */ n(ke, { severity: "error", children: c }),
    /* @__PURE__ */ b("p", { children: [
      "Значение",
      " ",
      a ? /* @__PURE__ */ b(_, { children: [
        '"',
        l[a],
        '"'
      ] }) : null,
      " ",
      "используется в существующих документах."
    ] }),
    /* @__PURE__ */ n("p", { children: "Выберите значение для замены:" }),
    /* @__PURE__ */ n(Ce, { control: g.control, name: "replace", rules: {
      required: "Выберите замену"
    }, render: ({
      field: y
    }) => /* @__PURE__ */ n(p, { filters: [{
      property: "id",
      value: e,
      type: "numeric",
      comparison: "neq"
    }], ...y }) })
  ] }) }) }) });
}, $e = ({
  id: e,
  url: t,
  record: i,
  titleField: l,
  inputField: a
}) => {
  const d = U(), [p, c] = m.useState(!1), h = _e({
    method: "DELETE",
    url: `${t}/${i.id}`,
    onSuccess: () => {
      d(t);
    }
  }), g = m.useCallback(async () => {
    try {
      await h.mutateAsync({});
    } catch {
      c(!0);
    }
  }, [i]);
  return /* @__PURE__ */ b(_, { children: [
    /* @__PURE__ */ n(Le, { onConfirm: () => {
      g();
    }, children: (y) => /* @__PURE__ */ n(R, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))"
      }
    }], ...y, children: /* @__PURE__ */ n(S, { icon: X.faTrash }) }) }),
    p && /* @__PURE__ */ n(je, { id: e, open: p, record: i, titleField: l, inputField: a, mutation: h, onClose: () => c(!1) })
  ] });
}, W = ({
  title: e,
  onClose: t,
  record: i,
  form: l,
  onSave: a
}) => /* @__PURE__ */ n($, { title: e, resizable: !1, width: 450, autoHeight: !0, open: !0, onClose: t, children: /* @__PURE__ */ n(l, { fit: !1, initialValues: i, onSave: (d) => {
  a == null || a(d), t();
} }) }), Ue = ({
  form: e,
  title: t,
  onSave: i
}) => {
  const [l, a] = m.useState(!1);
  return /* @__PURE__ */ b(_, { children: [
    /* @__PURE__ */ n(R, { size: "small", onClick: () => a(!0), children: /* @__PURE__ */ n(S, { icon: De.faPlus }) }),
    l && /* @__PURE__ */ n(W, { form: e, title: t, onClose: () => {
      a(!1);
    }, onSave: (d) => {
      i == null || i(d);
    } })
  ] });
}, We = ({
  record: e,
  showForm: t,
  title: i,
  form: l,
  onSave: a
}) => {
  const [d, p] = m.useState(!1);
  return m.useEffect(() => {
    p(t || !1);
  }, [t]), /* @__PURE__ */ b(_, { children: [
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
    }], onClick: () => p(!0), children: /* @__PURE__ */ n(S, { icon: Se.faPenAlt }) }),
    d && /* @__PURE__ */ n(W, { form: l, record: e, title: i, onSave: (c) => {
      a == null || a(c);
    }, onClose: () => {
      p(!1);
    } })
  ] });
};
var O = { exports: {} };
(function(e) {
  (function(t) {
    function i(d) {
      var p = new Error(d);
      return p.name = "ValueError", p;
    }
    function l(d) {
      return function(p) {
        var c = Array.prototype.slice.call(arguments, 1), h = 0, g = "UNDEFINED";
        return p.replace(
          /([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,
          function(y, v, f, x) {
            if (v != null)
              return v;
            var T = f;
            if (T.length > 0) {
              if (g === "IMPLICIT")
                throw i("cannot switch from implicit to explicit numbering");
              g = "EXPLICIT";
            } else {
              if (g === "EXPLICIT")
                throw i("cannot switch from explicit to implicit numbering");
              g = "IMPLICIT", T = String(h), h += 1;
            }
            var C = T.split("."), E = (/^\d+$/.test(C[0]) ? C : ["0"].concat(C)).reduce(function(w, s) {
              return w.reduce(function(r, u) {
                return u != null && s in Object(u) ? [typeof u[s] == "function" ? u[s]() : u[s]] : [];
              }, []);
            }, [c]).reduce(function(w, s) {
              return s;
            }, "");
            if (x == null)
              return E;
            if (Object.prototype.hasOwnProperty.call(d, x))
              return d[x](E);
            throw i('no transformer named "' + x + '"');
          }
        );
      };
    }
    var a = l({});
    a.create = l, a.extend = function(d, p) {
      var c = l(p);
      d.format = function() {
        var h = Array.prototype.slice.call(arguments);
        return h.unshift(this), c.apply(t, h);
      };
    }, e.exports = a;
  }).call(N, N);
})(O);
var Oe = O.exports;
const Qe = /* @__PURE__ */ Fe(Oe), o = xe(), L = [{
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
  form: ie,
  createFormTitle: "Новый критерий оценки учебных результатов",
  editFormTitle: "Критерий оценки #{id}",
  columns: [o.id(), o.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), o.display("description", "Критерий")]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: re,
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
  setActive: i
}) => /* @__PURE__ */ n("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: e.map(({
  id: l,
  title: a
}) => /* @__PURE__ */ n(Xe, { title: a, active: t === l, onClick: () => i(l) }, l)) }), Xe = ({
  title: e,
  onClick: t,
  active: i
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
}, i ? {
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
    createFormTitle: i,
    editFormTitle: l,
    columns: a,
    titleField: d,
    filters: p,
    inputField: c
  }
}) => {
  const h = U(), [g, y] = m.useState(-1), v = be(e, [...a, o.actions([{
    key: "edit",
    render: (f) => /* @__PURE__ */ n(We, { title: Qe(l, f), showForm: g === f.id, form: t, onSave: () => h(e), record: f })
  }, {
    key: "delete",
    render: (f) => /* @__PURE__ */ n($e, { id: f.id, url: e, titleField: d, inputField: c, record: f })
  }])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultFilters: p
  });
  return /* @__PURE__ */ n(j, { fit: !0, header: /* @__PURE__ */ n(Ue, { title: i, onSave: () => h(e), form: t }), footer: /* @__PURE__ */ n(V, { table: v }), children: /* @__PURE__ */ n(we, { table: v, onRowDoubleClick: (f) => y(f.id) }) });
}, lt = () => {
  const [e, t] = m.useState("results"), i = m.useMemo(() => L.find(({
    id: l
  }) => l === e), [e]);
  return /* @__PURE__ */ b(Y, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
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
    }, children: i && /* @__PURE__ */ n(Ye, { dictionary: i }, i.id) })
  ] });
};
export {
  lt as default
};
