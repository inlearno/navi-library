import { r as d, a as Nr, R as dt, b as Dn, c as da } from "./react-181b9648.js";
var bi = { exports: {} }, rr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa = d, ha = Symbol.for("react.element"), ma = Symbol.for("react.fragment"), ga = Object.prototype.hasOwnProperty, va = pa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ya = { key: !0, ref: !0, __self: !0, __source: !0 };
function xi(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    ga.call(t, r) && !ya.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ha, type: e, key: i, ref: a, props: o, _owner: va.current };
}
rr.Fragment = ma;
rr.jsx = xi;
rr.jsxs = xi;
bi.exports = rr;
var ee = bi.exports;
function ba(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var wa = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ba(o);
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
}(), Oe = "-ms-", Yn = "-moz-", K = "-webkit-", wi = "comm", Zr = "rule", Jr = "decl", Ea = "@import", Ei = "@keyframes", Ca = "@layer", Ta = Math.abs, or = String.fromCharCode, Oa = Object.assign;
function Pa(e, t) {
  return xe(e, 0) ^ 45 ? (((t << 2 ^ xe(e, 0)) << 2 ^ xe(e, 1)) << 2 ^ xe(e, 2)) << 2 ^ xe(e, 3) : 0;
}
function Ci(e) {
  return e.trim();
}
function Sa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function G(e, t, n) {
  return e.replace(t, n);
}
function Fr(e, t) {
  return e.indexOf(t);
}
function xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function gn(e, t, n) {
  return e.slice(t, n);
}
function rt(e) {
  return e.length;
}
function Qr(e) {
  return e.length;
}
function Ln(e, t) {
  return t.push(e), e;
}
function Ra(e, t) {
  return e.map(t).join("");
}
var ir = 1, qt = 1, Ti = 0, Me = 0, he = 0, Qt = "";
function ar(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ir, column: qt, length: a, return: "" };
}
function sn(e, t) {
  return Oa(ar("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function $a() {
  return he;
}
function ka() {
  return he = Me > 0 ? xe(Qt, --Me) : 0, qt--, he === 10 && (qt = 1, ir--), he;
}
function Le() {
  return he = Me < Ti ? xe(Qt, Me++) : 0, qt++, he === 10 && (qt = 1, ir++), he;
}
function at() {
  return xe(Qt, Me);
}
function Vn() {
  return Me;
}
function Tn(e, t) {
  return gn(Qt, e, t);
}
function vn(e) {
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
function Oi(e) {
  return ir = qt = 1, Ti = rt(Qt = e), Me = 0, [];
}
function Pi(e) {
  return Qt = "", e;
}
function Wn(e) {
  return Ci(Tn(Me - 1, zr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Aa(e) {
  for (; (he = at()) && he < 33; )
    Le();
  return vn(e) > 2 || vn(he) > 3 ? "" : " ";
}
function Ma(e, t) {
  for (; --t && Le() && !(he < 48 || he > 102 || he > 57 && he < 65 || he > 70 && he < 97); )
    ;
  return Tn(e, Vn() + (t < 6 && at() == 32 && Le() == 32));
}
function zr(e) {
  for (; Le(); )
    switch (he) {
      case e:
        return Me;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zr(he);
        break;
      case 40:
        e === 41 && zr(e);
        break;
      case 92:
        Le();
        break;
    }
  return Me;
}
function Ia(e, t) {
  for (; Le() && e + he !== 47 + 10; )
    if (e + he === 42 + 42 && at() === 47)
      break;
  return "/*" + Tn(t, Me - 1) + "*" + or(e === 47 ? e : Le());
}
function Ba(e) {
  for (; !vn(at()); )
    Le();
  return Tn(e, Me);
}
function _a(e) {
  return Pi(Hn("", null, null, null, [""], e = Oi(e), 0, [0], e));
}
function Hn(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, h = a, p = 0, g = 0, y = 0, f = 1, E = 1, O = 1, S = 0, R = "", b = o, C = i, P = r, w = R; E; )
    switch (y = S, S = Le()) {
      case 40:
        if (y != 108 && xe(w, h - 1) == 58) {
          Fr(w += G(Wn(S), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Wn(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Aa(y);
        break;
      case 92:
        w += Ma(Vn() - 1, 7);
        continue;
      case 47:
        switch (at()) {
          case 42:
          case 47:
            Ln(Da(Ia(Le(), Vn()), t, n), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * f:
        s[u++] = rt(w) * O;
      case 125 * f:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            O == -1 && (w = G(w, /\f/g, "")), g > 0 && rt(w) - h && Ln(g > 32 ? $o(w + ";", r, n, h - 1) : $o(G(w, " ", "") + ";", r, n, h - 2), l);
            break;
          case 59:
            w += ";";
          default:
            if (Ln(P = Ro(w, t, n, u, c, o, s, R, b = [], C = [], h), i), S === 123)
              if (c === 0)
                Hn(w, t, P, P, b, i, h, s, C);
              else
                switch (p === 99 && xe(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hn(e, P, P, r && Ln(Ro(e, P, P, 0, 0, o, s, R, o, b = [], h), C), o, C, h, s, r ? b : C);
                    break;
                  default:
                    Hn(w, P, P, P, [""], C, 0, s, C);
                }
        }
        u = c = g = 0, f = O = 1, R = w = "", h = a;
        break;
      case 58:
        h = 1 + rt(w), g = y;
      default:
        if (f < 1) {
          if (S == 123)
            --f;
          else if (S == 125 && f++ == 0 && ka() == 125)
            continue;
        }
        switch (w += or(S), S * f) {
          case 38:
            O = c > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            s[u++] = (rt(w) - 1) * O, O = 1;
            break;
          case 64:
            at() === 45 && (w += Wn(Le())), p = at(), c = h = rt(R = w += Ba(Vn())), S++;
            break;
          case 45:
            y === 45 && rt(w) == 2 && (f = 0);
        }
    }
  return i;
}
function Ro(e, t, n, r, o, i, a, s, l, u, c) {
  for (var h = o - 1, p = o === 0 ? i : [""], g = Qr(p), y = 0, f = 0, E = 0; y < r; ++y)
    for (var O = 0, S = gn(e, h + 1, h = Ta(f = a[y])), R = e; O < g; ++O)
      (R = Ci(f > 0 ? p[O] + " " + S : G(S, /&\f/g, p[O]))) && (l[E++] = R);
  return ar(e, t, n, o === 0 ? Zr : s, l, u, c);
}
function Da(e, t, n) {
  return ar(e, t, n, wi, or($a()), gn(e, 2, -2), 0);
}
function $o(e, t, n, r) {
  return ar(e, t, n, Jr, gn(e, 0, r), gn(e, r + 1, -1), r);
}
function Kt(e, t) {
  for (var n = "", r = Qr(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function La(e, t, n, r) {
  switch (e.type) {
    case Ca:
      if (e.children.length)
        break;
    case Ea:
    case Jr:
      return e.return = e.return || e.value;
    case wi:
      return "";
    case Ei:
      return e.return = e.value + "{" + Kt(e.children, r) + "}";
    case Zr:
      e.value = e.props.join(",");
  }
  return rt(n = Kt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Na(e) {
  var t = Qr(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Fa(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Si(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var za = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = at(), o === 38 && i === 12 && (n[r] = 1), !vn(i); )
    Le();
  return Tn(t, Me);
}, ja = function(t, n) {
  var r = -1, o = 44;
  do
    switch (vn(o)) {
      case 0:
        o === 38 && at() === 12 && (n[r] = 1), t[r] += za(Me - 1, n, r);
        break;
      case 2:
        t[r] += Wn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = at() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += or(o);
    }
  while (o = Le());
  return t;
}, Va = function(t, n) {
  return Pi(ja(Oi(t), n));
}, ko = /* @__PURE__ */ new WeakMap(), Wa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ko.get(r)) && !o) {
      ko.set(t, !0);
      for (var i = [], a = Va(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, Ha = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ri(e, t) {
  switch (Pa(e, t)) {
    case 5103:
      return K + "print-" + e + e;
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
      return K + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return K + e + Yn + e + Oe + e + e;
    case 6828:
    case 4268:
      return K + e + Oe + e + e;
    case 6165:
      return K + e + Oe + "flex-" + e + e;
    case 5187:
      return K + e + G(e, /(\w+).+(:[^]+)/, K + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return K + e + Oe + "flex-item-" + G(e, /flex-|-self/, "") + e;
    case 4675:
      return K + e + Oe + "flex-line-pack" + G(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return K + e + Oe + G(e, "shrink", "negative") + e;
    case 5292:
      return K + e + Oe + G(e, "basis", "preferred-size") + e;
    case 6060:
      return K + "box-" + G(e, "-grow", "") + K + e + Oe + G(e, "grow", "positive") + e;
    case 4554:
      return K + G(e, /([^-])(transform)/g, "$1" + K + "$2") + e;
    case 6187:
      return G(G(G(e, /(zoom-|grab)/, K + "$1"), /(image-set)/, K + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return G(e, /(image-set\([^]*)/, K + "$1$`$1");
    case 4968:
      return G(G(e, /(.+:)(flex-)?(.*)/, K + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + K + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return G(e, /(.+)-inline(.+)/, K + "$1$2") + e;
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
      if (rt(e) - 1 - t > 6)
        switch (xe(e, t + 1)) {
          case 109:
            if (xe(e, t + 4) !== 45)
              break;
          case 102:
            return G(e, /(.+:)(.+)-([^]+)/, "$1" + K + "$2-$3$1" + Yn + (xe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fr(e, "stretch") ? Ri(G(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (xe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (xe(e, rt(e) - 3 - (~Fr(e, "!important") && 10))) {
        case 107:
          return G(e, ":", ":" + K) + e;
        case 101:
          return G(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + K + (xe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + K + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xe(e, t + 11)) {
        case 114:
          return K + e + Oe + G(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return K + e + Oe + G(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return K + e + Oe + G(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return K + e + Oe + e + e;
  }
  return e;
}
var Ua = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Jr:
        t.return = Ri(t.value, t.length);
        break;
      case Ei:
        return Kt([sn(t, {
          value: G(t.value, "@", "@" + K)
        })], o);
      case Zr:
        if (t.length)
          return Ra(t.props, function(i) {
            switch (Sa(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Kt([sn(t, {
                  props: [G(i, /:(read-\w+)/, ":" + Yn + "$1")]
                })], o);
              case "::placeholder":
                return Kt([sn(t, {
                  props: [G(i, /:(plac\w+)/, ":" + K + "input-$1")]
                }), sn(t, {
                  props: [G(i, /:(plac\w+)/, ":" + Yn + "$1")]
                }), sn(t, {
                  props: [G(i, /:(plac\w+)/, Oe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Ka = [Ua], Ga = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var E = f.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ka, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var E = f.getAttribute("data-emotion").split(" "), O = 1; O < E.length; O++)
        i[E[O]] = !0;
      s.push(f);
    }
  );
  var l, u = [Wa, Ha];
  {
    var c, h = [La, Fa(function(f) {
      c.insert(f);
    })], p = Na(u.concat(o, h)), g = function(E) {
      return Kt(_a(E), p);
    };
    l = function(E, O, S, R) {
      c = S, g(E ? E + "{" + O.styles + "}" : O.styles), R && (y.inserted[O.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new wa({
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
  return y.sheet.hydrate(s), y;
};
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
var $i = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be = typeof Symbol == "function" && Symbol.for, eo = be ? Symbol.for("react.element") : 60103, to = be ? Symbol.for("react.portal") : 60106, sr = be ? Symbol.for("react.fragment") : 60107, lr = be ? Symbol.for("react.strict_mode") : 60108, cr = be ? Symbol.for("react.profiler") : 60114, ur = be ? Symbol.for("react.provider") : 60109, fr = be ? Symbol.for("react.context") : 60110, no = be ? Symbol.for("react.async_mode") : 60111, dr = be ? Symbol.for("react.concurrent_mode") : 60111, pr = be ? Symbol.for("react.forward_ref") : 60112, hr = be ? Symbol.for("react.suspense") : 60113, qa = be ? Symbol.for("react.suspense_list") : 60120, mr = be ? Symbol.for("react.memo") : 60115, gr = be ? Symbol.for("react.lazy") : 60116, Xa = be ? Symbol.for("react.block") : 60121, Ya = be ? Symbol.for("react.fundamental") : 60117, Za = be ? Symbol.for("react.responder") : 60118, Ja = be ? Symbol.for("react.scope") : 60119;
function Fe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case eo:
        switch (e = e.type, e) {
          case no:
          case dr:
          case sr:
          case cr:
          case lr:
          case hr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case fr:
              case pr:
              case gr:
              case mr:
              case ur:
                return e;
              default:
                return t;
            }
        }
      case to:
        return t;
    }
  }
}
function ki(e) {
  return Fe(e) === dr;
}
J.AsyncMode = no;
J.ConcurrentMode = dr;
J.ContextConsumer = fr;
J.ContextProvider = ur;
J.Element = eo;
J.ForwardRef = pr;
J.Fragment = sr;
J.Lazy = gr;
J.Memo = mr;
J.Portal = to;
J.Profiler = cr;
J.StrictMode = lr;
J.Suspense = hr;
J.isAsyncMode = function(e) {
  return ki(e) || Fe(e) === no;
};
J.isConcurrentMode = ki;
J.isContextConsumer = function(e) {
  return Fe(e) === fr;
};
J.isContextProvider = function(e) {
  return Fe(e) === ur;
};
J.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === eo;
};
J.isForwardRef = function(e) {
  return Fe(e) === pr;
};
J.isFragment = function(e) {
  return Fe(e) === sr;
};
J.isLazy = function(e) {
  return Fe(e) === gr;
};
J.isMemo = function(e) {
  return Fe(e) === mr;
};
J.isPortal = function(e) {
  return Fe(e) === to;
};
J.isProfiler = function(e) {
  return Fe(e) === cr;
};
J.isStrictMode = function(e) {
  return Fe(e) === lr;
};
J.isSuspense = function(e) {
  return Fe(e) === hr;
};
J.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === sr || e === dr || e === cr || e === lr || e === hr || e === qa || typeof e == "object" && e !== null && (e.$$typeof === gr || e.$$typeof === mr || e.$$typeof === ur || e.$$typeof === fr || e.$$typeof === pr || e.$$typeof === Ya || e.$$typeof === Za || e.$$typeof === Ja || e.$$typeof === Xa);
};
J.typeOf = Fe;
$i.exports = J;
var Qa = $i.exports, Ai = Qa, es = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ts = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mi = {};
Mi[Ai.ForwardRef] = es;
Mi[Ai.Memo] = ts;
var ns = !0;
function Ii(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var ro = function(t, n, r) {
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
  ns === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, oo = function(t, n, r) {
  ro(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function rs(e) {
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
var os = {
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
}, is = /[A-Z]|^ms/g, as = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bi = function(t) {
  return t.charCodeAt(1) === 45;
}, Ao = function(t) {
  return t != null && typeof t != "boolean";
}, Mr = /* @__PURE__ */ Si(function(e) {
  return Bi(e) ? e : e.replace(is, "-$&").toLowerCase();
}), Mo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(as, function(r, o, i) {
          return ot = {
            name: o,
            styles: i,
            next: ot
          }, o;
        });
  }
  return os[t] !== 1 && !Bi(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function yn(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return ot = {
          name: n.name,
          styles: n.styles,
          next: ot
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            ot = {
              name: r.name,
              styles: r.styles,
              next: ot
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return ss(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = ot, a = n(e);
        return ot = i, yn(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function ss(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += yn(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Ao(a) && (r += Mr(i) + ":" + Mo(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Ao(a[s]) && (r += Mr(i) + ":" + Mo(i, a[s]) + ";");
      else {
        var l = yn(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Mr(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Io = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ot, vr = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  ot = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += yn(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += yn(r, n, t[s]), o && (i += a[s]);
  Io.lastIndex = 0;
  for (var l = "", u; (u = Io.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = rs(i) + l;
  return {
    name: c,
    styles: i,
    next: ot
  };
}, ls = function(t) {
  return t();
}, _i = Nr["useInsertionEffect"] ? Nr["useInsertionEffect"] : !1, Di = _i || ls, Bo = _i || d.useLayoutEffect, Li = {}.hasOwnProperty, Ni = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ga({
    key: "css"
  }) : null
);
Ni.Provider;
var io = function(t) {
  return /* @__PURE__ */ d.forwardRef(function(n, r) {
    var o = d.useContext(Ni);
    return t(n, o, r);
  });
}, On = /* @__PURE__ */ d.createContext({}), jr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Cd = function(t, n) {
  var r = {};
  for (var o in n)
    Li.call(n, o) && (r[o] = n[o]);
  return r[jr] = t, r;
}, cs = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ro(n, r, o), Di(function() {
    return oo(n, r, o);
  }), null;
}, us = /* @__PURE__ */ io(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[jr], i = [r], a = "";
  typeof e.className == "string" ? a = Ii(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = vr(i, void 0, d.useContext(On));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Li.call(e, u) && u !== "css" && u !== jr && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(cs, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ d.createElement(o, l));
}), Td = us, Od = /* @__PURE__ */ io(function(e, t) {
  var n = e.styles, r = vr([n], void 0, d.useContext(On)), o = d.useRef();
  return Bo(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Bo(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && oo(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function fs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return vr(t);
}
var ao = function() {
  var t = fs.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function xt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Fi(e) {
  if (!xt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Fi(e[n]);
  }), t;
}
function Xe(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? x({}, e) : e;
  return xt(e) && xt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (xt(t[o]) && o in e && xt(e[o]) ? r[o] = Xe(e[o], t[o], n) : n.clone ? r[o] = xt(t[o]) ? Fi(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Mt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function ae(e) {
  if (typeof e != "string")
    throw new Error(Mt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _o(e) {
  return e && e.ownerDocument || document;
}
function Zn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const ds = typeof window < "u" ? d.useLayoutEffect : d.useEffect, bn = ds;
let Do = 0;
function ps(e) {
  const [t, n] = d.useState(e), r = e || t;
  return d.useEffect(() => {
    t == null && (Do += 1, n(`mui-${Do}`));
  }, [t]), r;
}
const Lo = Nr["useId".toString()];
function zi(e) {
  if (Lo !== void 0) {
    const t = Lo();
    return e ?? t;
  }
  return ps(e);
}
function Un({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = d.useRef(e !== void 0), [i, a] = d.useState(t), s = o ? e : i, l = d.useCallback((u) => {
    o || a(u);
  }, []);
  return [s, l];
}
function pt(e) {
  const t = d.useRef(e);
  return bn(() => {
    t.current = e;
  }), d.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function ht(...e) {
  return d.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Zn(n, t);
    });
  }, e);
}
let yr = !0, Vr = !1, No;
const hs = {
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
function ms(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && hs[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function gs(e) {
  e.metaKey || e.altKey || e.ctrlKey || (yr = !0);
}
function Ir() {
  yr = !1;
}
function vs() {
  this.visibilityState === "hidden" && Vr && (yr = !0);
}
function ys(e) {
  e.addEventListener("keydown", gs, !0), e.addEventListener("mousedown", Ir, !0), e.addEventListener("pointerdown", Ir, !0), e.addEventListener("touchstart", Ir, !0), e.addEventListener("visibilitychange", vs, !0);
}
function bs(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return yr || ms(t);
}
function ji() {
  const e = d.useCallback((o) => {
    o != null && ys(o.ownerDocument);
  }, []), t = d.useRef(!1);
  function n() {
    return t.current ? (Vr = !0, window.clearTimeout(No), No = window.setTimeout(() => {
      Vr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return bs(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
const xs = (e) => {
  const t = d.useRef({});
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}, ws = xs;
function so(e, t) {
  const n = x({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = x({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = x({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = so(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Pn(e, t, n = void 0) {
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
const Fo = (e) => e, Es = () => {
  let e = Fo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Fo;
    }
  };
}, Cs = Es(), Ts = Cs, Os = {
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
function en(e, t, n = "Mui") {
  const r = Os[t];
  return r ? `${n}-${r}` : `${Ts.generate(e)}-${t}`;
}
function tn(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = en(e, o, n);
  }), r;
}
const xn = "$$material";
function de(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ps = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ss = /* @__PURE__ */ Si(
  function(e) {
    return Ps.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Rs = Ss, $s = function(t) {
  return t !== "theme";
}, zo = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Rs : $s;
}, jo = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, ks = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ro(n, r, o), Di(function() {
    return oo(n, r, o);
  }), null;
}, As = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = jo(t, n, r), l = s || zo(o), u = !l("as");
  return function() {
    var c = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      h.push.apply(h, c);
    else {
      h.push(c[0][0]);
      for (var p = c.length, g = 1; g < p; g++)
        h.push(c[g], c[0][g]);
    }
    var y = io(function(f, E, O) {
      var S = u && f.as || o, R = "", b = [], C = f;
      if (f.theme == null) {
        C = {};
        for (var P in f)
          C[P] = f[P];
        C.theme = d.useContext(On);
      }
      typeof f.className == "string" ? R = Ii(E.registered, b, f.className) : f.className != null && (R = f.className + " ");
      var w = vr(h.concat(b), E.registered, C);
      R += E.key + "-" + w.name, a !== void 0 && (R += " " + a);
      var N = u && s === void 0 ? zo(S) : l, D = {};
      for (var T in f)
        u && T === "as" || // $FlowFixMe
        N(T) && (D[T] = f[T]);
      return D.className = R, D.ref = O, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(ks, {
        cache: E,
        serialized: w,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ d.createElement(S, D));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = h, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(f, E) {
      return e(f, x({}, n, E, {
        shouldForwardProp: jo(y, E, !0)
      })).apply(void 0, h);
    }, y;
  };
}, Ms = [
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
], Wr = As.bind();
Ms.forEach(function(e) {
  Wr[e] = Wr(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Is(e, t) {
  return Wr(e, t);
}
const Bs = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, _s = ["values", "unit", "step"], Ds = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => x({}, n, {
    [r.key]: r.val
  }), {});
};
function Ls(e) {
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
  } = e, o = de(e, _s), i = Ds(t), a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - r / 100}${n})`;
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function h(p) {
    const g = a.indexOf(p);
    return g === 0 ? s(a[1]) : g === a.length - 1 ? l(a[g]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: u,
    only: c,
    not: h,
    unit: n
  }, o);
}
const Ns = {
  borderRadius: 4
}, Fs = Ns;
function pn(e, t) {
  return t ? Xe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const lo = {
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
}, Vo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${lo[e]}px)`
};
function mt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Vo;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Vo;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || lo).indexOf(s) !== -1) {
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
function zs(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function js(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function br(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Jn(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = br(e, n) || r, t && (o = t(o, r, e)), o;
}
function X(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, u = br(l, r) || {};
    return mt(a, s, (h) => {
      let p = Jn(u, o, h);
      return h === p && typeof h == "string" && (p = Jn(u, o, `${t}${h === "default" ? "" : ae(h)}`, h)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Vs(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ws = {
  m: "margin",
  p: "padding"
}, Hs = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Us = Vs((e) => {
  if (e.length > 2)
    if (Wo[e])
      e = Wo[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ws[t], o = Hs[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), co = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], uo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...co, ...uo];
function Sn(e, t, n, r) {
  var o;
  const i = (o = br(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function Vi(e) {
  return Sn(e, "spacing", 8);
}
function Rn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ks(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Rn(t, n), r), {});
}
function Gs(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Us(n), i = Ks(o, r), a = e[n];
  return mt(e, a, i);
}
function Wi(e, t) {
  const n = Vi(e.theme);
  return Object.keys(e).map((r) => Gs(e, t, r, n)).reduce(pn, {});
}
function se(e) {
  return Wi(e, co);
}
se.propTypes = {};
se.filterProps = co;
function le(e) {
  return Wi(e, uo);
}
le.propTypes = {};
le.filterProps = uo;
function qs(e = 8) {
  if (e.mui)
    return e;
  const t = Vi({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function xr(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? pn(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function it(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Xs = X({
  prop: "border",
  themeKey: "borders",
  transform: it
}), Ys = X({
  prop: "borderTop",
  themeKey: "borders",
  transform: it
}), Zs = X({
  prop: "borderRight",
  themeKey: "borders",
  transform: it
}), Js = X({
  prop: "borderBottom",
  themeKey: "borders",
  transform: it
}), Qs = X({
  prop: "borderLeft",
  themeKey: "borders",
  transform: it
}), el = X({
  prop: "borderColor",
  themeKey: "palette"
}), tl = X({
  prop: "borderTopColor",
  themeKey: "palette"
}), nl = X({
  prop: "borderRightColor",
  themeKey: "palette"
}), rl = X({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ol = X({
  prop: "borderLeftColor",
  themeKey: "palette"
}), wr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Sn(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Rn(t, r)
    });
    return mt(e, e.borderRadius, n);
  }
  return null;
};
wr.propTypes = {};
wr.filterProps = ["borderRadius"];
xr(Xs, Ys, Zs, Js, Qs, el, tl, nl, rl, ol, wr);
const Er = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Sn(e.theme, "spacing", 8), n = (r) => ({
      gap: Rn(t, r)
    });
    return mt(e, e.gap, n);
  }
  return null;
};
Er.propTypes = {};
Er.filterProps = ["gap"];
const Cr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Sn(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Rn(t, r)
    });
    return mt(e, e.columnGap, n);
  }
  return null;
};
Cr.propTypes = {};
Cr.filterProps = ["columnGap"];
const Tr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Sn(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Rn(t, r)
    });
    return mt(e, e.rowGap, n);
  }
  return null;
};
Tr.propTypes = {};
Tr.filterProps = ["rowGap"];
const il = X({
  prop: "gridColumn"
}), al = X({
  prop: "gridRow"
}), sl = X({
  prop: "gridAutoFlow"
}), ll = X({
  prop: "gridAutoColumns"
}), cl = X({
  prop: "gridAutoRows"
}), ul = X({
  prop: "gridTemplateColumns"
}), fl = X({
  prop: "gridTemplateRows"
}), dl = X({
  prop: "gridTemplateAreas"
}), pl = X({
  prop: "gridArea"
});
xr(Er, Cr, Tr, il, al, sl, ll, cl, ul, fl, dl, pl);
function Gt(e, t) {
  return t === "grey" ? t : e;
}
const hl = X({
  prop: "color",
  themeKey: "palette",
  transform: Gt
}), ml = X({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Gt
}), gl = X({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Gt
});
xr(hl, ml, gl);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const vl = X({
  prop: "width",
  transform: De
}), fo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || lo[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: De(n)
      };
    };
    return mt(e, e.maxWidth, t);
  }
  return null;
};
fo.filterProps = ["maxWidth"];
const yl = X({
  prop: "minWidth",
  transform: De
}), bl = X({
  prop: "height",
  transform: De
}), xl = X({
  prop: "maxHeight",
  transform: De
}), wl = X({
  prop: "minHeight",
  transform: De
});
X({
  prop: "size",
  cssProperty: "width",
  transform: De
});
X({
  prop: "size",
  cssProperty: "height",
  transform: De
});
const El = X({
  prop: "boxSizing"
});
xr(vl, fo, yl, bl, xl, wl, El);
const Cl = {
  // borders
  border: {
    themeKey: "borders",
    transform: it
  },
  borderTop: {
    themeKey: "borders",
    transform: it
  },
  borderRight: {
    themeKey: "borders",
    transform: it
  },
  borderBottom: {
    themeKey: "borders",
    transform: it
  },
  borderLeft: {
    themeKey: "borders",
    transform: it
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
    style: wr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Gt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Gt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Gt
  },
  // spacing
  p: {
    style: le
  },
  pt: {
    style: le
  },
  pr: {
    style: le
  },
  pb: {
    style: le
  },
  pl: {
    style: le
  },
  px: {
    style: le
  },
  py: {
    style: le
  },
  padding: {
    style: le
  },
  paddingTop: {
    style: le
  },
  paddingRight: {
    style: le
  },
  paddingBottom: {
    style: le
  },
  paddingLeft: {
    style: le
  },
  paddingX: {
    style: le
  },
  paddingY: {
    style: le
  },
  paddingInline: {
    style: le
  },
  paddingInlineStart: {
    style: le
  },
  paddingInlineEnd: {
    style: le
  },
  paddingBlock: {
    style: le
  },
  paddingBlockStart: {
    style: le
  },
  paddingBlockEnd: {
    style: le
  },
  m: {
    style: se
  },
  mt: {
    style: se
  },
  mr: {
    style: se
  },
  mb: {
    style: se
  },
  ml: {
    style: se
  },
  mx: {
    style: se
  },
  my: {
    style: se
  },
  margin: {
    style: se
  },
  marginTop: {
    style: se
  },
  marginRight: {
    style: se
  },
  marginBottom: {
    style: se
  },
  marginLeft: {
    style: se
  },
  marginX: {
    style: se
  },
  marginY: {
    style: se
  },
  marginInline: {
    style: se
  },
  marginInlineStart: {
    style: se
  },
  marginInlineEnd: {
    style: se
  },
  marginBlock: {
    style: se
  },
  marginBlockStart: {
    style: se
  },
  marginBlockEnd: {
    style: se
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
    style: Er
  },
  rowGap: {
    style: Tr
  },
  columnGap: {
    style: Cr
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
    transform: De
  },
  maxWidth: {
    style: fo
  },
  minWidth: {
    transform: De
  },
  height: {
    transform: De
  },
  maxHeight: {
    transform: De
  },
  minHeight: {
    transform: De
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
}, po = Cl;
function Tl(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Ol(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pl() {
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
      themeKey: u,
      transform: c,
      style: h
    } = s;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = br(o, u) || {};
    return h ? h(a) : mt(a, r, (y) => {
      let f = Jn(p, c, y);
      return y === f && typeof y == "string" && (f = Jn(p, c, `${n}${y === "default" ? "" : ae(y)}`, y)), l === !1 ? f : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : po;
    function s(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const c = zs(i.breakpoints), h = Object.keys(c);
      let p = c;
      return Object.keys(u).forEach((g) => {
        const y = Ol(u[g], i);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              p = pn(p, e(g, y, i, a));
            else {
              const f = mt({
                theme: i
              }, y, (E) => ({
                [g]: E
              }));
              Tl(f, y) ? p[g] = t({
                sx: y,
                theme: i
              }) : p = pn(p, f);
            }
          else
            p = pn(p, e(g, y, i, a));
      }), js(h, p);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Hi = Pl();
Hi.filterProps = ["sx"];
const ho = Hi, Sl = ["breakpoints", "palette", "spacing", "shape"];
function mo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = de(e, Sl), s = Ls(n), l = qs(o);
  let u = Xe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: l,
    shape: x({}, Fs, i)
  }, a);
  return u = t.reduce((c, h) => Xe(c, h), u), u.unstable_sxConfig = x({}, po, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return ho({
      sx: h,
      theme: this
    });
  }, u;
}
function Rl(e) {
  return Object.keys(e).length === 0;
}
function go(e = null) {
  const t = d.useContext(On);
  return !t || Rl(t) ? e : t;
}
const $l = mo();
function Ui(e = $l) {
  return go(e);
}
function Ki(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ki(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ve() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ki(e)) && (r && (r += " "), r += t);
  return r;
}
const kl = ["variant"];
function Ho(e) {
  return e.length === 0;
}
function Gi(e) {
  const {
    variant: t
  } = e, n = de(e, kl);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += Ho(r) ? e[o] : ae(e[o]) : r += `${Ho(r) ? o : ae(o)}${ae(e[o].toString())}`;
  }), r;
}
const Al = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ml(e) {
  return Object.keys(e).length === 0;
}
function Il(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Bl = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Qn = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = Gi(n.props);
    t[r] = n.style;
  }), t;
}, _l = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Qn(n);
}, er = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(t[Gi(i.props)]);
  }), o;
}, Dl = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return er(e, t, i);
};
function Kn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ll = mo(), Nl = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Gn({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Ml(t) ? e : t[n] || t;
}
function Fl(e) {
  return e ? (t, n) => n[e] : null;
}
const Uo = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(x({}, t, {
    theme: Gn(x({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = er(t, Qn(i), i);
    return [o, ...a];
  }
  return o;
};
function zl(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ll,
    rootShouldForwardProp: r = Kn,
    slotShouldForwardProp: o = Kn
  } = e, i = (a) => ho(x({}, a, {
    theme: Gn(x({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    Bs(a, (b) => b.filter((C) => !(C != null && C.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: c,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Fl(Nl(u))
    } = s, g = de(s, Al), y = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = h || !1;
    let E, O = Kn;
    u === "Root" || u === "root" ? O = r : u ? O = o : Il(a) && (O = void 0);
    const S = Is(a, x({
      shouldForwardProp: O,
      label: E
    }, g)), R = (b, ...C) => {
      const P = C ? C.map((T) => {
        if (typeof T == "function" && T.__emotion_real !== T)
          return ($) => Uo({
            styledArg: T,
            props: $,
            defaultTheme: n,
            themeId: t
          });
        if (xt(T)) {
          let $ = T, F;
          return T && T.variants && (F = T.variants, delete $.variants, $ = (z) => {
            let W = T;
            return er(z, Qn(F), F).forEach((M) => {
              W = Xe(W, M);
            }), W;
          }), $;
        }
        return T;
      }) : [];
      let w = b;
      if (xt(b)) {
        let T;
        b && b.variants && (T = b.variants, delete w.variants, w = ($) => {
          let F = b;
          return er($, Qn(T), T).forEach((W) => {
            F = Xe(F, W);
          }), F;
        });
      } else
        typeof b == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        b.__emotion_real !== b && (w = (T) => Uo({
          styledArg: b,
          props: T,
          defaultTheme: n,
          themeId: t
        }));
      l && p && P.push((T) => {
        const $ = Gn(x({}, T, {
          defaultTheme: n,
          themeId: t
        })), F = Bl(l, $);
        if (F) {
          const z = {};
          return Object.entries(F).forEach(([W, k]) => {
            z[W] = typeof k == "function" ? k(x({}, T, {
              theme: $
            })) : k;
          }), p(T, z);
        }
        return null;
      }), l && !y && P.push((T) => {
        const $ = Gn(x({}, T, {
          defaultTheme: n,
          themeId: t
        }));
        return Dl(T, _l(l, $), $, l);
      }), f || P.push(i);
      const N = P.length - C.length;
      if (Array.isArray(b) && N > 0) {
        const T = new Array(N).fill("");
        w = [...b, ...T], w.raw = [...b.raw, ...T];
      }
      const D = S(w, ...P);
      return a.muiName && (D.muiName = a.muiName), D;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
function jl(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : so(t.components[n].defaultProps, r);
}
function Vl({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Ui(n);
  return r && (o = o[r] || o), jl({
    theme: o,
    name: t,
    props: e
  });
}
function vo(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function Wl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function It(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return It(Wl(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Mt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Mt(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Or(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Hl(e) {
  e = It(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Or({
    type: s,
    values: l
  });
}
function Ko(e) {
  e = It(e);
  let t = e.type === "hsl" || e.type === "hsla" ? It(Hl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ul(e, t) {
  const n = Ko(e), r = Ko(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function wt(e, t) {
  return e = It(e), t = vo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Or(e);
}
function Kl(e, t) {
  if (e = It(e), t = vo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Or(e);
}
function Gl(e, t) {
  if (e = It(e), t = vo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Or(e);
}
const ql = /* @__PURE__ */ d.createContext(null), qi = ql;
function Xi() {
  return d.useContext(qi);
}
const Xl = typeof Symbol == "function" && Symbol.for, Yl = Xl ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Zl(e, t) {
  return typeof t == "function" ? t(e) : x({}, e, t);
}
function Jl(e) {
  const {
    children: t,
    theme: n
  } = e, r = Xi(), o = d.useMemo(() => {
    const i = r === null ? n : Zl(r, n);
    return i != null && (i[Yl] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ ee.jsx(qi.Provider, {
    value: o,
    children: t
  });
}
const Go = {};
function qo(e, t, n, r = !1) {
  return d.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), a = e ? x({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? x({}, t, {
      [e]: n
    }) : x({}, t, n);
  }, [e, t, n, r]);
}
function Ql(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = go(Go), i = Xi() || Go, a = qo(r, o, n), s = qo(r, i, n, !0);
  return /* @__PURE__ */ ee.jsx(Jl, {
    theme: s,
    children: /* @__PURE__ */ ee.jsx(On.Provider, {
      value: a,
      children: t
    })
  });
}
function ec(e, t) {
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
const tc = {
  black: "#000",
  white: "#fff"
}, wn = tc, nc = {
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
}, rc = nc, oc = {
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
}, Ft = oc, ic = {
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
}, zt = ic, ac = {
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
}, ln = ac, sc = {
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
}, jt = sc, lc = {
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
}, Vt = lc, cc = {
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
}, Wt = cc, uc = ["mode", "contrastThreshold", "tonalOffset"], Xo = {
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
    paper: wn.white,
    default: wn.white
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
}, Br = {
  text: {
    primary: wn.white,
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
    active: wn.white,
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
function Yo(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Gl(e.main, o) : t === "dark" && (e.dark = Kl(e.main, i)));
}
function fc(e = "light") {
  return e === "dark" ? {
    main: jt[200],
    light: jt[50],
    dark: jt[400]
  } : {
    main: jt[700],
    light: jt[400],
    dark: jt[800]
  };
}
function dc(e = "light") {
  return e === "dark" ? {
    main: Ft[200],
    light: Ft[50],
    dark: Ft[400]
  } : {
    main: Ft[500],
    light: Ft[300],
    dark: Ft[700]
  };
}
function pc(e = "light") {
  return e === "dark" ? {
    main: zt[500],
    light: zt[300],
    dark: zt[700]
  } : {
    main: zt[700],
    light: zt[400],
    dark: zt[800]
  };
}
function hc(e = "light") {
  return e === "dark" ? {
    main: Vt[400],
    light: Vt[300],
    dark: Vt[700]
  } : {
    main: Vt[700],
    light: Vt[500],
    dark: Vt[900]
  };
}
function mc(e = "light") {
  return e === "dark" ? {
    main: Wt[400],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: Wt[800],
    light: Wt[500],
    dark: Wt[900]
  };
}
function gc(e = "light") {
  return e === "dark" ? {
    main: ln[400],
    light: ln[300],
    dark: ln[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ln[500],
    dark: ln[900]
  };
}
function vc(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = de(e, uc), i = e.primary || fc(t), a = e.secondary || dc(t), s = e.error || pc(t), l = e.info || hc(t), u = e.success || mc(t), c = e.warning || gc(t);
  function h(f) {
    return Ul(f, Br.text.primary) >= n ? Br.text.primary : Xo.text.primary;
  }
  const p = ({
    color: f,
    name: E,
    mainShade: O = 500,
    lightShade: S = 300,
    darkShade: R = 700
  }) => {
    if (f = x({}, f), !f.main && f[O] && (f.main = f[O]), !f.hasOwnProperty("main"))
      throw new Error(Mt(11, E ? ` (${E})` : "", O));
    if (typeof f.main != "string")
      throw new Error(Mt(12, E ? ` (${E})` : "", JSON.stringify(f.main)));
    return Yo(f, "light", S, r), Yo(f, "dark", R, r), f.contrastText || (f.contrastText = h(f.main)), f;
  }, g = {
    dark: Br,
    light: Xo
  };
  return Xe(x({
    // A collection of common colors.
    common: x({}, wn),
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
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: rc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), o);
}
const yc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function bc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zo = {
  textTransform: "uppercase"
}, Jo = '"Roboto", "Helvetica", "Arial", sans-serif';
function xc(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Jo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: h
  } = n, p = de(n, yc), g = o / 14, y = h || ((O) => `${O / u * g}rem`), f = (O, S, R, b, C) => x({
    fontFamily: r,
    fontWeight: O,
    fontSize: y(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, r === Jo ? {
    letterSpacing: `${bc(b / S)}em`
  } : {}, C, c), E = {
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
    button: f(s, 14, 1.75, 0.4, Zo),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, Zo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Xe(x({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, E), p, {
    clone: !1
    // No need to clone deep
  });
}
const wc = 0.2, Ec = 0.14, Cc = 0.12;
function oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ec})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Cc})`].join(",");
}
const Tc = ["none", oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Oc = Tc, Pc = ["duration", "easing", "delay"], Sc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Rc = {
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
function Qo(e) {
  return `${Math.round(e)}ms`;
}
function $c(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function kc(e) {
  const t = x({}, Sc, e.easing), n = x({}, Rc, e.duration);
  return x({
    getAutoHeightDuration: $c,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: s = t.easeInOut,
        delay: l = 0
      } = i;
      return de(i, Pc), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof a == "string" ? a : Qo(a)} ${s} ${typeof l == "string" ? l : Qo(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Ac = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Mc = Ac, Ic = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Bc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = de(e, Ic);
  if (e.vars)
    throw new Error(Mt(18));
  const s = vc(r), l = mo(e);
  let u = Xe(l, {
    mixins: ec(l.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Oc.slice(),
    typography: xc(s, i),
    transitions: kc(o),
    zIndex: x({}, Mc)
  });
  return u = Xe(u, a), u = t.reduce((c, h) => Xe(c, h), u), u.unstable_sxConfig = x({}, po, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return ho({
      sx: h,
      theme: this
    });
  }, u;
}
const _c = Bc(), yo = _c;
function Yi() {
  const e = Ui(yo);
  return e[xn] || e;
}
function nn({
  props: e,
  name: t
}) {
  return Vl({
    props: e,
    name: t,
    defaultTheme: yo,
    themeId: xn
  });
}
const Zi = (e) => Kn(e) && e !== "classes", Dc = zl({
  themeId: xn,
  defaultTheme: yo,
  rootShouldForwardProp: Zi
}), Ye = Dc, Lc = ["theme"];
function Pd(e) {
  let {
    theme: t
  } = e, n = de(e, Lc);
  const r = t[xn];
  return /* @__PURE__ */ ee.jsx(Ql, x({}, n, {
    themeId: r ? xn : void 0,
    theme: r || t
  }));
}
function Hr(e, t) {
  return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Hr(e, t);
}
function Ji(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hr(e, t);
}
const ei = {
  disabled: !1
}, tr = dt.createContext(null);
var Nc = function(t) {
  return t.scrollTop;
}, fn = "unmounted", Rt = "exited", $t = "entering", Ut = "entered", Ur = "exiting", vt = /* @__PURE__ */ function(e) {
  Ji(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, s = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = Rt, i.appearStatus = $t) : l = Ut : r.unmountOnExit || r.mountOnEnter ? l = fn : l = Rt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === fn ? {
      status: Rt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== $t && a !== Ut && (i = $t) : (a === $t || a === Ut) && (i = Ur);
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
      if (this.cancelNextCallback(), i === $t) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Dn.findDOMNode(this);
          a && Nc(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Rt && this.setState({
        status: fn
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [s] : [Dn.findDOMNode(this), s], u = l[0], c = l[1], h = this.getTimeouts(), p = s ? h.appear : h.enter;
    if (!o && !a || ei.disabled) {
      this.safeSetState({
        status: Ut
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: $t
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: Ut
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Dn.findDOMNode(this);
    if (!i || ei.disabled) {
      this.safeSetState({
        status: Rt
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Ur
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Rt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : Dn.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === fn)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = de(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ dt.createElement(tr.Provider, {
        value: null
      }, typeof a == "function" ? a(o, s) : dt.cloneElement(dt.Children.only(a), s))
    );
  }, t;
}(dt.Component);
vt.contextType = tr;
vt.propTypes = {};
function Ht() {
}
vt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ht,
  onEntering: Ht,
  onEntered: Ht,
  onExit: Ht,
  onExiting: Ht,
  onExited: Ht
};
vt.UNMOUNTED = fn;
vt.EXITED = Rt;
vt.ENTERING = $t;
vt.ENTERED = Ut;
vt.EXITING = Ur;
const Fc = vt;
function zc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bo(e, t) {
  var n = function(i) {
    return t && d.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && d.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function jc(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var u = r[l][a];
        s[r[l][a]] = n(u);
      }
    s[l] = n(l);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = n(o[a]);
  return s;
}
function kt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Vc(e, t) {
  return bo(e.children, function(n) {
    return d.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: kt(n, "appear", e),
      enter: kt(n, "enter", e),
      exit: kt(n, "exit", e)
    });
  });
}
function Wc(e, t, n) {
  var r = bo(e.children), o = jc(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (d.isValidElement(a)) {
      var s = i in t, l = i in r, u = t[i], c = d.isValidElement(u) && !u.props.in;
      l && (!s || c) ? o[i] = d.cloneElement(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: kt(a, "exit", e),
        enter: kt(a, "enter", e)
      }) : !l && s && !c ? o[i] = d.cloneElement(a, {
        in: !1
      }) : l && s && d.isValidElement(u) && (o[i] = d.cloneElement(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: kt(a, "exit", e),
        enter: kt(a, "enter", e)
      }));
    }
  }), o;
}
var Hc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Uc = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xo = /* @__PURE__ */ function(e) {
  Ji(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(zc(i));
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
      children: l ? Vc(o, s) : Wc(o, a, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = bo(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = x({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = de(o, ["component", "childFactory"]), l = this.state.contextValue, u = Hc(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ dt.createElement(tr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ dt.createElement(tr.Provider, {
      value: l
    }, /* @__PURE__ */ dt.createElement(i, s, u));
  }, t;
}(dt.Component);
xo.propTypes = {};
xo.defaultProps = Uc;
const Kc = xo, Gc = (e) => e.scrollTop;
function ti(e, t) {
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
function qc(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: l,
    timeout: u
  } = e, [c, h] = d.useState(!1), p = ve(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, y = ve(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && h(!0), d.useEffect(() => {
    if (!s && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, s, u]), /* @__PURE__ */ ee.jsx("span", {
    className: p,
    style: g,
    children: /* @__PURE__ */ ee.jsx("span", {
      className: y
    })
  });
}
const Xc = tn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ve = Xc, Yc = ["center", "classes", "className"];
let Pr = (e) => e, ni, ri, oi, ii;
const Kr = 550, Zc = 80, Jc = ao(ni || (ni = Pr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Qc = ao(ri || (ri = Pr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), eu = ao(oi || (oi = Pr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), tu = Ye("span", {
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
}), nu = Ye(qc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ii || (ii = Pr`
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
`), Ve.rippleVisible, Jc, Kr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ve.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ve.child, Ve.childLeaving, Qc, Kr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ve.childPulsate, eu, ({
  theme: e
}) => e.transitions.easing.easeInOut), ru = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = nn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, s = de(r, Yc), [l, u] = d.useState([]), c = d.useRef(0), h = d.useRef(null);
  d.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const p = d.useRef(!1), g = d.useRef(0), y = d.useRef(null), f = d.useRef(null);
  d.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const E = d.useCallback((b) => {
    const {
      pulsate: C,
      rippleX: P,
      rippleY: w,
      rippleSize: N,
      cb: D
    } = b;
    u((T) => [...T, /* @__PURE__ */ ee.jsx(nu, {
      classes: {
        ripple: ve(i.ripple, Ve.ripple),
        rippleVisible: ve(i.rippleVisible, Ve.rippleVisible),
        ripplePulsate: ve(i.ripplePulsate, Ve.ripplePulsate),
        child: ve(i.child, Ve.child),
        childLeaving: ve(i.childLeaving, Ve.childLeaving),
        childPulsate: ve(i.childPulsate, Ve.childPulsate)
      },
      timeout: Kr,
      pulsate: C,
      rippleX: P,
      rippleY: w,
      rippleSize: N
    }, c.current)]), c.current += 1, h.current = D;
  }, [i]), O = d.useCallback((b = {}, C = {}, P = () => {
  }) => {
    const {
      pulsate: w = !1,
      center: N = o || C.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = C;
    if ((b == null ? void 0 : b.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (p.current = !0);
    const T = D ? null : f.current, $ = T ? T.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, z, W;
    if (N || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      F = Math.round($.width / 2), z = Math.round($.height / 2);
    else {
      const {
        clientX: k,
        clientY: M
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      F = Math.round(k - $.left), z = Math.round(M - $.top);
    }
    if (N)
      W = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const k = Math.max(Math.abs((T ? T.clientWidth : 0) - F), F) * 2 + 2, M = Math.max(Math.abs((T ? T.clientHeight : 0) - z), z) * 2 + 2;
      W = Math.sqrt(k ** 2 + M ** 2);
    }
    b != null && b.touches ? y.current === null && (y.current = () => {
      E({
        pulsate: w,
        rippleX: F,
        rippleY: z,
        rippleSize: W,
        cb: P
      });
    }, g.current = setTimeout(() => {
      y.current && (y.current(), y.current = null);
    }, Zc)) : E({
      pulsate: w,
      rippleX: F,
      rippleY: z,
      rippleSize: W,
      cb: P
    });
  }, [o, E]), S = d.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), R = d.useCallback((b, C) => {
    if (clearTimeout(g.current), (b == null ? void 0 : b.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.current = setTimeout(() => {
        R(b, C);
      });
      return;
    }
    y.current = null, u((P) => P.length > 0 ? P.slice(1) : P), h.current = C;
  }, []);
  return d.useImperativeHandle(n, () => ({
    pulsate: S,
    start: O,
    stop: R
  }), [S, O, R]), /* @__PURE__ */ ee.jsx(tu, x({
    className: ve(Ve.root, i.root, a),
    ref: f
  }, s, {
    children: /* @__PURE__ */ ee.jsx(Kc, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), ou = ru;
function iu(e) {
  return en("MuiButtonBase", e);
}
const au = tn("MuiButtonBase", ["root", "disabled", "focusVisible"]), su = au, lu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], cu = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = Pn({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, iu, o);
  return n && r && (a.root += ` ${r}`), a;
}, uu = Ye("button", {
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
  [`&.${su.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), fu = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = nn({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: h = !1,
    focusRipple: p = !1,
    LinkComponent: g = "a",
    onBlur: y,
    onClick: f,
    onContextMenu: E,
    onDragLeave: O,
    onFocus: S,
    onFocusVisible: R,
    onKeyDown: b,
    onKeyUp: C,
    onMouseDown: P,
    onMouseLeave: w,
    onMouseUp: N,
    onTouchEnd: D,
    onTouchMove: T,
    onTouchStart: $,
    tabIndex: F = 0,
    TouchRippleProps: z,
    touchRippleRef: W,
    type: k
  } = r, M = de(r, lu), B = d.useRef(null), V = d.useRef(null), Q = ht(V, W), {
    isFocusVisibleRef: ie,
    onFocus: Ze,
    onBlur: Ke,
    ref: ce
  } = ji(), [U, me] = d.useState(!1);
  u && U && me(!1), d.useImperativeHandle(o, () => ({
    focusVisible: () => {
      me(!0), B.current.focus();
    }
  }), []);
  const [we, te] = d.useState(!1);
  d.useEffect(() => {
    te(!0);
  }, []);
  const Y = we && !c && !u;
  d.useEffect(() => {
    U && p && !c && we && V.current.pulsate();
  }, [c, p, U, we]);
  function ne(_, Te, et = h) {
    return pt((tt) => (Te && Te(tt), !et && V.current && V.current[_](tt), !0));
  }
  const Je = ne("start", P), re = ne("stop", E), ct = ne("stop", O), ut = ne("stop", N), pe = ne("stop", (_) => {
    U && _.preventDefault(), w && w(_);
  }), I = ne("start", $), Qe = ne("stop", D), H = ne("stop", T), $e = ne("stop", (_) => {
    Ke(_), ie.current === !1 && me(!1), y && y(_);
  }, !1), Ge = pt((_) => {
    B.current || (B.current = _.currentTarget), Ze(_), ie.current === !0 && (me(!0), R && R(_)), S && S(_);
  }), ye = () => {
    const _ = B.current;
    return l && l !== "button" && !(_.tagName === "A" && _.href);
  }, Pe = d.useRef(!1), Ee = pt((_) => {
    p && !Pe.current && U && V.current && _.key === " " && (Pe.current = !0, V.current.stop(_, () => {
      V.current.start(_);
    })), _.target === _.currentTarget && ye() && _.key === " " && _.preventDefault(), b && b(_), _.target === _.currentTarget && ye() && _.key === "Enter" && !u && (_.preventDefault(), f && f(_));
  }), qe = pt((_) => {
    p && _.key === " " && V.current && U && !_.defaultPrevented && (Pe.current = !1, V.current.stop(_, () => {
      V.current.pulsate(_);
    })), C && C(_), f && _.target === _.currentTarget && ye() && _.key === " " && !_.defaultPrevented && f(_);
  });
  let Se = l;
  Se === "button" && (M.href || M.to) && (Se = g);
  const Ce = {};
  Se === "button" ? (Ce.type = k === void 0 ? "button" : k, Ce.disabled = u) : (!M.href && !M.to && (Ce.role = "button"), u && (Ce["aria-disabled"] = u));
  const Re = ht(n, ce, B), ue = x({}, r, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: h,
    focusRipple: p,
    tabIndex: F,
    focusVisible: U
  }), Z = cu(ue);
  return /* @__PURE__ */ ee.jsxs(uu, x({
    as: Se,
    className: ve(Z.root, s),
    ownerState: ue,
    onBlur: $e,
    onClick: f,
    onContextMenu: re,
    onFocus: Ge,
    onKeyDown: Ee,
    onKeyUp: qe,
    onMouseDown: Je,
    onMouseLeave: pe,
    onMouseUp: ut,
    onDragLeave: ct,
    onTouchEnd: Qe,
    onTouchMove: H,
    onTouchStart: I,
    ref: Re,
    tabIndex: u ? -1 : F,
    type: k
  }, Ce, M, {
    children: [a, Y ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ ee.jsx(ou, x({
        ref: Q,
        center: i
      }, z))
    ) : null]
  }));
}), Qi = fu;
function du(e) {
  return en("MuiIconButton", e);
}
const pu = tn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), hu = pu, mu = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], gu = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${ae(r)}`, o && `edge${ae(o)}`, `size${ae(i)}`]
  };
  return Pn(a, du, t);
}, vu = Ye(Qi, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${ae(n.color)}`], n.edge && t[`edge${ae(n.edge)}`], t[`size${ae(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : wt(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return x({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && x({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": x({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : wt(r.main, e.palette.action.hoverOpacity)
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
    [`&.${hu.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), yu = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = nn({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: c = "medium"
  } = r, h = de(r, mu), p = x({}, r, {
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: u,
    size: c
  }), g = gu(p);
  return /* @__PURE__ */ ee.jsx(vu, x({
    className: ve(g.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ownerState: p
  }, h, {
    children: i
  }));
}), Sd = yu;
function bu(e) {
  return typeof e == "string";
}
function dn(e, t, n) {
  return e === void 0 || bu(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, n)
  });
}
const xu = {
  disableDefaultClasses: !1
}, wu = /* @__PURE__ */ d.createContext(xu);
function Eu(e) {
  const {
    disableDefaultClasses: t
  } = d.useContext(wu);
  return (n) => t ? "" : e(n);
}
function qn(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Cu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ai(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Tu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = ve(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = x({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = x({}, n, o, r);
    return g.length > 0 && (f.className = g), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const a = qn(x({}, o, r)), s = ai(r), l = ai(o), u = t(a), c = ve(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = x({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = x({}, u, n, l, s);
  return c.length > 0 && (p.className = c), Object.keys(h).length > 0 && (p.style = h), {
    props: p,
    internalRef: u.ref
  };
}
const Ou = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Pu(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = de(e, Ou), s = i ? {} : Cu(r, o), {
    props: l,
    internalRef: u
  } = Tu(x({}, a, {
    externalSlotProps: s
  })), c = ht(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return dn(n, x({}, l, {
    ref: c
  }), o);
}
const Su = /* @__PURE__ */ d.createContext(void 0);
function Ru() {
  return d.useContext(Su);
}
function Rd(e = {}) {
  const {
    defaultValue: t,
    disabled: n = !1,
    error: r = !1,
    onBlur: o,
    onChange: i,
    onFocus: a,
    required: s = !1,
    value: l,
    inputRef: u
  } = e, c = Ru();
  let h, p, g, y, f;
  if (c) {
    var E, O, S;
    h = void 0, p = (E = c.disabled) != null ? E : !1, g = (O = c.error) != null ? O : !1, y = (S = c.required) != null ? S : !1, f = c.value;
  } else
    h = t, p = n, g = r, y = s, f = l;
  const {
    current: R
  } = d.useRef(f != null), b = d.useCallback((k) => {
  }, []), C = d.useRef(null), P = ht(C, u, b), [w, N] = d.useState(!1);
  d.useEffect(() => {
    !c && p && w && (N(!1), o == null || o());
  }, [c, p, w, o]);
  const D = (k) => (M) => {
    var B;
    if (c != null && c.disabled) {
      M.stopPropagation();
      return;
    }
    if ((B = k.onFocus) == null || B.call(k, M), c && c.onFocus) {
      var V;
      c == null || (V = c.onFocus) == null || V.call(c);
    } else
      N(!0);
  }, T = (k) => (M) => {
    var B;
    (B = k.onBlur) == null || B.call(k, M), c && c.onBlur ? c.onBlur() : N(!1);
  }, $ = (k) => (M, ...B) => {
    var V, Q;
    if (!R && (M.target || C.current) == null)
      throw new Error(Mt(17));
    c == null || (V = c.onChange) == null || V.call(c, M), (Q = k.onChange) == null || Q.call(k, M, ...B);
  }, F = (k) => (M) => {
    var B;
    C.current && M.currentTarget === M.target && C.current.focus(), (B = k.onClick) == null || B.call(k, M);
  };
  return {
    disabled: p,
    error: g,
    focused: w,
    formControlContext: c,
    getInputProps: (k = {}) => {
      const B = x({}, {
        onBlur: o,
        onChange: i,
        onFocus: a
      }, qn(k)), V = x({}, B, {
        onBlur: T(B),
        onChange: $(B),
        onFocus: D(B)
      });
      return x({}, V, {
        "aria-invalid": g || void 0,
        defaultValue: h,
        value: f,
        required: y,
        disabled: p
      }, k, {
        ref: P
      }, V);
    },
    getRootProps: (k = {}) => {
      const M = qn(e, ["onBlur", "onChange", "onFocus"]), B = x({}, M, qn(k));
      return x({}, k, B, {
        onClick: F(B)
      });
    },
    inputRef: P,
    required: y,
    value: f
  };
}
var ke = "top", He = "bottom", Ue = "right", Ae = "left", wo = "auto", $n = [ke, He, Ue, Ae], Xt = "start", En = "end", $u = "clippingParents", ea = "viewport", cn = "popper", ku = "reference", si = /* @__PURE__ */ $n.reduce(function(e, t) {
  return e.concat([t + "-" + Xt, t + "-" + En]);
}, []), ta = /* @__PURE__ */ [].concat($n, [wo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Xt, t + "-" + En]);
}, []), Au = "beforeRead", Mu = "read", Iu = "afterRead", Bu = "beforeMain", _u = "main", Du = "afterMain", Lu = "beforeWrite", Nu = "write", Fu = "afterWrite", zu = [Au, Mu, Iu, Bu, _u, Du, Lu, Nu, Fu];
function lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ne(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Bt(e) {
  var t = Ne(e).Element;
  return e instanceof t || e instanceof Element;
}
function We(e) {
  var t = Ne(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ju(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !We(i) || !lt(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Vu(e) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !We(o) || !lt(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Wu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ju,
  effect: Vu,
  requires: ["computeStyles"]
};
function st(e) {
  return e.split("-")[0];
}
var At = Math.max, nr = Math.min, Yt = Math.round;
function Gr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function na() {
  return !/^((?!chrome|android).)*safari/i.test(Gr());
}
function Zt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && We(e) && (o = e.offsetWidth > 0 && Yt(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Yt(r.height) / e.offsetHeight || 1);
  var a = Bt(e) ? Ne(e) : window, s = a.visualViewport, l = !na() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, h = r.width / o, p = r.height / i;
  return {
    width: h,
    height: p,
    top: c,
    right: u + h,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Co(e) {
  var t = Zt(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ra(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Eo(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function gt(e) {
  return Ne(e).getComputedStyle(e);
}
function Hu(e) {
  return ["table", "td", "th"].indexOf(lt(e)) >= 0;
}
function Ct(e) {
  return ((Bt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Sr(e) {
  return lt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Eo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ct(e)
  );
}
function li(e) {
  return !We(e) || // https://github.com/popperjs/popper-core/issues/837
  gt(e).position === "fixed" ? null : e.offsetParent;
}
function Uu(e) {
  var t = /firefox/i.test(Gr()), n = /Trident/i.test(Gr());
  if (n && We(e)) {
    var r = gt(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Sr(e);
  for (Eo(o) && (o = o.host); We(o) && ["html", "body"].indexOf(lt(o)) < 0; ) {
    var i = gt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function kn(e) {
  for (var t = Ne(e), n = li(e); n && Hu(n) && gt(n).position === "static"; )
    n = li(n);
  return n && (lt(n) === "html" || lt(n) === "body" && gt(n).position === "static") ? t : n || Uu(e) || t;
}
function To(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function hn(e, t, n) {
  return At(e, nr(t, n));
}
function Ku(e, t, n) {
  var r = hn(e, t, n);
  return r > n ? n : r;
}
function oa() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ia(e) {
  return Object.assign({}, oa(), e);
}
function aa(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Gu = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ia(typeof t != "number" ? t : aa(t, $n));
};
function qu(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = st(n.placement), l = To(s), u = [Ae, Ue].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var h = Gu(o.padding, n), p = Co(i), g = l === "y" ? ke : Ae, y = l === "y" ? He : Ue, f = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], E = a[l] - n.rects.reference[l], O = kn(i), S = O ? l === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, R = f / 2 - E / 2, b = h[g], C = S - p[c] - h[y], P = S / 2 - p[c] / 2 + R, w = hn(b, P, C), N = l;
    n.modifiersData[r] = (t = {}, t[N] = w, t.centerOffset = w - P, t);
  }
}
function Xu(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ra(t.elements.popper, o) && (t.elements.arrow = o));
}
const Yu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: qu,
  effect: Xu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Jt(e) {
  return e.split("-")[1];
}
var Zu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ju(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Yt(n * o) / o || 0,
    y: Yt(r * o) / o || 0
  };
}
function ci(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, h = e.isFixed, p = a.x, g = p === void 0 ? 0 : p, y = a.y, f = y === void 0 ? 0 : y, E = typeof c == "function" ? c({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = E.x, f = E.y;
  var O = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), R = Ae, b = ke, C = window;
  if (u) {
    var P = kn(n), w = "clientHeight", N = "clientWidth";
    if (P === Ne(n) && (P = Ct(n), gt(P).position !== "static" && s === "absolute" && (w = "scrollHeight", N = "scrollWidth")), P = P, o === ke || (o === Ae || o === Ue) && i === En) {
      b = He;
      var D = h && P === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[w]
      );
      f -= D - r.height, f *= l ? 1 : -1;
    }
    if (o === Ae || (o === ke || o === He) && i === En) {
      R = Ue;
      var T = h && P === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[N]
      );
      g -= T - r.width, g *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: s
  }, u && Zu), F = c === !0 ? Ju({
    x: g,
    y: f
  }, Ne(n)) : {
    x: g,
    y: f
  };
  if (g = F.x, f = F.y, l) {
    var z;
    return Object.assign({}, $, (z = {}, z[b] = S ? "0" : "", z[R] = O ? "0" : "", z.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", z));
  }
  return Object.assign({}, $, (t = {}, t[b] = S ? f + "px" : "", t[R] = O ? g + "px" : "", t.transform = "", t));
}
function Qu(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: st(t.placement),
    variation: Jt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ci(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ci(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ef = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qu,
  data: {}
};
var Nn = {
  passive: !0
};
function tf(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = Ne(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Nn);
  }), s && l.addEventListener("resize", n.update, Nn), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Nn);
    }), s && l.removeEventListener("resize", n.update, Nn);
  };
}
const nf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tf,
  data: {}
};
var rf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return rf[t];
  });
}
var of = {
  start: "end",
  end: "start"
};
function ui(e) {
  return e.replace(/start|end/g, function(t) {
    return of[t];
  });
}
function Oo(e) {
  var t = Ne(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Po(e) {
  return Zt(Ct(e)).left + Oo(e).scrollLeft;
}
function af(e, t) {
  var n = Ne(e), r = Ct(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = na();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Po(e),
    y: l
  };
}
function sf(e) {
  var t, n = Ct(e), r = Oo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = At(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = At(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Po(e), l = -r.scrollTop;
  return gt(o || n).direction === "rtl" && (s += At(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function So(e) {
  var t = gt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function sa(e) {
  return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : We(e) && So(e) ? e : sa(Sr(e));
}
function mn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = sa(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ne(r), a = o ? [i].concat(i.visualViewport || [], So(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(mn(Sr(a)))
  );
}
function qr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function lf(e, t) {
  var n = Zt(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fi(e, t, n) {
  return t === ea ? qr(af(e, n)) : Bt(t) ? lf(t, n) : qr(sf(Ct(e)));
}
function cf(e) {
  var t = mn(Sr(e)), n = ["absolute", "fixed"].indexOf(gt(e).position) >= 0, r = n && We(e) ? kn(e) : e;
  return Bt(r) ? t.filter(function(o) {
    return Bt(o) && ra(o, r) && lt(o) !== "body";
  }) : [];
}
function uf(e, t, n, r) {
  var o = t === "clippingParents" ? cf(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = fi(e, u, r);
    return l.top = At(c.top, l.top), l.right = nr(c.right, l.right), l.bottom = nr(c.bottom, l.bottom), l.left = At(c.left, l.left), l;
  }, fi(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function la(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? st(r) : null, i = r ? Jt(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case ke:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case He:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ue:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ae:
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
  var u = o ? To(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Xt:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case En:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Cn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? $u : s, u = n.rootBoundary, c = u === void 0 ? ea : u, h = n.elementContext, p = h === void 0 ? cn : h, g = n.altBoundary, y = g === void 0 ? !1 : g, f = n.padding, E = f === void 0 ? 0 : f, O = ia(typeof E != "number" ? E : aa(E, $n)), S = p === cn ? ku : cn, R = e.rects.popper, b = e.elements[y ? S : p], C = uf(Bt(b) ? b : b.contextElement || Ct(e.elements.popper), l, c, a), P = Zt(e.elements.reference), w = la({
    reference: P,
    element: R,
    strategy: "absolute",
    placement: o
  }), N = qr(Object.assign({}, R, w)), D = p === cn ? N : P, T = {
    top: C.top - D.top + O.top,
    bottom: D.bottom - C.bottom + O.bottom,
    left: C.left - D.left + O.left,
    right: D.right - C.right + O.right
  }, $ = e.modifiersData.offset;
  if (p === cn && $) {
    var F = $[o];
    Object.keys(T).forEach(function(z) {
      var W = [Ue, He].indexOf(z) >= 0 ? 1 : -1, k = [ke, He].indexOf(z) >= 0 ? "y" : "x";
      T[z] += F[k] * W;
    });
  }
  return T;
}
function ff(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ta : l, c = Jt(r), h = c ? s ? si : si.filter(function(y) {
    return Jt(y) === c;
  }) : $n, p = h.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  p.length === 0 && (p = h);
  var g = p.reduce(function(y, f) {
    return y[f] = Cn(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[st(f)], y;
  }, {});
  return Object.keys(g).sort(function(y, f) {
    return g[y] - g[f];
  });
}
function df(e) {
  if (st(e) === wo)
    return [];
  var t = Xn(e);
  return [ui(e), t, ui(t)];
}
function pf(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, h = n.rootBoundary, p = n.altBoundary, g = n.flipVariations, y = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, E = t.options.placement, O = st(E), S = O === E, R = l || (S || !y ? [Xn(E)] : df(E)), b = [E].concat(R).reduce(function(U, me) {
      return U.concat(st(me) === wo ? ff(t, {
        placement: me,
        boundary: c,
        rootBoundary: h,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: f
      }) : me);
    }, []), C = t.rects.reference, P = t.rects.popper, w = /* @__PURE__ */ new Map(), N = !0, D = b[0], T = 0; T < b.length; T++) {
      var $ = b[T], F = st($), z = Jt($) === Xt, W = [ke, He].indexOf(F) >= 0, k = W ? "width" : "height", M = Cn(t, {
        placement: $,
        boundary: c,
        rootBoundary: h,
        altBoundary: p,
        padding: u
      }), B = W ? z ? Ue : Ae : z ? He : ke;
      C[k] > P[k] && (B = Xn(B));
      var V = Xn(B), Q = [];
      if (i && Q.push(M[F] <= 0), s && Q.push(M[B] <= 0, M[V] <= 0), Q.every(function(U) {
        return U;
      })) {
        D = $, N = !1;
        break;
      }
      w.set($, Q);
    }
    if (N)
      for (var ie = y ? 3 : 1, Ze = function(me) {
        var we = b.find(function(te) {
          var Y = w.get(te);
          if (Y)
            return Y.slice(0, me).every(function(ne) {
              return ne;
            });
        });
        if (we)
          return D = we, "break";
      }, Ke = ie; Ke > 0; Ke--) {
        var ce = Ze(Ke);
        if (ce === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const hf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function di(e, t, n) {
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
function pi(e) {
  return [ke, Ue, He, Ae].some(function(t) {
    return e[t] >= 0;
  });
}
function mf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Cn(t, {
    elementContext: "reference"
  }), s = Cn(t, {
    altBoundary: !0
  }), l = di(a, r), u = di(s, o, i), c = pi(l), h = pi(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": h
  });
}
const gf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mf
};
function vf(e, t, n) {
  var r = st(e), o = [Ae, ke].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Ae, Ue].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function yf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = ta.reduce(function(c, h) {
    return c[h] = vf(h, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const bf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: yf
};
function xf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = la({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xf,
  data: {}
};
function Ef(e) {
  return e === "x" ? "y" : "x";
}
function Cf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, h = n.padding, p = n.tether, g = p === void 0 ? !0 : p, y = n.tetherOffset, f = y === void 0 ? 0 : y, E = Cn(t, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: c
  }), O = st(t.placement), S = Jt(t.placement), R = !S, b = To(O), C = Ef(b), P = t.modifiersData.popperOffsets, w = t.rects.reference, N = t.rects.popper, D = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, T = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var z, W = b === "y" ? ke : Ae, k = b === "y" ? He : Ue, M = b === "y" ? "height" : "width", B = P[b], V = B + E[W], Q = B - E[k], ie = g ? -N[M] / 2 : 0, Ze = S === Xt ? w[M] : N[M], Ke = S === Xt ? -N[M] : -w[M], ce = t.elements.arrow, U = g && ce ? Co(ce) : {
        width: 0,
        height: 0
      }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : oa(), we = me[W], te = me[k], Y = hn(0, w[M], U[M]), ne = R ? w[M] / 2 - ie - Y - we - T.mainAxis : Ze - Y - we - T.mainAxis, Je = R ? -w[M] / 2 + ie + Y + te + T.mainAxis : Ke + Y + te + T.mainAxis, re = t.elements.arrow && kn(t.elements.arrow), ct = re ? b === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, ut = (z = $ == null ? void 0 : $[b]) != null ? z : 0, pe = B + ne - ut - ct, I = B + Je - ut, Qe = hn(g ? nr(V, pe) : V, B, g ? At(Q, I) : Q);
      P[b] = Qe, F[b] = Qe - B;
    }
    if (s) {
      var H, $e = b === "x" ? ke : Ae, Ge = b === "x" ? He : Ue, ye = P[C], Pe = C === "y" ? "height" : "width", Ee = ye + E[$e], qe = ye - E[Ge], Se = [ke, Ae].indexOf(O) !== -1, Ce = (H = $ == null ? void 0 : $[C]) != null ? H : 0, Re = Se ? Ee : ye - w[Pe] - N[Pe] - Ce + T.altAxis, ue = Se ? ye + w[Pe] + N[Pe] - Ce - T.altAxis : qe, Z = g && Se ? Ku(Re, ye, ue) : hn(g ? Re : Ee, ye, g ? ue : qe);
      P[C] = Z, F[C] = Z - ye;
    }
    t.modifiersData[r] = F;
  }
}
const Tf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Cf,
  requiresIfExists: ["offset"]
};
function Of(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Pf(e) {
  return e === Ne(e) || !We(e) ? Oo(e) : Of(e);
}
function Sf(e) {
  var t = e.getBoundingClientRect(), n = Yt(t.width) / e.offsetWidth || 1, r = Yt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Rf(e, t, n) {
  n === void 0 && (n = !1);
  var r = We(t), o = We(t) && Sf(t), i = Ct(t), a = Zt(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((lt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  So(i)) && (s = Pf(t)), We(t) ? (l = Zt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Po(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function $f(e) {
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
function kf(e) {
  var t = $f(e);
  return zu.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Af(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Mf(e) {
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
var hi = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function If(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? hi : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, hi, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], p = !1, g = {
      state: c,
      setOptions: function(O) {
        var S = typeof O == "function" ? O(c.options) : O;
        f(), c.options = Object.assign({}, i, c.options, S), c.scrollParents = {
          reference: Bt(s) ? mn(s) : s.contextElement ? mn(s.contextElement) : [],
          popper: mn(l)
        };
        var R = kf(Mf([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = R.filter(function(b) {
          return b.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var O = c.elements, S = O.reference, R = O.popper;
          if (mi(S, R)) {
            c.rects = {
              reference: Rf(S, kn(R), c.options.strategy === "fixed"),
              popper: Co(R)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
              return c.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var b = 0; b < c.orderedModifiers.length; b++) {
              if (c.reset === !0) {
                c.reset = !1, b = -1;
                continue;
              }
              var C = c.orderedModifiers[b], P = C.fn, w = C.options, N = w === void 0 ? {} : w, D = C.name;
              typeof P == "function" && (c = P({
                state: c,
                options: N,
                name: D,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Af(function() {
        return new Promise(function(E) {
          g.forceUpdate(), E(c);
        });
      }),
      destroy: function() {
        f(), p = !0;
      }
    };
    if (!mi(s, l))
      return g;
    g.setOptions(u).then(function(E) {
      !p && u.onFirstUpdate && u.onFirstUpdate(E);
    });
    function y() {
      c.orderedModifiers.forEach(function(E) {
        var O = E.name, S = E.options, R = S === void 0 ? {} : S, b = E.effect;
        if (typeof b == "function") {
          var C = b({
            state: c,
            name: O,
            instance: g,
            options: R
          }), P = function() {
          };
          h.push(C || P);
        }
      });
    }
    function f() {
      h.forEach(function(E) {
        return E();
      }), h = [];
    }
    return g;
  };
}
var Bf = [nf, wf, ef, Wu, bf, hf, Tf, Yu, gf], _f = /* @__PURE__ */ If({
  defaultModifiers: Bf
});
function Df(e) {
  return typeof e == "function" ? e() : e;
}
const Lf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = d.useState(null), l = ht(/* @__PURE__ */ d.isValidElement(r) ? r.ref : null, n);
  if (bn(() => {
    i || s(Df(o) || document.body);
  }, [o, i]), bn(() => {
    if (a && !i)
      return Zn(n, a), () => {
        Zn(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ d.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ d.cloneElement(r, u);
    }
    return /* @__PURE__ */ ee.jsx(d.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ ee.jsx(d.Fragment, {
    children: a && /* @__PURE__ */ da.createPortal(r, a)
  });
});
function Nf(e) {
  return en("MuiPopper", e);
}
tn("MuiPopper", ["root"]);
const Ff = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], zf = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function jf(e, t) {
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
function Xr(e) {
  return typeof e == "function" ? e() : e;
}
function Vf(e) {
  return e.nodeType !== void 0;
}
const Wf = () => Pn({
  root: ["root"]
}, Eu(Nf)), Hf = {}, Uf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: u,
    placement: c,
    popperOptions: h,
    popperRef: p,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, E = de(t, Ff), O = d.useRef(null), S = ht(O, n), R = d.useRef(null), b = ht(R, p), C = d.useRef(b);
  bn(() => {
    C.current = b;
  }, [b]), d.useImperativeHandle(p, () => R.current, []);
  const P = jf(c, a), [w, N] = d.useState(P), [D, T] = d.useState(Xr(o));
  d.useEffect(() => {
    R.current && R.current.forceUpdate();
  }), d.useEffect(() => {
    o && T(Xr(o));
  }, [o]), bn(() => {
    if (!D || !u)
      return;
    const k = (V) => {
      N(V.placement);
    };
    let M = [{
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
        k(V);
      }
    }];
    l != null && (M = M.concat(l)), h && h.modifiers != null && (M = M.concat(h.modifiers));
    const B = _f(D, O.current, x({
      placement: P
    }, h, {
      modifiers: M
    }));
    return C.current(B), () => {
      B.destroy(), C.current(null);
    };
  }, [D, s, l, u, h, P]);
  const $ = {
    placement: w
  };
  f !== null && ($.TransitionProps = f);
  const F = Wf(), z = (r = y.root) != null ? r : "div", W = Pu({
    elementType: z,
    externalSlotProps: g.root,
    externalForwardedProps: E,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: F.root
  });
  return /* @__PURE__ */ ee.jsx(z, x({}, W, {
    children: typeof i == "function" ? i($) : i
  }));
}), Kf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: s = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: c,
    placement: h = "bottom",
    popperOptions: p = Hf,
    popperRef: g,
    style: y,
    transition: f = !1,
    slotProps: E = {},
    slots: O = {}
  } = t, S = de(t, zf), [R, b] = d.useState(!0), C = () => {
    b(!1);
  }, P = () => {
    b(!0);
  };
  if (!l && !c && (!f || R))
    return null;
  let w;
  if (i)
    w = i;
  else if (r) {
    const T = Xr(r);
    w = T && Vf(T) ? _o(T).body : _o(null).body;
  }
  const N = !c && l && (!f || R) ? "none" : void 0, D = f ? {
    in: c,
    onEnter: C,
    onExited: P
  } : void 0;
  return /* @__PURE__ */ ee.jsx(Lf, {
    disablePortal: s,
    container: w,
    children: /* @__PURE__ */ ee.jsx(Uf, x({
      anchorEl: r,
      direction: a,
      disablePortal: s,
      modifiers: u,
      ref: n,
      open: f ? !R : c,
      placement: h,
      popperOptions: p,
      popperRef: g,
      slotProps: E,
      slots: O
    }, S, {
      style: x({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: N
      }, y),
      TransitionProps: D,
      children: o
    }))
  });
});
function gi(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Gf(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: o = "any",
    stringify: i,
    trim: a = !1
  } = e;
  return (s, {
    inputValue: l,
    getOptionLabel: u
  }) => {
    let c = a ? l.trim() : l;
    n && (c = c.toLowerCase()), t && (c = gi(c));
    const h = c ? s.filter((p) => {
      let g = (i || u)(p);
      return n && (g = g.toLowerCase()), t && (g = gi(g)), o === "start" ? g.indexOf(c) === 0 : g.indexOf(c) > -1;
    }) : s;
    return typeof r == "number" ? h.slice(0, r) : h;
  };
}
function _r(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const qf = Gf(), vi = 5, Xf = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function $d(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Xf,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: o = !1,
    autoSelect: i = !1,
    blurOnSelect: a = !1,
    clearOnBlur: s = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: u = "useAutocomplete",
    defaultValue: c = e.multiple ? [] : null,
    disableClearable: h = !1,
    disableCloseOnSelect: p = !1,
    disabled: g,
    disabledItemsFocusable: y = !1,
    disableListWrap: f = !1,
    filterOptions: E = qf,
    filterSelectedOptions: O = !1,
    freeSolo: S = !1,
    getOptionDisabled: R,
    getOptionLabel: b = (v) => {
      var m;
      return (m = v.label) != null ? m : v;
    },
    groupBy: C,
    handleHomeEndKeys: P = !e.freeSolo,
    id: w,
    includeInputInList: N = !1,
    inputValue: D,
    isOptionEqualToValue: T = (v, m) => v === m,
    multiple: $ = !1,
    onChange: F,
    onClose: z,
    onHighlightChange: W,
    onInputChange: k,
    onOpen: M,
    open: B,
    openOnFocus: V = !1,
    options: Q,
    readOnly: ie = !1,
    selectOnFocus: Ze = !e.freeSolo,
    value: Ke
  } = e, ce = zi(w);
  let U = b;
  U = (v) => {
    const m = b(v);
    return typeof m != "string" ? String(m) : m;
  };
  const me = d.useRef(!1), we = d.useRef(!0), te = d.useRef(null), Y = d.useRef(null), [ne, Je] = d.useState(null), [re, ct] = d.useState(-1), ut = o ? 0 : -1, pe = d.useRef(ut), [I, Qe] = Un({
    controlled: Ke,
    default: c,
    name: u
  }), [H, $e] = Un({
    controlled: D,
    default: "",
    name: u,
    state: "inputValue"
  }), [Ge, ye] = d.useState(!1), Pe = d.useCallback((v, m) => {
    if (!($ ? I.length < m.length : m !== null) && !s)
      return;
    let L;
    if ($)
      L = "";
    else if (m == null)
      L = "";
    else {
      const q = U(m);
      L = typeof q == "string" ? q : "";
    }
    H !== L && ($e(L), k && k(v, L, "reset"));
  }, [U, H, $, k, $e, s, I]), [Ee, qe] = Un({
    controlled: B,
    default: !1,
    name: u,
    state: "open"
  }), [Se, Ce] = d.useState(!0), Re = !$ && I != null && H === U(I), ue = Ee && !ie, Z = ue ? E(
    Q.filter((v) => !(O && ($ ? I : [I]).some((m) => m !== null && T(v, m)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Re && Se ? "" : H,
      getOptionLabel: U
    }
  ) : [], _ = ws({
    filteredOptions: Z,
    value: I,
    inputValue: H
  });
  d.useEffect(() => {
    const v = I !== _.value;
    Ge && !v || S && !v || Pe(null, I);
  }, [I, Pe, Ge, _.value, S]);
  const Te = Ee && Z.length > 0 && !ie, et = pt((v) => {
    v === -1 ? te.current.focus() : ne.querySelector(`[data-tag-index="${v}"]`).focus();
  });
  d.useEffect(() => {
    $ && re > I.length - 1 && (ct(-1), et(-1));
  }, [I, $, re, et]);
  function tt(v, m) {
    if (!Y.current || v < 0 || v >= Z.length)
      return -1;
    let A = v;
    for (; ; ) {
      const L = Y.current.querySelector(`[data-option-index="${A}"]`), q = y ? !1 : !L || L.disabled || L.getAttribute("aria-disabled") === "true";
      if (L && L.hasAttribute("tabindex") && !q)
        return A;
      if (m === "next" ? A = (A + 1) % Z.length : A = (A - 1 + Z.length) % Z.length, A === v)
        return -1;
    }
  }
  const Ie = pt(({
    event: v,
    index: m,
    reason: A = "auto"
  }) => {
    if (pe.current = m, m === -1 ? te.current.removeAttribute("aria-activedescendant") : te.current.setAttribute("aria-activedescendant", `${ce}-option-${m}`), W && W(v, m === -1 ? null : Z[m], A), !Y.current)
      return;
    const L = Y.current.querySelector(`[role="option"].${n}-focused`);
    L && (L.classList.remove(`${n}-focused`), L.classList.remove(`${n}-focusVisible`));
    let q = Y.current;
    if (Y.current.getAttribute("role") !== "listbox" && (q = Y.current.parentElement.querySelector('[role="listbox"]')), !q)
      return;
    if (m === -1) {
      q.scrollTop = 0;
      return;
    }
    const ge = Y.current.querySelector(`[data-option-index="${m}"]`);
    if (ge && (ge.classList.add(`${n}-focused`), A === "keyboard" && ge.classList.add(`${n}-focusVisible`), q.scrollHeight > q.clientHeight && A !== "mouse" && A !== "touch")) {
      const fe = ge, je = q.clientHeight + q.scrollTop, j = fe.offsetTop + fe.offsetHeight;
      j > je ? q.scrollTop = j - q.clientHeight : fe.offsetTop - fe.offsetHeight * (C ? 1.3 : 0) < q.scrollTop && (q.scrollTop = fe.offsetTop - fe.offsetHeight * (C ? 1.3 : 0));
    }
  }), ze = pt(({
    event: v,
    diff: m,
    direction: A = "next",
    reason: L = "auto"
  }) => {
    if (!ue)
      return;
    const ge = tt((() => {
      const fe = Z.length - 1;
      if (m === "reset")
        return ut;
      if (m === "start")
        return 0;
      if (m === "end")
        return fe;
      const je = pe.current + m;
      return je < 0 ? je === -1 && N ? -1 : f && pe.current !== -1 || Math.abs(m) > 1 ? 0 : fe : je > fe ? je === fe + 1 && N ? -1 : f || Math.abs(m) > 1 ? fe : 0 : je;
    })(), A);
    if (Ie({
      index: ge,
      reason: L,
      event: v
    }), r && m !== "reset")
      if (ge === -1)
        te.current.value = H;
      else {
        const fe = U(Z[ge]);
        te.current.value = fe, fe.toLowerCase().indexOf(H.toLowerCase()) === 0 && H.length > 0 && te.current.setSelectionRange(H.length, fe.length);
      }
  }), _t = () => {
    const v = (m, A) => {
      const L = m ? U(m) : "", q = A ? U(A) : "";
      return L === q;
    };
    if (pe.current !== -1 && _.filteredOptions && _.filteredOptions.length !== Z.length && _.inputValue === H && ($ ? I.length === _.value.length && _.value.every((m, A) => U(I[A]) === U(m)) : v(_.value, I))) {
      const m = _.filteredOptions[pe.current];
      if (m && Z.some((L) => U(L) === U(m)))
        return !0;
    }
    return !1;
  }, Tt = d.useCallback(() => {
    if (!ue || _t())
      return;
    const v = $ ? I[0] : I;
    if (Z.length === 0 || v == null) {
      ze({
        diff: "reset"
      });
      return;
    }
    if (Y.current) {
      if (v != null) {
        const m = Z[pe.current];
        if ($ && m && _r(I, (L) => T(m, L)) !== -1)
          return;
        const A = _r(Z, (L) => T(L, v));
        A === -1 ? ze({
          diff: "reset"
        }) : Ie({
          index: A
        });
        return;
      }
      if (pe.current >= Z.length - 1) {
        Ie({
          index: Z.length - 1
        });
        return;
      }
      Ie({
        index: pe.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Z.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    $ ? !1 : I,
    O,
    ze,
    Ie,
    ue,
    H,
    $
  ]), An = pt((v) => {
    Zn(Y, v), v && Tt();
  });
  d.useEffect(() => {
    Tt();
  }, [Tt]);
  const nt = (v) => {
    Ee || (qe(!0), Ce(!0), M && M(v));
  }, Ot = (v, m) => {
    Ee && (qe(!1), z && z(v, m));
  }, yt = (v, m, A, L) => {
    if ($) {
      if (I.length === m.length && I.every((q, ge) => q === m[ge]))
        return;
    } else if (I === m)
      return;
    F && F(v, m, A, L), Qe(m);
  }, Dt = d.useRef(!1), bt = (v, m, A = "selectOption", L = "options") => {
    let q = A, ge = m;
    if ($) {
      ge = Array.isArray(I) ? I.slice() : [];
      const fe = _r(ge, (je) => T(m, je));
      fe === -1 ? ge.push(m) : L !== "freeSolo" && (ge.splice(fe, 1), q = "removeOption");
    }
    Pe(v, ge), yt(v, ge, q, {
      option: m
    }), !p && (!v || !v.ctrlKey && !v.metaKey) && Ot(v, q), (a === !0 || a === "touch" && Dt.current || a === "mouse" && !Dt.current) && te.current.blur();
  };
  function Mn(v, m) {
    if (v === -1)
      return -1;
    let A = v;
    for (; ; ) {
      if (m === "next" && A === I.length || m === "previous" && A === -1)
        return -1;
      const L = ne.querySelector(`[data-tag-index="${A}"]`);
      if (!L || !L.hasAttribute("tabindex") || L.disabled || L.getAttribute("aria-disabled") === "true")
        A += m === "next" ? 1 : -1;
      else
        return A;
    }
  }
  const rn = (v, m) => {
    if (!$)
      return;
    H === "" && Ot(v, "toggleInput");
    let A = re;
    re === -1 ? H === "" && m === "previous" && (A = I.length - 1) : (A += m === "next" ? 1 : -1, A < 0 && (A = 0), A === I.length && (A = -1)), A = Mn(A, m), ct(A), et(A);
  }, on = (v) => {
    me.current = !0, $e(""), k && k(v, "", "clear"), yt(v, $ ? [] : null, "clear");
  }, In = (v) => (m) => {
    if (v.onKeyDown && v.onKeyDown(m), !m.defaultMuiPrevented && (re !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(m.key) === -1 && (ct(-1), et(-1)), m.which !== 229))
      switch (m.key) {
        case "Home":
          ue && P && (m.preventDefault(), ze({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: m
          }));
          break;
        case "End":
          ue && P && (m.preventDefault(), ze({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: m
          }));
          break;
        case "PageUp":
          m.preventDefault(), ze({
            diff: -vi,
            direction: "previous",
            reason: "keyboard",
            event: m
          }), nt(m);
          break;
        case "PageDown":
          m.preventDefault(), ze({
            diff: vi,
            direction: "next",
            reason: "keyboard",
            event: m
          }), nt(m);
          break;
        case "ArrowDown":
          m.preventDefault(), ze({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: m
          }), nt(m);
          break;
        case "ArrowUp":
          m.preventDefault(), ze({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: m
          }), nt(m);
          break;
        case "ArrowLeft":
          rn(m, "previous");
          break;
        case "ArrowRight":
          rn(m, "next");
          break;
        case "Enter":
          if (pe.current !== -1 && ue) {
            const A = Z[pe.current], L = R ? R(A) : !1;
            if (m.preventDefault(), L)
              return;
            bt(m, A, "selectOption"), r && te.current.setSelectionRange(te.current.value.length, te.current.value.length);
          } else
            S && H !== "" && Re === !1 && ($ && m.preventDefault(), bt(m, H, "createOption", "freeSolo"));
          break;
        case "Escape":
          ue ? (m.preventDefault(), m.stopPropagation(), Ot(m, "escape")) : l && (H !== "" || $ && I.length > 0) && (m.preventDefault(), m.stopPropagation(), on(m));
          break;
        case "Backspace":
          if ($ && !ie && H === "" && I.length > 0) {
            const A = re === -1 ? I.length - 1 : re, L = I.slice();
            L.splice(A, 1), yt(m, L, "removeOption", {
              option: I[A]
            });
          }
          break;
        case "Delete":
          if ($ && !ie && H === "" && I.length > 0 && re !== -1) {
            const A = re, L = I.slice();
            L.splice(A, 1), yt(m, L, "removeOption", {
              option: I[A]
            });
          }
          break;
      }
  }, Bn = (v) => {
    ye(!0), V && !me.current && nt(v);
  }, _n = (v) => {
    if (t(Y)) {
      te.current.focus();
      return;
    }
    ye(!1), we.current = !0, me.current = !1, i && pe.current !== -1 && ue ? bt(v, Z[pe.current], "blur") : i && S && H !== "" ? bt(v, H, "blur", "freeSolo") : s && Pe(v, I), Ot(v, "blur");
  }, Rr = (v) => {
    const m = v.target.value;
    H !== m && ($e(m), Ce(!1), k && k(v, m, "input")), m === "" ? !h && !$ && yt(v, null, "clear") : nt(v);
  }, $r = (v) => {
    const m = Number(v.currentTarget.getAttribute("data-option-index"));
    pe.current !== m && Ie({
      event: v,
      index: m,
      reason: "mouse"
    });
  }, an = (v) => {
    Ie({
      event: v,
      index: Number(v.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Dt.current = !0;
  }, kr = (v) => {
    const m = Number(v.currentTarget.getAttribute("data-option-index"));
    bt(v, Z[m], "selectOption"), Dt.current = !1;
  }, Pt = (v) => (m) => {
    const A = I.slice();
    A.splice(v, 1), yt(m, A, "removeOption", {
      option: I[v]
    });
  }, Lt = (v) => {
    Ee ? Ot(v, "toggleInput") : nt(v);
  }, Be = (v) => {
    v.currentTarget.contains(v.target) && v.target.getAttribute("id") !== ce && v.preventDefault();
  }, St = (v) => {
    v.currentTarget.contains(v.target) && (te.current.focus(), Ze && we.current && te.current.selectionEnd - te.current.selectionStart === 0 && te.current.select(), we.current = !1);
  }, Ar = (v) => {
    !g && (H === "" || !Ee) && Lt(v);
  };
  let ft = S && H.length > 0;
  ft = ft || ($ ? I.length > 0 : I !== null);
  let Nt = Z;
  return C && (Nt = Z.reduce((v, m, A) => {
    const L = C(m);
    return v.length > 0 && v[v.length - 1].group === L ? v[v.length - 1].options.push(m) : v.push({
      key: A,
      index: A,
      group: L,
      options: [m]
    }), v;
  }, [])), g && Ge && _n(), {
    getRootProps: (v = {}) => x({
      "aria-owns": Te ? `${ce}-listbox` : null
    }, v, {
      onKeyDown: In(v),
      onMouseDown: Be,
      onClick: St
    }),
    getInputLabelProps: () => ({
      id: `${ce}-label`,
      htmlFor: ce
    }),
    getInputProps: () => ({
      id: ce,
      value: H,
      onBlur: _n,
      onFocus: Bn,
      onChange: Rr,
      onMouseDown: Ar,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": ue ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Te ? `${ce}-listbox` : void 0,
      "aria-expanded": Te,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: te,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: g
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: on
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Lt
    }),
    getTagProps: ({
      index: v
    }) => x({
      key: v,
      "data-tag-index": v,
      tabIndex: -1
    }, !ie && {
      onDelete: Pt(v)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${ce}-listbox`,
      "aria-labelledby": `${ce}-label`,
      ref: An,
      onMouseDown: (v) => {
        v.preventDefault();
      }
    }),
    getOptionProps: ({
      index: v,
      option: m
    }) => {
      const A = ($ ? I : [I]).some((q) => q != null && T(m, q)), L = R ? R(m) : !1;
      return {
        key: U(m),
        tabIndex: -1,
        role: "option",
        id: `${ce}-option-${v}`,
        onMouseMove: $r,
        onClick: kr,
        onTouchStart: an,
        "data-option-index": v,
        "aria-disabled": L,
        "aria-selected": A
      };
    },
    id: ce,
    inputValue: H,
    value: I,
    dirty: ft,
    expanded: ue && ne,
    popupOpen: ue,
    focused: Ge || re !== -1,
    anchorEl: ne,
    setAnchorEl: Je,
    focusedTag: re,
    groupedOptions: Nt
  };
}
const Yf = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Zf = Ye(Kf, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Jf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const o = go(), i = nn({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: u,
    container: c,
    disablePortal: h,
    keepMounted: p,
    modifiers: g,
    open: y,
    placement: f,
    popperOptions: E,
    popperRef: O,
    transition: S,
    slots: R,
    slotProps: b
  } = i, C = de(i, Yf), P = (r = R == null ? void 0 : R.root) != null ? r : l == null ? void 0 : l.Root, w = x({
    anchorEl: a,
    container: c,
    disablePortal: h,
    keepMounted: p,
    modifiers: g,
    open: y,
    placement: f,
    popperOptions: E,
    popperRef: O,
    transition: S
  }, C);
  return /* @__PURE__ */ ee.jsx(Zf, x({
    as: s,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: P
    },
    slotProps: b ?? u
  }, w, {
    ref: n
  }));
}), ca = Jf;
function Qf(e) {
  return en("MuiButton", e);
}
const ed = tn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Fn = ed, td = /* @__PURE__ */ d.createContext({}), nd = td, rd = /* @__PURE__ */ d.createContext(void 0), od = rd, id = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], ad = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${ae(t)}`, `size${ae(o)}`, `${i}Size${ae(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${ae(o)}`],
    endIcon: ["endIcon", `iconSize${ae(o)}`]
  }, l = Pn(s, Qf, a);
  return x({}, a, l);
}, ua = (e) => x({}, e.size === "small" && {
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
}), sd = Ye(Qi, {
  shouldForwardProp: (e) => Zi(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${ae(n.color)}`], t[`size${ae(n.size)}`], t[`${n.variant}Size${ae(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : wt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : wt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : wt(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    [`&.${Fn.focusVisible}`]: x({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Fn.disabled}`]: x({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${wt(e.palette[t.color].main, 0.5)}`
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
  [`&.${Fn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Fn.disabled}`]: {
    boxShadow: "none"
  }
}), ld = Ye("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${ae(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, ua(e))), cd = Ye("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${ae(n.size)}`]];
  }
})(({
  ownerState: e
}) => x({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, ua(e))), ud = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = d.useContext(nd), o = d.useContext(od), i = so(r, t), a = nn({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: u = "button",
    className: c,
    disabled: h = !1,
    disableElevation: p = !1,
    disableFocusRipple: g = !1,
    endIcon: y,
    focusVisibleClassName: f,
    fullWidth: E = !1,
    size: O = "medium",
    startIcon: S,
    type: R,
    variant: b = "text"
  } = a, C = de(a, id), P = x({}, a, {
    color: l,
    component: u,
    disabled: h,
    disableElevation: p,
    disableFocusRipple: g,
    fullWidth: E,
    size: O,
    type: R,
    variant: b
  }), w = ad(P), N = S && /* @__PURE__ */ ee.jsx(ld, {
    className: w.startIcon,
    ownerState: P,
    children: S
  }), D = y && /* @__PURE__ */ ee.jsx(cd, {
    className: w.endIcon,
    ownerState: P,
    children: y
  }), T = o || "";
  return /* @__PURE__ */ ee.jsxs(sd, x({
    ownerState: P,
    className: ve(r.className, w.root, c, T),
    component: u,
    disabled: h,
    focusRipple: !g,
    focusVisibleClassName: ve(w.focusVisible, f),
    ref: n,
    type: R
  }, C, {
    classes: w,
    children: [N, s, D]
  }));
}), kd = ud, fd = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Yr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const dd = {
  entering: {
    opacity: 1,
    transform: Yr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Dr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), fa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: l,
    onEntered: u,
    onEntering: c,
    onExit: h,
    onExited: p,
    onExiting: g,
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = Fc
  } = t, O = de(t, fd), S = d.useRef(), R = d.useRef(), b = Yi(), C = d.useRef(null), P = ht(C, i.ref, n), w = (k) => (M) => {
    if (k) {
      const B = C.current;
      M === void 0 ? k(B) : k(B, M);
    }
  }, N = w(c), D = w((k, M) => {
    Gc(k);
    const {
      duration: B,
      delay: V,
      easing: Q
    } = ti({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let ie;
    f === "auto" ? (ie = b.transitions.getAutoHeightDuration(k.clientHeight), R.current = ie) : ie = B, k.style.transition = [b.transitions.create("opacity", {
      duration: ie,
      delay: V
    }), b.transitions.create("transform", {
      duration: Dr ? ie : ie * 0.666,
      delay: V,
      easing: Q
    })].join(","), l && l(k, M);
  }), T = w(u), $ = w(g), F = w((k) => {
    const {
      duration: M,
      delay: B,
      easing: V
    } = ti({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let Q;
    f === "auto" ? (Q = b.transitions.getAutoHeightDuration(k.clientHeight), R.current = Q) : Q = M, k.style.transition = [b.transitions.create("opacity", {
      duration: Q,
      delay: B
    }), b.transitions.create("transform", {
      duration: Dr ? Q : Q * 0.666,
      delay: Dr ? B : B || Q * 0.333,
      easing: V
    })].join(","), k.style.opacity = 0, k.style.transform = Yr(0.75), h && h(k);
  }), z = w(p), W = (k) => {
    f === "auto" && (S.current = setTimeout(k, R.current || 0)), r && r(C.current, k);
  };
  return d.useEffect(() => () => {
    clearTimeout(S.current);
  }, []), /* @__PURE__ */ ee.jsx(E, x({
    appear: o,
    in: s,
    nodeRef: C,
    onEnter: D,
    onEntered: T,
    onEntering: N,
    onExit: F,
    onExited: z,
    onExiting: $,
    addEndListener: W,
    timeout: f === "auto" ? null : f
  }, O, {
    children: (k, M) => /* @__PURE__ */ d.cloneElement(i, x({
      style: x({
        opacity: 0,
        transform: Yr(0.75),
        visibility: k === "exited" && !s ? "hidden" : void 0
      }, dd[k], y, i.props.style),
      ref: P
    }, M))
  }));
});
fa.muiSupportAuto = !0;
const yi = fa;
function pd(e) {
  return en("MuiTooltip", e);
}
const hd = tn("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Et = hd, md = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function gd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vd = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ae(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Pn(a, pd, t);
}, yd = Ye(ca, {
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
}) => x({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Et.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Et.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Et.arrow}`]: x({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Et.arrow}`]: x({}, t.isRtl ? {
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
})), bd = Ye("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ae(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : wt(e.palette.grey[700], 0.92),
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
  lineHeight: `${gd(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Et.popper}[data-popper-placement*="left"] &`]: x({
    transformOrigin: "right center"
  }, t.isRtl ? x({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : x({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Et.popper}[data-popper-placement*="right"] &`]: x({
    transformOrigin: "left center"
  }, t.isRtl ? x({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : x({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Et.popper}[data-popper-placement*="top"] &`]: x({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Et.popper}[data-popper-placement*="bottom"] &`]: x({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), xd = Ye("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : wt(e.palette.grey[700], 0.9),
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
let zn = !1, Lr = null, un = {
  x: 0,
  y: 0
};
function jn(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const wd = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, a, s, l, u, c, h, p, g, y, f, E, O, S, R, b, C;
  const P = nn({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: w = !1,
    children: N,
    components: D = {},
    componentsProps: T = {},
    describeChild: $ = !1,
    disableFocusListener: F = !1,
    disableHoverListener: z = !1,
    disableInteractive: W = !1,
    disableTouchListener: k = !1,
    enterDelay: M = 100,
    enterNextDelay: B = 0,
    enterTouchDelay: V = 700,
    followCursor: Q = !1,
    id: ie,
    leaveDelay: Ze = 0,
    leaveTouchDelay: Ke = 1500,
    onClose: ce,
    onOpen: U,
    open: me,
    placement: we = "bottom",
    PopperComponent: te,
    PopperProps: Y = {},
    slotProps: ne = {},
    slots: Je = {},
    title: re,
    TransitionComponent: ct = yi,
    TransitionProps: ut
  } = P, pe = de(P, md), I = /* @__PURE__ */ d.isValidElement(N) ? N : /* @__PURE__ */ ee.jsx("span", {
    children: N
  }), Qe = Yi(), H = Qe.direction === "rtl", [$e, Ge] = d.useState(), [ye, Pe] = d.useState(null), Ee = d.useRef(!1), qe = W || Q, Se = d.useRef(), Ce = d.useRef(), Re = d.useRef(), ue = d.useRef(), [Z, _] = Un({
    controlled: me,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Te = Z;
  const et = zi(ie), tt = d.useRef(), Ie = d.useCallback(() => {
    tt.current !== void 0 && (document.body.style.WebkitUserSelect = tt.current, tt.current = void 0), clearTimeout(ue.current);
  }, []);
  d.useEffect(() => () => {
    clearTimeout(Se.current), clearTimeout(Ce.current), clearTimeout(Re.current), Ie();
  }, [Ie]);
  const ze = (j) => {
    clearTimeout(Lr), zn = !0, _(!0), U && !Te && U(j);
  }, _t = pt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (j) => {
      clearTimeout(Lr), Lr = setTimeout(() => {
        zn = !1;
      }, 800 + Ze), _(!1), ce && Te && ce(j), clearTimeout(Se.current), Se.current = setTimeout(() => {
        Ee.current = !1;
      }, Qe.transitions.duration.shortest);
    }
  ), Tt = (j) => {
    Ee.current && j.type !== "touchstart" || ($e && $e.removeAttribute("title"), clearTimeout(Ce.current), clearTimeout(Re.current), M || zn && B ? Ce.current = setTimeout(() => {
      ze(j);
    }, zn ? B : M) : ze(j));
  }, An = (j) => {
    clearTimeout(Ce.current), clearTimeout(Re.current), Re.current = setTimeout(() => {
      _t(j);
    }, Ze);
  }, {
    isFocusVisibleRef: nt,
    onBlur: Ot,
    onFocus: yt,
    ref: Dt
  } = ji(), [, bt] = d.useState(!1), Mn = (j) => {
    Ot(j), nt.current === !1 && (bt(!1), An(j));
  }, rn = (j) => {
    $e || Ge(j.currentTarget), yt(j), nt.current === !0 && (bt(!0), Tt(j));
  }, on = (j) => {
    Ee.current = !0;
    const _e = I.props;
    _e.onTouchStart && _e.onTouchStart(j);
  }, In = Tt, Bn = An, _n = (j) => {
    on(j), clearTimeout(Re.current), clearTimeout(Se.current), Ie(), tt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ue.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = tt.current, Tt(j);
    }, V);
  }, Rr = (j) => {
    I.props.onTouchEnd && I.props.onTouchEnd(j), Ie(), clearTimeout(Re.current), Re.current = setTimeout(() => {
      _t(j);
    }, Ke);
  };
  d.useEffect(() => {
    if (!Te)
      return;
    function j(_e) {
      (_e.key === "Escape" || _e.key === "Esc") && _t(_e);
    }
    return document.addEventListener("keydown", j), () => {
      document.removeEventListener("keydown", j);
    };
  }, [_t, Te]);
  const $r = ht(I.ref, Dt, Ge, n);
  !re && re !== 0 && (Te = !1);
  const an = d.useRef(), kr = (j) => {
    const _e = I.props;
    _e.onMouseMove && _e.onMouseMove(j), un = {
      x: j.clientX,
      y: j.clientY
    }, an.current && an.current.update();
  }, Pt = {}, Lt = typeof re == "string";
  $ ? (Pt.title = !Te && Lt && !z ? re : null, Pt["aria-describedby"] = Te ? et : null) : (Pt["aria-label"] = Lt ? re : null, Pt["aria-labelledby"] = Te && !Lt ? et : null);
  const Be = x({}, Pt, pe, I.props, {
    className: ve(pe.className, I.props.className),
    onTouchStart: on,
    ref: $r
  }, Q ? {
    onMouseMove: kr
  } : {}), St = {};
  k || (Be.onTouchStart = _n, Be.onTouchEnd = Rr), z || (Be.onMouseOver = jn(In, Be.onMouseOver), Be.onMouseLeave = jn(Bn, Be.onMouseLeave), qe || (St.onMouseOver = In, St.onMouseLeave = Bn)), F || (Be.onFocus = jn(rn, Be.onFocus), Be.onBlur = jn(Mn, Be.onBlur), qe || (St.onFocus = rn, St.onBlur = Mn));
  const Ar = d.useMemo(() => {
    var j;
    let _e = [{
      name: "arrow",
      enabled: !!ye,
      options: {
        element: ye,
        padding: 4
      }
    }];
    return (j = Y.popperOptions) != null && j.modifiers && (_e = _e.concat(Y.popperOptions.modifiers)), x({}, Y.popperOptions, {
      modifiers: _e
    });
  }, [ye, Y]), ft = x({}, P, {
    isRtl: H,
    arrow: w,
    disableInteractive: qe,
    placement: we,
    PopperComponentProp: te,
    touch: Ee.current
  }), Nt = vd(ft), v = (r = (o = Je.popper) != null ? o : D.Popper) != null ? r : yd, m = (i = (a = (s = Je.transition) != null ? s : D.Transition) != null ? a : ct) != null ? i : yi, A = (l = (u = Je.tooltip) != null ? u : D.Tooltip) != null ? l : bd, L = (c = (h = Je.arrow) != null ? h : D.Arrow) != null ? c : xd, q = dn(v, x({}, Y, (p = ne.popper) != null ? p : T.popper, {
    className: ve(Nt.popper, Y == null ? void 0 : Y.className, (g = (y = ne.popper) != null ? y : T.popper) == null ? void 0 : g.className)
  }), ft), ge = dn(m, x({}, ut, (f = ne.transition) != null ? f : T.transition), ft), fe = dn(A, x({}, (E = ne.tooltip) != null ? E : T.tooltip, {
    className: ve(Nt.tooltip, (O = (S = ne.tooltip) != null ? S : T.tooltip) == null ? void 0 : O.className)
  }), ft), je = dn(L, x({}, (R = ne.arrow) != null ? R : T.arrow, {
    className: ve(Nt.arrow, (b = (C = ne.arrow) != null ? C : T.arrow) == null ? void 0 : b.className)
  }), ft);
  return /* @__PURE__ */ ee.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ d.cloneElement(I, Be), /* @__PURE__ */ ee.jsx(v, x({
      as: te ?? ca,
      placement: we,
      anchorEl: Q ? {
        getBoundingClientRect: () => ({
          top: un.y,
          left: un.x,
          right: un.x,
          bottom: un.y,
          width: 0,
          height: 0
        })
      } : $e,
      popperRef: an,
      open: $e ? Te : !1,
      id: et,
      transition: !0
    }, St, q, {
      popperOptions: Ar,
      children: ({
        TransitionProps: j
      }) => /* @__PURE__ */ ee.jsx(m, x({
        timeout: Qe.transitions.duration.shorter
      }, j, ge, {
        children: /* @__PURE__ */ ee.jsxs(A, x({}, fe, {
          children: [re, w ? /* @__PURE__ */ ee.jsx(L, x({}, je, {
            ref: Pe
          })) : null]
        }))
      }))
    }))]
  });
}), Ad = wd;
export {
  kd as B,
  Td as E,
  Od as G,
  Sd as I,
  Ad as M,
  ca as P,
  Pd as T,
  fs as a,
  Bc as b,
  Cd as c,
  ht as d,
  $d as e,
  Li as h,
  ee as j,
  Wr as n,
  Et as t,
  Rd as u
};
