import { b as be, j as S, Q as $n, I as ki, F as Ii, S as Ni } from "./library-36d20a53.js";
import { r as H, R as g, g as ie, d as pe, b as Ba } from "./react-6f5a8403.js";
import { b as Z, T as Ke, l as Li, c as st, Q as Fi, P as zi, D as Ge, m as Sn, F as Wr, d as Ft, N as ji, u as Hi, n as Wi, B as Bi, a as Ui } from "./Phone-1e1a6f2a.js";
import { b as Br, a as Ua } from "./DictionaryCell-38ba9612.js";
import { P } from "./icons-ad9f8a73.js";
import { g as Yi, i as Ki, D as lt, k as X, _ as Qt, l as Ya, m as Gi, o as qi, p as ae, q as Vi, r as Xi, s as Zi, v as Ji, w as Qi, x as es, y as ts, z as rs, C as ns, F as as, H as os, J as is, K as ss, P as ls } from "./mui-0a491bf1.js";
import { u as cs } from "./useWindowController-5f849b4c.js";
import { u as us } from "./useResetHttpQueryCache-20bde009.js";
import { z as q } from "./index-d0beacff.js";
import "./faEye-ea161ce6.js";
const fs = ({
  className: e,
  orientation: t = "horizontal",
  textColor: r,
  tabComponentRenderer: n,
  tabs: a
}) => {
  const [o, i] = H.useState(0);
  return /* @__PURE__ */ be("div", { className: e, css: [{
    display: "flex",
    flexDirection: "column"
  }, t === "vertical" && {
    height: "100%",
    flexDirection: "row"
  }], children: [
    /* @__PURE__ */ S(Ki, { value: o, onChange: (l, c) => {
      i(c);
    }, orientation: t, css: [{
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
    }, t === "vertical" && {
      height: "100%",
      flexDirection: "row"
    }], textColor: r || "inherit", children: a.map(({
      id: l,
      title: c
    }) => /* @__PURE__ */ S(Yi, { className: "tab", label: c, css: {
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))"
    } }, l)) }),
    n(o)
  ] });
}, ds = ({
  form: e
}) => {
  const t = e.watch("is_part_time_position");
  return /* @__PURE__ */ be(Wr, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ S(lt, { css: {
      marginBottom: "1rem"
    }, children: "Личные данные" }),
    /* @__PURE__ */ be(X, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ S(X, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "last_name", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ke, { css: {
        width: "100%"
      }, ...r, placeholder: "Введите фамилию", label: "Фамилия" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "first_name", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ke, { css: {
        width: "100%"
      }, ...r, placeholder: "Введите имя", label: "Имя" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "patro_name", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ke, { css: {
        width: "100%"
      }, ...r, placeholder: "Введите отчество", label: "Отчество" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "sex", render: ({
        field: r
      }) => /* @__PURE__ */ S(Li, { ...r, displayField: "name", label: "Пол", options: [{
        id: "M",
        name: "Мужской"
      }, {
        id: "W",
        name: "Женский"
      }] }) }) }),
      /* @__PURE__ */ S(X, { item: !0, lg: 8, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "birthday", render: ({
        field: r
      }) => /* @__PURE__ */ S(st, { label: "Дата рождения", placeholder: "Выберите дату рождения", ...r }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "birth_place", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ke, { ...r, placeholder: "Введите место рождения", label: "Место рождения" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "citizenship", render: ({
        field: r
      }) => /* @__PURE__ */ S(Fi, { ...r, url: "api/rest/countries", displayField: "full_name", placeholder: "Выберите страну гражданства" }) }) })
    ] }),
    /* @__PURE__ */ S(lt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Контакты" }),
    /* @__PURE__ */ be(X, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ S(X, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "email", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ke, { ...r, placeholder: "Введите адрес эл. почты", label: "Адрес электронной почты" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "phone", render: ({
        field: r
      }) => /* @__PURE__ */ S(zi, { ...r, showMask: !0, placeholder: "Введите телефон", label: "Телефон" }) }) })
    ] }),
    /* @__PURE__ */ S(lt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Трудовая деятельность" }),
    /* @__PURE__ */ be(X, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "position_id", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ge, { ...r, label: "Должность", placeholder: "Выберите должность", dictionary: "inventoryPositions" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "employment_id", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ge, { ...r, label: "Занятость в организации", placeholder: "Выберите занятость", dictionary: "inventoryEmployment" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ S(Z, { control: e.control, name: "is_part_time_position", render: ({
        field: r
      }) => /* @__PURE__ */ S(Sn, { ...r, label: "Внештатная должность" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, lg: 6, children: t ? /* @__PURE__ */ S(Z, { control: e.control, name: "position", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ke, { ...r, placeholder: "Введите должность", label: "Должность по основному месту работу" }) }) : null }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ S(Z, { control: e.control, name: "employment_date", render: ({
        field: r
      }) => /* @__PURE__ */ S(st, { label: "Дата начала стажа", placeholder: "Выберите дату", ...r }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ S(Z, { control: e.control, name: "date_experience_start", render: ({
        field: r
      }) => /* @__PURE__ */ S(st, { label: "Дата приема на работу", placeholder: "Выберите дату", ...r }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ S(Z, { control: e.control, name: "date_start_work_fkis", render: ({
        field: r
      }) => /* @__PURE__ */ S(st, { label: "Дата начала работы в сфере ФКиС", placeholder: "Выберите дату", ...r }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ S(Z, { control: e.control, name: "dismissal_date", render: ({
        field: r
      }) => /* @__PURE__ */ S(st, { label: "Дата увольнения", placeholder: "Выберите дату", ...r }) }) })
    ] }),
    /* @__PURE__ */ S(lt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Образование" }),
    /* @__PURE__ */ be(X, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "education", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ge, { ...r, value: r.value, multiple: !0, label: "Образование", placeholder: "Выберите образование", dictionary: "inventoryExpertEducation" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "eduction_direction_id", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ge, { ...r, label: "Направление образования", placeholder: "Выберите направление", dictionary: "inventoryEducationDirections" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "qualification_id", render: ({
        field: r
      }) => /* @__PURE__ */ S(Ge, { ...r, label: "Квалификация", placeholder: "Выберите квалификацию", dictionary: "inventoryExpertQualifications" }) }) }),
      /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "degree", render: ({
        field: r
      }) => /* @__PURE__ */ S(Sn, { ...r, label: "Наличие ученой степени" }) }) })
    ] }),
    /* @__PURE__ */ S(lt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Доступность" }),
    /* @__PURE__ */ S(X, { container: !0, spacing: 2, children: /* @__PURE__ */ S(X, { item: !0, xs: 12, children: /* @__PURE__ */ S(Z, { control: e.control, name: "expert_status_dict_id", render: ({
      field: r
    }) => /* @__PURE__ */ S(Ge, { ...r, label: "Статус", placeholder: "Выберите статус", dictionary: "inventoryExpertStatus" }) }) }) })
  ] });
}, vs = ({
  form: e
}) => /* @__PURE__ */ be(Wr, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: e, children: [
  /* @__PURE__ */ S(Z, { control: e.control, name: "subject_interest_area_comment", render: ({
    field: t
  }) => /* @__PURE__ */ S(Ft, { label: "Комментарий к предметной области интересов", placeholder: "Введите комментарий...", ...t }) }),
  /* @__PURE__ */ S(Z, { control: e.control, name: "competencies", render: ({
    field: t
  }) => /* @__PURE__ */ S(Ft, { label: "Ключевые компетенции", placeholder: "Введите текст...", ...t }) }),
  /* @__PURE__ */ S(Z, { control: e.control, name: "free_hours", render: ({
    field: t
  }) => /* @__PURE__ */ S(ji, { label: "Количество часов в неделю", placeholder: "Введите количество часов", ...t }) }),
  /* @__PURE__ */ S(Z, { control: e.control, name: "educational_opportunities", render: ({
    field: t
  }) => /* @__PURE__ */ S(Ft, { label: "Краткое описание возможностей", placeholder: "Введите описание...", ...t }) })
] }), ps = ({
  form: e
}) => /* @__PURE__ */ S(Wr, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: e, children: /* @__PURE__ */ S(Z, { control: e.control, name: "progress", render: ({
  field: t
}) => /* @__PURE__ */ S(Ft, { placeholder: "Опишите свои достижения...", ...t }) }) }), hs = (e) => {
  const t = us();
  return Hi("PUT", `/api/rest/inventoryExpert/${e}`, {
    onError: (n) => {
      var a, o;
      n.response && n.response.status === 400 || $n.error(/* @__PURE__ */ be("div", { children: [
        /* @__PURE__ */ S("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ S("div", { tw: "p-1 text-xs", children: ((o = (a = n.response) == null ? void 0 : a.data) == null ? void 0 : o.message) || n.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: () => {
      $n.success("Успешно сохранено", {
        position: "top-center"
      }), t("/api/teacher/profile");
    }
  });
}, _t = g.createContext(null), ms = ({
  children: e
}) => {
  const t = Br("/api/teacher/profile"), [r, n] = g.useState(null), [a, o] = g.useState(null);
  return /* @__PURE__ */ S(_t.Provider, { value: {
    formInstance: r,
    mutation: a,
    setFormInstance: n,
    setMutation: o,
    query: t
  }, children: e });
}, Ka = q.object({
  id: q.string().uuid(),
  last_name: q.string().min(1, " "),
  first_name: q.string().min(1, " "),
  patro_name: q.string().nullable(),
  sex: q.union([q.literal("M"), q.literal("W")]),
  birthday: q.string(),
  birth_place: q.string().nullable(),
  citizenship: q.coerce.number().min(1, " "),
  // "185",
  email: q.string().email("Неверный формат эл. почты").min(1, " "),
  phone: q.string().nullable(),
  // "+7 (111) 111-11-11",
  position_id: q.coerce.number().min(1, "Выберите должность"),
  // "7",
  employment_id: q.coerce.number().min(1, "Выберите занятость"),
  is_part_time_position: q.boolean(),
  position: q.string().min(4, " ").nullable(),
  employment_date: q.string(),
  date_experience_start: q.string(),
  date_start_work_fkis: q.string().nullable(),
  dismissal_date: q.string().nullable(),
  education: q.array(q.coerce.number()),
  eduction_direction_id: q.coerce.number().nullable(),
  // "4",
  qualification_id: q.coerce.number().min(1, " "),
  degree: q.boolean().nullable(),
  expert_status_dict_id: q.coerce.number().min(1, " "),
  /** Дополнительно */
  subject_interest_area_comment: q.string().nullable(),
  competencies: q.string().nullable(),
  free_hours: q.coerce.number().min(1, " "),
  // "37.00",
  educational_opportunities: q.string().min(1, " "),
  /* Достижения */
  progress: q.string().nullable(),
  fio: q.string().readonly()
});
q.object({
  data: q.array(Ka)
});
function Te(e) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Te(e);
}
function gs(e, t) {
  if (Te(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Te(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ga(e) {
  var t = gs(e, "string");
  return Te(t) == "symbol" ? t : String(t);
}
function Le(e, t, r) {
  return t = Ga(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function _n(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _n(Object(r), !0).forEach(function(n) {
      Le(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _n(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $e(e, t) {
  if (e == null)
    return {};
  var r = Qt(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function se(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ga(n.key), n);
  }
}
function le(e, t, r) {
  return t && Dn(e.prototype, t), r && Dn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Bt(e) {
  return Bt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bt(e);
}
function qa() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qa = function() {
    return !!e;
  })();
}
function ys(e, t) {
  if (t && (Te(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ya(e);
}
function de(e, t, r) {
  return t = Bt(t), ys(e, qa() ? Reflect.construct(t, r || [], Bt(e).constructor) : t.apply(e, r));
}
function ve(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Gi(e, t);
}
function Va(e) {
  if (Array.isArray(e))
    return e;
}
function bs(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        l = !1;
      } else
        for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = !0)
          ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i))
          return;
      } finally {
        if (c)
          throw a;
      }
    }
    return s;
  }
}
function Ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ur(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ar(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ar(e, t);
  }
}
function Xa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e, t) {
  return Va(e) || bs(e, t) || Ur(e, t) || Xa();
}
var ws = function(e, t, r, n, a, o, i, s) {
  if (!e) {
    var l;
    if (t === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [r, n, a, o, i, s], u = 0;
      l = new Error(
        t.replace(/%s/g, function() {
          return c[u++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, $s = ws;
const dt = /* @__PURE__ */ ie($s);
var Ss = function() {
};
function _s(e, t) {
  var r = {};
  return Object.keys(e).forEach(function(n) {
    r[zt(n)] = Ss;
  }), r;
}
function En(e, t) {
  return e[t] !== void 0;
}
function zt(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Ds(e) {
  return !!e && (typeof e != "function" || e.prototype && e.prototype.isReactComponent);
}
function Za() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function Ja(e) {
  function t(r) {
    var n = this.constructor.getDerivedStateFromProps(e, r);
    return n ?? null;
  }
  this.setState(t.bind(this));
}
function Qa(e, t) {
  try {
    var r = this.props, n = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      r,
      n
    );
  } finally {
    this.props = r, this.state = n;
  }
}
Za.__suppressDeprecationWarning = !0;
Ja.__suppressDeprecationWarning = !0;
Qa.__suppressDeprecationWarning = !0;
function Es(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var r = null, n = null, a = null;
  if (typeof t.componentWillMount == "function" ? r = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? a = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (a = "UNSAFE_componentWillUpdate"), r !== null || n !== null || a !== null) {
    var o = e.displayName || e.name, i = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + i + " but also contains the following legacy lifecycles:" + (r !== null ? `
  ` + r : "") + (n !== null ? `
  ` + n : "") + (a !== null ? `
  ` + a : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Za, t.componentWillReceiveProps = Ja), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = Qa;
    var s = t.componentDidUpdate;
    t.componentDidUpdate = function(c, u, f) {
      var d = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : f;
      s.call(this, c, u, d);
    };
  }
  return e;
}
var Os = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function eo(e, t, r) {
  r === void 0 && (r = []);
  var n = e.displayName || e.name || "Component", a = Ds(e), o = Object.keys(t), i = o.map(zt);
  a || !r.length || dt(!1);
  var s = /* @__PURE__ */ function(c) {
    qi(u, c);
    function u() {
      for (var d, h = arguments.length, p = new Array(h), v = 0; v < h; v++)
        p[v] = arguments[v];
      d = c.call.apply(c, [this].concat(p)) || this, d.handlers = /* @__PURE__ */ Object.create(null), o.forEach(function(y) {
        var b = t[y], $ = function(_) {
          if (d.props[b]) {
            var E;
            d._notifying = !0;
            for (var x = arguments.length, L = new Array(x > 1 ? x - 1 : 0), z = 1; z < x; z++)
              L[z - 1] = arguments[z];
            (E = d.props)[b].apply(E, [_].concat(L)), d._notifying = !1;
          }
          d.unmounted || d.setState(function(A) {
            var M, j = A.values;
            return {
              values: ae(/* @__PURE__ */ Object.create(null), j, (M = {}, M[y] = _, M))
            };
          });
        };
        d.handlers[b] = $;
      }), r.length && (d.attachRef = function(y) {
        d.inner = y;
      });
      var m = /* @__PURE__ */ Object.create(null);
      return o.forEach(function(y) {
        m[y] = d.props[zt(y)];
      }), d.state = {
        values: m,
        prevProps: {}
      }, d;
    }
    var f = u.prototype;
    return f.shouldComponentUpdate = function() {
      return !this._notifying;
    }, u.getDerivedStateFromProps = function(h, p) {
      var v = p.values, m = p.prevProps, y = {
        values: ae(/* @__PURE__ */ Object.create(null), v),
        prevProps: {}
      };
      return o.forEach(function(b) {
        y.prevProps[b] = h[b], !En(h, b) && En(m, b) && (y.values[b] = h[zt(b)]);
      }), y;
    }, f.componentWillUnmount = function() {
      this.unmounted = !0;
    }, f.render = function() {
      var h = this, p = this.props, v = p.innerRef, m = Qt(p, ["innerRef"]);
      i.forEach(function(b) {
        delete m[b];
      });
      var y = {};
      return o.forEach(function(b) {
        var $ = h.props[b];
        y[b] = $ !== void 0 ? $ : h.state.values[b];
      }), g.createElement(e, ae({}, m, y, this.handlers, {
        ref: v || this.attachRef
      }));
    }, u;
  }(g.Component);
  Es(s), s.displayName = "Uncontrolled(" + n + ")", s.propTypes = ae({
    innerRef: function() {
    }
  }, _s(t)), r.forEach(function(c) {
    s.prototype[c] = function() {
      var f;
      return (f = this.inner)[c].apply(f, arguments);
    };
  });
  var l = s;
  return g.forwardRef && (l = g.forwardRef(function(c, u) {
    return g.createElement(s, ae({}, c, {
      innerRef: u,
      __source: {
        fileName: Os,
        lineNumber: 128
      },
      __self: this
    }));
  }), l.propTypes = s.propTypes), l.ControlledComponent = e, l.deferControlTo = function(c, u, f) {
    return u === void 0 && (u = {}), eo(c, ae({}, t, u), f);
  }, l;
}
function to(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = to(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function oe() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = to(e)) && (n && (n += " "), n += t);
  return n;
}
var Ut = "milliseconds", vt = "seconds", pt = "minutes", ht = "hours", ze = "day", Ve = "week", mt = "month", je = "year", He = "decade", We = "century", ro = {
  milliseconds: 1,
  seconds: 1e3,
  minutes: 60 * 1e3,
  hours: 60 * 60 * 1e3,
  day: 24 * 60 * 60 * 1e3,
  week: 7 * 24 * 60 * 60 * 1e3
}, Ts = {
  month: 1,
  year: 12,
  decade: 10 * 12,
  century: 100 * 12
};
function Ms(e) {
  return [31, As(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function As(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 : 28;
}
function ye(e, t, r) {
  switch (e = new Date(e), r) {
    case Ut:
    case vt:
    case pt:
    case ht:
    case ze:
    case Ve:
      return Cs(e, t * ro[r]);
    case mt:
    case je:
    case He:
    case We:
      return Ps(e, t * Ts[r]);
  }
  throw new TypeError('Invalid units: "' + r + '"');
}
function Cs(e, t) {
  var r = new Date(+e + t);
  return xs(e, r);
}
function Ps(e, t) {
  var r = e.getFullYear(), n = e.getMonth(), a = e.getDate(), o = r * 12 + n + t, i = Math.trunc(o / 12), s = o % 12, l = Math.min(a, Ms(i)[s]), c = new Date(e);
  return c.setFullYear(i), c.setDate(1), c.setMonth(s), c.setDate(l), c;
}
function xs(e, t) {
  var r = e.getTimezoneOffset(), n = t.getTimezoneOffset(), a = n - r;
  return new Date(+t + a * ro.minutes);
}
function gt(e, t, r) {
  return ye(e, -t, r);
}
function ce(e, t, r) {
  switch (e = new Date(e), t) {
    case We:
    case He:
    case je:
      e = Kt(e, 0);
    case mt:
      e = so(e, 1);
    case Ve:
    case ze:
      e = wt(e, 0);
    case ht:
      e = Xe(e, 0);
    case pt:
      e = bt(e, 0);
    case vt:
      e = yt(e, 0);
  }
  return t === He && (e = gt(e, Be(e) % 10, "year")), t === We && (e = gt(e, Be(e) % 100, "year")), t === Ve && (e = lo(e, 0, r)), e;
}
function Yt(e, t, r) {
  switch (e = new Date(e), e = ce(e, t, r), t) {
    case We:
    case He:
    case je:
    case mt:
    case Ve:
      e = ye(e, 1, t), e = gt(e, 1, ze), e.setHours(23, 59, 59, 999);
      break;
    case ze:
      e.setHours(23, 59, 59, 999);
      break;
    case ht:
    case pt:
    case vt:
      e = ye(e, 1, t), e = gt(e, 1, Ut);
  }
  return e;
}
var Dt = Je(function(e, t) {
  return e === t;
}), Yr = Je(function(e, t) {
  return e !== t;
}), er = Je(function(e, t) {
  return e > t;
}), Et = Je(function(e, t) {
  return e >= t;
}), Kr = Je(function(e, t) {
  return e < t;
}), Ze = Je(function(e, t) {
  return e <= t;
});
function no() {
  return new Date(Math.min.apply(Math, arguments));
}
function ao() {
  return new Date(Math.max.apply(Math, arguments));
}
function oo(e, t, r, n) {
  return n = n || "day", (!t || Et(e, t, n)) && (!r || Ze(e, r, n));
}
var yt = ke("Milliseconds"), bt = ke("Seconds"), Xe = ke("Minutes"), wt = ke("Hours"), io = ke("Day"), so = ke("Date"), Kt = ke("Month"), Be = ke("FullYear");
function Rs(e, t) {
  return t === void 0 ? Be(ce(e, He)) : ye(e, t + 10, je);
}
function ks(e, t) {
  return t === void 0 ? Be(ce(e, We)) : ye(e, t + 100, je);
}
function lo(e, t, r) {
  var n = (io(e) + 7 - (r || 0)) % 7;
  return t === void 0 ? n : ye(e, t - n, ze);
}
function Is(e, t, r, n) {
  var a, o, i;
  switch (r) {
    case Ut:
    case vt:
    case pt:
    case ht:
    case ze:
    case Ve:
      a = t.getTime() - e.getTime();
      break;
    case mt:
    case je:
    case He:
    case We:
      a = (Be(t) - Be(e)) * 12 + Kt(t) - Kt(e);
      break;
    default:
      throw new TypeError('Invalid units: "' + r + '"');
  }
  switch (r) {
    case Ut:
      o = 1;
      break;
    case vt:
      o = 1e3;
      break;
    case pt:
      o = 1e3 * 60;
      break;
    case ht:
      o = 1e3 * 60 * 60;
      break;
    case ze:
      o = 1e3 * 60 * 60 * 24;
      break;
    case Ve:
      o = 1e3 * 60 * 60 * 24 * 7;
      break;
    case mt:
      o = 1;
      break;
    case je:
      o = 12;
      break;
    case He:
      o = 120;
      break;
    case We:
      o = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + r + '"');
  }
  return i = a / o, n ? i : Math.round(i);
}
function ke(e) {
  var t = function(r) {
    switch (r) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  }(e);
  return function(r, n) {
    if (n === void 0)
      return r["get" + e]();
    var a = new Date(r);
    return a["set" + e](n), t && a["get" + e]() != n && (e === "Hours" || n >= t && a.getHours() - r.getHours() < Math.floor(n / t)) && a["set" + e](n + t), a;
  };
}
function Je(e) {
  return function(t, r, n) {
    return e(+ce(t, n), +ce(r, n));
  };
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: ye,
  century: ks,
  date: so,
  day: io,
  decade: Rs,
  diff: Is,
  endOf: Yt,
  eq: Dt,
  gt: er,
  gte: Et,
  hours: wt,
  inRange: oo,
  lt: Kr,
  lte: Ze,
  max: ao,
  milliseconds: yt,
  min: no,
  minutes: Xe,
  month: Kt,
  neq: Yr,
  seconds: bt,
  startOf: ce,
  subtract: gt,
  weekday: lo,
  year: Be
}, Symbol.toStringTag, { value: "Module" }));
function Ns(e) {
  if (Array.isArray(e))
    return Ar(e);
}
function co(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ls() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jt(e) {
  return Ns(e) || co(e) || Ur(e) || Ls();
}
function Fs(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++n < a; )
    o[n] = e[n + t];
  return o;
}
var uo = Fs;
function zs(e, t) {
  return e === t || e !== e && t !== t;
}
var Ot = zs, js = typeof pe == "object" && pe && pe.Object === Object && pe, fo = js, Hs = fo, Ws = typeof self == "object" && self && self.Object === Object && self, Bs = Hs || Ws || Function("return this")(), Se = Bs, Us = Se, Ys = Us.Symbol, Qe = Ys, Tn = Qe, vo = Object.prototype, Ks = vo.hasOwnProperty, Gs = vo.toString, ct = Tn ? Tn.toStringTag : void 0;
function qs(e) {
  var t = Ks.call(e, ct), r = e[ct];
  try {
    e[ct] = void 0;
    var n = !0;
  } catch {
  }
  var a = Gs.call(e);
  return n && (t ? e[ct] = r : delete e[ct]), a;
}
var Vs = qs, Xs = Object.prototype, Zs = Xs.toString;
function Js(e) {
  return Zs.call(e);
}
var Qs = Js, Mn = Qe, el = Vs, tl = Qs, rl = "[object Null]", nl = "[object Undefined]", An = Mn ? Mn.toStringTag : void 0;
function al(e) {
  return e == null ? e === void 0 ? nl : rl : An && An in Object(e) ? el(e) : tl(e);
}
var et = al;
function ol(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Me = ol, il = et, sl = Me, ll = "[object AsyncFunction]", cl = "[object Function]", ul = "[object GeneratorFunction]", fl = "[object Proxy]";
function dl(e) {
  if (!sl(e))
    return !1;
  var t = il(e);
  return t == cl || t == ul || t == ll || t == fl;
}
var Gr = dl, vl = 9007199254740991;
function pl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vl;
}
var qr = pl, hl = Gr, ml = qr;
function gl(e) {
  return e != null && ml(e.length) && !hl(e);
}
var Tt = gl, yl = 9007199254740991, bl = /^(?:0|[1-9]\d*)$/;
function wl(e, t) {
  var r = typeof e;
  return t = t ?? yl, !!t && (r == "number" || r != "symbol" && bl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Vr = wl, $l = Ot, Sl = Tt, _l = Vr, Dl = Me;
function El(e, t, r) {
  if (!Dl(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Sl(r) && _l(t, r.length) : n == "string" && t in r) ? $l(r[t], e) : !1;
}
var tr = El, Ol = /\s/;
function Tl(e) {
  for (var t = e.length; t-- && Ol.test(e.charAt(t)); )
    ;
  return t;
}
var Ml = Tl, Al = Ml, Cl = /^\s+/;
function Pl(e) {
  return e && e.slice(0, Al(e) + 1).replace(Cl, "");
}
var xl = Pl;
function Rl(e) {
  return e != null && typeof e == "object";
}
var Ie = Rl, kl = et, Il = Ie, Nl = "[object Symbol]";
function Ll(e) {
  return typeof e == "symbol" || Il(e) && kl(e) == Nl;
}
var Mt = Ll, Fl = xl, Cn = Me, zl = Mt, Pn = 0 / 0, jl = /^[-+]0x[0-9a-f]+$/i, Hl = /^0b[01]+$/i, Wl = /^0o[0-7]+$/i, Bl = parseInt;
function Ul(e) {
  if (typeof e == "number")
    return e;
  if (zl(e))
    return Pn;
  if (Cn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Cn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Fl(e);
  var r = Hl.test(e);
  return r || Wl.test(e) ? Bl(e.slice(2), r ? 2 : 8) : jl.test(e) ? Pn : +e;
}
var Yl = Ul, Kl = Yl, xn = 1 / 0, Gl = 17976931348623157e292;
function ql(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Kl(e), e === xn || e === -xn) {
    var t = e < 0 ? -1 : 1;
    return t * Gl;
  }
  return e === e ? e : 0;
}
var po = ql, Vl = po;
function Xl(e) {
  var t = Vl(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ho = Xl, Zl = uo, Jl = tr, Ql = ho, ec = Math.ceil, tc = Math.max;
function rc(e, t, r) {
  (r ? Jl(e, t, r) : t === void 0) ? t = 1 : t = tc(Ql(t), 0);
  var n = e == null ? 0 : e.length;
  if (!n || t < 1)
    return [];
  for (var a = 0, o = 0, i = Array(ec(n / t)); a < n; )
    i[o++] = Zl(e, a, a += t);
  return i;
}
var nc = rc;
const ac = /* @__PURE__ */ ie(nc);
function At(e) {
  return e && e.ownerDocument || document;
}
function oc(e) {
  var t = At(e);
  return t && t.defaultView || window;
}
function ic(e, t) {
  return oc(e).getComputedStyle(e, t);
}
var sc = /([A-Z])/g;
function lc(e) {
  return e.replace(sc, "-$1").toLowerCase();
}
var cc = /^ms-/;
function kt(e) {
  return lc(e).replace(cc, "-ms-");
}
var uc = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function fc(e) {
  return !!(e && uc.test(e));
}
function qe(e, t) {
  var r = "", n = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(kt(t)) || ic(e).getPropertyValue(kt(t));
  Object.keys(t).forEach(function(a) {
    var o = t[a];
    !o && o !== 0 ? e.style.removeProperty(kt(a)) : fc(a) ? n += a + "(" + o + ") " : r += kt(a) + ": " + o + ";";
  }), n && (r += "transform: " + n + ";"), e.style.cssText += ";" + r;
}
function $t(e, t) {
  if (e.contains)
    return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
function dc(e) {
  return "nodeType" in e && e.nodeType === document.DOCUMENT_NODE;
}
function Xr(e) {
  return "window" in e && e.window === e ? e : dc(e) && e.defaultView || !1;
}
function mo(e) {
  var t = e === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function r(n, a) {
    var o = Xr(n);
    if (a === void 0)
      return o ? o[e] : n[t];
    o ? o.scrollTo(o[e], a) : n[t] = a;
  }
  return r;
}
const go = mo("pageXOffset"), yo = mo("pageYOffset");
function Fe(e) {
  var t = At(e), r = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }, n = t && t.documentElement;
  return !n || !$t(n, e) || (e.getBoundingClientRect !== void 0 && (r = e.getBoundingClientRect()), r = {
    top: r.top + yo(n) - (n.clientTop || 0),
    left: r.left + go(n) - (n.clientLeft || 0),
    width: r.width,
    height: r.height
  }), r;
}
var vc = function(t) {
  return !!t && "offsetParent" in t;
};
function pc(e) {
  for (var t = At(e), r = e && e.offsetParent; vc(r) && r.nodeName !== "HTML" && qe(r, "position") === "static"; )
    r = r.offsetParent;
  return r || t.documentElement;
}
var hc = function(t) {
  return t.nodeName && t.nodeName.toLowerCase();
};
function bo(e, t) {
  var r = {
    top: 0,
    left: 0
  }, n;
  if (qe(e, "position") === "fixed")
    n = e.getBoundingClientRect();
  else {
    var a = t || pc(e);
    n = Fe(e), hc(a) !== "html" && (r = Fe(a));
    var o = String(qe(a, "borderTopWidth") || 0);
    r.top += parseInt(o, 10) - yo(a) || 0;
    var i = String(qe(a, "borderLeftWidth") || 0);
    r.left += parseInt(i, 10) - go(a) || 0;
  }
  var s = String(qe(e, "marginTop") || 0), l = String(qe(e, "marginLeft") || 0);
  return ae({}, n, {
    top: n.top - r.top - (parseInt(s, 10) || 0),
    left: n.left - r.left - (parseInt(l, 10) || 0)
  });
}
const Zr = !!(typeof window < "u" && window.document && window.document.createElement);
var Rn = (/* @__PURE__ */ new Date()).getTime();
function mc(e) {
  var t = (/* @__PURE__ */ new Date()).getTime(), r = Math.max(0, 16 - (t - Rn)), n = setTimeout(e, r);
  return Rn = t, n;
}
var gc = ["", "webkit", "moz", "o", "ms"], Cr = "clearTimeout", Pr = mc, kn = function(t, r) {
  return t + (t ? r[0].toUpperCase() + r.substr(1) : r) + "AnimationFrame";
};
Zr && gc.some(function(e) {
  var t = kn(e, "request");
  return t in window && (Cr = kn(e, "cancel"), Pr = function(n) {
    return window[t](n);
  }), !!Pr;
});
var In = function(t) {
  typeof window[Cr] == "function" && window[Cr](t);
}, wo = Pr, yr;
function yc(e, t) {
  if (!yr) {
    var r = document.body, n = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector;
    yr = function(o, i) {
      return n.call(o, i);
    };
  }
  return yr(e, t);
}
var bc = Function.prototype.bind.call(Function.prototype.call, [].slice);
function wc(e, t) {
  return bc(e.querySelectorAll(t));
}
var xr = !1, Rr = !1;
try {
  var br = {
    get passive() {
      return xr = !0;
    },
    get once() {
      return Rr = xr = !0;
    }
  };
  Zr && (window.addEventListener("test", br, br), window.removeEventListener("test", br, !0));
} catch {
}
function $c(e, t, r, n) {
  if (n && typeof n != "boolean" && !Rr) {
    var a = n.once, o = n.capture, i = r;
    !Rr && a && (i = r.__once || function s(l) {
      this.removeEventListener(t, s, o), r.call(this, l);
    }, r.__once = i), e.addEventListener(t, i, xr ? n : o);
  }
  e.addEventListener(t, r, n);
}
function Sc(e) {
  const t = H.useRef(e);
  return H.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Nn(e) {
  const t = Sc(e);
  return H.useCallback(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
function Ln() {
  return H.useState(null);
}
function _c() {
  const e = H.useRef(!0), t = H.useRef(() => e.current);
  return H.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function Dc(e) {
  const t = _c();
  return [e[0], H.useCallback((r) => {
    if (t())
      return e[1](r);
  }, [t, e[1]])];
}
var Ec = Vi({
  defaultModifiers: [Xi, Zi, Ji, Qi, es, ts, rs, ns]
}), Fn = function(t) {
  return {
    position: t,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, Oc = {
  name: "applyStyles",
  enabled: !1
}, Tc = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(t) {
    var r = t.state;
    return function() {
      var n = r.elements, a = n.reference, o = n.popper;
      if ("removeAttribute" in a) {
        var i = (a.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
          return s.trim() !== o.id;
        });
        i.length ? a.setAttribute("aria-describedby", i.join(",")) : a.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(t) {
    var r, n = t.state, a = n.elements, o = a.popper, i = a.reference, s = (r = o.getAttribute("role")) == null ? void 0 : r.toLowerCase();
    if (o.id && s === "tooltip" && "setAttribute" in i) {
      var l = i.getAttribute("aria-describedby");
      if (l && l.split(",").indexOf(o.id) !== -1)
        return;
      i.setAttribute("aria-describedby", l ? l + "," + o.id : o.id);
    }
  }
}, Mc = [];
function Ac(e, t, r) {
  var n = r === void 0 ? {} : r, a = n.enabled, o = a === void 0 ? !0 : a, i = n.placement, s = i === void 0 ? "bottom" : i, l = n.strategy, c = l === void 0 ? "absolute" : l, u = n.modifiers, f = u === void 0 ? Mc : u, d = Qt(n, ["enabled", "placement", "strategy", "modifiers"]), h = H.useRef(), p = H.useCallback(function() {
    var w;
    (w = h.current) == null || w.update();
  }, []), v = H.useCallback(function() {
    var w;
    (w = h.current) == null || w.forceUpdate();
  }, []), m = Dc(H.useState({
    placement: s,
    update: p,
    forceUpdate: v,
    attributes: {},
    styles: {
      popper: Fn(c),
      arrow: {}
    }
  })), y = m[0], b = m[1], $ = H.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(_) {
        var E = _.state, x = {}, L = {};
        Object.keys(E.elements).forEach(function(z) {
          x[z] = E.styles[z], L[z] = E.attributes[z];
        }), b({
          state: E,
          styles: x,
          attributes: L,
          update: p,
          forceUpdate: v,
          placement: E.placement
        });
      }
    };
  }, [p, v, b]);
  return H.useEffect(function() {
    !h.current || !o || h.current.setOptions({
      placement: s,
      strategy: c,
      modifiers: [].concat(f, [$, Oc])
    });
  }, [c, s, $, o]), H.useEffect(function() {
    if (!(!o || e == null || t == null))
      return h.current = Ec(e, t, ae({}, d, {
        placement: s,
        strategy: c,
        modifiers: [].concat(f, [Tc, $])
      })), function() {
        h.current != null && (h.current.destroy(), h.current = void 0, b(function(w) {
          return ae({}, w, {
            attributes: {},
            styles: {
              popper: Fn(c)
            }
          });
        }));
      };
  }, [o, e, t]), y;
}
function Cc(e, t, r, n) {
  var a = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(t, r, a), r.__once && e.removeEventListener(t, r.__once, a);
}
function ft(e, t, r, n) {
  return $c(e, t, r, n), function() {
    Cc(e, t, r, n);
  };
}
function Pc(e) {
  return e && "setState" in e ? Ba.findDOMNode(e) : e ?? null;
}
const xc = function(e) {
  return At(Pc(e));
};
var Rc = 27, zn = function() {
};
function kc(e) {
  return e.button === 0;
}
function Ic(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var jn = function(t) {
  return t && ("current" in t ? t.current : t);
};
function Nc(e, t, r) {
  var n = r === void 0 ? {} : r, a = n.disabled, o = n.clickTrigger, i = o === void 0 ? "click" : o, s = H.useRef(!1), l = t || zn, c = H.useCallback(function(d) {
    var h, p = jn(e);
    ki(!!p, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !p || Ic(d) || !kc(d) || !!$t(p, (h = d.composedPath == null ? void 0 : d.composedPath()[0]) != null ? h : d.target);
  }, [e]), u = Nn(function(d) {
    s.current || l(d);
  }), f = Nn(function(d) {
    d.keyCode === Rc && l(d);
  });
  H.useEffect(function() {
    if (!(a || e == null)) {
      var d = window.event, h = xc(jn(e)), p = ft(h, i, c, !0), v = ft(h, i, function(b) {
        if (b === d) {
          d = void 0;
          return;
        }
        u(b);
      }), m = ft(h, "keyup", function(b) {
        if (b === d) {
          d = void 0;
          return;
        }
        f(b);
      }), y = [];
      return "ontouchstart" in h.documentElement && (y = [].slice.call(h.body.children).map(function(b) {
        return ft(b, "mousemove", zn);
      })), function() {
        p(), v(), m(), y.forEach(function(b) {
          return b();
        });
      };
    }
  }, [e, a, i, c, u, f]);
}
function Lc(e) {
  var t = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(r) {
    t[r.name] = r;
  }), t) : e || t;
}
function Fc(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
    return e[t].name = t, e[t];
  });
}
function zc(e) {
  var t, r, n, a, o = e.enabled, i = e.enableEvents, s = e.placement, l = e.flip, c = e.offset, u = e.fixed, f = e.containerPadding, d = e.arrowElement, h = e.popperConfig, p = h === void 0 ? {} : h, v = Lc(p.modifiers);
  return ae({}, p, {
    placement: s,
    enabled: o,
    strategy: u ? "fixed" : p.strategy,
    modifiers: Fc(ae({}, v, {
      eventListeners: {
        enabled: i
      },
      preventOverflow: ae({}, v.preventOverflow, {
        options: f ? ae({
          padding: f
        }, (t = v.preventOverflow) == null ? void 0 : t.options) : (r = v.preventOverflow) == null ? void 0 : r.options
      }),
      offset: {
        options: ae({
          offset: c
        }, (n = v.offset) == null ? void 0 : n.options)
      },
      arrow: ae({}, v.arrow, {
        enabled: !!d,
        options: ae({}, (a = v.arrow) == null ? void 0 : a.options, {
          element: d
        })
      }),
      flip: ae({
        enabled: !!l
      }, v.flip)
    }))
  });
}
var It;
function $o(e) {
  if ((!It && It !== 0 || e) && Zr) {
    var t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), It = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return It;
}
var wr = function(t) {
  var r;
  return typeof document > "u" ? null : t == null ? At().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (r = t) != null && r.nodeType && t || null);
};
function Hn(e, t) {
  var r = H.useState(function() {
    return wr(e);
  }), n = r[0], a = r[1];
  if (!n) {
    var o = wr(e);
    o && a(o);
  }
  return H.useEffect(function() {
    t && n && t(n);
  }, [t, n]), H.useEffect(function() {
    var i = wr(e);
    i !== n && a(i);
  }, [e, n]), n;
}
const Wn = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function jc(e, t) {
  const r = Wn(e), n = Wn(t);
  return (a) => {
    r && r(a), n && n(a);
  };
}
function Hc(e, t) {
  return H.useMemo(() => jc(e, t), [e, t]);
}
var Jr = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.flip, n = e.offset, a = e.placement, o = e.containerPadding, i = o === void 0 ? 5 : o, s = e.popperConfig, l = s === void 0 ? {} : s, c = e.transition, u = Ln(), f = u[0], d = u[1], h = Ln(), p = h[0], v = h[1], m = Hc(d, t), y = Hn(e.container), b = Hn(e.target), $ = H.useState(!e.show), w = $[0], _ = $[1], E = Ac(b, f, zc({
    placement: a,
    enableEvents: !!e.show,
    containerPadding: i || 5,
    flip: r,
    offset: n,
    arrowElement: p,
    popperConfig: l
  })), x = E.styles, L = E.attributes, z = Qt(E, ["styles", "attributes"]);
  e.show ? w && _(!1) : !e.transition && !w && _(!0);
  var A = function() {
    _(!0), e.onExited && e.onExited.apply(e, arguments);
  }, M = e.show || c && !w;
  if (Nc(f, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !M)
    return null;
  var j = e.children(ae({}, z, {
    show: !!e.show,
    props: ae({}, L.popper, {
      style: x.popper,
      ref: m
    }),
    arrowProps: ae({}, L.arrow, {
      style: x.arrow,
      ref: v
    })
  }));
  if (c) {
    var Y = e.onExit, F = e.onExiting, C = e.onEnter, O = e.onEntering, I = e.onEntered;
    j = /* @__PURE__ */ g.createElement(c, {
      in: e.show,
      appear: !0,
      onExit: Y,
      onExiting: F,
      onExited: A,
      onEnter: C,
      onEntering: O,
      onEntered: I
    }, j);
  }
  return y ? /* @__PURE__ */ Ba.createPortal(j, y) : null;
});
Jr.displayName = "Overlay";
Jr.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: P.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: P.oneOf(as),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: P.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: P.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: P.bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: P.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: P.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: P.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: P.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: P.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: P.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    if (t.rootClose) {
      var o;
      return (o = P.func).isRequired.apply(o, [t].concat(n));
    }
    return P.func.apply(P, [t].concat(n));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: P.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: P.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: P.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: P.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: P.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: P.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: P.func
};
const Wc = Jr;
function Bc() {
  this.__data__ = [], this.size = 0;
}
var Uc = Bc, Yc = Ot;
function Kc(e, t) {
  for (var r = e.length; r--; )
    if (Yc(e[r][0], t))
      return r;
  return -1;
}
var rr = Kc, Gc = rr, qc = Array.prototype, Vc = qc.splice;
function Xc(e) {
  var t = this.__data__, r = Gc(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Vc.call(t, r, 1), --this.size, !0;
}
var Zc = Xc, Jc = rr;
function Qc(e) {
  var t = this.__data__, r = Jc(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var eu = Qc, tu = rr;
function ru(e) {
  return tu(this.__data__, e) > -1;
}
var nu = ru, au = rr;
function ou(e, t) {
  var r = this.__data__, n = au(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var iu = ou, su = Uc, lu = Zc, cu = eu, uu = nu, fu = iu;
function tt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
tt.prototype.clear = su;
tt.prototype.delete = lu;
tt.prototype.get = cu;
tt.prototype.has = uu;
tt.prototype.set = fu;
var nr = tt, du = nr;
function vu() {
  this.__data__ = new du(), this.size = 0;
}
var pu = vu;
function hu(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var mu = hu;
function gu(e) {
  return this.__data__.get(e);
}
var yu = gu;
function bu(e) {
  return this.__data__.has(e);
}
var wu = bu, $u = Se, Su = $u["__core-js_shared__"], _u = Su, $r = _u, Bn = function() {
  var e = /[^.]+$/.exec($r && $r.keys && $r.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Du(e) {
  return !!Bn && Bn in e;
}
var Eu = Du, Ou = Function.prototype, Tu = Ou.toString;
function Mu(e) {
  if (e != null) {
    try {
      return Tu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var So = Mu, Au = Gr, Cu = Eu, Pu = Me, xu = So, Ru = /[\\^$.*+?()[\]{}|]/g, ku = /^\[object .+?Constructor\]$/, Iu = Function.prototype, Nu = Object.prototype, Lu = Iu.toString, Fu = Nu.hasOwnProperty, zu = RegExp(
  "^" + Lu.call(Fu).replace(Ru, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ju(e) {
  if (!Pu(e) || Cu(e))
    return !1;
  var t = Au(e) ? zu : ku;
  return t.test(xu(e));
}
var Hu = ju;
function Wu(e, t) {
  return e == null ? void 0 : e[t];
}
var Bu = Wu, Uu = Hu, Yu = Bu;
function Ku(e, t) {
  var r = Yu(e, t);
  return Uu(r) ? r : void 0;
}
var Ye = Ku, Gu = Ye, qu = Se, Vu = Gu(qu, "Map"), Qr = Vu, Xu = Ye, Zu = Xu(Object, "create"), ar = Zu, Un = ar;
function Ju() {
  this.__data__ = Un ? Un(null) : {}, this.size = 0;
}
var Qu = Ju;
function ef(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tf = ef, rf = ar, nf = "__lodash_hash_undefined__", af = Object.prototype, of = af.hasOwnProperty;
function sf(e) {
  var t = this.__data__;
  if (rf) {
    var r = t[e];
    return r === nf ? void 0 : r;
  }
  return of.call(t, e) ? t[e] : void 0;
}
var lf = sf, cf = ar, uf = Object.prototype, ff = uf.hasOwnProperty;
function df(e) {
  var t = this.__data__;
  return cf ? t[e] !== void 0 : ff.call(t, e);
}
var vf = df, pf = ar, hf = "__lodash_hash_undefined__";
function mf(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = pf && t === void 0 ? hf : t, this;
}
var gf = mf, yf = Qu, bf = tf, wf = lf, $f = vf, Sf = gf;
function rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
rt.prototype.clear = yf;
rt.prototype.delete = bf;
rt.prototype.get = wf;
rt.prototype.has = $f;
rt.prototype.set = Sf;
var _f = rt, Yn = _f, Df = nr, Ef = Qr;
function Of() {
  this.size = 0, this.__data__ = {
    hash: new Yn(),
    map: new (Ef || Df)(),
    string: new Yn()
  };
}
var Tf = Of;
function Mf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Af = Mf, Cf = Af;
function Pf(e, t) {
  var r = e.__data__;
  return Cf(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var or = Pf, xf = or;
function Rf(e) {
  var t = xf(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var kf = Rf, If = or;
function Nf(e) {
  return If(this, e).get(e);
}
var Lf = Nf, Ff = or;
function zf(e) {
  return Ff(this, e).has(e);
}
var jf = zf, Hf = or;
function Wf(e, t) {
  var r = Hf(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Bf = Wf, Uf = Tf, Yf = kf, Kf = Lf, Gf = jf, qf = Bf;
function nt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
nt.prototype.clear = Uf;
nt.prototype.delete = Yf;
nt.prototype.get = Kf;
nt.prototype.has = Gf;
nt.prototype.set = qf;
var en = nt, Vf = nr, Xf = Qr, Zf = en, Jf = 200;
function Qf(e, t) {
  var r = this.__data__;
  if (r instanceof Vf) {
    var n = r.__data__;
    if (!Xf || n.length < Jf - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Zf(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var ed = Qf, td = nr, rd = pu, nd = mu, ad = yu, od = wu, id = ed;
function at(e) {
  var t = this.__data__ = new td(e);
  this.size = t.size;
}
at.prototype.clear = rd;
at.prototype.delete = nd;
at.prototype.get = ad;
at.prototype.has = od;
at.prototype.set = id;
var tn = at, sd = "__lodash_hash_undefined__";
function ld(e) {
  return this.__data__.set(e, sd), this;
}
var cd = ld;
function ud(e) {
  return this.__data__.has(e);
}
var fd = ud, dd = en, vd = cd, pd = fd;
function Gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new dd(); ++t < r; )
    this.add(e[t]);
}
Gt.prototype.add = Gt.prototype.push = vd;
Gt.prototype.has = pd;
var hd = Gt;
function md(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var gd = md;
function yd(e, t) {
  return e.has(t);
}
var bd = yd, wd = hd, $d = gd, Sd = bd, _d = 1, Dd = 2;
function Ed(e, t, r, n, a, o) {
  var i = r & _d, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = o.get(e), u = o.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, h = r & Dd ? new wd() : void 0;
  for (o.set(e, t), o.set(t, e); ++f < s; ) {
    var p = e[f], v = t[f];
    if (n)
      var m = i ? n(v, p, f, t, e, o) : n(p, v, f, e, t, o);
    if (m !== void 0) {
      if (m)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!$d(t, function(y, b) {
        if (!Sd(h, b) && (p === y || a(p, y, r, n, o)))
          return h.push(b);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === v || a(p, v, r, n, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
var _o = Ed, Od = Se, Td = Od.Uint8Array, Do = Td;
function Md(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var Ad = Md;
function Cd(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Pd = Cd, Kn = Qe, Gn = Do, xd = Ot, Rd = _o, kd = Ad, Id = Pd, Nd = 1, Ld = 2, Fd = "[object Boolean]", zd = "[object Date]", jd = "[object Error]", Hd = "[object Map]", Wd = "[object Number]", Bd = "[object RegExp]", Ud = "[object Set]", Yd = "[object String]", Kd = "[object Symbol]", Gd = "[object ArrayBuffer]", qd = "[object DataView]", qn = Kn ? Kn.prototype : void 0, Sr = qn ? qn.valueOf : void 0;
function Vd(e, t, r, n, a, o, i) {
  switch (r) {
    case qd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Gd:
      return !(e.byteLength != t.byteLength || !o(new Gn(e), new Gn(t)));
    case Fd:
    case zd:
    case Wd:
      return xd(+e, +t);
    case jd:
      return e.name == t.name && e.message == t.message;
    case Bd:
    case Yd:
      return e == t + "";
    case Hd:
      var s = kd;
    case Ud:
      var l = n & Nd;
      if (s || (s = Id), e.size != t.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= Ld, i.set(e, t);
      var u = Rd(s(e), s(t), n, a, o, i);
      return i.delete(e), u;
    case Kd:
      if (Sr)
        return Sr.call(e) == Sr.call(t);
  }
  return !1;
}
var Xd = Vd;
function Zd(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var rn = Zd, Jd = Array.isArray, ge = Jd, Qd = rn, ev = ge;
function tv(e, t, r) {
  var n = t(e);
  return ev(e) ? n : Qd(n, r(e));
}
var Eo = tv;
function rv(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (o[a++] = i);
  }
  return o;
}
var nv = rv;
function av() {
  return [];
}
var Oo = av, ov = nv, iv = Oo, sv = Object.prototype, lv = sv.propertyIsEnumerable, Vn = Object.getOwnPropertySymbols, cv = Vn ? function(e) {
  return e == null ? [] : (e = Object(e), ov(Vn(e), function(t) {
    return lv.call(e, t);
  }));
} : iv, nn = cv;
function uv(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var fv = uv, dv = et, vv = Ie, pv = "[object Arguments]";
function hv(e) {
  return vv(e) && dv(e) == pv;
}
var mv = hv, Xn = mv, gv = Ie, To = Object.prototype, yv = To.hasOwnProperty, bv = To.propertyIsEnumerable, wv = Xn(function() {
  return arguments;
}()) ? Xn : function(e) {
  return gv(e) && yv.call(e, "callee") && !bv.call(e, "callee");
}, an = wv, qt = { exports: {} };
function $v() {
  return !1;
}
var Sv = $v;
qt.exports;
(function(e, t) {
  var r = Se, n = Sv, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, i = o && o.exports === a, s = i ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || n;
  e.exports = c;
})(qt, qt.exports);
var ir = qt.exports, _v = et, Dv = qr, Ev = Ie, Ov = "[object Arguments]", Tv = "[object Array]", Mv = "[object Boolean]", Av = "[object Date]", Cv = "[object Error]", Pv = "[object Function]", xv = "[object Map]", Rv = "[object Number]", kv = "[object Object]", Iv = "[object RegExp]", Nv = "[object Set]", Lv = "[object String]", Fv = "[object WeakMap]", zv = "[object ArrayBuffer]", jv = "[object DataView]", Hv = "[object Float32Array]", Wv = "[object Float64Array]", Bv = "[object Int8Array]", Uv = "[object Int16Array]", Yv = "[object Int32Array]", Kv = "[object Uint8Array]", Gv = "[object Uint8ClampedArray]", qv = "[object Uint16Array]", Vv = "[object Uint32Array]", te = {};
te[Hv] = te[Wv] = te[Bv] = te[Uv] = te[Yv] = te[Kv] = te[Gv] = te[qv] = te[Vv] = !0;
te[Ov] = te[Tv] = te[zv] = te[Mv] = te[jv] = te[Av] = te[Cv] = te[Pv] = te[xv] = te[Rv] = te[kv] = te[Iv] = te[Nv] = te[Lv] = te[Fv] = !1;
function Xv(e) {
  return Ev(e) && Dv(e.length) && !!te[_v(e)];
}
var Zv = Xv;
function Jv(e) {
  return function(t) {
    return e(t);
  };
}
var sr = Jv, Vt = { exports: {} };
Vt.exports;
(function(e, t) {
  var r = fo, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, i = o && r.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Vt, Vt.exports);
var on = Vt.exports, Qv = Zv, ep = sr, Zn = on, Jn = Zn && Zn.isTypedArray, tp = Jn ? ep(Jn) : Qv, sn = tp, rp = fv, np = an, ap = ge, op = ir, ip = Vr, sp = sn, lp = Object.prototype, cp = lp.hasOwnProperty;
function up(e, t) {
  var r = ap(e), n = !r && np(e), a = !r && !n && op(e), o = !r && !n && !a && sp(e), i = r || n || a || o, s = i ? rp(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || cp.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ip(c, l))) && s.push(c);
  return s;
}
var Mo = up, fp = Object.prototype;
function dp(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || fp;
  return e === r;
}
var ln = dp;
function vp(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ao = vp, pp = Ao, hp = pp(Object.keys, Object), mp = hp, gp = ln, yp = mp, bp = Object.prototype, wp = bp.hasOwnProperty;
function $p(e) {
  if (!gp(e))
    return yp(e);
  var t = [];
  for (var r in Object(e))
    wp.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Sp = $p, _p = Mo, Dp = Sp, Ep = Tt;
function Op(e) {
  return Ep(e) ? _p(e) : Dp(e);
}
var Ct = Op, Tp = Eo, Mp = nn, Ap = Ct;
function Cp(e) {
  return Tp(e, Ap, Mp);
}
var Co = Cp, Qn = Co, Pp = 1, xp = Object.prototype, Rp = xp.hasOwnProperty;
function kp(e, t, r, n, a, o) {
  var i = r & Pp, s = Qn(e), l = s.length, c = Qn(t), u = c.length;
  if (l != u && !i)
    return !1;
  for (var f = l; f--; ) {
    var d = s[f];
    if (!(i ? d in t : Rp.call(t, d)))
      return !1;
  }
  var h = o.get(e), p = o.get(t);
  if (h && p)
    return h == t && p == e;
  var v = !0;
  o.set(e, t), o.set(t, e);
  for (var m = i; ++f < l; ) {
    d = s[f];
    var y = e[d], b = t[d];
    if (n)
      var $ = i ? n(b, y, d, t, e, o) : n(y, b, d, e, t, o);
    if (!($ === void 0 ? y === b || a(y, b, r, n, o) : $)) {
      v = !1;
      break;
    }
    m || (m = d == "constructor");
  }
  if (v && !m) {
    var w = e.constructor, _ = t.constructor;
    w != _ && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof _ == "function" && _ instanceof _) && (v = !1);
  }
  return o.delete(e), o.delete(t), v;
}
var Ip = kp, Np = Ye, Lp = Se, Fp = Np(Lp, "DataView"), zp = Fp, jp = Ye, Hp = Se, Wp = jp(Hp, "Promise"), Bp = Wp, Up = Ye, Yp = Se, Kp = Up(Yp, "Set"), Gp = Kp, qp = Ye, Vp = Se, Xp = qp(Vp, "WeakMap"), Zp = Xp, kr = zp, Ir = Qr, Nr = Bp, Lr = Gp, Fr = Zp, Po = et, ot = So, ea = "[object Map]", Jp = "[object Object]", ta = "[object Promise]", ra = "[object Set]", na = "[object WeakMap]", aa = "[object DataView]", Qp = ot(kr), eh = ot(Ir), th = ot(Nr), rh = ot(Lr), nh = ot(Fr), Ne = Po;
(kr && Ne(new kr(new ArrayBuffer(1))) != aa || Ir && Ne(new Ir()) != ea || Nr && Ne(Nr.resolve()) != ta || Lr && Ne(new Lr()) != ra || Fr && Ne(new Fr()) != na) && (Ne = function(e) {
  var t = Po(e), r = t == Jp ? e.constructor : void 0, n = r ? ot(r) : "";
  if (n)
    switch (n) {
      case Qp:
        return aa;
      case eh:
        return ea;
      case th:
        return ta;
      case rh:
        return ra;
      case nh:
        return na;
    }
  return t;
});
var lr = Ne, _r = tn, ah = _o, oh = Xd, ih = Ip, oa = lr, ia = ge, sa = ir, sh = sn, lh = 1, la = "[object Arguments]", ca = "[object Array]", Nt = "[object Object]", ch = Object.prototype, ua = ch.hasOwnProperty;
function uh(e, t, r, n, a, o) {
  var i = ia(e), s = ia(t), l = i ? ca : oa(e), c = s ? ca : oa(t);
  l = l == la ? Nt : l, c = c == la ? Nt : c;
  var u = l == Nt, f = c == Nt, d = l == c;
  if (d && sa(e)) {
    if (!sa(t))
      return !1;
    i = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new _r()), i || sh(e) ? ah(e, t, r, n, a, o) : oh(e, t, l, r, n, a, o);
  if (!(r & lh)) {
    var h = u && ua.call(e, "__wrapped__"), p = f && ua.call(t, "__wrapped__");
    if (h || p) {
      var v = h ? e.value() : e, m = p ? t.value() : t;
      return o || (o = new _r()), a(v, m, r, n, o);
    }
  }
  return d ? (o || (o = new _r()), ih(e, t, r, n, a, o)) : !1;
}
var fh = uh, dh = fh, fa = Ie;
function xo(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !fa(e) && !fa(t) ? e !== e && t !== t : dh(e, t, r, n, xo, a);
}
var cn = xo, vh = cn;
function ph(e, t) {
  return vh(e, t);
}
var hh = ph;
const mh = /* @__PURE__ */ ie(hh);
function Dr(e, t) {
  var r = Xr(e);
  return r ? r.innerHeight : t ? e.clientHeight : Fe(e).height;
}
function Ro(e, t, r) {
  e.closest && !r && e.closest(t);
  var n = e;
  do {
    if (yc(n, t))
      return n;
    n = n.parentElement;
  } while (n && n !== r && n.nodeType === document.ELEMENT_NODE);
  return null;
}
function gh(e, t, r, n) {
  for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var yh = gh, bh = tn, wh = cn, $h = 1, Sh = 2;
function _h(e, t, r, n) {
  var a = r.length, o = a, i = !n;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var s = r[a];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    s = r[a];
    var l = s[0], c = e[l], u = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var f = new bh();
      if (n)
        var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? wh(u, c, $h | Sh, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var Dh = _h, Eh = Me;
function Oh(e) {
  return e === e && !Eh(e);
}
var ko = Oh, Th = ko, Mh = Ct;
function Ah(e) {
  for (var t = Mh(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, Th(a)];
  }
  return t;
}
var Ch = Ah;
function Ph(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Io = Ph, xh = Dh, Rh = Ch, kh = Io;
function Ih(e) {
  var t = Rh(e);
  return t.length == 1 && t[0][2] ? kh(t[0][0], t[0][1]) : function(r) {
    return r === e || xh(r, e, t);
  };
}
var Nh = Ih, Lh = ge, Fh = Mt, zh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jh = /^\w*$/;
function Hh(e, t) {
  if (Lh(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Fh(e) ? !0 : jh.test(e) || !zh.test(e) || t != null && e in Object(t);
}
var un = Hh, No = en, Wh = "Expected a function";
function fn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wh);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a))
      return o.get(a);
    var i = e.apply(this, n);
    return r.cache = o.set(a, i) || o, i;
  };
  return r.cache = new (fn.Cache || No)(), r;
}
fn.Cache = No;
var Bh = fn, Uh = Bh, Yh = 500;
function Kh(e) {
  var t = Uh(e, function(n) {
    return r.size === Yh && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Gh = Kh, qh = Gh, Vh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xh = /\\(\\)?/g, Zh = qh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Vh, function(r, n, a, o) {
    t.push(a ? o.replace(Xh, "$1") : n || r);
  }), t;
}), Jh = Zh;
function Qh(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var dn = Qh, da = Qe, em = dn, tm = ge, rm = Mt, nm = 1 / 0, va = da ? da.prototype : void 0, pa = va ? va.toString : void 0;
function Lo(e) {
  if (typeof e == "string")
    return e;
  if (tm(e))
    return em(e, Lo) + "";
  if (rm(e))
    return pa ? pa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -nm ? "-0" : t;
}
var am = Lo, om = am;
function im(e) {
  return e == null ? "" : om(e);
}
var sm = im, lm = ge, cm = un, um = Jh, fm = sm;
function dm(e, t) {
  return lm(e) ? e : cm(e, t) ? [e] : um(fm(e));
}
var cr = dm, vm = Mt, pm = 1 / 0;
function hm(e) {
  if (typeof e == "string" || vm(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -pm ? "-0" : t;
}
var Pt = hm, mm = cr, gm = Pt;
function ym(e, t) {
  t = mm(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[gm(t[r++])];
  return r && r == n ? e : void 0;
}
var ur = ym, bm = ur;
function wm(e, t, r) {
  var n = e == null ? void 0 : bm(e, t);
  return n === void 0 ? r : n;
}
var $m = wm;
function Sm(e, t) {
  return e != null && t in Object(e);
}
var _m = Sm, Dm = cr, Em = an, Om = ge, Tm = Vr, Mm = qr, Am = Pt;
function Cm(e, t, r) {
  t = Dm(t, e);
  for (var n = -1, a = t.length, o = !1; ++n < a; ) {
    var i = Am(t[n]);
    if (!(o = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && Mm(a) && Tm(i, a) && (Om(e) || Em(e)));
}
var Pm = Cm, xm = _m, Rm = Pm;
function km(e, t) {
  return e != null && Rm(e, t, xm);
}
var Im = km, Nm = cn, Lm = $m, Fm = Im, zm = un, jm = ko, Hm = Io, Wm = Pt, Bm = 1, Um = 2;
function Ym(e, t) {
  return zm(e) && jm(t) ? Hm(Wm(e), t) : function(r) {
    var n = Lm(r, e);
    return n === void 0 && n === t ? Fm(r, e) : Nm(t, n, Bm | Um);
  };
}
var Km = Ym;
function Gm(e) {
  return e;
}
var fr = Gm;
function qm(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Vm = qm, Xm = ur;
function Zm(e) {
  return function(t) {
    return Xm(t, e);
  };
}
var Jm = Zm, Qm = Vm, eg = Jm, tg = un, rg = Pt;
function ng(e) {
  return tg(e) ? Qm(rg(e)) : eg(e);
}
var ag = ng, og = Nh, ig = Km, sg = fr, lg = ge, cg = ag;
function ug(e) {
  return typeof e == "function" ? e : e == null ? sg : typeof e == "object" ? lg(e) ? ig(e[0], e[1]) : og(e) : cg(e);
}
var dr = ug, fg = yh, dg = dr, vg = ho, pg = Math.max;
function hg(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = r == null ? 0 : vg(r);
  return a < 0 && (a = pg(n + a, 0)), fg(e, dg(t), a);
}
var mg = hg;
const gg = /* @__PURE__ */ ie(mg);
var yg = Math.ceil, bg = Math.max;
function wg(e, t, r, n) {
  for (var a = -1, o = bg(yg((t - e) / (r || 1)), 0), i = Array(o); o--; )
    i[n ? o : ++a] = e, e += r;
  return i;
}
var $g = wg, Sg = $g, _g = tr, Er = po;
function Dg(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && _g(t, r, n) && (r = n = void 0), t = Er(t), r === void 0 ? (r = t, t = 0) : r = Er(r), n = n === void 0 ? t < r ? 1 : -1 : Er(n), Sg(t, r, n, e);
  };
}
var Eg = Dg, Og = Eg, Tg = Og(), Mg = Tg;
const Ag = /* @__PURE__ */ ie(Mg);
var ha = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Cg(e, t) {
  return !!(e === t || ha(e) && ha(t));
}
function Pg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Cg(e[r], t[r]))
      return !1;
  return !0;
}
function Fo(e, t) {
  t === void 0 && (t = Pg);
  var r = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    if (r && r.lastThis === this && t(a, r.lastArgs))
      return r.lastResult;
    var i = e.apply(this, a);
    return r = {
      lastResult: i,
      lastArgs: a,
      lastThis: this
    }, i;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
var ma = Qe, xg = an, Rg = ge, ga = ma ? ma.isConcatSpreadable : void 0;
function kg(e) {
  return Rg(e) || xg(e) || !!(ga && e && e[ga]);
}
var Ig = kg, Ng = rn, Lg = Ig;
function zo(e, t, r, n, a) {
  var o = -1, i = e.length;
  for (r || (r = Lg), a || (a = []); ++o < i; ) {
    var s = e[o];
    t > 0 && r(s) ? t > 1 ? zo(s, t - 1, r, n, a) : Ng(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var jo = zo;
function Fg(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
      var l = i[e ? s : ++a];
      if (r(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var zg = Fg, jg = zg, Hg = jg(), Wg = Hg, Bg = Wg, Ug = Ct;
function Yg(e, t) {
  return e && Bg(e, t, Ug);
}
var vn = Yg, Kg = Tt;
function Gg(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Kg(r))
      return e(r, n);
    for (var a = r.length, o = t ? a : -1, i = Object(r); (t ? o-- : ++o < a) && n(i[o], o, i) !== !1; )
      ;
    return r;
  };
}
var qg = Gg, Vg = vn, Xg = qg, Zg = Xg(Vg), Jg = Zg, Qg = Jg, ey = Tt;
function ty(e, t) {
  var r = -1, n = ey(e) ? Array(e.length) : [];
  return Qg(e, function(a, o, i) {
    n[++r] = t(a, o, i);
  }), n;
}
var ry = ty;
function ny(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var ay = ny, ya = Mt;
function oy(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, o = ya(e), i = t !== void 0, s = t === null, l = t === t, c = ya(t);
    if (!s && !c && !o && e > t || o && i && l && !s && !c || n && i && l || !r && l || !a)
      return 1;
    if (!n && !o && !c && e < t || c && r && a && !n && !o || s && r && a || !i && a || !l)
      return -1;
  }
  return 0;
}
var iy = oy, sy = iy;
function ly(e, t, r) {
  for (var n = -1, a = e.criteria, o = t.criteria, i = a.length, s = r.length; ++n < i; ) {
    var l = sy(a[n], o[n]);
    if (l) {
      if (n >= s)
        return l;
      var c = r[n];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var cy = ly, Or = dn, uy = ur, fy = dr, dy = ry, vy = ay, py = sr, hy = cy, my = fr, gy = ge;
function yy(e, t, r) {
  t.length ? t = Or(t, function(o) {
    return gy(o) ? function(i) {
      return uy(i, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [my];
  var n = -1;
  t = Or(t, py(fy));
  var a = dy(e, function(o, i, s) {
    var l = Or(t, function(c) {
      return c(o);
    });
    return { criteria: l, index: ++n, value: o };
  });
  return vy(a, function(o, i) {
    return hy(o, i, r);
  });
}
var by = yy;
function wy(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var $y = wy, Sy = $y, ba = Math.max;
function _y(e, t, r) {
  return t = ba(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = ba(n.length - t, 0), i = Array(o); ++a < o; )
      i[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = n[a];
    return s[t] = r(i), Sy(e, this, s);
  };
}
var Ho = _y;
function Dy(e) {
  return function() {
    return e;
  };
}
var Ey = Dy, Oy = Ye, Ty = function() {
  try {
    var e = Oy(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wo = Ty, My = Ey, wa = Wo, Ay = fr, Cy = wa ? function(e, t) {
  return wa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: My(t),
    writable: !0
  });
} : Ay, Py = Cy, xy = 800, Ry = 16, ky = Date.now;
function Iy(e) {
  var t = 0, r = 0;
  return function() {
    var n = ky(), a = Ry - (n - r);
    if (r = n, a > 0) {
      if (++t >= xy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Ny = Iy, Ly = Py, Fy = Ny, zy = Fy(Ly), Bo = zy, jy = fr, Hy = Ho, Wy = Bo;
function By(e, t) {
  return Wy(Hy(e, t, jy), e + "");
}
var Uo = By, Uy = jo, Yy = by, Ky = Uo, $a = tr, Gy = Ky(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && $a(e, t[0], t[1]) ? t = [] : r > 2 && $a(t[0], t[1], t[2]) && (t = [t[0]]), Yy(e, Uy(t, 1), []);
}), qy = Gy;
const Vy = /* @__PURE__ */ ie(qy);
function zr(e, t) {
  var r = Xr(e);
  return r ? r.innerWidth : t ? e.clientWidth : Fe(e).width;
}
function Yo(e) {
  return Va(e) || co(e) || Ur(e) || Xa();
}
function Xy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ko = Xy, Sa = Wo;
function Zy(e, t, r) {
  t == "__proto__" && Sa ? Sa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var pn = Zy, Jy = pn, Qy = Ot, eb = Object.prototype, tb = eb.hasOwnProperty;
function rb(e, t, r) {
  var n = e[t];
  (!(tb.call(e, t) && Qy(n, r)) || r === void 0 && !(t in e)) && Jy(e, t, r);
}
var Go = rb, nb = Go, ab = pn;
function ob(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var s = t[o], l = n ? n(r[s], e[s], s, r, e) : void 0;
    l === void 0 && (l = e[s]), a ? ab(r, s, l) : nb(r, s, l);
  }
  return r;
}
var xt = ob, ib = xt, sb = Ct;
function lb(e, t) {
  return e && ib(t, sb(t), e);
}
var cb = lb;
function ub(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var fb = ub, db = Me, vb = ln, pb = fb, hb = Object.prototype, mb = hb.hasOwnProperty;
function gb(e) {
  if (!db(e))
    return pb(e);
  var t = vb(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !mb.call(e, n)) || r.push(n);
  return r;
}
var yb = gb, bb = Mo, wb = yb, $b = Tt;
function Sb(e) {
  return $b(e) ? bb(e, !0) : wb(e);
}
var vr = Sb, _b = xt, Db = vr;
function Eb(e, t) {
  return e && _b(t, Db(t), e);
}
var Ob = Eb, Xt = { exports: {} };
Xt.exports;
(function(e, t) {
  var r = Se, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, i = o ? r.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var f = c.length, d = s ? s(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(Xt, Xt.exports);
var Tb = Xt.exports;
function Mb(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ab = Mb, Cb = xt, Pb = nn;
function xb(e, t) {
  return Cb(e, Pb(e), t);
}
var Rb = xb, kb = Ao, Ib = kb(Object.getPrototypeOf, Object), pr = Ib, Nb = rn, Lb = pr, Fb = nn, zb = Oo, jb = Object.getOwnPropertySymbols, Hb = jb ? function(e) {
  for (var t = []; e; )
    Nb(t, Fb(e)), e = Lb(e);
  return t;
} : zb, qo = Hb, Wb = xt, Bb = qo;
function Ub(e, t) {
  return Wb(e, Bb(e), t);
}
var Yb = Ub, Kb = Eo, Gb = qo, qb = vr;
function Vb(e) {
  return Kb(e, qb, Gb);
}
var Vo = Vb, Xb = Object.prototype, Zb = Xb.hasOwnProperty;
function Jb(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Zb.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Qb = Jb, _a = Do;
function ew(e) {
  var t = new e.constructor(e.byteLength);
  return new _a(t).set(new _a(e)), t;
}
var hn = ew, tw = hn;
function rw(e, t) {
  var r = t ? tw(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var nw = rw, aw = /\w*$/;
function ow(e) {
  var t = new e.constructor(e.source, aw.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var iw = ow, Da = Qe, Ea = Da ? Da.prototype : void 0, Oa = Ea ? Ea.valueOf : void 0;
function sw(e) {
  return Oa ? Object(Oa.call(e)) : {};
}
var lw = sw, cw = hn;
function uw(e, t) {
  var r = t ? cw(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var fw = uw, dw = hn, vw = nw, pw = iw, hw = lw, mw = fw, gw = "[object Boolean]", yw = "[object Date]", bw = "[object Map]", ww = "[object Number]", $w = "[object RegExp]", Sw = "[object Set]", _w = "[object String]", Dw = "[object Symbol]", Ew = "[object ArrayBuffer]", Ow = "[object DataView]", Tw = "[object Float32Array]", Mw = "[object Float64Array]", Aw = "[object Int8Array]", Cw = "[object Int16Array]", Pw = "[object Int32Array]", xw = "[object Uint8Array]", Rw = "[object Uint8ClampedArray]", kw = "[object Uint16Array]", Iw = "[object Uint32Array]";
function Nw(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Ew:
      return dw(e);
    case gw:
    case yw:
      return new n(+e);
    case Ow:
      return vw(e, r);
    case Tw:
    case Mw:
    case Aw:
    case Cw:
    case Pw:
    case xw:
    case Rw:
    case kw:
    case Iw:
      return mw(e, r);
    case bw:
      return new n();
    case ww:
    case _w:
      return new n(e);
    case $w:
      return pw(e);
    case Sw:
      return new n();
    case Dw:
      return hw(e);
  }
}
var Lw = Nw, Fw = Me, Ta = Object.create, zw = function() {
  function e() {
  }
  return function(t) {
    if (!Fw(t))
      return {};
    if (Ta)
      return Ta(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Xo = zw, jw = Xo, Hw = pr, Ww = ln;
function Bw(e) {
  return typeof e.constructor == "function" && !Ww(e) ? jw(Hw(e)) : {};
}
var Uw = Bw, Yw = lr, Kw = Ie, Gw = "[object Map]";
function qw(e) {
  return Kw(e) && Yw(e) == Gw;
}
var Vw = qw, Xw = Vw, Zw = sr, Ma = on, Aa = Ma && Ma.isMap, Jw = Aa ? Zw(Aa) : Xw, Qw = Jw, e$ = lr, t$ = Ie, r$ = "[object Set]";
function n$(e) {
  return t$(e) && e$(e) == r$;
}
var a$ = n$, o$ = a$, i$ = sr, Ca = on, Pa = Ca && Ca.isSet, s$ = Pa ? i$(Pa) : o$, l$ = s$, c$ = tn, u$ = Ko, f$ = Go, d$ = cb, v$ = Ob, p$ = Tb, h$ = Ab, m$ = Rb, g$ = Yb, y$ = Co, b$ = Vo, w$ = lr, $$ = Qb, S$ = Lw, _$ = Uw, D$ = ge, E$ = ir, O$ = Qw, T$ = Me, M$ = l$, A$ = Ct, C$ = vr, P$ = 1, x$ = 2, R$ = 4, Zo = "[object Arguments]", k$ = "[object Array]", I$ = "[object Boolean]", N$ = "[object Date]", L$ = "[object Error]", Jo = "[object Function]", F$ = "[object GeneratorFunction]", z$ = "[object Map]", j$ = "[object Number]", Qo = "[object Object]", H$ = "[object RegExp]", W$ = "[object Set]", B$ = "[object String]", U$ = "[object Symbol]", Y$ = "[object WeakMap]", K$ = "[object ArrayBuffer]", G$ = "[object DataView]", q$ = "[object Float32Array]", V$ = "[object Float64Array]", X$ = "[object Int8Array]", Z$ = "[object Int16Array]", J$ = "[object Int32Array]", Q$ = "[object Uint8Array]", e1 = "[object Uint8ClampedArray]", t1 = "[object Uint16Array]", r1 = "[object Uint32Array]", Q = {};
Q[Zo] = Q[k$] = Q[K$] = Q[G$] = Q[I$] = Q[N$] = Q[q$] = Q[V$] = Q[X$] = Q[Z$] = Q[J$] = Q[z$] = Q[j$] = Q[Qo] = Q[H$] = Q[W$] = Q[B$] = Q[U$] = Q[Q$] = Q[e1] = Q[t1] = Q[r1] = !0;
Q[L$] = Q[Jo] = Q[Y$] = !1;
function Ht(e, t, r, n, a, o) {
  var i, s = t & P$, l = t & x$, c = t & R$;
  if (r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)
    return i;
  if (!T$(e))
    return e;
  var u = D$(e);
  if (u) {
    if (i = $$(e), !s)
      return h$(e, i);
  } else {
    var f = w$(e), d = f == Jo || f == F$;
    if (E$(e))
      return p$(e, s);
    if (f == Qo || f == Zo || d && !a) {
      if (i = l || d ? {} : _$(e), !s)
        return l ? g$(e, v$(i, e)) : m$(e, d$(i, e));
    } else {
      if (!Q[f])
        return a ? e : {};
      i = S$(e, f, s);
    }
  }
  o || (o = new c$());
  var h = o.get(e);
  if (h)
    return h;
  o.set(e, i), M$(e) ? e.forEach(function(m) {
    i.add(Ht(m, t, r, m, e, o));
  }) : O$(e) && e.forEach(function(m, y) {
    i.set(y, Ht(m, t, r, y, e, o));
  });
  var p = c ? l ? b$ : y$ : l ? C$ : A$, v = u ? void 0 : p(e);
  return u$(v || e, function(m, y) {
    v && (y = m, m = e[y]), f$(i, y, Ht(m, t, r, y, e, o));
  }), i;
}
var n1 = Ht;
function a1(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var o1 = a1, i1 = ur, s1 = uo;
function l1(e, t) {
  return t.length < 2 ? e : i1(e, s1(t, 0, -1));
}
var c1 = l1, u1 = cr, f1 = o1, d1 = c1, v1 = Pt;
function p1(e, t) {
  return t = u1(t, e), e = d1(e, t), e == null || delete e[v1(f1(t))];
}
var h1 = p1, m1 = et, g1 = pr, y1 = Ie, b1 = "[object Object]", w1 = Function.prototype, $1 = Object.prototype, ei = w1.toString, S1 = $1.hasOwnProperty, _1 = ei.call(Object);
function D1(e) {
  if (!y1(e) || m1(e) != b1)
    return !1;
  var t = g1(e);
  if (t === null)
    return !0;
  var r = S1.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ei.call(r) == _1;
}
var E1 = D1, O1 = E1;
function T1(e) {
  return O1(e) ? void 0 : e;
}
var M1 = T1, A1 = jo;
function C1(e) {
  var t = e == null ? 0 : e.length;
  return t ? A1(e, 1) : [];
}
var P1 = C1, x1 = P1, R1 = Ho, k1 = Bo;
function I1(e) {
  return k1(R1(e, void 0, x1), e + "");
}
var N1 = I1, L1 = dn, F1 = n1, z1 = h1, j1 = cr, H1 = xt, W1 = M1, B1 = N1, U1 = Vo, Y1 = 1, K1 = 2, G1 = 4, q1 = B1(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = L1(t, function(o) {
    return o = j1(o, e), n || (n = o.length > 1), o;
  }), H1(e, U1(e), r), n && (r = F1(r, Y1 | K1 | G1, W1));
  for (var a = t.length; a--; )
    z1(r, t[a]);
  return r;
}), V1 = q1;
const X1 = /* @__PURE__ */ ie(V1);
var Z1 = Uo, J1 = Ot, Q1 = tr, eS = vr, ti = Object.prototype, tS = ti.hasOwnProperty, rS = Z1(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, a = n > 2 ? t[2] : void 0;
  for (a && Q1(t[0], t[1], a) && (n = 1); ++r < n; )
    for (var o = t[r], i = eS(o), s = -1, l = i.length; ++s < l; ) {
      var c = i[s], u = e[c];
      (u === void 0 || J1(u, ti[c]) && !tS.call(e, c)) && (e[c] = o[c]);
    }
  return e;
}), nS = rS;
const aS = /* @__PURE__ */ ie(nS);
var oS = Ko, iS = Xo, sS = vn, lS = dr, cS = pr, uS = ge, fS = ir, dS = Gr, vS = Me, pS = sn;
function hS(e, t, r) {
  var n = uS(e), a = n || fS(e) || pS(e);
  if (t = lS(t), r == null) {
    var o = e && e.constructor;
    a ? r = n ? new o() : [] : vS(e) ? r = dS(o) ? iS(cS(e)) : {} : r = {};
  }
  return (a ? oS : sS)(e, function(i, s, l) {
    return t(r, i, s, l);
  }), r;
}
var mS = hS;
const gS = /* @__PURE__ */ ie(mS);
var yS = pn, bS = vn, wS = dr;
function $S(e, t) {
  var r = {};
  return t = wS(t), bS(e, function(n, a, o) {
    yS(r, a, t(n, a, o));
  }), r;
}
var SS = $S;
const _S = /* @__PURE__ */ ie(SS);
var ri = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    return function(r, n, a) {
      n.prototype.isBetween = function(o, i, s, l) {
        var c = a(o), u = a(i), f = (l = l || "()")[0] === "(", d = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (d ? this.isBefore(u, s) : !this.isAfter(u, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (d ? this.isAfter(u, s) : !this.isBefore(u, s));
      };
    };
  });
})(ri);
var DS = ri.exports;
const ES = /* @__PURE__ */ ie(DS);
var ni = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(ni);
var OS = ni.exports;
const TS = /* @__PURE__ */ ie(OS);
var ai = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(ai);
var MS = ai.exports;
const AS = /* @__PURE__ */ ie(MS);
var oi = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    return function(r, n, a) {
      var o = n.prototype, i = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, d, h, p, v) {
        var m = f.name ? f : f.$locale(), y = i(m[d]), b = i(m[h]), $ = y || b.map(function(_) {
          return _.slice(0, p);
        });
        if (!v)
          return $;
        var w = m.weekStart;
        return $.map(function(_, E) {
          return $[(E + (w || 0)) % 7];
        });
      }, l = function() {
        return a.Ls[a.locale()];
      }, c = function(f, d) {
        return f.formats[d] || function(h) {
          return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, v, m) {
            return v || m.slice(1);
          });
        }(f.formats[d.toUpperCase()]);
      }, u = function() {
        var f = this;
        return { months: function(d) {
          return d ? d.format("MMMM") : s(f, "months");
        }, monthsShort: function(d) {
          return d ? d.format("MMM") : s(f, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return f.$locale().weekStart || 0;
        }, weekdays: function(d) {
          return d ? d.format("dddd") : s(f, "weekdays");
        }, weekdaysMin: function(d) {
          return d ? d.format("dd") : s(f, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(d) {
          return d ? d.format("ddd") : s(f, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(d) {
          return c(f.$locale(), d);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      o.localeData = function() {
        return u.bind(this)();
      }, a.localeData = function() {
        var f = l();
        return { firstDayOfWeek: function() {
          return f.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(d) {
          return c(f, d);
        }, meridiem: f.meridiem, ordinal: f.ordinal };
      }, a.months = function() {
        return s(l(), "months");
      }, a.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, a.weekdays = function(f) {
        return s(l(), "weekdays", null, null, f);
      }, a.weekdaysShort = function(f) {
        return s(l(), "weekdaysShort", "weekdays", 3, f);
      }, a.weekdaysMin = function(f) {
        return s(l(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(oi);
var CS = oi.exports;
const PS = /* @__PURE__ */ ie(CS);
var ii = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var i = a.prototype, s = i.format;
      o.en.formats = r, i.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, u = function(f, d) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, p, v) {
            var m = v && v.toUpperCase();
            return p || d[v] || r[v] || d[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, b, $) {
              return b || $.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, u);
      };
    };
  });
})(ii);
var xS = ii.exports;
const RS = /* @__PURE__ */ ie(xS);
var si = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    return function(r, n, a) {
      var o = function(i, s) {
        if (!s || !s.length || s.length === 1 && !s[0] || s.length === 1 && Array.isArray(s[0]) && !s[0].length)
          return null;
        var l;
        s.length === 1 && s[0].length > 0 && (s = s[0]), l = (s = s.filter(function(u) {
          return u;
        }))[0];
        for (var c = 1; c < s.length; c += 1)
          s[c].isValid() && !s[c][i](l) || (l = s[c]);
        return l;
      };
      a.max = function() {
        var i = [].slice.call(arguments, 0);
        return o("isAfter", i);
      }, a.min = function() {
        var i = [].slice.call(arguments, 0);
        return o("isBefore", i);
      };
    };
  });
})(si);
var kS = si.exports;
const IS = /* @__PURE__ */ ie(kS);
var li = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var l = i.prototype;
      s.utc = function(v) {
        var m = { date: v, utc: !0, args: arguments };
        return new i(m);
      }, l.utc = function(v) {
        var m = s(this.toDate(), { locale: this.$L, utc: !0 });
        return v ? m.add(this.utcOffset(), r) : m;
      }, l.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var c = l.parse;
      l.parse = function(v) {
        v.utc && (this.$u = !0), this.$utils().u(v.$offset) || (this.$offset = v.$offset), c.call(this, v);
      };
      var u = l.init;
      l.init = function() {
        if (this.$u) {
          var v = this.$d;
          this.$y = v.getUTCFullYear(), this.$M = v.getUTCMonth(), this.$D = v.getUTCDate(), this.$W = v.getUTCDay(), this.$H = v.getUTCHours(), this.$m = v.getUTCMinutes(), this.$s = v.getUTCSeconds(), this.$ms = v.getUTCMilliseconds();
        } else
          u.call(this);
      };
      var f = l.utcOffset;
      l.utcOffset = function(v, m) {
        var y = this.$utils().u;
        if (y(v))
          return this.$u ? 0 : y(this.$offset) ? f.call(this) : this.$offset;
        if (typeof v == "string" && (v = function(_) {
          _ === void 0 && (_ = "");
          var E = _.match(n);
          if (!E)
            return null;
          var x = ("" + E[0]).match(a) || ["-", 0, 0], L = x[0], z = 60 * +x[1] + +x[2];
          return z === 0 ? 0 : L === "+" ? z : -z;
        }(v), v === null))
          return this;
        var b = Math.abs(v) <= 16 ? 60 * v : v, $ = this;
        if (m)
          return $.$offset = b, $.$u = v === 0, $;
        if (v !== 0) {
          var w = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          ($ = this.local().add(b + w, r)).$offset = b, $.$x.$localOffset = w;
        } else
          $ = this.utc();
        return $;
      };
      var d = l.format;
      l.format = function(v) {
        var m = v || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return d.call(this, m);
      }, l.valueOf = function() {
        var v = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * v;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var h = l.toDate;
      l.toDate = function(v) {
        return v === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h.call(this);
      };
      var p = l.diff;
      l.diff = function(v, m, y) {
        if (v && this.$u === v.$u)
          return p.call(this, v, m, y);
        var b = this.local(), $ = s(v).local();
        return p.call(b, $, m, y);
      };
    };
  });
})(li);
var NS = li.exports;
const LS = /* @__PURE__ */ ie(NS);
function De(e) {
  return e.children;
}
var he = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
}, fe = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
}, xa = Object.keys(fe).map(function(e) {
  return fe[e];
});
P.oneOfType([P.string, P.func]);
P.any;
P.func;
P.oneOfType([P.arrayOf(P.oneOf(xa)), P.objectOf(function(e, t) {
  var r = xa.indexOf(t) !== -1 && typeof e[t] == "boolean";
  if (r)
    return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  return P.elementType.apply(P, [e, t].concat(a));
})]);
P.oneOfType([P.oneOf(["overlap", "no-overlap"]), P.func]);
function re(e, t) {
  e && e.apply(null, [].concat(t));
}
var Ra = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function ci(e, t) {
  var r = ce(e, "month");
  return ce(r, "week", t.startOfWeek());
}
function ui(e, t) {
  var r = Yt(e, "month");
  return Yt(r, "week", t.startOfWeek());
}
function FS(e, t) {
  for (var r = ci(e, t), n = ui(e, t), a = []; Ze(r, n, "day"); )
    a.push(r), r = ye(r, 1, "day");
  return a;
}
function zS(e, t) {
  var r = ce(e, t);
  return Dt(r, e) ? r : ye(r, 1, t);
}
function jS(e, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", n = e, a = []; Ze(n, t, r); )
    a.push(n), n = ye(n, 1, r);
  return a;
}
function HS(e, t) {
  return t == null && e == null ? null : (t == null && (t = /* @__PURE__ */ new Date()), e == null && (e = /* @__PURE__ */ new Date()), e = ce(e, "day"), e = wt(e, wt(t)), e = Xe(e, Xe(t)), e = bt(e, bt(t)), yt(e, yt(t)));
}
function ka(e) {
  return wt(e) === 0 && Xe(e) === 0 && bt(e) === 0 && yt(e) === 0;
}
function WS(e, t, r, n) {
  return r === "day" && (r = "date"), Math.abs(
    // eslint-disable-next-line import/namespace
    On[r](e, void 0, n) - // eslint-disable-next-line import/namespace
    On[r](t, void 0, n)
  );
}
function mn(e, t, r) {
  return !r || r === "milliseconds" ? Math.abs(+e - +t) : Math.round(Math.abs(+ce(e, r) / Ra[r] - +ce(t, r) / Ra[r]));
}
var BS = P.oneOfType([P.string, P.func]);
function US(e, t, r, n, a) {
  var o = typeof n == "function" ? n(r, a, e) : t.call(e, r, n, a);
  return dt(o == null || typeof o == "string", "`localizer format(..)` must return a string, null, or undefined"), o;
}
function YS(e, t, r) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, t + r, 0, 0);
}
function gn(e, t) {
  return e.getTimezoneOffset() - t.getTimezoneOffset();
}
function KS(e, t) {
  return mn(e, t, "minutes") + gn(e, t);
}
function GS(e) {
  var t = ce(e, "day");
  return mn(t, e, "minutes") + gn(t, e);
}
function qS(e, t) {
  return Kr(e, t, "day");
}
function VS(e, t, r) {
  var n = Dt(e, t, "minutes");
  return n ? Et(t, r, "minutes") : er(t, r, "minutes");
}
function jr(e, t) {
  return WS(e, t, "day");
}
function XS(e) {
  var t = e.evtA, r = t.start, n = t.end, a = t.allDay, o = e.evtB, i = o.start, s = o.end, l = o.allDay, c = +ce(r, "day") - +ce(i, "day"), u = jr(r, n), f = jr(i, s);
  return c || // sort by start Day first
  f - u || // events spanning multiple days go first
  !!l - !!a || // then allDay single day events
  +r - +i || // then sort by start time
  +n - +s;
}
function ZS(e) {
  var t = e.event, r = t.start, n = t.end, a = e.range, o = a.start, i = a.end, s = ce(r, "day"), l = Ze(s, i, "day"), c = Yr(s, n, "minutes"), u = c ? er(n, o, "minutes") : Et(n, o, "minutes");
  return l && u;
}
function JS(e, t) {
  return Dt(e, t, "day");
}
function QS(e, t) {
  return ka(e) && ka(t);
}
var e_ = /* @__PURE__ */ le(function e(t) {
  var r = this;
  se(this, e), dt(typeof t.format == "function", "date localizer `format(..)` must be a function"), dt(typeof t.firstOfWeek == "function", "date localizer `firstOfWeek(..)` must be a function"), this.propType = t.propType || BS, this.formats = t.formats, this.format = function() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return US.apply(void 0, [r, t.format].concat(a));
  }, this.startOfWeek = t.firstOfWeek, this.merge = t.merge || HS, this.inRange = t.inRange || oo, this.lt = t.lt || Kr, this.lte = t.lte || Ze, this.gt = t.gt || er, this.gte = t.gte || Et, this.eq = t.eq || Dt, this.neq = t.neq || Yr, this.startOf = t.startOf || ce, this.endOf = t.endOf || Yt, this.add = t.add || ye, this.range = t.range || jS, this.diff = t.diff || mn, this.ceil = t.ceil || zS, this.min = t.min || no, this.max = t.max || ao, this.minutes = t.minutes || Xe, this.daySpan = t.daySpan || jr, this.firstVisibleDay = t.firstVisibleDay || ci, this.lastVisibleDay = t.lastVisibleDay || ui, this.visibleDays = t.visibleDays || FS, this.getSlotDate = t.getSlotDate || YS, this.getTimezoneOffset = t.getTimezoneOffset || function(n) {
    return n.getTimezoneOffset();
  }, this.getDstOffset = t.getDstOffset || gn, this.getTotalMin = t.getTotalMin || KS, this.getMinutesFromMidnight = t.getMinutesFromMidnight || GS, this.continuesPrior = t.continuesPrior || qS, this.continuesAfter = t.continuesAfter || VS, this.sortEvents = t.sortEvents || XS, this.inEventRange = t.inEventRange || ZS, this.isSameDate = t.isSameDate || JS, this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || QS, this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0;
});
function t_(e, t, r, n) {
  var a = J(J({}, e.formats), r);
  return J(J({}, e), {}, {
    messages: n,
    startOfWeek: function() {
      return e.startOfWeek(t);
    },
    format: function(i, s) {
      return e.format(i, a[s] || s, t);
    }
  });
}
var r_ = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "All Day",
  week: "Week",
  work_week: "Work Week",
  day: "Day",
  month: "Month",
  previous: "Back",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "There are no events in this range.",
  showMore: function(t) {
    return "+".concat(t, " more");
  }
};
function n_(e) {
  return J(J({}, r_), e);
}
function a_(e) {
  var t = e.ref, r = e.callback;
  H.useEffect(function() {
    var n = function(o) {
      t.current && !t.current.contains(o.target) && r();
    };
    return document.addEventListener("mousedown", n), function() {
      document.removeEventListener("mousedown", n);
    };
  }, [t, r]);
}
var o_ = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], fi = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.style, o = n.className, i = n.event, s = n.selected, l = n.isAllDay, c = n.onSelect, u = n.onDoubleClick, f = n.onKeyPress, d = n.localizer, h = n.continuesPrior, p = n.continuesAfter, v = n.accessors, m = n.getters, y = n.children, b = n.components, $ = b.event, w = b.eventWrapper, _ = n.slotStart, E = n.slotEnd, x = $e(n, o_);
      delete x.resizable;
      var L = v.title(i), z = v.tooltip(i), A = v.end(i), M = v.start(i), j = v.allDay(i), Y = l || j || d.diff(M, d.ceil(A, "day"), "day") > 1, F = m.eventProp(i, M, A, s), C = /* @__PURE__ */ g.createElement("div", {
        className: "rbc-event-content",
        title: z || void 0
      }, $ ? /* @__PURE__ */ g.createElement($, {
        event: i,
        continuesPrior: h,
        continuesAfter: p,
        title: L,
        isAllDay: j,
        localizer: d,
        slotStart: _,
        slotEnd: E
      }) : L);
      return /* @__PURE__ */ g.createElement(w, Object.assign({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ g.createElement("div", Object.assign({}, x, {
        style: J(J({}, F.style), a),
        className: oe("rbc-event", o, F.className, {
          "rbc-selected": s,
          "rbc-event-allday": Y,
          "rbc-event-continues-prior": h,
          "rbc-event-continues-after": p
        }),
        onClick: function(I) {
          return c && c(i, I);
        },
        onDoubleClick: function(I) {
          return u && u(i, I);
        },
        onKeyDown: function(I) {
          return f && f(i, I);
        }
      }), typeof y == "function" ? y(C) : C));
    }
  }]), t;
}(g.Component);
function hr(e, t) {
  return !e || t == null ? !1 : mh(e, t);
}
function di(e, t) {
  var r = e.right - e.left, n = r / t;
  return n;
}
function vi(e, t, r, n) {
  var a = di(e, n);
  return r ? n - 1 - Math.floor((t - e.left) / a) : Math.floor((t - e.left) / a);
}
function i_(e, t) {
  var r = t.x, n = t.y;
  return n >= e.top && n <= e.bottom && r >= e.left && r <= e.right;
}
function s_(e, t, r, n, a) {
  var o = -1, i = -1, s = n - 1, l = di(t, n), c = vi(t, r.x, a, n), u = t.top < r.y && t.bottom > r.y, f = t.top < e.y && t.bottom > e.y, d = e.y > t.bottom, h = t.top > e.y, p = r.top < t.top && r.bottom > t.bottom;
  return p && (o = 0, i = s), u && (h ? (o = 0, i = c) : d && (o = c, i = s)), f && (o = i = a ? s - Math.floor((e.x - t.left) / l) : Math.floor((e.x - t.left) / l), u ? c < o ? o = c : i = c : e.y < r.y ? i = s : o = 0), {
    startIdx: o,
    endIdx: i
  };
}
function l_(e) {
  var t = e.target, r = e.offset, n = e.container, a = e.box, o = Fe(t), i = o.top, s = o.left, l = o.width, c = o.height, u = Fe(n), f = u.top, d = u.left, h = u.width, p = u.height, v = Fe(a), m = v.width, y = v.height, b = f + p, $ = d + h, w = i + y, _ = s + m, E = r.x, x = r.y, L = w > b ? i - y - x : i + x + c, z = _ > $ ? s + E - m + l : s + E;
  return {
    topOffset: L,
    leftOffset: z
  };
}
function c_(e) {
  var t = e.containerRef, r = e.accessors, n = e.getters, a = e.selected, o = e.components, i = e.localizer, s = e.position, l = e.show, c = e.events, u = e.slotStart, f = e.slotEnd, d = e.onSelect, h = e.onDoubleClick, p = e.onKeyPress, v = e.handleDragStart, m = e.popperRef, y = e.target, b = e.offset;
  a_({
    ref: m,
    callback: l
  }), H.useLayoutEffect(function() {
    var _ = l_({
      target: y,
      offset: b,
      container: t.current,
      box: m.current
    }), E = _.topOffset, x = _.leftOffset;
    m.current.style.top = "".concat(E, "px"), m.current.style.left = "".concat(x, "px");
  }, [b.x, b.y, y]);
  var $ = s.width, w = {
    minWidth: $ + $ / 2
  };
  return /* @__PURE__ */ g.createElement("div", {
    style: w,
    className: "rbc-overlay",
    ref: m
  }, /* @__PURE__ */ g.createElement("div", {
    className: "rbc-overlay-header"
  }, i.format(u, "dayHeaderFormat")), c.map(function(_, E) {
    return /* @__PURE__ */ g.createElement(fi, {
      key: E,
      type: "popup",
      localizer: i,
      event: _,
      getters: n,
      onSelect: d,
      accessors: r,
      components: o,
      onDoubleClick: h,
      onKeyPress: p,
      continuesPrior: i.lt(r.end(_), u, "day"),
      continuesAfter: i.gte(r.start(_), f, "day"),
      slotStart: u,
      slotEnd: f,
      selected: hr(_, a),
      draggable: !0,
      onDragStart: function() {
        return v(_);
      },
      onDragEnd: function() {
        return l();
      }
    });
  }));
}
var pi = /* @__PURE__ */ g.forwardRef(function(e, t) {
  return /* @__PURE__ */ g.createElement(c_, Object.assign({}, e, {
    popperRef: t
  }));
});
pi.propTypes = {
  accessors: P.object.isRequired,
  getters: P.object.isRequired,
  selected: P.object,
  components: P.object.isRequired,
  localizer: P.object.isRequired,
  position: P.object.isRequired,
  show: P.func.isRequired,
  events: P.array.isRequired,
  slotStart: P.instanceOf(Date).isRequired,
  slotEnd: P.instanceOf(Date),
  onSelect: P.func,
  onDoubleClick: P.func,
  onKeyPress: P.func,
  handleDragStart: P.func,
  style: P.object,
  offset: P.shape({
    x: P.number,
    y: P.number
  })
};
function u_(e) {
  var t = e.containerRef, r = e.popupOffset, n = r === void 0 ? 5 : r, a = e.overlay, o = e.accessors, i = e.localizer, s = e.components, l = e.getters, c = e.selected, u = e.handleSelectEvent, f = e.handleDoubleClickEvent, d = e.handleKeyPressEvent, h = e.handleDragStart, p = e.onHide, v = e.overlayDisplay, m = H.useRef(null);
  if (!a.position)
    return null;
  var y = n;
  isNaN(n) || (y = {
    x: n,
    y: n
  });
  var b = a.position, $ = a.events, w = a.date, _ = a.end;
  return /* @__PURE__ */ g.createElement(Wc, {
    rootClose: !0,
    flip: !0,
    show: !0,
    placement: "bottom",
    onHide: p,
    target: a.target
  }, function(E) {
    var x = E.props;
    return /* @__PURE__ */ g.createElement(pi, Object.assign({}, x, {
      containerRef: t,
      ref: m,
      target: a.target,
      offset: y,
      accessors: o,
      getters: l,
      selected: c,
      components: s,
      localizer: i,
      position: b,
      show: v,
      events: $,
      slotStart: w,
      slotEnd: _,
      onSelect: u,
      onDoubleClick: f,
      onKeyPress: d,
      handleDragStart: h
    }));
  });
}
var yn = /* @__PURE__ */ g.forwardRef(function(e, t) {
  return /* @__PURE__ */ g.createElement(u_, Object.assign({}, e, {
    containerRef: t
  }));
});
yn.propTypes = {
  popupOffset: P.oneOfType([P.number, P.shape({
    x: P.number,
    y: P.number
  })]),
  overlay: P.shape({
    position: P.object,
    events: P.array,
    date: P.instanceOf(Date),
    end: P.instanceOf(Date)
  }),
  accessors: P.object.isRequired,
  localizer: P.object.isRequired,
  components: P.object.isRequired,
  getters: P.object.isRequired,
  selected: P.object,
  handleSelectEvent: P.func,
  handleDoubleClickEvent: P.func,
  handleKeyPressEvent: P.func,
  handleDragStart: P.func,
  onHide: P.func,
  overlayDisplay: P.func
};
function ue(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return ft(r, e, t, {
    passive: !1
  });
}
function f_(e, t, r) {
  return !e || $t(e, document.elementFromPoint(t, r));
}
function d_(e, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return Ro(a, ".rbc-event", e);
}
function v_(e, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return Ro(a, ".rbc-show-more", e);
}
function Zt(e, t) {
  return !!d_(e, t);
}
function p_(e, t) {
  return !!v_(e, t);
}
function ut(e) {
  var t = e;
  return e.touches && e.touches.length && (t = e.touches[0]), {
    clientX: t.clientX,
    clientY: t.clientY,
    pageX: t.pageX,
    pageY: t.pageY
  };
}
var Ia = 5, h_ = 250, hi = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.global, a = n === void 0 ? !1 : n, o = r.longPressThreshold, i = o === void 0 ? 250 : o, s = r.validContainers, l = s === void 0 ? [] : s;
    se(this, e), this._initialEvent = null, this.selecting = !1, this.isDetached = !1, this.container = t, this.globalMouse = !t || a, this.longPressThreshold = i, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = ue("touchmove", function() {
    }, window), this._removeKeyDownListener = ue("keydown", this._keyListener), this._removeKeyUpListener = ue("keyup", this._keyListener), this._removeDropFromOutsideListener = ue("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = ue("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return le(e, [{
    key: "on",
    value: function(r, n) {
      var a = this._listeners[r] || (this._listeners[r] = []);
      return a.push(n), {
        remove: function() {
          var i = a.indexOf(n);
          i !== -1 && a.splice(i, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function(r) {
      for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        a[o - 1] = arguments[o];
      var i, s = this._listeners[r] || [];
      return s.forEach(function(l) {
        i === void 0 && (i = l.apply(void 0, a));
      }), i;
    }
  }, {
    key: "teardown",
    value: function() {
      this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = !1, this._lastClickData = null, this.isDetached = !0, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function(r) {
      var n = this._selectRect;
      return !n || !this.selecting ? !1 : Na(n, Ue(r));
    }
  }, {
    key: "filter",
    value: function(r) {
      var n = this._selectRect;
      return !n || !this.selecting ? [] : r.filter(this.isSelected, this);
    }
    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function(r, n) {
      var a = this, o = null, i = null, s = null, l = function(d) {
        o = setTimeout(function() {
          u(), r(d);
        }, a.longPressThreshold), i = ue("touchmove", function() {
          return u();
        }), s = ue("touchend", function() {
          return u();
        });
      }, c = ue("touchstart", l), u = function() {
        o && clearTimeout(o), i && i(), s && s(), o = null, i = null, s = null;
      };
      return n && l(n), function() {
        u(), c();
      };
    }
    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function() {
      var r = this, n = ue("mousedown", function(o) {
        r._removeInitialEventListener(), r._handleInitialEvent(o), r._removeInitialEventListener = ue("mousedown", r._handleInitialEvent);
      }), a = ue("touchstart", function(o) {
        r._removeInitialEventListener(), r._removeInitialEventListener = r._addLongPressListener(r._handleInitialEvent, o);
      });
      this._removeInitialEventListener = function() {
        n(), a();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function(r) {
      var n = ut(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
      this.emit("dropFromOutside", {
        x: a,
        y: o,
        clientX: i,
        clientY: s
      }), r.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function(r) {
      var n = ut(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
      this.emit("dragOverFromOutside", {
        x: a,
        y: o,
        clientX: i,
        clientY: s
      }), r.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function(r) {
      if (this._initialEvent = r, !this.isDetached) {
        var n = ut(r), a = n.clientX, o = n.clientY, i = n.pageX, s = n.pageY, l = this.container(), c, u;
        if (!(r.which === 3 || r.button === 2 || !f_(l, a, o))) {
          if (!this.globalMouse && l && !$t(l, r.target)) {
            var f = m_(0), d = f.top, h = f.left, p = f.bottom, v = f.right;
            if (u = Ue(l), c = Na({
              top: u.top - d,
              left: u.left - h,
              bottom: u.bottom + p,
              right: u.right + v
            }, {
              top: s,
              left: i
            }), !c)
              return;
          }
          var m = this.emit("beforeSelect", this._initialEventData = {
            isTouch: /^touch/.test(r.type),
            x: i,
            y: s,
            clientX: a,
            clientY: o
          });
          if (m !== !1)
            switch (r.type) {
              case "mousedown":
                this._removeEndListener = ue("mouseup", this._handleTerminatingEvent), this._onEscListener = ue("keydown", this._handleTerminatingEvent), this._removeMoveListener = ue("mousemove", this._handleMoveEvent);
                break;
              case "touchstart":
                this._handleMoveEvent(r), this._removeEndListener = ue("touchend", this._handleTerminatingEvent), this._removeMoveListener = ue("touchmove", this._handleMoveEvent);
                break;
            }
        }
      }
    }
    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function(r) {
      var n = r.target, a = this.validContainers;
      return !a || !a.length || !n ? !0 : a.some(function(o) {
        return !!n.closest(o);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function(r) {
      var n = this.selecting, a = this._selectRect;
      if (!n && r.type.includes("key") && (r = this._initialEvent), this.selecting = !1, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!r) {
        var o = !this.container || $t(this.container(), r.target), i = this._isWithinValidContainer(r);
        return r.key === "Escape" || !i ? this.emit("reset") : !n && o ? this._handleClickEvent(r) : n ? this.emit("select", a) : this.emit("reset");
      }
    }
  }, {
    key: "_handleClickEvent",
    value: function(r) {
      var n = ut(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
      return this._lastClickData && l - this._lastClickData.timestamp < h_ ? (this._lastClickData = null, this.emit("doubleClick", {
        x: a,
        y: o,
        clientX: i,
        clientY: s
      })) : (this._lastClickData = {
        timestamp: l
      }, this.emit("click", {
        x: a,
        y: o,
        clientX: i,
        clientY: s
      }));
    }
  }, {
    key: "_handleMoveEvent",
    value: function(r) {
      if (!(this._initialEventData === null || this.isDetached)) {
        var n = this._initialEventData, a = n.x, o = n.y, i = ut(r), s = i.pageX, l = i.pageY, c = Math.abs(a - s), u = Math.abs(o - l), f = Math.min(s, a), d = Math.min(l, o), h = this.selecting, p = this.isClick(s, l);
        p && !h && !(c || u) || (!h && !p && this.emit("selectStart", this._initialEventData), p || (this.selecting = !0, this._selectRect = {
          top: d,
          left: f,
          x: s,
          y: l,
          right: f + c,
          bottom: d + u
        }, this.emit("selecting", this._selectRect)), r.preventDefault());
      }
    }
  }, {
    key: "_keyListener",
    value: function(r) {
      this.ctrl = r.metaKey || r.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function(r, n) {
      var a = this._initialEventData, o = a.x, i = a.y, s = a.isTouch;
      return !s && Math.abs(r - o) <= Ia && Math.abs(n - i) <= Ia;
    }
  }]), e;
}();
function m_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return Te(e) !== "object" && (e = {
    top: e,
    left: e,
    right: e,
    bottom: e
  }), e;
}
function Na(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = Ue(e), a = n.top, o = n.left, i = n.right, s = i === void 0 ? o : i, l = n.bottom, c = l === void 0 ? a : l, u = Ue(t), f = u.top, d = u.left, h = u.right, p = h === void 0 ? d : h, v = u.bottom, m = v === void 0 ? f : v;
  return !// 'a' bottom doesn't touch 'b' top
  (c - r < f || // 'a' top doesn't touch 'b' bottom
  a + r > m || // 'a' right doesn't touch 'b' left
  s - r < d || // 'a' left doesn't touch 'b' right
  o + r > p);
}
function Ue(e) {
  if (!e.getBoundingClientRect)
    return e;
  var t = e.getBoundingClientRect(), r = t.left + La("left"), n = t.top + La("top");
  return {
    top: n,
    left: r,
    right: (e.offsetWidth || 0) + r,
    bottom: (e.offsetHeight || 0) + n
  };
}
function La(e) {
  if (e === "left")
    return window.pageXOffset || document.body.scrollLeft || 0;
  if (e === "top")
    return window.pageYOffset || document.body.scrollTop || 0;
}
var g_ = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t(r, n) {
    var a;
    return se(this, t), a = de(this, t, [r, n]), a.state = {
      selecting: !1
    }, a.containerRef = /* @__PURE__ */ H.createRef(), a;
  }
  return le(t, [{
    key: "componentDidMount",
    value: function() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      !n.selectable && this.props.selectable && this._selectable(), n.selectable && !this.props.selectable && this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.range, o = n.getNow, i = n.getters, s = n.date, l = n.components.dateCellWrapper, c = n.localizer, u = this.state, f = u.selecting, d = u.startIdx, h = u.endIdx, p = o();
      return /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, a.map(function(v, m) {
        var y = f && m >= d && m <= h, b = i.dayProp(v), $ = b.className, w = b.style;
        return /* @__PURE__ */ g.createElement(l, {
          key: m,
          value: v,
          range: a
        }, /* @__PURE__ */ g.createElement("div", {
          style: w,
          className: oe("rbc-day-bg", $, y && "rbc-selected-cell", c.isSameDate(v, p) && "rbc-today", s && c.neq(s, v, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function() {
      var n = this, a = this.containerRef.current, o = this._selector = new hi(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      }), i = function(l, c) {
        if (!Zt(a, l) && !p_(a, l)) {
          var u = Ue(a), f = n.props, d = f.range, h = f.rtl;
          if (i_(u, l)) {
            var p = vi(u, l.x, h, d.length);
            n._selectSlot({
              startIdx: p,
              endIdx: p,
              action: c,
              box: l
            });
          }
        }
        n._initial = {}, n.setState({
          selecting: !1
        });
      };
      o.on("selecting", function(s) {
        var l = n.props, c = l.range, u = l.rtl, f = -1, d = -1;
        if (n.state.selecting || (re(n.props.onSelectStart, [s]), n._initial = {
          x: s.x,
          y: s.y
        }), o.isSelected(a)) {
          var h = Ue(a), p = s_(n._initial, h, s, c.length, u);
          f = p.startIdx, d = p.endIdx;
        }
        n.setState({
          selecting: !0,
          startIdx: f,
          endIdx: d
        });
      }), o.on("beforeSelect", function(s) {
        if (n.props.selectable === "ignoreEvents")
          return !Zt(n.containerRef.current, s);
      }), o.on("click", function(s) {
        return i(s, "click");
      }), o.on("doubleClick", function(s) {
        return i(s, "doubleClick");
      }), o.on("select", function(s) {
        n._selectSlot(J(J({}, n.state), {}, {
          action: "select",
          bounds: s
        })), n._initial = {}, n.setState({
          selecting: !1
        }), re(n.props.onSelectEnd, [n.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function() {
      this._selector && (this._selector.teardown(), this._selector = null);
    }
  }, {
    key: "_selectSlot",
    value: function(n) {
      var a = n.endIdx, o = n.startIdx, i = n.action, s = n.bounds, l = n.box;
      a !== -1 && o !== -1 && this.props.onSelectSlot && this.props.onSelectSlot({
        start: o,
        end: a,
        action: i,
        bounds: s,
        box: l,
        resourceId: this.props.resourceId
      });
    }
  }]), t;
}(g.Component), we = {
  propTypes: {
    slotMetrics: P.object.isRequired,
    selected: P.object,
    isAllDay: P.bool,
    accessors: P.object.isRequired,
    localizer: P.object.isRequired,
    components: P.object.isRequired,
    getters: P.object.isRequired,
    onSelect: P.func,
    onDoubleClick: P.func,
    onKeyPress: P.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function(t, r) {
    var n = t.selected;
    t.isAllDay;
    var a = t.accessors, o = t.getters, i = t.onSelect, s = t.onDoubleClick, l = t.onKeyPress, c = t.localizer, u = t.slotMetrics, f = t.components, d = t.resizable, h = u.continuesPrior(r), p = u.continuesAfter(r);
    return /* @__PURE__ */ g.createElement(fi, {
      event: r,
      getters: o,
      localizer: c,
      accessors: a,
      components: f,
      onSelect: i,
      onDoubleClick: s,
      onKeyPress: l,
      continuesPrior: h,
      continuesAfter: p,
      slotStart: u.first,
      slotEnd: u.last,
      selected: hr(r, n),
      resizable: d
    });
  },
  renderSpan: function(t, r, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", o = Math.abs(r) / t * 100 + "%";
    return /* @__PURE__ */ g.createElement("div", {
      key: n,
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: o,
        flexBasis: o,
        maxWidth: o
      }
    }, a);
  }
}, mi = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, o = a.segments, i = a.slotMetrics.slots, s = a.className, l = 1;
      return /* @__PURE__ */ g.createElement("div", {
        className: oe(s, "rbc-row")
      }, o.reduce(function(c, u, f) {
        var d = u.event, h = u.left, p = u.right, v = u.span, m = "_lvl_" + f, y = h - l, b = we.renderEvent(n.props, d);
        return y && c.push(we.renderSpan(i, y, "".concat(m, "_gap"))), c.push(we.renderSpan(i, v, m, b)), l = p + 1, c;
      }, []));
    }
  }]), t;
}(g.Component);
mi.defaultProps = J({}, we.defaultProps);
function gi(e) {
  var t = e.dateRange, r = e.unit, n = r === void 0 ? "day" : r, a = e.localizer;
  return {
    first: t[0],
    last: a.add(t[t.length - 1], 1, n)
  };
}
function y_(e, t, r, n) {
  var a = gi({
    dateRange: t,
    localizer: n
  }), o = a.first, i = a.last, s = n.diff(o, i, "day"), l = n.max(n.startOf(r.start(e), "day"), o), c = n.min(n.ceil(r.end(e), "day"), i), u = gg(t, function(d) {
    return n.isSameDate(d, l);
  }), f = n.diff(l, c, "day");
  return f = Math.min(f, s), f = Math.max(f - n.segmentOffset, 1), {
    event: e,
    span: f,
    left: u + 1,
    right: Math.max(u + f, 1)
  };
}
function yi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, r, n, a, o = [], i = [];
  for (r = 0; r < e.length; r++) {
    for (a = e[r], n = 0; n < o.length && b_(a, o[n]); n++)
      ;
    n >= t ? i.push(a) : (o[n] || (o[n] = [])).push(a);
  }
  for (r = 0; r < o.length; r++)
    o[r].sort(function(s, l) {
      return s.left - l.left;
    });
  return {
    levels: o,
    extra: i
  };
}
function St(e, t, r, n, a) {
  var o = {
    start: n.start(e),
    end: n.end(e)
  }, i = {
    start: t,
    end: r
  };
  return a.inEventRange({
    event: o,
    range: i
  });
}
function b_(e, t) {
  return t.some(function(r) {
    return r.left <= e.right && r.right >= e.left;
  });
}
function w_(e, t, r) {
  var n = jt(e), a = [], o = [];
  n.forEach(function(l) {
    var c = t.start(l), u = t.end(l);
    r.daySpan(c, u) > 1 ? a.push(l) : o.push(l);
  });
  var i = a.sort(function(l, c) {
    return Hr(l, c, t, r);
  }), s = o.sort(function(l, c) {
    return Hr(l, c, t, r);
  });
  return [].concat(jt(i), jt(s));
}
function Hr(e, t, r, n) {
  var a = {
    start: r.start(e),
    end: r.end(e),
    allDay: r.allDay(e)
  }, o = {
    start: r.start(t),
    end: r.end(t),
    allDay: r.allDay(t)
  };
  return n.sortEvents({
    evtA: a,
    evtB: o
  });
}
var bi = function(t, r) {
  return t.left <= r && t.right >= r;
}, Fa = function(t, r) {
  return t.filter(function(n) {
    return bi(n, r);
  }).map(function(n) {
    return n.event;
  });
}, wi = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      for (var n = this.props, a = n.segments, o = n.slotMetrics.slots, i = yi(a).levels[0], s = 1, l = 1, c = []; s <= o; ) {
        var u = "_lvl_" + s, f = i.filter(function(b) {
          return bi(b, s);
        })[0] || {}, d = f.event, h = f.left, p = f.right, v = f.span;
        if (!d) {
          s++;
          continue;
        }
        var m = Math.max(0, h - l);
        if (this.canRenderSlotEvent(h, v)) {
          var y = we.renderEvent(this.props, d);
          m && c.push(we.renderSpan(o, m, u + "_gap")), c.push(we.renderSpan(o, v, u, y)), l = s = p + 1;
        } else
          m && c.push(we.renderSpan(o, m, u + "_gap")), c.push(we.renderSpan(o, 1, u, this.renderShowMore(a, s))), l = s = s + 1;
      }
      return /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row"
      }, c);
    }
  }, {
    key: "canRenderSlotEvent",
    value: function(n, a) {
      var o = this.props.segments;
      return Ag(n, n + a).every(function(i) {
        var s = Fa(o, i).length;
        return s === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function(n, a) {
      var o = this, i = this.props, s = i.localizer, l = i.slotMetrics, c = l.getEventsForSlot(a), u = Fa(n, a), f = u.length;
      return f ? /* @__PURE__ */ g.createElement("button", {
        type: "button",
        key: "sm_" + a,
        className: oe("rbc-button-link", "rbc-show-more"),
        onClick: function(h) {
          return o.showMore(a, h);
        }
      }, s.messages.showMore(f, u, c)) : !1;
    }
  }, {
    key: "showMore",
    value: function(n, a) {
      a.preventDefault(), a.stopPropagation(), this.props.onShowMore(n, a.target);
    }
  }]), t;
}(g.Component);
wi.defaultProps = J({}, we.defaultProps);
var $_ = function(t) {
  var r = t.children;
  return /* @__PURE__ */ g.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, r);
}, S_ = function(t, r) {
  return t.left <= r && t.right >= r;
}, __ = function(t, r) {
  return t[0].range === r[0].range && t[0].events === r[0].events;
};
function $i() {
  return Fo(function(e) {
    for (var t = e.range, r = e.events, n = e.maxRows, a = e.minRows, o = e.accessors, i = e.localizer, s = gi({
      dateRange: t,
      localizer: i
    }), l = s.first, c = s.last, u = r.map(function(v) {
      return y_(v, t, o, i);
    }), f = yi(u, Math.max(n - 1, 1)), d = f.levels, h = f.extra, p = h.length > 0 ? a - 1 : a; d.length < p; )
      d.push([]);
    return {
      first: l,
      last: c,
      levels: d,
      extra: h,
      range: t,
      slots: t.length,
      clone: function(m) {
        var y = $i();
        return y(J(J({}, e), m));
      },
      getDateForSlot: function(m) {
        return t[m];
      },
      getSlotForDate: function(m) {
        return t.find(function(y) {
          return i.isSameDate(y, m);
        });
      },
      getEventsForSlot: function(m) {
        return u.filter(function(y) {
          return S_(y, m);
        }).map(function(y) {
          return y.event;
        });
      },
      continuesPrior: function(m) {
        return i.continuesPrior(o.start(m), l);
      },
      continuesAfter: function(m) {
        var y = o.start(m), b = o.end(m);
        return i.continuesAfter(y, b, c);
      }
    };
  }, __);
}
var Jt = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    var r;
    se(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return r = de(this, t, [].concat(a)), r.handleSelectSlot = function(i) {
      var s = r.props, l = s.range, c = s.onSelectSlot;
      c(l.slice(i.start, i.end + 1), i);
    }, r.handleShowMore = function(i, s) {
      var l = r.props, c = l.range, u = l.onShowMore, f = r.slotMetrics(r.props), d = wc(r.containerRef.current, ".rbc-row-bg")[0], h;
      d && (h = d.children[i - 1]);
      var p = f.getEventsForSlot(i);
      u(p, c[i - 1], h, i, s);
    }, r.getContainer = function() {
      var i = r.props.container;
      return i ? i() : r.containerRef.current;
    }, r.renderHeadingCell = function(i, s) {
      var l = r.props, c = l.renderHeader, u = l.getNow, f = l.localizer;
      return c({
        date: i,
        key: "header_".concat(s),
        className: oe("rbc-date-cell", f.isSameDate(i, u()) && "rbc-now")
      });
    }, r.renderDummy = function() {
      var i = r.props, s = i.className, l = i.range, c = i.renderHeader, u = i.showAllEvents;
      return /* @__PURE__ */ g.createElement("div", {
        className: s,
        ref: r.containerRef
      }, /* @__PURE__ */ g.createElement("div", {
        className: oe("rbc-row-content", u && "rbc-row-content-scrollable")
      }, c && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row",
        ref: r.headingRowRef
      }, l.map(r.renderHeadingCell)), /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row",
        ref: r.eventRowRef
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row-segment"
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-event"
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    }, r.containerRef = /* @__PURE__ */ H.createRef(), r.headingRowRef = /* @__PURE__ */ H.createRef(), r.eventRowRef = /* @__PURE__ */ H.createRef(), r.slotMetrics = $i(), r;
  }
  return le(t, [{
    key: "getRowLimit",
    value: function() {
      var n, a = Dr(this.eventRowRef.current), o = (n = this.headingRowRef) !== null && n !== void 0 && n.current ? Dr(this.headingRowRef.current) : 0, i = Dr(this.containerRef.current) - o;
      return Math.max(Math.floor(i / a), 1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.rtl, i = n.range, s = n.className, l = n.selected, c = n.selectable, u = n.renderForMeasure, f = n.accessors, d = n.getters, h = n.components, p = n.getNow, v = n.renderHeader, m = n.onSelect, y = n.localizer, b = n.onSelectStart, $ = n.onSelectEnd, w = n.onDoubleClick, _ = n.onKeyPress, E = n.resourceId, x = n.longPressThreshold, L = n.isAllDay, z = n.resizable, A = n.showAllEvents;
      if (u)
        return this.renderDummy();
      var M = this.slotMetrics(this.props), j = M.levels, Y = M.extra, F = A ? $_ : De, C = h.weekWrapper, O = {
        selected: l,
        accessors: f,
        getters: d,
        localizer: y,
        components: h,
        onSelect: m,
        onDoubleClick: w,
        onKeyPress: _,
        resourceId: E,
        slotMetrics: M,
        resizable: z
      };
      return /* @__PURE__ */ g.createElement("div", {
        className: s,
        role: "rowgroup",
        ref: this.containerRef
      }, /* @__PURE__ */ g.createElement(g_, {
        localizer: y,
        date: a,
        getNow: p,
        rtl: o,
        range: i,
        selectable: c,
        container: this.getContainer,
        getters: d,
        onSelectStart: b,
        onSelectEnd: $,
        onSelectSlot: this.handleSelectSlot,
        components: h,
        longPressThreshold: x,
        resourceId: E
      }), /* @__PURE__ */ g.createElement("div", {
        className: oe("rbc-row-content", A && "rbc-row-content-scrollable"),
        role: "row"
      }, v && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, i.map(this.renderHeadingCell)), /* @__PURE__ */ g.createElement(F, null, /* @__PURE__ */ g.createElement(C, Object.assign({
        isAllDay: L
      }, O, {
        rtl: this.props.rtl
      }), j.map(function(I, k) {
        return /* @__PURE__ */ g.createElement(mi, Object.assign({
          key: k,
          segments: I
        }, O));
      }), !!Y.length && /* @__PURE__ */ g.createElement(wi, Object.assign({
        segments: Y,
        onShowMore: this.handleShowMore
      }, O))))));
    }
  }]), t;
}(g.Component);
Jt.defaultProps = {
  minRows: 0,
  maxRows: 1 / 0
};
var Si = function(t) {
  var r = t.label;
  return /* @__PURE__ */ g.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, r);
}, D_ = function(t) {
  var r = t.label, n = t.drilldownView, a = t.onDrillDown;
  return n ? /* @__PURE__ */ g.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: a,
    role: "cell"
  }, r) : /* @__PURE__ */ g.createElement("span", null, r);
}, E_ = ["date", "className"], O_ = function(t, r, n, a, o) {
  return t.filter(function(i) {
    return St(i, r, n, a, o);
  });
}, mr = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    var r;
    se(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return r = de(this, t, [].concat(a)), r.getContainer = function() {
      return r.containerRef.current;
    }, r.renderWeek = function(i, s) {
      var l = r.props, c = l.events, u = l.components, f = l.selectable, d = l.getNow, h = l.selected, p = l.date, v = l.localizer, m = l.longPressThreshold, y = l.accessors, b = l.getters, $ = l.showAllEvents, w = r.state, _ = w.needLimitMeasure, E = w.rowLimit, x = O_(jt(c), i[0], i[i.length - 1], y, v), L = w_(x, y, v);
      return /* @__PURE__ */ g.createElement(Jt, {
        key: s,
        ref: s === 0 ? r.slotRowRef : void 0,
        container: r.getContainer,
        className: "rbc-month-row",
        getNow: d,
        date: p,
        range: i,
        events: L,
        maxRows: $ ? 1 / 0 : E,
        selected: h,
        selectable: f,
        components: u,
        accessors: y,
        getters: b,
        localizer: v,
        renderHeader: r.readerDateHeading,
        renderForMeasure: _,
        onShowMore: r.handleShowMore,
        onSelect: r.handleSelectEvent,
        onDoubleClick: r.handleDoubleClickEvent,
        onKeyPress: r.handleKeyPressEvent,
        onSelectSlot: r.handleSelectSlot,
        longPressThreshold: m,
        rtl: r.props.rtl,
        resizable: r.props.resizable,
        showAllEvents: $
      });
    }, r.readerDateHeading = function(i) {
      var s = i.date, l = i.className, c = $e(i, E_), u = r.props, f = u.date, d = u.getDrilldownView, h = u.localizer, p = h.neq(s, f, "month"), v = h.isSameDate(s, f), m = d(s), y = h.format(s, "dateFormat"), b = r.props.components.dateHeader || D_;
      return /* @__PURE__ */ g.createElement("div", Object.assign({}, c, {
        className: oe(l, p && "rbc-off-range", v && "rbc-current"),
        role: "cell"
      }), /* @__PURE__ */ g.createElement(b, {
        label: y,
        date: s,
        drilldownView: m,
        isOffRange: p,
        onDrillDown: function(w) {
          return r.handleHeadingClick(s, m, w);
        }
      }));
    }, r.handleSelectSlot = function(i, s) {
      r._pendingSelection = r._pendingSelection.concat(i), clearTimeout(r._selectTimer), r._selectTimer = setTimeout(function() {
        return r.selectDates(s);
      });
    }, r.handleHeadingClick = function(i, s, l) {
      l.preventDefault(), r.clearSelection(), re(r.props.onDrillDown, [i, s]);
    }, r.handleSelectEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onSelectEvent, s);
    }, r.handleDoubleClickEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onDoubleClickEvent, s);
    }, r.handleKeyPressEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onKeyPressEvent, s);
    }, r.handleShowMore = function(i, s, l, c, u) {
      var f = r.props, d = f.popup, h = f.onDrillDown, p = f.onShowMore, v = f.getDrilldownView, m = f.doShowMoreDrillDown;
      if (r.clearSelection(), d) {
        var y = bo(l, r.containerRef.current);
        r.setState({
          overlay: {
            date: s,
            events: i,
            position: y,
            target: u
          }
        });
      } else
        m && re(h, [s, v(s) || fe.DAY]);
      re(p, [i, s, c]);
    }, r.overlayDisplay = function() {
      r.setState({
        overlay: null
      });
    }, r.state = {
      rowLimit: 5,
      needLimitMeasure: !0,
      date: null
    }, r.containerRef = /* @__PURE__ */ H.createRef(), r.slotRowRef = /* @__PURE__ */ H.createRef(), r._bgRows = [], r._pendingSelection = [], r;
  }
  return le(t, [{
    key: "componentDidMount",
    value: function() {
      var n = this, a;
      this.state.needLimitMeasure && this.measureRowLimit(this.props), window.addEventListener("resize", this._resizeListener = function() {
        a || wo(function() {
          a = !1, n.setState({
            needLimitMeasure: !0
          });
        });
      }, !1);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.state.needLimitMeasure && this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      window.removeEventListener("resize", this._resizeListener, !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.className, s = o.visibleDays(a, o), l = ac(s, 7);
      return this._weekCount = l.length, /* @__PURE__ */ g.createElement("div", {
        className: oe("rbc-month-view", i),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(l[0])), l.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function(n) {
      var a = this.props, o = a.localizer, i = a.components, s = n[0], l = n[n.length - 1], c = i.header || Si;
      return o.range(s, l, "day").map(function(u, f) {
        return /* @__PURE__ */ g.createElement("div", {
          key: "header_" + f,
          className: "rbc-header"
        }, /* @__PURE__ */ g.createElement(c, {
          date: u,
          localizer: o,
          label: o.format(u, "weekdayFormat")
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, f = s.getters, d = s.selected, h = s.popupOffset, p = s.handleDragStart, v = function() {
        return o.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ g.createElement(yn, {
        overlay: i,
        accessors: l,
        localizer: c,
        components: u,
        getters: f,
        selected: d,
        popupOffset: h,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: p,
        show: !!i.position,
        overlayDisplay: this.overlayDisplay,
        onHide: v
      });
    }
  }, {
    key: "measureRowLimit",
    value: function() {
      this.setState({
        needLimitMeasure: !1,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function(n) {
      var a = this._pendingSelection.slice();
      this._pendingSelection = [], a.sort(function(s, l) {
        return +s - +l;
      });
      var o = new Date(a[0]), i = new Date(a[a.length - 1]);
      i.setDate(a[a.length - 1].getDate() + 1), re(this.props.onSelectSlot, {
        slots: a,
        start: o,
        end: i,
        action: n.action,
        bounds: n.bounds,
        box: n.box
      });
    }
  }, {
    key: "clearSelection",
    value: function() {
      clearTimeout(this._selectTimer), this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var o = n.date, i = n.localizer;
      return {
        date: o,
        needLimitMeasure: i.neq(o, a.date, "month")
      };
    }
  }]), t;
}(g.Component);
mr.range = function(e, t) {
  var r = t.localizer, n = r.firstVisibleDay(e, r), a = r.lastVisibleDay(e, r);
  return {
    start: n,
    end: a
  };
};
mr.navigate = function(e, t, r) {
  var n = r.localizer;
  switch (t) {
    case he.PREVIOUS:
      return n.add(e, -1, "month");
    case he.NEXT:
      return n.add(e, 1, "month");
    default:
      return e;
  }
};
mr.title = function(e, t) {
  var r = t.localizer;
  return r.format(e, "monthHeaderFormat");
};
var za = function(t) {
  var r = t.min, n = t.max, a = t.step, o = t.slots, i = t.localizer;
  return "".concat(+i.startOf(r, "minutes")) + "".concat(+i.startOf(n, "minutes")) + "".concat(a, "-").concat(o);
};
function bn(e) {
  for (var t = e.min, r = e.max, n = e.step, a = e.timeslots, o = e.localizer, i = za({
    start: t,
    end: r,
    step: n,
    timeslots: a,
    localizer: o
  }), s = 1 + o.getTotalMin(t, r), l = o.getMinutesFromMidnight(t), c = Math.ceil((s - 1) / (n * a)), u = c * a, f = new Array(c), d = new Array(u), h = 0; h < c; h++) {
    f[h] = new Array(a);
    for (var p = 0; p < a; p++) {
      var v = h * a + p, m = v * n;
      d[v] = f[h][p] = o.getSlotDate(t, l, m);
    }
  }
  var y = d.length * n;
  d.push(o.getSlotDate(t, l, y));
  function b($) {
    var w = o.diff(t, $, "minutes") + o.getDstOffset(t, $);
    return Math.min(w, s);
  }
  return {
    groups: f,
    update: function(w) {
      return za(w) !== i ? bn(w) : this;
    },
    dateIsInGroup: function(w, _) {
      var E = f[_ + 1];
      return o.inRange(w, f[_][0], E ? E[0] : r, "minutes");
    },
    nextSlot: function(w) {
      var _ = d[Math.min(d.findIndex(function(E) {
        return E === w || o.eq(E, w);
      }) + 1, d.length - 1)];
      return o.eq(_, w) && (_ = o.add(w, n, "minutes")), _;
    },
    closestSlotToPosition: function(w) {
      var _ = Math.min(d.length - 1, Math.max(0, Math.floor(w * u)));
      return d[_];
    },
    closestSlotFromPoint: function(w, _) {
      var E = Math.abs(_.top - _.bottom);
      return this.closestSlotToPosition((w.y - _.top) / E);
    },
    closestSlotFromDate: function(w) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (o.lt(w, t, "minutes"))
        return d[0];
      if (o.gt(w, r, "minutes"))
        return d[d.length - 1];
      var E = o.diff(t, w, "minutes");
      return d[(E - E % n) / n + _];
    },
    startsBeforeDay: function(w) {
      return o.lt(w, t, "day");
    },
    startsAfterDay: function(w) {
      return o.gt(w, r, "day");
    },
    startsBefore: function(w) {
      return o.lt(o.merge(t, w), t, "minutes");
    },
    startsAfter: function(w) {
      return o.gt(o.merge(r, w), r, "minutes");
    },
    getRange: function(w, _, E, x) {
      E || (w = o.min(r, o.max(t, w))), x || (_ = o.min(r, o.max(t, _)));
      var L = b(w), z = b(_), A = z > n * u && !o.eq(r, _) ? (L - n) / (n * u) * 100 : L / (n * u) * 100;
      return {
        top: A,
        height: z / (n * u) * 100 - A,
        start: b(w),
        startDate: w,
        end: b(_),
        endDate: _
      };
    },
    getCurrentTimePosition: function(w) {
      var _ = b(w), E = _ / (n * u) * 100;
      return E;
    }
  };
}
var T_ = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = r.accessors, a = r.slotMetrics;
    se(this, e);
    var o = a.getRange(n.start(t), n.end(t)), i = o.start, s = o.startDate, l = o.end, c = o.endDate, u = o.top, f = o.height;
    this.start = i, this.end = l, this.startMs = +s, this.endMs = +c, this.top = u, this.height = f, this.data = t;
  }
  return le(e, [{
    key: "_width",
    get: function() {
      if (this.rows) {
        var r = this.rows.reduce(
          function(a, o) {
            return Math.max(a, o.leaves.length + 1);
          },
          // add itself
          0
        ) + 1;
        return 100 / r;
      }
      if (this.leaves) {
        var n = 100 - this.container._width;
        return n / (this.leaves.length + 1);
      }
      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function() {
      var r = this._width, n = Math.min(100, this._width * 1.7);
      if (this.rows)
        return n;
      if (this.leaves)
        return this.leaves.length > 0 ? n : r;
      var a = this.row.leaves, o = a.indexOf(this);
      return o === a.length - 1 ? r : n;
    }
  }, {
    key: "xOffset",
    get: function() {
      if (this.rows)
        return 0;
      if (this.leaves)
        return this.container._width;
      var r = this.row, n = r.leaves, a = r.xOffset, o = r._width, i = n.indexOf(this) + 1;
      return a + i * o;
    }
  }]), e;
}();
function M_(e, t, r) {
  return (
    // Occupies the same start slot.
    Math.abs(t.start - e.start) < r || // A's start slot overlaps with b's end slot.
    t.start > e.start && t.start < e.end
  );
}
function A_(e) {
  for (var t = Vy(e, ["startMs", function(s) {
    return -s.endMs;
  }]), r = []; t.length > 0; ) {
    var n = t.shift();
    r.push(n);
    for (var a = 0; a < t.length; a++) {
      var o = t[a];
      if (!(n.endMs > o.startMs)) {
        if (a > 0) {
          var i = t.splice(a, 1)[0];
          r.push(i);
        }
        break;
      }
    }
  }
  return r;
}
function _i(e) {
  for (var t = e.events, r = e.minimumStartDifference, n = e.slotMetrics, a = e.accessors, o = t.map(function(u) {
    return new T_(u, {
      slotMetrics: n,
      accessors: a
    });
  }), i = A_(o), s = [], l = function() {
    var f = i[c], d = s.find(function(v) {
      return v.end > f.start || Math.abs(f.start - v.start) < r;
    });
    if (!d)
      return f.rows = [], s.push(f), 1;
    f.container = d;
    for (var h = null, p = d.rows.length - 1; !h && p >= 0; p--)
      M_(d.rows[p], f, r) && (h = d.rows[p]);
    h ? (h.leaves.push(f), f.row = h) : (f.leaves = [], d.rows.push(f));
  }, c = 0; c < i.length; c++)
    l();
  return i.map(function(u) {
    return {
      event: u.data,
      style: {
        top: u.top,
        height: u.height,
        width: u.width,
        xOffset: Math.max(0, u.xOffset)
      }
    };
  });
}
function Di(e, t, r) {
  for (var n = 0; n < e.friends.length; ++n)
    if (!(r.indexOf(e.friends[n]) > -1)) {
      t = t > e.friends[n].idx ? t : e.friends[n].idx, r.push(e.friends[n]);
      var a = Di(e.friends[n], t, r);
      t = t > a ? t : a;
    }
  return t;
}
function C_(e) {
  var t = e.events, r = e.minimumStartDifference, n = e.slotMetrics, a = e.accessors, o = _i({
    events: t,
    minimumStartDifference: r,
    slotMetrics: n,
    accessors: a
  });
  o.sort(function(C, O) {
    return C = C.style, O = O.style, C.top !== O.top ? C.top > O.top ? 1 : -1 : C.height !== O.height ? C.top + C.height < O.top + O.height ? 1 : -1 : 0;
  });
  for (var i = 0; i < o.length; ++i)
    o[i].friends = [], delete o[i].style.left, delete o[i].style.left, delete o[i].idx, delete o[i].size;
  for (var s = 0; s < o.length - 1; ++s)
    for (var l = o[s], c = l.style.top, u = l.style.top + l.style.height, f = s + 1; f < o.length; ++f) {
      var d = o[f], h = d.style.top, p = d.style.top + d.style.height;
      (h >= c && p <= u || p > c && p <= u || h >= c && h < u) && (l.friends.push(d), d.friends.push(l));
    }
  for (var v = 0; v < o.length; ++v) {
    for (var m = o[v], y = [], b = 0; b < 100; ++b)
      y.push(1);
    for (var $ = 0; $ < m.friends.length; ++$)
      m.friends[$].idx !== void 0 && (y[m.friends[$].idx] = 0);
    m.idx = y.indexOf(1);
  }
  for (var w = 0; w < o.length; ++w) {
    var _ = 0;
    if (!o[w].size) {
      var E = [], x = Di(o[w], 0, E);
      _ = 100 / (x + 1), o[w].size = _;
      for (var L = 0; L < E.length; ++L)
        E[L].size = _;
    }
  }
  for (var z = 0; z < o.length; ++z) {
    var A = o[z];
    A.style.left = A.idx * A.size;
    for (var M = 0, j = 0; j < A.friends.length; ++j) {
      var Y = A.friends[j].idx;
      M = M > Y ? M : Y;
    }
    M <= A.idx && (A.size = 100 - A.idx * A.size);
    var F = A.idx === 0 ? 0 : 3;
    A.style.width = "calc(".concat(A.size, "% - ").concat(F, "px)"), A.style.height = "calc(".concat(A.style.height, "% - 2px)"), A.style.xOffset = "calc(".concat(A.style.left, "% + ").concat(F, "px)");
  }
  return o;
}
var ja = {
  overlap: _i,
  "no-overlap": C_
};
function P_(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function x_(e) {
  e.events, e.minimumStartDifference, e.slotMetrics, e.accessors;
  var t = e.dayLayoutAlgorithm, r = t;
  return t in ja && (r = ja[t]), P_(r) ? r.apply(this, arguments) : [];
}
var Ei = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.renderSlot, o = n.resource, i = n.group, s = n.getters, l = n.components, c = l === void 0 ? {} : l, u = c.timeSlotWrapper, f = u === void 0 ? De : u, d = s ? s.slotGroupProp(i) : {};
      return /* @__PURE__ */ g.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, d), i.map(function(h, p) {
        var v = s ? s.slotProp(h, o) : {};
        return /* @__PURE__ */ g.createElement(f, {
          key: p,
          value: h,
          resource: o
        }, /* @__PURE__ */ g.createElement("div", Object.assign({}, v, {
          className: oe("rbc-time-slot", v.className)
        }), a && a(h, p)));
      }));
    }
  }]), t;
}(H.Component);
function Lt(e) {
  return typeof e == "string" ? e : e + "%";
}
function R_(e) {
  var t = e.style, r = e.className, n = e.event, a = e.accessors, o = e.rtl, i = e.selected, s = e.label, l = e.continuesPrior, c = e.continuesAfter, u = e.getters, f = e.onClick, d = e.onDoubleClick, h = e.isBackgroundEvent, p = e.onKeyPress, v = e.components, m = v.event, y = v.eventWrapper, b = a.title(n), $ = a.tooltip(n), w = a.end(n), _ = a.start(n), E = u.eventProp(n, _, w, i), x = [/* @__PURE__ */ g.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, s), /* @__PURE__ */ g.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, m ? /* @__PURE__ */ g.createElement(m, {
    event: n,
    title: b
  }) : b)], L = t.height, z = t.top, A = t.width, M = t.xOffset, j = J(J({}, E.style), {}, Le({
    top: Lt(z),
    height: Lt(L),
    width: Lt(A)
  }, o ? "right" : "left", Lt(M)));
  return /* @__PURE__ */ g.createElement(y, Object.assign({
    type: "time"
  }, e), /* @__PURE__ */ g.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: f,
    onDoubleClick: d,
    style: j,
    onKeyDown: p,
    title: $ ? (typeof s == "string" ? s + ": " : "") + $ : void 0,
    className: oe(h ? "rbc-background-event" : "rbc-event", r, E.className, {
      "rbc-selected": i,
      "rbc-event-continues-earlier": l,
      "rbc-event-continues-later": c
    })
  }, x));
}
var k_ = function(t) {
  var r = t.children, n = t.className, a = t.style, o = t.innerRef;
  return /* @__PURE__ */ g.createElement("div", {
    className: n,
    style: a,
    ref: o
  }, r);
}, I_ = /* @__PURE__ */ g.forwardRef(function(e, t) {
  return /* @__PURE__ */ g.createElement(k_, Object.assign({}, e, {
    innerRef: t
  }));
}), N_ = ["dayProp"], L_ = ["eventContainerWrapper"], Oi = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    var r;
    se(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return r = de(this, t, [].concat(a)), r.state = {
      selecting: !1,
      timeIndicatorPosition: null
    }, r.intervalTriggered = !1, r.renderEvents = function(i) {
      var s = i.events, l = i.isBackgroundEvent, c = r.props, u = c.rtl, f = c.selected, d = c.accessors, h = c.localizer, p = c.getters, v = c.components, m = c.step, y = c.timeslots, b = c.dayLayoutAlgorithm, $ = c.resizable, w = Ya(r), _ = w.slotMetrics, E = h.messages, x = x_({
        events: s,
        accessors: d,
        slotMetrics: _,
        minimumStartDifference: Math.ceil(m * y / 2),
        dayLayoutAlgorithm: b
      });
      return x.map(function(L, z) {
        var A = L.event, M = L.style, j = d.end(A), Y = d.start(A), F = "eventTimeRangeFormat", C, O = _.startsBeforeDay(Y), I = _.startsAfterDay(j);
        O ? F = "eventTimeRangeEndFormat" : I && (F = "eventTimeRangeStartFormat"), O && I ? C = E.allDay : C = h.format({
          start: Y,
          end: j
        }, F);
        var k = O || _.startsBefore(Y), U = I || _.startsAfter(j);
        return /* @__PURE__ */ g.createElement(R_, {
          style: M,
          event: A,
          label: C,
          key: "evt_" + z,
          getters: p,
          rtl: u,
          components: v,
          continuesPrior: k,
          continuesAfter: U,
          accessors: d,
          resource: r.props.resource,
          selected: hr(A, f),
          onClick: function(K) {
            return r._select(J(J(J({}, A), r.props.resource && {
              sourceResource: r.props.resource
            }), l && {
              isBackgroundEvent: !0
            }), K);
          },
          onDoubleClick: function(K) {
            return r._doubleClick(A, K);
          },
          isBackgroundEvent: l,
          onKeyPress: function(K) {
            return r._keyPress(A, K);
          },
          resizable: $
        });
      });
    }, r._selectable = function() {
      var i = r.containerRef.current, s = r.props, l = s.longPressThreshold, c = s.localizer, u = r._selector = new hi(function() {
        return i;
      }, {
        longPressThreshold: l
      }), f = function(v) {
        var m = r.props.onSelecting, y = r.state || {}, b = d(v), $ = b.startDate, w = b.endDate;
        m && (c.eq(y.startDate, $, "minutes") && c.eq(y.endDate, w, "minutes") || m({
          start: $,
          end: w,
          resourceId: r.props.resource
        }) === !1) || (r.state.start !== b.start || r.state.end !== b.end || r.state.selecting !== b.selecting) && r.setState(b);
      }, d = function(v) {
        var m = r.slotMetrics.closestSlotFromPoint(v, Ue(i));
        r.state.selecting || (r._initialSlot = m);
        var y = r._initialSlot;
        c.lte(y, m) ? m = r.slotMetrics.nextSlot(m) : c.gt(y, m) && (y = r.slotMetrics.nextSlot(y));
        var b = r.slotMetrics.getRange(c.min(y, m), c.max(y, m));
        return J(J({}, b), {}, {
          selecting: !0,
          top: "".concat(b.top, "%"),
          height: "".concat(b.height, "%")
        });
      }, h = function(v, m) {
        if (!Zt(r.containerRef.current, v)) {
          var y = d(v), b = y.startDate, $ = y.endDate;
          r._selectSlot({
            startDate: b,
            endDate: $,
            action: m,
            box: v
          });
        }
        r.setState({
          selecting: !1
        });
      };
      u.on("selecting", f), u.on("selectStart", f), u.on("beforeSelect", function(p) {
        if (r.props.selectable === "ignoreEvents")
          return !Zt(r.containerRef.current, p);
      }), u.on("click", function(p) {
        return h(p, "click");
      }), u.on("doubleClick", function(p) {
        return h(p, "doubleClick");
      }), u.on("select", function(p) {
        r.state.selecting && (r._selectSlot(J(J({}, r.state), {}, {
          action: "select",
          bounds: p
        })), r.setState({
          selecting: !1
        }));
      }), u.on("reset", function() {
        r.state.selecting && r.setState({
          selecting: !1
        });
      });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r._selectSlot = function(i) {
      for (var s = i.startDate, l = i.endDate, c = i.action, u = i.bounds, f = i.box, d = s, h = []; r.props.localizer.lte(d, l); )
        h.push(d), d = new Date(+d + r.props.step * 60 * 1e3);
      re(r.props.onSelectSlot, {
        slots: h,
        start: s,
        end: l,
        resourceId: r.props.resource,
        action: c,
        bounds: u,
        box: f
      });
    }, r._select = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onSelectEvent, s);
    }, r._doubleClick = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onDoubleClickEvent, s);
    }, r._keyPress = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onKeyPressEvent, s);
    }, r.slotMetrics = bn(r.props), r.containerRef = /* @__PURE__ */ H.createRef(), r;
  }
  return le(t, [{
    key: "componentDidMount",
    value: function() {
      this.props.selectable && this._selectable(), this.props.isNow && this.setTimeIndicatorPositionUpdateInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._teardownSelectable(), this.clearTimeIndicatorInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function(n, a) {
      this.props.selectable && !n.selectable && this._selectable(), !this.props.selectable && n.selectable && this._teardownSelectable();
      var o = this.props, i = o.getNow, s = o.isNow, l = o.localizer, c = o.date, u = o.min, f = o.max, d = l.neq(n.getNow(), i(), "minutes");
      if (n.isNow !== s || d) {
        if (this.clearTimeIndicatorInterval(), s) {
          var h = !d && l.eq(n.date, c, "minutes") && a.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(h);
        }
      } else
        s && (l.neq(n.min, u, "minutes") || l.neq(n.max, f, "minutes")) && this.positionTimeIndicator();
    }
    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function() {
      var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      !this.intervalTriggered && !a && this.positionTimeIndicator(), this._timeIndicatorTimeout = window.setTimeout(function() {
        n.intervalTriggered = !0, n.positionTimeIndicator(), n.setTimeIndicatorPositionUpdateInterval();
      }, 6e4);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function() {
      this.intervalTriggered = !1, window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function() {
      var n = this.props, a = n.min, o = n.max, i = n.getNow, s = i();
      if (s >= a && s <= o) {
        var l = this.slotMetrics.getCurrentTimePosition(s);
        this.intervalTriggered = !0, this.setState({
          timeIndicatorPosition: l
        });
      } else
        this.clearTimeIndicatorInterval();
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.max, i = n.rtl, s = n.isNow, l = n.resource, c = n.accessors, u = n.localizer, f = n.getters, d = f.dayProp, h = $e(f, N_), p = n.components, v = p.eventContainerWrapper, m = $e(p, L_);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var y = this.slotMetrics, b = this.state, $ = b.selecting, w = b.top, _ = b.height, E = b.startDate, x = b.endDate, L = {
        start: E,
        end: x
      }, z = d(o), A = z.className, M = z.style, j = m.dayColumnWrapper || I_;
      return /* @__PURE__ */ g.createElement(j, {
        ref: this.containerRef,
        date: a,
        style: M,
        className: oe(
          A,
          "rbc-day-slot",
          "rbc-time-column",
          s && "rbc-now",
          s && "rbc-today",
          // WHY
          $ && "rbc-slot-selecting"
        ),
        slotMetrics: y
      }, y.groups.map(function(Y, F) {
        return /* @__PURE__ */ g.createElement(Ei, {
          key: F,
          group: Y,
          resource: l,
          getters: h,
          components: m
        });
      }), /* @__PURE__ */ g.createElement(v, {
        localizer: u,
        resource: l,
        accessors: c,
        getters: h,
        components: m,
        slotMetrics: y
      }, /* @__PURE__ */ g.createElement("div", {
        className: oe("rbc-events-container", i && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: !0
      }), this.renderEvents({
        events: this.props.events
      }))), $ && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: w,
          height: _
        }
      }, /* @__PURE__ */ g.createElement("span", null, u.format(L, "selectRangeFormat"))), s && this.intervalTriggered && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      }));
    }
  }]), t;
}(g.Component);
Oi.defaultProps = {
  dragThroughEvents: !0,
  timeslots: 2
};
function F_(e) {
  var t = e.min, r = e.max, n = e.localizer;
  return n.getTimezoneOffset(t) !== n.getTimezoneOffset(r) ? {
    start: n.add(t, -1, "day"),
    end: n.add(r, -1, "day")
  } : {
    start: t,
    end: r
  };
}
var z_ = function(t) {
  var r = t.min, n = t.max, a = t.timeslots, o = t.step, i = t.localizer, s = t.getNow, l = t.resource, c = t.components, u = t.getters, f = t.gutterRef, d = c.timeGutterWrapper, h = H.useMemo(
    function() {
      return F_({
        min: r,
        max: n,
        localizer: i
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r == null ? void 0 : r.toISOString(), n == null ? void 0 : n.toISOString(), i]
  ), p = h.start, v = h.end, m = H.useState(bn({
    min: p,
    max: v,
    timeslots: a,
    step: o,
    localizer: i
  })), y = Ee(m, 2), b = y[0], $ = y[1];
  H.useEffect(function() {
    b && $(b.update({
      min: p,
      max: v,
      timeslots: a,
      step: o,
      localizer: i
    }));
  }, [p == null ? void 0 : p.toISOString(), v == null ? void 0 : v.toISOString(), a, o]);
  var w = H.useCallback(function(_, E) {
    if (E)
      return null;
    var x = b.dateIsInGroup(s(), E);
    return /* @__PURE__ */ g.createElement("span", {
      className: oe("rbc-label", x && "rbc-now")
    }, i.format(_, "timeGutterFormat"));
  }, [b, i, s]);
  return /* @__PURE__ */ g.createElement(d, {
    slotMetrics: b
  }, /* @__PURE__ */ g.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: f
  }, b.groups.map(function(_, E) {
    return /* @__PURE__ */ g.createElement(Ei, {
      key: E,
      group: _,
      resource: l,
      components: c,
      renderSlot: w,
      getters: u
    });
  })));
}, j_ = /* @__PURE__ */ g.forwardRef(function(e, t) {
  return /* @__PURE__ */ g.createElement(z_, Object.assign({
    gutterRef: t
  }, e));
}), H_ = function(t) {
  var r = t.label;
  return /* @__PURE__ */ g.createElement(g.Fragment, null, r);
}, W_ = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    var r;
    se(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return r = de(this, t, [].concat(a)), r.handleHeaderClick = function(i, s, l) {
      l.preventDefault(), re(r.props.onDrillDown, [i, s]);
    }, r.renderRow = function(i) {
      var s = r.props, l = s.events, c = s.rtl, u = s.selectable, f = s.getNow, d = s.range, h = s.getters, p = s.localizer, v = s.accessors, m = s.components, y = s.resizable, b = v.resourceId(i), $ = i ? l.filter(function(w) {
        return v.resource(w) === b;
      }) : l;
      return /* @__PURE__ */ g.createElement(Jt, {
        isAllDay: !0,
        rtl: c,
        getNow: f,
        minRows: 2,
        maxRows: r.props.allDayMaxRows + 1,
        range: d,
        events: $,
        resourceId: b,
        className: "rbc-allday-cell",
        selectable: u,
        selected: r.props.selected,
        components: m,
        accessors: v,
        getters: h,
        localizer: p,
        onSelect: r.props.onSelectEvent,
        onShowMore: r.props.onShowMore,
        onDoubleClick: r.props.onDoubleClickEvent,
        onKeyPress: r.props.onKeyPressEvent,
        onSelectSlot: r.props.onSelectSlot,
        longPressThreshold: r.props.longPressThreshold,
        resizable: y
      });
    }, r;
  }
  return le(t, [{
    key: "renderHeaderCells",
    value: function(n) {
      var a = this, o = this.props, i = o.localizer, s = o.getDrilldownView, l = o.getNow, c = o.getters.dayProp, u = o.components.header, f = u === void 0 ? Si : u, d = l();
      return n.map(function(h, p) {
        var v = s(h), m = i.format(h, "dayFormat"), y = c(h), b = y.className, $ = y.style, w = /* @__PURE__ */ g.createElement(f, {
          date: h,
          label: m,
          localizer: i
        });
        return /* @__PURE__ */ g.createElement("div", {
          key: p,
          style: $,
          className: oe("rbc-header", b, i.isSameDate(h, d) && "rbc-today")
        }, v ? /* @__PURE__ */ g.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function(E) {
            return a.handleHeaderClick(h, v, E);
          }
        }, w) : /* @__PURE__ */ g.createElement("span", null, w));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, o = a.width, i = a.rtl, s = a.resources, l = a.range, c = a.events, u = a.getNow, f = a.accessors, d = a.selectable, h = a.components, p = a.getters, v = a.scrollRef, m = a.localizer, y = a.isOverflowing, b = a.components, $ = b.timeGutterHeader, w = b.resourceHeader, _ = w === void 0 ? H_ : w, E = a.resizable, x = {};
      y && (x[i ? "marginLeft" : "marginRight"] = "".concat($o() - 1, "px"));
      var L = s.groupEvents(c);
      return /* @__PURE__ */ g.createElement("div", {
        style: x,
        ref: v,
        className: oe("rbc-time-header", y && "rbc-overflowing")
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: o,
          minWidth: o,
          maxWidth: o
        }
      }, $ && /* @__PURE__ */ g.createElement($, null)), s.map(function(z, A) {
        var M = Ee(z, 2), j = M[0], Y = M[1];
        return /* @__PURE__ */ g.createElement("div", {
          className: "rbc-time-header-content",
          key: j || A
        }, Y && /* @__PURE__ */ g.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(A)
        }, /* @__PURE__ */ g.createElement("div", {
          className: "rbc-header"
        }, /* @__PURE__ */ g.createElement(_, {
          index: A,
          label: f.resourceTitle(Y),
          resource: Y
        }))), /* @__PURE__ */ g.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(l.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, n.renderHeaderCells(l)), /* @__PURE__ */ g.createElement(Jt, {
          isAllDay: !0,
          rtl: i,
          getNow: u,
          minRows: 2,
          maxRows: n.props.allDayMaxRows + 1,
          range: l,
          events: L.get(j) || [],
          resourceId: Y && j,
          className: "rbc-allday-cell",
          selectable: d,
          selected: n.props.selected,
          components: h,
          accessors: f,
          getters: p,
          localizer: m,
          onSelect: n.props.onSelectEvent,
          onShowMore: n.props.onShowMore,
          onDoubleClick: n.props.onDoubleClickEvent,
          onKeyDown: n.props.onKeyPressEvent,
          onSelectSlot: n.props.onSelectSlot,
          longPressThreshold: n.props.longPressThreshold,
          resizable: E
        }));
      }));
    }
  }]), t;
}(g.Component), Tr = {};
function B_(e, t) {
  return {
    map: function(n) {
      return e ? e.map(function(a, o) {
        return n([t.resourceId(a), a], o);
      }) : [n([Tr, null], 0)];
    },
    groupEvents: function(n) {
      var a = /* @__PURE__ */ new Map();
      return e ? (n.forEach(function(o) {
        var i = t.resource(o) || Tr;
        if (Array.isArray(i))
          i.forEach(function(l) {
            var c = a.get(l) || [];
            c.push(o), a.set(l, c);
          });
        else {
          var s = a.get(i) || [];
          s.push(o), a.set(i, s);
        }
      }), a) : (a.set(Tr, n), a);
    }
  };
}
var it = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t(r) {
    var n;
    return se(this, t), n = de(this, t, [r]), n.handleScroll = function(a) {
      n.scrollRef.current && (n.scrollRef.current.scrollLeft = a.target.scrollLeft);
    }, n.handleResize = function() {
      In(n.rafHandle), n.rafHandle = wo(n.checkOverflow);
    }, n.handleKeyPressEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      re(n.props.onKeyPressEvent, o);
    }, n.handleSelectEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      re(n.props.onSelectEvent, o);
    }, n.handleDoubleClickEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      re(n.props.onDoubleClickEvent, o);
    }, n.handleShowMore = function(a, o, i, s, l) {
      var c = n.props, u = c.popup, f = c.onDrillDown, d = c.onShowMore, h = c.getDrilldownView, p = c.doShowMoreDrillDown;
      if (n.clearSelection(), u) {
        var v = bo(i, n.containerRef.current);
        n.setState({
          overlay: {
            date: o,
            events: a,
            position: J(J({}, v), {}, {
              width: "200px"
            }),
            target: l
          }
        });
      } else
        p && re(f, [o, h(o) || fe.DAY]);
      re(d, [a, o, s]);
    }, n.handleSelectAllDaySlot = function(a, o) {
      var i = n.props.onSelectSlot, s = new Date(a[0]), l = new Date(a[a.length - 1]);
      l.setDate(a[a.length - 1].getDate() + 1), re(i, {
        slots: a,
        start: s,
        end: l,
        action: o.action,
        resourceId: o.resourceId
      });
    }, n.overlayDisplay = function() {
      n.setState({
        overlay: null
      });
    }, n.checkOverflow = function() {
      if (!n._updatingOverflow) {
        var a = n.contentRef.current;
        if (a != null && a.scrollHeight) {
          var o = a.scrollHeight > a.clientHeight;
          n.state.isOverflowing !== o && (n._updatingOverflow = !0, n.setState({
            isOverflowing: o
          }, function() {
            n._updatingOverflow = !1;
          }));
        }
      }
    }, n.memoizedResources = Fo(function(a, o) {
      return B_(a, o);
    }), n.state = {
      gutterWidth: void 0,
      isOverflowing: null
    }, n.scrollRef = /* @__PURE__ */ g.createRef(), n.contentRef = /* @__PURE__ */ g.createRef(), n.containerRef = /* @__PURE__ */ g.createRef(), n._scrollRatio = null, n.gutterRef = /* @__PURE__ */ H.createRef(), n;
  }
  return le(t, [{
    key: "getSnapshotBeforeUpdate",
    value: function() {
      return this.checkOverflow(), null;
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.props.width == null && this.measureGutter(), this.calculateScroll(), this.applyScroll(), window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      window.removeEventListener("resize", this.handleResize), In(this.rafHandle), this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.applyScroll();
    }
  }, {
    key: "renderEvents",
    value: function(n, a, o, i) {
      var s = this, l = this.props, c = l.min, u = l.max, f = l.components, d = l.accessors, h = l.localizer, p = l.dayLayoutAlgorithm, v = this.memoizedResources(this.props.resources, d), m = v.groupEvents(a), y = v.groupEvents(o);
      return v.map(function(b, $) {
        var w = Ee(b, 2), _ = w[0], E = w[1];
        return n.map(function(x, L) {
          var z = (m.get(_) || []).filter(function(M) {
            return h.inRange(x, d.start(M), d.end(M), "day");
          }), A = (y.get(_) || []).filter(function(M) {
            return h.inRange(x, d.start(M), d.end(M), "day");
          });
          return /* @__PURE__ */ g.createElement(Oi, Object.assign({}, s.props, {
            localizer: h,
            min: h.merge(x, c),
            max: h.merge(x, u),
            resource: E && _,
            components: f,
            isNow: h.isSameDate(x, i),
            key: $ + "-" + L,
            date: x,
            events: z,
            backgroundEvents: A,
            dayLayoutAlgorithm: p
          }));
        });
      });
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, o = a.events, i = a.backgroundEvents, s = a.range, l = a.width, c = a.rtl, u = a.selected, f = a.getNow, d = a.resources, h = a.components, p = a.accessors, v = a.getters, m = a.localizer, y = a.min, b = a.max, $ = a.showMultiDayTimes, w = a.longPressThreshold, _ = a.resizable;
      l = l || this.state.gutterWidth;
      var E = s[0], x = s[s.length - 1];
      this.slots = s.length;
      var L = [], z = [], A = [];
      return o.forEach(function(M) {
        if (St(M, E, x, p, m)) {
          var j = p.start(M), Y = p.end(M);
          p.allDay(M) || m.startAndEndAreDateOnly(j, Y) || !$ && !m.isSameDate(j, Y) ? L.push(M) : z.push(M);
        }
      }), i.forEach(function(M) {
        St(M, E, x, p, m) && A.push(M);
      }), L.sort(function(M, j) {
        return Hr(M, j, p, m);
      }), /* @__PURE__ */ g.createElement("div", {
        className: oe("rbc-time-view", d && "rbc-time-view-resources"),
        ref: this.containerRef
      }, /* @__PURE__ */ g.createElement(W_, {
        range: s,
        events: L,
        width: l,
        rtl: c,
        getNow: f,
        localizer: m,
        selected: u,
        allDayMaxRows: this.props.showAllEvents ? 1 / 0 : (n = this.props.allDayMaxRows) !== null && n !== void 0 ? n : 1 / 0,
        resources: this.memoizedResources(d, p),
        selectable: this.props.selectable,
        accessors: p,
        getters: v,
        components: h,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold: w,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable: _
      }), this.props.popup && this.renderOverlay(), /* @__PURE__ */ g.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /* @__PURE__ */ g.createElement(j_, {
        date: E,
        ref: this.gutterRef,
        localizer: m,
        min: m.merge(E, y),
        max: m.merge(E, b),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: h,
        className: "rbc-time-gutter",
        getters: v
      }), this.renderEvents(s, z, A, f())));
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, f = s.getters, d = s.selected, h = s.popupOffset, p = s.handleDragStart, v = function() {
        return o.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ g.createElement(yn, {
        overlay: i,
        accessors: l,
        localizer: c,
        components: u,
        getters: f,
        selected: d,
        popupOffset: h,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: p,
        show: !!i.position,
        overlayDisplay: this.overlayDisplay,
        onHide: v
      });
    }
  }, {
    key: "clearSelection",
    value: function() {
      clearTimeout(this._selectTimer), this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function() {
      var n = this;
      this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest), this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
        var a, o = (a = n.gutterRef) !== null && a !== void 0 && a.current ? zr(n.gutterRef.current) : void 0;
        o && n.state.gutterWidth !== o && n.setState({
          gutterWidth: o
        });
      });
    }
  }, {
    key: "applyScroll",
    value: function() {
      if (this._scrollRatio != null && this.props.enableAutoScroll === !0) {
        var n = this.contentRef.current;
        n.scrollTop = n.scrollHeight * this._scrollRatio, this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props, a = n.min, o = n.max, i = n.scrollToTime, s = n.localizer, l = s.diff(s.merge(i, a), i, "milliseconds"), c = s.diff(a, o, "milliseconds");
      this._scrollRatio = l / c;
    }
  }]), t;
}(H.Component);
it.defaultProps = {
  step: 30,
  timeslots: 2
};
var U_ = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], gr = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, f = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, d = n.enableAutoScroll, h = d === void 0 ? !0 : d, p = $e(n, U_), v = t.range(a, {
        localizer: o
      });
      return /* @__PURE__ */ g.createElement(it, Object.assign({}, p, {
        range: v,
        eventOffset: 10,
        localizer: o,
        min: s,
        max: c,
        scrollToTime: f,
        enableAutoScroll: h
      }));
    }
  }]), t;
}(g.Component);
gr.range = function(e, t) {
  var r = t.localizer;
  return [r.startOf(e, "day")];
};
gr.navigate = function(e, t, r) {
  var n = r.localizer;
  switch (t) {
    case he.PREVIOUS:
      return n.add(e, -1, "day");
    case he.NEXT:
      return n.add(e, 1, "day");
    default:
      return e;
  }
};
gr.title = function(e, t) {
  var r = t.localizer;
  return r.format(e, "dayHeaderFormat");
};
var Y_ = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], xe = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, f = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, d = n.enableAutoScroll, h = d === void 0 ? !0 : d, p = $e(n, Y_), v = t.range(a, this.props);
      return /* @__PURE__ */ g.createElement(it, Object.assign({}, p, {
        range: v,
        eventOffset: 15,
        localizer: o,
        min: s,
        max: c,
        scrollToTime: f,
        enableAutoScroll: h
      }));
    }
  }]), t;
}(g.Component);
xe.defaultProps = it.defaultProps;
xe.navigate = function(e, t, r) {
  var n = r.localizer;
  switch (t) {
    case he.PREVIOUS:
      return n.add(e, -1, "week");
    case he.NEXT:
      return n.add(e, 1, "week");
    default:
      return e;
  }
};
xe.range = function(e, t) {
  var r = t.localizer, n = r.startOfWeek(), a = r.startOf(e, "week", n), o = r.endOf(e, "week", n);
  return r.range(a, o);
};
xe.title = function(e, t) {
  var r = t.localizer, n = xe.range(e, {
    localizer: r
  }), a = Yo(n), o = a[0], i = a.slice(1);
  return r.format({
    start: o,
    end: i.pop()
  }, "dayRangeHeaderFormat");
};
var K_ = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function wn(e, t) {
  return xe.range(e, t).filter(function(r) {
    return [6, 0].indexOf(r.getDay()) === -1;
  });
}
var Rt = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    return se(this, t), de(this, t, arguments);
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, f = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, d = n.enableAutoScroll, h = d === void 0 ? !0 : d, p = $e(n, K_), v = wn(a, this.props);
      return /* @__PURE__ */ g.createElement(it, Object.assign({}, p, {
        range: v,
        eventOffset: 15,
        localizer: o,
        min: s,
        max: c,
        scrollToTime: f,
        enableAutoScroll: h
      }));
    }
  }]), t;
}(g.Component);
Rt.defaultProps = it.defaultProps;
Rt.range = wn;
Rt.navigate = xe.navigate;
Rt.title = function(e, t) {
  var r = t.localizer, n = wn(e, {
    localizer: r
  }), a = Yo(n), o = a[0], i = a.slice(1);
  return r.format({
    start: o,
    end: i.pop()
  }, "dayRangeHeaderFormat");
};
function Re(e) {
  var t = e.accessors, r = e.components, n = e.date, a = e.events, o = e.getters, i = e.length, s = e.localizer, l = e.onDoubleClickEvent, c = e.onSelectEvent, u = e.selected, f = H.useRef(null), d = H.useRef(null), h = H.useRef(null), p = H.useRef(null), v = H.useRef(null);
  H.useEffect(function() {
    b();
  });
  var m = function(x, L, z) {
    var A = r.event, M = r.date;
    return L = L.filter(function(j) {
      return St(j, s.startOf(x, "day"), s.endOf(x, "day"), t, s);
    }), L.map(function(j, Y) {
      var F = t.title(j), C = t.end(j), O = t.start(j), I = o.eventProp(j, O, C, hr(j, u)), k = Y === 0 && s.format(x, "agendaDateFormat"), U = Y === 0 ? /* @__PURE__ */ g.createElement("td", {
        rowSpan: L.length,
        className: "rbc-agenda-date-cell"
      }, M ? /* @__PURE__ */ g.createElement(M, {
        day: x,
        label: k
      }) : k) : !1;
      return /* @__PURE__ */ g.createElement("tr", {
        key: z + "_" + Y,
        className: I.className,
        style: I.style
      }, U, /* @__PURE__ */ g.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, y(x, j)), /* @__PURE__ */ g.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function(K) {
          return c && c(j, K);
        },
        onDoubleClick: function(K) {
          return l && l(j, K);
        }
      }, A ? /* @__PURE__ */ g.createElement(A, {
        event: j,
        title: F
      }) : F));
    }, []);
  }, y = function(x, L) {
    var z = "", A = r.time, M = s.messages.allDay, j = t.end(L), Y = t.start(L);
    return t.allDay(L) || (s.eq(Y, j) ? M = s.format(Y, "agendaTimeFormat") : s.isSameDate(Y, j) ? M = s.format({
      start: Y,
      end: j
    }, "agendaTimeRangeFormat") : s.isSameDate(x, Y) ? M = s.format(Y, "agendaTimeFormat") : s.isSameDate(x, j) && (M = s.format(j, "agendaTimeFormat"))), s.gt(x, Y, "day") && (z = "rbc-continues-prior"), s.lt(x, j, "day") && (z += " rbc-continues-after"), /* @__PURE__ */ g.createElement("span", {
      className: z.trim()
    }, A ? /* @__PURE__ */ g.createElement(A, {
      event: L,
      day: x,
      label: M
    }) : M);
  }, b = function() {
    if (v.current) {
      var x = f.current, L = v.current.firstChild;
      if (L) {
        var z = p.current.scrollHeight > p.current.clientHeight, A = [], M = A;
        A = [zr(L.children[0]), zr(L.children[1])], (M[0] !== A[0] || M[1] !== A[1]) && (d.current.style.width = A[0] + "px", h.current.style.width = A[1] + "px"), z ? (os(x, "rbc-header-overflowing"), x.style.marginRight = $o() + "px") : is(x, "rbc-header-overflowing");
      }
    }
  }, $ = s.messages, w = s.add(n, i, "day"), _ = s.range(n, w, "day");
  return a = a.filter(function(E) {
    return St(E, s.startOf(n, "day"), s.endOf(w, "day"), t, s);
  }), a.sort(function(E, x) {
    return +t.start(E) - +t.start(x);
  }), /* @__PURE__ */ g.createElement("div", {
    className: "rbc-agenda-view"
  }, a.length !== 0 ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("table", {
    ref: f,
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ g.createElement("thead", null, /* @__PURE__ */ g.createElement("tr", null, /* @__PURE__ */ g.createElement("th", {
    className: "rbc-header",
    ref: d
  }, $.date), /* @__PURE__ */ g.createElement("th", {
    className: "rbc-header",
    ref: h
  }, $.time), /* @__PURE__ */ g.createElement("th", {
    className: "rbc-header"
  }, $.event)))), /* @__PURE__ */ g.createElement("div", {
    className: "rbc-agenda-content",
    ref: p
  }, /* @__PURE__ */ g.createElement("table", {
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ g.createElement("tbody", {
    ref: v
  }, _.map(function(E, x) {
    return m(E, a, x);
  }))))) : /* @__PURE__ */ g.createElement("span", {
    className: "rbc-agenda-empty"
  }, $.noEventsInRange));
}
Re.defaultProps = {
  length: 30
};
Re.range = function(e, t) {
  var r = t.length, n = r === void 0 ? Re.defaultProps.length : r, a = t.localizer, o = a.add(e, n, "day");
  return {
    start: e,
    end: o
  };
};
Re.navigate = function(e, t, r) {
  var n = r.length, a = n === void 0 ? Re.defaultProps.length : n, o = r.localizer;
  switch (t) {
    case he.PREVIOUS:
      return o.add(e, -a, "day");
    case he.NEXT:
      return o.add(e, a, "day");
    default:
      return e;
  }
};
Re.title = function(e, t) {
  var r = t.length, n = r === void 0 ? Re.defaultProps.length : r, a = t.localizer, o = a.add(e, n, "day");
  return a.format({
    start: e,
    end: o
  }, "agendaHeaderFormat");
};
var Wt = Le(Le(Le(Le(Le({}, fe.MONTH, mr), fe.WEEK, xe), fe.WORK_WEEK, Rt), fe.DAY, gr), fe.AGENDA, Re), G_ = ["action", "date", "today"];
function q_(e, t) {
  var r = t.action, n = t.date, a = t.today, o = $e(t, G_);
  switch (e = typeof e == "string" ? Wt[e] : e, r) {
    case he.TODAY:
      n = a || /* @__PURE__ */ new Date();
      break;
    case he.DATE:
      break;
    default:
      dt(e && typeof e.navigate == "function", "Calendar View components must implement a static `.navigate(date, action)` method.s"), n = e.navigate(n, r, o);
  }
  return n;
}
var V_ = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    var r;
    se(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return r = de(this, t, [].concat(a)), r.navigate = function(i) {
      r.props.onNavigate(i);
    }, r.view = function(i) {
      r.props.onView(i);
    }, r;
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.localizer.messages, o = n.label;
      return /* @__PURE__ */ g.createElement("div", {
        className: "rbc-toolbar"
      }, /* @__PURE__ */ g.createElement("span", {
        className: "rbc-btn-group"
      }, /* @__PURE__ */ g.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, he.TODAY)
      }, a.today), /* @__PURE__ */ g.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, he.PREVIOUS)
      }, a.previous), /* @__PURE__ */ g.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, he.NEXT)
      }, a.next)), /* @__PURE__ */ g.createElement("span", {
        className: "rbc-toolbar-label"
      }, o), /* @__PURE__ */ g.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(a)));
    }
  }, {
    key: "viewNamesGroup",
    value: function(n) {
      var a = this, o = this.props.views, i = this.props.view;
      if (o.length > 1)
        return o.map(function(s) {
          return /* @__PURE__ */ g.createElement("button", {
            type: "button",
            key: s,
            className: oe({
              "rbc-active": i === s
            }),
            onClick: a.view.bind(null, s)
          }, n[s]);
        });
    }
  }]), t;
}(g.Component);
function X_(e, t) {
  var r = null;
  return typeof t == "function" ? r = t(e) : typeof t == "string" && Te(e) === "object" && e != null && t in e && (r = e[t]), r;
}
var Ce = function(t) {
  return function(r) {
    return X_(r, t);
  };
}, Z_ = ["view", "date", "getNow", "onNavigate"], J_ = ["view", "toolbar", "events", "backgroundEvents", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function Ti(e) {
  if (Array.isArray(e))
    return e;
  for (var t = [], r = 0, n = Object.entries(e); r < n.length; r++) {
    var a = Ee(n[r], 2), o = a[0], i = a[1];
    i && t.push(o);
  }
  return t;
}
function Q_(e, t) {
  var r = t.views, n = Ti(r);
  return n.indexOf(e) !== -1;
}
var Mi = /* @__PURE__ */ function(e) {
  ve(t, e);
  function t() {
    var r;
    se(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return r = de(this, t, [].concat(a)), r.getViews = function() {
      var i = r.props.views;
      return Array.isArray(i) ? gS(i, function(s, l) {
        return s[l] = Wt[l];
      }, {}) : Te(i) === "object" ? _S(i, function(s, l) {
        return s === !0 ? Wt[l] : s;
      }) : Wt;
    }, r.getView = function() {
      var i = r.getViews();
      return i[r.props.view];
    }, r.getDrilldownView = function(i) {
      var s = r.props, l = s.view, c = s.drilldownView, u = s.getDrilldownView;
      return u ? u(i, l, Object.keys(r.getViews())) : c;
    }, r.handleRangeChange = function(i, s, l) {
      var c = r.props, u = c.onRangeChange, f = c.localizer;
      u && s.range && u(s.range(i, {
        localizer: f
      }), l);
    }, r.handleNavigate = function(i, s) {
      var l = r.props, c = l.view, u = l.date, f = l.getNow, d = l.onNavigate, h = $e(l, Z_), p = r.getView(), v = f();
      u = q_(p, J(J({}, h), {}, {
        action: i,
        date: s || u || v,
        today: v
      })), d(u, c, i), r.handleRangeChange(u, p);
    }, r.handleViewChange = function(i) {
      i !== r.props.view && Q_(i, r.props) && r.props.onView(i);
      var s = r.getViews();
      r.handleRangeChange(r.props.date || r.props.getNow(), s[i], i);
    }, r.handleSelectEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onSelectEvent, s);
    }, r.handleDoubleClickEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onDoubleClickEvent, s);
    }, r.handleKeyPressEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(r.props.onKeyPressEvent, s);
    }, r.handleSelectSlot = function(i) {
      re(r.props.onSelectSlot, i);
    }, r.handleDrillDown = function(i, s) {
      var l = r.props.onDrillDown;
      if (l) {
        l(i, s, r.drilldownView);
        return;
      }
      s && r.handleViewChange(s), r.handleNavigate(he.DATE, i);
    }, r.state = {
      context: t.getContext(r.props)
    }, r;
  }
  return le(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.view, o = n.toolbar, i = n.events, s = n.backgroundEvents, l = n.style, c = n.className, u = n.elementProps, f = n.date, d = n.getNow, h = n.length, p = n.showMultiDayTimes, v = n.onShowMore, m = n.doShowMoreDrillDown;
      n.components, n.formats, n.messages, n.culture;
      var y = $e(n, J_);
      f = f || d();
      var b = this.getView(), $ = this.state.context, w = $.accessors, _ = $.components, E = $.getters, x = $.localizer, L = $.viewNames, z = _.toolbar || V_, A = b.title(f, {
        localizer: x,
        length: h
      });
      return /* @__PURE__ */ g.createElement("div", Object.assign({}, u, {
        className: oe(c, "rbc-calendar", y.rtl && "rbc-rtl"),
        style: l
      }), o && /* @__PURE__ */ g.createElement(z, {
        date: f,
        view: a,
        views: L,
        label: A,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: x
      }), /* @__PURE__ */ g.createElement(b, Object.assign({}, y, {
        events: i,
        backgroundEvents: s,
        date: f,
        getNow: d,
        length: h,
        localizer: x,
        getters: E,
        components: _,
        accessors: w,
        showMultiDayTimes: p,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: v,
        doShowMoreDrillDown: m
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n) {
      return {
        context: t.getContext(n)
      };
    }
  }, {
    key: "getContext",
    value: function(n) {
      var a = n.startAccessor, o = n.endAccessor, i = n.allDayAccessor, s = n.tooltipAccessor, l = n.titleAccessor, c = n.resourceAccessor, u = n.resourceIdAccessor, f = n.resourceTitleAccessor, d = n.eventPropGetter, h = n.backgroundEventPropGetter, p = n.slotPropGetter, v = n.slotGroupPropGetter, m = n.dayPropGetter, y = n.view, b = n.views, $ = n.localizer, w = n.culture, _ = n.messages, E = _ === void 0 ? {} : _, x = n.components, L = x === void 0 ? {} : x, z = n.formats, A = z === void 0 ? {} : z, M = Ti(b), j = n_(E);
      return {
        viewNames: M,
        localizer: t_($, w, A, j),
        getters: {
          eventProp: function() {
            return d && d.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function() {
            return h && h.apply(void 0, arguments) || {};
          },
          slotProp: function() {
            return p && p.apply(void 0, arguments) || {};
          },
          slotGroupProp: function() {
            return v && v.apply(void 0, arguments) || {};
          },
          dayProp: function() {
            return m && m.apply(void 0, arguments) || {};
          }
        },
        components: aS(L[y] || {}, X1(L, M), {
          eventWrapper: De,
          backgroundEventWrapper: De,
          eventContainerWrapper: De,
          dateCellWrapper: De,
          weekWrapper: De,
          timeSlotWrapper: De,
          timeGutterWrapper: De
        }),
        accessors: {
          start: Ce(a),
          end: Ce(o),
          allDay: Ce(i),
          tooltip: Ce(s),
          title: Ce(l),
          resource: Ce(c),
          resourceId: Ce(u),
          resourceTitle: Ce(f)
        }
      };
    }
  }]), t;
}(g.Component);
Mi.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: !1,
  toolbar: !0,
  view: fe.MONTH,
  views: [fe.MONTH, fe.WEEK, fe.DAY, fe.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: 1 / 0,
  doShowMoreDrillDown: !0,
  drilldownView: fe.DAY,
  titleAccessor: "title",
  tooltipAccessor: "title",
  allDayAccessor: "allDay",
  startAccessor: "start",
  endAccessor: "end",
  resourceAccessor: "resourceId",
  resourceIdAccessor: "id",
  resourceTitleAccessor: "title",
  longPressThreshold: 250,
  getNow: function() {
    return /* @__PURE__ */ new Date();
  },
  dayLayoutAlgorithm: "overlap"
};
var eD = eo(Mi, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
}), tD = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "MMMM DD", r) + " – " + // updated to use this localizer 'eq()' method
  n.format(o, n.eq(a, o, "month") ? "DD" : "MMMM DD", r);
}, rD = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "L", r) + " – " + n.format(o, "L", r);
}, Mr = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "LT", r) + " – " + n.format(o, "LT", r);
}, nD = function(t, r, n) {
  var a = t.start;
  return n.format(a, "LT", r) + " – ";
}, aD = function(t, r, n) {
  var a = t.end;
  return " – " + n.format(a, "LT", r);
}, oD = {
  dateFormat: "DD",
  dayFormat: "DD ddd",
  weekdayFormat: "ddd",
  selectRangeFormat: Mr,
  eventTimeRangeFormat: Mr,
  eventTimeRangeStartFormat: nD,
  eventTimeRangeEndFormat: aD,
  timeGutterFormat: "LT",
  monthHeaderFormat: "MMMM YYYY",
  dayHeaderFormat: "dddd MMM DD",
  dayRangeHeaderFormat: tD,
  agendaHeaderFormat: rD,
  agendaDateFormat: "ddd MMM DD",
  agendaTimeFormat: "LT",
  agendaTimeRangeFormat: Mr
};
function Pe(e) {
  var t = e && e.toLowerCase();
  return t === "FullYear" ? t = "year" : t || (t = void 0), t;
}
function iD(e) {
  e.extend(ES), e.extend(TS), e.extend(AS), e.extend(PS), e.extend(RS), e.extend(IS), e.extend(LS);
  var t = function(T, R) {
    return R ? T.locale(R) : T;
  }, r = e.tz ? e.tz : e;
  function n(D) {
    return r(D).toDate().getTimezoneOffset();
  }
  function a(D, T) {
    var R, N = r(D), W = r(T);
    if (!r.tz)
      return N.toDate().getTimezoneOffset() - W.toDate().getTimezoneOffset();
    var G = (R = N.tz().$x.$timezone) !== null && R !== void 0 ? R : e.tz.guess(), ee = -r.tz(+N, G).utcOffset(), V = -r.tz(+W, G).utcOffset();
    return ee - V;
  }
  function o(D) {
    var T = r(D).startOf("day");
    return a(T, D);
  }
  function i(D, T, R) {
    var N = Pe(R), W = N ? r(D).startOf(N) : r(D), G = N ? r(T).startOf(N) : r(T);
    return [W, G, N];
  }
  function s() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, T = arguments.length > 1 ? arguments[1] : void 0, R = Pe(T);
    return R ? r(D).startOf(R).toDate() : r(D).toDate();
  }
  function l() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, T = arguments.length > 1 ? arguments[1] : void 0, R = Pe(T);
    return R ? r(D).endOf(R).toDate() : r(D).toDate();
  }
  function c(D, T, R) {
    var N = i(D, T, R), W = Ee(N, 3), G = W[0], ee = W[1], V = W[2];
    return G.isSame(ee, V);
  }
  function u(D, T, R) {
    return !c(D, T, R);
  }
  function f(D, T, R) {
    var N = i(D, T, R), W = Ee(N, 3), G = W[0], ee = W[1], V = W[2];
    return G.isAfter(ee, V);
  }
  function d(D, T, R) {
    var N = i(D, T, R), W = Ee(N, 3), G = W[0], ee = W[1], V = W[2];
    return G.isBefore(ee, V);
  }
  function h(D, T, R) {
    var N = i(D, T, R), W = Ee(N, 3), G = W[0], ee = W[1], V = W[2];
    return G.isSameOrBefore(ee, V);
  }
  function p(D, T, R) {
    var N = i(D, T, R), W = Ee(N, 3), G = W[0], ee = W[1], V = W[2];
    return G.isSameOrBefore(ee, V);
  }
  function v(D, T, R) {
    var N = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day", W = Pe(N), G = r(D), ee = r(T), V = r(R);
    return G.isBetween(ee, V, W, "[]");
  }
  function m(D, T) {
    var R = r(D), N = r(T), W = e.min(R, N);
    return W.toDate();
  }
  function y(D, T) {
    var R = r(D), N = r(T), W = e.max(R, N);
    return W.toDate();
  }
  function b(D, T) {
    if (!D && !T)
      return null;
    var R = r(T).format("HH:mm:ss"), N = r(D).startOf("day").format("MM/DD/YYYY");
    return e("".concat(N, " ").concat(R), "MM/DD/YYYY HH:mm:ss").toDate();
  }
  function $(D, T, R) {
    var N = Pe(R);
    return r(D).add(T, N).toDate();
  }
  function w(D, T) {
    for (var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", N = Pe(R), W = r(D).toDate(), G = []; p(W, T); )
      G.push(W), W = $(W, 1, N);
    return G;
  }
  function _(D, T) {
    var R = Pe(T), N = s(D, R);
    return c(N, D) ? N : $(N, 1, R);
  }
  function E(D, T) {
    var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", N = Pe(R), W = r(D), G = r(T);
    return G.diff(W, N);
  }
  function x(D) {
    var T = r(D);
    return T.minutes();
  }
  function L(D) {
    var T = D ? e.localeData(D) : e.localeData();
    return T ? T.firstDayOfWeek() : 0;
  }
  function z(D) {
    return r(D).startOf("month").startOf("week").toDate();
  }
  function A(D) {
    return r(D).endOf("month").endOf("week").toDate();
  }
  function M(D) {
    for (var T = z(D), R = A(D), N = []; p(T, R); )
      N.push(T), T = $(T, 1, "d");
    return N;
  }
  function j(D, T, R) {
    return r(D).startOf("day").minute(T + R).toDate();
  }
  function Y(D, T) {
    return E(D, T, "minutes");
  }
  function F(D) {
    var T = r(D).startOf("day"), R = r(D);
    return R.diff(T, "minutes") + o(D);
  }
  function C(D, T) {
    var R = r(D), N = r(T);
    return R.isBefore(N, "day");
  }
  function O(D, T, R) {
    var N = r(T), W = r(R);
    return N.isSameOrAfter(W, "minutes");
  }
  function I(D, T) {
    var R = r(D), N = r(T);
    return N.diff(R, "day");
  }
  function k(D) {
    var T = D.evtA, R = T.start, N = T.end, W = T.allDay, G = D.evtB, ee = G.start, V = G.end, ne = G.allDay, me = +s(R, "day") - +s(ee, "day"), _e = I(R, N), Ae = I(ee, V);
    return me || // sort by start Day first
    Ae - _e || // events spanning multiple days go first
    !!ne - !!W || // then allDay single day events
    +R - +ee || // then sort by start time *don't need dayjs conversion here
    +N - +V;
  }
  function U(D) {
    var T = D.event, R = T.start, N = T.end, W = D.range, G = W.start, ee = W.end, V = r(R).startOf("day"), ne = r(N), me = r(G), _e = r(ee), Ae = V.isSameOrBefore(_e, "day"), xi = !V.isSame(ne, "minutes"), Ri = xi ? ne.isAfter(me, "minutes") : ne.isSameOrAfter(me, "minutes");
    return Ae && Ri;
  }
  function B(D, T) {
    var R = r(D), N = r(T);
    return R.isSame(N, "day");
  }
  function K() {
    var D = /* @__PURE__ */ new Date(), T = /-/.test(D.toString()) ? "-" : "", R = D.getTimezoneOffset(), N = Number("".concat(T).concat(Math.abs(R))), W = r().utcOffset();
    return W > N ? 1 : 0;
  }
  return new e_({
    formats: oD,
    firstOfWeek: L,
    firstVisibleDay: z,
    lastVisibleDay: A,
    visibleDays: M,
    format: function(T, R, N) {
      return t(r(T), N).format(R);
    },
    lt: d,
    lte: p,
    gt: f,
    gte: h,
    eq: c,
    neq: u,
    merge: b,
    inRange: v,
    startOf: s,
    endOf: l,
    range: w,
    add: $,
    diff: E,
    ceil: _,
    min: m,
    max: y,
    minutes: x,
    getSlotDate: j,
    getTimezoneOffset: n,
    getDstOffset: a,
    getTotalMin: Y,
    getMinutesFromMidnight: F,
    continuesPrior: C,
    continuesAfter: O,
    sortEvents: k,
    inEventRange: U,
    isSameDate: B,
    browserTZOffset: K
  });
}
var Ai = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", l = "hour", c = "day", u = "week", f = "month", d = "quarter", h = "year", p = "date", v = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(F) {
      var C = ["th", "st", "nd", "rd"], O = F % 100;
      return "[" + F + (C[(O - 20) % 10] || C[O] || C[0]) + "]";
    } }, $ = function(F, C, O) {
      var I = String(F);
      return !I || I.length >= C ? F : "" + Array(C + 1 - I.length).join(O) + F;
    }, w = { s: $, z: function(F) {
      var C = -F.utcOffset(), O = Math.abs(C), I = Math.floor(O / 60), k = O % 60;
      return (C <= 0 ? "+" : "-") + $(I, 2, "0") + ":" + $(k, 2, "0");
    }, m: function F(C, O) {
      if (C.date() < O.date())
        return -F(O, C);
      var I = 12 * (O.year() - C.year()) + (O.month() - C.month()), k = C.clone().add(I, f), U = O - k < 0, B = C.clone().add(I + (U ? -1 : 1), f);
      return +(-(I + (O - k) / (U ? k - B : B - k)) || 0);
    }, a: function(F) {
      return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
    }, p: function(F) {
      return { M: f, y: h, w: u, d: c, D: p, h: l, m: s, s: i, ms: o, Q: d }[F] || String(F || "").toLowerCase().replace(/s$/, "");
    }, u: function(F) {
      return F === void 0;
    } }, _ = "en", E = {};
    E[_] = b;
    var x = "$isDayjsObject", L = function(F) {
      return F instanceof j || !(!F || !F[x]);
    }, z = function F(C, O, I) {
      var k;
      if (!C)
        return _;
      if (typeof C == "string") {
        var U = C.toLowerCase();
        E[U] && (k = U), O && (E[U] = O, k = U);
        var B = C.split("-");
        if (!k && B.length > 1)
          return F(B[0]);
      } else {
        var K = C.name;
        E[K] = C, k = K;
      }
      return !I && k && (_ = k), k || !I && _;
    }, A = function(F, C) {
      if (L(F))
        return F.clone();
      var O = typeof C == "object" ? C : {};
      return O.date = F, O.args = arguments, new j(O);
    }, M = w;
    M.l = z, M.i = L, M.w = function(F, C) {
      return A(F, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var j = function() {
      function F(O) {
        this.$L = z(O.locale, null, !0), this.parse(O), this.$x = this.$x || O.x || {}, this[x] = !0;
      }
      var C = F.prototype;
      return C.parse = function(O) {
        this.$d = function(I) {
          var k = I.date, U = I.utc;
          if (k === null)
            return /* @__PURE__ */ new Date(NaN);
          if (M.u(k))
            return /* @__PURE__ */ new Date();
          if (k instanceof Date)
            return new Date(k);
          if (typeof k == "string" && !/Z$/i.test(k)) {
            var B = k.match(m);
            if (B) {
              var K = B[2] - 1 || 0, D = (B[7] || "0").substring(0, 3);
              return U ? new Date(Date.UTC(B[1], K, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, D)) : new Date(B[1], K, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, D);
            }
          }
          return new Date(k);
        }(O), this.init();
      }, C.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, C.$utils = function() {
        return M;
      }, C.isValid = function() {
        return this.$d.toString() !== v;
      }, C.isSame = function(O, I) {
        var k = A(O);
        return this.startOf(I) <= k && k <= this.endOf(I);
      }, C.isAfter = function(O, I) {
        return A(O) < this.startOf(I);
      }, C.isBefore = function(O, I) {
        return this.endOf(I) < A(O);
      }, C.$g = function(O, I, k) {
        return M.u(O) ? this[I] : this.set(k, O);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(O, I) {
        var k = this, U = !!M.u(I) || I, B = M.p(O), K = function(V, ne) {
          var me = M.w(k.$u ? Date.UTC(k.$y, ne, V) : new Date(k.$y, ne, V), k);
          return U ? me : me.endOf(c);
        }, D = function(V, ne) {
          return M.w(k.toDate()[V].apply(k.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), k);
        }, T = this.$W, R = this.$M, N = this.$D, W = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case h:
            return U ? K(1, 0) : K(31, 11);
          case f:
            return U ? K(1, R) : K(0, R + 1);
          case u:
            var G = this.$locale().weekStart || 0, ee = (T < G ? T + 7 : T) - G;
            return K(U ? N - ee : N + (6 - ee), R);
          case c:
          case p:
            return D(W + "Hours", 0);
          case l:
            return D(W + "Minutes", 1);
          case s:
            return D(W + "Seconds", 2);
          case i:
            return D(W + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(O) {
        return this.startOf(O, !1);
      }, C.$set = function(O, I) {
        var k, U = M.p(O), B = "set" + (this.$u ? "UTC" : ""), K = (k = {}, k[c] = B + "Date", k[p] = B + "Date", k[f] = B + "Month", k[h] = B + "FullYear", k[l] = B + "Hours", k[s] = B + "Minutes", k[i] = B + "Seconds", k[o] = B + "Milliseconds", k)[U], D = U === c ? this.$D + (I - this.$W) : I;
        if (U === f || U === h) {
          var T = this.clone().set(p, 1);
          T.$d[K](D), T.init(), this.$d = T.set(p, Math.min(this.$D, T.daysInMonth())).$d;
        } else
          K && this.$d[K](D);
        return this.init(), this;
      }, C.set = function(O, I) {
        return this.clone().$set(O, I);
      }, C.get = function(O) {
        return this[M.p(O)]();
      }, C.add = function(O, I) {
        var k, U = this;
        O = Number(O);
        var B = M.p(I), K = function(R) {
          var N = A(U);
          return M.w(N.date(N.date() + Math.round(R * O)), U);
        };
        if (B === f)
          return this.set(f, this.$M + O);
        if (B === h)
          return this.set(h, this.$y + O);
        if (B === c)
          return K(1);
        if (B === u)
          return K(7);
        var D = (k = {}, k[s] = n, k[l] = a, k[i] = r, k)[B] || 1, T = this.$d.getTime() + O * D;
        return M.w(T, this);
      }, C.subtract = function(O, I) {
        return this.add(-1 * O, I);
      }, C.format = function(O) {
        var I = this, k = this.$locale();
        if (!this.isValid())
          return k.invalidDate || v;
        var U = O || "YYYY-MM-DDTHH:mm:ssZ", B = M.z(this), K = this.$H, D = this.$m, T = this.$M, R = k.weekdays, N = k.months, W = k.meridiem, G = function(ne, me, _e, Ae) {
          return ne && (ne[me] || ne(I, U)) || _e[me].slice(0, Ae);
        }, ee = function(ne) {
          return M.s(K % 12 || 12, ne, "0");
        }, V = W || function(ne, me, _e) {
          var Ae = ne < 12 ? "AM" : "PM";
          return _e ? Ae.toLowerCase() : Ae;
        };
        return U.replace(y, function(ne, me) {
          return me || function(_e) {
            switch (_e) {
              case "YY":
                return String(I.$y).slice(-2);
              case "YYYY":
                return M.s(I.$y, 4, "0");
              case "M":
                return T + 1;
              case "MM":
                return M.s(T + 1, 2, "0");
              case "MMM":
                return G(k.monthsShort, T, N, 3);
              case "MMMM":
                return G(N, T);
              case "D":
                return I.$D;
              case "DD":
                return M.s(I.$D, 2, "0");
              case "d":
                return String(I.$W);
              case "dd":
                return G(k.weekdaysMin, I.$W, R, 2);
              case "ddd":
                return G(k.weekdaysShort, I.$W, R, 3);
              case "dddd":
                return R[I.$W];
              case "H":
                return String(K);
              case "HH":
                return M.s(K, 2, "0");
              case "h":
                return ee(1);
              case "hh":
                return ee(2);
              case "a":
                return V(K, D, !0);
              case "A":
                return V(K, D, !1);
              case "m":
                return String(D);
              case "mm":
                return M.s(D, 2, "0");
              case "s":
                return String(I.$s);
              case "ss":
                return M.s(I.$s, 2, "0");
              case "SSS":
                return M.s(I.$ms, 3, "0");
              case "Z":
                return B;
            }
            return null;
          }(ne) || B.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(O, I, k) {
        var U, B = this, K = M.p(I), D = A(O), T = (D.utcOffset() - this.utcOffset()) * n, R = this - D, N = function() {
          return M.m(B, D);
        };
        switch (K) {
          case h:
            U = N() / 12;
            break;
          case f:
            U = N();
            break;
          case d:
            U = N() / 3;
            break;
          case u:
            U = (R - T) / 6048e5;
            break;
          case c:
            U = (R - T) / 864e5;
            break;
          case l:
            U = R / a;
            break;
          case s:
            U = R / n;
            break;
          case i:
            U = R / r;
            break;
          default:
            U = R;
        }
        return k ? U : M.a(U);
      }, C.daysInMonth = function() {
        return this.endOf(f).$D;
      }, C.$locale = function() {
        return E[this.$L];
      }, C.locale = function(O, I) {
        if (!O)
          return this.$L;
        var k = this.clone(), U = z(O, I, !0);
        return U && (k.$L = U), k;
      }, C.clone = function() {
        return M.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, F;
    }(), Y = j.prototype;
    return A.prototype = Y, [["$ms", o], ["$s", i], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", h], ["$D", p]].forEach(function(F) {
      Y[F[1]] = function(C) {
        return this.$g(C, F[0], F[1]);
      };
    }), A.extend = function(F, C) {
      return F.$i || (F(C, j, A), F.$i = !0), A;
    }, A.locale = z, A.isDayjs = L, A.unix = function(F) {
      return A(1e3 * F);
    }, A.en = E[_], A.Ls = E, A.p = {}, A;
  });
})(Ai);
var Ci = Ai.exports;
const Oe = /* @__PURE__ */ ie(Ci);
var Pi = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pe, function() {
    return function(r, n, a) {
      a.updateLocale = function(o, i) {
        var s = a.Ls[o];
        if (s)
          return (i ? Object.keys(i) : []).forEach(function(l) {
            s[l] = i[l];
          }), s;
      };
    };
  });
})(Pi);
var sD = Pi.exports;
const lD = /* @__PURE__ */ ie(sD);
var cD = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(Ci);
  })(pe, function(r) {
    function n(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var a = n(r), o = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), i = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), s = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), c = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function u(p, v, m) {
      var y, b;
      return m === "m" ? v ? "минута" : "минуту" : p + " " + (y = +p, b = { mm: v ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[m].split("_"), y % 10 == 1 && y % 100 != 11 ? b[0] : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? b[1] : b[2]);
    }
    var f = function(p, v) {
      return c.test(v) ? o[p.month()] : i[p.month()];
    };
    f.s = i, f.f = o;
    var d = function(p, v) {
      return c.test(v) ? s[p.month()] : l[p.month()];
    };
    d.s = l, d.f = s;
    var h = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: f, monthsShort: d, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: u, mm: u, h: "час", hh: u, d: "день", dd: u, M: "месяц", MM: u, y: "год", yy: u }, ordinal: function(p) {
      return p;
    }, meridiem: function(p) {
      return p < 4 ? "ночи" : p < 12 ? "утра" : p < 17 ? "дня" : "вечера";
    } };
    return a.default.locale(h, null, !0), h;
  });
})(cD);
Oe.extend(lD);
Oe.locale("ru");
Oe.updateLocale("ru", {
  weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_")
});
const uD = iD(Oe), Ha = (e) => e.charAt(0).toUpperCase() + e.slice(1), fD = {
  monthHeaderFormat: (e, t, r) => Ha(r.format(e, "MMMM YYYY", t)),
  dayFormat: (e, t, r) => r.format(e, "D", t).toUpperCase(),
  weekdayFormat: (e, t, r) => r.format(e, "dd", t).toUpperCase(),
  dayRangeHeaderFormat: ({
    start: e,
    end: t
  }, r, n) => Ha(n.format(e, "MMMM D", r)) + " - " + n.format(t, "D", r)
}, dD = {
  today: "Сегодня",
  week: "Неделя",
  day: "День",
  month: "Месяц",
  work_week: "Рабочая неделя",
  agenda: "Список",
  previous: "<",
  next: ">"
}, vD = () => {
  const {
    query: e
  } = H.useContext(_t), [t, r] = H.useState(/* @__PURE__ */ new Date()), [n, a] = H.useState(null), o = H.useMemo(() => ({
    calendar: 1,
    startDate: Oe(t).startOf("month").toISOString(),
    endDate: Oe(t).startOf("month").add(1, "month").toISOString(),
    uid: e.data.data.id
  }), [t]), {
    data: i
  } = Br("/api/attendance/get-teacher-dates", {
    params: o,
    enabled: e.isSuccess
  }), s = H.useMemo(() => (i == null ? void 0 : i.data.map(({
    title: l,
    startDate: c,
    endDate: u,
    group_id: f
  }) => ({
    title: l,
    start: Oe(c).toDate(),
    end: Oe(u).toDate(),
    resource: {
      group_id: f,
      eventId: `${l}-${c}-${u}-${f}`,
      selectedEventId: n == null ? void 0 : n.resource.eventId,
      setSelectedEvent: a
    }
  }))) || [], [i == null ? void 0 : i.data]);
  return /* @__PURE__ */ S(eD, { events: s, localizer: uD, views: ["month", "week"], messages: dD, formats: fD, onNavigate: r, onSelectEvent: a, components: {
    eventWrapper: hD,
    month: {
      event: pD
    }
  }, selected: n });
}, pD = (e) => /* @__PURE__ */ S("div", { className: "custom-event-title", children: `${Oe(e.event.start).format("HH:mm")} ${e.title}` }), hD = (e) => {
  var s, l, c;
  const {
    event: t,
    selected: r,
    children: n
  } = e, a = H.useRef(null), o = Wi(() => {
    r && t.resource.eventId !== t.resource.selectedEventId && t.resource.setSelectedEvent(null);
  }), {
    data: i
  } = Br("/api/rest/eventGroups/" + (t == null ? void 0 : t.resource.group_id), {
    params: {
      format: "mini"
    },
    enabled: !!(t != null && t.resource.group_id)
  });
  return /* @__PURE__ */ be(Ii, { children: [
    /* @__PURE__ */ S("div", { id: t.resource.eventId, ref: a, children: n }),
    /* @__PURE__ */ S(ls, { open: r, anchorEl: a.current, placement: "bottom-start", ref: o, children: /* @__PURE__ */ S(ss, { sx: {
      border: 1,
      p: 1,
      bgcolor: "background.paper"
    }, children: /* @__PURE__ */ S(Ua, { header: `Группа: #${(s = i == null ? void 0 : i.data[0]) == null ? void 0 : s.id}`, children: /* @__PURE__ */ be("div", { children: [
      /* @__PURE__ */ S("p", { children: (l = i == null ? void 0 : i.data[0]) == null ? void 0 : l.name }),
      /* @__PURE__ */ S("p", { children: (c = i == null ? void 0 : i.data[0]) == null ? void 0 : c.teacher })
    ] }) }) }) })
  ] });
}, Wa = [{
  id: "main",
  title: "Основные",
  form: (e) => /* @__PURE__ */ S(ds, { form: e })
}, {
  id: "addit",
  title: "Дополнительно",
  form: (e) => /* @__PURE__ */ S(vs, { form: e })
}, {
  id: "photo",
  title: "Фото",
  form: () => null
}, {
  id: "achievments",
  title: "Достижения",
  form: (e) => /* @__PURE__ */ S(ps, { form: e })
}, {
  id: "cal",
  title: "Календарь",
  form: () => /* @__PURE__ */ S(vD, {})
}], mD = () => {
  var i;
  const {
    setTitle: e
  } = cs(), {
    query: t,
    mutation: r,
    formInstance: n
  } = g.useContext(_t), a = (s) => /* @__PURE__ */ S(gD, { children: n ? Wa[s].form(n) : null }), o = (i = t == null ? void 0 : t.data) == null ? void 0 : i.data.fio;
  return H.useEffect(() => {
    o && e(o);
  }, [o]), /* @__PURE__ */ S(Ua, { fit: !0, footer: /* @__PURE__ */ S(Bi, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", disabled: r == null ? void 0 : r.isPending, onClick: n == null ? void 0 : n.submit, children: "Сохранить" }), children: /* @__PURE__ */ S(fs, { tabs: Wa, tabComponentRenderer: a, css: {
    display: "flex",
    height: "100%"
  } }) });
}, gD = ({
  children: e
}) => {
  var n;
  const {
    query: t
  } = g.useContext(_t), r = (n = t == null ? void 0 : t.data) == null ? void 0 : n.data.id;
  return t != null && t.isLoading ? /* @__PURE__ */ S(Ni, { spinning: !0 }) : /* @__PURE__ */ S("div", { css: {
    width: "100%",
    flex: "1 1 0%",
    overflow: "auto",
    padding: "1.5rem"
  }, children: r ? /* @__PURE__ */ S(yD, { id: r, children: e }) : null });
}, yD = ({
  children: e,
  id: t
}) => {
  var s;
  const {
    query: r,
    setMutation: n,
    setFormInstance: a
  } = g.useContext(_t), o = hs(t);
  H.useEffect(() => {
    n(o);
  }, []), H.useEffect(() => {
    a(i);
  }, []);
  const i = Ui({
    mutation: o,
    schema: Ka,
    defaultValues: (s = r == null ? void 0 : r.data) == null ? void 0 : s.data
  });
  return e;
}, AD = () => /* @__PURE__ */ S(ms, { children: /* @__PURE__ */ S(mD, {}) });
export {
  AD as default
};
