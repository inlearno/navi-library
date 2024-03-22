import { j as e, a as f } from "./library-f80fb3e3.js";
import { z as t, e as h, u as y, B as b, F as a, T as s, D as c, a as v } from "./Boolean-5ee39c3f.js";
import { a as x } from "./DictionaryCell-a80ddbbc.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as q } from "./useWindowController-a822a97f.js";
import { u as w, P as D, R as F } from "./RootSection-03177f85.js";
import { u as P } from "./useNavigate-0d48d646.js";
import { u as T, R as j } from "./Role-9e814d38.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
const $ = () => {
  const d = T();
  let i;
  d.getGroup() !== "admin" ? i = t.string({
    required_error: "Выберите организацию",
    coerce: !0
  }).optional() : i = t.never();
  const p = t.object({
    steps_info: t.any(),
    partner_id: i,
    name: t.string({
      required_error: "Заполните наименование"
    }).trim().min(1, "Заполните наименование"),
    program_type_id: t.number({
      required_error: "Выберите тип программы"
    }),
    program_level_id: t.string({
      required_error: "Выберите уровень программы"
    }),
    section_id: t.string({
      required_error: "Выберите направленность"
    }),
    year_created: t.string({
      required_error: "Выберите год создания"
    }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((r) => {
      const n = Number(r);
      return isNaN(n) ? !1 : n >= 1900 && n <= (/* @__PURE__ */ new Date()).getFullYear();
    }, "Введите валидный год"),
    city_created: t.string({
      required_error: "Выберите город создания"
    })
  }).required({
    partner_id: !0,
    name: !0,
    program_type_id: !0,
    section_id: !0,
    year_created: !0,
    city_created: !0
  }), {
    close: m
  } = q(), u = P(), _ = w(), l = h("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      u(`/program-docs/constructor/${r.data.id}`), _("/api/rest/program-docs"), m();
    }
  }), o = y({
    mutation: l,
    schema: p,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(x, { footer: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(b, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => o.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ f(v, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(a, { control: o.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(j, { is: "admin", children: /* @__PURE__ */ e(a, { control: o.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(D, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ e(a, { control: o.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(c, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (n) => n.filter(({
      id: g
    }) => g === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(a, { control: o.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(F, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(a, { control: o.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(c, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(a, { control: o.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(a, { control: o.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] }) });
};
export {
  $ as default
};
