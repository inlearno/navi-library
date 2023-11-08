import { r as m, R as on, a as Oe, j as X } from "./lib-7b3db033.js";
const Tr = {
  black: "#000",
  white: "#fff"
}, Ae = Tr, Er = {
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
}, he = Er, Or = {
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
}, me = Or, Pr = {
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
}, ge = Pr, Ar = {
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
}, ye = Ar, Mr = {
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
}, be = Mr, Ir = {
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
}, Te = Ir, _r = {
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
}, Br = _r;
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, x.apply(this, arguments);
}
function ue(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Mn(e) {
  if (!ue(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Mn(e[n]);
  }), t;
}
function ne(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? x({}, e) : e;
  return ue(e) && ue(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (ue(t[o]) && o in e && ue(e[o]) ? r[o] = ne(e[o], t[o], n) : n.clone ? r[o] = ue(t[o]) ? Mn(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Ce(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function D(e) {
  if (typeof e != "string")
    throw new Error(Ce(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Fr = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Lr = Fr;
function Ke(e) {
  const t = m.useRef(e);
  return Lr(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function an(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      zr(n, t);
    });
  }, e);
}
let Qe = !0, Tt = !1, sn;
const jr = {
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
function Kr(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && jr[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Vr(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Qe = !0);
}
function kt() {
  Qe = !1;
}
function Wr() {
  this.visibilityState === "hidden" && Tt && (Qe = !0);
}
function Dr(e) {
  e.addEventListener("keydown", Vr, !0), e.addEventListener("mousedown", kt, !0), e.addEventListener("pointerdown", kt, !0), e.addEventListener("touchstart", kt, !0), e.addEventListener("visibilitychange", Wr, !0);
}
function Nr(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Qe || Kr(t);
}
function Ur() {
  const e = m.useCallback((o) => {
    o != null && Dr(o.ownerDocument);
  }, []), t = m.useRef(!1);
  function n() {
    return t.current ? (Tt = !0, window.clearTimeout(sn), sn = window.setTimeout(() => {
      Tt = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Nr(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function It(e, t) {
  const n = x({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = x({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = x({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = It(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function In(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, a) => {
        if (a) {
          const s = t(a);
          s !== "" && i.push(s), n && n[a] && i.push(n[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const cn = (e) => e, Gr = () => {
  let e = cn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = cn;
    }
  };
}, Hr = Gr(), Xr = Hr, Yr = {
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
function _t(e, t, n = "Mui") {
  const r = Yr[t];
  return r ? `${n}-${r}` : `${Xr.generate(e)}-${t}`;
}
function Bt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = _t(e, o, n);
  }), r;
}
const _n = "$$material";
function ee(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Bn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var qr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Zr = /* @__PURE__ */ Bn(
  function(e) {
    return qr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Jr(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Qr(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var eo = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Qr(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Jr(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), V = "-ms-", Ye = "-moz-", E = "-webkit-", zn = "comm", zt = "rule", Ft = "decl", to = "@import", Fn = "@keyframes", no = "@layer", ro = Math.abs, et = String.fromCharCode, oo = Object.assign;
function io(e, t) {
  return j(e, 0) ^ 45 ? (((t << 2 ^ j(e, 0)) << 2 ^ j(e, 1)) << 2 ^ j(e, 2)) << 2 ^ j(e, 3) : 0;
}
function Ln(e) {
  return e.trim();
}
function ao(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function O(e, t, n) {
  return e.replace(t, n);
}
function Et(e, t) {
  return e.indexOf(t);
}
function j(e, t) {
  return e.charCodeAt(t) | 0;
}
function Me(e, t, n) {
  return e.slice(t, n);
}
function oe(e) {
  return e.length;
}
function Lt(e) {
  return e.length;
}
function Ve(e, t) {
  return t.push(e), e;
}
function so(e, t) {
  return e.map(t).join("");
}
var tt = 1, Se = 1, jn = 0, U = 0, F = 0, $e = "";
function nt(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: tt, column: Se, length: a, return: "" };
}
function Ee(e, t) {
  return oo(nt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function co() {
  return F;
}
function lo() {
  return F = U > 0 ? j($e, --U) : 0, Se--, F === 10 && (Se = 1, tt--), F;
}
function Y() {
  return F = U < jn ? j($e, U++) : 0, Se++, F === 10 && (Se = 1, tt++), F;
}
function se() {
  return j($e, U);
}
function Ne() {
  return U;
}
function Be(e, t) {
  return Me($e, e, t);
}
function Ie(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Kn(e) {
  return tt = Se = 1, jn = oe($e = e), U = 0, [];
}
function Vn(e) {
  return $e = "", e;
}
function Ue(e) {
  return Ln(Be(U - 1, Ot(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function uo(e) {
  for (; (F = se()) && F < 33; )
    Y();
  return Ie(e) > 2 || Ie(F) > 3 ? "" : " ";
}
function fo(e, t) {
  for (; --t && Y() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return Be(e, Ne() + (t < 6 && se() == 32 && Y() == 32));
}
function Ot(e) {
  for (; Y(); )
    switch (F) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ot(F);
        break;
      case 40:
        e === 41 && Ot(e);
        break;
      case 92:
        Y();
        break;
    }
  return U;
}
function po(e, t) {
  for (; Y() && e + F !== 47 + 10; )
    if (e + F === 42 + 42 && se() === 47)
      break;
  return "/*" + Be(t, U - 1) + "*" + et(e === 47 ? e : Y());
}
function ho(e) {
  for (; !Ie(se()); )
    Y();
  return Be(e, U);
}
function mo(e) {
  return Vn(Ge("", null, null, null, [""], e = Kn(e), 0, [0], e));
}
function Ge(e, t, n, r, o, i, a, s, c) {
  for (var l = 0, d = 0, h = a, f = 0, y = 0, p = 0, u = 1, S = 1, C = 1, k = 0, T = "", g = o, R = i, w = r, b = T; S; )
    switch (p = k, k = Y()) {
      case 40:
        if (p != 108 && j(b, h - 1) == 58) {
          Et(b += O(Ue(k), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += Ue(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += uo(p);
        break;
      case 92:
        b += fo(Ne() - 1, 7);
        continue;
      case 47:
        switch (se()) {
          case 42:
          case 47:
            Ve(go(po(Y(), Ne()), t, n), c);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * u:
        s[l++] = oe(b) * C;
      case 125 * u:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            S = 0;
          case 59 + d:
            C == -1 && (b = O(b, /\f/g, "")), y > 0 && oe(b) - h && Ve(y > 32 ? un(b + ";", r, n, h - 1) : un(O(b, " ", "") + ";", r, n, h - 2), c);
            break;
          case 59:
            b += ";";
          default:
            if (Ve(w = ln(b, t, n, l, d, o, s, T, g = [], R = [], h), i), k === 123)
              if (d === 0)
                Ge(b, t, w, w, g, i, h, s, R);
              else
                switch (f === 99 && j(b, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e, w, w, r && Ve(ln(e, w, w, 0, 0, o, s, T, o, g = [], h), R), o, R, h, s, r ? g : R);
                    break;
                  default:
                    Ge(b, w, w, w, [""], R, 0, s, R);
                }
        }
        l = d = y = 0, u = C = 1, T = b = "", h = a;
        break;
      case 58:
        h = 1 + oe(b), y = p;
      default:
        if (u < 1) {
          if (k == 123)
            --u;
          else if (k == 125 && u++ == 0 && lo() == 125)
            continue;
        }
        switch (b += et(k), k * u) {
          case 38:
            C = d > 0 ? 1 : (b += "\f", -1);
            break;
          case 44:
            s[l++] = (oe(b) - 1) * C, C = 1;
            break;
          case 64:
            se() === 45 && (b += Ue(Y())), f = se(), d = h = oe(T = b += ho(Ne())), k++;
            break;
          case 45:
            p === 45 && oe(b) == 2 && (u = 0);
        }
    }
  return i;
}
function ln(e, t, n, r, o, i, a, s, c, l, d) {
  for (var h = o - 1, f = o === 0 ? i : [""], y = Lt(f), p = 0, u = 0, S = 0; p < r; ++p)
    for (var C = 0, k = Me(e, h + 1, h = ro(u = a[p])), T = e; C < y; ++C)
      (T = Ln(u > 0 ? f[C] + " " + k : O(k, /&\f/g, f[C]))) && (c[S++] = T);
  return nt(e, t, n, o === 0 ? zt : s, c, l, d);
}
function go(e, t, n) {
  return nt(e, t, n, zn, et(co()), Me(e, 2, -2), 0);
}
function un(e, t, n, r) {
  return nt(e, t, n, Ft, Me(e, 0, r), Me(e, r + 1, -1), r);
}
function xe(e, t) {
  for (var n = "", r = Lt(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function yo(e, t, n, r) {
  switch (e.type) {
    case no:
      if (e.children.length)
        break;
    case to:
    case Ft:
      return e.return = e.return || e.value;
    case zn:
      return "";
    case Fn:
      return e.return = e.value + "{" + xe(e.children, r) + "}";
    case zt:
      e.value = e.props.join(",");
  }
  return oe(n = xe(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function bo(e) {
  var t = Lt(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function xo(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var vo = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = se(), o === 38 && i === 12 && (n[r] = 1), !Ie(i); )
    Y();
  return Be(t, U);
}, Co = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ie(o)) {
      case 0:
        o === 38 && se() === 12 && (n[r] = 1), t[r] += vo(U - 1, n, r);
        break;
      case 2:
        t[r] += Ue(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = se() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += et(o);
    }
  while (o = Y());
  return t;
}, So = function(t, n) {
  return Vn(Co(Kn(t), n));
}, fn = /* @__PURE__ */ new WeakMap(), $o = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !fn.get(r)) && !o) {
      fn.set(t, !0);
      for (var i = [], a = So(n, i), s = r.props, c = 0, l = 0; c < a.length; c++)
        for (var d = 0; d < s.length; d++, l++)
          t.props[l] = i[c] ? a[c].replace(/&\f/g, s[d]) : s[d] + " " + a[c];
    }
  }
}, ko = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Wn(e, t) {
  switch (io(e, t)) {
    case 5103:
      return E + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return E + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return E + e + Ye + e + V + e + e;
    case 6828:
    case 4268:
      return E + e + V + e + e;
    case 6165:
      return E + e + V + "flex-" + e + e;
    case 5187:
      return E + e + O(e, /(\w+).+(:[^]+)/, E + "box-$1$2" + V + "flex-$1$2") + e;
    case 5443:
      return E + e + V + "flex-item-" + O(e, /flex-|-self/, "") + e;
    case 4675:
      return E + e + V + "flex-line-pack" + O(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return E + e + V + O(e, "shrink", "negative") + e;
    case 5292:
      return E + e + V + O(e, "basis", "preferred-size") + e;
    case 6060:
      return E + "box-" + O(e, "-grow", "") + E + e + V + O(e, "grow", "positive") + e;
    case 4554:
      return E + O(e, /([^-])(transform)/g, "$1" + E + "$2") + e;
    case 6187:
      return O(O(O(e, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return O(e, /(image-set\([^]*)/, E + "$1$`$1");
    case 4968:
      return O(O(e, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + E + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return O(e, /(.+)-inline(.+)/, E + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (oe(e) - 1 - t > 6)
        switch (j(e, t + 1)) {
          case 109:
            if (j(e, t + 4) !== 45)
              break;
          case 102:
            return O(e, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + Ye + (j(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Et(e, "stretch") ? Wn(O(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (j(e, t + 1) !== 115)
        break;
    case 6444:
      switch (j(e, oe(e) - 3 - (~Et(e, "!important") && 10))) {
        case 107:
          return O(e, ":", ":" + E) + e;
        case 101:
          return O(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + E + (j(e, 14) === 45 ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + V + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (j(e, t + 11)) {
        case 114:
          return E + e + V + O(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return E + e + V + O(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return E + e + V + O(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return E + e + V + e + e;
  }
  return e;
}
var wo = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ft:
        t.return = Wn(t.value, t.length);
        break;
      case Fn:
        return xe([Ee(t, {
          value: O(t.value, "@", "@" + E)
        })], o);
      case zt:
        if (t.length)
          return so(t.props, function(i) {
            switch (ao(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xe([Ee(t, {
                  props: [O(i, /:(read-\w+)/, ":" + Ye + "$1")]
                })], o);
              case "::placeholder":
                return xe([Ee(t, {
                  props: [O(i, /:(plac\w+)/, ":" + E + "input-$1")]
                }), Ee(t, {
                  props: [O(i, /:(plac\w+)/, ":" + Ye + "$1")]
                }), Ee(t, {
                  props: [O(i, /:(plac\w+)/, V + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Ro = [wo], To = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(u) {
      var S = u.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ro, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(u) {
      for (var S = u.getAttribute("data-emotion").split(" "), C = 1; C < S.length; C++)
        i[S[C]] = !0;
      s.push(u);
    }
  );
  var c, l = [$o, ko];
  {
    var d, h = [yo, xo(function(u) {
      d.insert(u);
    })], f = bo(l.concat(o, h)), y = function(S) {
      return xe(mo(S), f);
    };
    c = function(S, C, k, T) {
      d = k, y(S ? S + "{" + C.styles + "}" : C.styles), T && (p.inserted[C.name] = !0);
    };
  }
  var p = {
    key: n,
    sheet: new eo({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return p.sheet.hydrate(s), p;
}, Dn = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L = typeof Symbol == "function" && Symbol.for, jt = L ? Symbol.for("react.element") : 60103, Kt = L ? Symbol.for("react.portal") : 60106, rt = L ? Symbol.for("react.fragment") : 60107, ot = L ? Symbol.for("react.strict_mode") : 60108, it = L ? Symbol.for("react.profiler") : 60114, at = L ? Symbol.for("react.provider") : 60109, st = L ? Symbol.for("react.context") : 60110, Vt = L ? Symbol.for("react.async_mode") : 60111, ct = L ? Symbol.for("react.concurrent_mode") : 60111, lt = L ? Symbol.for("react.forward_ref") : 60112, ut = L ? Symbol.for("react.suspense") : 60113, Eo = L ? Symbol.for("react.suspense_list") : 60120, ft = L ? Symbol.for("react.memo") : 60115, dt = L ? Symbol.for("react.lazy") : 60116, Oo = L ? Symbol.for("react.block") : 60121, Po = L ? Symbol.for("react.fundamental") : 60117, Ao = L ? Symbol.for("react.responder") : 60118, Mo = L ? Symbol.for("react.scope") : 60119;
function q(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case jt:
        switch (e = e.type, e) {
          case Vt:
          case ct:
          case rt:
          case it:
          case ot:
          case ut:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case st:
              case lt:
              case dt:
              case ft:
              case at:
                return e;
              default:
                return t;
            }
        }
      case Kt:
        return t;
    }
  }
}
function Nn(e) {
  return q(e) === ct;
}
A.AsyncMode = Vt;
A.ConcurrentMode = ct;
A.ContextConsumer = st;
A.ContextProvider = at;
A.Element = jt;
A.ForwardRef = lt;
A.Fragment = rt;
A.Lazy = dt;
A.Memo = ft;
A.Portal = Kt;
A.Profiler = it;
A.StrictMode = ot;
A.Suspense = ut;
A.isAsyncMode = function(e) {
  return Nn(e) || q(e) === Vt;
};
A.isConcurrentMode = Nn;
A.isContextConsumer = function(e) {
  return q(e) === st;
};
A.isContextProvider = function(e) {
  return q(e) === at;
};
A.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jt;
};
A.isForwardRef = function(e) {
  return q(e) === lt;
};
A.isFragment = function(e) {
  return q(e) === rt;
};
A.isLazy = function(e) {
  return q(e) === dt;
};
A.isMemo = function(e) {
  return q(e) === ft;
};
A.isPortal = function(e) {
  return q(e) === Kt;
};
A.isProfiler = function(e) {
  return q(e) === it;
};
A.isStrictMode = function(e) {
  return q(e) === ot;
};
A.isSuspense = function(e) {
  return q(e) === ut;
};
A.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === rt || e === ct || e === it || e === ot || e === ut || e === Eo || typeof e == "object" && e !== null && (e.$$typeof === dt || e.$$typeof === ft || e.$$typeof === at || e.$$typeof === st || e.$$typeof === lt || e.$$typeof === Po || e.$$typeof === Ao || e.$$typeof === Mo || e.$$typeof === Oo);
};
A.typeOf = q;
Dn.exports = A;
var Io = Dn.exports, Un = Io, _o = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gn = {};
Gn[Un.ForwardRef] = _o;
Gn[Un.Memo] = Bo;
var zo = !0;
function Fo(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Hn = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  zo === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Lo = function(t, n, r) {
  Hn(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function jo(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ko = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Vo = /[A-Z]|^ms/g, Wo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Xn = function(t) {
  return t.charCodeAt(1) === 45;
}, dn = function(t) {
  return t != null && typeof t != "boolean";
}, wt = /* @__PURE__ */ Bn(function(e) {
  return Xn(e) ? e : e.replace(Vo, "-$&").toLowerCase();
}), pn = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Wo, function(r, o, i) {
          return ie = {
            name: o,
            styles: i,
            next: ie
          }, o;
        });
  }
  return Ko[t] !== 1 && !Xn(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function _e(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return ie = {
          name: n.name,
          styles: n.styles,
          next: ie
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            ie = {
              name: r.name,
              styles: r.styles,
              next: ie
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return Do(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = ie, a = n(e);
        return ie = i, _e(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Do(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += _e(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : dn(a) && (r += wt(i) + ":" + pn(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          dn(a[s]) && (r += wt(i) + ":" + pn(i, a[s]) + ";");
      else {
        var c = _e(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += wt(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var hn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ie, Yn = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  ie = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += _e(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += _e(r, n, t[s]), o && (i += a[s]);
  hn.lastIndex = 0;
  for (var c = "", l; (l = hn.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    l[1];
  var d = jo(i) + c;
  return {
    name: d,
    styles: i,
    next: ie
  };
}, No = function(t) {
  return t();
}, Uo = on["useInsertionEffect"] ? on["useInsertionEffect"] : !1, Go = Uo || No, qn = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ To({
    key: "css"
  }) : null
);
qn.Provider;
var Ho = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(qn);
    return t(n, o, r);
  });
}, Zn = /* @__PURE__ */ m.createContext({});
function Xo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Yn(t);
}
var Wt = function() {
  var t = Xo.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Yo = Zr, qo = function(t) {
  return t !== "theme";
}, mn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Yo : qo;
}, gn = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Zo = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hn(n, r, o), Go(function() {
    return Lo(n, r, o);
  }), null;
}, Jo = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = gn(t, n, r), c = s || mn(o), l = !c("as");
  return function() {
    var d = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      h.push(d[0][0]);
      for (var f = d.length, y = 1; y < f; y++)
        h.push(d[y], d[0][y]);
    }
    var p = Ho(function(u, S, C) {
      var k = l && u.as || o, T = "", g = [], R = u;
      if (u.theme == null) {
        R = {};
        for (var w in u)
          R[w] = u[w];
        R.theme = m.useContext(Zn);
      }
      typeof u.className == "string" ? T = Fo(S.registered, g, u.className) : u.className != null && (T = u.className + " ");
      var b = Yn(h.concat(g), S.registered, R);
      T += S.key + "-" + b.name, a !== void 0 && (T += " " + a);
      var G = l && s === void 0 ? mn(k) : c, W = {};
      for (var v in u)
        l && v === "as" || // $FlowFixMe
        G(v) && (W[v] = u[v]);
      return W.className = T, W.ref = C, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Zo, {
        cache: S,
        serialized: b,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ m.createElement(k, W));
    });
    return p.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = o, p.__emotion_styles = h, p.__emotion_forwardProp = s, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + a;
      }
    }), p.withComponent = function(u, S) {
      return e(u, x({}, n, S, {
        shouldForwardProp: gn(p, S, !0)
      })).apply(void 0, h);
    }, p;
  };
}, Qo = [
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
], Pt = Jo.bind();
Qo.forEach(function(e) {
  Pt[e] = Pt(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ei(e, t) {
  return Pt(e, t);
}
const ti = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ni = ["values", "unit", "step"], ri = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => x({}, n, {
    [r.key]: r.val
  }), {});
};
function oi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
  } = e, o = ee(e, ni), i = ri(t), a = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function l(f, y) {
    const p = a.indexOf(y);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(p !== -1 && typeof t[a[p]] == "number" ? t[a[p]] : y) - r / 100}${n})`;
  }
  function d(f) {
    return a.indexOf(f) + 1 < a.length ? l(f, a[a.indexOf(f) + 1]) : s(f);
  }
  function h(f) {
    const y = a.indexOf(f);
    return y === 0 ? s(a[1]) : y === a.length - 1 ? c(a[y]) : l(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: a,
    values: i,
    up: s,
    down: c,
    between: l,
    only: d,
    not: h,
    unit: n
  }, o);
}
const ii = {
  borderRadius: 4
}, ai = ii;
function Pe(e, t) {
  return t ? ne(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Dt = {
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
}, yn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Dt[e]}px)`
};
function le(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || yn;
    return t.reduce((a, s, c) => (a[i.up(i.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || yn;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || Dt).indexOf(s) !== -1) {
        const c = i.up(s);
        a[c] = n(t[s], s);
      } else {
        const c = s;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function si(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function ci(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function pt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function qe(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = pt(e, n) || r, t && (o = t(o, r, e)), o;
}
function P(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], c = a.theme, l = pt(c, r) || {};
    return le(a, s, (h) => {
      let f = qe(l, o, h);
      return h === f && typeof h == "string" && (f = qe(l, o, `${t}${h === "default" ? "" : D(h)}`, h)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function li(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const ui = {
  m: "margin",
  p: "padding"
}, fi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, bn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, di = li((e) => {
  if (e.length > 2)
    if (bn[e])
      e = bn[e];
    else
      return [e];
  const [t, n] = e.split(""), r = ui[t], o = fi[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Nt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ut = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Nt, ...Ut];
function ze(e, t, n, r) {
  var o;
  const i = (o = pt(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function Jn(e) {
  return ze(e, "spacing", 8);
}
function Fe(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function pi(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Fe(t, n), r), {});
}
function hi(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = di(n), i = pi(o, r), a = e[n];
  return le(e, a, i);
}
function Qn(e, t) {
  const n = Jn(e.theme);
  return Object.keys(e).map((r) => hi(e, t, r, n)).reduce(Pe, {});
}
function _(e) {
  return Qn(e, Nt);
}
_.propTypes = {};
_.filterProps = Nt;
function B(e) {
  return Qn(e, Ut);
}
B.propTypes = {};
B.filterProps = Ut;
function mi(e = 8) {
  if (e.mui)
    return e;
  const t = Jn({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function ht(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Pe(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function ae(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const gi = P({
  prop: "border",
  themeKey: "borders",
  transform: ae
}), yi = P({
  prop: "borderTop",
  themeKey: "borders",
  transform: ae
}), bi = P({
  prop: "borderRight",
  themeKey: "borders",
  transform: ae
}), xi = P({
  prop: "borderBottom",
  themeKey: "borders",
  transform: ae
}), vi = P({
  prop: "borderLeft",
  themeKey: "borders",
  transform: ae
}), Ci = P({
  prop: "borderColor",
  themeKey: "palette"
}), Si = P({
  prop: "borderTopColor",
  themeKey: "palette"
}), $i = P({
  prop: "borderRightColor",
  themeKey: "palette"
}), ki = P({
  prop: "borderBottomColor",
  themeKey: "palette"
}), wi = P({
  prop: "borderLeftColor",
  themeKey: "palette"
}), mt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ze(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Fe(t, r)
    });
    return le(e, e.borderRadius, n);
  }
  return null;
};
mt.propTypes = {};
mt.filterProps = ["borderRadius"];
ht(gi, yi, bi, xi, vi, Ci, Si, $i, ki, wi, mt);
const gt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ze(e.theme, "spacing", 8), n = (r) => ({
      gap: Fe(t, r)
    });
    return le(e, e.gap, n);
  }
  return null;
};
gt.propTypes = {};
gt.filterProps = ["gap"];
const yt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ze(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Fe(t, r)
    });
    return le(e, e.columnGap, n);
  }
  return null;
};
yt.propTypes = {};
yt.filterProps = ["columnGap"];
const bt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ze(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Fe(t, r)
    });
    return le(e, e.rowGap, n);
  }
  return null;
};
bt.propTypes = {};
bt.filterProps = ["rowGap"];
const Ri = P({
  prop: "gridColumn"
}), Ti = P({
  prop: "gridRow"
}), Ei = P({
  prop: "gridAutoFlow"
}), Oi = P({
  prop: "gridAutoColumns"
}), Pi = P({
  prop: "gridAutoRows"
}), Ai = P({
  prop: "gridTemplateColumns"
}), Mi = P({
  prop: "gridTemplateRows"
}), Ii = P({
  prop: "gridTemplateAreas"
}), _i = P({
  prop: "gridArea"
});
ht(gt, yt, bt, Ri, Ti, Ei, Oi, Pi, Ai, Mi, Ii, _i);
function ve(e, t) {
  return t === "grey" ? t : e;
}
const Bi = P({
  prop: "color",
  themeKey: "palette",
  transform: ve
}), zi = P({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ve
}), Fi = P({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ve
});
ht(Bi, zi, Fi);
function H(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Li = P({
  prop: "width",
  transform: H
}), Gt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Dt[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: H(n)
      };
    };
    return le(e, e.maxWidth, t);
  }
  return null;
};
Gt.filterProps = ["maxWidth"];
const ji = P({
  prop: "minWidth",
  transform: H
}), Ki = P({
  prop: "height",
  transform: H
}), Vi = P({
  prop: "maxHeight",
  transform: H
}), Wi = P({
  prop: "minHeight",
  transform: H
});
P({
  prop: "size",
  cssProperty: "width",
  transform: H
});
P({
  prop: "size",
  cssProperty: "height",
  transform: H
});
const Di = P({
  prop: "boxSizing"
});
ht(Li, Gt, ji, Ki, Vi, Wi, Di);
const Ni = {
  // borders
  border: {
    themeKey: "borders",
    transform: ae
  },
  borderTop: {
    themeKey: "borders",
    transform: ae
  },
  borderRight: {
    themeKey: "borders",
    transform: ae
  },
  borderBottom: {
    themeKey: "borders",
    transform: ae
  },
  borderLeft: {
    themeKey: "borders",
    transform: ae
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
    style: mt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ve
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ve
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ve
  },
  // spacing
  p: {
    style: B
  },
  pt: {
    style: B
  },
  pr: {
    style: B
  },
  pb: {
    style: B
  },
  pl: {
    style: B
  },
  px: {
    style: B
  },
  py: {
    style: B
  },
  padding: {
    style: B
  },
  paddingTop: {
    style: B
  },
  paddingRight: {
    style: B
  },
  paddingBottom: {
    style: B
  },
  paddingLeft: {
    style: B
  },
  paddingX: {
    style: B
  },
  paddingY: {
    style: B
  },
  paddingInline: {
    style: B
  },
  paddingInlineStart: {
    style: B
  },
  paddingInlineEnd: {
    style: B
  },
  paddingBlock: {
    style: B
  },
  paddingBlockStart: {
    style: B
  },
  paddingBlockEnd: {
    style: B
  },
  m: {
    style: _
  },
  mt: {
    style: _
  },
  mr: {
    style: _
  },
  mb: {
    style: _
  },
  ml: {
    style: _
  },
  mx: {
    style: _
  },
  my: {
    style: _
  },
  margin: {
    style: _
  },
  marginTop: {
    style: _
  },
  marginRight: {
    style: _
  },
  marginBottom: {
    style: _
  },
  marginLeft: {
    style: _
  },
  marginX: {
    style: _
  },
  marginY: {
    style: _
  },
  marginInline: {
    style: _
  },
  marginInlineStart: {
    style: _
  },
  marginInlineEnd: {
    style: _
  },
  marginBlock: {
    style: _
  },
  marginBlockStart: {
    style: _
  },
  marginBlockEnd: {
    style: _
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
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
    style: gt
  },
  rowGap: {
    style: bt
  },
  columnGap: {
    style: yt
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
    transform: H
  },
  maxWidth: {
    style: Gt
  },
  minWidth: {
    transform: H
  },
  height: {
    transform: H
  },
  maxHeight: {
    transform: H
  },
  minHeight: {
    transform: H
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
}, Ht = Ni;
function Ui(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Gi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hi() {
  function e(n, r, o, i) {
    const a = {
      [n]: r,
      theme: o
    }, s = i[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: l,
      transform: d,
      style: h
    } = s;
    if (r == null)
      return null;
    if (l === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const f = pt(o, l) || {};
    return h ? h(a) : le(a, r, (p) => {
      let u = qe(f, d, p);
      return p === u && typeof p == "string" && (u = qe(f, d, `${n}${p === "default" ? "" : D(p)}`, p)), c === !1 ? u : {
        [c]: u
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : Ht;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(i);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const d = si(i.breakpoints), h = Object.keys(d);
      let f = d;
      return Object.keys(l).forEach((y) => {
        const p = Gi(l[y], i);
        if (p != null)
          if (typeof p == "object")
            if (a[y])
              f = Pe(f, e(y, p, i, a));
            else {
              const u = le({
                theme: i
              }, p, (S) => ({
                [y]: S
              }));
              Ui(u, p) ? f[y] = t({
                sx: p,
                theme: i
              }) : f = Pe(f, u);
            }
          else
            f = Pe(f, e(y, p, i, a));
      }), ci(h, f);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const er = Hi();
er.filterProps = ["sx"];
const Xt = er, Xi = ["breakpoints", "palette", "spacing", "shape"];
function Yt(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = ee(e, Xi), s = oi(n), c = mi(o);
  let l = ne({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: c,
    shape: x({}, ai, i)
  }, a);
  return l = t.reduce((d, h) => ne(d, h), l), l.unstable_sxConfig = x({}, Ht, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return Xt({
      sx: h,
      theme: this
    });
  }, l;
}
function Yi(e) {
  return Object.keys(e).length === 0;
}
function qi(e = null) {
  const t = m.useContext(Zn);
  return !t || Yi(t) ? e : t;
}
const Zi = Yt();
function Ji(e = Zi) {
  return qi(e);
}
function tr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = tr(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function J() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = tr(e)) && (r && (r += " "), r += t);
  return r;
}
const Qi = ["variant"];
function xn(e) {
  return e.length === 0;
}
function nr(e) {
  const {
    variant: t
  } = e, n = ee(e, Qi);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += xn(r) ? e[o] : D(e[o]) : r += `${xn(r) ? o : D(o)}${D(e[o].toString())}`;
  }), r;
}
const ea = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ta(e) {
  return Object.keys(e).length === 0;
}
function na(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const ra = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Ze = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = nr(n.props);
    t[r] = n.style;
  }), t;
}, oa = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Ze(n);
}, Je = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(t[nr(i.props)]);
  }), o;
}, ia = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return Je(e, t, i);
};
function He(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const aa = Yt(), sa = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Xe({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return ta(t) ? e : t[n] || t;
}
function ca(e) {
  return e ? (t, n) => n[e] : null;
}
const vn = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(x({}, t, {
    theme: Xe(x({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = Je(t, Ze(i), i);
    return [o, ...a];
  }
  return o;
};
function la(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = aa,
    rootShouldForwardProp: r = He,
    slotShouldForwardProp: o = He
  } = e, i = (a) => Xt(x({}, a, {
    theme: Xe(x({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    ti(a, (g) => g.filter((R) => !(R != null && R.__mui_systemSx)));
    const {
      name: c,
      slot: l,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = ca(sa(l))
    } = s, y = ee(s, ea), p = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), u = h || !1;
    let S, C = He;
    l === "Root" || l === "root" ? C = r : l ? C = o : na(a) && (C = void 0);
    const k = ei(a, x({
      shouldForwardProp: C,
      label: S
    }, y)), T = (g, ...R) => {
      const w = R ? R.map((v) => {
        if (typeof v == "function" && v.__emotion_real !== v)
          return (I) => vn({
            styledArg: v,
            props: I,
            defaultTheme: n,
            themeId: t
          });
        if (ue(v)) {
          let I = v, z;
          return v && v.variants && (z = v.variants, delete I.variants, I = (N) => {
            let K = v;
            return Je(N, Ze(z), z).forEach((te) => {
              K = ne(K, te);
            }), K;
          }), I;
        }
        return v;
      }) : [];
      let b = g;
      if (ue(g)) {
        let v;
        g && g.variants && (v = g.variants, delete b.variants, b = (I) => {
          let z = g;
          return Je(I, Ze(v), v).forEach((K) => {
            z = ne(z, K);
          }), z;
        });
      } else
        typeof g == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        g.__emotion_real !== g && (b = (v) => vn({
          styledArg: g,
          props: v,
          defaultTheme: n,
          themeId: t
        }));
      c && f && w.push((v) => {
        const I = Xe(x({}, v, {
          defaultTheme: n,
          themeId: t
        })), z = ra(c, I);
        if (z) {
          const N = {};
          return Object.entries(z).forEach(([K, Z]) => {
            N[K] = typeof Z == "function" ? Z(x({}, v, {
              theme: I
            })) : Z;
          }), f(v, N);
        }
        return null;
      }), c && !p && w.push((v) => {
        const I = Xe(x({}, v, {
          defaultTheme: n,
          themeId: t
        }));
        return ia(v, oa(c, I), I, c);
      }), u || w.push(i);
      const G = w.length - R.length;
      if (Array.isArray(g) && G > 0) {
        const v = new Array(G).fill("");
        b = [...g, ...v], b.raw = [...g.raw, ...v];
      }
      const W = k(b, ...w);
      return a.muiName && (W.muiName = a.muiName), W;
    };
    return k.withConfig && (T.withConfig = k.withConfig), T;
  };
}
function ua(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : It(t.components[n].defaultProps, r);
}
function fa({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Ji(n);
  return r && (o = o[r] || o), ua({
    theme: o,
    name: t,
    props: e
  });
}
function qt(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function da(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function pe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return pe(da(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Ce(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Ce(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function xt(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function pa(e) {
  e = pe(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (l, d = (l + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), xt({
    type: s,
    values: c
  });
}
function Cn(e) {
  e = pe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? pe(pa(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ha(e, t) {
  const n = Cn(e), r = Cn(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function We(e, t) {
  return e = pe(e), t = qt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, xt(e);
}
function ma(e, t) {
  if (e = pe(e), t = qt(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return xt(e);
}
function ga(e, t) {
  if (e = pe(e), t = qt(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return xt(e);
}
function ya(e, t) {
  return x({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const ba = ["mode", "contrastThreshold", "tonalOffset"], Sn = {
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
    paper: Ae.white,
    default: Ae.white
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
}, Rt = {
  text: {
    primary: Ae.white,
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
    active: Ae.white,
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
function $n(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ga(e.main, o) : t === "dark" && (e.dark = ma(e.main, i)));
}
function xa(e = "light") {
  return e === "dark" ? {
    main: ge[200],
    light: ge[50],
    dark: ge[400]
  } : {
    main: ge[700],
    light: ge[400],
    dark: ge[800]
  };
}
function va(e = "light") {
  return e === "dark" ? {
    main: me[200],
    light: me[50],
    dark: me[400]
  } : {
    main: me[500],
    light: me[300],
    dark: me[700]
  };
}
function Ca(e = "light") {
  return e === "dark" ? {
    main: he[500],
    light: he[300],
    dark: he[700]
  } : {
    main: he[700],
    light: he[400],
    dark: he[800]
  };
}
function Sa(e = "light") {
  return e === "dark" ? {
    main: ye[400],
    light: ye[300],
    dark: ye[700]
  } : {
    main: ye[700],
    light: ye[500],
    dark: ye[900]
  };
}
function $a(e = "light") {
  return e === "dark" ? {
    main: be[400],
    light: be[300],
    dark: be[700]
  } : {
    main: be[800],
    light: be[500],
    dark: be[900]
  };
}
function ka(e = "light") {
  return e === "dark" ? {
    main: Te[400],
    light: Te[300],
    dark: Te[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Te[500],
    dark: Te[900]
  };
}
function wa(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = ee(e, ba), i = e.primary || xa(t), a = e.secondary || va(t), s = e.error || Ca(t), c = e.info || Sa(t), l = e.success || $a(t), d = e.warning || ka(t);
  function h(u) {
    return ha(u, Rt.text.primary) >= n ? Rt.text.primary : Sn.text.primary;
  }
  const f = ({
    color: u,
    name: S,
    mainShade: C = 500,
    lightShade: k = 300,
    darkShade: T = 700
  }) => {
    if (u = x({}, u), !u.main && u[C] && (u.main = u[C]), !u.hasOwnProperty("main"))
      throw new Error(Ce(11, S ? ` (${S})` : "", C));
    if (typeof u.main != "string")
      throw new Error(Ce(12, S ? ` (${S})` : "", JSON.stringify(u.main)));
    return $n(u, "light", k, r), $n(u, "dark", T, r), u.contrastText || (u.contrastText = h(u.main)), u;
  }, y = {
    dark: Rt,
    light: Sn
  };
  return ne(x({
    // A collection of common colors.
    common: x({}, Ae),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: Br,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, y[t]), o);
}
const Ra = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ta(e) {
  return Math.round(e * 1e5) / 1e5;
}
const kn = {
  textTransform: "uppercase"
}, wn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ea(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = wn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = n, f = ee(n, Ra), y = o / 14, p = h || ((C) => `${C / l * y}rem`), u = (C, k, T, g, R) => x({
    fontFamily: r,
    fontWeight: C,
    fontSize: p(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T
  }, r === wn ? {
    letterSpacing: `${Ta(g / k)}em`
  } : {}, R, d), S = {
    h1: u(i, 96, 1.167, -1.5),
    h2: u(i, 60, 1.2, -0.5),
    h3: u(a, 48, 1.167, 0),
    h4: u(a, 34, 1.235, 0.25),
    h5: u(a, 24, 1.334, 0),
    h6: u(s, 20, 1.6, 0.15),
    subtitle1: u(a, 16, 1.75, 0.15),
    subtitle2: u(s, 14, 1.57, 0.1),
    body1: u(a, 16, 1.5, 0.15),
    body2: u(a, 14, 1.43, 0.15),
    button: u(s, 14, 1.75, 0.4, kn),
    caption: u(a, 12, 1.66, 0.4),
    overline: u(a, 12, 2.66, 1, kn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ne(x({
    htmlFontSize: l,
    pxToRem: p,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: c
  }, S), f, {
    clone: !1
    // No need to clone deep
  });
}
const Oa = 0.2, Pa = 0.14, Aa = 0.12;
function M(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Oa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Pa})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Aa})`].join(",");
}
const Ma = ["none", M(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), M(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), M(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), M(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), M(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), M(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), M(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), M(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), M(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), M(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), M(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), M(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), M(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), M(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), M(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), M(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), M(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), M(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), M(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), M(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), M(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), M(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), M(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), M(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ia = Ma, _a = ["duration", "easing", "delay"], Ba = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, za = {
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
function Rn(e) {
  return `${Math.round(e)}ms`;
}
function Fa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function La(e) {
  const t = x({}, Ba, e.easing), n = x({}, za, e.duration);
  return x({
    getAutoHeightDuration: Fa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: s = t.easeInOut,
        delay: c = 0
      } = i;
      return ee(i, _a), (Array.isArray(o) ? o : [o]).map((l) => `${l} ${typeof a == "string" ? a : Rn(a)} ${s} ${typeof c == "string" ? c : Rn(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const ja = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ka = ja, Va = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Wa(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ee(e, Va);
  if (e.vars)
    throw new Error(Ce(18));
  const s = wa(r), c = Yt(e);
  let l = ne(c, {
    mixins: ya(c.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ia.slice(),
    typography: Ea(s, i),
    transitions: La(o),
    zIndex: x({}, Ka)
  });
  return l = ne(l, a), l = t.reduce((d, h) => ne(d, h), l), l.unstable_sxConfig = x({}, Ht, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return Xt({
      sx: h,
      theme: this
    });
  }, l;
}
const Da = Wa(), rr = Da;
function Zt({
  props: e,
  name: t
}) {
  return fa({
    props: e,
    name: t,
    defaultTheme: rr,
    themeId: _n
  });
}
const or = (e) => He(e) && e !== "classes", Na = la({
  themeId: _n,
  defaultTheme: rr,
  rootShouldForwardProp: or
}), ke = Na;
function At(e, t) {
  return At = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, At(e, t);
}
function Ua(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, At(e, t);
}
const Tn = Oe.createContext(null);
function Ga(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jt(e, t) {
  var n = function(i) {
    return t && m.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && m.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Ha(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var l = r[c][a];
        s[r[c][a]] = n(l);
      }
    s[c] = n(c);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = n(o[a]);
  return s;
}
function de(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Xa(e, t) {
  return Jt(e.children, function(n) {
    return m.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: de(n, "appear", e),
      enter: de(n, "enter", e),
      exit: de(n, "exit", e)
    });
  });
}
function Ya(e, t, n) {
  var r = Jt(e.children), o = Ha(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (m.isValidElement(a)) {
      var s = i in t, c = i in r, l = t[i], d = m.isValidElement(l) && !l.props.in;
      c && (!s || d) ? o[i] = m.cloneElement(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: de(a, "exit", e),
        enter: de(a, "enter", e)
      }) : !c && s && !d ? o[i] = m.cloneElement(a, {
        in: !1
      }) : c && s && m.isValidElement(l) && (o[i] = m.cloneElement(a, {
        onExited: n.bind(null, a),
        in: l.props.in,
        exit: de(a, "exit", e),
        enter: de(a, "enter", e)
      }));
    }
  }), o;
}
var qa = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Za = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Qt = /* @__PURE__ */ function(e) {
  Ua(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(Ga(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, c = i.firstRender;
    return {
      children: c ? Xa(o, s) : Ya(o, a, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = Jt(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var c = x({}, s.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = ee(o, ["component", "childFactory"]), c = this.state.contextValue, l = qa(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Oe.createElement(Tn.Provider, {
      value: c
    }, l) : /* @__PURE__ */ Oe.createElement(Tn.Provider, {
      value: c
    }, /* @__PURE__ */ Oe.createElement(i, s, l));
  }, t;
}(Oe.Component);
Qt.propTypes = {};
Qt.defaultProps = Za;
const Ja = Qt;
function Qa(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: c,
    timeout: l
  } = e, [d, h] = m.useState(!1), f = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, p = J(n.child, d && n.childLeaving, r && n.childPulsate);
  return !s && !d && h(!0), m.useEffect(() => {
    if (!s && c != null) {
      const u = setTimeout(c, l);
      return () => {
        clearTimeout(u);
      };
    }
  }, [c, s, l]), /* @__PURE__ */ X.jsx("span", {
    className: f,
    style: y,
    children: /* @__PURE__ */ X.jsx("span", {
      className: p
    })
  });
}
const es = Bt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Q = es, ts = ["center", "classes", "className"];
let vt = (e) => e, En, On, Pn, An;
const Mt = 550, ns = 80, rs = Wt(En || (En = vt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), os = Wt(On || (On = vt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), is = Wt(Pn || (Pn = vt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), as = ke("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), ss = ke(Qa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(An || (An = vt`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Q.rippleVisible, rs, Mt, ({
  theme: e
}) => e.transitions.easing.easeInOut, Q.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Q.child, Q.childLeaving, os, Mt, ({
  theme: e
}) => e.transitions.easing.easeInOut, Q.childPulsate, is, ({
  theme: e
}) => e.transitions.easing.easeInOut), cs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Zt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, s = ee(r, ts), [c, l] = m.useState([]), d = m.useRef(0), h = m.useRef(null);
  m.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [c]);
  const f = m.useRef(!1), y = m.useRef(0), p = m.useRef(null), u = m.useRef(null);
  m.useEffect(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const S = m.useCallback((g) => {
    const {
      pulsate: R,
      rippleX: w,
      rippleY: b,
      rippleSize: G,
      cb: W
    } = g;
    l((v) => [...v, /* @__PURE__ */ X.jsx(ss, {
      classes: {
        ripple: J(i.ripple, Q.ripple),
        rippleVisible: J(i.rippleVisible, Q.rippleVisible),
        ripplePulsate: J(i.ripplePulsate, Q.ripplePulsate),
        child: J(i.child, Q.child),
        childLeaving: J(i.childLeaving, Q.childLeaving),
        childPulsate: J(i.childPulsate, Q.childPulsate)
      },
      timeout: Mt,
      pulsate: R,
      rippleX: w,
      rippleY: b,
      rippleSize: G
    }, d.current)]), d.current += 1, h.current = W;
  }, [i]), C = m.useCallback((g = {}, R = {}, w = () => {
  }) => {
    const {
      pulsate: b = !1,
      center: G = o || R.pulsate,
      fakeElement: W = !1
      // For test purposes
    } = R;
    if ((g == null ? void 0 : g.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (f.current = !0);
    const v = W ? null : u.current, I = v ? v.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, N, K;
    if (G || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      z = Math.round(I.width / 2), N = Math.round(I.height / 2);
    else {
      const {
        clientX: Z,
        clientY: te
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      z = Math.round(Z - I.left), N = Math.round(te - I.top);
    }
    if (G)
      K = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), K % 2 === 0 && (K += 1);
    else {
      const Z = Math.max(Math.abs((v ? v.clientWidth : 0) - z), z) * 2 + 2, te = Math.max(Math.abs((v ? v.clientHeight : 0) - N), N) * 2 + 2;
      K = Math.sqrt(Z ** 2 + te ** 2);
    }
    g != null && g.touches ? p.current === null && (p.current = () => {
      S({
        pulsate: b,
        rippleX: z,
        rippleY: N,
        rippleSize: K,
        cb: w
      });
    }, y.current = setTimeout(() => {
      p.current && (p.current(), p.current = null);
    }, ns)) : S({
      pulsate: b,
      rippleX: z,
      rippleY: N,
      rippleSize: K,
      cb: w
    });
  }, [o, S]), k = m.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), T = m.useCallback((g, R) => {
    if (clearTimeout(y.current), (g == null ? void 0 : g.type) === "touchend" && p.current) {
      p.current(), p.current = null, y.current = setTimeout(() => {
        T(g, R);
      });
      return;
    }
    p.current = null, l((w) => w.length > 0 ? w.slice(1) : w), h.current = R;
  }, []);
  return m.useImperativeHandle(n, () => ({
    pulsate: k,
    start: C,
    stop: T
  }), [k, C, T]), /* @__PURE__ */ X.jsx(as, x({
    className: J(Q.root, i.root, a),
    ref: u
  }, s, {
    children: /* @__PURE__ */ X.jsx(Ja, {
      component: null,
      exit: !0,
      children: c
    })
  }));
}), ls = cs;
function us(e) {
  return _t("MuiButtonBase", e);
}
const fs = Bt("MuiButtonBase", ["root", "disabled", "focusVisible"]), ds = fs, ps = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], hs = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = In({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, us, o);
  return n && r && (a.root += ` ${r}`), a;
}, ms = ke("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ds.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), gs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = Zt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: c = "button",
    disabled: l = !1,
    disableRipple: d = !1,
    disableTouchRipple: h = !1,
    focusRipple: f = !1,
    LinkComponent: y = "a",
    onBlur: p,
    onClick: u,
    onContextMenu: S,
    onDragLeave: C,
    onFocus: k,
    onFocusVisible: T,
    onKeyDown: g,
    onKeyUp: R,
    onMouseDown: w,
    onMouseLeave: b,
    onMouseUp: G,
    onTouchEnd: W,
    onTouchMove: v,
    onTouchStart: I,
    tabIndex: z = 0,
    TouchRippleProps: N,
    touchRippleRef: K,
    type: Z
  } = r, te = ee(r, ps), we = m.useRef(null), re = m.useRef(null), ar = an(re, K), {
    isFocusVisibleRef: en,
    onFocus: sr,
    onBlur: cr,
    ref: lr
  } = Ur(), [fe, Le] = m.useState(!1);
  l && fe && Le(!1), m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Le(!0), we.current.focus();
    }
  }), []);
  const [Ct, ur] = m.useState(!1);
  m.useEffect(() => {
    ur(!0);
  }, []);
  const fr = Ct && !d && !l;
  m.useEffect(() => {
    fe && f && !d && Ct && re.current.pulsate();
  }, [d, f, fe, Ct]);
  function ce($, nn, Rr = h) {
    return Ke((rn) => (nn && nn(rn), !Rr && re.current && re.current[$](rn), !0));
  }
  const dr = ce("start", w), pr = ce("stop", S), hr = ce("stop", C), mr = ce("stop", G), gr = ce("stop", ($) => {
    fe && $.preventDefault(), b && b($);
  }), yr = ce("start", I), br = ce("stop", W), xr = ce("stop", v), vr = ce("stop", ($) => {
    cr($), en.current === !1 && Le(!1), p && p($);
  }, !1), Cr = Ke(($) => {
    we.current || (we.current = $.currentTarget), sr($), en.current === !0 && (Le(!0), T && T($)), k && k($);
  }), St = () => {
    const $ = we.current;
    return c && c !== "button" && !($.tagName === "A" && $.href);
  }, $t = m.useRef(!1), Sr = Ke(($) => {
    f && !$t.current && fe && re.current && $.key === " " && ($t.current = !0, re.current.stop($, () => {
      re.current.start($);
    })), $.target === $.currentTarget && St() && $.key === " " && $.preventDefault(), g && g($), $.target === $.currentTarget && St() && $.key === "Enter" && !l && ($.preventDefault(), u && u($));
  }), $r = Ke(($) => {
    f && $.key === " " && re.current && fe && !$.defaultPrevented && ($t.current = !1, re.current.stop($, () => {
      re.current.pulsate($);
    })), R && R($), u && $.target === $.currentTarget && St() && $.key === " " && !$.defaultPrevented && u($);
  });
  let je = c;
  je === "button" && (te.href || te.to) && (je = y);
  const Re = {};
  je === "button" ? (Re.type = Z === void 0 ? "button" : Z, Re.disabled = l) : (!te.href && !te.to && (Re.role = "button"), l && (Re["aria-disabled"] = l));
  const kr = an(n, lr, we), tn = x({}, r, {
    centerRipple: i,
    component: c,
    disabled: l,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: f,
    tabIndex: z,
    focusVisible: fe
  }), wr = hs(tn);
  return /* @__PURE__ */ X.jsxs(ms, x({
    as: je,
    className: J(wr.root, s),
    ownerState: tn,
    onBlur: vr,
    onClick: u,
    onContextMenu: pr,
    onFocus: Cr,
    onKeyDown: Sr,
    onKeyUp: $r,
    onMouseDown: dr,
    onMouseLeave: gr,
    onMouseUp: mr,
    onDragLeave: hr,
    onTouchEnd: br,
    onTouchMove: xr,
    onTouchStart: yr,
    ref: kr,
    tabIndex: l ? -1 : z,
    type: Z
  }, Re, te, {
    children: [a, fr ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ X.jsx(ls, x({
        ref: ar,
        center: i
      }, N))
    ) : null]
  }));
}), ys = gs;
function bs(e) {
  return _t("MuiButton", e);
}
const xs = Bt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), De = xs, vs = /* @__PURE__ */ m.createContext({}), Cs = vs, Ss = /* @__PURE__ */ m.createContext(void 0), $s = Ss, ks = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], ws = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${D(t)}`, `size${D(o)}`, `${i}Size${D(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${D(o)}`],
    endIcon: ["endIcon", `iconSize${D(o)}`]
  }, c = In(s, bs, a);
  return x({}, a, c);
}, ir = (e) => x({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Rs = ke(ys, {
  shouldForwardProp: (e) => or(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${D(n.color)}`], t[`size${D(n.size)}`], t[`${n.variant}Size${D(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return x({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": x({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : We(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${De.focusVisible}`]: x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${De.disabled}`]: x({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${We(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${De.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${De.disabled}`]: {
    boxShadow: "none"
  }
}), Ts = ke("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${D(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, ir(e))), Es = ke("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${D(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, ir(e))), Os = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(Cs), o = m.useContext($s), i = It(r, t), a = Zt({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: c = "primary",
    component: l = "button",
    className: d,
    disabled: h = !1,
    disableElevation: f = !1,
    disableFocusRipple: y = !1,
    endIcon: p,
    focusVisibleClassName: u,
    fullWidth: S = !1,
    size: C = "medium",
    startIcon: k,
    type: T,
    variant: g = "text"
  } = a, R = ee(a, ks), w = x({}, a, {
    color: c,
    component: l,
    disabled: h,
    disableElevation: f,
    disableFocusRipple: y,
    fullWidth: S,
    size: C,
    type: T,
    variant: g
  }), b = ws(w), G = k && /* @__PURE__ */ X.jsx(Ts, {
    className: b.startIcon,
    ownerState: w,
    children: k
  }), W = p && /* @__PURE__ */ X.jsx(Es, {
    className: b.endIcon,
    ownerState: w,
    children: p
  }), v = o || "";
  return /* @__PURE__ */ X.jsxs(Rs, x({
    ownerState: w,
    className: J(r.className, b.root, d, v),
    component: l,
    disabled: h,
    focusRipple: !y,
    focusVisibleClassName: J(b.focusVisible, u),
    ref: n,
    type: T
  }, R, {
    classes: b,
    children: [G, s, W]
  }));
}), Ps = Os, Is = () => /* @__PURE__ */ X.jsx(X.Fragment, { children: /* @__PURE__ */ X.jsx(Ps, { variant: "contained", color: "success", size: "small", children: "Сохранить" }) });
export {
  Is as default
};
