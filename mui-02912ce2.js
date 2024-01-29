import { r as d, a as Oo, R as Et, b as rr, c as _s } from "./react-54946355.js";
var Ds = { exports: {} }, $r = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga = d, Xa = Symbol.for("react.element"), Ya = Symbol.for("react.fragment"), Za = Object.prototype.hasOwnProperty, Ja = Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qa = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Za.call(t, r) && !Qa.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Xa, type: e, key: i, ref: s, props: o, _owner: Ja.current };
}
$r.Fragment = Ya;
$r.jsx = js;
$r.jsxs = js;
Ds.exports = $r;
var T = Ds.exports;
function el(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function tl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var nl = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(tl(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = el(o);
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
}(), Ge = "-ms-", hr = "-moz-", he = "-webkit-", Ws = "comm", Ko = "rule", qo = "decl", rl = "@import", Hs = "@keyframes", ol = "@layer", il = Math.abs, Pr = String.fromCharCode, sl = Object.assign;
function al(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function Us(e) {
  return e.trim();
}
function ll(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ge(e, t, n) {
  return e.replace(t, n);
}
function Io(e, t) {
  return e.indexOf(t);
}
function qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function jn(e, t, n) {
  return e.slice(t, n);
}
function bt(e) {
  return e.length;
}
function Go(e) {
  return e.length;
}
function or(e, t) {
  return t.push(e), e;
}
function cl(e, t) {
  return e.map(t).join("");
}
var Er = 1, pn = 1, Vs = 0, tt = 0, je = 0, yn = "";
function Tr(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Er, column: pn, length: s, return: "" };
}
function $n(e, t) {
  return sl(Tr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ul() {
  return je;
}
function dl() {
  return je = tt > 0 ? qe(yn, --tt) : 0, pn--, je === 10 && (pn = 1, Er--), je;
}
function st() {
  return je = tt < Vs ? qe(yn, tt++) : 0, pn++, je === 10 && (pn = 1, Er++), je;
}
function Ct() {
  return qe(yn, tt);
}
function ur() {
  return tt;
}
function qn(e, t) {
  return jn(yn, e, t);
}
function Wn(e) {
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
function Ks(e) {
  return Er = pn = 1, Vs = bt(yn = e), tt = 0, [];
}
function qs(e) {
  return yn = "", e;
}
function dr(e) {
  return Us(qn(tt - 1, Mo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pl(e) {
  for (; (je = Ct()) && je < 33; )
    st();
  return Wn(e) > 2 || Wn(je) > 3 ? "" : " ";
}
function fl(e, t) {
  for (; --t && st() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return qn(e, ur() + (t < 6 && Ct() == 32 && st() == 32));
}
function Mo(e) {
  for (; st(); )
    switch (je) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mo(je);
        break;
      case 40:
        e === 41 && Mo(e);
        break;
      case 92:
        st();
        break;
    }
  return tt;
}
function ml(e, t) {
  for (; st() && e + je !== 47 + 10; )
    if (e + je === 42 + 42 && Ct() === 47)
      break;
  return "/*" + qn(t, tt - 1) + "*" + Pr(e === 47 ? e : st());
}
function hl(e) {
  for (; !Wn(Ct()); )
    st();
  return qn(e, tt);
}
function gl(e) {
  return qs(pr("", null, null, null, [""], e = Ks(e), 0, [0], e));
}
function pr(e, t, n, r, o, i, s, a, l) {
  for (var c = 0, u = 0, f = s, h = 0, v = 0, g = 0, m = 1, x = 1, R = 1, $ = 0, y = "", b = o, S = i, w = r, C = y; x; )
    switch (g = $, $ = st()) {
      case 40:
        if (g != 108 && qe(C, f - 1) == 58) {
          Io(C += ge(dr($), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += dr($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += pl(g);
        break;
      case 92:
        C += fl(ur() - 1, 7);
        continue;
      case 47:
        switch (Ct()) {
          case 42:
          case 47:
            or(vl(ml(st(), ur()), t, n), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        a[c++] = bt(C) * R;
      case 125 * m:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            x = 0;
          case 59 + u:
            R == -1 && (C = ge(C, /\f/g, "")), v > 0 && bt(C) - f && or(v > 32 ? Ti(C + ";", r, n, f - 1) : Ti(ge(C, " ", "") + ";", r, n, f - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (or(w = Ei(C, t, n, c, u, o, a, y, b = [], S = [], f), i), $ === 123)
              if (u === 0)
                pr(C, t, w, w, b, i, f, a, S);
              else
                switch (h === 99 && qe(C, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pr(e, w, w, r && or(Ei(e, w, w, 0, 0, o, a, y, o, b = [], f), S), o, S, f, a, r ? b : S);
                    break;
                  default:
                    pr(C, w, w, w, [""], S, 0, a, S);
                }
        }
        c = u = v = 0, m = R = 1, y = C = "", f = s;
        break;
      case 58:
        f = 1 + bt(C), v = g;
      default:
        if (m < 1) {
          if ($ == 123)
            --m;
          else if ($ == 125 && m++ == 0 && dl() == 125)
            continue;
        }
        switch (C += Pr($), $ * m) {
          case 38:
            R = u > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            a[c++] = (bt(C) - 1) * R, R = 1;
            break;
          case 64:
            Ct() === 45 && (C += dr(st())), h = Ct(), u = f = bt(y = C += hl(ur())), $++;
            break;
          case 45:
            g === 45 && bt(C) == 2 && (m = 0);
        }
    }
  return i;
}
function Ei(e, t, n, r, o, i, s, a, l, c, u) {
  for (var f = o - 1, h = o === 0 ? i : [""], v = Go(h), g = 0, m = 0, x = 0; g < r; ++g)
    for (var R = 0, $ = jn(e, f + 1, f = il(m = s[g])), y = e; R < v; ++R)
      (y = Us(m > 0 ? h[R] + " " + $ : ge($, /&\f/g, h[R]))) && (l[x++] = y);
  return Tr(e, t, n, o === 0 ? Ko : a, l, c, u);
}
function vl(e, t, n) {
  return Tr(e, t, n, Ws, Pr(ul()), jn(e, 2, -2), 0);
}
function Ti(e, t, n, r) {
  return Tr(e, t, n, qo, jn(e, 0, r), jn(e, r + 1, -1), r);
}
function cn(e, t) {
  for (var n = "", r = Go(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function bl(e, t, n, r) {
  switch (e.type) {
    case ol:
      if (e.children.length)
        break;
    case rl:
    case qo:
      return e.return = e.return || e.value;
    case Ws:
      return "";
    case Hs:
      return e.return = e.value + "{" + cn(e.children, r) + "}";
    case Ko:
      e.value = e.props.join(",");
  }
  return bt(n = cn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function yl(e) {
  var t = Go(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function xl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Gs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Cl = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Ct(), o === 38 && i === 12 && (n[r] = 1), !Wn(i); )
    st();
  return qn(t, tt);
}, Rl = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Wn(o)) {
      case 0:
        o === 38 && Ct() === 12 && (n[r] = 1), t[r] += Cl(tt - 1, n, r);
        break;
      case 2:
        t[r] += dr(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Ct() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Pr(o);
    }
  while (o = st());
  return t;
}, Sl = function(t, n) {
  return qs(Rl(Ks(t), n));
}, ki = /* @__PURE__ */ new WeakMap(), wl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ki.get(r)) && !o) {
      ki.set(t, !0);
      for (var i = [], s = Sl(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
    }
  }
}, $l = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Xs(e, t) {
  switch (al(e, t)) {
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + hr + e + Ge + e + e;
    case 6828:
    case 4268:
      return he + e + Ge + e + e;
    case 6165:
      return he + e + Ge + "flex-" + e + e;
    case 5187:
      return he + e + ge(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Ge + "flex-$1$2") + e;
    case 5443:
      return he + e + Ge + "flex-item-" + ge(e, /flex-|-self/, "") + e;
    case 4675:
      return he + e + Ge + "flex-line-pack" + ge(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return he + e + Ge + ge(e, "shrink", "negative") + e;
    case 5292:
      return he + e + Ge + ge(e, "basis", "preferred-size") + e;
    case 6060:
      return he + "box-" + ge(e, "-grow", "") + he + e + Ge + ge(e, "grow", "positive") + e;
    case 4554:
      return he + ge(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return ge(ge(ge(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ge(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return ge(ge(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ge(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (bt(e) - 1 - t > 6)
        switch (qe(e, t + 1)) {
          case 109:
            if (qe(e, t + 4) !== 45)
              break;
          case 102:
            return ge(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + hr + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Io(e, "stretch") ? Xs(ge(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (qe(e, bt(e) - 3 - (~Io(e, "!important") && 10))) {
        case 107:
          return ge(e, ":", ":" + he) + e;
        case 101:
          return ge(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Ge + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (qe(e, t + 11)) {
        case 114:
          return he + e + Ge + ge(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + Ge + ge(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + Ge + ge(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Ge + e + e;
  }
  return e;
}
var Pl = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case qo:
        t.return = Xs(t.value, t.length);
        break;
      case Hs:
        return cn([$n(t, {
          value: ge(t.value, "@", "@" + he)
        })], o);
      case Ko:
        if (t.length)
          return cl(t.props, function(i) {
            switch (ll(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return cn([$n(t, {
                  props: [ge(i, /:(read-\w+)/, ":" + hr + "$1")]
                })], o);
              case "::placeholder":
                return cn([$n(t, {
                  props: [ge(i, /:(plac\w+)/, ":" + he + "input-$1")]
                }), $n(t, {
                  props: [ge(i, /:(plac\w+)/, ":" + hr + "$1")]
                }), $n(t, {
                  props: [ge(i, /:(plac\w+)/, Ge + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, El = [Pl], Tl = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(m) {
      var x = m.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || El, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var x = m.getAttribute("data-emotion").split(" "), R = 1; R < x.length; R++)
        i[x[R]] = !0;
      a.push(m);
    }
  );
  var l, c = [wl, $l];
  {
    var u, f = [bl, xl(function(m) {
      u.insert(m);
    })], h = yl(c.concat(o, f)), v = function(x) {
      return cn(gl(x), h);
    };
    l = function(x, R, $, y) {
      u = $, v(x ? x + "{" + R.styles + "}" : R.styles), y && (g.inserted[R.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new nl({
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
  return g.sheet.hydrate(a), g;
};
function p() {
  return p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, p.apply(this, arguments);
}
var Ys = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = typeof Symbol == "function" && Symbol.for, Xo = Ve ? Symbol.for("react.element") : 60103, Yo = Ve ? Symbol.for("react.portal") : 60106, kr = Ve ? Symbol.for("react.fragment") : 60107, Or = Ve ? Symbol.for("react.strict_mode") : 60108, Ir = Ve ? Symbol.for("react.profiler") : 60114, Mr = Ve ? Symbol.for("react.provider") : 60109, Ar = Ve ? Symbol.for("react.context") : 60110, Zo = Ve ? Symbol.for("react.async_mode") : 60111, Br = Ve ? Symbol.for("react.concurrent_mode") : 60111, Fr = Ve ? Symbol.for("react.forward_ref") : 60112, Lr = Ve ? Symbol.for("react.suspense") : 60113, kl = Ve ? Symbol.for("react.suspense_list") : 60120, Nr = Ve ? Symbol.for("react.memo") : 60115, zr = Ve ? Symbol.for("react.lazy") : 60116, Ol = Ve ? Symbol.for("react.block") : 60121, Il = Ve ? Symbol.for("react.fundamental") : 60117, Ml = Ve ? Symbol.for("react.responder") : 60118, Al = Ve ? Symbol.for("react.scope") : 60119;
function lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xo:
        switch (e = e.type, e) {
          case Zo:
          case Br:
          case kr:
          case Ir:
          case Or:
          case Lr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ar:
              case Fr:
              case zr:
              case Nr:
              case Mr:
                return e;
              default:
                return t;
            }
        }
      case Yo:
        return t;
    }
  }
}
function Zs(e) {
  return lt(e) === Br;
}
Ce.AsyncMode = Zo;
Ce.ConcurrentMode = Br;
Ce.ContextConsumer = Ar;
Ce.ContextProvider = Mr;
Ce.Element = Xo;
Ce.ForwardRef = Fr;
Ce.Fragment = kr;
Ce.Lazy = zr;
Ce.Memo = Nr;
Ce.Portal = Yo;
Ce.Profiler = Ir;
Ce.StrictMode = Or;
Ce.Suspense = Lr;
Ce.isAsyncMode = function(e) {
  return Zs(e) || lt(e) === Zo;
};
Ce.isConcurrentMode = Zs;
Ce.isContextConsumer = function(e) {
  return lt(e) === Ar;
};
Ce.isContextProvider = function(e) {
  return lt(e) === Mr;
};
Ce.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xo;
};
Ce.isForwardRef = function(e) {
  return lt(e) === Fr;
};
Ce.isFragment = function(e) {
  return lt(e) === kr;
};
Ce.isLazy = function(e) {
  return lt(e) === zr;
};
Ce.isMemo = function(e) {
  return lt(e) === Nr;
};
Ce.isPortal = function(e) {
  return lt(e) === Yo;
};
Ce.isProfiler = function(e) {
  return lt(e) === Ir;
};
Ce.isStrictMode = function(e) {
  return lt(e) === Or;
};
Ce.isSuspense = function(e) {
  return lt(e) === Lr;
};
Ce.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === kr || e === Br || e === Ir || e === Or || e === Lr || e === kl || typeof e == "object" && e !== null && (e.$$typeof === zr || e.$$typeof === Nr || e.$$typeof === Mr || e.$$typeof === Ar || e.$$typeof === Fr || e.$$typeof === Il || e.$$typeof === Ml || e.$$typeof === Al || e.$$typeof === Ol);
};
Ce.typeOf = lt;
Ys.exports = Ce;
var Bl = Ys.exports, Js = Bl, Fl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ll = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qs = {};
Qs[Js.ForwardRef] = Fl;
Qs[Js.Memo] = Ll;
var Nl = !0;
function ea(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Jo = function(t, n, r) {
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
  Nl === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Qo = function(t, n, r) {
  Jo(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function zl(e) {
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
var _l = {
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
}, Dl = /[A-Z]|^ms/g, jl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ta = function(t) {
  return t.charCodeAt(1) === 45;
}, Oi = function(t) {
  return t != null && typeof t != "boolean";
}, xo = /* @__PURE__ */ Gs(function(e) {
  return ta(e) ? e : e.replace(Dl, "-$&").toLowerCase();
}), Ii = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(jl, function(r, o, i) {
          return yt = {
            name: o,
            styles: i,
            next: yt
          }, o;
        });
  }
  return _l[t] !== 1 && !ta(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Hn(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return yt = {
          name: n.name,
          styles: n.styles,
          next: yt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            yt = {
              name: r.name,
              styles: r.styles,
              next: yt
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return Wl(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = yt, s = n(e);
        return yt = i, Hn(e, t, s);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function Wl(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Hn(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Oi(s) && (r += xo(i) + ":" + Ii(i, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Oi(s[a]) && (r += xo(i) + ":" + Ii(i, s[a]) + ";");
      else {
        var l = Hn(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += xo(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Mi = /label:\s*([^\s;\n{]+)\s*(;|$)/g, yt, _r = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  yt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Hn(r, n, s)) : i += s[0];
  for (var a = 1; a < t.length; a++)
    i += Hn(r, n, t[a]), o && (i += s[a]);
  Mi.lastIndex = 0;
  for (var l = "", c; (c = Mi.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = zl(i) + l;
  return {
    name: u,
    styles: i,
    next: yt
  };
}, Hl = function(t) {
  return t();
}, na = Oo["useInsertionEffect"] ? Oo["useInsertionEffect"] : !1, ra = na || Hl, Ai = na || d.useLayoutEffect, oa = {}.hasOwnProperty, ia = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Tl({
    key: "css"
  }) : null
);
ia.Provider;
var ei = function(t) {
  return /* @__PURE__ */ d.forwardRef(function(n, r) {
    var o = d.useContext(ia);
    return t(n, o, r);
  });
}, Gn = /* @__PURE__ */ d.createContext({}), Ao = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ib = function(t, n) {
  var r = {};
  for (var o in n)
    oa.call(n, o) && (r[o] = n[o]);
  return r[Ao] = t, r;
}, Ul = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Jo(n, r, o), ra(function() {
    return Qo(n, r, o);
  }), null;
}, Vl = /* @__PURE__ */ ei(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ao], i = [r], s = "";
  typeof e.className == "string" ? s = ea(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = _r(i, void 0, d.useContext(Gn));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    oa.call(e, c) && c !== "css" && c !== Ao && (l[c] = e[c]);
  return l.ref = n, l.className = s, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Ul, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ d.createElement(o, l));
}), sb = Vl, Kl = /* @__PURE__ */ ei(function(e, t) {
  var n = e.styles, r = _r([n], void 0, d.useContext(Gn)), o = d.useRef();
  return Ai(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Ai(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Qo(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function ql() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _r(t);
}
var ti = function() {
  var t = ql.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function Pt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function sa(e) {
  if (!Pt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = sa(e[n]);
  }), t;
}
function Je(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? p({}, e) : e;
  return Pt(e) && Pt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Pt(t[o]) && o in e && Pt(e[o]) ? r[o] = Je(e[o], t[o], n) : n.clone ? r[o] = Pt(t[o]) ? sa(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Tt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Z(e) {
  if (typeof e != "string")
    throw new Error(Tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function aa(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Co(e, t) {
  var n, r;
  return /* @__PURE__ */ d.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Ue(e) {
  return e && e.ownerDocument || document;
}
function qt(e) {
  return Ue(e).defaultView || window;
}
function gr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Gl = typeof window < "u" ? d.useLayoutEffect : d.useEffect, kt = Gl;
let Fi = 0;
function Xl(e) {
  const [t, n] = d.useState(e), r = e || t;
  return d.useEffect(() => {
    t == null && (Fi += 1, n(`mui-${Fi}`));
  }, [t]), r;
}
const Li = Oo["useId".toString()];
function Dr(e) {
  if (Li !== void 0) {
    const t = Li();
    return e ?? t;
  }
  return Xl(e);
}
function un({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = d.useRef(e !== void 0), [i, s] = d.useState(t), a = o ? e : i, l = d.useCallback((c) => {
    o || s(c);
  }, []);
  return [a, l];
}
function dt(e) {
  const t = d.useRef(e);
  return kt(() => {
    t.current = e;
  }), d.useRef((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  )).current;
}
function He(...e) {
  return d.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      gr(n, t);
    });
  }, e);
}
let jr = !0, Bo = !1, Ni;
const Yl = {
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
function Zl(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Yl[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Jl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (jr = !0);
}
function Ro() {
  jr = !1;
}
function Ql() {
  this.visibilityState === "hidden" && Bo && (jr = !0);
}
function ec(e) {
  e.addEventListener("keydown", Jl, !0), e.addEventListener("mousedown", Ro, !0), e.addEventListener("pointerdown", Ro, !0), e.addEventListener("touchstart", Ro, !0), e.addEventListener("visibilitychange", Ql, !0);
}
function tc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return jr || Zl(t);
}
function la() {
  const e = d.useCallback((o) => {
    o != null && ec(o.ownerDocument);
  }, []), t = d.useRef(!1);
  function n() {
    return t.current ? (Bo = !0, window.clearTimeout(Ni), Ni = window.setTimeout(() => {
      Bo = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return tc(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function ca(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const nc = (e) => {
  const t = d.useRef({});
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}, rc = nc;
function ni(e, t) {
  const n = p({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = p({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = p({}, i), Object.keys(o).forEach((s) => {
        n[r][s] = ni(o[s], i[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Re(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const zi = (e) => e, oc = () => {
  let e = zi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = zi;
    }
  };
}, ic = oc(), sc = ic, ac = {
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
function be(e, t, n = "Mui") {
  const r = ac[t];
  return r ? `${n}-${r}` : `${sc.generate(e)}-${t}`;
}
function ye(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = be(e, o, n);
  }), r;
}
const fn = "$$material";
function q(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var lc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cc = /* @__PURE__ */ Gs(
  function(e) {
    return lc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), uc = cc, dc = function(t) {
  return t !== "theme";
}, _i = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? uc : dc;
}, Di = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, pc = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Jo(n, r, o), ra(function() {
    return Qo(n, r, o);
  }), null;
}, fc = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Di(t, n, r), l = a || _i(o), c = !l("as");
  return function() {
    var u = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      f.push(u[0][0]);
      for (var h = u.length, v = 1; v < h; v++)
        f.push(u[v], u[0][v]);
    }
    var g = ei(function(m, x, R) {
      var $ = c && m.as || o, y = "", b = [], S = m;
      if (m.theme == null) {
        S = {};
        for (var w in m)
          S[w] = m[w];
        S.theme = d.useContext(Gn);
      }
      typeof m.className == "string" ? y = ea(x.registered, b, m.className) : m.className != null && (y = m.className + " ");
      var C = _r(f.concat(b), x.registered, S);
      y += x.key + "-" + C.name, s !== void 0 && (y += " " + s);
      var A = c && a === void 0 ? _i($) : l, F = {};
      for (var P in m)
        c && P === "as" || // $FlowFixMe
        A(P) && (F[P] = m[P]);
      return F.className = y, F.ref = R, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(pc, {
        cache: x,
        serialized: C,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ d.createElement($, F));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = f, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + s;
      }
    }), g.withComponent = function(m, x) {
      return e(m, p({}, n, x, {
        shouldForwardProp: Di(g, x, !0)
      })).apply(void 0, f);
    }, g;
  };
}, mc = [
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
], Fo = fc.bind();
mc.forEach(function(e) {
  Fo[e] = Fo(e);
});
function hc(e) {
  return e == null || Object.keys(e).length === 0;
}
function gc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(hc(o) ? n : o) : t;
  return /* @__PURE__ */ T.jsx(Kl, {
    styles: r
  });
}
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function vc(e, t) {
  return Fo(e, t);
}
const bc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, yc = ["values", "unit", "step"], xc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => p({}, n, {
    [r.key]: r.val
  }), {});
};
function Cc(e) {
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
  } = e, o = q(e, yc), i = xc(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function c(h, v) {
    const g = s.indexOf(v);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : v) - r / 100}${n})`;
  }
  function u(h) {
    return s.indexOf(h) + 1 < s.length ? c(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function f(h) {
    const v = s.indexOf(h);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : c(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
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
  }, o);
}
const Rc = {
  borderRadius: 4
}, Sc = Rc;
function Bn(e, t) {
  return t ? Je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ri = {
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
}, ji = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ri[e]}px)`
};
function Ot(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ji;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ji;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || ri).indexOf(a) !== -1) {
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
function wc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function $c(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Wr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function vr(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Wr(e, n) || r, t && (o = t(o, r, e)), o;
}
function xe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, c = Wr(l, r) || {};
    return Ot(s, a, (f) => {
      let h = vr(c, o, f);
      return f === h && typeof f == "string" && (h = vr(c, o, `${t}${f === "default" ? "" : Z(f)}`, f)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Pc(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ec = {
  m: "margin",
  p: "padding"
}, Tc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, kc = Pc((e) => {
  if (e.length > 2)
    if (Wi[e])
      e = Wi[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ec[t], o = Tc[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), oi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ii = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...oi, ...ii];
function Xn(e, t, n, r) {
  var o;
  const i = (o = Wr(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function ua(e) {
  return Xn(e, "spacing", 8);
}
function Yn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Oc(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Yn(t, n), r), {});
}
function Ic(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = kc(n), i = Oc(o, r), s = e[n];
  return Ot(e, s, i);
}
function da(e, t) {
  const n = ua(e.theme);
  return Object.keys(e).map((r) => Ic(e, t, r, n)).reduce(Bn, {});
}
function Le(e) {
  return da(e, oi);
}
Le.propTypes = {};
Le.filterProps = oi;
function Ne(e) {
  return da(e, ii);
}
Ne.propTypes = {};
Ne.filterProps = ii;
function Mc(e = 8) {
  if (e.mui)
    return e;
  const t = ua({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function Hr(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Bn(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ac = xe({
  prop: "border",
  themeKey: "borders",
  transform: xt
}), Bc = xe({
  prop: "borderTop",
  themeKey: "borders",
  transform: xt
}), Fc = xe({
  prop: "borderRight",
  themeKey: "borders",
  transform: xt
}), Lc = xe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: xt
}), Nc = xe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: xt
}), zc = xe({
  prop: "borderColor",
  themeKey: "palette"
}), _c = xe({
  prop: "borderTopColor",
  themeKey: "palette"
}), Dc = xe({
  prop: "borderRightColor",
  themeKey: "palette"
}), jc = xe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Wc = xe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Ur = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xn(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Yn(t, r)
    });
    return Ot(e, e.borderRadius, n);
  }
  return null;
};
Ur.propTypes = {};
Ur.filterProps = ["borderRadius"];
Hr(Ac, Bc, Fc, Lc, Nc, zc, _c, Dc, jc, Wc, Ur);
const Vr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xn(e.theme, "spacing", 8), n = (r) => ({
      gap: Yn(t, r)
    });
    return Ot(e, e.gap, n);
  }
  return null;
};
Vr.propTypes = {};
Vr.filterProps = ["gap"];
const Kr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xn(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Yn(t, r)
    });
    return Ot(e, e.columnGap, n);
  }
  return null;
};
Kr.propTypes = {};
Kr.filterProps = ["columnGap"];
const qr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xn(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Yn(t, r)
    });
    return Ot(e, e.rowGap, n);
  }
  return null;
};
qr.propTypes = {};
qr.filterProps = ["rowGap"];
const Hc = xe({
  prop: "gridColumn"
}), Uc = xe({
  prop: "gridRow"
}), Vc = xe({
  prop: "gridAutoFlow"
}), Kc = xe({
  prop: "gridAutoColumns"
}), qc = xe({
  prop: "gridAutoRows"
}), Gc = xe({
  prop: "gridTemplateColumns"
}), Xc = xe({
  prop: "gridTemplateRows"
}), Yc = xe({
  prop: "gridTemplateAreas"
}), Zc = xe({
  prop: "gridArea"
});
Hr(Vr, Kr, qr, Hc, Uc, Vc, Kc, qc, Gc, Xc, Yc, Zc);
function dn(e, t) {
  return t === "grey" ? t : e;
}
const Jc = xe({
  prop: "color",
  themeKey: "palette",
  transform: dn
}), Qc = xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: dn
}), eu = xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: dn
});
Hr(Jc, Qc, eu);
function it(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tu = xe({
  prop: "width",
  transform: it
}), si = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ri[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: it(n)
      };
    };
    return Ot(e, e.maxWidth, t);
  }
  return null;
};
si.filterProps = ["maxWidth"];
const nu = xe({
  prop: "minWidth",
  transform: it
}), ru = xe({
  prop: "height",
  transform: it
}), ou = xe({
  prop: "maxHeight",
  transform: it
}), iu = xe({
  prop: "minHeight",
  transform: it
});
xe({
  prop: "size",
  cssProperty: "width",
  transform: it
});
xe({
  prop: "size",
  cssProperty: "height",
  transform: it
});
const su = xe({
  prop: "boxSizing"
});
Hr(tu, si, nu, ru, ou, iu, su);
const au = {
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
    style: Ur
  },
  // palette
  color: {
    themeKey: "palette",
    transform: dn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: dn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: dn
  },
  // spacing
  p: {
    style: Ne
  },
  pt: {
    style: Ne
  },
  pr: {
    style: Ne
  },
  pb: {
    style: Ne
  },
  pl: {
    style: Ne
  },
  px: {
    style: Ne
  },
  py: {
    style: Ne
  },
  padding: {
    style: Ne
  },
  paddingTop: {
    style: Ne
  },
  paddingRight: {
    style: Ne
  },
  paddingBottom: {
    style: Ne
  },
  paddingLeft: {
    style: Ne
  },
  paddingX: {
    style: Ne
  },
  paddingY: {
    style: Ne
  },
  paddingInline: {
    style: Ne
  },
  paddingInlineStart: {
    style: Ne
  },
  paddingInlineEnd: {
    style: Ne
  },
  paddingBlock: {
    style: Ne
  },
  paddingBlockStart: {
    style: Ne
  },
  paddingBlockEnd: {
    style: Ne
  },
  m: {
    style: Le
  },
  mt: {
    style: Le
  },
  mr: {
    style: Le
  },
  mb: {
    style: Le
  },
  ml: {
    style: Le
  },
  mx: {
    style: Le
  },
  my: {
    style: Le
  },
  margin: {
    style: Le
  },
  marginTop: {
    style: Le
  },
  marginRight: {
    style: Le
  },
  marginBottom: {
    style: Le
  },
  marginLeft: {
    style: Le
  },
  marginX: {
    style: Le
  },
  marginY: {
    style: Le
  },
  marginInline: {
    style: Le
  },
  marginInlineStart: {
    style: Le
  },
  marginInlineEnd: {
    style: Le
  },
  marginBlock: {
    style: Le
  },
  marginBlockStart: {
    style: Le
  },
  marginBlockEnd: {
    style: Le
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
    style: Vr
  },
  rowGap: {
    style: qr
  },
  columnGap: {
    style: Kr
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
    style: si
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
}, Gr = au;
function lu(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function cu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uu() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: c,
      transform: u,
      style: f
    } = a;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Wr(o, c) || {};
    return f ? f(s) : Ot(s, r, (g) => {
      let m = vr(h, u, g);
      return g === m && typeof g == "string" && (m = vr(h, u, `${n}${g === "default" ? "" : Z(g)}`, g)), l === !1 ? m : {
        [l]: m
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
    const s = (r = i.unstable_sxConfig) != null ? r : Gr;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = wc(i.breakpoints), f = Object.keys(u);
      let h = u;
      return Object.keys(c).forEach((v) => {
        const g = cu(c[v], i);
        if (g != null)
          if (typeof g == "object")
            if (s[v])
              h = Bn(h, e(v, g, i, s));
            else {
              const m = Ot({
                theme: i
              }, g, (x) => ({
                [v]: x
              }));
              lu(m, g) ? h[v] = t({
                sx: g,
                theme: i
              }) : h = Bn(h, m);
            }
          else
            h = Bn(h, e(v, g, i, s));
      }), $c(f, h);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const pa = uu();
pa.filterProps = ["sx"];
const ai = pa, du = ["breakpoints", "palette", "spacing", "shape"];
function li(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = q(e, du), a = Cc(n), l = Mc(o);
  let c = Je({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: p({
      mode: "light"
    }, r),
    spacing: l,
    shape: p({}, Sc, i)
  }, s);
  return c = t.reduce((u, f) => Je(u, f), c), c.unstable_sxConfig = p({}, Gr, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return ai({
      sx: f,
      theme: this
    });
  }, c;
}
function pu(e) {
  return Object.keys(e).length === 0;
}
function ci(e = null) {
  const t = d.useContext(Gn);
  return !t || pu(t) ? e : t;
}
const fu = li();
function ui(e = fu) {
  return ci(e);
}
function mu({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ui(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ T.jsx(gc, {
    styles: o
  });
}
const hu = ["sx"], gu = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Gr;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function vu(e) {
  const {
    sx: t
  } = e, n = q(e, hu), {
    systemProps: r,
    otherProps: o
  } = gu(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Pt(a) ? p({}, r, a) : r;
  } : i = p({}, r, t), p({}, o, {
    sx: i
  });
}
function fa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = fa(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Q() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = fa(e)) && (r && (r += " "), r += t);
  return r;
}
const bu = ["variant"];
function Hi(e) {
  return e.length === 0;
}
function ma(e) {
  const {
    variant: t
  } = e, n = q(e, bu);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += Hi(r) ? e[o] : Z(e[o]) : r += `${Hi(r) ? o : Z(o)}${Z(e[o].toString())}`;
  }), r;
}
const yu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function xu(e) {
  return Object.keys(e).length === 0;
}
function Cu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Ru = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, br = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = ma(n.props);
    t[r] = n.style;
  }), t;
}, Su = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), br(n);
}, yr = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, o = [];
  return n && n.forEach((i) => {
    let s = !0;
    Object.keys(i.props).forEach((a) => {
      r[a] !== i.props[a] && e[a] !== i.props[a] && (s = !1);
    }), s && o.push(t[ma(i.props)]);
  }), o;
}, wu = (e, t, n, r) => {
  var o;
  const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return yr(e, t, i);
};
function Fn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $u = li(), Pu = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function fr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return xu(t) ? e : t[n] || t;
}
function Eu(e) {
  return e ? (t, n) => n[e] : null;
}
const Ui = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(p({}, t, {
    theme: fr(p({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = yr(t, br(i), i);
    return [o, ...s];
  }
  return o;
};
function Tu(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = $u,
    rootShouldForwardProp: r = Fn,
    slotShouldForwardProp: o = Fn
  } = e, i = (s) => ai(p({}, s, {
    theme: fr(p({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    bc(s, (b) => b.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Eu(Pu(c))
    } = a, v = q(a, yu), g = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), m = f || !1;
    let x, R = Fn;
    c === "Root" || c === "root" ? R = r : c ? R = o : Cu(s) && (R = void 0);
    const $ = vc(s, p({
      shouldForwardProp: R,
      label: x
    }, v)), y = (b, ...S) => {
      const w = S ? S.map((P) => {
        if (typeof P == "function" && P.__emotion_real !== P)
          return (O) => Ui({
            styledArg: P,
            props: O,
            defaultTheme: n,
            themeId: t
          });
        if (Pt(P)) {
          let O = P, z;
          return P && P.variants && (z = P.variants, delete O.variants, O = (L) => {
            let N = P;
            return yr(L, br(z), z).forEach((M) => {
              N = Je(N, M);
            }), N;
          }), O;
        }
        return P;
      }) : [];
      let C = b;
      if (Pt(b)) {
        let P;
        b && b.variants && (P = b.variants, delete C.variants, C = (O) => {
          let z = b;
          return yr(O, br(P), P).forEach((N) => {
            z = Je(z, N);
          }), z;
        });
      } else
        typeof b == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        b.__emotion_real !== b && (C = (P) => Ui({
          styledArg: b,
          props: P,
          defaultTheme: n,
          themeId: t
        }));
      l && h && w.push((P) => {
        const O = fr(p({}, P, {
          defaultTheme: n,
          themeId: t
        })), z = Ru(l, O);
        if (z) {
          const L = {};
          return Object.entries(z).forEach(([N, I]) => {
            L[N] = typeof I == "function" ? I(p({}, P, {
              theme: O
            })) : I;
          }), h(P, L);
        }
        return null;
      }), l && !g && w.push((P) => {
        const O = fr(p({}, P, {
          defaultTheme: n,
          themeId: t
        }));
        return wu(P, Su(l, O), O, l);
      }), m || w.push(i);
      const A = w.length - S.length;
      if (Array.isArray(b) && A > 0) {
        const P = new Array(A).fill("");
        C = [...b, ...P], C.raw = [...b.raw, ...P];
      }
      const F = $(C, ...w);
      return s.muiName && (F.muiName = s.muiName), F;
    };
    return $.withConfig && (y.withConfig = $.withConfig), y;
  };
}
function ku(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ni(t.components[n].defaultProps, r);
}
function Ou({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = ui(n);
  return r && (o = o[r] || o), ku({
    theme: o,
    name: t,
    props: e
  });
}
function di(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function Iu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Gt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Gt(Iu(e));
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
function Xr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Mu(e) {
  e = Gt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), Xr({
    type: a,
    values: l
  });
}
function Vi(e) {
  e = Gt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Gt(Mu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Au(e, t) {
  const n = Vi(e), r = Vi(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ze(e, t) {
  return e = Gt(e), t = di(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Xr(e);
}
function Lo(e, t) {
  if (e = Gt(e), t = di(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Xr(e);
}
function No(e, t) {
  if (e = Gt(e), t = di(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Xr(e);
}
const Bu = /* @__PURE__ */ d.createContext(null), ha = Bu;
function ga() {
  return d.useContext(ha);
}
const Fu = typeof Symbol == "function" && Symbol.for, Lu = Fu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Nu(e, t) {
  return typeof t == "function" ? t(e) : p({}, e, t);
}
function zu(e) {
  const {
    children: t,
    theme: n
  } = e, r = ga(), o = d.useMemo(() => {
    const i = r === null ? n : Nu(r, n);
    return i != null && (i[Lu] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ T.jsx(ha.Provider, {
    value: o,
    children: t
  });
}
const Ki = {};
function qi(e, t, n, r = !1) {
  return d.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? p({}, t, {
        [e]: i
      }) : i;
      return r ? () => s : s;
    }
    return e ? p({}, t, {
      [e]: n
    }) : p({}, t, n);
  }, [e, t, n, r]);
}
function _u(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = ci(Ki), i = ga() || Ki, s = qi(r, o, n), a = qi(r, i, n, !0);
  return /* @__PURE__ */ T.jsx(zu, {
    theme: a,
    children: /* @__PURE__ */ T.jsx(Gn.Provider, {
      value: s,
      children: t
    })
  });
}
function Du(e, t) {
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
const ju = {
  black: "#000",
  white: "#fff"
}, Un = ju, Wu = {
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
}, Hu = Wu, Uu = {
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
}, tn = Uu, Vu = {
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
}, nn = Vu, Ku = {
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
}, Pn = Ku, qu = {
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
}, rn = qu, Gu = {
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
}, on = Gu, Xu = {
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
}, sn = Xu, Yu = ["mode", "contrastThreshold", "tonalOffset"], Gi = {
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
    paper: Un.white,
    default: Un.white
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
}, So = {
  text: {
    primary: Un.white,
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
    active: Un.white,
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
function Xi(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = No(e.main, o) : t === "dark" && (e.dark = Lo(e.main, i)));
}
function Zu(e = "light") {
  return e === "dark" ? {
    main: rn[200],
    light: rn[50],
    dark: rn[400]
  } : {
    main: rn[700],
    light: rn[400],
    dark: rn[800]
  };
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: tn[200],
    light: tn[50],
    dark: tn[400]
  } : {
    main: tn[500],
    light: tn[300],
    dark: tn[700]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: nn[500],
    light: nn[300],
    dark: nn[700]
  } : {
    main: nn[700],
    light: nn[400],
    dark: nn[800]
  };
}
function ed(e = "light") {
  return e === "dark" ? {
    main: on[400],
    light: on[300],
    dark: on[700]
  } : {
    main: on[700],
    light: on[500],
    dark: on[900]
  };
}
function td(e = "light") {
  return e === "dark" ? {
    main: sn[400],
    light: sn[300],
    dark: sn[700]
  } : {
    main: sn[800],
    light: sn[500],
    dark: sn[900]
  };
}
function nd(e = "light") {
  return e === "dark" ? {
    main: Pn[400],
    light: Pn[300],
    dark: Pn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Pn[500],
    dark: Pn[900]
  };
}
function rd(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = q(e, Yu), i = e.primary || Zu(t), s = e.secondary || Ju(t), a = e.error || Qu(t), l = e.info || ed(t), c = e.success || td(t), u = e.warning || nd(t);
  function f(m) {
    return Au(m, So.text.primary) >= n ? So.text.primary : Gi.text.primary;
  }
  const h = ({
    color: m,
    name: x,
    mainShade: R = 500,
    lightShade: $ = 300,
    darkShade: y = 700
  }) => {
    if (m = p({}, m), !m.main && m[R] && (m.main = m[R]), !m.hasOwnProperty("main"))
      throw new Error(Tt(11, x ? ` (${x})` : "", R));
    if (typeof m.main != "string")
      throw new Error(Tt(12, x ? ` (${x})` : "", JSON.stringify(m.main)));
    return Xi(m, "light", $, r), Xi(m, "dark", y, r), m.contrastText || (m.contrastText = f(m.main)), m;
  }, v = {
    dark: So,
    light: Gi
  };
  return Je(p({
    // A collection of common colors.
    common: p({}, Un),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: Hu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, v[t]), o);
}
const od = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function id(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yi = {
  textTransform: "uppercase"
}, Zi = '"Roboto", "Helvetica", "Arial", sans-serif';
function sd(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Zi,
    // The default font size of the Material Specification.
    fontSize: o = 14,
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
  } = n, h = q(n, od), v = o / 14, g = f || ((R) => `${R / c * v}rem`), m = (R, $, y, b, S) => p({
    fontFamily: r,
    fontWeight: R,
    fontSize: g($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: y
  }, r === Zi ? {
    letterSpacing: `${id(b / $)}em`
  } : {}, S, u), x = {
    h1: m(i, 96, 1.167, -1.5),
    h2: m(i, 60, 1.2, -0.5),
    h3: m(s, 48, 1.167, 0),
    h4: m(s, 34, 1.235, 0.25),
    h5: m(s, 24, 1.334, 0),
    h6: m(a, 20, 1.6, 0.15),
    subtitle1: m(s, 16, 1.75, 0.15),
    subtitle2: m(a, 14, 1.57, 0.1),
    body1: m(s, 16, 1.5, 0.15),
    body2: m(s, 14, 1.43, 0.15),
    button: m(a, 14, 1.75, 0.4, Yi),
    caption: m(s, 12, 1.66, 0.4),
    overline: m(s, 12, 2.66, 1, Yi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Je(p({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l
  }, x), h, {
    clone: !1
    // No need to clone deep
  });
}
const ad = 0.2, ld = 0.14, cd = 0.12;
function Ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ad})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ld})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cd})`].join(",");
}
const ud = ["none", Ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], dd = ud, pd = ["duration", "easing", "delay"], fd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, md = {
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
function Ji(e) {
  return `${Math.round(e)}ms`;
}
function hd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function gd(e) {
  const t = p({}, fd, e.easing), n = p({}, md, e.duration);
  return p({
    getAutoHeightDuration: hd,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = i;
      return q(i, pd), (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof s == "string" ? s : Ji(s)} ${a} ${typeof l == "string" ? l : Ji(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const vd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, bd = vd, yd = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function xd(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = q(e, yd);
  if (e.vars)
    throw new Error(Tt(18));
  const a = rd(r), l = li(e);
  let c = Je(l, {
    mixins: Du(l.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: dd.slice(),
    typography: sd(a, i),
    transitions: gd(o),
    zIndex: p({}, bd)
  });
  return c = Je(c, s), c = t.reduce((u, f) => Je(u, f), c), c.unstable_sxConfig = p({}, Gr, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(f) {
    return ai({
      sx: f,
      theme: this
    });
  }, c;
}
const Cd = xd(), Yr = Cd;
function Zr() {
  const e = ui(Yr);
  return e[fn] || e;
}
function Se({
  props: e,
  name: t
}) {
  return Ou({
    props: e,
    name: t,
    defaultTheme: Yr,
    themeId: fn
  });
}
const gt = (e) => Fn(e) && e !== "classes", Rd = Fn, Sd = Tu({
  themeId: fn,
  defaultTheme: Yr,
  rootShouldForwardProp: gt
}), V = Sd, wd = ["theme"];
function ab(e) {
  let {
    theme: t
  } = e, n = q(e, wd);
  const r = t[fn];
  return /* @__PURE__ */ T.jsx(_u, p({}, n, {
    themeId: r ? fn : void 0,
    theme: r || t
  }));
}
const $d = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Qi = $d;
function Pd(e) {
  return be("MuiSvgIcon", e);
}
ye("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ed = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Td = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`]
  };
  return Re(o, Pd, r);
}, kd = V("svg", {
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
  var n, r, o, i, s, a, l, c, u, f, h, v, g;
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
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem",
      large: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? f : {
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), va = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: c,
    inheritViewBox: u = !1,
    titleAccess: f,
    viewBox: h = "0 0 24 24"
  } = r, v = q(r, Ed), g = /* @__PURE__ */ d.isValidElement(o) && o.type === "svg", m = p({}, r, {
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: h,
    hasSvgAsChild: g
  }), x = {};
  u || (x.viewBox = h);
  const R = Td(m);
  return /* @__PURE__ */ T.jsxs(kd, p({
    as: a,
    className: Q(R.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, x, v, g && o.props, {
    ownerState: m,
    children: [g ? o.props.children : o, f ? /* @__PURE__ */ T.jsx("title", {
      children: f
    }) : null]
  }));
});
va.muiName = "SvgIcon";
const es = va;
function xn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ T.jsx(es, p({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = es.muiName, /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(n));
}
var $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi = Symbol.for("react.element"), fi = Symbol.for("react.portal"), Jr = Symbol.for("react.fragment"), Qr = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), to = Symbol.for("react.provider"), no = Symbol.for("react.context"), Od = Symbol.for("react.server_context"), ro = Symbol.for("react.forward_ref"), oo = Symbol.for("react.suspense"), io = Symbol.for("react.suspense_list"), so = Symbol.for("react.memo"), ao = Symbol.for("react.lazy"), Id = Symbol.for("react.offscreen"), ba;
ba = Symbol.for("react.module.reference");
function ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case pi:
        switch (e = e.type, e) {
          case Jr:
          case eo:
          case Qr:
          case oo:
          case io:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Od:
              case no:
              case ro:
              case ao:
              case so:
              case to:
                return e;
              default:
                return t;
            }
        }
      case fi:
        return t;
    }
  }
}
$e.ContextConsumer = no;
$e.ContextProvider = to;
$e.Element = pi;
$e.ForwardRef = ro;
$e.Fragment = Jr;
$e.Lazy = ao;
$e.Memo = so;
$e.Portal = fi;
$e.Profiler = eo;
$e.StrictMode = Qr;
$e.Suspense = oo;
$e.SuspenseList = io;
$e.isAsyncMode = function() {
  return !1;
};
$e.isConcurrentMode = function() {
  return !1;
};
$e.isContextConsumer = function(e) {
  return ht(e) === no;
};
$e.isContextProvider = function(e) {
  return ht(e) === to;
};
$e.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pi;
};
$e.isForwardRef = function(e) {
  return ht(e) === ro;
};
$e.isFragment = function(e) {
  return ht(e) === Jr;
};
$e.isLazy = function(e) {
  return ht(e) === ao;
};
$e.isMemo = function(e) {
  return ht(e) === so;
};
$e.isPortal = function(e) {
  return ht(e) === fi;
};
$e.isProfiler = function(e) {
  return ht(e) === eo;
};
$e.isStrictMode = function(e) {
  return ht(e) === Qr;
};
$e.isSuspense = function(e) {
  return ht(e) === oo;
};
$e.isSuspenseList = function(e) {
  return ht(e) === io;
};
$e.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Jr || e === eo || e === Qr || e === oo || e === io || e === Id || typeof e == "object" && e !== null && (e.$$typeof === ao || e.$$typeof === so || e.$$typeof === to || e.$$typeof === no || e.$$typeof === ro || e.$$typeof === ba || e.getModuleId !== void 0);
};
$e.typeOf = ht;
function zo(e, t) {
  return zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, zo(e, t);
}
function ya(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zo(e, t);
}
const ts = {
  disabled: !1
}, xr = Et.createContext(null);
var Md = function(t) {
  return t.scrollTop;
}, Mn = "unmounted", Ht = "exited", Ut = "entering", ln = "entered", _o = "exiting", Mt = /* @__PURE__ */ function(e) {
  ya(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? a ? (l = Ht, i.appearStatus = Ut) : l = ln : r.unmountOnExit || r.mountOnEnter ? l = Mn : l = Ht, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Mn ? {
      status: Ht
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Ut && s !== ln && (i = Ut) : (s === Ut || s === ln) && (i = _o);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ut) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : rr.findDOMNode(this);
          s && Md(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ht && this.setState({
        status: Mn
      });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [a] : [rr.findDOMNode(this), a], c = l[0], u = l[1], f = this.getTimeouts(), h = a ? f.appear : f.enter;
    if (!o && !s || ts.disabled) {
      this.safeSetState({
        status: ln
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Ut
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: ln
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : rr.findDOMNode(this);
    if (!i || ts.disabled) {
      this.safeSetState({
        status: Ht
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: _o
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Ht
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : rr.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = l[0], u = l[1];
      this.props.addEndListener(c, u);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Mn)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = q(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Et.createElement(xr.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : Et.cloneElement(Et.Children.only(s), a))
    );
  }, t;
}(Et.Component);
Mt.contextType = xr;
Mt.propTypes = {};
function an() {
}
Mt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: an,
  onEntering: an,
  onEntered: an,
  onExit: an,
  onExiting: an,
  onExited: an
};
Mt.UNMOUNTED = Mn;
Mt.EXITED = Ht;
Mt.ENTERING = Ut;
Mt.ENTERED = ln;
Mt.EXITING = _o;
const xa = Mt;
function Ad(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mi(e, t) {
  var n = function(i) {
    return t && d.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && d.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Bd(e, t) {
  e = e || {}, t = t || {};
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var c = r[l][s];
        a[r[l][s]] = n(c);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = n(o[s]);
  return a;
}
function Vt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Fd(e, t) {
  return mi(e.children, function(n) {
    return d.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Vt(n, "appear", e),
      enter: Vt(n, "enter", e),
      exit: Vt(n, "exit", e)
    });
  });
}
function Ld(e, t, n) {
  var r = mi(e.children), o = Bd(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (d.isValidElement(s)) {
      var a = i in t, l = i in r, c = t[i], u = d.isValidElement(c) && !c.props.in;
      l && (!a || u) ? o[i] = d.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Vt(s, "exit", e),
        enter: Vt(s, "enter", e)
      }) : !l && a && !u ? o[i] = d.cloneElement(s, {
        in: !1
      }) : l && a && d.isValidElement(c) && (o[i] = d.cloneElement(s, {
        onExited: n.bind(null, s),
        in: c.props.in,
        exit: Vt(s, "exit", e),
        enter: Vt(s, "enter", e)
      }));
    }
  }), o;
}
var Nd = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, zd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, hi = /* @__PURE__ */ function(e) {
  ya(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(Ad(i));
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
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, l = i.firstRender;
    return {
      children: l ? Fd(o, a) : Ld(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = mi(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var l = p({}, a.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = q(o, ["component", "childFactory"]), l = this.state.contextValue, c = Nd(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Et.createElement(xr.Provider, {
      value: l
    }, c) : /* @__PURE__ */ Et.createElement(xr.Provider, {
      value: l
    }, /* @__PURE__ */ Et.createElement(i, a, c));
  }, t;
}(Et.Component);
hi.propTypes = {};
hi.defaultProps = zd;
const _d = hi, Ca = (e) => e.scrollTop;
function Cr(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
function Dd(e) {
  return be("MuiPaper", e);
}
ye("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const jd = ["className", "component", "elevation", "square", "variant"], Wd = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Re(i, Dd, o);
}, Hd = V("div", {
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
    backgroundImage: `linear-gradient(${Ze("#fff", Qi(t.elevation))}, ${Ze("#fff", Qi(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Ud = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: a = !1,
    variant: l = "elevation"
  } = r, c = q(r, jd), u = p({}, r, {
    component: i,
    elevation: s,
    square: a,
    variant: l
  }), f = Wd(u);
  return /* @__PURE__ */ T.jsx(Hd, p({
    as: i,
    ownerState: u,
    className: Q(f.root, o),
    ref: n
  }, c));
}), Ra = Ud;
function Vd(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: l,
    timeout: c
  } = e, [u, f] = d.useState(!1), h = Q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, g = Q(n.child, u && n.childLeaving, r && n.childPulsate);
  return !a && !u && f(!0), d.useEffect(() => {
    if (!a && l != null) {
      const m = setTimeout(l, c);
      return () => {
        clearTimeout(m);
      };
    }
  }, [l, a, c]), /* @__PURE__ */ T.jsx("span", {
    className: h,
    style: v,
    children: /* @__PURE__ */ T.jsx("span", {
      className: g
    })
  });
}
const Kd = ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ut = Kd, qd = ["center", "classes", "className"];
let lo = (e) => e, ns, rs, os, is;
const Do = 550, Gd = 80, Xd = ti(ns || (ns = lo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Yd = ti(rs || (rs = lo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Zd = ti(os || (os = lo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Jd = V("span", {
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
}), Qd = V(Vd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(is || (is = lo`
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
`), ut.rippleVisible, Xd, Do, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ut.child, ut.childLeaving, Yd, Do, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.childPulsate, Zd, ({
  theme: e
}) => e.transitions.easing.easeInOut), ep = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = r, a = q(r, qd), [l, c] = d.useState([]), u = d.useRef(0), f = d.useRef(null);
  d.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [l]);
  const h = d.useRef(!1), v = d.useRef(0), g = d.useRef(null), m = d.useRef(null);
  d.useEffect(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const x = d.useCallback((b) => {
    const {
      pulsate: S,
      rippleX: w,
      rippleY: C,
      rippleSize: A,
      cb: F
    } = b;
    c((P) => [...P, /* @__PURE__ */ T.jsx(Qd, {
      classes: {
        ripple: Q(i.ripple, ut.ripple),
        rippleVisible: Q(i.rippleVisible, ut.rippleVisible),
        ripplePulsate: Q(i.ripplePulsate, ut.ripplePulsate),
        child: Q(i.child, ut.child),
        childLeaving: Q(i.childLeaving, ut.childLeaving),
        childPulsate: Q(i.childPulsate, ut.childPulsate)
      },
      timeout: Do,
      pulsate: S,
      rippleX: w,
      rippleY: C,
      rippleSize: A
    }, u.current)]), u.current += 1, f.current = F;
  }, [i]), R = d.useCallback((b = {}, S = {}, w = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: A = o || S.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = S;
    if ((b == null ? void 0 : b.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (h.current = !0);
    const P = F ? null : m.current, O = P ? P.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, L, N;
    if (A || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      z = Math.round(O.width / 2), L = Math.round(O.height / 2);
    else {
      const {
        clientX: I,
        clientY: M
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      z = Math.round(I - O.left), L = Math.round(M - O.top);
    }
    if (A)
      N = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), N % 2 === 0 && (N += 1);
    else {
      const I = Math.max(Math.abs((P ? P.clientWidth : 0) - z), z) * 2 + 2, M = Math.max(Math.abs((P ? P.clientHeight : 0) - L), L) * 2 + 2;
      N = Math.sqrt(I ** 2 + M ** 2);
    }
    b != null && b.touches ? g.current === null && (g.current = () => {
      x({
        pulsate: C,
        rippleX: z,
        rippleY: L,
        rippleSize: N,
        cb: w
      });
    }, v.current = setTimeout(() => {
      g.current && (g.current(), g.current = null);
    }, Gd)) : x({
      pulsate: C,
      rippleX: z,
      rippleY: L,
      rippleSize: N,
      cb: w
    });
  }, [o, x]), $ = d.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), y = d.useCallback((b, S) => {
    if (clearTimeout(v.current), (b == null ? void 0 : b.type) === "touchend" && g.current) {
      g.current(), g.current = null, v.current = setTimeout(() => {
        y(b, S);
      });
      return;
    }
    g.current = null, c((w) => w.length > 0 ? w.slice(1) : w), f.current = S;
  }, []);
  return d.useImperativeHandle(n, () => ({
    pulsate: $,
    start: R,
    stop: y
  }), [$, R, y]), /* @__PURE__ */ T.jsx(Jd, p({
    className: Q(ut.root, i.root, s),
    ref: m
  }, a, {
    children: /* @__PURE__ */ T.jsx(_d, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), tp = ep;
function np(e) {
  return be("MuiButtonBase", e);
}
const rp = ye("MuiButtonBase", ["root", "disabled", "focusVisible"]), op = rp, ip = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], sp = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = Re({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, np, o);
  return n && r && (s.root += ` ${r}`), s;
}, ap = V("button", {
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
  [`&.${op.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), lp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: l = "button",
    disabled: c = !1,
    disableRipple: u = !1,
    disableTouchRipple: f = !1,
    focusRipple: h = !1,
    LinkComponent: v = "a",
    onBlur: g,
    onClick: m,
    onContextMenu: x,
    onDragLeave: R,
    onFocus: $,
    onFocusVisible: y,
    onKeyDown: b,
    onKeyUp: S,
    onMouseDown: w,
    onMouseLeave: C,
    onMouseUp: A,
    onTouchEnd: F,
    onTouchMove: P,
    onTouchStart: O,
    tabIndex: z = 0,
    TouchRippleProps: L,
    touchRippleRef: N,
    type: I
  } = r, M = q(r, ip), B = d.useRef(null), D = d.useRef(null), K = He(D, N), {
    isFocusVisibleRef: te,
    onFocus: Me,
    onBlur: fe,
    ref: oe
  } = la(), [U, se] = d.useState(!1);
  c && U && se(!1), d.useImperativeHandle(o, () => ({
    focusVisible: () => {
      se(!0), B.current.focus();
    }
  }), []);
  const [ue, ie] = d.useState(!1);
  d.useEffect(() => {
    ie(!0);
  }, []);
  const ne = ue && !u && !c;
  d.useEffect(() => {
    U && h && !u && ue && D.current.pulsate();
  }, [u, h, U, ue]);
  function le(H, Be, Xe = f) {
    return dt((nt) => (Be && Be(nt), !Xe && D.current && D.current[H](nt), !0));
  }
  const Ae = le("start", w), X = le("stop", x), me = le("stop", R), ee = le("stop", A), J = le("stop", (H) => {
    U && H.preventDefault(), C && C(H);
  }), _ = le("start", O), Ke = le("stop", F), re = le("stop", P), Ee = le("stop", (H) => {
    fe(H), te.current === !1 && se(!1), g && g(H);
  }, !1), ze = dt((H) => {
    B.current || (B.current = H.currentTarget), Me(H), te.current === !0 && (se(!0), y && y(H)), $ && $(H);
  }), Pe = () => {
    const H = B.current;
    return l && l !== "button" && !(H.tagName === "A" && H.href);
  }, de = d.useRef(!1), Te = dt((H) => {
    h && !de.current && U && D.current && H.key === " " && (de.current = !0, D.current.stop(H, () => {
      D.current.start(H);
    })), H.target === H.currentTarget && Pe() && H.key === " " && H.preventDefault(), b && b(H), H.target === H.currentTarget && Pe() && H.key === "Enter" && !c && (H.preventDefault(), m && m(H));
  }), ke = dt((H) => {
    h && H.key === " " && D.current && U && !H.defaultPrevented && (de.current = !1, D.current.stop(H, () => {
      D.current.pulsate(H);
    })), S && S(H), m && H.target === H.currentTarget && Pe() && H.key === " " && !H.defaultPrevented && m(H);
  });
  let pe = l;
  pe === "button" && (M.href || M.to) && (pe = v);
  const _e = {};
  pe === "button" ? (_e.type = I === void 0 ? "button" : I, _e.disabled = c) : (!M.href && !M.to && (_e.role = "button"), c && (_e["aria-disabled"] = c));
  const Fe = He(n, oe, B), we = p({}, r, {
    centerRipple: i,
    component: l,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: f,
    focusRipple: h,
    tabIndex: z,
    focusVisible: U
  }), G = sp(we);
  return /* @__PURE__ */ T.jsxs(ap, p({
    as: pe,
    className: Q(G.root, a),
    ownerState: we,
    onBlur: Ee,
    onClick: m,
    onContextMenu: X,
    onFocus: ze,
    onKeyDown: Te,
    onKeyUp: ke,
    onMouseDown: Ae,
    onMouseLeave: J,
    onMouseUp: ee,
    onDragLeave: me,
    onTouchEnd: Ke,
    onTouchMove: re,
    onTouchStart: _,
    ref: Fe,
    tabIndex: c ? -1 : z,
    type: I
  }, _e, M, {
    children: [s, ne ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ T.jsx(tp, p({
        ref: K,
        center: i
      }, L))
    ) : null]
  }));
}), gi = lp;
function cp(e) {
  return be("MuiAlert", e);
}
const up = ye("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), ss = up;
function dp(e) {
  return be("MuiIconButton", e);
}
const pp = ye("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), fp = pp, mp = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], hp = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${Z(r)}`, o && `edge${Z(o)}`, `size${Z(i)}`]
  };
  return Re(s, dp, t);
}, gp = V(gi, {
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return p({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && p({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": p({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(r.main, e.palette.action.hoverOpacity)
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
    [`&.${fp.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), vp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: l = !1,
    disableFocusRipple: c = !1,
    size: u = "medium"
  } = r, f = q(r, mp), h = p({}, r, {
    edge: o,
    color: a,
    disabled: l,
    disableFocusRipple: c,
    size: u
  }), v = hp(h);
  return /* @__PURE__ */ T.jsx(gp, p({
    className: Q(v.root, s),
    centerRipple: !0,
    focusRipple: !c,
    disabled: l,
    ref: n,
    ownerState: h
  }, f, {
    children: i
  }));
}), bp = vp, yp = xn(/* @__PURE__ */ T.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), xp = xn(/* @__PURE__ */ T.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), Cp = xn(/* @__PURE__ */ T.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), Rp = xn(/* @__PURE__ */ T.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), Sp = xn(/* @__PURE__ */ T.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), wp = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], $p = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `${t}${Z(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return Re(i, cp, o);
}, Pp = V(Ra, {
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
  const n = e.palette.mode === "light" ? Lo : No, r = e.palette.mode === "light" ? No : Lo, o = t.color || t.severity;
  return p({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, o && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9),
    [`& .${ss.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[o].light}`,
    [`& .${ss.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "filled" && p({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${o}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
    color: e.palette.getContrastText(e.palette[o].main)
  }));
}), Ep = V("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Tp = V("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), as = V("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), ls = {
  success: /* @__PURE__ */ T.jsx(yp, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ T.jsx(xp, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ T.jsx(Cp, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ T.jsx(Rp, {
    fontSize: "inherit"
  })
}, kp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, s, a, l;
  const c = Se({
    props: t,
    name: "MuiAlert"
  }), {
    action: u,
    children: f,
    className: h,
    closeText: v = "Close",
    color: g,
    components: m = {},
    componentsProps: x = {},
    icon: R,
    iconMapping: $ = ls,
    onClose: y,
    role: b = "alert",
    severity: S = "success",
    slotProps: w = {},
    slots: C = {},
    variant: A = "standard"
  } = c, F = q(c, wp), P = p({}, c, {
    color: g,
    severity: S,
    variant: A
  }), O = $p(P), z = (r = (o = C.closeButton) != null ? o : m.CloseButton) != null ? r : bp, L = (i = (s = C.closeIcon) != null ? s : m.CloseIcon) != null ? i : Sp, N = (a = w.closeButton) != null ? a : x.closeButton, I = (l = w.closeIcon) != null ? l : x.closeIcon;
  return /* @__PURE__ */ T.jsxs(Pp, p({
    role: b,
    elevation: 0,
    ownerState: P,
    className: Q(O.root, h),
    ref: n
  }, F, {
    children: [R !== !1 ? /* @__PURE__ */ T.jsx(Ep, {
      ownerState: P,
      className: O.icon,
      children: R || $[S] || ls[S]
    }) : null, /* @__PURE__ */ T.jsx(Tp, {
      ownerState: P,
      className: O.message,
      children: f
    }), u != null ? /* @__PURE__ */ T.jsx(as, {
      ownerState: P,
      className: O.action,
      children: u
    }) : null, u == null && y ? /* @__PURE__ */ T.jsx(as, {
      ownerState: P,
      className: O.action,
      children: /* @__PURE__ */ T.jsx(z, p({
        size: "small",
        "aria-label": v,
        title: v,
        color: "inherit",
        onClick: y
      }, N, {
        children: /* @__PURE__ */ T.jsx(L, p({
          fontSize: "small"
        }, I))
      }))
    }) : null]
  }));
}), lb = kp;
function Op(e) {
  return be("MuiTypography", e);
}
ye("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Ip = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Mp = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${Z(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return Re(a, Op, s);
}, Ap = V("span", {
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
})), cs = {
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
}, Bp = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Fp = (e) => Bp[e] || e, Lp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiTypography"
  }), o = Fp(r.color), i = vu(p({}, r, {
    color: o
  })), {
    align: s = "inherit",
    className: a,
    component: l,
    gutterBottom: c = !1,
    noWrap: u = !1,
    paragraph: f = !1,
    variant: h = "body1",
    variantMapping: v = cs
  } = i, g = q(i, Ip), m = p({}, i, {
    align: s,
    color: o,
    className: a,
    component: l,
    gutterBottom: c,
    noWrap: u,
    paragraph: f,
    variant: h,
    variantMapping: v
  }), x = l || (f ? "p" : v[h] || cs[h]) || "span", R = Mp(m);
  return /* @__PURE__ */ T.jsx(Ap, p({
    as: x,
    ref: n,
    ownerState: m,
    className: Q(R.root, a)
  }, g));
}), Sa = Lp;
function Np(e) {
  return be("MuiAlertTitle", e);
}
ye("MuiAlertTitle", ["root"]);
const zp = ["className"], _p = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"]
  }, Np, t);
}, Dp = V(Sa, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), jp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: o
  } = r, i = q(r, zp), s = r, a = _p(s);
  return /* @__PURE__ */ T.jsx(Dp, p({
    gutterBottom: !0,
    component: "div",
    ownerState: s,
    ref: n,
    className: Q(a.root, o)
  }, i));
}), cb = jp;
function Rr(e) {
  return typeof e == "string";
}
function An(e, t, n) {
  return e === void 0 || Rr(e) ? t : p({}, t, {
    ownerState: p({}, t.ownerState, n)
  });
}
const Wp = {
  disableDefaultClasses: !1
}, Hp = /* @__PURE__ */ d.createContext(Wp);
function Up(e) {
  const {
    disableDefaultClasses: t
  } = d.useContext(Hp);
  return (n) => t ? "" : e(n);
}
function Ln(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Vp(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function us(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Kp(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = Q(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = p({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), m = p({}, n, o, r);
    return v.length > 0 && (m.className = v), Object.keys(g).length > 0 && (m.style = g), {
      props: m,
      internalRef: void 0
    };
  }
  const s = Ln(p({}, o, r)), a = us(r), l = us(o), c = t(s), u = Q(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = p({}, c == null ? void 0 : c.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), h = p({}, c, n, l, a);
  return u.length > 0 && (h.className = u), Object.keys(f).length > 0 && (h.style = f), {
    props: h,
    internalRef: c.ref
  };
}
const qp = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Xt(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = q(e, qp), a = i ? {} : Vp(r, o), {
    props: l,
    internalRef: c
  } = Kp(p({}, s, {
    externalSlotProps: a
  })), u = He(c, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return An(n, p({}, l, {
    ref: u
  }), o);
}
function ds(e) {
  return e.substring(2).toLowerCase();
}
function Gp(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function ub(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = d.useRef(!1), a = d.useRef(null), l = d.useRef(!1), c = d.useRef(!1);
  d.useEffect(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const u = He(
    // @ts-expect-error TODO upstream fix
    t.ref,
    a
  ), f = dt((g) => {
    const m = c.current;
    c.current = !1;
    const x = Ue(a.current);
    if (!l.current || !a.current || "clientX" in g && Gp(g, x))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let R;
    g.composedPath ? R = g.composedPath().indexOf(a.current) > -1 : R = !x.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ) || a.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      g.target
    ), !R && (n || !m) && o(g);
  }), h = (g) => (m) => {
    c.current = !0;
    const x = t.props[g];
    x && x(m);
  }, v = {
    ref: u
  };
  return i !== !1 && (v[i] = h(i)), d.useEffect(() => {
    if (i !== !1) {
      const g = ds(i), m = Ue(a.current), x = () => {
        s.current = !0;
      };
      return m.addEventListener(g, f), m.addEventListener("touchmove", x), () => {
        m.removeEventListener(g, f), m.removeEventListener("touchmove", x);
      };
    }
  }, [f, i]), r !== !1 && (v[r] = h(r)), d.useEffect(() => {
    if (r !== !1) {
      const g = ds(r), m = Ue(a.current);
      return m.addEventListener(g, f), () => {
        m.removeEventListener(g, f);
      };
    }
  }, [f, r]), /* @__PURE__ */ T.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(t, v)
  });
}
const Xp = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Yp(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Zp(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Jp(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Zp(e));
}
function Qp(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Xp)).forEach((r, o) => {
    const i = Yp(r);
    i === -1 || !Jp(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function ef() {
  return !0;
}
function tf(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Qp,
    isEnabled: s = ef,
    open: a
  } = e, l = d.useRef(!1), c = d.useRef(null), u = d.useRef(null), f = d.useRef(null), h = d.useRef(null), v = d.useRef(!1), g = d.useRef(null), m = He(t.ref, g), x = d.useRef(null);
  d.useEffect(() => {
    !a || !g.current || (v.current = !n);
  }, [n, a]), d.useEffect(() => {
    if (!a || !g.current)
      return;
    const y = Ue(g.current);
    return g.current.contains(y.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), v.current && g.current.focus()), () => {
      o || (f.current && f.current.focus && (l.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), d.useEffect(() => {
    if (!a || !g.current)
      return;
    const y = Ue(g.current), b = (C) => {
      x.current = C, !(r || !s() || C.key !== "Tab") && y.activeElement === g.current && C.shiftKey && (l.current = !0, u.current && u.current.focus());
    }, S = () => {
      const C = g.current;
      if (C === null)
        return;
      if (!y.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (C.contains(y.activeElement) || r && y.activeElement !== c.current && y.activeElement !== u.current)
        return;
      if (y.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!v.current)
        return;
      let A = [];
      if ((y.activeElement === c.current || y.activeElement === u.current) && (A = i(g.current)), A.length > 0) {
        var F, P;
        const O = !!((F = x.current) != null && F.shiftKey && ((P = x.current) == null ? void 0 : P.key) === "Tab"), z = A[0], L = A[A.length - 1];
        typeof z != "string" && typeof L != "string" && (O ? L.focus() : z.focus());
      } else
        C.focus();
    };
    y.addEventListener("focusin", S), y.addEventListener("keydown", b, !0);
    const w = setInterval(() => {
      y.activeElement && y.activeElement.tagName === "BODY" && S();
    }, 50);
    return () => {
      clearInterval(w), y.removeEventListener("focusin", S), y.removeEventListener("keydown", b, !0);
    };
  }, [n, r, o, s, a, i]);
  const R = (y) => {
    f.current === null && (f.current = y.relatedTarget), v.current = !0, h.current = y.target;
    const b = t.props.onFocus;
    b && b(y);
  }, $ = (y) => {
    f.current === null && (f.current = y.relatedTarget), v.current = !0;
  };
  return /* @__PURE__ */ T.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ T.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: $,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ d.cloneElement(t, {
      ref: m,
      onFocus: R
    }), /* @__PURE__ */ T.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: $,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
const nf = /* @__PURE__ */ d.createContext(void 0);
function rf() {
  return d.useContext(nf);
}
function db(e = {}) {
  const {
    defaultValue: t,
    disabled: n = !1,
    error: r = !1,
    onBlur: o,
    onChange: i,
    onFocus: s,
    required: a = !1,
    value: l,
    inputRef: c
  } = e, u = rf();
  let f, h, v, g, m;
  if (u) {
    var x, R, $;
    f = void 0, h = (x = u.disabled) != null ? x : !1, v = (R = u.error) != null ? R : !1, g = ($ = u.required) != null ? $ : !1, m = u.value;
  } else
    f = t, h = n, v = r, g = a, m = l;
  const {
    current: y
  } = d.useRef(m != null), b = d.useCallback((I) => {
  }, []), S = d.useRef(null), w = He(S, c, b), [C, A] = d.useState(!1);
  d.useEffect(() => {
    !u && h && C && (A(!1), o == null || o());
  }, [u, h, C, o]);
  const F = (I) => (M) => {
    var B;
    if (u != null && u.disabled) {
      M.stopPropagation();
      return;
    }
    if ((B = I.onFocus) == null || B.call(I, M), u && u.onFocus) {
      var D;
      u == null || (D = u.onFocus) == null || D.call(u);
    } else
      A(!0);
  }, P = (I) => (M) => {
    var B;
    (B = I.onBlur) == null || B.call(I, M), u && u.onBlur ? u.onBlur() : A(!1);
  }, O = (I) => (M, ...B) => {
    var D, K;
    if (!y && (M.target || S.current) == null)
      throw new Error(Tt(17));
    u == null || (D = u.onChange) == null || D.call(u, M), (K = I.onChange) == null || K.call(I, M, ...B);
  }, z = (I) => (M) => {
    var B;
    S.current && M.currentTarget === M.target && S.current.focus(), (B = I.onClick) == null || B.call(I, M);
  };
  return {
    disabled: h,
    error: v,
    focused: C,
    formControlContext: u,
    getInputProps: (I = {}) => {
      const B = p({}, {
        onBlur: o,
        onChange: i,
        onFocus: s
      }, Ln(I)), D = p({}, B, {
        onBlur: P(B),
        onChange: O(B),
        onFocus: F(B)
      });
      return p({}, D, {
        "aria-invalid": v || void 0,
        defaultValue: f,
        value: m,
        required: g,
        disabled: h
      }, I, {
        ref: w
      }, D);
    },
    getRootProps: (I = {}) => {
      const M = Ln(e, ["onBlur", "onChange", "onFocus"]), B = p({}, M, Ln(I));
      return p({}, I, B, {
        onClick: z(B)
      });
    },
    inputRef: w,
    required: g,
    value: m
  };
}
var Qe = "top", ft = "bottom", mt = "right", et = "left", vi = "auto", Zn = [Qe, ft, mt, et], mn = "start", Vn = "end", of = "clippingParents", wa = "viewport", En = "popper", sf = "reference", ps = /* @__PURE__ */ Zn.reduce(function(e, t) {
  return e.concat([t + "-" + mn, t + "-" + Vn]);
}, []), $a = /* @__PURE__ */ [].concat(Zn, [vi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + mn, t + "-" + Vn]);
}, []), af = "beforeRead", lf = "read", cf = "afterRead", uf = "beforeMain", df = "main", pf = "afterMain", ff = "beforeWrite", mf = "write", hf = "afterWrite", gf = [af, lf, cf, uf, df, pf, ff, mf, hf];
function St(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function at(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yt(e) {
  var t = at(e).Element;
  return e instanceof t || e instanceof Element;
}
function pt(e) {
  var t = at(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !pt(i) || !St(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function bf(e) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !pt(o) || !St(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const yf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vf,
  effect: bf,
  requires: ["computeStyles"]
};
function Rt(e) {
  return e.split("-")[0];
}
var Kt = Math.max, Sr = Math.min, hn = Math.round;
function jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pa() {
  return !/^((?!chrome|android).)*safari/i.test(jo());
}
function gn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && pt(e) && (o = e.offsetWidth > 0 && hn(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && hn(r.height) / e.offsetHeight || 1);
  var s = Yt(e) ? at(e) : window, a = s.visualViewport, l = !Pa() && n, c = (r.left + (l && a ? a.offsetLeft : 0)) / o, u = (r.top + (l && a ? a.offsetTop : 0)) / i, f = r.width / o, h = r.height / i;
  return {
    width: f,
    height: h,
    top: u,
    right: c + f,
    bottom: u + h,
    left: c,
    x: c,
    y: u
  };
}
function yi(e) {
  var t = gn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ea(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && bi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function It(e) {
  return at(e).getComputedStyle(e);
}
function xf(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function Nt(e) {
  return ((Yt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function co(e) {
  return St(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (bi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Nt(e)
  );
}
function fs(e) {
  return !pt(e) || // https://github.com/popperjs/popper-core/issues/837
  It(e).position === "fixed" ? null : e.offsetParent;
}
function Cf(e) {
  var t = /firefox/i.test(jo()), n = /Trident/i.test(jo());
  if (n && pt(e)) {
    var r = It(e);
    if (r.position === "fixed")
      return null;
  }
  var o = co(e);
  for (bi(o) && (o = o.host); pt(o) && ["html", "body"].indexOf(St(o)) < 0; ) {
    var i = It(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Jn(e) {
  for (var t = at(e), n = fs(e); n && xf(n) && It(n).position === "static"; )
    n = fs(n);
  return n && (St(n) === "html" || St(n) === "body" && It(n).position === "static") ? t : n || Cf(e) || t;
}
function xi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Nn(e, t, n) {
  return Kt(e, Sr(t, n));
}
function Rf(e, t, n) {
  var r = Nn(e, t, n);
  return r > n ? n : r;
}
function Ta() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ka(e) {
  return Object.assign({}, Ta(), e);
}
function Oa(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Sf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ka(typeof t != "number" ? t : Oa(t, Zn));
};
function wf(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Rt(n.placement), l = xi(a), c = [et, mt].indexOf(a) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var f = Sf(o.padding, n), h = yi(i), v = l === "y" ? Qe : et, g = l === "y" ? ft : mt, m = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], x = s[l] - n.rects.reference[l], R = Jn(i), $ = R ? l === "y" ? R.clientHeight || 0 : R.clientWidth || 0 : 0, y = m / 2 - x / 2, b = f[v], S = $ - h[u] - f[g], w = $ / 2 - h[u] / 2 + y, C = Nn(b, w, S), A = l;
    n.modifiersData[r] = (t = {}, t[A] = C, t.centerOffset = C - w, t);
  }
}
function $f(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ea(t.elements.popper, o) && (t.elements.arrow = o));
}
const Pf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wf,
  effect: $f,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vn(e) {
  return e.split("-")[1];
}
var Ef = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Tf(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: hn(n * o) / o || 0,
    y: hn(r * o) / o || 0
  };
}
function ms(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, h = s.x, v = h === void 0 ? 0 : h, g = s.y, m = g === void 0 ? 0 : g, x = typeof u == "function" ? u({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = x.x, m = x.y;
  var R = s.hasOwnProperty("x"), $ = s.hasOwnProperty("y"), y = et, b = Qe, S = window;
  if (c) {
    var w = Jn(n), C = "clientHeight", A = "clientWidth";
    if (w === at(n) && (w = Nt(n), It(w).position !== "static" && a === "absolute" && (C = "scrollHeight", A = "scrollWidth")), w = w, o === Qe || (o === et || o === mt) && i === Vn) {
      b = ft;
      var F = f && w === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[C]
      );
      m -= F - r.height, m *= l ? 1 : -1;
    }
    if (o === et || (o === Qe || o === ft) && i === Vn) {
      y = mt;
      var P = f && w === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[A]
      );
      v -= P - r.width, v *= l ? 1 : -1;
    }
  }
  var O = Object.assign({
    position: a
  }, c && Ef), z = u === !0 ? Tf({
    x: v,
    y: m
  }, at(n)) : {
    x: v,
    y: m
  };
  if (v = z.x, m = z.y, l) {
    var L;
    return Object.assign({}, O, (L = {}, L[b] = $ ? "0" : "", L[y] = R ? "0" : "", L.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", L));
  }
  return Object.assign({}, O, (t = {}, t[b] = $ ? m + "px" : "", t[y] = R ? v + "px" : "", t.transform = "", t));
}
function kf(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, c = {
    placement: Rt(t.placement),
    variation: vn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ms(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ms(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Of = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: kf,
  data: {}
};
var ir = {
  passive: !0
};
function If(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, l = at(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, ir);
  }), a && l.addEventListener("resize", n.update, ir), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ir);
    }), a && l.removeEventListener("resize", n.update, ir);
  };
}
const Mf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: If,
  data: {}
};
var Af = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function mr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Af[t];
  });
}
var Bf = {
  start: "end",
  end: "start"
};
function hs(e) {
  return e.replace(/start|end/g, function(t) {
    return Bf[t];
  });
}
function Ci(e) {
  var t = at(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ri(e) {
  return gn(Nt(e)).left + Ci(e).scrollLeft;
}
function Ff(e, t) {
  var n = at(e), r = Nt(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = Pa();
    (c || !c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Ri(e),
    y: l
  };
}
function Lf(e) {
  var t, n = Nt(e), r = Ci(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Kt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Kt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + Ri(e), l = -r.scrollTop;
  return It(o || n).direction === "rtl" && (a += Kt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Si(e) {
  var t = It(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ia(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0 ? e.ownerDocument.body : pt(e) && Si(e) ? e : Ia(co(e));
}
function zn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ia(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = at(r), s = o ? [i].concat(i.visualViewport || [], Si(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(zn(co(s)))
  );
}
function Wo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Nf(e, t) {
  var n = gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gs(e, t, n) {
  return t === wa ? Wo(Ff(e, n)) : Yt(t) ? Nf(t, n) : Wo(Lf(Nt(e)));
}
function zf(e) {
  var t = zn(co(e)), n = ["absolute", "fixed"].indexOf(It(e).position) >= 0, r = n && pt(e) ? Jn(e) : e;
  return Yt(r) ? t.filter(function(o) {
    return Yt(o) && Ea(o, r) && St(o) !== "body";
  }) : [];
}
function _f(e, t, n, r) {
  var o = t === "clippingParents" ? zf(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(l, c) {
    var u = gs(e, c, r);
    return l.top = Kt(u.top, l.top), l.right = Sr(u.right, l.right), l.bottom = Sr(u.bottom, l.bottom), l.left = Kt(u.left, l.left), l;
  }, gs(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ma(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Rt(r) : null, i = r ? vn(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Qe:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case ft:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case mt:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case et:
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
  var c = o ? xi(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case mn:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Vn:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Kn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? of : a, c = n.rootBoundary, u = c === void 0 ? wa : c, f = n.elementContext, h = f === void 0 ? En : f, v = n.altBoundary, g = v === void 0 ? !1 : v, m = n.padding, x = m === void 0 ? 0 : m, R = ka(typeof x != "number" ? x : Oa(x, Zn)), $ = h === En ? sf : En, y = e.rects.popper, b = e.elements[g ? $ : h], S = _f(Yt(b) ? b : b.contextElement || Nt(e.elements.popper), l, u, s), w = gn(e.elements.reference), C = Ma({
    reference: w,
    element: y,
    strategy: "absolute",
    placement: o
  }), A = Wo(Object.assign({}, y, C)), F = h === En ? A : w, P = {
    top: S.top - F.top + R.top,
    bottom: F.bottom - S.bottom + R.bottom,
    left: S.left - F.left + R.left,
    right: F.right - S.right + R.right
  }, O = e.modifiersData.offset;
  if (h === En && O) {
    var z = O[o];
    Object.keys(P).forEach(function(L) {
      var N = [mt, ft].indexOf(L) >= 0 ? 1 : -1, I = [Qe, ft].indexOf(L) >= 0 ? "y" : "x";
      P[L] += z[I] * N;
    });
  }
  return P;
}
function Df(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? $a : l, u = vn(r), f = u ? a ? ps : ps.filter(function(g) {
    return vn(g) === u;
  }) : Zn, h = f.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  h.length === 0 && (h = f);
  var v = h.reduce(function(g, m) {
    return g[m] = Kn(e, {
      placement: m,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[Rt(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function jf(e) {
  if (Rt(e) === vi)
    return [];
  var t = mr(e);
  return [hs(e), t, hs(t)];
}
function Wf(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, h = n.altBoundary, v = n.flipVariations, g = v === void 0 ? !0 : v, m = n.allowedAutoPlacements, x = t.options.placement, R = Rt(x), $ = R === x, y = l || ($ || !g ? [mr(x)] : jf(x)), b = [x].concat(y).reduce(function(U, se) {
      return U.concat(Rt(se) === vi ? Df(t, {
        placement: se,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : se);
    }, []), S = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), A = !0, F = b[0], P = 0; P < b.length; P++) {
      var O = b[P], z = Rt(O), L = vn(O) === mn, N = [Qe, ft].indexOf(z) >= 0, I = N ? "width" : "height", M = Kn(t, {
        placement: O,
        boundary: u,
        rootBoundary: f,
        altBoundary: h,
        padding: c
      }), B = N ? L ? mt : et : L ? ft : Qe;
      S[I] > w[I] && (B = mr(B));
      var D = mr(B), K = [];
      if (i && K.push(M[z] <= 0), a && K.push(M[B] <= 0, M[D] <= 0), K.every(function(U) {
        return U;
      })) {
        F = O, A = !1;
        break;
      }
      C.set(O, K);
    }
    if (A)
      for (var te = g ? 3 : 1, Me = function(se) {
        var ue = b.find(function(ie) {
          var ne = C.get(ie);
          if (ne)
            return ne.slice(0, se).every(function(le) {
              return le;
            });
        });
        if (ue)
          return F = ue, "break";
      }, fe = te; fe > 0; fe--) {
        var oe = Me(fe);
        if (oe === "break")
          break;
      }
    t.placement !== F && (t.modifiersData[r]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const Hf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Wf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function vs(e, t, n) {
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
function bs(e) {
  return [Qe, mt, ft, et].some(function(t) {
    return e[t] >= 0;
  });
}
function Uf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Kn(t, {
    elementContext: "reference"
  }), a = Kn(t, {
    altBoundary: !0
  }), l = vs(s, r), c = vs(a, o, i), u = bs(l), f = bs(c);
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
const Vf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Uf
};
function Kf(e, t, n) {
  var r = Rt(e), o = [et, Qe].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [et, mt].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function qf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = $a.reduce(function(u, f) {
    return u[f] = Kf(f, t.rects, i), u;
  }, {}), a = s[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const Gf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qf
};
function Xf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ma({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Yf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xf,
  data: {}
};
function Zf(e) {
  return e === "x" ? "y" : "x";
}
function Jf(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, f = n.padding, h = n.tether, v = h === void 0 ? !0 : h, g = n.tetherOffset, m = g === void 0 ? 0 : g, x = Kn(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), R = Rt(t.placement), $ = vn(t.placement), y = !$, b = xi(R), S = Zf(b), w = t.modifiersData.popperOffsets, C = t.rects.reference, A = t.rects.popper, F = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, P = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var L, N = b === "y" ? Qe : et, I = b === "y" ? ft : mt, M = b === "y" ? "height" : "width", B = w[b], D = B + x[N], K = B - x[I], te = v ? -A[M] / 2 : 0, Me = $ === mn ? C[M] : A[M], fe = $ === mn ? -A[M] : -C[M], oe = t.elements.arrow, U = v && oe ? yi(oe) : {
        width: 0,
        height: 0
      }, se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ta(), ue = se[N], ie = se[I], ne = Nn(0, C[M], U[M]), le = y ? C[M] / 2 - te - ne - ue - P.mainAxis : Me - ne - ue - P.mainAxis, Ae = y ? -C[M] / 2 + te + ne + ie + P.mainAxis : fe + ne + ie + P.mainAxis, X = t.elements.arrow && Jn(t.elements.arrow), me = X ? b === "y" ? X.clientTop || 0 : X.clientLeft || 0 : 0, ee = (L = O == null ? void 0 : O[b]) != null ? L : 0, J = B + le - ee - me, _ = B + Ae - ee, Ke = Nn(v ? Sr(D, J) : D, B, v ? Kt(K, _) : K);
      w[b] = Ke, z[b] = Ke - B;
    }
    if (a) {
      var re, Ee = b === "x" ? Qe : et, ze = b === "x" ? ft : mt, Pe = w[S], de = S === "y" ? "height" : "width", Te = Pe + x[Ee], ke = Pe - x[ze], pe = [Qe, et].indexOf(R) !== -1, _e = (re = O == null ? void 0 : O[S]) != null ? re : 0, Fe = pe ? Te : Pe - C[de] - A[de] - _e + P.altAxis, we = pe ? Pe + C[de] + A[de] - _e - P.altAxis : ke, G = v && pe ? Rf(Fe, Pe, we) : Nn(v ? Fe : Te, Pe, v ? we : ke);
      w[S] = G, z[S] = G - Pe;
    }
    t.modifiersData[r] = z;
  }
}
const Qf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jf,
  requiresIfExists: ["offset"]
};
function em(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tm(e) {
  return e === at(e) || !pt(e) ? Ci(e) : em(e);
}
function nm(e) {
  var t = e.getBoundingClientRect(), n = hn(t.width) / e.offsetWidth || 1, r = hn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function rm(e, t, n) {
  n === void 0 && (n = !1);
  var r = pt(t), o = pt(t) && nm(t), i = Nt(t), s = gn(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((St(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Si(i)) && (a = tm(t)), pt(t) ? (l = gn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Ri(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function om(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function im(e) {
  var t = om(e);
  return gf.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function sm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function am(e) {
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
var ys = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function xs() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function lm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? ys : o;
  return function(a, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ys, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], h = !1, v = {
      state: u,
      setOptions: function(R) {
        var $ = typeof R == "function" ? R(u.options) : R;
        m(), u.options = Object.assign({}, i, u.options, $), u.scrollParents = {
          reference: Yt(a) ? zn(a) : a.contextElement ? zn(a.contextElement) : [],
          popper: zn(l)
        };
        var y = im(am([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = y.filter(function(b) {
          return b.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var R = u.elements, $ = R.reference, y = R.popper;
          if (xs($, y)) {
            u.rects = {
              reference: rm($, Jn(y), u.options.strategy === "fixed"),
              popper: yi(y)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(P) {
              return u.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var b = 0; b < u.orderedModifiers.length; b++) {
              if (u.reset === !0) {
                u.reset = !1, b = -1;
                continue;
              }
              var S = u.orderedModifiers[b], w = S.fn, C = S.options, A = C === void 0 ? {} : C, F = S.name;
              typeof w == "function" && (u = w({
                state: u,
                options: A,
                name: F,
                instance: v
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sm(function() {
        return new Promise(function(x) {
          v.forceUpdate(), x(u);
        });
      }),
      destroy: function() {
        m(), h = !0;
      }
    };
    if (!xs(a, l))
      return v;
    v.setOptions(c).then(function(x) {
      !h && c.onFirstUpdate && c.onFirstUpdate(x);
    });
    function g() {
      u.orderedModifiers.forEach(function(x) {
        var R = x.name, $ = x.options, y = $ === void 0 ? {} : $, b = x.effect;
        if (typeof b == "function") {
          var S = b({
            state: u,
            name: R,
            instance: v,
            options: y
          }), w = function() {
          };
          f.push(S || w);
        }
      });
    }
    function m() {
      f.forEach(function(x) {
        return x();
      }), f = [];
    }
    return v;
  };
}
var cm = [Mf, Yf, Of, yf, Gf, Hf, Qf, Pf, Vf], um = /* @__PURE__ */ lm({
  defaultModifiers: cm
});
function dm(e) {
  return typeof e == "function" ? e() : e;
}
const Aa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = d.useState(null), l = He(/* @__PURE__ */ d.isValidElement(r) ? r.ref : null, n);
  if (kt(() => {
    i || a(dm(o) || document.body);
  }, [o, i]), kt(() => {
    if (s && !i)
      return gr(n, s), () => {
        gr(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ d.isValidElement(r)) {
      const c = {
        ref: l
      };
      return /* @__PURE__ */ d.cloneElement(r, c);
    }
    return /* @__PURE__ */ T.jsx(d.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ T.jsx(d.Fragment, {
    children: s && /* @__PURE__ */ _s.createPortal(r, s)
  });
});
function pm(e) {
  return be("MuiPopper", e);
}
ye("MuiPopper", ["root"]);
const fm = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], mm = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function hm(e, t) {
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
function Ho(e) {
  return typeof e == "function" ? e() : e;
}
function gm(e) {
  return e.nodeType !== void 0;
}
const vm = () => Re({
  root: ["root"]
}, Up(pm)), bm = {}, ym = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: i,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: f,
    popperRef: h,
    slotProps: v = {},
    slots: g = {},
    TransitionProps: m
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, x = q(t, fm), R = d.useRef(null), $ = He(R, n), y = d.useRef(null), b = He(y, h), S = d.useRef(b);
  kt(() => {
    S.current = b;
  }, [b]), d.useImperativeHandle(h, () => y.current, []);
  const w = hm(u, s), [C, A] = d.useState(w), [F, P] = d.useState(Ho(o));
  d.useEffect(() => {
    y.current && y.current.forceUpdate();
  }), d.useEffect(() => {
    o && P(Ho(o));
  }, [o]), kt(() => {
    if (!F || !c)
      return;
    const I = (D) => {
      A(D.placement);
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
        state: D
      }) => {
        I(D);
      }
    }];
    l != null && (M = M.concat(l)), f && f.modifiers != null && (M = M.concat(f.modifiers));
    const B = um(F, R.current, p({
      placement: w
    }, f, {
      modifiers: M
    }));
    return S.current(B), () => {
      B.destroy(), S.current(null);
    };
  }, [F, a, l, c, f, w]);
  const O = {
    placement: C
  };
  m !== null && (O.TransitionProps = m);
  const z = vm(), L = (r = g.root) != null ? r : "div", N = Xt({
    elementType: L,
    externalSlotProps: v.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: $
    },
    ownerState: t,
    className: z.root
  });
  return /* @__PURE__ */ T.jsx(L, p({}, N, {
    children: typeof i == "function" ? i(O) : i
  }));
}), xm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: c,
    open: u,
    placement: f = "bottom",
    popperOptions: h = bm,
    popperRef: v,
    style: g,
    transition: m = !1,
    slotProps: x = {},
    slots: R = {}
  } = t, $ = q(t, mm), [y, b] = d.useState(!0), S = () => {
    b(!1);
  }, w = () => {
    b(!0);
  };
  if (!l && !u && (!m || y))
    return null;
  let C;
  if (i)
    C = i;
  else if (r) {
    const P = Ho(r);
    C = P && gm(P) ? Ue(P).body : Ue(null).body;
  }
  const A = !u && l && (!m || y) ? "none" : void 0, F = m ? {
    in: u,
    onEnter: S,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ T.jsx(Aa, {
    disablePortal: a,
    container: C,
    children: /* @__PURE__ */ T.jsx(ym, p({
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: c,
      ref: n,
      open: m ? !y : u,
      placement: f,
      popperOptions: h,
      popperRef: v,
      slotProps: x,
      slots: R
    }, $, {
      style: p({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: A
      }, g),
      TransitionProps: F,
      children: o
    }))
  });
});
function Cm(e) {
  const t = Ue(e);
  return t.body === e ? qt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function _n(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Cs(e) {
  return parseInt(qt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Rm(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Rs(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1, l = !Rm(s);
    a && l && _n(s, o);
  });
}
function wo(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Sm(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Cm(r)) {
      const s = ca(Ue(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Cs(r) + s}px`;
      const a = Ue(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Cs(l) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Ue(r).body;
    else {
      const s = r.parentElement, a = qt(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
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
function wm(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class $m {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && _n(t.modalRef, !1);
    const o = wm(n);
    Rs(n, t.mount, t.modalRef, o, !0);
    const i = wo(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = wo(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Sm(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = wo(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && _n(t.modalRef, n), Rs(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && _n(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Pm(e) {
  return typeof e == "function" ? e() : e;
}
function Em(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Tm = new $m();
function km(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Tm,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: f
  } = e, h = d.useRef({}), v = d.useRef(null), g = d.useRef(null), m = He(g, f), [x, R] = d.useState(!u), $ = Em(l);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const b = () => Ue(v.current), S = () => (h.current.modalRef = g.current, h.current.mount = v.current, h.current), w = () => {
    o.mount(S(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, C = dt(() => {
    const M = Pm(t) || b().body;
    o.add(S(), M), g.current && w();
  }), A = d.useCallback(() => o.isTopModal(S()), [o]), F = dt((M) => {
    v.current = M, M && (u && A() ? w() : g.current && _n(g.current, y));
  }), P = d.useCallback(() => {
    o.remove(S(), y);
  }, [y, o]);
  d.useEffect(() => () => {
    P();
  }, [P]), d.useEffect(() => {
    u ? C() : (!$ || !i) && P();
  }, [u, P, $, i, C]);
  const O = (M) => (B) => {
    var D;
    (D = M.onKeyDown) == null || D.call(M, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !A()) && (n || (B.stopPropagation(), c && c(B, "escapeKeyDown")));
  }, z = (M) => (B) => {
    var D;
    (D = M.onClick) == null || D.call(M, B), B.target === B.currentTarget && c && c(B, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const B = Ln(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const D = p({}, B, M);
      return p({
        role: "presentation"
      }, D, {
        onKeyDown: O(D),
        ref: m
      });
    },
    getBackdropProps: (M = {}) => {
      const B = M;
      return p({
        "aria-hidden": !0
      }, B, {
        onClick: z(B),
        open: u
      });
    },
    getTransitionProps: () => {
      const M = () => {
        R(!1), s && s();
      }, B = () => {
        R(!0), a && a(), i && P();
      };
      return {
        onEnter: Bi(M, l == null ? void 0 : l.props.onEnter),
        onExited: Bi(B, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: m,
    portalRef: F,
    isTopModal: A,
    exited: x,
    hasTransition: $
  };
}
const Om = ["onChange", "maxRows", "minRows", "style", "value"];
function sr(e) {
  return parseInt(e, 10) || 0;
}
const Im = {
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
function Ss(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const Mm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: a
  } = t, l = q(t, Om), {
    current: c
  } = d.useRef(a != null), u = d.useRef(null), f = He(n, u), h = d.useRef(null), v = d.useRef(0), [g, m] = d.useState({
    outerHeightStyle: 0
  }), x = d.useCallback(() => {
    const b = u.current, w = qt(b).getComputedStyle(b);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const C = h.current;
    C.style.width = w.width, C.value = b.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const A = w.boxSizing, F = sr(w.paddingBottom) + sr(w.paddingTop), P = sr(w.borderBottomWidth) + sr(w.borderTopWidth), O = C.scrollHeight;
    C.value = "x";
    const z = C.scrollHeight;
    let L = O;
    i && (L = Math.max(Number(i) * z, L)), o && (L = Math.min(Number(o) * z, L)), L = Math.max(L, z);
    const N = L + (A === "border-box" ? F + P : 0), I = Math.abs(L - O) <= 1;
    return {
      outerHeightStyle: N,
      overflow: I
    };
  }, [o, i, t.placeholder]), R = (b, S) => {
    const {
      outerHeightStyle: w,
      overflow: C
    } = S;
    return v.current < 20 && (w > 0 && Math.abs((b.outerHeightStyle || 0) - w) > 1 || b.overflow !== C) ? (v.current += 1, {
      overflow: C,
      outerHeightStyle: w
    }) : b;
  }, $ = d.useCallback(() => {
    const b = x();
    Ss(b) || m((S) => R(S, b));
  }, [x]);
  kt(() => {
    const b = () => {
      const O = x();
      Ss(O) || _s.flushSync(() => {
        m((z) => R(z, O));
      });
    }, S = () => {
      v.current = 0, b();
    };
    let w;
    const C = aa(S), A = u.current, F = qt(A);
    F.addEventListener("resize", C);
    let P;
    return typeof ResizeObserver < "u" && (P = new ResizeObserver(S), P.observe(A)), () => {
      C.clear(), cancelAnimationFrame(w), F.removeEventListener("resize", C), P && P.disconnect();
    };
  }, [x]), kt(() => {
    $();
  }), d.useEffect(() => {
    v.current = 0;
  }, [a]);
  const y = (b) => {
    v.current = 0, c || $(), r && r(b);
  };
  return /* @__PURE__ */ T.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ T.jsx("textarea", p({
      value: a,
      onChange: y,
      ref: f,
      rows: i,
      style: p({
        height: g.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: g.overflow ? "hidden" : void 0
      }, s)
    }, l)), /* @__PURE__ */ T.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: h,
      tabIndex: -1,
      style: p({}, Im.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function ws(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function Am(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: o = "any",
    stringify: i,
    trim: s = !1
  } = e;
  return (a, {
    inputValue: l,
    getOptionLabel: c
  }) => {
    let u = s ? l.trim() : l;
    n && (u = u.toLowerCase()), t && (u = ws(u));
    const f = u ? a.filter((h) => {
      let v = (i || c)(h);
      return n && (v = v.toLowerCase()), t && (v = ws(v)), o === "start" ? v.indexOf(u) === 0 : v.indexOf(u) > -1;
    }) : a;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function $o(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const Bm = Am(), $s = 5, Fm = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function pb(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Fm,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: o = !1,
    autoSelect: i = !1,
    blurOnSelect: s = !1,
    clearOnBlur: a = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: c = "useAutocomplete",
    defaultValue: u = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: h = !1,
    disabled: v,
    disabledItemsFocusable: g = !1,
    disableListWrap: m = !1,
    filterOptions: x = Bm,
    filterSelectedOptions: R = !1,
    freeSolo: $ = !1,
    getOptionDisabled: y,
    getOptionLabel: b = (k) => {
      var E;
      return (E = k.label) != null ? E : k;
    },
    groupBy: S,
    handleHomeEndKeys: w = !e.freeSolo,
    id: C,
    includeInputInList: A = !1,
    inputValue: F,
    isOptionEqualToValue: P = (k, E) => k === E,
    multiple: O = !1,
    onChange: z,
    onClose: L,
    onHighlightChange: N,
    onInputChange: I,
    onOpen: M,
    open: B,
    openOnFocus: D = !1,
    options: K,
    readOnly: te = !1,
    selectOnFocus: Me = !e.freeSolo,
    value: fe
  } = e, oe = Dr(C);
  let U = b;
  U = (k) => {
    const E = b(k);
    return typeof E != "string" ? String(E) : E;
  };
  const se = d.useRef(!1), ue = d.useRef(!0), ie = d.useRef(null), ne = d.useRef(null), [le, Ae] = d.useState(null), [X, me] = d.useState(-1), ee = o ? 0 : -1, J = d.useRef(ee), [_, Ke] = un({
    controlled: fe,
    default: u,
    name: c
  }), [re, Ee] = un({
    controlled: F,
    default: "",
    name: c,
    state: "inputValue"
  }), [ze, Pe] = d.useState(!1), de = d.useCallback((k, E) => {
    if (!(O ? _.length < E.length : E !== null) && !a)
      return;
    let Y;
    if (O)
      Y = "";
    else if (E == null)
      Y = "";
    else {
      const ve = U(E);
      Y = typeof ve == "string" ? ve : "";
    }
    re !== Y && (Ee(Y), I && I(k, Y, "reset"));
  }, [U, re, O, I, Ee, a, _]), [Te, ke] = un({
    controlled: B,
    default: !1,
    name: c,
    state: "open"
  }), [pe, _e] = d.useState(!0), Fe = !O && _ != null && re === U(_), we = Te && !te, G = we ? x(
    K.filter((k) => !(R && (O ? _ : [_]).some((E) => E !== null && P(k, E)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Fe && pe ? "" : re,
      getOptionLabel: U
    }
  ) : [], H = rc({
    filteredOptions: G,
    value: _,
    inputValue: re
  });
  d.useEffect(() => {
    const k = _ !== H.value;
    ze && !k || $ && !k || de(null, _);
  }, [_, de, ze, H.value, $]);
  const Be = Te && G.length > 0 && !te, Xe = dt((k) => {
    k === -1 ? ie.current.focus() : le.querySelector(`[data-tag-index="${k}"]`).focus();
  });
  d.useEffect(() => {
    O && X > _.length - 1 && (me(-1), Xe(-1));
  }, [_, O, X, Xe]);
  function nt(k, E) {
    if (!ne.current || k < 0 || k >= G.length)
      return -1;
    let j = k;
    for (; ; ) {
      const Y = ne.current.querySelector(`[data-option-index="${j}"]`), ve = g ? !1 : !Y || Y.disabled || Y.getAttribute("aria-disabled") === "true";
      if (Y && Y.hasAttribute("tabindex") && !ve)
        return j;
      if (E === "next" ? j = (j + 1) % G.length : j = (j - 1 + G.length) % G.length, j === k)
        return -1;
    }
  }
  const W = dt(({
    event: k,
    index: E,
    reason: j = "auto"
  }) => {
    if (J.current = E, E === -1 ? ie.current.removeAttribute("aria-activedescendant") : ie.current.setAttribute("aria-activedescendant", `${oe}-option-${E}`), N && N(k, E === -1 ? null : G[E], j), !ne.current)
      return;
    const Y = ne.current.querySelector(`[role="option"].${n}-focused`);
    Y && (Y.classList.remove(`${n}-focused`), Y.classList.remove(`${n}-focusVisible`));
    let ve = ne.current;
    if (ne.current.getAttribute("role") !== "listbox" && (ve = ne.current.parentElement.querySelector('[role="listbox"]')), !ve)
      return;
    if (E === -1) {
      ve.scrollTop = 0;
      return;
    }
    const We = ne.current.querySelector(`[data-option-index="${E}"]`);
    if (We && (We.classList.add(`${n}-focused`), j === "keyboard" && We.classList.add(`${n}-focusVisible`), ve.scrollHeight > ve.clientHeight && j !== "mouse" && j !== "touch")) {
      const De = We, ct = ve.clientHeight + ve.scrollTop, ae = De.offsetTop + De.offsetHeight;
      ae > ct ? ve.scrollTop = ae - ve.clientHeight : De.offsetTop - De.offsetHeight * (S ? 1.3 : 0) < ve.scrollTop && (ve.scrollTop = De.offsetTop - De.offsetHeight * (S ? 1.3 : 0));
    }
  }), ce = dt(({
    event: k,
    diff: E,
    direction: j = "next",
    reason: Y = "auto"
  }) => {
    if (!we)
      return;
    const We = nt((() => {
      const De = G.length - 1;
      if (E === "reset")
        return ee;
      if (E === "start")
        return 0;
      if (E === "end")
        return De;
      const ct = J.current + E;
      return ct < 0 ? ct === -1 && A ? -1 : m && J.current !== -1 || Math.abs(E) > 1 ? 0 : De : ct > De ? ct === De + 1 && A ? -1 : m || Math.abs(E) > 1 ? De : 0 : ct;
    })(), j);
    if (W({
      index: We,
      reason: Y,
      event: k
    }), r && E !== "reset")
      if (We === -1)
        ie.current.value = re;
      else {
        const De = U(G[We]);
        ie.current.value = De, De.toLowerCase().indexOf(re.toLowerCase()) === 0 && re.length > 0 && ie.current.setSelectionRange(re.length, De.length);
      }
  }), Oe = () => {
    const k = (E, j) => {
      const Y = E ? U(E) : "", ve = j ? U(j) : "";
      return Y === ve;
    };
    if (J.current !== -1 && H.filteredOptions && H.filteredOptions.length !== G.length && H.inputValue === re && (O ? _.length === H.value.length && H.value.every((E, j) => U(_[j]) === U(E)) : k(H.value, _))) {
      const E = H.filteredOptions[J.current];
      if (E && G.some((Y) => U(Y) === U(E)))
        return !0;
    }
    return !1;
  }, Ye = d.useCallback(() => {
    if (!we || Oe())
      return;
    const k = O ? _[0] : _;
    if (G.length === 0 || k == null) {
      ce({
        diff: "reset"
      });
      return;
    }
    if (ne.current) {
      if (k != null) {
        const E = G[J.current];
        if (O && E && $o(_, (Y) => P(E, Y)) !== -1)
          return;
        const j = $o(G, (Y) => P(Y, k));
        j === -1 ? ce({
          diff: "reset"
        }) : W({
          index: j
        });
        return;
      }
      if (J.current >= G.length - 1) {
        W({
          index: G.length - 1
        });
        return;
      }
      W({
        index: J.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    G.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    O ? !1 : _,
    R,
    ce,
    W,
    we,
    re,
    O
  ]), zt = dt((k) => {
    gr(ne, k), k && Ye();
  });
  d.useEffect(() => {
    Ye();
  }, [Ye]);
  const vt = (k) => {
    Te || (ke(!0), _e(!0), M && M(k));
  }, _t = (k, E) => {
    Te && (ke(!1), L && L(k, E));
  }, At = (k, E, j, Y) => {
    if (O) {
      if (_.length === E.length && _.every((ve, We) => ve === E[We]))
        return;
    } else if (_ === E)
      return;
    z && z(k, E, j, Y), Ke(E);
  }, Jt = d.useRef(!1), Bt = (k, E, j = "selectOption", Y = "options") => {
    let ve = j, We = E;
    if (O) {
      We = Array.isArray(_) ? _.slice() : [];
      const De = $o(We, (ct) => P(E, ct));
      De === -1 ? We.push(E) : Y !== "freeSolo" && (We.splice(De, 1), ve = "removeOption");
    }
    de(k, We), At(k, We, ve, {
      option: E
    }), !h && (!k || !k.ctrlKey && !k.metaKey) && _t(k, ve), (s === !0 || s === "touch" && Jt.current || s === "mouse" && !Jt.current) && ie.current.blur();
  };
  function Qn(k, E) {
    if (k === -1)
      return -1;
    let j = k;
    for (; ; ) {
      if (E === "next" && j === _.length || E === "previous" && j === -1)
        return -1;
      const Y = le.querySelector(`[data-tag-index="${j}"]`);
      if (!Y || !Y.hasAttribute("tabindex") || Y.disabled || Y.getAttribute("aria-disabled") === "true")
        j += E === "next" ? 1 : -1;
      else
        return j;
    }
  }
  const Rn = (k, E) => {
    if (!O)
      return;
    re === "" && _t(k, "toggleInput");
    let j = X;
    X === -1 ? re === "" && E === "previous" && (j = _.length - 1) : (j += E === "next" ? 1 : -1, j < 0 && (j = 0), j === _.length && (j = -1)), j = Qn(j, E), me(j), Xe(j);
  }, Sn = (k) => {
    se.current = !0, Ee(""), I && I(k, "", "clear"), At(k, O ? [] : null, "clear");
  }, er = (k) => (E) => {
    if (k.onKeyDown && k.onKeyDown(E), !E.defaultMuiPrevented && (X !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(E.key) === -1 && (me(-1), Xe(-1)), E.which !== 229))
      switch (E.key) {
        case "Home":
          we && w && (E.preventDefault(), ce({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: E
          }));
          break;
        case "End":
          we && w && (E.preventDefault(), ce({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: E
          }));
          break;
        case "PageUp":
          E.preventDefault(), ce({
            diff: -$s,
            direction: "previous",
            reason: "keyboard",
            event: E
          }), vt(E);
          break;
        case "PageDown":
          E.preventDefault(), ce({
            diff: $s,
            direction: "next",
            reason: "keyboard",
            event: E
          }), vt(E);
          break;
        case "ArrowDown":
          E.preventDefault(), ce({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: E
          }), vt(E);
          break;
        case "ArrowUp":
          E.preventDefault(), ce({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: E
          }), vt(E);
          break;
        case "ArrowLeft":
          Rn(E, "previous");
          break;
        case "ArrowRight":
          Rn(E, "next");
          break;
        case "Enter":
          if (J.current !== -1 && we) {
            const j = G[J.current], Y = y ? y(j) : !1;
            if (E.preventDefault(), Y)
              return;
            Bt(E, j, "selectOption"), r && ie.current.setSelectionRange(ie.current.value.length, ie.current.value.length);
          } else
            $ && re !== "" && Fe === !1 && (O && E.preventDefault(), Bt(E, re, "createOption", "freeSolo"));
          break;
        case "Escape":
          we ? (E.preventDefault(), E.stopPropagation(), _t(E, "escape")) : l && (re !== "" || O && _.length > 0) && (E.preventDefault(), E.stopPropagation(), Sn(E));
          break;
        case "Backspace":
          if (O && !te && re === "" && _.length > 0) {
            const j = X === -1 ? _.length - 1 : X, Y = _.slice();
            Y.splice(j, 1), At(E, Y, "removeOption", {
              option: _[j]
            });
          }
          break;
        case "Delete":
          if (O && !te && re === "" && _.length > 0 && X !== -1) {
            const j = X, Y = _.slice();
            Y.splice(j, 1), At(E, Y, "removeOption", {
              option: _[j]
            });
          }
          break;
      }
  }, tr = (k) => {
    Pe(!0), D && !se.current && vt(k);
  }, nr = (k) => {
    if (t(ne)) {
      ie.current.focus();
      return;
    }
    Pe(!1), ue.current = !0, se.current = !1, i && J.current !== -1 && we ? Bt(k, G[J.current], "blur") : i && $ && re !== "" ? Bt(k, re, "blur", "freeSolo") : a && de(k, _), _t(k, "blur");
  }, go = (k) => {
    const E = k.target.value;
    re !== E && (Ee(E), _e(!1), I && I(k, E, "input")), E === "" ? !f && !O && At(k, null, "clear") : vt(k);
  }, vo = (k) => {
    const E = Number(k.currentTarget.getAttribute("data-option-index"));
    J.current !== E && W({
      event: k,
      index: E,
      reason: "mouse"
    });
  }, wn = (k) => {
    W({
      event: k,
      index: Number(k.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Jt.current = !0;
  }, bo = (k) => {
    const E = Number(k.currentTarget.getAttribute("data-option-index"));
    Bt(k, G[E], "selectOption"), Jt.current = !1;
  }, Dt = (k) => (E) => {
    const j = _.slice();
    j.splice(k, 1), At(E, j, "removeOption", {
      option: _[k]
    });
  }, Qt = (k) => {
    Te ? _t(k, "toggleInput") : vt(k);
  }, rt = (k) => {
    k.currentTarget.contains(k.target) && k.target.getAttribute("id") !== oe && k.preventDefault();
  }, jt = (k) => {
    k.currentTarget.contains(k.target) && (ie.current.focus(), Me && ue.current && ie.current.selectionEnd - ie.current.selectionStart === 0 && ie.current.select(), ue.current = !1);
  }, yo = (k) => {
    !v && (re === "" || !Te) && Qt(k);
  };
  let wt = $ && re.length > 0;
  wt = wt || (O ? _.length > 0 : _ !== null);
  let en = G;
  return S && (en = G.reduce((k, E, j) => {
    const Y = S(E);
    return k.length > 0 && k[k.length - 1].group === Y ? k[k.length - 1].options.push(E) : k.push({
      key: j,
      index: j,
      group: Y,
      options: [E]
    }), k;
  }, [])), v && ze && nr(), {
    getRootProps: (k = {}) => p({
      "aria-owns": Be ? `${oe}-listbox` : null
    }, k, {
      onKeyDown: er(k),
      onMouseDown: rt,
      onClick: jt
    }),
    getInputLabelProps: () => ({
      id: `${oe}-label`,
      htmlFor: oe
    }),
    getInputProps: () => ({
      id: oe,
      value: re,
      onBlur: nr,
      onFocus: tr,
      onChange: go,
      onMouseDown: yo,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": we ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": Be ? `${oe}-listbox` : void 0,
      "aria-expanded": Be,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: ie,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: v
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Sn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Qt
    }),
    getTagProps: ({
      index: k
    }) => p({
      key: k,
      "data-tag-index": k,
      tabIndex: -1
    }, !te && {
      onDelete: Dt(k)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${oe}-listbox`,
      "aria-labelledby": `${oe}-label`,
      ref: zt,
      onMouseDown: (k) => {
        k.preventDefault();
      }
    }),
    getOptionProps: ({
      index: k,
      option: E
    }) => {
      const j = (O ? _ : [_]).some((ve) => ve != null && P(E, ve)), Y = y ? y(E) : !1;
      return {
        key: U(E),
        tabIndex: -1,
        role: "option",
        id: `${oe}-option-${k}`,
        onMouseMove: vo,
        onClick: bo,
        onTouchStart: wn,
        "data-option-index": k,
        "aria-disabled": Y,
        "aria-selected": j
      };
    },
    id: oe,
    inputValue: re,
    value: _,
    dirty: wt,
    expanded: we && le,
    popupOpen: we,
    focused: ze || X !== -1,
    anchorEl: le,
    setAnchorEl: Ae,
    focusedTag: X,
    groupedOptions: en
  };
}
const Lm = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Nm = V(xm, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), zm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const o = ci(), i = Se({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: f,
    keepMounted: h,
    modifiers: v,
    open: g,
    placement: m,
    popperOptions: x,
    popperRef: R,
    transition: $,
    slots: y,
    slotProps: b
  } = i, S = q(i, Lm), w = (r = y == null ? void 0 : y.root) != null ? r : l == null ? void 0 : l.Root, C = p({
    anchorEl: s,
    container: u,
    disablePortal: f,
    keepMounted: h,
    modifiers: v,
    open: g,
    placement: m,
    popperOptions: x,
    popperRef: R,
    transition: $
  }, S);
  return /* @__PURE__ */ T.jsx(Nm, p({
    as: a,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: w
    },
    slotProps: b ?? c
  }, C, {
    ref: n
  }));
}), Ba = zm;
function Cn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const _m = /* @__PURE__ */ d.createContext(void 0), uo = _m;
function Zt() {
  return d.useContext(uo);
}
function Dm(e) {
  return /* @__PURE__ */ T.jsx(mu, p({}, e, {
    defaultTheme: Yr,
    themeId: fn
  }));
}
function Ps(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function wr(e, t = !1) {
  return e && (Ps(e.value) && e.value !== "" || t && Ps(e.defaultValue) && e.defaultValue !== "");
}
function jm(e) {
  return e.startAdornment;
}
function Wm(e) {
  return be("MuiInputBase", e);
}
const Hm = ye("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), bn = Hm, Um = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], po = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Z(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, fo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Vm = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: a,
    fullWidth: l,
    hiddenLabel: c,
    multiline: u,
    readOnly: f,
    size: h,
    startAdornment: v,
    type: g
  } = e, m = {
    root: ["root", `color${Z(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", a && "formControl", h && h !== "medium" && `size${Z(h)}`, u && "multiline", v && "adornedStart", i && "adornedEnd", c && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", u && "inputMultiline", h === "small" && "inputSizeSmall", c && "inputHiddenLabel", v && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
  };
  return Re(m, Wm, t);
}, mo = V("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: po
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
  [`&.${bn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && p({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), ho = V("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: fo
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = p({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
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
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
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
    [`label[data-shrink=false] + .${bn.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${bn.disabled}`]: {
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
}), Km = /* @__PURE__ */ T.jsx(Dm, {
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
}), qm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const o = Se({
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
    disabled: h,
    disableInjectingGlobalStyles: v,
    endAdornment: g,
    fullWidth: m = !1,
    id: x,
    inputComponent: R = "input",
    inputProps: $ = {},
    inputRef: y,
    maxRows: b,
    minRows: S,
    multiline: w = !1,
    name: C,
    onBlur: A,
    onChange: F,
    onClick: P,
    onFocus: O,
    onKeyDown: z,
    onKeyUp: L,
    placeholder: N,
    readOnly: I,
    renderSuffix: M,
    rows: B,
    slotProps: D = {},
    slots: K = {},
    startAdornment: te,
    type: Me = "text",
    value: fe
  } = o, oe = q(o, Um), U = $.value != null ? $.value : fe, {
    current: se
  } = d.useRef(U != null), ue = d.useRef(), ie = d.useCallback((G) => {
  }, []), ne = He(ue, y, $.ref, ie), [le, Ae] = d.useState(!1), X = Zt(), me = Cn({
    props: o,
    muiFormControl: X,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  me.focused = X ? X.focused : le, d.useEffect(() => {
    !X && h && le && (Ae(!1), A && A());
  }, [X, h, le, A]);
  const ee = X && X.onFilled, J = X && X.onEmpty, _ = d.useCallback((G) => {
    wr(G) ? ee && ee() : J && J();
  }, [ee, J]);
  kt(() => {
    se && _({
      value: U
    });
  }, [U, _, se]);
  const Ke = (G) => {
    if (me.disabled) {
      G.stopPropagation();
      return;
    }
    O && O(G), $.onFocus && $.onFocus(G), X && X.onFocus ? X.onFocus(G) : Ae(!0);
  }, re = (G) => {
    A && A(G), $.onBlur && $.onBlur(G), X && X.onBlur ? X.onBlur(G) : Ae(!1);
  }, Ee = (G, ...H) => {
    if (!se) {
      const Be = G.target || ue.current;
      if (Be == null)
        throw new Error(Tt(1));
      _({
        value: Be.value
      });
    }
    $.onChange && $.onChange(G, ...H), F && F(G, ...H);
  };
  d.useEffect(() => {
    _(ue.current);
  }, []);
  const ze = (G) => {
    ue.current && G.currentTarget === G.target && ue.current.focus(), P && P(G);
  };
  let Pe = R, de = $;
  w && Pe === "input" && (B ? de = p({
    type: void 0,
    minRows: B,
    maxRows: B
  }, de) : de = p({
    type: void 0,
    maxRows: b,
    minRows: S
  }, de), Pe = Mm);
  const Te = (G) => {
    _(G.animationName === "mui-auto-fill-cancel" ? ue.current : {
      value: "x"
    });
  };
  d.useEffect(() => {
    X && X.setAdornedStart(!!te);
  }, [X, te]);
  const ke = p({}, o, {
    color: me.color || "primary",
    disabled: me.disabled,
    endAdornment: g,
    error: me.error,
    focused: me.focused,
    formControl: X,
    fullWidth: m,
    hiddenLabel: me.hiddenLabel,
    multiline: w,
    size: me.size,
    startAdornment: te,
    type: Me
  }), pe = Vm(ke), _e = K.root || c.Root || mo, Fe = D.root || u.root || {}, we = K.input || c.Input || ho;
  return de = p({}, de, (r = D.input) != null ? r : u.input), /* @__PURE__ */ T.jsxs(d.Fragment, {
    children: [!v && Km, /* @__PURE__ */ T.jsxs(_e, p({}, Fe, !Rr(_e) && {
      ownerState: p({}, ke, Fe.ownerState)
    }, {
      ref: n,
      onClick: ze
    }, oe, {
      className: Q(pe.root, Fe.className, l, I && "MuiInputBase-readOnly"),
      children: [te, /* @__PURE__ */ T.jsx(uo.Provider, {
        value: null,
        children: /* @__PURE__ */ T.jsx(we, p({
          ownerState: ke,
          "aria-invalid": me.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: f,
          disabled: me.disabled,
          id: x,
          onAnimationStart: Te,
          name: C,
          placeholder: N,
          readOnly: I,
          required: me.required,
          rows: B,
          value: U,
          onKeyDown: z,
          onKeyUp: L,
          type: Me
        }, de, !Rr(we) && {
          as: Pe,
          ownerState: p({}, ke, de.ownerState)
        }, {
          ref: ne,
          className: Q(pe.input, de.className, I && "MuiInputBase-readOnly"),
          onBlur: re,
          onChange: Ee,
          onFocus: Ke
        }))
      }), g, M ? M(p({}, me, {
        startAdornment: te
      })) : null]
    }))]
  });
}), wi = qm;
function Gm(e) {
  return be("MuiInput", e);
}
const Xm = p({}, bn, ye("MuiInput", ["root", "underline", "input"])), Tn = Xm;
function Ym(e) {
  return be("MuiOutlinedInput", e);
}
const Zm = p({}, bn, ye("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Ft = Zm;
function Jm(e) {
  return be("MuiFilledInput", e);
}
const Qm = p({}, bn, ye("MuiFilledInput", ["root", "underline", "input"])), Wt = Qm, eh = xn(/* @__PURE__ */ T.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), th = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], nh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, rh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Zr(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: l,
    in: c,
    onEnter: u,
    onEntered: f,
    onEntering: h,
    onExit: v,
    onExited: g,
    onExiting: m,
    style: x,
    timeout: R = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: $ = xa
  } = t, y = q(t, th), b = d.useRef(null), S = He(b, a.ref, n), w = (N) => (I) => {
    if (N) {
      const M = b.current;
      I === void 0 ? N(M) : N(M, I);
    }
  }, C = w(h), A = w((N, I) => {
    Ca(N);
    const M = Cr({
      style: x,
      timeout: R,
      easing: l
    }, {
      mode: "enter"
    });
    N.style.webkitTransition = r.transitions.create("opacity", M), N.style.transition = r.transitions.create("opacity", M), u && u(N, I);
  }), F = w(f), P = w(m), O = w((N) => {
    const I = Cr({
      style: x,
      timeout: R,
      easing: l
    }, {
      mode: "exit"
    });
    N.style.webkitTransition = r.transitions.create("opacity", I), N.style.transition = r.transitions.create("opacity", I), v && v(N);
  }), z = w(g), L = (N) => {
    i && i(b.current, N);
  };
  return /* @__PURE__ */ T.jsx($, p({
    appear: s,
    in: c,
    nodeRef: b,
    onEnter: A,
    onEntered: F,
    onEntering: C,
    onExit: O,
    onExited: z,
    onExiting: P,
    addEndListener: L,
    timeout: R
  }, y, {
    children: (N, I) => /* @__PURE__ */ d.cloneElement(a, p({
      style: p({
        opacity: 0,
        visibility: N === "exited" && !c ? "hidden" : void 0
      }, nh[N], x, a.props.style),
      ref: S
    }, I))
  }));
}), oh = rh;
function ih(e) {
  return be("MuiBackdrop", e);
}
ye("MuiBackdrop", ["root", "invisible"]);
const sh = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], ah = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Re({
    root: ["root", n && "invisible"]
  }, ih, t);
}, lh = V("div", {
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
})), ch = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i;
  const s = Se({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: a,
    className: l,
    component: c = "div",
    components: u = {},
    componentsProps: f = {},
    invisible: h = !1,
    open: v,
    slotProps: g = {},
    slots: m = {},
    TransitionComponent: x = oh,
    transitionDuration: R
  } = s, $ = q(s, sh), y = p({}, s, {
    component: c,
    invisible: h
  }), b = ah(y), S = (r = g.root) != null ? r : f.root;
  return /* @__PURE__ */ T.jsx(x, p({
    in: v,
    timeout: R
  }, $, {
    children: /* @__PURE__ */ T.jsx(lh, p({
      "aria-hidden": !0
    }, S, {
      as: (o = (i = m.root) != null ? i : u.Root) != null ? o : c,
      className: Q(b.root, l, S == null ? void 0 : S.className),
      ownerState: p({}, y, S == null ? void 0 : S.ownerState),
      classes: b,
      ref: n,
      children: a
    }))
  }));
}), uh = ch;
function dh(e) {
  return be("MuiButton", e);
}
const ph = ye("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ar = ph, fh = /* @__PURE__ */ d.createContext({}), mh = fh, hh = /* @__PURE__ */ d.createContext(void 0), gh = hh, vh = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], bh = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${Z(t)}`, `size${Z(o)}`, `${i}Size${Z(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Z(o)}`],
    endIcon: ["endIcon", `iconSize${Z(o)}`]
  }, l = Re(a, dh, s);
  return p({}, s, l);
}, Fa = (e) => p({}, e.size === "small" && {
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
}), yh = V(gi, {
  shouldForwardProp: (e) => gt(e) || e === "classes",
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
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return p({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": p({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    [`&.${ar.focusVisible}`]: p({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${ar.disabled}`]: p({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ze(e.palette[t.color].main, 0.5)}`
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
  [`&.${ar.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${ar.disabled}`]: {
    boxShadow: "none"
  }
}), xh = V("span", {
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
}, Fa(e))), Ch = V("span", {
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
}, Fa(e))), Rh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = d.useContext(mh), o = d.useContext(gh), i = ni(r, t), s = Se({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: f = !1,
    disableElevation: h = !1,
    disableFocusRipple: v = !1,
    endIcon: g,
    focusVisibleClassName: m,
    fullWidth: x = !1,
    size: R = "medium",
    startIcon: $,
    type: y,
    variant: b = "text"
  } = s, S = q(s, vh), w = p({}, s, {
    color: l,
    component: c,
    disabled: f,
    disableElevation: h,
    disableFocusRipple: v,
    fullWidth: x,
    size: R,
    type: y,
    variant: b
  }), C = bh(w), A = $ && /* @__PURE__ */ T.jsx(xh, {
    className: C.startIcon,
    ownerState: w,
    children: $
  }), F = g && /* @__PURE__ */ T.jsx(Ch, {
    className: C.endIcon,
    ownerState: w,
    children: g
  }), P = o || "";
  return /* @__PURE__ */ T.jsxs(yh, p({
    ownerState: w,
    className: Q(r.className, C.root, u, P),
    component: c,
    disabled: f,
    focusRipple: !v,
    focusVisibleClassName: Q(C.focusVisible, m),
    ref: n,
    type: y
  }, S, {
    classes: C,
    children: [A, a, F]
  }));
}), fb = Rh;
function Sh(e) {
  return be("MuiModal", e);
}
ye("MuiModal", ["root", "hidden", "backdrop"]);
const wh = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], $h = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Re({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Sh, r);
}, Ph = V("div", {
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
})), Eh = V(uh, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Th = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, s, a, l;
  const c = Se({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: u = Eh,
    BackdropProps: f,
    className: h,
    closeAfterTransition: v = !1,
    children: g,
    container: m,
    component: x,
    components: R = {},
    componentsProps: $ = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: S = !1,
    disablePortal: w = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: A = !1,
    hideBackdrop: F = !1,
    keepMounted: P = !1,
    onBackdropClick: O,
    open: z,
    slotProps: L,
    slots: N
    // eslint-disable-next-line react/prop-types
  } = c, I = q(c, wh), M = p({}, c, {
    closeAfterTransition: v,
    disableAutoFocus: y,
    disableEnforceFocus: b,
    disableEscapeKeyDown: S,
    disablePortal: w,
    disableRestoreFocus: C,
    disableScrollLock: A,
    hideBackdrop: F,
    keepMounted: P
  }), {
    getRootProps: B,
    getBackdropProps: D,
    getTransitionProps: K,
    portalRef: te,
    isTopModal: Me,
    exited: fe,
    hasTransition: oe
  } = km(p({}, M, {
    rootRef: n
  })), U = p({}, M, {
    exited: fe
  }), se = $h(U), ue = {};
  if (g.props.tabIndex === void 0 && (ue.tabIndex = "-1"), oe) {
    const {
      onEnter: ee,
      onExited: J
    } = K();
    ue.onEnter = ee, ue.onExited = J;
  }
  const ie = (r = (o = N == null ? void 0 : N.root) != null ? o : R.Root) != null ? r : Ph, ne = (i = (s = N == null ? void 0 : N.backdrop) != null ? s : R.Backdrop) != null ? i : u, le = (a = L == null ? void 0 : L.root) != null ? a : $.root, Ae = (l = L == null ? void 0 : L.backdrop) != null ? l : $.backdrop, X = Xt({
    elementType: ie,
    externalSlotProps: le,
    externalForwardedProps: I,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: x
    },
    ownerState: U,
    className: Q(h, le == null ? void 0 : le.className, se == null ? void 0 : se.root, !U.open && U.exited && (se == null ? void 0 : se.hidden))
  }), me = Xt({
    elementType: ne,
    externalSlotProps: Ae,
    additionalProps: f,
    getSlotProps: (ee) => D(p({}, ee, {
      onClick: (J) => {
        O && O(J), ee != null && ee.onClick && ee.onClick(J);
      }
    })),
    className: Q(Ae == null ? void 0 : Ae.className, f == null ? void 0 : f.className, se == null ? void 0 : se.backdrop),
    ownerState: U
  });
  return !P && !z && (!oe || fe) ? null : /* @__PURE__ */ T.jsx(Aa, {
    ref: te,
    container: m,
    disablePortal: w,
    children: /* @__PURE__ */ T.jsxs(ie, p({}, X, {
      children: [!F && u ? /* @__PURE__ */ T.jsx(ne, p({}, me)) : null, /* @__PURE__ */ T.jsx(tf, {
        disableEnforceFocus: b,
        disableAutoFocus: y,
        disableRestoreFocus: C,
        isEnabled: Me,
        open: z,
        children: /* @__PURE__ */ d.cloneElement(g, ue)
      })]
    }))
  });
}), kh = Th, Oh = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Ih = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = Re({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Jm, t);
  return p({}, t, o);
}, Mh = V(mo, {
  shouldForwardProp: (e) => gt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...po(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
    [`&.${Wt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Wt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
    }
  }, !t.disableUnderline && {
    "&:after": {
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
    [`&.${Wt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Wt.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
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
    [`&:hover:not(.${Wt.disabled}, .${Wt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Wt.disabled}:before`]: {
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
  }));
}), Ah = V(ho, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: fo
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
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
})), La = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, s;
  const a = Se({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: c,
    fullWidth: u = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: h = !1,
    slotProps: v,
    slots: g = {},
    type: m = "text"
  } = a, x = q(a, Oh), R = p({}, a, {
    fullWidth: u,
    inputComponent: f,
    multiline: h,
    type: m
  }), $ = Ih(a), y = {
    root: {
      ownerState: R
    },
    input: {
      ownerState: R
    }
  }, b = v ?? c ? Je(v ?? c, y) : y, S = (r = (o = g.root) != null ? o : l.Root) != null ? r : Mh, w = (i = (s = g.input) != null ? s : l.Input) != null ? i : Ah;
  return /* @__PURE__ */ T.jsx(wi, p({
    slots: {
      root: S,
      input: w
    },
    componentsProps: b,
    fullWidth: u,
    inputComponent: f,
    multiline: h,
    ref: n,
    type: m
  }, x, {
    classes: $
  }));
});
La.muiName = "Input";
const Na = La;
function Bh(e) {
  return be("MuiFormControl", e);
}
ye("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Fh = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Lh = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${Z(n)}`, r && "fullWidth"]
  };
  return Re(o, Bh, t);
}, Nh = V("div", {
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
})), zh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: a = "div",
    disabled: l = !1,
    error: c = !1,
    focused: u,
    fullWidth: f = !1,
    hiddenLabel: h = !1,
    margin: v = "none",
    required: g = !1,
    size: m = "medium",
    variant: x = "outlined"
  } = r, R = q(r, Fh), $ = p({}, r, {
    color: s,
    component: a,
    disabled: l,
    error: c,
    fullWidth: f,
    hiddenLabel: h,
    margin: v,
    required: g,
    size: m,
    variant: x
  }), y = Lh($), [b, S] = d.useState(() => {
    let L = !1;
    return o && d.Children.forEach(o, (N) => {
      if (!Co(N, ["Input", "Select"]))
        return;
      const I = Co(N, ["Select"]) ? N.props.input : N;
      I && jm(I.props) && (L = !0);
    }), L;
  }), [w, C] = d.useState(() => {
    let L = !1;
    return o && d.Children.forEach(o, (N) => {
      Co(N, ["Input", "Select"]) && (wr(N.props, !0) || wr(N.props.inputProps, !0)) && (L = !0);
    }), L;
  }), [A, F] = d.useState(!1);
  l && A && F(!1);
  const P = u !== void 0 && !l ? u : A;
  let O;
  const z = d.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: S,
    color: s,
    disabled: l,
    error: c,
    filled: w,
    focused: P,
    fullWidth: f,
    hiddenLabel: h,
    size: m,
    onBlur: () => {
      F(!1);
    },
    onEmpty: () => {
      C(!1);
    },
    onFilled: () => {
      C(!0);
    },
    onFocus: () => {
      F(!0);
    },
    registerEffect: O,
    required: g,
    variant: x
  }), [b, s, l, c, w, P, f, h, O, g, m, x]);
  return /* @__PURE__ */ T.jsx(uo.Provider, {
    value: z,
    children: /* @__PURE__ */ T.jsx(Nh, p({
      as: a,
      ownerState: $,
      className: Q(y.root, i),
      ref: n
    }, R, {
      children: o
    }))
  });
}), _h = zh;
function Dh(e) {
  return be("MuiFormHelperText", e);
}
const jh = ye("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Es = jh;
var Ts;
const Wh = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Hh = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: a,
    required: l
  } = e, c = {
    root: ["root", o && "disabled", i && "error", r && `size${Z(r)}`, n && "contained", a && "focused", s && "filled", l && "required"]
  };
  return Re(c, Dh, t);
}, Uh = V("p", {
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
  [`&.${Es.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Es.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Vh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p"
  } = r, a = q(r, Wh), l = Zt(), c = Cn({
    props: r,
    muiFormControl: l,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), u = p({}, r, {
    component: s,
    contained: c.variant === "filled" || c.variant === "outlined",
    variant: c.variant,
    size: c.size,
    disabled: c.disabled,
    error: c.error,
    filled: c.filled,
    focused: c.focused,
    required: c.required
  }), f = Hh(u);
  return /* @__PURE__ */ T.jsx(Uh, p({
    as: s,
    ownerState: u,
    className: Q(f.root, i),
    ref: n
  }, a, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ts || (Ts = /* @__PURE__ */ T.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
}), Kh = Vh;
function qh(e) {
  return be("MuiFormLabel", e);
}
const Gh = ye("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Dn = Gh, Xh = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Yh = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${Z(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return Re(l, qh, t);
}, Zh = V("label", {
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
  [`&.${Dn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Dn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Dn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Jh = V("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Dn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Qh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    component: s = "label"
  } = r, a = q(r, Xh), l = Zt(), c = Cn({
    props: r,
    muiFormControl: l,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), u = p({}, r, {
    color: c.color || "primary",
    component: s,
    disabled: c.disabled,
    error: c.error,
    filled: c.filled,
    focused: c.focused,
    required: c.required
  }), f = Yh(u);
  return /* @__PURE__ */ T.jsxs(Zh, p({
    as: s,
    ownerState: u,
    className: Q(f.root, i),
    ref: n
  }, a, {
    children: [o, c.required && /* @__PURE__ */ T.jsxs(Jh, {
      ownerState: u,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
}), eg = Qh, tg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Uo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const ng = {
  entering: {
    opacity: 1,
    transform: Uo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Po = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), za = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: l,
    onEntered: c,
    onEntering: u,
    onExit: f,
    onExited: h,
    onExiting: v,
    style: g,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = xa
  } = t, R = q(t, tg), $ = d.useRef(), y = d.useRef(), b = Zr(), S = d.useRef(null), w = He(S, i.ref, n), C = (I) => (M) => {
    if (I) {
      const B = S.current;
      M === void 0 ? I(B) : I(B, M);
    }
  }, A = C(u), F = C((I, M) => {
    Ca(I);
    const {
      duration: B,
      delay: D,
      easing: K
    } = Cr({
      style: g,
      timeout: m,
      easing: s
    }, {
      mode: "enter"
    });
    let te;
    m === "auto" ? (te = b.transitions.getAutoHeightDuration(I.clientHeight), y.current = te) : te = B, I.style.transition = [b.transitions.create("opacity", {
      duration: te,
      delay: D
    }), b.transitions.create("transform", {
      duration: Po ? te : te * 0.666,
      delay: D,
      easing: K
    })].join(","), l && l(I, M);
  }), P = C(c), O = C(v), z = C((I) => {
    const {
      duration: M,
      delay: B,
      easing: D
    } = Cr({
      style: g,
      timeout: m,
      easing: s
    }, {
      mode: "exit"
    });
    let K;
    m === "auto" ? (K = b.transitions.getAutoHeightDuration(I.clientHeight), y.current = K) : K = M, I.style.transition = [b.transitions.create("opacity", {
      duration: K,
      delay: B
    }), b.transitions.create("transform", {
      duration: Po ? K : K * 0.666,
      delay: Po ? B : B || K * 0.333,
      easing: D
    })].join(","), I.style.opacity = 0, I.style.transform = Uo(0.75), f && f(I);
  }), L = C(h), N = (I) => {
    m === "auto" && ($.current = setTimeout(I, y.current || 0)), r && r(S.current, I);
  };
  return d.useEffect(() => () => {
    clearTimeout($.current);
  }, []), /* @__PURE__ */ T.jsx(x, p({
    appear: o,
    in: a,
    nodeRef: S,
    onEnter: F,
    onEntered: P,
    onEntering: A,
    onExit: z,
    onExited: L,
    onExiting: O,
    addEndListener: N,
    timeout: m === "auto" ? null : m
  }, R, {
    children: (I, M) => /* @__PURE__ */ d.cloneElement(i, p({
      style: p({
        opacity: 0,
        transform: Uo(0.75),
        visibility: I === "exited" && !a ? "hidden" : void 0
      }, ng[I], g, i.props.style),
      ref: w
    }, M))
  }));
});
za.muiSupportAuto = !0;
const Vo = za, rg = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], og = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = Re({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Gm, t);
  return p({}, t, o);
}, ig = V(mo, {
  shouldForwardProp: (e) => gt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...po(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), p({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&:after": {
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
    [`&.${Tn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Tn.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${r}`,
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
    [`&:hover:not(.${Tn.disabled}, .${Tn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Tn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), sg = V(ho, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: fo
})({}), _a = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, s;
  const a = Se({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: c = {},
    componentsProps: u,
    fullWidth: f = !1,
    inputComponent: h = "input",
    multiline: v = !1,
    slotProps: g,
    slots: m = {},
    type: x = "text"
  } = a, R = q(a, rg), $ = og(a), b = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, S = g ?? u ? Je(g ?? u, b) : b, w = (r = (o = m.root) != null ? o : c.Root) != null ? r : ig, C = (i = (s = m.input) != null ? s : c.Input) != null ? i : sg;
  return /* @__PURE__ */ T.jsx(wi, p({
    slots: {
      root: w,
      input: C
    },
    slotProps: S,
    fullWidth: f,
    inputComponent: h,
    multiline: v,
    ref: n,
    type: x
  }, R, {
    classes: $
  }));
});
_a.muiName = "Input";
const Da = _a;
function ag(e) {
  return be("MuiInputAdornment", e);
}
const lg = ye("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), ks = lg;
var Os;
const cg = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], ug = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${Z(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, dg = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, a = {
    root: ["root", n && "disablePointerEvents", o && `position${Z(o)}`, s, r && "hiddenLabel", i && `size${Z(i)}`]
  };
  return Re(a, ag, t);
}, pg = V("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: ug
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
  [`&.${ks.positionStart}&:not(.${ks.hiddenLabel})`]: {
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
})), fg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: a = !1,
    disableTypography: l = !1,
    position: c,
    variant: u
  } = r, f = q(r, cg), h = Zt() || {};
  let v = u;
  u && h.variant, h && !v && (v = h.variant);
  const g = p({}, r, {
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: a,
    position: c,
    variant: v
  }), m = dg(g);
  return /* @__PURE__ */ T.jsx(uo.Provider, {
    value: null,
    children: /* @__PURE__ */ T.jsx(pg, p({
      as: s,
      ownerState: g,
      className: Q(m.root, i),
      ref: n
    }, f, {
      children: typeof o == "string" && !l ? /* @__PURE__ */ T.jsx(Sa, {
        color: "text.secondary",
        children: o
      }) : /* @__PURE__ */ T.jsxs(d.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Os || (Os = /* @__PURE__ */ T.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, o]
      })
    }))
  });
}), mb = fg;
function mg(e) {
  return be("MuiInputLabel", e);
}
ye("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const hg = ["disableAnimation", "margin", "shrink", "variant", "className"], gg = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${Z(r)}`, s],
    asterisk: [a && "asterisk"]
  }, c = Re(l, mg, t);
  return p({}, t, c);
}, vg = V(eg, {
  shouldForwardProp: (e) => gt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Dn.asterisk}`]: t.asterisk
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
}))), bg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: i,
    className: s
  } = r, a = q(r, hg), l = Zt();
  let c = i;
  typeof c > "u" && l && (c = l.filled || l.focused || l.adornedStart);
  const u = Cn({
    props: r,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), f = p({}, r, {
    disableAnimation: o,
    formControl: l,
    shrink: c,
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }), h = gg(f);
  return /* @__PURE__ */ T.jsx(vg, p({
    "data-shrink": c,
    ownerState: f,
    ref: n,
    className: Q(h.root, s)
  }, a, {
    classes: h
  }));
}), yg = bg, xg = /* @__PURE__ */ d.createContext({}), Cg = xg;
function Rg(e) {
  return be("MuiList", e);
}
ye("MuiList", ["root", "padding", "dense", "subheader"]);
const Sg = ["children", "className", "component", "dense", "disablePadding", "subheader"], wg = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return Re({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, Rg, t);
}, $g = V("ul", {
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
})), Pg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: c
  } = r, u = q(r, Sg), f = d.useMemo(() => ({
    dense: a
  }), [a]), h = p({}, r, {
    component: s,
    dense: a,
    disablePadding: l
  }), v = wg(h);
  return /* @__PURE__ */ T.jsx(Cg.Provider, {
    value: f,
    children: /* @__PURE__ */ T.jsxs($g, p({
      as: s,
      className: Q(v.root, i),
      ref: n,
      ownerState: h
    }, u, {
      children: [c, o]
    }))
  });
}), Eg = Pg, Tg = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Eo(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Is(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ja(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function kn(e, t, n, r, o, i) {
  let s = !1, a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !ja(a, i) || l)
      a = o(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const kg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: c = !1,
    onKeyDown: u,
    variant: f = "selectedMenu"
  } = t, h = q(t, Tg), v = d.useRef(null), g = d.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  kt(() => {
    o && v.current.focus();
  }, [o]), d.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (y, b) => {
      const S = !v.current.style.width;
      if (y.clientHeight < v.current.clientHeight && S) {
        const w = `${ca(Ue(y))}px`;
        v.current.style[b.direction === "rtl" ? "paddingLeft" : "paddingRight"] = w, v.current.style.width = `calc(100% + ${w})`;
      }
      return v.current;
    }
  }), []);
  const m = (y) => {
    const b = v.current, S = y.key, w = Ue(b).activeElement;
    if (S === "ArrowDown")
      y.preventDefault(), kn(b, w, c, l, Eo);
    else if (S === "ArrowUp")
      y.preventDefault(), kn(b, w, c, l, Is);
    else if (S === "Home")
      y.preventDefault(), kn(b, null, c, l, Eo);
    else if (S === "End")
      y.preventDefault(), kn(b, null, c, l, Is);
    else if (S.length === 1) {
      const C = g.current, A = S.toLowerCase(), F = performance.now();
      C.keys.length > 0 && (F - C.lastTime > 500 ? (C.keys = [], C.repeating = !0, C.previousKeyMatched = !0) : C.repeating && A !== C.keys[0] && (C.repeating = !1)), C.lastTime = F, C.keys.push(A);
      const P = w && !C.repeating && ja(w, C);
      C.previousKeyMatched && (P || kn(b, w, !1, l, Eo, C)) ? y.preventDefault() : C.previousKeyMatched = !1;
    }
    u && u(y);
  }, x = He(v, n);
  let R = -1;
  d.Children.forEach(s, (y, b) => {
    if (!/* @__PURE__ */ d.isValidElement(y)) {
      R === b && (R += 1, R >= s.length && (R = -1));
      return;
    }
    y.props.disabled || (f === "selectedMenu" && y.props.selected || R === -1) && (R = b), R === b && (y.props.disabled || y.props.muiSkipListHighlight || y.type.muiSkipListHighlight) && (R += 1, R >= s.length && (R = -1));
  });
  const $ = d.Children.map(s, (y, b) => {
    if (b === R) {
      const S = {};
      return i && (S.autoFocus = !0), y.props.tabIndex === void 0 && f === "selectedMenu" && (S.tabIndex = 0), /* @__PURE__ */ d.cloneElement(y, S);
    }
    return y;
  });
  return /* @__PURE__ */ T.jsx(Eg, p({
    role: "menu",
    ref: x,
    className: a,
    onKeyDown: m,
    tabIndex: o ? 0 : -1
  }, h, {
    children: $
  }));
}), Og = kg;
function Ig(e) {
  return be("MuiPopover", e);
}
ye("MuiPopover", ["root", "paper"]);
const Mg = ["onEntering"], Ag = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Bg = ["slotProps"];
function Ms(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function As(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Bs(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function To(e) {
  return typeof e == "function" ? e() : e;
}
const Fg = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"],
    paper: ["paper"]
  }, Ig, t);
}, Lg = V(kh, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Wa = V(Ra, {
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
}), Ng = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i;
  const s = Se({
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
    children: h,
    className: v,
    container: g,
    elevation: m = 8,
    marginThreshold: x = 16,
    open: R,
    PaperProps: $ = {},
    slots: y,
    slotProps: b,
    transformOrigin: S = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = Vo,
    transitionDuration: C = "auto",
    TransitionProps: {
      onEntering: A
    } = {},
    disableScrollLock: F = !1
  } = s, P = q(s.TransitionProps, Mg), O = q(s, Ag), z = (r = b == null ? void 0 : b.paper) != null ? r : $, L = d.useRef(), N = He(L, z.ref), I = p({}, s, {
    anchorOrigin: c,
    anchorReference: f,
    elevation: m,
    marginThreshold: x,
    externalPaperSlotProps: z,
    transformOrigin: S,
    TransitionComponent: w,
    transitionDuration: C,
    TransitionProps: P
  }), M = Fg(I), B = d.useCallback(() => {
    if (f === "anchorPosition")
      return u;
    const ee = To(l), _ = (ee && ee.nodeType === 1 ? ee : Ue(L.current).body).getBoundingClientRect();
    return {
      top: _.top + Ms(_, c.vertical),
      left: _.left + As(_, c.horizontal)
    };
  }, [l, c.horizontal, c.vertical, u, f]), D = d.useCallback((ee) => ({
    vertical: Ms(ee, S.vertical),
    horizontal: As(ee, S.horizontal)
  }), [S.horizontal, S.vertical]), K = d.useCallback((ee) => {
    const J = {
      width: ee.offsetWidth,
      height: ee.offsetHeight
    }, _ = D(J);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Bs(_)
      };
    const Ke = B();
    let re = Ke.top - _.vertical, Ee = Ke.left - _.horizontal;
    const ze = re + J.height, Pe = Ee + J.width, de = qt(To(l)), Te = de.innerHeight - x, ke = de.innerWidth - x;
    if (x !== null && re < x) {
      const pe = re - x;
      re -= pe, _.vertical += pe;
    } else if (x !== null && ze > Te) {
      const pe = ze - Te;
      re -= pe, _.vertical += pe;
    }
    if (x !== null && Ee < x) {
      const pe = Ee - x;
      Ee -= pe, _.horizontal += pe;
    } else if (Pe > ke) {
      const pe = Pe - ke;
      Ee -= pe, _.horizontal += pe;
    }
    return {
      top: `${Math.round(re)}px`,
      left: `${Math.round(Ee)}px`,
      transformOrigin: Bs(_)
    };
  }, [l, f, B, D, x]), [te, Me] = d.useState(R), fe = d.useCallback(() => {
    const ee = L.current;
    if (!ee)
      return;
    const J = K(ee);
    J.top !== null && (ee.style.top = J.top), J.left !== null && (ee.style.left = J.left), ee.style.transformOrigin = J.transformOrigin, Me(!0);
  }, [K]);
  d.useEffect(() => (F && window.addEventListener("scroll", fe), () => window.removeEventListener("scroll", fe)), [l, F, fe]);
  const oe = (ee, J) => {
    A && A(ee, J), fe();
  }, U = () => {
    Me(!1);
  };
  d.useEffect(() => {
    R && fe();
  }), d.useImperativeHandle(a, () => R ? {
    updatePosition: () => {
      fe();
    }
  } : null, [R, fe]), d.useEffect(() => {
    if (!R)
      return;
    const ee = aa(() => {
      fe();
    }), J = qt(l);
    return J.addEventListener("resize", ee), () => {
      ee.clear(), J.removeEventListener("resize", ee);
    };
  }, [l, R, fe]);
  let se = C;
  C === "auto" && !w.muiSupportAuto && (se = void 0);
  const ue = g || (l ? Ue(To(l)).body : void 0), ie = (o = y == null ? void 0 : y.root) != null ? o : Lg, ne = (i = y == null ? void 0 : y.paper) != null ? i : Wa, le = Xt({
    elementType: ne,
    externalSlotProps: p({}, z, {
      style: te ? z.style : p({}, z.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: m,
      ref: N
    },
    ownerState: I,
    className: Q(M.paper, z == null ? void 0 : z.className)
  }), Ae = Xt({
    elementType: ie,
    externalSlotProps: (b == null ? void 0 : b.root) || {},
    externalForwardedProps: O,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ue,
      open: R
    },
    ownerState: I,
    className: Q(M.root, v)
  }), {
    slotProps: X
  } = Ae, me = q(Ae, Bg);
  return /* @__PURE__ */ T.jsx(ie, p({}, me, !Rr(ie) && {
    slotProps: X,
    disableScrollLock: F
  }, {
    children: /* @__PURE__ */ T.jsx(w, p({
      appear: !0,
      in: R,
      onEntering: oe,
      onExited: U,
      timeout: se
    }, P, {
      children: /* @__PURE__ */ T.jsx(ne, p({}, le, {
        children: h
      }))
    }))
  }));
}), zg = Ng;
function _g(e) {
  return be("MuiMenu", e);
}
ye("MuiMenu", ["root", "paper", "list"]);
const Dg = ["onEntering"], jg = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Wg = {
  vertical: "top",
  horizontal: "right"
}, Hg = {
  vertical: "top",
  horizontal: "left"
}, Ug = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, _g, t);
}, Vg = V(zg, {
  shouldForwardProp: (e) => gt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Kg = V(Wa, {
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
}), qg = V(Og, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Gg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o;
  const i = Se({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: a,
    className: l,
    disableAutoFocusItem: c = !1,
    MenuListProps: u = {},
    onClose: f,
    open: h,
    PaperProps: v = {},
    PopoverClasses: g,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: x
    } = {},
    variant: R = "selectedMenu",
    slots: $ = {},
    slotProps: y = {}
  } = i, b = q(i.TransitionProps, Dg), S = q(i, jg), w = Zr(), C = w.direction === "rtl", A = p({}, i, {
    autoFocus: s,
    disableAutoFocusItem: c,
    MenuListProps: u,
    onEntering: x,
    PaperProps: v,
    transitionDuration: m,
    TransitionProps: b,
    variant: R
  }), F = Ug(A), P = s && !c && h, O = d.useRef(null), z = (K, te) => {
    O.current && O.current.adjustStyleForScrollbar(K, w), x && x(K, te);
  }, L = (K) => {
    K.key === "Tab" && (K.preventDefault(), f && f(K, "tabKeyDown"));
  };
  let N = -1;
  d.Children.map(a, (K, te) => {
    /* @__PURE__ */ d.isValidElement(K) && (K.props.disabled || (R === "selectedMenu" && K.props.selected || N === -1) && (N = te));
  });
  const I = (r = $.paper) != null ? r : Kg, M = (o = y.paper) != null ? o : v, B = Xt({
    elementType: $.root,
    externalSlotProps: y.root,
    ownerState: A,
    className: [F.root, l]
  }), D = Xt({
    elementType: I,
    externalSlotProps: M,
    ownerState: A,
    className: F.paper
  });
  return /* @__PURE__ */ T.jsx(Vg, p({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: C ? "right" : "left"
    },
    transformOrigin: C ? Wg : Hg,
    slots: {
      paper: I,
      root: $.root
    },
    slotProps: {
      root: B,
      paper: D
    },
    open: h,
    ref: n,
    transitionDuration: m,
    TransitionProps: p({
      onEntering: z
    }, b),
    ownerState: A
  }, S, {
    classes: g,
    children: /* @__PURE__ */ T.jsx(qg, p({
      onKeyDown: L,
      actions: O,
      autoFocus: s && (N === -1 || c),
      autoFocusItem: P,
      variant: R
    }, u, {
      className: Q(F.list, u.className),
      children: a
    }))
  }));
}), Xg = Gg;
function Yg(e) {
  return be("MuiNativeSelect", e);
}
const Zg = ye("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), $i = Zg, Jg = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Qg = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${Z(n)}`, i && "iconOpen", r && "disabled"]
  };
  return Re(a, Yg, t);
}, Ha = ({
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
  [`&.${$i.disabled}`]: {
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
}), ev = V("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: gt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${$i.multiple}`]: t.multiple
    }];
  }
})(Ha), Ua = ({
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
  [`&.${$i.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), tv = V("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})(Ua), nv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard"
  } = t, c = q(t, Jg), u = p({}, t, {
    disabled: o,
    variant: l,
    error: i
  }), f = Qg(u);
  return /* @__PURE__ */ T.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ T.jsx(ev, p({
      ownerState: u,
      className: Q(f.select, r),
      disabled: o,
      ref: a || n
    }, c)), t.multiple ? null : /* @__PURE__ */ T.jsx(tv, {
      as: s,
      ownerState: u,
      className: f.icon
    })]
  });
}), rv = nv;
var Fs;
const ov = ["children", "classes", "className", "label", "notched"], iv = V("fieldset", {
  shouldForwardProp: gt
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
}), sv = V("legend", {
  shouldForwardProp: gt
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
function av(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = q(e, ov), i = n != null && n !== "", s = p({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ T.jsx(iv, p({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, o, {
    children: /* @__PURE__ */ T.jsx(sv, {
      ownerState: s,
      children: i ? /* @__PURE__ */ T.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Fs || (Fs = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const lv = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], cv = (e) => {
  const {
    classes: t
  } = e, r = Re({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Ym, t);
  return p({}, t, r);
}, uv = V(mo, {
  shouldForwardProp: (e) => gt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: po
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return p({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Ft.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Ft.focused} .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Ft.error} .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Ft.disabled} .${Ft.notchedOutline}`]: {
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
}), dv = V(av, {
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
}), pv = V(ho, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: fo
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
})), Va = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, s, a;
  const l = Se({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: c = {},
    fullWidth: u = !1,
    inputComponent: f = "input",
    label: h,
    multiline: v = !1,
    notched: g,
    slots: m = {},
    type: x = "text"
  } = l, R = q(l, lv), $ = cv(l), y = Zt(), b = Cn({
    props: l,
    muiFormControl: y,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), S = p({}, l, {
    color: b.color || "primary",
    disabled: b.disabled,
    error: b.error,
    focused: b.focused,
    formControl: y,
    fullWidth: u,
    hiddenLabel: b.hiddenLabel,
    multiline: v,
    size: b.size,
    type: x
  }), w = (r = (o = m.root) != null ? o : c.Root) != null ? r : uv, C = (i = (s = m.input) != null ? s : c.Input) != null ? i : pv;
  return /* @__PURE__ */ T.jsx(wi, p({
    slots: {
      root: w,
      input: C
    },
    renderSuffix: (A) => /* @__PURE__ */ T.jsx(dv, {
      ownerState: S,
      className: $.notchedOutline,
      label: h != null && h !== "" && b.required ? a || (a = /* @__PURE__ */ T.jsxs(d.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof g < "u" ? g : !!(A.startAdornment || A.filled || A.focused)
    }),
    fullWidth: u,
    inputComponent: f,
    multiline: v,
    ref: n,
    type: x
  }, R, {
    classes: p({}, $, {
      notchedOutline: null
    })
  }));
});
Va.muiName = "Input";
const Ka = Va;
function fv(e) {
  return be("MuiSelect", e);
}
const mv = ye("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), On = mv;
var Ls;
const hv = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], gv = V("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${On.select}`]: t.select
      },
      {
        [`&.${On.select}`]: t[n.variant]
      },
      {
        [`&.${On.error}`]: t.error
      },
      {
        [`&.${On.multiple}`]: t.multiple
      }
    ];
  }
})(Ha, {
  // Win specificity over the input base
  [`&.${On.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), vv = V("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})(Ua), bv = V("input", {
  shouldForwardProp: (e) => Rd(e) && e !== "classes",
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
function Ns(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function yv(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const xv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${Z(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Re(a, fv, t);
}, Cv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": o,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: f,
    disabled: h,
    displayEmpty: v,
    error: g = !1,
    IconComponent: m,
    inputRef: x,
    labelId: R,
    MenuProps: $ = {},
    multiple: y,
    name: b,
    onBlur: S,
    onChange: w,
    onClose: C,
    onFocus: A,
    onOpen: F,
    open: P,
    readOnly: O,
    renderValue: z,
    SelectDisplayProps: L = {},
    tabIndex: N,
    value: I,
    variant: M = "standard"
  } = t, B = q(t, hv), [D, K] = un({
    controlled: I,
    default: f,
    name: "Select"
  }), [te, Me] = un({
    controlled: P,
    default: u,
    name: "Select"
  }), fe = d.useRef(null), oe = d.useRef(null), [U, se] = d.useState(null), {
    current: ue
  } = d.useRef(P != null), [ie, ne] = d.useState(), le = He(n, x), Ae = d.useCallback((W) => {
    oe.current = W, W && se(W);
  }, []), X = U == null ? void 0 : U.parentNode;
  d.useImperativeHandle(le, () => ({
    focus: () => {
      oe.current.focus();
    },
    node: fe.current,
    value: D
  }), [D]), d.useEffect(() => {
    u && te && U && !ue && (ne(a ? null : X.clientWidth), oe.current.focus());
  }, [U, a]), d.useEffect(() => {
    s && oe.current.focus();
  }, [s]), d.useEffect(() => {
    if (!R)
      return;
    const W = Ue(oe.current).getElementById(R);
    if (W) {
      const ce = () => {
        getSelection().isCollapsed && oe.current.focus();
      };
      return W.addEventListener("click", ce), () => {
        W.removeEventListener("click", ce);
      };
    }
  }, [R]);
  const me = (W, ce) => {
    W ? F && F(ce) : C && C(ce), ue || (ne(a ? null : X.clientWidth), Me(W));
  }, ee = (W) => {
    W.button === 0 && (W.preventDefault(), oe.current.focus(), me(!0, W));
  }, J = (W) => {
    me(!1, W);
  }, _ = d.Children.toArray(l), Ke = (W) => {
    const ce = _.find((Oe) => Oe.props.value === W.target.value);
    ce !== void 0 && (K(ce.props.value), w && w(W, ce));
  }, re = (W) => (ce) => {
    let Oe;
    if (ce.currentTarget.hasAttribute("tabindex")) {
      if (y) {
        Oe = Array.isArray(D) ? D.slice() : [];
        const Ye = D.indexOf(W.props.value);
        Ye === -1 ? Oe.push(W.props.value) : Oe.splice(Ye, 1);
      } else
        Oe = W.props.value;
      if (W.props.onClick && W.props.onClick(ce), D !== Oe && (K(Oe), w)) {
        const Ye = ce.nativeEvent || ce, zt = new Ye.constructor(Ye.type, Ye);
        Object.defineProperty(zt, "target", {
          writable: !0,
          value: {
            value: Oe,
            name: b
          }
        }), w(zt, W);
      }
      y || me(!1, ce);
    }
  }, Ee = (W) => {
    O || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(W.key) !== -1 && (W.preventDefault(), me(!0, W));
  }, ze = U !== null && te, Pe = (W) => {
    !ze && S && (Object.defineProperty(W, "target", {
      writable: !0,
      value: {
        value: D,
        name: b
      }
    }), S(W));
  };
  delete B["aria-invalid"];
  let de, Te;
  const ke = [];
  let pe = !1;
  (wr({
    value: D
  }) || v) && (z ? de = z(D) : pe = !0);
  const _e = _.map((W) => {
    if (!/* @__PURE__ */ d.isValidElement(W))
      return null;
    let ce;
    if (y) {
      if (!Array.isArray(D))
        throw new Error(Tt(2));
      ce = D.some((Oe) => Ns(Oe, W.props.value)), ce && pe && ke.push(W.props.children);
    } else
      ce = Ns(D, W.props.value), ce && pe && (Te = W.props.children);
    return /* @__PURE__ */ d.cloneElement(W, {
      "aria-selected": ce ? "true" : "false",
      onClick: re(W),
      onKeyUp: (Oe) => {
        Oe.key === " " && Oe.preventDefault(), W.props.onKeyUp && W.props.onKeyUp(Oe);
      },
      role: "option",
      selected: ce,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": W.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  pe && (y ? ke.length === 0 ? de = null : de = ke.reduce((W, ce, Oe) => (W.push(ce), Oe < ke.length - 1 && W.push(", "), W), []) : de = Te);
  let Fe = ie;
  !a && ue && U && (Fe = X.clientWidth);
  let we;
  typeof N < "u" ? we = N : we = h ? null : 0;
  const G = L.id || (b ? `mui-component-select-${b}` : void 0), H = p({}, t, {
    variant: M,
    value: D,
    open: ze,
    error: g
  }), Be = xv(H), Xe = p({}, $.PaperProps, (r = $.slotProps) == null ? void 0 : r.paper), nt = Dr();
  return /* @__PURE__ */ T.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ T.jsx(gv, p({
      ref: Ae,
      tabIndex: we,
      role: "combobox",
      "aria-controls": nt,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": ze ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [R, G].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Ee,
      onMouseDown: h || O ? null : ee,
      onBlur: Pe,
      onFocus: A
    }, L, {
      ownerState: H,
      className: Q(L.className, Be.select, c),
      id: G,
      children: yv(de) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ls || (Ls = /* @__PURE__ */ T.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : de
    })), /* @__PURE__ */ T.jsx(bv, p({
      "aria-invalid": g,
      value: Array.isArray(D) ? D.join(",") : D,
      name: b,
      ref: fe,
      "aria-hidden": !0,
      onChange: Ke,
      tabIndex: -1,
      disabled: h,
      className: Be.nativeInput,
      autoFocus: s,
      ownerState: H
    }, B)), /* @__PURE__ */ T.jsx(vv, {
      as: m,
      className: Be.icon,
      ownerState: H
    }), /* @__PURE__ */ T.jsx(Xg, p({
      id: `menu-${b || ""}`,
      anchorEl: X,
      open: ze,
      onClose: J,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, $, {
      MenuListProps: p({
        "aria-labelledby": R,
        role: "listbox",
        "aria-multiselectable": y ? "true" : void 0,
        disableListWrap: !0,
        id: nt
      }, $.MenuListProps),
      slotProps: p({}, $.slotProps, {
        paper: p({}, Xe, {
          style: p({
            minWidth: Fe
          }, Xe != null ? Xe.style : null)
        })
      }),
      children: _e
    }))]
  });
}), Rv = Cv, Sv = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], wv = ["root"], $v = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Pi = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => gt(e) && e !== "variant",
  slot: "Root"
}, Pv = V(Da, Pi)(""), Ev = V(Ka, Pi)(""), Tv = V(Na, Pi)(""), qa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: c = !1,
    IconComponent: u = eh,
    id: f,
    input: h,
    inputProps: v,
    label: g,
    labelId: m,
    MenuProps: x,
    multiple: R = !1,
    native: $ = !1,
    onClose: y,
    onOpen: b,
    open: S,
    renderValue: w,
    SelectDisplayProps: C,
    variant: A = "outlined"
  } = r, F = q(r, Sv), P = $ ? rv : Rv, O = Zt(), z = Cn({
    props: r,
    muiFormControl: O,
    states: ["variant", "error"]
  }), L = z.variant || A, N = p({}, r, {
    variant: L,
    classes: s
  }), I = $v(N), M = q(I, wv), B = h || {
    standard: /* @__PURE__ */ T.jsx(Pv, {
      ownerState: N
    }),
    outlined: /* @__PURE__ */ T.jsx(Ev, {
      label: g,
      ownerState: N
    }),
    filled: /* @__PURE__ */ T.jsx(Tv, {
      ownerState: N
    })
  }[L], D = He(n, B.ref);
  return /* @__PURE__ */ T.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(B, p({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: P,
      inputProps: p({
        children: i,
        error: z.error,
        IconComponent: u,
        variant: L,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: R
      }, $ ? {
        id: f
      } : {
        autoWidth: o,
        defaultOpen: l,
        displayEmpty: c,
        labelId: m,
        MenuProps: x,
        onClose: y,
        onOpen: b,
        open: S,
        renderValue: w,
        SelectDisplayProps: p({
          id: f
        }, C)
      }, v, {
        classes: v ? Je(M, v.classes) : M
      }, h ? h.props.inputProps : {})
    }, R && $ && L === "outlined" ? {
      notched: !0
    } : {}, {
      ref: D,
      className: Q(B.props.className, a, I.root)
    }, !h && {
      variant: L
    }, F))
  });
});
qa.muiName = "Select";
const kv = qa;
function Ov(e) {
  return be("MuiTooltip", e);
}
const Iv = ye("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Lt = Iv, Mv = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Av(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Bv = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${Z(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Re(s, Ov, t);
}, Fv = V(Ba, {
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
  [`&[data-popper-placement*="bottom"] .${Lt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Lt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Lt.arrow}`]: p({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Lt.arrow}`]: p({}, t.isRtl ? {
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
})), Lv = V("div", {
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
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ze(e.palette.grey[700], 0.92),
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
  lineHeight: `${Av(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Lt.popper}[data-popper-placement*="left"] &`]: p({
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
  [`.${Lt.popper}[data-popper-placement*="right"] &`]: p({
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
  [`.${Lt.popper}[data-popper-placement*="top"] &`]: p({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Lt.popper}[data-popper-placement*="bottom"] &`]: p({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), Nv = V("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : Ze(e.palette.grey[700], 0.9),
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
let lr = !1, ko = null, In = {
  x: 0,
  y: 0
};
function cr(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const zv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var r, o, i, s, a, l, c, u, f, h, v, g, m, x, R, $, y, b, S;
  const w = Se({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: C = !1,
    children: A,
    components: F = {},
    componentsProps: P = {},
    describeChild: O = !1,
    disableFocusListener: z = !1,
    disableHoverListener: L = !1,
    disableInteractive: N = !1,
    disableTouchListener: I = !1,
    enterDelay: M = 100,
    enterNextDelay: B = 0,
    enterTouchDelay: D = 700,
    followCursor: K = !1,
    id: te,
    leaveDelay: Me = 0,
    leaveTouchDelay: fe = 1500,
    onClose: oe,
    onOpen: U,
    open: se,
    placement: ue = "bottom",
    PopperComponent: ie,
    PopperProps: ne = {},
    slotProps: le = {},
    slots: Ae = {},
    title: X,
    TransitionComponent: me = Vo,
    TransitionProps: ee
  } = w, J = q(w, Mv), _ = /* @__PURE__ */ d.isValidElement(A) ? A : /* @__PURE__ */ T.jsx("span", {
    children: A
  }), Ke = Zr(), re = Ke.direction === "rtl", [Ee, ze] = d.useState(), [Pe, de] = d.useState(null), Te = d.useRef(!1), ke = N || K, pe = d.useRef(), _e = d.useRef(), Fe = d.useRef(), we = d.useRef(), [G, H] = un({
    controlled: se,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Be = G;
  const Xe = Dr(te), nt = d.useRef(), W = d.useCallback(() => {
    nt.current !== void 0 && (document.body.style.WebkitUserSelect = nt.current, nt.current = void 0), clearTimeout(we.current);
  }, []);
  d.useEffect(() => () => {
    clearTimeout(pe.current), clearTimeout(_e.current), clearTimeout(Fe.current), W();
  }, [W]);
  const ce = (ae) => {
    clearTimeout(ko), lr = !0, H(!0), U && !Be && U(ae);
  }, Oe = dt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      clearTimeout(ko), ko = setTimeout(() => {
        lr = !1;
      }, 800 + Me), H(!1), oe && Be && oe(ae), clearTimeout(pe.current), pe.current = setTimeout(() => {
        Te.current = !1;
      }, Ke.transitions.duration.shortest);
    }
  ), Ye = (ae) => {
    Te.current && ae.type !== "touchstart" || (Ee && Ee.removeAttribute("title"), clearTimeout(_e.current), clearTimeout(Fe.current), M || lr && B ? _e.current = setTimeout(() => {
      ce(ae);
    }, lr ? B : M) : ce(ae));
  }, zt = (ae) => {
    clearTimeout(_e.current), clearTimeout(Fe.current), Fe.current = setTimeout(() => {
      Oe(ae);
    }, Me);
  }, {
    isFocusVisibleRef: vt,
    onBlur: _t,
    onFocus: At,
    ref: Jt
  } = la(), [, Bt] = d.useState(!1), Qn = (ae) => {
    _t(ae), vt.current === !1 && (Bt(!1), zt(ae));
  }, Rn = (ae) => {
    Ee || ze(ae.currentTarget), At(ae), vt.current === !0 && (Bt(!0), Ye(ae));
  }, Sn = (ae) => {
    Te.current = !0;
    const ot = _.props;
    ot.onTouchStart && ot.onTouchStart(ae);
  }, er = Ye, tr = zt, nr = (ae) => {
    Sn(ae), clearTimeout(Fe.current), clearTimeout(pe.current), W(), nt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", we.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = nt.current, Ye(ae);
    }, D);
  }, go = (ae) => {
    _.props.onTouchEnd && _.props.onTouchEnd(ae), W(), clearTimeout(Fe.current), Fe.current = setTimeout(() => {
      Oe(ae);
    }, fe);
  };
  d.useEffect(() => {
    if (!Be)
      return;
    function ae(ot) {
      (ot.key === "Escape" || ot.key === "Esc") && Oe(ot);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [Oe, Be]);
  const vo = He(_.ref, Jt, ze, n);
  !X && X !== 0 && (Be = !1);
  const wn = d.useRef(), bo = (ae) => {
    const ot = _.props;
    ot.onMouseMove && ot.onMouseMove(ae), In = {
      x: ae.clientX,
      y: ae.clientY
    }, wn.current && wn.current.update();
  }, Dt = {}, Qt = typeof X == "string";
  O ? (Dt.title = !Be && Qt && !L ? X : null, Dt["aria-describedby"] = Be ? Xe : null) : (Dt["aria-label"] = Qt ? X : null, Dt["aria-labelledby"] = Be && !Qt ? Xe : null);
  const rt = p({}, Dt, J, _.props, {
    className: Q(J.className, _.props.className),
    onTouchStart: Sn,
    ref: vo
  }, K ? {
    onMouseMove: bo
  } : {}), jt = {};
  I || (rt.onTouchStart = nr, rt.onTouchEnd = go), L || (rt.onMouseOver = cr(er, rt.onMouseOver), rt.onMouseLeave = cr(tr, rt.onMouseLeave), ke || (jt.onMouseOver = er, jt.onMouseLeave = tr)), z || (rt.onFocus = cr(Rn, rt.onFocus), rt.onBlur = cr(Qn, rt.onBlur), ke || (jt.onFocus = Rn, jt.onBlur = Qn));
  const yo = d.useMemo(() => {
    var ae;
    let ot = [{
      name: "arrow",
      enabled: !!Pe,
      options: {
        element: Pe,
        padding: 4
      }
    }];
    return (ae = ne.popperOptions) != null && ae.modifiers && (ot = ot.concat(ne.popperOptions.modifiers)), p({}, ne.popperOptions, {
      modifiers: ot
    });
  }, [Pe, ne]), wt = p({}, w, {
    isRtl: re,
    arrow: C,
    disableInteractive: ke,
    placement: ue,
    PopperComponentProp: ie,
    touch: Te.current
  }), en = Bv(wt), k = (r = (o = Ae.popper) != null ? o : F.Popper) != null ? r : Fv, E = (i = (s = (a = Ae.transition) != null ? a : F.Transition) != null ? s : me) != null ? i : Vo, j = (l = (c = Ae.tooltip) != null ? c : F.Tooltip) != null ? l : Lv, Y = (u = (f = Ae.arrow) != null ? f : F.Arrow) != null ? u : Nv, ve = An(k, p({}, ne, (h = le.popper) != null ? h : P.popper, {
    className: Q(en.popper, ne == null ? void 0 : ne.className, (v = (g = le.popper) != null ? g : P.popper) == null ? void 0 : v.className)
  }), wt), We = An(E, p({}, ee, (m = le.transition) != null ? m : P.transition), wt), De = An(j, p({}, (x = le.tooltip) != null ? x : P.tooltip, {
    className: Q(en.tooltip, (R = ($ = le.tooltip) != null ? $ : P.tooltip) == null ? void 0 : R.className)
  }), wt), ct = An(Y, p({}, (y = le.arrow) != null ? y : P.arrow, {
    className: Q(en.arrow, (b = (S = le.arrow) != null ? S : P.arrow) == null ? void 0 : b.className)
  }), wt);
  return /* @__PURE__ */ T.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ d.cloneElement(_, rt), /* @__PURE__ */ T.jsx(k, p({
      as: ie ?? Ba,
      placement: ue,
      anchorEl: K ? {
        getBoundingClientRect: () => ({
          top: In.y,
          left: In.x,
          right: In.x,
          bottom: In.y,
          width: 0,
          height: 0
        })
      } : Ee,
      popperRef: wn,
      open: Ee ? Be : !1,
      id: Xe,
      transition: !0
    }, jt, ve, {
      popperOptions: yo,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ T.jsx(E, p({
        timeout: Ke.transitions.duration.shorter
      }, ae, We, {
        children: /* @__PURE__ */ T.jsxs(j, p({}, De, {
          children: [X, C ? /* @__PURE__ */ T.jsx(Y, p({}, ct, {
            ref: de
          })) : null]
        }))
      }))
    }))]
  });
}), hb = zv;
function _v(e) {
  return be("MuiTextField", e);
}
ye("MuiTextField", ["root"]);
const Dv = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], jv = {
  standard: Da,
  filled: Na,
  outlined: Ka
}, Wv = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"]
  }, _v, t);
}, Hv = V(_h, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Uv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: a,
    color: l = "primary",
    defaultValue: c,
    disabled: u = !1,
    error: f = !1,
    FormHelperTextProps: h,
    fullWidth: v = !1,
    helperText: g,
    id: m,
    InputLabelProps: x,
    inputProps: R,
    InputProps: $,
    inputRef: y,
    label: b,
    maxRows: S,
    minRows: w,
    multiline: C = !1,
    name: A,
    onBlur: F,
    onChange: P,
    onFocus: O,
    placeholder: z,
    required: L = !1,
    rows: N,
    select: I = !1,
    SelectProps: M,
    type: B,
    value: D,
    variant: K = "outlined"
  } = r, te = q(r, Dv), Me = p({}, r, {
    autoFocus: i,
    color: l,
    disabled: u,
    error: f,
    fullWidth: v,
    multiline: C,
    required: L,
    select: I,
    variant: K
  }), fe = Wv(Me), oe = {};
  K === "outlined" && (x && typeof x.shrink < "u" && (oe.notched = x.shrink), oe.label = b), I && ((!M || !M.native) && (oe.id = void 0), oe["aria-describedby"] = void 0);
  const U = Dr(m), se = g && U ? `${U}-helper-text` : void 0, ue = b && U ? `${U}-label` : void 0, ie = jv[K], ne = /* @__PURE__ */ T.jsx(ie, p({
    "aria-describedby": se,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: C,
    name: A,
    rows: N,
    maxRows: S,
    minRows: w,
    type: B,
    value: D,
    id: U,
    inputRef: y,
    onBlur: F,
    onChange: P,
    onFocus: O,
    placeholder: z,
    inputProps: R
  }, oe, $));
  return /* @__PURE__ */ T.jsxs(Hv, p({
    className: Q(fe.root, a),
    disabled: u,
    error: f,
    fullWidth: v,
    ref: n,
    required: L,
    color: l,
    variant: K,
    ownerState: Me
  }, te, {
    children: [b != null && b !== "" && /* @__PURE__ */ T.jsx(yg, p({
      htmlFor: U,
      id: ue
    }, x, {
      children: b
    })), I ? /* @__PURE__ */ T.jsx(kv, p({
      "aria-describedby": se,
      id: U,
      labelId: ue,
      value: D,
      input: ne
    }, M, {
      children: s
    })) : ne, g && /* @__PURE__ */ T.jsx(Kh, p({
      id: se
    }, h, {
      children: g
    }))]
  }));
}), gb = Uv;
function Vv(e) {
  return be("MuiToggleButton", e);
}
const Kv = ye("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), zs = Kv, qv = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"], Gv = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: r,
    disabled: o,
    size: i,
    color: s
  } = e, a = {
    root: ["root", r && "selected", o && "disabled", n && "fullWidth", `size${Z(i)}`, s]
  };
  return Re(a, Vv, t);
}, Xv = V(gi, {
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
  let n = t.color === "standard" ? e.palette.text.primary : e.palette[t.color].main, r;
  return e.vars && (n = t.color === "standard" ? e.vars.palette.text.primary : e.vars.palette[t.color].main, r = t.color === "standard" ? e.vars.palette.text.primaryChannel : e.vars.palette[t.color].mainChannel), p({}, e.typography.button, {
    borderRadius: (e.vars || e).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(e.vars || e).palette.divider}`,
    color: (e.vars || e).palette.action.active
  }, t.fullWidth && {
    width: "100%"
  }, {
    [`&.${zs.disabled}`]: {
      color: (e.vars || e).palette.action.disabled,
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      // Reset on mouse devices
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ze(e.palette.text.primary, e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${zs.selected}`]: {
      color: n,
      backgroundColor: e.vars ? `rgba(${r} / ${e.vars.palette.action.selectedOpacity})` : Ze(n, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${r} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ze(n, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: e.vars ? `rgba(${r} / ${e.vars.palette.action.selectedOpacity})` : Ze(n, e.palette.action.selectedOpacity)
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
}), Yv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiToggleButton"
  }), {
    children: o,
    className: i,
    color: s = "standard",
    disabled: a = !1,
    disableFocusRipple: l = !1,
    fullWidth: c = !1,
    onChange: u,
    onClick: f,
    selected: h,
    size: v = "medium",
    value: g
  } = r, m = q(r, qv), x = p({}, r, {
    color: s,
    disabled: a,
    disableFocusRipple: l,
    fullWidth: c,
    size: v
  }), R = Gv(x), $ = (y) => {
    f && (f(y, g), y.defaultPrevented) || u && u(y, g);
  };
  return /* @__PURE__ */ T.jsx(Xv, p({
    className: Q(R.root, i),
    disabled: a,
    focusRipple: !l,
    ref: n,
    onClick: $,
    onChange: u,
    value: g,
    ownerState: x,
    "aria-pressed": h
  }, m, {
    children: o
  }));
}), vb = Yv;
function Zv(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.indexOf(e) >= 0 : e === t;
}
function Jv(e) {
  return be("MuiToggleButtonGroup", e);
}
const Qv = ye("MuiToggleButtonGroup", ["root", "selected", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth"]), $t = Qv, eb = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"], tb = (e) => {
  const {
    classes: t,
    orientation: n,
    fullWidth: r,
    disabled: o
  } = e, i = {
    root: ["root", n === "vertical" && "vertical", r && "fullWidth"],
    grouped: ["grouped", `grouped${Z(n)}`, o && "disabled"]
  };
  return Re(i, Jv, t);
}, nb = V("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${$t.grouped}`]: t.grouped
    }, {
      [`& .${$t.grouped}`]: t[`grouped${Z(n.orientation)}`]
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
  [`& .${$t.grouped}`]: p({}, e.orientation === "horizontal" ? {
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
    [`&.${$t.selected} + .${$t.grouped}.${$t.selected}`]: {
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
    [`&.${$t.selected} + .${$t.grouped}.${$t.selected}`]: {
      borderTop: 0,
      marginTop: 0
    }
  })
})), rb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const r = Se({
    props: t,
    name: "MuiToggleButtonGroup"
  }), {
    children: o,
    className: i,
    color: s = "standard",
    disabled: a = !1,
    exclusive: l = !1,
    fullWidth: c = !1,
    onChange: u,
    orientation: f = "horizontal",
    size: h = "medium",
    value: v
  } = r, g = q(r, eb), m = p({}, r, {
    disabled: a,
    fullWidth: c,
    orientation: f,
    size: h
  }), x = tb(m), R = (y, b) => {
    if (!u)
      return;
    const S = v && v.indexOf(b);
    let w;
    v && S >= 0 ? (w = v.slice(), w.splice(S, 1)) : w = v ? v.concat(b) : [b], u(y, w);
  }, $ = (y, b) => {
    u && u(y, v === b ? null : b);
  };
  return /* @__PURE__ */ T.jsx(nb, p({
    role: "group",
    className: Q(x.root, i),
    ref: n,
    ownerState: m
  }, g, {
    children: d.Children.map(o, (y) => /* @__PURE__ */ d.isValidElement(y) ? /* @__PURE__ */ d.cloneElement(y, {
      className: Q(x.grouped, y.props.className),
      onChange: l ? $ : R,
      selected: y.props.selected === void 0 ? Zv(y.props.value, v) : y.props.selected,
      size: y.props.size || h,
      fullWidth: c,
      color: y.props.color || s,
      disabled: y.props.disabled || a
    }) : null)
  }));
}), bb = rb;
export {
  lb as A,
  fb as B,
  ub as C,
  sb as E,
  Kl as G,
  bp as I,
  hb as M,
  Ba as P,
  ab as T,
  ql as a,
  xd as b,
  ib as c,
  cb as d,
  db as e,
  pb as f,
  mb as g,
  oa as h,
  gb as i,
  T as j,
  Q as k,
  vb as l,
  bb as m,
  Fo as n,
  Lt as t,
  He as u
};
