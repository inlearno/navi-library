import { b as d, j as e, Q as w, S as E } from "./library-98acb620.js";
import { r as f, R as h } from "./react-6f5a8403.js";
import { b as l, T as u, l as k, c as g, Q as B, P as F, D as p, m as P, F as C, d as _, N as M, u as S, B as j, a as Q } from "./Phone-c63664b7.js";
import { b as R, a as z } from "./DictionaryCell-9ce397ef.js";
import "./icons-ad9f8a73.js";
import { g as H, i as W, D as x, k as i } from "./mui-a6e6a5b1.js";
import { u as A } from "./useWindowController-ee3f4372.js";
import { u as N } from "./useResetHttpQueryCache-cf56f8d1.js";
import { z as r } from "./index-d0beacff.js";
import "./faEye-ea161ce6.js";
const G = ({
  className: n,
  orientation: o = "horizontal",
  textColor: t,
  tabComponentRenderer: a,
  tabs: s
}) => {
  const [c, m] = f.useState(0);
  return /* @__PURE__ */ d("div", { className: n, css: [{
    display: "flex",
    flexDirection: "column"
  }, o === "vertical" && {
    height: "100%",
    flexDirection: "row"
  }], children: [
    /* @__PURE__ */ e(W, { value: c, onChange: (T, v) => {
      m(v);
    }, orientation: o, css: [{
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
    }, o === "vertical" && {
      height: "100%",
      flexDirection: "row"
    }], textColor: t || "inherit", children: s.map(({
      id: T,
      title: v
    }) => /* @__PURE__ */ e(H, { className: "tab", label: v, css: {
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))"
    } }, T)) }),
    a(c)
  ] });
}, L = ({
  form: n
}) => {
  const o = n.watch("is_part_time_position");
  return /* @__PURE__ */ d(C, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(x, { css: {
      marginBottom: "1rem"
    }, children: "Личные данные" }),
    /* @__PURE__ */ d(i, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(i, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "last_name", render: ({
        field: t
      }) => /* @__PURE__ */ e(u, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите фамилию", label: "Фамилия" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "first_name", render: ({
        field: t
      }) => /* @__PURE__ */ e(u, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите имя", label: "Имя" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "patro_name", render: ({
        field: t
      }) => /* @__PURE__ */ e(u, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите отчество", label: "Отчество" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "sex", render: ({
        field: t
      }) => /* @__PURE__ */ e(k, { ...t, displayField: "name", label: "Пол", options: [{
        id: "M",
        name: "Мужской"
      }, {
        id: "W",
        name: "Женский"
      }] }) }) }),
      /* @__PURE__ */ e(i, { item: !0, lg: 8, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "birthday", render: ({
        field: t
      }) => /* @__PURE__ */ e(g, { label: "Дата рождения", placeholder: "Выберите дату рождения", ...t }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "birth_place", render: ({
        field: t
      }) => /* @__PURE__ */ e(u, { ...t, placeholder: "Введите место рождения", label: "Место рождения" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "citizenship", render: ({
        field: t
      }) => /* @__PURE__ */ e(B, { ...t, url: "api/rest/countries", displayField: "full_name", placeholder: "Выберите страну гражданства" }) }) })
    ] }),
    /* @__PURE__ */ e(x, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Контакты" }),
    /* @__PURE__ */ d(i, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(i, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "email", render: ({
        field: t
      }) => /* @__PURE__ */ e(u, { ...t, placeholder: "Введите адрес эл. почты", label: "Адрес электронной почты" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "phone", render: ({
        field: t
      }) => /* @__PURE__ */ e(F, { ...t, showMask: !0, placeholder: "Введите телефон", label: "Телефон" }) }) })
    ] }),
    /* @__PURE__ */ e(x, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Трудовая деятельность" }),
    /* @__PURE__ */ d(i, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "position_id", render: ({
        field: t
      }) => /* @__PURE__ */ e(p, { ...t, label: "Должность", placeholder: "Выберите должность", dictionary: "inventoryPositions" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "employment_id", render: ({
        field: t
      }) => /* @__PURE__ */ e(p, { ...t, label: "Занятость в организации", placeholder: "Выберите занятость", dictionary: "inventoryEmployment" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(l, { control: n.control, name: "is_part_time_position", render: ({
        field: t
      }) => /* @__PURE__ */ e(P, { ...t, label: "Внештатная должность" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, lg: 6, children: o ? /* @__PURE__ */ e(l, { control: n.control, name: "position", render: ({
        field: t
      }) => /* @__PURE__ */ e(u, { ...t, placeholder: "Введите должность", label: "Должность по основному месту работу" }) }) : null }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(l, { control: n.control, name: "employment_date", render: ({
        field: t
      }) => /* @__PURE__ */ e(g, { label: "Дата начала стажа", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(l, { control: n.control, name: "date_experience_start", render: ({
        field: t
      }) => /* @__PURE__ */ e(g, { label: "Дата приема на работу", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(l, { control: n.control, name: "date_start_work_fkis", render: ({
        field: t
      }) => /* @__PURE__ */ e(g, { label: "Дата начала работы в сфере ФКиС", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(l, { control: n.control, name: "dismissal_date", render: ({
        field: t
      }) => /* @__PURE__ */ e(g, { label: "Дата увольнения", placeholder: "Выберите дату", ...t }) }) })
    ] }),
    /* @__PURE__ */ e(x, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Образование" }),
    /* @__PURE__ */ d(i, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "education", render: ({
        field: t
      }) => /* @__PURE__ */ e(p, { ...t, value: t.value, multiple: !0, label: "Образование", placeholder: "Выберите образование", dictionary: "inventoryExpertEducation" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "eduction_direction_id", render: ({
        field: t
      }) => /* @__PURE__ */ e(p, { ...t, label: "Направление образования", placeholder: "Выберите направление", dictionary: "inventoryEducationDirections" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "qualification_id", render: ({
        field: t
      }) => /* @__PURE__ */ e(p, { ...t, label: "Квалификация", placeholder: "Выберите квалификацию", dictionary: "inventoryExpertQualifications" }) }) }),
      /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "degree", render: ({
        field: t
      }) => /* @__PURE__ */ e(P, { ...t, label: "Наличие ученой степени" }) }) })
    ] }),
    /* @__PURE__ */ e(x, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Доступность" }),
    /* @__PURE__ */ e(i, { container: !0, spacing: 2, children: /* @__PURE__ */ e(i, { item: !0, xs: 12, children: /* @__PURE__ */ e(l, { control: n.control, name: "expert_status_dict_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(p, { ...t, label: "Статус", placeholder: "Выберите статус", dictionary: "inventoryExpertStatus" }) }) }) })
  ] });
}, U = ({
  form: n
}) => /* @__PURE__ */ d(C, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: n, children: [
  /* @__PURE__ */ e(l, { control: n.control, name: "subject_interest_area_comment", render: ({
    field: o
  }) => /* @__PURE__ */ e(_, { label: "Комментарий к предметной области интересов", placeholder: "Введите комментарий...", ...o }) }),
  /* @__PURE__ */ e(l, { control: n.control, name: "competencies", render: ({
    field: o
  }) => /* @__PURE__ */ e(_, { label: "Ключевые компетенции", placeholder: "Введите текст...", ...o }) }),
  /* @__PURE__ */ e(l, { control: n.control, name: "free_hours", render: ({
    field: o
  }) => /* @__PURE__ */ e(M, { label: "Количество часов в неделю", placeholder: "Введите количество часов", ...o }) }),
  /* @__PURE__ */ e(l, { control: n.control, name: "educational_opportunities", render: ({
    field: o
  }) => /* @__PURE__ */ e(_, { label: "Краткое описание возможностей", placeholder: "Введите описание...", ...o }) })
] }), V = ({
  form: n
}) => /* @__PURE__ */ e(C, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: n, children: /* @__PURE__ */ e(l, { control: n.control, name: "progress", render: ({
  field: o
}) => /* @__PURE__ */ e(_, { placeholder: "Опишите свои достижения...", ...o }) }) }), $ = (n) => {
  const o = N();
  return S("PUT", `/api/rest/inventoryExpert/${n}`, {
    onError: (a) => {
      var s, c;
      a.response && a.response.status === 400 || w.error(/* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ e("div", { tw: "p-1 text-xs", children: ((c = (s = a.response) == null ? void 0 : s.data) == null ? void 0 : c.message) || a.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: () => {
      w.success("Успешно сохранено", {
        position: "top-center"
      }), o("/api/teacher/profile");
    }
  });
}, y = h.createContext(null), J = ({
  children: n
}) => {
  const o = R("/api/teacher/profile"), [t, a] = h.useState(null), [s, c] = h.useState(null);
  return /* @__PURE__ */ e(y.Provider, { value: {
    formInstance: t,
    mutation: s,
    setFormInstance: a,
    setMutation: c,
    query: o
  }, children: n });
}, D = r.object({
  id: r.string().uuid(),
  last_name: r.string().min(1, " "),
  first_name: r.string().min(1, " "),
  patro_name: r.string().nullable(),
  sex: r.union([r.literal("M"), r.literal("W")]),
  birthday: r.string(),
  birth_place: r.string().nullable(),
  citizenship: r.coerce.number().min(1, " "),
  // "185",
  email: r.string().email("Неверный формат эл. почты").min(1, " "),
  phone: r.string().nullable(),
  // "+7 (111) 111-11-11",
  position_id: r.coerce.number().min(1, "Выберите должность"),
  // "7",
  employment_id: r.coerce.number().min(1, "Выберите занятость"),
  is_part_time_position: r.boolean(),
  position: r.string().min(4, " ").nullable(),
  employment_date: r.string(),
  date_experience_start: r.string(),
  date_start_work_fkis: r.string().nullable(),
  dismissal_date: r.string().nullable(),
  education: r.array(r.coerce.number()),
  eduction_direction_id: r.coerce.number().nullable(),
  // "4",
  qualification_id: r.coerce.number().min(1, " "),
  degree: r.boolean().nullable(),
  expert_status_dict_id: r.coerce.number().min(1, " "),
  /** Дополнительно */
  subject_interest_area_comment: r.string().nullable(),
  competencies: r.string().nullable(),
  free_hours: r.coerce.number().min(1, " "),
  // "37.00",
  educational_opportunities: r.string().min(1, " "),
  /* Достижения */
  progress: r.string().nullable(),
  fio: r.string().readonly()
});
r.object({
  data: r.array(D)
});
const I = [{
  id: "main",
  title: "Основные",
  form: (n) => /* @__PURE__ */ e(L, { form: n })
}, {
  id: "addit",
  title: "Дополнительно",
  form: (n) => /* @__PURE__ */ e(U, { form: n })
}, {
  id: "photo",
  title: "Фото",
  form: () => null
}, {
  id: "achievments",
  title: "Достижения",
  form: (n) => /* @__PURE__ */ e(V, { form: n })
}, {
  id: "cal",
  title: "Календарь",
  form: () => null
}], K = () => {
  var m;
  const {
    setTitle: n
  } = A(), {
    query: o,
    mutation: t,
    formInstance: a
  } = h.useContext(y), s = (b) => /* @__PURE__ */ e(O, { children: a ? I[b].form(a) : null }), c = (m = o == null ? void 0 : o.data) == null ? void 0 : m.data.fio;
  return f.useEffect(() => {
    c && n(c);
  }, [c]), /* @__PURE__ */ e(z, { fit: !0, footer: /* @__PURE__ */ e(j, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", disabled: t == null ? void 0 : t.isPending, onClick: a == null ? void 0 : a.submit, children: "Сохранить" }), children: /* @__PURE__ */ e(G, { tabs: I, tabComponentRenderer: s, css: {
    display: "flex",
    height: "100%"
  } }) });
}, O = ({
  children: n
}) => {
  var a;
  const {
    query: o
  } = h.useContext(y), t = (a = o == null ? void 0 : o.data) == null ? void 0 : a.data.id;
  return o != null && o.isLoading ? /* @__PURE__ */ e(E, { spinning: !0 }) : /* @__PURE__ */ e("div", { css: {
    width: "100%",
    flex: "1 1 0%",
    overflow: "auto",
    padding: "1.5rem"
  }, children: t ? /* @__PURE__ */ e(X, { id: t, children: n }) : null });
}, X = ({
  children: n,
  id: o
}) => {
  var b;
  const {
    query: t,
    setMutation: a,
    setFormInstance: s
  } = h.useContext(y), c = $(o);
  f.useEffect(() => {
    a(c);
  }, []), f.useEffect(() => {
    s(m);
  }, []);
  const m = Q({
    mutation: c,
    schema: D,
    defaultValues: (b = t == null ? void 0 : t.data) == null ? void 0 : b.data
  });
  return n;
}, ae = () => /* @__PURE__ */ e(J, { children: /* @__PURE__ */ e(K, {}) });
export {
  ae as default
};
