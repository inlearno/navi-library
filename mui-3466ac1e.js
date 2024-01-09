import { r as d, a as Qr, R as Ct, b as jn, c as Da } from "./react-181b9648.js";
var Ui = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja = d, Fa = Symbol.for("react.element"), Wa = Symbol.for("react.fragment"), Va = Object.prototype.hasOwnProperty, Ha = ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ua = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ki(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    Va.call(t, r) && !Ua.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Fa, type: e, key: i, ref: a, props: o, _owner: Ha.current };
}
sr.Fragment = Wa;
sr.jsx = Ki;
sr.jsxs = Ki;
Ui.exports = sr;
var z = Ui.exports;
function Ka(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ga(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var qa = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ga(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ka(o);
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
}(), Ee = "-ms-", er = "-moz-", q = "-webkit-", Gi = "comm", ho = "rule", go = "decl", Xa = "@import", qi = "@keyframes", Ya = "@layer", Za = Math.abs, lr = String.fromCharCode, Ja = Object.assign;
function Qa(e, t) {
  return $e(e, 0) ^ 45 ? (((t << 2 ^ $e(e, 0)) << 2 ^ $e(e, 1)) << 2 ^ $e(e, 2)) << 2 ^ $e(e, 3) : 0;
}
function Xi(e) {
  return e.trim();
}
function es(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, n) {
  return e.replace(t, n);
}
function eo(e, t) {
  return e.indexOf(t);
}
function $e(e, t) {
  return e.charCodeAt(t) | 0;
}
function xn(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function vo(e) {
  return e.length;
}
function Fn(e, t) {
  return t.push(e), e;
}
function ts(e, t) {
  return e.map(t).join("");
}
var cr = 1, tn = 1, Yi = 0, _e = 0, ve = 0, sn = "";
function ur(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: cr, column: tn, length: a, return: "" };
}
function fn(e, t) {
  return Ja(ur("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ns() {
  return ve;
}
function rs() {
  return ve = _e > 0 ? $e(sn, --_e) : 0, tn--, ve === 10 && (tn = 1, cr--), ve;
}
function je() {
  return ve = _e < Yi ? $e(sn, _e++) : 0, tn++, ve === 10 && (tn = 1, cr++), ve;
}
function pt() {
  return $e(sn, _e);
}
function Kn() {
  return _e;
}
function Pn(e, t) {
  return xn(sn, e, t);
}
function Cn(e) {
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
function Zi(e) {
  return cr = tn = 1, Yi = ut(sn = e), _e = 0, [];
}
function Ji(e) {
  return sn = "", e;
}
function Gn(e) {
  return Xi(Pn(_e - 1, to(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function os(e) {
  for (; (ve = pt()) && ve < 33; )
    je();
  return Cn(e) > 2 || Cn(ve) > 3 ? "" : " ";
}
function is(e, t) {
  for (; --t && je() && !(ve < 48 || ve > 102 || ve > 57 && ve < 65 || ve > 70 && ve < 97); )
    ;
  return Pn(e, Kn() + (t < 6 && pt() == 32 && je() == 32));
}
function to(e) {
  for (; je(); )
    switch (ve) {
      case e:
        return _e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && to(ve);
        break;
      case 40:
        e === 41 && to(e);
        break;
      case 92:
        je();
        break;
    }
  return _e;
}
function as(e, t) {
  for (; je() && e + ve !== 47 + 10; )
    if (e + ve === 42 + 42 && pt() === 47)
      break;
  return "/*" + Pn(t, _e - 1) + "*" + lr(e === 47 ? e : je());
}
function ss(e) {
  for (; !Cn(pt()); )
    je();
  return Pn(e, _e);
}
function ls(e) {
  return Ji(qn("", null, null, null, [""], e = Zi(e), 0, [0], e));
}
function qn(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, m = a, p = 0, h = 0, g = 0, f = 1, C = 1, w = 1, P = 0, $ = "", b = o, T = i, E = r, S = $; C; )
    switch (g = P, P = je()) {
      case 40:
        if (g != 108 && $e(S, m - 1) == 58) {
          eo(S += X(Gn(P), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Gn(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += os(g);
        break;
      case 92:
        S += is(Kn() - 1, 7);
        continue;
      case 47:
        switch (pt()) {
          case 42:
          case 47:
            Fn(cs(as(je(), Kn()), t, n), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * f:
        s[u++] = ut(S) * w;
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            w == -1 && (S = X(S, /\f/g, "")), h > 0 && ut(S) - m && Fn(h > 32 ? qo(S + ";", r, n, m - 1) : qo(X(S, " ", "") + ";", r, n, m - 2), l);
            break;
          case 59:
            S += ";";
          default:
            if (Fn(E = Go(S, t, n, u, c, o, s, $, b = [], T = [], m), i), P === 123)
              if (c === 0)
                qn(S, t, E, E, b, i, m, s, T);
              else
                switch (p === 99 && $e(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    qn(e, E, E, r && Fn(Go(e, E, E, 0, 0, o, s, $, o, b = [], m), T), o, T, m, s, r ? b : T);
                    break;
                  default:
                    qn(S, E, E, E, [""], T, 0, s, T);
                }
        }
        u = c = h = 0, f = w = 1, $ = S = "", m = a;
        break;
      case 58:
        m = 1 + ut(S), h = g;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && rs() == 125)
            continue;
        }
        switch (S += lr(P), P * f) {
          case 38:
            w = c > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[u++] = (ut(S) - 1) * w, w = 1;
            break;
          case 64:
            pt() === 45 && (S += Gn(je())), p = pt(), c = m = ut($ = S += ss(Kn())), P++;
            break;
          case 45:
            g === 45 && ut(S) == 2 && (f = 0);
        }
    }
  return i;
}
function Go(e, t, n, r, o, i, a, s, l, u, c) {
  for (var m = o - 1, p = o === 0 ? i : [""], h = vo(p), g = 0, f = 0, C = 0; g < r; ++g)
    for (var w = 0, P = xn(e, m + 1, m = Za(f = a[g])), $ = e; w < h; ++w)
      ($ = Xi(f > 0 ? p[w] + " " + P : X(P, /&\f/g, p[w]))) && (l[C++] = $);
  return ur(e, t, n, o === 0 ? ho : s, l, u, c);
}
function cs(e, t, n) {
  return ur(e, t, n, Gi, lr(ns()), xn(e, 2, -2), 0);
}
function qo(e, t, n, r) {
  return ur(e, t, n, go, xn(e, 0, r), xn(e, r + 1, -1), r);
}
function Qt(e, t) {
  for (var n = "", r = vo(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function us(e, t, n, r) {
  switch (e.type) {
    case Ya:
      if (e.children.length)
        break;
    case Xa:
    case go:
      return e.return = e.return || e.value;
    case Gi:
      return "";
    case qi:
      return e.return = e.value + "{" + Qt(e.children, r) + "}";
    case ho:
      e.value = e.props.join(",");
  }
  return ut(n = Qt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function fs(e) {
  var t = vo(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function ds(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Qi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ps = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = pt(), o === 38 && i === 12 && (n[r] = 1), !Cn(i); )
    je();
  return Pn(t, _e);
}, ms = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Cn(o)) {
      case 0:
        o === 38 && pt() === 12 && (n[r] = 1), t[r] += ps(_e - 1, n, r);
        break;
      case 2:
        t[r] += Gn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = pt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += lr(o);
    }
  while (o = je());
  return t;
}, hs = function(t, n) {
  return Ji(ms(Zi(t), n));
}, Xo = /* @__PURE__ */ new WeakMap(), gs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xo.get(r)) && !o) {
      Xo.set(t, !0);
      for (var i = [], a = hs(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, vs = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ea(e, t) {
  switch (Qa(e, t)) {
    case 5103:
      return q + "print-" + e + e;
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
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + er + e + Ee + e + e;
    case 6828:
    case 4268:
      return q + e + Ee + e + e;
    case 6165:
      return q + e + Ee + "flex-" + e + e;
    case 5187:
      return q + e + X(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Ee + "flex-$1$2") + e;
    case 5443:
      return q + e + Ee + "flex-item-" + X(e, /flex-|-self/, "") + e;
    case 4675:
      return q + e + Ee + "flex-line-pack" + X(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return q + e + Ee + X(e, "shrink", "negative") + e;
    case 5292:
      return q + e + Ee + X(e, "basis", "preferred-size") + e;
    case 6060:
      return q + "box-" + X(e, "-grow", "") + q + e + Ee + X(e, "grow", "positive") + e;
    case 4554:
      return q + X(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return X(X(X(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return X(X(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, q + "$1$2") + e;
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
      if (ut(e) - 1 - t > 6)
        switch ($e(e, t + 1)) {
          case 109:
            if ($e(e, t + 4) !== 45)
              break;
          case 102:
            return X(e, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + er + ($e(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~eo(e, "stretch") ? ea(X(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if ($e(e, t + 1) !== 115)
        break;
    case 6444:
      switch ($e(e, ut(e) - 3 - (~eo(e, "!important") && 10))) {
        case 107:
          return X(e, ":", ":" + q) + e;
        case 101:
          return X(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + q + ($e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + Ee + "$2box$3") + e;
      }
      break;
    case 5936:
      switch ($e(e, t + 11)) {
        case 114:
          return q + e + Ee + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + Ee + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + Ee + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + Ee + e + e;
  }
  return e;
}
var ys = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case go:
        t.return = ea(t.value, t.length);
        break;
      case qi:
        return Qt([fn(t, {
          value: X(t.value, "@", "@" + q)
        })], o);
      case ho:
        if (t.length)
          return ts(t.props, function(i) {
            switch (es(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Qt([fn(t, {
                  props: [X(i, /:(read-\w+)/, ":" + er + "$1")]
                })], o);
              case "::placeholder":
                return Qt([fn(t, {
                  props: [X(i, /:(plac\w+)/, ":" + q + "input-$1")]
                }), fn(t, {
                  props: [X(i, /:(plac\w+)/, ":" + er + "$1")]
                }), fn(t, {
                  props: [X(i, /:(plac\w+)/, Ee + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, bs = [ys], xs = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var C = f.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || bs, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var C = f.getAttribute("data-emotion").split(" "), w = 1; w < C.length; w++)
        i[C[w]] = !0;
      s.push(f);
    }
  );
  var l, u = [gs, vs];
  {
    var c, m = [us, ds(function(f) {
      c.insert(f);
    })], p = fs(u.concat(o, m)), h = function(C) {
      return Qt(ls(C), p);
    };
    l = function(C, w, P, $) {
      c = P, h(C ? C + "{" + w.styles + "}" : w.styles), $ && (g.inserted[w.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new qa({
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
  return g.sheet.hydrate(s), g;
};
function v() {
  return v = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, v.apply(this, arguments);
}
var ta = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = typeof Symbol == "function" && Symbol.for, yo = Ce ? Symbol.for("react.element") : 60103, bo = Ce ? Symbol.for("react.portal") : 60106, fr = Ce ? Symbol.for("react.fragment") : 60107, dr = Ce ? Symbol.for("react.strict_mode") : 60108, pr = Ce ? Symbol.for("react.profiler") : 60114, mr = Ce ? Symbol.for("react.provider") : 60109, hr = Ce ? Symbol.for("react.context") : 60110, xo = Ce ? Symbol.for("react.async_mode") : 60111, gr = Ce ? Symbol.for("react.concurrent_mode") : 60111, vr = Ce ? Symbol.for("react.forward_ref") : 60112, yr = Ce ? Symbol.for("react.suspense") : 60113, Cs = Ce ? Symbol.for("react.suspense_list") : 60120, br = Ce ? Symbol.for("react.memo") : 60115, xr = Ce ? Symbol.for("react.lazy") : 60116, $s = Ce ? Symbol.for("react.block") : 60121, ws = Ce ? Symbol.for("react.fundamental") : 60117, Ss = Ce ? Symbol.for("react.responder") : 60118, Ts = Ce ? Symbol.for("react.scope") : 60119;
function We(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yo:
        switch (e = e.type, e) {
          case xo:
          case gr:
          case fr:
          case pr:
          case dr:
          case yr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case hr:
              case vr:
              case xr:
              case br:
              case mr:
                return e;
              default:
                return t;
            }
        }
      case bo:
        return t;
    }
  }
}
function na(e) {
  return We(e) === gr;
}
ee.AsyncMode = xo;
ee.ConcurrentMode = gr;
ee.ContextConsumer = hr;
ee.ContextProvider = mr;
ee.Element = yo;
ee.ForwardRef = vr;
ee.Fragment = fr;
ee.Lazy = xr;
ee.Memo = br;
ee.Portal = bo;
ee.Profiler = pr;
ee.StrictMode = dr;
ee.Suspense = yr;
ee.isAsyncMode = function(e) {
  return na(e) || We(e) === xo;
};
ee.isConcurrentMode = na;
ee.isContextConsumer = function(e) {
  return We(e) === hr;
};
ee.isContextProvider = function(e) {
  return We(e) === mr;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yo;
};
ee.isForwardRef = function(e) {
  return We(e) === vr;
};
ee.isFragment = function(e) {
  return We(e) === fr;
};
ee.isLazy = function(e) {
  return We(e) === xr;
};
ee.isMemo = function(e) {
  return We(e) === br;
};
ee.isPortal = function(e) {
  return We(e) === bo;
};
ee.isProfiler = function(e) {
  return We(e) === pr;
};
ee.isStrictMode = function(e) {
  return We(e) === dr;
};
ee.isSuspense = function(e) {
  return We(e) === yr;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === fr || e === gr || e === pr || e === dr || e === yr || e === Cs || typeof e == "object" && e !== null && (e.$$typeof === xr || e.$$typeof === br || e.$$typeof === mr || e.$$typeof === hr || e.$$typeof === vr || e.$$typeof === ws || e.$$typeof === Ss || e.$$typeof === Ts || e.$$typeof === $s);
};
ee.typeOf = We;
ta.exports = ee;
var Rs = ta.exports, ra = Rs, Es = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ps = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, oa = {};
oa[ra.ForwardRef] = Es;
oa[ra.Memo] = Ps;
var Os = !0;
function ia(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Co = function(t, n, r) {
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
  Os === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $o = function(t, n, r) {
  Co(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ks(e) {
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
var As = {
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
}, Ms = /[A-Z]|^ms/g, Is = /_EMO_([^_]+?)_([^]*?)_EMO_/g, aa = function(t) {
  return t.charCodeAt(1) === 45;
}, Yo = function(t) {
  return t != null && typeof t != "boolean";
}, Gr = /* @__PURE__ */ Qi(function(e) {
  return aa(e) ? e : e.replace(Ms, "-$&").toLowerCase();
}), Zo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Is, function(r, o, i) {
          return ft = {
            name: o,
            styles: i,
            next: ft
          }, o;
        });
  }
  return As[t] !== 1 && !aa(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function $n(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return ft = {
          name: n.name,
          styles: n.styles,
          next: ft
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            ft = {
              name: r.name,
              styles: r.styles,
              next: ft
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return Bs(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = ft, a = n(e);
        return ft = i, $n(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Bs(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += $n(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Yo(a) && (r += Gr(i) + ":" + Zo(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Yo(a[s]) && (r += Gr(i) + ":" + Zo(i, a[s]) + ";");
      else {
        var l = $n(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Gr(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Jo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ft, Cr = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  ft = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += $n(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += $n(r, n, t[s]), o && (i += a[s]);
  Jo.lastIndex = 0;
  for (var l = "", u; (u = Jo.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = ks(i) + l;
  return {
    name: c,
    styles: i,
    next: ft
  };
}, _s = function(t) {
  return t();
}, sa = Qr["useInsertionEffect"] ? Qr["useInsertionEffect"] : !1, la = sa || _s, Qo = sa || d.useLayoutEffect, ca = {}.hasOwnProperty, ua = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ xs({
    key: "css"
  }) : null
);
ua.Provider;
var wo = function(t) {
  return /* @__PURE__ */ d.forwardRef(function(n, r) {
    var o = d.useContext(ua);
    return t(n, o, r);
  });
}, On = /* @__PURE__ */ d.createContext({}), no = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Yp = function(t, n) {
  var r = {};
  for (var o in n)
    ca.call(n, o) && (r[o] = n[o]);
  return r[no] = t, r;
}, Ls = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Co(n, r, o), la(function() {
    return $o(n, r, o);
  }), null;
}, zs = /* @__PURE__ */ wo(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[no], i = [r], a = "";
  typeof e.className == "string" ? a = ia(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Cr(i, void 0, d.useContext(On));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    ca.call(e, u) && u !== "css" && u !== no && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Ls, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ d.createElement(o, l));
}), Zp = zs, Jp = /* @__PURE__ */ wo(function(e, t) {
  var n = e.styles, r = Cr([n], void 0, d.useContext(On)), o = d.useRef();
  return Qo(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Qo(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && $o(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Ns() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Cr(t);
}
var So = function() {
  var t = Ns.apply(void 0, arguments), n = "animation-" + t.name;
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
function fa(e) {
  if (!xt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = fa(e[n]);
  }), t;
}
function rt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? v({}, e) : e;
  return xt(e) && xt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (xt(t[o]) && o in e && xt(e[o]) ? r[o] = rt(e[o], t[o], n) : n.clone ? r[o] = xt(t[o]) ? fa(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Dt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function U(e) {
  if (typeof e != "string")
    throw new Error(Dt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ei(e) {
  return e && e.ownerDocument || document;
}
function tr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ds = typeof window < "u" ? d.useLayoutEffect : d.useEffect, wn = Ds;
let ti = 0;
function js(e) {
  const [t, n] = d.useState(e), r = e || t;
  return d.useEffect(() => {
    t == null && (ti += 1, n(`mui-${ti}`));
  }, [t]), r;
}
const ni = Qr["useId".toString()];
function da(e) {
  if (ni !== void 0) {
    const t = ni();
    return e ?? t;
  }
  return js(e);
}
function Xn({
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
function $t(e) {
  const t = d.useRef(e);
  return wn(() => {
    t.current = e;
  }), d.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function wt(...e) {
  return d.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      tr(n, t);
    });
  }, e);
}
let $r = !0, ro = !1, ri;
const Fs = {
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
function Ws(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Fs[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Vs(e) {
  e.metaKey || e.altKey || e.ctrlKey || ($r = !0);
}
function qr() {
  $r = !1;
}
function Hs() {
  this.visibilityState === "hidden" && ro && ($r = !0);
}
function Us(e) {
  e.addEventListener("keydown", Vs, !0), e.addEventListener("mousedown", qr, !0), e.addEventListener("pointerdown", qr, !0), e.addEventListener("touchstart", qr, !0), e.addEventListener("visibilitychange", Hs, !0);
}
function Ks(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return $r || Ws(t);
}
function pa() {
  const e = d.useCallback((o) => {
    o != null && Us(o.ownerDocument);
  }, []), t = d.useRef(!1);
  function n() {
    return t.current ? (ro = !0, window.clearTimeout(ri), ri = window.setTimeout(() => {
      ro = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Ks(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
const Gs = (e) => {
  const t = d.useRef({});
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}, qs = Gs;
function To(e, t) {
  const n = v({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = v({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = v({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = To(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Je(e, t, n = void 0) {
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
const oi = (e) => e, Xs = () => {
  let e = oi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = oi;
    }
  };
}, Ys = Xs(), Zs = Ys, Js = {
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
function Ve(e, t, n = "Mui") {
  const r = Js[t];
  return r ? `${n}-${r}` : `${Zs.generate(e)}-${t}`;
}
function He(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ve(e, o, n);
  }), r;
}
const Sn = "$$material";
function te(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Qs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, el = /* @__PURE__ */ Qi(
  function(e) {
    return Qs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), tl = el, nl = function(t) {
  return t !== "theme";
}, ii = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? tl : nl;
}, ai = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, rl = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Co(n, r, o), la(function() {
    return $o(n, r, o);
  }), null;
}, ol = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = ai(t, n, r), l = s || ii(o), u = !l("as");
  return function() {
    var c = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      m.push.apply(m, c);
    else {
      m.push(c[0][0]);
      for (var p = c.length, h = 1; h < p; h++)
        m.push(c[h], c[0][h]);
    }
    var g = wo(function(f, C, w) {
      var P = u && f.as || o, $ = "", b = [], T = f;
      if (f.theme == null) {
        T = {};
        for (var E in f)
          T[E] = f[E];
        T.theme = d.useContext(On);
      }
      typeof f.className == "string" ? $ = ia(C.registered, b, f.className) : f.className != null && ($ = f.className + " ");
      var S = Cr(m.concat(b), C.registered, T);
      $ += C.key + "-" + S.name, a !== void 0 && ($ += " " + a);
      var D = u && s === void 0 ? ii(P) : l, B = {};
      for (var R in f)
        u && R === "as" || // $FlowFixMe
        D(R) && (B[R] = f[R]);
      return B.className = $, B.ref = w, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(rl, {
        cache: C,
        serialized: S,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ d.createElement(P, B));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = m, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(f, C) {
      return e(f, v({}, n, C, {
        shouldForwardProp: ai(g, C, !0)
      })).apply(void 0, m);
    }, g;
  };
}, il = [
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
], oo = ol.bind();
il.forEach(function(e) {
  oo[e] = oo(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function al(e, t) {
  return oo(e, t);
}
const sl = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ll = ["values", "unit", "step"], cl = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => v({}, n, {
    [r.key]: r.val
  }), {});
};
function ul(e) {
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
  } = e, o = te(e, ll), i = cl(t), a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, h) {
    const g = a.indexOf(h);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : h) - r / 100}${n})`;
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function m(p) {
    const h = a.indexOf(p);
    return h === 0 ? s(a[1]) : h === a.length - 1 ? l(a[h]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return v({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: u,
    only: c,
    not: m,
    unit: n
  }, o);
}
const fl = {
  borderRadius: 4
}, dl = fl;
function vn(e, t) {
  return t ? rt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ro = {
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
}, si = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ro[e]}px)`
};
function St(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || si;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || si;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || Ro).indexOf(s) !== -1) {
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
function pl(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function ml(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function wr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function nr(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = wr(e, n) || r, t && (o = t(o, r, e)), o;
}
function Z(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, u = wr(l, r) || {};
    return St(a, s, (m) => {
      let p = nr(u, o, m);
      return m === p && typeof m == "string" && (p = nr(u, o, `${t}${m === "default" ? "" : U(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function hl(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const gl = {
  m: "margin",
  p: "padding"
}, vl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, li = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, yl = hl((e) => {
  if (e.length > 2)
    if (li[e])
      e = li[e];
    else
      return [e];
  const [t, n] = e.split(""), r = gl[t], o = vl[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Eo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Po = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Eo, ...Po];
function kn(e, t, n, r) {
  var o;
  const i = (o = wr(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function ma(e) {
  return kn(e, "spacing", 8);
}
function An(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function bl(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = An(t, n), r), {});
}
function xl(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = yl(n), i = bl(o, r), a = e[n];
  return St(e, a, i);
}
function ha(e, t) {
  const n = ma(e.theme);
  return Object.keys(e).map((r) => xl(e, t, r, n)).reduce(vn, {});
}
function ue(e) {
  return ha(e, Eo);
}
ue.propTypes = {};
ue.filterProps = Eo;
function fe(e) {
  return ha(e, Po);
}
fe.propTypes = {};
fe.filterProps = Po;
function Cl(e = 8) {
  if (e.mui)
    return e;
  const t = ma({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function Sr(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? vn(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const $l = Z({
  prop: "border",
  themeKey: "borders",
  transform: dt
}), wl = Z({
  prop: "borderTop",
  themeKey: "borders",
  transform: dt
}), Sl = Z({
  prop: "borderRight",
  themeKey: "borders",
  transform: dt
}), Tl = Z({
  prop: "borderBottom",
  themeKey: "borders",
  transform: dt
}), Rl = Z({
  prop: "borderLeft",
  themeKey: "borders",
  transform: dt
}), El = Z({
  prop: "borderColor",
  themeKey: "palette"
}), Pl = Z({
  prop: "borderTopColor",
  themeKey: "palette"
}), Ol = Z({
  prop: "borderRightColor",
  themeKey: "palette"
}), kl = Z({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Al = Z({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Tr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = kn(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: An(t, r)
    });
    return St(e, e.borderRadius, n);
  }
  return null;
};
Tr.propTypes = {};
Tr.filterProps = ["borderRadius"];
Sr($l, wl, Sl, Tl, Rl, El, Pl, Ol, kl, Al, Tr);
const Rr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = kn(e.theme, "spacing", 8), n = (r) => ({
      gap: An(t, r)
    });
    return St(e, e.gap, n);
  }
  return null;
};
Rr.propTypes = {};
Rr.filterProps = ["gap"];
const Er = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = kn(e.theme, "spacing", 8), n = (r) => ({
      columnGap: An(t, r)
    });
    return St(e, e.columnGap, n);
  }
  return null;
};
Er.propTypes = {};
Er.filterProps = ["columnGap"];
const Pr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = kn(e.theme, "spacing", 8), n = (r) => ({
      rowGap: An(t, r)
    });
    return St(e, e.rowGap, n);
  }
  return null;
};
Pr.propTypes = {};
Pr.filterProps = ["rowGap"];
const Ml = Z({
  prop: "gridColumn"
}), Il = Z({
  prop: "gridRow"
}), Bl = Z({
  prop: "gridAutoFlow"
}), _l = Z({
  prop: "gridAutoColumns"
}), Ll = Z({
  prop: "gridAutoRows"
}), zl = Z({
  prop: "gridTemplateColumns"
}), Nl = Z({
  prop: "gridTemplateRows"
}), Dl = Z({
  prop: "gridTemplateAreas"
}), jl = Z({
  prop: "gridArea"
});
Sr(Rr, Er, Pr, Ml, Il, Bl, _l, Ll, zl, Nl, Dl, jl);
function en(e, t) {
  return t === "grey" ? t : e;
}
const Fl = Z({
  prop: "color",
  themeKey: "palette",
  transform: en
}), Wl = Z({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: en
}), Vl = Z({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: en
});
Sr(Fl, Wl, Vl);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hl = Z({
  prop: "width",
  transform: De
}), Oo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ro[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: De(n)
      };
    };
    return St(e, e.maxWidth, t);
  }
  return null;
};
Oo.filterProps = ["maxWidth"];
const Ul = Z({
  prop: "minWidth",
  transform: De
}), Kl = Z({
  prop: "height",
  transform: De
}), Gl = Z({
  prop: "maxHeight",
  transform: De
}), ql = Z({
  prop: "minHeight",
  transform: De
});
Z({
  prop: "size",
  cssProperty: "width",
  transform: De
});
Z({
  prop: "size",
  cssProperty: "height",
  transform: De
});
const Xl = Z({
  prop: "boxSizing"
});
Sr(Hl, Oo, Ul, Kl, Gl, ql, Xl);
const Yl = {
  // borders
  border: {
    themeKey: "borders",
    transform: dt
  },
  borderTop: {
    themeKey: "borders",
    transform: dt
  },
  borderRight: {
    themeKey: "borders",
    transform: dt
  },
  borderBottom: {
    themeKey: "borders",
    transform: dt
  },
  borderLeft: {
    themeKey: "borders",
    transform: dt
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
    style: Tr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: en
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: en
  },
  backgroundColor: {
    themeKey: "palette",
    transform: en
  },
  // spacing
  p: {
    style: fe
  },
  pt: {
    style: fe
  },
  pr: {
    style: fe
  },
  pb: {
    style: fe
  },
  pl: {
    style: fe
  },
  px: {
    style: fe
  },
  py: {
    style: fe
  },
  padding: {
    style: fe
  },
  paddingTop: {
    style: fe
  },
  paddingRight: {
    style: fe
  },
  paddingBottom: {
    style: fe
  },
  paddingLeft: {
    style: fe
  },
  paddingX: {
    style: fe
  },
  paddingY: {
    style: fe
  },
  paddingInline: {
    style: fe
  },
  paddingInlineStart: {
    style: fe
  },
  paddingInlineEnd: {
    style: fe
  },
  paddingBlock: {
    style: fe
  },
  paddingBlockStart: {
    style: fe
  },
  paddingBlockEnd: {
    style: fe
  },
  m: {
    style: ue
  },
  mt: {
    style: ue
  },
  mr: {
    style: ue
  },
  mb: {
    style: ue
  },
  ml: {
    style: ue
  },
  mx: {
    style: ue
  },
  my: {
    style: ue
  },
  margin: {
    style: ue
  },
  marginTop: {
    style: ue
  },
  marginRight: {
    style: ue
  },
  marginBottom: {
    style: ue
  },
  marginLeft: {
    style: ue
  },
  marginX: {
    style: ue
  },
  marginY: {
    style: ue
  },
  marginInline: {
    style: ue
  },
  marginInlineStart: {
    style: ue
  },
  marginInlineEnd: {
    style: ue
  },
  marginBlock: {
    style: ue
  },
  marginBlockStart: {
    style: ue
  },
  marginBlockEnd: {
    style: ue
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
    style: Rr
  },
  rowGap: {
    style: Pr
  },
  columnGap: {
    style: Er
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
    style: Oo
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
}, Or = Yl;
function Zl(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Jl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ql() {
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
      style: m
    } = s;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = wr(o, u) || {};
    return m ? m(a) : St(a, r, (g) => {
      let f = nr(p, c, g);
      return g === f && typeof g == "string" && (f = nr(p, c, `${n}${g === "default" ? "" : U(g)}`, g)), l === !1 ? f : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : Or;
    function s(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const c = pl(i.breakpoints), m = Object.keys(c);
      let p = c;
      return Object.keys(u).forEach((h) => {
        const g = Jl(u[h], i);
        if (g != null)
          if (typeof g == "object")
            if (a[h])
              p = vn(p, e(h, g, i, a));
            else {
              const f = St({
                theme: i
              }, g, (C) => ({
                [h]: C
              }));
              Zl(f, g) ? p[h] = t({
                sx: g,
                theme: i
              }) : p = vn(p, f);
            }
          else
            p = vn(p, e(h, g, i, a));
      }), ml(m, p);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const ga = Ql();
ga.filterProps = ["sx"];
const ko = ga, ec = ["breakpoints", "palette", "spacing", "shape"];
function Ao(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = te(e, ec), s = ul(n), l = Cl(o);
  let u = rt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: v({
      mode: "light"
    }, r),
    spacing: l,
    shape: v({}, dl, i)
  }, a);
  return u = t.reduce((c, m) => rt(c, m), u), u.unstable_sxConfig = v({}, Or, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return ko({
      sx: m,
      theme: this
    });
  }, u;
}
function tc(e) {
  return Object.keys(e).length === 0;
}
function Mo(e = null) {
  const t = d.useContext(On);
  return !t || tc(t) ? e : t;
}
const nc = Ao();
function va(e = nc) {
  return Mo(e);
}
const rc = ["sx"], oc = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Or;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function ic(e) {
  const {
    sx: t
  } = e, n = te(e, rc), {
    systemProps: r,
    otherProps: o
  } = oc(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return xt(s) ? v({}, r, s) : r;
  } : i = v({}, r, t), v({}, o, {
    sx: i
  });
}
function ya(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ya(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ie() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ya(e)) && (r && (r += " "), r += t);
  return r;
}
const ac = ["variant"];
function ci(e) {
  return e.length === 0;
}
function ba(e) {
  const {
    variant: t
  } = e, n = te(e, ac);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += ci(r) ? e[o] : U(e[o]) : r += `${ci(r) ? o : U(o)}${U(e[o].toString())}`;
  }), r;
}
const sc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function lc(e) {
  return Object.keys(e).length === 0;
}
function cc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const uc = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, rr = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = ba(n.props);
    t[r] = n.style;
  }), t;
}, fc = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), rr(n);
}, or = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(t[ba(i.props)]);
  }), o;
}, dc = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return or(e, t, i);
};
function Yn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const pc = Ao(), mc = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Zn({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return lc(t) ? e : t[n] || t;
}
function hc(e) {
  return e ? (t, n) => n[e] : null;
}
const ui = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(v({}, t, {
    theme: Zn(v({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = or(t, rr(i), i);
    return [o, ...a];
  }
  return o;
};
function gc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = pc,
    rootShouldForwardProp: r = Yn,
    slotShouldForwardProp: o = Yn
  } = e, i = (a) => ko(v({}, a, {
    theme: Zn(v({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    sl(a, (b) => b.filter((T) => !(T != null && T.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: c,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = hc(mc(u))
    } = s, h = te(s, sc), g = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = m || !1;
    let C, w = Yn;
    u === "Root" || u === "root" ? w = r : u ? w = o : cc(a) && (w = void 0);
    const P = al(a, v({
      shouldForwardProp: w,
      label: C
    }, h)), $ = (b, ...T) => {
      const E = T ? T.map((R) => {
        if (typeof R == "function" && R.__emotion_real !== R)
          return (O) => ui({
            styledArg: R,
            props: O,
            defaultTheme: n,
            themeId: t
          });
        if (xt(R)) {
          let O = R, j;
          return R && R.variants && (j = R.variants, delete O.variants, O = (F) => {
            let H = R;
            return or(F, rr(j), j).forEach((M) => {
              H = rt(H, M);
            }), H;
          }), O;
        }
        return R;
      }) : [];
      let S = b;
      if (xt(b)) {
        let R;
        b && b.variants && (R = b.variants, delete S.variants, S = (O) => {
          let j = b;
          return or(O, rr(R), R).forEach((H) => {
            j = rt(j, H);
          }), j;
        });
      } else
        typeof b == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        b.__emotion_real !== b && (S = (R) => ui({
          styledArg: b,
          props: R,
          defaultTheme: n,
          themeId: t
        }));
      l && p && E.push((R) => {
        const O = Zn(v({}, R, {
          defaultTheme: n,
          themeId: t
        })), j = uc(l, O);
        if (j) {
          const F = {};
          return Object.entries(j).forEach(([H, k]) => {
            F[H] = typeof k == "function" ? k(v({}, R, {
              theme: O
            })) : k;
          }), p(R, F);
        }
        return null;
      }), l && !g && E.push((R) => {
        const O = Zn(v({}, R, {
          defaultTheme: n,
          themeId: t
        }));
        return dc(R, fc(l, O), O, l);
      }), f || E.push(i);
      const D = E.length - T.length;
      if (Array.isArray(b) && D > 0) {
        const R = new Array(D).fill("");
        S = [...b, ...R], S.raw = [...b.raw, ...R];
      }
      const B = P(S, ...E);
      return a.muiName && (B.muiName = a.muiName), B;
    };
    return P.withConfig && ($.withConfig = P.withConfig), $;
  };
}
function vc(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : To(t.components[n].defaultProps, r);
}
function yc({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = va(n);
  return r && (o = o[r] || o), vc({
    theme: o,
    name: t,
    props: e
  });
}
function Io(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function bc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return jt(bc(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Dt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Dt(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function kr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function xc(e) {
  e = jt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), kr({
    type: s,
    values: l
  });
}
function fi(e) {
  e = jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? jt(xc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Cc(e, t) {
  const n = fi(e), r = fi(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Me(e, t) {
  return e = jt(e), t = Io(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, kr(e);
}
function io(e, t) {
  if (e = jt(e), t = Io(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return kr(e);
}
function ao(e, t) {
  if (e = jt(e), t = Io(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return kr(e);
}
const $c = /* @__PURE__ */ d.createContext(null), xa = $c;
function Ca() {
  return d.useContext(xa);
}
const wc = typeof Symbol == "function" && Symbol.for, Sc = wc ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Tc(e, t) {
  return typeof t == "function" ? t(e) : v({}, e, t);
}
function Rc(e) {
  const {
    children: t,
    theme: n
  } = e, r = Ca(), o = d.useMemo(() => {
    const i = r === null ? n : Tc(r, n);
    return i != null && (i[Sc] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ z.jsx(xa.Provider, {
    value: o,
    children: t
  });
}
const di = {};
function pi(e, t, n, r = !1) {
  return d.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), a = e ? v({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? v({}, t, {
      [e]: n
    }) : v({}, t, n);
  }, [e, t, n, r]);
}
function Ec(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Mo(di), i = Ca() || di, a = pi(r, o, n), s = pi(r, i, n, !0);
  return /* @__PURE__ */ z.jsx(Rc, {
    theme: s,
    children: /* @__PURE__ */ z.jsx(On.Provider, {
      value: a,
      children: t
    })
  });
}
function Pc(e, t) {
  return v({
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
const Oc = {
  black: "#000",
  white: "#fff"
}, Tn = Oc, kc = {
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
}, Ac = kc, Mc = {
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
}, Kt = Mc, Ic = {
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
}, Gt = Ic, Bc = {
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
}, dn = Bc, _c = {
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
}, qt = _c, Lc = {
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
}, Xt = Lc, zc = {
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
}, Yt = zc, Nc = ["mode", "contrastThreshold", "tonalOffset"], mi = {
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
    paper: Tn.white,
    default: Tn.white
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
}, Xr = {
  text: {
    primary: Tn.white,
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
    active: Tn.white,
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
function hi(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ao(e.main, o) : t === "dark" && (e.dark = io(e.main, i)));
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: qt[200],
    light: qt[50],
    dark: qt[400]
  } : {
    main: qt[700],
    light: qt[400],
    dark: qt[800]
  };
}
function jc(e = "light") {
  return e === "dark" ? {
    main: Kt[200],
    light: Kt[50],
    dark: Kt[400]
  } : {
    main: Kt[500],
    light: Kt[300],
    dark: Kt[700]
  };
}
function Fc(e = "light") {
  return e === "dark" ? {
    main: Gt[500],
    light: Gt[300],
    dark: Gt[700]
  } : {
    main: Gt[700],
    light: Gt[400],
    dark: Gt[800]
  };
}
function Wc(e = "light") {
  return e === "dark" ? {
    main: Xt[400],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: Xt[700],
    light: Xt[500],
    dark: Xt[900]
  };
}
function Vc(e = "light") {
  return e === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[800],
    light: Yt[500],
    dark: Yt[900]
  };
}
function Hc(e = "light") {
  return e === "dark" ? {
    main: dn[400],
    light: dn[300],
    dark: dn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: dn[500],
    dark: dn[900]
  };
}
function Uc(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = te(e, Nc), i = e.primary || Dc(t), a = e.secondary || jc(t), s = e.error || Fc(t), l = e.info || Wc(t), u = e.success || Vc(t), c = e.warning || Hc(t);
  function m(f) {
    return Cc(f, Xr.text.primary) >= n ? Xr.text.primary : mi.text.primary;
  }
  const p = ({
    color: f,
    name: C,
    mainShade: w = 500,
    lightShade: P = 300,
    darkShade: $ = 700
  }) => {
    if (f = v({}, f), !f.main && f[w] && (f.main = f[w]), !f.hasOwnProperty("main"))
      throw new Error(Dt(11, C ? ` (${C})` : "", w));
    if (typeof f.main != "string")
      throw new Error(Dt(12, C ? ` (${C})` : "", JSON.stringify(f.main)));
    return hi(f, "light", P, r), hi(f, "dark", $, r), f.contrastText || (f.contrastText = m(f.main)), f;
  }, h = {
    dark: Xr,
    light: mi
  };
  return rt(v({
    // A collection of common colors.
    common: v({}, Tn),
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
    grey: Ac,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, h[t]), o);
}
const Kc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Gc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const gi = {
  textTransform: "uppercase"
}, vi = '"Roboto", "Helvetica", "Arial", sans-serif';
function qc(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = vi,
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
    pxToRem: m
  } = n, p = te(n, Kc), h = o / 14, g = m || ((w) => `${w / u * h}rem`), f = (w, P, $, b, T) => v({
    fontFamily: r,
    fontWeight: w,
    fontSize: g(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $
  }, r === vi ? {
    letterSpacing: `${Gc(b / P)}em`
  } : {}, T, c), C = {
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
    button: f(s, 14, 1.75, 0.4, gi),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, gi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return rt(v({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, C), p, {
    clone: !1
    // No need to clone deep
  });
}
const Xc = 0.2, Yc = 0.14, Zc = 0.12;
function le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Xc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Zc})`].join(",");
}
const Jc = ["none", le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Qc = Jc, eu = ["duration", "easing", "delay"], tu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, nu = {
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
function yi(e) {
  return `${Math.round(e)}ms`;
}
function ru(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function ou(e) {
  const t = v({}, tu, e.easing), n = v({}, nu, e.duration);
  return v({
    getAutoHeightDuration: ru,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: s = t.easeInOut,
        delay: l = 0
      } = i;
      return te(i, eu), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof a == "string" ? a : yi(a)} ${s} ${typeof l == "string" ? l : yi(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const iu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, au = iu, su = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function lu(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = te(e, su);
  if (e.vars)
    throw new Error(Dt(18));
  const s = Uc(r), l = Ao(e);
  let u = rt(l, {
    mixins: Pc(l.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Qc.slice(),
    typography: qc(s, i),
    transitions: ou(o),
    zIndex: v({}, au)
  });
  return u = rt(u, a), u = t.reduce((c, m) => rt(c, m), u), u.unstable_sxConfig = v({}, Or, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return ko({
      sx: m,
      theme: this
    });
  }, u;
}
const cu = lu(), Bo = cu;
function $a() {
  const e = va(Bo);
  return e[Sn] || e;
}
function Ue({
  props: e,
  name: t
}) {
  return yc({
    props: e,
    name: t,
    defaultTheme: Bo,
    themeId: Sn
  });
}
const wa = (e) => Yn(e) && e !== "classes", uu = gc({
  themeId: Sn,
  defaultTheme: Bo,
  rootShouldForwardProp: wa
}), he = uu, fu = ["theme"];
function Qp(e) {
  let {
    theme: t
  } = e, n = te(e, fu);
  const r = t[Sn];
  return /* @__PURE__ */ z.jsx(Ec, v({}, n, {
    themeId: r ? Sn : void 0,
    theme: r || t
  }));
}
const du = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, bi = du;
function pu(e) {
  return Ve("MuiSvgIcon", e);
}
He("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const mu = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], hu = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${U(t)}`, `fontSize${U(n)}`]
  };
  return Je(o, pu, r);
}, gu = he("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${U(n.color)}`], t[`fontSize${U(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, a, s, l, u, c, m, p, h, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (l = s.pxToRem) == null ? void 0 : l.call(s, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? m : {
      action: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Sa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = r, h = te(r, mu), g = /* @__PURE__ */ d.isValidElement(o) && o.type === "svg", f = v({}, r, {
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: p,
    hasSvgAsChild: g
  }), C = {};
  c || (C.viewBox = p);
  const w = hu(f);
  return /* @__PURE__ */ z.jsxs(gu, v({
    as: s,
    className: ie(w.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n
  }, C, h, g && o.props, {
    ownerState: f,
    children: [g ? o.props.children : o, m ? /* @__PURE__ */ z.jsx("title", {
      children: m
    }) : null]
  }));
});
Sa.muiName = "SvgIcon";
const xi = Sa;
function Mn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ z.jsx(xi, v({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = xi.muiName, /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(n));
}
var re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o = Symbol.for("react.element"), Lo = Symbol.for("react.portal"), Ar = Symbol.for("react.fragment"), Mr = Symbol.for("react.strict_mode"), Ir = Symbol.for("react.profiler"), Br = Symbol.for("react.provider"), _r = Symbol.for("react.context"), vu = Symbol.for("react.server_context"), Lr = Symbol.for("react.forward_ref"), zr = Symbol.for("react.suspense"), Nr = Symbol.for("react.suspense_list"), Dr = Symbol.for("react.memo"), jr = Symbol.for("react.lazy"), yu = Symbol.for("react.offscreen"), Ta;
Ta = Symbol.for("react.module.reference");
function Qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _o:
        switch (e = e.type, e) {
          case Ar:
          case Ir:
          case Mr:
          case zr:
          case Nr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vu:
              case _r:
              case Lr:
              case jr:
              case Dr:
              case Br:
                return e;
              default:
                return t;
            }
        }
      case Lo:
        return t;
    }
  }
}
re.ContextConsumer = _r;
re.ContextProvider = Br;
re.Element = _o;
re.ForwardRef = Lr;
re.Fragment = Ar;
re.Lazy = jr;
re.Memo = Dr;
re.Portal = Lo;
re.Profiler = Ir;
re.StrictMode = Mr;
re.Suspense = zr;
re.SuspenseList = Nr;
re.isAsyncMode = function() {
  return !1;
};
re.isConcurrentMode = function() {
  return !1;
};
re.isContextConsumer = function(e) {
  return Qe(e) === _r;
};
re.isContextProvider = function(e) {
  return Qe(e) === Br;
};
re.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _o;
};
re.isForwardRef = function(e) {
  return Qe(e) === Lr;
};
re.isFragment = function(e) {
  return Qe(e) === Ar;
};
re.isLazy = function(e) {
  return Qe(e) === jr;
};
re.isMemo = function(e) {
  return Qe(e) === Dr;
};
re.isPortal = function(e) {
  return Qe(e) === Lo;
};
re.isProfiler = function(e) {
  return Qe(e) === Ir;
};
re.isStrictMode = function(e) {
  return Qe(e) === Mr;
};
re.isSuspense = function(e) {
  return Qe(e) === zr;
};
re.isSuspenseList = function(e) {
  return Qe(e) === Nr;
};
re.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ar || e === Ir || e === Mr || e === zr || e === Nr || e === yu || typeof e == "object" && e !== null && (e.$$typeof === jr || e.$$typeof === Dr || e.$$typeof === Br || e.$$typeof === _r || e.$$typeof === Lr || e.$$typeof === Ta || e.getModuleId !== void 0);
};
re.typeOf = Qe;
function so(e, t) {
  return so = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, so(e, t);
}
function Ra(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, so(e, t);
}
const Ci = {
  disabled: !1
}, ir = Ct.createContext(null);
var bu = function(t) {
  return t.scrollTop;
}, hn = "unmounted", _t = "exited", Lt = "entering", Jt = "entered", lo = "exiting", Rt = /* @__PURE__ */ function(e) {
  Ra(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, s = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = _t, i.appearStatus = Lt) : l = Jt : r.unmountOnExit || r.mountOnEnter ? l = hn : l = _t, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === hn ? {
      status: _t
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Lt && a !== Jt && (i = Lt) : (a === Lt || a === Jt) && (i = lo);
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
      if (this.cancelNextCallback(), i === Lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : jn.findDOMNode(this);
          a && bu(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === _t && this.setState({
        status: hn
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [s] : [jn.findDOMNode(this), s], u = l[0], c = l[1], m = this.getTimeouts(), p = s ? m.appear : m.enter;
    if (!o && !a || Ci.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Lt
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: Jt
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : jn.findDOMNode(this);
    if (!i || Ci.disabled) {
      this.safeSetState({
        status: _t
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: lo
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: _t
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : jn.findDOMNode(this), s = o == null && !this.props.addEndListener;
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
    if (o === hn)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = te(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ct.createElement(ir.Provider, {
        value: null
      }, typeof a == "function" ? a(o, s) : Ct.cloneElement(Ct.Children.only(a), s))
    );
  }, t;
}(Ct.Component);
Rt.contextType = ir;
Rt.propTypes = {};
function Zt() {
}
Rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zt,
  onEntering: Zt,
  onEntered: Zt,
  onExit: Zt,
  onExiting: Zt,
  onExited: Zt
};
Rt.UNMOUNTED = hn;
Rt.EXITED = _t;
Rt.ENTERING = Lt;
Rt.ENTERED = Jt;
Rt.EXITING = lo;
const xu = Rt;
function Cu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zo(e, t) {
  var n = function(i) {
    return t && d.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && d.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function $u(e, t) {
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
function zt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function wu(e, t) {
  return zo(e.children, function(n) {
    return d.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: zt(n, "appear", e),
      enter: zt(n, "enter", e),
      exit: zt(n, "exit", e)
    });
  });
}
function Su(e, t, n) {
  var r = zo(e.children), o = $u(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (d.isValidElement(a)) {
      var s = i in t, l = i in r, u = t[i], c = d.isValidElement(u) && !u.props.in;
      l && (!s || c) ? o[i] = d.cloneElement(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: zt(a, "exit", e),
        enter: zt(a, "enter", e)
      }) : !l && s && !c ? o[i] = d.cloneElement(a, {
        in: !1
      }) : l && s && d.isValidElement(u) && (o[i] = d.cloneElement(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: zt(a, "exit", e),
        enter: zt(a, "enter", e)
      }));
    }
  }), o;
}
var Tu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ru = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, No = /* @__PURE__ */ function(e) {
  Ra(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(Cu(i));
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
      children: l ? wu(o, s) : Su(o, a, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = zo(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = v({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = te(o, ["component", "childFactory"]), l = this.state.contextValue, u = Tu(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Ct.createElement(ir.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Ct.createElement(ir.Provider, {
      value: l
    }, /* @__PURE__ */ Ct.createElement(i, s, u));
  }, t;
}(Ct.Component);
No.propTypes = {};
No.defaultProps = Ru;
const Eu = No, Pu = (e) => e.scrollTop;
function $i(e, t) {
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
function Ou(e) {
  return Ve("MuiPaper", e);
}
He("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const ku = ["className", "component", "elevation", "square", "variant"], Au = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Je(i, Ou, o);
}, Mu = he("div", {
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
  return v({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && v({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Me("#fff", bi(t.elevation))}, ${Me("#fff", bi(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Iu = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: a = 1,
    square: s = !1,
    variant: l = "elevation"
  } = r, u = te(r, ku), c = v({}, r, {
    component: i,
    elevation: a,
    square: s,
    variant: l
  }), m = Au(c);
  return /* @__PURE__ */ z.jsx(Mu, v({
    as: i,
    ownerState: c,
    className: ie(m.root, o),
    ref: n
  }, u));
}), Bu = Iu;
function _u(e) {
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
  } = e, [c, m] = d.useState(!1), p = ie(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), h = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = ie(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && m(!0), d.useEffect(() => {
    if (!s && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, s, u]), /* @__PURE__ */ z.jsx("span", {
    className: p,
    style: h,
    children: /* @__PURE__ */ z.jsx("span", {
      className: g
    })
  });
}
const Lu = He("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), qe = Lu, zu = ["center", "classes", "className"];
let Fr = (e) => e, wi, Si, Ti, Ri;
const co = 550, Nu = 80, Du = So(wi || (wi = Fr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), ju = So(Si || (Si = Fr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Fu = So(Ti || (Ti = Fr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Wu = he("span", {
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
}), Vu = he(_u, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ri || (Ri = Fr`
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
`), qe.rippleVisible, Du, co, ({
  theme: e
}) => e.transitions.easing.easeInOut, qe.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, qe.child, qe.childLeaving, ju, co, ({
  theme: e
}) => e.transitions.easing.easeInOut, qe.childPulsate, Fu, ({
  theme: e
}) => e.transitions.easing.easeInOut), Hu = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, s = te(r, zu), [l, u] = d.useState([]), c = d.useRef(0), m = d.useRef(null);
  d.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const p = d.useRef(!1), h = d.useRef(0), g = d.useRef(null), f = d.useRef(null);
  d.useEffect(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const C = d.useCallback((b) => {
    const {
      pulsate: T,
      rippleX: E,
      rippleY: S,
      rippleSize: D,
      cb: B
    } = b;
    u((R) => [...R, /* @__PURE__ */ z.jsx(Vu, {
      classes: {
        ripple: ie(i.ripple, qe.ripple),
        rippleVisible: ie(i.rippleVisible, qe.rippleVisible),
        ripplePulsate: ie(i.ripplePulsate, qe.ripplePulsate),
        child: ie(i.child, qe.child),
        childLeaving: ie(i.childLeaving, qe.childLeaving),
        childPulsate: ie(i.childPulsate, qe.childPulsate)
      },
      timeout: co,
      pulsate: T,
      rippleX: E,
      rippleY: S,
      rippleSize: D
    }, c.current)]), c.current += 1, m.current = B;
  }, [i]), w = d.useCallback((b = {}, T = {}, E = () => {
  }) => {
    const {
      pulsate: S = !1,
      center: D = o || T.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = T;
    if ((b == null ? void 0 : b.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (p.current = !0);
    const R = B ? null : f.current, O = R ? R.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, F, H;
    if (D || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      j = Math.round(O.width / 2), F = Math.round(O.height / 2);
    else {
      const {
        clientX: k,
        clientY: M
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      j = Math.round(k - O.left), F = Math.round(M - O.top);
    }
    if (D)
      H = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), H % 2 === 0 && (H += 1);
    else {
      const k = Math.max(Math.abs((R ? R.clientWidth : 0) - j), j) * 2 + 2, M = Math.max(Math.abs((R ? R.clientHeight : 0) - F), F) * 2 + 2;
      H = Math.sqrt(k ** 2 + M ** 2);
    }
    b != null && b.touches ? g.current === null && (g.current = () => {
      C({
        pulsate: S,
        rippleX: j,
        rippleY: F,
        rippleSize: H,
        cb: E
      });
    }, h.current = setTimeout(() => {
      g.current && (g.current(), g.current = null);
    }, Nu)) : C({
      pulsate: S,
      rippleX: j,
      rippleY: F,
      rippleSize: H,
      cb: E
    });
  }, [o, C]), P = d.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), $ = d.useCallback((b, T) => {
    if (clearTimeout(h.current), (b == null ? void 0 : b.type) === "touchend" && g.current) {
      g.current(), g.current = null, h.current = setTimeout(() => {
        $(b, T);
      });
      return;
    }
    g.current = null, u((E) => E.length > 0 ? E.slice(1) : E), m.current = T;
  }, []);
  return d.useImperativeHandle(n, () => ({
    pulsate: P,
    start: w,
    stop: $
  }), [P, w, $]), /* @__PURE__ */ z.jsx(Wu, v({
    className: ie(qe.root, i.root, a),
    ref: f
  }, s, {
    children: /* @__PURE__ */ z.jsx(Eu, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), Uu = Hu;
function Ku(e) {
  return Ve("MuiButtonBase", e);
}
const Gu = He("MuiButtonBase", ["root", "disabled", "focusVisible"]), qu = Gu, Xu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Yu = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = Je({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Ku, o);
  return n && r && (a.root += ` ${r}`), a;
}, Zu = he("button", {
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
  [`&.${qu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ju = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
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
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: h = "a",
    onBlur: g,
    onClick: f,
    onContextMenu: C,
    onDragLeave: w,
    onFocus: P,
    onFocusVisible: $,
    onKeyDown: b,
    onKeyUp: T,
    onMouseDown: E,
    onMouseLeave: S,
    onMouseUp: D,
    onTouchEnd: B,
    onTouchMove: R,
    onTouchStart: O,
    tabIndex: j = 0,
    TouchRippleProps: F,
    touchRippleRef: H,
    type: k
  } = r, M = te(r, Xu), _ = d.useRef(null), V = d.useRef(null), ne = wt(V, H), {
    isFocusVisibleRef: ce,
    onFocus: ot,
    onBlur: et,
    ref: de
  } = pa(), [G, ye] = d.useState(!1);
  u && G && ye(!1), d.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ye(!0), _.current.focus();
    }
  }), []);
  const [we, oe] = d.useState(!1);
  d.useEffect(() => {
    oe(!0);
  }, []);
  const J = we && !c && !u;
  d.useEffect(() => {
    G && p && !c && we && V.current.pulsate();
  }, [c, p, G, we]);
  function ae(L, Re, st = m) {
    return $t((lt) => (Re && Re(lt), !st && V.current && V.current[L](lt), !0));
  }
  const it = ae("start", E), se = ae("stop", C), gt = ae("stop", w), vt = ae("stop", D), ge = ae("stop", (L) => {
    G && L.preventDefault(), S && S(L);
  }), I = ae("start", O), at = ae("stop", B), K = ae("stop", R), Ae = ae("stop", (L) => {
    et(L), ce.current === !1 && ye(!1), g && g(L);
  }, !1), tt = $t((L) => {
    _.current || (_.current = L.currentTarget), ot(L), ce.current === !0 && (ye(!0), $ && $(L)), P && P(L);
  }), xe = () => {
    const L = _.current;
    return l && l !== "button" && !(L.tagName === "A" && L.href);
  }, Pe = d.useRef(!1), Se = $t((L) => {
    p && !Pe.current && G && V.current && L.key === " " && (Pe.current = !0, V.current.stop(L, () => {
      V.current.start(L);
    })), L.target === L.currentTarget && xe() && L.key === " " && L.preventDefault(), b && b(L), L.target === L.currentTarget && xe() && L.key === "Enter" && !u && (L.preventDefault(), f && f(L));
  }), nt = $t((L) => {
    p && L.key === " " && V.current && G && !L.defaultPrevented && (Pe.current = !1, V.current.stop(L, () => {
      V.current.pulsate(L);
    })), T && T(L), f && L.target === L.currentTarget && xe() && L.key === " " && !L.defaultPrevented && f(L);
  });
  let Oe = l;
  Oe === "button" && (M.href || M.to) && (Oe = h);
  const Te = {};
  Oe === "button" ? (Te.type = k === void 0 ? "button" : k, Te.disabled = u) : (!M.href && !M.to && (Te.role = "button"), u && (Te["aria-disabled"] = u));
  const ke = wt(n, de, _), pe = v({}, r, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: j,
    focusVisible: G
  }), Q = Yu(pe);
  return /* @__PURE__ */ z.jsxs(Zu, v({
    as: Oe,
    className: ie(Q.root, s),
    ownerState: pe,
    onBlur: Ae,
    onClick: f,
    onContextMenu: se,
    onFocus: tt,
    onKeyDown: Se,
    onKeyUp: nt,
    onMouseDown: it,
    onMouseLeave: ge,
    onMouseUp: vt,
    onDragLeave: gt,
    onTouchEnd: at,
    onTouchMove: K,
    onTouchStart: I,
    ref: ke,
    tabIndex: u ? -1 : j,
    type: k
  }, Te, M, {
    children: [a, J ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ z.jsx(Uu, v({
        ref: ne,
        center: i
      }, F))
    ) : null]
  }));
}), Do = Ju;
function Qu(e) {
  return Ve("MuiAlert", e);
}
const ef = He("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), Ei = ef;
function tf(e) {
  return Ve("MuiIconButton", e);
}
const nf = He("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), rf = nf, of = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], af = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${U(r)}`, o && `edge${U(o)}`, `size${U(i)}`]
  };
  return Je(a, tf, t);
}, sf = he(Do, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${U(n.color)}`], n.edge && t[`edge${U(n.edge)}`], t[`size${U(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return v({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && v({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": v({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(r.main, e.palette.action.hoverOpacity)
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
    [`&.${rf.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), lf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
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
  } = r, m = te(r, of), p = v({}, r, {
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: u,
    size: c
  }), h = af(p);
  return /* @__PURE__ */ z.jsx(sf, v({
    className: ie(h.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ownerState: p
  }, m, {
    children: i
  }));
}), cf = lf, uf = Mn(/* @__PURE__ */ z.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), ff = Mn(/* @__PURE__ */ z.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), df = Mn(/* @__PURE__ */ z.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), pf = Mn(/* @__PURE__ */ z.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), mf = Mn(/* @__PURE__ */ z.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), hf = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], gf = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `${t}${U(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return Je(i, Qu, o);
}, vf = he(Bu, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${U(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? io : ao, r = e.palette.mode === "light" ? ao : io, o = t.color || t.severity;
  return v({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, o && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9),
    [`& .${Ei.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[o].light}`,
    [`& .${Ei.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "filled" && v({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${o}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
    color: e.palette.getContrastText(e.palette[o].main)
  }));
}), yf = he("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), bf = he("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), Pi = he("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Oi = {
  success: /* @__PURE__ */ z.jsx(uf, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ z.jsx(ff, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ z.jsx(df, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ z.jsx(pf, {
    fontSize: "inherit"
  })
}, xf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, a, s, l;
  const u = Ue({
    props: t,
    name: "MuiAlert"
  }), {
    action: c,
    children: m,
    className: p,
    closeText: h = "Close",
    color: g,
    components: f = {},
    componentsProps: C = {},
    icon: w,
    iconMapping: P = Oi,
    onClose: $,
    role: b = "alert",
    severity: T = "success",
    slotProps: E = {},
    slots: S = {},
    variant: D = "standard"
  } = u, B = te(u, hf), R = v({}, u, {
    color: g,
    severity: T,
    variant: D
  }), O = gf(R), j = (r = (o = S.closeButton) != null ? o : f.CloseButton) != null ? r : cf, F = (i = (a = S.closeIcon) != null ? a : f.CloseIcon) != null ? i : mf, H = (s = E.closeButton) != null ? s : C.closeButton, k = (l = E.closeIcon) != null ? l : C.closeIcon;
  return /* @__PURE__ */ z.jsxs(vf, v({
    role: b,
    elevation: 0,
    ownerState: R,
    className: ie(O.root, p),
    ref: n
  }, B, {
    children: [w !== !1 ? /* @__PURE__ */ z.jsx(yf, {
      ownerState: R,
      className: O.icon,
      children: w || P[T] || Oi[T]
    }) : null, /* @__PURE__ */ z.jsx(bf, {
      ownerState: R,
      className: O.message,
      children: m
    }), c != null ? /* @__PURE__ */ z.jsx(Pi, {
      ownerState: R,
      className: O.action,
      children: c
    }) : null, c == null && $ ? /* @__PURE__ */ z.jsx(Pi, {
      ownerState: R,
      className: O.action,
      children: /* @__PURE__ */ z.jsx(j, v({
        size: "small",
        "aria-label": h,
        title: h,
        color: "inherit",
        onClick: $
      }, H, {
        children: /* @__PURE__ */ z.jsx(F, v({
          fontSize: "small"
        }, k))
      }))
    }) : null]
  }));
}), em = xf;
function Cf(e) {
  return Ve("MuiTypography", e);
}
He("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const $f = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], wf = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${U(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return Je(s, Cf, a);
}, Sf = he("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${U(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
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
})), ki = {
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
}, Tf = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Rf = (e) => Tf[e] || e, Ef = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiTypography"
  }), o = Rf(r.color), i = ic(v({}, r, {
    color: o
  })), {
    align: a = "inherit",
    className: s,
    component: l,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: m = !1,
    variant: p = "body1",
    variantMapping: h = ki
  } = i, g = te(i, $f), f = v({}, i, {
    align: a,
    color: o,
    className: s,
    component: l,
    gutterBottom: u,
    noWrap: c,
    paragraph: m,
    variant: p,
    variantMapping: h
  }), C = l || (m ? "p" : h[p] || ki[p]) || "span", w = wf(f);
  return /* @__PURE__ */ z.jsx(Sf, v({
    as: C,
    ref: n,
    ownerState: f,
    className: ie(w.root, s)
  }, g));
}), Pf = Ef;
function Of(e) {
  return Ve("MuiAlertTitle", e);
}
He("MuiAlertTitle", ["root"]);
const kf = ["className"], Af = (e) => {
  const {
    classes: t
  } = e;
  return Je({
    root: ["root"]
  }, Of, t);
}, Mf = he(Pf, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), If = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: o
  } = r, i = te(r, kf), a = r, s = Af(a);
  return /* @__PURE__ */ z.jsx(Mf, v({
    gutterBottom: !0,
    component: "div",
    ownerState: a,
    ref: n,
    className: ie(s.root, o)
  }, i));
}), tm = If;
function Bf(e) {
  return typeof e == "string";
}
function gn(e, t, n) {
  return e === void 0 || Bf(e) ? t : v({}, t, {
    ownerState: v({}, t.ownerState, n)
  });
}
const _f = {
  disableDefaultClasses: !1
}, Lf = /* @__PURE__ */ d.createContext(_f);
function zf(e) {
  const {
    disableDefaultClasses: t
  } = d.useContext(Lf);
  return (n) => t ? "" : e(n);
}
function Jn(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Nf(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ai(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Df(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const h = ie(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = v({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = v({}, n, o, r);
    return h.length > 0 && (f.className = h), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Jn(v({}, o, r)), s = Ai(r), l = Ai(o), u = t(a), c = ie(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), m = v({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = v({}, u, n, l, s);
  return c.length > 0 && (p.className = c), Object.keys(m).length > 0 && (p.style = m), {
    props: p,
    internalRef: u.ref
  };
}
const jf = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ff(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = te(e, jf), s = i ? {} : Nf(r, o), {
    props: l,
    internalRef: u
  } = Df(v({}, a, {
    externalSlotProps: s
  })), c = wt(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return gn(n, v({}, l, {
    ref: c
  }), o);
}
const Wf = /* @__PURE__ */ d.createContext(void 0);
function Vf() {
  return d.useContext(Wf);
}
function nm(e = {}) {
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
  } = e, c = Vf();
  let m, p, h, g, f;
  if (c) {
    var C, w, P;
    m = void 0, p = (C = c.disabled) != null ? C : !1, h = (w = c.error) != null ? w : !1, g = (P = c.required) != null ? P : !1, f = c.value;
  } else
    m = t, p = n, h = r, g = s, f = l;
  const {
    current: $
  } = d.useRef(f != null), b = d.useCallback((k) => {
  }, []), T = d.useRef(null), E = wt(T, u, b), [S, D] = d.useState(!1);
  d.useEffect(() => {
    !c && p && S && (D(!1), o == null || o());
  }, [c, p, S, o]);
  const B = (k) => (M) => {
    var _;
    if (c != null && c.disabled) {
      M.stopPropagation();
      return;
    }
    if ((_ = k.onFocus) == null || _.call(k, M), c && c.onFocus) {
      var V;
      c == null || (V = c.onFocus) == null || V.call(c);
    } else
      D(!0);
  }, R = (k) => (M) => {
    var _;
    (_ = k.onBlur) == null || _.call(k, M), c && c.onBlur ? c.onBlur() : D(!1);
  }, O = (k) => (M, ..._) => {
    var V, ne;
    if (!$ && (M.target || T.current) == null)
      throw new Error(Dt(17));
    c == null || (V = c.onChange) == null || V.call(c, M), (ne = k.onChange) == null || ne.call(k, M, ..._);
  }, j = (k) => (M) => {
    var _;
    T.current && M.currentTarget === M.target && T.current.focus(), (_ = k.onClick) == null || _.call(k, M);
  };
  return {
    disabled: p,
    error: h,
    focused: S,
    formControlContext: c,
    getInputProps: (k = {}) => {
      const _ = v({}, {
        onBlur: o,
        onChange: i,
        onFocus: a
      }, Jn(k)), V = v({}, _, {
        onBlur: R(_),
        onChange: O(_),
        onFocus: B(_)
      });
      return v({}, V, {
        "aria-invalid": h || void 0,
        defaultValue: m,
        value: f,
        required: g,
        disabled: p
      }, k, {
        ref: E
      }, V);
    },
    getRootProps: (k = {}) => {
      const M = Jn(e, ["onBlur", "onChange", "onFocus"]), _ = v({}, M, Jn(k));
      return v({}, k, _, {
        onClick: j(_)
      });
    },
    inputRef: E,
    required: g,
    value: f
  };
}
var Ie = "top", Ye = "bottom", Ze = "right", Be = "left", jo = "auto", In = [Ie, Ye, Ze, Be], nn = "start", Rn = "end", Hf = "clippingParents", Ea = "viewport", pn = "popper", Uf = "reference", Mi = /* @__PURE__ */ In.reduce(function(e, t) {
  return e.concat([t + "-" + nn, t + "-" + Rn]);
}, []), Pa = /* @__PURE__ */ [].concat(In, [jo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + nn, t + "-" + Rn]);
}, []), Kf = "beforeRead", Gf = "read", qf = "afterRead", Xf = "beforeMain", Yf = "main", Zf = "afterMain", Jf = "beforeWrite", Qf = "write", ed = "afterWrite", td = [Kf, Gf, qf, Xf, Yf, Zf, Jf, Qf, ed];
function ht(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Fe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ft(e) {
  var t = Fe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xe(e) {
  var t = Fe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Fo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Fe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function nd(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Xe(i) || !ht(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function rd(e) {
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
      !Xe(o) || !ht(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const od = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nd,
  effect: rd,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var Nt = Math.max, ar = Math.min, rn = Math.round;
function uo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Oa() {
  return !/^((?!chrome|android).)*safari/i.test(uo());
}
function on(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Xe(e) && (o = e.offsetWidth > 0 && rn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && rn(r.height) / e.offsetHeight || 1);
  var a = Ft(e) ? Fe(e) : window, s = a.visualViewport, l = !Oa() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, m = r.width / o, p = r.height / i;
  return {
    width: m,
    height: p,
    top: c,
    right: u + m,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function Wo(e) {
  var t = on(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function ka(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Fo(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tt(e) {
  return Fe(e).getComputedStyle(e);
}
function id(e) {
  return ["table", "td", "th"].indexOf(ht(e)) >= 0;
}
function kt(e) {
  return ((Ft(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Wr(e) {
  return ht(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Fo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    kt(e)
  );
}
function Ii(e) {
  return !Xe(e) || // https://github.com/popperjs/popper-core/issues/837
  Tt(e).position === "fixed" ? null : e.offsetParent;
}
function ad(e) {
  var t = /firefox/i.test(uo()), n = /Trident/i.test(uo());
  if (n && Xe(e)) {
    var r = Tt(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Wr(e);
  for (Fo(o) && (o = o.host); Xe(o) && ["html", "body"].indexOf(ht(o)) < 0; ) {
    var i = Tt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Bn(e) {
  for (var t = Fe(e), n = Ii(e); n && id(n) && Tt(n).position === "static"; )
    n = Ii(n);
  return n && (ht(n) === "html" || ht(n) === "body" && Tt(n).position === "static") ? t : n || ad(e) || t;
}
function Vo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yn(e, t, n) {
  return Nt(e, ar(t, n));
}
function sd(e, t, n) {
  var r = yn(e, t, n);
  return r > n ? n : r;
}
function Aa() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ma(e) {
  return Object.assign({}, Aa(), e);
}
function Ia(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var ld = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ma(typeof t != "number" ? t : Ia(t, In));
};
function cd(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = mt(n.placement), l = Vo(s), u = [Be, Ze].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var m = ld(o.padding, n), p = Wo(i), h = l === "y" ? Ie : Be, g = l === "y" ? Ye : Ze, f = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], C = a[l] - n.rects.reference[l], w = Bn(i), P = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, $ = f / 2 - C / 2, b = m[h], T = P - p[c] - m[g], E = P / 2 - p[c] / 2 + $, S = yn(b, E, T), D = l;
    n.modifiersData[r] = (t = {}, t[D] = S, t.centerOffset = S - E, t);
  }
}
function ud(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ka(t.elements.popper, o) && (t.elements.arrow = o));
}
const fd = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: cd,
  effect: ud,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function an(e) {
  return e.split("-")[1];
}
var dd = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pd(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: rn(n * o) / o || 0,
    y: rn(r * o) / o || 0
  };
}
function Bi(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, m = e.isFixed, p = a.x, h = p === void 0 ? 0 : p, g = a.y, f = g === void 0 ? 0 : g, C = typeof c == "function" ? c({
    x: h,
    y: f
  }) : {
    x: h,
    y: f
  };
  h = C.x, f = C.y;
  var w = a.hasOwnProperty("x"), P = a.hasOwnProperty("y"), $ = Be, b = Ie, T = window;
  if (u) {
    var E = Bn(n), S = "clientHeight", D = "clientWidth";
    if (E === Fe(n) && (E = kt(n), Tt(E).position !== "static" && s === "absolute" && (S = "scrollHeight", D = "scrollWidth")), E = E, o === Ie || (o === Be || o === Ze) && i === Rn) {
      b = Ye;
      var B = m && E === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[S]
      );
      f -= B - r.height, f *= l ? 1 : -1;
    }
    if (o === Be || (o === Ie || o === Ye) && i === Rn) {
      $ = Ze;
      var R = m && E === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[D]
      );
      h -= R - r.width, h *= l ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: s
  }, u && dd), j = c === !0 ? pd({
    x: h,
    y: f
  }, Fe(n)) : {
    x: h,
    y: f
  };
  if (h = j.x, f = j.y, l) {
    var F;
    return Object.assign({}, O, (F = {}, F[b] = P ? "0" : "", F[$] = w ? "0" : "", F.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + f + "px)" : "translate3d(" + h + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, O, (t = {}, t[b] = P ? f + "px" : "", t[$] = w ? h + "px" : "", t.transform = "", t));
}
function md(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: mt(t.placement),
    variation: an(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bi(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bi(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: md,
  data: {}
};
var Wn = {
  passive: !0
};
function gd(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = Fe(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Wn);
  }), s && l.addEventListener("resize", n.update, Wn), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Wn);
    }), s && l.removeEventListener("resize", n.update, Wn);
  };
}
const vd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gd,
  data: {}
};
var yd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return yd[t];
  });
}
var bd = {
  start: "end",
  end: "start"
};
function _i(e) {
  return e.replace(/start|end/g, function(t) {
    return bd[t];
  });
}
function Ho(e) {
  var t = Fe(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Uo(e) {
  return on(kt(e)).left + Ho(e).scrollLeft;
}
function xd(e, t) {
  var n = Fe(e), r = kt(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = Oa();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Uo(e),
    y: l
  };
}
function Cd(e) {
  var t, n = kt(e), r = Ho(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Nt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Nt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Uo(e), l = -r.scrollTop;
  return Tt(o || n).direction === "rtl" && (s += Nt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Ko(e) {
  var t = Tt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ba(e) {
  return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : Xe(e) && Ko(e) ? e : Ba(Wr(e));
}
function bn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ba(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Fe(r), a = o ? [i].concat(i.visualViewport || [], Ko(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(bn(Wr(a)))
  );
}
function fo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function $d(e, t) {
  var n = on(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Li(e, t, n) {
  return t === Ea ? fo(xd(e, n)) : Ft(t) ? $d(t, n) : fo(Cd(kt(e)));
}
function wd(e) {
  var t = bn(Wr(e)), n = ["absolute", "fixed"].indexOf(Tt(e).position) >= 0, r = n && Xe(e) ? Bn(e) : e;
  return Ft(r) ? t.filter(function(o) {
    return Ft(o) && ka(o, r) && ht(o) !== "body";
  }) : [];
}
function Sd(e, t, n, r) {
  var o = t === "clippingParents" ? wd(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = Li(e, u, r);
    return l.top = Nt(c.top, l.top), l.right = ar(c.right, l.right), l.bottom = ar(c.bottom, l.bottom), l.left = Nt(c.left, l.left), l;
  }, Li(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function _a(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? mt(r) : null, i = r ? an(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Ie:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ye:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ze:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Be:
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
  var u = o ? Vo(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case nn:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Rn:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function En(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? Hf : s, u = n.rootBoundary, c = u === void 0 ? Ea : u, m = n.elementContext, p = m === void 0 ? pn : m, h = n.altBoundary, g = h === void 0 ? !1 : h, f = n.padding, C = f === void 0 ? 0 : f, w = Ma(typeof C != "number" ? C : Ia(C, In)), P = p === pn ? Uf : pn, $ = e.rects.popper, b = e.elements[g ? P : p], T = Sd(Ft(b) ? b : b.contextElement || kt(e.elements.popper), l, c, a), E = on(e.elements.reference), S = _a({
    reference: E,
    element: $,
    strategy: "absolute",
    placement: o
  }), D = fo(Object.assign({}, $, S)), B = p === pn ? D : E, R = {
    top: T.top - B.top + w.top,
    bottom: B.bottom - T.bottom + w.bottom,
    left: T.left - B.left + w.left,
    right: B.right - T.right + w.right
  }, O = e.modifiersData.offset;
  if (p === pn && O) {
    var j = O[o];
    Object.keys(R).forEach(function(F) {
      var H = [Ze, Ye].indexOf(F) >= 0 ? 1 : -1, k = [Ie, Ye].indexOf(F) >= 0 ? "y" : "x";
      R[F] += j[k] * H;
    });
  }
  return R;
}
function Td(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Pa : l, c = an(r), m = c ? s ? Mi : Mi.filter(function(g) {
    return an(g) === c;
  }) : In, p = m.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  p.length === 0 && (p = m);
  var h = p.reduce(function(g, f) {
    return g[f] = En(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[mt(f)], g;
  }, {});
  return Object.keys(h).sort(function(g, f) {
    return h[g] - h[f];
  });
}
function Rd(e) {
  if (mt(e) === jo)
    return [];
  var t = Qn(e);
  return [_i(e), t, _i(t)];
}
function Ed(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, m = n.rootBoundary, p = n.altBoundary, h = n.flipVariations, g = h === void 0 ? !0 : h, f = n.allowedAutoPlacements, C = t.options.placement, w = mt(C), P = w === C, $ = l || (P || !g ? [Qn(C)] : Rd(C)), b = [C].concat($).reduce(function(G, ye) {
      return G.concat(mt(ye) === jo ? Td(t, {
        placement: ye,
        boundary: c,
        rootBoundary: m,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: f
      }) : ye);
    }, []), T = t.rects.reference, E = t.rects.popper, S = /* @__PURE__ */ new Map(), D = !0, B = b[0], R = 0; R < b.length; R++) {
      var O = b[R], j = mt(O), F = an(O) === nn, H = [Ie, Ye].indexOf(j) >= 0, k = H ? "width" : "height", M = En(t, {
        placement: O,
        boundary: c,
        rootBoundary: m,
        altBoundary: p,
        padding: u
      }), _ = H ? F ? Ze : Be : F ? Ye : Ie;
      T[k] > E[k] && (_ = Qn(_));
      var V = Qn(_), ne = [];
      if (i && ne.push(M[j] <= 0), s && ne.push(M[_] <= 0, M[V] <= 0), ne.every(function(G) {
        return G;
      })) {
        B = O, D = !1;
        break;
      }
      S.set(O, ne);
    }
    if (D)
      for (var ce = g ? 3 : 1, ot = function(ye) {
        var we = b.find(function(oe) {
          var J = S.get(oe);
          if (J)
            return J.slice(0, ye).every(function(ae) {
              return ae;
            });
        });
        if (we)
          return B = we, "break";
      }, et = ce; et > 0; et--) {
        var de = ot(et);
        if (de === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const Pd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ed,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function zi(e, t, n) {
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
function Ni(e) {
  return [Ie, Ze, Ye, Be].some(function(t) {
    return e[t] >= 0;
  });
}
function Od(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = En(t, {
    elementContext: "reference"
  }), s = En(t, {
    altBoundary: !0
  }), l = zi(a, r), u = zi(s, o, i), c = Ni(l), m = Ni(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": m
  });
}
const kd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Od
};
function Ad(e, t, n) {
  var r = mt(e), o = [Be, Ie].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Be, Ze].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function Md(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Pa.reduce(function(c, m) {
    return c[m] = Ad(m, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Id = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Md
};
function Bd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = _a({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const _d = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Bd,
  data: {}
};
function Ld(e) {
  return e === "x" ? "y" : "x";
}
function zd(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, m = n.padding, p = n.tether, h = p === void 0 ? !0 : p, g = n.tetherOffset, f = g === void 0 ? 0 : g, C = En(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: c
  }), w = mt(t.placement), P = an(t.placement), $ = !P, b = Vo(w), T = Ld(b), E = t.modifiersData.popperOffsets, S = t.rects.reference, D = t.rects.popper, B = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, R = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var F, H = b === "y" ? Ie : Be, k = b === "y" ? Ye : Ze, M = b === "y" ? "height" : "width", _ = E[b], V = _ + C[H], ne = _ - C[k], ce = h ? -D[M] / 2 : 0, ot = P === nn ? S[M] : D[M], et = P === nn ? -D[M] : -S[M], de = t.elements.arrow, G = h && de ? Wo(de) : {
        width: 0,
        height: 0
      }, ye = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Aa(), we = ye[H], oe = ye[k], J = yn(0, S[M], G[M]), ae = $ ? S[M] / 2 - ce - J - we - R.mainAxis : ot - J - we - R.mainAxis, it = $ ? -S[M] / 2 + ce + J + oe + R.mainAxis : et + J + oe + R.mainAxis, se = t.elements.arrow && Bn(t.elements.arrow), gt = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, vt = (F = O == null ? void 0 : O[b]) != null ? F : 0, ge = _ + ae - vt - gt, I = _ + it - vt, at = yn(h ? ar(V, ge) : V, _, h ? Nt(ne, I) : ne);
      E[b] = at, j[b] = at - _;
    }
    if (s) {
      var K, Ae = b === "x" ? Ie : Be, tt = b === "x" ? Ye : Ze, xe = E[T], Pe = T === "y" ? "height" : "width", Se = xe + C[Ae], nt = xe - C[tt], Oe = [Ie, Be].indexOf(w) !== -1, Te = (K = O == null ? void 0 : O[T]) != null ? K : 0, ke = Oe ? Se : xe - S[Pe] - D[Pe] - Te + R.altAxis, pe = Oe ? xe + S[Pe] + D[Pe] - Te - R.altAxis : nt, Q = h && Oe ? sd(ke, xe, pe) : yn(h ? ke : Se, xe, h ? pe : nt);
      E[T] = Q, j[T] = Q - xe;
    }
    t.modifiersData[r] = j;
  }
}
const Nd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zd,
  requiresIfExists: ["offset"]
};
function Dd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function jd(e) {
  return e === Fe(e) || !Xe(e) ? Ho(e) : Dd(e);
}
function Fd(e) {
  var t = e.getBoundingClientRect(), n = rn(t.width) / e.offsetWidth || 1, r = rn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Wd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Xe(t), o = Xe(t) && Fd(t), i = kt(t), a = on(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ht(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ko(i)) && (s = jd(t)), Xe(t) ? (l = on(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Uo(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Vd(e) {
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
function Hd(e) {
  var t = Vd(e);
  return td.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Ud(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Kd(e) {
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
var Di = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ji() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Gd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Di : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Di, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], p = !1, h = {
      state: c,
      setOptions: function(w) {
        var P = typeof w == "function" ? w(c.options) : w;
        f(), c.options = Object.assign({}, i, c.options, P), c.scrollParents = {
          reference: Ft(s) ? bn(s) : s.contextElement ? bn(s.contextElement) : [],
          popper: bn(l)
        };
        var $ = Hd(Kd([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = $.filter(function(b) {
          return b.enabled;
        }), g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var w = c.elements, P = w.reference, $ = w.popper;
          if (ji(P, $)) {
            c.rects = {
              reference: Wd(P, Bn($), c.options.strategy === "fixed"),
              popper: Wo($)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var b = 0; b < c.orderedModifiers.length; b++) {
              if (c.reset === !0) {
                c.reset = !1, b = -1;
                continue;
              }
              var T = c.orderedModifiers[b], E = T.fn, S = T.options, D = S === void 0 ? {} : S, B = T.name;
              typeof E == "function" && (c = E({
                state: c,
                options: D,
                name: B,
                instance: h
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ud(function() {
        return new Promise(function(C) {
          h.forceUpdate(), C(c);
        });
      }),
      destroy: function() {
        f(), p = !0;
      }
    };
    if (!ji(s, l))
      return h;
    h.setOptions(u).then(function(C) {
      !p && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function g() {
      c.orderedModifiers.forEach(function(C) {
        var w = C.name, P = C.options, $ = P === void 0 ? {} : P, b = C.effect;
        if (typeof b == "function") {
          var T = b({
            state: c,
            name: w,
            instance: h,
            options: $
          }), E = function() {
          };
          m.push(T || E);
        }
      });
    }
    function f() {
      m.forEach(function(C) {
        return C();
      }), m = [];
    }
    return h;
  };
}
var qd = [vd, _d, hd, od, Id, Pd, Nd, fd, kd], Xd = /* @__PURE__ */ Gd({
  defaultModifiers: qd
});
function Yd(e) {
  return typeof e == "function" ? e() : e;
}
const Zd = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = d.useState(null), l = wt(/* @__PURE__ */ d.isValidElement(r) ? r.ref : null, n);
  if (wn(() => {
    i || s(Yd(o) || document.body);
  }, [o, i]), wn(() => {
    if (a && !i)
      return tr(n, a), () => {
        tr(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ d.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ d.cloneElement(r, u);
    }
    return /* @__PURE__ */ z.jsx(d.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ z.jsx(d.Fragment, {
    children: a && /* @__PURE__ */ Da.createPortal(r, a)
  });
});
function Jd(e) {
  return Ve("MuiPopper", e);
}
He("MuiPopper", ["root"]);
const Qd = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], ep = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function tp(e, t) {
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
function po(e) {
  return typeof e == "function" ? e() : e;
}
function np(e) {
  return e.nodeType !== void 0;
}
const rp = () => Je({
  root: ["root"]
}, zf(Jd)), op = {}, ip = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: s,
    modifiers: l,
    open: u,
    placement: c,
    popperOptions: m,
    popperRef: p,
    slotProps: h = {},
    slots: g = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, C = te(t, Qd), w = d.useRef(null), P = wt(w, n), $ = d.useRef(null), b = wt($, p), T = d.useRef(b);
  wn(() => {
    T.current = b;
  }, [b]), d.useImperativeHandle(p, () => $.current, []);
  const E = tp(c, a), [S, D] = d.useState(E), [B, R] = d.useState(po(o));
  d.useEffect(() => {
    $.current && $.current.forceUpdate();
  }), d.useEffect(() => {
    o && R(po(o));
  }, [o]), wn(() => {
    if (!B || !u)
      return;
    const k = (V) => {
      D(V.placement);
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
    l != null && (M = M.concat(l)), m && m.modifiers != null && (M = M.concat(m.modifiers));
    const _ = Xd(B, w.current, v({
      placement: E
    }, m, {
      modifiers: M
    }));
    return T.current(_), () => {
      _.destroy(), T.current(null);
    };
  }, [B, s, l, u, m, E]);
  const O = {
    placement: S
  };
  f !== null && (O.TransitionProps = f);
  const j = rp(), F = (r = g.root) != null ? r : "div", H = Ff({
    elementType: F,
    externalSlotProps: h.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: j.root
  });
  return /* @__PURE__ */ z.jsx(F, v({}, H, {
    children: typeof i == "function" ? i(O) : i
  }));
}), ap = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: s = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: c,
    placement: m = "bottom",
    popperOptions: p = op,
    popperRef: h,
    style: g,
    transition: f = !1,
    slotProps: C = {},
    slots: w = {}
  } = t, P = te(t, ep), [$, b] = d.useState(!0), T = () => {
    b(!1);
  }, E = () => {
    b(!0);
  };
  if (!l && !c && (!f || $))
    return null;
  let S;
  if (i)
    S = i;
  else if (r) {
    const R = po(r);
    S = R && np(R) ? ei(R).body : ei(null).body;
  }
  const D = !c && l && (!f || $) ? "none" : void 0, B = f ? {
    in: c,
    onEnter: T,
    onExited: E
  } : void 0;
  return /* @__PURE__ */ z.jsx(Zd, {
    disablePortal: s,
    container: S,
    children: /* @__PURE__ */ z.jsx(ip, v({
      anchorEl: r,
      direction: a,
      disablePortal: s,
      modifiers: u,
      ref: n,
      open: f ? !$ : c,
      placement: m,
      popperOptions: p,
      popperRef: h,
      slotProps: C,
      slots: w
    }, P, {
      style: v({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: D
      }, g),
      TransitionProps: B,
      children: o
    }))
  });
});
function Fi(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function sp(e = {}) {
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
    n && (c = c.toLowerCase()), t && (c = Fi(c));
    const m = c ? s.filter((p) => {
      let h = (i || u)(p);
      return n && (h = h.toLowerCase()), t && (h = Fi(h)), o === "start" ? h.indexOf(c) === 0 : h.indexOf(c) > -1;
    }) : s;
    return typeof r == "number" ? m.slice(0, r) : m;
  };
}
function Yr(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const lp = sp(), Wi = 5, cp = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function rm(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = cp,
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
    disableClearable: m = !1,
    disableCloseOnSelect: p = !1,
    disabled: h,
    disabledItemsFocusable: g = !1,
    disableListWrap: f = !1,
    filterOptions: C = lp,
    filterSelectedOptions: w = !1,
    freeSolo: P = !1,
    getOptionDisabled: $,
    getOptionLabel: b = (x) => {
      var y;
      return (y = x.label) != null ? y : x;
    },
    groupBy: T,
    handleHomeEndKeys: E = !e.freeSolo,
    id: S,
    includeInputInList: D = !1,
    inputValue: B,
    isOptionEqualToValue: R = (x, y) => x === y,
    multiple: O = !1,
    onChange: j,
    onClose: F,
    onHighlightChange: H,
    onInputChange: k,
    onOpen: M,
    open: _,
    openOnFocus: V = !1,
    options: ne,
    readOnly: ce = !1,
    selectOnFocus: ot = !e.freeSolo,
    value: et
  } = e, de = da(S);
  let G = b;
  G = (x) => {
    const y = b(x);
    return typeof y != "string" ? String(y) : y;
  };
  const ye = d.useRef(!1), we = d.useRef(!0), oe = d.useRef(null), J = d.useRef(null), [ae, it] = d.useState(null), [se, gt] = d.useState(-1), vt = o ? 0 : -1, ge = d.useRef(vt), [I, at] = Xn({
    controlled: et,
    default: c,
    name: u
  }), [K, Ae] = Xn({
    controlled: B,
    default: "",
    name: u,
    state: "inputValue"
  }), [tt, xe] = d.useState(!1), Pe = d.useCallback((x, y) => {
    if (!(O ? I.length < y.length : y !== null) && !s)
      return;
    let N;
    if (O)
      N = "";
    else if (y == null)
      N = "";
    else {
      const Y = G(y);
      N = typeof Y == "string" ? Y : "";
    }
    K !== N && (Ae(N), k && k(x, N, "reset"));
  }, [G, K, O, k, Ae, s, I]), [Se, nt] = Xn({
    controlled: _,
    default: !1,
    name: u,
    state: "open"
  }), [Oe, Te] = d.useState(!0), ke = !O && I != null && K === G(I), pe = Se && !ce, Q = pe ? C(
    ne.filter((x) => !(w && (O ? I : [I]).some((y) => y !== null && R(x, y)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: ke && Oe ? "" : K,
      getOptionLabel: G
    }
  ) : [], L = qs({
    filteredOptions: Q,
    value: I,
    inputValue: K
  });
  d.useEffect(() => {
    const x = I !== L.value;
    tt && !x || P && !x || Pe(null, I);
  }, [I, Pe, tt, L.value, P]);
  const Re = Se && Q.length > 0 && !ce, st = $t((x) => {
    x === -1 ? oe.current.focus() : ae.querySelector(`[data-tag-index="${x}"]`).focus();
  });
  d.useEffect(() => {
    O && se > I.length - 1 && (gt(-1), st(-1));
  }, [I, O, se, st]);
  function lt(x, y) {
    if (!J.current || x < 0 || x >= Q.length)
      return -1;
    let A = x;
    for (; ; ) {
      const N = J.current.querySelector(`[data-option-index="${A}"]`), Y = g ? !1 : !N || N.disabled || N.getAttribute("aria-disabled") === "true";
      if (N && N.hasAttribute("tabindex") && !Y)
        return A;
      if (y === "next" ? A = (A + 1) % Q.length : A = (A - 1 + Q.length) % Q.length, A === x)
        return -1;
    }
  }
  const Le = $t(({
    event: x,
    index: y,
    reason: A = "auto"
  }) => {
    if (ge.current = y, y === -1 ? oe.current.removeAttribute("aria-activedescendant") : oe.current.setAttribute("aria-activedescendant", `${de}-option-${y}`), H && H(x, y === -1 ? null : Q[y], A), !J.current)
      return;
    const N = J.current.querySelector(`[role="option"].${n}-focused`);
    N && (N.classList.remove(`${n}-focused`), N.classList.remove(`${n}-focusVisible`));
    let Y = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (Y = J.current.parentElement.querySelector('[role="listbox"]')), !Y)
      return;
    if (y === -1) {
      Y.scrollTop = 0;
      return;
    }
    const be = J.current.querySelector(`[data-option-index="${y}"]`);
    if (be && (be.classList.add(`${n}-focused`), A === "keyboard" && be.classList.add(`${n}-focusVisible`), Y.scrollHeight > Y.clientHeight && A !== "mouse" && A !== "touch")) {
      const me = be, Ge = Y.clientHeight + Y.scrollTop, W = me.offsetTop + me.offsetHeight;
      W > Ge ? Y.scrollTop = W - Y.clientHeight : me.offsetTop - me.offsetHeight * (T ? 1.3 : 0) < Y.scrollTop && (Y.scrollTop = me.offsetTop - me.offsetHeight * (T ? 1.3 : 0));
    }
  }), Ke = $t(({
    event: x,
    diff: y,
    direction: A = "next",
    reason: N = "auto"
  }) => {
    if (!pe)
      return;
    const be = lt((() => {
      const me = Q.length - 1;
      if (y === "reset")
        return vt;
      if (y === "start")
        return 0;
      if (y === "end")
        return me;
      const Ge = ge.current + y;
      return Ge < 0 ? Ge === -1 && D ? -1 : f && ge.current !== -1 || Math.abs(y) > 1 ? 0 : me : Ge > me ? Ge === me + 1 && D ? -1 : f || Math.abs(y) > 1 ? me : 0 : Ge;
    })(), A);
    if (Le({
      index: be,
      reason: N,
      event: x
    }), r && y !== "reset")
      if (be === -1)
        oe.current.value = K;
      else {
        const me = G(Q[be]);
        oe.current.value = me, me.toLowerCase().indexOf(K.toLowerCase()) === 0 && K.length > 0 && oe.current.setSelectionRange(K.length, me.length);
      }
  }), Wt = () => {
    const x = (y, A) => {
      const N = y ? G(y) : "", Y = A ? G(A) : "";
      return N === Y;
    };
    if (ge.current !== -1 && L.filteredOptions && L.filteredOptions.length !== Q.length && L.inputValue === K && (O ? I.length === L.value.length && L.value.every((y, A) => G(I[A]) === G(y)) : x(L.value, I))) {
      const y = L.filteredOptions[ge.current];
      if (y && Q.some((N) => G(N) === G(y)))
        return !0;
    }
    return !1;
  }, At = d.useCallback(() => {
    if (!pe || Wt())
      return;
    const x = O ? I[0] : I;
    if (Q.length === 0 || x == null) {
      Ke({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (x != null) {
        const y = Q[ge.current];
        if (O && y && Yr(I, (N) => R(y, N)) !== -1)
          return;
        const A = Yr(Q, (N) => R(N, x));
        A === -1 ? Ke({
          diff: "reset"
        }) : Le({
          index: A
        });
        return;
      }
      if (ge.current >= Q.length - 1) {
        Le({
          index: Q.length - 1
        });
        return;
      }
      Le({
        index: ge.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Q.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    O ? !1 : I,
    w,
    Ke,
    Le,
    pe,
    K,
    O
  ]), _n = $t((x) => {
    tr(J, x), x && At();
  });
  d.useEffect(() => {
    At();
  }, [At]);
  const ct = (x) => {
    Se || (nt(!0), Te(!0), M && M(x));
  }, Mt = (x, y) => {
    Se && (nt(!1), F && F(x, y));
  }, Et = (x, y, A, N) => {
    if (O) {
      if (I.length === y.length && I.every((Y, be) => Y === y[be]))
        return;
    } else if (I === y)
      return;
    j && j(x, y, A, N), at(y);
  }, Vt = d.useRef(!1), Pt = (x, y, A = "selectOption", N = "options") => {
    let Y = A, be = y;
    if (O) {
      be = Array.isArray(I) ? I.slice() : [];
      const me = Yr(be, (Ge) => R(y, Ge));
      me === -1 ? be.push(y) : N !== "freeSolo" && (be.splice(me, 1), Y = "removeOption");
    }
    Pe(x, be), Et(x, be, Y, {
      option: y
    }), !p && (!x || !x.ctrlKey && !x.metaKey) && Mt(x, Y), (a === !0 || a === "touch" && Vt.current || a === "mouse" && !Vt.current) && oe.current.blur();
  };
  function Ln(x, y) {
    if (x === -1)
      return -1;
    let A = x;
    for (; ; ) {
      if (y === "next" && A === I.length || y === "previous" && A === -1)
        return -1;
      const N = ae.querySelector(`[data-tag-index="${A}"]`);
      if (!N || !N.hasAttribute("tabindex") || N.disabled || N.getAttribute("aria-disabled") === "true")
        A += y === "next" ? 1 : -1;
      else
        return A;
    }
  }
  const ln = (x, y) => {
    if (!O)
      return;
    K === "" && Mt(x, "toggleInput");
    let A = se;
    se === -1 ? K === "" && y === "previous" && (A = I.length - 1) : (A += y === "next" ? 1 : -1, A < 0 && (A = 0), A === I.length && (A = -1)), A = Ln(A, y), gt(A), st(A);
  }, cn = (x) => {
    ye.current = !0, Ae(""), k && k(x, "", "clear"), Et(x, O ? [] : null, "clear");
  }, zn = (x) => (y) => {
    if (x.onKeyDown && x.onKeyDown(y), !y.defaultMuiPrevented && (se !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(y.key) === -1 && (gt(-1), st(-1)), y.which !== 229))
      switch (y.key) {
        case "Home":
          pe && E && (y.preventDefault(), Ke({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: y
          }));
          break;
        case "End":
          pe && E && (y.preventDefault(), Ke({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: y
          }));
          break;
        case "PageUp":
          y.preventDefault(), Ke({
            diff: -Wi,
            direction: "previous",
            reason: "keyboard",
            event: y
          }), ct(y);
          break;
        case "PageDown":
          y.preventDefault(), Ke({
            diff: Wi,
            direction: "next",
            reason: "keyboard",
            event: y
          }), ct(y);
          break;
        case "ArrowDown":
          y.preventDefault(), Ke({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: y
          }), ct(y);
          break;
        case "ArrowUp":
          y.preventDefault(), Ke({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: y
          }), ct(y);
          break;
        case "ArrowLeft":
          ln(y, "previous");
          break;
        case "ArrowRight":
          ln(y, "next");
          break;
        case "Enter":
          if (ge.current !== -1 && pe) {
            const A = Q[ge.current], N = $ ? $(A) : !1;
            if (y.preventDefault(), N)
              return;
            Pt(y, A, "selectOption"), r && oe.current.setSelectionRange(oe.current.value.length, oe.current.value.length);
          } else
            P && K !== "" && ke === !1 && (O && y.preventDefault(), Pt(y, K, "createOption", "freeSolo"));
          break;
        case "Escape":
          pe ? (y.preventDefault(), y.stopPropagation(), Mt(y, "escape")) : l && (K !== "" || O && I.length > 0) && (y.preventDefault(), y.stopPropagation(), cn(y));
          break;
        case "Backspace":
          if (O && !ce && K === "" && I.length > 0) {
            const A = se === -1 ? I.length - 1 : se, N = I.slice();
            N.splice(A, 1), Et(y, N, "removeOption", {
              option: I[A]
            });
          }
          break;
        case "Delete":
          if (O && !ce && K === "" && I.length > 0 && se !== -1) {
            const A = se, N = I.slice();
            N.splice(A, 1), Et(y, N, "removeOption", {
              option: I[A]
            });
          }
          break;
      }
  }, Nn = (x) => {
    xe(!0), V && !ye.current && ct(x);
  }, Dn = (x) => {
    if (t(J)) {
      oe.current.focus();
      return;
    }
    xe(!1), we.current = !0, ye.current = !1, i && ge.current !== -1 && pe ? Pt(x, Q[ge.current], "blur") : i && P && K !== "" ? Pt(x, K, "blur", "freeSolo") : s && Pe(x, I), Mt(x, "blur");
  }, Vr = (x) => {
    const y = x.target.value;
    K !== y && (Ae(y), Te(!1), k && k(x, y, "input")), y === "" ? !m && !O && Et(x, null, "clear") : ct(x);
  }, Hr = (x) => {
    const y = Number(x.currentTarget.getAttribute("data-option-index"));
    ge.current !== y && Le({
      event: x,
      index: y,
      reason: "mouse"
    });
  }, un = (x) => {
    Le({
      event: x,
      index: Number(x.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Vt.current = !0;
  }, Ur = (x) => {
    const y = Number(x.currentTarget.getAttribute("data-option-index"));
    Pt(x, Q[y], "selectOption"), Vt.current = !1;
  }, It = (x) => (y) => {
    const A = I.slice();
    A.splice(x, 1), Et(y, A, "removeOption", {
      option: I[x]
    });
  }, Ht = (x) => {
    Se ? Mt(x, "toggleInput") : ct(x);
  }, ze = (x) => {
    x.currentTarget.contains(x.target) && x.target.getAttribute("id") !== de && x.preventDefault();
  }, Bt = (x) => {
    x.currentTarget.contains(x.target) && (oe.current.focus(), ot && we.current && oe.current.selectionEnd - oe.current.selectionStart === 0 && oe.current.select(), we.current = !1);
  }, Kr = (x) => {
    !h && (K === "" || !Se) && Ht(x);
  };
  let yt = P && K.length > 0;
  yt = yt || (O ? I.length > 0 : I !== null);
  let Ut = Q;
  return T && (Ut = Q.reduce((x, y, A) => {
    const N = T(y);
    return x.length > 0 && x[x.length - 1].group === N ? x[x.length - 1].options.push(y) : x.push({
      key: A,
      index: A,
      group: N,
      options: [y]
    }), x;
  }, [])), h && tt && Dn(), {
    getRootProps: (x = {}) => v({
      "aria-owns": Re ? `${de}-listbox` : null
    }, x, {
      onKeyDown: zn(x),
      onMouseDown: ze,
      onClick: Bt
    }),
    getInputLabelProps: () => ({
      id: `${de}-label`,
      htmlFor: de
    }),
    getInputProps: () => ({
      id: de,
      value: K,
      onBlur: Dn,
      onFocus: Nn,
      onChange: Vr,
      onMouseDown: Kr,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": pe ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Re ? `${de}-listbox` : void 0,
      "aria-expanded": Re,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: oe,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: h
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: cn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Ht
    }),
    getTagProps: ({
      index: x
    }) => v({
      key: x,
      "data-tag-index": x,
      tabIndex: -1
    }, !ce && {
      onDelete: It(x)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${de}-listbox`,
      "aria-labelledby": `${de}-label`,
      ref: _n,
      onMouseDown: (x) => {
        x.preventDefault();
      }
    }),
    getOptionProps: ({
      index: x,
      option: y
    }) => {
      const A = (O ? I : [I]).some((Y) => Y != null && R(y, Y)), N = $ ? $(y) : !1;
      return {
        key: G(y),
        tabIndex: -1,
        role: "option",
        id: `${de}-option-${x}`,
        onMouseMove: Hr,
        onClick: Ur,
        onTouchStart: un,
        "data-option-index": x,
        "aria-disabled": N,
        "aria-selected": A
      };
    },
    id: de,
    inputValue: K,
    value: I,
    dirty: yt,
    expanded: pe && ae,
    popupOpen: pe,
    focused: tt || se !== -1,
    anchorEl: ae,
    setAnchorEl: it,
    focusedTag: se,
    groupedOptions: Ut
  };
}
const up = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], fp = he(ap, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), dp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const o = Mo(), i = Ue({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: u,
    container: c,
    disablePortal: m,
    keepMounted: p,
    modifiers: h,
    open: g,
    placement: f,
    popperOptions: C,
    popperRef: w,
    transition: P,
    slots: $,
    slotProps: b
  } = i, T = te(i, up), E = (r = $ == null ? void 0 : $.root) != null ? r : l == null ? void 0 : l.Root, S = v({
    anchorEl: a,
    container: c,
    disablePortal: m,
    keepMounted: p,
    modifiers: h,
    open: g,
    placement: f,
    popperOptions: C,
    popperRef: w,
    transition: P
  }, T);
  return /* @__PURE__ */ z.jsx(fp, v({
    as: s,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: E
    },
    slotProps: b ?? u
  }, S, {
    ref: n
  }));
}), La = dp;
function pp(e) {
  return Ve("MuiButton", e);
}
const mp = He("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Vn = mp, hp = /* @__PURE__ */ d.createContext({}), gp = hp, vp = /* @__PURE__ */ d.createContext(void 0), yp = vp, bp = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], xp = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${U(t)}`, `size${U(o)}`, `${i}Size${U(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${U(o)}`],
    endIcon: ["endIcon", `iconSize${U(o)}`]
  }, l = Je(s, pp, a);
  return v({}, a, l);
}, za = (e) => v({}, e.size === "small" && {
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
}), Cp = he(Do, {
  shouldForwardProp: (e) => wa(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${U(n.color)}`], t[`size${U(n.size)}`], t[`${n.variant}Size${U(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return v({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": v({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Vn.focusVisible}`]: v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Vn.disabled}`]: v({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Me(e.palette[t.color].main, 0.5)}`
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
  [`&.${Vn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Vn.disabled}`]: {
    boxShadow: "none"
  }
}), $p = he("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${U(n.size)}`]];
  }
})(({
  ownerState: e
}) => v({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, za(e))), wp = he("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${U(n.size)}`]];
  }
})(({
  ownerState: e
}) => v({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, za(e))), Sp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = d.useContext(gp), o = d.useContext(yp), i = To(r, t), a = Ue({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: u = "button",
    className: c,
    disabled: m = !1,
    disableElevation: p = !1,
    disableFocusRipple: h = !1,
    endIcon: g,
    focusVisibleClassName: f,
    fullWidth: C = !1,
    size: w = "medium",
    startIcon: P,
    type: $,
    variant: b = "text"
  } = a, T = te(a, bp), E = v({}, a, {
    color: l,
    component: u,
    disabled: m,
    disableElevation: p,
    disableFocusRipple: h,
    fullWidth: C,
    size: w,
    type: $,
    variant: b
  }), S = xp(E), D = P && /* @__PURE__ */ z.jsx($p, {
    className: S.startIcon,
    ownerState: E,
    children: P
  }), B = g && /* @__PURE__ */ z.jsx(wp, {
    className: S.endIcon,
    ownerState: E,
    children: g
  }), R = o || "";
  return /* @__PURE__ */ z.jsxs(Cp, v({
    ownerState: E,
    className: ie(r.className, S.root, c, R),
    component: u,
    disabled: m,
    focusRipple: !h,
    focusVisibleClassName: ie(S.focusVisible, f),
    ref: n,
    type: $
  }, T, {
    classes: S,
    children: [D, s, B]
  }));
}), om = Sp, Tp = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function mo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Rp = {
  entering: {
    opacity: 1,
    transform: mo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Zr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Na = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: l,
    onEntered: u,
    onEntering: c,
    onExit: m,
    onExited: p,
    onExiting: h,
    style: g,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = xu
  } = t, w = te(t, Tp), P = d.useRef(), $ = d.useRef(), b = $a(), T = d.useRef(null), E = wt(T, i.ref, n), S = (k) => (M) => {
    if (k) {
      const _ = T.current;
      M === void 0 ? k(_) : k(_, M);
    }
  }, D = S(c), B = S((k, M) => {
    Pu(k);
    const {
      duration: _,
      delay: V,
      easing: ne
    } = $i({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let ce;
    f === "auto" ? (ce = b.transitions.getAutoHeightDuration(k.clientHeight), $.current = ce) : ce = _, k.style.transition = [b.transitions.create("opacity", {
      duration: ce,
      delay: V
    }), b.transitions.create("transform", {
      duration: Zr ? ce : ce * 0.666,
      delay: V,
      easing: ne
    })].join(","), l && l(k, M);
  }), R = S(u), O = S(h), j = S((k) => {
    const {
      duration: M,
      delay: _,
      easing: V
    } = $i({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let ne;
    f === "auto" ? (ne = b.transitions.getAutoHeightDuration(k.clientHeight), $.current = ne) : ne = M, k.style.transition = [b.transitions.create("opacity", {
      duration: ne,
      delay: _
    }), b.transitions.create("transform", {
      duration: Zr ? ne : ne * 0.666,
      delay: Zr ? _ : _ || ne * 0.333,
      easing: V
    })].join(","), k.style.opacity = 0, k.style.transform = mo(0.75), m && m(k);
  }), F = S(p), H = (k) => {
    f === "auto" && (P.current = setTimeout(k, $.current || 0)), r && r(T.current, k);
  };
  return d.useEffect(() => () => {
    clearTimeout(P.current);
  }, []), /* @__PURE__ */ z.jsx(C, v({
    appear: o,
    in: s,
    nodeRef: T,
    onEnter: B,
    onEntered: R,
    onEntering: D,
    onExit: j,
    onExited: F,
    onExiting: O,
    addEndListener: H,
    timeout: f === "auto" ? null : f
  }, w, {
    children: (k, M) => /* @__PURE__ */ d.cloneElement(i, v({
      style: v({
        opacity: 0,
        transform: mo(0.75),
        visibility: k === "exited" && !s ? "hidden" : void 0
      }, Rp[k], g, i.props.style),
      ref: E
    }, M))
  }));
});
Na.muiSupportAuto = !0;
const Vi = Na;
function Ep(e) {
  return Ve("MuiTooltip", e);
}
const Pp = He("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ot = Pp, Op = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function kp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ap = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${U(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Je(a, Ep, t);
}, Mp = he(La, {
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
}) => v({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Ot.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Ot.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Ot.arrow}`]: v({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Ot.arrow}`]: v({}, t.isRtl ? {
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
})), Ip = he("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${U(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Me(e.palette.grey[700], 0.92),
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
  lineHeight: `${kp(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Ot.popper}[data-popper-placement*="left"] &`]: v({
    transformOrigin: "right center"
  }, t.isRtl ? v({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : v({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Ot.popper}[data-popper-placement*="right"] &`]: v({
    transformOrigin: "left center"
  }, t.isRtl ? v({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : v({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Ot.popper}[data-popper-placement*="top"] &`]: v({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Ot.popper}[data-popper-placement*="bottom"] &`]: v({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), Bp = he("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : Me(e.palette.grey[700], 0.9),
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
let Hn = !1, Jr = null, mn = {
  x: 0,
  y: 0
};
function Un(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const _p = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, a, s, l, u, c, m, p, h, g, f, C, w, P, $, b, T;
  const E = Ue({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: S = !1,
    children: D,
    components: B = {},
    componentsProps: R = {},
    describeChild: O = !1,
    disableFocusListener: j = !1,
    disableHoverListener: F = !1,
    disableInteractive: H = !1,
    disableTouchListener: k = !1,
    enterDelay: M = 100,
    enterNextDelay: _ = 0,
    enterTouchDelay: V = 700,
    followCursor: ne = !1,
    id: ce,
    leaveDelay: ot = 0,
    leaveTouchDelay: et = 1500,
    onClose: de,
    onOpen: G,
    open: ye,
    placement: we = "bottom",
    PopperComponent: oe,
    PopperProps: J = {},
    slotProps: ae = {},
    slots: it = {},
    title: se,
    TransitionComponent: gt = Vi,
    TransitionProps: vt
  } = E, ge = te(E, Op), I = /* @__PURE__ */ d.isValidElement(D) ? D : /* @__PURE__ */ z.jsx("span", {
    children: D
  }), at = $a(), K = at.direction === "rtl", [Ae, tt] = d.useState(), [xe, Pe] = d.useState(null), Se = d.useRef(!1), nt = H || ne, Oe = d.useRef(), Te = d.useRef(), ke = d.useRef(), pe = d.useRef(), [Q, L] = Xn({
    controlled: ye,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Re = Q;
  const st = da(ce), lt = d.useRef(), Le = d.useCallback(() => {
    lt.current !== void 0 && (document.body.style.WebkitUserSelect = lt.current, lt.current = void 0), clearTimeout(pe.current);
  }, []);
  d.useEffect(() => () => {
    clearTimeout(Oe.current), clearTimeout(Te.current), clearTimeout(ke.current), Le();
  }, [Le]);
  const Ke = (W) => {
    clearTimeout(Jr), Hn = !0, L(!0), G && !Re && G(W);
  }, Wt = $t(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (W) => {
      clearTimeout(Jr), Jr = setTimeout(() => {
        Hn = !1;
      }, 800 + ot), L(!1), de && Re && de(W), clearTimeout(Oe.current), Oe.current = setTimeout(() => {
        Se.current = !1;
      }, at.transitions.duration.shortest);
    }
  ), At = (W) => {
    Se.current && W.type !== "touchstart" || (Ae && Ae.removeAttribute("title"), clearTimeout(Te.current), clearTimeout(ke.current), M || Hn && _ ? Te.current = setTimeout(() => {
      Ke(W);
    }, Hn ? _ : M) : Ke(W));
  }, _n = (W) => {
    clearTimeout(Te.current), clearTimeout(ke.current), ke.current = setTimeout(() => {
      Wt(W);
    }, ot);
  }, {
    isFocusVisibleRef: ct,
    onBlur: Mt,
    onFocus: Et,
    ref: Vt
  } = pa(), [, Pt] = d.useState(!1), Ln = (W) => {
    Mt(W), ct.current === !1 && (Pt(!1), _n(W));
  }, ln = (W) => {
    Ae || tt(W.currentTarget), Et(W), ct.current === !0 && (Pt(!0), At(W));
  }, cn = (W) => {
    Se.current = !0;
    const Ne = I.props;
    Ne.onTouchStart && Ne.onTouchStart(W);
  }, zn = At, Nn = _n, Dn = (W) => {
    cn(W), clearTimeout(ke.current), clearTimeout(Oe.current), Le(), lt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", pe.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = lt.current, At(W);
    }, V);
  }, Vr = (W) => {
    I.props.onTouchEnd && I.props.onTouchEnd(W), Le(), clearTimeout(ke.current), ke.current = setTimeout(() => {
      Wt(W);
    }, et);
  };
  d.useEffect(() => {
    if (!Re)
      return;
    function W(Ne) {
      (Ne.key === "Escape" || Ne.key === "Esc") && Wt(Ne);
    }
    return document.addEventListener("keydown", W), () => {
      document.removeEventListener("keydown", W);
    };
  }, [Wt, Re]);
  const Hr = wt(I.ref, Vt, tt, n);
  !se && se !== 0 && (Re = !1);
  const un = d.useRef(), Ur = (W) => {
    const Ne = I.props;
    Ne.onMouseMove && Ne.onMouseMove(W), mn = {
      x: W.clientX,
      y: W.clientY
    }, un.current && un.current.update();
  }, It = {}, Ht = typeof se == "string";
  O ? (It.title = !Re && Ht && !F ? se : null, It["aria-describedby"] = Re ? st : null) : (It["aria-label"] = Ht ? se : null, It["aria-labelledby"] = Re && !Ht ? st : null);
  const ze = v({}, It, ge, I.props, {
    className: ie(ge.className, I.props.className),
    onTouchStart: cn,
    ref: Hr
  }, ne ? {
    onMouseMove: Ur
  } : {}), Bt = {};
  k || (ze.onTouchStart = Dn, ze.onTouchEnd = Vr), F || (ze.onMouseOver = Un(zn, ze.onMouseOver), ze.onMouseLeave = Un(Nn, ze.onMouseLeave), nt || (Bt.onMouseOver = zn, Bt.onMouseLeave = Nn)), j || (ze.onFocus = Un(ln, ze.onFocus), ze.onBlur = Un(Ln, ze.onBlur), nt || (Bt.onFocus = ln, Bt.onBlur = Ln));
  const Kr = d.useMemo(() => {
    var W;
    let Ne = [{
      name: "arrow",
      enabled: !!xe,
      options: {
        element: xe,
        padding: 4
      }
    }];
    return (W = J.popperOptions) != null && W.modifiers && (Ne = Ne.concat(J.popperOptions.modifiers)), v({}, J.popperOptions, {
      modifiers: Ne
    });
  }, [xe, J]), yt = v({}, E, {
    isRtl: K,
    arrow: S,
    disableInteractive: nt,
    placement: we,
    PopperComponentProp: oe,
    touch: Se.current
  }), Ut = Ap(yt), x = (r = (o = it.popper) != null ? o : B.Popper) != null ? r : Mp, y = (i = (a = (s = it.transition) != null ? s : B.Transition) != null ? a : gt) != null ? i : Vi, A = (l = (u = it.tooltip) != null ? u : B.Tooltip) != null ? l : Ip, N = (c = (m = it.arrow) != null ? m : B.Arrow) != null ? c : Bp, Y = gn(x, v({}, J, (p = ae.popper) != null ? p : R.popper, {
    className: ie(Ut.popper, J == null ? void 0 : J.className, (h = (g = ae.popper) != null ? g : R.popper) == null ? void 0 : h.className)
  }), yt), be = gn(y, v({}, vt, (f = ae.transition) != null ? f : R.transition), yt), me = gn(A, v({}, (C = ae.tooltip) != null ? C : R.tooltip, {
    className: ie(Ut.tooltip, (w = (P = ae.tooltip) != null ? P : R.tooltip) == null ? void 0 : w.className)
  }), yt), Ge = gn(N, v({}, ($ = ae.arrow) != null ? $ : R.arrow, {
    className: ie(Ut.arrow, (b = (T = ae.arrow) != null ? T : R.arrow) == null ? void 0 : b.className)
  }), yt);
  return /* @__PURE__ */ z.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ d.cloneElement(I, ze), /* @__PURE__ */ z.jsx(x, v({
      as: oe ?? La,
      placement: we,
      anchorEl: ne ? {
        getBoundingClientRect: () => ({
          top: mn.y,
          left: mn.x,
          right: mn.x,
          bottom: mn.y,
          width: 0,
          height: 0
        })
      } : Ae,
      popperRef: un,
      open: Ae ? Re : !1,
      id: st,
      transition: !0
    }, Bt, Y, {
      popperOptions: Kr,
      children: ({
        TransitionProps: W
      }) => /* @__PURE__ */ z.jsx(y, v({
        timeout: at.transitions.duration.shorter
      }, W, be, {
        children: /* @__PURE__ */ z.jsxs(A, v({}, me, {
          children: [se, S ? /* @__PURE__ */ z.jsx(N, v({}, Ge, {
            ref: Pe
          })) : null]
        }))
      }))
    }))]
  });
}), im = _p;
function Lp(e) {
  return Ve("MuiToggleButton", e);
}
const zp = He("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), Hi = zp, Np = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"], Dp = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: r,
    disabled: o,
    size: i,
    color: a
  } = e, s = {
    root: ["root", r && "selected", o && "disabled", n && "fullWidth", `size${U(i)}`, a]
  };
  return Je(s, Lp, t);
}, jp = he(Do, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`size${U(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let n = t.color === "standard" ? e.palette.text.primary : e.palette[t.color].main, r;
  return e.vars && (n = t.color === "standard" ? e.vars.palette.text.primary : e.vars.palette[t.color].main, r = t.color === "standard" ? e.vars.palette.text.primaryChannel : e.vars.palette[t.color].mainChannel), v({}, e.typography.button, {
    borderRadius: (e.vars || e).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(e.vars || e).palette.divider}`,
    color: (e.vars || e).palette.action.active
  }, t.fullWidth && {
    width: "100%"
  }, {
    [`&.${Hi.disabled}`]: {
      color: (e.vars || e).palette.action.disabled,
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      // Reset on mouse devices
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette.text.primary, e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${Hi.selected}`]: {
      color: n,
      backgroundColor: e.vars ? `rgba(${r} / ${e.vars.palette.action.selectedOpacity})` : Me(n, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${r} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Me(n, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: e.vars ? `rgba(${r} / ${e.vars.palette.action.selectedOpacity})` : Me(n, e.palette.action.selectedOpacity)
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
}), Fp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiToggleButton"
  }), {
    children: o,
    className: i,
    color: a = "standard",
    disabled: s = !1,
    disableFocusRipple: l = !1,
    fullWidth: u = !1,
    onChange: c,
    onClick: m,
    selected: p,
    size: h = "medium",
    value: g
  } = r, f = te(r, Np), C = v({}, r, {
    color: a,
    disabled: s,
    disableFocusRipple: l,
    fullWidth: u,
    size: h
  }), w = Dp(C), P = ($) => {
    m && (m($, g), $.defaultPrevented) || c && c($, g);
  };
  return /* @__PURE__ */ z.jsx(jp, v({
    className: ie(w.root, i),
    disabled: s,
    focusRipple: !l,
    ref: n,
    onClick: P,
    onChange: c,
    value: g,
    ownerState: C,
    "aria-pressed": p
  }, f, {
    children: o
  }));
}), am = Fp;
function Wp(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.indexOf(e) >= 0 : e === t;
}
function Vp(e) {
  return Ve("MuiToggleButtonGroup", e);
}
const Hp = He("MuiToggleButtonGroup", ["root", "selected", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth"]), bt = Hp, Up = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"], Kp = (e) => {
  const {
    classes: t,
    orientation: n,
    fullWidth: r,
    disabled: o
  } = e, i = {
    root: ["root", n === "vertical" && "vertical", r && "fullWidth"],
    grouped: ["grouped", `grouped${U(n)}`, o && "disabled"]
  };
  return Je(i, Vp, t);
}, Gp = he("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${bt.grouped}`]: t.grouped
    }, {
      [`& .${bt.grouped}`]: t[`grouped${U(n.orientation)}`]
    }, t.root, n.orientation === "vertical" && t.vertical, n.fullWidth && t.fullWidth];
  }
})(({
  ownerState: e,
  theme: t
}) => v({
  display: "inline-flex",
  borderRadius: (t.vars || t).shape.borderRadius
}, e.orientation === "vertical" && {
  flexDirection: "column"
}, e.fullWidth && {
  width: "100%"
}, {
  [`& .${bt.grouped}`]: v({}, e.orientation === "horizontal" ? {
    "&:not(:first-of-type)": {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    "&:not(:last-of-type)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    [`&.${bt.selected} + .${bt.grouped}.${bt.selected}`]: {
      borderLeft: 0,
      marginLeft: 0
    }
  } : {
    "&:not(:first-of-type)": {
      marginTop: -1,
      borderTop: "1px solid transparent",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    "&:not(:last-of-type)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    [`&.${bt.selected} + .${bt.grouped}.${bt.selected}`]: {
      borderTop: 0,
      marginTop: 0
    }
  })
})), qp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Ue({
    props: t,
    name: "MuiToggleButtonGroup"
  }), {
    children: o,
    className: i,
    color: a = "standard",
    disabled: s = !1,
    exclusive: l = !1,
    fullWidth: u = !1,
    onChange: c,
    orientation: m = "horizontal",
    size: p = "medium",
    value: h
  } = r, g = te(r, Up), f = v({}, r, {
    disabled: s,
    fullWidth: u,
    orientation: m,
    size: p
  }), C = Kp(f), w = ($, b) => {
    if (!c)
      return;
    const T = h && h.indexOf(b);
    let E;
    h && T >= 0 ? (E = h.slice(), E.splice(T, 1)) : E = h ? h.concat(b) : [b], c($, E);
  }, P = ($, b) => {
    c && c($, h === b ? null : b);
  };
  return /* @__PURE__ */ z.jsx(Gp, v({
    role: "group",
    className: ie(C.root, i),
    ref: n,
    ownerState: f
  }, g, {
    children: d.Children.map(o, ($) => /* @__PURE__ */ d.isValidElement($) ? /* @__PURE__ */ d.cloneElement($, {
      className: ie(C.grouped, $.props.className),
      onChange: l ? P : w,
      selected: $.props.selected === void 0 ? Wp($.props.value, h) : $.props.selected,
      size: $.props.size || p,
      fullWidth: u,
      color: $.props.color || a,
      disabled: $.props.disabled || s
    }) : null)
  }));
}), sm = qp;
export {
  em as A,
  om as B,
  Zp as E,
  Jp as G,
  cf as I,
  im as M,
  La as P,
  Qp as T,
  Ns as a,
  lu as b,
  Yp as c,
  tm as d,
  wt as e,
  rm as f,
  am as g,
  ca as h,
  sm as i,
  z as j,
  oo as n,
  Ot as t,
  nm as u
};
