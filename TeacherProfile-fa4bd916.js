import { b as c, j as e, S as y } from "./library-cedc3deb.js";
import { R as v, r as T } from "./react-6f5a8403.js";
import { u as C, a as i, T as a, k as w, b as m, Q as B, D as s, l as g, F as D, B as k } from "./Checkbox-99638ef1.js";
import { b as E, a as F } from "./DictionaryCell-728213ab.js";
import "./icons-ad9f8a73.js";
import { z as t } from "./index-d0beacff.js";
import { D as d, g as l, i as j, k as u, C as M } from "./mui-bfddf798.js";
import { u as P } from "./useWindowController-9a1df740.js";
import "./faEye-ea161ce6.js";
const _ = t.object({
  id: t.string().uuid(),
  //   partner_id: z.coerce.number(), // "5",
  last_name: t.string().min(1, "Введите фамилию"),
  first_name: t.string().min(1, "Введите имя"),
  patro_name: t.string().nullable(),
  sex: t.union([t.literal("M"), t.literal("W")]),
  // birthday: z.coerce.date({
  //   invalid_type_error: "Введите дату в формате D.M.Y",
  //   required_error: "Введите дату рождения",
  // }), // "2018-07-18 00:00:00",
  birthday: t.string().min(1),
  birth_place: t.string().nullable(),
  citizenship: t.coerce.number().min(1, "Выберите страну гражданства"),
  // "185",
  //   snils: "85823266435",
  subject_interest_area_comment: t.string().nullable(),
  competencies: t.string().nullable(),
  free_hours: t.coerce.number().min(1, "Введите количество часов"),
  // "37.00",
  educational_opportunities: t.string().min(1, "Введите описание"),
  email: t.string().email("Неверный формат эл. почты").min(1, "Введите email"),
  phone: t.string().nullable(),
  // "+7 (111) 111-11-11",
  //   comment: "non at",
  position_id: t.coerce.number().min(1, "Выберите должность"),
  // "7",
  employment_id: t.coerce.number().min(1, "Выберите занятость"),
  is_part_time_position: t.boolean(),
  position: t.string().nullable(),
  employment_date: t.string().datetime(),
  // date_experience_start: z.coerce.date({
  //   invalid_type_error: "Введите дату в формате D.M.Y",
  //   required_error: "Введите дату начала стажа",
  // }),
  date_experience_start: t.string().datetime({
    message: "Введите дату в формате D.M.Y"
  }),
  date_start_work_fkis: t.string().datetime({
    message: "Введите дату в формате D.M.Y"
  }).nullable(),
  dismissal_date: t.string().datetime({
    message: "Введите дату в формате D.M.Y"
  }).nullable(),
  education: t.array(t.string()),
  eduction_direction_id: t.coerce.number().nullable(),
  // "4",
  qualification_id: t.coerce.number().min(1, "Выберите квалификацию"),
  degree: t.boolean().nullable(),
  expert_status_dict_id: t.coerce.number().min(1, "Выберите статус"),
  progress: t.string(),
  // "<p>rerum enim quis sint incidunt consequatur perspiciatis explicabo et</p>",
  //   date_created: "2024-04-16 18:26:36",
  //   date_changed: "2024-04-16 18:26:36",
  //   image_id: "63",
  //   is_deleted: false,
  //   addr_registration:
  //     "163163, Ульяновская область, город Волоколамск, проезд 1905 года, 71",
  //   date_registration: "2016-03-19 00:00:00",
  //   fact_addr: "789650, Новосибирская область, город Дорохово, пл. Гагарина, 58",
  //   addr_registration_region: null,
  //   addr_registration_area: null,
  //   addr_registration_zip: null,
  //   is_fact_same_address: true,
  //   fact_addr_region: null,
  //   fact_addr_area: null,
  //   fact_addr_zip: null,
  //   fact_addr_date_registration: null,
  //   professional_classification: "0046",
  //   specialization: "0005",
  //   user_id: "4",
  fio: t.string().readonly()
  //   interest_area: [],
  //   subject_interest_area: [],
  //   partner_name: "ОАО ТяжЭлектро",
  //   department_id: "4",
  //   subordination_id: "3",
  //   municipality_id: "3",
  //   image:
  //     "http://booking.navi.local/images/inventoryexpert/preview/aa1175b230b84ce227153a416d17c659_little.jpg",
  //   lastmodified: "2024-04-16 18:26:36",
  //   active_groups_count: 0,
});
t.object({
  data: t.array(_)
});
const S = ({
  defaultValues: p
}) => {
  const n = C({
    schema: _,
    defaultValues: p
  }), h = n.watch("is_part_time_position");
  return /* @__PURE__ */ c(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { css: {
      marginBottom: "1rem"
    }, children: "Личные данные" }),
    /* @__PURE__ */ c(l, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(l, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "last_name", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { css: {
        width: "100%"
      }, ...r, placeholder: "Введите фамилию", label: "Фамилия", required: !0 }) }) }),
      /* @__PURE__ */ e(l, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "first_name", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { css: {
        width: "100%"
      }, ...r, placeholder: "Введите имя", label: "Имя", required: !0 }) }) }),
      /* @__PURE__ */ e(l, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "patro_name", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { css: {
        width: "100%"
      }, ...r, placeholder: "Введите отчество", label: "Отчество" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "sex", render: ({
        field: r
      }) => /* @__PURE__ */ e(w, { ...r, displayField: "name", label: "Пол", options: [{
        id: "M",
        name: "Мужской"
      }, {
        id: "W",
        name: "Женский"
      }] }) }) }),
      /* @__PURE__ */ e(l, { item: !0, lg: 8, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "birthday", render: ({
        field: r
      }) => /* @__PURE__ */ e(m, { label: "Дата рождения", placeholder: "Выберите дату рождения", ...r }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "birth_place", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { ...r, placeholder: "Введите место рождения", label: "Место рождения" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "citizenship", render: ({
        field: r
      }) => /* @__PURE__ */ e(B, { ...r, url: "api/rest/countries", displayField: "full_name" }) }) })
    ] }),
    /* @__PURE__ */ e(d, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Контакты" }),
    /* @__PURE__ */ c(l, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(l, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "email", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { ...r, placeholder: "Введите адрес эл. почты", label: "Адрес электронной почты" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "phone", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { ...r, placeholder: "Введите телефон", label: "Телефон" }) }) })
    ] }),
    /* @__PURE__ */ e(d, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Трудовая деятельность" }),
    /* @__PURE__ */ c(l, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "position_id", render: ({
        field: r
      }) => /* @__PURE__ */ e(s, { ...r, label: "Должность", placeholder: "Выберите должность", dictionary: "inventoryPositions" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "employment_id", render: ({
        field: r
      }) => /* @__PURE__ */ e(s, { ...r, label: "Занятость в организации", placeholder: "Выберите занятость", dictionary: "inventoryEmployment" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(i, { control: n.control, name: "is_part_time_position", render: ({
        field: r
      }) => /* @__PURE__ */ e(g, { ...r, label: "Внештатная должность" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, lg: 6, children: h ? /* @__PURE__ */ e(i, { control: n.control, name: "position", render: ({
        field: r
      }) => /* @__PURE__ */ e(a, { ...r, placeholder: "Введите должность", label: "Должность по основному месту работу" }) }) : null }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(i, { control: n.control, name: "employment_date", render: ({
        field: r
      }) => /* @__PURE__ */ e(m, { label: "Дата начала стажа", placeholder: "Выберите дату", ...r }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(i, { control: n.control, name: "date_experience_start", render: ({
        field: r
      }) => /* @__PURE__ */ e(m, { label: "Дата приема на работу", placeholder: "Выберите дату", ...r }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(i, { control: n.control, name: "date_start_work_fkis", render: ({
        field: r
      }) => /* @__PURE__ */ e(m, { label: "Дата начала работы в сфере ФКиС", placeholder: "Выберите дату", ...r }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ e(i, { control: n.control, name: "dismissal_date", render: ({
        field: r
      }) => /* @__PURE__ */ e(m, { label: "Дата увольнения", placeholder: "Выберите дату", ...r }) }) })
    ] }),
    /* @__PURE__ */ e(d, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Образование" }),
    /* @__PURE__ */ c(l, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "education", render: ({
        field: r
      }) => /* @__PURE__ */ e(s, { ...r, value: r.value, multiple: !0, label: "Образование", placeholder: "Выберите образование", dictionary: "inventoryExpertEducation" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "eduction_direction_id", render: ({
        field: r
      }) => /* @__PURE__ */ e(s, { ...r, label: "Направление образования", placeholder: "Выберите направление", dictionary: "inventoryEducationDirections" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "qualification_id", render: ({
        field: r
      }) => /* @__PURE__ */ e(s, { ...r, label: "Квалификация", placeholder: "Выберите квалификацию", dictionary: "inventoryExpertQualifications" }) }) }),
      /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "degree", render: ({
        field: r
      }) => /* @__PURE__ */ e(g, { ...r, label: "Наличие ученой степени" }) }) })
    ] }),
    /* @__PURE__ */ e(d, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Доступность" }),
    /* @__PURE__ */ e(l, { container: !0, spacing: 2, children: /* @__PURE__ */ e(l, { item: !0, xs: 12, children: /* @__PURE__ */ e(i, { control: n.control, name: "expert_status_dict_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(s, { ...r, label: "Статус", placeholder: "Выберите статус", dictionary: "inventoryExpertStatus" }) }) }) })
  ] });
}, H = () => {
  var b;
  const {
    setTitle: p
  } = P(), [n, h] = v.useState(0), r = (q, x) => {
    h(x);
  }, {
    data: o,
    isLoading: f
  } = E("/api/teacher/profile");
  return T.useEffect(() => {
    o != null && o.data.fio && p(o.data.fio);
  }, [(b = o == null ? void 0 : o.data) == null ? void 0 : b.fio]), /* @__PURE__ */ c(F, { fit: !0, footer: /* @__PURE__ */ e(
    k,
    {
      type: "submit",
      css: {
        marginLeft: "auto"
      },
      variant: "contained",
      color: "success",
      children: "Сохранить"
    }
  ), children: [
    /* @__PURE__ */ c(j, { value: n, onChange: r, "aria-label": "teacher profile tabs", css: {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
    }, textColor: "inherit", children: [
      /* @__PURE__ */ e(u, { label: "Основные", style: {
        color: "#fff"
      } }),
      /* @__PURE__ */ e(u, { label: "Дополнительно", style: {
        color: "#fff"
      } }),
      /* @__PURE__ */ e(u, { label: "Фото", style: {
        color: "#fff"
      } }),
      /* @__PURE__ */ e(u, { label: "Достижения", style: {
        color: "#fff"
      } }),
      /* @__PURE__ */ e(u, { label: "Календарь", style: {
        color: "#fff"
      } })
    ] }),
    f ? /* @__PURE__ */ e(y, { spinning: !0 }) : /* @__PURE__ */ e(M, { css: {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem"
    }, children: n === 0 ? /* @__PURE__ */ e(S, { defaultValues: (o == null ? void 0 : o.data) || {} }) : null })
  ] });
};
export {
  H as default
};
