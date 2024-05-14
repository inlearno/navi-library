import { u, a as w, Q as m, b as p, j as e } from "./library-d2e029ff.js";
import { u as f, a as h, B as g, C as r, F as x } from "./Boolean-3ce95c5c.js";
import { a as b } from "./DictionaryCell-a98dea67.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { z as i } from "./index-d0beacff.js";
import { u as S } from "./useUser-2938a783.js";
import { f as d } from "./mui-2ff488a7.js";
import "./faEye-ea161ce6.js";
const _ = () => {
  const [c, l] = u(), {
    close: n
  } = w();
  return f("POST", "/api/user/profile/update", {
    onError: (t) => {
      var o, s;
      t.response && t.response.status === 400 || m.error(/* @__PURE__ */ p("div", { children: [
        /* @__PURE__ */ e("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ e("div", { tw: "p-1 text-xs", children: ((s = (o = t.response) == null ? void 0 : o.data) == null ? void 0 : s.message) || t.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: ({
      data: t
    }) => {
      l({
        ...c,
        user: t
      }), m.success("Успешно сохранено", {
        position: "top-center"
      }), n();
    }
  });
}, P = i.object({
  name: i.string().min(1, "Введите имя"),
  new_password: i.string().min(1, "Это поле обязательно для заполнения"),
  old_password: i.string().min(1, "Это поле обязательно для заполнения")
}), M = () => {
  const l = {
    name: S().name,
    new_password: "",
    old_password: ""
  }, n = _(), a = h({
    schema: P,
    defaultValues: l,
    mutation: n
  }), t = a.watch("new_password");
  return /* @__PURE__ */ e(b, { footer: /* @__PURE__ */ e(g, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", disabled: n == null ? void 0 : n.isPending, children: "Сохранить" }), children: /* @__PURE__ */ p(x, { form: a, css: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem"
  }, children: [
    /* @__PURE__ */ e(r, { control: a.control, name: "name", render: ({
      field: o,
      fieldState: {
        error: s
      }
    }) => /* @__PURE__ */ e(d, { label: "Имя", css: {
      width: "100%"
    }, size: "small", error: !!s, helperText: s == null ? void 0 : s.message, ...o }) }),
    /* @__PURE__ */ e(r, { control: a.control, name: "new_password", render: ({
      field: o,
      fieldState: {
        error: s
      }
    }) => /* @__PURE__ */ e(d, { label: "Новый пароль", placeholder: "Введите, если хотите изменить...", css: {
      width: "100%"
    }, size: "small", error: !!s, helperText: s == null ? void 0 : s.message, type: "password", ...o }) }),
    t ? /* @__PURE__ */ e(r, { control: a.control, name: "old_password", render: ({
      field: o,
      fieldState: {
        error: s
      }
    }) => /* @__PURE__ */ e(d, { label: "Текущий пароль", placeholder: "Введите текущий пароль...", css: {
      width: "100%"
    }, size: "small", error: !!s, type: "password", helperText: s == null ? void 0 : s.message, ...o }) }) : null
  ] }) });
};
export {
  M as default
};
