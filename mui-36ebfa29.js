import { r as m, a as cr, R as Fe, b as un, c as ia } from "./react-72acea58.js";
var ni = { exports: {} }, Rn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = m, sa = Symbol.for("react.element"), la = Symbol.for("react.fragment"), ca = Object.prototype.hasOwnProperty, ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ri(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    ca.call(t, r) && !fa.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: sa, type: e, key: i, ref: a, props: o, _owner: ua.current };
}
Rn.Fragment = la;
Rn.jsx = ri;
Rn.jsxs = ri;
ni.exports = Rn;
var W = ni.exports;
function pa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function da(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ma = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(da(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = pa(o);
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
}(), oe = "-ms-", En = "-moz-", D = "-webkit-", oi = "comm", Tr = "rule", Cr = "decl", ha = "@import", ii = "@keyframes", ga = "@layer", va = Math.abs, $n = String.fromCharCode, ya = Object.assign;
function ba(e, t) {
  return te(e, 0) ^ 45 ? (((t << 2 ^ te(e, 0)) << 2 ^ te(e, 1)) << 2 ^ te(e, 2)) << 2 ^ te(e, 3) : 0;
}
function ai(e) {
  return e.trim();
}
function xa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function N(e, t, n) {
  return e.replace(t, n);
}
function ur(e, t) {
  return e.indexOf(t);
}
function te(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ut(e, t, n) {
  return e.slice(t, n);
}
function ke(e) {
  return e.length;
}
function Sr(e) {
  return e.length;
}
function fn(e, t) {
  return t.push(e), e;
}
function wa(e, t) {
  return e.map(t).join("");
}
var kn = 1, Et = 1, si = 0, ce = 0, Y = 0, Rt = "";
function An(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: kn, column: Et, length: a, return: "" };
}
function Bt(e, t) {
  return ya(An("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ea() {
  return Y;
}
function Ta() {
  return Y = ce > 0 ? te(Rt, --ce) : 0, Et--, Y === 10 && (Et = 1, kn--), Y;
}
function me() {
  return Y = ce < si ? te(Rt, ce++) : 0, Et++, Y === 10 && (Et = 1, kn++), Y;
}
function _e() {
  return te(Rt, ce);
}
function gn() {
  return ce;
}
function Qt(e, t) {
  return Ut(Rt, e, t);
}
function Kt(e) {
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
function li(e) {
  return kn = Et = 1, si = ke(Rt = e), ce = 0, [];
}
function ci(e) {
  return Rt = "", e;
}
function vn(e) {
  return ai(Qt(ce - 1, fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ca(e) {
  for (; (Y = _e()) && Y < 33; )
    me();
  return Kt(e) > 2 || Kt(Y) > 3 ? "" : " ";
}
function Sa(e, t) {
  for (; --t && me() && !(Y < 48 || Y > 102 || Y > 57 && Y < 65 || Y > 70 && Y < 97); )
    ;
  return Qt(e, gn() + (t < 6 && _e() == 32 && me() == 32));
}
function fr(e) {
  for (; me(); )
    switch (Y) {
      case e:
        return ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fr(Y);
        break;
      case 40:
        e === 41 && fr(e);
        break;
      case 92:
        me();
        break;
    }
  return ce;
}
function Pa(e, t) {
  for (; me() && e + Y !== 47 + 10; )
    if (e + Y === 42 + 42 && _e() === 47)
      break;
  return "/*" + Qt(t, ce - 1) + "*" + $n(e === 47 ? e : me());
}
function Oa(e) {
  for (; !Kt(_e()); )
    me();
  return Qt(e, ce);
}
function Ra(e) {
  return ci(yn("", null, null, null, [""], e = li(e), 0, [0], e));
}
function yn(e, t, n, r, o, i, a, s, l) {
  for (var c = 0, u = 0, p = a, d = 0, v = 0, h = 0, f = 1, x = 1, w = 1, P = 0, S = "", g = o, T = i, C = r, b = S; x; )
    switch (h = P, P = me()) {
      case 40:
        if (h != 108 && te(b, p - 1) == 58) {
          ur(b += N(vn(P), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += vn(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Ca(h);
        break;
      case 92:
        b += Sa(gn() - 1, 7);
        continue;
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            fn($a(Pa(me(), gn()), t, n), l);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * f:
        s[c++] = ke(b) * w;
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            w == -1 && (b = N(b, /\f/g, "")), v > 0 && ke(b) - p && fn(v > 32 ? mo(b + ";", r, n, p - 1) : mo(N(b, " ", "") + ";", r, n, p - 2), l);
            break;
          case 59:
            b += ";";
          default:
            if (fn(C = po(b, t, n, c, u, o, s, S, g = [], T = [], p), i), P === 123)
              if (u === 0)
                yn(b, t, C, C, g, i, p, s, T);
              else
                switch (d === 99 && te(b, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yn(e, C, C, r && fn(po(e, C, C, 0, 0, o, s, S, o, g = [], p), T), o, T, p, s, r ? g : T);
                    break;
                  default:
                    yn(b, C, C, C, [""], T, 0, s, T);
                }
        }
        c = u = v = 0, f = w = 1, S = b = "", p = a;
        break;
      case 58:
        p = 1 + ke(b), v = h;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && Ta() == 125)
            continue;
        }
        switch (b += $n(P), P * f) {
          case 38:
            w = u > 0 ? 1 : (b += "\f", -1);
            break;
          case 44:
            s[c++] = (ke(b) - 1) * w, w = 1;
            break;
          case 64:
            _e() === 45 && (b += vn(me())), d = _e(), u = p = ke(S = b += Oa(gn())), P++;
            break;
          case 45:
            h === 45 && ke(b) == 2 && (f = 0);
        }
    }
  return i;
}
function po(e, t, n, r, o, i, a, s, l, c, u) {
  for (var p = o - 1, d = o === 0 ? i : [""], v = Sr(d), h = 0, f = 0, x = 0; h < r; ++h)
    for (var w = 0, P = Ut(e, p + 1, p = va(f = a[h])), S = e; w < v; ++w)
      (S = ai(f > 0 ? d[w] + " " + P : N(P, /&\f/g, d[w]))) && (l[x++] = S);
  return An(e, t, n, o === 0 ? Tr : s, l, c, u);
}
function $a(e, t, n) {
  return An(e, t, n, oi, $n(Ea()), Ut(e, 2, -2), 0);
}
function mo(e, t, n, r) {
  return An(e, t, n, Cr, Ut(e, 0, r), Ut(e, r + 1, -1), r);
}
function xt(e, t) {
  for (var n = "", r = Sr(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function ka(e, t, n, r) {
  switch (e.type) {
    case ga:
      if (e.children.length)
        break;
    case ha:
    case Cr:
      return e.return = e.return || e.value;
    case oi:
      return "";
    case ii:
      return e.return = e.value + "{" + xt(e.children, r) + "}";
    case Tr:
      e.value = e.props.join(",");
  }
  return ke(n = xt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Aa(e) {
  var t = Sr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Ma(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ui(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var _a = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = _e(), o === 38 && i === 12 && (n[r] = 1), !Kt(i); )
    me();
  return Qt(t, ce);
}, Ia = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Kt(o)) {
      case 0:
        o === 38 && _e() === 12 && (n[r] = 1), t[r] += _a(ce - 1, n, r);
        break;
      case 2:
        t[r] += vn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = _e() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += $n(o);
    }
  while (o = me());
  return t;
}, Ba = function(t, n) {
  return ci(Ia(li(t), n));
}, ho = /* @__PURE__ */ new WeakMap(), La = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ho.get(r)) && !o) {
      ho.set(t, !0);
      for (var i = [], a = Ba(n, i), s = r.props, l = 0, c = 0; l < a.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
    }
  }
}, Da = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function fi(e, t) {
  switch (ba(e, t)) {
    case 5103:
      return D + "print-" + e + e;
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
      return D + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + En + e + oe + e + e;
    case 6828:
    case 4268:
      return D + e + oe + e + e;
    case 6165:
      return D + e + oe + "flex-" + e + e;
    case 5187:
      return D + e + N(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + oe + "flex-$1$2") + e;
    case 5443:
      return D + e + oe + "flex-item-" + N(e, /flex-|-self/, "") + e;
    case 4675:
      return D + e + oe + "flex-line-pack" + N(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return D + e + oe + N(e, "shrink", "negative") + e;
    case 5292:
      return D + e + oe + N(e, "basis", "preferred-size") + e;
    case 6060:
      return D + "box-" + N(e, "-grow", "") + D + e + oe + N(e, "grow", "positive") + e;
    case 4554:
      return D + N(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return N(N(N(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return N(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return N(N(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return N(e, /(.+)-inline(.+)/, D + "$1$2") + e;
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
      if (ke(e) - 1 - t > 6)
        switch (te(e, t + 1)) {
          case 109:
            if (te(e, t + 4) !== 45)
              break;
          case 102:
            return N(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + En + (te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ur(e, "stretch") ? fi(N(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (te(e, t + 1) !== 115)
        break;
    case 6444:
      switch (te(e, ke(e) - 3 - (~ur(e, "!important") && 10))) {
        case 107:
          return N(e, ":", ":" + D) + e;
        case 101:
          return N(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D + (te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (te(e, t + 11)) {
        case 114:
          return D + e + oe + N(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + oe + N(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + oe + N(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + oe + e + e;
  }
  return e;
}
var Na = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Cr:
        t.return = fi(t.value, t.length);
        break;
      case ii:
        return xt([Bt(t, {
          value: N(t.value, "@", "@" + D)
        })], o);
      case Tr:
        if (t.length)
          return wa(t.props, function(i) {
            switch (xa(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xt([Bt(t, {
                  props: [N(i, /:(read-\w+)/, ":" + En + "$1")]
                })], o);
              case "::placeholder":
                return xt([Bt(t, {
                  props: [N(i, /:(plac\w+)/, ":" + D + "input-$1")]
                }), Bt(t, {
                  props: [N(i, /:(plac\w+)/, ":" + En + "$1")]
                }), Bt(t, {
                  props: [N(i, /:(plac\w+)/, oe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, ja = [Na], za = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var x = f.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ja, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var x = f.getAttribute("data-emotion").split(" "), w = 1; w < x.length; w++)
        i[x[w]] = !0;
      s.push(f);
    }
  );
  var l, c = [La, Da];
  {
    var u, p = [ka, Ma(function(f) {
      u.insert(f);
    })], d = Aa(c.concat(o, p)), v = function(x) {
      return xt(Ra(x), d);
    };
    l = function(x, w, P, S) {
      u = P, v(x ? x + "{" + w.styles + "}" : w.styles), S && (h.inserted[w.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new ma({
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
    insert: l
  };
  return h.sheet.hydrate(s), h;
};
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, y.apply(this, arguments);
}
var pi = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J = typeof Symbol == "function" && Symbol.for, Pr = J ? Symbol.for("react.element") : 60103, Or = J ? Symbol.for("react.portal") : 60106, Mn = J ? Symbol.for("react.fragment") : 60107, _n = J ? Symbol.for("react.strict_mode") : 60108, In = J ? Symbol.for("react.profiler") : 60114, Bn = J ? Symbol.for("react.provider") : 60109, Ln = J ? Symbol.for("react.context") : 60110, Rr = J ? Symbol.for("react.async_mode") : 60111, Dn = J ? Symbol.for("react.concurrent_mode") : 60111, Nn = J ? Symbol.for("react.forward_ref") : 60112, jn = J ? Symbol.for("react.suspense") : 60113, Fa = J ? Symbol.for("react.suspense_list") : 60120, zn = J ? Symbol.for("react.memo") : 60115, Fn = J ? Symbol.for("react.lazy") : 60116, Wa = J ? Symbol.for("react.block") : 60121, Va = J ? Symbol.for("react.fundamental") : 60117, Ha = J ? Symbol.for("react.responder") : 60118, Ua = J ? Symbol.for("react.scope") : 60119;
function ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Pr:
        switch (e = e.type, e) {
          case Rr:
          case Dn:
          case Mn:
          case In:
          case _n:
          case jn:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ln:
              case Nn:
              case Fn:
              case zn:
              case Bn:
                return e;
              default:
                return t;
            }
        }
      case Or:
        return t;
    }
  }
}
function di(e) {
  return ge(e) === Dn;
}
F.AsyncMode = Rr;
F.ConcurrentMode = Dn;
F.ContextConsumer = Ln;
F.ContextProvider = Bn;
F.Element = Pr;
F.ForwardRef = Nn;
F.Fragment = Mn;
F.Lazy = Fn;
F.Memo = zn;
F.Portal = Or;
F.Profiler = In;
F.StrictMode = _n;
F.Suspense = jn;
F.isAsyncMode = function(e) {
  return di(e) || ge(e) === Rr;
};
F.isConcurrentMode = di;
F.isContextConsumer = function(e) {
  return ge(e) === Ln;
};
F.isContextProvider = function(e) {
  return ge(e) === Bn;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pr;
};
F.isForwardRef = function(e) {
  return ge(e) === Nn;
};
F.isFragment = function(e) {
  return ge(e) === Mn;
};
F.isLazy = function(e) {
  return ge(e) === Fn;
};
F.isMemo = function(e) {
  return ge(e) === zn;
};
F.isPortal = function(e) {
  return ge(e) === Or;
};
F.isProfiler = function(e) {
  return ge(e) === In;
};
F.isStrictMode = function(e) {
  return ge(e) === _n;
};
F.isSuspense = function(e) {
  return ge(e) === jn;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Mn || e === Dn || e === In || e === _n || e === jn || e === Fa || typeof e == "object" && e !== null && (e.$$typeof === Fn || e.$$typeof === zn || e.$$typeof === Bn || e.$$typeof === Ln || e.$$typeof === Nn || e.$$typeof === Va || e.$$typeof === Ha || e.$$typeof === Ua || e.$$typeof === Wa);
};
F.typeOf = ge;
pi.exports = F;
var Ka = pi.exports, mi = Ka, Ga = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xa = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hi = {};
hi[mi.ForwardRef] = Ga;
hi[mi.Memo] = Xa;
var Ya = !0;
function gi(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var $r = function(t, n, r) {
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
  Ya === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, kr = function(t, n, r) {
  $r(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function qa(e) {
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
var Za = {
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
}, Ja = /[A-Z]|^ms/g, Qa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, vi = function(t) {
  return t.charCodeAt(1) === 45;
}, go = function(t) {
  return t != null && typeof t != "boolean";
}, or = /* @__PURE__ */ ui(function(e) {
  return vi(e) ? e : e.replace(Ja, "-$&").toLowerCase();
}), vo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Qa, function(r, o, i) {
          return Ae = {
            name: o,
            styles: i,
            next: Ae
          }, o;
        });
  }
  return Za[t] !== 1 && !vi(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Gt(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Ae = {
          name: n.name,
          styles: n.styles,
          next: Ae
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Ae = {
              name: r.name,
              styles: r.styles,
              next: Ae
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return es(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ae, a = n(e);
        return Ae = i, Gt(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function es(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Gt(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : go(a) && (r += or(i) + ":" + vo(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          go(a[s]) && (r += or(i) + ":" + vo(i, a[s]) + ";");
      else {
        var l = Gt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += or(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var yo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ae, Wn = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Ae = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Gt(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Gt(r, n, t[s]), o && (i += a[s]);
  yo.lastIndex = 0;
  for (var l = "", c; (c = yo.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = qa(i) + l;
  return {
    name: u,
    styles: i,
    next: Ae
  };
}, ts = function(t) {
  return t();
}, yi = cr["useInsertionEffect"] ? cr["useInsertionEffect"] : !1, bi = yi || ts, bo = yi || m.useLayoutEffect, xi = {}.hasOwnProperty, wi = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ za({
    key: "css"
  }) : null
);
wi.Provider;
var Ar = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(wi);
    return t(n, o, r);
  });
}, en = /* @__PURE__ */ m.createContext({}), pr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ap = function(t, n) {
  var r = {};
  for (var o in n)
    xi.call(n, o) && (r[o] = n[o]);
  return r[pr] = t, r;
}, ns = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return $r(n, r, o), bi(function() {
    return kr(n, r, o);
  }), null;
}, rs = /* @__PURE__ */ Ar(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[pr], i = [r], a = "";
  typeof e.className == "string" ? a = gi(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Wn(i, void 0, m.useContext(en));
  a += t.key + "-" + s.name;
  var l = {};
  for (var c in e)
    xi.call(e, c) && c !== "css" && c !== pr && (l[c] = e[c]);
  return l.ref = n, l.className = a, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(ns, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, l));
}), sp = rs, lp = /* @__PURE__ */ Ar(function(e, t) {
  var n = e.styles, r = Wn([n], void 0, m.useContext(en)), o = m.useRef();
  return bo(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), bo(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && kr(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function os() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Wn(t);
}
var Mr = function() {
  var t = os.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function Ze(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Ei(e) {
  if (!Ze(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ei(e[n]);
  }), t;
}
function Oe(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? y({}, e) : e;
  return Ze(e) && Ze(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ze(t[o]) && o in e && Ze(e[o]) ? r[o] = Oe(e[o], t[o], n) : n.clone ? r[o] = Ze(t[o]) ? Ei(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Tt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function ne(e) {
  if (typeof e != "string")
    throw new Error(Tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xo(e) {
  return e && e.ownerDocument || document;
}
function dr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const is = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Xt = is;
let wo = 0;
function as(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (wo += 1, n(`mui-${wo}`));
  }, [t]), r;
}
const Eo = cr["useId".toString()];
function ss(e) {
  if (Eo !== void 0) {
    const t = Eo();
    return e ?? t;
  }
  return as(e);
}
function ls({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = m.useRef(e !== void 0), [i, a] = m.useState(t), s = o ? e : i, l = m.useCallback((c) => {
    o || a(c);
  }, []);
  return [s, l];
}
function jt(e) {
  const t = m.useRef(e);
  return Xt(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function Qe(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      dr(n, t);
    });
  }, e);
}
let Vn = !0, mr = !1, To;
const cs = {
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
function us(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && cs[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function fs(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Vn = !0);
}
function ir() {
  Vn = !1;
}
function ps() {
  this.visibilityState === "hidden" && mr && (Vn = !0);
}
function ds(e) {
  e.addEventListener("keydown", fs, !0), e.addEventListener("mousedown", ir, !0), e.addEventListener("pointerdown", ir, !0), e.addEventListener("touchstart", ir, !0), e.addEventListener("visibilitychange", ps, !0);
}
function ms(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Vn || us(t);
}
function Ti() {
  const e = m.useCallback((o) => {
    o != null && ds(o.ownerDocument);
  }, []), t = m.useRef(!1);
  function n() {
    return t.current ? (mr = !0, window.clearTimeout(To), To = window.setTimeout(() => {
      mr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return ms(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function _r(e, t) {
  const n = y({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = y({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = y({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = _r(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Hn(e, t, n = void 0) {
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
const Co = (e) => e, hs = () => {
  let e = Co;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Co;
    }
  };
}, gs = hs(), vs = gs, ys = {
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
function tn(e, t, n = "Mui") {
  const r = ys[t];
  return r ? `${n}-${r}` : `${vs.generate(e)}-${t}`;
}
function nn(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = tn(e, o, n);
  }), r;
}
const Yt = "$$material";
function q(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var bs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xs = /* @__PURE__ */ ui(
  function(e) {
    return bs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ws = xs, Es = function(t) {
  return t !== "theme";
}, So = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ws : Es;
}, Po = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Ts = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return $r(n, r, o), bi(function() {
    return kr(n, r, o);
  }), null;
}, Cs = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Po(t, n, r), l = s || So(o), c = !l("as");
  return function() {
    var u = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      p.push.apply(p, u);
    else {
      p.push(u[0][0]);
      for (var d = u.length, v = 1; v < d; v++)
        p.push(u[v], u[0][v]);
    }
    var h = Ar(function(f, x, w) {
      var P = c && f.as || o, S = "", g = [], T = f;
      if (f.theme == null) {
        T = {};
        for (var C in f)
          T[C] = f[C];
        T.theme = m.useContext(en);
      }
      typeof f.className == "string" ? S = gi(x.registered, g, f.className) : f.className != null && (S = f.className + " ");
      var b = Wn(p.concat(g), x.registered, T);
      S += x.key + "-" + b.name, a !== void 0 && (S += " " + a);
      var M = c && s === void 0 ? So(P) : l, O = {};
      for (var E in f)
        c && E === "as" || // $FlowFixMe
        M(E) && (O[E] = f[E]);
      return O.className = S, O.ref = w, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ts, {
        cache: x,
        serialized: b,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ m.createElement(P, O));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = o, h.__emotion_styles = p, h.__emotion_forwardProp = s, Object.defineProperty(h, "toString", {
      value: function() {
        return "." + a;
      }
    }), h.withComponent = function(f, x) {
      return e(f, y({}, n, x, {
        shouldForwardProp: Po(h, x, !0)
      })).apply(void 0, p);
    }, h;
  };
}, Ss = [
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
], hr = Cs.bind();
Ss.forEach(function(e) {
  hr[e] = hr(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ps(e, t) {
  return hr(e, t);
}
const Os = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Rs = ["values", "unit", "step"], $s = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => y({}, n, {
    [r.key]: r.val
  }), {});
};
function ks(e) {
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
  } = e, o = q(e, Rs), i = $s(t), a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function c(d, v) {
    const h = a.indexOf(v);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : v) - r / 100}${n})`;
  }
  function u(d) {
    return a.indexOf(d) + 1 < a.length ? c(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function p(d) {
    const v = a.indexOf(d);
    return v === 0 ? s(a[1]) : v === a.length - 1 ? l(a[v]) : c(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return y({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: c,
    only: u,
    not: p,
    unit: n
  }, o);
}
const As = {
  borderRadius: 4
}, Ms = As;
function Wt(e, t) {
  return t ? Oe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ir = {
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
}, Oo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ir[e]}px)`
};
function We(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Oo;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Oo;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || Ir).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function _s(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Is(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Un(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Tn(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Un(e, n) || r, t && (o = t(o, r, e)), o;
}
function z(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, c = Un(l, r) || {};
    return We(a, s, (p) => {
      let d = Tn(c, o, p);
      return p === d && typeof p == "string" && (d = Tn(c, o, `${t}${p === "default" ? "" : ne(p)}`, p)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Bs(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ls = {
  m: "margin",
  p: "padding"
}, Ds = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ro = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ns = Bs((e) => {
  if (e.length > 2)
    if (Ro[e])
      e = Ro[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ls[t], o = Ds[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Br = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Lr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Br, ...Lr];
function rn(e, t, n, r) {
  var o;
  const i = (o = Un(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function Ci(e) {
  return rn(e, "spacing", 8);
}
function on(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function js(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = on(t, n), r), {});
}
function zs(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Ns(n), i = js(o, r), a = e[n];
  return We(e, a, i);
}
function Si(e, t) {
  const n = Ci(e.theme);
  return Object.keys(e).map((r) => zs(e, t, r, n)).reduce(Wt, {});
}
function K(e) {
  return Si(e, Br);
}
K.propTypes = {};
K.filterProps = Br;
function G(e) {
  return Si(e, Lr);
}
G.propTypes = {};
G.filterProps = Lr;
function Fs(e = 8) {
  if (e.mui)
    return e;
  const t = Ci({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function Kn(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Wt(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Me(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ws = z({
  prop: "border",
  themeKey: "borders",
  transform: Me
}), Vs = z({
  prop: "borderTop",
  themeKey: "borders",
  transform: Me
}), Hs = z({
  prop: "borderRight",
  themeKey: "borders",
  transform: Me
}), Us = z({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Me
}), Ks = z({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Me
}), Gs = z({
  prop: "borderColor",
  themeKey: "palette"
}), Xs = z({
  prop: "borderTopColor",
  themeKey: "palette"
}), Ys = z({
  prop: "borderRightColor",
  themeKey: "palette"
}), qs = z({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Zs = z({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Gn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = rn(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: on(t, r)
    });
    return We(e, e.borderRadius, n);
  }
  return null;
};
Gn.propTypes = {};
Gn.filterProps = ["borderRadius"];
Kn(Ws, Vs, Hs, Us, Ks, Gs, Xs, Ys, qs, Zs, Gn);
const Xn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = rn(e.theme, "spacing", 8), n = (r) => ({
      gap: on(t, r)
    });
    return We(e, e.gap, n);
  }
  return null;
};
Xn.propTypes = {};
Xn.filterProps = ["gap"];
const Yn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = rn(e.theme, "spacing", 8), n = (r) => ({
      columnGap: on(t, r)
    });
    return We(e, e.columnGap, n);
  }
  return null;
};
Yn.propTypes = {};
Yn.filterProps = ["columnGap"];
const qn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = rn(e.theme, "spacing", 8), n = (r) => ({
      rowGap: on(t, r)
    });
    return We(e, e.rowGap, n);
  }
  return null;
};
qn.propTypes = {};
qn.filterProps = ["rowGap"];
const Js = z({
  prop: "gridColumn"
}), Qs = z({
  prop: "gridRow"
}), el = z({
  prop: "gridAutoFlow"
}), tl = z({
  prop: "gridAutoColumns"
}), nl = z({
  prop: "gridAutoRows"
}), rl = z({
  prop: "gridTemplateColumns"
}), ol = z({
  prop: "gridTemplateRows"
}), il = z({
  prop: "gridTemplateAreas"
}), al = z({
  prop: "gridArea"
});
Kn(Xn, Yn, qn, Js, Qs, el, tl, nl, rl, ol, il, al);
function wt(e, t) {
  return t === "grey" ? t : e;
}
const sl = z({
  prop: "color",
  themeKey: "palette",
  transform: wt
}), ll = z({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wt
}), cl = z({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wt
});
Kn(sl, ll, cl);
function de(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ul = z({
  prop: "width",
  transform: de
}), Dr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ir[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: de(n)
      };
    };
    return We(e, e.maxWidth, t);
  }
  return null;
};
Dr.filterProps = ["maxWidth"];
const fl = z({
  prop: "minWidth",
  transform: de
}), pl = z({
  prop: "height",
  transform: de
}), dl = z({
  prop: "maxHeight",
  transform: de
}), ml = z({
  prop: "minHeight",
  transform: de
});
z({
  prop: "size",
  cssProperty: "width",
  transform: de
});
z({
  prop: "size",
  cssProperty: "height",
  transform: de
});
const hl = z({
  prop: "boxSizing"
});
Kn(ul, Dr, fl, pl, dl, ml, hl);
const gl = {
  // borders
  border: {
    themeKey: "borders",
    transform: Me
  },
  borderTop: {
    themeKey: "borders",
    transform: Me
  },
  borderRight: {
    themeKey: "borders",
    transform: Me
  },
  borderBottom: {
    themeKey: "borders",
    transform: Me
  },
  borderLeft: {
    themeKey: "borders",
    transform: Me
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
    style: Gn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wt
  },
  // spacing
  p: {
    style: G
  },
  pt: {
    style: G
  },
  pr: {
    style: G
  },
  pb: {
    style: G
  },
  pl: {
    style: G
  },
  px: {
    style: G
  },
  py: {
    style: G
  },
  padding: {
    style: G
  },
  paddingTop: {
    style: G
  },
  paddingRight: {
    style: G
  },
  paddingBottom: {
    style: G
  },
  paddingLeft: {
    style: G
  },
  paddingX: {
    style: G
  },
  paddingY: {
    style: G
  },
  paddingInline: {
    style: G
  },
  paddingInlineStart: {
    style: G
  },
  paddingInlineEnd: {
    style: G
  },
  paddingBlock: {
    style: G
  },
  paddingBlockStart: {
    style: G
  },
  paddingBlockEnd: {
    style: G
  },
  m: {
    style: K
  },
  mt: {
    style: K
  },
  mr: {
    style: K
  },
  mb: {
    style: K
  },
  ml: {
    style: K
  },
  mx: {
    style: K
  },
  my: {
    style: K
  },
  margin: {
    style: K
  },
  marginTop: {
    style: K
  },
  marginRight: {
    style: K
  },
  marginBottom: {
    style: K
  },
  marginLeft: {
    style: K
  },
  marginX: {
    style: K
  },
  marginY: {
    style: K
  },
  marginInline: {
    style: K
  },
  marginInlineStart: {
    style: K
  },
  marginInlineEnd: {
    style: K
  },
  marginBlock: {
    style: K
  },
  marginBlockStart: {
    style: K
  },
  marginBlockEnd: {
    style: K
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
    style: Xn
  },
  rowGap: {
    style: qn
  },
  columnGap: {
    style: Yn
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
    transform: de
  },
  maxWidth: {
    style: Dr
  },
  minWidth: {
    transform: de
  },
  height: {
    transform: de
  },
  maxHeight: {
    transform: de
  },
  minHeight: {
    transform: de
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
}, Nr = gl;
function vl(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function yl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bl() {
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
      cssProperty: l = n,
      themeKey: c,
      transform: u,
      style: p
    } = s;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Un(o, c) || {};
    return p ? p(a) : We(a, r, (h) => {
      let f = Tn(d, u, h);
      return h === f && typeof h == "string" && (f = Tn(d, u, `${n}${h === "default" ? "" : ne(h)}`, h)), l === !1 ? f : {
        [l]: f
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
    const a = (r = i.unstable_sxConfig) != null ? r : Nr;
    function s(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = _s(i.breakpoints), p = Object.keys(u);
      let d = u;
      return Object.keys(c).forEach((v) => {
        const h = yl(c[v], i);
        if (h != null)
          if (typeof h == "object")
            if (a[v])
              d = Wt(d, e(v, h, i, a));
            else {
              const f = We({
                theme: i
              }, h, (x) => ({
                [v]: x
              }));
              vl(f, h) ? d[v] = t({
                sx: h,
                theme: i
              }) : d = Wt(d, f);
            }
          else
            d = Wt(d, e(v, h, i, a));
      }), Is(p, d);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Pi = bl();
Pi.filterProps = ["sx"];
const jr = Pi, xl = ["breakpoints", "palette", "spacing", "shape"];
function zr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = q(e, xl), s = ks(n), l = Fs(o);
  let c = Oe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: y({
      mode: "light"
    }, r),
    spacing: l,
    shape: y({}, Ms, i)
  }, a);
  return c = t.reduce((u, p) => Oe(u, p), c), c.unstable_sxConfig = y({}, Nr, a == null ? void 0 : a.unstable_sxConfig), c.unstable_sx = function(p) {
    return jr({
      sx: p,
      theme: this
    });
  }, c;
}
function wl(e) {
  return Object.keys(e).length === 0;
}
function Fr(e = null) {
  const t = m.useContext(en);
  return !t || wl(t) ? e : t;
}
const El = zr();
function Oi(e = El) {
  return Fr(e);
}
function Ri(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ri(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Z() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ri(e)) && (r && (r += " "), r += t);
  return r;
}
const Tl = ["variant"];
function $o(e) {
  return e.length === 0;
}
function $i(e) {
  const {
    variant: t
  } = e, n = q(e, Tl);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += $o(r) ? e[o] : ne(e[o]) : r += `${$o(r) ? o : ne(o)}${ne(e[o].toString())}`;
  }), r;
}
const Cl = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Sl(e) {
  return Object.keys(e).length === 0;
}
function Pl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Ol = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Cn = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = $i(n.props);
    t[r] = n.style;
  }), t;
}, Rl = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Cn(n);
}, Sn = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(t[$i(i.props)]);
  }), o;
}, $l = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return Sn(e, t, i);
};
function bn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const kl = zr(), Al = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function xn({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Sl(t) ? e : t[n] || t;
}
function Ml(e) {
  return e ? (t, n) => n[e] : null;
}
const ko = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(y({}, t, {
    theme: xn(y({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = Sn(t, Cn(i), i);
    return [o, ...a];
  }
  return o;
};
function _l(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = kl,
    rootShouldForwardProp: r = bn,
    slotShouldForwardProp: o = bn
  } = e, i = (a) => jr(y({}, a, {
    theme: xn(y({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    Os(a, (g) => g.filter((T) => !(T != null && T.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = Ml(Al(c))
    } = s, v = q(s, Cl), h = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), f = p || !1;
    let x, w = bn;
    c === "Root" || c === "root" ? w = r : c ? w = o : Pl(a) && (w = void 0);
    const P = Ps(a, y({
      shouldForwardProp: w,
      label: x
    }, v)), S = (g, ...T) => {
      const C = T ? T.map((E) => {
        if (typeof E == "function" && E.__emotion_real !== E)
          return (R) => ko({
            styledArg: E,
            props: R,
            defaultTheme: n,
            themeId: t
          });
        if (Ze(E)) {
          let R = E, _;
          return E && E.variants && (_ = E.variants, delete R.variants, R = (I) => {
            let j = E;
            return Sn(I, Cn(_), _).forEach((k) => {
              j = Oe(j, k);
            }), j;
          }), R;
        }
        return E;
      }) : [];
      let b = g;
      if (Ze(g)) {
        let E;
        g && g.variants && (E = g.variants, delete b.variants, b = (R) => {
          let _ = g;
          return Sn(R, Cn(E), E).forEach((j) => {
            _ = Oe(_, j);
          }), _;
        });
      } else
        typeof g == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        g.__emotion_real !== g && (b = (E) => ko({
          styledArg: g,
          props: E,
          defaultTheme: n,
          themeId: t
        }));
      l && d && C.push((E) => {
        const R = xn(y({}, E, {
          defaultTheme: n,
          themeId: t
        })), _ = Ol(l, R);
        if (_) {
          const I = {};
          return Object.entries(_).forEach(([j, $]) => {
            I[j] = typeof $ == "function" ? $(y({}, E, {
              theme: R
            })) : $;
          }), d(E, I);
        }
        return null;
      }), l && !h && C.push((E) => {
        const R = xn(y({}, E, {
          defaultTheme: n,
          themeId: t
        }));
        return $l(E, Rl(l, R), R, l);
      }), f || C.push(i);
      const M = C.length - T.length;
      if (Array.isArray(g) && M > 0) {
        const E = new Array(M).fill("");
        b = [...g, ...E], b.raw = [...g.raw, ...E];
      }
      const O = P(b, ...C);
      return a.muiName && (O.muiName = a.muiName), O;
    };
    return P.withConfig && (S.withConfig = P.withConfig), S;
  };
}
function Il(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : _r(t.components[n].defaultProps, r);
}
function Bl({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Oi(n);
  return r && (o = o[r] || o), Il({
    theme: o,
    name: t,
    props: e
  });
}
function Wr(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function Ll(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function it(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return it(Ll(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Tt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Tt(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Zn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Dl(e) {
  e = it(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Zn({
    type: s,
    values: l
  });
}
function Ao(e) {
  e = it(e);
  let t = e.type === "hsl" || e.type === "hsla" ? it(Dl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Nl(e, t) {
  const n = Ao(e), r = Ao(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function bt(e, t) {
  return e = it(e), t = Wr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Zn(e);
}
function jl(e, t) {
  if (e = it(e), t = Wr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Zn(e);
}
function zl(e, t) {
  if (e = it(e), t = Wr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Zn(e);
}
const Fl = /* @__PURE__ */ m.createContext(null), ki = Fl;
function Ai() {
  return m.useContext(ki);
}
const Wl = typeof Symbol == "function" && Symbol.for, Vl = Wl ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Hl(e, t) {
  return typeof t == "function" ? t(e) : y({}, e, t);
}
function Ul(e) {
  const {
    children: t,
    theme: n
  } = e, r = Ai(), o = m.useMemo(() => {
    const i = r === null ? n : Hl(r, n);
    return i != null && (i[Vl] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ W.jsx(ki.Provider, {
    value: o,
    children: t
  });
}
const Mo = {};
function _o(e, t, n, r = !1) {
  return m.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), a = e ? y({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? y({}, t, {
      [e]: n
    }) : y({}, t, n);
  }, [e, t, n, r]);
}
function Kl(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Fr(Mo), i = Ai() || Mo, a = _o(r, o, n), s = _o(r, i, n, !0);
  return /* @__PURE__ */ W.jsx(Ul, {
    theme: s,
    children: /* @__PURE__ */ W.jsx(en.Provider, {
      value: a,
      children: t
    })
  });
}
function Gl(e, t) {
  return y({
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
const Xl = {
  black: "#000",
  white: "#fff"
}, qt = Xl, Yl = {
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
}, ql = Yl, Zl = {
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
}, pt = Zl, Jl = {
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
}, dt = Jl, Ql = {
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
}, Lt = Ql, ec = {
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
}, mt = ec, tc = {
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
}, ht = tc, nc = {
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
}, gt = nc, rc = ["mode", "contrastThreshold", "tonalOffset"], Io = {
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
    paper: qt.white,
    default: qt.white
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
}, ar = {
  text: {
    primary: qt.white,
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
    active: qt.white,
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
function Bo(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = zl(e.main, o) : t === "dark" && (e.dark = jl(e.main, i)));
}
function oc(e = "light") {
  return e === "dark" ? {
    main: mt[200],
    light: mt[50],
    dark: mt[400]
  } : {
    main: mt[700],
    light: mt[400],
    dark: mt[800]
  };
}
function ic(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[500],
    light: pt[300],
    dark: pt[700]
  };
}
function ac(e = "light") {
  return e === "dark" ? {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[700],
    light: dt[400],
    dark: dt[800]
  };
}
function sc(e = "light") {
  return e === "dark" ? {
    main: ht[400],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[700],
    light: ht[500],
    dark: ht[900]
  };
}
function lc(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[800],
    light: gt[500],
    dark: gt[900]
  };
}
function cc(e = "light") {
  return e === "dark" ? {
    main: Lt[400],
    light: Lt[300],
    dark: Lt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Lt[500],
    dark: Lt[900]
  };
}
function uc(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = q(e, rc), i = e.primary || oc(t), a = e.secondary || ic(t), s = e.error || ac(t), l = e.info || sc(t), c = e.success || lc(t), u = e.warning || cc(t);
  function p(f) {
    return Nl(f, ar.text.primary) >= n ? ar.text.primary : Io.text.primary;
  }
  const d = ({
    color: f,
    name: x,
    mainShade: w = 500,
    lightShade: P = 300,
    darkShade: S = 700
  }) => {
    if (f = y({}, f), !f.main && f[w] && (f.main = f[w]), !f.hasOwnProperty("main"))
      throw new Error(Tt(11, x ? ` (${x})` : "", w));
    if (typeof f.main != "string")
      throw new Error(Tt(12, x ? ` (${x})` : "", JSON.stringify(f.main)));
    return Bo(f, "light", P, r), Bo(f, "dark", S, r), f.contrastText || (f.contrastText = p(f.main)), f;
  }, v = {
    dark: ar,
    light: Io
  };
  return Oe(y({
    // A collection of common colors.
    common: y({}, qt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: a,
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
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: ql,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, v[t]), o);
}
const fc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function pc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lo = {
  textTransform: "uppercase"
}, Do = '"Roboto", "Helvetica", "Arial", sans-serif';
function dc(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Do,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p
  } = n, d = q(n, fc), v = o / 14, h = p || ((w) => `${w / c * v}rem`), f = (w, P, S, g, T) => y({
    fontFamily: r,
    fontWeight: w,
    fontSize: h(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, r === Do ? {
    letterSpacing: `${pc(g / P)}em`
  } : {}, T, u), x = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(s, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(s, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(s, 14, 1.75, 0.4, Lo),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, Lo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Oe(y({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, x), d, {
    clone: !1
    // No need to clone deep
  });
}
const mc = 0.2, hc = 0.14, gc = 0.12;
function H(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${mc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${gc})`].join(",");
}
const vc = ["none", H(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), H(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), H(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), H(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), H(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), H(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), H(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), H(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), H(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), H(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), H(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), H(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), H(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), H(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), H(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), H(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), H(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), H(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), H(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), H(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), H(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), H(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), H(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), H(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], yc = vc, bc = ["duration", "easing", "delay"], xc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wc = {
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
function No(e) {
  return `${Math.round(e)}ms`;
}
function Ec(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Tc(e) {
  const t = y({}, xc, e.easing), n = y({}, wc, e.duration);
  return y({
    getAutoHeightDuration: Ec,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: s = t.easeInOut,
        delay: l = 0
      } = i;
      return q(i, bc), (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof a == "string" ? a : No(a)} ${s} ${typeof l == "string" ? l : No(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Cc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Sc = Cc, Pc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Oc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = q(e, Pc);
  if (e.vars)
    throw new Error(Tt(18));
  const s = uc(r), l = zr(e);
  let c = Oe(l, {
    mixins: Gl(l.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: yc.slice(),
    typography: dc(s, i),
    transitions: Tc(o),
    zIndex: y({}, Sc)
  });
  return c = Oe(c, a), c = t.reduce((u, p) => Oe(u, p), c), c.unstable_sxConfig = y({}, Nr, a == null ? void 0 : a.unstable_sxConfig), c.unstable_sx = function(p) {
    return jr({
      sx: p,
      theme: this
    });
  }, c;
}
const Rc = Oc(), Vr = Rc;
function Mi() {
  const e = Oi(Vr);
  return e[Yt] || e;
}
function an({
  props: e,
  name: t
}) {
  return Bl({
    props: e,
    name: t,
    defaultTheme: Vr,
    themeId: Yt
  });
}
const _i = (e) => bn(e) && e !== "classes", $c = _l({
  themeId: Yt,
  defaultTheme: Vr,
  rootShouldForwardProp: _i
}), Le = $c, kc = ["theme"];
function cp(e) {
  let {
    theme: t
  } = e, n = q(e, kc);
  const r = t[Yt];
  return /* @__PURE__ */ W.jsx(Kl, y({}, n, {
    themeId: r ? Yt : void 0,
    theme: r || t
  }));
}
function gr(e, t) {
  return gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, gr(e, t);
}
function Ii(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gr(e, t);
}
const jo = {
  disabled: !1
}, Pn = Fe.createContext(null);
var Ac = function(t) {
  return t.scrollTop;
}, zt = "unmounted", tt = "exited", nt = "entering", yt = "entered", vr = "exiting", He = /* @__PURE__ */ function(e) {
  Ii(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, s = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = tt, i.appearStatus = nt) : l = yt : r.unmountOnExit || r.mountOnEnter ? l = zt : l = tt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === zt ? {
      status: tt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== nt && a !== yt && (i = nt) : (a === nt || a === yt) && (i = vr);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, a, s;
    return i = a = s = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, s = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: s
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === nt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : un.findDOMNode(this);
          a && Ac(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === tt && this.setState({
        status: zt
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [s] : [un.findDOMNode(this), s], c = l[0], u = l[1], p = this.getTimeouts(), d = s ? p.appear : p.enter;
    if (!o && !a || jo.disabled) {
      this.safeSetState({
        status: yt
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: nt
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: yt
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : un.findDOMNode(this);
    if (!i || jo.disabled) {
      this.safeSetState({
        status: tt
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: vr
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: tt
        }, function() {
          o.props.onExited(s);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, i.nextCallback = null, o(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : un.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], c = l[0], u = l[1];
      this.props.addEndListener(c, u);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === zt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = q(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Fe.createElement(Pn.Provider, {
        value: null
      }, typeof a == "function" ? a(o, s) : Fe.cloneElement(Fe.Children.only(a), s))
    );
  }, t;
}(Fe.Component);
He.contextType = Pn;
He.propTypes = {};
function vt() {
}
He.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vt,
  onEntering: vt,
  onEntered: vt,
  onExit: vt,
  onExiting: vt,
  onExited: vt
};
He.UNMOUNTED = zt;
He.EXITED = tt;
He.ENTERING = nt;
He.ENTERED = yt;
He.EXITING = vr;
const Mc = He;
function _c(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hr(e, t) {
  var n = function(i) {
    return t && m.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && m.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Ic(e, t) {
  e = e || {}, t = t || {};
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var c = r[l][a];
        s[r[l][a]] = n(c);
      }
    s[l] = n(l);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = n(o[a]);
  return s;
}
function rt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Bc(e, t) {
  return Hr(e.children, function(n) {
    return m.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: rt(n, "appear", e),
      enter: rt(n, "enter", e),
      exit: rt(n, "exit", e)
    });
  });
}
function Lc(e, t, n) {
  var r = Hr(e.children), o = Ic(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (m.isValidElement(a)) {
      var s = i in t, l = i in r, c = t[i], u = m.isValidElement(c) && !c.props.in;
      l && (!s || u) ? o[i] = m.cloneElement(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }) : !l && s && !u ? o[i] = m.cloneElement(a, {
        in: !1
      }) : l && s && m.isValidElement(c) && (o[i] = m.cloneElement(a, {
        onExited: n.bind(null, a),
        in: c.props.in,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }));
    }
  }), o;
}
var Dc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Nc = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ur = /* @__PURE__ */ function(e) {
  Ii(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(_c(i));
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
    var a = i.children, s = i.handleExited, l = i.firstRender;
    return {
      children: l ? Bc(o, s) : Lc(o, a, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = Hr(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = y({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = q(o, ["component", "childFactory"]), l = this.state.contextValue, c = Dc(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Fe.createElement(Pn.Provider, {
      value: l
    }, c) : /* @__PURE__ */ Fe.createElement(Pn.Provider, {
      value: l
    }, /* @__PURE__ */ Fe.createElement(i, s, c));
  }, t;
}(Fe.Component);
Ur.propTypes = {};
Ur.defaultProps = Nc;
const jc = Ur, zc = (e) => e.scrollTop;
function zo(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
function Fc(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: l,
    timeout: c
  } = e, [u, p] = m.useState(!1), d = Z(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, h = Z(n.child, u && n.childLeaving, r && n.childPulsate);
  return !s && !u && p(!0), m.useEffect(() => {
    if (!s && l != null) {
      const f = setTimeout(l, c);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, s, c]), /* @__PURE__ */ W.jsx("span", {
    className: d,
    style: v,
    children: /* @__PURE__ */ W.jsx("span", {
      className: h
    })
  });
}
const Wc = nn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ee = Wc, Vc = ["center", "classes", "className"];
let Jn = (e) => e, Fo, Wo, Vo, Ho;
const yr = 550, Hc = 80, Uc = Mr(Fo || (Fo = Jn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Kc = Mr(Wo || (Wo = Jn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Gc = Mr(Vo || (Vo = Jn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Xc = Le("span", {
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
}), Yc = Le(Fc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ho || (Ho = Jn`
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
`), Ee.rippleVisible, Uc, yr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ee.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ee.child, Ee.childLeaving, Kc, yr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ee.childPulsate, Gc, ({
  theme: e
}) => e.transitions.easing.easeInOut), qc = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, s = q(r, Vc), [l, c] = m.useState([]), u = m.useRef(0), p = m.useRef(null);
  m.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const d = m.useRef(!1), v = m.useRef(0), h = m.useRef(null), f = m.useRef(null);
  m.useEffect(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const x = m.useCallback((g) => {
    const {
      pulsate: T,
      rippleX: C,
      rippleY: b,
      rippleSize: M,
      cb: O
    } = g;
    c((E) => [...E, /* @__PURE__ */ W.jsx(Yc, {
      classes: {
        ripple: Z(i.ripple, Ee.ripple),
        rippleVisible: Z(i.rippleVisible, Ee.rippleVisible),
        ripplePulsate: Z(i.ripplePulsate, Ee.ripplePulsate),
        child: Z(i.child, Ee.child),
        childLeaving: Z(i.childLeaving, Ee.childLeaving),
        childPulsate: Z(i.childPulsate, Ee.childPulsate)
      },
      timeout: yr,
      pulsate: T,
      rippleX: C,
      rippleY: b,
      rippleSize: M
    }, u.current)]), u.current += 1, p.current = O;
  }, [i]), w = m.useCallback((g = {}, T = {}, C = () => {
  }) => {
    const {
      pulsate: b = !1,
      center: M = o || T.pulsate,
      fakeElement: O = !1
      // For test purposes
    } = T;
    if ((g == null ? void 0 : g.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (d.current = !0);
    const E = O ? null : f.current, R = E ? E.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let _, I, j;
    if (M || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      _ = Math.round(R.width / 2), I = Math.round(R.height / 2);
    else {
      const {
        clientX: $,
        clientY: k
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      _ = Math.round($ - R.left), I = Math.round(k - R.top);
    }
    if (M)
      j = Math.sqrt((2 * R.width ** 2 + R.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const $ = Math.max(Math.abs((E ? E.clientWidth : 0) - _), _) * 2 + 2, k = Math.max(Math.abs((E ? E.clientHeight : 0) - I), I) * 2 + 2;
      j = Math.sqrt($ ** 2 + k ** 2);
    }
    g != null && g.touches ? h.current === null && (h.current = () => {
      x({
        pulsate: b,
        rippleX: _,
        rippleY: I,
        rippleSize: j,
        cb: C
      });
    }, v.current = setTimeout(() => {
      h.current && (h.current(), h.current = null);
    }, Hc)) : x({
      pulsate: b,
      rippleX: _,
      rippleY: I,
      rippleSize: j,
      cb: C
    });
  }, [o, x]), P = m.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), S = m.useCallback((g, T) => {
    if (clearTimeout(v.current), (g == null ? void 0 : g.type) === "touchend" && h.current) {
      h.current(), h.current = null, v.current = setTimeout(() => {
        S(g, T);
      });
      return;
    }
    h.current = null, c((C) => C.length > 0 ? C.slice(1) : C), p.current = T;
  }, []);
  return m.useImperativeHandle(n, () => ({
    pulsate: P,
    start: w,
    stop: S
  }), [P, w, S]), /* @__PURE__ */ W.jsx(Xc, y({
    className: Z(Ee.root, i.root, a),
    ref: f
  }, s, {
    children: /* @__PURE__ */ W.jsx(jc, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), Zc = qc;
function Jc(e) {
  return tn("MuiButtonBase", e);
}
const Qc = nn("MuiButtonBase", ["root", "disabled", "focusVisible"]), eu = Qc, tu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], nu = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = Hn({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Jc, o);
  return n && r && (a.root += ` ${r}`), a;
}, ru = Le("button", {
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
  [`&.${eu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ou = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: c = !1,
    disableRipple: u = !1,
    disableTouchRipple: p = !1,
    focusRipple: d = !1,
    LinkComponent: v = "a",
    onBlur: h,
    onClick: f,
    onContextMenu: x,
    onDragLeave: w,
    onFocus: P,
    onFocusVisible: S,
    onKeyDown: g,
    onKeyUp: T,
    onMouseDown: C,
    onMouseLeave: b,
    onMouseUp: M,
    onTouchEnd: O,
    onTouchMove: E,
    onTouchStart: R,
    tabIndex: _ = 0,
    TouchRippleProps: I,
    touchRippleRef: j,
    type: $
  } = r, k = q(r, tu), L = m.useRef(null), V = m.useRef(null), U = Qe(V, j), {
    isFocusVisibleRef: re,
    onFocus: Ue,
    onBlur: De,
    ref: Ne
  } = Ti(), [Q, ie] = m.useState(!1);
  c && Q && ie(!1), m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ie(!0), L.current.focus();
    }
  }), []);
  const [ve, Re] = m.useState(!1);
  m.useEffect(() => {
    Re(!0);
  }, []);
  const ee = ve && !u && !c;
  m.useEffect(() => {
    Q && d && !u && ve && V.current.pulsate();
  }, [u, d, Q, ve]);
  function X(A, we, kt = p) {
    return jt((qe) => (we && we(qe), !kt && V.current && V.current[A](qe), !0));
  }
  const Ke = X("start", C), ye = X("stop", x), $t = X("stop", w), st = X("stop", M), lt = X("stop", (A) => {
    Q && A.preventDefault(), b && b(A);
  }), be = X("start", R), Ge = X("stop", O), ct = X("stop", E), je = X("stop", (A) => {
    De(A), re.current === !1 && ie(!1), h && h(A);
  }, !1), ut = jt((A) => {
    L.current || (L.current = A.currentTarget), Ue(A), re.current === !0 && (ie(!0), S && S(A)), P && P(A);
  }), ae = () => {
    const A = L.current;
    return l && l !== "button" && !(A.tagName === "A" && A.href);
  }, $e = m.useRef(!1), ze = jt((A) => {
    d && !$e.current && Q && V.current && A.key === " " && ($e.current = !0, V.current.stop(A, () => {
      V.current.start(A);
    })), A.target === A.currentTarget && ae() && A.key === " " && A.preventDefault(), g && g(A), A.target === A.currentTarget && ae() && A.key === "Enter" && !c && (A.preventDefault(), f && f(A));
  }), Xe = jt((A) => {
    d && A.key === " " && V.current && Q && !A.defaultPrevented && ($e.current = !1, V.current.stop(A, () => {
      V.current.pulsate(A);
    })), T && T(A), f && A.target === A.currentTarget && ae() && A.key === " " && !A.defaultPrevented && f(A);
  });
  let ue = l;
  ue === "button" && (k.href || k.to) && (ue = v);
  const fe = {};
  ue === "button" ? (fe.type = $ === void 0 ? "button" : $, fe.disabled = c) : (!k.href && !k.to && (fe.role = "button"), c && (fe["aria-disabled"] = c));
  const xe = Qe(n, Ne, L), Ye = y({}, r, {
    centerRipple: i,
    component: l,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: p,
    focusRipple: d,
    tabIndex: _,
    focusVisible: Q
  }), ft = nu(Ye);
  return /* @__PURE__ */ W.jsxs(ru, y({
    as: ue,
    className: Z(ft.root, s),
    ownerState: Ye,
    onBlur: je,
    onClick: f,
    onContextMenu: ye,
    onFocus: ut,
    onKeyDown: ze,
    onKeyUp: Xe,
    onMouseDown: Ke,
    onMouseLeave: lt,
    onMouseUp: st,
    onDragLeave: $t,
    onTouchEnd: Ge,
    onTouchMove: ct,
    onTouchStart: be,
    ref: xe,
    tabIndex: c ? -1 : _,
    type: $
  }, fe, k, {
    children: [a, ee ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ W.jsx(Zc, y({
        ref: U,
        center: i
      }, I))
    ) : null]
  }));
}), iu = ou;
function au(e) {
  return typeof e == "string";
}
function Ft(e, t, n) {
  return e === void 0 || au(e) ? t : y({}, t, {
    ownerState: y({}, t.ownerState, n)
  });
}
const su = {
  disableDefaultClasses: !1
}, lu = /* @__PURE__ */ m.createContext(su);
function cu(e) {
  const {
    disableDefaultClasses: t
  } = m.useContext(lu);
  return (n) => t ? "" : e(n);
}
function uu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function fu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Uo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function pu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = Z(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = y({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = y({}, n, o, r);
    return v.length > 0 && (f.className = v), Object.keys(h).length > 0 && (f.style = h), {
      props: f,
      internalRef: void 0
    };
  }
  const a = uu(y({}, o, r)), s = Uo(r), l = Uo(o), c = t(a), u = Z(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = y({}, c == null ? void 0 : c.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), d = y({}, c, n, l, s);
  return u.length > 0 && (d.className = u), Object.keys(p).length > 0 && (d.style = p), {
    props: d,
    internalRef: c.ref
  };
}
const du = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function mu(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = q(e, du), s = i ? {} : fu(r, o), {
    props: l,
    internalRef: c
  } = pu(y({}, a, {
    externalSlotProps: s
  })), u = Qe(c, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Ft(n, y({}, l, {
    ref: u
  }), o);
}
var se = "top", Ce = "bottom", Se = "right", le = "left", Kr = "auto", sn = [se, Ce, Se, le], Ct = "start", Zt = "end", hu = "clippingParents", Bi = "viewport", Dt = "popper", gu = "reference", Ko = /* @__PURE__ */ sn.reduce(function(e, t) {
  return e.concat([t + "-" + Ct, t + "-" + Zt]);
}, []), Li = /* @__PURE__ */ [].concat(sn, [Kr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ct, t + "-" + Zt]);
}, []), vu = "beforeRead", yu = "read", bu = "afterRead", xu = "beforeMain", wu = "main", Eu = "afterMain", Tu = "beforeWrite", Cu = "write", Su = "afterWrite", Pu = [vu, yu, bu, xu, wu, Eu, Tu, Cu, Su];
function Be(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function he(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function at(e) {
  var t = he(e).Element;
  return e instanceof t || e instanceof Element;
}
function Te(e) {
  var t = he(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = he(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ou(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Te(i) || !Be(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Ru(e) {
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
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = a.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Te(o) || !Be(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const $u = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ou,
  effect: Ru,
  requires: ["computeStyles"]
};
function Ie(e) {
  return e.split("-")[0];
}
var ot = Math.max, On = Math.min, St = Math.round;
function br() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Di() {
  return !/^((?!chrome|android).)*safari/i.test(br());
}
function Pt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Te(e) && (o = e.offsetWidth > 0 && St(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && St(r.height) / e.offsetHeight || 1);
  var a = at(e) ? he(e) : window, s = a.visualViewport, l = !Di() && n, c = (r.left + (l && s ? s.offsetLeft : 0)) / o, u = (r.top + (l && s ? s.offsetTop : 0)) / i, p = r.width / o, d = r.height / i;
  return {
    width: p,
    height: d,
    top: u,
    right: c + p,
    bottom: u + d,
    left: c,
    x: c,
    y: u
  };
}
function Xr(e) {
  var t = Pt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ni(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Gr(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ve(e) {
  return he(e).getComputedStyle(e);
}
function ku(e) {
  return ["table", "td", "th"].indexOf(Be(e)) >= 0;
}
function et(e) {
  return ((at(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Qn(e) {
  return Be(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Gr(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    et(e)
  );
}
function Go(e) {
  return !Te(e) || // https://github.com/popperjs/popper-core/issues/837
  Ve(e).position === "fixed" ? null : e.offsetParent;
}
function Au(e) {
  var t = /firefox/i.test(br()), n = /Trident/i.test(br());
  if (n && Te(e)) {
    var r = Ve(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Qn(e);
  for (Gr(o) && (o = o.host); Te(o) && ["html", "body"].indexOf(Be(o)) < 0; ) {
    var i = Ve(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ln(e) {
  for (var t = he(e), n = Go(e); n && ku(n) && Ve(n).position === "static"; )
    n = Go(n);
  return n && (Be(n) === "html" || Be(n) === "body" && Ve(n).position === "static") ? t : n || Au(e) || t;
}
function Yr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vt(e, t, n) {
  return ot(e, On(t, n));
}
function Mu(e, t, n) {
  var r = Vt(e, t, n);
  return r > n ? n : r;
}
function ji() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function zi(e) {
  return Object.assign({}, ji(), e);
}
function Fi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var _u = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, zi(typeof t != "number" ? t : Fi(t, sn));
};
function Iu(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Ie(n.placement), l = Yr(s), c = [le, Se].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !a)) {
    var p = _u(o.padding, n), d = Xr(i), v = l === "y" ? se : le, h = l === "y" ? Ce : Se, f = n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u], x = a[l] - n.rects.reference[l], w = ln(i), P = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, S = f / 2 - x / 2, g = p[v], T = P - d[u] - p[h], C = P / 2 - d[u] / 2 + S, b = Vt(g, C, T), M = l;
    n.modifiersData[r] = (t = {}, t[M] = b, t.centerOffset = b - C, t);
  }
}
function Bu(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ni(t.elements.popper, o) && (t.elements.arrow = o));
}
const Lu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Iu,
  effect: Bu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ot(e) {
  return e.split("-")[1];
}
var Du = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Nu(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: St(n * o) / o || 0,
    y: St(r * o) / o || 0
  };
}
function Xo(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, p = e.isFixed, d = a.x, v = d === void 0 ? 0 : d, h = a.y, f = h === void 0 ? 0 : h, x = typeof u == "function" ? u({
    x: v,
    y: f
  }) : {
    x: v,
    y: f
  };
  v = x.x, f = x.y;
  var w = a.hasOwnProperty("x"), P = a.hasOwnProperty("y"), S = le, g = se, T = window;
  if (c) {
    var C = ln(n), b = "clientHeight", M = "clientWidth";
    if (C === he(n) && (C = et(n), Ve(C).position !== "static" && s === "absolute" && (b = "scrollHeight", M = "scrollWidth")), C = C, o === se || (o === le || o === Se) && i === Zt) {
      g = Ce;
      var O = p && C === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[b]
      );
      f -= O - r.height, f *= l ? 1 : -1;
    }
    if (o === le || (o === se || o === Ce) && i === Zt) {
      S = Se;
      var E = p && C === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[M]
      );
      v -= E - r.width, v *= l ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: s
  }, c && Du), _ = u === !0 ? Nu({
    x: v,
    y: f
  }, he(n)) : {
    x: v,
    y: f
  };
  if (v = _.x, f = _.y, l) {
    var I;
    return Object.assign({}, R, (I = {}, I[g] = P ? "0" : "", I[S] = w ? "0" : "", I.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + f + "px)" : "translate3d(" + v + "px, " + f + "px, 0)", I));
  }
  return Object.assign({}, R, (t = {}, t[g] = P ? f + "px" : "", t[S] = w ? v + "px" : "", t.transform = "", t));
}
function ju(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Ie(t.placement),
    variation: Ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xo(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xo(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const zu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ju,
  data: {}
};
var pn = {
  passive: !0
};
function Fu(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = he(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, pn);
  }), s && l.addEventListener("resize", n.update, pn), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, pn);
    }), s && l.removeEventListener("resize", n.update, pn);
  };
}
const Wu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Fu,
  data: {}
};
var Vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Vu[t];
  });
}
var Hu = {
  start: "end",
  end: "start"
};
function Yo(e) {
  return e.replace(/start|end/g, function(t) {
    return Hu[t];
  });
}
function qr(e) {
  var t = he(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Zr(e) {
  return Pt(et(e)).left + qr(e).scrollLeft;
}
function Uu(e, t) {
  var n = he(e), r = et(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var c = Di();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Zr(e),
    y: l
  };
}
function Ku(e) {
  var t, n = et(e), r = qr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = ot(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = ot(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Zr(e), l = -r.scrollTop;
  return Ve(o || n).direction === "rtl" && (s += ot(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Jr(e) {
  var t = Ve(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Wi(e) {
  return ["html", "body", "#document"].indexOf(Be(e)) >= 0 ? e.ownerDocument.body : Te(e) && Jr(e) ? e : Wi(Qn(e));
}
function Ht(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Wi(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = he(r), a = o ? [i].concat(i.visualViewport || [], Jr(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ht(Qn(a)))
  );
}
function xr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Gu(e, t) {
  var n = Pt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qo(e, t, n) {
  return t === Bi ? xr(Uu(e, n)) : at(t) ? Gu(t, n) : xr(Ku(et(e)));
}
function Xu(e) {
  var t = Ht(Qn(e)), n = ["absolute", "fixed"].indexOf(Ve(e).position) >= 0, r = n && Te(e) ? ln(e) : e;
  return at(r) ? t.filter(function(o) {
    return at(o) && Ni(o, r) && Be(o) !== "body";
  }) : [];
}
function Yu(e, t, n, r) {
  var o = t === "clippingParents" ? Xu(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, c) {
    var u = qo(e, c, r);
    return l.top = ot(u.top, l.top), l.right = On(u.right, l.right), l.bottom = On(u.bottom, l.bottom), l.left = ot(u.left, l.left), l;
  }, qo(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Vi(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ie(r) : null, i = r ? Ot(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case se:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ce:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Se:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case le:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? Yr(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Ct:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Zt:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Jt(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? hu : s, c = n.rootBoundary, u = c === void 0 ? Bi : c, p = n.elementContext, d = p === void 0 ? Dt : p, v = n.altBoundary, h = v === void 0 ? !1 : v, f = n.padding, x = f === void 0 ? 0 : f, w = zi(typeof x != "number" ? x : Fi(x, sn)), P = d === Dt ? gu : Dt, S = e.rects.popper, g = e.elements[h ? P : d], T = Yu(at(g) ? g : g.contextElement || et(e.elements.popper), l, u, a), C = Pt(e.elements.reference), b = Vi({
    reference: C,
    element: S,
    strategy: "absolute",
    placement: o
  }), M = xr(Object.assign({}, S, b)), O = d === Dt ? M : C, E = {
    top: T.top - O.top + w.top,
    bottom: O.bottom - T.bottom + w.bottom,
    left: T.left - O.left + w.left,
    right: O.right - T.right + w.right
  }, R = e.modifiersData.offset;
  if (d === Dt && R) {
    var _ = R[o];
    Object.keys(E).forEach(function(I) {
      var j = [Se, Ce].indexOf(I) >= 0 ? 1 : -1, $ = [se, Ce].indexOf(I) >= 0 ? "y" : "x";
      E[I] += _[$] * j;
    });
  }
  return E;
}
function qu(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Li : l, u = Ot(r), p = u ? s ? Ko : Ko.filter(function(h) {
    return Ot(h) === u;
  }) : sn, d = p.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  d.length === 0 && (d = p);
  var v = d.reduce(function(h, f) {
    return h[f] = Jt(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Ie(f)], h;
  }, {});
  return Object.keys(v).sort(function(h, f) {
    return v[h] - v[f];
  });
}
function Zu(e) {
  if (Ie(e) === Kr)
    return [];
  var t = wn(e);
  return [Yo(e), t, Yo(t)];
}
function Ju(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, h = v === void 0 ? !0 : v, f = n.allowedAutoPlacements, x = t.options.placement, w = Ie(x), P = w === x, S = l || (P || !h ? [wn(x)] : Zu(x)), g = [x].concat(S).reduce(function(Q, ie) {
      return Q.concat(Ie(ie) === Kr ? qu(t, {
        placement: ie,
        boundary: u,
        rootBoundary: p,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: f
      }) : ie);
    }, []), T = t.rects.reference, C = t.rects.popper, b = /* @__PURE__ */ new Map(), M = !0, O = g[0], E = 0; E < g.length; E++) {
      var R = g[E], _ = Ie(R), I = Ot(R) === Ct, j = [se, Ce].indexOf(_) >= 0, $ = j ? "width" : "height", k = Jt(t, {
        placement: R,
        boundary: u,
        rootBoundary: p,
        altBoundary: d,
        padding: c
      }), L = j ? I ? Se : le : I ? Ce : se;
      T[$] > C[$] && (L = wn(L));
      var V = wn(L), U = [];
      if (i && U.push(k[_] <= 0), s && U.push(k[L] <= 0, k[V] <= 0), U.every(function(Q) {
        return Q;
      })) {
        O = R, M = !1;
        break;
      }
      b.set(R, U);
    }
    if (M)
      for (var re = h ? 3 : 1, Ue = function(ie) {
        var ve = g.find(function(Re) {
          var ee = b.get(Re);
          if (ee)
            return ee.slice(0, ie).every(function(X) {
              return X;
            });
        });
        if (ve)
          return O = ve, "break";
      }, De = re; De > 0; De--) {
        var Ne = Ue(De);
        if (Ne === "break")
          break;
      }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Qu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ju,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Zo(e, t, n) {
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
function Jo(e) {
  return [se, Se, Ce, le].some(function(t) {
    return e[t] >= 0;
  });
}
function ef(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Jt(t, {
    elementContext: "reference"
  }), s = Jt(t, {
    altBoundary: !0
  }), l = Zo(a, r), c = Zo(s, o, i), u = Jo(l), p = Jo(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": p
  });
}
const tf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ef
};
function nf(e, t, n) {
  var r = Ie(e), o = [le, se].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [le, Se].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function rf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Li.reduce(function(u, p) {
    return u[p] = nf(p, t.rects, i), u;
  }, {}), s = a[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
}
const of = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: rf
};
function af(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Vi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const sf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: af,
  data: {}
};
function lf(e) {
  return e === "x" ? "y" : "x";
}
function cf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, p = n.padding, d = n.tether, v = d === void 0 ? !0 : d, h = n.tetherOffset, f = h === void 0 ? 0 : h, x = Jt(t, {
    boundary: l,
    rootBoundary: c,
    padding: p,
    altBoundary: u
  }), w = Ie(t.placement), P = Ot(t.placement), S = !P, g = Yr(w), T = lf(g), C = t.modifiersData.popperOffsets, b = t.rects.reference, M = t.rects.popper, O = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, E = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (C) {
    if (i) {
      var I, j = g === "y" ? se : le, $ = g === "y" ? Ce : Se, k = g === "y" ? "height" : "width", L = C[g], V = L + x[j], U = L - x[$], re = v ? -M[k] / 2 : 0, Ue = P === Ct ? b[k] : M[k], De = P === Ct ? -M[k] : -b[k], Ne = t.elements.arrow, Q = v && Ne ? Xr(Ne) : {
        width: 0,
        height: 0
      }, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ji(), ve = ie[j], Re = ie[$], ee = Vt(0, b[k], Q[k]), X = S ? b[k] / 2 - re - ee - ve - E.mainAxis : Ue - ee - ve - E.mainAxis, Ke = S ? -b[k] / 2 + re + ee + Re + E.mainAxis : De + ee + Re + E.mainAxis, ye = t.elements.arrow && ln(t.elements.arrow), $t = ye ? g === "y" ? ye.clientTop || 0 : ye.clientLeft || 0 : 0, st = (I = R == null ? void 0 : R[g]) != null ? I : 0, lt = L + X - st - $t, be = L + Ke - st, Ge = Vt(v ? On(V, lt) : V, L, v ? ot(U, be) : U);
      C[g] = Ge, _[g] = Ge - L;
    }
    if (s) {
      var ct, je = g === "x" ? se : le, ut = g === "x" ? Ce : Se, ae = C[T], $e = T === "y" ? "height" : "width", ze = ae + x[je], Xe = ae - x[ut], ue = [se, le].indexOf(w) !== -1, fe = (ct = R == null ? void 0 : R[T]) != null ? ct : 0, xe = ue ? ze : ae - b[$e] - M[$e] - fe + E.altAxis, Ye = ue ? ae + b[$e] + M[$e] - fe - E.altAxis : Xe, ft = v && ue ? Mu(xe, ae, Ye) : Vt(v ? xe : ze, ae, v ? Ye : Xe);
      C[T] = ft, _[T] = ft - ae;
    }
    t.modifiersData[r] = _;
  }
}
const uf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: cf,
  requiresIfExists: ["offset"]
};
function ff(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function pf(e) {
  return e === he(e) || !Te(e) ? qr(e) : ff(e);
}
function df(e) {
  var t = e.getBoundingClientRect(), n = St(t.width) / e.offsetWidth || 1, r = St(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function mf(e, t, n) {
  n === void 0 && (n = !1);
  var r = Te(t), o = Te(t) && df(t), i = et(t), a = Pt(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Be(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jr(i)) && (s = pf(t)), Te(t) ? (l = Pt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Zr(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function hf(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function gf(e) {
  var t = hf(e);
  return Pu.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function vf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function yf(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Qo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ei() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function bf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Qo : o;
  return function(s, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Qo, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], d = !1, v = {
      state: u,
      setOptions: function(w) {
        var P = typeof w == "function" ? w(u.options) : w;
        f(), u.options = Object.assign({}, i, u.options, P), u.scrollParents = {
          reference: at(s) ? Ht(s) : s.contextElement ? Ht(s.contextElement) : [],
          popper: Ht(l)
        };
        var S = gf(yf([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(g) {
          return g.enabled;
        }), h(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var w = u.elements, P = w.reference, S = w.popper;
          if (ei(P, S)) {
            u.rects = {
              reference: mf(P, ln(S), u.options.strategy === "fixed"),
              popper: Xr(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
              return u.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var g = 0; g < u.orderedModifiers.length; g++) {
              if (u.reset === !0) {
                u.reset = !1, g = -1;
                continue;
              }
              var T = u.orderedModifiers[g], C = T.fn, b = T.options, M = b === void 0 ? {} : b, O = T.name;
              typeof C == "function" && (u = C({
                state: u,
                options: M,
                name: O,
                instance: v
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: vf(function() {
        return new Promise(function(x) {
          v.forceUpdate(), x(u);
        });
      }),
      destroy: function() {
        f(), d = !0;
      }
    };
    if (!ei(s, l))
      return v;
    v.setOptions(c).then(function(x) {
      !d && c.onFirstUpdate && c.onFirstUpdate(x);
    });
    function h() {
      u.orderedModifiers.forEach(function(x) {
        var w = x.name, P = x.options, S = P === void 0 ? {} : P, g = x.effect;
        if (typeof g == "function") {
          var T = g({
            state: u,
            name: w,
            instance: v,
            options: S
          }), C = function() {
          };
          p.push(T || C);
        }
      });
    }
    function f() {
      p.forEach(function(x) {
        return x();
      }), p = [];
    }
    return v;
  };
}
var xf = [Wu, sf, zu, $u, of, Qu, uf, Lu, tf], wf = /* @__PURE__ */ bf({
  defaultModifiers: xf
});
function Ef(e) {
  return typeof e == "function" ? e() : e;
}
const Tf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = m.useState(null), l = Qe(/* @__PURE__ */ m.isValidElement(r) ? r.ref : null, n);
  if (Xt(() => {
    i || s(Ef(o) || document.body);
  }, [o, i]), Xt(() => {
    if (a && !i)
      return dr(n, a), () => {
        dr(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const c = {
        ref: l
      };
      return /* @__PURE__ */ m.cloneElement(r, c);
    }
    return /* @__PURE__ */ W.jsx(m.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ W.jsx(m.Fragment, {
    children: a && /* @__PURE__ */ ia.createPortal(r, a)
  });
});
function Cf(e) {
  return tn("MuiPopper", e);
}
nn("MuiPopper", ["root"]);
const Sf = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Pf = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Of(e, t) {
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
function wr(e) {
  return typeof e == "function" ? e() : e;
}
function Rf(e) {
  return e.nodeType !== void 0;
}
const $f = () => Hn({
  root: ["root"]
}, cu(Cf)), kf = {}, Af = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: p,
    popperRef: d,
    slotProps: v = {},
    slots: h = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, x = q(t, Sf), w = m.useRef(null), P = Qe(w, n), S = m.useRef(null), g = Qe(S, d), T = m.useRef(g);
  Xt(() => {
    T.current = g;
  }, [g]), m.useImperativeHandle(d, () => S.current, []);
  const C = Of(u, a), [b, M] = m.useState(C), [O, E] = m.useState(wr(o));
  m.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), m.useEffect(() => {
    o && E(wr(o));
  }, [o]), Xt(() => {
    if (!O || !c)
      return;
    const $ = (V) => {
      M(V.placement);
    };
    let k = [{
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
        state: V
      }) => {
        $(V);
      }
    }];
    l != null && (k = k.concat(l)), p && p.modifiers != null && (k = k.concat(p.modifiers));
    const L = wf(O, w.current, y({
      placement: C
    }, p, {
      modifiers: k
    }));
    return T.current(L), () => {
      L.destroy(), T.current(null);
    };
  }, [O, s, l, c, p, C]);
  const R = {
    placement: b
  };
  f !== null && (R.TransitionProps = f);
  const _ = $f(), I = (r = h.root) != null ? r : "div", j = mu({
    elementType: I,
    externalSlotProps: v.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: _.root
  });
  return /* @__PURE__ */ W.jsx(I, y({}, j, {
    children: typeof i == "function" ? i(R) : i
  }));
}), Mf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: s = !1,
    keepMounted: l = !1,
    modifiers: c,
    open: u,
    placement: p = "bottom",
    popperOptions: d = kf,
    popperRef: v,
    style: h,
    transition: f = !1,
    slotProps: x = {},
    slots: w = {}
  } = t, P = q(t, Pf), [S, g] = m.useState(!0), T = () => {
    g(!1);
  }, C = () => {
    g(!0);
  };
  if (!l && !u && (!f || S))
    return null;
  let b;
  if (i)
    b = i;
  else if (r) {
    const E = wr(r);
    b = E && Rf(E) ? xo(E).body : xo(null).body;
  }
  const M = !u && l && (!f || S) ? "none" : void 0, O = f ? {
    in: u,
    onEnter: T,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ W.jsx(Tf, {
    disablePortal: s,
    container: b,
    children: /* @__PURE__ */ W.jsx(Af, y({
      anchorEl: r,
      direction: a,
      disablePortal: s,
      modifiers: c,
      ref: n,
      open: f ? !S : u,
      placement: p,
      popperOptions: d,
      popperRef: v,
      slotProps: x,
      slots: w
    }, P, {
      style: y({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: M
      }, h),
      TransitionProps: O,
      children: o
    }))
  });
}), _f = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], If = Le(Mf, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Bf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const o = Fr(), i = an({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: p,
    keepMounted: d,
    modifiers: v,
    open: h,
    placement: f,
    popperOptions: x,
    popperRef: w,
    transition: P,
    slots: S,
    slotProps: g
  } = i, T = q(i, _f), C = (r = S == null ? void 0 : S.root) != null ? r : l == null ? void 0 : l.Root, b = y({
    anchorEl: a,
    container: u,
    disablePortal: p,
    keepMounted: d,
    modifiers: v,
    open: h,
    placement: f,
    popperOptions: x,
    popperRef: w,
    transition: P
  }, T);
  return /* @__PURE__ */ W.jsx(If, y({
    as: s,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: C
    },
    slotProps: g ?? c
  }, b, {
    ref: n
  }));
}), Hi = Bf;
function Lf(e) {
  return tn("MuiButton", e);
}
const Df = nn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), dn = Df, Nf = /* @__PURE__ */ m.createContext({}), jf = Nf, zf = /* @__PURE__ */ m.createContext(void 0), Ff = zf, Wf = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Vf = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${ne(t)}`, `size${ne(o)}`, `${i}Size${ne(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${ne(o)}`],
    endIcon: ["endIcon", `iconSize${ne(o)}`]
  }, l = Hn(s, Lf, a);
  return y({}, a, l);
}, Ui = (e) => y({}, e.size === "small" && {
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
}), Hf = Le(iu, {
  shouldForwardProp: (e) => _i(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${ne(n.color)}`], t[`size${ne(n.size)}`], t[`${n.variant}Size${ne(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return y({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": y({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : bt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : bt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : bt(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${dn.focusVisible}`]: y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${dn.disabled}`]: y({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${bt(e.palette[t.color].main, 0.5)}`
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
  [`&.${dn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${dn.disabled}`]: {
    boxShadow: "none"
  }
}), Uf = Le("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${ne(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ui(e))), Kf = Le("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${ne(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ui(e))), Gf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(jf), o = m.useContext(Ff), i = _r(r, t), a = an({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: p = !1,
    disableElevation: d = !1,
    disableFocusRipple: v = !1,
    endIcon: h,
    focusVisibleClassName: f,
    fullWidth: x = !1,
    size: w = "medium",
    startIcon: P,
    type: S,
    variant: g = "text"
  } = a, T = q(a, Wf), C = y({}, a, {
    color: l,
    component: c,
    disabled: p,
    disableElevation: d,
    disableFocusRipple: v,
    fullWidth: x,
    size: w,
    type: S,
    variant: g
  }), b = Vf(C), M = P && /* @__PURE__ */ W.jsx(Uf, {
    className: b.startIcon,
    ownerState: C,
    children: P
  }), O = h && /* @__PURE__ */ W.jsx(Kf, {
    className: b.endIcon,
    ownerState: C,
    children: h
  }), E = o || "";
  return /* @__PURE__ */ W.jsxs(Hf, y({
    ownerState: C,
    className: Z(r.className, b.root, u, E),
    component: c,
    disabled: p,
    focusRipple: !v,
    focusVisibleClassName: Z(b.focusVisible, f),
    ref: n,
    type: S
  }, T, {
    classes: b,
    children: [M, s, O]
  }));
}), up = Gf, Xf = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Er(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Yf = {
  entering: {
    opacity: 1,
    transform: Er(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, sr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ki = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: l,
    onEntered: c,
    onEntering: u,
    onExit: p,
    onExited: d,
    onExiting: v,
    style: h,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Mc
  } = t, w = q(t, Xf), P = m.useRef(), S = m.useRef(), g = Mi(), T = m.useRef(null), C = Qe(T, i.ref, n), b = ($) => (k) => {
    if ($) {
      const L = T.current;
      k === void 0 ? $(L) : $(L, k);
    }
  }, M = b(u), O = b(($, k) => {
    zc($);
    const {
      duration: L,
      delay: V,
      easing: U
    } = zo({
      style: h,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let re;
    f === "auto" ? (re = g.transitions.getAutoHeightDuration($.clientHeight), S.current = re) : re = L, $.style.transition = [g.transitions.create("opacity", {
      duration: re,
      delay: V
    }), g.transitions.create("transform", {
      duration: sr ? re : re * 0.666,
      delay: V,
      easing: U
    })].join(","), l && l($, k);
  }), E = b(c), R = b(v), _ = b(($) => {
    const {
      duration: k,
      delay: L,
      easing: V
    } = zo({
      style: h,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let U;
    f === "auto" ? (U = g.transitions.getAutoHeightDuration($.clientHeight), S.current = U) : U = k, $.style.transition = [g.transitions.create("opacity", {
      duration: U,
      delay: L
    }), g.transitions.create("transform", {
      duration: sr ? U : U * 0.666,
      delay: sr ? L : L || U * 0.333,
      easing: V
    })].join(","), $.style.opacity = 0, $.style.transform = Er(0.75), p && p($);
  }), I = b(d), j = ($) => {
    f === "auto" && (P.current = setTimeout($, S.current || 0)), r && r(T.current, $);
  };
  return m.useEffect(() => () => {
    clearTimeout(P.current);
  }, []), /* @__PURE__ */ W.jsx(x, y({
    appear: o,
    in: s,
    nodeRef: T,
    onEnter: O,
    onEntered: E,
    onEntering: M,
    onExit: _,
    onExited: I,
    onExiting: R,
    addEndListener: j,
    timeout: f === "auto" ? null : f
  }, w, {
    children: ($, k) => /* @__PURE__ */ m.cloneElement(i, y({
      style: y({
        opacity: 0,
        transform: Er(0.75),
        visibility: $ === "exited" && !s ? "hidden" : void 0
      }, Yf[$], h, i.props.style),
      ref: C
    }, k))
  }));
});
Ki.muiSupportAuto = !0;
const ti = Ki;
function qf(e) {
  return tn("MuiTooltip", e);
}
const Zf = nn("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Je = Zf, Jf = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Qf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ep = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ne(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Hn(a, qf, t);
}, tp = Le(Hi, {
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
}) => y({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Je.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Je.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Je.arrow}`]: y({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Je.arrow}`]: y({}, t.isRtl ? {
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
})), np = Le("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ne(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : bt(e.palette.grey[700], 0.92),
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
  lineHeight: `${Qf(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Je.popper}[data-popper-placement*="left"] &`]: y({
    transformOrigin: "right center"
  }, t.isRtl ? y({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : y({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Je.popper}[data-popper-placement*="right"] &`]: y({
    transformOrigin: "left center"
  }, t.isRtl ? y({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : y({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Je.popper}[data-popper-placement*="top"] &`]: y({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Je.popper}[data-popper-placement*="bottom"] &`]: y({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), rp = Le("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : bt(e.palette.grey[700], 0.9),
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
let mn = !1, lr = null, Nt = {
  x: 0,
  y: 0
};
function hn(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const op = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, o, i, a, s, l, c, u, p, d, v, h, f, x, w, P, S, g, T;
  const C = an({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: b = !1,
    children: M,
    components: O = {},
    componentsProps: E = {},
    describeChild: R = !1,
    disableFocusListener: _ = !1,
    disableHoverListener: I = !1,
    disableInteractive: j = !1,
    disableTouchListener: $ = !1,
    enterDelay: k = 100,
    enterNextDelay: L = 0,
    enterTouchDelay: V = 700,
    followCursor: U = !1,
    id: re,
    leaveDelay: Ue = 0,
    leaveTouchDelay: De = 1500,
    onClose: Ne,
    onOpen: Q,
    open: ie,
    placement: ve = "bottom",
    PopperComponent: Re,
    PopperProps: ee = {},
    slotProps: X = {},
    slots: Ke = {},
    title: ye,
    TransitionComponent: $t = ti,
    TransitionProps: st
  } = C, lt = q(C, Jf), be = /* @__PURE__ */ m.isValidElement(M) ? M : /* @__PURE__ */ W.jsx("span", {
    children: M
  }), Ge = Mi(), ct = Ge.direction === "rtl", [je, ut] = m.useState(), [ae, $e] = m.useState(null), ze = m.useRef(!1), Xe = j || U, ue = m.useRef(), fe = m.useRef(), xe = m.useRef(), Ye = m.useRef(), [ft, A] = ls({
    controlled: ie,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let we = ft;
  const kt = ss(re), qe = m.useRef(), At = m.useCallback(() => {
    qe.current !== void 0 && (document.body.style.WebkitUserSelect = qe.current, qe.current = void 0), clearTimeout(Ye.current);
  }, []);
  m.useEffect(() => () => {
    clearTimeout(ue.current), clearTimeout(fe.current), clearTimeout(xe.current), At();
  }, [At]);
  const Qr = (B) => {
    clearTimeout(lr), mn = !0, A(!0), Q && !we && Q(B);
  }, cn = jt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (B) => {
      clearTimeout(lr), lr = setTimeout(() => {
        mn = !1;
      }, 800 + Ue), A(!1), Ne && we && Ne(B), clearTimeout(ue.current), ue.current = setTimeout(() => {
        ze.current = !1;
      }, Ge.transitions.duration.shortest);
    }
  ), er = (B) => {
    ze.current && B.type !== "touchstart" || (je && je.removeAttribute("title"), clearTimeout(fe.current), clearTimeout(xe.current), k || mn && L ? fe.current = setTimeout(() => {
      Qr(B);
    }, mn ? L : k) : Qr(B));
  }, eo = (B) => {
    clearTimeout(fe.current), clearTimeout(xe.current), xe.current = setTimeout(() => {
      cn(B);
    }, Ue);
  }, {
    isFocusVisibleRef: to,
    onBlur: Gi,
    onFocus: Xi,
    ref: Yi
  } = Ti(), [, no] = m.useState(!1), ro = (B) => {
    Gi(B), to.current === !1 && (no(!1), eo(B));
  }, oo = (B) => {
    je || ut(B.currentTarget), Xi(B), to.current === !0 && (no(!0), er(B));
  }, io = (B) => {
    ze.current = !0;
    const pe = be.props;
    pe.onTouchStart && pe.onTouchStart(B);
  }, ao = er, so = eo, qi = (B) => {
    io(B), clearTimeout(xe.current), clearTimeout(ue.current), At(), qe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ye.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = qe.current, er(B);
    }, V);
  }, Zi = (B) => {
    be.props.onTouchEnd && be.props.onTouchEnd(B), At(), clearTimeout(xe.current), xe.current = setTimeout(() => {
      cn(B);
    }, De);
  };
  m.useEffect(() => {
    if (!we)
      return;
    function B(pe) {
      (pe.key === "Escape" || pe.key === "Esc") && cn(pe);
    }
    return document.addEventListener("keydown", B), () => {
      document.removeEventListener("keydown", B);
    };
  }, [cn, we]);
  const Ji = Qe(be.ref, Yi, ut, n);
  !ye && ye !== 0 && (we = !1);
  const tr = m.useRef(), Qi = (B) => {
    const pe = be.props;
    pe.onMouseMove && pe.onMouseMove(B), Nt = {
      x: B.clientX,
      y: B.clientY
    }, tr.current && tr.current.update();
  }, Mt = {}, nr = typeof ye == "string";
  R ? (Mt.title = !we && nr && !I ? ye : null, Mt["aria-describedby"] = we ? kt : null) : (Mt["aria-label"] = nr ? ye : null, Mt["aria-labelledby"] = we && !nr ? kt : null);
  const Pe = y({}, Mt, lt, be.props, {
    className: Z(lt.className, be.props.className),
    onTouchStart: io,
    ref: Ji
  }, U ? {
    onMouseMove: Qi
  } : {}), _t = {};
  $ || (Pe.onTouchStart = qi, Pe.onTouchEnd = Zi), I || (Pe.onMouseOver = hn(ao, Pe.onMouseOver), Pe.onMouseLeave = hn(so, Pe.onMouseLeave), Xe || (_t.onMouseOver = ao, _t.onMouseLeave = so)), _ || (Pe.onFocus = hn(oo, Pe.onFocus), Pe.onBlur = hn(ro, Pe.onBlur), Xe || (_t.onFocus = oo, _t.onBlur = ro));
  const ea = m.useMemo(() => {
    var B;
    let pe = [{
      name: "arrow",
      enabled: !!ae,
      options: {
        element: ae,
        padding: 4
      }
    }];
    return (B = ee.popperOptions) != null && B.modifiers && (pe = pe.concat(ee.popperOptions.modifiers)), y({}, ee.popperOptions, {
      modifiers: pe
    });
  }, [ae, ee]), It = y({}, C, {
    isRtl: ct,
    arrow: b,
    disableInteractive: Xe,
    placement: ve,
    PopperComponentProp: Re,
    touch: ze.current
  }), rr = ep(It), lo = (r = (o = Ke.popper) != null ? o : O.Popper) != null ? r : tp, co = (i = (a = (s = Ke.transition) != null ? s : O.Transition) != null ? a : $t) != null ? i : ti, uo = (l = (c = Ke.tooltip) != null ? c : O.Tooltip) != null ? l : np, fo = (u = (p = Ke.arrow) != null ? p : O.Arrow) != null ? u : rp, ta = Ft(lo, y({}, ee, (d = X.popper) != null ? d : E.popper, {
    className: Z(rr.popper, ee == null ? void 0 : ee.className, (v = (h = X.popper) != null ? h : E.popper) == null ? void 0 : v.className)
  }), It), na = Ft(co, y({}, st, (f = X.transition) != null ? f : E.transition), It), ra = Ft(uo, y({}, (x = X.tooltip) != null ? x : E.tooltip, {
    className: Z(rr.tooltip, (w = (P = X.tooltip) != null ? P : E.tooltip) == null ? void 0 : w.className)
  }), It), oa = Ft(fo, y({}, (S = X.arrow) != null ? S : E.arrow, {
    className: Z(rr.arrow, (g = (T = X.arrow) != null ? T : E.arrow) == null ? void 0 : g.className)
  }), It);
  return /* @__PURE__ */ W.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ m.cloneElement(be, Pe), /* @__PURE__ */ W.jsx(lo, y({
      as: Re ?? Hi,
      placement: ve,
      anchorEl: U ? {
        getBoundingClientRect: () => ({
          top: Nt.y,
          left: Nt.x,
          right: Nt.x,
          bottom: Nt.y,
          width: 0,
          height: 0
        })
      } : je,
      popperRef: tr,
      open: je ? we : !1,
      id: kt,
      transition: !0
    }, _t, ta, {
      popperOptions: ea,
      children: ({
        TransitionProps: B
      }) => /* @__PURE__ */ W.jsx(co, y({
        timeout: Ge.transitions.duration.shorter
      }, B, na, {
        children: /* @__PURE__ */ W.jsxs(uo, y({}, ra, {
          children: [ye, b ? /* @__PURE__ */ W.jsx(fo, y({}, oa, {
            ref: $e
          })) : null]
        }))
      }))
    }))]
  });
}), fp = op;
export {
  up as B,
  sp as E,
  lp as G,
  fp as M,
  cp as T,
  os as a,
  Oc as b,
  ap as c,
  xi as h,
  W as j,
  hr as n,
  Je as t
};
