import { u, a as f, Q as c, b as p, j as e } from "./library-75cbf1f9.js";
import { u as w, B as h } from "./faEye-a5fee5cd.js";
import { a as g } from "./DictionaryCell-7121ea48.js";
import "./icons-56df5d3c.js";
import "./react-bd6781bd.js";
import { z as i } from "./index-d0beacff.js";
import { u as x, C as r, F as b } from "./Phone-727e8dce.js";
import { u as S } from "./useUser-1af39c8e.js";
import { f as d } from "./mui-51f6b52b.js";
const _ = () => {
  const [m, l] = u(), {
    close: n
  } = f();
  return w("POST", "/api/user/profile/update", {
    onError: (t) => {
      var o, s;
      t.response && t.response.status === 400 || c.error(/* @__PURE__ */ p("div", { children: [
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
        ...m,
        user: t
      }), c.success("Успешно сохранено", {
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
  }, n = _(), a = x({
    schema: P,
    defaultValues: l,
    mutation: n
  }), t = a.watch("new_password");
  return /* @__PURE__ */ e(g, { fit: !0, footer: /* @__PURE__ */ e(h, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", disabled: n == null ? void 0 : n.isPending, children: "Сохранить" }), children: /* @__PURE__ */ p(b, { form: a, css: {
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
