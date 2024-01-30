import { j as e, a as m } from "./library-4e772ba4.js";
import { z as o, k as _, i as g, u as f, B as h, F as a, T as s, P as y, b as c, c as b, d as v } from "./RootSection-abf5c78c.js";
import "./react-54946355.js";
import { u as x } from "./useWindowController-0fb9a840.js";
import "./icons-6b7f2986.js";
import { u as q } from "./useNavigate-1ceabe48.js";
import { P } from "./useDictionary-a8c39cbd.js";
import "./mui-02912ce2.js";
const w = o.object({
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
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((i) => {
    const n = Number(i);
    return isNaN(n) ? !1 : n >= 1900 && n <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
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
    close: i
  } = x(), n = q(), d = _(), l = g("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      n(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), i();
    }
  }), t = f({
    mutation: l,
    schema: w,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(P, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(h, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => t.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ m(v, { css: {
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
    }) => /* @__PURE__ */ e(y, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(c, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (p) => p.filter(({
      id: u
    }) => u === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(b, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
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
