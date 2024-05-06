import { j as r, b as p } from "./library-cedc3deb.js";
import { u, B as f, a as s, T as i, F as g } from "./Checkbox-99638ef1.js";
import { a as h } from "./DictionaryCell-728213ab.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWindowController-9a1df740.js";
import { u as y } from "./useWithTitle-0b179c56.js";
import { z as n } from "./index-d0beacff.js";
import { u as x } from "./useHttpMutation-768b8cd0.js";
import { u as _ } from "./configureQueriedCombo-f2ec2687.js";
import { u as b } from "./useNavigate-595aface.js";
import { P as F } from "./RootSection-2f7eda60.js";
import "./mui-bfddf798.js";
import "./faEye-ea161ce6.js";
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
  } = m(), l = b(), d = _(), c = x(`/api/program-docs/${t}/copy`, {
    onSuccess: ({
      data: {
        newDocId: e
      }
    }) => {
      d("/api/rest/program-docs"), l(`/program-docs/constructor/${e}`), a();
    }
  });
  y(`Копирование программы #${t}`);
  const o = u({
    mutation: c,
    schema: C
  });
  return /* @__PURE__ */ r(h, { fit: !0, footer: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(f, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => o.submit(), children: "Копировать" }, "next") }), children: /* @__PURE__ */ p(g, { css: {
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
