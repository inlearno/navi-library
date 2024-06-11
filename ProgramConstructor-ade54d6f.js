import { j as t, l as ue, N as me, f as W, b as f, F as q, S as pe } from "./library-0c8fbdb5.js";
import { r as u, R as V } from "./react-6f5a8403.js";
import { u as he, f as fe, T as I, a as i, D as N, Y as ge, F as v, b as z, c as k, N as y, L as be, B as Y } from "./Phone-413d88a1.js";
import { F as S } from "./icons-ad9f8a73.js";
import { B as T, u as R } from "./faEye-7bea50c5.js";
import { a as ve, b as _e } from "./DictionaryCell-a901e8dd.js";
import { u as j } from "./useResetHttpQueryCache-28bad901.js";
import { f as ye, u as G, T as Q, c as J, S as we } from "./index-63096903.js";
import { C as U, S as Ce, R as xe, T as Se, a as X, A as ke, b as De, F as Pe, M as Ie, c as Le, I as Me, D as Ee, d as Te, e as Ne, B as ze } from "./BookInput-3e6fe9dc.js";
import { a as Fe, I as Z } from "./mui-0a491bf1.js";
import { R as Ae, i as Re } from "./year-58445167.js";
import { P as je, R as Oe } from "./RootSection-ba519536.js";
import { z as o } from "./index-d0beacff.js";
import { a as K, f as ee, b as te } from "./faPenAlt-dc5d3562.js";
import { u as O } from "./useWindowController-01d4544b.js";
import { M as F } from "./ModalWindow-372d4cc0.js";
import "./table-f5369550.js";
import "./useUser-bd6c9512.js";
import "./configureQueriedCombo-20ec0b6b.js";
var re = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "check", n = 448, a = 512, c = [10003, 10004], s = "f00c", d = "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faCheck = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(re);
var h = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(h || {});
const $e = ({
  stepsDefinition: e,
  values: r,
  stateKey: l,
  mutation: n
}) => {
  const [a, c] = u.useState(!1), [s, d] = u.useState({});
  if (e.length === 0)
    throw new Error("No steps defined");
  u.useEffect(() => {
    r && l in r && r[l] && d(r[l]);
  }, [r]);
  const g = u.useMemo(() => e.map((x) => ({
    ...x,
    status: s[x.id] ?? h.WAIT
  })), [e, s]), [b, w] = u.useState(g[0]), p = u.useRef(null), m = u.useMemo(() => g.findIndex((x) => x.id === (b == null ? void 0 : b.id)) || 0, [b]), C = u.useCallback((x) => {
    d(($) => ({
      ...$,
      [b.id]: $[b.id] === h.ERROR && x === h.EDIT ? h.ERROR : x
    }));
  }, [b, d]), M = m === g.length - 1, D = async () => {
    try {
      c(!0), C(h.LOADING), p.current ? await p.current.save() : await n.mutateAsync({
        ...r,
        [l]: {
          ...r[l],
          [b.id]: h.DONE
        }
      });
    } catch (x) {
      throw C(h.ERROR), x;
    } finally {
      c(!1);
    }
  }, A = u.useCallback(async () => {
    if (!M)
      try {
        await D(), w(g[m + 1]);
      } catch {
      }
  }, [m, M]), se = u.useCallback(() => {
    m !== 0 && w(g[m - 1]);
  }, [m]), de = u.useMemo(() => g.every((x) => x.status === h.DONE), [g]);
  return {
    steps: g,
    isDone: de,
    stepFormRef: p,
    isSubmitting: a,
    setActiveStepStatus: C,
    getNextButtonProps: () => ({
      onClick: M ? D : A,
      disabled: a
    }),
    activeStep: b,
    activeStepIndex: m,
    setActiveStep: w,
    getPrevButtonProps: () => ({
      onClick: se,
      disabled: m === 0
    })
  };
}, oe = V.createContext(null), Be = ({
  children: e,
  value: r
}) => {
  const [l, n] = V.useState({}), {
    activeStep: {
      id: a
    }
  } = r, c = u.useCallback(() => l[a] || {}, [a, l]), s = u.useCallback((d) => n((g) => ({
    ...g,
    [a]: {
      ...g[a],
      ...d
    }
  })), [a, l, n]);
  return /* @__PURE__ */ t(oe.Provider, { value: {
    ...r,
    getStepState: c,
    setStepState: s
  }, children: e });
};
function He() {
  const e = u.useContext(oe);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const _ = ({
  ...e
} = {}) => {
  const {
    stepFormRef: r,
    activeStep: l,
    stateKey: n,
    getStepState: a,
    setStepState: c,
    values: s,
    mutation: d,
    setActiveStepStatus: g
  } = He(), b = a(), {
    errors: w,
    fields: p
  } = b, m = he({
    mutation: d,
    errors: w,
    defaultValues: p ?? s,
    transformSendData: (C) => ({
      ...C,
      [n]: {
        ...s ? s[n] : {},
        [l.id]: h.DONE
      }
    }),
    ...e
  });
  return u.useEffect(() => {
    c({
      errors: m.formState.errors
    });
  }, [m.formState.errors]), u.useEffect(() => {
    ue.isEqual(m.getValues(), s) || (g(h.EDIT), c({
      fields: m.getValues()
    }));
  }, [l, JSON.stringify(m.formState.dirtyFields)]), u.useImperativeHandle(r, () => ({
    save: async () => {
      await m.submit(), c({
        fields: void 0
      });
    }
  })), m;
};
var ae = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "arrow-left", n = 448, a = 512, c = [8592], s = "f060", d = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faArrowLeft = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(ae);
var ne = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "pencil", n = 512, a = 512, c = [9999, 61504, "pencil-alt"], s = "f303", d = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faPencil = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(ne);
var E = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "circle", n = 512, a = 512, c = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], s = "f111", d = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faCircle = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(E);
var ie = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "lock", n = 448, a = 512, c = [128274], s = "f023", d = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faLock = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(ie);
var le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "pen", n = 512, a = 512, c = [128394], s = "f304", d = "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faPen = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(le);
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "far", l = "clock", n = 512, a = 512, c = [128339, "clock-four"], s = "f017", d = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      n,
      a,
      c,
      s,
      d
    ]
  }, e.faClock = e.definition, e.prefix = r, e.iconName = l, e.width = n, e.height = a, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(ce);
const We = ({
  status: e
}) => me(e).with(h.DONE, () => /* @__PURE__ */ t(S, { icon: ye.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(h.ACTIVE, () => /* @__PURE__ */ t(S, { mask: E.faCircle, icon: le.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(h.WAIT, () => /* @__PURE__ */ t(S, { mask: E.faCircle, icon: ce.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(h.LOADING, () => /* @__PURE__ */ t(S, { icon: W.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(h.DISABLED, () => /* @__PURE__ */ t(S, { mask: E.faCircle, transform: "shrink-8", icon: ie.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(h.ERROR, () => /* @__PURE__ */ t(S, { icon: fe.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(h.EDIT, () => /* @__PURE__ */ t(S, { mask: E.faCircle, transform: "shrink-8", icon: ne.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), qe = ({
  items: e,
  activeItem: r,
  className: l,
  onChange: n
}) => /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((a, c) => {
  const s = (r == null ? void 0 : r.id) === a.id;
  return /* @__PURE__ */ t("li", { onClick: () => a.status !== h.DISABLED ? n == null ? void 0 : n(a) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, s ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : a.status === h.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, s && Fe`
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
                  `], children: /* @__PURE__ */ f("div", { css: {
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
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ f("div", { children: [
      c + 1,
      ". ",
      a.title
    ] }) }),
    /* @__PURE__ */ t(We, { status: a.status })
  ] }) }, a.id);
}) }) }), Ve = ({
  steps: e,
  values: r,
  mutation: l,
  stateKey: n = "state",
  doneButton: a,
  updatePrivilege: c
}) => {
  const {
    isSubmitting: s,
    isDone: d,
    steps: g,
    stepFormRef: b,
    setActiveStepStatus: w,
    getNextButtonProps: p,
    getPrevButtonProps: m,
    setActiveStep: C,
    activeStepIndex: M,
    activeStep: D
  } = $e({
    stepsDefinition: e,
    mutation: l,
    values: r,
    stateKey: n
  }), {
    Component: A
  } = D;
  return /* @__PURE__ */ t(Be, { value: {
    activeStep: D,
    mutation: l,
    stepFormRef: b,
    stateKey: n,
    values: r,
    setActiveStepStatus: w
  }, children: /* @__PURE__ */ t(ve, { fit: !0, footer: [/* @__PURE__ */ t(T, { icon: ae.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ t("div", { children: d ? a : /* @__PURE__ */ t(U, { to: c, children: /* @__PURE__ */ f(T, { ...p(), variant: "contained", color: "success", children: [
    s && /* @__PURE__ */ t(S, { icon: W.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next") }) }, "left")], children: /* @__PURE__ */ f(Ce, { initialPrimarySize: "30%", minPrimarySize: "200px", children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ t(qe, { activeItem: D, onChange: C, items: g }) }),
    /* @__PURE__ */ f("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ f("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        M + 1,
        ". ",
        D == null ? void 0 : D.title
      ] }),
      /* @__PURE__ */ t("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ t(A, {}) })
    ] })
  ] }) }) });
}, Ye = () => {
  const e = _();
  return /* @__PURE__ */ f(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { control: e.control, name: "name", rules: {
      required: "Введите наименование"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ t(Ae, { is: "admin", children: /* @__PURE__ */ t(i, { control: e.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(je, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (l) => l.filter(({
      id: n
    }) => n === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(Oe, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "year_created", rules: {
      required: "Заполните год создания",
      maxLength: {
        value: 4,
        message: "Максимум 4 цифры"
      },
      minLength: {
        value: 4,
        message: "Минимум 4 цифры"
      },
      validate: Re
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(ge, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, Ge = o.object({
  protocol_number: o.string().nullish(),
  protocol_date: o.string().nullish(),
  decree_number: o.string().nullish(),
  decree_date: o.string().nullish(),
  authors: o.string().nullish(),
  comment: o.string().nullish()
}), Qe = () => {
  const e = _({
    schema: Ge
  });
  return /* @__PURE__ */ f(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { control: e.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(z, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(I, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(z, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Je = o.object({
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
}), Ue = () => {
  const e = _({
    schema: Je
  });
  return /* @__PURE__ */ f(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(be, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ f("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ t(i, { control: e.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ t(y, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ t("div", { children: "-" }),
      /* @__PURE__ */ t(i, { control: e.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: r
      }) => /* @__PURE__ */ t(y, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "competence_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_volume", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_duration", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "edu_sessions_per_week", render: ({
      field: r
    }) => /* @__PURE__ */ t(
      y,
      {
        ...r,
        css: {
          width: "20rem",
          maxWidth: "100%"
        },
        allowFloat: !1,
        label: "Количество занятий в неделю"
      }
    ) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "edu_sessions_per_day", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "edu_session_hour_limit", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "break_duration", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "education_form_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(N, { dictionary: "educationForm", ...r, label: "Форма обучения" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "min_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "max_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ t(y, { ...r, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "is_one_age_group", render: ({
      field: r
    }) => /* @__PURE__ */ t(Y, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, Xe = o.object({
  explanatory_note: o.string().nullish(),
  program_relevance: o.string().nullish(),
  pedagogical_expediency: o.string().nullish(),
  distinctive_features: o.string().nullish(),
  actual: o.string().nullish()
}), Ze = () => {
  const e = _({
    schema: Xe
  });
  return /* @__PURE__ */ f(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { control: e.control, name: "explanatory_note", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_relevance", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "pedagogical_expediency", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "distinctive_features", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "actual", render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...r }) })
  ] });
}, Ke = o.object({
  program_results: o.array(o.string())
}), et = () => {
  const e = _({
    schema: Ke
  });
  return /* @__PURE__ */ t(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ t(i, { name: "program_results", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(xe, { ...r, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, tt = o.object({
  mission: o.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: o.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: o.array(o.string())
}).required({
  goal: !0
}), rt = () => {
  const e = _({
    schema: tt
  });
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ f(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { name: "mission", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
    /* @__PURE__ */ t(i, { name: "goal", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(k, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
    /* @__PURE__ */ t(i, { name: "program_objectives", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(Se, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
  ] }) });
}, B = ({
  doc_id: e,
  initialValues: r,
  ...l
}) => /* @__PURE__ */ t(X, { url: "/api/rest/program-doc-plans", ...l, initialValues: {
  doc_id: e,
  sort_index: 0,
  ...r
}, children: (n) => [/* @__PURE__ */ t(i, { name: "theme", rules: {
  required: "Введите тему"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(I, { label: "Тема", placeholder: "Введите тему", ...a }) }, "theme"), /* @__PURE__ */ t(i, { name: "theory", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(I, { label: "Теория", placeholder: "Введите теорию", ...a }) }, "theory"), /* @__PURE__ */ t(i, { name: "theory_volume", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(y, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...a }) }, "theory_volume"), /* @__PURE__ */ t(i, { name: "practice", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(I, { label: "Практика", placeholder: "Введите практику", ...a }) }, "practice"), /* @__PURE__ */ t(i, { name: "practice_volume", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(y, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...a }) }, "practice_volume")] }), L = J(), ot = () => {
  const {
    params: {
      id: e
    }
  } = O(), [r, l] = u.useState(!1), [n, a] = u.useState(!1), c = R("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      w();
    }
  }), s = [L.display("theme", "Тема"), L.display("theory", "Теория"), L.display("theory_volume", "Объём теории"), L.display("practice", "Практика"), L.display("practice_volume", "Объём практики"), L.actions([{
    key: "edit",
    render: (p) => {
      const [m, C] = u.useState(!1);
      return /* @__PURE__ */ f(q, { children: [
        /* @__PURE__ */ t(Z, { css: [{
          padding: "4px",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))",
          ":hover": {
            "--tw-text-opacity": "1",
            color: "rgb(202 138 4 / var(--tw-text-opacity))"
          }
        }], onClick: () => C(!0), children: /* @__PURE__ */ t(S, { icon: K.faPenAlt }) }),
        m && /* @__PURE__ */ t(F, { autoHeight: !0, title: `Тема: ${p.theme}`, onClose: () => C(!1), open: !0, children: /* @__PURE__ */ t(B, { initialValues: p, doc_id: e, onSave: () => {
          C(!1), w();
        } }) })
      ] });
    }
  }, {
    key: "delete",
    icon: ee.faTrash,
    tooltip: "Удалить тему",
    onClick: async (p) => {
      c.mutate({
        id: p.id
      });
    }
  }])], d = G("/api/rest/program-doc-plans", s, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: c.isPending || n,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), g = u.useCallback(() => {
    w(), l(!1), a(!1);
  }, []), b = j(), w = () => b("/api/rest/program-doc-plans");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ f("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ f("div", { children: [
      /* @__PURE__ */ f(T, { variant: "outlined", onClick: () => l((p) => !p), color: "success", children: [
        /* @__PURE__ */ t(S, { icon: te.faPlus }),
        "Добавить тему"
      ] }),
      r && /* @__PURE__ */ t(F, { open: !0, title: "Новая тема", onClose: () => l(!1), autoHeight: !0, children: /* @__PURE__ */ t(B, { doc_id: e, onSave: g, onSubmit: () => a(!0), onError: () => a(!1) }) })
    ] }),
    /* @__PURE__ */ t(Q, { border: !0, table: d })
  ] }) });
}, at = o.object({
  program_att_forms: o.array(o.string())
}), nt = () => {
  const e = _({
    schema: at
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_att_forms", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(ke, { ...r, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, it = o.object({
  program_criteria: o.array(o.string())
}), lt = () => {
  const e = _({
    schema: it
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_criteria", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(De, { ...r, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, ct = o.object({
  program_fixations: o.array(o.string())
}), st = () => {
  const e = _({
    schema: ct
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_fixations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Pe, { ...r, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, dt = o.object({
  program_materials: o.array(o.string())
}), ut = () => {
  const e = _({
    schema: dt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_materials", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ie, { ...r, multiple: !0, label: "Методические материалы" }) }) }) });
}, mt = o.object({
  program_managements: o.array(o.string())
}), pt = () => {
  const e = _({
    schema: mt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_managements", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Le, { ...r, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, ht = o.object({
  program_indoctrinations: o.array(o.string())
}), ft = () => {
  const e = _({
    schema: ht
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_indoctrinations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Me, { ...r, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, gt = o.object({
  program_developments: o.array(o.string())
}), bt = () => {
  const e = _({
    schema: gt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_developments", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ee, { ...r, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, vt = () => {
  const e = _({
    schema: o.object({
      staff_description: o.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ t(v, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ t(i, { control: e.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ t(k, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, _t = o.object({
  program_inventories: o.array(o.string())
}), yt = () => {
  const e = _({
    schema: _t
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_inventories", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Te, { ...r, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, wt = o.object({
  program_information: o.array(o.string())
}), Ct = () => {
  const e = _({
    schema: wt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_information", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ne, { ...r, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, xt = o.object({
  program_books: o.array(o.string())
}), St = () => {
  const e = _({
    schema: xt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_books", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(ze, { ...r, multiple: !0, label: "Список литературы" }) }) }) });
}, H = ({
  doc_id: e,
  initialValues: r,
  ...l
}) => /* @__PURE__ */ t(X, { url: "/api/rest/program-doc-schedules", ...l, initialValues: {
  doc_id: e,
  ...r
}, children: (n) => [/* @__PURE__ */ t(i, { name: "number_year", rules: {
  required: "Введите год обучения"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(y, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...a }) }, "number_year"), /* @__PURE__ */ t(i, { name: "date_start", rules: {
  required: "Введите дата начала обучения"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(z, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...a }) }, "date_start"), /* @__PURE__ */ t(i, { name: "date_end", rules: {
  required: "Введите дата окончания обучения"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(z, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...a }) }, "date_end"), /* @__PURE__ */ t(i, { name: "edu_week_count", rules: {
  required: "Введите количество учебных недель"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(y, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...a }) }, "edu_week_count"), /* @__PURE__ */ t(i, { name: "is_vacations", rules: {
  validate: (a) => a === void 0 ? "Заполните поле" : !0
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(Y, { label: "Есть каникулы?", ...a }) }, "is_vacations"), /* @__PURE__ */ t(i, { name: "edu_sessions_per_week", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(y, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...a }) }, "edu_sessions_per_week"), /* @__PURE__ */ t(i, { name: "edu_sessions_per_day", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(y, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...a }) }, "edu_sessions_per_day")] }), P = J(), kt = () => {
  const {
    params: {
      id: e
    }
  } = O(), [r, l] = u.useState(!1), [n, a] = u.useState(!1), c = R("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      w();
    }
  }), s = [
    P.display("number_year", "Год обучения (по порядку)"),
    P.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    P.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    P.display("edu_week_count", "Учебных недель"),
    P.boolean("is_vacations", "Есть каникулы"),
    P.display("edu_sessions_per_week", "Количество занятий в неделю"),
    P.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    P.actions([{
      key: "edit",
      render: (p) => {
        const [m, C] = u.useState(!1);
        return /* @__PURE__ */ f(q, { children: [
          /* @__PURE__ */ t(Z, { css: [{
            padding: "4px",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "rgb(156 163 175 / var(--tw-text-opacity))",
            ":hover": {
              "--tw-text-opacity": "1",
              color: "rgb(202 138 4 / var(--tw-text-opacity))"
            }
          }], onClick: () => C(!0), children: /* @__PURE__ */ t(S, { icon: K.faPenAlt }) }),
          m && /* @__PURE__ */ t(F, { autoHeight: !0, title: `Год обучения №${p.number_year}`, onClose: () => C(!1), open: !0, children: /* @__PURE__ */ t(H, { initialValues: p, doc_id: e, onSave: () => {
            C(!1), w();
          } }) })
        ] });
      }
    }, {
      key: "delete",
      icon: ee.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (p) => {
        c.mutate({
          id: p.id
        });
      }
    }])
  ], d = G("/api/rest/program-doc-schedules", s, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }, {
      property: "is_deleted",
      value: !1,
      type: "boolean"
    }],
    isLoading: c.isPending || n,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), g = u.useCallback(() => {
    w(), l(!1), a(!1);
  }, []), b = j(), w = () => b("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ f("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ f("div", { children: [
      /* @__PURE__ */ f(T, { variant: "outlined", onClick: () => l((p) => !p), color: "success", children: [
        /* @__PURE__ */ t(S, { icon: te.faPlus }),
        "Добавить"
      ] }),
      r && /* @__PURE__ */ t(F, { autoHeight: !0, title: "Новый учебный график", onClose: () => l(!1), open: !0, children: /* @__PURE__ */ t(H, { doc_id: e, onSave: g, onSubmit: () => a(!0), onError: () => a(!1) }) })
    ] }),
    /* @__PURE__ */ t(Q, { border: !0, table: d })
  ] }) });
}, Dt = [{
  id: "general",
  title: "Основное",
  Component: Ye
}, {
  id: "params",
  title: "Параметры",
  Component: Ue
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Ze
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: et
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: rt
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: ot
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: nt
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: lt
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: st
}, {
  id: "materials",
  title: "Методические материалы",
  Component: ut
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: pt
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: ft
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: bt
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: vt
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: yt
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: Ct
}, {
  title: "Список литературы",
  id: "books",
  Component: St
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: kt
}, {
  id: "description",
  title: "Утверждение",
  Component: Qe
}], Pt = o.object({
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
}).passthrough(), It = o.object({
  data: o.array(Pt).transform((e) => e[0])
}).transform((e) => e.data), Qt = () => {
  const {
    params: {
      id: e
    },
    setTitle: r
  } = O(), l = j(), n = _e(`/api/rest/program-docs/${e}`, {
    schema: It
  }), a = R("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      l("/api/rest/program-docs");
    }
  });
  u.useEffect(() => {
    r(`Конструктор программы #${e}`);
  }, [e, r]);
  const c = u.useCallback(() => {
    a.mutate({
      state_id: 3
    });
  }, [e]);
  if (n.isLoading)
    return /* @__PURE__ */ t(pe, { spinning: !0 });
  if (n.isError)
    return /* @__PURE__ */ t(we, { type: "error", title: n.error.message });
  const s = n.data;
  return /* @__PURE__ */ t(Ve, { steps: Dt, stateKey: "steps_info", mutation: a, updatePrivilege: "ProgramDocsEdit", doneButton: (s.state_id == 1 || s.state_id == 2) && /* @__PURE__ */ t(U, { to: "ProgramDocsEdit", children: /* @__PURE__ */ t(T, { variant: "contained", icon: re.faCheck, color: "success", isLoading: a.isPending, disabled: a.isPending, onClick: c, children: "Завершить" }) }), values: s });
};
export {
  Qt as default
};
