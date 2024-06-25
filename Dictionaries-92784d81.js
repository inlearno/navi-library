import { j as e, b as u, F as T } from "./library-6ace56c9.js";
import { F as w } from "./icons-ad9f8a73.js";
import { a as k, P as B } from "./DictionaryCell-9553281c.js";
import { M, S as j, g as H, R as L, T as R, h as $, A as Q, i as V, b as q, j as N, F as O, k as W, c as X, l as Y, d as G, m as U, I as J, n as K, D as Z, o as tt, e as et, p as it, f as rt, q as ot, B as at, r as nt, C as st } from "./BookInput-cf41366b.js";
import { r as f, d as _, g as lt } from "./react-6f5a8403.js";
import { u as dt, T as ct, c as mt } from "./index-ec092327.js";
import { f as pt, b as ut, a as ft } from "./faPenAlt-dc5d3562.js";
import { B as E, u as gt } from "./faEye-6ff4b96e.js";
import { u as z } from "./useResetHttpQueryCache-37fe2f8f.js";
import { e as yt, b as Ft, F as ht } from "./Boolean-ccb1c8fe.js";
import { A as vt, I as x } from "./mui-2ff488a7.js";
import { P as Tt } from "./PopoverConfirm-62dc4a5c.js";
import "./useUser-9f55d042.js";
import "./configureQueriedCombo-f86ec21d.js";
import "./table-f5369550.js";
const bt = ({
  id: r,
  open: a,
  onClose: i,
  record: o,
  titleField: n,
  mutation: s,
  inputField: l
}) => {
  const [p, d] = f.useState(), c = yt({
    onValid: ({
      replace: m
    }) => {
      s.mutate({
        type: "replace_links",
        new_id: m
      }, {
        onError: (y) => {
          var h;
          d(((h = y.response) == null ? void 0 : h.data.message) || y.message);
        }
      });
    }
  });
  return /* @__PURE__ */ e(M, { title: "Удаление", width: 450, autoHeight: !0, open: a, resizable: !1, onClose: i, children: /* @__PURE__ */ e(k, { footer: /* @__PURE__ */ u("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    gap: "0.5rem"
  }, children: [
    /* @__PURE__ */ e(E, { size: "small", variant: "contained", onClick: () => {
      i();
    }, children: "Закрыть" }),
    /* @__PURE__ */ e(E, { size: "small", variant: "contained", color: "error", onClick: () => {
      c.submit();
    }, children: "Заменить" })
  ] }), children: /* @__PURE__ */ e("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ u(ht, { form: c, css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    p && /* @__PURE__ */ e(vt, { severity: "error", children: p }),
    /* @__PURE__ */ u("p", { children: [
      "Значение",
      " ",
      n ? /* @__PURE__ */ u(T, { children: [
        '"',
        o[n],
        '"'
      ] }) : null,
      " ",
      "используется в существующих документах."
    ] }),
    /* @__PURE__ */ e("p", { children: "Выберите значение для замены:" }),
    /* @__PURE__ */ e(Ft, { control: c.control, name: "replace", rules: {
      required: "Выберите замену"
    }, render: ({
      field: m
    }) => /* @__PURE__ */ e(l, { filters: [{
      property: "id",
      value: r,
      type: "numeric",
      comparison: "neq"
    }], ...m }) })
  ] }) }) }) });
}, It = ({
  id: r,
  url: a,
  record: i,
  titleField: o,
  inputField: n
}) => {
  const s = z(), [l, p] = f.useState(!1), d = gt({
    method: "DELETE",
    url: `${a}/${i.id}`,
    onSuccess: () => {
      s(a);
    }
  }), c = f.useCallback(async () => {
    try {
      await d.mutateAsync({});
    } catch {
      p(!0);
    }
  }, [i]);
  return /* @__PURE__ */ u(T, { children: [
    /* @__PURE__ */ e(Tt, { onConfirm: () => {
      c();
    }, children: (m) => /* @__PURE__ */ e(x, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))"
      }
    }], ...m, children: /* @__PURE__ */ e(w, { icon: pt.faTrash }) }) }),
    l && /* @__PURE__ */ e(bt, { id: r, open: l, record: i, titleField: o, inputField: n, mutation: d, onClose: () => p(!1) })
  ] });
}, S = ({
  title: r,
  onClose: a,
  record: i,
  form: o,
  onSave: n
}) => /* @__PURE__ */ e(M, { title: r, resizable: !1, width: 450, autoHeight: !0, open: !0, onClose: a, children: /* @__PURE__ */ e(o, { fit: !1, initialValues: i, onSave: (s) => {
  n == null || n(s), a();
} }) }), wt = ({
  form: r,
  title: a,
  onSave: i
}) => {
  const [o, n] = f.useState(!1);
  return /* @__PURE__ */ u(T, { children: [
    /* @__PURE__ */ e(x, { size: "small", onClick: () => n(!0), children: /* @__PURE__ */ e(w, { icon: ut.faPlus }) }),
    o && /* @__PURE__ */ e(S, { form: r, title: a, onClose: () => {
      n(!1);
    }, onSave: (s) => {
      i == null || i(s);
    } })
  ] });
}, xt = ({
  record: r,
  title: a,
  form: i,
  onSave: o
}) => {
  const [n, s] = f.useState(!1);
  return /* @__PURE__ */ u(T, { children: [
    /* @__PURE__ */ e(x, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(202 138 4 / var(--tw-text-opacity))"
      }
    }], onClick: () => s(!0), children: /* @__PURE__ */ e(w, { icon: ft.faPenAlt }) }),
    n && /* @__PURE__ */ e(S, { form: i, record: r, title: a, onSave: (l) => {
      o == null || o(l);
    }, onClose: () => {
      s(!1);
    } })
  ] });
};
var A = { exports: {} };
(function(r) {
  (function(a) {
    function i(s) {
      var l = new Error(s);
      return l.name = "ValueError", l;
    }
    function o(s) {
      return function(l) {
        var p = Array.prototype.slice.call(arguments, 1), d = 0, c = "UNDEFINED";
        return l.replace(
          /([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,
          function(m, y, h, v) {
            if (y != null)
              return y;
            var b = h;
            if (b.length > 0) {
              if (c === "IMPLICIT")
                throw i("cannot switch from implicit to explicit numbering");
              c = "EXPLICIT";
            } else {
              if (c === "EXPLICIT")
                throw i("cannot switch from explicit to implicit numbering");
              c = "IMPLICIT", b = String(d), d += 1;
            }
            var I = b.split("."), D = (/^\d+$/.test(I[0]) ? I : ["0"].concat(I)).reduce(function(C, g) {
              return C.reduce(function(kt, F) {
                return F != null && g in Object(F) ? [typeof F[g] == "function" ? F[g]() : F[g]] : [];
              }, []);
            }, [p]).reduce(function(C, g) {
              return g;
            }, "");
            if (v == null)
              return D;
            if (Object.prototype.hasOwnProperty.call(s, v))
              return s[v](D);
            throw i('no transformer named "' + v + '"');
          }
        );
      };
    }
    var n = o({});
    n.create = o, n.extend = function(s, l) {
      var p = o(l);
      s.format = function() {
        var d = Array.prototype.slice.call(arguments);
        return d.unshift(this), p.apply(a, d);
      };
    }, r.exports = n;
  }).call(_, _);
})(A);
var Dt = A.exports;
const Ct = /* @__PURE__ */ lt(Dt), t = mt(), P = [{
  id: "results",
  title: "Планируемые результаты",
  url: "/api/rest/program-doc-results",
  form: H,
  titleField: "title",
  inputField: L,
  createFormTitle: "Новый планируемый результат",
  editFormTitle: "Планируемый результат #{id}",
  columns: [t.id(), t.dictionary("category_id", "programDocCategories", "Категория"), t.display("title", "Наименование")]
}, {
  id: "goals",
  title: "Задачи",
  titleField: "title",
  url: "/api/rest/program-doc-objectives",
  inputField: R,
  form: $,
  createFormTitle: "Новая задача",
  editFormTitle: "Задача #{id}",
  columns: [t.id(), t.display("title", "Задача")]
}, {
  id: "attestation-forms",
  title: "Формы аттестации",
  url: "/api/rest/program-doc-forms",
  titleField: "description",
  inputField: Q,
  form: V,
  createFormTitle: "Новая аттестационная форма",
  editFormTitle: "Аттестационная форма #{id}",
  columns: [t.id(), t.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
    size: 100
  }), t.display("description", "Описание", {
    size: 200
  })]
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  url: "/api/rest/program-doc-criteria",
  titleField: "description",
  inputField: q,
  form: N,
  createFormTitle: "Новый критерий оценки учебных результатов",
  editFormTitle: "Критерий оценки #{id}",
  columns: [t.id(), t.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), t.display("description", "Критерий")]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: O,
  form: W,
  createFormTitle: "Новый способ фиксации учебных результатов",
  editFormTitle: "Способ фиксации #{id}",
  columns: [t.id(), t.dictionary("method_id", "programDocMethodTypes", "Метод"), t.display("description", "Описание способа фиксации")]
}, {
  id: "materials",
  title: "Методические материалы",
  url: "/api/rest/program-doc-materials",
  titleField: "material",
  inputField: X,
  form: Y,
  createFormTitle: "Новый методический материал",
  editFormTitle: "Методический материал #{id}",
  columns: [t.id(), t.display("base_knowledge", "Базовые знания"), t.display("material", "Материалы")]
}, {
  id: "managements",
  title: "Особенности организации образовательной деятельности",
  url: "/api/rest/program-doc-managements",
  titleField: "description",
  inputField: G,
  form: U,
  createFormTitle: "Новая особенность организации образовательной деятельности",
  editFormTitle: "Особенность организации образовательной деятельности #{id}",
  columns: [t.id(), t.dictionary("management_type_id", "programDocManagementTypes", "Тип"), t.display("description", "Описание")]
}, {
  id: "indoctrinations",
  title: "Воспитательная деятельность",
  url: "/api/rest/program-doc-indoctrinations",
  titleField: "description",
  inputField: J,
  form: K,
  createFormTitle: "Новая воспитательная деятельность",
  editFormTitle: "Воспитательная деятельность #{id}",
  columns: [t.id(), t.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), t.display("description", "Описание")]
}, {
  id: "developments",
  title: "Развивающая деятельность",
  url: "/api/rest/program-doc-developments",
  titleField: "description",
  inputField: Z,
  form: tt,
  createFormTitle: "Новая развивающая деятельность",
  editFormTitle: "Развивающая деятельность #{id}",
  columns: [t.id(), t.dictionary("development_type_id", "programDocDevelopmentTypes", "Тип"), t.display("description", "Развивающая деятельность")]
}, {
  id: "inventories",
  title: "Материально-техническое обеспечение",
  url: "/api/rest/program-doc-inventories",
  titleField: "description",
  inputField: et,
  form: it,
  createFormTitle: "Новое материально-техническое обеспечение",
  editFormTitle: "Материально-техническое обеспечение #{id}",
  columns: [t.id(), t.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), t.display("description", "Описание")]
}, {
  id: "information",
  title: "Информационное обеспечение",
  url: "/api/rest/program-doc-information",
  titleField: "title",
  inputField: rt,
  form: ot,
  createFormTitle: "Новое информационное обеспечение",
  editFormTitle: "Информационное обеспечение #{id}",
  columns: [t.id(), t.display("title", "Наименование"), t.display("authors", "Авторы"), t.display("publisher", "Издательство"), t.display("publish_year", "Год издательства"), t.display("isbn", "ISBN")]
}, {
  id: "books",
  title: "Список литературы",
  url: "/api/rest/program-doc-books",
  titleField: "title",
  inputField: at,
  form: nt,
  createFormTitle: "Новая литература",
  editFormTitle: "Литература #{id}",
  columns: [t.id(), t.display("title", "Наименование"), t.display("authors", "Авторы"), t.display("publisher", "Издательство"), t.display("publish_year", "Год издательства")]
}], _t = ({
  items: r,
  active: a,
  setActive: i
}) => /* @__PURE__ */ e("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: r.map(({
  id: o,
  title: n
}) => /* @__PURE__ */ e(Et, { title: n, active: a === o, onClick: () => i(o) }, o)) }), Et = ({
  title: r,
  onClick: a,
  active: i
}) => /* @__PURE__ */ e("div", { css: [{
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
}], onClick: a, children: /* @__PURE__ */ e("span", { children: r }) }), Pt = ({
  dictionary: {
    url: r,
    form: a,
    createFormTitle: i,
    editFormTitle: o,
    columns: n,
    titleField: s,
    filters: l,
    inputField: p
  }
}) => {
  const d = z(), c = dt(r, [...n, t.actions([{
    key: "edit",
    privilege: "ProgramDocsDictionariesEdit",
    render: (m) => /* @__PURE__ */ e(xt, { title: Ct(o, m), form: a, onSave: () => d(r), record: m })
  }, {
    key: "delete",
    privilege: "ProgramDocsDictionariesEdit",
    render: (m) => /* @__PURE__ */ e(It, { id: m.id, url: r, titleField: s, inputField: p, record: m })
  }])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultFilters: l
  });
  return /* @__PURE__ */ e(k, { fit: !0, header: /* @__PURE__ */ e(st, { to: "ProgramDocsDictionariesEdit", children: /* @__PURE__ */ e(wt, { title: i, onSave: () => d(r), form: a }) }), footer: /* @__PURE__ */ e(B, { table: c }), children: /* @__PURE__ */ e(ct, { table: c }) });
}, Wt = () => {
  const [r, a] = f.useState("results"), i = f.useMemo(() => P.find(({
    id: o
  }) => o === r), [r]);
  return /* @__PURE__ */ u(j, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      minWidth: "9rem",
      flexBasis: "20%",
      overflowY: "auto"
    }, children: /* @__PURE__ */ e(_t, { items: P, active: r, setActive: a }) }),
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      borderLeftWidth: "1px"
    }, children: i && /* @__PURE__ */ e(Pt, { dictionary: i }, i.id) })
  ] });
};
export {
  Wt as default
};
