import { b as xe, j as E, Q as xr, F as na, S as wo, I as bc } from "./library-0c8fbdb5.js";
import { r as I, R as b, g as he, d as Oe, b as So } from "./react-6f5a8403.js";
import { u as yc, B as Hr } from "./faEye-7bea50c5.js";
import { u as wc, b as Vr, a as Yr } from "./DictionaryCell-a901e8dd.js";
import { P as R } from "./icons-ad9f8a73.js";
import { g as Sc, i as Ec, D as zt, k as ie, A as _c, _ as Gr, l as Eo, m as $c, o as Dc, p as ve, q as Oc, r as Tc, s as Mc, v as Cc, w as Ac, x as xc, y as Pc, z as Rc, C as Ic, F as kc, H as Nc, J as Lc, K as _o, P as $o } from "./mui-0a491bf1.js";
import { a as ae, T as yt, h as Fc, b as Wt, Q as zc, P as Wc, D as wt, i as Wa, F as Kr, c as Er, N as jc, j as Uc, k as Do, u as Bc } from "./Phone-413d88a1.js";
import { u as Hc } from "./useWindowController-01d4544b.js";
import { u as Vc } from "./useResetHttpQueryCache-28bad901.js";
import { z as J } from "./index-d0beacff.js";
import { M as Yc } from "./ModalWindow-372d4cc0.js";
const Gc = ({
  className: e,
  orientation: r = "horizontal",
  textColor: t,
  tabComponentRenderer: n,
  tabs: a
}) => {
  const [i, o] = I.useState(0);
  return /* @__PURE__ */ xe("div", { className: e, css: [{
    display: "flex",
    flexDirection: "column"
  }, r === "vertical" && {
    height: "100%",
    flexDirection: "row"
  }], children: [
    /* @__PURE__ */ E(Ec, { variant: "scrollable", scrollButtons: "auto", value: i, onChange: (l, u) => {
      o(u);
    }, orientation: r, css: [{
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
    }, r === "vertical" && {
      height: "100%",
      flexDirection: "row"
    }], textColor: t || "inherit", children: a.map(({
      id: l,
      title: u
    }) => /* @__PURE__ */ E(Sc, { className: "tab", label: u, css: {
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))"
    } }, l)) }),
    n(i)
  ] });
}, Kc = ({
  form: e
}) => {
  const r = e.watch("is_part_time_position");
  return /* @__PURE__ */ xe(Kr, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ E(zt, { css: {
      marginBottom: "1rem"
    }, children: "Личные данные" }),
    /* @__PURE__ */ xe(ie, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ E(ie, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "last_name", render: ({
        field: t
      }) => /* @__PURE__ */ E(yt, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите фамилию", label: "Фамилия" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "first_name", render: ({
        field: t
      }) => /* @__PURE__ */ E(yt, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите имя", label: "Имя" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "patro_name", render: ({
        field: t
      }) => /* @__PURE__ */ E(yt, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите отчество", label: "Отчество" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "sex", render: ({
        field: t
      }) => /* @__PURE__ */ E(Fc, { ...t, displayField: "name", label: "Пол", options: [{
        id: "M",
        name: "Мужской"
      }, {
        id: "W",
        name: "Женский"
      }] }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, lg: 8, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "birthday", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wt, { label: "Дата рождения", placeholder: "Выберите дату рождения", ...t }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "birth_place", render: ({
        field: t
      }) => /* @__PURE__ */ E(yt, { ...t, placeholder: "Введите место рождения", label: "Место рождения" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "citizenship", render: ({
        field: t
      }) => /* @__PURE__ */ E(zc, { ...t, url: "api/rest/countries", displayField: "full_name", placeholder: "Выберите страну гражданства" }) }) })
    ] }),
    /* @__PURE__ */ E(zt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Контакты" }),
    /* @__PURE__ */ xe(ie, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ E(ie, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "email", render: ({
        field: t
      }) => /* @__PURE__ */ E(yt, { ...t, placeholder: "Введите адрес эл. почты", label: "Адрес электронной почты" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "phone", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wc, { ...t, showMask: !0, placeholder: "Введите телефон", label: "Телефон" }) }) })
    ] }),
    /* @__PURE__ */ E(zt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Трудовая деятельность" }),
    /* @__PURE__ */ xe(ie, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "position_id", render: ({
        field: t
      }) => /* @__PURE__ */ E(wt, { ...t, label: "Должность", placeholder: "Выберите должность", dictionary: "inventoryPositions" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "employment_id", render: ({
        field: t
      }) => /* @__PURE__ */ E(wt, { ...t, label: "Занятость в организации", placeholder: "Выберите занятость", dictionary: "inventoryEmployment" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ E(ae, { control: e.control, name: "is_part_time_position", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wa, { ...t, label: "Внештатная должность" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, lg: 6, children: r ? /* @__PURE__ */ E(ae, { control: e.control, name: "position", render: ({
        field: t
      }) => /* @__PURE__ */ E(yt, { ...t, placeholder: "Введите должность", label: "Должность по основному месту работу" }) }) : null }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ E(ae, { control: e.control, name: "employment_date", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wt, { label: "Дата начала стажа", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ E(ae, { control: e.control, name: "date_experience_start", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wt, { label: "Дата приема на работу", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ E(ae, { control: e.control, name: "date_start_work_fkis", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wt, { label: "Дата начала работы в сфере ФКиС", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ E(ae, { control: e.control, name: "dismissal_date", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wt, { label: "Дата увольнения", placeholder: "Выберите дату", ...t }) }) })
    ] }),
    /* @__PURE__ */ E(zt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Образование" }),
    /* @__PURE__ */ xe(ie, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "education", render: ({
        field: t
      }) => /* @__PURE__ */ E(wt, { ...t, value: t.value, multiple: !0, label: "Образование", placeholder: "Выберите образование", dictionary: "inventoryExpertEducation" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "eduction_direction_id", render: ({
        field: t
      }) => /* @__PURE__ */ E(wt, { ...t, label: "Направление образования", placeholder: "Выберите направление", dictionary: "inventoryEducationDirections" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "qualification_id", render: ({
        field: t
      }) => /* @__PURE__ */ E(wt, { ...t, label: "Квалификация", placeholder: "Выберите квалификацию", dictionary: "inventoryExpertQualifications" }) }) }),
      /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "degree", render: ({
        field: t
      }) => /* @__PURE__ */ E(Wa, { ...t, label: "Наличие ученой степени" }) }) })
    ] }),
    /* @__PURE__ */ E(zt, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Доступность" }),
    /* @__PURE__ */ E(ie, { container: !0, spacing: 2, children: /* @__PURE__ */ E(ie, { item: !0, xs: 12, children: /* @__PURE__ */ E(ae, { control: e.control, name: "expert_status_dict_id", render: ({
      field: t
    }) => /* @__PURE__ */ E(wt, { ...t, label: "Статус", placeholder: "Выберите статус", dictionary: "inventoryExpertStatus" }) }) }) })
  ] });
}, qc = ({
  form: e
}) => /* @__PURE__ */ xe(Kr, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: e, children: [
  /* @__PURE__ */ E(ae, { control: e.control, name: "subject_interest_area_comment", render: ({
    field: r
  }) => /* @__PURE__ */ E(Er, { label: "Комментарий к предметной области интересов", placeholder: "Введите комментарий...", ...r }) }),
  /* @__PURE__ */ E(ae, { control: e.control, name: "competencies", render: ({
    field: r
  }) => /* @__PURE__ */ E(Er, { label: "Ключевые компетенции", placeholder: "Введите текст...", ...r }) }),
  /* @__PURE__ */ E(ae, { control: e.control, name: "free_hours", render: ({
    field: r
  }) => /* @__PURE__ */ E(jc, { label: "Количество часов в неделю", placeholder: "Введите количество часов", ...r }) }),
  /* @__PURE__ */ E(ae, { control: e.control, name: "educational_opportunities", render: ({
    field: r
  }) => /* @__PURE__ */ E(Er, { label: "Краткое описание возможностей", placeholder: "Введите описание...", ...r }) })
] }), Xc = ({
  form: e
}) => /* @__PURE__ */ E(Kr, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: e, children: /* @__PURE__ */ E(ae, { control: e.control, name: "progress", render: ({
  field: r
}) => /* @__PURE__ */ E(Er, { placeholder: "Опишите свои достижения...", ...r }) }) }), Zc = () => {
  const e = wc(), [r, t] = I.useState(!1), [n, a] = I.useState(null), [i, o] = I.useState(null), [s, l] = I.useState({
    w: 0,
    h: 0,
    cw: 0,
    ch: 0,
    l: 0,
    t: 0
  }), u = I.useCallback(async () => {
    t(!0);
    const v = new FormData();
    v.append("file", n), v.append("croppedInfo", JSON.stringify(s)), v.append("scale", "1");
    try {
      const {
        data: h
      } = await e.postForm("/api/images/upload/inventoryExpert/image", v);
      a(null), o(h.data);
    } catch {
      t(!1);
    } finally {
      t(!1);
    }
  }, [n, s]);
  return {
    imageIsLoading: r,
    file: n,
    setFile: a,
    croppedInfo: s,
    setCroppedInfo: l,
    requestCropImage: u,
    data: i
  };
}, Jc = (e) => {
  const r = Vc();
  return yc("PUT", `/api/rest/inventoryExpert/${e}`, {
    onError: (n) => {
      var a, i;
      n.response && n.response.status === 400 || xr.error(/* @__PURE__ */ xe("div", { children: [
        /* @__PURE__ */ E("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ E("div", { tw: "p-1 text-xs", children: ((i = (a = n.response) == null ? void 0 : a.data) == null ? void 0 : i.message) || n.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: () => {
      xr.success("Успешно сохранено", {
        position: "top-center"
      }), r("/api/teacher/profile");
    }
  });
}, Ot = b.createContext(null), Qc = ({
  children: e
}) => {
  const r = Vr("/api/teacher/profile"), [t, n] = b.useState(null), [a, i] = b.useState(null);
  return /* @__PURE__ */ E(Ot.Provider, { value: {
    formInstance: t,
    mutation: a,
    setFormInstance: n,
    setMutation: i,
    query: r
  }, children: e });
}, Oo = J.object({
  id: J.string().uuid(),
  last_name: J.string().min(1, " "),
  first_name: J.string().min(1, " "),
  patro_name: J.string().nullable(),
  sex: J.union([J.literal("M"), J.literal("W")]),
  birthday: J.string(),
  birth_place: J.string().nullable(),
  citizenship: J.coerce.number().min(1, " "),
  // "185",
  email: J.string().email("Неверный формат эл. почты").min(1, " "),
  phone: J.string().nullable(),
  // "+7 (111) 111-11-11",
  position_id: J.coerce.number().min(1, "Выберите должность"),
  // "7",
  employment_id: J.coerce.number().min(1, "Выберите занятость"),
  is_part_time_position: J.boolean(),
  position: J.string().min(4, " ").nullable(),
  employment_date: J.string(),
  date_experience_start: J.string(),
  date_start_work_fkis: J.string().nullable(),
  dismissal_date: J.string().nullable(),
  education: J.array(J.coerce.number()),
  eduction_direction_id: J.coerce.number().nullable(),
  // "4",
  qualification_id: J.coerce.number().min(1, " "),
  degree: J.boolean().nullable(),
  expert_status_dict_id: J.coerce.number().min(1, " "),
  /** Дополнительно */
  subject_interest_area_comment: J.string().nullable(),
  competencies: J.string().nullable(),
  free_hours: J.coerce.number().min(1, " "),
  // "37.00",
  educational_opportunities: J.string().min(1, " "),
  /* Достижения */
  progress: J.string().nullable(),
  /* Фото */
  image: J.string(),
  image_id: J.string(),
  croppedInfo: J.string(),
  scale: J.number(),
  fio: J.string().readonly()
});
J.object({
  data: J.array(Oo)
});
var To = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "image", n = 512, a = 512, i = [], o = "f03e", s = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      n,
      a,
      i,
      o,
      s
    ]
  }, e.faImage = e.definition, e.prefix = r, e.iconName = t, e.width = n, e.height = a, e.ligatures = i, e.unicode = o, e.svgPathData = s, e.aliases = i;
})(To);
const eu = ({
  onFileChange: e,
  children: r = "Загрузить файл",
  ...t
}) => {
  const n = I.useRef(null);
  return /* @__PURE__ */ xe(na, { children: [
    /* @__PURE__ */ E("input", { type: "file", id: "file", name: "file", ref: n, style: {
      display: "none"
    }, accept: "image/*", onChange: (o) => {
      var s, l;
      e && ((l = (s = o == null ? void 0 : o.target) == null ? void 0 : s.files) != null && l.length) && e(o.target.files[0]);
    } }),
    /* @__PURE__ */ E(Hr, { variant: "contained", color: "success", onClick: () => {
      var o;
      (o = n == null ? void 0 : n.current) == null || o.click();
    }, ...t, children: r })
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
var xn = function(e, r) {
  return xn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
  }, xn(e, r);
};
function tu(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  xn(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var Se = function() {
  return Se = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Se.apply(this, arguments);
}, ja = !1, lt, Pn, Rn, _r, $r, Mo, Dr, In, kn, Nn, Co, Ln, Fn, Ao, xo;
function Ae() {
  if (!ja) {
    ja = !0;
    var e = navigator.userAgent, r = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), t = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Ln = /\b(iPhone|iP[ao]d)/.exec(e), Fn = /\b(iP[ao]d)/.exec(e), Nn = /Android/i.exec(e), Ao = /FBAN\/\w+;/i.exec(e), xo = /Mobile/i.exec(e), Co = !!/Win64/.exec(e), r) {
      lt = r[1] ? parseFloat(r[1]) : r[5] ? parseFloat(r[5]) : NaN, lt && document && document.documentMode && (lt = document.documentMode);
      var n = /(?:Trident\/(\d+.\d+))/.exec(e);
      Mo = n ? parseFloat(n[1]) + 4 : lt, Pn = r[2] ? parseFloat(r[2]) : NaN, Rn = r[3] ? parseFloat(r[3]) : NaN, _r = r[4] ? parseFloat(r[4]) : NaN, _r ? (r = /(?:Chrome\/(\d+\.\d+))/.exec(e), $r = r && r[1] ? parseFloat(r[1]) : NaN) : $r = NaN;
    } else
      lt = Pn = Rn = $r = _r = NaN;
    if (t) {
      if (t[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Dr = a ? parseFloat(a[1].replace("_", ".")) : !0;
      } else
        Dr = !1;
      In = !!t[2], kn = !!t[3];
    } else
      Dr = In = kn = !1;
  }
}
var zn = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return Ae() || lt;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return Ae() || Mo > lt;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return zn.ie() && Co;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return Ae() || Pn;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return Ae() || Rn;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return Ae() || _r;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return zn.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return Ae() || $r;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return Ae() || In;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return Ae() || Dr;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return Ae() || kn;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return Ae() || Ln;
  },
  mobile: function() {
    return Ae() || Ln || Fn || Nn || xo;
  },
  nativeApp: function() {
    return Ae() || Ao;
  },
  android: function() {
    return Ae() || Nn;
  },
  ipad: function() {
    return Ae() || Fn;
  }
}, ru = zn, pr = !!(typeof window < "u" && window.document && window.document.createElement), nu = {
  canUseDOM: pr,
  canUseWorkers: typeof Worker < "u",
  canUseEventListeners: pr && !!(window.addEventListener || window.attachEvent),
  canUseViewport: pr && !!window.screen,
  isInWorker: !pr
  // For now, this is true - might change in the future.
}, au = nu, Po = au, Ro;
Po.canUseDOM && (Ro = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function iu(e, r) {
  if (!Po.canUseDOM || r && !("addEventListener" in document))
    return !1;
  var t = "on" + e, n = t in document;
  if (!n) {
    var a = document.createElement("div");
    a.setAttribute(t, "return;"), n = typeof a[t] == "function";
  }
  return !n && Ro && e === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
}
var ou = iu, su = ru, lu = ou, Ua = 10, Ba = 40, Ha = 800;
function Io(e) {
  var r = 0, t = 0, n = 0, a = 0;
  return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (r = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (r = t, t = 0), n = r * Ua, a = t * Ua, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || a) && e.deltaMode && (e.deltaMode == 1 ? (n *= Ba, a *= Ba) : (n *= Ha, a *= Ha)), n && !r && (r = n < 1 ? -1 : 1), a && !t && (t = a < 1 ? -1 : 1), {
    spinX: r,
    spinY: t,
    pixelX: n,
    pixelY: a
  };
}
Io.getEventType = function() {
  return su.firefox() ? "DOMMouseScroll" : lu("wheel") ? "wheel" : "mousewheel";
};
var cu = Io, uu = cu;
const fu = /* @__PURE__ */ he(uu);
function du(e, r, t, n, a, i) {
  i === void 0 && (i = 0);
  var o = _t(e, r, i), s = o.width, l = o.height, u = Math.min(s, t), v = Math.min(l, n);
  return u > v * a ? {
    width: v * a,
    height: v
  } : {
    width: u,
    height: u / a
  };
}
function vu(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function mr(e, r, t, n, a) {
  a === void 0 && (a = 0);
  var i = _t(r.width, r.height, a), o = i.width, s = i.height;
  return {
    x: Va(e.x, o, t.width, n),
    y: Va(e.y, s, t.height, n)
  };
}
function Va(e, r, t, n) {
  var a = r * n / 2 - t / 2;
  return qr(e, -a, a);
}
function Ya(e, r) {
  return Math.sqrt(Math.pow(e.y - r.y, 2) + Math.pow(e.x - r.x, 2));
}
function Ga(e, r) {
  return Math.atan2(r.y - e.y, r.x - e.x) * 180 / Math.PI;
}
function hu(e, r, t, n, a, i, o) {
  i === void 0 && (i = 0), o === void 0 && (o = !0);
  var s = o ? pu : mu, l = _t(r.width, r.height, i), u = _t(r.naturalWidth, r.naturalHeight, i), v = {
    x: s(100, ((l.width - t.width / a) / 2 - e.x / a) / l.width * 100),
    y: s(100, ((l.height - t.height / a) / 2 - e.y / a) / l.height * 100),
    width: s(100, t.width / l.width * 100 / a),
    height: s(100, t.height / l.height * 100 / a)
  }, h = Math.round(s(u.width, v.width * u.width / 100)), c = Math.round(s(u.height, v.height * u.height / 100)), p = u.width >= u.height * n, d = p ? {
    width: Math.round(c * n),
    height: c
  } : {
    width: h,
    height: Math.round(h / n)
  }, f = Se(Se({}, d), {
    x: Math.round(s(u.width - d.width, v.x * u.width / 100)),
    y: Math.round(s(u.height - d.height, v.y * u.height / 100))
  });
  return {
    croppedAreaPercentages: v,
    croppedAreaPixels: f
  };
}
function pu(e, r) {
  return Math.min(e, Math.max(0, r));
}
function mu(e, r) {
  return r;
}
function gu(e, r, t, n, a, i) {
  var o = _t(r.width, r.height, t), s = qr(n.width / o.width * (100 / e.width), a, i), l = {
    x: s * o.width / 2 - n.width / 2 - o.width * s * (e.x / 100),
    y: s * o.height / 2 - n.height / 2 - o.height * s * (e.y / 100)
  };
  return {
    crop: l,
    zoom: s
  };
}
function bu(e, r, t) {
  var n = vu(r);
  return t.height > t.width ? t.height / (e.height * n) : t.width / (e.width * n);
}
function yu(e, r, t, n, a, i) {
  t === void 0 && (t = 0);
  var o = _t(r.naturalWidth, r.naturalHeight, t), s = qr(bu(e, r, n), a, i), l = n.height > n.width ? n.height / e.height : n.width / e.width, u = {
    x: ((o.width - e.width) / 2 - e.x) * l,
    y: ((o.height - e.height) / 2 - e.y) * l
  };
  return {
    crop: u,
    zoom: s
  };
}
function Ka(e, r) {
  return {
    x: (r.x + e.x) / 2,
    y: (r.y + e.y) / 2
  };
}
function wu(e) {
  return e * Math.PI / 180;
}
function _t(e, r, t) {
  var n = wu(t);
  return {
    width: Math.abs(Math.cos(n) * e) + Math.abs(Math.sin(n) * r),
    height: Math.abs(Math.sin(n) * e) + Math.abs(Math.cos(n) * r)
  };
}
function qr(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function gr() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var Su = `.reactEasyCrop_Container {
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
`, Eu = 1, _u = 3, $u = (
  /** @class */
  function(e) {
    tu(r, e);
    function r() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.imageRef = I.createRef(), t.videoRef = I.createRef(), t.containerPosition = {
        x: 0,
        y: 0
      }, t.containerRef = null, t.styleRef = null, t.containerRect = null, t.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, t.dragStartPosition = {
        x: 0,
        y: 0
      }, t.dragStartCrop = {
        x: 0,
        y: 0
      }, t.gestureZoomStart = 0, t.gestureRotationStart = 0, t.isTouching = !1, t.lastPinchDistance = 0, t.lastPinchRotation = 0, t.rafDragTimeout = null, t.rafPinchTimeout = null, t.wheelTimer = null, t.currentDoc = typeof document < "u" ? document : null, t.currentWindow = typeof window < "u" ? window : null, t.resizeObserver = null, t.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, t.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !t.containerRef)) {
          var n = !0;
          t.resizeObserver = new window.ResizeObserver(function(a) {
            if (n) {
              n = !1;
              return;
            }
            t.computeSizes();
          }), t.resizeObserver.observe(t.containerRef);
        }
      }, t.preventZoomSafari = function(n) {
        return n.preventDefault();
      }, t.cleanEvents = function() {
        t.currentDoc && (t.currentDoc.removeEventListener("mousemove", t.onMouseMove), t.currentDoc.removeEventListener("mouseup", t.onDragStopped), t.currentDoc.removeEventListener("touchmove", t.onTouchMove), t.currentDoc.removeEventListener("touchend", t.onDragStopped), t.currentDoc.removeEventListener("gesturemove", t.onGestureMove), t.currentDoc.removeEventListener("gestureend", t.onGestureEnd), t.currentDoc.removeEventListener("scroll", t.onScroll));
      }, t.clearScrollEvent = function() {
        t.containerRef && t.containerRef.removeEventListener("wheel", t.onWheel), t.wheelTimer && clearTimeout(t.wheelTimer);
      }, t.onMediaLoad = function() {
        var n = t.computeSizes();
        n && (t.emitCropData(), t.setInitialCrop(n)), t.props.onMediaLoaded && t.props.onMediaLoaded(t.mediaSize);
      }, t.setInitialCrop = function(n) {
        if (t.props.initialCroppedAreaPercentages) {
          var a = gu(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, n, t.props.minZoom, t.props.maxZoom), i = a.crop, o = a.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(o);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = yu(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, n, t.props.minZoom, t.props.maxZoom), i = s.crop, o = s.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(o);
        }
      }, t.computeSizes = function() {
        var n, a, i, o, s, l, u = t.imageRef.current || t.videoRef.current;
        if (u && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var v = t.containerRect.width / t.containerRect.height, h = ((n = t.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoWidth) || 0, c = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoHeight) || 0, p = u.offsetWidth < h || u.offsetHeight < c, d = h / c, f = void 0;
          if (p)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                f = v > d ? {
                  width: t.containerRect.height * d,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / d
                };
                break;
              case "horizontal-cover":
                f = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / d
                };
                break;
              case "vertical-cover":
                f = {
                  width: t.containerRect.height * d,
                  height: t.containerRect.height
                };
                break;
            }
          else
            f = {
              width: u.offsetWidth,
              height: u.offsetHeight
            };
          t.mediaSize = Se(Se({}, f), {
            naturalWidth: h,
            naturalHeight: c
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var m = t.props.cropSize ? t.props.cropSize : du(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((s = t.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== m.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== m.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(m), t.setState({
            cropSize: m
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(m), m;
        }
      }, t.saveContainerPosition = function() {
        if (t.containerRef) {
          var n = t.containerRef.getBoundingClientRect();
          t.containerPosition = {
            x: n.left,
            y: n.top
          };
        }
      }, t.onMouseDown = function(n) {
        t.currentDoc && (n.preventDefault(), t.currentDoc.addEventListener("mousemove", t.onMouseMove), t.currentDoc.addEventListener("mouseup", t.onDragStopped), t.saveContainerPosition(), t.onDragStart(r.getMousePoint(n)));
      }, t.onMouseMove = function(n) {
        return t.onDrag(r.getMousePoint(n));
      }, t.onScroll = function(n) {
        t.currentDoc && (n.preventDefault(), t.saveContainerPosition());
      }, t.onTouchStart = function(n) {
        t.currentDoc && (t.isTouching = !0, !(t.props.onTouchRequest && !t.props.onTouchRequest(n)) && (t.currentDoc.addEventListener("touchmove", t.onTouchMove, {
          passive: !1
        }), t.currentDoc.addEventListener("touchend", t.onDragStopped), t.saveContainerPosition(), n.touches.length === 2 ? t.onPinchStart(n) : n.touches.length === 1 && t.onDragStart(r.getTouchPoint(n.touches[0]))));
      }, t.onTouchMove = function(n) {
        n.preventDefault(), n.touches.length === 2 ? t.onPinchMove(n) : n.touches.length === 1 && t.onDrag(r.getTouchPoint(n.touches[0]));
      }, t.onGestureStart = function(n) {
        t.currentDoc && (n.preventDefault(), t.currentDoc.addEventListener("gesturechange", t.onGestureMove), t.currentDoc.addEventListener("gestureend", t.onGestureEnd), t.gestureZoomStart = t.props.zoom, t.gestureRotationStart = t.props.rotation);
      }, t.onGestureMove = function(n) {
        if (n.preventDefault(), !t.isTouching) {
          var a = r.getMousePoint(n), i = t.gestureZoomStart - 1 + n.scale;
          if (t.setNewZoom(i, a, {
            shouldUpdatePosition: !0
          }), t.props.onRotationChange) {
            var o = t.gestureRotationStart + n.rotation;
            t.props.onRotationChange(o);
          }
        }
      }, t.onGestureEnd = function(n) {
        t.cleanEvents();
      }, t.onDragStart = function(n) {
        var a, i, o = n.x, s = n.y;
        t.dragStartPosition = {
          x: o,
          y: s
        }, t.dragStartCrop = Se({}, t.props.crop), (i = (a = t.props).onInteractionStart) === null || i === void 0 || i.call(a);
      }, t.onDrag = function(n) {
        var a = n.x, i = n.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(a === void 0 || i === void 0)) {
            var o = a - t.dragStartPosition.x, s = i - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + o,
              y: t.dragStartCrop.y + s
            }, u = t.props.restrictPosition ? mr(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(u);
          }
        }));
      }, t.onDragStopped = function() {
        var n, a;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (a = (n = t.props).onInteractionEnd) === null || a === void 0 || a.call(n);
      }, t.onWheel = function(n) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(n))) {
          n.preventDefault();
          var a = r.getMousePoint(n), i = fu(n).pixelY, o = t.props.zoom - i * t.props.zoomSpeed / 200;
          t.setNewZoom(o, a, {
            shouldUpdatePosition: !0
          }), t.state.hasWheelJustStarted || t.setState({
            hasWheelJustStarted: !0
          }, function() {
            var s, l;
            return (l = (s = t.props).onInteractionStart) === null || l === void 0 ? void 0 : l.call(s);
          }), t.wheelTimer && clearTimeout(t.wheelTimer), t.wheelTimer = t.currentWindow.setTimeout(function() {
            return t.setState({
              hasWheelJustStarted: !1
            }, function() {
              var s, l;
              return (l = (s = t.props).onInteractionEnd) === null || l === void 0 ? void 0 : l.call(s);
            });
          }, 250);
        }
      }, t.getPointOnContainer = function(n, a) {
        var i = n.x, o = n.y;
        if (!t.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: t.containerRect.width / 2 - (i - a.x),
          y: t.containerRect.height / 2 - (o - a.y)
        };
      }, t.getPointOnMedia = function(n) {
        var a = n.x, i = n.y, o = t.props, s = o.crop, l = o.zoom;
        return {
          x: (a + s.x) / l,
          y: (i + s.y) / l
        };
      }, t.setNewZoom = function(n, a, i) {
        var o = i === void 0 ? {} : i, s = o.shouldUpdatePosition, l = s === void 0 ? !0 : s;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var u = qr(n, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var v = t.getPointOnContainer(a, t.containerPosition), h = t.getPointOnMedia(v), c = {
              x: h.x * u - v.x,
              y: h.y * u - v.y
            }, p = t.props.restrictPosition ? mr(c, t.mediaSize, t.state.cropSize, u, t.props.rotation) : c;
            t.props.onCropChange(p);
          }
          t.props.onZoomChange(u);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var n = t.props.restrictPosition ? mr(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return hu(n, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
      }, t.emitCropData = function() {
        var n = t.getCropData();
        if (n) {
          var a = n.croppedAreaPercentages, i = n.croppedAreaPixels;
          t.props.onCropComplete && t.props.onCropComplete(a, i), t.props.onCropAreaChange && t.props.onCropAreaChange(a, i);
        }
      }, t.emitCropAreaChange = function() {
        var n = t.getCropData();
        if (n) {
          var a = n.croppedAreaPercentages, i = n.croppedAreaPixels;
          t.props.onCropAreaChange && t.props.onCropAreaChange(a, i);
        }
      }, t.recomputeCropPosition = function() {
        if (t.state.cropSize) {
          var n = t.props.restrictPosition ? mr(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
          t.props.onCropChange(n), t.emitCropData();
        }
      }, t;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Su, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef));
    }, r.prototype.componentWillUnmount = function() {
      var t, n;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((n = this.styleRef.parentNode) === null || n === void 0 || n.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(t) {
      var n, a, i, o, s, l, u, v, h;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((n = t.cropSize) === null || n === void 0 ? void 0 : n.height) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.height) || ((i = t.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((u = t.crop) === null || u === void 0 ? void 0 : u.y) !== ((v = this.props.crop) === null || v === void 0 ? void 0 : v.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((h = this.videoRef.current) === null || h === void 0 || h.load());
      var c = this.getObjectFit();
      c !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: c
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var t = this.props, n = t.cropSize, a = t.aspect;
      return n ? n.width / n.height : a;
    }, r.prototype.getObjectFit = function() {
      var t, n, a, i;
      if (this.props.objectFit === "cover") {
        var o = this.imageRef.current || this.videoRef.current;
        if (o && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, l = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((n = this.videoRef.current) === null || n === void 0 ? void 0 : n.videoWidth) || 0, u = ((a = this.imageRef.current) === null || a === void 0 ? void 0 : a.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, v = l / u;
          return v < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(t) {
      var n = r.getTouchPoint(t.touches[0]), a = r.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = Ya(n, a), this.lastPinchRotation = Ga(n, a), this.onDragStart(Ka(n, a));
    }, r.prototype.onPinchMove = function(t) {
      var n = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var a = r.getTouchPoint(t.touches[0]), i = r.getTouchPoint(t.touches[1]), o = Ka(a, i);
        this.onDrag(o), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = Ya(a, i), l = n.props.zoom * (s / n.lastPinchDistance);
          n.setNewZoom(l, o, {
            shouldUpdatePosition: !1
          }), n.lastPinchDistance = s;
          var u = Ga(a, i), v = n.props.rotation + (u - n.lastPinchRotation);
          n.props.onRotationChange && n.props.onRotationChange(v), n.lastPinchRotation = u;
        });
      }
    }, r.prototype.render = function() {
      var t = this, n = this.props, a = n.image, i = n.video, o = n.mediaProps, s = n.transform, l = n.crop, u = l.x, v = l.y, h = n.rotation, c = n.zoom, p = n.cropShape, d = n.showGrid, f = n.style, m = f.containerStyle, g = f.cropAreaStyle, S = f.mediaStyle, y = n.classes, w = y.containerClassName, _ = y.cropAreaClassName, $ = y.mediaClassName, M = this.state.mediaObjectFit;
      return I.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(z) {
          return t.containerRef = z;
        },
        "data-testid": "container",
        style: m,
        className: gr("reactEasyCrop_Container", w)
      }, a ? I.createElement("img", Se({
        alt: "",
        className: gr("reactEasyCrop_Image", M === "contain" && "reactEasyCrop_Contain", M === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", M === "vertical-cover" && "reactEasyCrop_Cover_Vertical", $)
      }, o, {
        src: a,
        ref: this.imageRef,
        style: Se(Se({}, S), {
          transform: s || "translate(".concat(u, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(c, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && I.createElement("video", Se({
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: gr("reactEasyCrop_Video", M === "contain" && "reactEasyCrop_Contain", M === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", M === "vertical-cover" && "reactEasyCrop_Cover_Vertical", $)
      }, o, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Se(Se({}, S), {
          transform: s || "translate(".concat(u, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(c, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(F) {
        return I.createElement("source", Se({
          key: F.src
        }, F));
      })), this.state.cropSize && I.createElement("div", {
        style: Se(Se({}, g), {
          width: this.state.cropSize.width,
          height: this.state.cropSize.height
        }),
        "data-testid": "cropper",
        className: gr("reactEasyCrop_CropArea", p === "round" && "reactEasyCrop_CropAreaRound", d && "reactEasyCrop_CropAreaGrid", _)
      }));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: _u,
      minZoom: Eu,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0
    }, r.getMousePoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, r.getTouchPoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, r;
  }(I.Component)
);
const Du = 3 / 4, Ou = ({
  form: e
}) => {
  const {
    file: r,
    data: t,
    setFile: n,
    imageIsLoading: a,
    croppedInfo: i,
    setCroppedInfo: o,
    requestCropImage: s
  } = Zc(), {
    query: l
  } = I.useContext(Ot);
  return I.useEffect(() => {
    var u;
    t && (e.setValue("image", t.original), e.setValue("image_id", t.id), e.setValue("id", (u = l.data) == null ? void 0 : u.data.id), e.setValue("scale", 1), e.setValue("croppedInfo", JSON.stringify(i)));
  }, [t]), /* @__PURE__ */ xe("div", { css: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    gap: "0.75rem"
  }, children: [
    /* @__PURE__ */ E(_c, { severity: "warning", children: "Размер картинки не менее 120х160 пикселей и не более 1 Мб" }),
    /* @__PURE__ */ E(Tu, { file: r, setFile: n, setCroppedInfo: o, requestCropImage: s, isUploading: a }),
    a ? /* @__PURE__ */ E("div", { css: {
      width: "100%",
      flex: "1 1 0%",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ E(wo, { spinning: !0 }) }) : e.getValues("image") && !r ? /* @__PURE__ */ E(Kr, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: e, children: /* @__PURE__ */ E(ae, { control: e.control, name: "image", render: ({
      field: u
    }) => {
      var v;
      return /* @__PURE__ */ E("img", { src: (v = u.value) == null ? void 0 : v.replace("_little", ""), alt: "teacher-profile-picture", width: 240, height: 320 });
    } }) }) : null,
    r ? null : /* @__PURE__ */ E(eu, { onFileChange: n, css: {
      width: "fit-content"
    }, icon: To.faImage, children: "Загрузить картинку" })
  ] });
}, Tu = ({
  file: e,
  setFile: r,
  setCroppedInfo: t,
  requestCropImage: n,
  isUploading: a
}) => {
  const [i, o] = I.useState(""), [s, l] = I.useState({
    width: 0,
    height: 0
  }), [u, v] = I.useState({
    x: 0,
    y: 0
  }), [h, c] = I.useState(1);
  I.useEffect(() => {
    let d = !1;
    if (o(""), e)
      if (e.size > 1048576)
        d = !0, r(null), xr.error("Размер файла превышает 1 Мб", {
          position: "top-center"
        });
      else {
        const f = new FileReader();
        f.onloadend = () => {
          const m = new Image();
          m.onload = () => {
            m.width < 120 || m.height < 160 ? (d = !0, r(null), xr.error("Размер картинки не соответствует требованиям", {
              position: "top-center"
            })) : l({
              width: m.width,
              height: m.height
            });
          };
          const g = f == null ? void 0 : f.result;
          d || (m.src = g, o(g));
        }, f.readAsDataURL(e);
      }
  }, [e]);
  const p = I.useCallback((d, f) => t({
    w: f.width,
    h: f.height,
    cw: s.width,
    ch: s.height,
    l: f.x,
    t: f.y
  }), []);
  return /* @__PURE__ */ E(Yc, { open: !!e, title: "Обрезка картинки (с зумом)", width: 600, height: 600, onClose: () => r(null), children: /* @__PURE__ */ E(Yr, { fit: !0, footer: /* @__PURE__ */ E(Hr, { css: {
    marginLeft: "auto"
  }, variant: "contained", isLoading: a, onClick: n, children: "Сохранить" }), children: /* @__PURE__ */ E("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center"
  }, children: /* @__PURE__ */ E("div", { css: {
    position: "relative",
    height: "300px",
    width: "100%",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ E($u, { image: i, crop: u, onCropChange: v, aspect: Du, zoom: h, onZoomChange: c, onCropComplete: p }) }) }) }) });
};
function qe(e) {
  "@babel/helpers - typeof";
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, qe(e);
}
function Mu(e, r) {
  if (qe(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (qe(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function ko(e) {
  var r = Mu(e, "string");
  return qe(r) == "symbol" ? r : String(r);
}
function ct(e, r, t) {
  return r = ko(r), r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function qa(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function oe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? qa(Object(t), !0).forEach(function(n) {
      ct(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qa(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function He(e, r) {
  if (e == null)
    return {};
  var t = Gr(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function me(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Xa(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ko(n.key), n);
  }
}
function ge(e, r, t) {
  return r && Xa(e.prototype, r), t && Xa(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Pr(e);
}
function No() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (No = function() {
    return !!e;
  })();
}
function Cu(e, r) {
  if (r && (qe(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Eo(e);
}
function Te(e, r, t) {
  return r = Pr(r), Cu(e, No() ? Reflect.construct(r, t || [], Pr(e).constructor) : r.apply(e, t));
}
function Me(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), r && $c(e, r);
}
function Lo(e) {
  if (Array.isArray(e))
    return e;
}
function Au(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t)
          return;
        l = !1;
      } else
        for (; !(l = (n = i.call(t)).done) && (s.push(n.value), s.length !== r); l = !0)
          ;
    } catch (v) {
      u = !0, a = v;
    } finally {
      try {
        if (!l && t.return != null && (o = t.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw a;
      }
    }
    return s;
  }
}
function Wn(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function aa(e, r) {
  if (e) {
    if (typeof e == "string")
      return Wn(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Wn(e, r);
  }
}
function Fo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(e, r) {
  return Lo(e) || Au(e, r) || aa(e, r) || Fo();
}
var xu = function(e, r, t, n, a, i, o, s) {
  if (!e) {
    var l;
    if (r === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var u = [t, n, a, i, o, s], v = 0;
      l = new Error(
        r.replace(/%s/g, function() {
          return u[v++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Pu = xu;
const Vt = /* @__PURE__ */ he(Pu);
var Ru = function() {
};
function Iu(e, r) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    t[Or(n)] = Ru;
  }), t;
}
function Za(e, r) {
  return e[r] !== void 0;
}
function Or(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function ku(e) {
  return !!e && (typeof e != "function" || e.prototype && e.prototype.isReactComponent);
}
function zo() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function Wo(e) {
  function r(t) {
    var n = this.constructor.getDerivedStateFromProps(e, t);
    return n ?? null;
  }
  this.setState(r.bind(this));
}
function jo(e, r) {
  try {
    var t = this.props, n = this.state;
    this.props = e, this.state = r, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      t,
      n
    );
  } finally {
    this.props = t, this.state = n;
  }
}
zo.__suppressDeprecationWarning = !0;
Wo.__suppressDeprecationWarning = !0;
jo.__suppressDeprecationWarning = !0;
function Nu(e) {
  var r = e.prototype;
  if (!r || !r.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function")
    return e;
  var t = null, n = null, a = null;
  if (typeof r.componentWillMount == "function" ? t = "componentWillMount" : typeof r.UNSAFE_componentWillMount == "function" && (t = "UNSAFE_componentWillMount"), typeof r.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof r.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof r.componentWillUpdate == "function" ? a = "componentWillUpdate" : typeof r.UNSAFE_componentWillUpdate == "function" && (a = "UNSAFE_componentWillUpdate"), t !== null || n !== null || a !== null) {
    var i = e.displayName || e.name, o = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + i + " uses " + o + " but also contains the following legacy lifecycles:" + (t !== null ? `
  ` + t : "") + (n !== null ? `
  ` + n : "") + (a !== null ? `
  ` + a : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (r.componentWillMount = zo, r.componentWillReceiveProps = Wo), typeof r.getSnapshotBeforeUpdate == "function") {
    if (typeof r.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    r.componentWillUpdate = jo;
    var s = r.componentDidUpdate;
    r.componentDidUpdate = function(u, v, h) {
      var c = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : h;
      s.call(this, u, v, c);
    };
  }
  return e;
}
var Lu = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function Uo(e, r, t) {
  t === void 0 && (t = []);
  var n = e.displayName || e.name || "Component", a = ku(e), i = Object.keys(r), o = i.map(Or);
  a || !t.length || Vt(!1);
  var s = /* @__PURE__ */ function(u) {
    Dc(v, u);
    function v() {
      for (var c, p = arguments.length, d = new Array(p), f = 0; f < p; f++)
        d[f] = arguments[f];
      c = u.call.apply(u, [this].concat(d)) || this, c.handlers = /* @__PURE__ */ Object.create(null), i.forEach(function(g) {
        var S = r[g], y = function(_) {
          if (c.props[S]) {
            var $;
            c._notifying = !0;
            for (var M = arguments.length, F = new Array(M > 1 ? M - 1 : 0), z = 1; z < M; z++)
              F[z - 1] = arguments[z];
            ($ = c.props)[S].apply($, [_].concat(F)), c._notifying = !1;
          }
          c.unmounted || c.setState(function(C) {
            var A, U = C.values;
            return {
              values: ve(/* @__PURE__ */ Object.create(null), U, (A = {}, A[g] = _, A))
            };
          });
        };
        c.handlers[S] = y;
      }), t.length && (c.attachRef = function(g) {
        c.inner = g;
      });
      var m = /* @__PURE__ */ Object.create(null);
      return i.forEach(function(g) {
        m[g] = c.props[Or(g)];
      }), c.state = {
        values: m,
        prevProps: {}
      }, c;
    }
    var h = v.prototype;
    return h.shouldComponentUpdate = function() {
      return !this._notifying;
    }, v.getDerivedStateFromProps = function(p, d) {
      var f = d.values, m = d.prevProps, g = {
        values: ve(/* @__PURE__ */ Object.create(null), f),
        prevProps: {}
      };
      return i.forEach(function(S) {
        g.prevProps[S] = p[S], !Za(p, S) && Za(m, S) && (g.values[S] = p[Or(S)]);
      }), g;
    }, h.componentWillUnmount = function() {
      this.unmounted = !0;
    }, h.render = function() {
      var p = this, d = this.props, f = d.innerRef, m = Gr(d, ["innerRef"]);
      o.forEach(function(S) {
        delete m[S];
      });
      var g = {};
      return i.forEach(function(S) {
        var y = p.props[S];
        g[S] = y !== void 0 ? y : p.state.values[S];
      }), b.createElement(e, ve({}, m, g, this.handlers, {
        ref: f || this.attachRef
      }));
    }, v;
  }(b.Component);
  Nu(s), s.displayName = "Uncontrolled(" + n + ")", s.propTypes = ve({
    innerRef: function() {
    }
  }, Iu(r)), t.forEach(function(u) {
    s.prototype[u] = function() {
      var h;
      return (h = this.inner)[u].apply(h, arguments);
    };
  });
  var l = s;
  return b.forwardRef && (l = b.forwardRef(function(u, v) {
    return b.createElement(s, ve({}, u, {
      innerRef: v,
      __source: {
        fileName: Lu,
        lineNumber: 128
      },
      __self: this
    }));
  }), l.propTypes = s.propTypes), l.ControlledComponent = e, l.deferControlTo = function(u, v, h) {
    return v === void 0 && (v = {}), Uo(u, ve({}, r, v), h);
  }, l;
}
function Bo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = Bo(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function pe() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Bo(e)) && (n && (n += " "), n += r);
  return n;
}
var Rr = "milliseconds", Yt = "seconds", Gt = "minutes", Kt = "hours", ft = "day", $t = "week", qt = "month", dt = "year", vt = "decade", ht = "century", Ho = {
  milliseconds: 1,
  seconds: 1e3,
  minutes: 60 * 1e3,
  hours: 60 * 60 * 1e3,
  day: 24 * 60 * 60 * 1e3,
  week: 7 * 24 * 60 * 60 * 1e3
}, Fu = {
  month: 1,
  year: 12,
  decade: 10 * 12,
  century: 100 * 12
};
function zu(e) {
  return [31, Wu(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function Wu(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 : 28;
}
function ze(e, r, t) {
  switch (e = new Date(e), t) {
    case Rr:
    case Yt:
    case Gt:
    case Kt:
    case ft:
    case $t:
      return ju(e, r * Ho[t]);
    case qt:
    case dt:
    case vt:
    case ht:
      return Uu(e, r * Fu[t]);
  }
  throw new TypeError('Invalid units: "' + t + '"');
}
function ju(e, r) {
  var t = new Date(+e + r);
  return Bu(e, t);
}
function Uu(e, r) {
  var t = e.getFullYear(), n = e.getMonth(), a = e.getDate(), i = t * 12 + n + r, o = Math.trunc(i / 12), s = i % 12, l = Math.min(a, zu(o)[s]), u = new Date(e);
  return u.setFullYear(o), u.setDate(1), u.setMonth(s), u.setDate(l), u;
}
function Bu(e, r) {
  var t = e.getTimezoneOffset(), n = r.getTimezoneOffset(), a = n - t;
  return new Date(+r + a * Ho.minutes);
}
function Xt(e, r, t) {
  return ze(e, -r, t);
}
function ye(e, r, t) {
  switch (e = new Date(e), r) {
    case ht:
    case vt:
    case dt:
      e = kr(e, 0);
    case qt:
      e = qo(e, 1);
    case $t:
    case ft:
      e = Qt(e, 0);
    case Kt:
      e = Dt(e, 0);
    case Gt:
      e = Jt(e, 0);
    case Yt:
      e = Zt(e, 0);
  }
  return r === vt && (e = Xt(e, pt(e) % 10, "year")), r === ht && (e = Xt(e, pt(e) % 100, "year")), r === $t && (e = Xo(e, 0, t)), e;
}
function Ir(e, r, t) {
  switch (e = new Date(e), e = ye(e, r, t), r) {
    case ht:
    case vt:
    case dt:
    case qt:
    case $t:
      e = ze(e, 1, r), e = Xt(e, 1, ft), e.setHours(23, 59, 59, 999);
      break;
    case ft:
      e.setHours(23, 59, 59, 999);
      break;
    case Kt:
    case Gt:
    case Yt:
      e = ze(e, 1, r), e = Xt(e, 1, Rr);
  }
  return e;
}
var rr = Mt(function(e, r) {
  return e === r;
}), ia = Mt(function(e, r) {
  return e !== r;
}), Xr = Mt(function(e, r) {
  return e > r;
}), nr = Mt(function(e, r) {
  return e >= r;
}), oa = Mt(function(e, r) {
  return e < r;
}), Tt = Mt(function(e, r) {
  return e <= r;
});
function Vo() {
  return new Date(Math.min.apply(Math, arguments));
}
function Yo() {
  return new Date(Math.max.apply(Math, arguments));
}
function Go(e, r, t, n) {
  return n = n || "day", (!r || nr(e, r, n)) && (!t || Tt(e, t, n));
}
var Zt = rt("Milliseconds"), Jt = rt("Seconds"), Dt = rt("Minutes"), Qt = rt("Hours"), Ko = rt("Day"), qo = rt("Date"), kr = rt("Month"), pt = rt("FullYear");
function Hu(e, r) {
  return r === void 0 ? pt(ye(e, vt)) : ze(e, r + 10, dt);
}
function Vu(e, r) {
  return r === void 0 ? pt(ye(e, ht)) : ze(e, r + 100, dt);
}
function Xo(e, r, t) {
  var n = (Ko(e) + 7 - (t || 0)) % 7;
  return r === void 0 ? n : ze(e, r - n, ft);
}
function Yu(e, r, t, n) {
  var a, i, o;
  switch (t) {
    case Rr:
    case Yt:
    case Gt:
    case Kt:
    case ft:
    case $t:
      a = r.getTime() - e.getTime();
      break;
    case qt:
    case dt:
    case vt:
    case ht:
      a = (pt(r) - pt(e)) * 12 + kr(r) - kr(e);
      break;
    default:
      throw new TypeError('Invalid units: "' + t + '"');
  }
  switch (t) {
    case Rr:
      i = 1;
      break;
    case Yt:
      i = 1e3;
      break;
    case Gt:
      i = 1e3 * 60;
      break;
    case Kt:
      i = 1e3 * 60 * 60;
      break;
    case ft:
      i = 1e3 * 60 * 60 * 24;
      break;
    case $t:
      i = 1e3 * 60 * 60 * 24 * 7;
      break;
    case qt:
      i = 1;
      break;
    case dt:
      i = 12;
      break;
    case vt:
      i = 120;
      break;
    case ht:
      i = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + t + '"');
  }
  return o = a / i, n ? o : Math.round(o);
}
function rt(e) {
  var r = function(t) {
    switch (t) {
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
  return function(t, n) {
    if (n === void 0)
      return t["get" + e]();
    var a = new Date(t);
    return a["set" + e](n), r && a["get" + e]() != n && (e === "Hours" || n >= r && a.getHours() - t.getHours() < Math.floor(n / r)) && a["set" + e](n + r), a;
  };
}
function Mt(e) {
  return function(r, t, n) {
    return e(+ye(r, n), +ye(t, n));
  };
}
const Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: ze,
  century: Vu,
  date: qo,
  day: Ko,
  decade: Hu,
  diff: Yu,
  endOf: Ir,
  eq: rr,
  gt: Xr,
  gte: nr,
  hours: Qt,
  inRange: Go,
  lt: oa,
  lte: Tt,
  max: Yo,
  milliseconds: Zt,
  min: Vo,
  minutes: Dt,
  month: kr,
  neq: ia,
  seconds: Jt,
  startOf: ye,
  subtract: Xt,
  weekday: Xo,
  year: pt
}, Symbol.toStringTag, { value: "Module" }));
function Gu(e) {
  if (Array.isArray(e))
    return Wn(e);
}
function Zo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ku() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tr(e) {
  return Gu(e) || Zo(e) || aa(e) || Ku();
}
function qu(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
var Jo = qu;
function Xu(e, r) {
  return e === r || e !== e && r !== r;
}
var ar = Xu, Zu = typeof Oe == "object" && Oe && Oe.Object === Object && Oe, Qo = Zu, Ju = Qo, Qu = typeof self == "object" && self && self.Object === Object && self, ef = Ju || Qu || Function("return this")(), Ve = ef, tf = Ve, rf = tf.Symbol, Ct = rf, Qa = Ct, es = Object.prototype, nf = es.hasOwnProperty, af = es.toString, jt = Qa ? Qa.toStringTag : void 0;
function of(e) {
  var r = nf.call(e, jt), t = e[jt];
  try {
    e[jt] = void 0;
    var n = !0;
  } catch {
  }
  var a = af.call(e);
  return n && (r ? e[jt] = t : delete e[jt]), a;
}
var sf = of, lf = Object.prototype, cf = lf.toString;
function uf(e) {
  return cf.call(e);
}
var ff = uf, ei = Ct, df = sf, vf = ff, hf = "[object Null]", pf = "[object Undefined]", ti = ei ? ei.toStringTag : void 0;
function mf(e) {
  return e == null ? e === void 0 ? pf : hf : ti && ti in Object(e) ? df(e) : vf(e);
}
var At = mf;
function gf(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Xe = gf, bf = At, yf = Xe, wf = "[object AsyncFunction]", Sf = "[object Function]", Ef = "[object GeneratorFunction]", _f = "[object Proxy]";
function $f(e) {
  if (!yf(e))
    return !1;
  var r = bf(e);
  return r == Sf || r == Ef || r == wf || r == _f;
}
var sa = $f, Df = 9007199254740991;
function Of(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Df;
}
var la = Of, Tf = sa, Mf = la;
function Cf(e) {
  return e != null && Mf(e.length) && !Tf(e);
}
var ir = Cf, Af = 9007199254740991, xf = /^(?:0|[1-9]\d*)$/;
function Pf(e, r) {
  var t = typeof e;
  return r = r ?? Af, !!r && (t == "number" || t != "symbol" && xf.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var ca = Pf, Rf = ar, If = ir, kf = ca, Nf = Xe;
function Lf(e, r, t) {
  if (!Nf(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? If(t) && kf(r, t.length) : n == "string" && r in t) ? Rf(t[r], e) : !1;
}
var Zr = Lf, Ff = /\s/;
function zf(e) {
  for (var r = e.length; r-- && Ff.test(e.charAt(r)); )
    ;
  return r;
}
var Wf = zf, jf = Wf, Uf = /^\s+/;
function Bf(e) {
  return e && e.slice(0, jf(e) + 1).replace(Uf, "");
}
var Hf = Bf;
function Vf(e) {
  return e != null && typeof e == "object";
}
var nt = Vf, Yf = At, Gf = nt, Kf = "[object Symbol]";
function qf(e) {
  return typeof e == "symbol" || Gf(e) && Yf(e) == Kf;
}
var or = qf, Xf = Hf, ri = Xe, Zf = or, ni = 0 / 0, Jf = /^[-+]0x[0-9a-f]+$/i, Qf = /^0b[01]+$/i, ed = /^0o[0-7]+$/i, td = parseInt;
function rd(e) {
  if (typeof e == "number")
    return e;
  if (Zf(e))
    return ni;
  if (ri(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ri(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Xf(e);
  var t = Qf.test(e);
  return t || ed.test(e) ? td(e.slice(2), t ? 2 : 8) : Jf.test(e) ? ni : +e;
}
var nd = rd, ad = nd, ai = 1 / 0, id = 17976931348623157e292;
function od(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ad(e), e === ai || e === -ai) {
    var r = e < 0 ? -1 : 1;
    return r * id;
  }
  return e === e ? e : 0;
}
var ts = od, sd = ts;
function ld(e) {
  var r = sd(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var rs = ld, cd = Jo, ud = Zr, fd = rs, dd = Math.ceil, vd = Math.max;
function hd(e, r, t) {
  (t ? ud(e, r, t) : r === void 0) ? r = 1 : r = vd(fd(r), 0);
  var n = e == null ? 0 : e.length;
  if (!n || r < 1)
    return [];
  for (var a = 0, i = 0, o = Array(dd(n / r)); a < n; )
    o[i++] = cd(e, a, a += r);
  return o;
}
var pd = hd;
const md = /* @__PURE__ */ he(pd);
function sr(e) {
  return e && e.ownerDocument || document;
}
function gd(e) {
  var r = sr(e);
  return r && r.defaultView || window;
}
function bd(e, r) {
  return gd(e).getComputedStyle(e, r);
}
var yd = /([A-Z])/g;
function wd(e) {
  return e.replace(yd, "-$1").toLowerCase();
}
var Sd = /^ms-/;
function br(e) {
  return wd(e).replace(Sd, "-ms-");
}
var Ed = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function _d(e) {
  return !!(e && Ed.test(e));
}
function St(e, r) {
  var t = "", n = "";
  if (typeof r == "string")
    return e.style.getPropertyValue(br(r)) || bd(e).getPropertyValue(br(r));
  Object.keys(r).forEach(function(a) {
    var i = r[a];
    !i && i !== 0 ? e.style.removeProperty(br(a)) : _d(a) ? n += a + "(" + i + ") " : t += br(a) + ": " + i + ";";
  }), n && (t += "transform: " + n + ";"), e.style.cssText += ";" + t;
}
function er(e, r) {
  if (e.contains)
    return e.contains(r);
  if (e.compareDocumentPosition)
    return e === r || !!(e.compareDocumentPosition(r) & 16);
}
function $d(e) {
  return "nodeType" in e && e.nodeType === document.DOCUMENT_NODE;
}
function ua(e) {
  return "window" in e && e.window === e ? e : $d(e) && e.defaultView || !1;
}
function ns(e) {
  var r = e === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function t(n, a) {
    var i = ua(n);
    if (a === void 0)
      return i ? i[e] : n[r];
    i ? i.scrollTo(i[e], a) : n[r] = a;
  }
  return t;
}
const as = ns("pageXOffset"), is = ns("pageYOffset");
function ut(e) {
  var r = sr(e), t = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }, n = r && r.documentElement;
  return !n || !er(n, e) || (e.getBoundingClientRect !== void 0 && (t = e.getBoundingClientRect()), t = {
    top: t.top + is(n) - (n.clientTop || 0),
    left: t.left + as(n) - (n.clientLeft || 0),
    width: t.width,
    height: t.height
  }), t;
}
var Dd = function(r) {
  return !!r && "offsetParent" in r;
};
function Od(e) {
  for (var r = sr(e), t = e && e.offsetParent; Dd(t) && t.nodeName !== "HTML" && St(t, "position") === "static"; )
    t = t.offsetParent;
  return t || r.documentElement;
}
var Td = function(r) {
  return r.nodeName && r.nodeName.toLowerCase();
};
function os(e, r) {
  var t = {
    top: 0,
    left: 0
  }, n;
  if (St(e, "position") === "fixed")
    n = e.getBoundingClientRect();
  else {
    var a = r || Od(e);
    n = ut(e), Td(a) !== "html" && (t = ut(a));
    var i = String(St(a, "borderTopWidth") || 0);
    t.top += parseInt(i, 10) - is(a) || 0;
    var o = String(St(a, "borderLeftWidth") || 0);
    t.left += parseInt(o, 10) - as(a) || 0;
  }
  var s = String(St(e, "marginTop") || 0), l = String(St(e, "marginLeft") || 0);
  return ve({}, n, {
    top: n.top - t.top - (parseInt(s, 10) || 0),
    left: n.left - t.left - (parseInt(l, 10) || 0)
  });
}
const fa = !!(typeof window < "u" && window.document && window.document.createElement);
var ii = (/* @__PURE__ */ new Date()).getTime();
function Md(e) {
  var r = (/* @__PURE__ */ new Date()).getTime(), t = Math.max(0, 16 - (r - ii)), n = setTimeout(e, t);
  return ii = r, n;
}
var Cd = ["", "webkit", "moz", "o", "ms"], jn = "clearTimeout", Un = Md, oi = function(r, t) {
  return r + (r ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame";
};
fa && Cd.some(function(e) {
  var r = oi(e, "request");
  return r in window && (jn = oi(e, "cancel"), Un = function(n) {
    return window[r](n);
  }), !!Un;
});
var si = function(r) {
  typeof window[jn] == "function" && window[jn](r);
}, ss = Un, wn;
function Ad(e, r) {
  if (!wn) {
    var t = document.body, n = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
    wn = function(i, o) {
      return n.call(i, o);
    };
  }
  return wn(e, r);
}
var xd = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Pd(e, r) {
  return xd(e.querySelectorAll(r));
}
var Bn = !1, Hn = !1;
try {
  var Sn = {
    get passive() {
      return Bn = !0;
    },
    get once() {
      return Hn = Bn = !0;
    }
  };
  fa && (window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, !0));
} catch {
}
function Rd(e, r, t, n) {
  if (n && typeof n != "boolean" && !Hn) {
    var a = n.once, i = n.capture, o = t;
    !Hn && a && (o = t.__once || function s(l) {
      this.removeEventListener(r, s, i), t.call(this, l);
    }, t.__once = o), e.addEventListener(r, o, Bn ? n : i);
  }
  e.addEventListener(r, t, n);
}
function Id(e) {
  const r = I.useRef(e);
  return I.useEffect(() => {
    r.current = e;
  }, [e]), r;
}
function li(e) {
  const r = Id(e);
  return I.useCallback(function(...t) {
    return r.current && r.current(...t);
  }, [r]);
}
function ci() {
  return I.useState(null);
}
function kd() {
  const e = I.useRef(!0), r = I.useRef(() => e.current);
  return I.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), r.current;
}
function Nd(e) {
  const r = kd();
  return [e[0], I.useCallback((t) => {
    if (r())
      return e[1](t);
  }, [r, e[1]])];
}
var Ld = Oc({
  defaultModifiers: [Tc, Mc, Cc, Ac, xc, Pc, Rc, Ic]
}), ui = function(r) {
  return {
    position: r,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, Fd = {
  name: "applyStyles",
  enabled: !1
}, zd = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(r) {
    var t = r.state;
    return function() {
      var n = t.elements, a = n.reference, i = n.popper;
      if ("removeAttribute" in a) {
        var o = (a.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
          return s.trim() !== i.id;
        });
        o.length ? a.setAttribute("aria-describedby", o.join(",")) : a.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(r) {
    var t, n = r.state, a = n.elements, i = a.popper, o = a.reference, s = (t = i.getAttribute("role")) == null ? void 0 : t.toLowerCase();
    if (i.id && s === "tooltip" && "setAttribute" in o) {
      var l = o.getAttribute("aria-describedby");
      if (l && l.split(",").indexOf(i.id) !== -1)
        return;
      o.setAttribute("aria-describedby", l ? l + "," + i.id : i.id);
    }
  }
}, Wd = [];
function jd(e, r, t) {
  var n = t === void 0 ? {} : t, a = n.enabled, i = a === void 0 ? !0 : a, o = n.placement, s = o === void 0 ? "bottom" : o, l = n.strategy, u = l === void 0 ? "absolute" : l, v = n.modifiers, h = v === void 0 ? Wd : v, c = Gr(n, ["enabled", "placement", "strategy", "modifiers"]), p = I.useRef(), d = I.useCallback(function() {
    var w;
    (w = p.current) == null || w.update();
  }, []), f = I.useCallback(function() {
    var w;
    (w = p.current) == null || w.forceUpdate();
  }, []), m = Nd(I.useState({
    placement: s,
    update: d,
    forceUpdate: f,
    attributes: {},
    styles: {
      popper: ui(u),
      arrow: {}
    }
  })), g = m[0], S = m[1], y = I.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function(_) {
        var $ = _.state, M = {}, F = {};
        Object.keys($.elements).forEach(function(z) {
          M[z] = $.styles[z], F[z] = $.attributes[z];
        }), S({
          state: $,
          styles: M,
          attributes: F,
          update: d,
          forceUpdate: f,
          placement: $.placement
        });
      }
    };
  }, [d, f, S]);
  return I.useEffect(function() {
    !p.current || !i || p.current.setOptions({
      placement: s,
      strategy: u,
      modifiers: [].concat(h, [y, Fd])
    });
  }, [u, s, y, i]), I.useEffect(function() {
    if (!(!i || e == null || r == null))
      return p.current = Ld(e, r, ve({}, c, {
        placement: s,
        strategy: u,
        modifiers: [].concat(h, [zd, y])
      })), function() {
        p.current != null && (p.current.destroy(), p.current = void 0, S(function(w) {
          return ve({}, w, {
            attributes: {},
            styles: {
              popper: ui(u)
            }
          });
        }));
      };
  }, [i, e, r]), g;
}
function Ud(e, r, t, n) {
  var a = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(r, t, a), t.__once && e.removeEventListener(r, t.__once, a);
}
function Bt(e, r, t, n) {
  return Rd(e, r, t, n), function() {
    Ud(e, r, t, n);
  };
}
function Bd(e) {
  return e && "setState" in e ? So.findDOMNode(e) : e ?? null;
}
const Hd = function(e) {
  return sr(Bd(e));
};
var Vd = 27, fi = function() {
};
function Yd(e) {
  return e.button === 0;
}
function Gd(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var di = function(r) {
  return r && ("current" in r ? r.current : r);
};
function Kd(e, r, t) {
  var n = t === void 0 ? {} : t, a = n.disabled, i = n.clickTrigger, o = i === void 0 ? "click" : i, s = I.useRef(!1), l = r || fi, u = I.useCallback(function(c) {
    var p, d = di(e);
    bc(!!d, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !d || Gd(c) || !Yd(c) || !!er(d, (p = c.composedPath == null ? void 0 : c.composedPath()[0]) != null ? p : c.target);
  }, [e]), v = li(function(c) {
    s.current || l(c);
  }), h = li(function(c) {
    c.keyCode === Vd && l(c);
  });
  I.useEffect(function() {
    if (!(a || e == null)) {
      var c = window.event, p = Hd(di(e)), d = Bt(p, o, u, !0), f = Bt(p, o, function(S) {
        if (S === c) {
          c = void 0;
          return;
        }
        v(S);
      }), m = Bt(p, "keyup", function(S) {
        if (S === c) {
          c = void 0;
          return;
        }
        h(S);
      }), g = [];
      return "ontouchstart" in p.documentElement && (g = [].slice.call(p.body.children).map(function(S) {
        return Bt(S, "mousemove", fi);
      })), function() {
        d(), f(), m(), g.forEach(function(S) {
          return S();
        });
      };
    }
  }, [e, a, o, u, v, h]);
}
function qd(e) {
  var r = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(t) {
    r[t.name] = t;
  }), r) : e || r;
}
function Xd(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(r) {
    return e[r].name = r, e[r];
  });
}
function Zd(e) {
  var r, t, n, a, i = e.enabled, o = e.enableEvents, s = e.placement, l = e.flip, u = e.offset, v = e.fixed, h = e.containerPadding, c = e.arrowElement, p = e.popperConfig, d = p === void 0 ? {} : p, f = qd(d.modifiers);
  return ve({}, d, {
    placement: s,
    enabled: i,
    strategy: v ? "fixed" : d.strategy,
    modifiers: Xd(ve({}, f, {
      eventListeners: {
        enabled: o
      },
      preventOverflow: ve({}, f.preventOverflow, {
        options: h ? ve({
          padding: h
        }, (r = f.preventOverflow) == null ? void 0 : r.options) : (t = f.preventOverflow) == null ? void 0 : t.options
      }),
      offset: {
        options: ve({
          offset: u
        }, (n = f.offset) == null ? void 0 : n.options)
      },
      arrow: ve({}, f.arrow, {
        enabled: !!c,
        options: ve({}, (a = f.arrow) == null ? void 0 : a.options, {
          element: c
        })
      }),
      flip: ve({
        enabled: !!l
      }, f.flip)
    }))
  });
}
var yr;
function ls(e) {
  if ((!yr && yr !== 0 || e) && fa) {
    var r = document.createElement("div");
    r.style.position = "absolute", r.style.top = "-9999px", r.style.width = "50px", r.style.height = "50px", r.style.overflow = "scroll", document.body.appendChild(r), yr = r.offsetWidth - r.clientWidth, document.body.removeChild(r);
  }
  return yr;
}
var En = function(r) {
  var t;
  return typeof document > "u" ? null : r == null ? sr().body : (typeof r == "function" && (r = r()), r && "current" in r && (r = r.current), (t = r) != null && t.nodeType && r || null);
};
function vi(e, r) {
  var t = I.useState(function() {
    return En(e);
  }), n = t[0], a = t[1];
  if (!n) {
    var i = En(e);
    i && a(i);
  }
  return I.useEffect(function() {
    r && n && r(n);
  }, [r, n]), I.useEffect(function() {
    var o = En(e);
    o !== n && a(o);
  }, [e, n]), n;
}
const hi = (e) => !e || typeof e == "function" ? e : (r) => {
  e.current = r;
};
function Jd(e, r) {
  const t = hi(e), n = hi(r);
  return (a) => {
    t && t(a), n && n(a);
  };
}
function Qd(e, r) {
  return I.useMemo(() => Jd(e, r), [e, r]);
}
var da = /* @__PURE__ */ b.forwardRef(function(e, r) {
  var t = e.flip, n = e.offset, a = e.placement, i = e.containerPadding, o = i === void 0 ? 5 : i, s = e.popperConfig, l = s === void 0 ? {} : s, u = e.transition, v = ci(), h = v[0], c = v[1], p = ci(), d = p[0], f = p[1], m = Qd(c, r), g = vi(e.container), S = vi(e.target), y = I.useState(!e.show), w = y[0], _ = y[1], $ = jd(S, h, Zd({
    placement: a,
    enableEvents: !!e.show,
    containerPadding: o || 5,
    flip: t,
    offset: n,
    arrowElement: d,
    popperConfig: l
  })), M = $.styles, F = $.attributes, z = Gr($, ["styles", "attributes"]);
  e.show ? w && _(!1) : !e.transition && !w && _(!0);
  var C = function() {
    _(!0), e.onExited && e.onExited.apply(e, arguments);
  }, A = e.show || u && !w;
  if (Kd(h, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !A)
    return null;
  var U = e.children(ve({}, z, {
    show: !!e.show,
    props: ve({}, F.popper, {
      style: M.popper,
      ref: m
    }),
    arrowProps: ve({}, F.arrow, {
      style: M.arrow,
      ref: f
    })
  }));
  if (u) {
    var H = e.onExit, W = e.onExiting, x = e.onEnter, O = e.onEntering, N = e.onEntered;
    U = /* @__PURE__ */ b.createElement(u, {
      in: e.show,
      appear: !0,
      onExit: H,
      onExiting: W,
      onExited: C,
      onEnter: x,
      onEntering: O,
      onEntered: N
    }, U);
  }
  return g ? /* @__PURE__ */ So.createPortal(U, g) : null;
});
da.displayName = "Overlay";
da.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: R.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: R.oneOf(kc),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: R.any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: R.any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: R.bool,
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
  children: R.func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: R.number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: R.object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: R.bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: R.oneOf(["click", "mousedown"]),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: R.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      n[a - 1] = arguments[a];
    if (r.rootClose) {
      var i;
      return (i = R.func).isRequired.apply(i, [r].concat(n));
    }
    return R.func.apply(R, [r].concat(n));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: R.elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: R.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: R.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: R.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: R.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: R.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: R.func
};
const ev = da;
function tv() {
  this.__data__ = [], this.size = 0;
}
var rv = tv, nv = ar;
function av(e, r) {
  for (var t = e.length; t--; )
    if (nv(e[t][0], r))
      return t;
  return -1;
}
var Jr = av, iv = Jr, ov = Array.prototype, sv = ov.splice;
function lv(e) {
  var r = this.__data__, t = iv(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : sv.call(r, t, 1), --this.size, !0;
}
var cv = lv, uv = Jr;
function fv(e) {
  var r = this.__data__, t = uv(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var dv = fv, vv = Jr;
function hv(e) {
  return vv(this.__data__, e) > -1;
}
var pv = hv, mv = Jr;
function gv(e, r) {
  var t = this.__data__, n = mv(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var bv = gv, yv = rv, wv = cv, Sv = dv, Ev = pv, _v = bv;
function xt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
xt.prototype.clear = yv;
xt.prototype.delete = wv;
xt.prototype.get = Sv;
xt.prototype.has = Ev;
xt.prototype.set = _v;
var Qr = xt, $v = Qr;
function Dv() {
  this.__data__ = new $v(), this.size = 0;
}
var Ov = Dv;
function Tv(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var Mv = Tv;
function Cv(e) {
  return this.__data__.get(e);
}
var Av = Cv;
function xv(e) {
  return this.__data__.has(e);
}
var Pv = xv, Rv = Ve, Iv = Rv["__core-js_shared__"], kv = Iv, _n = kv, pi = function() {
  var e = /[^.]+$/.exec(_n && _n.keys && _n.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nv(e) {
  return !!pi && pi in e;
}
var Lv = Nv, Fv = Function.prototype, zv = Fv.toString;
function Wv(e) {
  if (e != null) {
    try {
      return zv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var cs = Wv, jv = sa, Uv = Lv, Bv = Xe, Hv = cs, Vv = /[\\^$.*+?()[\]{}|]/g, Yv = /^\[object .+?Constructor\]$/, Gv = Function.prototype, Kv = Object.prototype, qv = Gv.toString, Xv = Kv.hasOwnProperty, Zv = RegExp(
  "^" + qv.call(Xv).replace(Vv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jv(e) {
  if (!Bv(e) || Uv(e))
    return !1;
  var r = jv(e) ? Zv : Yv;
  return r.test(Hv(e));
}
var Qv = Jv;
function eh(e, r) {
  return e == null ? void 0 : e[r];
}
var th = eh, rh = Qv, nh = th;
function ah(e, r) {
  var t = nh(e, r);
  return rh(t) ? t : void 0;
}
var gt = ah, ih = gt, oh = Ve, sh = ih(oh, "Map"), va = sh, lh = gt, ch = lh(Object, "create"), en = ch, mi = en;
function uh() {
  this.__data__ = mi ? mi(null) : {}, this.size = 0;
}
var fh = uh;
function dh(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var vh = dh, hh = en, ph = "__lodash_hash_undefined__", mh = Object.prototype, gh = mh.hasOwnProperty;
function bh(e) {
  var r = this.__data__;
  if (hh) {
    var t = r[e];
    return t === ph ? void 0 : t;
  }
  return gh.call(r, e) ? r[e] : void 0;
}
var yh = bh, wh = en, Sh = Object.prototype, Eh = Sh.hasOwnProperty;
function _h(e) {
  var r = this.__data__;
  return wh ? r[e] !== void 0 : Eh.call(r, e);
}
var $h = _h, Dh = en, Oh = "__lodash_hash_undefined__";
function Th(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Dh && r === void 0 ? Oh : r, this;
}
var Mh = Th, Ch = fh, Ah = vh, xh = yh, Ph = $h, Rh = Mh;
function Pt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Pt.prototype.clear = Ch;
Pt.prototype.delete = Ah;
Pt.prototype.get = xh;
Pt.prototype.has = Ph;
Pt.prototype.set = Rh;
var Ih = Pt, gi = Ih, kh = Qr, Nh = va;
function Lh() {
  this.size = 0, this.__data__ = {
    hash: new gi(),
    map: new (Nh || kh)(),
    string: new gi()
  };
}
var Fh = Lh;
function zh(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Wh = zh, jh = Wh;
function Uh(e, r) {
  var t = e.__data__;
  return jh(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var tn = Uh, Bh = tn;
function Hh(e) {
  var r = Bh(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Vh = Hh, Yh = tn;
function Gh(e) {
  return Yh(this, e).get(e);
}
var Kh = Gh, qh = tn;
function Xh(e) {
  return qh(this, e).has(e);
}
var Zh = Xh, Jh = tn;
function Qh(e, r) {
  var t = Jh(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var ep = Qh, tp = Fh, rp = Vh, np = Kh, ap = Zh, ip = ep;
function Rt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = tp;
Rt.prototype.delete = rp;
Rt.prototype.get = np;
Rt.prototype.has = ap;
Rt.prototype.set = ip;
var ha = Rt, op = Qr, sp = va, lp = ha, cp = 200;
function up(e, r) {
  var t = this.__data__;
  if (t instanceof op) {
    var n = t.__data__;
    if (!sp || n.length < cp - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new lp(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var fp = up, dp = Qr, vp = Ov, hp = Mv, pp = Av, mp = Pv, gp = fp;
function It(e) {
  var r = this.__data__ = new dp(e);
  this.size = r.size;
}
It.prototype.clear = vp;
It.prototype.delete = hp;
It.prototype.get = pp;
It.prototype.has = mp;
It.prototype.set = gp;
var pa = It, bp = "__lodash_hash_undefined__";
function yp(e) {
  return this.__data__.set(e, bp), this;
}
var wp = yp;
function Sp(e) {
  return this.__data__.has(e);
}
var Ep = Sp, _p = ha, $p = wp, Dp = Ep;
function Nr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new _p(); ++r < t; )
    this.add(e[r]);
}
Nr.prototype.add = Nr.prototype.push = $p;
Nr.prototype.has = Dp;
var Op = Nr;
function Tp(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var Mp = Tp;
function Cp(e, r) {
  return e.has(r);
}
var Ap = Cp, xp = Op, Pp = Mp, Rp = Ap, Ip = 1, kp = 2;
function Np(e, r, t, n, a, i) {
  var o = t & Ip, s = e.length, l = r.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = i.get(e), v = i.get(r);
  if (u && v)
    return u == r && v == e;
  var h = -1, c = !0, p = t & kp ? new xp() : void 0;
  for (i.set(e, r), i.set(r, e); ++h < s; ) {
    var d = e[h], f = r[h];
    if (n)
      var m = o ? n(f, d, h, r, e, i) : n(d, f, h, e, r, i);
    if (m !== void 0) {
      if (m)
        continue;
      c = !1;
      break;
    }
    if (p) {
      if (!Pp(r, function(g, S) {
        if (!Rp(p, S) && (d === g || a(d, g, t, n, i)))
          return p.push(S);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === f || a(d, f, t, n, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), c;
}
var us = Np, Lp = Ve, Fp = Lp.Uint8Array, fs = Fp;
function zp(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, a) {
    t[++r] = [a, n];
  }), t;
}
var Wp = zp;
function jp(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var Up = jp, bi = Ct, yi = fs, Bp = ar, Hp = us, Vp = Wp, Yp = Up, Gp = 1, Kp = 2, qp = "[object Boolean]", Xp = "[object Date]", Zp = "[object Error]", Jp = "[object Map]", Qp = "[object Number]", em = "[object RegExp]", tm = "[object Set]", rm = "[object String]", nm = "[object Symbol]", am = "[object ArrayBuffer]", im = "[object DataView]", wi = bi ? bi.prototype : void 0, $n = wi ? wi.valueOf : void 0;
function om(e, r, t, n, a, i, o) {
  switch (t) {
    case im:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case am:
      return !(e.byteLength != r.byteLength || !i(new yi(e), new yi(r)));
    case qp:
    case Xp:
    case Qp:
      return Bp(+e, +r);
    case Zp:
      return e.name == r.name && e.message == r.message;
    case em:
    case rm:
      return e == r + "";
    case Jp:
      var s = Vp;
    case tm:
      var l = n & Gp;
      if (s || (s = Yp), e.size != r.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == r;
      n |= Kp, o.set(e, r);
      var v = Hp(s(e), s(r), n, a, i, o);
      return o.delete(e), v;
    case nm:
      if ($n)
        return $n.call(e) == $n.call(r);
  }
  return !1;
}
var sm = om;
function lm(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
var ma = lm, cm = Array.isArray, ke = cm, um = ma, fm = ke;
function dm(e, r, t) {
  var n = r(e);
  return fm(e) ? n : um(n, t(e));
}
var ds = dm;
function vm(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    r(o, t, e) && (i[a++] = o);
  }
  return i;
}
var hm = vm;
function pm() {
  return [];
}
var vs = pm, mm = hm, gm = vs, bm = Object.prototype, ym = bm.propertyIsEnumerable, Si = Object.getOwnPropertySymbols, wm = Si ? function(e) {
  return e == null ? [] : (e = Object(e), mm(Si(e), function(r) {
    return ym.call(e, r);
  }));
} : gm, ga = wm;
function Sm(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Em = Sm, _m = At, $m = nt, Dm = "[object Arguments]";
function Om(e) {
  return $m(e) && _m(e) == Dm;
}
var Tm = Om, Ei = Tm, Mm = nt, hs = Object.prototype, Cm = hs.hasOwnProperty, Am = hs.propertyIsEnumerable, xm = Ei(function() {
  return arguments;
}()) ? Ei : function(e) {
  return Mm(e) && Cm.call(e, "callee") && !Am.call(e, "callee");
}, ba = xm, Lr = { exports: {} };
function Pm() {
  return !1;
}
var Rm = Pm;
Lr.exports;
(function(e, r) {
  var t = Ve, n = Rm, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? t.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || n;
  e.exports = u;
})(Lr, Lr.exports);
var rn = Lr.exports, Im = At, km = la, Nm = nt, Lm = "[object Arguments]", Fm = "[object Array]", zm = "[object Boolean]", Wm = "[object Date]", jm = "[object Error]", Um = "[object Function]", Bm = "[object Map]", Hm = "[object Number]", Vm = "[object Object]", Ym = "[object RegExp]", Gm = "[object Set]", Km = "[object String]", qm = "[object WeakMap]", Xm = "[object ArrayBuffer]", Zm = "[object DataView]", Jm = "[object Float32Array]", Qm = "[object Float64Array]", eg = "[object Int8Array]", tg = "[object Int16Array]", rg = "[object Int32Array]", ng = "[object Uint8Array]", ag = "[object Uint8ClampedArray]", ig = "[object Uint16Array]", og = "[object Uint32Array]", ue = {};
ue[Jm] = ue[Qm] = ue[eg] = ue[tg] = ue[rg] = ue[ng] = ue[ag] = ue[ig] = ue[og] = !0;
ue[Lm] = ue[Fm] = ue[Xm] = ue[zm] = ue[Zm] = ue[Wm] = ue[jm] = ue[Um] = ue[Bm] = ue[Hm] = ue[Vm] = ue[Ym] = ue[Gm] = ue[Km] = ue[qm] = !1;
function sg(e) {
  return Nm(e) && km(e.length) && !!ue[Im(e)];
}
var lg = sg;
function cg(e) {
  return function(r) {
    return e(r);
  };
}
var nn = cg, Fr = { exports: {} };
Fr.exports;
(function(e, r) {
  var t = Qo, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && t.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Fr, Fr.exports);
var ya = Fr.exports, ug = lg, fg = nn, _i = ya, $i = _i && _i.isTypedArray, dg = $i ? fg($i) : ug, wa = dg, vg = Em, hg = ba, pg = ke, mg = rn, gg = ca, bg = wa, yg = Object.prototype, wg = yg.hasOwnProperty;
function Sg(e, r) {
  var t = pg(e), n = !t && hg(e), a = !t && !n && mg(e), i = !t && !n && !a && bg(e), o = t || n || a || i, s = o ? vg(e.length, String) : [], l = s.length;
  for (var u in e)
    (r || wg.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    gg(u, l))) && s.push(u);
  return s;
}
var ps = Sg, Eg = Object.prototype;
function _g(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Eg;
  return e === t;
}
var Sa = _g;
function $g(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var ms = $g, Dg = ms, Og = Dg(Object.keys, Object), Tg = Og, Mg = Sa, Cg = Tg, Ag = Object.prototype, xg = Ag.hasOwnProperty;
function Pg(e) {
  if (!Mg(e))
    return Cg(e);
  var r = [];
  for (var t in Object(e))
    xg.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var Rg = Pg, Ig = ps, kg = Rg, Ng = ir;
function Lg(e) {
  return Ng(e) ? Ig(e) : kg(e);
}
var lr = Lg, Fg = ds, zg = ga, Wg = lr;
function jg(e) {
  return Fg(e, Wg, zg);
}
var gs = jg, Di = gs, Ug = 1, Bg = Object.prototype, Hg = Bg.hasOwnProperty;
function Vg(e, r, t, n, a, i) {
  var o = t & Ug, s = Di(e), l = s.length, u = Di(r), v = u.length;
  if (l != v && !o)
    return !1;
  for (var h = l; h--; ) {
    var c = s[h];
    if (!(o ? c in r : Hg.call(r, c)))
      return !1;
  }
  var p = i.get(e), d = i.get(r);
  if (p && d)
    return p == r && d == e;
  var f = !0;
  i.set(e, r), i.set(r, e);
  for (var m = o; ++h < l; ) {
    c = s[h];
    var g = e[c], S = r[c];
    if (n)
      var y = o ? n(S, g, c, r, e, i) : n(g, S, c, e, r, i);
    if (!(y === void 0 ? g === S || a(g, S, t, n, i) : y)) {
      f = !1;
      break;
    }
    m || (m = c == "constructor");
  }
  if (f && !m) {
    var w = e.constructor, _ = r.constructor;
    w != _ && "constructor" in e && "constructor" in r && !(typeof w == "function" && w instanceof w && typeof _ == "function" && _ instanceof _) && (f = !1);
  }
  return i.delete(e), i.delete(r), f;
}
var Yg = Vg, Gg = gt, Kg = Ve, qg = Gg(Kg, "DataView"), Xg = qg, Zg = gt, Jg = Ve, Qg = Zg(Jg, "Promise"), eb = Qg, tb = gt, rb = Ve, nb = tb(rb, "Set"), ab = nb, ib = gt, ob = Ve, sb = ib(ob, "WeakMap"), lb = sb, Vn = Xg, Yn = va, Gn = eb, Kn = ab, qn = lb, bs = At, kt = cs, Oi = "[object Map]", cb = "[object Object]", Ti = "[object Promise]", Mi = "[object Set]", Ci = "[object WeakMap]", Ai = "[object DataView]", ub = kt(Vn), fb = kt(Yn), db = kt(Gn), vb = kt(Kn), hb = kt(qn), st = bs;
(Vn && st(new Vn(new ArrayBuffer(1))) != Ai || Yn && st(new Yn()) != Oi || Gn && st(Gn.resolve()) != Ti || Kn && st(new Kn()) != Mi || qn && st(new qn()) != Ci) && (st = function(e) {
  var r = bs(e), t = r == cb ? e.constructor : void 0, n = t ? kt(t) : "";
  if (n)
    switch (n) {
      case ub:
        return Ai;
      case fb:
        return Oi;
      case db:
        return Ti;
      case vb:
        return Mi;
      case hb:
        return Ci;
    }
  return r;
});
var an = st, Dn = pa, pb = us, mb = sm, gb = Yg, xi = an, Pi = ke, Ri = rn, bb = wa, yb = 1, Ii = "[object Arguments]", ki = "[object Array]", wr = "[object Object]", wb = Object.prototype, Ni = wb.hasOwnProperty;
function Sb(e, r, t, n, a, i) {
  var o = Pi(e), s = Pi(r), l = o ? ki : xi(e), u = s ? ki : xi(r);
  l = l == Ii ? wr : l, u = u == Ii ? wr : u;
  var v = l == wr, h = u == wr, c = l == u;
  if (c && Ri(e)) {
    if (!Ri(r))
      return !1;
    o = !0, v = !1;
  }
  if (c && !v)
    return i || (i = new Dn()), o || bb(e) ? pb(e, r, t, n, a, i) : mb(e, r, l, t, n, a, i);
  if (!(t & yb)) {
    var p = v && Ni.call(e, "__wrapped__"), d = h && Ni.call(r, "__wrapped__");
    if (p || d) {
      var f = p ? e.value() : e, m = d ? r.value() : r;
      return i || (i = new Dn()), a(f, m, t, n, i);
    }
  }
  return c ? (i || (i = new Dn()), gb(e, r, t, n, a, i)) : !1;
}
var Eb = Sb, _b = Eb, Li = nt;
function ys(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !Li(e) && !Li(r) ? e !== e && r !== r : _b(e, r, t, n, ys, a);
}
var Ea = ys, $b = Ea;
function Db(e, r) {
  return $b(e, r);
}
var Ob = Db;
const Tb = /* @__PURE__ */ he(Ob);
function On(e, r) {
  var t = ua(e);
  return t ? t.innerHeight : r ? e.clientHeight : ut(e).height;
}
function ws(e, r, t) {
  e.closest && !t && e.closest(r);
  var n = e;
  do {
    if (Ad(n, r))
      return n;
    n = n.parentElement;
  } while (n && n !== t && n.nodeType === document.ELEMENT_NODE);
  return null;
}
function Mb(e, r, t, n) {
  for (var a = e.length, i = t + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (r(e[i], i, e))
      return i;
  return -1;
}
var Cb = Mb, Ab = pa, xb = Ea, Pb = 1, Rb = 2;
function Ib(e, r, t, n) {
  var a = t.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var s = t[a];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    s = t[a];
    var l = s[0], u = e[l], v = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var h = new Ab();
      if (n)
        var c = n(u, v, l, e, r, h);
      if (!(c === void 0 ? xb(v, u, Pb | Rb, n, h) : c))
        return !1;
    }
  }
  return !0;
}
var kb = Ib, Nb = Xe;
function Lb(e) {
  return e === e && !Nb(e);
}
var Ss = Lb, Fb = Ss, zb = lr;
function Wb(e) {
  for (var r = zb(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, Fb(a)];
  }
  return r;
}
var jb = Wb;
function Ub(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var Es = Ub, Bb = kb, Hb = jb, Vb = Es;
function Yb(e) {
  var r = Hb(e);
  return r.length == 1 && r[0][2] ? Vb(r[0][0], r[0][1]) : function(t) {
    return t === e || Bb(t, e, r);
  };
}
var Gb = Yb, Kb = ke, qb = or, Xb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zb = /^\w*$/;
function Jb(e, r) {
  if (Kb(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || qb(e) ? !0 : Zb.test(e) || !Xb.test(e) || r != null && e in Object(r);
}
var _a = Jb, _s = ha, Qb = "Expected a function";
function $a(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Qb);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return t.cache = i.set(a, o) || i, o;
  };
  return t.cache = new ($a.Cache || _s)(), t;
}
$a.Cache = _s;
var ey = $a, ty = ey, ry = 500;
function ny(e) {
  var r = ty(e, function(n) {
    return t.size === ry && t.clear(), n;
  }), t = r.cache;
  return r;
}
var ay = ny, iy = ay, oy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sy = /\\(\\)?/g, ly = iy(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(oy, function(t, n, a, i) {
    r.push(a ? i.replace(sy, "$1") : n || t);
  }), r;
}), cy = ly;
function uy(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var Da = uy, Fi = Ct, fy = Da, dy = ke, vy = or, hy = 1 / 0, zi = Fi ? Fi.prototype : void 0, Wi = zi ? zi.toString : void 0;
function $s(e) {
  if (typeof e == "string")
    return e;
  if (dy(e))
    return fy(e, $s) + "";
  if (vy(e))
    return Wi ? Wi.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -hy ? "-0" : r;
}
var py = $s, my = py;
function gy(e) {
  return e == null ? "" : my(e);
}
var by = gy, yy = ke, wy = _a, Sy = cy, Ey = by;
function _y(e, r) {
  return yy(e) ? e : wy(e, r) ? [e] : Sy(Ey(e));
}
var on = _y, $y = or, Dy = 1 / 0;
function Oy(e) {
  if (typeof e == "string" || $y(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Dy ? "-0" : r;
}
var cr = Oy, Ty = on, My = cr;
function Cy(e, r) {
  r = Ty(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[My(r[t++])];
  return t && t == n ? e : void 0;
}
var sn = Cy, Ay = sn;
function xy(e, r, t) {
  var n = e == null ? void 0 : Ay(e, r);
  return n === void 0 ? t : n;
}
var Py = xy;
function Ry(e, r) {
  return e != null && r in Object(e);
}
var Iy = Ry, ky = on, Ny = ba, Ly = ke, Fy = ca, zy = la, Wy = cr;
function jy(e, r, t) {
  r = ky(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var o = Wy(r[n]);
    if (!(i = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && zy(a) && Fy(o, a) && (Ly(e) || Ny(e)));
}
var Uy = jy, By = Iy, Hy = Uy;
function Vy(e, r) {
  return e != null && Hy(e, r, By);
}
var Yy = Vy, Gy = Ea, Ky = Py, qy = Yy, Xy = _a, Zy = Ss, Jy = Es, Qy = cr, ew = 1, tw = 2;
function rw(e, r) {
  return Xy(e) && Zy(r) ? Jy(Qy(e), r) : function(t) {
    var n = Ky(t, e);
    return n === void 0 && n === r ? qy(t, e) : Gy(r, n, ew | tw);
  };
}
var nw = rw;
function aw(e) {
  return e;
}
var ln = aw;
function iw(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var ow = iw, sw = sn;
function lw(e) {
  return function(r) {
    return sw(r, e);
  };
}
var cw = lw, uw = ow, fw = cw, dw = _a, vw = cr;
function hw(e) {
  return dw(e) ? uw(vw(e)) : fw(e);
}
var pw = hw, mw = Gb, gw = nw, bw = ln, yw = ke, ww = pw;
function Sw(e) {
  return typeof e == "function" ? e : e == null ? bw : typeof e == "object" ? yw(e) ? gw(e[0], e[1]) : mw(e) : ww(e);
}
var cn = Sw, Ew = Cb, _w = cn, $w = rs, Dw = Math.max;
function Ow(e, r, t) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = t == null ? 0 : $w(t);
  return a < 0 && (a = Dw(n + a, 0)), Ew(e, _w(r), a);
}
var Tw = Ow;
const Mw = /* @__PURE__ */ he(Tw);
var Cw = Math.ceil, Aw = Math.max;
function xw(e, r, t, n) {
  for (var a = -1, i = Aw(Cw((r - e) / (t || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += t;
  return o;
}
var Pw = xw, Rw = Pw, Iw = Zr, Tn = ts;
function kw(e) {
  return function(r, t, n) {
    return n && typeof n != "number" && Iw(r, t, n) && (t = n = void 0), r = Tn(r), t === void 0 ? (t = r, r = 0) : t = Tn(t), n = n === void 0 ? r < t ? 1 : -1 : Tn(n), Rw(r, t, n, e);
  };
}
var Nw = kw, Lw = Nw, Fw = Lw(), zw = Fw;
const Ww = /* @__PURE__ */ he(zw);
var ji = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function jw(e, r) {
  return !!(e === r || ji(e) && ji(r));
}
function Uw(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (!jw(e[t], r[t]))
      return !1;
  return !0;
}
function Ds(e, r) {
  r === void 0 && (r = Uw);
  var t = null;
  function n() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    if (t && t.lastThis === this && r(a, t.lastArgs))
      return t.lastResult;
    var o = e.apply(this, a);
    return t = {
      lastResult: o,
      lastArgs: a,
      lastThis: this
    }, o;
  }
  return n.clear = function() {
    t = null;
  }, n;
}
var Ui = Ct, Bw = ba, Hw = ke, Bi = Ui ? Ui.isConcatSpreadable : void 0;
function Vw(e) {
  return Hw(e) || Bw(e) || !!(Bi && e && e[Bi]);
}
var Yw = Vw, Gw = ma, Kw = Yw;
function Os(e, r, t, n, a) {
  var i = -1, o = e.length;
  for (t || (t = Kw), a || (a = []); ++i < o; ) {
    var s = e[i];
    r > 0 && t(s) ? r > 1 ? Os(s, r - 1, t, n, a) : Gw(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var Ts = Os;
function qw(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), o = n(r), s = o.length; s--; ) {
      var l = o[e ? s : ++a];
      if (t(i[l], l, i) === !1)
        break;
    }
    return r;
  };
}
var Xw = qw, Zw = Xw, Jw = Zw(), Qw = Jw, eS = Qw, tS = lr;
function rS(e, r) {
  return e && eS(e, r, tS);
}
var Oa = rS, nS = ir;
function aS(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!nS(t))
      return e(t, n);
    for (var a = t.length, i = r ? a : -1, o = Object(t); (r ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return t;
  };
}
var iS = aS, oS = Oa, sS = iS, lS = sS(oS), cS = lS, uS = cS, fS = ir;
function dS(e, r) {
  var t = -1, n = fS(e) ? Array(e.length) : [];
  return uS(e, function(a, i, o) {
    n[++t] = r(a, i, o);
  }), n;
}
var vS = dS;
function hS(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
var pS = hS, Hi = or;
function mS(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = Hi(e), o = r !== void 0, s = r === null, l = r === r, u = Hi(r);
    if (!s && !u && !i && e > r || i && o && l && !s && !u || n && o && l || !t && l || !a)
      return 1;
    if (!n && !i && !u && e < r || u && t && a && !n && !i || s && t && a || !o && a || !l)
      return -1;
  }
  return 0;
}
var gS = mS, bS = gS;
function yS(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, o = a.length, s = t.length; ++n < o; ) {
    var l = bS(a[n], i[n]);
    if (l) {
      if (n >= s)
        return l;
      var u = t[n];
      return l * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var wS = yS, Mn = Da, SS = sn, ES = cn, _S = vS, $S = pS, DS = nn, OS = wS, TS = ln, MS = ke;
function CS(e, r, t) {
  r.length ? r = Mn(r, function(i) {
    return MS(i) ? function(o) {
      return SS(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [TS];
  var n = -1;
  r = Mn(r, DS(ES));
  var a = _S(e, function(i, o, s) {
    var l = Mn(r, function(u) {
      return u(i);
    });
    return { criteria: l, index: ++n, value: i };
  });
  return $S(a, function(i, o) {
    return OS(i, o, t);
  });
}
var AS = CS;
function xS(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var PS = xS, RS = PS, Vi = Math.max;
function IS(e, r, t) {
  return r = Vi(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = Vi(n.length - r, 0), o = Array(i); ++a < i; )
      o[a] = n[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = n[a];
    return s[r] = t(o), RS(e, this, s);
  };
}
var Ms = IS;
function kS(e) {
  return function() {
    return e;
  };
}
var NS = kS, LS = gt, FS = function() {
  try {
    var e = LS(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Cs = FS, zS = NS, Yi = Cs, WS = ln, jS = Yi ? function(e, r) {
  return Yi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zS(r),
    writable: !0
  });
} : WS, US = jS, BS = 800, HS = 16, VS = Date.now;
function YS(e) {
  var r = 0, t = 0;
  return function() {
    var n = VS(), a = HS - (n - t);
    if (t = n, a > 0) {
      if (++r >= BS)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var GS = YS, KS = US, qS = GS, XS = qS(KS), As = XS, ZS = ln, JS = Ms, QS = As;
function e1(e, r) {
  return QS(JS(e, r, ZS), e + "");
}
var xs = e1, t1 = Ts, r1 = AS, n1 = xs, Gi = Zr, a1 = n1(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Gi(e, r[0], r[1]) ? r = [] : t > 2 && Gi(r[0], r[1], r[2]) && (r = [r[0]]), r1(e, t1(r, 1), []);
}), i1 = a1;
const o1 = /* @__PURE__ */ he(i1);
function Xn(e, r) {
  var t = ua(e);
  return t ? t.innerWidth : r ? e.clientWidth : ut(e).width;
}
function Ps(e) {
  return Lo(e) || Zo(e) || aa(e) || Fo();
}
function s1(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Rs = s1, Ki = Cs;
function l1(e, r, t) {
  r == "__proto__" && Ki ? Ki(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var Ta = l1, c1 = Ta, u1 = ar, f1 = Object.prototype, d1 = f1.hasOwnProperty;
function v1(e, r, t) {
  var n = e[r];
  (!(d1.call(e, r) && u1(n, t)) || t === void 0 && !(r in e)) && c1(e, r, t);
}
var Is = v1, h1 = Is, p1 = Ta;
function m1(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, o = r.length; ++i < o; ) {
    var s = r[i], l = n ? n(t[s], e[s], s, t, e) : void 0;
    l === void 0 && (l = e[s]), a ? p1(t, s, l) : h1(t, s, l);
  }
  return t;
}
var ur = m1, g1 = ur, b1 = lr;
function y1(e, r) {
  return e && g1(r, b1(r), e);
}
var w1 = y1;
function S1(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var E1 = S1, _1 = Xe, $1 = Sa, D1 = E1, O1 = Object.prototype, T1 = O1.hasOwnProperty;
function M1(e) {
  if (!_1(e))
    return D1(e);
  var r = $1(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !T1.call(e, n)) || t.push(n);
  return t;
}
var C1 = M1, A1 = ps, x1 = C1, P1 = ir;
function R1(e) {
  return P1(e) ? A1(e, !0) : x1(e);
}
var un = R1, I1 = ur, k1 = un;
function N1(e, r) {
  return e && I1(r, k1(r), e);
}
var L1 = N1, zr = { exports: {} };
zr.exports;
(function(e, r) {
  var t = Ve, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? t.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
  function l(u, v) {
    if (v)
      return u.slice();
    var h = u.length, c = s ? s(h) : new u.constructor(h);
    return u.copy(c), c;
  }
  e.exports = l;
})(zr, zr.exports);
var F1 = zr.exports;
function z1(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var W1 = z1, j1 = ur, U1 = ga;
function B1(e, r) {
  return j1(e, U1(e), r);
}
var H1 = B1, V1 = ms, Y1 = V1(Object.getPrototypeOf, Object), fn = Y1, G1 = ma, K1 = fn, q1 = ga, X1 = vs, Z1 = Object.getOwnPropertySymbols, J1 = Z1 ? function(e) {
  for (var r = []; e; )
    G1(r, q1(e)), e = K1(e);
  return r;
} : X1, ks = J1, Q1 = ur, e0 = ks;
function t0(e, r) {
  return Q1(e, e0(e), r);
}
var r0 = t0, n0 = ds, a0 = ks, i0 = un;
function o0(e) {
  return n0(e, i0, a0);
}
var Ns = o0, s0 = Object.prototype, l0 = s0.hasOwnProperty;
function c0(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && l0.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var u0 = c0, qi = fs;
function f0(e) {
  var r = new e.constructor(e.byteLength);
  return new qi(r).set(new qi(e)), r;
}
var Ma = f0, d0 = Ma;
function v0(e, r) {
  var t = r ? d0(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var h0 = v0, p0 = /\w*$/;
function m0(e) {
  var r = new e.constructor(e.source, p0.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var g0 = m0, Xi = Ct, Zi = Xi ? Xi.prototype : void 0, Ji = Zi ? Zi.valueOf : void 0;
function b0(e) {
  return Ji ? Object(Ji.call(e)) : {};
}
var y0 = b0, w0 = Ma;
function S0(e, r) {
  var t = r ? w0(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var E0 = S0, _0 = Ma, $0 = h0, D0 = g0, O0 = y0, T0 = E0, M0 = "[object Boolean]", C0 = "[object Date]", A0 = "[object Map]", x0 = "[object Number]", P0 = "[object RegExp]", R0 = "[object Set]", I0 = "[object String]", k0 = "[object Symbol]", N0 = "[object ArrayBuffer]", L0 = "[object DataView]", F0 = "[object Float32Array]", z0 = "[object Float64Array]", W0 = "[object Int8Array]", j0 = "[object Int16Array]", U0 = "[object Int32Array]", B0 = "[object Uint8Array]", H0 = "[object Uint8ClampedArray]", V0 = "[object Uint16Array]", Y0 = "[object Uint32Array]";
function G0(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case N0:
      return _0(e);
    case M0:
    case C0:
      return new n(+e);
    case L0:
      return $0(e, t);
    case F0:
    case z0:
    case W0:
    case j0:
    case U0:
    case B0:
    case H0:
    case V0:
    case Y0:
      return T0(e, t);
    case A0:
      return new n();
    case x0:
    case I0:
      return new n(e);
    case P0:
      return D0(e);
    case R0:
      return new n();
    case k0:
      return O0(e);
  }
}
var K0 = G0, q0 = Xe, Qi = Object.create, X0 = function() {
  function e() {
  }
  return function(r) {
    if (!q0(r))
      return {};
    if (Qi)
      return Qi(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), Ls = X0, Z0 = Ls, J0 = fn, Q0 = Sa;
function eE(e) {
  return typeof e.constructor == "function" && !Q0(e) ? Z0(J0(e)) : {};
}
var tE = eE, rE = an, nE = nt, aE = "[object Map]";
function iE(e) {
  return nE(e) && rE(e) == aE;
}
var oE = iE, sE = oE, lE = nn, eo = ya, to = eo && eo.isMap, cE = to ? lE(to) : sE, uE = cE, fE = an, dE = nt, vE = "[object Set]";
function hE(e) {
  return dE(e) && fE(e) == vE;
}
var pE = hE, mE = pE, gE = nn, ro = ya, no = ro && ro.isSet, bE = no ? gE(no) : mE, yE = bE, wE = pa, SE = Rs, EE = Is, _E = w1, $E = L1, DE = F1, OE = W1, TE = H1, ME = r0, CE = gs, AE = Ns, xE = an, PE = u0, RE = K0, IE = tE, kE = ke, NE = rn, LE = uE, FE = Xe, zE = yE, WE = lr, jE = un, UE = 1, BE = 2, HE = 4, Fs = "[object Arguments]", VE = "[object Array]", YE = "[object Boolean]", GE = "[object Date]", KE = "[object Error]", zs = "[object Function]", qE = "[object GeneratorFunction]", XE = "[object Map]", ZE = "[object Number]", Ws = "[object Object]", JE = "[object RegExp]", QE = "[object Set]", e_ = "[object String]", t_ = "[object Symbol]", r_ = "[object WeakMap]", n_ = "[object ArrayBuffer]", a_ = "[object DataView]", i_ = "[object Float32Array]", o_ = "[object Float64Array]", s_ = "[object Int8Array]", l_ = "[object Int16Array]", c_ = "[object Int32Array]", u_ = "[object Uint8Array]", f_ = "[object Uint8ClampedArray]", d_ = "[object Uint16Array]", v_ = "[object Uint32Array]", le = {};
le[Fs] = le[VE] = le[n_] = le[a_] = le[YE] = le[GE] = le[i_] = le[o_] = le[s_] = le[l_] = le[c_] = le[XE] = le[ZE] = le[Ws] = le[JE] = le[QE] = le[e_] = le[t_] = le[u_] = le[f_] = le[d_] = le[v_] = !0;
le[KE] = le[zs] = le[r_] = !1;
function Mr(e, r, t, n, a, i) {
  var o, s = r & UE, l = r & BE, u = r & HE;
  if (t && (o = a ? t(e, n, a, i) : t(e)), o !== void 0)
    return o;
  if (!FE(e))
    return e;
  var v = kE(e);
  if (v) {
    if (o = PE(e), !s)
      return OE(e, o);
  } else {
    var h = xE(e), c = h == zs || h == qE;
    if (NE(e))
      return DE(e, s);
    if (h == Ws || h == Fs || c && !a) {
      if (o = l || c ? {} : IE(e), !s)
        return l ? ME(e, $E(o, e)) : TE(e, _E(o, e));
    } else {
      if (!le[h])
        return a ? e : {};
      o = RE(e, h, s);
    }
  }
  i || (i = new wE());
  var p = i.get(e);
  if (p)
    return p;
  i.set(e, o), zE(e) ? e.forEach(function(m) {
    o.add(Mr(m, r, t, m, e, i));
  }) : LE(e) && e.forEach(function(m, g) {
    o.set(g, Mr(m, r, t, g, e, i));
  });
  var d = u ? l ? AE : CE : l ? jE : WE, f = v ? void 0 : d(e);
  return SE(f || e, function(m, g) {
    f && (g = m, m = e[g]), EE(o, g, Mr(m, r, t, g, e, i));
  }), o;
}
var h_ = Mr;
function p_(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var m_ = p_, g_ = sn, b_ = Jo;
function y_(e, r) {
  return r.length < 2 ? e : g_(e, b_(r, 0, -1));
}
var w_ = y_, S_ = on, E_ = m_, __ = w_, $_ = cr;
function D_(e, r) {
  return r = S_(r, e), e = __(e, r), e == null || delete e[$_(E_(r))];
}
var O_ = D_, T_ = At, M_ = fn, C_ = nt, A_ = "[object Object]", x_ = Function.prototype, P_ = Object.prototype, js = x_.toString, R_ = P_.hasOwnProperty, I_ = js.call(Object);
function k_(e) {
  if (!C_(e) || T_(e) != A_)
    return !1;
  var r = M_(e);
  if (r === null)
    return !0;
  var t = R_.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && js.call(t) == I_;
}
var N_ = k_, L_ = N_;
function F_(e) {
  return L_(e) ? void 0 : e;
}
var z_ = F_, W_ = Ts;
function j_(e) {
  var r = e == null ? 0 : e.length;
  return r ? W_(e, 1) : [];
}
var U_ = j_, B_ = U_, H_ = Ms, V_ = As;
function Y_(e) {
  return V_(H_(e, void 0, B_), e + "");
}
var G_ = Y_, K_ = Da, q_ = h_, X_ = O_, Z_ = on, J_ = ur, Q_ = z_, e$ = G_, t$ = Ns, r$ = 1, n$ = 2, a$ = 4, i$ = e$(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = K_(r, function(i) {
    return i = Z_(i, e), n || (n = i.length > 1), i;
  }), J_(e, t$(e), t), n && (t = q_(t, r$ | n$ | a$, Q_));
  for (var a = r.length; a--; )
    X_(t, r[a]);
  return t;
}), o$ = i$;
const s$ = /* @__PURE__ */ he(o$);
var l$ = xs, c$ = ar, u$ = Zr, f$ = un, Us = Object.prototype, d$ = Us.hasOwnProperty, v$ = l$(function(e, r) {
  e = Object(e);
  var t = -1, n = r.length, a = n > 2 ? r[2] : void 0;
  for (a && u$(r[0], r[1], a) && (n = 1); ++t < n; )
    for (var i = r[t], o = f$(i), s = -1, l = o.length; ++s < l; ) {
      var u = o[s], v = e[u];
      (v === void 0 || c$(v, Us[u]) && !d$.call(e, u)) && (e[u] = i[u]);
    }
  return e;
}), h$ = v$;
const p$ = /* @__PURE__ */ he(h$);
var m$ = Rs, g$ = Ls, b$ = Oa, y$ = cn, w$ = fn, S$ = ke, E$ = rn, _$ = sa, $$ = Xe, D$ = wa;
function O$(e, r, t) {
  var n = S$(e), a = n || E$(e) || D$(e);
  if (r = y$(r), t == null) {
    var i = e && e.constructor;
    a ? t = n ? new i() : [] : $$(e) ? t = _$(i) ? g$(w$(e)) : {} : t = {};
  }
  return (a ? m$ : b$)(e, function(o, s, l) {
    return r(t, o, s, l);
  }), t;
}
var T$ = O$;
const M$ = /* @__PURE__ */ he(T$);
var C$ = Ta, A$ = Oa, x$ = cn;
function P$(e, r) {
  var t = {};
  return r = x$(r), A$(e, function(n, a, i) {
    C$(t, a, r(n, a, i));
  }), t;
}
var R$ = P$;
const I$ = /* @__PURE__ */ he(R$);
var Bs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    return function(t, n, a) {
      n.prototype.isBetween = function(i, o, s, l) {
        var u = a(i), v = a(o), h = (l = l || "()")[0] === "(", c = l[1] === ")";
        return (h ? this.isAfter(u, s) : !this.isBefore(u, s)) && (c ? this.isBefore(v, s) : !this.isAfter(v, s)) || (h ? this.isBefore(u, s) : !this.isAfter(u, s)) && (c ? this.isAfter(v, s) : !this.isBefore(v, s));
      };
    };
  });
})(Bs);
var k$ = Bs.exports;
const N$ = /* @__PURE__ */ he(k$);
var Hs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(a, i) {
        return this.isSame(a, i) || this.isAfter(a, i);
      };
    };
  });
})(Hs);
var L$ = Hs.exports;
const F$ = /* @__PURE__ */ he(L$);
var Vs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(a, i) {
        return this.isSame(a, i) || this.isBefore(a, i);
      };
    };
  });
})(Vs);
var z$ = Vs.exports;
const W$ = /* @__PURE__ */ he(z$);
var Ys = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    return function(t, n, a) {
      var i = n.prototype, o = function(h) {
        return h && (h.indexOf ? h : h.s);
      }, s = function(h, c, p, d, f) {
        var m = h.name ? h : h.$locale(), g = o(m[c]), S = o(m[p]), y = g || S.map(function(_) {
          return _.slice(0, d);
        });
        if (!f)
          return y;
        var w = m.weekStart;
        return y.map(function(_, $) {
          return y[($ + (w || 0)) % 7];
        });
      }, l = function() {
        return a.Ls[a.locale()];
      }, u = function(h, c) {
        return h.formats[c] || function(p) {
          return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(d, f, m) {
            return f || m.slice(1);
          });
        }(h.formats[c.toUpperCase()]);
      }, v = function() {
        var h = this;
        return { months: function(c) {
          return c ? c.format("MMMM") : s(h, "months");
        }, monthsShort: function(c) {
          return c ? c.format("MMM") : s(h, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return h.$locale().weekStart || 0;
        }, weekdays: function(c) {
          return c ? c.format("dddd") : s(h, "weekdays");
        }, weekdaysMin: function(c) {
          return c ? c.format("dd") : s(h, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(c) {
          return c ? c.format("ddd") : s(h, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(c) {
          return u(h.$locale(), c);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      i.localeData = function() {
        return v.bind(this)();
      }, a.localeData = function() {
        var h = l();
        return { firstDayOfWeek: function() {
          return h.weekStart || 0;
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
        }, longDateFormat: function(c) {
          return u(h, c);
        }, meridiem: h.meridiem, ordinal: h.ordinal };
      }, a.months = function() {
        return s(l(), "months");
      }, a.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, a.weekdays = function(h) {
        return s(l(), "weekdays", null, null, h);
      }, a.weekdaysShort = function(h) {
        return s(l(), "weekdaysShort", "weekdays", 3, h);
      }, a.weekdaysMin = function(h) {
        return s(l(), "weekdaysMin", "weekdays", 2, h);
      };
    };
  });
})(Ys);
var j$ = Ys.exports;
const U$ = /* @__PURE__ */ he(j$);
var Gs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, i) {
      var o = a.prototype, s = o.format;
      i.en.formats = t, o.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var u = this.$locale().formats, v = function(h, c) {
          return h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(p, d, f) {
            var m = f && f.toUpperCase();
            return d || c[f] || t[f] || c[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, S, y) {
              return S || y.slice(1);
            });
          });
        }(l, u === void 0 ? {} : u);
        return s.call(this, v);
      };
    };
  });
})(Gs);
var B$ = Gs.exports;
const H$ = /* @__PURE__ */ he(B$);
var Ks = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    return function(t, n, a) {
      var i = function(o, s) {
        if (!s || !s.length || s.length === 1 && !s[0] || s.length === 1 && Array.isArray(s[0]) && !s[0].length)
          return null;
        var l;
        s.length === 1 && s[0].length > 0 && (s = s[0]), l = (s = s.filter(function(v) {
          return v;
        }))[0];
        for (var u = 1; u < s.length; u += 1)
          s[u].isValid() && !s[u][o](l) || (l = s[u]);
        return l;
      };
      a.max = function() {
        var o = [].slice.call(arguments, 0);
        return i("isAfter", o);
      }, a.min = function() {
        var o = [].slice.call(arguments, 0);
        return i("isBefore", o);
      };
    };
  });
})(Ks);
var V$ = Ks.exports;
const Y$ = /* @__PURE__ */ he(V$);
var qs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    var t = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(i, o, s) {
      var l = o.prototype;
      s.utc = function(f) {
        var m = { date: f, utc: !0, args: arguments };
        return new o(m);
      }, l.utc = function(f) {
        var m = s(this.toDate(), { locale: this.$L, utc: !0 });
        return f ? m.add(this.utcOffset(), t) : m;
      }, l.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var u = l.parse;
      l.parse = function(f) {
        f.utc && (this.$u = !0), this.$utils().u(f.$offset) || (this.$offset = f.$offset), u.call(this, f);
      };
      var v = l.init;
      l.init = function() {
        if (this.$u) {
          var f = this.$d;
          this.$y = f.getUTCFullYear(), this.$M = f.getUTCMonth(), this.$D = f.getUTCDate(), this.$W = f.getUTCDay(), this.$H = f.getUTCHours(), this.$m = f.getUTCMinutes(), this.$s = f.getUTCSeconds(), this.$ms = f.getUTCMilliseconds();
        } else
          v.call(this);
      };
      var h = l.utcOffset;
      l.utcOffset = function(f, m) {
        var g = this.$utils().u;
        if (g(f))
          return this.$u ? 0 : g(this.$offset) ? h.call(this) : this.$offset;
        if (typeof f == "string" && (f = function(_) {
          _ === void 0 && (_ = "");
          var $ = _.match(n);
          if (!$)
            return null;
          var M = ("" + $[0]).match(a) || ["-", 0, 0], F = M[0], z = 60 * +M[1] + +M[2];
          return z === 0 ? 0 : F === "+" ? z : -z;
        }(f), f === null))
          return this;
        var S = Math.abs(f) <= 16 ? 60 * f : f, y = this;
        if (m)
          return y.$offset = S, y.$u = f === 0, y;
        if (f !== 0) {
          var w = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (y = this.local().add(S + w, t)).$offset = S, y.$x.$localOffset = w;
        } else
          y = this.utc();
        return y;
      };
      var c = l.format;
      l.format = function(f) {
        var m = f || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return c.call(this, m);
      }, l.valueOf = function() {
        var f = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * f;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var p = l.toDate;
      l.toDate = function(f) {
        return f === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : p.call(this);
      };
      var d = l.diff;
      l.diff = function(f, m, g) {
        if (f && this.$u === f.$u)
          return d.call(this, f, m, g);
        var S = this.local(), y = s(f).local();
        return d.call(S, y, m, g);
      };
    };
  });
})(qs);
var G$ = qs.exports;
const K$ = /* @__PURE__ */ he(G$);
function Ye(e) {
  return e.children;
}
var Pe = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
}, be = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
}, ao = Object.keys(be).map(function(e) {
  return be[e];
});
R.oneOfType([R.string, R.func]);
R.any;
R.func;
R.oneOfType([R.arrayOf(R.oneOf(ao)), R.objectOf(function(e, r) {
  var t = ao.indexOf(r) !== -1 && typeof e[r] == "boolean";
  if (t)
    return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  return R.elementType.apply(R, [e, r].concat(a));
})]);
R.oneOfType([R.oneOf(["overlap", "no-overlap"]), R.func]);
function fe(e, r) {
  e && e.apply(null, [].concat(r));
}
var io = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function Xs(e, r) {
  var t = ye(e, "month");
  return ye(t, "week", r.startOfWeek());
}
function Zs(e, r) {
  var t = Ir(e, "month");
  return Ir(t, "week", r.startOfWeek());
}
function q$(e, r) {
  for (var t = Xs(e, r), n = Zs(e, r), a = []; Tt(t, n, "day"); )
    a.push(t), t = ze(t, 1, "day");
  return a;
}
function X$(e, r) {
  var t = ye(e, r);
  return rr(t, e) ? t : ze(t, 1, r);
}
function Z$(e, r) {
  for (var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", n = e, a = []; Tt(n, r, t); )
    a.push(n), n = ze(n, 1, t);
  return a;
}
function J$(e, r) {
  return r == null && e == null ? null : (r == null && (r = /* @__PURE__ */ new Date()), e == null && (e = /* @__PURE__ */ new Date()), e = ye(e, "day"), e = Qt(e, Qt(r)), e = Dt(e, Dt(r)), e = Jt(e, Jt(r)), Zt(e, Zt(r)));
}
function oo(e) {
  return Qt(e) === 0 && Dt(e) === 0 && Jt(e) === 0 && Zt(e) === 0;
}
function Q$(e, r, t, n) {
  return t === "day" && (t = "date"), Math.abs(
    // eslint-disable-next-line import/namespace
    Ja[t](e, void 0, n) - // eslint-disable-next-line import/namespace
    Ja[t](r, void 0, n)
  );
}
function Ca(e, r, t) {
  return !t || t === "milliseconds" ? Math.abs(+e - +r) : Math.round(Math.abs(+ye(e, t) / io[t] - +ye(r, t) / io[t]));
}
var eD = R.oneOfType([R.string, R.func]);
function tD(e, r, t, n, a) {
  var i = typeof n == "function" ? n(t, a, e) : r.call(e, t, n, a);
  return Vt(i == null || typeof i == "string", "`localizer format(..)` must return a string, null, or undefined"), i;
}
function rD(e, r, t) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, r + t, 0, 0);
}
function Aa(e, r) {
  return e.getTimezoneOffset() - r.getTimezoneOffset();
}
function nD(e, r) {
  return Ca(e, r, "minutes") + Aa(e, r);
}
function aD(e) {
  var r = ye(e, "day");
  return Ca(r, e, "minutes") + Aa(r, e);
}
function iD(e, r) {
  return oa(e, r, "day");
}
function oD(e, r, t) {
  var n = rr(e, r, "minutes");
  return n ? nr(r, t, "minutes") : Xr(r, t, "minutes");
}
function Zn(e, r) {
  return Q$(e, r, "day");
}
function sD(e) {
  var r = e.evtA, t = r.start, n = r.end, a = r.allDay, i = e.evtB, o = i.start, s = i.end, l = i.allDay, u = +ye(t, "day") - +ye(o, "day"), v = Zn(t, n), h = Zn(o, s);
  return u || // sort by start Day first
  h - v || // events spanning multiple days go first
  !!l - !!a || // then allDay single day events
  +t - +o || // then sort by start time
  +n - +s;
}
function lD(e) {
  var r = e.event, t = r.start, n = r.end, a = e.range, i = a.start, o = a.end, s = ye(t, "day"), l = Tt(s, o, "day"), u = ia(s, n, "minutes"), v = u ? Xr(n, i, "minutes") : nr(n, i, "minutes");
  return l && v;
}
function cD(e, r) {
  return rr(e, r, "day");
}
function uD(e, r) {
  return oo(e) && oo(r);
}
var fD = /* @__PURE__ */ ge(function e(r) {
  var t = this;
  me(this, e), Vt(typeof r.format == "function", "date localizer `format(..)` must be a function"), Vt(typeof r.firstOfWeek == "function", "date localizer `firstOfWeek(..)` must be a function"), this.propType = r.propType || eD, this.formats = r.formats, this.format = function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return tD.apply(void 0, [t, r.format].concat(a));
  }, this.startOfWeek = r.firstOfWeek, this.merge = r.merge || J$, this.inRange = r.inRange || Go, this.lt = r.lt || oa, this.lte = r.lte || Tt, this.gt = r.gt || Xr, this.gte = r.gte || nr, this.eq = r.eq || rr, this.neq = r.neq || ia, this.startOf = r.startOf || ye, this.endOf = r.endOf || Ir, this.add = r.add || ze, this.range = r.range || Z$, this.diff = r.diff || Ca, this.ceil = r.ceil || X$, this.min = r.min || Vo, this.max = r.max || Yo, this.minutes = r.minutes || Dt, this.daySpan = r.daySpan || Zn, this.firstVisibleDay = r.firstVisibleDay || Xs, this.lastVisibleDay = r.lastVisibleDay || Zs, this.visibleDays = r.visibleDays || q$, this.getSlotDate = r.getSlotDate || rD, this.getTimezoneOffset = r.getTimezoneOffset || function(n) {
    return n.getTimezoneOffset();
  }, this.getDstOffset = r.getDstOffset || Aa, this.getTotalMin = r.getTotalMin || nD, this.getMinutesFromMidnight = r.getMinutesFromMidnight || aD, this.continuesPrior = r.continuesPrior || iD, this.continuesAfter = r.continuesAfter || oD, this.sortEvents = r.sortEvents || sD, this.inEventRange = r.inEventRange || lD, this.isSameDate = r.isSameDate || cD, this.startAndEndAreDateOnly = r.startAndEndAreDateOnly || uD, this.segmentOffset = r.browserTZOffset ? r.browserTZOffset() : 0;
});
function dD(e, r, t, n) {
  var a = oe(oe({}, e.formats), t);
  return oe(oe({}, e), {}, {
    messages: n,
    startOfWeek: function() {
      return e.startOfWeek(r);
    },
    format: function(o, s) {
      return e.format(o, a[s] || s, r);
    }
  });
}
var vD = {
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
  showMore: function(r) {
    return "+".concat(r, " more");
  }
};
function hD(e) {
  return oe(oe({}, vD), e);
}
function pD(e) {
  var r = e.ref, t = e.callback;
  I.useEffect(function() {
    var n = function(i) {
      r.current && !r.current.contains(i.target) && t();
    };
    return document.addEventListener("mousedown", n), function() {
      document.removeEventListener("mousedown", n);
    };
  }, [r, t]);
}
var mD = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], Js = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.style, i = n.className, o = n.event, s = n.selected, l = n.isAllDay, u = n.onSelect, v = n.onDoubleClick, h = n.onKeyPress, c = n.localizer, p = n.continuesPrior, d = n.continuesAfter, f = n.accessors, m = n.getters, g = n.children, S = n.components, y = S.event, w = S.eventWrapper, _ = n.slotStart, $ = n.slotEnd, M = He(n, mD);
      delete M.resizable;
      var F = f.title(o), z = f.tooltip(o), C = f.end(o), A = f.start(o), U = f.allDay(o), H = l || U || c.diff(A, c.ceil(C, "day"), "day") > 1, W = m.eventProp(o, A, C, s), x = /* @__PURE__ */ b.createElement("div", {
        className: "rbc-event-content",
        title: z || void 0
      }, y ? /* @__PURE__ */ b.createElement(y, {
        event: o,
        continuesPrior: p,
        continuesAfter: d,
        title: F,
        isAllDay: U,
        localizer: c,
        slotStart: _,
        slotEnd: $
      }) : F);
      return /* @__PURE__ */ b.createElement(w, Object.assign({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ b.createElement("div", Object.assign({}, M, {
        style: oe(oe({}, W.style), a),
        className: pe("rbc-event", i, W.className, {
          "rbc-selected": s,
          "rbc-event-allday": H,
          "rbc-event-continues-prior": p,
          "rbc-event-continues-after": d
        }),
        onClick: function(N) {
          return u && u(o, N);
        },
        onDoubleClick: function(N) {
          return v && v(o, N);
        },
        onKeyDown: function(N) {
          return h && h(o, N);
        }
      }), typeof g == "function" ? g(x) : x));
    }
  }]), r;
}(b.Component);
function dn(e, r) {
  return !e || r == null ? !1 : Tb(e, r);
}
function Qs(e, r) {
  var t = e.right - e.left, n = t / r;
  return n;
}
function el(e, r, t, n) {
  var a = Qs(e, n);
  return t ? n - 1 - Math.floor((r - e.left) / a) : Math.floor((r - e.left) / a);
}
function gD(e, r) {
  var t = r.x, n = r.y;
  return n >= e.top && n <= e.bottom && t >= e.left && t <= e.right;
}
function bD(e, r, t, n, a) {
  var i = -1, o = -1, s = n - 1, l = Qs(r, n), u = el(r, t.x, a, n), v = r.top < t.y && r.bottom > t.y, h = r.top < e.y && r.bottom > e.y, c = e.y > r.bottom, p = r.top > e.y, d = t.top < r.top && t.bottom > r.bottom;
  return d && (i = 0, o = s), v && (p ? (i = 0, o = u) : c && (i = u, o = s)), h && (i = o = a ? s - Math.floor((e.x - r.left) / l) : Math.floor((e.x - r.left) / l), v ? u < i ? i = u : o = u : e.y < t.y ? o = s : i = 0), {
    startIdx: i,
    endIdx: o
  };
}
function yD(e) {
  var r = e.target, t = e.offset, n = e.container, a = e.box, i = ut(r), o = i.top, s = i.left, l = i.width, u = i.height, v = ut(n), h = v.top, c = v.left, p = v.width, d = v.height, f = ut(a), m = f.width, g = f.height, S = h + d, y = c + p, w = o + g, _ = s + m, $ = t.x, M = t.y, F = w > S ? o - g - M : o + M + u, z = _ > y ? s + $ - m + l : s + $;
  return {
    topOffset: F,
    leftOffset: z
  };
}
function wD(e) {
  var r = e.containerRef, t = e.accessors, n = e.getters, a = e.selected, i = e.components, o = e.localizer, s = e.position, l = e.show, u = e.events, v = e.slotStart, h = e.slotEnd, c = e.onSelect, p = e.onDoubleClick, d = e.onKeyPress, f = e.handleDragStart, m = e.popperRef, g = e.target, S = e.offset;
  pD({
    ref: m,
    callback: l
  }), I.useLayoutEffect(function() {
    var _ = yD({
      target: g,
      offset: S,
      container: r.current,
      box: m.current
    }), $ = _.topOffset, M = _.leftOffset;
    m.current.style.top = "".concat($, "px"), m.current.style.left = "".concat(M, "px");
  }, [S.x, S.y, g]);
  var y = s.width, w = {
    minWidth: y + y / 2
  };
  return /* @__PURE__ */ b.createElement("div", {
    style: w,
    className: "rbc-overlay",
    ref: m
  }, /* @__PURE__ */ b.createElement("div", {
    className: "rbc-overlay-header"
  }, o.format(v, "dayHeaderFormat")), u.map(function(_, $) {
    return /* @__PURE__ */ b.createElement(Js, {
      key: $,
      type: "popup",
      localizer: o,
      event: _,
      getters: n,
      onSelect: c,
      accessors: t,
      components: i,
      onDoubleClick: p,
      onKeyPress: d,
      continuesPrior: o.lt(t.end(_), v, "day"),
      continuesAfter: o.gte(t.start(_), h, "day"),
      slotStart: v,
      slotEnd: h,
      selected: dn(_, a),
      draggable: !0,
      onDragStart: function() {
        return f(_);
      },
      onDragEnd: function() {
        return l();
      }
    });
  }));
}
var tl = /* @__PURE__ */ b.forwardRef(function(e, r) {
  return /* @__PURE__ */ b.createElement(wD, Object.assign({}, e, {
    popperRef: r
  }));
});
tl.propTypes = {
  accessors: R.object.isRequired,
  getters: R.object.isRequired,
  selected: R.object,
  components: R.object.isRequired,
  localizer: R.object.isRequired,
  position: R.object.isRequired,
  show: R.func.isRequired,
  events: R.array.isRequired,
  slotStart: R.instanceOf(Date).isRequired,
  slotEnd: R.instanceOf(Date),
  onSelect: R.func,
  onDoubleClick: R.func,
  onKeyPress: R.func,
  handleDragStart: R.func,
  style: R.object,
  offset: R.shape({
    x: R.number,
    y: R.number
  })
};
function SD(e) {
  var r = e.containerRef, t = e.popupOffset, n = t === void 0 ? 5 : t, a = e.overlay, i = e.accessors, o = e.localizer, s = e.components, l = e.getters, u = e.selected, v = e.handleSelectEvent, h = e.handleDoubleClickEvent, c = e.handleKeyPressEvent, p = e.handleDragStart, d = e.onHide, f = e.overlayDisplay, m = I.useRef(null);
  if (!a.position)
    return null;
  var g = n;
  isNaN(n) || (g = {
    x: n,
    y: n
  });
  var S = a.position, y = a.events, w = a.date, _ = a.end;
  return /* @__PURE__ */ b.createElement(ev, {
    rootClose: !0,
    flip: !0,
    show: !0,
    placement: "bottom",
    onHide: d,
    target: a.target
  }, function($) {
    var M = $.props;
    return /* @__PURE__ */ b.createElement(tl, Object.assign({}, M, {
      containerRef: r,
      ref: m,
      target: a.target,
      offset: g,
      accessors: i,
      getters: l,
      selected: u,
      components: s,
      localizer: o,
      position: S,
      show: f,
      events: y,
      slotStart: w,
      slotEnd: _,
      onSelect: v,
      onDoubleClick: h,
      onKeyPress: c,
      handleDragStart: p
    }));
  });
}
var xa = /* @__PURE__ */ b.forwardRef(function(e, r) {
  return /* @__PURE__ */ b.createElement(SD, Object.assign({}, e, {
    containerRef: r
  }));
});
xa.propTypes = {
  popupOffset: R.oneOfType([R.number, R.shape({
    x: R.number,
    y: R.number
  })]),
  overlay: R.shape({
    position: R.object,
    events: R.array,
    date: R.instanceOf(Date),
    end: R.instanceOf(Date)
  }),
  accessors: R.object.isRequired,
  localizer: R.object.isRequired,
  components: R.object.isRequired,
  getters: R.object.isRequired,
  selected: R.object,
  handleSelectEvent: R.func,
  handleDoubleClickEvent: R.func,
  handleKeyPressEvent: R.func,
  handleDragStart: R.func,
  onHide: R.func,
  overlayDisplay: R.func
};
function we(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return Bt(t, e, r, {
    passive: !1
  });
}
function ED(e, r, t) {
  return !e || er(e, document.elementFromPoint(r, t));
}
function _D(e, r) {
  var t = r.clientX, n = r.clientY, a = document.elementFromPoint(t, n);
  return ws(a, ".rbc-event", e);
}
function $D(e, r) {
  var t = r.clientX, n = r.clientY, a = document.elementFromPoint(t, n);
  return ws(a, ".rbc-show-more", e);
}
function Wr(e, r) {
  return !!_D(e, r);
}
function DD(e, r) {
  return !!$D(e, r);
}
function Ut(e) {
  var r = e;
  return e.touches && e.touches.length && (r = e.touches[0]), {
    clientX: r.clientX,
    clientY: r.clientY,
    pageX: r.pageX,
    pageY: r.pageY
  };
}
var so = 5, OD = 250, rl = /* @__PURE__ */ function() {
  function e(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.global, a = n === void 0 ? !1 : n, i = t.longPressThreshold, o = i === void 0 ? 250 : i, s = t.validContainers, l = s === void 0 ? [] : s;
    me(this, e), this._initialEvent = null, this.selecting = !1, this.isDetached = !1, this.container = r, this.globalMouse = !r || a, this.longPressThreshold = o, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = we("touchmove", function() {
    }, window), this._removeKeyDownListener = we("keydown", this._keyListener), this._removeKeyUpListener = we("keyup", this._keyListener), this._removeDropFromOutsideListener = we("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = we("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return ge(e, [{
    key: "on",
    value: function(t, n) {
      var a = this._listeners[t] || (this._listeners[t] = []);
      return a.push(n), {
        remove: function() {
          var o = a.indexOf(n);
          o !== -1 && a.splice(o, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function(t) {
      for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        a[i - 1] = arguments[i];
      var o, s = this._listeners[t] || [];
      return s.forEach(function(l) {
        o === void 0 && (o = l.apply(void 0, a));
      }), o;
    }
  }, {
    key: "teardown",
    value: function() {
      this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = !1, this._lastClickData = null, this.isDetached = !0, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function(t) {
      var n = this._selectRect;
      return !n || !this.selecting ? !1 : lo(n, mt(t));
    }
  }, {
    key: "filter",
    value: function(t) {
      var n = this._selectRect;
      return !n || !this.selecting ? [] : t.filter(this.isSelected, this);
    }
    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function(t, n) {
      var a = this, i = null, o = null, s = null, l = function(c) {
        i = setTimeout(function() {
          v(), t(c);
        }, a.longPressThreshold), o = we("touchmove", function() {
          return v();
        }), s = we("touchend", function() {
          return v();
        });
      }, u = we("touchstart", l), v = function() {
        i && clearTimeout(i), o && o(), s && s(), i = null, o = null, s = null;
      };
      return n && l(n), function() {
        v(), u();
      };
    }
    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function() {
      var t = this, n = we("mousedown", function(i) {
        t._removeInitialEventListener(), t._handleInitialEvent(i), t._removeInitialEventListener = we("mousedown", t._handleInitialEvent);
      }), a = we("touchstart", function(i) {
        t._removeInitialEventListener(), t._removeInitialEventListener = t._addLongPressListener(t._handleInitialEvent, i);
      });
      this._removeInitialEventListener = function() {
        n(), a();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function(t) {
      var n = Ut(t), a = n.pageX, i = n.pageY, o = n.clientX, s = n.clientY;
      this.emit("dropFromOutside", {
        x: a,
        y: i,
        clientX: o,
        clientY: s
      }), t.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function(t) {
      var n = Ut(t), a = n.pageX, i = n.pageY, o = n.clientX, s = n.clientY;
      this.emit("dragOverFromOutside", {
        x: a,
        y: i,
        clientX: o,
        clientY: s
      }), t.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function(t) {
      if (this._initialEvent = t, !this.isDetached) {
        var n = Ut(t), a = n.clientX, i = n.clientY, o = n.pageX, s = n.pageY, l = this.container(), u, v;
        if (!(t.which === 3 || t.button === 2 || !ED(l, a, i))) {
          if (!this.globalMouse && l && !er(l, t.target)) {
            var h = TD(0), c = h.top, p = h.left, d = h.bottom, f = h.right;
            if (v = mt(l), u = lo({
              top: v.top - c,
              left: v.left - p,
              bottom: v.bottom + d,
              right: v.right + f
            }, {
              top: s,
              left: o
            }), !u)
              return;
          }
          var m = this.emit("beforeSelect", this._initialEventData = {
            isTouch: /^touch/.test(t.type),
            x: o,
            y: s,
            clientX: a,
            clientY: i
          });
          if (m !== !1)
            switch (t.type) {
              case "mousedown":
                this._removeEndListener = we("mouseup", this._handleTerminatingEvent), this._onEscListener = we("keydown", this._handleTerminatingEvent), this._removeMoveListener = we("mousemove", this._handleMoveEvent);
                break;
              case "touchstart":
                this._handleMoveEvent(t), this._removeEndListener = we("touchend", this._handleTerminatingEvent), this._removeMoveListener = we("touchmove", this._handleMoveEvent);
                break;
            }
        }
      }
    }
    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function(t) {
      var n = t.target, a = this.validContainers;
      return !a || !a.length || !n ? !0 : a.some(function(i) {
        return !!n.closest(i);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function(t) {
      var n = this.selecting, a = this._selectRect;
      if (!n && t.type.includes("key") && (t = this._initialEvent), this.selecting = !1, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!t) {
        var i = !this.container || er(this.container(), t.target), o = this._isWithinValidContainer(t);
        return t.key === "Escape" || !o ? this.emit("reset") : !n && i ? this._handleClickEvent(t) : n ? this.emit("select", a) : this.emit("reset");
      }
    }
  }, {
    key: "_handleClickEvent",
    value: function(t) {
      var n = Ut(t), a = n.pageX, i = n.pageY, o = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
      return this._lastClickData && l - this._lastClickData.timestamp < OD ? (this._lastClickData = null, this.emit("doubleClick", {
        x: a,
        y: i,
        clientX: o,
        clientY: s
      })) : (this._lastClickData = {
        timestamp: l
      }, this.emit("click", {
        x: a,
        y: i,
        clientX: o,
        clientY: s
      }));
    }
  }, {
    key: "_handleMoveEvent",
    value: function(t) {
      if (!(this._initialEventData === null || this.isDetached)) {
        var n = this._initialEventData, a = n.x, i = n.y, o = Ut(t), s = o.pageX, l = o.pageY, u = Math.abs(a - s), v = Math.abs(i - l), h = Math.min(s, a), c = Math.min(l, i), p = this.selecting, d = this.isClick(s, l);
        d && !p && !(u || v) || (!p && !d && this.emit("selectStart", this._initialEventData), d || (this.selecting = !0, this._selectRect = {
          top: c,
          left: h,
          x: s,
          y: l,
          right: h + u,
          bottom: c + v
        }, this.emit("selecting", this._selectRect)), t.preventDefault());
      }
    }
  }, {
    key: "_keyListener",
    value: function(t) {
      this.ctrl = t.metaKey || t.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function(t, n) {
      var a = this._initialEventData, i = a.x, o = a.y, s = a.isTouch;
      return !s && Math.abs(t - i) <= so && Math.abs(n - o) <= so;
    }
  }]), e;
}();
function TD() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return qe(e) !== "object" && (e = {
    top: e,
    left: e,
    right: e,
    bottom: e
  }), e;
}
function lo(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = mt(e), a = n.top, i = n.left, o = n.right, s = o === void 0 ? i : o, l = n.bottom, u = l === void 0 ? a : l, v = mt(r), h = v.top, c = v.left, p = v.right, d = p === void 0 ? c : p, f = v.bottom, m = f === void 0 ? h : f;
  return !// 'a' bottom doesn't touch 'b' top
  (u - t < h || // 'a' top doesn't touch 'b' bottom
  a + t > m || // 'a' right doesn't touch 'b' left
  s - t < c || // 'a' left doesn't touch 'b' right
  i + t > d);
}
function mt(e) {
  if (!e.getBoundingClientRect)
    return e;
  var r = e.getBoundingClientRect(), t = r.left + co("left"), n = r.top + co("top");
  return {
    top: n,
    left: t,
    right: (e.offsetWidth || 0) + t,
    bottom: (e.offsetHeight || 0) + n
  };
}
function co(e) {
  if (e === "left")
    return window.pageXOffset || document.body.scrollLeft || 0;
  if (e === "top")
    return window.pageYOffset || document.body.scrollTop || 0;
}
var MD = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r(t, n) {
    var a;
    return me(this, r), a = Te(this, r, [t, n]), a.state = {
      selecting: !1
    }, a.containerRef = /* @__PURE__ */ I.createRef(), a;
  }
  return ge(r, [{
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
      var n = this.props, a = n.range, i = n.getNow, o = n.getters, s = n.date, l = n.components.dateCellWrapper, u = n.localizer, v = this.state, h = v.selecting, c = v.startIdx, p = v.endIdx, d = i();
      return /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, a.map(function(f, m) {
        var g = h && m >= c && m <= p, S = o.dayProp(f), y = S.className, w = S.style;
        return /* @__PURE__ */ b.createElement(l, {
          key: m,
          value: f,
          range: a
        }, /* @__PURE__ */ b.createElement("div", {
          style: w,
          className: pe("rbc-day-bg", y, g && "rbc-selected-cell", u.isSameDate(f, d) && "rbc-today", s && u.neq(s, f, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function() {
      var n = this, a = this.containerRef.current, i = this._selector = new rl(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      }), o = function(l, u) {
        if (!Wr(a, l) && !DD(a, l)) {
          var v = mt(a), h = n.props, c = h.range, p = h.rtl;
          if (gD(v, l)) {
            var d = el(v, l.x, p, c.length);
            n._selectSlot({
              startIdx: d,
              endIdx: d,
              action: u,
              box: l
            });
          }
        }
        n._initial = {}, n.setState({
          selecting: !1
        });
      };
      i.on("selecting", function(s) {
        var l = n.props, u = l.range, v = l.rtl, h = -1, c = -1;
        if (n.state.selecting || (fe(n.props.onSelectStart, [s]), n._initial = {
          x: s.x,
          y: s.y
        }), i.isSelected(a)) {
          var p = mt(a), d = bD(n._initial, p, s, u.length, v);
          h = d.startIdx, c = d.endIdx;
        }
        n.setState({
          selecting: !0,
          startIdx: h,
          endIdx: c
        });
      }), i.on("beforeSelect", function(s) {
        if (n.props.selectable === "ignoreEvents")
          return !Wr(n.containerRef.current, s);
      }), i.on("click", function(s) {
        return o(s, "click");
      }), i.on("doubleClick", function(s) {
        return o(s, "doubleClick");
      }), i.on("select", function(s) {
        n._selectSlot(oe(oe({}, n.state), {}, {
          action: "select",
          bounds: s
        })), n._initial = {}, n.setState({
          selecting: !1
        }), fe(n.props.onSelectEnd, [n.state]);
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
      var a = n.endIdx, i = n.startIdx, o = n.action, s = n.bounds, l = n.box;
      a !== -1 && i !== -1 && this.props.onSelectSlot && this.props.onSelectSlot({
        start: i,
        end: a,
        action: o,
        bounds: s,
        box: l,
        resourceId: this.props.resourceId
      });
    }
  }]), r;
}(b.Component), Ue = {
  propTypes: {
    slotMetrics: R.object.isRequired,
    selected: R.object,
    isAllDay: R.bool,
    accessors: R.object.isRequired,
    localizer: R.object.isRequired,
    components: R.object.isRequired,
    getters: R.object.isRequired,
    onSelect: R.func,
    onDoubleClick: R.func,
    onKeyPress: R.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function(r, t) {
    var n = r.selected;
    r.isAllDay;
    var a = r.accessors, i = r.getters, o = r.onSelect, s = r.onDoubleClick, l = r.onKeyPress, u = r.localizer, v = r.slotMetrics, h = r.components, c = r.resizable, p = v.continuesPrior(t), d = v.continuesAfter(t);
    return /* @__PURE__ */ b.createElement(Js, {
      event: t,
      getters: i,
      localizer: u,
      accessors: a,
      components: h,
      onSelect: o,
      onDoubleClick: s,
      onKeyPress: l,
      continuesPrior: p,
      continuesAfter: d,
      slotStart: v.first,
      slotEnd: v.last,
      selected: dn(t, n),
      resizable: c
    });
  },
  renderSpan: function(r, t, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", i = Math.abs(t) / r * 100 + "%";
    return /* @__PURE__ */ b.createElement("div", {
      key: n,
      className: "rbc-row-segment",
      style: {
        WebkitFlexBasis: i,
        flexBasis: i,
        maxWidth: i
      }
    }, a);
  }
}, nl = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.segments, o = a.slotMetrics.slots, s = a.className, l = 1;
      return /* @__PURE__ */ b.createElement("div", {
        className: pe(s, "rbc-row")
      }, i.reduce(function(u, v, h) {
        var c = v.event, p = v.left, d = v.right, f = v.span, m = "_lvl_" + h, g = p - l, S = Ue.renderEvent(n.props, c);
        return g && u.push(Ue.renderSpan(o, g, "".concat(m, "_gap"))), u.push(Ue.renderSpan(o, f, m, S)), l = d + 1, u;
      }, []));
    }
  }]), r;
}(b.Component);
nl.defaultProps = oe({}, Ue.defaultProps);
function al(e) {
  var r = e.dateRange, t = e.unit, n = t === void 0 ? "day" : t, a = e.localizer;
  return {
    first: r[0],
    last: a.add(r[r.length - 1], 1, n)
  };
}
function CD(e, r, t, n) {
  var a = al({
    dateRange: r,
    localizer: n
  }), i = a.first, o = a.last, s = n.diff(i, o, "day"), l = n.max(n.startOf(t.start(e), "day"), i), u = n.min(n.ceil(t.end(e), "day"), o), v = Mw(r, function(c) {
    return n.isSameDate(c, l);
  }), h = n.diff(l, u, "day");
  return h = Math.min(h, s), h = Math.max(h - n.segmentOffset, 1), {
    event: e,
    span: h,
    left: v + 1,
    right: Math.max(v + h, 1)
  };
}
function il(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, t, n, a, i = [], o = [];
  for (t = 0; t < e.length; t++) {
    for (a = e[t], n = 0; n < i.length && AD(a, i[n]); n++)
      ;
    n >= r ? o.push(a) : (i[n] || (i[n] = [])).push(a);
  }
  for (t = 0; t < i.length; t++)
    i[t].sort(function(s, l) {
      return s.left - l.left;
    });
  return {
    levels: i,
    extra: o
  };
}
function tr(e, r, t, n, a) {
  var i = {
    start: n.start(e),
    end: n.end(e)
  }, o = {
    start: r,
    end: t
  };
  return a.inEventRange({
    event: i,
    range: o
  });
}
function AD(e, r) {
  return r.some(function(t) {
    return t.left <= e.right && t.right >= e.left;
  });
}
function xD(e, r, t) {
  var n = Tr(e), a = [], i = [];
  n.forEach(function(l) {
    var u = r.start(l), v = r.end(l);
    t.daySpan(u, v) > 1 ? a.push(l) : i.push(l);
  });
  var o = a.sort(function(l, u) {
    return Jn(l, u, r, t);
  }), s = i.sort(function(l, u) {
    return Jn(l, u, r, t);
  });
  return [].concat(Tr(o), Tr(s));
}
function Jn(e, r, t, n) {
  var a = {
    start: t.start(e),
    end: t.end(e),
    allDay: t.allDay(e)
  }, i = {
    start: t.start(r),
    end: t.end(r),
    allDay: t.allDay(r)
  };
  return n.sortEvents({
    evtA: a,
    evtB: i
  });
}
var ol = function(r, t) {
  return r.left <= t && r.right >= t;
}, uo = function(r, t) {
  return r.filter(function(n) {
    return ol(n, t);
  }).map(function(n) {
    return n.event;
  });
}, sl = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      for (var n = this.props, a = n.segments, i = n.slotMetrics.slots, o = il(a).levels[0], s = 1, l = 1, u = []; s <= i; ) {
        var v = "_lvl_" + s, h = o.filter(function(S) {
          return ol(S, s);
        })[0] || {}, c = h.event, p = h.left, d = h.right, f = h.span;
        if (!c) {
          s++;
          continue;
        }
        var m = Math.max(0, p - l);
        if (this.canRenderSlotEvent(p, f)) {
          var g = Ue.renderEvent(this.props, c);
          m && u.push(Ue.renderSpan(i, m, v + "_gap")), u.push(Ue.renderSpan(i, f, v, g)), l = s = d + 1;
        } else
          m && u.push(Ue.renderSpan(i, m, v + "_gap")), u.push(Ue.renderSpan(i, 1, v, this.renderShowMore(a, s))), l = s = s + 1;
      }
      return /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row"
      }, u);
    }
  }, {
    key: "canRenderSlotEvent",
    value: function(n, a) {
      var i = this.props.segments;
      return Ww(n, n + a).every(function(o) {
        var s = uo(i, o).length;
        return s === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function(n, a) {
      var i = this, o = this.props, s = o.localizer, l = o.slotMetrics, u = l.getEventsForSlot(a), v = uo(n, a), h = v.length;
      return h ? /* @__PURE__ */ b.createElement("button", {
        type: "button",
        key: "sm_" + a,
        className: pe("rbc-button-link", "rbc-show-more"),
        onClick: function(p) {
          return i.showMore(a, p);
        }
      }, s.messages.showMore(h, v, u)) : !1;
    }
  }, {
    key: "showMore",
    value: function(n, a) {
      a.preventDefault(), a.stopPropagation(), this.props.onShowMore(n, a.target);
    }
  }]), r;
}(b.Component);
sl.defaultProps = oe({}, Ue.defaultProps);
var PD = function(r) {
  var t = r.children;
  return /* @__PURE__ */ b.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, t);
}, RD = function(r, t) {
  return r.left <= t && r.right >= t;
}, ID = function(r, t) {
  return r[0].range === t[0].range && r[0].events === t[0].events;
};
function ll() {
  return Ds(function(e) {
    for (var r = e.range, t = e.events, n = e.maxRows, a = e.minRows, i = e.accessors, o = e.localizer, s = al({
      dateRange: r,
      localizer: o
    }), l = s.first, u = s.last, v = t.map(function(f) {
      return CD(f, r, i, o);
    }), h = il(v, Math.max(n - 1, 1)), c = h.levels, p = h.extra, d = p.length > 0 ? a - 1 : a; c.length < d; )
      c.push([]);
    return {
      first: l,
      last: u,
      levels: c,
      extra: p,
      range: r,
      slots: r.length,
      clone: function(m) {
        var g = ll();
        return g(oe(oe({}, e), m));
      },
      getDateForSlot: function(m) {
        return r[m];
      },
      getSlotForDate: function(m) {
        return r.find(function(g) {
          return o.isSameDate(g, m);
        });
      },
      getEventsForSlot: function(m) {
        return v.filter(function(g) {
          return RD(g, m);
        }).map(function(g) {
          return g.event;
        });
      },
      continuesPrior: function(m) {
        return o.continuesPrior(i.start(m), l);
      },
      continuesAfter: function(m) {
        var g = i.start(m), S = i.end(m);
        return o.continuesAfter(g, S, u);
      }
    };
  }, ID);
}
var jr = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    var t;
    me(this, r);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return t = Te(this, r, [].concat(a)), t.handleSelectSlot = function(o) {
      var s = t.props, l = s.range, u = s.onSelectSlot;
      u(l.slice(o.start, o.end + 1), o);
    }, t.handleShowMore = function(o, s) {
      var l = t.props, u = l.range, v = l.onShowMore, h = t.slotMetrics(t.props), c = Pd(t.containerRef.current, ".rbc-row-bg")[0], p;
      c && (p = c.children[o - 1]);
      var d = h.getEventsForSlot(o);
      v(d, u[o - 1], p, o, s);
    }, t.getContainer = function() {
      var o = t.props.container;
      return o ? o() : t.containerRef.current;
    }, t.renderHeadingCell = function(o, s) {
      var l = t.props, u = l.renderHeader, v = l.getNow, h = l.localizer;
      return u({
        date: o,
        key: "header_".concat(s),
        className: pe("rbc-date-cell", h.isSameDate(o, v()) && "rbc-now")
      });
    }, t.renderDummy = function() {
      var o = t.props, s = o.className, l = o.range, u = o.renderHeader, v = o.showAllEvents;
      return /* @__PURE__ */ b.createElement("div", {
        className: s,
        ref: t.containerRef
      }, /* @__PURE__ */ b.createElement("div", {
        className: pe("rbc-row-content", v && "rbc-row-content-scrollable")
      }, u && /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row",
        ref: t.headingRowRef
      }, l.map(t.renderHeadingCell)), /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row",
        ref: t.eventRowRef
      }, /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row-segment"
      }, /* @__PURE__ */ b.createElement("div", {
        className: "rbc-event"
      }, /* @__PURE__ */ b.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    }, t.containerRef = /* @__PURE__ */ I.createRef(), t.headingRowRef = /* @__PURE__ */ I.createRef(), t.eventRowRef = /* @__PURE__ */ I.createRef(), t.slotMetrics = ll(), t;
  }
  return ge(r, [{
    key: "getRowLimit",
    value: function() {
      var n, a = On(this.eventRowRef.current), i = (n = this.headingRowRef) !== null && n !== void 0 && n.current ? On(this.headingRowRef.current) : 0, o = On(this.containerRef.current) - i;
      return Math.max(Math.floor(o / a), 1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.date, i = n.rtl, o = n.range, s = n.className, l = n.selected, u = n.selectable, v = n.renderForMeasure, h = n.accessors, c = n.getters, p = n.components, d = n.getNow, f = n.renderHeader, m = n.onSelect, g = n.localizer, S = n.onSelectStart, y = n.onSelectEnd, w = n.onDoubleClick, _ = n.onKeyPress, $ = n.resourceId, M = n.longPressThreshold, F = n.isAllDay, z = n.resizable, C = n.showAllEvents;
      if (v)
        return this.renderDummy();
      var A = this.slotMetrics(this.props), U = A.levels, H = A.extra, W = C ? PD : Ye, x = p.weekWrapper, O = {
        selected: l,
        accessors: h,
        getters: c,
        localizer: g,
        components: p,
        onSelect: m,
        onDoubleClick: w,
        onKeyPress: _,
        resourceId: $,
        slotMetrics: A,
        resizable: z
      };
      return /* @__PURE__ */ b.createElement("div", {
        className: s,
        role: "rowgroup",
        ref: this.containerRef
      }, /* @__PURE__ */ b.createElement(MD, {
        localizer: g,
        date: a,
        getNow: d,
        rtl: i,
        range: o,
        selectable: u,
        container: this.getContainer,
        getters: c,
        onSelectStart: S,
        onSelectEnd: y,
        onSelectSlot: this.handleSelectSlot,
        components: p,
        longPressThreshold: M,
        resourceId: $
      }), /* @__PURE__ */ b.createElement("div", {
        className: pe("rbc-row-content", C && "rbc-row-content-scrollable"),
        role: "row"
      }, f && /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, o.map(this.renderHeadingCell)), /* @__PURE__ */ b.createElement(W, null, /* @__PURE__ */ b.createElement(x, Object.assign({
        isAllDay: F
      }, O, {
        rtl: this.props.rtl
      }), U.map(function(N, k) {
        return /* @__PURE__ */ b.createElement(nl, Object.assign({
          key: k,
          segments: N
        }, O));
      }), !!H.length && /* @__PURE__ */ b.createElement(sl, Object.assign({
        segments: H,
        onShowMore: this.handleShowMore
      }, O))))));
    }
  }]), r;
}(b.Component);
jr.defaultProps = {
  minRows: 0,
  maxRows: 1 / 0
};
var cl = function(r) {
  var t = r.label;
  return /* @__PURE__ */ b.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, t);
}, kD = function(r) {
  var t = r.label, n = r.drilldownView, a = r.onDrillDown;
  return n ? /* @__PURE__ */ b.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: a,
    role: "cell"
  }, t) : /* @__PURE__ */ b.createElement("span", null, t);
}, ND = ["date", "className"], LD = function(r, t, n, a, i) {
  return r.filter(function(o) {
    return tr(o, t, n, a, i);
  });
}, vn = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    var t;
    me(this, r);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return t = Te(this, r, [].concat(a)), t.getContainer = function() {
      return t.containerRef.current;
    }, t.renderWeek = function(o, s) {
      var l = t.props, u = l.events, v = l.components, h = l.selectable, c = l.getNow, p = l.selected, d = l.date, f = l.localizer, m = l.longPressThreshold, g = l.accessors, S = l.getters, y = l.showAllEvents, w = t.state, _ = w.needLimitMeasure, $ = w.rowLimit, M = LD(Tr(u), o[0], o[o.length - 1], g, f), F = xD(M, g, f);
      return /* @__PURE__ */ b.createElement(jr, {
        key: s,
        ref: s === 0 ? t.slotRowRef : void 0,
        container: t.getContainer,
        className: "rbc-month-row",
        getNow: c,
        date: d,
        range: o,
        events: F,
        maxRows: y ? 1 / 0 : $,
        selected: p,
        selectable: h,
        components: v,
        accessors: g,
        getters: S,
        localizer: f,
        renderHeader: t.readerDateHeading,
        renderForMeasure: _,
        onShowMore: t.handleShowMore,
        onSelect: t.handleSelectEvent,
        onDoubleClick: t.handleDoubleClickEvent,
        onKeyPress: t.handleKeyPressEvent,
        onSelectSlot: t.handleSelectSlot,
        longPressThreshold: m,
        rtl: t.props.rtl,
        resizable: t.props.resizable,
        showAllEvents: y
      });
    }, t.readerDateHeading = function(o) {
      var s = o.date, l = o.className, u = He(o, ND), v = t.props, h = v.date, c = v.getDrilldownView, p = v.localizer, d = p.neq(s, h, "month"), f = p.isSameDate(s, h), m = c(s), g = p.format(s, "dateFormat"), S = t.props.components.dateHeader || kD;
      return /* @__PURE__ */ b.createElement("div", Object.assign({}, u, {
        className: pe(l, d && "rbc-off-range", f && "rbc-current"),
        role: "cell"
      }), /* @__PURE__ */ b.createElement(S, {
        label: g,
        date: s,
        drilldownView: m,
        isOffRange: d,
        onDrillDown: function(w) {
          return t.handleHeadingClick(s, m, w);
        }
      }));
    }, t.handleSelectSlot = function(o, s) {
      t._pendingSelection = t._pendingSelection.concat(o), clearTimeout(t._selectTimer), t._selectTimer = setTimeout(function() {
        return t.selectDates(s);
      });
    }, t.handleHeadingClick = function(o, s, l) {
      l.preventDefault(), t.clearSelection(), fe(t.props.onDrillDown, [o, s]);
    }, t.handleSelectEvent = function() {
      t.clearSelection();
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onSelectEvent, s);
    }, t.handleDoubleClickEvent = function() {
      t.clearSelection();
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onDoubleClickEvent, s);
    }, t.handleKeyPressEvent = function() {
      t.clearSelection();
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onKeyPressEvent, s);
    }, t.handleShowMore = function(o, s, l, u, v) {
      var h = t.props, c = h.popup, p = h.onDrillDown, d = h.onShowMore, f = h.getDrilldownView, m = h.doShowMoreDrillDown;
      if (t.clearSelection(), c) {
        var g = os(l, t.containerRef.current);
        t.setState({
          overlay: {
            date: s,
            events: o,
            position: g,
            target: v
          }
        });
      } else
        m && fe(p, [s, f(s) || be.DAY]);
      fe(d, [o, s, u]);
    }, t.overlayDisplay = function() {
      t.setState({
        overlay: null
      });
    }, t.state = {
      rowLimit: 5,
      needLimitMeasure: !0,
      date: null
    }, t.containerRef = /* @__PURE__ */ I.createRef(), t.slotRowRef = /* @__PURE__ */ I.createRef(), t._bgRows = [], t._pendingSelection = [], t;
  }
  return ge(r, [{
    key: "componentDidMount",
    value: function() {
      var n = this, a;
      this.state.needLimitMeasure && this.measureRowLimit(this.props), window.addEventListener("resize", this._resizeListener = function() {
        a || ss(function() {
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
      var n = this.props, a = n.date, i = n.localizer, o = n.className, s = i.visibleDays(a, i), l = md(s, 7);
      return this._weekCount = l.length, /* @__PURE__ */ b.createElement("div", {
        className: pe("rbc-month-view", o),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /* @__PURE__ */ b.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(l[0])), l.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function(n) {
      var a = this.props, i = a.localizer, o = a.components, s = n[0], l = n[n.length - 1], u = o.header || cl;
      return i.range(s, l, "day").map(function(v, h) {
        return /* @__PURE__ */ b.createElement("div", {
          key: "header_" + h,
          className: "rbc-header"
        }, /* @__PURE__ */ b.createElement(u, {
          date: v,
          localizer: i,
          label: i.format(v, "weekdayFormat")
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var n, a, i = this, o = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, u = s.localizer, v = s.components, h = s.getters, c = s.selected, p = s.popupOffset, d = s.handleDragStart, f = function() {
        return i.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ b.createElement(xa, {
        overlay: o,
        accessors: l,
        localizer: u,
        components: v,
        getters: h,
        selected: c,
        popupOffset: p,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: d,
        show: !!o.position,
        overlayDisplay: this.overlayDisplay,
        onHide: f
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
      var i = new Date(a[0]), o = new Date(a[a.length - 1]);
      o.setDate(a[a.length - 1].getDate() + 1), fe(this.props.onSelectSlot, {
        slots: a,
        start: i,
        end: o,
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
      var i = n.date, o = n.localizer;
      return {
        date: i,
        needLimitMeasure: o.neq(i, a.date, "month")
      };
    }
  }]), r;
}(b.Component);
vn.range = function(e, r) {
  var t = r.localizer, n = t.firstVisibleDay(e, t), a = t.lastVisibleDay(e, t);
  return {
    start: n,
    end: a
  };
};
vn.navigate = function(e, r, t) {
  var n = t.localizer;
  switch (r) {
    case Pe.PREVIOUS:
      return n.add(e, -1, "month");
    case Pe.NEXT:
      return n.add(e, 1, "month");
    default:
      return e;
  }
};
vn.title = function(e, r) {
  var t = r.localizer;
  return t.format(e, "monthHeaderFormat");
};
var fo = function(r) {
  var t = r.min, n = r.max, a = r.step, i = r.slots, o = r.localizer;
  return "".concat(+o.startOf(t, "minutes")) + "".concat(+o.startOf(n, "minutes")) + "".concat(a, "-").concat(i);
};
function Pa(e) {
  for (var r = e.min, t = e.max, n = e.step, a = e.timeslots, i = e.localizer, o = fo({
    start: r,
    end: t,
    step: n,
    timeslots: a,
    localizer: i
  }), s = 1 + i.getTotalMin(r, t), l = i.getMinutesFromMidnight(r), u = Math.ceil((s - 1) / (n * a)), v = u * a, h = new Array(u), c = new Array(v), p = 0; p < u; p++) {
    h[p] = new Array(a);
    for (var d = 0; d < a; d++) {
      var f = p * a + d, m = f * n;
      c[f] = h[p][d] = i.getSlotDate(r, l, m);
    }
  }
  var g = c.length * n;
  c.push(i.getSlotDate(r, l, g));
  function S(y) {
    var w = i.diff(r, y, "minutes") + i.getDstOffset(r, y);
    return Math.min(w, s);
  }
  return {
    groups: h,
    update: function(w) {
      return fo(w) !== o ? Pa(w) : this;
    },
    dateIsInGroup: function(w, _) {
      var $ = h[_ + 1];
      return i.inRange(w, h[_][0], $ ? $[0] : t, "minutes");
    },
    nextSlot: function(w) {
      var _ = c[Math.min(c.findIndex(function($) {
        return $ === w || i.eq($, w);
      }) + 1, c.length - 1)];
      return i.eq(_, w) && (_ = i.add(w, n, "minutes")), _;
    },
    closestSlotToPosition: function(w) {
      var _ = Math.min(c.length - 1, Math.max(0, Math.floor(w * v)));
      return c[_];
    },
    closestSlotFromPoint: function(w, _) {
      var $ = Math.abs(_.top - _.bottom);
      return this.closestSlotToPosition((w.y - _.top) / $);
    },
    closestSlotFromDate: function(w) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (i.lt(w, r, "minutes"))
        return c[0];
      if (i.gt(w, t, "minutes"))
        return c[c.length - 1];
      var $ = i.diff(r, w, "minutes");
      return c[($ - $ % n) / n + _];
    },
    startsBeforeDay: function(w) {
      return i.lt(w, r, "day");
    },
    startsAfterDay: function(w) {
      return i.gt(w, t, "day");
    },
    startsBefore: function(w) {
      return i.lt(i.merge(r, w), r, "minutes");
    },
    startsAfter: function(w) {
      return i.gt(i.merge(t, w), t, "minutes");
    },
    getRange: function(w, _, $, M) {
      $ || (w = i.min(t, i.max(r, w))), M || (_ = i.min(t, i.max(r, _)));
      var F = S(w), z = S(_), C = z > n * v && !i.eq(t, _) ? (F - n) / (n * v) * 100 : F / (n * v) * 100;
      return {
        top: C,
        height: z / (n * v) * 100 - C,
        start: S(w),
        startDate: w,
        end: S(_),
        endDate: _
      };
    },
    getCurrentTimePosition: function(w) {
      var _ = S(w), $ = _ / (n * v) * 100;
      return $;
    }
  };
}
var FD = /* @__PURE__ */ function() {
  function e(r, t) {
    var n = t.accessors, a = t.slotMetrics;
    me(this, e);
    var i = a.getRange(n.start(r), n.end(r)), o = i.start, s = i.startDate, l = i.end, u = i.endDate, v = i.top, h = i.height;
    this.start = o, this.end = l, this.startMs = +s, this.endMs = +u, this.top = v, this.height = h, this.data = r;
  }
  return ge(e, [{
    key: "_width",
    get: function() {
      if (this.rows) {
        var t = this.rows.reduce(
          function(a, i) {
            return Math.max(a, i.leaves.length + 1);
          },
          // add itself
          0
        ) + 1;
        return 100 / t;
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
      var t = this._width, n = Math.min(100, this._width * 1.7);
      if (this.rows)
        return n;
      if (this.leaves)
        return this.leaves.length > 0 ? n : t;
      var a = this.row.leaves, i = a.indexOf(this);
      return i === a.length - 1 ? t : n;
    }
  }, {
    key: "xOffset",
    get: function() {
      if (this.rows)
        return 0;
      if (this.leaves)
        return this.container._width;
      var t = this.row, n = t.leaves, a = t.xOffset, i = t._width, o = n.indexOf(this) + 1;
      return a + o * i;
    }
  }]), e;
}();
function zD(e, r, t) {
  return (
    // Occupies the same start slot.
    Math.abs(r.start - e.start) < t || // A's start slot overlaps with b's end slot.
    r.start > e.start && r.start < e.end
  );
}
function WD(e) {
  for (var r = o1(e, ["startMs", function(s) {
    return -s.endMs;
  }]), t = []; r.length > 0; ) {
    var n = r.shift();
    t.push(n);
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      if (!(n.endMs > i.startMs)) {
        if (a > 0) {
          var o = r.splice(a, 1)[0];
          t.push(o);
        }
        break;
      }
    }
  }
  return t;
}
function ul(e) {
  for (var r = e.events, t = e.minimumStartDifference, n = e.slotMetrics, a = e.accessors, i = r.map(function(v) {
    return new FD(v, {
      slotMetrics: n,
      accessors: a
    });
  }), o = WD(i), s = [], l = function() {
    var h = o[u], c = s.find(function(f) {
      return f.end > h.start || Math.abs(h.start - f.start) < t;
    });
    if (!c)
      return h.rows = [], s.push(h), 1;
    h.container = c;
    for (var p = null, d = c.rows.length - 1; !p && d >= 0; d--)
      zD(c.rows[d], h, t) && (p = c.rows[d]);
    p ? (p.leaves.push(h), h.row = p) : (h.leaves = [], c.rows.push(h));
  }, u = 0; u < o.length; u++)
    l();
  return o.map(function(v) {
    return {
      event: v.data,
      style: {
        top: v.top,
        height: v.height,
        width: v.width,
        xOffset: Math.max(0, v.xOffset)
      }
    };
  });
}
function fl(e, r, t) {
  for (var n = 0; n < e.friends.length; ++n)
    if (!(t.indexOf(e.friends[n]) > -1)) {
      r = r > e.friends[n].idx ? r : e.friends[n].idx, t.push(e.friends[n]);
      var a = fl(e.friends[n], r, t);
      r = r > a ? r : a;
    }
  return r;
}
function jD(e) {
  var r = e.events, t = e.minimumStartDifference, n = e.slotMetrics, a = e.accessors, i = ul({
    events: r,
    minimumStartDifference: t,
    slotMetrics: n,
    accessors: a
  });
  i.sort(function(x, O) {
    return x = x.style, O = O.style, x.top !== O.top ? x.top > O.top ? 1 : -1 : x.height !== O.height ? x.top + x.height < O.top + O.height ? 1 : -1 : 0;
  });
  for (var o = 0; o < i.length; ++o)
    i[o].friends = [], delete i[o].style.left, delete i[o].style.left, delete i[o].idx, delete i[o].size;
  for (var s = 0; s < i.length - 1; ++s)
    for (var l = i[s], u = l.style.top, v = l.style.top + l.style.height, h = s + 1; h < i.length; ++h) {
      var c = i[h], p = c.style.top, d = c.style.top + c.style.height;
      (p >= u && d <= v || d > u && d <= v || p >= u && p < v) && (l.friends.push(c), c.friends.push(l));
    }
  for (var f = 0; f < i.length; ++f) {
    for (var m = i[f], g = [], S = 0; S < 100; ++S)
      g.push(1);
    for (var y = 0; y < m.friends.length; ++y)
      m.friends[y].idx !== void 0 && (g[m.friends[y].idx] = 0);
    m.idx = g.indexOf(1);
  }
  for (var w = 0; w < i.length; ++w) {
    var _ = 0;
    if (!i[w].size) {
      var $ = [], M = fl(i[w], 0, $);
      _ = 100 / (M + 1), i[w].size = _;
      for (var F = 0; F < $.length; ++F)
        $[F].size = _;
    }
  }
  for (var z = 0; z < i.length; ++z) {
    var C = i[z];
    C.style.left = C.idx * C.size;
    for (var A = 0, U = 0; U < C.friends.length; ++U) {
      var H = C.friends[U].idx;
      A = A > H ? A : H;
    }
    A <= C.idx && (C.size = 100 - C.idx * C.size);
    var W = C.idx === 0 ? 0 : 3;
    C.style.width = "calc(".concat(C.size, "% - ").concat(W, "px)"), C.style.height = "calc(".concat(C.style.height, "% - 2px)"), C.style.xOffset = "calc(".concat(C.style.left, "% + ").concat(W, "px)");
  }
  return i;
}
var vo = {
  overlap: ul,
  "no-overlap": jD
};
function UD(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function BD(e) {
  e.events, e.minimumStartDifference, e.slotMetrics, e.accessors;
  var r = e.dayLayoutAlgorithm, t = r;
  return r in vo && (t = vo[r]), UD(t) ? t.apply(this, arguments) : [];
}
var dl = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.renderSlot, i = n.resource, o = n.group, s = n.getters, l = n.components, u = l === void 0 ? {} : l, v = u.timeSlotWrapper, h = v === void 0 ? Ye : v, c = s ? s.slotGroupProp(o) : {};
      return /* @__PURE__ */ b.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, c), o.map(function(p, d) {
        var f = s ? s.slotProp(p, i) : {};
        return /* @__PURE__ */ b.createElement(h, {
          key: d,
          value: p,
          resource: i
        }, /* @__PURE__ */ b.createElement("div", Object.assign({}, f, {
          className: pe("rbc-time-slot", f.className)
        }), a && a(p, d)));
      }));
    }
  }]), r;
}(I.Component);
function Sr(e) {
  return typeof e == "string" ? e : e + "%";
}
function HD(e) {
  var r = e.style, t = e.className, n = e.event, a = e.accessors, i = e.rtl, o = e.selected, s = e.label, l = e.continuesPrior, u = e.continuesAfter, v = e.getters, h = e.onClick, c = e.onDoubleClick, p = e.isBackgroundEvent, d = e.onKeyPress, f = e.components, m = f.event, g = f.eventWrapper, S = a.title(n), y = a.tooltip(n), w = a.end(n), _ = a.start(n), $ = v.eventProp(n, _, w, o), M = [/* @__PURE__ */ b.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, s), /* @__PURE__ */ b.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, m ? /* @__PURE__ */ b.createElement(m, {
    event: n,
    title: S
  }) : S)], F = r.height, z = r.top, C = r.width, A = r.xOffset, U = oe(oe({}, $.style), {}, ct({
    top: Sr(z),
    height: Sr(F),
    width: Sr(C)
  }, i ? "right" : "left", Sr(A)));
  return /* @__PURE__ */ b.createElement(g, Object.assign({
    type: "time"
  }, e), /* @__PURE__ */ b.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: h,
    onDoubleClick: c,
    style: U,
    onKeyDown: d,
    title: y ? (typeof s == "string" ? s + ": " : "") + y : void 0,
    className: pe(p ? "rbc-background-event" : "rbc-event", t, $.className, {
      "rbc-selected": o,
      "rbc-event-continues-earlier": l,
      "rbc-event-continues-later": u
    })
  }, M));
}
var VD = function(r) {
  var t = r.children, n = r.className, a = r.style, i = r.innerRef;
  return /* @__PURE__ */ b.createElement("div", {
    className: n,
    style: a,
    ref: i
  }, t);
}, YD = /* @__PURE__ */ b.forwardRef(function(e, r) {
  return /* @__PURE__ */ b.createElement(VD, Object.assign({}, e, {
    innerRef: r
  }));
}), GD = ["dayProp"], KD = ["eventContainerWrapper"], vl = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    var t;
    me(this, r);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return t = Te(this, r, [].concat(a)), t.state = {
      selecting: !1,
      timeIndicatorPosition: null
    }, t.intervalTriggered = !1, t.renderEvents = function(o) {
      var s = o.events, l = o.isBackgroundEvent, u = t.props, v = u.rtl, h = u.selected, c = u.accessors, p = u.localizer, d = u.getters, f = u.components, m = u.step, g = u.timeslots, S = u.dayLayoutAlgorithm, y = u.resizable, w = Eo(t), _ = w.slotMetrics, $ = p.messages, M = BD({
        events: s,
        accessors: c,
        slotMetrics: _,
        minimumStartDifference: Math.ceil(m * g / 2),
        dayLayoutAlgorithm: S
      });
      return M.map(function(F, z) {
        var C = F.event, A = F.style, U = c.end(C), H = c.start(C), W = "eventTimeRangeFormat", x, O = _.startsBeforeDay(H), N = _.startsAfterDay(U);
        O ? W = "eventTimeRangeEndFormat" : N && (W = "eventTimeRangeStartFormat"), O && N ? x = $.allDay : x = p.format({
          start: H,
          end: U
        }, W);
        var k = O || _.startsBefore(H), Y = N || _.startsAfter(U);
        return /* @__PURE__ */ b.createElement(HD, {
          style: A,
          event: C,
          label: x,
          key: "evt_" + z,
          getters: d,
          rtl: v,
          components: f,
          continuesPrior: k,
          continuesAfter: Y,
          accessors: c,
          resource: t.props.resource,
          selected: dn(C, h),
          onClick: function(X) {
            return t._select(oe(oe(oe({}, C), t.props.resource && {
              sourceResource: t.props.resource
            }), l && {
              isBackgroundEvent: !0
            }), X);
          },
          onDoubleClick: function(X) {
            return t._doubleClick(C, X);
          },
          isBackgroundEvent: l,
          onKeyPress: function(X) {
            return t._keyPress(C, X);
          },
          resizable: y
        });
      });
    }, t._selectable = function() {
      var o = t.containerRef.current, s = t.props, l = s.longPressThreshold, u = s.localizer, v = t._selector = new rl(function() {
        return o;
      }, {
        longPressThreshold: l
      }), h = function(f) {
        var m = t.props.onSelecting, g = t.state || {}, S = c(f), y = S.startDate, w = S.endDate;
        m && (u.eq(g.startDate, y, "minutes") && u.eq(g.endDate, w, "minutes") || m({
          start: y,
          end: w,
          resourceId: t.props.resource
        }) === !1) || (t.state.start !== S.start || t.state.end !== S.end || t.state.selecting !== S.selecting) && t.setState(S);
      }, c = function(f) {
        var m = t.slotMetrics.closestSlotFromPoint(f, mt(o));
        t.state.selecting || (t._initialSlot = m);
        var g = t._initialSlot;
        u.lte(g, m) ? m = t.slotMetrics.nextSlot(m) : u.gt(g, m) && (g = t.slotMetrics.nextSlot(g));
        var S = t.slotMetrics.getRange(u.min(g, m), u.max(g, m));
        return oe(oe({}, S), {}, {
          selecting: !0,
          top: "".concat(S.top, "%"),
          height: "".concat(S.height, "%")
        });
      }, p = function(f, m) {
        if (!Wr(t.containerRef.current, f)) {
          var g = c(f), S = g.startDate, y = g.endDate;
          t._selectSlot({
            startDate: S,
            endDate: y,
            action: m,
            box: f
          });
        }
        t.setState({
          selecting: !1
        });
      };
      v.on("selecting", h), v.on("selectStart", h), v.on("beforeSelect", function(d) {
        if (t.props.selectable === "ignoreEvents")
          return !Wr(t.containerRef.current, d);
      }), v.on("click", function(d) {
        return p(d, "click");
      }), v.on("doubleClick", function(d) {
        return p(d, "doubleClick");
      }), v.on("select", function(d) {
        t.state.selecting && (t._selectSlot(oe(oe({}, t.state), {}, {
          action: "select",
          bounds: d
        })), t.setState({
          selecting: !1
        }));
      }), v.on("reset", function() {
        t.state.selecting && t.setState({
          selecting: !1
        });
      });
    }, t._teardownSelectable = function() {
      t._selector && (t._selector.teardown(), t._selector = null);
    }, t._selectSlot = function(o) {
      for (var s = o.startDate, l = o.endDate, u = o.action, v = o.bounds, h = o.box, c = s, p = []; t.props.localizer.lte(c, l); )
        p.push(c), c = new Date(+c + t.props.step * 60 * 1e3);
      fe(t.props.onSelectSlot, {
        slots: p,
        start: s,
        end: l,
        resourceId: t.props.resource,
        action: u,
        bounds: v,
        box: h
      });
    }, t._select = function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onSelectEvent, s);
    }, t._doubleClick = function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onDoubleClickEvent, s);
    }, t._keyPress = function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onKeyPressEvent, s);
    }, t.slotMetrics = Pa(t.props), t.containerRef = /* @__PURE__ */ I.createRef(), t;
  }
  return ge(r, [{
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
      var i = this.props, o = i.getNow, s = i.isNow, l = i.localizer, u = i.date, v = i.min, h = i.max, c = l.neq(n.getNow(), o(), "minutes");
      if (n.isNow !== s || c) {
        if (this.clearTimeIndicatorInterval(), s) {
          var p = !c && l.eq(n.date, u, "minutes") && a.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(p);
        }
      } else
        s && (l.neq(n.min, v, "minutes") || l.neq(n.max, h, "minutes")) && this.positionTimeIndicator();
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
      var n = this.props, a = n.min, i = n.max, o = n.getNow, s = o();
      if (s >= a && s <= i) {
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
      var n = this.props, a = n.date, i = n.max, o = n.rtl, s = n.isNow, l = n.resource, u = n.accessors, v = n.localizer, h = n.getters, c = h.dayProp, p = He(h, GD), d = n.components, f = d.eventContainerWrapper, m = He(d, KD);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var g = this.slotMetrics, S = this.state, y = S.selecting, w = S.top, _ = S.height, $ = S.startDate, M = S.endDate, F = {
        start: $,
        end: M
      }, z = c(i), C = z.className, A = z.style, U = m.dayColumnWrapper || YD;
      return /* @__PURE__ */ b.createElement(U, {
        ref: this.containerRef,
        date: a,
        style: A,
        className: pe(
          C,
          "rbc-day-slot",
          "rbc-time-column",
          s && "rbc-now",
          s && "rbc-today",
          // WHY
          y && "rbc-slot-selecting"
        ),
        slotMetrics: g
      }, g.groups.map(function(H, W) {
        return /* @__PURE__ */ b.createElement(dl, {
          key: W,
          group: H,
          resource: l,
          getters: p,
          components: m
        });
      }), /* @__PURE__ */ b.createElement(f, {
        localizer: v,
        resource: l,
        accessors: u,
        getters: p,
        components: m,
        slotMetrics: g
      }, /* @__PURE__ */ b.createElement("div", {
        className: pe("rbc-events-container", o && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: !0
      }), this.renderEvents({
        events: this.props.events
      }))), y && /* @__PURE__ */ b.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: w,
          height: _
        }
      }, /* @__PURE__ */ b.createElement("span", null, v.format(F, "selectRangeFormat"))), s && this.intervalTriggered && /* @__PURE__ */ b.createElement("div", {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      }));
    }
  }]), r;
}(b.Component);
vl.defaultProps = {
  dragThroughEvents: !0,
  timeslots: 2
};
function qD(e) {
  var r = e.min, t = e.max, n = e.localizer;
  return n.getTimezoneOffset(r) !== n.getTimezoneOffset(t) ? {
    start: n.add(r, -1, "day"),
    end: n.add(t, -1, "day")
  } : {
    start: r,
    end: t
  };
}
var XD = function(r) {
  var t = r.min, n = r.max, a = r.timeslots, i = r.step, o = r.localizer, s = r.getNow, l = r.resource, u = r.components, v = r.getters, h = r.gutterRef, c = u.timeGutterWrapper, p = I.useMemo(
    function() {
      return qD({
        min: t,
        max: n,
        localizer: o
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t == null ? void 0 : t.toISOString(), n == null ? void 0 : n.toISOString(), o]
  ), d = p.start, f = p.end, m = I.useState(Pa({
    min: d,
    max: f,
    timeslots: a,
    step: i,
    localizer: o
  })), g = Ge(m, 2), S = g[0], y = g[1];
  I.useEffect(function() {
    S && y(S.update({
      min: d,
      max: f,
      timeslots: a,
      step: i,
      localizer: o
    }));
  }, [d == null ? void 0 : d.toISOString(), f == null ? void 0 : f.toISOString(), a, i]);
  var w = I.useCallback(function(_, $) {
    if ($)
      return null;
    var M = S.dateIsInGroup(s(), $);
    return /* @__PURE__ */ b.createElement("span", {
      className: pe("rbc-label", M && "rbc-now")
    }, o.format(_, "timeGutterFormat"));
  }, [S, o, s]);
  return /* @__PURE__ */ b.createElement(c, {
    slotMetrics: S
  }, /* @__PURE__ */ b.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: h
  }, S.groups.map(function(_, $) {
    return /* @__PURE__ */ b.createElement(dl, {
      key: $,
      group: _,
      resource: l,
      components: u,
      renderSlot: w,
      getters: v
    });
  })));
}, ZD = /* @__PURE__ */ b.forwardRef(function(e, r) {
  return /* @__PURE__ */ b.createElement(XD, Object.assign({
    gutterRef: r
  }, e));
}), JD = function(r) {
  var t = r.label;
  return /* @__PURE__ */ b.createElement(b.Fragment, null, t);
}, QD = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    var t;
    me(this, r);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return t = Te(this, r, [].concat(a)), t.handleHeaderClick = function(o, s, l) {
      l.preventDefault(), fe(t.props.onDrillDown, [o, s]);
    }, t.renderRow = function(o) {
      var s = t.props, l = s.events, u = s.rtl, v = s.selectable, h = s.getNow, c = s.range, p = s.getters, d = s.localizer, f = s.accessors, m = s.components, g = s.resizable, S = f.resourceId(o), y = o ? l.filter(function(w) {
        return f.resource(w) === S;
      }) : l;
      return /* @__PURE__ */ b.createElement(jr, {
        isAllDay: !0,
        rtl: u,
        getNow: h,
        minRows: 2,
        maxRows: t.props.allDayMaxRows + 1,
        range: c,
        events: y,
        resourceId: S,
        className: "rbc-allday-cell",
        selectable: v,
        selected: t.props.selected,
        components: m,
        accessors: f,
        getters: p,
        localizer: d,
        onSelect: t.props.onSelectEvent,
        onShowMore: t.props.onShowMore,
        onDoubleClick: t.props.onDoubleClickEvent,
        onKeyPress: t.props.onKeyPressEvent,
        onSelectSlot: t.props.onSelectSlot,
        longPressThreshold: t.props.longPressThreshold,
        resizable: g
      });
    }, t;
  }
  return ge(r, [{
    key: "renderHeaderCells",
    value: function(n) {
      var a = this, i = this.props, o = i.localizer, s = i.getDrilldownView, l = i.getNow, u = i.getters.dayProp, v = i.components.header, h = v === void 0 ? cl : v, c = l();
      return n.map(function(p, d) {
        var f = s(p), m = o.format(p, "dayFormat"), g = u(p), S = g.className, y = g.style, w = /* @__PURE__ */ b.createElement(h, {
          date: p,
          label: m,
          localizer: o
        });
        return /* @__PURE__ */ b.createElement("div", {
          key: d,
          style: y,
          className: pe("rbc-header", S, o.isSameDate(p, c) && "rbc-today")
        }, f ? /* @__PURE__ */ b.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function($) {
            return a.handleHeaderClick(p, f, $);
          }
        }, w) : /* @__PURE__ */ b.createElement("span", null, w));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.width, o = a.rtl, s = a.resources, l = a.range, u = a.events, v = a.getNow, h = a.accessors, c = a.selectable, p = a.components, d = a.getters, f = a.scrollRef, m = a.localizer, g = a.isOverflowing, S = a.components, y = S.timeGutterHeader, w = S.resourceHeader, _ = w === void 0 ? JD : w, $ = a.resizable, M = {};
      g && (M[o ? "marginLeft" : "marginRight"] = "".concat(ls() - 1, "px"));
      var F = s.groupEvents(u);
      return /* @__PURE__ */ b.createElement("div", {
        style: M,
        ref: f,
        className: pe("rbc-time-header", g && "rbc-overflowing")
      }, /* @__PURE__ */ b.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: i,
          minWidth: i,
          maxWidth: i
        }
      }, y && /* @__PURE__ */ b.createElement(y, null)), s.map(function(z, C) {
        var A = Ge(z, 2), U = A[0], H = A[1];
        return /* @__PURE__ */ b.createElement("div", {
          className: "rbc-time-header-content",
          key: U || C
        }, H && /* @__PURE__ */ b.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(C)
        }, /* @__PURE__ */ b.createElement("div", {
          className: "rbc-header"
        }, /* @__PURE__ */ b.createElement(_, {
          index: C,
          label: h.resourceTitle(H),
          resource: H
        }))), /* @__PURE__ */ b.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(l.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, n.renderHeaderCells(l)), /* @__PURE__ */ b.createElement(jr, {
          isAllDay: !0,
          rtl: o,
          getNow: v,
          minRows: 2,
          maxRows: n.props.allDayMaxRows + 1,
          range: l,
          events: F.get(U) || [],
          resourceId: H && U,
          className: "rbc-allday-cell",
          selectable: c,
          selected: n.props.selected,
          components: p,
          accessors: h,
          getters: d,
          localizer: m,
          onSelect: n.props.onSelectEvent,
          onShowMore: n.props.onShowMore,
          onDoubleClick: n.props.onDoubleClickEvent,
          onKeyDown: n.props.onKeyPressEvent,
          onSelectSlot: n.props.onSelectSlot,
          longPressThreshold: n.props.longPressThreshold,
          resizable: $
        }));
      }));
    }
  }]), r;
}(b.Component), Cn = {};
function eO(e, r) {
  return {
    map: function(n) {
      return e ? e.map(function(a, i) {
        return n([r.resourceId(a), a], i);
      }) : [n([Cn, null], 0)];
    },
    groupEvents: function(n) {
      var a = /* @__PURE__ */ new Map();
      return e ? (n.forEach(function(i) {
        var o = r.resource(i) || Cn;
        if (Array.isArray(o))
          o.forEach(function(l) {
            var u = a.get(l) || [];
            u.push(i), a.set(l, u);
          });
        else {
          var s = a.get(o) || [];
          s.push(i), a.set(o, s);
        }
      }), a) : (a.set(Cn, n), a);
    }
  };
}
var Nt = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r(t) {
    var n;
    return me(this, r), n = Te(this, r, [t]), n.handleScroll = function(a) {
      n.scrollRef.current && (n.scrollRef.current.scrollLeft = a.target.scrollLeft);
    }, n.handleResize = function() {
      si(n.rafHandle), n.rafHandle = ss(n.checkOverflow);
    }, n.handleKeyPressEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      fe(n.props.onKeyPressEvent, i);
    }, n.handleSelectEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      fe(n.props.onSelectEvent, i);
    }, n.handleDoubleClickEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      fe(n.props.onDoubleClickEvent, i);
    }, n.handleShowMore = function(a, i, o, s, l) {
      var u = n.props, v = u.popup, h = u.onDrillDown, c = u.onShowMore, p = u.getDrilldownView, d = u.doShowMoreDrillDown;
      if (n.clearSelection(), v) {
        var f = os(o, n.containerRef.current);
        n.setState({
          overlay: {
            date: i,
            events: a,
            position: oe(oe({}, f), {}, {
              width: "200px"
            }),
            target: l
          }
        });
      } else
        d && fe(h, [i, p(i) || be.DAY]);
      fe(c, [a, i, s]);
    }, n.handleSelectAllDaySlot = function(a, i) {
      var o = n.props.onSelectSlot, s = new Date(a[0]), l = new Date(a[a.length - 1]);
      l.setDate(a[a.length - 1].getDate() + 1), fe(o, {
        slots: a,
        start: s,
        end: l,
        action: i.action,
        resourceId: i.resourceId
      });
    }, n.overlayDisplay = function() {
      n.setState({
        overlay: null
      });
    }, n.checkOverflow = function() {
      if (!n._updatingOverflow) {
        var a = n.contentRef.current;
        if (a != null && a.scrollHeight) {
          var i = a.scrollHeight > a.clientHeight;
          n.state.isOverflowing !== i && (n._updatingOverflow = !0, n.setState({
            isOverflowing: i
          }, function() {
            n._updatingOverflow = !1;
          }));
        }
      }
    }, n.memoizedResources = Ds(function(a, i) {
      return eO(a, i);
    }), n.state = {
      gutterWidth: void 0,
      isOverflowing: null
    }, n.scrollRef = /* @__PURE__ */ b.createRef(), n.contentRef = /* @__PURE__ */ b.createRef(), n.containerRef = /* @__PURE__ */ b.createRef(), n._scrollRatio = null, n.gutterRef = /* @__PURE__ */ I.createRef(), n;
  }
  return ge(r, [{
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
      window.removeEventListener("resize", this.handleResize), si(this.rafHandle), this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.applyScroll();
    }
  }, {
    key: "renderEvents",
    value: function(n, a, i, o) {
      var s = this, l = this.props, u = l.min, v = l.max, h = l.components, c = l.accessors, p = l.localizer, d = l.dayLayoutAlgorithm, f = this.memoizedResources(this.props.resources, c), m = f.groupEvents(a), g = f.groupEvents(i);
      return f.map(function(S, y) {
        var w = Ge(S, 2), _ = w[0], $ = w[1];
        return n.map(function(M, F) {
          var z = (m.get(_) || []).filter(function(A) {
            return p.inRange(M, c.start(A), c.end(A), "day");
          }), C = (g.get(_) || []).filter(function(A) {
            return p.inRange(M, c.start(A), c.end(A), "day");
          });
          return /* @__PURE__ */ b.createElement(vl, Object.assign({}, s.props, {
            localizer: p,
            min: p.merge(M, u),
            max: p.merge(M, v),
            resource: $ && _,
            components: h,
            isNow: p.isSameDate(M, o),
            key: y + "-" + F,
            date: M,
            events: z,
            backgroundEvents: C,
            dayLayoutAlgorithm: d
          }));
        });
      });
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.events, o = a.backgroundEvents, s = a.range, l = a.width, u = a.rtl, v = a.selected, h = a.getNow, c = a.resources, p = a.components, d = a.accessors, f = a.getters, m = a.localizer, g = a.min, S = a.max, y = a.showMultiDayTimes, w = a.longPressThreshold, _ = a.resizable;
      l = l || this.state.gutterWidth;
      var $ = s[0], M = s[s.length - 1];
      this.slots = s.length;
      var F = [], z = [], C = [];
      return i.forEach(function(A) {
        if (tr(A, $, M, d, m)) {
          var U = d.start(A), H = d.end(A);
          d.allDay(A) || m.startAndEndAreDateOnly(U, H) || !y && !m.isSameDate(U, H) ? F.push(A) : z.push(A);
        }
      }), o.forEach(function(A) {
        tr(A, $, M, d, m) && C.push(A);
      }), F.sort(function(A, U) {
        return Jn(A, U, d, m);
      }), /* @__PURE__ */ b.createElement("div", {
        className: pe("rbc-time-view", c && "rbc-time-view-resources"),
        ref: this.containerRef
      }, /* @__PURE__ */ b.createElement(QD, {
        range: s,
        events: F,
        width: l,
        rtl: u,
        getNow: h,
        localizer: m,
        selected: v,
        allDayMaxRows: this.props.showAllEvents ? 1 / 0 : (n = this.props.allDayMaxRows) !== null && n !== void 0 ? n : 1 / 0,
        resources: this.memoizedResources(c, d),
        selectable: this.props.selectable,
        accessors: d,
        getters: f,
        components: p,
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
      }), this.props.popup && this.renderOverlay(), /* @__PURE__ */ b.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /* @__PURE__ */ b.createElement(ZD, {
        date: $,
        ref: this.gutterRef,
        localizer: m,
        min: m.merge($, g),
        max: m.merge($, S),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: p,
        className: "rbc-time-gutter",
        getters: f
      }), this.renderEvents(s, z, C, h())));
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var n, a, i = this, o = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, u = s.localizer, v = s.components, h = s.getters, c = s.selected, p = s.popupOffset, d = s.handleDragStart, f = function() {
        return i.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ b.createElement(xa, {
        overlay: o,
        accessors: l,
        localizer: u,
        components: v,
        getters: h,
        selected: c,
        popupOffset: p,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: d,
        show: !!o.position,
        overlayDisplay: this.overlayDisplay,
        onHide: f
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
        var a, i = (a = n.gutterRef) !== null && a !== void 0 && a.current ? Xn(n.gutterRef.current) : void 0;
        i && n.state.gutterWidth !== i && n.setState({
          gutterWidth: i
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props, a = n.min, i = n.max, o = n.scrollToTime, s = n.localizer, l = s.diff(s.merge(o, a), o, "milliseconds"), u = s.diff(a, i, "milliseconds");
      this._scrollRatio = l / u;
    }
  }]), r;
}(I.Component);
Nt.defaultProps = {
  step: 30,
  timeslots: 2
};
var tO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], hn = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, i = n.localizer, o = n.min, s = o === void 0 ? i.startOf(/* @__PURE__ */ new Date(), "day") : o, l = n.max, u = l === void 0 ? i.endOf(/* @__PURE__ */ new Date(), "day") : l, v = n.scrollToTime, h = v === void 0 ? i.startOf(/* @__PURE__ */ new Date(), "day") : v, c = n.enableAutoScroll, p = c === void 0 ? !0 : c, d = He(n, tO), f = r.range(a, {
        localizer: i
      });
      return /* @__PURE__ */ b.createElement(Nt, Object.assign({}, d, {
        range: f,
        eventOffset: 10,
        localizer: i,
        min: s,
        max: u,
        scrollToTime: h,
        enableAutoScroll: p
      }));
    }
  }]), r;
}(b.Component);
hn.range = function(e, r) {
  var t = r.localizer;
  return [t.startOf(e, "day")];
};
hn.navigate = function(e, r, t) {
  var n = t.localizer;
  switch (r) {
    case Pe.PREVIOUS:
      return n.add(e, -1, "day");
    case Pe.NEXT:
      return n.add(e, 1, "day");
    default:
      return e;
  }
};
hn.title = function(e, r) {
  var t = r.localizer;
  return t.format(e, "dayHeaderFormat");
};
var rO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], et = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, i = n.localizer, o = n.min, s = o === void 0 ? i.startOf(/* @__PURE__ */ new Date(), "day") : o, l = n.max, u = l === void 0 ? i.endOf(/* @__PURE__ */ new Date(), "day") : l, v = n.scrollToTime, h = v === void 0 ? i.startOf(/* @__PURE__ */ new Date(), "day") : v, c = n.enableAutoScroll, p = c === void 0 ? !0 : c, d = He(n, rO), f = r.range(a, this.props);
      return /* @__PURE__ */ b.createElement(Nt, Object.assign({}, d, {
        range: f,
        eventOffset: 15,
        localizer: i,
        min: s,
        max: u,
        scrollToTime: h,
        enableAutoScroll: p
      }));
    }
  }]), r;
}(b.Component);
et.defaultProps = Nt.defaultProps;
et.navigate = function(e, r, t) {
  var n = t.localizer;
  switch (r) {
    case Pe.PREVIOUS:
      return n.add(e, -1, "week");
    case Pe.NEXT:
      return n.add(e, 1, "week");
    default:
      return e;
  }
};
et.range = function(e, r) {
  var t = r.localizer, n = t.startOfWeek(), a = t.startOf(e, "week", n), i = t.endOf(e, "week", n);
  return t.range(a, i);
};
et.title = function(e, r) {
  var t = r.localizer, n = et.range(e, {
    localizer: t
  }), a = Ps(n), i = a[0], o = a.slice(1);
  return t.format({
    start: i,
    end: o.pop()
  }, "dayRangeHeaderFormat");
};
var nO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function Ra(e, r) {
  return et.range(e, r).filter(function(t) {
    return [6, 0].indexOf(t.getDay()) === -1;
  });
}
var fr = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    return me(this, r), Te(this, r, arguments);
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, i = n.localizer, o = n.min, s = o === void 0 ? i.startOf(/* @__PURE__ */ new Date(), "day") : o, l = n.max, u = l === void 0 ? i.endOf(/* @__PURE__ */ new Date(), "day") : l, v = n.scrollToTime, h = v === void 0 ? i.startOf(/* @__PURE__ */ new Date(), "day") : v, c = n.enableAutoScroll, p = c === void 0 ? !0 : c, d = He(n, nO), f = Ra(a, this.props);
      return /* @__PURE__ */ b.createElement(Nt, Object.assign({}, d, {
        range: f,
        eventOffset: 15,
        localizer: i,
        min: s,
        max: u,
        scrollToTime: h,
        enableAutoScroll: p
      }));
    }
  }]), r;
}(b.Component);
fr.defaultProps = Nt.defaultProps;
fr.range = Ra;
fr.navigate = et.navigate;
fr.title = function(e, r) {
  var t = r.localizer, n = Ra(e, {
    localizer: t
  }), a = Ps(n), i = a[0], o = a.slice(1);
  return t.format({
    start: i,
    end: o.pop()
  }, "dayRangeHeaderFormat");
};
function tt(e) {
  var r = e.accessors, t = e.components, n = e.date, a = e.events, i = e.getters, o = e.length, s = e.localizer, l = e.onDoubleClickEvent, u = e.onSelectEvent, v = e.selected, h = I.useRef(null), c = I.useRef(null), p = I.useRef(null), d = I.useRef(null), f = I.useRef(null);
  I.useEffect(function() {
    S();
  });
  var m = function(M, F, z) {
    var C = t.event, A = t.date;
    return F = F.filter(function(U) {
      return tr(U, s.startOf(M, "day"), s.endOf(M, "day"), r, s);
    }), F.map(function(U, H) {
      var W = r.title(U), x = r.end(U), O = r.start(U), N = i.eventProp(U, O, x, dn(U, v)), k = H === 0 && s.format(M, "agendaDateFormat"), Y = H === 0 ? /* @__PURE__ */ b.createElement("td", {
        rowSpan: F.length,
        className: "rbc-agenda-date-cell"
      }, A ? /* @__PURE__ */ b.createElement(A, {
        day: M,
        label: k
      }) : k) : !1;
      return /* @__PURE__ */ b.createElement("tr", {
        key: z + "_" + H,
        className: N.className,
        style: N.style
      }, Y, /* @__PURE__ */ b.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, g(M, U)), /* @__PURE__ */ b.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function(X) {
          return u && u(U, X);
        },
        onDoubleClick: function(X) {
          return l && l(U, X);
        }
      }, C ? /* @__PURE__ */ b.createElement(C, {
        event: U,
        title: W
      }) : W));
    }, []);
  }, g = function(M, F) {
    var z = "", C = t.time, A = s.messages.allDay, U = r.end(F), H = r.start(F);
    return r.allDay(F) || (s.eq(H, U) ? A = s.format(H, "agendaTimeFormat") : s.isSameDate(H, U) ? A = s.format({
      start: H,
      end: U
    }, "agendaTimeRangeFormat") : s.isSameDate(M, H) ? A = s.format(H, "agendaTimeFormat") : s.isSameDate(M, U) && (A = s.format(U, "agendaTimeFormat"))), s.gt(M, H, "day") && (z = "rbc-continues-prior"), s.lt(M, U, "day") && (z += " rbc-continues-after"), /* @__PURE__ */ b.createElement("span", {
      className: z.trim()
    }, C ? /* @__PURE__ */ b.createElement(C, {
      event: F,
      day: M,
      label: A
    }) : A);
  }, S = function() {
    if (f.current) {
      var M = h.current, F = f.current.firstChild;
      if (F) {
        var z = d.current.scrollHeight > d.current.clientHeight, C = [], A = C;
        C = [Xn(F.children[0]), Xn(F.children[1])], (A[0] !== C[0] || A[1] !== C[1]) && (c.current.style.width = C[0] + "px", p.current.style.width = C[1] + "px"), z ? (Nc(M, "rbc-header-overflowing"), M.style.marginRight = ls() + "px") : Lc(M, "rbc-header-overflowing");
      }
    }
  }, y = s.messages, w = s.add(n, o, "day"), _ = s.range(n, w, "day");
  return a = a.filter(function($) {
    return tr($, s.startOf(n, "day"), s.endOf(w, "day"), r, s);
  }), a.sort(function($, M) {
    return +r.start($) - +r.start(M);
  }), /* @__PURE__ */ b.createElement("div", {
    className: "rbc-agenda-view"
  }, a.length !== 0 ? /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("table", {
    ref: h,
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ b.createElement("thead", null, /* @__PURE__ */ b.createElement("tr", null, /* @__PURE__ */ b.createElement("th", {
    className: "rbc-header",
    ref: c
  }, y.date), /* @__PURE__ */ b.createElement("th", {
    className: "rbc-header",
    ref: p
  }, y.time), /* @__PURE__ */ b.createElement("th", {
    className: "rbc-header"
  }, y.event)))), /* @__PURE__ */ b.createElement("div", {
    className: "rbc-agenda-content",
    ref: d
  }, /* @__PURE__ */ b.createElement("table", {
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ b.createElement("tbody", {
    ref: f
  }, _.map(function($, M) {
    return m($, a, M);
  }))))) : /* @__PURE__ */ b.createElement("span", {
    className: "rbc-agenda-empty"
  }, y.noEventsInRange));
}
tt.defaultProps = {
  length: 30
};
tt.range = function(e, r) {
  var t = r.length, n = t === void 0 ? tt.defaultProps.length : t, a = r.localizer, i = a.add(e, n, "day");
  return {
    start: e,
    end: i
  };
};
tt.navigate = function(e, r, t) {
  var n = t.length, a = n === void 0 ? tt.defaultProps.length : n, i = t.localizer;
  switch (r) {
    case Pe.PREVIOUS:
      return i.add(e, -a, "day");
    case Pe.NEXT:
      return i.add(e, a, "day");
    default:
      return e;
  }
};
tt.title = function(e, r) {
  var t = r.length, n = t === void 0 ? tt.defaultProps.length : t, a = r.localizer, i = a.add(e, n, "day");
  return a.format({
    start: e,
    end: i
  }, "agendaHeaderFormat");
};
var Cr = ct(ct(ct(ct(ct({}, be.MONTH, vn), be.WEEK, et), be.WORK_WEEK, fr), be.DAY, hn), be.AGENDA, tt), aO = ["action", "date", "today"];
function iO(e, r) {
  var t = r.action, n = r.date, a = r.today, i = He(r, aO);
  switch (e = typeof e == "string" ? Cr[e] : e, t) {
    case Pe.TODAY:
      n = a || /* @__PURE__ */ new Date();
      break;
    case Pe.DATE:
      break;
    default:
      Vt(e && typeof e.navigate == "function", "Calendar View components must implement a static `.navigate(date, action)` method.s"), n = e.navigate(n, t, i);
  }
  return n;
}
var oO = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    var t;
    me(this, r);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return t = Te(this, r, [].concat(a)), t.navigate = function(o) {
      t.props.onNavigate(o);
    }, t.view = function(o) {
      t.props.onView(o);
    }, t;
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.localizer.messages, i = n.label;
      return /* @__PURE__ */ b.createElement("div", {
        className: "rbc-toolbar"
      }, /* @__PURE__ */ b.createElement("span", {
        className: "rbc-btn-group"
      }, /* @__PURE__ */ b.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, Pe.TODAY)
      }, a.today), /* @__PURE__ */ b.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, Pe.PREVIOUS)
      }, a.previous), /* @__PURE__ */ b.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, Pe.NEXT)
      }, a.next)), /* @__PURE__ */ b.createElement("span", {
        className: "rbc-toolbar-label"
      }, i), /* @__PURE__ */ b.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(a)));
    }
  }, {
    key: "viewNamesGroup",
    value: function(n) {
      var a = this, i = this.props.views, o = this.props.view;
      if (i.length > 1)
        return i.map(function(s) {
          return /* @__PURE__ */ b.createElement("button", {
            type: "button",
            key: s,
            className: pe({
              "rbc-active": o === s
            }),
            onClick: a.view.bind(null, s)
          }, n[s]);
        });
    }
  }]), r;
}(b.Component);
function sO(e, r) {
  var t = null;
  return typeof r == "function" ? t = r(e) : typeof r == "string" && qe(e) === "object" && e != null && r in e && (t = e[r]), t;
}
var Je = function(r) {
  return function(t) {
    return sO(t, r);
  };
}, lO = ["view", "date", "getNow", "onNavigate"], cO = ["view", "toolbar", "events", "backgroundEvents", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function hl(e) {
  if (Array.isArray(e))
    return e;
  for (var r = [], t = 0, n = Object.entries(e); t < n.length; t++) {
    var a = Ge(n[t], 2), i = a[0], o = a[1];
    o && r.push(i);
  }
  return r;
}
function uO(e, r) {
  var t = r.views, n = hl(t);
  return n.indexOf(e) !== -1;
}
var pl = /* @__PURE__ */ function(e) {
  Me(r, e);
  function r() {
    var t;
    me(this, r);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return t = Te(this, r, [].concat(a)), t.getViews = function() {
      var o = t.props.views;
      return Array.isArray(o) ? M$(o, function(s, l) {
        return s[l] = Cr[l];
      }, {}) : qe(o) === "object" ? I$(o, function(s, l) {
        return s === !0 ? Cr[l] : s;
      }) : Cr;
    }, t.getView = function() {
      var o = t.getViews();
      return o[t.props.view];
    }, t.getDrilldownView = function(o) {
      var s = t.props, l = s.view, u = s.drilldownView, v = s.getDrilldownView;
      return v ? v(o, l, Object.keys(t.getViews())) : u;
    }, t.handleRangeChange = function(o, s, l) {
      var u = t.props, v = u.onRangeChange, h = u.localizer;
      v && s.range && v(s.range(o, {
        localizer: h
      }), l);
    }, t.handleNavigate = function(o, s) {
      var l = t.props, u = l.view, v = l.date, h = l.getNow, c = l.onNavigate, p = He(l, lO), d = t.getView(), f = h();
      v = iO(d, oe(oe({}, p), {}, {
        action: o,
        date: s || v || f,
        today: f
      })), c(v, u, o), t.handleRangeChange(v, d);
    }, t.handleViewChange = function(o) {
      o !== t.props.view && uO(o, t.props) && t.props.onView(o);
      var s = t.getViews();
      t.handleRangeChange(t.props.date || t.props.getNow(), s[o], o);
    }, t.handleSelectEvent = function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onSelectEvent, s);
    }, t.handleDoubleClickEvent = function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onDoubleClickEvent, s);
    }, t.handleKeyPressEvent = function() {
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      fe(t.props.onKeyPressEvent, s);
    }, t.handleSelectSlot = function(o) {
      fe(t.props.onSelectSlot, o);
    }, t.handleDrillDown = function(o, s) {
      var l = t.props.onDrillDown;
      if (l) {
        l(o, s, t.drilldownView);
        return;
      }
      s && t.handleViewChange(s), t.handleNavigate(Pe.DATE, o);
    }, t.state = {
      context: r.getContext(t.props)
    }, t;
  }
  return ge(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.view, i = n.toolbar, o = n.events, s = n.backgroundEvents, l = n.style, u = n.className, v = n.elementProps, h = n.date, c = n.getNow, p = n.length, d = n.showMultiDayTimes, f = n.onShowMore, m = n.doShowMoreDrillDown;
      n.components, n.formats, n.messages, n.culture;
      var g = He(n, cO);
      h = h || c();
      var S = this.getView(), y = this.state.context, w = y.accessors, _ = y.components, $ = y.getters, M = y.localizer, F = y.viewNames, z = _.toolbar || oO, C = S.title(h, {
        localizer: M,
        length: p
      });
      return /* @__PURE__ */ b.createElement("div", Object.assign({}, v, {
        className: pe(u, "rbc-calendar", g.rtl && "rbc-rtl"),
        style: l
      }), i && /* @__PURE__ */ b.createElement(z, {
        date: h,
        view: a,
        views: F,
        label: C,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: M
      }), /* @__PURE__ */ b.createElement(S, Object.assign({}, g, {
        events: o,
        backgroundEvents: s,
        date: h,
        getNow: c,
        length: p,
        localizer: M,
        getters: $,
        components: _,
        accessors: w,
        showMultiDayTimes: d,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: f,
        doShowMoreDrillDown: m
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n) {
      return {
        context: r.getContext(n)
      };
    }
  }, {
    key: "getContext",
    value: function(n) {
      var a = n.startAccessor, i = n.endAccessor, o = n.allDayAccessor, s = n.tooltipAccessor, l = n.titleAccessor, u = n.resourceAccessor, v = n.resourceIdAccessor, h = n.resourceTitleAccessor, c = n.eventPropGetter, p = n.backgroundEventPropGetter, d = n.slotPropGetter, f = n.slotGroupPropGetter, m = n.dayPropGetter, g = n.view, S = n.views, y = n.localizer, w = n.culture, _ = n.messages, $ = _ === void 0 ? {} : _, M = n.components, F = M === void 0 ? {} : M, z = n.formats, C = z === void 0 ? {} : z, A = hl(S), U = hD($);
      return {
        viewNames: A,
        localizer: dD(y, w, C, U),
        getters: {
          eventProp: function() {
            return c && c.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function() {
            return p && p.apply(void 0, arguments) || {};
          },
          slotProp: function() {
            return d && d.apply(void 0, arguments) || {};
          },
          slotGroupProp: function() {
            return f && f.apply(void 0, arguments) || {};
          },
          dayProp: function() {
            return m && m.apply(void 0, arguments) || {};
          }
        },
        components: p$(F[g] || {}, s$(F, A), {
          eventWrapper: Ye,
          backgroundEventWrapper: Ye,
          eventContainerWrapper: Ye,
          dateCellWrapper: Ye,
          weekWrapper: Ye,
          timeSlotWrapper: Ye,
          timeGutterWrapper: Ye
        }),
        accessors: {
          start: Je(a),
          end: Je(i),
          allDay: Je(o),
          tooltip: Je(s),
          title: Je(l),
          resource: Je(u),
          resourceId: Je(v),
          resourceTitle: Je(h)
        }
      };
    }
  }]), r;
}(b.Component);
pl.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: !1,
  toolbar: !0,
  view: be.MONTH,
  views: [be.MONTH, be.WEEK, be.DAY, be.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: 1 / 0,
  doShowMoreDrillDown: !0,
  drilldownView: be.DAY,
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
var fO = Uo(pl, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
}), dO = function(r, t, n) {
  var a = r.start, i = r.end;
  return n.format(a, "MMMM DD", t) + " – " + // updated to use this localizer 'eq()' method
  n.format(i, n.eq(a, i, "month") ? "DD" : "MMMM DD", t);
}, vO = function(r, t, n) {
  var a = r.start, i = r.end;
  return n.format(a, "L", t) + " – " + n.format(i, "L", t);
}, An = function(r, t, n) {
  var a = r.start, i = r.end;
  return n.format(a, "LT", t) + " – " + n.format(i, "LT", t);
}, hO = function(r, t, n) {
  var a = r.start;
  return n.format(a, "LT", t) + " – ";
}, pO = function(r, t, n) {
  var a = r.end;
  return " – " + n.format(a, "LT", t);
}, mO = {
  dateFormat: "DD",
  dayFormat: "DD ddd",
  weekdayFormat: "ddd",
  selectRangeFormat: An,
  eventTimeRangeFormat: An,
  eventTimeRangeStartFormat: hO,
  eventTimeRangeEndFormat: pO,
  timeGutterFormat: "LT",
  monthHeaderFormat: "MMMM YYYY",
  dayHeaderFormat: "dddd MMM DD",
  dayRangeHeaderFormat: dO,
  agendaHeaderFormat: vO,
  agendaDateFormat: "ddd MMM DD",
  agendaTimeFormat: "LT",
  agendaTimeRangeFormat: An
};
function Qe(e) {
  var r = e && e.toLowerCase();
  return r === "FullYear" ? r = "year" : r || (r = void 0), r;
}
function gO(e) {
  e.extend(N$), e.extend(F$), e.extend(W$), e.extend(U$), e.extend(H$), e.extend(Y$), e.extend(K$);
  var r = function(T, P) {
    return P ? T.locale(P) : T;
  }, t = e.tz ? e.tz : e;
  function n(D) {
    return t(D).toDate().getTimezoneOffset();
  }
  function a(D, T) {
    var P, L = t(D), B = t(T);
    if (!t.tz)
      return L.toDate().getTimezoneOffset() - B.toDate().getTimezoneOffset();
    var Z = (P = L.tz().$x.$timezone) !== null && P !== void 0 ? P : e.tz.guess(), ne = -t.tz(+L, Z).utcOffset(), ee = -t.tz(+B, Z).utcOffset();
    return ne - ee;
  }
  function i(D) {
    var T = t(D).startOf("day");
    return a(T, D);
  }
  function o(D, T, P) {
    var L = Qe(P), B = L ? t(D).startOf(L) : t(D), Z = L ? t(T).startOf(L) : t(T);
    return [B, Z, L];
  }
  function s() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, T = arguments.length > 1 ? arguments[1] : void 0, P = Qe(T);
    return P ? t(D).startOf(P).toDate() : t(D).toDate();
  }
  function l() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, T = arguments.length > 1 ? arguments[1] : void 0, P = Qe(T);
    return P ? t(D).endOf(P).toDate() : t(D).toDate();
  }
  function u(D, T, P) {
    var L = o(D, T, P), B = Ge(L, 3), Z = B[0], ne = B[1], ee = B[2];
    return Z.isSame(ne, ee);
  }
  function v(D, T, P) {
    return !u(D, T, P);
  }
  function h(D, T, P) {
    var L = o(D, T, P), B = Ge(L, 3), Z = B[0], ne = B[1], ee = B[2];
    return Z.isAfter(ne, ee);
  }
  function c(D, T, P) {
    var L = o(D, T, P), B = Ge(L, 3), Z = B[0], ne = B[1], ee = B[2];
    return Z.isBefore(ne, ee);
  }
  function p(D, T, P) {
    var L = o(D, T, P), B = Ge(L, 3), Z = B[0], ne = B[1], ee = B[2];
    return Z.isSameOrBefore(ne, ee);
  }
  function d(D, T, P) {
    var L = o(D, T, P), B = Ge(L, 3), Z = B[0], ne = B[1], ee = B[2];
    return Z.isSameOrBefore(ne, ee);
  }
  function f(D, T, P) {
    var L = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day", B = Qe(L), Z = t(D), ne = t(T), ee = t(P);
    return Z.isBetween(ne, ee, B, "[]");
  }
  function m(D, T) {
    var P = t(D), L = t(T), B = e.min(P, L);
    return B.toDate();
  }
  function g(D, T) {
    var P = t(D), L = t(T), B = e.max(P, L);
    return B.toDate();
  }
  function S(D, T) {
    if (!D && !T)
      return null;
    var P = t(T).format("HH:mm:ss"), L = t(D).startOf("day").format("MM/DD/YYYY");
    return e("".concat(L, " ").concat(P), "MM/DD/YYYY HH:mm:ss").toDate();
  }
  function y(D, T, P) {
    var L = Qe(P);
    return t(D).add(T, L).toDate();
  }
  function w(D, T) {
    for (var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", L = Qe(P), B = t(D).toDate(), Z = []; d(B, T); )
      Z.push(B), B = y(B, 1, L);
    return Z;
  }
  function _(D, T) {
    var P = Qe(T), L = s(D, P);
    return u(L, D) ? L : y(L, 1, P);
  }
  function $(D, T) {
    var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", L = Qe(P), B = t(D), Z = t(T);
    return Z.diff(B, L);
  }
  function M(D) {
    var T = t(D);
    return T.minutes();
  }
  function F(D) {
    var T = D ? e.localeData(D) : e.localeData();
    return T ? T.firstDayOfWeek() : 0;
  }
  function z(D) {
    return t(D).startOf("month").startOf("week").toDate();
  }
  function C(D) {
    return t(D).endOf("month").endOf("week").toDate();
  }
  function A(D) {
    for (var T = z(D), P = C(D), L = []; d(T, P); )
      L.push(T), T = y(T, 1, "d");
    return L;
  }
  function U(D, T, P) {
    return t(D).startOf("day").minute(T + P).toDate();
  }
  function H(D, T) {
    return $(D, T, "minutes");
  }
  function W(D) {
    var T = t(D).startOf("day"), P = t(D);
    return P.diff(T, "minutes") + i(D);
  }
  function x(D, T) {
    var P = t(D), L = t(T);
    return P.isBefore(L, "day");
  }
  function O(D, T, P) {
    var L = t(T), B = t(P);
    return L.isSameOrAfter(B, "minutes");
  }
  function N(D, T) {
    var P = t(D), L = t(T);
    return L.diff(P, "day");
  }
  function k(D) {
    var T = D.evtA, P = T.start, L = T.end, B = T.allDay, Z = D.evtB, ne = Z.start, ee = Z.end, de = Z.allDay, De = +s(P, "day") - +s(ne, "day"), Ce = N(P, L), Le = N(ne, ee);
    return De || // sort by start Day first
    Le - Ce || // events spanning multiple days go first
    !!de - !!B || // then allDay single day events
    +P - +ne || // then sort by start time *don't need dayjs conversion here
    +L - +ee;
  }
  function Y(D) {
    var T = D.event, P = T.start, L = T.end, B = D.range, Z = B.start, ne = B.end, ee = t(P).startOf("day"), de = t(L), De = t(Z), Ce = t(ne), Le = ee.isSameOrBefore(Ce, "day"), ot = !ee.isSame(de, "minutes"), mn = ot ? de.isAfter(De, "minutes") : de.isSameOrAfter(De, "minutes");
    return Le && mn;
  }
  function V(D, T) {
    var P = t(D), L = t(T);
    return P.isSame(L, "day");
  }
  function X() {
    var D = /* @__PURE__ */ new Date(), T = /-/.test(D.toString()) ? "-" : "", P = D.getTimezoneOffset(), L = Number("".concat(T).concat(Math.abs(P))), B = t().utcOffset();
    return B > L ? 1 : 0;
  }
  return new fD({
    formats: mO,
    firstOfWeek: F,
    firstVisibleDay: z,
    lastVisibleDay: C,
    visibleDays: A,
    format: function(T, P, L) {
      return r(t(T), L).format(P);
    },
    lt: c,
    lte: d,
    gt: h,
    gte: p,
    eq: u,
    neq: v,
    merge: S,
    inRange: f,
    startOf: s,
    endOf: l,
    range: w,
    add: y,
    diff: $,
    ceil: _,
    min: m,
    max: g,
    minutes: M,
    getSlotDate: U,
    getTimezoneOffset: n,
    getDstOffset: a,
    getTotalMin: H,
    getMinutesFromMidnight: W,
    continuesPrior: x,
    continuesAfter: O,
    sortEvents: k,
    inEventRange: Y,
    isSameDate: V,
    browserTZOffset: X
  });
}
var ml = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    var t = 1e3, n = 6e4, a = 36e5, i = "millisecond", o = "second", s = "minute", l = "hour", u = "day", v = "week", h = "month", c = "quarter", p = "year", d = "date", f = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
      var x = ["th", "st", "nd", "rd"], O = W % 100;
      return "[" + W + (x[(O - 20) % 10] || x[O] || x[0]) + "]";
    } }, y = function(W, x, O) {
      var N = String(W);
      return !N || N.length >= x ? W : "" + Array(x + 1 - N.length).join(O) + W;
    }, w = { s: y, z: function(W) {
      var x = -W.utcOffset(), O = Math.abs(x), N = Math.floor(O / 60), k = O % 60;
      return (x <= 0 ? "+" : "-") + y(N, 2, "0") + ":" + y(k, 2, "0");
    }, m: function W(x, O) {
      if (x.date() < O.date())
        return -W(O, x);
      var N = 12 * (O.year() - x.year()) + (O.month() - x.month()), k = x.clone().add(N, h), Y = O - k < 0, V = x.clone().add(N + (Y ? -1 : 1), h);
      return +(-(N + (O - k) / (Y ? k - V : V - k)) || 0);
    }, a: function(W) {
      return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
    }, p: function(W) {
      return { M: h, y: p, w: v, d: u, D: d, h: l, m: s, s: o, ms: i, Q: c }[W] || String(W || "").toLowerCase().replace(/s$/, "");
    }, u: function(W) {
      return W === void 0;
    } }, _ = "en", $ = {};
    $[_] = S;
    var M = "$isDayjsObject", F = function(W) {
      return W instanceof U || !(!W || !W[M]);
    }, z = function W(x, O, N) {
      var k;
      if (!x)
        return _;
      if (typeof x == "string") {
        var Y = x.toLowerCase();
        $[Y] && (k = Y), O && ($[Y] = O, k = Y);
        var V = x.split("-");
        if (!k && V.length > 1)
          return W(V[0]);
      } else {
        var X = x.name;
        $[X] = x, k = X;
      }
      return !N && k && (_ = k), k || !N && _;
    }, C = function(W, x) {
      if (F(W))
        return W.clone();
      var O = typeof x == "object" ? x : {};
      return O.date = W, O.args = arguments, new U(O);
    }, A = w;
    A.l = z, A.i = F, A.w = function(W, x) {
      return C(W, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var U = function() {
      function W(O) {
        this.$L = z(O.locale, null, !0), this.parse(O), this.$x = this.$x || O.x || {}, this[M] = !0;
      }
      var x = W.prototype;
      return x.parse = function(O) {
        this.$d = function(N) {
          var k = N.date, Y = N.utc;
          if (k === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(k))
            return /* @__PURE__ */ new Date();
          if (k instanceof Date)
            return new Date(k);
          if (typeof k == "string" && !/Z$/i.test(k)) {
            var V = k.match(m);
            if (V) {
              var X = V[2] - 1 || 0, D = (V[7] || "0").substring(0, 3);
              return Y ? new Date(Date.UTC(V[1], X, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, D)) : new Date(V[1], X, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, D);
            }
          }
          return new Date(k);
        }(O), this.init();
      }, x.init = function() {
        var O = this.$d;
        this.$y = O.getFullYear(), this.$M = O.getMonth(), this.$D = O.getDate(), this.$W = O.getDay(), this.$H = O.getHours(), this.$m = O.getMinutes(), this.$s = O.getSeconds(), this.$ms = O.getMilliseconds();
      }, x.$utils = function() {
        return A;
      }, x.isValid = function() {
        return this.$d.toString() !== f;
      }, x.isSame = function(O, N) {
        var k = C(O);
        return this.startOf(N) <= k && k <= this.endOf(N);
      }, x.isAfter = function(O, N) {
        return C(O) < this.startOf(N);
      }, x.isBefore = function(O, N) {
        return this.endOf(N) < C(O);
      }, x.$g = function(O, N, k) {
        return A.u(O) ? this[N] : this.set(k, O);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(O, N) {
        var k = this, Y = !!A.u(N) || N, V = A.p(O), X = function(ee, de) {
          var De = A.w(k.$u ? Date.UTC(k.$y, de, ee) : new Date(k.$y, de, ee), k);
          return Y ? De : De.endOf(u);
        }, D = function(ee, de) {
          return A.w(k.toDate()[ee].apply(k.toDate("s"), (Y ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(de)), k);
        }, T = this.$W, P = this.$M, L = this.$D, B = "set" + (this.$u ? "UTC" : "");
        switch (V) {
          case p:
            return Y ? X(1, 0) : X(31, 11);
          case h:
            return Y ? X(1, P) : X(0, P + 1);
          case v:
            var Z = this.$locale().weekStart || 0, ne = (T < Z ? T + 7 : T) - Z;
            return X(Y ? L - ne : L + (6 - ne), P);
          case u:
          case d:
            return D(B + "Hours", 0);
          case l:
            return D(B + "Minutes", 1);
          case s:
            return D(B + "Seconds", 2);
          case o:
            return D(B + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(O) {
        return this.startOf(O, !1);
      }, x.$set = function(O, N) {
        var k, Y = A.p(O), V = "set" + (this.$u ? "UTC" : ""), X = (k = {}, k[u] = V + "Date", k[d] = V + "Date", k[h] = V + "Month", k[p] = V + "FullYear", k[l] = V + "Hours", k[s] = V + "Minutes", k[o] = V + "Seconds", k[i] = V + "Milliseconds", k)[Y], D = Y === u ? this.$D + (N - this.$W) : N;
        if (Y === h || Y === p) {
          var T = this.clone().set(d, 1);
          T.$d[X](D), T.init(), this.$d = T.set(d, Math.min(this.$D, T.daysInMonth())).$d;
        } else
          X && this.$d[X](D);
        return this.init(), this;
      }, x.set = function(O, N) {
        return this.clone().$set(O, N);
      }, x.get = function(O) {
        return this[A.p(O)]();
      }, x.add = function(O, N) {
        var k, Y = this;
        O = Number(O);
        var V = A.p(N), X = function(P) {
          var L = C(Y);
          return A.w(L.date(L.date() + Math.round(P * O)), Y);
        };
        if (V === h)
          return this.set(h, this.$M + O);
        if (V === p)
          return this.set(p, this.$y + O);
        if (V === u)
          return X(1);
        if (V === v)
          return X(7);
        var D = (k = {}, k[s] = n, k[l] = a, k[o] = t, k)[V] || 1, T = this.$d.getTime() + O * D;
        return A.w(T, this);
      }, x.subtract = function(O, N) {
        return this.add(-1 * O, N);
      }, x.format = function(O) {
        var N = this, k = this.$locale();
        if (!this.isValid())
          return k.invalidDate || f;
        var Y = O || "YYYY-MM-DDTHH:mm:ssZ", V = A.z(this), X = this.$H, D = this.$m, T = this.$M, P = k.weekdays, L = k.months, B = k.meridiem, Z = function(de, De, Ce, Le) {
          return de && (de[De] || de(N, Y)) || Ce[De].slice(0, Le);
        }, ne = function(de) {
          return A.s(X % 12 || 12, de, "0");
        }, ee = B || function(de, De, Ce) {
          var Le = de < 12 ? "AM" : "PM";
          return Ce ? Le.toLowerCase() : Le;
        };
        return Y.replace(g, function(de, De) {
          return De || function(Ce) {
            switch (Ce) {
              case "YY":
                return String(N.$y).slice(-2);
              case "YYYY":
                return A.s(N.$y, 4, "0");
              case "M":
                return T + 1;
              case "MM":
                return A.s(T + 1, 2, "0");
              case "MMM":
                return Z(k.monthsShort, T, L, 3);
              case "MMMM":
                return Z(L, T);
              case "D":
                return N.$D;
              case "DD":
                return A.s(N.$D, 2, "0");
              case "d":
                return String(N.$W);
              case "dd":
                return Z(k.weekdaysMin, N.$W, P, 2);
              case "ddd":
                return Z(k.weekdaysShort, N.$W, P, 3);
              case "dddd":
                return P[N.$W];
              case "H":
                return String(X);
              case "HH":
                return A.s(X, 2, "0");
              case "h":
                return ne(1);
              case "hh":
                return ne(2);
              case "a":
                return ee(X, D, !0);
              case "A":
                return ee(X, D, !1);
              case "m":
                return String(D);
              case "mm":
                return A.s(D, 2, "0");
              case "s":
                return String(N.$s);
              case "ss":
                return A.s(N.$s, 2, "0");
              case "SSS":
                return A.s(N.$ms, 3, "0");
              case "Z":
                return V;
            }
            return null;
          }(de) || V.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(O, N, k) {
        var Y, V = this, X = A.p(N), D = C(O), T = (D.utcOffset() - this.utcOffset()) * n, P = this - D, L = function() {
          return A.m(V, D);
        };
        switch (X) {
          case p:
            Y = L() / 12;
            break;
          case h:
            Y = L();
            break;
          case c:
            Y = L() / 3;
            break;
          case v:
            Y = (P - T) / 6048e5;
            break;
          case u:
            Y = (P - T) / 864e5;
            break;
          case l:
            Y = P / a;
            break;
          case s:
            Y = P / n;
            break;
          case o:
            Y = P / t;
            break;
          default:
            Y = P;
        }
        return k ? Y : A.a(Y);
      }, x.daysInMonth = function() {
        return this.endOf(h).$D;
      }, x.$locale = function() {
        return $[this.$L];
      }, x.locale = function(O, N) {
        if (!O)
          return this.$L;
        var k = this.clone(), Y = z(O, N, !0);
        return Y && (k.$L = Y), k;
      }, x.clone = function() {
        return A.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, W;
    }(), H = U.prototype;
    return C.prototype = H, [["$ms", i], ["$s", o], ["$m", s], ["$H", l], ["$W", u], ["$M", h], ["$y", p], ["$D", d]].forEach(function(W) {
      H[W[1]] = function(x) {
        return this.$g(x, W[0], W[1]);
      };
    }), C.extend = function(W, x) {
      return W.$i || (W(x, U, C), W.$i = !0), C;
    }, C.locale = z, C.isDayjs = F, C.unix = function(W) {
      return C(1e3 * W);
    }, C.en = $[_], C.Ls = $, C.p = {}, C;
  });
})(ml);
var gl = ml.exports;
const Ke = /* @__PURE__ */ he(gl);
var bl = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(Oe, function() {
    return function(t, n, a) {
      a.updateLocale = function(i, o) {
        var s = a.Ls[i];
        if (s)
          return (o ? Object.keys(o) : []).forEach(function(l) {
            s[l] = o[l];
          }), s;
      };
    };
  });
})(bl);
var bO = bl.exports;
const yO = /* @__PURE__ */ he(bO);
var wO = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n(gl);
  })(Oe, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var a = n(t), i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), o = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), s = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function v(d, f, m) {
      var g, S;
      return m === "m" ? f ? "минута" : "минуту" : d + " " + (g = +d, S = { mm: f ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[m].split("_"), g % 10 == 1 && g % 100 != 11 ? S[0] : g % 10 >= 2 && g % 10 <= 4 && (g % 100 < 10 || g % 100 >= 20) ? S[1] : S[2]);
    }
    var h = function(d, f) {
      return u.test(f) ? i[d.month()] : o[d.month()];
    };
    h.s = o, h.f = i;
    var c = function(d, f) {
      return u.test(f) ? s[d.month()] : l[d.month()];
    };
    c.s = l, c.f = s;
    var p = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: h, monthsShort: c, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: v, mm: v, h: "час", hh: v, d: "день", dd: v, M: "месяц", MM: v, y: "год", yy: v }, ordinal: function(d) {
      return d;
    }, meridiem: function(d) {
      return d < 4 ? "ночи" : d < 12 ? "утра" : d < 17 ? "дня" : "вечера";
    } };
    return a.default.locale(p, null, !0), p;
  });
})(wO);
var j = {}, Qn = { exports: {} };
(function(e, r) {
  (function(t, n) {
    var a = "1.0.37", i = "", o = "?", s = "function", l = "undefined", u = "object", v = "string", h = "major", c = "model", p = "name", d = "type", f = "vendor", m = "version", g = "architecture", S = "console", y = "mobile", w = "tablet", _ = "smarttv", $ = "wearable", M = "embedded", F = 500, z = "Amazon", C = "Apple", A = "ASUS", U = "BlackBerry", H = "Browser", W = "Chrome", x = "Edge", O = "Firefox", N = "Google", k = "Huawei", Y = "LG", V = "Microsoft", X = "Motorola", D = "Opera", T = "Samsung", P = "Sharp", L = "Sony", B = "Xiaomi", Z = "Zebra", ne = "Facebook", ee = "Chromium OS", de = "Mac OS", De = function(Q, re) {
      var q = {};
      for (var se in Q)
        re[se] && re[se].length % 2 === 0 ? q[se] = re[se].concat(Q[se]) : q[se] = Q[se];
      return q;
    }, Ce = function(Q) {
      for (var re = {}, q = 0; q < Q.length; q++)
        re[Q[q].toUpperCase()] = Q[q];
      return re;
    }, Le = function(Q, re) {
      return typeof Q === v ? ot(re).indexOf(ot(Q)) !== -1 : !1;
    }, ot = function(Q) {
      return Q.toLowerCase();
    }, mn = function(Q) {
      return typeof Q === v ? Q.replace(/[^\d\.]/g, i).split(".")[0] : n;
    }, gn = function(Q, re) {
      if (typeof Q === v)
        return Q = Q.replace(/^\s\s*/, i), typeof re === l ? Q : Q.substring(0, F);
    }, Ft = function(Q, re) {
      for (var q = 0, se, Ze, We, te, K, je; q < re.length && !K; ) {
        var yn = re[q], za = re[q + 1];
        for (se = Ze = 0; se < yn.length && !K && yn[se]; )
          if (K = yn[se++].exec(Q), K)
            for (We = 0; We < za.length; We++)
              je = K[++Ze], te = za[We], typeof te === u && te.length > 0 ? te.length === 2 ? typeof te[1] == s ? this[te[0]] = te[1].call(this, je) : this[te[0]] = te[1] : te.length === 3 ? typeof te[1] === s && !(te[1].exec && te[1].test) ? this[te[0]] = je ? te[1].call(this, je, te[2]) : n : this[te[0]] = je ? je.replace(te[1], te[2]) : n : te.length === 4 && (this[te[0]] = je ? te[3].call(this, je.replace(te[1], te[2])) : n) : this[te] = je || n;
        q += 2;
      }
    }, bn = function(Q, re) {
      for (var q in re)
        if (typeof re[q] === u && re[q].length > 0) {
          for (var se = 0; se < re[q].length; se++)
            if (Le(re[q][se], Q))
              return q === o ? n : q;
        } else if (Le(re[q], Q))
          return q === o ? n : q;
      return Q;
    }, gc = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, La = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Fa = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [p, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [p, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [p, m], [/opios[\/ ]+([\w\.]+)/i], [m, [p, D + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [p, D]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [m, [p, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [p, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [p, "UC" + H]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [m, [p, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [p, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [p, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [p, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [m, [p, "Smart Lenovo " + H]], [/(avast|avg)\/([\w\.]+)/i], [[p, /(.+)/, "$1 Secure " + H], m], [/\bfocus\/([\w\.]+)/i], [m, [p, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [p, D + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [p, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [p, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [p, D + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [p, "MIUI " + H]], [/fxios\/([-\w\.]+)/i], [m, [p, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[p, "360 " + H]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[p, /(.+)/, "$1 " + H], m], [/samsungbrowser\/([\w\.]+)/i], [m, [p, T + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[p, /_/g, " "], m], [/metasr[\/ ]?([\d\.]+)/i], [m, [p, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[p, "Sogou Mobile"], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [p, m], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [p], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[p, ne], m], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [p, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [p, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [p, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [p, W + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[p, W + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [p, "Android " + H]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [p, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [p, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, p], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [p, [m, bn, gc]], [/(webkit|khtml)\/([\w\.]+)/i], [p, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[p, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [p, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [p, m], [/(cobalt)\/([\w\.]+)/i], [p, [m, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, ot]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[g, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[g, "armhf"]], [/windows (ce|mobile); ppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[g, /ower/, i, ot]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[g, ot]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [f, T], [d, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [f, T], [d, y]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [f, C], [d, y]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [f, C], [d, w]], [/(macintosh);/i], [c, [f, C]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [f, P], [d, y]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [f, k], [d, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [f, k], [d, y]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [f, B], [d, y]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [f, B], [d, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [f, "OPPO"], [d, y]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [f, "Vivo"], [d, y]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [f, "Realme"], [d, y]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [f, X], [d, y]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [f, X], [d, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [f, Y], [d, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [f, Y], [d, y]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [f, "Lenovo"], [d, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [f, "Nokia"], [d, y]], [/(pixel c)\b/i], [c, [f, N], [d, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [f, N], [d, y]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [f, L], [d, y]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [f, L], [d, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [f, "OnePlus"], [d, y]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [f, z], [d, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [f, z], [d, y]], [/(playbook);[-\w\),; ]+(rim)/i], [c, f, [d, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [f, U], [d, y]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [f, A], [d, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [f, A], [d, y]], [/(nexus 9)/i], [c, [f, "HTC"], [d, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [f, [c, /_/g, " "], [d, y]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [f, "Acer"], [d, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [f, "Meizu"], [d, y]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [f, "Ulefone"], [d, y]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [f, c, [d, y]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [f, c, [d, w]], [/(surface duo)/i], [c, [f, V], [d, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [f, "Fairphone"], [d, y]], [/(u304aa)/i], [c, [f, "AT&T"], [d, y]], [/\bsie-(\w*)/i], [c, [f, "Siemens"], [d, y]], [/\b(rct\w+) b/i], [c, [f, "RCA"], [d, w]], [/\b(venue[\d ]{2,7}) b/i], [c, [f, "Dell"], [d, w]], [/\b(q(?:mv|ta)\w+) b/i], [c, [f, "Verizon"], [d, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [f, "Barnes & Noble"], [d, w]], [/\b(tm\d{3}\w+) b/i], [c, [f, "NuVision"], [d, w]], [/\b(k88) b/i], [c, [f, "ZTE"], [d, w]], [/\b(nx\d{3}j) b/i], [c, [f, "ZTE"], [d, y]], [/\b(gen\d{3}) b.+49h/i], [c, [f, "Swiss"], [d, y]], [/\b(zur\d{3}) b/i], [c, [f, "Swiss"], [d, w]], [/\b((zeki)?tb.*\b) b/i], [c, [f, "Zeki"], [d, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[f, "Dragon Touch"], c, [d, w]], [/\b(ns-?\w{0,9}) b/i], [c, [f, "Insignia"], [d, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [f, "NextBook"], [d, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[f, "Voice"], c, [d, y]], [/\b(lvtel\-)?(v1[12]) b/i], [[f, "LvTel"], c, [d, y]], [/\b(ph-1) /i], [c, [f, "Essential"], [d, y]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [f, "Envizen"], [d, w]], [/\b(trio[-\w\. ]+) b/i], [c, [f, "MachSpeed"], [d, w]], [/\btu_(1491) b/i], [c, [f, "Rotor"], [d, w]], [/(shield[\w ]+) b/i], [c, [f, "Nvidia"], [d, w]], [/(sprint) (\w+)/i], [f, c, [d, y]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [f, V], [d, y]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [f, Z], [d, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [f, Z], [d, y]], [/smart-tv.+(samsung)/i], [f, [d, _]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [f, T], [d, _]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[f, Y], [d, _]], [/(apple) ?tv/i], [f, [c, C + " TV"], [d, _]], [/crkey/i], [[c, W + "cast"], [f, N], [d, _]], [/droid.+aft(\w+)( bui|\))/i], [c, [f, z], [d, _]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [f, P], [d, _]], [/(bravia[\w ]+)( bui|\))/i], [c, [f, L], [d, _]], [/(mitv-\w{5}) bui/i], [c, [f, B], [d, _]], [/Hbbtv.*(technisat) (.*);/i], [f, c, [d, _]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[f, gn], [c, gn], [d, _]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, _]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [f, c, [d, S]], [/droid.+; (shield) bui/i], [c, [f, "Nvidia"], [d, S]], [/(playstation [345portablevi]+)/i], [c, [f, L], [d, S]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [f, V], [d, S]], [/((pebble))app/i], [f, c, [d, $]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [f, C], [d, $]], [/droid.+; (glass) \d/i], [c, [f, N], [d, $]], [/droid.+; (wt63?0{2,3})\)/i], [c, [f, Z], [d, $]], [/(quest( 2| pro)?)/i], [c, [f, ne], [d, $]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [f, [d, M]], [/(aeobc)\b/i], [c, [f, z], [d, M]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [d, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, y]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [f, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [p, x + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [p, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [p, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, p]], os: [[/microsoft (windows) (vista|xp)/i], [p, m], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [p, [m, bn, La]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, bn, La], [p, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [p, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[p, de], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, p], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [p, m], [/\(bb(10);/i], [m, [p, U]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [p, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [p, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [p, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [p, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [p, W + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[p, ee], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [p, m], [/(sunos) ?([\w\.\d]*)/i], [[p, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [p, m]] }, Fe = function(Q, re) {
      if (typeof Q === u && (re = Q, Q = n), !(this instanceof Fe))
        return new Fe(Q, re).getResult();
      var q = typeof t !== l && t.navigator ? t.navigator : n, se = Q || (q && q.userAgent ? q.userAgent : i), Ze = q && q.userAgentData ? q.userAgentData : n, We = re ? De(Fa, re) : Fa, te = q && q.userAgent == se;
      return this.getBrowser = function() {
        var K = {};
        return K[p] = n, K[m] = n, Ft.call(K, se, We.browser), K[h] = mn(K[m]), te && q && q.brave && typeof q.brave.isBrave == s && (K[p] = "Brave"), K;
      }, this.getCPU = function() {
        var K = {};
        return K[g] = n, Ft.call(K, se, We.cpu), K;
      }, this.getDevice = function() {
        var K = {};
        return K[f] = n, K[c] = n, K[d] = n, Ft.call(K, se, We.device), te && !K[d] && Ze && Ze.mobile && (K[d] = y), te && K[c] == "Macintosh" && q && typeof q.standalone !== l && q.maxTouchPoints && q.maxTouchPoints > 2 && (K[c] = "iPad", K[d] = w), K;
      }, this.getEngine = function() {
        var K = {};
        return K[p] = n, K[m] = n, Ft.call(K, se, We.engine), K;
      }, this.getOS = function() {
        var K = {};
        return K[p] = n, K[m] = n, Ft.call(K, se, We.os), te && !K[p] && Ze && Ze.platform != "Unknown" && (K[p] = Ze.platform.replace(/chrome os/i, ee).replace(/macos/i, de)), K;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return se;
      }, this.setUA = function(K) {
        return se = typeof K === v && K.length > F ? gn(K, F) : K, this;
      }, this.setUA(se), this;
    };
    Fe.VERSION = a, Fe.BROWSER = Ce([p, m, h]), Fe.CPU = Ce([g]), Fe.DEVICE = Ce([c, f, d, S, y, _, w, $, M]), Fe.ENGINE = Fe.OS = Ce([p, m]), e.exports && (r = e.exports = Fe), r.UAParser = Fe;
    var bt = typeof t !== l && (t.jQuery || t.Zepto);
    if (bt && !bt.ua) {
      var hr = new Fe();
      bt.ua = hr.getResult(), bt.ua.get = function() {
        return hr.getUA();
      }, bt.ua.set = function(Q) {
        hr.setUA(Q);
        var re = hr.getResult();
        for (var q in re)
          bt.ua[q] = re[q];
      };
    }
  })(typeof window == "object" ? window : Oe);
})(Qn, Qn.exports);
var SO = Qn.exports;
Object.defineProperty(j, "__esModule", { value: !0 });
function EO(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var _e = I, ce = EO(_e), yl = SO, at = new yl(), $e = at.getBrowser(), _O = at.getCPU(), Ie = at.getDevice(), Ia = at.getEngine(), it = at.getOS(), dr = at.getUA(), wl = function(r) {
  return at.setUA(r);
}, vr = function(r) {
  if (!r) {
    console.error("No userAgent string was provided");
    return;
  }
  var t = new yl(r);
  return {
    UA: t,
    browser: t.getBrowser(),
    cpu: t.getCPU(),
    device: t.getDevice(),
    engine: t.getEngine(),
    os: t.getOS(),
    ua: t.getUA(),
    setUserAgent: function(a) {
      return t.setUA(a);
    }
  };
}, Sl = /* @__PURE__ */ Object.freeze({
  ClientUAInstance: at,
  browser: $e,
  cpu: _O,
  device: Ie,
  engine: Ia,
  os: it,
  ua: dr,
  setUa: wl,
  parseUserAgent: vr
});
function ho(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function $O(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ho(Object(t), !0).forEach(function(n) {
      TO(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ho(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Ht(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(r) {
    return typeof r;
  } : Ht = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ht(e);
}
function DO(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function po(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function OO(e, r, t) {
  return r && po(e.prototype, r), t && po(e, t), e;
}
function TO(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ea() {
  return ea = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ea.apply(this, arguments);
}
function MO(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), r && ra(e, r);
}
function ta(e) {
  return ta = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ta(e);
}
function ra(e, r) {
  return ra = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ra(e, r);
}
function CO(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function Ne(e, r) {
  if (e == null)
    return {};
  var t = CO(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Ar(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function AO(e, r) {
  if (r && (typeof r == "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ar(e);
}
function xO(e, r) {
  return PO(e) || RO(e, r) || IO(e, r) || kO();
}
function PO(e) {
  if (Array.isArray(e))
    return e;
}
function RO(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, o, s;
    try {
      for (t = t.call(e); !(a = (o = t.next()).done) && (n.push(o.value), !(r && n.length === r)); a = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function IO(e, r) {
  if (e) {
    if (typeof e == "string")
      return mo(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return mo(e, r);
  }
}
function mo(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function kO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ee = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
}, Re = {
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: "IE",
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: "Samsung Browser"
}, Lt = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
}, NO = {
  isMobile: !1,
  isTablet: !1,
  isBrowser: !1,
  isSmartTV: !1,
  isConsole: !1,
  isWearable: !1
}, LO = function(r) {
  switch (r) {
    case Ee.Mobile:
      return {
        isMobile: !0
      };
    case Ee.Tablet:
      return {
        isTablet: !0
      };
    case Ee.SmartTv:
      return {
        isSmartTV: !0
      };
    case Ee.Console:
      return {
        isConsole: !0
      };
    case Ee.Wearable:
      return {
        isWearable: !0
      };
    case Ee.Browser:
      return {
        isBrowser: !0
      };
    case Ee.Embedded:
      return {
        isEmbedded: !0
      };
    default:
      return NO;
  }
}, FO = function(r) {
  return wl(r);
}, G = function(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return r || t;
}, ka = function() {
  return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
}, Na = function(r) {
  var t = ka();
  return t && t.platform && (t.platform.indexOf(r) !== -1 || t.platform === "MacIntel" && t.maxTouchPoints > 1 && !window.MSStream);
}, zO = function(r, t, n, a, i) {
  return {
    isBrowser: r,
    browserMajorVersion: G(t.major),
    browserFullVersion: G(t.version),
    browserName: G(t.name),
    engineName: G(n.name),
    engineVersion: G(n.version),
    osName: G(a.name),
    osVersion: G(a.version),
    userAgent: G(i)
  };
}, go = function(r, t, n, a) {
  return $O({}, r, {
    vendor: G(t.vendor),
    model: G(t.model),
    os: G(n.name),
    osVersion: G(n.version),
    ua: G(a)
  });
}, WO = function(r, t, n, a) {
  return {
    isSmartTV: r,
    engineName: G(t.name),
    engineVersion: G(t.version),
    osName: G(n.name),
    osVersion: G(n.version),
    userAgent: G(a)
  };
}, jO = function(r, t, n, a) {
  return {
    isConsole: r,
    engineName: G(t.name),
    engineVersion: G(t.version),
    osName: G(n.name),
    osVersion: G(n.version),
    userAgent: G(a)
  };
}, UO = function(r, t, n, a) {
  return {
    isWearable: r,
    engineName: G(t.name),
    engineVersion: G(t.version),
    osName: G(n.name),
    osVersion: G(n.version),
    userAgent: G(a)
  };
}, BO = function(r, t, n, a, i) {
  return {
    isEmbedded: r,
    vendor: G(t.vendor),
    model: G(t.model),
    engineName: G(n.name),
    engineVersion: G(n.version),
    osName: G(a.name),
    osVersion: G(a.version),
    userAgent: G(i)
  };
};
function HO(e) {
  var r = e ? vr(e) : Sl, t = r.device, n = r.browser, a = r.engine, i = r.os, o = r.ua, s = LO(t.type), l = s.isBrowser, u = s.isMobile, v = s.isTablet, h = s.isSmartTV, c = s.isConsole, p = s.isWearable, d = s.isEmbedded;
  if (l)
    return zO(l, n, a, i, o);
  if (h)
    return WO(h, a, i, o);
  if (c)
    return jO(c, a, i, o);
  if (u || v)
    return go(s, t, i, o);
  if (p)
    return UO(p, a, i, o);
  if (d)
    return BO(d, t, a, i, o);
}
var El = function(r) {
  var t = r.type;
  return t === Ee.Mobile;
}, _l = function(r) {
  var t = r.type;
  return t === Ee.Tablet;
}, $l = function(r) {
  var t = r.type;
  return t === Ee.Mobile || t === Ee.Tablet;
}, Dl = function(r) {
  var t = r.type;
  return t === Ee.SmartTv;
}, Ur = function(r) {
  var t = r.type;
  return t === Ee.Browser;
}, Ol = function(r) {
  var t = r.type;
  return t === Ee.Wearable;
}, Tl = function(r) {
  var t = r.type;
  return t === Ee.Console;
}, Ml = function(r) {
  var t = r.type;
  return t === Ee.Embedded;
}, Cl = function(r) {
  var t = r.vendor;
  return G(t);
}, Al = function(r) {
  var t = r.model;
  return G(t);
}, xl = function(r) {
  var t = r.type;
  return G(t, "browser");
}, Pl = function(r) {
  var t = r.name;
  return t === Lt.Android;
}, Rl = function(r) {
  var t = r.name;
  return t === Lt.Windows;
}, Il = function(r) {
  var t = r.name;
  return t === Lt.MAC_OS;
}, kl = function(r) {
  var t = r.name;
  return t === Lt.WindowsPhone;
}, Nl = function(r) {
  var t = r.name;
  return t === Lt.IOS;
}, Ll = function(r) {
  var t = r.version;
  return G(t);
}, Fl = function(r) {
  var t = r.name;
  return G(t);
}, zl = function(r) {
  var t = r.name;
  return t === Re.Chrome;
}, Wl = function(r) {
  var t = r.name;
  return t === Re.Firefox;
}, jl = function(r) {
  var t = r.name;
  return t === Re.Chromium;
}, Br = function(r) {
  var t = r.name;
  return t === Re.Edge;
}, Ul = function(r) {
  var t = r.name;
  return t === Re.Yandex;
}, Bl = function(r) {
  var t = r.name;
  return t === Re.Safari || t === Re.MobileSafari;
}, Hl = function(r) {
  var t = r.name;
  return t === Re.MobileSafari;
}, Vl = function(r) {
  var t = r.name;
  return t === Re.Opera;
}, Yl = function(r) {
  var t = r.name;
  return t === Re.InternetExplorer || t === Re.Ie;
}, Gl = function(r) {
  var t = r.name;
  return t === Re.MIUI;
}, Kl = function(r) {
  var t = r.name;
  return t === Re.SamsungBrowser;
}, ql = function(r) {
  var t = r.version;
  return G(t);
}, Xl = function(r) {
  var t = r.major;
  return G(t);
}, Zl = function(r) {
  var t = r.name;
  return G(t);
}, Jl = function(r) {
  var t = r.name;
  return G(t);
}, Ql = function(r) {
  var t = r.version;
  return G(t);
}, ec = function() {
  var r = ka(), t = r && r.userAgent && r.userAgent.toLowerCase();
  return typeof t == "string" ? /electron/.test(t) : !1;
}, Et = function(r) {
  return typeof r == "string" && r.indexOf("Edg/") !== -1;
}, tc = function() {
  var r = ka();
  return r && (/iPad|iPhone|iPod/.test(r.platform) || r.platform === "MacIntel" && r.maxTouchPoints > 1) && !window.MSStream;
}, Be = function() {
  return Na("iPad");
}, rc = function() {
  return Na("iPhone");
}, nc = function() {
  return Na("iPod");
}, ac = function(r) {
  return G(r);
};
function ic(e) {
  var r = e || Sl, t = r.device, n = r.browser, a = r.os, i = r.engine, o = r.ua;
  return {
    isSmartTV: Dl(t),
    isConsole: Tl(t),
    isWearable: Ol(t),
    isEmbedded: Ml(t),
    isMobileSafari: Hl(n) || Be(),
    isChromium: jl(n),
    isMobile: $l(t) || Be(),
    isMobileOnly: El(t),
    isTablet: _l(t) || Be(),
    isBrowser: Ur(t),
    isDesktop: Ur(t),
    isAndroid: Pl(a),
    isWinPhone: kl(a),
    isIOS: Nl(a) || Be(),
    isChrome: zl(n),
    isFirefox: Wl(n),
    isSafari: Bl(n),
    isOpera: Vl(n),
    isIE: Yl(n),
    osVersion: Ll(a),
    osName: Fl(a),
    fullBrowserVersion: ql(n),
    browserVersion: Xl(n),
    browserName: Zl(n),
    mobileVendor: Cl(t),
    mobileModel: Al(t),
    engineName: Jl(i),
    engineVersion: Ql(i),
    getUA: ac(o),
    isEdge: Br(n) || Et(o),
    isYandex: Ul(n),
    deviceType: xl(t),
    isIOS13: tc(),
    isIPad13: Be(),
    isIPhone13: rc(),
    isIPod13: nc(),
    isElectron: ec(),
    isEdgeChromium: Et(o),
    isLegacyEdge: Br(n) && !Et(o),
    isWindows: Rl(a),
    isMacOs: Il(a),
    isMIUI: Gl(n),
    isSamsungBrowser: Kl(n)
  };
}
var oc = Dl(Ie), sc = Tl(Ie), lc = Ol(Ie), VO = Ml(Ie), YO = Hl($e) || Be(), GO = jl($e), pn = $l(Ie) || Be(), cc = El(Ie), uc = _l(Ie) || Be(), fc = Ur(Ie), KO = Ur(Ie), dc = Pl(it), vc = kl(it), hc = Nl(it) || Be(), qO = zl($e), XO = Wl($e), ZO = Bl($e), JO = Vl($e), pc = Yl($e), QO = Ll(it), eT = Fl(it), tT = ql($e), rT = Xl($e), nT = Zl($e), aT = Cl(Ie), iT = Al(Ie), oT = Jl(Ia), sT = Ql(Ia), lT = ac(dr), cT = Br($e) || Et(dr), uT = Ul($e), fT = xl(Ie), dT = tc(), vT = Be(), hT = rc(), pT = nc(), mT = ec(), gT = Et(dr), bT = Br($e) && !Et(dr), yT = Rl(it), wT = Il(it), ST = Gl($e), ET = Kl($e), _T = function(r) {
  if (!r || typeof r != "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var t = vr(r), n = t.device, a = t.browser, i = t.os, o = t.engine, s = t.ua;
  return ic({
    device: n,
    browser: a,
    os: i,
    engine: o,
    ua: s
  });
}, $T = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return dc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, DT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return fc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, OT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return pc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, TT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return hc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, MT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return pn ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, CT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return uc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, AT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return vc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, xT = function(r) {
  var t = r.renderWithFragment, n = r.children;
  r.viewClassName, r.style;
  var a = Ne(r, ["renderWithFragment", "children", "viewClassName", "style"]);
  return cc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, PT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return oc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, RT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return sc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, IT = function(r) {
  var t = r.renderWithFragment, n = r.children, a = Ne(r, ["renderWithFragment", "children"]);
  return lc ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", a, n) : null;
}, kT = function(r) {
  var t = r.renderWithFragment, n = r.children;
  r.viewClassName, r.style;
  var a = r.condition, i = Ne(r, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return a ? t ? ce.createElement(_e.Fragment, null, n) : ce.createElement("div", i, n) : null;
};
function NT(e) {
  return /* @__PURE__ */ function(r) {
    MO(t, r);
    function t(n) {
      var a;
      return DO(this, t), a = AO(this, ta(t).call(this, n)), a.isEventListenerAdded = !1, a.handleOrientationChange = a.handleOrientationChange.bind(Ar(a)), a.onOrientationChange = a.onOrientationChange.bind(Ar(a)), a.onPageLoad = a.onPageLoad.bind(Ar(a)), a.state = {
        isLandscape: !1,
        isPortrait: !1
      }, a;
    }
    return OO(t, [{
      key: "handleOrientationChange",
      value: function() {
        this.isEventListenerAdded || (this.isEventListenerAdded = !0);
        var a = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: a === 0,
          isLandscape: a === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function() {
        (typeof window > "u" ? "undefined" : Ht(window)) !== void 0 && pn && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("resize", this.onOrientationChange, !1);
      }
    }, {
      key: "render",
      value: function() {
        return ce.createElement(e, ea({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]), t;
  }(ce.Component);
}
function LT() {
  var e = _e.useState(function() {
    var i = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: i === 0,
      isLandscape: i === 90,
      orientation: i === 0 ? "portrait" : "landscape"
    };
  }), r = xO(e, 2), t = r[0], n = r[1], a = _e.useCallback(function() {
    var i = window.innerWidth > window.innerHeight ? 90 : 0, o = {
      isPortrait: i === 0,
      isLandscape: i === 90,
      orientation: i === 0 ? "portrait" : "landscape"
    };
    t.orientation !== o.orientation && n(o);
  }, [t.orientation]);
  return _e.useEffect(function() {
    return (typeof window > "u" ? "undefined" : Ht(window)) !== void 0 && pn && (a(), window.addEventListener("load", a, !1), window.addEventListener("resize", a, !1)), function() {
      window.removeEventListener("resize", a, !1), window.removeEventListener("load", a, !1);
    };
  }, [a]), t;
}
function mc(e) {
  var r = e || window.navigator.userAgent;
  return vr(r);
}
function FT(e) {
  var r = e || window.navigator.userAgent, t = mc(r), n = ic(t);
  return [n, t];
}
j.AndroidView = $T;
j.BrowserTypes = Re;
j.BrowserView = DT;
j.ConsoleView = RT;
j.CustomView = kT;
j.IEView = OT;
j.IOSView = TT;
j.MobileOnlyView = xT;
j.MobileView = MT;
j.OsTypes = Lt;
j.SmartTVView = PT;
j.TabletView = CT;
j.WearableView = IT;
j.WinPhoneView = AT;
j.browserName = nT;
j.browserVersion = rT;
j.deviceDetect = HO;
j.deviceType = fT;
j.engineName = oT;
j.engineVersion = sT;
j.fullBrowserVersion = tT;
j.getSelectorsByUserAgent = _T;
j.getUA = lT;
j.isAndroid = dc;
j.isBrowser = fc;
j.isChrome = qO;
j.isChromium = GO;
j.isConsole = sc;
j.isDesktop = KO;
j.isEdge = cT;
j.isEdgeChromium = gT;
j.isElectron = mT;
j.isEmbedded = VO;
j.isFirefox = XO;
j.isIE = pc;
j.isIOS = hc;
j.isIOS13 = dT;
j.isIPad13 = vT;
j.isIPhone13 = hT;
j.isIPod13 = pT;
j.isLegacyEdge = bT;
j.isMIUI = ST;
j.isMacOs = wT;
var zT = j.isMobile = pn;
j.isMobileOnly = cc;
j.isMobileSafari = YO;
j.isOpera = JO;
j.isSafari = ZO;
j.isSamsungBrowser = ET;
j.isSmartTV = oc;
j.isTablet = uc;
j.isWearable = lc;
j.isWinPhone = vc;
j.isWindows = yT;
j.isYandex = uT;
j.mobileModel = iT;
j.mobileVendor = aT;
j.osName = eT;
j.osVersion = QO;
j.parseUserAgent = vr;
j.setUserAgent = FO;
j.useDeviceData = mc;
j.useDeviceSelectors = FT;
j.useMobileOrientation = LT;
j.withOrientationChange = NT;
const WT = () => Uc("only screen and (max-width : 640px)") || zT;
Ke.extend(yO);
Ke.locale("ru");
Ke.updateLocale("ru", {
  weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_")
});
const jT = gO(Ke), bo = (e) => e.charAt(0).toUpperCase() + e.slice(1), UT = {
  monthHeaderFormat: (e, r, t) => bo(t.format(e, "MMMM YYYY", r)),
  dayFormat: (e, r, t) => t.format(e, "D", r).toUpperCase(),
  weekdayFormat: (e, r, t) => t.format(e, "dd", r).toUpperCase(),
  dayRangeHeaderFormat: ({
    start: e,
    end: r
  }, t, n) => bo(n.format(e, "MMMM D", t)) + " - " + n.format(r, "D", t)
  // agendaDateFormat
  // agendaHeaderFormat
}, BT = {
  today: "Сегодня",
  week: "Неделя",
  day: "День",
  month: "Месяц",
  work_week: "Рабочая неделя",
  agenda: "Список",
  previous: "<",
  next: ">",
  noEventsInRange: "В эти даты раписание пусто",
  date: "Дата",
  time: "Время",
  event: "Название"
}, HT = () => {
  const {
    query: e
  } = I.useContext(Ot), [r, t] = I.useState(/* @__PURE__ */ new Date()), [n, a] = I.useState(null), i = WT(), o = I.useMemo(() => ({
    calendar: 1,
    startDate: Ke(r).startOf("month").toISOString(),
    endDate: Ke(r).startOf("month").add(1, "month").toISOString(),
    uid: e.data.data.id
  }), [r]), {
    data: s
  } = Vr("/api/attendance/get-teacher-dates", {
    params: o,
    enabled: e.isSuccess
  }), l = I.useMemo(() => (s == null ? void 0 : s.data.map(({
    title: u,
    startDate: v,
    endDate: h,
    group_id: c
  }) => ({
    title: u,
    start: Ke(v).toDate(),
    end: Ke(h).toDate(),
    resource: {
      group_id: c,
      eventId: `${u}-${v}-${h}-${c}`,
      selectedEventId: n == null ? void 0 : n.resource.eventId,
      setSelectedEvent: a
    }
  }))) || [], [s == null ? void 0 : s.data]);
  return /* @__PURE__ */ E(fO, { events: l, localizer: jT, views: i ? ["month", "week", "agenda"] : ["month", "week"], defaultView: i ? be.AGENDA : be.MONTH, messages: BT, formats: UT, onNavigate: t, onSelectEvent: a, components: {
    eventWrapper: YT,
    month: {
      event: VT
    },
    agenda: {
      event: GT
    }
  }, selected: n });
}, VT = (e) => /* @__PURE__ */ E("div", { className: "custom-event-title", children: `${Ke(e.event.start).format("HH:mm")} ${e.title}` }), YT = (e) => {
  var s, l, u;
  const {
    event: r,
    selected: t,
    children: n
  } = e, a = I.useRef(null), i = Do(() => {
    t && r.resource.eventId !== r.resource.selectedEventId && r.resource.setSelectedEvent(null);
  }), {
    data: o
  } = Vr("/api/rest/eventGroups/" + (r == null ? void 0 : r.resource.group_id), {
    params: {
      format: "mini"
    },
    enabled: !!(r != null && r.resource.group_id)
  });
  return /* @__PURE__ */ xe(na, { children: [
    /* @__PURE__ */ E("div", { id: r.resource.eventId, ref: a, children: n }),
    /* @__PURE__ */ E($o, { open: t, anchorEl: a.current, placement: "bottom-start", ref: i, tw: "z-10", children: /* @__PURE__ */ E(_o, { sx: {
      border: 1,
      p: 1,
      bgcolor: "background.paper"
    }, children: /* @__PURE__ */ E(Yr, { header: `Группа: #${(s = o == null ? void 0 : o.data[0]) == null ? void 0 : s.id}`, children: /* @__PURE__ */ xe("div", { children: [
      /* @__PURE__ */ E("p", { children: (l = o == null ? void 0 : o.data[0]) == null ? void 0 : l.name }),
      /* @__PURE__ */ E("p", { children: (u = o == null ? void 0 : o.data[0]) == null ? void 0 : u.teacher })
    ] }) }) }) })
  ] });
}, GT = ({
  event: e,
  title: r
}) => {
  var u, v, h;
  const [t, n] = I.useState(!1), a = I.useRef(null), i = Do(() => {
    l();
  }), {
    data: o
  } = Vr("/api/rest/eventGroups/" + (e == null ? void 0 : e.resource.group_id), {
    params: {
      format: "mini"
    },
    enabled: !!(e != null && e.resource.group_id)
  }), s = () => n(!0), l = () => n(!1);
  return /* @__PURE__ */ xe(na, { children: [
    /* @__PURE__ */ E($o, { open: t, anchorEl: a.current, placement: "bottom-start", ref: i, tw: "z-10", children: /* @__PURE__ */ E(_o, { sx: {
      border: 1,
      p: 1,
      bgcolor: "background.paper"
    }, children: /* @__PURE__ */ E(Yr, { header: `Группа: #${(u = o == null ? void 0 : o.data[0]) == null ? void 0 : u.id}`, children: /* @__PURE__ */ xe("div", { children: [
      /* @__PURE__ */ E("p", { children: (v = o == null ? void 0 : o.data[0]) == null ? void 0 : v.name }),
      /* @__PURE__ */ E("p", { children: (h = o == null ? void 0 : o.data[0]) == null ? void 0 : h.teacher })
    ] }) }) }) }),
    /* @__PURE__ */ E("div", { ref: a, children: /* @__PURE__ */ E(Hr, { itemType: "link", onClick: s, children: r }) })
  ] });
}, yo = [{
  id: "main",
  title: "Основные",
  content: (e) => /* @__PURE__ */ E(Kc, { form: e })
}, {
  id: "addit",
  title: "Дополнительно",
  content: (e) => /* @__PURE__ */ E(qc, { form: e })
}, {
  id: "photo",
  title: "Фото",
  content: (e) => /* @__PURE__ */ E(Ou, { form: e })
}, {
  id: "achievments",
  title: "Достижения",
  content: (e) => /* @__PURE__ */ E(Xc, { form: e })
}, {
  id: "cal",
  title: "Календарь",
  content: () => /* @__PURE__ */ E(HT, {})
}], KT = () => {
  var o;
  const {
    setTitle: e
  } = Hc(), {
    query: r,
    mutation: t,
    formInstance: n
  } = b.useContext(Ot), a = I.useCallback((s) => {
    var l;
    return /* @__PURE__ */ E(qT, { children: n ? (l = yo[s]) == null ? void 0 : l.content(n) : null });
  }, [n]), i = (o = r == null ? void 0 : r.data) == null ? void 0 : o.data.fio;
  return I.useEffect(() => {
    i && e(i);
  }, [i]), /* @__PURE__ */ E(Yr, { fit: !0, footer: /* @__PURE__ */ E(Hr, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", onClick: n == null ? void 0 : n.submit, disabled: t == null ? void 0 : t.isPending, isLoading: t == null ? void 0 : t.isPending, children: "Сохранить" }), children: /* @__PURE__ */ E(Gc, { tabs: yo, tabComponentRenderer: a, css: {
    display: "flex",
    height: "100%"
  } }) });
}, qT = ({
  children: e
}) => {
  var n;
  const {
    query: r
  } = b.useContext(Ot), t = (n = r == null ? void 0 : r.data) == null ? void 0 : n.data.id;
  return r != null && r.isLoading ? /* @__PURE__ */ E(wo, { spinning: !0 }) : /* @__PURE__ */ E("div", { css: {
    width: "100%",
    flex: "1 1 0%",
    overflow: "auto",
    padding: "1rem",
    "@media (min-width: 768px)": {
      padding: "1.5rem"
    }
  }, children: t ? /* @__PURE__ */ E(XT, { id: t, children: e }) : null });
}, XT = ({
  children: e,
  id: r
}) => {
  var s;
  const {
    query: t,
    setMutation: n,
    setFormInstance: a
  } = b.useContext(Ot), i = Jc(r);
  I.useEffect(() => {
    n(i);
  }, []), I.useEffect(() => {
    a(o);
  }, []);
  const o = Bc({
    mutation: i,
    schema: Oo,
    defaultValues: (s = t == null ? void 0 : t.data) == null ? void 0 : s.data
  });
  return e;
}, lM = () => /* @__PURE__ */ E(Qc, { children: /* @__PURE__ */ E(KT, {}) });
export {
  lM as default
};
