import { j as e, a as u } from "./library-8664d5a6.js";
import { z as o, g as _, d as g, u as h, C as y, F as a, T as n, P as f, D as s, R as b, a as v } from "./RootSection-48795fae.js";
import { u as q } from "./useNavigate-2d87d7c7.js";
import { P as x } from "./useDictionary-700de8dc.js";
import { u as C } from "./useWindowController-f09a49c5.js";
import "./react-181b9648.js";
import "./mui-d2313b11.js";
import "./icons-42066a3f.js";
const P = o.object({
  steps_info: o.any(),
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
    close: l
  } = C(), c = q(), d = _(), i = g("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      c(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), l();
    }
  }), t = h({
    mutation: i,
    schema: P,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(x, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(y, { variant: "contained", color: "success", disabled: i.isPending, onClick: () => t.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ u(v, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(a, { control: t.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(f, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (p) => p.filter(({
      id: m
    }) => m === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(b, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] }) });
};
export {
  S as default
};
