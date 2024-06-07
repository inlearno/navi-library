import { j as e, d as J, b as L, F as K } from "./library-d5a831b9.js";
import { h as X, i as Z, B as V, u as ee, a as re, F as oe, b as l, D as b, T as h, Q as s, d as _, Y as j } from "./Phone-15635d21.js";
import { c as d } from "./configureQueriedCombo-b86c4075.js";
import { r as v } from "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import { a as te } from "./DictionaryCell-8a3fecdd.js";
import { a as ae, T as le, c as p } from "./index-4c45a64d.js";
import { a as ne } from "./faPenAlt-466fde8a.js";
import { M as ie } from "./ModalWindow-d79fec54.js";
import { u as ce, B as se } from "./mui-a6e6a5b1.js";
const Se = ({
  children: t,
  ...a
}) => /* @__PURE__ */ e(J.Split, { defaultSplitterColors: {
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
}] }), ...a, children: t }), u = (t, a, o) => v.forwardRef(({
  multiple: r = !1,
  onChange: n,
  value: i,
  url: y,
  idField: c = Z,
  ...F
}, f) => {
  const z = X(y, c), [C, A] = v.useState(), [O, q] = v.useState(!1), [Q, H] = v.useState(""), U = () => {
    H(""), q(!1);
  }, W = ce(f, A), Y = (T) => {
    z(T), n && n(r ? [...i ?? [], T[c]] : T[c]), U();
  };
  return /* @__PURE__ */ L(K, { children: [
    /* @__PURE__ */ e(t, { ref: W, extraOptionsRenderer: ({
      search: T,
      searchIsLoading: E,
      closePopup: G
    }) => !E && /* @__PURE__ */ e(de, { search: T, onClick: () => {
      H((T || "").trim()), q(!0), G(), C == null || C.blur();
    } }), ...F, idField: c, value: i, multiple: r, onChange: n, url: y }),
    /* @__PURE__ */ e(ie, { open: O, autoHeight: !0, onClose: () => q(!1), ...o, children: /* @__PURE__ */ e(a, { ...F, search: Q, onSave: Y }) })
  ] });
}), de = ({
  search: t,
  onClick: a
}) => /* @__PURE__ */ e("div", { css: {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  padding: "0.5rem"
}, children: /* @__PURE__ */ L(V, { variant: "outlined", color: "success", icon: ne.faPlus, onClick: a, children: [
  "Создать",
  t && ` «${t}»`
] }) });
var N = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var a = "fas", o = "trash", r = 448, n = 512, i = [], y = "f1f8", c = "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z";
  t.definition = {
    prefix: a,
    iconName: o,
    icon: [
      r,
      n,
      i,
      y,
      c
    ]
  }, t.faTrash = t.definition, t.prefix = a, t.iconName = o, t.width = r, t.height = n, t.ligatures = i, t.unicode = y, t.svgPathData = c, t.aliases = i;
})(N);
const pe = ({
  items: t,
  onDelete: a,
  columns: o,
  isLoading: r
}) => {
  const n = p(), i = ae({
    enableSorting: !1,
    isLoading: r,
    columns: [...o, n.actions([{
      icon: N.faTrash,
      key: "delete",
      onClick: (y) => a(y)
    }])],
    data: t || []
  });
  return /* @__PURE__ */ e(le, { border: !0, css: {
    marginTop: "0.5rem"
  }, table: i });
}, g = (t, a) => v.forwardRef((o, r) => {
  const n = v.useCallback(({
    items: i,
    onDelete: y,
    valueCount: c
  }) => /* @__PURE__ */ e(pe, { items: i, valueCount: c, onDelete: y, columns: a }), [a]);
  return /* @__PURE__ */ e(t, { ref: r, tagListPosition: o.tagListPosition || "bottom", tagListRenderer: n, ...o });
}), m = ({
  fit: t = !1,
  onSave: a,
  onSubmit: o,
  onError: r,
  initialValues: n,
  url: i,
  children: y
}) => {
  const c = ee({
    method: n != null && n.id ? "PUT" : "POST",
    url: `${i}${n != null && n.id ? `/${n.id}` : ""}`,
    onMutate: (f) => {
      o == null || o(f);
    },
    onSuccess: ({
      data: f
    }) => {
      a == null || a(f);
    },
    onError: (f) => {
      r == null || r(f);
    }
  }), F = re({
    defaultValues: n,
    mutation: c
  });
  return /* @__PURE__ */ e(te, { fit: t, footer: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(se, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => F.submit(), children: n != null && n.id ? "Обновить" : "Создать" }) }), children: /* @__PURE__ */ e(oe, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: F, children: y(F) }) });
}, ue = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-results", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "category_id", control: o.control, rules: {
  required: "Выберите категорию"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...r }) }, "category_id"), /* @__PURE__ */ e(l, { name: "title", control: o.control, defaultValue: t, rules: {
  required: "Введите наименование"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title")] }), k = p(), Pe = g(d(u(s, ue, {
  title: "Новый планируемый результат",
  width: 500
}), {
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), [k.dictionary("category_id", "programDocCategories", "Категория"), k.display("title", "Наименование")]), me = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-objectives", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "title", rules: {
  required: "Введите наименование"
}, control: o.control, defaultValue: t, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Наименование", placeholder: "Введите наименование задачи", ...r }) }, "title")] }), Re = d(u(s, me, {
  title: "Новая задача"
}), {
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), ye = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-forms", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "control_type_id", rules: {
  required: "Выберите тип формы аттестации"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...r }) }, "control_type_id"), /* @__PURE__ */ e(l, { name: "description", control: o.control, defaultValue: t, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), w = p(), Le = g(d(u(s, ye, {
  title: "Новая аттестационная форма"
}), {
  url: "/api/rest/program-doc-forms",
  displayField: "description"
}), [w.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
  size: 100
}), w.display("description", "Описание", {
  size: 200
})]), he = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-criteria", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "criterion_type_id", control: o.control, rules: {
  required: "Введите тип критерия"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...r }) }, "criterion_type_id"), /* @__PURE__ */ e(l, { name: "description", rules: {
  required: "Введите описание критерия"
}, control: o.control, defaultValue: t, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), M = p(), je = g(d(u(s, he, {
  title: "Новый критерий оценки учебных результатов"
}), {
  url: "/api/rest/program-doc-criteria",
  displayField: "description"
}), [M.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), M.display("description", "Критерий")]), ge = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-fixations", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "method_id", rules: {
  required: "Выберите метод"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...r }) }, "method_id"), /* @__PURE__ */ e(l, { name: "description", defaultValue: t, rules: {
  required: "Введите описание"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), x = p(), Ne = g(d(u(s, ge, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [x.dictionary("method_id", "programDocMethodTypes", "Метод"), x.display("description", "Описание способа фиксации")]), be = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-materials", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "base_knowledge", control: o.control, rules: {
  required: "Введите базовые знания"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Базовые знания", placeholder: "Введите базовые знания", ...r }) }, "base_knowledge"), /* @__PURE__ */ e(l, { name: "material", rules: {
  required: "Введите материалы"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Материалы", placeholder: "Введите материалы", ...r }) }, "material")] }), $ = p(), ze = g(d(u(s, be, {
  title: "Новый методический материал"
}), {
  url: "/api/rest/program-doc-materials",
  displayField: "material"
}), [$.display("base_knowledge", "Базовые знания"), $.display("material", "Материалы")]), fe = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-managements", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "management_type_id", control: o.control, rules: {
  required: "Выберите тип организации образовательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...r }) }, "management_type_id"), /* @__PURE__ */ e(l, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), B = p(), Ae = g(d(u(s, fe, {
  title: "Новая особенность организации образовательной деятельности"
}), {
  url: "/api/rest/program-doc-managements",
  displayField: "description"
}), [B.dictionary("management_type_id", "programDocManagementTypes", "Тип"), B.display("description", "Описание")]), _e = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-indoctrinations", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "indoctrination_type_id", control: o.control, rules: {
  required: "Выберите тип воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocIndoctrinationTypes", ...r }) }, "indoctrination_type_id"), /* @__PURE__ */ e(l, { name: "description", defaultValue: t, control: o.control, rules: {
  required: "Введите наименование воспитательной деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...r }) }, "description")] }), S = p(), Oe = g(d(u(s, _e, {
  title: "Новая Воспитательная деятельность"
}), {
  url: "/api/rest/program-doc-indoctrinations",
  displayField: "description"
}), [S.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), S.display("description", "Описание")]), Fe = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-developments", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "development_type_id", control: o.control, rules: {
  required: "Введите тип развивающей деятельности"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocDevelopmentTypes", ...r }) }, "development_type_id"), /* @__PURE__ */ e(l, { name: "description", defaultValue: t, control: o.control, rules: {
  required: "Введите описание"
}, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...r }) }, "description")] }), P = p(), Qe = g(d(u(s, Fe, {
  title: "Новая развивающая деятельность"
}), {
  url: "/api/rest/program-doc-developments",
  displayField: "description"
}), [P.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), P.display("description", "Развивающая деятельность")]), Te = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-inventories", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "inventory_type_id", rules: {
  required: "Выберите тип материально-технического обеспечения"
}, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(b, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...r }) }, "inventory_type_id"), /* @__PURE__ */ e(l, { name: "description", rules: {
  required: "Введите описание"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(_, { label: "Описание", placeholder: "Введите описание", ...r }) }, "description")] }), R = p(), Ue = g(d(u(s, Te, {
  title: "Новое материально-техническое обеспечение"
}), {
  url: "/api/rest/program-doc-inventories",
  displayField: "description"
}), [R.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), R.display("description", "Описание")]), ve = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-information", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ e(l, { name: "title", rules: {
  required: "Введите наименование"
}, defaultValue: t, control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ e(l, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ e(l, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(j, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year"), /* @__PURE__ */ e(l, { name: "isbn", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...r }) }, "isbn")] }), I = p(), We = g(d(u(s, ve, {
  title: "Новое информационное обеспечение"
}), {
  url: "/api/rest/program-doc-information",
  displayField: "title"
}), [I.display("title", "Наименование"), I.display("authors", "Авторы"), I.display("publisher", "Издательство"), I.display("publish_year", "Год издательства"), I.display("isbn", "ISBN")]), Ie = ({
  search: t,
  ...a
}) => /* @__PURE__ */ e(m, { url: "/api/rest/program-doc-books", ...a, children: (o) => [/* @__PURE__ */ e(l, { name: "authors", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Авторы", placeholder: "Введите авторов", ...r }) }, "authors"), /* @__PURE__ */ e(l, { name: "title", control: o.control, rules: {
  required: "Введите наименование"
}, defaultValue: t, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Наименование", placeholder: "Введите наименование", ...r }) }, "title"), /* @__PURE__ */ e(l, { name: "publisher", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(h, { label: "Издательство", placeholder: "Введите издательство", ...r }) }, "publisher"), /* @__PURE__ */ e(l, { name: "publish_year", control: o.control, render: ({
  field: r
}) => /* @__PURE__ */ e(j, { label: "Год издательства", placeholder: "Выберите год издательства", ...r }) }, "publish_year")] }), D = p(), Ye = g(d(u(s, Ie, {
  title: "Новая литература"
}), {
  url: "/api/rest/program-doc-books",
  displayField: "title"
}), [D.display("title", "Наименование"), D.display("authors", "Авторы"), D.display("publisher", "Издательство"), D.display("publish_year", "Год издательства")]);
export {
  Le as A,
  Ye as B,
  m as C,
  Qe as D,
  Ne as F,
  Oe as I,
  ze as M,
  Pe as R,
  Se as S,
  Re as T,
  je as a,
  Ae as b,
  Ue as c,
  We as d,
  ue as e,
  N as f,
  me as g,
  ye as h,
  he as i,
  ge as j,
  be as k,
  fe as l,
  _e as m,
  Fe as n,
  Te as o,
  ve as p,
  Ie as q
};
