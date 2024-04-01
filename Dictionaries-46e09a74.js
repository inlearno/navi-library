import { a as d, j as i, F as h } from "./library-45c09cf9.js";
import { f as I } from "./faPlus-da331287.js";
import { S as x, e as _, R as w, T as C, g as D, A as k, h as S, C as M, i as B, F as R, j as z, a as P, k as j, b as A, l as H, I as E, m as L, D as V, n as W, c as $, o as Y, d as q, p as N, B as Q, q as G, f as J, M as v } from "./BookInput-98484dd0.js";
import { e as K, B as O } from "./Boolean-cb060221.js";
import { P as U, a as T } from "./DictionaryCell-610952bd.js";
import { F as X } from "./icons-ad9f8a73.js";
import { r as l } from "./react-6f5a8403.js";
import { u as Z, T as ee, c as ie } from "./index-0e3105d1.js";
import { I as te } from "./mui-4f485058.js";
import "./table-f5369550.js";
const e = ie(), F = [{
  id: "results",
  title: "Планируемые результаты",
  url: "/api/rest/program-doc-results",
  form: _,
  titleField: "title",
  inputField: w,
  createFormTitle: "Новый планируемый результат",
  columns: [e.id(), e.dictionary("category_id", "programDocCategories", "Категория"), e.display("title", "Наименование")]
}, {
  id: "goals",
  title: "Задачи",
  titleField: "title",
  url: "/api/rest/program-doc-objectives",
  inputField: C,
  form: D,
  createFormTitle: "Новая задача",
  columns: [e.id(), e.display("title", "Задача")]
}, {
  id: "attestation-forms",
  title: "Формы аттестации",
  url: "/api/rest/program-doc-forms",
  titleField: "description",
  inputField: k,
  form: S,
  createFormTitle: "Новая аттестационная форма",
  columns: [e.id(), e.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
    size: 100
  }), e.display("description", "Описание", {
    size: 200
  })]
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  url: "/api/rest/program-doc-criteria",
  titleField: "description",
  inputField: M,
  form: B,
  createFormTitle: "Новый критерий оценки учебных результатов",
  columns: [e.id(), e.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), e.display("description", "Критерий")]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: R,
  form: z,
  createFormTitle: "Новый способ фиксации учебных результатов",
  columns: [e.id(), e.dictionary("method_id", "programDocMethodTypes", "Метод"), e.display("description", "Описание способа фиксации")]
}, {
  id: "materials",
  title: "Методические материалы",
  url: "/api/rest/program-doc-materials",
  titleField: "material",
  inputField: P,
  form: j,
  createFormTitle: "Новый методический материал",
  columns: [e.id(), e.display("base_knowledge", "Базовые знания"), e.display("material", "Материалы")]
}, {
  id: "managements",
  title: "Особенности организации образовательной деятельности",
  url: "/api/rest/program-doc-managements",
  titleField: "description",
  inputField: A,
  form: H,
  createFormTitle: "Новая особенность организации образовательной деятельности",
  columns: [e.id(), e.dictionary("management_type_id", "programDocManagementTypes", "Тип"), e.display("description", "Описание")]
}, {
  id: "indoctrinations",
  title: "Воспитательная деятельность",
  url: "/api/rest/program-doc-indoctrinations",
  titleField: "description",
  inputField: E,
  form: L,
  createFormTitle: "Новая воспитательная деятельность",
  columns: [e.id(), e.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), e.display("description", "Описание")]
}, {
  id: "developments",
  title: "Развивающая деятельность",
  url: "/api/rest/program-doc-developments",
  titleField: "description",
  inputField: V,
  form: W,
  createFormTitle: "Новая развивающая деятельность",
  columns: [e.id(), e.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), e.display("description", "Развивающая деятельность")]
}, {
  id: "inventories",
  title: "Материально-техническое обеспечение",
  url: "/api/rest/program-doc-inventories",
  titleField: "description",
  inputField: $,
  form: Y,
  createFormTitle: "Новое материально-техническое обеспечение",
  columns: [e.id(), e.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), e.display("description", "Описание")]
}, {
  id: "information",
  title: "Информационное обеспечение",
  url: "/api/rest/program-doc-information",
  titleField: "title",
  inputField: q,
  form: N,
  createFormTitle: "Новое информационное обеспечение",
  columns: [e.id(), e.display("title", "Наименование"), e.display("authors", "Авторы"), e.display("publisher", "Издательство"), e.display("publish_year", "Год издательства"), e.display("isbn", "ISBN")]
}, {
  id: "books",
  title: "Список литературы",
  url: "/api/rest/program-doc-books",
  titleField: "title",
  inputField: Q,
  form: G,
  createFormTitle: "Новая литература",
  columns: [e.id(), e.display("title", "Наименование"), e.display("authors", "Авторы"), e.display("publisher", "Издательство"), e.display("publish_year", "Год издательства")]
}], re = ({
  items: t,
  active: r,
  setActive: o
}) => /* @__PURE__ */ i("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: t.map(({
  id: a,
  title: s
}) => /* @__PURE__ */ i(oe, { title: s, active: r === a, onClick: () => o(a) }, a)) }), oe = ({
  title: t,
  onClick: r,
  active: o
}) => /* @__PURE__ */ i("div", { css: [{
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
}], onClick: r, children: /* @__PURE__ */ i("span", { children: t }) }), ae = ({
  dictionary: {
    url: t,
    form: r,
    createFormTitle: o,
    columns: a,
    titleField: s,
    inputField: m
  }
}) => {
  const [n, c] = l.useState(!1), [u, p] = l.useState(!1), [y, g] = l.useState(null), f = Z(t, [...a, e.actions([{
    key: "delete",
    icon: J.faTrash,
    onClick: (b) => {
      g(b), c(!0);
    }
  }])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ d(T, { header: r && /* @__PURE__ */ i(h, { children: /* @__PURE__ */ i(te, { size: "small", onClick: () => p(!0), children: /* @__PURE__ */ i(X, { icon: I.faPlus }) }) }), footer: /* @__PURE__ */ i(U, { table: f }), children: [
    u && r && /* @__PURE__ */ i(ne, { form: r, title: o, record: y, onClose: () => {
      g(null), p(!1);
    } }),
    n && /* @__PURE__ */ i(le, { open: n, record: y, titleField: s, inputField: m, url: `${t}/${y.id}`, onClose: () => {
      g(null), c(!1);
    } }),
    /* @__PURE__ */ i(ee, { table: f })
  ] });
}, ne = ({
  title: t,
  onClose: r,
  record: o,
  form: a
}) => /* @__PURE__ */ i(v, { title: t, width: 450, height: 300, open: !0, onClose: r, children: /* @__PURE__ */ i(a, { initialValues: o, onSave: () => r() }) }), le = ({
  open: t,
  onClose: r,
  record: o,
  titleField: a,
  url: s,
  inputField: m
}) => {
  const [n, c] = l.useState(null), u = K({
    method: "DELETE",
    url: s
  });
  return /* @__PURE__ */ i(v, { title: "Удаление", width: 450, height: 300, open: t, onClose: r, children: /* @__PURE__ */ i(T, { footer: /* @__PURE__ */ i("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ i(O, { variant: "contained", color: "error", onClick: () => {
    u.mutate(n ? {
      type: "replace_links",
      new_id: n
    } : {
      type: "delete_links"
    });
  }, children: n ? "Заменить и удалить" : "Удалить" }) }), children: /* @__PURE__ */ i("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ d("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ d("p", { children: [
      "Значение",
      " ",
      a ? /* @__PURE__ */ d(h, { children: [
        '"',
        o[a],
        '"'
      ] }) : null,
      "по умолчанию будет удалено из всех документов без замены. Для замены на другое значение вы можете выбрать новое значение из списка ниже."
    ] }),
    /* @__PURE__ */ i(m, { value: n, onChange: (p) => c(p) })
  ] }) }) }) });
}, he = () => {
  const [t, r] = l.useState("results"), o = l.useMemo(() => F.find(({
    id: a
  }) => a === t), [t]);
  return /* @__PURE__ */ d(x, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ i("div", { css: {
      height: "100%",
      minWidth: "9rem",
      flexBasis: "20%",
      overflowY: "auto"
    }, children: /* @__PURE__ */ i(re, { items: F, active: t, setActive: r }) }),
    /* @__PURE__ */ i("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      borderLeftWidth: "1px"
    }, children: o && /* @__PURE__ */ i(ae, { dictionary: o }, o.id) })
  ] });
};
export {
  he as default
};
