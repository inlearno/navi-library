import { j as r, N as ne, f as W, a as p, S as ae } from "./library-4abb055a.js";
import { r as u, R as H } from "./react-6f5a8403.js";
import { u as j, f as ie, B as F, z as o, T as I, F as a, D as L, Y as le, a as f, b as E, c as C, N as v, L as ce, d as Y, e as M, g as se, Q as de } from "./Boolean-a214af4e.js";
import { F as x } from "./icons-ad9f8a73.js";
import { l as me, a as R, b as ue } from "./DictionaryCell-860b563e.js";
import { P as pe, R as he, u as z } from "./RootSection-644c9f66.js";
import { f as fe, u as V, T as Q, c as A, S as ge } from "./index-def21c5c.js";
import { S as _e, R as be, T as ve, f as G, M as J, A as ye, C as we, a as xe, b as Ce, F as Se, c as ke, d as De, I as Ie, D as Pe, e as Te, g as Fe, B as Me } from "./BookInput-aaef8eb4.js";
import { a as Le, B as Ee } from "./mui-4f485058.js";
import { f as Ne } from "./faPen-6d05924c.js";
import { f as U } from "./faPlus-da331287.js";
import { u as $ } from "./useWindowController-b762de66.js";
import "./table-f5369550.js";
var h = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(h || {});
const je = ({
  stepsDefinition: e,
  values: t,
  stateKey: l,
  mutation: s
}) => {
  const [c, i] = u.useState(!1), [n, d] = u.useState({});
  if (e.length === 0)
    throw new Error("No steps defined");
  u.useEffect(() => {
    t && l in t && t[l] && d(t[l]);
  }, [t]);
  const g = u.useMemo(() => e.map((S) => ({
    ...S,
    status: n[S.id] ?? h.WAIT
  })), [e, n]), [_, w] = u.useState(g[0]), y = u.useRef(null), m = u.useMemo(() => g.findIndex((S) => S.id === (_ == null ? void 0 : _.id)) || 0, [_]), D = u.useCallback((S) => {
    d((O) => ({
      ...O,
      [_.id]: O[_.id] === h.ERROR && S === h.EDIT ? h.ERROR : S
    }));
  }, [_, d]), N = m === g.length - 1, B = async () => {
    try {
      i(!0), D(h.LOADING), y.current ? await y.current.save() : await s.mutateAsync({
        ...t,
        [l]: {
          ...t[l],
          [_.id]: h.DONE
        }
      });
    } catch {
      D(h.ERROR);
    } finally {
      i(!1);
    }
  }, te = u.useCallback(async () => {
    if (!N)
      try {
        await B(), w(g[m + 1]);
      } catch {
      }
  }, [m, N]), oe = u.useCallback(() => {
    m !== 0 && w(g[m - 1]);
  }, [m]);
  return {
    steps: g,
    stepFormRef: y,
    isSubmitting: c,
    setActiveStepStatus: D,
    getNextButtonProps: () => ({
      onClick: N ? B : te,
      disabled: c
    }),
    activeStep: _,
    activeStepIndex: m,
    setActiveStep: w,
    getPrevButtonProps: () => ({
      onClick: oe,
      disabled: m === 0
    })
  };
}, X = H.createContext(null), Re = ({
  children: e,
  value: t
}) => {
  const [l, s] = H.useState({}), {
    activeStep: {
      id: c
    }
  } = t, i = u.useCallback(() => l[c] || {}, [c, l]), n = u.useCallback((d) => s((g) => ({
    ...g,
    [c]: {
      ...g[c],
      ...d
    }
  })), [c, l, s]);
  return /* @__PURE__ */ r(X.Provider, { value: {
    ...t,
    getStepState: i,
    setStepState: n
  }, children: e });
};
function ze() {
  const e = u.useContext(X);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const b = ({
  ...e
}) => {
  const {
    stepFormRef: t,
    activeStep: l,
    stateKey: s,
    getStepState: c,
    setStepState: i,
    values: n,
    mutation: d,
    setActiveStepStatus: g
  } = ze(), _ = c(), {
    errors: w,
    fields: y
  } = _, m = j({
    mutation: d,
    errors: w,
    defaultValues: y ?? n,
    transformSendData: (D) => ({
      ...D,
      [s]: {
        ...n ? n[s] : {},
        [l.id]: h.DONE
      }
    }),
    ...e
  });
  return u.useEffect(() => {
    i({
      errors: m.formState.errors
    });
  }, [m.formState.errors]), u.useEffect(() => {
    me.isEqual(m.getValues(), n) || (g(h.EDIT), i({
      fields: m.getValues()
    }));
  }, [l, JSON.stringify(m.formState.dirtyFields)]), u.useImperativeHandle(t, () => ({
    save: async () => {
      await m.submit(), i({
        fields: void 0
      });
    }
  })), m;
};
var Z = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", l = "arrow-left", s = 448, c = 512, i = [8592], n = "f060", d = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: l,
    icon: [
      s,
      c,
      i,
      n,
      d
    ]
  }, e.faArrowLeft = e.definition, e.prefix = t, e.iconName = l, e.width = s, e.height = c, e.ligatures = i, e.unicode = n, e.svgPathData = d, e.aliases = i;
})(Z);
var K = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", l = "pencil", s = 512, c = 512, i = [9999, 61504, "pencil-alt"], n = "f303", d = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: t,
    iconName: l,
    icon: [
      s,
      c,
      i,
      n,
      d
    ]
  }, e.faPencil = e.definition, e.prefix = t, e.iconName = l, e.width = s, e.height = c, e.ligatures = i, e.unicode = n, e.svgPathData = d, e.aliases = i;
})(K);
var T = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", l = "circle", s = 512, c = 512, i = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], n = "f111", d = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: t,
    iconName: l,
    icon: [
      s,
      c,
      i,
      n,
      d
    ]
  }, e.faCircle = e.definition, e.prefix = t, e.iconName = l, e.width = s, e.height = c, e.ligatures = i, e.unicode = n, e.svgPathData = d, e.aliases = i;
})(T);
var ee = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", l = "lock", s = 448, c = 512, i = [128274], n = "f023", d = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: t,
    iconName: l,
    icon: [
      s,
      c,
      i,
      n,
      d
    ]
  }, e.faLock = e.definition, e.prefix = t, e.iconName = l, e.width = s, e.height = c, e.ligatures = i, e.unicode = n, e.svgPathData = d, e.aliases = i;
})(ee);
var re = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "far", l = "clock", s = 512, c = 512, i = [128339, "clock-four"], n = "f017", d = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: t,
    iconName: l,
    icon: [
      s,
      c,
      i,
      n,
      d
    ]
  }, e.faClock = e.definition, e.prefix = t, e.iconName = l, e.width = s, e.height = c, e.ligatures = i, e.unicode = n, e.svgPathData = d, e.aliases = i;
})(re);
const Ae = ({
  status: e
}) => ne(e).with(h.DONE, () => /* @__PURE__ */ r(x, { icon: fe.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(h.ACTIVE, () => /* @__PURE__ */ r(x, { mask: T.faCircle, icon: Ne.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(h.WAIT, () => /* @__PURE__ */ r(x, { mask: T.faCircle, icon: re.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(h.LOADING, () => /* @__PURE__ */ r(x, { icon: W.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(h.DISABLED, () => /* @__PURE__ */ r(x, { mask: T.faCircle, transform: "shrink-8", icon: ee.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(h.ERROR, () => /* @__PURE__ */ r(x, { icon: ie.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(h.EDIT, () => /* @__PURE__ */ r(x, { mask: T.faCircle, transform: "shrink-8", icon: K.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), $e = ({
  items: e,
  activeItem: t,
  className: l,
  onChange: s
}) => /* @__PURE__ */ r("div", { className: l, children: /* @__PURE__ */ r("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((c, i) => {
  const n = (t == null ? void 0 : t.id) === c.id;
  return /* @__PURE__ */ r("li", { onClick: () => c.status !== h.DISABLED ? s == null ? void 0 : s(c) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, n ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : c.status === h.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, n && Le`
                    &::after {
                      content: "";
                      left: -0.4em;
                      top: 13%;
                      width: 0.2em;
                      height: 74%;
                      ${{
    position: "absolute",
    borderRadius: "0.5rem",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(141 148 205 / var(--tw-bg-opacity))"
  }};
                    }
                  `], children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "0.5rem",
    padding: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }, children: [
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ p("div", { children: [
      i + 1,
      ". ",
      c.title
    ] }) }),
    /* @__PURE__ */ r(Ae, { status: c.status })
  ] }) }, c.id);
}) }) }), Be = ({
  steps: e,
  values: t,
  mutation: l,
  stateKey: s = "state"
}) => {
  const {
    isSubmitting: c,
    steps: i,
    stepFormRef: n,
    setActiveStepStatus: d,
    getNextButtonProps: g,
    getPrevButtonProps: _,
    setActiveStep: w,
    activeStepIndex: y,
    activeStep: m
  } = je({
    stepsDefinition: e,
    mutation: l,
    values: t,
    stateKey: s
  }), {
    Component: D
  } = m;
  return /* @__PURE__ */ r(Re, { value: {
    activeStep: m,
    mutation: l,
    stepFormRef: n,
    stateKey: s,
    values: t,
    setActiveStepStatus: d
  }, children: /* @__PURE__ */ r(R, { bbar: [/* @__PURE__ */ r(F, { icon: Z.faArrowLeft, ..._(), children: "Назад" }, "previous"), /* @__PURE__ */ p(F, { ...g(), variant: "contained", color: "success", children: [
    c && /* @__PURE__ */ r(x, { icon: W.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ p(_e, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ r("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ r($e, { activeItem: m, onChange: w, items: i }) }),
    /* @__PURE__ */ p("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ p("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        y + 1,
        ". ",
        m == null ? void 0 : m.title
      ] }),
      /* @__PURE__ */ r("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ r(D, {}) })
    ] })
  ] }) }) });
}, Oe = o.object({
  partner_id: o.string({
    required_error: "Выберите организацию",
    coerce: !0
  }),
  name: o.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: o.coerce.number({
    required_error: "Выберите тип программы",
    invalid_type_error: "Выберите тип программы"
  }).positive({
    message: "Выберите тип программы"
  }),
  program_level_id: o.string({
    required_error: "Выберите уровень программы",
    invalid_type_error: "Выберите уровень программы"
  }),
  section_id: o.string({
    required_error: "Выберите направленность",
    invalid_type_error: "Выберите направленность"
  }).optional(),
  year_created: o.string({
    required_error: "Выберите год создания"
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((e) => {
    const t = Number(e);
    return isNaN(t) ? !1 : t >= 1900 && t <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
  city_created: o.string({
    required_error: "Выберите город создания"
  })
}).required(), qe = () => {
  const e = b({
    schema: Oe
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(a, { control: e.control, name: "name", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "partner_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(pe, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "program_type_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(L, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (l) => l.filter(({
      id: s
    }) => s === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(he, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "program_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(L, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "year_created", render: ({
      field: t
    }) => /* @__PURE__ */ r(le, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, We = o.object({
  protocol_number: o.string().nullish(),
  protocol_date: o.string().nullish(),
  decree_number: o.string().nullish(),
  decree_date: o.string().nullish(),
  authors: o.string().nullish(),
  comment: o.string().nullish()
}), He = () => {
  const e = b({
    schema: We
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(a, { control: e.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ r(E, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ r(E, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Ye = o.object({
  min_age: o.coerce.number().optional(),
  max_age: o.coerce.number().optional(),
  competence_level_id: o.number().nullish(),
  program_volume: o.coerce.number().optional(),
  program_duration: o.coerce.number().optional(),
  edu_sessions_per_week: o.coerce.number().optional(),
  edu_sessions_per_day: o.coerce.number().optional(),
  edu_session_hour_limit: o.coerce.number().optional(),
  break_duration: o.coerce.number().optional(),
  education_form_id: o.string().nullish(),
  min_group_size: o.coerce.number().optional(),
  max_group_size: o.coerce.number().optional(),
  is_one_age_group: o.boolean().optional()
}), Ve = () => {
  const e = b({
    schema: Ye
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(ce, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ p("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ r(a, { control: e.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ r(v, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ r("div", { children: "-" }),
      /* @__PURE__ */ r(a, { control: e.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ r(v, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(L, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "edu_sessions_per_week", render: ({
      field: t
    }) => /* @__PURE__ */ r(
      v,
      {
        ...t,
        css: {
          width: "20rem",
          maxWidth: "100%"
        },
        allowFloat: !1,
        label: "Количество занятий в неделю"
      }
    ) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(L, { dictionary: "educationForm", ...t, label: "Форма обучения" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ r(Y, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, Qe = o.object({
  explanatory_note: o.string().nullish(),
  program_relevance: o.string().nullish(),
  pedagogical_expediency: o.string().nullish(),
  distinctive_features: o.string().nullish(),
  actual: o.string().nullish()
}), Ge = () => {
  const e = b({
    schema: Qe
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(a, { control: e.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(a, { control: e.control, name: "actual", render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...t }) })
  ] });
}, Je = o.object({
  program_results: o.array(o.string())
}), Ue = () => {
  const e = b({
    schema: Je
  });
  return /* @__PURE__ */ r(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ r(a, { name: "program_results", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(be, { ...t, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Xe = o.object({
  mission: o.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: o.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: o.array(o.string())
}).required({
  goal: !0
}), Ze = () => {
  const e = b({
    schema: Xe
  });
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(a, { name: "mission", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...t }) }),
    /* @__PURE__ */ r(a, { name: "goal", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(C, { label: "Цель программы", placeholder: "Введите цель программы", ...t }) }),
    /* @__PURE__ */ r(a, { name: "program_objectives", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(ve, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...t }) })
  ] }) });
}, Ke = o.object({
  theme: o.string({
    required_error: "Заполните тему"
  }).min(1, "Заполните тему"),
  theory: o.string().optional(),
  theory_volume: o.number().optional(),
  practice: o.string().optional(),
  practice_volume: o.number().optional(),
  sort_index: o.number(),
  doc_id: o.string()
}), er = ({
  doc_id: e,
  onCreate: t,
  onSubmit: l,
  onError: s
}) => {
  const c = M("/api/rest/program-doc-plans", {
    onMutate: (n) => {
      l == null || l(n);
    },
    onSuccess: ({
      data: n
    }) => {
      t == null || t(n);
    },
    onError: (n) => {
      s == null || s(n);
    }
  }), i = j({
    schema: Ke,
    mutation: c,
    defaultValues: {
      doc_id: e,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ r(R, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(Ee, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ r(a, { name: "theme", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(I, { label: "Тема", placeholder: "Введите тему", ...n }) }),
    /* @__PURE__ */ r(a, { name: "theory", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(I, { label: "Теория", placeholder: "Введите теорию", ...n }) }),
    /* @__PURE__ */ r(a, { name: "theory_volume", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...n }) }),
    /* @__PURE__ */ r(a, { name: "practice", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(I, { label: "Практика", placeholder: "Введите практику", ...n }) }),
    /* @__PURE__ */ r(a, { name: "practice_volume", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...n }) })
  ] }) });
}, P = A(), rr = () => {
  const {
    params: {
      id: e
    }
  } = $(), [t, l] = u.useState(!1), [s, c] = u.useState(!1), i = M("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      w();
    }
  }), n = [P.display("theme", "Тема"), P.display("theory", "Теория"), P.display("theory_volume", "Объём теории"), P.display("practice", "Практика"), P.display("practice_volume", "Объём практики"), P.actions([{
    key: "download",
    icon: G.faTrash,
    tooltip: "Удалить тему",
    onClick: async (y) => {
      i.mutate({
        id: y.id
      });
    }
  }])], d = V("/api/rest/program-doc-plans", n, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: i.isPending || s,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), g = u.useCallback(() => {
    w(), l(!1), c(!1);
  }, []), _ = z(), w = () => _("/api/rest/program-doc-plans");
  return /* @__PURE__ */ r("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p(F, { variant: "outlined", onClick: () => l((y) => !y), color: "success", children: [
        /* @__PURE__ */ r(x, { icon: U.faPlus }),
        "Добавить тему"
      ] }),
      /* @__PURE__ */ r(J, { title: "Новая тема", onClose: () => l(!1), open: t, children: /* @__PURE__ */ r(er, { doc_id: e, onCreate: g, onSubmit: () => c(!0), onError: () => c(!1) }) })
    ] }),
    /* @__PURE__ */ r(Q, { border: !0, table: d })
  ] }) });
}, tr = o.object({
  program_att_forms: o.array(o.string())
}), or = () => {
  const e = b({
    schema: tr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_att_forms", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(ye, { ...t, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, nr = o.object({
  program_criteria: o.array(o.string())
}), ar = () => {
  const e = b({
    schema: nr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_criteria", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(we, { ...t, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, q = A(), ir = xe(se(Ce(de, Se, {
  title: "Новый способ фиксации учебных результатов"
}), {
  url: "/api/rest/program-doc-fixations",
  displayField: "description"
}), [q.dictionary("method_id", "programDocMethodTypes", "Метод"), q.display("description", "Описание способа фиксации")]), lr = o.object({
  program_fixations: o.array(o.string())
}), cr = () => {
  const e = b({
    schema: lr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_fixations", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(ir, { ...t, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, sr = o.object({
  program_materials: o.array(o.string())
}), dr = () => {
  const e = b({
    schema: sr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_materials", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(ke, { ...t, multiple: !0, label: "Методические материалы" }) }) }) });
}, mr = o.object({
  program_managements: o.array(o.string())
}), ur = () => {
  const e = b({
    schema: mr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_managements", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(De, { ...t, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, pr = o.object({
  program_indoctrinations: o.array(o.string())
}), hr = () => {
  const e = b({
    schema: pr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_indoctrinations", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Ie, { ...t, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, fr = o.object({
  program_developments: o.array(o.string())
}), gr = () => {
  const e = b({
    schema: fr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_developments", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Pe, { ...t, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, _r = () => {
  const e = b({
    schema: o.object({
      staff_description: o.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ r(f, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ r(a, { control: e.control, name: "staff_description", render: ({
    field: t
  }) => /* @__PURE__ */ r(C, { tw: "w-full", ...t, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, br = o.object({
  program_inventories: o.array(o.string())
}), vr = () => {
  const e = b({
    schema: br
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_inventories", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Te, { ...t, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, yr = o.object({
  program_information: o.array(o.string())
}), wr = () => {
  const e = b({
    schema: yr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_information", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Fe, { ...t, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, xr = o.object({
  program_books: o.array(o.string())
}), Cr = () => {
  const e = b({
    schema: xr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(a, { name: "program_books", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Me, { ...t, multiple: !0, label: "Список литературы" }) }) }) });
}, Sr = o.object({
  number_year: o.coerce.number({
    required_error: "Заполните год"
  }),
  date_start: o.string({
    required_error: "Заполните дата начала обучения"
  }),
  date_end: o.string({
    required_error: "Заполните дата окончания обучения"
  }),
  edu_week_count: o.number({
    required_error: "Заполните количество учебных недель"
  }),
  is_vacations: o.boolean({
    required_error: "Заполните поле"
  }),
  // vacation: z.array(z.string()),
  edu_sessions_per_week: o.number().optional(),
  edu_sessions_per_day: o.number().optional(),
  doc_id: o.string()
}).required({
  number_year: !0,
  date_start: !0,
  date_end: !0,
  edu_week_count: !0,
  is_vacations: !0
}), kr = ({
  doc_id: e,
  onCreate: t,
  onSubmit: l,
  onError: s
}) => {
  const c = M("/api/rest/program-doc-schedules", {
    onMutate: (n) => {
      l == null || l(n);
    },
    onSuccess: ({
      data: n
    }) => {
      t(n);
    },
    onError: (n) => {
      s == null || s(n);
    }
  }), i = j({
    schema: Sr,
    mutation: c,
    defaultValues: {
      doc_id: e
    }
  });
  return /* @__PURE__ */ r(R, { bbar: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(F, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => i.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: i, children: [
    /* @__PURE__ */ r(a, { name: "number_year", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...n }) }),
    /* @__PURE__ */ r(a, { name: "date_start", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(E, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...n }) }),
    /* @__PURE__ */ r(a, { name: "date_end", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(E, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...n }) }),
    /* @__PURE__ */ r(a, { name: "edu_week_count", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...n }) }),
    /* @__PURE__ */ r(a, { name: "is_vacations", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(Y, { label: "Есть каникулы?", ...n }) }),
    /* @__PURE__ */ r(a, { name: "edu_sessions_per_week", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...n }) }),
    /* @__PURE__ */ r(a, { name: "edu_sessions_per_day", control: i.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...n }) })
  ] }) });
}, k = A(), Dr = () => {
  const {
    params: {
      id: e
    }
  } = $(), [t, l] = u.useState(!1), [s, c] = u.useState(!1), i = M("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      w();
    }
  }), n = [
    k.display("number_year", "Год обучения (по порядку)"),
    k.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    k.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    k.display("edu_week_count", "Учебных недель"),
    k.boolean("is_vacations", "Есть каникулы"),
    k.display("edu_sessions_per_week", "Количество занятий в неделю"),
    k.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    k.actions([{
      key: "download",
      icon: G.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (y) => {
        i.mutate({
          id: y.id
        });
      }
    }])
  ], d = V("/api/rest/program-doc-schedules", n, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: i.isPending || s,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), g = u.useCallback(() => {
    w(), l(!1), c(!1);
  }, []), _ = z(), w = () => _("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ r("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p(F, { variant: "outlined", onClick: () => l((y) => !y), color: "success", children: [
        /* @__PURE__ */ r(x, { icon: U.faPlus }),
        "Добавить"
      ] }),
      /* @__PURE__ */ r(J, { title: "Новый учебный график", onClose: () => l(!1), open: t, children: /* @__PURE__ */ r(kr, { doc_id: e, onCreate: g, onSubmit: () => c(!0), onError: () => c(!1) }) })
    ] }),
    /* @__PURE__ */ r(Q, { border: !0, table: d })
  ] }) });
}, Ir = [{
  id: "general",
  title: "Основное",
  Component: qe
}, {
  id: "params",
  title: "Параметры",
  Component: Ve
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Ge
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Ue
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Ze
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: rr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: or
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: ar
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: cr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: dr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: ur
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: hr
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: gr
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: _r
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: vr
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: wr
}, {
  title: "Список литературы",
  id: "books",
  Component: Cr
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Dr
}, {
  id: "description",
  title: "Утверждение",
  Component: He
}], Pr = o.object({
  min_age: o.coerce.number().nullable(),
  max_age: o.coerce.number().nullable(),
  program_volume: o.coerce.number().nullable(),
  program_duration: o.coerce.number().nullable(),
  edu_sessions_per_week: o.coerce.number().nullable(),
  edu_sessions_per_day: o.coerce.number().nullable(),
  edu_session_hour_limit: o.coerce.number().nullable(),
  break_duration: o.coerce.number().nullable(),
  min_group_size: o.coerce.number().nullable(),
  max_group_size: o.coerce.number().nullable(),
  competence_level_id: o.coerce.number().nullable()
}).passthrough(), Tr = o.object({
  data: o.array(Pr).transform((e) => e[0])
}).transform((e) => e.data), Wr = () => {
  const {
    params: {
      id: e
    },
    setTitle: t
  } = $(), l = z(), s = ue(`/api/rest/program-docs/${e}`, {
    schema: Tr
  }), c = M("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      l("/api/rest/program-docs");
    }
  });
  return u.useEffect(() => {
    t(`Конструктор программы #${e}`);
  }, [e, t]), s.isLoading ? /* @__PURE__ */ r(ae, { spinning: !0 }) : s.isError ? /* @__PURE__ */ r(ge, { type: "error", title: s.error.message }) : /* @__PURE__ */ r(Be, { steps: Ir, stateKey: "steps_info", mutation: c, values: s.data });
};
export {
  Wr as default
};
