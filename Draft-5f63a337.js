import { u as m, j as r, a as p } from "./library-047369e1.js";
import { b as _, d as u, z as o, a as y, u as h, c as g, T as c, D as d, F as b } from "./QueriedComboBox-12e46834.js";
import "./icons-cd19d6df.js";
import "./react-181b9648.js";
import { u as f } from "./useNavigate-2d87d7c7.js";
import { P as x } from "./useDictionary-60a2240b.js";
import { u as F } from "./useWindowController-6c6e7291.js";
import "./mui-a33a672b.js";
const q = () => {
  const n = m();
  return (i) => n.invalidateQueries({
    queryKey: [i]
  });
}, a = ({
  render: n,
  ...i
}) => /* @__PURE__ */ r(_, { ...i, render: ({
  field: l,
  fieldState: s,
  ...t
}) => {
  var e;
  return n({
    field: {
      ...l,
      error: (e = s.error) == null ? void 0 : e.message
    },
    fieldState: s,
    ...t
  });
} }), v = u({
  url: "/api/rest/partners",
  displayField: "name"
}), C = u({
  url: "/api/rest/sections",
  displayField: "title"
}), w = o.object({
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
  // .min(1991)
  // .max(
  //   new Date().getFullYear(),
  //   "Год создания не может быть больше текущего"
  // ),
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
  } = F(), i = f(), l = q(), s = y("POST", "/api/rest/program-docs", {
    onSuccess: (e) => {
      i(`/program-docs/constructor/${e.data.id}`), l("/api/rest/program-docs"), n();
    }
  }), t = h({
    mutation: s,
    schema: w
  });
  return /* @__PURE__ */ r(x, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(g, { variant: "contained", color: "success", onClick: () => t.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ p(b, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ r(a, { control: t.control, name: "partner_id", render: ({
      field: e
    }) => /* @__PURE__ */ r(v, { css: {
      width: "100%"
    }, ...e, placeholder: "Выберите организацию", label: "Организация", helperText: "Организация программы" }) }),
    /* @__PURE__ */ r(a, { control: t.control, name: "name", render: ({
      field: e
    }) => /* @__PURE__ */ r(c, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ r(a, { control: t.control, name: "program_type_id", render: ({
      field: e
    }) => /* @__PURE__ */ r(d, { label: "Тип программы", css: {
      width: "100%"
    }, ...e, dictionary: "navProgramType", placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ r(a, { control: t.control, name: "section_id", render: ({
      field: e
    }) => /* @__PURE__ */ r(C, { label: "Направленность", placeholder: "Выберите направленность", ...e }) }),
    /* @__PURE__ */ r(a, { control: t.control, name: "program_level_id", render: ({
      field: e
    }) => /* @__PURE__ */ r(d, { label: "Уровень", css: {
      width: "100%"
    }, ...e, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ r(a, { control: t.control, name: "year_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(c, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...e }) }),
    /* @__PURE__ */ r(a, { control: t.control, name: "city_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(c, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...e }) })
  ] }) });
};
export {
  S as default
};
