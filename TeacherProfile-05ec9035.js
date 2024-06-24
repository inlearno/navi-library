import { b as be, j as w, Q as Qt, F as vn, S as So, I as _s } from "./library-75cbf1f9.js";
import { r as I, R as g, g as oe, d as me, b as _o } from "./react-bd6781bd.js";
import { u as $s, B as ur, a as Es, b as $o } from "./faEye-a5fee5cd.js";
import { u as Ds, b as fr, a as dr } from "./DictionaryCell-7121ea48.js";
import { P } from "./icons-56df5d3c.js";
import { C as Ms } from "./Tabs-e390a8db.js";
import { a as q, T as qe, i as Os, b as dt, Q as Cs, P as Ts, D as Xe, h as Yn, F as hr, c as Yt, N as As, u as xs } from "./Phone-727e8dce.js";
import { D as ht, g as Z, A as Ps, _ as vr, i as Eo, k as Rs, l as Is, m as ae, p as Ns, o as ks, q as Ls, r as zs, s as Fs, v as Ws, w as js, x as Hs, y as Us, z as Bs, C as Ys, F as Gs, a as Ks, H as Do, P as Mo } from "./mui-51f6b52b.js";
import { u as Vs } from "./useWindowController-e2e7f944.js";
import { u as qs } from "./useResetHttpQueryCache-19a9ec55.js";
import { z as G } from "./index-d0beacff.js";
import { M as Xs } from "./ModalWindow-65156458.js";
import "./faChevronDown-dd97b173.js";
const Zs = ({
  form: e
}) => {
  const r = e.watch("is_part_time_position");
  return /* @__PURE__ */ be(hr, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ w(ht, { css: {
      marginBottom: "1rem"
    }, children: "Личные данные" }),
    /* @__PURE__ */ be(Z, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ w(Z, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "last_name", render: ({
        field: t
      }) => /* @__PURE__ */ w(qe, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите фамилию", label: "Фамилия" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "first_name", render: ({
        field: t
      }) => /* @__PURE__ */ w(qe, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите имя", label: "Имя" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "patro_name", render: ({
        field: t
      }) => /* @__PURE__ */ w(qe, { css: {
        width: "100%"
      }, ...t, placeholder: "Введите отчество", label: "Отчество" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, lg: 4, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "sex", render: ({
        field: t
      }) => /* @__PURE__ */ w(Os, { ...t, displayField: "name", label: "Пол", options: [{
        id: "M",
        name: "Мужской"
      }, {
        id: "W",
        name: "Женский"
      }] }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, lg: 8, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "birthday", render: ({
        field: t
      }) => /* @__PURE__ */ w(dt, { label: "Дата рождения", placeholder: "Выберите дату рождения", ...t }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "birth_place", render: ({
        field: t
      }) => /* @__PURE__ */ w(qe, { ...t, placeholder: "Введите место рождения", label: "Место рождения" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "citizenship", render: ({
        field: t
      }) => /* @__PURE__ */ w(Cs, { ...t, url: "api/rest/countries", displayField: "full_name", placeholder: "Выберите страну гражданства" }) }) })
    ] }),
    /* @__PURE__ */ w(ht, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Контакты" }),
    /* @__PURE__ */ be(Z, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ w(Z, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "email", render: ({
        field: t
      }) => /* @__PURE__ */ w(qe, { ...t, placeholder: "Введите адрес эл. почты", label: "Адрес электронной почты" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, lg: 6, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "phone", render: ({
        field: t
      }) => /* @__PURE__ */ w(Ts, { ...t, showMask: !0, placeholder: "Введите телефон", label: "Телефон" }) }) })
    ] }),
    /* @__PURE__ */ w(ht, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Трудовая деятельность" }),
    /* @__PURE__ */ be(Z, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "position_id", render: ({
        field: t
      }) => /* @__PURE__ */ w(Xe, { ...t, label: "Должность", placeholder: "Выберите должность", dictionary: "inventoryPositions" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "employment_id", render: ({
        field: t
      }) => /* @__PURE__ */ w(Xe, { ...t, label: "Занятость в организации", placeholder: "Выберите занятость", dictionary: "inventoryEmployment" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ w(q, { control: e.control, name: "is_part_time_position", render: ({
        field: t
      }) => /* @__PURE__ */ w(Yn, { ...t, label: "Внештатная должность" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, lg: 6, children: r ? /* @__PURE__ */ w(q, { control: e.control, name: "position", render: ({
        field: t
      }) => /* @__PURE__ */ w(qe, { ...t, placeholder: "Введите должность", label: "Должность по основному месту работу" }) }) : null }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ w(q, { control: e.control, name: "employment_date", render: ({
        field: t
      }) => /* @__PURE__ */ w(dt, { label: "Дата начала стажа", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ w(q, { control: e.control, name: "date_experience_start", render: ({
        field: t
      }) => /* @__PURE__ */ w(dt, { label: "Дата приема на работу", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ w(q, { control: e.control, name: "date_start_work_fkis", render: ({
        field: t
      }) => /* @__PURE__ */ w(dt, { label: "Дата начала работы в сфере ФКиС", placeholder: "Выберите дату", ...t }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, lg: 6, children: /* @__PURE__ */ w(q, { control: e.control, name: "dismissal_date", render: ({
        field: t
      }) => /* @__PURE__ */ w(dt, { label: "Дата увольнения", placeholder: "Выберите дату", ...t }) }) })
    ] }),
    /* @__PURE__ */ w(ht, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Образование" }),
    /* @__PURE__ */ be(Z, { container: !0, spacing: 2, children: [
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "education", render: ({
        field: t
      }) => /* @__PURE__ */ w(Xe, { ...t, value: t.value, multiple: !0, label: "Образование", placeholder: "Выберите образование", dictionary: "inventoryExpertEducation" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "eduction_direction_id", render: ({
        field: t
      }) => /* @__PURE__ */ w(Xe, { ...t, label: "Направление образования", placeholder: "Выберите направление", dictionary: "inventoryEducationDirections" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "qualification_id", render: ({
        field: t
      }) => /* @__PURE__ */ w(Xe, { ...t, label: "Квалификация", placeholder: "Выберите квалификацию", dictionary: "inventoryExpertQualifications" }) }) }),
      /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "degree", render: ({
        field: t
      }) => /* @__PURE__ */ w(Yn, { ...t, label: "Наличие ученой степени" }) }) })
    ] }),
    /* @__PURE__ */ w(ht, { css: {
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }, children: "Доступность" }),
    /* @__PURE__ */ w(Z, { container: !0, spacing: 2, children: /* @__PURE__ */ w(Z, { item: !0, xs: 12, children: /* @__PURE__ */ w(q, { control: e.control, name: "expert_status_dict_id", render: ({
      field: t
    }) => /* @__PURE__ */ w(Xe, { ...t, label: "Статус", placeholder: "Выберите статус", dictionary: "inventoryExpertStatus" }) }) }) })
  ] });
}, Js = ({
  form: e
}) => /* @__PURE__ */ be(hr, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: e, children: [
  /* @__PURE__ */ w(q, { control: e.control, name: "subject_interest_area_comment", render: ({
    field: r
  }) => /* @__PURE__ */ w(Yt, { label: "Комментарий к предметной области интересов", placeholder: "Введите комментарий...", ...r }) }),
  /* @__PURE__ */ w(q, { control: e.control, name: "competencies", render: ({
    field: r
  }) => /* @__PURE__ */ w(Yt, { label: "Ключевые компетенции", placeholder: "Введите текст...", ...r }) }),
  /* @__PURE__ */ w(q, { control: e.control, name: "free_hours", render: ({
    field: r
  }) => /* @__PURE__ */ w(As, { label: "Количество часов в неделю", placeholder: "Введите количество часов", ...r }) }),
  /* @__PURE__ */ w(q, { control: e.control, name: "educational_opportunities", render: ({
    field: r
  }) => /* @__PURE__ */ w(Yt, { label: "Краткое описание возможностей", placeholder: "Введите описание...", ...r }) })
] }), Qs = ({
  form: e
}) => /* @__PURE__ */ w(hr, { css: {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
}, form: e, children: /* @__PURE__ */ w(q, { control: e.control, name: "progress", render: ({
  field: r
}) => /* @__PURE__ */ w(Yt, { placeholder: "Опишите свои достижения...", ...r }) }) }), el = () => {
  const e = Ds(), [r, t] = I.useState(!1), [n, a] = I.useState(null), [o, i] = I.useState(null), [s, l] = I.useState({
    w: 0,
    h: 0,
    cw: 0,
    ch: 0,
    l: 0,
    t: 0
  }), c = I.useCallback(async () => {
    t(!0);
    const u = new FormData();
    u.append("file", n), u.append("croppedInfo", JSON.stringify(s)), u.append("scale", "1");
    try {
      const {
        data: f
      } = await e.postForm("/api/images/upload/inventoryExpert/image", u);
      a(null), i(f.data);
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
    requestCropImage: c,
    data: o
  };
}, tl = (e) => {
  const r = qs();
  return $s("PUT", `/api/rest/inventoryExpert/${e}`, {
    onError: (n) => {
      var a, o;
      n.response && n.response.status === 400 || Qt.error(/* @__PURE__ */ be("div", { children: [
        /* @__PURE__ */ w("div", { tw: "font-medium", children: "Ошибка сервера" }),
        /* @__PURE__ */ w("div", { tw: "p-1 text-xs", children: ((o = (a = n.response) == null ? void 0 : a.data) == null ? void 0 : o.message) || n.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      });
    },
    onSuccess: () => {
      Qt.success("Успешно сохранено", {
        position: "top-center"
      }), r("/api/teacher/profile");
    }
  });
}, tt = g.createContext(null), rl = ({
  children: e
}) => {
  const r = fr("/api/teacher/profile"), [t, n] = g.useState(null), [a, o] = g.useState(null);
  return /* @__PURE__ */ w(tt.Provider, { value: {
    formInstance: t,
    mutation: a,
    setFormInstance: n,
    setMutation: o,
    query: r
  }, children: e });
}, Oo = G.object({
  id: G.string().uuid(),
  last_name: G.string().min(1, " "),
  first_name: G.string().min(1, " "),
  patro_name: G.string().nullable(),
  sex: G.union([G.literal("M"), G.literal("W")]),
  birthday: G.string(),
  birth_place: G.string().nullable(),
  citizenship: G.coerce.number().min(1, " "),
  // "185",
  email: G.string().email("Неверный формат эл. почты").min(1, " "),
  phone: G.string().nullable(),
  // "+7 (111) 111-11-11",
  position_id: G.coerce.number().min(1, "Выберите должность"),
  // "7",
  employment_id: G.coerce.number().min(1, "Выберите занятость"),
  is_part_time_position: G.boolean(),
  position: G.string().min(4, " ").nullable(),
  employment_date: G.string(),
  date_experience_start: G.string(),
  date_start_work_fkis: G.string().nullable(),
  dismissal_date: G.string().nullable(),
  education: G.array(G.coerce.number()),
  eduction_direction_id: G.coerce.number().nullable(),
  // "4",
  qualification_id: G.coerce.number().min(1, " "),
  degree: G.boolean().nullable(),
  expert_status_dict_id: G.coerce.number().min(1, " "),
  /** Дополнительно */
  subject_interest_area_comment: G.string().nullable(),
  competencies: G.string().nullable(),
  free_hours: G.coerce.number().min(1, " "),
  // "37.00",
  educational_opportunities: G.string().min(1, " "),
  /* Достижения */
  progress: G.string().nullable(),
  /* Фото */
  image: G.optional(G.string()),
  image_id: G.optional(G.string()),
  croppedInfo: G.optional(G.string()),
  scale: G.optional(G.number()),
  fio: G.string().readonly()
});
G.object({
  data: G.array(Oo)
});
var Co = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", t = "image", n = 512, a = 512, o = [], i = "f03e", s = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";
  e.definition = {
    prefix: r,
    iconName: t,
    icon: [
      n,
      a,
      o,
      i,
      s
    ]
  }, e.faImage = e.definition, e.prefix = r, e.iconName = t, e.width = n, e.height = a, e.ligatures = o, e.unicode = i, e.svgPathData = s, e.aliases = o;
})(Co);
const nl = ({
  onFileChange: e,
  children: r = "Загрузить файл",
  ...t
}) => {
  const n = I.useRef(null);
  return /* @__PURE__ */ be(vn, { children: [
    /* @__PURE__ */ w("input", { type: "file", id: "file", name: "file", ref: n, style: {
      display: "none"
    }, accept: "image/*", onChange: (i) => {
      var s, l;
      e && ((l = (s = i == null ? void 0 : i.target) == null ? void 0 : s.files) != null && l.length) && e(i.target.files[0]);
    } }),
    /* @__PURE__ */ w(ur, { variant: "contained", color: "success", onClick: () => {
      var i;
      (i = n == null ? void 0 : n.current) == null || i.click();
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
var Yr = function(e, r) {
  return Yr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
  }, Yr(e, r);
};
function al(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Yr(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var de = function() {
  return de = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    }
    return r;
  }, de.apply(this, arguments);
}, Gn = !1, Fe, Gr, Kr, Gt, Kt, To, Vt, Vr, qr, Xr, Ao, Zr, Jr, xo, Po;
function pe() {
  if (!Gn) {
    Gn = !0;
    var e = navigator.userAgent, r = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), t = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Zr = /\b(iPhone|iP[ao]d)/.exec(e), Jr = /\b(iP[ao]d)/.exec(e), Xr = /Android/i.exec(e), xo = /FBAN\/\w+;/i.exec(e), Po = /Mobile/i.exec(e), Ao = !!/Win64/.exec(e), r) {
      Fe = r[1] ? parseFloat(r[1]) : r[5] ? parseFloat(r[5]) : NaN, Fe && document && document.documentMode && (Fe = document.documentMode);
      var n = /(?:Trident\/(\d+.\d+))/.exec(e);
      To = n ? parseFloat(n[1]) + 4 : Fe, Gr = r[2] ? parseFloat(r[2]) : NaN, Kr = r[3] ? parseFloat(r[3]) : NaN, Gt = r[4] ? parseFloat(r[4]) : NaN, Gt ? (r = /(?:Chrome\/(\d+\.\d+))/.exec(e), Kt = r && r[1] ? parseFloat(r[1]) : NaN) : Kt = NaN;
    } else
      Fe = Gr = Kr = Kt = Gt = NaN;
    if (t) {
      if (t[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Vt = a ? parseFloat(a[1].replace("_", ".")) : !0;
      } else
        Vt = !1;
      Vr = !!t[2], qr = !!t[3];
    } else
      Vt = Vr = qr = !1;
  }
}
var Qr = {
  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return pe() || Fe;
  },
  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return pe() || To > Fe;
  },
  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return Qr.ie() && Ao;
  },
  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return pe() || Gr;
  },
  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return pe() || Kr;
  },
  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return pe() || Gt;
  },
  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return Qr.webkit();
  },
  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome: function() {
    return pe() || Kt;
  },
  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return pe() || Vr;
  },
  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return pe() || Vt;
  },
  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return pe() || qr;
  },
  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return pe() || Zr;
  },
  mobile: function() {
    return pe() || Zr || Jr || Xr || Po;
  },
  nativeApp: function() {
    return pe() || xo;
  },
  android: function() {
    return pe() || Xr;
  },
  ipad: function() {
    return pe() || Jr;
  }
}, ol = Qr, zt = !!(typeof window < "u" && window.document && window.document.createElement), il = {
  canUseDOM: zt,
  canUseWorkers: typeof Worker < "u",
  canUseEventListeners: zt && !!(window.addEventListener || window.attachEvent),
  canUseViewport: zt && !!window.screen,
  isInWorker: !zt
  // For now, this is true - might change in the future.
}, sl = il, Ro = sl, Io;
Ro.canUseDOM && (Io = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
function ll(e, r) {
  if (!Ro.canUseDOM || r && !("addEventListener" in document))
    return !1;
  var t = "on" + e, n = t in document;
  if (!n) {
    var a = document.createElement("div");
    a.setAttribute(t, "return;"), n = typeof a[t] == "function";
  }
  return !n && Io && e === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
}
var cl = ll, ul = ol, fl = cl, Kn = 10, Vn = 40, qn = 800;
function No(e) {
  var r = 0, t = 0, n = 0, a = 0;
  return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (r = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (r = t, t = 0), n = r * Kn, a = t * Kn, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || a) && e.deltaMode && (e.deltaMode == 1 ? (n *= Vn, a *= Vn) : (n *= qn, a *= qn)), n && !r && (r = n < 1 ? -1 : 1), a && !t && (t = a < 1 ? -1 : 1), {
    spinX: r,
    spinY: t,
    pixelX: n,
    pixelY: a
  };
}
No.getEventType = function() {
  return ul.firefox() ? "DOMMouseScroll" : fl("wheel") ? "wheel" : "mousewheel";
};
var dl = No, hl = dl;
const vl = /* @__PURE__ */ oe(hl);
function pl(e, r, t, n, a, o) {
  o === void 0 && (o = 0);
  var i = Je(e, r, o), s = i.width, l = i.height, c = Math.min(s, t), u = Math.min(l, n);
  return c > u * a ? {
    width: u * a,
    height: u
  } : {
    width: c,
    height: c / a
  };
}
function ml(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Ft(e, r, t, n, a) {
  a === void 0 && (a = 0);
  var o = Je(r.width, r.height, a), i = o.width, s = o.height;
  return {
    x: Xn(e.x, i, t.width, n),
    y: Xn(e.y, s, t.height, n)
  };
}
function Xn(e, r, t, n) {
  var a = r * n / 2 - t / 2;
  return pr(e, -a, a);
}
function Zn(e, r) {
  return Math.sqrt(Math.pow(e.y - r.y, 2) + Math.pow(e.x - r.x, 2));
}
function Jn(e, r) {
  return Math.atan2(r.y - e.y, r.x - e.x) * 180 / Math.PI;
}
function gl(e, r, t, n, a, o, i) {
  o === void 0 && (o = 0), i === void 0 && (i = !0);
  var s = i ? yl : bl, l = Je(r.width, r.height, o), c = Je(r.naturalWidth, r.naturalHeight, o), u = {
    x: s(100, ((l.width - t.width / a) / 2 - e.x / a) / l.width * 100),
    y: s(100, ((l.height - t.height / a) / 2 - e.y / a) / l.height * 100),
    width: s(100, t.width / l.width * 100 / a),
    height: s(100, t.height / l.height * 100 / a)
  }, f = Math.round(s(c.width, u.width * c.width / 100)), d = Math.round(s(c.height, u.height * c.height / 100)), p = c.width >= c.height * n, v = p ? {
    width: Math.round(d * n),
    height: d
  } : {
    width: f,
    height: Math.round(f / n)
  }, h = de(de({}, v), {
    x: Math.round(s(c.width - v.width, u.x * c.width / 100)),
    y: Math.round(s(c.height - v.height, u.y * c.height / 100))
  });
  return {
    croppedAreaPercentages: u,
    croppedAreaPixels: h
  };
}
function yl(e, r) {
  return Math.min(e, Math.max(0, r));
}
function bl(e, r) {
  return r;
}
function wl(e, r, t, n, a, o) {
  var i = Je(r.width, r.height, t), s = pr(n.width / i.width * (100 / e.width), a, o), l = {
    x: s * i.width / 2 - n.width / 2 - i.width * s * (e.x / 100),
    y: s * i.height / 2 - n.height / 2 - i.height * s * (e.y / 100)
  };
  return {
    crop: l,
    zoom: s
  };
}
function Sl(e, r, t) {
  var n = ml(r);
  return t.height > t.width ? t.height / (e.height * n) : t.width / (e.width * n);
}
function _l(e, r, t, n, a, o) {
  t === void 0 && (t = 0);
  var i = Je(r.naturalWidth, r.naturalHeight, t), s = pr(Sl(e, r, n), a, o), l = n.height > n.width ? n.height / e.height : n.width / e.width, c = {
    x: ((i.width - e.width) / 2 - e.x) * l,
    y: ((i.height - e.height) / 2 - e.y) * l
  };
  return {
    crop: c,
    zoom: s
  };
}
function Qn(e, r) {
  return {
    x: (r.x + e.x) / 2,
    y: (r.y + e.y) / 2
  };
}
function $l(e) {
  return e * Math.PI / 180;
}
function Je(e, r, t) {
  var n = $l(t);
  return {
    width: Math.abs(Math.cos(n) * e) + Math.abs(Math.sin(n) * r),
    height: Math.abs(Math.sin(n) * e) + Math.abs(Math.cos(n) * r)
  };
}
function pr(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function Wt() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var El = `.reactEasyCrop_Container {
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
`, Dl = 1, Ml = 3, Ol = (
  /** @class */
  function(e) {
    al(r, e);
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
          var a = wl(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, n, t.props.minZoom, t.props.maxZoom), o = a.crop, i = a.zoom;
          t.props.onCropChange(o), t.props.onZoomChange && t.props.onZoomChange(i);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = _l(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, n, t.props.minZoom, t.props.maxZoom), o = s.crop, i = s.zoom;
          t.props.onCropChange(o), t.props.onZoomChange && t.props.onZoomChange(i);
        }
      }, t.computeSizes = function() {
        var n, a, o, i, s, l, c = t.imageRef.current || t.videoRef.current;
        if (c && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var u = t.containerRect.width / t.containerRect.height, f = ((n = t.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoWidth) || 0, d = ((o = t.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = t.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = c.offsetWidth < f || c.offsetHeight < d, v = f / d, h = void 0;
          if (p)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                h = u > v ? {
                  width: t.containerRect.height * v,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / v
                };
                break;
              case "horizontal-cover":
                h = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / v
                };
                break;
              case "vertical-cover":
                h = {
                  width: t.containerRect.height * v,
                  height: t.containerRect.height
                };
                break;
            }
          else
            h = {
              width: c.offsetWidth,
              height: c.offsetHeight
            };
          t.mediaSize = de(de({}, h), {
            naturalWidth: f,
            naturalHeight: d
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var m = t.props.cropSize ? t.props.cropSize : pl(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
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
          var a = r.getMousePoint(n), o = t.gestureZoomStart - 1 + n.scale;
          if (t.setNewZoom(o, a, {
            shouldUpdatePosition: !0
          }), t.props.onRotationChange) {
            var i = t.gestureRotationStart + n.rotation;
            t.props.onRotationChange(i);
          }
        }
      }, t.onGestureEnd = function(n) {
        t.cleanEvents();
      }, t.onDragStart = function(n) {
        var a, o, i = n.x, s = n.y;
        t.dragStartPosition = {
          x: i,
          y: s
        }, t.dragStartCrop = de({}, t.props.crop), (o = (a = t.props).onInteractionStart) === null || o === void 0 || o.call(a);
      }, t.onDrag = function(n) {
        var a = n.x, o = n.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(a === void 0 || o === void 0)) {
            var i = a - t.dragStartPosition.x, s = o - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + i,
              y: t.dragStartCrop.y + s
            }, c = t.props.restrictPosition ? Ft(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(c);
          }
        }));
      }, t.onDragStopped = function() {
        var n, a;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (a = (n = t.props).onInteractionEnd) === null || a === void 0 || a.call(n);
      }, t.onWheel = function(n) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(n))) {
          n.preventDefault();
          var a = r.getMousePoint(n), o = vl(n).pixelY, i = t.props.zoom - o * t.props.zoomSpeed / 200;
          t.setNewZoom(i, a, {
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
        var o = n.x, i = n.y;
        if (!t.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: t.containerRect.width / 2 - (o - a.x),
          y: t.containerRect.height / 2 - (i - a.y)
        };
      }, t.getPointOnMedia = function(n) {
        var a = n.x, o = n.y, i = t.props, s = i.crop, l = i.zoom;
        return {
          x: (a + s.x) / l,
          y: (o + s.y) / l
        };
      }, t.setNewZoom = function(n, a, o) {
        var i = o === void 0 ? {} : o, s = i.shouldUpdatePosition, l = s === void 0 ? !0 : s;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var c = pr(n, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var u = t.getPointOnContainer(a, t.containerPosition), f = t.getPointOnMedia(u), d = {
              x: f.x * c - u.x,
              y: f.y * c - u.y
            }, p = t.props.restrictPosition ? Ft(d, t.mediaSize, t.state.cropSize, c, t.props.rotation) : d;
            t.props.onCropChange(p);
          }
          t.props.onZoomChange(c);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var n = t.props.restrictPosition ? Ft(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return gl(n, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
      }, t.emitCropData = function() {
        var n = t.getCropData();
        if (n) {
          var a = n.croppedAreaPercentages, o = n.croppedAreaPixels;
          t.props.onCropComplete && t.props.onCropComplete(a, o), t.props.onCropAreaChange && t.props.onCropAreaChange(a, o);
        }
      }, t.emitCropAreaChange = function() {
        var n = t.getCropData();
        if (n) {
          var a = n.croppedAreaPercentages, o = n.croppedAreaPixels;
          t.props.onCropAreaChange && t.props.onCropAreaChange(a, o);
        }
      }, t.recomputeCropPosition = function() {
        if (t.state.cropSize) {
          var n = t.props.restrictPosition ? Ft(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
          t.props.onCropChange(n), t.emitCropData();
        }
      }, t;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = El, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef));
    }, r.prototype.componentWillUnmount = function() {
      var t, n;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((n = this.styleRef.parentNode) === null || n === void 0 || n.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(t) {
      var n, a, o, i, s, l, c, u, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((n = t.cropSize) === null || n === void 0 ? void 0 : n.height) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.height) || ((o = t.cropSize) === null || o === void 0 ? void 0 : o.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((c = t.crop) === null || c === void 0 ? void 0 : c.y) !== ((u = this.props.crop) === null || u === void 0 ? void 0 : u.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((f = this.videoRef.current) === null || f === void 0 || f.load());
      var d = this.getObjectFit();
      d !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: d
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var t = this.props, n = t.cropSize, a = t.aspect;
      return n ? n.width / n.height : a;
    }, r.prototype.getObjectFit = function() {
      var t, n, a, o;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, l = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((n = this.videoRef.current) === null || n === void 0 ? void 0 : n.videoWidth) || 0, c = ((a = this.imageRef.current) === null || a === void 0 ? void 0 : a.naturalHeight) || ((o = this.videoRef.current) === null || o === void 0 ? void 0 : o.videoHeight) || 0, u = l / c;
          return u < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(t) {
      var n = r.getTouchPoint(t.touches[0]), a = r.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = Zn(n, a), this.lastPinchRotation = Jn(n, a), this.onDragStart(Qn(n, a));
    }, r.prototype.onPinchMove = function(t) {
      var n = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var a = r.getTouchPoint(t.touches[0]), o = r.getTouchPoint(t.touches[1]), i = Qn(a, o);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = Zn(a, o), l = n.props.zoom * (s / n.lastPinchDistance);
          n.setNewZoom(l, i, {
            shouldUpdatePosition: !1
          }), n.lastPinchDistance = s;
          var c = Jn(a, o), u = n.props.rotation + (c - n.lastPinchRotation);
          n.props.onRotationChange && n.props.onRotationChange(u), n.lastPinchRotation = c;
        });
      }
    }, r.prototype.render = function() {
      var t = this, n = this.props, a = n.image, o = n.video, i = n.mediaProps, s = n.transform, l = n.crop, c = l.x, u = l.y, f = n.rotation, d = n.zoom, p = n.cropShape, v = n.showGrid, h = n.style, m = h.containerStyle, y = h.cropAreaStyle, b = h.mediaStyle, S = n.classes, _ = S.containerClassName, $ = S.cropAreaClassName, D = S.mediaClassName, C = this.state.mediaObjectFit;
      return I.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(F) {
          return t.containerRef = F;
        },
        "data-testid": "container",
        style: m,
        className: Wt("reactEasyCrop_Container", _)
      }, a ? I.createElement("img", de({
        alt: "",
        className: Wt("reactEasyCrop_Image", C === "contain" && "reactEasyCrop_Contain", C === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", C === "vertical-cover" && "reactEasyCrop_Cover_Vertical", D)
      }, i, {
        src: a,
        ref: this.imageRef,
        style: de(de({}, b), {
          transform: s || "translate(".concat(c, "px, ").concat(u, "px) rotate(").concat(f, "deg) scale(").concat(d, ")")
        }),
        onLoad: this.onMediaLoad
      })) : o && I.createElement("video", de({
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: Wt("reactEasyCrop_Video", C === "contain" && "reactEasyCrop_Contain", C === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", C === "vertical-cover" && "reactEasyCrop_Cover_Vertical", D)
      }, i, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: de(de({}, b), {
          transform: s || "translate(".concat(c, "px, ").concat(u, "px) rotate(").concat(f, "deg) scale(").concat(d, ")")
        }),
        controls: !1
      }), (Array.isArray(o) ? o : [{
        src: o
      }]).map(function(L) {
        return I.createElement("source", de({
          key: L.src
        }, L));
      })), this.state.cropSize && I.createElement("div", {
        style: de(de({}, y), {
          width: this.state.cropSize.width,
          height: this.state.cropSize.height
        }),
        "data-testid": "cropper",
        className: Wt("reactEasyCrop_CropArea", p === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", $)
      }));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Ml,
      minZoom: Dl,
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
const Cl = 3 / 4, Tl = ({
  form: e
}) => {
  const {
    file: r,
    data: t,
    setFile: n,
    imageIsLoading: a,
    croppedInfo: o,
    setCroppedInfo: i,
    requestCropImage: s
  } = el(), {
    query: l
  } = I.useContext(tt);
  return I.useEffect(() => {
    var c;
    t && (e.setValue("image", t.original), e.setValue("image_id", t.id), e.setValue("id", (c = l.data) == null ? void 0 : c.data.id), e.setValue("scale", 1), e.setValue("croppedInfo", JSON.stringify(o)));
  }, [t]), /* @__PURE__ */ be("div", { css: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    gap: "0.75rem"
  }, children: [
    /* @__PURE__ */ w(Ps, { severity: "warning", children: "Размер картинки не менее 120х160 пикселей и не более 1 Мб" }),
    /* @__PURE__ */ w(Al, { file: r, setFile: n, setCroppedInfo: i, requestCropImage: s, isUploading: a }),
    a ? /* @__PURE__ */ w("div", { css: {
      width: "100%",
      flex: "1 1 0%",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ w(So, { spinning: !0 }) }) : e.getValues("image") && !r ? /* @__PURE__ */ w(hr, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: e, children: /* @__PURE__ */ w(q, { control: e.control, name: "image", render: ({
      field: c
    }) => {
      var u;
      return /* @__PURE__ */ w("img", { src: (u = c.value) == null ? void 0 : u.replace("_little", ""), alt: "teacher-profile-picture", width: 240, height: 320 });
    } }) }) : null,
    r ? null : /* @__PURE__ */ w(nl, { onFileChange: n, css: {
      width: "fit-content"
    }, icon: Co.faImage, children: "Загрузить картинку" })
  ] });
}, Al = ({
  file: e,
  setFile: r,
  setCroppedInfo: t,
  requestCropImage: n,
  isUploading: a
}) => {
  const [o, i] = I.useState(""), [s, l] = I.useState({
    width: 0,
    height: 0
  }), [c, u] = I.useState({
    x: 0,
    y: 0
  }), [f, d] = I.useState(1);
  I.useEffect(() => {
    let v = !1;
    if (i(""), e)
      if (e.size > 1048576)
        v = !0, r(null), Qt.error("Размер файла превышает 1 Мб", {
          position: "top-center"
        });
      else {
        const h = new FileReader();
        h.onloadend = () => {
          const m = new Image();
          m.onload = () => {
            m.width < 120 || m.height < 160 ? (v = !0, r(null), Qt.error("Размер картинки не соответствует требованиям", {
              position: "top-center"
            })) : l({
              width: m.width,
              height: m.height
            });
          };
          const y = h == null ? void 0 : h.result;
          v || (m.src = y, i(y));
        }, h.readAsDataURL(e);
      }
  }, [e]);
  const p = I.useCallback((v, h) => t({
    w: h.width,
    h: h.height,
    cw: s.width,
    ch: s.height,
    l: h.x,
    t: h.y
  }), []);
  return /* @__PURE__ */ w(Xs, { open: !!e, title: "Обрезка картинки (с зумом)", width: 600, height: 600, onClose: () => r(null), children: /* @__PURE__ */ w(dr, { fit: !0, footer: /* @__PURE__ */ w(ur, { css: {
    marginLeft: "auto"
  }, variant: "contained", isLoading: a, onClick: n, children: "Сохранить" }), children: /* @__PURE__ */ w("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center"
  }, children: /* @__PURE__ */ w("div", { css: {
    position: "relative",
    height: "300px",
    width: "100%",
    maxWidth: "100%"
  }, children: /* @__PURE__ */ w(Ol, { image: o, crop: c, onCropChange: u, aspect: Cl, zoom: f, onZoomChange: d, onCropComplete: p }) }) }) }) });
};
function Te(e) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Te(e);
}
function xl(e, r) {
  if (Te(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (Te(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function ko(e) {
  var r = xl(e, "string");
  return Te(r) == "symbol" ? r : String(r);
}
function We(e, r, t) {
  return r = ko(r), r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ea(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function J(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ea(Object(t), !0).forEach(function(n) {
      We(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function $e(e, r) {
  if (e == null)
    return {};
  var t = vr(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function se(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function ta(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ko(n.key), n);
  }
}
function le(e, r, t) {
  return r && ta(e.prototype, r), t && ta(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function er(e) {
  return er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, er(e);
}
function Lo() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lo = function() {
    return !!e;
  })();
}
function Pl(e, r) {
  if (r && (Te(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Eo(e);
}
function he(e, r, t) {
  return r = er(r), Pl(e, Lo() ? Reflect.construct(r, t || [], er(e).constructor) : r.apply(e, t));
}
function ve(e, r) {
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
  }), r && Rs(e, r);
}
function zo(e) {
  if (Array.isArray(e))
    return e;
}
function Rl(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t)
          return;
        l = !1;
      } else
        for (; !(l = (n = o.call(t)).done) && (s.push(n.value), s.length !== r); l = !0)
          ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!l && t.return != null && (i = t.return(), Object(i) !== i))
          return;
      } finally {
        if (c)
          throw a;
      }
    }
    return s;
  }
}
function en(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function pn(e, r) {
  if (e) {
    if (typeof e == "string")
      return en(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return en(e, r);
  }
}
function Fo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oe(e, r) {
  return zo(e) || Rl(e, r) || pn(e, r) || Fo();
}
var Il = function(e, r, t, n, a, o, i, s) {
  if (!e) {
    var l;
    if (r === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var c = [t, n, a, o, i, s], u = 0;
      l = new Error(
        r.replace(/%s/g, function() {
          return c[u++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Nl = Il;
const gt = /* @__PURE__ */ oe(Nl);
var kl = function() {
};
function Ll(e, r) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    t[qt(n)] = kl;
  }), t;
}
function ra(e, r) {
  return e[r] !== void 0;
}
function qt(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function zl(e) {
  return !!e && (typeof e != "function" || e.prototype && e.prototype.isReactComponent);
}
function Wo() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function jo(e) {
  function r(t) {
    var n = this.constructor.getDerivedStateFromProps(e, t);
    return n ?? null;
  }
  this.setState(r.bind(this));
}
function Ho(e, r) {
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
Wo.__suppressDeprecationWarning = !0;
jo.__suppressDeprecationWarning = !0;
Ho.__suppressDeprecationWarning = !0;
function Fl(e) {
  var r = e.prototype;
  if (!r || !r.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function")
    return e;
  var t = null, n = null, a = null;
  if (typeof r.componentWillMount == "function" ? t = "componentWillMount" : typeof r.UNSAFE_componentWillMount == "function" && (t = "UNSAFE_componentWillMount"), typeof r.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof r.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof r.componentWillUpdate == "function" ? a = "componentWillUpdate" : typeof r.UNSAFE_componentWillUpdate == "function" && (a = "UNSAFE_componentWillUpdate"), t !== null || n !== null || a !== null) {
    var o = e.displayName || e.name, i = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + i + " but also contains the following legacy lifecycles:" + (t !== null ? `
  ` + t : "") + (n !== null ? `
  ` + n : "") + (a !== null ? `
  ` + a : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (r.componentWillMount = Wo, r.componentWillReceiveProps = jo), typeof r.getSnapshotBeforeUpdate == "function") {
    if (typeof r.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    r.componentWillUpdate = Ho;
    var s = r.componentDidUpdate;
    r.componentDidUpdate = function(c, u, f) {
      var d = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : f;
      s.call(this, c, u, d);
    };
  }
  return e;
}
var Wl = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function Uo(e, r, t) {
  t === void 0 && (t = []);
  var n = e.displayName || e.name || "Component", a = zl(e), o = Object.keys(r), i = o.map(qt);
  a || !t.length || gt(!1);
  var s = /* @__PURE__ */ function(c) {
    Is(u, c);
    function u() {
      for (var d, p = arguments.length, v = new Array(p), h = 0; h < p; h++)
        v[h] = arguments[h];
      d = c.call.apply(c, [this].concat(v)) || this, d.handlers = /* @__PURE__ */ Object.create(null), o.forEach(function(y) {
        var b = r[y], S = function($) {
          if (d.props[b]) {
            var D;
            d._notifying = !0;
            for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
              L[F - 1] = arguments[F];
            (D = d.props)[b].apply(D, [$].concat(L)), d._notifying = !1;
          }
          d.unmounted || d.setState(function(A) {
            var T, j = A.values;
            return {
              values: ae(/* @__PURE__ */ Object.create(null), j, (T = {}, T[y] = $, T))
            };
          });
        };
        d.handlers[b] = S;
      }), t.length && (d.attachRef = function(y) {
        d.inner = y;
      });
      var m = /* @__PURE__ */ Object.create(null);
      return o.forEach(function(y) {
        m[y] = d.props[qt(y)];
      }), d.state = {
        values: m,
        prevProps: {}
      }, d;
    }
    var f = u.prototype;
    return f.shouldComponentUpdate = function() {
      return !this._notifying;
    }, u.getDerivedStateFromProps = function(p, v) {
      var h = v.values, m = v.prevProps, y = {
        values: ae(/* @__PURE__ */ Object.create(null), h),
        prevProps: {}
      };
      return o.forEach(function(b) {
        y.prevProps[b] = p[b], !ra(p, b) && ra(m, b) && (y.values[b] = p[qt(b)]);
      }), y;
    }, f.componentWillUnmount = function() {
      this.unmounted = !0;
    }, f.render = function() {
      var p = this, v = this.props, h = v.innerRef, m = vr(v, ["innerRef"]);
      i.forEach(function(b) {
        delete m[b];
      });
      var y = {};
      return o.forEach(function(b) {
        var S = p.props[b];
        y[b] = S !== void 0 ? S : p.state.values[b];
      }), g.createElement(e, ae({}, m, y, this.handlers, {
        ref: h || this.attachRef
      }));
    }, u;
  }(g.Component);
  Fl(s), s.displayName = "Uncontrolled(" + n + ")", s.propTypes = ae({
    innerRef: function() {
    }
  }, Ll(r)), t.forEach(function(c) {
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
        fileName: Wl,
        lineNumber: 128
      },
      __self: this
    }));
  }), l.propTypes = s.propTypes), l.ControlledComponent = e, l.deferControlTo = function(c, u, f) {
    return u === void 0 && (u = {}), Uo(c, ae({}, r, u), f);
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
function ie() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Bo(e)) && (n && (n += " "), n += r);
  return n;
}
var tr = "milliseconds", yt = "seconds", bt = "minutes", wt = "hours", He = "day", Qe = "week", St = "month", Ue = "year", Be = "decade", Ye = "century", Yo = {
  milliseconds: 1,
  seconds: 1e3,
  minutes: 60 * 1e3,
  hours: 60 * 60 * 1e3,
  day: 24 * 60 * 60 * 1e3,
  week: 7 * 24 * 60 * 60 * 1e3
}, jl = {
  month: 1,
  year: 12,
  decade: 10 * 12,
  century: 100 * 12
};
function Hl(e) {
  return [31, Ul(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function Ul(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 : 28;
}
function Se(e, r, t) {
  switch (e = new Date(e), t) {
    case tr:
    case yt:
    case bt:
    case wt:
    case He:
    case Qe:
      return Bl(e, r * Yo[t]);
    case St:
    case Ue:
    case Be:
    case Ye:
      return Yl(e, r * jl[t]);
  }
  throw new TypeError('Invalid units: "' + t + '"');
}
function Bl(e, r) {
  var t = new Date(+e + r);
  return Gl(e, t);
}
function Yl(e, r) {
  var t = e.getFullYear(), n = e.getMonth(), a = e.getDate(), o = t * 12 + n + r, i = Math.trunc(o / 12), s = o % 12, l = Math.min(a, Hl(i)[s]), c = new Date(e);
  return c.setFullYear(i), c.setDate(1), c.setMonth(s), c.setDate(l), c;
}
function Gl(e, r) {
  var t = e.getTimezoneOffset(), n = r.getTimezoneOffset(), a = n - t;
  return new Date(+r + a * Yo.minutes);
}
function _t(e, r, t) {
  return Se(e, -r, t);
}
function ue(e, r, t) {
  switch (e = new Date(e), r) {
    case Ye:
    case Be:
    case Ue:
      e = nr(e, 0);
    case St:
      e = Xo(e, 1);
    case Qe:
    case He:
      e = Dt(e, 0);
    case wt:
      e = et(e, 0);
    case bt:
      e = Et(e, 0);
    case yt:
      e = $t(e, 0);
  }
  return r === Be && (e = _t(e, Ge(e) % 10, "year")), r === Ye && (e = _t(e, Ge(e) % 100, "year")), r === Qe && (e = Zo(e, 0, t)), e;
}
function rr(e, r, t) {
  switch (e = new Date(e), e = ue(e, r, t), r) {
    case Ye:
    case Be:
    case Ue:
    case St:
    case Qe:
      e = Se(e, 1, r), e = _t(e, 1, He), e.setHours(23, 59, 59, 999);
      break;
    case He:
      e.setHours(23, 59, 59, 999);
      break;
    case wt:
    case bt:
    case yt:
      e = Se(e, 1, r), e = _t(e, 1, tr);
  }
  return e;
}
var Ct = nt(function(e, r) {
  return e === r;
}), mn = nt(function(e, r) {
  return e !== r;
}), mr = nt(function(e, r) {
  return e > r;
}), Tt = nt(function(e, r) {
  return e >= r;
}), gn = nt(function(e, r) {
  return e < r;
}), rt = nt(function(e, r) {
  return e <= r;
});
function Go() {
  return new Date(Math.min.apply(Math, arguments));
}
function Ko() {
  return new Date(Math.max.apply(Math, arguments));
}
function Vo(e, r, t, n) {
  return n = n || "day", (!r || Tt(e, r, n)) && (!t || rt(e, t, n));
}
var $t = ke("Milliseconds"), Et = ke("Seconds"), et = ke("Minutes"), Dt = ke("Hours"), qo = ke("Day"), Xo = ke("Date"), nr = ke("Month"), Ge = ke("FullYear");
function Kl(e, r) {
  return r === void 0 ? Ge(ue(e, Be)) : Se(e, r + 10, Ue);
}
function Vl(e, r) {
  return r === void 0 ? Ge(ue(e, Ye)) : Se(e, r + 100, Ue);
}
function Zo(e, r, t) {
  var n = (qo(e) + 7 - (t || 0)) % 7;
  return r === void 0 ? n : Se(e, r - n, He);
}
function ql(e, r, t, n) {
  var a, o, i;
  switch (t) {
    case tr:
    case yt:
    case bt:
    case wt:
    case He:
    case Qe:
      a = r.getTime() - e.getTime();
      break;
    case St:
    case Ue:
    case Be:
    case Ye:
      a = (Ge(r) - Ge(e)) * 12 + nr(r) - nr(e);
      break;
    default:
      throw new TypeError('Invalid units: "' + t + '"');
  }
  switch (t) {
    case tr:
      o = 1;
      break;
    case yt:
      o = 1e3;
      break;
    case bt:
      o = 1e3 * 60;
      break;
    case wt:
      o = 1e3 * 60 * 60;
      break;
    case He:
      o = 1e3 * 60 * 60 * 24;
      break;
    case Qe:
      o = 1e3 * 60 * 60 * 24 * 7;
      break;
    case St:
      o = 1;
      break;
    case Ue:
      o = 12;
      break;
    case Be:
      o = 120;
      break;
    case Ye:
      o = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + t + '"');
  }
  return i = a / o, n ? i : Math.round(i);
}
function ke(e) {
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
function nt(e) {
  return function(r, t, n) {
    return e(+ue(r, n), +ue(t, n));
  };
}
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Se,
  century: Vl,
  date: Xo,
  day: qo,
  decade: Kl,
  diff: ql,
  endOf: rr,
  eq: Ct,
  gt: mr,
  gte: Tt,
  hours: Dt,
  inRange: Vo,
  lt: gn,
  lte: rt,
  max: Ko,
  milliseconds: $t,
  min: Go,
  minutes: et,
  month: nr,
  neq: mn,
  seconds: Et,
  startOf: ue,
  subtract: _t,
  weekday: Zo,
  year: Ge
}, Symbol.toStringTag, { value: "Module" }));
function Xl(e) {
  if (Array.isArray(e))
    return en(e);
}
function Jo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Zl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xt(e) {
  return Xl(e) || Jo(e) || pn(e) || Zl();
}
function Jl(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var o = Array(a); ++n < a; )
    o[n] = e[n + r];
  return o;
}
var Qo = Jl;
function Ql(e, r) {
  return e === r || e !== e && r !== r;
}
var At = Ql, ec = typeof me == "object" && me && me.Object === Object && me, ei = ec, tc = ei, rc = typeof self == "object" && self && self.Object === Object && self, nc = tc || rc || Function("return this")(), Ee = nc, ac = Ee, oc = ac.Symbol, at = oc, aa = at, ti = Object.prototype, ic = ti.hasOwnProperty, sc = ti.toString, vt = aa ? aa.toStringTag : void 0;
function lc(e) {
  var r = ic.call(e, vt), t = e[vt];
  try {
    e[vt] = void 0;
    var n = !0;
  } catch {
  }
  var a = sc.call(e);
  return n && (r ? e[vt] = t : delete e[vt]), a;
}
var cc = lc, uc = Object.prototype, fc = uc.toString;
function dc(e) {
  return fc.call(e);
}
var hc = dc, oa = at, vc = cc, pc = hc, mc = "[object Null]", gc = "[object Undefined]", ia = oa ? oa.toStringTag : void 0;
function yc(e) {
  return e == null ? e === void 0 ? gc : mc : ia && ia in Object(e) ? vc(e) : pc(e);
}
var ot = yc;
function bc(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Ae = bc, wc = ot, Sc = Ae, _c = "[object AsyncFunction]", $c = "[object Function]", Ec = "[object GeneratorFunction]", Dc = "[object Proxy]";
function Mc(e) {
  if (!Sc(e))
    return !1;
  var r = wc(e);
  return r == $c || r == Ec || r == _c || r == Dc;
}
var yn = Mc, Oc = 9007199254740991;
function Cc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Oc;
}
var bn = Cc, Tc = yn, Ac = bn;
function xc(e) {
  return e != null && Ac(e.length) && !Tc(e);
}
var xt = xc, Pc = 9007199254740991, Rc = /^(?:0|[1-9]\d*)$/;
function Ic(e, r) {
  var t = typeof e;
  return r = r ?? Pc, !!r && (t == "number" || t != "symbol" && Rc.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var wn = Ic, Nc = At, kc = xt, Lc = wn, zc = Ae;
function Fc(e, r, t) {
  if (!zc(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? kc(t) && Lc(r, t.length) : n == "string" && r in t) ? Nc(t[r], e) : !1;
}
var gr = Fc, Wc = /\s/;
function jc(e) {
  for (var r = e.length; r-- && Wc.test(e.charAt(r)); )
    ;
  return r;
}
var Hc = jc, Uc = Hc, Bc = /^\s+/;
function Yc(e) {
  return e && e.slice(0, Uc(e) + 1).replace(Bc, "");
}
var Gc = Yc;
function Kc(e) {
  return e != null && typeof e == "object";
}
var Le = Kc, Vc = ot, qc = Le, Xc = "[object Symbol]";
function Zc(e) {
  return typeof e == "symbol" || qc(e) && Vc(e) == Xc;
}
var Pt = Zc, Jc = Gc, sa = Ae, Qc = Pt, la = 0 / 0, eu = /^[-+]0x[0-9a-f]+$/i, tu = /^0b[01]+$/i, ru = /^0o[0-7]+$/i, nu = parseInt;
function au(e) {
  if (typeof e == "number")
    return e;
  if (Qc(e))
    return la;
  if (sa(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sa(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Jc(e);
  var t = tu.test(e);
  return t || ru.test(e) ? nu(e.slice(2), t ? 2 : 8) : eu.test(e) ? la : +e;
}
var ou = au, iu = ou, ca = 1 / 0, su = 17976931348623157e292;
function lu(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = iu(e), e === ca || e === -ca) {
    var r = e < 0 ? -1 : 1;
    return r * su;
  }
  return e === e ? e : 0;
}
var ri = lu, cu = ri;
function uu(e) {
  var r = cu(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var ni = uu, fu = Qo, du = gr, hu = ni, vu = Math.ceil, pu = Math.max;
function mu(e, r, t) {
  (t ? du(e, r, t) : r === void 0) ? r = 1 : r = pu(hu(r), 0);
  var n = e == null ? 0 : e.length;
  if (!n || r < 1)
    return [];
  for (var a = 0, o = 0, i = Array(vu(n / r)); a < n; )
    i[o++] = fu(e, a, a += r);
  return i;
}
var gu = mu;
const yu = /* @__PURE__ */ oe(gu);
function Rt(e) {
  return e && e.ownerDocument || document;
}
function bu(e) {
  var r = Rt(e);
  return r && r.defaultView || window;
}
function wu(e, r) {
  return bu(e).getComputedStyle(e, r);
}
var Su = /([A-Z])/g;
function _u(e) {
  return e.replace(Su, "-$1").toLowerCase();
}
var $u = /^ms-/;
function jt(e) {
  return _u(e).replace($u, "-ms-");
}
var Eu = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Du(e) {
  return !!(e && Eu.test(e));
}
function Ze(e, r) {
  var t = "", n = "";
  if (typeof r == "string")
    return e.style.getPropertyValue(jt(r)) || wu(e).getPropertyValue(jt(r));
  Object.keys(r).forEach(function(a) {
    var o = r[a];
    !o && o !== 0 ? e.style.removeProperty(jt(a)) : Du(a) ? n += a + "(" + o + ") " : t += jt(a) + ": " + o + ";";
  }), n && (t += "transform: " + n + ";"), e.style.cssText += ";" + t;
}
function Mt(e, r) {
  if (e.contains)
    return e.contains(r);
  if (e.compareDocumentPosition)
    return e === r || !!(e.compareDocumentPosition(r) & 16);
}
function Mu(e) {
  return "nodeType" in e && e.nodeType === document.DOCUMENT_NODE;
}
function Sn(e) {
  return "window" in e && e.window === e ? e : Mu(e) && e.defaultView || !1;
}
function ai(e) {
  var r = e === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function t(n, a) {
    var o = Sn(n);
    if (a === void 0)
      return o ? o[e] : n[r];
    o ? o.scrollTo(o[e], a) : n[r] = a;
  }
  return t;
}
const oi = ai("pageXOffset"), ii = ai("pageYOffset");
function je(e) {
  var r = Rt(e), t = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  }, n = r && r.documentElement;
  return !n || !Mt(n, e) || (e.getBoundingClientRect !== void 0 && (t = e.getBoundingClientRect()), t = {
    top: t.top + ii(n) - (n.clientTop || 0),
    left: t.left + oi(n) - (n.clientLeft || 0),
    width: t.width,
    height: t.height
  }), t;
}
var Ou = function(r) {
  return !!r && "offsetParent" in r;
};
function Cu(e) {
  for (var r = Rt(e), t = e && e.offsetParent; Ou(t) && t.nodeName !== "HTML" && Ze(t, "position") === "static"; )
    t = t.offsetParent;
  return t || r.documentElement;
}
var Tu = function(r) {
  return r.nodeName && r.nodeName.toLowerCase();
};
function si(e, r) {
  var t = {
    top: 0,
    left: 0
  }, n;
  if (Ze(e, "position") === "fixed")
    n = e.getBoundingClientRect();
  else {
    var a = r || Cu(e);
    n = je(e), Tu(a) !== "html" && (t = je(a));
    var o = String(Ze(a, "borderTopWidth") || 0);
    t.top += parseInt(o, 10) - ii(a) || 0;
    var i = String(Ze(a, "borderLeftWidth") || 0);
    t.left += parseInt(i, 10) - oi(a) || 0;
  }
  var s = String(Ze(e, "marginTop") || 0), l = String(Ze(e, "marginLeft") || 0);
  return ae({}, n, {
    top: n.top - t.top - (parseInt(s, 10) || 0),
    left: n.left - t.left - (parseInt(l, 10) || 0)
  });
}
const _n = !!(typeof window < "u" && window.document && window.document.createElement);
var ua = (/* @__PURE__ */ new Date()).getTime();
function Au(e) {
  var r = (/* @__PURE__ */ new Date()).getTime(), t = Math.max(0, 16 - (r - ua)), n = setTimeout(e, t);
  return ua = r, n;
}
var xu = ["", "webkit", "moz", "o", "ms"], tn = "clearTimeout", rn = Au, fa = function(r, t) {
  return r + (r ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame";
};
_n && xu.some(function(e) {
  var r = fa(e, "request");
  return r in window && (tn = fa(e, "cancel"), rn = function(n) {
    return window[r](n);
  }), !!rn;
});
var da = function(r) {
  typeof window[tn] == "function" && window[tn](r);
}, li = rn, Ir;
function Pu(e, r) {
  if (!Ir) {
    var t = document.body, n = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
    Ir = function(o, i) {
      return n.call(o, i);
    };
  }
  return Ir(e, r);
}
var Ru = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Iu(e, r) {
  return Ru(e.querySelectorAll(r));
}
var nn = !1, an = !1;
try {
  var Nr = {
    get passive() {
      return nn = !0;
    },
    get once() {
      return an = nn = !0;
    }
  };
  _n && (window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, !0));
} catch {
}
function Nu(e, r, t, n) {
  if (n && typeof n != "boolean" && !an) {
    var a = n.once, o = n.capture, i = t;
    !an && a && (i = t.__once || function s(l) {
      this.removeEventListener(r, s, o), t.call(this, l);
    }, t.__once = i), e.addEventListener(r, i, nn ? n : o);
  }
  e.addEventListener(r, t, n);
}
function ku(e) {
  const r = I.useRef(e);
  return I.useEffect(() => {
    r.current = e;
  }, [e]), r;
}
function ha(e) {
  const r = ku(e);
  return I.useCallback(function(...t) {
    return r.current && r.current(...t);
  }, [r]);
}
function va() {
  return I.useState(null);
}
function Lu() {
  const e = I.useRef(!0), r = I.useRef(() => e.current);
  return I.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), r.current;
}
function zu(e) {
  const r = Lu();
  return [e[0], I.useCallback((t) => {
    if (r())
      return e[1](t);
  }, [r, e[1]])];
}
var Fu = Ns({
  defaultModifiers: [ks, Ls, zs, Fs, Ws, js, Hs, Us]
}), pa = function(r) {
  return {
    position: r,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}, Wu = {
  name: "applyStyles",
  enabled: !1
}, ju = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: function(r) {
    var t = r.state;
    return function() {
      var n = t.elements, a = n.reference, o = n.popper;
      if ("removeAttribute" in a) {
        var i = (a.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
          return s.trim() !== o.id;
        });
        i.length ? a.setAttribute("aria-describedby", i.join(",")) : a.removeAttribute("aria-describedby");
      }
    };
  },
  fn: function(r) {
    var t, n = r.state, a = n.elements, o = a.popper, i = a.reference, s = (t = o.getAttribute("role")) == null ? void 0 : t.toLowerCase();
    if (o.id && s === "tooltip" && "setAttribute" in i) {
      var l = i.getAttribute("aria-describedby");
      if (l && l.split(",").indexOf(o.id) !== -1)
        return;
      i.setAttribute("aria-describedby", l ? l + "," + o.id : o.id);
    }
  }
}, Hu = [];
function Uu(e, r, t) {
  var n = t === void 0 ? {} : t, a = n.enabled, o = a === void 0 ? !0 : a, i = n.placement, s = i === void 0 ? "bottom" : i, l = n.strategy, c = l === void 0 ? "absolute" : l, u = n.modifiers, f = u === void 0 ? Hu : u, d = vr(n, ["enabled", "placement", "strategy", "modifiers"]), p = I.useRef(), v = I.useCallback(function() {
    var _;
    (_ = p.current) == null || _.update();
  }, []), h = I.useCallback(function() {
    var _;
    (_ = p.current) == null || _.forceUpdate();
  }, []), m = zu(I.useState({
    placement: s,
    update: v,
    forceUpdate: h,
    attributes: {},
    styles: {
      popper: pa(c),
      arrow: {}
    }
  })), y = m[0], b = m[1], S = I.useMemo(function() {
    return {
      name: "updateStateModifier",
      enabled: !0,
      phase: "write",
      requires: ["computeStyles"],
      fn: function($) {
        var D = $.state, C = {}, L = {};
        Object.keys(D.elements).forEach(function(F) {
          C[F] = D.styles[F], L[F] = D.attributes[F];
        }), b({
          state: D,
          styles: C,
          attributes: L,
          update: v,
          forceUpdate: h,
          placement: D.placement
        });
      }
    };
  }, [v, h, b]);
  return I.useEffect(function() {
    !p.current || !o || p.current.setOptions({
      placement: s,
      strategy: c,
      modifiers: [].concat(f, [S, Wu])
    });
  }, [c, s, S, o]), I.useEffect(function() {
    if (!(!o || e == null || r == null))
      return p.current = Fu(e, r, ae({}, d, {
        placement: s,
        strategy: c,
        modifiers: [].concat(f, [ju, S])
      })), function() {
        p.current != null && (p.current.destroy(), p.current = void 0, b(function(_) {
          return ae({}, _, {
            attributes: {},
            styles: {
              popper: pa(c)
            }
          });
        }));
      };
  }, [o, e, r]), y;
}
function Bu(e, r, t, n) {
  var a = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(r, t, a), t.__once && e.removeEventListener(r, t.__once, a);
}
function mt(e, r, t, n) {
  return Nu(e, r, t, n), function() {
    Bu(e, r, t, n);
  };
}
function Yu(e) {
  return e && "setState" in e ? _o.findDOMNode(e) : e ?? null;
}
const Gu = function(e) {
  return Rt(Yu(e));
};
var Ku = 27, ma = function() {
};
function Vu(e) {
  return e.button === 0;
}
function qu(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var ga = function(r) {
  return r && ("current" in r ? r.current : r);
};
function Xu(e, r, t) {
  var n = t === void 0 ? {} : t, a = n.disabled, o = n.clickTrigger, i = o === void 0 ? "click" : o, s = I.useRef(!1), l = r || ma, c = I.useCallback(function(d) {
    var p, v = ga(e);
    _s(!!v, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !v || qu(d) || !Vu(d) || !!Mt(v, (p = d.composedPath == null ? void 0 : d.composedPath()[0]) != null ? p : d.target);
  }, [e]), u = ha(function(d) {
    s.current || l(d);
  }), f = ha(function(d) {
    d.keyCode === Ku && l(d);
  });
  I.useEffect(function() {
    if (!(a || e == null)) {
      var d = window.event, p = Gu(ga(e)), v = mt(p, i, c, !0), h = mt(p, i, function(b) {
        if (b === d) {
          d = void 0;
          return;
        }
        u(b);
      }), m = mt(p, "keyup", function(b) {
        if (b === d) {
          d = void 0;
          return;
        }
        f(b);
      }), y = [];
      return "ontouchstart" in p.documentElement && (y = [].slice.call(p.body.children).map(function(b) {
        return mt(b, "mousemove", ma);
      })), function() {
        v(), h(), m(), y.forEach(function(b) {
          return b();
        });
      };
    }
  }, [e, a, i, c, u, f]);
}
function Zu(e) {
  var r = {};
  return Array.isArray(e) ? (e == null || e.forEach(function(t) {
    r[t.name] = t;
  }), r) : e || r;
}
function Ju(e) {
  return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(r) {
    return e[r].name = r, e[r];
  });
}
function Qu(e) {
  var r, t, n, a, o = e.enabled, i = e.enableEvents, s = e.placement, l = e.flip, c = e.offset, u = e.fixed, f = e.containerPadding, d = e.arrowElement, p = e.popperConfig, v = p === void 0 ? {} : p, h = Zu(v.modifiers);
  return ae({}, v, {
    placement: s,
    enabled: o,
    strategy: u ? "fixed" : v.strategy,
    modifiers: Ju(ae({}, h, {
      eventListeners: {
        enabled: i
      },
      preventOverflow: ae({}, h.preventOverflow, {
        options: f ? ae({
          padding: f
        }, (r = h.preventOverflow) == null ? void 0 : r.options) : (t = h.preventOverflow) == null ? void 0 : t.options
      }),
      offset: {
        options: ae({
          offset: c
        }, (n = h.offset) == null ? void 0 : n.options)
      },
      arrow: ae({}, h.arrow, {
        enabled: !!d,
        options: ae({}, (a = h.arrow) == null ? void 0 : a.options, {
          element: d
        })
      }),
      flip: ae({
        enabled: !!l
      }, h.flip)
    }))
  });
}
var Ht;
function ci(e) {
  if ((!Ht && Ht !== 0 || e) && _n) {
    var r = document.createElement("div");
    r.style.position = "absolute", r.style.top = "-9999px", r.style.width = "50px", r.style.height = "50px", r.style.overflow = "scroll", document.body.appendChild(r), Ht = r.offsetWidth - r.clientWidth, document.body.removeChild(r);
  }
  return Ht;
}
var kr = function(r) {
  var t;
  return typeof document > "u" ? null : r == null ? Rt().body : (typeof r == "function" && (r = r()), r && "current" in r && (r = r.current), (t = r) != null && t.nodeType && r || null);
};
function ya(e, r) {
  var t = I.useState(function() {
    return kr(e);
  }), n = t[0], a = t[1];
  if (!n) {
    var o = kr(e);
    o && a(o);
  }
  return I.useEffect(function() {
    r && n && r(n);
  }, [r, n]), I.useEffect(function() {
    var i = kr(e);
    i !== n && a(i);
  }, [e, n]), n;
}
const ba = (e) => !e || typeof e == "function" ? e : (r) => {
  e.current = r;
};
function ef(e, r) {
  const t = ba(e), n = ba(r);
  return (a) => {
    t && t(a), n && n(a);
  };
}
function tf(e, r) {
  return I.useMemo(() => ef(e, r), [e, r]);
}
var $n = /* @__PURE__ */ g.forwardRef(function(e, r) {
  var t = e.flip, n = e.offset, a = e.placement, o = e.containerPadding, i = o === void 0 ? 5 : o, s = e.popperConfig, l = s === void 0 ? {} : s, c = e.transition, u = va(), f = u[0], d = u[1], p = va(), v = p[0], h = p[1], m = tf(d, r), y = ya(e.container), b = ya(e.target), S = I.useState(!e.show), _ = S[0], $ = S[1], D = Uu(b, f, Qu({
    placement: a,
    enableEvents: !!e.show,
    containerPadding: i || 5,
    flip: t,
    offset: n,
    arrowElement: v,
    popperConfig: l
  })), C = D.styles, L = D.attributes, F = vr(D, ["styles", "attributes"]);
  e.show ? _ && $(!1) : !e.transition && !_ && $(!0);
  var A = function() {
    $(!0), e.onExited && e.onExited.apply(e, arguments);
  }, T = e.show || c && !_;
  if (Xu(f, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !T)
    return null;
  var j = e.children(ae({}, F, {
    show: !!e.show,
    props: ae({}, L.popper, {
      style: C.popper,
      ref: m
    }),
    arrowProps: ae({}, L.arrow, {
      style: C.arrow,
      ref: h
    })
  }));
  if (c) {
    var Y = e.onExit, W = e.onExiting, x = e.onEnter, M = e.onEntering, k = e.onEntered;
    j = /* @__PURE__ */ g.createElement(c, {
      in: e.show,
      appear: !0,
      onExit: Y,
      onExiting: W,
      onExited: A,
      onEnter: x,
      onEntering: M,
      onEntered: k
    }, j);
  }
  return y ? /* @__PURE__ */ _o.createPortal(j, y) : null;
});
$n.displayName = "Overlay";
$n.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: P.bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: P.oneOf(Bs),
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
  onHide: function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      n[a - 1] = arguments[a];
    if (r.rootClose) {
      var o;
      return (o = P.func).isRequired.apply(o, [r].concat(n));
    }
    return P.func.apply(P, [r].concat(n));
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
const rf = $n;
function nf() {
  this.__data__ = [], this.size = 0;
}
var af = nf, of = At;
function sf(e, r) {
  for (var t = e.length; t--; )
    if (of(e[t][0], r))
      return t;
  return -1;
}
var yr = sf, lf = yr, cf = Array.prototype, uf = cf.splice;
function ff(e) {
  var r = this.__data__, t = lf(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : uf.call(r, t, 1), --this.size, !0;
}
var df = ff, hf = yr;
function vf(e) {
  var r = this.__data__, t = hf(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var pf = vf, mf = yr;
function gf(e) {
  return mf(this.__data__, e) > -1;
}
var yf = gf, bf = yr;
function wf(e, r) {
  var t = this.__data__, n = bf(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Sf = wf, _f = af, $f = df, Ef = pf, Df = yf, Mf = Sf;
function it(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
it.prototype.clear = _f;
it.prototype.delete = $f;
it.prototype.get = Ef;
it.prototype.has = Df;
it.prototype.set = Mf;
var br = it, Of = br;
function Cf() {
  this.__data__ = new Of(), this.size = 0;
}
var Tf = Cf;
function Af(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var xf = Af;
function Pf(e) {
  return this.__data__.get(e);
}
var Rf = Pf;
function If(e) {
  return this.__data__.has(e);
}
var Nf = If, kf = Ee, Lf = kf["__core-js_shared__"], zf = Lf, Lr = zf, wa = function() {
  var e = /[^.]+$/.exec(Lr && Lr.keys && Lr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ff(e) {
  return !!wa && wa in e;
}
var Wf = Ff, jf = Function.prototype, Hf = jf.toString;
function Uf(e) {
  if (e != null) {
    try {
      return Hf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ui = Uf, Bf = yn, Yf = Wf, Gf = Ae, Kf = ui, Vf = /[\\^$.*+?()[\]{}|]/g, qf = /^\[object .+?Constructor\]$/, Xf = Function.prototype, Zf = Object.prototype, Jf = Xf.toString, Qf = Zf.hasOwnProperty, ed = RegExp(
  "^" + Jf.call(Qf).replace(Vf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function td(e) {
  if (!Gf(e) || Yf(e))
    return !1;
  var r = Bf(e) ? ed : qf;
  return r.test(Kf(e));
}
var rd = td;
function nd(e, r) {
  return e == null ? void 0 : e[r];
}
var ad = nd, od = rd, id = ad;
function sd(e, r) {
  var t = id(e, r);
  return od(t) ? t : void 0;
}
var Ve = sd, ld = Ve, cd = Ee, ud = ld(cd, "Map"), En = ud, fd = Ve, dd = fd(Object, "create"), wr = dd, Sa = wr;
function hd() {
  this.__data__ = Sa ? Sa(null) : {}, this.size = 0;
}
var vd = hd;
function pd(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var md = pd, gd = wr, yd = "__lodash_hash_undefined__", bd = Object.prototype, wd = bd.hasOwnProperty;
function Sd(e) {
  var r = this.__data__;
  if (gd) {
    var t = r[e];
    return t === yd ? void 0 : t;
  }
  return wd.call(r, e) ? r[e] : void 0;
}
var _d = Sd, $d = wr, Ed = Object.prototype, Dd = Ed.hasOwnProperty;
function Md(e) {
  var r = this.__data__;
  return $d ? r[e] !== void 0 : Dd.call(r, e);
}
var Od = Md, Cd = wr, Td = "__lodash_hash_undefined__";
function Ad(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Cd && r === void 0 ? Td : r, this;
}
var xd = Ad, Pd = vd, Rd = md, Id = _d, Nd = Od, kd = xd;
function st(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
st.prototype.clear = Pd;
st.prototype.delete = Rd;
st.prototype.get = Id;
st.prototype.has = Nd;
st.prototype.set = kd;
var Ld = st, _a = Ld, zd = br, Fd = En;
function Wd() {
  this.size = 0, this.__data__ = {
    hash: new _a(),
    map: new (Fd || zd)(),
    string: new _a()
  };
}
var jd = Wd;
function Hd(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Ud = Hd, Bd = Ud;
function Yd(e, r) {
  var t = e.__data__;
  return Bd(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var Sr = Yd, Gd = Sr;
function Kd(e) {
  var r = Gd(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Vd = Kd, qd = Sr;
function Xd(e) {
  return qd(this, e).get(e);
}
var Zd = Xd, Jd = Sr;
function Qd(e) {
  return Jd(this, e).has(e);
}
var eh = Qd, th = Sr;
function rh(e, r) {
  var t = th(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var nh = rh, ah = jd, oh = Vd, ih = Zd, sh = eh, lh = nh;
function lt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
lt.prototype.clear = ah;
lt.prototype.delete = oh;
lt.prototype.get = ih;
lt.prototype.has = sh;
lt.prototype.set = lh;
var Dn = lt, ch = br, uh = En, fh = Dn, dh = 200;
function hh(e, r) {
  var t = this.__data__;
  if (t instanceof ch) {
    var n = t.__data__;
    if (!uh || n.length < dh - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new fh(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var vh = hh, ph = br, mh = Tf, gh = xf, yh = Rf, bh = Nf, wh = vh;
function ct(e) {
  var r = this.__data__ = new ph(e);
  this.size = r.size;
}
ct.prototype.clear = mh;
ct.prototype.delete = gh;
ct.prototype.get = yh;
ct.prototype.has = bh;
ct.prototype.set = wh;
var Mn = ct, Sh = "__lodash_hash_undefined__";
function _h(e) {
  return this.__data__.set(e, Sh), this;
}
var $h = _h;
function Eh(e) {
  return this.__data__.has(e);
}
var Dh = Eh, Mh = Dn, Oh = $h, Ch = Dh;
function ar(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new Mh(); ++r < t; )
    this.add(e[r]);
}
ar.prototype.add = ar.prototype.push = Oh;
ar.prototype.has = Ch;
var Th = ar;
function Ah(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var xh = Ah;
function Ph(e, r) {
  return e.has(r);
}
var Rh = Ph, Ih = Th, Nh = xh, kh = Rh, Lh = 1, zh = 2;
function Fh(e, r, t, n, a, o) {
  var i = t & Lh, s = e.length, l = r.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = o.get(e), u = o.get(r);
  if (c && u)
    return c == r && u == e;
  var f = -1, d = !0, p = t & zh ? new Ih() : void 0;
  for (o.set(e, r), o.set(r, e); ++f < s; ) {
    var v = e[f], h = r[f];
    if (n)
      var m = i ? n(h, v, f, r, e, o) : n(v, h, f, e, r, o);
    if (m !== void 0) {
      if (m)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!Nh(r, function(y, b) {
        if (!kh(p, b) && (v === y || a(v, y, t, n, o)))
          return p.push(b);
      })) {
        d = !1;
        break;
      }
    } else if (!(v === h || a(v, h, t, n, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(r), d;
}
var fi = Fh, Wh = Ee, jh = Wh.Uint8Array, di = jh;
function Hh(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, a) {
    t[++r] = [a, n];
  }), t;
}
var Uh = Hh;
function Bh(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var Yh = Bh, $a = at, Ea = di, Gh = At, Kh = fi, Vh = Uh, qh = Yh, Xh = 1, Zh = 2, Jh = "[object Boolean]", Qh = "[object Date]", ev = "[object Error]", tv = "[object Map]", rv = "[object Number]", nv = "[object RegExp]", av = "[object Set]", ov = "[object String]", iv = "[object Symbol]", sv = "[object ArrayBuffer]", lv = "[object DataView]", Da = $a ? $a.prototype : void 0, zr = Da ? Da.valueOf : void 0;
function cv(e, r, t, n, a, o, i) {
  switch (t) {
    case lv:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case sv:
      return !(e.byteLength != r.byteLength || !o(new Ea(e), new Ea(r)));
    case Jh:
    case Qh:
    case rv:
      return Gh(+e, +r);
    case ev:
      return e.name == r.name && e.message == r.message;
    case nv:
    case ov:
      return e == r + "";
    case tv:
      var s = Vh;
    case av:
      var l = n & Xh;
      if (s || (s = qh), e.size != r.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == r;
      n |= Zh, i.set(e, r);
      var u = Kh(s(e), s(r), n, a, o, i);
      return i.delete(e), u;
    case iv:
      if (zr)
        return zr.call(e) == zr.call(r);
  }
  return !1;
}
var uv = cv;
function fv(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
var On = fv, dv = Array.isArray, we = dv, hv = On, vv = we;
function pv(e, r, t) {
  var n = r(e);
  return vv(e) ? n : hv(n, t(e));
}
var hi = pv;
function mv(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++t < n; ) {
    var i = e[t];
    r(i, t, e) && (o[a++] = i);
  }
  return o;
}
var gv = mv;
function yv() {
  return [];
}
var vi = yv, bv = gv, wv = vi, Sv = Object.prototype, _v = Sv.propertyIsEnumerable, Ma = Object.getOwnPropertySymbols, $v = Ma ? function(e) {
  return e == null ? [] : (e = Object(e), bv(Ma(e), function(r) {
    return _v.call(e, r);
  }));
} : wv, Cn = $v;
function Ev(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Dv = Ev, Mv = ot, Ov = Le, Cv = "[object Arguments]";
function Tv(e) {
  return Ov(e) && Mv(e) == Cv;
}
var Av = Tv, Oa = Av, xv = Le, pi = Object.prototype, Pv = pi.hasOwnProperty, Rv = pi.propertyIsEnumerable, Iv = Oa(function() {
  return arguments;
}()) ? Oa : function(e) {
  return xv(e) && Pv.call(e, "callee") && !Rv.call(e, "callee");
}, Tn = Iv, or = { exports: {} };
function Nv() {
  return !1;
}
var kv = Nv;
or.exports;
(function(e, r) {
  var t = Ee, n = kv, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, i = o && o.exports === a, s = i ? t.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || n;
  e.exports = c;
})(or, or.exports);
var _r = or.exports, Lv = ot, zv = bn, Fv = Le, Wv = "[object Arguments]", jv = "[object Array]", Hv = "[object Boolean]", Uv = "[object Date]", Bv = "[object Error]", Yv = "[object Function]", Gv = "[object Map]", Kv = "[object Number]", Vv = "[object Object]", qv = "[object RegExp]", Xv = "[object Set]", Zv = "[object String]", Jv = "[object WeakMap]", Qv = "[object ArrayBuffer]", ep = "[object DataView]", tp = "[object Float32Array]", rp = "[object Float64Array]", np = "[object Int8Array]", ap = "[object Int16Array]", op = "[object Int32Array]", ip = "[object Uint8Array]", sp = "[object Uint8ClampedArray]", lp = "[object Uint16Array]", cp = "[object Uint32Array]", te = {};
te[tp] = te[rp] = te[np] = te[ap] = te[op] = te[ip] = te[sp] = te[lp] = te[cp] = !0;
te[Wv] = te[jv] = te[Qv] = te[Hv] = te[ep] = te[Uv] = te[Bv] = te[Yv] = te[Gv] = te[Kv] = te[Vv] = te[qv] = te[Xv] = te[Zv] = te[Jv] = !1;
function up(e) {
  return Fv(e) && zv(e.length) && !!te[Lv(e)];
}
var fp = up;
function dp(e) {
  return function(r) {
    return e(r);
  };
}
var $r = dp, ir = { exports: {} };
ir.exports;
(function(e, r) {
  var t = ei, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, i = o && t.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(ir, ir.exports);
var An = ir.exports, hp = fp, vp = $r, Ca = An, Ta = Ca && Ca.isTypedArray, pp = Ta ? vp(Ta) : hp, xn = pp, mp = Dv, gp = Tn, yp = we, bp = _r, wp = wn, Sp = xn, _p = Object.prototype, $p = _p.hasOwnProperty;
function Ep(e, r) {
  var t = yp(e), n = !t && gp(e), a = !t && !n && bp(e), o = !t && !n && !a && Sp(e), i = t || n || a || o, s = i ? mp(e.length, String) : [], l = s.length;
  for (var c in e)
    (r || $p.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    wp(c, l))) && s.push(c);
  return s;
}
var mi = Ep, Dp = Object.prototype;
function Mp(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Dp;
  return e === t;
}
var Pn = Mp;
function Op(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var gi = Op, Cp = gi, Tp = Cp(Object.keys, Object), Ap = Tp, xp = Pn, Pp = Ap, Rp = Object.prototype, Ip = Rp.hasOwnProperty;
function Np(e) {
  if (!xp(e))
    return Pp(e);
  var r = [];
  for (var t in Object(e))
    Ip.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var kp = Np, Lp = mi, zp = kp, Fp = xt;
function Wp(e) {
  return Fp(e) ? Lp(e) : zp(e);
}
var It = Wp, jp = hi, Hp = Cn, Up = It;
function Bp(e) {
  return jp(e, Up, Hp);
}
var yi = Bp, Aa = yi, Yp = 1, Gp = Object.prototype, Kp = Gp.hasOwnProperty;
function Vp(e, r, t, n, a, o) {
  var i = t & Yp, s = Aa(e), l = s.length, c = Aa(r), u = c.length;
  if (l != u && !i)
    return !1;
  for (var f = l; f--; ) {
    var d = s[f];
    if (!(i ? d in r : Kp.call(r, d)))
      return !1;
  }
  var p = o.get(e), v = o.get(r);
  if (p && v)
    return p == r && v == e;
  var h = !0;
  o.set(e, r), o.set(r, e);
  for (var m = i; ++f < l; ) {
    d = s[f];
    var y = e[d], b = r[d];
    if (n)
      var S = i ? n(b, y, d, r, e, o) : n(y, b, d, e, r, o);
    if (!(S === void 0 ? y === b || a(y, b, t, n, o) : S)) {
      h = !1;
      break;
    }
    m || (m = d == "constructor");
  }
  if (h && !m) {
    var _ = e.constructor, $ = r.constructor;
    _ != $ && "constructor" in e && "constructor" in r && !(typeof _ == "function" && _ instanceof _ && typeof $ == "function" && $ instanceof $) && (h = !1);
  }
  return o.delete(e), o.delete(r), h;
}
var qp = Vp, Xp = Ve, Zp = Ee, Jp = Xp(Zp, "DataView"), Qp = Jp, em = Ve, tm = Ee, rm = em(tm, "Promise"), nm = rm, am = Ve, om = Ee, im = am(om, "Set"), sm = im, lm = Ve, cm = Ee, um = lm(cm, "WeakMap"), fm = um, on = Qp, sn = En, ln = nm, cn = sm, un = fm, bi = ot, ut = ui, xa = "[object Map]", dm = "[object Object]", Pa = "[object Promise]", Ra = "[object Set]", Ia = "[object WeakMap]", Na = "[object DataView]", hm = ut(on), vm = ut(sn), pm = ut(ln), mm = ut(cn), gm = ut(un), ze = bi;
(on && ze(new on(new ArrayBuffer(1))) != Na || sn && ze(new sn()) != xa || ln && ze(ln.resolve()) != Pa || cn && ze(new cn()) != Ra || un && ze(new un()) != Ia) && (ze = function(e) {
  var r = bi(e), t = r == dm ? e.constructor : void 0, n = t ? ut(t) : "";
  if (n)
    switch (n) {
      case hm:
        return Na;
      case vm:
        return xa;
      case pm:
        return Pa;
      case mm:
        return Ra;
      case gm:
        return Ia;
    }
  return r;
});
var Er = ze, Fr = Mn, ym = fi, bm = uv, wm = qp, ka = Er, La = we, za = _r, Sm = xn, _m = 1, Fa = "[object Arguments]", Wa = "[object Array]", Ut = "[object Object]", $m = Object.prototype, ja = $m.hasOwnProperty;
function Em(e, r, t, n, a, o) {
  var i = La(e), s = La(r), l = i ? Wa : ka(e), c = s ? Wa : ka(r);
  l = l == Fa ? Ut : l, c = c == Fa ? Ut : c;
  var u = l == Ut, f = c == Ut, d = l == c;
  if (d && za(e)) {
    if (!za(r))
      return !1;
    i = !0, u = !1;
  }
  if (d && !u)
    return o || (o = new Fr()), i || Sm(e) ? ym(e, r, t, n, a, o) : bm(e, r, l, t, n, a, o);
  if (!(t & _m)) {
    var p = u && ja.call(e, "__wrapped__"), v = f && ja.call(r, "__wrapped__");
    if (p || v) {
      var h = p ? e.value() : e, m = v ? r.value() : r;
      return o || (o = new Fr()), a(h, m, t, n, o);
    }
  }
  return d ? (o || (o = new Fr()), wm(e, r, t, n, a, o)) : !1;
}
var Dm = Em, Mm = Dm, Ha = Le;
function wi(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !Ha(e) && !Ha(r) ? e !== e && r !== r : Mm(e, r, t, n, wi, a);
}
var Rn = wi, Om = Rn;
function Cm(e, r) {
  return Om(e, r);
}
var Tm = Cm;
const Am = /* @__PURE__ */ oe(Tm);
function Wr(e, r) {
  var t = Sn(e);
  return t ? t.innerHeight : r ? e.clientHeight : je(e).height;
}
function Si(e, r, t) {
  e.closest && !t && e.closest(r);
  var n = e;
  do {
    if (Pu(n, r))
      return n;
    n = n.parentElement;
  } while (n && n !== t && n.nodeType === document.ELEMENT_NODE);
  return null;
}
function xm(e, r, t, n) {
  for (var a = e.length, o = t + (n ? 1 : -1); n ? o-- : ++o < a; )
    if (r(e[o], o, e))
      return o;
  return -1;
}
var Pm = xm, Rm = Mn, Im = Rn, Nm = 1, km = 2;
function Lm(e, r, t, n) {
  var a = t.length, o = a, i = !n;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var s = t[a];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    s = t[a];
    var l = s[0], c = e[l], u = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var f = new Rm();
      if (n)
        var d = n(c, u, l, e, r, f);
      if (!(d === void 0 ? Im(u, c, Nm | km, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var zm = Lm, Fm = Ae;
function Wm(e) {
  return e === e && !Fm(e);
}
var _i = Wm, jm = _i, Hm = It;
function Um(e) {
  for (var r = Hm(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, jm(a)];
  }
  return r;
}
var Bm = Um;
function Ym(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var $i = Ym, Gm = zm, Km = Bm, Vm = $i;
function qm(e) {
  var r = Km(e);
  return r.length == 1 && r[0][2] ? Vm(r[0][0], r[0][1]) : function(t) {
    return t === e || Gm(t, e, r);
  };
}
var Xm = qm, Zm = we, Jm = Pt, Qm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eg = /^\w*$/;
function tg(e, r) {
  if (Zm(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || Jm(e) ? !0 : eg.test(e) || !Qm.test(e) || r != null && e in Object(r);
}
var In = tg, Ei = Dn, rg = "Expected a function";
function Nn(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(rg);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], o = t.cache;
    if (o.has(a))
      return o.get(a);
    var i = e.apply(this, n);
    return t.cache = o.set(a, i) || o, i;
  };
  return t.cache = new (Nn.Cache || Ei)(), t;
}
Nn.Cache = Ei;
var ng = Nn, ag = ng, og = 500;
function ig(e) {
  var r = ag(e, function(n) {
    return t.size === og && t.clear(), n;
  }), t = r.cache;
  return r;
}
var sg = ig, lg = sg, cg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ug = /\\(\\)?/g, fg = lg(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(cg, function(t, n, a, o) {
    r.push(a ? o.replace(ug, "$1") : n || t);
  }), r;
}), dg = fg;
function hg(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var kn = hg, Ua = at, vg = kn, pg = we, mg = Pt, gg = 1 / 0, Ba = Ua ? Ua.prototype : void 0, Ya = Ba ? Ba.toString : void 0;
function Di(e) {
  if (typeof e == "string")
    return e;
  if (pg(e))
    return vg(e, Di) + "";
  if (mg(e))
    return Ya ? Ya.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -gg ? "-0" : r;
}
var yg = Di, bg = yg;
function wg(e) {
  return e == null ? "" : bg(e);
}
var Sg = wg, _g = we, $g = In, Eg = dg, Dg = Sg;
function Mg(e, r) {
  return _g(e) ? e : $g(e, r) ? [e] : Eg(Dg(e));
}
var Dr = Mg, Og = Pt, Cg = 1 / 0;
function Tg(e) {
  if (typeof e == "string" || Og(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Cg ? "-0" : r;
}
var Nt = Tg, Ag = Dr, xg = Nt;
function Pg(e, r) {
  r = Ag(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[xg(r[t++])];
  return t && t == n ? e : void 0;
}
var Mr = Pg, Rg = Mr;
function Ig(e, r, t) {
  var n = e == null ? void 0 : Rg(e, r);
  return n === void 0 ? t : n;
}
var Ng = Ig;
function kg(e, r) {
  return e != null && r in Object(e);
}
var Lg = kg, zg = Dr, Fg = Tn, Wg = we, jg = wn, Hg = bn, Ug = Nt;
function Bg(e, r, t) {
  r = zg(r, e);
  for (var n = -1, a = r.length, o = !1; ++n < a; ) {
    var i = Ug(r[n]);
    if (!(o = e != null && t(e, i)))
      break;
    e = e[i];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && Hg(a) && jg(i, a) && (Wg(e) || Fg(e)));
}
var Yg = Bg, Gg = Lg, Kg = Yg;
function Vg(e, r) {
  return e != null && Kg(e, r, Gg);
}
var qg = Vg, Xg = Rn, Zg = Ng, Jg = qg, Qg = In, ey = _i, ty = $i, ry = Nt, ny = 1, ay = 2;
function oy(e, r) {
  return Qg(e) && ey(r) ? ty(ry(e), r) : function(t) {
    var n = Zg(t, e);
    return n === void 0 && n === r ? Jg(t, e) : Xg(r, n, ny | ay);
  };
}
var iy = oy;
function sy(e) {
  return e;
}
var Or = sy;
function ly(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var cy = ly, uy = Mr;
function fy(e) {
  return function(r) {
    return uy(r, e);
  };
}
var dy = fy, hy = cy, vy = dy, py = In, my = Nt;
function gy(e) {
  return py(e) ? hy(my(e)) : vy(e);
}
var yy = gy, by = Xm, wy = iy, Sy = Or, _y = we, $y = yy;
function Ey(e) {
  return typeof e == "function" ? e : e == null ? Sy : typeof e == "object" ? _y(e) ? wy(e[0], e[1]) : by(e) : $y(e);
}
var Cr = Ey, Dy = Pm, My = Cr, Oy = ni, Cy = Math.max;
function Ty(e, r, t) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = t == null ? 0 : Oy(t);
  return a < 0 && (a = Cy(n + a, 0)), Dy(e, My(r), a);
}
var Ay = Ty;
const xy = /* @__PURE__ */ oe(Ay);
var Py = Math.ceil, Ry = Math.max;
function Iy(e, r, t, n) {
  for (var a = -1, o = Ry(Py((r - e) / (t || 1)), 0), i = Array(o); o--; )
    i[n ? o : ++a] = e, e += t;
  return i;
}
var Ny = Iy, ky = Ny, Ly = gr, jr = ri;
function zy(e) {
  return function(r, t, n) {
    return n && typeof n != "number" && Ly(r, t, n) && (t = n = void 0), r = jr(r), t === void 0 ? (t = r, r = 0) : t = jr(t), n = n === void 0 ? r < t ? 1 : -1 : jr(n), ky(r, t, n, e);
  };
}
var Fy = zy, Wy = Fy, jy = Wy(), Hy = jy;
const Uy = /* @__PURE__ */ oe(Hy);
var Ga = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function By(e, r) {
  return !!(e === r || Ga(e) && Ga(r));
}
function Yy(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (!By(e[t], r[t]))
      return !1;
  return !0;
}
function Mi(e, r) {
  r === void 0 && (r = Yy);
  var t = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    if (t && t.lastThis === this && r(a, t.lastArgs))
      return t.lastResult;
    var i = e.apply(this, a);
    return t = {
      lastResult: i,
      lastArgs: a,
      lastThis: this
    }, i;
  }
  return n.clear = function() {
    t = null;
  }, n;
}
var Ka = at, Gy = Tn, Ky = we, Va = Ka ? Ka.isConcatSpreadable : void 0;
function Vy(e) {
  return Ky(e) || Gy(e) || !!(Va && e && e[Va]);
}
var qy = Vy, Xy = On, Zy = qy;
function Oi(e, r, t, n, a) {
  var o = -1, i = e.length;
  for (t || (t = Zy), a || (a = []); ++o < i; ) {
    var s = e[o];
    r > 0 && t(s) ? r > 1 ? Oi(s, r - 1, t, n, a) : Xy(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var Ci = Oi;
function Jy(e) {
  return function(r, t, n) {
    for (var a = -1, o = Object(r), i = n(r), s = i.length; s--; ) {
      var l = i[e ? s : ++a];
      if (t(o[l], l, o) === !1)
        break;
    }
    return r;
  };
}
var Qy = Jy, eb = Qy, tb = eb(), rb = tb, nb = rb, ab = It;
function ob(e, r) {
  return e && nb(e, r, ab);
}
var Ln = ob, ib = xt;
function sb(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!ib(t))
      return e(t, n);
    for (var a = t.length, o = r ? a : -1, i = Object(t); (r ? o-- : ++o < a) && n(i[o], o, i) !== !1; )
      ;
    return t;
  };
}
var lb = sb, cb = Ln, ub = lb, fb = ub(cb), db = fb, hb = db, vb = xt;
function pb(e, r) {
  var t = -1, n = vb(e) ? Array(e.length) : [];
  return hb(e, function(a, o, i) {
    n[++t] = r(a, o, i);
  }), n;
}
var mb = pb;
function gb(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
var yb = gb, qa = Pt;
function bb(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, o = qa(e), i = r !== void 0, s = r === null, l = r === r, c = qa(r);
    if (!s && !c && !o && e > r || o && i && l && !s && !c || n && i && l || !t && l || !a)
      return 1;
    if (!n && !o && !c && e < r || c && t && a && !n && !o || s && t && a || !i && a || !l)
      return -1;
  }
  return 0;
}
var wb = bb, Sb = wb;
function _b(e, r, t) {
  for (var n = -1, a = e.criteria, o = r.criteria, i = a.length, s = t.length; ++n < i; ) {
    var l = Sb(a[n], o[n]);
    if (l) {
      if (n >= s)
        return l;
      var c = t[n];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var $b = _b, Hr = kn, Eb = Mr, Db = Cr, Mb = mb, Ob = yb, Cb = $r, Tb = $b, Ab = Or, xb = we;
function Pb(e, r, t) {
  r.length ? r = Hr(r, function(o) {
    return xb(o) ? function(i) {
      return Eb(i, o.length === 1 ? o[0] : o);
    } : o;
  }) : r = [Ab];
  var n = -1;
  r = Hr(r, Cb(Db));
  var a = Mb(e, function(o, i, s) {
    var l = Hr(r, function(c) {
      return c(o);
    });
    return { criteria: l, index: ++n, value: o };
  });
  return Ob(a, function(o, i) {
    return Tb(o, i, t);
  });
}
var Rb = Pb;
function Ib(e, r, t) {
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
var Nb = Ib, kb = Nb, Xa = Math.max;
function Lb(e, r, t) {
  return r = Xa(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, o = Xa(n.length - r, 0), i = Array(o); ++a < o; )
      i[a] = n[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = n[a];
    return s[r] = t(i), kb(e, this, s);
  };
}
var Ti = Lb;
function zb(e) {
  return function() {
    return e;
  };
}
var Fb = zb, Wb = Ve, jb = function() {
  try {
    var e = Wb(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ai = jb, Hb = Fb, Za = Ai, Ub = Or, Bb = Za ? function(e, r) {
  return Za(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Hb(r),
    writable: !0
  });
} : Ub, Yb = Bb, Gb = 800, Kb = 16, Vb = Date.now;
function qb(e) {
  var r = 0, t = 0;
  return function() {
    var n = Vb(), a = Kb - (n - t);
    if (t = n, a > 0) {
      if (++r >= Gb)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var Xb = qb, Zb = Yb, Jb = Xb, Qb = Jb(Zb), xi = Qb, ew = Or, tw = Ti, rw = xi;
function nw(e, r) {
  return rw(tw(e, r, ew), e + "");
}
var Pi = nw, aw = Ci, ow = Rb, iw = Pi, Ja = gr, sw = iw(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Ja(e, r[0], r[1]) ? r = [] : t > 2 && Ja(r[0], r[1], r[2]) && (r = [r[0]]), ow(e, aw(r, 1), []);
}), lw = sw;
const cw = /* @__PURE__ */ oe(lw);
function fn(e, r) {
  var t = Sn(e);
  return t ? t.innerWidth : r ? e.clientWidth : je(e).width;
}
function Ri(e) {
  return zo(e) || Jo(e) || pn(e) || Fo();
}
function uw(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Ii = uw, Qa = Ai;
function fw(e, r, t) {
  r == "__proto__" && Qa ? Qa(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var zn = fw, dw = zn, hw = At, vw = Object.prototype, pw = vw.hasOwnProperty;
function mw(e, r, t) {
  var n = e[r];
  (!(pw.call(e, r) && hw(n, t)) || t === void 0 && !(r in e)) && dw(e, r, t);
}
var Ni = mw, gw = Ni, yw = zn;
function bw(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var o = -1, i = r.length; ++o < i; ) {
    var s = r[o], l = n ? n(t[s], e[s], s, t, e) : void 0;
    l === void 0 && (l = e[s]), a ? yw(t, s, l) : gw(t, s, l);
  }
  return t;
}
var kt = bw, ww = kt, Sw = It;
function _w(e, r) {
  return e && ww(r, Sw(r), e);
}
var $w = _w;
function Ew(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Dw = Ew, Mw = Ae, Ow = Pn, Cw = Dw, Tw = Object.prototype, Aw = Tw.hasOwnProperty;
function xw(e) {
  if (!Mw(e))
    return Cw(e);
  var r = Ow(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !Aw.call(e, n)) || t.push(n);
  return t;
}
var Pw = xw, Rw = mi, Iw = Pw, Nw = xt;
function kw(e) {
  return Nw(e) ? Rw(e, !0) : Iw(e);
}
var Tr = kw, Lw = kt, zw = Tr;
function Fw(e, r) {
  return e && Lw(r, zw(r), e);
}
var Ww = Fw, sr = { exports: {} };
sr.exports;
(function(e, r) {
  var t = Ee, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, i = o ? t.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var f = c.length, d = s ? s(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(sr, sr.exports);
var jw = sr.exports;
function Hw(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Uw = Hw, Bw = kt, Yw = Cn;
function Gw(e, r) {
  return Bw(e, Yw(e), r);
}
var Kw = Gw, Vw = gi, qw = Vw(Object.getPrototypeOf, Object), Ar = qw, Xw = On, Zw = Ar, Jw = Cn, Qw = vi, e1 = Object.getOwnPropertySymbols, t1 = e1 ? function(e) {
  for (var r = []; e; )
    Xw(r, Jw(e)), e = Zw(e);
  return r;
} : Qw, ki = t1, r1 = kt, n1 = ki;
function a1(e, r) {
  return r1(e, n1(e), r);
}
var o1 = a1, i1 = hi, s1 = ki, l1 = Tr;
function c1(e) {
  return i1(e, l1, s1);
}
var Li = c1, u1 = Object.prototype, f1 = u1.hasOwnProperty;
function d1(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && f1.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var h1 = d1, eo = di;
function v1(e) {
  var r = new e.constructor(e.byteLength);
  return new eo(r).set(new eo(e)), r;
}
var Fn = v1, p1 = Fn;
function m1(e, r) {
  var t = r ? p1(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var g1 = m1, y1 = /\w*$/;
function b1(e) {
  var r = new e.constructor(e.source, y1.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var w1 = b1, to = at, ro = to ? to.prototype : void 0, no = ro ? ro.valueOf : void 0;
function S1(e) {
  return no ? Object(no.call(e)) : {};
}
var _1 = S1, $1 = Fn;
function E1(e, r) {
  var t = r ? $1(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var D1 = E1, M1 = Fn, O1 = g1, C1 = w1, T1 = _1, A1 = D1, x1 = "[object Boolean]", P1 = "[object Date]", R1 = "[object Map]", I1 = "[object Number]", N1 = "[object RegExp]", k1 = "[object Set]", L1 = "[object String]", z1 = "[object Symbol]", F1 = "[object ArrayBuffer]", W1 = "[object DataView]", j1 = "[object Float32Array]", H1 = "[object Float64Array]", U1 = "[object Int8Array]", B1 = "[object Int16Array]", Y1 = "[object Int32Array]", G1 = "[object Uint8Array]", K1 = "[object Uint8ClampedArray]", V1 = "[object Uint16Array]", q1 = "[object Uint32Array]";
function X1(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case F1:
      return M1(e);
    case x1:
    case P1:
      return new n(+e);
    case W1:
      return O1(e, t);
    case j1:
    case H1:
    case U1:
    case B1:
    case Y1:
    case G1:
    case K1:
    case V1:
    case q1:
      return A1(e, t);
    case R1:
      return new n();
    case I1:
    case L1:
      return new n(e);
    case N1:
      return C1(e);
    case k1:
      return new n();
    case z1:
      return T1(e);
  }
}
var Z1 = X1, J1 = Ae, ao = Object.create, Q1 = function() {
  function e() {
  }
  return function(r) {
    if (!J1(r))
      return {};
    if (ao)
      return ao(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), zi = Q1, eS = zi, tS = Ar, rS = Pn;
function nS(e) {
  return typeof e.constructor == "function" && !rS(e) ? eS(tS(e)) : {};
}
var aS = nS, oS = Er, iS = Le, sS = "[object Map]";
function lS(e) {
  return iS(e) && oS(e) == sS;
}
var cS = lS, uS = cS, fS = $r, oo = An, io = oo && oo.isMap, dS = io ? fS(io) : uS, hS = dS, vS = Er, pS = Le, mS = "[object Set]";
function gS(e) {
  return pS(e) && vS(e) == mS;
}
var yS = gS, bS = yS, wS = $r, so = An, lo = so && so.isSet, SS = lo ? wS(lo) : bS, _S = SS, $S = Mn, ES = Ii, DS = Ni, MS = $w, OS = Ww, CS = jw, TS = Uw, AS = Kw, xS = o1, PS = yi, RS = Li, IS = Er, NS = h1, kS = Z1, LS = aS, zS = we, FS = _r, WS = hS, jS = Ae, HS = _S, US = It, BS = Tr, YS = 1, GS = 2, KS = 4, Fi = "[object Arguments]", VS = "[object Array]", qS = "[object Boolean]", XS = "[object Date]", ZS = "[object Error]", Wi = "[object Function]", JS = "[object GeneratorFunction]", QS = "[object Map]", e0 = "[object Number]", ji = "[object Object]", t0 = "[object RegExp]", r0 = "[object Set]", n0 = "[object String]", a0 = "[object Symbol]", o0 = "[object WeakMap]", i0 = "[object ArrayBuffer]", s0 = "[object DataView]", l0 = "[object Float32Array]", c0 = "[object Float64Array]", u0 = "[object Int8Array]", f0 = "[object Int16Array]", d0 = "[object Int32Array]", h0 = "[object Uint8Array]", v0 = "[object Uint8ClampedArray]", p0 = "[object Uint16Array]", m0 = "[object Uint32Array]", Q = {};
Q[Fi] = Q[VS] = Q[i0] = Q[s0] = Q[qS] = Q[XS] = Q[l0] = Q[c0] = Q[u0] = Q[f0] = Q[d0] = Q[QS] = Q[e0] = Q[ji] = Q[t0] = Q[r0] = Q[n0] = Q[a0] = Q[h0] = Q[v0] = Q[p0] = Q[m0] = !0;
Q[ZS] = Q[Wi] = Q[o0] = !1;
function Zt(e, r, t, n, a, o) {
  var i, s = r & YS, l = r & GS, c = r & KS;
  if (t && (i = a ? t(e, n, a, o) : t(e)), i !== void 0)
    return i;
  if (!jS(e))
    return e;
  var u = zS(e);
  if (u) {
    if (i = NS(e), !s)
      return TS(e, i);
  } else {
    var f = IS(e), d = f == Wi || f == JS;
    if (FS(e))
      return CS(e, s);
    if (f == ji || f == Fi || d && !a) {
      if (i = l || d ? {} : LS(e), !s)
        return l ? xS(e, OS(i, e)) : AS(e, MS(i, e));
    } else {
      if (!Q[f])
        return a ? e : {};
      i = kS(e, f, s);
    }
  }
  o || (o = new $S());
  var p = o.get(e);
  if (p)
    return p;
  o.set(e, i), HS(e) ? e.forEach(function(m) {
    i.add(Zt(m, r, t, m, e, o));
  }) : WS(e) && e.forEach(function(m, y) {
    i.set(y, Zt(m, r, t, y, e, o));
  });
  var v = c ? l ? RS : PS : l ? BS : US, h = u ? void 0 : v(e);
  return ES(h || e, function(m, y) {
    h && (y = m, m = e[y]), DS(i, y, Zt(m, r, t, y, e, o));
  }), i;
}
var g0 = Zt;
function y0(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var b0 = y0, w0 = Mr, S0 = Qo;
function _0(e, r) {
  return r.length < 2 ? e : w0(e, S0(r, 0, -1));
}
var $0 = _0, E0 = Dr, D0 = b0, M0 = $0, O0 = Nt;
function C0(e, r) {
  return r = E0(r, e), e = M0(e, r), e == null || delete e[O0(D0(r))];
}
var T0 = C0, A0 = ot, x0 = Ar, P0 = Le, R0 = "[object Object]", I0 = Function.prototype, N0 = Object.prototype, Hi = I0.toString, k0 = N0.hasOwnProperty, L0 = Hi.call(Object);
function z0(e) {
  if (!P0(e) || A0(e) != R0)
    return !1;
  var r = x0(e);
  if (r === null)
    return !0;
  var t = k0.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Hi.call(t) == L0;
}
var F0 = z0, W0 = F0;
function j0(e) {
  return W0(e) ? void 0 : e;
}
var H0 = j0, U0 = Ci;
function B0(e) {
  var r = e == null ? 0 : e.length;
  return r ? U0(e, 1) : [];
}
var Y0 = B0, G0 = Y0, K0 = Ti, V0 = xi;
function q0(e) {
  return V0(K0(e, void 0, G0), e + "");
}
var X0 = q0, Z0 = kn, J0 = g0, Q0 = T0, e_ = Dr, t_ = kt, r_ = H0, n_ = X0, a_ = Li, o_ = 1, i_ = 2, s_ = 4, l_ = n_(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = Z0(r, function(o) {
    return o = e_(o, e), n || (n = o.length > 1), o;
  }), t_(e, a_(e), t), n && (t = J0(t, o_ | i_ | s_, r_));
  for (var a = r.length; a--; )
    Q0(t, r[a]);
  return t;
}), c_ = l_;
const u_ = /* @__PURE__ */ oe(c_);
var f_ = Pi, d_ = At, h_ = gr, v_ = Tr, Ui = Object.prototype, p_ = Ui.hasOwnProperty, m_ = f_(function(e, r) {
  e = Object(e);
  var t = -1, n = r.length, a = n > 2 ? r[2] : void 0;
  for (a && h_(r[0], r[1], a) && (n = 1); ++t < n; )
    for (var o = r[t], i = v_(o), s = -1, l = i.length; ++s < l; ) {
      var c = i[s], u = e[c];
      (u === void 0 || d_(u, Ui[c]) && !p_.call(e, c)) && (e[c] = o[c]);
    }
  return e;
}), g_ = m_;
const y_ = /* @__PURE__ */ oe(g_);
var b_ = Ii, w_ = zi, S_ = Ln, __ = Cr, $_ = Ar, E_ = we, D_ = _r, M_ = yn, O_ = Ae, C_ = xn;
function T_(e, r, t) {
  var n = E_(e), a = n || D_(e) || C_(e);
  if (r = __(r), t == null) {
    var o = e && e.constructor;
    a ? t = n ? new o() : [] : O_(e) ? t = M_(o) ? w_($_(e)) : {} : t = {};
  }
  return (a ? b_ : S_)(e, function(i, s, l) {
    return r(t, i, s, l);
  }), t;
}
var A_ = T_;
const x_ = /* @__PURE__ */ oe(A_);
var P_ = zn, R_ = Ln, I_ = Cr;
function N_(e, r) {
  var t = {};
  return r = I_(r), R_(e, function(n, a, o) {
    P_(t, a, r(n, a, o));
  }), t;
}
var k_ = N_;
const L_ = /* @__PURE__ */ oe(k_);
var Bi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n, a) {
      n.prototype.isBetween = function(o, i, s, l) {
        var c = a(o), u = a(i), f = (l = l || "()")[0] === "(", d = l[1] === ")";
        return (f ? this.isAfter(c, s) : !this.isBefore(c, s)) && (d ? this.isBefore(u, s) : !this.isAfter(u, s)) || (f ? this.isBefore(c, s) : !this.isAfter(c, s)) && (d ? this.isAfter(u, s) : !this.isBefore(u, s));
      };
    };
  });
})(Bi);
var z_ = Bi.exports;
const F_ = /* @__PURE__ */ oe(z_);
var Yi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n) {
      n.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(Yi);
var W_ = Yi.exports;
const j_ = /* @__PURE__ */ oe(W_);
var Gi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n) {
      n.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(Gi);
var H_ = Gi.exports;
const U_ = /* @__PURE__ */ oe(H_);
var Ki = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n, a) {
      var o = n.prototype, i = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, s = function(f, d, p, v, h) {
        var m = f.name ? f : f.$locale(), y = i(m[d]), b = i(m[p]), S = y || b.map(function($) {
          return $.slice(0, v);
        });
        if (!h)
          return S;
        var _ = m.weekStart;
        return S.map(function($, D) {
          return S[(D + (_ || 0)) % 7];
        });
      }, l = function() {
        return a.Ls[a.locale()];
      }, c = function(f, d) {
        return f.formats[d] || function(p) {
          return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, h, m) {
            return h || m.slice(1);
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
})(Ki);
var B_ = Ki.exports;
const Y_ = /* @__PURE__ */ oe(B_);
var Vi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var i = a.prototype, s = i.format;
      o.en.formats = t, i.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, u = function(f, d) {
          return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(p, v, h) {
            var m = h && h.toUpperCase();
            return v || d[h] || t[h] || d[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, b, S) {
              return b || S.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, u);
      };
    };
  });
})(Vi);
var G_ = Vi.exports;
const K_ = /* @__PURE__ */ oe(G_);
var qi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n, a) {
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
})(qi);
var V_ = qi.exports;
const q_ = /* @__PURE__ */ oe(V_);
var Xi = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var l = i.prototype;
      s.utc = function(h) {
        var m = { date: h, utc: !0, args: arguments };
        return new i(m);
      }, l.utc = function(h) {
        var m = s(this.toDate(), { locale: this.$L, utc: !0 });
        return h ? m.add(this.utcOffset(), t) : m;
      }, l.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var c = l.parse;
      l.parse = function(h) {
        h.utc && (this.$u = !0), this.$utils().u(h.$offset) || (this.$offset = h.$offset), c.call(this, h);
      };
      var u = l.init;
      l.init = function() {
        if (this.$u) {
          var h = this.$d;
          this.$y = h.getUTCFullYear(), this.$M = h.getUTCMonth(), this.$D = h.getUTCDate(), this.$W = h.getUTCDay(), this.$H = h.getUTCHours(), this.$m = h.getUTCMinutes(), this.$s = h.getUTCSeconds(), this.$ms = h.getUTCMilliseconds();
        } else
          u.call(this);
      };
      var f = l.utcOffset;
      l.utcOffset = function(h, m) {
        var y = this.$utils().u;
        if (y(h))
          return this.$u ? 0 : y(this.$offset) ? f.call(this) : this.$offset;
        if (typeof h == "string" && (h = function($) {
          $ === void 0 && ($ = "");
          var D = $.match(n);
          if (!D)
            return null;
          var C = ("" + D[0]).match(a) || ["-", 0, 0], L = C[0], F = 60 * +C[1] + +C[2];
          return F === 0 ? 0 : L === "+" ? F : -F;
        }(h), h === null))
          return this;
        var b = Math.abs(h) <= 16 ? 60 * h : h, S = this;
        if (m)
          return S.$offset = b, S.$u = h === 0, S;
        if (h !== 0) {
          var _ = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (S = this.local().add(b + _, t)).$offset = b, S.$x.$localOffset = _;
        } else
          S = this.utc();
        return S;
      };
      var d = l.format;
      l.format = function(h) {
        var m = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return d.call(this, m);
      }, l.valueOf = function() {
        var h = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * h;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var p = l.toDate;
      l.toDate = function(h) {
        return h === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : p.call(this);
      };
      var v = l.diff;
      l.diff = function(h, m, y) {
        if (h && this.$u === h.$u)
          return v.call(this, h, m, y);
        var b = this.local(), S = s(h).local();
        return v.call(b, S, m, y);
      };
    };
  });
})(Xi);
var X_ = Xi.exports;
const Z_ = /* @__PURE__ */ oe(X_);
function Me(e) {
  return e.children;
}
var ge = {
  PREVIOUS: "PREV",
  NEXT: "NEXT",
  TODAY: "TODAY",
  DATE: "DATE"
}, ce = {
  MONTH: "month",
  WEEK: "week",
  WORK_WEEK: "work_week",
  DAY: "day",
  AGENDA: "agenda"
}, co = Object.keys(ce).map(function(e) {
  return ce[e];
});
P.oneOfType([P.string, P.func]);
P.any;
P.func;
P.oneOfType([P.arrayOf(P.oneOf(co)), P.objectOf(function(e, r) {
  var t = co.indexOf(r) !== -1 && typeof e[r] == "boolean";
  if (t)
    return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  return P.elementType.apply(P, [e, r].concat(a));
})]);
P.oneOfType([P.oneOf(["overlap", "no-overlap"]), P.func]);
function re(e, r) {
  e && e.apply(null, [].concat(r));
}
var uo = {
  seconds: 1e3,
  minutes: 1e3 * 60,
  hours: 1e3 * 60 * 60,
  day: 1e3 * 60 * 60 * 24
};
function Zi(e, r) {
  var t = ue(e, "month");
  return ue(t, "week", r.startOfWeek());
}
function Ji(e, r) {
  var t = rr(e, "month");
  return rr(t, "week", r.startOfWeek());
}
function J_(e, r) {
  for (var t = Zi(e, r), n = Ji(e, r), a = []; rt(t, n, "day"); )
    a.push(t), t = Se(t, 1, "day");
  return a;
}
function Q_(e, r) {
  var t = ue(e, r);
  return Ct(t, e) ? t : Se(t, 1, r);
}
function e$(e, r) {
  for (var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", n = e, a = []; rt(n, r, t); )
    a.push(n), n = Se(n, 1, t);
  return a;
}
function t$(e, r) {
  return r == null && e == null ? null : (r == null && (r = /* @__PURE__ */ new Date()), e == null && (e = /* @__PURE__ */ new Date()), e = ue(e, "day"), e = Dt(e, Dt(r)), e = et(e, et(r)), e = Et(e, Et(r)), $t(e, $t(r)));
}
function fo(e) {
  return Dt(e) === 0 && et(e) === 0 && Et(e) === 0 && $t(e) === 0;
}
function r$(e, r, t, n) {
  return t === "day" && (t = "date"), Math.abs(
    // eslint-disable-next-line import/namespace
    na[t](e, void 0, n) - // eslint-disable-next-line import/namespace
    na[t](r, void 0, n)
  );
}
function Wn(e, r, t) {
  return !t || t === "milliseconds" ? Math.abs(+e - +r) : Math.round(Math.abs(+ue(e, t) / uo[t] - +ue(r, t) / uo[t]));
}
var n$ = P.oneOfType([P.string, P.func]);
function a$(e, r, t, n, a) {
  var o = typeof n == "function" ? n(t, a, e) : r.call(e, t, n, a);
  return gt(o == null || typeof o == "string", "`localizer format(..)` must return a string, null, or undefined"), o;
}
function o$(e, r, t) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, r + t, 0, 0);
}
function jn(e, r) {
  return e.getTimezoneOffset() - r.getTimezoneOffset();
}
function i$(e, r) {
  return Wn(e, r, "minutes") + jn(e, r);
}
function s$(e) {
  var r = ue(e, "day");
  return Wn(r, e, "minutes") + jn(r, e);
}
function l$(e, r) {
  return gn(e, r, "day");
}
function c$(e, r, t) {
  var n = Ct(e, r, "minutes");
  return n ? Tt(r, t, "minutes") : mr(r, t, "minutes");
}
function dn(e, r) {
  return r$(e, r, "day");
}
function u$(e) {
  var r = e.evtA, t = r.start, n = r.end, a = r.allDay, o = e.evtB, i = o.start, s = o.end, l = o.allDay, c = +ue(t, "day") - +ue(i, "day"), u = dn(t, n), f = dn(i, s);
  return c || // sort by start Day first
  f - u || // events spanning multiple days go first
  !!l - !!a || // then allDay single day events
  +t - +i || // then sort by start time
  +n - +s;
}
function f$(e) {
  var r = e.event, t = r.start, n = r.end, a = e.range, o = a.start, i = a.end, s = ue(t, "day"), l = rt(s, i, "day"), c = mn(s, n, "minutes"), u = c ? mr(n, o, "minutes") : Tt(n, o, "minutes");
  return l && u;
}
function d$(e, r) {
  return Ct(e, r, "day");
}
function h$(e, r) {
  return fo(e) && fo(r);
}
var v$ = /* @__PURE__ */ le(function e(r) {
  var t = this;
  se(this, e), gt(typeof r.format == "function", "date localizer `format(..)` must be a function"), gt(typeof r.firstOfWeek == "function", "date localizer `firstOfWeek(..)` must be a function"), this.propType = r.propType || n$, this.formats = r.formats, this.format = function() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return a$.apply(void 0, [t, r.format].concat(a));
  }, this.startOfWeek = r.firstOfWeek, this.merge = r.merge || t$, this.inRange = r.inRange || Vo, this.lt = r.lt || gn, this.lte = r.lte || rt, this.gt = r.gt || mr, this.gte = r.gte || Tt, this.eq = r.eq || Ct, this.neq = r.neq || mn, this.startOf = r.startOf || ue, this.endOf = r.endOf || rr, this.add = r.add || Se, this.range = r.range || e$, this.diff = r.diff || Wn, this.ceil = r.ceil || Q_, this.min = r.min || Go, this.max = r.max || Ko, this.minutes = r.minutes || et, this.daySpan = r.daySpan || dn, this.firstVisibleDay = r.firstVisibleDay || Zi, this.lastVisibleDay = r.lastVisibleDay || Ji, this.visibleDays = r.visibleDays || J_, this.getSlotDate = r.getSlotDate || o$, this.getTimezoneOffset = r.getTimezoneOffset || function(n) {
    return n.getTimezoneOffset();
  }, this.getDstOffset = r.getDstOffset || jn, this.getTotalMin = r.getTotalMin || i$, this.getMinutesFromMidnight = r.getMinutesFromMidnight || s$, this.continuesPrior = r.continuesPrior || l$, this.continuesAfter = r.continuesAfter || c$, this.sortEvents = r.sortEvents || u$, this.inEventRange = r.inEventRange || f$, this.isSameDate = r.isSameDate || d$, this.startAndEndAreDateOnly = r.startAndEndAreDateOnly || h$, this.segmentOffset = r.browserTZOffset ? r.browserTZOffset() : 0;
});
function p$(e, r, t, n) {
  var a = J(J({}, e.formats), t);
  return J(J({}, e), {}, {
    messages: n,
    startOfWeek: function() {
      return e.startOfWeek(r);
    },
    format: function(i, s) {
      return e.format(i, a[s] || s, r);
    }
  });
}
var m$ = {
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
function g$(e) {
  return J(J({}, m$), e);
}
function y$(e) {
  var r = e.ref, t = e.callback;
  I.useEffect(function() {
    var n = function(o) {
      r.current && !r.current.contains(o.target) && t();
    };
    return document.addEventListener("mousedown", n), function() {
      document.removeEventListener("mousedown", n);
    };
  }, [r, t]);
}
var b$ = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], Qi = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.style, o = n.className, i = n.event, s = n.selected, l = n.isAllDay, c = n.onSelect, u = n.onDoubleClick, f = n.onKeyPress, d = n.localizer, p = n.continuesPrior, v = n.continuesAfter, h = n.accessors, m = n.getters, y = n.children, b = n.components, S = b.event, _ = b.eventWrapper, $ = n.slotStart, D = n.slotEnd, C = $e(n, b$);
      delete C.resizable;
      var L = h.title(i), F = h.tooltip(i), A = h.end(i), T = h.start(i), j = h.allDay(i), Y = l || j || d.diff(T, d.ceil(A, "day"), "day") > 1, W = m.eventProp(i, T, A, s), x = /* @__PURE__ */ g.createElement("div", {
        className: "rbc-event-content",
        title: F || void 0
      }, S ? /* @__PURE__ */ g.createElement(S, {
        event: i,
        continuesPrior: p,
        continuesAfter: v,
        title: L,
        isAllDay: j,
        localizer: d,
        slotStart: $,
        slotEnd: D
      }) : L);
      return /* @__PURE__ */ g.createElement(_, Object.assign({}, this.props, {
        type: "date"
      }), /* @__PURE__ */ g.createElement("div", Object.assign({}, C, {
        style: J(J({}, W.style), a),
        className: ie("rbc-event", o, W.className, {
          "rbc-selected": s,
          "rbc-event-allday": Y,
          "rbc-event-continues-prior": p,
          "rbc-event-continues-after": v
        }),
        onClick: function(k) {
          return c && c(i, k);
        },
        onDoubleClick: function(k) {
          return u && u(i, k);
        },
        onKeyDown: function(k) {
          return f && f(i, k);
        }
      }), typeof y == "function" ? y(x) : x));
    }
  }]), r;
}(g.Component);
function xr(e, r) {
  return !e || r == null ? !1 : Am(e, r);
}
function es(e, r) {
  var t = e.right - e.left, n = t / r;
  return n;
}
function ts(e, r, t, n) {
  var a = es(e, n);
  return t ? n - 1 - Math.floor((r - e.left) / a) : Math.floor((r - e.left) / a);
}
function w$(e, r) {
  var t = r.x, n = r.y;
  return n >= e.top && n <= e.bottom && t >= e.left && t <= e.right;
}
function S$(e, r, t, n, a) {
  var o = -1, i = -1, s = n - 1, l = es(r, n), c = ts(r, t.x, a, n), u = r.top < t.y && r.bottom > t.y, f = r.top < e.y && r.bottom > e.y, d = e.y > r.bottom, p = r.top > e.y, v = t.top < r.top && t.bottom > r.bottom;
  return v && (o = 0, i = s), u && (p ? (o = 0, i = c) : d && (o = c, i = s)), f && (o = i = a ? s - Math.floor((e.x - r.left) / l) : Math.floor((e.x - r.left) / l), u ? c < o ? o = c : i = c : e.y < t.y ? i = s : o = 0), {
    startIdx: o,
    endIdx: i
  };
}
function _$(e) {
  var r = e.target, t = e.offset, n = e.container, a = e.box, o = je(r), i = o.top, s = o.left, l = o.width, c = o.height, u = je(n), f = u.top, d = u.left, p = u.width, v = u.height, h = je(a), m = h.width, y = h.height, b = f + v, S = d + p, _ = i + y, $ = s + m, D = t.x, C = t.y, L = _ > b ? i - y - C : i + C + c, F = $ > S ? s + D - m + l : s + D;
  return {
    topOffset: L,
    leftOffset: F
  };
}
function $$(e) {
  var r = e.containerRef, t = e.accessors, n = e.getters, a = e.selected, o = e.components, i = e.localizer, s = e.position, l = e.show, c = e.events, u = e.slotStart, f = e.slotEnd, d = e.onSelect, p = e.onDoubleClick, v = e.onKeyPress, h = e.handleDragStart, m = e.popperRef, y = e.target, b = e.offset;
  y$({
    ref: m,
    callback: l
  }), I.useLayoutEffect(function() {
    var $ = _$({
      target: y,
      offset: b,
      container: r.current,
      box: m.current
    }), D = $.topOffset, C = $.leftOffset;
    m.current.style.top = "".concat(D, "px"), m.current.style.left = "".concat(C, "px");
  }, [b.x, b.y, y]);
  var S = s.width, _ = {
    minWidth: S + S / 2
  };
  return /* @__PURE__ */ g.createElement("div", {
    style: _,
    className: "rbc-overlay",
    ref: m
  }, /* @__PURE__ */ g.createElement("div", {
    className: "rbc-overlay-header"
  }, i.format(u, "dayHeaderFormat")), c.map(function($, D) {
    return /* @__PURE__ */ g.createElement(Qi, {
      key: D,
      type: "popup",
      localizer: i,
      event: $,
      getters: n,
      onSelect: d,
      accessors: t,
      components: o,
      onDoubleClick: p,
      onKeyPress: v,
      continuesPrior: i.lt(t.end($), u, "day"),
      continuesAfter: i.gte(t.start($), f, "day"),
      slotStart: u,
      slotEnd: f,
      selected: xr($, a),
      draggable: !0,
      onDragStart: function() {
        return h($);
      },
      onDragEnd: function() {
        return l();
      }
    });
  }));
}
var rs = /* @__PURE__ */ g.forwardRef(function(e, r) {
  return /* @__PURE__ */ g.createElement($$, Object.assign({}, e, {
    popperRef: r
  }));
});
rs.propTypes = {
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
function E$(e) {
  var r = e.containerRef, t = e.popupOffset, n = t === void 0 ? 5 : t, a = e.overlay, o = e.accessors, i = e.localizer, s = e.components, l = e.getters, c = e.selected, u = e.handleSelectEvent, f = e.handleDoubleClickEvent, d = e.handleKeyPressEvent, p = e.handleDragStart, v = e.onHide, h = e.overlayDisplay, m = I.useRef(null);
  if (!a.position)
    return null;
  var y = n;
  isNaN(n) || (y = {
    x: n,
    y: n
  });
  var b = a.position, S = a.events, _ = a.date, $ = a.end;
  return /* @__PURE__ */ g.createElement(rf, {
    rootClose: !0,
    flip: !0,
    show: !0,
    placement: "bottom",
    onHide: v,
    target: a.target
  }, function(D) {
    var C = D.props;
    return /* @__PURE__ */ g.createElement(rs, Object.assign({}, C, {
      containerRef: r,
      ref: m,
      target: a.target,
      offset: y,
      accessors: o,
      getters: l,
      selected: c,
      components: s,
      localizer: i,
      position: b,
      show: h,
      events: S,
      slotStart: _,
      slotEnd: $,
      onSelect: u,
      onDoubleClick: f,
      onKeyPress: d,
      handleDragStart: p
    }));
  });
}
var Hn = /* @__PURE__ */ g.forwardRef(function(e, r) {
  return /* @__PURE__ */ g.createElement(E$, Object.assign({}, e, {
    containerRef: r
  }));
});
Hn.propTypes = {
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
function fe(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return mt(t, e, r, {
    passive: !1
  });
}
function D$(e, r, t) {
  return !e || Mt(e, document.elementFromPoint(r, t));
}
function M$(e, r) {
  var t = r.clientX, n = r.clientY, a = document.elementFromPoint(t, n);
  return Si(a, ".rbc-event", e);
}
function O$(e, r) {
  var t = r.clientX, n = r.clientY, a = document.elementFromPoint(t, n);
  return Si(a, ".rbc-show-more", e);
}
function lr(e, r) {
  return !!M$(e, r);
}
function C$(e, r) {
  return !!O$(e, r);
}
function pt(e) {
  var r = e;
  return e.touches && e.touches.length && (r = e.touches[0]), {
    clientX: r.clientX,
    clientY: r.clientY,
    pageX: r.pageX,
    pageY: r.pageY
  };
}
var ho = 5, T$ = 250, ns = /* @__PURE__ */ function() {
  function e(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.global, a = n === void 0 ? !1 : n, o = t.longPressThreshold, i = o === void 0 ? 250 : o, s = t.validContainers, l = s === void 0 ? [] : s;
    se(this, e), this._initialEvent = null, this.selecting = !1, this.isDetached = !1, this.container = r, this.globalMouse = !r || a, this.longPressThreshold = i, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = fe("touchmove", function() {
    }, window), this._removeKeyDownListener = fe("keydown", this._keyListener), this._removeKeyUpListener = fe("keyup", this._keyListener), this._removeDropFromOutsideListener = fe("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = fe("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return le(e, [{
    key: "on",
    value: function(t, n) {
      var a = this._listeners[t] || (this._listeners[t] = []);
      return a.push(n), {
        remove: function() {
          var i = a.indexOf(n);
          i !== -1 && a.splice(i, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function(t) {
      for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        a[o - 1] = arguments[o];
      var i, s = this._listeners[t] || [];
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
    value: function(t) {
      var n = this._selectRect;
      return !n || !this.selecting ? !1 : vo(n, Ke(t));
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
      var a = this, o = null, i = null, s = null, l = function(d) {
        o = setTimeout(function() {
          u(), t(d);
        }, a.longPressThreshold), i = fe("touchmove", function() {
          return u();
        }), s = fe("touchend", function() {
          return u();
        });
      }, c = fe("touchstart", l), u = function() {
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
      var t = this, n = fe("mousedown", function(o) {
        t._removeInitialEventListener(), t._handleInitialEvent(o), t._removeInitialEventListener = fe("mousedown", t._handleInitialEvent);
      }), a = fe("touchstart", function(o) {
        t._removeInitialEventListener(), t._removeInitialEventListener = t._addLongPressListener(t._handleInitialEvent, o);
      });
      this._removeInitialEventListener = function() {
        n(), a();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function(t) {
      var n = pt(t), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
      this.emit("dropFromOutside", {
        x: a,
        y: o,
        clientX: i,
        clientY: s
      }), t.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function(t) {
      var n = pt(t), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
      this.emit("dragOverFromOutside", {
        x: a,
        y: o,
        clientX: i,
        clientY: s
      }), t.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function(t) {
      if (this._initialEvent = t, !this.isDetached) {
        var n = pt(t), a = n.clientX, o = n.clientY, i = n.pageX, s = n.pageY, l = this.container(), c, u;
        if (!(t.which === 3 || t.button === 2 || !D$(l, a, o))) {
          if (!this.globalMouse && l && !Mt(l, t.target)) {
            var f = A$(0), d = f.top, p = f.left, v = f.bottom, h = f.right;
            if (u = Ke(l), c = vo({
              top: u.top - d,
              left: u.left - p,
              bottom: u.bottom + v,
              right: u.right + h
            }, {
              top: s,
              left: i
            }), !c)
              return;
          }
          var m = this.emit("beforeSelect", this._initialEventData = {
            isTouch: /^touch/.test(t.type),
            x: i,
            y: s,
            clientX: a,
            clientY: o
          });
          if (m !== !1)
            switch (t.type) {
              case "mousedown":
                this._removeEndListener = fe("mouseup", this._handleTerminatingEvent), this._onEscListener = fe("keydown", this._handleTerminatingEvent), this._removeMoveListener = fe("mousemove", this._handleMoveEvent);
                break;
              case "touchstart":
                this._handleMoveEvent(t), this._removeEndListener = fe("touchend", this._handleTerminatingEvent), this._removeMoveListener = fe("touchmove", this._handleMoveEvent);
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
      return !a || !a.length || !n ? !0 : a.some(function(o) {
        return !!n.closest(o);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function(t) {
      var n = this.selecting, a = this._selectRect;
      if (!n && t.type.includes("key") && (t = this._initialEvent), this.selecting = !1, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!t) {
        var o = !this.container || Mt(this.container(), t.target), i = this._isWithinValidContainer(t);
        return t.key === "Escape" || !i ? this.emit("reset") : !n && o ? this._handleClickEvent(t) : n ? this.emit("select", a) : this.emit("reset");
      }
    }
  }, {
    key: "_handleClickEvent",
    value: function(t) {
      var n = pt(t), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
      return this._lastClickData && l - this._lastClickData.timestamp < T$ ? (this._lastClickData = null, this.emit("doubleClick", {
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
    value: function(t) {
      if (!(this._initialEventData === null || this.isDetached)) {
        var n = this._initialEventData, a = n.x, o = n.y, i = pt(t), s = i.pageX, l = i.pageY, c = Math.abs(a - s), u = Math.abs(o - l), f = Math.min(s, a), d = Math.min(l, o), p = this.selecting, v = this.isClick(s, l);
        v && !p && !(c || u) || (!p && !v && this.emit("selectStart", this._initialEventData), v || (this.selecting = !0, this._selectRect = {
          top: d,
          left: f,
          x: s,
          y: l,
          right: f + c,
          bottom: d + u
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
      var a = this._initialEventData, o = a.x, i = a.y, s = a.isTouch;
      return !s && Math.abs(t - o) <= ho && Math.abs(n - i) <= ho;
    }
  }]), e;
}();
function A$() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return Te(e) !== "object" && (e = {
    top: e,
    left: e,
    right: e,
    bottom: e
  }), e;
}
function vo(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = Ke(e), a = n.top, o = n.left, i = n.right, s = i === void 0 ? o : i, l = n.bottom, c = l === void 0 ? a : l, u = Ke(r), f = u.top, d = u.left, p = u.right, v = p === void 0 ? d : p, h = u.bottom, m = h === void 0 ? f : h;
  return !// 'a' bottom doesn't touch 'b' top
  (c - t < f || // 'a' top doesn't touch 'b' bottom
  a + t > m || // 'a' right doesn't touch 'b' left
  s - t < d || // 'a' left doesn't touch 'b' right
  o + t > v);
}
function Ke(e) {
  if (!e.getBoundingClientRect)
    return e;
  var r = e.getBoundingClientRect(), t = r.left + po("left"), n = r.top + po("top");
  return {
    top: n,
    left: t,
    right: (e.offsetWidth || 0) + t,
    bottom: (e.offsetHeight || 0) + n
  };
}
function po(e) {
  if (e === "left")
    return window.pageXOffset || document.body.scrollLeft || 0;
  if (e === "top")
    return window.pageYOffset || document.body.scrollTop || 0;
}
var x$ = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r(t, n) {
    var a;
    return se(this, r), a = he(this, r, [t, n]), a.state = {
      selecting: !1
    }, a.containerRef = /* @__PURE__ */ I.createRef(), a;
  }
  return le(r, [{
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
      var n = this.props, a = n.range, o = n.getNow, i = n.getters, s = n.date, l = n.components.dateCellWrapper, c = n.localizer, u = this.state, f = u.selecting, d = u.startIdx, p = u.endIdx, v = o();
      return /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, a.map(function(h, m) {
        var y = f && m >= d && m <= p, b = i.dayProp(h), S = b.className, _ = b.style;
        return /* @__PURE__ */ g.createElement(l, {
          key: m,
          value: h,
          range: a
        }, /* @__PURE__ */ g.createElement("div", {
          style: _,
          className: ie("rbc-day-bg", S, y && "rbc-selected-cell", c.isSameDate(h, v) && "rbc-today", s && c.neq(s, h, "month") && "rbc-off-range-bg")
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function() {
      var n = this, a = this.containerRef.current, o = this._selector = new ns(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      }), i = function(l, c) {
        if (!lr(a, l) && !C$(a, l)) {
          var u = Ke(a), f = n.props, d = f.range, p = f.rtl;
          if (w$(u, l)) {
            var v = ts(u, l.x, p, d.length);
            n._selectSlot({
              startIdx: v,
              endIdx: v,
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
          var p = Ke(a), v = S$(n._initial, p, s, c.length, u);
          f = v.startIdx, d = v.endIdx;
        }
        n.setState({
          selecting: !0,
          startIdx: f,
          endIdx: d
        });
      }), o.on("beforeSelect", function(s) {
        if (n.props.selectable === "ignoreEvents")
          return !lr(n.containerRef.current, s);
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
  }]), r;
}(g.Component), _e = {
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
  renderEvent: function(r, t) {
    var n = r.selected;
    r.isAllDay;
    var a = r.accessors, o = r.getters, i = r.onSelect, s = r.onDoubleClick, l = r.onKeyPress, c = r.localizer, u = r.slotMetrics, f = r.components, d = r.resizable, p = u.continuesPrior(t), v = u.continuesAfter(t);
    return /* @__PURE__ */ g.createElement(Qi, {
      event: t,
      getters: o,
      localizer: c,
      accessors: a,
      components: f,
      onSelect: i,
      onDoubleClick: s,
      onKeyPress: l,
      continuesPrior: p,
      continuesAfter: v,
      slotStart: u.first,
      slotEnd: u.last,
      selected: xr(t, n),
      resizable: d
    });
  },
  renderSpan: function(r, t, n) {
    var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", o = Math.abs(t) / r * 100 + "%";
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
}, as = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, o = a.segments, i = a.slotMetrics.slots, s = a.className, l = 1;
      return /* @__PURE__ */ g.createElement("div", {
        className: ie(s, "rbc-row")
      }, o.reduce(function(c, u, f) {
        var d = u.event, p = u.left, v = u.right, h = u.span, m = "_lvl_" + f, y = p - l, b = _e.renderEvent(n.props, d);
        return y && c.push(_e.renderSpan(i, y, "".concat(m, "_gap"))), c.push(_e.renderSpan(i, h, m, b)), l = v + 1, c;
      }, []));
    }
  }]), r;
}(g.Component);
as.defaultProps = J({}, _e.defaultProps);
function os(e) {
  var r = e.dateRange, t = e.unit, n = t === void 0 ? "day" : t, a = e.localizer;
  return {
    first: r[0],
    last: a.add(r[r.length - 1], 1, n)
  };
}
function P$(e, r, t, n) {
  var a = os({
    dateRange: r,
    localizer: n
  }), o = a.first, i = a.last, s = n.diff(o, i, "day"), l = n.max(n.startOf(t.start(e), "day"), o), c = n.min(n.ceil(t.end(e), "day"), i), u = xy(r, function(d) {
    return n.isSameDate(d, l);
  }), f = n.diff(l, c, "day");
  return f = Math.min(f, s), f = Math.max(f - n.segmentOffset, 1), {
    event: e,
    span: f,
    left: u + 1,
    right: Math.max(u + f, 1)
  };
}
function is(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, t, n, a, o = [], i = [];
  for (t = 0; t < e.length; t++) {
    for (a = e[t], n = 0; n < o.length && R$(a, o[n]); n++)
      ;
    n >= r ? i.push(a) : (o[n] || (o[n] = [])).push(a);
  }
  for (t = 0; t < o.length; t++)
    o[t].sort(function(s, l) {
      return s.left - l.left;
    });
  return {
    levels: o,
    extra: i
  };
}
function Ot(e, r, t, n, a) {
  var o = {
    start: n.start(e),
    end: n.end(e)
  }, i = {
    start: r,
    end: t
  };
  return a.inEventRange({
    event: o,
    range: i
  });
}
function R$(e, r) {
  return r.some(function(t) {
    return t.left <= e.right && t.right >= e.left;
  });
}
function I$(e, r, t) {
  var n = Xt(e), a = [], o = [];
  n.forEach(function(l) {
    var c = r.start(l), u = r.end(l);
    t.daySpan(c, u) > 1 ? a.push(l) : o.push(l);
  });
  var i = a.sort(function(l, c) {
    return hn(l, c, r, t);
  }), s = o.sort(function(l, c) {
    return hn(l, c, r, t);
  });
  return [].concat(Xt(i), Xt(s));
}
function hn(e, r, t, n) {
  var a = {
    start: t.start(e),
    end: t.end(e),
    allDay: t.allDay(e)
  }, o = {
    start: t.start(r),
    end: t.end(r),
    allDay: t.allDay(r)
  };
  return n.sortEvents({
    evtA: a,
    evtB: o
  });
}
var ss = function(r, t) {
  return r.left <= t && r.right >= t;
}, mo = function(r, t) {
  return r.filter(function(n) {
    return ss(n, t);
  }).map(function(n) {
    return n.event;
  });
}, ls = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      for (var n = this.props, a = n.segments, o = n.slotMetrics.slots, i = is(a).levels[0], s = 1, l = 1, c = []; s <= o; ) {
        var u = "_lvl_" + s, f = i.filter(function(b) {
          return ss(b, s);
        })[0] || {}, d = f.event, p = f.left, v = f.right, h = f.span;
        if (!d) {
          s++;
          continue;
        }
        var m = Math.max(0, p - l);
        if (this.canRenderSlotEvent(p, h)) {
          var y = _e.renderEvent(this.props, d);
          m && c.push(_e.renderSpan(o, m, u + "_gap")), c.push(_e.renderSpan(o, h, u, y)), l = s = v + 1;
        } else
          m && c.push(_e.renderSpan(o, m, u + "_gap")), c.push(_e.renderSpan(o, 1, u, this.renderShowMore(a, s))), l = s = s + 1;
      }
      return /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row"
      }, c);
    }
  }, {
    key: "canRenderSlotEvent",
    value: function(n, a) {
      var o = this.props.segments;
      return Uy(n, n + a).every(function(i) {
        var s = mo(o, i).length;
        return s === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function(n, a) {
      var o = this, i = this.props, s = i.localizer, l = i.slotMetrics, c = l.getEventsForSlot(a), u = mo(n, a), f = u.length;
      return f ? /* @__PURE__ */ g.createElement("button", {
        type: "button",
        key: "sm_" + a,
        className: ie("rbc-button-link", "rbc-show-more"),
        onClick: function(p) {
          return o.showMore(a, p);
        }
      }, s.messages.showMore(f, u, c)) : !1;
    }
  }, {
    key: "showMore",
    value: function(n, a) {
      a.preventDefault(), a.stopPropagation(), this.props.onShowMore(n, a.target);
    }
  }]), r;
}(g.Component);
ls.defaultProps = J({}, _e.defaultProps);
var N$ = function(r) {
  var t = r.children;
  return /* @__PURE__ */ g.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, t);
}, k$ = function(r, t) {
  return r.left <= t && r.right >= t;
}, L$ = function(r, t) {
  return r[0].range === t[0].range && r[0].events === t[0].events;
};
function cs() {
  return Mi(function(e) {
    for (var r = e.range, t = e.events, n = e.maxRows, a = e.minRows, o = e.accessors, i = e.localizer, s = os({
      dateRange: r,
      localizer: i
    }), l = s.first, c = s.last, u = t.map(function(h) {
      return P$(h, r, o, i);
    }), f = is(u, Math.max(n - 1, 1)), d = f.levels, p = f.extra, v = p.length > 0 ? a - 1 : a; d.length < v; )
      d.push([]);
    return {
      first: l,
      last: c,
      levels: d,
      extra: p,
      range: r,
      slots: r.length,
      clone: function(m) {
        var y = cs();
        return y(J(J({}, e), m));
      },
      getDateForSlot: function(m) {
        return r[m];
      },
      getSlotForDate: function(m) {
        return r.find(function(y) {
          return i.isSameDate(y, m);
        });
      },
      getEventsForSlot: function(m) {
        return u.filter(function(y) {
          return k$(y, m);
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
  }, L$);
}
var cr = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    var t;
    se(this, r);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return t = he(this, r, [].concat(a)), t.handleSelectSlot = function(i) {
      var s = t.props, l = s.range, c = s.onSelectSlot;
      c(l.slice(i.start, i.end + 1), i);
    }, t.handleShowMore = function(i, s) {
      var l = t.props, c = l.range, u = l.onShowMore, f = t.slotMetrics(t.props), d = Iu(t.containerRef.current, ".rbc-row-bg")[0], p;
      d && (p = d.children[i - 1]);
      var v = f.getEventsForSlot(i);
      u(v, c[i - 1], p, i, s);
    }, t.getContainer = function() {
      var i = t.props.container;
      return i ? i() : t.containerRef.current;
    }, t.renderHeadingCell = function(i, s) {
      var l = t.props, c = l.renderHeader, u = l.getNow, f = l.localizer;
      return c({
        date: i,
        key: "header_".concat(s),
        className: ie("rbc-date-cell", f.isSameDate(i, u()) && "rbc-now")
      });
    }, t.renderDummy = function() {
      var i = t.props, s = i.className, l = i.range, c = i.renderHeader, u = i.showAllEvents;
      return /* @__PURE__ */ g.createElement("div", {
        className: s,
        ref: t.containerRef
      }, /* @__PURE__ */ g.createElement("div", {
        className: ie("rbc-row-content", u && "rbc-row-content-scrollable")
      }, c && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row",
        ref: t.headingRowRef
      }, l.map(t.renderHeadingCell)), /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row",
        ref: t.eventRowRef
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row-segment"
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-event"
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-event-content"
      }, " "))))));
    }, t.containerRef = /* @__PURE__ */ I.createRef(), t.headingRowRef = /* @__PURE__ */ I.createRef(), t.eventRowRef = /* @__PURE__ */ I.createRef(), t.slotMetrics = cs(), t;
  }
  return le(r, [{
    key: "getRowLimit",
    value: function() {
      var n, a = Wr(this.eventRowRef.current), o = (n = this.headingRowRef) !== null && n !== void 0 && n.current ? Wr(this.headingRowRef.current) : 0, i = Wr(this.containerRef.current) - o;
      return Math.max(Math.floor(i / a), 1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.rtl, i = n.range, s = n.className, l = n.selected, c = n.selectable, u = n.renderForMeasure, f = n.accessors, d = n.getters, p = n.components, v = n.getNow, h = n.renderHeader, m = n.onSelect, y = n.localizer, b = n.onSelectStart, S = n.onSelectEnd, _ = n.onDoubleClick, $ = n.onKeyPress, D = n.resourceId, C = n.longPressThreshold, L = n.isAllDay, F = n.resizable, A = n.showAllEvents;
      if (u)
        return this.renderDummy();
      var T = this.slotMetrics(this.props), j = T.levels, Y = T.extra, W = A ? N$ : Me, x = p.weekWrapper, M = {
        selected: l,
        accessors: f,
        getters: d,
        localizer: y,
        components: p,
        onSelect: m,
        onDoubleClick: _,
        onKeyPress: $,
        resourceId: D,
        slotMetrics: T,
        resizable: F
      };
      return /* @__PURE__ */ g.createElement("div", {
        className: s,
        role: "rowgroup",
        ref: this.containerRef
      }, /* @__PURE__ */ g.createElement(x$, {
        localizer: y,
        date: a,
        getNow: v,
        rtl: o,
        range: i,
        selectable: c,
        container: this.getContainer,
        getters: d,
        onSelectStart: b,
        onSelectEnd: S,
        onSelectSlot: this.handleSelectSlot,
        components: p,
        longPressThreshold: C,
        resourceId: D
      }), /* @__PURE__ */ g.createElement("div", {
        className: ie("rbc-row-content", A && "rbc-row-content-scrollable"),
        role: "row"
      }, h && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, i.map(this.renderHeadingCell)), /* @__PURE__ */ g.createElement(W, null, /* @__PURE__ */ g.createElement(x, Object.assign({
        isAllDay: L
      }, M, {
        rtl: this.props.rtl
      }), j.map(function(k, N) {
        return /* @__PURE__ */ g.createElement(as, Object.assign({
          key: N,
          segments: k
        }, M));
      }), !!Y.length && /* @__PURE__ */ g.createElement(ls, Object.assign({
        segments: Y,
        onShowMore: this.handleShowMore
      }, M))))));
    }
  }]), r;
}(g.Component);
cr.defaultProps = {
  minRows: 0,
  maxRows: 1 / 0
};
var us = function(r) {
  var t = r.label;
  return /* @__PURE__ */ g.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, t);
}, z$ = function(r) {
  var t = r.label, n = r.drilldownView, a = r.onDrillDown;
  return n ? /* @__PURE__ */ g.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: a,
    role: "cell"
  }, t) : /* @__PURE__ */ g.createElement("span", null, t);
}, F$ = ["date", "className"], W$ = function(r, t, n, a, o) {
  return r.filter(function(i) {
    return Ot(i, t, n, a, o);
  });
}, Pr = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    var t;
    se(this, r);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return t = he(this, r, [].concat(a)), t.getContainer = function() {
      return t.containerRef.current;
    }, t.renderWeek = function(i, s) {
      var l = t.props, c = l.events, u = l.components, f = l.selectable, d = l.getNow, p = l.selected, v = l.date, h = l.localizer, m = l.longPressThreshold, y = l.accessors, b = l.getters, S = l.showAllEvents, _ = t.state, $ = _.needLimitMeasure, D = _.rowLimit, C = W$(Xt(c), i[0], i[i.length - 1], y, h), L = I$(C, y, h);
      return /* @__PURE__ */ g.createElement(cr, {
        key: s,
        ref: s === 0 ? t.slotRowRef : void 0,
        container: t.getContainer,
        className: "rbc-month-row",
        getNow: d,
        date: v,
        range: i,
        events: L,
        maxRows: S ? 1 / 0 : D,
        selected: p,
        selectable: f,
        components: u,
        accessors: y,
        getters: b,
        localizer: h,
        renderHeader: t.readerDateHeading,
        renderForMeasure: $,
        onShowMore: t.handleShowMore,
        onSelect: t.handleSelectEvent,
        onDoubleClick: t.handleDoubleClickEvent,
        onKeyPress: t.handleKeyPressEvent,
        onSelectSlot: t.handleSelectSlot,
        longPressThreshold: m,
        rtl: t.props.rtl,
        resizable: t.props.resizable,
        showAllEvents: S
      });
    }, t.readerDateHeading = function(i) {
      var s = i.date, l = i.className, c = $e(i, F$), u = t.props, f = u.date, d = u.getDrilldownView, p = u.localizer, v = p.neq(s, f, "month"), h = p.isSameDate(s, f), m = d(s), y = p.format(s, "dateFormat"), b = t.props.components.dateHeader || z$;
      return /* @__PURE__ */ g.createElement("div", Object.assign({}, c, {
        className: ie(l, v && "rbc-off-range", h && "rbc-current"),
        role: "cell"
      }), /* @__PURE__ */ g.createElement(b, {
        label: y,
        date: s,
        drilldownView: m,
        isOffRange: v,
        onDrillDown: function(_) {
          return t.handleHeadingClick(s, m, _);
        }
      }));
    }, t.handleSelectSlot = function(i, s) {
      t._pendingSelection = t._pendingSelection.concat(i), clearTimeout(t._selectTimer), t._selectTimer = setTimeout(function() {
        return t.selectDates(s);
      });
    }, t.handleHeadingClick = function(i, s, l) {
      l.preventDefault(), t.clearSelection(), re(t.props.onDrillDown, [i, s]);
    }, t.handleSelectEvent = function() {
      t.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onSelectEvent, s);
    }, t.handleDoubleClickEvent = function() {
      t.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onDoubleClickEvent, s);
    }, t.handleKeyPressEvent = function() {
      t.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onKeyPressEvent, s);
    }, t.handleShowMore = function(i, s, l, c, u) {
      var f = t.props, d = f.popup, p = f.onDrillDown, v = f.onShowMore, h = f.getDrilldownView, m = f.doShowMoreDrillDown;
      if (t.clearSelection(), d) {
        var y = si(l, t.containerRef.current);
        t.setState({
          overlay: {
            date: s,
            events: i,
            position: y,
            target: u
          }
        });
      } else
        m && re(p, [s, h(s) || ce.DAY]);
      re(v, [i, s, c]);
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
  return le(r, [{
    key: "componentDidMount",
    value: function() {
      var n = this, a;
      this.state.needLimitMeasure && this.measureRowLimit(this.props), window.addEventListener("resize", this._resizeListener = function() {
        a || li(function() {
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
      var n = this.props, a = n.date, o = n.localizer, i = n.className, s = o.visibleDays(a, o), l = yu(s, 7);
      return this._weekCount = l.length, /* @__PURE__ */ g.createElement("div", {
        className: ie("rbc-month-view", i),
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
      var a = this.props, o = a.localizer, i = a.components, s = n[0], l = n[n.length - 1], c = i.header || us;
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
      var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, f = s.getters, d = s.selected, p = s.popupOffset, v = s.handleDragStart, h = function() {
        return o.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ g.createElement(Hn, {
        overlay: i,
        accessors: l,
        localizer: c,
        components: u,
        getters: f,
        selected: d,
        popupOffset: p,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: v,
        show: !!i.position,
        overlayDisplay: this.overlayDisplay,
        onHide: h
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
  }]), r;
}(g.Component);
Pr.range = function(e, r) {
  var t = r.localizer, n = t.firstVisibleDay(e, t), a = t.lastVisibleDay(e, t);
  return {
    start: n,
    end: a
  };
};
Pr.navigate = function(e, r, t) {
  var n = t.localizer;
  switch (r) {
    case ge.PREVIOUS:
      return n.add(e, -1, "month");
    case ge.NEXT:
      return n.add(e, 1, "month");
    default:
      return e;
  }
};
Pr.title = function(e, r) {
  var t = r.localizer;
  return t.format(e, "monthHeaderFormat");
};
var go = function(r) {
  var t = r.min, n = r.max, a = r.step, o = r.slots, i = r.localizer;
  return "".concat(+i.startOf(t, "minutes")) + "".concat(+i.startOf(n, "minutes")) + "".concat(a, "-").concat(o);
};
function Un(e) {
  for (var r = e.min, t = e.max, n = e.step, a = e.timeslots, o = e.localizer, i = go({
    start: r,
    end: t,
    step: n,
    timeslots: a,
    localizer: o
  }), s = 1 + o.getTotalMin(r, t), l = o.getMinutesFromMidnight(r), c = Math.ceil((s - 1) / (n * a)), u = c * a, f = new Array(c), d = new Array(u), p = 0; p < c; p++) {
    f[p] = new Array(a);
    for (var v = 0; v < a; v++) {
      var h = p * a + v, m = h * n;
      d[h] = f[p][v] = o.getSlotDate(r, l, m);
    }
  }
  var y = d.length * n;
  d.push(o.getSlotDate(r, l, y));
  function b(S) {
    var _ = o.diff(r, S, "minutes") + o.getDstOffset(r, S);
    return Math.min(_, s);
  }
  return {
    groups: f,
    update: function(_) {
      return go(_) !== i ? Un(_) : this;
    },
    dateIsInGroup: function(_, $) {
      var D = f[$ + 1];
      return o.inRange(_, f[$][0], D ? D[0] : t, "minutes");
    },
    nextSlot: function(_) {
      var $ = d[Math.min(d.findIndex(function(D) {
        return D === _ || o.eq(D, _);
      }) + 1, d.length - 1)];
      return o.eq($, _) && ($ = o.add(_, n, "minutes")), $;
    },
    closestSlotToPosition: function(_) {
      var $ = Math.min(d.length - 1, Math.max(0, Math.floor(_ * u)));
      return d[$];
    },
    closestSlotFromPoint: function(_, $) {
      var D = Math.abs($.top - $.bottom);
      return this.closestSlotToPosition((_.y - $.top) / D);
    },
    closestSlotFromDate: function(_) {
      var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (o.lt(_, r, "minutes"))
        return d[0];
      if (o.gt(_, t, "minutes"))
        return d[d.length - 1];
      var D = o.diff(r, _, "minutes");
      return d[(D - D % n) / n + $];
    },
    startsBeforeDay: function(_) {
      return o.lt(_, r, "day");
    },
    startsAfterDay: function(_) {
      return o.gt(_, t, "day");
    },
    startsBefore: function(_) {
      return o.lt(o.merge(r, _), r, "minutes");
    },
    startsAfter: function(_) {
      return o.gt(o.merge(t, _), t, "minutes");
    },
    getRange: function(_, $, D, C) {
      D || (_ = o.min(t, o.max(r, _))), C || ($ = o.min(t, o.max(r, $)));
      var L = b(_), F = b($), A = F > n * u && !o.eq(t, $) ? (L - n) / (n * u) * 100 : L / (n * u) * 100;
      return {
        top: A,
        height: F / (n * u) * 100 - A,
        start: b(_),
        startDate: _,
        end: b($),
        endDate: $
      };
    },
    getCurrentTimePosition: function(_) {
      var $ = b(_), D = $ / (n * u) * 100;
      return D;
    }
  };
}
var j$ = /* @__PURE__ */ function() {
  function e(r, t) {
    var n = t.accessors, a = t.slotMetrics;
    se(this, e);
    var o = a.getRange(n.start(r), n.end(r)), i = o.start, s = o.startDate, l = o.end, c = o.endDate, u = o.top, f = o.height;
    this.start = i, this.end = l, this.startMs = +s, this.endMs = +c, this.top = u, this.height = f, this.data = r;
  }
  return le(e, [{
    key: "_width",
    get: function() {
      if (this.rows) {
        var t = this.rows.reduce(
          function(a, o) {
            return Math.max(a, o.leaves.length + 1);
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
      var a = this.row.leaves, o = a.indexOf(this);
      return o === a.length - 1 ? t : n;
    }
  }, {
    key: "xOffset",
    get: function() {
      if (this.rows)
        return 0;
      if (this.leaves)
        return this.container._width;
      var t = this.row, n = t.leaves, a = t.xOffset, o = t._width, i = n.indexOf(this) + 1;
      return a + i * o;
    }
  }]), e;
}();
function H$(e, r, t) {
  return (
    // Occupies the same start slot.
    Math.abs(r.start - e.start) < t || // A's start slot overlaps with b's end slot.
    r.start > e.start && r.start < e.end
  );
}
function U$(e) {
  for (var r = cw(e, ["startMs", function(s) {
    return -s.endMs;
  }]), t = []; r.length > 0; ) {
    var n = r.shift();
    t.push(n);
    for (var a = 0; a < r.length; a++) {
      var o = r[a];
      if (!(n.endMs > o.startMs)) {
        if (a > 0) {
          var i = r.splice(a, 1)[0];
          t.push(i);
        }
        break;
      }
    }
  }
  return t;
}
function fs(e) {
  for (var r = e.events, t = e.minimumStartDifference, n = e.slotMetrics, a = e.accessors, o = r.map(function(u) {
    return new j$(u, {
      slotMetrics: n,
      accessors: a
    });
  }), i = U$(o), s = [], l = function() {
    var f = i[c], d = s.find(function(h) {
      return h.end > f.start || Math.abs(f.start - h.start) < t;
    });
    if (!d)
      return f.rows = [], s.push(f), 1;
    f.container = d;
    for (var p = null, v = d.rows.length - 1; !p && v >= 0; v--)
      H$(d.rows[v], f, t) && (p = d.rows[v]);
    p ? (p.leaves.push(f), f.row = p) : (f.leaves = [], d.rows.push(f));
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
function ds(e, r, t) {
  for (var n = 0; n < e.friends.length; ++n)
    if (!(t.indexOf(e.friends[n]) > -1)) {
      r = r > e.friends[n].idx ? r : e.friends[n].idx, t.push(e.friends[n]);
      var a = ds(e.friends[n], r, t);
      r = r > a ? r : a;
    }
  return r;
}
function B$(e) {
  var r = e.events, t = e.minimumStartDifference, n = e.slotMetrics, a = e.accessors, o = fs({
    events: r,
    minimumStartDifference: t,
    slotMetrics: n,
    accessors: a
  });
  o.sort(function(x, M) {
    return x = x.style, M = M.style, x.top !== M.top ? x.top > M.top ? 1 : -1 : x.height !== M.height ? x.top + x.height < M.top + M.height ? 1 : -1 : 0;
  });
  for (var i = 0; i < o.length; ++i)
    o[i].friends = [], delete o[i].style.left, delete o[i].style.left, delete o[i].idx, delete o[i].size;
  for (var s = 0; s < o.length - 1; ++s)
    for (var l = o[s], c = l.style.top, u = l.style.top + l.style.height, f = s + 1; f < o.length; ++f) {
      var d = o[f], p = d.style.top, v = d.style.top + d.style.height;
      (p >= c && v <= u || v > c && v <= u || p >= c && p < u) && (l.friends.push(d), d.friends.push(l));
    }
  for (var h = 0; h < o.length; ++h) {
    for (var m = o[h], y = [], b = 0; b < 100; ++b)
      y.push(1);
    for (var S = 0; S < m.friends.length; ++S)
      m.friends[S].idx !== void 0 && (y[m.friends[S].idx] = 0);
    m.idx = y.indexOf(1);
  }
  for (var _ = 0; _ < o.length; ++_) {
    var $ = 0;
    if (!o[_].size) {
      var D = [], C = ds(o[_], 0, D);
      $ = 100 / (C + 1), o[_].size = $;
      for (var L = 0; L < D.length; ++L)
        D[L].size = $;
    }
  }
  for (var F = 0; F < o.length; ++F) {
    var A = o[F];
    A.style.left = A.idx * A.size;
    for (var T = 0, j = 0; j < A.friends.length; ++j) {
      var Y = A.friends[j].idx;
      T = T > Y ? T : Y;
    }
    T <= A.idx && (A.size = 100 - A.idx * A.size);
    var W = A.idx === 0 ? 0 : 3;
    A.style.width = "calc(".concat(A.size, "% - ").concat(W, "px)"), A.style.height = "calc(".concat(A.style.height, "% - 2px)"), A.style.xOffset = "calc(".concat(A.style.left, "% + ").concat(W, "px)");
  }
  return o;
}
var yo = {
  overlap: fs,
  "no-overlap": B$
};
function Y$(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function G$(e) {
  e.events, e.minimumStartDifference, e.slotMetrics, e.accessors;
  var r = e.dayLayoutAlgorithm, t = r;
  return r in yo && (t = yo[r]), Y$(t) ? t.apply(this, arguments) : [];
}
var hs = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.renderSlot, o = n.resource, i = n.group, s = n.getters, l = n.components, c = l === void 0 ? {} : l, u = c.timeSlotWrapper, f = u === void 0 ? Me : u, d = s ? s.slotGroupProp(i) : {};
      return /* @__PURE__ */ g.createElement("div", Object.assign({
        className: "rbc-timeslot-group"
      }, d), i.map(function(p, v) {
        var h = s ? s.slotProp(p, o) : {};
        return /* @__PURE__ */ g.createElement(f, {
          key: v,
          value: p,
          resource: o
        }, /* @__PURE__ */ g.createElement("div", Object.assign({}, h, {
          className: ie("rbc-time-slot", h.className)
        }), a && a(p, v)));
      }));
    }
  }]), r;
}(I.Component);
function Bt(e) {
  return typeof e == "string" ? e : e + "%";
}
function K$(e) {
  var r = e.style, t = e.className, n = e.event, a = e.accessors, o = e.rtl, i = e.selected, s = e.label, l = e.continuesPrior, c = e.continuesAfter, u = e.getters, f = e.onClick, d = e.onDoubleClick, p = e.isBackgroundEvent, v = e.onKeyPress, h = e.components, m = h.event, y = h.eventWrapper, b = a.title(n), S = a.tooltip(n), _ = a.end(n), $ = a.start(n), D = u.eventProp(n, $, _, i), C = [/* @__PURE__ */ g.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, s), /* @__PURE__ */ g.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, m ? /* @__PURE__ */ g.createElement(m, {
    event: n,
    title: b
  }) : b)], L = r.height, F = r.top, A = r.width, T = r.xOffset, j = J(J({}, D.style), {}, We({
    top: Bt(F),
    height: Bt(L),
    width: Bt(A)
  }, o ? "right" : "left", Bt(T)));
  return /* @__PURE__ */ g.createElement(y, Object.assign({
    type: "time"
  }, e), /* @__PURE__ */ g.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: f,
    onDoubleClick: d,
    style: j,
    onKeyDown: v,
    title: S ? (typeof s == "string" ? s + ": " : "") + S : void 0,
    className: ie(p ? "rbc-background-event" : "rbc-event", t, D.className, {
      "rbc-selected": i,
      "rbc-event-continues-earlier": l,
      "rbc-event-continues-later": c
    })
  }, C));
}
var V$ = function(r) {
  var t = r.children, n = r.className, a = r.style, o = r.innerRef;
  return /* @__PURE__ */ g.createElement("div", {
    className: n,
    style: a,
    ref: o
  }, t);
}, q$ = /* @__PURE__ */ g.forwardRef(function(e, r) {
  return /* @__PURE__ */ g.createElement(V$, Object.assign({}, e, {
    innerRef: r
  }));
}), X$ = ["dayProp"], Z$ = ["eventContainerWrapper"], vs = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    var t;
    se(this, r);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return t = he(this, r, [].concat(a)), t.state = {
      selecting: !1,
      timeIndicatorPosition: null
    }, t.intervalTriggered = !1, t.renderEvents = function(i) {
      var s = i.events, l = i.isBackgroundEvent, c = t.props, u = c.rtl, f = c.selected, d = c.accessors, p = c.localizer, v = c.getters, h = c.components, m = c.step, y = c.timeslots, b = c.dayLayoutAlgorithm, S = c.resizable, _ = Eo(t), $ = _.slotMetrics, D = p.messages, C = G$({
        events: s,
        accessors: d,
        slotMetrics: $,
        minimumStartDifference: Math.ceil(m * y / 2),
        dayLayoutAlgorithm: b
      });
      return C.map(function(L, F) {
        var A = L.event, T = L.style, j = d.end(A), Y = d.start(A), W = "eventTimeRangeFormat", x, M = $.startsBeforeDay(Y), k = $.startsAfterDay(j);
        M ? W = "eventTimeRangeEndFormat" : k && (W = "eventTimeRangeStartFormat"), M && k ? x = D.allDay : x = p.format({
          start: Y,
          end: j
        }, W);
        var N = M || $.startsBefore(Y), B = k || $.startsAfter(j);
        return /* @__PURE__ */ g.createElement(K$, {
          style: T,
          event: A,
          label: x,
          key: "evt_" + F,
          getters: v,
          rtl: u,
          components: h,
          continuesPrior: N,
          continuesAfter: B,
          accessors: d,
          resource: t.props.resource,
          selected: xr(A, f),
          onClick: function(K) {
            return t._select(J(J(J({}, A), t.props.resource && {
              sourceResource: t.props.resource
            }), l && {
              isBackgroundEvent: !0
            }), K);
          },
          onDoubleClick: function(K) {
            return t._doubleClick(A, K);
          },
          isBackgroundEvent: l,
          onKeyPress: function(K) {
            return t._keyPress(A, K);
          },
          resizable: S
        });
      });
    }, t._selectable = function() {
      var i = t.containerRef.current, s = t.props, l = s.longPressThreshold, c = s.localizer, u = t._selector = new ns(function() {
        return i;
      }, {
        longPressThreshold: l
      }), f = function(h) {
        var m = t.props.onSelecting, y = t.state || {}, b = d(h), S = b.startDate, _ = b.endDate;
        m && (c.eq(y.startDate, S, "minutes") && c.eq(y.endDate, _, "minutes") || m({
          start: S,
          end: _,
          resourceId: t.props.resource
        }) === !1) || (t.state.start !== b.start || t.state.end !== b.end || t.state.selecting !== b.selecting) && t.setState(b);
      }, d = function(h) {
        var m = t.slotMetrics.closestSlotFromPoint(h, Ke(i));
        t.state.selecting || (t._initialSlot = m);
        var y = t._initialSlot;
        c.lte(y, m) ? m = t.slotMetrics.nextSlot(m) : c.gt(y, m) && (y = t.slotMetrics.nextSlot(y));
        var b = t.slotMetrics.getRange(c.min(y, m), c.max(y, m));
        return J(J({}, b), {}, {
          selecting: !0,
          top: "".concat(b.top, "%"),
          height: "".concat(b.height, "%")
        });
      }, p = function(h, m) {
        if (!lr(t.containerRef.current, h)) {
          var y = d(h), b = y.startDate, S = y.endDate;
          t._selectSlot({
            startDate: b,
            endDate: S,
            action: m,
            box: h
          });
        }
        t.setState({
          selecting: !1
        });
      };
      u.on("selecting", f), u.on("selectStart", f), u.on("beforeSelect", function(v) {
        if (t.props.selectable === "ignoreEvents")
          return !lr(t.containerRef.current, v);
      }), u.on("click", function(v) {
        return p(v, "click");
      }), u.on("doubleClick", function(v) {
        return p(v, "doubleClick");
      }), u.on("select", function(v) {
        t.state.selecting && (t._selectSlot(J(J({}, t.state), {}, {
          action: "select",
          bounds: v
        })), t.setState({
          selecting: !1
        }));
      }), u.on("reset", function() {
        t.state.selecting && t.setState({
          selecting: !1
        });
      });
    }, t._teardownSelectable = function() {
      t._selector && (t._selector.teardown(), t._selector = null);
    }, t._selectSlot = function(i) {
      for (var s = i.startDate, l = i.endDate, c = i.action, u = i.bounds, f = i.box, d = s, p = []; t.props.localizer.lte(d, l); )
        p.push(d), d = new Date(+d + t.props.step * 60 * 1e3);
      re(t.props.onSelectSlot, {
        slots: p,
        start: s,
        end: l,
        resourceId: t.props.resource,
        action: c,
        bounds: u,
        box: f
      });
    }, t._select = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onSelectEvent, s);
    }, t._doubleClick = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onDoubleClickEvent, s);
    }, t._keyPress = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onKeyPressEvent, s);
    }, t.slotMetrics = Un(t.props), t.containerRef = /* @__PURE__ */ I.createRef(), t;
  }
  return le(r, [{
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
          var p = !d && l.eq(n.date, c, "minutes") && a.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(p);
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
      var n = this.props, a = n.date, o = n.max, i = n.rtl, s = n.isNow, l = n.resource, c = n.accessors, u = n.localizer, f = n.getters, d = f.dayProp, p = $e(f, X$), v = n.components, h = v.eventContainerWrapper, m = $e(v, Z$);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var y = this.slotMetrics, b = this.state, S = b.selecting, _ = b.top, $ = b.height, D = b.startDate, C = b.endDate, L = {
        start: D,
        end: C
      }, F = d(o), A = F.className, T = F.style, j = m.dayColumnWrapper || q$;
      return /* @__PURE__ */ g.createElement(j, {
        ref: this.containerRef,
        date: a,
        style: T,
        className: ie(
          A,
          "rbc-day-slot",
          "rbc-time-column",
          s && "rbc-now",
          s && "rbc-today",
          // WHY
          S && "rbc-slot-selecting"
        ),
        slotMetrics: y
      }, y.groups.map(function(Y, W) {
        return /* @__PURE__ */ g.createElement(hs, {
          key: W,
          group: Y,
          resource: l,
          getters: p,
          components: m
        });
      }), /* @__PURE__ */ g.createElement(h, {
        localizer: u,
        resource: l,
        accessors: c,
        getters: p,
        components: m,
        slotMetrics: y
      }, /* @__PURE__ */ g.createElement("div", {
        className: ie("rbc-events-container", i && "rtl")
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: !0
      }), this.renderEvents({
        events: this.props.events
      }))), S && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: _,
          height: $
        }
      }, /* @__PURE__ */ g.createElement("span", null, u.format(L, "selectRangeFormat"))), s && this.intervalTriggered && /* @__PURE__ */ g.createElement("div", {
        className: "rbc-current-time-indicator",
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      }));
    }
  }]), r;
}(g.Component);
vs.defaultProps = {
  dragThroughEvents: !0,
  timeslots: 2
};
function J$(e) {
  var r = e.min, t = e.max, n = e.localizer;
  return n.getTimezoneOffset(r) !== n.getTimezoneOffset(t) ? {
    start: n.add(r, -1, "day"),
    end: n.add(t, -1, "day")
  } : {
    start: r,
    end: t
  };
}
var Q$ = function(r) {
  var t = r.min, n = r.max, a = r.timeslots, o = r.step, i = r.localizer, s = r.getNow, l = r.resource, c = r.components, u = r.getters, f = r.gutterRef, d = c.timeGutterWrapper, p = I.useMemo(
    function() {
      return J$({
        min: t,
        max: n,
        localizer: i
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t == null ? void 0 : t.toISOString(), n == null ? void 0 : n.toISOString(), i]
  ), v = p.start, h = p.end, m = I.useState(Un({
    min: v,
    max: h,
    timeslots: a,
    step: o,
    localizer: i
  })), y = Oe(m, 2), b = y[0], S = y[1];
  I.useEffect(function() {
    b && S(b.update({
      min: v,
      max: h,
      timeslots: a,
      step: o,
      localizer: i
    }));
  }, [v == null ? void 0 : v.toISOString(), h == null ? void 0 : h.toISOString(), a, o]);
  var _ = I.useCallback(function($, D) {
    if (D)
      return null;
    var C = b.dateIsInGroup(s(), D);
    return /* @__PURE__ */ g.createElement("span", {
      className: ie("rbc-label", C && "rbc-now")
    }, i.format($, "timeGutterFormat"));
  }, [b, i, s]);
  return /* @__PURE__ */ g.createElement(d, {
    slotMetrics: b
  }, /* @__PURE__ */ g.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: f
  }, b.groups.map(function($, D) {
    return /* @__PURE__ */ g.createElement(hs, {
      key: D,
      group: $,
      resource: l,
      components: c,
      renderSlot: _,
      getters: u
    });
  })));
}, eE = /* @__PURE__ */ g.forwardRef(function(e, r) {
  return /* @__PURE__ */ g.createElement(Q$, Object.assign({
    gutterRef: r
  }, e));
}), tE = function(r) {
  var t = r.label;
  return /* @__PURE__ */ g.createElement(g.Fragment, null, t);
}, rE = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    var t;
    se(this, r);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return t = he(this, r, [].concat(a)), t.handleHeaderClick = function(i, s, l) {
      l.preventDefault(), re(t.props.onDrillDown, [i, s]);
    }, t.renderRow = function(i) {
      var s = t.props, l = s.events, c = s.rtl, u = s.selectable, f = s.getNow, d = s.range, p = s.getters, v = s.localizer, h = s.accessors, m = s.components, y = s.resizable, b = h.resourceId(i), S = i ? l.filter(function(_) {
        return h.resource(_) === b;
      }) : l;
      return /* @__PURE__ */ g.createElement(cr, {
        isAllDay: !0,
        rtl: c,
        getNow: f,
        minRows: 2,
        maxRows: t.props.allDayMaxRows + 1,
        range: d,
        events: S,
        resourceId: b,
        className: "rbc-allday-cell",
        selectable: u,
        selected: t.props.selected,
        components: m,
        accessors: h,
        getters: p,
        localizer: v,
        onSelect: t.props.onSelectEvent,
        onShowMore: t.props.onShowMore,
        onDoubleClick: t.props.onDoubleClickEvent,
        onKeyPress: t.props.onKeyPressEvent,
        onSelectSlot: t.props.onSelectSlot,
        longPressThreshold: t.props.longPressThreshold,
        resizable: y
      });
    }, t;
  }
  return le(r, [{
    key: "renderHeaderCells",
    value: function(n) {
      var a = this, o = this.props, i = o.localizer, s = o.getDrilldownView, l = o.getNow, c = o.getters.dayProp, u = o.components.header, f = u === void 0 ? us : u, d = l();
      return n.map(function(p, v) {
        var h = s(p), m = i.format(p, "dayFormat"), y = c(p), b = y.className, S = y.style, _ = /* @__PURE__ */ g.createElement(f, {
          date: p,
          label: m,
          localizer: i
        });
        return /* @__PURE__ */ g.createElement("div", {
          key: v,
          style: S,
          className: ie("rbc-header", b, i.isSameDate(p, d) && "rbc-today")
        }, h ? /* @__PURE__ */ g.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function(D) {
            return a.handleHeaderClick(p, h, D);
          }
        }, _) : /* @__PURE__ */ g.createElement("span", null, _));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, o = a.width, i = a.rtl, s = a.resources, l = a.range, c = a.events, u = a.getNow, f = a.accessors, d = a.selectable, p = a.components, v = a.getters, h = a.scrollRef, m = a.localizer, y = a.isOverflowing, b = a.components, S = b.timeGutterHeader, _ = b.resourceHeader, $ = _ === void 0 ? tE : _, D = a.resizable, C = {};
      y && (C[i ? "marginLeft" : "marginRight"] = "".concat(ci() - 1, "px"));
      var L = s.groupEvents(c);
      return /* @__PURE__ */ g.createElement("div", {
        style: C,
        ref: h,
        className: ie("rbc-time-header", y && "rbc-overflowing")
      }, /* @__PURE__ */ g.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: o,
          minWidth: o,
          maxWidth: o
        }
      }, S && /* @__PURE__ */ g.createElement(S, null)), s.map(function(F, A) {
        var T = Oe(F, 2), j = T[0], Y = T[1];
        return /* @__PURE__ */ g.createElement("div", {
          className: "rbc-time-header-content",
          key: j || A
        }, Y && /* @__PURE__ */ g.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(A)
        }, /* @__PURE__ */ g.createElement("div", {
          className: "rbc-header"
        }, /* @__PURE__ */ g.createElement($, {
          index: A,
          label: f.resourceTitle(Y),
          resource: Y
        }))), /* @__PURE__ */ g.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(l.length <= 1 ? " rbc-time-header-cell-single-day" : "")
        }, n.renderHeaderCells(l)), /* @__PURE__ */ g.createElement(cr, {
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
          components: p,
          accessors: f,
          getters: v,
          localizer: m,
          onSelect: n.props.onSelectEvent,
          onShowMore: n.props.onShowMore,
          onDoubleClick: n.props.onDoubleClickEvent,
          onKeyDown: n.props.onKeyPressEvent,
          onSelectSlot: n.props.onSelectSlot,
          longPressThreshold: n.props.longPressThreshold,
          resizable: D
        }));
      }));
    }
  }]), r;
}(g.Component), Ur = {};
function nE(e, r) {
  return {
    map: function(n) {
      return e ? e.map(function(a, o) {
        return n([r.resourceId(a), a], o);
      }) : [n([Ur, null], 0)];
    },
    groupEvents: function(n) {
      var a = /* @__PURE__ */ new Map();
      return e ? (n.forEach(function(o) {
        var i = r.resource(o) || Ur;
        if (Array.isArray(i))
          i.forEach(function(l) {
            var c = a.get(l) || [];
            c.push(o), a.set(l, c);
          });
        else {
          var s = a.get(i) || [];
          s.push(o), a.set(i, s);
        }
      }), a) : (a.set(Ur, n), a);
    }
  };
}
var ft = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r(t) {
    var n;
    return se(this, r), n = he(this, r, [t]), n.handleScroll = function(a) {
      n.scrollRef.current && (n.scrollRef.current.scrollLeft = a.target.scrollLeft);
    }, n.handleResize = function() {
      da(n.rafHandle), n.rafHandle = li(n.checkOverflow);
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
      var c = n.props, u = c.popup, f = c.onDrillDown, d = c.onShowMore, p = c.getDrilldownView, v = c.doShowMoreDrillDown;
      if (n.clearSelection(), u) {
        var h = si(i, n.containerRef.current);
        n.setState({
          overlay: {
            date: o,
            events: a,
            position: J(J({}, h), {}, {
              width: "200px"
            }),
            target: l
          }
        });
      } else
        v && re(f, [o, p(o) || ce.DAY]);
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
    }, n.memoizedResources = Mi(function(a, o) {
      return nE(a, o);
    }), n.state = {
      gutterWidth: void 0,
      isOverflowing: null
    }, n.scrollRef = /* @__PURE__ */ g.createRef(), n.contentRef = /* @__PURE__ */ g.createRef(), n.containerRef = /* @__PURE__ */ g.createRef(), n._scrollRatio = null, n.gutterRef = /* @__PURE__ */ I.createRef(), n;
  }
  return le(r, [{
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
      window.removeEventListener("resize", this.handleResize), da(this.rafHandle), this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.applyScroll();
    }
  }, {
    key: "renderEvents",
    value: function(n, a, o, i) {
      var s = this, l = this.props, c = l.min, u = l.max, f = l.components, d = l.accessors, p = l.localizer, v = l.dayLayoutAlgorithm, h = this.memoizedResources(this.props.resources, d), m = h.groupEvents(a), y = h.groupEvents(o);
      return h.map(function(b, S) {
        var _ = Oe(b, 2), $ = _[0], D = _[1];
        return n.map(function(C, L) {
          var F = (m.get($) || []).filter(function(T) {
            return p.inRange(C, d.start(T), d.end(T), "day");
          }), A = (y.get($) || []).filter(function(T) {
            return p.inRange(C, d.start(T), d.end(T), "day");
          });
          return /* @__PURE__ */ g.createElement(vs, Object.assign({}, s.props, {
            localizer: p,
            min: p.merge(C, c),
            max: p.merge(C, u),
            resource: D && $,
            components: f,
            isNow: p.isSameDate(C, i),
            key: S + "-" + L,
            date: C,
            events: F,
            backgroundEvents: A,
            dayLayoutAlgorithm: v
          }));
        });
      });
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, o = a.events, i = a.backgroundEvents, s = a.range, l = a.width, c = a.rtl, u = a.selected, f = a.getNow, d = a.resources, p = a.components, v = a.accessors, h = a.getters, m = a.localizer, y = a.min, b = a.max, S = a.showMultiDayTimes, _ = a.longPressThreshold, $ = a.resizable;
      l = l || this.state.gutterWidth;
      var D = s[0], C = s[s.length - 1];
      this.slots = s.length;
      var L = [], F = [], A = [];
      return o.forEach(function(T) {
        if (Ot(T, D, C, v, m)) {
          var j = v.start(T), Y = v.end(T);
          v.allDay(T) || m.startAndEndAreDateOnly(j, Y) || !S && !m.isSameDate(j, Y) ? L.push(T) : F.push(T);
        }
      }), i.forEach(function(T) {
        Ot(T, D, C, v, m) && A.push(T);
      }), L.sort(function(T, j) {
        return hn(T, j, v, m);
      }), /* @__PURE__ */ g.createElement("div", {
        className: ie("rbc-time-view", d && "rbc-time-view-resources"),
        ref: this.containerRef
      }, /* @__PURE__ */ g.createElement(rE, {
        range: s,
        events: L,
        width: l,
        rtl: c,
        getNow: f,
        localizer: m,
        selected: u,
        allDayMaxRows: this.props.showAllEvents ? 1 / 0 : (n = this.props.allDayMaxRows) !== null && n !== void 0 ? n : 1 / 0,
        resources: this.memoizedResources(d, v),
        selectable: this.props.selectable,
        accessors: v,
        getters: h,
        components: p,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold: _,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable: $
      }), this.props.popup && this.renderOverlay(), /* @__PURE__ */ g.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /* @__PURE__ */ g.createElement(eE, {
        date: D,
        ref: this.gutterRef,
        localizer: m,
        min: m.merge(D, y),
        max: m.merge(D, b),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: p,
        className: "rbc-time-gutter",
        getters: h
      }), this.renderEvents(s, F, A, f())));
    }
  }, {
    key: "renderOverlay",
    value: function() {
      var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, f = s.getters, d = s.selected, p = s.popupOffset, v = s.handleDragStart, h = function() {
        return o.setState({
          overlay: null
        });
      };
      return /* @__PURE__ */ g.createElement(Hn, {
        overlay: i,
        accessors: l,
        localizer: c,
        components: u,
        getters: f,
        selected: d,
        popupOffset: p,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: v,
        show: !!i.position,
        overlayDisplay: this.overlayDisplay,
        onHide: h
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
        var a, o = (a = n.gutterRef) !== null && a !== void 0 && a.current ? fn(n.gutterRef.current) : void 0;
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
  }]), r;
}(I.Component);
ft.defaultProps = {
  step: 30,
  timeslots: 2
};
var aE = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], Rr = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, f = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, d = n.enableAutoScroll, p = d === void 0 ? !0 : d, v = $e(n, aE), h = r.range(a, {
        localizer: o
      });
      return /* @__PURE__ */ g.createElement(ft, Object.assign({}, v, {
        range: h,
        eventOffset: 10,
        localizer: o,
        min: s,
        max: c,
        scrollToTime: f,
        enableAutoScroll: p
      }));
    }
  }]), r;
}(g.Component);
Rr.range = function(e, r) {
  var t = r.localizer;
  return [t.startOf(e, "day")];
};
Rr.navigate = function(e, r, t) {
  var n = t.localizer;
  switch (r) {
    case ge.PREVIOUS:
      return n.add(e, -1, "day");
    case ge.NEXT:
      return n.add(e, 1, "day");
    default:
      return e;
  }
};
Rr.title = function(e, r) {
  var t = r.localizer;
  return t.format(e, "dayHeaderFormat");
};
var oE = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], Ie = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, f = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, d = n.enableAutoScroll, p = d === void 0 ? !0 : d, v = $e(n, oE), h = r.range(a, this.props);
      return /* @__PURE__ */ g.createElement(ft, Object.assign({}, v, {
        range: h,
        eventOffset: 15,
        localizer: o,
        min: s,
        max: c,
        scrollToTime: f,
        enableAutoScroll: p
      }));
    }
  }]), r;
}(g.Component);
Ie.defaultProps = ft.defaultProps;
Ie.navigate = function(e, r, t) {
  var n = t.localizer;
  switch (r) {
    case ge.PREVIOUS:
      return n.add(e, -1, "week");
    case ge.NEXT:
      return n.add(e, 1, "week");
    default:
      return e;
  }
};
Ie.range = function(e, r) {
  var t = r.localizer, n = t.startOfWeek(), a = t.startOf(e, "week", n), o = t.endOf(e, "week", n);
  return t.range(a, o);
};
Ie.title = function(e, r) {
  var t = r.localizer, n = Ie.range(e, {
    localizer: t
  }), a = Ri(n), o = a[0], i = a.slice(1);
  return t.format({
    start: o,
    end: i.pop()
  }, "dayRangeHeaderFormat");
};
var iE = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function Bn(e, r) {
  return Ie.range(e, r).filter(function(t) {
    return [6, 0].indexOf(t.getDay()) === -1;
  });
}
var Lt = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    return se(this, r), he(this, r, arguments);
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, f = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, d = n.enableAutoScroll, p = d === void 0 ? !0 : d, v = $e(n, iE), h = Bn(a, this.props);
      return /* @__PURE__ */ g.createElement(ft, Object.assign({}, v, {
        range: h,
        eventOffset: 15,
        localizer: o,
        min: s,
        max: c,
        scrollToTime: f,
        enableAutoScroll: p
      }));
    }
  }]), r;
}(g.Component);
Lt.defaultProps = ft.defaultProps;
Lt.range = Bn;
Lt.navigate = Ie.navigate;
Lt.title = function(e, r) {
  var t = r.localizer, n = Bn(e, {
    localizer: t
  }), a = Ri(n), o = a[0], i = a.slice(1);
  return t.format({
    start: o,
    end: i.pop()
  }, "dayRangeHeaderFormat");
};
function Ne(e) {
  var r = e.accessors, t = e.components, n = e.date, a = e.events, o = e.getters, i = e.length, s = e.localizer, l = e.onDoubleClickEvent, c = e.onSelectEvent, u = e.selected, f = I.useRef(null), d = I.useRef(null), p = I.useRef(null), v = I.useRef(null), h = I.useRef(null);
  I.useEffect(function() {
    b();
  });
  var m = function(C, L, F) {
    var A = t.event, T = t.date;
    return L = L.filter(function(j) {
      return Ot(j, s.startOf(C, "day"), s.endOf(C, "day"), r, s);
    }), L.map(function(j, Y) {
      var W = r.title(j), x = r.end(j), M = r.start(j), k = o.eventProp(j, M, x, xr(j, u)), N = Y === 0 && s.format(C, "agendaDateFormat"), B = Y === 0 ? /* @__PURE__ */ g.createElement("td", {
        rowSpan: L.length,
        className: "rbc-agenda-date-cell"
      }, T ? /* @__PURE__ */ g.createElement(T, {
        day: C,
        label: N
      }) : N) : !1;
      return /* @__PURE__ */ g.createElement("tr", {
        key: F + "_" + Y,
        className: k.className,
        style: k.style
      }, B, /* @__PURE__ */ g.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, y(C, j)), /* @__PURE__ */ g.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function(K) {
          return c && c(j, K);
        },
        onDoubleClick: function(K) {
          return l && l(j, K);
        }
      }, A ? /* @__PURE__ */ g.createElement(A, {
        event: j,
        title: W
      }) : W));
    }, []);
  }, y = function(C, L) {
    var F = "", A = t.time, T = s.messages.allDay, j = r.end(L), Y = r.start(L);
    return r.allDay(L) || (s.eq(Y, j) ? T = s.format(Y, "agendaTimeFormat") : s.isSameDate(Y, j) ? T = s.format({
      start: Y,
      end: j
    }, "agendaTimeRangeFormat") : s.isSameDate(C, Y) ? T = s.format(Y, "agendaTimeFormat") : s.isSameDate(C, j) && (T = s.format(j, "agendaTimeFormat"))), s.gt(C, Y, "day") && (F = "rbc-continues-prior"), s.lt(C, j, "day") && (F += " rbc-continues-after"), /* @__PURE__ */ g.createElement("span", {
      className: F.trim()
    }, A ? /* @__PURE__ */ g.createElement(A, {
      event: L,
      day: C,
      label: T
    }) : T);
  }, b = function() {
    if (h.current) {
      var C = f.current, L = h.current.firstChild;
      if (L) {
        var F = v.current.scrollHeight > v.current.clientHeight, A = [], T = A;
        A = [fn(L.children[0]), fn(L.children[1])], (T[0] !== A[0] || T[1] !== A[1]) && (d.current.style.width = A[0] + "px", p.current.style.width = A[1] + "px"), F ? (Ys(C, "rbc-header-overflowing"), C.style.marginRight = ci() + "px") : Gs(C, "rbc-header-overflowing");
      }
    }
  }, S = s.messages, _ = s.add(n, i, "day"), $ = s.range(n, _, "day");
  return a = a.filter(function(D) {
    return Ot(D, s.startOf(n, "day"), s.endOf(_, "day"), r, s);
  }), a.sort(function(D, C) {
    return +r.start(D) - +r.start(C);
  }), /* @__PURE__ */ g.createElement("div", {
    className: "rbc-agenda-view"
  }, a.length !== 0 ? /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("table", {
    ref: f,
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ g.createElement("thead", null, /* @__PURE__ */ g.createElement("tr", null, /* @__PURE__ */ g.createElement("th", {
    className: "rbc-header",
    ref: d
  }, S.date), /* @__PURE__ */ g.createElement("th", {
    className: "rbc-header",
    ref: p
  }, S.time), /* @__PURE__ */ g.createElement("th", {
    className: "rbc-header"
  }, S.event)))), /* @__PURE__ */ g.createElement("div", {
    className: "rbc-agenda-content",
    ref: v
  }, /* @__PURE__ */ g.createElement("table", {
    className: "rbc-agenda-table"
  }, /* @__PURE__ */ g.createElement("tbody", {
    ref: h
  }, $.map(function(D, C) {
    return m(D, a, C);
  }))))) : /* @__PURE__ */ g.createElement("span", {
    className: "rbc-agenda-empty"
  }, S.noEventsInRange));
}
Ne.defaultProps = {
  length: 30
};
Ne.range = function(e, r) {
  var t = r.length, n = t === void 0 ? Ne.defaultProps.length : t, a = r.localizer, o = a.add(e, n, "day");
  return {
    start: e,
    end: o
  };
};
Ne.navigate = function(e, r, t) {
  var n = t.length, a = n === void 0 ? Ne.defaultProps.length : n, o = t.localizer;
  switch (r) {
    case ge.PREVIOUS:
      return o.add(e, -a, "day");
    case ge.NEXT:
      return o.add(e, a, "day");
    default:
      return e;
  }
};
Ne.title = function(e, r) {
  var t = r.length, n = t === void 0 ? Ne.defaultProps.length : t, a = r.localizer, o = a.add(e, n, "day");
  return a.format({
    start: e,
    end: o
  }, "agendaHeaderFormat");
};
var Jt = We(We(We(We(We({}, ce.MONTH, Pr), ce.WEEK, Ie), ce.WORK_WEEK, Lt), ce.DAY, Rr), ce.AGENDA, Ne), sE = ["action", "date", "today"];
function lE(e, r) {
  var t = r.action, n = r.date, a = r.today, o = $e(r, sE);
  switch (e = typeof e == "string" ? Jt[e] : e, t) {
    case ge.TODAY:
      n = a || /* @__PURE__ */ new Date();
      break;
    case ge.DATE:
      break;
    default:
      gt(e && typeof e.navigate == "function", "Calendar View components must implement a static `.navigate(date, action)` method.s"), n = e.navigate(n, t, o);
  }
  return n;
}
var cE = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    var t;
    se(this, r);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return t = he(this, r, [].concat(a)), t.navigate = function(i) {
      t.props.onNavigate(i);
    }, t.view = function(i) {
      t.props.onView(i);
    }, t;
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.localizer.messages, o = n.label;
      return /* @__PURE__ */ g.createElement("div", {
        className: "rbc-toolbar"
      }, /* @__PURE__ */ g.createElement("span", {
        className: "rbc-btn-group"
      }, /* @__PURE__ */ g.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, ge.TODAY)
      }, a.today), /* @__PURE__ */ g.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, ge.PREVIOUS)
      }, a.previous), /* @__PURE__ */ g.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, ge.NEXT)
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
            className: ie({
              "rbc-active": i === s
            }),
            onClick: a.view.bind(null, s)
          }, n[s]);
        });
    }
  }]), r;
}(g.Component);
function uE(e, r) {
  var t = null;
  return typeof r == "function" ? t = r(e) : typeof r == "string" && Te(e) === "object" && e != null && r in e && (t = e[r]), t;
}
var Pe = function(r) {
  return function(t) {
    return uE(t, r);
  };
}, fE = ["view", "date", "getNow", "onNavigate"], dE = ["view", "toolbar", "events", "backgroundEvents", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function ps(e) {
  if (Array.isArray(e))
    return e;
  for (var r = [], t = 0, n = Object.entries(e); t < n.length; t++) {
    var a = Oe(n[t], 2), o = a[0], i = a[1];
    i && r.push(o);
  }
  return r;
}
function hE(e, r) {
  var t = r.views, n = ps(t);
  return n.indexOf(e) !== -1;
}
var ms = /* @__PURE__ */ function(e) {
  ve(r, e);
  function r() {
    var t;
    se(this, r);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return t = he(this, r, [].concat(a)), t.getViews = function() {
      var i = t.props.views;
      return Array.isArray(i) ? x_(i, function(s, l) {
        return s[l] = Jt[l];
      }, {}) : Te(i) === "object" ? L_(i, function(s, l) {
        return s === !0 ? Jt[l] : s;
      }) : Jt;
    }, t.getView = function() {
      var i = t.getViews();
      return i[t.props.view];
    }, t.getDrilldownView = function(i) {
      var s = t.props, l = s.view, c = s.drilldownView, u = s.getDrilldownView;
      return u ? u(i, l, Object.keys(t.getViews())) : c;
    }, t.handleRangeChange = function(i, s, l) {
      var c = t.props, u = c.onRangeChange, f = c.localizer;
      u && s.range && u(s.range(i, {
        localizer: f
      }), l);
    }, t.handleNavigate = function(i, s) {
      var l = t.props, c = l.view, u = l.date, f = l.getNow, d = l.onNavigate, p = $e(l, fE), v = t.getView(), h = f();
      u = lE(v, J(J({}, p), {}, {
        action: i,
        date: s || u || h,
        today: h
      })), d(u, c, i), t.handleRangeChange(u, v);
    }, t.handleViewChange = function(i) {
      i !== t.props.view && hE(i, t.props) && t.props.onView(i);
      var s = t.getViews();
      t.handleRangeChange(t.props.date || t.props.getNow(), s[i], i);
    }, t.handleSelectEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onSelectEvent, s);
    }, t.handleDoubleClickEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onDoubleClickEvent, s);
    }, t.handleKeyPressEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
        s[l] = arguments[l];
      re(t.props.onKeyPressEvent, s);
    }, t.handleSelectSlot = function(i) {
      re(t.props.onSelectSlot, i);
    }, t.handleDrillDown = function(i, s) {
      var l = t.props.onDrillDown;
      if (l) {
        l(i, s, t.drilldownView);
        return;
      }
      s && t.handleViewChange(s), t.handleNavigate(ge.DATE, i);
    }, t.state = {
      context: r.getContext(t.props)
    }, t;
  }
  return le(r, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.view, o = n.toolbar, i = n.events, s = n.backgroundEvents, l = n.style, c = n.className, u = n.elementProps, f = n.date, d = n.getNow, p = n.length, v = n.showMultiDayTimes, h = n.onShowMore, m = n.doShowMoreDrillDown;
      n.components, n.formats, n.messages, n.culture;
      var y = $e(n, dE);
      f = f || d();
      var b = this.getView(), S = this.state.context, _ = S.accessors, $ = S.components, D = S.getters, C = S.localizer, L = S.viewNames, F = $.toolbar || cE, A = b.title(f, {
        localizer: C,
        length: p
      });
      return /* @__PURE__ */ g.createElement("div", Object.assign({}, u, {
        className: ie(c, "rbc-calendar", y.rtl && "rbc-rtl"),
        style: l
      }), o && /* @__PURE__ */ g.createElement(F, {
        date: f,
        view: a,
        views: L,
        label: A,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: C
      }), /* @__PURE__ */ g.createElement(b, Object.assign({}, y, {
        events: i,
        backgroundEvents: s,
        date: f,
        getNow: d,
        length: p,
        localizer: C,
        getters: D,
        components: $,
        accessors: _,
        showMultiDayTimes: v,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: h,
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
      var a = n.startAccessor, o = n.endAccessor, i = n.allDayAccessor, s = n.tooltipAccessor, l = n.titleAccessor, c = n.resourceAccessor, u = n.resourceIdAccessor, f = n.resourceTitleAccessor, d = n.eventPropGetter, p = n.backgroundEventPropGetter, v = n.slotPropGetter, h = n.slotGroupPropGetter, m = n.dayPropGetter, y = n.view, b = n.views, S = n.localizer, _ = n.culture, $ = n.messages, D = $ === void 0 ? {} : $, C = n.components, L = C === void 0 ? {} : C, F = n.formats, A = F === void 0 ? {} : F, T = ps(b), j = g$(D);
      return {
        viewNames: T,
        localizer: p$(S, _, A, j),
        getters: {
          eventProp: function() {
            return d && d.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function() {
            return p && p.apply(void 0, arguments) || {};
          },
          slotProp: function() {
            return v && v.apply(void 0, arguments) || {};
          },
          slotGroupProp: function() {
            return h && h.apply(void 0, arguments) || {};
          },
          dayProp: function() {
            return m && m.apply(void 0, arguments) || {};
          }
        },
        components: y_(L[y] || {}, u_(L, T), {
          eventWrapper: Me,
          backgroundEventWrapper: Me,
          eventContainerWrapper: Me,
          dateCellWrapper: Me,
          weekWrapper: Me,
          timeSlotWrapper: Me,
          timeGutterWrapper: Me
        }),
        accessors: {
          start: Pe(a),
          end: Pe(o),
          allDay: Pe(i),
          tooltip: Pe(s),
          title: Pe(l),
          resource: Pe(c),
          resourceId: Pe(u),
          resourceTitle: Pe(f)
        }
      };
    }
  }]), r;
}(g.Component);
ms.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: !1,
  toolbar: !0,
  view: ce.MONTH,
  views: [ce.MONTH, ce.WEEK, ce.DAY, ce.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: 1 / 0,
  doShowMoreDrillDown: !0,
  drilldownView: ce.DAY,
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
var vE = Uo(ms, {
  view: "onView",
  date: "onNavigate",
  selected: "onSelectEvent"
}), pE = function(r, t, n) {
  var a = r.start, o = r.end;
  return n.format(a, "MMMM DD", t) + " – " + // updated to use this localizer 'eq()' method
  n.format(o, n.eq(a, o, "month") ? "DD" : "MMMM DD", t);
}, mE = function(r, t, n) {
  var a = r.start, o = r.end;
  return n.format(a, "L", t) + " – " + n.format(o, "L", t);
}, Br = function(r, t, n) {
  var a = r.start, o = r.end;
  return n.format(a, "LT", t) + " – " + n.format(o, "LT", t);
}, gE = function(r, t, n) {
  var a = r.start;
  return n.format(a, "LT", t) + " – ";
}, yE = function(r, t, n) {
  var a = r.end;
  return " – " + n.format(a, "LT", t);
}, bE = {
  dateFormat: "DD",
  dayFormat: "DD ddd",
  weekdayFormat: "ddd",
  selectRangeFormat: Br,
  eventTimeRangeFormat: Br,
  eventTimeRangeStartFormat: gE,
  eventTimeRangeEndFormat: yE,
  timeGutterFormat: "LT",
  monthHeaderFormat: "MMMM YYYY",
  dayHeaderFormat: "dddd MMM DD",
  dayRangeHeaderFormat: pE,
  agendaHeaderFormat: mE,
  agendaDateFormat: "ddd MMM DD",
  agendaTimeFormat: "LT",
  agendaTimeRangeFormat: Br
};
function Re(e) {
  var r = e && e.toLowerCase();
  return r === "FullYear" ? r = "year" : r || (r = void 0), r;
}
function wE(e) {
  e.extend(F_), e.extend(j_), e.extend(U_), e.extend(Y_), e.extend(K_), e.extend(q_), e.extend(Z_);
  var r = function(O, R) {
    return R ? O.locale(R) : O;
  }, t = e.tz ? e.tz : e;
  function n(E) {
    return t(E).toDate().getTimezoneOffset();
  }
  function a(E, O) {
    var R, z = t(E), H = t(O);
    if (!t.tz)
      return z.toDate().getTimezoneOffset() - H.toDate().getTimezoneOffset();
    var V = (R = z.tz().$x.$timezone) !== null && R !== void 0 ? R : e.tz.guess(), ee = -t.tz(+z, V).utcOffset(), X = -t.tz(+H, V).utcOffset();
    return ee - X;
  }
  function o(E) {
    var O = t(E).startOf("day");
    return a(O, E);
  }
  function i(E, O, R) {
    var z = Re(R), H = z ? t(E).startOf(z) : t(E), V = z ? t(O).startOf(z) : t(O);
    return [H, V, z];
  }
  function s() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, O = arguments.length > 1 ? arguments[1] : void 0, R = Re(O);
    return R ? t(E).startOf(R).toDate() : t(E).toDate();
  }
  function l() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, O = arguments.length > 1 ? arguments[1] : void 0, R = Re(O);
    return R ? t(E).endOf(R).toDate() : t(E).toDate();
  }
  function c(E, O, R) {
    var z = i(E, O, R), H = Oe(z, 3), V = H[0], ee = H[1], X = H[2];
    return V.isSame(ee, X);
  }
  function u(E, O, R) {
    return !c(E, O, R);
  }
  function f(E, O, R) {
    var z = i(E, O, R), H = Oe(z, 3), V = H[0], ee = H[1], X = H[2];
    return V.isAfter(ee, X);
  }
  function d(E, O, R) {
    var z = i(E, O, R), H = Oe(z, 3), V = H[0], ee = H[1], X = H[2];
    return V.isBefore(ee, X);
  }
  function p(E, O, R) {
    var z = i(E, O, R), H = Oe(z, 3), V = H[0], ee = H[1], X = H[2];
    return V.isSameOrBefore(ee, X);
  }
  function v(E, O, R) {
    var z = i(E, O, R), H = Oe(z, 3), V = H[0], ee = H[1], X = H[2];
    return V.isSameOrBefore(ee, X);
  }
  function h(E, O, R) {
    var z = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day", H = Re(z), V = t(E), ee = t(O), X = t(R);
    return V.isBetween(ee, X, H, "[]");
  }
  function m(E, O) {
    var R = t(E), z = t(O), H = e.min(R, z);
    return H.toDate();
  }
  function y(E, O) {
    var R = t(E), z = t(O), H = e.max(R, z);
    return H.toDate();
  }
  function b(E, O) {
    if (!E && !O)
      return null;
    var R = t(O).format("HH:mm:ss"), z = t(E).startOf("day").format("MM/DD/YYYY");
    return e("".concat(z, " ").concat(R), "MM/DD/YYYY HH:mm:ss").toDate();
  }
  function S(E, O, R) {
    var z = Re(R);
    return t(E).add(O, z).toDate();
  }
  function _(E, O) {
    for (var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", z = Re(R), H = t(E).toDate(), V = []; v(H, O); )
      V.push(H), H = S(H, 1, z);
    return V;
  }
  function $(E, O) {
    var R = Re(O), z = s(E, R);
    return c(z, E) ? z : S(z, 1, R);
  }
  function D(E, O) {
    var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", z = Re(R), H = t(E), V = t(O);
    return V.diff(H, z);
  }
  function C(E) {
    var O = t(E);
    return O.minutes();
  }
  function L(E) {
    var O = E ? e.localeData(E) : e.localeData();
    return O ? O.firstDayOfWeek() : 0;
  }
  function F(E) {
    return t(E).startOf("month").startOf("week").toDate();
  }
  function A(E) {
    return t(E).endOf("month").endOf("week").toDate();
  }
  function T(E) {
    for (var O = F(E), R = A(E), z = []; v(O, R); )
      z.push(O), O = S(O, 1, "d");
    return z;
  }
  function j(E, O, R) {
    return t(E).startOf("day").minute(O + R).toDate();
  }
  function Y(E, O) {
    return D(E, O, "minutes");
  }
  function W(E) {
    var O = t(E).startOf("day"), R = t(E);
    return R.diff(O, "minutes") + o(E);
  }
  function x(E, O) {
    var R = t(E), z = t(O);
    return R.isBefore(z, "day");
  }
  function M(E, O, R) {
    var z = t(O), H = t(R);
    return z.isSameOrAfter(H, "minutes");
  }
  function k(E, O) {
    var R = t(E), z = t(O);
    return z.diff(R, "day");
  }
  function N(E) {
    var O = E.evtA, R = O.start, z = O.end, H = O.allDay, V = E.evtB, ee = V.start, X = V.end, ne = V.allDay, ye = +s(R, "day") - +s(ee, "day"), De = k(R, z), xe = k(ee, X);
    return ye || // sort by start Day first
    xe - De || // events spanning multiple days go first
    !!ne - !!H || // then allDay single day events
    +R - +ee || // then sort by start time *don't need dayjs conversion here
    +z - +X;
  }
  function B(E) {
    var O = E.event, R = O.start, z = O.end, H = E.range, V = H.start, ee = H.end, X = t(R).startOf("day"), ne = t(z), ye = t(V), De = t(ee), xe = X.isSameOrBefore(De, "day"), ws = !X.isSame(ne, "minutes"), Ss = ws ? ne.isAfter(ye, "minutes") : ne.isSameOrAfter(ye, "minutes");
    return xe && Ss;
  }
  function U(E, O) {
    var R = t(E), z = t(O);
    return R.isSame(z, "day");
  }
  function K() {
    var E = /* @__PURE__ */ new Date(), O = /-/.test(E.toString()) ? "-" : "", R = E.getTimezoneOffset(), z = Number("".concat(O).concat(Math.abs(R))), H = t().utcOffset();
    return H > z ? 1 : 0;
  }
  return new v$({
    formats: bE,
    firstOfWeek: L,
    firstVisibleDay: F,
    lastVisibleDay: A,
    visibleDays: T,
    format: function(O, R, z) {
      return r(t(O), z).format(R);
    },
    lt: d,
    lte: v,
    gt: f,
    gte: p,
    eq: c,
    neq: u,
    merge: b,
    inRange: h,
    startOf: s,
    endOf: l,
    range: _,
    add: S,
    diff: D,
    ceil: $,
    min: m,
    max: y,
    minutes: C,
    getSlotDate: j,
    getTimezoneOffset: n,
    getDstOffset: a,
    getTotalMin: Y,
    getMinutesFromMidnight: W,
    continuesPrior: x,
    continuesAfter: M,
    sortEvents: N,
    inEventRange: B,
    isSameDate: U,
    browserTZOffset: K
  });
}
var gs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    var t = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", l = "hour", c = "day", u = "week", f = "month", d = "quarter", p = "year", v = "date", h = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
      var x = ["th", "st", "nd", "rd"], M = W % 100;
      return "[" + W + (x[(M - 20) % 10] || x[M] || x[0]) + "]";
    } }, S = function(W, x, M) {
      var k = String(W);
      return !k || k.length >= x ? W : "" + Array(x + 1 - k.length).join(M) + W;
    }, _ = { s: S, z: function(W) {
      var x = -W.utcOffset(), M = Math.abs(x), k = Math.floor(M / 60), N = M % 60;
      return (x <= 0 ? "+" : "-") + S(k, 2, "0") + ":" + S(N, 2, "0");
    }, m: function W(x, M) {
      if (x.date() < M.date())
        return -W(M, x);
      var k = 12 * (M.year() - x.year()) + (M.month() - x.month()), N = x.clone().add(k, f), B = M - N < 0, U = x.clone().add(k + (B ? -1 : 1), f);
      return +(-(k + (M - N) / (B ? N - U : U - N)) || 0);
    }, a: function(W) {
      return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
    }, p: function(W) {
      return { M: f, y: p, w: u, d: c, D: v, h: l, m: s, s: i, ms: o, Q: d }[W] || String(W || "").toLowerCase().replace(/s$/, "");
    }, u: function(W) {
      return W === void 0;
    } }, $ = "en", D = {};
    D[$] = b;
    var C = "$isDayjsObject", L = function(W) {
      return W instanceof j || !(!W || !W[C]);
    }, F = function W(x, M, k) {
      var N;
      if (!x)
        return $;
      if (typeof x == "string") {
        var B = x.toLowerCase();
        D[B] && (N = B), M && (D[B] = M, N = B);
        var U = x.split("-");
        if (!N && U.length > 1)
          return W(U[0]);
      } else {
        var K = x.name;
        D[K] = x, N = K;
      }
      return !k && N && ($ = N), N || !k && $;
    }, A = function(W, x) {
      if (L(W))
        return W.clone();
      var M = typeof x == "object" ? x : {};
      return M.date = W, M.args = arguments, new j(M);
    }, T = _;
    T.l = F, T.i = L, T.w = function(W, x) {
      return A(W, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var j = function() {
      function W(M) {
        this.$L = F(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[C] = !0;
      }
      var x = W.prototype;
      return x.parse = function(M) {
        this.$d = function(k) {
          var N = k.date, B = k.utc;
          if (N === null)
            return /* @__PURE__ */ new Date(NaN);
          if (T.u(N))
            return /* @__PURE__ */ new Date();
          if (N instanceof Date)
            return new Date(N);
          if (typeof N == "string" && !/Z$/i.test(N)) {
            var U = N.match(m);
            if (U) {
              var K = U[2] - 1 || 0, E = (U[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(U[1], K, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, E)) : new Date(U[1], K, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, E);
            }
          }
          return new Date(N);
        }(M), this.init();
      }, x.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, x.$utils = function() {
        return T;
      }, x.isValid = function() {
        return this.$d.toString() !== h;
      }, x.isSame = function(M, k) {
        var N = A(M);
        return this.startOf(k) <= N && N <= this.endOf(k);
      }, x.isAfter = function(M, k) {
        return A(M) < this.startOf(k);
      }, x.isBefore = function(M, k) {
        return this.endOf(k) < A(M);
      }, x.$g = function(M, k, N) {
        return T.u(M) ? this[k] : this.set(N, M);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(M, k) {
        var N = this, B = !!T.u(k) || k, U = T.p(M), K = function(X, ne) {
          var ye = T.w(N.$u ? Date.UTC(N.$y, ne, X) : new Date(N.$y, ne, X), N);
          return B ? ye : ye.endOf(c);
        }, E = function(X, ne) {
          return T.w(N.toDate()[X].apply(N.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), N);
        }, O = this.$W, R = this.$M, z = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (U) {
          case p:
            return B ? K(1, 0) : K(31, 11);
          case f:
            return B ? K(1, R) : K(0, R + 1);
          case u:
            var V = this.$locale().weekStart || 0, ee = (O < V ? O + 7 : O) - V;
            return K(B ? z - ee : z + (6 - ee), R);
          case c:
          case v:
            return E(H + "Hours", 0);
          case l:
            return E(H + "Minutes", 1);
          case s:
            return E(H + "Seconds", 2);
          case i:
            return E(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(M) {
        return this.startOf(M, !1);
      }, x.$set = function(M, k) {
        var N, B = T.p(M), U = "set" + (this.$u ? "UTC" : ""), K = (N = {}, N[c] = U + "Date", N[v] = U + "Date", N[f] = U + "Month", N[p] = U + "FullYear", N[l] = U + "Hours", N[s] = U + "Minutes", N[i] = U + "Seconds", N[o] = U + "Milliseconds", N)[B], E = B === c ? this.$D + (k - this.$W) : k;
        if (B === f || B === p) {
          var O = this.clone().set(v, 1);
          O.$d[K](E), O.init(), this.$d = O.set(v, Math.min(this.$D, O.daysInMonth())).$d;
        } else
          K && this.$d[K](E);
        return this.init(), this;
      }, x.set = function(M, k) {
        return this.clone().$set(M, k);
      }, x.get = function(M) {
        return this[T.p(M)]();
      }, x.add = function(M, k) {
        var N, B = this;
        M = Number(M);
        var U = T.p(k), K = function(R) {
          var z = A(B);
          return T.w(z.date(z.date() + Math.round(R * M)), B);
        };
        if (U === f)
          return this.set(f, this.$M + M);
        if (U === p)
          return this.set(p, this.$y + M);
        if (U === c)
          return K(1);
        if (U === u)
          return K(7);
        var E = (N = {}, N[s] = n, N[l] = a, N[i] = t, N)[U] || 1, O = this.$d.getTime() + M * E;
        return T.w(O, this);
      }, x.subtract = function(M, k) {
        return this.add(-1 * M, k);
      }, x.format = function(M) {
        var k = this, N = this.$locale();
        if (!this.isValid())
          return N.invalidDate || h;
        var B = M || "YYYY-MM-DDTHH:mm:ssZ", U = T.z(this), K = this.$H, E = this.$m, O = this.$M, R = N.weekdays, z = N.months, H = N.meridiem, V = function(ne, ye, De, xe) {
          return ne && (ne[ye] || ne(k, B)) || De[ye].slice(0, xe);
        }, ee = function(ne) {
          return T.s(K % 12 || 12, ne, "0");
        }, X = H || function(ne, ye, De) {
          var xe = ne < 12 ? "AM" : "PM";
          return De ? xe.toLowerCase() : xe;
        };
        return B.replace(y, function(ne, ye) {
          return ye || function(De) {
            switch (De) {
              case "YY":
                return String(k.$y).slice(-2);
              case "YYYY":
                return T.s(k.$y, 4, "0");
              case "M":
                return O + 1;
              case "MM":
                return T.s(O + 1, 2, "0");
              case "MMM":
                return V(N.monthsShort, O, z, 3);
              case "MMMM":
                return V(z, O);
              case "D":
                return k.$D;
              case "DD":
                return T.s(k.$D, 2, "0");
              case "d":
                return String(k.$W);
              case "dd":
                return V(N.weekdaysMin, k.$W, R, 2);
              case "ddd":
                return V(N.weekdaysShort, k.$W, R, 3);
              case "dddd":
                return R[k.$W];
              case "H":
                return String(K);
              case "HH":
                return T.s(K, 2, "0");
              case "h":
                return ee(1);
              case "hh":
                return ee(2);
              case "a":
                return X(K, E, !0);
              case "A":
                return X(K, E, !1);
              case "m":
                return String(E);
              case "mm":
                return T.s(E, 2, "0");
              case "s":
                return String(k.$s);
              case "ss":
                return T.s(k.$s, 2, "0");
              case "SSS":
                return T.s(k.$ms, 3, "0");
              case "Z":
                return U;
            }
            return null;
          }(ne) || U.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(M, k, N) {
        var B, U = this, K = T.p(k), E = A(M), O = (E.utcOffset() - this.utcOffset()) * n, R = this - E, z = function() {
          return T.m(U, E);
        };
        switch (K) {
          case p:
            B = z() / 12;
            break;
          case f:
            B = z();
            break;
          case d:
            B = z() / 3;
            break;
          case u:
            B = (R - O) / 6048e5;
            break;
          case c:
            B = (R - O) / 864e5;
            break;
          case l:
            B = R / a;
            break;
          case s:
            B = R / n;
            break;
          case i:
            B = R / t;
            break;
          default:
            B = R;
        }
        return N ? B : T.a(B);
      }, x.daysInMonth = function() {
        return this.endOf(f).$D;
      }, x.$locale = function() {
        return D[this.$L];
      }, x.locale = function(M, k) {
        if (!M)
          return this.$L;
        var N = this.clone(), B = F(M, k, !0);
        return B && (N.$L = B), N;
      }, x.clone = function() {
        return T.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, W;
    }(), Y = j.prototype;
    return A.prototype = Y, [["$ms", o], ["$s", i], ["$m", s], ["$H", l], ["$W", c], ["$M", f], ["$y", p], ["$D", v]].forEach(function(W) {
      Y[W[1]] = function(x) {
        return this.$g(x, W[0], W[1]);
      };
    }), A.extend = function(W, x) {
      return W.$i || (W(x, j, A), W.$i = !0), A;
    }, A.locale = F, A.isDayjs = L, A.unix = function(W) {
      return A(1e3 * W);
    }, A.en = D[$], A.Ls = D, A.p = {}, A;
  });
})(gs);
var ys = gs.exports;
const Ce = /* @__PURE__ */ oe(ys);
var bs = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(me, function() {
    return function(t, n, a) {
      a.updateLocale = function(o, i) {
        var s = a.Ls[o];
        if (s)
          return (i ? Object.keys(i) : []).forEach(function(l) {
            s[l] = i[l];
          }), s;
      };
    };
  });
})(bs);
var SE = bs.exports;
const _E = /* @__PURE__ */ oe(SE);
var $E = { exports: {} };
(function(e, r) {
  (function(t, n) {
    e.exports = n(ys);
  })(me, function(t) {
    function n(v) {
      return v && typeof v == "object" && "default" in v ? v : { default: v };
    }
    var a = n(t), o = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), i = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), s = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), c = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function u(v, h, m) {
      var y, b;
      return m === "m" ? h ? "минута" : "минуту" : v + " " + (y = +v, b = { mm: h ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[m].split("_"), y % 10 == 1 && y % 100 != 11 ? b[0] : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? b[1] : b[2]);
    }
    var f = function(v, h) {
      return c.test(h) ? o[v.month()] : i[v.month()];
    };
    f.s = i, f.f = o;
    var d = function(v, h) {
      return c.test(h) ? s[v.month()] : l[v.month()];
    };
    d.s = l, d.f = s;
    var p = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: f, monthsShort: d, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: u, mm: u, h: "час", hh: u, d: "день", dd: u, M: "месяц", MM: u, y: "год", yy: u }, ordinal: function(v) {
      return v;
    }, meridiem: function(v) {
      return v < 4 ? "ночи" : v < 12 ? "утра" : v < 17 ? "дня" : "вечера";
    } };
    return a.default.locale(p, null, !0), p;
  });
})($E);
Ce.extend(_E);
Ce.locale("ru");
Ce.updateLocale("ru", {
  weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_")
});
const EE = wE(Ce), bo = (e) => e.charAt(0).toUpperCase() + e.slice(1), DE = {
  monthHeaderFormat: (e, r, t) => bo(t.format(e, "MMMM YYYY", r)),
  dayFormat: (e, r, t) => t.format(e, "D", r).toUpperCase(),
  weekdayFormat: (e, r, t) => t.format(e, "dd", r).toUpperCase(),
  dayRangeHeaderFormat: ({
    start: e,
    end: r
  }, t, n) => bo(n.format(e, "MMMM D", t)) + " - " + n.format(r, "D", t)
  // agendaDateFormat
  // agendaHeaderFormat
}, ME = {
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
}, OE = () => {
  const {
    query: e
  } = I.useContext(tt), [r, t] = I.useState(/* @__PURE__ */ new Date()), [n, a] = I.useState(null), o = Es(), i = I.useMemo(() => ({
    calendar: 1,
    startDate: Ce(r).startOf("month").toISOString(),
    endDate: Ce(r).startOf("month").add(1, "month").toISOString(),
    uid: e.data.data.id
  }), [r]), {
    data: s
  } = fr("/api/attendance/get-teacher-dates", {
    params: i,
    enabled: e.isSuccess
  }), l = I.useMemo(() => (s == null ? void 0 : s.data.map(({
    title: c,
    startDate: u,
    endDate: f,
    group_id: d
  }) => ({
    title: c,
    start: Ce(u).toDate(),
    end: Ce(f).toDate(),
    resource: {
      group_id: d,
      eventId: `${c}-${u}-${f}-${d}`,
      selectedEventId: n == null ? void 0 : n.resource.eventId,
      setSelectedEvent: a
    }
  }))) || [], [s == null ? void 0 : s.data]);
  return /* @__PURE__ */ w(vE, { events: l, localizer: EE, css: Ks`
        .rbc-toolbar {
          ${{
    display: "flex"
  }}
        }
      `, views: o ? ["month", "week", "agenda"] : ["month", "week"], defaultView: o ? ce.AGENDA : ce.MONTH, messages: ME, formats: DE, onNavigate: t, onSelectEvent: a, components: {
    eventWrapper: TE,
    month: {
      event: CE
    },
    agenda: {
      event: AE
    }
  }, selected: n });
}, CE = (e) => /* @__PURE__ */ w("div", { className: "custom-event-title", children: `${Ce(e.event.start).format("HH:mm")} ${e.title}` }), TE = (e) => {
  var s, l, c;
  const {
    event: r,
    selected: t,
    children: n
  } = e, a = I.useRef(null), o = $o(() => {
    t && r.resource.eventId !== r.resource.selectedEventId && r.resource.setSelectedEvent(null);
  }), {
    data: i
  } = fr("/api/rest/eventGroups/" + (r == null ? void 0 : r.resource.group_id), {
    params: {
      format: "mini"
    },
    enabled: !!(r != null && r.resource.group_id)
  });
  return /* @__PURE__ */ be(vn, { children: [
    /* @__PURE__ */ w("div", { id: r.resource.eventId, ref: a, children: n }),
    /* @__PURE__ */ w(Mo, { open: t, anchorEl: a.current, placement: "bottom-start", ref: o, css: {
      zIndex: "10"
    }, children: /* @__PURE__ */ w(Do, { sx: {
      border: 1,
      p: 1,
      bgcolor: "background.paper"
    }, children: /* @__PURE__ */ w(dr, { header: `Группа: #${(s = i == null ? void 0 : i.data[0]) == null ? void 0 : s.id}`, children: /* @__PURE__ */ be("div", { children: [
      /* @__PURE__ */ w("p", { children: (l = i == null ? void 0 : i.data[0]) == null ? void 0 : l.name }),
      /* @__PURE__ */ w("p", { children: (c = i == null ? void 0 : i.data[0]) == null ? void 0 : c.teacher })
    ] }) }) }) })
  ] });
}, AE = ({
  event: e,
  title: r
}) => {
  var c, u, f;
  const [t, n] = I.useState(!1), a = I.useRef(null), o = $o(() => {
    l();
  }), {
    data: i
  } = fr("/api/rest/eventGroups/" + (e == null ? void 0 : e.resource.group_id), {
    params: {
      format: "mini"
    },
    enabled: !!(e != null && e.resource.group_id)
  }), s = () => n(!0), l = () => n(!1);
  return /* @__PURE__ */ be(vn, { children: [
    /* @__PURE__ */ w(Mo, { open: t, anchorEl: a.current, placement: "bottom-start", ref: o, css: {
      zIndex: "10"
    }, children: /* @__PURE__ */ w(Do, { sx: {
      border: 1,
      p: 1,
      bgcolor: "background.paper"
    }, children: /* @__PURE__ */ w(dr, { header: `Группа: #${(c = i == null ? void 0 : i.data[0]) == null ? void 0 : c.id}`, children: /* @__PURE__ */ be("div", { children: [
      /* @__PURE__ */ w("p", { children: (u = i == null ? void 0 : i.data[0]) == null ? void 0 : u.name }),
      /* @__PURE__ */ w("p", { children: (f = i == null ? void 0 : i.data[0]) == null ? void 0 : f.teacher })
    ] }) }) }) }),
    /* @__PURE__ */ w("div", { ref: a, children: /* @__PURE__ */ w(ur, { itemType: "link", onClick: s, children: r }) })
  ] });
}, wo = [{
  id: "main",
  title: "Основные",
  content: (e) => /* @__PURE__ */ w(Zs, { form: e })
}, {
  id: "addit",
  title: "Дополнительно",
  content: (e) => /* @__PURE__ */ w(Js, { form: e })
}, {
  id: "photo",
  title: "Фото",
  content: (e) => /* @__PURE__ */ w(Tl, { form: e })
}, {
  id: "achievments",
  title: "Достижения",
  content: (e) => /* @__PURE__ */ w(Qs, { form: e })
}, {
  id: "cal",
  title: "Календарь",
  content: () => /* @__PURE__ */ w(OE, {})
}], xE = () => {
  var i;
  const {
    setTitle: e
  } = Vs(), {
    query: r,
    mutation: t,
    formInstance: n
  } = g.useContext(tt), a = I.useCallback((s) => {
    var l;
    return /* @__PURE__ */ w(PE, { children: n ? (l = wo[s]) == null ? void 0 : l.content(n) : null });
  }, [n]), o = (i = r == null ? void 0 : r.data) == null ? void 0 : i.data.fio;
  return I.useEffect(() => {
    o && e(o);
  }, [o]), /* @__PURE__ */ w(dr, { fit: !0, footer: /* @__PURE__ */ w(ur, { type: "submit", css: {
    marginLeft: "auto"
  }, variant: "contained", color: "success", onClick: n == null ? void 0 : n.submit, disabled: t == null ? void 0 : t.isPending, children: "Сохранить" }), children: /* @__PURE__ */ w(Ms, { tabs: wo, tabComponentRenderer: a, css: {
    display: "flex",
    height: "100%"
  } }) });
}, PE = ({
  children: e
}) => {
  var n;
  const {
    query: r
  } = g.useContext(tt), t = (n = r == null ? void 0 : r.data) == null ? void 0 : n.data.id;
  return r != null && r.isLoading ? /* @__PURE__ */ w(So, { spinning: !0 }) : /* @__PURE__ */ w("div", { css: {
    height: "100%",
    width: "100%",
    flex: "1 1 0%",
    overflow: "auto",
    padding: "1rem",
    "@media (min-width: 768px)": {
      padding: "1.5rem"
    }
  }, children: t ? /* @__PURE__ */ w(RE, { id: t, children: e }) : null });
}, RE = ({
  children: e,
  id: r
}) => {
  var s;
  const {
    query: t,
    setMutation: n,
    setFormInstance: a
  } = g.useContext(tt), o = tl(r);
  I.useEffect(() => {
    n(o);
  }, []), I.useEffect(() => {
    a(i);
  }, []);
  const i = xs({
    mutation: o,
    schema: Oo,
    defaultValues: (s = t == null ? void 0 : t.data) == null ? void 0 : s.data
  });
  return e;
}, KE = () => /* @__PURE__ */ w(rl, { children: /* @__PURE__ */ w(xE, {}) });
export {
  KE as default
};
