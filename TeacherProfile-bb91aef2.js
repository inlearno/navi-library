import { b, j as i, Q as H, F as Me, S as fe } from "./library-d5a831b9.js";
import { r as f, R as M, g as ze } from "./react-6f5a8403.js";
import { b as p, T as D, j as Te, c as T, Q as Ie, P as Ae, D as P, k as ie, F as B, d as L, N as We, u as Fe, B as ne, a as Oe } from "./Phone-15635d21.js";
import { u as Ne, b as Le, a as ge } from "./DictionaryCell-8a3fecdd.js";
import "./icons-ad9f8a73.js";
import { g as Ze, i as je, D as I, k as m, A as ke } from "./mui-a6e6a5b1.js";
import { u as He } from "./useWindowController-316b1e5f.js";
import { u as Be } from "./useResetHttpQueryCache-feb128cf.js";
import { z as d } from "./index-d0beacff.js";
import { M as Ue } from "./ModalWindow-d79fec54.js";
import "./faEye-ea161ce6.js";
const Ve = ({
  className: n,
  orientation: o = "horizontal",
  textColor: e,
  tabComponentRenderer: t,
  tabs: r
}) => {
  const [a, s] = f.useState(0);
  return /* @__PURE__ */ b("div", { className: n, css: [{
    display: "flex",
    flexDirection: "column"
  }, o === "vertical" && {
    height: "100%",
    flexDirection: "row"
  }], children: [
    /* @__PURE__ */ i(je, { value: a, onChange: (l, u) => {
      s(u);
    }, orientation: o, css: [{
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
    }, o === "vertical" && {
      height: "100%",
      flexDirection: "row"
    }], textColor: e || "inherit", children: r.map(({
      id: l,
      title: u
    }) => /* @__PURE__ */ i(Ze, { className: "tab", label: u, css: {
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))"
    } }, l)) }),
    t(a)
  ] });
}, Ge = ({
  form: n
}) => {
  const o = n.watch("is_part_time_position");
  return /* @__PURE__ */ b(B, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ i(I, { css: {
      marginBottom: "1rem"
    }, children: "Личные данные" }),
    /* @__PURE__ */ b(m, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ i(m, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "last_name", render: ({
        field: e
      }) => /* @__PURE__ */ i(D, { css: {
        width: "100%"
      }, ...e, placeholder: "Введите фамилию", label: "Фамилия" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "first_name", render: ({
        field: e
      }) => /* @__PURE__ */ i(D, { css: {
        width: "100%"
      }, ...e, placeholder: "Введите имя", label: "Имя" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "patro_name", render: ({
        field: e
      }) => /* @__PURE__ */ i(D, { css: {
        width: "100%"
      }, ...e, placeholder: "Введите отчество", label: "Отчество" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "sex", render: ({
        field: e
      }) => /* @__PURE__ */ i(Te, { ...e, displayField: "name", label: "Пол", options: [{
        id: "M",
        name: "Мужской"
      }, {
        id: "W",
        name: "Женский"
      }] }) }) }),
      /* @__PURE__ */ i(m, { item: !0, lg: 8, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "birthday", render: ({
        field: e
      }) => /* @__PURE__ */ i(T, { label: "Дата рождения", placeholder: "Выберите дату рождения", ...e }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "birth_place", render: ({
        field: e
      }) => /* @__PURE__ */ i(D, { ...e, placeholder: "Введите место рождения", label: "Место рождения" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "citizenship", render: ({
        field: e
      }) => /* @__PURE__ */ i(Ie, { ...e, url: "api/rest/countries", displayField: "full_name", placeholder: "Выберите страну гражданства" }) }) })
    ] }),
    /* @__PURE__ */ i(I, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Контакты" }),
    /* @__PURE__ */ b(m, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ i(m, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "email", render: ({
        field: e
      }) => /* @__PURE__ */ i(D, { ...e, placeholder: "Введите адрес эл. почты", label: "Адрес электронной почты" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "phone", render: ({
        field: e
      }) => /* @__PURE__ */ i(Ae, { ...e, showMask: !0, placeholder: "Введите телефон", label: "Телефон" }) }) })
    ] }),
    /* @__PURE__ */ i(I, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Трудовая деятельность" }),
    /* @__PURE__ */ b(m, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "position_id", render: ({
        field: e
      }) => /* @__PURE__ */ i(P, { ...e, label: "Должность", placeholder: "Выберите должность", dictionary: "inventoryPositions" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "employment_id", render: ({
        field: e
      }) => /* @__PURE__ */ i(P, { ...e, label: "Занятость в организации", placeholder: "Выберите занятость", dictionary: "inventoryEmployment" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ i(p, { control: n.control, name: "is_part_time_position", render: ({
        field: e
      }) => /* @__PURE__ */ i(ie, { ...e, label: "Внештатная должность" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, lg: 6, children: o ? /* @__PURE__ */ i(p, { control: n.control, name: "position", render: ({
        field: e
      }) => /* @__PURE__ */ i(D, { ...e, placeholder: "Введите должность", label: "Должность по основному месту работу" }) }) : null }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ i(p, { control: n.control, name: "employment_date", render: ({
        field: e
      }) => /* @__PURE__ */ i(T, { label: "Дата начала стажа", placeholder: "Выберите дату", ...e }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ i(p, { control: n.control, name: "date_experience_start", render: ({
        field: e
      }) => /* @__PURE__ */ i(T, { label: "Дата приема на работу", placeholder: "Выберите дату", ...e }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ i(p, { control: n.control, name: "date_start_work_fkis", render: ({
        field: e
      }) => /* @__PURE__ */ i(T, { label: "Дата начала работы в сфере ФКиС", placeholder: "Выберите дату", ...e }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ i(p, { control: n.control, name: "dismissal_date", render: ({
        field: e
      }) => /* @__PURE__ */ i(T, { label: "Дата увольнения", placeholder: "Выберите дату", ...e }) }) })
    ] }),
    /* @__PURE__ */ i(I, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Образование" }),
    /* @__PURE__ */ b(m, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "education", render: ({
        field: e
      }) => /* @__PURE__ */ i(P, { ...e, value: e.value, multiple: !0, label: "Образование", placeholder: "Выберите образование", dictionary: "inventoryExpertEducation" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "eduction_direction_id", render: ({
        field: e
      }) => /* @__PURE__ */ i(P, { ...e, label: "Направление образования", placeholder: "Выберите направление", dictionary: "inventoryEducationDirections" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "qualification_id", render: ({
        field: e
      }) => /* @__PURE__ */ i(P, { ...e, label: "Квалификация", placeholder: "Выберите квалификацию", dictionary: "inventoryExpertQualifications" }) }) }),
      /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "degree", render: ({
        field: e
      }) => /* @__PURE__ */ i(ie, { ...e, label: "Наличие ученой степени" }) }) })
    ] }),
    /* @__PURE__ */ i(I, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Доступность" }),
    /* @__PURE__ */ i(m, { container: !0, spacing: 2, children: /* @__PURE__ */ i(m, { item: !0, xs: 12, children: /* @__PURE__ */ i(p, { control: n.control, name: "expert_status_dict_id", render: ({
      field: e
    }) => /* @__PURE__ */ i(P, { ...e, label: "Статус", placeholder: "Выберите статус", dictionary: "inventoryExpertStatus" }) }) }) })
  ] });
}, Xe = ({
  form: n
}) => /* @__PURE__ */ b(B, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: n, children: [
  /* @__PURE__ */ i(p, { control: n.control, name: "subject_interest_area_comment", render: ({
    field: o
  }) => /* @__PURE__ */ i(L, { label: "Комментарий к предметной области интересов", placeholder: "Введите комментарий...", ...o }) }),
  /* @__PURE__ */ i(p, { control: n.control, name: "competencies", render: ({
    field: o
  }) => /* @__PURE__ */ i(L, { label: "Ключевые компетенции", placeholder: "Введите текст...", ...o }) }),
  /* @__PURE__ */ i(p, { control: n.control, name: "free_hours", render: ({
    field: o
  }) => /* @__PURE__ */ i(We, { label: "Количество часов в неделю", placeholder: "Введите количество часов", ...o }) }),
  /* @__PURE__ */ i(p, { control: n.control, name: "educational_opportunities", render: ({
    field: o
  }) => /* @__PURE__ */ i(L, { label: "Краткое описание возможностей", placeholder: "Введите описание...", ...o }) })
] }), Ye = ({
  form: n
}) => /* @__PURE__ */ i(B, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: n, children: /* @__PURE__ */ i(p, { control: n.control, name: "progress", render: ({
  field: o
}) => /* @__PURE__ */ i(L, { placeholder: "Опишите свои достижения...", ...o }) }) }), qe = () => {
  const n = Ne(), [o, e] = f.useState(!1), [t, r] = f.useState(null), [a, s] = f.useState(null), [c, l] = f.useState({
    w: 0,
    h: 0,
    cw: 0,
    ch: 0,
    l: 0,
    t: 0
  }), u = f.useCallback(async () => {
    e(!0);
    const h = new FormData();
    h.append("file", t), h.append("croppedInfo", JSON.stringify(c)), h.append("scale", "1");
    try {
      const {
        data: v
      } = await n.postForm("/api/images/upload/inventoryExpert/image", h);
      r(null), s(v.data);
    } catch {
      e(!1);
    } finally {
      e(!1);
    }
  }, [t, c]);
  return {
    imageIsLoading: o,
    file: t,
    setFile: r,
    croppedInfo: c,
    setCroppedInfo: l,
    requestCropImage: u,
    data: a
  };
}, Qe = (n) => {
  const o = Be();
  return Fe("PUT", `/api/rest/inventoryExpert/${n}`, {
    onError: (t) => {
      var r, a;
      t.response && t.response.status === 400 || H.error(/* @__PURE__ */ b("div", { children: [
        /* @__PURE__ */ i("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ i("div", { tw: "p-1 text-xs", children: ((a = (r = t.response) == null ? void 0 : r.data) == null ? void 0 : a.message) || t.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: () => {
      H.success("Успешно сохранено", {
        position: "top-center"
      }), o("/api/teacher/profile");
    }
  });
}, A = M.createContext(null), $e = ({
  children: n
}) => {
  const o = Le("/api/teacher/profile"), [e, t] = M.useState(null), [r, a] = M.useState(null);
  return /* @__PURE__ */ i(A.Provider, { value: {
    formInstance: e,
    mutation: r,
    setFormInstance: t,
    setMutation: a,
    query: o
  }, children: n });
}, ve = d.object({
  id: d.string().uuid(),
  last_name: d.string().min(1, " "),
  first_name: d.string().min(1, " "),
  patro_name: d.string().nullable(),
  sex: d.union([d.literal("M"), d.literal("W")]),
  birthday: d.string(),
  birth_place: d.string().nullable(),
  citizenship: d.coerce.number().min(1, " "),
  // "185",
  email: d.string().email("Неверный формат эл. почты").min(1, " "),
  phone: d.string().nullable(),
  // "+7 (111) 111-11-11",
  position_id: d.coerce.number().min(1, "Выберите должность"),
  // "7",
  employment_id: d.coerce.number().min(1, "Выберите занятость"),
  is_part_time_position: d.boolean(),
  position: d.string().min(4, " ").nullable(),
  employment_date: d.string(),
  date_experience_start: d.string(),
  date_start_work_fkis: d.string().nullable(),
  dismissal_date: d.string().nullable(),
  education: d.array(d.coerce.number()),
  eduction_direction_id: d.coerce.number().nullable(),
  // "4",
  qualification_id: d.coerce.number().min(1, " "),
  degree: d.boolean().nullable(),
  expert_status_dict_id: d.coerce.number().min(1, " "),
  /** Дополнительно */
  subject_interest_area_comment: d.string().nullable(),
  competencies: d.string().nullable(),
  free_hours: d.coerce.number().min(1, " "),
  // "37.00",
  educational_opportunities: d.string().min(1, " "),
  /* Достижения */
  progress: d.string().nullable(),
  /* Фото */
  image: d.string(),
  image_id: d.string(),
  croppedInfo: d.string(),
  scale: d.number(),
  fio: d.string().readonly()
});
d.object({
  data: d.array(ve)
});
var we = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var o = "fas", e = "image", t = 512, r = 512, a = [], s = "f03e", c = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";
  n.definition = {
    prefix: o,
    iconName: e,
    icon: [
      t,
      r,
      a,
      s,
      c
    ]
  }, n.faImage = n.definition, n.prefix = o, n.iconName = e, n.width = t, n.height = r, n.ligatures = a, n.unicode = s, n.svgPathData = c, n.aliases = a;
})(we);
const Je = ({
  onFileChange: n,
  children: o = "Загрузить файл",
  ...e
}) => {
  const t = f.useRef(null);
  return /* @__PURE__ */ b(Me, { children: [
    /* @__PURE__ */ i("input", { type: "file", id: "file", name: "file", ref: t, style: {
      display: "none"
    }, accept: "image/*", onChange: (s) => {
      var c, l;
      n && ((l = (c = s == null ? void 0 : s.target) == null ? void 0 : c.files) != null && l.length) && n(s.target.files[0]);
    } }),
    /* @__PURE__ */ i(ne, { variant: "contained", color: "success", onClick: () => {
      var s;
      (s = t == null ? void 0 : t.current) == null || s.click();
    }, ...e, children: o })
  ] });
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var X = function(n, o) {
  return X = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  }, X(n, o);
};
function Ke(n, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
  X(n, o);
  function e() {
    this.constructor = n;
  }
  n.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e());
}
var y = function() {
  return y = Object.assign || function(o) {
    for (var e, t = 1, r = arguments.length; t < r; t++) {
      e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (o[a] = e[a]);
    }
    return o;
  }, y.apply(this, arguments);
}, ae = !1, S, Y, q, Z, j, Ce, k, Q, $, J, ye, K, ee, xe, _e;
function _() {
  if (!ae) {
    ae = !0;
    var n = navigator.userAgent, o = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(n), e = /(Mac OS X)|(Windows)|(Linux)/.exec(n);
    if (K = /\b(iPhone|iP[ao]d)/.exec(n), ee = /\b(iP[ao]d)/.exec(n), J = /Android/i.exec(n), xe = /FBAN\/\w+;/i.exec(n), _e = /Mobile/i.exec(n), ye = !!/Win64/.exec(n), o) {
      S = o[1] ? parseFloat(o[1]) : o[5] ? parseFloat(o[5]) : NaN, S && document && document.documentMode && (S = document.documentMode);
      var t = /(?:Trident\/(\d+.\d+))/.exec(n);
      Ce = t ? parseFloat(t[1]) + 4 : S, Y = o[2] ? parseFloat(o[2]) : NaN, q = o[3] ? parseFloat(o[3]) : NaN, Z = o[4] ? parseFloat(o[4]) : NaN, Z ? (o = /(?:Chrome\/(\d+\.\d+))/.exec(n), j = o && o[1] ? parseFloat(o[1]) : NaN) : j = NaN;
    } else
      S = Y = q = j = Z = NaN;
    if (e) {
      if (e[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(n);
        k = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else
        k = !1;
      Q = !!e[2], $ = !!e[3];
    } else
      k = Q = $ = !1;
  }
}
var te = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _() || S;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _() || Ce > S;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return te.ie() && ye;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _() || Y;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _() || q;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _() || Z;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return te.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return _() || j;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _() || Q;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _() || k;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _() || $;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _() || K;
  },
  mobile: function() {
    return _() || K || ee || J || _e;
  },
  nativeApp: function() {
    return _() || xe;
  },
  android: function() {
    return _() || J;
  },
  ipad: function() {
    return _() || ee;
  }
}, et = te, F = !!(typeof window < "u" && window.document && window.document.createElement), tt = {
  canUseDOM: F,
  canUseWorkers: typeof Worker < "u",
  canUseEventListeners: F && !!(window.addEventListener || window.attachEvent),
  canUseViewport: F && !!window.screen,
  isInWorker: !F
  // For now, this is true - might change in the future.
}, nt = tt, be = nt, Re;
be.canUseDOM && (Re = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature("", "") !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function ot(n, o) {
  if (!be.canUseDOM || o && !("addEventListener" in document))
    return !1;
  var e = "on" + n, t = e in document;
  if (!t) {
    var r = document.createElement("div");
    r.setAttribute(e, "return;"), t = typeof r[e] == "function";
  }
  return !t && Re && n === "wheel" && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t;
}
var rt = ot, it = et, at = rt, se = 10, ce = 40, le = 800;
function Se(n) {
  var o = 0, e = 0, t = 0, r = 0;
  return "detail" in n && (e = n.detail), "wheelDelta" in n && (e = -n.wheelDelta / 120), "wheelDeltaY" in n && (e = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (o = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (o = e, e = 0), t = o * se, r = e * se, "deltaY" in n && (r = n.deltaY), "deltaX" in n && (t = n.deltaX), (t || r) && n.deltaMode && (n.deltaMode == 1 ? (t *= ce, r *= ce) : (t *= le, r *= le)), t && !o && (o = t < 1 ? -1 : 1), r && !e && (e = r < 1 ? -1 : 1), {
    spinX: o,
    spinY: e,
    pixelX: t,
    pixelY: r
  };
}
Se.getEventType = function() {
  return it.firefox() ? "DOMMouseScroll" : at("wheel") ? "wheel" : "mousewheel";
};
var st = Se, ct = st;
const lt = /* @__PURE__ */ ze(ct);
function ut(n, o, e, t, r, a) {
  a === void 0 && (a = 0);
  var s = z(n, o, a), c = s.width, l = s.height, u = Math.min(c, e), h = Math.min(l, t);
  return u > h * r ? {
    width: h * r,
    height: h
  } : {
    width: u,
    height: u / r
  };
}
function dt(n) {
  return n.width > n.height ? n.width / n.naturalWidth : n.height / n.naturalHeight;
}
function O(n, o, e, t, r) {
  r === void 0 && (r = 0);
  var a = z(o.width, o.height, r), s = a.width, c = a.height;
  return {
    x: ue(n.x, s, e.width, t),
    y: ue(n.y, c, e.height, t)
  };
}
function ue(n, o, e, t) {
  var r = o * t / 2 - e / 2;
  return U(n, -r, r);
}
function de(n, o) {
  return Math.sqrt(Math.pow(n.y - o.y, 2) + Math.pow(n.x - o.x, 2));
}
function he(n, o) {
  return Math.atan2(o.y - n.y, o.x - n.x) * 180 / Math.PI;
}
function ht(n, o, e, t, r, a, s) {
  a === void 0 && (a = 0), s === void 0 && (s = !0);
  var c = s ? pt : mt, l = z(o.width, o.height, a), u = z(o.naturalWidth, o.naturalHeight, a), h = {
    x: c(100, ((l.width - e.width / r) / 2 - n.x / r) / l.width * 100),
    y: c(100, ((l.height - e.height / r) / 2 - n.y / r) / l.height * 100),
    width: c(100, e.width / l.width * 100 / r),
    height: c(100, e.height / l.height * 100 / r)
  }, v = Math.round(c(u.width, h.width * u.width / 100)), w = Math.round(c(u.height, h.height * u.height / 100)), R = u.width >= u.height * t, C = R ? {
    width: Math.round(w * t),
    height: w
  } : {
    width: v,
    height: Math.round(v / t)
  }, g = y(y({}, C), {
    x: Math.round(c(u.width - C.width, h.x * u.width / 100)),
    y: Math.round(c(u.height - C.height, h.y * u.height / 100))
  });
  return {
    croppedAreaPercentages: h,
    croppedAreaPixels: g
  };
}
function pt(n, o) {
  return Math.min(n, Math.max(0, o));
}
function mt(n, o) {
  return o;
}
function ft(n, o, e, t, r, a) {
  var s = z(o.width, o.height, e), c = U(t.width / s.width * (100 / n.width), r, a), l = {
    x: c * s.width / 2 - t.width / 2 - s.width * c * (n.x / 100),
    y: c * s.height / 2 - t.height / 2 - s.height * c * (n.y / 100)
  };
  return {
    crop: l,
    zoom: c
  };
}
function gt(n, o, e) {
  var t = dt(o);
  return e.height > e.width ? e.height / (n.height * t) : e.width / (n.width * t);
}
function vt(n, o, e, t, r, a) {
  e === void 0 && (e = 0);
  var s = z(o.naturalWidth, o.naturalHeight, e), c = U(gt(n, o, t), r, a), l = t.height > t.width ? t.height / n.height : t.width / n.width, u = {
    x: ((s.width - n.width) / 2 - n.x) * l,
    y: ((s.height - n.height) / 2 - n.y) * l
  };
  return {
    crop: u,
    zoom: c
  };
}
function pe(n, o) {
  return {
    x: (o.x + n.x) / 2,
    y: (o.y + n.y) / 2
  };
}
function wt(n) {
  return n * Math.PI / 180;
}
function z(n, o, e) {
  var t = wt(e);
  return {
    width: Math.abs(Math.cos(t) * n) + Math.abs(Math.sin(t) * o),
    height: Math.abs(Math.sin(t) * n) + Math.abs(Math.cos(t) * o)
  };
}
function U(n, o, e) {
  return Math.min(Math.max(n, o), e);
}
function N() {
  for (var n = [], o = 0; o < arguments.length; o++)
    n[o] = arguments[o];
  return n.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var Ct = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, yt = 1, xt = 3, _t = (
  /** @class */
  function(n) {
    Ke(o, n);
    function o() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.imageRef = f.createRef(), e.videoRef = f.createRef(), e.containerPosition = {
        x: 0,
        y: 0
      }, e.containerRef = null, e.styleRef = null, e.containerRect = null, e.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, e.dragStartPosition = {
        x: 0,
        y: 0
      }, e.dragStartCrop = {
        x: 0,
        y: 0
      }, e.gestureZoomStart = 0, e.gestureRotationStart = 0, e.isTouching = !1, e.lastPinchDistance = 0, e.lastPinchRotation = 0, e.rafDragTimeout = null, e.rafPinchTimeout = null, e.wheelTimer = null, e.currentDoc = typeof document < "u" ? document : null, e.currentWindow = typeof window < "u" ? window : null, e.resizeObserver = null, e.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, e.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !e.containerRef)) {
          var t = !0;
          e.resizeObserver = new window.ResizeObserver(function(r) {
            if (t) {
              t = !1;
              return;
            }
            e.computeSizes();
          }), e.resizeObserver.observe(e.containerRef);
        }
      }, e.preventZoomSafari = function(t) {
        return t.preventDefault();
      }, e.cleanEvents = function() {
        e.currentDoc && (e.currentDoc.removeEventListener("mousemove", e.onMouseMove), e.currentDoc.removeEventListener("mouseup", e.onDragStopped), e.currentDoc.removeEventListener("touchmove", e.onTouchMove), e.currentDoc.removeEventListener("touchend", e.onDragStopped), e.currentDoc.removeEventListener("gesturemove", e.onGestureMove), e.currentDoc.removeEventListener("gestureend", e.onGestureEnd), e.currentDoc.removeEventListener("scroll", e.onScroll));
      }, e.clearScrollEvent = function() {
        e.containerRef && e.containerRef.removeEventListener("wheel", e.onWheel), e.wheelTimer && clearTimeout(e.wheelTimer);
      }, e.onMediaLoad = function() {
        var t = e.computeSizes();
        t && (e.emitCropData(), e.setInitialCrop(t)), e.props.onMediaLoaded && e.props.onMediaLoaded(e.mediaSize);
      }, e.setInitialCrop = function(t) {
        if (e.props.initialCroppedAreaPercentages) {
          var r = ft(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), a = r.crop, s = r.zoom;
          e.props.onCropChange(a), e.props.onZoomChange && e.props.onZoomChange(s);
        } else if (e.props.initialCroppedAreaPixels) {
          var c = vt(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), a = c.crop, s = c.zoom;
          e.props.onCropChange(a), e.props.onZoomChange && e.props.onZoomChange(s);
        }
      }, e.computeSizes = function() {
        var t, r, a, s, c, l, u = e.imageRef.current || e.videoRef.current;
        if (u && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var h = e.containerRect.width / e.containerRect.height, v = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = e.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, w = ((a = e.imageRef.current) === null || a === void 0 ? void 0 : a.naturalHeight) || ((s = e.videoRef.current) === null || s === void 0 ? void 0 : s.videoHeight) || 0, R = u.offsetWidth < v || u.offsetHeight < w, C = v / w, g = void 0;
          if (R)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                g = h > C ? {
                  width: e.containerRect.height * C,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / C
                };
                break;
              case "horizontal-cover":
                g = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / C
                };
                break;
              case "vertical-cover":
                g = {
                  width: e.containerRect.height * C,
                  height: e.containerRect.height
                };
                break;
            }
          else
            g = {
              width: u.offsetWidth,
              height: u.offsetHeight
            };
          e.mediaSize = y(y({}, g), {
            naturalWidth: v,
            naturalHeight: w
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var x = e.props.cropSize ? e.props.cropSize : ut(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.height) !== x.height || ((l = e.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== x.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(x), e.setState({
            cropSize: x
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(x), x;
        }
      }, e.saveContainerPosition = function() {
        if (e.containerRef) {
          var t = e.containerRef.getBoundingClientRect();
          e.containerPosition = {
            x: t.left,
            y: t.top
          };
        }
      }, e.onMouseDown = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(o.getMousePoint(t)));
      }, e.onMouseMove = function(t) {
        return e.onDrag(o.getMousePoint(t));
      }, e.onScroll = function(t) {
        e.currentDoc && (t.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(t) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(t)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), t.touches.length === 2 ? e.onPinchStart(t) : t.touches.length === 1 && e.onDragStart(o.getTouchPoint(t.touches[0]))));
      }, e.onTouchMove = function(t) {
        t.preventDefault(), t.touches.length === 2 ? e.onPinchMove(t) : t.touches.length === 1 && e.onDrag(o.getTouchPoint(t.touches[0]));
      }, e.onGestureStart = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureMove), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureMove = function(t) {
        if (t.preventDefault(), !e.isTouching) {
          var r = o.getMousePoint(t), a = e.gestureZoomStart - 1 + t.scale;
          if (e.setNewZoom(a, r, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var s = e.gestureRotationStart + t.rotation;
            e.props.onRotationChange(s);
          }
        }
      }, e.onGestureEnd = function(t) {
        e.cleanEvents();
      }, e.onDragStart = function(t) {
        var r, a, s = t.x, c = t.y;
        e.dragStartPosition = {
          x: s,
          y: c
        }, e.dragStartCrop = y({}, e.props.crop), (a = (r = e.props).onInteractionStart) === null || a === void 0 || a.call(r);
      }, e.onDrag = function(t) {
        var r = t.x, a = t.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(r === void 0 || a === void 0)) {
            var s = r - e.dragStartPosition.x, c = a - e.dragStartPosition.y, l = {
              x: e.dragStartCrop.x + s,
              y: e.dragStartCrop.y + c
            }, u = e.props.restrictPosition ? O(l, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : l;
            e.props.onCropChange(u);
          }
        }));
      }, e.onDragStopped = function() {
        var t, r;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (r = (t = e.props).onInteractionEnd) === null || r === void 0 || r.call(t);
      }, e.onWheel = function(t) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
          t.preventDefault();
          var r = o.getMousePoint(t), a = lt(t).pixelY, s = e.props.zoom - a * e.props.zoomSpeed / 200;
          e.setNewZoom(s, r, {
            shouldUpdatePosition: !0
          }), e.state.hasWheelJustStarted || e.setState({
            hasWheelJustStarted: !0
          }, function() {
            var c, l;
            return (l = (c = e.props).onInteractionStart) === null || l === void 0 ? void 0 : l.call(c);
          }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
            return e.setState({
              hasWheelJustStarted: !1
            }, function() {
              var c, l;
              return (l = (c = e.props).onInteractionEnd) === null || l === void 0 ? void 0 : l.call(c);
            });
          }, 250);
        }
      }, e.getPointOnContainer = function(t, r) {
        var a = t.x, s = t.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (a - r.x),
          y: e.containerRect.height / 2 - (s - r.y)
        };
      }, e.getPointOnMedia = function(t) {
        var r = t.x, a = t.y, s = e.props, c = s.crop, l = s.zoom;
        return {
          x: (r + c.x) / l,
          y: (a + c.y) / l
        };
      }, e.setNewZoom = function(t, r, a) {
        var s = a === void 0 ? {} : a, c = s.shouldUpdatePosition, l = c === void 0 ? !0 : c;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var u = U(t, e.props.minZoom, e.props.maxZoom);
          if (l) {
            var h = e.getPointOnContainer(r, e.containerPosition), v = e.getPointOnMedia(h), w = {
              x: v.x * u - h.x,
              y: v.y * u - h.y
            }, R = e.props.restrictPosition ? O(w, e.mediaSize, e.state.cropSize, u, e.props.rotation) : w;
            e.props.onCropChange(R);
          }
          e.props.onZoomChange(u);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? O(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return ht(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var t = e.getCropData();
        if (t) {
          var r = t.croppedAreaPercentages, a = t.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(r, a), e.props.onCropAreaChange && e.props.onCropAreaChange(r, a);
        }
      }, e.emitCropAreaChange = function() {
        var t = e.getCropData();
        if (t) {
          var r = t.croppedAreaPercentages, a = t.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(r, a);
        }
      }, e.recomputeCropPosition = function() {
        if (e.state.cropSize) {
          var t = e.props.restrictPosition ? O(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
          e.props.onCropChange(t), e.emitCropData();
        }
      }, e;
    }
    return o.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Ct, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef));
    }, o.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, o.prototype.componentDidUpdate = function(e) {
      var t, r, a, s, c, l, u, h, v;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((r = this.props.cropSize) === null || r === void 0 ? void 0 : r.height) || ((a = e.cropSize) === null || a === void 0 ? void 0 : a.width) !== ((s = this.props.cropSize) === null || s === void 0 ? void 0 : s.width) ? this.computeSizes() : (((c = e.crop) === null || c === void 0 ? void 0 : c.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((u = e.crop) === null || u === void 0 ? void 0 : u.y) !== ((h = this.props.crop) === null || h === void 0 ? void 0 : h.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((v = this.videoRef.current) === null || v === void 0 || v.load());
      var w = this.getObjectFit();
      w !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: w
      }, this.computeSizes);
    }, o.prototype.getAspect = function() {
      var e = this.props, t = e.cropSize, r = e.aspect;
      return t ? t.width / t.height : r;
    }, o.prototype.getObjectFit = function() {
      var e, t, r, a;
      if (this.props.objectFit === "cover") {
        var s = this.imageRef.current || this.videoRef.current;
        if (s && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var c = this.containerRect.width / this.containerRect.height, l = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0, u = ((r = this.imageRef.current) === null || r === void 0 ? void 0 : r.naturalHeight) || ((a = this.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, h = l / u;
          return h < c ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, o.prototype.onPinchStart = function(e) {
      var t = o.getTouchPoint(e.touches[0]), r = o.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = de(t, r), this.lastPinchRotation = he(t, r), this.onDragStart(pe(t, r));
    }, o.prototype.onPinchMove = function(e) {
      var t = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var r = o.getTouchPoint(e.touches[0]), a = o.getTouchPoint(e.touches[1]), s = pe(r, a);
        this.onDrag(s), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var c = de(r, a), l = t.props.zoom * (c / t.lastPinchDistance);
          t.setNewZoom(l, s, {
            shouldUpdatePosition: !1
          }), t.lastPinchDistance = c;
          var u = he(r, a), h = t.props.rotation + (u - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(h), t.lastPinchRotation = u;
        });
      }
    }, o.prototype.render = function() {
      var e = this, t = this.props, r = t.image, a = t.video, s = t.mediaProps, c = t.transform, l = t.crop, u = l.x, h = l.y, v = t.rotation, w = t.zoom, R = t.cropShape, C = t.showGrid, g = t.style, x = g.containerStyle, W = g.cropAreaStyle, oe = g.mediaStyle, V = t.classes, Ee = V.containerClassName, De = V.cropAreaClassName, re = V.mediaClassName, E = this.state.mediaObjectFit;
      return f.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(Pe) {
          return e.containerRef = Pe;
        },
        "data-testid": "container",
        style: x,
        className: N("reactEasyCrop_Container", Ee)
      }, r ? f.createElement("img", y({
        alt: "",
        className: N("reactEasyCrop_Image", E === "contain" && "reactEasyCrop_Contain", E === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", E === "vertical-cover" && "reactEasyCrop_Cover_Vertical", re)
      }, s, {
        src: r,
        ref: this.imageRef,
        style: y(y({}, oe), {
          transform: c || "translate(".concat(u, "px, ").concat(h, "px) rotate(").concat(v, "deg) scale(").concat(w, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && f.createElement("video", y({
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: N("reactEasyCrop_Video", E === "contain" && "reactEasyCrop_Contain", E === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", E === "vertical-cover" && "reactEasyCrop_Cover_Vertical", re)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: y(y({}, oe), {
          transform: c || "translate(".concat(u, "px, ").concat(h, "px) rotate(").concat(v, "deg) scale(").concat(w, ")")
        }),
        controls: !1
      }), (Array.isArray(a) ? a : [{
        src: a
      }]).map(function(G) {
        return f.createElement("source", y({
          key: G.src
        }, G));
      })), this.state.cropSize && f.createElement("div", {
        style: y(y({}, W), {
          width: this.state.cropSize.width,
          height: this.state.cropSize.height
        }),
        "data-testid": "cropper",
        className: N("reactEasyCrop_CropArea", R === "round" && "reactEasyCrop_CropAreaRound", C && "reactEasyCrop_CropAreaGrid", De)
      }));
    }, o.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: xt,
      minZoom: yt,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0
    }, o.getMousePoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, o.getTouchPoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, o;
  }(f.Component)
);
const bt = 3 / 4, Rt = ({
  form: n
}) => {
  const {
    file: o,
    data: e,
    setFile: t,
    imageIsLoading: r,
    croppedInfo: a,
    setCroppedInfo: s,
    requestCropImage: c
  } = qe(), {
    query: l
  } = f.useContext(A);
  return f.useEffect(() => {
    var u;
    e && (n.setValue("image", e.original), n.setValue("image_id", e.id), n.setValue("id", (u = l.data) == null ? void 0 : u.data.id), n.setValue("scale", 1), n.setValue("croppedInfo", JSON.stringify(a)));
  }, [e]), /* @__PURE__ */ b("div", { css: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    gap: "0.75rem"
  }, children: [
    /* @__PURE__ */ i(ke, { severity: "warning", children: "Размер картинки не менее 120х160 пикселей и не более 1 Мб" }),
    /* @__PURE__ */ i(St, { file: o, setFile: t, setCroppedInfo: s, requestCropImage: c, isUploading: r }),
    r ? /* @__PURE__ */ i("div", { css: {
      width: "100%",
      flex: "1 1 0%",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ i(fe, { spinning: !0 }) }) : n.getValues("image") && !o ? /* @__PURE__ */ i(B, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: n, children: /* @__PURE__ */ i(p, { control: n.control, name: "image", render: ({
      field: u
    }) => {
      var h;
      return /* @__PURE__ */ i("img", { src: (h = u.value) == null ? void 0 : h.replace("_little", ""), alt: "teacher-profile-picture", width: 240, height: 320 });
    } }) }) : null,
    o ? null : /* @__PURE__ */ i(Je, { onFileChange: t, css: {
      width: "fit-content"
    }, icon: we.faImage, children: "Загрузить картинку" })
  ] });
}, St = ({
  file: n,
  setFile: o,
  setCroppedInfo: e,
  requestCropImage: t,
  isUploading: r
}) => {
  const [a, s] = f.useState(""), [c, l] = f.useState({
    width: 0,
    height: 0
  }), [u, h] = f.useState({
    x: 0,
    y: 0
  }), [v, w] = f.useState(1);
  f.useEffect(() => {
    let C = !1;
    if (s(""), n)
      if (n.size > 1048576)
        C = !0, o(null), H.error("Размер файла превышает 1 Мб", {
          position: "top-center"
        });
      else {
        const g = new FileReader();
        g.onloadend = () => {
          const x = new Image();
          x.onload = () => {
            x.width < 120 || x.height < 160 ? (C = !0, o(null), H.error("Размер картинки не соответствует требованиям", {
              position: "top-center"
            })) : l({
              width: x.width,
              height: x.height
            });
          };
          const W = g == null ? void 0 : g.result;
          C || (x.src = W, s(W));
        }, g.readAsDataURL(n);
      }
  }, [n]);
  const R = f.useCallback((C, g) => e({
    w: g.width,
    h: g.height,
    cw: c.width,
    ch: c.height,
    l: g.x,
    t: g.y
  }), []);
  return /* @__PURE__ */ i(Ue, { open: !!n, title: "Обрезка картинки (с зумом)", width: 600, height: 600, onClose: () => o(null), children: /* @__PURE__ */ i(ge, { fit: !0, footer: /* @__PURE__ */ i(ne, { css: {
    marginLeft: "auto"
  }, variant: "contained", isLoading: r, onClick: t, children: "Сохранить" }), children: /* @__PURE__ */ i("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center"
  }, children: /* @__PURE__ */ i("div", { css: {
    position: "relative",
    height: "300px",
    width: "100%",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ i(_t, { image: a, crop: u, onCropChange: h, aspect: bt, zoom: v, onZoomChange: w, onCropComplete: R }) }) }) }) });
}, me = [{
  id: "main",
  title: "Основные",
  content: (n) => /* @__PURE__ */ i(Ge, { form: n })
}, {
  id: "addit",
  title: "Дополнительно",
  content: (n) => /* @__PURE__ */ i(Xe, { form: n })
}, {
  id: "photo",
  title: "Фото",
  content: (n) => /* @__PURE__ */ i(Rt, { form: n })
}, {
  id: "achievments",
  title: "Достижения",
  content: (n) => /* @__PURE__ */ i(Ye, { form: n })
}, {
  id: "cal",
  title: "Календарь",
  content: (n) => null
}], Et = () => {
  var s;
  const {
    setTitle: n
  } = He(), {
    query: o,
    mutation: e,
    formInstance: t
  } = M.useContext(A), r = f.useCallback((c) => {
    var l;
    return /* @__PURE__ */ i(Dt, { children: t ? (l = me[c]) == null ? void 0 : l.content(t) : null });
  }, [t]), a = (s = o == null ? void 0 : o.data) == null ? void 0 : s.data.fio;
  return f.useEffect(() => {
    a && n(a);
  }, [a]), /* @__PURE__ */ i(ge, { fit: !0, footer: /* @__PURE__ */ i(ne, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", onClick: t == null ? void 0 : t.submit, disabled: e == null ? void 0 : e.isPending, isLoading: e == null ? void 0 : e.isPending, children: "Сохранить" }), children: /* @__PURE__ */ i(Ve, { tabs: me, tabComponentRenderer: r, css: {
    display: "flex",
    height: "100%"
  } }) });
}, Dt = ({
  children: n
}) => {
  var t;
  const {
    query: o
  } = M.useContext(A), e = (t = o == null ? void 0 : o.data) == null ? void 0 : t.data.id;
  return o != null && o.isLoading ? /* @__PURE__ */ i(fe, { spinning: !0 }) : /* @__PURE__ */ i("div", { css: {
    width: "100%",
    flex: "1 1 0%",
    overflow: "auto",
    padding: "1.5rem"
  }, children: e ? /* @__PURE__ */ i(Pt, { id: e, children: n }) : null });
}, Pt = ({
  children: n,
  id: o
}) => {
  var c;
  const {
    query: e,
    setMutation: t,
    setFormInstance: r
  } = M.useContext(A), a = Qe(o);
  f.useEffect(() => {
    t(a);
  }, []), f.useEffect(() => {
    r(s);
  }, []);
  const s = Oe({
    mutation: a,
    schema: ve,
    defaultValues: (c = e == null ? void 0 : e.data) == null ? void 0 : c.data
  });
  return n;
}, jt = () => /* @__PURE__ */ i($e, { children: /* @__PURE__ */ i(Et, {}) });
export {
  jt as default
};
