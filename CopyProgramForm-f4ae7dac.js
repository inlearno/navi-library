import { j as r, a as p } from "./library-e032c533.js";
import { e as u, u as f, B as g, F as s, T as i, a as h, z as n } from "./Boolean-68f0cccd.js";
import { a as y } from "./DictionaryCell-0b2e5a0e.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as l } from "./useWindowController-d229bf55.js";
import { u as x } from "./useWithTitle-5f028314.js";
import { u as _, P as b } from "./RootSection-396a5da0.js";
import { u as F } from "./useNavigate-82ffde1e.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
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
}), I = () => {
  const {
    id: t
  } = w(), {
    close: a
  } = l(), d = F(), m = _(), c = u(`/api/program-docs/${t}/copy`, {
    onSuccess: ({
      data: {
        newDocId: e
      }
    }) => {
      m("/api/rest/program-docs"), d(`/program-docs/constructor/${e}`), a();
    }
  });
  x(`Копирование программы #${t}`);
  const o = f({
    mutation: c,
    schema: C
  });
  return /* @__PURE__ */ r(y, { footer: /* @__PURE__ */ r("div", { css: {
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
    }) => /* @__PURE__ */ r(b, { ...e, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "year_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...e }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "city_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...e }) })
  ] }) });
};
export {
  I as default
};
