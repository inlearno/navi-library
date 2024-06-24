import { j as t, l as fe, N as ge, f as U, b as p, F as X, S as ve } from "./library-75cbf1f9.js";
import { r as m, R as Z } from "./react-bd6781bd.js";
import { u as be, f as _e, T as L, a as i, D as j, Y as we, F as v, b as O, c as P, N as y, L as ye, B as K } from "./Phone-727e8dce.js";
import { F as C } from "./icons-56df5d3c.js";
import { a as xe, B as z, u as q } from "./faEye-a5fee5cd.js";
import { f as Ce, u as ee, T as te, c as re, S as Se } from "./index-b01425eb.js";
import { a as ke, b as De } from "./DictionaryCell-7121ea48.js";
import { u as V } from "./useResetHttpQueryCache-19a9ec55.js";
import { S as Pe, C as oe, R as Ie, T as Le, A as Me, a as Ee, F as Ne, M as Te, b as ze, I as Ae, D as Re, c as Fe, d as je, B as Oe } from "./BookInput-3b386940.js";
import { a as Be, I as B } from "./mui-51f6b52b.js";
import { A as He, m as $e, M as H } from "./ModalWindow-65156458.js";
import { R as We, i as qe } from "./year-aa5d9c95.js";
import { P as Ve, R as Ye } from "./RootSection-c54b7896.js";
import { z as n } from "./index-d0beacff.js";
import { f as ne, a as ae } from "./faTrash-33be5127.js";
import { f as ie } from "./faPenAlt-38421783.js";
import { u as Y } from "./useWindowController-e2e7f944.js";
import { C as le } from "./ConstructorForm-424a45db.js";
import "./table-bbae3ab0.js";
import "./useUser-1af39c8e.js";
import "./configureQueriedCombo-b3167de9.js";
var ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "check", a = 448, o = 512, c = [10003, 10004], s = "f00c", d = "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faCheck = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(ce);
var f = /* @__PURE__ */ ((e) => (e.DONE = "done", e.ACTIVE = "active", e.WAIT = "wait", e.DISABLED = "disabled", e.LOADING = "loading", e.ERROR = "error", e.EDIT = "edit", e))(f || {});
const Ge = ({
  stepsDefinition: e,
  values: r,
  stateKey: l,
  mutation: a
}) => {
  const [o, c] = m.useState(!1), [s, d] = m.useState("next"), [x, D] = m.useState({});
  if (e.length === 0)
    throw new Error("No steps defined");
  m.useEffect(() => {
    r && l in r && r[l] && D(r[l]);
  }, [r]);
  const h = m.useMemo(() => e.map((k) => ({
    ...k,
    status: x[k.id] ?? f.WAIT
  })), [e, x]), [u, g] = m.useState(h[0]), _ = m.useRef(null), S = m.useMemo(() => h.findIndex((k) => k.id === (u == null ? void 0 : u.id)) || 0, [u]), M = m.useCallback((k) => {
    D((G) => ({
      ...G,
      [u.id]: G[u.id] === f.ERROR && k === f.EDIT ? f.ERROR : k
    }));
  }, [u, D]), w = S === h.length - 1, A = async () => {
    try {
      c(!0), M(f.LOADING), _.current ? await _.current.save() : await a.mutateAsync({
        ...r,
        [l]: {
          ...r[l],
          [u.id]: f.DONE
        }
      });
    } catch (k) {
      throw M(f.ERROR), k;
    } finally {
      c(!1);
    }
  }, R = m.useCallback(async () => {
    if (!w)
      try {
        await A(), g(h[S + 1]);
      } catch {
      }
  }, [S, w]), F = m.useCallback(async () => {
    w || (d("next"), g(h[S + 1]));
  }, [S, w]), $ = m.useCallback(() => {
    S !== 0 && (d("prev"), g(h[S - 1]));
  }, [S]), N = m.useMemo(() => h.every((k) => k.status === f.DONE), [h]);
  return {
    steps: h,
    isDone: N,
    stepFormRef: _,
    isSubmitting: o,
    direction: s,
    setActiveStepStatus: M,
    getNextButtonProps: () => ({
      onClick: w ? A : R,
      disabled: o || w
    }),
    goNext: F,
    activeStep: u,
    activeStepIndex: S,
    setActiveStep: g,
    getPrevButtonProps: () => ({
      onClick: $,
      disabled: S === 0
    })
  };
}, se = Z.createContext(null), Qe = ({
  children: e,
  value: r
}) => {
  const [l, a] = Z.useState({}), {
    activeStep: {
      id: o
    }
  } = r, c = m.useCallback(() => l[o] || {}, [o, l]), s = m.useCallback((d) => a((x) => ({
    ...x,
    [o]: {
      ...x[o],
      ...d
    }
  })), [o, l, a]);
  return /* @__PURE__ */ t(se.Provider, { value: {
    ...r,
    getStepState: c,
    setStepState: s
  }, children: e });
};
function Je() {
  const e = m.useContext(se);
  if (!e)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return e;
}
const b = ({
  ...e
} = {}) => {
  const {
    stepFormRef: r,
    activeStep: l,
    stateKey: a,
    getStepState: o,
    setStepState: c,
    values: s,
    mutation: d,
    setActiveStepStatus: x
  } = Je(), D = o(), {
    errors: h,
    fields: u
  } = D, g = be({
    mutation: d,
    errors: h,
    defaultValues: u ?? s,
    transformSendData: (_) => ({
      ..._,
      [a]: {
        ...s ? s[a] : {},
        [l.id]: f.DONE
      }
    }),
    ...e
  });
  return m.useEffect(() => {
    c({
      errors: g.formState.errors
    });
  }, [g.formState.errors]), m.useEffect(() => {
    fe.isEqual(g.getValues(), s) || (x(f.EDIT), c({
      fields: g.getValues()
    }));
  }, [l, JSON.stringify(g.formState.dirtyFields)]), m.useImperativeHandle(r, () => ({
    save: async () => {
      await g.submit(), c({
        fields: void 0
      });
    }
  })), g;
};
var W = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "arrow-left", a = 448, o = 512, c = [8592], s = "f060", d = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faArrowLeft = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(W);
var de = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "arrow-right", a = 448, o = 512, c = [8594], s = "f061", d = "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faArrowRight = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(de);
var me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "pencil", a = 512, o = 512, c = [9999, 61504, "pencil-alt"], s = "f303", d = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faPencil = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(me);
var T = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "circle", a = 512, o = 512, c = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], s = "f111", d = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faCircle = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(T);
var ue = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "lock", a = 448, o = 512, c = [128274], s = "f023", d = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faLock = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(ue);
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", l = "pen", a = 512, o = 512, c = [128394], s = "f304", d = "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faPen = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(pe);
var he = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "far", l = "clock", a = 512, o = 512, c = [128339, "clock-four"], s = "f017", d = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  e.definition = {
    prefix: r,
    iconName: l,
    icon: [
      a,
      o,
      c,
      s,
      d
    ]
  }, e.faClock = e.definition, e.prefix = r, e.iconName = l, e.width = a, e.height = o, e.ligatures = c, e.unicode = s, e.svgPathData = d, e.aliases = c;
})(he);
const Ue = ({
  status: e
}) => ge(e).with(f.DONE, () => /* @__PURE__ */ t(C, { icon: Ce.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(f.ACTIVE, () => /* @__PURE__ */ t(C, { mask: T.faCircle, icon: pe.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(f.WAIT, () => /* @__PURE__ */ t(C, { mask: T.faCircle, icon: he.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(f.LOADING, () => /* @__PURE__ */ t(C, { icon: U.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(f.DISABLED, () => /* @__PURE__ */ t(C, { mask: T.faCircle, transform: "shrink-8", icon: ue.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(f.ERROR, () => /* @__PURE__ */ t(C, { icon: _e.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(f.EDIT, () => /* @__PURE__ */ t(C, { mask: T.faCircle, transform: "shrink-8", icon: me.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), Xe = ({
  items: e,
  activeItem: r,
  className: l,
  onChange: a
}) => /* @__PURE__ */ t("div", { className: l, children: /* @__PURE__ */ t("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: e.map((o, c) => {
  const s = (r == null ? void 0 : r.id) === o.id;
  return /* @__PURE__ */ t("li", { onClick: () => o.status !== f.DISABLED ? a == null ? void 0 : a(o) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, s ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : o.status === f.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, s && Be`
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
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ p("div", { children: [
      c + 1,
      ". ",
      o.title
    ] }) }),
    /* @__PURE__ */ t(Ue, { status: o.status })
  ] }) }, o.id);
}) }) }), Ze = ({
  steps: e,
  values: r,
  mutation: l,
  stateKey: a = "state",
  doneButton: o,
  updatePrivilege: c
}) => {
  const {
    isSubmitting: s,
    isDone: d,
    direction: x,
    steps: D,
    stepFormRef: h,
    setActiveStepStatus: u,
    getNextButtonProps: g,
    getPrevButtonProps: _,
    setActiveStep: S,
    activeStepIndex: M,
    activeStep: w,
    goNext: A
  } = Ge({
    stepsDefinition: e,
    mutation: l,
    values: r,
    stateKey: a
  }), {
    Component: R
  } = w, F = xe(), $ = F ? /* @__PURE__ */ p("div", { css: {
    display: "flex",
    maxHeight: "100%",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ p("div", { css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: "1px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem"
    }, children: [
      /* @__PURE__ */ t(B, { size: "small", ..._(), children: /* @__PURE__ */ t(C, { icon: W.faArrowLeft }) }, "previous"),
      /* @__PURE__ */ t("div", { css: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        textAlign: "center",
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, children: w == null ? void 0 : w.title }),
      /* @__PURE__ */ t(B, { size: "small", ...g(), onClick: () => A(), children: /* @__PURE__ */ t(C, { icon: de.faArrowRight }) }, "next")
    ] }),
    /* @__PURE__ */ t("div", { css: {
      flex: "1 1 0%",
      overflow: "auto",
      padding: "1rem"
    }, children: /* @__PURE__ */ t(He, { mode: "popLayout", custom: x, initial: !1, children: /* @__PURE__ */ t($e.div, { custom: x, variants: {
      enter: (N) => {
        switch (N) {
          case "next":
            return {
              opacity: 0,
              x: "100%"
            };
          case "prev":
            return {
              opacity: 0,
              x: "-100%"
            };
          default:
            return {};
        }
      },
      center: () => ({
        opacity: 1,
        x: "0%",
        y: "0%"
      }),
      exit: (N) => {
        switch (N) {
          case "next":
            return {
              opacity: 1,
              x: "-100%",
              display: "none"
            };
          case "prev":
            return {
              opacity: 1,
              x: "100%",
              display: "none"
            };
          default:
            return {};
        }
      }
    }, initial: "enter", animate: "center", exit: "exit", transition: {
      duration: 0.4
    }, css: {
      height: "100%",
      width: "100%",
      overflow: "scroll"
    }, children: /* @__PURE__ */ t(R, {}) }, M) }) })
  ] }) : /* @__PURE__ */ p(Pe, { initialPrimarySize: "30%", minPrimarySize: "200px", children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ t(Xe, { activeItem: w, onChange: S, items: D }) }),
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
        M + 1,
        ". ",
        w == null ? void 0 : w.title
      ] }),
      /* @__PURE__ */ t("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ t(R, {}) })
    ] })
  ] });
  return /* @__PURE__ */ t(Qe, { value: {
    activeStep: w,
    mutation: l,
    stepFormRef: h,
    stateKey: a,
    values: r,
    setActiveStepStatus: u
  }, children: /* @__PURE__ */ t(ke, { fit: !0, footer: [F ? /* @__PURE__ */ t("div", {}, "prev-empty") : /* @__PURE__ */ t(z, { icon: W.faArrowLeft, ..._(), children: "Назад" }, "previous"), /* @__PURE__ */ t("div", { children: d ? o : /* @__PURE__ */ t(oe, { to: c, children: /* @__PURE__ */ p(z, { ...g(), variant: "contained", color: "success", children: [
    s && /* @__PURE__ */ t(C, { icon: U.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }) }) }, "left")], children: $ }) });
}, Ke = () => {
  const e = b();
  return /* @__PURE__ */ p(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { control: e.control, name: "name", rules: {
      required: "Введите наименование"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(L, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ t(We, { is: "admin", children: /* @__PURE__ */ t(i, { control: e.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(Ve, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(j, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (l) => l.filter(({
      id: a
    }) => a === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ t(Ye, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(j, { label: "Уровень", css: {
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
      validate: qe
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(we, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ t(L, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, et = n.object({
  protocol_number: n.string().nullish(),
  protocol_date: n.string().nullish(),
  decree_number: n.string().nullish(),
  decree_date: n.string().nullish(),
  authors: n.string().nullish(),
  comment: n.string().nullish()
}), tt = () => {
  const e = b({
    schema: et
  });
  return /* @__PURE__ */ p(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { control: e.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(L, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(O, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ t(L, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ t(O, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, rt = n.object({
  min_age: n.coerce.number().optional(),
  max_age: n.coerce.number().optional(),
  competence_level_id: n.number().nullish(),
  program_volume: n.coerce.number().optional(),
  program_duration: n.coerce.number().optional(),
  edu_sessions_per_week: n.coerce.number().optional(),
  edu_sessions_per_day: n.coerce.number().optional(),
  edu_session_hour_limit: n.coerce.number().optional(),
  break_duration: n.coerce.number().optional(),
  education_form_id: n.string().nullish(),
  min_group_size: n.coerce.number().optional(),
  max_group_size: n.coerce.number().optional(),
  is_one_age_group: n.boolean().optional()
}), ot = () => {
  const e = b({
    schema: rt
  });
  return /* @__PURE__ */ p(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(ye, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ p("div", { css: {
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
    }) => /* @__PURE__ */ t(j, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки" }) }),
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
    }) => /* @__PURE__ */ t(j, { dictionary: "educationForm", ...r, label: "Форма обучения" }) }),
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
    }) => /* @__PURE__ */ t(K, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, nt = n.object({
  explanatory_note: n.string().nullish(),
  program_relevance: n.string().nullish(),
  pedagogical_expediency: n.string().nullish(),
  distinctive_features: n.string().nullish(),
  actual: n.string().nullish()
}), at = () => {
  const e = b({
    schema: nt
  });
  return /* @__PURE__ */ p(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { control: e.control, name: "explanatory_note", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "program_relevance", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "pedagogical_expediency", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "distinctive_features", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ t(i, { control: e.control, name: "actual", render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...r }) })
  ] });
}, it = n.object({
  program_results: n.array(n.string())
}), lt = () => {
  const e = b({
    schema: it
  });
  return /* @__PURE__ */ t(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: /* @__PURE__ */ t(i, { name: "program_results", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ie, { ...r, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, ct = n.object({
  mission: n.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: n.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: n.array(n.string())
}).required({
  goal: !0
}), st = () => {
  const e = b({
    schema: ct
  });
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ p(v, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: e, children: [
    /* @__PURE__ */ t(i, { name: "mission", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
    /* @__PURE__ */ t(i, { name: "goal", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(P, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
    /* @__PURE__ */ t(i, { name: "program_objectives", control: e.control, render: ({
      field: r
    }) => /* @__PURE__ */ t(Le, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
  ] }) });
}, Q = ({
  doc_id: e,
  initialValues: r,
  ...l
}) => /* @__PURE__ */ t(le, { url: "/api/rest/program-doc-plans", ...l, initialValues: {
  doc_id: e,
  sort_index: 0,
  ...r
}, children: (a) => [/* @__PURE__ */ t(i, { name: "theme", rules: {
  required: "Введите тему"
}, control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(L, { label: "Тема", placeholder: "Введите тему", ...o }) }, "theme"), /* @__PURE__ */ t(i, { name: "theory", control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(L, { label: "Теория", placeholder: "Введите теорию", ...o }) }, "theory"), /* @__PURE__ */ t(i, { name: "theory_volume", control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(y, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...o }) }, "theory_volume"), /* @__PURE__ */ t(i, { name: "practice", control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(L, { label: "Практика", placeholder: "Введите практику", ...o }) }, "practice"), /* @__PURE__ */ t(i, { name: "practice_volume", control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(y, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...o }) }, "practice_volume")] }), E = re(), dt = () => {
  const {
    params: {
      id: e
    }
  } = Y(), [r, l] = m.useState(!1), [a, o] = m.useState(!1), c = q("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      h();
    }
  }), s = [E.display("theme", "Тема"), E.display("theory", "Теория"), E.display("theory_volume", "Объём теории"), E.display("practice", "Практика"), E.display("practice_volume", "Объём практики"), E.actions([{
    key: "edit",
    render: (u) => {
      const [g, _] = m.useState(!1);
      return /* @__PURE__ */ p(X, { children: [
        /* @__PURE__ */ t(B, { css: [{
          padding: "4px",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))",
          ":hover": {
            "--tw-text-opacity": "1",
            color: "rgb(202 138 4 / var(--tw-text-opacity))"
          }
        }], onClick: () => _(!0), children: /* @__PURE__ */ t(C, { icon: ie.faPenAlt }) }),
        g && /* @__PURE__ */ t(H, { autoHeight: !0, title: `Тема: ${u.theme}`, onClose: () => _(!1), open: !0, children: /* @__PURE__ */ t(Q, { initialValues: u, doc_id: e, onSave: () => {
          _(!1), h();
        } }) })
      ] });
    }
  }, {
    key: "delete",
    icon: ne.faTrash,
    tooltip: "Удалить тему",
    onClick: async (u) => {
      c.mutate({
        id: u.id
      });
    }
  }])], d = ee("/api/rest/program-doc-plans", s, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }],
    isLoading: c.isPending || a,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), x = m.useCallback(() => {
    h(), l(!1), o(!1);
  }, []), D = V(), h = () => D("/api/rest/program-doc-plans");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p(z, { variant: "outlined", onClick: () => l((u) => !u), color: "success", children: [
        /* @__PURE__ */ t(C, { icon: ae.faPlus }),
        "Добавить тему"
      ] }),
      r && /* @__PURE__ */ t(H, { open: !0, title: "Новая тема", onClose: () => l(!1), autoHeight: !0, children: /* @__PURE__ */ t(Q, { doc_id: e, onSave: x, onSubmit: () => o(!0), onError: () => o(!1) }) })
    ] }),
    /* @__PURE__ */ t("div", { css: {
      maxWidth: "100%",
      overflow: "scroll"
    }, children: /* @__PURE__ */ t(te, { border: !0, table: d }) })
  ] }) });
}, mt = n.object({
  program_att_forms: n.array(n.string())
}), ut = () => {
  const e = b({
    schema: mt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_att_forms", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Me, { ...r, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, pt = n.object({
  program_criteria: n.array(n.string())
}), ht = () => {
  const e = b({
    schema: pt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_criteria", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ee, { ...r, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, ft = n.object({
  program_fixations: n.array(n.string())
}), gt = () => {
  const e = b({
    schema: ft
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_fixations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ne, { ...r, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, vt = n.object({
  program_materials: n.array(n.string())
}), bt = () => {
  const e = b({
    schema: vt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_materials", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Te, { ...r, multiple: !0, label: "Методические материалы" }) }) }) });
}, _t = n.object({
  program_managements: n.array(n.string())
}), wt = () => {
  const e = b({
    schema: _t
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_managements", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(ze, { ...r, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, yt = n.object({
  program_indoctrinations: n.array(n.string())
}), xt = () => {
  const e = b({
    schema: yt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_indoctrinations", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Ae, { ...r, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, Ct = n.object({
  program_developments: n.array(n.string())
}), St = () => {
  const e = b({
    schema: Ct
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_developments", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Re, { ...r, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, kt = () => {
  const e = b({
    schema: n.object({
      staff_description: n.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ t(v, { tw: "flex flex-col gap-4", form: e, children: /* @__PURE__ */ t(i, { control: e.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ t(P, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, Dt = n.object({
  program_inventories: n.array(n.string())
}), Pt = () => {
  const e = b({
    schema: Dt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_inventories", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Fe, { ...r, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, It = n.object({
  program_information: n.array(n.string())
}), Lt = () => {
  const e = b({
    schema: It
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_information", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(je, { ...r, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, Mt = n.object({
  program_books: n.array(n.string())
}), Et = () => {
  const e = b({
    schema: Mt
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(v, { form: e, children: /* @__PURE__ */ t(i, { name: "program_books", control: e.control, render: ({
    field: r
  }) => /* @__PURE__ */ t(Oe, { ...r, multiple: !0, label: "Список литературы" }) }) }) });
}, J = ({
  doc_id: e,
  initialValues: r,
  ...l
}) => /* @__PURE__ */ t(le, { url: "/api/rest/program-doc-schedules", ...l, initialValues: {
  doc_id: e,
  ...r
}, children: (a) => [/* @__PURE__ */ t(i, { name: "number_year", rules: {
  required: "Введите год обучения"
}, control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(y, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...o }) }, "number_year"), /* @__PURE__ */ t(i, { name: "date_start", rules: {
  required: "Введите дата начала обучения"
}, control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(O, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...o }) }, "date_start"), /* @__PURE__ */ t(i, { name: "date_end", rules: {
  required: "Введите дата окончания обучения"
}, control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(O, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...o }) }, "date_end"), /* @__PURE__ */ t(i, { name: "edu_week_count", rules: {
  required: "Введите количество учебных недель"
}, control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(y, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...o }) }, "edu_week_count"), /* @__PURE__ */ t(i, { name: "is_vacations", rules: {
  validate: (o) => o === void 0 ? "Заполните поле" : !0
}, control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(K, { label: "Есть каникулы?", ...o }) }, "is_vacations"), /* @__PURE__ */ t(i, { name: "edu_sessions_per_week", control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(y, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...o }) }, "edu_sessions_per_week"), /* @__PURE__ */ t(i, { name: "edu_sessions_per_day", control: a.control, render: ({
  field: o
}) => /* @__PURE__ */ t(y, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...o }) }, "edu_sessions_per_day")] }), I = re(), Nt = () => {
  const {
    params: {
      id: e
    }
  } = Y(), [r, l] = m.useState(!1), [a, o] = m.useState(!1), c = q("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      h();
    }
  }), s = [
    I.display("number_year", "Год обучения (по порядку)"),
    I.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    I.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    I.display("edu_week_count", "Учебных недель"),
    I.boolean("is_vacations", "Есть каникулы"),
    I.display("edu_sessions_per_week", "Количество занятий в неделю"),
    I.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    I.actions([{
      key: "edit",
      render: (u) => {
        const [g, _] = m.useState(!1);
        return /* @__PURE__ */ p(X, { children: [
          /* @__PURE__ */ t(B, { css: [{
            padding: "4px",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "rgb(156 163 175 / var(--tw-text-opacity))",
            ":hover": {
              "--tw-text-opacity": "1",
              color: "rgb(202 138 4 / var(--tw-text-opacity))"
            }
          }], onClick: () => _(!0), children: /* @__PURE__ */ t(C, { icon: ie.faPenAlt }) }),
          g && /* @__PURE__ */ t(H, { autoHeight: !0, title: `Год обучения №${u.number_year}`, onClose: () => _(!1), open: !0, children: /* @__PURE__ */ t(J, { initialValues: u, doc_id: e, onSave: () => {
            _(!1), h();
          } }) })
        ] });
      }
    }, {
      key: "delete",
      icon: ne.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (u) => {
        c.mutate({
          id: u.id
        });
      }
    }])
  ], d = ee("/api/rest/program-doc-schedules", s, {
    defaultFilters: [{
      property: "doc_id",
      value: e
    }],
    isLoading: c.isPending || a,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), x = m.useCallback(() => {
    h(), l(!1), o(!1);
  }, []), D = V(), h = () => D("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ p(z, { variant: "outlined", onClick: () => l((u) => !u), color: "success", children: [
        /* @__PURE__ */ t(C, { icon: ae.faPlus }),
        "Добавить"
      ] }),
      r && /* @__PURE__ */ t(H, { autoHeight: !0, title: "Новый учебный график", onClose: () => l(!1), open: !0, children: /* @__PURE__ */ t(J, { doc_id: e, onSave: x, onSubmit: () => o(!0), onError: () => o(!1) }) })
    ] }),
    /* @__PURE__ */ t(te, { border: !0, table: d })
  ] }) });
}, Tt = [{
  id: "general",
  title: "Основное",
  Component: Ke
}, {
  id: "params",
  title: "Параметры",
  Component: ot
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: at
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: lt
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: st
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: dt
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: ut
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: ht
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: gt
}, {
  id: "materials",
  title: "Методические материалы",
  Component: bt
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: wt
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: xt
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: St
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: kt
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: Pt
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: Lt
}, {
  title: "Список литературы",
  id: "books",
  Component: Et
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Nt
}, {
  id: "description",
  title: "Утверждение",
  Component: tt
}], zt = n.object({
  min_age: n.coerce.number().nullable(),
  max_age: n.coerce.number().nullable(),
  program_volume: n.coerce.number().nullable(),
  program_duration: n.coerce.number().nullable(),
  edu_sessions_per_week: n.coerce.number().nullable(),
  edu_sessions_per_day: n.coerce.number().nullable(),
  edu_session_hour_limit: n.coerce.number().nullable(),
  break_duration: n.coerce.number().nullable(),
  min_group_size: n.coerce.number().nullable(),
  max_group_size: n.coerce.number().nullable(),
  competence_level_id: n.coerce.number().nullable()
}).passthrough(), At = n.object({
  data: n.array(zt).transform((e) => e[0])
}).transform((e) => e.data), or = () => {
  const {
    params: {
      id: e
    },
    setTitle: r
  } = Y(), l = V(), a = De(`/api/rest/program-docs/${e}`, {
    schema: At
  }), o = q("PUT", `/api/rest/program-docs/${e}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      l("/api/rest/program-docs");
    }
  });
  m.useEffect(() => {
    r(`Конструктор программы #${e}`);
  }, [e, r]);
  const c = m.useCallback(() => {
    o.mutate({
      state_id: 3
    });
  }, [e]);
  if (a.isLoading)
    return /* @__PURE__ */ t(ve, { spinning: !0 });
  if (a.isError)
    return /* @__PURE__ */ t(Se, { type: "error", title: a.error.message });
  const s = a.data;
  return /* @__PURE__ */ t(Ze, { steps: Tt, stateKey: "steps_info", mutation: o, updatePrivilege: "ProgramDocsEdit", doneButton: (s.state_id == 1 || s.state_id == 2) && /* @__PURE__ */ t(oe, { to: "ProgramDocsEdit", children: /* @__PURE__ */ t(z, { variant: "contained", icon: ce.faCheck, color: "success", isLoading: o.isPending, disabled: o.isPending, onClick: c, children: "Завершить" }) }), values: s });
};
export {
  or as default
};
