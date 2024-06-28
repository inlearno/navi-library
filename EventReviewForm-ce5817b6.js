import { j as r, Q as v, b as d } from "./library-c328e858.js";
import { u as g, B as x } from "./faEye-c7d9d039.js";
import { b as y, a as w } from "./DictionaryCell-9be52052.js";
import "./icons-ad9f8a73.js";
import { r as D } from "./react-6f5a8403.js";
import { u as F, b as n, Q as T, L as p, T as f, c as _, k as Q, d as R, F as C } from "./Boolean-90bc6f90.js";
import { u as E } from "./useResetHttpQueryCache-6e8893c0.js";
import { z as t } from "./index-d0beacff.js";
import { u } from "./useWindowController-f5858084.js";
import { S, e as j } from "./StarRating-9a1e6929.js";
import "./mui-2ff488a7.js";
const B = t.object({
  id: t.coerce.number().optional(),
  event_id: t.coerce.number({
    required_error: '"Это обязательное поле"'
  }),
  event_name: t.string().optional(),
  fio: t.string({
    required_error: '"Это обязательное поле"'
  }),
  email: t.string().email("Введите валидный e-mail"),
  rate: t.coerce.number().nullable(),
  date: t.string({
    required_error: "Это обязательное поле"
  }),
  status: t.enum(["draft", "published", "deleted"], {
    invalid_type_error: ""
  }),
  text: t.string().min(2, "Это обязательное поле"),
  type: t.string().optional()
}), W = () => {
  var m;
  const {
    params: {
      id: e
    }
  } = u(), {
    data: s
  } = y(`/api/rest/review/${e}`, {
    enabled: !!e
  }), a = (m = s == null ? void 0 : s.data) == null ? void 0 : m[0];
  return s ? /* @__PURE__ */ r(h, { initialValues: a }) : e ? null : /* @__PURE__ */ r(h, {});
}, h = ({
  initialValues: e
}) => {
  const {
    setTitle: s,
    close: a
  } = u(), m = E();
  D.useEffect(() => {
    e != null && e.id && s(`Редактирование записи №${e == null ? void 0 : e.id}`);
  }, [e == null ? void 0 : e.id]);
  const l = g({
    method: e != null && e.id ? "PUT" : "POST",
    url: `/api/rest/review${e != null && e.id ? `/${e.id}` : ""}`,
    syncQueryCache: !0,
    onSuccess: () => {
      v.success(e ? "Отзыв успешно изменен" : "Отзыв успешно создан", {
        position: "top-center"
      }), m("/api/rest/review"), a();
    }
  }), c = F({
    defaultValues: e,
    mutation: l,
    schema: B
  });
  return /* @__PURE__ */ r(w, { fit: !0, footer: /* @__PURE__ */ r(x, { variant: "contained", color: "success", css: {
    marginLeft: "auto"
  }, disabled: l.isPending, onClick: () => c.submit(), children: e != null && e.id ? "Обновить" : "Создать" }), children: /* @__PURE__ */ d(C, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: c, children: [
    /* @__PURE__ */ d("div", { css: {
      display: "flex",
      gap: "0.5rem",
      verticalAlign: "bottom"
    }, children: [
      /* @__PURE__ */ r(n, { control: c.control, name: "event_id", render: ({
        field: o
      }) => /* @__PURE__ */ r(T, { label: "Программа", placeholder: "Введите id или название программы...", url: "/api/rest/events", params: {
        page: 1,
        length: 10
      }, displayField: "name", css: {
        flex: "1 1 0%"
      }, ...o }) }),
      /* @__PURE__ */ r(n, { control: c.control, name: "rate", render: ({
        field: o
      }) => /* @__PURE__ */ r(p, { label: "Рейтинг", children: /* @__PURE__ */ r(S, { ...o }) }) })
    ] }),
    /* @__PURE__ */ d("div", { css: {
      display: "flex",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ d(p, { label: "Клиент", css: {
        display: "flex",
        width: "50%",
        flexDirection: "column",
        gap: "0.5rem"
      }, children: [
        /* @__PURE__ */ r(n, { control: c.control, name: "email", render: ({
          field: o
        }) => /* @__PURE__ */ r(f, { useTypograf: !1, placeholder: "Email...", ...o }) }),
        /* @__PURE__ */ r(n, { control: c.control, name: "fio", render: ({
          field: o
        }) => /* @__PURE__ */ r(f, { useTypograf: !0, placeholder: "ФИО...", ...o }) })
      ] }),
      /* @__PURE__ */ d(p, { label: "Параметры", css: {
        display: "flex",
        width: "50%",
        flexDirection: "column",
        gap: "0.5rem"
      }, children: [
        /* @__PURE__ */ r(n, { control: c.control, name: "date", render: ({
          field: o
        }) => /* @__PURE__ */ r(_, { placeholder: "Дата публикации...", defaultValue: Date.now(), serverDateFormat: "YYYY-MM-DD hh:mm:ss", ...o }) }),
        /* @__PURE__ */ r(n, { control: c.control, name: "status", render: ({
          field: o
        }) => /* @__PURE__ */ r(Q, { options: Object.entries(j).map(([b, i]) => ({
          id: b,
          name: i
        })), displayField: "name", placeholder: "Статус...", ...o }) })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { css: {
      width: "100%"
    }, children: /* @__PURE__ */ r(n, { control: c.control, name: "text", render: ({
      field: o
    }) => /* @__PURE__ */ r(R, { label: "Отзыв", placeholder: "Напишите отзыв...", ...o }) }) })
  ] }) });
};
export {
  W as default
};
