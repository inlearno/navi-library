import { j as r, l as ae, N as ie, f as B, a as p, S as le } from "./library-731656e2.js";
import { r as m, R as W } from "./react-6f5a8403.js";
import { u as R, f as ce, B as M, T as I, F as l, D as j, Y as se, a as f, z as o, b as F, c as D, N as v, L as de, d as q, e as N } from "./Boolean-7d7b0567.js";
import { F as k } from "./icons-ad9f8a73.js";
import { a as z, b as me } from "./DictionaryCell-1acc0f0b.js";
import { P as ue, R as pe, u as A } from "./RootSection-3391867e.js";
import { f as he, u as H, T as Y, c as V, S as fe } from "./index-59e79013.js";
import { S as ge, R as be, T as _e, f as G, M as Q, A as ve, C as ye, F as we, a as xe, b as Ce, I as ke, D as De, c as Se, d as Pe, B as Ie } from "./BookInput-468f2372.js";
import { a as Le, B as Me } from "./mui-4f485058.js";
import { f as Te } from "./faPen-6d05924c.js";
import { R as Ne } from "./Role-3a8d37da.js";
import { f as J } from "./faPlus-da331287.js";
import { u as O } from "./useWindowController-dcaea5f4.js";
import "./table-f5369550.js";
var U = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", i = "check", s = 448, c = 512, a = [10003, 10004], n = "f00c", d = "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: i,
    icon: [
      s,
      c,
      a,
      n,
      d
    ]
  }, e.faCheck = e.definition, e.prefix = t, e.iconName = i, e.width = s, e.height = c, e.ligatures = a, e.unicode = n, e.svgPathData = d, e.aliases = a;
})(U);
var u = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(u || {});
const Ee = ({
  stepsDefinition: e,
  values: t,
  stateKey: i,
  mutation: s
}) => {
  const [c, a] = m.useState(!1), [n, d] = m.useState({});
  if (e.length === 0)
    throw new Error("No steps defined");
  m.useEffect(() => {
    t && i in t && t[i] && d(t[i]);
  }, [t]);
  const h = m.useMemo(() => e.map((x) => ({
    ...x,
    status: n[x.id] ?? u.WAIT
  })), [e, n]), [b, w] = m.useState(h[0]), y = m.useRef(null), g = m.useMemo(() => h.findIndex((x) => x.id === (b == null ? void 0 : b.id)) || 0, [b]), P = m.useCallback((x) => {
    d(($) => ({
      ...$,
      [b.id]: $[b.id] === u.ERROR && x === u.EDIT ? u.ERROR : x
    }));
  }, [b, d]), C = g === h.length - 1, E = async () => {
    try {
      a(!0), P(u.LOADING), y.current ? await y.current.save() : await s.mutateAsync({
        ...t,
        [i]: {
          ...t[i],
          [b.id]: u.DONE
        }
      });
    } catch (x) {
      throw P(u.ERROR), x;
    } finally {
      a(!1);
    }
  }, te = m.useCallback(async () => {
    if (!C)
      try {
        await E(), w(h[g + 1]);
      } catch {
      }
  }, [g, C]), oe = m.useCallback(() => {
    g !== 0 && w(h[g - 1]);
  }, [g]), ne = m.useMemo(() => h.every((x) => x.status === u.DONE), [h]);
  return {
    steps: h,
    isDone: ne,
    stepFormRef: y,
    isSubmitting: c,
    setActiveStepStatus: P,
    getNextButtonProps: () => ({
      onClick: C ? E : te,
      disabled: c
    }),
    activeStep: b,
    activeStepIndex: g,
    setActiveStep: w,
    getPrevButtonProps: () => ({
      onClick: oe,
      disabled: g === 0
    })
  };
}, X = W.createContext(null), je = ({
  children: e,
  value: t
}) => {
  const [i, s] = W.useState({}), {
    activeStep: {
      id: c
    }
  } = t, a = m.useCallback(() => i[c] || {}, [c, i]), n = m.useCallback((d) => s((h) => ({
    ...h,
    [c]: {
      ...h[c],
      ...d
    }
  })), [c, i, s]);
  return /* @__PURE__ */ r(X.Provider, { value: {
    ...t,
    getStepState: a,
    setStepState: n
  }, children: e });
};
function Fe() {
  const e = m.useContext(X);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const _ = ({
  ...e
} = {}) => {
  const {
    stepFormRef: t,
    activeStep: i,
    stateKey: s,
    getStepState: c,
    setStepState: a,
    values: n,
    mutation: d,
    setActiveStepStatus: h
  } = Fe(), b = c(), {
    errors: w,
    fields: y
  } = b, g = R({
    mutation: d,
    errors: w,
    defaultValues: y ?? n,
    transformSendData: (P) => ({
      ...P,
      [s]: {
        ...n ? n[s] : {},
        [i.id]: u.DONE
      }
    }),
    ...e
  });
  return m.useEffect(() => {
    a({
      errors: g.formState.errors
    });
  }, [g.formState.errors]), m.useEffect(() => {
    ae.isEqual(g.getValues(), n) || (h(u.EDIT), a({
      fields: g.getValues()
    }));
  }, [i, JSON.stringify(g.formState.dirtyFields)]), m.useImperativeHandle(t, () => ({
    save: async () => {
      await g.submit(), a({
        fields: void 0
      });
    }
  })), g;
};
var Z = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", i = "arrow-left", s = 448, c = 512, a = [8592], n = "f060", d = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: i,
    icon: [
      s,
      c,
      a,
      n,
      d
    ]
  }, e.faArrowLeft = e.definition, e.prefix = t, e.iconName = i, e.width = s, e.height = c, e.ligatures = a, e.unicode = n, e.svgPathData = d, e.aliases = a;
})(Z);
var K = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", i = "pencil", s = 512, c = 512, a = [9999, 61504, "pencil-alt"], n = "f303", d = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: t,
    iconName: i,
    icon: [
      s,
      c,
      a,
      n,
      d
    ]
  }, e.faPencil = e.definition, e.prefix = t, e.iconName = i, e.width = s, e.height = c, e.ligatures = a, e.unicode = n, e.svgPathData = d, e.aliases = a;
})(K);
var T = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", i = "circle", s = 512, c = 512, a = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], n = "f111", d = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: t,
    iconName: i,
    icon: [
      s,
      c,
      a,
      n,
      d
    ]
  }, e.faCircle = e.definition, e.prefix = t, e.iconName = i, e.width = s, e.height = c, e.ligatures = a, e.unicode = n, e.svgPathData = d, e.aliases = a;
})(T);
var ee = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", i = "lock", s = 448, c = 512, a = [128274], n = "f023", d = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: t,
    iconName: i,
    icon: [
      s,
      c,
      a,
      n,
      d
    ]
  }, e.faLock = e.definition, e.prefix = t, e.iconName = i, e.width = s, e.height = c, e.ligatures = a, e.unicode = n, e.svgPathData = d, e.aliases = a;
})(ee);
var re = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "far", i = "clock", s = 512, c = 512, a = [128339, "clock-four"], n = "f017", d = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: t,
    iconName: i,
    icon: [
      s,
      c,
      a,
      n,
      d
    ]
  }, e.faClock = e.definition, e.prefix = t, e.iconName = i, e.width = s, e.height = c, e.ligatures = a, e.unicode = n, e.svgPathData = d, e.aliases = a;
})(re);
const Re = ({
  status: e
}) => ie(e).with(u.DONE, () => /* @__PURE__ */ r(k, { icon: he.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(u.ACTIVE, () => /* @__PURE__ */ r(k, { mask: T.faCircle, icon: Te.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(u.WAIT, () => /* @__PURE__ */ r(k, { mask: T.faCircle, icon: re.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(u.LOADING, () => /* @__PURE__ */ r(k, { icon: B.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(u.DISABLED, () => /* @__PURE__ */ r(k, { mask: T.faCircle, transform: "shrink-8", icon: ee.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(u.ERROR, () => /* @__PURE__ */ r(k, { icon: ce.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(u.EDIT, () => /* @__PURE__ */ r(k, { mask: T.faCircle, transform: "shrink-8", icon: K.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), ze = ({
  items: e,
  activeItem: t,
  className: i,
  onChange: s
}) => /* @__PURE__ */ r("div", { className: i, children: /* @__PURE__ */ r("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((c, a) => {
  const n = (t == null ? void 0 : t.id) === c.id;
  return /* @__PURE__ */ r("li", { onClick: () => c.status !== u.DISABLED ? s == null ? void 0 : s(c) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, n ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : c.status === u.DISABLED ? {
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
      a + 1,
      ". ",
      c.title
    ] }) }),
    /* @__PURE__ */ r(Re, { status: c.status })
  ] }) }, c.id);
}) }) }), Ae = ({
  steps: e,
  values: t,
  mutation: i,
  stateKey: s = "state",
  doneButton: c
}) => {
  const {
    isSubmitting: a,
    isDone: n,
    steps: d,
    stepFormRef: h,
    setActiveStepStatus: b,
    getNextButtonProps: w,
    getPrevButtonProps: y,
    setActiveStep: g,
    activeStepIndex: P,
    activeStep: C
  } = Ee({
    stepsDefinition: e,
    mutation: i,
    values: t,
    stateKey: s
  }), {
    Component: E
  } = C;
  return /* @__PURE__ */ r(je, { value: {
    activeStep: C,
    mutation: i,
    stepFormRef: h,
    stateKey: s,
    values: t,
    setActiveStepStatus: b
  }, children: /* @__PURE__ */ r(z, { footer: [/* @__PURE__ */ r(M, { icon: Z.faArrowLeft, ...y(), children: "Назад" }, "previous"), /* @__PURE__ */ r("div", { children: n ? c : /* @__PURE__ */ p(M, { ...w(), variant: "contained", color: "success", children: [
    a && /* @__PURE__ */ r(k, { icon: B.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next") }, "left")], children: /* @__PURE__ */ p(ge, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ r("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ r(ze, { activeItem: C, onChange: g, items: d }) }),
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
        P + 1,
        ". ",
        C == null ? void 0 : C.title
      ] }),
      /* @__PURE__ */ r("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ r(E, {}) })
    ] })
  ] }) }) });
}, Oe = () => {
  const e = _();
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(l, { control: e.control, name: "name", rules: {
      required: !0
    }, render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ r(Ne, { is: "admin", children: /* @__PURE__ */ r(l, { control: e.control, name: "partner_id", rules: {
      required: !0
    }, render: ({
      field: t
    }) => /* @__PURE__ */ r(ue, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "program_type_id", rules: {
      required: !0
    }, render: ({
      field: t
    }) => /* @__PURE__ */ r(j, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (i) => i.filter(({
      id: s
    }) => s === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(pe, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "program_level_id", rules: {
      required: !0
    }, render: ({
      field: t
    }) => /* @__PURE__ */ r(j, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "year_created", rules: {
      required: !0,
      maxLength: 4,
      minLength: 4,
      validate: (t) => {
        const i = Number(t);
        return isNaN(i) ? !1 : i >= 1900 && i <= (/* @__PURE__ */ new Date()).getFullYear();
      }
    }, render: ({
      field: t
    }) => /* @__PURE__ */ r(se, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, $e = o.object({
  protocol_number: o.string().nullish(),
  protocol_date: o.string().nullish(),
  decree_number: o.string().nullish(),
  decree_date: o.string().nullish(),
  authors: o.string().nullish(),
  comment: o.string().nullish()
}), Be = () => {
  const e = _({
    schema: $e
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(l, { control: e.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ r(F, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ r(I, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ r(F, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, We = o.object({
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
}), qe = () => {
  const e = _({
    schema: We
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(de, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ p("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ r(l, { control: e.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ r(v, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ r("div", { children: "-" }),
      /* @__PURE__ */ r(l, { control: e.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ r(v, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(j, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "edu_sessions_per_week", render: ({
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
    /* @__PURE__ */ r(l, { control: e.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ r(j, { dictionary: "educationForm", ...t, label: "Форма обучения" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ r(v, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ r(q, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, He = o.object({
  explanatory_note: o.string().nullish(),
  program_relevance: o.string().nullish(),
  pedagogical_expediency: o.string().nullish(),
  distinctive_features: o.string().nullish(),
  actual: o.string().nullish()
}), Ye = () => {
  const e = _({
    schema: He
  });
  return /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(l, { control: e.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ r(l, { control: e.control, name: "actual", render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...t }) })
  ] });
}, Ve = o.object({
  program_results: o.array(o.string())
}), Ge = () => {
  const e = _({
    schema: Ve
  });
  return /* @__PURE__ */ r(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ r(l, { name: "program_results", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(be, { ...t, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Qe = o.object({
  mission: o.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: o.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: o.array(o.string())
}).required({
  goal: !0
}), Je = () => {
  const e = _({
    schema: Qe
  });
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ r(l, { name: "mission", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...t }) }),
    /* @__PURE__ */ r(l, { name: "goal", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(D, { label: "Цель программы", placeholder: "Введите цель программы", ...t }) }),
    /* @__PURE__ */ r(l, { name: "program_objectives", control: e.control, render: ({
      field: t
    }) => /* @__PURE__ */ r(_e, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...t }) })
  ] }) });
}, Ue = o.object({
  theme: o.string({
    required_error: "Заполните тему"
  }).min(1, "Заполните тему"),
  theory: o.string().optional(),
  theory_volume: o.number().optional(),
  practice: o.string().optional(),
  practice_volume: o.number().optional(),
  sort_index: o.number(),
  doc_id: o.string()
}), Xe = ({
  doc_id: e,
  onCreate: t,
  onSubmit: i,
  onError: s
}) => {
  const c = N("/api/rest/program-doc-plans", {
    onMutate: (n) => {
      i == null || i(n);
    },
    onSuccess: ({
      data: n
    }) => {
      t == null || t(n);
    },
    onError: (n) => {
      s == null || s(n);
    }
  }), a = R({
    schema: Ue,
    mutation: c,
    defaultValues: {
      doc_id: e,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ r(z, { footer: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(Me, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => a.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: a, children: [
    /* @__PURE__ */ r(l, { name: "theme", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(I, { label: "Тема", placeholder: "Введите тему", ...n }) }),
    /* @__PURE__ */ r(l, { name: "theory", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(I, { label: "Теория", placeholder: "Введите теорию", ...n }) }),
    /* @__PURE__ */ r(l, { name: "theory_volume", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...n }) }),
    /* @__PURE__ */ r(l, { name: "practice", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(I, { label: "Практика", placeholder: "Введите практику", ...n }) }),
    /* @__PURE__ */ r(l, { name: "practice_volume", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...n }) })
  ] }) });
}, L = V(), Ze = () => {
  const {
    params: {
      id: e
    }
  } = O(), [t, i] = m.useState(!1), [s, c] = m.useState(!1), a = N("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      w();
    }
  }), n = [L.display("theme", "Тема"), L.display("theory", "Теория"), L.display("theory_volume", "Объём теории"), L.display("practice", "Практика"), L.display("practice_volume", "Объём практики"), L.actions([{
    key: "download",
    icon: G.faTrash,
    tooltip: "Удалить тему",
    onClick: async (y) => {
      a.mutate({
        id: y.id
      });
    }
  }])], d = H("/api/rest/program-doc-plans", n, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: a.isPending || s,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), h = m.useCallback(() => {
    w(), i(!1), c(!1);
  }, []), b = A(), w = () => b("/api/rest/program-doc-plans");
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
      /* @__PURE__ */ p(M, { variant: "outlined", onClick: () => i((y) => !y), color: "success", children: [
        /* @__PURE__ */ r(k, { icon: J.faPlus }),
        "Добавить тему"
      ] }),
      /* @__PURE__ */ r(Q, { title: "Новая тема", onClose: () => i(!1), open: t, children: /* @__PURE__ */ r(Xe, { doc_id: e, onCreate: h, onSubmit: () => c(!0), onError: () => c(!1) }) })
    ] }),
    /* @__PURE__ */ r(Y, { border: !0, table: d })
  ] }) });
}, Ke = o.object({
  program_att_forms: o.array(o.string())
}), er = () => {
  const e = _({
    schema: Ke
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_att_forms", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(ve, { ...t, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, rr = o.object({
  program_criteria: o.array(o.string())
}), tr = () => {
  const e = _({
    schema: rr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_criteria", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(ye, { ...t, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, or = o.object({
  program_fixations: o.array(o.string())
}), nr = () => {
  const e = _({
    schema: or
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_fixations", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(we, { ...t, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, ar = o.object({
  program_materials: o.array(o.string())
}), ir = () => {
  const e = _({
    schema: ar
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_materials", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(xe, { ...t, multiple: !0, label: "Методические материалы" }) }) }) });
}, lr = o.object({
  program_managements: o.array(o.string())
}), cr = () => {
  const e = _({
    schema: lr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_managements", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Ce, { ...t, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, sr = o.object({
  program_indoctrinations: o.array(o.string())
}), dr = () => {
  const e = _({
    schema: sr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_indoctrinations", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(ke, { ...t, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, mr = o.object({
  program_developments: o.array(o.string())
}), ur = () => {
  const e = _({
    schema: mr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_developments", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(De, { ...t, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, pr = () => {
  const e = _({
    schema: o.object({
      staff_description: o.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ r(f, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ r(l, { control: e.control, name: "staff_description", render: ({
    field: t
  }) => /* @__PURE__ */ r(D, { tw: "w-full", ...t, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, hr = o.object({
  program_inventories: o.array(o.string())
}), fr = () => {
  const e = _({
    schema: hr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_inventories", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Se, { ...t, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, gr = o.object({
  program_information: o.array(o.string())
}), br = () => {
  const e = _({
    schema: gr
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_information", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Pe, { ...t, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, _r = o.object({
  program_books: o.array(o.string())
}), vr = () => {
  const e = _({
    schema: _r
  });
  return /* @__PURE__ */ r("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ r(f, { form: e, children: /* @__PURE__ */ r(l, { name: "program_books", control: e.control, render: ({
    field: t
  }) => /* @__PURE__ */ r(Ie, { ...t, multiple: !0, label: "Список литературы" }) }) }) });
}, yr = o.object({
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
}), wr = ({
  doc_id: e,
  onCreate: t,
  onSubmit: i,
  onError: s
}) => {
  const c = N("/api/rest/program-doc-schedules", {
    onMutate: (n) => {
      i == null || i(n);
    },
    onSuccess: ({
      data: n
    }) => {
      t(n);
    },
    onError: (n) => {
      s == null || s(n);
    }
  }), a = R({
    schema: yr,
    mutation: c,
    defaultValues: {
      doc_id: e
    }
  });
  return /* @__PURE__ */ r(z, { footer: /* @__PURE__ */ r("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ r(M, { variant: "contained", color: "success", disabled: c.isPending, onClick: () => a.submit(), children: "Создать" }) }), children: /* @__PURE__ */ p(f, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: a, children: [
    /* @__PURE__ */ r(l, { name: "number_year", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...n }) }),
    /* @__PURE__ */ r(l, { name: "date_start", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(F, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...n }) }),
    /* @__PURE__ */ r(l, { name: "date_end", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(F, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...n }) }),
    /* @__PURE__ */ r(l, { name: "edu_week_count", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...n }) }),
    /* @__PURE__ */ r(l, { name: "is_vacations", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(q, { label: "Есть каникулы?", ...n }) }),
    /* @__PURE__ */ r(l, { name: "edu_sessions_per_week", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...n }) }),
    /* @__PURE__ */ r(l, { name: "edu_sessions_per_day", control: a.control, render: ({
      field: n
    }) => /* @__PURE__ */ r(v, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...n }) })
  ] }) });
}, S = V(), xr = () => {
  const {
    params: {
      id: e
    }
  } = O(), [t, i] = m.useState(!1), [s, c] = m.useState(!1), a = N("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      w();
    }
  }), n = [
    S.display("number_year", "Год обучения (по порядку)"),
    S.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    S.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    S.display("edu_week_count", "Учебных недель"),
    S.boolean("is_vacations", "Есть каникулы"),
    S.display("edu_sessions_per_week", "Количество занятий в неделю"),
    S.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    S.actions([{
      key: "download",
      icon: G.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (y) => {
        a.mutate({
          id: y.id
        });
      }
    }])
  ], d = H("/api/rest/program-doc-schedules", n, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: a.isPending || s,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), h = m.useCallback(() => {
    w(), i(!1), c(!1);
  }, []), b = A(), w = () => b("/api/rest/program-doc-schedules");
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
      /* @__PURE__ */ p(M, { variant: "outlined", onClick: () => i((y) => !y), color: "success", children: [
        /* @__PURE__ */ r(k, { icon: J.faPlus }),
        "Добавить"
      ] }),
      /* @__PURE__ */ r(Q, { title: "Новый учебный график", onClose: () => i(!1), open: t, children: /* @__PURE__ */ r(wr, { doc_id: e, onCreate: h, onSubmit: () => c(!0), onError: () => c(!1) }) })
    ] }),
    /* @__PURE__ */ r(Y, { border: !0, table: d })
  ] }) });
}, Cr = [{
  id: "general",
  title: "Основное",
  Component: Oe
}, {
  id: "params",
  title: "Параметры",
  Component: qe
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Ye
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Ge
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Je
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: Ze
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: er
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: tr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: nr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: ir
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: cr
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: dr
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: ur
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: pr
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: fr
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: br
}, {
  title: "Список литературы",
  id: "books",
  Component: vr
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: xr
}, {
  id: "description",
  title: "Утверждение",
  Component: Be
}], kr = o.object({
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
}).passthrough(), Dr = o.object({
  data: o.array(kr).transform((e) => e[0])
}).transform((e) => e.data), $r = () => {
  const {
    params: {
      id: e
    },
    setTitle: t
  } = O(), i = A(), s = me(`/api/rest/program-docs/${e}`, {
    schema: Dr
  }), c = N("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      i("/api/rest/program-docs");
    }
  });
  m.useEffect(() => {
    t(`Конструктор программы #${e}`);
  }, [e, t]);
  const a = m.useCallback(() => {
    c.mutate({
      state_id: 3
    });
  }, [e]);
  if (s.isLoading)
    return /* @__PURE__ */ r(le, { spinning: !0 });
  if (s.isError)
    return /* @__PURE__ */ r(fe, { type: "error", title: s.error.message });
  const n = s.data;
  return /* @__PURE__ */ r(Ae, { steps: Cr, stateKey: "steps_info", mutation: c, doneButton: (n.state_id == 1 || n.state_id == 2) && /* @__PURE__ */ r(M, { variant: "contained", icon: U.faCheck, color: "success", isLoading: c.isPending, disabled: c.isPending, onClick: a, children: "Завершить" }), values: n });
};
export {
  $r as default
};
