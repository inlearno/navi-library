import { s as Bi, j as Q, m as ls, w as fs, r as E, T as zi, g as cs, a as us, u as ds, i as ps, b as ms, R as vs, c as At, d as xn, e as at, f as hs, h as _n } from "./lib-d7a52d29.js";
function x() {
  return x = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, x.apply(this, arguments);
}
var Wi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", n = "arrow-right", r = 448, a = 512, i = [8594], o = "f061", s = "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
  t.definition = {
    prefix: e,
    iconName: n,
    icon: [
      r,
      a,
      i,
      o,
      s
    ]
  }, t.faArrowRight = t.definition, t.prefix = e, t.iconName = n, t.width = r, t.height = a, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
})(Wi);
var Ui = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", n = "arrow-left", r = 448, a = 512, i = [8592], o = "f060", s = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  t.definition = {
    prefix: e,
    iconName: n,
    icon: [
      r,
      a,
      i,
      o,
      s
    ]
  }, t.faArrowLeft = t.definition, t.prefix = e, t.iconName = n, t.width = r, t.height = a, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
})(Ui);
function gs() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return Bi(e);
}
const bs = ({
  items: t,
  activeItem: e,
  className: n,
  onChange: r
}) => /* @__PURE__ */ Q("div", { css: {
  overflowY: "auto"
}, className: n, children: /* @__PURE__ */ Q("ul", { css: {
  "> :not([hidden]) ~ :not([hidden])": {
    "--tw-divide-y-reverse": "0",
    borderTopWidth: "calc(1px * calc(1 - var(--tw-divide-y-reverse)))",
    borderBottomWidth: "calc(1px * var(--tw-divide-y-reverse))",
    "--tw-divide-opacity": "1",
    borderColor: "rgb(243 244 246 / var(--tw-divide-opacity))"
  }
}, children: t.map((a) => /* @__PURE__ */ Q("div", { onClick: () => r == null ? void 0 : r(a), css: [{
  padding: "0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "500ms"
}, (e == null ? void 0 : e.id) === a.id ? {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  color: "rgb(0 0 0 / var(--tw-text-opacity))"
} : {
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgb(219 234 254 / 0.3)"
  }
}], children: a.title }, a.id)) }) });
var G = /* @__PURE__ */ ((t) => (t.DONE = "done", t.ACTIVE = "active", t.DISABLED = "disabled", t))(G || {});
const ue = [{
  id: "general",
  title: "Основное",
  status: G.ACTIVE
}, {
  id: "description",
  title: "Описание",
  status: G.DISABLED
}, {
  id: "parameters",
  title: "Параметры",
  status: G.DISABLED
}, {
  id: "plan-results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  status: G.DISABLED
}, {
  id: "goals-tasks",
  title: "Цели и задачи",
  status: G.DISABLED
}, {
  id: "study-plan",
  title: "Учебный план",
  status: G.DISABLED
}, {
  id: "evaluation",
  title: "Формы аттестации и оценочные материалы",
  status: G.DISABLED
}, {
  id: "criteria",
  title: "Критерии оценки учебных результатов",
  status: G.DISABLED
}, {
  id: "assessment",
  title: "Способ фиксации учебных результатов",
  status: G.DISABLED
}, {
  id: "materials",
  title: "Методические материалы",
  status: G.DISABLED
}, {
  title: "Особенности организации образовательной деятельности",
  id: "organizational-features",
  status: G.DISABLED
}, {
  title: "Воспитательная деятельность",
  id: "teaching-experience",
  status: G.DISABLED
}, {
  title: "Развивающая деятельность",
  id: "academic-experience",
  status: G.DISABLED
}, {
  title: "Кадровое обеспечение",
  id: "learning-style",
  status: G.DISABLED
}, {
  title: "Материально-техническое обеспечение",
  id: "technology-support",
  status: G.DISABLED
}, {
  title: "Информационное обеспечение",
  id: "information-support",
  status: G.DISABLED
}, {
  title: "Список литературы",
  id: "list-of-references",
  status: G.DISABLED
}, {
  title: "Календарный учебный график",
  id: "calendar-study-plan",
  status: G.DISABLED
}];
var ys = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xs = /* @__PURE__ */ ls(
  function(t) {
    return ys.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ws = xs, ks = function(e) {
  return e !== "theme";
}, La = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? ws : ks;
}, Ma = function(e, n, r) {
  var a;
  if (n) {
    var i = n.shouldForwardProp;
    a = e.__emotion_forwardProp && i ? function(o) {
      return e.__emotion_forwardProp(o) && i(o);
    } : i;
  }
  return typeof a != "function" && r && (a = e.__emotion_forwardProp), a;
}, Os = function(e) {
  var n = e.cache, r = e.serialized, a = e.isStringTag;
  return us(n, r, a), ds(function() {
    return ps(n, r, a);
  }), null;
}, Es = function t(e, n) {
  var r = e.__emotion_real === e, a = r && e.__emotion_base || e, i, o;
  n !== void 0 && (i = n.label, o = n.target);
  var s = Ma(e, n, r), l = s || La(a), f = !l("as");
  return function() {
    var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (i !== void 0 && u.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      u.push.apply(u, c);
    else {
      u.push(c[0][0]);
      for (var d = c.length, m = 1; m < d; m++)
        u.push(c[m], c[0][m]);
    }
    var v = fs(function(p, g, O) {
      var k = f && p.as || a, y = "", h = [], b = p;
      if (p.theme == null) {
        b = {};
        for (var A in p)
          b[A] = p[A];
        b.theme = E.useContext(zi);
      }
      typeof p.className == "string" ? y = cs(g.registered, h, p.className) : p.className != null && (y = p.className + " ");
      var T = Bi(u.concat(h), g.registered, b);
      y += g.key + "-" + T.name, o !== void 0 && (y += " " + o);
      var _ = f && s === void 0 ? La(k) : l, C = {};
      for (var w in p)
        f && w === "as" || // $FlowFixMe
        _(w) && (C[w] = p[w]);
      return C.className = y, C.ref = O, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Os, {
        cache: g,
        serialized: T,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ E.createElement(k, C));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", v.defaultProps = e.defaultProps, v.__emotion_real = v, v.__emotion_base = a, v.__emotion_styles = u, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + o;
      }
    }), v.withComponent = function(p, g) {
      return t(p, x({}, n, g, {
        shouldForwardProp: Ma(v, g, !0)
      })).apply(void 0, u);
    }, v;
  };
}, Ps = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Fn = Es.bind();
Ps.forEach(function(t) {
  Fn[t] = Fn(t);
});
const Ss = {
  black: "#000",
  white: "#fff"
}, qe = Ss, As = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, de = As, Ts = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, pe = Ts, Cs = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, me = Cs, Rs = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ve = Rs, Is = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, he = Is, $s = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Fe = $s, _s = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ns = _s;
function Ft(t) {
  return t !== null && typeof t == "object" && t.constructor === Object;
}
function Hi(t) {
  if (!Ft(t))
    return t;
  const e = {};
  return Object.keys(t).forEach((n) => {
    e[n] = Hi(t[n]);
  }), e;
}
function vt(t, e, n = {
  clone: !0
}) {
  const r = n.clone ? x({}, t) : t;
  return Ft(t) && Ft(e) && Object.keys(e).forEach((a) => {
    a !== "__proto__" && (Ft(e[a]) && a in t && Ft(t[a]) ? r[a] = vt(t[a], e[a], n) : n.clone ? r[a] = Ft(e[a]) ? Hi(e[a]) : e[a] : r[a] = e[a]);
  }), r;
}
var Yi = { exports: {} }, Ds = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ls = Ds, Ms = Ls;
function Ki() {
}
function Vi() {
}
Vi.resetWarningCache = Ki;
var js = function() {
  function t(r, a, i, o, s, l) {
    if (l !== Ms) {
      var f = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw f.name = "Invariant Violation", f;
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: Vi,
    resetWarningCache: Ki
  };
  return n.PropTypes = n, n;
};
Yi.exports = js();
var Fs = Yi.exports;
const $ = /* @__PURE__ */ ms(Fs);
function Pe(t) {
  let e = "https://mui.com/production-error/?code=" + t;
  for (let n = 1; n < arguments.length; n += 1)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + t + "; visit " + e + " for the full message.";
}
function te(t) {
  if (typeof t != "string")
    throw new Error(Pe(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ja(t) {
  return t && t.ownerDocument || document;
}
function Or(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
const Bs = typeof window < "u" ? E.useLayoutEffect : E.useEffect, Ze = Bs;
let Fa = 0;
function zs(t) {
  const [e, n] = E.useState(t), r = t || e;
  return E.useEffect(() => {
    e == null && (Fa += 1, n(`mui-${Fa}`));
  }, [e]), r;
}
const Ba = vs["useId".toString()];
function Ws(t) {
  if (Ba !== void 0) {
    const e = Ba();
    return t ?? e;
  }
  return zs(t);
}
function Us({
  controlled: t,
  default: e,
  name: n,
  state: r = "value"
}) {
  const {
    current: a
  } = E.useRef(t !== void 0), [i, o] = E.useState(e), s = a ? t : i, l = E.useCallback((f) => {
    a || o(f);
  }, []);
  return [s, l];
}
function Hs(t) {
  const e = E.useRef(t);
  return Ze(() => {
    e.current = t;
  }), E.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, e.current)(...n)
  )).current;
}
function Se(...t) {
  return E.useMemo(() => t.every((e) => e == null) ? null : (e) => {
    t.forEach((n) => {
      Or(n, e);
    });
  }, t);
}
let Gn = !0, Er = !1, za;
const Ys = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Ks(t) {
  const {
    type: e,
    tagName: n
  } = t;
  return !!(n === "INPUT" && Ys[e] && !t.readOnly || n === "TEXTAREA" && !t.readOnly || t.isContentEditable);
}
function Vs(t) {
  t.metaKey || t.altKey || t.ctrlKey || (Gn = !0);
}
function mr() {
  Gn = !1;
}
function Gs() {
  this.visibilityState === "hidden" && Er && (Gn = !0);
}
function Xs(t) {
  t.addEventListener("keydown", Vs, !0), t.addEventListener("mousedown", mr, !0), t.addEventListener("pointerdown", mr, !0), t.addEventListener("touchstart", mr, !0), t.addEventListener("visibilitychange", Gs, !0);
}
function qs(t) {
  const {
    target: e
  } = t;
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return Gn || Ks(e);
}
function Zs() {
  const t = E.useCallback((a) => {
    a != null && Xs(a.ownerDocument);
  }, []), e = E.useRef(!1);
  function n() {
    return e.current ? (Er = !0, window.clearTimeout(za), za = window.setTimeout(() => {
      Er = !1;
    }, 100), e.current = !1, !0) : !1;
  }
  function r(a) {
    return qs(a) ? (e.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: e,
    onFocus: r,
    onBlur: n,
    ref: t
  };
}
function Gi(t, e) {
  const n = x({}, e);
  return Object.keys(t).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = x({}, t[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = t[r] || {}, i = e[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = a : !a || !Object.keys(a) ? n[r] = i : (n[r] = x({}, i), Object.keys(a).forEach((o) => {
        n[r][o] = Gi(a[o], i[o]);
      }));
    } else
      n[r] === void 0 && (n[r] = t[r]);
  }), n;
}
function Xi(t, e, n = void 0) {
  const r = {};
  return Object.keys(t).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (a) => {
      r[a] = t[a].reduce((i, o) => {
        if (o) {
          const s = e(o);
          s !== "" && i.push(s), n && n[o] && i.push(n[o]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const Wa = (t) => t, Js = () => {
  let t = Wa;
  return {
    configure(e) {
      t = e;
    },
    generate(e) {
      return t(e);
    },
    reset() {
      t = Wa;
    }
  };
}, Qs = Js(), tl = Qs, el = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Yr(t, e, n = "Mui") {
  const r = el[e];
  return r ? `${n}-${r}` : `${tl.generate(t)}-${e}`;
}
function qi(t, e, n = "Mui") {
  const r = {};
  return e.forEach((a) => {
    r[a] = Yr(t, a, n);
  }), r;
}
const Kr = "$$material";
function J(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function nl(t, e) {
  return Fn(t, e);
}
const rl = (t, e) => {
  Array.isArray(t.__emotion_styles) && (t.__emotion_styles = e(t.__emotion_styles));
}, al = ["values", "unit", "step"], il = (t) => {
  const e = Object.keys(t).map((n) => ({
    key: n,
    val: t[n]
  })) || [];
  return e.sort((n, r) => n.val - r.val), e.reduce((n, r) => x({}, n, {
    [r.key]: r.val
  }), {});
};
function ol(t) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: e = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = t, a = J(t, al), i = il(e), o = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof e[d] == "number" ? e[d] : d) - r / 100}${n})`;
  }
  function f(d, m) {
    const v = o.indexOf(m);
    return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${n}) and (max-width:${(v !== -1 && typeof e[o[v]] == "number" ? e[o[v]] : m) - r / 100}${n})`;
  }
  function c(d) {
    return o.indexOf(d) + 1 < o.length ? f(d, o[o.indexOf(d) + 1]) : s(d);
  }
  function u(d) {
    const m = o.indexOf(d);
    return m === 0 ? s(o[1]) : m === o.length - 1 ? l(o[m]) : f(d, o[o.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: o,
    values: i,
    up: s,
    down: l,
    between: f,
    only: c,
    not: u,
    unit: n
  }, a);
}
const sl = {
  borderRadius: 4
}, ll = sl;
function Ye(t, e) {
  return e ? vt(t, e, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : t;
}
const Vr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ua = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (t) => `@media (min-width:${Vr[t]}px)`
};
function Tt(t, e, n) {
  const r = t.theme || {};
  if (Array.isArray(e)) {
    const i = r.breakpoints || Ua;
    return e.reduce((o, s, l) => (o[i.up(i.keys[l])] = n(e[l]), o), {});
  }
  if (typeof e == "object") {
    const i = r.breakpoints || Ua;
    return Object.keys(e).reduce((o, s) => {
      if (Object.keys(i.values || Vr).indexOf(s) !== -1) {
        const l = i.up(s);
        o[l] = n(e[s], s);
      } else {
        const l = s;
        o[l] = e[l];
      }
      return o;
    }, {});
  }
  return n(e);
}
function fl(t = {}) {
  var e;
  return ((e = t.keys) == null ? void 0 : e.reduce((r, a) => {
    const i = t.up(a);
    return r[i] = {}, r;
  }, {})) || {};
}
function cl(t, e) {
  return t.reduce((n, r) => {
    const a = n[r];
    return (!a || Object.keys(a).length === 0) && delete n[r], n;
  }, e);
}
function Xn(t, e, n = !0) {
  if (!e || typeof e != "string")
    return null;
  if (t && t.vars && n) {
    const r = `vars.${e}`.split(".").reduce((a, i) => a && a[i] ? a[i] : null, t);
    if (r != null)
      return r;
  }
  return e.split(".").reduce((r, a) => r && r[a] != null ? r[a] : null, t);
}
function Bn(t, e, n, r = n) {
  let a;
  return typeof t == "function" ? a = t(n) : Array.isArray(t) ? a = t[n] || r : a = Xn(t, n) || r, e && (a = e(a, r, t)), a;
}
function L(t) {
  const {
    prop: e,
    cssProperty: n = t.prop,
    themeKey: r,
    transform: a
  } = t, i = (o) => {
    if (o[e] == null)
      return null;
    const s = o[e], l = o.theme, f = Xn(l, r) || {};
    return Tt(o, s, (u) => {
      let d = Bn(f, a, u);
      return u === d && typeof u == "string" && (d = Bn(f, a, `${e}${u === "default" ? "" : te(u)}`, u)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [e], i;
}
function ul(t) {
  const e = {};
  return (n) => (e[n] === void 0 && (e[n] = t(n)), e[n]);
}
const dl = {
  m: "margin",
  p: "padding"
}, pl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ha = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ml = ul((t) => {
  if (t.length > 2)
    if (Ha[t])
      t = Ha[t];
    else
      return [t];
  const [e, n] = t.split(""), r = dl[e], a = pl[n] || "";
  return Array.isArray(a) ? a.map((i) => r + i) : [r + a];
}), Gr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Gr, ...Xr];
function on(t, e, n, r) {
  var a;
  const i = (a = Xn(t, e, !1)) != null ? a : n;
  return typeof i == "number" ? (o) => typeof o == "string" ? o : i * o : Array.isArray(i) ? (o) => typeof o == "string" ? o : i[o] : typeof i == "function" ? i : () => {
  };
}
function Zi(t) {
  return on(t, "spacing", 8);
}
function sn(t, e) {
  if (typeof e == "string" || e == null)
    return e;
  const n = Math.abs(e), r = t(n);
  return e >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function vl(t, e) {
  return (n) => t.reduce((r, a) => (r[a] = sn(e, n), r), {});
}
function hl(t, e, n, r) {
  if (e.indexOf(n) === -1)
    return null;
  const a = ml(n), i = vl(a, r), o = t[n];
  return Tt(t, o, i);
}
function Ji(t, e) {
  const n = Zi(t.theme);
  return Object.keys(t).map((r) => hl(t, e, r, n)).reduce(Ye, {});
}
function U(t) {
  return Ji(t, Gr);
}
U.propTypes = {};
U.filterProps = Gr;
function H(t) {
  return Ji(t, Xr);
}
H.propTypes = {};
H.filterProps = Xr;
function gl(t = 8) {
  if (t.mui)
    return t;
  const e = Zi({
    spacing: t
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const o = e(i);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" ");
  return n.mui = !0, n;
}
function qn(...t) {
  const e = t.reduce((r, a) => (a.filterProps.forEach((i) => {
    r[i] = a;
  }), r), {}), n = (r) => Object.keys(r).reduce((a, i) => e[i] ? Ye(a, e[i](r)) : a, {});
  return n.propTypes = {}, n.filterProps = t.reduce((r, a) => r.concat(a.filterProps), []), n;
}
function xt(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
const bl = L({
  prop: "border",
  themeKey: "borders",
  transform: xt
}), yl = L({
  prop: "borderTop",
  themeKey: "borders",
  transform: xt
}), xl = L({
  prop: "borderRight",
  themeKey: "borders",
  transform: xt
}), wl = L({
  prop: "borderBottom",
  themeKey: "borders",
  transform: xt
}), kl = L({
  prop: "borderLeft",
  themeKey: "borders",
  transform: xt
}), Ol = L({
  prop: "borderColor",
  themeKey: "palette"
}), El = L({
  prop: "borderTopColor",
  themeKey: "palette"
}), Pl = L({
  prop: "borderRightColor",
  themeKey: "palette"
}), Sl = L({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Al = L({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Zn = (t) => {
  if (t.borderRadius !== void 0 && t.borderRadius !== null) {
    const e = on(t.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: sn(e, r)
    });
    return Tt(t, t.borderRadius, n);
  }
  return null;
};
Zn.propTypes = {};
Zn.filterProps = ["borderRadius"];
qn(bl, yl, xl, wl, kl, Ol, El, Pl, Sl, Al, Zn);
const Jn = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const e = on(t.theme, "spacing", 8), n = (r) => ({
      gap: sn(e, r)
    });
    return Tt(t, t.gap, n);
  }
  return null;
};
Jn.propTypes = {};
Jn.filterProps = ["gap"];
const Qn = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const e = on(t.theme, "spacing", 8), n = (r) => ({
      columnGap: sn(e, r)
    });
    return Tt(t, t.columnGap, n);
  }
  return null;
};
Qn.propTypes = {};
Qn.filterProps = ["columnGap"];
const tr = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const e = on(t.theme, "spacing", 8), n = (r) => ({
      rowGap: sn(e, r)
    });
    return Tt(t, t.rowGap, n);
  }
  return null;
};
tr.propTypes = {};
tr.filterProps = ["rowGap"];
const Tl = L({
  prop: "gridColumn"
}), Cl = L({
  prop: "gridRow"
}), Rl = L({
  prop: "gridAutoFlow"
}), Il = L({
  prop: "gridAutoColumns"
}), $l = L({
  prop: "gridAutoRows"
}), _l = L({
  prop: "gridTemplateColumns"
}), Nl = L({
  prop: "gridTemplateRows"
}), Dl = L({
  prop: "gridTemplateAreas"
}), Ll = L({
  prop: "gridArea"
});
qn(Jn, Qn, tr, Tl, Cl, Rl, Il, $l, _l, Nl, Dl, Ll);
function Oe(t, e) {
  return e === "grey" ? e : t;
}
const Ml = L({
  prop: "color",
  themeKey: "palette",
  transform: Oe
}), jl = L({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Oe
}), Fl = L({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Oe
});
qn(Ml, jl, Fl);
function it(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const Bl = L({
  prop: "width",
  transform: it
}), qr = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const e = (n) => {
      var r, a;
      const i = ((r = t.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Vr[n];
      return i ? ((a = t.theme) == null || (a = a.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${i}${t.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: it(n)
      };
    };
    return Tt(t, t.maxWidth, e);
  }
  return null;
};
qr.filterProps = ["maxWidth"];
const zl = L({
  prop: "minWidth",
  transform: it
}), Wl = L({
  prop: "height",
  transform: it
}), Ul = L({
  prop: "maxHeight",
  transform: it
}), Hl = L({
  prop: "minHeight",
  transform: it
});
L({
  prop: "size",
  cssProperty: "width",
  transform: it
});
L({
  prop: "size",
  cssProperty: "height",
  transform: it
});
const Yl = L({
  prop: "boxSizing"
});
qn(Bl, qr, zl, Wl, Ul, Hl, Yl);
const Kl = {
  // borders
  border: {
    themeKey: "borders",
    transform: xt
  },
  borderTop: {
    themeKey: "borders",
    transform: xt
  },
  borderRight: {
    themeKey: "borders",
    transform: xt
  },
  borderBottom: {
    themeKey: "borders",
    transform: xt
  },
  borderLeft: {
    themeKey: "borders",
    transform: xt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Zn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Oe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Oe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Oe
  },
  // spacing
  p: {
    style: H
  },
  pt: {
    style: H
  },
  pr: {
    style: H
  },
  pb: {
    style: H
  },
  pl: {
    style: H
  },
  px: {
    style: H
  },
  py: {
    style: H
  },
  padding: {
    style: H
  },
  paddingTop: {
    style: H
  },
  paddingRight: {
    style: H
  },
  paddingBottom: {
    style: H
  },
  paddingLeft: {
    style: H
  },
  paddingX: {
    style: H
  },
  paddingY: {
    style: H
  },
  paddingInline: {
    style: H
  },
  paddingInlineStart: {
    style: H
  },
  paddingInlineEnd: {
    style: H
  },
  paddingBlock: {
    style: H
  },
  paddingBlockStart: {
    style: H
  },
  paddingBlockEnd: {
    style: H
  },
  m: {
    style: U
  },
  mt: {
    style: U
  },
  mr: {
    style: U
  },
  mb: {
    style: U
  },
  ml: {
    style: U
  },
  mx: {
    style: U
  },
  my: {
    style: U
  },
  margin: {
    style: U
  },
  marginTop: {
    style: U
  },
  marginRight: {
    style: U
  },
  marginBottom: {
    style: U
  },
  marginLeft: {
    style: U
  },
  marginX: {
    style: U
  },
  marginY: {
    style: U
  },
  marginInline: {
    style: U
  },
  marginInlineStart: {
    style: U
  },
  marginInlineEnd: {
    style: U
  },
  marginBlock: {
    style: U
  },
  marginBlockStart: {
    style: U
  },
  marginBlockEnd: {
    style: U
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (t) => ({
      "@media print": {
        display: t
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Jn
  },
  rowGap: {
    style: tr
  },
  columnGap: {
    style: Qn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: it
  },
  maxWidth: {
    style: qr
  },
  minWidth: {
    transform: it
  },
  height: {
    transform: it
  },
  maxHeight: {
    transform: it
  },
  minHeight: {
    transform: it
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Zr = Kl;
function Vl(...t) {
  const e = t.reduce((r, a) => r.concat(Object.keys(a)), []), n = new Set(e);
  return t.every((r) => n.size === Object.keys(r).length);
}
function Gl(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Xl() {
  function t(n, r, a, i) {
    const o = {
      [n]: r,
      theme: a
    }, s = i[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: f,
      transform: c,
      style: u
    } = s;
    if (r == null)
      return null;
    if (f === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Xn(a, f) || {};
    return u ? u(o) : Tt(o, r, (v) => {
      let p = Bn(d, c, v);
      return v === p && typeof v == "string" && (p = Bn(d, c, `${n}${v === "default" ? "" : te(v)}`, v)), l === !1 ? p : {
        [l]: p
      };
    });
  }
  function e(n) {
    var r;
    const {
      sx: a,
      theme: i = {}
    } = n || {};
    if (!a)
      return null;
    const o = (r = i.unstable_sxConfig) != null ? r : Zr;
    function s(l) {
      let f = l;
      if (typeof l == "function")
        f = l(i);
      else if (typeof l != "object")
        return l;
      if (!f)
        return null;
      const c = fl(i.breakpoints), u = Object.keys(c);
      let d = c;
      return Object.keys(f).forEach((m) => {
        const v = Gl(f[m], i);
        if (v != null)
          if (typeof v == "object")
            if (o[m])
              d = Ye(d, t(m, v, i, o));
            else {
              const p = Tt({
                theme: i
              }, v, (g) => ({
                [m]: g
              }));
              Vl(p, v) ? d[m] = e({
                sx: v,
                theme: i
              }) : d = Ye(d, p);
            }
          else
            d = Ye(d, t(m, v, i, o));
      }), cl(u, d);
    }
    return Array.isArray(a) ? a.map(s) : s(a);
  }
  return e;
}
const Qi = Xl();
Qi.filterProps = ["sx"];
const Jr = Qi, ql = ["breakpoints", "palette", "spacing", "shape"];
function Qr(t = {}, ...e) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: a,
    shape: i = {}
  } = t, o = J(t, ql), s = ol(n), l = gl(a);
  let f = vt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: l,
    shape: x({}, ll, i)
  }, o);
  return f = e.reduce((c, u) => vt(c, u), f), f.unstable_sxConfig = x({}, Zr, o == null ? void 0 : o.unstable_sxConfig), f.unstable_sx = function(u) {
    return Jr({
      sx: u,
      theme: this
    });
  }, f;
}
function Zl(t) {
  return Object.keys(t).length === 0;
}
function to(t = null) {
  const e = E.useContext(zi);
  return !e || Zl(e) ? t : e;
}
const Jl = Qr();
function eo(t = Jl) {
  return to(t);
}
function no(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = no(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function ye() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = no(t)) && (r && (r += " "), r += e);
  return r;
}
const Ql = ["variant"];
function Ya(t) {
  return t.length === 0;
}
function ro(t) {
  const {
    variant: e
  } = t, n = J(t, Ql);
  let r = e || "";
  return Object.keys(n).sort().forEach((a) => {
    a === "color" ? r += Ya(r) ? t[a] : te(t[a]) : r += `${Ya(r) ? a : te(a)}${te(t[a].toString())}`;
  }), r;
}
const tf = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ef(t) {
  return Object.keys(t).length === 0;
}
function nf(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96;
}
const rf = (t, e) => e.components && e.components[t] && e.components[t].styleOverrides ? e.components[t].styleOverrides : null, zn = (t) => {
  const e = {};
  return t && t.forEach((n) => {
    const r = ro(n.props);
    e[r] = n.style;
  }), e;
}, af = (t, e) => {
  let n = [];
  return e && e.components && e.components[t] && e.components[t].variants && (n = e.components[t].variants), zn(n);
}, Wn = (t, e, n) => {
  const {
    ownerState: r = {}
  } = t, a = [];
  return n && n.forEach((i) => {
    let o = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && t[s] !== i.props[s] && (o = !1);
    }), o && a.push(e[ro(i.props)]);
  }), a;
}, of = (t, e, n, r) => {
  var a;
  const i = n == null || (a = n.components) == null || (a = a[r]) == null ? void 0 : a.variants;
  return Wn(t, e, i);
};
function Nn(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
const sf = Qr(), lf = (t) => t && t.charAt(0).toLowerCase() + t.slice(1);
function Dn({
  defaultTheme: t,
  theme: e,
  themeId: n
}) {
  return ef(e) ? t : e[n] || e;
}
function ff(t) {
  return t ? (e, n) => n[t] : null;
}
const Ka = ({
  styledArg: t,
  props: e,
  defaultTheme: n,
  themeId: r
}) => {
  const a = t(x({}, e, {
    theme: Dn(x({}, e, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (a && a.variants && (i = a.variants, delete a.variants), i) {
    const o = Wn(e, zn(i), i);
    return [a, ...o];
  }
  return a;
};
function cf(t = {}) {
  const {
    themeId: e,
    defaultTheme: n = sf,
    rootShouldForwardProp: r = Nn,
    slotShouldForwardProp: a = Nn
  } = t, i = (o) => Jr(x({}, o, {
    theme: Dn(x({}, o, {
      defaultTheme: n,
      themeId: e
    }))
  }));
  return i.__mui_systemSx = !0, (o, s = {}) => {
    rl(o, (h) => h.filter((b) => !(b != null && b.__mui_systemSx)));
    const {
      name: l,
      slot: f,
      skipVariantsResolver: c,
      skipSx: u,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = ff(lf(f))
    } = s, m = J(s, tf), v = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), p = u || !1;
    let g, O = Nn;
    f === "Root" || f === "root" ? O = r : f ? O = a : nf(o) && (O = void 0);
    const k = nl(o, x({
      shouldForwardProp: O,
      label: g
    }, m)), y = (h, ...b) => {
      const A = b ? b.map((w) => {
        if (typeof w == "function" && w.__emotion_real !== w)
          return (R) => Ka({
            styledArg: w,
            props: R,
            defaultTheme: n,
            themeId: e
          });
        if (Ft(w)) {
          let R = w, j;
          return w && w.variants && (j = w.variants, delete R.variants, R = (M) => {
            let K = w;
            return Wn(M, zn(j), j).forEach((D) => {
              K = vt(K, D);
            }), K;
          }), R;
        }
        return w;
      }) : [];
      let T = h;
      if (Ft(h)) {
        let w;
        h && h.variants && (w = h.variants, delete T.variants, T = (R) => {
          let j = h;
          return Wn(R, zn(w), w).forEach((K) => {
            j = vt(j, K);
          }), j;
        });
      } else
        typeof h == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        h.__emotion_real !== h && (T = (w) => Ka({
          styledArg: h,
          props: w,
          defaultTheme: n,
          themeId: e
        }));
      l && d && A.push((w) => {
        const R = Dn(x({}, w, {
          defaultTheme: n,
          themeId: e
        })), j = rf(l, R);
        if (j) {
          const M = {};
          return Object.entries(j).forEach(([K, I]) => {
            M[K] = typeof I == "function" ? I(x({}, w, {
              theme: R
            })) : I;
          }), d(w, M);
        }
        return null;
      }), l && !v && A.push((w) => {
        const R = Dn(x({}, w, {
          defaultTheme: n,
          themeId: e
        }));
        return of(w, af(l, R), R, l);
      }), p || A.push(i);
      const _ = A.length - b.length;
      if (Array.isArray(h) && _ > 0) {
        const w = new Array(_).fill("");
        T = [...h, ...w], T.raw = [...h.raw, ...w];
      }
      const C = k(T, ...A);
      return o.muiName && (C.muiName = o.muiName), C;
    };
    return k.withConfig && (y.withConfig = k.withConfig), y;
  };
}
function uf(t) {
  const {
    theme: e,
    name: n,
    props: r
  } = t;
  return !e || !e.components || !e.components[n] || !e.components[n].defaultProps ? r : Gi(e.components[n].defaultProps, r);
}
function df({
  props: t,
  name: e,
  defaultTheme: n,
  themeId: r
}) {
  let a = eo(n);
  return r && (a = a[r] || a), uf({
    theme: a,
    name: e,
    props: t
  });
}
function ta(t, e = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function pf(t) {
  t = t.slice(1);
  const e = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let n = t.match(e);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ne(t) {
  if (t.type)
    return t;
  if (t.charAt(0) === "#")
    return ne(pf(t));
  const e = t.indexOf("("), n = t.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Pe(9, t));
  let r = t.substring(e + 1, t.length - 1), a;
  if (n === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(Pe(10, a));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: a
  };
}
function er(t) {
  const {
    type: e,
    colorSpace: n
  } = t;
  let {
    values: r
  } = t;
  return e.indexOf("rgb") !== -1 ? r = r.map((a, i) => i < 3 ? parseInt(a, 10) : a) : e.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
}
function mf(t) {
  t = ne(t);
  const {
    values: e
  } = t, n = e[0], r = e[1] / 100, a = e[2] / 100, i = r * Math.min(a, 1 - a), o = (f, c = (f + n / 30) % 12) => a - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return t.type === "hsla" && (s += "a", l.push(e[3])), er({
    type: s,
    values: l
  });
}
function Va(t) {
  t = ne(t);
  let e = t.type === "hsl" || t.type === "hsla" ? ne(mf(t)).values : t.values;
  return e = e.map((n) => (t.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
}
function vf(t, e) {
  const n = Va(t), r = Va(e);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ao(t, e) {
  return t = ne(t), e = ta(e), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${e}` : t.values[3] = e, er(t);
}
function hf(t, e) {
  if (t = ne(t), e = ta(e), t.type.indexOf("hsl") !== -1)
    t.values[2] *= 1 - e;
  else if (t.type.indexOf("rgb") !== -1 || t.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      t.values[n] *= 1 - e;
  return er(t);
}
function gf(t, e) {
  if (t = ne(t), e = ta(e), t.type.indexOf("hsl") !== -1)
    t.values[2] += (100 - t.values[2]) * e;
  else if (t.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      t.values[n] += (255 - t.values[n]) * e;
  else if (t.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      t.values[n] += (1 - t.values[n]) * e;
  return er(t);
}
function bf(t, e) {
  return x({
    toolbar: {
      minHeight: 56,
      [t.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [t.up("sm")]: {
        minHeight: 64
      }
    }
  }, e);
}
const yf = ["mode", "contrastThreshold", "tonalOffset"], Ga = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: qe.white,
    default: qe.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, vr = {
  text: {
    primary: qe.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: qe.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Xa(t, e, n, r) {
  const a = r.light || r, i = r.dark || r * 1.5;
  t[e] || (t.hasOwnProperty(n) ? t[e] = t[n] : e === "light" ? t.light = gf(t.main, a) : e === "dark" && (t.dark = hf(t.main, i)));
}
function xf(t = "light") {
  return t === "dark" ? {
    main: me[200],
    light: me[50],
    dark: me[400]
  } : {
    main: me[700],
    light: me[400],
    dark: me[800]
  };
}
function wf(t = "light") {
  return t === "dark" ? {
    main: pe[200],
    light: pe[50],
    dark: pe[400]
  } : {
    main: pe[500],
    light: pe[300],
    dark: pe[700]
  };
}
function kf(t = "light") {
  return t === "dark" ? {
    main: de[500],
    light: de[300],
    dark: de[700]
  } : {
    main: de[700],
    light: de[400],
    dark: de[800]
  };
}
function Of(t = "light") {
  return t === "dark" ? {
    main: ve[400],
    light: ve[300],
    dark: ve[700]
  } : {
    main: ve[700],
    light: ve[500],
    dark: ve[900]
  };
}
function Ef(t = "light") {
  return t === "dark" ? {
    main: he[400],
    light: he[300],
    dark: he[700]
  } : {
    main: he[800],
    light: he[500],
    dark: he[900]
  };
}
function Pf(t = "light") {
  return t === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fe[500],
    dark: Fe[900]
  };
}
function Sf(t) {
  const {
    mode: e = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = t, a = J(t, yf), i = t.primary || xf(e), o = t.secondary || wf(e), s = t.error || kf(e), l = t.info || Of(e), f = t.success || Ef(e), c = t.warning || Pf(e);
  function u(p) {
    return vf(p, vr.text.primary) >= n ? vr.text.primary : Ga.text.primary;
  }
  const d = ({
    color: p,
    name: g,
    mainShade: O = 500,
    lightShade: k = 300,
    darkShade: y = 700
  }) => {
    if (p = x({}, p), !p.main && p[O] && (p.main = p[O]), !p.hasOwnProperty("main"))
      throw new Error(Pe(11, g ? ` (${g})` : "", O));
    if (typeof p.main != "string")
      throw new Error(Pe(12, g ? ` (${g})` : "", JSON.stringify(p.main)));
    return Xa(p, "light", k, r), Xa(p, "dark", y, r), p.contrastText || (p.contrastText = u(p.main)), p;
  }, m = {
    dark: vr,
    light: Ga
  };
  return vt(x({
    // A collection of common colors.
    common: x({}, qe),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: e,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: o,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Ns,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: u,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, m[e]), a);
}
const Af = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Tf(t) {
  return Math.round(t * 1e5) / 1e5;
}
const qa = {
  textTransform: "uppercase"
}, Za = '"Roboto", "Helvetica", "Arial", sans-serif';
function Cf(t, e) {
  const n = typeof e == "function" ? e(t) : e, {
    fontFamily: r = Za,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: u
  } = n, d = J(n, Af), m = a / 14, v = u || ((O) => `${O / f * m}rem`), p = (O, k, y, h, b) => x({
    fontFamily: r,
    fontWeight: O,
    fontSize: v(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: y
  }, r === Za ? {
    letterSpacing: `${Tf(h / k)}em`
  } : {}, b, c), g = {
    h1: p(i, 96, 1.167, -1.5),
    h2: p(i, 60, 1.2, -0.5),
    h3: p(o, 48, 1.167, 0),
    h4: p(o, 34, 1.235, 0.25),
    h5: p(o, 24, 1.334, 0),
    h6: p(s, 20, 1.6, 0.15),
    subtitle1: p(o, 16, 1.75, 0.15),
    subtitle2: p(s, 14, 1.57, 0.1),
    body1: p(o, 16, 1.5, 0.15),
    body2: p(o, 14, 1.43, 0.15),
    button: p(s, 14, 1.75, 0.4, qa),
    caption: p(o, 12, 1.66, 0.4),
    overline: p(o, 12, 2.66, 1, qa),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return vt(x({
    htmlFontSize: f,
    pxToRem: v,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: i,
    fontWeightRegular: o,
    fontWeightMedium: s,
    fontWeightBold: l
  }, g), d, {
    clone: !1
    // No need to clone deep
  });
}
const Rf = 0.2, If = 0.14, $f = 0.12;
function W(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Rf})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${If})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${$f})`].join(",");
}
const _f = ["none", W(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), W(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), W(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), W(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), W(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), W(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), W(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), W(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), W(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), W(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), W(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), W(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), W(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), W(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), W(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), W(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), W(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), W(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), W(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), W(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), W(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), W(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), W(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), W(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Nf = _f, Df = ["duration", "easing", "delay"], Lf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Mf = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ja(t) {
  return `${Math.round(t)}ms`;
}
function jf(t) {
  if (!t)
    return 0;
  const e = t / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Ff(t) {
  const e = x({}, Lf, t.easing), n = x({}, Mf, t.duration);
  return x({
    getAutoHeightDuration: jf,
    create: (a = ["all"], i = {}) => {
      const {
        duration: o = n.standard,
        easing: s = e.easeInOut,
        delay: l = 0
      } = i;
      return J(i, Df), (Array.isArray(a) ? a : [a]).map((f) => `${f} ${typeof o == "string" ? o : Ja(o)} ${s} ${typeof l == "string" ? l : Ja(l)}`).join(",");
    }
  }, t, {
    easing: e,
    duration: n
  });
}
const Bf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, zf = Bf, Wf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Uf(t = {}, ...e) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: a = {},
    typography: i = {}
  } = t, o = J(t, Wf);
  if (t.vars)
    throw new Error(Pe(18));
  const s = Sf(r), l = Qr(t);
  let f = vt(l, {
    mixins: bf(l.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Nf.slice(),
    typography: Cf(s, i),
    transitions: Ff(a),
    zIndex: x({}, zf)
  });
  return f = vt(f, o), f = e.reduce((c, u) => vt(c, u), f), f.unstable_sxConfig = x({}, Zr, o == null ? void 0 : o.unstable_sxConfig), f.unstable_sx = function(u) {
    return Jr({
      sx: u,
      theme: this
    });
  }, f;
}
const Hf = Uf(), ea = Hf;
function io() {
  const t = eo(ea);
  return t[Kr] || t;
}
function oo({
  props: t,
  name: e
}) {
  return df({
    props: t,
    name: e,
    defaultTheme: ea,
    themeId: Kr
  });
}
const Yf = (t) => Nn(t) && t !== "classes", Kf = cf({
  themeId: Kr,
  defaultTheme: ea,
  rootShouldForwardProp: Yf
}), nr = Kf;
function Pr(t, e) {
  return Pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Pr(t, e);
}
function Vf(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Pr(t, e);
}
const Qa = {
  disabled: !1
}, so = At.createContext(null);
var Gf = function(e) {
  return e.scrollTop;
}, We = "unmounted", qt = "exited", Zt = "entering", be = "entered", Sr = "exiting", _t = /* @__PURE__ */ function(t) {
  Vf(e, t);
  function e(r, a) {
    var i;
    i = t.call(this, r, a) || this;
    var o = a, s = o && !o.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = qt, i.appearStatus = Zt) : l = be : r.unmountOnExit || r.mountOnEnter ? l = We : l = qt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  e.getDerivedStateFromProps = function(a, i) {
    var o = a.in;
    return o && i.status === We ? {
      status: qt
    } : null;
  };
  var n = e.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(a) {
    var i = null;
    if (a !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Zt && o !== be && (i = Zt) : (o === Zt || o === be) && (i = Sr);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var a = this.props.timeout, i, o, s;
    return i = o = s = a, a != null && typeof a != "number" && (i = a.exit, o = a.enter, s = a.appear !== void 0 ? a.appear : o), {
      exit: i,
      enter: o,
      appear: s
    };
  }, n.updateStatus = function(a, i) {
    if (a === void 0 && (a = !1), i !== null)
      if (this.cancelNextCallback(), i === Zt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : xn.findDOMNode(this);
          o && Gf(o);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === qt && this.setState({
        status: We
      });
  }, n.performEnter = function(a) {
    var i = this, o = this.props.enter, s = this.context ? this.context.isMounting : a, l = this.props.nodeRef ? [s] : [xn.findDOMNode(this), s], f = l[0], c = l[1], u = this.getTimeouts(), d = s ? u.appear : u.enter;
    if (!a && !o || Qa.disabled) {
      this.safeSetState({
        status: be
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, c), this.safeSetState({
      status: Zt
    }, function() {
      i.props.onEntering(f, c), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: be
        }, function() {
          i.props.onEntered(f, c);
        });
      });
    });
  }, n.performExit = function() {
    var a = this, i = this.props.exit, o = this.getTimeouts(), s = this.props.nodeRef ? void 0 : xn.findDOMNode(this);
    if (!i || Qa.disabled) {
      this.safeSetState({
        status: qt
      }, function() {
        a.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Sr
    }, function() {
      a.props.onExiting(s), a.onTransitionEnd(o.exit, function() {
        a.safeSetState({
          status: qt
        }, function() {
          a.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(a, i) {
    i = this.setNextCallback(i), this.setState(a, i);
  }, n.setNextCallback = function(a) {
    var i = this, o = !0;
    return this.nextCallback = function(s) {
      o && (o = !1, i.nextCallback = null, a(s));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(a, i) {
    this.setNextCallback(i);
    var o = this.props.nodeRef ? this.props.nodeRef.current : xn.findDOMNode(this), s = a == null && !this.props.addEndListener;
    if (!o || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], f = l[0], c = l[1];
      this.props.addEndListener(f, c);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, n.render = function() {
    var a = this.state.status;
    if (a === We)
      return null;
    var i = this.props, o = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = J(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ At.createElement(so.Provider, {
        value: null
      }, typeof o == "function" ? o(a, s) : At.cloneElement(At.Children.only(o), s))
    );
  }, e;
}(At.Component);
_t.contextType = so;
_t.propTypes = {};
function ge() {
}
_t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ge,
  onEntering: ge,
  onEntered: ge,
  onExit: ge,
  onExiting: ge,
  onExited: ge
};
_t.UNMOUNTED = We;
_t.EXITED = qt;
_t.ENTERING = Zt;
_t.ENTERED = be;
_t.EXITING = Sr;
const Xf = _t, qf = (t) => t.scrollTop;
function ti(t, e) {
  var n, r;
  const {
    timeout: a,
    easing: i,
    style: o = {}
  } = t;
  return {
    duration: (n = o.transitionDuration) != null ? n : typeof a == "number" ? a : a[e.mode] || 0,
    easing: (r = o.transitionTimingFunction) != null ? r : typeof i == "object" ? i[e.mode] : i,
    delay: o.transitionDelay
  };
}
function Zf(t) {
  return typeof t == "string";
}
function Ue(t, e, n) {
  return t === void 0 || Zf(t) ? e : x({}, e, {
    ownerState: x({}, e.ownerState, n)
  });
}
const Jf = {
  disableDefaultClasses: !1
}, Qf = /* @__PURE__ */ E.createContext(Jf);
function tc(t) {
  const {
    disableDefaultClasses: e
  } = E.useContext(Qf);
  return (n) => e ? "" : t(n);
}
function ec(t, e = []) {
  if (t === void 0)
    return {};
  const n = {};
  return Object.keys(t).filter((r) => r.match(/^on[A-Z]/) && typeof t[r] == "function" && !e.includes(r)).forEach((r) => {
    n[r] = t[r];
  }), n;
}
function nc(t, e, n) {
  return typeof t == "function" ? t(e, n) : t;
}
function ei(t) {
  if (t === void 0)
    return {};
  const e = {};
  return Object.keys(t).filter((n) => !(n.match(/^on[A-Z]/) && typeof t[n] == "function")).forEach((n) => {
    e[n] = t[n];
  }), e;
}
function rc(t) {
  const {
    getSlotProps: e,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: i
  } = t;
  if (!e) {
    const m = ye(n == null ? void 0 : n.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), v = x({}, n == null ? void 0 : n.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), p = x({}, n, a, r);
    return m.length > 0 && (p.className = m), Object.keys(v).length > 0 && (p.style = v), {
      props: p,
      internalRef: void 0
    };
  }
  const o = ec(x({}, a, r)), s = ei(r), l = ei(a), f = e(o), c = ye(f == null ? void 0 : f.className, n == null ? void 0 : n.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), u = x({}, f == null ? void 0 : f.style, n == null ? void 0 : n.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), d = x({}, f, n, l, s);
  return c.length > 0 && (d.className = c), Object.keys(u).length > 0 && (d.style = u), {
    props: d,
    internalRef: f.ref
  };
}
const ac = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ic(t) {
  var e;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: i = !1
  } = t, o = J(t, ac), s = i ? {} : nc(r, a), {
    props: l,
    internalRef: f
  } = rc(x({}, o, {
    externalSlotProps: s
  })), c = Se(f, s == null ? void 0 : s.ref, (e = t.additionalProps) == null ? void 0 : e.ref);
  return Ue(n, x({}, l, {
    ref: c
  }), a);
}
var tt = "top", ft = "bottom", ct = "right", et = "left", na = "auto", ln = [tt, ft, ct, et], Ae = "start", Je = "end", oc = "clippingParents", lo = "viewport", Be = "popper", sc = "reference", ni = /* @__PURE__ */ ln.reduce(function(t, e) {
  return t.concat([e + "-" + Ae, e + "-" + Je]);
}, []), fo = /* @__PURE__ */ [].concat(ln, [na]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Ae, e + "-" + Je]);
}, []), lc = "beforeRead", fc = "read", cc = "afterRead", uc = "beforeMain", dc = "main", pc = "afterMain", mc = "beforeWrite", vc = "write", hc = "afterWrite", gc = [lc, fc, cc, uc, dc, pc, mc, vc, hc];
function Et(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function ot(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function re(t) {
  var e = ot(t).Element;
  return t instanceof e || t instanceof Element;
}
function lt(t) {
  var e = ot(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function ra(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = ot(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function bc(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, a = e.attributes[n] || {}, i = e.elements[n];
    !lt(i) || !Et(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(o) {
      var s = a[o];
      s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function yc(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var a = e.elements[r], i = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s = o.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !lt(a) || !Et(a) || (Object.assign(a.style, s), Object.keys(i).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const xc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bc,
  effect: yc,
  requires: ["computeStyles"]
};
function Ot(t) {
  return t.split("-")[0];
}
var ee = Math.max, Un = Math.min, Te = Math.round;
function Ar() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function co() {
  return !/^((?!chrome|android).)*safari/i.test(Ar());
}
function Ce(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), a = 1, i = 1;
  e && lt(t) && (a = t.offsetWidth > 0 && Te(r.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && Te(r.height) / t.offsetHeight || 1);
  var o = re(t) ? ot(t) : window, s = o.visualViewport, l = !co() && n, f = (r.left + (l && s ? s.offsetLeft : 0)) / a, c = (r.top + (l && s ? s.offsetTop : 0)) / i, u = r.width / a, d = r.height / i;
  return {
    width: u,
    height: d,
    top: c,
    right: f + u,
    bottom: c + d,
    left: f,
    x: f,
    y: c
  };
}
function aa(t) {
  var e = Ce(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function uo(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && ra(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ct(t) {
  return ot(t).getComputedStyle(t);
}
function wc(t) {
  return ["table", "td", "th"].indexOf(Et(t)) >= 0;
}
function Ht(t) {
  return ((re(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function rr(t) {
  return Et(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (ra(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ht(t)
  );
}
function ri(t) {
  return !lt(t) || // https://github.com/popperjs/popper-core/issues/837
  Ct(t).position === "fixed" ? null : t.offsetParent;
}
function kc(t) {
  var e = /firefox/i.test(Ar()), n = /Trident/i.test(Ar());
  if (n && lt(t)) {
    var r = Ct(t);
    if (r.position === "fixed")
      return null;
  }
  var a = rr(t);
  for (ra(a) && (a = a.host); lt(a) && ["html", "body"].indexOf(Et(a)) < 0; ) {
    var i = Ct(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function fn(t) {
  for (var e = ot(t), n = ri(t); n && wc(n) && Ct(n).position === "static"; )
    n = ri(n);
  return n && (Et(n) === "html" || Et(n) === "body" && Ct(n).position === "static") ? e : n || kc(t) || e;
}
function ia(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ke(t, e, n) {
  return ee(t, Un(e, n));
}
function Oc(t, e, n) {
  var r = Ke(t, e, n);
  return r > n ? n : r;
}
function po() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mo(t) {
  return Object.assign({}, po(), t);
}
function vo(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var Ec = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, mo(typeof e != "number" ? e : vo(e, ln));
};
function Pc(t) {
  var e, n = t.state, r = t.name, a = t.options, i = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Ot(n.placement), l = ia(s), f = [et, ct].indexOf(s) >= 0, c = f ? "height" : "width";
  if (!(!i || !o)) {
    var u = Ec(a.padding, n), d = aa(i), m = l === "y" ? tt : et, v = l === "y" ? ft : ct, p = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], g = o[l] - n.rects.reference[l], O = fn(i), k = O ? l === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, y = p / 2 - g / 2, h = u[m], b = k - d[c] - u[v], A = k / 2 - d[c] / 2 + y, T = Ke(h, A, b), _ = l;
    n.modifiersData[r] = (e = {}, e[_] = T, e.centerOffset = T - A, e);
  }
}
function Sc(t) {
  var e = t.state, n = t.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = e.elements.popper.querySelector(a), !a) || uo(e.elements.popper, a) && (e.elements.arrow = a));
}
const Ac = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Pc,
  effect: Sc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Re(t) {
  return t.split("-")[1];
}
var Tc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Cc(t, e) {
  var n = t.x, r = t.y, a = e.devicePixelRatio || 1;
  return {
    x: Te(n * a) / a || 0,
    y: Te(r * a) / a || 0
  };
}
function ai(t) {
  var e, n = t.popper, r = t.popperRect, a = t.placement, i = t.variation, o = t.offsets, s = t.position, l = t.gpuAcceleration, f = t.adaptive, c = t.roundOffsets, u = t.isFixed, d = o.x, m = d === void 0 ? 0 : d, v = o.y, p = v === void 0 ? 0 : v, g = typeof c == "function" ? c({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  m = g.x, p = g.y;
  var O = o.hasOwnProperty("x"), k = o.hasOwnProperty("y"), y = et, h = tt, b = window;
  if (f) {
    var A = fn(n), T = "clientHeight", _ = "clientWidth";
    if (A === ot(n) && (A = Ht(n), Ct(A).position !== "static" && s === "absolute" && (T = "scrollHeight", _ = "scrollWidth")), A = A, a === tt || (a === et || a === ct) && i === Je) {
      h = ft;
      var C = u && A === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[T]
      );
      p -= C - r.height, p *= l ? 1 : -1;
    }
    if (a === et || (a === tt || a === ft) && i === Je) {
      y = ct;
      var w = u && A === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[_]
      );
      m -= w - r.width, m *= l ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: s
  }, f && Tc), j = c === !0 ? Cc({
    x: m,
    y: p
  }, ot(n)) : {
    x: m,
    y: p
  };
  if (m = j.x, p = j.y, l) {
    var M;
    return Object.assign({}, R, (M = {}, M[h] = k ? "0" : "", M[y] = O ? "0" : "", M.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", M));
  }
  return Object.assign({}, R, (e = {}, e[h] = k ? p + "px" : "", e[y] = O ? m + "px" : "", e.transform = "", e));
}
function Rc(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, i = n.adaptive, o = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, f = {
    placement: Ot(e.placement),
    variation: Re(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: a,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ai(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ai(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Ic = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Rc,
  data: {}
};
var wn = {
  passive: !0
};
function $c(t) {
  var e = t.state, n = t.instance, r = t.options, a = r.scroll, i = a === void 0 ? !0 : a, o = r.resize, s = o === void 0 ? !0 : o, l = ot(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && f.forEach(function(c) {
    c.addEventListener("scroll", n.update, wn);
  }), s && l.addEventListener("resize", n.update, wn), function() {
    i && f.forEach(function(c) {
      c.removeEventListener("scroll", n.update, wn);
    }), s && l.removeEventListener("resize", n.update, wn);
  };
}
const _c = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $c,
  data: {}
};
var Nc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ln(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Nc[e];
  });
}
var Dc = {
  start: "end",
  end: "start"
};
function ii(t) {
  return t.replace(/start|end/g, function(e) {
    return Dc[e];
  });
}
function oa(t) {
  var e = ot(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function sa(t) {
  return Ce(Ht(t)).left + oa(t).scrollLeft;
}
function Lc(t, e) {
  var n = ot(t), r = Ht(t), a = n.visualViewport, i = r.clientWidth, o = r.clientHeight, s = 0, l = 0;
  if (a) {
    i = a.width, o = a.height;
    var f = co();
    (f || !f && e === "fixed") && (s = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: s + sa(t),
    y: l
  };
}
function Mc(t) {
  var e, n = Ht(t), r = oa(t), a = (e = t.ownerDocument) == null ? void 0 : e.body, i = ee(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = ee(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + sa(t), l = -r.scrollTop;
  return Ct(a || n).direction === "rtl" && (s += ee(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: s,
    y: l
  };
}
function la(t) {
  var e = Ct(t), n = e.overflow, r = e.overflowX, a = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function ho(t) {
  return ["html", "body", "#document"].indexOf(Et(t)) >= 0 ? t.ownerDocument.body : lt(t) && la(t) ? t : ho(rr(t));
}
function Ve(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = ho(t), a = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = ot(r), o = a ? [i].concat(i.visualViewport || [], la(r) ? r : []) : r, s = e.concat(o);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ve(rr(o)))
  );
}
function Tr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function jc(t, e) {
  var n = Ce(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function oi(t, e, n) {
  return e === lo ? Tr(Lc(t, n)) : re(e) ? jc(e, n) : Tr(Mc(Ht(t)));
}
function Fc(t) {
  var e = Ve(rr(t)), n = ["absolute", "fixed"].indexOf(Ct(t).position) >= 0, r = n && lt(t) ? fn(t) : t;
  return re(r) ? e.filter(function(a) {
    return re(a) && uo(a, r) && Et(a) !== "body";
  }) : [];
}
function Bc(t, e, n, r) {
  var a = e === "clippingParents" ? Fc(t) : [].concat(e), i = [].concat(a, [n]), o = i[0], s = i.reduce(function(l, f) {
    var c = oi(t, f, r);
    return l.top = ee(c.top, l.top), l.right = Un(c.right, l.right), l.bottom = Un(c.bottom, l.bottom), l.left = ee(c.left, l.left), l;
  }, oi(t, o, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function go(t) {
  var e = t.reference, n = t.element, r = t.placement, a = r ? Ot(r) : null, i = r ? Re(r) : null, o = e.x + e.width / 2 - n.width / 2, s = e.y + e.height / 2 - n.height / 2, l;
  switch (a) {
    case tt:
      l = {
        x: o,
        y: e.y - n.height
      };
      break;
    case ft:
      l = {
        x: o,
        y: e.y + e.height
      };
      break;
    case ct:
      l = {
        x: e.x + e.width,
        y: s
      };
      break;
    case et:
      l = {
        x: e.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var f = a ? ia(a) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (i) {
      case Ae:
        l[f] = l[f] - (e[c] / 2 - n[c] / 2);
        break;
      case Je:
        l[f] = l[f] + (e[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Qe(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, a = r === void 0 ? t.placement : r, i = n.strategy, o = i === void 0 ? t.strategy : i, s = n.boundary, l = s === void 0 ? oc : s, f = n.rootBoundary, c = f === void 0 ? lo : f, u = n.elementContext, d = u === void 0 ? Be : u, m = n.altBoundary, v = m === void 0 ? !1 : m, p = n.padding, g = p === void 0 ? 0 : p, O = mo(typeof g != "number" ? g : vo(g, ln)), k = d === Be ? sc : Be, y = t.rects.popper, h = t.elements[v ? k : d], b = Bc(re(h) ? h : h.contextElement || Ht(t.elements.popper), l, c, o), A = Ce(t.elements.reference), T = go({
    reference: A,
    element: y,
    strategy: "absolute",
    placement: a
  }), _ = Tr(Object.assign({}, y, T)), C = d === Be ? _ : A, w = {
    top: b.top - C.top + O.top,
    bottom: C.bottom - b.bottom + O.bottom,
    left: b.left - C.left + O.left,
    right: C.right - b.right + O.right
  }, R = t.modifiersData.offset;
  if (d === Be && R) {
    var j = R[a];
    Object.keys(w).forEach(function(M) {
      var K = [ct, ft].indexOf(M) >= 0 ? 1 : -1, I = [tt, ft].indexOf(M) >= 0 ? "y" : "x";
      w[M] += j[I] * K;
    });
  }
  return w;
}
function zc(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, a = n.boundary, i = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? fo : l, c = Re(r), u = c ? s ? ni : ni.filter(function(v) {
    return Re(v) === c;
  }) : ln, d = u.filter(function(v) {
    return f.indexOf(v) >= 0;
  });
  d.length === 0 && (d = u);
  var m = d.reduce(function(v, p) {
    return v[p] = Qe(t, {
      placement: p,
      boundary: a,
      rootBoundary: i,
      padding: o
    })[Ot(p)], v;
  }, {});
  return Object.keys(m).sort(function(v, p) {
    return m[v] - m[p];
  });
}
function Wc(t) {
  if (Ot(t) === na)
    return [];
  var e = Ln(t);
  return [ii(t), e, ii(e)];
}
function Uc(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var a = n.mainAxis, i = a === void 0 ? !0 : a, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, f = n.padding, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.flipVariations, v = m === void 0 ? !0 : m, p = n.allowedAutoPlacements, g = e.options.placement, O = Ot(g), k = O === g, y = l || (k || !v ? [Ln(g)] : Wc(g)), h = [g].concat(y).reduce(function(Pt, ht) {
      return Pt.concat(Ot(ht) === na ? zc(e, {
        placement: ht,
        boundary: c,
        rootBoundary: u,
        padding: f,
        flipVariations: v,
        allowedAutoPlacements: p
      }) : ht);
    }, []), b = e.rects.reference, A = e.rects.popper, T = /* @__PURE__ */ new Map(), _ = !0, C = h[0], w = 0; w < h.length; w++) {
      var R = h[w], j = Ot(R), M = Re(R) === Ae, K = [tt, ft].indexOf(j) >= 0, I = K ? "width" : "height", D = Qe(e, {
        placement: R,
        boundary: c,
        rootBoundary: u,
        altBoundary: d,
        padding: f
      }), F = K ? M ? ct : et : M ? ft : tt;
      b[I] > A[I] && (F = Ln(F));
      var q = Ln(F), V = [];
      if (i && V.push(D[j] <= 0), s && V.push(D[F] <= 0, D[q] <= 0), V.every(function(Pt) {
        return Pt;
      })) {
        C = R, _ = !1;
        break;
      }
      T.set(R, V);
    }
    if (_)
      for (var nt = v ? 3 : 1, oe = function(ht) {
        var Dt = h.find(function(Lt) {
          var Z = T.get(Lt);
          if (Z)
            return Z.slice(0, ht).every(function(ut) {
              return ut;
            });
        });
        if (Dt)
          return C = Dt, "break";
      }, Yt = nt; Yt > 0; Yt--) {
        var Kt = oe(Yt);
        if (Kt === "break")
          break;
      }
    e.placement !== C && (e.modifiersData[r]._skip = !0, e.placement = C, e.reset = !0);
  }
}
const Hc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Uc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function si(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function li(t) {
  return [tt, ct, ft, et].some(function(e) {
    return t[e] >= 0;
  });
}
function Yc(t) {
  var e = t.state, n = t.name, r = e.rects.reference, a = e.rects.popper, i = e.modifiersData.preventOverflow, o = Qe(e, {
    elementContext: "reference"
  }), s = Qe(e, {
    altBoundary: !0
  }), l = si(o, r), f = si(s, a, i), c = li(l), u = li(f);
  e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": u
  });
}
const Kc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Yc
};
function Vc(t, e, n) {
  var r = Ot(t), a = [et, tt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, o = i[0], s = i[1];
  return o = o || 0, s = (s || 0) * a, [et, ct].indexOf(r) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function Gc(t) {
  var e = t.state, n = t.options, r = t.name, a = n.offset, i = a === void 0 ? [0, 0] : a, o = fo.reduce(function(c, u) {
    return c[u] = Vc(u, e.rects, i), c;
  }, {}), s = o[e.placement], l = s.x, f = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += f), e.modifiersData[r] = o;
}
const Xc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Gc
};
function qc(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = go({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Zc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qc,
  data: {}
};
function Jc(t) {
  return t === "x" ? "y" : "x";
}
function Qc(t) {
  var e = t.state, n = t.options, r = t.name, a = n.mainAxis, i = a === void 0 ? !0 : a, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, f = n.rootBoundary, c = n.altBoundary, u = n.padding, d = n.tether, m = d === void 0 ? !0 : d, v = n.tetherOffset, p = v === void 0 ? 0 : v, g = Qe(e, {
    boundary: l,
    rootBoundary: f,
    padding: u,
    altBoundary: c
  }), O = Ot(e.placement), k = Re(e.placement), y = !k, h = ia(O), b = Jc(h), A = e.modifiersData.popperOffsets, T = e.rects.reference, _ = e.rects.popper, C = typeof p == "function" ? p(Object.assign({}, e.rects, {
    placement: e.placement
  })) : p, w = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), R = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (A) {
    if (i) {
      var M, K = h === "y" ? tt : et, I = h === "y" ? ft : ct, D = h === "y" ? "height" : "width", F = A[h], q = F + g[K], V = F - g[I], nt = m ? -_[D] / 2 : 0, oe = k === Ae ? T[D] : _[D], Yt = k === Ae ? -_[D] : -T[D], Kt = e.elements.arrow, Pt = m && Kt ? aa(Kt) : {
        width: 0,
        height: 0
      }, ht = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : po(), Dt = ht[K], Lt = ht[I], Z = Ke(0, T[D], Pt[D]), ut = y ? T[D] / 2 - nt - Z - Dt - w.mainAxis : oe - Z - Dt - w.mainAxis, se = y ? -T[D] / 2 + nt + Z + Lt + w.mainAxis : Yt + Z + Lt + w.mainAxis, gt = e.elements.arrow && fn(e.elements.arrow), lr = gt ? h === "y" ? gt.clientTop || 0 : gt.clientLeft || 0 : 0, pn = (M = R == null ? void 0 : R[h]) != null ? M : 0, mn = F + ut - pn - lr, bt = F + se - pn, le = Ke(m ? Un(q, mn) : q, F, m ? ee(V, bt) : V);
      A[h] = le, j[h] = le - F;
    }
    if (s) {
      var vn, Vt = h === "x" ? tt : et, hn = h === "x" ? ft : ct, dt = A[b], fe = b === "y" ? "height" : "width", Gt = dt + g[Vt], ce = dt - g[hn], Mt = [tt, et].indexOf(O) !== -1, Xt = (vn = R == null ? void 0 : R[b]) != null ? vn : 0, yt = Mt ? Gt : dt - T[fe] - _[fe] - Xt + w.altAxis, Ne = Mt ? dt + T[fe] + _[fe] - Xt - w.altAxis : ce, gn = m && Mt ? Oc(yt, dt, Ne) : Ke(m ? yt : Gt, dt, m ? Ne : ce);
      A[b] = gn, j[b] = gn - dt;
    }
    e.modifiersData[r] = j;
  }
}
const tu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Qc,
  requiresIfExists: ["offset"]
};
function eu(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function nu(t) {
  return t === ot(t) || !lt(t) ? oa(t) : eu(t);
}
function ru(t) {
  var e = t.getBoundingClientRect(), n = Te(e.width) / t.offsetWidth || 1, r = Te(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function au(t, e, n) {
  n === void 0 && (n = !1);
  var r = lt(e), a = lt(e) && ru(e), i = Ht(e), o = Ce(t, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Et(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  la(i)) && (s = nu(e)), lt(e) ? (l = Ce(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : i && (l.x = sa(i))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function iu(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function a(i) {
    n.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(s) {
      if (!n.has(s)) {
        var l = e.get(s);
        l && a(l);
      }
    }), r.push(i);
  }
  return t.forEach(function(i) {
    n.has(i.name) || a(i);
  }), r;
}
function ou(t) {
  var e = iu(t);
  return gc.reduce(function(n, r) {
    return n.concat(e.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function su(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function lu(t) {
  var e = t.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var fi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ci() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function fu(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, a = e.defaultOptions, i = a === void 0 ? fi : a;
  return function(s, l, f) {
    f === void 0 && (f = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fi, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], d = !1, m = {
      state: c,
      setOptions: function(O) {
        var k = typeof O == "function" ? O(c.options) : O;
        p(), c.options = Object.assign({}, i, c.options, k), c.scrollParents = {
          reference: re(s) ? Ve(s) : s.contextElement ? Ve(s.contextElement) : [],
          popper: Ve(l)
        };
        var y = ou(lu([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(h) {
          return h.enabled;
        }), v(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var O = c.elements, k = O.reference, y = O.popper;
          if (ci(k, y)) {
            c.rects = {
              reference: au(k, fn(y), c.options.strategy === "fixed"),
              popper: aa(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(w) {
              return c.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var h = 0; h < c.orderedModifiers.length; h++) {
              if (c.reset === !0) {
                c.reset = !1, h = -1;
                continue;
              }
              var b = c.orderedModifiers[h], A = b.fn, T = b.options, _ = T === void 0 ? {} : T, C = b.name;
              typeof A == "function" && (c = A({
                state: c,
                options: _,
                name: C,
                instance: m
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: su(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        p(), d = !0;
      }
    };
    if (!ci(s, l))
      return m;
    m.setOptions(f).then(function(g) {
      !d && f.onFirstUpdate && f.onFirstUpdate(g);
    });
    function v() {
      c.orderedModifiers.forEach(function(g) {
        var O = g.name, k = g.options, y = k === void 0 ? {} : k, h = g.effect;
        if (typeof h == "function") {
          var b = h({
            state: c,
            name: O,
            instance: m,
            options: y
          }), A = function() {
          };
          u.push(b || A);
        }
      });
    }
    function p() {
      u.forEach(function(g) {
        return g();
      }), u = [];
    }
    return m;
  };
}
var cu = [_c, Zc, Ic, xc, Xc, Hc, tu, Ac, Kc], uu = /* @__PURE__ */ fu({
  defaultModifiers: cu
});
function du(t) {
  return typeof t == "function" ? t() : t;
}
const pu = /* @__PURE__ */ E.forwardRef(function(e, n) {
  const {
    children: r,
    container: a,
    disablePortal: i = !1
  } = e, [o, s] = E.useState(null), l = Se(/* @__PURE__ */ E.isValidElement(r) ? r.ref : null, n);
  if (Ze(() => {
    i || s(du(a) || document.body);
  }, [a, i]), Ze(() => {
    if (o && !i)
      return Or(n, o), () => {
        Or(n, null);
      };
  }, [n, o, i]), i) {
    if (/* @__PURE__ */ E.isValidElement(r)) {
      const f = {
        ref: l
      };
      return /* @__PURE__ */ E.cloneElement(r, f);
    }
    return /* @__PURE__ */ at.jsx(E.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ at.jsx(E.Fragment, {
    children: o && /* @__PURE__ */ hs.createPortal(r, o)
  });
});
function mu(t) {
  return Yr("MuiPopper", t);
}
qi("MuiPopper", ["root"]);
const vu = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], hu = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function gu(t, e) {
  if (e === "ltr")
    return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function Cr(t) {
  return typeof t == "function" ? t() : t;
}
function bu(t) {
  return t.nodeType !== void 0;
}
const yu = () => Xi({
  root: ["root"]
}, tc(mu)), xu = {}, wu = /* @__PURE__ */ E.forwardRef(function(e, n) {
  var r;
  const {
    anchorEl: a,
    children: i,
    direction: o,
    disablePortal: s,
    modifiers: l,
    open: f,
    placement: c,
    popperOptions: u,
    popperRef: d,
    slotProps: m = {},
    slots: v = {},
    TransitionProps: p
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = e, g = J(e, vu), O = E.useRef(null), k = Se(O, n), y = E.useRef(null), h = Se(y, d), b = E.useRef(h);
  Ze(() => {
    b.current = h;
  }, [h]), E.useImperativeHandle(d, () => y.current, []);
  const A = gu(c, o), [T, _] = E.useState(A), [C, w] = E.useState(Cr(a));
  E.useEffect(() => {
    y.current && y.current.forceUpdate();
  }), E.useEffect(() => {
    a && w(Cr(a));
  }, [a]), Ze(() => {
    if (!C || !f)
      return;
    const I = (q) => {
      _(q.placement);
    };
    let D = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: q
      }) => {
        I(q);
      }
    }];
    l != null && (D = D.concat(l)), u && u.modifiers != null && (D = D.concat(u.modifiers));
    const F = uu(C, O.current, x({
      placement: A
    }, u, {
      modifiers: D
    }));
    return b.current(F), () => {
      F.destroy(), b.current(null);
    };
  }, [C, s, l, f, u, A]);
  const R = {
    placement: T
  };
  p !== null && (R.TransitionProps = p);
  const j = yu(), M = (r = v.root) != null ? r : "div", K = ic({
    elementType: M,
    externalSlotProps: m.root,
    externalForwardedProps: g,
    additionalProps: {
      role: "tooltip",
      ref: k
    },
    ownerState: e,
    className: j.root
  });
  return /* @__PURE__ */ at.jsx(M, x({}, K, {
    children: typeof i == "function" ? i(R) : i
  }));
}), ku = /* @__PURE__ */ E.forwardRef(function(e, n) {
  const {
    anchorEl: r,
    children: a,
    container: i,
    direction: o = "ltr",
    disablePortal: s = !1,
    keepMounted: l = !1,
    modifiers: f,
    open: c,
    placement: u = "bottom",
    popperOptions: d = xu,
    popperRef: m,
    style: v,
    transition: p = !1,
    slotProps: g = {},
    slots: O = {}
  } = e, k = J(e, hu), [y, h] = E.useState(!0), b = () => {
    h(!1);
  }, A = () => {
    h(!0);
  };
  if (!l && !c && (!p || y))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const w = Cr(r);
    T = w && bu(w) ? ja(w).body : ja(null).body;
  }
  const _ = !c && l && (!p || y) ? "none" : void 0, C = p ? {
    in: c,
    onEnter: b,
    onExited: A
  } : void 0;
  return /* @__PURE__ */ at.jsx(pu, {
    disablePortal: s,
    container: T,
    children: /* @__PURE__ */ at.jsx(wu, x({
      anchorEl: r,
      direction: o,
      disablePortal: s,
      modifiers: f,
      ref: n,
      open: p ? !y : c,
      placement: u,
      popperOptions: d,
      popperRef: m,
      slotProps: g,
      slots: O
    }, k, {
      style: x({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: _
      }, v),
      TransitionProps: C,
      children: a
    }))
  });
}), Ou = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Eu = nr(ku, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (t, e) => e.root
})({}), Pu = /* @__PURE__ */ E.forwardRef(function(e, n) {
  var r;
  const a = to(), i = oo({
    props: e,
    name: "MuiPopper"
  }), {
    anchorEl: o,
    component: s,
    components: l,
    componentsProps: f,
    container: c,
    disablePortal: u,
    keepMounted: d,
    modifiers: m,
    open: v,
    placement: p,
    popperOptions: g,
    popperRef: O,
    transition: k,
    slots: y,
    slotProps: h
  } = i, b = J(i, Ou), A = (r = y == null ? void 0 : y.root) != null ? r : l == null ? void 0 : l.Root, T = x({
    anchorEl: o,
    container: c,
    disablePortal: u,
    keepMounted: d,
    modifiers: m,
    open: v,
    placement: p,
    popperOptions: g,
    popperRef: O,
    transition: k
  }, b);
  return /* @__PURE__ */ at.jsx(Eu, x({
    as: s,
    direction: a == null ? void 0 : a.direction,
    slots: {
      root: A
    },
    slotProps: h ?? f
  }, T, {
    ref: n
  }));
}), bo = Pu, Su = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Rr(t) {
  return `scale(${t}, ${t ** 2})`;
}
const Au = {
  entering: {
    opacity: 1,
    transform: Rr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, hr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), yo = /* @__PURE__ */ E.forwardRef(function(e, n) {
  const {
    addEndListener: r,
    appear: a = !0,
    children: i,
    easing: o,
    in: s,
    onEnter: l,
    onEntered: f,
    onEntering: c,
    onExit: u,
    onExited: d,
    onExiting: m,
    style: v,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = Xf
  } = e, O = J(e, Su), k = E.useRef(), y = E.useRef(), h = io(), b = E.useRef(null), A = Se(b, i.ref, n), T = (I) => (D) => {
    if (I) {
      const F = b.current;
      D === void 0 ? I(F) : I(F, D);
    }
  }, _ = T(c), C = T((I, D) => {
    qf(I);
    const {
      duration: F,
      delay: q,
      easing: V
    } = ti({
      style: v,
      timeout: p,
      easing: o
    }, {
      mode: "enter"
    });
    let nt;
    p === "auto" ? (nt = h.transitions.getAutoHeightDuration(I.clientHeight), y.current = nt) : nt = F, I.style.transition = [h.transitions.create("opacity", {
      duration: nt,
      delay: q
    }), h.transitions.create("transform", {
      duration: hr ? nt : nt * 0.666,
      delay: q,
      easing: V
    })].join(","), l && l(I, D);
  }), w = T(f), R = T(m), j = T((I) => {
    const {
      duration: D,
      delay: F,
      easing: q
    } = ti({
      style: v,
      timeout: p,
      easing: o
    }, {
      mode: "exit"
    });
    let V;
    p === "auto" ? (V = h.transitions.getAutoHeightDuration(I.clientHeight), y.current = V) : V = D, I.style.transition = [h.transitions.create("opacity", {
      duration: V,
      delay: F
    }), h.transitions.create("transform", {
      duration: hr ? V : V * 0.666,
      delay: hr ? F : F || V * 0.333,
      easing: q
    })].join(","), I.style.opacity = 0, I.style.transform = Rr(0.75), u && u(I);
  }), M = T(d), K = (I) => {
    p === "auto" && (k.current = setTimeout(I, y.current || 0)), r && r(b.current, I);
  };
  return E.useEffect(() => () => {
    clearTimeout(k.current);
  }, []), /* @__PURE__ */ at.jsx(g, x({
    appear: a,
    in: s,
    nodeRef: b,
    onEnter: C,
    onEntered: w,
    onEntering: _,
    onExit: j,
    onExited: M,
    onExiting: R,
    addEndListener: K,
    timeout: p === "auto" ? null : p
  }, O, {
    children: (I, D) => /* @__PURE__ */ E.cloneElement(i, x({
      style: x({
        opacity: 0,
        transform: Rr(0.75),
        visibility: I === "exited" && !s ? "hidden" : void 0
      }, Au[I], v, i.props.style),
      ref: A
    }, D))
  }));
});
yo.muiSupportAuto = !0;
const ui = yo;
function Tu(t) {
  return Yr("MuiTooltip", t);
}
const Cu = qi("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), wt = Cu, Ru = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Iu(t) {
  return Math.round(t * 1e5) / 1e5;
}
const $u = (t) => {
  const {
    classes: e,
    disableInteractive: n,
    arrow: r,
    touch: a,
    placement: i
  } = t, o = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", a && "touch", `tooltipPlacement${te(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Xi(o, Tu, e);
}, _u = nr(bo, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (t, e) => {
    const {
      ownerState: n
    } = t;
    return [e.popper, !n.disableInteractive && e.popperInteractive, n.arrow && e.popperArrow, !n.open && e.popperClose];
  }
})(({
  theme: t,
  ownerState: e,
  open: n
}) => x({
  zIndex: (t.vars || t).zIndex.tooltip,
  pointerEvents: "none"
}, !e.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, e.arrow && {
  [`&[data-popper-placement*="bottom"] .${wt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${wt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${wt.arrow}`]: x({}, e.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${wt.arrow}`]: x({}, e.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
})), Nu = nr("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (t, e) => {
    const {
      ownerState: n
    } = t;
    return [e.tooltip, n.touch && e.touch, n.arrow && e.tooltipArrow, e[`tooltipPlacement${te(n.placement.split("-")[0])}`]];
  }
})(({
  theme: t,
  ownerState: e
}) => x({
  backgroundColor: t.vars ? t.vars.palette.Tooltip.bg : ao(t.palette.grey[700], 0.92),
  borderRadius: (t.vars || t).shape.borderRadius,
  color: (t.vars || t).palette.common.white,
  fontFamily: t.typography.fontFamily,
  padding: "4px 8px",
  fontSize: t.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: t.typography.fontWeightMedium
}, e.arrow && {
  position: "relative",
  margin: 0
}, e.touch && {
  padding: "8px 16px",
  fontSize: t.typography.pxToRem(14),
  lineHeight: `${Iu(16 / 14)}em`,
  fontWeight: t.typography.fontWeightRegular
}, {
  [`.${wt.popper}[data-popper-placement*="left"] &`]: x({
    transformOrigin: "right center"
  }, e.isRtl ? x({
    marginLeft: "14px"
  }, e.touch && {
    marginLeft: "24px"
  }) : x({
    marginRight: "14px"
  }, e.touch && {
    marginRight: "24px"
  })),
  [`.${wt.popper}[data-popper-placement*="right"] &`]: x({
    transformOrigin: "left center"
  }, e.isRtl ? x({
    marginRight: "14px"
  }, e.touch && {
    marginRight: "24px"
  }) : x({
    marginLeft: "14px"
  }, e.touch && {
    marginLeft: "24px"
  })),
  [`.${wt.popper}[data-popper-placement*="top"] &`]: x({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, e.touch && {
    marginBottom: "24px"
  }),
  [`.${wt.popper}[data-popper-placement*="bottom"] &`]: x({
    transformOrigin: "center top",
    marginTop: "14px"
  }, e.touch && {
    marginTop: "24px"
  })
})), Du = nr("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (t, e) => e.arrow
})(({
  theme: t
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: t.vars ? t.vars.palette.Tooltip.bg : ao(t.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
}));
let kn = !1, gr = null, ze = {
  x: 0,
  y: 0
};
function On(t, e) {
  return (n) => {
    e && e(n), t(n);
  };
}
const Lu = /* @__PURE__ */ E.forwardRef(function(e, n) {
  var r, a, i, o, s, l, f, c, u, d, m, v, p, g, O, k, y, h, b;
  const A = oo({
    props: e,
    name: "MuiTooltip"
  }), {
    arrow: T = !1,
    children: _,
    components: C = {},
    componentsProps: w = {},
    describeChild: R = !1,
    disableFocusListener: j = !1,
    disableHoverListener: M = !1,
    disableInteractive: K = !1,
    disableTouchListener: I = !1,
    enterDelay: D = 100,
    enterNextDelay: F = 0,
    enterTouchDelay: q = 700,
    followCursor: V = !1,
    id: nt,
    leaveDelay: oe = 0,
    leaveTouchDelay: Yt = 1500,
    onClose: Kt,
    onOpen: Pt,
    open: ht,
    placement: Dt = "bottom",
    PopperComponent: Lt,
    PopperProps: Z = {},
    slotProps: ut = {},
    slots: se = {},
    title: gt,
    TransitionComponent: lr = ui,
    TransitionProps: pn
  } = A, mn = J(A, Ru), bt = /* @__PURE__ */ E.isValidElement(_) ? _ : /* @__PURE__ */ at.jsx("span", {
    children: _
  }), le = io(), vn = le.direction === "rtl", [Vt, hn] = E.useState(), [dt, fe] = E.useState(null), Gt = E.useRef(!1), ce = K || V, Mt = E.useRef(), Xt = E.useRef(), yt = E.useRef(), Ne = E.useRef(), [gn, ka] = Us({
    controlled: ht,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let St = gn;
  const fr = Ws(nt), De = E.useRef(), bn = E.useCallback(() => {
    De.current !== void 0 && (document.body.style.WebkitUserSelect = De.current, De.current = void 0), clearTimeout(Ne.current);
  }, []);
  E.useEffect(() => () => {
    clearTimeout(Mt.current), clearTimeout(Xt.current), clearTimeout(yt.current), bn();
  }, [bn]);
  const Oa = (N) => {
    clearTimeout(gr), kn = !0, ka(!0), Pt && !St && Pt(N);
  }, yn = Hs(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (N) => {
      clearTimeout(gr), gr = setTimeout(() => {
        kn = !1;
      }, 800 + oe), ka(!1), Kt && St && Kt(N), clearTimeout(Mt.current), Mt.current = setTimeout(() => {
        Gt.current = !1;
      }, le.transitions.duration.shortest);
    }
  ), cr = (N) => {
    Gt.current && N.type !== "touchstart" || (Vt && Vt.removeAttribute("title"), clearTimeout(Xt.current), clearTimeout(yt.current), D || kn && F ? Xt.current = setTimeout(() => {
      Oa(N);
    }, kn ? F : D) : Oa(N));
  }, Ea = (N) => {
    clearTimeout(Xt.current), clearTimeout(yt.current), yt.current = setTimeout(() => {
      yn(N);
    }, oe);
  }, {
    isFocusVisibleRef: Pa,
    onBlur: qo,
    onFocus: Zo,
    ref: Jo
  } = Zs(), [, Sa] = E.useState(!1), Aa = (N) => {
    qo(N), Pa.current === !1 && (Sa(!1), Ea(N));
  }, Ta = (N) => {
    Vt || hn(N.currentTarget), Zo(N), Pa.current === !0 && (Sa(!0), cr(N));
  }, Ca = (N) => {
    Gt.current = !0;
    const rt = bt.props;
    rt.onTouchStart && rt.onTouchStart(N);
  }, Ra = cr, Ia = Ea, Qo = (N) => {
    Ca(N), clearTimeout(yt.current), clearTimeout(Mt.current), bn(), De.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ne.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = De.current, cr(N);
    }, q);
  }, ts = (N) => {
    bt.props.onTouchEnd && bt.props.onTouchEnd(N), bn(), clearTimeout(yt.current), yt.current = setTimeout(() => {
      yn(N);
    }, Yt);
  };
  E.useEffect(() => {
    if (!St)
      return;
    function N(rt) {
      (rt.key === "Escape" || rt.key === "Esc") && yn(rt);
    }
    return document.addEventListener("keydown", N), () => {
      document.removeEventListener("keydown", N);
    };
  }, [yn, St]);
  const es = Se(bt.ref, Jo, hn, n);
  !gt && gt !== 0 && (St = !1);
  const ur = E.useRef(), ns = (N) => {
    const rt = bt.props;
    rt.onMouseMove && rt.onMouseMove(N), ze = {
      x: N.clientX,
      y: N.clientY
    }, ur.current && ur.current.update();
  }, Le = {}, dr = typeof gt == "string";
  R ? (Le.title = !St && dr && !M ? gt : null, Le["aria-describedby"] = St ? fr : null) : (Le["aria-label"] = dr ? gt : null, Le["aria-labelledby"] = St && !dr ? fr : null);
  const pt = x({}, Le, mn, bt.props, {
    className: ye(mn.className, bt.props.className),
    onTouchStart: Ca,
    ref: es
  }, V ? {
    onMouseMove: ns
  } : {}), Me = {};
  I || (pt.onTouchStart = Qo, pt.onTouchEnd = ts), M || (pt.onMouseOver = On(Ra, pt.onMouseOver), pt.onMouseLeave = On(Ia, pt.onMouseLeave), ce || (Me.onMouseOver = Ra, Me.onMouseLeave = Ia)), j || (pt.onFocus = On(Ta, pt.onFocus), pt.onBlur = On(Aa, pt.onBlur), ce || (Me.onFocus = Ta, Me.onBlur = Aa));
  const rs = E.useMemo(() => {
    var N;
    let rt = [{
      name: "arrow",
      enabled: !!dt,
      options: {
        element: dt,
        padding: 4
      }
    }];
    return (N = Z.popperOptions) != null && N.modifiers && (rt = rt.concat(Z.popperOptions.modifiers)), x({}, Z.popperOptions, {
      modifiers: rt
    });
  }, [dt, Z]), je = x({}, A, {
    isRtl: vn,
    arrow: T,
    disableInteractive: ce,
    placement: Dt,
    PopperComponentProp: Lt,
    touch: Gt.current
  }), pr = $u(je), $a = (r = (a = se.popper) != null ? a : C.Popper) != null ? r : _u, _a = (i = (o = (s = se.transition) != null ? s : C.Transition) != null ? o : lr) != null ? i : ui, Na = (l = (f = se.tooltip) != null ? f : C.Tooltip) != null ? l : Nu, Da = (c = (u = se.arrow) != null ? u : C.Arrow) != null ? c : Du, as = Ue($a, x({}, Z, (d = ut.popper) != null ? d : w.popper, {
    className: ye(pr.popper, Z == null ? void 0 : Z.className, (m = (v = ut.popper) != null ? v : w.popper) == null ? void 0 : m.className)
  }), je), is = Ue(_a, x({}, pn, (p = ut.transition) != null ? p : w.transition), je), os = Ue(Na, x({}, (g = ut.tooltip) != null ? g : w.tooltip, {
    className: ye(pr.tooltip, (O = (k = ut.tooltip) != null ? k : w.tooltip) == null ? void 0 : O.className)
  }), je), ss = Ue(Da, x({}, (y = ut.arrow) != null ? y : w.arrow, {
    className: ye(pr.arrow, (h = (b = ut.arrow) != null ? b : w.arrow) == null ? void 0 : h.className)
  }), je);
  return /* @__PURE__ */ at.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ E.cloneElement(bt, pt), /* @__PURE__ */ at.jsx($a, x({
      as: Lt ?? bo,
      placement: Dt,
      anchorEl: V ? {
        getBoundingClientRect: () => ({
          top: ze.y,
          left: ze.x,
          right: ze.x,
          bottom: ze.y,
          width: 0,
          height: 0
        })
      } : Vt,
      popperRef: ur,
      open: Vt ? St : !1,
      id: fr,
      transition: !0
    }, Me, as, {
      popperOptions: rs,
      children: ({
        TransitionProps: N
      }) => /* @__PURE__ */ at.jsx(_a, x({
        timeout: le.transitions.duration.shorter
      }, N, is, {
        children: /* @__PURE__ */ at.jsxs(Na, x({}, os, {
          children: [gt, T ? /* @__PURE__ */ at.jsx(Da, x({}, ss, {
            ref: fe
          })) : null]
        }))
      }))
    }))]
  });
}), Mu = Lu, ju = Fn(({
  className: t,
  ...e
}) => /* @__PURE__ */ Q(Mu, { ...e, classes: {
  popper: t
} }))`
  .${wt.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${wt.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`;
function di(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? di(Object(n), !0).forEach(function(r) {
      X(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : di(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Hn(t) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Hn(t);
}
function Fu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function pi(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Bu(t, e, n) {
  return e && pi(t.prototype, e), n && pi(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function X(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function fa(t, e) {
  return Wu(t) || Hu(t, e) || xo(t, e) || Ku();
}
function cn(t) {
  return zu(t) || Uu(t) || xo(t) || Yu();
}
function zu(t) {
  if (Array.isArray(t))
    return Ir(t);
}
function Wu(t) {
  if (Array.isArray(t))
    return t;
}
function Uu(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Hu(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, o, s;
    try {
      for (n = n.call(t); !(a = (o = n.next()).done) && (r.push(o.value), !(e && r.length === e)); a = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function xo(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ir(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ir(t, e);
  }
}
function Ir(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Yu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ku() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var mi = function() {
}, ca = {}, wo = {}, ko = null, Oo = {
  mark: mi,
  measure: mi
};
try {
  typeof window < "u" && (ca = window), typeof document < "u" && (wo = document), typeof MutationObserver < "u" && (ko = MutationObserver), typeof performance < "u" && (Oo = performance);
} catch {
}
var Vu = ca.navigator || {}, vi = Vu.userAgent, hi = vi === void 0 ? "" : vi, zt = ca, z = wo, gi = ko, En = Oo;
zt.document;
var Nt = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Eo = ~hi.indexOf("MSIE") || ~hi.indexOf("Trident/"), Pn, Sn, An, Tn, Cn, Rt = "___FONT_AWESOME___", $r = 16, Po = "fa", So = "svg-inline--fa", ae = "data-fa-i2svg", _r = "data-fa-pseudo-element", Gu = "data-fa-pseudo-element-pending", ua = "data-prefix", da = "data-icon", bi = "fontawesome-i2svg", Xu = "async", qu = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ao = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), B = "classic", Y = "sharp", pa = [B, Y];
function un(t) {
  return new Proxy(t, {
    get: function(n, r) {
      return r in n ? n[r] : n[B];
    }
  });
}
var tn = un((Pn = {}, X(Pn, B, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), X(Pn, Y, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light"
}), Pn)), en = un((Sn = {}, X(Sn, B, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), X(Sn, Y, {
  solid: "fass",
  regular: "fasr",
  light: "fasl"
}), Sn)), nn = un((An = {}, X(An, B, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), X(An, Y, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light"
}), An)), Zu = un((Tn = {}, X(Tn, B, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), X(Tn, Y, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl"
}), Tn)), Ju = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/, To = "fa-layers-text", Qu = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, td = un((Cn = {}, X(Cn, B, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), X(Cn, Y, {
  900: "fass",
  400: "fasr",
  300: "fasl"
}), Cn)), Co = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ed = Co.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), nd = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Jt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, rn = /* @__PURE__ */ new Set();
Object.keys(en[B]).map(rn.add.bind(rn));
Object.keys(en[Y]).map(rn.add.bind(rn));
var rd = [].concat(pa, cn(rn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Jt.GROUP, Jt.SWAP_OPACITY, Jt.PRIMARY, Jt.SECONDARY]).concat(Co.map(function(t) {
  return "".concat(t, "x");
})).concat(ed.map(function(t) {
  return "w-".concat(t);
})), Ge = zt.FontAwesomeConfig || {};
function ad(t) {
  var e = z.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function id(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (z && typeof z.querySelector == "function") {
  var od = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  od.forEach(function(t) {
    var e = fa(t, 2), n = e[0], r = e[1], a = id(ad(n));
    a != null && (Ge[r] = a);
  });
}
var Ro = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Po,
  replacementClass: So,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Ge.familyPrefix && (Ge.cssPrefix = Ge.familyPrefix);
var Ie = P(P({}, Ro), Ge);
Ie.autoReplaceSvg || (Ie.observeMutations = !1);
var S = {};
Object.keys(Ro).forEach(function(t) {
  Object.defineProperty(S, t, {
    enumerable: !0,
    set: function(n) {
      Ie[t] = n, Xe.forEach(function(r) {
        return r(S);
      });
    },
    get: function() {
      return Ie[t];
    }
  });
});
Object.defineProperty(S, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ie.cssPrefix = e, Xe.forEach(function(n) {
      return n(S);
    });
  },
  get: function() {
    return Ie.cssPrefix;
  }
});
zt.FontAwesomeConfig = S;
var Xe = [];
function sd(t) {
  return Xe.push(t), function() {
    Xe.splice(Xe.indexOf(t), 1);
  };
}
var jt = $r, kt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ld(t) {
  if (!(!t || !Nt)) {
    var e = z.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var n = z.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return z.head.insertBefore(e, r), t;
  }
}
var fd = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function an() {
  for (var t = 12, e = ""; t-- > 0; )
    e += fd[Math.random() * 62 | 0];
  return e;
}
function _e(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function ma(t) {
  return t.classList ? _e(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function Io(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function cd(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(Io(t[n]), '" ');
  }, "").trim();
}
function ar(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t[n].trim(), ";");
  }, "");
}
function va(t) {
  return t.size !== kt.size || t.x !== kt.x || t.y !== kt.y || t.rotate !== kt.rotate || t.flipX || t.flipY;
}
function ud(t) {
  var e = t.transform, n = t.containerWidth, r = t.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: f
  };
}
function dd(t) {
  var e = t.transform, n = t.width, r = n === void 0 ? $r : n, a = t.height, i = a === void 0 ? $r : a, o = t.startCentered, s = o === void 0 ? !1 : o, l = "";
  return s && Eo ? l += "translate(".concat(e.x / jt - r / 2, "em, ").concat(e.y / jt - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(e.x / jt, "em), calc(-50% + ").concat(e.y / jt, "em)) ") : l += "translate(".concat(e.x / jt, "em, ").concat(e.y / jt, "em) "), l += "scale(".concat(e.size / jt * (e.flipX ? -1 : 1), ", ").concat(e.size / jt * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var pd = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function $o() {
  var t = Po, e = So, n = S.cssPrefix, r = S.replacementClass, a = pd;
  if (n !== t || r !== e) {
    var i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var yi = !1;
function br() {
  S.autoAddCss && !yi && (ld($o()), yi = !0);
}
var md = {
  mixout: function() {
    return {
      dom: {
        css: $o,
        insertCss: br
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        br();
      },
      beforeI2svg: function() {
        br();
      }
    };
  }
}, It = zt || {};
It[Rt] || (It[Rt] = {});
It[Rt].styles || (It[Rt].styles = {});
It[Rt].hooks || (It[Rt].hooks = {});
It[Rt].shims || (It[Rt].shims = []);
var mt = It[Rt], _o = [], vd = function t() {
  z.removeEventListener("DOMContentLoaded", t), Yn = 1, _o.map(function(e) {
    return e();
  });
}, Yn = !1;
Nt && (Yn = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), Yn || z.addEventListener("DOMContentLoaded", vd));
function hd(t) {
  Nt && (Yn ? setTimeout(t, 0) : _o.push(t));
}
function dn(t) {
  var e = t.tag, n = t.attributes, r = n === void 0 ? {} : n, a = t.children, i = a === void 0 ? [] : a;
  return typeof t == "string" ? Io(t) : "<".concat(e, " ").concat(cd(r), ">").concat(i.map(dn).join(""), "</").concat(e, ">");
}
function xi(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var gd = function(e, n) {
  return function(r, a, i, o) {
    return e.call(n, r, a, i, o);
  };
}, yr = function(e, n, r, a) {
  var i = Object.keys(e), o = i.length, s = a !== void 0 ? gd(n, a) : n, l, f, c;
  for (r === void 0 ? (l = 1, c = e[i[0]]) : (l = 0, c = r); l < o; l++)
    f = i[l], c = s(c, e[f], f, e);
  return c;
};
function bd(t) {
  for (var e = [], n = 0, r = t.length; n < r; ) {
    var a = t.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = t.charCodeAt(n++);
      (i & 64512) == 56320 ? e.push(((a & 1023) << 10) + (i & 1023) + 65536) : (e.push(a), n--);
    } else
      e.push(a);
  }
  return e;
}
function Nr(t) {
  var e = bd(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function yd(t, e) {
  var n = t.length, r = t.charCodeAt(e), a;
  return r >= 55296 && r <= 56319 && n > e + 1 && (a = t.charCodeAt(e + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function wi(t) {
  return Object.keys(t).reduce(function(e, n) {
    var r = t[n], a = !!r.icon;
    return a ? e[r.iconName] = r.icon : e[n] = r, e;
  }, {});
}
function Dr(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = wi(e);
  typeof mt.hooks.addPack == "function" && !a ? mt.hooks.addPack(t, wi(e)) : mt.styles[t] = P(P({}, mt.styles[t] || {}), i), t === "fas" && Dr("fa", e);
}
var Rn, In, $n, xe = mt.styles, xd = mt.shims, wd = (Rn = {}, X(Rn, B, Object.values(nn[B])), X(Rn, Y, Object.values(nn[Y])), Rn), ha = null, No = {}, Do = {}, Lo = {}, Mo = {}, jo = {}, kd = (In = {}, X(In, B, Object.keys(tn[B])), X(In, Y, Object.keys(tn[Y])), In);
function Od(t) {
  return ~rd.indexOf(t);
}
function Ed(t, e) {
  var n = e.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === t && a !== "" && !Od(a) ? a : null;
}
var Fo = function() {
  var e = function(i) {
    return yr(xe, function(o, s, l) {
      return o[l] = yr(s, i, {}), o;
    }, {});
  };
  No = e(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        a[l.toString(16)] = o;
      });
    }
    return a;
  }), Do = e(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        a[l] = o;
      });
    }
    return a;
  }), jo = e(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(l) {
      a[l] = o;
    }), a;
  });
  var n = "far" in xe || S.autoFetchSvg, r = yr(xd, function(a, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Lo = r.names, Mo = r.unicodes, ha = ir(S.styleDefault, {
    family: S.familyDefault
  });
};
sd(function(t) {
  ha = ir(t.styleDefault, {
    family: S.familyDefault
  });
});
Fo();
function ga(t, e) {
  return (No[t] || {})[e];
}
function Pd(t, e) {
  return (Do[t] || {})[e];
}
function Qt(t, e) {
  return (jo[t] || {})[e];
}
function Bo(t) {
  return Lo[t] || {
    prefix: null,
    iconName: null
  };
}
function Sd(t) {
  var e = Mo[t], n = ga("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Wt() {
  return ha;
}
var ba = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ir(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.family, r = n === void 0 ? B : n, a = tn[r][t], i = en[r][t] || en[r][a], o = t in mt.styles ? t : null;
  return i || o || null;
}
var ki = ($n = {}, X($n, B, Object.keys(nn[B])), X($n, Y, Object.keys(nn[Y])), $n);
function or(t) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (e = {}, X(e, B, "".concat(S.cssPrefix, "-").concat(B)), X(e, Y, "".concat(S.cssPrefix, "-").concat(Y)), e), o = null, s = B;
  (t.includes(i[B]) || t.some(function(f) {
    return ki[B].includes(f);
  })) && (s = B), (t.includes(i[Y]) || t.some(function(f) {
    return ki[Y].includes(f);
  })) && (s = Y);
  var l = t.reduce(function(f, c) {
    var u = Ed(S.cssPrefix, c);
    if (xe[c] ? (c = wd[s].includes(c) ? Zu[s][c] : c, o = c, f.prefix = c) : kd[s].indexOf(c) > -1 ? (o = c, f.prefix = ir(c, {
      family: s
    })) : u ? f.iconName = u : c !== S.replacementClass && c !== i[B] && c !== i[Y] && f.rest.push(c), !a && f.prefix && f.iconName) {
      var d = o === "fa" ? Bo(f.iconName) : {}, m = Qt(f.prefix, f.iconName);
      d.prefix && (o = null), f.iconName = d.iconName || m || f.iconName, f.prefix = d.prefix || f.prefix, f.prefix === "far" && !xe.far && xe.fas && !S.autoFetchSvg && (f.prefix = "fas");
    }
    return f;
  }, ba());
  return (t.includes("fa-brands") || t.includes("fab")) && (l.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === Y && (xe.fass || S.autoFetchSvg) && (l.prefix = "fass", l.iconName = Qt(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = Wt() || "fas"), l;
}
var Ad = /* @__PURE__ */ function() {
  function t() {
    Fu(this, t), this.definitions = {};
  }
  return Bu(t, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = P(P({}, n.definitions[s] || {}), o[s]), Dr(s, o[s]);
        var l = nn[B][s];
        l && Dr(l, o[s]), Fo();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, l = o.iconName, f = o.icon, c = f[2];
        n[s] || (n[s] = {}), c.length > 0 && c.forEach(function(u) {
          typeof u == "string" && (n[s][u] = f);
        }), n[s][l] = f;
      }), n;
    }
  }]), t;
}(), Oi = [], we = {}, Ee = {}, Td = Object.keys(Ee);
function Cd(t, e) {
  var n = e.mixoutsTo;
  return Oi = t, we = {}, Object.keys(Ee).forEach(function(r) {
    Td.indexOf(r) === -1 && delete Ee[r];
  }), Oi.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (n[o] = a[o]), Hn(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        we[o] || (we[o] = []), we[o].push(i[o]);
      });
    }
    r.provides && r.provides(Ee);
  }), n;
}
function Lr(t, e) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = we[t] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(r));
  }), e;
}
function ie(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var a = we[t] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function $t() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Ee[t] ? Ee[t].apply(null, e) : void 0;
}
function Mr(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, n = t.prefix || Wt();
  if (e)
    return e = Qt(n, e) || e, xi(zo.definitions, n, e) || xi(mt.styles, n, e);
}
var zo = new Ad(), Rd = function() {
  S.autoReplaceSvg = !1, S.observeMutations = !1, ie("noAuto");
}, Id = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Nt ? (ie("beforeI2svg", e), $t("pseudoElements2svg", e), $t("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    S.autoReplaceSvg === !1 && (S.autoReplaceSvg = !0), S.observeMutations = !0, hd(function() {
      _d({
        autoReplaceSvgRoot: n
      }), ie("watch", e);
    });
  }
}, $d = {
  icon: function(e) {
    if (e === null)
      return null;
    if (Hn(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Qt(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = ir(e[0]);
      return {
        prefix: r,
        iconName: Qt(r, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(S.cssPrefix, "-")) > -1 || e.match(Ju))) {
      var a = or(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Wt(),
        iconName: Qt(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof e == "string") {
      var i = Wt();
      return {
        prefix: i,
        iconName: Qt(i, e) || e
      };
    }
  }
}, st = {
  noAuto: Rd,
  config: S,
  dom: Id,
  parse: $d,
  library: zo,
  findIconDefinition: Mr,
  toHtml: dn
}, _d = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, r = n === void 0 ? z : n;
  (Object.keys(mt.styles).length > 0 || S.autoFetchSvg) && Nt && S.autoReplaceSvg && st.dom.i2svg({
    node: r
  });
};
function sr(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(r) {
        return dn(r);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (Nt) {
        var r = z.createElement("div");
        return r.innerHTML = t.html, r.children;
      }
    }
  }), t;
}
function Nd(t) {
  var e = t.children, n = t.main, r = t.mask, a = t.attributes, i = t.styles, o = t.transform;
  if (va(o) && n.found && !r.found) {
    var s = n.width, l = n.height, f = {
      x: s / l / 2,
      y: 0.5
    };
    a.style = ar(P(P({}, i), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: e
  }];
}
function Dd(t) {
  var e = t.prefix, n = t.iconName, r = t.children, a = t.attributes, i = t.symbol, o = i === !0 ? "".concat(e, "-").concat(S.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: P(P({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function ya(t) {
  var e = t.icons, n = e.main, r = e.mask, a = t.prefix, i = t.iconName, o = t.transform, s = t.symbol, l = t.title, f = t.maskId, c = t.titleId, u = t.extra, d = t.watchable, m = d === void 0 ? !1 : d, v = r.found ? r : n, p = v.width, g = v.height, O = a === "fak", k = [S.replacementClass, i ? "".concat(S.cssPrefix, "-").concat(i) : ""].filter(function(C) {
    return u.classes.indexOf(C) === -1;
  }).filter(function(C) {
    return C !== "" || !!C;
  }).concat(u.classes).join(" "), y = {
    children: [],
    attributes: P(P({}, u.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: k,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(g)
    })
  }, h = O && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / g * 16 * 0.0625, "em")
  } : {};
  m && (y.attributes[ae] = ""), l && (y.children.push({
    tag: "title",
    attributes: {
      id: y.attributes["aria-labelledby"] || "title-".concat(c || an())
    },
    children: [l]
  }), delete y.attributes.title);
  var b = P(P({}, y), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: f,
    transform: o,
    symbol: s,
    styles: P(P({}, h), u.styles)
  }), A = r.found && n.found ? $t("generateAbstractMask", b) || {
    children: [],
    attributes: {}
  } : $t("generateAbstractIcon", b) || {
    children: [],
    attributes: {}
  }, T = A.children, _ = A.attributes;
  return b.children = T, b.attributes = _, s ? Dd(b) : Nd(b);
}
function Ei(t) {
  var e = t.content, n = t.width, r = t.height, a = t.transform, i = t.title, o = t.extra, s = t.watchable, l = s === void 0 ? !1 : s, f = P(P(P({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (f[ae] = "");
  var c = P({}, o.styles);
  va(a) && (c.transform = dd({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var u = ar(c);
  u.length > 0 && (f.style = u);
  var d = [];
  return d.push({
    tag: "span",
    attributes: f,
    children: [e]
  }), i && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), d;
}
function Ld(t) {
  var e = t.content, n = t.title, r = t.extra, a = P(P(P({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = ar(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [e]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var xr = mt.styles;
function jr(t) {
  var e = t[0], n = t[1], r = t.slice(4), a = fa(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(S.cssPrefix, "-").concat(Jt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(S.cssPrefix, "-").concat(Jt.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(S.cssPrefix, "-").concat(Jt.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: o
  };
}
var Md = {
  found: !1,
  width: 512,
  height: 512
};
function jd(t, e) {
  !Ao && !S.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Fr(t, e) {
  var n = e;
  return e === "fa" && S.styleDefault !== null && (e = Wt()), new Promise(function(r, a) {
    if ($t("missingIconAbstract"), n === "fa") {
      var i = Bo(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && xr[e] && xr[e][t]) {
      var o = xr[e][t];
      return r(jr(o));
    }
    jd(t, e), r(P(P({}, Md), {}, {
      icon: S.showMissingIcons && t ? $t("missingIconAbstract") || {} : {}
    }));
  });
}
var Pi = function() {
}, Br = S.measurePerformance && En && En.mark && En.measure ? En : {
  mark: Pi,
  measure: Pi
}, He = 'FA "6.4.2"', Fd = function(e) {
  return Br.mark("".concat(He, " ").concat(e, " begins")), function() {
    return Wo(e);
  };
}, Wo = function(e) {
  Br.mark("".concat(He, " ").concat(e, " ends")), Br.measure("".concat(He, " ").concat(e), "".concat(He, " ").concat(e, " begins"), "".concat(He, " ").concat(e, " ends"));
}, xa = {
  begin: Fd,
  end: Wo
}, Mn = function() {
};
function Si(t) {
  var e = t.getAttribute ? t.getAttribute(ae) : null;
  return typeof e == "string";
}
function Bd(t) {
  var e = t.getAttribute ? t.getAttribute(ua) : null, n = t.getAttribute ? t.getAttribute(da) : null;
  return e && n;
}
function zd(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(S.replacementClass);
}
function Wd() {
  if (S.autoReplaceSvg === !0)
    return jn.replace;
  var t = jn[S.autoReplaceSvg];
  return t || jn.replace;
}
function Ud(t) {
  return z.createElementNS("http://www.w3.org/2000/svg", t);
}
function Hd(t) {
  return z.createElement(t);
}
function Uo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, r = n === void 0 ? t.tag === "svg" ? Ud : Hd : n;
  if (typeof t == "string")
    return z.createTextNode(t);
  var a = r(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    a.setAttribute(o, t.attributes[o]);
  });
  var i = t.children || [];
  return i.forEach(function(o) {
    a.appendChild(Uo(o, {
      ceFn: r
    }));
  }), a;
}
function Yd(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var jn = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(a) {
        n.parentNode.insertBefore(Uo(a), n);
      }), n.getAttribute(ae) === null && S.keepOriginalSource) {
        var r = z.createComment(Yd(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], r = e[1];
    if (~ma(n).indexOf(S.replacementClass))
      return jn.replace(e);
    var a = new RegExp("".concat(S.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === S.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return dn(s);
    }).join(`
`);
    n.setAttribute(ae, ""), n.innerHTML = o;
  }
};
function Ai(t) {
  t();
}
function Ho(t, e) {
  var n = typeof e == "function" ? e : Mn;
  if (t.length === 0)
    n();
  else {
    var r = Ai;
    S.mutateApproach === Xu && (r = zt.requestAnimationFrame || Ai), r(function() {
      var a = Wd(), i = xa.begin("mutate");
      t.map(a), i(), n();
    });
  }
}
var wa = !1;
function Yo() {
  wa = !0;
}
function zr() {
  wa = !1;
}
var Kn = null;
function Ti(t) {
  if (gi && S.observeMutations) {
    var e = t.treeCallback, n = e === void 0 ? Mn : e, r = t.nodeCallback, a = r === void 0 ? Mn : r, i = t.pseudoElementsCallback, o = i === void 0 ? Mn : i, s = t.observeMutationsRoot, l = s === void 0 ? z : s;
    Kn = new gi(function(f) {
      if (!wa) {
        var c = Wt();
        _e(f).forEach(function(u) {
          if (u.type === "childList" && u.addedNodes.length > 0 && !Si(u.addedNodes[0]) && (S.searchPseudoElements && o(u.target), n(u.target)), u.type === "attributes" && u.target.parentNode && S.searchPseudoElements && o(u.target.parentNode), u.type === "attributes" && Si(u.target) && ~nd.indexOf(u.attributeName))
            if (u.attributeName === "class" && Bd(u.target)) {
              var d = or(ma(u.target)), m = d.prefix, v = d.iconName;
              u.target.setAttribute(ua, m || c), v && u.target.setAttribute(da, v);
            } else
              zd(u.target) && a(u.target);
        });
      }
    }), Nt && Kn.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Kd() {
  Kn && Kn.disconnect();
}
function Vd(t) {
  var e = t.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function Gd(t) {
  var e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), r = t.innerText !== void 0 ? t.innerText.trim() : "", a = or(ma(t));
  return a.prefix || (a.prefix = Wt()), e && n && (a.prefix = e, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Pd(a.prefix, t.innerText) || ga(a.prefix, Nr(t.innerText))), !a.iconName && S.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = t.firstChild.data)), a;
}
function Xd(t) {
  var e = _e(t.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = t.getAttribute("title"), r = t.getAttribute("data-fa-title-id");
  return S.autoA11y && (n ? e["aria-labelledby"] = "".concat(S.replacementClass, "-title-").concat(r || an()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function qd() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: kt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Ci(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Gd(t), r = n.iconName, a = n.prefix, i = n.rest, o = Xd(t), s = Lr("parseNodeAttributes", {}, t), l = e.styleParser ? Vd(t) : [];
  return P({
    iconName: r,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: kt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var Zd = mt.styles;
function Ko(t) {
  var e = S.autoReplaceSvg === "nest" ? Ci(t, {
    styleParser: !1
  }) : Ci(t);
  return ~e.extra.classes.indexOf(To) ? $t("generateLayersText", t, e) : $t("generateSvgReplacementMutation", t, e);
}
var Ut = /* @__PURE__ */ new Set();
pa.map(function(t) {
  Ut.add("fa-".concat(t));
});
Object.keys(tn[B]).map(Ut.add.bind(Ut));
Object.keys(tn[Y]).map(Ut.add.bind(Ut));
Ut = cn(Ut);
function Ri(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Nt)
    return Promise.resolve();
  var n = z.documentElement.classList, r = function(u) {
    return n.add("".concat(bi, "-").concat(u));
  }, a = function(u) {
    return n.remove("".concat(bi, "-").concat(u));
  }, i = S.autoFetchSvg ? Ut : pa.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(Zd));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(To, ":not([").concat(ae, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(ae, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = _e(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var l = xa.begin("onTree"), f = s.reduce(function(c, u) {
    try {
      var d = Ko(u);
      d && c.push(d);
    } catch (m) {
      Ao || m.name === "MissingIcon" && console.error(m);
    }
    return c;
  }, []);
  return new Promise(function(c, u) {
    Promise.all(f).then(function(d) {
      Ho(d, function() {
        r("active"), r("complete"), a("pending"), typeof e == "function" && e(), l(), c();
      });
    }).catch(function(d) {
      l(), u(d);
    });
  });
}
function Jd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ko(t).then(function(n) {
    n && Ho([n], e);
  });
}
function Qd(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : Mr(e || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : Mr(a || {})), t(r, P(P({}, n), {}, {
      mask: a
    }));
  };
}
var tp = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? kt : r, i = n.symbol, o = i === void 0 ? !1 : i, s = n.mask, l = s === void 0 ? null : s, f = n.maskId, c = f === void 0 ? null : f, u = n.title, d = u === void 0 ? null : u, m = n.titleId, v = m === void 0 ? null : m, p = n.classes, g = p === void 0 ? [] : p, O = n.attributes, k = O === void 0 ? {} : O, y = n.styles, h = y === void 0 ? {} : y;
  if (e) {
    var b = e.prefix, A = e.iconName, T = e.icon;
    return sr(P({
      type: "icon"
    }, e), function() {
      return ie("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), S.autoA11y && (d ? k["aria-labelledby"] = "".concat(S.replacementClass, "-title-").concat(v || an()) : (k["aria-hidden"] = "true", k.focusable = "false")), ya({
        icons: {
          main: jr(T),
          mask: l ? jr(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: b,
        iconName: A,
        transform: P(P({}, kt), a),
        symbol: o,
        title: d,
        maskId: c,
        titleId: v,
        extra: {
          attributes: k,
          styles: h,
          classes: g
        }
      });
    });
  }
}, ep = {
  mixout: function() {
    return {
      icon: Qd(tp)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Ri, n.nodeCallback = Jd, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? z : r, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return Ri(a, o);
    }, e.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, o = r.titleId, s = r.prefix, l = r.transform, f = r.symbol, c = r.mask, u = r.maskId, d = r.extra;
      return new Promise(function(m, v) {
        Promise.all([Fr(a, s), c.iconName ? Fr(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(p) {
          var g = fa(p, 2), O = g[0], k = g[1];
          m([n, ya({
            icons: {
              main: O,
              mask: k
            },
            prefix: s,
            iconName: a,
            transform: l,
            symbol: f,
            maskId: u,
            title: i,
            titleId: o,
            extra: d,
            watchable: !0
          })]);
        }).catch(v);
      });
    }, e.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.transform, s = n.styles, l = ar(s);
      l.length > 0 && (a.style = l);
      var f;
      return va(o) && (f = $t("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(f || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, np = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return sr({
          type: "layer"
        }, function() {
          ie("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(S.cssPrefix, "-layers")].concat(cn(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, rp = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, s = o === void 0 ? [] : o, l = r.attributes, f = l === void 0 ? {} : l, c = r.styles, u = c === void 0 ? {} : c;
        return sr({
          type: "counter",
          content: n
        }, function() {
          return ie("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ld({
            content: n.toString(),
            title: i,
            extra: {
              attributes: f,
              styles: u,
              classes: ["".concat(S.cssPrefix, "-layers-counter")].concat(cn(s))
            }
          });
        });
      }
    };
  }
}, ap = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? kt : a, o = r.title, s = o === void 0 ? null : o, l = r.classes, f = l === void 0 ? [] : l, c = r.attributes, u = c === void 0 ? {} : c, d = r.styles, m = d === void 0 ? {} : d;
        return sr({
          type: "text",
          content: n
        }, function() {
          return ie("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ei({
            content: n,
            transform: P(P({}, kt), i),
            title: s,
            extra: {
              attributes: u,
              styles: m,
              classes: ["".concat(S.cssPrefix, "-layers-text")].concat(cn(f))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, r) {
      var a = r.title, i = r.transform, o = r.extra, s = null, l = null;
      if (Eo) {
        var f = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        s = c.width / f, l = c.height / f;
      }
      return S.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Ei({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, ip = new RegExp('"', "ug"), Ii = [1105920, 1112319];
function op(t) {
  var e = t.replace(ip, ""), n = yd(e, 0), r = n >= Ii[0] && n <= Ii[1], a = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Nr(a ? e[0] : e),
    isSecondary: r || a
  };
}
function $i(t, e) {
  var n = "".concat(Gu).concat(e.replace(":", "-"));
  return new Promise(function(r, a) {
    if (t.getAttribute(n) !== null)
      return r();
    var i = _e(t.children), o = i.filter(function(T) {
      return T.getAttribute(_r) === e;
    })[0], s = zt.getComputedStyle(t, e), l = s.getPropertyValue("font-family").match(Qu), f = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), r();
    if (l && c !== "none" && c !== "") {
      var u = s.getPropertyValue("content"), d = ~["Sharp"].indexOf(l[2]) ? Y : B, m = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? en[d][l[2].toLowerCase()] : td[d][f], v = op(u), p = v.value, g = v.isSecondary, O = l[0].startsWith("FontAwesome"), k = ga(m, p), y = k;
      if (O) {
        var h = Sd(p);
        h.iconName && h.prefix && (k = h.iconName, m = h.prefix);
      }
      if (k && !g && (!o || o.getAttribute(ua) !== m || o.getAttribute(da) !== y)) {
        t.setAttribute(n, y), o && t.removeChild(o);
        var b = qd(), A = b.extra;
        A.attributes[_r] = e, Fr(k, m).then(function(T) {
          var _ = ya(P(P({}, b), {}, {
            icons: {
              main: T,
              mask: ba()
            },
            prefix: m,
            iconName: y,
            extra: A,
            watchable: !0
          })), C = z.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(C, t.firstChild) : t.appendChild(C), C.outerHTML = _.map(function(w) {
            return dn(w);
          }).join(`
`), t.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function sp(t) {
  return Promise.all([$i(t, "::before"), $i(t, "::after")]);
}
function lp(t) {
  return t.parentNode !== document.head && !~qu.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(_r) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function _i(t) {
  if (Nt)
    return new Promise(function(e, n) {
      var r = _e(t.querySelectorAll("*")).filter(lp).map(sp), a = xa.begin("searchPseudoElements");
      Yo(), Promise.all(r).then(function() {
        a(), zr(), e();
      }).catch(function() {
        a(), zr(), n();
      });
    });
}
var fp = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = _i, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? z : r;
      S.searchPseudoElements && _i(a);
    };
  }
}, Ni = !1, cp = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Yo(), Ni = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Ti(Lr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Kd();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        Ni ? zr() : Ti(Lr("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Di = function(e) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, up = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Di(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = Di(a)), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, i = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), f = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), u = {
        transform: "".concat(l, " ").concat(f, " ").concat(c)
      }, d = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, m = {
        outer: s,
        inner: u,
        path: d
      };
      return {
        tag: "g",
        attributes: P({}, m.outer),
        children: [{
          tag: "g",
          attributes: P({}, m.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: P(P({}, r.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
}, wr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Li(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function dp(t) {
  return t.tag === "g" ? t.children : [t];
}
var pp = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? or(a.split(" ").map(function(o) {
          return o.trim();
        })) : ba();
        return i.prefix || (i.prefix = Wt()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.mask, s = n.maskId, l = n.transform, f = i.width, c = i.icon, u = o.width, d = o.icon, m = ud({
        transform: l,
        containerWidth: u,
        iconWidth: f
      }), v = {
        tag: "rect",
        attributes: P(P({}, wr), {}, {
          fill: "white"
        })
      }, p = c.children ? {
        children: c.children.map(Li)
      } : {}, g = {
        tag: "g",
        attributes: P({}, m.inner),
        children: [Li(P({
          tag: c.tag,
          attributes: P(P({}, c.attributes), m.path)
        }, p))]
      }, O = {
        tag: "g",
        attributes: P({}, m.outer),
        children: [g]
      }, k = "mask-".concat(s || an()), y = "clip-".concat(s || an()), h = {
        tag: "mask",
        attributes: P(P({}, wr), {}, {
          id: k,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [v, O]
      }, b = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: y
          },
          children: dp(d)
        }, h]
      };
      return r.push(b, {
        tag: "rect",
        attributes: P({
          fill: "currentColor",
          "clip-path": "url(#".concat(y, ")"),
          mask: "url(#".concat(k, ")")
        }, wr)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, mp = {
  provides: function(e) {
    var n = !1;
    zt.matchMedia && (n = zt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: P(P({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = P(P({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: P(P({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: P(P({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: P(P({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: P(P({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: P(P({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: P(P({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: P(P({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, vp = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, hp = [md, ep, np, rp, ap, fp, cp, up, pp, mp, vp];
Cd(hp, {
  mixoutsTo: st
});
st.noAuto;
st.config;
st.library;
st.dom;
var Wr = st.parse;
st.findIconDefinition;
st.toHtml;
var gp = st.icon;
st.layer;
st.text;
st.counter;
function Mi(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mi(Object(n), !0).forEach(function(r) {
      ke(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mi(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Vn(t) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Vn(t);
}
function ke(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function bp(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function yp(t, e) {
  if (t == null)
    return {};
  var n = bp(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      r = i[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Ur(t) {
  return xp(t) || wp(t) || kp(t) || Op();
}
function xp(t) {
  if (Array.isArray(t))
    return Hr(t);
}
function wp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function kp(t, e) {
  if (t) {
    if (typeof t == "string")
      return Hr(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Hr(t, e);
  }
}
function Hr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Op() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ep(t) {
  var e, n = t.beat, r = t.fade, a = t.beatFade, i = t.bounce, o = t.shake, s = t.flash, l = t.spin, f = t.spinPulse, c = t.spinReverse, u = t.pulse, d = t.fixedWidth, m = t.inverse, v = t.border, p = t.listItem, g = t.flip, O = t.size, k = t.rotation, y = t.pull, h = (e = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": c,
    "fa-spin-pulse": f,
    "fa-pulse": u,
    "fa-fw": d,
    "fa-inverse": m,
    "fa-border": v,
    "fa-li": p,
    "fa-flip": g === !0,
    "fa-flip-horizontal": g === "horizontal" || g === "both",
    "fa-flip-vertical": g === "vertical" || g === "both"
  }, ke(e, "fa-".concat(O), typeof O < "u" && O !== null), ke(e, "fa-rotate-".concat(k), typeof k < "u" && k !== null && k !== 0), ke(e, "fa-pull-".concat(y), typeof y < "u" && y !== null), ke(e, "fa-swap-opacity", t.swapOpacity), e);
  return Object.keys(h).map(function(b) {
    return h[b] ? b : null;
  }).filter(function(b) {
    return b;
  });
}
function Pp(t) {
  return t = t - 0, t === t;
}
function Vo(t) {
  return Pp(t) ? t : (t = t.replace(/[\-_\s]+(.)?/g, function(e, n) {
    return n ? n.toUpperCase() : "";
  }), t.substr(0, 1).toLowerCase() + t.substr(1));
}
var Sp = ["style"];
function Ap(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Tp(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var r = n.indexOf(":"), a = Vo(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? e[Ap(a)] = i : e[a] = i, e;
  }, {});
}
function Go(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return Go(t, l);
  }), a = Object.keys(e.attributes || {}).reduce(function(l, f) {
    var c = e.attributes[f];
    switch (f) {
      case "class":
        l.attrs.className = c, delete e.attributes.class;
        break;
      case "style":
        l.attrs.style = Tp(c);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? l.attrs[f.toLowerCase()] = c : l.attrs[Vo(f)] = c;
    }
    return l;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, s = yp(n, Sp);
  return a.attrs.style = Bt(Bt({}, a.attrs.style), o), t.apply(void 0, [e.tag, Bt(Bt({}, a.attrs), s)].concat(Ur(r)));
}
var Xo = !1;
try {
  Xo = !0;
} catch {
}
function Cp() {
  if (!Xo && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function ji(t) {
  if (t && Vn(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (Wr.icon)
    return Wr.icon(t);
  if (t === null)
    return null;
  if (t && Vn(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
function kr(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? ke({}, t, e) : {};
}
var $e = /* @__PURE__ */ At.forwardRef(function(t, e) {
  var n = t.icon, r = t.mask, a = t.symbol, i = t.className, o = t.title, s = t.titleId, l = t.maskId, f = ji(n), c = kr("classes", [].concat(Ur(Ep(t)), Ur(i.split(" ")))), u = kr("transform", typeof t.transform == "string" ? Wr.transform(t.transform) : t.transform), d = kr("mask", ji(r)), m = gp(f, Bt(Bt(Bt(Bt({}, c), u), d), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: l
  }));
  if (!m)
    return Cp("Could not find icon", f), null;
  var v = m.abstract, p = {
    ref: e
  };
  return Object.keys(t).forEach(function(g) {
    $e.defaultProps.hasOwnProperty(g) || (p[g] = t[g]);
  }), Rp(v[0], p);
});
$e.displayName = "FontAwesomeIcon";
$e.propTypes = {
  beat: $.bool,
  border: $.bool,
  beatFade: $.bool,
  bounce: $.bool,
  className: $.string,
  fade: $.bool,
  flash: $.bool,
  mask: $.oneOfType([$.object, $.array, $.string]),
  maskId: $.string,
  fixedWidth: $.bool,
  inverse: $.bool,
  flip: $.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: $.oneOfType([$.object, $.array, $.string]),
  listItem: $.bool,
  pull: $.oneOf(["right", "left"]),
  pulse: $.bool,
  rotation: $.oneOf([0, 90, 180, 270]),
  shake: $.bool,
  size: $.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: $.bool,
  spinPulse: $.bool,
  spinReverse: $.bool,
  symbol: $.oneOfType([$.bool, $.string]),
  title: $.string,
  titleId: $.string,
  transform: $.oneOfType([$.string, $.object]),
  swapOpacity: $.bool
};
$e.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var Rp = Go.bind(null, At.createElement);
const Ip = {
  default: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(37 99 235 / var(--tw-bg-opacity))"
    }
  },
  green: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(34 197 94 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(22 163 74 / var(--tw-bg-opacity))"
    }
  },
  gray: {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(107 114 128 / var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(75 85 99 / var(--tw-bg-opacity))"
    }
  }
}, $p = {
  default: {
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }
}, Fi = ({
  children: t,
  color: e = "default",
  size: n = "default",
  className: r,
  onClick: a,
  tooltip: i,
  isLoading: o,
  icon: s,
  iconAfter: l,
  disabled: f
}) => {
  let u = /* @__PURE__ */ _n("button", { type: "button", onClick: !o && !f ? a : void 0, css: [{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    borderRadius: "0.25rem",
    fontWeight: "500",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "200ms",
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    }
  }, $p[n], o ? {
    cursor: "wait",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))",
    color: "rgb(75 85 99 / 0.75)"
  } : Ip[e]], className: r, children: [
    s && /* @__PURE__ */ Q($e, { icon: s }),
    t,
    l && /* @__PURE__ */ Q($e, { icon: l })
  ] });
  return i && (u = /* @__PURE__ */ Q(ju, { title: i, arrow: !0, children: u })), u;
}, Np = () => {
  const [t, e] = At.useState(ue[0]), [n, r] = At.useState(!1), a = E.useMemo(() => ue.findIndex((l) => l.id === (t == null ? void 0 : t.id)) || 0, [t]), i = a === ue.length - 1, o = E.useCallback(() => {
    i || e(ue[a + 1]);
  }, [a, i]), s = E.useCallback(() => {
    a !== 0 && e(ue[a - 1]);
  }, [a]);
  return E.useEffect(() => {
    n && setTimeout(() => {
      r(!1), i || o();
    }, 1e3);
  }, [n, i, a, o]), /* @__PURE__ */ _n("div", { css: [{
    height: "500px",
    borderWidth: "1px"
  }], children: [
    /* @__PURE__ */ _n("div", { css: [{
      display: "flex",
      flexDirection: "row"
    }, gs`
            max-height: calc(100% - 49px);
          `], children: [
      /* @__PURE__ */ Q(bs, { activeItem: t, onChange: e, css: {
        flexBasis: "33.333333%"
      }, items: ue }),
      /* @__PURE__ */ Q("div", { css: {
        flex: "1 1 0%",
        borderLeftWidth: "1px",
        padding: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
      }, children: /* @__PURE__ */ Q("h1", { children: t == null ? void 0 : t.title }) })
    ] }),
    /* @__PURE__ */ _n("div", { css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTopWidth: "1px",
      padding: "0.5rem"
    }, children: [
      /* @__PURE__ */ Q("div", { children: /* @__PURE__ */ Q(Fi, { color: "gray", onClick: () => s(), icon: Ui.faArrowLeft, children: "Назад" }) }),
      /* @__PURE__ */ Q("div", { children: /* @__PURE__ */ Q(Fi, { color: "green", tooltip: i ? "Сохранить программу" : "Следующий шаг", onClick: () => r(!0), isLoading: n, iconAfter: i ? void 0 : Wi.faArrowRight, children: i ? "Сохранить" : "Далее" }) })
    ] })
  ] });
};
export {
  Np as default
};
