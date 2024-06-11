import { r as T } from "./react-6f5a8403.js";
import { j as e, d as G, b as j, F as J } from "./library-0c8fbdb5.js";
import { u as K } from "./useUser-bd6c9512.js";
import { e as X, g as Z, u as V, F as ee, a as n, D as b, T as u, Q as i, c as f, Y as L } from "./Phone-413d88a1.js";
import { c as s } from "./configureQueriedCombo-20ec0b6b.js";
import "./icons-ad9f8a73.js";
import { a as re } from "./DictionaryCell-a901e8dd.js";
import { a as oe, T as te, c } from "./index-63096903.js";
import { b as le, f as ne } from "./faPenAlt-dc5d3562.js";
import { M as ae } from "./ModalWindow-372d4cc0.js";
import { B as ie, u as se } from "./faEye-7bea50c5.js";
import { u as ce, B as de } from "./mui-0a491bf1.js";
const je = ({
  to: l,
  fallback: t = null,
  children: o
}) => K().can(l) ? o : t, Le = ({
  children: l,
  ...t
}) => /* @__PURE__ */ e(G.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: o,
  dragging: r
}) => /* @__PURE__ */ e("div", { css: [{
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
}] }), ...t, children: l }), d = (l, t, o) => T.forwardRef(({
  multiple: r = !1,
  onChange: a,
  value: h,
  url: g,
  idField: y = Z,
  ...F
}, _) => {
  const A = X(g, y), [v, z] = T.useState(), [N, x] = T.useState(!1), [Q, q] = T.useState(""), U = () => {
    q(""), x(!1);
  }, O = ce(_, z), W = (I) => {
    A(I), a && a(r ? [...h ?? [], I[y]] : I[y]), U();
  };
  return /* @__PURE__ */ j(J, { children: [
    /* @__PURE__ */ e(l, { ref: O, extraOptionsRenderer: ({
      search: I,
      searchIsLoading: Y,
      closePopup: E
    }) => !Y && /* @__PURE__ */ e(pe, { search: I, onClick: () => {
      q((I || "").trim()), x(!0), E(), v == null || v.blur();
    } }), ...F, idField: y, value: h, multiple: r, onChange: a, url: g }),
    /* @__PURE__ */ e(ae, { open: N, autoHeight: !0, onClose: () => x(!1), ...o, children: /* @__PURE__ */ e(t, { ...F, search: Q, onSave: W }) })
  ] });
}), pe = ({
  search: l,
  onClick: t
}) => /* @__PURE__ */ e("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ j(ie, { variant: "outlined", color: "success", icon: le.faPlus, onClick: t, children: [
  "Создать",
  l && ` «${l}»`
] }) }), ue = ({
  items: l,
  onDelete: t,
  columns: o,
  isLoading: r
}) => {
  const a = c(), h = oe({
    enableSorting: !1,
    isLoading: r,
    columns: [...o, a.actions([{
      icon: ne.faTrash,
      key: "delete",
      onClick: (g) => t(g)
    }])],
    data: l || []
  });
  return /* @__PURE__ */ e(te, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: h });
}, m = (l, t) => T.forwardRef((o, r) => {
  const a = T.useCallback(({
    items: h,
    onDelete: g,
    valueCount: y
  }) => /* @__PURE__ */ e(ue, { items: h, valueCount: y, onDelete: g, columns: t }), [t]);
  return /* @__PURE__ */ e(l, { ref: r, tagListPosition: o.tagListPosition || "bottom", tagListRenderer: a, ...o });
}), p = ({
  fit: l = !1,
  onSave: t,
  onSubmit: o,
  onError: r,
  initialValues: a,
  url: h,
  children: g
}) => {
  const y = se({
    method: a != null && a.id ? "PUT" : "POST",
    url: `${h}${a != null && a.id ? `/${a.id}` : ""}`,
    onMutate: (_) => {
      o == null || o(_);
    },
    onSuccess: ({
      data: _
    }) => {
      t == null || t(_);
    },
    onError: (_) => {
      r == null || r(_);
    }
  }), F = V({
    defaultValues: a,
    mutation: y
  });
  return /* @__PURE__ */ e(re, { fit: l, footer: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(de, { variant: "contained", color: "success", disabled: y.isPending, onClick: () => F.submit(), children: a != null && a.id ? "Обновить" : "Создать" }) }), children: /* @__PURE__ */ e(ee, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: F, children: g(F) }) });
}, me = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-results", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "category_id", control: o.control, rules: {
  required: "Выберите категорию"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }, "category_id"), /* @__PURE__ */ e(n, { name: "title", control: o.control, defaultValue: l, rules: {
  required: "Введите наименование"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title")] }), k = c(), Ae = m(s(d(i, me, {
  title: "Новый планируемый результат",
  width: 500
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [k.dictionary("category_id", "programDocCategories", "Категория"), k.display("title", "Наименование")]), ye = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-objectives", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "title", rules: {
  required: "Введите наименование"
}, control: o.control, defaultValue: l, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }, "title")] }), ze = s(d(i, ye, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), he = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-forms", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "control_type_id", rules: {
  required: "Выберите тип формы аттестации"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }, "control_type_id"), /* @__PURE__ */ e(n, { name: "description", control: o.control, defaultValue: l, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), w = c(), Ne = m(s(d(i, he, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [w.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), w.display("description", "Описание", {
  size: 200
})]), ge = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-criteria", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "criterion_type_id", control: o.control, rules: {
  required: "Введите тип критерия"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }, "criterion_type_id"), /* @__PURE__ */ e(n, { name: "description", rules: {
  required: "Введите описание критерия"
}, control: o.control, defaultValue: l, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), H = c(), Qe = m(s(d(i, ge, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [H.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), H.display("description", "Критерий")]), be = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-fixations", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "method_id", rules: {
  required: "Выберите метод"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }, "method_id"), /* @__PURE__ */ e(n, { name: "description", defaultValue: l, rules: {
  required: "Введите описание"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), $ = c(), Ue = m(s(d(i, be, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [$.dictionary("method_id", "programDocMethodTypes", "Метод"), $.display("description", "Описание способа фиксации")]), _e = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-materials", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "base_knowledge", control: o.control, rules: {
  required: "Введите базовые знания"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }, "base_knowledge"), /* @__PURE__ */ e(n, { name: "material", rules: {
  required: "Введите материалы"
}, defaultValue: l, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Материалы", placeholder: "Введите материалы", ...r }) }, "material")] }), M = c(), Oe = m(s(d(i, _e, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [M.display("base_knowledge", "Базовые знания"), M.display("material", "Материалы")]), fe = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-managements", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "management_type_id", control: o.control, rules: {
  required: "Выберите тип организации образовательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }, "management_type_id"), /* @__PURE__ */ e(n, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: l, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), B = c(), We = m(s(d(i, fe, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [B.dictionary("management_type_id", "programDocManagementTypes", "Тип"), B.display("description", "Описание")]), Fe = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-indoctrinations", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "indoctrination_type_id", control: o.control, rules: {
  required: "Выберите тип воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }, "indoctrination_type_id"), /* @__PURE__ */ e(n, { name: "description", defaultValue: l, control: o.control, rules: {
  required: "Введите наименование воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) }, "description")] }), R = c(), Ye = m(s(d(i, Fe, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [R.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), R.display("description", "Описание")]), Ie = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-developments", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "development_type_id", control: o.control, rules: {
  required: "Введите тип развивающей деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }, "development_type_id"), /* @__PURE__ */ e(n, { name: "description", defaultValue: l, control: o.control, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) }, "description")] }), S = c(), Ee = m(s(d(i, Ie, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [S.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), S.display("description", "Развивающая деятельность")]), Te = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-inventories", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "inventory_type_id", rules: {
  required: "Выберите тип материально-технического обеспечения"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }, "inventory_type_id"), /* @__PURE__ */ e(n, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: l, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(f, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), P = c(), Ge = m(s(d(i, Te, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [P.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), P.display("description", "Описание")]), De = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-information", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ e(n, { name: "title", rules: {
  required: "Введите наименование"
}, defaultValue: l, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ e(n, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ e(n, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(L, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year"), /* @__PURE__ */ e(n, { name: "isbn", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) }, "isbn")] }), D = c(), Je = m(s(d(i, De, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [D.display("title", "Наименование"), D.display("authors", "Авторы"), D.display("publisher", "Издательство"), D.display("publish_year", "Год издательства"), D.display("isbn", "ISBN")]), Ce = ({
  search: l,
  ...t
}) => /* @__PURE__ */ e(p, { url: "/api/rest/program-doc-books", ...t, children: (o) => [/* @__PURE__ */ e(n, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ e(n, { name: "title", control: o.control, rules: {
  required: "Введите наименование"
}, defaultValue: l, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ e(n, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(u, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ e(n, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(L, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year")] }), C = c(), Ke = m(s(d(i, Ce, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [C.display("title", "Наименование"), C.display("authors", "Авторы"), C.display("publisher", "Издательство"), C.display("publish_year", "Год издательства")]);
export {
  Ne as A,
  Ke as B,
  je as C,
  Ee as D,
  Ue as F,
  Ye as I,
  Oe as M,
  Ae as R,
  Le as S,
  ze as T,
  p as a,
  Qe as b,
  We as c,
  Ge as d,
  Je as e,
  me as f,
  ye as g,
  he as h,
  ge as i,
  be as j,
  _e as k,
  fe as l,
  Fe as m,
  Ie as n,
  Te as o,
  De as p,
  Ce as q
};
