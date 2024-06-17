import { j as t, l as Bi, N as ji, f as gr, b as A, F as wr, S as Ri } from "./library-fa9914d3.js";
import { r as O, R as yr, d as Ui } from "./react-6f5a8403.js";
import { u as zi, f as qi, a as Hi, T as ne, b as f, D as Oe, Y as Yi, F as D, c as ke, d as Q, N as F, L as Gi, B as _r } from "./Boolean-3c480cf9.js";
import { F as R } from "./icons-ad9f8a73.js";
import { B as he, u as $e } from "./faEye-7232269b.js";
import { a as $i, b as Qi } from "./DictionaryCell-78c8ae19.js";
import { u as Qe } from "./useResetHttpQueryCache-dc305a73.js";
import { f as Zi, u as Sr, T as xr, c as Er, S as Xi } from "./index-37323e4d.js";
import { S as Ji, C as Tr, R as Ki, T as en, a as Cr, M as Pe, A as rn, b as nn, F as tn, c as an, d as on, I as sn, D as ln, e as cn, f as dn, B as un } from "./BookInput-e61df146.js";
import { a as mn, I as Me } from "./mui-2ff488a7.js";
import { R as pn, i as hn } from "./year-00c0b8ff.js";
import { P as fn, R as bn } from "./RootSection-3866bdce.js";
import { z as u } from "./index-d0beacff.js";
import { a as Or, f as kr, b as Pr } from "./faPenAlt-dc5d3562.js";
import { u as Ze } from "./useWindowController-b2a95b0d.js";
import "./table-f5369550.js";
import "./useUser-bd306cca.js";
import "./configureQueriedCombo-19dbce20.js";
var Mr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "check", n = 448, a = 512, c = [10003, 10004], p = "f00c", b = "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faCheck = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(Mr);
var V = /* @__PURE__ */ ((r) => (r.DONE = "done", r.ACTIVE = "active", r.WAIT = "wait", r.DISABLED = "disabled", r.LOADING = "loading", r.ERROR = "error", r.EDIT = "edit", r))(V || {});
const vn = ({
  stepsDefinition: r,
  values: e,
  stateKey: i,
  mutation: n
}) => {
  const [a, c] = O.useState(!1), [p, b] = O.useState({});
  if (r.length === 0)
    throw new Error("No steps defined");
  O.useEffect(() => {
    e && i in e && e[i] && b(e[i]);
  }, [e]);
  const E = O.useMemo(() => r.map((v) => ({
    ...v,
    status: p[v.id] ?? V.WAIT
  })), [r, p]), [M, I] = O.useState(E[0]), C = O.useRef(null), o = O.useMemo(() => E.findIndex((v) => v.id === (M == null ? void 0 : M.id)) || 0, [M]), d = O.useCallback((v) => {
    b((_) => ({
      ..._,
      [M.id]: _[M.id] === V.ERROR && v === V.EDIT ? V.ERROR : v
    }));
  }, [M, b]), s = o === E.length - 1, l = async () => {
    try {
      c(!0), d(V.LOADING), C.current ? await C.current.save() : await n.mutateAsync({
        ...e,
        [i]: {
          ...e[i],
          [M.id]: V.DONE
        }
      });
    } catch (v) {
      throw d(V.ERROR), v;
    } finally {
      c(!1);
    }
  }, m = O.useCallback(async () => {
    if (!s)
      try {
        await l(), I(E[o + 1]);
      } catch {
      }
  }, [o, s]), W = O.useCallback(() => {
    o !== 0 && I(E[o - 1]);
  }, [o]), X = O.useMemo(() => E.every((v) => v.status === V.DONE), [E]);
  return {
    steps: E,
    isDone: X,
    stepFormRef: C,
    isSubmitting: a,
    setActiveStepStatus: d,
    getNextButtonProps: () => ({
      onClick: s ? l : m,
      disabled: a
    }),
    activeStep: M,
    activeStepIndex: o,
    setActiveStep: I,
    getPrevButtonProps: () => ({
      onClick: W,
      disabled: o === 0
    })
  };
}, Ir = yr.createContext(null), gn = ({
  children: r,
  value: e
}) => {
  const [i, n] = yr.useState({}), {
    activeStep: {
      id: a
    }
  } = e, c = O.useCallback(() => i[a] || {}, [a, i]), p = O.useCallback((b) => n((E) => ({
    ...E,
    [a]: {
      ...E[a],
      ...b
    }
  })), [a, i, n]);
  return /* @__PURE__ */ t(Ir.Provider, { value: {
    ...e,
    getStepState: c,
    setStepState: p
  }, children: r });
};
function wn() {
  const r = O.useContext(Ir);
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
    stateKey: n,
    getStepState: a,
    setStepState: c,
    values: p,
    mutation: b,
    setActiveStepStatus: E
  } = wn(), M = a(), {
    errors: I,
    fields: C
  } = M, o = zi({
    mutation: b,
    errors: I,
    defaultValues: C ?? p,
    transformSendData: (d) => ({
      ...d,
      [n]: {
        ...p ? p[n] : {},
        [i.id]: V.DONE
      }
    }),
    ...r
  });
  return O.useEffect(() => {
    c({
      errors: o.formState.errors
    });
  }, [o.formState.errors]), O.useEffect(() => {
    Bi.isEqual(o.getValues(), p) || (E(V.EDIT), c({
      fields: o.getValues()
    }));
  }, [i, JSON.stringify(o.formState.dirtyFields)]), O.useImperativeHandle(e, () => ({
    save: async () => {
      await o.submit(), c({
        fields: void 0
      });
    }
  })), o;
};
var ze = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "arrow-left", n = 448, a = 512, c = [8592], p = "f060", b = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faArrowLeft = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(ze);
var Ar = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "arrow-right", n = 448, a = 512, c = [8594], p = "f061", b = "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faArrowRight = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(Ar);
var Vr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "pencil", n = 512, a = 512, c = [9999, 61504, "pencil-alt"], p = "f303", b = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faPencil = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(Vr);
var me = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "circle", n = 512, a = 512, c = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], p = "f111", b = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faCircle = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(me);
var Dr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "lock", n = 448, a = 512, c = [128274], p = "f023", b = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faLock = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(Dr);
var Nr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "fas", i = "pen", n = 512, a = 512, c = [128394], p = "f304", b = "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faPen = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(Nr);
var Wr = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = "far", i = "clock", n = 512, a = 512, c = [128339, "clock-four"], p = "f017", b = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  r.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      a,
      c,
      p,
      b
    ]
  }, r.faClock = r.definition, r.prefix = e, r.iconName = i, r.width = n, r.height = a, r.ligatures = c, r.unicode = p, r.svgPathData = b, r.aliases = c;
})(Wr);
const yn = ({
  status: r
}) => ji(r).with(V.DONE, () => /* @__PURE__ */ t(R, { icon: Zi.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(V.ACTIVE, () => /* @__PURE__ */ t(R, { mask: me.faCircle, icon: Nr.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(V.WAIT, () => /* @__PURE__ */ t(R, { mask: me.faCircle, icon: Wr.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(V.LOADING, () => /* @__PURE__ */ t(R, { icon: gr.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(V.DISABLED, () => /* @__PURE__ */ t(R, { mask: me.faCircle, transform: "shrink-8", icon: Dr.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(V.ERROR, () => /* @__PURE__ */ t(R, { icon: qi.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(V.EDIT, () => /* @__PURE__ */ t(R, { mask: me.faCircle, transform: "shrink-8", icon: Vr.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), _n = ({
  items: r,
  activeItem: e,
  className: i,
  onChange: n
}) => /* @__PURE__ */ t("div", { className: i, children: /* @__PURE__ */ t("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: r.map((a, c) => {
  const p = (e == null ? void 0 : e.id) === a.id;
  return /* @__PURE__ */ t("li", { onClick: () => a.status !== V.DISABLED ? n == null ? void 0 : n(a) : void 0, css: [{
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
  }, p && mn`
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
                  `], children: /* @__PURE__ */ A("div", { css: {
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
    /* @__PURE__ */ t("div", { children: /* @__PURE__ */ A("div", { children: [
      c + 1,
      ". ",
      a.title
    ] }) }),
    /* @__PURE__ */ t(yn, { status: a.status })
  ] }) }, a.id);
}) }) });
var h = {}, qe = { exports: {} };
(function(r, e) {
  (function(i, n) {
    var a = "1.0.37", c = "", p = "?", b = "function", E = "undefined", M = "object", I = "string", C = "major", o = "model", d = "name", s = "type", l = "vendor", m = "version", W = "architecture", X = "console", v = "mobile", _ = "tablet", z = "smarttv", te = "wearable", De = "embedded", Ne = 500, ve = "Amazon", ce = "Apple", er = "ASUS", rr = "BlackBerry", ie = "Browser", ge = "Chrome", Ni = "Edge", we = "Firefox", ye = "Google", ir = "Huawei", We = "LG", Fe = "Microsoft", nr = "Motorola", _e = "Opera", Se = "Samsung", tr = "Sharp", xe = "Sony", Le = "Xiaomi", Be = "Zebra", ar = "Facebook", or = "Chromium OS", sr = "Mac OS", Wi = function(S, T) {
      var y = {};
      for (var k in S)
        T[k] && T[k].length % 2 === 0 ? y[k] = T[k].concat(S[k]) : y[k] = S[k];
      return y;
    }, Ee = function(S) {
      for (var T = {}, y = 0; y < S.length; y++)
        T[S[y].toUpperCase()] = S[y];
      return T;
    }, lr = function(S, T) {
      return typeof S === I ? de(T).indexOf(de(S)) !== -1 : !1;
    }, de = function(S) {
      return S.toLowerCase();
    }, Fi = function(S) {
      return typeof S === I ? S.replace(/[^\d\.]/g, c).split(".")[0] : n;
    }, je = function(S, T) {
      if (typeof S === I)
        return S = S.replace(/^\s\s*/, c), typeof T === E ? S : S.substring(0, Ne);
    }, ue = function(S, T) {
      for (var y = 0, k, J, G, x, w, $; y < T.length && !w; ) {
        var Ue = T[y], ur = T[y + 1];
        for (k = J = 0; k < Ue.length && !w && Ue[k]; )
          if (w = Ue[k++].exec(S), w)
            for (G = 0; G < ur.length; G++)
              $ = w[++J], x = ur[G], typeof x === M && x.length > 0 ? x.length === 2 ? typeof x[1] == b ? this[x[0]] = x[1].call(this, $) : this[x[0]] = x[1] : x.length === 3 ? typeof x[1] === b && !(x[1].exec && x[1].test) ? this[x[0]] = $ ? x[1].call(this, $, x[2]) : n : this[x[0]] = $ ? $.replace(x[1], x[2]) : n : x.length === 4 && (this[x[0]] = $ ? x[3].call(this, $.replace(x[1], x[2])) : n) : this[x] = $ || n;
        y += 2;
      }
    }, Re = function(S, T) {
      for (var y in T)
        if (typeof T[y] === M && T[y].length > 0) {
          for (var k = 0; k < T[y].length; k++)
            if (lr(T[y][k], S))
              return y === p ? n : y;
        } else if (lr(T[y], S))
          return y === p ? n : y;
      return S;
    }, Li = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, cr = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, dr = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, m], [/opios[\/ ]+([\w\.]+)/i], [m, [d, _e + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [d, _e]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [m, [d, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [d, "UC" + ie]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [m, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [m, [d, "Smart Lenovo " + ie]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure " + ie], m], [/\bfocus\/([\w\.]+)/i], [m, [d, we + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [d, _e + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [d, _e + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [d, "MIUI " + ie]], [/fxios\/([-\w\.]+)/i], [m, [d, we]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 " + ie]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 " + ie], m], [/samsungbrowser\/([\w\.]+)/i], [m, [d, Se + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], m], [/metasr[\/ ]?([\d\.]+)/i], [m, [d, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [d, m], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, ar], m], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [d, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [d, ge + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, ge + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [d, "Android " + ie]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [d, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [m, Re, Li]], [/(webkit|khtml)\/([\w\.]+)/i], [d, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [d, we + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, m], [/(cobalt)\/([\w\.]+)/i], [d, [m, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[W, "amd64"]], [/(ia32(?=;))/i], [[W, de]], [/((?:i[346]|x)86)[;\)]/i], [[W, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[W, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[W, "armhf"]], [/windows (ce|mobile); ppc;/i], [[W, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[W, /ower/, c, de]], [/(sun4\w)[;\)]/i], [[W, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[W, de]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [o, [l, Se], [s, _]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [o, [l, Se], [s, v]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [o, [l, ce], [s, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [o, [l, ce], [s, _]], [/(macintosh);/i], [o, [l, ce]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [o, [l, tr], [s, v]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [o, [l, ir], [s, _]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [o, [l, ir], [s, v]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[o, /_/g, " "], [l, Le], [s, v]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[o, /_/g, " "], [l, Le], [s, _]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [o, [l, "OPPO"], [s, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [o, [l, "Vivo"], [s, v]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [o, [l, "Realme"], [s, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [o, [l, nr], [s, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [o, [l, nr], [s, _]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [o, [l, We], [s, _]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [o, [l, We], [s, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [o, [l, "Lenovo"], [s, _]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[o, /_/g, " "], [l, "Nokia"], [s, v]], [/(pixel c)\b/i], [o, [l, ye], [s, _]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [o, [l, ye], [s, v]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [l, xe], [s, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[o, "Xperia Tablet"], [l, xe], [s, _]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [o, [l, "OnePlus"], [s, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [o, [l, ve], [s, _]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[o, /(.+)/g, "Fire Phone $1"], [l, ve], [s, v]], [/(playbook);[-\w\),; ]+(rim)/i], [o, l, [s, _]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [o, [l, rr], [s, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [o, [l, er], [s, _]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [o, [l, er], [s, v]], [/(nexus 9)/i], [o, [l, "HTC"], [s, _]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [l, [o, /_/g, " "], [s, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [o, [l, "Acer"], [s, _]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [o, [l, "Meizu"], [s, v]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [o, [l, "Ulefone"], [s, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, o, [s, v]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [l, o, [s, _]], [/(surface duo)/i], [o, [l, Fe], [s, _]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [o, [l, "Fairphone"], [s, v]], [/(u304aa)/i], [o, [l, "AT&T"], [s, v]], [/\bsie-(\w*)/i], [o, [l, "Siemens"], [s, v]], [/\b(rct\w+) b/i], [o, [l, "RCA"], [s, _]], [/\b(venue[\d ]{2,7}) b/i], [o, [l, "Dell"], [s, _]], [/\b(q(?:mv|ta)\w+) b/i], [o, [l, "Verizon"], [s, _]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [o, [l, "Barnes & Noble"], [s, _]], [/\b(tm\d{3}\w+) b/i], [o, [l, "NuVision"], [s, _]], [/\b(k88) b/i], [o, [l, "ZTE"], [s, _]], [/\b(nx\d{3}j) b/i], [o, [l, "ZTE"], [s, v]], [/\b(gen\d{3}) b.+49h/i], [o, [l, "Swiss"], [s, v]], [/\b(zur\d{3}) b/i], [o, [l, "Swiss"], [s, _]], [/\b((zeki)?tb.*\b) b/i], [o, [l, "Zeki"], [s, _]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[l, "Dragon Touch"], o, [s, _]], [/\b(ns-?\w{0,9}) b/i], [o, [l, "Insignia"], [s, _]], [/\b((nxa|next)-?\w{0,9}) b/i], [o, [l, "NextBook"], [s, _]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[l, "Voice"], o, [s, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[l, "LvTel"], o, [s, v]], [/\b(ph-1) /i], [o, [l, "Essential"], [s, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [o, [l, "Envizen"], [s, _]], [/\b(trio[-\w\. ]+) b/i], [o, [l, "MachSpeed"], [s, _]], [/\btu_(1491) b/i], [o, [l, "Rotor"], [s, _]], [/(shield[\w ]+) b/i], [o, [l, "Nvidia"], [s, _]], [/(sprint) (\w+)/i], [l, o, [s, v]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [l, Fe], [s, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [o, [l, Be], [s, _]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [o, [l, Be], [s, v]], [/smart-tv.+(samsung)/i], [l, [s, z]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [l, Se], [s, z]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, We], [s, z]], [/(apple) ?tv/i], [l, [o, ce + " TV"], [s, z]], [/crkey/i], [[o, ge + "cast"], [l, ye], [s, z]], [/droid.+aft(\w+)( bui|\))/i], [o, [l, ve], [s, z]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [o, [l, tr], [s, z]], [/(bravia[\w ]+)( bui|\))/i], [o, [l, xe], [s, z]], [/(mitv-\w{5}) bui/i], [o, [l, Le], [s, z]], [/Hbbtv.*(technisat) (.*);/i], [l, o, [s, z]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[l, je], [o, je], [s, z]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[s, z]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [l, o, [s, X]], [/droid.+; (shield) bui/i], [o, [l, "Nvidia"], [s, X]], [/(playstation [345portablevi]+)/i], [o, [l, xe], [s, X]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [o, [l, Fe], [s, X]], [/((pebble))app/i], [l, o, [s, te]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [o, [l, ce], [s, te]], [/droid.+; (glass) \d/i], [o, [l, ye], [s, te]], [/droid.+; (wt63?0{2,3})\)/i], [o, [l, Be], [s, te]], [/(quest( 2| pro)?)/i], [o, [l, ar], [s, te]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [s, De]], [/(aeobc)\b/i], [o, [l, ve], [s, De]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [o, [s, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [o, [s, _]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[s, _]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[s, v]], [/(android[-\w\. ]{0,9});.+buil/i], [o, [l, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [d, Ni + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, d]], os: [[/microsoft (windows) (vista|xp)/i], [d, m], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [d, [m, Re, cr]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, Re, cr], [d, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, sr], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, m], [/\(bb(10);/i], [m, [d, rr]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [d, we + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [d, ge + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, or], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, m], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, m]] }, Y = function(S, T) {
      if (typeof S === M && (T = S, S = n), !(this instanceof Y))
        return new Y(S, T).getResult();
      var y = typeof i !== E && i.navigator ? i.navigator : n, k = S || (y && y.userAgent ? y.userAgent : c), J = y && y.userAgentData ? y.userAgentData : n, G = T ? Wi(dr, T) : dr, x = y && y.userAgent == k;
      return this.getBrowser = function() {
        var w = {};
        return w[d] = n, w[m] = n, ue.call(w, k, G.browser), w[C] = Fi(w[m]), x && y && y.brave && typeof y.brave.isBrave == b && (w[d] = "Brave"), w;
      }, this.getCPU = function() {
        var w = {};
        return w[W] = n, ue.call(w, k, G.cpu), w;
      }, this.getDevice = function() {
        var w = {};
        return w[l] = n, w[o] = n, w[s] = n, ue.call(w, k, G.device), x && !w[s] && J && J.mobile && (w[s] = v), x && w[o] == "Macintosh" && y && typeof y.standalone !== E && y.maxTouchPoints && y.maxTouchPoints > 2 && (w[o] = "iPad", w[s] = _), w;
      }, this.getEngine = function() {
        var w = {};
        return w[d] = n, w[m] = n, ue.call(w, k, G.engine), w;
      }, this.getOS = function() {
        var w = {};
        return w[d] = n, w[m] = n, ue.call(w, k, G.os), x && !w[d] && J && J.platform != "Unknown" && (w[d] = J.platform.replace(/chrome os/i, or).replace(/macos/i, sr)), w;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return k;
      }, this.setUA = function(w) {
        return k = typeof w === I && w.length > Ne ? je(w, Ne) : w, this;
      }, this.setUA(k), this;
    };
    Y.VERSION = a, Y.BROWSER = Ee([d, m, C]), Y.CPU = Ee([W]), Y.DEVICE = Ee([o, l, s, X, v, z, _, te, De]), Y.ENGINE = Y.OS = Ee([d, m]), r.exports && (e = r.exports = Y), e.UAParser = Y;
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
  })(typeof window == "object" ? window : Ui);
})(qe, qe.exports);
var Sn = qe.exports;
Object.defineProperty(h, "__esModule", { value: !0 });
function xn(r) {
  return r && typeof r == "object" && "default" in r ? r.default : r;
}
var B = O, P = xn(B), Fr = Sn, ee = new Fr(), j = ee.getBrowser(), En = ee.getCPU(), q = ee.getDevice(), Xe = ee.getEngine(), re = ee.getOS(), fe = ee.getUA(), Lr = function(e) {
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
}, Br = /* @__PURE__ */ Object.freeze({
  ClientUAInstance: ee,
  browser: j,
  cpu: En,
  device: q,
  engine: Xe,
  os: re,
  ua: fe,
  setUa: Lr,
  parseUserAgent: be
});
function mr(r, e) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function Tn(r) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mr(Object(i), !0).forEach(function(n) {
      kn(r, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : mr(Object(i)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(i, n));
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
function Cn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pr(r, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function On(r, e, i) {
  return e && pr(r.prototype, e), i && pr(r, i), r;
}
function kn(r, e, i) {
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
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
    }
    return r;
  }, He.apply(this, arguments);
}
function Pn(r, e) {
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
  return Ge = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Ge(r, e);
}
function Mn(r, e) {
  if (r == null)
    return {};
  var i = {}, n = Object.keys(r), a, c;
  for (c = 0; c < n.length; c++)
    a = n[c], !(e.indexOf(a) >= 0) && (i[a] = r[a]);
  return i;
}
function H(r, e) {
  if (r == null)
    return {};
  var i = Mn(r, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (a = 0; a < c.length; a++)
      n = c[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (i[n] = r[n]);
  }
  return i;
}
function Ce(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function In(r, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ce(r);
}
function An(r, e) {
  return Vn(r) || Dn(r, e) || Nn(r, e) || Wn();
}
function Vn(r) {
  if (Array.isArray(r))
    return r;
}
function Dn(r, e) {
  var i = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (i != null) {
    var n = [], a = !0, c = !1, p, b;
    try {
      for (i = i.call(r); !(a = (p = i.next()).done) && (n.push(p.value), !(e && n.length === e)); a = !0)
        ;
    } catch (E) {
      c = !0, b = E;
    } finally {
      try {
        !a && i.return != null && i.return();
      } finally {
        if (c)
          throw b;
      }
    }
    return n;
  }
}
function Nn(r, e) {
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
  for (var i = 0, n = new Array(e); i < e; i++)
    n[i] = r[i];
  return n;
}
function Wn() {
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
}, Fn = {
  isMobile: !1,
  isTablet: !1,
  isBrowser: !1,
  isSmartTV: !1,
  isConsole: !1,
  isWearable: !1
}, Ln = function(e) {
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
      return Fn;
  }
}, Bn = function(e) {
  return Lr(e);
}, g = function(e) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return e || i;
}, Je = function() {
  return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
}, Ke = function(e) {
  var i = Je();
  return i && i.platform && (i.platform.indexOf(e) !== -1 || i.platform === "MacIntel" && i.maxTouchPoints > 1 && !window.MSStream);
}, jn = function(e, i, n, a, c) {
  return {
    isBrowser: e,
    browserMajorVersion: g(i.major),
    browserFullVersion: g(i.version),
    browserName: g(i.name),
    engineName: g(n.name),
    engineVersion: g(n.version),
    osName: g(a.name),
    osVersion: g(a.version),
    userAgent: g(c)
  };
}, fr = function(e, i, n, a) {
  return Tn({}, e, {
    vendor: g(i.vendor),
    model: g(i.model),
    os: g(n.name),
    osVersion: g(n.version),
    ua: g(a)
  });
}, Rn = function(e, i, n, a) {
  return {
    isSmartTV: e,
    engineName: g(i.name),
    engineVersion: g(i.version),
    osName: g(n.name),
    osVersion: g(n.version),
    userAgent: g(a)
  };
}, Un = function(e, i, n, a) {
  return {
    isConsole: e,
    engineName: g(i.name),
    engineVersion: g(i.version),
    osName: g(n.name),
    osVersion: g(n.version),
    userAgent: g(a)
  };
}, zn = function(e, i, n, a) {
  return {
    isWearable: e,
    engineName: g(i.name),
    engineVersion: g(i.version),
    osName: g(n.name),
    osVersion: g(n.version),
    userAgent: g(a)
  };
}, qn = function(e, i, n, a, c) {
  return {
    isEmbedded: e,
    vendor: g(i.vendor),
    model: g(i.model),
    engineName: g(n.name),
    engineVersion: g(n.version),
    osName: g(a.name),
    osVersion: g(a.version),
    userAgent: g(c)
  };
};
function Hn(r) {
  var e = r ? be(r) : Br, i = e.device, n = e.browser, a = e.engine, c = e.os, p = e.ua, b = Ln(i.type), E = b.isBrowser, M = b.isMobile, I = b.isTablet, C = b.isSmartTV, o = b.isConsole, d = b.isWearable, s = b.isEmbedded;
  if (E)
    return jn(E, n, a, c, p);
  if (C)
    return Rn(C, a, c, p);
  if (o)
    return Un(o, a, c, p);
  if (M || I)
    return fr(b, i, c, p);
  if (d)
    return zn(d, a, c, p);
  if (s)
    return qn(s, i, a, c, p);
}
var jr = function(e) {
  var i = e.type;
  return i === L.Mobile;
}, Rr = function(e) {
  var i = e.type;
  return i === L.Tablet;
}, Ur = function(e) {
  var i = e.type;
  return i === L.Mobile || i === L.Tablet;
}, zr = function(e) {
  var i = e.type;
  return i === L.SmartTv;
}, Ie = function(e) {
  var i = e.type;
  return i === L.Browser;
}, qr = function(e) {
  var i = e.type;
  return i === L.Wearable;
}, Hr = function(e) {
  var i = e.type;
  return i === L.Console;
}, Yr = function(e) {
  var i = e.type;
  return i === L.Embedded;
}, Gr = function(e) {
  var i = e.vendor;
  return g(i);
}, $r = function(e) {
  var i = e.model;
  return g(i);
}, Qr = function(e) {
  var i = e.type;
  return g(i, "browser");
}, Zr = function(e) {
  var i = e.name;
  return i === le.Android;
}, Xr = function(e) {
  var i = e.name;
  return i === le.Windows;
}, Jr = function(e) {
  var i = e.name;
  return i === le.MAC_OS;
}, Kr = function(e) {
  var i = e.name;
  return i === le.WindowsPhone;
}, ei = function(e) {
  var i = e.name;
  return i === le.IOS;
}, ri = function(e) {
  var i = e.version;
  return g(i);
}, ii = function(e) {
  var i = e.name;
  return g(i);
}, ni = function(e) {
  var i = e.name;
  return i === U.Chrome;
}, ti = function(e) {
  var i = e.name;
  return i === U.Firefox;
}, ai = function(e) {
  var i = e.name;
  return i === U.Chromium;
}, Ae = function(e) {
  var i = e.name;
  return i === U.Edge;
}, oi = function(e) {
  var i = e.name;
  return i === U.Yandex;
}, si = function(e) {
  var i = e.name;
  return i === U.Safari || i === U.MobileSafari;
}, li = function(e) {
  var i = e.name;
  return i === U.MobileSafari;
}, ci = function(e) {
  var i = e.name;
  return i === U.Opera;
}, di = function(e) {
  var i = e.name;
  return i === U.InternetExplorer || i === U.Ie;
}, ui = function(e) {
  var i = e.name;
  return i === U.MIUI;
}, mi = function(e) {
  var i = e.name;
  return i === U.SamsungBrowser;
}, pi = function(e) {
  var i = e.version;
  return g(i);
}, hi = function(e) {
  var i = e.major;
  return g(i);
}, fi = function(e) {
  var i = e.name;
  return g(i);
}, bi = function(e) {
  var i = e.name;
  return g(i);
}, vi = function(e) {
  var i = e.version;
  return g(i);
}, gi = function() {
  var e = Je(), i = e && e.userAgent && e.userAgent.toLowerCase();
  return typeof i == "string" ? /electron/.test(i) : !1;
}, se = function(e) {
  return typeof e == "string" && e.indexOf("Edg/") !== -1;
}, wi = function() {
  var e = Je();
  return e && (/iPad|iPhone|iPod/.test(e.platform) || e.platform === "MacIntel" && e.maxTouchPoints > 1) && !window.MSStream;
}, Z = function() {
  return Ke("iPad");
}, yi = function() {
  return Ke("iPhone");
}, _i = function() {
  return Ke("iPod");
}, Si = function(e) {
  return g(e);
};
function xi(r) {
  var e = r || Br, i = e.device, n = e.browser, a = e.os, c = e.engine, p = e.ua;
  return {
    isSmartTV: zr(i),
    isConsole: Hr(i),
    isWearable: qr(i),
    isEmbedded: Yr(i),
    isMobileSafari: li(n) || Z(),
    isChromium: ai(n),
    isMobile: Ur(i) || Z(),
    isMobileOnly: jr(i),
    isTablet: Rr(i) || Z(),
    isBrowser: Ie(i),
    isDesktop: Ie(i),
    isAndroid: Zr(a),
    isWinPhone: Kr(a),
    isIOS: ei(a) || Z(),
    isChrome: ni(n),
    isFirefox: ti(n),
    isSafari: si(n),
    isOpera: ci(n),
    isIE: di(n),
    osVersion: ri(a),
    osName: ii(a),
    fullBrowserVersion: pi(n),
    browserVersion: hi(n),
    browserName: fi(n),
    mobileVendor: Gr(i),
    mobileModel: $r(i),
    engineName: bi(c),
    engineVersion: vi(c),
    getUA: Si(p),
    isEdge: Ae(n) || se(p),
    isYandex: oi(n),
    deviceType: Qr(i),
    isIOS13: wi(),
    isIPad13: Z(),
    isIPhone13: yi(),
    isIPod13: _i(),
    isElectron: gi(),
    isEdgeChromium: se(p),
    isLegacyEdge: Ae(n) && !se(p),
    isWindows: Xr(a),
    isMacOs: Jr(a),
    isMIUI: ui(n),
    isSamsungBrowser: mi(n)
  };
}
var Ei = zr(q), Ti = Hr(q), Ci = qr(q), Yn = Yr(q), Gn = li(j) || Z(), $n = ai(j), Ve = Ur(q) || Z(), Oi = jr(q), ki = Rr(q) || Z(), Pi = Ie(q), Qn = Ie(q), Mi = Zr(re), Ii = Kr(re), Ai = ei(re) || Z(), Zn = ni(j), Xn = ti(j), Jn = si(j), Kn = ci(j), Vi = di(j), et = ri(re), rt = ii(re), it = pi(j), nt = hi(j), tt = fi(j), at = Gr(q), ot = $r(q), st = bi(Xe), lt = vi(Xe), ct = Si(fe), dt = Ae(j) || se(fe), ut = oi(j), mt = Qr(q), pt = wi(), ht = Z(), ft = yi(), bt = _i(), vt = gi(), gt = se(fe), wt = Ae(j) && !se(fe), yt = Xr(re), _t = Jr(re), St = ui(j), xt = mi(j), Et = function(e) {
  if (!e || typeof e != "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var i = be(e), n = i.device, a = i.browser, c = i.os, p = i.engine, b = i.ua;
  return xi({
    device: n,
    browser: a,
    os: c,
    engine: p,
    ua: b
  });
}, Tt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Mi ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Ct = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Pi ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Ot = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Vi ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, kt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ai ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Pt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ve ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Mt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return ki ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, It = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ii ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, At = function(e) {
  var i = e.renderWithFragment, n = e.children;
  e.viewClassName, e.style;
  var a = H(e, ["renderWithFragment", "children", "viewClassName", "style"]);
  return Oi ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Vt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ei ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Dt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ti ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Nt = function(e) {
  var i = e.renderWithFragment, n = e.children, a = H(e, ["renderWithFragment", "children"]);
  return Ci ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", a, n) : null;
}, Wt = function(e) {
  var i = e.renderWithFragment, n = e.children;
  e.viewClassName, e.style;
  var a = e.condition, c = H(e, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return a ? i ? P.createElement(B.Fragment, null, n) : P.createElement("div", c, n) : null;
};
function Ft(r) {
  return /* @__PURE__ */ function(e) {
    Pn(i, e);
    function i(n) {
      var a;
      return Cn(this, i), a = In(this, Ye(i).call(this, n)), a.isEventListenerAdded = !1, a.handleOrientationChange = a.handleOrientationChange.bind(Ce(a)), a.onOrientationChange = a.onOrientationChange.bind(Ce(a)), a.onPageLoad = a.onPageLoad.bind(Ce(a)), a.state = {
        isLandscape: !1,
        isPortrait: !1
      }, a;
    }
    return On(i, [{
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
function Lt() {
  var r = B.useState(function() {
    var c = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: c === 0,
      isLandscape: c === 90,
      orientation: c === 0 ? "portrait" : "landscape"
    };
  }), e = An(r, 2), i = e[0], n = e[1], a = B.useCallback(function() {
    var c = window.innerWidth > window.innerHeight ? 90 : 0, p = {
      isPortrait: c === 0,
      isLandscape: c === 90,
      orientation: c === 0 ? "portrait" : "landscape"
    };
    i.orientation !== p.orientation && n(p);
  }, [i.orientation]);
  return B.useEffect(function() {
    return (typeof window > "u" ? "undefined" : pe(window)) !== void 0 && Ve && (a(), window.addEventListener("load", a, !1), window.addEventListener("resize", a, !1)), function() {
      window.removeEventListener("resize", a, !1), window.removeEventListener("load", a, !1);
    };
  }, [a]), i;
}
function Di(r) {
  var e = r || window.navigator.userAgent;
  return be(e);
}
function Bt(r) {
  var e = r || window.navigator.userAgent, i = Di(e), n = xi(i);
  return [n, i];
}
h.AndroidView = Tt;
h.BrowserTypes = U;
h.BrowserView = Ct;
h.ConsoleView = Dt;
h.CustomView = Wt;
h.IEView = Ot;
h.IOSView = kt;
h.MobileOnlyView = At;
h.MobileView = Pt;
h.OsTypes = le;
h.SmartTVView = Vt;
h.TabletView = Mt;
h.WearableView = Nt;
h.WinPhoneView = It;
h.browserName = tt;
h.browserVersion = nt;
h.deviceDetect = Hn;
h.deviceType = mt;
h.engineName = st;
h.engineVersion = lt;
h.fullBrowserVersion = it;
h.getSelectorsByUserAgent = Et;
h.getUA = ct;
h.isAndroid = Mi;
h.isBrowser = Pi;
h.isChrome = Zn;
h.isChromium = $n;
h.isConsole = Ti;
h.isDesktop = Qn;
h.isEdge = dt;
h.isEdgeChromium = gt;
h.isElectron = vt;
h.isEmbedded = Yn;
h.isFirefox = Xn;
h.isIE = Vi;
h.isIOS = Ai;
h.isIOS13 = pt;
h.isIPad13 = ht;
h.isIPhone13 = ft;
h.isIPod13 = bt;
h.isLegacyEdge = wt;
h.isMIUI = St;
h.isMacOs = _t;
var jt = h.isMobile = Ve;
h.isMobileOnly = Oi;
h.isMobileSafari = Gn;
h.isOpera = Kn;
h.isSafari = Jn;
h.isSamsungBrowser = xt;
h.isSmartTV = Ei;
h.isTablet = ki;
h.isWearable = Ci;
h.isWinPhone = Ii;
h.isWindows = yt;
h.isYandex = ut;
h.mobileModel = ot;
h.mobileVendor = at;
h.osName = rt;
h.osVersion = et;
h.parseUserAgent = be;
h.setUserAgent = Bn;
h.useDeviceData = Di;
h.useDeviceSelectors = Bt;
h.useMobileOrientation = Lt;
h.withOrientationChange = Ft;
const Rt = () => Hi("only screen and (max-width : 640px)") || jt, Ut = ({
  steps: r,
  values: e,
  mutation: i,
  stateKey: n = "state",
  doneButton: a,
  updatePrivilege: c
}) => {
  const {
    isSubmitting: p,
    isDone: b,
    steps: E,
    stepFormRef: M,
    setActiveStepStatus: I,
    getNextButtonProps: C,
    getPrevButtonProps: o,
    setActiveStep: d,
    activeStepIndex: s,
    activeStep: l
  } = vn({
    stepsDefinition: r,
    mutation: i,
    values: e,
    stateKey: n
  }), {
    Component: m
  } = l, W = Rt(), X = W ? /* @__PURE__ */ A("div", { css: {
    display: "flex",
    maxHeight: "100%",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ A("div", { css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: "1px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem"
    }, children: [
      /* @__PURE__ */ t(Me, { size: "small", ...o(), children: /* @__PURE__ */ t(R, { icon: ze.faArrowLeft }) }, "previous"),
      /* @__PURE__ */ t("div", { css: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        textAlign: "center"
      }, children: l == null ? void 0 : l.title }),
      /* @__PURE__ */ t(Me, { size: "small", ...C(), children: /* @__PURE__ */ t(R, { icon: Ar.faArrowRight }) }, "previous")
    ] }),
    /* @__PURE__ */ t("div", { css: {
      flex: "1 1 0%",
      overflow: "auto",
      padding: "1rem"
    }, children: /* @__PURE__ */ t(m, {}) })
  ] }) : /* @__PURE__ */ A(Ji, { initialPrimarySize: "30%", minPrimarySize: "200px", children: [
    /* @__PURE__ */ t("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ t(_n, { activeItem: l, onChange: d, items: E }) }),
    /* @__PURE__ */ A("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ A("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        s + 1,
        ". ",
        l == null ? void 0 : l.title
      ] }),
      /* @__PURE__ */ t("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ t(m, {}) })
    ] })
  ] });
  return /* @__PURE__ */ t(gn, { value: {
    activeStep: l,
    mutation: i,
    stepFormRef: M,
    stateKey: n,
    values: e,
    setActiveStepStatus: I
  }, children: /* @__PURE__ */ t($i, { fit: !0, footer: [W ? /* @__PURE__ */ t("div", {}) : /* @__PURE__ */ t(he, { icon: ze.faArrowLeft, ...o(), children: "Назад" }, "previous"), /* @__PURE__ */ t("div", { children: b ? a : /* @__PURE__ */ t(Tr, { to: c, children: /* @__PURE__ */ A(he, { ...C(), variant: "contained", color: "success", children: [
    p && /* @__PURE__ */ t(R, { icon: gr.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next") }) }, "left")], children: X }) });
}, zt = () => {
  const r = N();
  return /* @__PURE__ */ A(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(f, { control: r.control, name: "name", rules: {
      required: "Введите наименование"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ t(ne, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ t(pn, { is: "admin", children: /* @__PURE__ */ t(f, { control: r.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ t(fn, { ...e, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ t(Oe, { label: "Тип программы", ...e, dictionary: "navProgramType", filterOptions: (i) => i.filter(({
      id: n
    }) => n === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "section_id", render: ({
      field: e
    }) => /* @__PURE__ */ t(bn, { label: "Направленность", placeholder: "Выберите направленность", ...e }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ t(Oe, { label: "Уровень", css: {
      width: "100%"
    }, ...e, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "year_created", rules: {
      required: "Заполните год создания",
      maxLength: {
        value: 4,
        message: "Максимум 4 цифры"
      },
      minLength: {
        value: 4,
        message: "Минимум 4 цифры"
      },
      validate: hn
    }, render: ({
      field: e
    }) => /* @__PURE__ */ t(Yi, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...e }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: e
    }) => /* @__PURE__ */ t(ne, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...e }) })
  ] });
}, qt = u.object({
  protocol_number: u.string().nullish(),
  protocol_date: u.string().nullish(),
  decree_number: u.string().nullish(),
  decree_date: u.string().nullish(),
  authors: u.string().nullish(),
  comment: u.string().nullish()
}), Ht = () => {
  const r = N({
    schema: qt
  });
  return /* @__PURE__ */ A(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(f, { control: r.control, name: "protocol_number", render: ({
      field: e
    }) => /* @__PURE__ */ t(ne, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "protocol_date", render: ({
      field: e
    }) => /* @__PURE__ */ t(ke, { css: {
      width: "100%"
    }, ...e, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "decree_number", render: ({
      field: e
    }) => /* @__PURE__ */ t(ne, { css: {
      width: "100%"
    }, ...e, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "decree_date", render: ({
      field: e
    }) => /* @__PURE__ */ t(ke, { css: {
      width: "100%"
    }, ...e, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "authors", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { css: {
      width: "100%"
    }, ...e, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "comment", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { css: {
      width: "100%"
    }, ...e, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Yt = u.object({
  min_age: u.coerce.number().optional(),
  max_age: u.coerce.number().optional(),
  competence_level_id: u.number().nullish(),
  program_volume: u.coerce.number().optional(),
  program_duration: u.coerce.number().optional(),
  edu_sessions_per_week: u.coerce.number().optional(),
  edu_sessions_per_day: u.coerce.number().optional(),
  edu_session_hour_limit: u.coerce.number().optional(),
  break_duration: u.coerce.number().optional(),
  education_form_id: u.string().nullish(),
  min_group_size: u.coerce.number().optional(),
  max_group_size: u.coerce.number().optional(),
  is_one_age_group: u.boolean().optional()
}), Gt = () => {
  const r = N({
    schema: Yt
  });
  return /* @__PURE__ */ A(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(Gi, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ A("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ t(f, { control: r.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: e
      }) => /* @__PURE__ */ t(F, { ...e, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ t("div", { children: "-" }),
      /* @__PURE__ */ t(f, { control: r.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: e
      }) => /* @__PURE__ */ t(F, { ...e, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "competence_level_id", render: ({
      field: e
    }) => /* @__PURE__ */ t(Oe, { dictionary: "programDocCompetences", ...e, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "program_volume", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "program_duration", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "edu_sessions_per_week", render: ({
      field: e
    }) => /* @__PURE__ */ t(
      F,
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
    /* @__PURE__ */ t(f, { control: r.control, name: "edu_sessions_per_day", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "edu_session_hour_limit", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "break_duration", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "education_form_id", render: ({
      field: e
    }) => /* @__PURE__ */ t(Oe, { dictionary: "educationForm", ...e, label: "Форма обучения" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "min_group_size", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "max_group_size", render: ({
      field: e
    }) => /* @__PURE__ */ t(F, { ...e, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "is_one_age_group", render: ({
      field: e
    }) => /* @__PURE__ */ t(_r, { ...e, label: "Группа одного возраста?" }) })
  ] });
}, $t = u.object({
  explanatory_note: u.string().nullish(),
  program_relevance: u.string().nullish(),
  pedagogical_expediency: u.string().nullish(),
  distinctive_features: u.string().nullish(),
  actual: u.string().nullish()
}), Qt = () => {
  const r = N({
    schema: $t
  });
  return /* @__PURE__ */ A(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(f, { control: r.control, name: "explanatory_note", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "program_relevance", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "pedagogical_expediency", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "distinctive_features", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...e }) }),
    /* @__PURE__ */ t(f, { control: r.control, name: "actual", render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...e }) })
  ] });
}, Zt = u.object({
  program_results: u.array(u.string())
}), Xt = () => {
  const r = N({
    schema: Zt
  });
  return /* @__PURE__ */ t(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: /* @__PURE__ */ t(f, { name: "program_results", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(Ki, { ...e, multiple: !0, label: "Планируемые результаты", helperText: "Можно выбрать несколько результатов" }) }) });
}, Jt = u.object({
  mission: u.string({
    required_error: "Заполните цель/миссию"
  }).nullable(),
  goal: u.string({
    required_error: "Заполните цель"
  }).nullable(),
  program_objectives: u.array(u.string())
}).required({
  goal: !0
}), Kt = () => {
  const r = N({
    schema: Jt
  });
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ A(D, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ t(f, { name: "mission", control: r.control, render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...e }) }),
    /* @__PURE__ */ t(f, { name: "goal", control: r.control, render: ({
      field: e
    }) => /* @__PURE__ */ t(Q, { label: "Цель программы", placeholder: "Введите цель программы", ...e }) }),
    /* @__PURE__ */ t(f, { name: "program_objectives", control: r.control, render: ({
      field: e
    }) => /* @__PURE__ */ t(en, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...e }) })
  ] }) });
}, br = ({
  doc_id: r,
  initialValues: e,
  ...i
}) => /* @__PURE__ */ t(Cr, { url: "/api/rest/program-doc-plans", ...i, initialValues: {
  doc_id: r,
  sort_index: 0,
  ...e
}, children: (n) => [/* @__PURE__ */ t(f, { name: "theme", rules: {
  required: "Введите тему"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(ne, { label: "Тема", placeholder: "Введите тему", ...a }) }, "theme"), /* @__PURE__ */ t(f, { name: "theory", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(ne, { label: "Теория", placeholder: "Введите теорию", ...a }) }, "theory"), /* @__PURE__ */ t(f, { name: "theory_volume", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(F, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...a }) }, "theory_volume"), /* @__PURE__ */ t(f, { name: "practice", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(ne, { label: "Практика", placeholder: "Введите практику", ...a }) }, "practice"), /* @__PURE__ */ t(f, { name: "practice_volume", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(F, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...a }) }, "practice_volume")] }), oe = Er(), ea = () => {
  const {
    params: {
      id: r
    }
  } = Ze(), [e, i] = O.useState(!1), [n, a] = O.useState(!1), c = $e("DELETE", "/api/rest/program-doc-plans/:id", {
    onSuccess: () => {
      I();
    }
  }), p = [oe.display("theme", "Тема"), oe.display("theory", "Теория"), oe.display("theory_volume", "Объём теории"), oe.display("practice", "Практика"), oe.display("practice_volume", "Объём практики"), oe.actions([{
    key: "edit",
    render: (C) => {
      const [o, d] = O.useState(!1);
      return /* @__PURE__ */ A(wr, { children: [
        /* @__PURE__ */ t(Me, { css: [{
          padding: "4px",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))",
          ":hover": {
            "--tw-text-opacity": "1",
            color: "rgb(202 138 4 / var(--tw-text-opacity))"
          }
        }], onClick: () => d(!0), children: /* @__PURE__ */ t(R, { icon: Or.faPenAlt }) }),
        o && /* @__PURE__ */ t(Pe, { autoHeight: !0, title: `Тема: ${C.theme}`, onClose: () => d(!1), open: !0, children: /* @__PURE__ */ t(br, { initialValues: C, doc_id: r, onSave: () => {
          d(!1), I();
        } }) })
      ] });
    }
  }, {
    key: "delete",
    icon: kr.faTrash,
    tooltip: "Удалить тему",
    onClick: async (C) => {
      c.mutate({
        id: C.id
      });
    }
  }])], b = Sr("/api/rest/program-doc-plans", p, {
    defaultFilters: [{
      property: "doc_id",
      value: r
    }],
    isLoading: c.isPending || n,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), E = O.useCallback(() => {
    I(), i(!1), a(!1);
  }, []), M = Qe(), I = () => M("/api/rest/program-doc-plans");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ A("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ A(he, { variant: "outlined", onClick: () => i((C) => !C), color: "success", children: [
        /* @__PURE__ */ t(R, { icon: Pr.faPlus }),
        "Добавить тему"
      ] }),
      e && /* @__PURE__ */ t(Pe, { open: !0, title: "Новая тема", onClose: () => i(!1), autoHeight: !0, children: /* @__PURE__ */ t(br, { doc_id: r, onSave: E, onSubmit: () => a(!0), onError: () => a(!1) }) })
    ] }),
    /* @__PURE__ */ t(xr, { border: !0, table: b })
  ] }) });
}, ra = u.object({
  program_att_forms: u.array(u.string())
}), ia = () => {
  const r = N({
    schema: ra
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_att_forms", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(rn, { ...e, multiple: !0, label: "Формы аттестации и оценочные материалы" }) }) }) });
}, na = u.object({
  program_criteria: u.array(u.string())
}), ta = () => {
  const r = N({
    schema: na
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_criteria", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(nn, { ...e, multiple: !0, label: "Критерии оценки учебных результатов" }) }) }) });
}, aa = u.object({
  program_fixations: u.array(u.string())
}), oa = () => {
  const r = N({
    schema: aa
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_fixations", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(tn, { ...e, multiple: !0, label: "Способы фиксации учебных результатов" }) }) }) });
}, sa = u.object({
  program_materials: u.array(u.string())
}), la = () => {
  const r = N({
    schema: sa
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_materials", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(an, { ...e, multiple: !0, label: "Методические материалы" }) }) }) });
}, ca = u.object({
  program_managements: u.array(u.string())
}), da = () => {
  const r = N({
    schema: ca
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_managements", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(on, { ...e, multiple: !0, label: "Особенности организации образовательной деятельности" }) }) }) });
}, ua = u.object({
  program_indoctrinations: u.array(u.string())
}), ma = () => {
  const r = N({
    schema: ua
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_indoctrinations", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(sn, { ...e, multiple: !0, label: "Воспитательная деятельность" }) }) }) });
}, pa = u.object({
  program_developments: u.array(u.string())
}), ha = () => {
  const r = N({
    schema: pa
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_developments", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(ln, { ...e, multiple: !0, label: "Развивающая деятельность" }) }) }) });
}, fa = () => {
  const r = N({
    schema: u.object({
      staff_description: u.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ t(D, { tw: "flex flex-col gap-4", form: r, children: /* @__PURE__ */ t(f, { control: r.control, name: "staff_description", render: ({
    field: e
  }) => /* @__PURE__ */ t(Q, { tw: "w-full", ...e, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, ba = u.object({
  program_inventories: u.array(u.string())
}), va = () => {
  const r = N({
    schema: ba
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_inventories", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(cn, { ...e, multiple: !0, label: "Материально-техническое обеспечение" }) }) }) });
}, ga = u.object({
  program_information: u.array(u.string())
}), wa = () => {
  const r = N({
    schema: ga
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_information", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(dn, { ...e, multiple: !0, label: "Информационное обеспечение" }) }) }) });
}, ya = u.object({
  program_books: u.array(u.string())
}), _a = () => {
  const r = N({
    schema: ya
  });
  return /* @__PURE__ */ t("div", { tw: "flex flex-col gap-6", children: /* @__PURE__ */ t(D, { form: r, children: /* @__PURE__ */ t(f, { name: "program_books", control: r.control, render: ({
    field: e
  }) => /* @__PURE__ */ t(un, { ...e, multiple: !0, label: "Список литературы" }) }) }) });
}, vr = ({
  doc_id: r,
  initialValues: e,
  ...i
}) => /* @__PURE__ */ t(Cr, { url: "/api/rest/program-doc-schedules", ...i, initialValues: {
  doc_id: r,
  ...e
}, children: (n) => [/* @__PURE__ */ t(f, { name: "number_year", rules: {
  required: "Введите год обучения"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(F, { label: "Год обучения (по порядку)", placeholder: "Введите год обучения", ...a }) }, "number_year"), /* @__PURE__ */ t(f, { name: "date_start", rules: {
  required: "Введите дата начала обучения"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(ke, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...a }) }, "date_start"), /* @__PURE__ */ t(f, { name: "date_end", rules: {
  required: "Введите дата окончания обучения"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(ke, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...a }) }, "date_end"), /* @__PURE__ */ t(f, { name: "edu_week_count", rules: {
  required: "Введите количество учебных недель"
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(F, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...a }) }, "edu_week_count"), /* @__PURE__ */ t(f, { name: "is_vacations", rules: {
  validate: (a) => a === void 0 ? "Заполните поле" : !0
}, control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(_r, { label: "Есть каникулы?", ...a }) }, "is_vacations"), /* @__PURE__ */ t(f, { name: "edu_sessions_per_week", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(F, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...a }) }, "edu_sessions_per_week"), /* @__PURE__ */ t(f, { name: "edu_sessions_per_day", control: n.control, render: ({
  field: a
}) => /* @__PURE__ */ t(F, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...a }) }, "edu_sessions_per_day")] }), K = Er(), Sa = () => {
  const {
    params: {
      id: r
    }
  } = Ze(), [e, i] = O.useState(!1), [n, a] = O.useState(!1), c = $e("DELETE", "/api/rest/program-doc-schedules/:id", {
    onSuccess: () => {
      I();
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
      render: (C) => {
        const [o, d] = O.useState(!1);
        return /* @__PURE__ */ A(wr, { children: [
          /* @__PURE__ */ t(Me, { css: [{
            padding: "4px",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            "--tw-text-opacity": "1",
            color: "rgb(156 163 175 / var(--tw-text-opacity))",
            ":hover": {
              "--tw-text-opacity": "1",
              color: "rgb(202 138 4 / var(--tw-text-opacity))"
            }
          }], onClick: () => d(!0), children: /* @__PURE__ */ t(R, { icon: Or.faPenAlt }) }),
          o && /* @__PURE__ */ t(Pe, { autoHeight: !0, title: `Год обучения №${C.number_year}`, onClose: () => d(!1), open: !0, children: /* @__PURE__ */ t(vr, { initialValues: C, doc_id: r, onSave: () => {
            d(!1), I();
          } }) })
        ] });
      }
    }, {
      key: "delete",
      icon: kr.faTrash,
      tooltip: "Удалить расписание",
      onClick: async (C) => {
        c.mutate({
          id: C.id
        });
      }
    }])
  ], b = Sr("/api/rest/program-doc-schedules", p, {
    defaultFilters: [{
      property: "doc_id",
      value: r
    }],
    isLoading: c.isPending || n,
    loadingOnFetch: !0,
    keepPrevious: !1,
    enableSorting: !1
  }), E = O.useCallback(() => {
    I(), i(!1), a(!1);
  }, []), M = Qe(), I = () => M("/api/rest/program-doc-schedules");
  return /* @__PURE__ */ t("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, children: /* @__PURE__ */ A("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ A(he, { variant: "outlined", onClick: () => i((C) => !C), color: "success", children: [
        /* @__PURE__ */ t(R, { icon: Pr.faPlus }),
        "Добавить"
      ] }),
      e && /* @__PURE__ */ t(Pe, { autoHeight: !0, title: "Новый учебный график", onClose: () => i(!1), open: !0, children: /* @__PURE__ */ t(vr, { doc_id: r, onSave: E, onSubmit: () => a(!0), onError: () => a(!1) }) })
    ] }),
    /* @__PURE__ */ t(xr, { border: !0, table: b })
  ] }) });
}, xa = [{
  id: "general",
  title: "Основное",
  Component: zt
}, {
  id: "params",
  title: "Параметры",
  Component: Gt
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Qt
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Xt
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: Kt
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: ea
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: ia
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: ta
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: oa
}, {
  id: "materials",
  title: "Методические материалы",
  Component: la
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: da
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: ma
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: ha
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: fa
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: va
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: wa
}, {
  title: "Список литературы",
  id: "books",
  Component: _a
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Sa
}, {
  id: "description",
  title: "Утверждение",
  Component: Ht
}], Ea = u.object({
  min_age: u.coerce.number().nullable(),
  max_age: u.coerce.number().nullable(),
  program_volume: u.coerce.number().nullable(),
  program_duration: u.coerce.number().nullable(),
  edu_sessions_per_week: u.coerce.number().nullable(),
  edu_sessions_per_day: u.coerce.number().nullable(),
  edu_session_hour_limit: u.coerce.number().nullable(),
  break_duration: u.coerce.number().nullable(),
  min_group_size: u.coerce.number().nullable(),
  max_group_size: u.coerce.number().nullable(),
  competence_level_id: u.coerce.number().nullable()
}).passthrough(), Ta = u.object({
  data: u.array(Ea).transform((r) => r[0])
}).transform((r) => r.data), qa = () => {
  const {
    params: {
      id: r
    },
    setTitle: e
  } = Ze(), i = Qe(), n = Qi(`/api/rest/program-docs/${r}`, {
    schema: Ta
  }), a = $e("PUT", `/api/rest/program-docs/${r}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      i("/api/rest/program-docs");
    }
  });
  O.useEffect(() => {
    e(`Конструктор программы #${r}`);
  }, [r, e]);
  const c = O.useCallback(() => {
    a.mutate({
      state_id: 3
    });
  }, [r]);
  if (n.isLoading)
    return /* @__PURE__ */ t(Ri, { spinning: !0 });
  if (n.isError)
    return /* @__PURE__ */ t(Xi, { type: "error", title: n.error.message });
  const p = n.data;
  return /* @__PURE__ */ t(Ut, { steps: xa, stateKey: "steps_info", mutation: a, updatePrivilege: "ProgramDocsEdit", doneButton: (p.state_id == 1 || p.state_id == 2) && /* @__PURE__ */ t(Tr, { to: "ProgramDocsEdit", children: /* @__PURE__ */ t(he, { variant: "contained", icon: Mr.faCheck, color: "success", isLoading: a.isPending, disabled: a.isPending, onClick: c, children: "Завершить" }) }), values: p });
};
export {
  qa as default
};
