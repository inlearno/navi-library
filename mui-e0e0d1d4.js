import { r as m, a as cr, R as Fe, b as fn, c as aa } from "./react-181b9648.js";
var ni = { exports: {} }, On = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa = m, la = Symbol.for("react.element"), ca = Symbol.for("react.fragment"), ua = Object.prototype.hasOwnProperty, fa = sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ri(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    ua.call(t, r) && !pa.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: la, type: e, key: i, ref: a, props: o, _owner: fa.current };
}
On.Fragment = ca;
On.jsx = ri;
On.jsxs = ri;
ni.exports = On;
var W = ni.exports;
function da(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ma(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ha = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ma(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = da(o);
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
}(), oe = "-ms-", Cn = "-moz-", D = "-webkit-", oi = "comm", Cr = "rule", Tr = "decl", ga = "@import", ii = "@keyframes", va = "@layer", ya = Math.abs, kn = String.fromCharCode, ba = Object.assign;
function xa(e, t) {
  return ne(e, 0) ^ 45 ? (((t << 2 ^ ne(e, 0)) << 2 ^ ne(e, 1)) << 2 ^ ne(e, 2)) << 2 ^ ne(e, 3) : 0;
}
function ai(e) {
  return e.trim();
}
function wa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function N(e, t, n) {
  return e.replace(t, n);
}
function ur(e, t) {
  return e.indexOf(t);
}
function ne(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xt(e, t, n) {
  return e.slice(t, n);
}
function Ae(e) {
  return e.length;
}
function Rr(e) {
  return e.length;
}
function pn(e, t) {
  return t.push(e), e;
}
function Ea(e, t) {
  return e.map(t).join("");
}
var An = 1, Et = 1, si = 0, ce = 0, Z = 0, $t = "";
function Mn(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: An, column: Et, length: a, return: "" };
}
function Nt(e, t) {
  return ba(Mn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ca() {
  return Z;
}
function Ta() {
  return Z = ce > 0 ? ne($t, --ce) : 0, Et--, Z === 10 && (Et = 1, An--), Z;
}
function me() {
  return Z = ce < si ? ne($t, ce++) : 0, Et++, Z === 10 && (Et = 1, An++), Z;
}
function _e() {
  return ne($t, ce);
}
function vn() {
  return ce;
}
function nn(e, t) {
  return Xt($t, e, t);
}
function Yt(e) {
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
  return An = Et = 1, si = Ae($t = e), ce = 0, [];
}
function ci(e) {
  return $t = "", e;
}
function yn(e) {
  return ai(nn(ce - 1, fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ra(e) {
  for (; (Z = _e()) && Z < 33; )
    me();
  return Yt(e) > 2 || Yt(Z) > 3 ? "" : " ";
}
function Sa(e, t) {
  for (; --t && me() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return nn(e, vn() + (t < 6 && _e() == 32 && me() == 32));
}
function fr(e) {
  for (; me(); )
    switch (Z) {
      case e:
        return ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fr(Z);
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
  for (; me() && e + Z !== 47 + 10; )
    if (e + Z === 42 + 42 && _e() === 47)
      break;
  return "/*" + nn(t, ce - 1) + "*" + kn(e === 47 ? e : me());
}
function $a(e) {
  for (; !Yt(_e()); )
    me();
  return nn(e, ce);
}
function Oa(e) {
  return ci(bn("", null, null, null, [""], e = li(e), 0, [0], e));
}
function bn(e, t, n, r, o, i, a, s, l) {
  for (var c = 0, u = 0, d = a, p = 0, v = 0, h = 0, f = 1, x = 1, w = 1, S = 0, R = "", g = o, C = i, T = r, b = R; x; )
    switch (h = S, S = me()) {
      case 40:
        if (h != 108 && ne(b, d - 1) == 58) {
          ur(b += N(yn(S), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += yn(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Ra(h);
        break;
      case 92:
        b += Sa(vn() - 1, 7);
        continue;
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            pn(ka(Pa(me(), vn()), t, n), l);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * f:
        s[c++] = Ae(b) * w;
      case 125 * f:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            w == -1 && (b = N(b, /\f/g, "")), v > 0 && Ae(b) - d && pn(v > 32 ? mo(b + ";", r, n, d - 1) : mo(N(b, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            b += ";";
          default:
            if (pn(T = po(b, t, n, c, u, o, s, R, g = [], C = [], d), i), S === 123)
              if (u === 0)
                bn(b, t, T, T, g, i, d, s, C);
              else
                switch (p === 99 && ne(b, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bn(e, T, T, r && pn(po(e, T, T, 0, 0, o, s, R, o, g = [], d), C), o, C, d, s, r ? g : C);
                    break;
                  default:
                    bn(b, T, T, T, [""], C, 0, s, C);
                }
        }
        c = u = v = 0, f = w = 1, R = b = "", d = a;
        break;
      case 58:
        d = 1 + Ae(b), v = h;
      default:
        if (f < 1) {
          if (S == 123)
            --f;
          else if (S == 125 && f++ == 0 && Ta() == 125)
            continue;
        }
        switch (b += kn(S), S * f) {
          case 38:
            w = u > 0 ? 1 : (b += "\f", -1);
            break;
          case 44:
            s[c++] = (Ae(b) - 1) * w, w = 1;
            break;
          case 64:
            _e() === 45 && (b += yn(me())), p = _e(), u = d = Ae(R = b += $a(vn())), S++;
            break;
          case 45:
            h === 45 && Ae(b) == 2 && (f = 0);
        }
    }
  return i;
}
function po(e, t, n, r, o, i, a, s, l, c, u) {
  for (var d = o - 1, p = o === 0 ? i : [""], v = Rr(p), h = 0, f = 0, x = 0; h < r; ++h)
    for (var w = 0, S = Xt(e, d + 1, d = ya(f = a[h])), R = e; w < v; ++w)
      (R = ai(f > 0 ? p[w] + " " + S : N(S, /&\f/g, p[w]))) && (l[x++] = R);
  return Mn(e, t, n, o === 0 ? Cr : s, l, c, u);
}
function ka(e, t, n) {
  return Mn(e, t, n, oi, kn(Ca()), Xt(e, 2, -2), 0);
}
function mo(e, t, n, r) {
  return Mn(e, t, n, Tr, Xt(e, 0, r), Xt(e, r + 1, -1), r);
}
function xt(e, t) {
  for (var n = "", r = Rr(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Aa(e, t, n, r) {
  switch (e.type) {
    case va:
      if (e.children.length)
        break;
    case ga:
    case Tr:
      return e.return = e.return || e.value;
    case oi:
      return "";
    case ii:
      return e.return = e.value + "{" + xt(e.children, r) + "}";
    case Cr:
      e.value = e.props.join(",");
  }
  return Ae(n = xt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ma(e) {
  var t = Rr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Ia(e) {
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
  for (var o = 0, i = 0; o = i, i = _e(), o === 38 && i === 12 && (n[r] = 1), !Yt(i); )
    me();
  return nn(t, ce);
}, Ba = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Yt(o)) {
      case 0:
        o === 38 && _e() === 12 && (n[r] = 1), t[r] += _a(ce - 1, n, r);
        break;
      case 2:
        t[r] += yn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = _e() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += kn(o);
    }
  while (o = me());
  return t;
}, La = function(t, n) {
  return ci(Ba(li(t), n));
}, ho = /* @__PURE__ */ new WeakMap(), Da = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ho.get(r)) && !o) {
      ho.set(t, !0);
      for (var i = [], a = La(n, i), s = r.props, l = 0, c = 0; l < a.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
    }
  }
}, Na = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function fi(e, t) {
  switch (xa(e, t)) {
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
      return D + e + Cn + e + oe + e + e;
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
      if (Ae(e) - 1 - t > 6)
        switch (ne(e, t + 1)) {
          case 109:
            if (ne(e, t + 4) !== 45)
              break;
          case 102:
            return N(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Cn + (ne(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ur(e, "stretch") ? fi(N(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ne(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ne(e, Ae(e) - 3 - (~ur(e, "!important") && 10))) {
        case 107:
          return N(e, ":", ":" + D) + e;
        case 101:
          return N(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D + (ne(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ne(e, t + 11)) {
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
var za = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Tr:
        t.return = fi(t.value, t.length);
        break;
      case ii:
        return xt([Nt(t, {
          value: N(t.value, "@", "@" + D)
        })], o);
      case Cr:
        if (t.length)
          return Ea(t.props, function(i) {
            switch (wa(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xt([Nt(t, {
                  props: [N(i, /:(read-\w+)/, ":" + Cn + "$1")]
                })], o);
              case "::placeholder":
                return xt([Nt(t, {
                  props: [N(i, /:(plac\w+)/, ":" + D + "input-$1")]
                }), Nt(t, {
                  props: [N(i, /:(plac\w+)/, ":" + Cn + "$1")]
                }), Nt(t, {
                  props: [N(i, /:(plac\w+)/, oe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, ja = [za], Fa = function(t) {
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
  var l, c = [Da, Na];
  {
    var u, d = [Aa, Ia(function(f) {
      u.insert(f);
    })], p = Ma(c.concat(o, d)), v = function(x) {
      return xt(Oa(x), p);
    };
    l = function(x, w, S, R) {
      u = S, v(x ? x + "{" + w.styles + "}" : w.styles), R && (h.inserted[w.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new ha({
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
var Q = typeof Symbol == "function" && Symbol.for, Sr = Q ? Symbol.for("react.element") : 60103, Pr = Q ? Symbol.for("react.portal") : 60106, In = Q ? Symbol.for("react.fragment") : 60107, _n = Q ? Symbol.for("react.strict_mode") : 60108, Bn = Q ? Symbol.for("react.profiler") : 60114, Ln = Q ? Symbol.for("react.provider") : 60109, Dn = Q ? Symbol.for("react.context") : 60110, $r = Q ? Symbol.for("react.async_mode") : 60111, Nn = Q ? Symbol.for("react.concurrent_mode") : 60111, zn = Q ? Symbol.for("react.forward_ref") : 60112, jn = Q ? Symbol.for("react.suspense") : 60113, Wa = Q ? Symbol.for("react.suspense_list") : 60120, Fn = Q ? Symbol.for("react.memo") : 60115, Wn = Q ? Symbol.for("react.lazy") : 60116, Va = Q ? Symbol.for("react.block") : 60121, Ha = Q ? Symbol.for("react.fundamental") : 60117, Ua = Q ? Symbol.for("react.responder") : 60118, Ka = Q ? Symbol.for("react.scope") : 60119;
function ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Sr:
        switch (e = e.type, e) {
          case $r:
          case Nn:
          case In:
          case Bn:
          case _n:
          case jn:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Dn:
              case zn:
              case Wn:
              case Fn:
              case Ln:
                return e;
              default:
                return t;
            }
        }
      case Pr:
        return t;
    }
  }
}
function di(e) {
  return ge(e) === Nn;
}
F.AsyncMode = $r;
F.ConcurrentMode = Nn;
F.ContextConsumer = Dn;
F.ContextProvider = Ln;
F.Element = Sr;
F.ForwardRef = zn;
F.Fragment = In;
F.Lazy = Wn;
F.Memo = Fn;
F.Portal = Pr;
F.Profiler = Bn;
F.StrictMode = _n;
F.Suspense = jn;
F.isAsyncMode = function(e) {
  return di(e) || ge(e) === $r;
};
F.isConcurrentMode = di;
F.isContextConsumer = function(e) {
  return ge(e) === Dn;
};
F.isContextProvider = function(e) {
  return ge(e) === Ln;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr;
};
F.isForwardRef = function(e) {
  return ge(e) === zn;
};
F.isFragment = function(e) {
  return ge(e) === In;
};
F.isLazy = function(e) {
  return ge(e) === Wn;
};
F.isMemo = function(e) {
  return ge(e) === Fn;
};
F.isPortal = function(e) {
  return ge(e) === Pr;
};
F.isProfiler = function(e) {
  return ge(e) === Bn;
};
F.isStrictMode = function(e) {
  return ge(e) === _n;
};
F.isSuspense = function(e) {
  return ge(e) === jn;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === In || e === Nn || e === Bn || e === _n || e === jn || e === Wa || typeof e == "object" && e !== null && (e.$$typeof === Wn || e.$$typeof === Fn || e.$$typeof === Ln || e.$$typeof === Dn || e.$$typeof === zn || e.$$typeof === Ha || e.$$typeof === Ua || e.$$typeof === Ka || e.$$typeof === Va);
};
F.typeOf = ge;
pi.exports = F;
var Ga = pi.exports, mi = Ga, Xa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ya = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hi = {};
hi[mi.ForwardRef] = Xa;
hi[mi.Memo] = Ya;
var qa = !0;
function gi(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Or = function(t, n, r) {
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
  qa === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, kr = function(t, n, r) {
  Or(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Za(e) {
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
var Ja = {
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
}, Qa = /[A-Z]|^ms/g, es = /_EMO_([^_]+?)_([^]*?)_EMO_/g, vi = function(t) {
  return t.charCodeAt(1) === 45;
}, go = function(t) {
  return t != null && typeof t != "boolean";
}, or = /* @__PURE__ */ ui(function(e) {
  return vi(e) ? e : e.replace(Qa, "-$&").toLowerCase();
}), vo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(es, function(r, o, i) {
          return Me = {
            name: o,
            styles: i,
            next: Me
          }, o;
        });
  }
  return Ja[t] !== 1 && !vi(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function qt(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Me = {
          name: n.name,
          styles: n.styles,
          next: Me
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Me = {
              name: r.name,
              styles: r.styles,
              next: Me
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return ts(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Me, a = n(e);
        return Me = i, qt(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function ts(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += qt(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : go(a) && (r += or(i) + ":" + vo(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          go(a[s]) && (r += or(i) + ":" + vo(i, a[s]) + ";");
      else {
        var l = qt(e, t, a);
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
var yo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Me, Vn = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Me = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += qt(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += qt(r, n, t[s]), o && (i += a[s]);
  yo.lastIndex = 0;
  for (var l = "", c; (c = yo.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = Za(i) + l;
  return {
    name: u,
    styles: i,
    next: Me
  };
}, ns = function(t) {
  return t();
}, yi = cr["useInsertionEffect"] ? cr["useInsertionEffect"] : !1, bi = yi || ns, bo = yi || m.useLayoutEffect, xi = {}.hasOwnProperty, wi = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Fa({
    key: "css"
  }) : null
);
wi.Provider;
var Ar = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(wi);
    return t(n, o, r);
  });
}, rn = /* @__PURE__ */ m.createContext({}), pr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", dp = function(t, n) {
  var r = {};
  for (var o in n)
    xi.call(n, o) && (r[o] = n[o]);
  return r[pr] = t, r;
}, rs = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Or(n, r, o), bi(function() {
    return kr(n, r, o);
  }), null;
}, os = /* @__PURE__ */ Ar(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[pr], i = [r], a = "";
  typeof e.className == "string" ? a = gi(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Vn(i, void 0, m.useContext(rn));
  a += t.key + "-" + s.name;
  var l = {};
  for (var c in e)
    xi.call(e, c) && c !== "css" && c !== pr && (l[c] = e[c]);
  return l.ref = n, l.className = a, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(rs, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, l));
}), mp = os, hp = /* @__PURE__ */ Ar(function(e, t) {
  var n = e.styles, r = Vn([n], void 0, m.useContext(rn)), o = m.useRef();
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
function is() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Vn(t);
}
var Mr = function() {
  var t = is.apply(void 0, arguments), n = "animation-" + t.name;
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
function Pe(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? y({}, e) : e;
  return Ze(e) && Ze(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ze(t[o]) && o in e && Ze(e[o]) ? r[o] = Pe(e[o], t[o], n) : n.clone ? r[o] = Ze(t[o]) ? Ei(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Ct(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function K(e) {
  if (typeof e != "string")
    throw new Error(Ct(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xo(e) {
  return e && e.ownerDocument || document;
}
function dr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const as = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Zt = as;
let wo = 0;
function ss(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (wo += 1, n(`mui-${wo}`));
  }, [t]), r;
}
const Eo = cr["useId".toString()];
function ls(e) {
  if (Eo !== void 0) {
    const t = Eo();
    return e ?? t;
  }
  return ss(e);
}
function cs({
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
function Wt(e) {
  const t = m.useRef(e);
  return Zt(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function et(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      dr(n, t);
    });
  }, e);
}
let Hn = !0, mr = !1, Co;
const us = {
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
function fs(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && us[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ps(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Hn = !0);
}
function ir() {
  Hn = !1;
}
function ds() {
  this.visibilityState === "hidden" && mr && (Hn = !0);
}
function ms(e) {
  e.addEventListener("keydown", ps, !0), e.addEventListener("mousedown", ir, !0), e.addEventListener("pointerdown", ir, !0), e.addEventListener("touchstart", ir, !0), e.addEventListener("visibilitychange", ds, !0);
}
function hs(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Hn || fs(t);
}
function Ci() {
  const e = m.useCallback((o) => {
    o != null && ms(o.ownerDocument);
  }, []), t = m.useRef(!1);
  function n() {
    return t.current ? (mr = !0, window.clearTimeout(Co), Co = window.setTimeout(() => {
      mr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return hs(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Ir(e, t) {
  const n = y({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = y({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = y({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = Ir(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function on(e, t, n = void 0) {
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
const To = (e) => e, gs = () => {
  let e = To;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = To;
    }
  };
}, vs = gs(), ys = vs, bs = {
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
function Ot(e, t, n = "Mui") {
  const r = bs[t];
  return r ? `${n}-${r}` : `${ys.generate(e)}-${t}`;
}
function kt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ot(e, o, n);
  }), r;
}
const Jt = "$$material";
function q(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var xs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ws = /* @__PURE__ */ ui(
  function(e) {
    return xs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Es = ws, Cs = function(t) {
  return t !== "theme";
}, Ro = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Es : Cs;
}, So = function(t, n, r) {
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
  return Or(n, r, o), bi(function() {
    return kr(n, r, o);
  }), null;
}, Rs = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = So(t, n, r), l = s || Ro(o), c = !l("as");
  return function() {
    var u = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      d.push(u[0][0]);
      for (var p = u.length, v = 1; v < p; v++)
        d.push(u[v], u[0][v]);
    }
    var h = Ar(function(f, x, w) {
      var S = c && f.as || o, R = "", g = [], C = f;
      if (f.theme == null) {
        C = {};
        for (var T in f)
          C[T] = f[T];
        C.theme = m.useContext(rn);
      }
      typeof f.className == "string" ? R = gi(x.registered, g, f.className) : f.className != null && (R = f.className + " ");
      var b = Vn(d.concat(g), x.registered, C);
      R += x.key + "-" + b.name, a !== void 0 && (R += " " + a);
      var M = c && s === void 0 ? Ro(S) : l, P = {};
      for (var E in f)
        c && E === "as" || // $FlowFixMe
        M(E) && (P[E] = f[E]);
      return P.className = R, P.ref = w, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Ts, {
        cache: x,
        serialized: b,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ m.createElement(S, P));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = o, h.__emotion_styles = d, h.__emotion_forwardProp = s, Object.defineProperty(h, "toString", {
      value: function() {
        return "." + a;
      }
    }), h.withComponent = function(f, x) {
      return e(f, y({}, n, x, {
        shouldForwardProp: So(h, x, !0)
      })).apply(void 0, d);
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
], hr = Rs.bind();
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
const $s = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Os = ["values", "unit", "step"], ks = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => y({}, n, {
    [r.key]: r.val
  }), {});
};
function As(e) {
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
  } = e, o = q(e, Os), i = ks(t), a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function c(p, v) {
    const h = a.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : v) - r / 100}${n})`;
  }
  function u(p) {
    return a.indexOf(p) + 1 < a.length ? c(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function d(p) {
    const v = a.indexOf(p);
    return v === 0 ? s(a[1]) : v === a.length - 1 ? l(a[v]) : c(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return y({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: c,
    only: u,
    not: d,
    unit: n
  }, o);
}
const Ms = {
  borderRadius: 4
}, Is = Ms;
function Ut(e, t) {
  return t ? Pe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _r = {
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
}, Po = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${_r[e]}px)`
};
function We(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Po;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Po;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || _r).indexOf(s) !== -1) {
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
function Bs(e, t) {
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
function j(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, c = Un(l, r) || {};
    return We(a, s, (d) => {
      let p = Tn(c, o, d);
      return d === p && typeof d == "string" && (p = Tn(c, o, `${t}${d === "default" ? "" : K(d)}`, d)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Ls(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ds = {
  m: "margin",
  p: "padding"
}, Ns = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $o = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, zs = Ls((e) => {
  if (e.length > 2)
    if ($o[e])
      e = $o[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ds[t], o = Ns[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Br = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Lr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Br, ...Lr];
function an(e, t, n, r) {
  var o;
  const i = (o = Un(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function Ti(e) {
  return an(e, "spacing", 8);
}
function sn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function js(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = sn(t, n), r), {});
}
function Fs(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = zs(n), i = js(o, r), a = e[n];
  return We(e, a, i);
}
function Ri(e, t) {
  const n = Ti(e.theme);
  return Object.keys(e).map((r) => Fs(e, t, r, n)).reduce(Ut, {});
}
function G(e) {
  return Ri(e, Br);
}
G.propTypes = {};
G.filterProps = Br;
function X(e) {
  return Ri(e, Lr);
}
X.propTypes = {};
X.filterProps = Lr;
function Ws(e = 8) {
  if (e.mui)
    return e;
  const t = Ti({
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
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Ut(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ie(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Vs = j({
  prop: "border",
  themeKey: "borders",
  transform: Ie
}), Hs = j({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ie
}), Us = j({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ie
}), Ks = j({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ie
}), Gs = j({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ie
}), Xs = j({
  prop: "borderColor",
  themeKey: "palette"
}), Ys = j({
  prop: "borderTopColor",
  themeKey: "palette"
}), qs = j({
  prop: "borderRightColor",
  themeKey: "palette"
}), Zs = j({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Js = j({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Gn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = an(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: sn(t, r)
    });
    return We(e, e.borderRadius, n);
  }
  return null;
};
Gn.propTypes = {};
Gn.filterProps = ["borderRadius"];
Kn(Vs, Hs, Us, Ks, Gs, Xs, Ys, qs, Zs, Js, Gn);
const Xn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = an(e.theme, "spacing", 8), n = (r) => ({
      gap: sn(t, r)
    });
    return We(e, e.gap, n);
  }
  return null;
};
Xn.propTypes = {};
Xn.filterProps = ["gap"];
const Yn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = an(e.theme, "spacing", 8), n = (r) => ({
      columnGap: sn(t, r)
    });
    return We(e, e.columnGap, n);
  }
  return null;
};
Yn.propTypes = {};
Yn.filterProps = ["columnGap"];
const qn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = an(e.theme, "spacing", 8), n = (r) => ({
      rowGap: sn(t, r)
    });
    return We(e, e.rowGap, n);
  }
  return null;
};
qn.propTypes = {};
qn.filterProps = ["rowGap"];
const Qs = j({
  prop: "gridColumn"
}), el = j({
  prop: "gridRow"
}), tl = j({
  prop: "gridAutoFlow"
}), nl = j({
  prop: "gridAutoColumns"
}), rl = j({
  prop: "gridAutoRows"
}), ol = j({
  prop: "gridTemplateColumns"
}), il = j({
  prop: "gridTemplateRows"
}), al = j({
  prop: "gridTemplateAreas"
}), sl = j({
  prop: "gridArea"
});
Kn(Xn, Yn, qn, Qs, el, tl, nl, rl, ol, il, al, sl);
function wt(e, t) {
  return t === "grey" ? t : e;
}
const ll = j({
  prop: "color",
  themeKey: "palette",
  transform: wt
}), cl = j({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wt
}), ul = j({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wt
});
Kn(ll, cl, ul);
function de(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fl = j({
  prop: "width",
  transform: de
}), Dr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || _r[n];
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
const pl = j({
  prop: "minWidth",
  transform: de
}), dl = j({
  prop: "height",
  transform: de
}), ml = j({
  prop: "maxHeight",
  transform: de
}), hl = j({
  prop: "minHeight",
  transform: de
});
j({
  prop: "size",
  cssProperty: "width",
  transform: de
});
j({
  prop: "size",
  cssProperty: "height",
  transform: de
});
const gl = j({
  prop: "boxSizing"
});
Kn(fl, Dr, pl, dl, ml, hl, gl);
const vl = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ie
  },
  borderTop: {
    themeKey: "borders",
    transform: Ie
  },
  borderRight: {
    themeKey: "borders",
    transform: Ie
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ie
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ie
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
    style: X
  },
  pt: {
    style: X
  },
  pr: {
    style: X
  },
  pb: {
    style: X
  },
  pl: {
    style: X
  },
  px: {
    style: X
  },
  py: {
    style: X
  },
  padding: {
    style: X
  },
  paddingTop: {
    style: X
  },
  paddingRight: {
    style: X
  },
  paddingBottom: {
    style: X
  },
  paddingLeft: {
    style: X
  },
  paddingX: {
    style: X
  },
  paddingY: {
    style: X
  },
  paddingInline: {
    style: X
  },
  paddingInlineStart: {
    style: X
  },
  paddingInlineEnd: {
    style: X
  },
  paddingBlock: {
    style: X
  },
  paddingBlockStart: {
    style: X
  },
  paddingBlockEnd: {
    style: X
  },
  m: {
    style: G
  },
  mt: {
    style: G
  },
  mr: {
    style: G
  },
  mb: {
    style: G
  },
  ml: {
    style: G
  },
  mx: {
    style: G
  },
  my: {
    style: G
  },
  margin: {
    style: G
  },
  marginTop: {
    style: G
  },
  marginRight: {
    style: G
  },
  marginBottom: {
    style: G
  },
  marginLeft: {
    style: G
  },
  marginX: {
    style: G
  },
  marginY: {
    style: G
  },
  marginInline: {
    style: G
  },
  marginInlineStart: {
    style: G
  },
  marginInlineEnd: {
    style: G
  },
  marginBlock: {
    style: G
  },
  marginBlockStart: {
    style: G
  },
  marginBlockEnd: {
    style: G
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
}, Nr = vl;
function yl(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function bl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xl() {
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
      style: d
    } = s;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = Un(o, c) || {};
    return d ? d(a) : We(a, r, (h) => {
      let f = Tn(p, u, h);
      return h === f && typeof h == "string" && (f = Tn(p, u, `${n}${h === "default" ? "" : K(h)}`, h)), l === !1 ? f : {
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
      const u = _s(i.breakpoints), d = Object.keys(u);
      let p = u;
      return Object.keys(c).forEach((v) => {
        const h = bl(c[v], i);
        if (h != null)
          if (typeof h == "object")
            if (a[v])
              p = Ut(p, e(v, h, i, a));
            else {
              const f = We({
                theme: i
              }, h, (x) => ({
                [v]: x
              }));
              yl(f, h) ? p[v] = t({
                sx: h,
                theme: i
              }) : p = Ut(p, f);
            }
          else
            p = Ut(p, e(v, h, i, a));
      }), Bs(d, p);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Si = xl();
Si.filterProps = ["sx"];
const zr = Si, wl = ["breakpoints", "palette", "spacing", "shape"];
function jr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = q(e, wl), s = As(n), l = Ws(o);
  let c = Pe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: y({
      mode: "light"
    }, r),
    spacing: l,
    shape: y({}, Is, i)
  }, a);
  return c = t.reduce((u, d) => Pe(u, d), c), c.unstable_sxConfig = y({}, Nr, a == null ? void 0 : a.unstable_sxConfig), c.unstable_sx = function(d) {
    return zr({
      sx: d,
      theme: this
    });
  }, c;
}
function El(e) {
  return Object.keys(e).length === 0;
}
function Fr(e = null) {
  const t = m.useContext(rn);
  return !t || El(t) ? e : t;
}
const Cl = jr();
function Pi(e = Cl) {
  return Fr(e);
}
function $i(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = $i(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function J() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = $i(e)) && (r && (r += " "), r += t);
  return r;
}
const Tl = ["variant"];
function Oo(e) {
  return e.length === 0;
}
function Oi(e) {
  const {
    variant: t
  } = e, n = q(e, Tl);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += Oo(r) ? e[o] : K(e[o]) : r += `${Oo(r) ? o : K(o)}${K(e[o].toString())}`;
  }), r;
}
const Rl = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Sl(e) {
  return Object.keys(e).length === 0;
}
function Pl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const $l = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Rn = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = Oi(n.props);
    t[r] = n.style;
  }), t;
}, Ol = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Rn(n);
}, Sn = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(t[Oi(i.props)]);
  }), o;
}, kl = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return Sn(e, t, i);
};
function xn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Al = jr(), Ml = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function wn({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Sl(t) ? e : t[n] || t;
}
function Il(e) {
  return e ? (t, n) => n[e] : null;
}
const ko = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(y({}, t, {
    theme: wn(y({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = Sn(t, Rn(i), i);
    return [o, ...a];
  }
  return o;
};
function _l(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Al,
    rootShouldForwardProp: r = xn,
    slotShouldForwardProp: o = xn
  } = e, i = (a) => zr(y({}, a, {
    theme: wn(y({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    $s(a, (g) => g.filter((C) => !(C != null && C.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Il(Ml(c))
    } = s, v = q(s, Rl), h = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), f = d || !1;
    let x, w = xn;
    c === "Root" || c === "root" ? w = r : c ? w = o : Pl(a) && (w = void 0);
    const S = Ps(a, y({
      shouldForwardProp: w,
      label: x
    }, v)), R = (g, ...C) => {
      const T = C ? C.map((E) => {
        if (typeof E == "function" && E.__emotion_real !== E)
          return ($) => ko({
            styledArg: E,
            props: $,
            defaultTheme: n,
            themeId: t
          });
        if (Ze(E)) {
          let $ = E, I;
          return E && E.variants && (I = E.variants, delete $.variants, $ = (_) => {
            let z = E;
            return Sn(_, Rn(I), I).forEach((k) => {
              z = Pe(z, k);
            }), z;
          }), $;
        }
        return E;
      }) : [];
      let b = g;
      if (Ze(g)) {
        let E;
        g && g.variants && (E = g.variants, delete b.variants, b = ($) => {
          let I = g;
          return Sn($, Rn(E), E).forEach((z) => {
            I = Pe(I, z);
          }), I;
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
      l && p && T.push((E) => {
        const $ = wn(y({}, E, {
          defaultTheme: n,
          themeId: t
        })), I = $l(l, $);
        if (I) {
          const _ = {};
          return Object.entries(I).forEach(([z, O]) => {
            _[z] = typeof O == "function" ? O(y({}, E, {
              theme: $
            })) : O;
          }), p(E, _);
        }
        return null;
      }), l && !h && T.push((E) => {
        const $ = wn(y({}, E, {
          defaultTheme: n,
          themeId: t
        }));
        return kl(E, Ol(l, $), $, l);
      }), f || T.push(i);
      const M = T.length - C.length;
      if (Array.isArray(g) && M > 0) {
        const E = new Array(M).fill("");
        b = [...g, ...E], b.raw = [...g.raw, ...E];
      }
      const P = S(b, ...T);
      return a.muiName && (P.muiName = a.muiName), P;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
function Bl(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ir(t.components[n].defaultProps, r);
}
function Ll({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Pi(n);
  return r && (o = o[r] || o), Bl({
    theme: o,
    name: t,
    props: e
  });
}
function Wr(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function Dl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function at(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return at(Dl(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Ct(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Ct(10, o));
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
function Nl(e) {
  e = at(e);
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
  e = at(e);
  let t = e.type === "hsl" || e.type === "hsla" ? at(Nl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function zl(e, t) {
  const n = Ao(e), r = Ao(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Je(e, t) {
  return e = at(e), t = Wr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Zn(e);
}
function jl(e, t) {
  if (e = at(e), t = Wr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Zn(e);
}
function Fl(e, t) {
  if (e = at(e), t = Wr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Zn(e);
}
const Wl = /* @__PURE__ */ m.createContext(null), ki = Wl;
function Ai() {
  return m.useContext(ki);
}
const Vl = typeof Symbol == "function" && Symbol.for, Hl = Vl ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ul(e, t) {
  return typeof t == "function" ? t(e) : y({}, e, t);
}
function Kl(e) {
  const {
    children: t,
    theme: n
  } = e, r = Ai(), o = m.useMemo(() => {
    const i = r === null ? n : Ul(r, n);
    return i != null && (i[Hl] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ W.jsx(ki.Provider, {
    value: o,
    children: t
  });
}
const Mo = {};
function Io(e, t, n, r = !1) {
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
function Gl(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Fr(Mo), i = Ai() || Mo, a = Io(r, o, n), s = Io(r, i, n, !0);
  return /* @__PURE__ */ W.jsx(Kl, {
    theme: s,
    children: /* @__PURE__ */ W.jsx(rn.Provider, {
      value: a,
      children: t
    })
  });
}
function Xl(e, t) {
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
const Yl = {
  black: "#000",
  white: "#fff"
}, Qt = Yl, ql = {
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
}, Zl = ql, Jl = {
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
}, dt = Jl, Ql = {
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
}, mt = Ql, ec = {
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
}, zt = ec, tc = {
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
}, ht = tc, nc = {
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
}, gt = nc, rc = {
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
}, vt = rc, oc = ["mode", "contrastThreshold", "tonalOffset"], _o = {
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
    paper: Qt.white,
    default: Qt.white
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
    primary: Qt.white,
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
    active: Qt.white,
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
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Fl(e.main, o) : t === "dark" && (e.dark = jl(e.main, i)));
}
function ic(e = "light") {
  return e === "dark" ? {
    main: ht[200],
    light: ht[50],
    dark: ht[400]
  } : {
    main: ht[700],
    light: ht[400],
    dark: ht[800]
  };
}
function ac(e = "light") {
  return e === "dark" ? {
    main: dt[200],
    light: dt[50],
    dark: dt[400]
  } : {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  };
}
function sc(e = "light") {
  return e === "dark" ? {
    main: mt[500],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[700],
    light: mt[400],
    dark: mt[800]
  };
}
function lc(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[700],
    light: gt[500],
    dark: gt[900]
  };
}
function cc(e = "light") {
  return e === "dark" ? {
    main: vt[400],
    light: vt[300],
    dark: vt[700]
  } : {
    main: vt[800],
    light: vt[500],
    dark: vt[900]
  };
}
function uc(e = "light") {
  return e === "dark" ? {
    main: zt[400],
    light: zt[300],
    dark: zt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: zt[500],
    dark: zt[900]
  };
}
function fc(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = q(e, oc), i = e.primary || ic(t), a = e.secondary || ac(t), s = e.error || sc(t), l = e.info || lc(t), c = e.success || cc(t), u = e.warning || uc(t);
  function d(f) {
    return zl(f, ar.text.primary) >= n ? ar.text.primary : _o.text.primary;
  }
  const p = ({
    color: f,
    name: x,
    mainShade: w = 500,
    lightShade: S = 300,
    darkShade: R = 700
  }) => {
    if (f = y({}, f), !f.main && f[w] && (f.main = f[w]), !f.hasOwnProperty("main"))
      throw new Error(Ct(11, x ? ` (${x})` : "", w));
    if (typeof f.main != "string")
      throw new Error(Ct(12, x ? ` (${x})` : "", JSON.stringify(f.main)));
    return Bo(f, "light", S, r), Bo(f, "dark", R, r), f.contrastText || (f.contrastText = d(f.main)), f;
  }, v = {
    dark: ar,
    light: _o
  };
  return Pe(y({
    // A collection of common colors.
    common: y({}, Qt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: Zl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, v[t]), o);
}
const pc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function dc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lo = {
  textTransform: "uppercase"
}, Do = '"Roboto", "Helvetica", "Arial", sans-serif';
function mc(e, t) {
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
    pxToRem: d
  } = n, p = q(n, pc), v = o / 14, h = d || ((w) => `${w / c * v}rem`), f = (w, S, R, g, C) => y({
    fontFamily: r,
    fontWeight: w,
    fontSize: h(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, r === Do ? {
    letterSpacing: `${dc(g / S)}em`
  } : {}, C, u), x = {
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
  return Pe(y({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, x), p, {
    clone: !1
    // No need to clone deep
  });
}
const hc = 0.2, gc = 0.14, vc = 0.12;
function H(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${hc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${gc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${vc})`].join(",");
}
const yc = ["none", H(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), H(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), H(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), H(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), H(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), H(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), H(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), H(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), H(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), H(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), H(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), H(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), H(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), H(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), H(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), H(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), H(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), H(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), H(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), H(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), H(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), H(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), H(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), H(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bc = yc, xc = ["duration", "easing", "delay"], wc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ec = {
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
function Cc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Tc(e) {
  const t = y({}, wc, e.easing), n = y({}, Ec, e.duration);
  return y({
    getAutoHeightDuration: Cc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: s = t.easeInOut,
        delay: l = 0
      } = i;
      return q(i, xc), (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof a == "string" ? a : No(a)} ${s} ${typeof l == "string" ? l : No(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Rc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Sc = Rc, Pc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function $c(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = q(e, Pc);
  if (e.vars)
    throw new Error(Ct(18));
  const s = fc(r), l = jr(e);
  let c = Pe(l, {
    mixins: Xl(l.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bc.slice(),
    typography: mc(s, i),
    transitions: Tc(o),
    zIndex: y({}, Sc)
  });
  return c = Pe(c, a), c = t.reduce((u, d) => Pe(u, d), c), c.unstable_sxConfig = y({}, Nr, a == null ? void 0 : a.unstable_sxConfig), c.unstable_sx = function(d) {
    return zr({
      sx: d,
      theme: this
    });
  }, c;
}
const Oc = $c(), Vr = Oc;
function Mi() {
  const e = Pi(Vr);
  return e[Jt] || e;
}
function At({
  props: e,
  name: t
}) {
  return Ll({
    props: e,
    name: t,
    defaultTheme: Vr,
    themeId: Jt
  });
}
const Ii = (e) => xn(e) && e !== "classes", kc = _l({
  themeId: Jt,
  defaultTheme: Vr,
  rootShouldForwardProp: Ii
}), $e = kc, Ac = ["theme"];
function gp(e) {
  let {
    theme: t
  } = e, n = q(e, Ac);
  const r = t[Jt];
  return /* @__PURE__ */ W.jsx(Gl, y({}, n, {
    themeId: r ? Jt : void 0,
    theme: r || t
  }));
}
function gr(e, t) {
  return gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, gr(e, t);
}
function _i(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gr(e, t);
}
const zo = {
  disabled: !1
}, Pn = Fe.createContext(null);
var Mc = function(t) {
  return t.scrollTop;
}, Vt = "unmounted", nt = "exited", rt = "entering", bt = "entered", vr = "exiting", He = /* @__PURE__ */ function(e) {
  _i(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, s = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = nt, i.appearStatus = rt) : l = bt : r.unmountOnExit || r.mountOnEnter ? l = Vt : l = nt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === Vt ? {
      status: nt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== rt && a !== bt && (i = rt) : (a === rt || a === bt) && (i = vr);
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
      if (this.cancelNextCallback(), i === rt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : fn.findDOMNode(this);
          a && Mc(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === nt && this.setState({
        status: Vt
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [s] : [fn.findDOMNode(this), s], c = l[0], u = l[1], d = this.getTimeouts(), p = s ? d.appear : d.enter;
    if (!o && !a || zo.disabled) {
      this.safeSetState({
        status: bt
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: rt
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: bt
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : fn.findDOMNode(this);
    if (!i || zo.disabled) {
      this.safeSetState({
        status: nt
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
          status: nt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : fn.findDOMNode(this), s = o == null && !this.props.addEndListener;
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
    if (o === Vt)
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
function yt() {
}
He.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yt,
  onEntering: yt,
  onEntered: yt,
  onExit: yt,
  onExiting: yt,
  onExited: yt
};
He.UNMOUNTED = Vt;
He.EXITED = nt;
He.ENTERING = rt;
He.ENTERED = bt;
He.EXITING = vr;
const Ic = He;
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
function Bc(e, t) {
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
function ot(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Lc(e, t) {
  return Hr(e.children, function(n) {
    return m.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ot(n, "appear", e),
      enter: ot(n, "enter", e),
      exit: ot(n, "exit", e)
    });
  });
}
function Dc(e, t, n) {
  var r = Hr(e.children), o = Bc(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (m.isValidElement(a)) {
      var s = i in t, l = i in r, c = t[i], u = m.isValidElement(c) && !c.props.in;
      l && (!s || u) ? o[i] = m.cloneElement(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }) : !l && s && !u ? o[i] = m.cloneElement(a, {
        in: !1
      }) : l && s && m.isValidElement(c) && (o[i] = m.cloneElement(a, {
        onExited: n.bind(null, a),
        in: c.props.in,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }));
    }
  }), o;
}
var Nc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, zc = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ur = /* @__PURE__ */ function(e) {
  _i(t, e);
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
      children: l ? Lc(o, s) : Dc(o, a, s),
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
    var o = this.props, i = o.component, a = o.childFactory, s = q(o, ["component", "childFactory"]), l = this.state.contextValue, c = Nc(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Fe.createElement(Pn.Provider, {
      value: l
    }, c) : /* @__PURE__ */ Fe.createElement(Pn.Provider, {
      value: l
    }, /* @__PURE__ */ Fe.createElement(i, s, c));
  }, t;
}(Fe.Component);
Ur.propTypes = {};
Ur.defaultProps = zc;
const jc = Ur, Fc = (e) => e.scrollTop;
function jo(e, t) {
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
function Wc(e) {
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
  } = e, [u, d] = m.useState(!1), p = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, h = J(n.child, u && n.childLeaving, r && n.childPulsate);
  return !s && !u && d(!0), m.useEffect(() => {
    if (!s && l != null) {
      const f = setTimeout(l, c);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, s, c]), /* @__PURE__ */ W.jsx("span", {
    className: p,
    style: v,
    children: /* @__PURE__ */ W.jsx("span", {
      className: h
    })
  });
}
const Vc = kt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ee = Vc, Hc = ["center", "classes", "className"];
let Jn = (e) => e, Fo, Wo, Vo, Ho;
const yr = 550, Uc = 80, Kc = Mr(Fo || (Fo = Jn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Gc = Mr(Wo || (Wo = Jn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Xc = Mr(Vo || (Vo = Jn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Yc = $e("span", {
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
}), qc = $e(Wc, {
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
`), Ee.rippleVisible, Kc, yr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ee.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ee.child, Ee.childLeaving, Gc, yr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ee.childPulsate, Xc, ({
  theme: e
}) => e.transitions.easing.easeInOut), Zc = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = At({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, s = q(r, Hc), [l, c] = m.useState([]), u = m.useRef(0), d = m.useRef(null);
  m.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const p = m.useRef(!1), v = m.useRef(0), h = m.useRef(null), f = m.useRef(null);
  m.useEffect(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const x = m.useCallback((g) => {
    const {
      pulsate: C,
      rippleX: T,
      rippleY: b,
      rippleSize: M,
      cb: P
    } = g;
    c((E) => [...E, /* @__PURE__ */ W.jsx(qc, {
      classes: {
        ripple: J(i.ripple, Ee.ripple),
        rippleVisible: J(i.rippleVisible, Ee.rippleVisible),
        ripplePulsate: J(i.ripplePulsate, Ee.ripplePulsate),
        child: J(i.child, Ee.child),
        childLeaving: J(i.childLeaving, Ee.childLeaving),
        childPulsate: J(i.childPulsate, Ee.childPulsate)
      },
      timeout: yr,
      pulsate: C,
      rippleX: T,
      rippleY: b,
      rippleSize: M
    }, u.current)]), u.current += 1, d.current = P;
  }, [i]), w = m.useCallback((g = {}, C = {}, T = () => {
  }) => {
    const {
      pulsate: b = !1,
      center: M = o || C.pulsate,
      fakeElement: P = !1
      // For test purposes
    } = C;
    if ((g == null ? void 0 : g.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (p.current = !0);
    const E = P ? null : f.current, $ = E ? E.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let I, _, z;
    if (M || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      I = Math.round($.width / 2), _ = Math.round($.height / 2);
    else {
      const {
        clientX: O,
        clientY: k
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      I = Math.round(O - $.left), _ = Math.round(k - $.top);
    }
    if (M)
      z = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const O = Math.max(Math.abs((E ? E.clientWidth : 0) - I), I) * 2 + 2, k = Math.max(Math.abs((E ? E.clientHeight : 0) - _), _) * 2 + 2;
      z = Math.sqrt(O ** 2 + k ** 2);
    }
    g != null && g.touches ? h.current === null && (h.current = () => {
      x({
        pulsate: b,
        rippleX: I,
        rippleY: _,
        rippleSize: z,
        cb: T
      });
    }, v.current = setTimeout(() => {
      h.current && (h.current(), h.current = null);
    }, Uc)) : x({
      pulsate: b,
      rippleX: I,
      rippleY: _,
      rippleSize: z,
      cb: T
    });
  }, [o, x]), S = m.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), R = m.useCallback((g, C) => {
    if (clearTimeout(v.current), (g == null ? void 0 : g.type) === "touchend" && h.current) {
      h.current(), h.current = null, v.current = setTimeout(() => {
        R(g, C);
      });
      return;
    }
    h.current = null, c((T) => T.length > 0 ? T.slice(1) : T), d.current = C;
  }, []);
  return m.useImperativeHandle(n, () => ({
    pulsate: S,
    start: w,
    stop: R
  }), [S, w, R]), /* @__PURE__ */ W.jsx(Yc, y({
    className: J(Ee.root, i.root, a),
    ref: f
  }, s, {
    children: /* @__PURE__ */ W.jsx(jc, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), Jc = Zc;
function Qc(e) {
  return Ot("MuiButtonBase", e);
}
const eu = kt("MuiButtonBase", ["root", "disabled", "focusVisible"]), tu = eu, nu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], ru = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = on({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Qc, o);
  return n && r && (a.root += ` ${r}`), a;
}, ou = $e("button", {
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
  [`&.${tu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), iu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = At({
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
    disableTouchRipple: d = !1,
    focusRipple: p = !1,
    LinkComponent: v = "a",
    onBlur: h,
    onClick: f,
    onContextMenu: x,
    onDragLeave: w,
    onFocus: S,
    onFocusVisible: R,
    onKeyDown: g,
    onKeyUp: C,
    onMouseDown: T,
    onMouseLeave: b,
    onMouseUp: M,
    onTouchEnd: P,
    onTouchMove: E,
    onTouchStart: $,
    tabIndex: I = 0,
    TouchRippleProps: _,
    touchRippleRef: z,
    type: O
  } = r, k = q(r, nu), L = m.useRef(null), V = m.useRef(null), U = et(V, z), {
    isFocusVisibleRef: re,
    onFocus: Ue,
    onBlur: De,
    ref: Ne
  } = Ci(), [ee, ie] = m.useState(!1);
  c && ee && ie(!1), m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ie(!0), L.current.focus();
    }
  }), []);
  const [ve, Oe] = m.useState(!1);
  m.useEffect(() => {
    Oe(!0);
  }, []);
  const te = ve && !u && !c;
  m.useEffect(() => {
    ee && p && !u && ve && V.current.pulsate();
  }, [u, p, ee, ve]);
  function Y(A, we, It = d) {
    return Wt((qe) => (we && we(qe), !It && V.current && V.current[A](qe), !0));
  }
  const Ke = Y("start", T), ye = Y("stop", x), Mt = Y("stop", w), lt = Y("stop", M), ct = Y("stop", (A) => {
    ee && A.preventDefault(), b && b(A);
  }), be = Y("start", $), Ge = Y("stop", P), ut = Y("stop", E), ze = Y("stop", (A) => {
    De(A), re.current === !1 && ie(!1), h && h(A);
  }, !1), ft = Wt((A) => {
    L.current || (L.current = A.currentTarget), Ue(A), re.current === !0 && (ie(!0), R && R(A)), S && S(A);
  }), ae = () => {
    const A = L.current;
    return l && l !== "button" && !(A.tagName === "A" && A.href);
  }, ke = m.useRef(!1), je = Wt((A) => {
    p && !ke.current && ee && V.current && A.key === " " && (ke.current = !0, V.current.stop(A, () => {
      V.current.start(A);
    })), A.target === A.currentTarget && ae() && A.key === " " && A.preventDefault(), g && g(A), A.target === A.currentTarget && ae() && A.key === "Enter" && !c && (A.preventDefault(), f && f(A));
  }), Xe = Wt((A) => {
    p && A.key === " " && V.current && ee && !A.defaultPrevented && (ke.current = !1, V.current.stop(A, () => {
      V.current.pulsate(A);
    })), C && C(A), f && A.target === A.currentTarget && ae() && A.key === " " && !A.defaultPrevented && f(A);
  });
  let ue = l;
  ue === "button" && (k.href || k.to) && (ue = v);
  const fe = {};
  ue === "button" ? (fe.type = O === void 0 ? "button" : O, fe.disabled = c) : (!k.href && !k.to && (fe.role = "button"), c && (fe["aria-disabled"] = c));
  const xe = et(n, Ne, L), Ye = y({}, r, {
    centerRipple: i,
    component: l,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: d,
    focusRipple: p,
    tabIndex: I,
    focusVisible: ee
  }), pt = ru(Ye);
  return /* @__PURE__ */ W.jsxs(ou, y({
    as: ue,
    className: J(pt.root, s),
    ownerState: Ye,
    onBlur: ze,
    onClick: f,
    onContextMenu: ye,
    onFocus: ft,
    onKeyDown: je,
    onKeyUp: Xe,
    onMouseDown: Ke,
    onMouseLeave: ct,
    onMouseUp: lt,
    onDragLeave: Mt,
    onTouchEnd: Ge,
    onTouchMove: ut,
    onTouchStart: be,
    ref: xe,
    tabIndex: c ? -1 : I,
    type: O
  }, fe, k, {
    children: [a, te ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ W.jsx(Jc, y({
        ref: U,
        center: i
      }, _))
    ) : null]
  }));
}), Bi = iu;
function au(e) {
  return Ot("MuiIconButton", e);
}
const su = kt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), lu = su, cu = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], uu = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${K(r)}`, o && `edge${K(o)}`, `size${K(i)}`]
  };
  return on(a, au, t);
}, fu = $e(Bi, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${K(n.color)}`], n.edge && t[`edge${K(n.edge)}`], t[`size${K(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.action.active, e.palette.action.hoverOpacity),
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
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return y({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && y({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": y({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(r.main, e.palette.action.hoverOpacity)
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
    [`&.${lu.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), pu = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = At({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: l = !1,
    disableFocusRipple: c = !1,
    size: u = "medium"
  } = r, d = q(r, cu), p = y({}, r, {
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: c,
    size: u
  }), v = uu(p);
  return /* @__PURE__ */ W.jsx(fu, y({
    className: J(v.root, a),
    centerRipple: !0,
    focusRipple: !c,
    disabled: l,
    ref: n,
    ownerState: p
  }, d, {
    children: i
  }));
}), vp = pu;
function du(e) {
  return typeof e == "string";
}
function Ht(e, t, n) {
  return e === void 0 || du(e) ? t : y({}, t, {
    ownerState: y({}, t.ownerState, n)
  });
}
const mu = {
  disableDefaultClasses: !1
}, hu = /* @__PURE__ */ m.createContext(mu);
function gu(e) {
  const {
    disableDefaultClasses: t
  } = m.useContext(hu);
  return (n) => t ? "" : e(n);
}
function vu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function yu(e, t, n) {
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
function bu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = J(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = y({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = y({}, n, o, r);
    return v.length > 0 && (f.className = v), Object.keys(h).length > 0 && (f.style = h), {
      props: f,
      internalRef: void 0
    };
  }
  const a = vu(y({}, o, r)), s = Uo(r), l = Uo(o), c = t(a), u = J(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = y({}, c == null ? void 0 : c.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = y({}, c, n, l, s);
  return u.length > 0 && (p.className = u), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: c.ref
  };
}
const xu = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function wu(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = q(e, xu), s = i ? {} : yu(r, o), {
    props: l,
    internalRef: c
  } = bu(y({}, a, {
    externalSlotProps: s
  })), u = et(c, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Ht(n, y({}, l, {
    ref: u
  }), o);
}
var se = "top", Te = "bottom", Re = "right", le = "left", Kr = "auto", ln = [se, Te, Re, le], Tt = "start", en = "end", Eu = "clippingParents", Li = "viewport", jt = "popper", Cu = "reference", Ko = /* @__PURE__ */ ln.reduce(function(e, t) {
  return e.concat([t + "-" + Tt, t + "-" + en]);
}, []), Di = /* @__PURE__ */ [].concat(ln, [Kr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Tt, t + "-" + en]);
}, []), Tu = "beforeRead", Ru = "read", Su = "afterRead", Pu = "beforeMain", $u = "main", Ou = "afterMain", ku = "beforeWrite", Au = "write", Mu = "afterWrite", Iu = [Tu, Ru, Su, Pu, $u, Ou, ku, Au, Mu];
function Le(e) {
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
function st(e) {
  var t = he(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ce(e) {
  var t = he(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gr(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = he(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _u(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Ce(i) || !Le(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Bu(e) {
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
      !Ce(o) || !Le(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Lu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _u,
  effect: Bu,
  requires: ["computeStyles"]
};
function Be(e) {
  return e.split("-")[0];
}
var it = Math.max, $n = Math.min, Rt = Math.round;
function br() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ni() {
  return !/^((?!chrome|android).)*safari/i.test(br());
}
function St(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Ce(e) && (o = e.offsetWidth > 0 && Rt(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Rt(r.height) / e.offsetHeight || 1);
  var a = st(e) ? he(e) : window, s = a.visualViewport, l = !Ni() && n, c = (r.left + (l && s ? s.offsetLeft : 0)) / o, u = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, p = r.height / i;
  return {
    width: d,
    height: p,
    top: u,
    right: c + d,
    bottom: u + p,
    left: c,
    x: c,
    y: u
  };
}
function Xr(e) {
  var t = St(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zi(e, t) {
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
function Du(e) {
  return ["table", "td", "th"].indexOf(Le(e)) >= 0;
}
function tt(e) {
  return ((st(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Qn(e) {
  return Le(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Gr(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    tt(e)
  );
}
function Go(e) {
  return !Ce(e) || // https://github.com/popperjs/popper-core/issues/837
  Ve(e).position === "fixed" ? null : e.offsetParent;
}
function Nu(e) {
  var t = /firefox/i.test(br()), n = /Trident/i.test(br());
  if (n && Ce(e)) {
    var r = Ve(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Qn(e);
  for (Gr(o) && (o = o.host); Ce(o) && ["html", "body"].indexOf(Le(o)) < 0; ) {
    var i = Ve(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function cn(e) {
  for (var t = he(e), n = Go(e); n && Du(n) && Ve(n).position === "static"; )
    n = Go(n);
  return n && (Le(n) === "html" || Le(n) === "body" && Ve(n).position === "static") ? t : n || Nu(e) || t;
}
function Yr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Kt(e, t, n) {
  return it(e, $n(t, n));
}
function zu(e, t, n) {
  var r = Kt(e, t, n);
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
function Fi(e) {
  return Object.assign({}, ji(), e);
}
function Wi(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ju = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Fi(typeof t != "number" ? t : Wi(t, ln));
};
function Fu(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Be(n.placement), l = Yr(s), c = [le, Re].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !a)) {
    var d = ju(o.padding, n), p = Xr(i), v = l === "y" ? se : le, h = l === "y" ? Te : Re, f = n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u], x = a[l] - n.rects.reference[l], w = cn(i), S = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, R = f / 2 - x / 2, g = d[v], C = S - p[u] - d[h], T = S / 2 - p[u] / 2 + R, b = Kt(g, T, C), M = l;
    n.modifiersData[r] = (t = {}, t[M] = b, t.centerOffset = b - T, t);
  }
}
function Wu(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || zi(t.elements.popper, o) && (t.elements.arrow = o));
}
const Vu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Fu,
  effect: Wu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Pt(e) {
  return e.split("-")[1];
}
var Hu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Uu(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Rt(n * o) / o || 0,
    y: Rt(r * o) / o || 0
  };
}
function Xo(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, p = a.x, v = p === void 0 ? 0 : p, h = a.y, f = h === void 0 ? 0 : h, x = typeof u == "function" ? u({
    x: v,
    y: f
  }) : {
    x: v,
    y: f
  };
  v = x.x, f = x.y;
  var w = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), R = le, g = se, C = window;
  if (c) {
    var T = cn(n), b = "clientHeight", M = "clientWidth";
    if (T === he(n) && (T = tt(n), Ve(T).position !== "static" && s === "absolute" && (b = "scrollHeight", M = "scrollWidth")), T = T, o === se || (o === le || o === Re) && i === en) {
      g = Te;
      var P = d && T === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[b]
      );
      f -= P - r.height, f *= l ? 1 : -1;
    }
    if (o === le || (o === se || o === Te) && i === en) {
      R = Re;
      var E = d && T === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[M]
      );
      v -= E - r.width, v *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: s
  }, c && Hu), I = u === !0 ? Uu({
    x: v,
    y: f
  }, he(n)) : {
    x: v,
    y: f
  };
  if (v = I.x, f = I.y, l) {
    var _;
    return Object.assign({}, $, (_ = {}, _[g] = S ? "0" : "", _[R] = w ? "0" : "", _.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + f + "px)" : "translate3d(" + v + "px, " + f + "px, 0)", _));
  }
  return Object.assign({}, $, (t = {}, t[g] = S ? f + "px" : "", t[R] = w ? v + "px" : "", t.transform = "", t));
}
function Ku(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Be(t.placement),
    variation: Pt(t.placement),
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
const Gu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ku,
  data: {}
};
var dn = {
  passive: !0
};
function Xu(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = he(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, dn);
  }), s && l.addEventListener("resize", n.update, dn), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, dn);
    }), s && l.removeEventListener("resize", n.update, dn);
  };
}
const Yu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xu,
  data: {}
};
var qu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function En(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return qu[t];
  });
}
var Zu = {
  start: "end",
  end: "start"
};
function Yo(e) {
  return e.replace(/start|end/g, function(t) {
    return Zu[t];
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
  return St(tt(e)).left + qr(e).scrollLeft;
}
function Ju(e, t) {
  var n = he(e), r = tt(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var c = Ni();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Zr(e),
    y: l
  };
}
function Qu(e) {
  var t, n = tt(e), r = qr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = it(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = it(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Zr(e), l = -r.scrollTop;
  return Ve(o || n).direction === "rtl" && (s += it(n.clientWidth, o ? o.clientWidth : 0) - i), {
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
function Vi(e) {
  return ["html", "body", "#document"].indexOf(Le(e)) >= 0 ? e.ownerDocument.body : Ce(e) && Jr(e) ? e : Vi(Qn(e));
}
function Gt(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Vi(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = he(r), a = o ? [i].concat(i.visualViewport || [], Jr(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Gt(Qn(a)))
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
function ef(e, t) {
  var n = St(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function qo(e, t, n) {
  return t === Li ? xr(Ju(e, n)) : st(t) ? ef(t, n) : xr(Qu(tt(e)));
}
function tf(e) {
  var t = Gt(Qn(e)), n = ["absolute", "fixed"].indexOf(Ve(e).position) >= 0, r = n && Ce(e) ? cn(e) : e;
  return st(r) ? t.filter(function(o) {
    return st(o) && zi(o, r) && Le(o) !== "body";
  }) : [];
}
function nf(e, t, n, r) {
  var o = t === "clippingParents" ? tf(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, c) {
    var u = qo(e, c, r);
    return l.top = it(u.top, l.top), l.right = $n(u.right, l.right), l.bottom = $n(u.bottom, l.bottom), l.left = it(u.left, l.left), l;
  }, qo(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Hi(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Be(r) : null, i = r ? Pt(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case se:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Te:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Re:
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
      case Tt:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case en:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function tn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? Eu : s, c = n.rootBoundary, u = c === void 0 ? Li : c, d = n.elementContext, p = d === void 0 ? jt : d, v = n.altBoundary, h = v === void 0 ? !1 : v, f = n.padding, x = f === void 0 ? 0 : f, w = Fi(typeof x != "number" ? x : Wi(x, ln)), S = p === jt ? Cu : jt, R = e.rects.popper, g = e.elements[h ? S : p], C = nf(st(g) ? g : g.contextElement || tt(e.elements.popper), l, u, a), T = St(e.elements.reference), b = Hi({
    reference: T,
    element: R,
    strategy: "absolute",
    placement: o
  }), M = xr(Object.assign({}, R, b)), P = p === jt ? M : T, E = {
    top: C.top - P.top + w.top,
    bottom: P.bottom - C.bottom + w.bottom,
    left: C.left - P.left + w.left,
    right: P.right - C.right + w.right
  }, $ = e.modifiersData.offset;
  if (p === jt && $) {
    var I = $[o];
    Object.keys(E).forEach(function(_) {
      var z = [Re, Te].indexOf(_) >= 0 ? 1 : -1, O = [se, Te].indexOf(_) >= 0 ? "y" : "x";
      E[_] += I[O] * z;
    });
  }
  return E;
}
function rf(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Di : l, u = Pt(r), d = u ? s ? Ko : Ko.filter(function(h) {
    return Pt(h) === u;
  }) : ln, p = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d);
  var v = p.reduce(function(h, f) {
    return h[f] = tn(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Be(f)], h;
  }, {});
  return Object.keys(v).sort(function(h, f) {
    return v[h] - v[f];
  });
}
function of(e) {
  if (Be(e) === Kr)
    return [];
  var t = En(e);
  return [Yo(e), t, Yo(t)];
}
function af(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, h = v === void 0 ? !0 : v, f = n.allowedAutoPlacements, x = t.options.placement, w = Be(x), S = w === x, R = l || (S || !h ? [En(x)] : of(x)), g = [x].concat(R).reduce(function(ee, ie) {
      return ee.concat(Be(ie) === Kr ? rf(t, {
        placement: ie,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: f
      }) : ie);
    }, []), C = t.rects.reference, T = t.rects.popper, b = /* @__PURE__ */ new Map(), M = !0, P = g[0], E = 0; E < g.length; E++) {
      var $ = g[E], I = Be($), _ = Pt($) === Tt, z = [se, Te].indexOf(I) >= 0, O = z ? "width" : "height", k = tn(t, {
        placement: $,
        boundary: u,
        rootBoundary: d,
        altBoundary: p,
        padding: c
      }), L = z ? _ ? Re : le : _ ? Te : se;
      C[O] > T[O] && (L = En(L));
      var V = En(L), U = [];
      if (i && U.push(k[I] <= 0), s && U.push(k[L] <= 0, k[V] <= 0), U.every(function(ee) {
        return ee;
      })) {
        P = $, M = !1;
        break;
      }
      b.set($, U);
    }
    if (M)
      for (var re = h ? 3 : 1, Ue = function(ie) {
        var ve = g.find(function(Oe) {
          var te = b.get(Oe);
          if (te)
            return te.slice(0, ie).every(function(Y) {
              return Y;
            });
        });
        if (ve)
          return P = ve, "break";
      }, De = re; De > 0; De--) {
        var Ne = Ue(De);
        if (Ne === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const sf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: af,
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
  return [se, Re, Te, le].some(function(t) {
    return e[t] >= 0;
  });
}
function lf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = tn(t, {
    elementContext: "reference"
  }), s = tn(t, {
    altBoundary: !0
  }), l = Zo(a, r), c = Zo(s, o, i), u = Jo(l), d = Jo(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const cf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: lf
};
function uf(e, t, n) {
  var r = Be(e), o = [le, se].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [le, Re].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function ff(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Di.reduce(function(u, d) {
    return u[d] = uf(d, t.rects, i), u;
  }, {}), s = a[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
}
const pf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ff
};
function df(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Hi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const mf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: df,
  data: {}
};
function hf(e) {
  return e === "x" ? "y" : "x";
}
function gf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, p = n.tether, v = p === void 0 ? !0 : p, h = n.tetherOffset, f = h === void 0 ? 0 : h, x = tn(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), w = Be(t.placement), S = Pt(t.placement), R = !S, g = Yr(w), C = hf(g), T = t.modifiersData.popperOffsets, b = t.rects.reference, M = t.rects.popper, P = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, E = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (T) {
    if (i) {
      var _, z = g === "y" ? se : le, O = g === "y" ? Te : Re, k = g === "y" ? "height" : "width", L = T[g], V = L + x[z], U = L - x[O], re = v ? -M[k] / 2 : 0, Ue = S === Tt ? b[k] : M[k], De = S === Tt ? -M[k] : -b[k], Ne = t.elements.arrow, ee = v && Ne ? Xr(Ne) : {
        width: 0,
        height: 0
      }, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ji(), ve = ie[z], Oe = ie[O], te = Kt(0, b[k], ee[k]), Y = R ? b[k] / 2 - re - te - ve - E.mainAxis : Ue - te - ve - E.mainAxis, Ke = R ? -b[k] / 2 + re + te + Oe + E.mainAxis : De + te + Oe + E.mainAxis, ye = t.elements.arrow && cn(t.elements.arrow), Mt = ye ? g === "y" ? ye.clientTop || 0 : ye.clientLeft || 0 : 0, lt = (_ = $ == null ? void 0 : $[g]) != null ? _ : 0, ct = L + Y - lt - Mt, be = L + Ke - lt, Ge = Kt(v ? $n(V, ct) : V, L, v ? it(U, be) : U);
      T[g] = Ge, I[g] = Ge - L;
    }
    if (s) {
      var ut, ze = g === "x" ? se : le, ft = g === "x" ? Te : Re, ae = T[C], ke = C === "y" ? "height" : "width", je = ae + x[ze], Xe = ae - x[ft], ue = [se, le].indexOf(w) !== -1, fe = (ut = $ == null ? void 0 : $[C]) != null ? ut : 0, xe = ue ? je : ae - b[ke] - M[ke] - fe + E.altAxis, Ye = ue ? ae + b[ke] + M[ke] - fe - E.altAxis : Xe, pt = v && ue ? zu(xe, ae, Ye) : Kt(v ? xe : je, ae, v ? Ye : Xe);
      T[C] = pt, I[C] = pt - ae;
    }
    t.modifiersData[r] = I;
  }
}
const vf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: gf,
  requiresIfExists: ["offset"]
};
function yf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function bf(e) {
  return e === he(e) || !Ce(e) ? qr(e) : yf(e);
}
function xf(e) {
  var t = e.getBoundingClientRect(), n = Rt(t.width) / e.offsetWidth || 1, r = Rt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function wf(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ce(t), o = Ce(t) && xf(t), i = tt(t), a = St(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Le(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Jr(i)) && (s = bf(t)), Ce(t) ? (l = St(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Zr(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Ef(e) {
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
function Cf(e) {
  var t = Ef(e);
  return Iu.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Tf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Rf(e) {
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
function Sf(e) {
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
    }, d = [], p = !1, v = {
      state: u,
      setOptions: function(w) {
        var S = typeof w == "function" ? w(u.options) : w;
        f(), u.options = Object.assign({}, i, u.options, S), u.scrollParents = {
          reference: st(s) ? Gt(s) : s.contextElement ? Gt(s.contextElement) : [],
          popper: Gt(l)
        };
        var R = Cf(Rf([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = R.filter(function(g) {
          return g.enabled;
        }), h(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var w = u.elements, S = w.reference, R = w.popper;
          if (ei(S, R)) {
            u.rects = {
              reference: wf(S, cn(R), u.options.strategy === "fixed"),
              popper: Xr(R)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(E) {
              return u.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var g = 0; g < u.orderedModifiers.length; g++) {
              if (u.reset === !0) {
                u.reset = !1, g = -1;
                continue;
              }
              var C = u.orderedModifiers[g], T = C.fn, b = C.options, M = b === void 0 ? {} : b, P = C.name;
              typeof T == "function" && (u = T({
                state: u,
                options: M,
                name: P,
                instance: v
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Tf(function() {
        return new Promise(function(x) {
          v.forceUpdate(), x(u);
        });
      }),
      destroy: function() {
        f(), p = !0;
      }
    };
    if (!ei(s, l))
      return v;
    v.setOptions(c).then(function(x) {
      !p && c.onFirstUpdate && c.onFirstUpdate(x);
    });
    function h() {
      u.orderedModifiers.forEach(function(x) {
        var w = x.name, S = x.options, R = S === void 0 ? {} : S, g = x.effect;
        if (typeof g == "function") {
          var C = g({
            state: u,
            name: w,
            instance: v,
            options: R
          }), T = function() {
          };
          d.push(C || T);
        }
      });
    }
    function f() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return v;
  };
}
var Pf = [Yu, mf, Gu, Lu, pf, sf, vf, Vu, cf], $f = /* @__PURE__ */ Sf({
  defaultModifiers: Pf
});
function Of(e) {
  return typeof e == "function" ? e() : e;
}
const kf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = m.useState(null), l = et(/* @__PURE__ */ m.isValidElement(r) ? r.ref : null, n);
  if (Zt(() => {
    i || s(Of(o) || document.body);
  }, [o, i]), Zt(() => {
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
    children: a && /* @__PURE__ */ aa.createPortal(r, a)
  });
});
function Af(e) {
  return Ot("MuiPopper", e);
}
kt("MuiPopper", ["root"]);
const Mf = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], If = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function _f(e, t) {
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
function Bf(e) {
  return e.nodeType !== void 0;
}
const Lf = () => on({
  root: ["root"]
}, gu(Af)), Df = {}, Nf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: p,
    slotProps: v = {},
    slots: h = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, x = q(t, Mf), w = m.useRef(null), S = et(w, n), R = m.useRef(null), g = et(R, p), C = m.useRef(g);
  Zt(() => {
    C.current = g;
  }, [g]), m.useImperativeHandle(p, () => R.current, []);
  const T = _f(u, a), [b, M] = m.useState(T), [P, E] = m.useState(wr(o));
  m.useEffect(() => {
    R.current && R.current.forceUpdate();
  }), m.useEffect(() => {
    o && E(wr(o));
  }, [o]), Zt(() => {
    if (!P || !c)
      return;
    const O = (V) => {
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
        O(V);
      }
    }];
    l != null && (k = k.concat(l)), d && d.modifiers != null && (k = k.concat(d.modifiers));
    const L = $f(P, w.current, y({
      placement: T
    }, d, {
      modifiers: k
    }));
    return C.current(L), () => {
      L.destroy(), C.current(null);
    };
  }, [P, s, l, c, d, T]);
  const $ = {
    placement: b
  };
  f !== null && ($.TransitionProps = f);
  const I = Lf(), _ = (r = h.root) != null ? r : "div", z = wu({
    elementType: _,
    externalSlotProps: v.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ W.jsx(_, y({}, z, {
    children: typeof i == "function" ? i($) : i
  }));
}), zf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: s = !1,
    keepMounted: l = !1,
    modifiers: c,
    open: u,
    placement: d = "bottom",
    popperOptions: p = Df,
    popperRef: v,
    style: h,
    transition: f = !1,
    slotProps: x = {},
    slots: w = {}
  } = t, S = q(t, If), [R, g] = m.useState(!0), C = () => {
    g(!1);
  }, T = () => {
    g(!0);
  };
  if (!l && !u && (!f || R))
    return null;
  let b;
  if (i)
    b = i;
  else if (r) {
    const E = wr(r);
    b = E && Bf(E) ? xo(E).body : xo(null).body;
  }
  const M = !u && l && (!f || R) ? "none" : void 0, P = f ? {
    in: u,
    onEnter: C,
    onExited: T
  } : void 0;
  return /* @__PURE__ */ W.jsx(kf, {
    disablePortal: s,
    container: b,
    children: /* @__PURE__ */ W.jsx(Nf, y({
      anchorEl: r,
      direction: a,
      disablePortal: s,
      modifiers: c,
      ref: n,
      open: f ? !R : u,
      placement: d,
      popperOptions: p,
      popperRef: v,
      slotProps: x,
      slots: w
    }, S, {
      style: y({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: M
      }, h),
      TransitionProps: P,
      children: o
    }))
  });
}), jf = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Ff = $e(zf, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Wf = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r;
  const o = Fr(), i = At({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: p,
    modifiers: v,
    open: h,
    placement: f,
    popperOptions: x,
    popperRef: w,
    transition: S,
    slots: R,
    slotProps: g
  } = i, C = q(i, jf), T = (r = R == null ? void 0 : R.root) != null ? r : l == null ? void 0 : l.Root, b = y({
    anchorEl: a,
    container: u,
    disablePortal: d,
    keepMounted: p,
    modifiers: v,
    open: h,
    placement: f,
    popperOptions: x,
    popperRef: w,
    transition: S
  }, C);
  return /* @__PURE__ */ W.jsx(Ff, y({
    as: s,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: T
    },
    slotProps: g ?? c
  }, b, {
    ref: n
  }));
}), Ui = Wf;
function Vf(e) {
  return Ot("MuiButton", e);
}
const Hf = kt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), mn = Hf, Uf = /* @__PURE__ */ m.createContext({}), Kf = Uf, Gf = /* @__PURE__ */ m.createContext(void 0), Xf = Gf, Yf = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], qf = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${K(t)}`, `size${K(o)}`, `${i}Size${K(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${K(o)}`],
    endIcon: ["endIcon", `iconSize${K(o)}`]
  }, l = on(s, Vf, a);
  return y({}, a, l);
}, Ki = (e) => y({}, e.size === "small" && {
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
}), Zf = $e(Bi, {
  shouldForwardProp: (e) => Ii(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${K(n.color)}`], t[`size${K(n.size)}`], t[`${n.variant}Size${K(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Je(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    [`&.${mn.focusVisible}`]: y({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${mn.disabled}`]: y({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Je(e.palette[t.color].main, 0.5)}`
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
  [`&.${mn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${mn.disabled}`]: {
    boxShadow: "none"
  }
}), Jf = $e("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${K(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ki(e))), Qf = $e("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${K(n.size)}`]];
  }
})(({
  ownerState: e
}) => y({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ki(e))), ep = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(Kf), o = m.useContext(Xf), i = Ir(r, t), a = At({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: d = !1,
    disableElevation: p = !1,
    disableFocusRipple: v = !1,
    endIcon: h,
    focusVisibleClassName: f,
    fullWidth: x = !1,
    size: w = "medium",
    startIcon: S,
    type: R,
    variant: g = "text"
  } = a, C = q(a, Yf), T = y({}, a, {
    color: l,
    component: c,
    disabled: d,
    disableElevation: p,
    disableFocusRipple: v,
    fullWidth: x,
    size: w,
    type: R,
    variant: g
  }), b = qf(T), M = S && /* @__PURE__ */ W.jsx(Jf, {
    className: b.startIcon,
    ownerState: T,
    children: S
  }), P = h && /* @__PURE__ */ W.jsx(Qf, {
    className: b.endIcon,
    ownerState: T,
    children: h
  }), E = o || "";
  return /* @__PURE__ */ W.jsxs(Zf, y({
    ownerState: T,
    className: J(r.className, b.root, u, E),
    component: c,
    disabled: d,
    focusRipple: !v,
    focusVisibleClassName: J(b.focusVisible, f),
    ref: n,
    type: R
  }, C, {
    classes: b,
    children: [M, s, P]
  }));
}), yp = ep, tp = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Er(e) {
  return `scale(${e}, ${e ** 2})`;
}
const np = {
  entering: {
    opacity: 1,
    transform: Er(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, sr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Gi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: l,
    onEntered: c,
    onEntering: u,
    onExit: d,
    onExited: p,
    onExiting: v,
    style: h,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Ic
  } = t, w = q(t, tp), S = m.useRef(), R = m.useRef(), g = Mi(), C = m.useRef(null), T = et(C, i.ref, n), b = (O) => (k) => {
    if (O) {
      const L = C.current;
      k === void 0 ? O(L) : O(L, k);
    }
  }, M = b(u), P = b((O, k) => {
    Fc(O);
    const {
      duration: L,
      delay: V,
      easing: U
    } = jo({
      style: h,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let re;
    f === "auto" ? (re = g.transitions.getAutoHeightDuration(O.clientHeight), R.current = re) : re = L, O.style.transition = [g.transitions.create("opacity", {
      duration: re,
      delay: V
    }), g.transitions.create("transform", {
      duration: sr ? re : re * 0.666,
      delay: V,
      easing: U
    })].join(","), l && l(O, k);
  }), E = b(c), $ = b(v), I = b((O) => {
    const {
      duration: k,
      delay: L,
      easing: V
    } = jo({
      style: h,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let U;
    f === "auto" ? (U = g.transitions.getAutoHeightDuration(O.clientHeight), R.current = U) : U = k, O.style.transition = [g.transitions.create("opacity", {
      duration: U,
      delay: L
    }), g.transitions.create("transform", {
      duration: sr ? U : U * 0.666,
      delay: sr ? L : L || U * 0.333,
      easing: V
    })].join(","), O.style.opacity = 0, O.style.transform = Er(0.75), d && d(O);
  }), _ = b(p), z = (O) => {
    f === "auto" && (S.current = setTimeout(O, R.current || 0)), r && r(C.current, O);
  };
  return m.useEffect(() => () => {
    clearTimeout(S.current);
  }, []), /* @__PURE__ */ W.jsx(x, y({
    appear: o,
    in: s,
    nodeRef: C,
    onEnter: P,
    onEntered: E,
    onEntering: M,
    onExit: I,
    onExited: _,
    onExiting: $,
    addEndListener: z,
    timeout: f === "auto" ? null : f
  }, w, {
    children: (O, k) => /* @__PURE__ */ m.cloneElement(i, y({
      style: y({
        opacity: 0,
        transform: Er(0.75),
        visibility: O === "exited" && !s ? "hidden" : void 0
      }, np[O], h, i.props.style),
      ref: T
    }, k))
  }));
});
Gi.muiSupportAuto = !0;
const ti = Gi;
function rp(e) {
  return Ot("MuiTooltip", e);
}
const op = kt("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Qe = op, ip = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function ap(e) {
  return Math.round(e * 1e5) / 1e5;
}
const sp = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${K(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return on(a, rp, t);
}, lp = $e(Ui, {
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
  [`&[data-popper-placement*="bottom"] .${Qe.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Qe.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Qe.arrow}`]: y({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Qe.arrow}`]: y({}, t.isRtl ? {
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
})), cp = $e("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${K(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => y({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Je(e.palette.grey[700], 0.92),
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
  lineHeight: `${ap(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Qe.popper}[data-popper-placement*="left"] &`]: y({
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
  [`.${Qe.popper}[data-popper-placement*="right"] &`]: y({
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
  [`.${Qe.popper}[data-popper-placement*="top"] &`]: y({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Qe.popper}[data-popper-placement*="bottom"] &`]: y({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), up = $e("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : Je(e.palette.grey[700], 0.9),
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
let hn = !1, lr = null, Ft = {
  x: 0,
  y: 0
};
function gn(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const fp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, o, i, a, s, l, c, u, d, p, v, h, f, x, w, S, R, g, C;
  const T = At({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: b = !1,
    children: M,
    components: P = {},
    componentsProps: E = {},
    describeChild: $ = !1,
    disableFocusListener: I = !1,
    disableHoverListener: _ = !1,
    disableInteractive: z = !1,
    disableTouchListener: O = !1,
    enterDelay: k = 100,
    enterNextDelay: L = 0,
    enterTouchDelay: V = 700,
    followCursor: U = !1,
    id: re,
    leaveDelay: Ue = 0,
    leaveTouchDelay: De = 1500,
    onClose: Ne,
    onOpen: ee,
    open: ie,
    placement: ve = "bottom",
    PopperComponent: Oe,
    PopperProps: te = {},
    slotProps: Y = {},
    slots: Ke = {},
    title: ye,
    TransitionComponent: Mt = ti,
    TransitionProps: lt
  } = T, ct = q(T, ip), be = /* @__PURE__ */ m.isValidElement(M) ? M : /* @__PURE__ */ W.jsx("span", {
    children: M
  }), Ge = Mi(), ut = Ge.direction === "rtl", [ze, ft] = m.useState(), [ae, ke] = m.useState(null), je = m.useRef(!1), Xe = z || U, ue = m.useRef(), fe = m.useRef(), xe = m.useRef(), Ye = m.useRef(), [pt, A] = cs({
    controlled: ie,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let we = pt;
  const It = ls(re), qe = m.useRef(), _t = m.useCallback(() => {
    qe.current !== void 0 && (document.body.style.WebkitUserSelect = qe.current, qe.current = void 0), clearTimeout(Ye.current);
  }, []);
  m.useEffect(() => () => {
    clearTimeout(ue.current), clearTimeout(fe.current), clearTimeout(xe.current), _t();
  }, [_t]);
  const Qr = (B) => {
    clearTimeout(lr), hn = !0, A(!0), ee && !we && ee(B);
  }, un = Wt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (B) => {
      clearTimeout(lr), lr = setTimeout(() => {
        hn = !1;
      }, 800 + Ue), A(!1), Ne && we && Ne(B), clearTimeout(ue.current), ue.current = setTimeout(() => {
        je.current = !1;
      }, Ge.transitions.duration.shortest);
    }
  ), er = (B) => {
    je.current && B.type !== "touchstart" || (ze && ze.removeAttribute("title"), clearTimeout(fe.current), clearTimeout(xe.current), k || hn && L ? fe.current = setTimeout(() => {
      Qr(B);
    }, hn ? L : k) : Qr(B));
  }, eo = (B) => {
    clearTimeout(fe.current), clearTimeout(xe.current), xe.current = setTimeout(() => {
      un(B);
    }, Ue);
  }, {
    isFocusVisibleRef: to,
    onBlur: Xi,
    onFocus: Yi,
    ref: qi
  } = Ci(), [, no] = m.useState(!1), ro = (B) => {
    Xi(B), to.current === !1 && (no(!1), eo(B));
  }, oo = (B) => {
    ze || ft(B.currentTarget), Yi(B), to.current === !0 && (no(!0), er(B));
  }, io = (B) => {
    je.current = !0;
    const pe = be.props;
    pe.onTouchStart && pe.onTouchStart(B);
  }, ao = er, so = eo, Zi = (B) => {
    io(B), clearTimeout(xe.current), clearTimeout(ue.current), _t(), qe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ye.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = qe.current, er(B);
    }, V);
  }, Ji = (B) => {
    be.props.onTouchEnd && be.props.onTouchEnd(B), _t(), clearTimeout(xe.current), xe.current = setTimeout(() => {
      un(B);
    }, De);
  };
  m.useEffect(() => {
    if (!we)
      return;
    function B(pe) {
      (pe.key === "Escape" || pe.key === "Esc") && un(pe);
    }
    return document.addEventListener("keydown", B), () => {
      document.removeEventListener("keydown", B);
    };
  }, [un, we]);
  const Qi = et(be.ref, qi, ft, n);
  !ye && ye !== 0 && (we = !1);
  const tr = m.useRef(), ea = (B) => {
    const pe = be.props;
    pe.onMouseMove && pe.onMouseMove(B), Ft = {
      x: B.clientX,
      y: B.clientY
    }, tr.current && tr.current.update();
  }, Bt = {}, nr = typeof ye == "string";
  $ ? (Bt.title = !we && nr && !_ ? ye : null, Bt["aria-describedby"] = we ? It : null) : (Bt["aria-label"] = nr ? ye : null, Bt["aria-labelledby"] = we && !nr ? It : null);
  const Se = y({}, Bt, ct, be.props, {
    className: J(ct.className, be.props.className),
    onTouchStart: io,
    ref: Qi
  }, U ? {
    onMouseMove: ea
  } : {}), Lt = {};
  O || (Se.onTouchStart = Zi, Se.onTouchEnd = Ji), _ || (Se.onMouseOver = gn(ao, Se.onMouseOver), Se.onMouseLeave = gn(so, Se.onMouseLeave), Xe || (Lt.onMouseOver = ao, Lt.onMouseLeave = so)), I || (Se.onFocus = gn(oo, Se.onFocus), Se.onBlur = gn(ro, Se.onBlur), Xe || (Lt.onFocus = oo, Lt.onBlur = ro));
  const ta = m.useMemo(() => {
    var B;
    let pe = [{
      name: "arrow",
      enabled: !!ae,
      options: {
        element: ae,
        padding: 4
      }
    }];
    return (B = te.popperOptions) != null && B.modifiers && (pe = pe.concat(te.popperOptions.modifiers)), y({}, te.popperOptions, {
      modifiers: pe
    });
  }, [ae, te]), Dt = y({}, T, {
    isRtl: ut,
    arrow: b,
    disableInteractive: Xe,
    placement: ve,
    PopperComponentProp: Oe,
    touch: je.current
  }), rr = sp(Dt), lo = (r = (o = Ke.popper) != null ? o : P.Popper) != null ? r : lp, co = (i = (a = (s = Ke.transition) != null ? s : P.Transition) != null ? a : Mt) != null ? i : ti, uo = (l = (c = Ke.tooltip) != null ? c : P.Tooltip) != null ? l : cp, fo = (u = (d = Ke.arrow) != null ? d : P.Arrow) != null ? u : up, na = Ht(lo, y({}, te, (p = Y.popper) != null ? p : E.popper, {
    className: J(rr.popper, te == null ? void 0 : te.className, (v = (h = Y.popper) != null ? h : E.popper) == null ? void 0 : v.className)
  }), Dt), ra = Ht(co, y({}, lt, (f = Y.transition) != null ? f : E.transition), Dt), oa = Ht(uo, y({}, (x = Y.tooltip) != null ? x : E.tooltip, {
    className: J(rr.tooltip, (w = (S = Y.tooltip) != null ? S : E.tooltip) == null ? void 0 : w.className)
  }), Dt), ia = Ht(fo, y({}, (R = Y.arrow) != null ? R : E.arrow, {
    className: J(rr.arrow, (g = (C = Y.arrow) != null ? C : E.arrow) == null ? void 0 : g.className)
  }), Dt);
  return /* @__PURE__ */ W.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ m.cloneElement(be, Se), /* @__PURE__ */ W.jsx(lo, y({
      as: Oe ?? Ui,
      placement: ve,
      anchorEl: U ? {
        getBoundingClientRect: () => ({
          top: Ft.y,
          left: Ft.x,
          right: Ft.x,
          bottom: Ft.y,
          width: 0,
          height: 0
        })
      } : ze,
      popperRef: tr,
      open: ze ? we : !1,
      id: It,
      transition: !0
    }, Lt, na, {
      popperOptions: ta,
      children: ({
        TransitionProps: B
      }) => /* @__PURE__ */ W.jsx(co, y({
        timeout: Ge.transitions.duration.shorter
      }, B, ra, {
        children: /* @__PURE__ */ W.jsxs(uo, y({}, oa, {
          children: [ye, b ? /* @__PURE__ */ W.jsx(fo, y({}, ia, {
            ref: ke
          })) : null]
        }))
      }))
    }))]
  });
}), bp = fp;
export {
  yp as B,
  mp as E,
  hp as G,
  vp as I,
  bp as M,
  gp as T,
  is as a,
  $c as b,
  dp as c,
  xi as h,
  W as j,
  hr as n,
  Qe as t
};
