import { j as r, b as p } from "./library-d2e029ff.js";
import { u, a as f, B as g, b as s, T as i, F as h } from "./Boolean-3ce95c5c.js";
import { a as y } from "./DictionaryCell-a98dea67.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as l } from "./useWindowController-e10e8f22.js";
import { u as b } from "./useWithTitle-56b7d4b9.js";
import { z as n } from "./index-d0beacff.js";
import { u as x } from "./configureQueriedCombo-e780ea1b.js";
import { u as _ } from "./useNavigate-1fd83aed.js";
import { P as F } from "./RootSection-6354c31e.js";
import "./mui-2ff488a7.js";
import "./faEye-ea161ce6.js";
const w = () => {
  const {
    params: t
  } = l();
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
}), Q = () => {
  const {
    id: t
  } = w(), {
    close: a
  } = l(), m = _(), d = x(), c = u(`/api/program-docs/${t}/copy`, {
    onSuccess: ({
      data: {
        newDocId: e
      }
    }) => {
      d("/api/rest/program-docs"), m(`/program-docs/constructor/${e}`), a();
    }
  });
  b(`Копирование программы #${t}`);
  const o = f({
    mutation: c,
    schema: C
  });
  return /* @__PURE__ */ r(y, { fit: !0, footer: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(g, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => o.submit(), children: "Копировать" }, "next") }), children: /* @__PURE__ */ p(h, { css: {
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
  Q as default
};
