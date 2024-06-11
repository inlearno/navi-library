import { r as d, a as Yr, R as Nt, b as bo, c as ra } from "./react-6f5a8403.js";
var ia = { exports: {} }, jo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl = d, Pl = Symbol.for("react.element"), El = Symbol.for("react.fragment"), Tl = Object.prototype.hasOwnProperty, kl = Rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ol = { key: !0, ref: !0, __self: !0, __source: !0 };
function sa(e, t, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (o in t)
    Tl.call(t, o) && !Ol.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in t = e.defaultProps, t)
      r[o] === void 0 && (r[o] = t[o]);
  return { $$typeof: Pl, type: e, key: i, ref: s, props: r, _owner: kl.current };
}
jo.Fragment = El;
jo.jsx = sa;
jo.jsxs = sa;
ia.exports = jo;
var P = ia.exports;
function Il(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ml(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Bl = /* @__PURE__ */ function() {
  function e(n) {
    var o = this;
    this._insertTag = function(r) {
      var i;
      o.tags.length === 0 ? o.insertionPoint ? i = o.insertionPoint.nextSibling : o.prepend ? i = o.container.firstChild : i = o.before : i = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(r, i), o.tags.push(r);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ml(this));
    var r = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Il(r);
      try {
        i.insertRule(o, i.cssRules.length);
      } catch {
      }
    } else
      r.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      return o.parentNode && o.parentNode.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), it = "-ms-", Io = "-moz-", Ee = "-webkit-", aa = "comm", pi = "rule", fi = "decl", Al = "@import", la = "@keyframes", Nl = "@layer", Ll = Math.abs, Wo = String.fromCharCode, Fl = Object.assign;
function zl(e, t) {
  return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0;
}
function ca(e) {
  return e.trim();
}
function _l(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Te(e, t, n) {
  return e.replace(t, n);
}
function Zr(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function to(e, t, n) {
  return e.slice(t, n);
}
function kt(e) {
  return e.length;
}
function mi(e) {
  return e.length;
}
function vo(e, t) {
  return t.push(e), e;
}
function jl(e, t) {
  return e.map(t).join("");
}
var Do = 1, wn = 1, ua = 0, pt = 0, Xe = 0, On = "";
function Ho(e, t, n, o, r, i, s) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: Do, column: wn, length: s, return: "" };
}
function Fn(e, t) {
  return Fl(Ho("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Wl() {
  return Xe;
}
function Dl() {
  return Xe = pt > 0 ? ot(On, --pt) : 0, wn--, Xe === 10 && (wn = 1, Do--), Xe;
}
function gt() {
  return Xe = pt < ua ? ot(On, pt++) : 0, wn++, Xe === 10 && (wn = 1, Do++), Xe;
}
function It() {
  return ot(On, pt);
}
function Po() {
  return pt;
}
function lo(e, t) {
  return to(On, e, t);
}
function no(e) {
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
function da(e) {
  return Do = wn = 1, ua = kt(On = e), pt = 0, [];
}
function pa(e) {
  return On = "", e;
}
function Eo(e) {
  return ca(lo(pt - 1, Jr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hl(e) {
  for (; (Xe = It()) && Xe < 33; )
    gt();
  return no(e) > 2 || no(Xe) > 3 ? "" : " ";
}
function Ul(e, t) {
  for (; --t && gt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return lo(e, Po() + (t < 6 && It() == 32 && gt() == 32));
}
function Jr(e) {
  for (; gt(); )
    switch (Xe) {
      case e:
        return pt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Jr(Xe);
        break;
      case 40:
        e === 41 && Jr(e);
        break;
      case 92:
        gt();
        break;
    }
  return pt;
}
function Vl(e, t) {
  for (; gt() && e + Xe !== 47 + 10; )
    if (e + Xe === 42 + 42 && It() === 47)
      break;
  return "/*" + lo(t, pt - 1) + "*" + Wo(e === 47 ? e : gt());
}
function Kl(e) {
  for (; !no(It()); )
    gt();
  return lo(e, pt);
}
function Gl(e) {
  return pa(To("", null, null, null, [""], e = da(e), 0, [0], e));
}
function To(e, t, n, o, r, i, s, a, l) {
  for (var c = 0, u = 0, f = s, m = 0, g = 0, b = 0, h = 1, y = 1, S = 1, R = 0, C = "", v = r, $ = i, w = o, x = C; y; )
    switch (b = R, R = gt()) {
      case 40:
        if (b != 108 && ot(x, f - 1) == 58) {
          Zr(x += Te(Eo(R), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Eo(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Hl(b);
        break;
      case 92:
        x += Ul(Po() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            vo(ql(Vl(gt(), Po()), t, n), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * h:
        a[c++] = kt(x) * S;
      case 125 * h:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            S == -1 && (x = Te(x, /\f/g, "")), g > 0 && kt(x) - f && vo(g > 32 ? Ui(x + ";", o, n, f - 1) : Ui(Te(x, " ", "") + ";", o, n, f - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (vo(w = Hi(x, t, n, c, u, r, a, C, v = [], $ = [], f), i), R === 123)
              if (u === 0)
                To(x, t, w, w, v, i, f, a, $);
              else
                switch (m === 99 && ot(x, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    To(e, w, w, o && vo(Hi(e, w, w, 0, 0, r, a, C, r, v = [], f), $), r, $, f, a, o ? v : $);
                    break;
                  default:
                    To(x, w, w, w, [""], $, 0, a, $);
                }
        }
        c = u = g = 0, h = S = 1, C = x = "", f = s;
        break;
      case 58:
        f = 1 + kt(x), g = b;
      default:
        if (h < 1) {
          if (R == 123)
            --h;
          else if (R == 125 && h++ == 0 && Dl() == 125)
            continue;
        }
        switch (x += Wo(R), R * h) {
          case 38:
            S = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[c++] = (kt(x) - 1) * S, S = 1;
            break;
          case 64:
            It() === 45 && (x += Eo(gt())), m = It(), u = f = kt(C = x += Kl(Po())), R++;
            break;
          case 45:
            b === 45 && kt(x) == 2 && (h = 0);
        }
    }
  return i;
}
function Hi(e, t, n, o, r, i, s, a, l, c, u) {
  for (var f = r - 1, m = r === 0 ? i : [""], g = mi(m), b = 0, h = 0, y = 0; b < o; ++b)
    for (var S = 0, R = to(e, f + 1, f = Ll(h = s[b])), C = e; S < g; ++S)
      (C = ca(h > 0 ? m[S] + " " + R : Te(R, /&\f/g, m[S]))) && (l[y++] = C);
  return Ho(e, t, n, r === 0 ? pi : a, l, c, u);
}
function ql(e, t, n) {
  return Ho(e, t, n, aa, Wo(Wl()), to(e, 2, -2), 0);
}
function Ui(e, t, n, o) {
  return Ho(e, t, n, fi, to(e, 0, o), to(e, o + 1, -1), o);
}
function Cn(e, t) {
  for (var n = "", o = mi(e), r = 0; r < o; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Xl(e, t, n, o) {
  switch (e.type) {
    case Nl:
      if (e.children.length)
        break;
    case Al:
    case fi:
      return e.return = e.return || e.value;
    case aa:
      return "";
    case la:
      return e.return = e.value + "{" + Cn(e.children, o) + "}";
    case pi:
      e.value = e.props.join(",");
  }
  return kt(n = Cn(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Yl(e) {
  var t = mi(e);
  return function(n, o, r, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, o, r, i) || "";
    return s;
  };
}
function Zl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function fa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Jl = function(t, n, o) {
  for (var r = 0, i = 0; r = i, i = It(), r === 38 && i === 12 && (n[o] = 1), !no(i); )
    gt();
  return lo(t, pt);
}, Ql = function(t, n) {
  var o = -1, r = 44;
  do
    switch (no(r)) {
      case 0:
        r === 38 && It() === 12 && (n[o] = 1), t[o] += Jl(pt - 1, n, o);
        break;
      case 2:
        t[o] += Eo(r);
        break;
      case 4:
        if (r === 44) {
          t[++o] = It() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += Wo(r);
    }
  while (r = gt());
  return t;
}, ec = function(t, n) {
  return pa(Ql(da(t), n));
}, Vi = /* @__PURE__ */ new WeakMap(), tc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, r = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Vi.get(o)) && !r) {
      Vi.set(t, !0);
      for (var i = [], s = ec(n, i), a = o.props, l = 0, c = 0; l < s.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
    }
  }
}, nc = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ma(e, t) {
  switch (zl(e, t)) {
    case 5103:
      return Ee + "print-" + e + e;
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
      return Ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + Io + e + it + e + e;
    case 6828:
    case 4268:
      return Ee + e + it + e + e;
    case 6165:
      return Ee + e + it + "flex-" + e + e;
    case 5187:
      return Ee + e + Te(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + it + "flex-$1$2") + e;
    case 5443:
      return Ee + e + it + "flex-item-" + Te(e, /flex-|-self/, "") + e;
    case 4675:
      return Ee + e + it + "flex-line-pack" + Te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ee + e + it + Te(e, "shrink", "negative") + e;
    case 5292:
      return Ee + e + it + Te(e, "basis", "preferred-size") + e;
    case 6060:
      return Ee + "box-" + Te(e, "-grow", "") + Ee + e + it + Te(e, "grow", "positive") + e;
    case 4554:
      return Ee + Te(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    case 6187:
      return Te(Te(Te(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Te(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return Te(Te(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + it + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
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
      if (kt(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45)
              break;
          case 102:
            return Te(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + Io + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Zr(e, "stretch") ? ma(Te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ot(e, kt(e) - 3 - (~Zr(e, "!important") && 10))) {
        case 107:
          return Te(e, ":", ":" + Ee) + e;
        case 101:
          return Te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + it + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return Ee + e + it + Te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ee + e + it + Te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ee + e + it + Te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + it + e + e;
  }
  return e;
}
var oc = function(t, n, o, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fi:
        t.return = ma(t.value, t.length);
        break;
      case la:
        return Cn([Fn(t, {
          value: Te(t.value, "@", "@" + Ee)
        })], r);
      case pi:
        if (t.length)
          return jl(t.props, function(i) {
            switch (_l(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Cn([Fn(t, {
                  props: [Te(i, /:(read-\w+)/, ":" + Io + "$1")]
                })], r);
              case "::placeholder":
                return Cn([Fn(t, {
                  props: [Te(i, /:(plac\w+)/, ":" + Ee + "input-$1")]
                }), Fn(t, {
                  props: [Te(i, /:(plac\w+)/, ":" + Io + "$1")]
                }), Fn(t, {
                  props: [Te(i, /:(plac\w+)/, it + "input-$1")]
                })], r);
            }
            return "";
          });
    }
}, rc = [oc], ic = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(h) {
      var y = h.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var r = t.stylisPlugins || rc, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var y = h.getAttribute("data-emotion").split(" "), S = 1; S < y.length; S++)
        i[y[S]] = !0;
      a.push(h);
    }
  );
  var l, c = [tc, nc];
  {
    var u, f = [Xl, Zl(function(h) {
      u.insert(h);
    })], m = Yl(c.concat(r, f)), g = function(y) {
      return Cn(Gl(y), m);
    };
    l = function(y, S, R, C) {
      u = R, g(y ? y + "{" + S.styles + "}" : S.styles), C && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new Bl({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return b.sheet.hydrate(a), b;
};
function p() {
  return p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, p.apply(this, arguments);
}
var ha = { exports: {} }, Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt = typeof Symbol == "function" && Symbol.for, hi = tt ? Symbol.for("react.element") : 60103, gi = tt ? Symbol.for("react.portal") : 60106, Uo = tt ? Symbol.for("react.fragment") : 60107, Vo = tt ? Symbol.for("react.strict_mode") : 60108, Ko = tt ? Symbol.for("react.profiler") : 60114, Go = tt ? Symbol.for("react.provider") : 60109, qo = tt ? Symbol.for("react.context") : 60110, bi = tt ? Symbol.for("react.async_mode") : 60111, Xo = tt ? Symbol.for("react.concurrent_mode") : 60111, Yo = tt ? Symbol.for("react.forward_ref") : 60112, Zo = tt ? Symbol.for("react.suspense") : 60113, sc = tt ? Symbol.for("react.suspense_list") : 60120, Jo = tt ? Symbol.for("react.memo") : 60115, Qo = tt ? Symbol.for("react.lazy") : 60116, ac = tt ? Symbol.for("react.block") : 60121, lc = tt ? Symbol.for("react.fundamental") : 60117, cc = tt ? Symbol.for("react.responder") : 60118, uc = tt ? Symbol.for("react.scope") : 60119;
function vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hi:
        switch (e = e.type, e) {
          case bi:
          case Xo:
          case Uo:
          case Ko:
          case Vo:
          case Zo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case qo:
              case Yo:
              case Qo:
              case Jo:
              case Go:
                return e;
              default:
                return t;
            }
        }
      case gi:
        return t;
    }
  }
}
function ga(e) {
  return vt(e) === Xo;
}
Ae.AsyncMode = bi;
Ae.ConcurrentMode = Xo;
Ae.ContextConsumer = qo;
Ae.ContextProvider = Go;
Ae.Element = hi;
Ae.ForwardRef = Yo;
Ae.Fragment = Uo;
Ae.Lazy = Qo;
Ae.Memo = Jo;
Ae.Portal = gi;
Ae.Profiler = Ko;
Ae.StrictMode = Vo;
Ae.Suspense = Zo;
Ae.isAsyncMode = function(e) {
  return ga(e) || vt(e) === bi;
};
Ae.isConcurrentMode = ga;
Ae.isContextConsumer = function(e) {
  return vt(e) === qo;
};
Ae.isContextProvider = function(e) {
  return vt(e) === Go;
};
Ae.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hi;
};
Ae.isForwardRef = function(e) {
  return vt(e) === Yo;
};
Ae.isFragment = function(e) {
  return vt(e) === Uo;
};
Ae.isLazy = function(e) {
  return vt(e) === Qo;
};
Ae.isMemo = function(e) {
  return vt(e) === Jo;
};
Ae.isPortal = function(e) {
  return vt(e) === gi;
};
Ae.isProfiler = function(e) {
  return vt(e) === Ko;
};
Ae.isStrictMode = function(e) {
  return vt(e) === Vo;
};
Ae.isSuspense = function(e) {
  return vt(e) === Zo;
};
Ae.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Uo || e === Xo || e === Ko || e === Vo || e === Zo || e === sc || typeof e == "object" && e !== null && (e.$$typeof === Qo || e.$$typeof === Jo || e.$$typeof === Go || e.$$typeof === qo || e.$$typeof === Yo || e.$$typeof === lc || e.$$typeof === cc || e.$$typeof === uc || e.$$typeof === ac);
};
Ae.typeOf = vt;
ha.exports = Ae;
var dc = ha.exports, ba = dc, pc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, va = {};
va[ba.ForwardRef] = pc;
va[ba.Memo] = fc;
var mc = !0;
function ya(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : o += r + " ";
  }), o;
}
var vi = function(t, n, o) {
  var r = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  mc === !1) && t.registered[r] === void 0 && (t.registered[r] = n.styles);
}, yi = function(t, n, o) {
  vi(t, n, o);
  var r = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + r : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function hc(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var gc = {
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
}, bc = /[A-Z]|^ms/g, vc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xa = function(t) {
  return t.charCodeAt(1) === 45;
}, Ki = function(t) {
  return t != null && typeof t != "boolean";
}, _r = /* @__PURE__ */ fa(function(e) {
  return xa(e) ? e : e.replace(bc, "-$&").toLowerCase();
}), Gi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(vc, function(o, r, i) {
          return Ot = {
            name: r,
            styles: i,
            next: Ot
          }, r;
        });
  }
  return gc[t] !== 1 && !xa(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function oo(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Ot = {
          name: n.name,
          styles: n.styles,
          next: Ot
        }, n.name;
      if (n.styles !== void 0) {
        var o = n.next;
        if (o !== void 0)
          for (; o !== void 0; )
            Ot = {
              name: o.name,
              styles: o.styles,
              next: Ot
            }, o = o.next;
        var r = n.styles + ";";
        return r;
      }
      return yc(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ot, s = n(e);
        return Ot = i, oo(e, t, s);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function yc(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++)
      o += oo(e, t, n[r]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? o += i + "{" + t[s] + "}" : Ki(s) && (o += _r(i) + ":" + Gi(i, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Ki(s[a]) && (o += _r(i) + ":" + Gi(i, s[a]) + ";");
      else {
        var l = oo(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            o += _r(i) + ":" + l + ";";
            break;
          }
          default:
            o += i + "{" + l + "}";
        }
      }
    }
  return o;
}
var qi = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ot, er = function(t, n, o) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var r = !0, i = "";
  Ot = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (r = !1, i += oo(o, n, s)) : i += s[0];
  for (var a = 1; a < t.length; a++)
    i += oo(o, n, t[a]), r && (i += s[a]);
  qi.lastIndex = 0;
  for (var l = "", c; (c = qi.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = hc(i) + l;
  return {
    name: u,
    styles: i,
    next: Ot
  };
}, xc = function(t) {
  return t();
}, Ca = Yr["useInsertionEffect"] ? Yr["useInsertionEffect"] : !1, Sa = Ca || xc, Xi = Ca || d.useLayoutEffect, $a = {}.hasOwnProperty, wa = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ic({
    key: "css"
  }) : null
);
wa.Provider;
var xi = function(t) {
  return /* @__PURE__ */ d.forwardRef(function(n, o) {
    var r = d.useContext(wa);
    return t(n, r, o);
  });
}, co = /* @__PURE__ */ d.createContext({}), Qr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", My = function(t, n) {
  var o = {};
  for (var r in n)
    $a.call(n, r) && (o[r] = n[r]);
  return o[Qr] = t, o;
}, Cc = function(t) {
  var n = t.cache, o = t.serialized, r = t.isStringTag;
  return vi(n, o, r), Sa(function() {
    return yi(n, o, r);
  }), null;
}, Sc = /* @__PURE__ */ xi(function(e, t, n) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var r = e[Qr], i = [o], s = "";
  typeof e.className == "string" ? s = ya(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = er(i, void 0, d.useContext(co));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    $a.call(e, c) && c !== "css" && c !== Qr && (l[c] = e[c]);
  return l.ref = n, l.className = s, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Cc, {
    cache: t,
    serialized: a,
    isStringTag: typeof r == "string"
  }), /* @__PURE__ */ d.createElement(r, l));
}), By = Sc, $c = /* @__PURE__ */ xi(function(e, t) {
  var n = e.styles, o = er([n], void 0, d.useContext(co)), r = d.useRef();
  return Xi(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + o.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), r.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Xi(function() {
    var i = r.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (o.next !== void 0 && yi(t, o.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", o, s, !1);
  }, [t, o.name]), null;
});
function wc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return er(t);
}
var Ci = function() {
  var t = wc.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function Lt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const rn = "$$material";
function U(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Rc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pc = /* @__PURE__ */ fa(
  function(e) {
    return Rc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ec = Pc, Tc = function(t) {
  return t !== "theme";
}, Yi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ec : Tc;
}, Zi = function(t, n, o) {
  var r;
  if (n) {
    var i = n.shouldForwardProp;
    r = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof r != "function" && o && (r = t.__emotion_forwardProp), r;
}, kc = function(t) {
  var n = t.cache, o = t.serialized, r = t.isStringTag;
  return vi(n, o, r), Sa(function() {
    return yi(n, o, r);
  }), null;
}, Oc = function e(t, n) {
  var o = t.__emotion_real === t, r = o && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Zi(t, n, o), l = a || Yi(r), c = !l("as");
  return function() {
    var u = arguments, f = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      f.push(u[0][0]);
      for (var m = u.length, g = 1; g < m; g++)
        f.push(u[g], u[0][g]);
    }
    var b = xi(function(h, y, S) {
      var R = c && h.as || r, C = "", v = [], $ = h;
      if (h.theme == null) {
        $ = {};
        for (var w in h)
          $[w] = h[w];
        $.theme = d.useContext(co);
      }
      typeof h.className == "string" ? C = ya(y.registered, v, h.className) : h.className != null && (C = h.className + " ");
      var x = er(f.concat(v), y.registered, $);
      C += y.key + "-" + x.name, s !== void 0 && (C += " " + s);
      var E = c && a === void 0 ? Yi(R) : l, O = {};
      for (var T in h)
        c && T === "as" || // $FlowFixMe
        E(T) && (O[T] = h[T]);
      return O.className = C, O.ref = S, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(kc, {
        cache: y,
        serialized: x,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ d.createElement(R, O));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof r == "string" ? r : r.displayName || r.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = r, b.__emotion_styles = f, b.__emotion_forwardProp = a, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(h, y) {
      return e(h, p({}, n, y, {
        shouldForwardProp: Zi(b, y, !0)
      })).apply(void 0, f);
    }, b;
  };
}, Ic = [
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
], ei = Oc.bind();
Ic.forEach(function(e) {
  ei[e] = ei(e);
});
function Mc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Bc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (r) => t(Mc(r) ? n : r) : t;
  return /* @__PURE__ */ P.jsx($c, {
    styles: o
  });
}
/**
 * @mui/styled-engine v5.15.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ra(e, t) {
  return ei(e, t);
}
const Ac = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pa(e) {
  if (!Ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pa(e[n]);
  }), t;
}
function ct(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? p({}, e) : e;
  return Ht(e) && Ht(t) && Object.keys(t).forEach((r) => {
    r !== "__proto__" && (Ht(t[r]) && r in e && Ht(e[r]) ? o[r] = ct(e[r], t[r], n) : n.clone ? o[r] = Ht(t[r]) ? Pa(t[r]) : t[r] : o[r] = t[r]);
  }), o;
}
var Ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si = Symbol.for("react.element"), $i = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), nr = Symbol.for("react.strict_mode"), or = Symbol.for("react.profiler"), rr = Symbol.for("react.provider"), ir = Symbol.for("react.context"), Nc = Symbol.for("react.server_context"), sr = Symbol.for("react.forward_ref"), ar = Symbol.for("react.suspense"), lr = Symbol.for("react.suspense_list"), cr = Symbol.for("react.memo"), ur = Symbol.for("react.lazy"), Lc = Symbol.for("react.offscreen"), Ea;
Ea = Symbol.for("react.module.reference");
function Rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Si:
        switch (e = e.type, e) {
          case tr:
          case or:
          case nr:
          case ar:
          case lr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Nc:
              case ir:
              case sr:
              case ur:
              case cr:
              case rr:
                return e;
              default:
                return t;
            }
        }
      case $i:
        return t;
    }
  }
}
Ne.ContextConsumer = ir;
Ne.ContextProvider = rr;
Ne.Element = Si;
Ne.ForwardRef = sr;
Ne.Fragment = tr;
Ne.Lazy = ur;
Ne.Memo = cr;
Ne.Portal = $i;
Ne.Profiler = or;
Ne.StrictMode = nr;
Ne.Suspense = ar;
Ne.SuspenseList = lr;
Ne.isAsyncMode = function() {
  return !1;
};
Ne.isConcurrentMode = function() {
  return !1;
};
Ne.isContextConsumer = function(e) {
  return Rt(e) === ir;
};
Ne.isContextProvider = function(e) {
  return Rt(e) === rr;
};
Ne.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Si;
};
Ne.isForwardRef = function(e) {
  return Rt(e) === sr;
};
Ne.isFragment = function(e) {
  return Rt(e) === tr;
};
Ne.isLazy = function(e) {
  return Rt(e) === ur;
};
Ne.isMemo = function(e) {
  return Rt(e) === cr;
};
Ne.isPortal = function(e) {
  return Rt(e) === $i;
};
Ne.isProfiler = function(e) {
  return Rt(e) === or;
};
Ne.isStrictMode = function(e) {
  return Rt(e) === nr;
};
Ne.isSuspense = function(e) {
  return Rt(e) === ar;
};
Ne.isSuspenseList = function(e) {
  return Rt(e) === lr;
};
Ne.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === tr || e === or || e === nr || e === ar || e === lr || e === Lc || typeof e == "object" && e !== null && (e.$$typeof === ur || e.$$typeof === cr || e.$$typeof === rr || e.$$typeof === ir || e.$$typeof === sr || e.$$typeof === Ea || e.getModuleId !== void 0);
};
Ne.typeOf = Rt;
function Z(e) {
  if (typeof e != "string")
    throw new Error(Lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ji(...e) {
  return e.reduce((t, n) => n == null ? t : function(...r) {
    t.apply(this, r), n.apply(this, r);
  }, () => {
  });
}
function dr(e, t = 166) {
  let n;
  function o(...r) {
    const i = () => {
      e.apply(this, r);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function jr(e, t) {
  var n, o;
  return /* @__PURE__ */ d.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (o = e.type) == null || (o = o._payload) == null || (o = o.value) == null ? void 0 : o.muiName
  ) !== -1;
}
function Ze(e) {
  return e && e.ownerDocument || document;
}
function Ft(e) {
  return Ze(e).defaultView || window;
}
function Mo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Fc = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Bt = Fc;
let Qi = 0;
function zc(e) {
  const [t, n] = d.useState(e), o = e || t;
  return d.useEffect(() => {
    t == null && (Qi += 1, n(`mui-${Qi}`));
  }, [t]), o;
}
const es = Yr["useId".toString()];
function pr(e) {
  if (es !== void 0) {
    const t = es();
    return e ?? t;
  }
  return zc(e);
}
function tn({
  controlled: e,
  default: t,
  name: n,
  state: o = "value"
}) {
  const {
    current: r
  } = d.useRef(e !== void 0), [i, s] = d.useState(t), a = r ? e : i, l = d.useCallback((c) => {
    r || s(c);
  }, []);
  return [a, l];
}
function st(e) {
  const t = d.useRef(e);
  return Bt(() => {
    t.current = e;
  }), d.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Je(...e) {
  return d.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Mo(n, t);
    });
  }, e);
}
const ts = {};
function _c(e, t) {
  const n = d.useRef(ts);
  return n.current === ts && (n.current = e(t)), n;
}
const jc = [];
function Wc(e) {
  d.useEffect(e, jc);
}
class uo {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new uo();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = 0, n();
    }, t);
  }
}
function yn() {
  const e = _c(uo.create).current;
  return Wc(e.disposeEffect), e;
}
let fr = !0, ti = !1;
const Dc = new uo(), Hc = {
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
function Uc(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Hc[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Vc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (fr = !0);
}
function Wr() {
  fr = !1;
}
function Kc() {
  this.visibilityState === "hidden" && ti && (fr = !0);
}
function Gc(e) {
  e.addEventListener("keydown", Vc, !0), e.addEventListener("mousedown", Wr, !0), e.addEventListener("pointerdown", Wr, !0), e.addEventListener("touchstart", Wr, !0), e.addEventListener("visibilitychange", Kc, !0);
}
function qc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return fr || Uc(t);
}
function Ta() {
  const e = d.useCallback((r) => {
    r != null && Gc(r.ownerDocument);
  }, []), t = d.useRef(!1);
  function n() {
    return t.current ? (ti = !0, Dc.start(100, () => {
      ti = !1;
    }), t.current = !1, !0) : !1;
  }
  function o(r) {
    return qc(r) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: o,
    onBlur: n,
    ref: e
  };
}
function ka(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
let dn;
function Oa() {
  if (dn)
    return dn;
  const e = document.createElement("div"), t = document.createElement("div");
  return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), dn = "reverse", e.scrollLeft > 0 ? dn = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (dn = "negative")), document.body.removeChild(e), dn;
}
function Xc(e, t) {
  const n = e.scrollLeft;
  if (t !== "rtl")
    return n;
  switch (Oa()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + n;
    case "reverse":
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
const Yc = (e) => {
  const t = d.useRef({});
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}, Zc = Yc;
function Jc(e) {
  return d.Children.toArray(e).filter((t) => /* @__PURE__ */ d.isValidElement(t));
}
function mr(e, t) {
  const n = p({}, t);
  return Object.keys(e).forEach((o) => {
    if (o.toString().match(/^(components|slots)$/))
      n[o] = p({}, e[o], n[o]);
    else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
      const r = e[o] || {}, i = t[o];
      n[o] = {}, !i || !Object.keys(i) ? n[o] = r : !r || !Object.keys(r) ? n[o] = i : (n[o] = p({}, i), Object.keys(r).forEach((s) => {
        n[o][s] = mr(r[s], i[s]);
      }));
    } else
      n[o] === void 0 && (n[o] = e[o]);
  }), n;
}
function me(e, t, n = void 0) {
  const o = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (r) => {
      o[r] = e[r].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), o;
}
const ns = (e) => e, Qc = () => {
  let e = ns;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ns;
    }
  };
}, eu = Qc(), Ia = eu, Ma = {
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
function he(e, t, n = "Mui") {
  const o = Ma[t];
  return o ? `${n}-${o}` : `${Ia.generate(e)}-${t}`;
}
function ge(e, t, n = "Mui") {
  const o = {};
  return t.forEach((r) => {
    o[r] = he(e, r, n);
  }), o;
}
function tu(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const nu = ["values", "unit", "step"], ou = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => p({}, n, {
    [o.key]: o.val
  }), {});
};
function ru(e) {
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
    step: o = 5
  } = e, r = U(e, nu), i = ou(t), s = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - o / 100}${n})`;
  }
  function c(m, g) {
    const b = s.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : g) - o / 100}${n})`;
  }
  function u(m) {
    return s.indexOf(m) + 1 < s.length ? c(m, s[s.indexOf(m) + 1]) : a(m);
  }
  function f(m) {
    const g = s.indexOf(m);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? l(s[g]) : c(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return p({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: c,
    only: u,
    not: f,
    unit: n
  }, r);
}
const iu = {
  borderRadius: 4
}, su = iu;
function qn(e, t) {
  return t ? ct(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const wi = {
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
}, os = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${wi[e]}px)`
};
function ft(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || os;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || os;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || wi).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Ba(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((o, r) => {
    const i = e.up(r);
    return o[i] = {}, o;
  }, {})) || {};
}
function Aa(e, t) {
  return e.reduce((n, o) => {
    const r = n[o];
    return (!r || Object.keys(r).length === 0) && delete n[o], n;
  }, t);
}
function au(e, ...t) {
  const n = Ba(e), o = [n, ...t].reduce((r, i) => ct(r, i), {});
  return Aa(Object.keys(n), o);
}
function lu(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((r, i) => {
    i < e.length && (n[r] = !0);
  }) : o.forEach((r) => {
    e[r] != null && (n[r] = !0);
  }), n;
}
function nn({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || lu(e, t), r = Object.keys(o);
  if (r.length === 0)
    return e;
  let i;
  return r.reduce((s, a, l) => (Array.isArray(e) ? (s[a] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (s[a] = e[a] != null ? e[a] : e[i], i = a) : s[a] = e, s), {});
}
function hr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((r, i) => r && r[i] ? r[i] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, r) => o && o[r] != null ? o[r] : null, e);
}
function Bo(e, t, n, o = n) {
  let r;
  return typeof e == "function" ? r = e(n) : Array.isArray(e) ? r = e[n] || o : r = hr(e, n) || o, t && (r = t(r, o, e)), r;
}
function Ge(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: r
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, c = hr(l, o) || {};
    return ft(s, a, (f) => {
      let m = Bo(c, r, f);
      return f === m && typeof f == "string" && (m = Bo(c, r, `${t}${f === "default" ? "" : Z(f)}`, f)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function cu(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const uu = {
  m: "margin",
  p: "padding"
}, du = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, rs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, pu = cu((e) => {
  if (e.length > 2)
    if (rs[e])
      e = rs[e];
    else
      return [e];
  const [t, n] = e.split(""), o = uu[t], r = du[n] || "";
  return Array.isArray(r) ? r.map((i) => o + i) : [o + r];
}), Ri = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Pi = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ri, ...Pi];
function po(e, t, n, o) {
  var r;
  const i = (r = hr(e, t, !1)) != null ? r : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function Ei(e) {
  return po(e, "spacing", 8);
}
function sn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), o = e(n);
  return t >= 0 ? o : typeof o == "number" ? -o : `-${o}`;
}
function fu(e, t) {
  return (n) => e.reduce((o, r) => (o[r] = sn(t, n), o), {});
}
function mu(e, t, n, o) {
  if (t.indexOf(n) === -1)
    return null;
  const r = pu(n), i = fu(r, o), s = e[n];
  return ft(e, s, i);
}
function Na(e, t) {
  const n = Ei(e.theme);
  return Object.keys(e).map((o) => mu(e, t, o, n)).reduce(qn, {});
}
function De(e) {
  return Na(e, Ri);
}
De.propTypes = {};
De.filterProps = Ri;
function He(e) {
  return Na(e, Pi);
}
He.propTypes = {};
He.filterProps = Pi;
function hu(e = 8) {
  if (e.mui)
    return e;
  const t = Ei({
    spacing: e
  }), n = (...o) => (o.length === 0 ? [1] : o).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function gr(...e) {
  const t = e.reduce((o, r) => (r.filterProps.forEach((i) => {
    o[i] = r;
  }), o), {}), n = (o) => Object.keys(o).reduce((r, i) => t[i] ? qn(r, t[i](o)) : r, {});
  return n.propTypes = {}, n.filterProps = e.reduce((o, r) => o.concat(r.filterProps), []), n;
}
function Ct(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Pt(e, t) {
  return Ge({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const gu = Pt("border", Ct), bu = Pt("borderTop", Ct), vu = Pt("borderRight", Ct), yu = Pt("borderBottom", Ct), xu = Pt("borderLeft", Ct), Cu = Pt("borderColor"), Su = Pt("borderTopColor"), $u = Pt("borderRightColor"), wu = Pt("borderBottomColor"), Ru = Pt("borderLeftColor"), Pu = Pt("outline", Ct), Eu = Pt("outlineColor"), br = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = po(e.theme, "shape.borderRadius", 4), n = (o) => ({
      borderRadius: sn(t, o)
    });
    return ft(e, e.borderRadius, n);
  }
  return null;
};
br.propTypes = {};
br.filterProps = ["borderRadius"];
gr(gu, bu, vu, yu, xu, Cu, Su, $u, wu, Ru, br, Pu, Eu);
const vr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = po(e.theme, "spacing", 8), n = (o) => ({
      gap: sn(t, o)
    });
    return ft(e, e.gap, n);
  }
  return null;
};
vr.propTypes = {};
vr.filterProps = ["gap"];
const yr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = po(e.theme, "spacing", 8), n = (o) => ({
      columnGap: sn(t, o)
    });
    return ft(e, e.columnGap, n);
  }
  return null;
};
yr.propTypes = {};
yr.filterProps = ["columnGap"];
const xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = po(e.theme, "spacing", 8), n = (o) => ({
      rowGap: sn(t, o)
    });
    return ft(e, e.rowGap, n);
  }
  return null;
};
xr.propTypes = {};
xr.filterProps = ["rowGap"];
const Tu = Ge({
  prop: "gridColumn"
}), ku = Ge({
  prop: "gridRow"
}), Ou = Ge({
  prop: "gridAutoFlow"
}), Iu = Ge({
  prop: "gridAutoColumns"
}), Mu = Ge({
  prop: "gridAutoRows"
}), Bu = Ge({
  prop: "gridTemplateColumns"
}), Au = Ge({
  prop: "gridTemplateRows"
}), Nu = Ge({
  prop: "gridTemplateAreas"
}), Lu = Ge({
  prop: "gridArea"
});
gr(vr, yr, xr, Tu, ku, Ou, Iu, Mu, Bu, Au, Nu, Lu);
function Sn(e, t) {
  return t === "grey" ? t : e;
}
const Fu = Ge({
  prop: "color",
  themeKey: "palette",
  transform: Sn
}), zu = Ge({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Sn
}), _u = Ge({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Sn
});
gr(Fu, zu, _u);
function ht(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ju = Ge({
  prop: "width",
  transform: ht
}), Ti = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, r;
      const i = ((o = e.theme) == null || (o = o.breakpoints) == null || (o = o.values) == null ? void 0 : o[n]) || wi[n];
      return i ? ((r = e.theme) == null || (r = r.breakpoints) == null ? void 0 : r.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: ht(n)
      };
    };
    return ft(e, e.maxWidth, t);
  }
  return null;
};
Ti.filterProps = ["maxWidth"];
const Wu = Ge({
  prop: "minWidth",
  transform: ht
}), Du = Ge({
  prop: "height",
  transform: ht
}), Hu = Ge({
  prop: "maxHeight",
  transform: ht
}), Uu = Ge({
  prop: "minHeight",
  transform: ht
});
Ge({
  prop: "size",
  cssProperty: "width",
  transform: ht
});
Ge({
  prop: "size",
  cssProperty: "height",
  transform: ht
});
const Vu = Ge({
  prop: "boxSizing"
});
gr(ju, Ti, Wu, Du, Hu, Uu, Vu);
const Ku = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ct
  },
  borderTop: {
    themeKey: "borders",
    transform: Ct
  },
  borderRight: {
    themeKey: "borders",
    transform: Ct
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ct
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ct
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
  outline: {
    themeKey: "borders",
    transform: Ct
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: br
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Sn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Sn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Sn
  },
  // spacing
  p: {
    style: He
  },
  pt: {
    style: He
  },
  pr: {
    style: He
  },
  pb: {
    style: He
  },
  pl: {
    style: He
  },
  px: {
    style: He
  },
  py: {
    style: He
  },
  padding: {
    style: He
  },
  paddingTop: {
    style: He
  },
  paddingRight: {
    style: He
  },
  paddingBottom: {
    style: He
  },
  paddingLeft: {
    style: He
  },
  paddingX: {
    style: He
  },
  paddingY: {
    style: He
  },
  paddingInline: {
    style: He
  },
  paddingInlineStart: {
    style: He
  },
  paddingInlineEnd: {
    style: He
  },
  paddingBlock: {
    style: He
  },
  paddingBlockStart: {
    style: He
  },
  paddingBlockEnd: {
    style: He
  },
  m: {
    style: De
  },
  mt: {
    style: De
  },
  mr: {
    style: De
  },
  mb: {
    style: De
  },
  ml: {
    style: De
  },
  mx: {
    style: De
  },
  my: {
    style: De
  },
  margin: {
    style: De
  },
  marginTop: {
    style: De
  },
  marginRight: {
    style: De
  },
  marginBottom: {
    style: De
  },
  marginLeft: {
    style: De
  },
  marginX: {
    style: De
  },
  marginY: {
    style: De
  },
  marginInline: {
    style: De
  },
  marginInlineStart: {
    style: De
  },
  marginInlineEnd: {
    style: De
  },
  marginBlock: {
    style: De
  },
  marginBlockStart: {
    style: De
  },
  marginBlockEnd: {
    style: De
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
    style: vr
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: yr
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
    transform: ht
  },
  maxWidth: {
    style: Ti
  },
  minWidth: {
    transform: ht
  },
  height: {
    transform: ht
  },
  maxHeight: {
    transform: ht
  },
  minHeight: {
    transform: ht
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
}, Cr = Ku;
function Gu(...e) {
  const t = e.reduce((o, r) => o.concat(Object.keys(r)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function qu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xu() {
  function e(n, o, r, i) {
    const s = {
      [n]: o,
      theme: r
    }, a = i[n];
    if (!a)
      return {
        [n]: o
      };
    const {
      cssProperty: l = n,
      themeKey: c,
      transform: u,
      style: f
    } = a;
    if (o == null)
      return null;
    if (c === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const m = hr(r, c) || {};
    return f ? f(s) : ft(s, o, (b) => {
      let h = Bo(m, u, b);
      return b === h && typeof b == "string" && (h = Bo(m, u, `${n}${b === "default" ? "" : Z(b)}`, b)), l === !1 ? h : {
        [l]: h
      };
    });
  }
  function t(n) {
    var o;
    const {
      sx: r,
      theme: i = {}
    } = n || {};
    if (!r)
      return null;
    const s = (o = i.unstable_sxConfig) != null ? o : Cr;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Ba(i.breakpoints), f = Object.keys(u);
      let m = u;
      return Object.keys(c).forEach((g) => {
        const b = qu(c[g], i);
        if (b != null)
          if (typeof b == "object")
            if (s[g])
              m = qn(m, e(g, b, i, s));
            else {
              const h = ft({
                theme: i
              }, b, (y) => ({
                [g]: y
              }));
              Gu(h, b) ? m[g] = t({
                sx: b,
                theme: i
              }) : m = qn(m, h);
            }
          else
            m = qn(m, e(g, b, i, s));
      }), Aa(f, m);
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const La = Xu();
La.filterProps = ["sx"];
const Sr = La;
function Yu(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Zu = ["breakpoints", "palette", "spacing", "shape"];
function $r(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: r,
    shape: i = {}
  } = e, s = U(e, Zu), a = ru(n), l = hu(r);
  let c = ct({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: p({
      mode: "light"
    }, o),
    spacing: l,
    shape: p({}, su, i)
  }, s);
  return c.applyStyles = Yu, c = t.reduce((u, f) => ct(u, f), c), c.unstable_sxConfig = p({}, Cr, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return Sr({
      sx: f,
      theme: this
    });
  }, c;
}
function Ju(e) {
  return Object.keys(e).length === 0;
}
function ki(e = null) {
  const t = d.useContext(co);
  return !t || Ju(t) ? e : t;
}
const Qu = $r();
function wr(e = Qu) {
  return ki(e);
}
function ed({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = wr(n), r = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ P.jsx(Bc, {
    styles: r
  });
}
const td = ["sx"], nd = (e) => {
  var t, n;
  const o = {
    systemProps: {},
    otherProps: {}
  }, r = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Cr;
  return Object.keys(e).forEach((i) => {
    r[i] ? o.systemProps[i] = e[i] : o.otherProps[i] = e[i];
  }), o;
};
function Rr(e) {
  const {
    sx: t
  } = e, n = U(e, td), {
    systemProps: o,
    otherProps: r
  } = nd(n);
  let i;
  return Array.isArray(t) ? i = [o, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ht(a) ? p({}, o, a) : o;
  } : i = p({}, o, t), p({}, r, {
    sx: i
  });
}
function Fa(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = Fa(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function X() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = Fa(e)) && (o && (o += " "), o += t);
  return o;
}
const od = ["className", "component"];
function rd(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: o = "MuiBox-root",
    generateClassName: r
  } = e, i = Ra("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Sr);
  return /* @__PURE__ */ d.forwardRef(function(l, c) {
    const u = wr(n), f = Rr(l), {
      className: m,
      component: g = "div"
    } = f, b = U(f, od);
    return /* @__PURE__ */ P.jsx(i, p({
      as: g,
      ref: c,
      className: X(m, r ? r(o) : o),
      theme: t && u[t] || u
    }, b));
  });
}
const id = ["ownerState"], sd = ["variants"], ad = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ld(e) {
  return Object.keys(e).length === 0;
}
function cd(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Xn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ud = $r(), dd = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function yo({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return ld(t) ? e : t[n] || t;
}
function pd(e) {
  return e ? (t, n) => n[e] : null;
}
function ko(e, t) {
  let {
    ownerState: n
  } = t, o = U(t, id);
  const r = typeof e == "function" ? e(p({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(r))
    return r.flatMap((i) => ko(i, p({
      ownerState: n
    }, o)));
  if (r && typeof r == "object" && Array.isArray(r.variants)) {
    const {
      variants: i = []
    } = r;
    let a = U(r, sd);
    return i.forEach((l) => {
      let c = !0;
      typeof l.props == "function" ? c = l.props(p({
        ownerState: n
      }, o)) : Object.keys(l.props).forEach((u) => {
        (n == null ? void 0 : n[u]) !== l.props[u] && o[u] !== l.props[u] && (c = !1);
      }), c && (Array.isArray(a) || (a = [a]), a.push(typeof l.style == "function" ? l.style(p({
        ownerState: n
      }, o)) : l.style));
    }), a;
  }
  return r;
}
function za(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = ud,
    rootShouldForwardProp: o = Xn,
    slotShouldForwardProp: r = Xn
  } = e, i = (s) => Sr(p({}, s, {
    theme: yo(p({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    Ac(s, ($) => $.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = pd(dd(c))
    } = a, g = U(a, ad), b = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), h = f || !1;
    let y, S = Xn;
    c === "Root" || c === "root" ? S = o : c ? S = r : cd(s) && (S = void 0);
    const R = Ra(s, p({
      shouldForwardProp: S,
      label: y
    }, g)), C = ($) => typeof $ == "function" && $.__emotion_real !== $ || Ht($) ? (w) => ko($, p({}, w, {
      theme: yo({
        theme: w.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : $, v = ($, ...w) => {
      let x = C($);
      const E = w ? w.map(C) : [];
      l && m && E.push((F) => {
        const A = yo(p({}, F, {
          defaultTheme: n,
          themeId: t
        }));
        if (!A.components || !A.components[l] || !A.components[l].styleOverrides)
          return null;
        const N = A.components[l].styleOverrides, z = {};
        return Object.entries(N).forEach(([B, M]) => {
          z[B] = ko(M, p({}, F, {
            theme: A
          }));
        }), m(F, z);
      }), l && !b && E.push((F) => {
        var A;
        const N = yo(p({}, F, {
          defaultTheme: n,
          themeId: t
        })), z = N == null || (A = N.components) == null || (A = A[l]) == null ? void 0 : A.variants;
        return ko({
          variants: z
        }, p({}, F, {
          theme: N
        }));
      }), h || E.push(i);
      const O = E.length - w.length;
      if (Array.isArray($) && O > 0) {
        const F = new Array(O).fill("");
        x = [...$, ...F], x.raw = [...$.raw, ...F];
      }
      const T = R(x, ...E);
      return s.muiName && (T.muiName = s.muiName), T;
    };
    return R.withConfig && (v.withConfig = R.withConfig), v;
  };
}
const fd = za(), md = fd;
function hd(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : mr(t.components[n].defaultProps, o);
}
function _a({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let r = wr(n);
  return o && (r = r[o] || r), hd({
    theme: r,
    name: t,
    props: e
  });
}
function Oi(e, t = 0, n = 1) {
  return tu(e, t, n);
}
function gd(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, r) => r < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function an(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return an(gd(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Lt(9, e));
  let o = e.substring(t + 1, e.length - 1), r;
  if (n === "color") {
    if (o = o.split(" "), r = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(r) === -1)
      throw new Error(Lt(10, r));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: n,
    values: o,
    colorSpace: r
  };
}
function Pr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.indexOf("rgb") !== -1 ? o = o.map((r, i) => i < 3 ? parseInt(r, 10) : r) : t.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.indexOf("color") !== -1 ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function bd(e) {
  e = an(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, r = t[2] / 100, i = o * Math.min(r, 1 - r), s = (c, u = (c + n / 30) % 12) => r - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), Pr({
    type: a,
    values: l
  });
}
function is(e) {
  e = an(e);
  let t = e.type === "hsl" || e.type === "hsla" ? an(bd(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function vd(e, t) {
  const n = is(e), o = is(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function at(e, t) {
  return e = an(e), t = Oi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Pr(e);
}
function ni(e, t) {
  if (e = an(e), t = Oi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Pr(e);
}
function oi(e, t) {
  if (e = an(e), t = Oi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Pr(e);
}
const yd = /* @__PURE__ */ d.createContext(null), ja = yd;
function Wa() {
  return d.useContext(ja);
}
const xd = typeof Symbol == "function" && Symbol.for, Cd = xd ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Sd(e, t) {
  return typeof t == "function" ? t(e) : p({}, e, t);
}
function $d(e) {
  const {
    children: t,
    theme: n
  } = e, o = Wa(), r = d.useMemo(() => {
    const i = o === null ? n : Sd(o, n);
    return i != null && (i[Cd] = o !== null), i;
  }, [n, o]);
  return /* @__PURE__ */ P.jsx(ja.Provider, {
    value: r,
    children: t
  });
}
const ss = {};
function as(e, t, n, o = !1) {
  return d.useMemo(() => {
    const r = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(r), s = e ? p({}, t, {
        [e]: i
      }) : i;
      return o ? () => s : s;
    }
    return e ? p({}, t, {
      [e]: n
    }) : p({}, t, n);
  }, [e, t, n, o]);
}
function wd(e) {
  const {
    children: t,
    theme: n,
    themeId: o
  } = e, r = ki(ss), i = Wa() || ss, s = as(o, r, n), a = as(o, i, n, !0);
  return /* @__PURE__ */ P.jsx($d, {
    theme: a,
    children: /* @__PURE__ */ P.jsx(co.Provider, {
      value: s,
      children: t
    })
  });
}
const Rd = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Pd = $r(), Ed = md("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Td(e) {
  return _a({
    props: e,
    name: "MuiStack",
    defaultTheme: Pd
  });
}
function kd(e, t) {
  const n = d.Children.toArray(e).filter(Boolean);
  return n.reduce((o, r, i) => (o.push(r), i < n.length - 1 && o.push(/* @__PURE__ */ d.cloneElement(t, {
    key: `separator-${i}`
  })), o), []);
}
const Od = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Id = ({
  ownerState: e,
  theme: t
}) => {
  let n = p({
    display: "flex",
    flexDirection: "column"
  }, ft({
    theme: t
  }, nn({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (o) => ({
    flexDirection: o
  })));
  if (e.spacing) {
    const o = Ei(t), r = Object.keys(t.breakpoints.values).reduce((l, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (l[c] = !0), l), {}), i = nn({
      values: e.direction,
      base: r
    }), s = nn({
      values: e.spacing,
      base: r
    });
    typeof i == "object" && Object.keys(i).forEach((l, c, u) => {
      if (!i[l]) {
        const m = c > 0 ? i[u[c - 1]] : "column";
        i[l] = m;
      }
    }), n = ct(n, ft({
      theme: t
    }, s, (l, c) => e.useFlexGap ? {
      gap: sn(o, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Od(c ? i[c] : e.direction)}`]: sn(o, l)
      }
    }));
  }
  return n = au(t.breakpoints, n), n;
};
function Md(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Ed,
    useThemeProps: n = Td,
    componentName: o = "MuiStack"
  } = e, r = () => me({
    root: ["root"]
  }, (l) => he(o, l), {}), i = t(Id);
  return /* @__PURE__ */ d.forwardRef(function(l, c) {
    const u = n(l), f = Rr(u), {
      component: m = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: h,
      children: y,
      className: S,
      useFlexGap: R = !1
    } = f, C = U(f, Rd), v = {
      direction: g,
      spacing: b,
      useFlexGap: R
    }, $ = r();
    return /* @__PURE__ */ P.jsx(i, p({
      as: m,
      ownerState: v,
      ref: c,
      className: X($.root, S)
    }, C, {
      children: h ? kd(y, h) : y
    }));
  });
}
function Bd(e, t) {
  return p({
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
const Ad = {
  black: "#000",
  white: "#fff"
}, ro = Ad, Nd = {
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
}, Ld = Nd, Fd = {
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
}, pn = Fd, zd = {
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
}, fn = zd, _d = {
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
}, zn = _d, jd = {
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
}, mn = jd, Wd = {
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
}, hn = Wd, Dd = {
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
}, gn = Dd, Hd = ["mode", "contrastThreshold", "tonalOffset"], ls = {
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
    paper: ro.white,
    default: ro.white
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
}, Dr = {
  text: {
    primary: ro.white,
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
    active: ro.white,
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
function cs(e, t, n, o) {
  const r = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = oi(e.main, r) : t === "dark" && (e.dark = ni(e.main, i)));
}
function Ud(e = "light") {
  return e === "dark" ? {
    main: mn[200],
    light: mn[50],
    dark: mn[400]
  } : {
    main: mn[700],
    light: mn[400],
    dark: mn[800]
  };
}
function Vd(e = "light") {
  return e === "dark" ? {
    main: pn[200],
    light: pn[50],
    dark: pn[400]
  } : {
    main: pn[500],
    light: pn[300],
    dark: pn[700]
  };
}
function Kd(e = "light") {
  return e === "dark" ? {
    main: fn[500],
    light: fn[300],
    dark: fn[700]
  } : {
    main: fn[700],
    light: fn[400],
    dark: fn[800]
  };
}
function Gd(e = "light") {
  return e === "dark" ? {
    main: hn[400],
    light: hn[300],
    dark: hn[700]
  } : {
    main: hn[700],
    light: hn[500],
    dark: hn[900]
  };
}
function qd(e = "light") {
  return e === "dark" ? {
    main: gn[400],
    light: gn[300],
    dark: gn[700]
  } : {
    main: gn[800],
    light: gn[500],
    dark: gn[900]
  };
}
function Xd(e = "light") {
  return e === "dark" ? {
    main: zn[400],
    light: zn[300],
    dark: zn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: zn[500],
    dark: zn[900]
  };
}
function Yd(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2
  } = e, r = U(e, Hd), i = e.primary || Ud(t), s = e.secondary || Vd(t), a = e.error || Kd(t), l = e.info || Gd(t), c = e.success || qd(t), u = e.warning || Xd(t);
  function f(h) {
    return vd(h, Dr.text.primary) >= n ? Dr.text.primary : ls.text.primary;
  }
  const m = ({
    color: h,
    name: y,
    mainShade: S = 500,
    lightShade: R = 300,
    darkShade: C = 700
  }) => {
    if (h = p({}, h), !h.main && h[S] && (h.main = h[S]), !h.hasOwnProperty("main"))
      throw new Error(Lt(11, y ? ` (${y})` : "", S));
    if (typeof h.main != "string")
      throw new Error(Lt(12, y ? ` (${y})` : "", JSON.stringify(h.main)));
    return cs(h, "light", R, o), cs(h, "dark", C, o), h.contrastText || (h.contrastText = f(h.main)), h;
  }, g = {
    dark: Dr,
    light: ls
  };
  return ct(p({
    // A collection of common colors.
    common: p({}, ro),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: Ld,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o
  }, g[t]), r);
}
const Zd = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Jd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const us = {
  textTransform: "uppercase"
}, ds = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qd(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: o = ds,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f
  } = n, m = U(n, Zd), g = r / 14, b = f || ((S) => `${S / c * g}rem`), h = (S, R, C, v, $) => p({
    fontFamily: o,
    fontWeight: S,
    fontSize: b(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, o === ds ? {
    letterSpacing: `${Jd(v / R)}em`
  } : {}, $, u), y = {
    h1: h(i, 96, 1.167, -1.5),
    h2: h(i, 60, 1.2, -0.5),
    h3: h(s, 48, 1.167, 0),
    h4: h(s, 34, 1.235, 0.25),
    h5: h(s, 24, 1.334, 0),
    h6: h(a, 20, 1.6, 0.15),
    subtitle1: h(s, 16, 1.75, 0.15),
    subtitle2: h(a, 14, 1.57, 0.1),
    body1: h(s, 16, 1.5, 0.15),
    body2: h(s, 14, 1.43, 0.15),
    button: h(a, 14, 1.75, 0.4, us),
    caption: h(s, 12, 1.66, 0.4),
    overline: h(s, 12, 2.66, 1, us),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ct(p({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: o,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l
  }, y), m, {
    clone: !1
    // No need to clone deep
  });
}
const ep = 0.2, tp = 0.14, np = 0.12;
function ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ep})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${tp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${np})`].join(",");
}
const op = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], rp = op, ip = ["duration", "easing", "delay"], sp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ap = {
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
function ps(e) {
  return `${Math.round(e)}ms`;
}
function lp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function cp(e) {
  const t = p({}, sp, e.easing), n = p({}, ap, e.duration);
  return p({
    getAutoHeightDuration: lp,
    create: (r = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = i;
      return U(i, ip), (Array.isArray(r) ? r : [r]).map((c) => `${c} ${typeof s == "string" ? s : ps(s)} ${a} ${typeof l == "string" ? l : ps(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const up = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, dp = up, pp = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Da(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: o = {},
    transitions: r = {},
    typography: i = {}
  } = e, s = U(e, pp);
  if (e.vars)
    throw new Error(Lt(18));
  const a = Yd(o), l = $r(e);
  let c = ct(l, {
    mixins: Bd(l.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rp.slice(),
    typography: Qd(a, i),
    transitions: cp(r),
    zIndex: p({}, dp)
  });
  return c = ct(c, s), c = t.reduce((u, f) => ct(u, f), c), c.unstable_sxConfig = p({}, Cr, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return Sr({
      sx: f,
      theme: this
    });
  }, c;
}
const fp = Da(), Er = fp;
function cn() {
  const e = wr(Er);
  return e[rn] || e;
}
function ve({
  props: e,
  name: t
}) {
  return _a({
    props: e,
    name: t,
    defaultTheme: Er,
    themeId: rn
  });
}
const yt = (e) => Xn(e) && e !== "classes", mp = Xn, hp = za({
  themeId: rn,
  defaultTheme: Er,
  rootShouldForwardProp: yt
}), D = hp, gp = ["theme"];
function Ay(e) {
  let {
    theme: t
  } = e, n = U(e, gp);
  const o = t[rn];
  return /* @__PURE__ */ P.jsx(wd, p({}, n, {
    themeId: o ? rn : void 0,
    theme: o || t
  }));
}
const bp = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, fs = bp;
function vp(e) {
  return he("MuiSvgIcon", e);
}
ge("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const yp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], xp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, r = {
    root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`]
  };
  return me(r, vp, o);
}, Cp = D("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Z(n.color)}`], t[`fontSize${Z(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, o, r, i, s, a, l, c, u, f, m, g, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (o = n.create) == null ? void 0 : o.call(n, "fill", {
      duration: (r = e.transitions) == null || (r = r.duration) == null ? void 0 : r.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem",
      large: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? f : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ha = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: r,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: c,
    inheritViewBox: u = !1,
    titleAccess: f,
    viewBox: m = "0 0 24 24"
  } = o, g = U(o, yp), b = /* @__PURE__ */ d.isValidElement(r) && r.type === "svg", h = p({}, o, {
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: m,
    hasSvgAsChild: b
  }), y = {};
  u || (y.viewBox = m);
  const S = xp(h);
  return /* @__PURE__ */ P.jsxs(Cp, p({
    as: a,
    className: X(S.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, y, g, b && r.props, {
    ownerState: h,
    children: [b ? r.props.children : r, f ? /* @__PURE__ */ P.jsx("title", {
      children: f
    }) : null]
  }));
});
Ha.muiName = "SvgIcon";
const ms = Ha;
function Tt(e, t) {
  function n(o, r) {
    return /* @__PURE__ */ P.jsx(ms, p({
      "data-testid": `${t}Icon`,
      ref: r
    }, o, {
      children: e
    }));
  }
  return n.muiName = ms.muiName, /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(n));
}
function ri(e, t) {
  return ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, ri(e, t);
}
function Ua(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ri(e, t);
}
function Sp(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Ny(e, t) {
  e.classList ? e.classList.add(t) : Sp(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function hs(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Ly(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = hs(e.className, t) : e.setAttribute("class", hs(e.className && e.className.baseVal || "", t));
}
const gs = {
  disabled: !1
}, Ao = Nt.createContext(null);
var $p = function(t) {
  return t.scrollTop;
}, Vn = "unmounted", Jt = "exited", Qt = "entering", vn = "entered", ii = "exiting", _t = /* @__PURE__ */ function(e) {
  Ua(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = r, a = s && !s.isMounting ? o.enter : o.appear, l;
    return i.appearStatus = null, o.in ? a ? (l = Jt, i.appearStatus = Qt) : l = vn : o.unmountOnExit || o.mountOnEnter ? l = Vn : l = Jt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(r, i) {
    var s = r.in;
    return s && i.status === Vn ? {
      status: Jt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(r) {
    var i = null;
    if (r !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Qt && s !== vn && (i = Qt) : (s === Qt || s === vn) && (i = ii);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var r = this.props.timeout, i, s, a;
    return i = s = a = r, r != null && typeof r != "number" && (i = r.exit, s = r.enter, a = r.appear !== void 0 ? r.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(r, i) {
    if (r === void 0 && (r = !1), i !== null)
      if (this.cancelNextCallback(), i === Qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : bo.findDOMNode(this);
          s && $p(s);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Jt && this.setState({
        status: Vn
      });
  }, n.performEnter = function(r) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : r, l = this.props.nodeRef ? [a] : [bo.findDOMNode(this), a], c = l[0], u = l[1], f = this.getTimeouts(), m = a ? f.appear : f.enter;
    if (!r && !s || gs.disabled) {
      this.safeSetState({
        status: vn
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Qt
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: vn
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var r = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : bo.findDOMNode(this);
    if (!i || gs.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        r.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: ii
    }, function() {
      r.props.onExiting(a), r.onTransitionEnd(s.exit, function() {
        r.safeSetState({
          status: Jt
        }, function() {
          r.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(r, i) {
    i = this.setNextCallback(i), this.setState(r, i);
  }, n.setNextCallback = function(r) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, r(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(r, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : bo.findDOMNode(this), a = r == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = l[0], u = l[1];
      this.props.addEndListener(c, u);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, n.render = function() {
    var r = this.state.status;
    if (r === Vn)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = U(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Nt.createElement(Ao.Provider, {
        value: null
      }, typeof s == "function" ? s(r, a) : Nt.cloneElement(Nt.Children.only(s), a))
    );
  }, t;
}(Nt.Component);
_t.contextType = Ao;
_t.propTypes = {};
function bn() {
}
_t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: bn,
  onEntering: bn,
  onEntered: bn,
  onExit: bn,
  onExiting: bn,
  onExited: bn
};
_t.UNMOUNTED = Vn;
_t.EXITED = Jt;
_t.ENTERING = Qt;
_t.ENTERED = vn;
_t.EXITING = ii;
const Va = _t;
function wp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ii(e, t) {
  var n = function(i) {
    return t && d.isValidElement(i) ? t(i) : i;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && d.Children.map(e, function(r) {
    return r;
  }).forEach(function(r) {
    o[r.key] = n(r);
  }), o;
}
function Rp(e, t) {
  e = e || {}, t = t || {};
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var o = /* @__PURE__ */ Object.create(null), r = [];
  for (var i in e)
    i in t ? r.length && (o[i] = r, r = []) : r.push(i);
  var s, a = {};
  for (var l in t) {
    if (o[l])
      for (s = 0; s < o[l].length; s++) {
        var c = o[l][s];
        a[o[l][s]] = n(c);
      }
    a[l] = n(l);
  }
  for (s = 0; s < r.length; s++)
    a[r[s]] = n(r[s]);
  return a;
}
function en(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Pp(e, t) {
  return Ii(e.children, function(n) {
    return d.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: en(n, "appear", e),
      enter: en(n, "enter", e),
      exit: en(n, "exit", e)
    });
  });
}
function Ep(e, t, n) {
  var o = Ii(e.children), r = Rp(t, o);
  return Object.keys(r).forEach(function(i) {
    var s = r[i];
    if (d.isValidElement(s)) {
      var a = i in t, l = i in o, c = t[i], u = d.isValidElement(c) && !c.props.in;
      l && (!a || u) ? r[i] = d.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: en(s, "exit", e),
        enter: en(s, "enter", e)
      }) : !l && a && !u ? r[i] = d.cloneElement(s, {
        in: !1
      }) : l && a && d.isValidElement(c) && (r[i] = d.cloneElement(s, {
        onExited: n.bind(null, s),
        in: c.props.in,
        exit: en(s, "exit", e),
        enter: en(s, "enter", e)
      }));
    }
  }), r;
}
var Tp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, kp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Mi = /* @__PURE__ */ function(e) {
  Ua(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = i.handleExited.bind(wp(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
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
  }, t.getDerivedStateFromProps = function(r, i) {
    var s = i.children, a = i.handleExited, l = i.firstRender;
    return {
      children: l ? Pp(r, a) : Ep(r, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(r, i) {
    var s = Ii(this.props.children);
    r.key in s || (r.props.onExited && r.props.onExited(i), this.mounted && this.setState(function(a) {
      var l = p({}, a.children);
      return delete l[r.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var r = this.props, i = r.component, s = r.childFactory, a = U(r, ["component", "childFactory"]), l = this.state.contextValue, c = Tp(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Nt.createElement(Ao.Provider, {
      value: l
    }, c) : /* @__PURE__ */ Nt.createElement(Ao.Provider, {
      value: l
    }, /* @__PURE__ */ Nt.createElement(i, a, c));
  }, t;
}(Nt.Component);
Mi.propTypes = {};
Mi.defaultProps = kp;
const Op = Mi, Ka = (e) => e.scrollTop;
function No(e, t) {
  var n, o;
  const {
    timeout: r,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof r == "number" ? r : r[t.mode] || 0,
    easing: (o = s.transitionTimingFunction) != null ? o : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
function Ip(e) {
  return he("MuiPaper", e);
}
ge("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Mp = ["className", "component", "elevation", "square", "variant"], Bp = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: r
  } = e, i = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return me(i, Ip, r);
}, Ap = D("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return p({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && p({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${at("#fff", fs(t.elevation))}, ${at("#fff", fs(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Np = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiPaper"
  }), {
    className: r,
    component: i = "div",
    elevation: s = 1,
    square: a = !1,
    variant: l = "elevation"
  } = o, c = U(o, Mp), u = p({}, o, {
    component: i,
    elevation: s,
    square: a,
    variant: l
  }), f = Bp(u);
  return /* @__PURE__ */ P.jsx(Ap, p({
    as: i,
    ownerState: u,
    className: X(f.root, r),
    ref: n
  }, c));
}), Ga = Np;
function Lo(e) {
  return typeof e == "string";
}
function Kn(e, t, n) {
  return e === void 0 || Lo(e) ? t : p({}, t, {
    ownerState: p({}, t.ownerState, n)
  });
}
const Lp = {
  disableDefaultClasses: !1
}, Fp = /* @__PURE__ */ d.createContext(Lp);
function zp(e) {
  const {
    disableDefaultClasses: t
  } = d.useContext(Fp);
  return (n) => t ? "" : e(n);
}
function Yn(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function _p(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function bs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function jp(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: r,
    className: i
  } = e;
  if (!t) {
    const g = X(n == null ? void 0 : n.className, i, r == null ? void 0 : r.className, o == null ? void 0 : o.className), b = p({}, n == null ? void 0 : n.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style), h = p({}, n, r, o);
    return g.length > 0 && (h.className = g), Object.keys(b).length > 0 && (h.style = b), {
      props: h,
      internalRef: void 0
    };
  }
  const s = Yn(p({}, r, o)), a = bs(o), l = bs(r), c = t(s), u = X(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, r == null ? void 0 : r.className, o == null ? void 0 : o.className), f = p({}, c == null ? void 0 : c.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style), m = p({}, c, n, l, a);
  return u.length > 0 && (m.className = u), Object.keys(f).length > 0 && (m.style = f), {
    props: m,
    internalRef: c.ref
  };
}
const Wp = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Et(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1
  } = e, s = U(e, Wp), a = i ? {} : _p(o, r), {
    props: l,
    internalRef: c
  } = jp(p({}, s, {
    externalSlotProps: a
  })), u = Je(c, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Kn(n, p({}, l, {
    ref: u
  }), r);
}
function Dp(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: r,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: l,
    timeout: c
  } = e, [u, f] = d.useState(!1), m = X(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + r
  }, b = X(n.child, u && n.childLeaving, o && n.childPulsate);
  return !a && !u && f(!0), d.useEffect(() => {
    if (!a && l != null) {
      const h = setTimeout(l, c);
      return () => {
        clearTimeout(h);
      };
    }
  }, [l, a, c]), /* @__PURE__ */ P.jsx("span", {
    className: m,
    style: g,
    children: /* @__PURE__ */ P.jsx("span", {
      className: b
    })
  });
}
const Hp = ge("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), xt = Hp, Up = ["center", "classes", "className"];
let Tr = (e) => e, vs, ys, xs, Cs;
const si = 550, Vp = 80, Kp = Ci(vs || (vs = Tr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Gp = Ci(ys || (ys = Tr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), qp = Ci(xs || (xs = Tr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Xp = D("span", {
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
}), Yp = D(Dp, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Cs || (Cs = Tr`
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
`), xt.rippleVisible, Kp, si, ({
  theme: e
}) => e.transitions.easing.easeInOut, xt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, xt.child, xt.childLeaving, Gp, si, ({
  theme: e
}) => e.transitions.easing.easeInOut, xt.childPulsate, qp, ({
  theme: e
}) => e.transitions.easing.easeInOut), Zp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: r = !1,
    classes: i = {},
    className: s
  } = o, a = U(o, Up), [l, c] = d.useState([]), u = d.useRef(0), f = d.useRef(null);
  d.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [l]);
  const m = d.useRef(!1), g = yn(), b = d.useRef(null), h = d.useRef(null), y = d.useCallback((v) => {
    const {
      pulsate: $,
      rippleX: w,
      rippleY: x,
      rippleSize: E,
      cb: O
    } = v;
    c((T) => [...T, /* @__PURE__ */ P.jsx(Yp, {
      classes: {
        ripple: X(i.ripple, xt.ripple),
        rippleVisible: X(i.rippleVisible, xt.rippleVisible),
        ripplePulsate: X(i.ripplePulsate, xt.ripplePulsate),
        child: X(i.child, xt.child),
        childLeaving: X(i.childLeaving, xt.childLeaving),
        childPulsate: X(i.childPulsate, xt.childPulsate)
      },
      timeout: si,
      pulsate: $,
      rippleX: w,
      rippleY: x,
      rippleSize: E
    }, u.current)]), u.current += 1, f.current = O;
  }, [i]), S = d.useCallback((v = {}, $ = {}, w = () => {
  }) => {
    const {
      pulsate: x = !1,
      center: E = r || $.pulsate,
      fakeElement: O = !1
      // For test purposes
    } = $;
    if ((v == null ? void 0 : v.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (m.current = !0);
    const T = O ? null : h.current, F = T ? T.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, N, z;
    if (E || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      A = Math.round(F.width / 2), N = Math.round(F.height / 2);
    else {
      const {
        clientX: B,
        clientY: M
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      A = Math.round(B - F.left), N = Math.round(M - F.top);
    }
    if (E)
      z = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const B = Math.max(Math.abs((T ? T.clientWidth : 0) - A), A) * 2 + 2, M = Math.max(Math.abs((T ? T.clientHeight : 0) - N), N) * 2 + 2;
      z = Math.sqrt(B ** 2 + M ** 2);
    }
    v != null && v.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: x,
        rippleX: A,
        rippleY: N,
        rippleSize: z,
        cb: w
      });
    }, g.start(Vp, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: x,
      rippleX: A,
      rippleY: N,
      rippleSize: z,
      cb: w
    });
  }, [r, y, g]), R = d.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), C = d.useCallback((v, $) => {
    if (g.clear(), (v == null ? void 0 : v.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        C(v, $);
      });
      return;
    }
    b.current = null, c((w) => w.length > 0 ? w.slice(1) : w), f.current = $;
  }, [g]);
  return d.useImperativeHandle(n, () => ({
    pulsate: R,
    start: S,
    stop: C
  }), [R, S, C]), /* @__PURE__ */ P.jsx(Xp, p({
    className: X(xt.root, i.root, s),
    ref: h
  }, a, {
    children: /* @__PURE__ */ P.jsx(Op, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), Jp = Zp;
function Qp(e) {
  return he("MuiButtonBase", e);
}
const ef = ge("MuiButtonBase", ["root", "disabled", "focusVisible"]), tf = ef, nf = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], of = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: r
  } = e, s = me({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Qp, r);
  return n && o && (s.root += ` ${o}`), s;
}, rf = D("button", {
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
  [`&.${tf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), sf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: r,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: l = "button",
    disabled: c = !1,
    disableRipple: u = !1,
    disableTouchRipple: f = !1,
    focusRipple: m = !1,
    LinkComponent: g = "a",
    onBlur: b,
    onClick: h,
    onContextMenu: y,
    onDragLeave: S,
    onFocus: R,
    onFocusVisible: C,
    onKeyDown: v,
    onKeyUp: $,
    onMouseDown: w,
    onMouseLeave: x,
    onMouseUp: E,
    onTouchEnd: O,
    onTouchMove: T,
    onTouchStart: F,
    tabIndex: A = 0,
    TouchRippleProps: N,
    touchRippleRef: z,
    type: B
  } = o, M = U(o, nf), L = d.useRef(null), j = d.useRef(null), H = Je(j, z), {
    isFocusVisibleRef: ne,
    onFocus: ye,
    onBlur: we,
    ref: $e
  } = Ta(), [q, Q] = d.useState(!1);
  c && q && Q(!1), d.useImperativeHandle(r, () => ({
    focusVisible: () => {
      Q(!0), L.current.focus();
    }
  }), []);
  const [le, ke] = d.useState(!1);
  d.useEffect(() => {
    ke(!0);
  }, []);
  const ee = le && !u && !c;
  d.useEffect(() => {
    q && m && !u && le && j.current.pulsate();
  }, [u, m, q, le]);
  function re(W, Re, Qe = f) {
    return st((et) => (Re && Re(et), !Qe && j.current && j.current[W](et), !0));
  }
  const Ie = re("start", w), ce = re("stop", y), ue = re("stop", S), ie = re("stop", E), pe = re("stop", (W) => {
    q && W.preventDefault(), x && x(W);
  }), te = re("start", F), K = re("stop", O), Me = re("stop", T), J = re("stop", (W) => {
    we(W), ne.current === !1 && Q(!1), b && b(W);
  }, !1), Fe = st((W) => {
    L.current || (L.current = W.currentTarget), ye(W), ne.current === !0 && (Q(!0), C && C(W)), R && R(W);
  }), Se = () => {
    const W = L.current;
    return l && l !== "button" && !(W.tagName === "A" && W.href);
  }, be = d.useRef(!1), Le = st((W) => {
    m && !be.current && q && j.current && W.key === " " && (be.current = !0, j.current.stop(W, () => {
      j.current.start(W);
    })), W.target === W.currentTarget && Se() && W.key === " " && W.preventDefault(), v && v(W), W.target === W.currentTarget && Se() && W.key === "Enter" && !c && (W.preventDefault(), h && h(W));
  }), Pe = st((W) => {
    m && W.key === " " && j.current && q && !W.defaultPrevented && (be.current = !1, j.current.stop(W, () => {
      j.current.pulsate(W);
    })), $ && $(W), h && W.target === W.currentTarget && Se() && W.key === " " && !W.defaultPrevented && h(W);
  });
  let xe = l;
  xe === "button" && (M.href || M.to) && (xe = g);
  const Ue = {};
  xe === "button" ? (Ue.type = B === void 0 ? "button" : B, Ue.disabled = c) : (!M.href && !M.to && (Ue.role = "button"), c && (Ue["aria-disabled"] = c));
  const Ve = Je(n, $e, L), qe = p({}, o, {
    centerRipple: i,
    component: l,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: f,
    focusRipple: m,
    tabIndex: A,
    focusVisible: q
  }), se = of(qe);
  return /* @__PURE__ */ P.jsxs(rf, p({
    as: xe,
    className: X(se.root, a),
    ownerState: qe,
    onBlur: J,
    onClick: h,
    onContextMenu: ce,
    onFocus: Fe,
    onKeyDown: Le,
    onKeyUp: Pe,
    onMouseDown: Ie,
    onMouseLeave: pe,
    onMouseUp: ie,
    onDragLeave: ue,
    onTouchEnd: K,
    onTouchMove: Me,
    onTouchStart: te,
    ref: Ve,
    tabIndex: c ? -1 : A,
    type: B
  }, Ue, M, {
    children: [s, ee ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P.jsx(Jp, p({
        ref: H,
        center: i
      }, N))
    ) : null]
  }));
}), In = sf;
function af(e) {
  return he("MuiAlert", e);
}
const lf = ge("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), Ss = lf;
function cf(e) {
  return he("MuiIconButton", e);
}
const uf = ge("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), df = uf, pf = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], ff = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: r,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", o !== "default" && `color${Z(o)}`, r && `edge${Z(r)}`, `size${Z(i)}`]
  };
  return me(s, cf, t);
}, mf = D(In, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${Z(n.color)}`], n.edge && t[`edge${Z(n.edge)}`], t[`size${Z(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const o = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return p({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && p({
    color: o == null ? void 0 : o.main
  }, !t.disableRipple && {
    "&:hover": p({}, o && {
      backgroundColor: e.vars ? `rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : at(o.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${df.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), hf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: r = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: l = !1,
    disableFocusRipple: c = !1,
    size: u = "medium"
  } = o, f = U(o, pf), m = p({}, o, {
    edge: r,
    color: a,
    disabled: l,
    disableFocusRipple: c,
    size: u
  }), g = ff(m);
  return /* @__PURE__ */ P.jsx(mf, p({
    className: X(g.root, s),
    centerRipple: !0,
    focusRipple: !c,
    disabled: l,
    ref: n,
    ownerState: m
  }, f, {
    children: i
  }));
}), gf = hf, bf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), vf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), yf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), xf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), Cf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Sf = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], $f = (e) => {
  const {
    variant: t,
    color: n,
    severity: o,
    classes: r
  } = e, i = {
    root: ["root", `${t}${Z(n || o)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return me(i, af, r);
}, wf = D(Ga, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${Z(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? ni : oi, o = e.palette.mode === "light" ? oi : ni, r = t.color || t.severity;
  return p({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, r && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : n(e.palette[r].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
    [`& .${Ss.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${r}IconColor`]
    } : {
      color: e.palette[r].main
    }
  }, r && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : n(e.palette[r].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[r].light}`,
    [`& .${Ss.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${r}IconColor`]
    } : {
      color: e.palette[r].main
    }
  }, r && t.variant === "filled" && p({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${r}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
    color: e.palette.getContrastText(e.palette[r].main)
  }));
}), Rf = D("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Pf = D("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), $s = D("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), ws = {
  success: /* @__PURE__ */ P.jsx(bf, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ P.jsx(vf, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ P.jsx(yf, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ P.jsx(xf, {
    fontSize: "inherit"
  })
}, Ef = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a, l;
  const c = ve({
    props: t,
    name: "MuiAlert"
  }), {
    action: u,
    children: f,
    className: m,
    closeText: g = "Close",
    color: b,
    components: h = {},
    componentsProps: y = {},
    icon: S,
    iconMapping: R = ws,
    onClose: C,
    role: v = "alert",
    severity: $ = "success",
    slotProps: w = {},
    slots: x = {},
    variant: E = "standard"
  } = c, O = U(c, Sf), T = p({}, c, {
    color: b,
    severity: $,
    variant: E
  }), F = $f(T), A = (o = (r = x.closeButton) != null ? r : h.CloseButton) != null ? o : gf, N = (i = (s = x.closeIcon) != null ? s : h.CloseIcon) != null ? i : Cf, z = (a = w.closeButton) != null ? a : y.closeButton, B = (l = w.closeIcon) != null ? l : y.closeIcon;
  return /* @__PURE__ */ P.jsxs(wf, p({
    role: v,
    elevation: 0,
    ownerState: T,
    className: X(F.root, m),
    ref: n
  }, O, {
    children: [S !== !1 ? /* @__PURE__ */ P.jsx(Rf, {
      ownerState: T,
      className: F.icon,
      children: S || R[$] || ws[$]
    }) : null, /* @__PURE__ */ P.jsx(Pf, {
      ownerState: T,
      className: F.message,
      children: f
    }), u != null ? /* @__PURE__ */ P.jsx($s, {
      ownerState: T,
      className: F.action,
      children: u
    }) : null, u == null && C ? /* @__PURE__ */ P.jsx($s, {
      ownerState: T,
      className: F.action,
      children: /* @__PURE__ */ P.jsx(A, p({
        size: "small",
        "aria-label": g,
        title: g,
        color: "inherit",
        onClick: C
      }, z, {
        children: /* @__PURE__ */ P.jsx(N, p({
          fontSize: "small"
        }, B))
      }))
    }) : null]
  }));
}), Fy = Ef;
function Tf(e) {
  return he("MuiTypography", e);
}
ge("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const kf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Of = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: r,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${Z(t)}`, n && "gutterBottom", o && "noWrap", r && "paragraph"]
  };
  return me(a, Tf, s);
}, If = D("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${Z(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Rs = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Mf = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Bf = (e) => Mf[e] || e, Af = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiTypography"
  }), r = Bf(o.color), i = Rr(p({}, o, {
    color: r
  })), {
    align: s = "inherit",
    className: a,
    component: l,
    gutterBottom: c = !1,
    noWrap: u = !1,
    paragraph: f = !1,
    variant: m = "body1",
    variantMapping: g = Rs
  } = i, b = U(i, kf), h = p({}, i, {
    align: s,
    color: r,
    className: a,
    component: l,
    gutterBottom: c,
    noWrap: u,
    paragraph: f,
    variant: m,
    variantMapping: g
  }), y = l || (f ? "p" : g[m] || Rs[m]) || "span", S = Of(h);
  return /* @__PURE__ */ P.jsx(If, p({
    as: y,
    ref: n,
    ownerState: h,
    className: X(S.root, a)
  }, b));
}), Fo = Af;
function Nf(e) {
  return he("MuiAlertTitle", e);
}
ge("MuiAlertTitle", ["root"]);
const Lf = ["className"], Ff = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, Nf, t);
}, zf = D(Fo, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), _f = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: r
  } = o, i = U(o, Lf), s = o, a = Ff(s);
  return /* @__PURE__ */ P.jsx(zf, p({
    gutterBottom: !0,
    component: "div",
    ownerState: s,
    ref: n,
    className: X(a.root, r)
  }, i));
}), zy = _f, qa = "base";
function jf(e) {
  return `${qa}--${e}`;
}
function Wf(e, t) {
  return `${qa}-${e}-${t}`;
}
function Xa(e, t) {
  const n = Ma[t];
  return n ? jf(n) : Wf(e, t);
}
function Df(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = Xa(e, o);
  }), n;
}
function Ps(e) {
  return e.substring(2).toLowerCase();
}
function Hf(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function _y(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: o = "onClick",
    onClickAway: r,
    touchEvent: i = "onTouchEnd"
  } = e, s = d.useRef(!1), a = d.useRef(null), l = d.useRef(!1), c = d.useRef(!1);
  d.useEffect(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const u = Je(
    // @ts-expect-error TODO upstream fix
    t.ref,
    a
  ), f = st((b) => {
    const h = c.current;
    c.current = !1;
    const y = Ze(a.current);
    if (!l.current || !a.current || "clientX" in b && Hf(b, y))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let S;
    b.composedPath ? S = b.composedPath().indexOf(a.current) > -1 : S = !y.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      b.target
    ) || a.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      b.target
    ), !S && (n || !h) && r(b);
  }), m = (b) => (h) => {
    c.current = !0;
    const y = t.props[b];
    y && y(h);
  }, g = {
    ref: u
  };
  return i !== !1 && (g[i] = m(i)), d.useEffect(() => {
    if (i !== !1) {
      const b = Ps(i), h = Ze(a.current), y = () => {
        s.current = !0;
      };
      return h.addEventListener(b, f), h.addEventListener("touchmove", y), () => {
        h.removeEventListener(b, f), h.removeEventListener("touchmove", y);
      };
    }
  }, [f, i]), o !== !1 && (g[o] = m(o)), d.useEffect(() => {
    if (o !== !1) {
      const b = Ps(o), h = Ze(a.current);
      return h.addEventListener(b, f), () => {
        h.removeEventListener(b, f);
      };
    }
  }, [f, o]), /* @__PURE__ */ P.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(t, g)
  });
}
const Uf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Vf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Kf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Gf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Kf(e));
}
function qf(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Uf)).forEach((o, r) => {
    const i = Vf(o);
    i === -1 || !Gf(o) || (i === 0 ? t.push(o) : n.push({
      documentOrder: r,
      tabIndex: i,
      node: o
    }));
  }), n.sort((o, r) => o.tabIndex === r.tabIndex ? o.documentOrder - r.documentOrder : o.tabIndex - r.tabIndex).map((o) => o.node).concat(t);
}
function Xf() {
  return !0;
}
function Yf(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: r = !1,
    getTabbable: i = qf,
    isEnabled: s = Xf,
    open: a
  } = e, l = d.useRef(!1), c = d.useRef(null), u = d.useRef(null), f = d.useRef(null), m = d.useRef(null), g = d.useRef(!1), b = d.useRef(null), h = Je(t.ref, b), y = d.useRef(null);
  d.useEffect(() => {
    !a || !b.current || (g.current = !n);
  }, [n, a]), d.useEffect(() => {
    if (!a || !b.current)
      return;
    const C = Ze(b.current);
    return b.current.contains(C.activeElement) || (b.current.hasAttribute("tabIndex") || b.current.setAttribute("tabIndex", "-1"), g.current && b.current.focus()), () => {
      r || (f.current && f.current.focus && (l.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), d.useEffect(() => {
    if (!a || !b.current)
      return;
    const C = Ze(b.current), v = (x) => {
      y.current = x, !(o || !s() || x.key !== "Tab") && C.activeElement === b.current && x.shiftKey && (l.current = !0, u.current && u.current.focus());
    }, $ = () => {
      const x = b.current;
      if (x === null)
        return;
      if (!C.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (x.contains(C.activeElement) || o && C.activeElement !== c.current && C.activeElement !== u.current)
        return;
      if (C.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!g.current)
        return;
      let E = [];
      if ((C.activeElement === c.current || C.activeElement === u.current) && (E = i(b.current)), E.length > 0) {
        var O, T;
        const F = !!((O = y.current) != null && O.shiftKey && ((T = y.current) == null ? void 0 : T.key) === "Tab"), A = E[0], N = E[E.length - 1];
        typeof A != "string" && typeof N != "string" && (F ? N.focus() : A.focus());
      } else
        x.focus();
    };
    C.addEventListener("focusin", $), C.addEventListener("keydown", v, !0);
    const w = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && $();
    }, 50);
    return () => {
      clearInterval(w), C.removeEventListener("focusin", $), C.removeEventListener("keydown", v, !0);
    };
  }, [n, o, r, s, a, i]);
  const S = (C) => {
    f.current === null && (f.current = C.relatedTarget), g.current = !0, m.current = C.target;
    const v = t.props.onFocus;
    v && v(C);
  }, R = (C) => {
    f.current === null && (f.current = C.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: R,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ d.cloneElement(t, {
      ref: h,
      onFocus: S
    }), /* @__PURE__ */ P.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: R,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
const Zf = /* @__PURE__ */ d.createContext(void 0);
function Jf() {
  return d.useContext(Zf);
}
function jy(e = {}) {
  const {
    defaultValue: t,
    disabled: n = !1,
    error: o = !1,
    onBlur: r,
    onChange: i,
    onFocus: s,
    required: a = !1,
    value: l,
    inputRef: c
  } = e, u = Jf();
  let f, m, g, b, h;
  if (u) {
    var y, S, R;
    f = void 0, m = (y = u.disabled) != null ? y : !1, g = (S = u.error) != null ? S : !1, b = (R = u.required) != null ? R : !1, h = u.value;
  } else
    f = t, m = n, g = o, b = a, h = l;
  const {
    current: C
  } = d.useRef(h != null), v = d.useCallback((B) => {
  }, []), $ = d.useRef(null), w = Je($, c, v), [x, E] = d.useState(!1);
  d.useEffect(() => {
    !u && m && x && (E(!1), r == null || r());
  }, [u, m, x, r]);
  const O = (B) => (M) => {
    var L;
    if (u != null && u.disabled) {
      M.stopPropagation();
      return;
    }
    if ((L = B.onFocus) == null || L.call(B, M), u && u.onFocus) {
      var j;
      u == null || (j = u.onFocus) == null || j.call(u);
    } else
      E(!0);
  }, T = (B) => (M) => {
    var L;
    (L = B.onBlur) == null || L.call(B, M), u && u.onBlur ? u.onBlur() : E(!1);
  }, F = (B) => (M, ...L) => {
    var j, H;
    if (!C && (M.target || $.current) == null)
      throw new Error(Lt(17));
    u == null || (j = u.onChange) == null || j.call(u, M), (H = B.onChange) == null || H.call(B, M, ...L);
  }, A = (B) => (M) => {
    var L;
    $.current && M.currentTarget === M.target && $.current.focus(), (L = B.onClick) == null || L.call(B, M);
  };
  return {
    disabled: m,
    error: g,
    focused: x,
    formControlContext: u,
    getInputProps: (B = {}) => {
      const L = p({}, {
        onBlur: r,
        onChange: i,
        onFocus: s
      }, Yn(B)), j = p({}, L, {
        onBlur: T(L),
        onChange: F(L),
        onFocus: O(L)
      });
      return p({}, j, {
        "aria-invalid": g || void 0,
        defaultValue: f,
        value: h,
        required: b,
        disabled: m
      }, B, {
        ref: w
      }, j);
    },
    getRootProps: (B = {}) => {
      const M = Yn(e, ["onBlur", "onChange", "onFocus"]), L = p({}, M, Yn(B));
      return p({}, B, L, {
        onClick: A(L)
      });
    },
    inputRef: w,
    required: b,
    value: h
  };
}
function Qf(e) {
  return typeof e == "function" ? e() : e;
}
const Ya = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    children: o,
    container: r,
    disablePortal: i = !1
  } = t, [s, a] = d.useState(null), l = Je(/* @__PURE__ */ d.isValidElement(o) ? o.ref : null, n);
  if (Bt(() => {
    i || a(Qf(r) || document.body);
  }, [r, i]), Bt(() => {
    if (s && !i)
      return Mo(n, s), () => {
        Mo(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ d.isValidElement(o)) {
      const c = {
        ref: l
      };
      return /* @__PURE__ */ d.cloneElement(o, c);
    }
    return /* @__PURE__ */ P.jsx(d.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ P.jsx(d.Fragment, {
    children: s && /* @__PURE__ */ ra.createPortal(o, s)
  });
});
function em(e) {
  const t = Ze(e);
  return t.body === e ? Ft(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Zn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Es(e) {
  return parseInt(Ft(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function tm(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function Ts(e, t, n, o, r) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1, l = !tm(s);
    a && l && Zn(s, r);
  });
}
function Hr(e, t) {
  let n = -1;
  return e.some((o, r) => t(o) ? (n = r, !0) : !1), n;
}
function nm(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (em(o)) {
      const s = ka(Ze(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Es(o) + s}px`;
      const a = Ze(o).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Es(l) + s}px`;
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment)
      i = Ze(o).body;
    else {
      const s = o.parentElement, a = Ft(o);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : o;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function om(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class rm {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Zn(t.modalRef, !1);
    const r = om(n);
    Ts(n, t.mount, t.modalRef, r, !0);
    const i = Hr(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: r
    }), o);
  }
  mount(t, n) {
    const o = Hr(this.containers, (i) => i.modals.indexOf(t) !== -1), r = this.containers[o];
    r.restore || (r.restore = nm(r, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const r = Hr(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(o, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Zn(t.modalRef, n), Ts(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Zn(s.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function im(e) {
  return typeof e == "function" ? e() : e;
}
function sm(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const am = new rm();
function lm(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: r = am,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: f
  } = e, m = d.useRef({}), g = d.useRef(null), b = d.useRef(null), h = Je(b, f), [y, S] = d.useState(!u), R = sm(l);
  let C = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (C = !1);
  const v = () => Ze(g.current), $ = () => (m.current.modalRef = b.current, m.current.mount = g.current, m.current), w = () => {
    r.mount($(), {
      disableScrollLock: o
    }), b.current && (b.current.scrollTop = 0);
  }, x = st(() => {
    const M = im(t) || v().body;
    r.add($(), M), b.current && w();
  }), E = d.useCallback(() => r.isTopModal($()), [r]), O = st((M) => {
    g.current = M, M && (u && E() ? w() : b.current && Zn(b.current, C));
  }), T = d.useCallback(() => {
    r.remove($(), C);
  }, [C, r]);
  d.useEffect(() => () => {
    T();
  }, [T]), d.useEffect(() => {
    u ? x() : (!R || !i) && T();
  }, [u, T, R, i, x]);
  const F = (M) => (L) => {
    var j;
    (j = M.onKeyDown) == null || j.call(M, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !E()) && (n || (L.stopPropagation(), c && c(L, "escapeKeyDown")));
  }, A = (M) => (L) => {
    var j;
    (j = M.onClick) == null || j.call(M, L), L.target === L.currentTarget && c && c(L, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const L = Yn(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const j = p({}, L, M);
      return p({
        role: "presentation"
      }, j, {
        onKeyDown: F(j),
        ref: h
      });
    },
    getBackdropProps: (M = {}) => {
      const L = M;
      return p({
        "aria-hidden": !0
      }, L, {
        onClick: A(L),
        open: u
      });
    },
    getTransitionProps: () => {
      const M = () => {
        S(!1), s && s();
      }, L = () => {
        S(!0), a && a(), i && T();
      };
      return {
        onEnter: Ji(M, l == null ? void 0 : l.props.onEnter),
        onExited: Ji(L, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: h,
    portalRef: O,
    isTopModal: E,
    exited: y,
    hasTransition: R
  };
}
var ut = "top", $t = "bottom", wt = "right", dt = "left", Bi = "auto", fo = [ut, $t, wt, dt], Rn = "start", io = "end", cm = "clippingParents", Za = "viewport", _n = "popper", um = "reference", ks = /* @__PURE__ */ fo.reduce(function(e, t) {
  return e.concat([t + "-" + Rn, t + "-" + io]);
}, []), Ja = /* @__PURE__ */ [].concat(fo, [Bi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rn, t + "-" + io]);
}, []), dm = "beforeRead", pm = "read", fm = "afterRead", mm = "beforeMain", hm = "main", gm = "afterMain", bm = "beforeWrite", vm = "write", ym = "afterWrite", xm = [dm, pm, fm, mm, hm, gm, bm, vm, ym];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function bt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ln(e) {
  var t = bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function St(e) {
  var t = bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ai(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Cm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !St(i) || !At(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Sm(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !St(r) || !At(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const $m = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cm,
  effect: Sm,
  requires: ["computeStyles"]
};
function Mt(e) {
  return e.split("-")[0];
}
var on = Math.max, zo = Math.min, Pn = Math.round;
function ai() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qa() {
  return !/^((?!chrome|android).)*safari/i.test(ai());
}
function En(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, i = 1;
  t && St(e) && (r = e.offsetWidth > 0 && Pn(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pn(o.height) / e.offsetHeight || 1);
  var s = ln(e) ? bt(e) : window, a = s.visualViewport, l = !Qa() && n, c = (o.left + (l && a ? a.offsetLeft : 0)) / r, u = (o.top + (l && a ? a.offsetTop : 0)) / i, f = o.width / r, m = o.height / i;
  return {
    width: f,
    height: m,
    top: u,
    right: c + f,
    bottom: u + m,
    left: c,
    x: c,
    y: u
  };
}
function Ni(e) {
  var t = En(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function el(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ai(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function zt(e) {
  return bt(e).getComputedStyle(e);
}
function wm(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function Vt(e) {
  return ((ln(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function kr(e) {
  return At(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ai(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vt(e)
  );
}
function Os(e) {
  return !St(e) || // https://github.com/popperjs/popper-core/issues/837
  zt(e).position === "fixed" ? null : e.offsetParent;
}
function Rm(e) {
  var t = /firefox/i.test(ai()), n = /Trident/i.test(ai());
  if (n && St(e)) {
    var o = zt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = kr(e);
  for (Ai(r) && (r = r.host); St(r) && ["html", "body"].indexOf(At(r)) < 0; ) {
    var i = zt(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = bt(e), n = Os(e); n && wm(n) && zt(n).position === "static"; )
    n = Os(n);
  return n && (At(n) === "html" || At(n) === "body" && zt(n).position === "static") ? t : n || Rm(e) || t;
}
function Li(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jn(e, t, n) {
  return on(e, zo(t, n));
}
function Pm(e, t, n) {
  var o = Jn(e, t, n);
  return o > n ? n : o;
}
function tl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function nl(e) {
  return Object.assign({}, tl(), e);
}
function ol(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Em = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, nl(typeof t != "number" ? t : ol(t, fo));
};
function Tm(e) {
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Mt(n.placement), l = Li(a), c = [dt, wt].indexOf(a) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var f = Em(r.padding, n), m = Ni(i), g = l === "y" ? ut : dt, b = l === "y" ? $t : wt, h = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], y = s[l] - n.rects.reference[l], S = mo(i), R = S ? l === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, C = h / 2 - y / 2, v = f[g], $ = R - m[u] - f[b], w = R / 2 - m[u] / 2 + C, x = Jn(v, w, $), E = l;
    n.modifiersData[o] = (t = {}, t[E] = x, t.centerOffset = x - w, t);
  }
}
function km(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || el(t.elements.popper, r) && (t.elements.arrow = r));
}
const Om = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Tm,
  effect: km,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Tn(e) {
  return e.split("-")[1];
}
var Im = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: Pn(n * r) / r || 0,
    y: Pn(o * r) / r || 0
  };
}
function Is(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, m = s.x, g = m === void 0 ? 0 : m, b = s.y, h = b === void 0 ? 0 : b, y = typeof u == "function" ? u({
    x: g,
    y: h
  }) : {
    x: g,
    y: h
  };
  g = y.x, h = y.y;
  var S = s.hasOwnProperty("x"), R = s.hasOwnProperty("y"), C = dt, v = ut, $ = window;
  if (c) {
    var w = mo(n), x = "clientHeight", E = "clientWidth";
    if (w === bt(n) && (w = Vt(n), zt(w).position !== "static" && a === "absolute" && (x = "scrollHeight", E = "scrollWidth")), w = w, r === ut || (r === dt || r === wt) && i === io) {
      v = $t;
      var O = f && w === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[x]
      );
      h -= O - o.height, h *= l ? 1 : -1;
    }
    if (r === dt || (r === ut || r === $t) && i === io) {
      C = wt;
      var T = f && w === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[E]
      );
      g -= T - o.width, g *= l ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: a
  }, c && Im), A = u === !0 ? Mm({
    x: g,
    y: h
  }, bt(n)) : {
    x: g,
    y: h
  };
  if (g = A.x, h = A.y, l) {
    var N;
    return Object.assign({}, F, (N = {}, N[v] = R ? "0" : "", N[C] = S ? "0" : "", N.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, F, (t = {}, t[v] = R ? h + "px" : "", t[C] = S ? g + "px" : "", t.transform = "", t));
}
function Bm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, c = {
    placement: Mt(t.placement),
    variation: Tn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Is(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Is(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Am = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Bm,
  data: {}
};
var xo = {
  passive: !0
};
function Nm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, l = bt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, xo);
  }), a && l.addEventListener("resize", n.update, xo), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, xo);
    }), a && l.removeEventListener("resize", n.update, xo);
  };
}
const Lm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Nm,
  data: {}
};
var Fm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Fm[t];
  });
}
var zm = {
  start: "end",
  end: "start"
};
function Ms(e) {
  return e.replace(/start|end/g, function(t) {
    return zm[t];
  });
}
function Fi(e) {
  var t = bt(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function zi(e) {
  return En(Vt(e)).left + Fi(e).scrollLeft;
}
function _m(e, t) {
  var n = bt(e), o = Vt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    var c = Qa();
    (c || !c && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + zi(e),
    y: l
  };
}
function jm(e) {
  var t, n = Vt(e), o = Fi(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = on(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = on(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + zi(e), l = -o.scrollTop;
  return zt(r || n).direction === "rtl" && (a += on(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function _i(e) {
  var t = zt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function rl(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0 ? e.ownerDocument.body : St(e) && _i(e) ? e : rl(kr(e));
}
function Qn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = rl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = bt(o), s = r ? [i].concat(i.visualViewport || [], _i(o) ? o : []) : o, a = t.concat(s);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Qn(kr(s)))
  );
}
function li(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Wm(e, t) {
  var n = En(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Bs(e, t, n) {
  return t === Za ? li(_m(e, n)) : ln(t) ? Wm(t, n) : li(jm(Vt(e)));
}
function Dm(e) {
  var t = Qn(kr(e)), n = ["absolute", "fixed"].indexOf(zt(e).position) >= 0, o = n && St(e) ? mo(e) : e;
  return ln(o) ? t.filter(function(r) {
    return ln(r) && el(r, o) && At(r) !== "body";
  }) : [];
}
function Hm(e, t, n, o) {
  var r = t === "clippingParents" ? Dm(e) : [].concat(t), i = [].concat(r, [n]), s = i[0], a = i.reduce(function(l, c) {
    var u = Bs(e, c, o);
    return l.top = on(u.top, l.top), l.right = zo(u.right, l.right), l.bottom = zo(u.bottom, l.bottom), l.left = on(u.left, l.left), l;
  }, Bs(e, s, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function il(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Mt(o) : null, i = o ? Tn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case ut:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case $t:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case wt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case dt:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = r ? Li(r) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Rn:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case io:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function so(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? cm : a, c = n.rootBoundary, u = c === void 0 ? Za : c, f = n.elementContext, m = f === void 0 ? _n : f, g = n.altBoundary, b = g === void 0 ? !1 : g, h = n.padding, y = h === void 0 ? 0 : h, S = nl(typeof y != "number" ? y : ol(y, fo)), R = m === _n ? um : _n, C = e.rects.popper, v = e.elements[b ? R : m], $ = Hm(ln(v) ? v : v.contextElement || Vt(e.elements.popper), l, u, s), w = En(e.elements.reference), x = il({
    reference: w,
    element: C,
    strategy: "absolute",
    placement: r
  }), E = li(Object.assign({}, C, x)), O = m === _n ? E : w, T = {
    top: $.top - O.top + S.top,
    bottom: O.bottom - $.bottom + S.bottom,
    left: $.left - O.left + S.left,
    right: O.right - $.right + S.right
  }, F = e.modifiersData.offset;
  if (m === _n && F) {
    var A = F[r];
    Object.keys(T).forEach(function(N) {
      var z = [wt, $t].indexOf(N) >= 0 ? 1 : -1, B = [ut, $t].indexOf(N) >= 0 ? "y" : "x";
      T[N] += A[B] * z;
    });
  }
  return T;
}
function Um(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Ja : l, u = Tn(o), f = u ? a ? ks : ks.filter(function(b) {
    return Tn(b) === u;
  }) : fo, m = f.filter(function(b) {
    return c.indexOf(b) >= 0;
  });
  m.length === 0 && (m = f);
  var g = m.reduce(function(b, h) {
    return b[h] = so(e, {
      placement: h,
      boundary: r,
      rootBoundary: i,
      padding: s
    })[Mt(h)], b;
  }, {});
  return Object.keys(g).sort(function(b, h) {
    return g[b] - g[h];
  });
}
function Vm(e) {
  if (Mt(e) === Bi)
    return [];
  var t = Oo(e);
  return [Ms(e), t, Ms(t)];
}
function Km(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, b = g === void 0 ? !0 : g, h = n.allowedAutoPlacements, y = t.options.placement, S = Mt(y), R = S === y, C = l || (R || !b ? [Oo(y)] : Vm(y)), v = [y].concat(C).reduce(function(q, Q) {
      return q.concat(Mt(Q) === Bi ? Um(t, {
        placement: Q,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: b,
        allowedAutoPlacements: h
      }) : Q);
    }, []), $ = t.rects.reference, w = t.rects.popper, x = /* @__PURE__ */ new Map(), E = !0, O = v[0], T = 0; T < v.length; T++) {
      var F = v[T], A = Mt(F), N = Tn(F) === Rn, z = [ut, $t].indexOf(A) >= 0, B = z ? "width" : "height", M = so(t, {
        placement: F,
        boundary: u,
        rootBoundary: f,
        altBoundary: m,
        padding: c
      }), L = z ? N ? wt : dt : N ? $t : ut;
      $[B] > w[B] && (L = Oo(L));
      var j = Oo(L), H = [];
      if (i && H.push(M[A] <= 0), a && H.push(M[L] <= 0, M[j] <= 0), H.every(function(q) {
        return q;
      })) {
        O = F, E = !1;
        break;
      }
      x.set(F, H);
    }
    if (E)
      for (var ne = b ? 3 : 1, ye = function(Q) {
        var le = v.find(function(ke) {
          var ee = x.get(ke);
          if (ee)
            return ee.slice(0, Q).every(function(re) {
              return re;
            });
        });
        if (le)
          return O = le, "break";
      }, we = ne; we > 0; we--) {
        var $e = ye(we);
        if ($e === "break")
          break;
      }
    t.placement !== O && (t.modifiersData[o]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Gm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Km,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function As(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Ns(e) {
  return [ut, wt, $t, dt].some(function(t) {
    return e[t] >= 0;
  });
}
function qm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = so(t, {
    elementContext: "reference"
  }), a = so(t, {
    altBoundary: !0
  }), l = As(s, o), c = As(a, r, i), u = Ns(l), f = Ns(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const Xm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: qm
};
function Ym(e, t, n) {
  var o = Mt(e), r = [dt, ut].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * r, [dt, wt].indexOf(o) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Zm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, s = Ja.reduce(function(u, f) {
    return u[f] = Ym(f, t.rects, i), u;
  }, {}), a = s[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
const Jm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Zm
};
function Qm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = il({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const eh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qm,
  data: {}
};
function th(e) {
  return e === "x" ? "y" : "x";
}
function nh(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, f = n.padding, m = n.tether, g = m === void 0 ? !0 : m, b = n.tetherOffset, h = b === void 0 ? 0 : b, y = so(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), S = Mt(t.placement), R = Tn(t.placement), C = !R, v = Li(S), $ = th(v), w = t.modifiersData.popperOffsets, x = t.rects.reference, E = t.rects.popper, O = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, T = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var N, z = v === "y" ? ut : dt, B = v === "y" ? $t : wt, M = v === "y" ? "height" : "width", L = w[v], j = L + y[z], H = L - y[B], ne = g ? -E[M] / 2 : 0, ye = R === Rn ? x[M] : E[M], we = R === Rn ? -E[M] : -x[M], $e = t.elements.arrow, q = g && $e ? Ni($e) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : tl(), le = Q[z], ke = Q[B], ee = Jn(0, x[M], q[M]), re = C ? x[M] / 2 - ne - ee - le - T.mainAxis : ye - ee - le - T.mainAxis, Ie = C ? -x[M] / 2 + ne + ee + ke + T.mainAxis : we + ee + ke + T.mainAxis, ce = t.elements.arrow && mo(t.elements.arrow), ue = ce ? v === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, ie = (N = F == null ? void 0 : F[v]) != null ? N : 0, pe = L + re - ie - ue, te = L + Ie - ie, K = Jn(g ? zo(j, pe) : j, L, g ? on(H, te) : H);
      w[v] = K, A[v] = K - L;
    }
    if (a) {
      var Me, J = v === "x" ? ut : dt, Fe = v === "x" ? $t : wt, Se = w[$], be = $ === "y" ? "height" : "width", Le = Se + y[J], Pe = Se - y[Fe], xe = [ut, dt].indexOf(S) !== -1, Ue = (Me = F == null ? void 0 : F[$]) != null ? Me : 0, Ve = xe ? Le : Se - x[be] - E[be] - Ue + T.altAxis, qe = xe ? Se + x[be] + E[be] - Ue - T.altAxis : Pe, se = g && xe ? Pm(Ve, Se, qe) : Jn(g ? Ve : Le, Se, g ? qe : Pe);
      w[$] = se, A[$] = se - Se;
    }
    t.modifiersData[o] = A;
  }
}
const oh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nh,
  requiresIfExists: ["offset"]
};
function rh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ih(e) {
  return e === bt(e) || !St(e) ? Fi(e) : rh(e);
}
function sh(e) {
  var t = e.getBoundingClientRect(), n = Pn(t.width) / e.offsetWidth || 1, o = Pn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function ah(e, t, n) {
  n === void 0 && (n = !1);
  var o = St(t), r = St(t) && sh(t), i = Vt(t), s = En(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((At(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  _i(i)) && (a = ih(t)), St(t) ? (l = En(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = zi(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function lh(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || r(i);
  }), o;
}
function ch(e) {
  var t = lh(e);
  return xm.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function uh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dh(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ls = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ph(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? Ls : r;
  return function(a, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ls, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], m = !1, g = {
      state: u,
      setOptions: function(S) {
        var R = typeof S == "function" ? S(u.options) : S;
        h(), u.options = Object.assign({}, i, u.options, R), u.scrollParents = {
          reference: ln(a) ? Qn(a) : a.contextElement ? Qn(a.contextElement) : [],
          popper: Qn(l)
        };
        var C = ch(dh([].concat(o, u.options.modifiers)));
        return u.orderedModifiers = C.filter(function(v) {
          return v.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var S = u.elements, R = S.reference, C = S.popper;
          if (Fs(R, C)) {
            u.rects = {
              reference: ah(R, mo(C), u.options.strategy === "fixed"),
              popper: Ni(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(T) {
              return u.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var v = 0; v < u.orderedModifiers.length; v++) {
              if (u.reset === !0) {
                u.reset = !1, v = -1;
                continue;
              }
              var $ = u.orderedModifiers[v], w = $.fn, x = $.options, E = x === void 0 ? {} : x, O = $.name;
              typeof w == "function" && (u = w({
                state: u,
                options: E,
                name: O,
                instance: g
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uh(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        h(), m = !0;
      }
    };
    if (!Fs(a, l))
      return g;
    g.setOptions(c).then(function(y) {
      !m && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function b() {
      u.orderedModifiers.forEach(function(y) {
        var S = y.name, R = y.options, C = R === void 0 ? {} : R, v = y.effect;
        if (typeof v == "function") {
          var $ = v({
            state: u,
            name: S,
            instance: g,
            options: C
          }), w = function() {
          };
          f.push($ || w);
        }
      });
    }
    function h() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return g;
  };
}
var fh = [Lm, eh, Am, $m, Jm, Gm, oh, Om, Xm], mh = /* @__PURE__ */ ph({
  defaultModifiers: fh
});
const sl = "Popper";
function hh(e) {
  return Xa(sl, e);
}
Df(sl, ["root"]);
const gh = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], bh = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function vh(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function ci(e) {
  return typeof e == "function" ? e() : e;
}
function yh(e) {
  return e.nodeType !== void 0;
}
const xh = () => me({
  root: ["root"]
}, zp(hh)), Ch = {}, Sh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const {
    anchorEl: r,
    children: i,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: f,
    popperRef: m,
    slotProps: g = {},
    slots: b = {},
    TransitionProps: h
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, y = U(t, gh), S = d.useRef(null), R = Je(S, n), C = d.useRef(null), v = Je(C, m), $ = d.useRef(v);
  Bt(() => {
    $.current = v;
  }, [v]), d.useImperativeHandle(m, () => C.current, []);
  const w = vh(u, s), [x, E] = d.useState(w), [O, T] = d.useState(ci(r));
  d.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), d.useEffect(() => {
    r && T(ci(r));
  }, [r]), Bt(() => {
    if (!O || !c)
      return;
    const B = (j) => {
      E(j.placement);
    };
    let M = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: j
      }) => {
        B(j);
      }
    }];
    l != null && (M = M.concat(l)), f && f.modifiers != null && (M = M.concat(f.modifiers));
    const L = mh(O, S.current, p({
      placement: w
    }, f, {
      modifiers: M
    }));
    return $.current(L), () => {
      L.destroy(), $.current(null);
    };
  }, [O, a, l, c, f, w]);
  const F = {
    placement: x
  };
  h !== null && (F.TransitionProps = h);
  const A = xh(), N = (o = b.root) != null ? o : "div", z = Et({
    elementType: N,
    externalSlotProps: g.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: A.root
  });
  return /* @__PURE__ */ P.jsx(N, p({}, z, {
    children: typeof i == "function" ? i(F) : i
  }));
}), $h = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: c,
    open: u,
    placement: f = "bottom",
    popperOptions: m = Ch,
    popperRef: g,
    style: b,
    transition: h = !1,
    slotProps: y = {},
    slots: S = {}
  } = t, R = U(t, bh), [C, v] = d.useState(!0), $ = () => {
    v(!1);
  }, w = () => {
    v(!0);
  };
  if (!l && !u && (!h || C))
    return null;
  let x;
  if (i)
    x = i;
  else if (o) {
    const T = ci(o);
    x = T && yh(T) ? Ze(T).body : Ze(null).body;
  }
  const E = !u && l && (!h || C) ? "none" : void 0, O = h ? {
    in: u,
    onEnter: $,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ P.jsx(Ya, {
    disablePortal: a,
    container: x,
    children: /* @__PURE__ */ P.jsx(Sh, p({
      anchorEl: o,
      direction: s,
      disablePortal: a,
      modifiers: c,
      ref: n,
      open: h ? !C : u,
      placement: f,
      popperOptions: m,
      popperRef: g,
      slotProps: y,
      slots: S
    }, R, {
      style: p({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: E
      }, b),
      TransitionProps: O,
      children: r
    }))
  });
}), wh = ["onChange", "maxRows", "minRows", "style", "value"];
function Co(e) {
  return parseInt(e, 10) || 0;
}
const Rh = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function zs(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const Ph = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    onChange: o,
    maxRows: r,
    minRows: i = 1,
    style: s,
    value: a
  } = t, l = U(t, wh), {
    current: c
  } = d.useRef(a != null), u = d.useRef(null), f = Je(n, u), m = d.useRef(null), g = d.useRef(0), [b, h] = d.useState({
    outerHeightStyle: 0
  }), y = d.useCallback(() => {
    const v = u.current, w = Ft(v).getComputedStyle(v);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const x = m.current;
    x.style.width = w.width, x.value = v.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const E = w.boxSizing, O = Co(w.paddingBottom) + Co(w.paddingTop), T = Co(w.borderBottomWidth) + Co(w.borderTopWidth), F = x.scrollHeight;
    x.value = "x";
    const A = x.scrollHeight;
    let N = F;
    i && (N = Math.max(Number(i) * A, N)), r && (N = Math.min(Number(r) * A, N)), N = Math.max(N, A);
    const z = N + (E === "border-box" ? O + T : 0), B = Math.abs(N - F) <= 1;
    return {
      outerHeightStyle: z,
      overflow: B
    };
  }, [r, i, t.placeholder]), S = (v, $) => {
    const {
      outerHeightStyle: w,
      overflow: x
    } = $;
    return g.current < 20 && (w > 0 && Math.abs((v.outerHeightStyle || 0) - w) > 1 || v.overflow !== x) ? (g.current += 1, {
      overflow: x,
      outerHeightStyle: w
    }) : v;
  }, R = d.useCallback(() => {
    const v = y();
    zs(v) || h(($) => S($, v));
  }, [y]);
  Bt(() => {
    const v = () => {
      const F = y();
      zs(F) || ra.flushSync(() => {
        h((A) => S(A, F));
      });
    }, $ = () => {
      g.current = 0, v();
    };
    let w;
    const x = dr($), E = u.current, O = Ft(E);
    O.addEventListener("resize", x);
    let T;
    return typeof ResizeObserver < "u" && (T = new ResizeObserver($), T.observe(E)), () => {
      x.clear(), cancelAnimationFrame(w), O.removeEventListener("resize", x), T && T.disconnect();
    };
  }, [y]), Bt(() => {
    R();
  }), d.useEffect(() => {
    g.current = 0;
  }, [a]);
  const C = (v) => {
    g.current = 0, c || R(), o && o(v);
  };
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx("textarea", p({
      value: a,
      onChange: C,
      ref: f,
      rows: i,
      style: p({
        height: b.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: b.overflow ? "hidden" : void 0
      }, s)
    }, l)), /* @__PURE__ */ P.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: m,
      tabIndex: -1,
      style: p({}, Rh.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function _s(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Eh(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: o,
    matchFrom: r = "any",
    stringify: i,
    trim: s = !1
  } = e;
  return (a, {
    inputValue: l,
    getOptionLabel: c
  }) => {
    let u = s ? l.trim() : l;
    n && (u = u.toLowerCase()), t && (u = _s(u));
    const f = u ? a.filter((m) => {
      let g = (i || c)(m);
      return n && (g = g.toLowerCase()), t && (g = _s(g)), r === "start" ? g.indexOf(u) === 0 : g.indexOf(u) > -1;
    }) : a;
    return typeof o == "number" ? f.slice(0, o) : f;
  };
}
function Ur(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const Th = Eh(), js = 5, kh = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function Wy(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = kh,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: o = !1,
    autoHighlight: r = !1,
    autoSelect: i = !1,
    blurOnSelect: s = !1,
    clearOnBlur: a = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: c = "useAutocomplete",
    defaultValue: u = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: m = !1,
    disabled: g,
    disabledItemsFocusable: b = !1,
    disableListWrap: h = !1,
    filterOptions: y = Th,
    filterSelectedOptions: S = !1,
    freeSolo: R = !1,
    getOptionDisabled: C,
    getOptionKey: v,
    getOptionLabel: $ = (I) => {
      var k;
      return (k = I.label) != null ? k : I;
    },
    groupBy: w,
    handleHomeEndKeys: x = !e.freeSolo,
    id: E,
    includeInputInList: O = !1,
    inputValue: T,
    isOptionEqualToValue: F = (I, k) => I === k,
    multiple: A = !1,
    onChange: N,
    onClose: z,
    onHighlightChange: B,
    onInputChange: M,
    onOpen: L,
    open: j,
    openOnFocus: H = !1,
    options: ne,
    readOnly: ye = !1,
    selectOnFocus: we = !e.freeSolo,
    value: $e
  } = e, q = pr(E);
  let Q = $;
  Q = (I) => {
    const k = $(I);
    return typeof k != "string" ? String(k) : k;
  };
  const le = d.useRef(!1), ke = d.useRef(!0), ee = d.useRef(null), re = d.useRef(null), [Ie, ce] = d.useState(null), [ue, ie] = d.useState(-1), pe = r ? 0 : -1, te = d.useRef(pe), [K, Me] = tn({
    controlled: $e,
    default: u,
    name: c
  }), [J, Fe] = tn({
    controlled: T,
    default: "",
    name: c,
    state: "inputValue"
  }), [Se, be] = d.useState(!1), Le = d.useCallback((I, k) => {
    if (!(A ? K.length < k.length : k !== null) && !a)
      return;
    let oe;
    if (A)
      oe = "";
    else if (k == null)
      oe = "";
    else {
      const Be = Q(k);
      oe = typeof Be == "string" ? Be : "";
    }
    J !== oe && (Fe(oe), M && M(I, oe, "reset"));
  }, [Q, J, A, M, Fe, a, K]), [Pe, xe] = tn({
    controlled: j,
    default: !1,
    name: c,
    state: "open"
  }), [Ue, Ve] = d.useState(!0), qe = !A && K != null && J === Q(K), se = Pe && !ye, W = se ? y(
    ne.filter((I) => !(S && (A ? K : [K]).some((k) => k !== null && F(I, k)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: qe && Ue ? "" : J,
      getOptionLabel: Q
    }
  ) : [], Re = Zc({
    filteredOptions: W,
    value: K,
    inputValue: J
  });
  d.useEffect(() => {
    const I = K !== Re.value;
    Se && !I || R && !I || Le(null, K);
  }, [K, Le, Se, Re.value, R]);
  const Qe = Pe && W.length > 0 && !ye, et = st((I) => {
    I === -1 ? ee.current.focus() : Ie.querySelector(`[data-tag-index="${I}"]`).focus();
  });
  d.useEffect(() => {
    A && ue > K.length - 1 && (ie(-1), et(-1));
  }, [K, A, ue, et]);
  function Y(I, k) {
    if (!re.current || I < 0 || I >= W.length)
      return -1;
    let V = I;
    for (; ; ) {
      const oe = re.current.querySelector(`[data-option-index="${V}"]`), Be = b ? !1 : !oe || oe.disabled || oe.getAttribute("aria-disabled") === "true";
      if (oe && oe.hasAttribute("tabindex") && !Be)
        return V;
      if (k === "next" ? V = (V + 1) % W.length : V = (V - 1 + W.length) % W.length, V === I)
        return -1;
    }
  }
  const de = st(({
    event: I,
    index: k,
    reason: V = "auto"
  }) => {
    if (te.current = k, k === -1 ? ee.current.removeAttribute("aria-activedescendant") : ee.current.setAttribute("aria-activedescendant", `${q}-option-${k}`), B && B(I, k === -1 ? null : W[k], V), !re.current)
      return;
    const oe = re.current.querySelector(`[role="option"].${n}-focused`);
    oe && (oe.classList.remove(`${n}-focused`), oe.classList.remove(`${n}-focusVisible`));
    let Be = re.current;
    if (re.current.getAttribute("role") !== "listbox" && (Be = re.current.parentElement.querySelector('[role="listbox"]')), !Be)
      return;
    if (k === -1) {
      Be.scrollTop = 0;
      return;
    }
    const We = re.current.querySelector(`[data-option-index="${k}"]`);
    if (We && (We.classList.add(`${n}-focused`), V === "keyboard" && We.classList.add(`${n}-focusVisible`), Be.scrollHeight > Be.clientHeight && V !== "mouse" && V !== "touch")) {
      const Ke = We, ae = Be.clientHeight + Be.scrollTop, rt = Ke.offsetTop + Ke.offsetHeight;
      rt > ae ? Be.scrollTop = rt - Be.clientHeight : Ke.offsetTop - Ke.offsetHeight * (w ? 1.3 : 0) < Be.scrollTop && (Be.scrollTop = Ke.offsetTop - Ke.offsetHeight * (w ? 1.3 : 0));
    }
  }), _ = st(({
    event: I,
    diff: k,
    direction: V = "next",
    reason: oe = "auto"
  }) => {
    if (!se)
      return;
    const We = Y((() => {
      const Ke = W.length - 1;
      if (k === "reset")
        return pe;
      if (k === "start")
        return 0;
      if (k === "end")
        return Ke;
      const ae = te.current + k;
      return ae < 0 ? ae === -1 && O ? -1 : h && te.current !== -1 || Math.abs(k) > 1 ? 0 : Ke : ae > Ke ? ae === Ke + 1 && O ? -1 : h || Math.abs(k) > 1 ? Ke : 0 : ae;
    })(), V);
    if (de({
      index: We,
      reason: oe,
      event: I
    }), o && k !== "reset")
      if (We === -1)
        ee.current.value = J;
      else {
        const Ke = Q(W[We]);
        ee.current.value = Ke, Ke.toLowerCase().indexOf(J.toLowerCase()) === 0 && J.length > 0 && ee.current.setSelectionRange(J.length, Ke.length);
      }
  }), G = () => {
    const I = (k, V) => {
      const oe = k ? Q(k) : "", Be = V ? Q(V) : "";
      return oe === Be;
    };
    if (te.current !== -1 && Re.filteredOptions && Re.filteredOptions.length !== W.length && Re.inputValue === J && (A ? K.length === Re.value.length && Re.value.every((k, V) => Q(K[V]) === Q(k)) : I(Re.value, K))) {
      const k = Re.filteredOptions[te.current];
      if (k && W.some((oe) => Q(oe) === Q(k)))
        return !0;
    }
    return !1;
  }, fe = d.useCallback(() => {
    if (!se || G())
      return;
    const I = A ? K[0] : K;
    if (W.length === 0 || I == null) {
      _({
        diff: "reset"
      });
      return;
    }
    if (re.current) {
      if (I != null) {
        const k = W[te.current];
        if (A && k && Ur(K, (oe) => F(k, oe)) !== -1)
          return;
        const V = Ur(W, (oe) => F(oe, I));
        V === -1 ? _({
          diff: "reset"
        }) : de({
          index: V
        });
        return;
      }
      if (te.current >= W.length - 1) {
        de({
          index: W.length - 1
        });
        return;
      }
      de({
        index: te.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    W.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    A ? !1 : K,
    S,
    _,
    de,
    se,
    J,
    A
  ]), Ce = st((I) => {
    Mo(re, I), I && fe();
  });
  d.useEffect(() => {
    fe();
  }, [fe]);
  const Oe = (I) => {
    Pe || (xe(!0), Ve(!0), L && L(I));
  }, je = (I, k) => {
    Pe && (xe(!1), z && z(I, k));
  }, Ye = (I, k, V, oe) => {
    if (A) {
      if (K.length === k.length && K.every((Be, We) => Be === k[We]))
        return;
    } else if (K === k)
      return;
    N && N(I, k, V, oe), Me(k);
  }, mt = d.useRef(!1), nt = (I, k, V = "selectOption", oe = "options") => {
    let Be = V, We = k;
    if (A) {
      We = Array.isArray(K) ? K.slice() : [];
      const Ke = Ur(We, (ae) => F(k, ae));
      Ke === -1 ? We.push(k) : oe !== "freeSolo" && (We.splice(Ke, 1), Be = "removeOption");
    }
    Le(I, We), Ye(I, We, Be, {
      option: k
    }), !m && (!I || !I.ctrlKey && !I.metaKey) && je(I, Be), (s === !0 || s === "touch" && mt.current || s === "mouse" && !mt.current) && ee.current.blur();
  };
  function Wt(I, k) {
    if (I === -1)
      return -1;
    let V = I;
    for (; ; ) {
      if (k === "next" && V === K.length || k === "previous" && V === -1)
        return -1;
      const oe = Ie.querySelector(`[data-tag-index="${V}"]`);
      if (!oe || !oe.hasAttribute("tabindex") || oe.disabled || oe.getAttribute("aria-disabled") === "true")
        V += k === "next" ? 1 : -1;
      else
        return V;
    }
  }
  const Mn = (I, k) => {
    if (!A)
      return;
    J === "" && je(I, "toggleInput");
    let V = ue;
    ue === -1 ? J === "" && k === "previous" && (V = K.length - 1) : (V += k === "next" ? 1 : -1, V < 0 && (V = 0), V === K.length && (V = -1)), V = Wt(V, k), ie(V), et(V);
  }, Bn = (I) => {
    le.current = !0, Fe(""), M && M(I, "", "clear"), Ye(I, A ? [] : null, "clear");
  }, ho = (I) => (k) => {
    if (I.onKeyDown && I.onKeyDown(k), !k.defaultMuiPrevented && (ue !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(k.key) === -1 && (ie(-1), et(-1)), k.which !== 229))
      switch (k.key) {
        case "Home":
          se && x && (k.preventDefault(), _({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: k
          }));
          break;
        case "End":
          se && x && (k.preventDefault(), _({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: k
          }));
          break;
        case "PageUp":
          k.preventDefault(), _({
            diff: -js,
            direction: "previous",
            reason: "keyboard",
            event: k
          }), Oe(k);
          break;
        case "PageDown":
          k.preventDefault(), _({
            diff: js,
            direction: "next",
            reason: "keyboard",
            event: k
          }), Oe(k);
          break;
        case "ArrowDown":
          k.preventDefault(), _({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: k
          }), Oe(k);
          break;
        case "ArrowUp":
          k.preventDefault(), _({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: k
          }), Oe(k);
          break;
        case "ArrowLeft":
          Mn(k, "previous");
          break;
        case "ArrowRight":
          Mn(k, "next");
          break;
        case "Enter":
          if (te.current !== -1 && se) {
            const V = W[te.current], oe = C ? C(V) : !1;
            if (k.preventDefault(), oe)
              return;
            nt(k, V, "selectOption"), o && ee.current.setSelectionRange(ee.current.value.length, ee.current.value.length);
          } else
            R && J !== "" && qe === !1 && (A && k.preventDefault(), nt(k, J, "createOption", "freeSolo"));
          break;
        case "Escape":
          se ? (k.preventDefault(), k.stopPropagation(), je(k, "escape")) : l && (J !== "" || A && K.length > 0) && (k.preventDefault(), k.stopPropagation(), Bn(k));
          break;
        case "Backspace":
          if (A && !ye && J === "" && K.length > 0) {
            const V = ue === -1 ? K.length - 1 : ue, oe = K.slice();
            oe.splice(V, 1), Ye(k, oe, "removeOption", {
              option: K[V]
            });
          }
          break;
        case "Delete":
          if (A && !ye && J === "" && K.length > 0 && ue !== -1) {
            const V = ue, oe = K.slice();
            oe.splice(V, 1), Ye(k, oe, "removeOption", {
              option: K[V]
            });
          }
          break;
      }
  }, Nr = (I) => {
    be(!0), H && !le.current && Oe(I);
  }, go = (I) => {
    if (t(re)) {
      ee.current.focus();
      return;
    }
    be(!1), ke.current = !0, le.current = !1, i && te.current !== -1 && se ? nt(I, W[te.current], "blur") : i && R && J !== "" ? nt(I, J, "blur", "freeSolo") : a && Le(I, K), je(I, "blur");
  }, Lr = (I) => {
    const k = I.target.value;
    J !== k && (Fe(k), Ve(!1), M && M(I, k, "input")), k === "" ? !f && !A && Ye(I, null, "clear") : Oe(I);
  }, An = (I) => {
    const k = Number(I.currentTarget.getAttribute("data-option-index"));
    te.current !== k && de({
      event: I,
      index: k,
      reason: "mouse"
    });
  }, Fr = (I) => {
    de({
      event: I,
      index: Number(I.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), mt.current = !0;
  }, Kt = (I) => {
    const k = Number(I.currentTarget.getAttribute("data-option-index"));
    nt(I, W[k], "selectOption"), mt.current = !1;
  }, Nn = (I) => (k) => {
    const V = K.slice();
    V.splice(I, 1), Ye(k, V, "removeOption", {
      option: K[I]
    });
  }, lt = (I) => {
    Pe ? je(I, "toggleInput") : Oe(I);
  }, Gt = (I) => {
    I.currentTarget.contains(I.target) && I.target.getAttribute("id") !== q && I.preventDefault();
  }, zr = (I) => {
    I.currentTarget.contains(I.target) && (ee.current.focus(), we && ke.current && ee.current.selectionEnd - ee.current.selectionStart === 0 && ee.current.select(), ke.current = !1);
  }, qt = (I) => {
    !g && (J === "" || !Pe) && lt(I);
  };
  let Xt = R && J.length > 0;
  Xt = Xt || (A ? K.length > 0 : K !== null);
  let Ln = W;
  return w && (Ln = W.reduce((I, k, V) => {
    const oe = w(k);
    return I.length > 0 && I[I.length - 1].group === oe ? I[I.length - 1].options.push(k) : I.push({
      key: V,
      index: V,
      group: oe,
      options: [k]
    }), I;
  }, [])), g && Se && go(), {
    getRootProps: (I = {}) => p({
      "aria-owns": Qe ? `${q}-listbox` : null
    }, I, {
      onKeyDown: ho(I),
      onMouseDown: Gt,
      onClick: zr
    }),
    getInputLabelProps: () => ({
      id: `${q}-label`,
      htmlFor: q
    }),
    getInputProps: () => ({
      id: q,
      value: J,
      onBlur: go,
      onFocus: Nr,
      onChange: Lr,
      onMouseDown: qt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": se ? "" : null,
      "aria-autocomplete": o ? "both" : "list",
      "aria-controls": Qe ? `${q}-listbox` : void 0,
      "aria-expanded": Qe,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: ee,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: g
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Bn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: lt
    }),
    getTagProps: ({
      index: I
    }) => p({
      key: I,
      "data-tag-index": I,
      tabIndex: -1
    }, !ye && {
      onDelete: Nn(I)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${q}-listbox`,
      "aria-labelledby": `${q}-label`,
      ref: Ce,
      onMouseDown: (I) => {
        I.preventDefault();
      }
    }),
    getOptionProps: ({
      index: I,
      option: k
    }) => {
      var V;
      const oe = (A ? K : [K]).some((We) => We != null && F(k, We)), Be = C ? C(k) : !1;
      return {
        key: (V = v == null ? void 0 : v(k)) != null ? V : Q(k),
        tabIndex: -1,
        role: "option",
        id: `${q}-option-${I}`,
        onMouseMove: An,
        onClick: Kt,
        onTouchStart: Fr,
        "data-option-index": I,
        "aria-disabled": Be,
        "aria-selected": oe
      };
    },
    id: q,
    inputValue: J,
    value: K,
    dirty: Xt,
    expanded: se && Ie,
    popupOpen: se,
    focused: Se || ue !== -1,
    anchorEl: Ie,
    setAnchorEl: ce,
    focusedTag: ue,
    groupedOptions: Ln
  };
}
const Oh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Ih = D($h, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Mh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const r = ki(), i = ve({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: f,
    keepMounted: m,
    modifiers: g,
    open: b,
    placement: h,
    popperOptions: y,
    popperRef: S,
    transition: R,
    slots: C,
    slotProps: v
  } = i, $ = U(i, Oh), w = (o = C == null ? void 0 : C.root) != null ? o : l == null ? void 0 : l.Root, x = p({
    anchorEl: s,
    container: u,
    disablePortal: f,
    keepMounted: m,
    modifiers: g,
    open: b,
    placement: h,
    popperOptions: y,
    popperRef: S,
    transition: R
  }, $);
  return /* @__PURE__ */ P.jsx(Ih, p({
    as: a,
    direction: r == null ? void 0 : r.direction,
    slots: {
      root: w
    },
    slotProps: v ?? c
  }, x, {
    ref: n
  }));
}), al = Mh;
function un({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((o, r) => (o[r] = e[r], n && typeof e[r] > "u" && (o[r] = n[r]), o), {});
}
const Bh = /* @__PURE__ */ d.createContext(void 0), Or = Bh;
function jt() {
  return d.useContext(Or);
}
function Ah(e) {
  return /* @__PURE__ */ P.jsx(ed, p({}, e, {
    defaultTheme: Er,
    themeId: rn
  }));
}
function Ws(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function _o(e, t = !1) {
  return e && (Ws(e.value) && e.value !== "" || t && Ws(e.defaultValue) && e.defaultValue !== "");
}
function Nh(e) {
  return e.startAdornment;
}
function Lh(e) {
  return he("MuiInputBase", e);
}
const Fh = ge("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), kn = Fh, zh = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Ir = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Z(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Mr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, _h = (e) => {
  const {
    classes: t,
    color: n,
    disabled: o,
    error: r,
    endAdornment: i,
    focused: s,
    formControl: a,
    fullWidth: l,
    hiddenLabel: c,
    multiline: u,
    readOnly: f,
    size: m,
    startAdornment: g,
    type: b
  } = e, h = {
    root: ["root", `color${Z(n)}`, o && "disabled", r && "error", l && "fullWidth", s && "focused", a && "formControl", m && m !== "medium" && `size${Z(m)}`, u && "multiline", g && "adornedStart", i && "adornedEnd", c && "hiddenLabel", f && "readOnly"],
    input: ["input", o && "disabled", b === "search" && "inputTypeSearch", u && "inputMultiline", m === "small" && "inputSizeSmall", c && "inputHiddenLabel", g && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
  };
  return me(h, Lh, t);
}, Br = D("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ir
})(({
  theme: e,
  ownerState: t
}) => p({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${kn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && p({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Ar = D("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Mr
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", o = p({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), r = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return p({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": o,
    "&::-moz-placeholder": o,
    // Firefox 19+
    "&:-ms-input-placeholder": o,
    // IE11
    "&::-ms-input-placeholder": o,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${kn.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&:-ms-input-placeholder": r,
      // IE11
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${kn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), jh = /* @__PURE__ */ P.jsx(Ah, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), Wh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const r = ve({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    components: c = {},
    componentsProps: u = {},
    defaultValue: f,
    disabled: m,
    disableInjectingGlobalStyles: g,
    endAdornment: b,
    fullWidth: h = !1,
    id: y,
    inputComponent: S = "input",
    inputProps: R = {},
    inputRef: C,
    maxRows: v,
    minRows: $,
    multiline: w = !1,
    name: x,
    onBlur: E,
    onChange: O,
    onClick: T,
    onFocus: F,
    onKeyDown: A,
    onKeyUp: N,
    placeholder: z,
    readOnly: B,
    renderSuffix: M,
    rows: L,
    slotProps: j = {},
    slots: H = {},
    startAdornment: ne,
    type: ye = "text",
    value: we
  } = r, $e = U(r, zh), q = R.value != null ? R.value : we, {
    current: Q
  } = d.useRef(q != null), le = d.useRef(), ke = d.useCallback((se) => {
  }, []), ee = Je(le, C, R.ref, ke), [re, Ie] = d.useState(!1), ce = jt(), ue = un({
    props: r,
    muiFormControl: ce,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ue.focused = ce ? ce.focused : re, d.useEffect(() => {
    !ce && m && re && (Ie(!1), E && E());
  }, [ce, m, re, E]);
  const ie = ce && ce.onFilled, pe = ce && ce.onEmpty, te = d.useCallback((se) => {
    _o(se) ? ie && ie() : pe && pe();
  }, [ie, pe]);
  Bt(() => {
    Q && te({
      value: q
    });
  }, [q, te, Q]);
  const K = (se) => {
    if (ue.disabled) {
      se.stopPropagation();
      return;
    }
    F && F(se), R.onFocus && R.onFocus(se), ce && ce.onFocus ? ce.onFocus(se) : Ie(!0);
  }, Me = (se) => {
    E && E(se), R.onBlur && R.onBlur(se), ce && ce.onBlur ? ce.onBlur(se) : Ie(!1);
  }, J = (se, ...W) => {
    if (!Q) {
      const Re = se.target || le.current;
      if (Re == null)
        throw new Error(Lt(1));
      te({
        value: Re.value
      });
    }
    R.onChange && R.onChange(se, ...W), O && O(se, ...W);
  };
  d.useEffect(() => {
    te(le.current);
  }, []);
  const Fe = (se) => {
    le.current && se.currentTarget === se.target && le.current.focus(), T && T(se);
  };
  let Se = S, be = R;
  w && Se === "input" && (L ? be = p({
    type: void 0,
    minRows: L,
    maxRows: L
  }, be) : be = p({
    type: void 0,
    maxRows: v,
    minRows: $
  }, be), Se = Ph);
  const Le = (se) => {
    te(se.animationName === "mui-auto-fill-cancel" ? le.current : {
      value: "x"
    });
  };
  d.useEffect(() => {
    ce && ce.setAdornedStart(!!ne);
  }, [ce, ne]);
  const Pe = p({}, r, {
    color: ue.color || "primary",
    disabled: ue.disabled,
    endAdornment: b,
    error: ue.error,
    focused: ue.focused,
    formControl: ce,
    fullWidth: h,
    hiddenLabel: ue.hiddenLabel,
    multiline: w,
    size: ue.size,
    startAdornment: ne,
    type: ye
  }), xe = _h(Pe), Ue = H.root || c.Root || Br, Ve = j.root || u.root || {}, qe = H.input || c.Input || Ar;
  return be = p({}, be, (o = j.input) != null ? o : u.input), /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [!g && jh, /* @__PURE__ */ P.jsxs(Ue, p({}, Ve, !Lo(Ue) && {
      ownerState: p({}, Pe, Ve.ownerState)
    }, {
      ref: n,
      onClick: Fe
    }, $e, {
      className: X(xe.root, Ve.className, l, B && "MuiInputBase-readOnly"),
      children: [ne, /* @__PURE__ */ P.jsx(Or.Provider, {
        value: null,
        children: /* @__PURE__ */ P.jsx(qe, p({
          ownerState: Pe,
          "aria-invalid": ue.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: ue.disabled,
          id: y,
          onAnimationStart: Le,
          name: x,
          placeholder: z,
          readOnly: B,
          required: ue.required,
          rows: L,
          value: q,
          onKeyDown: A,
          onKeyUp: N,
          type: ye
        }, be, !Lo(qe) && {
          as: Se,
          ownerState: p({}, Pe, be.ownerState)
        }, {
          ref: ee,
          className: X(xe.input, be.className, B && "MuiInputBase-readOnly"),
          onBlur: Me,
          onChange: J,
          onFocus: K
        }))
      }), b, M ? M(p({}, ue, {
        startAdornment: ne
      })) : null]
    }))]
  });
}), ji = Wh;
function Dh(e) {
  return he("MuiInput", e);
}
const Hh = p({}, kn, ge("MuiInput", ["root", "underline", "input"])), jn = Hh;
function Uh(e) {
  return he("MuiOutlinedInput", e);
}
const Vh = p({}, kn, ge("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Dt = Vh;
function Kh(e) {
  return he("MuiFilledInput", e);
}
const Gh = p({}, kn, ge("MuiFilledInput", ["root", "underline", "input"])), Yt = Gh, qh = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Xh = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Yh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Zh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = cn(), r = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: l,
    in: c,
    onEnter: u,
    onEntered: f,
    onEntering: m,
    onExit: g,
    onExited: b,
    onExiting: h,
    style: y,
    timeout: S = r,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = Va
  } = t, C = U(t, Xh), v = d.useRef(null), $ = Je(v, a.ref, n), w = (z) => (B) => {
    if (z) {
      const M = v.current;
      B === void 0 ? z(M) : z(M, B);
    }
  }, x = w(m), E = w((z, B) => {
    Ka(z);
    const M = No({
      style: y,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = o.transitions.create("opacity", M), z.style.transition = o.transitions.create("opacity", M), u && u(z, B);
  }), O = w(f), T = w(h), F = w((z) => {
    const B = No({
      style: y,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = o.transitions.create("opacity", B), z.style.transition = o.transitions.create("opacity", B), g && g(z);
  }), A = w(b), N = (z) => {
    i && i(v.current, z);
  };
  return /* @__PURE__ */ P.jsx(R, p({
    appear: s,
    in: c,
    nodeRef: v,
    onEnter: E,
    onEntered: O,
    onEntering: x,
    onExit: F,
    onExited: A,
    onExiting: T,
    addEndListener: N,
    timeout: S
  }, C, {
    children: (z, B) => /* @__PURE__ */ d.cloneElement(a, p({
      style: p({
        opacity: 0,
        visibility: z === "exited" && !c ? "hidden" : void 0
      }, Yh[z], y, a.props.style),
      ref: $
    }, B))
  }));
}), Jh = Zh;
function Qh(e) {
  return he("MuiBackdrop", e);
}
ge("MuiBackdrop", ["root", "invisible"]);
const eg = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], tg = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return me({
    root: ["root", n && "invisible"]
  }, Qh, t);
}, ng = D("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => p({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), og = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i;
  const s = ve({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: a,
    className: l,
    component: c = "div",
    components: u = {},
    componentsProps: f = {},
    invisible: m = !1,
    open: g,
    slotProps: b = {},
    slots: h = {},
    TransitionComponent: y = Jh,
    transitionDuration: S
  } = s, R = U(s, eg), C = p({}, s, {
    component: c,
    invisible: m
  }), v = tg(C), $ = (o = b.root) != null ? o : f.root;
  return /* @__PURE__ */ P.jsx(y, p({
    in: g,
    timeout: S
  }, R, {
    children: /* @__PURE__ */ P.jsx(ng, p({
      "aria-hidden": !0
    }, $, {
      as: (r = (i = h.root) != null ? i : u.Root) != null ? r : c,
      className: X(v.root, l, $ == null ? void 0 : $.className),
      ownerState: p({}, C, $ == null ? void 0 : $.ownerState),
      classes: v,
      ref: n,
      children: a
    }))
  }));
}), rg = og, ig = ge("MuiBox", ["root"]), sg = ig, ag = Da(), lg = rd({
  themeId: rn,
  defaultTheme: ag,
  defaultClassName: sg.root,
  generateClassName: Ia.generate
}), Dy = lg;
function cg(e) {
  return he("MuiButton", e);
}
const ug = ge("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), So = ug, dg = /* @__PURE__ */ d.createContext({}), pg = dg, fg = /* @__PURE__ */ d.createContext(void 0), mg = fg, hg = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], gg = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: r,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${Z(t)}`, `size${Z(r)}`, `${i}Size${Z(r)}`, t === "inherit" && "colorInherit", n && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Z(r)}`],
    endIcon: ["endIcon", `iconSize${Z(r)}`]
  }, l = me(a, cg, s);
  return p({}, s, l);
}, ll = (e) => p({}, e.size === "small" && {
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
}), bg = D(In, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${Z(n.color)}`], t[`size${Z(n.size)}`], t[`${n.variant}Size${Z(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, o;
  const r = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return p({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": p({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": p({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${So.focusVisible}`]: p({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${So.disabled}`]: p({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${at(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (o = e.palette).getContrastText) == null ? void 0 : n.call(o, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : r,
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
  [`&.${So.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${So.disabled}`]: {
    boxShadow: "none"
  }
}), vg = D("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${Z(n.size)}`]];
  }
})(({
  ownerState: e
}) => p({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, ll(e))), yg = D("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${Z(n.size)}`]];
  }
})(({
  ownerState: e
}) => p({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, ll(e))), xg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = d.useContext(pg), r = d.useContext(mg), i = mr(o, t), s = ve({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: f = !1,
    disableElevation: m = !1,
    disableFocusRipple: g = !1,
    endIcon: b,
    focusVisibleClassName: h,
    fullWidth: y = !1,
    size: S = "medium",
    startIcon: R,
    type: C,
    variant: v = "text"
  } = s, $ = U(s, hg), w = p({}, s, {
    color: l,
    component: c,
    disabled: f,
    disableElevation: m,
    disableFocusRipple: g,
    fullWidth: y,
    size: S,
    type: C,
    variant: v
  }), x = gg(w), E = R && /* @__PURE__ */ P.jsx(vg, {
    className: x.startIcon,
    ownerState: w,
    children: R
  }), O = b && /* @__PURE__ */ P.jsx(yg, {
    className: x.endIcon,
    ownerState: w,
    children: b
  }), T = r || "";
  return /* @__PURE__ */ P.jsxs(bg, p({
    ownerState: w,
    className: X(o.className, x.root, u, T),
    component: c,
    disabled: f,
    focusRipple: !g,
    focusVisibleClassName: X(x.focusVisible, h),
    ref: n,
    type: C
  }, $, {
    classes: x,
    children: [E, a, O]
  }));
}), Hy = xg;
function Cg(e) {
  return he("PrivateSwitchBase", e);
}
ge("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Sg = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], $g = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: o,
    edge: r
  } = e, i = {
    root: ["root", n && "checked", o && "disabled", r && `edge${Z(r)}`],
    input: ["input"]
  };
  return me(i, Cg, t);
}, wg = D(In)(({
  ownerState: e
}) => p({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), Rg = D("input", {
  shouldForwardProp: yt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Pg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    autoFocus: o,
    checked: r,
    checkedIcon: i,
    className: s,
    defaultChecked: a,
    disabled: l,
    disableFocusRipple: c = !1,
    edge: u = !1,
    icon: f,
    id: m,
    inputProps: g,
    inputRef: b,
    name: h,
    onBlur: y,
    onChange: S,
    onFocus: R,
    readOnly: C,
    required: v = !1,
    tabIndex: $,
    type: w,
    value: x
  } = t, E = U(t, Sg), [O, T] = tn({
    controlled: r,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), F = jt(), A = (H) => {
    R && R(H), F && F.onFocus && F.onFocus(H);
  }, N = (H) => {
    y && y(H), F && F.onBlur && F.onBlur(H);
  }, z = (H) => {
    if (H.nativeEvent.defaultPrevented)
      return;
    const ne = H.target.checked;
    T(ne), S && S(H, ne);
  };
  let B = l;
  F && typeof B > "u" && (B = F.disabled);
  const M = w === "checkbox" || w === "radio", L = p({}, t, {
    checked: O,
    disabled: B,
    disableFocusRipple: c,
    edge: u
  }), j = $g(L);
  return /* @__PURE__ */ P.jsxs(wg, p({
    component: "span",
    className: X(j.root, s),
    centerRipple: !0,
    focusRipple: !c,
    disabled: B,
    tabIndex: null,
    role: void 0,
    onFocus: A,
    onBlur: N,
    ownerState: L,
    ref: n
  }, E, {
    children: [/* @__PURE__ */ P.jsx(Rg, p({
      autoFocus: o,
      checked: r,
      defaultChecked: a,
      className: j.input,
      disabled: B,
      id: M ? m : void 0,
      name: h,
      onChange: z,
      readOnly: C,
      ref: b,
      required: v,
      ownerState: L,
      tabIndex: $,
      type: w
    }, w === "checkbox" && x === void 0 ? {} : {
      value: x
    }, g)), O ? i : f]
  }));
}), Eg = Pg, Tg = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), kg = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Og = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Ig(e) {
  return he("MuiCheckbox", e);
}
const Mg = ge("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Vr = Mg, Bg = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], Ag = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: o,
    size: r
  } = e, i = {
    root: ["root", n && "indeterminate", `color${Z(o)}`, `size${Z(r)}`]
  }, s = me(i, Ig, t);
  return p({}, t, s);
}, Ng = D(Eg, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${Z(n.size)}`], n.color !== "default" && t[`color${Z(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  color: (e.vars || e).palette.text.secondary
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${t.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : at(t.color === "default" ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.color !== "default" && {
  [`&.${Vr.checked}, &.${Vr.indeterminate}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Vr.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Lg = /* @__PURE__ */ P.jsx(kg, {}), Fg = /* @__PURE__ */ P.jsx(Tg, {}), zg = /* @__PURE__ */ P.jsx(Og, {}), _g = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const i = ve({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: s = Lg,
    color: a = "primary",
    icon: l = Fg,
    indeterminate: c = !1,
    indeterminateIcon: u = zg,
    inputProps: f,
    size: m = "medium",
    className: g
  } = i, b = U(i, Bg), h = c ? u : l, y = c ? u : s, S = p({}, i, {
    color: a,
    indeterminate: c,
    size: m
  }), R = Ag(S);
  return /* @__PURE__ */ P.jsx(Ng, p({
    type: "checkbox",
    inputProps: p({
      "data-indeterminate": c
    }, f),
    icon: /* @__PURE__ */ d.cloneElement(h, {
      fontSize: (o = h.props.fontSize) != null ? o : m
    }),
    checkedIcon: /* @__PURE__ */ d.cloneElement(y, {
      fontSize: (r = y.props.fontSize) != null ? r : m
    }),
    ownerState: S,
    ref: n,
    className: X(R.root, g)
  }, b, {
    classes: R
  }));
}), Uy = _g;
function jg(e) {
  return he("MuiModal", e);
}
ge("MuiModal", ["root", "hidden", "backdrop"]);
const Wg = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Dg = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return me({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, jg, o);
}, Hg = D("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Ug = D(rg, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Vg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a, l;
  const c = ve({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: u = Ug,
    BackdropProps: f,
    className: m,
    closeAfterTransition: g = !1,
    children: b,
    container: h,
    component: y,
    components: S = {},
    componentsProps: R = {},
    disableAutoFocus: C = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: $ = !1,
    disablePortal: w = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: E = !1,
    hideBackdrop: O = !1,
    keepMounted: T = !1,
    onBackdropClick: F,
    open: A,
    slotProps: N,
    slots: z
    // eslint-disable-next-line react/prop-types
  } = c, B = U(c, Wg), M = p({}, c, {
    closeAfterTransition: g,
    disableAutoFocus: C,
    disableEnforceFocus: v,
    disableEscapeKeyDown: $,
    disablePortal: w,
    disableRestoreFocus: x,
    disableScrollLock: E,
    hideBackdrop: O,
    keepMounted: T
  }), {
    getRootProps: L,
    getBackdropProps: j,
    getTransitionProps: H,
    portalRef: ne,
    isTopModal: ye,
    exited: we,
    hasTransition: $e
  } = lm(p({}, M, {
    rootRef: n
  })), q = p({}, M, {
    exited: we
  }), Q = Dg(q), le = {};
  if (b.props.tabIndex === void 0 && (le.tabIndex = "-1"), $e) {
    const {
      onEnter: ie,
      onExited: pe
    } = H();
    le.onEnter = ie, le.onExited = pe;
  }
  const ke = (o = (r = z == null ? void 0 : z.root) != null ? r : S.Root) != null ? o : Hg, ee = (i = (s = z == null ? void 0 : z.backdrop) != null ? s : S.Backdrop) != null ? i : u, re = (a = N == null ? void 0 : N.root) != null ? a : R.root, Ie = (l = N == null ? void 0 : N.backdrop) != null ? l : R.backdrop, ce = Et({
    elementType: ke,
    externalSlotProps: re,
    externalForwardedProps: B,
    getSlotProps: L,
    additionalProps: {
      ref: n,
      as: y
    },
    ownerState: q,
    className: X(m, re == null ? void 0 : re.className, Q == null ? void 0 : Q.root, !q.open && q.exited && (Q == null ? void 0 : Q.hidden))
  }), ue = Et({
    elementType: ee,
    externalSlotProps: Ie,
    additionalProps: f,
    getSlotProps: (ie) => j(p({}, ie, {
      onClick: (pe) => {
        F && F(pe), ie != null && ie.onClick && ie.onClick(pe);
      }
    })),
    className: X(Ie == null ? void 0 : Ie.className, f == null ? void 0 : f.className, Q == null ? void 0 : Q.backdrop),
    ownerState: q
  });
  return !T && !A && (!$e || we) ? null : /* @__PURE__ */ P.jsx(Ya, {
    ref: ne,
    container: h,
    disablePortal: w,
    children: /* @__PURE__ */ P.jsxs(ke, p({}, ce, {
      children: [!O && u ? /* @__PURE__ */ P.jsx(ee, p({}, ue)) : null, /* @__PURE__ */ P.jsx(Yf, {
        disableEnforceFocus: v,
        disableAutoFocus: C,
        disableRestoreFocus: x,
        isEnabled: ye,
        open: A,
        children: /* @__PURE__ */ d.cloneElement(b, le)
      })]
    }))
  });
}), Kg = Vg;
function Gg(e) {
  return he("MuiDivider", e);
}
ge("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const qg = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Xg = (e) => {
  const {
    absolute: t,
    children: n,
    classes: o,
    flexItem: r,
    light: i,
    orientation: s,
    textAlign: a,
    variant: l
  } = e;
  return me({
    root: ["root", t && "absolute", l, i && "light", s === "vertical" && "vertical", r && "flexItem", n && "withChildren", n && s === "vertical" && "withChildrenVertical", a === "right" && s !== "vertical" && "textAlignRight", a === "left" && s !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
  }, Gg, o);
}, Yg = D("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : at(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => p({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => p({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => p({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => p({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), Zg = D("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), cl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: r = !1,
    children: i,
    className: s,
    component: a = i ? "div" : "hr",
    flexItem: l = !1,
    light: c = !1,
    orientation: u = "horizontal",
    role: f = a !== "hr" ? "separator" : void 0,
    textAlign: m = "center",
    variant: g = "fullWidth"
  } = o, b = U(o, qg), h = p({}, o, {
    absolute: r,
    component: a,
    flexItem: l,
    light: c,
    orientation: u,
    role: f,
    textAlign: m,
    variant: g
  }), y = Xg(h);
  return /* @__PURE__ */ P.jsx(Yg, p({
    as: a,
    className: X(y.root, s),
    role: f,
    ref: n,
    ownerState: h
  }, b, {
    children: i ? /* @__PURE__ */ P.jsx(Zg, {
      className: y.wrapper,
      ownerState: h,
      children: i
    }) : null
  }));
});
cl.muiSkipListHighlight = !0;
const Vy = cl, Jg = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Qg = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, r = me({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Kh, t);
  return p({}, t, r);
}, eb = D(Br, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ir(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const o = e.palette.mode === "light", r = o ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = o ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = o ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = o ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return p({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${Yt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Yt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Yt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Yt.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Yt.disabled}, .${Yt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Yt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && p({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), tb = D(Ar, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Mr
})(({
  theme: e,
  ownerState: t
}) => p({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), ul = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s;
  const a = ve({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: c,
    fullWidth: u = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: m = !1,
    slotProps: g,
    slots: b = {},
    type: h = "text"
  } = a, y = U(a, Jg), S = p({}, a, {
    fullWidth: u,
    inputComponent: f,
    multiline: m,
    type: h
  }), R = Qg(a), C = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, v = g ?? c ? ct(C, g ?? c) : C, $ = (o = (r = b.root) != null ? r : l.Root) != null ? o : eb, w = (i = (s = b.input) != null ? s : l.Input) != null ? i : tb;
  return /* @__PURE__ */ P.jsx(ji, p({
    slots: {
      root: $,
      input: w
    },
    componentsProps: v,
    fullWidth: u,
    inputComponent: f,
    multiline: m,
    ref: n,
    type: h
  }, y, {
    classes: R
  }));
});
ul.muiName = "Input";
const dl = ul;
function nb(e) {
  return he("MuiFormControl", e);
}
ge("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ob = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], rb = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: o
  } = e, r = {
    root: ["root", n !== "none" && `margin${Z(n)}`, o && "fullWidth"]
  };
  return me(r, nb, t);
}, ib = D("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => p({}, t.root, t[`margin${Z(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => p({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), sb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiFormControl"
  }), {
    children: r,
    className: i,
    color: s = "primary",
    component: a = "div",
    disabled: l = !1,
    error: c = !1,
    focused: u,
    fullWidth: f = !1,
    hiddenLabel: m = !1,
    margin: g = "none",
    required: b = !1,
    size: h = "medium",
    variant: y = "outlined"
  } = o, S = U(o, ob), R = p({}, o, {
    color: s,
    component: a,
    disabled: l,
    error: c,
    fullWidth: f,
    hiddenLabel: m,
    margin: g,
    required: b,
    size: h,
    variant: y
  }), C = rb(R), [v, $] = d.useState(() => {
    let N = !1;
    return r && d.Children.forEach(r, (z) => {
      if (!jr(z, ["Input", "Select"]))
        return;
      const B = jr(z, ["Select"]) ? z.props.input : z;
      B && Nh(B.props) && (N = !0);
    }), N;
  }), [w, x] = d.useState(() => {
    let N = !1;
    return r && d.Children.forEach(r, (z) => {
      jr(z, ["Input", "Select"]) && (_o(z.props, !0) || _o(z.props.inputProps, !0)) && (N = !0);
    }), N;
  }), [E, O] = d.useState(!1);
  l && E && O(!1);
  const T = u !== void 0 && !l ? u : E;
  let F;
  const A = d.useMemo(() => ({
    adornedStart: v,
    setAdornedStart: $,
    color: s,
    disabled: l,
    error: c,
    filled: w,
    focused: T,
    fullWidth: f,
    hiddenLabel: m,
    size: h,
    onBlur: () => {
      O(!1);
    },
    onEmpty: () => {
      x(!1);
    },
    onFilled: () => {
      x(!0);
    },
    onFocus: () => {
      O(!0);
    },
    registerEffect: F,
    required: b,
    variant: y
  }), [v, s, l, c, w, T, f, m, F, b, h, y]);
  return /* @__PURE__ */ P.jsx(Or.Provider, {
    value: A,
    children: /* @__PURE__ */ P.jsx(ib, p({
      as: a,
      ownerState: R,
      className: X(C.root, i),
      ref: n
    }, S, {
      children: r
    }))
  });
}), ab = sb, lb = Md({
  createStyledComponent: D("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => ve({
    props: e,
    name: "MuiStack"
  })
}), cb = lb;
function ub(e) {
  return he("MuiFormControlLabel", e);
}
const db = ge("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), Gn = db, pb = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], fb = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: o,
    error: r,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${Z(o)}`, r && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", r && "error"]
  };
  return me(s, ub, t);
}, mb = D("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Gn.label}`]: t.label
    }, t.root, t[`labelPlacement${Z(n.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${Gn.disabled}`]: {
    cursor: "default"
  }
}, t.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, t.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, t.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${Gn.label}`]: {
    [`&.${Gn.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), hb = D("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Gn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), gb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const i = ve({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: s,
    componentsProps: a = {},
    control: l,
    disabled: c,
    disableTypography: u,
    label: f,
    labelPlacement: m = "end",
    required: g,
    slotProps: b = {}
  } = i, h = U(i, pb), y = jt(), S = (o = c ?? l.props.disabled) != null ? o : y == null ? void 0 : y.disabled, R = g ?? l.props.required, C = {
    disabled: S,
    required: R
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((O) => {
    typeof l.props[O] > "u" && typeof i[O] < "u" && (C[O] = i[O]);
  });
  const v = un({
    props: i,
    muiFormControl: y,
    states: ["error"]
  }), $ = p({}, i, {
    disabled: S,
    labelPlacement: m,
    required: R,
    error: v.error
  }), w = fb($), x = (r = b.typography) != null ? r : a.typography;
  let E = f;
  return E != null && E.type !== Fo && !u && (E = /* @__PURE__ */ P.jsx(Fo, p({
    component: "span"
  }, x, {
    className: X(w.label, x == null ? void 0 : x.className),
    children: E
  }))), /* @__PURE__ */ P.jsxs(mb, p({
    className: X(w.root, s),
    ownerState: $,
    ref: n
  }, h, {
    children: [/* @__PURE__ */ d.cloneElement(l, C), R ? /* @__PURE__ */ P.jsxs(cb, {
      display: "block",
      children: [E, /* @__PURE__ */ P.jsxs(hb, {
        ownerState: $,
        "aria-hidden": !0,
        className: w.asterisk,
        children: [" ", "*"]
      })]
    }) : E]
  }));
}), Ky = gb;
function bb(e) {
  return he("MuiFormHelperText", e);
}
const vb = ge("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ds = vb;
var Hs;
const yb = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], xb = (e) => {
  const {
    classes: t,
    contained: n,
    size: o,
    disabled: r,
    error: i,
    filled: s,
    focused: a,
    required: l
  } = e, c = {
    root: ["root", r && "disabled", i && "error", o && `size${Z(o)}`, n && "contained", a && "focused", s && "filled", l && "required"]
  };
  return me(c, bb, t);
}, Cb = D("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${Z(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ds.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ds.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Sb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: r,
    className: i,
    component: s = "p"
  } = o, a = U(o, yb), l = jt(), c = un({
    props: o,
    muiFormControl: l,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), u = p({}, o, {
    component: s,
    contained: c.variant === "filled" || c.variant === "outlined",
    variant: c.variant,
    size: c.size,
    disabled: c.disabled,
    error: c.error,
    filled: c.filled,
    focused: c.focused,
    required: c.required
  }), f = xb(u);
  return /* @__PURE__ */ P.jsx(Cb, p({
    as: s,
    ownerState: u,
    className: X(f.root, i),
    ref: n
  }, a, {
    children: r === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Hs || (Hs = /* @__PURE__ */ P.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : r
  }));
}), $b = Sb;
function wb(e) {
  return he("MuiFormLabel", e);
}
const Rb = ge("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), eo = Rb, Pb = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Eb = (e) => {
  const {
    classes: t,
    color: n,
    focused: o,
    disabled: r,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${Z(n)}`, r && "disabled", i && "error", s && "filled", o && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return me(l, wb, t);
}, Tb = D("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => p({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => p({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${eo.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${eo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${eo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), kb = D("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${eo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ob = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: r,
    className: i,
    component: s = "label"
  } = o, a = U(o, Pb), l = jt(), c = un({
    props: o,
    muiFormControl: l,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), u = p({}, o, {
    color: c.color || "primary",
    component: s,
    disabled: c.disabled,
    error: c.error,
    filled: c.filled,
    focused: c.focused,
    required: c.required
  }), f = Eb(u);
  return /* @__PURE__ */ P.jsxs(Tb, p({
    as: s,
    ownerState: u,
    className: X(f.root, i),
    ref: n
  }, a, {
    children: [r, c.required && /* @__PURE__ */ P.jsxs(kb, {
      ownerState: u,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
}), Ib = Ob, Mb = /* @__PURE__ */ d.createContext(), Us = Mb;
function Bb(e) {
  return he("MuiGrid", e);
}
const Ab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Nb = ["column-reverse", "column", "row-reverse", "row"], Lb = ["nowrap", "wrap-reverse", "wrap"], Wn = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Fb = ge("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...Ab.map((e) => `spacing-xs-${e}`),
  // direction values
  ...Nb.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Lb.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Wn.map((e) => `grid-xs-${e}`),
  ...Wn.map((e) => `grid-sm-${e}`),
  ...Wn.map((e) => `grid-md-${e}`),
  ...Wn.map((e) => `grid-lg-${e}`),
  ...Wn.map((e) => `grid-xl-${e}`)
]), ao = Fb, zb = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function $n(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function _b({
  theme: e,
  ownerState: t
}) {
  let n;
  return e.breakpoints.keys.reduce((o, r) => {
    let i = {};
    if (t[r] && (n = t[r]), !n)
      return o;
    if (n === !0)
      i = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const s = nn({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), a = typeof s == "object" ? s[r] : s;
      if (a == null)
        return o;
      const l = `${Math.round(n / a * 1e8) / 1e6}%`;
      let c = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const u = e.spacing(t.columnSpacing);
        if (u !== "0px") {
          const f = `calc(${l} + ${$n(u)})`;
          c = {
            flexBasis: f,
            maxWidth: f
          };
        }
      }
      i = p({
        flexBasis: l,
        flexGrow: 0,
        maxWidth: l
      }, c);
    }
    return e.breakpoints.values[r] === 0 ? Object.assign(o, i) : o[e.breakpoints.up(r)] = i, o;
  }, {});
}
function jb({
  theme: e,
  ownerState: t
}) {
  const n = nn({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return ft({
    theme: e
  }, n, (o) => {
    const r = {
      flexDirection: o
    };
    return o.indexOf("column") === 0 && (r[`& > .${ao.item}`] = {
      maxWidth: "none"
    }), r;
  });
}
function pl({
  breakpoints: e,
  values: t
}) {
  let n = "";
  Object.keys(t).forEach((r) => {
    n === "" && t[r] !== 0 && (n = r);
  });
  const o = Object.keys(e).sort((r, i) => e[r] - e[i]);
  return o.slice(0, o.indexOf(n));
}
function Wb({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: o
  } = t;
  let r = {};
  if (n && o !== 0) {
    const i = nn({
      values: o,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof i == "object" && (s = pl({
      breakpoints: e.breakpoints.values,
      values: i
    })), r = ft({
      theme: e
    }, i, (a, l) => {
      var c;
      const u = e.spacing(a);
      return u !== "0px" ? {
        marginTop: `-${$n(u)}`,
        [`& > .${ao.item}`]: {
          paddingTop: $n(u)
        }
      } : (c = s) != null && c.includes(l) ? {} : {
        marginTop: 0,
        [`& > .${ao.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return r;
}
function Db({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: o
  } = t;
  let r = {};
  if (n && o !== 0) {
    const i = nn({
      values: o,
      breakpoints: e.breakpoints.values
    });
    let s;
    typeof i == "object" && (s = pl({
      breakpoints: e.breakpoints.values,
      values: i
    })), r = ft({
      theme: e
    }, i, (a, l) => {
      var c;
      const u = e.spacing(a);
      return u !== "0px" ? {
        width: `calc(100% + ${$n(u)})`,
        marginLeft: `-${$n(u)}`,
        [`& > .${ao.item}`]: {
          paddingLeft: $n(u)
        }
      } : (c = s) != null && c.includes(l) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${ao.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return r;
}
function Hb(e, t, n = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [n[`spacing-xs-${String(e)}`]];
  const o = [];
  return t.forEach((r) => {
    const i = e[r];
    Number(i) > 0 && o.push(n[`spacing-${r}-${String(i)}`]);
  }), o;
}
const Ub = D("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      container: o,
      direction: r,
      item: i,
      spacing: s,
      wrap: a,
      zeroMinWidth: l,
      breakpoints: c
    } = n;
    let u = [];
    o && (u = Hb(s, c, t));
    const f = [];
    return c.forEach((m) => {
      const g = n[m];
      g && f.push(t[`grid-${m}-${String(g)}`]);
    }), [t.root, o && t.container, i && t.item, l && t.zeroMinWidth, ...u, r !== "row" && t[`direction-xs-${String(r)}`], a !== "wrap" && t[`wrap-xs-${String(a)}`], ...f];
  }
})(({
  ownerState: e
}) => p({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), jb, Wb, Db, _b);
function Vb(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return t.forEach((o) => {
    const r = e[o];
    if (Number(r) > 0) {
      const i = `spacing-${o}-${String(r)}`;
      n.push(i);
    }
  }), n;
}
const Kb = (e) => {
  const {
    classes: t,
    container: n,
    direction: o,
    item: r,
    spacing: i,
    wrap: s,
    zeroMinWidth: a,
    breakpoints: l
  } = e;
  let c = [];
  n && (c = Vb(i, l));
  const u = [];
  l.forEach((m) => {
    const g = e[m];
    g && u.push(`grid-${m}-${String(g)}`);
  });
  const f = {
    root: ["root", n && "container", r && "item", a && "zeroMinWidth", ...c, o !== "row" && `direction-xs-${String(o)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...u]
  };
  return me(f, Bb, t);
}, Gb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: r
  } = cn(), i = Rr(o), {
    className: s,
    columns: a,
    columnSpacing: l,
    component: c = "div",
    container: u = !1,
    direction: f = "row",
    item: m = !1,
    rowSpacing: g,
    spacing: b = 0,
    wrap: h = "wrap",
    zeroMinWidth: y = !1
  } = i, S = U(i, zb), R = g || b, C = l || b, v = d.useContext(Us), $ = u ? a || 12 : v, w = {}, x = p({}, S);
  r.keys.forEach((T) => {
    S[T] != null && (w[T] = S[T], delete x[T]);
  });
  const E = p({}, i, {
    columns: $,
    container: u,
    direction: f,
    item: m,
    rowSpacing: R,
    columnSpacing: C,
    wrap: h,
    zeroMinWidth: y,
    spacing: b
  }, w, {
    breakpoints: r.keys
  }), O = Kb(E);
  return /* @__PURE__ */ P.jsx(Us.Provider, {
    value: $,
    children: /* @__PURE__ */ P.jsx(Ub, p({
      ownerState: E,
      className: X(O.root, s),
      as: c,
      ref: n
    }, x))
  });
}), Gy = Gb, qb = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ui(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Xb = {
  entering: {
    opacity: 1,
    transform: ui(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Kr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), fl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: r = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: l,
    onEntered: c,
    onEntering: u,
    onExit: f,
    onExited: m,
    onExiting: g,
    style: b,
    timeout: h = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Va
  } = t, S = U(t, qb), R = yn(), C = d.useRef(), v = cn(), $ = d.useRef(null), w = Je($, i.ref, n), x = (B) => (M) => {
    if (B) {
      const L = $.current;
      M === void 0 ? B(L) : B(L, M);
    }
  }, E = x(u), O = x((B, M) => {
    Ka(B);
    const {
      duration: L,
      delay: j,
      easing: H
    } = No({
      style: b,
      timeout: h,
      easing: s
    }, {
      mode: "enter"
    });
    let ne;
    h === "auto" ? (ne = v.transitions.getAutoHeightDuration(B.clientHeight), C.current = ne) : ne = L, B.style.transition = [v.transitions.create("opacity", {
      duration: ne,
      delay: j
    }), v.transitions.create("transform", {
      duration: Kr ? ne : ne * 0.666,
      delay: j,
      easing: H
    })].join(","), l && l(B, M);
  }), T = x(c), F = x(g), A = x((B) => {
    const {
      duration: M,
      delay: L,
      easing: j
    } = No({
      style: b,
      timeout: h,
      easing: s
    }, {
      mode: "exit"
    });
    let H;
    h === "auto" ? (H = v.transitions.getAutoHeightDuration(B.clientHeight), C.current = H) : H = M, B.style.transition = [v.transitions.create("opacity", {
      duration: H,
      delay: L
    }), v.transitions.create("transform", {
      duration: Kr ? H : H * 0.666,
      delay: Kr ? L : L || H * 0.333,
      easing: j
    })].join(","), B.style.opacity = 0, B.style.transform = ui(0.75), f && f(B);
  }), N = x(m), z = (B) => {
    h === "auto" && R.start(C.current || 0, B), o && o($.current, B);
  };
  return /* @__PURE__ */ P.jsx(y, p({
    appear: r,
    in: a,
    nodeRef: $,
    onEnter: O,
    onEntered: T,
    onEntering: E,
    onExit: A,
    onExited: N,
    onExiting: F,
    addEndListener: z,
    timeout: h === "auto" ? null : h
  }, S, {
    children: (B, M) => /* @__PURE__ */ d.cloneElement(i, p({
      style: p({
        opacity: 0,
        transform: ui(0.75),
        visibility: B === "exited" && !a ? "hidden" : void 0
      }, Xb[B], b, i.props.style),
      ref: w
    }, M))
  }));
});
fl.muiSupportAuto = !0;
const di = fl, Yb = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Zb = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, r = me({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Dh, t);
  return p({}, t, r);
}, Jb = D(Br, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ir(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), p({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${jn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${jn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${o}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${jn.disabled}, .${jn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${o}`
      }
    },
    [`&.${jn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Qb = D(Ar, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Mr
})({}), ml = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s;
  const a = ve({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: c = {},
    componentsProps: u,
    fullWidth: f = !1,
    inputComponent: m = "input",
    multiline: g = !1,
    slotProps: b,
    slots: h = {},
    type: y = "text"
  } = a, S = U(a, Yb), R = Zb(a), v = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, $ = b ?? u ? ct(b ?? u, v) : v, w = (o = (r = h.root) != null ? r : c.Root) != null ? o : Jb, x = (i = (s = h.input) != null ? s : c.Input) != null ? i : Qb;
  return /* @__PURE__ */ P.jsx(ji, p({
    slots: {
      root: w,
      input: x
    },
    slotProps: $,
    fullWidth: f,
    inputComponent: m,
    multiline: g,
    ref: n,
    type: y
  }, S, {
    classes: R
  }));
});
ml.muiName = "Input";
const hl = ml;
function ev(e) {
  return he("MuiInputAdornment", e);
}
const tv = ge("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), Vs = tv;
var Ks;
const nv = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], ov = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${Z(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, rv = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: o,
    position: r,
    size: i,
    variant: s
  } = e, a = {
    root: ["root", n && "disablePointerEvents", r && `position${Z(r)}`, s, o && "hiddenLabel", i && `size${Z(i)}`]
  };
  return me(a, ev, t);
}, iv = D("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: ov
})(({
  theme: e,
  ownerState: t
}) => p({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Vs.positionStart}&:not(.${Vs.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), sv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: r,
    className: i,
    component: s = "div",
    disablePointerEvents: a = !1,
    disableTypography: l = !1,
    position: c,
    variant: u
  } = o, f = U(o, nv), m = jt() || {};
  let g = u;
  u && m.variant, m && !g && (g = m.variant);
  const b = p({}, o, {
    hiddenLabel: m.hiddenLabel,
    size: m.size,
    disablePointerEvents: a,
    position: c,
    variant: g
  }), h = rv(b);
  return /* @__PURE__ */ P.jsx(Or.Provider, {
    value: null,
    children: /* @__PURE__ */ P.jsx(iv, p({
      as: s,
      ownerState: b,
      className: X(h.root, i),
      ref: n
    }, f, {
      children: typeof r == "string" && !l ? /* @__PURE__ */ P.jsx(Fo, {
        color: "text.secondary",
        children: r
      }) : /* @__PURE__ */ P.jsxs(d.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Ks || (Ks = /* @__PURE__ */ P.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, r]
      })
    }))
  });
}), qy = sv;
function av(e) {
  return he("MuiInputLabel", e);
}
ge("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const lv = ["disableAnimation", "margin", "shrink", "variant", "className"], cv = (e) => {
  const {
    classes: t,
    formControl: n,
    size: o,
    shrink: r,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", r && "shrink", o && o !== "normal" && `size${Z(o)}`, s],
    asterisk: [a && "asterisk"]
  }, c = me(l, av, t);
  return p({}, t, c);
}, uv = D(Ib, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${eo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && p({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && p({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && p({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), dv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: r = !1,
    shrink: i,
    className: s
  } = o, a = U(o, lv), l = jt();
  let c = i;
  typeof c > "u" && l && (c = l.filled || l.focused || l.adornedStart);
  const u = un({
    props: o,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), f = p({}, o, {
    disableAnimation: r,
    formControl: l,
    shrink: c,
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }), m = cv(f);
  return /* @__PURE__ */ P.jsx(uv, p({
    "data-shrink": c,
    ownerState: f,
    ref: n,
    className: X(m.root, s)
  }, a, {
    classes: m
  }));
}), pv = dv, fv = /* @__PURE__ */ d.createContext({}), mv = fv;
function hv(e) {
  return he("MuiList", e);
}
ge("MuiList", ["root", "padding", "dense", "subheader"]);
const gv = ["children", "className", "component", "dense", "disablePadding", "subheader"], bv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: r
  } = e;
  return me({
    root: ["root", !n && "padding", o && "dense", r && "subheader"]
  }, hv, t);
}, vv = D("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => p({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), yv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiList"
  }), {
    children: r,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: c
  } = o, u = U(o, gv), f = d.useMemo(() => ({
    dense: a
  }), [a]), m = p({}, o, {
    component: s,
    dense: a,
    disablePadding: l
  }), g = bv(m);
  return /* @__PURE__ */ P.jsx(mv.Provider, {
    value: f,
    children: /* @__PURE__ */ P.jsxs(vv, p({
      as: s,
      className: X(g.root, i),
      ref: n,
      ownerState: m
    }, u, {
      children: [c, r]
    }))
  });
}), xv = yv, Cv = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Gr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Gs(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function gl(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Dn(e, t, n, o, r, i) {
  let s = !1, a = r(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const l = o ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !gl(a, i) || l)
      a = r(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Sv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: r = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: c = !1,
    onKeyDown: u,
    variant: f = "selectedMenu"
  } = t, m = U(t, Cv), g = d.useRef(null), b = d.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Bt(() => {
    r && g.current.focus();
  }, [r]), d.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (C, v) => {
      const $ = !g.current.style.width;
      if (C.clientHeight < g.current.clientHeight && $) {
        const w = `${ka(Ze(C))}px`;
        g.current.style[v.direction === "rtl" ? "paddingLeft" : "paddingRight"] = w, g.current.style.width = `calc(100% + ${w})`;
      }
      return g.current;
    }
  }), []);
  const h = (C) => {
    const v = g.current, $ = C.key, w = Ze(v).activeElement;
    if ($ === "ArrowDown")
      C.preventDefault(), Dn(v, w, c, l, Gr);
    else if ($ === "ArrowUp")
      C.preventDefault(), Dn(v, w, c, l, Gs);
    else if ($ === "Home")
      C.preventDefault(), Dn(v, null, c, l, Gr);
    else if ($ === "End")
      C.preventDefault(), Dn(v, null, c, l, Gs);
    else if ($.length === 1) {
      const x = b.current, E = $.toLowerCase(), O = performance.now();
      x.keys.length > 0 && (O - x.lastTime > 500 ? (x.keys = [], x.repeating = !0, x.previousKeyMatched = !0) : x.repeating && E !== x.keys[0] && (x.repeating = !1)), x.lastTime = O, x.keys.push(E);
      const T = w && !x.repeating && gl(w, x);
      x.previousKeyMatched && (T || Dn(v, w, !1, l, Gr, x)) ? C.preventDefault() : x.previousKeyMatched = !1;
    }
    u && u(C);
  }, y = Je(g, n);
  let S = -1;
  d.Children.forEach(s, (C, v) => {
    if (!/* @__PURE__ */ d.isValidElement(C)) {
      S === v && (S += 1, S >= s.length && (S = -1));
      return;
    }
    C.props.disabled || (f === "selectedMenu" && C.props.selected || S === -1) && (S = v), S === v && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (S += 1, S >= s.length && (S = -1));
  });
  const R = d.Children.map(s, (C, v) => {
    if (v === S) {
      const $ = {};
      return i && ($.autoFocus = !0), C.props.tabIndex === void 0 && f === "selectedMenu" && ($.tabIndex = 0), /* @__PURE__ */ d.cloneElement(C, $);
    }
    return C;
  });
  return /* @__PURE__ */ P.jsx(xv, p({
    role: "menu",
    ref: y,
    className: a,
    onKeyDown: h,
    tabIndex: r ? 0 : -1
  }, m, {
    children: R
  }));
}), $v = Sv;
function wv(e) {
  return he("MuiPopover", e);
}
ge("MuiPopover", ["root", "paper"]);
const Rv = ["onEntering"], Pv = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Ev = ["slotProps"];
function qs(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Xs(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ys(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function qr(e) {
  return typeof e == "function" ? e() : e;
}
const Tv = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"]
  }, wv, t);
}, kv = D(Kg, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), bl = D(Ga, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ov = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i;
  const s = ve({
    props: t,
    name: "MuiPopover"
  }), {
    action: a,
    anchorEl: l,
    anchorOrigin: c = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: u,
    anchorReference: f = "anchorEl",
    children: m,
    className: g,
    container: b,
    elevation: h = 8,
    marginThreshold: y = 16,
    open: S,
    PaperProps: R = {},
    slots: C,
    slotProps: v,
    transformOrigin: $ = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = di,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: E
    } = {},
    disableScrollLock: O = !1
  } = s, T = U(s.TransitionProps, Rv), F = U(s, Pv), A = (o = v == null ? void 0 : v.paper) != null ? o : R, N = d.useRef(), z = Je(N, A.ref), B = p({}, s, {
    anchorOrigin: c,
    anchorReference: f,
    elevation: h,
    marginThreshold: y,
    externalPaperSlotProps: A,
    transformOrigin: $,
    TransitionComponent: w,
    transitionDuration: x,
    TransitionProps: T
  }), M = Tv(B), L = d.useCallback(() => {
    if (f === "anchorPosition")
      return u;
    const ie = qr(l), te = (ie && ie.nodeType === 1 ? ie : Ze(N.current).body).getBoundingClientRect();
    return {
      top: te.top + qs(te, c.vertical),
      left: te.left + Xs(te, c.horizontal)
    };
  }, [l, c.horizontal, c.vertical, u, f]), j = d.useCallback((ie) => ({
    vertical: qs(ie, $.vertical),
    horizontal: Xs(ie, $.horizontal)
  }), [$.horizontal, $.vertical]), H = d.useCallback((ie) => {
    const pe = {
      width: ie.offsetWidth,
      height: ie.offsetHeight
    }, te = j(pe);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ys(te)
      };
    const K = L();
    let Me = K.top - te.vertical, J = K.left - te.horizontal;
    const Fe = Me + pe.height, Se = J + pe.width, be = Ft(qr(l)), Le = be.innerHeight - y, Pe = be.innerWidth - y;
    if (y !== null && Me < y) {
      const xe = Me - y;
      Me -= xe, te.vertical += xe;
    } else if (y !== null && Fe > Le) {
      const xe = Fe - Le;
      Me -= xe, te.vertical += xe;
    }
    if (y !== null && J < y) {
      const xe = J - y;
      J -= xe, te.horizontal += xe;
    } else if (Se > Pe) {
      const xe = Se - Pe;
      J -= xe, te.horizontal += xe;
    }
    return {
      top: `${Math.round(Me)}px`,
      left: `${Math.round(J)}px`,
      transformOrigin: Ys(te)
    };
  }, [l, f, L, j, y]), [ne, ye] = d.useState(S), we = d.useCallback(() => {
    const ie = N.current;
    if (!ie)
      return;
    const pe = H(ie);
    pe.top !== null && (ie.style.top = pe.top), pe.left !== null && (ie.style.left = pe.left), ie.style.transformOrigin = pe.transformOrigin, ye(!0);
  }, [H]);
  d.useEffect(() => (O && window.addEventListener("scroll", we), () => window.removeEventListener("scroll", we)), [l, O, we]);
  const $e = (ie, pe) => {
    E && E(ie, pe), we();
  }, q = () => {
    ye(!1);
  };
  d.useEffect(() => {
    S && we();
  }), d.useImperativeHandle(a, () => S ? {
    updatePosition: () => {
      we();
    }
  } : null, [S, we]), d.useEffect(() => {
    if (!S)
      return;
    const ie = dr(() => {
      we();
    }), pe = Ft(l);
    return pe.addEventListener("resize", ie), () => {
      ie.clear(), pe.removeEventListener("resize", ie);
    };
  }, [l, S, we]);
  let Q = x;
  x === "auto" && !w.muiSupportAuto && (Q = void 0);
  const le = b || (l ? Ze(qr(l)).body : void 0), ke = (r = C == null ? void 0 : C.root) != null ? r : kv, ee = (i = C == null ? void 0 : C.paper) != null ? i : bl, re = Et({
    elementType: ee,
    externalSlotProps: p({}, A, {
      style: ne ? A.style : p({}, A.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: h,
      ref: z
    },
    ownerState: B,
    className: X(M.paper, A == null ? void 0 : A.className)
  }), Ie = Et({
    elementType: ke,
    externalSlotProps: (v == null ? void 0 : v.root) || {},
    externalForwardedProps: F,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: le,
      open: S
    },
    ownerState: B,
    className: X(M.root, g)
  }), {
    slotProps: ce
  } = Ie, ue = U(Ie, Ev);
  return /* @__PURE__ */ P.jsx(ke, p({}, ue, !Lo(ke) && {
    slotProps: ce,
    disableScrollLock: O
  }, {
    children: /* @__PURE__ */ P.jsx(w, p({
      appear: !0,
      in: S,
      onEntering: $e,
      onExited: q,
      timeout: Q
    }, T, {
      children: /* @__PURE__ */ P.jsx(ee, p({}, re, {
        children: m
      }))
    }))
  }));
}), Iv = Ov;
function Mv(e) {
  return he("MuiMenu", e);
}
ge("MuiMenu", ["root", "paper", "list"]);
const Bv = ["onEntering"], Av = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Nv = {
  vertical: "top",
  horizontal: "right"
}, Lv = {
  vertical: "top",
  horizontal: "left"
}, Fv = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Mv, t);
}, zv = D(Iv, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _v = D(bl, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), jv = D($v, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Wv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const i = ve({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: a,
    className: l,
    disableAutoFocusItem: c = !1,
    MenuListProps: u = {},
    onClose: f,
    open: m,
    PaperProps: g = {},
    PopoverClasses: b,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: y
    } = {},
    variant: S = "selectedMenu",
    slots: R = {},
    slotProps: C = {}
  } = i, v = U(i.TransitionProps, Bv), $ = U(i, Av), w = cn(), x = w.direction === "rtl", E = p({}, i, {
    autoFocus: s,
    disableAutoFocusItem: c,
    MenuListProps: u,
    onEntering: y,
    PaperProps: g,
    transitionDuration: h,
    TransitionProps: v,
    variant: S
  }), O = Fv(E), T = s && !c && m, F = d.useRef(null), A = (H, ne) => {
    F.current && F.current.adjustStyleForScrollbar(H, w), y && y(H, ne);
  }, N = (H) => {
    H.key === "Tab" && (H.preventDefault(), f && f(H, "tabKeyDown"));
  };
  let z = -1;
  d.Children.map(a, (H, ne) => {
    /* @__PURE__ */ d.isValidElement(H) && (H.props.disabled || (S === "selectedMenu" && H.props.selected || z === -1) && (z = ne));
  });
  const B = (o = R.paper) != null ? o : _v, M = (r = C.paper) != null ? r : g, L = Et({
    elementType: R.root,
    externalSlotProps: C.root,
    ownerState: E,
    className: [O.root, l]
  }), j = Et({
    elementType: B,
    externalSlotProps: M,
    ownerState: E,
    className: O.paper
  });
  return /* @__PURE__ */ P.jsx(zv, p({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? Nv : Lv,
    slots: {
      paper: B,
      root: R.root
    },
    slotProps: {
      root: L,
      paper: j
    },
    open: m,
    ref: n,
    transitionDuration: h,
    TransitionProps: p({
      onEntering: A
    }, v),
    ownerState: E
  }, $, {
    classes: b,
    children: /* @__PURE__ */ P.jsx(jv, p({
      onKeyDown: N,
      actions: F,
      autoFocus: s && (z === -1 || c),
      autoFocusItem: T,
      variant: S
    }, u, {
      className: X(O.list, u.className),
      children: a
    }))
  }));
}), Dv = Wv;
function Hv(e) {
  return he("MuiNativeSelect", e);
}
const Uv = ge("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Wi = Uv, Vv = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Kv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: r,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, o && "disabled", r && "multiple", s && "error"],
    icon: ["icon", `icon${Z(n)}`, i && "iconOpen", o && "disabled"]
  };
  return me(a, Hv, t);
}, vl = ({
  ownerState: e,
  theme: t
}) => p({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": p({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Wi.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), Gv = D("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: yt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Wi.multiple}`]: t.multiple
    }];
  }
})(vl), yl = ({
  ownerState: e,
  theme: t
}) => p({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Wi.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), qv = D("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})(yl), Xv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    className: o,
    disabled: r,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard"
  } = t, c = U(t, Vv), u = p({}, t, {
    disabled: r,
    variant: l,
    error: i
  }), f = Kv(u);
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Gv, p({
      ownerState: u,
      className: X(f.select, o),
      disabled: r,
      ref: a || n
    }, c)), t.multiple ? null : /* @__PURE__ */ P.jsx(qv, {
      as: s,
      ownerState: u,
      className: f.icon
    })]
  });
}), Yv = Xv;
var Zs;
const Zv = ["children", "classes", "className", "label", "notched"], Jv = D("fieldset", {
  shouldForwardProp: yt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Qv = D("legend", {
  shouldForwardProp: yt
})(({
  ownerState: e,
  theme: t
}) => p({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && p({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function e0(e) {
  const {
    className: t,
    label: n,
    notched: o
  } = e, r = U(e, Zv), i = n != null && n !== "", s = p({}, e, {
    notched: o,
    withLabel: i
  });
  return /* @__PURE__ */ P.jsx(Jv, p({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, r, {
    children: /* @__PURE__ */ P.jsx(Qv, {
      ownerState: s,
      children: i ? /* @__PURE__ */ P.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Zs || (Zs = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const t0 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], n0 = (e) => {
  const {
    classes: t
  } = e, o = me({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Uh, t);
  return p({}, t, o);
}, o0 = D(Br, {
  shouldForwardProp: (e) => yt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ir
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return p({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Dt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Dt.focused} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Dt.error} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Dt.disabled} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && p({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), r0 = D(e0, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), i0 = D(Ar, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Mr
})(({
  theme: e,
  ownerState: t
}) => p({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), xl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a;
  const l = ve({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: c = {},
    fullWidth: u = !1,
    inputComponent: f = "input",
    label: m,
    multiline: g = !1,
    notched: b,
    slots: h = {},
    type: y = "text"
  } = l, S = U(l, t0), R = n0(l), C = jt(), v = un({
    props: l,
    muiFormControl: C,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), $ = p({}, l, {
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: C,
    fullWidth: u,
    hiddenLabel: v.hiddenLabel,
    multiline: g,
    size: v.size,
    type: y
  }), w = (o = (r = h.root) != null ? r : c.Root) != null ? o : o0, x = (i = (s = h.input) != null ? s : c.Input) != null ? i : i0;
  return /* @__PURE__ */ P.jsx(ji, p({
    slots: {
      root: w,
      input: x
    },
    renderSuffix: (E) => /* @__PURE__ */ P.jsx(r0, {
      ownerState: $,
      className: R.notchedOutline,
      label: m != null && m !== "" && v.required ? a || (a = /* @__PURE__ */ P.jsxs(d.Fragment, {
        children: [m, " ", "*"]
      })) : m,
      notched: typeof b < "u" ? b : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: u,
    inputComponent: f,
    multiline: g,
    ref: n,
    type: y
  }, S, {
    classes: p({}, R, {
      notchedOutline: null
    })
  }));
});
xl.muiName = "Input";
const Cl = xl;
function s0(e) {
  return he("MuiSelect", e);
}
const a0 = ge("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Hn = a0;
var Js;
const l0 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], c0 = D("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Hn.select}`]: t.select
      },
      {
        [`&.${Hn.select}`]: t[n.variant]
      },
      {
        [`&.${Hn.error}`]: t.error
      },
      {
        [`&.${Hn.multiple}`]: t.multiple
      }
    ];
  }
})(vl, {
  // Win specificity over the input base
  [`&.${Hn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), u0 = D("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})(yl), d0 = D("input", {
  shouldForwardProp: (e) => mp(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Qs(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function p0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const f0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: r,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, o && "disabled", r && "multiple", s && "error"],
    icon: ["icon", `icon${Z(n)}`, i && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return me(a, s0, t);
}, m0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: f,
    disabled: m,
    displayEmpty: g,
    error: b = !1,
    IconComponent: h,
    inputRef: y,
    labelId: S,
    MenuProps: R = {},
    multiple: C,
    name: v,
    onBlur: $,
    onChange: w,
    onClose: x,
    onFocus: E,
    onOpen: O,
    open: T,
    readOnly: F,
    renderValue: A,
    SelectDisplayProps: N = {},
    tabIndex: z,
    value: B,
    variant: M = "standard"
  } = t, L = U(t, l0), [j, H] = tn({
    controlled: B,
    default: f,
    name: "Select"
  }), [ne, ye] = tn({
    controlled: T,
    default: u,
    name: "Select"
  }), we = d.useRef(null), $e = d.useRef(null), [q, Q] = d.useState(null), {
    current: le
  } = d.useRef(T != null), [ke, ee] = d.useState(), re = Je(n, y), Ie = d.useCallback((Y) => {
    $e.current = Y, Y && Q(Y);
  }, []), ce = q == null ? void 0 : q.parentNode;
  d.useImperativeHandle(re, () => ({
    focus: () => {
      $e.current.focus();
    },
    node: we.current,
    value: j
  }), [j]), d.useEffect(() => {
    u && ne && q && !le && (ee(a ? null : ce.clientWidth), $e.current.focus());
  }, [q, a]), d.useEffect(() => {
    s && $e.current.focus();
  }, [s]), d.useEffect(() => {
    if (!S)
      return;
    const Y = Ze($e.current).getElementById(S);
    if (Y) {
      const de = () => {
        getSelection().isCollapsed && $e.current.focus();
      };
      return Y.addEventListener("click", de), () => {
        Y.removeEventListener("click", de);
      };
    }
  }, [S]);
  const ue = (Y, de) => {
    Y ? O && O(de) : x && x(de), le || (ee(a ? null : ce.clientWidth), ye(Y));
  }, ie = (Y) => {
    Y.button === 0 && (Y.preventDefault(), $e.current.focus(), ue(!0, Y));
  }, pe = (Y) => {
    ue(!1, Y);
  }, te = d.Children.toArray(l), K = (Y) => {
    const de = te.find((_) => _.props.value === Y.target.value);
    de !== void 0 && (H(de.props.value), w && w(Y, de));
  }, Me = (Y) => (de) => {
    let _;
    if (de.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        _ = Array.isArray(j) ? j.slice() : [];
        const G = j.indexOf(Y.props.value);
        G === -1 ? _.push(Y.props.value) : _.splice(G, 1);
      } else
        _ = Y.props.value;
      if (Y.props.onClick && Y.props.onClick(de), j !== _ && (H(_), w)) {
        const G = de.nativeEvent || de, fe = new G.constructor(G.type, G);
        Object.defineProperty(fe, "target", {
          writable: !0,
          value: {
            value: _,
            name: v
          }
        }), w(fe, Y);
      }
      C || ue(!1, de);
    }
  }, J = (Y) => {
    F || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(Y.key) !== -1 && (Y.preventDefault(), ue(!0, Y));
  }, Fe = q !== null && ne, Se = (Y) => {
    !Fe && $ && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: j,
        name: v
      }
    }), $(Y));
  };
  delete L["aria-invalid"];
  let be, Le;
  const Pe = [];
  let xe = !1;
  (_o({
    value: j
  }) || g) && (A ? be = A(j) : xe = !0);
  const Ue = te.map((Y) => {
    if (!/* @__PURE__ */ d.isValidElement(Y))
      return null;
    let de;
    if (C) {
      if (!Array.isArray(j))
        throw new Error(Lt(2));
      de = j.some((_) => Qs(_, Y.props.value)), de && xe && Pe.push(Y.props.children);
    } else
      de = Qs(j, Y.props.value), de && xe && (Le = Y.props.children);
    return /* @__PURE__ */ d.cloneElement(Y, {
      "aria-selected": de ? "true" : "false",
      onClick: Me(Y),
      onKeyUp: (_) => {
        _.key === " " && _.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(_);
      },
      role: "option",
      selected: de,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  xe && (C ? Pe.length === 0 ? be = null : be = Pe.reduce((Y, de, _) => (Y.push(de), _ < Pe.length - 1 && Y.push(", "), Y), []) : be = Le);
  let Ve = ke;
  !a && le && q && (Ve = ce.clientWidth);
  let qe;
  typeof z < "u" ? qe = z : qe = m ? null : 0;
  const se = N.id || (v ? `mui-component-select-${v}` : void 0), W = p({}, t, {
    variant: M,
    value: j,
    open: Fe,
    error: b
  }), Re = f0(W), Qe = p({}, R.PaperProps, (o = R.slotProps) == null ? void 0 : o.paper), et = pr();
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx(c0, p({
      ref: Ie,
      tabIndex: qe,
      role: "combobox",
      "aria-controls": et,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Fe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [S, se].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: J,
      onMouseDown: m || F ? null : ie,
      onBlur: Se,
      onFocus: E
    }, N, {
      ownerState: W,
      className: X(N.className, Re.select, c),
      id: se,
      children: p0(be) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Js || (Js = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : be
    })), /* @__PURE__ */ P.jsx(d0, p({
      "aria-invalid": b,
      value: Array.isArray(j) ? j.join(",") : j,
      name: v,
      ref: we,
      "aria-hidden": !0,
      onChange: K,
      tabIndex: -1,
      disabled: m,
      className: Re.nativeInput,
      autoFocus: s,
      ownerState: W
    }, L)), /* @__PURE__ */ P.jsx(u0, {
      as: h,
      className: Re.icon,
      ownerState: W
    }), /* @__PURE__ */ P.jsx(Dv, p({
      id: `menu-${v || ""}`,
      anchorEl: ce,
      open: Fe,
      onClose: pe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, R, {
      MenuListProps: p({
        "aria-labelledby": S,
        role: "listbox",
        "aria-multiselectable": C ? "true" : void 0,
        disableListWrap: !0,
        id: et
      }, R.MenuListProps),
      slotProps: p({}, R.slotProps, {
        paper: p({}, Qe, {
          style: p({
            minWidth: Ve
          }, Qe != null ? Qe.style : null)
        })
      }),
      children: Ue
    }))]
  });
}), h0 = m0, g0 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], b0 = ["root"], v0 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Di = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => yt(e) && e !== "variant",
  slot: "Root"
}, y0 = D(hl, Di)(""), x0 = D(Cl, Di)(""), C0 = D(dl, Di)(""), Sl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: r = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: c = !1,
    IconComponent: u = qh,
    id: f,
    input: m,
    inputProps: g,
    label: b,
    labelId: h,
    MenuProps: y,
    multiple: S = !1,
    native: R = !1,
    onClose: C,
    onOpen: v,
    open: $,
    renderValue: w,
    SelectDisplayProps: x,
    variant: E = "outlined"
  } = o, O = U(o, g0), T = R ? Yv : h0, F = jt(), A = un({
    props: o,
    muiFormControl: F,
    states: ["variant", "error"]
  }), N = A.variant || E, z = p({}, o, {
    variant: N,
    classes: s
  }), B = v0(z), M = U(B, b0), L = m || {
    standard: /* @__PURE__ */ P.jsx(y0, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ P.jsx(x0, {
      label: b,
      ownerState: z
    }),
    filled: /* @__PURE__ */ P.jsx(C0, {
      ownerState: z
    })
  }[N], j = Je(n, L.ref);
  return /* @__PURE__ */ P.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(L, p({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: T,
      inputProps: p({
        children: i,
        error: A.error,
        IconComponent: u,
        variant: N,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: S
      }, R ? {
        id: f
      } : {
        autoWidth: r,
        defaultOpen: l,
        displayEmpty: c,
        labelId: h,
        MenuProps: y,
        onClose: C,
        onOpen: v,
        open: $,
        renderValue: w,
        SelectDisplayProps: p({
          id: f
        }, x)
      }, g, {
        classes: g ? ct(M, g.classes) : M
      }, m ? m.props.inputProps : {})
    }, (S && R || c) && N === "outlined" ? {
      notched: !0
    } : {}, {
      ref: j,
      className: X(L.props.className, a, B.root)
    }, !m && {
      variant: N
    }, O))
  });
});
Sl.muiName = "Select";
const S0 = Sl;
function $0(e) {
  return he("MuiTooltip", e);
}
const w0 = ge("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ut = w0, R0 = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function P0(e) {
  return Math.round(e * 1e5) / 1e5;
}
const E0 = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: o,
    touch: r,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", o && "popperArrow"],
    tooltip: ["tooltip", o && "tooltipArrow", r && "touch", `tooltipPlacement${Z(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return me(s, $0, t);
}, T0 = D(al, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(({
  theme: e,
  ownerState: t,
  open: n
}) => p({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Ut.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Ut.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Ut.arrow}`]: p({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Ut.arrow}`]: p({}, t.isRtl ? {
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
})), k0 = D("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${Z(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : at(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
  position: "relative",
  margin: 0
}, t.touch && {
  padding: "8px 16px",
  fontSize: e.typography.pxToRem(14),
  lineHeight: `${P0(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Ut.popper}[data-popper-placement*="left"] &`]: p({
    transformOrigin: "right center"
  }, t.isRtl ? p({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : p({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Ut.popper}[data-popper-placement*="right"] &`]: p({
    transformOrigin: "left center"
  }, t.isRtl ? p({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : p({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Ut.popper}[data-popper-placement*="top"] &`]: p({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Ut.popper}[data-popper-placement*="bottom"] &`]: p({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), O0 = D("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : at(e.palette.grey[700], 0.9),
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
let $o = !1;
const ea = new uo();
let Un = {
  x: 0,
  y: 0
};
function wo(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const I0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a, l, c, u, f, m, g, b, h, y, S, R, C, v, $;
  const w = ve({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: x = !1,
    children: E,
    components: O = {},
    componentsProps: T = {},
    describeChild: F = !1,
    disableFocusListener: A = !1,
    disableHoverListener: N = !1,
    disableInteractive: z = !1,
    disableTouchListener: B = !1,
    enterDelay: M = 100,
    enterNextDelay: L = 0,
    enterTouchDelay: j = 700,
    followCursor: H = !1,
    id: ne,
    leaveDelay: ye = 0,
    leaveTouchDelay: we = 1500,
    onClose: $e,
    onOpen: q,
    open: Q,
    placement: le = "bottom",
    PopperComponent: ke,
    PopperProps: ee = {},
    slotProps: re = {},
    slots: Ie = {},
    title: ce,
    TransitionComponent: ue = di,
    TransitionProps: ie
  } = w, pe = U(w, R0), te = /* @__PURE__ */ d.isValidElement(E) ? E : /* @__PURE__ */ P.jsx("span", {
    children: E
  }), K = cn(), Me = K.direction === "rtl", [J, Fe] = d.useState(), [Se, be] = d.useState(null), Le = d.useRef(!1), Pe = z || H, xe = yn(), Ue = yn(), Ve = yn(), qe = yn(), [se, W] = tn({
    controlled: Q,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Re = se;
  const Qe = pr(ne), et = d.useRef(), Y = st(() => {
    et.current !== void 0 && (document.body.style.WebkitUserSelect = et.current, et.current = void 0), qe.clear();
  });
  d.useEffect(() => Y, [Y]);
  const de = (ae) => {
    ea.clear(), $o = !0, W(!0), q && !Re && q(ae);
  }, _ = st(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      ea.start(800 + ye, () => {
        $o = !1;
      }), W(!1), $e && Re && $e(ae), xe.start(K.transitions.duration.shortest, () => {
        Le.current = !1;
      });
    }
  ), G = (ae) => {
    Le.current && ae.type !== "touchstart" || (J && J.removeAttribute("title"), Ue.clear(), Ve.clear(), M || $o && L ? Ue.start($o ? L : M, () => {
      de(ae);
    }) : de(ae));
  }, fe = (ae) => {
    Ue.clear(), Ve.start(ye, () => {
      _(ae);
    });
  }, {
    isFocusVisibleRef: Ce,
    onBlur: Oe,
    onFocus: je,
    ref: Ye
  } = Ta(), [, mt] = d.useState(!1), nt = (ae) => {
    Oe(ae), Ce.current === !1 && (mt(!1), fe(ae));
  }, Wt = (ae) => {
    J || Fe(ae.currentTarget), je(ae), Ce.current === !0 && (mt(!0), G(ae));
  }, Mn = (ae) => {
    Le.current = !0;
    const rt = te.props;
    rt.onTouchStart && rt.onTouchStart(ae);
  }, Bn = G, ho = fe, Nr = (ae) => {
    Mn(ae), Ve.clear(), xe.clear(), Y(), et.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", qe.start(j, () => {
      document.body.style.WebkitUserSelect = et.current, G(ae);
    });
  }, go = (ae) => {
    te.props.onTouchEnd && te.props.onTouchEnd(ae), Y(), Ve.start(we, () => {
      _(ae);
    });
  };
  d.useEffect(() => {
    if (!Re)
      return;
    function ae(rt) {
      (rt.key === "Escape" || rt.key === "Esc") && _(rt);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [_, Re]);
  const Lr = Je(te.ref, Ye, Fe, n);
  !ce && ce !== 0 && (Re = !1);
  const An = d.useRef(), Fr = (ae) => {
    const rt = te.props;
    rt.onMouseMove && rt.onMouseMove(ae), Un = {
      x: ae.clientX,
      y: ae.clientY
    }, An.current && An.current.update();
  }, Kt = {}, Nn = typeof ce == "string";
  F ? (Kt.title = !Re && Nn && !N ? ce : null, Kt["aria-describedby"] = Re ? Qe : null) : (Kt["aria-label"] = Nn ? ce : null, Kt["aria-labelledby"] = Re && !Nn ? Qe : null);
  const lt = p({}, Kt, pe, te.props, {
    className: X(pe.className, te.props.className),
    onTouchStart: Mn,
    ref: Lr
  }, H ? {
    onMouseMove: Fr
  } : {}), Gt = {};
  B || (lt.onTouchStart = Nr, lt.onTouchEnd = go), N || (lt.onMouseOver = wo(Bn, lt.onMouseOver), lt.onMouseLeave = wo(ho, lt.onMouseLeave), Pe || (Gt.onMouseOver = Bn, Gt.onMouseLeave = ho)), A || (lt.onFocus = wo(Wt, lt.onFocus), lt.onBlur = wo(nt, lt.onBlur), Pe || (Gt.onFocus = Wt, Gt.onBlur = nt));
  const zr = d.useMemo(() => {
    var ae;
    let rt = [{
      name: "arrow",
      enabled: !!Se,
      options: {
        element: Se,
        padding: 4
      }
    }];
    return (ae = ee.popperOptions) != null && ae.modifiers && (rt = rt.concat(ee.popperOptions.modifiers)), p({}, ee.popperOptions, {
      modifiers: rt
    });
  }, [Se, ee]), qt = p({}, w, {
    isRtl: Me,
    arrow: x,
    disableInteractive: Pe,
    placement: le,
    PopperComponentProp: ke,
    touch: Le.current
  }), Xt = E0(qt), Ln = (o = (r = Ie.popper) != null ? r : O.Popper) != null ? o : T0, I = (i = (s = (a = Ie.transition) != null ? a : O.Transition) != null ? s : ue) != null ? i : di, k = (l = (c = Ie.tooltip) != null ? c : O.Tooltip) != null ? l : k0, V = (u = (f = Ie.arrow) != null ? f : O.Arrow) != null ? u : O0, oe = Kn(Ln, p({}, ee, (m = re.popper) != null ? m : T.popper, {
    className: X(Xt.popper, ee == null ? void 0 : ee.className, (g = (b = re.popper) != null ? b : T.popper) == null ? void 0 : g.className)
  }), qt), Be = Kn(I, p({}, ie, (h = re.transition) != null ? h : T.transition), qt), We = Kn(k, p({}, (y = re.tooltip) != null ? y : T.tooltip, {
    className: X(Xt.tooltip, (S = (R = re.tooltip) != null ? R : T.tooltip) == null ? void 0 : S.className)
  }), qt), Ke = Kn(V, p({}, (C = re.arrow) != null ? C : T.arrow, {
    className: X(Xt.arrow, (v = ($ = re.arrow) != null ? $ : T.arrow) == null ? void 0 : v.className)
  }), qt);
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ d.cloneElement(te, lt), /* @__PURE__ */ P.jsx(Ln, p({
      as: ke ?? al,
      placement: le,
      anchorEl: H ? {
        getBoundingClientRect: () => ({
          top: Un.y,
          left: Un.x,
          right: Un.x,
          bottom: Un.y,
          width: 0,
          height: 0
        })
      } : J,
      popperRef: An,
      open: J ? Re : !1,
      id: Qe,
      transition: !0
    }, Gt, oe, {
      popperOptions: zr,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ P.jsx(I, p({
        timeout: K.transitions.duration.shorter
      }, ae, Be, {
        children: /* @__PURE__ */ P.jsxs(k, p({}, We, {
          children: [ce, x ? /* @__PURE__ */ P.jsx(V, p({}, Ke, {
            ref: be
          })) : null]
        }))
      }))
    }))]
  });
}), Xy = I0;
function M0(e) {
  return he("MuiTab", e);
}
const B0 = ge("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), Zt = B0, A0 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], N0 = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: o,
    wrapped: r,
    icon: i,
    label: s,
    selected: a,
    disabled: l
  } = e, c = {
    root: ["root", i && s && "labelIcon", `textColor${Z(n)}`, o && "fullWidth", r && "wrapped", a && "selected", l && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return me(c, M0, t);
}, L0 = D(In, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${Z(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped];
  }
})(({
  theme: e,
  ownerState: t
}) => p({}, e.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, t.label && {
  flexDirection: t.iconPosition === "top" || t.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, t.icon && t.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${Zt.iconWrapper}`]: p({}, t.iconPosition === "top" && {
    marginBottom: 6
  }, t.iconPosition === "bottom" && {
    marginTop: 6
  }, t.iconPosition === "start" && {
    marginRight: e.spacing(1)
  }, t.iconPosition === "end" && {
    marginLeft: e.spacing(1)
  })
}, t.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${Zt.selected}`]: {
    opacity: 1
  },
  [`&.${Zt.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.textColor === "primary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${Zt.selected}`]: {
    color: (e.vars || e).palette.primary.main
  },
  [`&.${Zt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, t.textColor === "secondary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${Zt.selected}`]: {
    color: (e.vars || e).palette.secondary.main
  },
  [`&.${Zt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, t.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, t.wrapped && {
  fontSize: e.typography.pxToRem(12)
})), F0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiTab"
  }), {
    className: r,
    disabled: i = !1,
    disableFocusRipple: s = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: a,
    icon: l,
    iconPosition: c = "top",
    // eslint-disable-next-line react/prop-types
    indicator: u,
    label: f,
    onChange: m,
    onClick: g,
    onFocus: b,
    // eslint-disable-next-line react/prop-types
    selected: h,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: y,
    // eslint-disable-next-line react/prop-types
    textColor: S = "inherit",
    value: R,
    wrapped: C = !1
  } = o, v = U(o, A0), $ = p({}, o, {
    disabled: i,
    disableFocusRipple: s,
    selected: h,
    icon: !!l,
    iconPosition: c,
    label: !!f,
    fullWidth: a,
    textColor: S,
    wrapped: C
  }), w = N0($), x = l && f && /* @__PURE__ */ d.isValidElement(l) ? /* @__PURE__ */ d.cloneElement(l, {
    className: X(w.iconWrapper, l.props.className)
  }) : l, E = (T) => {
    !h && m && m(T, R), g && g(T);
  }, O = (T) => {
    y && !h && m && m(T, R), b && b(T);
  };
  return /* @__PURE__ */ P.jsxs(L0, p({
    focusRipple: !s,
    className: X(w.root, r),
    ref: n,
    role: "tab",
    "aria-selected": h,
    disabled: i,
    onClick: E,
    onFocus: O,
    ownerState: $,
    tabIndex: h ? 0 : -1
  }, v, {
    children: [c === "top" || c === "start" ? /* @__PURE__ */ P.jsxs(d.Fragment, {
      children: [x, f]
    }) : /* @__PURE__ */ P.jsxs(d.Fragment, {
      children: [f, x]
    }), u]
  }));
}), Yy = F0, z0 = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), _0 = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function j0(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function W0(e, t, n, o = {}, r = () => {
}) {
  const {
    ease: i = j0,
    duration: s = 300
    // standard
  } = o;
  let a = null;
  const l = t[e];
  let c = !1;
  const u = () => {
    c = !0;
  }, f = (m) => {
    if (c) {
      r(new Error("Animation cancelled"));
      return;
    }
    a === null && (a = m);
    const g = Math.min(1, (m - a) / s);
    if (t[e] = i(g) * (n - l) + l, g >= 1) {
      requestAnimationFrame(() => {
        r(null);
      });
      return;
    }
    requestAnimationFrame(f);
  };
  return l === n ? (r(new Error("Element already at target position")), u) : (requestAnimationFrame(f), u);
}
const D0 = ["onChange"], H0 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function U0(e) {
  const {
    onChange: t
  } = e, n = U(e, D0), o = d.useRef(), r = d.useRef(null), i = () => {
    o.current = r.current.offsetHeight - r.current.clientHeight;
  };
  return Bt(() => {
    const s = dr(() => {
      const l = o.current;
      i(), l !== o.current && t(o.current);
    }), a = Ft(r.current);
    return a.addEventListener("resize", s), () => {
      s.clear(), a.removeEventListener("resize", s);
    };
  }, [t]), d.useEffect(() => {
    i(), t(o.current);
  }, [t]), /* @__PURE__ */ P.jsx("div", p({
    style: H0,
    ref: r
  }, n));
}
function V0(e) {
  return he("MuiTabScrollButton", e);
}
const K0 = ge("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), G0 = K0, q0 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], X0 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: o
  } = e;
  return me({
    root: ["root", n, o && "disabled"]
  }, V0, t);
}, Y0 = D(In, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.orientation && t[n.orientation]];
  }
})(({
  ownerState: e
}) => p({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${G0.disabled}`]: {
    opacity: 0
  }
}, e.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${e.isRtl ? -90 : 90}deg)`
  }
})), Z0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const i = ve({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: s,
    slots: a = {},
    slotProps: l = {},
    direction: c
  } = i, u = U(i, q0), m = cn().direction === "rtl", g = p({
    isRtl: m
  }, i), b = X0(g), h = (o = a.StartScrollButtonIcon) != null ? o : z0, y = (r = a.EndScrollButtonIcon) != null ? r : _0, S = Et({
    elementType: h,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  }), R = Et({
    elementType: y,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  });
  return /* @__PURE__ */ P.jsx(Y0, p({
    component: "div",
    className: X(b.root, s),
    ref: n,
    role: null,
    ownerState: g,
    tabIndex: null
  }, u, {
    children: c === "left" ? /* @__PURE__ */ P.jsx(h, p({}, S)) : /* @__PURE__ */ P.jsx(y, p({}, R))
  }));
}), J0 = Z0;
function Q0(e) {
  return he("MuiTabs", e);
}
const ey = ge("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Xr = ey, ty = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], ta = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, na = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Ro = (e, t, n) => {
  let o = !1, r = n(e, t);
  for (; r; ) {
    if (r === e.firstChild) {
      if (o)
        return;
      o = !0;
    }
    const i = r.disabled || r.getAttribute("aria-disabled") === "true";
    if (!r.hasAttribute("tabindex") || i)
      r = n(e, r);
    else {
      r.focus();
      return;
    }
  }
}, ny = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: o,
    scrollableX: r,
    scrollableY: i,
    centered: s,
    scrollButtonsHideMobile: a,
    classes: l
  } = e;
  return me({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", o && "hideScrollbar", r && "scrollableX", i && "scrollableY"],
    flexContainer: ["flexContainer", t && "flexContainerVertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", a && "scrollButtonsHideMobile"],
    scrollableX: [r && "scrollableX"],
    hideScrollbar: [o && "hideScrollbar"]
  }, Q0, l);
}, oy = D("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Xr.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Xr.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(({
  ownerState: e,
  theme: t
}) => p({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.scrollButtonsHideMobile && {
  [`& .${Xr.scrollButtons}`]: {
    [t.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), ry = D("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY];
  }
})(({
  ownerState: e
}) => p({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, e.fixed && {
  overflowX: "hidden",
  width: "100%"
}, e.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, e.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, e.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
})), iy = D("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered];
  }
})(({
  ownerState: e
}) => p({
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.centered && {
  justifyContent: "center"
})), sy = D("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, t) => t.indicator
})(({
  ownerState: e,
  theme: t
}) => p({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: t.transitions.create()
}, e.indicatorColor === "primary" && {
  backgroundColor: (t.vars || t).palette.primary.main
}, e.indicatorColor === "secondary" && {
  backgroundColor: (t.vars || t).palette.secondary.main
}, e.vertical && {
  height: "100%",
  width: 2,
  right: 0
})), ay = D(U0)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), oa = {}, ly = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiTabs"
  }), r = cn(), i = r.direction === "rtl", {
    "aria-label": s,
    "aria-labelledby": a,
    action: l,
    centered: c = !1,
    children: u,
    className: f,
    component: m = "div",
    allowScrollButtonsMobile: g = !1,
    indicatorColor: b = "primary",
    onChange: h,
    orientation: y = "horizontal",
    ScrollButtonComponent: S = J0,
    scrollButtons: R = "auto",
    selectionFollowsFocus: C,
    slots: v = {},
    slotProps: $ = {},
    TabIndicatorProps: w = {},
    TabScrollButtonProps: x = {},
    textColor: E = "primary",
    value: O,
    variant: T = "standard",
    visibleScrollbar: F = !1
  } = o, A = U(o, ty), N = T === "scrollable", z = y === "vertical", B = z ? "scrollTop" : "scrollLeft", M = z ? "top" : "left", L = z ? "bottom" : "right", j = z ? "clientHeight" : "clientWidth", H = z ? "height" : "width", ne = p({}, o, {
    component: m,
    allowScrollButtonsMobile: g,
    indicatorColor: b,
    orientation: y,
    vertical: z,
    scrollButtons: R,
    textColor: E,
    variant: T,
    visibleScrollbar: F,
    fixed: !N,
    hideScrollbar: N && !F,
    scrollableX: N && !z,
    scrollableY: N && z,
    centered: c && !N,
    scrollButtonsHideMobile: !g
  }), ye = ny(ne), we = Et({
    elementType: v.StartScrollButtonIcon,
    externalSlotProps: $.startScrollButtonIcon,
    ownerState: ne
  }), $e = Et({
    elementType: v.EndScrollButtonIcon,
    externalSlotProps: $.endScrollButtonIcon,
    ownerState: ne
  }), [q, Q] = d.useState(!1), [le, ke] = d.useState(oa), [ee, re] = d.useState(!1), [Ie, ce] = d.useState(!1), [ue, ie] = d.useState(!1), [pe, te] = d.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), K = /* @__PURE__ */ new Map(), Me = d.useRef(null), J = d.useRef(null), Fe = () => {
    const _ = Me.current;
    let G;
    if (_) {
      const Ce = _.getBoundingClientRect();
      G = {
        clientWidth: _.clientWidth,
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
        scrollLeftNormalized: Xc(_, r.direction),
        scrollWidth: _.scrollWidth,
        top: Ce.top,
        bottom: Ce.bottom,
        left: Ce.left,
        right: Ce.right
      };
    }
    let fe;
    if (_ && O !== !1) {
      const Ce = J.current.children;
      if (Ce.length > 0) {
        const Oe = Ce[K.get(O)];
        fe = Oe ? Oe.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: G,
      tabMeta: fe
    };
  }, Se = st(() => {
    const {
      tabsMeta: _,
      tabMeta: G
    } = Fe();
    let fe = 0, Ce;
    if (z)
      Ce = "top", G && _ && (fe = G.top - _.top + _.scrollTop);
    else if (Ce = i ? "right" : "left", G && _) {
      const je = i ? _.scrollLeftNormalized + _.clientWidth - _.scrollWidth : _.scrollLeft;
      fe = (i ? -1 : 1) * (G[Ce] - _[Ce] + je);
    }
    const Oe = {
      [Ce]: fe,
      // May be wrong until the font is loaded.
      [H]: G ? G[H] : 0
    };
    if (isNaN(le[Ce]) || isNaN(le[H]))
      ke(Oe);
    else {
      const je = Math.abs(le[Ce] - Oe[Ce]), Ye = Math.abs(le[H] - Oe[H]);
      (je >= 1 || Ye >= 1) && ke(Oe);
    }
  }), be = (_, {
    animation: G = !0
  } = {}) => {
    G ? W0(B, Me.current, _, {
      duration: r.transitions.duration.standard
    }) : Me.current[B] = _;
  }, Le = (_) => {
    let G = Me.current[B];
    z ? G += _ : (G += _ * (i ? -1 : 1), G *= i && Oa() === "reverse" ? -1 : 1), be(G);
  }, Pe = () => {
    const _ = Me.current[j];
    let G = 0;
    const fe = Array.from(J.current.children);
    for (let Ce = 0; Ce < fe.length; Ce += 1) {
      const Oe = fe[Ce];
      if (G + Oe[j] > _) {
        Ce === 0 && (G = _);
        break;
      }
      G += Oe[j];
    }
    return G;
  }, xe = () => {
    Le(-1 * Pe());
  }, Ue = () => {
    Le(Pe());
  }, Ve = d.useCallback((_) => {
    te({
      overflow: null,
      scrollbarWidth: _
    });
  }, []), qe = () => {
    const _ = {};
    _.scrollbarSizeListener = N ? /* @__PURE__ */ P.jsx(ay, {
      onChange: Ve,
      className: X(ye.scrollableX, ye.hideScrollbar)
    }) : null;
    const fe = N && (R === "auto" && (ee || Ie) || R === !0);
    return _.scrollButtonStart = fe ? /* @__PURE__ */ P.jsx(S, p({
      slots: {
        StartScrollButtonIcon: v.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: we
      },
      orientation: y,
      direction: i ? "right" : "left",
      onClick: xe,
      disabled: !ee
    }, x, {
      className: X(ye.scrollButtons, x.className)
    })) : null, _.scrollButtonEnd = fe ? /* @__PURE__ */ P.jsx(S, p({
      slots: {
        EndScrollButtonIcon: v.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: $e
      },
      orientation: y,
      direction: i ? "left" : "right",
      onClick: Ue,
      disabled: !Ie
    }, x, {
      className: X(ye.scrollButtons, x.className)
    })) : null, _;
  }, se = st((_) => {
    const {
      tabsMeta: G,
      tabMeta: fe
    } = Fe();
    if (!(!fe || !G)) {
      if (fe[M] < G[M]) {
        const Ce = G[B] + (fe[M] - G[M]);
        be(Ce, {
          animation: _
        });
      } else if (fe[L] > G[L]) {
        const Ce = G[B] + (fe[L] - G[L]);
        be(Ce, {
          animation: _
        });
      }
    }
  }), W = st(() => {
    N && R !== !1 && ie(!ue);
  });
  d.useEffect(() => {
    const _ = dr(() => {
      Me.current && Se();
    });
    let G;
    const fe = (je) => {
      je.forEach((Ye) => {
        Ye.removedNodes.forEach((mt) => {
          var nt;
          (nt = G) == null || nt.unobserve(mt);
        }), Ye.addedNodes.forEach((mt) => {
          var nt;
          (nt = G) == null || nt.observe(mt);
        });
      }), _(), W();
    }, Ce = Ft(Me.current);
    Ce.addEventListener("resize", _);
    let Oe;
    return typeof ResizeObserver < "u" && (G = new ResizeObserver(_), Array.from(J.current.children).forEach((je) => {
      G.observe(je);
    })), typeof MutationObserver < "u" && (Oe = new MutationObserver(fe), Oe.observe(J.current, {
      childList: !0
    })), () => {
      var je, Ye;
      _.clear(), Ce.removeEventListener("resize", _), (je = Oe) == null || je.disconnect(), (Ye = G) == null || Ye.disconnect();
    };
  }, [Se, W]), d.useEffect(() => {
    const _ = Array.from(J.current.children), G = _.length;
    if (typeof IntersectionObserver < "u" && G > 0 && N && R !== !1) {
      const fe = _[0], Ce = _[G - 1], Oe = {
        root: Me.current,
        threshold: 0.99
      }, je = (Wt) => {
        re(!Wt[0].isIntersecting);
      }, Ye = new IntersectionObserver(je, Oe);
      Ye.observe(fe);
      const mt = (Wt) => {
        ce(!Wt[0].isIntersecting);
      }, nt = new IntersectionObserver(mt, Oe);
      return nt.observe(Ce), () => {
        Ye.disconnect(), nt.disconnect();
      };
    }
  }, [N, R, ue, u == null ? void 0 : u.length]), d.useEffect(() => {
    Q(!0);
  }, []), d.useEffect(() => {
    Se();
  }), d.useEffect(() => {
    se(oa !== le);
  }, [se, le]), d.useImperativeHandle(l, () => ({
    updateIndicator: Se,
    updateScrollButtons: W
  }), [Se, W]);
  const Re = /* @__PURE__ */ P.jsx(sy, p({}, w, {
    className: X(ye.indicator, w.className),
    ownerState: ne,
    style: p({}, le, w.style)
  }));
  let Qe = 0;
  const et = d.Children.map(u, (_) => {
    if (!/* @__PURE__ */ d.isValidElement(_))
      return null;
    const G = _.props.value === void 0 ? Qe : _.props.value;
    K.set(G, Qe);
    const fe = G === O;
    return Qe += 1, /* @__PURE__ */ d.cloneElement(_, p({
      fullWidth: T === "fullWidth",
      indicator: fe && !q && Re,
      selected: fe,
      selectionFollowsFocus: C,
      onChange: h,
      textColor: E,
      value: G
    }, Qe === 1 && O === !1 && !_.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), Y = (_) => {
    const G = J.current, fe = Ze(G).activeElement;
    if (fe.getAttribute("role") !== "tab")
      return;
    let Oe = y === "horizontal" ? "ArrowLeft" : "ArrowUp", je = y === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (y === "horizontal" && i && (Oe = "ArrowRight", je = "ArrowLeft"), _.key) {
      case Oe:
        _.preventDefault(), Ro(G, fe, na);
        break;
      case je:
        _.preventDefault(), Ro(G, fe, ta);
        break;
      case "Home":
        _.preventDefault(), Ro(G, null, ta);
        break;
      case "End":
        _.preventDefault(), Ro(G, null, na);
        break;
    }
  }, de = qe();
  return /* @__PURE__ */ P.jsxs(oy, p({
    className: X(ye.root, f),
    ownerState: ne,
    ref: n,
    as: m
  }, A, {
    children: [de.scrollButtonStart, de.scrollbarSizeListener, /* @__PURE__ */ P.jsxs(ry, {
      className: ye.scroller,
      ownerState: ne,
      style: {
        overflow: pe.overflow,
        [z ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: F ? void 0 : -pe.scrollbarWidth
      },
      ref: Me,
      children: [/* @__PURE__ */ P.jsx(iy, {
        "aria-label": s,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        className: ye.flexContainer,
        ownerState: ne,
        onKeyDown: Y,
        ref: J,
        role: "tablist",
        children: et
      }), q && Re]
    }), de.scrollButtonEnd]
  }));
}), Zy = ly;
function cy(e) {
  return he("MuiTextField", e);
}
ge("MuiTextField", ["root"]);
const uy = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], dy = {
  standard: hl,
  filled: dl,
  outlined: Cl
}, py = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, cy, t);
}, fy = D(ab, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), my = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: r,
    autoFocus: i = !1,
    children: s,
    className: a,
    color: l = "primary",
    defaultValue: c,
    disabled: u = !1,
    error: f = !1,
    FormHelperTextProps: m,
    fullWidth: g = !1,
    helperText: b,
    id: h,
    InputLabelProps: y,
    inputProps: S,
    InputProps: R,
    inputRef: C,
    label: v,
    maxRows: $,
    minRows: w,
    multiline: x = !1,
    name: E,
    onBlur: O,
    onChange: T,
    onFocus: F,
    placeholder: A,
    required: N = !1,
    rows: z,
    select: B = !1,
    SelectProps: M,
    type: L,
    value: j,
    variant: H = "outlined"
  } = o, ne = U(o, uy), ye = p({}, o, {
    autoFocus: i,
    color: l,
    disabled: u,
    error: f,
    fullWidth: g,
    multiline: x,
    required: N,
    select: B,
    variant: H
  }), we = py(ye), $e = {};
  H === "outlined" && (y && typeof y.shrink < "u" && ($e.notched = y.shrink), $e.label = v), B && ((!M || !M.native) && ($e.id = void 0), $e["aria-describedby"] = void 0);
  const q = pr(h), Q = b && q ? `${q}-helper-text` : void 0, le = v && q ? `${q}-label` : void 0, ke = dy[H], ee = /* @__PURE__ */ P.jsx(ke, p({
    "aria-describedby": Q,
    autoComplete: r,
    autoFocus: i,
    defaultValue: c,
    fullWidth: g,
    multiline: x,
    name: E,
    rows: z,
    maxRows: $,
    minRows: w,
    type: L,
    value: j,
    id: q,
    inputRef: C,
    onBlur: O,
    onChange: T,
    onFocus: F,
    placeholder: A,
    inputProps: S
  }, $e, R));
  return /* @__PURE__ */ P.jsxs(fy, p({
    className: X(we.root, a),
    disabled: u,
    error: f,
    fullWidth: g,
    ref: n,
    required: N,
    color: l,
    variant: H,
    ownerState: ye
  }, ne, {
    children: [v != null && v !== "" && /* @__PURE__ */ P.jsx(pv, p({
      htmlFor: q,
      id: le
    }, y, {
      children: v
    })), B ? /* @__PURE__ */ P.jsx(S0, p({
      "aria-describedby": Q,
      id: q,
      labelId: le,
      value: j,
      input: ee
    }, M, {
      children: s
    })) : ee, b && /* @__PURE__ */ P.jsx($b, p({
      id: Q
    }, m, {
      children: b
    }))]
  }));
}), Jy = my;
function hy(e) {
  return he("MuiToggleButton", e);
}
const gy = ge("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), xn = gy, by = /* @__PURE__ */ d.createContext({}), $l = by, vy = /* @__PURE__ */ d.createContext(void 0), wl = vy;
function yy(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.indexOf(e) >= 0 : e === t;
}
const xy = ["value"], Cy = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"], Sy = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: o,
    disabled: r,
    size: i,
    color: s
  } = e, a = {
    root: ["root", o && "selected", r && "disabled", n && "fullWidth", `size${Z(i)}`, s]
  };
  return me(a, hy, t);
}, $y = D(In, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`size${Z(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let n = t.color === "standard" ? e.palette.text.primary : e.palette[t.color].main, o;
  return e.vars && (n = t.color === "standard" ? e.vars.palette.text.primary : e.vars.palette[t.color].main, o = t.color === "standard" ? e.vars.palette.text.primaryChannel : e.vars.palette[t.color].mainChannel), p({}, e.typography.button, {
    borderRadius: (e.vars || e).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(e.vars || e).palette.divider}`,
    color: (e.vars || e).palette.action.active
  }, t.fullWidth && {
    width: "100%"
  }, {
    [`&.${xn.disabled}`]: {
      color: (e.vars || e).palette.action.disabled,
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      // Reset on mouse devices
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : at(e.palette.text.primary, e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${xn.selected}`]: {
      color: n,
      backgroundColor: e.vars ? `rgba(${o} / ${e.vars.palette.action.selectedOpacity})` : at(n, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${o} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : at(n, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: e.vars ? `rgba(${o} / ${e.vars.palette.action.selectedOpacity})` : at(n, e.palette.action.selectedOpacity)
        }
      }
    }
  }, t.size === "small" && {
    padding: 7,
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && {
    padding: 15,
    fontSize: e.typography.pxToRem(15)
  });
}), wy = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = d.useContext($l), {
    value: r
  } = o, i = U(o, xy), s = d.useContext(wl), a = mr(p({}, i, {
    selected: yy(t.value, r)
  }), t), l = ve({
    props: a,
    name: "MuiToggleButton"
  }), {
    children: c,
    className: u,
    color: f = "standard",
    disabled: m = !1,
    disableFocusRipple: g = !1,
    fullWidth: b = !1,
    onChange: h,
    onClick: y,
    selected: S,
    size: R = "medium",
    value: C
  } = l, v = U(l, Cy), $ = p({}, l, {
    color: f,
    disabled: m,
    disableFocusRipple: g,
    fullWidth: b,
    size: R
  }), w = Sy($), x = (O) => {
    y && (y(O, C), O.defaultPrevented) || h && h(O, C);
  }, E = s || "";
  return /* @__PURE__ */ P.jsx($y, p({
    className: X(i.className, w.root, u, E),
    disabled: m,
    focusRipple: !g,
    ref: n,
    onClick: x,
    onChange: h,
    value: C,
    ownerState: $,
    "aria-pressed": S
  }, v, {
    children: c
  }));
}), Qy = wy;
function Ry(e) {
  return he("MuiToggleButtonGroup", e);
}
const Py = ge("MuiToggleButtonGroup", ["root", "selected", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]), _e = Py, Ey = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"], Ty = (e) => {
  const {
    classes: t,
    orientation: n,
    fullWidth: o,
    disabled: r
  } = e, i = {
    root: ["root", n === "vertical" && "vertical", o && "fullWidth"],
    grouped: ["grouped", `grouped${Z(n)}`, r && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return me(i, Ry, t);
}, ky = D("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${_e.grouped}`]: t.grouped
    }, {
      [`& .${_e.grouped}`]: t[`grouped${Z(n.orientation)}`]
    }, {
      [`& .${_e.firstButton}`]: t.firstButton
    }, {
      [`& .${_e.lastButton}`]: t.lastButton
    }, {
      [`& .${_e.middleButton}`]: t.middleButton
    }, t.root, n.orientation === "vertical" && t.vertical, n.fullWidth && t.fullWidth];
  }
})(({
  ownerState: e,
  theme: t
}) => p({
  display: "inline-flex",
  borderRadius: (t.vars || t).shape.borderRadius
}, e.orientation === "vertical" && {
  flexDirection: "column"
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${_e.grouped}`]: p({}, e.orientation === "horizontal" ? {
    [`&.${_e.selected} + .${_e.grouped}.${_e.selected}`]: {
      borderLeft: 0,
      marginLeft: 0
    }
  } : {
    [`&.${_e.selected} + .${_e.grouped}.${_e.selected}`]: {
      borderTop: 0,
      marginTop: 0
    }
  })
}, e.orientation === "horizontal" ? {
  [`& .${_e.firstButton},& .${_e.middleButton}`]: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  [`& .${_e.lastButton},& .${_e.middleButton}`]: {
    marginLeft: -1,
    borderLeft: "1px solid transparent",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
} : {
  [`& .${_e.firstButton},& .${_e.middleButton}`]: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  [`& .${_e.lastButton},& .${_e.middleButton}`]: {
    marginTop: -1,
    borderTop: "1px solid transparent",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
}, e.orientation === "horizontal" ? {
  [`& .${_e.lastButton}.${xn.disabled},& .${_e.middleButton}.${xn.disabled}`]: {
    borderLeft: "1px solid transparent"
  }
} : {
  [`& .${_e.lastButton}.${xn.disabled},& .${_e.middleButton}.${xn.disabled}`]: {
    borderTop: "1px solid transparent"
  }
})), Oy = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = ve({
    props: t,
    name: "MuiToggleButtonGroup"
  }), {
    children: r,
    className: i,
    color: s = "standard",
    disabled: a = !1,
    exclusive: l = !1,
    fullWidth: c = !1,
    onChange: u,
    orientation: f = "horizontal",
    size: m = "medium",
    value: g
  } = o, b = U(o, Ey), h = p({}, o, {
    disabled: a,
    fullWidth: c,
    orientation: f,
    size: m
  }), y = Ty(h), S = d.useCallback((x, E) => {
    if (!u)
      return;
    const O = g && g.indexOf(E);
    let T;
    g && O >= 0 ? (T = g.slice(), T.splice(O, 1)) : T = g ? g.concat(E) : [E], u(x, T);
  }, [u, g]), R = d.useCallback((x, E) => {
    u && u(x, g === E ? null : E);
  }, [u, g]), C = d.useMemo(() => ({
    className: y.grouped,
    onChange: l ? R : S,
    value: g,
    size: m,
    fullWidth: c,
    color: s,
    disabled: a
  }), [y.grouped, l, R, S, g, m, c, s, a]), v = Jc(r), $ = v.length, w = (x) => {
    const E = x === 0, O = x === $ - 1;
    return E && O ? "" : E ? y.firstButton : O ? y.lastButton : y.middleButton;
  };
  return /* @__PURE__ */ P.jsx(ky, p({
    role: "group",
    className: X(y.root, i),
    ref: n,
    ownerState: h
  }, b, {
    children: /* @__PURE__ */ P.jsx($l.Provider, {
      value: C,
      children: v.map((x, E) => /* @__PURE__ */ P.jsx(wl.Provider, {
        value: w(E),
        children: x
      }, E))
    })
  }));
}), ex = Oy;
export {
  Fy as A,
  Hy as B,
  Om as C,
  Vy as D,
  By as E,
  Ja as F,
  $c as G,
  Ny as H,
  gf as I,
  Ly as J,
  Dy as K,
  zy as L,
  jy as M,
  Wy as N,
  qy as O,
  al as P,
  _y as Q,
  Qy as R,
  ex as S,
  Ay as T,
  Uy as U,
  Ky as V,
  U as _,
  wc as a,
  Da as b,
  My as c,
  Xy as d,
  X as e,
  Jy as f,
  Yy as g,
  $a as h,
  Zy as i,
  P as j,
  Gy as k,
  wp as l,
  ri as m,
  ei as n,
  Ua as o,
  p,
  ph as q,
  Xm as r,
  eh as s,
  Ut as t,
  Je as u,
  Am as v,
  Lm as w,
  Jm as x,
  Gm as y,
  oh as z
};
