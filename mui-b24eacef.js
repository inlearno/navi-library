import { r as h, a as ur, R as Ee } from "./react-97c263ed.js";
var Kr = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn = h, Nn = Symbol.for("react.element"), Dn = Symbol.for("react.fragment"), Vn = Object.prototype.hasOwnProperty, Wn = Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Un = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nr(e, t, r) {
  var n, o = {}, i = null, s = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t)
    Vn.call(t, n) && !Un.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: Nn, type: e, key: i, ref: s, props: o, _owner: Wn.current };
}
Je.Fragment = Dn;
Je.jsx = Nr;
Je.jsxs = Nr;
Kr.exports = Je;
var Z = Kr.exports;
function Hn(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Gn(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Yn = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gn(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Hn(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), N = "-ms-", Ge = "-moz-", R = "-webkit-", Dr = "comm", Ft = "rule", jt = "decl", Xn = "@import", Vr = "@keyframes", qn = "@layer", Zn = Math.abs, Qe = String.fromCharCode, Jn = Object.assign;
function Qn(e, t) {
  return z(e, 0) ^ 45 ? (((t << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3) : 0;
}
function Wr(e) {
  return e.trim();
}
function eo(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function T(e, t, r) {
  return e.replace(t, r);
}
function Ot(e, t) {
  return e.indexOf(t);
}
function z(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pe(e, t, r) {
  return e.slice(t, r);
}
function oe(e) {
  return e.length;
}
function Lt(e) {
  return e.length;
}
function Ke(e, t) {
  return t.push(e), e;
}
function to(e, t) {
  return e.map(t).join("");
}
var et = 1, Se = 1, Ur = 0, V = 0, j = 0, $e = "";
function tt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: et, column: Se, length: s, return: "" };
}
function Re(e, t) {
  return Jn(tt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ro() {
  return j;
}
function no() {
  return j = V > 0 ? z($e, --V) : 0, Se--, j === 10 && (Se = 1, et--), j;
}
function H() {
  return j = V < Ur ? z($e, V++) : 0, Se++, j === 10 && (Se = 1, et++), j;
}
function ae() {
  return z($e, V);
}
function De() {
  return V;
}
function Ie(e, t) {
  return Pe($e, e, t);
}
function _e(e) {
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
function Hr(e) {
  return et = Se = 1, Ur = oe($e = e), V = 0, [];
}
function Gr(e) {
  return $e = "", e;
}
function Ve(e) {
  return Wr(Ie(V - 1, Pt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function oo(e) {
  for (; (j = ae()) && j < 33; )
    H();
  return _e(e) > 2 || _e(j) > 3 ? "" : " ";
}
function io(e, t) {
  for (; --t && H() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97); )
    ;
  return Ie(e, De() + (t < 6 && ae() == 32 && H() == 32));
}
function Pt(e) {
  for (; H(); )
    switch (j) {
      case e:
        return V;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pt(j);
        break;
      case 40:
        e === 41 && Pt(e);
        break;
      case 92:
        H();
        break;
    }
  return V;
}
function so(e, t) {
  for (; H() && e + j !== 47 + 10; )
    if (e + j === 42 + 42 && ae() === 47)
      break;
  return "/*" + Ie(t, V - 1) + "*" + Qe(e === 47 ? e : H());
}
function ao(e) {
  for (; !_e(ae()); )
    H();
  return Ie(e, V);
}
function co(e) {
  return Gr(We("", null, null, null, [""], e = Hr(e), 0, [0], e));
}
function We(e, t, r, n, o, i, s, a, c) {
  for (var u = 0, d = 0, p = s, f = 0, y = 0, m = 0, l = 1, w = 1, S = 1, C = 0, E = "", g = o, k = i, O = n, v = E; w; )
    switch (m = C, C = H()) {
      case 40:
        if (m != 108 && z(v, p - 1) == 58) {
          Ot(v += T(Ve(C), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += Ve(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += oo(m);
        break;
      case 92:
        v += io(De() - 1, 7);
        continue;
      case 47:
        switch (ae()) {
          case 42:
          case 47:
            Ke(uo(so(H(), De()), t, r), c);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * l:
        a[u++] = oe(v) * S;
      case 125 * l:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            S == -1 && (v = T(v, /\f/g, "")), y > 0 && oe(v) - p && Ke(y > 32 ? fr(v + ";", n, r, p - 1) : fr(T(v, " ", "") + ";", n, r, p - 2), c);
            break;
          case 59:
            v += ";";
          default:
            if (Ke(O = lr(v, t, r, u, d, o, a, E, g = [], k = [], p), i), C === 123)
              if (d === 0)
                We(v, t, O, O, g, i, p, a, k);
              else
                switch (f === 99 && z(v, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    We(e, O, O, n && Ke(lr(e, O, O, 0, 0, o, a, E, o, g = [], p), k), o, k, p, a, n ? g : k);
                    break;
                  default:
                    We(v, O, O, O, [""], k, 0, a, k);
                }
        }
        u = d = y = 0, l = S = 1, E = v = "", p = s;
        break;
      case 58:
        p = 1 + oe(v), y = m;
      default:
        if (l < 1) {
          if (C == 123)
            --l;
          else if (C == 125 && l++ == 0 && no() == 125)
            continue;
        }
        switch (v += Qe(C), C * l) {
          case 38:
            S = d > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            a[u++] = (oe(v) - 1) * S, S = 1;
            break;
          case 64:
            ae() === 45 && (v += Ve(H())), f = ae(), d = p = oe(E = v += ao(De())), C++;
            break;
          case 45:
            m === 45 && oe(v) == 2 && (l = 0);
        }
    }
  return i;
}
function lr(e, t, r, n, o, i, s, a, c, u, d) {
  for (var p = o - 1, f = o === 0 ? i : [""], y = Lt(f), m = 0, l = 0, w = 0; m < n; ++m)
    for (var S = 0, C = Pe(e, p + 1, p = Zn(l = s[m])), E = e; S < y; ++S)
      (E = Wr(l > 0 ? f[S] + " " + C : T(C, /&\f/g, f[S]))) && (c[w++] = E);
  return tt(e, t, r, o === 0 ? Ft : a, c, u, d);
}
function uo(e, t, r) {
  return tt(e, t, r, Dr, Qe(ro()), Pe(e, 2, -2), 0);
}
function fr(e, t, r, n) {
  return tt(e, t, r, jt, Pe(e, 0, n), Pe(e, n + 1, -1), n);
}
function ve(e, t) {
  for (var r = "", n = Lt(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function lo(e, t, r, n) {
  switch (e.type) {
    case qn:
      if (e.children.length)
        break;
    case Xn:
    case jt:
      return e.return = e.return || e.value;
    case Dr:
      return "";
    case Vr:
      return e.return = e.value + "{" + ve(e.children, n) + "}";
    case Ft:
      e.value = e.props.join(",");
  }
  return oe(r = ve(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function fo(e) {
  var t = Lt(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function po(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Yr(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mo = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = ae(), o === 38 && i === 12 && (r[n] = 1), !_e(i); )
    H();
  return Ie(t, V);
}, ho = function(t, r) {
  var n = -1, o = 44;
  do
    switch (_e(o)) {
      case 0:
        o === 38 && ae() === 12 && (r[n] = 1), t[n] += mo(V - 1, r, n);
        break;
      case 2:
        t[n] += Ve(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = ae() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Qe(o);
    }
  while (o = H());
  return t;
}, go = function(t, r) {
  return Gr(ho(Hr(t), r));
}, dr = /* @__PURE__ */ new WeakMap(), yo = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !dr.get(n)) && !o) {
      dr.set(t, !0);
      for (var i = [], s = go(r, i), a = n.props, c = 0, u = 0; c < s.length; c++)
        for (var d = 0; d < a.length; d++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[d]) : a[d] + " " + s[c];
    }
  }
}, bo = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Xr(e, t) {
  switch (Qn(e, t)) {
    case 5103:
      return R + "print-" + e + e;
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
      return R + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + Ge + e + N + e + e;
    case 6828:
    case 4268:
      return R + e + N + e + e;
    case 6165:
      return R + e + N + "flex-" + e + e;
    case 5187:
      return R + e + T(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return R + e + N + "flex-item-" + T(e, /flex-|-self/, "") + e;
    case 4675:
      return R + e + N + "flex-line-pack" + T(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return R + e + N + T(e, "shrink", "negative") + e;
    case 5292:
      return R + e + N + T(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + T(e, "-grow", "") + R + e + N + T(e, "grow", "positive") + e;
    case 4554:
      return R + T(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return T(T(T(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return T(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return T(T(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + R + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return T(e, /(.+)-inline(.+)/, R + "$1$2") + e;
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
        switch (z(e, t + 1)) {
          case 109:
            if (z(e, t + 4) !== 45)
              break;
          case 102:
            return T(e, /(.+:)(.+)-([^]+)/, "$1" + R + "$2-$3$1" + Ge + (z(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ot(e, "stretch") ? Xr(T(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (z(e, t + 1) !== 115)
        break;
    case 6444:
      switch (z(e, oe(e) - 3 - (~Ot(e, "!important") && 10))) {
        case 107:
          return T(e, ":", ":" + R) + e;
        case 101:
          return T(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + R + (z(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R + "$2$3$1" + N + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (z(e, t + 11)) {
        case 114:
          return R + e + N + T(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + N + T(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + N + T(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return R + e + N + e + e;
  }
  return e;
}
var vo = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case jt:
        t.return = Xr(t.value, t.length);
        break;
      case Vr:
        return ve([Re(t, {
          value: T(t.value, "@", "@" + R)
        })], o);
      case Ft:
        if (t.length)
          return to(t.props, function(i) {
            switch (eo(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ve([Re(t, {
                  props: [T(i, /:(read-\w+)/, ":" + Ge + "$1")]
                })], o);
              case "::placeholder":
                return ve([Re(t, {
                  props: [T(i, /:(plac\w+)/, ":" + R + "input-$1")]
                }), Re(t, {
                  props: [T(i, /:(plac\w+)/, ":" + Ge + "$1")]
                }), Re(t, {
                  props: [T(i, /:(plac\w+)/, N + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, xo = [vo], So = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var w = l.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || xo, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(l) {
      for (var w = l.getAttribute("data-emotion").split(" "), S = 1; S < w.length; S++)
        i[w[S]] = !0;
      a.push(l);
    }
  );
  var c, u = [yo, bo];
  {
    var d, p = [lo, po(function(l) {
      d.insert(l);
    })], f = fo(u.concat(o, p)), y = function(w) {
      return ve(co(w), f);
    };
    c = function(w, S, C, E) {
      d = C, y(w ? w + "{" + S.styles + "}" : S.styles), E && (m.inserted[S.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new Yn({
      key: r,
      container: s,
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
  return m.sheet.hydrate(a), m;
};
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, b.apply(this, arguments);
}
var qr = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L = typeof Symbol == "function" && Symbol.for, zt = L ? Symbol.for("react.element") : 60103, Kt = L ? Symbol.for("react.portal") : 60106, rt = L ? Symbol.for("react.fragment") : 60107, nt = L ? Symbol.for("react.strict_mode") : 60108, ot = L ? Symbol.for("react.profiler") : 60114, it = L ? Symbol.for("react.provider") : 60109, st = L ? Symbol.for("react.context") : 60110, Nt = L ? Symbol.for("react.async_mode") : 60111, at = L ? Symbol.for("react.concurrent_mode") : 60111, ct = L ? Symbol.for("react.forward_ref") : 60112, ut = L ? Symbol.for("react.suspense") : 60113, wo = L ? Symbol.for("react.suspense_list") : 60120, lt = L ? Symbol.for("react.memo") : 60115, ft = L ? Symbol.for("react.lazy") : 60116, $o = L ? Symbol.for("react.block") : 60121, Co = L ? Symbol.for("react.fundamental") : 60117, ko = L ? Symbol.for("react.responder") : 60118, Ro = L ? Symbol.for("react.scope") : 60119;
function G(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zt:
        switch (e = e.type, e) {
          case Nt:
          case at:
          case rt:
          case ot:
          case nt:
          case ut:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case st:
              case ct:
              case ft:
              case lt:
              case it:
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
function Zr(e) {
  return G(e) === at;
}
_.AsyncMode = Nt;
_.ConcurrentMode = at;
_.ContextConsumer = st;
_.ContextProvider = it;
_.Element = zt;
_.ForwardRef = ct;
_.Fragment = rt;
_.Lazy = ft;
_.Memo = lt;
_.Portal = Kt;
_.Profiler = ot;
_.StrictMode = nt;
_.Suspense = ut;
_.isAsyncMode = function(e) {
  return Zr(e) || G(e) === Nt;
};
_.isConcurrentMode = Zr;
_.isContextConsumer = function(e) {
  return G(e) === st;
};
_.isContextProvider = function(e) {
  return G(e) === it;
};
_.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zt;
};
_.isForwardRef = function(e) {
  return G(e) === ct;
};
_.isFragment = function(e) {
  return G(e) === rt;
};
_.isLazy = function(e) {
  return G(e) === ft;
};
_.isMemo = function(e) {
  return G(e) === lt;
};
_.isPortal = function(e) {
  return G(e) === Kt;
};
_.isProfiler = function(e) {
  return G(e) === ot;
};
_.isStrictMode = function(e) {
  return G(e) === nt;
};
_.isSuspense = function(e) {
  return G(e) === ut;
};
_.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === rt || e === at || e === ot || e === nt || e === ut || e === wo || typeof e == "object" && e !== null && (e.$$typeof === ft || e.$$typeof === lt || e.$$typeof === it || e.$$typeof === st || e.$$typeof === ct || e.$$typeof === Co || e.$$typeof === ko || e.$$typeof === Ro || e.$$typeof === $o);
};
_.typeOf = G;
qr.exports = _;
var To = qr.exports, Jr = To, Eo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Oo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qr = {};
Qr[Jr.ForwardRef] = Eo;
Qr[Jr.Memo] = Oo;
var Po = !0;
function en(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Dt = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Po === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Vt = function(t, r, n) {
  Dt(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function _o(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ao = {
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
}, Mo = /[A-Z]|^ms/g, Io = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tn = function(t) {
  return t.charCodeAt(1) === 45;
}, pr = function(t) {
  return t != null && typeof t != "boolean";
}, Rt = /* @__PURE__ */ Yr(function(e) {
  return tn(e) ? e : e.replace(Mo, "-$&").toLowerCase();
}), mr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Io, function(n, o, i) {
          return ie = {
            name: o,
            styles: i,
            next: ie
          }, o;
        });
  }
  return Ao[t] !== 1 && !tn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ae(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return ie = {
          name: r.name,
          styles: r.styles,
          next: ie
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ie = {
              name: n.name,
              styles: n.styles,
              next: ie
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return Bo(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = ie, s = r(e);
        return ie = i, Ae(e, t, s);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function Bo(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ae(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : pr(s) && (n += Rt(i) + ":" + mr(i, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          pr(s[a]) && (n += Rt(i) + ":" + mr(i, s[a]) + ";");
      else {
        var c = Ae(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Rt(i) + ":" + c + ";";
            break;
          }
          default:
            n += i + "{" + c + "}";
        }
      }
    }
  return n;
}
var hr = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ie, dt = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  ie = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Ae(n, r, s)) : i += s[0];
  for (var a = 1; a < t.length; a++)
    i += Ae(n, r, t[a]), o && (i += s[a]);
  hr.lastIndex = 0;
  for (var c = "", u; (u = hr.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = _o(i) + c;
  return {
    name: d,
    styles: i,
    next: ie
  };
}, Fo = function(t) {
  return t();
}, rn = ur["useInsertionEffect"] ? ur["useInsertionEffect"] : !1, nn = rn || Fo, gr = rn || h.useLayoutEffect, on = {}.hasOwnProperty, sn = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ So({
    key: "css"
  }) : null
);
sn.Provider;
var Wt = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(r, n) {
    var o = h.useContext(sn);
    return t(r, o, n);
  });
}, Be = /* @__PURE__ */ h.createContext({}), _t = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", qa = function(t, r) {
  var n = {};
  for (var o in r)
    on.call(r, o) && (n[o] = r[o]);
  return n[_t] = t, n;
}, jo = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Dt(r, n, o), nn(function() {
    return Vt(r, n, o);
  }), null;
}, Lo = /* @__PURE__ */ Wt(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[_t], i = [n], s = "";
  typeof e.className == "string" ? s = en(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = dt(i, void 0, h.useContext(Be));
  s += t.key + "-" + a.name;
  var c = {};
  for (var u in e)
    on.call(e, u) && u !== "css" && u !== _t && (c[u] = e[u]);
  return c.ref = r, c.className = s, /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(jo, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, c));
}), Za = Lo, Ja = /* @__PURE__ */ Wt(function(e, t) {
  var r = e.styles, n = dt([r], void 0, h.useContext(Be)), o = h.useRef();
  return gr(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), gr(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Vt(t, n.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
function zo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return dt(t);
}
var Ut = function() {
  var t = zo.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function le(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function an(e) {
  if (!le(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = an(e[r]);
  }), t;
}
function te(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? b({}, e) : e;
  return le(e) && le(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (le(t[o]) && o in e && le(e[o]) ? n[o] = te(e[o], t[o], r) : r.clone ? n[o] = le(t[o]) ? an(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
function we(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function re(e) {
  if (typeof e != "string")
    throw new Error(we(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ko(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const No = typeof window < "u" ? h.useLayoutEffect : h.useEffect, Do = No;
function Ne(e) {
  const t = h.useRef(e);
  return Do(() => {
    t.current = e;
  }), h.useRef((...r) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...r)
  )).current;
}
function yr(...e) {
  return h.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Ko(r, t);
    });
  }, e);
}
let pt = !0, At = !1, br;
const Vo = {
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
function Wo(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Vo[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Uo(e) {
  e.metaKey || e.altKey || e.ctrlKey || (pt = !0);
}
function Tt() {
  pt = !1;
}
function Ho() {
  this.visibilityState === "hidden" && At && (pt = !0);
}
function Go(e) {
  e.addEventListener("keydown", Uo, !0), e.addEventListener("mousedown", Tt, !0), e.addEventListener("pointerdown", Tt, !0), e.addEventListener("touchstart", Tt, !0), e.addEventListener("visibilitychange", Ho, !0);
}
function Yo(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return pt || Wo(t);
}
function Xo() {
  const e = h.useCallback((o) => {
    o != null && Go(o.ownerDocument);
  }, []), t = h.useRef(!1);
  function r() {
    return t.current ? (At = !0, window.clearTimeout(br), br = window.setTimeout(() => {
      At = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Yo(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function cn(e, t) {
  const r = b({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = b({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = b({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = cn(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function un(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const vr = (e) => e, qo = () => {
  let e = vr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = vr;
    }
  };
}, Zo = qo(), Jo = Zo, Qo = {
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
function Ht(e, t, r = "Mui") {
  const n = Qo[t];
  return n ? `${r}-${n}` : `${Jo.generate(e)}-${t}`;
}
function Gt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ht(e, o, r);
  }), n;
}
const Ye = "$$material";
function Y(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var ei = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ti = /* @__PURE__ */ Yr(
  function(e) {
    return ei.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ri = ti, ni = function(t) {
  return t !== "theme";
}, xr = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ri : ni;
}, Sr = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, oi = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Dt(r, n, o), nn(function() {
    return Vt(r, n, o);
  }), null;
}, ii = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = Sr(t, r, n), c = a || xr(o), u = !c("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var f = d.length, y = 1; y < f; y++)
        p.push(d[y], d[0][y]);
    }
    var m = Wt(function(l, w, S) {
      var C = u && l.as || o, E = "", g = [], k = l;
      if (l.theme == null) {
        k = {};
        for (var O in l)
          k[O] = l[O];
        k.theme = h.useContext(Be);
      }
      typeof l.className == "string" ? E = en(w.registered, g, l.className) : l.className != null && (E = l.className + " ");
      var v = dt(p.concat(g), w.registered, k);
      E += w.key + "-" + v.name, s !== void 0 && (E += " " + s);
      var J = u && a === void 0 ? xr(C) : c, W = {};
      for (var x in l)
        u && x === "as" || // $FlowFixMe
        J(x) && (W[x] = l[x]);
      return W.className = E, W.ref = S, /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(oi, {
        cache: w,
        serialized: v,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ h.createElement(C, W));
    });
    return m.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = p, m.__emotion_forwardProp = a, Object.defineProperty(m, "toString", {
      value: function() {
        return "." + s;
      }
    }), m.withComponent = function(l, w) {
      return e(l, b({}, r, w, {
        shouldForwardProp: Sr(m, w, !0)
      })).apply(void 0, p);
    }, m;
  };
}, si = [
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
], Mt = ii.bind();
si.forEach(function(e) {
  Mt[e] = Mt(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ai(e, t) {
  return Mt(e, t);
}
const ci = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ui = ["values", "unit", "step"], li = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => b({}, r, {
    [n.key]: n.val
  }), {});
};
function fi(e) {
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
    unit: r = "px",
    step: n = 5
  } = e, o = Y(e, ui), i = li(t), s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - n / 100}${r})`;
  }
  function u(f, y) {
    const m = s.indexOf(y);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r}) and (max-width:${(m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : y) - n / 100}${r})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function p(f) {
    const y = s.indexOf(f);
    return y === 0 ? a(s[1]) : y === s.length - 1 ? c(s[y]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return b({
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: r
  }, o);
}
const di = {
  borderRadius: 4
}, pi = di;
function Oe(e, t) {
  return t ? te(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Yt = {
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
}, wr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Yt[e]}px)`
};
function ue(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || wr;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || wr;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Yt).indexOf(a) !== -1) {
        const c = i.up(a);
        s[c] = r(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function mi(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function hi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function mt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Xe(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = mt(e, r) || n, t && (o = t(o, n, e)), o;
}
function P(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = mt(c, n) || {};
    return ue(s, a, (p) => {
      let f = Xe(u, o, p);
      return p === f && typeof p == "string" && (f = Xe(u, o, `${t}${p === "default" ? "" : re(p)}`, p)), r === !1 ? f : {
        [r]: f
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function gi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const yi = {
  m: "margin",
  p: "padding"
}, bi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $r = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, vi = gi((e) => {
  if (e.length > 2)
    if ($r[e])
      e = $r[e];
    else
      return [e];
  const [t, r] = e.split(""), n = yi[t], o = bi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Xt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Xt, ...qt];
function Fe(e, t, r, n) {
  var o;
  const i = (o = mt(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function ln(e) {
  return Fe(e, "spacing", 8);
}
function je(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function xi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = je(t, r), n), {});
}
function Si(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = vi(r), i = xi(o, n), s = e[r];
  return ue(e, s, i);
}
function fn(e, t) {
  const r = ln(e.theme);
  return Object.keys(e).map((n) => Si(e, t, n, r)).reduce(Oe, {});
}
function I(e) {
  return fn(e, Xt);
}
I.propTypes = {};
I.filterProps = Xt;
function B(e) {
  return fn(e, qt);
}
B.propTypes = {};
B.filterProps = qt;
function wi(e = 8) {
  if (e.mui)
    return e;
  const t = ln({
    spacing: e
  }), r = (...n) => (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return r.mui = !0, r;
}
function ht(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Oe(o, t[i](n)) : o, {});
  return r.propTypes = {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function se(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const $i = P({
  prop: "border",
  themeKey: "borders",
  transform: se
}), Ci = P({
  prop: "borderTop",
  themeKey: "borders",
  transform: se
}), ki = P({
  prop: "borderRight",
  themeKey: "borders",
  transform: se
}), Ri = P({
  prop: "borderBottom",
  themeKey: "borders",
  transform: se
}), Ti = P({
  prop: "borderLeft",
  themeKey: "borders",
  transform: se
}), Ei = P({
  prop: "borderColor",
  themeKey: "palette"
}), Oi = P({
  prop: "borderTopColor",
  themeKey: "palette"
}), Pi = P({
  prop: "borderRightColor",
  themeKey: "palette"
}), _i = P({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Ai = P({
  prop: "borderLeftColor",
  themeKey: "palette"
}), gt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Fe(e.theme, "shape.borderRadius", 4), r = (n) => ({
      borderRadius: je(t, n)
    });
    return ue(e, e.borderRadius, r);
  }
  return null;
};
gt.propTypes = {};
gt.filterProps = ["borderRadius"];
ht($i, Ci, ki, Ri, Ti, Ei, Oi, Pi, _i, Ai, gt);
const yt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Fe(e.theme, "spacing", 8), r = (n) => ({
      gap: je(t, n)
    });
    return ue(e, e.gap, r);
  }
  return null;
};
yt.propTypes = {};
yt.filterProps = ["gap"];
const bt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Fe(e.theme, "spacing", 8), r = (n) => ({
      columnGap: je(t, n)
    });
    return ue(e, e.columnGap, r);
  }
  return null;
};
bt.propTypes = {};
bt.filterProps = ["columnGap"];
const vt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Fe(e.theme, "spacing", 8), r = (n) => ({
      rowGap: je(t, n)
    });
    return ue(e, e.rowGap, r);
  }
  return null;
};
vt.propTypes = {};
vt.filterProps = ["rowGap"];
const Mi = P({
  prop: "gridColumn"
}), Ii = P({
  prop: "gridRow"
}), Bi = P({
  prop: "gridAutoFlow"
}), Fi = P({
  prop: "gridAutoColumns"
}), ji = P({
  prop: "gridAutoRows"
}), Li = P({
  prop: "gridTemplateColumns"
}), zi = P({
  prop: "gridTemplateRows"
}), Ki = P({
  prop: "gridTemplateAreas"
}), Ni = P({
  prop: "gridArea"
});
ht(yt, bt, vt, Mi, Ii, Bi, Fi, ji, Li, zi, Ki, Ni);
function xe(e, t) {
  return t === "grey" ? t : e;
}
const Di = P({
  prop: "color",
  themeKey: "palette",
  transform: xe
}), Vi = P({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: xe
}), Wi = P({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: xe
});
ht(Di, Vi, Wi);
function U(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ui = P({
  prop: "width",
  transform: U
}), Zt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Yt[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: U(r)
      };
    };
    return ue(e, e.maxWidth, t);
  }
  return null;
};
Zt.filterProps = ["maxWidth"];
const Hi = P({
  prop: "minWidth",
  transform: U
}), Gi = P({
  prop: "height",
  transform: U
}), Yi = P({
  prop: "maxHeight",
  transform: U
}), Xi = P({
  prop: "minHeight",
  transform: U
});
P({
  prop: "size",
  cssProperty: "width",
  transform: U
});
P({
  prop: "size",
  cssProperty: "height",
  transform: U
});
const qi = P({
  prop: "boxSizing"
});
ht(Ui, Zt, Hi, Gi, Yi, Xi, qi);
const Zi = {
  // borders
  border: {
    themeKey: "borders",
    transform: se
  },
  borderTop: {
    themeKey: "borders",
    transform: se
  },
  borderRight: {
    themeKey: "borders",
    transform: se
  },
  borderBottom: {
    themeKey: "borders",
    transform: se
  },
  borderLeft: {
    themeKey: "borders",
    transform: se
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
    style: gt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: xe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: xe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: xe
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
    style: I
  },
  mt: {
    style: I
  },
  mr: {
    style: I
  },
  mb: {
    style: I
  },
  ml: {
    style: I
  },
  mx: {
    style: I
  },
  my: {
    style: I
  },
  margin: {
    style: I
  },
  marginTop: {
    style: I
  },
  marginRight: {
    style: I
  },
  marginBottom: {
    style: I
  },
  marginLeft: {
    style: I
  },
  marginX: {
    style: I
  },
  marginY: {
    style: I
  },
  marginInline: {
    style: I
  },
  marginInlineStart: {
    style: I
  },
  marginInlineEnd: {
    style: I
  },
  marginBlock: {
    style: I
  },
  marginBlockStart: {
    style: I
  },
  marginBlockEnd: {
    style: I
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
    style: yt
  },
  rowGap: {
    style: vt
  },
  columnGap: {
    style: bt
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
    transform: U
  },
  maxWidth: {
    style: Zt
  },
  minWidth: {
    transform: U
  },
  height: {
    transform: U
  },
  maxHeight: {
    transform: U
  },
  minHeight: {
    transform: U
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
}, Jt = Zi;
function Ji(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Qi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function es() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: p
    } = a;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const f = mt(o, u) || {};
    return p ? p(s) : ue(s, n, (m) => {
      let l = Xe(f, d, m);
      return m === l && typeof m == "string" && (l = Xe(f, d, `${r}${m === "default" ? "" : re(m)}`, m)), c === !1 ? l : {
        [c]: l
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : Jt;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = mi(i.breakpoints), p = Object.keys(d);
      let f = d;
      return Object.keys(u).forEach((y) => {
        const m = Qi(u[y], i);
        if (m != null)
          if (typeof m == "object")
            if (s[y])
              f = Oe(f, e(y, m, i, s));
            else {
              const l = ue({
                theme: i
              }, m, (w) => ({
                [y]: w
              }));
              Ji(l, m) ? f[y] = t({
                sx: m,
                theme: i
              }) : f = Oe(f, l);
            }
          else
            f = Oe(f, e(y, m, i, s));
      }), hi(p, f);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const dn = es();
dn.filterProps = ["sx"];
const Qt = dn, ts = ["breakpoints", "palette", "spacing", "shape"];
function er(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Y(e, ts), a = fi(r), c = wi(o);
  let u = te({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: b({
      mode: "light"
    }, n),
    spacing: c,
    shape: b({}, pi, i)
  }, s);
  return u = t.reduce((d, p) => te(d, p), u), u.unstable_sxConfig = b({}, Jt, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return Qt({
      sx: p,
      theme: this
    });
  }, u;
}
function rs(e) {
  return Object.keys(e).length === 0;
}
function pn(e = null) {
  const t = h.useContext(Be);
  return !t || rs(t) ? e : t;
}
const ns = er();
function os(e = ns) {
  return pn(e);
}
function mn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = mn(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ee() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = mn(e)) && (n && (n += " "), n += t);
  return n;
}
const is = ["variant"];
function Cr(e) {
  return e.length === 0;
}
function hn(e) {
  const {
    variant: t
  } = e, r = Y(e, is);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += Cr(n) ? e[o] : re(e[o]) : n += `${Cr(n) ? o : re(o)}${re(e[o].toString())}`;
  }), n;
}
const ss = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function as(e) {
  return Object.keys(e).length === 0;
}
function cs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const us = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, qe = (e) => {
  const t = {};
  return e && e.forEach((r) => {
    const n = hn(r.props);
    t[n] = r.style;
  }), t;
}, ls = (e, t) => {
  let r = [];
  return t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants), qe(r);
}, Ze = (e, t, r) => {
  const {
    ownerState: n = {}
  } = e, o = [];
  return r && r.forEach((i) => {
    let s = !0;
    Object.keys(i.props).forEach((a) => {
      n[a] !== i.props[a] && e[a] !== i.props[a] && (s = !1);
    }), s && o.push(t[hn(i.props)]);
  }), o;
}, fs = (e, t, r, n) => {
  var o;
  const i = r == null || (o = r.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return Ze(e, t, i);
};
function Ue(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ds = er(), ps = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function He({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return as(t) ? e : t[r] || t;
}
function ms(e) {
  return e ? (t, r) => r[e] : null;
}
const kr = ({
  styledArg: e,
  props: t,
  defaultTheme: r,
  themeId: n
}) => {
  const o = e(b({}, t, {
    theme: He(b({}, t, {
      defaultTheme: r,
      themeId: n
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = Ze(t, qe(i), i);
    return [o, ...s];
  }
  return o;
};
function hs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ds,
    rootShouldForwardProp: n = Ue,
    slotShouldForwardProp: o = Ue
  } = e, i = (s) => Qt(b({}, s, {
    theme: He(b({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    ci(s, (g) => g.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = ms(ps(u))
    } = a, y = Y(a, ss), m = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), l = p || !1;
    let w, S = Ue;
    u === "Root" || u === "root" ? S = n : u ? S = o : cs(s) && (S = void 0);
    const C = ai(s, b({
      shouldForwardProp: S,
      label: w
    }, y)), E = (g, ...k) => {
      const O = k ? k.map((x) => {
        if (typeof x == "function" && x.__emotion_real !== x)
          return (M) => kr({
            styledArg: x,
            props: M,
            defaultTheme: r,
            themeId: t
          });
        if (le(x)) {
          let M = x, F;
          return x && x.variants && (F = x.variants, delete M.variants, M = (D) => {
            let K = x;
            return Ze(D, qe(F), F).forEach((Q) => {
              K = te(K, Q);
            }), K;
          }), M;
        }
        return x;
      }) : [];
      let v = g;
      if (le(g)) {
        let x;
        g && g.variants && (x = g.variants, delete v.variants, v = (M) => {
          let F = g;
          return Ze(M, qe(x), x).forEach((K) => {
            F = te(F, K);
          }), F;
        });
      } else
        typeof g == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        g.__emotion_real !== g && (v = (x) => kr({
          styledArg: g,
          props: x,
          defaultTheme: r,
          themeId: t
        }));
      c && f && O.push((x) => {
        const M = He(b({}, x, {
          defaultTheme: r,
          themeId: t
        })), F = us(c, M);
        if (F) {
          const D = {};
          return Object.entries(F).forEach(([K, X]) => {
            D[K] = typeof X == "function" ? X(b({}, x, {
              theme: M
            })) : X;
          }), f(x, D);
        }
        return null;
      }), c && !m && O.push((x) => {
        const M = He(b({}, x, {
          defaultTheme: r,
          themeId: t
        }));
        return fs(x, ls(c, M), M, c);
      }), l || O.push(i);
      const J = O.length - k.length;
      if (Array.isArray(g) && J > 0) {
        const x = new Array(J).fill("");
        v = [...g, ...x], v.raw = [...g.raw, ...x];
      }
      const W = C(v, ...O);
      return s.muiName && (W.muiName = s.muiName), W;
    };
    return C.withConfig && (E.withConfig = C.withConfig), E;
  };
}
function gs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : cn(t.components[r].defaultProps, n);
}
function ys({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = os(r);
  return n && (o = o[n] || o), gs({
    theme: o,
    name: t,
    props: e
  });
}
function tr(e, t = 0, r = 1) {
  return Math.min(Math.max(t, e), r);
}
function bs(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function pe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return pe(bs(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(we(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(we(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
function xt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function vs(e) {
  e = pe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, d = (u + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), xt({
    type: a,
    values: c
  });
}
function Rr(e) {
  e = pe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? pe(vs(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xs(e, t) {
  const r = Rr(e), n = Rr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Tr(e, t) {
  return e = pe(e), t = tr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, xt(e);
}
function Ss(e, t) {
  if (e = pe(e), t = tr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return xt(e);
}
function ws(e, t) {
  if (e = pe(e), t = tr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return xt(e);
}
const $s = /* @__PURE__ */ h.createContext(null), gn = $s;
function yn() {
  return h.useContext(gn);
}
const Cs = typeof Symbol == "function" && Symbol.for, ks = Cs ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Rs(e, t) {
  return typeof t == "function" ? t(e) : b({}, e, t);
}
function Ts(e) {
  const {
    children: t,
    theme: r
  } = e, n = yn(), o = h.useMemo(() => {
    const i = n === null ? r : Rs(n, r);
    return i != null && (i[ks] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ Z.jsx(gn.Provider, {
    value: o,
    children: t
  });
}
const Er = {};
function Or(e, t, r, n = !1) {
  return h.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? b({}, t, {
        [e]: i
      }) : i;
      return n ? () => s : s;
    }
    return e ? b({}, t, {
      [e]: r
    }) : b({}, t, r);
  }, [e, t, r, n]);
}
function Es(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = pn(Er), i = yn() || Er, s = Or(n, o, r), a = Or(n, i, r, !0);
  return /* @__PURE__ */ Z.jsx(Ts, {
    theme: a,
    children: /* @__PURE__ */ Z.jsx(Be.Provider, {
      value: s,
      children: t
    })
  });
}
function Os(e, t) {
  return b({
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
const Ps = {
  black: "#000",
  white: "#fff"
}, Me = Ps, _s = {
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
}, As = _s, Ms = {
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
}, me = Ms, Is = {
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
}, he = Is, Bs = {
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
}, Te = Bs, Fs = {
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
}, ge = Fs, js = {
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
}, ye = js, Ls = {
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
}, be = Ls, zs = ["mode", "contrastThreshold", "tonalOffset"], Pr = {
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
    paper: Me.white,
    default: Me.white
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
}, Et = {
  text: {
    primary: Me.white,
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
    active: Me.white,
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
function _r(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ws(e.main, o) : t === "dark" && (e.dark = Ss(e.main, i)));
}
function Ks(e = "light") {
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
function Ns(e = "light") {
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
function Ds(e = "light") {
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
function Vs(e = "light") {
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
function Ws(e = "light") {
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
function Us(e = "light") {
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
function Hs(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Y(e, zs), i = e.primary || Ks(t), s = e.secondary || Ns(t), a = e.error || Ds(t), c = e.info || Vs(t), u = e.success || Ws(t), d = e.warning || Us(t);
  function p(l) {
    return xs(l, Et.text.primary) >= r ? Et.text.primary : Pr.text.primary;
  }
  const f = ({
    color: l,
    name: w,
    mainShade: S = 500,
    lightShade: C = 300,
    darkShade: E = 700
  }) => {
    if (l = b({}, l), !l.main && l[S] && (l.main = l[S]), !l.hasOwnProperty("main"))
      throw new Error(we(11, w ? ` (${w})` : "", S));
    if (typeof l.main != "string")
      throw new Error(we(12, w ? ` (${w})` : "", JSON.stringify(l.main)));
    return _r(l, "light", C, n), _r(l, "dark", E, n), l.contrastText || (l.contrastText = p(l.main)), l;
  }, y = {
    dark: Et,
    light: Pr
  };
  return te(b({
    // A collection of common colors.
    common: b({}, Me),
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
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: a,
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
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: As,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, y[t]), o);
}
const Gs = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ys(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ar = {
  textTransform: "uppercase"
}, Mr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Xs(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Mr,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = r, f = Y(r, Gs), y = o / 14, m = p || ((S) => `${S / u * y}rem`), l = (S, C, E, g, k) => b({
    fontFamily: n,
    fontWeight: S,
    fontSize: m(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: E
  }, n === Mr ? {
    letterSpacing: `${Ys(g / C)}em`
  } : {}, k, d), w = {
    h1: l(i, 96, 1.167, -1.5),
    h2: l(i, 60, 1.2, -0.5),
    h3: l(s, 48, 1.167, 0),
    h4: l(s, 34, 1.235, 0.25),
    h5: l(s, 24, 1.334, 0),
    h6: l(a, 20, 1.6, 0.15),
    subtitle1: l(s, 16, 1.75, 0.15),
    subtitle2: l(a, 14, 1.57, 0.1),
    body1: l(s, 16, 1.5, 0.15),
    body2: l(s, 14, 1.43, 0.15),
    button: l(a, 14, 1.75, 0.4, Ar),
    caption: l(s, 12, 1.66, 0.4),
    overline: l(s, 12, 2.66, 1, Ar),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return te(b({
    htmlFontSize: u,
    pxToRem: m,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c
  }, w), f, {
    clone: !1
    // No need to clone deep
  });
}
const qs = 0.2, Zs = 0.14, Js = 0.12;
function A(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${qs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Zs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Js})`].join(",");
}
const Qs = ["none", A(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), A(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), A(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), A(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), A(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), A(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), A(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), A(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), A(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), A(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), A(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), A(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), A(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), A(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), A(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), A(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), A(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), A(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), A(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), A(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), A(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), A(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), A(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), A(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ea = Qs, ta = ["duration", "easing", "delay"], ra = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, na = {
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
function Ir(e) {
  return `${Math.round(e)}ms`;
}
function oa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function ia(e) {
  const t = b({}, ra, e.easing), r = b({}, na, e.duration);
  return b({
    getAutoHeightDuration: oa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: c = 0
      } = i;
      return Y(i, ta), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof s == "string" ? s : Ir(s)} ${a} ${typeof c == "string" ? c : Ir(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const sa = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, aa = sa, ca = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function ua(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Y(e, ca);
  if (e.vars)
    throw new Error(we(18));
  const a = Hs(n), c = er(e);
  let u = te(c, {
    mixins: Os(c.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ea.slice(),
    typography: Xs(a, i),
    transitions: ia(o),
    zIndex: b({}, aa)
  });
  return u = te(u, s), u = t.reduce((d, p) => te(d, p), u), u.unstable_sxConfig = b({}, Jt, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return Qt({
      sx: p,
      theme: this
    });
  }, u;
}
const la = ua(), bn = la;
function rr({
  props: e,
  name: t
}) {
  return ys({
    props: e,
    name: t,
    defaultTheme: bn,
    themeId: Ye
  });
}
const fa = (e) => Ue(e) && e !== "classes", da = hs({
  themeId: Ye,
  defaultTheme: bn,
  rootShouldForwardProp: fa
}), St = da, pa = ["theme"];
function Qa(e) {
  let {
    theme: t
  } = e, r = Y(e, pa);
  const n = t[Ye];
  return /* @__PURE__ */ Z.jsx(Es, b({}, r, {
    themeId: n ? Ye : void 0,
    theme: n || t
  }));
}
function It(e, t) {
  return It = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, It(e, t);
}
function ma(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, It(e, t);
}
const Br = Ee.createContext(null);
function ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nr(e, t) {
  var r = function(i) {
    return t && h.isValidElement(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && h.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function ga(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var c in t) {
    if (n[c])
      for (s = 0; s < n[c].length; s++) {
        var u = n[c][s];
        a[n[c][s]] = r(u);
      }
    a[c] = r(c);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function de(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function ya(e, t) {
  return nr(e.children, function(r) {
    return h.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: de(r, "appear", e),
      enter: de(r, "enter", e),
      exit: de(r, "exit", e)
    });
  });
}
function ba(e, t, r) {
  var n = nr(e.children), o = ga(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (h.isValidElement(s)) {
      var a = i in t, c = i in n, u = t[i], d = h.isValidElement(u) && !u.props.in;
      c && (!a || d) ? o[i] = h.cloneElement(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: de(s, "exit", e),
        enter: de(s, "enter", e)
      }) : !c && a && !d ? o[i] = h.cloneElement(s, {
        in: !1
      }) : c && a && h.isValidElement(u) && (o[i] = h.cloneElement(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: de(s, "exit", e),
        enter: de(s, "enter", e)
      }));
    }
  }), o;
}
var va = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, xa = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, or = /* @__PURE__ */ function(e) {
  ma(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(ha(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? ya(o, a) : ba(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = nr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = b({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = Y(o, ["component", "childFactory"]), c = this.state.contextValue, u = va(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Ee.createElement(Br.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Ee.createElement(Br.Provider, {
      value: c
    }, /* @__PURE__ */ Ee.createElement(i, a, u));
  }, t;
}(Ee.Component);
or.propTypes = {};
or.defaultProps = xa;
const Sa = or;
function wa(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: u
  } = e, [d, p] = h.useState(!1), f = ee(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = ee(r.child, d && r.childLeaving, n && r.childPulsate);
  return !a && !d && p(!0), h.useEffect(() => {
    if (!a && c != null) {
      const l = setTimeout(c, u);
      return () => {
        clearTimeout(l);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ Z.jsx("span", {
    className: f,
    style: y,
    children: /* @__PURE__ */ Z.jsx("span", {
      className: m
    })
  });
}
const $a = Gt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), q = $a, Ca = ["center", "classes", "className"];
let wt = (e) => e, Fr, jr, Lr, zr;
const Bt = 550, ka = 80, Ra = Ut(Fr || (Fr = wt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Ta = Ut(jr || (jr = wt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ea = Ut(Lr || (Lr = wt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Oa = St("span", {
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
}), Pa = St(wa, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(zr || (zr = wt`
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
`), q.rippleVisible, Ra, Bt, ({
  theme: e
}) => e.transitions.easing.easeInOut, q.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, q.child, q.childLeaving, Ta, Bt, ({
  theme: e
}) => e.transitions.easing.easeInOut, q.childPulsate, Ea, ({
  theme: e
}) => e.transitions.easing.easeInOut), _a = /* @__PURE__ */ h.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, a = Y(n, Ca), [c, u] = h.useState([]), d = h.useRef(0), p = h.useRef(null);
  h.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const f = h.useRef(!1), y = h.useRef(0), m = h.useRef(null), l = h.useRef(null);
  h.useEffect(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const w = h.useCallback((g) => {
    const {
      pulsate: k,
      rippleX: O,
      rippleY: v,
      rippleSize: J,
      cb: W
    } = g;
    u((x) => [...x, /* @__PURE__ */ Z.jsx(Pa, {
      classes: {
        ripple: ee(i.ripple, q.ripple),
        rippleVisible: ee(i.rippleVisible, q.rippleVisible),
        ripplePulsate: ee(i.ripplePulsate, q.ripplePulsate),
        child: ee(i.child, q.child),
        childLeaving: ee(i.childLeaving, q.childLeaving),
        childPulsate: ee(i.childPulsate, q.childPulsate)
      },
      timeout: Bt,
      pulsate: k,
      rippleX: O,
      rippleY: v,
      rippleSize: J
    }, d.current)]), d.current += 1, p.current = W;
  }, [i]), S = h.useCallback((g = {}, k = {}, O = () => {
  }) => {
    const {
      pulsate: v = !1,
      center: J = o || k.pulsate,
      fakeElement: W = !1
      // For test purposes
    } = k;
    if ((g == null ? void 0 : g.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (g == null ? void 0 : g.type) === "touchstart" && (f.current = !0);
    const x = W ? null : l.current, M = x ? x.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, D, K;
    if (J || g === void 0 || g.clientX === 0 && g.clientY === 0 || !g.clientX && !g.touches)
      F = Math.round(M.width / 2), D = Math.round(M.height / 2);
    else {
      const {
        clientX: X,
        clientY: Q
      } = g.touches && g.touches.length > 0 ? g.touches[0] : g;
      F = Math.round(X - M.left), D = Math.round(Q - M.top);
    }
    if (J)
      K = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3), K % 2 === 0 && (K += 1);
    else {
      const X = Math.max(Math.abs((x ? x.clientWidth : 0) - F), F) * 2 + 2, Q = Math.max(Math.abs((x ? x.clientHeight : 0) - D), D) * 2 + 2;
      K = Math.sqrt(X ** 2 + Q ** 2);
    }
    g != null && g.touches ? m.current === null && (m.current = () => {
      w({
        pulsate: v,
        rippleX: F,
        rippleY: D,
        rippleSize: K,
        cb: O
      });
    }, y.current = setTimeout(() => {
      m.current && (m.current(), m.current = null);
    }, ka)) : w({
      pulsate: v,
      rippleX: F,
      rippleY: D,
      rippleSize: K,
      cb: O
    });
  }, [o, w]), C = h.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), E = h.useCallback((g, k) => {
    if (clearTimeout(y.current), (g == null ? void 0 : g.type) === "touchend" && m.current) {
      m.current(), m.current = null, y.current = setTimeout(() => {
        E(g, k);
      });
      return;
    }
    m.current = null, u((O) => O.length > 0 ? O.slice(1) : O), p.current = k;
  }, []);
  return h.useImperativeHandle(r, () => ({
    pulsate: C,
    start: S,
    stop: E
  }), [C, S, E]), /* @__PURE__ */ Z.jsx(Oa, b({
    className: ee(q.root, i.root, s),
    ref: l
  }, a, {
    children: /* @__PURE__ */ Z.jsx(Sa, {
      component: null,
      exit: !0,
      children: c
    })
  }));
}), Aa = _a;
function Ma(e) {
  return Ht("MuiButtonBase", e);
}
const Ia = Gt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ba = Ia, Fa = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], ja = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = un({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Ma, o);
  return r && n && (s.root += ` ${n}`), s;
}, La = St("button", {
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
  [`&.${Ba.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), za = /* @__PURE__ */ h.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: f = !1,
    LinkComponent: y = "a",
    onBlur: m,
    onClick: l,
    onContextMenu: w,
    onDragLeave: S,
    onFocus: C,
    onFocusVisible: E,
    onKeyDown: g,
    onKeyUp: k,
    onMouseDown: O,
    onMouseLeave: v,
    onMouseUp: J,
    onTouchEnd: W,
    onTouchMove: x,
    onTouchStart: M,
    tabIndex: F = 0,
    TouchRippleProps: D,
    touchRippleRef: K,
    type: X
  } = n, Q = Y(n, Fa), Ce = h.useRef(null), ne = h.useRef(null), vn = yr(ne, K), {
    isFocusVisibleRef: ir,
    onFocus: xn,
    onBlur: Sn,
    ref: wn
  } = Xo(), [fe, Le] = h.useState(!1);
  u && fe && Le(!1), h.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Le(!0), Ce.current.focus();
    }
  }), []);
  const [$t, $n] = h.useState(!1);
  h.useEffect(() => {
    $n(!0);
  }, []);
  const Cn = $t && !d && !u;
  h.useEffect(() => {
    fe && f && !d && $t && ne.current.pulsate();
  }, [d, f, fe, $t]);
  function ce($, ar, zn = p) {
    return Ne((cr) => (ar && ar(cr), !zn && ne.current && ne.current[$](cr), !0));
  }
  const kn = ce("start", O), Rn = ce("stop", w), Tn = ce("stop", S), En = ce("stop", J), On = ce("stop", ($) => {
    fe && $.preventDefault(), v && v($);
  }), Pn = ce("start", M), _n = ce("stop", W), An = ce("stop", x), Mn = ce("stop", ($) => {
    Sn($), ir.current === !1 && Le(!1), m && m($);
  }, !1), In = Ne(($) => {
    Ce.current || (Ce.current = $.currentTarget), xn($), ir.current === !0 && (Le(!0), E && E($)), C && C($);
  }), Ct = () => {
    const $ = Ce.current;
    return c && c !== "button" && !($.tagName === "A" && $.href);
  }, kt = h.useRef(!1), Bn = Ne(($) => {
    f && !kt.current && fe && ne.current && $.key === " " && (kt.current = !0, ne.current.stop($, () => {
      ne.current.start($);
    })), $.target === $.currentTarget && Ct() && $.key === " " && $.preventDefault(), g && g($), $.target === $.currentTarget && Ct() && $.key === "Enter" && !u && ($.preventDefault(), l && l($));
  }), Fn = Ne(($) => {
    f && $.key === " " && ne.current && fe && !$.defaultPrevented && (kt.current = !1, ne.current.stop($, () => {
      ne.current.pulsate($);
    })), k && k($), l && $.target === $.currentTarget && Ct() && $.key === " " && !$.defaultPrevented && l($);
  });
  let ze = c;
  ze === "button" && (Q.href || Q.to) && (ze = y);
  const ke = {};
  ze === "button" ? (ke.type = X === void 0 ? "button" : X, ke.disabled = u) : (!Q.href && !Q.to && (ke.role = "button"), u && (ke["aria-disabled"] = u));
  const jn = yr(r, wn, Ce), sr = b({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: f,
    tabIndex: F,
    focusVisible: fe
  }), Ln = ja(sr);
  return /* @__PURE__ */ Z.jsxs(La, b({
    as: ze,
    className: ee(Ln.root, a),
    ownerState: sr,
    onBlur: Mn,
    onClick: l,
    onContextMenu: Rn,
    onFocus: In,
    onKeyDown: Bn,
    onKeyUp: Fn,
    onMouseDown: kn,
    onMouseLeave: On,
    onMouseUp: En,
    onDragLeave: Tn,
    onTouchEnd: _n,
    onTouchMove: An,
    onTouchStart: Pn,
    ref: jn,
    tabIndex: u ? -1 : F,
    type: X
  }, ke, Q, {
    children: [s, Cn ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Z.jsx(Aa, b({
        ref: vn,
        center: i
      }, D))
    ) : null]
  }));
}), Ka = za;
function Na(e) {
  return Ht("MuiIconButton", e);
}
const Da = Gt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Va = Da, Wa = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Ua = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${re(n)}`, o && `edge${re(o)}`, `size${re(i)}`]
  };
  return un(s, Na, t);
}, Ha = St(Ka, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${re(r.color)}`], r.edge && t[`edge${re(r.edge)}`], t[`size${re(r.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Tr(e.palette.action.active, e.palette.action.hoverOpacity),
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
  var r;
  const n = (r = (e.vars || e).palette) == null ? void 0 : r[t.color];
  return b({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && b({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": b({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Tr(n.main, e.palette.action.hoverOpacity)
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
    [`&.${Va.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Ga = /* @__PURE__ */ h.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = n, p = Y(n, Wa), f = b({}, n, {
    edge: o,
    color: a,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), y = Ua(f);
  return /* @__PURE__ */ Z.jsx(Ha, b({
    className: ee(y.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r,
    ownerState: f
  }, p, {
    children: i
  }));
}), ec = Ga;
export {
  Za as E,
  Ja as G,
  ec as I,
  Qa as T,
  zo as a,
  ua as b,
  qa as c,
  on as h,
  Z as j,
  Mt as n
};
