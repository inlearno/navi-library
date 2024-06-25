import { j as n, l as Li, N as Bi, f as gr, b as M, F as wr, S as ji } from "./library-6ace56c9.js";
import { r as C, R as yr, d as Ri } from "./react-6f5a8403.js";
import { u as Ui, f as zi, a as qi, T as te, b as f, D as he, Y as Hi, F as D, c as Oe, d as Z, N as W, L as Yi, B as _r } from "./Boolean-ccb1c8fe.js";
import { F as R } from "./icons-ad9f8a73.js";
import { B as ke, u as $e } from "./faEye-6ff4b96e.js";
import { a as Gi, b as $i } from "./DictionaryCell-9553281c.js";
import { u as Qe } from "./useResetHttpQueryCache-37fe2f8f.js";
import { f as Qi, u as Sr, T as xr, c as Er, S as Zi } from "./index-ec092327.js";
import { S as Xi, C as Tr, R as Ji, T as Ki, a as Cr, M as Pe, A as et, b as rt, F as it, c as tt, d as nt, I as at, D as ot, e as st, f as lt, B as ct } from "./BookInput-cf41366b.js";
import { a as dt, I as Ie } from "./mui-2ff488a7.js";
import { R as ut, i as mt } from "./year-c26154ea.js";
import { P as pt, R as ht } from "./RootSection-29b76913.js";
import { z as m } from "./index-d0beacff.js";
import { a as Or, f as kr, b as Pr } from "./faPenAlt-dc5d3562.js";
import { u as Ze } from "./useWindowController-b03047e5.js";
import "./table-f5369550.js";
import "./useUser-9f55d042.js";
import "./configureQueriedCombo-f86ec21d.js";
var V = /* @__PURE__ */ ((r) => (r.DONE = "done", r.ACTIVE = "active", r.WAIT = "wait", r.DISABLED = "disabled", r.LOADING = "loading", r.ERROR = "error", r.EDIT = "edit", r))(V || {});
const ft = ({
  stepsDefinition: r,
  values: e,
  stateKey: i,
  mutation: t
}) => {
  const [a, d] = C.useState(!1), [p, b] = C.useState({});
  if (r.length === 0)
    throw new Error("No steps defined");
  C.useEffect(() => {
    e && i in e && e[i] && b(e[i]);
  }, [e]);
  const E = C.useMemo(() => r.map((v) => ({
    ...v,
    status: p[v.id] ?? V.WAIT
  })), [r, p]), [I, A] = C.useState(E[0]), O = C.useRef(null), o = C.useMemo(() => E.findIndex((v) => v.id === (I == null ? void 0 : I.id)) || 0, [I]), c = C.useCallback((v) => {
    b((_) => ({
      ..._,
      [I.id]: _[I.id] === V.ERROR && v === V.EDIT ? V.ERROR : v
    }));
  }, [I, b]), s = o === E.length - 1, l = async () => {
    try {
      d(!0), c(V.LOADING), O.current ? await O.current.save() : await t.mutateAsync({
        ...e,
        [i]: {
          ...e[i],
          [I.id]: V.DONE
        }
      });
    } catch (v) {
      throw c(V.ERROR), v;
    } finally {
      d(!1);
    }
  }, u = C.useCallback(async () => {
    if (!s)
      try {
        await l(), A(E[o + 1]);
      } catch {
      }
  }, [o, s]), F = C.useCallback(() => {
    o !== 0 && A(E[o - 1]);
  }, [o]), G = C.useMemo(() => E.every((v) => v.status === V.DONE), [E]);
  return {
    steps: E,
    isDone: G,
    stepFormRef: O,
    isSubmitting: a,
    setActiveStepStatus: c,
    getNextButtonProps: () => ({
      onClick: s ? l : u,
      disabled: a
    }),
    activeStep: I,
    activeStepIndex: o,
    setActiveStep: A,
    getPrevButtonProps: () => ({
      onClick: F,
      disabled: o === 0
    })
  };
}, Ir = yr.createContext(null), bt = ({
  children: r,
  value: e
}) => {
  const [i, t] = yr.useState({}), {
    activeStep: {
      id: a
    }
  } = e, d = C.useCallback(() => i[a] || {}, [a, i]), p = C.useCallback((b) => t((E) => ({
    ...E,
    [a]: {
      ...E[a],
      ...b
    }
  })), [a, i, t]);
  return /* @__PURE__ */ n(Ir.Provider, { value: {
    ...e,
    getStepState: d,
    setStepState: p
  }, children: r });
};
function vt() {
  const r = C.useContext(Ir);
  if (!r)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return r;
}
const N = ({
  ...r
} = {}) => {
  const {
    stepFormRef: e,
    activeStep: i,
    stateKey: t,
    getStepState: a,
    setStepState: d,
    values: p,
    mutation: b,
    setActiveStepStatus: E
  } = vt(), I = a(), {
    errors: A,
    fields: O
  } = I, o = Ui({
    mutation: b,
    errors: A,
    defaultValues: O ?? p,
    transformSendData: (c) => ({
      ...c,
      [t]: {
        ...p ? p[t] : {},
        [i.id]: V.DONE
      }
    }),
    ...r
  });
  return C.useEffect(() => {
    d({
      errors: o.formState.errors
    });
  }, [o.formState.errors]), C.useEffect(() => {
    Li.isEqual(o.getValues(), p) || (E(V.EDIT), d({
      fields: o.getValues()
    }));
  }, [i, JSON.stringify(o.formState.dirtyFields)]), C.useImperativeHandle(e, () => ({
    save: async () => {
      await o.submit(), d({
        fields: void 0
      });
    }
  })), o;
};
var ze = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "arrow-left", t = 448, a = 512, d = [8592], p = "f060", b = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faArrowLeft = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(ze);
var Mr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "arrow-right", t = 448, a = 512, d = [8594], p = "f061", b = "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faArrowRight = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(Mr);
var Ar = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "pencil", t = 512, a = 512, d = [9999, 61504, "pencil-alt"], p = "f303", b = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faPencil = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(Ar);
var me = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "circle", t = 512, a = 512, d = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], p = "f111", b = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faCircle = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(me);
var Vr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "lock", t = 448, a = 512, d = [128274], p = "f023", b = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faLock = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(Vr);
var Dr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "pen", t = 512, a = 512, d = [128394], p = "f304", b = "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faPen = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(Dr);
var Nr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "far", i = "clock", t = 512, a = 512, d = [128339, "clock-four"], p = "f017", b = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      t,
      a,
      d,
      p,
      b
    ]
  }, r.faClock = r.definition, r.prefix = e, r.iconName = i, r.width = t, r.height = a, r.ligatures = d, r.unicode = p, r.svgPathData = b, r.aliases = d;
})(Nr);
const gt = ({
  status: r
}) => Bi(r).with(V.DONE, () => /* @__PURE__ */ n(R, { icon: Qi.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(V.ACTIVE, () => /* @__PURE__ */ n(R, { mask: me.faCircle, icon: Dr.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(V.WAIT, () => /* @__PURE__ */ n(R, { mask: me.faCircle, icon: Nr.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(V.LOADING, () => /* @__PURE__ */ n(R, { icon: gr.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(V.DISABLED, () => /* @__PURE__ */ n(R, { mask: me.faCircle, transform: "shrink-8", icon: Vr.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(V.ERROR, () => /* @__PURE__ */ n(R, { icon: zi.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(V.EDIT, () => /* @__PURE__ */ n(R, { mask: me.faCircle, transform: "shrink-8", icon: Ar.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), wt = ({
  items: r,
  activeItem: e,
  className: i,
  onChange: t
}) => /* @__PURE__ */ n("div", { className: i, children: /* @__PURE__ */ n("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: r.map((a, d) => {
  const p = (e == null ? void 0 : e.id) === a.id;
  return /* @__PURE__ */ n("li", { onClick: () => a.status !== V.DISABLED ? t == null ? void 0 : t(a) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, p ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : a.status === V.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, p && dt`
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
                  `], children: /* @__PURE__ */ M("div", { css: {
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
    /* @__PURE__ */ n("div", { children: /* @__PURE__ */ M("div", { children: [
      d + 1,
      ". ",
      a.title
    ] }) }),
    /* @__PURE__ */ n(gt, { status: a.status })
  ] }) }, a.id);
}) }) });
var h = {}, qe = { exports: {} };
(function(r, e) {
  (function(i, t) {
    var a = "1.0.37", d = "", p = "?", b = "function", E = "undefined", I = "object", A = "string", O = "major", o = "model", c = "name", s = "type", l = "vendor", u = "version", F = "architecture", G = "console", v = "mobile", _ = "tablet", z = "smarttv", ne = "wearable", De = "embedded", Ne = 500, ve = "Amazon", ce = "Apple", er = "ASUS", rr = "BlackBerry", ie = "Browser", ge = "Chrome", Di = "Edge", we = "Firefox", ye = "Google", ir = "Huawei", Fe = "LG", We = "Microsoft", tr = "Motorola", _e = "Opera", Se = "Samsung", nr = "Sharp", xe = "Sony", Le = "Xiaomi", Be = "Zebra", ar = "Facebook", or = "Chromium OS", sr = "Mac OS", Ni = function(S, T) {
      var y = {};
      for (var k in S)
        T[k] && T[k].length % 2 === 0 ? y[k] = T[k].concat(S[k]) : y[k] = S[k];
      return y;
    }, Ee = function(S) {
      for (var T = {}, y = 0; y < S.length; y++)
        T[S[y].toUpperCase()] = S[y];
      return T;
    }, lr = function(S, T) {
      return typeof S === A ? de(T).indexOf(de(S)) !== -1 : !1;
    }, de = function(S) {
      return S.toLowerCase();
    }, Fi = function(S) {
      return typeof S === A ? S.replace(/[^\d\.]/g, d).split(".")[0] : t;
    }, je = function(S, T) {
      if (typeof S === A)
        return S = S.replace(/^\s\s*/, d), typeof T === E ? S : S.substring(0, Ne);
    }, ue = function(S, T) {
      for (var y = 0, k, J, $, x, w, Q; y < T.length && !w; ) {
        var Ue = T[y], ur = T[y + 1];
        for (k = J = 0; k < Ue.length && !w && Ue[k]; )
          if (w = Ue[k++].exec(S), w)
            for ($ = 0; $ < ur.length; $++)
              Q = w[++J], x = ur[$], typeof x === I && x.length > 0 ? x.length === 2 ? typeof x[1] == b ? this[x[0]] = x[1].call(this, Q) : this[x[0]] = x[1] : x.length === 3 ? typeof x[1] === b && !(x[1].exec && x[1].test) ? this[x[0]] = Q ? x[1].call(this, Q, x[2]) : t : this[x[0]] = Q ? Q.replace(x[1], x[2]) : t : x.length === 4 && (this[x[0]] = Q ? x[3].call(this, Q.replace(x[1], x[2])) : t) : this[x] = Q || t;
        y += 2;
      }
    }, Re = function(S, T) {
      for (var y in T)
        if (typeof T[y] === I && T[y].length > 0) {
          for (var k = 0; k < T[y].length; k++)
            if (lr(T[y][k], S))
              return y === p ? t : y;
        } else if (lr(T[y], S))
          return y === p ? t : y;
      return S;
    }, Wi = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, cr = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, dr = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [u, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [u, [c, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [c, u], [/opios[\/ ]+([\w\.]+)/i], [u, [c, _e + " Mini"]], [/\bopr\/([\w\.]+)/i], [u, [c, _e]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [u, [c, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [c, u], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [u, [c, "UC" + ie]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [u, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [u, [c, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [u, [c, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [u, [c, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [u, [c, "Smart Lenovo " + ie]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure " + ie], u], [/\bfocus\/([\w\.]+)/i], [u, [c, we + " Focus"]], [/\bopt\/([\w\.]+)/i], [u, [c, _e + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [u, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [u, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [u, [c, _e + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [u, [c, "MIUI " + ie]], [/fxios\/([-\w\.]+)/i], [u, [c, we]], [/\bqihu|(qi?ho?o?|360)browser/i], [[c, "360 " + ie]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 " + ie], u], [/samsungbrowser\/([\w\.]+)/i], [u, [c, Se + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], u], [/metasr[\/ ]?([\d\.]+)/i], [u, [c, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[c, "Sogou Mobile"], u], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [c, u], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [c], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[c, ar], u], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [c, u], [/\bgsa\/([\w\.]+) .*safari\//i], [u, [c, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [u, [c, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [u, [c, ge + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[c, ge + " WebView"], u], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [u, [c, "Android " + ie]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [c, u], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [u, [c, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [u, c], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [c, [u, Re, Wi]], [/(webkit|khtml)\/([\w\.]+)/i], [c, u], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[c, "Netscape"], u], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [u, [c, we + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [c, u], [/(cobalt)\/([\w\.]+)/i], [c, [u, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[F, "amd64"]], [/(ia32(?=;))/i], [[F, de]], [/((?:i[346]|x)86)[;\)]/i], [[F, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[F, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[F, "armhf"]], [/windows (ce|mobile); ppc;/i], [[F, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[F, /ower/, d, de]], [/(sun4\w)[;\)]/i], [[F, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[F, de]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [o, [l, Se], [s, _]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [o, [l, Se], [s, v]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [o, [l, ce], [s, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [o, [l, ce], [s, _]], [/(macintosh);/i], [o, [l, ce]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [o, [l, nr], [s, v]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [o, [l, ir], [s, _]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [o, [l, ir], [s, v]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[o, /_/g, " "], [l, Le], [s, v]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[o, /_/g, " "], [l, Le], [s, _]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [o, [l, "OPPO"], [s, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [o, [l, "Vivo"], [s, v]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [o, [l, "Realme"], [s, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [o, [l, tr], [s, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [o, [l, tr], [s, _]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [o, [l, Fe], [s, _]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [o, [l, Fe], [s, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [o, [l, "Lenovo"], [s, _]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[o, /_/g, " "], [l, "Nokia"], [s, v]], [/(pixel c)\b/i], [o, [l, ye], [s, _]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [o, [l, ye], [s, v]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [l, xe], [s, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[o, "Xperia Tablet"], [l, xe], [s, _]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [o, [l, "OnePlus"], [s, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [o, [l, ve], [s, _]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[o, /(.+)/g, "Fire Phone $1"], [l, ve], [s, v]], [/(playbook);[-\w\),; ]+(rim)/i], [o, l, [s, _]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [o, [l, rr], [s, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [o, [l, er], [s, _]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [o, [l, er], [s, v]], [/(nexus 9)/i], [o, [l, "HTC"], [s, _]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [l, [o, /_/g, " "], [s, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [o, [l, "Acer"], [s, _]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [o, [l, "Meizu"], [s, v]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [o, [l, "Ulefone"], [s, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, o, [s, v]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [l, o, [s, _]], [/(surface duo)/i], [o, [l, We], [s, _]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [o, [l, "Fairphone"], [s, v]], [/(u304aa)/i], [o, [l, "AT&T"], [s, v]], [/\bsie-(\w*)/i], [o, [l, "Siemens"], [s, v]], [/\b(rct\w+) b/i], [o, [l, "RCA"], [s, _]], [/\b(venue[\d ]{2,7}) b/i], [o, [l, "Dell"], [s, _]], [/\b(q(?:mv|ta)\w+) b/i], [o, [l, "Verizon"], [s, _]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [o, [l, "Barnes & Noble"], [s, _]], [/\b(tm\d{3}\w+) b/i], [o, [l, "NuVision"], [s, _]], [/\b(k88) b/i], [o, [l, "ZTE"], [s, _]], [/\b(nx\d{3}j) b/i], [o, [l, "ZTE"], [s, v]], [/\b(gen\d{3}) b.+49h/i], [o, [l, "Swiss"], [s, v]], [/\b(zur\d{3}) b/i], [o, [l, "Swiss"], [s, _]], [/\b((zeki)?tb.*\b) b/i], [o, [l, "Zeki"], [s, _]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[l, "Dragon Touch"], o, [s, _]], [/\b(ns-?\w{0,9}) b/i], [o, [l, "Insignia"], [s, _]], [/\b((nxa|next)-?\w{0,9}) b/i], [o, [l, "NextBook"], [s, _]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[l, "Voice"], o, [s, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[l, "LvTel"], o, [s, v]], [/\b(ph-1) /i], [o, [l, "Essential"], [s, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [o, [l, "Envizen"], [s, _]], [/\b(trio[-\w\. ]+) b/i], [o, [l, "MachSpeed"], [s, _]], [/\btu_(1491) b/i], [o, [l, "Rotor"], [s, _]], [/(shield[\w ]+) b/i], [o, [l, "Nvidia"], [s, _]], [/(sprint) (\w+)/i], [l, o, [s, v]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [l, We], [s, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [o, [l, Be], [s, _]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [o, [l, Be], [s, v]], [/smart-tv.+(samsung)/i], [l, [s, z]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [l, Se], [s, z]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, Fe], [s, z]], [/(apple) ?tv/i], [l, [o, ce + " TV"], [s, z]], [/crkey/i], [[o, ge + "cast"], [l, ye], [s, z]], [/droid.+aft(\w+)( bui|\))/i], [o, [l, ve], [s, z]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [o, [l, nr], [s, z]], [/(bravia[\w ]+)( bui|\))/i], [o, [l, xe], [s, z]], [/(mitv-\w{5}) bui/i], [o, [l, Le], [s, z]], [/Hbbtv.*(technisat) (.*);/i], [l, o, [s, z]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[l, je], [o, je], [s, z]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[s, z]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [l, o, [s, G]], [/droid.+; (shield) bui/i], [o, [l, "Nvidia"], [s, G]], [/(playstation [345portablevi]+)/i], [o, [l, xe], [s, G]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [o, [l, We], [s, G]], [/((pebble))app/i], [l, o, [s, ne]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [o, [l, ce], [s, ne]], [/droid.+; (glass) \d/i], [o, [l, ye], [s, ne]], [/droid.+; (wt63?0{2,3})\)/i], [o, [l, Be], [s, ne]], [/(quest( 2| pro)?)/i], [o, [l, ar], [s, ne]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [s, De]], [/(aeobc)\b/i], [o, [l, ve], [s, De]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [o, [s, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [o, [s, _]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[s, _]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[s, v]], [/(android[-\w\. ]{0,9});.+buil/i], [o, [l, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [u, [c, Di + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [u, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [c, u], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [u, c]], os: [[/microsoft (windows) (vista|xp)/i], [c, u], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [c, [u, Re, cr]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, Re, cr], [c, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[u, /_/g, "."], [c, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[c, sr], [u, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [u, c], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [c, u], [/\(bb(10);/i], [u, [c, rr]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [u, [c, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [u, [c, we + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [u, [c, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [u, [c, "watchOS"]], [/crkey\/([\d\.]+)/i], [u, [c, ge + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[c, or], u], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [c, u], [/(sunos) ?([\w\.\d]*)/i], [[c, "Solaris"], u], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [c, u]] }, Y = function(S, T) {
      if (typeof S === I && (T = S, S = t), !(this instanceof Y))
        return new Y(S, T).getResult();
      var y = typeof i !== E && i.navigator ? i.navigator : t, k = S || (y && y.userAgent ? y.userAgent : d), J = y && y.userAgentData ? y.userAgentData : t, $ = T ? Ni(dr, T) : dr, x = y && y.userAgent == k;
      return this.getBrowser = function() {
        var w = {};
        return w[c] = t, w[u] = t, ue.call(w, k, $.browser), w[O] = Fi(w[u]), x && y && y.brave && typeof y.brave.isBrave == b && (w[c] = "Brave"), w;
      }, this.getCPU = function() {
        var w = {};
        return w[F] = t, ue.call(w, k, $.cpu), w;
      }, this.getDevice = function() {
        var w = {};
        return w[l] = t, w[o] = t, w[s] = t, ue.call(w, k, $.device), x && !w[s] && J && J.mobile && (w[s] = v), x && w[o] == "Macintosh" && y && typeof y.standalone !== E && y.maxTouchPoints && y.maxTouchPoints > 2 && (w[o] = "iPad", w[s] = _), w;
      }, this.getEngine = function() {
        var w = {};
        return w[c] = t, w[u] = t, ue.call(w, k, $.engine), w;
      }, this.getOS = function() {
        var w = {};
        return w[c] = t, w[u] = t, ue.call(w, k, $.os), x && !w[c] && J && J.platform != "Unknown" && (w[c] = J.platform.replace(/chrome os/i, or).replace(/macos/i, sr)), w;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return k;
      }, this.setUA = function(w) {
        return k = typeof w === A && w.length > Ne ? je(w, Ne) : w, this;
      }, this.setUA(k), this;
    };
    Y.VERSION = a, Y.BROWSER = Ee([c, u, O]), Y.CPU = Ee([F]), Y.DEVICE = Ee([o, l, s, G, v, z, _, ne, De]), Y.ENGINE = Y.OS = Ee([c, u]), r.exports && (e = r.exports = Y), e.UAParser = Y;
    var ae = typeof i !== E && (i.jQuery || i.Zepto);
    if (ae && !ae.ua) {
      var Te = new Y();
      ae.ua = Te.getResult(), ae.ua.get = function() {
        return Te.getUA();
      }, ae.ua.set = function(S) {
        Te.setUA(S);
        var T = Te.getResult();
        for (var y in T)
          ae.ua[y] = T[y];
      };
    }
  })(typeof window == "object" ? window : Ri);
})(qe, qe.exports);
var yt = qe.exports;
Object.defineProperty(h, "__esModule", { value: !0 });
function _t(r) {
  return r && typeof r == "object" && "default" in r ? r.default : r;
}
var B = C, P = _t(B), Fr = yt, ee = new Fr(), j = ee.getBrowser(), St = ee.getCPU(), q = ee.getDevice(), Xe = ee.getEngine(), re = ee.getOS(), fe = ee.getUA(), Wr = function(e) {
  return ee.setUA(e);
}, be = function(e) {
  if (!e) {
    console.error("No userAgent string was provided");
    return;
  }
  var i = new Fr(e);
  return {
    UA: i,
    browser: i.getBrowser(),
    cpu: i.getCPU(),
    device: i.getDevice(),
    engine: i.getEngine(),
    os: i.getOS(),
    ua: i.getUA(),
    setUserAgent: function(a) {
      return i.setUA(a);
    }
  };
}, Lr = /* @__PURE__ */ Object.freeze({
  ClientUAInstance: ee,
  browser: j,
  cpu: St,
  device: q,
  engine: Xe,
  os: re,
  ua: fe,
  setUa: Wr,
  parseUserAgent: be
});
function mr(r, e) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), i.push.apply(i, t);
  }
  return i;
}
function xt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mr(Object(i), !0).forEach(function(t) {
      Ct(r, t, i[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : mr(Object(i)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t));
    });
  }
  return r;
}
function pe(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(e) {
    return typeof e;
  } : pe = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pe(r);
}
function Et(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pr(r, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, t.key, t);
  }
}
function Tt(r, e, i) {
  return e && pr(r.prototype, e), i && pr(r, i), r;
}
function Ct(r, e, i) {
  return e in r ? Object.defineProperty(r, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = i, r;
}
function He() {
  return He = Object.assign || function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var t in i)
        Object.prototype.hasOwnProperty.call(i, t) && (r[t] = i[t]);
    }
    return r;
  }, He.apply(this, arguments);
}
function Ot(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), e && Ge(r, e);
}
function Ye(r) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, Ye(r);
}
function Ge(r, e) {
  return Ge = Object.setPrototypeOf || function(t, a) {
    return t.__proto__ = a, t;
  }, Ge(r, e);
}
function kt(r, e) {
  if (r == null)
    return {};
  var i = {}, t = Object.keys(r), a, d;
  for (d = 0; d < t.length; d++)
    a = t[d], !(e.indexOf(a) >= 0) && (i[a] = r[a]);
  return i;
}
function H(r, e) {
  if (r == null)
    return {};
  var i = kt(r, e), t, a;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(r);
    for (a = 0; a < d.length; a++)
      t = d[a], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
  }
  return i;
}
function Ce(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Pt(r, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ce(r);
}
function It(r, e) {
  return Mt(r) || At(r, e) || Vt(r, e) || Dt();
}
function Mt(r) {
  if (Array.isArray(r))
    return r;
}
function At(r, e) {
  var i = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (i != null) {
    var t = [], a = !0, d = !1, p, b;
    try {
      for (i = i.call(r); !(a = (p = i.next()).done) && (t.push(p.value), !(e && t.length === e)); a = !0)
        ;
    } catch (E) {
      d = !0, b = E;
    } finally {
      try {
        !a && i.return != null && i.return();
      } finally {
        if (d)
          throw b;
      }
    }
    return t;
  }
}
function Vt(r, e) {
  if (r) {
    if (typeof r == "string")
      return hr(r, e);
    var i = Object.prototype.toString.call(r).slice(8, -1);
    if (i === "Object" && r.constructor && (i = r.constructor.name), i === "Map" || i === "Set")
      return Array.from(r);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return hr(r, e);
  }
}
function hr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var i = 0, t = new Array(e); i < e; i++)
    t[i] = r[i];
  return t;
}
function Dt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var L = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
}, U = {
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
}, le = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
}, Nt = {
  isMobile: !1,
  isTablet: !1,
  isBrowser: !1,
  isSmartTV: !1,
  isConsole: !1,
  isWearable: !1
}, Ft = function(e) {
  switch (e) {
    case L.Mobile:
      return {
        isMobile: !0
      };
    case L.Tablet:
      return {
        isTablet: !0
      };
    case L.SmartTv:
      return {
        isSmartTV: !0
      };
    case L.Console:
      return {
        isConsole: !0
      };
    case L.Wearable:
      return {
        isWearable: !0
      };
    case L.Browser:
      return {
        isBrowser: !0
      };
    case L.Embedded:
      return {
        isEmbedded: !0
      };
    default:
      return Nt;
  }
}, Wt = function(e) {
  return Wr(e);
}, g = function(e) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return e || i;
}, Je = function() {
  return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
}, Ke = function(e) {
  var i = Je();
  return i && i.platform && (i.platform.indexOf(e) !== -1 || i.platform === "MacIntel" && i.maxTouchPoints > 1 && !window.MSStream);
}, Lt = function(e, i, t, a, d) {
  return {
    isBrowser: e,
    browserMajorVersion: g(i.major),
    browserFullVersion: g(i.version),
    browserName: g(i.name),
    engineName: g(t.name),
    engineVersion: g(t.version),
    osName: g(a.name),
    osVersion: g(a.version),
    userAgent: g(d)
  };
}, fr = function(e, i, t, a) {
  return xt({}, e, {
    vendor: g(i.vendor),
    model: g(i.model),
    os: g(t.name),
    osVersion: g(t.version),
    ua: g(a)
  });
}, Bt = function(e, i, t, a) {
  return {
    isSmartTV: e,
    engineName: g(i.name),
    engineVersion: g(i.version),
    osName: g(t.name),
    osVersion: g(t.version),
    userAgent: g(a)
  };
}, jt = function(e, i, t, a) {
  return {
    isConsole: e,
    engineName: g(i.name),
    engineVersion: g(i.version),
    osName: g(t.name),
    osVersion: g(t.version),
    userAgent: g(a)
  };
}, Rt = function(e, i, t, a) {
  return {
    isWearable: e,
    engineName: g(i.name),
    engineVersion: g(i.version),
    osName: g(t.name),
    osVersion: g(t.version),
    userAgent: g(a)
  };
}, Ut = function(e, i, t, a, d) {
  return {
    isEmbedded: e,
    vendor: g(i.vendor),
    model: g(i.model),
    engineName: g(t.name),
    engineVersion: g(t.version),
    osName: g(a.name),
    osVersion: g(a.version),
    userAgent: g(d)
  };
};
function zt(r) {
  var e = r ? be(r) : Lr, i = e.device, t = e.browser, a = e.engine, d = e.os, p = e.ua, b = Ft(i.type), E = b.isBrowser, I = b.isMobile, A = b.isTablet, O = b.isSmartTV, o = b.isConsole, c = b.isWearable, s = b.isEmbedded;
  if (E)
    return Lt(E, t, a, d, p);
  if (O)
    return Bt(O, a, d, p);
  if (o)
    return jt(o, a, d, p);
  if (I || A)
    return fr(b, i, d, p);
  if (c)
    return Rt(c, a, d, p);
  if (s)
    return Ut(s, i, a, d, p);
}
var Br = function(e) {
  var i = e.type;
  return i === L.Mobile;
}, jr = function(e) {
  var i = e.type;
  return i === L.Tablet;
}, Rr = function(e) {
  var i = e.type;
  return i === L.Mobile || i === L.Tablet;
}, Ur = function(e) {
  var i = e.type;
  return i === L.SmartTv;
}, Me = function(e) {
  var i = e.type;
  return i === L.Browser;
}, zr = function(e) {
  var i = e.type;
  return i === L.Wearable;
}, qr = function(e) {
  var i = e.type;
  return i === L.Console;
}, Hr = function(e) {
  var i = e.type;
  return i === L.Embedded;
}, Yr = function(e) {
  var i = e.vendor;
  return g(i);
}, Gr = function(e) {
  var i = e.model;
  return g(i);
}, $r = function(e) {
  var i = e.type;
  return g(i, "browser");
}, Qr = function(e) {
  var i = e.name;
  return i === le.Android;
}, Zr = function(e) {
  var i = e.name;
  return i === le.Windows;
}, Xr = function(e) {
  var i = e.name;
  return i === le.MAC_OS;
}, Jr = function(e) {
  var i = e.name;
  return i === le.WindowsPhone;
}, Kr = function(e) {
  var i = e.name;
  return i === le.IOS;
}, ei = function(e) {
  var i = e.version;
  return g(i);
}, ri = function(e) {
  var i = e.name;
  return g(i);
}, ii = function(e) {
  var i = e.name;
  return i === U.Chrome;
}, ti = function(e) {
  var i = e.name;
  return i === U.Firefox;
}, ni = function(e) {
  var i = e.name;
  return i === U.Chromium;
}, Ae = function(e) {
  var i = e.name;
  return i === U.Edge;
}, ai = function(e) {
  var i = e.name;
  return i === U.Yandex;
}, oi = function(e) {
  var i = e.name;
  return i === U.Safari || i === U.MobileSafari;
}, si = function(e) {
  var i = e.name;
  return i === U.MobileSafari;
}, li = function(e) {
  var i = e.name;
  return i === U.Opera;
}, ci = function(e) {
  var i = e.name;
  return i === U.InternetExplorer || i === U.Ie;
}, di = function(e) {
  var i = e.name;
  return i === U.MIUI;
}, ui = function(e) {
  var i = e.name;
  return i === U.SamsungBrowser;
}, mi = function(e) {
  var i = e.version;
  return g(i);
}, pi = function(e) {
  var i = e.major;
  return g(i);
}, hi = function(e) {
  var i = e.name;
  return g(i);
}, fi = function(e) {
  var i = e.name;
  return g(i);
}, bi = function(e) {
  var i = e.version;
  return g(i);
}, vi = function() {
  var e = Je(), i = e && e.userAgent && e.userAgent.toLowerCase();
  return typeof i == "string" ? /electron/.test(i) : !1;
}, se = function(e) {
  return typeof e == "string" && e.indexOf("Edg/") !== -1;
}, gi = function() {
  var e = Je();
  return e && (/iPad|iPhone|iPod/.test(e.platform) || e.platform === "MacIntel" && e.maxTouchPoints > 1) && !window.MSStream;
}, X = function() {
  return Ke("iPad");
}, wi = function() {
  return Ke("iPhone");
}, yi = function() {
  return Ke("iPod");
}, _i = function(e) {
  return g(e);
};
function Si(r) {
  var e = r || Lr, i = e.device, t = e.browser, a = e.os, d = e.engine, p = e.ua;
  return {
    isSmartTV: Ur(i),
    isConsole: qr(i),
    isWearable: zr(i),
    isEmbedded: Hr(i),
    isMobileSafari: si(t) || X(),
    isChromium: ni(t),
    isMobile: Rr(i) || X(),
    isMobileOnly: Br(i),
    isTablet: jr(i) || X(),
    isBrowser: Me(i),
    isDesktop: Me(i),
    isAndroid: Qr(a),
    isWinPhone: Jr(a),
    isIOS: Kr(a) || X(),
    isChrome: ii(t),
    isFirefox: ti(t),
    isSafari: oi(t),
    isOpera: li(t),
    isIE: ci(t),
    osVersion: ei(a),
    osName: ri(a),
    fullBrowserVersion: mi(t),
    browserVersion: pi(t),
    browserName: hi(t),
    mobileVendor: Yr(i),
    mobileModel: Gr(i),
    engineName: fi(d),
    engineVersion: bi(d),
    getUA: _i(p),
    isEdge: Ae(t) || se(p),
    isYandex: ai(t),
    deviceType: $r(i),
    isIOS13: gi(),
    isIPad13: X(),
    isIPhone13: wi(),
    isIPod13: yi(),
    isElectron: vi(),
    isEdgeChromium: se(p),
    isLegacyEdge: Ae(t) && !se(p),
    isWindows: Zr(a),
    isMacOs: Xr(a),
    isMIUI: di(t),
    isSamsungBrowser: ui(t)
  };
}
var xi = Ur(q), Ei = qr(q), Ti = zr(q), qt = Hr(q), Ht = si(j) || X(), Yt = ni(j), Ve = Rr(q) || X(), Ci = Br(q), Oi = jr(q) || X(), ki = Me(q), Gt = Me(q), Pi = Qr(re), Ii = Jr(re), Mi = Kr(re) || X(), $t = ii(j), Qt = ti(j), Zt = oi(j), Xt = li(j), Ai = ci(j), Jt = ei(re), Kt = ri(re), en = mi(j), rn = pi(j), tn = hi(j), nn = Yr(q), an = Gr(q), on = fi(Xe), sn = bi(Xe), ln = _i(fe), cn = Ae(j) || se(fe), dn = ai(j), un = $r(q), mn = gi(), pn = X(), hn = wi(), fn = yi(), bn = vi(), vn = se(fe), gn = Ae(j) && !se(fe), wn = Zr(re), yn = Xr(re), _n = di(j), Sn = ui(j), xn = function(e) {
  if (!e || typeof e != "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var i = be(e), t = i.device, a = i.browser, d = i.os, p = i.engine, b = i.ua;
  return Si({
    device: t,
    browser: a,
    os: d,
    engine: p,
    ua: b
  });
}, En = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Pi ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Tn = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return ki ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Cn = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ai ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, On = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Mi ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, kn = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ve ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Pn = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Oi ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, In = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ii ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Mn = function(e) {
  var i = e.renderWithFragment, t = e.children;
  e.viewClassName, e.style;
  var a = H(e, ["renderWithFragment", "children", "viewClassName", "style"]);
  return Ci ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, An = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return xi ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Vn = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ei ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Dn = function(e) {
  var i = e.renderWithFragment, t = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ti ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", a, t) : null;
}, Nn = function(e) {
  var i = e.renderWithFragment, t = e.children;
  e.viewClassName, e.style;
  var a = e.condition, d = H(e, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return a ? i ? P.createElement(B.Fragment, null, t) : P.createElement("div", d, t) : null;
};
function Fn(r) {
  return /* @__PURE__ */ function(e) {
    Ot(i, e);
    function i(t) {
      var a;
      return Et(this, i), a = Pt(this, Ye(i).call(this, t)), a.isEventListenerAdded = !1, a.handleOrientationChange = a.handleOrientationChange.bind(Ce(a)), a.onOrientationChange = a.onOrientationChange.bind(Ce(a)), a.onPageLoad = a.onPageLoad.bind(Ce(a)), a.state = {
        isLandscape: !1,
        isPortrait: !1
      }, a;
    }
    return Tt(i, [{
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
        (typeof window > "u" ? "undefined" : pe(window)) !== void 0 && Ve && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("resize", this.onOrientationChange, !1);
      }
    }, {
      key: "render",
      value: function() {
        return P.createElement(r, He({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]), i;
  }(P.Component);
}
function Wn() {
  var r = B.useState(function() {
    var d = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: d === 0,
      isLandscape: d === 90,
      orientation: d === 0 ? "portrait" : "landscape"
    };
  }), e = It(r, 2), i = e[0], t = e[1], a = B.useCallback(function() {
    var d = window.innerWidth > window.innerHeight ? 90 : 0, p = {
      isPortrait: d === 0,
      isLandscape: d === 90,
      orientation: d === 0 ? "portrait" : "landscape"
    };
    i.orientation !== p.orientation && t(p);
  }, [i.orientation]);
  return B.useEffect(function() {
    return (typeof window > "u" ? "undefined" : pe(window)) !== void 0 && Ve && (a(), window.addEventListener("load", a, !1), window.addEventListener("resize", a, !1)), function() {
      window.removeEventListener("resize", a, !1), window.removeEventListener("load", a, !1);
    };
  }, [a]), i;
}
function Vi(r) {
  var e = r || window.navigator.userAgent;
  return be(e);
}
function Ln(r) {
  var e = r || window.navigator.userAgent, i = Vi(e), t = Si(i);
  return [t, i];
}
h.AndroidView = En;
h.BrowserTypes = U;
h.BrowserView = Tn;
h.ConsoleView = Vn;
h.CustomView = Nn;
h.IEView = Cn;
h.IOSView = On;
h.MobileOnlyView = Mn;
h.MobileView = kn;
h.OsTypes = le;
h.SmartTVView = An;
h.TabletView = Pn;
h.WearableView = Dn;
h.WinPhoneView = In;
h.browserName = tn;
h.browserVersion = rn;
h.deviceDetect = zt;
h.deviceType = un;
h.engineName = on;
h.engineVersion = sn;
h.fullBrowserVersion = en;
h.getSelectorsByUserAgent = xn;
h.getUA = ln;
h.isAndroid = Pi;
h.isBrowser = ki;
h.isChrome = $t;
h.isChromium = Yt;
h.isConsole = Ei;
h.isDesktop = Gt;
h.isEdge = cn;
h.isEdgeChromium = vn;
h.isElectron = bn;
h.isEmbedded = qt;
h.isFirefox = Qt;
h.isIE = Ai;
h.isIOS = Mi;
h.isIOS13 = mn;
h.isIPad13 = pn;
h.isIPhone13 = hn;
h.isIPod13 = fn;
h.isLegacyEdge = gn;
h.isMIUI = _n;
h.isMacOs = yn;
var Bn = h.isMobile = Ve;
h.isMobileOnly = Ci;
h.isMobileSafari = Ht;
h.isOpera = Xt;
h.isSafari = Zt;
h.isSamsungBrowser = Sn;
h.isSmartTV = xi;
h.isTablet = Oi;
h.isWearable = Ti;
h.isWinPhone = Ii;
h.isWindows = wn;
h.isYandex = dn;
h.mobileModel = an;
h.mobileVendor = nn;
h.osName = Kt;
h.osVersion = Jt;
h.parseUserAgent = be;
h.setUserAgent = Wt;
h.useDeviceData = Vi;
h.useDeviceSelectors = Ln;
h.useMobileOrientation = Wn;
h.withOrientationChange = Fn;
const jn = () => qi("only screen and (max-width : 640px)") || Bn, Rn = ({
  steps: r,
  values: e,
  mutation: i,
  stateKey: t = "state",
  doneButton: a,
  updatePrivilege: d,
  leftFooterExtra: p
}) => {
  const {
    isSubmitting: b,
    isDone: E,
    steps: I,
    stepFormRef: A,
    setActiveStepStatus: O,
    getNextButtonProps: o,
    getPrevButtonProps: c,
    setActiveStep: s,
    activeStepIndex: l,
    activeStep: u
  } = ft({
    stepsDefinition: r,
    mutation: i,
    values: e,
    stateKey: t
  }), {
    Component: F
  } = u, G = jn(), v = G ? /* @__PURE__ */ M("div", { css: {
    display: "flex",
    maxHeight: "100%",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ M("div", { css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: "1px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem"
    }, children: [
      /* @__PURE__ */ n(Ie, { size: "small", ...c(), children: /* @__PURE__ */ n(R, { icon: ze.faArrowLeft }) }, "previous"),
      /* @__PURE__ */ n("div", { css: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        textAlign: "center"
      }, children: u == null ? void 0 : u.title }),
      /* @__PURE__ */ n(Ie, { size: "small", ...o(), children: /* @__PURE__ */ n(R, { icon: Mr.faArrowRight }) }, "previous")
    ] }),
    /* @__PURE__ */ n("div", { css: {
      flex: "1 1 0%",
      overflow: "auto",
      padding: "1rem"
    }, children: /* @__PURE__ */ n(F, {}) })
  ] }) : /* @__PURE__ */ M(Xi, { initialPrimarySize: "30%", minPrimarySize: "200px", children: [
    /* @__PURE__ */ n("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ n(wt, { activeItem: u, onChange: s, items: I }) }),
    /* @__PURE__ */ M("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ M("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        l + 1,
        ". ",
        u == null ? void 0 : u.title
      ] }),
      /* @__PURE__ */ n("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ n(F, {}) })
    ] })
  ] });
  return /* @__PURE__ */ n(bt, { value: {
    activeStep: u,
    mutation: i,
    stepFormRef: A,
    stateKey: t,
    values: e,
    setActiveStepStatus: O
  }, children: /* @__PURE__ */ n(Gi, { fit: !0, footer: [G ? /* @__PURE__ */ n("div", {}) : /* @__PURE__ */ n(ke, { icon: ze.faArrowLeft, ...c(), children: "Назад" }, "previous"), /* @__PURE__ */ M("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: [
    p,
    E ? a : /* @__PURE__ */ n(Tr, { to: d, children: /* @__PURE__ */ M(ke, { ...o(), variant: "contained", color: "success", children: [
      b && /* @__PURE__ */ n(R, { icon: gr.faCircleNotch, spin: !0 }),
      "Сохранить"
    ] }, "next") })
  ] }, "left")], children: v }) });
}, Un = () => {
  const r = N();
  return /* @__PURE__ */ M(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ n(f, { control: r.control, name: "name", rules: {
      required: "Введите наименование"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ n(te, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ n(ut, { is: "admin", children: /* @__PURE__ */ n(f, { control: r.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ n(pt, { ...e, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ n(he, { label: "Тип программы", ...e, dictionary: "navProgramType", filterOptions: (i) => i.filter(({
      id: t
    }) => t === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "section_id", render: ({
      field: e
    }) => /* @__PURE__ */ n(ht, { label: "Направленность", placeholder: "Выберите направленность", ...e }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ n(he, { label: "Уровень", css: {
      width: "100%"
    }, ...e, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "year_created", rules: {
      required: "Заполните год создания",
      maxLength: {
        value: 4,
        message: "Максимум 4 цифры"
      },
      minLength: {
        value: 4,
        message: "Минимум 4 цифры"
      },
      validate: mt
    }, render: ({
      field: e
    }) => /* @__PURE__ */ n(Hi, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...e }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ n(te, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...e }) })
  ] });
}, zn = m.object({
  protocol_number: m.string().nullish(),
  protocol_date: m.string().nullish(),
  decree_number: m.string().nullish(),
  decree_date: m.string().nullish(),
  authors: m.string().nullish(),
  comment: m.string().nullish()
}), qn = () => {
  const r = N({
    schema: zn
  });
  return /* @__PURE__ */ M(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ n(f, { control: r.control, name: "protocol_number", render: ({
      field: e
    }) => /* @__PURE__ */ n(te, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "protocol_date", render: ({
      field: e
    }) => /* @__PURE__ */ n(Oe, { css: {
      width: "100%"
    }, ...e, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "decree_number", render: ({
      field: e
    }) => /* @__PURE__ */ n(te, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "decree_date", render: ({
      field: e
    }) => /* @__PURE__ */ n(Oe, { css: {
      width: "100%"
    }, ...e, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "authors", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { css: {
      width: "100%"
    }, ...e, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "comment", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { css: {
      width: "100%"
    }, ...e, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Hn = m.object({
  min_age: m.coerce.number().optional(),
  max_age: m.coerce.number().optional(),
  competence_level_id: m.number().nullish(),
  program_volume: m.coerce.number().optional(),
  program_duration: m.coerce.number().optional(),
  edu_sessions_per_week: m.coerce.number().optional(),
  edu_sessions_per_day: m.coerce.number().optional(),
  edu_session_hour_limit: m.coerce.number().optional(),
  break_duration: m.coerce.number().optional(),
  education_form_id: m.string().nullish(),
  min_group_size: m.coerce.number().optional(),
  max_group_size: m.coerce.number().optional(),
  is_one_age_group: m.boolean().optional()
}), Yn = () => {
  const r = N({
    schema: Hn
  });
  return /* @__PURE__ */ M(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ n(Yi, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ M("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ n(f, { control: r.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: e
      }) => /* @__PURE__ */ n(W, { ...e, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ n("div", { children: "-" }),
      /* @__PURE__ */ n(f, { control: r.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: e
      }) => /* @__PURE__ */ n(W, { ...e, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "competence_level_id", render: ({
      field: e
    }) => /* @__PURE__ */ n(he, { dictionary: "programDocCompetences", ...e, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "program_volume", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "program_duration", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "edu_sessions_per_week", render: ({
      field: e
    }) => /* @__PURE__ */ n(
      W,
      {
        ...e,
        css: {
          width: "20rem",
          maxWidth: "100%"
        },
        allowFloat: !1,
        label: "Количество занятий в неделю"
      }
    ) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "edu_sessions_per_day", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "edu_session_hour_limit", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "break_duration", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "education_form_id", render: ({
      field: e
    }) => /* @__PURE__ */ n(he, { dictionary: "educationForm", ...e, label: "Форма обучения" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "min_group_size", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "max_group_size", render: ({
      field: e
    }) => /* @__PURE__ */ n(W, { ...e, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "is_one_age_group", render: ({
      field: e
    }) => /* @__PURE__ */ n(_r, { ...e, label: "Группа одного возраста?" }) })
  ] });
}, Gn = m.object({
  explanatory_note: m.string().nullish(),
  program_relevance: m.string().nullish(),
  pedagogical_expediency: m.string().nullish(),
  distinctive_features: m.string().nullish(),
  actual: m.string().nullish()
}), $n = () => {
  const r = N({
    schema: Gn
  });
  return /* @__PURE__ */ M(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ n(f, { control: r.control, name: "explanatory_note", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "program_relevance", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "pedagogical_expediency", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "distinctive_features", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ n(f, { control: r.control, name: "actual", render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...e }) })
  ] });
}, Qn = m.object({
  program_results: m.array(m.string())
}), Zn = () => {
  const r = N({
    schema: Qn
  });
  return /* @__PURE__ */ n(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: /* @__PURE__ */ n(f, { name: "program_results", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(Ji, { ...e, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Xn = m.object({
  mission: m.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: m.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: m.array(m.string())
}).required({
  goal: !0
}), Jn = () => {
  const r = N({
    schema: Xn
  });
  return /* @__PURE__ */ n("div", { children: /* @__PURE__ */ M(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ n(f, { name: "mission", control: r.control, render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...e }) }),
    /* @__PURE__ */ n(f, { name: "goal", control: r.control, render: ({
      field: e
    }) => /* @__PURE__ */ n(Z, { label: "Цель программы", placeholder: "Введите цель программы", ...e }) }),
    /* @__PURE__ */ n(f, { name: "program_objectives", control: r.control, render: ({
      field: e
    }) => /* @__PURE__ */ n(Ki, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...e }) })
  ] }) });
}, br = ({
  doc_id: r,
  initialValues: e,
  ...i
}) => /* @__PURE__ */ n(Cr, { url: "/api/rest/program-doc-plans", ...i, initialValues: {
  doc_id: r,
  sort_index: 0,
  ...e
}, children: (t) => [/* @__PURE__ */ n(f, { name: "theme", rules: {
  required: "Введите тему"
}, control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(te, { label: "Тема", placeholder: "Введите тему", ...a }) }, "theme"), /* @__PURE__ */ n(f, { name: "theory", control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(te, { label: "Теория", placeholder: "Введите теорию", ...a }) }, "theory"), /* @__PURE__ */ n(f, { name: "theory_volume", control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(W, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...a }) }, "theory_volume"), /* @__PURE__ */ n(f, { name: "practice", control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(te, { label: "Практика", placeholder: "Введите практику", ...a }) }, "practice"), /* @__PURE__ */ n(f, { name: "practice_volume", control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(W, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...a }) }, "practice_volume")] }), oe = Er(), Kn = () => {
  const {
    params: {
      id: r
    }
  } = Ze(), [e, i] = C.useState(!1), [t, a] = C.useState(!1), d = $e("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      A();
    }
  }), p = [oe.display("theme", "Тема"), oe.display("theory", "Теория"), oe.display("theory_volume", "Объём теории"), oe.display("practice", "Практика"), oe.display("practice_volume", "Объём практики"), oe.actions([{
    key: "edit",
    render: (O) => {
      const [o, c] = C.useState(!1);
      return /* @__PURE__ */ M(wr, { children: [
        /* @__PURE__ */ n(Ie, { css: [{
          padding: "4px",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))",
          ":hover": {
            "--tw-text-opacity": "1",
            color: "rgb(202 138 4 / var(--tw-text-opacity))"
          }
        }], onClick: () => c(!0), children: /* @__PURE__ */ n(R, { icon: Or.faPenAlt }) }),
        o && /* @__PURE__ */ n(Pe, { autoHeight: !0, title: `Тема: ${O.theme}`, onClose: () => c(!1), open: !0, children: /* @__PURE__ */ n(br, { initialValues: O, doc_id: r, onSave: () => {
          c(!1), A();
        } }) })
      ] });
    }
  }, {
    key: "delete",
    icon: kr.faTrash,
    tooltip: "Удалить тему",
    onClick: async (O) => {
      d.mutate({
        id: O.id
      });
    }
  }])], b = Sr("/api/rest/program-doc-plans", p, {
    defaultFilters: [{
      property: "doc_id",
      value: r
    }],
    isLoading: d.isPending || t,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), E = C.useCallback(() => {
    A(), i(!1), a(!1);
  }, []), I = Qe(), A = () => I("/api/rest/program-doc-plans");
  return /* @__PURE__ */ n("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ M("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ M("div", { children: [
      /* @__PURE__ */ M(ke, { variant: "outlined", onClick: () => i((O) => !O), color: "success", children: [
        /* @__PURE__ */ n(R, { icon: Pr.faPlus }),
        "Добавить тему"
      ] }),
      e && /* @__PURE__ */ n(Pe, { open: !0, title: "Новая тема", onClose: () => i(!1), autoHeight: !0, children: /* @__PURE__ */ n(br, { doc_id: r, onSave: E, onSubmit: () => a(!0), onError: () => a(!1) }) })
    ] }),
    /* @__PURE__ */ n(xr, { border: !0, table: b })
  ] }) });
}, ea = m.object({
  program_att_forms: m.array(m.string())
}), ra = () => {
  const r = N({
    schema: ea
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_att_forms", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(et, { ...e, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, ia = m.object({
  program_criteria: m.array(m.string())
}), ta = () => {
  const r = N({
    schema: ia
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_criteria", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(rt, { ...e, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, na = m.object({
  program_fixations: m.array(m.string())
}), aa = () => {
  const r = N({
    schema: na
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_fixations", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(it, { ...e, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, oa = m.object({
  program_materials: m.array(m.string())
}), sa = () => {
  const r = N({
    schema: oa
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_materials", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(tt, { ...e, multiple: !0, label: "Методические материалы" }) }) }) });
}, la = m.object({
  program_managements: m.array(m.string())
}), ca = () => {
  const r = N({
    schema: la
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_managements", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(nt, { ...e, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, da = m.object({
  program_indoctrinations: m.array(m.string())
}), ua = () => {
  const r = N({
    schema: da
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_indoctrinations", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(at, { ...e, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, ma = m.object({
  program_developments: m.array(m.string())
}), pa = () => {
  const r = N({
    schema: ma
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_developments", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(ot, { ...e, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, ha = () => {
  const r = N({
    schema: m.object({
      staff_description: m.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ n(D, { tw: "flex flex-col gap-4", form: r, children: /* @__PURE__ */ n(f, { control: r.control, name: "staff_description", render: ({
    field: e
  }) => /* @__PURE__ */ n(Z, { tw: "w-full", ...e, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, fa = m.object({
  program_inventories: m.array(m.string())
}), ba = () => {
  const r = N({
    schema: fa
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_inventories", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(st, { ...e, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, va = m.object({
  program_information: m.array(m.string())
}), ga = () => {
  const r = N({
    schema: va
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_information", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(lt, { ...e, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, wa = m.object({
  program_books: m.array(m.string())
}), ya = () => {
  const r = N({
    schema: wa
  });
  return /* @__PURE__ */ n("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ n(D, { form: r, children: /* @__PURE__ */ n(f, { name: "program_books", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ n(ct, { ...e, multiple: !0, label: "Список литературы" }) }) }) });
}, vr = ({
  doc_id: r,
  initialValues: e,
  ...i
}) => /* @__PURE__ */ n(Cr, { url: "/api/rest/program-doc-schedules", ...i, initialValues: {
  doc_id: r,
  ...e
}, children: (t) => [/* @__PURE__ */ n(f, { name: "number_year", rules: {
  required: "Введите год обучения"
}, control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(W, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...a }) }, "number_year"), /* @__PURE__ */ n(f, { name: "date_start", rules: {
  required: "Введите дата начала обучения"
}, control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(Oe, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...a }) }, "date_start"), /* @__PURE__ */ n(f, { name: "date_end", rules: {
  required: "Введите дата окончания обучения"
}, control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(Oe, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...a }) }, "date_end"), /* @__PURE__ */ n(f, { name: "edu_week_count", rules: {
  required: "Введите количество учебных недель"
}, control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(W, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...a }) }, "edu_week_count"), /* @__PURE__ */ n(f, { name: "is_vacations", rules: {
  validate: (a) => a === void 0 ? "Заполните поле" : !0
}, control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(_r, { label: "Есть каникулы?", ...a }) }, "is_vacations"), /* @__PURE__ */ n(f, { name: "edu_sessions_per_week", control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(W, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...a }) }, "edu_sessions_per_week"), /* @__PURE__ */ n(f, { name: "edu_sessions_per_day", control: t.control, render: ({
  field: a
}) => /* @__PURE__ */ n(W, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...a }) }, "edu_sessions_per_day")] }), K = Er(), _a = () => {
  const {
    params: {
      id: r
    }
  } = Ze(), [e, i] = C.useState(!1), [t, a] = C.useState(!1), d = $e("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      A();
    }
  }), p = [
    K.display("number_year", "Год обучения (по порядку)"),
    K.date("date_start", "Дата начала", {
      displayFormat: "DD.MM.YYYY"
    }),
    K.date("date_end", "Дата окончания", {
      displayFormat: "DD.MM.YYYY"
    }),
    K.display("edu_week_count", "Учебных недель"),
    K.boolean("is_vacations", "Есть каникулы"),
    K.display("edu_sessions_per_week", "Количество занятий в неделю"),
    K.display("edu_sessions_per_day", "Продолжительность занятия"),
    // columnHelper.display("practice", "Практика"),
    // columnHelper.display("practice_volume", "Объем практики"),
    // columnHelper.display("theory", "Теория"),
    // columnHelper.display("theory_volume", "Объем теории"),
    K.actions([{
      key: "edit",
      render: (O) => {
        const [o, c] = C.useState(!1);
        return /* @__PURE__ */ M(wr, { children: [
          /* @__PURE__ */ n(Ie, { css: [{
            padding: "4px",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "rgb(156 163 175 / var(--tw-text-opacity))",
            ":hover": {
              "--tw-text-opacity": "1",
              color: "rgb(202 138 4 / var(--tw-text-opacity))"
            }
          }], onClick: () => c(!0), children: /* @__PURE__ */ n(R, { icon: Or.faPenAlt }) }),
          o && /* @__PURE__ */ n(Pe, { autoHeight: !0, title: `Год обучения №${O.number_year}`, onClose: () => c(!1), open: !0, children: /* @__PURE__ */ n(vr, { initialValues: O, doc_id: r, onSave: () => {
            c(!1), A();
          } }) })
        ] });
      }
    }, {
      key: "delete",
      icon: kr.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (O) => {
        d.mutate({
          id: O.id
        });
      }
    }])
  ], b = Sr("/api/rest/program-doc-schedules", p, {
    defaultFilters: [{
      property: "doc_id",
      value: r
    }],
    isLoading: d.isPending || t,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), E = C.useCallback(() => {
    A(), i(!1), a(!1);
  }, []), I = Qe(), A = () => I("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ n("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ M("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ M("div", { children: [
      /* @__PURE__ */ M(ke, { variant: "outlined", onClick: () => i((O) => !O), color: "success", children: [
        /* @__PURE__ */ n(R, { icon: Pr.faPlus }),
        "Добавить"
      ] }),
      e && /* @__PURE__ */ n(Pe, { autoHeight: !0, title: "Новый учебный график", onClose: () => i(!1), open: !0, children: /* @__PURE__ */ n(vr, { doc_id: r, onSave: E, onSubmit: () => a(!0), onError: () => a(!1) }) })
    ] }),
    /* @__PURE__ */ n(xr, { border: !0, table: b })
  ] }) });
}, Sa = [{
  id: "general",
  title: "Основное",
  Component: Un
}, {
  id: "params",
  title: "Параметры",
  Component: Yn
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: $n
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Zn
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Jn
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: Kn
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: ra
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: ta
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: aa
}, {
  id: "materials",
  title: "Методические материалы",
  Component: sa
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: ca
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: ua
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: pa
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: ha
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: ba
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: ga
}, {
  title: "Список литературы",
  id: "books",
  Component: ya
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: _a
}, {
  id: "description",
  title: "Утверждение",
  Component: qn
}], xa = m.object({
  min_age: m.coerce.number().nullable(),
  max_age: m.coerce.number().nullable(),
  program_volume: m.coerce.number().nullable(),
  program_duration: m.coerce.number().nullable(),
  edu_sessions_per_week: m.coerce.number().nullable(),
  edu_sessions_per_day: m.coerce.number().nullable(),
  edu_session_hour_limit: m.coerce.number().nullable(),
  break_duration: m.coerce.number().nullable(),
  min_group_size: m.coerce.number().nullable(),
  max_group_size: m.coerce.number().nullable(),
  competence_level_id: m.coerce.number().nullable(),
  state_id: m.coerce.number()
}).passthrough(), Ea = m.object({
  data: m.array(xa).transform((r) => r[0])
}).transform((r) => r.data), za = () => {
  const {
    params: {
      id: r
    },
    setTitle: e
  } = Ze(), i = Qe(), t = $i(`/api/rest/program-docs/${r}`, {
    schema: Ea
  });
  C.useEffect(() => {
    e(`Конструктор программы #${r}`);
  }, [r, e]);
  const a = $e("PUT", `/api/rest/program-docs/${r}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      i("/api/rest/program-docs");
    }
  }), d = C.useCallback((b) => {
    a.mutate({
      state_id: b
    });
  }, [r]), p = t.data;
  return t.isLoading ? /* @__PURE__ */ n(ji, { spinning: !0 }) : t.isError ? /* @__PURE__ */ n(Zi, { type: "error", title: t.error.message }) : /* @__PURE__ */ n(
    Rn,
    {
      steps: Sa,
      stateKey: "steps_info",
      mutation: a,
      updatePrivilege: "ProgramDocsEdit",
      leftFooterExtra: /* @__PURE__ */ n(Tr, { to: "ProgramDocsEdit", children: /* @__PURE__ */ n(he, { dictionary: "programDocStates", value: a.isPending && a.variables.state_id || p.state_id, allowClear: !1, onChange: (b) => d(b) }) }),
      values: p
    }
  );
};
export {
  za as default
};
