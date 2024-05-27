import { r as d, a as Ar, R as Pt, b as ao, c as _s } from "./react-6f5a8403.js";
var Ds = { exports: {} }, ko = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa = d, el = Symbol.for("react.element"), tl = Symbol.for("react.fragment"), nl = Object.prototype.hasOwnProperty, ol = Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rl = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (o in t)
    nl.call(t, o) && !rl.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps)
    for (o in t = e.defaultProps, t)
      r[o] === void 0 && (r[o] = t[o]);
  return { $$typeof: el, type: e, key: i, ref: s, props: r, _owner: ol.current };
}
ko.Fragment = tl;
ko.jsx = js;
ko.jsxs = js;
Ds.exports = ko;
var E = Ds.exports;
function il(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function sl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var al = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(sl(this));
    var r = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = il(r);
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
}(), Ze = "-ms-", Co = "-moz-", ge = "-webkit-", Ws = "comm", Xr = "rule", Yr = "decl", ll = "@import", Hs = "@keyframes", cl = "@layer", ul = Math.abs, Oo = String.fromCharCode, dl = Object.assign;
function pl(e, t) {
  return Ge(e, 0) ^ 45 ? (((t << 2 ^ Ge(e, 0)) << 2 ^ Ge(e, 1)) << 2 ^ Ge(e, 2)) << 2 ^ Ge(e, 3) : 0;
}
function Us(e) {
  return e.trim();
}
function fl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, n) {
  return e.replace(t, n);
}
function Br(e, t) {
  return e.indexOf(t);
}
function Ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function Un(e, t, n) {
  return e.slice(t, n);
}
function yt(e) {
  return e.length;
}
function Zr(e) {
  return e.length;
}
function lo(e, t) {
  return t.push(e), e;
}
function ml(e, t) {
  return e.map(t).join("");
}
var Io = 1, fn = 1, Vs = 0, nt = 0, De = 0, xn = "";
function Mo(e, t, n, o, r, i, s) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: Io, column: fn, length: s, return: "" };
}
function Tn(e, t) {
  return dl(Mo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hl() {
  return De;
}
function gl() {
  return De = nt > 0 ? Ge(xn, --nt) : 0, fn--, De === 10 && (fn = 1, Io--), De;
}
function st() {
  return De = nt < Vs ? Ge(xn, nt++) : 0, fn++, De === 10 && (fn = 1, Io++), De;
}
function Ct() {
  return Ge(xn, nt);
}
function go() {
  return nt;
}
function Yn(e, t) {
  return Un(xn, e, t);
}
function Vn(e) {
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
  return Io = fn = 1, Vs = yt(xn = e), nt = 0, [];
}
function qs(e) {
  return xn = "", e;
}
function vo(e) {
  return Us(Yn(nt - 1, Fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vl(e) {
  for (; (De = Ct()) && De < 33; )
    st();
  return Vn(e) > 2 || Vn(De) > 3 ? "" : " ";
}
function bl(e, t) {
  for (; --t && st() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return Yn(e, go() + (t < 6 && Ct() == 32 && st() == 32));
}
function Fr(e) {
  for (; st(); )
    switch (De) {
      case e:
        return nt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fr(De);
        break;
      case 40:
        e === 41 && Fr(e);
        break;
      case 92:
        st();
        break;
    }
  return nt;
}
function yl(e, t) {
  for (; st() && e + De !== 47 + 10; )
    if (e + De === 42 + 42 && Ct() === 47)
      break;
  return "/*" + Yn(t, nt - 1) + "*" + Oo(e === 47 ? e : st());
}
function xl(e) {
  for (; !Vn(Ct()); )
    st();
  return Yn(e, nt);
}
function Cl(e) {
  return qs(bo("", null, null, null, [""], e = Ks(e), 0, [0], e));
}
function bo(e, t, n, o, r, i, s, a, l) {
  for (var c = 0, u = 0, m = s, h = 0, g = 0, v = 0, f = 1, C = 1, $ = 1, w = 0, y = "", b = r, R = i, S = o, x = y; C; )
    switch (v = w, w = st()) {
      case 40:
        if (v != 108 && Ge(x, m - 1) == 58) {
          Br(x += ve(vo(w), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += vo(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += vl(v);
        break;
      case 92:
        x += bl(go() - 1, 7);
        continue;
      case 47:
        switch (Ct()) {
          case 42:
          case 47:
            lo($l(yl(st(), go()), t, n), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * f:
        a[c++] = yt(x) * $;
      case 125 * f:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            $ == -1 && (x = ve(x, /\f/g, "")), g > 0 && yt(x) - m && lo(g > 32 ? Oi(x + ";", o, n, m - 1) : Oi(ve(x, " ", "") + ";", o, n, m - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (lo(S = ki(x, t, n, c, u, r, a, y, b = [], R = [], m), i), w === 123)
              if (u === 0)
                bo(x, t, S, S, b, i, m, a, R);
              else
                switch (h === 99 && Ge(x, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bo(e, S, S, o && lo(ki(e, S, S, 0, 0, r, a, y, r, b = [], m), R), r, R, m, a, o ? b : R);
                    break;
                  default:
                    bo(x, S, S, S, [""], R, 0, a, R);
                }
        }
        c = u = g = 0, f = $ = 1, y = x = "", m = s;
        break;
      case 58:
        m = 1 + yt(x), g = v;
      default:
        if (f < 1) {
          if (w == 123)
            --f;
          else if (w == 125 && f++ == 0 && gl() == 125)
            continue;
        }
        switch (x += Oo(w), w * f) {
          case 38:
            $ = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[c++] = (yt(x) - 1) * $, $ = 1;
            break;
          case 64:
            Ct() === 45 && (x += vo(st())), h = Ct(), u = m = yt(y = x += xl(go())), w++;
            break;
          case 45:
            v === 45 && yt(x) == 2 && (f = 0);
        }
    }
  return i;
}
function ki(e, t, n, o, r, i, s, a, l, c, u) {
  for (var m = r - 1, h = r === 0 ? i : [""], g = Zr(h), v = 0, f = 0, C = 0; v < o; ++v)
    for (var $ = 0, w = Un(e, m + 1, m = ul(f = s[v])), y = e; $ < g; ++$)
      (y = Us(f > 0 ? h[$] + " " + w : ve(w, /&\f/g, h[$]))) && (l[C++] = y);
  return Mo(e, t, n, r === 0 ? Xr : a, l, c, u);
}
function $l(e, t, n) {
  return Mo(e, t, n, Ws, Oo(hl()), Un(e, 2, -2), 0);
}
function Oi(e, t, n, o) {
  return Mo(e, t, n, Yr, Un(e, 0, o), Un(e, o + 1, -1), o);
}
function un(e, t) {
  for (var n = "", o = Zr(e), r = 0; r < o; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Rl(e, t, n, o) {
  switch (e.type) {
    case cl:
      if (e.children.length)
        break;
    case ll:
    case Yr:
      return e.return = e.return || e.value;
    case Ws:
      return "";
    case Hs:
      return e.return = e.value + "{" + un(e.children, o) + "}";
    case Xr:
      e.value = e.props.join(",");
  }
  return yt(n = un(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Sl(e) {
  var t = Zr(e);
  return function(n, o, r, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, o, r, i) || "";
    return s;
  };
}
function wl(e) {
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
var Pl = function(t, n, o) {
  for (var r = 0, i = 0; r = i, i = Ct(), r === 38 && i === 12 && (n[o] = 1), !Vn(i); )
    st();
  return Yn(t, nt);
}, El = function(t, n) {
  var o = -1, r = 44;
  do
    switch (Vn(r)) {
      case 0:
        r === 38 && Ct() === 12 && (n[o] = 1), t[o] += Pl(nt - 1, n, o);
        break;
      case 2:
        t[o] += vo(r);
        break;
      case 4:
        if (r === 44) {
          t[++o] = Ct() === 58 ? "&\f" : "", n[o] = t[o].length;
          break;
        }
      default:
        t[o] += Oo(r);
    }
  while (r = st());
  return t;
}, Tl = function(t, n) {
  return qs(El(Ks(t), n));
}, Ii = /* @__PURE__ */ new WeakMap(), kl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, o = t.parent, r = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ii.get(o)) && !r) {
      Ii.set(t, !0);
      for (var i = [], s = Tl(n, i), a = o.props, l = 0, c = 0; l < s.length; l++)
        for (var u = 0; u < a.length; u++, c++)
          t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
    }
  }
}, Ol = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Xs(e, t) {
  switch (pl(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
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
      return ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + Co + e + Ze + e + e;
    case 6828:
    case 4268:
      return ge + e + Ze + e + e;
    case 6165:
      return ge + e + Ze + "flex-" + e + e;
    case 5187:
      return ge + e + ve(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + Ze + "flex-$1$2") + e;
    case 5443:
      return ge + e + Ze + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + Ze + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + Ze + ve(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + Ze + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + ve(e, "-grow", "") + ge + e + Ze + ve(e, "grow", "positive") + e;
    case 4554:
      return ge + ve(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + Ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
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
      if (yt(e) - 1 - t > 6)
        switch (Ge(e, t + 1)) {
          case 109:
            if (Ge(e, t + 4) !== 45)
              break;
          case 102:
            return ve(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Co + (Ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Br(e, "stretch") ? Xs(ve(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ge(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ge(e, yt(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + ge) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (Ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + Ze + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ge(e, t + 11)) {
        case 114:
          return ge + e + Ze + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + Ze + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + Ze + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + Ze + e + e;
  }
  return e;
}
var Il = function(t, n, o, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Yr:
        t.return = Xs(t.value, t.length);
        break;
      case Hs:
        return un([Tn(t, {
          value: ve(t.value, "@", "@" + ge)
        })], r);
      case Xr:
        if (t.length)
          return ml(t.props, function(i) {
            switch (fl(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return un([Tn(t, {
                  props: [ve(i, /:(read-\w+)/, ":" + Co + "$1")]
                })], r);
              case "::placeholder":
                return un([Tn(t, {
                  props: [ve(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Tn(t, {
                  props: [ve(i, /:(plac\w+)/, ":" + Co + "$1")]
                }), Tn(t, {
                  props: [ve(i, /:(plac\w+)/, Ze + "input-$1")]
                })], r);
            }
            return "";
          });
    }
}, Ml = [Il], Al = function(t) {
  var n = t.key;
  if (n === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(f) {
      var C = f.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var r = t.stylisPlugins || Ml, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var C = f.getAttribute("data-emotion").split(" "), $ = 1; $ < C.length; $++)
        i[C[$]] = !0;
      a.push(f);
    }
  );
  var l, c = [kl, Ol];
  {
    var u, m = [Rl, wl(function(f) {
      u.insert(f);
    })], h = Sl(c.concat(r, m)), g = function(C) {
      return un(Cl(C), h);
    };
    l = function(C, $, w, y) {
      u = w, g(C ? C + "{" + $.styles + "}" : $.styles), y && (v.inserted[$.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new al({
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
  return v.sheet.hydrate(a), v;
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
var Ys = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe = typeof Symbol == "function" && Symbol.for, Jr = qe ? Symbol.for("react.element") : 60103, Qr = qe ? Symbol.for("react.portal") : 60106, Ao = qe ? Symbol.for("react.fragment") : 60107, Bo = qe ? Symbol.for("react.strict_mode") : 60108, Fo = qe ? Symbol.for("react.profiler") : 60114, Lo = qe ? Symbol.for("react.provider") : 60109, No = qe ? Symbol.for("react.context") : 60110, ei = qe ? Symbol.for("react.async_mode") : 60111, zo = qe ? Symbol.for("react.concurrent_mode") : 60111, _o = qe ? Symbol.for("react.forward_ref") : 60112, Do = qe ? Symbol.for("react.suspense") : 60113, Bl = qe ? Symbol.for("react.suspense_list") : 60120, jo = qe ? Symbol.for("react.memo") : 60115, Wo = qe ? Symbol.for("react.lazy") : 60116, Fl = qe ? Symbol.for("react.block") : 60121, Ll = qe ? Symbol.for("react.fundamental") : 60117, Nl = qe ? Symbol.for("react.responder") : 60118, zl = qe ? Symbol.for("react.scope") : 60119;
function lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jr:
        switch (e = e.type, e) {
          case ei:
          case zo:
          case Ao:
          case Fo:
          case Bo:
          case Do:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case No:
              case _o:
              case Wo:
              case jo:
              case Lo:
                return e;
              default:
                return t;
            }
        }
      case Qr:
        return t;
    }
  }
}
function Zs(e) {
  return lt(e) === zo;
}
Ce.AsyncMode = ei;
Ce.ConcurrentMode = zo;
Ce.ContextConsumer = No;
Ce.ContextProvider = Lo;
Ce.Element = Jr;
Ce.ForwardRef = _o;
Ce.Fragment = Ao;
Ce.Lazy = Wo;
Ce.Memo = jo;
Ce.Portal = Qr;
Ce.Profiler = Fo;
Ce.StrictMode = Bo;
Ce.Suspense = Do;
Ce.isAsyncMode = function(e) {
  return Zs(e) || lt(e) === ei;
};
Ce.isConcurrentMode = Zs;
Ce.isContextConsumer = function(e) {
  return lt(e) === No;
};
Ce.isContextProvider = function(e) {
  return lt(e) === Lo;
};
Ce.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
};
Ce.isForwardRef = function(e) {
  return lt(e) === _o;
};
Ce.isFragment = function(e) {
  return lt(e) === Ao;
};
Ce.isLazy = function(e) {
  return lt(e) === Wo;
};
Ce.isMemo = function(e) {
  return lt(e) === jo;
};
Ce.isPortal = function(e) {
  return lt(e) === Qr;
};
Ce.isProfiler = function(e) {
  return lt(e) === Fo;
};
Ce.isStrictMode = function(e) {
  return lt(e) === Bo;
};
Ce.isSuspense = function(e) {
  return lt(e) === Do;
};
Ce.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ao || e === zo || e === Fo || e === Bo || e === Do || e === Bl || typeof e == "object" && e !== null && (e.$$typeof === Wo || e.$$typeof === jo || e.$$typeof === Lo || e.$$typeof === No || e.$$typeof === _o || e.$$typeof === Ll || e.$$typeof === Nl || e.$$typeof === zl || e.$$typeof === Fl);
};
Ce.typeOf = lt;
Ys.exports = Ce;
var _l = Ys.exports, Js = _l, Dl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qs = {};
Qs[Js.ForwardRef] = Dl;
Qs[Js.Memo] = jl;
var Wl = !0;
function ea(e, t, n) {
  var o = "";
  return n.split(" ").forEach(function(r) {
    e[r] !== void 0 ? t.push(e[r] + ";") : o += r + " ";
  }), o;
}
var ti = function(t, n, o) {
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
  Wl === !1) && t.registered[r] === void 0 && (t.registered[r] = n.styles);
}, ni = function(t, n, o) {
  ti(t, n, o);
  var r = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + r : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Hl(e) {
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
var Ul = {
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
}, Vl = /[A-Z]|^ms/g, Kl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ta = function(t) {
  return t.charCodeAt(1) === 45;
}, Mi = function(t) {
  return t != null && typeof t != "boolean";
}, Sr = /* @__PURE__ */ Gs(function(e) {
  return ta(e) ? e : e.replace(Vl, "-$&").toLowerCase();
}), Ai = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Kl, function(o, r, i) {
          return xt = {
            name: r,
            styles: i,
            next: xt
          }, r;
        });
  }
  return Ul[t] !== 1 && !ta(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Kn(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return xt = {
          name: n.name,
          styles: n.styles,
          next: xt
        }, n.name;
      if (n.styles !== void 0) {
        var o = n.next;
        if (o !== void 0)
          for (; o !== void 0; )
            xt = {
              name: o.name,
              styles: o.styles,
              next: xt
            }, o = o.next;
        var r = n.styles + ";";
        return r;
      }
      return ql(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = xt, s = n(e);
        return xt = i, Kn(e, t, s);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function ql(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++)
      o += Kn(e, t, n[r]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? o += i + "{" + t[s] + "}" : Mi(s) && (o += Sr(i) + ":" + Ai(i, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Mi(s[a]) && (o += Sr(i) + ":" + Ai(i, s[a]) + ";");
      else {
        var l = Kn(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            o += Sr(i) + ":" + l + ";";
            break;
          }
          default:
            o += i + "{" + l + "}";
        }
      }
    }
  return o;
}
var Bi = /label:\s*([^\s;\n{]+)\s*(;|$)/g, xt, Ho = function(t, n, o) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var r = !0, i = "";
  xt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (r = !1, i += Kn(o, n, s)) : i += s[0];
  for (var a = 1; a < t.length; a++)
    i += Kn(o, n, t[a]), r && (i += s[a]);
  Bi.lastIndex = 0;
  for (var l = "", c; (c = Bi.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    c[1];
  var u = Hl(i) + l;
  return {
    name: u,
    styles: i,
    next: xt
  };
}, Gl = function(t) {
  return t();
}, na = Ar["useInsertionEffect"] ? Ar["useInsertionEffect"] : !1, oa = na || Gl, Fi = na || d.useLayoutEffect, ra = {}.hasOwnProperty, ia = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Al({
    key: "css"
  }) : null
);
ia.Provider;
var oi = function(t) {
  return /* @__PURE__ */ d.forwardRef(function(n, o) {
    var r = d.useContext(ia);
    return t(n, r, o);
  });
}, Zn = /* @__PURE__ */ d.createContext({}), Lr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $b = function(t, n) {
  var o = {};
  for (var r in n)
    ra.call(n, r) && (o[r] = n[r]);
  return o[Lr] = t, o;
}, Xl = function(t) {
  var n = t.cache, o = t.serialized, r = t.isStringTag;
  return ti(n, o, r), oa(function() {
    return ni(n, o, r);
  }), null;
}, Yl = /* @__PURE__ */ oi(function(e, t, n) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var r = e[Lr], i = [o], s = "";
  typeof e.className == "string" ? s = ea(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Ho(i, void 0, d.useContext(Zn));
  s += t.key + "-" + a.name;
  var l = {};
  for (var c in e)
    ra.call(e, c) && c !== "css" && c !== Lr && (l[c] = e[c]);
  return l.ref = n, l.className = s, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Xl, {
    cache: t,
    serialized: a,
    isStringTag: typeof r == "string"
  }), /* @__PURE__ */ d.createElement(r, l));
}), Rb = Yl, Zl = /* @__PURE__ */ oi(function(e, t) {
  var n = e.styles, o = Ho([n], void 0, d.useContext(Zn)), r = d.useRef();
  return Fi(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + o.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), r.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Fi(function() {
    var i = r.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (o.next !== void 0 && ni(t, o.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", o, s, !1);
  }, [t, o.name]), null;
});
function Jl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ho(t);
}
var ri = function() {
  var t = Jl.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function Et(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const mn = "$$material";
function U(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var Ql = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ec = /* @__PURE__ */ Gs(
  function(e) {
    return Ql.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), tc = ec, nc = function(t) {
  return t !== "theme";
}, Li = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? tc : nc;
}, Ni = function(t, n, o) {
  var r;
  if (n) {
    var i = n.shouldForwardProp;
    r = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof r != "function" && o && (r = t.__emotion_forwardProp), r;
}, oc = function(t) {
  var n = t.cache, o = t.serialized, r = t.isStringTag;
  return ti(n, o, r), oa(function() {
    return ni(n, o, r);
  }), null;
}, rc = function e(t, n) {
  var o = t.__emotion_real === t, r = o && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Ni(t, n, o), l = a || Li(r), c = !l("as");
  return function() {
    var u = arguments, m = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      m.push.apply(m, u);
    else {
      m.push(u[0][0]);
      for (var h = u.length, g = 1; g < h; g++)
        m.push(u[g], u[0][g]);
    }
    var v = oi(function(f, C, $) {
      var w = c && f.as || r, y = "", b = [], R = f;
      if (f.theme == null) {
        R = {};
        for (var S in f)
          R[S] = f[S];
        R.theme = d.useContext(Zn);
      }
      typeof f.className == "string" ? y = ea(C.registered, b, f.className) : f.className != null && (y = f.className + " ");
      var x = Ho(m.concat(b), C.registered, R);
      y += C.key + "-" + x.name, s !== void 0 && (y += " " + s);
      var k = c && a === void 0 ? Li(w) : l, M = {};
      for (var O in f)
        c && O === "as" || // $FlowFixMe
        k(O) && (M[O] = f[O]);
      return M.className = y, M.ref = $, /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(oc, {
        cache: C,
        serialized: x,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ d.createElement(w, M));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof r == "string" ? r : r.displayName || r.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = r, v.__emotion_styles = m, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + s;
      }
    }), v.withComponent = function(f, C) {
      return e(f, p({}, n, C, {
        shouldForwardProp: Ni(v, C, !0)
      })).apply(void 0, m);
    }, v;
  };
}, ic = [
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
], Nr = rc.bind();
ic.forEach(function(e) {
  Nr[e] = Nr(e);
});
function sc(e) {
  return e == null || Object.keys(e).length === 0;
}
function ac(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, o = typeof t == "function" ? (r) => t(sc(r) ? n : r) : t;
  return /* @__PURE__ */ E.jsx(Zl, {
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
function lc(e, t) {
  return Nr(e, t);
}
const cc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function Ft(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function sa(e) {
  if (!Ft(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = sa(e[n]);
  }), t;
}
function pt(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? p({}, e) : e;
  return Ft(e) && Ft(t) && Object.keys(t).forEach((r) => {
    r !== "__proto__" && (Ft(t[r]) && r in e && Ft(e[r]) ? o[r] = pt(e[r], t[r], n) : n.clone ? o[r] = Ft(t[r]) ? sa(t[r]) : t[r] : o[r] = t[r]);
  }), o;
}
var Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii = Symbol.for("react.element"), si = Symbol.for("react.portal"), Uo = Symbol.for("react.fragment"), Vo = Symbol.for("react.strict_mode"), Ko = Symbol.for("react.profiler"), qo = Symbol.for("react.provider"), Go = Symbol.for("react.context"), uc = Symbol.for("react.server_context"), Xo = Symbol.for("react.forward_ref"), Yo = Symbol.for("react.suspense"), Zo = Symbol.for("react.suspense_list"), Jo = Symbol.for("react.memo"), Qo = Symbol.for("react.lazy"), dc = Symbol.for("react.offscreen"), aa;
aa = Symbol.for("react.module.reference");
function gt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ii:
        switch (e = e.type, e) {
          case Uo:
          case Ko:
          case Vo:
          case Yo:
          case Zo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case uc:
              case Go:
              case Xo:
              case Qo:
              case Jo:
              case qo:
                return e;
              default:
                return t;
            }
        }
      case si:
        return t;
    }
  }
}
Ee.ContextConsumer = Go;
Ee.ContextProvider = qo;
Ee.Element = ii;
Ee.ForwardRef = Xo;
Ee.Fragment = Uo;
Ee.Lazy = Qo;
Ee.Memo = Jo;
Ee.Portal = si;
Ee.Profiler = Ko;
Ee.StrictMode = Vo;
Ee.Suspense = Yo;
Ee.SuspenseList = Zo;
Ee.isAsyncMode = function() {
  return !1;
};
Ee.isConcurrentMode = function() {
  return !1;
};
Ee.isContextConsumer = function(e) {
  return gt(e) === Go;
};
Ee.isContextProvider = function(e) {
  return gt(e) === qo;
};
Ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ii;
};
Ee.isForwardRef = function(e) {
  return gt(e) === Xo;
};
Ee.isFragment = function(e) {
  return gt(e) === Uo;
};
Ee.isLazy = function(e) {
  return gt(e) === Qo;
};
Ee.isMemo = function(e) {
  return gt(e) === Jo;
};
Ee.isPortal = function(e) {
  return gt(e) === si;
};
Ee.isProfiler = function(e) {
  return gt(e) === Ko;
};
Ee.isStrictMode = function(e) {
  return gt(e) === Vo;
};
Ee.isSuspense = function(e) {
  return gt(e) === Yo;
};
Ee.isSuspenseList = function(e) {
  return gt(e) === Zo;
};
Ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Uo || e === Ko || e === Vo || e === Yo || e === Zo || e === dc || typeof e == "object" && e !== null && (e.$$typeof === Qo || e.$$typeof === Jo || e.$$typeof === qo || e.$$typeof === Go || e.$$typeof === Xo || e.$$typeof === aa || e.getModuleId !== void 0);
};
Ee.typeOf = gt;
function J(e) {
  if (typeof e != "string")
    throw new Error(Et(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...r) {
    t.apply(this, r), n.apply(this, r);
  }, () => {
  });
}
function la(e, t = 166) {
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
function wr(e, t) {
  var n, o;
  return /* @__PURE__ */ d.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (o = e.type) == null || (o = o._payload) == null || (o = o.value) == null ? void 0 : o.muiName
  ) !== -1;
}
function Ke(e) {
  return e && e.ownerDocument || document;
}
function Xt(e) {
  return Ke(e).defaultView || window;
}
function $o(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const pc = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Tt = pc;
let _i = 0;
function fc(e) {
  const [t, n] = d.useState(e), o = e || t;
  return d.useEffect(() => {
    t == null && (_i += 1, n(`mui-${_i}`));
  }, [t]), o;
}
const Di = Ar["useId".toString()];
function er(e) {
  if (Di !== void 0) {
    const t = Di();
    return e ?? t;
  }
  return fc(e);
}
function dn({
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
function it(e) {
  const t = d.useRef(e);
  return Tt(() => {
    t.current = e;
  }), d.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ue(...e) {
  return d.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      $o(n, t);
    });
  }, e);
}
const ji = {};
function mc(e, t) {
  const n = d.useRef(ji);
  return n.current === ji && (n.current = e(t)), n;
}
const hc = [];
function gc(e) {
  d.useEffect(e, hc);
}
class Jn {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Jn();
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
function ln() {
  const e = mc(Jn.create).current;
  return gc(e.disposeEffect), e;
}
let tr = !0, zr = !1;
const vc = new Jn(), bc = {
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
function yc(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && bc[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function xc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (tr = !0);
}
function Pr() {
  tr = !1;
}
function Cc() {
  this.visibilityState === "hidden" && zr && (tr = !0);
}
function $c(e) {
  e.addEventListener("keydown", xc, !0), e.addEventListener("mousedown", Pr, !0), e.addEventListener("pointerdown", Pr, !0), e.addEventListener("touchstart", Pr, !0), e.addEventListener("visibilitychange", Cc, !0);
}
function Rc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return tr || yc(t);
}
function ca() {
  const e = d.useCallback((r) => {
    r != null && $c(r.ownerDocument);
  }, []), t = d.useRef(!1);
  function n() {
    return t.current ? (zr = !0, vc.start(100, () => {
      zr = !1;
    }), t.current = !1, !0) : !1;
  }
  function o(r) {
    return Rc(r) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: o,
    onBlur: n,
    ref: e
  };
}
function ua(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Sc = (e) => {
  const t = d.useRef({});
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}, wc = Sc;
function Pc(e) {
  return d.Children.toArray(e).filter((t) => /* @__PURE__ */ d.isValidElement(t));
}
function nr(e, t) {
  const n = p({}, t);
  return Object.keys(e).forEach((o) => {
    if (o.toString().match(/^(components|slots)$/))
      n[o] = p({}, e[o], n[o]);
    else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
      const r = e[o] || {}, i = t[o];
      n[o] = {}, !i || !Object.keys(i) ? n[o] = r : !r || !Object.keys(r) ? n[o] = i : (n[o] = p({}, i), Object.keys(r).forEach((s) => {
        n[o][s] = nr(r[s], i[s]);
      }));
    } else
      n[o] === void 0 && (n[o] = e[o]);
  }), n;
}
function $e(e, t, n = void 0) {
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
const Wi = (e) => e, Ec = () => {
  let e = Wi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Wi;
    }
  };
}, Tc = Ec(), kc = Tc, da = {
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
function Re(e, t, n = "Mui") {
  const o = da[t];
  return o ? `${n}-${o}` : `${kc.generate(e)}-${t}`;
}
function Se(e, t, n = "Mui") {
  const o = {};
  return t.forEach((r) => {
    o[r] = Re(e, r, n);
  }), o;
}
function Oc(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Ic = ["values", "unit", "step"], Mc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => p({}, n, {
    [o.key]: o.val
  }), {});
};
function Ac(e) {
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
  } = e, r = U(e, Ic), i = Mc(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - o / 100}${n})`;
  }
  function c(h, g) {
    const v = s.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : g) - o / 100}${n})`;
  }
  function u(h) {
    return s.indexOf(h) + 1 < s.length ? c(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function m(h) {
    const g = s.indexOf(h);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? l(s[g]) : c(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return p({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: c,
    only: u,
    not: m,
    unit: n
  }, r);
}
const Bc = {
  borderRadius: 4
}, Fc = Bc;
function Nn(e, t) {
  return t ? pt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ai = {
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
}, Hi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ai[e]}px)`
};
function kt(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || Hi;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || Hi;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || ai).indexOf(a) !== -1) {
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
function Lc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((o, r) => {
    const i = e.up(r);
    return o[i] = {}, o;
  }, {})) || {};
}
function Nc(e, t) {
  return e.reduce((n, o) => {
    const r = n[o];
    return (!r || Object.keys(r).length === 0) && delete n[o], n;
  }, t);
}
function or(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((r, i) => r && r[i] ? r[i] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, r) => o && o[r] != null ? o[r] : null, e);
}
function Ro(e, t, n, o = n) {
  let r;
  return typeof e == "function" ? r = e(n) : Array.isArray(e) ? r = e[n] || o : r = or(e, n) || o, t && (r = t(r, o, e)), r;
}
function _e(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: r
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, c = or(l, o) || {};
    return kt(s, a, (m) => {
      let h = Ro(c, r, m);
      return m === h && typeof m == "string" && (h = Ro(c, r, `${t}${m === "default" ? "" : J(m)}`, m)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function zc(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const _c = {
  m: "margin",
  p: "padding"
}, Dc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ui = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, jc = zc((e) => {
  if (e.length > 2)
    if (Ui[e])
      e = Ui[e];
    else
      return [e];
  const [t, n] = e.split(""), o = _c[t], r = Dc[n] || "";
  return Array.isArray(r) ? r.map((i) => o + i) : [o + r];
}), li = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ci = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...li, ...ci];
function Qn(e, t, n, o) {
  var r;
  const i = (r = or(e, t, !1)) != null ? r : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function pa(e) {
  return Qn(e, "spacing", 8);
}
function eo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), o = e(n);
  return t >= 0 ? o : typeof o == "number" ? -o : `-${o}`;
}
function Wc(e, t) {
  return (n) => e.reduce((o, r) => (o[r] = eo(t, n), o), {});
}
function Hc(e, t, n, o) {
  if (t.indexOf(n) === -1)
    return null;
  const r = jc(n), i = Wc(r, o), s = e[n];
  return kt(e, s, i);
}
function fa(e, t) {
  const n = pa(e.theme);
  return Object.keys(e).map((o) => Hc(e, t, o, n)).reduce(Nn, {});
}
function Fe(e) {
  return fa(e, li);
}
Fe.propTypes = {};
Fe.filterProps = li;
function Le(e) {
  return fa(e, ci);
}
Le.propTypes = {};
Le.filterProps = ci;
function Uc(e = 8) {
  if (e.mui)
    return e;
  const t = pa({
    spacing: e
  }), n = (...o) => (o.length === 0 ? [1] : o).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function rr(...e) {
  const t = e.reduce((o, r) => (r.filterProps.forEach((i) => {
    o[i] = r;
  }), o), {}), n = (o) => Object.keys(o).reduce((r, i) => t[i] ? Nn(r, t[i](o)) : r, {});
  return n.propTypes = {}, n.filterProps = e.reduce((o, r) => o.concat(r.filterProps), []), n;
}
function dt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function vt(e, t) {
  return _e({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Vc = vt("border", dt), Kc = vt("borderTop", dt), qc = vt("borderRight", dt), Gc = vt("borderBottom", dt), Xc = vt("borderLeft", dt), Yc = vt("borderColor"), Zc = vt("borderTopColor"), Jc = vt("borderRightColor"), Qc = vt("borderBottomColor"), eu = vt("borderLeftColor"), tu = vt("outline", dt), nu = vt("outlineColor"), ir = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Qn(e.theme, "shape.borderRadius", 4), n = (o) => ({
      borderRadius: eo(t, o)
    });
    return kt(e, e.borderRadius, n);
  }
  return null;
};
ir.propTypes = {};
ir.filterProps = ["borderRadius"];
rr(Vc, Kc, qc, Gc, Xc, Yc, Zc, Jc, Qc, eu, ir, tu, nu);
const sr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Qn(e.theme, "spacing", 8), n = (o) => ({
      gap: eo(t, o)
    });
    return kt(e, e.gap, n);
  }
  return null;
};
sr.propTypes = {};
sr.filterProps = ["gap"];
const ar = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Qn(e.theme, "spacing", 8), n = (o) => ({
      columnGap: eo(t, o)
    });
    return kt(e, e.columnGap, n);
  }
  return null;
};
ar.propTypes = {};
ar.filterProps = ["columnGap"];
const lr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Qn(e.theme, "spacing", 8), n = (o) => ({
      rowGap: eo(t, o)
    });
    return kt(e, e.rowGap, n);
  }
  return null;
};
lr.propTypes = {};
lr.filterProps = ["rowGap"];
const ou = _e({
  prop: "gridColumn"
}), ru = _e({
  prop: "gridRow"
}), iu = _e({
  prop: "gridAutoFlow"
}), su = _e({
  prop: "gridAutoColumns"
}), au = _e({
  prop: "gridAutoRows"
}), lu = _e({
  prop: "gridTemplateColumns"
}), cu = _e({
  prop: "gridTemplateRows"
}), uu = _e({
  prop: "gridTemplateAreas"
}), du = _e({
  prop: "gridArea"
});
rr(sr, ar, lr, ou, ru, iu, su, au, lu, cu, uu, du);
function pn(e, t) {
  return t === "grey" ? t : e;
}
const pu = _e({
  prop: "color",
  themeKey: "palette",
  transform: pn
}), fu = _e({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: pn
}), mu = _e({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: pn
});
rr(pu, fu, mu);
function rt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const hu = _e({
  prop: "width",
  transform: rt
}), ui = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, r;
      const i = ((o = e.theme) == null || (o = o.breakpoints) == null || (o = o.values) == null ? void 0 : o[n]) || ai[n];
      return i ? ((r = e.theme) == null || (r = r.breakpoints) == null ? void 0 : r.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: rt(n)
      };
    };
    return kt(e, e.maxWidth, t);
  }
  return null;
};
ui.filterProps = ["maxWidth"];
const gu = _e({
  prop: "minWidth",
  transform: rt
}), vu = _e({
  prop: "height",
  transform: rt
}), bu = _e({
  prop: "maxHeight",
  transform: rt
}), yu = _e({
  prop: "minHeight",
  transform: rt
});
_e({
  prop: "size",
  cssProperty: "width",
  transform: rt
});
_e({
  prop: "size",
  cssProperty: "height",
  transform: rt
});
const xu = _e({
  prop: "boxSizing"
});
rr(hu, ui, gu, vu, bu, yu, xu);
const Cu = {
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
  outline: {
    themeKey: "borders",
    transform: dt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ir
  },
  // palette
  color: {
    themeKey: "palette",
    transform: pn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: pn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: pn
  },
  // spacing
  p: {
    style: Le
  },
  pt: {
    style: Le
  },
  pr: {
    style: Le
  },
  pb: {
    style: Le
  },
  pl: {
    style: Le
  },
  px: {
    style: Le
  },
  py: {
    style: Le
  },
  padding: {
    style: Le
  },
  paddingTop: {
    style: Le
  },
  paddingRight: {
    style: Le
  },
  paddingBottom: {
    style: Le
  },
  paddingLeft: {
    style: Le
  },
  paddingX: {
    style: Le
  },
  paddingY: {
    style: Le
  },
  paddingInline: {
    style: Le
  },
  paddingInlineStart: {
    style: Le
  },
  paddingInlineEnd: {
    style: Le
  },
  paddingBlock: {
    style: Le
  },
  paddingBlockStart: {
    style: Le
  },
  paddingBlockEnd: {
    style: Le
  },
  m: {
    style: Fe
  },
  mt: {
    style: Fe
  },
  mr: {
    style: Fe
  },
  mb: {
    style: Fe
  },
  ml: {
    style: Fe
  },
  mx: {
    style: Fe
  },
  my: {
    style: Fe
  },
  margin: {
    style: Fe
  },
  marginTop: {
    style: Fe
  },
  marginRight: {
    style: Fe
  },
  marginBottom: {
    style: Fe
  },
  marginLeft: {
    style: Fe
  },
  marginX: {
    style: Fe
  },
  marginY: {
    style: Fe
  },
  marginInline: {
    style: Fe
  },
  marginInlineStart: {
    style: Fe
  },
  marginInlineEnd: {
    style: Fe
  },
  marginBlock: {
    style: Fe
  },
  marginBlockStart: {
    style: Fe
  },
  marginBlockEnd: {
    style: Fe
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
    style: sr
  },
  rowGap: {
    style: lr
  },
  columnGap: {
    style: ar
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
    transform: rt
  },
  maxWidth: {
    style: ui
  },
  minWidth: {
    transform: rt
  },
  height: {
    transform: rt
  },
  maxHeight: {
    transform: rt
  },
  minHeight: {
    transform: rt
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
}, cr = Cu;
function $u(...e) {
  const t = e.reduce((o, r) => o.concat(Object.keys(r)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function Ru(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Su() {
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
      style: m
    } = a;
    if (o == null)
      return null;
    if (c === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const h = or(r, c) || {};
    return m ? m(s) : kt(s, o, (v) => {
      let f = Ro(h, u, v);
      return v === f && typeof v == "string" && (f = Ro(h, u, `${n}${v === "default" ? "" : J(v)}`, v)), l === !1 ? f : {
        [l]: f
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
    const s = (o = i.unstable_sxConfig) != null ? o : cr;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(i);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const u = Lc(i.breakpoints), m = Object.keys(u);
      let h = u;
      return Object.keys(c).forEach((g) => {
        const v = Ru(c[g], i);
        if (v != null)
          if (typeof v == "object")
            if (s[g])
              h = Nn(h, e(g, v, i, s));
            else {
              const f = kt({
                theme: i
              }, v, (C) => ({
                [g]: C
              }));
              $u(f, v) ? h[g] = t({
                sx: v,
                theme: i
              }) : h = Nn(h, f);
            }
          else
            h = Nn(h, e(g, v, i, s));
      }), Nc(m, h);
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const ma = Su();
ma.filterProps = ["sx"];
const di = ma;
function wu(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Pu = ["breakpoints", "palette", "spacing", "shape"];
function pi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: r,
    shape: i = {}
  } = e, s = U(e, Pu), a = Ac(n), l = Uc(r);
  let c = pt({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: p({
      mode: "light"
    }, o),
    spacing: l,
    shape: p({}, Fc, i)
  }, s);
  return c.applyStyles = wu, c = t.reduce((u, m) => pt(u, m), c), c.unstable_sxConfig = p({}, cr, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(m) {
    return di({
      sx: m,
      theme: this
    });
  }, c;
}
function Eu(e) {
  return Object.keys(e).length === 0;
}
function fi(e = null) {
  const t = d.useContext(Zn);
  return !t || Eu(t) ? e : t;
}
const Tu = pi();
function mi(e = Tu) {
  return fi(e);
}
function ku({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const o = mi(n), r = typeof e == "function" ? e(t && o[t] || o) : e;
  return /* @__PURE__ */ E.jsx(ac, {
    styles: r
  });
}
const Ou = ["sx"], Iu = (e) => {
  var t, n;
  const o = {
    systemProps: {},
    otherProps: {}
  }, r = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : cr;
  return Object.keys(e).forEach((i) => {
    r[i] ? o.systemProps[i] = e[i] : o.otherProps[i] = e[i];
  }), o;
};
function Mu(e) {
  const {
    sx: t
  } = e, n = U(e, Ou), {
    systemProps: o,
    otherProps: r
  } = Iu(n);
  let i;
  return Array.isArray(t) ? i = [o, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ft(a) ? p({}, o, a) : o;
  } : i = p({}, o, t), p({}, r, {
    sx: i
  });
}
function ha(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = ha(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function re() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = ha(e)) && (o && (o += " "), o += t);
  return o;
}
const Au = ["ownerState"], Bu = ["variants"], Fu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Lu(e) {
  return Object.keys(e).length === 0;
}
function Nu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zu = pi(), _u = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function co({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Lu(t) ? e : t[n] || t;
}
function Du(e) {
  return e ? (t, n) => n[e] : null;
}
function yo(e, t) {
  let {
    ownerState: n
  } = t, o = U(t, Au);
  const r = typeof e == "function" ? e(p({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(r))
    return r.flatMap((i) => yo(i, p({
      ownerState: n
    }, o)));
  if (r && typeof r == "object" && Array.isArray(r.variants)) {
    const {
      variants: i = []
    } = r;
    let a = U(r, Bu);
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
function ju(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = zu,
    rootShouldForwardProp: o = zn,
    slotShouldForwardProp: r = zn
  } = e, i = (s) => di(p({}, s, {
    theme: co(p({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    cc(s, (R) => R.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: l,
      slot: c,
      skipVariantsResolver: u,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Du(_u(c))
    } = a, g = U(a, Fu), v = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), f = m || !1;
    let C, $ = zn;
    c === "Root" || c === "root" ? $ = o : c ? $ = r : Nu(s) && ($ = void 0);
    const w = lc(s, p({
      shouldForwardProp: $,
      label: C
    }, g)), y = (R) => typeof R == "function" && R.__emotion_real !== R || Ft(R) ? (S) => yo(R, p({}, S, {
      theme: co({
        theme: S.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : R, b = (R, ...S) => {
      let x = y(R);
      const k = S ? S.map(y) : [];
      l && h && k.push((N) => {
        const A = co(p({}, N, {
          defaultTheme: n,
          themeId: t
        }));
        if (!A.components || !A.components[l] || !A.components[l].styleOverrides)
          return null;
        const L = A.components[l].styleOverrides, z = {};
        return Object.entries(L).forEach(([B, I]) => {
          z[B] = yo(I, p({}, N, {
            theme: A
          }));
        }), h(N, z);
      }), l && !v && k.push((N) => {
        var A;
        const L = co(p({}, N, {
          defaultTheme: n,
          themeId: t
        })), z = L == null || (A = L.components) == null || (A = A[l]) == null ? void 0 : A.variants;
        return yo({
          variants: z
        }, p({}, N, {
          theme: L
        }));
      }), f || k.push(i);
      const M = k.length - S.length;
      if (Array.isArray(R) && M > 0) {
        const N = new Array(M).fill("");
        x = [...R, ...N], x.raw = [...R.raw, ...N];
      }
      const O = w(x, ...k);
      return s.muiName && (O.muiName = s.muiName), O;
    };
    return w.withConfig && (b.withConfig = w.withConfig), b;
  };
}
function Wu(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? o : nr(t.components[n].defaultProps, o);
}
function Hu({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: o
}) {
  let r = mi(n);
  return o && (r = r[o] || r), Wu({
    theme: r,
    name: t,
    props: e
  });
}
function hi(e, t = 0, n = 1) {
  return Oc(e, t, n);
}
function Uu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, r) => r < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Yt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Yt(Uu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Et(9, e));
  let o = e.substring(t + 1, e.length - 1), r;
  if (n === "color") {
    if (o = o.split(" "), r = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(r) === -1)
      throw new Error(Et(10, r));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: n,
    values: o,
    colorSpace: r
  };
}
function ur(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.indexOf("rgb") !== -1 ? o = o.map((r, i) => i < 3 ? parseInt(r, 10) : r) : t.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.indexOf("color") !== -1 ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Vu(e) {
  e = Yt(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, r = t[2] / 100, i = o * Math.min(r, 1 - r), s = (c, u = (c + n / 30) % 12) => r - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), ur({
    type: a,
    values: l
  });
}
function Vi(e) {
  e = Yt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Yt(Vu(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ku(e, t) {
  const n = Vi(e), o = Vi(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function Qe(e, t) {
  return e = Yt(e), t = hi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ur(e);
}
function _r(e, t) {
  if (e = Yt(e), t = hi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ur(e);
}
function Dr(e, t) {
  if (e = Yt(e), t = hi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ur(e);
}
const qu = /* @__PURE__ */ d.createContext(null), ga = qu;
function va() {
  return d.useContext(ga);
}
const Gu = typeof Symbol == "function" && Symbol.for, Xu = Gu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Yu(e, t) {
  return typeof t == "function" ? t(e) : p({}, e, t);
}
function Zu(e) {
  const {
    children: t,
    theme: n
  } = e, o = va(), r = d.useMemo(() => {
    const i = o === null ? n : Yu(o, n);
    return i != null && (i[Xu] = o !== null), i;
  }, [n, o]);
  return /* @__PURE__ */ E.jsx(ga.Provider, {
    value: r,
    children: t
  });
}
const Ki = {};
function qi(e, t, n, o = !1) {
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
function Ju(e) {
  const {
    children: t,
    theme: n,
    themeId: o
  } = e, r = fi(Ki), i = va() || Ki, s = qi(o, r, n), a = qi(o, i, n, !0);
  return /* @__PURE__ */ E.jsx(Zu, {
    theme: a,
    children: /* @__PURE__ */ E.jsx(Zn.Provider, {
      value: s,
      children: t
    })
  });
}
function Qu(e, t) {
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
const ed = {
  black: "#000",
  white: "#fff"
}, qn = ed, td = {
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
}, nd = td, od = {
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
}, en = od, rd = {
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
}, tn = rd, id = {
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
}, kn = id, sd = {
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
}, nn = sd, ad = {
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
}, on = ad, ld = {
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
}, rn = ld, cd = ["mode", "contrastThreshold", "tonalOffset"], Gi = {
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
    paper: qn.white,
    default: qn.white
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
}, Er = {
  text: {
    primary: qn.white,
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
    active: qn.white,
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
function Xi(e, t, n, o) {
  const r = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Dr(e.main, r) : t === "dark" && (e.dark = _r(e.main, i)));
}
function ud(e = "light") {
  return e === "dark" ? {
    main: nn[200],
    light: nn[50],
    dark: nn[400]
  } : {
    main: nn[700],
    light: nn[400],
    dark: nn[800]
  };
}
function dd(e = "light") {
  return e === "dark" ? {
    main: en[200],
    light: en[50],
    dark: en[400]
  } : {
    main: en[500],
    light: en[300],
    dark: en[700]
  };
}
function pd(e = "light") {
  return e === "dark" ? {
    main: tn[500],
    light: tn[300],
    dark: tn[700]
  } : {
    main: tn[700],
    light: tn[400],
    dark: tn[800]
  };
}
function fd(e = "light") {
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
function md(e = "light") {
  return e === "dark" ? {
    main: rn[400],
    light: rn[300],
    dark: rn[700]
  } : {
    main: rn[800],
    light: rn[500],
    dark: rn[900]
  };
}
function hd(e = "light") {
  return e === "dark" ? {
    main: kn[400],
    light: kn[300],
    dark: kn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: kn[500],
    dark: kn[900]
  };
}
function gd(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2
  } = e, r = U(e, cd), i = e.primary || ud(t), s = e.secondary || dd(t), a = e.error || pd(t), l = e.info || fd(t), c = e.success || md(t), u = e.warning || hd(t);
  function m(f) {
    return Ku(f, Er.text.primary) >= n ? Er.text.primary : Gi.text.primary;
  }
  const h = ({
    color: f,
    name: C,
    mainShade: $ = 500,
    lightShade: w = 300,
    darkShade: y = 700
  }) => {
    if (f = p({}, f), !f.main && f[$] && (f.main = f[$]), !f.hasOwnProperty("main"))
      throw new Error(Et(11, C ? ` (${C})` : "", $));
    if (typeof f.main != "string")
      throw new Error(Et(12, C ? ` (${C})` : "", JSON.stringify(f.main)));
    return Xi(f, "light", w, o), Xi(f, "dark", y, o), f.contrastText || (f.contrastText = m(f.main)), f;
  }, g = {
    dark: Er,
    light: Gi
  };
  return pt(p({
    // A collection of common colors.
    common: p({}, qn),
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
    grey: nd,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o
  }, g[t]), r);
}
const vd = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function bd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yi = {
  textTransform: "uppercase"
}, Zi = '"Roboto", "Helvetica", "Arial", sans-serif';
function yd(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: o = Zi,
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
    pxToRem: m
  } = n, h = U(n, vd), g = r / 14, v = m || (($) => `${$ / c * g}rem`), f = ($, w, y, b, R) => p({
    fontFamily: o,
    fontWeight: $,
    fontSize: v(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: y
  }, o === Zi ? {
    letterSpacing: `${bd(b / w)}em`
  } : {}, R, u), C = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(s, 48, 1.167, 0),
    h4: f(s, 34, 1.235, 0.25),
    h5: f(s, 24, 1.334, 0),
    h6: f(a, 20, 1.6, 0.15),
    subtitle1: f(s, 16, 1.75, 0.15),
    subtitle2: f(a, 14, 1.57, 0.1),
    body1: f(s, 16, 1.5, 0.15),
    body2: f(s, 14, 1.43, 0.15),
    button: f(a, 14, 1.75, 0.4, Yi),
    caption: f(s, 12, 1.66, 0.4),
    overline: f(s, 12, 2.66, 1, Yi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return pt(p({
    htmlFontSize: c,
    pxToRem: v,
    fontFamily: o,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l
  }, C), h, {
    clone: !1
    // No need to clone deep
  });
}
const xd = 0.2, Cd = 0.14, $d = 0.12;
function Ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${xd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Cd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${$d})`].join(",");
}
const Rd = ["none", Ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sd = Rd, wd = ["duration", "easing", "delay"], Pd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ed = {
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
function Td(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function kd(e) {
  const t = p({}, Pd, e.easing), n = p({}, Ed, e.duration);
  return p({
    getAutoHeightDuration: Td,
    create: (r = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = i;
      return U(i, wd), (Array.isArray(r) ? r : [r]).map((c) => `${c} ${typeof s == "string" ? s : Ji(s)} ${a} ${typeof l == "string" ? l : Ji(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Od = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Id = Od, Md = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ad(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: o = {},
    transitions: r = {},
    typography: i = {}
  } = e, s = U(e, Md);
  if (e.vars)
    throw new Error(Et(18));
  const a = gd(o), l = pi(e);
  let c = pt(l, {
    mixins: Qu(l.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Sd.slice(),
    typography: yd(a, i),
    transitions: kd(r),
    zIndex: p({}, Id)
  });
  return c = pt(c, s), c = t.reduce((u, m) => pt(u, m), c), c.unstable_sxConfig = p({}, cr, s == null ? void 0 : s.unstable_sxConfig), c.unstable_sx = function(m) {
    return di({
      sx: m,
      theme: this
    });
  }, c;
}
const Bd = Ad(), dr = Bd;
function pr() {
  const e = mi(dr);
  return e[mn] || e;
}
function we({
  props: e,
  name: t
}) {
  return Hu({
    props: e,
    name: t,
    defaultTheme: dr,
    themeId: mn
  });
}
const bt = (e) => zn(e) && e !== "classes", Fd = zn, Ld = ju({
  themeId: mn,
  defaultTheme: dr,
  rootShouldForwardProp: bt
}), K = Ld, Nd = ["theme"];
function Sb(e) {
  let {
    theme: t
  } = e, n = U(e, Nd);
  const o = t[mn];
  return /* @__PURE__ */ E.jsx(Ju, p({}, n, {
    themeId: o ? mn : void 0,
    theme: o || t
  }));
}
const zd = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Qi = zd;
function _d(e) {
  return Re("MuiSvgIcon", e);
}
Se("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Dd = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], jd = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: o
  } = e, r = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(n)}`]
  };
  return $e(r, _d, o);
}, Wd = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${J(n.color)}`], t[`fontSize${J(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, o, r, i, s, a, l, c, u, m, h, g, v;
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
    color: (m = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? m : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), ba = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
    titleAccess: m,
    viewBox: h = "0 0 24 24"
  } = o, g = U(o, Dd), v = /* @__PURE__ */ d.isValidElement(r) && r.type === "svg", f = p({}, o, {
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: h,
    hasSvgAsChild: v
  }), C = {};
  u || (C.viewBox = h);
  const $ = jd(f);
  return /* @__PURE__ */ E.jsxs(Wd, p({
    as: a,
    className: re($.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n
  }, C, g, v && r.props, {
    ownerState: f,
    children: [v ? r.props.children : r, m ? /* @__PURE__ */ E.jsx("title", {
      children: m
    }) : null]
  }));
});
ba.muiName = "SvgIcon";
const es = ba;
function Cn(e, t) {
  function n(o, r) {
    return /* @__PURE__ */ E.jsx(es, p({
      "data-testid": `${t}Icon`,
      ref: r
    }, o, {
      children: e
    }));
  }
  return n.muiName = es.muiName, /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef(n));
}
function jr(e, t) {
  return jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, jr(e, t);
}
function ya(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, jr(e, t);
}
const ts = {
  disabled: !1
}, So = Pt.createContext(null);
var Hd = function(t) {
  return t.scrollTop;
}, Fn = "unmounted", Vt = "exited", Kt = "entering", an = "entered", Wr = "exiting", It = /* @__PURE__ */ function(e) {
  ya(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = r, a = s && !s.isMounting ? o.enter : o.appear, l;
    return i.appearStatus = null, o.in ? a ? (l = Vt, i.appearStatus = Kt) : l = an : o.unmountOnExit || o.mountOnEnter ? l = Fn : l = Vt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(r, i) {
    var s = r.in;
    return s && i.status === Fn ? {
      status: Vt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(r) {
    var i = null;
    if (r !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Kt && s !== an && (i = Kt) : (s === Kt || s === an) && (i = Wr);
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
      if (this.cancelNextCallback(), i === Kt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ao.findDOMNode(this);
          s && Hd(s);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Vt && this.setState({
        status: Fn
      });
  }, n.performEnter = function(r) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : r, l = this.props.nodeRef ? [a] : [ao.findDOMNode(this), a], c = l[0], u = l[1], m = this.getTimeouts(), h = a ? m.appear : m.enter;
    if (!r && !s || ts.disabled) {
      this.safeSetState({
        status: an
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, u), this.safeSetState({
      status: Kt
    }, function() {
      i.props.onEntering(c, u), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: an
        }, function() {
          i.props.onEntered(c, u);
        });
      });
    });
  }, n.performExit = function() {
    var r = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ao.findDOMNode(this);
    if (!i || ts.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        r.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Wr
    }, function() {
      r.props.onExiting(a), r.onTransitionEnd(s.exit, function() {
        r.safeSetState({
          status: Vt
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : ao.findDOMNode(this), a = r == null && !this.props.addEndListener;
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
    if (r === Fn)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = U(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Pt.createElement(So.Provider, {
        value: null
      }, typeof s == "function" ? s(r, a) : Pt.cloneElement(Pt.Children.only(s), a))
    );
  }, t;
}(Pt.Component);
It.contextType = So;
It.propTypes = {};
function sn() {
}
It.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: sn,
  onEntering: sn,
  onEntered: sn,
  onExit: sn,
  onExiting: sn,
  onExited: sn
};
It.UNMOUNTED = Fn;
It.EXITED = Vt;
It.ENTERING = Kt;
It.ENTERED = an;
It.EXITING = Wr;
const xa = It;
function Ud(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gi(e, t) {
  var n = function(i) {
    return t && d.isValidElement(i) ? t(i) : i;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && d.Children.map(e, function(r) {
    return r;
  }).forEach(function(r) {
    o[r.key] = n(r);
  }), o;
}
function Vd(e, t) {
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
function qt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Kd(e, t) {
  return gi(e.children, function(n) {
    return d.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: qt(n, "appear", e),
      enter: qt(n, "enter", e),
      exit: qt(n, "exit", e)
    });
  });
}
function qd(e, t, n) {
  var o = gi(e.children), r = Vd(t, o);
  return Object.keys(r).forEach(function(i) {
    var s = r[i];
    if (d.isValidElement(s)) {
      var a = i in t, l = i in o, c = t[i], u = d.isValidElement(c) && !c.props.in;
      l && (!a || u) ? r[i] = d.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: qt(s, "exit", e),
        enter: qt(s, "enter", e)
      }) : !l && a && !u ? r[i] = d.cloneElement(s, {
        in: !1
      }) : l && a && d.isValidElement(c) && (r[i] = d.cloneElement(s, {
        onExited: n.bind(null, s),
        in: c.props.in,
        exit: qt(s, "exit", e),
        enter: qt(s, "enter", e)
      }));
    }
  }), r;
}
var Gd = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Xd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vi = /* @__PURE__ */ function(e) {
  ya(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = i.handleExited.bind(Ud(i));
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
      children: l ? Kd(r, a) : qd(r, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(r, i) {
    var s = gi(this.props.children);
    r.key in s || (r.props.onExited && r.props.onExited(i), this.mounted && this.setState(function(a) {
      var l = p({}, a.children);
      return delete l[r.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var r = this.props, i = r.component, s = r.childFactory, a = U(r, ["component", "childFactory"]), l = this.state.contextValue, c = Gd(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Pt.createElement(So.Provider, {
      value: l
    }, c) : /* @__PURE__ */ Pt.createElement(So.Provider, {
      value: l
    }, /* @__PURE__ */ Pt.createElement(i, a, c));
  }, t;
}(Pt.Component);
vi.propTypes = {};
vi.defaultProps = Xd;
const Yd = vi, Ca = (e) => e.scrollTop;
function wo(e, t) {
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
function Zd(e) {
  return Re("MuiPaper", e);
}
Se("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Jd = ["className", "component", "elevation", "square", "variant"], Qd = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: r
  } = e, i = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return $e(i, Zd, r);
}, ep = K("div", {
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
    backgroundImage: `linear-gradient(${Qe("#fff", Qi(t.elevation))}, ${Qe("#fff", Qi(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), tp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiPaper"
  }), {
    className: r,
    component: i = "div",
    elevation: s = 1,
    square: a = !1,
    variant: l = "elevation"
  } = o, c = U(o, Jd), u = p({}, o, {
    component: i,
    elevation: s,
    square: a,
    variant: l
  }), m = Qd(u);
  return /* @__PURE__ */ E.jsx(ep, p({
    as: i,
    ownerState: u,
    className: re(m.root, r),
    ref: n
  }, c));
}), $a = tp;
function Po(e) {
  return typeof e == "string";
}
function Ln(e, t, n) {
  return e === void 0 || Po(e) ? t : p({}, t, {
    ownerState: p({}, t.ownerState, n)
  });
}
const np = {
  disableDefaultClasses: !1
}, op = /* @__PURE__ */ d.createContext(np);
function rp(e) {
  const {
    disableDefaultClasses: t
  } = d.useContext(op);
  return (n) => t ? "" : e(n);
}
function _n(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function ip(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ns(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function sp(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: r,
    className: i
  } = e;
  if (!t) {
    const g = re(n == null ? void 0 : n.className, i, r == null ? void 0 : r.className, o == null ? void 0 : o.className), v = p({}, n == null ? void 0 : n.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style), f = p({}, n, r, o);
    return g.length > 0 && (f.className = g), Object.keys(v).length > 0 && (f.style = v), {
      props: f,
      internalRef: void 0
    };
  }
  const s = _n(p({}, r, o)), a = ns(o), l = ns(r), c = t(s), u = re(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, r == null ? void 0 : r.className, o == null ? void 0 : o.className), m = p({}, c == null ? void 0 : c.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style), h = p({}, c, n, l, a);
  return u.length > 0 && (h.className = u), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
    internalRef: c.ref
  };
}
const ap = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Zt(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: i = !1
  } = e, s = U(e, ap), a = i ? {} : ip(o, r), {
    props: l,
    internalRef: c
  } = sp(p({}, s, {
    externalSlotProps: a
  })), u = Ue(c, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Ln(n, p({}, l, {
    ref: u
  }), r);
}
function lp(e) {
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
  } = e, [u, m] = d.useState(!1), h = re(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + r
  }, v = re(n.child, u && n.childLeaving, o && n.childPulsate);
  return !a && !u && m(!0), d.useEffect(() => {
    if (!a && l != null) {
      const f = setTimeout(l, c);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, a, c]), /* @__PURE__ */ E.jsx("span", {
    className: h,
    style: g,
    children: /* @__PURE__ */ E.jsx("span", {
      className: v
    })
  });
}
const cp = Se("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ut = cp, up = ["center", "classes", "className"];
let fr = (e) => e, os, rs, is, ss;
const Hr = 550, dp = 80, pp = ri(os || (os = fr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), fp = ri(rs || (rs = fr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), mp = ri(is || (is = fr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), hp = K("span", {
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
}), gp = K(lp, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ss || (ss = fr`
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
`), ut.rippleVisible, pp, Hr, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ut.child, ut.childLeaving, fp, Hr, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.childPulsate, mp, ({
  theme: e
}) => e.transitions.easing.easeInOut), vp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: r = !1,
    classes: i = {},
    className: s
  } = o, a = U(o, up), [l, c] = d.useState([]), u = d.useRef(0), m = d.useRef(null);
  d.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const h = d.useRef(!1), g = ln(), v = d.useRef(null), f = d.useRef(null), C = d.useCallback((b) => {
    const {
      pulsate: R,
      rippleX: S,
      rippleY: x,
      rippleSize: k,
      cb: M
    } = b;
    c((O) => [...O, /* @__PURE__ */ E.jsx(gp, {
      classes: {
        ripple: re(i.ripple, ut.ripple),
        rippleVisible: re(i.rippleVisible, ut.rippleVisible),
        ripplePulsate: re(i.ripplePulsate, ut.ripplePulsate),
        child: re(i.child, ut.child),
        childLeaving: re(i.childLeaving, ut.childLeaving),
        childPulsate: re(i.childPulsate, ut.childPulsate)
      },
      timeout: Hr,
      pulsate: R,
      rippleX: S,
      rippleY: x,
      rippleSize: k
    }, u.current)]), u.current += 1, m.current = M;
  }, [i]), $ = d.useCallback((b = {}, R = {}, S = () => {
  }) => {
    const {
      pulsate: x = !1,
      center: k = r || R.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = R;
    if ((b == null ? void 0 : b.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (h.current = !0);
    const O = M ? null : f.current, N = O ? O.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let A, L, z;
    if (k || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      A = Math.round(N.width / 2), L = Math.round(N.height / 2);
    else {
      const {
        clientX: B,
        clientY: I
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      A = Math.round(B - N.left), L = Math.round(I - N.top);
    }
    if (k)
      z = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const B = Math.max(Math.abs((O ? O.clientWidth : 0) - A), A) * 2 + 2, I = Math.max(Math.abs((O ? O.clientHeight : 0) - L), L) * 2 + 2;
      z = Math.sqrt(B ** 2 + I ** 2);
    }
    b != null && b.touches ? v.current === null && (v.current = () => {
      C({
        pulsate: x,
        rippleX: A,
        rippleY: L,
        rippleSize: z,
        cb: S
      });
    }, g.start(dp, () => {
      v.current && (v.current(), v.current = null);
    })) : C({
      pulsate: x,
      rippleX: A,
      rippleY: L,
      rippleSize: z,
      cb: S
    });
  }, [r, C, g]), w = d.useCallback(() => {
    $({}, {
      pulsate: !0
    });
  }, [$]), y = d.useCallback((b, R) => {
    if (g.clear(), (b == null ? void 0 : b.type) === "touchend" && v.current) {
      v.current(), v.current = null, g.start(0, () => {
        y(b, R);
      });
      return;
    }
    v.current = null, c((S) => S.length > 0 ? S.slice(1) : S), m.current = R;
  }, [g]);
  return d.useImperativeHandle(n, () => ({
    pulsate: w,
    start: $,
    stop: y
  }), [w, $, y]), /* @__PURE__ */ E.jsx(hp, p({
    className: re(ut.root, i.root, s),
    ref: f
  }, a, {
    children: /* @__PURE__ */ E.jsx(Yd, {
      component: null,
      exit: !0,
      children: l
    })
  }));
}), bp = vp;
function yp(e) {
  return Re("MuiButtonBase", e);
}
const xp = Se("MuiButtonBase", ["root", "disabled", "focusVisible"]), Cp = xp, $p = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Rp = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: r
  } = e, s = $e({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, yp, r);
  return n && o && (s.root += ` ${o}`), s;
}, Sp = K("button", {
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
  [`&.${Cp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), wp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
    disableTouchRipple: m = !1,
    focusRipple: h = !1,
    LinkComponent: g = "a",
    onBlur: v,
    onClick: f,
    onContextMenu: C,
    onDragLeave: $,
    onFocus: w,
    onFocusVisible: y,
    onKeyDown: b,
    onKeyUp: R,
    onMouseDown: S,
    onMouseLeave: x,
    onMouseUp: k,
    onTouchEnd: M,
    onTouchMove: O,
    onTouchStart: N,
    tabIndex: A = 0,
    TouchRippleProps: L,
    touchRippleRef: z,
    type: B
  } = o, I = U(o, $p), F = d.useRef(null), _ = d.useRef(null), q = Ue(_, z), {
    isFocusVisibleRef: se,
    onFocus: Te,
    onBlur: he,
    ref: fe
  } = ca(), [H, X] = d.useState(!1);
  c && H && X(!1), d.useImperativeHandle(r, () => ({
    focusVisible: () => {
      X(!0), F.current.focus();
    }
  }), []);
  const [le, ke] = d.useState(!1);
  d.useEffect(() => {
    ke(!0);
  }, []);
  const Z = le && !u && !c;
  d.useEffect(() => {
    H && h && !u && le && _.current.pulsate();
  }, [u, h, H, le]);
  function te(D, ye, ot = m) {
    return it((Xe) => (ye && ye(Xe), !ot && _.current && _.current[D](Xe), !0));
  }
  const Oe = te("start", S), ie = te("stop", C), ae = te("stop", $), ne = te("stop", k), ce = te("stop", (D) => {
    H && D.preventDefault(), x && x(D);
  }), Y = te("start", N), W = te("stop", M), je = te("stop", O), ee = te("stop", (D) => {
    he(D), se.current === !1 && X(!1), v && v(D);
  }, !1), Ne = it((D) => {
    F.current || (F.current = D.currentTarget), Te(D), se.current === !0 && (X(!0), y && y(D)), w && w(D);
  }), be = () => {
    const D = F.current;
    return l && l !== "button" && !(D.tagName === "A" && D.href);
  }, pe = d.useRef(!1), Ae = it((D) => {
    h && !pe.current && H && _.current && D.key === " " && (pe.current = !0, _.current.stop(D, () => {
      _.current.start(D);
    })), D.target === D.currentTarget && be() && D.key === " " && D.preventDefault(), b && b(D), D.target === D.currentTarget && be() && D.key === "Enter" && !c && (D.preventDefault(), f && f(D));
  }), Pe = it((D) => {
    h && D.key === " " && _.current && H && !D.defaultPrevented && (pe.current = !1, _.current.stop(D, () => {
      _.current.pulsate(D);
    })), R && R(D), f && D.target === D.currentTarget && be() && D.key === " " && !D.defaultPrevented && f(D);
  });
  let de = l;
  de === "button" && (I.href || I.to) && (de = g);
  const We = {};
  de === "button" ? (We.type = B === void 0 ? "button" : B, We.disabled = c) : (!I.href && !I.to && (We.role = "button"), c && (We["aria-disabled"] = c));
  const He = Ue(n, fe, F), Ve = p({}, o, {
    centerRipple: i,
    component: l,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: A,
    focusVisible: H
  }), oe = Rp(Ve);
  return /* @__PURE__ */ E.jsxs(Sp, p({
    as: de,
    className: re(oe.root, a),
    ownerState: Ve,
    onBlur: ee,
    onClick: f,
    onContextMenu: ie,
    onFocus: Ne,
    onKeyDown: Ae,
    onKeyUp: Pe,
    onMouseDown: Oe,
    onMouseLeave: ce,
    onMouseUp: ne,
    onDragLeave: ae,
    onTouchEnd: W,
    onTouchMove: je,
    onTouchStart: Y,
    ref: He,
    tabIndex: c ? -1 : A,
    type: B
  }, We, I, {
    children: [s, Z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ E.jsx(bp, p({
        ref: q,
        center: i
      }, L))
    ) : null]
  }));
}), bi = wp;
function Pp(e) {
  return Re("MuiAlert", e);
}
const Ep = Se("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), as = Ep;
function Tp(e) {
  return Re("MuiIconButton", e);
}
const kp = Se("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Op = kp, Ip = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Mp = (e) => {
  const {
    classes: t,
    disabled: n,
    color: o,
    edge: r,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", o !== "default" && `color${J(o)}`, r && `edge${J(r)}`, `size${J(i)}`]
  };
  return $e(s, Tp, t);
}, Ap = K(bi, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${J(n.color)}`], n.edge && t[`edge${J(n.edge)}`], t[`size${J(n.size)}`]];
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.action.active, e.palette.action.hoverOpacity),
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
      backgroundColor: e.vars ? `rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(o.main, e.palette.action.hoverOpacity)
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
    [`&.${Op.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Bp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
  } = o, m = U(o, Ip), h = p({}, o, {
    edge: r,
    color: a,
    disabled: l,
    disableFocusRipple: c,
    size: u
  }), g = Mp(h);
  return /* @__PURE__ */ E.jsx(Ap, p({
    className: re(g.root, s),
    centerRipple: !0,
    focusRipple: !c,
    disabled: l,
    ref: n,
    ownerState: h
  }, m, {
    children: i
  }));
}), Fp = Bp, Lp = Cn(/* @__PURE__ */ E.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Np = Cn(/* @__PURE__ */ E.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), zp = Cn(/* @__PURE__ */ E.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), _p = Cn(/* @__PURE__ */ E.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), Dp = Cn(/* @__PURE__ */ E.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), jp = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], Wp = (e) => {
  const {
    variant: t,
    color: n,
    severity: o,
    classes: r
  } = e, i = {
    root: ["root", `${t}${J(n || o)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return $e(i, Pp, r);
}, Hp = K($a, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${J(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? _r : Dr, o = e.palette.mode === "light" ? Dr : _r, r = t.color || t.severity;
  return p({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, r && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : n(e.palette[r].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
    [`& .${as.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${r}IconColor`]
    } : {
      color: e.palette[r].main
    }
  }, r && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${r}Color`] : n(e.palette[r].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[r].light}`,
    [`& .${as.icon}`]: e.vars ? {
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
}), Up = K("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), Vp = K("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), ls = K("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), cs = {
  success: /* @__PURE__ */ E.jsx(Lp, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ E.jsx(Np, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ E.jsx(zp, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ E.jsx(_p, {
    fontSize: "inherit"
  })
}, Kp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a, l;
  const c = we({
    props: t,
    name: "MuiAlert"
  }), {
    action: u,
    children: m,
    className: h,
    closeText: g = "Close",
    color: v,
    components: f = {},
    componentsProps: C = {},
    icon: $,
    iconMapping: w = cs,
    onClose: y,
    role: b = "alert",
    severity: R = "success",
    slotProps: S = {},
    slots: x = {},
    variant: k = "standard"
  } = c, M = U(c, jp), O = p({}, c, {
    color: v,
    severity: R,
    variant: k
  }), N = Wp(O), A = (o = (r = x.closeButton) != null ? r : f.CloseButton) != null ? o : Fp, L = (i = (s = x.closeIcon) != null ? s : f.CloseIcon) != null ? i : Dp, z = (a = S.closeButton) != null ? a : C.closeButton, B = (l = S.closeIcon) != null ? l : C.closeIcon;
  return /* @__PURE__ */ E.jsxs(Hp, p({
    role: b,
    elevation: 0,
    ownerState: O,
    className: re(N.root, h),
    ref: n
  }, M, {
    children: [$ !== !1 ? /* @__PURE__ */ E.jsx(Up, {
      ownerState: O,
      className: N.icon,
      children: $ || w[R] || cs[R]
    }) : null, /* @__PURE__ */ E.jsx(Vp, {
      ownerState: O,
      className: N.message,
      children: m
    }), u != null ? /* @__PURE__ */ E.jsx(ls, {
      ownerState: O,
      className: N.action,
      children: u
    }) : null, u == null && y ? /* @__PURE__ */ E.jsx(ls, {
      ownerState: O,
      className: N.action,
      children: /* @__PURE__ */ E.jsx(A, p({
        size: "small",
        "aria-label": g,
        title: g,
        color: "inherit",
        onClick: y
      }, z, {
        children: /* @__PURE__ */ E.jsx(L, p({
          fontSize: "small"
        }, B))
      }))
    }) : null]
  }));
}), wb = Kp;
function qp(e) {
  return Re("MuiTypography", e);
}
Se("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Gp = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Xp = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: o,
    paragraph: r,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${J(t)}`, n && "gutterBottom", o && "noWrap", r && "paragraph"]
  };
  return $e(a, qp, s);
}, Yp = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${J(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
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
})), us = {
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
}, Zp = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Jp = (e) => Zp[e] || e, Qp = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiTypography"
  }), r = Jp(o.color), i = Mu(p({}, o, {
    color: r
  })), {
    align: s = "inherit",
    className: a,
    component: l,
    gutterBottom: c = !1,
    noWrap: u = !1,
    paragraph: m = !1,
    variant: h = "body1",
    variantMapping: g = us
  } = i, v = U(i, Gp), f = p({}, i, {
    align: s,
    color: r,
    className: a,
    component: l,
    gutterBottom: c,
    noWrap: u,
    paragraph: m,
    variant: h,
    variantMapping: g
  }), C = l || (m ? "p" : g[h] || us[h]) || "span", $ = Xp(f);
  return /* @__PURE__ */ E.jsx(Yp, p({
    as: C,
    ref: n,
    ownerState: f,
    className: re($.root, a)
  }, v));
}), Ra = Qp;
function ef(e) {
  return Re("MuiAlertTitle", e);
}
Se("MuiAlertTitle", ["root"]);
const tf = ["className"], nf = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"]
  }, ef, t);
}, of = K(Ra, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), rf = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: r
  } = o, i = U(o, tf), s = o, a = nf(s);
  return /* @__PURE__ */ E.jsx(of, p({
    gutterBottom: !0,
    component: "div",
    ownerState: s,
    ref: n,
    className: re(a.root, r)
  }, i));
}), Pb = rf, Sa = "base";
function sf(e) {
  return `${Sa}--${e}`;
}
function af(e, t) {
  return `${Sa}-${e}-${t}`;
}
function wa(e, t) {
  const n = da[t];
  return n ? sf(n) : af(e, t);
}
function lf(e, t) {
  const n = {};
  return t.forEach((o) => {
    n[o] = wa(e, o);
  }), n;
}
function ds(e) {
  return e.substring(2).toLowerCase();
}
function cf(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function Eb(e) {
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
  const u = Ue(
    // @ts-expect-error TODO upstream fix
    t.ref,
    a
  ), m = it((v) => {
    const f = c.current;
    c.current = !1;
    const C = Ke(a.current);
    if (!l.current || !a.current || "clientX" in v && cf(v, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let $;
    v.composedPath ? $ = v.composedPath().indexOf(a.current) > -1 : $ = !C.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      v.target
    ) || a.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      v.target
    ), !$ && (n || !f) && r(v);
  }), h = (v) => (f) => {
    c.current = !0;
    const C = t.props[v];
    C && C(f);
  }, g = {
    ref: u
  };
  return i !== !1 && (g[i] = h(i)), d.useEffect(() => {
    if (i !== !1) {
      const v = ds(i), f = Ke(a.current), C = () => {
        s.current = !0;
      };
      return f.addEventListener(v, m), f.addEventListener("touchmove", C), () => {
        f.removeEventListener(v, m), f.removeEventListener("touchmove", C);
      };
    }
  }, [m, i]), o !== !1 && (g[o] = h(o)), d.useEffect(() => {
    if (o !== !1) {
      const v = ds(o), f = Ke(a.current);
      return f.addEventListener(v, m), () => {
        f.removeEventListener(v, m);
      };
    }
  }, [m, o]), /* @__PURE__ */ E.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(t, g)
  });
}
const uf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function df(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function pf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function ff(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || pf(e));
}
function mf(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(uf)).forEach((o, r) => {
    const i = df(o);
    i === -1 || !ff(o) || (i === 0 ? t.push(o) : n.push({
      documentOrder: r,
      tabIndex: i,
      node: o
    }));
  }), n.sort((o, r) => o.tabIndex === r.tabIndex ? o.documentOrder - r.documentOrder : o.tabIndex - r.tabIndex).map((o) => o.node).concat(t);
}
function hf() {
  return !0;
}
function gf(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: r = !1,
    getTabbable: i = mf,
    isEnabled: s = hf,
    open: a
  } = e, l = d.useRef(!1), c = d.useRef(null), u = d.useRef(null), m = d.useRef(null), h = d.useRef(null), g = d.useRef(!1), v = d.useRef(null), f = Ue(t.ref, v), C = d.useRef(null);
  d.useEffect(() => {
    !a || !v.current || (g.current = !n);
  }, [n, a]), d.useEffect(() => {
    if (!a || !v.current)
      return;
    const y = Ke(v.current);
    return v.current.contains(y.activeElement) || (v.current.hasAttribute("tabIndex") || v.current.setAttribute("tabIndex", "-1"), g.current && v.current.focus()), () => {
      r || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [a]), d.useEffect(() => {
    if (!a || !v.current)
      return;
    const y = Ke(v.current), b = (x) => {
      C.current = x, !(o || !s() || x.key !== "Tab") && y.activeElement === v.current && x.shiftKey && (l.current = !0, u.current && u.current.focus());
    }, R = () => {
      const x = v.current;
      if (x === null)
        return;
      if (!y.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (x.contains(y.activeElement) || o && y.activeElement !== c.current && y.activeElement !== u.current)
        return;
      if (y.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let k = [];
      if ((y.activeElement === c.current || y.activeElement === u.current) && (k = i(v.current)), k.length > 0) {
        var M, O;
        const N = !!((M = C.current) != null && M.shiftKey && ((O = C.current) == null ? void 0 : O.key) === "Tab"), A = k[0], L = k[k.length - 1];
        typeof A != "string" && typeof L != "string" && (N ? L.focus() : A.focus());
      } else
        x.focus();
    };
    y.addEventListener("focusin", R), y.addEventListener("keydown", b, !0);
    const S = setInterval(() => {
      y.activeElement && y.activeElement.tagName === "BODY" && R();
    }, 50);
    return () => {
      clearInterval(S), y.removeEventListener("focusin", R), y.removeEventListener("keydown", b, !0);
    };
  }, [n, o, r, s, a, i]);
  const $ = (y) => {
    m.current === null && (m.current = y.relatedTarget), g.current = !0, h.current = y.target;
    const b = t.props.onFocus;
    b && b(y);
  }, w = (y) => {
    m.current === null && (m.current = y.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: w,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ d.cloneElement(t, {
      ref: f,
      onFocus: $
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
const vf = /* @__PURE__ */ d.createContext(void 0);
function bf() {
  return d.useContext(vf);
}
function Tb(e = {}) {
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
  } = e, u = bf();
  let m, h, g, v, f;
  if (u) {
    var C, $, w;
    m = void 0, h = (C = u.disabled) != null ? C : !1, g = ($ = u.error) != null ? $ : !1, v = (w = u.required) != null ? w : !1, f = u.value;
  } else
    m = t, h = n, g = o, v = a, f = l;
  const {
    current: y
  } = d.useRef(f != null), b = d.useCallback((B) => {
  }, []), R = d.useRef(null), S = Ue(R, c, b), [x, k] = d.useState(!1);
  d.useEffect(() => {
    !u && h && x && (k(!1), r == null || r());
  }, [u, h, x, r]);
  const M = (B) => (I) => {
    var F;
    if (u != null && u.disabled) {
      I.stopPropagation();
      return;
    }
    if ((F = B.onFocus) == null || F.call(B, I), u && u.onFocus) {
      var _;
      u == null || (_ = u.onFocus) == null || _.call(u);
    } else
      k(!0);
  }, O = (B) => (I) => {
    var F;
    (F = B.onBlur) == null || F.call(B, I), u && u.onBlur ? u.onBlur() : k(!1);
  }, N = (B) => (I, ...F) => {
    var _, q;
    if (!y && (I.target || R.current) == null)
      throw new Error(Et(17));
    u == null || (_ = u.onChange) == null || _.call(u, I), (q = B.onChange) == null || q.call(B, I, ...F);
  }, A = (B) => (I) => {
    var F;
    R.current && I.currentTarget === I.target && R.current.focus(), (F = B.onClick) == null || F.call(B, I);
  };
  return {
    disabled: h,
    error: g,
    focused: x,
    formControlContext: u,
    getInputProps: (B = {}) => {
      const F = p({}, {
        onBlur: r,
        onChange: i,
        onFocus: s
      }, _n(B)), _ = p({}, F, {
        onBlur: O(F),
        onChange: N(F),
        onFocus: M(F)
      });
      return p({}, _, {
        "aria-invalid": g || void 0,
        defaultValue: m,
        value: f,
        required: v,
        disabled: h
      }, B, {
        ref: S
      }, _);
    },
    getRootProps: (B = {}) => {
      const I = _n(e, ["onBlur", "onChange", "onFocus"]), F = p({}, I, _n(B));
      return p({}, B, F, {
        onClick: A(F)
      });
    },
    inputRef: S,
    required: v,
    value: f
  };
}
function yf(e) {
  return typeof e == "function" ? e() : e;
}
const Pa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    children: o,
    container: r,
    disablePortal: i = !1
  } = t, [s, a] = d.useState(null), l = Ue(/* @__PURE__ */ d.isValidElement(o) ? o.ref : null, n);
  if (Tt(() => {
    i || a(yf(r) || document.body);
  }, [r, i]), Tt(() => {
    if (s && !i)
      return $o(n, s), () => {
        $o(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ d.isValidElement(o)) {
      const c = {
        ref: l
      };
      return /* @__PURE__ */ d.cloneElement(o, c);
    }
    return /* @__PURE__ */ E.jsx(d.Fragment, {
      children: o
    });
  }
  return /* @__PURE__ */ E.jsx(d.Fragment, {
    children: s && /* @__PURE__ */ _s.createPortal(o, s)
  });
});
function xf(e) {
  const t = Ke(e);
  return t.body === e ? Xt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Dn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ps(e) {
  return parseInt(Xt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Cf(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function fs(e, t, n, o, r) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1, l = !Cf(s);
    a && l && Dn(s, r);
  });
}
function Tr(e, t) {
  let n = -1;
  return e.some((o, r) => t(o) ? (n = r, !0) : !1), n;
}
function $f(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (xf(o)) {
      const s = ua(Ke(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${ps(o) + s}px`;
      const a = Ke(o).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${ps(l) + s}px`;
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment)
      i = Ke(o).body;
    else {
      const s = o.parentElement, a = Xt(o);
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
function Rf(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Sf {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && Dn(t.modalRef, !1);
    const r = Rf(n);
    fs(n, t.mount, t.modalRef, r, !0);
    const i = Tr(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: r
    }), o);
  }
  mount(t, n) {
    const o = Tr(this.containers, (i) => i.modals.indexOf(t) !== -1), r = this.containers[o];
    r.restore || (r.restore = $f(r, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const r = Tr(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(o, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Dn(t.modalRef, n), fs(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Dn(s.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function wf(e) {
  return typeof e == "function" ? e() : e;
}
function Pf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ef = new Sf();
function Tf(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: r = Ef,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: c,
    open: u,
    rootRef: m
  } = e, h = d.useRef({}), g = d.useRef(null), v = d.useRef(null), f = Ue(v, m), [C, $] = d.useState(!u), w = Pf(l);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const b = () => Ke(g.current), R = () => (h.current.modalRef = v.current, h.current.mount = g.current, h.current), S = () => {
    r.mount(R(), {
      disableScrollLock: o
    }), v.current && (v.current.scrollTop = 0);
  }, x = it(() => {
    const I = wf(t) || b().body;
    r.add(R(), I), v.current && S();
  }), k = d.useCallback(() => r.isTopModal(R()), [r]), M = it((I) => {
    g.current = I, I && (u && k() ? S() : v.current && Dn(v.current, y));
  }), O = d.useCallback(() => {
    r.remove(R(), y);
  }, [y, r]);
  d.useEffect(() => () => {
    O();
  }, [O]), d.useEffect(() => {
    u ? x() : (!w || !i) && O();
  }, [u, O, w, i, x]);
  const N = (I) => (F) => {
    var _;
    (_ = I.onKeyDown) == null || _.call(I, F), !(F.key !== "Escape" || F.which === 229 || // Wait until IME is settled.
    !k()) && (n || (F.stopPropagation(), c && c(F, "escapeKeyDown")));
  }, A = (I) => (F) => {
    var _;
    (_ = I.onClick) == null || _.call(I, F), F.target === F.currentTarget && c && c(F, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const F = _n(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const _ = p({}, F, I);
      return p({
        role: "presentation"
      }, _, {
        onKeyDown: N(_),
        ref: f
      });
    },
    getBackdropProps: (I = {}) => {
      const F = I;
      return p({
        "aria-hidden": !0
      }, F, {
        onClick: A(F),
        open: u
      });
    },
    getTransitionProps: () => {
      const I = () => {
        $(!1), s && s();
      }, F = () => {
        $(!0), a && a(), i && O();
      };
      return {
        onEnter: zi(I, l == null ? void 0 : l.props.onEnter),
        onExited: zi(F, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: f,
    portalRef: M,
    isTopModal: k,
    exited: C,
    hasTransition: w
  };
}
var et = "top", mt = "bottom", ht = "right", tt = "left", yi = "auto", to = [et, mt, ht, tt], hn = "start", Gn = "end", kf = "clippingParents", Ea = "viewport", On = "popper", Of = "reference", ms = /* @__PURE__ */ to.reduce(function(e, t) {
  return e.concat([t + "-" + hn, t + "-" + Gn]);
}, []), Ta = /* @__PURE__ */ [].concat(to, [yi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + hn, t + "-" + Gn]);
}, []), If = "beforeRead", Mf = "read", Af = "afterRead", Bf = "beforeMain", Ff = "main", Lf = "afterMain", Nf = "beforeWrite", zf = "write", _f = "afterWrite", Df = [If, Mf, Af, Bf, Ff, Lf, Nf, zf, _f];
function Rt(e) {
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
function Jt(e) {
  var t = at(e).Element;
  return e instanceof t || e instanceof Element;
}
function ft(e) {
  var t = at(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function xi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function jf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !ft(i) || !Rt(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Wf(e) {
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
      !ft(r) || !Rt(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Hf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jf,
  effect: Wf,
  requires: ["computeStyles"]
};
function $t(e) {
  return e.split("-")[0];
}
var Gt = Math.max, Eo = Math.min, gn = Math.round;
function Ur() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ka() {
  return !/^((?!chrome|android).)*safari/i.test(Ur());
}
function vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, i = 1;
  t && ft(e) && (r = e.offsetWidth > 0 && gn(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && gn(o.height) / e.offsetHeight || 1);
  var s = Jt(e) ? at(e) : window, a = s.visualViewport, l = !ka() && n, c = (o.left + (l && a ? a.offsetLeft : 0)) / r, u = (o.top + (l && a ? a.offsetTop : 0)) / i, m = o.width / r, h = o.height / i;
  return {
    width: m,
    height: h,
    top: u,
    right: c + m,
    bottom: u + h,
    left: c,
    x: c,
    y: u
  };
}
function Ci(e) {
  var t = vn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Oa(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && xi(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ot(e) {
  return at(e).getComputedStyle(e);
}
function Uf(e) {
  return ["table", "td", "th"].indexOf(Rt(e)) >= 0;
}
function Nt(e) {
  return ((Jt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function mr(e) {
  return Rt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (xi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Nt(e)
  );
}
function hs(e) {
  return !ft(e) || // https://github.com/popperjs/popper-core/issues/837
  Ot(e).position === "fixed" ? null : e.offsetParent;
}
function Vf(e) {
  var t = /firefox/i.test(Ur()), n = /Trident/i.test(Ur());
  if (n && ft(e)) {
    var o = Ot(e);
    if (o.position === "fixed")
      return null;
  }
  var r = mr(e);
  for (xi(r) && (r = r.host); ft(r) && ["html", "body"].indexOf(Rt(r)) < 0; ) {
    var i = Ot(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function no(e) {
  for (var t = at(e), n = hs(e); n && Uf(n) && Ot(n).position === "static"; )
    n = hs(n);
  return n && (Rt(n) === "html" || Rt(n) === "body" && Ot(n).position === "static") ? t : n || Vf(e) || t;
}
function $i(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jn(e, t, n) {
  return Gt(e, Eo(t, n));
}
function Kf(e, t, n) {
  var o = jn(e, t, n);
  return o > n ? n : o;
}
function Ia() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ma(e) {
  return Object.assign({}, Ia(), e);
}
function Aa(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var qf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ma(typeof t != "number" ? t : Aa(t, to));
};
function Gf(e) {
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = $t(n.placement), l = $i(a), c = [tt, ht].indexOf(a) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var m = qf(r.padding, n), h = Ci(i), g = l === "y" ? et : tt, v = l === "y" ? mt : ht, f = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], C = s[l] - n.rects.reference[l], $ = no(i), w = $ ? l === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, y = f / 2 - C / 2, b = m[g], R = w - h[u] - m[v], S = w / 2 - h[u] / 2 + y, x = jn(b, S, R), k = l;
    n.modifiersData[o] = (t = {}, t[k] = x, t.centerOffset = x - S, t);
  }
}
function Xf(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Oa(t.elements.popper, r) && (t.elements.arrow = r));
}
const Yf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Gf,
  effect: Xf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function bn(e) {
  return e.split("-")[1];
}
var Zf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jf(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: gn(n * r) / r || 0,
    y: gn(o * r) / r || 0
  };
}
function gs(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, m = e.isFixed, h = s.x, g = h === void 0 ? 0 : h, v = s.y, f = v === void 0 ? 0 : v, C = typeof u == "function" ? u({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = C.x, f = C.y;
  var $ = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), y = tt, b = et, R = window;
  if (c) {
    var S = no(n), x = "clientHeight", k = "clientWidth";
    if (S === at(n) && (S = Nt(n), Ot(S).position !== "static" && a === "absolute" && (x = "scrollHeight", k = "scrollWidth")), S = S, r === et || (r === tt || r === ht) && i === Gn) {
      b = mt;
      var M = m && S === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[x]
      );
      f -= M - o.height, f *= l ? 1 : -1;
    }
    if (r === tt || (r === et || r === mt) && i === Gn) {
      y = ht;
      var O = m && S === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[k]
      );
      g -= O - o.width, g *= l ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: a
  }, c && Zf), A = u === !0 ? Jf({
    x: g,
    y: f
  }, at(n)) : {
    x: g,
    y: f
  };
  if (g = A.x, f = A.y, l) {
    var L;
    return Object.assign({}, N, (L = {}, L[b] = w ? "0" : "", L[y] = $ ? "0" : "", L.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", L));
  }
  return Object.assign({}, N, (t = {}, t[b] = w ? f + "px" : "", t[y] = $ ? g + "px" : "", t.transform = "", t));
}
function Qf(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, c = {
    placement: $t(t.placement),
    variation: bn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gs(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gs(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const em = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qf,
  data: {}
};
var uo = {
  passive: !0
};
function tm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, l = at(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, uo);
  }), a && l.addEventListener("resize", n.update, uo), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, uo);
    }), a && l.removeEventListener("resize", n.update, uo);
  };
}
const nm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: tm,
  data: {}
};
var om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return om[t];
  });
}
var rm = {
  start: "end",
  end: "start"
};
function vs(e) {
  return e.replace(/start|end/g, function(t) {
    return rm[t];
  });
}
function Ri(e) {
  var t = at(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Si(e) {
  return vn(Nt(e)).left + Ri(e).scrollLeft;
}
function im(e, t) {
  var n = at(e), o = Nt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    var c = ka();
    (c || !c && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Si(e),
    y: l
  };
}
function sm(e) {
  var t, n = Nt(e), o = Ri(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Gt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Gt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Si(e), l = -o.scrollTop;
  return Ot(r || n).direction === "rtl" && (a += Gt(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function wi(e) {
  var t = Ot(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Ba(e) {
  return ["html", "body", "#document"].indexOf(Rt(e)) >= 0 ? e.ownerDocument.body : ft(e) && wi(e) ? e : Ba(mr(e));
}
function Wn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Ba(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = at(o), s = r ? [i].concat(i.visualViewport || [], wi(o) ? o : []) : o, a = t.concat(s);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Wn(mr(s)))
  );
}
function Vr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function am(e, t) {
  var n = vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function bs(e, t, n) {
  return t === Ea ? Vr(im(e, n)) : Jt(t) ? am(t, n) : Vr(sm(Nt(e)));
}
function lm(e) {
  var t = Wn(mr(e)), n = ["absolute", "fixed"].indexOf(Ot(e).position) >= 0, o = n && ft(e) ? no(e) : e;
  return Jt(o) ? t.filter(function(r) {
    return Jt(r) && Oa(r, o) && Rt(r) !== "body";
  }) : [];
}
function cm(e, t, n, o) {
  var r = t === "clippingParents" ? lm(e) : [].concat(t), i = [].concat(r, [n]), s = i[0], a = i.reduce(function(l, c) {
    var u = bs(e, c, o);
    return l.top = Gt(u.top, l.top), l.right = Eo(u.right, l.right), l.bottom = Eo(u.bottom, l.bottom), l.left = Gt(u.left, l.left), l;
  }, bs(e, s, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Fa(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? $t(o) : null, i = o ? bn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case et:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case mt:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case ht:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case tt:
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
  var c = r ? $i(r) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case hn:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Gn:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Xn(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? kf : a, c = n.rootBoundary, u = c === void 0 ? Ea : c, m = n.elementContext, h = m === void 0 ? On : m, g = n.altBoundary, v = g === void 0 ? !1 : g, f = n.padding, C = f === void 0 ? 0 : f, $ = Ma(typeof C != "number" ? C : Aa(C, to)), w = h === On ? Of : On, y = e.rects.popper, b = e.elements[v ? w : h], R = cm(Jt(b) ? b : b.contextElement || Nt(e.elements.popper), l, u, s), S = vn(e.elements.reference), x = Fa({
    reference: S,
    element: y,
    strategy: "absolute",
    placement: r
  }), k = Vr(Object.assign({}, y, x)), M = h === On ? k : S, O = {
    top: R.top - M.top + $.top,
    bottom: M.bottom - R.bottom + $.bottom,
    left: R.left - M.left + $.left,
    right: M.right - R.right + $.right
  }, N = e.modifiersData.offset;
  if (h === On && N) {
    var A = N[r];
    Object.keys(O).forEach(function(L) {
      var z = [ht, mt].indexOf(L) >= 0 ? 1 : -1, B = [et, mt].indexOf(L) >= 0 ? "y" : "x";
      O[L] += A[B] * z;
    });
  }
  return O;
}
function um(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Ta : l, u = bn(o), m = u ? a ? ms : ms.filter(function(v) {
    return bn(v) === u;
  }) : to, h = m.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  h.length === 0 && (h = m);
  var g = h.reduce(function(v, f) {
    return v[f] = Xn(e, {
      placement: f,
      boundary: r,
      rootBoundary: i,
      padding: s
    })[$t(f)], v;
  }, {});
  return Object.keys(g).sort(function(v, f) {
    return g[v] - g[f];
  });
}
function dm(e) {
  if ($t(e) === yi)
    return [];
  var t = xo(e);
  return [vs(e), t, vs(t)];
}
function pm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, h = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, C = t.options.placement, $ = $t(C), w = $ === C, y = l || (w || !v ? [xo(C)] : dm(C)), b = [C].concat(y).reduce(function(H, X) {
      return H.concat($t(X) === yi ? um(t, {
        placement: X,
        boundary: u,
        rootBoundary: m,
        padding: c,
        flipVariations: v,
        allowedAutoPlacements: f
      }) : X);
    }, []), R = t.rects.reference, S = t.rects.popper, x = /* @__PURE__ */ new Map(), k = !0, M = b[0], O = 0; O < b.length; O++) {
      var N = b[O], A = $t(N), L = bn(N) === hn, z = [et, mt].indexOf(A) >= 0, B = z ? "width" : "height", I = Xn(t, {
        placement: N,
        boundary: u,
        rootBoundary: m,
        altBoundary: h,
        padding: c
      }), F = z ? L ? ht : tt : L ? mt : et;
      R[B] > S[B] && (F = xo(F));
      var _ = xo(F), q = [];
      if (i && q.push(I[A] <= 0), a && q.push(I[F] <= 0, I[_] <= 0), q.every(function(H) {
        return H;
      })) {
        M = N, k = !1;
        break;
      }
      x.set(N, q);
    }
    if (k)
      for (var se = v ? 3 : 1, Te = function(X) {
        var le = b.find(function(ke) {
          var Z = x.get(ke);
          if (Z)
            return Z.slice(0, X).every(function(te) {
              return te;
            });
        });
        if (le)
          return M = le, "break";
      }, he = se; he > 0; he--) {
        var fe = Te(he);
        if (fe === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const fm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ys(e, t, n) {
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
function xs(e) {
  return [et, ht, mt, tt].some(function(t) {
    return e[t] >= 0;
  });
}
function mm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = Xn(t, {
    elementContext: "reference"
  }), a = Xn(t, {
    altBoundary: !0
  }), l = ys(s, o), c = ys(a, r, i), u = xs(l), m = xs(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": m
  });
}
const hm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mm
};
function gm(e, t, n) {
  var o = $t(e), r = [tt, et].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * r, [tt, ht].indexOf(o) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function vm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, s = Ta.reduce(function(u, m) {
    return u[m] = gm(m, t.rects, i), u;
  }, {}), a = s[t.placement], l = a.x, c = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
const bm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vm
};
function ym(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Fa({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const xm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ym,
  data: {}
};
function Cm(e) {
  return e === "x" ? "y" : "x";
}
function $m(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, m = n.padding, h = n.tether, g = h === void 0 ? !0 : h, v = n.tetherOffset, f = v === void 0 ? 0 : v, C = Xn(t, {
    boundary: l,
    rootBoundary: c,
    padding: m,
    altBoundary: u
  }), $ = $t(t.placement), w = bn(t.placement), y = !w, b = $i($), R = Cm(b), S = t.modifiersData.popperOffsets, x = t.rects.reference, k = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, O = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var L, z = b === "y" ? et : tt, B = b === "y" ? mt : ht, I = b === "y" ? "height" : "width", F = S[b], _ = F + C[z], q = F - C[B], se = g ? -k[I] / 2 : 0, Te = w === hn ? x[I] : k[I], he = w === hn ? -k[I] : -x[I], fe = t.elements.arrow, H = g && fe ? Ci(fe) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ia(), le = X[z], ke = X[B], Z = jn(0, x[I], H[I]), te = y ? x[I] / 2 - se - Z - le - O.mainAxis : Te - Z - le - O.mainAxis, Oe = y ? -x[I] / 2 + se + Z + ke + O.mainAxis : he + Z + ke + O.mainAxis, ie = t.elements.arrow && no(t.elements.arrow), ae = ie ? b === "y" ? ie.clientTop || 0 : ie.clientLeft || 0 : 0, ne = (L = N == null ? void 0 : N[b]) != null ? L : 0, ce = F + te - ne - ae, Y = F + Oe - ne, W = jn(g ? Eo(_, ce) : _, F, g ? Gt(q, Y) : q);
      S[b] = W, A[b] = W - F;
    }
    if (a) {
      var je, ee = b === "x" ? et : tt, Ne = b === "x" ? mt : ht, be = S[R], pe = R === "y" ? "height" : "width", Ae = be + C[ee], Pe = be - C[Ne], de = [et, tt].indexOf($) !== -1, We = (je = N == null ? void 0 : N[R]) != null ? je : 0, He = de ? Ae : be - x[pe] - k[pe] - We + O.altAxis, Ve = de ? be + x[pe] + k[pe] - We - O.altAxis : Pe, oe = g && de ? Kf(He, be, Ve) : jn(g ? He : Ae, be, g ? Ve : Pe);
      S[R] = oe, A[R] = oe - be;
    }
    t.modifiersData[o] = A;
  }
}
const Rm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $m,
  requiresIfExists: ["offset"]
};
function Sm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wm(e) {
  return e === at(e) || !ft(e) ? Ri(e) : Sm(e);
}
function Pm(e) {
  var t = e.getBoundingClientRect(), n = gn(t.width) / e.offsetWidth || 1, o = gn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Em(e, t, n) {
  n === void 0 && (n = !1);
  var o = ft(t), r = ft(t) && Pm(t), i = Nt(t), s = vn(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((Rt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wi(i)) && (a = wm(t)), ft(t) ? (l = vn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Si(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Tm(e) {
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
function km(e) {
  var t = Tm(e);
  return Df.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Om(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Im(e) {
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
var Cs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $s() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Mm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? Cs : r;
  return function(a, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cs, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, g = {
      state: u,
      setOptions: function($) {
        var w = typeof $ == "function" ? $(u.options) : $;
        f(), u.options = Object.assign({}, i, u.options, w), u.scrollParents = {
          reference: Jt(a) ? Wn(a) : a.contextElement ? Wn(a.contextElement) : [],
          popper: Wn(l)
        };
        var y = km(Im([].concat(o, u.options.modifiers)));
        return u.orderedModifiers = y.filter(function(b) {
          return b.enabled;
        }), v(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var $ = u.elements, w = $.reference, y = $.popper;
          if ($s(w, y)) {
            u.rects = {
              reference: Em(w, no(y), u.options.strategy === "fixed"),
              popper: Ci(y)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
              return u.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var b = 0; b < u.orderedModifiers.length; b++) {
              if (u.reset === !0) {
                u.reset = !1, b = -1;
                continue;
              }
              var R = u.orderedModifiers[b], S = R.fn, x = R.options, k = x === void 0 ? {} : x, M = R.name;
              typeof S == "function" && (u = S({
                state: u,
                options: k,
                name: M,
                instance: g
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Om(function() {
        return new Promise(function(C) {
          g.forceUpdate(), C(u);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!$s(a, l))
      return g;
    g.setOptions(c).then(function(C) {
      !h && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function v() {
      u.orderedModifiers.forEach(function(C) {
        var $ = C.name, w = C.options, y = w === void 0 ? {} : w, b = C.effect;
        if (typeof b == "function") {
          var R = b({
            state: u,
            name: $,
            instance: g,
            options: y
          }), S = function() {
          };
          m.push(R || S);
        }
      });
    }
    function f() {
      m.forEach(function(C) {
        return C();
      }), m = [];
    }
    return g;
  };
}
var Am = [nm, xm, em, Hf, bm, fm, Rm, Yf, hm], Bm = /* @__PURE__ */ Mm({
  defaultModifiers: Am
});
const La = "Popper";
function Fm(e) {
  return wa(La, e);
}
lf(La, ["root"]);
const Lm = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Nm = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function zm(e, t) {
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
function Kr(e) {
  return typeof e == "function" ? e() : e;
}
function _m(e) {
  return e.nodeType !== void 0;
}
const Dm = () => $e({
  root: ["root"]
}, rp(Fm)), jm = {}, Wm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const {
    anchorEl: r,
    children: i,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: m,
    popperRef: h,
    slotProps: g = {},
    slots: v = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, C = U(t, Lm), $ = d.useRef(null), w = Ue($, n), y = d.useRef(null), b = Ue(y, h), R = d.useRef(b);
  Tt(() => {
    R.current = b;
  }, [b]), d.useImperativeHandle(h, () => y.current, []);
  const S = zm(u, s), [x, k] = d.useState(S), [M, O] = d.useState(Kr(r));
  d.useEffect(() => {
    y.current && y.current.forceUpdate();
  }), d.useEffect(() => {
    r && O(Kr(r));
  }, [r]), Tt(() => {
    if (!M || !c)
      return;
    const B = (_) => {
      k(_.placement);
    };
    let I = [{
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
        state: _
      }) => {
        B(_);
      }
    }];
    l != null && (I = I.concat(l)), m && m.modifiers != null && (I = I.concat(m.modifiers));
    const F = Bm(M, $.current, p({
      placement: S
    }, m, {
      modifiers: I
    }));
    return R.current(F), () => {
      F.destroy(), R.current(null);
    };
  }, [M, a, l, c, m, S]);
  const N = {
    placement: x
  };
  f !== null && (N.TransitionProps = f);
  const A = Dm(), L = (o = v.root) != null ? o : "div", z = Zt({
    elementType: L,
    externalSlotProps: g.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: A.root
  });
  return /* @__PURE__ */ E.jsx(L, p({}, z, {
    children: typeof i == "function" ? i(N) : i
  }));
}), Hm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: c,
    open: u,
    placement: m = "bottom",
    popperOptions: h = jm,
    popperRef: g,
    style: v,
    transition: f = !1,
    slotProps: C = {},
    slots: $ = {}
  } = t, w = U(t, Nm), [y, b] = d.useState(!0), R = () => {
    b(!1);
  }, S = () => {
    b(!0);
  };
  if (!l && !u && (!f || y))
    return null;
  let x;
  if (i)
    x = i;
  else if (o) {
    const O = Kr(o);
    x = O && _m(O) ? Ke(O).body : Ke(null).body;
  }
  const k = !u && l && (!f || y) ? "none" : void 0, M = f ? {
    in: u,
    onEnter: R,
    onExited: S
  } : void 0;
  return /* @__PURE__ */ E.jsx(Pa, {
    disablePortal: a,
    container: x,
    children: /* @__PURE__ */ E.jsx(Wm, p({
      anchorEl: o,
      direction: s,
      disablePortal: a,
      modifiers: c,
      ref: n,
      open: f ? !y : u,
      placement: m,
      popperOptions: h,
      popperRef: g,
      slotProps: C,
      slots: $
    }, w, {
      style: p({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k
      }, v),
      TransitionProps: M,
      children: r
    }))
  });
}), Um = ["onChange", "maxRows", "minRows", "style", "value"];
function po(e) {
  return parseInt(e, 10) || 0;
}
const Vm = {
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
function Rs(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const Km = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    onChange: o,
    maxRows: r,
    minRows: i = 1,
    style: s,
    value: a
  } = t, l = U(t, Um), {
    current: c
  } = d.useRef(a != null), u = d.useRef(null), m = Ue(n, u), h = d.useRef(null), g = d.useRef(0), [v, f] = d.useState({
    outerHeightStyle: 0
  }), C = d.useCallback(() => {
    const b = u.current, S = Xt(b).getComputedStyle(b);
    if (S.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const x = h.current;
    x.style.width = S.width, x.value = b.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const k = S.boxSizing, M = po(S.paddingBottom) + po(S.paddingTop), O = po(S.borderBottomWidth) + po(S.borderTopWidth), N = x.scrollHeight;
    x.value = "x";
    const A = x.scrollHeight;
    let L = N;
    i && (L = Math.max(Number(i) * A, L)), r && (L = Math.min(Number(r) * A, L)), L = Math.max(L, A);
    const z = L + (k === "border-box" ? M + O : 0), B = Math.abs(L - N) <= 1;
    return {
      outerHeightStyle: z,
      overflow: B
    };
  }, [r, i, t.placeholder]), $ = (b, R) => {
    const {
      outerHeightStyle: S,
      overflow: x
    } = R;
    return g.current < 20 && (S > 0 && Math.abs((b.outerHeightStyle || 0) - S) > 1 || b.overflow !== x) ? (g.current += 1, {
      overflow: x,
      outerHeightStyle: S
    }) : b;
  }, w = d.useCallback(() => {
    const b = C();
    Rs(b) || f((R) => $(R, b));
  }, [C]);
  Tt(() => {
    const b = () => {
      const N = C();
      Rs(N) || _s.flushSync(() => {
        f((A) => $(A, N));
      });
    }, R = () => {
      g.current = 0, b();
    };
    let S;
    const x = la(R), k = u.current, M = Xt(k);
    M.addEventListener("resize", x);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(R), O.observe(k)), () => {
      x.clear(), cancelAnimationFrame(S), M.removeEventListener("resize", x), O && O.disconnect();
    };
  }, [C]), Tt(() => {
    w();
  }), d.useEffect(() => {
    g.current = 0;
  }, [a]);
  const y = (b) => {
    g.current = 0, c || w(), o && o(b);
  };
  return /* @__PURE__ */ E.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ E.jsx("textarea", p({
      value: a,
      onChange: y,
      ref: m,
      rows: i,
      style: p({
        height: v.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: v.overflow ? "hidden" : void 0
      }, s)
    }, l)), /* @__PURE__ */ E.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: h,
      tabIndex: -1,
      style: p({}, Vm.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function Ss(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function qm(e = {}) {
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
    n && (u = u.toLowerCase()), t && (u = Ss(u));
    const m = u ? a.filter((h) => {
      let g = (i || c)(h);
      return n && (g = g.toLowerCase()), t && (g = Ss(g)), r === "start" ? g.indexOf(u) === 0 : g.indexOf(u) > -1;
    }) : a;
    return typeof o == "number" ? m.slice(0, o) : m;
  };
}
function kr(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const Gm = qm(), ws = 5, Xm = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function kb(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Xm,
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
    disableClearable: m = !1,
    disableCloseOnSelect: h = !1,
    disabled: g,
    disabledItemsFocusable: v = !1,
    disableListWrap: f = !1,
    filterOptions: C = Gm,
    filterSelectedOptions: $ = !1,
    freeSolo: w = !1,
    getOptionDisabled: y,
    getOptionKey: b,
    getOptionLabel: R = (T) => {
      var P;
      return (P = T.label) != null ? P : T;
    },
    groupBy: S,
    handleHomeEndKeys: x = !e.freeSolo,
    id: k,
    includeInputInList: M = !1,
    inputValue: O,
    isOptionEqualToValue: N = (T, P) => T === P,
    multiple: A = !1,
    onChange: L,
    onClose: z,
    onHighlightChange: B,
    onInputChange: I,
    onOpen: F,
    open: _,
    openOnFocus: q = !1,
    options: se,
    readOnly: Te = !1,
    selectOnFocus: he = !e.freeSolo,
    value: fe
  } = e, H = er(k);
  let X = R;
  X = (T) => {
    const P = R(T);
    return typeof P != "string" ? String(P) : P;
  };
  const le = d.useRef(!1), ke = d.useRef(!0), Z = d.useRef(null), te = d.useRef(null), [Oe, ie] = d.useState(null), [ae, ne] = d.useState(-1), ce = r ? 0 : -1, Y = d.useRef(ce), [W, je] = dn({
    controlled: fe,
    default: u,
    name: c
  }), [ee, Ne] = dn({
    controlled: O,
    default: "",
    name: c,
    state: "inputValue"
  }), [be, pe] = d.useState(!1), Ae = d.useCallback((T, P) => {
    if (!(A ? W.length < P.length : P !== null) && !a)
      return;
    let G;
    if (A)
      G = "";
    else if (P == null)
      G = "";
    else {
      const xe = X(P);
      G = typeof xe == "string" ? xe : "";
    }
    ee !== G && (Ne(G), I && I(T, G, "reset"));
  }, [X, ee, A, I, Ne, a, W]), [Pe, de] = dn({
    controlled: _,
    default: !1,
    name: c,
    state: "open"
  }), [We, He] = d.useState(!0), Ve = !A && W != null && ee === X(W), oe = Pe && !Te, D = oe ? C(
    se.filter((T) => !($ && (A ? W : [W]).some((P) => P !== null && N(T, P)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ve && We ? "" : ee,
      getOptionLabel: X
    }
  ) : [], ye = wc({
    filteredOptions: D,
    value: W,
    inputValue: ee
  });
  d.useEffect(() => {
    const T = W !== ye.value;
    be && !T || w && !T || Ae(null, W);
  }, [W, Ae, be, ye.value, w]);
  const ot = Pe && D.length > 0 && !Te, Xe = it((T) => {
    T === -1 ? Z.current.focus() : Oe.querySelector(`[data-tag-index="${T}"]`).focus();
  });
  d.useEffect(() => {
    A && ae > W.length - 1 && (ne(-1), Xe(-1));
  }, [W, A, ae, Xe]);
  function V(T, P) {
    if (!te.current || T < 0 || T >= D.length)
      return -1;
    let j = T;
    for (; ; ) {
      const G = te.current.querySelector(`[data-option-index="${j}"]`), xe = v ? !1 : !G || G.disabled || G.getAttribute("aria-disabled") === "true";
      if (G && G.hasAttribute("tabindex") && !xe)
        return j;
      if (P === "next" ? j = (j + 1) % D.length : j = (j - 1 + D.length) % D.length, j === T)
        return -1;
    }
  }
  const ue = it(({
    event: T,
    index: P,
    reason: j = "auto"
  }) => {
    if (Y.current = P, P === -1 ? Z.current.removeAttribute("aria-activedescendant") : Z.current.setAttribute("aria-activedescendant", `${H}-option-${P}`), B && B(T, P === -1 ? null : D[P], j), !te.current)
      return;
    const G = te.current.querySelector(`[role="option"].${n}-focused`);
    G && (G.classList.remove(`${n}-focused`), G.classList.remove(`${n}-focusVisible`));
    let xe = te.current;
    if (te.current.getAttribute("role") !== "listbox" && (xe = te.current.parentElement.querySelector('[role="listbox"]')), !xe)
      return;
    if (P === -1) {
      xe.scrollTop = 0;
      return;
    }
    const Be = te.current.querySelector(`[data-option-index="${P}"]`);
    if (Be && (Be.classList.add(`${n}-focused`), j === "keyboard" && Be.classList.add(`${n}-focusVisible`), xe.scrollHeight > xe.clientHeight && j !== "mouse" && j !== "touch")) {
      const ze = Be, Q = xe.clientHeight + xe.scrollTop, Ye = ze.offsetTop + ze.offsetHeight;
      Ye > Q ? xe.scrollTop = Ye - xe.clientHeight : ze.offsetTop - ze.offsetHeight * (S ? 1.3 : 0) < xe.scrollTop && (xe.scrollTop = ze.offsetTop - ze.offsetHeight * (S ? 1.3 : 0));
    }
  }), me = it(({
    event: T,
    diff: P,
    direction: j = "next",
    reason: G = "auto"
  }) => {
    if (!oe)
      return;
    const Be = V((() => {
      const ze = D.length - 1;
      if (P === "reset")
        return ce;
      if (P === "start")
        return 0;
      if (P === "end")
        return ze;
      const Q = Y.current + P;
      return Q < 0 ? Q === -1 && M ? -1 : f && Y.current !== -1 || Math.abs(P) > 1 ? 0 : ze : Q > ze ? Q === ze + 1 && M ? -1 : f || Math.abs(P) > 1 ? ze : 0 : Q;
    })(), j);
    if (ue({
      index: Be,
      reason: G,
      event: T
    }), o && P !== "reset")
      if (Be === -1)
        Z.current.value = ee;
      else {
        const ze = X(D[Be]);
        Z.current.value = ze, ze.toLowerCase().indexOf(ee.toLowerCase()) === 0 && ee.length > 0 && Z.current.setSelectionRange(ee.length, ze.length);
      }
  }), ct = () => {
    const T = (P, j) => {
      const G = P ? X(P) : "", xe = j ? X(j) : "";
      return G === xe;
    };
    if (Y.current !== -1 && ye.filteredOptions && ye.filteredOptions.length !== D.length && ye.inputValue === ee && (A ? W.length === ye.value.length && ye.value.every((P, j) => X(W[j]) === X(P)) : T(ye.value, W))) {
      const P = ye.filteredOptions[Y.current];
      if (P && D.some((G) => X(G) === X(P)))
        return !0;
    }
    return !1;
  }, St = d.useCallback(() => {
    if (!oe || ct())
      return;
    const T = A ? W[0] : W;
    if (D.length === 0 || T == null) {
      me({
        diff: "reset"
      });
      return;
    }
    if (te.current) {
      if (T != null) {
        const P = D[Y.current];
        if (A && P && kr(W, (G) => N(P, G)) !== -1)
          return;
        const j = kr(D, (G) => N(G, T));
        j === -1 ? me({
          diff: "reset"
        }) : ue({
          index: j
        });
        return;
      }
      if (Y.current >= D.length - 1) {
        ue({
          index: D.length - 1
        });
        return;
      }
      ue({
        index: Y.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    D.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    A ? !1 : W,
    $,
    me,
    ue,
    oe,
    ee,
    A
  ]), oo = it((T) => {
    $o(te, T), T && St();
  });
  d.useEffect(() => {
    St();
  }, [St]);
  const wt = (T) => {
    Pe || (de(!0), He(!0), F && F(T));
  }, zt = (T, P) => {
    Pe && (de(!1), z && z(T, P));
  }, Mt = (T, P, j, G) => {
    if (A) {
      if (W.length === P.length && W.every((xe, Be) => xe === P[Be]))
        return;
    } else if (W === P)
      return;
    L && L(T, P, j, G), je(P);
  }, _t = d.useRef(!1), At = (T, P, j = "selectOption", G = "options") => {
    let xe = j, Be = P;
    if (A) {
      Be = Array.isArray(W) ? W.slice() : [];
      const ze = kr(Be, (Q) => N(P, Q));
      ze === -1 ? Be.push(P) : G !== "freeSolo" && (Be.splice(ze, 1), xe = "removeOption");
    }
    Ae(T, Be), Mt(T, Be, xe, {
      option: P
    }), !h && (!T || !T.ctrlKey && !T.metaKey) && zt(T, xe), (s === !0 || s === "touch" && _t.current || s === "mouse" && !_t.current) && Z.current.blur();
  };
  function ro(T, P) {
    if (T === -1)
      return -1;
    let j = T;
    for (; ; ) {
      if (P === "next" && j === W.length || P === "previous" && j === -1)
        return -1;
      const G = Oe.querySelector(`[data-tag-index="${j}"]`);
      if (!G || !G.hasAttribute("tabindex") || G.disabled || G.getAttribute("aria-disabled") === "true")
        j += P === "next" ? 1 : -1;
      else
        return j;
    }
  }
  const Rn = (T, P) => {
    if (!A)
      return;
    ee === "" && zt(T, "toggleInput");
    let j = ae;
    ae === -1 ? ee === "" && P === "previous" && (j = W.length - 1) : (j += P === "next" ? 1 : -1, j < 0 && (j = 0), j === W.length && (j = -1)), j = ro(j, P), ne(j), Xe(j);
  }, Sn = (T) => {
    le.current = !0, Ne(""), I && I(T, "", "clear"), Mt(T, A ? [] : null, "clear");
  }, io = (T) => (P) => {
    if (T.onKeyDown && T.onKeyDown(P), !P.defaultMuiPrevented && (ae !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(P.key) === -1 && (ne(-1), Xe(-1)), P.which !== 229))
      switch (P.key) {
        case "Home":
          oe && x && (P.preventDefault(), me({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: P
          }));
          break;
        case "End":
          oe && x && (P.preventDefault(), me({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: P
          }));
          break;
        case "PageUp":
          P.preventDefault(), me({
            diff: -ws,
            direction: "previous",
            reason: "keyboard",
            event: P
          }), wt(P);
          break;
        case "PageDown":
          P.preventDefault(), me({
            diff: ws,
            direction: "next",
            reason: "keyboard",
            event: P
          }), wt(P);
          break;
        case "ArrowDown":
          P.preventDefault(), me({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: P
          }), wt(P);
          break;
        case "ArrowUp":
          P.preventDefault(), me({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: P
          }), wt(P);
          break;
        case "ArrowLeft":
          Rn(P, "previous");
          break;
        case "ArrowRight":
          Rn(P, "next");
          break;
        case "Enter":
          if (Y.current !== -1 && oe) {
            const j = D[Y.current], G = y ? y(j) : !1;
            if (P.preventDefault(), G)
              return;
            At(P, j, "selectOption"), o && Z.current.setSelectionRange(Z.current.value.length, Z.current.value.length);
          } else
            w && ee !== "" && Ve === !1 && (A && P.preventDefault(), At(P, ee, "createOption", "freeSolo"));
          break;
        case "Escape":
          oe ? (P.preventDefault(), P.stopPropagation(), zt(P, "escape")) : l && (ee !== "" || A && W.length > 0) && (P.preventDefault(), P.stopPropagation(), Sn(P));
          break;
        case "Backspace":
          if (A && !Te && ee === "" && W.length > 0) {
            const j = ae === -1 ? W.length - 1 : ae, G = W.slice();
            G.splice(j, 1), Mt(P, G, "removeOption", {
              option: W[j]
            });
          }
          break;
        case "Delete":
          if (A && !Te && ee === "" && W.length > 0 && ae !== -1) {
            const j = ae, G = W.slice();
            G.splice(j, 1), Mt(P, G, "removeOption", {
              option: W[j]
            });
          }
          break;
      }
  }, xr = (T) => {
    pe(!0), q && !le.current && wt(T);
  }, so = (T) => {
    if (t(te)) {
      Z.current.focus();
      return;
    }
    pe(!1), ke.current = !0, le.current = !1, i && Y.current !== -1 && oe ? At(T, D[Y.current], "blur") : i && w && ee !== "" ? At(T, ee, "blur", "freeSolo") : a && Ae(T, W), zt(T, "blur");
  }, Cr = (T) => {
    const P = T.target.value;
    ee !== P && (Ne(P), He(!1), I && I(T, P, "input")), P === "" ? !m && !A && Mt(T, null, "clear") : wt(T);
  }, wn = (T) => {
    const P = Number(T.currentTarget.getAttribute("data-option-index"));
    Y.current !== P && ue({
      event: T,
      index: P,
      reason: "mouse"
    });
  }, $r = (T) => {
    ue({
      event: T,
      index: Number(T.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), _t.current = !0;
  }, Dt = (T) => {
    const P = Number(T.currentTarget.getAttribute("data-option-index"));
    At(T, D[P], "selectOption"), _t.current = !1;
  }, Pn = (T) => (P) => {
    const j = W.slice();
    j.splice(T, 1), Mt(P, j, "removeOption", {
      option: W[T]
    });
  }, Je = (T) => {
    Pe ? zt(T, "toggleInput") : wt(T);
  }, jt = (T) => {
    T.currentTarget.contains(T.target) && T.target.getAttribute("id") !== H && T.preventDefault();
  }, Rr = (T) => {
    T.currentTarget.contains(T.target) && (Z.current.focus(), he && ke.current && Z.current.selectionEnd - Z.current.selectionStart === 0 && Z.current.select(), ke.current = !1);
  }, Wt = (T) => {
    !g && (ee === "" || !Pe) && Je(T);
  };
  let Ht = w && ee.length > 0;
  Ht = Ht || (A ? W.length > 0 : W !== null);
  let En = D;
  return S && (En = D.reduce((T, P, j) => {
    const G = S(P);
    return T.length > 0 && T[T.length - 1].group === G ? T[T.length - 1].options.push(P) : T.push({
      key: j,
      index: j,
      group: G,
      options: [P]
    }), T;
  }, [])), g && be && so(), {
    getRootProps: (T = {}) => p({
      "aria-owns": ot ? `${H}-listbox` : null
    }, T, {
      onKeyDown: io(T),
      onMouseDown: jt,
      onClick: Rr
    }),
    getInputLabelProps: () => ({
      id: `${H}-label`,
      htmlFor: H
    }),
    getInputProps: () => ({
      id: H,
      value: ee,
      onBlur: so,
      onFocus: xr,
      onChange: Cr,
      onMouseDown: Wt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": oe ? "" : null,
      "aria-autocomplete": o ? "both" : "list",
      "aria-controls": ot ? `${H}-listbox` : void 0,
      "aria-expanded": ot,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: Z,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: g
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Sn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Je
    }),
    getTagProps: ({
      index: T
    }) => p({
      key: T,
      "data-tag-index": T,
      tabIndex: -1
    }, !Te && {
      onDelete: Pn(T)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${H}-listbox`,
      "aria-labelledby": `${H}-label`,
      ref: oo,
      onMouseDown: (T) => {
        T.preventDefault();
      }
    }),
    getOptionProps: ({
      index: T,
      option: P
    }) => {
      var j;
      const G = (A ? W : [W]).some((Be) => Be != null && N(P, Be)), xe = y ? y(P) : !1;
      return {
        key: (j = b == null ? void 0 : b(P)) != null ? j : X(P),
        tabIndex: -1,
        role: "option",
        id: `${H}-option-${T}`,
        onMouseMove: wn,
        onClick: Dt,
        onTouchStart: $r,
        "data-option-index": T,
        "aria-disabled": xe,
        "aria-selected": G
      };
    },
    id: H,
    inputValue: ee,
    value: W,
    dirty: Ht,
    expanded: oe && Oe,
    popupOpen: oe,
    focused: be || ae !== -1,
    anchorEl: Oe,
    setAnchorEl: ie,
    focusedTag: ae,
    groupedOptions: En
  };
}
const Ym = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Zm = K(Hm, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Jm = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const r = fi(), i = we({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: m,
    keepMounted: h,
    modifiers: g,
    open: v,
    placement: f,
    popperOptions: C,
    popperRef: $,
    transition: w,
    slots: y,
    slotProps: b
  } = i, R = U(i, Ym), S = (o = y == null ? void 0 : y.root) != null ? o : l == null ? void 0 : l.Root, x = p({
    anchorEl: s,
    container: u,
    disablePortal: m,
    keepMounted: h,
    modifiers: g,
    open: v,
    placement: f,
    popperOptions: C,
    popperRef: $,
    transition: w
  }, R);
  return /* @__PURE__ */ E.jsx(Zm, p({
    as: a,
    direction: r == null ? void 0 : r.direction,
    slots: {
      root: S
    },
    slotProps: b ?? c
  }, x, {
    ref: n
  }));
}), Na = Jm;
function $n({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((o, r) => (o[r] = e[r], n && typeof e[r] > "u" && (o[r] = n[r]), o), {});
}
const Qm = /* @__PURE__ */ d.createContext(void 0), hr = Qm;
function Qt() {
  return d.useContext(hr);
}
function eh(e) {
  return /* @__PURE__ */ E.jsx(ku, p({}, e, {
    defaultTheme: dr,
    themeId: mn
  }));
}
function Ps(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function To(e, t = !1) {
  return e && (Ps(e.value) && e.value !== "" || t && Ps(e.defaultValue) && e.defaultValue !== "");
}
function th(e) {
  return e.startAdornment;
}
function nh(e) {
  return Re("MuiInputBase", e);
}
const oh = Se("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), yn = oh, rh = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], gr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${J(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, vr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, ih = (e) => {
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
    readOnly: m,
    size: h,
    startAdornment: g,
    type: v
  } = e, f = {
    root: ["root", `color${J(n)}`, o && "disabled", r && "error", l && "fullWidth", s && "focused", a && "formControl", h && h !== "medium" && `size${J(h)}`, u && "multiline", g && "adornedStart", i && "adornedEnd", c && "hiddenLabel", m && "readOnly"],
    input: ["input", o && "disabled", v === "search" && "inputTypeSearch", u && "inputMultiline", h === "small" && "inputSizeSmall", c && "inputHiddenLabel", g && "inputAdornedStart", i && "inputAdornedEnd", m && "readOnly"]
  };
  return $e(f, nh, t);
}, br = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: gr
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
  [`&.${yn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && p({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), yr = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: vr
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
    [`label[data-shrink=false] + .${yn.formControl} &`]: {
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
    [`&.${yn.disabled}`]: {
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
}), sh = /* @__PURE__ */ E.jsx(eh, {
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
}), ah = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const r = we({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    components: c = {},
    componentsProps: u = {},
    defaultValue: m,
    disabled: h,
    disableInjectingGlobalStyles: g,
    endAdornment: v,
    fullWidth: f = !1,
    id: C,
    inputComponent: $ = "input",
    inputProps: w = {},
    inputRef: y,
    maxRows: b,
    minRows: R,
    multiline: S = !1,
    name: x,
    onBlur: k,
    onChange: M,
    onClick: O,
    onFocus: N,
    onKeyDown: A,
    onKeyUp: L,
    placeholder: z,
    readOnly: B,
    renderSuffix: I,
    rows: F,
    slotProps: _ = {},
    slots: q = {},
    startAdornment: se,
    type: Te = "text",
    value: he
  } = r, fe = U(r, rh), H = w.value != null ? w.value : he, {
    current: X
  } = d.useRef(H != null), le = d.useRef(), ke = d.useCallback((oe) => {
  }, []), Z = Ue(le, y, w.ref, ke), [te, Oe] = d.useState(!1), ie = Qt(), ae = $n({
    props: r,
    muiFormControl: ie,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ae.focused = ie ? ie.focused : te, d.useEffect(() => {
    !ie && h && te && (Oe(!1), k && k());
  }, [ie, h, te, k]);
  const ne = ie && ie.onFilled, ce = ie && ie.onEmpty, Y = d.useCallback((oe) => {
    To(oe) ? ne && ne() : ce && ce();
  }, [ne, ce]);
  Tt(() => {
    X && Y({
      value: H
    });
  }, [H, Y, X]);
  const W = (oe) => {
    if (ae.disabled) {
      oe.stopPropagation();
      return;
    }
    N && N(oe), w.onFocus && w.onFocus(oe), ie && ie.onFocus ? ie.onFocus(oe) : Oe(!0);
  }, je = (oe) => {
    k && k(oe), w.onBlur && w.onBlur(oe), ie && ie.onBlur ? ie.onBlur(oe) : Oe(!1);
  }, ee = (oe, ...D) => {
    if (!X) {
      const ye = oe.target || le.current;
      if (ye == null)
        throw new Error(Et(1));
      Y({
        value: ye.value
      });
    }
    w.onChange && w.onChange(oe, ...D), M && M(oe, ...D);
  };
  d.useEffect(() => {
    Y(le.current);
  }, []);
  const Ne = (oe) => {
    le.current && oe.currentTarget === oe.target && le.current.focus(), O && O(oe);
  };
  let be = $, pe = w;
  S && be === "input" && (F ? pe = p({
    type: void 0,
    minRows: F,
    maxRows: F
  }, pe) : pe = p({
    type: void 0,
    maxRows: b,
    minRows: R
  }, pe), be = Km);
  const Ae = (oe) => {
    Y(oe.animationName === "mui-auto-fill-cancel" ? le.current : {
      value: "x"
    });
  };
  d.useEffect(() => {
    ie && ie.setAdornedStart(!!se);
  }, [ie, se]);
  const Pe = p({}, r, {
    color: ae.color || "primary",
    disabled: ae.disabled,
    endAdornment: v,
    error: ae.error,
    focused: ae.focused,
    formControl: ie,
    fullWidth: f,
    hiddenLabel: ae.hiddenLabel,
    multiline: S,
    size: ae.size,
    startAdornment: se,
    type: Te
  }), de = ih(Pe), We = q.root || c.Root || br, He = _.root || u.root || {}, Ve = q.input || c.Input || yr;
  return pe = p({}, pe, (o = _.input) != null ? o : u.input), /* @__PURE__ */ E.jsxs(d.Fragment, {
    children: [!g && sh, /* @__PURE__ */ E.jsxs(We, p({}, He, !Po(We) && {
      ownerState: p({}, Pe, He.ownerState)
    }, {
      ref: n,
      onClick: Ne
    }, fe, {
      className: re(de.root, He.className, l, B && "MuiInputBase-readOnly"),
      children: [se, /* @__PURE__ */ E.jsx(hr.Provider, {
        value: null,
        children: /* @__PURE__ */ E.jsx(Ve, p({
          ownerState: Pe,
          "aria-invalid": ae.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: m,
          disabled: ae.disabled,
          id: C,
          onAnimationStart: Ae,
          name: x,
          placeholder: z,
          readOnly: B,
          required: ae.required,
          rows: F,
          value: H,
          onKeyDown: A,
          onKeyUp: L,
          type: Te
        }, pe, !Po(Ve) && {
          as: be,
          ownerState: p({}, Pe, pe.ownerState)
        }, {
          ref: Z,
          className: re(de.input, pe.className, B && "MuiInputBase-readOnly"),
          onBlur: je,
          onChange: ee,
          onFocus: W
        }))
      }), v, I ? I(p({}, ae, {
        startAdornment: se
      })) : null]
    }))]
  });
}), Pi = ah;
function lh(e) {
  return Re("MuiInput", e);
}
const ch = p({}, yn, Se("MuiInput", ["root", "underline", "input"])), In = ch;
function uh(e) {
  return Re("MuiOutlinedInput", e);
}
const dh = p({}, yn, Se("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Bt = dh;
function ph(e) {
  return Re("MuiFilledInput", e);
}
const fh = p({}, yn, Se("MuiFilledInput", ["root", "underline", "input"])), Ut = fh, mh = Cn(/* @__PURE__ */ E.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), hh = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], gh = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, vh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = pr(), r = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: l,
    in: c,
    onEnter: u,
    onEntered: m,
    onEntering: h,
    onExit: g,
    onExited: v,
    onExiting: f,
    style: C,
    timeout: $ = r,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = xa
  } = t, y = U(t, hh), b = d.useRef(null), R = Ue(b, a.ref, n), S = (z) => (B) => {
    if (z) {
      const I = b.current;
      B === void 0 ? z(I) : z(I, B);
    }
  }, x = S(h), k = S((z, B) => {
    Ca(z);
    const I = wo({
      style: C,
      timeout: $,
      easing: l
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = o.transitions.create("opacity", I), z.style.transition = o.transitions.create("opacity", I), u && u(z, B);
  }), M = S(m), O = S(f), N = S((z) => {
    const B = wo({
      style: C,
      timeout: $,
      easing: l
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = o.transitions.create("opacity", B), z.style.transition = o.transitions.create("opacity", B), g && g(z);
  }), A = S(v), L = (z) => {
    i && i(b.current, z);
  };
  return /* @__PURE__ */ E.jsx(w, p({
    appear: s,
    in: c,
    nodeRef: b,
    onEnter: k,
    onEntered: M,
    onEntering: x,
    onExit: N,
    onExited: A,
    onExiting: O,
    addEndListener: L,
    timeout: $
  }, y, {
    children: (z, B) => /* @__PURE__ */ d.cloneElement(a, p({
      style: p({
        opacity: 0,
        visibility: z === "exited" && !c ? "hidden" : void 0
      }, gh[z], C, a.props.style),
      ref: R
    }, B))
  }));
}), bh = vh;
function yh(e) {
  return Re("MuiBackdrop", e);
}
Se("MuiBackdrop", ["root", "invisible"]);
const xh = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Ch = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return $e({
    root: ["root", n && "invisible"]
  }, yh, t);
}, $h = K("div", {
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
})), Rh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i;
  const s = we({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: a,
    className: l,
    component: c = "div",
    components: u = {},
    componentsProps: m = {},
    invisible: h = !1,
    open: g,
    slotProps: v = {},
    slots: f = {},
    TransitionComponent: C = bh,
    transitionDuration: $
  } = s, w = U(s, xh), y = p({}, s, {
    component: c,
    invisible: h
  }), b = Ch(y), R = (o = v.root) != null ? o : m.root;
  return /* @__PURE__ */ E.jsx(C, p({
    in: g,
    timeout: $
  }, w, {
    children: /* @__PURE__ */ E.jsx($h, p({
      "aria-hidden": !0
    }, R, {
      as: (r = (i = f.root) != null ? i : u.Root) != null ? r : c,
      className: re(b.root, l, R == null ? void 0 : R.className),
      ownerState: p({}, y, R == null ? void 0 : R.ownerState),
      classes: b,
      ref: n,
      children: a
    }))
  }));
}), Sh = Rh;
function wh(e) {
  return Re("MuiButton", e);
}
const Ph = Se("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), fo = Ph, Eh = /* @__PURE__ */ d.createContext({}), Th = Eh, kh = /* @__PURE__ */ d.createContext(void 0), Oh = kh, Ih = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Mh = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: o,
    size: r,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${J(t)}`, `size${J(r)}`, `${i}Size${J(r)}`, t === "inherit" && "colorInherit", n && "disableElevation", o && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${J(r)}`],
    endIcon: ["endIcon", `iconSize${J(r)}`]
  }, l = $e(a, wh, s);
  return p({}, s, l);
}, za = (e) => p({}, e.size === "small" && {
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
}), Ah = K(bi, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${J(n.color)}`], t[`size${J(n.size)}`], t[`${n.variant}Size${J(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    [`&.${fo.focusVisible}`]: p({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${fo.disabled}`]: p({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Qe(e.palette[t.color].main, 0.5)}`
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
  [`&.${fo.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${fo.disabled}`]: {
    boxShadow: "none"
  }
}), Bh = K("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${J(n.size)}`]];
  }
})(({
  ownerState: e
}) => p({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, za(e))), Fh = K("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${J(n.size)}`]];
  }
})(({
  ownerState: e
}) => p({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, za(e))), Lh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = d.useContext(Th), r = d.useContext(Oh), i = nr(o, t), s = we({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: m = !1,
    disableElevation: h = !1,
    disableFocusRipple: g = !1,
    endIcon: v,
    focusVisibleClassName: f,
    fullWidth: C = !1,
    size: $ = "medium",
    startIcon: w,
    type: y,
    variant: b = "text"
  } = s, R = U(s, Ih), S = p({}, s, {
    color: l,
    component: c,
    disabled: m,
    disableElevation: h,
    disableFocusRipple: g,
    fullWidth: C,
    size: $,
    type: y,
    variant: b
  }), x = Mh(S), k = w && /* @__PURE__ */ E.jsx(Bh, {
    className: x.startIcon,
    ownerState: S,
    children: w
  }), M = v && /* @__PURE__ */ E.jsx(Fh, {
    className: x.endIcon,
    ownerState: S,
    children: v
  }), O = r || "";
  return /* @__PURE__ */ E.jsxs(Ah, p({
    ownerState: S,
    className: re(o.className, x.root, u, O),
    component: c,
    disabled: m,
    focusRipple: !g,
    focusVisibleClassName: re(x.focusVisible, f),
    ref: n,
    type: y
  }, R, {
    classes: x,
    children: [k, a, M]
  }));
}), Ob = Lh;
function Nh(e) {
  return Re("MuiModal", e);
}
Se("MuiModal", ["root", "hidden", "backdrop"]);
const zh = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], _h = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return $e({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Nh, o);
}, Dh = K("div", {
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
})), jh = K(Sh, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Wh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a, l;
  const c = we({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: u = jh,
    BackdropProps: m,
    className: h,
    closeAfterTransition: g = !1,
    children: v,
    container: f,
    component: C,
    components: $ = {},
    componentsProps: w = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: R = !1,
    disablePortal: S = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: k = !1,
    hideBackdrop: M = !1,
    keepMounted: O = !1,
    onBackdropClick: N,
    open: A,
    slotProps: L,
    slots: z
    // eslint-disable-next-line react/prop-types
  } = c, B = U(c, zh), I = p({}, c, {
    closeAfterTransition: g,
    disableAutoFocus: y,
    disableEnforceFocus: b,
    disableEscapeKeyDown: R,
    disablePortal: S,
    disableRestoreFocus: x,
    disableScrollLock: k,
    hideBackdrop: M,
    keepMounted: O
  }), {
    getRootProps: F,
    getBackdropProps: _,
    getTransitionProps: q,
    portalRef: se,
    isTopModal: Te,
    exited: he,
    hasTransition: fe
  } = Tf(p({}, I, {
    rootRef: n
  })), H = p({}, I, {
    exited: he
  }), X = _h(H), le = {};
  if (v.props.tabIndex === void 0 && (le.tabIndex = "-1"), fe) {
    const {
      onEnter: ne,
      onExited: ce
    } = q();
    le.onEnter = ne, le.onExited = ce;
  }
  const ke = (o = (r = z == null ? void 0 : z.root) != null ? r : $.Root) != null ? o : Dh, Z = (i = (s = z == null ? void 0 : z.backdrop) != null ? s : $.Backdrop) != null ? i : u, te = (a = L == null ? void 0 : L.root) != null ? a : w.root, Oe = (l = L == null ? void 0 : L.backdrop) != null ? l : w.backdrop, ie = Zt({
    elementType: ke,
    externalSlotProps: te,
    externalForwardedProps: B,
    getSlotProps: F,
    additionalProps: {
      ref: n,
      as: C
    },
    ownerState: H,
    className: re(h, te == null ? void 0 : te.className, X == null ? void 0 : X.root, !H.open && H.exited && (X == null ? void 0 : X.hidden))
  }), ae = Zt({
    elementType: Z,
    externalSlotProps: Oe,
    additionalProps: m,
    getSlotProps: (ne) => _(p({}, ne, {
      onClick: (ce) => {
        N && N(ce), ne != null && ne.onClick && ne.onClick(ce);
      }
    })),
    className: re(Oe == null ? void 0 : Oe.className, m == null ? void 0 : m.className, X == null ? void 0 : X.backdrop),
    ownerState: H
  });
  return !O && !A && (!fe || he) ? null : /* @__PURE__ */ E.jsx(Pa, {
    ref: se,
    container: f,
    disablePortal: S,
    children: /* @__PURE__ */ E.jsxs(ke, p({}, ie, {
      children: [!M && u ? /* @__PURE__ */ E.jsx(Z, p({}, ae)) : null, /* @__PURE__ */ E.jsx(gf, {
        disableEnforceFocus: b,
        disableAutoFocus: y,
        disableRestoreFocus: x,
        isEnabled: Te,
        open: A,
        children: /* @__PURE__ */ d.cloneElement(v, le)
      })]
    }))
  });
}), Hh = Wh, Uh = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Vh = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, r = $e({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, ph, t);
  return p({}, t, r);
}, Kh = K(br, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...gr(e, t), !n.disableUnderline && t.underline];
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
    [`&.${Ut.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${Ut.disabled}`]: {
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
    [`&.${Ut.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Ut.error}`]: {
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
    [`&:hover:not(.${Ut.disabled}, .${Ut.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Ut.disabled}:before`]: {
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
}), qh = K(yr, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: vr
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
})), _a = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s;
  const a = we({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: l = {},
    componentsProps: c,
    fullWidth: u = !1,
    // declare here to prevent spreading to DOM
    inputComponent: m = "input",
    multiline: h = !1,
    slotProps: g,
    slots: v = {},
    type: f = "text"
  } = a, C = U(a, Uh), $ = p({}, a, {
    fullWidth: u,
    inputComponent: m,
    multiline: h,
    type: f
  }), w = Vh(a), y = {
    root: {
      ownerState: $
    },
    input: {
      ownerState: $
    }
  }, b = g ?? c ? pt(y, g ?? c) : y, R = (o = (r = v.root) != null ? r : l.Root) != null ? o : Kh, S = (i = (s = v.input) != null ? s : l.Input) != null ? i : qh;
  return /* @__PURE__ */ E.jsx(Pi, p({
    slots: {
      root: R,
      input: S
    },
    componentsProps: b,
    fullWidth: u,
    inputComponent: m,
    multiline: h,
    ref: n,
    type: f
  }, C, {
    classes: w
  }));
});
_a.muiName = "Input";
const Da = _a;
function Gh(e) {
  return Re("MuiFormControl", e);
}
Se("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Xh = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Yh = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: o
  } = e, r = {
    root: ["root", n !== "none" && `margin${J(n)}`, o && "fullWidth"]
  };
  return $e(r, Gh, t);
}, Zh = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => p({}, t.root, t[`margin${J(e.margin)}`], e.fullWidth && t.fullWidth)
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
})), Jh = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
    fullWidth: m = !1,
    hiddenLabel: h = !1,
    margin: g = "none",
    required: v = !1,
    size: f = "medium",
    variant: C = "outlined"
  } = o, $ = U(o, Xh), w = p({}, o, {
    color: s,
    component: a,
    disabled: l,
    error: c,
    fullWidth: m,
    hiddenLabel: h,
    margin: g,
    required: v,
    size: f,
    variant: C
  }), y = Yh(w), [b, R] = d.useState(() => {
    let L = !1;
    return r && d.Children.forEach(r, (z) => {
      if (!wr(z, ["Input", "Select"]))
        return;
      const B = wr(z, ["Select"]) ? z.props.input : z;
      B && th(B.props) && (L = !0);
    }), L;
  }), [S, x] = d.useState(() => {
    let L = !1;
    return r && d.Children.forEach(r, (z) => {
      wr(z, ["Input", "Select"]) && (To(z.props, !0) || To(z.props.inputProps, !0)) && (L = !0);
    }), L;
  }), [k, M] = d.useState(!1);
  l && k && M(!1);
  const O = u !== void 0 && !l ? u : k;
  let N;
  const A = d.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: R,
    color: s,
    disabled: l,
    error: c,
    filled: S,
    focused: O,
    fullWidth: m,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      x(!1);
    },
    onFilled: () => {
      x(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: N,
    required: v,
    variant: C
  }), [b, s, l, c, S, O, m, h, N, v, f, C]);
  return /* @__PURE__ */ E.jsx(hr.Provider, {
    value: A,
    children: /* @__PURE__ */ E.jsx(Zh, p({
      as: a,
      ownerState: w,
      className: re(y.root, i),
      ref: n
    }, $, {
      children: r
    }))
  });
}), Qh = Jh;
function eg(e) {
  return Re("MuiFormHelperText", e);
}
const tg = Se("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Es = tg;
var Ts;
const ng = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], og = (e) => {
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
    root: ["root", r && "disabled", i && "error", o && `size${J(o)}`, n && "contained", a && "focused", s && "filled", l && "required"]
  };
  return $e(c, eg, t);
}, rg = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${J(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
})), ig = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: r,
    className: i,
    component: s = "p"
  } = o, a = U(o, ng), l = Qt(), c = $n({
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
  }), m = og(u);
  return /* @__PURE__ */ E.jsx(rg, p({
    as: s,
    ownerState: u,
    className: re(m.root, i),
    ref: n
  }, a, {
    children: r === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ts || (Ts = /* @__PURE__ */ E.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : r
  }));
}), sg = ig;
function ag(e) {
  return Re("MuiFormLabel", e);
}
const lg = Se("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Hn = lg, cg = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], ug = (e) => {
  const {
    classes: t,
    color: n,
    focused: o,
    disabled: r,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${J(n)}`, r && "disabled", i && "error", s && "filled", o && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return $e(l, ag, t);
}, dg = K("label", {
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
  [`&.${Hn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Hn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Hn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), pg = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Hn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), fg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: r,
    className: i,
    component: s = "label"
  } = o, a = U(o, cg), l = Qt(), c = $n({
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
  }), m = ug(u);
  return /* @__PURE__ */ E.jsxs(dg, p({
    as: s,
    ownerState: u,
    className: re(m.root, i),
    ref: n
  }, a, {
    children: [r, c.required && /* @__PURE__ */ E.jsxs(pg, {
      ownerState: u,
      "aria-hidden": !0,
      className: m.asterisk,
      children: [" ", "*"]
    })]
  }));
}), mg = fg, hg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function qr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const gg = {
  entering: {
    opacity: 1,
    transform: qr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Or = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ja = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: r = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: l,
    onEntered: c,
    onEntering: u,
    onExit: m,
    onExited: h,
    onExiting: g,
    style: v,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = xa
  } = t, $ = U(t, hg), w = ln(), y = d.useRef(), b = pr(), R = d.useRef(null), S = Ue(R, i.ref, n), x = (B) => (I) => {
    if (B) {
      const F = R.current;
      I === void 0 ? B(F) : B(F, I);
    }
  }, k = x(u), M = x((B, I) => {
    Ca(B);
    const {
      duration: F,
      delay: _,
      easing: q
    } = wo({
      style: v,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let se;
    f === "auto" ? (se = b.transitions.getAutoHeightDuration(B.clientHeight), y.current = se) : se = F, B.style.transition = [b.transitions.create("opacity", {
      duration: se,
      delay: _
    }), b.transitions.create("transform", {
      duration: Or ? se : se * 0.666,
      delay: _,
      easing: q
    })].join(","), l && l(B, I);
  }), O = x(c), N = x(g), A = x((B) => {
    const {
      duration: I,
      delay: F,
      easing: _
    } = wo({
      style: v,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let q;
    f === "auto" ? (q = b.transitions.getAutoHeightDuration(B.clientHeight), y.current = q) : q = I, B.style.transition = [b.transitions.create("opacity", {
      duration: q,
      delay: F
    }), b.transitions.create("transform", {
      duration: Or ? q : q * 0.666,
      delay: Or ? F : F || q * 0.333,
      easing: _
    })].join(","), B.style.opacity = 0, B.style.transform = qr(0.75), m && m(B);
  }), L = x(h), z = (B) => {
    f === "auto" && w.start(y.current || 0, B), o && o(R.current, B);
  };
  return /* @__PURE__ */ E.jsx(C, p({
    appear: r,
    in: a,
    nodeRef: R,
    onEnter: M,
    onEntered: O,
    onEntering: k,
    onExit: A,
    onExited: L,
    onExiting: N,
    addEndListener: z,
    timeout: f === "auto" ? null : f
  }, $, {
    children: (B, I) => /* @__PURE__ */ d.cloneElement(i, p({
      style: p({
        opacity: 0,
        transform: qr(0.75),
        visibility: B === "exited" && !a ? "hidden" : void 0
      }, gg[B], v, i.props.style),
      ref: S
    }, I))
  }));
});
ja.muiSupportAuto = !0;
const Gr = ja, vg = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], bg = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, r = $e({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, lh, t);
  return p({}, t, r);
}, yg = K(br, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...gr(e, t), !n.disableUnderline && t.underline];
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
    [`&.${In.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${In.error}`]: {
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
    [`&:hover:not(.${In.disabled}, .${In.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${o}`
      }
    },
    [`&.${In.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), xg = K(yr, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: vr
})({}), Wa = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s;
  const a = we({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: l,
    components: c = {},
    componentsProps: u,
    fullWidth: m = !1,
    inputComponent: h = "input",
    multiline: g = !1,
    slotProps: v,
    slots: f = {},
    type: C = "text"
  } = a, $ = U(a, vg), w = bg(a), b = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, R = v ?? u ? pt(v ?? u, b) : b, S = (o = (r = f.root) != null ? r : c.Root) != null ? o : yg, x = (i = (s = f.input) != null ? s : c.Input) != null ? i : xg;
  return /* @__PURE__ */ E.jsx(Pi, p({
    slots: {
      root: S,
      input: x
    },
    slotProps: R,
    fullWidth: m,
    inputComponent: h,
    multiline: g,
    ref: n,
    type: C
  }, $, {
    classes: w
  }));
});
Wa.muiName = "Input";
const Ha = Wa;
function Cg(e) {
  return Re("MuiInputAdornment", e);
}
const $g = Se("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), ks = $g;
var Os;
const Rg = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], Sg = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${J(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, wg = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: o,
    position: r,
    size: i,
    variant: s
  } = e, a = {
    root: ["root", n && "disablePointerEvents", r && `position${J(r)}`, s, o && "hiddenLabel", i && `size${J(i)}`]
  };
  return $e(a, Cg, t);
}, Pg = K("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: Sg
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
})), Eg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
  } = o, m = U(o, Rg), h = Qt() || {};
  let g = u;
  u && h.variant, h && !g && (g = h.variant);
  const v = p({}, o, {
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: a,
    position: c,
    variant: g
  }), f = wg(v);
  return /* @__PURE__ */ E.jsx(hr.Provider, {
    value: null,
    children: /* @__PURE__ */ E.jsx(Pg, p({
      as: s,
      ownerState: v,
      className: re(f.root, i),
      ref: n
    }, m, {
      children: typeof r == "string" && !l ? /* @__PURE__ */ E.jsx(Ra, {
        color: "text.secondary",
        children: r
      }) : /* @__PURE__ */ E.jsxs(d.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Os || (Os = /* @__PURE__ */ E.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, r]
      })
    }))
  });
}), Ib = Eg;
function Tg(e) {
  return Re("MuiInputLabel", e);
}
Se("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const kg = ["disableAnimation", "margin", "shrink", "variant", "className"], Og = (e) => {
  const {
    classes: t,
    formControl: n,
    size: o,
    shrink: r,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", r && "shrink", o && o !== "normal" && `size${J(o)}`, s],
    asterisk: [a && "asterisk"]
  }, c = $e(l, Tg, t);
  return p({}, t, c);
}, Ig = K(mg, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Hn.asterisk}`]: t.asterisk
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
}))), Mg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: r = !1,
    shrink: i,
    className: s
  } = o, a = U(o, kg), l = Qt();
  let c = i;
  typeof c > "u" && l && (c = l.filled || l.focused || l.adornedStart);
  const u = $n({
    props: o,
    muiFormControl: l,
    states: ["size", "variant", "required", "focused"]
  }), m = p({}, o, {
    disableAnimation: r,
    formControl: l,
    shrink: c,
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }), h = Og(m);
  return /* @__PURE__ */ E.jsx(Ig, p({
    "data-shrink": c,
    ownerState: m,
    ref: n,
    className: re(h.root, s)
  }, a, {
    classes: h
  }));
}), Ag = Mg, Bg = /* @__PURE__ */ d.createContext({}), Fg = Bg;
function Lg(e) {
  return Re("MuiList", e);
}
Se("MuiList", ["root", "padding", "dense", "subheader"]);
const Ng = ["children", "className", "component", "dense", "disablePadding", "subheader"], zg = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: r
  } = e;
  return $e({
    root: ["root", !n && "padding", o && "dense", r && "subheader"]
  }, Lg, t);
}, _g = K("ul", {
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
})), Dg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    props: t,
    name: "MuiList"
  }), {
    children: r,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: c
  } = o, u = U(o, Ng), m = d.useMemo(() => ({
    dense: a
  }), [a]), h = p({}, o, {
    component: s,
    dense: a,
    disablePadding: l
  }), g = zg(h);
  return /* @__PURE__ */ E.jsx(Fg.Provider, {
    value: m,
    children: /* @__PURE__ */ E.jsxs(_g, p({
      as: s,
      className: re(g.root, i),
      ref: n,
      ownerState: h
    }, u, {
      children: [c, r]
    }))
  });
}), jg = Dg, Wg = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ir(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Is(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Ua(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Mn(e, t, n, o, r, i) {
  let s = !1, a = r(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const l = o ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !Ua(a, i) || l)
      a = r(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const Hg = /* @__PURE__ */ d.forwardRef(function(t, n) {
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
    variant: m = "selectedMenu"
  } = t, h = U(t, Wg), g = d.useRef(null), v = d.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Tt(() => {
    r && g.current.focus();
  }, [r]), d.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (y, b) => {
      const R = !g.current.style.width;
      if (y.clientHeight < g.current.clientHeight && R) {
        const S = `${ua(Ke(y))}px`;
        g.current.style[b.direction === "rtl" ? "paddingLeft" : "paddingRight"] = S, g.current.style.width = `calc(100% + ${S})`;
      }
      return g.current;
    }
  }), []);
  const f = (y) => {
    const b = g.current, R = y.key, S = Ke(b).activeElement;
    if (R === "ArrowDown")
      y.preventDefault(), Mn(b, S, c, l, Ir);
    else if (R === "ArrowUp")
      y.preventDefault(), Mn(b, S, c, l, Is);
    else if (R === "Home")
      y.preventDefault(), Mn(b, null, c, l, Ir);
    else if (R === "End")
      y.preventDefault(), Mn(b, null, c, l, Is);
    else if (R.length === 1) {
      const x = v.current, k = R.toLowerCase(), M = performance.now();
      x.keys.length > 0 && (M - x.lastTime > 500 ? (x.keys = [], x.repeating = !0, x.previousKeyMatched = !0) : x.repeating && k !== x.keys[0] && (x.repeating = !1)), x.lastTime = M, x.keys.push(k);
      const O = S && !x.repeating && Ua(S, x);
      x.previousKeyMatched && (O || Mn(b, S, !1, l, Ir, x)) ? y.preventDefault() : x.previousKeyMatched = !1;
    }
    u && u(y);
  }, C = Ue(g, n);
  let $ = -1;
  d.Children.forEach(s, (y, b) => {
    if (!/* @__PURE__ */ d.isValidElement(y)) {
      $ === b && ($ += 1, $ >= s.length && ($ = -1));
      return;
    }
    y.props.disabled || (m === "selectedMenu" && y.props.selected || $ === -1) && ($ = b), $ === b && (y.props.disabled || y.props.muiSkipListHighlight || y.type.muiSkipListHighlight) && ($ += 1, $ >= s.length && ($ = -1));
  });
  const w = d.Children.map(s, (y, b) => {
    if (b === $) {
      const R = {};
      return i && (R.autoFocus = !0), y.props.tabIndex === void 0 && m === "selectedMenu" && (R.tabIndex = 0), /* @__PURE__ */ d.cloneElement(y, R);
    }
    return y;
  });
  return /* @__PURE__ */ E.jsx(jg, p({
    role: "menu",
    ref: C,
    className: a,
    onKeyDown: f,
    tabIndex: r ? 0 : -1
  }, h, {
    children: w
  }));
}), Ug = Hg;
function Vg(e) {
  return Re("MuiPopover", e);
}
Se("MuiPopover", ["root", "paper"]);
const Kg = ["onEntering"], qg = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Gg = ["slotProps"];
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
function Mr(e) {
  return typeof e == "function" ? e() : e;
}
const Xg = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"],
    paper: ["paper"]
  }, Vg, t);
}, Yg = K(Hh, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Va = K($a, {
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
}), Zg = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i;
  const s = we({
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
    anchorReference: m = "anchorEl",
    children: h,
    className: g,
    container: v,
    elevation: f = 8,
    marginThreshold: C = 16,
    open: $,
    PaperProps: w = {},
    slots: y,
    slotProps: b,
    transformOrigin: R = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: S = Gr,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: k
    } = {},
    disableScrollLock: M = !1
  } = s, O = U(s.TransitionProps, Kg), N = U(s, qg), A = (o = b == null ? void 0 : b.paper) != null ? o : w, L = d.useRef(), z = Ue(L, A.ref), B = p({}, s, {
    anchorOrigin: c,
    anchorReference: m,
    elevation: f,
    marginThreshold: C,
    externalPaperSlotProps: A,
    transformOrigin: R,
    TransitionComponent: S,
    transitionDuration: x,
    TransitionProps: O
  }), I = Xg(B), F = d.useCallback(() => {
    if (m === "anchorPosition")
      return u;
    const ne = Mr(l), Y = (ne && ne.nodeType === 1 ? ne : Ke(L.current).body).getBoundingClientRect();
    return {
      top: Y.top + Ms(Y, c.vertical),
      left: Y.left + As(Y, c.horizontal)
    };
  }, [l, c.horizontal, c.vertical, u, m]), _ = d.useCallback((ne) => ({
    vertical: Ms(ne, R.vertical),
    horizontal: As(ne, R.horizontal)
  }), [R.horizontal, R.vertical]), q = d.useCallback((ne) => {
    const ce = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, Y = _(ce);
    if (m === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Bs(Y)
      };
    const W = F();
    let je = W.top - Y.vertical, ee = W.left - Y.horizontal;
    const Ne = je + ce.height, be = ee + ce.width, pe = Xt(Mr(l)), Ae = pe.innerHeight - C, Pe = pe.innerWidth - C;
    if (C !== null && je < C) {
      const de = je - C;
      je -= de, Y.vertical += de;
    } else if (C !== null && Ne > Ae) {
      const de = Ne - Ae;
      je -= de, Y.vertical += de;
    }
    if (C !== null && ee < C) {
      const de = ee - C;
      ee -= de, Y.horizontal += de;
    } else if (be > Pe) {
      const de = be - Pe;
      ee -= de, Y.horizontal += de;
    }
    return {
      top: `${Math.round(je)}px`,
      left: `${Math.round(ee)}px`,
      transformOrigin: Bs(Y)
    };
  }, [l, m, F, _, C]), [se, Te] = d.useState($), he = d.useCallback(() => {
    const ne = L.current;
    if (!ne)
      return;
    const ce = q(ne);
    ce.top !== null && (ne.style.top = ce.top), ce.left !== null && (ne.style.left = ce.left), ne.style.transformOrigin = ce.transformOrigin, Te(!0);
  }, [q]);
  d.useEffect(() => (M && window.addEventListener("scroll", he), () => window.removeEventListener("scroll", he)), [l, M, he]);
  const fe = (ne, ce) => {
    k && k(ne, ce), he();
  }, H = () => {
    Te(!1);
  };
  d.useEffect(() => {
    $ && he();
  }), d.useImperativeHandle(a, () => $ ? {
    updatePosition: () => {
      he();
    }
  } : null, [$, he]), d.useEffect(() => {
    if (!$)
      return;
    const ne = la(() => {
      he();
    }), ce = Xt(l);
    return ce.addEventListener("resize", ne), () => {
      ne.clear(), ce.removeEventListener("resize", ne);
    };
  }, [l, $, he]);
  let X = x;
  x === "auto" && !S.muiSupportAuto && (X = void 0);
  const le = v || (l ? Ke(Mr(l)).body : void 0), ke = (r = y == null ? void 0 : y.root) != null ? r : Yg, Z = (i = y == null ? void 0 : y.paper) != null ? i : Va, te = Zt({
    elementType: Z,
    externalSlotProps: p({}, A, {
      style: se ? A.style : p({}, A.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: z
    },
    ownerState: B,
    className: re(I.paper, A == null ? void 0 : A.className)
  }), Oe = Zt({
    elementType: ke,
    externalSlotProps: (b == null ? void 0 : b.root) || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: le,
      open: $
    },
    ownerState: B,
    className: re(I.root, g)
  }), {
    slotProps: ie
  } = Oe, ae = U(Oe, Gg);
  return /* @__PURE__ */ E.jsx(ke, p({}, ae, !Po(ke) && {
    slotProps: ie,
    disableScrollLock: M
  }, {
    children: /* @__PURE__ */ E.jsx(S, p({
      appear: !0,
      in: $,
      onEntering: fe,
      onExited: H,
      timeout: X
    }, O, {
      children: /* @__PURE__ */ E.jsx(Z, p({}, te, {
        children: h
      }))
    }))
  }));
}), Jg = Zg;
function Qg(e) {
  return Re("MuiMenu", e);
}
Se("MuiMenu", ["root", "paper", "list"]);
const ev = ["onEntering"], tv = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], nv = {
  vertical: "top",
  horizontal: "right"
}, ov = {
  vertical: "top",
  horizontal: "left"
}, rv = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Qg, t);
}, iv = K(Jg, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), sv = K(Va, {
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
}), av = K(Ug, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), lv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r;
  const i = we({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: a,
    className: l,
    disableAutoFocusItem: c = !1,
    MenuListProps: u = {},
    onClose: m,
    open: h,
    PaperProps: g = {},
    PopoverClasses: v,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: C
    } = {},
    variant: $ = "selectedMenu",
    slots: w = {},
    slotProps: y = {}
  } = i, b = U(i.TransitionProps, ev), R = U(i, tv), S = pr(), x = S.direction === "rtl", k = p({}, i, {
    autoFocus: s,
    disableAutoFocusItem: c,
    MenuListProps: u,
    onEntering: C,
    PaperProps: g,
    transitionDuration: f,
    TransitionProps: b,
    variant: $
  }), M = rv(k), O = s && !c && h, N = d.useRef(null), A = (q, se) => {
    N.current && N.current.adjustStyleForScrollbar(q, S), C && C(q, se);
  }, L = (q) => {
    q.key === "Tab" && (q.preventDefault(), m && m(q, "tabKeyDown"));
  };
  let z = -1;
  d.Children.map(a, (q, se) => {
    /* @__PURE__ */ d.isValidElement(q) && (q.props.disabled || ($ === "selectedMenu" && q.props.selected || z === -1) && (z = se));
  });
  const B = (o = w.paper) != null ? o : sv, I = (r = y.paper) != null ? r : g, F = Zt({
    elementType: w.root,
    externalSlotProps: y.root,
    ownerState: k,
    className: [M.root, l]
  }), _ = Zt({
    elementType: B,
    externalSlotProps: I,
    ownerState: k,
    className: M.paper
  });
  return /* @__PURE__ */ E.jsx(iv, p({
    onClose: m,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? nv : ov,
    slots: {
      paper: B,
      root: w.root
    },
    slotProps: {
      root: F,
      paper: _
    },
    open: h,
    ref: n,
    transitionDuration: f,
    TransitionProps: p({
      onEntering: A
    }, b),
    ownerState: k
  }, R, {
    classes: v,
    children: /* @__PURE__ */ E.jsx(av, p({
      onKeyDown: L,
      actions: N,
      autoFocus: s && (z === -1 || c),
      autoFocusItem: O,
      variant: $
    }, u, {
      className: re(M.list, u.className),
      children: a
    }))
  }));
}), cv = lv;
function uv(e) {
  return Re("MuiNativeSelect", e);
}
const dv = Se("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ei = dv, pv = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], fv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: r,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, o && "disabled", r && "multiple", s && "error"],
    icon: ["icon", `icon${J(n)}`, i && "iconOpen", o && "disabled"]
  };
  return $e(a, uv, t);
}, Ka = ({
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
  [`&.${Ei.disabled}`]: {
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
}), mv = K("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: bt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Ei.multiple}`]: t.multiple
    }];
  }
})(Ka), qa = ({
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
  [`&.${Ei.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), hv = K("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${J(n.variant)}`], n.open && t.iconOpen];
  }
})(qa), gv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const {
    className: o,
    disabled: r,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard"
  } = t, c = U(t, pv), u = p({}, t, {
    disabled: r,
    variant: l,
    error: i
  }), m = fv(u);
  return /* @__PURE__ */ E.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ E.jsx(mv, p({
      ownerState: u,
      className: re(m.select, o),
      disabled: r,
      ref: a || n
    }, c)), t.multiple ? null : /* @__PURE__ */ E.jsx(hv, {
      as: s,
      ownerState: u,
      className: m.icon
    })]
  });
}), vv = gv;
var Fs;
const bv = ["children", "classes", "className", "label", "notched"], yv = K("fieldset", {
  shouldForwardProp: bt
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
}), xv = K("legend", {
  shouldForwardProp: bt
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
function Cv(e) {
  const {
    className: t,
    label: n,
    notched: o
  } = e, r = U(e, bv), i = n != null && n !== "", s = p({}, e, {
    notched: o,
    withLabel: i
  });
  return /* @__PURE__ */ E.jsx(yv, p({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, r, {
    children: /* @__PURE__ */ E.jsx(xv, {
      ownerState: s,
      children: i ? /* @__PURE__ */ E.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Fs || (Fs = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const $v = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Rv = (e) => {
  const {
    classes: t
  } = e, o = $e({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, uh, t);
  return p({}, t, o);
}, Sv = K(br, {
  shouldForwardProp: (e) => bt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: gr
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return p({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Bt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Bt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Bt.focused} .${Bt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Bt.error} .${Bt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Bt.disabled} .${Bt.notchedOutline}`]: {
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
}), wv = K(Cv, {
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
}), Pv = K(yr, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: vr
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
})), Ga = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a;
  const l = we({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: c = {},
    fullWidth: u = !1,
    inputComponent: m = "input",
    label: h,
    multiline: g = !1,
    notched: v,
    slots: f = {},
    type: C = "text"
  } = l, $ = U(l, $v), w = Rv(l), y = Qt(), b = $n({
    props: l,
    muiFormControl: y,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), R = p({}, l, {
    color: b.color || "primary",
    disabled: b.disabled,
    error: b.error,
    focused: b.focused,
    formControl: y,
    fullWidth: u,
    hiddenLabel: b.hiddenLabel,
    multiline: g,
    size: b.size,
    type: C
  }), S = (o = (r = f.root) != null ? r : c.Root) != null ? o : Sv, x = (i = (s = f.input) != null ? s : c.Input) != null ? i : Pv;
  return /* @__PURE__ */ E.jsx(Pi, p({
    slots: {
      root: S,
      input: x
    },
    renderSuffix: (k) => /* @__PURE__ */ E.jsx(wv, {
      ownerState: R,
      className: w.notchedOutline,
      label: h != null && h !== "" && b.required ? a || (a = /* @__PURE__ */ E.jsxs(d.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof v < "u" ? v : !!(k.startAdornment || k.filled || k.focused)
    }),
    fullWidth: u,
    inputComponent: m,
    multiline: g,
    ref: n,
    type: C
  }, $, {
    classes: p({}, w, {
      notchedOutline: null
    })
  }));
});
Ga.muiName = "Input";
const Xa = Ga;
function Ev(e) {
  return Re("MuiSelect", e);
}
const Tv = Se("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), An = Tv;
var Ls;
const kv = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Ov = K("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${An.select}`]: t.select
      },
      {
        [`&.${An.select}`]: t[n.variant]
      },
      {
        [`&.${An.error}`]: t.error
      },
      {
        [`&.${An.multiple}`]: t.multiple
      }
    ];
  }
})(Ka, {
  // Win specificity over the input base
  [`&.${An.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Iv = K("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${J(n.variant)}`], n.open && t.iconOpen];
  }
})(qa), Mv = K("input", {
  shouldForwardProp: (e) => Fd(e) && e !== "classes",
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
function Av(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Bv = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: o,
    multiple: r,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, o && "disabled", r && "multiple", s && "error"],
    icon: ["icon", `icon${J(n)}`, i && "iconOpen", o && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return $e(a, Ev, t);
}, Fv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o;
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: m,
    disabled: h,
    displayEmpty: g,
    error: v = !1,
    IconComponent: f,
    inputRef: C,
    labelId: $,
    MenuProps: w = {},
    multiple: y,
    name: b,
    onBlur: R,
    onChange: S,
    onClose: x,
    onFocus: k,
    onOpen: M,
    open: O,
    readOnly: N,
    renderValue: A,
    SelectDisplayProps: L = {},
    tabIndex: z,
    value: B,
    variant: I = "standard"
  } = t, F = U(t, kv), [_, q] = dn({
    controlled: B,
    default: m,
    name: "Select"
  }), [se, Te] = dn({
    controlled: O,
    default: u,
    name: "Select"
  }), he = d.useRef(null), fe = d.useRef(null), [H, X] = d.useState(null), {
    current: le
  } = d.useRef(O != null), [ke, Z] = d.useState(), te = Ue(n, C), Oe = d.useCallback((V) => {
    fe.current = V, V && X(V);
  }, []), ie = H == null ? void 0 : H.parentNode;
  d.useImperativeHandle(te, () => ({
    focus: () => {
      fe.current.focus();
    },
    node: he.current,
    value: _
  }), [_]), d.useEffect(() => {
    u && se && H && !le && (Z(a ? null : ie.clientWidth), fe.current.focus());
  }, [H, a]), d.useEffect(() => {
    s && fe.current.focus();
  }, [s]), d.useEffect(() => {
    if (!$)
      return;
    const V = Ke(fe.current).getElementById($);
    if (V) {
      const ue = () => {
        getSelection().isCollapsed && fe.current.focus();
      };
      return V.addEventListener("click", ue), () => {
        V.removeEventListener("click", ue);
      };
    }
  }, [$]);
  const ae = (V, ue) => {
    V ? M && M(ue) : x && x(ue), le || (Z(a ? null : ie.clientWidth), Te(V));
  }, ne = (V) => {
    V.button === 0 && (V.preventDefault(), fe.current.focus(), ae(!0, V));
  }, ce = (V) => {
    ae(!1, V);
  }, Y = d.Children.toArray(l), W = (V) => {
    const ue = Y.find((me) => me.props.value === V.target.value);
    ue !== void 0 && (q(ue.props.value), S && S(V, ue));
  }, je = (V) => (ue) => {
    let me;
    if (ue.currentTarget.hasAttribute("tabindex")) {
      if (y) {
        me = Array.isArray(_) ? _.slice() : [];
        const ct = _.indexOf(V.props.value);
        ct === -1 ? me.push(V.props.value) : me.splice(ct, 1);
      } else
        me = V.props.value;
      if (V.props.onClick && V.props.onClick(ue), _ !== me && (q(me), S)) {
        const ct = ue.nativeEvent || ue, St = new ct.constructor(ct.type, ct);
        Object.defineProperty(St, "target", {
          writable: !0,
          value: {
            value: me,
            name: b
          }
        }), S(St, V);
      }
      y || ae(!1, ue);
    }
  }, ee = (V) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(V.key) !== -1 && (V.preventDefault(), ae(!0, V));
  }, Ne = H !== null && se, be = (V) => {
    !Ne && R && (Object.defineProperty(V, "target", {
      writable: !0,
      value: {
        value: _,
        name: b
      }
    }), R(V));
  };
  delete F["aria-invalid"];
  let pe, Ae;
  const Pe = [];
  let de = !1;
  (To({
    value: _
  }) || g) && (A ? pe = A(_) : de = !0);
  const We = Y.map((V) => {
    if (!/* @__PURE__ */ d.isValidElement(V))
      return null;
    let ue;
    if (y) {
      if (!Array.isArray(_))
        throw new Error(Et(2));
      ue = _.some((me) => Ns(me, V.props.value)), ue && de && Pe.push(V.props.children);
    } else
      ue = Ns(_, V.props.value), ue && de && (Ae = V.props.children);
    return /* @__PURE__ */ d.cloneElement(V, {
      "aria-selected": ue ? "true" : "false",
      onClick: je(V),
      onKeyUp: (me) => {
        me.key === " " && me.preventDefault(), V.props.onKeyUp && V.props.onKeyUp(me);
      },
      role: "option",
      selected: ue,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": V.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  de && (y ? Pe.length === 0 ? pe = null : pe = Pe.reduce((V, ue, me) => (V.push(ue), me < Pe.length - 1 && V.push(", "), V), []) : pe = Ae);
  let He = ke;
  !a && le && H && (He = ie.clientWidth);
  let Ve;
  typeof z < "u" ? Ve = z : Ve = h ? null : 0;
  const oe = L.id || (b ? `mui-component-select-${b}` : void 0), D = p({}, t, {
    variant: I,
    value: _,
    open: Ne,
    error: v
  }), ye = Bv(D), ot = p({}, w.PaperProps, (o = w.slotProps) == null ? void 0 : o.paper), Xe = er();
  return /* @__PURE__ */ E.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ E.jsx(Ov, p({
      ref: Oe,
      tabIndex: Ve,
      role: "combobox",
      "aria-controls": Xe,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": Ne ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [$, oe].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: ee,
      onMouseDown: h || N ? null : ne,
      onBlur: be,
      onFocus: k
    }, L, {
      ownerState: D,
      className: re(L.className, ye.select, c),
      id: oe,
      children: Av(pe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ls || (Ls = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : pe
    })), /* @__PURE__ */ E.jsx(Mv, p({
      "aria-invalid": v,
      value: Array.isArray(_) ? _.join(",") : _,
      name: b,
      ref: he,
      "aria-hidden": !0,
      onChange: W,
      tabIndex: -1,
      disabled: h,
      className: ye.nativeInput,
      autoFocus: s,
      ownerState: D
    }, F)), /* @__PURE__ */ E.jsx(Iv, {
      as: f,
      className: ye.icon,
      ownerState: D
    }), /* @__PURE__ */ E.jsx(cv, p({
      id: `menu-${b || ""}`,
      anchorEl: ie,
      open: Ne,
      onClose: ce,
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
        "aria-labelledby": $,
        role: "listbox",
        "aria-multiselectable": y ? "true" : void 0,
        disableListWrap: !0,
        id: Xe
      }, w.MenuListProps),
      slotProps: p({}, w.slotProps, {
        paper: p({}, ot, {
          style: p({
            minWidth: He
          }, ot != null ? ot.style : null)
        })
      }),
      children: We
    }))]
  });
}), Lv = Fv, Nv = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], zv = ["root"], _v = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ti = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => bt(e) && e !== "variant",
  slot: "Root"
}, Dv = K(Ha, Ti)(""), jv = K(Xa, Ti)(""), Wv = K(Da, Ti)(""), Ya = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: r = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: c = !1,
    IconComponent: u = mh,
    id: m,
    input: h,
    inputProps: g,
    label: v,
    labelId: f,
    MenuProps: C,
    multiple: $ = !1,
    native: w = !1,
    onClose: y,
    onOpen: b,
    open: R,
    renderValue: S,
    SelectDisplayProps: x,
    variant: k = "outlined"
  } = o, M = U(o, Nv), O = w ? vv : Lv, N = Qt(), A = $n({
    props: o,
    muiFormControl: N,
    states: ["variant", "error"]
  }), L = A.variant || k, z = p({}, o, {
    variant: L,
    classes: s
  }), B = _v(z), I = U(B, zv), F = h || {
    standard: /* @__PURE__ */ E.jsx(Dv, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ E.jsx(jv, {
      label: v,
      ownerState: z
    }),
    filled: /* @__PURE__ */ E.jsx(Wv, {
      ownerState: z
    })
  }[L], _ = Ue(n, F.ref);
  return /* @__PURE__ */ E.jsx(d.Fragment, {
    children: /* @__PURE__ */ d.cloneElement(F, p({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: O,
      inputProps: p({
        children: i,
        error: A.error,
        IconComponent: u,
        variant: L,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: $
      }, w ? {
        id: m
      } : {
        autoWidth: r,
        defaultOpen: l,
        displayEmpty: c,
        labelId: f,
        MenuProps: C,
        onClose: y,
        onOpen: b,
        open: R,
        renderValue: S,
        SelectDisplayProps: p({
          id: m
        }, x)
      }, g, {
        classes: g ? pt(I, g.classes) : I
      }, h ? h.props.inputProps : {})
    }, ($ && w || c) && L === "outlined" ? {
      notched: !0
    } : {}, {
      ref: _,
      className: re(F.props.className, a, B.root)
    }, !h && {
      variant: L
    }, M))
  });
});
Ya.muiName = "Select";
const Hv = Ya;
function Uv(e) {
  return Re("MuiTooltip", e);
}
const Vv = Se("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Lt = Vv, Kv = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function qv(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gv = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: o,
    touch: r,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", o && "popperArrow"],
    tooltip: ["tooltip", o && "tooltipArrow", r && "touch", `tooltipPlacement${J(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return $e(s, Uv, t);
}, Xv = K(Na, {
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
})), Yv = K("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${J(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => p({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Qe(e.palette.grey[700], 0.92),
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
  lineHeight: `${qv(16 / 14)}em`,
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
})), Zv = K("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : Qe(e.palette.grey[700], 0.9),
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
let mo = !1;
const zs = new Jn();
let Bn = {
  x: 0,
  y: 0
};
function ho(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const Jv = /* @__PURE__ */ d.forwardRef(function(t, n) {
  var o, r, i, s, a, l, c, u, m, h, g, v, f, C, $, w, y, b, R;
  const S = we({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: x = !1,
    children: k,
    components: M = {},
    componentsProps: O = {},
    describeChild: N = !1,
    disableFocusListener: A = !1,
    disableHoverListener: L = !1,
    disableInteractive: z = !1,
    disableTouchListener: B = !1,
    enterDelay: I = 100,
    enterNextDelay: F = 0,
    enterTouchDelay: _ = 700,
    followCursor: q = !1,
    id: se,
    leaveDelay: Te = 0,
    leaveTouchDelay: he = 1500,
    onClose: fe,
    onOpen: H,
    open: X,
    placement: le = "bottom",
    PopperComponent: ke,
    PopperProps: Z = {},
    slotProps: te = {},
    slots: Oe = {},
    title: ie,
    TransitionComponent: ae = Gr,
    TransitionProps: ne
  } = S, ce = U(S, Kv), Y = /* @__PURE__ */ d.isValidElement(k) ? k : /* @__PURE__ */ E.jsx("span", {
    children: k
  }), W = pr(), je = W.direction === "rtl", [ee, Ne] = d.useState(), [be, pe] = d.useState(null), Ae = d.useRef(!1), Pe = z || q, de = ln(), We = ln(), He = ln(), Ve = ln(), [oe, D] = dn({
    controlled: X,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let ye = oe;
  const ot = er(se), Xe = d.useRef(), V = it(() => {
    Xe.current !== void 0 && (document.body.style.WebkitUserSelect = Xe.current, Xe.current = void 0), Ve.clear();
  });
  d.useEffect(() => V, [V]);
  const ue = (Q) => {
    zs.clear(), mo = !0, D(!0), H && !ye && H(Q);
  }, me = it(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (Q) => {
      zs.start(800 + Te, () => {
        mo = !1;
      }), D(!1), fe && ye && fe(Q), de.start(W.transitions.duration.shortest, () => {
        Ae.current = !1;
      });
    }
  ), ct = (Q) => {
    Ae.current && Q.type !== "touchstart" || (ee && ee.removeAttribute("title"), We.clear(), He.clear(), I || mo && F ? We.start(mo ? F : I, () => {
      ue(Q);
    }) : ue(Q));
  }, St = (Q) => {
    We.clear(), He.start(Te, () => {
      me(Q);
    });
  }, {
    isFocusVisibleRef: oo,
    onBlur: wt,
    onFocus: zt,
    ref: Mt
  } = ca(), [, _t] = d.useState(!1), At = (Q) => {
    wt(Q), oo.current === !1 && (_t(!1), St(Q));
  }, ro = (Q) => {
    ee || Ne(Q.currentTarget), zt(Q), oo.current === !0 && (_t(!0), ct(Q));
  }, Rn = (Q) => {
    Ae.current = !0;
    const Ye = Y.props;
    Ye.onTouchStart && Ye.onTouchStart(Q);
  }, Sn = ct, io = St, xr = (Q) => {
    Rn(Q), He.clear(), de.clear(), V(), Xe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ve.start(_, () => {
      document.body.style.WebkitUserSelect = Xe.current, ct(Q);
    });
  }, so = (Q) => {
    Y.props.onTouchEnd && Y.props.onTouchEnd(Q), V(), He.start(he, () => {
      me(Q);
    });
  };
  d.useEffect(() => {
    if (!ye)
      return;
    function Q(Ye) {
      (Ye.key === "Escape" || Ye.key === "Esc") && me(Ye);
    }
    return document.addEventListener("keydown", Q), () => {
      document.removeEventListener("keydown", Q);
    };
  }, [me, ye]);
  const Cr = Ue(Y.ref, Mt, Ne, n);
  !ie && ie !== 0 && (ye = !1);
  const wn = d.useRef(), $r = (Q) => {
    const Ye = Y.props;
    Ye.onMouseMove && Ye.onMouseMove(Q), Bn = {
      x: Q.clientX,
      y: Q.clientY
    }, wn.current && wn.current.update();
  }, Dt = {}, Pn = typeof ie == "string";
  N ? (Dt.title = !ye && Pn && !L ? ie : null, Dt["aria-describedby"] = ye ? ot : null) : (Dt["aria-label"] = Pn ? ie : null, Dt["aria-labelledby"] = ye && !Pn ? ot : null);
  const Je = p({}, Dt, ce, Y.props, {
    className: re(ce.className, Y.props.className),
    onTouchStart: Rn,
    ref: Cr
  }, q ? {
    onMouseMove: $r
  } : {}), jt = {};
  B || (Je.onTouchStart = xr, Je.onTouchEnd = so), L || (Je.onMouseOver = ho(Sn, Je.onMouseOver), Je.onMouseLeave = ho(io, Je.onMouseLeave), Pe || (jt.onMouseOver = Sn, jt.onMouseLeave = io)), A || (Je.onFocus = ho(ro, Je.onFocus), Je.onBlur = ho(At, Je.onBlur), Pe || (jt.onFocus = ro, jt.onBlur = At));
  const Rr = d.useMemo(() => {
    var Q;
    let Ye = [{
      name: "arrow",
      enabled: !!be,
      options: {
        element: be,
        padding: 4
      }
    }];
    return (Q = Z.popperOptions) != null && Q.modifiers && (Ye = Ye.concat(Z.popperOptions.modifiers)), p({}, Z.popperOptions, {
      modifiers: Ye
    });
  }, [be, Z]), Wt = p({}, S, {
    isRtl: je,
    arrow: x,
    disableInteractive: Pe,
    placement: le,
    PopperComponentProp: ke,
    touch: Ae.current
  }), Ht = Gv(Wt), En = (o = (r = Oe.popper) != null ? r : M.Popper) != null ? o : Xv, T = (i = (s = (a = Oe.transition) != null ? a : M.Transition) != null ? s : ae) != null ? i : Gr, P = (l = (c = Oe.tooltip) != null ? c : M.Tooltip) != null ? l : Yv, j = (u = (m = Oe.arrow) != null ? m : M.Arrow) != null ? u : Zv, G = Ln(En, p({}, Z, (h = te.popper) != null ? h : O.popper, {
    className: re(Ht.popper, Z == null ? void 0 : Z.className, (g = (v = te.popper) != null ? v : O.popper) == null ? void 0 : g.className)
  }), Wt), xe = Ln(T, p({}, ne, (f = te.transition) != null ? f : O.transition), Wt), Be = Ln(P, p({}, (C = te.tooltip) != null ? C : O.tooltip, {
    className: re(Ht.tooltip, ($ = (w = te.tooltip) != null ? w : O.tooltip) == null ? void 0 : $.className)
  }), Wt), ze = Ln(j, p({}, (y = te.arrow) != null ? y : O.arrow, {
    className: re(Ht.arrow, (b = (R = te.arrow) != null ? R : O.arrow) == null ? void 0 : b.className)
  }), Wt);
  return /* @__PURE__ */ E.jsxs(d.Fragment, {
    children: [/* @__PURE__ */ d.cloneElement(Y, Je), /* @__PURE__ */ E.jsx(En, p({
      as: ke ?? Na,
      placement: le,
      anchorEl: q ? {
        getBoundingClientRect: () => ({
          top: Bn.y,
          left: Bn.x,
          right: Bn.x,
          bottom: Bn.y,
          width: 0,
          height: 0
        })
      } : ee,
      popperRef: wn,
      open: ee ? ye : !1,
      id: ot,
      transition: !0
    }, jt, G, {
      popperOptions: Rr,
      children: ({
        TransitionProps: Q
      }) => /* @__PURE__ */ E.jsx(T, p({
        timeout: W.transitions.duration.shorter
      }, Q, xe, {
        children: /* @__PURE__ */ E.jsxs(P, p({}, Be, {
          children: [ie, x ? /* @__PURE__ */ E.jsx(j, p({}, ze, {
            ref: pe
          })) : null]
        }))
      }))
    }))]
  });
}), Mb = Jv;
function Qv(e) {
  return Re("MuiTextField", e);
}
Se("MuiTextField", ["root"]);
const eb = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], tb = {
  standard: Ha,
  filled: Da,
  outlined: Xa
}, nb = (e) => {
  const {
    classes: t
  } = e;
  return $e({
    root: ["root"]
  }, Qv, t);
}, ob = K(Qh, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
    error: m = !1,
    FormHelperTextProps: h,
    fullWidth: g = !1,
    helperText: v,
    id: f,
    InputLabelProps: C,
    inputProps: $,
    InputProps: w,
    inputRef: y,
    label: b,
    maxRows: R,
    minRows: S,
    multiline: x = !1,
    name: k,
    onBlur: M,
    onChange: O,
    onFocus: N,
    placeholder: A,
    required: L = !1,
    rows: z,
    select: B = !1,
    SelectProps: I,
    type: F,
    value: _,
    variant: q = "outlined"
  } = o, se = U(o, eb), Te = p({}, o, {
    autoFocus: i,
    color: l,
    disabled: u,
    error: m,
    fullWidth: g,
    multiline: x,
    required: L,
    select: B,
    variant: q
  }), he = nb(Te), fe = {};
  q === "outlined" && (C && typeof C.shrink < "u" && (fe.notched = C.shrink), fe.label = b), B && ((!I || !I.native) && (fe.id = void 0), fe["aria-describedby"] = void 0);
  const H = er(f), X = v && H ? `${H}-helper-text` : void 0, le = b && H ? `${H}-label` : void 0, ke = tb[q], Z = /* @__PURE__ */ E.jsx(ke, p({
    "aria-describedby": X,
    autoComplete: r,
    autoFocus: i,
    defaultValue: c,
    fullWidth: g,
    multiline: x,
    name: k,
    rows: z,
    maxRows: R,
    minRows: S,
    type: F,
    value: _,
    id: H,
    inputRef: y,
    onBlur: M,
    onChange: O,
    onFocus: N,
    placeholder: A,
    inputProps: $
  }, fe, w));
  return /* @__PURE__ */ E.jsxs(ob, p({
    className: re(he.root, a),
    disabled: u,
    error: m,
    fullWidth: g,
    ref: n,
    required: L,
    color: l,
    variant: q,
    ownerState: Te
  }, se, {
    children: [b != null && b !== "" && /* @__PURE__ */ E.jsx(Ag, p({
      htmlFor: H,
      id: le
    }, C, {
      children: b
    })), B ? /* @__PURE__ */ E.jsx(Hv, p({
      "aria-describedby": X,
      id: H,
      labelId: le,
      value: _,
      input: Z
    }, I, {
      children: s
    })) : Z, v && /* @__PURE__ */ E.jsx(sg, p({
      id: X
    }, h, {
      children: v
    }))]
  }));
}), Ab = rb;
function ib(e) {
  return Re("MuiToggleButton", e);
}
const sb = Se("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), cn = sb, ab = /* @__PURE__ */ d.createContext({}), Za = ab, lb = /* @__PURE__ */ d.createContext(void 0), Ja = lb;
function cb(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.indexOf(e) >= 0 : e === t;
}
const ub = ["value"], db = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"], pb = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: o,
    disabled: r,
    size: i,
    color: s
  } = e, a = {
    root: ["root", o && "selected", r && "disabled", n && "fullWidth", `size${J(i)}`, s]
  };
  return $e(a, ib, t);
}, fb = K(bi, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`size${J(n.size)}`]];
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
    [`&.${cn.disabled}`]: {
      color: (e.vars || e).palette.action.disabled,
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      // Reset on mouse devices
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.text.primary, e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${cn.selected}`]: {
      color: n,
      backgroundColor: e.vars ? `rgba(${o} / ${e.vars.palette.action.selectedOpacity})` : Qe(n, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${o} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(n, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: e.vars ? `rgba(${o} / ${e.vars.palette.action.selectedOpacity})` : Qe(n, e.palette.action.selectedOpacity)
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
}), mb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = d.useContext(Za), {
    value: r
  } = o, i = U(o, ub), s = d.useContext(Ja), a = nr(p({}, i, {
    selected: cb(t.value, r)
  }), t), l = we({
    props: a,
    name: "MuiToggleButton"
  }), {
    children: c,
    className: u,
    color: m = "standard",
    disabled: h = !1,
    disableFocusRipple: g = !1,
    fullWidth: v = !1,
    onChange: f,
    onClick: C,
    selected: $,
    size: w = "medium",
    value: y
  } = l, b = U(l, db), R = p({}, l, {
    color: m,
    disabled: h,
    disableFocusRipple: g,
    fullWidth: v,
    size: w
  }), S = pb(R), x = (M) => {
    C && (C(M, y), M.defaultPrevented) || f && f(M, y);
  }, k = s || "";
  return /* @__PURE__ */ E.jsx(fb, p({
    className: re(i.className, S.root, u, k),
    disabled: h,
    focusRipple: !g,
    ref: n,
    onClick: x,
    onChange: f,
    value: y,
    ownerState: R,
    "aria-pressed": $
  }, b, {
    children: c
  }));
}), Bb = mb;
function hb(e) {
  return Re("MuiToggleButtonGroup", e);
}
const gb = Se("MuiToggleButtonGroup", ["root", "selected", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]), Me = gb, vb = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"], bb = (e) => {
  const {
    classes: t,
    orientation: n,
    fullWidth: o,
    disabled: r
  } = e, i = {
    root: ["root", n === "vertical" && "vertical", o && "fullWidth"],
    grouped: ["grouped", `grouped${J(n)}`, r && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return $e(i, hb, t);
}, yb = K("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Me.grouped}`]: t.grouped
    }, {
      [`& .${Me.grouped}`]: t[`grouped${J(n.orientation)}`]
    }, {
      [`& .${Me.firstButton}`]: t.firstButton
    }, {
      [`& .${Me.lastButton}`]: t.lastButton
    }, {
      [`& .${Me.middleButton}`]: t.middleButton
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
  [`& .${Me.grouped}`]: p({}, e.orientation === "horizontal" ? {
    [`&.${Me.selected} + .${Me.grouped}.${Me.selected}`]: {
      borderLeft: 0,
      marginLeft: 0
    }
  } : {
    [`&.${Me.selected} + .${Me.grouped}.${Me.selected}`]: {
      borderTop: 0,
      marginTop: 0
    }
  })
}, e.orientation === "horizontal" ? {
  [`& .${Me.firstButton},& .${Me.middleButton}`]: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  [`& .${Me.lastButton},& .${Me.middleButton}`]: {
    marginLeft: -1,
    borderLeft: "1px solid transparent",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
} : {
  [`& .${Me.firstButton},& .${Me.middleButton}`]: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  [`& .${Me.lastButton},& .${Me.middleButton}`]: {
    marginTop: -1,
    borderTop: "1px solid transparent",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
}, e.orientation === "horizontal" ? {
  [`& .${Me.lastButton}.${cn.disabled},& .${Me.middleButton}.${cn.disabled}`]: {
    borderLeft: "1px solid transparent"
  }
} : {
  [`& .${Me.lastButton}.${cn.disabled},& .${Me.middleButton}.${cn.disabled}`]: {
    borderTop: "1px solid transparent"
  }
})), xb = /* @__PURE__ */ d.forwardRef(function(t, n) {
  const o = we({
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
    orientation: m = "horizontal",
    size: h = "medium",
    value: g
  } = o, v = U(o, vb), f = p({}, o, {
    disabled: a,
    fullWidth: c,
    orientation: m,
    size: h
  }), C = bb(f), $ = d.useCallback((x, k) => {
    if (!u)
      return;
    const M = g && g.indexOf(k);
    let O;
    g && M >= 0 ? (O = g.slice(), O.splice(M, 1)) : O = g ? g.concat(k) : [k], u(x, O);
  }, [u, g]), w = d.useCallback((x, k) => {
    u && u(x, g === k ? null : k);
  }, [u, g]), y = d.useMemo(() => ({
    className: C.grouped,
    onChange: l ? w : $,
    value: g,
    size: h,
    fullWidth: c,
    color: s,
    disabled: a
  }), [C.grouped, l, w, $, g, h, c, s, a]), b = Pc(r), R = b.length, S = (x) => {
    const k = x === 0, M = x === R - 1;
    return k && M ? "" : k ? C.firstButton : M ? C.lastButton : C.middleButton;
  };
  return /* @__PURE__ */ E.jsx(yb, p({
    role: "group",
    className: re(C.root, i),
    ref: n,
    ownerState: f
  }, v, {
    children: /* @__PURE__ */ E.jsx(Za.Provider, {
      value: y,
      children: b.map((x, k) => /* @__PURE__ */ E.jsx(Ja.Provider, {
        value: S(k),
        children: x
      }, k))
    })
  }));
}), Fb = xb;
export {
  wb as A,
  Ob as B,
  Eb as C,
  Rb as E,
  Zl as G,
  Fp as I,
  Na as P,
  Sb as T,
  Jl as a,
  Ad as b,
  $b as c,
  Mb as d,
  re as e,
  Ab as f,
  Pb as g,
  ra as h,
  Tb as i,
  E as j,
  kb as k,
  Ib as l,
  Bb as m,
  Nr as n,
  Fb as o,
  Lt as t,
  Ue as u
};
