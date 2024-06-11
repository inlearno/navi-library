import { j as e, b as p } from "./library-0c8fbdb5.js";
import { u, B as f } from "./faEye-7bea50c5.js";
import { a as h } from "./DictionaryCell-a901e8dd.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as g } from "./useWindowController-01d4544b.js";
import { u as v, a as t, T as a, D as n, F as y } from "./Phone-413d88a1.js";
import { u as b } from "./useResetHttpQueryCache-28bad901.js";
import { R as x, i as _ } from "./year-58445167.js";
import { u as q } from "./useNavigate-f9e1762c.js";
import { P, R as T } from "./RootSection-ba519536.js";
import "./mui-0a491bf1.js";
import "./useUser-bd6c9512.js";
import "./configureQueriedCombo-20ec0b6b.js";
const V = () => {
  const {
    close: s
  } = g(), i = q(), d = b(), l = u("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      i(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), s();
    }
  }), o = v({
    mutation: l,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(h, { fit: !0, footer: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(f, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => o.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ p(y, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(t, { control: o.control, name: "name", rules: {
      required: "Заполните наименование"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(x, { is: "admin", children: /* @__PURE__ */ e(t, { control: o.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(P, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (c) => c.filter(({
      id: m
    }) => m === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "section_id", rules: {
      required: "Выберите направленность"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(T, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "year_created", rules: {
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
    /* @__PURE__ */ e(t, { control: o.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] }) });
};
export {
  V as default
};
