import { j as e, a as u } from "./library-ce9feb41.js";
import { z as o, e as _, u as g, B as f, F as a, T as s, D as c, a as h } from "./Boolean-6991984d.js";
import { a as y } from "./DictionaryCell-1271e557.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as b } from "./useWindowController-106e017b.js";
import { u as v, P as x, R as q } from "./RootSection-7388304d.js";
import { u as w } from "./useNavigate-174c2b1e.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
const D = o.object({
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
}), B = () => {
  const {
    close: i
  } = b(), n = w(), d = v(), l = _("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      n(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), i();
    }
  }), t = g({
    mutation: l,
    schema: D,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(y, { bbar: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(f, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => t.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ u(h, { css: {
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
    }) => /* @__PURE__ */ e(x, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(c, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (p) => p.filter(({
      id: m
    }) => m === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(a, { control: t.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(q, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
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
  B as default
};
