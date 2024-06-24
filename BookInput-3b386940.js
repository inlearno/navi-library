import { r as F } from "./react-bd6781bd.js";
import { j as e, d as O, b as $, F as G } from "./library-75cbf1f9.js";
import { u as J } from "./useUser-1af39c8e.js";
import { e as K, g as X, a, D as y, T as p, Q as n, c as h, Y as j } from "./Phone-727e8dce.js";
import { c as i } from "./configureQueriedCombo-b3167de9.js";
import "./icons-56df5d3c.js";
import "./DictionaryCell-7121ea48.js";
import { C as s } from "./ConstructorForm-424a45db.js";
import { a as Z, T as ee, c } from "./index-b01425eb.js";
import { a as re, f as oe } from "./faTrash-33be5127.js";
import { M as te } from "./ModalWindow-65156458.js";
import { B as le } from "./faEye-a5fee5cd.js";
import { u as ae } from "./mui-51f6b52b.js";
const Ve = ({
  to: t,
  fallback: l = null,
  children: o
}) => J().can(t) ? o : l, Be = ({
  children: t,
  ...l
}) => /* @__PURE__ */ e(O.Split, { defaultSplitterColors: {
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
}] }), ...l, children: t }), d = (t, l, o) => F.forwardRef(({
  multiple: r = !1,
  onChange: m,
  value: g,
  url: b,
  idField: _ = X,
  ...C
}, L) => {
  const A = K(b, _), [v, P] = F.useState(), [z, D] = F.useState(!1), [E, q] = F.useState(""), N = () => {
    q(""), D(!1);
  }, Q = ae(L, P), U = (f) => {
    A(f), m && m(r ? [...g ?? [], f[_]] : f[_]), N();
  };
  return /* @__PURE__ */ $(G, { children: [
    /* @__PURE__ */ e(t, { ref: Q, extraOptionsRenderer: ({
      search: f,
      searchIsLoading: W,
      closePopup: Y
    }) => !W && /* @__PURE__ */ e(ne, { search: f, onClick: () => {
      q((f || "").trim()), D(!0), Y(), v == null || v.blur();
    } }), ...C, idField: _, value: g, multiple: r, onChange: m, url: b }),
    /* @__PURE__ */ e(te, { open: z, autoHeight: !0, onClose: () => D(!1), ...o, children: /* @__PURE__ */ e(l, { ...C, search: E, onSave: U }) })
  ] });
}), ne = ({
  search: t,
  onClick: l
}) => /* @__PURE__ */ e("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ $(le, { variant: "outlined", color: "success", icon: re.faPlus, onClick: l, children: [
  "Создать",
  t && ` «${t}»`
] }) }), ie = ({
  items: t,
  onDelete: l,
  columns: o,
  isLoading: r
}) => {
  const m = c(), g = Z({
    enableSorting: !1,
    isLoading: r,
    columns: [...o, m.actions([{
      icon: oe.faTrash,
      key: "delete",
      onClick: (b) => l(b)
    }])],
    data: t || []
  });
  return /* @__PURE__ */ e(ee, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: g });
}, u = (t, l) => F.forwardRef((o, r) => {
  const m = F.useCallback(({
    items: g,
    onDelete: b,
    valueCount: _
  }) => /* @__PURE__ */ e(ie, { items: g, valueCount: _, onDelete: b, columns: l }), [l]);
  return /* @__PURE__ */ e(t, { ref: r, tagListPosition: o.tagListPosition || "bottom", tagListRenderer: m, ...o });
}), se = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-results", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "category_id", control: o.control, rules: {
  required: "Выберите категорию"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }, "category_id"), /* @__PURE__ */ e(a, { name: "title", control: o.control, defaultValue: t, rules: {
  required: "Введите наименование"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title")] }), x = c(), Me = u(i(d(n, se, {
  title: "Новый планируемый результат",
  width: 500
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [x.dictionary("category_id", "programDocCategories", "Категория"), x.display("title", "Наименование")]), ce = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-objectives", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "title", rules: {
  required: "Введите наименование"
}, control: o.control, defaultValue: t, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }, "title")] }), $e = i(d(n, ce, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), de = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-forms", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "control_type_id", rules: {
  required: "Выберите тип формы аттестации"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }, "control_type_id"), /* @__PURE__ */ e(a, { name: "description", control: o.control, defaultValue: t, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), k = c(), je = u(i(d(n, de, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [k.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), k.display("description", "Описание", {
  size: 200
})]), pe = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-criteria", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "criterion_type_id", control: o.control, rules: {
  required: "Введите тип критерия"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }, "criterion_type_id"), /* @__PURE__ */ e(a, { name: "description", rules: {
  required: "Введите описание критерия"
}, control: o.control, defaultValue: t, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), S = c(), Le = u(i(d(n, pe, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [S.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), S.display("description", "Критерий")]), ue = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-fixations", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "method_id", rules: {
  required: "Выберите метод"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }, "method_id"), /* @__PURE__ */ e(a, { name: "description", defaultValue: t, rules: {
  required: "Введите описание"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), w = c(), Ae = u(i(d(n, ue, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [w.dictionary("method_id", "programDocMethodTypes", "Метод"), w.display("description", "Описание способа фиксации")]), me = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-materials", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "base_knowledge", control: o.control, rules: {
  required: "Введите базовые знания"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }, "base_knowledge"), /* @__PURE__ */ e(a, { name: "material", rules: {
  required: "Введите материалы"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Материалы", placeholder: "Введите материалы", ...r }) }, "material")] }), H = c(), Pe = u(i(d(n, me, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [H.display("base_knowledge", "Базовые знания"), H.display("material", "Материалы")]), ye = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-managements", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "management_type_id", control: o.control, rules: {
  required: "Выберите тип организации образовательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }, "management_type_id"), /* @__PURE__ */ e(a, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), R = c(), ze = u(i(d(n, ye, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [R.dictionary("management_type_id", "programDocManagementTypes", "Тип"), R.display("description", "Описание")]), he = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-indoctrinations", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "indoctrination_type_id", control: o.control, rules: {
  required: "Выберите тип воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }, "indoctrination_type_id"), /* @__PURE__ */ e(a, { name: "description", defaultValue: t, control: o.control, rules: {
  required: "Введите наименование воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) }, "description")] }), V = c(), Ee = u(i(d(n, he, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [V.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), V.display("description", "Описание")]), ge = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-developments", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "development_type_id", control: o.control, rules: {
  required: "Введите тип развивающей деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }, "development_type_id"), /* @__PURE__ */ e(a, { name: "description", defaultValue: t, control: o.control, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) }, "description")] }), B = c(), Ne = u(i(d(n, ge, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [B.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), B.display("description", "Развивающая деятельность")]), be = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-inventories", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "inventory_type_id", rules: {
  required: "Выберите тип материально-технического обеспечения"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(y, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }, "inventory_type_id"), /* @__PURE__ */ e(a, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), M = c(), Qe = u(i(d(n, be, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [M.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), M.display("description", "Описание")]), _e = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-information", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ e(a, { name: "title", rules: {
  required: "Введите наименование"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ e(a, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ e(a, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(j, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year"), /* @__PURE__ */ e(a, { name: "isbn", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) }, "isbn")] }), I = c(), Ue = u(i(d(n, _e, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [I.display("title", "Наименование"), I.display("authors", "Авторы"), I.display("publisher", "Издательство"), I.display("publish_year", "Год издательства"), I.display("isbn", "ISBN")]), fe = ({
  search: t,
  ...l
}) => /* @__PURE__ */ e(s, { url: "/api/rest/program-doc-books", ...l, children: (o) => [/* @__PURE__ */ e(a, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ e(a, { name: "title", control: o.control, rules: {
  required: "Введите наименование"
}, defaultValue: t, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ e(a, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(p, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ e(a, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(j, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year")] }), T = c(), We = u(i(d(n, fe, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [T.display("title", "Наименование"), T.display("authors", "Авторы"), T.display("publisher", "Издательство"), T.display("publish_year", "Год издательства")]);
export {
  je as A,
  We as B,
  Ve as C,
  Ne as D,
  Ae as F,
  Ee as I,
  Pe as M,
  Me as R,
  Be as S,
  $e as T,
  Le as a,
  ze as b,
  Qe as c,
  Ue as d,
  se as e,
  ce as f,
  de as g,
  pe as h,
  ue as i,
  me as j,
  ye as k,
  he as l,
  ge as m,
  be as n,
  _e as o,
  fe as p
};
