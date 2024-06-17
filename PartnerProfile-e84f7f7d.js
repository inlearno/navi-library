import { Q as H, b as u, j as e, F as c } from "./library-5ad54f6e.js";
import { r as y } from "./react-bd6781bd.js";
import { u as k, B as C } from "./faEye-6d8181c7.js";
import { a as v, P as q, b as Q } from "./DictionaryCell-a7ae3894.js";
import { F as M } from "./icons-56df5d3c.js";
import { C as L } from "./Tabs-a02afd5f.js";
import { u as R } from "./useWindowController-8d24671d.js";
import { a as t, Q as m, T as o, P as B, h as _, N as b, b as O, c as V, u as A } from "./Phone-0baa4629.js";
import { u as F } from "./useResetHttpQueryCache-a6006409.js";
import { f as N, a as T } from "./faTrash-33be5127.js";
import { u as S, T as P, c as I } from "./index-c2c3b33f.js";
import { M as D } from "./ModalWindow-76448e19.js";
import { C as x } from "./ConstructorForm-0f759559.js";
import "./mui-51f6b52b.js";
import "./faChevronDown-dd97b173.js";
import "./table-bbae3ab0.js";
import "./useUser-8c01750e.js";
const U = (r) => {
  const l = F();
  return k("PUT", `/api/rest/partners/${r}`, {
    onError: (n) => {
      var d, p;
      n.response && n.response.status === 400 || H.error(/* @__PURE__ */ u("div", { children: [
        /* @__PURE__ */ e("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ e("div", { tw: "p-1 text-xs", children: ((p = (d = n.response) == null ? void 0 : d.data) == null ? void 0 : p.message) || n.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: () => {
      H.success("Успешно сохранено", {
        position: "top-center"
      }), l("/api/partner/profile/get");
    }
  });
}, K = ({
  form: r
}) => /* @__PURE__ */ e(c, { children: r && /* @__PURE__ */ u(c, { children: [
  /* @__PURE__ */ e(t, { control: r.control, name: "municipality_id", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getMunicipality/?all=1&format=mini&start=0&page=1", displayField: "name", label: "Муниципалитет *:", placeholder: "Выберете муниципалитет" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "municipality_region_id", render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "api/rest/municipalityRegions", displayField: "name", label: "Район:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "public_name", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите публичное название", label: "Публичное название *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "name", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите полное наименование", label: "Полное наименование *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "short_name", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите краткое наименование", label: "Краткое наименование *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "department_id", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getDepartments", displayField: "name", placeholder: "Выберете ведомство", label: "Ведомство *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "subordination_id", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getPartnerSubordination", displayField: "name", placeholder: "Выберете уровень подчинения", label: "Уровень подчинения *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "legal_form", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/rest/legalForms", displayField: "name", placeholder: "Выберете организационно-правовая форму", label: "Организационно-правовая форма *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "type", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getDictionary/partnerType", displayField: "name", placeholder: "Выберете тип организации", label: "Тип организации *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "org_type", render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getDictionary/partnerOrgType", displayField: "name", placeholder: "Выберете вид организации", label: "Вид организации:" }) })
] }) }), j = ({
  onSubmit: r,
  partnerId: l
}) => /* @__PURE__ */ e("div", { css: {
  height: "100%",
  width: "100%",
  padding: "0.5rem"
}, children: /* @__PURE__ */ e(x, { url: "/api/rest/departments", initialValues: {
  partner_id: l
}, onSave: r, children: (a) => [/* @__PURE__ */ e(t, { control: a.control, name: "department_subtype_id", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(m, { ...n, url: "api/getDictionary/departmentSubtype", displayField: "name", label: "Подтип структурного подразделения:", placeholder: "Выберете подтип структурного подразделения" }) }, "department_subtype_id"), /* @__PURE__ */ e(t, { control: a.control, name: "title", render: ({
  field: n
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...n, placeholder: "Введите название структурного подразделения:", label: "Название структурного подразделения:" }) }, "title"), /* @__PURE__ */ e(t, { control: a.control, name: "surname", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...n, placeholder: "Введите фамилию руководителя", label: "Фамилия руководителя *:" }) }, "surname"), /* @__PURE__ */ e(t, { control: a.control, name: "name", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...n, placeholder: "Введите имя руководителя", label: "Имя руководителя *:" }) }, "name"), /* @__PURE__ */ e(t, { control: a.control, name: "middle_name", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...n, placeholder: "Введите отчество руководителя", label: "Отчество руководителя *:" }) }, "middle_name"), /* @__PURE__ */ e(t, { control: a.control, name: "position", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...n, placeholder: "Введите должность руководителя", label: "Должность руководителя *:" }) }, "position"), /* @__PURE__ */ e(t, { control: a.control, name: "address", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...n, placeholder: "Введите адрес структурного подразделения", label: "Адрес структурного подразделения *:" }) }, "address")] }) }), W = ({
  partnerId: r
}) => {
  const l = I(), [a, n] = y.useState(!1), d = k("PUT", "/api/rest/departments/:id", {
    onSuccess: () => {
      h();
    }
  }), p = [l.display("id", "ID"), l.dictionary("department_subtype_id", "departmentSubtype", "Тип"), l.display("address", "Адрес структурного подразделения"), l.boolean("is_deleted", "Удалена?"), l.actions([{
    key: "delete",
    icon: N.faTrash,
    tooltip: "Удалить расписание",
    onClick: async (s) => {
      d.mutate({
        id: s.id,
        is_deleted: !0
      });
    }
  }])], w = S("/api/rest/departments", p, {
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !0,
    defaultFilters: [{
      property: "partner_id",
      value: r
    }]
  }), f = F(), h = () => f("/api/rest/departments"), g = () => n(!1), i = () => {
    h(), n(!1);
  };
  return /* @__PURE__ */ u(v, { fit: !0, children: [
    /* @__PURE__ */ u(C, { variant: "outlined", onClick: () => n((s) => !s), color: "success", css: {
      marginBottom: "0.75rem"
    }, children: [
      /* @__PURE__ */ e(M, { icon: T.faPlus }),
      "Добавить"
    ] }),
    /* @__PURE__ */ e(P, { border: !0, table: w }),
    a && /* @__PURE__ */ e(D, { open: !0, title: "Новое подразделение", onClose: g, height: 600, children: /* @__PURE__ */ e(j, { onSubmit: i, partnerId: r }) })
  ] });
}, G = ({
  form: r,
  partnerId: l
}) => {
  const a = [{
    id: "main",
    title: "Основное",
    component: () => /* @__PURE__ */ e(c, { children: r && /* @__PURE__ */ u(c, { children: [
      /* @__PURE__ */ e(t, { control: r.control, name: "phone", rules: {
        required: "Заполните обязательное поле"
      }, render: ({
        field: n
      }) => /* @__PURE__ */ e(B, { css: {
        width: "100%"
      }, ...n, placeholder: "Введите телефон", label: "Телефон *:" }) }),
      /* @__PURE__ */ e(t, { control: r.control, name: "phone_comment", render: ({
        field: n
      }) => /* @__PURE__ */ e(o, { css: {
        width: "100%"
      }, ...n, placeholder: "Введите примечание к телефонам", label: "Примечание к телефонам:" }) }),
      /* @__PURE__ */ e(t, { control: r.control, name: "notify_mobile", render: ({
        field: n
      }) => /* @__PURE__ */ e(B, { css: {
        width: "100%"
      }, ...n, placeholder: "Введите номер для СМС-уведомлений", label: "Номер для СМС-уведомлений:" }) }),
      /* @__PURE__ */ e(t, { control: r.control, name: "email", rules: {
        required: "Заполните обязательное поле"
      }, render: ({
        field: n
      }) => /* @__PURE__ */ e(o, { css: {
        width: "100%"
      }, ...n, placeholder: "Введиье E-mail", label: "E-mail *:" }) }),
      /* @__PURE__ */ e(t, { control: r.control, name: "site", rules: {
        required: "Заполните обязательное поле"
      }, render: ({
        field: n
      }) => /* @__PURE__ */ e(o, { css: {
        width: "100%"
      }, ...n, placeholder: "Введите сайт", label: "Сайт *:" }) }),
      /* @__PURE__ */ e(t, { control: r.control, name: "is_regulation_published", render: ({
        field: n
      }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...n, label: "На сайте опубликована информация по нормативно закрепленному перечню сведений о деятельности организации:" }) }) }),
      /* @__PURE__ */ e(t, { control: r.control, name: "url_to_rules", render: ({
        field: n
      }) => /* @__PURE__ */ e(o, { css: {
        width: "100%"
      }, ...n, placeholder: "Ссылка", label: "Ссылка на страницу официального сайта с правилами приёма в организацию:" }) })
    ] }) })
  }, {
    id: "structural_units",
    title: "Cтруктурные подразделения",
    component: () => /* @__PURE__ */ e(W, { partnerId: l })
  }];
  return /* @__PURE__ */ e(L, { tabs: a, variant: "scrollable", scrollButtons: "auto", tabComponentRenderer: (n) => {
    var d;
    return /* @__PURE__ */ e("div", { css: {
      display: "flex",
      height: "100%",
      width: "100%",
      flexDirection: "column",
      gap: "1.25rem",
      padding: "1.25rem"
    }, children: ((d = a[n]) == null ? void 0 : d.component()) ?? null });
  } });
}, Y = ({
  form: r
}) => /* @__PURE__ */ e(c, { children: r && /* @__PURE__ */ u(c, { children: [
  /* @__PURE__ */ e(t, { control: r.control, name: "legal_address", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите юридический адрес", label: "Юридический адрес *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "actual_address", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите фактический адрес", label: "Фактический адрес *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "INN", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите ИНН", label: "ИНН *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "KPP", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите КПП", label: "КПП *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "OGRN", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите ОГРН (ОГРНИП)", label: "ОГРН (ОГРНИП) *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "license", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите номер лицензии", label: "Номер лицензии:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "founder", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите учредитель", label: "Учредитель:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "responsible_last_name", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите фамилию руководителя", label: "Фамилия руководителя *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "responsible_first_name", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите имя руководителя", label: "Имя руководителя *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "responsible_patro_name", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите отчество руководителя", label: "Отчество руководителя:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "responsible_post", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getDictionary/responsiblePosts", displayField: "name", placeholder: "Выберете должность руководителя", label: "Должность руководителя *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "OKPO", render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите ОКПО", label: "ОКПО:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "OKVED", render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите ОКВЭД", label: "ОКВЭД:" }) })
] }) }), $ = ({
  form: r
}) => /* @__PURE__ */ e(c, { children: r && /* @__PURE__ */ u(c, { children: [
  /* @__PURE__ */ e(t, { control: r.control, name: "calculated_account", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите расчетный счет", label: "Расчетный счет *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "correspondent_account", render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите корреспондентский счет", label: "Корреспондентский счет:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "bank_name", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите наименование банка", label: "Наименование банка *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "BIK", render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите БИК", label: "БИК:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "bank_address", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите адрес банка", label: "Адрес банка:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "okato", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите ОКАТО", label: "ОКАТО:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "oktmo", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите ОКТМО", label: "ОКТМО:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "okopf", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите ОКОПФ", label: "ОКОПФ:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "date_foundation", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите дату основания", label: "Дата основания:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "has_vat", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, value: r.getValues().has_vat === "Y", onChange: (a) => {
    const n = a == null ? void 0 : a.target.checked;
    r.setValue("has_vat", n ? "Y" : "N");
  }, label: "Общая система налогообложения, с НДС:" }) }) })
] }) }), z = ({
  form: r
}) => /* @__PURE__ */ e(c, { children: r && /* @__PURE__ */ u(c, { children: [
  /* @__PURE__ */ e(t, { control: r.control, name: "accounting_type", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getDictionary/accountingTypes", displayField: "name", placeholder: "Выберете тип бухгалтерии:", label: "Тип бухгалтерии *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "financing_normativ", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, label: "Переведена на нормативно-подушевое финансирование:" }) }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "financing_result", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, label: "Переведена на оплату, ориентированную на результат:" }) }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "elibrary", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, label: "Наличие электронной библиотеки:" }) }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "filial", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, label: "Наличие филиалов (структурных подразделений):" }) }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "is_small_business_entity", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, label: "Субъект малого предпринимательства:" }) }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "state_count", rules: {
    required: "Заполните обязательное поле"
  }, render: ({
    field: l
  }) => /* @__PURE__ */ e(b, { tw: "w-full", ...l, placeholder: "Введите штатные единицы организации (педагогический/тренерский состав)", label: "Штатные единицы организации (педагогический/тренерский состав) *:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "congratulatory_certificate", render: ({
    field: l
  }) => /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e(_, { ...l, label: "Формировать поздравительные сертификаты:" }) }) })
] }) }), J = ({
  form: r
}) => /* @__PURE__ */ e(c, { children: r && /* @__PURE__ */ u(c, { children: [
  /* @__PURE__ */ e(t, { control: r.control, name: "license", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите номер лицензии", label: "Номер лицензии:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "serial", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите серию лицензии", label: "Серия лицензии:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "date_license", render: ({
    field: l
  }) => /* @__PURE__ */ e(O, { tw: "w-full", ...l, placeholder: "Введите дату лицензии", label: "Дата лицензии:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "accreditation_license", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите номер аккредитации", label: "Номер аккредитации:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "accreditation_serial", render: ({
    field: l
  }) => /* @__PURE__ */ e(o, { tw: "w-full", ...l, placeholder: "Введите серию аккредитации", label: "Серия аккредитации:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "accreditation_date", render: ({
    field: l
  }) => /* @__PURE__ */ e(O, { tw: "w-full", ...l, placeholder: "Введите дату аккредитации", label: "Дата аккредитации:" }) }),
  /* @__PURE__ */ e(t, { control: r.control, name: "accreditation_category", render: ({
    field: l
  }) => /* @__PURE__ */ e(m, { ...l, url: "/api/getDictionary/accreditationCategories", displayField: "name", label: "Категория полученная при аккредитации:" }) })
] }) }), X = ({
  onSubmit: r
}) => /* @__PURE__ */ e("div", { css: {
  height: "100%",
  width: "100%",
  padding: "0.5rem"
}, children: /* @__PURE__ */ e(x, { url: "/api/partner/account/create", onSave: r, children: (l) => [/* @__PURE__ */ e(t, { control: l.control, name: "name", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: a
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...a, placeholder: "Введите ФИО", label: "ФИО *:" }) }, "name"), /* @__PURE__ */ e(t, { control: l.control, name: "email", rules: {
  required: "Заполните обязательное поле",
  pattern: {
    value: /^[\w-]+\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: "Введите валидный Email"
  }
}, render: ({
  field: a
}) => /* @__PURE__ */ e(o, { css: {
  width: "100%"
}, ...a, placeholder: "Введите email", label: "E-mail; *:" }) }, "email")] }) }), Z = () => {
  const r = I(), [l, a] = y.useState(!1), n = [r.display("id", "ID"), r.display("email", "Электронная почта"), r.display("name", "Имя")], d = S("/api/partner/accounts/get", n, {
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !0
  }), p = F(), w = () => p("/api/partner/accounts/get"), f = () => a(!1), h = () => {
    w(), a(!1);
  };
  return /* @__PURE__ */ u(v, { fit: !0, footer: /* @__PURE__ */ e(q, { table: d }), children: [
    /* @__PURE__ */ u(C, { variant: "outlined", onClick: () => a((g) => !g), color: "success", css: {
      marginBottom: "0.75rem"
    }, children: [
      /* @__PURE__ */ e(M, { icon: T.faPlus }),
      "Добавить аккаунт"
    ] }),
    /* @__PURE__ */ e(P, { border: !0, table: d }),
    l && /* @__PURE__ */ e(D, { open: !0, title: "Новый аккаунт для партнера", onClose: f, height: 320, children: /* @__PURE__ */ e(X, { onSubmit: h }) })
  ] });
}, ee = ({
  onSubmit: r,
  partnerId: l
}) => /* @__PURE__ */ e("div", { css: {
  height: "100%",
  width: "100%",
  padding: "0.5rem"
}, children: /* @__PURE__ */ e(x, { url: "/api/rest/partner-staff", initialValues: {
  partner_id: l
}, onSave: r, children: (a) => [/* @__PURE__ */ e(t, { control: a.control, name: "post", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(m, { ...n, url: "api/getDictionary/inventoryPositions", displayField: "name", label: "Наименование штатной единицы: *:", placeholder: "Выберете штатную еденицу" }) }, "post"), /* @__PURE__ */ e(t, { control: a.control, name: "employees_count", rules: {
  required: "Заполните обязательное поле"
}, render: ({
  field: n
}) => /* @__PURE__ */ e(b, { css: {
  width: "100%"
}, ...n, placeholder: "Введите число едениц", label: "Число единиц в организации:" }) }, "employees_count"), /* @__PURE__ */ e(t, { control: a.control, name: "comment", render: ({
  field: n
}) => /* @__PURE__ */ e(V, { css: {
  width: "100%"
}, ...n, placeholder: "Введите коментарий", label: "Коментарий:" }) }, "comment")] }) }), le = ({
  partnerId: r
}) => {
  const l = I(), [a, n] = y.useState(!1), d = k("DELETE", "/api/rest/partner-staff/:id", {
    onSuccess: () => {
      h();
    }
  }), p = [l.display("id", "ID"), l.dictionary("post", "inventoryPositions", "Наименование штатной единицы"), l.display("employees_count", "Количество"), l.actions([{
    key: "delete",
    icon: N.faTrash,
    tooltip: "Удалить расписание",
    onClick: async (s) => {
      d.mutate({
        id: s.id
      });
    }
  }])], w = S("/api/rest/partner-staff", p, {
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !0,
    defaultFilters: [{
      property: "partner_id",
      value: r
    }]
  }), f = F(), h = () => f("/api/rest/partner-staff"), g = () => n(!1), i = () => {
    h(), n(!1);
  };
  return /* @__PURE__ */ u(v, { fit: !0, footer: /* @__PURE__ */ e(q, { table: w }), children: [
    /* @__PURE__ */ u(C, { variant: "outlined", onClick: () => n((s) => !s), color: "success", css: {
      marginBottom: "0.75rem"
    }, children: [
      /* @__PURE__ */ e(M, { icon: T.faPlus }),
      "Добавить"
    ] }),
    /* @__PURE__ */ e(P, { border: !0, table: w }),
    a && /* @__PURE__ */ e(D, { open: !0, title: "Новый штатная еденица", onClose: g, height: 500, children: /* @__PURE__ */ e(ee, { onSubmit: i, partnerId: r }) })
  ] });
}, re = ({
  partnerId: r
}) => {
  const l = I(), a = [l.display("id", "ID"), l.display("email", "Электронная почта"), l.display("name", "Имя")], n = S("/api/partner/teachers/get", a, {
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !0,
    defaultFilters: [{
      property: "partner_id",
      value: r
    }]
  });
  return /* @__PURE__ */ e(v, { fit: !0, footer: /* @__PURE__ */ e(q, { table: n }), children: /* @__PURE__ */ e(P, { border: !0, table: n }) });
}, ye = () => {
  var w, f, h, g;
  const r = Q("/api/partner/profile/get"), l = U((w = r == null ? void 0 : r.data) == null ? void 0 : w.data.id), a = A({
    mutation: l,
    defaultValues: (f = r == null ? void 0 : r.data) == null ? void 0 : f.data
  });
  y.useEffect(() => {
    var i, s;
    (i = r == null ? void 0 : r.data) != null && i.data && a.reset((s = r == null ? void 0 : r.data) == null ? void 0 : s.data);
  }, [(h = r == null ? void 0 : r.data) == null ? void 0 : h.data]);
  const n = [{
    id: "main",
    title: "Основное",
    form: (i) => /* @__PURE__ */ e(K, { form: i })
  }, {
    id: "contacts",
    title: "Контакты",
    form: (i) => {
      var s;
      return /* @__PURE__ */ e(G, { form: i, partnerId: (s = r == null ? void 0 : r.data) == null ? void 0 : s.data.id });
    }
  }, {
    id: "legal",
    title: "Юридическая информация",
    form: (i) => /* @__PURE__ */ e(Y, { form: i })
  }, {
    id: "requisites",
    title: "Реквизиты",
    form: (i) => /* @__PURE__ */ e($, { form: i })
  }, {
    id: "additionally",
    title: "Дополнительно",
    form: (i) => /* @__PURE__ */ e(z, { form: i })
  }, {
    id: "accounts",
    title: "Акаунты",
    form: () => /* @__PURE__ */ e(Z, {})
  }, {
    id: "state",
    title: "Штат",
    form: () => {
      var i;
      return /* @__PURE__ */ e(le, { partnerId: (i = r == null ? void 0 : r.data) == null ? void 0 : i.data.id });
    }
  }, {
    id: "teachers",
    title: "Педагоги",
    form: () => {
      var i;
      return /* @__PURE__ */ e(re, { partnerId: (i = r == null ? void 0 : r.data) == null ? void 0 : i.data.id });
    }
  }, {
    id: "license",
    title: "Лицензия",
    form: (i) => /* @__PURE__ */ e(J, { form: i })
  }], {
    setTitle: d
  } = R(), p = (g = r == null ? void 0 : r.data) == null ? void 0 : g.data.name;
  return y.useEffect(() => {
    p && d(p);
  }, [p]), /* @__PURE__ */ e(v, { fit: !0, footer: /* @__PURE__ */ e(C, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", disabled: !1, onClick: a.submit, children: "Сохранить" }), children: /* @__PURE__ */ e(L, { tabs: n, variant: "scrollable", scrollButtons: "auto", orientation: "vertical", tabComponentRenderer: (i) => {
    var s, E;
    return /* @__PURE__ */ e("div", { css: [{
      display: "flex",
      height: "100%",
      width: "100%",
      flexDirection: "column",
      gap: "1.25rem"
    }, ((s = n[i]) == null ? void 0 : s.id) === "contacts" ? "" : {
      padding: "1.25rem"
    }], children: ((E = n[i]) == null ? void 0 : E.form(a)) ?? null });
  } }) });
};
export {
  ye as default
};
