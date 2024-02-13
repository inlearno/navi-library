import { j as r, a as p } from "./library-0b835891.js";
import { l as u, j as g, a as h, B as f, F as s, T as i, P as y, e as b, z as n } from "./RootSection-1b189f39.js";
import "./react-54946355.js";
import { u as l } from "./useWindowController-c464120f.js";
import { u as x } from "./useWithTitle-a6efc34c.js";
import "./icons-6b7f2986.js";
import { u as _ } from "./useNavigate-518f8cc6.js";
import { P as F } from "./useDictionary-77ad08ad.js";
import "./mui-02912ce2.js";
const P = () => {
  const {
    params: t
  } = l();
  return t;
}, j = n.object({
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
  } = l(), d = _(), m = u(), c = g(`/api/program-docs/${t}/copy`, {
    onSuccess: ({
      data: {
        newDocId: e
      }
    }) => {
      m("/api/rest/program-docs"), d(`/program-docs/constructor/${e}`), a();
    }
  });
  x(`Копирование программы #${t}`);
  const o = h({
    mutation: c,
    schema: j
  });
  return /* @__PURE__ */ r(F, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(f, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => o.submit(), children: "Копировать" }, "next") }), children: /* @__PURE__ */ p(b, { css: {
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
