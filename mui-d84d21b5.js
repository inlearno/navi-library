import { r as d, a as Ur, R as Ft, b as fo, c as Ji } from "./react-6f5a8403.js";
var Qi = { exports: {} }, Lo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hl = d, gl = Symbol.for("react.element"), bl = Symbol.for("react.fragment"), vl = Object.prototype.hasOwnProperty, yl = hl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xl = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
  var o, r = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (o in t)
    vl.call(t, o) && !xl.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in t = e.defaultProps, t)
      r[o] === void 0 && (r[o] = t[o]);
  return { $$typeof: gl, type: e, key: s, ref: i, props: r, _owner: yl.current };
}
Lo.Fragment = bl;
Lo.jsx = ea;
Lo.jsxs = ea;
Qi.exports = Lo;
var P = Qi.exports;
function Cl(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Sl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var $l = /* @__PURE__ */ function() {
  function e(n) {
    var o = this;
    this._insertTag = function(r) {
      var s;
      o.tags.length === 0 ? o.insertionPoint ? s = o.insertionPoint.nextSibling : o.prepend ? s = o.container.firstChild : s = o.before : s = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(r, s), o.tags.push(r);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Sl(this));
    var r = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Cl(r);
      try {
        s.insertRule(o, s.cssRules.length);
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
}(), st = "-ms-", Eo = "-moz-", Ee = "-webkit-", ta = "comm", is = "rule", as = "decl", Rl = "@import", na = "@keyframes", wl = "@layer", Pl = Math.abs, No = String.fromCharCode, El = Object.assign;
function Tl(e, t) {
  return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0;
}
function oa(e) {
  return e.trim();
}
function kl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Te(e, t, n) {
  return e.replace(t, n);
}
function Vr(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jn(e, t, n) {
  return e.slice(t, n);
}
function kt(e) {
  return e.length;
}
function ls(e) {
  return e.length;
}
function mo(e, t) {
  return t.push(e), e;
}
function Ol(e, t) {
  return e.map(t).join("");
}
var zo = 1, xn = 1, ra = 0, pt = 0, Xe = 0, En = "";
function _o(e, t, n, o, r, s, i) {
  return { value: e, root: t, parent: n, type: o, props: r, children: s, line: zo, column: xn, length: i, return: "" };
}
function Fn(e, t) {
  return El(_o("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Il() {
  return Xe;
}
function Ml() {
  return Xe = pt > 0 ? ot(En, --pt) : 0, xn--, Xe === 10 && (xn = 1, zo--), Xe;
}
function ht() {
  return Xe = pt < ra ? ot(En, pt++) : 0, xn++, Xe === 10 && (xn = 1, zo++), Xe;
}
function It() {
  return ot(En, pt);
}
function So() {
  return pt;
}
function ro(e, t) {
  return Jn(En, e, t);
}
function Qn(e) {
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
function sa(e) {
  return zo = xn = 1, ra = kt(En = e), pt = 0, [];
}
function ia(e) {
  return En = "", e;
}
function $o(e) {
  return oa(ro(pt - 1, Kr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bl(e) {
  for (; (Xe = It()) && Xe < 33; )
    ht();
  return Qn(e) > 2 || Qn(Xe) > 3 ? "" : " ";
}
function Al(e, t) {
  for (; --t && ht() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return ro(e, So() + (t < 6 && It() == 32 && ht() == 32));
}
function Kr(e) {
  for (; ht(); )
    switch (Xe) {
      case e:
        return pt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kr(Xe);
        break;
      case 40:
        e === 41 && Kr(e);
        break;
      case 92:
        ht();
        break;
    }
  return pt;
}
function Fl(e, t) {
  for (; ht() && e + Xe !== 47 + 10; )
    if (e + Xe === 42 + 42 && It() === 47)
      break;
  return "/*" + ro(t, pt - 1) + "*" + No(e === 47 ? e : ht());
}
function Ll(e) {
  for (; !Qn(It()); )
    ht();
  return ro(e, pt);
}
function Nl(e) {
  return ia(Ro("", null, null, null, [""], e = sa(e), 0, [0], e));
}
function Ro(e, t, n, o, r, s, i, a, l) {
  for (var c = 0, u = 0, h = i, f = 0, g = 0, b = 0, m = 1, y = 1, S = 1, w = 0, C = "", v = r, $ = s, R = o, x = C; y; )
    switch (b = w, w = ht()) {
      case 40:
        if (b != 108 && ot(x, h - 1) == 58) {
          Vr(x += Te($o(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += $o(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Bl(b);
        break;
      case 92:
        x += Al(So() - 1, 7);
        continue;
      case 47:
        switch (It()) {
          case 42:
          case 47:
            mo(zl(Fl(ht(), So()), t, n), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * m:
        a[c++] = kt(x) * S;
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            S == -1 && (x = Te(x, /\f/g, "")), g > 0 && kt(x) - h && mo(g > 32 ? js(x + ";", o, n, h - 1) : js(Te(x, " ", "") + ";", o, n, h - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (mo(R = _s(x, t, n, c, u, r, a, C, v = [], $ = [], h), s), w === 123)
              if (u === 0)
                Ro(x, t, R, R, v, s, h, a, $);
              else
                switch (f === 99 && ot(x, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ro(e, R, R, o && mo(_s(e, R, R, 0, 0, r, a, C, r, v = [], h), $), r, $, h, a, o ? v : $);
                    break;
                  default:
                    Ro(x, R, R, R, [""], $, 0, a, $);
                }
        }
        c = u = g = 0, m = S = 1, C = x = "", h = i;
        break;
      case 58:
        h = 1 + kt(x), g = b;
      default:
        if (m < 1) {
          if (w == 123)
            --m;
          else if (w == 125 && m++ == 0 && Ml() == 125)
            continue;
        }
        switch (x += No(w), w * m) {
          case 38:
            S = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[c++] = (kt(x) - 1) * S, S = 1;
            break;
          case 64:
            It() === 45 && (x += $o(ht())), f = It(), u = h = kt(C = x += Ll(So())), w++;
            break;
          case 45:
            b === 45 && kt(x) == 2 && (m = 0);
        }
    }
  return s;
}
function _s(e, t, n, o, r, s, i, a, l, c, u) {
  for (var h = r - 1, f = r === 0 ? s : [""], g = ls(f), b = 0, m = 0, y = 0; b < o; ++b)
    for (var S = 0, w = Jn(e, h + 1, h = Pl(m = i[b])), C = e; S < g; ++S)
      (C = oa(m > 0 ? f[S] + " " + w : Te(w, /&\f/g, f[S]))) && (l[y++] = C);
  return _o(e, t, n, r === 0 ? is : a, l, c, u);
}
function zl(e, t, n) {
  return _o(e, t, n, ta, No(Il()), Jn(e, 2, -2), 0);
}
function js(e, t, n, o) {
  return _o(e, t, n, as, Jn(e, 0, o), Jn(e, o + 1, -1), o);
}
function vn(e, t) {
  for (var n = "", o = ls(e), r = 0; r < o; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function _l(e, t, n, o) {
  switch (e.type) {
    case wl:
      if (e.children.length)
        break;
    case Rl:
    case as:
      return e.return = e.return || e.value;
    case ta:
      return "";
    case na:
      return e.return = e.value + "{" + vn(e.children, o) + "}";
    case is:
      e.value = e.props.join(",");
  }
  return kt(n = vn(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function jl(e) {
  var t = ls(e);
  return function(n, o, r, s) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](n, o, r, s) || "";
    return i;
  };
}
function Dl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function aa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Wl = function(t, n, o) {
  for (var r = 0, s = 0; r = s, s = It(), r === 38 && s === 12 && (n[o] = 1), !Qn(s); )
    ht();
  return ro(t, pt);
}, Hl = function(t, n) {
  var o = -1, r = 44;
  do
    switch (Qn(r)) {
      case 0:
        r === 38 && It() === 12 && (n[o] = 1), t[o] += Wl(pt - 1, n, o);
        break;
      case 2:
        t[o] += $o(r);
        break;
      case 4:
        if (r === 44) {
          t[++o] = It() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += No(r);
    }
  while (r = ht());
  return t;
}, Ul = function(t, n) {
  return ia(Hl(sa(t), n));
}, Ds = /* @__PURE__ */ new WeakMap(), Vl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, r = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ds.get(o)) && !r) {
      Ds.set(t, !0);
      for (var s = [], i = Ul(n, s), a = o.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          t.props[c] = s[l] ? i[l].replace(/&\f/g, a[u]) : a[u] + " " + i[l];
    }
  }
}, Kl = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function la(e, t) {
  switch (Tl(e, t)) {
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
      return Ee + e + Eo + e + st + e + e;
    case 6828:
    case 4268:
      return Ee + e + st + e + e;
    case 6165:
      return Ee + e + st + "flex-" + e + e;
    case 5187:
      return Ee + e + Te(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + st + "flex-$1$2") + e;
    case 5443:
      return Ee + e + st + "flex-item-" + Te(e, /flex-|-self/, "") + e;
    case 4675:
      return Ee + e + st + "flex-line-pack" + Te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ee + e + st + Te(e, "shrink", "negative") + e;
    case 5292:
      return Ee + e + st + Te(e, "basis", "preferred-size") + e;
    case 6060:
      return Ee + "box-" + Te(e, "-grow", "") + Ee + e + st + Te(e, "grow", "positive") + e;
    case 4554:
      return Ee + Te(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    case 6187:
      return Te(Te(Te(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Te(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return Te(Te(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + st + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
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
            return Te(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + Eo + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Vr(e, "stretch") ? la(Te(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ot(e, kt(e) - 3 - (~Vr(e, "!important") && 10))) {
        case 107:
          return Te(e, ":", ":" + Ee) + e;
        case 101:
          return Te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + st + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return Ee + e + st + Te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ee + e + st + Te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ee + e + st + Te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + st + e + e;
  }
  return e;
}
var ql = function(t, n, o, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case as:
        t.return = la(t.value, t.length);
        break;
      case na:
        return vn([Fn(t, {
          value: Te(t.value, "@", "@" + Ee)
        })], r);
      case is:
        if (t.length)
          return Ol(t.props, function(s) {
            switch (kl(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return vn([Fn(t, {
                  props: [Te(s, /:(read-\w+)/, ":" + Eo + "$1")]
                })], r);
              case "::placeholder":
                return vn([Fn(t, {
                  props: [Te(s, /:(plac\w+)/, ":" + Ee + "input-$1")]
                }), Fn(t, {
                  props: [Te(s, /:(plac\w+)/, ":" + Eo + "$1")]
                }), Fn(t, {
                  props: [Te(s, /:(plac\w+)/, st + "input-$1")]
                })], r);
            }
            return "";
          });
    }
}, Gl = [ql], Xl = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(m) {
      var y = m.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var r = t.stylisPlugins || Gl, s = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var y = m.getAttribute("data-emotion").split(" "), S = 1; S < y.length; S++)
        s[y[S]] = !0;
      a.push(m);
    }
  );
  var l, c = [Vl, Kl];
  {
    var u, h = [_l, Dl(function(m) {
      u.insert(m);
    })], f = jl(c.concat(r, h)), g = function(y) {
      return vn(Nl(y), f);
    };
    l = function(y, S, w, C) {
      u = w, g(y ? y + "{" + S.styles + "}" : S.styles), C && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new $l({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
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
var ca = { exports: {} }, Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt = typeof Symbol == "function" && Symbol.for, cs = tt ? Symbol.for("react.element") : 60103, us = tt ? Symbol.for("react.portal") : 60106, jo = tt ? Symbol.for("react.fragment") : 60107, Do = tt ? Symbol.for("react.strict_mode") : 60108, Wo = tt ? Symbol.for("react.profiler") : 60114, Ho = tt ? Symbol.for("react.provider") : 60109, Uo = tt ? Symbol.for("react.context") : 60110, ds = tt ? Symbol.for("react.async_mode") : 60111, Vo = tt ? Symbol.for("react.concurrent_mode") : 60111, Ko = tt ? Symbol.for("react.forward_ref") : 60112, qo = tt ? Symbol.for("react.suspense") : 60113, Yl = tt ? Symbol.for("react.suspense_list") : 60120, Go = tt ? Symbol.for("react.memo") : 60115, Xo = tt ? Symbol.for("react.lazy") : 60116, Zl = tt ? Symbol.for("react.block") : 60121, Jl = tt ? Symbol.for("react.fundamental") : 60117, Ql = tt ? Symbol.for("react.responder") : 60118, ec = tt ? Symbol.for("react.scope") : 60119;
function bt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cs:
        switch (e = e.type, e) {
          case ds:
          case Vo:
          case jo:
          case Wo:
          case Do:
          case qo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Uo:
              case Ko:
              case Xo:
              case Go:
              case Ho:
                return e;
              default:
                return t;
            }
        }
      case us:
        return t;
    }
  }
}
function ua(e) {
  return bt(e) === Vo;
}
Ae.AsyncMode = ds;
Ae.ConcurrentMode = Vo;
Ae.ContextConsumer = Uo;
Ae.ContextProvider = Ho;
Ae.Element = cs;
Ae.ForwardRef = Ko;
Ae.Fragment = jo;
Ae.Lazy = Xo;
Ae.Memo = Go;
Ae.Portal = us;
Ae.Profiler = Wo;
Ae.StrictMode = Do;
Ae.Suspense = qo;
Ae.isAsyncMode = function(e) {
  return ua(e) || bt(e) === ds;
};
Ae.isConcurrentMode = ua;
Ae.isContextConsumer = function(e) {
  return bt(e) === Uo;
};
Ae.isContextProvider = function(e) {
  return bt(e) === Ho;
};
Ae.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cs;
};
Ae.isForwardRef = function(e) {
  return bt(e) === Ko;
};
Ae.isFragment = function(e) {
  return bt(e) === jo;
};
Ae.isLazy = function(e) {
  return bt(e) === Xo;
};
Ae.isMemo = function(e) {
  return bt(e) === Go;
};
Ae.isPortal = function(e) {
  return bt(e) === us;
};
Ae.isProfiler = function(e) {
  return bt(e) === Wo;
};
Ae.isStrictMode = function(e) {
  return bt(e) === Do;
};
Ae.isSuspense = function(e) {
  return bt(e) === qo;
};
Ae.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === jo || e === Vo || e === Wo || e === Do || e === qo || e === Yl || typeof e == "object" && e !== null && (e.$$typeof === Xo || e.$$typeof === Go || e.$$typeof === Ho || e.$$typeof === Uo || e.$$typeof === Ko || e.$$typeof === Jl || e.$$typeof === Ql || e.$$typeof === ec || e.$$typeof === Zl);
};
Ae.typeOf = bt;
ca.exports = Ae;
var tc = ca.exports, da = tc, nc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, oc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, pa = {};
pa[da.ForwardRef] = nc;
pa[da.Memo] = oc;
var rc = !0;
function fa(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : o += r + " ";
  }), o;
}
var ps = function(t, n, o) {
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
  rc === !1) && t.registered[r] === void 0 && (t.registered[r] = n.styles);
}, fs = function(t, n, o) {
  ps(t, n, o);
  var r = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + r : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function sc(e) {
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
var ic = {
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
}, ac = /[A-Z]|^ms/g, lc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ma = function(t) {
  return t.charCodeAt(1) === 45;
}, Ws = function(t) {
  return t != null && typeof t != "boolean";
}, Mr = /* @__PURE__ */ aa(function(e) {
  return ma(e) ? e : e.replace(ac, "-$&").toLowerCase();
}), Hs = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(lc, function(o, r, s) {
          return Ot = {
            name: r,
            styles: s,
            next: Ot
          }, r;
        });
  }
  return ic[t] !== 1 && !ma(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function eo(e, t, n) {
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
      return cc(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = Ot, i = n(e);
        return Ot = s, eo(e, t, i);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function cc(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++)
      o += eo(e, t, n[r]) + ";";
  else
    for (var s in n) {
      var i = n[s];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? o += s + "{" + t[i] + "}" : Ws(i) && (o += Mr(s) + ":" + Hs(s, i) + ";");
      else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var a = 0; a < i.length; a++)
          Ws(i[a]) && (o += Mr(s) + ":" + Hs(s, i[a]) + ";");
      else {
        var l = eo(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            o += Mr(s) + ":" + l + ";";
            break;
          }
          default:
            o += s + "{" + l + "}";
        }
      }
    }
  return o;
}
var Us = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ot, Yo = function(t, n, o) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var r = !0, s = "";
  Ot = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (r = !1, s += eo(o, n, i)) : s += i[0];
  for (var a = 1; a < t.length; a++)
    s += eo(o, n, t[a]), r && (s += i[a]);
  Us.lastIndex = 0;
  for (var l = "", c; (c = Us.exec(s)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = sc(s) + l;
  return {
    name: u,
    styles: s,
    next: Ot
  };
}, uc = function(t) {
  return t();
}, ha = Ur["useInsertionEffect"] ? Ur["useInsertionEffect"] : !1, ga = ha || uc, Vs = ha || d.useLayoutEffect, ba = {}.hasOwnProperty, va = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Xl({
    key: "css"
  }) : null
);
va.Provider;
var ms = function(t) {
  return /* @__PURE__ */ d.forwardRef(function(n, o) {
    var r = d.useContext(va);
    return t(n, r, o);
  });
}, so = /* @__PURE__ */ d.createContext({}), qr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Z0 = function(t, n) {
  var o = {};
  for (var r in n)
    ba.call(n, r) && (o[r] = n[r]);
  return o[qr] = t, o;
}, dc = function(t) {
  var n = t.cache, o = t.serialized, r = t.isStringTag;
  return ps(n, o, r), ga(function() {
    return fs(n, o, r);
  }), null;
}, pc = /* @__PURE__ */ ms(function(e, t, n) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var r = e[qr], s = [o], i = "";
  typeof e.className == "string" ? i = fa(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = Yo(s, void 0, d.useContext(so));
  i += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    ba.call(e, c) && c !== "css" && c !== qr && (l[c] = e[c]);
  return l.ref = n, l.className = i, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(dc, {
    cache: t,
    serialized: a,
    isStringTag: typeof r == "string"
  }), /* @__PURE__ */ d.createElement(r, l));
}), J0 = pc, fc = /* @__PURE__ */ ms(function(e, t) {
  var n = e.styles, o = Yo([n], void 0, d.useContext(so)), r = d.useRef();
  return Vs(function() {
    var s = t.key + "-global", i = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + s + " " + o.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", s), i.hydrate([l])), r.current = [i, a], function() {
      i.flush();
    };
  }, [t]), Vs(function() {
    var s = r.current, i = s[0], a = s[1];
    if (a) {
      s[1] = !1;
      return;
    }
    if (o.next !== void 0 && fs(t, o.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", o, i, !1);
  }, [t, o.name]), null;
});
function mc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Yo(t);
}
var hs = function() {
  var t = mc.apply(void 0, arguments), n = "animation-" + t.name;
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
const Cn = "$$material";
function V(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, s;
  for (s = 0; s < o.length; s++)
    r = o[s], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var hc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gc = /* @__PURE__ */ aa(
  function(e) {
    return hc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bc = gc, vc = function(t) {
  return t !== "theme";
}, Ks = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? bc : vc;
}, qs = function(t, n, o) {
  var r;
  if (n) {
    var s = n.shouldForwardProp;
    r = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof r != "function" && o && (r = t.__emotion_forwardProp), r;
}, yc = function(t) {
  var n = t.cache, o = t.serialized, r = t.isStringTag;
  return ps(n, o, r), ga(function() {
    return fs(n, o, r);
  }), null;
}, xc = function e(t, n) {
  var o = t.__emotion_real === t, r = o && t.__emotion_base || t, s, i;
  n !== void 0 && (s = n.label, i = n.target);
  var a = qs(t, n, o), l = a || Ks(r), c = !l("as");
  return function() {
    var u = arguments, h = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && h.push("label:" + s + ";"), u[0] == null || u[0].raw === void 0)
      h.push.apply(h, u);
    else {
      h.push(u[0][0]);
      for (var f = u.length, g = 1; g < f; g++)
        h.push(u[g], u[0][g]);
    }
    var b = ms(function(m, y, S) {
      var w = c && m.as || r, C = "", v = [], $ = m;
      if (m.theme == null) {
        $ = {};
        for (var R in m)
          $[R] = m[R];
        $.theme = d.useContext(so);
      }
      typeof m.className == "string" ? C = fa(y.registered, v, m.className) : m.className != null && (C = m.className + " ");
      var x = Yo(h.concat(v), y.registered, $);
      C += y.key + "-" + x.name, i !== void 0 && (C += " " + i);
      var E = c && a === void 0 ? Ks(w) : l, O = {};
      for (var k in m)
        c && k === "as" || // $FlowFixMe
        E(k) && (O[k] = m[k]);
      return O.className = C, O.ref = S, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(yc, {
        cache: y,
        serialized: x,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ d.createElement(w, O));
    });
    return b.displayName = s !== void 0 ? s : "Styled(" + (typeof r == "string" ? r : r.displayName || r.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = r, b.__emotion_styles = h, b.__emotion_forwardProp = a, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + i;
      }
    }), b.withComponent = function(m, y) {
      return e(m, p({}, n, y, {
        shouldForwardProp: qs(b, y, !0)
      })).apply(void 0, h);
    }, b;
  };
}, Cc = [
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
], Gr = xc.bind();
Cc.forEach(function(e) {
  Gr[e] = Gr(e);
});
function Sc(e) {
  return e == null || Object.keys(e).length === 0;
}
function $c(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (r) => t(Sc(r) ? n : r) : t;
  return /* @__PURE__ */ P.jsx(fc, {
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
function Rc(e, t) {
  return Gr(e, t);
}
const wc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ya(e) {
  if (!Ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ya(e[n]);
  }), t;
}
function ct(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? p({}, e) : e;
  return Ht(e) && Ht(t) && Object.keys(t).forEach((r) => {
    r !== "__proto__" && (Ht(t[r]) && r in e && Ht(e[r]) ? o[r] = ct(e[r], t[r], n) : n.clone ? o[r] = Ht(t[r]) ? ya(t[r]) : t[r] : o[r] = t[r]);
  }), o;
}
var Fe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs = Symbol.for("react.element"), bs = Symbol.for("react.portal"), Zo = Symbol.for("react.fragment"), Jo = Symbol.for("react.strict_mode"), Qo = Symbol.for("react.profiler"), er = Symbol.for("react.provider"), tr = Symbol.for("react.context"), Pc = Symbol.for("react.server_context"), nr = Symbol.for("react.forward_ref"), or = Symbol.for("react.suspense"), rr = Symbol.for("react.suspense_list"), sr = Symbol.for("react.memo"), ir = Symbol.for("react.lazy"), Ec = Symbol.for("react.offscreen"), xa;
xa = Symbol.for("react.module.reference");
function Rt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gs:
        switch (e = e.type, e) {
          case Zo:
          case Qo:
          case Jo:
          case or:
          case rr:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Pc:
              case tr:
              case nr:
              case ir:
              case sr:
              case er:
                return e;
              default:
                return t;
            }
        }
      case bs:
        return t;
    }
  }
}
Fe.ContextConsumer = tr;
Fe.ContextProvider = er;
Fe.Element = gs;
Fe.ForwardRef = nr;
Fe.Fragment = Zo;
Fe.Lazy = ir;
Fe.Memo = sr;
Fe.Portal = bs;
Fe.Profiler = Qo;
Fe.StrictMode = Jo;
Fe.Suspense = or;
Fe.SuspenseList = rr;
Fe.isAsyncMode = function() {
  return !1;
};
Fe.isConcurrentMode = function() {
  return !1;
};
Fe.isContextConsumer = function(e) {
  return Rt(e) === tr;
};
Fe.isContextProvider = function(e) {
  return Rt(e) === er;
};
Fe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gs;
};
Fe.isForwardRef = function(e) {
  return Rt(e) === nr;
};
Fe.isFragment = function(e) {
  return Rt(e) === Zo;
};
Fe.isLazy = function(e) {
  return Rt(e) === ir;
};
Fe.isMemo = function(e) {
  return Rt(e) === sr;
};
Fe.isPortal = function(e) {
  return Rt(e) === bs;
};
Fe.isProfiler = function(e) {
  return Rt(e) === Qo;
};
Fe.isStrictMode = function(e) {
  return Rt(e) === Jo;
};
Fe.isSuspense = function(e) {
  return Rt(e) === or;
};
Fe.isSuspenseList = function(e) {
  return Rt(e) === rr;
};
Fe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Zo || e === Qo || e === Jo || e === or || e === rr || e === Ec || typeof e == "object" && e !== null && (e.$$typeof === ir || e.$$typeof === sr || e.$$typeof === er || e.$$typeof === tr || e.$$typeof === nr || e.$$typeof === xa || e.getModuleId !== void 0);
};
Fe.typeOf = Rt;
function Z(e) {
  if (typeof e != "string")
    throw new Error(Lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gs(...e) {
  return e.reduce((t, n) => n == null ? t : function(...r) {
    t.apply(this, r), n.apply(this, r);
  }, () => {
  });
}
function ar(e, t = 166) {
  let n;
  function o(...r) {
    const s = () => {
      e.apply(this, r);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function Br(e, t) {
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
function Nt(e) {
  return Ze(e).defaultView || window;
}
function To(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Tc = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Bt = Tc;
let Xs = 0;
function kc(e) {
  const [t, n] = d.useState(e), o = e || t;
  return d.useEffect(() => {
    t == null && (Xs += 1, n(`mui-${Xs}`));
  }, [t]), o;
}
const Ys = Ur["useId".toString()];
function lr(e) {
  if (Ys !== void 0) {
    const t = Ys();
    return e ?? t;
  }
  return kc(e);
}
function tn({
  controlled: e,
  default: t,
  name: n,
  state: o = "value"
}) {
  const {
    current: r
  } = d.useRef(e !== void 0), [s, i] = d.useState(t), a = r ? e : s, l = d.useCallback((c) => {
    r || i(c);
  }, []);
  return [a, l];
}
function it(e) {
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
      To(n, t);
    });
  }, e);
}
const Zs = {};
function Oc(e, t) {
  const n = d.useRef(Zs);
  return n.current === Zs && (n.current = e(t)), n;
}
const Ic = [];
function Mc(e) {
  d.useEffect(e, Ic);
}
class io {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new io();
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
function gn() {
  const e = Oc(io.create).current;
  return Mc(e.disposeEffect), e;
}
let cr = !0, Xr = !1;
const Bc = new io(), Ac = {
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
function Fc(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Ac[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Lc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (cr = !0);
}
function Ar() {
  cr = !1;
}
function Nc() {
  this.visibilityState === "hidden" && Xr && (cr = !0);
}
function zc(e) {
  e.addEventListener("keydown", Lc, !0), e.addEventListener("mousedown", Ar, !0), e.addEventListener("pointerdown", Ar, !0), e.addEventListener("touchstart", Ar, !0), e.addEventListener("visibilitychange", Nc, !0);
}
function _c(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return cr || Fc(t);
}
function Ca() {
  const e = d.useCallback((r) => {
    r != null && zc(r.ownerDocument);
  }, []), t = d.useRef(!1);
  function n() {
    return t.current ? (Xr = !0, Bc.start(100, () => {
      Xr = !1;
    }), t.current = !1, !0) : !1;
  }
  function o(r) {
    return _c(r) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: o,
    onBlur: n,
    ref: e
  };
}
function Sa(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
let ln;
function $a() {
  if (ln)
    return ln;
  const e = document.createElement("div"), t = document.createElement("div");
  return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), ln = "reverse", e.scrollLeft > 0 ? ln = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (ln = "negative")), document.body.removeChild(e), ln;
}
function jc(e, t) {
  const n = e.scrollLeft;
  if (t !== "rtl")
    return n;
  switch ($a()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + n;
    case "reverse":
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
const Dc = (e) => {
  const t = d.useRef({});
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}, Wc = Dc;
function Hc(e) {
  return d.Children.toArray(e).filter((t) => /* @__PURE__ */ d.isValidElement(t));
}
function ur(e, t) {
  const n = p({}, t);
  return Object.keys(e).forEach((o) => {
    if (o.toString().match(/^(components|slots)$/))
      n[o] = p({}, e[o], n[o]);
    else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
      const r = e[o] || {}, s = t[o];
      n[o] = {}, !s || !Object.keys(s) ? n[o] = r : !r || !Object.keys(r) ? n[o] = s : (n[o] = p({}, s), Object.keys(r).forEach((i) => {
        n[o][i] = ur(r[i], s[i]);
      }));
    } else
      n[o] === void 0 && (n[o] = e[o]);
  }), n;
}
function ve(e, t, n = void 0) {
  const o = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (r) => {
      o[r] = e[r].reduce((s, i) => {
        if (i) {
          const a = t(i);
          a !== "" && s.push(a), n && n[i] && s.push(n[i]);
        }
        return s;
      }, []).join(" ");
    }
  ), o;
}
const Js = (e) => e, Uc = () => {
  let e = Js;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Js;
    }
  };
}, Vc = Uc(), Kc = Vc, Ra = {
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
function ye(e, t, n = "Mui") {
  const o = Ra[t];
  return o ? `${n}-${o}` : `${Kc.generate(e)}-${t}`;
}
function Ce(e, t, n = "Mui") {
  const o = {};
  return t.forEach((r) => {
    o[r] = ye(e, r, n);
  }), o;
}
function qc(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Gc = ["values", "unit", "step"], Xc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => p({}, n, {
    [o.key]: o.val
  }), {});
};
function Yc(e) {
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
  } = e, r = V(e, Gc), s = Xc(t), i = Object.keys(s);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - o / 100}${n})`;
  }
  function c(f, g) {
    const b = i.indexOf(g);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[i[b]] == "number" ? t[i[b]] : g) - o / 100}${n})`;
  }
  function u(f) {
    return i.indexOf(f) + 1 < i.length ? c(f, i[i.indexOf(f) + 1]) : a(f);
  }
  function h(f) {
    const g = i.indexOf(f);
    return g === 0 ? a(i[1]) : g === i.length - 1 ? l(i[g]) : c(f, i[i.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return p({
    keys: i,
    values: s,
    up: a,
    down: l,
    between: c,
    only: u,
    not: h,
    unit: n
  }, r);
}
const Zc = {
  borderRadius: 4
}, Jc = Zc;
function Vn(e, t) {
  return t ? ct(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const vs = {
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
}, Qs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${vs[e]}px)`
};
function Pt(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const s = o.breakpoints || Qs;
    return t.reduce((i, a, l) => (i[s.up(s.keys[l])] = n(t[l]), i), {});
  }
  if (typeof t == "object") {
    const s = o.breakpoints || Qs;
    return Object.keys(t).reduce((i, a) => {
      if (Object.keys(s.values || vs).indexOf(a) !== -1) {
        const l = s.up(a);
        i[l] = n(t[a], a);
      } else {
        const l = a;
        i[l] = t[l];
      }
      return i;
    }, {});
  }
  return n(t);
}
function wa(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((o, r) => {
    const s = e.up(r);
    return o[s] = {}, o;
  }, {})) || {};
}
function Pa(e, t) {
  return e.reduce((n, o) => {
    const r = n[o];
    return (!r || Object.keys(r).length === 0) && delete n[o], n;
  }, t);
}
function Qc(e, ...t) {
  const n = wa(e), o = [n, ...t].reduce((r, s) => ct(r, s), {});
  return Pa(Object.keys(n), o);
}
function eu(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, o = Object.keys(t);
  return Array.isArray(e) ? o.forEach((r, s) => {
    s < e.length && (n[r] = !0);
  }) : o.forEach((r) => {
    e[r] != null && (n[r] = !0);
  }), n;
}
function Fr({
  values: e,
  breakpoints: t,
  base: n
}) {
  const o = n || eu(e, t), r = Object.keys(o);
  if (r.length === 0)
    return e;
  let s;
  return r.reduce((i, a, l) => (Array.isArray(e) ? (i[a] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
}
function dr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((r, s) => r && r[s] ? r[s] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, r) => o && o[r] != null ? o[r] : null, e);
}
function ko(e, t, n, o = n) {
  let r;
  return typeof e == "function" ? r = e(n) : Array.isArray(e) ? r = e[n] || o : r = dr(e, n) || o, t && (r = t(r, o, e)), r;
}
function qe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: r
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], l = i.theme, c = dr(l, o) || {};
    return Pt(i, a, (h) => {
      let f = ko(c, r, h);
      return h === f && typeof h == "string" && (f = ko(c, r, `${t}${h === "default" ? "" : Z(h)}`, h)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return s.propTypes = {}, s.filterProps = [t], s;
}
function tu(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const nu = {
  m: "margin",
  p: "padding"
}, ou = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ei = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ru = tu((e) => {
  if (e.length > 2)
    if (ei[e])
      e = ei[e];
    else
      return [e];
  const [t, n] = e.split(""), o = nu[t], r = ou[n] || "";
  return Array.isArray(r) ? r.map((s) => o + s) : [o + r];
}), ys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], xs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ys, ...xs];
function ao(e, t, n, o) {
  var r;
  const s = (r = dr(e, t, !1)) != null ? r : n;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : s * i : Array.isArray(s) ? (i) => typeof i == "string" ? i : s[i] : typeof s == "function" ? s : () => {
  };
}
function Cs(e) {
  return ao(e, "spacing", 8);
}
function on(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), o = e(n);
  return t >= 0 ? o : typeof o == "number" ? -o : `-${o}`;
}
function su(e, t) {
  return (n) => e.reduce((o, r) => (o[r] = on(t, n), o), {});
}
function iu(e, t, n, o) {
  if (t.indexOf(n) === -1)
    return null;
  const r = ru(n), s = su(r, o), i = e[n];
  return Pt(e, i, s);
}
function Ea(e, t) {
  const n = Cs(e.theme);
  return Object.keys(e).map((o) => iu(e, t, o, n)).reduce(Vn, {});
}
function We(e) {
  return Ea(e, ys);
}
We.propTypes = {};
We.filterProps = ys;
function He(e) {
  return Ea(e, xs);
}
He.propTypes = {};
He.filterProps = xs;
function au(e = 8) {
  if (e.mui)
    return e;
  const t = Cs({
    spacing: e
  }), n = (...o) => (o.length === 0 ? [1] : o).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function pr(...e) {
  const t = e.reduce((o, r) => (r.filterProps.forEach((s) => {
    o[s] = r;
  }), o), {}), n = (o) => Object.keys(o).reduce((r, s) => t[s] ? Vn(r, t[s](o)) : r, {});
  return n.propTypes = {}, n.filterProps = e.reduce((o, r) => o.concat(r.filterProps), []), n;
}
function xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function wt(e, t) {
  return qe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const lu = wt("border", xt), cu = wt("borderTop", xt), uu = wt("borderRight", xt), du = wt("borderBottom", xt), pu = wt("borderLeft", xt), fu = wt("borderColor"), mu = wt("borderTopColor"), hu = wt("borderRightColor"), gu = wt("borderBottomColor"), bu = wt("borderLeftColor"), vu = wt("outline", xt), yu = wt("outlineColor"), fr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ao(e.theme, "shape.borderRadius", 4), n = (o) => ({
      borderRadius: on(t, o)
    });
    return Pt(e, e.borderRadius, n);
  }
  return null;
};
fr.propTypes = {};
fr.filterProps = ["borderRadius"];
pr(lu, cu, uu, du, pu, fu, mu, hu, gu, bu, fr, vu, yu);
const mr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ao(e.theme, "spacing", 8), n = (o) => ({
      gap: on(t, o)
    });
    return Pt(e, e.gap, n);
  }
  return null;
};
mr.propTypes = {};
mr.filterProps = ["gap"];
const hr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ao(e.theme, "spacing", 8), n = (o) => ({
      columnGap: on(t, o)
    });
    return Pt(e, e.columnGap, n);
  }
  return null;
};
hr.propTypes = {};
hr.filterProps = ["columnGap"];
const gr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ao(e.theme, "spacing", 8), n = (o) => ({
      rowGap: on(t, o)
    });
    return Pt(e, e.rowGap, n);
  }
  return null;
};
gr.propTypes = {};
gr.filterProps = ["rowGap"];
const xu = qe({
  prop: "gridColumn"
}), Cu = qe({
  prop: "gridRow"
}), Su = qe({
  prop: "gridAutoFlow"
}), $u = qe({
  prop: "gridAutoColumns"
}), Ru = qe({
  prop: "gridAutoRows"
}), wu = qe({
  prop: "gridTemplateColumns"
}), Pu = qe({
  prop: "gridTemplateRows"
}), Eu = qe({
  prop: "gridTemplateAreas"
}), Tu = qe({
  prop: "gridArea"
});
pr(mr, hr, gr, xu, Cu, Su, $u, Ru, wu, Pu, Eu, Tu);
function yn(e, t) {
  return t === "grey" ? t : e;
}
const ku = qe({
  prop: "color",
  themeKey: "palette",
  transform: yn
}), Ou = qe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: yn
}), Iu = qe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: yn
});
pr(ku, Ou, Iu);
function mt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Mu = qe({
  prop: "width",
  transform: mt
}), Ss = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, r;
      const s = ((o = e.theme) == null || (o = o.breakpoints) == null || (o = o.values) == null ? void 0 : o[n]) || vs[n];
      return s ? ((r = e.theme) == null || (r = r.breakpoints) == null ? void 0 : r.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: mt(n)
      };
    };
    return Pt(e, e.maxWidth, t);
  }
  return null;
};
Ss.filterProps = ["maxWidth"];
const Bu = qe({
  prop: "minWidth",
  transform: mt
}), Au = qe({
  prop: "height",
  transform: mt
}), Fu = qe({
  prop: "maxHeight",
  transform: mt
}), Lu = qe({
  prop: "minHeight",
  transform: mt
});
qe({
  prop: "size",
  cssProperty: "width",
  transform: mt
});
qe({
  prop: "size",
  cssProperty: "height",
  transform: mt
});
const Nu = qe({
  prop: "boxSizing"
});
pr(Mu, Ss, Bu, Au, Fu, Lu, Nu);
const zu = {
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
  outline: {
    themeKey: "borders",
    transform: xt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: fr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: yn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: yn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: yn
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
    style: We
  },
  mt: {
    style: We
  },
  mr: {
    style: We
  },
  mb: {
    style: We
  },
  ml: {
    style: We
  },
  mx: {
    style: We
  },
  my: {
    style: We
  },
  margin: {
    style: We
  },
  marginTop: {
    style: We
  },
  marginRight: {
    style: We
  },
  marginBottom: {
    style: We
  },
  marginLeft: {
    style: We
  },
  marginX: {
    style: We
  },
  marginY: {
    style: We
  },
  marginInline: {
    style: We
  },
  marginInlineStart: {
    style: We
  },
  marginInlineEnd: {
    style: We
  },
  marginBlock: {
    style: We
  },
  marginBlockStart: {
    style: We
  },
  marginBlockEnd: {
    style: We
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
    style: mr
  },
  rowGap: {
    style: gr
  },
  columnGap: {
    style: hr
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
    transform: mt
  },
  maxWidth: {
    style: Ss
  },
  minWidth: {
    transform: mt
  },
  height: {
    transform: mt
  },
  maxHeight: {
    transform: mt
  },
  minHeight: {
    transform: mt
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
}, br = zu;
function _u(...e) {
  const t = e.reduce((o, r) => o.concat(Object.keys(r)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function ju(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Du() {
  function e(n, o, r, s) {
    const i = {
      [n]: o,
      theme: r
    }, a = s[n];
    if (!a)
      return {
        [n]: o
      };
    const {
      cssProperty: l = n,
      themeKey: c,
      transform: u,
      style: h
    } = a;
    if (o == null)
      return null;
    if (c === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const f = dr(r, c) || {};
    return h ? h(i) : Pt(i, o, (b) => {
      let m = ko(f, u, b);
      return b === m && typeof b == "string" && (m = ko(f, u, `${n}${b === "default" ? "" : Z(b)}`, b)), l === !1 ? m : {
        [l]: m
      };
    });
  }
  function t(n) {
    var o;
    const {
      sx: r,
      theme: s = {}
    } = n || {};
    if (!r)
      return null;
    const i = (o = s.unstable_sxConfig) != null ? o : br;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(s);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = wa(s.breakpoints), h = Object.keys(u);
      let f = u;
      return Object.keys(c).forEach((g) => {
        const b = ju(c[g], s);
        if (b != null)
          if (typeof b == "object")
            if (i[g])
              f = Vn(f, e(g, b, s, i));
            else {
              const m = Pt({
                theme: s
              }, b, (y) => ({
                [g]: y
              }));
              _u(m, b) ? f[g] = t({
                sx: b,
                theme: s
              }) : f = Vn(f, m);
            }
          else
            f = Vn(f, e(g, b, s, i));
      }), Pa(h, f);
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const Ta = Du();
Ta.filterProps = ["sx"];
const $s = Ta;
function Wu(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Hu = ["breakpoints", "palette", "spacing", "shape"];
function vr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: r,
    shape: s = {}
  } = e, i = V(e, Hu), a = Yc(n), l = au(r);
  let c = ct({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: p({
      mode: "light"
    }, o),
    spacing: l,
    shape: p({}, Jc, s)
  }, i);
  return c.applyStyles = Wu, c = t.reduce((u, h) => ct(u, h), c), c.unstable_sxConfig = p({}, br, i == null ? void 0 : i.unstable_sxConfig), c.unstable_sx = function(h) {
    return $s({
      sx: h,
      theme: this
    });
  }, c;
}
function Uu(e) {
  return Object.keys(e).length === 0;
}
function Rs(e = null) {
  const t = d.useContext(so);
  return !t || Uu(t) ? e : t;
}
const Vu = vr();
function ws(e = Vu) {
  return Rs(e);
}
function Ku({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = ws(n), r = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ P.jsx($c, {
    styles: r
  });
}
const qu = ["sx"], Gu = (e) => {
  var t, n;
  const o = {
    systemProps: {},
    otherProps: {}
  }, r = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : br;
  return Object.keys(e).forEach((s) => {
    r[s] ? o.systemProps[s] = e[s] : o.otherProps[s] = e[s];
  }), o;
};
function ka(e) {
  const {
    sx: t
  } = e, n = V(e, qu), {
    systemProps: o,
    otherProps: r
  } = Gu(n);
  let s;
  return Array.isArray(t) ? s = [o, ...t] : typeof t == "function" ? s = (...i) => {
    const a = t(...i);
    return Ht(a) ? p({}, o, a) : o;
  } : s = p({}, o, t), p({}, r, {
    sx: s
  });
}
function Oa(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = Oa(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function Y() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = Oa(e)) && (o && (o += " "), o += t);
  return o;
}
const Xu = ["ownerState"], Yu = ["variants"], Zu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ju(e) {
  return Object.keys(e).length === 0;
}
function Qu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Kn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ed = vr(), td = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ho({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Ju(t) ? e : t[n] || t;
}
function nd(e) {
  return e ? (t, n) => n[e] : null;
}
function wo(e, t) {
  let {
    ownerState: n
  } = t, o = V(t, Xu);
  const r = typeof e == "function" ? e(p({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(r))
    return r.flatMap((s) => wo(s, p({
      ownerState: n
    }, o)));
  if (r && typeof r == "object" && Array.isArray(r.variants)) {
    const {
      variants: s = []
    } = r;
    let a = V(r, Yu);
    return s.forEach((l) => {
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
function Ia(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = ed,
    rootShouldForwardProp: o = Kn,
    slotShouldForwardProp: r = Kn
  } = e, s = (i) => $s(p({}, i, {
    theme: ho(p({}, i, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (i, a = {}) => {
    wc(i, ($) => $.filter((R) => !(R != null && R.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = nd(td(c))
    } = a, g = V(a, Zu), b = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), m = h || !1;
    let y, S = Kn;
    c === "Root" || c === "root" ? S = o : c ? S = r : Qu(i) && (S = void 0);
    const w = Rc(i, p({
      shouldForwardProp: S,
      label: y
    }, g)), C = ($) => typeof $ == "function" && $.__emotion_real !== $ || Ht($) ? (R) => wo($, p({}, R, {
      theme: ho({
        theme: R.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : $, v = ($, ...R) => {
      let x = C($);
      const E = R ? R.map(C) : [];
      l && f && E.push((N) => {
        const A = ho(p({}, N, {
          defaultTheme: n,
          themeId: t
        }));
        if (!A.components || !A.components[l] || !A.components[l].styleOverrides)
          return null;
        const F = A.components[l].styleOverrides, z = {};
        return Object.entries(F).forEach(([B, M]) => {
          z[B] = wo(M, p({}, N, {
            theme: A
          }));
        }), f(N, z);
      }), l && !b && E.push((N) => {
        var A;
        const F = ho(p({}, N, {
          defaultTheme: n,
          themeId: t
        })), z = F == null || (A = F.components) == null || (A = A[l]) == null ? void 0 : A.variants;
        return wo({
          variants: z
        }, p({}, N, {
          theme: F
        }));
      }), m || E.push(s);
      const O = E.length - R.length;
      if (Array.isArray($) && O > 0) {
        const N = new Array(O).fill("");
        x = [...$, ...N], x.raw = [...$.raw, ...N];
      }
      const k = w(x, ...E);
      return i.muiName && (k.muiName = i.muiName), k;
    };
    return w.withConfig && (v.withConfig = w.withConfig), v;
  };
}
const od = Ia(), rd = od;
function sd(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : ur(t.components[n].defaultProps, o);
}
function Ma({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let r = ws(n);
  return o && (r = r[o] || r), sd({
    theme: r,
    name: t,
    props: e
  });
}
function Ps(e, t = 0, n = 1) {
  return qc(e, t, n);
}
function id(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, r) => r < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function rn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return rn(id(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Lt(9, e));
  let o = e.substring(t + 1, e.length - 1), r;
  if (n === "color") {
    if (o = o.split(" "), r = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(r) === -1)
      throw new Error(Lt(10, r));
  } else
    o = o.split(",");
  return o = o.map((s) => parseFloat(s)), {
    type: n,
    values: o,
    colorSpace: r
  };
}
function yr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.indexOf("rgb") !== -1 ? o = o.map((r, s) => s < 3 ? parseInt(r, 10) : r) : t.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.indexOf("color") !== -1 ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function ad(e) {
  e = rn(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, r = t[2] / 100, s = o * Math.min(r, 1 - r), i = (c, u = (c + n / 30) % 12) => r - s * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), yr({
    type: a,
    values: l
  });
}
function ti(e) {
  e = rn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? rn(ad(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ld(e, t) {
  const n = ti(e), o = ti(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function at(e, t) {
  return e = rn(e), t = Ps(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, yr(e);
}
function Yr(e, t) {
  if (e = rn(e), t = Ps(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return yr(e);
}
function Zr(e, t) {
  if (e = rn(e), t = Ps(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return yr(e);
}
const cd = /* @__PURE__ */ d.createContext(null), Ba = cd;
function Aa() {
  return d.useContext(Ba);
}
const ud = typeof Symbol == "function" && Symbol.for, dd = ud ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function pd(e, t) {
  return typeof t == "function" ? t(e) : p({}, e, t);
}
function fd(e) {
  const {
    children: t,
    theme: n
  } = e, o = Aa(), r = d.useMemo(() => {
    const s = o === null ? n : pd(o, n);
    return s != null && (s[dd] = o !== null), s;
  }, [n, o]);
  return /* @__PURE__ */ P.jsx(Ba.Provider, {
    value: r,
    children: t
  });
}
const ni = {};
function oi(e, t, n, o = !1) {
  return d.useMemo(() => {
    const r = e && t[e] || t;
    if (typeof n == "function") {
      const s = n(r), i = e ? p({}, t, {
        [e]: s
      }) : s;
      return o ? () => i : i;
    }
    return e ? p({}, t, {
      [e]: n
    }) : p({}, t, n);
  }, [e, t, n, o]);
}
function md(e) {
  const {
    children: t,
    theme: n,
    themeId: o
  } = e, r = Rs(ni), s = Aa() || ni, i = oi(o, r, n), a = oi(o, s, n, !0);
  return /* @__PURE__ */ P.jsx(fd, {
    theme: a,
    children: /* @__PURE__ */ P.jsx(so.Provider, {
      value: i,
      children: t
    })
  });
}
const hd = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], gd = vr(), bd = rd("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function vd(e) {
  return Ma({
    props: e,
    name: "MuiStack",
    defaultTheme: gd
  });
}
function yd(e, t) {
  const n = d.Children.toArray(e).filter(Boolean);
  return n.reduce((o, r, s) => (o.push(r), s < n.length - 1 && o.push(/* @__PURE__ */ d.cloneElement(t, {
    key: `separator-${s}`
  })), o), []);
}
const xd = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Cd = ({
  ownerState: e,
  theme: t
}) => {
  let n = p({
    display: "flex",
    flexDirection: "column"
  }, Pt({
    theme: t
  }, Fr({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (o) => ({
    flexDirection: o
  })));
  if (e.spacing) {
    const o = Cs(t), r = Object.keys(t.breakpoints.values).reduce((l, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (l[c] = !0), l), {}), s = Fr({
      values: e.direction,
      base: r
    }), i = Fr({
      values: e.spacing,
      base: r
    });
    typeof s == "object" && Object.keys(s).forEach((l, c, u) => {
      if (!s[l]) {
        const f = c > 0 ? s[u[c - 1]] : "column";
        s[l] = f;
      }
    }), n = ct(n, Pt({
      theme: t
    }, i, (l, c) => e.useFlexGap ? {
      gap: on(o, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${xd(c ? s[c] : e.direction)}`]: on(o, l)
      }
    }));
  }
  return n = Qc(t.breakpoints, n), n;
};
function Sd(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = bd,
    useThemeProps: n = vd,
    componentName: o = "MuiStack"
  } = e, r = () => ve({
    root: ["root"]
  }, (l) => ye(o, l), {}), s = t(Cd);
  return /* @__PURE__ */ d.forwardRef(function(l, c) {
    const u = n(l), h = ka(u), {
      component: f = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: m,
      children: y,
      className: S,
      useFlexGap: w = !1
    } = h, C = V(h, hd), v = {
      direction: g,
      spacing: b,
      useFlexGap: w
    }, $ = r();
    return /* @__PURE__ */ P.jsx(s, p({
      as: f,
      ownerState: v,
      ref: c,
      className: Y($.root, S)
    }, C, {
      children: m ? yd(y, m) : y
    }));
  });
}
function $d(e, t) {
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
const Rd = {
  black: "#000",
  white: "#fff"
}, to = Rd, wd = {
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
}, Pd = wd, Ed = {
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
}, cn = Ed, Td = {
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
}, un = Td, kd = {
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
}, Ln = kd, Od = {
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
}, dn = Od, Id = {
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
}, pn = Id, Md = {
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
}, fn = Md, Bd = ["mode", "contrastThreshold", "tonalOffset"], ri = {
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
    paper: to.white,
    default: to.white
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
    primary: to.white,
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
    active: to.white,
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
function si(e, t, n, o) {
  const r = o.light || o, s = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Zr(e.main, r) : t === "dark" && (e.dark = Yr(e.main, s)));
}
function Ad(e = "light") {
  return e === "dark" ? {
    main: dn[200],
    light: dn[50],
    dark: dn[400]
  } : {
    main: dn[700],
    light: dn[400],
    dark: dn[800]
  };
}
function Fd(e = "light") {
  return e === "dark" ? {
    main: cn[200],
    light: cn[50],
    dark: cn[400]
  } : {
    main: cn[500],
    light: cn[300],
    dark: cn[700]
  };
}
function Ld(e = "light") {
  return e === "dark" ? {
    main: un[500],
    light: un[300],
    dark: un[700]
  } : {
    main: un[700],
    light: un[400],
    dark: un[800]
  };
}
function Nd(e = "light") {
  return e === "dark" ? {
    main: pn[400],
    light: pn[300],
    dark: pn[700]
  } : {
    main: pn[700],
    light: pn[500],
    dark: pn[900]
  };
}
function zd(e = "light") {
  return e === "dark" ? {
    main: fn[400],
    light: fn[300],
    dark: fn[700]
  } : {
    main: fn[800],
    light: fn[500],
    dark: fn[900]
  };
}
function _d(e = "light") {
  return e === "dark" ? {
    main: Ln[400],
    light: Ln[300],
    dark: Ln[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ln[500],
    dark: Ln[900]
  };
}
function jd(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2
  } = e, r = V(e, Bd), s = e.primary || Ad(t), i = e.secondary || Fd(t), a = e.error || Ld(t), l = e.info || Nd(t), c = e.success || zd(t), u = e.warning || _d(t);
  function h(m) {
    return ld(m, Lr.text.primary) >= n ? Lr.text.primary : ri.text.primary;
  }
  const f = ({
    color: m,
    name: y,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: C = 700
  }) => {
    if (m = p({}, m), !m.main && m[S] && (m.main = m[S]), !m.hasOwnProperty("main"))
      throw new Error(Lt(11, y ? ` (${y})` : "", S));
    if (typeof m.main != "string")
      throw new Error(Lt(12, y ? ` (${y})` : "", JSON.stringify(m.main)));
    return si(m, "light", w, o), si(m, "dark", C, o), m.contrastText || (m.contrastText = h(m.main)), m;
  }, g = {
    dark: Lr,
    light: ri
  };
  return ct(p({
    // A collection of common colors.
    common: p({}, to),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: i,
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
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: Pd,
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
    tonalOffset: o
  }, g[t]), r);
}
const Dd = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Wd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ii = {
  textTransform: "uppercase"
}, ai = '"Roboto", "Helvetica", "Arial", sans-serif';
function Hd(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: o = ai,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: h
  } = n, f = V(n, Dd), g = r / 14, b = h || ((S) => `${S / c * g}rem`), m = (S, w, C, v, $) => p({
    fontFamily: o,
    fontWeight: S,
    fontSize: b(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, o === ai ? {
    letterSpacing: `${Wd(v / w)}em`
  } : {}, $, u), y = {
    h1: m(s, 96, 1.167, -1.5),
    h2: m(s, 60, 1.2, -0.5),
    h3: m(i, 48, 1.167, 0),
    h4: m(i, 34, 1.235, 0.25),
    h5: m(i, 24, 1.334, 0),
    h6: m(a, 20, 1.6, 0.15),
    subtitle1: m(i, 16, 1.75, 0.15),
    subtitle2: m(a, 14, 1.57, 0.1),
    body1: m(i, 16, 1.5, 0.15),
    body2: m(i, 14, 1.43, 0.15),
    button: m(a, 14, 1.75, 0.4, ii),
    caption: m(i, 12, 1.66, 0.4),
    overline: m(i, 12, 2.66, 1, ii),
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
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: l
  }, y), f, {
    clone: !1
    // No need to clone deep
  });
}
const Ud = 0.2, Vd = 0.14, Kd = 0.12;
function ze(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ud})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Kd})`].join(",");
}
const qd = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Gd = qd, Xd = ["duration", "easing", "delay"], Yd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Zd = {
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
function li(e) {
  return `${Math.round(e)}ms`;
}
function Jd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Qd(e) {
  const t = p({}, Yd, e.easing), n = p({}, Zd, e.duration);
  return p({
    getAutoHeightDuration: Jd,
    create: (r = ["all"], s = {}) => {
      const {
        duration: i = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = s;
      return V(s, Xd), (Array.isArray(r) ? r : [r]).map((c) => `${c} ${typeof i == "string" ? i : li(i)} ${a} ${typeof l == "string" ? l : li(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const ep = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, tp = ep, np = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function op(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: o = {},
    transitions: r = {},
    typography: s = {}
  } = e, i = V(e, np);
  if (e.vars)
    throw new Error(Lt(18));
  const a = jd(o), l = vr(e);
  let c = ct(l, {
    mixins: $d(l.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Gd.slice(),
    typography: Hd(a, s),
    transitions: Qd(r),
    zIndex: p({}, tp)
  });
  return c = ct(c, i), c = t.reduce((u, h) => ct(u, h), c), c.unstable_sxConfig = p({}, br, i == null ? void 0 : i.unstable_sxConfig), c.unstable_sx = function(h) {
    return $s({
      sx: h,
      theme: this
    });
  }, c;
}
const rp = op(), xr = rp;
function Tn() {
  const e = ws(xr);
  return e[Cn] || e;
}
function Se({
  props: e,
  name: t
}) {
  return Ma({
    props: e,
    name: t,
    defaultTheme: xr,
    themeId: Cn
  });
}
const vt = (e) => Kn(e) && e !== "classes", sp = Kn, ip = Ia({
  themeId: Cn,
  defaultTheme: xr,
  rootShouldForwardProp: vt
}), H = ip, ap = ["theme"];
function Q0(e) {
  let {
    theme: t
  } = e, n = V(e, ap);
  const o = t[Cn];
  return /* @__PURE__ */ P.jsx(md, p({}, n, {
    themeId: o ? Cn : void 0,
    theme: o || t
  }));
}
const lp = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ci = lp;
function cp(e) {
  return ye("MuiSvgIcon", e);
}
Ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const up = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], dp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, r = {
    root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`]
  };
  return ve(r, cp, o);
}, pp = H("svg", {
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
  var n, o, r, s, i, a, l, c, u, h, f, g, b;
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
      small: ((s = e.typography) == null || (i = s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem",
      medium: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem",
      large: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? h : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[t.color]
  };
}), Fa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: r,
    className: s,
    color: i = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: c,
    inheritViewBox: u = !1,
    titleAccess: h,
    viewBox: f = "0 0 24 24"
  } = o, g = V(o, up), b = /* @__PURE__ */ d.isValidElement(r) && r.type === "svg", m = p({}, o, {
    color: i,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: f,
    hasSvgAsChild: b
  }), y = {};
  u || (y.viewBox = f);
  const S = dp(m);
  return /* @__PURE__ */ P.jsxs(pp, p({
    as: a,
    className: Y(S.root, s),
    focusable: "false",
    color: c,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n
  }, y, g, b && r.props, {
    ownerState: m,
    children: [b ? r.props.children : r, h ? /* @__PURE__ */ P.jsx("title", {
      children: h
    }) : null]
  }));
});
Fa.muiName = "SvgIcon";
const ui = Fa;
function Tt(e, t) {
  function n(o, r) {
    return /* @__PURE__ */ P.jsx(ui, p({
      "data-testid": `${t}Icon`,
      ref: r
    }, o, {
      children: e
    }));
  }
  return n.muiName = ui.muiName, /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(n));
}
function Jr(e, t) {
  return Jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Jr(e, t);
}
function La(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jr(e, t);
}
const di = {
  disabled: !1
}, Oo = Ft.createContext(null);
var fp = function(t) {
  return t.scrollTop;
}, Wn = "unmounted", Jt = "exited", Qt = "entering", hn = "entered", Qr = "exiting", _t = /* @__PURE__ */ function(e) {
  La(t, e);
  function t(o, r) {
    var s;
    s = e.call(this, o, r) || this;
    var i = r, a = i && !i.isMounting ? o.enter : o.appear, l;
    return s.appearStatus = null, o.in ? a ? (l = Jt, s.appearStatus = Qt) : l = hn : o.unmountOnExit || o.mountOnEnter ? l = Wn : l = Jt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(r, s) {
    var i = r.in;
    return i && s.status === Wn ? {
      status: Jt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(r) {
    var s = null;
    if (r !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== Qt && i !== hn && (s = Qt) : (i === Qt || i === hn) && (s = Qr);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var r = this.props.timeout, s, i, a;
    return s = i = a = r, r != null && typeof r != "number" && (s = r.exit, i = r.enter, a = r.appear !== void 0 ? r.appear : i), {
      exit: s,
      enter: i,
      appear: a
    };
  }, n.updateStatus = function(r, s) {
    if (r === void 0 && (r = !1), s !== null)
      if (this.cancelNextCallback(), s === Qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : fo.findDOMNode(this);
          i && fp(i);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Jt && this.setState({
        status: Wn
      });
  }, n.performEnter = function(r) {
    var s = this, i = this.props.enter, a = this.context ? this.context.isMounting : r, l = this.props.nodeRef ? [a] : [fo.findDOMNode(this), a], c = l[0], u = l[1], h = this.getTimeouts(), f = a ? h.appear : h.enter;
    if (!r && !i || di.disabled) {
      this.safeSetState({
        status: hn
      }, function() {
        s.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Qt
    }, function() {
      s.props.onEntering(c, u), s.onTransitionEnd(f, function() {
        s.safeSetState({
          status: hn
        }, function() {
          s.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var r = this, s = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : fo.findDOMNode(this);
    if (!s || di.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        r.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Qr
    }, function() {
      r.props.onExiting(a), r.onTransitionEnd(i.exit, function() {
        r.safeSetState({
          status: Jt
        }, function() {
          r.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(r, s) {
    s = this.setNextCallback(s), this.setState(r, s);
  }, n.setNextCallback = function(r) {
    var s = this, i = !0;
    return this.nextCallback = function(a) {
      i && (i = !1, s.nextCallback = null, r(a));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(r, s) {
    this.setNextCallback(s);
    var i = this.props.nodeRef ? this.props.nodeRef.current : fo.findDOMNode(this), a = r == null && !this.props.addEndListener;
    if (!i || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], c = l[0], u = l[1];
      this.props.addEndListener(c, u);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, n.render = function() {
    var r = this.state.status;
    if (r === Wn)
      return null;
    var s = this.props, i = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var a = V(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ft.createElement(Oo.Provider, {
        value: null
      }, typeof i == "function" ? i(r, a) : Ft.cloneElement(Ft.Children.only(i), a))
    );
  }, t;
}(Ft.Component);
_t.contextType = Oo;
_t.propTypes = {};
function mn() {
}
_t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: mn,
  onEntering: mn,
  onEntered: mn,
  onExit: mn,
  onExiting: mn,
  onExited: mn
};
_t.UNMOUNTED = Wn;
_t.EXITED = Jt;
_t.ENTERING = Qt;
_t.ENTERED = hn;
_t.EXITING = Qr;
const Na = _t;
function mp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Es(e, t) {
  var n = function(s) {
    return t && d.isValidElement(s) ? t(s) : s;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && d.Children.map(e, function(r) {
    return r;
  }).forEach(function(r) {
    o[r.key] = n(r);
  }), o;
}
function hp(e, t) {
  e = e || {}, t = t || {};
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var o = /* @__PURE__ */ Object.create(null), r = [];
  for (var s in e)
    s in t ? r.length && (o[s] = r, r = []) : r.push(s);
  var i, a = {};
  for (var l in t) {
    if (o[l])
      for (i = 0; i < o[l].length; i++) {
        var c = o[l][i];
        a[o[l][i]] = n(c);
      }
    a[l] = n(l);
  }
  for (i = 0; i < r.length; i++)
    a[r[i]] = n(r[i]);
  return a;
}
function en(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function gp(e, t) {
  return Es(e.children, function(n) {
    return d.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: en(n, "appear", e),
      enter: en(n, "enter", e),
      exit: en(n, "exit", e)
    });
  });
}
function bp(e, t, n) {
  var o = Es(e.children), r = hp(t, o);
  return Object.keys(r).forEach(function(s) {
    var i = r[s];
    if (d.isValidElement(i)) {
      var a = s in t, l = s in o, c = t[s], u = d.isValidElement(c) && !c.props.in;
      l && (!a || u) ? r[s] = d.cloneElement(i, {
        onExited: n.bind(null, i),
        in: !0,
        exit: en(i, "exit", e),
        enter: en(i, "enter", e)
      }) : !l && a && !u ? r[s] = d.cloneElement(i, {
        in: !1
      }) : l && a && d.isValidElement(c) && (r[s] = d.cloneElement(i, {
        onExited: n.bind(null, i),
        in: c.props.in,
        exit: en(i, "exit", e),
        enter: en(i, "enter", e)
      }));
    }
  }), r;
}
var vp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, yp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ts = /* @__PURE__ */ function(e) {
  La(t, e);
  function t(o, r) {
    var s;
    s = e.call(this, o, r) || this;
    var i = s.handleExited.bind(mp(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
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
  }, t.getDerivedStateFromProps = function(r, s) {
    var i = s.children, a = s.handleExited, l = s.firstRender;
    return {
      children: l ? gp(r, a) : bp(r, i, a),
      firstRender: !1
    };
  }, n.handleExited = function(r, s) {
    var i = Es(this.props.children);
    r.key in i || (r.props.onExited && r.props.onExited(s), this.mounted && this.setState(function(a) {
      var l = p({}, a.children);
      return delete l[r.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var r = this.props, s = r.component, i = r.childFactory, a = V(r, ["component", "childFactory"]), l = this.state.contextValue, c = vp(this.state.children).map(i);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ Ft.createElement(Oo.Provider, {
      value: l
    }, c) : /* @__PURE__ */ Ft.createElement(Oo.Provider, {
      value: l
    }, /* @__PURE__ */ Ft.createElement(s, a, c));
  }, t;
}(Ft.Component);
Ts.propTypes = {};
Ts.defaultProps = yp;
const xp = Ts, za = (e) => e.scrollTop;
function Io(e, t) {
  var n, o;
  const {
    timeout: r,
    easing: s,
    style: i = {}
  } = e;
  return {
    duration: (n = i.transitionDuration) != null ? n : typeof r == "number" ? r : r[t.mode] || 0,
    easing: (o = i.transitionTimingFunction) != null ? o : typeof s == "object" ? s[t.mode] : s,
    delay: i.transitionDelay
  };
}
function Cp(e) {
  return ye("MuiPaper", e);
}
Ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Sp = ["className", "component", "elevation", "square", "variant"], $p = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: r
  } = e, s = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return ve(s, Cp, r);
}, Rp = H("div", {
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
    backgroundImage: `linear-gradient(${at("#fff", ci(t.elevation))}, ${at("#fff", ci(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), wp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiPaper"
  }), {
    className: r,
    component: s = "div",
    elevation: i = 1,
    square: a = !1,
    variant: l = "elevation"
  } = o, c = V(o, Sp), u = p({}, o, {
    component: s,
    elevation: i,
    square: a,
    variant: l
  }), h = $p(u);
  return /* @__PURE__ */ P.jsx(Rp, p({
    as: s,
    ownerState: u,
    className: Y(h.root, r),
    ref: n
  }, c));
}), _a = wp;
function Mo(e) {
  return typeof e == "string";
}
function Hn(e, t, n) {
  return e === void 0 || Mo(e) ? t : p({}, t, {
    ownerState: p({}, t.ownerState, n)
  });
}
const Pp = {
  disableDefaultClasses: !1
}, Ep = /* @__PURE__ */ d.createContext(Pp);
function Tp(e) {
  const {
    disableDefaultClasses: t
  } = d.useContext(Ep);
  return (n) => t ? "" : e(n);
}
function qn(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function kp(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function pi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Op(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: r,
    className: s
  } = e;
  if (!t) {
    const g = Y(n == null ? void 0 : n.className, s, r == null ? void 0 : r.className, o == null ? void 0 : o.className), b = p({}, n == null ? void 0 : n.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style), m = p({}, n, r, o);
    return g.length > 0 && (m.className = g), Object.keys(b).length > 0 && (m.style = b), {
      props: m,
      internalRef: void 0
    };
  }
  const i = qn(p({}, r, o)), a = pi(o), l = pi(r), c = t(i), u = Y(c == null ? void 0 : c.className, n == null ? void 0 : n.className, s, r == null ? void 0 : r.className, o == null ? void 0 : o.className), h = p({}, c == null ? void 0 : c.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style), f = p({}, c, n, l, a);
  return u.length > 0 && (f.className = u), Object.keys(h).length > 0 && (f.style = h), {
    props: f,
    internalRef: c.ref
  };
}
const Ip = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Et(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: s = !1
  } = e, i = V(e, Ip), a = s ? {} : kp(o, r), {
    props: l,
    internalRef: c
  } = Op(p({}, i, {
    externalSlotProps: a
  })), u = Je(c, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Hn(n, p({}, l, {
    ref: u
  }), r);
}
function Mp(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: r,
    rippleY: s,
    rippleSize: i,
    in: a,
    onExited: l,
    timeout: c
  } = e, [u, h] = d.useState(!1), f = Y(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), g = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + r
  }, b = Y(n.child, u && n.childLeaving, o && n.childPulsate);
  return !a && !u && h(!0), d.useEffect(() => {
    if (!a && l != null) {
      const m = setTimeout(l, c);
      return () => {
        clearTimeout(m);
      };
    }
  }, [l, a, c]), /* @__PURE__ */ P.jsx("span", {
    className: f,
    style: g,
    children: /* @__PURE__ */ P.jsx("span", {
      className: b
    })
  });
}
const Bp = Ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), yt = Bp, Ap = ["center", "classes", "className"];
let Cr = (e) => e, fi, mi, hi, gi;
const es = 550, Fp = 80, Lp = hs(fi || (fi = Cr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Np = hs(mi || (mi = Cr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), zp = hs(hi || (hi = Cr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), _p = H("span", {
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
}), jp = H(Mp, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(gi || (gi = Cr`
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
`), yt.rippleVisible, Lp, es, ({
  theme: e
}) => e.transitions.easing.easeInOut, yt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, yt.child, yt.childLeaving, Np, es, ({
  theme: e
}) => e.transitions.easing.easeInOut, yt.childPulsate, zp, ({
  theme: e
}) => e.transitions.easing.easeInOut), Dp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: r = !1,
    classes: s = {},
    className: i
  } = o, a = V(o, Ap), [l, c] = d.useState([]), u = d.useRef(0), h = d.useRef(null);
  d.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const f = d.useRef(!1), g = gn(), b = d.useRef(null), m = d.useRef(null), y = d.useCallback((v) => {
    const {
      pulsate: $,
      rippleX: R,
      rippleY: x,
      rippleSize: E,
      cb: O
    } = v;
    c((k) => [...k, /* @__PURE__ */ P.jsx(jp, {
      classes: {
        ripple: Y(s.ripple, yt.ripple),
        rippleVisible: Y(s.rippleVisible, yt.rippleVisible),
        ripplePulsate: Y(s.ripplePulsate, yt.ripplePulsate),
        child: Y(s.child, yt.child),
        childLeaving: Y(s.childLeaving, yt.childLeaving),
        childPulsate: Y(s.childPulsate, yt.childPulsate)
      },
      timeout: es,
      pulsate: $,
      rippleX: R,
      rippleY: x,
      rippleSize: E
    }, u.current)]), u.current += 1, h.current = O;
  }, [s]), S = d.useCallback((v = {}, $ = {}, R = () => {
  }) => {
    const {
      pulsate: x = !1,
      center: E = r || $.pulsate,
      fakeElement: O = !1
      // For test purposes
    } = $;
    if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (f.current = !0);
    const k = O ? null : m.current, N = k ? k.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, F, z;
    if (E || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      A = Math.round(N.width / 2), F = Math.round(N.height / 2);
    else {
      const {
        clientX: B,
        clientY: M
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      A = Math.round(B - N.left), F = Math.round(M - N.top);
    }
    if (E)
      z = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const B = Math.max(Math.abs((k ? k.clientWidth : 0) - A), A) * 2 + 2, M = Math.max(Math.abs((k ? k.clientHeight : 0) - F), F) * 2 + 2;
      z = Math.sqrt(B ** 2 + M ** 2);
    }
    v != null && v.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: x,
        rippleX: A,
        rippleY: F,
        rippleSize: z,
        cb: R
      });
    }, g.start(Fp, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: x,
      rippleX: A,
      rippleY: F,
      rippleSize: z,
      cb: R
    });
  }, [r, y, g]), w = d.useCallback(() => {
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
    b.current = null, c((R) => R.length > 0 ? R.slice(1) : R), h.current = $;
  }, [g]);
  return d.useImperativeHandle(n, () => ({
    pulsate: w,
    start: S,
    stop: C
  }), [w, S, C]), /* @__PURE__ */ P.jsx(_p, p({
    className: Y(yt.root, s.root, i),
    ref: m
  }, a, {
    children: /* @__PURE__ */ P.jsx(xp, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), Wp = Dp;
function Hp(e) {
  return ye("MuiButtonBase", e);
}
const Up = Ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), Vp = Up, Kp = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], qp = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: r
  } = e, i = ve({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Hp, r);
  return n && o && (i.root += ` ${o}`), i;
}, Gp = H("button", {
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
  [`&.${Vp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Xp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: r,
    centerRipple: s = !1,
    children: i,
    className: a,
    component: l = "button",
    disabled: c = !1,
    disableRipple: u = !1,
    disableTouchRipple: h = !1,
    focusRipple: f = !1,
    LinkComponent: g = "a",
    onBlur: b,
    onClick: m,
    onContextMenu: y,
    onDragLeave: S,
    onFocus: w,
    onFocusVisible: C,
    onKeyDown: v,
    onKeyUp: $,
    onMouseDown: R,
    onMouseLeave: x,
    onMouseUp: E,
    onTouchEnd: O,
    onTouchMove: k,
    onTouchStart: N,
    tabIndex: A = 0,
    TouchRippleProps: F,
    touchRippleRef: z,
    type: B
  } = o, M = V(o, Kp), L = d.useRef(null), j = d.useRef(null), W = Je(j, z), {
    isFocusVisibleRef: ne,
    onFocus: he,
    onBlur: Re,
    ref: $e
  } = Ca(), [G, Q] = d.useState(!1);
  c && G && Q(!1), d.useImperativeHandle(r, () => ({
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
    G && f && !u && le && j.current.pulsate();
  }, [u, f, G, le]);
  function re(D, we, Qe = h) {
    return it((et) => (we && we(et), !Qe && j.current && j.current[D](et), !0));
  }
  const Ie = re("start", R), ce = re("stop", y), ue = re("stop", S), se = re("stop", E), pe = re("stop", (D) => {
    G && D.preventDefault(), x && x(D);
  }), te = re("start", N), K = re("stop", O), Me = re("stop", k), J = re("stop", (D) => {
    Re(D), ne.current === !1 && Q(!1), b && b(D);
  }, !1), Ne = it((D) => {
    L.current || (L.current = D.currentTarget), he(D), ne.current === !0 && (Q(!0), C && C(D)), w && w(D);
  }), xe = () => {
    const D = L.current;
    return l && l !== "button" && !(D.tagName === "A" && D.href);
  }, me = d.useRef(!1), Le = it((D) => {
    f && !me.current && G && j.current && D.key === " " && (me.current = !0, j.current.stop(D, () => {
      j.current.start(D);
    })), D.target === D.currentTarget && xe() && D.key === " " && D.preventDefault(), v && v(D), D.target === D.currentTarget && xe() && D.key === "Enter" && !c && (D.preventDefault(), m && m(D));
  }), Pe = it((D) => {
    f && D.key === " " && j.current && G && !D.defaultPrevented && (me.current = !1, j.current.stop(D, () => {
      j.current.pulsate(D);
    })), $ && $(D), m && D.target === D.currentTarget && xe() && D.key === " " && !D.defaultPrevented && m(D);
  });
  let ge = l;
  ge === "button" && (M.href || M.to) && (ge = g);
  const Ue = {};
  ge === "button" ? (Ue.type = B === void 0 ? "button" : B, Ue.disabled = c) : (!M.href && !M.to && (Ue.role = "button"), c && (Ue["aria-disabled"] = c));
  const Ve = Je(n, $e, L), Ge = p({}, o, {
    centerRipple: s,
    component: l,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: h,
    focusRipple: f,
    tabIndex: A,
    focusVisible: G
  }), ie = qp(Ge);
  return /* @__PURE__ */ P.jsxs(Gp, p({
    as: ge,
    className: Y(ie.root, a),
    ownerState: Ge,
    onBlur: J,
    onClick: m,
    onContextMenu: ce,
    onFocus: Ne,
    onKeyDown: Le,
    onKeyUp: Pe,
    onMouseDown: Ie,
    onMouseLeave: pe,
    onMouseUp: se,
    onDragLeave: ue,
    onTouchEnd: K,
    onTouchMove: Me,
    onTouchStart: te,
    ref: Ve,
    tabIndex: c ? -1 : A,
    type: B
  }, Ue, M, {
    children: [i, ee ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P.jsx(Wp, p({
        ref: W,
        center: s
      }, F))
    ) : null]
  }));
}), kn = Xp;
function Yp(e) {
  return ye("MuiAlert", e);
}
const Zp = Ce("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), bi = Zp;
function Jp(e) {
  return ye("MuiIconButton", e);
}
const Qp = Ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), ef = Qp, tf = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], nf = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: r,
    size: s
  } = e, i = {
    root: ["root", n && "disabled", o !== "default" && `color${Z(o)}`, r && `edge${Z(r)}`, `size${Z(s)}`]
  };
  return ve(i, Jp, t);
}, of = H(kn, {
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
    [`&.${ef.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), rf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: r = !1,
    children: s,
    className: i,
    color: a = "default",
    disabled: l = !1,
    disableFocusRipple: c = !1,
    size: u = "medium"
  } = o, h = V(o, tf), f = p({}, o, {
    edge: r,
    color: a,
    disabled: l,
    disableFocusRipple: c,
    size: u
  }), g = nf(f);
  return /* @__PURE__ */ P.jsx(of, p({
    className: Y(g.root, i),
    centerRipple: !0,
    focusRipple: !c,
    disabled: l,
    ref: n,
    ownerState: f
  }, h, {
    children: s
  }));
}), sf = rf, af = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), lf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), cf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), uf = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), df = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), pf = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], ff = (e) => {
  const {
    variant: t,
    color: n,
    severity: o,
    classes: r
  } = e, s = {
    root: ["root", `${t}${Z(n || o)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ve(s, Yp, r);
}, mf = H(_a, {
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
  const n = e.palette.mode === "light" ? Yr : Zr, o = e.palette.mode === "light" ? Zr : Yr, r = t.color || t.severity;
  return p({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, r && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : n(e.palette[r].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
    [`& .${bi.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${r}IconColor`]
    } : {
      color: e.palette[r].main
    }
  }, r && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : n(e.palette[r].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[r].light}`,
    [`& .${bi.icon}`]: e.vars ? {
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
}), hf = H("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), gf = H("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), vi = H("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), yi = {
  success: /* @__PURE__ */ P.jsx(af, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ P.jsx(lf, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ P.jsx(cf, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ P.jsx(uf, {
    fontSize: "inherit"
  })
}, bf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s, i, a, l;
  const c = Se({
    props: t,
    name: "MuiAlert"
  }), {
    action: u,
    children: h,
    className: f,
    closeText: g = "Close",
    color: b,
    components: m = {},
    componentsProps: y = {},
    icon: S,
    iconMapping: w = yi,
    onClose: C,
    role: v = "alert",
    severity: $ = "success",
    slotProps: R = {},
    slots: x = {},
    variant: E = "standard"
  } = c, O = V(c, pf), k = p({}, c, {
    color: b,
    severity: $,
    variant: E
  }), N = ff(k), A = (o = (r = x.closeButton) != null ? r : m.CloseButton) != null ? o : sf, F = (s = (i = x.closeIcon) != null ? i : m.CloseIcon) != null ? s : df, z = (a = R.closeButton) != null ? a : y.closeButton, B = (l = R.closeIcon) != null ? l : y.closeIcon;
  return /* @__PURE__ */ P.jsxs(mf, p({
    role: v,
    elevation: 0,
    ownerState: k,
    className: Y(N.root, f),
    ref: n
  }, O, {
    children: [S !== !1 ? /* @__PURE__ */ P.jsx(hf, {
      ownerState: k,
      className: N.icon,
      children: S || w[$] || yi[$]
    }) : null, /* @__PURE__ */ P.jsx(gf, {
      ownerState: k,
      className: N.message,
      children: h
    }), u != null ? /* @__PURE__ */ P.jsx(vi, {
      ownerState: k,
      className: N.action,
      children: u
    }) : null, u == null && C ? /* @__PURE__ */ P.jsx(vi, {
      ownerState: k,
      className: N.action,
      children: /* @__PURE__ */ P.jsx(A, p({
        size: "small",
        "aria-label": g,
        title: g,
        color: "inherit",
        onClick: C
      }, z, {
        children: /* @__PURE__ */ P.jsx(F, p({
          fontSize: "small"
        }, B))
      }))
    }) : null]
  }));
}), ey = bf;
function vf(e) {
  return ye("MuiTypography", e);
}
Ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const yf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], xf = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: r,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, e.align !== "inherit" && `align${Z(t)}`, n && "gutterBottom", o && "noWrap", r && "paragraph"]
  };
  return ve(a, vf, i);
}, Cf = H("span", {
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
})), xi = {
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
}, Sf = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, $f = (e) => Sf[e] || e, Rf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiTypography"
  }), r = $f(o.color), s = ka(p({}, o, {
    color: r
  })), {
    align: i = "inherit",
    className: a,
    component: l,
    gutterBottom: c = !1,
    noWrap: u = !1,
    paragraph: h = !1,
    variant: f = "body1",
    variantMapping: g = xi
  } = s, b = V(s, yf), m = p({}, s, {
    align: i,
    color: r,
    className: a,
    component: l,
    gutterBottom: c,
    noWrap: u,
    paragraph: h,
    variant: f,
    variantMapping: g
  }), y = l || (h ? "p" : g[f] || xi[f]) || "span", S = xf(m);
  return /* @__PURE__ */ P.jsx(Cf, p({
    as: y,
    ref: n,
    ownerState: m,
    className: Y(S.root, a)
  }, b));
}), Bo = Rf;
function wf(e) {
  return ye("MuiAlertTitle", e);
}
Ce("MuiAlertTitle", ["root"]);
const Pf = ["className"], Ef = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, wf, t);
}, Tf = H(Bo, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), kf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: r
  } = o, s = V(o, Pf), i = o, a = Ef(i);
  return /* @__PURE__ */ P.jsx(Tf, p({
    gutterBottom: !0,
    component: "div",
    ownerState: i,
    ref: n,
    className: Y(a.root, r)
  }, s));
}), ty = kf, ja = "base";
function Of(e) {
  return `${ja}--${e}`;
}
function If(e, t) {
  return `${ja}-${e}-${t}`;
}
function Da(e, t) {
  const n = Ra[t];
  return n ? Of(n) : If(e, t);
}
function Mf(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = Da(e, o);
  }), n;
}
function Ci(e) {
  return e.substring(2).toLowerCase();
}
function Bf(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function ny(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: o = "onClick",
    onClickAway: r,
    touchEvent: s = "onTouchEnd"
  } = e, i = d.useRef(!1), a = d.useRef(null), l = d.useRef(!1), c = d.useRef(!1);
  d.useEffect(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const u = Je(
    // @ts-expect-error TODO upstream fix
    t.ref,
    a
  ), h = it((b) => {
    const m = c.current;
    c.current = !1;
    const y = Ze(a.current);
    if (!l.current || !a.current || "clientX" in b && Bf(b, y))
      return;
    if (i.current) {
      i.current = !1;
      return;
    }
    let S;
    b.composedPath ? S = b.composedPath().indexOf(a.current) > -1 : S = !y.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      b.target
    ) || a.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      b.target
    ), !S && (n || !m) && r(b);
  }), f = (b) => (m) => {
    c.current = !0;
    const y = t.props[b];
    y && y(m);
  }, g = {
    ref: u
  };
  return s !== !1 && (g[s] = f(s)), d.useEffect(() => {
    if (s !== !1) {
      const b = Ci(s), m = Ze(a.current), y = () => {
        i.current = !0;
      };
      return m.addEventListener(b, h), m.addEventListener("touchmove", y), () => {
        m.removeEventListener(b, h), m.removeEventListener("touchmove", y);
      };
    }
  }, [h, s]), o !== !1 && (g[o] = f(o)), d.useEffect(() => {
    if (o !== !1) {
      const b = Ci(o), m = Ze(a.current);
      return m.addEventListener(b, h), () => {
        m.removeEventListener(b, h);
      };
    }
  }, [h, o]), /* @__PURE__ */ P.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(t, g)
  });
}
const Af = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ff(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Lf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Nf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Lf(e));
}
function zf(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Af)).forEach((o, r) => {
    const s = Ff(o);
    s === -1 || !Nf(o) || (s === 0 ? t.push(o) : n.push({
      documentOrder: r,
      tabIndex: s,
      node: o
    }));
  }), n.sort((o, r) => o.tabIndex === r.tabIndex ? o.documentOrder - r.documentOrder : o.tabIndex - r.tabIndex).map((o) => o.node).concat(t);
}
function _f() {
  return !0;
}
function jf(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: r = !1,
    getTabbable: s = zf,
    isEnabled: i = _f,
    open: a
  } = e, l = d.useRef(!1), c = d.useRef(null), u = d.useRef(null), h = d.useRef(null), f = d.useRef(null), g = d.useRef(!1), b = d.useRef(null), m = Je(t.ref, b), y = d.useRef(null);
  d.useEffect(() => {
    !a || !b.current || (g.current = !n);
  }, [n, a]), d.useEffect(() => {
    if (!a || !b.current)
      return;
    const C = Ze(b.current);
    return b.current.contains(C.activeElement) || (b.current.hasAttribute("tabIndex") || b.current.setAttribute("tabIndex", "-1"), g.current && b.current.focus()), () => {
      r || (h.current && h.current.focus && (l.current = !0, h.current.focus()), h.current = null);
    };
  }, [a]), d.useEffect(() => {
    if (!a || !b.current)
      return;
    const C = Ze(b.current), v = (x) => {
      y.current = x, !(o || !i() || x.key !== "Tab") && C.activeElement === b.current && x.shiftKey && (l.current = !0, u.current && u.current.focus());
    }, $ = () => {
      const x = b.current;
      if (x === null)
        return;
      if (!C.hasFocus() || !i() || l.current) {
        l.current = !1;
        return;
      }
      if (x.contains(C.activeElement) || o && C.activeElement !== c.current && C.activeElement !== u.current)
        return;
      if (C.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!g.current)
        return;
      let E = [];
      if ((C.activeElement === c.current || C.activeElement === u.current) && (E = s(b.current)), E.length > 0) {
        var O, k;
        const N = !!((O = y.current) != null && O.shiftKey && ((k = y.current) == null ? void 0 : k.key) === "Tab"), A = E[0], F = E[E.length - 1];
        typeof A != "string" && typeof F != "string" && (N ? F.focus() : A.focus());
      } else
        x.focus();
    };
    C.addEventListener("focusin", $), C.addEventListener("keydown", v, !0);
    const R = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && $();
    }, 50);
    return () => {
      clearInterval(R), C.removeEventListener("focusin", $), C.removeEventListener("keydown", v, !0);
    };
  }, [n, o, r, i, a, s]);
  const S = (C) => {
    h.current === null && (h.current = C.relatedTarget), g.current = !0, f.current = C.target;
    const v = t.props.onFocus;
    v && v(C);
  }, w = (C) => {
    h.current === null && (h.current = C.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: w,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ d.cloneElement(t, {
      ref: m,
      onFocus: S
    }), /* @__PURE__ */ P.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
const Df = /* @__PURE__ */ d.createContext(void 0);
function Wf() {
  return d.useContext(Df);
}
function oy(e = {}) {
  const {
    defaultValue: t,
    disabled: n = !1,
    error: o = !1,
    onBlur: r,
    onChange: s,
    onFocus: i,
    required: a = !1,
    value: l,
    inputRef: c
  } = e, u = Wf();
  let h, f, g, b, m;
  if (u) {
    var y, S, w;
    h = void 0, f = (y = u.disabled) != null ? y : !1, g = (S = u.error) != null ? S : !1, b = (w = u.required) != null ? w : !1, m = u.value;
  } else
    h = t, f = n, g = o, b = a, m = l;
  const {
    current: C
  } = d.useRef(m != null), v = d.useCallback((B) => {
  }, []), $ = d.useRef(null), R = Je($, c, v), [x, E] = d.useState(!1);
  d.useEffect(() => {
    !u && f && x && (E(!1), r == null || r());
  }, [u, f, x, r]);
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
  }, k = (B) => (M) => {
    var L;
    (L = B.onBlur) == null || L.call(B, M), u && u.onBlur ? u.onBlur() : E(!1);
  }, N = (B) => (M, ...L) => {
    var j, W;
    if (!C && (M.target || $.current) == null)
      throw new Error(Lt(17));
    u == null || (j = u.onChange) == null || j.call(u, M), (W = B.onChange) == null || W.call(B, M, ...L);
  }, A = (B) => (M) => {
    var L;
    $.current && M.currentTarget === M.target && $.current.focus(), (L = B.onClick) == null || L.call(B, M);
  };
  return {
    disabled: f,
    error: g,
    focused: x,
    formControlContext: u,
    getInputProps: (B = {}) => {
      const L = p({}, {
        onBlur: r,
        onChange: s,
        onFocus: i
      }, qn(B)), j = p({}, L, {
        onBlur: k(L),
        onChange: N(L),
        onFocus: O(L)
      });
      return p({}, j, {
        "aria-invalid": g || void 0,
        defaultValue: h,
        value: m,
        required: b,
        disabled: f
      }, B, {
        ref: R
      }, j);
    },
    getRootProps: (B = {}) => {
      const M = qn(e, ["onBlur", "onChange", "onFocus"]), L = p({}, M, qn(B));
      return p({}, B, L, {
        onClick: A(L)
      });
    },
    inputRef: R,
    required: b,
    value: m
  };
}
function Hf(e) {
  return typeof e == "function" ? e() : e;
}
const Wa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    children: o,
    container: r,
    disablePortal: s = !1
  } = t, [i, a] = d.useState(null), l = Je(/* @__PURE__ */ d.isValidElement(o) ? o.ref : null, n);
  if (Bt(() => {
    s || a(Hf(r) || document.body);
  }, [r, s]), Bt(() => {
    if (i && !s)
      return To(n, i), () => {
        To(n, null);
      };
  }, [n, i, s]), s) {
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
    children: i && /* @__PURE__ */ Ji.createPortal(o, i)
  });
});
function Uf(e) {
  const t = Ze(e);
  return t.body === e ? Nt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Gn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Si(e) {
  return parseInt(Nt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Vf(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function $i(e, t, n, o, r) {
  const s = [t, n, ...o];
  [].forEach.call(e.children, (i) => {
    const a = s.indexOf(i) === -1, l = !Vf(i);
    a && l && Gn(i, r);
  });
}
function Nr(e, t) {
  let n = -1;
  return e.some((o, r) => t(o) ? (n = r, !0) : !1), n;
}
function Kf(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (Uf(o)) {
      const i = Sa(Ze(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${Si(o) + i}px`;
      const a = Ze(o).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Si(l) + i}px`;
      });
    }
    let s;
    if (o.parentNode instanceof DocumentFragment)
      s = Ze(o).body;
    else {
      const i = o.parentElement, a = Nt(o);
      s = (i == null ? void 0 : i.nodeName) === "HTML" && a.getComputedStyle(i).overflowY === "scroll" ? i : o;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: i,
      property: a
    }) => {
      s ? i.style.setProperty(a, s) : i.style.removeProperty(a);
    });
  };
}
function qf(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Gf {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Gn(t.modalRef, !1);
    const r = qf(n);
    $i(n, t.mount, t.modalRef, r, !0);
    const s = Nr(this.containers, (i) => i.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: r
    }), o);
  }
  mount(t, n) {
    const o = Nr(this.containers, (s) => s.modals.indexOf(t) !== -1), r = this.containers[o];
    r.restore || (r.restore = Kf(r, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const r = Nr(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[r];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(o, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Gn(t.modalRef, n), $i(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && Gn(i.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Xf(e) {
  return typeof e == "function" ? e() : e;
}
function Yf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Zf = new Gf();
function Jf(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: r = Zf,
    closeAfterTransition: s = !1,
    onTransitionEnter: i,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: h
  } = e, f = d.useRef({}), g = d.useRef(null), b = d.useRef(null), m = Je(b, h), [y, S] = d.useState(!u), w = Yf(l);
  let C = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (C = !1);
  const v = () => Ze(g.current), $ = () => (f.current.modalRef = b.current, f.current.mount = g.current, f.current), R = () => {
    r.mount($(), {
      disableScrollLock: o
    }), b.current && (b.current.scrollTop = 0);
  }, x = it(() => {
    const M = Xf(t) || v().body;
    r.add($(), M), b.current && R();
  }), E = d.useCallback(() => r.isTopModal($()), [r]), O = it((M) => {
    g.current = M, M && (u && E() ? R() : b.current && Gn(b.current, C));
  }), k = d.useCallback(() => {
    r.remove($(), C);
  }, [C, r]);
  d.useEffect(() => () => {
    k();
  }, [k]), d.useEffect(() => {
    u ? x() : (!w || !s) && k();
  }, [u, k, w, s, x]);
  const N = (M) => (L) => {
    var j;
    (j = M.onKeyDown) == null || j.call(M, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !E()) && (n || (L.stopPropagation(), c && c(L, "escapeKeyDown")));
  }, A = (M) => (L) => {
    var j;
    (j = M.onClick) == null || j.call(M, L), L.target === L.currentTarget && c && c(L, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const L = qn(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const j = p({}, L, M);
      return p({
        role: "presentation"
      }, j, {
        onKeyDown: N(j),
        ref: m
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
        S(!1), i && i();
      }, L = () => {
        S(!0), a && a(), s && k();
      };
      return {
        onEnter: Gs(M, l == null ? void 0 : l.props.onEnter),
        onExited: Gs(L, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: m,
    portalRef: O,
    isTopModal: E,
    exited: y,
    hasTransition: w
  };
}
var ut = "top", St = "bottom", $t = "right", dt = "left", ks = "auto", lo = [ut, St, $t, dt], Sn = "start", no = "end", Qf = "clippingParents", Ha = "viewport", Nn = "popper", em = "reference", Ri = /* @__PURE__ */ lo.reduce(function(e, t) {
  return e.concat([t + "-" + Sn, t + "-" + no]);
}, []), Ua = /* @__PURE__ */ [].concat(lo, [ks]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Sn, t + "-" + no]);
}, []), tm = "beforeRead", nm = "read", om = "afterRead", rm = "beforeMain", sm = "main", im = "afterMain", am = "beforeWrite", lm = "write", cm = "afterWrite", um = [tm, nm, om, rm, sm, im, am, lm, cm];
function At(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function gt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function sn(e) {
  var t = gt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ct(e) {
  var t = gt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Os(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = gt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function dm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !Ct(s) || !At(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(i) {
      var a = r[i];
      a === !1 ? s.removeAttribute(i) : s.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function pm(e) {
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
      var r = t.elements[o], s = t.attributes[o] || {}, i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Ct(r) || !At(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const fm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dm,
  effect: pm,
  requires: ["computeStyles"]
};
function Mt(e) {
  return e.split("-")[0];
}
var nn = Math.max, Ao = Math.min, $n = Math.round;
function ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Va() {
  return !/^((?!chrome|android).)*safari/i.test(ts());
}
function Rn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && Ct(e) && (r = e.offsetWidth > 0 && $n(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && $n(o.height) / e.offsetHeight || 1);
  var i = sn(e) ? gt(e) : window, a = i.visualViewport, l = !Va() && n, c = (o.left + (l && a ? a.offsetLeft : 0)) / r, u = (o.top + (l && a ? a.offsetTop : 0)) / s, h = o.width / r, f = o.height / s;
  return {
    width: h,
    height: f,
    top: u,
    right: c + h,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Is(e) {
  var t = Rn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Ka(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Os(n)) {
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
  return gt(e).getComputedStyle(e);
}
function mm(e) {
  return ["table", "td", "th"].indexOf(At(e)) >= 0;
}
function Vt(e) {
  return ((sn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Sr(e) {
  return At(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Os(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vt(e)
  );
}
function wi(e) {
  return !Ct(e) || // https://github.com/popperjs/popper-core/issues/837
  zt(e).position === "fixed" ? null : e.offsetParent;
}
function hm(e) {
  var t = /firefox/i.test(ts()), n = /Trident/i.test(ts());
  if (n && Ct(e)) {
    var o = zt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Sr(e);
  for (Os(r) && (r = r.host); Ct(r) && ["html", "body"].indexOf(At(r)) < 0; ) {
    var s = zt(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function co(e) {
  for (var t = gt(e), n = wi(e); n && mm(n) && zt(n).position === "static"; )
    n = wi(n);
  return n && (At(n) === "html" || At(n) === "body" && zt(n).position === "static") ? t : n || hm(e) || t;
}
function Ms(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xn(e, t, n) {
  return nn(e, Ao(t, n));
}
function gm(e, t, n) {
  var o = Xn(e, t, n);
  return o > n ? n : o;
}
function qa() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ga(e) {
  return Object.assign({}, qa(), e);
}
function Xa(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var bm = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ga(typeof t != "number" ? t : Xa(t, lo));
};
function vm(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Mt(n.placement), l = Ms(a), c = [dt, $t].indexOf(a) >= 0, u = c ? "height" : "width";
  if (!(!s || !i)) {
    var h = bm(r.padding, n), f = Is(s), g = l === "y" ? ut : dt, b = l === "y" ? St : $t, m = n.rects.reference[u] + n.rects.reference[l] - i[l] - n.rects.popper[u], y = i[l] - n.rects.reference[l], S = co(s), w = S ? l === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, C = m / 2 - y / 2, v = h[g], $ = w - f[u] - h[b], R = w / 2 - f[u] / 2 + C, x = Xn(v, R, $), E = l;
    n.modifiersData[o] = (t = {}, t[E] = x, t.centerOffset = x - R, t);
  }
}
function ym(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ka(t.elements.popper, r) && (t.elements.arrow = r));
}
const xm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vm,
  effect: ym,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wn(e) {
  return e.split("-")[1];
}
var Cm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Sm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: $n(n * r) / r || 0,
    y: $n(o * r) / r || 0
  };
}
function Pi(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, h = e.isFixed, f = i.x, g = f === void 0 ? 0 : f, b = i.y, m = b === void 0 ? 0 : b, y = typeof u == "function" ? u({
    x: g,
    y: m
  }) : {
    x: g,
    y: m
  };
  g = y.x, m = y.y;
  var S = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), C = dt, v = ut, $ = window;
  if (c) {
    var R = co(n), x = "clientHeight", E = "clientWidth";
    if (R === gt(n) && (R = Vt(n), zt(R).position !== "static" && a === "absolute" && (x = "scrollHeight", E = "scrollWidth")), R = R, r === ut || (r === dt || r === $t) && s === no) {
      v = St;
      var O = h && R === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[x]
      );
      m -= O - o.height, m *= l ? 1 : -1;
    }
    if (r === dt || (r === ut || r === St) && s === no) {
      C = $t;
      var k = h && R === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[E]
      );
      g -= k - o.width, g *= l ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: a
  }, c && Cm), A = u === !0 ? Sm({
    x: g,
    y: m
  }, gt(n)) : {
    x: g,
    y: m
  };
  if (g = A.x, m = A.y, l) {
    var F;
    return Object.assign({}, N, (F = {}, F[v] = w ? "0" : "", F[C] = S ? "0" : "", F.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + m + "px)" : "translate3d(" + g + "px, " + m + "px, 0)", F));
  }
  return Object.assign({}, N, (t = {}, t[v] = w ? m + "px" : "", t[C] = S ? g + "px" : "", t.transform = "", t));
}
function $m(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, i = s === void 0 ? !0 : s, a = n.roundOffsets, l = a === void 0 ? !0 : a, c = {
    placement: Mt(t.placement),
    variation: wn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pi(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pi(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Rm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $m,
  data: {}
};
var go = {
  passive: !0
};
function wm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, i = o.resize, a = i === void 0 ? !0 : i, l = gt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, go);
  }), a && l.addEventListener("resize", n.update, go), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, go);
    }), a && l.removeEventListener("resize", n.update, go);
  };
}
const Pm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: wm,
  data: {}
};
var Em = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Po(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Em[t];
  });
}
var Tm = {
  start: "end",
  end: "start"
};
function Ei(e) {
  return e.replace(/start|end/g, function(t) {
    return Tm[t];
  });
}
function Bs(e) {
  var t = gt(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function As(e) {
  return Rn(Vt(e)).left + Bs(e).scrollLeft;
}
function km(e, t) {
  var n = gt(e), o = Vt(e), r = n.visualViewport, s = o.clientWidth, i = o.clientHeight, a = 0, l = 0;
  if (r) {
    s = r.width, i = r.height;
    var c = Va();
    (c || !c && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a + As(e),
    y: l
  };
}
function Om(e) {
  var t, n = Vt(e), o = Bs(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = nn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = nn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + As(e), l = -o.scrollTop;
  return zt(r || n).direction === "rtl" && (a += nn(n.clientWidth, r ? r.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function Fs(e) {
  var t = zt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Ya(e) {
  return ["html", "body", "#document"].indexOf(At(e)) >= 0 ? e.ownerDocument.body : Ct(e) && Fs(e) ? e : Ya(Sr(e));
}
function Yn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ya(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = gt(o), i = r ? [s].concat(s.visualViewport || [], Fs(o) ? o : []) : o, a = t.concat(i);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Yn(Sr(i)))
  );
}
function ns(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Im(e, t) {
  var n = Rn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ti(e, t, n) {
  return t === Ha ? ns(km(e, n)) : sn(t) ? Im(t, n) : ns(Om(Vt(e)));
}
function Mm(e) {
  var t = Yn(Sr(e)), n = ["absolute", "fixed"].indexOf(zt(e).position) >= 0, o = n && Ct(e) ? co(e) : e;
  return sn(o) ? t.filter(function(r) {
    return sn(r) && Ka(r, o) && At(r) !== "body";
  }) : [];
}
function Bm(e, t, n, o) {
  var r = t === "clippingParents" ? Mm(e) : [].concat(t), s = [].concat(r, [n]), i = s[0], a = s.reduce(function(l, c) {
    var u = Ti(e, c, o);
    return l.top = nn(u.top, l.top), l.right = Ao(u.right, l.right), l.bottom = Ao(u.bottom, l.bottom), l.left = nn(u.left, l.left), l;
  }, Ti(e, i, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Za(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Mt(o) : null, s = o ? wn(o) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case ut:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case St:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case $t:
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
  var c = r ? Ms(r) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case Sn:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case no:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function oo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, i = s === void 0 ? e.strategy : s, a = n.boundary, l = a === void 0 ? Qf : a, c = n.rootBoundary, u = c === void 0 ? Ha : c, h = n.elementContext, f = h === void 0 ? Nn : h, g = n.altBoundary, b = g === void 0 ? !1 : g, m = n.padding, y = m === void 0 ? 0 : m, S = Ga(typeof y != "number" ? y : Xa(y, lo)), w = f === Nn ? em : Nn, C = e.rects.popper, v = e.elements[b ? w : f], $ = Bm(sn(v) ? v : v.contextElement || Vt(e.elements.popper), l, u, i), R = Rn(e.elements.reference), x = Za({
    reference: R,
    element: C,
    strategy: "absolute",
    placement: r
  }), E = ns(Object.assign({}, C, x)), O = f === Nn ? E : R, k = {
    top: $.top - O.top + S.top,
    bottom: O.bottom - $.bottom + S.bottom,
    left: $.left - O.left + S.left,
    right: O.right - $.right + S.right
  }, N = e.modifiersData.offset;
  if (f === Nn && N) {
    var A = N[r];
    Object.keys(k).forEach(function(F) {
      var z = [$t, St].indexOf(F) >= 0 ? 1 : -1, B = [ut, St].indexOf(F) >= 0 ? "y" : "x";
      k[F] += A[B] * z;
    });
  }
  return k;
}
function Am(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Ua : l, u = wn(o), h = u ? a ? Ri : Ri.filter(function(b) {
    return wn(b) === u;
  }) : lo, f = h.filter(function(b) {
    return c.indexOf(b) >= 0;
  });
  f.length === 0 && (f = h);
  var g = f.reduce(function(b, m) {
    return b[m] = oo(e, {
      placement: m,
      boundary: r,
      rootBoundary: s,
      padding: i
    })[Mt(m)], b;
  }, {});
  return Object.keys(g).sort(function(b, m) {
    return g[b] - g[m];
  });
}
function Fm(e) {
  if (Mt(e) === ks)
    return [];
  var t = Po(e);
  return [Ei(e), t, Ei(t)];
}
function Lm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, c = n.padding, u = n.boundary, h = n.rootBoundary, f = n.altBoundary, g = n.flipVariations, b = g === void 0 ? !0 : g, m = n.allowedAutoPlacements, y = t.options.placement, S = Mt(y), w = S === y, C = l || (w || !b ? [Po(y)] : Fm(y)), v = [y].concat(C).reduce(function(G, Q) {
      return G.concat(Mt(Q) === ks ? Am(t, {
        placement: Q,
        boundary: u,
        rootBoundary: h,
        padding: c,
        flipVariations: b,
        allowedAutoPlacements: m
      }) : Q);
    }, []), $ = t.rects.reference, R = t.rects.popper, x = /* @__PURE__ */ new Map(), E = !0, O = v[0], k = 0; k < v.length; k++) {
      var N = v[k], A = Mt(N), F = wn(N) === Sn, z = [ut, St].indexOf(A) >= 0, B = z ? "width" : "height", M = oo(t, {
        placement: N,
        boundary: u,
        rootBoundary: h,
        altBoundary: f,
        padding: c
      }), L = z ? F ? $t : dt : F ? St : ut;
      $[B] > R[B] && (L = Po(L));
      var j = Po(L), W = [];
      if (s && W.push(M[A] <= 0), a && W.push(M[L] <= 0, M[j] <= 0), W.every(function(G) {
        return G;
      })) {
        O = N, E = !1;
        break;
      }
      x.set(N, W);
    }
    if (E)
      for (var ne = b ? 3 : 1, he = function(Q) {
        var le = v.find(function(ke) {
          var ee = x.get(ke);
          if (ee)
            return ee.slice(0, Q).every(function(re) {
              return re;
            });
        });
        if (le)
          return O = le, "break";
      }, Re = ne; Re > 0; Re--) {
        var $e = he(Re);
        if ($e === "break")
          break;
      }
    t.placement !== O && (t.modifiersData[o]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Nm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Lm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ki(e, t, n) {
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
function Oi(e) {
  return [ut, $t, St, dt].some(function(t) {
    return e[t] >= 0;
  });
}
function zm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, i = oo(t, {
    elementContext: "reference"
  }), a = oo(t, {
    altBoundary: !0
  }), l = ki(i, o), c = ki(a, r, s), u = Oi(l), h = Oi(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": h
  });
}
const _m = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: zm
};
function jm(e, t, n) {
  var o = Mt(e), r = [dt, ut].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], a = s[1];
  return i = i || 0, a = (a || 0) * r, [dt, $t].indexOf(o) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function Dm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, i = Ua.reduce(function(u, h) {
    return u[h] = jm(h, t.rects, s), u;
  }, {}), a = i[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = i;
}
const Wm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Dm
};
function Hm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Za({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Um = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Hm,
  data: {}
};
function Vm(e) {
  return e === "x" ? "y" : "x";
}
function Km(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, h = n.padding, f = n.tether, g = f === void 0 ? !0 : f, b = n.tetherOffset, m = b === void 0 ? 0 : b, y = oo(t, {
    boundary: l,
    rootBoundary: c,
    padding: h,
    altBoundary: u
  }), S = Mt(t.placement), w = wn(t.placement), C = !w, v = Ms(S), $ = Vm(v), R = t.modifiersData.popperOffsets, x = t.rects.reference, E = t.rects.popper, O = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, k = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (R) {
    if (s) {
      var F, z = v === "y" ? ut : dt, B = v === "y" ? St : $t, M = v === "y" ? "height" : "width", L = R[v], j = L + y[z], W = L - y[B], ne = g ? -E[M] / 2 : 0, he = w === Sn ? x[M] : E[M], Re = w === Sn ? -E[M] : -x[M], $e = t.elements.arrow, G = g && $e ? Is($e) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : qa(), le = Q[z], ke = Q[B], ee = Xn(0, x[M], G[M]), re = C ? x[M] / 2 - ne - ee - le - k.mainAxis : he - ee - le - k.mainAxis, Ie = C ? -x[M] / 2 + ne + ee + ke + k.mainAxis : Re + ee + ke + k.mainAxis, ce = t.elements.arrow && co(t.elements.arrow), ue = ce ? v === "y" ? ce.clientTop || 0 : ce.clientLeft || 0 : 0, se = (F = N == null ? void 0 : N[v]) != null ? F : 0, pe = L + re - se - ue, te = L + Ie - se, K = Xn(g ? Ao(j, pe) : j, L, g ? nn(W, te) : W);
      R[v] = K, A[v] = K - L;
    }
    if (a) {
      var Me, J = v === "x" ? ut : dt, Ne = v === "x" ? St : $t, xe = R[$], me = $ === "y" ? "height" : "width", Le = xe + y[J], Pe = xe - y[Ne], ge = [ut, dt].indexOf(S) !== -1, Ue = (Me = N == null ? void 0 : N[$]) != null ? Me : 0, Ve = ge ? Le : xe - x[me] - E[me] - Ue + k.altAxis, Ge = ge ? xe + x[me] + E[me] - Ue - k.altAxis : Pe, ie = g && ge ? gm(Ve, xe, Ge) : Xn(g ? Ve : Le, xe, g ? Ge : Pe);
      R[$] = ie, A[$] = ie - xe;
    }
    t.modifiersData[o] = A;
  }
}
const qm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Km,
  requiresIfExists: ["offset"]
};
function Gm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Xm(e) {
  return e === gt(e) || !Ct(e) ? Bs(e) : Gm(e);
}
function Ym(e) {
  var t = e.getBoundingClientRect(), n = $n(t.width) / e.offsetWidth || 1, o = $n(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Zm(e, t, n) {
  n === void 0 && (n = !1);
  var o = Ct(t), r = Ct(t) && Ym(t), s = Vt(t), i = Rn(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((At(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fs(s)) && (a = Xm(t)), Ct(t) ? (l = Rn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = As(s))), {
    x: i.left + a.scrollLeft - l.x,
    y: i.top + a.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Jm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && r(l);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || r(s);
  }), o;
}
function Qm(e) {
  var t = Jm(e);
  return um.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function eh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function th(e) {
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
var Ii = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function nh(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? Ii : r;
  return function(a, l, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ii, s),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], f = !1, g = {
      state: u,
      setOptions: function(S) {
        var w = typeof S == "function" ? S(u.options) : S;
        m(), u.options = Object.assign({}, s, u.options, w), u.scrollParents = {
          reference: sn(a) ? Yn(a) : a.contextElement ? Yn(a.contextElement) : [],
          popper: Yn(l)
        };
        var C = Qm(th([].concat(o, u.options.modifiers)));
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
        if (!f) {
          var S = u.elements, w = S.reference, C = S.popper;
          if (Mi(w, C)) {
            u.rects = {
              reference: Zm(w, co(C), u.options.strategy === "fixed"),
              popper: Is(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(k) {
              return u.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var v = 0; v < u.orderedModifiers.length; v++) {
              if (u.reset === !0) {
                u.reset = !1, v = -1;
                continue;
              }
              var $ = u.orderedModifiers[v], R = $.fn, x = $.options, E = x === void 0 ? {} : x, O = $.name;
              typeof R == "function" && (u = R({
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
      update: eh(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Mi(a, l))
      return g;
    g.setOptions(c).then(function(y) {
      !f && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function b() {
      u.orderedModifiers.forEach(function(y) {
        var S = y.name, w = y.options, C = w === void 0 ? {} : w, v = y.effect;
        if (typeof v == "function") {
          var $ = v({
            state: u,
            name: S,
            instance: g,
            options: C
          }), R = function() {
          };
          h.push($ || R);
        }
      });
    }
    function m() {
      h.forEach(function(y) {
        return y();
      }), h = [];
    }
    return g;
  };
}
var oh = [Pm, Um, Rm, fm, Wm, Nm, qm, xm, _m], rh = /* @__PURE__ */ nh({
  defaultModifiers: oh
});
const Ja = "Popper";
function sh(e) {
  return Da(Ja, e);
}
Mf(Ja, ["root"]);
const ih = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], ah = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function lh(e, t) {
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
function os(e) {
  return typeof e == "function" ? e() : e;
}
function ch(e) {
  return e.nodeType !== void 0;
}
const uh = () => ve({
  root: ["root"]
}, Tp(sh)), dh = {}, ph = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const {
    anchorEl: r,
    children: s,
    direction: i,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: h,
    popperRef: f,
    slotProps: g = {},
    slots: b = {},
    TransitionProps: m
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, y = V(t, ih), S = d.useRef(null), w = Je(S, n), C = d.useRef(null), v = Je(C, f), $ = d.useRef(v);
  Bt(() => {
    $.current = v;
  }, [v]), d.useImperativeHandle(f, () => C.current, []);
  const R = lh(u, i), [x, E] = d.useState(R), [O, k] = d.useState(os(r));
  d.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), d.useEffect(() => {
    r && k(os(r));
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
    l != null && (M = M.concat(l)), h && h.modifiers != null && (M = M.concat(h.modifiers));
    const L = rh(O, S.current, p({
      placement: R
    }, h, {
      modifiers: M
    }));
    return $.current(L), () => {
      L.destroy(), $.current(null);
    };
  }, [O, a, l, c, h, R]);
  const N = {
    placement: x
  };
  m !== null && (N.TransitionProps = m);
  const A = uh(), F = (o = b.root) != null ? o : "div", z = Et({
    elementType: F,
    externalSlotProps: g.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: A.root
  });
  return /* @__PURE__ */ P.jsx(F, p({}, z, {
    children: typeof s == "function" ? s(N) : s
  }));
}), fh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    container: s,
    direction: i = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: c,
    open: u,
    placement: h = "bottom",
    popperOptions: f = dh,
    popperRef: g,
    style: b,
    transition: m = !1,
    slotProps: y = {},
    slots: S = {}
  } = t, w = V(t, ah), [C, v] = d.useState(!0), $ = () => {
    v(!1);
  }, R = () => {
    v(!0);
  };
  if (!l && !u && (!m || C))
    return null;
  let x;
  if (s)
    x = s;
  else if (o) {
    const k = os(o);
    x = k && ch(k) ? Ze(k).body : Ze(null).body;
  }
  const E = !u && l && (!m || C) ? "none" : void 0, O = m ? {
    in: u,
    onEnter: $,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ P.jsx(Wa, {
    disablePortal: a,
    container: x,
    children: /* @__PURE__ */ P.jsx(ph, p({
      anchorEl: o,
      direction: i,
      disablePortal: a,
      modifiers: c,
      ref: n,
      open: m ? !C : u,
      placement: h,
      popperOptions: f,
      popperRef: g,
      slotProps: y,
      slots: S
    }, w, {
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
}), mh = ["onChange", "maxRows", "minRows", "style", "value"];
function bo(e) {
  return parseInt(e, 10) || 0;
}
const hh = {
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
function Bi(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const gh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    onChange: o,
    maxRows: r,
    minRows: s = 1,
    style: i,
    value: a
  } = t, l = V(t, mh), {
    current: c
  } = d.useRef(a != null), u = d.useRef(null), h = Je(n, u), f = d.useRef(null), g = d.useRef(0), [b, m] = d.useState({
    outerHeightStyle: 0
  }), y = d.useCallback(() => {
    const v = u.current, R = Nt(v).getComputedStyle(v);
    if (R.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const x = f.current;
    x.style.width = R.width, x.value = v.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const E = R.boxSizing, O = bo(R.paddingBottom) + bo(R.paddingTop), k = bo(R.borderBottomWidth) + bo(R.borderTopWidth), N = x.scrollHeight;
    x.value = "x";
    const A = x.scrollHeight;
    let F = N;
    s && (F = Math.max(Number(s) * A, F)), r && (F = Math.min(Number(r) * A, F)), F = Math.max(F, A);
    const z = F + (E === "border-box" ? O + k : 0), B = Math.abs(F - N) <= 1;
    return {
      outerHeightStyle: z,
      overflow: B
    };
  }, [r, s, t.placeholder]), S = (v, $) => {
    const {
      outerHeightStyle: R,
      overflow: x
    } = $;
    return g.current < 20 && (R > 0 && Math.abs((v.outerHeightStyle || 0) - R) > 1 || v.overflow !== x) ? (g.current += 1, {
      overflow: x,
      outerHeightStyle: R
    }) : v;
  }, w = d.useCallback(() => {
    const v = y();
    Bi(v) || m(($) => S($, v));
  }, [y]);
  Bt(() => {
    const v = () => {
      const N = y();
      Bi(N) || Ji.flushSync(() => {
        m((A) => S(A, N));
      });
    }, $ = () => {
      g.current = 0, v();
    };
    let R;
    const x = ar($), E = u.current, O = Nt(E);
    O.addEventListener("resize", x);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver($), k.observe(E)), () => {
      x.clear(), cancelAnimationFrame(R), O.removeEventListener("resize", x), k && k.disconnect();
    };
  }, [y]), Bt(() => {
    w();
  }), d.useEffect(() => {
    g.current = 0;
  }, [a]);
  const C = (v) => {
    g.current = 0, c || w(), o && o(v);
  };
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx("textarea", p({
      value: a,
      onChange: C,
      ref: h,
      rows: s,
      style: p({
        height: b.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: b.overflow ? "hidden" : void 0
      }, i)
    }, l)), /* @__PURE__ */ P.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: p({}, hh.shadow, i, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function Ai(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function bh(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: o,
    matchFrom: r = "any",
    stringify: s,
    trim: i = !1
  } = e;
  return (a, {
    inputValue: l,
    getOptionLabel: c
  }) => {
    let u = i ? l.trim() : l;
    n && (u = u.toLowerCase()), t && (u = Ai(u));
    const h = u ? a.filter((f) => {
      let g = (s || c)(f);
      return n && (g = g.toLowerCase()), t && (g = Ai(g)), r === "start" ? g.indexOf(u) === 0 : g.indexOf(u) > -1;
    }) : a;
    return typeof o == "number" ? h.slice(0, o) : h;
  };
}
function zr(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const vh = bh(), Fi = 5, yh = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function ry(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = yh,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: o = !1,
    autoHighlight: r = !1,
    autoSelect: s = !1,
    blurOnSelect: i = !1,
    clearOnBlur: a = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: c = "useAutocomplete",
    defaultValue: u = e.multiple ? [] : null,
    disableClearable: h = !1,
    disableCloseOnSelect: f = !1,
    disabled: g,
    disabledItemsFocusable: b = !1,
    disableListWrap: m = !1,
    filterOptions: y = vh,
    filterSelectedOptions: S = !1,
    freeSolo: w = !1,
    getOptionDisabled: C,
    getOptionKey: v,
    getOptionLabel: $ = (I) => {
      var T;
      return (T = I.label) != null ? T : I;
    },
    groupBy: R,
    handleHomeEndKeys: x = !e.freeSolo,
    id: E,
    includeInputInList: O = !1,
    inputValue: k,
    isOptionEqualToValue: N = (I, T) => I === T,
    multiple: A = !1,
    onChange: F,
    onClose: z,
    onHighlightChange: B,
    onInputChange: M,
    onOpen: L,
    open: j,
    openOnFocus: W = !1,
    options: ne,
    readOnly: he = !1,
    selectOnFocus: Re = !e.freeSolo,
    value: $e
  } = e, G = lr(E);
  let Q = $;
  Q = (I) => {
    const T = $(I);
    return typeof T != "string" ? String(T) : T;
  };
  const le = d.useRef(!1), ke = d.useRef(!0), ee = d.useRef(null), re = d.useRef(null), [Ie, ce] = d.useState(null), [ue, se] = d.useState(-1), pe = r ? 0 : -1, te = d.useRef(pe), [K, Me] = tn({
    controlled: $e,
    default: u,
    name: c
  }), [J, Ne] = tn({
    controlled: k,
    default: "",
    name: c,
    state: "inputValue"
  }), [xe, me] = d.useState(!1), Le = d.useCallback((I, T) => {
    if (!(A ? K.length < T.length : T !== null) && !a)
      return;
    let oe;
    if (A)
      oe = "";
    else if (T == null)
      oe = "";
    else {
      const Be = Q(T);
      oe = typeof Be == "string" ? Be : "";
    }
    J !== oe && (Ne(oe), M && M(I, oe, "reset"));
  }, [Q, J, A, M, Ne, a, K]), [Pe, ge] = tn({
    controlled: j,
    default: !1,
    name: c,
    state: "open"
  }), [Ue, Ve] = d.useState(!0), Ge = !A && K != null && J === Q(K), ie = Pe && !he, D = ie ? y(
    ne.filter((I) => !(S && (A ? K : [K]).some((T) => T !== null && N(I, T)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ge && Ue ? "" : J,
      getOptionLabel: Q
    }
  ) : [], we = Wc({
    filteredOptions: D,
    value: K,
    inputValue: J
  });
  d.useEffect(() => {
    const I = K !== we.value;
    xe && !I || w && !I || Le(null, K);
  }, [K, Le, xe, we.value, w]);
  const Qe = Pe && D.length > 0 && !he, et = it((I) => {
    I === -1 ? ee.current.focus() : Ie.querySelector(`[data-tag-index="${I}"]`).focus();
  });
  d.useEffect(() => {
    A && ue > K.length - 1 && (se(-1), et(-1));
  }, [K, A, ue, et]);
  function X(I, T) {
    if (!re.current || I < 0 || I >= D.length)
      return -1;
    let U = I;
    for (; ; ) {
      const oe = re.current.querySelector(`[data-option-index="${U}"]`), Be = b ? !1 : !oe || oe.disabled || oe.getAttribute("aria-disabled") === "true";
      if (oe && oe.hasAttribute("tabindex") && !Be)
        return U;
      if (T === "next" ? U = (U + 1) % D.length : U = (U - 1 + D.length) % D.length, U === I)
        return -1;
    }
  }
  const de = it(({
    event: I,
    index: T,
    reason: U = "auto"
  }) => {
    if (te.current = T, T === -1 ? ee.current.removeAttribute("aria-activedescendant") : ee.current.setAttribute("aria-activedescendant", `${G}-option-${T}`), B && B(I, T === -1 ? null : D[T], U), !re.current)
      return;
    const oe = re.current.querySelector(`[role="option"].${n}-focused`);
    oe && (oe.classList.remove(`${n}-focused`), oe.classList.remove(`${n}-focusVisible`));
    let Be = re.current;
    if (re.current.getAttribute("role") !== "listbox" && (Be = re.current.parentElement.querySelector('[role="listbox"]')), !Be)
      return;
    if (T === -1) {
      Be.scrollTop = 0;
      return;
    }
    const De = re.current.querySelector(`[data-option-index="${T}"]`);
    if (De && (De.classList.add(`${n}-focused`), U === "keyboard" && De.classList.add(`${n}-focusVisible`), Be.scrollHeight > Be.clientHeight && U !== "mouse" && U !== "touch")) {
      const Ke = De, ae = Be.clientHeight + Be.scrollTop, rt = Ke.offsetTop + Ke.offsetHeight;
      rt > ae ? Be.scrollTop = rt - Be.clientHeight : Ke.offsetTop - Ke.offsetHeight * (R ? 1.3 : 0) < Be.scrollTop && (Be.scrollTop = Ke.offsetTop - Ke.offsetHeight * (R ? 1.3 : 0));
    }
  }), _ = it(({
    event: I,
    diff: T,
    direction: U = "next",
    reason: oe = "auto"
  }) => {
    if (!ie)
      return;
    const De = X((() => {
      const Ke = D.length - 1;
      if (T === "reset")
        return pe;
      if (T === "start")
        return 0;
      if (T === "end")
        return Ke;
      const ae = te.current + T;
      return ae < 0 ? ae === -1 && O ? -1 : m && te.current !== -1 || Math.abs(T) > 1 ? 0 : Ke : ae > Ke ? ae === Ke + 1 && O ? -1 : m || Math.abs(T) > 1 ? Ke : 0 : ae;
    })(), U);
    if (de({
      index: De,
      reason: oe,
      event: I
    }), o && T !== "reset")
      if (De === -1)
        ee.current.value = J;
      else {
        const Ke = Q(D[De]);
        ee.current.value = Ke, Ke.toLowerCase().indexOf(J.toLowerCase()) === 0 && J.length > 0 && ee.current.setSelectionRange(J.length, Ke.length);
      }
  }), q = () => {
    const I = (T, U) => {
      const oe = T ? Q(T) : "", Be = U ? Q(U) : "";
      return oe === Be;
    };
    if (te.current !== -1 && we.filteredOptions && we.filteredOptions.length !== D.length && we.inputValue === J && (A ? K.length === we.value.length && we.value.every((T, U) => Q(K[U]) === Q(T)) : I(we.value, K))) {
      const T = we.filteredOptions[te.current];
      if (T && D.some((oe) => Q(oe) === Q(T)))
        return !0;
    }
    return !1;
  }, fe = d.useCallback(() => {
    if (!ie || q())
      return;
    const I = A ? K[0] : K;
    if (D.length === 0 || I == null) {
      _({
        diff: "reset"
      });
      return;
    }
    if (re.current) {
      if (I != null) {
        const T = D[te.current];
        if (A && T && zr(K, (oe) => N(T, oe)) !== -1)
          return;
        const U = zr(D, (oe) => N(oe, I));
        U === -1 ? _({
          diff: "reset"
        }) : de({
          index: U
        });
        return;
      }
      if (te.current >= D.length - 1) {
        de({
          index: D.length - 1
        });
        return;
      }
      de({
        index: te.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    D.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    A ? !1 : K,
    S,
    _,
    de,
    ie,
    J,
    A
  ]), be = it((I) => {
    To(re, I), I && fe();
  });
  d.useEffect(() => {
    fe();
  }, [fe]);
  const Oe = (I) => {
    Pe || (ge(!0), Ve(!0), L && L(I));
  }, je = (I, T) => {
    Pe && (ge(!1), z && z(I, T));
  }, Ye = (I, T, U, oe) => {
    if (A) {
      if (K.length === T.length && K.every((Be, De) => Be === T[De]))
        return;
    } else if (K === T)
      return;
    F && F(I, T, U, oe), Me(T);
  }, ft = d.useRef(!1), nt = (I, T, U = "selectOption", oe = "options") => {
    let Be = U, De = T;
    if (A) {
      De = Array.isArray(K) ? K.slice() : [];
      const Ke = zr(De, (ae) => N(T, ae));
      Ke === -1 ? De.push(T) : oe !== "freeSolo" && (De.splice(Ke, 1), Be = "removeOption");
    }
    Le(I, De), Ye(I, De, Be, {
      option: T
    }), !f && (!I || !I.ctrlKey && !I.metaKey) && je(I, Be), (i === !0 || i === "touch" && ft.current || i === "mouse" && !ft.current) && ee.current.blur();
  };
  function Dt(I, T) {
    if (I === -1)
      return -1;
    let U = I;
    for (; ; ) {
      if (T === "next" && U === K.length || T === "previous" && U === -1)
        return -1;
      const oe = Ie.querySelector(`[data-tag-index="${U}"]`);
      if (!oe || !oe.hasAttribute("tabindex") || oe.disabled || oe.getAttribute("aria-disabled") === "true")
        U += T === "next" ? 1 : -1;
      else
        return U;
    }
  }
  const On = (I, T) => {
    if (!A)
      return;
    J === "" && je(I, "toggleInput");
    let U = ue;
    ue === -1 ? J === "" && T === "previous" && (U = K.length - 1) : (U += T === "next" ? 1 : -1, U < 0 && (U = 0), U === K.length && (U = -1)), U = Dt(U, T), se(U), et(U);
  }, In = (I) => {
    le.current = !0, Ne(""), M && M(I, "", "clear"), Ye(I, A ? [] : null, "clear");
  }, uo = (I) => (T) => {
    if (I.onKeyDown && I.onKeyDown(T), !T.defaultMuiPrevented && (ue !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(T.key) === -1 && (se(-1), et(-1)), T.which !== 229))
      switch (T.key) {
        case "Home":
          ie && x && (T.preventDefault(), _({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: T
          }));
          break;
        case "End":
          ie && x && (T.preventDefault(), _({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: T
          }));
          break;
        case "PageUp":
          T.preventDefault(), _({
            diff: -Fi,
            direction: "previous",
            reason: "keyboard",
            event: T
          }), Oe(T);
          break;
        case "PageDown":
          T.preventDefault(), _({
            diff: Fi,
            direction: "next",
            reason: "keyboard",
            event: T
          }), Oe(T);
          break;
        case "ArrowDown":
          T.preventDefault(), _({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: T
          }), Oe(T);
          break;
        case "ArrowUp":
          T.preventDefault(), _({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: T
          }), Oe(T);
          break;
        case "ArrowLeft":
          On(T, "previous");
          break;
        case "ArrowRight":
          On(T, "next");
          break;
        case "Enter":
          if (te.current !== -1 && ie) {
            const U = D[te.current], oe = C ? C(U) : !1;
            if (T.preventDefault(), oe)
              return;
            nt(T, U, "selectOption"), o && ee.current.setSelectionRange(ee.current.value.length, ee.current.value.length);
          } else
            w && J !== "" && Ge === !1 && (A && T.preventDefault(), nt(T, J, "createOption", "freeSolo"));
          break;
        case "Escape":
          ie ? (T.preventDefault(), T.stopPropagation(), je(T, "escape")) : l && (J !== "" || A && K.length > 0) && (T.preventDefault(), T.stopPropagation(), In(T));
          break;
        case "Backspace":
          if (A && !he && J === "" && K.length > 0) {
            const U = ue === -1 ? K.length - 1 : ue, oe = K.slice();
            oe.splice(U, 1), Ye(T, oe, "removeOption", {
              option: K[U]
            });
          }
          break;
        case "Delete":
          if (A && !he && J === "" && K.length > 0 && ue !== -1) {
            const U = ue, oe = K.slice();
            oe.splice(U, 1), Ye(T, oe, "removeOption", {
              option: K[U]
            });
          }
          break;
      }
  }, Tr = (I) => {
    me(!0), W && !le.current && Oe(I);
  }, po = (I) => {
    if (t(re)) {
      ee.current.focus();
      return;
    }
    me(!1), ke.current = !0, le.current = !1, s && te.current !== -1 && ie ? nt(I, D[te.current], "blur") : s && w && J !== "" ? nt(I, J, "blur", "freeSolo") : a && Le(I, K), je(I, "blur");
  }, kr = (I) => {
    const T = I.target.value;
    J !== T && (Ne(T), Ve(!1), M && M(I, T, "input")), T === "" ? !h && !A && Ye(I, null, "clear") : Oe(I);
  }, Mn = (I) => {
    const T = Number(I.currentTarget.getAttribute("data-option-index"));
    te.current !== T && de({
      event: I,
      index: T,
      reason: "mouse"
    });
  }, Or = (I) => {
    de({
      event: I,
      index: Number(I.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), ft.current = !0;
  }, Kt = (I) => {
    const T = Number(I.currentTarget.getAttribute("data-option-index"));
    nt(I, D[T], "selectOption"), ft.current = !1;
  }, Bn = (I) => (T) => {
    const U = K.slice();
    U.splice(I, 1), Ye(T, U, "removeOption", {
      option: K[I]
    });
  }, lt = (I) => {
    Pe ? je(I, "toggleInput") : Oe(I);
  }, qt = (I) => {
    I.currentTarget.contains(I.target) && I.target.getAttribute("id") !== G && I.preventDefault();
  }, Ir = (I) => {
    I.currentTarget.contains(I.target) && (ee.current.focus(), Re && ke.current && ee.current.selectionEnd - ee.current.selectionStart === 0 && ee.current.select(), ke.current = !1);
  }, Gt = (I) => {
    !g && (J === "" || !Pe) && lt(I);
  };
  let Xt = w && J.length > 0;
  Xt = Xt || (A ? K.length > 0 : K !== null);
  let An = D;
  return R && (An = D.reduce((I, T, U) => {
    const oe = R(T);
    return I.length > 0 && I[I.length - 1].group === oe ? I[I.length - 1].options.push(T) : I.push({
      key: U,
      index: U,
      group: oe,
      options: [T]
    }), I;
  }, [])), g && xe && po(), {
    getRootProps: (I = {}) => p({
      "aria-owns": Qe ? `${G}-listbox` : null
    }, I, {
      onKeyDown: uo(I),
      onMouseDown: qt,
      onClick: Ir
    }),
    getInputLabelProps: () => ({
      id: `${G}-label`,
      htmlFor: G
    }),
    getInputProps: () => ({
      id: G,
      value: J,
      onBlur: po,
      onFocus: Tr,
      onChange: kr,
      onMouseDown: Gt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": ie ? "" : null,
      "aria-autocomplete": o ? "both" : "list",
      "aria-controls": Qe ? `${G}-listbox` : void 0,
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
      onClick: In
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
    }, !he && {
      onDelete: Bn(I)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${G}-listbox`,
      "aria-labelledby": `${G}-label`,
      ref: be,
      onMouseDown: (I) => {
        I.preventDefault();
      }
    }),
    getOptionProps: ({
      index: I,
      option: T
    }) => {
      var U;
      const oe = (A ? K : [K]).some((De) => De != null && N(T, De)), Be = C ? C(T) : !1;
      return {
        key: (U = v == null ? void 0 : v(T)) != null ? U : Q(T),
        tabIndex: -1,
        role: "option",
        id: `${G}-option-${I}`,
        onMouseMove: Mn,
        onClick: Kt,
        onTouchStart: Or,
        "data-option-index": I,
        "aria-disabled": Be,
        "aria-selected": oe
      };
    },
    id: G,
    inputValue: J,
    value: K,
    dirty: Xt,
    expanded: ie && Ie,
    popupOpen: ie,
    focused: xe || ue !== -1,
    anchorEl: Ie,
    setAnchorEl: ce,
    focusedTag: ue,
    groupedOptions: An
  };
}
const xh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Ch = H(fh, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Sh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const r = Rs(), s = Se({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: h,
    keepMounted: f,
    modifiers: g,
    open: b,
    placement: m,
    popperOptions: y,
    popperRef: S,
    transition: w,
    slots: C,
    slotProps: v
  } = s, $ = V(s, xh), R = (o = C == null ? void 0 : C.root) != null ? o : l == null ? void 0 : l.Root, x = p({
    anchorEl: i,
    container: u,
    disablePortal: h,
    keepMounted: f,
    modifiers: g,
    open: b,
    placement: m,
    popperOptions: y,
    popperRef: S,
    transition: w
  }, $);
  return /* @__PURE__ */ P.jsx(Ch, p({
    as: a,
    direction: r == null ? void 0 : r.direction,
    slots: {
      root: R
    },
    slotProps: v ?? c
  }, x, {
    ref: n
  }));
}), Qa = Sh;
function an({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((o, r) => (o[r] = e[r], n && typeof e[r] > "u" && (o[r] = n[r]), o), {});
}
const $h = /* @__PURE__ */ d.createContext(void 0), $r = $h;
function jt() {
  return d.useContext($r);
}
function Rh(e) {
  return /* @__PURE__ */ P.jsx(Ku, p({}, e, {
    defaultTheme: xr,
    themeId: Cn
  }));
}
function Li(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Fo(e, t = !1) {
  return e && (Li(e.value) && e.value !== "" || t && Li(e.defaultValue) && e.defaultValue !== "");
}
function wh(e) {
  return e.startAdornment;
}
function Ph(e) {
  return ye("MuiInputBase", e);
}
const Eh = Ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Pn = Eh, Th = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Rr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Z(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, wr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, kh = (e) => {
  const {
    classes: t,
    color: n,
    disabled: o,
    error: r,
    endAdornment: s,
    focused: i,
    formControl: a,
    fullWidth: l,
    hiddenLabel: c,
    multiline: u,
    readOnly: h,
    size: f,
    startAdornment: g,
    type: b
  } = e, m = {
    root: ["root", `color${Z(n)}`, o && "disabled", r && "error", l && "fullWidth", i && "focused", a && "formControl", f && f !== "medium" && `size${Z(f)}`, u && "multiline", g && "adornedStart", s && "adornedEnd", c && "hiddenLabel", h && "readOnly"],
    input: ["input", o && "disabled", b === "search" && "inputTypeSearch", u && "inputMultiline", f === "small" && "inputSizeSmall", c && "inputHiddenLabel", g && "inputAdornedStart", s && "inputAdornedEnd", h && "readOnly"]
  };
  return ve(m, Ph, t);
}, Pr = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Rr
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
  [`&.${Pn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && p({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Er = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: wr
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
  }, s = e.vars ? {
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
    [`label[data-shrink=false] + .${Pn.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&:-ms-input-placeholder": r,
      // IE11
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${Pn.disabled}`]: {
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
}), Oh = /* @__PURE__ */ P.jsx(Rh, {
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
}), Ih = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const r = Se({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: i,
    autoFocus: a,
    className: l,
    components: c = {},
    componentsProps: u = {},
    defaultValue: h,
    disabled: f,
    disableInjectingGlobalStyles: g,
    endAdornment: b,
    fullWidth: m = !1,
    id: y,
    inputComponent: S = "input",
    inputProps: w = {},
    inputRef: C,
    maxRows: v,
    minRows: $,
    multiline: R = !1,
    name: x,
    onBlur: E,
    onChange: O,
    onClick: k,
    onFocus: N,
    onKeyDown: A,
    onKeyUp: F,
    placeholder: z,
    readOnly: B,
    renderSuffix: M,
    rows: L,
    slotProps: j = {},
    slots: W = {},
    startAdornment: ne,
    type: he = "text",
    value: Re
  } = r, $e = V(r, Th), G = w.value != null ? w.value : Re, {
    current: Q
  } = d.useRef(G != null), le = d.useRef(), ke = d.useCallback((ie) => {
  }, []), ee = Je(le, C, w.ref, ke), [re, Ie] = d.useState(!1), ce = jt(), ue = an({
    props: r,
    muiFormControl: ce,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ue.focused = ce ? ce.focused : re, d.useEffect(() => {
    !ce && f && re && (Ie(!1), E && E());
  }, [ce, f, re, E]);
  const se = ce && ce.onFilled, pe = ce && ce.onEmpty, te = d.useCallback((ie) => {
    Fo(ie) ? se && se() : pe && pe();
  }, [se, pe]);
  Bt(() => {
    Q && te({
      value: G
    });
  }, [G, te, Q]);
  const K = (ie) => {
    if (ue.disabled) {
      ie.stopPropagation();
      return;
    }
    N && N(ie), w.onFocus && w.onFocus(ie), ce && ce.onFocus ? ce.onFocus(ie) : Ie(!0);
  }, Me = (ie) => {
    E && E(ie), w.onBlur && w.onBlur(ie), ce && ce.onBlur ? ce.onBlur(ie) : Ie(!1);
  }, J = (ie, ...D) => {
    if (!Q) {
      const we = ie.target || le.current;
      if (we == null)
        throw new Error(Lt(1));
      te({
        value: we.value
      });
    }
    w.onChange && w.onChange(ie, ...D), O && O(ie, ...D);
  };
  d.useEffect(() => {
    te(le.current);
  }, []);
  const Ne = (ie) => {
    le.current && ie.currentTarget === ie.target && le.current.focus(), k && k(ie);
  };
  let xe = S, me = w;
  R && xe === "input" && (L ? me = p({
    type: void 0,
    minRows: L,
    maxRows: L
  }, me) : me = p({
    type: void 0,
    maxRows: v,
    minRows: $
  }, me), xe = gh);
  const Le = (ie) => {
    te(ie.animationName === "mui-auto-fill-cancel" ? le.current : {
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
    fullWidth: m,
    hiddenLabel: ue.hiddenLabel,
    multiline: R,
    size: ue.size,
    startAdornment: ne,
    type: he
  }), ge = kh(Pe), Ue = W.root || c.Root || Pr, Ve = j.root || u.root || {}, Ge = W.input || c.Input || Er;
  return me = p({}, me, (o = j.input) != null ? o : u.input), /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [!g && Oh, /* @__PURE__ */ P.jsxs(Ue, p({}, Ve, !Mo(Ue) && {
      ownerState: p({}, Pe, Ve.ownerState)
    }, {
      ref: n,
      onClick: Ne
    }, $e, {
      className: Y(ge.root, Ve.className, l, B && "MuiInputBase-readOnly"),
      children: [ne, /* @__PURE__ */ P.jsx($r.Provider, {
        value: null,
        children: /* @__PURE__ */ P.jsx(Ge, p({
          ownerState: Pe,
          "aria-invalid": ue.error,
          "aria-describedby": s,
          autoComplete: i,
          autoFocus: a,
          defaultValue: h,
          disabled: ue.disabled,
          id: y,
          onAnimationStart: Le,
          name: x,
          placeholder: z,
          readOnly: B,
          required: ue.required,
          rows: L,
          value: G,
          onKeyDown: A,
          onKeyUp: F,
          type: he
        }, me, !Mo(Ge) && {
          as: xe,
          ownerState: p({}, Pe, me.ownerState)
        }, {
          ref: ee,
          className: Y(ge.input, me.className, B && "MuiInputBase-readOnly"),
          onBlur: Me,
          onChange: J,
          onFocus: K
        }))
      }), b, M ? M(p({}, ue, {
        startAdornment: ne
      })) : null]
    }))]
  });
}), Ls = Ih;
function Mh(e) {
  return ye("MuiInput", e);
}
const Bh = p({}, Pn, Ce("MuiInput", ["root", "underline", "input"])), zn = Bh;
function Ah(e) {
  return ye("MuiOutlinedInput", e);
}
const Fh = p({}, Pn, Ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Wt = Fh;
function Lh(e) {
  return ye("MuiFilledInput", e);
}
const Nh = p({}, Pn, Ce("MuiFilledInput", ["root", "underline", "input"])), Yt = Nh, zh = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), _h = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], jh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Dh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Tn(), r = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: i = !0,
    children: a,
    easing: l,
    in: c,
    onEnter: u,
    onEntered: h,
    onEntering: f,
    onExit: g,
    onExited: b,
    onExiting: m,
    style: y,
    timeout: S = r,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Na
  } = t, C = V(t, _h), v = d.useRef(null), $ = Je(v, a.ref, n), R = (z) => (B) => {
    if (z) {
      const M = v.current;
      B === void 0 ? z(M) : z(M, B);
    }
  }, x = R(f), E = R((z, B) => {
    za(z);
    const M = Io({
      style: y,
      timeout: S,
      easing: l
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = o.transitions.create("opacity", M), z.style.transition = o.transitions.create("opacity", M), u && u(z, B);
  }), O = R(h), k = R(m), N = R((z) => {
    const B = Io({
      style: y,
      timeout: S,
      easing: l
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = o.transitions.create("opacity", B), z.style.transition = o.transitions.create("opacity", B), g && g(z);
  }), A = R(b), F = (z) => {
    s && s(v.current, z);
  };
  return /* @__PURE__ */ P.jsx(w, p({
    appear: i,
    in: c,
    nodeRef: v,
    onEnter: E,
    onEntered: O,
    onEntering: x,
    onExit: N,
    onExited: A,
    onExiting: k,
    addEndListener: F,
    timeout: S
  }, C, {
    children: (z, B) => /* @__PURE__ */ d.cloneElement(a, p({
      style: p({
        opacity: 0,
        visibility: z === "exited" && !c ? "hidden" : void 0
      }, jh[z], y, a.props.style),
      ref: $
    }, B))
  }));
}), Wh = Dh;
function Hh(e) {
  return ye("MuiBackdrop", e);
}
Ce("MuiBackdrop", ["root", "invisible"]);
const Uh = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Vh = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, Hh, t);
}, Kh = H("div", {
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
})), qh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s;
  const i = Se({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: a,
    className: l,
    component: c = "div",
    components: u = {},
    componentsProps: h = {},
    invisible: f = !1,
    open: g,
    slotProps: b = {},
    slots: m = {},
    TransitionComponent: y = Wh,
    transitionDuration: S
  } = i, w = V(i, Uh), C = p({}, i, {
    component: c,
    invisible: f
  }), v = Vh(C), $ = (o = b.root) != null ? o : h.root;
  return /* @__PURE__ */ P.jsx(y, p({
    in: g,
    timeout: S
  }, w, {
    children: /* @__PURE__ */ P.jsx(Kh, p({
      "aria-hidden": !0
    }, $, {
      as: (r = (s = m.root) != null ? s : u.Root) != null ? r : c,
      className: Y(v.root, l, $ == null ? void 0 : $.className),
      ownerState: p({}, C, $ == null ? void 0 : $.ownerState),
      classes: v,
      ref: n,
      children: a
    }))
  }));
}), Gh = qh;
function Xh(e) {
  return ye("MuiButton", e);
}
const Yh = Ce("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), vo = Yh, Zh = /* @__PURE__ */ d.createContext({}), Jh = Zh, Qh = /* @__PURE__ */ d.createContext(void 0), eg = Qh, tg = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], ng = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: r,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, `${s}${Z(t)}`, `size${Z(r)}`, `${s}Size${Z(r)}`, t === "inherit" && "colorInherit", n && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Z(r)}`],
    endIcon: ["endIcon", `iconSize${Z(r)}`]
  }, l = ve(a, Xh, i);
  return p({}, i, l);
}, el = (e) => p({}, e.size === "small" && {
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
}), og = H(kn, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
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
  const r = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
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
    [`&.${vo.focusVisible}`]: p({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${vo.disabled}`]: p({
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
  [`&.${vo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${vo.disabled}`]: {
    boxShadow: "none"
  }
}), rg = H("span", {
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
}, el(e))), sg = H("span", {
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
}, el(e))), ig = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = d.useContext(Jh), r = d.useContext(eg), s = ur(o, t), i = Se({
    props: s,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: h = !1,
    disableElevation: f = !1,
    disableFocusRipple: g = !1,
    endIcon: b,
    focusVisibleClassName: m,
    fullWidth: y = !1,
    size: S = "medium",
    startIcon: w,
    type: C,
    variant: v = "text"
  } = i, $ = V(i, tg), R = p({}, i, {
    color: l,
    component: c,
    disabled: h,
    disableElevation: f,
    disableFocusRipple: g,
    fullWidth: y,
    size: S,
    type: C,
    variant: v
  }), x = ng(R), E = w && /* @__PURE__ */ P.jsx(rg, {
    className: x.startIcon,
    ownerState: R,
    children: w
  }), O = b && /* @__PURE__ */ P.jsx(sg, {
    className: x.endIcon,
    ownerState: R,
    children: b
  }), k = r || "";
  return /* @__PURE__ */ P.jsxs(og, p({
    ownerState: R,
    className: Y(o.className, x.root, u, k),
    component: c,
    disabled: h,
    focusRipple: !g,
    focusVisibleClassName: Y(x.focusVisible, m),
    ref: n,
    type: C
  }, $, {
    classes: x,
    children: [E, a, O]
  }));
}), sy = ig;
function ag(e) {
  return ye("PrivateSwitchBase", e);
}
Ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const lg = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], cg = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: o,
    edge: r
  } = e, s = {
    root: ["root", n && "checked", o && "disabled", r && `edge${Z(r)}`],
    input: ["input"]
  };
  return ve(s, ag, t);
}, ug = H(kn)(({
  ownerState: e
}) => p({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), dg = H("input", {
  shouldForwardProp: vt
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
}), pg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    autoFocus: o,
    checked: r,
    checkedIcon: s,
    className: i,
    defaultChecked: a,
    disabled: l,
    disableFocusRipple: c = !1,
    edge: u = !1,
    icon: h,
    id: f,
    inputProps: g,
    inputRef: b,
    name: m,
    onBlur: y,
    onChange: S,
    onFocus: w,
    readOnly: C,
    required: v = !1,
    tabIndex: $,
    type: R,
    value: x
  } = t, E = V(t, lg), [O, k] = tn({
    controlled: r,
    default: !!a,
    name: "SwitchBase",
    state: "checked"
  }), N = jt(), A = (W) => {
    w && w(W), N && N.onFocus && N.onFocus(W);
  }, F = (W) => {
    y && y(W), N && N.onBlur && N.onBlur(W);
  }, z = (W) => {
    if (W.nativeEvent.defaultPrevented)
      return;
    const ne = W.target.checked;
    k(ne), S && S(W, ne);
  };
  let B = l;
  N && typeof B > "u" && (B = N.disabled);
  const M = R === "checkbox" || R === "radio", L = p({}, t, {
    checked: O,
    disabled: B,
    disableFocusRipple: c,
    edge: u
  }), j = cg(L);
  return /* @__PURE__ */ P.jsxs(ug, p({
    component: "span",
    className: Y(j.root, i),
    centerRipple: !0,
    focusRipple: !c,
    disabled: B,
    tabIndex: null,
    role: void 0,
    onFocus: A,
    onBlur: F,
    ownerState: L,
    ref: n
  }, E, {
    children: [/* @__PURE__ */ P.jsx(dg, p({
      autoFocus: o,
      checked: r,
      defaultChecked: a,
      className: j.input,
      disabled: B,
      id: M ? f : void 0,
      name: m,
      onChange: z,
      readOnly: C,
      ref: b,
      required: v,
      ownerState: L,
      tabIndex: $,
      type: R
    }, R === "checkbox" && x === void 0 ? {} : {
      value: x
    }, g)), O ? s : h]
  }));
}), fg = pg, mg = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), hg = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), gg = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function bg(e) {
  return ye("MuiCheckbox", e);
}
const vg = Ce("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), _r = vg, yg = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], xg = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: o,
    size: r
  } = e, s = {
    root: ["root", n && "indeterminate", `color${Z(o)}`, `size${Z(r)}`]
  }, i = ve(s, bg, t);
  return p({}, t, i);
}, Cg = H(fg, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
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
  [`&.${_r.checked}, &.${_r.indeterminate}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${_r.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Sg = /* @__PURE__ */ P.jsx(hg, {}), $g = /* @__PURE__ */ P.jsx(mg, {}), Rg = /* @__PURE__ */ P.jsx(gg, {}), wg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const s = Se({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: i = Sg,
    color: a = "primary",
    icon: l = $g,
    indeterminate: c = !1,
    indeterminateIcon: u = Rg,
    inputProps: h,
    size: f = "medium",
    className: g
  } = s, b = V(s, yg), m = c ? u : l, y = c ? u : i, S = p({}, s, {
    color: a,
    indeterminate: c,
    size: f
  }), w = xg(S);
  return /* @__PURE__ */ P.jsx(Cg, p({
    type: "checkbox",
    inputProps: p({
      "data-indeterminate": c
    }, h),
    icon: /* @__PURE__ */ d.cloneElement(m, {
      fontSize: (o = m.props.fontSize) != null ? o : f
    }),
    checkedIcon: /* @__PURE__ */ d.cloneElement(y, {
      fontSize: (r = y.props.fontSize) != null ? r : f
    }),
    ownerState: S,
    ref: n,
    className: Y(w.root, g)
  }, b, {
    classes: w
  }));
}), iy = wg;
function Pg(e) {
  return ye("MuiModal", e);
}
Ce("MuiModal", ["root", "hidden", "backdrop"]);
const Eg = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Tg = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Pg, o);
}, kg = H("div", {
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
})), Og = H(Gh, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ig = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s, i, a, l;
  const c = Se({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: u = Og,
    BackdropProps: h,
    className: f,
    closeAfterTransition: g = !1,
    children: b,
    container: m,
    component: y,
    components: S = {},
    componentsProps: w = {},
    disableAutoFocus: C = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: $ = !1,
    disablePortal: R = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: E = !1,
    hideBackdrop: O = !1,
    keepMounted: k = !1,
    onBackdropClick: N,
    open: A,
    slotProps: F,
    slots: z
    // eslint-disable-next-line react/prop-types
  } = c, B = V(c, Eg), M = p({}, c, {
    closeAfterTransition: g,
    disableAutoFocus: C,
    disableEnforceFocus: v,
    disableEscapeKeyDown: $,
    disablePortal: R,
    disableRestoreFocus: x,
    disableScrollLock: E,
    hideBackdrop: O,
    keepMounted: k
  }), {
    getRootProps: L,
    getBackdropProps: j,
    getTransitionProps: W,
    portalRef: ne,
    isTopModal: he,
    exited: Re,
    hasTransition: $e
  } = Jf(p({}, M, {
    rootRef: n
  })), G = p({}, M, {
    exited: Re
  }), Q = Tg(G), le = {};
  if (b.props.tabIndex === void 0 && (le.tabIndex = "-1"), $e) {
    const {
      onEnter: se,
      onExited: pe
    } = W();
    le.onEnter = se, le.onExited = pe;
  }
  const ke = (o = (r = z == null ? void 0 : z.root) != null ? r : S.Root) != null ? o : kg, ee = (s = (i = z == null ? void 0 : z.backdrop) != null ? i : S.Backdrop) != null ? s : u, re = (a = F == null ? void 0 : F.root) != null ? a : w.root, Ie = (l = F == null ? void 0 : F.backdrop) != null ? l : w.backdrop, ce = Et({
    elementType: ke,
    externalSlotProps: re,
    externalForwardedProps: B,
    getSlotProps: L,
    additionalProps: {
      ref: n,
      as: y
    },
    ownerState: G,
    className: Y(f, re == null ? void 0 : re.className, Q == null ? void 0 : Q.root, !G.open && G.exited && (Q == null ? void 0 : Q.hidden))
  }), ue = Et({
    elementType: ee,
    externalSlotProps: Ie,
    additionalProps: h,
    getSlotProps: (se) => j(p({}, se, {
      onClick: (pe) => {
        N && N(pe), se != null && se.onClick && se.onClick(pe);
      }
    })),
    className: Y(Ie == null ? void 0 : Ie.className, h == null ? void 0 : h.className, Q == null ? void 0 : Q.backdrop),
    ownerState: G
  });
  return !k && !A && (!$e || Re) ? null : /* @__PURE__ */ P.jsx(Wa, {
    ref: ne,
    container: m,
    disablePortal: R,
    children: /* @__PURE__ */ P.jsxs(ke, p({}, ce, {
      children: [!O && u ? /* @__PURE__ */ P.jsx(ee, p({}, ue)) : null, /* @__PURE__ */ P.jsx(jf, {
        disableEnforceFocus: v,
        disableAutoFocus: C,
        disableRestoreFocus: x,
        isEnabled: he,
        open: A,
        children: /* @__PURE__ */ d.cloneElement(b, le)
      })]
    }))
  });
}), Mg = Ig, Bg = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Ag = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, r = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Lh, t);
  return p({}, t, r);
}, Fg = H(Pr, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Rr(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const o = e.palette.mode === "light", r = o ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = o ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = o ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = o ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return p({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${Yt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
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
}), Lg = H(Er, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: wr
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
})), tl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s, i;
  const a = Se({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: c,
    fullWidth: u = !1,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: f = !1,
    slotProps: g,
    slots: b = {},
    type: m = "text"
  } = a, y = V(a, Bg), S = p({}, a, {
    fullWidth: u,
    inputComponent: h,
    multiline: f,
    type: m
  }), w = Ag(a), C = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, v = g ?? c ? ct(C, g ?? c) : C, $ = (o = (r = b.root) != null ? r : l.Root) != null ? o : Fg, R = (s = (i = b.input) != null ? i : l.Input) != null ? s : Lg;
  return /* @__PURE__ */ P.jsx(Ls, p({
    slots: {
      root: $,
      input: R
    },
    componentsProps: v,
    fullWidth: u,
    inputComponent: h,
    multiline: f,
    ref: n,
    type: m
  }, y, {
    classes: w
  }));
});
tl.muiName = "Input";
const nl = tl;
function Ng(e) {
  return ye("MuiFormControl", e);
}
Ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const zg = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], _g = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: o
  } = e, r = {
    root: ["root", n !== "none" && `margin${Z(n)}`, o && "fullWidth"]
  };
  return ve(r, Ng, t);
}, jg = H("div", {
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
})), Dg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiFormControl"
  }), {
    children: r,
    className: s,
    color: i = "primary",
    component: a = "div",
    disabled: l = !1,
    error: c = !1,
    focused: u,
    fullWidth: h = !1,
    hiddenLabel: f = !1,
    margin: g = "none",
    required: b = !1,
    size: m = "medium",
    variant: y = "outlined"
  } = o, S = V(o, zg), w = p({}, o, {
    color: i,
    component: a,
    disabled: l,
    error: c,
    fullWidth: h,
    hiddenLabel: f,
    margin: g,
    required: b,
    size: m,
    variant: y
  }), C = _g(w), [v, $] = d.useState(() => {
    let F = !1;
    return r && d.Children.forEach(r, (z) => {
      if (!Br(z, ["Input", "Select"]))
        return;
      const B = Br(z, ["Select"]) ? z.props.input : z;
      B && wh(B.props) && (F = !0);
    }), F;
  }), [R, x] = d.useState(() => {
    let F = !1;
    return r && d.Children.forEach(r, (z) => {
      Br(z, ["Input", "Select"]) && (Fo(z.props, !0) || Fo(z.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [E, O] = d.useState(!1);
  l && E && O(!1);
  const k = u !== void 0 && !l ? u : E;
  let N;
  const A = d.useMemo(() => ({
    adornedStart: v,
    setAdornedStart: $,
    color: i,
    disabled: l,
    error: c,
    filled: R,
    focused: k,
    fullWidth: h,
    hiddenLabel: f,
    size: m,
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
    registerEffect: N,
    required: b,
    variant: y
  }), [v, i, l, c, R, k, h, f, N, b, m, y]);
  return /* @__PURE__ */ P.jsx($r.Provider, {
    value: A,
    children: /* @__PURE__ */ P.jsx(jg, p({
      as: a,
      ownerState: w,
      className: Y(C.root, s),
      ref: n
    }, S, {
      children: r
    }))
  });
}), Wg = Dg, Hg = Sd({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => Se({
    props: e,
    name: "MuiStack"
  })
}), Ug = Hg;
function Vg(e) {
  return ye("MuiFormControlLabel", e);
}
const Kg = Ce("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), Un = Kg, qg = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], Gg = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: o,
    error: r,
    required: s
  } = e, i = {
    root: ["root", n && "disabled", `labelPlacement${Z(o)}`, r && "error", s && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", r && "error"]
  };
  return ve(i, Vg, t);
}, Xg = H("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Un.label}`]: t.label
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
  [`&.${Un.disabled}`]: {
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
  [`& .${Un.label}`]: {
    [`&.${Un.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), Yg = H("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Un.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Zg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const s = Se({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: i,
    componentsProps: a = {},
    control: l,
    disabled: c,
    disableTypography: u,
    label: h,
    labelPlacement: f = "end",
    required: g,
    slotProps: b = {}
  } = s, m = V(s, qg), y = jt(), S = (o = c ?? l.props.disabled) != null ? o : y == null ? void 0 : y.disabled, w = g ?? l.props.required, C = {
    disabled: S,
    required: w
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((O) => {
    typeof l.props[O] > "u" && typeof s[O] < "u" && (C[O] = s[O]);
  });
  const v = an({
    props: s,
    muiFormControl: y,
    states: ["error"]
  }), $ = p({}, s, {
    disabled: S,
    labelPlacement: f,
    required: w,
    error: v.error
  }), R = Gg($), x = (r = b.typography) != null ? r : a.typography;
  let E = h;
  return E != null && E.type !== Bo && !u && (E = /* @__PURE__ */ P.jsx(Bo, p({
    component: "span"
  }, x, {
    className: Y(R.label, x == null ? void 0 : x.className),
    children: E
  }))), /* @__PURE__ */ P.jsxs(Xg, p({
    className: Y(R.root, i),
    ownerState: $,
    ref: n
  }, m, {
    children: [/* @__PURE__ */ d.cloneElement(l, C), w ? /* @__PURE__ */ P.jsxs(Ug, {
      display: "block",
      children: [E, /* @__PURE__ */ P.jsxs(Yg, {
        ownerState: $,
        "aria-hidden": !0,
        className: R.asterisk,
        children: [" ", "*"]
      })]
    }) : E]
  }));
}), ay = Zg;
function Jg(e) {
  return ye("MuiFormHelperText", e);
}
const Qg = Ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Ni = Qg;
var zi;
const eb = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], tb = (e) => {
  const {
    classes: t,
    contained: n,
    size: o,
    disabled: r,
    error: s,
    filled: i,
    focused: a,
    required: l
  } = e, c = {
    root: ["root", r && "disabled", s && "error", o && `size${Z(o)}`, n && "contained", a && "focused", i && "filled", l && "required"]
  };
  return ve(c, Jg, t);
}, nb = H("p", {
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
  [`&.${Ni.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ni.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), ob = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: r,
    className: s,
    component: i = "p"
  } = o, a = V(o, eb), l = jt(), c = an({
    props: o,
    muiFormControl: l,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), u = p({}, o, {
    component: i,
    contained: c.variant === "filled" || c.variant === "outlined",
    variant: c.variant,
    size: c.size,
    disabled: c.disabled,
    error: c.error,
    filled: c.filled,
    focused: c.focused,
    required: c.required
  }), h = tb(u);
  return /* @__PURE__ */ P.jsx(nb, p({
    as: i,
    ownerState: u,
    className: Y(h.root, s),
    ref: n
  }, a, {
    children: r === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      zi || (zi = /* @__PURE__ */ P.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : r
  }));
}), rb = ob;
function sb(e) {
  return ye("MuiFormLabel", e);
}
const ib = Ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Zn = ib, ab = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], lb = (e) => {
  const {
    classes: t,
    color: n,
    focused: o,
    disabled: r,
    error: s,
    filled: i,
    required: a
  } = e, l = {
    root: ["root", `color${Z(n)}`, r && "disabled", s && "error", i && "filled", o && "focused", a && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return ve(l, sb, t);
}, cb = H("label", {
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
  [`&.${Zn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Zn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Zn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), ub = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Zn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), db = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: r,
    className: s,
    component: i = "label"
  } = o, a = V(o, ab), l = jt(), c = an({
    props: o,
    muiFormControl: l,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), u = p({}, o, {
    color: c.color || "primary",
    component: i,
    disabled: c.disabled,
    error: c.error,
    filled: c.filled,
    focused: c.focused,
    required: c.required
  }), h = lb(u);
  return /* @__PURE__ */ P.jsxs(cb, p({
    as: i,
    ownerState: u,
    className: Y(h.root, s),
    ref: n
  }, a, {
    children: [r, c.required && /* @__PURE__ */ P.jsxs(ub, {
      ownerState: u,
      "aria-hidden": !0,
      className: h.asterisk,
      children: [" ", "*"]
    })]
  }));
}), pb = db, fb = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function rs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const mb = {
  entering: {
    opacity: 1,
    transform: rs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, jr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ol = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: r = !0,
    children: s,
    easing: i,
    in: a,
    onEnter: l,
    onEntered: c,
    onEntering: u,
    onExit: h,
    onExited: f,
    onExiting: g,
    style: b,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Na
  } = t, S = V(t, fb), w = gn(), C = d.useRef(), v = Tn(), $ = d.useRef(null), R = Je($, s.ref, n), x = (B) => (M) => {
    if (B) {
      const L = $.current;
      M === void 0 ? B(L) : B(L, M);
    }
  }, E = x(u), O = x((B, M) => {
    za(B);
    const {
      duration: L,
      delay: j,
      easing: W
    } = Io({
      style: b,
      timeout: m,
      easing: i
    }, {
      mode: "enter"
    });
    let ne;
    m === "auto" ? (ne = v.transitions.getAutoHeightDuration(B.clientHeight), C.current = ne) : ne = L, B.style.transition = [v.transitions.create("opacity", {
      duration: ne,
      delay: j
    }), v.transitions.create("transform", {
      duration: jr ? ne : ne * 0.666,
      delay: j,
      easing: W
    })].join(","), l && l(B, M);
  }), k = x(c), N = x(g), A = x((B) => {
    const {
      duration: M,
      delay: L,
      easing: j
    } = Io({
      style: b,
      timeout: m,
      easing: i
    }, {
      mode: "exit"
    });
    let W;
    m === "auto" ? (W = v.transitions.getAutoHeightDuration(B.clientHeight), C.current = W) : W = M, B.style.transition = [v.transitions.create("opacity", {
      duration: W,
      delay: L
    }), v.transitions.create("transform", {
      duration: jr ? W : W * 0.666,
      delay: jr ? L : L || W * 0.333,
      easing: j
    })].join(","), B.style.opacity = 0, B.style.transform = rs(0.75), h && h(B);
  }), F = x(f), z = (B) => {
    m === "auto" && w.start(C.current || 0, B), o && o($.current, B);
  };
  return /* @__PURE__ */ P.jsx(y, p({
    appear: r,
    in: a,
    nodeRef: $,
    onEnter: O,
    onEntered: k,
    onEntering: E,
    onExit: A,
    onExited: F,
    onExiting: N,
    addEndListener: z,
    timeout: m === "auto" ? null : m
  }, S, {
    children: (B, M) => /* @__PURE__ */ d.cloneElement(s, p({
      style: p({
        opacity: 0,
        transform: rs(0.75),
        visibility: B === "exited" && !a ? "hidden" : void 0
      }, mb[B], b, s.props.style),
      ref: R
    }, M))
  }));
});
ol.muiSupportAuto = !0;
const ss = ol, hb = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], gb = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, r = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Mh, t);
  return p({}, t, r);
}, bb = H(Pr, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Rr(e, t), !n.disableUnderline && t.underline];
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
    [`&.${zn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${zn.error}`]: {
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
    [`&:hover:not(.${zn.disabled}, .${zn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${o}`
      }
    },
    [`&.${zn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), vb = H(Er, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: wr
})({}), rl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s, i;
  const a = Se({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: c = {},
    componentsProps: u,
    fullWidth: h = !1,
    inputComponent: f = "input",
    multiline: g = !1,
    slotProps: b,
    slots: m = {},
    type: y = "text"
  } = a, S = V(a, hb), w = gb(a), v = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, $ = b ?? u ? ct(b ?? u, v) : v, R = (o = (r = m.root) != null ? r : c.Root) != null ? o : bb, x = (s = (i = m.input) != null ? i : c.Input) != null ? s : vb;
  return /* @__PURE__ */ P.jsx(Ls, p({
    slots: {
      root: R,
      input: x
    },
    slotProps: $,
    fullWidth: h,
    inputComponent: f,
    multiline: g,
    ref: n,
    type: y
  }, S, {
    classes: w
  }));
});
rl.muiName = "Input";
const sl = rl;
function yb(e) {
  return ye("MuiInputAdornment", e);
}
const xb = Ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), _i = xb;
var ji;
const Cb = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], Sb = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${Z(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, $b = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: o,
    position: r,
    size: s,
    variant: i
  } = e, a = {
    root: ["root", n && "disablePointerEvents", r && `position${Z(r)}`, i, o && "hiddenLabel", s && `size${Z(s)}`]
  };
  return ve(a, yb, t);
}, Rb = H("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: Sb
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
  [`&.${_i.positionStart}&:not(.${_i.hiddenLabel})`]: {
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
})), wb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: r,
    className: s,
    component: i = "div",
    disablePointerEvents: a = !1,
    disableTypography: l = !1,
    position: c,
    variant: u
  } = o, h = V(o, Cb), f = jt() || {};
  let g = u;
  u && f.variant, f && !g && (g = f.variant);
  const b = p({}, o, {
    hiddenLabel: f.hiddenLabel,
    size: f.size,
    disablePointerEvents: a,
    position: c,
    variant: g
  }), m = $b(b);
  return /* @__PURE__ */ P.jsx($r.Provider, {
    value: null,
    children: /* @__PURE__ */ P.jsx(Rb, p({
      as: i,
      ownerState: b,
      className: Y(m.root, s),
      ref: n
    }, h, {
      children: typeof r == "string" && !l ? /* @__PURE__ */ P.jsx(Bo, {
        color: "text.secondary",
        children: r
      }) : /* @__PURE__ */ P.jsxs(d.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          ji || (ji = /* @__PURE__ */ P.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, r]
      })
    }))
  });
}), ly = wb;
function Pb(e) {
  return ye("MuiInputLabel", e);
}
Ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Eb = ["disableAnimation", "margin", "shrink", "variant", "className"], Tb = (e) => {
  const {
    classes: t,
    formControl: n,
    size: o,
    shrink: r,
    disableAnimation: s,
    variant: i,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !s && "animated", r && "shrink", o && o !== "normal" && `size${Z(o)}`, i],
    asterisk: [a && "asterisk"]
  }, c = ve(l, Pb, t);
  return p({}, t, c);
}, kb = H(pb, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Zn.asterisk}`]: t.asterisk
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
}))), Ob = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: r = !1,
    shrink: s,
    className: i
  } = o, a = V(o, Eb), l = jt();
  let c = s;
  typeof c > "u" && l && (c = l.filled || l.focused || l.adornedStart);
  const u = an({
    props: o,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), h = p({}, o, {
    disableAnimation: r,
    formControl: l,
    shrink: c,
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }), f = Tb(h);
  return /* @__PURE__ */ P.jsx(kb, p({
    "data-shrink": c,
    ownerState: h,
    ref: n,
    className: Y(f.root, i)
  }, a, {
    classes: f
  }));
}), Ib = Ob, Mb = /* @__PURE__ */ d.createContext({}), Bb = Mb;
function Ab(e) {
  return ye("MuiList", e);
}
Ce("MuiList", ["root", "padding", "dense", "subheader"]);
const Fb = ["children", "className", "component", "dense", "disablePadding", "subheader"], Lb = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: r
  } = e;
  return ve({
    root: ["root", !n && "padding", o && "dense", r && "subheader"]
  }, Ab, t);
}, Nb = H("ul", {
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
})), zb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiList"
  }), {
    children: r,
    className: s,
    component: i = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: c
  } = o, u = V(o, Fb), h = d.useMemo(() => ({
    dense: a
  }), [a]), f = p({}, o, {
    component: i,
    dense: a,
    disablePadding: l
  }), g = Lb(f);
  return /* @__PURE__ */ P.jsx(Bb.Provider, {
    value: h,
    children: /* @__PURE__ */ P.jsxs(Nb, p({
      as: i,
      className: Y(g.root, s),
      ref: n,
      ownerState: f
    }, u, {
      children: [c, r]
    }))
  });
}), _b = zb, jb = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Dr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Di(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function il(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function _n(e, t, n, o, r, s) {
  let i = !1, a = r(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (i)
        return !1;
      i = !0;
    }
    const l = o ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !il(a, s) || l)
      a = r(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Db = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: r = !1,
    autoFocusItem: s = !1,
    children: i,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: c = !1,
    onKeyDown: u,
    variant: h = "selectedMenu"
  } = t, f = V(t, jb), g = d.useRef(null), b = d.useRef({
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
        const R = `${Sa(Ze(C))}px`;
        g.current.style[v.direction === "rtl" ? "paddingLeft" : "paddingRight"] = R, g.current.style.width = `calc(100% + ${R})`;
      }
      return g.current;
    }
  }), []);
  const m = (C) => {
    const v = g.current, $ = C.key, R = Ze(v).activeElement;
    if ($ === "ArrowDown")
      C.preventDefault(), _n(v, R, c, l, Dr);
    else if ($ === "ArrowUp")
      C.preventDefault(), _n(v, R, c, l, Di);
    else if ($ === "Home")
      C.preventDefault(), _n(v, null, c, l, Dr);
    else if ($ === "End")
      C.preventDefault(), _n(v, null, c, l, Di);
    else if ($.length === 1) {
      const x = b.current, E = $.toLowerCase(), O = performance.now();
      x.keys.length > 0 && (O - x.lastTime > 500 ? (x.keys = [], x.repeating = !0, x.previousKeyMatched = !0) : x.repeating && E !== x.keys[0] && (x.repeating = !1)), x.lastTime = O, x.keys.push(E);
      const k = R && !x.repeating && il(R, x);
      x.previousKeyMatched && (k || _n(v, R, !1, l, Dr, x)) ? C.preventDefault() : x.previousKeyMatched = !1;
    }
    u && u(C);
  }, y = Je(g, n);
  let S = -1;
  d.Children.forEach(i, (C, v) => {
    if (!/* @__PURE__ */ d.isValidElement(C)) {
      S === v && (S += 1, S >= i.length && (S = -1));
      return;
    }
    C.props.disabled || (h === "selectedMenu" && C.props.selected || S === -1) && (S = v), S === v && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (S += 1, S >= i.length && (S = -1));
  });
  const w = d.Children.map(i, (C, v) => {
    if (v === S) {
      const $ = {};
      return s && ($.autoFocus = !0), C.props.tabIndex === void 0 && h === "selectedMenu" && ($.tabIndex = 0), /* @__PURE__ */ d.cloneElement(C, $);
    }
    return C;
  });
  return /* @__PURE__ */ P.jsx(_b, p({
    role: "menu",
    ref: y,
    className: a,
    onKeyDown: m,
    tabIndex: r ? 0 : -1
  }, f, {
    children: w
  }));
}), Wb = Db;
function Hb(e) {
  return ye("MuiPopover", e);
}
Ce("MuiPopover", ["root", "paper"]);
const Ub = ["onEntering"], Vb = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Kb = ["slotProps"];
function Wi(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Hi(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ui(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Wr(e) {
  return typeof e == "function" ? e() : e;
}
const qb = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, Hb, t);
}, Gb = H(Mg, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), al = H(_a, {
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
}), Xb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s;
  const i = Se({
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
    anchorReference: h = "anchorEl",
    children: f,
    className: g,
    container: b,
    elevation: m = 8,
    marginThreshold: y = 16,
    open: S,
    PaperProps: w = {},
    slots: C,
    slotProps: v,
    transformOrigin: $ = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: R = ss,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: E
    } = {},
    disableScrollLock: O = !1
  } = i, k = V(i.TransitionProps, Ub), N = V(i, Vb), A = (o = v == null ? void 0 : v.paper) != null ? o : w, F = d.useRef(), z = Je(F, A.ref), B = p({}, i, {
    anchorOrigin: c,
    anchorReference: h,
    elevation: m,
    marginThreshold: y,
    externalPaperSlotProps: A,
    transformOrigin: $,
    TransitionComponent: R,
    transitionDuration: x,
    TransitionProps: k
  }), M = qb(B), L = d.useCallback(() => {
    if (h === "anchorPosition")
      return u;
    const se = Wr(l), te = (se && se.nodeType === 1 ? se : Ze(F.current).body).getBoundingClientRect();
    return {
      top: te.top + Wi(te, c.vertical),
      left: te.left + Hi(te, c.horizontal)
    };
  }, [l, c.horizontal, c.vertical, u, h]), j = d.useCallback((se) => ({
    vertical: Wi(se, $.vertical),
    horizontal: Hi(se, $.horizontal)
  }), [$.horizontal, $.vertical]), W = d.useCallback((se) => {
    const pe = {
      width: se.offsetWidth,
      height: se.offsetHeight
    }, te = j(pe);
    if (h === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ui(te)
      };
    const K = L();
    let Me = K.top - te.vertical, J = K.left - te.horizontal;
    const Ne = Me + pe.height, xe = J + pe.width, me = Nt(Wr(l)), Le = me.innerHeight - y, Pe = me.innerWidth - y;
    if (y !== null && Me < y) {
      const ge = Me - y;
      Me -= ge, te.vertical += ge;
    } else if (y !== null && Ne > Le) {
      const ge = Ne - Le;
      Me -= ge, te.vertical += ge;
    }
    if (y !== null && J < y) {
      const ge = J - y;
      J -= ge, te.horizontal += ge;
    } else if (xe > Pe) {
      const ge = xe - Pe;
      J -= ge, te.horizontal += ge;
    }
    return {
      top: `${Math.round(Me)}px`,
      left: `${Math.round(J)}px`,
      transformOrigin: Ui(te)
    };
  }, [l, h, L, j, y]), [ne, he] = d.useState(S), Re = d.useCallback(() => {
    const se = F.current;
    if (!se)
      return;
    const pe = W(se);
    pe.top !== null && (se.style.top = pe.top), pe.left !== null && (se.style.left = pe.left), se.style.transformOrigin = pe.transformOrigin, he(!0);
  }, [W]);
  d.useEffect(() => (O && window.addEventListener("scroll", Re), () => window.removeEventListener("scroll", Re)), [l, O, Re]);
  const $e = (se, pe) => {
    E && E(se, pe), Re();
  }, G = () => {
    he(!1);
  };
  d.useEffect(() => {
    S && Re();
  }), d.useImperativeHandle(a, () => S ? {
    updatePosition: () => {
      Re();
    }
  } : null, [S, Re]), d.useEffect(() => {
    if (!S)
      return;
    const se = ar(() => {
      Re();
    }), pe = Nt(l);
    return pe.addEventListener("resize", se), () => {
      se.clear(), pe.removeEventListener("resize", se);
    };
  }, [l, S, Re]);
  let Q = x;
  x === "auto" && !R.muiSupportAuto && (Q = void 0);
  const le = b || (l ? Ze(Wr(l)).body : void 0), ke = (r = C == null ? void 0 : C.root) != null ? r : Gb, ee = (s = C == null ? void 0 : C.paper) != null ? s : al, re = Et({
    elementType: ee,
    externalSlotProps: p({}, A, {
      style: ne ? A.style : p({}, A.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: m,
      ref: z
    },
    ownerState: B,
    className: Y(M.paper, A == null ? void 0 : A.className)
  }), Ie = Et({
    elementType: ke,
    externalSlotProps: (v == null ? void 0 : v.root) || {},
    externalForwardedProps: N,
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
    className: Y(M.root, g)
  }), {
    slotProps: ce
  } = Ie, ue = V(Ie, Kb);
  return /* @__PURE__ */ P.jsx(ke, p({}, ue, !Mo(ke) && {
    slotProps: ce,
    disableScrollLock: O
  }, {
    children: /* @__PURE__ */ P.jsx(R, p({
      appear: !0,
      in: S,
      onEntering: $e,
      onExited: G,
      timeout: Q
    }, k, {
      children: /* @__PURE__ */ P.jsx(ee, p({}, re, {
        children: f
      }))
    }))
  }));
}), Yb = Xb;
function Zb(e) {
  return ye("MuiMenu", e);
}
Ce("MuiMenu", ["root", "paper", "list"]);
const Jb = ["onEntering"], Qb = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], ev = {
  vertical: "top",
  horizontal: "right"
}, tv = {
  vertical: "top",
  horizontal: "left"
}, nv = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Zb, t);
}, ov = H(Yb, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rv = H(al, {
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
}), sv = H(Wb, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), iv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const s = Se({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: a,
    className: l,
    disableAutoFocusItem: c = !1,
    MenuListProps: u = {},
    onClose: h,
    open: f,
    PaperProps: g = {},
    PopoverClasses: b,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: y
    } = {},
    variant: S = "selectedMenu",
    slots: w = {},
    slotProps: C = {}
  } = s, v = V(s.TransitionProps, Jb), $ = V(s, Qb), R = Tn(), x = R.direction === "rtl", E = p({}, s, {
    autoFocus: i,
    disableAutoFocusItem: c,
    MenuListProps: u,
    onEntering: y,
    PaperProps: g,
    transitionDuration: m,
    TransitionProps: v,
    variant: S
  }), O = nv(E), k = i && !c && f, N = d.useRef(null), A = (W, ne) => {
    N.current && N.current.adjustStyleForScrollbar(W, R), y && y(W, ne);
  }, F = (W) => {
    W.key === "Tab" && (W.preventDefault(), h && h(W, "tabKeyDown"));
  };
  let z = -1;
  d.Children.map(a, (W, ne) => {
    /* @__PURE__ */ d.isValidElement(W) && (W.props.disabled || (S === "selectedMenu" && W.props.selected || z === -1) && (z = ne));
  });
  const B = (o = w.paper) != null ? o : rv, M = (r = C.paper) != null ? r : g, L = Et({
    elementType: w.root,
    externalSlotProps: C.root,
    ownerState: E,
    className: [O.root, l]
  }), j = Et({
    elementType: B,
    externalSlotProps: M,
    ownerState: E,
    className: O.paper
  });
  return /* @__PURE__ */ P.jsx(ov, p({
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? ev : tv,
    slots: {
      paper: B,
      root: w.root
    },
    slotProps: {
      root: L,
      paper: j
    },
    open: f,
    ref: n,
    transitionDuration: m,
    TransitionProps: p({
      onEntering: A
    }, v),
    ownerState: E
  }, $, {
    classes: b,
    children: /* @__PURE__ */ P.jsx(sv, p({
      onKeyDown: F,
      actions: N,
      autoFocus: i && (z === -1 || c),
      autoFocusItem: k,
      variant: S
    }, u, {
      className: Y(O.list, u.className),
      children: a
    }))
  }));
}), av = iv;
function lv(e) {
  return ye("MuiNativeSelect", e);
}
const cv = Ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ns = cv, uv = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], dv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: r,
    open: s,
    error: i
  } = e, a = {
    select: ["select", n, o && "disabled", r && "multiple", i && "error"],
    icon: ["icon", `icon${Z(n)}`, s && "iconOpen", o && "disabled"]
  };
  return ve(a, lv, t);
}, ll = ({
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
  [`&.${Ns.disabled}`]: {
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
}), pv = H("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: vt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Ns.multiple}`]: t.multiple
    }];
  }
})(ll), cl = ({
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
  [`&.${Ns.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), fv = H("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})(cl), mv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    className: o,
    disabled: r,
    error: s,
    IconComponent: i,
    inputRef: a,
    variant: l = "standard"
  } = t, c = V(t, uv), u = p({}, t, {
    disabled: r,
    variant: l,
    error: s
  }), h = dv(u);
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx(pv, p({
      ownerState: u,
      className: Y(h.select, o),
      disabled: r,
      ref: a || n
    }, c)), t.multiple ? null : /* @__PURE__ */ P.jsx(fv, {
      as: i,
      ownerState: u,
      className: h.icon
    })]
  });
}), hv = mv;
var Vi;
const gv = ["children", "classes", "className", "label", "notched"], bv = H("fieldset", {
  shouldForwardProp: vt
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
}), vv = H("legend", {
  shouldForwardProp: vt
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
function yv(e) {
  const {
    className: t,
    label: n,
    notched: o
  } = e, r = V(e, gv), s = n != null && n !== "", i = p({}, e, {
    notched: o,
    withLabel: s
  });
  return /* @__PURE__ */ P.jsx(bv, p({
    "aria-hidden": !0,
    className: t,
    ownerState: i
  }, r, {
    children: /* @__PURE__ */ P.jsx(vv, {
      ownerState: i,
      children: s ? /* @__PURE__ */ P.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Vi || (Vi = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const xv = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Cv = (e) => {
  const {
    classes: t
  } = e, o = ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Ah, t);
  return p({}, t, o);
}, Sv = H(Pr, {
  shouldForwardProp: (e) => vt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Rr
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return p({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Wt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Wt.focused} .${Wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Wt.error} .${Wt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Wt.disabled} .${Wt.notchedOutline}`]: {
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
}), $v = H(yv, {
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
}), Rv = H(Er, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: wr
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
})), ul = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s, i, a;
  const l = Se({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: c = {},
    fullWidth: u = !1,
    inputComponent: h = "input",
    label: f,
    multiline: g = !1,
    notched: b,
    slots: m = {},
    type: y = "text"
  } = l, S = V(l, xv), w = Cv(l), C = jt(), v = an({
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
  }), R = (o = (r = m.root) != null ? r : c.Root) != null ? o : Sv, x = (s = (i = m.input) != null ? i : c.Input) != null ? s : Rv;
  return /* @__PURE__ */ P.jsx(Ls, p({
    slots: {
      root: R,
      input: x
    },
    renderSuffix: (E) => /* @__PURE__ */ P.jsx($v, {
      ownerState: $,
      className: w.notchedOutline,
      label: f != null && f !== "" && v.required ? a || (a = /* @__PURE__ */ P.jsxs(d.Fragment, {
        children: [f, " ", "*"]
      })) : f,
      notched: typeof b < "u" ? b : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: u,
    inputComponent: h,
    multiline: g,
    ref: n,
    type: y
  }, S, {
    classes: p({}, w, {
      notchedOutline: null
    })
  }));
});
ul.muiName = "Input";
const dl = ul;
function wv(e) {
  return ye("MuiSelect", e);
}
const Pv = Ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), jn = Pv;
var Ki;
const Ev = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Tv = H("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${jn.select}`]: t.select
      },
      {
        [`&.${jn.select}`]: t[n.variant]
      },
      {
        [`&.${jn.error}`]: t.error
      },
      {
        [`&.${jn.multiple}`]: t.multiple
      }
    ];
  }
})(ll, {
  // Win specificity over the input base
  [`&.${jn.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), kv = H("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
  }
})(cl), Ov = H("input", {
  shouldForwardProp: (e) => sp(e) && e !== "classes",
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
function qi(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Iv(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Mv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: r,
    open: s,
    error: i
  } = e, a = {
    select: ["select", n, o && "disabled", r && "multiple", i && "error"],
    icon: ["icon", `icon${Z(n)}`, s && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ve(a, wv, t);
}, Bv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const {
    "aria-describedby": r,
    "aria-label": s,
    autoFocus: i,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: h,
    disabled: f,
    displayEmpty: g,
    error: b = !1,
    IconComponent: m,
    inputRef: y,
    labelId: S,
    MenuProps: w = {},
    multiple: C,
    name: v,
    onBlur: $,
    onChange: R,
    onClose: x,
    onFocus: E,
    onOpen: O,
    open: k,
    readOnly: N,
    renderValue: A,
    SelectDisplayProps: F = {},
    tabIndex: z,
    value: B,
    variant: M = "standard"
  } = t, L = V(t, Ev), [j, W] = tn({
    controlled: B,
    default: h,
    name: "Select"
  }), [ne, he] = tn({
    controlled: k,
    default: u,
    name: "Select"
  }), Re = d.useRef(null), $e = d.useRef(null), [G, Q] = d.useState(null), {
    current: le
  } = d.useRef(k != null), [ke, ee] = d.useState(), re = Je(n, y), Ie = d.useCallback((X) => {
    $e.current = X, X && Q(X);
  }, []), ce = G == null ? void 0 : G.parentNode;
  d.useImperativeHandle(re, () => ({
    focus: () => {
      $e.current.focus();
    },
    node: Re.current,
    value: j
  }), [j]), d.useEffect(() => {
    u && ne && G && !le && (ee(a ? null : ce.clientWidth), $e.current.focus());
  }, [G, a]), d.useEffect(() => {
    i && $e.current.focus();
  }, [i]), d.useEffect(() => {
    if (!S)
      return;
    const X = Ze($e.current).getElementById(S);
    if (X) {
      const de = () => {
        getSelection().isCollapsed && $e.current.focus();
      };
      return X.addEventListener("click", de), () => {
        X.removeEventListener("click", de);
      };
    }
  }, [S]);
  const ue = (X, de) => {
    X ? O && O(de) : x && x(de), le || (ee(a ? null : ce.clientWidth), he(X));
  }, se = (X) => {
    X.button === 0 && (X.preventDefault(), $e.current.focus(), ue(!0, X));
  }, pe = (X) => {
    ue(!1, X);
  }, te = d.Children.toArray(l), K = (X) => {
    const de = te.find((_) => _.props.value === X.target.value);
    de !== void 0 && (W(de.props.value), R && R(X, de));
  }, Me = (X) => (de) => {
    let _;
    if (de.currentTarget.hasAttribute("tabindex")) {
      if (C) {
        _ = Array.isArray(j) ? j.slice() : [];
        const q = j.indexOf(X.props.value);
        q === -1 ? _.push(X.props.value) : _.splice(q, 1);
      } else
        _ = X.props.value;
      if (X.props.onClick && X.props.onClick(de), j !== _ && (W(_), R)) {
        const q = de.nativeEvent || de, fe = new q.constructor(q.type, q);
        Object.defineProperty(fe, "target", {
          writable: !0,
          value: {
            value: _,
            name: v
          }
        }), R(fe, X);
      }
      C || ue(!1, de);
    }
  }, J = (X) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(X.key) !== -1 && (X.preventDefault(), ue(!0, X));
  }, Ne = G !== null && ne, xe = (X) => {
    !Ne && $ && (Object.defineProperty(X, "target", {
      writable: !0,
      value: {
        value: j,
        name: v
      }
    }), $(X));
  };
  delete L["aria-invalid"];
  let me, Le;
  const Pe = [];
  let ge = !1;
  (Fo({
    value: j
  }) || g) && (A ? me = A(j) : ge = !0);
  const Ue = te.map((X) => {
    if (!/* @__PURE__ */ d.isValidElement(X))
      return null;
    let de;
    if (C) {
      if (!Array.isArray(j))
        throw new Error(Lt(2));
      de = j.some((_) => qi(_, X.props.value)), de && ge && Pe.push(X.props.children);
    } else
      de = qi(j, X.props.value), de && ge && (Le = X.props.children);
    return /* @__PURE__ */ d.cloneElement(X, {
      "aria-selected": de ? "true" : "false",
      onClick: Me(X),
      onKeyUp: (_) => {
        _.key === " " && _.preventDefault(), X.props.onKeyUp && X.props.onKeyUp(_);
      },
      role: "option",
      selected: de,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": X.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ge && (C ? Pe.length === 0 ? me = null : me = Pe.reduce((X, de, _) => (X.push(de), _ < Pe.length - 1 && X.push(", "), X), []) : me = Le);
  let Ve = ke;
  !a && le && G && (Ve = ce.clientWidth);
  let Ge;
  typeof z < "u" ? Ge = z : Ge = f ? null : 0;
  const ie = F.id || (v ? `mui-component-select-${v}` : void 0), D = p({}, t, {
    variant: M,
    value: j,
    open: Ne,
    error: b
  }), we = Mv(D), Qe = p({}, w.PaperProps, (o = w.slotProps) == null ? void 0 : o.paper), et = lr();
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ P.jsx(Tv, p({
      ref: Ie,
      tabIndex: Ge,
      role: "combobox",
      "aria-controls": et,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Ne ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [S, ie].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: J,
      onMouseDown: f || N ? null : se,
      onBlur: xe,
      onFocus: E
    }, F, {
      ownerState: D,
      className: Y(F.className, we.select, c),
      id: ie,
      children: Iv(me) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ki || (Ki = /* @__PURE__ */ P.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : me
    })), /* @__PURE__ */ P.jsx(Ov, p({
      "aria-invalid": b,
      value: Array.isArray(j) ? j.join(",") : j,
      name: v,
      ref: Re,
      "aria-hidden": !0,
      onChange: K,
      tabIndex: -1,
      disabled: f,
      className: we.nativeInput,
      autoFocus: i,
      ownerState: D
    }, L)), /* @__PURE__ */ P.jsx(kv, {
      as: m,
      className: we.icon,
      ownerState: D
    }), /* @__PURE__ */ P.jsx(av, p({
      id: `menu-${v || ""}`,
      anchorEl: ce,
      open: Ne,
      onClose: pe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, w, {
      MenuListProps: p({
        "aria-labelledby": S,
        role: "listbox",
        "aria-multiselectable": C ? "true" : void 0,
        disableListWrap: !0,
        id: et
      }, w.MenuListProps),
      slotProps: p({}, w.slotProps, {
        paper: p({}, Qe, {
          style: p({
            minWidth: Ve
          }, Qe != null ? Qe.style : null)
        })
      }),
      children: Ue
    }))]
  });
}), Av = Bv, Fv = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Lv = ["root"], Nv = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, zs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => vt(e) && e !== "variant",
  slot: "Root"
}, zv = H(sl, zs)(""), _v = H(dl, zs)(""), jv = H(nl, zs)(""), pl = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: r = !1,
    children: s,
    classes: i = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: c = !1,
    IconComponent: u = zh,
    id: h,
    input: f,
    inputProps: g,
    label: b,
    labelId: m,
    MenuProps: y,
    multiple: S = !1,
    native: w = !1,
    onClose: C,
    onOpen: v,
    open: $,
    renderValue: R,
    SelectDisplayProps: x,
    variant: E = "outlined"
  } = o, O = V(o, Fv), k = w ? hv : Av, N = jt(), A = an({
    props: o,
    muiFormControl: N,
    states: ["variant", "error"]
  }), F = A.variant || E, z = p({}, o, {
    variant: F,
    classes: i
  }), B = Nv(z), M = V(B, Lv), L = f || {
    standard: /* @__PURE__ */ P.jsx(zv, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ P.jsx(_v, {
      label: b,
      ownerState: z
    }),
    filled: /* @__PURE__ */ P.jsx(jv, {
      ownerState: z
    })
  }[F], j = Je(n, L.ref);
  return /* @__PURE__ */ P.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(L, p({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: k,
      inputProps: p({
        children: s,
        error: A.error,
        IconComponent: u,
        variant: F,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: S
      }, w ? {
        id: h
      } : {
        autoWidth: r,
        defaultOpen: l,
        displayEmpty: c,
        labelId: m,
        MenuProps: y,
        onClose: C,
        onOpen: v,
        open: $,
        renderValue: R,
        SelectDisplayProps: p({
          id: h
        }, x)
      }, g, {
        classes: g ? ct(M, g.classes) : M
      }, f ? f.props.inputProps : {})
    }, (S && w || c) && F === "outlined" ? {
      notched: !0
    } : {}, {
      ref: j,
      className: Y(L.props.className, a, B.root)
    }, !f && {
      variant: F
    }, O))
  });
});
pl.muiName = "Select";
const Dv = pl;
function Wv(e) {
  return ye("MuiTooltip", e);
}
const Hv = Ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ut = Hv, Uv = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Vv(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Kv = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: o,
    touch: r,
    placement: s
  } = e, i = {
    popper: ["popper", !n && "popperInteractive", o && "popperArrow"],
    tooltip: ["tooltip", o && "tooltipArrow", r && "touch", `tooltipPlacement${Z(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ve(i, Wv, t);
}, qv = H(Qa, {
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
})), Gv = H("div", {
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
  lineHeight: `${Vv(16 / 14)}em`,
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
})), Xv = H("span", {
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
let yo = !1;
const Gi = new io();
let Dn = {
  x: 0,
  y: 0
};
function xo(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const Yv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, s, i, a, l, c, u, h, f, g, b, m, y, S, w, C, v, $;
  const R = Se({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: x = !1,
    children: E,
    components: O = {},
    componentsProps: k = {},
    describeChild: N = !1,
    disableFocusListener: A = !1,
    disableHoverListener: F = !1,
    disableInteractive: z = !1,
    disableTouchListener: B = !1,
    enterDelay: M = 100,
    enterNextDelay: L = 0,
    enterTouchDelay: j = 700,
    followCursor: W = !1,
    id: ne,
    leaveDelay: he = 0,
    leaveTouchDelay: Re = 1500,
    onClose: $e,
    onOpen: G,
    open: Q,
    placement: le = "bottom",
    PopperComponent: ke,
    PopperProps: ee = {},
    slotProps: re = {},
    slots: Ie = {},
    title: ce,
    TransitionComponent: ue = ss,
    TransitionProps: se
  } = R, pe = V(R, Uv), te = /* @__PURE__ */ d.isValidElement(E) ? E : /* @__PURE__ */ P.jsx("span", {
    children: E
  }), K = Tn(), Me = K.direction === "rtl", [J, Ne] = d.useState(), [xe, me] = d.useState(null), Le = d.useRef(!1), Pe = z || W, ge = gn(), Ue = gn(), Ve = gn(), Ge = gn(), [ie, D] = tn({
    controlled: Q,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let we = ie;
  const Qe = lr(ne), et = d.useRef(), X = it(() => {
    et.current !== void 0 && (document.body.style.WebkitUserSelect = et.current, et.current = void 0), Ge.clear();
  });
  d.useEffect(() => X, [X]);
  const de = (ae) => {
    Gi.clear(), yo = !0, D(!0), G && !we && G(ae);
  }, _ = it(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      Gi.start(800 + he, () => {
        yo = !1;
      }), D(!1), $e && we && $e(ae), ge.start(K.transitions.duration.shortest, () => {
        Le.current = !1;
      });
    }
  ), q = (ae) => {
    Le.current && ae.type !== "touchstart" || (J && J.removeAttribute("title"), Ue.clear(), Ve.clear(), M || yo && L ? Ue.start(yo ? L : M, () => {
      de(ae);
    }) : de(ae));
  }, fe = (ae) => {
    Ue.clear(), Ve.start(he, () => {
      _(ae);
    });
  }, {
    isFocusVisibleRef: be,
    onBlur: Oe,
    onFocus: je,
    ref: Ye
  } = Ca(), [, ft] = d.useState(!1), nt = (ae) => {
    Oe(ae), be.current === !1 && (ft(!1), fe(ae));
  }, Dt = (ae) => {
    J || Ne(ae.currentTarget), je(ae), be.current === !0 && (ft(!0), q(ae));
  }, On = (ae) => {
    Le.current = !0;
    const rt = te.props;
    rt.onTouchStart && rt.onTouchStart(ae);
  }, In = q, uo = fe, Tr = (ae) => {
    On(ae), Ve.clear(), ge.clear(), X(), et.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ge.start(j, () => {
      document.body.style.WebkitUserSelect = et.current, q(ae);
    });
  }, po = (ae) => {
    te.props.onTouchEnd && te.props.onTouchEnd(ae), X(), Ve.start(Re, () => {
      _(ae);
    });
  };
  d.useEffect(() => {
    if (!we)
      return;
    function ae(rt) {
      (rt.key === "Escape" || rt.key === "Esc") && _(rt);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [_, we]);
  const kr = Je(te.ref, Ye, Ne, n);
  !ce && ce !== 0 && (we = !1);
  const Mn = d.useRef(), Or = (ae) => {
    const rt = te.props;
    rt.onMouseMove && rt.onMouseMove(ae), Dn = {
      x: ae.clientX,
      y: ae.clientY
    }, Mn.current && Mn.current.update();
  }, Kt = {}, Bn = typeof ce == "string";
  N ? (Kt.title = !we && Bn && !F ? ce : null, Kt["aria-describedby"] = we ? Qe : null) : (Kt["aria-label"] = Bn ? ce : null, Kt["aria-labelledby"] = we && !Bn ? Qe : null);
  const lt = p({}, Kt, pe, te.props, {
    className: Y(pe.className, te.props.className),
    onTouchStart: On,
    ref: kr
  }, W ? {
    onMouseMove: Or
  } : {}), qt = {};
  B || (lt.onTouchStart = Tr, lt.onTouchEnd = po), F || (lt.onMouseOver = xo(In, lt.onMouseOver), lt.onMouseLeave = xo(uo, lt.onMouseLeave), Pe || (qt.onMouseOver = In, qt.onMouseLeave = uo)), A || (lt.onFocus = xo(Dt, lt.onFocus), lt.onBlur = xo(nt, lt.onBlur), Pe || (qt.onFocus = Dt, qt.onBlur = nt));
  const Ir = d.useMemo(() => {
    var ae;
    let rt = [{
      name: "arrow",
      enabled: !!xe,
      options: {
        element: xe,
        padding: 4
      }
    }];
    return (ae = ee.popperOptions) != null && ae.modifiers && (rt = rt.concat(ee.popperOptions.modifiers)), p({}, ee.popperOptions, {
      modifiers: rt
    });
  }, [xe, ee]), Gt = p({}, R, {
    isRtl: Me,
    arrow: x,
    disableInteractive: Pe,
    placement: le,
    PopperComponentProp: ke,
    touch: Le.current
  }), Xt = Kv(Gt), An = (o = (r = Ie.popper) != null ? r : O.Popper) != null ? o : qv, I = (s = (i = (a = Ie.transition) != null ? a : O.Transition) != null ? i : ue) != null ? s : ss, T = (l = (c = Ie.tooltip) != null ? c : O.Tooltip) != null ? l : Gv, U = (u = (h = Ie.arrow) != null ? h : O.Arrow) != null ? u : Xv, oe = Hn(An, p({}, ee, (f = re.popper) != null ? f : k.popper, {
    className: Y(Xt.popper, ee == null ? void 0 : ee.className, (g = (b = re.popper) != null ? b : k.popper) == null ? void 0 : g.className)
  }), Gt), Be = Hn(I, p({}, se, (m = re.transition) != null ? m : k.transition), Gt), De = Hn(T, p({}, (y = re.tooltip) != null ? y : k.tooltip, {
    className: Y(Xt.tooltip, (S = (w = re.tooltip) != null ? w : k.tooltip) == null ? void 0 : S.className)
  }), Gt), Ke = Hn(U, p({}, (C = re.arrow) != null ? C : k.arrow, {
    className: Y(Xt.arrow, (v = ($ = re.arrow) != null ? $ : k.arrow) == null ? void 0 : v.className)
  }), Gt);
  return /* @__PURE__ */ P.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ d.cloneElement(te, lt), /* @__PURE__ */ P.jsx(An, p({
      as: ke ?? Qa,
      placement: le,
      anchorEl: W ? {
        getBoundingClientRect: () => ({
          top: Dn.y,
          left: Dn.x,
          right: Dn.x,
          bottom: Dn.y,
          width: 0,
          height: 0
        })
      } : J,
      popperRef: Mn,
      open: J ? we : !1,
      id: Qe,
      transition: !0
    }, qt, oe, {
      popperOptions: Ir,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ P.jsx(I, p({
        timeout: K.transitions.duration.shorter
      }, ae, Be, {
        children: /* @__PURE__ */ P.jsxs(T, p({}, De, {
          children: [ce, x ? /* @__PURE__ */ P.jsx(U, p({}, Ke, {
            ref: me
          })) : null]
        }))
      }))
    }))]
  });
}), cy = Yv;
function Zv(e) {
  return ye("MuiTab", e);
}
const Jv = Ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), Zt = Jv, Qv = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], e0 = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: o,
    wrapped: r,
    icon: s,
    label: i,
    selected: a,
    disabled: l
  } = e, c = {
    root: ["root", s && i && "labelIcon", `textColor${Z(n)}`, o && "fullWidth", r && "wrapped", a && "selected", l && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return ve(c, Zv, t);
}, t0 = H(kn, {
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
})), n0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiTab"
  }), {
    className: r,
    disabled: s = !1,
    disableFocusRipple: i = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: a,
    icon: l,
    iconPosition: c = "top",
    // eslint-disable-next-line react/prop-types
    indicator: u,
    label: h,
    onChange: f,
    onClick: g,
    onFocus: b,
    // eslint-disable-next-line react/prop-types
    selected: m,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: y,
    // eslint-disable-next-line react/prop-types
    textColor: S = "inherit",
    value: w,
    wrapped: C = !1
  } = o, v = V(o, Qv), $ = p({}, o, {
    disabled: s,
    disableFocusRipple: i,
    selected: m,
    icon: !!l,
    iconPosition: c,
    label: !!h,
    fullWidth: a,
    textColor: S,
    wrapped: C
  }), R = e0($), x = l && h && /* @__PURE__ */ d.isValidElement(l) ? /* @__PURE__ */ d.cloneElement(l, {
    className: Y(R.iconWrapper, l.props.className)
  }) : l, E = (k) => {
    !m && f && f(k, w), g && g(k);
  }, O = (k) => {
    y && !m && f && f(k, w), b && b(k);
  };
  return /* @__PURE__ */ P.jsxs(t0, p({
    focusRipple: !i,
    className: Y(R.root, r),
    ref: n,
    role: "tab",
    "aria-selected": m,
    disabled: s,
    onClick: E,
    onFocus: O,
    ownerState: $,
    tabIndex: m ? 0 : -1
  }, v, {
    children: [c === "top" || c === "start" ? /* @__PURE__ */ P.jsxs(d.Fragment, {
      children: [x, h]
    }) : /* @__PURE__ */ P.jsxs(d.Fragment, {
      children: [h, x]
    }), u]
  }));
}), uy = n0, o0 = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), r0 = Tt(/* @__PURE__ */ P.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function s0(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function i0(e, t, n, o = {}, r = () => {
}) {
  const {
    ease: s = s0,
    duration: i = 300
    // standard
  } = o;
  let a = null;
  const l = t[e];
  let c = !1;
  const u = () => {
    c = !0;
  }, h = (f) => {
    if (c) {
      r(new Error("Animation cancelled"));
      return;
    }
    a === null && (a = f);
    const g = Math.min(1, (f - a) / i);
    if (t[e] = s(g) * (n - l) + l, g >= 1) {
      requestAnimationFrame(() => {
        r(null);
      });
      return;
    }
    requestAnimationFrame(h);
  };
  return l === n ? (r(new Error("Element already at target position")), u) : (requestAnimationFrame(h), u);
}
const a0 = ["onChange"], l0 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function c0(e) {
  const {
    onChange: t
  } = e, n = V(e, a0), o = d.useRef(), r = d.useRef(null), s = () => {
    o.current = r.current.offsetHeight - r.current.clientHeight;
  };
  return Bt(() => {
    const i = ar(() => {
      const l = o.current;
      s(), l !== o.current && t(o.current);
    }), a = Nt(r.current);
    return a.addEventListener("resize", i), () => {
      i.clear(), a.removeEventListener("resize", i);
    };
  }, [t]), d.useEffect(() => {
    s(), t(o.current);
  }, [t]), /* @__PURE__ */ P.jsx("div", p({
    style: l0,
    ref: r
  }, n));
}
function u0(e) {
  return ye("MuiTabScrollButton", e);
}
const d0 = Ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), p0 = d0, f0 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], m0 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: o
  } = e;
  return ve({
    root: ["root", n, o && "disabled"]
  }, u0, t);
}, h0 = H(kn, {
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
  [`&.${p0.disabled}`]: {
    opacity: 0
  }
}, e.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${e.isRtl ? -90 : 90}deg)`
  }
})), g0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const s = Se({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: i,
    slots: a = {},
    slotProps: l = {},
    direction: c
  } = s, u = V(s, f0), f = Tn().direction === "rtl", g = p({
    isRtl: f
  }, s), b = m0(g), m = (o = a.StartScrollButtonIcon) != null ? o : o0, y = (r = a.EndScrollButtonIcon) != null ? r : r0, S = Et({
    elementType: m,
    externalSlotProps: l.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  }), w = Et({
    elementType: y,
    externalSlotProps: l.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: g
  });
  return /* @__PURE__ */ P.jsx(h0, p({
    component: "div",
    className: Y(b.root, i),
    ref: n,
    role: null,
    ownerState: g,
    tabIndex: null
  }, u, {
    children: c === "left" ? /* @__PURE__ */ P.jsx(m, p({}, S)) : /* @__PURE__ */ P.jsx(y, p({}, w))
  }));
}), b0 = g0;
function v0(e) {
  return ye("MuiTabs", e);
}
const y0 = Ce("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), Hr = y0, x0 = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], Xi = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Yi = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, Co = (e, t, n) => {
  let o = !1, r = n(e, t);
  for (; r; ) {
    if (r === e.firstChild) {
      if (o)
        return;
      o = !0;
    }
    const s = r.disabled || r.getAttribute("aria-disabled") === "true";
    if (!r.hasAttribute("tabindex") || s)
      r = n(e, r);
    else {
      r.focus();
      return;
    }
  }
}, C0 = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: o,
    scrollableX: r,
    scrollableY: s,
    centered: i,
    scrollButtonsHideMobile: a,
    classes: l
  } = e;
  return ve({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", o && "hideScrollbar", r && "scrollableX", s && "scrollableY"],
    flexContainer: ["flexContainer", t && "flexContainerVertical", i && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", a && "scrollButtonsHideMobile"],
    scrollableX: [r && "scrollableX"],
    hideScrollbar: [o && "hideScrollbar"]
  }, v0, l);
}, S0 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Hr.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Hr.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
  [`& .${Hr.scrollButtons}`]: {
    [t.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), $0 = H("div", {
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
})), R0 = H("div", {
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
})), w0 = H("span", {
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
})), P0 = H(c0)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Zi = {}, E0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiTabs"
  }), r = Tn(), s = r.direction === "rtl", {
    "aria-label": i,
    "aria-labelledby": a,
    action: l,
    centered: c = !1,
    children: u,
    className: h,
    component: f = "div",
    allowScrollButtonsMobile: g = !1,
    indicatorColor: b = "primary",
    onChange: m,
    orientation: y = "horizontal",
    ScrollButtonComponent: S = b0,
    scrollButtons: w = "auto",
    selectionFollowsFocus: C,
    slots: v = {},
    slotProps: $ = {},
    TabIndicatorProps: R = {},
    TabScrollButtonProps: x = {},
    textColor: E = "primary",
    value: O,
    variant: k = "standard",
    visibleScrollbar: N = !1
  } = o, A = V(o, x0), F = k === "scrollable", z = y === "vertical", B = z ? "scrollTop" : "scrollLeft", M = z ? "top" : "left", L = z ? "bottom" : "right", j = z ? "clientHeight" : "clientWidth", W = z ? "height" : "width", ne = p({}, o, {
    component: f,
    allowScrollButtonsMobile: g,
    indicatorColor: b,
    orientation: y,
    vertical: z,
    scrollButtons: w,
    textColor: E,
    variant: k,
    visibleScrollbar: N,
    fixed: !F,
    hideScrollbar: F && !N,
    scrollableX: F && !z,
    scrollableY: F && z,
    centered: c && !F,
    scrollButtonsHideMobile: !g
  }), he = C0(ne), Re = Et({
    elementType: v.StartScrollButtonIcon,
    externalSlotProps: $.startScrollButtonIcon,
    ownerState: ne
  }), $e = Et({
    elementType: v.EndScrollButtonIcon,
    externalSlotProps: $.endScrollButtonIcon,
    ownerState: ne
  }), [G, Q] = d.useState(!1), [le, ke] = d.useState(Zi), [ee, re] = d.useState(!1), [Ie, ce] = d.useState(!1), [ue, se] = d.useState(!1), [pe, te] = d.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), K = /* @__PURE__ */ new Map(), Me = d.useRef(null), J = d.useRef(null), Ne = () => {
    const _ = Me.current;
    let q;
    if (_) {
      const be = _.getBoundingClientRect();
      q = {
        clientWidth: _.clientWidth,
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
        scrollLeftNormalized: jc(_, r.direction),
        scrollWidth: _.scrollWidth,
        top: be.top,
        bottom: be.bottom,
        left: be.left,
        right: be.right
      };
    }
    let fe;
    if (_ && O !== !1) {
      const be = J.current.children;
      if (be.length > 0) {
        const Oe = be[K.get(O)];
        fe = Oe ? Oe.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: q,
      tabMeta: fe
    };
  }, xe = it(() => {
    const {
      tabsMeta: _,
      tabMeta: q
    } = Ne();
    let fe = 0, be;
    if (z)
      be = "top", q && _ && (fe = q.top - _.top + _.scrollTop);
    else if (be = s ? "right" : "left", q && _) {
      const je = s ? _.scrollLeftNormalized + _.clientWidth - _.scrollWidth : _.scrollLeft;
      fe = (s ? -1 : 1) * (q[be] - _[be] + je);
    }
    const Oe = {
      [be]: fe,
      // May be wrong until the font is loaded.
      [W]: q ? q[W] : 0
    };
    if (isNaN(le[be]) || isNaN(le[W]))
      ke(Oe);
    else {
      const je = Math.abs(le[be] - Oe[be]), Ye = Math.abs(le[W] - Oe[W]);
      (je >= 1 || Ye >= 1) && ke(Oe);
    }
  }), me = (_, {
    animation: q = !0
  } = {}) => {
    q ? i0(B, Me.current, _, {
      duration: r.transitions.duration.standard
    }) : Me.current[B] = _;
  }, Le = (_) => {
    let q = Me.current[B];
    z ? q += _ : (q += _ * (s ? -1 : 1), q *= s && $a() === "reverse" ? -1 : 1), me(q);
  }, Pe = () => {
    const _ = Me.current[j];
    let q = 0;
    const fe = Array.from(J.current.children);
    for (let be = 0; be < fe.length; be += 1) {
      const Oe = fe[be];
      if (q + Oe[j] > _) {
        be === 0 && (q = _);
        break;
      }
      q += Oe[j];
    }
    return q;
  }, ge = () => {
    Le(-1 * Pe());
  }, Ue = () => {
    Le(Pe());
  }, Ve = d.useCallback((_) => {
    te({
      overflow: null,
      scrollbarWidth: _
    });
  }, []), Ge = () => {
    const _ = {};
    _.scrollbarSizeListener = F ? /* @__PURE__ */ P.jsx(P0, {
      onChange: Ve,
      className: Y(he.scrollableX, he.hideScrollbar)
    }) : null;
    const fe = F && (w === "auto" && (ee || Ie) || w === !0);
    return _.scrollButtonStart = fe ? /* @__PURE__ */ P.jsx(S, p({
      slots: {
        StartScrollButtonIcon: v.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: Re
      },
      orientation: y,
      direction: s ? "right" : "left",
      onClick: ge,
      disabled: !ee
    }, x, {
      className: Y(he.scrollButtons, x.className)
    })) : null, _.scrollButtonEnd = fe ? /* @__PURE__ */ P.jsx(S, p({
      slots: {
        EndScrollButtonIcon: v.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: $e
      },
      orientation: y,
      direction: s ? "left" : "right",
      onClick: Ue,
      disabled: !Ie
    }, x, {
      className: Y(he.scrollButtons, x.className)
    })) : null, _;
  }, ie = it((_) => {
    const {
      tabsMeta: q,
      tabMeta: fe
    } = Ne();
    if (!(!fe || !q)) {
      if (fe[M] < q[M]) {
        const be = q[B] + (fe[M] - q[M]);
        me(be, {
          animation: _
        });
      } else if (fe[L] > q[L]) {
        const be = q[B] + (fe[L] - q[L]);
        me(be, {
          animation: _
        });
      }
    }
  }), D = it(() => {
    F && w !== !1 && se(!ue);
  });
  d.useEffect(() => {
    const _ = ar(() => {
      Me.current && xe();
    });
    let q;
    const fe = (je) => {
      je.forEach((Ye) => {
        Ye.removedNodes.forEach((ft) => {
          var nt;
          (nt = q) == null || nt.unobserve(ft);
        }), Ye.addedNodes.forEach((ft) => {
          var nt;
          (nt = q) == null || nt.observe(ft);
        });
      }), _(), D();
    }, be = Nt(Me.current);
    be.addEventListener("resize", _);
    let Oe;
    return typeof ResizeObserver < "u" && (q = new ResizeObserver(_), Array.from(J.current.children).forEach((je) => {
      q.observe(je);
    })), typeof MutationObserver < "u" && (Oe = new MutationObserver(fe), Oe.observe(J.current, {
      childList: !0
    })), () => {
      var je, Ye;
      _.clear(), be.removeEventListener("resize", _), (je = Oe) == null || je.disconnect(), (Ye = q) == null || Ye.disconnect();
    };
  }, [xe, D]), d.useEffect(() => {
    const _ = Array.from(J.current.children), q = _.length;
    if (typeof IntersectionObserver < "u" && q > 0 && F && w !== !1) {
      const fe = _[0], be = _[q - 1], Oe = {
        root: Me.current,
        threshold: 0.99
      }, je = (Dt) => {
        re(!Dt[0].isIntersecting);
      }, Ye = new IntersectionObserver(je, Oe);
      Ye.observe(fe);
      const ft = (Dt) => {
        ce(!Dt[0].isIntersecting);
      }, nt = new IntersectionObserver(ft, Oe);
      return nt.observe(be), () => {
        Ye.disconnect(), nt.disconnect();
      };
    }
  }, [F, w, ue, u == null ? void 0 : u.length]), d.useEffect(() => {
    Q(!0);
  }, []), d.useEffect(() => {
    xe();
  }), d.useEffect(() => {
    ie(Zi !== le);
  }, [ie, le]), d.useImperativeHandle(l, () => ({
    updateIndicator: xe,
    updateScrollButtons: D
  }), [xe, D]);
  const we = /* @__PURE__ */ P.jsx(w0, p({}, R, {
    className: Y(he.indicator, R.className),
    ownerState: ne,
    style: p({}, le, R.style)
  }));
  let Qe = 0;
  const et = d.Children.map(u, (_) => {
    if (!/* @__PURE__ */ d.isValidElement(_))
      return null;
    const q = _.props.value === void 0 ? Qe : _.props.value;
    K.set(q, Qe);
    const fe = q === O;
    return Qe += 1, /* @__PURE__ */ d.cloneElement(_, p({
      fullWidth: k === "fullWidth",
      indicator: fe && !G && we,
      selected: fe,
      selectionFollowsFocus: C,
      onChange: m,
      textColor: E,
      value: q
    }, Qe === 1 && O === !1 && !_.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), X = (_) => {
    const q = J.current, fe = Ze(q).activeElement;
    if (fe.getAttribute("role") !== "tab")
      return;
    let Oe = y === "horizontal" ? "ArrowLeft" : "ArrowUp", je = y === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (y === "horizontal" && s && (Oe = "ArrowRight", je = "ArrowLeft"), _.key) {
      case Oe:
        _.preventDefault(), Co(q, fe, Yi);
        break;
      case je:
        _.preventDefault(), Co(q, fe, Xi);
        break;
      case "Home":
        _.preventDefault(), Co(q, null, Xi);
        break;
      case "End":
        _.preventDefault(), Co(q, null, Yi);
        break;
    }
  }, de = Ge();
  return /* @__PURE__ */ P.jsxs(S0, p({
    className: Y(he.root, h),
    ownerState: ne,
    ref: n,
    as: f
  }, A, {
    children: [de.scrollButtonStart, de.scrollbarSizeListener, /* @__PURE__ */ P.jsxs($0, {
      className: he.scroller,
      ownerState: ne,
      style: {
        overflow: pe.overflow,
        [z ? `margin${s ? "Left" : "Right"}` : "marginBottom"]: N ? void 0 : -pe.scrollbarWidth
      },
      ref: Me,
      children: [/* @__PURE__ */ P.jsx(R0, {
        "aria-label": i,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        className: he.flexContainer,
        ownerState: ne,
        onKeyDown: X,
        ref: J,
        role: "tablist",
        children: et
      }), G && we]
    }), de.scrollButtonEnd]
  }));
}), dy = E0;
function T0(e) {
  return ye("MuiTextField", e);
}
Ce("MuiTextField", ["root"]);
const k0 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], O0 = {
  standard: sl,
  filled: nl,
  outlined: dl
}, I0 = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, T0, t);
}, M0 = H(Wg, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), B0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: r,
    autoFocus: s = !1,
    children: i,
    className: a,
    color: l = "primary",
    defaultValue: c,
    disabled: u = !1,
    error: h = !1,
    FormHelperTextProps: f,
    fullWidth: g = !1,
    helperText: b,
    id: m,
    InputLabelProps: y,
    inputProps: S,
    InputProps: w,
    inputRef: C,
    label: v,
    maxRows: $,
    minRows: R,
    multiline: x = !1,
    name: E,
    onBlur: O,
    onChange: k,
    onFocus: N,
    placeholder: A,
    required: F = !1,
    rows: z,
    select: B = !1,
    SelectProps: M,
    type: L,
    value: j,
    variant: W = "outlined"
  } = o, ne = V(o, k0), he = p({}, o, {
    autoFocus: s,
    color: l,
    disabled: u,
    error: h,
    fullWidth: g,
    multiline: x,
    required: F,
    select: B,
    variant: W
  }), Re = I0(he), $e = {};
  W === "outlined" && (y && typeof y.shrink < "u" && ($e.notched = y.shrink), $e.label = v), B && ((!M || !M.native) && ($e.id = void 0), $e["aria-describedby"] = void 0);
  const G = lr(m), Q = b && G ? `${G}-helper-text` : void 0, le = v && G ? `${G}-label` : void 0, ke = O0[W], ee = /* @__PURE__ */ P.jsx(ke, p({
    "aria-describedby": Q,
    autoComplete: r,
    autoFocus: s,
    defaultValue: c,
    fullWidth: g,
    multiline: x,
    name: E,
    rows: z,
    maxRows: $,
    minRows: R,
    type: L,
    value: j,
    id: G,
    inputRef: C,
    onBlur: O,
    onChange: k,
    onFocus: N,
    placeholder: A,
    inputProps: S
  }, $e, w));
  return /* @__PURE__ */ P.jsxs(M0, p({
    className: Y(Re.root, a),
    disabled: u,
    error: h,
    fullWidth: g,
    ref: n,
    required: F,
    color: l,
    variant: W,
    ownerState: he
  }, ne, {
    children: [v != null && v !== "" && /* @__PURE__ */ P.jsx(Ib, p({
      htmlFor: G,
      id: le
    }, y, {
      children: v
    })), B ? /* @__PURE__ */ P.jsx(Dv, p({
      "aria-describedby": Q,
      id: G,
      labelId: le,
      value: j,
      input: ee
    }, M, {
      children: i
    })) : ee, b && /* @__PURE__ */ P.jsx(rb, p({
      id: Q
    }, f, {
      children: b
    }))]
  }));
}), py = B0;
function A0(e) {
  return ye("MuiToggleButton", e);
}
const F0 = Ce("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), bn = F0, L0 = /* @__PURE__ */ d.createContext({}), fl = L0, N0 = /* @__PURE__ */ d.createContext(void 0), ml = N0;
function z0(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.indexOf(e) >= 0 : e === t;
}
const _0 = ["value"], j0 = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"], D0 = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: o,
    disabled: r,
    size: s,
    color: i
  } = e, a = {
    root: ["root", o && "selected", r && "disabled", n && "fullWidth", `size${Z(s)}`, i]
  };
  return ve(a, A0, t);
}, W0 = H(kn, {
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
    [`&.${bn.disabled}`]: {
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
    [`&.${bn.selected}`]: {
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
}), H0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = d.useContext(fl), {
    value: r
  } = o, s = V(o, _0), i = d.useContext(ml), a = ur(p({}, s, {
    selected: z0(t.value, r)
  }), t), l = Se({
    props: a,
    name: "MuiToggleButton"
  }), {
    children: c,
    className: u,
    color: h = "standard",
    disabled: f = !1,
    disableFocusRipple: g = !1,
    fullWidth: b = !1,
    onChange: m,
    onClick: y,
    selected: S,
    size: w = "medium",
    value: C
  } = l, v = V(l, j0), $ = p({}, l, {
    color: h,
    disabled: f,
    disableFocusRipple: g,
    fullWidth: b,
    size: w
  }), R = D0($), x = (O) => {
    y && (y(O, C), O.defaultPrevented) || m && m(O, C);
  }, E = i || "";
  return /* @__PURE__ */ P.jsx(W0, p({
    className: Y(s.className, R.root, u, E),
    disabled: f,
    focusRipple: !g,
    ref: n,
    onClick: x,
    onChange: m,
    value: C,
    ownerState: $,
    "aria-pressed": S
  }, v, {
    children: c
  }));
}), fy = H0;
function U0(e) {
  return ye("MuiToggleButtonGroup", e);
}
const V0 = Ce("MuiToggleButtonGroup", ["root", "selected", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]), _e = V0, K0 = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"], q0 = (e) => {
  const {
    classes: t,
    orientation: n,
    fullWidth: o,
    disabled: r
  } = e, s = {
    root: ["root", n === "vertical" && "vertical", o && "fullWidth"],
    grouped: ["grouped", `grouped${Z(n)}`, r && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return ve(s, U0, t);
}, G0 = H("div", {
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
  [`& .${_e.lastButton}.${bn.disabled},& .${_e.middleButton}.${bn.disabled}`]: {
    borderLeft: "1px solid transparent"
  }
} : {
  [`& .${_e.lastButton}.${bn.disabled},& .${_e.middleButton}.${bn.disabled}`]: {
    borderTop: "1px solid transparent"
  }
})), X0 = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = Se({
    props: t,
    name: "MuiToggleButtonGroup"
  }), {
    children: r,
    className: s,
    color: i = "standard",
    disabled: a = !1,
    exclusive: l = !1,
    fullWidth: c = !1,
    onChange: u,
    orientation: h = "horizontal",
    size: f = "medium",
    value: g
  } = o, b = V(o, K0), m = p({}, o, {
    disabled: a,
    fullWidth: c,
    orientation: h,
    size: f
  }), y = q0(m), S = d.useCallback((x, E) => {
    if (!u)
      return;
    const O = g && g.indexOf(E);
    let k;
    g && O >= 0 ? (k = g.slice(), k.splice(O, 1)) : k = g ? g.concat(E) : [E], u(x, k);
  }, [u, g]), w = d.useCallback((x, E) => {
    u && u(x, g === E ? null : E);
  }, [u, g]), C = d.useMemo(() => ({
    className: y.grouped,
    onChange: l ? w : S,
    value: g,
    size: f,
    fullWidth: c,
    color: i,
    disabled: a
  }), [y.grouped, l, w, S, g, f, c, i, a]), v = Hc(r), $ = v.length, R = (x) => {
    const E = x === 0, O = x === $ - 1;
    return E && O ? "" : E ? y.firstButton : O ? y.lastButton : y.middleButton;
  };
  return /* @__PURE__ */ P.jsx(G0, p({
    role: "group",
    className: Y(y.root, s),
    ref: n,
    ownerState: m
  }, b, {
    children: /* @__PURE__ */ P.jsx(fl.Provider, {
      value: C,
      children: v.map((x, E) => /* @__PURE__ */ P.jsx(ml.Provider, {
        value: R(E),
        children: x
      }, E))
    })
  }));
}), my = X0;
export {
  ey as A,
  sy as B,
  ny as C,
  J0 as E,
  ay as F,
  fc as G,
  sf as I,
  iy as M,
  Qa as P,
  Q0 as T,
  mc as a,
  op as b,
  Z0 as c,
  cy as d,
  Y as e,
  py as f,
  uy as g,
  ba as h,
  dy as i,
  P as j,
  ty as k,
  oy as l,
  ry as m,
  Gr as n,
  ly as o,
  fy as p,
  my as q,
  Ut as t,
  Je as u
};
