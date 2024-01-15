import { u as m, j as e, a as _ } from "./library-ea68d1cc.js";
import { z as o, d as g, u as y, C as h, F as a, T as s, P as b, D as c, R as f, a as q } from "./RootSection-70eb6e7e.js";
import { u as v } from "./useNavigate-2d87d7c7.js";
import { P as C } from "./useDictionary-cd08dfb2.js";
import { u as x } from "./useWindowController-393e37c7.js";
import "./react-181b9648.js";
import "./mui-d2313b11.js";
import "./icons-42066a3f.js";
const P = () => {
  const n = m();
  return (i) => n.invalidateQueries({
    queryKey: [i]
  });
}, T = o.object({
  partner_id: o.string({
    required_error: "Выберите организацию"
  }),
  name: o.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: o.number({
    required_error: "Выберите тип программы"
  }),
  program_level_id: o.string({
    required_error: "Выберите уровень программы"
  }),
  section_id: o.string({
    required_error: "Выберите направленность"
  }),
  year_created: o.string({
    required_error: "Выберите год создания"
  }),
  city_created: o.string({
    required_error: "Выберите город создания"
  })
}).required({
  partner_id: !0,
  name: !0,
  program_type_id: !0,
  section_id: !0,
  year_created: !0,
  city_created: !0
}), S = () => {
  const {
    close: n
  } = x(), i = v(), d = P(), l = g("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      i(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), n();
    }
  }), t = y({
    mutation: l,
    schema: T
  });
  return /* @__PURE__ */ e(C, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(h, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => t.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ _(q, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(a, { control: t.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(b, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(c, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (u) => u.filter(({
      id: p
    }) => p === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(f, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(c, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] }) });
};
export {
  S as default
};
