import { a as p, j as e, F } from "./library-67a87d27.js";
import { f as x } from "./faPlus-da331287.js";
import { S as _, h as T, R as w, T as k, i as C, A as D, j as S, C as M, k as B, F as f, c as P, l as R, d as z, m as j, I as A, n as H, D as E, o as L, e as V, p as W, g as $, q as Y, B as q, r as N, f as Q, M as b } from "./BookInput-13d891cd.js";
import { e as G, B as J } from "./Boolean-4a3532b8.js";
import { P as K, a as v } from "./DictionaryCell-3569b25d.js";
import { F as O } from "./icons-ad9f8a73.js";
import { r as s } from "./react-6f5a8403.js";
import { u as U, T as X, c as Z } from "./index-17626fdf.js";
import { I as ii } from "./mui-4f485058.js";
import "./table-f5369550.js";
const i = Z(), h = [{
  id: "results",
  title: "Планируемые результаты",
  url: "/api/rest/program-doc-results",
  form: T,
  titleField: "title",
  inputField: w,
  columns: [i.id(), i.dictionary("category_id", "programDocCategories", "Категория"), i.display("title", "Наименование")]
}, {
  id: "goals",
  title: "Задачи",
  titleField: "title",
  url: "/api/rest/program-doc-objectives",
  inputField: k,
  form: C,
  columns: [i.id(), i.display("title", "Задача")]
}, {
  id: "attestation-forms",
  title: "Формы аттестации",
  url: "/api/rest/program-doc-forms",
  titleField: "description",
  inputField: D,
  form: S,
  columns: [i.id(), i.dictionary("control_type_id", "programDocFormControlTypes", "Тип", {
    size: 100
  }), i.display("description", "Описание", {
    size: 200
  })]
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  url: "/api/rest/program-doc-criteria",
  titleField: "description",
  inputField: M,
  form: B,
  columns: [i.id(), i.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), i.display("description", "Критерий")]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: f,
  form: f,
  columns: [i.id(), i.dictionary("method_id", "programDocMethodTypes", "Метод"), i.display("description", "Описание способа фиксации")]
}, {
  id: "materials",
  title: "Методические материалы",
  url: "/api/rest/program-doc-materials",
  titleField: "material",
  inputField: P,
  form: R,
  columns: [i.id(), i.display("base_knowledge", "Базовые знания"), i.display("material", "Материалы")]
}, {
  id: "managements",
  title: "Особенности организации образовательной деятельности",
  url: "/api/rest/program-doc-managements",
  titleField: "description",
  inputField: z,
  form: j,
  columns: [i.id(), i.dictionary("management_type_id", "programDocManagementTypes", "Тип"), i.display("description", "Описание")]
}, {
  id: "indoctrinations",
  title: "Воспитательная деятельность",
  url: "/api/rest/program-doc-indoctrinations",
  titleField: "description",
  inputField: A,
  form: H,
  columns: [i.id(), i.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), i.display("description", "Описание")]
}, {
  id: "developments",
  title: "Развивающая деятельность",
  url: "/api/rest/program-doc-developments",
  titleField: "description",
  inputField: E,
  form: L,
  columns: [i.id(), i.dictionary("development_type_id", "programDocIndoctrinationTypes", "Тип"), i.display("description", "Развивающая деятельность")]
}, {
  id: "inventories",
  title: "Материально-техническое обеспечение",
  url: "/api/rest/program-doc-inventories",
  titleField: "description",
  inputField: V,
  form: W,
  columns: [i.id(), i.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), i.display("description", "Описание")]
}, {
  id: "information",
  title: "Информационное обеспечение",
  url: "/api/rest/program-doc-information",
  titleField: "title",
  inputField: $,
  form: Y,
  columns: [i.id(), i.display("title", "Наименование"), i.display("authors", "Авторы"), i.display("publisher", "Издательство"), i.display("publish_year", "Год издательства"), i.display("isbn", "ISBN")]
}, {
  id: "books",
  title: "Список литературы",
  url: "/api/rest/program-doc-books",
  titleField: "title",
  inputField: q,
  form: N,
  columns: [i.id(), i.display("title", "Наименование"), i.display("authors", "Авторы"), i.display("publisher", "Издательство"), i.display("publish_year", "Год издательства")]
}], ei = ({
  items: t,
  active: r,
  setActive: o
}) => /* @__PURE__ */ e("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: t.map(({
  id: a,
  title: l
}) => /* @__PURE__ */ e(ti, { title: l, active: r === a, onClick: () => o(a) }, a)) }), ti = ({
  title: t,
  onClick: r,
  active: o
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
}], onClick: r, children: /* @__PURE__ */ e("span", { children: t }) }), ri = ({
  dictionary: {
    url: t,
    form: r,
    columns: o,
    titleField: a,
    inputField: l
  }
}) => {
  const [c, n] = s.useState(!1), [u, m] = s.useState(!1), [d, y] = s.useState(null), g = U(t, [...o, i.actions([
    // ...(form
    //   ? [
    //       {
    //         key: "edit",
    //         icon: solid("pen"),
    //         onClick: (record: any) => {
    //           setCurrentRecord(record);
    //           setShowForm(true);
    //         },
    //       },
    //     ]
    //   : []),
    {
      key: "delete",
      icon: Q.faTrash,
      onClick: (I) => {
        y(I), n(!0);
      }
    }
  ])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    },
    keepPrevious: !1,
    enableSorting: !1
  });
  return /* @__PURE__ */ p(v, { tbar: r && /* @__PURE__ */ e(F, { children: /* @__PURE__ */ e(ii, { size: "small", onClick: () => m(!0), children: /* @__PURE__ */ e(O, { icon: x.faPlus }) }) }), bbar: /* @__PURE__ */ e(K, { table: g }), children: [
    u && r && /* @__PURE__ */ e(oi, { form: r, record: d, onClose: () => {
      y(null), m(!1);
    } }),
    c && /* @__PURE__ */ e(ai, { open: c, record: d, titleField: a, inputField: l, url: `${t}/${d.id}`, onClose: () => {
      y(null), n(!1);
    } }),
    /* @__PURE__ */ e(X, { table: g })
  ] });
}, oi = ({
  onClose: t,
  record: r,
  form: o
}) => /* @__PURE__ */ e(b, { width: 450, height: 300, open: !0, onClose: t, children: /* @__PURE__ */ e(o, { initialValues: r, onSave: () => t() }) }), ai = ({
  open: t,
  onClose: r,
  record: o,
  titleField: a,
  url: l,
  inputField: c
}) => {
  const [n, u] = s.useState(null), m = G({
    method: "DELETE",
    url: l
  });
  return /* @__PURE__ */ e(b, { title: "Удаление", width: 450, height: 300, open: t, onClose: r, children: /* @__PURE__ */ e(v, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(J, { variant: "contained", color: "error", onClick: () => {
    m.mutate(n ? {
      type: "replace_links",
      new_id: n
    } : {
      type: "delete_links"
    });
  }, children: n ? "Заменить и удалить" : "Удалить" }) }), children: /* @__PURE__ */ e("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("p", { children: [
      "Значение",
      " ",
      a ? /* @__PURE__ */ p(F, { children: [
        '"',
        o[a],
        '"'
      ] }) : null,
      "по умолчанию будет удалено из всех документов без замены. Для замены на другое значение вы можете выбрать новое значение из списка ниже."
    ] }),
    /* @__PURE__ */ e(c, { value: n, onChange: (d) => u(d) })
  ] }) }) }) });
}, fi = () => {
  const [t, r] = s.useState("results"), o = s.useMemo(() => h.find(({
    id: a
  }) => a === t), [t]);
  return /* @__PURE__ */ p(_, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      minWidth: "9rem",
      flexBasis: "20%",
      overflowY: "auto"
    }, children: /* @__PURE__ */ e(ei, { items: h, active: t, setActive: r }) }),
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      borderLeftWidth: "1px"
    }, children: o && /* @__PURE__ */ e(ri, { dictionary: o }) })
  ] });
};
export {
  fi as default
};
