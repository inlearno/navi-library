import { r as p, a as jr, R as yt, b as Dn, c as Ca } from "./react-181b9648.js";
var Ri = { exports: {} }, or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea = p, Sa = Symbol.for("react.element"), $a = Symbol.for("react.fragment"), Ta = Object.prototype.hasOwnProperty, Pa = Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oi(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    Ta.call(t, r) && !Ra.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Sa, type: e, key: i, ref: a, props: o, _owner: Pa.current };
}
or.Fragment = $a;
or.jsx = Oi;
or.jsxs = Oi;
Ri.exports = or;
var z = Ri.exports;
function Oa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ka(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Aa = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ka(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Oa(o);
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
}(), Te = "-ms-", Zn = "-moz-", G = "-webkit-", ki = "comm", to = "rule", no = "decl", Ma = "@import", Ai = "@keyframes", Ia = "@layer", Ba = Math.abs, ir = String.fromCharCode, _a = Object.assign;
function La(e, t) {
  return we(e, 0) ^ 45 ? (((t << 2 ^ we(e, 0)) << 2 ^ we(e, 1)) << 2 ^ we(e, 2)) << 2 ^ we(e, 3) : 0;
}
function Mi(e) {
  return e.trim();
}
function Da(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function q(e, t, n) {
  return e.replace(t, n);
}
function Fr(e, t) {
  return e.indexOf(t);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function vn(e, t, n) {
  return e.slice(t, n);
}
function at(e) {
  return e.length;
}
function ro(e) {
  return e.length;
}
function Nn(e, t) {
  return t.push(e), e;
}
function Na(e, t) {
  return e.map(t).join("");
}
var ar = 1, Jt = 1, Ii = 0, Ie = 0, me = 0, rn = "";
function sr(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ar, column: Jt, length: a, return: "" };
}
function ln(e, t) {
  return _a(sr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function za() {
  return me;
}
function ja() {
  return me = Ie > 0 ? we(rn, --Ie) : 0, Jt--, me === 10 && (Jt = 1, ar--), me;
}
function Ne() {
  return me = Ie < Ii ? we(rn, Ie++) : 0, Jt++, me === 10 && (Jt = 1, ar++), me;
}
function ut() {
  return we(rn, Ie);
}
function Vn() {
  return Ie;
}
function $n(e, t) {
  return vn(rn, e, t);
}
function yn(e) {
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
function Bi(e) {
  return ar = Jt = 1, Ii = at(rn = e), Ie = 0, [];
}
function _i(e) {
  return rn = "", e;
}
function Hn(e) {
  return Mi($n(Ie - 1, Wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fa(e) {
  for (; (me = ut()) && me < 33; )
    Ne();
  return yn(e) > 2 || yn(me) > 3 ? "" : " ";
}
function Wa(e, t) {
  for (; --t && Ne() && !(me < 48 || me > 102 || me > 57 && me < 65 || me > 70 && me < 97); )
    ;
  return $n(e, Vn() + (t < 6 && ut() == 32 && Ne() == 32));
}
function Wr(e) {
  for (; Ne(); )
    switch (me) {
      case e:
        return Ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wr(me);
        break;
      case 40:
        e === 41 && Wr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ie;
}
function Va(e, t) {
  for (; Ne() && e + me !== 47 + 10; )
    if (e + me === 42 + 42 && ut() === 47)
      break;
  return "/*" + $n(t, Ie - 1) + "*" + ir(e === 47 ? e : Ne());
}
function Ha(e) {
  for (; !yn(ut()); )
    Ne();
  return $n(e, Ie);
}
function Ua(e) {
  return _i(Un("", null, null, null, [""], e = Bi(e), 0, [0], e));
}
function Un(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, h = a, d = 0, m = 0, g = 0, f = 1, w = 1, S = 1, R = 0, P = "", x = o, $ = i, T = r, C = P; w; )
    switch (g = R, R = Ne()) {
      case 40:
        if (g != 108 && we(C, h - 1) == 58) {
          Fr(C += q(Hn(R), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Hn(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Fa(g);
        break;
      case 92:
        C += Wa(Vn() - 1, 7);
        continue;
      case 47:
        switch (ut()) {
          case 42:
          case 47:
            Nn(Ka(Va(Ne(), Vn()), t, n), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * f:
        s[u++] = at(C) * S;
      case 125 * f:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            S == -1 && (C = q(C, /\f/g, "")), m > 0 && at(C) - h && Nn(m > 32 ? Mo(C + ";", r, n, h - 1) : Mo(q(C, " ", "") + ";", r, n, h - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (Nn(T = Ao(C, t, n, u, c, o, s, P, x = [], $ = [], h), i), R === 123)
              if (c === 0)
                Un(C, t, T, T, x, i, h, s, $);
              else
                switch (d === 99 && we(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Un(e, T, T, r && Nn(Ao(e, T, T, 0, 0, o, s, P, o, x = [], h), $), o, $, h, s, r ? x : $);
                    break;
                  default:
                    Un(C, T, T, T, [""], $, 0, s, $);
                }
        }
        u = c = m = 0, f = S = 1, P = C = "", h = a;
        break;
      case 58:
        h = 1 + at(C), m = g;
      default:
        if (f < 1) {
          if (R == 123)
            --f;
          else if (R == 125 && f++ == 0 && ja() == 125)
            continue;
        }
        switch (C += ir(R), R * f) {
          case 38:
            S = c > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            s[u++] = (at(C) - 1) * S, S = 1;
            break;
          case 64:
            ut() === 45 && (C += Hn(Ne())), d = ut(), c = h = at(P = C += Ha(Vn())), R++;
            break;
          case 45:
            g === 45 && at(C) == 2 && (f = 0);
        }
    }
  return i;
}
function Ao(e, t, n, r, o, i, a, s, l, u, c) {
  for (var h = o - 1, d = o === 0 ? i : [""], m = ro(d), g = 0, f = 0, w = 0; g < r; ++g)
    for (var S = 0, R = vn(e, h + 1, h = Ba(f = a[g])), P = e; S < m; ++S)
      (P = Mi(f > 0 ? d[S] + " " + R : q(R, /&\f/g, d[S]))) && (l[w++] = P);
  return sr(e, t, n, o === 0 ? to : s, l, u, c);
}
function Ka(e, t, n) {
  return sr(e, t, n, ki, ir(za()), vn(e, 2, -2), 0);
}
function Mo(e, t, n, r) {
  return sr(e, t, n, no, vn(e, 0, r), vn(e, r + 1, -1), r);
}
function Yt(e, t) {
  for (var n = "", r = ro(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Ga(e, t, n, r) {
  switch (e.type) {
    case Ia:
      if (e.children.length)
        break;
    case Ma:
    case no:
      return e.return = e.return || e.value;
    case ki:
      return "";
    case Ai:
      return e.return = e.value + "{" + Yt(e.children, r) + "}";
    case to:
      e.value = e.props.join(",");
  }
  return at(n = Yt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function qa(e) {
  var t = ro(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function Xa(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Li(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ya = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = ut(), o === 38 && i === 12 && (n[r] = 1), !yn(i); )
    Ne();
  return $n(t, Ie);
}, Za = function(t, n) {
  var r = -1, o = 44;
  do
    switch (yn(o)) {
      case 0:
        o === 38 && ut() === 12 && (n[r] = 1), t[r] += Ya(Ie - 1, n, r);
        break;
      case 2:
        t[r] += Hn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = ut() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ir(o);
    }
  while (o = Ne());
  return t;
}, Ja = function(t, n) {
  return _i(Za(Bi(t), n));
}, Io = /* @__PURE__ */ new WeakMap(), Qa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Io.get(r)) && !o) {
      Io.set(t, !0);
      for (var i = [], a = Ja(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, es = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Di(e, t) {
  switch (La(e, t)) {
    case 5103:
      return G + "print-" + e + e;
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
      return G + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + Zn + e + Te + e + e;
    case 6828:
    case 4268:
      return G + e + Te + e + e;
    case 6165:
      return G + e + Te + "flex-" + e + e;
    case 5187:
      return G + e + q(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + Te + "flex-$1$2") + e;
    case 5443:
      return G + e + Te + "flex-item-" + q(e, /flex-|-self/, "") + e;
    case 4675:
      return G + e + Te + "flex-line-pack" + q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return G + e + Te + q(e, "shrink", "negative") + e;
    case 5292:
      return G + e + Te + q(e, "basis", "preferred-size") + e;
    case 6060:
      return G + "box-" + q(e, "-grow", "") + G + e + Te + q(e, "grow", "positive") + e;
    case 4554:
      return G + q(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
    case 6187:
      return q(q(q(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return q(e, /(image-set\([^]*)/, G + "$1$`$1");
    case 4968:
      return q(q(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(e, /(.+)-inline(.+)/, G + "$1$2") + e;
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
      if (at(e) - 1 - t > 6)
        switch (we(e, t + 1)) {
          case 109:
            if (we(e, t + 4) !== 45)
              break;
          case 102:
            return q(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + Zn + (we(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fr(e, "stretch") ? Di(q(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (we(e, t + 1) !== 115)
        break;
    case 6444:
      switch (we(e, at(e) - 3 - (~Fr(e, "!important") && 10))) {
        case 107:
          return q(e, ":", ":" + G) + e;
        case 101:
          return q(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (we(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + Te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (we(e, t + 11)) {
        case 114:
          return G + e + Te + q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return G + e + Te + q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return G + e + Te + q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return G + e + Te + e + e;
  }
  return e;
}
var ts = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case no:
        t.return = Di(t.value, t.length);
        break;
      case Ai:
        return Yt([ln(t, {
          value: q(t.value, "@", "@" + G)
        })], o);
      case to:
        if (t.length)
          return Na(t.props, function(i) {
            switch (Da(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Yt([ln(t, {
                  props: [q(i, /:(read-\w+)/, ":" + Zn + "$1")]
                })], o);
              case "::placeholder":
                return Yt([ln(t, {
                  props: [q(i, /:(plac\w+)/, ":" + G + "input-$1")]
                }), ln(t, {
                  props: [q(i, /:(plac\w+)/, ":" + Zn + "$1")]
                }), ln(t, {
                  props: [q(i, /:(plac\w+)/, Te + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, ns = [ts], rs = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var w = f.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ns, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var w = f.getAttribute("data-emotion").split(" "), S = 1; S < w.length; S++)
        i[w[S]] = !0;
      s.push(f);
    }
  );
  var l, u = [Qa, es];
  {
    var c, h = [Ga, Xa(function(f) {
      c.insert(f);
    })], d = qa(u.concat(o, h)), m = function(w) {
      return Yt(Ua(w), d);
    };
    l = function(w, S, R, P) {
      c = R, m(w ? w + "{" + S.styles + "}" : S.styles), P && (g.inserted[S.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Aa({
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
var Ni = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe = typeof Symbol == "function" && Symbol.for, oo = xe ? Symbol.for("react.element") : 60103, io = xe ? Symbol.for("react.portal") : 60106, lr = xe ? Symbol.for("react.fragment") : 60107, cr = xe ? Symbol.for("react.strict_mode") : 60108, ur = xe ? Symbol.for("react.profiler") : 60114, fr = xe ? Symbol.for("react.provider") : 60109, pr = xe ? Symbol.for("react.context") : 60110, ao = xe ? Symbol.for("react.async_mode") : 60111, dr = xe ? Symbol.for("react.concurrent_mode") : 60111, hr = xe ? Symbol.for("react.forward_ref") : 60112, mr = xe ? Symbol.for("react.suspense") : 60113, os = xe ? Symbol.for("react.suspense_list") : 60120, gr = xe ? Symbol.for("react.memo") : 60115, vr = xe ? Symbol.for("react.lazy") : 60116, is = xe ? Symbol.for("react.block") : 60121, as = xe ? Symbol.for("react.fundamental") : 60117, ss = xe ? Symbol.for("react.responder") : 60118, ls = xe ? Symbol.for("react.scope") : 60119;
function je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case oo:
        switch (e = e.type, e) {
          case ao:
          case dr:
          case lr:
          case ur:
          case cr:
          case mr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case pr:
              case hr:
              case vr:
              case gr:
              case fr:
                return e;
              default:
                return t;
            }
        }
      case io:
        return t;
    }
  }
}
function zi(e) {
  return je(e) === dr;
}
ee.AsyncMode = ao;
ee.ConcurrentMode = dr;
ee.ContextConsumer = pr;
ee.ContextProvider = fr;
ee.Element = oo;
ee.ForwardRef = hr;
ee.Fragment = lr;
ee.Lazy = vr;
ee.Memo = gr;
ee.Portal = io;
ee.Profiler = ur;
ee.StrictMode = cr;
ee.Suspense = mr;
ee.isAsyncMode = function(e) {
  return zi(e) || je(e) === ao;
};
ee.isConcurrentMode = zi;
ee.isContextConsumer = function(e) {
  return je(e) === pr;
};
ee.isContextProvider = function(e) {
  return je(e) === fr;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oo;
};
ee.isForwardRef = function(e) {
  return je(e) === hr;
};
ee.isFragment = function(e) {
  return je(e) === lr;
};
ee.isLazy = function(e) {
  return je(e) === vr;
};
ee.isMemo = function(e) {
  return je(e) === gr;
};
ee.isPortal = function(e) {
  return je(e) === io;
};
ee.isProfiler = function(e) {
  return je(e) === ur;
};
ee.isStrictMode = function(e) {
  return je(e) === cr;
};
ee.isSuspense = function(e) {
  return je(e) === mr;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === lr || e === dr || e === ur || e === cr || e === mr || e === os || typeof e == "object" && e !== null && (e.$$typeof === vr || e.$$typeof === gr || e.$$typeof === fr || e.$$typeof === pr || e.$$typeof === hr || e.$$typeof === as || e.$$typeof === ss || e.$$typeof === ls || e.$$typeof === is);
};
ee.typeOf = je;
Ni.exports = ee;
var cs = Ni.exports, ji = cs, us = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fi = {};
Fi[ji.ForwardRef] = us;
Fi[ji.Memo] = fs;
var ps = !0;
function Wi(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var so = function(t, n, r) {
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
  ps === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, lo = function(t, n, r) {
  so(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ds(e) {
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
var hs = {
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
}, ms = /[A-Z]|^ms/g, gs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vi = function(t) {
  return t.charCodeAt(1) === 45;
}, Bo = function(t) {
  return t != null && typeof t != "boolean";
}, Br = /* @__PURE__ */ Li(function(e) {
  return Vi(e) ? e : e.replace(ms, "-$&").toLowerCase();
}), _o = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(gs, function(r, o, i) {
          return st = {
            name: o,
            styles: i,
            next: st
          }, o;
        });
  }
  return hs[t] !== 1 && !Vi(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function bn(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return st = {
          name: n.name,
          styles: n.styles,
          next: st
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            st = {
              name: r.name,
              styles: r.styles,
              next: st
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return vs(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = st, a = n(e);
        return st = i, bn(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function vs(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += bn(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Bo(a) && (r += Br(i) + ":" + _o(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Bo(a[s]) && (r += Br(i) + ":" + _o(i, a[s]) + ";");
      else {
        var l = bn(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Br(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Lo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, st, yr = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  st = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += bn(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += bn(r, n, t[s]), o && (i += a[s]);
  Lo.lastIndex = 0;
  for (var l = "", u; (u = Lo.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = ds(i) + l;
  return {
    name: c,
    styles: i,
    next: st
  };
}, ys = function(t) {
  return t();
}, Hi = jr["useInsertionEffect"] ? jr["useInsertionEffect"] : !1, Ui = Hi || ys, Do = Hi || p.useLayoutEffect, Ki = {}.hasOwnProperty, Gi = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ rs({
    key: "css"
  }) : null
);
Gi.Provider;
var co = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(Gi);
    return t(n, o, r);
  });
}, Tn = /* @__PURE__ */ p.createContext({}), Vr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", yd = function(t, n) {
  var r = {};
  for (var o in n)
    Ki.call(n, o) && (r[o] = n[o]);
  return r[Vr] = t, r;
}, bs = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return so(n, r, o), Ui(function() {
    return lo(n, r, o);
  }), null;
}, xs = /* @__PURE__ */ co(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Vr], i = [r], a = "";
  typeof e.className == "string" ? a = Wi(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = yr(i, void 0, p.useContext(Tn));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Ki.call(e, u) && u !== "css" && u !== Vr && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(bs, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, l));
}), bd = xs, xd = /* @__PURE__ */ co(function(e, t) {
  var n = e.styles, r = yr([n], void 0, p.useContext(Tn)), o = p.useRef();
  return Do(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Do(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && lo(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function ws() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return yr(t);
}
var uo = function() {
  var t = ws.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function vt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function qi(e) {
  if (!vt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = qi(e[n]);
  }), t;
}
function Ye(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? v({}, e) : e;
  return vt(e) && vt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (vt(t[o]) && o in e && vt(e[o]) ? r[o] = Ye(e[o], t[o], n) : n.clone ? r[o] = vt(t[o]) ? qi(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Lt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function X(e) {
  if (typeof e != "string")
    throw new Error(Lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function No(e) {
  return e && e.ownerDocument || document;
}
function Jn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Cs = typeof window < "u" ? p.useLayoutEffect : p.useEffect, xn = Cs;
let zo = 0;
function Es(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (zo += 1, n(`mui-${zo}`));
  }, [t]), r;
}
const jo = jr["useId".toString()];
function Xi(e) {
  if (jo !== void 0) {
    const t = jo();
    return e ?? t;
  }
  return Es(e);
}
function Kn({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = p.useRef(e !== void 0), [i, a] = p.useState(t), s = o ? e : i, l = p.useCallback((u) => {
    o || a(u);
  }, []);
  return [s, l];
}
function bt(e) {
  const t = p.useRef(e);
  return xn(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function xt(...e) {
  return p.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Jn(n, t);
    });
  }, e);
}
let br = !0, Hr = !1, Fo;
const Ss = {
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
function $s(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Ss[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ts(e) {
  e.metaKey || e.altKey || e.ctrlKey || (br = !0);
}
function _r() {
  br = !1;
}
function Ps() {
  this.visibilityState === "hidden" && Hr && (br = !0);
}
function Rs(e) {
  e.addEventListener("keydown", Ts, !0), e.addEventListener("mousedown", _r, !0), e.addEventListener("pointerdown", _r, !0), e.addEventListener("touchstart", _r, !0), e.addEventListener("visibilitychange", Ps, !0);
}
function Os(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return br || $s(t);
}
function Yi() {
  const e = p.useCallback((o) => {
    o != null && Rs(o.ownerDocument);
  }, []), t = p.useRef(!1);
  function n() {
    return t.current ? (Hr = !0, window.clearTimeout(Fo), Fo = window.setTimeout(() => {
      Hr = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return Os(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
const ks = (e) => {
  const t = p.useRef({});
  return p.useEffect(() => {
    t.current = e;
  }), t.current;
}, As = ks;
function fo(e, t) {
  const n = v({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = v({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = v({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = fo(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function dt(e, t, n = void 0) {
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
const Wo = (e) => e, Ms = () => {
  let e = Wo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Wo;
    }
  };
}, Is = Ms(), Bs = Is, _s = {
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
function Ze(e, t, n = "Mui") {
  const r = _s[t];
  return r ? `${n}-${r}` : `${Bs.generate(e)}-${t}`;
}
function Je(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ze(e, o, n);
  }), r;
}
const wn = "$$material";
function re(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ls = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ds = /* @__PURE__ */ Li(
  function(e) {
    return Ls.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ns = Ds, zs = function(t) {
  return t !== "theme";
}, Vo = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ns : zs;
}, Ho = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, js = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return so(n, r, o), Ui(function() {
    return lo(n, r, o);
  }), null;
}, Fs = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Ho(t, n, r), l = s || Vo(o), u = !l("as");
  return function() {
    var c = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      h.push.apply(h, c);
    else {
      h.push(c[0][0]);
      for (var d = c.length, m = 1; m < d; m++)
        h.push(c[m], c[0][m]);
    }
    var g = co(function(f, w, S) {
      var R = u && f.as || o, P = "", x = [], $ = f;
      if (f.theme == null) {
        $ = {};
        for (var T in f)
          $[T] = f[T];
        $.theme = p.useContext(Tn);
      }
      typeof f.className == "string" ? P = Wi(w.registered, x, f.className) : f.className != null && (P = f.className + " ");
      var C = yr(h.concat(x), w.registered, $);
      P += w.key + "-" + C.name, a !== void 0 && (P += " " + a);
      var N = u && s === void 0 ? Vo(R) : l, B = {};
      for (var E in f)
        u && E === "as" || // $FlowFixMe
        N(E) && (B[E] = f[E]);
      return B.className = P, B.ref = S, /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(js, {
        cache: w,
        serialized: C,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ p.createElement(R, B));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = h, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(f, w) {
      return e(f, v({}, n, w, {
        shouldForwardProp: Ho(g, w, !0)
      })).apply(void 0, h);
    }, g;
  };
}, Ws = [
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
], Ur = Fs.bind();
Ws.forEach(function(e) {
  Ur[e] = Ur(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Vs(e, t) {
  return Ur(e, t);
}
const Hs = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Us = ["values", "unit", "step"], Ks = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => v({}, n, {
    [r.key]: r.val
  }), {});
};
function Gs(e) {
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
  } = e, o = re(e, Us), i = Ks(t), a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, m) {
    const g = a.indexOf(m);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : m) - r / 100}${n})`;
  }
  function c(d) {
    return a.indexOf(d) + 1 < a.length ? u(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function h(d) {
    const m = a.indexOf(d);
    return m === 0 ? s(a[1]) : m === a.length - 1 ? l(a[m]) : u(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return v({
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
const qs = {
  borderRadius: 4
}, Xs = qs;
function hn(e, t) {
  return t ? Ye(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const po = {
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
}, Uo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${po[e]}px)`
};
function wt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Uo;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Uo;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || po).indexOf(s) !== -1) {
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
function Ys(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Zs(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function xr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Qn(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = xr(e, n) || r, t && (o = t(o, r, e)), o;
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
    const s = a[t], l = a.theme, u = xr(l, r) || {};
    return wt(a, s, (h) => {
      let d = Qn(u, o, h);
      return h === d && typeof h == "string" && (d = Qn(u, o, `${t}${h === "default" ? "" : X(h)}`, h)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Js(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Qs = {
  m: "margin",
  p: "padding"
}, el = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ko = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, tl = Js((e) => {
  if (e.length > 2)
    if (Ko[e])
      e = Ko[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Qs[t], o = el[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), ho = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], mo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ho, ...mo];
function Pn(e, t, n, r) {
  var o;
  const i = (o = xr(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function Zi(e) {
  return Pn(e, "spacing", 8);
}
function Rn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function nl(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Rn(t, n), r), {});
}
function rl(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = tl(n), i = nl(o, r), a = e[n];
  return wt(e, a, i);
}
function Ji(e, t) {
  const n = Zi(e.theme);
  return Object.keys(e).map((r) => rl(e, t, r, n)).reduce(hn, {});
}
function ce(e) {
  return Ji(e, ho);
}
ce.propTypes = {};
ce.filterProps = ho;
function ue(e) {
  return Ji(e, mo);
}
ue.propTypes = {};
ue.filterProps = mo;
function ol(e = 8) {
  if (e.mui)
    return e;
  const t = Zi({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function wr(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? hn(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function lt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const il = Z({
  prop: "border",
  themeKey: "borders",
  transform: lt
}), al = Z({
  prop: "borderTop",
  themeKey: "borders",
  transform: lt
}), sl = Z({
  prop: "borderRight",
  themeKey: "borders",
  transform: lt
}), ll = Z({
  prop: "borderBottom",
  themeKey: "borders",
  transform: lt
}), cl = Z({
  prop: "borderLeft",
  themeKey: "borders",
  transform: lt
}), ul = Z({
  prop: "borderColor",
  themeKey: "palette"
}), fl = Z({
  prop: "borderTopColor",
  themeKey: "palette"
}), pl = Z({
  prop: "borderRightColor",
  themeKey: "palette"
}), dl = Z({
  prop: "borderBottomColor",
  themeKey: "palette"
}), hl = Z({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Cr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Pn(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Rn(t, r)
    });
    return wt(e, e.borderRadius, n);
  }
  return null;
};
Cr.propTypes = {};
Cr.filterProps = ["borderRadius"];
wr(il, al, sl, ll, cl, ul, fl, pl, dl, hl, Cr);
const Er = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Pn(e.theme, "spacing", 8), n = (r) => ({
      gap: Rn(t, r)
    });
    return wt(e, e.gap, n);
  }
  return null;
};
Er.propTypes = {};
Er.filterProps = ["gap"];
const Sr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Pn(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Rn(t, r)
    });
    return wt(e, e.columnGap, n);
  }
  return null;
};
Sr.propTypes = {};
Sr.filterProps = ["columnGap"];
const $r = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Pn(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Rn(t, r)
    });
    return wt(e, e.rowGap, n);
  }
  return null;
};
$r.propTypes = {};
$r.filterProps = ["rowGap"];
const ml = Z({
  prop: "gridColumn"
}), gl = Z({
  prop: "gridRow"
}), vl = Z({
  prop: "gridAutoFlow"
}), yl = Z({
  prop: "gridAutoColumns"
}), bl = Z({
  prop: "gridAutoRows"
}), xl = Z({
  prop: "gridTemplateColumns"
}), wl = Z({
  prop: "gridTemplateRows"
}), Cl = Z({
  prop: "gridTemplateAreas"
}), El = Z({
  prop: "gridArea"
});
wr(Er, Sr, $r, ml, gl, vl, yl, bl, xl, wl, Cl, El);
function Zt(e, t) {
  return t === "grey" ? t : e;
}
const Sl = Z({
  prop: "color",
  themeKey: "palette",
  transform: Zt
}), $l = Z({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Zt
}), Tl = Z({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Zt
});
wr(Sl, $l, Tl);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Pl = Z({
  prop: "width",
  transform: De
}), go = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || po[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: De(n)
      };
    };
    return wt(e, e.maxWidth, t);
  }
  return null;
};
go.filterProps = ["maxWidth"];
const Rl = Z({
  prop: "minWidth",
  transform: De
}), Ol = Z({
  prop: "height",
  transform: De
}), kl = Z({
  prop: "maxHeight",
  transform: De
}), Al = Z({
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
const Ml = Z({
  prop: "boxSizing"
});
wr(Pl, go, Rl, Ol, kl, Al, Ml);
const Il = {
  // borders
  border: {
    themeKey: "borders",
    transform: lt
  },
  borderTop: {
    themeKey: "borders",
    transform: lt
  },
  borderRight: {
    themeKey: "borders",
    transform: lt
  },
  borderBottom: {
    themeKey: "borders",
    transform: lt
  },
  borderLeft: {
    themeKey: "borders",
    transform: lt
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
    style: Cr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Zt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Zt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Zt
  },
  // spacing
  p: {
    style: ue
  },
  pt: {
    style: ue
  },
  pr: {
    style: ue
  },
  pb: {
    style: ue
  },
  pl: {
    style: ue
  },
  px: {
    style: ue
  },
  py: {
    style: ue
  },
  padding: {
    style: ue
  },
  paddingTop: {
    style: ue
  },
  paddingRight: {
    style: ue
  },
  paddingBottom: {
    style: ue
  },
  paddingLeft: {
    style: ue
  },
  paddingX: {
    style: ue
  },
  paddingY: {
    style: ue
  },
  paddingInline: {
    style: ue
  },
  paddingInlineStart: {
    style: ue
  },
  paddingInlineEnd: {
    style: ue
  },
  paddingBlock: {
    style: ue
  },
  paddingBlockStart: {
    style: ue
  },
  paddingBlockEnd: {
    style: ue
  },
  m: {
    style: ce
  },
  mt: {
    style: ce
  },
  mr: {
    style: ce
  },
  mb: {
    style: ce
  },
  ml: {
    style: ce
  },
  mx: {
    style: ce
  },
  my: {
    style: ce
  },
  margin: {
    style: ce
  },
  marginTop: {
    style: ce
  },
  marginRight: {
    style: ce
  },
  marginBottom: {
    style: ce
  },
  marginLeft: {
    style: ce
  },
  marginX: {
    style: ce
  },
  marginY: {
    style: ce
  },
  marginInline: {
    style: ce
  },
  marginInlineStart: {
    style: ce
  },
  marginInlineEnd: {
    style: ce
  },
  marginBlock: {
    style: ce
  },
  marginBlockStart: {
    style: ce
  },
  marginBlockEnd: {
    style: ce
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
    style: $r
  },
  columnGap: {
    style: Sr
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
    style: go
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
}, Tr = Il;
function Bl(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function _l(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ll() {
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
    const d = xr(o, u) || {};
    return h ? h(a) : wt(a, r, (g) => {
      let f = Qn(d, c, g);
      return g === f && typeof g == "string" && (f = Qn(d, c, `${n}${g === "default" ? "" : X(g)}`, g)), l === !1 ? f : {
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
    const a = (r = i.unstable_sxConfig) != null ? r : Tr;
    function s(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const c = Ys(i.breakpoints), h = Object.keys(c);
      let d = c;
      return Object.keys(u).forEach((m) => {
        const g = _l(u[m], i);
        if (g != null)
          if (typeof g == "object")
            if (a[m])
              d = hn(d, e(m, g, i, a));
            else {
              const f = wt({
                theme: i
              }, g, (w) => ({
                [m]: w
              }));
              Bl(f, g) ? d[m] = t({
                sx: g,
                theme: i
              }) : d = hn(d, f);
            }
          else
            d = hn(d, e(m, g, i, a));
      }), Zs(h, d);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Qi = Ll();
Qi.filterProps = ["sx"];
const vo = Qi, Dl = ["breakpoints", "palette", "spacing", "shape"];
function yo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = re(e, Dl), s = Gs(n), l = ol(o);
  let u = Ye({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: v({
      mode: "light"
    }, r),
    spacing: l,
    shape: v({}, Xs, i)
  }, a);
  return u = t.reduce((c, h) => Ye(c, h), u), u.unstable_sxConfig = v({}, Tr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return vo({
      sx: h,
      theme: this
    });
  }, u;
}
function Nl(e) {
  return Object.keys(e).length === 0;
}
function bo(e = null) {
  const t = p.useContext(Tn);
  return !t || Nl(t) ? e : t;
}
const zl = yo();
function ea(e = zl) {
  return bo(e);
}
const jl = ["sx"], Fl = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Tr;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Wl(e) {
  const {
    sx: t
  } = e, n = re(e, jl), {
    systemProps: r,
    otherProps: o
  } = Fl(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return vt(s) ? v({}, r, s) : r;
  } : i = v({}, r, t), v({}, o, {
    sx: i
  });
}
function ta(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ta(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function se() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ta(e)) && (r && (r += " "), r += t);
  return r;
}
const Vl = ["variant"];
function Go(e) {
  return e.length === 0;
}
function na(e) {
  const {
    variant: t
  } = e, n = re(e, Vl);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += Go(r) ? e[o] : X(e[o]) : r += `${Go(r) ? o : X(o)}${X(e[o].toString())}`;
  }), r;
}
const Hl = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ul(e) {
  return Object.keys(e).length === 0;
}
function Kl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Gl = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, er = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = na(n.props);
    t[r] = n.style;
  }), t;
}, ql = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), er(n);
}, tr = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(t[na(i.props)]);
  }), o;
}, Xl = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return tr(e, t, i);
};
function Gn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Yl = yo(), Zl = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function qn({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Ul(t) ? e : t[n] || t;
}
function Jl(e) {
  return e ? (t, n) => n[e] : null;
}
const qo = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(v({}, t, {
    theme: qn(v({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = tr(t, er(i), i);
    return [o, ...a];
  }
  return o;
};
function Ql(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Yl,
    rootShouldForwardProp: r = Gn,
    slotShouldForwardProp: o = Gn
  } = e, i = (a) => vo(v({}, a, {
    theme: qn(v({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    Hs(a, (x) => x.filter(($) => !($ != null && $.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: c,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = Jl(Zl(u))
    } = s, m = re(s, Hl), g = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = h || !1;
    let w, S = Gn;
    u === "Root" || u === "root" ? S = r : u ? S = o : Kl(a) && (S = void 0);
    const R = Vs(a, v({
      shouldForwardProp: S,
      label: w
    }, m)), P = (x, ...$) => {
      const T = $ ? $.map((E) => {
        if (typeof E == "function" && E.__emotion_real !== E)
          return (O) => qo({
            styledArg: E,
            props: O,
            defaultTheme: n,
            themeId: t
          });
        if (vt(E)) {
          let O = E, j;
          return E && E.variants && (j = E.variants, delete O.variants, O = (F) => {
            let H = E;
            return tr(F, er(j), j).forEach((M) => {
              H = Ye(H, M);
            }), H;
          }), O;
        }
        return E;
      }) : [];
      let C = x;
      if (vt(x)) {
        let E;
        x && x.variants && (E = x.variants, delete C.variants, C = (O) => {
          let j = x;
          return tr(O, er(E), E).forEach((H) => {
            j = Ye(j, H);
          }), j;
        });
      } else
        typeof x == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        x.__emotion_real !== x && (C = (E) => qo({
          styledArg: x,
          props: E,
          defaultTheme: n,
          themeId: t
        }));
      l && d && T.push((E) => {
        const O = qn(v({}, E, {
          defaultTheme: n,
          themeId: t
        })), j = Gl(l, O);
        if (j) {
          const F = {};
          return Object.entries(j).forEach(([H, k]) => {
            F[H] = typeof k == "function" ? k(v({}, E, {
              theme: O
            })) : k;
          }), d(E, F);
        }
        return null;
      }), l && !g && T.push((E) => {
        const O = qn(v({}, E, {
          defaultTheme: n,
          themeId: t
        }));
        return Xl(E, ql(l, O), O, l);
      }), f || T.push(i);
      const N = T.length - $.length;
      if (Array.isArray(x) && N > 0) {
        const E = new Array(N).fill("");
        C = [...x, ...E], C.raw = [...x.raw, ...E];
      }
      const B = R(C, ...T);
      return a.muiName && (B.muiName = a.muiName), B;
    };
    return R.withConfig && (P.withConfig = R.withConfig), P;
  };
}
function ec(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : fo(t.components[n].defaultProps, r);
}
function tc({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = ea(n);
  return r && (o = o[r] || o), ec({
    theme: o,
    name: t,
    props: e
  });
}
function xo(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function nc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Dt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Dt(nc(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Lt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(Lt(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Pr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function rc(e) {
  e = Dt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Pr({
    type: s,
    values: l
  });
}
function Xo(e) {
  e = Dt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Dt(rc(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function oc(e, t) {
  const n = Xo(e), r = Xo(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ct(e, t) {
  return e = Dt(e), t = xo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Pr(e);
}
function Kr(e, t) {
  if (e = Dt(e), t = xo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Pr(e);
}
function Gr(e, t) {
  if (e = Dt(e), t = xo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Pr(e);
}
const ic = /* @__PURE__ */ p.createContext(null), ra = ic;
function oa() {
  return p.useContext(ra);
}
const ac = typeof Symbol == "function" && Symbol.for, sc = ac ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function lc(e, t) {
  return typeof t == "function" ? t(e) : v({}, e, t);
}
function cc(e) {
  const {
    children: t,
    theme: n
  } = e, r = oa(), o = p.useMemo(() => {
    const i = r === null ? n : lc(r, n);
    return i != null && (i[sc] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ z.jsx(ra.Provider, {
    value: o,
    children: t
  });
}
const Yo = {};
function Zo(e, t, n, r = !1) {
  return p.useMemo(() => {
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
function uc(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = bo(Yo), i = oa() || Yo, a = Zo(r, o, n), s = Zo(r, i, n, !0);
  return /* @__PURE__ */ z.jsx(cc, {
    theme: s,
    children: /* @__PURE__ */ z.jsx(Tn.Provider, {
      value: a,
      children: t
    })
  });
}
function fc(e, t) {
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
const pc = {
  black: "#000",
  white: "#fff"
}, Cn = pc, dc = {
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
}, hc = dc, mc = {
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
}, Vt = mc, gc = {
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
}, Ht = gc, vc = {
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
}, cn = vc, yc = {
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
}, Ut = yc, bc = {
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
}, Kt = bc, xc = {
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
}, Gt = xc, wc = ["mode", "contrastThreshold", "tonalOffset"], Jo = {
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
    paper: Cn.white,
    default: Cn.white
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
}, Lr = {
  text: {
    primary: Cn.white,
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
    active: Cn.white,
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
function Qo(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Gr(e.main, o) : t === "dark" && (e.dark = Kr(e.main, i)));
}
function Cc(e = "light") {
  return e === "dark" ? {
    main: Ut[200],
    light: Ut[50],
    dark: Ut[400]
  } : {
    main: Ut[700],
    light: Ut[400],
    dark: Ut[800]
  };
}
function Ec(e = "light") {
  return e === "dark" ? {
    main: Vt[200],
    light: Vt[50],
    dark: Vt[400]
  } : {
    main: Vt[500],
    light: Vt[300],
    dark: Vt[700]
  };
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: Ht[500],
    light: Ht[300],
    dark: Ht[700]
  } : {
    main: Ht[700],
    light: Ht[400],
    dark: Ht[800]
  };
}
function $c(e = "light") {
  return e === "dark" ? {
    main: Kt[400],
    light: Kt[300],
    dark: Kt[700]
  } : {
    main: Kt[700],
    light: Kt[500],
    dark: Kt[900]
  };
}
function Tc(e = "light") {
  return e === "dark" ? {
    main: Gt[400],
    light: Gt[300],
    dark: Gt[700]
  } : {
    main: Gt[800],
    light: Gt[500],
    dark: Gt[900]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: cn[400],
    light: cn[300],
    dark: cn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: cn[500],
    dark: cn[900]
  };
}
function Rc(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = re(e, wc), i = e.primary || Cc(t), a = e.secondary || Ec(t), s = e.error || Sc(t), l = e.info || $c(t), u = e.success || Tc(t), c = e.warning || Pc(t);
  function h(f) {
    return oc(f, Lr.text.primary) >= n ? Lr.text.primary : Jo.text.primary;
  }
  const d = ({
    color: f,
    name: w,
    mainShade: S = 500,
    lightShade: R = 300,
    darkShade: P = 700
  }) => {
    if (f = v({}, f), !f.main && f[S] && (f.main = f[S]), !f.hasOwnProperty("main"))
      throw new Error(Lt(11, w ? ` (${w})` : "", S));
    if (typeof f.main != "string")
      throw new Error(Lt(12, w ? ` (${w})` : "", JSON.stringify(f.main)));
    return Qo(f, "light", R, r), Qo(f, "dark", P, r), f.contrastText || (f.contrastText = h(f.main)), f;
  }, m = {
    dark: Lr,
    light: Jo
  };
  return Ye(v({
    // A collection of common colors.
    common: v({}, Cn),
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
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: hc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, m[t]), o);
}
const Oc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function kc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ei = {
  textTransform: "uppercase"
}, ti = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ac(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ti,
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
  } = n, d = re(n, Oc), m = o / 14, g = h || ((S) => `${S / u * m}rem`), f = (S, R, P, x, $) => v({
    fontFamily: r,
    fontWeight: S,
    fontSize: g(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P
  }, r === ti ? {
    letterSpacing: `${kc(x / R)}em`
  } : {}, $, c), w = {
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
    button: f(s, 14, 1.75, 0.4, ei),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, ei),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ye(v({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, w), d, {
    clone: !1
    // No need to clone deep
  });
}
const Mc = 0.2, Ic = 0.14, Bc = 0.12;
function ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ic})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Bc})`].join(",");
}
const _c = ["none", ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Lc = _c, Dc = ["duration", "easing", "delay"], Nc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, zc = {
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
function ni(e) {
  return `${Math.round(e)}ms`;
}
function jc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Fc(e) {
  const t = v({}, Nc, e.easing), n = v({}, zc, e.duration);
  return v({
    getAutoHeightDuration: jc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: s = t.easeInOut,
        delay: l = 0
      } = i;
      return re(i, Dc), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof a == "string" ? a : ni(a)} ${s} ${typeof l == "string" ? l : ni(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Wc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Vc = Wc, Hc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Uc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = re(e, Hc);
  if (e.vars)
    throw new Error(Lt(18));
  const s = Rc(r), l = yo(e);
  let u = Ye(l, {
    mixins: fc(l.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Lc.slice(),
    typography: Ac(s, i),
    transitions: Fc(o),
    zIndex: v({}, Vc)
  });
  return u = Ye(u, a), u = t.reduce((c, h) => Ye(c, h), u), u.unstable_sxConfig = v({}, Tr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(h) {
    return vo({
      sx: h,
      theme: this
    });
  }, u;
}
const Kc = Uc(), wo = Kc;
function ia() {
  const e = ea(wo);
  return e[wn] || e;
}
function Qe({
  props: e,
  name: t
}) {
  return tc({
    props: e,
    name: t,
    defaultTheme: wo,
    themeId: wn
  });
}
const aa = (e) => Gn(e) && e !== "classes", Gc = Ql({
  themeId: wn,
  defaultTheme: wo,
  rootShouldForwardProp: aa
}), ye = Gc, qc = ["theme"];
function wd(e) {
  let {
    theme: t
  } = e, n = re(e, qc);
  const r = t[wn];
  return /* @__PURE__ */ z.jsx(uc, v({}, n, {
    themeId: r ? wn : void 0,
    theme: r || t
  }));
}
const Xc = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ri = Xc;
function Yc(e) {
  return Ze("MuiSvgIcon", e);
}
Je("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Zc = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Jc = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`]
  };
  return dt(o, Yc, r);
}, Qc = ye("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${X(n.color)}`], t[`fontSize${X(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, a, s, l, u, c, h, d, m, g;
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
    color: (h = (d = (e.vars || e).palette) == null || (d = d[t.color]) == null ? void 0 : d.main) != null ? h : {
      action: (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), sa = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
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
    titleAccess: h,
    viewBox: d = "0 0 24 24"
  } = r, m = re(r, Zc), g = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", f = v({}, r, {
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: d,
    hasSvgAsChild: g
  }), w = {};
  c || (w.viewBox = d);
  const S = Jc(f);
  return /* @__PURE__ */ z.jsxs(Qc, v({
    as: s,
    className: se(S.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n
  }, w, m, g && o.props, {
    ownerState: f,
    children: [g ? o.props.children : o, h ? /* @__PURE__ */ z.jsx("title", {
      children: h
    }) : null]
  }));
});
sa.muiName = "SvgIcon";
const oi = sa;
function On(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ z.jsx(oi, v({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = oi.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function qr(e, t) {
  return qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, qr(e, t);
}
function la(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qr(e, t);
}
const ii = {
  disabled: !1
}, nr = yt.createContext(null);
var eu = function(t) {
  return t.scrollTop;
}, pn = "unmounted", Mt = "exited", It = "entering", Xt = "entered", Xr = "exiting", Et = /* @__PURE__ */ function(e) {
  la(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, s = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = Mt, i.appearStatus = It) : l = Xt : r.unmountOnExit || r.mountOnEnter ? l = pn : l = Mt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === pn ? {
      status: Mt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== It && a !== Xt && (i = It) : (a === It || a === Xt) && (i = Xr);
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
      if (this.cancelNextCallback(), i === It) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Dn.findDOMNode(this);
          a && eu(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Mt && this.setState({
        status: pn
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [s] : [Dn.findDOMNode(this), s], u = l[0], c = l[1], h = this.getTimeouts(), d = s ? h.appear : h.enter;
    if (!o && !a || ii.disabled) {
      this.safeSetState({
        status: Xt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: It
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: Xt
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : Dn.findDOMNode(this);
    if (!i || ii.disabled) {
      this.safeSetState({
        status: Mt
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Xr
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Mt
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
    if (o === pn)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = re(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ yt.createElement(nr.Provider, {
        value: null
      }, typeof a == "function" ? a(o, s) : yt.cloneElement(yt.Children.only(a), s))
    );
  }, t;
}(yt.Component);
Et.contextType = nr;
Et.propTypes = {};
function qt() {
}
Et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: qt,
  onEntering: qt,
  onEntered: qt,
  onExit: qt,
  onExiting: qt,
  onExited: qt
};
Et.UNMOUNTED = pn;
Et.EXITED = Mt;
Et.ENTERING = It;
Et.ENTERED = Xt;
Et.EXITING = Xr;
const tu = Et;
function nu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Co(e, t) {
  var n = function(i) {
    return t && p.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && p.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function ru(e, t) {
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
function Bt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function ou(e, t) {
  return Co(e.children, function(n) {
    return p.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Bt(n, "appear", e),
      enter: Bt(n, "enter", e),
      exit: Bt(n, "exit", e)
    });
  });
}
function iu(e, t, n) {
  var r = Co(e.children), o = ru(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (p.isValidElement(a)) {
      var s = i in t, l = i in r, u = t[i], c = p.isValidElement(u) && !u.props.in;
      l && (!s || c) ? o[i] = p.cloneElement(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Bt(a, "exit", e),
        enter: Bt(a, "enter", e)
      }) : !l && s && !c ? o[i] = p.cloneElement(a, {
        in: !1
      }) : l && s && p.isValidElement(u) && (o[i] = p.cloneElement(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Bt(a, "exit", e),
        enter: Bt(a, "enter", e)
      }));
    }
  }), o;
}
var au = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, su = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Eo = /* @__PURE__ */ function(e) {
  la(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(nu(i));
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
      children: l ? ou(o, s) : iu(o, a, s),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = Co(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = v({}, s.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = re(o, ["component", "childFactory"]), l = this.state.contextValue, u = au(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ yt.createElement(nr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ yt.createElement(nr.Provider, {
      value: l
    }, /* @__PURE__ */ yt.createElement(i, s, u));
  }, t;
}(yt.Component);
Eo.propTypes = {};
Eo.defaultProps = su;
const lu = Eo, cu = (e) => e.scrollTop;
function ai(e, t) {
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
function uu(e) {
  return Ze("MuiPaper", e);
}
Je("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const fu = ["className", "component", "elevation", "square", "variant"], pu = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return dt(i, uu, o);
}, du = ye("div", {
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
    backgroundImage: `linear-gradient(${ct("#fff", ri(t.elevation))}, ${ct("#fff", ri(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), hu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: a = 1,
    square: s = !1,
    variant: l = "elevation"
  } = r, u = re(r, fu), c = v({}, r, {
    component: i,
    elevation: a,
    square: s,
    variant: l
  }), h = pu(c);
  return /* @__PURE__ */ z.jsx(du, v({
    as: i,
    ownerState: c,
    className: se(h.root, o),
    ref: n
  }, u));
}), mu = hu;
function gu(e) {
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
  } = e, [c, h] = p.useState(!1), d = se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), m = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = se(n.child, c && n.childLeaving, r && n.childPulsate);
  return !s && !c && h(!0), p.useEffect(() => {
    if (!s && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, s, u]), /* @__PURE__ */ z.jsx("span", {
    className: d,
    style: m,
    children: /* @__PURE__ */ z.jsx("span", {
      className: g
    })
  });
}
const vu = Je("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ve = vu, yu = ["center", "classes", "className"];
let Rr = (e) => e, si, li, ci, ui;
const Yr = 550, bu = 80, xu = uo(si || (si = Rr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), wu = uo(li || (li = Rr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Cu = uo(ci || (ci = Rr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Eu = ye("span", {
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
}), Su = ye(gu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ui || (ui = Rr`
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
`), Ve.rippleVisible, xu, Yr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ve.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ve.child, Ve.childLeaving, wu, Yr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ve.childPulsate, Cu, ({
  theme: e
}) => e.transitions.easing.easeInOut), $u = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, s = re(r, yu), [l, u] = p.useState([]), c = p.useRef(0), h = p.useRef(null);
  p.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const d = p.useRef(!1), m = p.useRef(0), g = p.useRef(null), f = p.useRef(null);
  p.useEffect(() => () => {
    m.current && clearTimeout(m.current);
  }, []);
  const w = p.useCallback((x) => {
    const {
      pulsate: $,
      rippleX: T,
      rippleY: C,
      rippleSize: N,
      cb: B
    } = x;
    u((E) => [...E, /* @__PURE__ */ z.jsx(Su, {
      classes: {
        ripple: se(i.ripple, Ve.ripple),
        rippleVisible: se(i.rippleVisible, Ve.rippleVisible),
        ripplePulsate: se(i.ripplePulsate, Ve.ripplePulsate),
        child: se(i.child, Ve.child),
        childLeaving: se(i.childLeaving, Ve.childLeaving),
        childPulsate: se(i.childPulsate, Ve.childPulsate)
      },
      timeout: Yr,
      pulsate: $,
      rippleX: T,
      rippleY: C,
      rippleSize: N
    }, c.current)]), c.current += 1, h.current = B;
  }, [i]), S = p.useCallback((x = {}, $ = {}, T = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: N = o || $.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = $;
    if ((x == null ? void 0 : x.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (d.current = !0);
    const E = B ? null : f.current, O = E ? E.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, F, H;
    if (N || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      j = Math.round(O.width / 2), F = Math.round(O.height / 2);
    else {
      const {
        clientX: k,
        clientY: M
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      j = Math.round(k - O.left), F = Math.round(M - O.top);
    }
    if (N)
      H = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), H % 2 === 0 && (H += 1);
    else {
      const k = Math.max(Math.abs((E ? E.clientWidth : 0) - j), j) * 2 + 2, M = Math.max(Math.abs((E ? E.clientHeight : 0) - F), F) * 2 + 2;
      H = Math.sqrt(k ** 2 + M ** 2);
    }
    x != null && x.touches ? g.current === null && (g.current = () => {
      w({
        pulsate: C,
        rippleX: j,
        rippleY: F,
        rippleSize: H,
        cb: T
      });
    }, m.current = setTimeout(() => {
      g.current && (g.current(), g.current = null);
    }, bu)) : w({
      pulsate: C,
      rippleX: j,
      rippleY: F,
      rippleSize: H,
      cb: T
    });
  }, [o, w]), R = p.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), P = p.useCallback((x, $) => {
    if (clearTimeout(m.current), (x == null ? void 0 : x.type) === "touchend" && g.current) {
      g.current(), g.current = null, m.current = setTimeout(() => {
        P(x, $);
      });
      return;
    }
    g.current = null, u((T) => T.length > 0 ? T.slice(1) : T), h.current = $;
  }, []);
  return p.useImperativeHandle(n, () => ({
    pulsate: R,
    start: S,
    stop: P
  }), [R, S, P]), /* @__PURE__ */ z.jsx(Eu, v({
    className: se(Ve.root, i.root, a),
    ref: f
  }, s, {
    children: /* @__PURE__ */ z.jsx(lu, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), Tu = $u;
function Pu(e) {
  return Ze("MuiButtonBase", e);
}
const Ru = Je("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ou = Ru, ku = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Au = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = dt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Pu, o);
  return n && r && (a.root += ` ${r}`), a;
}, Mu = ye("button", {
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
  [`&.${Ou.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Iu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
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
    focusRipple: d = !1,
    LinkComponent: m = "a",
    onBlur: g,
    onClick: f,
    onContextMenu: w,
    onDragLeave: S,
    onFocus: R,
    onFocusVisible: P,
    onKeyDown: x,
    onKeyUp: $,
    onMouseDown: T,
    onMouseLeave: C,
    onMouseUp: N,
    onTouchEnd: B,
    onTouchMove: E,
    onTouchStart: O,
    tabIndex: j = 0,
    TouchRippleProps: F,
    touchRippleRef: H,
    type: k
  } = r, M = re(r, ku), _ = p.useRef(null), V = p.useRef(null), te = xt(V, H), {
    isFocusVisibleRef: le,
    onFocus: et,
    onBlur: Ge,
    ref: fe
  } = Yi(), [K, ge] = p.useState(!1);
  u && K && ge(!1), p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ge(!0), _.current.focus();
    }
  }), []);
  const [Ce, ne] = p.useState(!1);
  p.useEffect(() => {
    ne(!0);
  }, []);
  const J = Ce && !c && !u;
  p.useEffect(() => {
    K && d && !c && Ce && V.current.pulsate();
  }, [c, d, K, Ce]);
  function oe(L, $e, rt = h) {
    return bt((ot) => ($e && $e(ot), !rt && V.current && V.current[L](ot), !0));
  }
  const tt = oe("start", T), ie = oe("stop", w), ht = oe("stop", S), mt = oe("stop", N), he = oe("stop", (L) => {
    K && L.preventDefault(), C && C(L);
  }), I = oe("start", O), nt = oe("stop", B), U = oe("stop", E), ke = oe("stop", (L) => {
    Ge(L), le.current === !1 && ge(!1), g && g(L);
  }, !1), qe = bt((L) => {
    _.current || (_.current = L.currentTarget), et(L), le.current === !0 && (ge(!0), P && P(L)), R && R(L);
  }), be = () => {
    const L = _.current;
    return l && l !== "button" && !(L.tagName === "A" && L.href);
  }, Pe = p.useRef(!1), Ee = bt((L) => {
    d && !Pe.current && K && V.current && L.key === " " && (Pe.current = !0, V.current.stop(L, () => {
      V.current.start(L);
    })), L.target === L.currentTarget && be() && L.key === " " && L.preventDefault(), x && x(L), L.target === L.currentTarget && be() && L.key === "Enter" && !u && (L.preventDefault(), f && f(L));
  }), Xe = bt((L) => {
    d && L.key === " " && V.current && K && !L.defaultPrevented && (Pe.current = !1, V.current.stop(L, () => {
      V.current.pulsate(L);
    })), $ && $(L), f && L.target === L.currentTarget && be() && L.key === " " && !L.defaultPrevented && f(L);
  });
  let Re = l;
  Re === "button" && (M.href || M.to) && (Re = m);
  const Se = {};
  Re === "button" ? (Se.type = k === void 0 ? "button" : k, Se.disabled = u) : (!M.href && !M.to && (Se.role = "button"), u && (Se["aria-disabled"] = u));
  const Oe = xt(n, fe, _), pe = v({}, r, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: h,
    focusRipple: d,
    tabIndex: j,
    focusVisible: K
  }), Q = Au(pe);
  return /* @__PURE__ */ z.jsxs(Mu, v({
    as: Re,
    className: se(Q.root, s),
    ownerState: pe,
    onBlur: ke,
    onClick: f,
    onContextMenu: ie,
    onFocus: qe,
    onKeyDown: Ee,
    onKeyUp: Xe,
    onMouseDown: tt,
    onMouseLeave: he,
    onMouseUp: mt,
    onDragLeave: ht,
    onTouchEnd: nt,
    onTouchMove: U,
    onTouchStart: I,
    ref: Oe,
    tabIndex: u ? -1 : j,
    type: k
  }, Se, M, {
    children: [a, J ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ z.jsx(Tu, v({
        ref: te,
        center: i
      }, F))
    ) : null]
  }));
}), ca = Iu;
function Bu(e) {
  return Ze("MuiAlert", e);
}
const _u = Je("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), fi = _u;
function Lu(e) {
  return Ze("MuiIconButton", e);
}
const Du = Je("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Nu = Du, zu = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], ju = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${X(r)}`, o && `edge${X(o)}`, `size${X(i)}`]
  };
  return dt(a, Lu, t);
}, Fu = ye(ca, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${X(n.color)}`], n.edge && t[`edge${X(n.edge)}`], t[`size${X(n.size)}`]];
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette.action.active, e.palette.action.hoverOpacity),
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
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(r.main, e.palette.action.hoverOpacity)
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
    [`&.${Nu.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Wu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
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
  } = r, h = re(r, zu), d = v({}, r, {
    edge: o,
    color: s,
    disabled: l,
    disableFocusRipple: u,
    size: c
  }), m = ju(d);
  return /* @__PURE__ */ z.jsx(Fu, v({
    className: se(m.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ownerState: d
  }, h, {
    children: i
  }));
}), Vu = Wu, Hu = On(/* @__PURE__ */ z.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Uu = On(/* @__PURE__ */ z.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), Ku = On(/* @__PURE__ */ z.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), Gu = On(/* @__PURE__ */ z.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), qu = On(/* @__PURE__ */ z.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Xu = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], Yu = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `${t}${X(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return dt(i, Bu, o);
}, Zu = ye(mu, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${X(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? Kr : Gr, r = e.palette.mode === "light" ? Gr : Kr, o = t.color || t.severity;
  return v({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, o && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9),
    [`& .${fi.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[o].light}`,
    [`& .${fi.icon}`]: e.vars ? {
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
}), Ju = ye("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Qu = ye("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), pi = ye("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), di = {
  success: /* @__PURE__ */ z.jsx(Hu, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ z.jsx(Uu, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ z.jsx(Ku, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ z.jsx(Gu, {
    fontSize: "inherit"
  })
}, ef = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, o, i, a, s, l;
  const u = Qe({
    props: t,
    name: "MuiAlert"
  }), {
    action: c,
    children: h,
    className: d,
    closeText: m = "Close",
    color: g,
    components: f = {},
    componentsProps: w = {},
    icon: S,
    iconMapping: R = di,
    onClose: P,
    role: x = "alert",
    severity: $ = "success",
    slotProps: T = {},
    slots: C = {},
    variant: N = "standard"
  } = u, B = re(u, Xu), E = v({}, u, {
    color: g,
    severity: $,
    variant: N
  }), O = Yu(E), j = (r = (o = C.closeButton) != null ? o : f.CloseButton) != null ? r : Vu, F = (i = (a = C.closeIcon) != null ? a : f.CloseIcon) != null ? i : qu, H = (s = T.closeButton) != null ? s : w.closeButton, k = (l = T.closeIcon) != null ? l : w.closeIcon;
  return /* @__PURE__ */ z.jsxs(Zu, v({
    role: x,
    elevation: 0,
    ownerState: E,
    className: se(O.root, d),
    ref: n
  }, B, {
    children: [S !== !1 ? /* @__PURE__ */ z.jsx(Ju, {
      ownerState: E,
      className: O.icon,
      children: S || R[$] || di[$]
    }) : null, /* @__PURE__ */ z.jsx(Qu, {
      ownerState: E,
      className: O.message,
      children: h
    }), c != null ? /* @__PURE__ */ z.jsx(pi, {
      ownerState: E,
      className: O.action,
      children: c
    }) : null, c == null && P ? /* @__PURE__ */ z.jsx(pi, {
      ownerState: E,
      className: O.action,
      children: /* @__PURE__ */ z.jsx(j, v({
        size: "small",
        "aria-label": m,
        title: m,
        color: "inherit",
        onClick: P
      }, H, {
        children: /* @__PURE__ */ z.jsx(F, v({
          fontSize: "small"
        }, k))
      }))
    }) : null]
  }));
}), Cd = ef;
function tf(e) {
  return Ze("MuiTypography", e);
}
Je("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const nf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], rf = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${X(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return dt(s, tf, a);
}, of = ye("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${X(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
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
})), hi = {
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
}, af = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, sf = (e) => af[e] || e, lf = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
    props: t,
    name: "MuiTypography"
  }), o = sf(r.color), i = Wl(v({}, r, {
    color: o
  })), {
    align: a = "inherit",
    className: s,
    component: l,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: h = !1,
    variant: d = "body1",
    variantMapping: m = hi
  } = i, g = re(i, nf), f = v({}, i, {
    align: a,
    color: o,
    className: s,
    component: l,
    gutterBottom: u,
    noWrap: c,
    paragraph: h,
    variant: d,
    variantMapping: m
  }), w = l || (h ? "p" : m[d] || hi[d]) || "span", S = rf(f);
  return /* @__PURE__ */ z.jsx(of, v({
    as: w,
    ref: n,
    ownerState: f,
    className: se(S.root, s)
  }, g));
}), cf = lf;
function uf(e) {
  return Ze("MuiAlertTitle", e);
}
Je("MuiAlertTitle", ["root"]);
const ff = ["className"], pf = (e) => {
  const {
    classes: t
  } = e;
  return dt({
    root: ["root"]
  }, uf, t);
}, df = ye(cf, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), hf = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = Qe({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: o
  } = r, i = re(r, ff), a = r, s = pf(a);
  return /* @__PURE__ */ z.jsx(df, v({
    gutterBottom: !0,
    component: "div",
    ownerState: a,
    ref: n,
    className: se(s.root, o)
  }, i));
}), Ed = hf;
function mf(e) {
  return typeof e == "string";
}
function dn(e, t, n) {
  return e === void 0 || mf(e) ? t : v({}, t, {
    ownerState: v({}, t.ownerState, n)
  });
}
const gf = {
  disableDefaultClasses: !1
}, vf = /* @__PURE__ */ p.createContext(gf);
function yf(e) {
  const {
    disableDefaultClasses: t
  } = p.useContext(vf);
  return (n) => t ? "" : e(n);
}
function Xn(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function bf(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function mi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function xf(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const m = se(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = v({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = v({}, n, o, r);
    return m.length > 0 && (f.className = m), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Xn(v({}, o, r)), s = mi(r), l = mi(o), u = t(a), c = se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = v({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), d = v({}, u, n, l, s);
  return c.length > 0 && (d.className = c), Object.keys(h).length > 0 && (d.style = h), {
    props: d,
    internalRef: u.ref
  };
}
const wf = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Cf(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = re(e, wf), s = i ? {} : bf(r, o), {
    props: l,
    internalRef: u
  } = xf(v({}, a, {
    externalSlotProps: s
  })), c = xt(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return dn(n, v({}, l, {
    ref: c
  }), o);
}
const Ef = /* @__PURE__ */ p.createContext(void 0);
function Sf() {
  return p.useContext(Ef);
}
function Sd(e = {}) {
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
  } = e, c = Sf();
  let h, d, m, g, f;
  if (c) {
    var w, S, R;
    h = void 0, d = (w = c.disabled) != null ? w : !1, m = (S = c.error) != null ? S : !1, g = (R = c.required) != null ? R : !1, f = c.value;
  } else
    h = t, d = n, m = r, g = s, f = l;
  const {
    current: P
  } = p.useRef(f != null), x = p.useCallback((k) => {
  }, []), $ = p.useRef(null), T = xt($, u, x), [C, N] = p.useState(!1);
  p.useEffect(() => {
    !c && d && C && (N(!1), o == null || o());
  }, [c, d, C, o]);
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
      N(!0);
  }, E = (k) => (M) => {
    var _;
    (_ = k.onBlur) == null || _.call(k, M), c && c.onBlur ? c.onBlur() : N(!1);
  }, O = (k) => (M, ..._) => {
    var V, te;
    if (!P && (M.target || $.current) == null)
      throw new Error(Lt(17));
    c == null || (V = c.onChange) == null || V.call(c, M), (te = k.onChange) == null || te.call(k, M, ..._);
  }, j = (k) => (M) => {
    var _;
    $.current && M.currentTarget === M.target && $.current.focus(), (_ = k.onClick) == null || _.call(k, M);
  };
  return {
    disabled: d,
    error: m,
    focused: C,
    formControlContext: c,
    getInputProps: (k = {}) => {
      const _ = v({}, {
        onBlur: o,
        onChange: i,
        onFocus: a
      }, Xn(k)), V = v({}, _, {
        onBlur: E(_),
        onChange: O(_),
        onFocus: B(_)
      });
      return v({}, V, {
        "aria-invalid": m || void 0,
        defaultValue: h,
        value: f,
        required: g,
        disabled: d
      }, k, {
        ref: T
      }, V);
    },
    getRootProps: (k = {}) => {
      const M = Xn(e, ["onBlur", "onChange", "onFocus"]), _ = v({}, M, Xn(k));
      return v({}, k, _, {
        onClick: j(_)
      });
    },
    inputRef: T,
    required: g,
    value: f
  };
}
var Ae = "top", Ue = "bottom", Ke = "right", Me = "left", So = "auto", kn = [Ae, Ue, Ke, Me], Qt = "start", En = "end", $f = "clippingParents", ua = "viewport", un = "popper", Tf = "reference", gi = /* @__PURE__ */ kn.reduce(function(e, t) {
  return e.concat([t + "-" + Qt, t + "-" + En]);
}, []), fa = /* @__PURE__ */ [].concat(kn, [So]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qt, t + "-" + En]);
}, []), Pf = "beforeRead", Rf = "read", Of = "afterRead", kf = "beforeMain", Af = "main", Mf = "afterMain", If = "beforeWrite", Bf = "write", _f = "afterWrite", Lf = [Pf, Rf, Of, kf, Af, Mf, If, Bf, _f];
function pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ze(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nt(e) {
  var t = ze(e).Element;
  return e instanceof t || e instanceof Element;
}
function He(e) {
  var t = ze(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $o(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ze(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Df(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !He(i) || !pt(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Nf(e) {
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
      !He(o) || !pt(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const zf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Df,
  effect: Nf,
  requires: ["computeStyles"]
};
function ft(e) {
  return e.split("-")[0];
}
var _t = Math.max, rr = Math.min, en = Math.round;
function Zr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pa() {
  return !/^((?!chrome|android).)*safari/i.test(Zr());
}
function tn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && He(e) && (o = e.offsetWidth > 0 && en(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && en(r.height) / e.offsetHeight || 1);
  var a = Nt(e) ? ze(e) : window, s = a.visualViewport, l = !pa() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, h = r.width / o, d = r.height / i;
  return {
    width: h,
    height: d,
    top: c,
    right: u + h,
    bottom: c + d,
    left: u,
    x: u,
    y: c
  };
}
function To(e) {
  var t = tn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function da(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && $o(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ct(e) {
  return ze(e).getComputedStyle(e);
}
function jf(e) {
  return ["table", "td", "th"].indexOf(pt(e)) >= 0;
}
function Pt(e) {
  return ((Nt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Or(e) {
  return pt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($o(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Pt(e)
  );
}
function vi(e) {
  return !He(e) || // https://github.com/popperjs/popper-core/issues/837
  Ct(e).position === "fixed" ? null : e.offsetParent;
}
function Ff(e) {
  var t = /firefox/i.test(Zr()), n = /Trident/i.test(Zr());
  if (n && He(e)) {
    var r = Ct(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Or(e);
  for ($o(o) && (o = o.host); He(o) && ["html", "body"].indexOf(pt(o)) < 0; ) {
    var i = Ct(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function An(e) {
  for (var t = ze(e), n = vi(e); n && jf(n) && Ct(n).position === "static"; )
    n = vi(n);
  return n && (pt(n) === "html" || pt(n) === "body" && Ct(n).position === "static") ? t : n || Ff(e) || t;
}
function Po(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mn(e, t, n) {
  return _t(e, rr(t, n));
}
function Wf(e, t, n) {
  var r = mn(e, t, n);
  return r > n ? n : r;
}
function ha() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ma(e) {
  return Object.assign({}, ha(), e);
}
function ga(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Vf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ma(typeof t != "number" ? t : ga(t, kn));
};
function Hf(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = ft(n.placement), l = Po(s), u = [Me, Ke].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var h = Vf(o.padding, n), d = To(i), m = l === "y" ? Ae : Me, g = l === "y" ? Ue : Ke, f = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], w = a[l] - n.rects.reference[l], S = An(i), R = S ? l === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, P = f / 2 - w / 2, x = h[m], $ = R - d[c] - h[g], T = R / 2 - d[c] / 2 + P, C = mn(x, T, $), N = l;
    n.modifiersData[r] = (t = {}, t[N] = C, t.centerOffset = C - T, t);
  }
}
function Uf(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || da(t.elements.popper, o) && (t.elements.arrow = o));
}
const Kf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Hf,
  effect: Uf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function nn(e) {
  return e.split("-")[1];
}
var Gf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qf(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: en(n * o) / o || 0,
    y: en(r * o) / o || 0
  };
}
function yi(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, h = e.isFixed, d = a.x, m = d === void 0 ? 0 : d, g = a.y, f = g === void 0 ? 0 : g, w = typeof c == "function" ? c({
    x: m,
    y: f
  }) : {
    x: m,
    y: f
  };
  m = w.x, f = w.y;
  var S = a.hasOwnProperty("x"), R = a.hasOwnProperty("y"), P = Me, x = Ae, $ = window;
  if (u) {
    var T = An(n), C = "clientHeight", N = "clientWidth";
    if (T === ze(n) && (T = Pt(n), Ct(T).position !== "static" && s === "absolute" && (C = "scrollHeight", N = "scrollWidth")), T = T, o === Ae || (o === Me || o === Ke) && i === En) {
      x = Ue;
      var B = h && T === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[C]
      );
      f -= B - r.height, f *= l ? 1 : -1;
    }
    if (o === Me || (o === Ae || o === Ue) && i === En) {
      P = Ke;
      var E = h && T === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[N]
      );
      m -= E - r.width, m *= l ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: s
  }, u && Gf), j = c === !0 ? qf({
    x: m,
    y: f
  }, ze(n)) : {
    x: m,
    y: f
  };
  if (m = j.x, f = j.y, l) {
    var F;
    return Object.assign({}, O, (F = {}, F[x] = R ? "0" : "", F[P] = S ? "0" : "", F.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + f + "px)" : "translate3d(" + m + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, O, (t = {}, t[x] = R ? f + "px" : "", t[P] = S ? m + "px" : "", t.transform = "", t));
}
function Xf(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: ft(t.placement),
    variation: nn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yi(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yi(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Yf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xf,
  data: {}
};
var zn = {
  passive: !0
};
function Zf(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = ze(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, zn);
  }), s && l.addEventListener("resize", n.update, zn), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, zn);
    }), s && l.removeEventListener("resize", n.update, zn);
  };
}
const Jf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zf,
  data: {}
};
var Qf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qf[t];
  });
}
var ep = {
  start: "end",
  end: "start"
};
function bi(e) {
  return e.replace(/start|end/g, function(t) {
    return ep[t];
  });
}
function Ro(e) {
  var t = ze(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Oo(e) {
  return tn(Pt(e)).left + Ro(e).scrollLeft;
}
function tp(e, t) {
  var n = ze(e), r = Pt(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = pa();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Oo(e),
    y: l
  };
}
function np(e) {
  var t, n = Pt(e), r = Ro(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = _t(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = _t(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Oo(e), l = -r.scrollTop;
  return Ct(o || n).direction === "rtl" && (s += _t(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function ko(e) {
  var t = Ct(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function va(e) {
  return ["html", "body", "#document"].indexOf(pt(e)) >= 0 ? e.ownerDocument.body : He(e) && ko(e) ? e : va(Or(e));
}
function gn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = va(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ze(r), a = o ? [i].concat(i.visualViewport || [], ko(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(gn(Or(a)))
  );
}
function Jr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rp(e, t) {
  var n = tn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function xi(e, t, n) {
  return t === ua ? Jr(tp(e, n)) : Nt(t) ? rp(t, n) : Jr(np(Pt(e)));
}
function op(e) {
  var t = gn(Or(e)), n = ["absolute", "fixed"].indexOf(Ct(e).position) >= 0, r = n && He(e) ? An(e) : e;
  return Nt(r) ? t.filter(function(o) {
    return Nt(o) && da(o, r) && pt(o) !== "body";
  }) : [];
}
function ip(e, t, n, r) {
  var o = t === "clippingParents" ? op(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = xi(e, u, r);
    return l.top = _t(c.top, l.top), l.right = rr(c.right, l.right), l.bottom = rr(c.bottom, l.bottom), l.left = _t(c.left, l.left), l;
  }, xi(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ya(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ft(r) : null, i = r ? nn(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Ae:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ue:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ke:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Me:
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
  var u = o ? Po(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Qt:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case En:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Sn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? $f : s, u = n.rootBoundary, c = u === void 0 ? ua : u, h = n.elementContext, d = h === void 0 ? un : h, m = n.altBoundary, g = m === void 0 ? !1 : m, f = n.padding, w = f === void 0 ? 0 : f, S = ma(typeof w != "number" ? w : ga(w, kn)), R = d === un ? Tf : un, P = e.rects.popper, x = e.elements[g ? R : d], $ = ip(Nt(x) ? x : x.contextElement || Pt(e.elements.popper), l, c, a), T = tn(e.elements.reference), C = ya({
    reference: T,
    element: P,
    strategy: "absolute",
    placement: o
  }), N = Jr(Object.assign({}, P, C)), B = d === un ? N : T, E = {
    top: $.top - B.top + S.top,
    bottom: B.bottom - $.bottom + S.bottom,
    left: $.left - B.left + S.left,
    right: B.right - $.right + S.right
  }, O = e.modifiersData.offset;
  if (d === un && O) {
    var j = O[o];
    Object.keys(E).forEach(function(F) {
      var H = [Ke, Ue].indexOf(F) >= 0 ? 1 : -1, k = [Ae, Ue].indexOf(F) >= 0 ? "y" : "x";
      E[F] += j[k] * H;
    });
  }
  return E;
}
function ap(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? fa : l, c = nn(r), h = c ? s ? gi : gi.filter(function(g) {
    return nn(g) === c;
  }) : kn, d = h.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  d.length === 0 && (d = h);
  var m = d.reduce(function(g, f) {
    return g[f] = Sn(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[ft(f)], g;
  }, {});
  return Object.keys(m).sort(function(g, f) {
    return m[g] - m[f];
  });
}
function sp(e) {
  if (ft(e) === So)
    return [];
  var t = Yn(e);
  return [bi(e), t, bi(t)];
}
function lp(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, h = n.rootBoundary, d = n.altBoundary, m = n.flipVariations, g = m === void 0 ? !0 : m, f = n.allowedAutoPlacements, w = t.options.placement, S = ft(w), R = S === w, P = l || (R || !g ? [Yn(w)] : sp(w)), x = [w].concat(P).reduce(function(K, ge) {
      return K.concat(ft(ge) === So ? ap(t, {
        placement: ge,
        boundary: c,
        rootBoundary: h,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: f
      }) : ge);
    }, []), $ = t.rects.reference, T = t.rects.popper, C = /* @__PURE__ */ new Map(), N = !0, B = x[0], E = 0; E < x.length; E++) {
      var O = x[E], j = ft(O), F = nn(O) === Qt, H = [Ae, Ue].indexOf(j) >= 0, k = H ? "width" : "height", M = Sn(t, {
        placement: O,
        boundary: c,
        rootBoundary: h,
        altBoundary: d,
        padding: u
      }), _ = H ? F ? Ke : Me : F ? Ue : Ae;
      $[k] > T[k] && (_ = Yn(_));
      var V = Yn(_), te = [];
      if (i && te.push(M[j] <= 0), s && te.push(M[_] <= 0, M[V] <= 0), te.every(function(K) {
        return K;
      })) {
        B = O, N = !1;
        break;
      }
      C.set(O, te);
    }
    if (N)
      for (var le = g ? 3 : 1, et = function(ge) {
        var Ce = x.find(function(ne) {
          var J = C.get(ne);
          if (J)
            return J.slice(0, ge).every(function(oe) {
              return oe;
            });
        });
        if (Ce)
          return B = Ce, "break";
      }, Ge = le; Ge > 0; Ge--) {
        var fe = et(Ge);
        if (fe === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[r]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const cp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: lp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wi(e, t, n) {
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
function Ci(e) {
  return [Ae, Ke, Ue, Me].some(function(t) {
    return e[t] >= 0;
  });
}
function up(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Sn(t, {
    elementContext: "reference"
  }), s = Sn(t, {
    altBoundary: !0
  }), l = wi(a, r), u = wi(s, o, i), c = Ci(l), h = Ci(u);
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
const fp = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: up
};
function pp(e, t, n) {
  var r = ft(e), o = [Me, Ae].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Me, Ke].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function dp(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = fa.reduce(function(c, h) {
    return c[h] = pp(h, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const hp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: dp
};
function mp(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ya({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: mp,
  data: {}
};
function vp(e) {
  return e === "x" ? "y" : "x";
}
function yp(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, h = n.padding, d = n.tether, m = d === void 0 ? !0 : d, g = n.tetherOffset, f = g === void 0 ? 0 : g, w = Sn(t, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: c
  }), S = ft(t.placement), R = nn(t.placement), P = !R, x = Po(S), $ = vp(x), T = t.modifiersData.popperOffsets, C = t.rects.reference, N = t.rects.popper, B = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, E = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (T) {
    if (i) {
      var F, H = x === "y" ? Ae : Me, k = x === "y" ? Ue : Ke, M = x === "y" ? "height" : "width", _ = T[x], V = _ + w[H], te = _ - w[k], le = m ? -N[M] / 2 : 0, et = R === Qt ? C[M] : N[M], Ge = R === Qt ? -N[M] : -C[M], fe = t.elements.arrow, K = m && fe ? To(fe) : {
        width: 0,
        height: 0
      }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ha(), Ce = ge[H], ne = ge[k], J = mn(0, C[M], K[M]), oe = P ? C[M] / 2 - le - J - Ce - E.mainAxis : et - J - Ce - E.mainAxis, tt = P ? -C[M] / 2 + le + J + ne + E.mainAxis : Ge + J + ne + E.mainAxis, ie = t.elements.arrow && An(t.elements.arrow), ht = ie ? x === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, mt = (F = O == null ? void 0 : O[x]) != null ? F : 0, he = _ + oe - mt - ht, I = _ + tt - mt, nt = mn(m ? rr(V, he) : V, _, m ? _t(te, I) : te);
      T[x] = nt, j[x] = nt - _;
    }
    if (s) {
      var U, ke = x === "x" ? Ae : Me, qe = x === "x" ? Ue : Ke, be = T[$], Pe = $ === "y" ? "height" : "width", Ee = be + w[ke], Xe = be - w[qe], Re = [Ae, Me].indexOf(S) !== -1, Se = (U = O == null ? void 0 : O[$]) != null ? U : 0, Oe = Re ? Ee : be - C[Pe] - N[Pe] - Se + E.altAxis, pe = Re ? be + C[Pe] + N[Pe] - Se - E.altAxis : Xe, Q = m && Re ? Wf(Oe, be, pe) : mn(m ? Oe : Ee, be, m ? pe : Xe);
      T[$] = Q, j[$] = Q - be;
    }
    t.modifiersData[r] = j;
  }
}
const bp = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yp,
  requiresIfExists: ["offset"]
};
function xp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wp(e) {
  return e === ze(e) || !He(e) ? Ro(e) : xp(e);
}
function Cp(e) {
  var t = e.getBoundingClientRect(), n = en(t.width) / e.offsetWidth || 1, r = en(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Ep(e, t, n) {
  n === void 0 && (n = !1);
  var r = He(t), o = He(t) && Cp(t), i = Pt(t), a = tn(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((pt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ko(i)) && (s = wp(t)), He(t) ? (l = tn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Oo(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function Sp(e) {
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
function $p(e) {
  var t = Sp(e);
  return Lf.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Tp(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Pp(e) {
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
var Ei = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Si() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Rp(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Ei : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ei, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], d = !1, m = {
      state: c,
      setOptions: function(S) {
        var R = typeof S == "function" ? S(c.options) : S;
        f(), c.options = Object.assign({}, i, c.options, R), c.scrollParents = {
          reference: Nt(s) ? gn(s) : s.contextElement ? gn(s.contextElement) : [],
          popper: gn(l)
        };
        var P = $p(Pp([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = P.filter(function(x) {
          return x.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var S = c.elements, R = S.reference, P = S.popper;
          if (Si(R, P)) {
            c.rects = {
              reference: Ep(R, An(P), c.options.strategy === "fixed"),
              popper: To(P)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(E) {
              return c.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var $ = c.orderedModifiers[x], T = $.fn, C = $.options, N = C === void 0 ? {} : C, B = $.name;
              typeof T == "function" && (c = T({
                state: c,
                options: N,
                name: B,
                instance: m
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Tp(function() {
        return new Promise(function(w) {
          m.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        f(), d = !0;
      }
    };
    if (!Si(s, l))
      return m;
    m.setOptions(u).then(function(w) {
      !d && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function g() {
      c.orderedModifiers.forEach(function(w) {
        var S = w.name, R = w.options, P = R === void 0 ? {} : R, x = w.effect;
        if (typeof x == "function") {
          var $ = x({
            state: c,
            name: S,
            instance: m,
            options: P
          }), T = function() {
          };
          h.push($ || T);
        }
      });
    }
    function f() {
      h.forEach(function(w) {
        return w();
      }), h = [];
    }
    return m;
  };
}
var Op = [Jf, gp, Yf, zf, hp, cp, bp, Kf, fp], kp = /* @__PURE__ */ Rp({
  defaultModifiers: Op
});
function Ap(e) {
  return typeof e == "function" ? e() : e;
}
const Mp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = p.useState(null), l = xt(/* @__PURE__ */ p.isValidElement(r) ? r.ref : null, n);
  if (xn(() => {
    i || s(Ap(o) || document.body);
  }, [o, i]), xn(() => {
    if (a && !i)
      return Jn(n, a), () => {
        Jn(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ p.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ p.cloneElement(r, u);
    }
    return /* @__PURE__ */ z.jsx(p.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ z.jsx(p.Fragment, {
    children: a && /* @__PURE__ */ Ca.createPortal(r, a)
  });
});
function Ip(e) {
  return Ze("MuiPopper", e);
}
Je("MuiPopper", ["root"]);
const Bp = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], _p = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Lp(e, t) {
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
function Qr(e) {
  return typeof e == "function" ? e() : e;
}
function Dp(e) {
  return e.nodeType !== void 0;
}
const Np = () => dt({
  root: ["root"]
}, yf(Ip)), zp = {}, jp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    popperRef: d,
    slotProps: m = {},
    slots: g = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, w = re(t, Bp), S = p.useRef(null), R = xt(S, n), P = p.useRef(null), x = xt(P, d), $ = p.useRef(x);
  xn(() => {
    $.current = x;
  }, [x]), p.useImperativeHandle(d, () => P.current, []);
  const T = Lp(c, a), [C, N] = p.useState(T), [B, E] = p.useState(Qr(o));
  p.useEffect(() => {
    P.current && P.current.forceUpdate();
  }), p.useEffect(() => {
    o && E(Qr(o));
  }, [o]), xn(() => {
    if (!B || !u)
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
    const _ = kp(B, S.current, v({
      placement: T
    }, h, {
      modifiers: M
    }));
    return $.current(_), () => {
      _.destroy(), $.current(null);
    };
  }, [B, s, l, u, h, T]);
  const O = {
    placement: C
  };
  f !== null && (O.TransitionProps = f);
  const j = Np(), F = (r = g.root) != null ? r : "div", H = Cf({
    elementType: F,
    externalSlotProps: m.root,
    externalForwardedProps: w,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: j.root
  });
  return /* @__PURE__ */ z.jsx(F, v({}, H, {
    children: typeof i == "function" ? i(O) : i
  }));
}), Fp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    popperOptions: d = zp,
    popperRef: m,
    style: g,
    transition: f = !1,
    slotProps: w = {},
    slots: S = {}
  } = t, R = re(t, _p), [P, x] = p.useState(!0), $ = () => {
    x(!1);
  }, T = () => {
    x(!0);
  };
  if (!l && !c && (!f || P))
    return null;
  let C;
  if (i)
    C = i;
  else if (r) {
    const E = Qr(r);
    C = E && Dp(E) ? No(E).body : No(null).body;
  }
  const N = !c && l && (!f || P) ? "none" : void 0, B = f ? {
    in: c,
    onEnter: $,
    onExited: T
  } : void 0;
  return /* @__PURE__ */ z.jsx(Mp, {
    disablePortal: s,
    container: C,
    children: /* @__PURE__ */ z.jsx(jp, v({
      anchorEl: r,
      direction: a,
      disablePortal: s,
      modifiers: u,
      ref: n,
      open: f ? !P : c,
      placement: h,
      popperOptions: d,
      popperRef: m,
      slotProps: w,
      slots: S
    }, R, {
      style: v({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: N
      }, g),
      TransitionProps: B,
      children: o
    }))
  });
});
function $i(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Wp(e = {}) {
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
    n && (c = c.toLowerCase()), t && (c = $i(c));
    const h = c ? s.filter((d) => {
      let m = (i || u)(d);
      return n && (m = m.toLowerCase()), t && (m = $i(m)), o === "start" ? m.indexOf(c) === 0 : m.indexOf(c) > -1;
    }) : s;
    return typeof r == "number" ? h.slice(0, r) : h;
  };
}
function Dr(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const Vp = Wp(), Ti = 5, Hp = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function $d(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Hp,
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
    disableCloseOnSelect: d = !1,
    disabled: m,
    disabledItemsFocusable: g = !1,
    disableListWrap: f = !1,
    filterOptions: w = Vp,
    filterSelectedOptions: S = !1,
    freeSolo: R = !1,
    getOptionDisabled: P,
    getOptionLabel: x = (b) => {
      var y;
      return (y = b.label) != null ? y : b;
    },
    groupBy: $,
    handleHomeEndKeys: T = !e.freeSolo,
    id: C,
    includeInputInList: N = !1,
    inputValue: B,
    isOptionEqualToValue: E = (b, y) => b === y,
    multiple: O = !1,
    onChange: j,
    onClose: F,
    onHighlightChange: H,
    onInputChange: k,
    onOpen: M,
    open: _,
    openOnFocus: V = !1,
    options: te,
    readOnly: le = !1,
    selectOnFocus: et = !e.freeSolo,
    value: Ge
  } = e, fe = Xi(C);
  let K = x;
  K = (b) => {
    const y = x(b);
    return typeof y != "string" ? String(y) : y;
  };
  const ge = p.useRef(!1), Ce = p.useRef(!0), ne = p.useRef(null), J = p.useRef(null), [oe, tt] = p.useState(null), [ie, ht] = p.useState(-1), mt = o ? 0 : -1, he = p.useRef(mt), [I, nt] = Kn({
    controlled: Ge,
    default: c,
    name: u
  }), [U, ke] = Kn({
    controlled: B,
    default: "",
    name: u,
    state: "inputValue"
  }), [qe, be] = p.useState(!1), Pe = p.useCallback((b, y) => {
    if (!(O ? I.length < y.length : y !== null) && !s)
      return;
    let D;
    if (O)
      D = "";
    else if (y == null)
      D = "";
    else {
      const Y = K(y);
      D = typeof Y == "string" ? Y : "";
    }
    U !== D && (ke(D), k && k(b, D, "reset"));
  }, [K, U, O, k, ke, s, I]), [Ee, Xe] = Kn({
    controlled: _,
    default: !1,
    name: u,
    state: "open"
  }), [Re, Se] = p.useState(!0), Oe = !O && I != null && U === K(I), pe = Ee && !le, Q = pe ? w(
    te.filter((b) => !(S && (O ? I : [I]).some((y) => y !== null && E(b, y)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Oe && Re ? "" : U,
      getOptionLabel: K
    }
  ) : [], L = As({
    filteredOptions: Q,
    value: I,
    inputValue: U
  });
  p.useEffect(() => {
    const b = I !== L.value;
    qe && !b || R && !b || Pe(null, I);
  }, [I, Pe, qe, L.value, R]);
  const $e = Ee && Q.length > 0 && !le, rt = bt((b) => {
    b === -1 ? ne.current.focus() : oe.querySelector(`[data-tag-index="${b}"]`).focus();
  });
  p.useEffect(() => {
    O && ie > I.length - 1 && (ht(-1), rt(-1));
  }, [I, O, ie, rt]);
  function ot(b, y) {
    if (!J.current || b < 0 || b >= Q.length)
      return -1;
    let A = b;
    for (; ; ) {
      const D = J.current.querySelector(`[data-option-index="${A}"]`), Y = g ? !1 : !D || D.disabled || D.getAttribute("aria-disabled") === "true";
      if (D && D.hasAttribute("tabindex") && !Y)
        return A;
      if (y === "next" ? A = (A + 1) % Q.length : A = (A - 1 + Q.length) % Q.length, A === b)
        return -1;
    }
  }
  const Be = bt(({
    event: b,
    index: y,
    reason: A = "auto"
  }) => {
    if (he.current = y, y === -1 ? ne.current.removeAttribute("aria-activedescendant") : ne.current.setAttribute("aria-activedescendant", `${fe}-option-${y}`), H && H(b, y === -1 ? null : Q[y], A), !J.current)
      return;
    const D = J.current.querySelector(`[role="option"].${n}-focused`);
    D && (D.classList.remove(`${n}-focused`), D.classList.remove(`${n}-focusVisible`));
    let Y = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (Y = J.current.parentElement.querySelector('[role="listbox"]')), !Y)
      return;
    if (y === -1) {
      Y.scrollTop = 0;
      return;
    }
    const ve = J.current.querySelector(`[data-option-index="${y}"]`);
    if (ve && (ve.classList.add(`${n}-focused`), A === "keyboard" && ve.classList.add(`${n}-focusVisible`), Y.scrollHeight > Y.clientHeight && A !== "mouse" && A !== "touch")) {
      const de = ve, We = Y.clientHeight + Y.scrollTop, W = de.offsetTop + de.offsetHeight;
      W > We ? Y.scrollTop = W - Y.clientHeight : de.offsetTop - de.offsetHeight * ($ ? 1.3 : 0) < Y.scrollTop && (Y.scrollTop = de.offsetTop - de.offsetHeight * ($ ? 1.3 : 0));
    }
  }), Fe = bt(({
    event: b,
    diff: y,
    direction: A = "next",
    reason: D = "auto"
  }) => {
    if (!pe)
      return;
    const ve = ot((() => {
      const de = Q.length - 1;
      if (y === "reset")
        return mt;
      if (y === "start")
        return 0;
      if (y === "end")
        return de;
      const We = he.current + y;
      return We < 0 ? We === -1 && N ? -1 : f && he.current !== -1 || Math.abs(y) > 1 ? 0 : de : We > de ? We === de + 1 && N ? -1 : f || Math.abs(y) > 1 ? de : 0 : We;
    })(), A);
    if (Be({
      index: ve,
      reason: D,
      event: b
    }), r && y !== "reset")
      if (ve === -1)
        ne.current.value = U;
      else {
        const de = K(Q[ve]);
        ne.current.value = de, de.toLowerCase().indexOf(U.toLowerCase()) === 0 && U.length > 0 && ne.current.setSelectionRange(U.length, de.length);
      }
  }), zt = () => {
    const b = (y, A) => {
      const D = y ? K(y) : "", Y = A ? K(A) : "";
      return D === Y;
    };
    if (he.current !== -1 && L.filteredOptions && L.filteredOptions.length !== Q.length && L.inputValue === U && (O ? I.length === L.value.length && L.value.every((y, A) => K(I[A]) === K(y)) : b(L.value, I))) {
      const y = L.filteredOptions[he.current];
      if (y && Q.some((D) => K(D) === K(y)))
        return !0;
    }
    return !1;
  }, Rt = p.useCallback(() => {
    if (!pe || zt())
      return;
    const b = O ? I[0] : I;
    if (Q.length === 0 || b == null) {
      Fe({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (b != null) {
        const y = Q[he.current];
        if (O && y && Dr(I, (D) => E(y, D)) !== -1)
          return;
        const A = Dr(Q, (D) => E(D, b));
        A === -1 ? Fe({
          diff: "reset"
        }) : Be({
          index: A
        });
        return;
      }
      if (he.current >= Q.length - 1) {
        Be({
          index: Q.length - 1
        });
        return;
      }
      Be({
        index: he.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Q.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    O ? !1 : I,
    S,
    Fe,
    Be,
    pe,
    U,
    O
  ]), Mn = bt((b) => {
    Jn(J, b), b && Rt();
  });
  p.useEffect(() => {
    Rt();
  }, [Rt]);
  const it = (b) => {
    Ee || (Xe(!0), Se(!0), M && M(b));
  }, Ot = (b, y) => {
    Ee && (Xe(!1), F && F(b, y));
  }, St = (b, y, A, D) => {
    if (O) {
      if (I.length === y.length && I.every((Y, ve) => Y === y[ve]))
        return;
    } else if (I === y)
      return;
    j && j(b, y, A, D), nt(y);
  }, jt = p.useRef(!1), $t = (b, y, A = "selectOption", D = "options") => {
    let Y = A, ve = y;
    if (O) {
      ve = Array.isArray(I) ? I.slice() : [];
      const de = Dr(ve, (We) => E(y, We));
      de === -1 ? ve.push(y) : D !== "freeSolo" && (ve.splice(de, 1), Y = "removeOption");
    }
    Pe(b, ve), St(b, ve, Y, {
      option: y
    }), !d && (!b || !b.ctrlKey && !b.metaKey) && Ot(b, Y), (a === !0 || a === "touch" && jt.current || a === "mouse" && !jt.current) && ne.current.blur();
  };
  function In(b, y) {
    if (b === -1)
      return -1;
    let A = b;
    for (; ; ) {
      if (y === "next" && A === I.length || y === "previous" && A === -1)
        return -1;
      const D = oe.querySelector(`[data-tag-index="${A}"]`);
      if (!D || !D.hasAttribute("tabindex") || D.disabled || D.getAttribute("aria-disabled") === "true")
        A += y === "next" ? 1 : -1;
      else
        return A;
    }
  }
  const on = (b, y) => {
    if (!O)
      return;
    U === "" && Ot(b, "toggleInput");
    let A = ie;
    ie === -1 ? U === "" && y === "previous" && (A = I.length - 1) : (A += y === "next" ? 1 : -1, A < 0 && (A = 0), A === I.length && (A = -1)), A = In(A, y), ht(A), rt(A);
  }, an = (b) => {
    ge.current = !0, ke(""), k && k(b, "", "clear"), St(b, O ? [] : null, "clear");
  }, Bn = (b) => (y) => {
    if (b.onKeyDown && b.onKeyDown(y), !y.defaultMuiPrevented && (ie !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(y.key) === -1 && (ht(-1), rt(-1)), y.which !== 229))
      switch (y.key) {
        case "Home":
          pe && T && (y.preventDefault(), Fe({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: y
          }));
          break;
        case "End":
          pe && T && (y.preventDefault(), Fe({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: y
          }));
          break;
        case "PageUp":
          y.preventDefault(), Fe({
            diff: -Ti,
            direction: "previous",
            reason: "keyboard",
            event: y
          }), it(y);
          break;
        case "PageDown":
          y.preventDefault(), Fe({
            diff: Ti,
            direction: "next",
            reason: "keyboard",
            event: y
          }), it(y);
          break;
        case "ArrowDown":
          y.preventDefault(), Fe({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: y
          }), it(y);
          break;
        case "ArrowUp":
          y.preventDefault(), Fe({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: y
          }), it(y);
          break;
        case "ArrowLeft":
          on(y, "previous");
          break;
        case "ArrowRight":
          on(y, "next");
          break;
        case "Enter":
          if (he.current !== -1 && pe) {
            const A = Q[he.current], D = P ? P(A) : !1;
            if (y.preventDefault(), D)
              return;
            $t(y, A, "selectOption"), r && ne.current.setSelectionRange(ne.current.value.length, ne.current.value.length);
          } else
            R && U !== "" && Oe === !1 && (O && y.preventDefault(), $t(y, U, "createOption", "freeSolo"));
          break;
        case "Escape":
          pe ? (y.preventDefault(), y.stopPropagation(), Ot(y, "escape")) : l && (U !== "" || O && I.length > 0) && (y.preventDefault(), y.stopPropagation(), an(y));
          break;
        case "Backspace":
          if (O && !le && U === "" && I.length > 0) {
            const A = ie === -1 ? I.length - 1 : ie, D = I.slice();
            D.splice(A, 1), St(y, D, "removeOption", {
              option: I[A]
            });
          }
          break;
        case "Delete":
          if (O && !le && U === "" && I.length > 0 && ie !== -1) {
            const A = ie, D = I.slice();
            D.splice(A, 1), St(y, D, "removeOption", {
              option: I[A]
            });
          }
          break;
      }
  }, _n = (b) => {
    be(!0), V && !ge.current && it(b);
  }, Ln = (b) => {
    if (t(J)) {
      ne.current.focus();
      return;
    }
    be(!1), Ce.current = !0, ge.current = !1, i && he.current !== -1 && pe ? $t(b, Q[he.current], "blur") : i && R && U !== "" ? $t(b, U, "blur", "freeSolo") : s && Pe(b, I), Ot(b, "blur");
  }, kr = (b) => {
    const y = b.target.value;
    U !== y && (ke(y), Se(!1), k && k(b, y, "input")), y === "" ? !h && !O && St(b, null, "clear") : it(b);
  }, Ar = (b) => {
    const y = Number(b.currentTarget.getAttribute("data-option-index"));
    he.current !== y && Be({
      event: b,
      index: y,
      reason: "mouse"
    });
  }, sn = (b) => {
    Be({
      event: b,
      index: Number(b.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), jt.current = !0;
  }, Mr = (b) => {
    const y = Number(b.currentTarget.getAttribute("data-option-index"));
    $t(b, Q[y], "selectOption"), jt.current = !1;
  }, kt = (b) => (y) => {
    const A = I.slice();
    A.splice(b, 1), St(y, A, "removeOption", {
      option: I[b]
    });
  }, Ft = (b) => {
    Ee ? Ot(b, "toggleInput") : it(b);
  }, _e = (b) => {
    b.currentTarget.contains(b.target) && b.target.getAttribute("id") !== fe && b.preventDefault();
  }, At = (b) => {
    b.currentTarget.contains(b.target) && (ne.current.focus(), et && Ce.current && ne.current.selectionEnd - ne.current.selectionStart === 0 && ne.current.select(), Ce.current = !1);
  }, Ir = (b) => {
    !m && (U === "" || !Ee) && Ft(b);
  };
  let gt = R && U.length > 0;
  gt = gt || (O ? I.length > 0 : I !== null);
  let Wt = Q;
  return $ && (Wt = Q.reduce((b, y, A) => {
    const D = $(y);
    return b.length > 0 && b[b.length - 1].group === D ? b[b.length - 1].options.push(y) : b.push({
      key: A,
      index: A,
      group: D,
      options: [y]
    }), b;
  }, [])), m && qe && Ln(), {
    getRootProps: (b = {}) => v({
      "aria-owns": $e ? `${fe}-listbox` : null
    }, b, {
      onKeyDown: Bn(b),
      onMouseDown: _e,
      onClick: At
    }),
    getInputLabelProps: () => ({
      id: `${fe}-label`,
      htmlFor: fe
    }),
    getInputProps: () => ({
      id: fe,
      value: U,
      onBlur: Ln,
      onFocus: _n,
      onChange: kr,
      onMouseDown: Ir,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": pe ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": $e ? `${fe}-listbox` : void 0,
      "aria-expanded": $e,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: ne,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: m
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: an
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Ft
    }),
    getTagProps: ({
      index: b
    }) => v({
      key: b,
      "data-tag-index": b,
      tabIndex: -1
    }, !le && {
      onDelete: kt(b)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${fe}-listbox`,
      "aria-labelledby": `${fe}-label`,
      ref: Mn,
      onMouseDown: (b) => {
        b.preventDefault();
      }
    }),
    getOptionProps: ({
      index: b,
      option: y
    }) => {
      const A = (O ? I : [I]).some((Y) => Y != null && E(y, Y)), D = P ? P(y) : !1;
      return {
        key: K(y),
        tabIndex: -1,
        role: "option",
        id: `${fe}-option-${b}`,
        onMouseMove: Ar,
        onClick: Mr,
        onTouchStart: sn,
        "data-option-index": b,
        "aria-disabled": D,
        "aria-selected": A
      };
    },
    id: fe,
    inputValue: U,
    value: I,
    dirty: gt,
    expanded: pe && oe,
    popupOpen: pe,
    focused: qe || ie !== -1,
    anchorEl: oe,
    setAnchorEl: tt,
    focusedTag: ie,
    groupedOptions: Wt
  };
}
const Up = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Kp = ye(Fp, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Gp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r;
  const o = bo(), i = Qe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: s,
    components: l,
    componentsProps: u,
    container: c,
    disablePortal: h,
    keepMounted: d,
    modifiers: m,
    open: g,
    placement: f,
    popperOptions: w,
    popperRef: S,
    transition: R,
    slots: P,
    slotProps: x
  } = i, $ = re(i, Up), T = (r = P == null ? void 0 : P.root) != null ? r : l == null ? void 0 : l.Root, C = v({
    anchorEl: a,
    container: c,
    disablePortal: h,
    keepMounted: d,
    modifiers: m,
    open: g,
    placement: f,
    popperOptions: w,
    popperRef: S,
    transition: R
  }, $);
  return /* @__PURE__ */ z.jsx(Kp, v({
    as: s,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: T
    },
    slotProps: x ?? u
  }, C, {
    ref: n
  }));
}), ba = Gp;
function qp(e) {
  return Ze("MuiButton", e);
}
const Xp = Je("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), jn = Xp, Yp = /* @__PURE__ */ p.createContext({}), Zp = Yp, Jp = /* @__PURE__ */ p.createContext(void 0), Qp = Jp, ed = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], td = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${X(t)}`, `size${X(o)}`, `${i}Size${X(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${X(o)}`],
    endIcon: ["endIcon", `iconSize${X(o)}`]
  }, l = dt(s, qp, a);
  return v({}, a, l);
}, xa = (e) => v({}, e.size === "small" && {
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
}), nd = ye(ca, {
  shouldForwardProp: (e) => aa(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${X(n.color)}`], t[`size${X(n.size)}`], t[`${n.variant}Size${X(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ct(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    [`&.${jn.focusVisible}`]: v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${jn.disabled}`]: v({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${ct(e.palette[t.color].main, 0.5)}`
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
  [`&.${jn.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${jn.disabled}`]: {
    boxShadow: "none"
  }
}), rd = ye("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${X(n.size)}`]];
  }
})(({
  ownerState: e
}) => v({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, xa(e))), od = ye("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${X(n.size)}`]];
  }
})(({
  ownerState: e
}) => v({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, xa(e))), id = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(Zp), o = p.useContext(Qp), i = fo(r, t), a = Qe({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: u = "button",
    className: c,
    disabled: h = !1,
    disableElevation: d = !1,
    disableFocusRipple: m = !1,
    endIcon: g,
    focusVisibleClassName: f,
    fullWidth: w = !1,
    size: S = "medium",
    startIcon: R,
    type: P,
    variant: x = "text"
  } = a, $ = re(a, ed), T = v({}, a, {
    color: l,
    component: u,
    disabled: h,
    disableElevation: d,
    disableFocusRipple: m,
    fullWidth: w,
    size: S,
    type: P,
    variant: x
  }), C = td(T), N = R && /* @__PURE__ */ z.jsx(rd, {
    className: C.startIcon,
    ownerState: T,
    children: R
  }), B = g && /* @__PURE__ */ z.jsx(od, {
    className: C.endIcon,
    ownerState: T,
    children: g
  }), E = o || "";
  return /* @__PURE__ */ z.jsxs(nd, v({
    ownerState: T,
    className: se(r.className, C.root, c, E),
    component: u,
    disabled: h,
    focusRipple: !m,
    focusVisibleClassName: se(C.focusVisible, f),
    ref: n,
    type: P
  }, $, {
    classes: C,
    children: [N, s, B]
  }));
}), Td = id, ad = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function eo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const sd = {
  entering: {
    opacity: 1,
    transform: eo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Nr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), wa = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    onExited: d,
    onExiting: m,
    style: g,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = tu
  } = t, S = re(t, ad), R = p.useRef(), P = p.useRef(), x = ia(), $ = p.useRef(null), T = xt($, i.ref, n), C = (k) => (M) => {
    if (k) {
      const _ = $.current;
      M === void 0 ? k(_) : k(_, M);
    }
  }, N = C(c), B = C((k, M) => {
    cu(k);
    const {
      duration: _,
      delay: V,
      easing: te
    } = ai({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let le;
    f === "auto" ? (le = x.transitions.getAutoHeightDuration(k.clientHeight), P.current = le) : le = _, k.style.transition = [x.transitions.create("opacity", {
      duration: le,
      delay: V
    }), x.transitions.create("transform", {
      duration: Nr ? le : le * 0.666,
      delay: V,
      easing: te
    })].join(","), l && l(k, M);
  }), E = C(u), O = C(m), j = C((k) => {
    const {
      duration: M,
      delay: _,
      easing: V
    } = ai({
      style: g,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let te;
    f === "auto" ? (te = x.transitions.getAutoHeightDuration(k.clientHeight), P.current = te) : te = M, k.style.transition = [x.transitions.create("opacity", {
      duration: te,
      delay: _
    }), x.transitions.create("transform", {
      duration: Nr ? te : te * 0.666,
      delay: Nr ? _ : _ || te * 0.333,
      easing: V
    })].join(","), k.style.opacity = 0, k.style.transform = eo(0.75), h && h(k);
  }), F = C(d), H = (k) => {
    f === "auto" && (R.current = setTimeout(k, P.current || 0)), r && r($.current, k);
  };
  return p.useEffect(() => () => {
    clearTimeout(R.current);
  }, []), /* @__PURE__ */ z.jsx(w, v({
    appear: o,
    in: s,
    nodeRef: $,
    onEnter: B,
    onEntered: E,
    onEntering: N,
    onExit: j,
    onExited: F,
    onExiting: O,
    addEndListener: H,
    timeout: f === "auto" ? null : f
  }, S, {
    children: (k, M) => /* @__PURE__ */ p.cloneElement(i, v({
      style: v({
        opacity: 0,
        transform: eo(0.75),
        visibility: k === "exited" && !s ? "hidden" : void 0
      }, sd[k], g, i.props.style),
      ref: T
    }, M))
  }));
});
wa.muiSupportAuto = !0;
const Pi = wa;
function ld(e) {
  return Ze("MuiTooltip", e);
}
const cd = Je("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Tt = cd, ud = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function fd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const pd = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${X(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return dt(a, ld, t);
}, dd = ye(ba, {
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
  [`&[data-popper-placement*="bottom"] .${Tt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Tt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Tt.arrow}`]: v({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Tt.arrow}`]: v({}, t.isRtl ? {
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
})), hd = ye("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${X(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : ct(e.palette.grey[700], 0.92),
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
  lineHeight: `${fd(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Tt.popper}[data-popper-placement*="left"] &`]: v({
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
  [`.${Tt.popper}[data-popper-placement*="right"] &`]: v({
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
  [`.${Tt.popper}[data-popper-placement*="top"] &`]: v({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Tt.popper}[data-popper-placement*="bottom"] &`]: v({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), md = ye("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : ct(e.palette.grey[700], 0.9),
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
let Fn = !1, zr = null, fn = {
  x: 0,
  y: 0
};
function Wn(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const gd = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var r, o, i, a, s, l, u, c, h, d, m, g, f, w, S, R, P, x, $;
  const T = Qe({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: C = !1,
    children: N,
    components: B = {},
    componentsProps: E = {},
    describeChild: O = !1,
    disableFocusListener: j = !1,
    disableHoverListener: F = !1,
    disableInteractive: H = !1,
    disableTouchListener: k = !1,
    enterDelay: M = 100,
    enterNextDelay: _ = 0,
    enterTouchDelay: V = 700,
    followCursor: te = !1,
    id: le,
    leaveDelay: et = 0,
    leaveTouchDelay: Ge = 1500,
    onClose: fe,
    onOpen: K,
    open: ge,
    placement: Ce = "bottom",
    PopperComponent: ne,
    PopperProps: J = {},
    slotProps: oe = {},
    slots: tt = {},
    title: ie,
    TransitionComponent: ht = Pi,
    TransitionProps: mt
  } = T, he = re(T, ud), I = /* @__PURE__ */ p.isValidElement(N) ? N : /* @__PURE__ */ z.jsx("span", {
    children: N
  }), nt = ia(), U = nt.direction === "rtl", [ke, qe] = p.useState(), [be, Pe] = p.useState(null), Ee = p.useRef(!1), Xe = H || te, Re = p.useRef(), Se = p.useRef(), Oe = p.useRef(), pe = p.useRef(), [Q, L] = Kn({
    controlled: ge,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let $e = Q;
  const rt = Xi(le), ot = p.useRef(), Be = p.useCallback(() => {
    ot.current !== void 0 && (document.body.style.WebkitUserSelect = ot.current, ot.current = void 0), clearTimeout(pe.current);
  }, []);
  p.useEffect(() => () => {
    clearTimeout(Re.current), clearTimeout(Se.current), clearTimeout(Oe.current), Be();
  }, [Be]);
  const Fe = (W) => {
    clearTimeout(zr), Fn = !0, L(!0), K && !$e && K(W);
  }, zt = bt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (W) => {
      clearTimeout(zr), zr = setTimeout(() => {
        Fn = !1;
      }, 800 + et), L(!1), fe && $e && fe(W), clearTimeout(Re.current), Re.current = setTimeout(() => {
        Ee.current = !1;
      }, nt.transitions.duration.shortest);
    }
  ), Rt = (W) => {
    Ee.current && W.type !== "touchstart" || (ke && ke.removeAttribute("title"), clearTimeout(Se.current), clearTimeout(Oe.current), M || Fn && _ ? Se.current = setTimeout(() => {
      Fe(W);
    }, Fn ? _ : M) : Fe(W));
  }, Mn = (W) => {
    clearTimeout(Se.current), clearTimeout(Oe.current), Oe.current = setTimeout(() => {
      zt(W);
    }, et);
  }, {
    isFocusVisibleRef: it,
    onBlur: Ot,
    onFocus: St,
    ref: jt
  } = Yi(), [, $t] = p.useState(!1), In = (W) => {
    Ot(W), it.current === !1 && ($t(!1), Mn(W));
  }, on = (W) => {
    ke || qe(W.currentTarget), St(W), it.current === !0 && ($t(!0), Rt(W));
  }, an = (W) => {
    Ee.current = !0;
    const Le = I.props;
    Le.onTouchStart && Le.onTouchStart(W);
  }, Bn = Rt, _n = Mn, Ln = (W) => {
    an(W), clearTimeout(Oe.current), clearTimeout(Re.current), Be(), ot.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", pe.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = ot.current, Rt(W);
    }, V);
  }, kr = (W) => {
    I.props.onTouchEnd && I.props.onTouchEnd(W), Be(), clearTimeout(Oe.current), Oe.current = setTimeout(() => {
      zt(W);
    }, Ge);
  };
  p.useEffect(() => {
    if (!$e)
      return;
    function W(Le) {
      (Le.key === "Escape" || Le.key === "Esc") && zt(Le);
    }
    return document.addEventListener("keydown", W), () => {
      document.removeEventListener("keydown", W);
    };
  }, [zt, $e]);
  const Ar = xt(I.ref, jt, qe, n);
  !ie && ie !== 0 && ($e = !1);
  const sn = p.useRef(), Mr = (W) => {
    const Le = I.props;
    Le.onMouseMove && Le.onMouseMove(W), fn = {
      x: W.clientX,
      y: W.clientY
    }, sn.current && sn.current.update();
  }, kt = {}, Ft = typeof ie == "string";
  O ? (kt.title = !$e && Ft && !F ? ie : null, kt["aria-describedby"] = $e ? rt : null) : (kt["aria-label"] = Ft ? ie : null, kt["aria-labelledby"] = $e && !Ft ? rt : null);
  const _e = v({}, kt, he, I.props, {
    className: se(he.className, I.props.className),
    onTouchStart: an,
    ref: Ar
  }, te ? {
    onMouseMove: Mr
  } : {}), At = {};
  k || (_e.onTouchStart = Ln, _e.onTouchEnd = kr), F || (_e.onMouseOver = Wn(Bn, _e.onMouseOver), _e.onMouseLeave = Wn(_n, _e.onMouseLeave), Xe || (At.onMouseOver = Bn, At.onMouseLeave = _n)), j || (_e.onFocus = Wn(on, _e.onFocus), _e.onBlur = Wn(In, _e.onBlur), Xe || (At.onFocus = on, At.onBlur = In));
  const Ir = p.useMemo(() => {
    var W;
    let Le = [{
      name: "arrow",
      enabled: !!be,
      options: {
        element: be,
        padding: 4
      }
    }];
    return (W = J.popperOptions) != null && W.modifiers && (Le = Le.concat(J.popperOptions.modifiers)), v({}, J.popperOptions, {
      modifiers: Le
    });
  }, [be, J]), gt = v({}, T, {
    isRtl: U,
    arrow: C,
    disableInteractive: Xe,
    placement: Ce,
    PopperComponentProp: ne,
    touch: Ee.current
  }), Wt = pd(gt), b = (r = (o = tt.popper) != null ? o : B.Popper) != null ? r : dd, y = (i = (a = (s = tt.transition) != null ? s : B.Transition) != null ? a : ht) != null ? i : Pi, A = (l = (u = tt.tooltip) != null ? u : B.Tooltip) != null ? l : hd, D = (c = (h = tt.arrow) != null ? h : B.Arrow) != null ? c : md, Y = dn(b, v({}, J, (d = oe.popper) != null ? d : E.popper, {
    className: se(Wt.popper, J == null ? void 0 : J.className, (m = (g = oe.popper) != null ? g : E.popper) == null ? void 0 : m.className)
  }), gt), ve = dn(y, v({}, mt, (f = oe.transition) != null ? f : E.transition), gt), de = dn(A, v({}, (w = oe.tooltip) != null ? w : E.tooltip, {
    className: se(Wt.tooltip, (S = (R = oe.tooltip) != null ? R : E.tooltip) == null ? void 0 : S.className)
  }), gt), We = dn(D, v({}, (P = oe.arrow) != null ? P : E.arrow, {
    className: se(Wt.arrow, (x = ($ = oe.arrow) != null ? $ : E.arrow) == null ? void 0 : x.className)
  }), gt);
  return /* @__PURE__ */ z.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement(I, _e), /* @__PURE__ */ z.jsx(b, v({
      as: ne ?? ba,
      placement: Ce,
      anchorEl: te ? {
        getBoundingClientRect: () => ({
          top: fn.y,
          left: fn.x,
          right: fn.x,
          bottom: fn.y,
          width: 0,
          height: 0
        })
      } : ke,
      popperRef: sn,
      open: ke ? $e : !1,
      id: rt,
      transition: !0
    }, At, Y, {
      popperOptions: Ir,
      children: ({
        TransitionProps: W
      }) => /* @__PURE__ */ z.jsx(y, v({
        timeout: nt.transitions.duration.shorter
      }, W, ve, {
        children: /* @__PURE__ */ z.jsxs(A, v({}, de, {
          children: [ie, C ? /* @__PURE__ */ z.jsx(D, v({}, We, {
            ref: Pe
          })) : null]
        }))
      }))
    }))]
  });
}), Pd = gd;
export {
  Cd as A,
  Td as B,
  bd as E,
  xd as G,
  Vu as I,
  Pd as M,
  ba as P,
  wd as T,
  ws as a,
  Uc as b,
  yd as c,
  Ed as d,
  xt as e,
  $d as f,
  Ki as h,
  z as j,
  Ur as n,
  Tt as t,
  Sd as u
};
