import { j as r, a as u } from "./library-7fb6c15a.js";
import { h as p, e as h, u as g, B as f, F as s, T as i, P as y, a as b, z as n } from "./RootSection-407f953c.js";
import { u as x } from "./useNavigate-2d87d7c7.js";
import { P as _ } from "./useDictionary-a91051fc.js";
import { u as l } from "./useWindowController-67a241b3.js";
import { u as F } from "./useWithTitle-18477666.js";
import "./react-181b9648.js";
import "./mui-d2313b11.js";
import "./icons-42066a3f.js";
const P = () => {
  const {
    params: t
  } = l();
  return t;
}, w = n.object({
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
}), B = () => {
  const {
    id: t
  } = P(), {
    close: a
  } = l(), d = x(), m = p(), c = h(`/api/program-docs/${t}/copy`, {
    onSuccess: ({
      data: {
        newDocId: e
      }
    }) => {
      m("/api/rest/program-docs"), d(`/program-docs/constructor/${e}`), a();
    }
  });
  F(`Копирование программы #${t}`);
  const o = g({
    mutation: c,
    schema: w
  });
  return /* @__PURE__ */ r(_, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(f, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => o.submit(), children: "Копировать" }, "next") }), children: /* @__PURE__ */ u(b, { css: {
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
    }) => /* @__PURE__ */ r(y, { ...e, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "year_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...e }) }),
    /* @__PURE__ */ r(s, { control: o.control, name: "city_created", render: ({
      field: e
    }) => /* @__PURE__ */ r(i, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...e }) })
  ] }) });
};
export {
  B as default
};
