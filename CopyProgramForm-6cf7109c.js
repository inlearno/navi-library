import { j as r, b as p } from "./library-e4cc27e1.js";
import { u, B as f } from "./faEye-db6d14ba.js";
import { a as g } from "./DictionaryCell-c555a711.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWindowController-699dba48.js";
import { u as h } from "./useWithTitle-f5816644.js";
import { z as n } from "./index-d0beacff.js";
import { u as y, a as s, T as i, F as x } from "./Boolean-d33b2ab1.js";
import { u as _ } from "./useResetHttpQueryCache-f863d67e.js";
import { u as b } from "./useNavigate-fdbb07fa.js";
import { P as F } from "./RootSection-1ee453e7.js";
import "./mui-2ff488a7.js";
import "./configureQueriedCombo-dd63c7a7.js";
const w = () => {
  const {
    params: t
  } = m();
  return t;
}, C = n.object({
  partner_id: n.string({
    required_error: "Выберите организацию"
  }),
  name: n.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  year_created: n.string({
    required_error: "Выберите год создания"
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((t) => {
    const a = Number(t);
    return isNaN(a) ? !1 : a >= 1900 && a <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
  city_created: n.string({
    required_error: "Выберите город создания"
  })
}), Y = () => {
  const {
    id: t
  } = w(), {
    close: a
  } = m(), l = b(), d = _(), c = u(`/api/program-docs/${t}/copy`, {
    onSuccess: ({
      data: {
        newDocId: e
      }
    }) => {
      d("/api/rest/program-docs"), l(`/program-docs/constructor/${e}`), a();
    }
  });
  h(`Копирование программы #${t}`);
  const o = y({
    mutation: c,
    schema: C
  });
  return /* @__PURE__ */ r(g, { fit: !0, footer: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(f, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => o.submit(), children: "Копировать" }, "next") }), children: /* @__PURE__ */ p(x, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ r(s, { control: o.control, name: "name", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "partner_id", render: ({
      field: e
    }) => /* @__PURE__ */ r(F, { ...e, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "year_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...e }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "city_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...e }) })
  ] }) });
};
export {
  Y as default
};
