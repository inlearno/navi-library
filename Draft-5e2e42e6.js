import { j as e, b as p } from "./library-00fde673.js";
import { u, a as h, B as f, b as o, T as a, D as n, F as g } from "./Boolean-414d1f8a.js";
import { a as b } from "./DictionaryCell-b74160fa.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as v } from "./useWindowController-a632c457.js";
import { u as y } from "./configureQueriedCombo-410ea521.js";
import { R as x, i as _ } from "./year-0c19c8aa.js";
import { u as q } from "./useNavigate-cb7c871d.js";
import { P, R as T } from "./RootSection-41a205a6.js";
import "./mui-2ff488a7.js";
import "./faEye-ea161ce6.js";
import "./useUser-1775c17a.js";
const Q = () => {
  const {
    close: s
  } = v(), i = q(), d = y(), l = u("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      i(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), s();
    }
  }), t = h({
    mutation: l,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(b, { fit: !0, footer: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(f, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => t.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ p(g, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(o, { control: t.control, name: "name", rules: {
      required: "Заполните наименование"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(x, { is: "admin", children: /* @__PURE__ */ e(o, { control: t.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(P, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ e(o, { control: t.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (c) => c.filter(({
      id: m
    }) => m === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(o, { control: t.control, name: "section_id", rules: {
      required: "Выберите направленность"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(T, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(o, { control: t.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(o, { control: t.control, name: "year_created", rules: {
      required: "Введите год",
      maxLength: {
        value: 4,
        message: "Максимум 4 цифры"
      },
      minLength: {
        value: 4,
        message: "Минимум 4 цифры"
      },
      validate: _
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(o, { control: t.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] }) });
};
export {
  Q as default
};
