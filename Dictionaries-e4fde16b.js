import { j as t, b as u, F as w } from "./library-75cbf1f9.js";
import { f as L } from "./faChevronDown-dd97b173.js";
import { F as b } from "./icons-56df5d3c.js";
import { a as C, B as _, u as j } from "./faEye-a5fee5cd.js";
import { a as P, P as R } from "./DictionaryCell-7121ea48.js";
import { S as W, e as O, R as $, T as Q, f as V, A as N, g as q, a as X, h as Y, F as G, i as U, M as J, j as K, b as Z, k as tt, I as et, l as it, D as rt, m as ot, c as at, n as nt, d as st, o as lt, B as dt, p as ct, C as pt } from "./BookInput-3b386940.js";
import { r as f, d as E, g as mt } from "./react-bd6781bd.js";
import { u as ut, T as ft, c as gt } from "./index-b01425eb.js";
import { f as ht, a as yt } from "./faTrash-33be5127.js";
import { u as S } from "./useResetHttpQueryCache-19a9ec55.js";
import { d as Ft, a as vt, F as wt } from "./Phone-727e8dce.js";
import { M as z, m as bt } from "./ModalWindow-65156458.js";
import { A as xt, I as D } from "./mui-51f6b52b.js";
import { P as Tt } from "./PopoverConfirm-55c07a1e.js";
import { f as It } from "./faPenAlt-38421783.js";
import "./useUser-1af39c8e.js";
import "./configureQueriedCombo-b3167de9.js";
import "./ConstructorForm-424a45db.js";
import "./table-bbae3ab0.js";
const Ct = ({
  id: a,
  open: r,
  onClose: o,
  record: i,
  titleField: n,
  mutation: s,
  inputField: l
}) => {
  const p = C(), [d, m] = f.useState(), c = Ft({
    onValid: ({
      replace: h
    }) => {
      s.mutate({
        type: "replace_links",
        new_id: h
      }, {
        onError: (v) => {
          var g;
          m(((g = v.response) == null ? void 0 : g.data.message) || v.message);
        }
      });
    }
  });
  return /* @__PURE__ */ t(z, { title: "Удаление", width: 450, autoHeight: !0, open: r, resizable: !1, onClose: o, children: /* @__PURE__ */ t(P, { fit: p, footer: /* @__PURE__ */ u("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    gap: "0.5rem"
  }, children: [
    /* @__PURE__ */ t(_, { size: "small", variant: "contained", onClick: () => {
      o();
    }, children: "Закрыть" }),
    /* @__PURE__ */ t(_, { size: "small", variant: "contained", color: "error", onClick: () => {
      c.submit();
    }, children: "Заменить" })
  ] }), children: /* @__PURE__ */ t("div", { css: {
    padding: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: /* @__PURE__ */ u(wt, { form: c, css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    d && /* @__PURE__ */ t(xt, { severity: "error", children: d }),
    /* @__PURE__ */ u("p", { children: [
      "Значение",
      " ",
      n ? /* @__PURE__ */ u(w, { children: [
        '"',
        i[n],
        '"'
      ] }) : null,
      " ",
      "используется в существующих документах."
    ] }),
    /* @__PURE__ */ t("p", { children: "Выберите значение для замены:" }),
    /* @__PURE__ */ t(vt, { control: c.control, name: "replace", rules: {
      required: "Выберите замену"
    }, render: ({
      field: h
    }) => /* @__PURE__ */ t(l, { filters: [{
      property: "id",
      value: a,
      type: "numeric",
      comparison: "neq"
    }], ...h }) })
  ] }) }) }) });
}, Dt = ({
  id: a,
  url: r,
  record: o,
  titleField: i,
  inputField: n
}) => {
  const s = S(), [l, p] = f.useState(!1), d = j({
    method: "DELETE",
    url: `${r}/${o.id}`,
    onSuccess: () => {
      s(r);
    }
  }), m = f.useCallback(async () => {
    try {
      await d.mutateAsync({});
    } catch {
      p(!0);
    }
  }, [o]);
  return /* @__PURE__ */ u(w, { children: [
    /* @__PURE__ */ t(Tt, { onConfirm: () => {
      m();
    }, children: (c) => /* @__PURE__ */ t(D, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))"
      }
    }], ...c, children: /* @__PURE__ */ t(b, { icon: ht.faTrash }) }) }),
    /* @__PURE__ */ t(Ct, { id: a, open: l, record: o, titleField: i, inputField: n, mutation: d, onClose: () => p(!1) })
  ] });
}, B = ({
  title: a,
  onClose: r,
  record: o,
  form: i,
  onSave: n,
  open: s = !1
}) => {
  const l = C();
  return /* @__PURE__ */ t(z, { title: a, resizable: !1, width: 450, autoHeight: !0, open: s, onClose: r, children: /* @__PURE__ */ t(i, { fit: l, initialValues: o, onSave: (p) => {
    n == null || n(p), r();
  } }) });
}, kt = ({
  form: a,
  title: r,
  onSave: o
}) => {
  const [i, n] = f.useState(!1);
  return /* @__PURE__ */ u(w, { children: [
    /* @__PURE__ */ t(D, { size: "small", onClick: () => n(!0), children: /* @__PURE__ */ t(b, { icon: yt.faPlus }) }),
    /* @__PURE__ */ t(B, { form: a, open: i, title: r, onClose: () => {
      n(!1);
    }, onSave: (s) => {
      o == null || o(s);
    } })
  ] });
}, Mt = ({
  record: a,
  title: r,
  form: o,
  onSave: i
}) => {
  const [n, s] = f.useState(!1);
  return /* @__PURE__ */ u(w, { children: [
    /* @__PURE__ */ t(D, { size: "small", css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(202 138 4 / var(--tw-text-opacity))"
      }
    }], onClick: () => s(!0), children: /* @__PURE__ */ t(b, { icon: It.faPenAlt }) }),
    /* @__PURE__ */ t(B, { form: o, record: a, title: r, open: n, onSave: (l) => {
      i == null || i(l);
    }, onClose: () => {
      s(!1);
    } })
  ] });
};
var A = { exports: {} };
(function(a) {
  (function(r) {
    function o(s) {
      var l = new Error(s);
      return l.name = "ValueError", l;
    }
    function i(s) {
      return function(l) {
        var p = Array.prototype.slice.call(arguments, 1), d = 0, m = "UNDEFINED";
        return l.replace(
          /([{}])\1|[{](.*?)(?:!(.+?))?[}]/g,
          function(c, h, v, g) {
            if (h != null)
              return h;
            var x = v;
            if (x.length > 0) {
              if (m === "IMPLICIT")
                throw o("cannot switch from implicit to explicit numbering");
              m = "EXPLICIT";
            } else {
              if (m === "EXPLICIT")
                throw o("cannot switch from explicit to implicit numbering");
              m = "IMPLICIT", x = String(d), d += 1;
            }
            var T = x.split("."), k = (/^\d+$/.test(T[0]) ? T : ["0"].concat(T)).reduce(function(M, y) {
              return M.reduce(function(Bt, F) {
                return F != null && y in Object(F) ? [typeof F[y] == "function" ? F[y]() : F[y]] : [];
              }, []);
            }, [p]).reduce(function(M, y) {
              return y;
            }, "");
            if (g == null)
              return k;
            if (Object.prototype.hasOwnProperty.call(s, g))
              return s[g](k);
            throw o('no transformer named "' + g + '"');
          }
        );
      };
    }
    var n = i({});
    n.create = i, n.extend = function(s, l) {
      var p = i(l);
      s.format = function() {
        var d = Array.prototype.slice.call(arguments);
        return d.unshift(this), p.apply(r, d);
      };
    }, a.exports = n;
  }).call(E, E);
})(A);
var _t = A.exports;
const Et = /* @__PURE__ */ mt(_t), e = gt(), I = [{
  id: "results",
  title: "Планируемые результаты",
  url: "/api/rest/program-doc-results",
  form: O,
  titleField: "title",
  inputField: $,
  createFormTitle: "Новый планируемый результат",
  editFormTitle: "Планируемый результат #{id}",
  columns: [e.id(), e.dictionary("category_id", "programDocCategories", "Категория"), e.display("title", "Наименование")]
}, {
  id: "goals",
  title: "Задачи",
  titleField: "title",
  url: "/api/rest/program-doc-objectives",
  inputField: Q,
  form: V,
  createFormTitle: "Новая задача",
  editFormTitle: "Задача #{id}",
  columns: [e.id(), e.display("title", "Задача")]
}, {
  id: "attestation-forms",
  title: "Формы аттестации",
  url: "/api/rest/program-doc-forms",
  titleField: "description",
  inputField: N,
  form: q,
  createFormTitle: "Новая аттестационная форма",
  editFormTitle: "Аттестационная форма #{id}",
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
  inputField: X,
  form: Y,
  createFormTitle: "Новый критерий оценки учебных результатов",
  editFormTitle: "Критерий оценки #{id}",
  columns: [e.id(), e.dictionary("criterion_type_id", "programDocCriteriaTypes", "Тип критерия"), e.display("description", "Критерий")]
}, {
  id: "fixations",
  title: "Способы фиксации учебных результатов",
  url: "/api/rest/program-doc-fixations",
  titleField: "description",
  inputField: G,
  form: U,
  createFormTitle: "Новый способ фиксации учебных результатов",
  editFormTitle: "Способ фиксации #{id}",
  columns: [e.id(), e.dictionary("method_id", "programDocMethodTypes", "Метод"), e.display("description", "Описание способа фиксации")]
}, {
  id: "materials",
  title: "Методические материалы",
  url: "/api/rest/program-doc-materials",
  titleField: "material",
  inputField: J,
  form: K,
  createFormTitle: "Новый методический материал",
  editFormTitle: "Методический материал #{id}",
  columns: [e.id(), e.display("base_knowledge", "Базовые знания"), e.display("material", "Материалы")]
}, {
  id: "managements",
  title: "Особенности организации образовательной деятельности",
  url: "/api/rest/program-doc-managements",
  titleField: "description",
  inputField: Z,
  form: tt,
  createFormTitle: "Новая особенность организации образовательной деятельности",
  editFormTitle: "Особенность организации образовательной деятельности #{id}",
  columns: [e.id(), e.dictionary("management_type_id", "programDocManagementTypes", "Тип"), e.display("description", "Описание")]
}, {
  id: "indoctrinations",
  title: "Воспитательная деятельность",
  url: "/api/rest/program-doc-indoctrinations",
  titleField: "description",
  inputField: et,
  form: it,
  createFormTitle: "Новая воспитательная деятельность",
  editFormTitle: "Воспитательная деятельность #{id}",
  columns: [e.id(), e.dictionary("indoctrination_type_id", "programDocIndoctrinationTypes", "Тип воспитательной деятельности"), e.display("description", "Описание")]
}, {
  id: "developments",
  title: "Развивающая деятельность",
  url: "/api/rest/program-doc-developments",
  titleField: "description",
  inputField: rt,
  form: ot,
  createFormTitle: "Новая развивающая деятельность",
  editFormTitle: "Развивающая деятельность #{id}",
  columns: [e.id(), e.dictionary("development_type_id", "programDocDevelopmentTypes", "Тип"), e.display("description", "Развивающая деятельность")]
}, {
  id: "inventories",
  title: "Материально-техническое обеспечение",
  url: "/api/rest/program-doc-inventories",
  titleField: "description",
  inputField: at,
  form: nt,
  createFormTitle: "Новое материально-техническое обеспечение",
  editFormTitle: "Материально-техническое обеспечение #{id}",
  columns: [e.id(), e.dictionary("inventory_type_id", "programDocInventoryTypes", "Тип"), e.display("description", "Описание")]
}, {
  id: "information",
  title: "Информационное обеспечение",
  url: "/api/rest/program-doc-information",
  titleField: "title",
  inputField: st,
  form: lt,
  createFormTitle: "Новое информационное обеспечение",
  editFormTitle: "Информационное обеспечение #{id}",
  columns: [e.id(), e.display("title", "Наименование"), e.display("authors", "Авторы"), e.display("publisher", "Издательство"), e.display("publish_year", "Год издательства"), e.display("isbn", "ISBN")]
}, {
  id: "books",
  title: "Список литературы",
  url: "/api/rest/program-doc-books",
  titleField: "title",
  inputField: dt,
  form: ct,
  createFormTitle: "Новая литература",
  editFormTitle: "Литература #{id}",
  columns: [e.id(), e.display("title", "Наименование"), e.display("authors", "Авторы"), e.display("publisher", "Издательство"), e.display("publish_year", "Год издательства")]
}], Pt = ({
  items: a,
  active: r,
  setActive: o
}) => /* @__PURE__ */ t("div", { css: {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem"
}, children: a.map(({
  id: i,
  title: n
}) => /* @__PURE__ */ t(St, { title: n, active: r === i, onClick: () => o(i) }, i)) }), St = ({
  title: a,
  onClick: r,
  active: o
}) => /* @__PURE__ */ t("div", { css: [{
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
}], onClick: r, children: /* @__PURE__ */ t("span", { children: a }) }), H = ({
  dictionary: {
    url: a,
    form: r,
    createFormTitle: o,
    editFormTitle: i,
    columns: n,
    titleField: s,
    filters: l,
    inputField: p
  }
}) => {
  const d = S(), m = ut(a, [...n, e.actions([{
    key: "edit",
    privilege: "ProgramDocsDictionariesEdit",
    render: (c) => /* @__PURE__ */ t(Mt, { title: Et(i, c), form: r, onSave: () => d(a), record: c })
  }, {
    key: "delete",
    privilege: "ProgramDocsDictionariesEdit",
    render: (c) => /* @__PURE__ */ t(Dt, { id: c.id, url: a, titleField: s, inputField: p, record: c })
  }])], {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultFilters: l
  });
  return /* @__PURE__ */ t(P, { fit: !0, header: /* @__PURE__ */ t(pt, { to: "ProgramDocsDictionariesEdit", children: /* @__PURE__ */ t(kt, { title: o, onSave: () => d(a), form: r }) }), footer: /* @__PURE__ */ t(R, { table: m }), children: /* @__PURE__ */ t(ft, { table: m }) });
}, zt = ({
  items: a,
  active: r,
  setActive: o
}) => {
  const [i, n] = f.useState(!1);
  return /* @__PURE__ */ u("div", { css: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ u("div", { onClick: () => n(!i), css: {
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      borderBottomWidth: "1px",
      padding: "0.5rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity))"
      }
    }, children: [
      /* @__PURE__ */ t("div", { css: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "80%"
      }, children: r.title }),
      " ",
      /* @__PURE__ */ t(b, { icon: L.faChevronDown })
    ] }),
    /* @__PURE__ */ u("div", { css: {
      position: "relative",
      width: "100%",
      flex: "1 1 0%",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ t("div", { css: {
        position: "absolute",
        left: "0px",
        top: "0px",
        height: "100%",
        width: "100%",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
      }, children: /* @__PURE__ */ t(H, { dictionary: r }, r.id) }),
      /* @__PURE__ */ t(bt.div, { css: {
        position: "absolute",
        left: "0px",
        top: "0px",
        zIndex: "10",
        width: "100%",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, variants: {
        closed: {
          y: "-105%"
        },
        open: {
          y: "0%",
          transition: {
            ease: "easeOut"
          }
        }
      }, initial: "closed", animate: i ? "open" : "closed", transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.3
      }, children: a.map(({
        id: s,
        title: l
      }) => /* @__PURE__ */ t("div", { css: [{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        borderBottomWidth: "1px",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
      }, r.id === s ? {
        userSelect: "none",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(141 148 205 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgb(255 255 255 / var(--tw-text-opacity))"
      } : {
        cursor: "pointer",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 230 244 / var(--tw-bg-opacity))"
        }
      }], onClick: () => {
        o(s), n(!1);
      }, children: /* @__PURE__ */ t("span", { children: l }) }, s)) })
    ] })
  ] });
}, te = () => {
  const [a, r] = f.useState("results"), o = C(), i = f.useMemo(() => I.find(({
    id: n
  }) => n === a), [a]);
  return o ? /* @__PURE__ */ t(zt, { items: I, active: i, setActive: r }) : /* @__PURE__ */ u(W, { initialPrimarySize: "20%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      minWidth: "9rem",
      flexBasis: "20%",
      overflowY: "auto"
    }, children: /* @__PURE__ */ t(Pt, { items: I, active: a, setActive: r }) }),
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      borderLeftWidth: "1px"
    }, children: i && /* @__PURE__ */ t(H, { dictionary: i }, i.id) })
  ] });
};
export {
  te as default
};
