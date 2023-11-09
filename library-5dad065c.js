function _h(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l && Object.defineProperty(e, o, l.get ? l : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function hf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mf = { exports: {} }, Gl = {}, vf = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po = Symbol.for("react.element"), Ph = Symbol.for("react.portal"), Lh = Symbol.for("react.fragment"), Nh = Symbol.for("react.strict_mode"), Mh = Symbol.for("react.profiler"), zh = Symbol.for("react.provider"), Dh = Symbol.for("react.context"), Oh = Symbol.for("react.forward_ref"), Ih = Symbol.for("react.suspense"), Fh = Symbol.for("react.memo"), $h = Symbol.for("react.lazy"), Ds = Symbol.iterator;
function jh(e) {
  return e === null || typeof e != "object" ? null : (e = Ds && e[Ds] || e["@@iterator"], typeof e == "function" ? e : null);
}
var yf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, gf = Object.assign, wf = {};
function Sr(e, t, n) {
  this.props = e, this.context = t, this.refs = wf, this.updater = n || yf;
}
Sr.prototype.isReactComponent = {};
Sr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sf() {
}
Sf.prototype = Sr.prototype;
function wu(e, t, n) {
  this.props = e, this.context = t, this.refs = wf, this.updater = n || yf;
}
var Su = wu.prototype = new Sf();
Su.constructor = wu;
gf(Su, Sr.prototype);
Su.isPureReactComponent = !0;
var Os = Array.isArray, Ef = Object.prototype.hasOwnProperty, Eu = { current: null }, xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      Ef.call(t, r) && !xf.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
    o.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++)
      u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
      o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Po, type: e, key: l, ref: i, props: o, _owner: Eu.current };
}
function Ah(e, t) {
  return { $$typeof: Po, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Po;
}
function Uh(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Is = /\/+/g;
function Ii(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Uh("" + e.key) : t.toString(36);
}
function ol(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Po:
          case Ph:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Ii(i, 0) : r, Os(o) ? (n = "", e != null && (n = e.replace(Is, "$&/") + "/"), ol(o, t, n, "", function(s) {
      return s;
    })) : o != null && (xu(o) && (o = Ah(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Is, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Os(e))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var u = r + Ii(l, a);
      i += ol(l, t, n, u, o);
    }
  else if (u = jh(e), typeof u == "function")
    for (e = u.call(e), a = 0; !(l = e.next()).done; )
      l = l.value, u = r + Ii(l, a++), i += ol(l, t, n, u, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function jo(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return ol(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function Bh(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Qe = { current: null }, ll = { transition: null }, Vh = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: ll, ReactCurrentOwner: Eu };
W.Children = { map: jo, forEach: function(e, t, n) {
  jo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return jo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return jo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!xu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = Sr;
W.Fragment = Lh;
W.Profiler = Mh;
W.PureComponent = wu;
W.StrictMode = Nh;
W.Suspense = Ih;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vh;
W.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = gf({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Eu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var a = e.type.defaultProps;
    for (u in t)
      Ef.call(t, u) && !xf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++)
      a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Po, type: e.type, key: o, ref: l, props: r, _owner: i };
};
W.createContext = function(e) {
  return e = { $$typeof: Dh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zh, _context: e }, e.Consumer = e;
};
W.createElement = kf;
W.createFactory = function(e) {
  var t = kf.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: Oh, render: e };
};
W.isValidElement = xu;
W.lazy = function(e) {
  return { $$typeof: $h, _payload: { _status: -1, _result: e }, _init: Bh };
};
W.memo = function(e, t) {
  return { $$typeof: Fh, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
W.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function(e, t) {
  return Qe.current.useCallback(e, t);
};
W.useContext = function(e) {
  return Qe.current.useContext(e);
};
W.useDebugValue = function() {
};
W.useDeferredValue = function(e) {
  return Qe.current.useDeferredValue(e);
};
W.useEffect = function(e, t) {
  return Qe.current.useEffect(e, t);
};
W.useId = function() {
  return Qe.current.useId();
};
W.useImperativeHandle = function(e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function(e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function(e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
W.useMemo = function(e, t) {
  return Qe.current.useMemo(e, t);
};
W.useReducer = function(e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
W.useRef = function(e) {
  return Qe.current.useRef(e);
};
W.useState = function(e) {
  return Qe.current.useState(e);
};
W.useSyncExternalStore = function(e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function() {
  return Qe.current.useTransition();
};
W.version = "18.2.0";
vf.exports = W;
var T = vf.exports;
const re = /* @__PURE__ */ hf(T), ha = /* @__PURE__ */ _h({
  __proto__: null,
  default: re
}, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wh = T, Hh = Symbol.for("react.element"), Qh = Symbol.for("react.fragment"), Kh = Object.prototype.hasOwnProperty, Yh = Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cf(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Kh.call(t, r) && !Gh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Hh, type: e, key: l, ref: i, props: o, _owner: Yh.current };
}
Gl.Fragment = Qh;
Gl.jsx = Cf;
Gl.jsxs = Cf;
mf.exports = Gl;
var io = mf.exports;
function Xh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Zh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Jh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var l;
      r.tags.length === 0 ? r.insertionPoint ? l = r.insertionPoint.nextSibling : r.prepend ? l = r.container.firstChild : l = r.before : l = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, l), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Zh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = Xh(o);
      try {
        l.insertRule(r, l.cssRules.length);
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
}(), Ae = "-ms-", Sl = "-moz-", Y = "-webkit-", Tf = "comm", ku = "rule", Cu = "decl", qh = "@import", Rf = "@keyframes", bh = "@layer", em = Math.abs, Xl = String.fromCharCode, tm = Object.assign;
function nm(e, t) {
  return Oe(e, 0) ^ 45 ? (((t << 2 ^ Oe(e, 0)) << 2 ^ Oe(e, 1)) << 2 ^ Oe(e, 2)) << 2 ^ Oe(e, 3) : 0;
}
function _f(e) {
  return e.trim();
}
function rm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function G(e, t, n) {
  return e.replace(t, n);
}
function ma(e, t) {
  return e.indexOf(t);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function ao(e, t, n) {
  return e.slice(t, n);
}
function Pt(e) {
  return e.length;
}
function Tu(e) {
  return e.length;
}
function Ao(e, t) {
  return t.push(e), e;
}
function om(e, t) {
  return e.map(t).join("");
}
var Zl = 1, dr = 1, Pf = 0, be = 0, Ce = 0, Er = "";
function Jl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: Zl, column: dr, length: i, return: "" };
}
function Lr(e, t) {
  return tm(Jl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lm() {
  return Ce;
}
function im() {
  return Ce = be > 0 ? Oe(Er, --be) : 0, dr--, Ce === 10 && (dr = 1, Zl--), Ce;
}
function nt() {
  return Ce = be < Pf ? Oe(Er, be++) : 0, dr++, Ce === 10 && (dr = 1, Zl++), Ce;
}
function Mt() {
  return Oe(Er, be);
}
function il() {
  return be;
}
function Lo(e, t) {
  return ao(Er, e, t);
}
function uo(e) {
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
function Lf(e) {
  return Zl = dr = 1, Pf = Pt(Er = e), be = 0, [];
}
function Nf(e) {
  return Er = "", e;
}
function al(e) {
  return _f(Lo(be - 1, va(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function am(e) {
  for (; (Ce = Mt()) && Ce < 33; )
    nt();
  return uo(e) > 2 || uo(Ce) > 3 ? "" : " ";
}
function um(e, t) {
  for (; --t && nt() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return Lo(e, il() + (t < 6 && Mt() == 32 && nt() == 32));
}
function va(e) {
  for (; nt(); )
    switch (Ce) {
      case e:
        return be;
      case 34:
      case 39:
        e !== 34 && e !== 39 && va(Ce);
        break;
      case 40:
        e === 41 && va(e);
        break;
      case 92:
        nt();
        break;
    }
  return be;
}
function sm(e, t) {
  for (; nt() && e + Ce !== 47 + 10; )
    if (e + Ce === 42 + 42 && Mt() === 47)
      break;
  return "/*" + Lo(t, be - 1) + "*" + Xl(e === 47 ? e : nt());
}
function cm(e) {
  for (; !uo(Mt()); )
    nt();
  return Lo(e, be);
}
function fm(e) {
  return Nf(ul("", null, null, null, [""], e = Lf(e), 0, [0], e));
}
function ul(e, t, n, r, o, l, i, a, u) {
  for (var s = 0, p = 0, m = i, h = 0, g = 0, y = 0, w = 1, C = 1, f = 1, d = 0, v = "", c = o, k = l, _ = r, x = v; C; )
    switch (y = d, d = nt()) {
      case 40:
        if (y != 108 && Oe(x, m - 1) == 58) {
          ma(x += G(al(d), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += al(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += am(y);
        break;
      case 92:
        x += um(il() - 1, 7);
        continue;
      case 47:
        switch (Mt()) {
          case 42:
          case 47:
            Ao(dm(sm(nt(), il()), t, n), u);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * w:
        a[s++] = Pt(x) * f;
      case 125 * w:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            C = 0;
          case 59 + p:
            f == -1 && (x = G(x, /\f/g, "")), g > 0 && Pt(x) - m && Ao(g > 32 ? $s(x + ";", r, n, m - 1) : $s(G(x, " ", "") + ";", r, n, m - 2), u);
            break;
          case 59:
            x += ";";
          default:
            if (Ao(_ = Fs(x, t, n, s, p, o, a, v, c = [], k = [], m), l), d === 123)
              if (p === 0)
                ul(x, t, _, _, c, l, m, a, k);
              else
                switch (h === 99 && Oe(x, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ul(e, _, _, r && Ao(Fs(e, _, _, 0, 0, o, a, v, o, c = [], m), k), o, k, m, a, r ? c : k);
                    break;
                  default:
                    ul(x, _, _, _, [""], k, 0, a, k);
                }
        }
        s = p = g = 0, w = f = 1, v = x = "", m = i;
        break;
      case 58:
        m = 1 + Pt(x), g = y;
      default:
        if (w < 1) {
          if (d == 123)
            --w;
          else if (d == 125 && w++ == 0 && im() == 125)
            continue;
        }
        switch (x += Xl(d), d * w) {
          case 38:
            f = p > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            a[s++] = (Pt(x) - 1) * f, f = 1;
            break;
          case 64:
            Mt() === 45 && (x += al(nt())), h = Mt(), p = m = Pt(v = x += cm(il())), d++;
            break;
          case 45:
            y === 45 && Pt(x) == 2 && (w = 0);
        }
    }
  return l;
}
function Fs(e, t, n, r, o, l, i, a, u, s, p) {
  for (var m = o - 1, h = o === 0 ? l : [""], g = Tu(h), y = 0, w = 0, C = 0; y < r; ++y)
    for (var f = 0, d = ao(e, m + 1, m = em(w = i[y])), v = e; f < g; ++f)
      (v = _f(w > 0 ? h[f] + " " + d : G(d, /&\f/g, h[f]))) && (u[C++] = v);
  return Jl(e, t, n, o === 0 ? ku : a, u, s, p);
}
function dm(e, t, n) {
  return Jl(e, t, n, Tf, Xl(lm()), ao(e, 2, -2), 0);
}
function $s(e, t, n, r) {
  return Jl(e, t, n, Cu, ao(e, 0, r), ao(e, r + 1, -1), r);
}
function or(e, t) {
  for (var n = "", r = Tu(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function pm(e, t, n, r) {
  switch (e.type) {
    case bh:
      if (e.children.length)
        break;
    case qh:
    case Cu:
      return e.return = e.return || e.value;
    case Tf:
      return "";
    case Rf:
      return e.return = e.value + "{" + or(e.children, r) + "}";
    case ku:
      e.value = e.props.join(",");
  }
  return Pt(n = or(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function hm(e) {
  var t = Tu(e);
  return function(n, r, o, l) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](n, r, o, l) || "";
    return i;
  };
}
function mm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function vm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ym = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = Mt(), o === 38 && l === 12 && (n[r] = 1), !uo(l); )
    nt();
  return Lo(t, be);
}, gm = function(t, n) {
  var r = -1, o = 44;
  do
    switch (uo(o)) {
      case 0:
        o === 38 && Mt() === 12 && (n[r] = 1), t[r] += ym(be - 1, n, r);
        break;
      case 2:
        t[r] += al(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Mt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Xl(o);
    }
  while (o = nt());
  return t;
}, wm = function(t, n) {
  return Nf(gm(Lf(t), n));
}, js = /* @__PURE__ */ new WeakMap(), Sm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !js.get(r)) && !o) {
      js.set(t, !0);
      for (var l = [], i = wm(n, l), a = r.props, u = 0, s = 0; u < i.length; u++)
        for (var p = 0; p < a.length; p++, s++)
          t.props[s] = l[u] ? i[u].replace(/&\f/g, a[p]) : a[p] + " " + i[u];
    }
  }
}, Em = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Mf(e, t) {
  switch (nm(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
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
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + Sl + e + Ae + e + e;
    case 6828:
    case 4268:
      return Y + e + Ae + e + e;
    case 6165:
      return Y + e + Ae + "flex-" + e + e;
    case 5187:
      return Y + e + G(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + Ae + "flex-$1$2") + e;
    case 5443:
      return Y + e + Ae + "flex-item-" + G(e, /flex-|-self/, "") + e;
    case 4675:
      return Y + e + Ae + "flex-line-pack" + G(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Y + e + Ae + G(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + Ae + G(e, "basis", "preferred-size") + e;
    case 6060:
      return Y + "box-" + G(e, "-grow", "") + Y + e + Ae + G(e, "grow", "positive") + e;
    case 4554:
      return Y + G(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return G(G(G(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return G(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return G(G(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return G(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
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
      if (Pt(e) - 1 - t > 6)
        switch (Oe(e, t + 1)) {
          case 109:
            if (Oe(e, t + 4) !== 45)
              break;
          case 102:
            return G(e, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + Sl + (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ma(e, "stretch") ? Mf(G(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Oe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Oe(e, Pt(e) - 3 - (~ma(e, "!important") && 10))) {
        case 107:
          return G(e, ":", ":" + Y) + e;
        case 101:
          return G(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (Oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + Ae + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return Y + e + Ae + G(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + Ae + G(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + Ae + G(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + Ae + e + e;
  }
  return e;
}
var xm = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Cu:
        t.return = Mf(t.value, t.length);
        break;
      case Rf:
        return or([Lr(t, {
          value: G(t.value, "@", "@" + Y)
        })], o);
      case ku:
        if (t.length)
          return om(t.props, function(l) {
            switch (rm(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return or([Lr(t, {
                  props: [G(l, /:(read-\w+)/, ":" + Sl + "$1")]
                })], o);
              case "::placeholder":
                return or([Lr(t, {
                  props: [G(l, /:(plac\w+)/, ":" + Y + "input-$1")]
                }), Lr(t, {
                  props: [G(l, /:(plac\w+)/, ":" + Sl + "$1")]
                }), Lr(t, {
                  props: [G(l, /:(plac\w+)/, Ae + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, km = [xm], Cm = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var C = w.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || km, l = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var C = w.getAttribute("data-emotion").split(" "), f = 1; f < C.length; f++)
        l[C[f]] = !0;
      a.push(w);
    }
  );
  var u, s = [Sm, Em];
  {
    var p, m = [pm, mm(function(w) {
      p.insert(w);
    })], h = hm(s.concat(o, m)), g = function(C) {
      return or(fm(C), h);
    };
    u = function(C, f, d, v) {
      p = d, g(C ? C + "{" + f.styles + "}" : f.styles), v && (y.inserted[f.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Jh({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: l,
    registered: {},
    insert: u
  };
  return y.sheet.hydrate(a), y;
}, zf = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze = typeof Symbol == "function" && Symbol.for, Ru = ze ? Symbol.for("react.element") : 60103, _u = ze ? Symbol.for("react.portal") : 60106, ql = ze ? Symbol.for("react.fragment") : 60107, bl = ze ? Symbol.for("react.strict_mode") : 60108, ei = ze ? Symbol.for("react.profiler") : 60114, ti = ze ? Symbol.for("react.provider") : 60109, ni = ze ? Symbol.for("react.context") : 60110, Pu = ze ? Symbol.for("react.async_mode") : 60111, ri = ze ? Symbol.for("react.concurrent_mode") : 60111, oi = ze ? Symbol.for("react.forward_ref") : 60112, li = ze ? Symbol.for("react.suspense") : 60113, Tm = ze ? Symbol.for("react.suspense_list") : 60120, ii = ze ? Symbol.for("react.memo") : 60115, ai = ze ? Symbol.for("react.lazy") : 60116, Rm = ze ? Symbol.for("react.block") : 60121, _m = ze ? Symbol.for("react.fundamental") : 60117, Pm = ze ? Symbol.for("react.responder") : 60118, Lm = ze ? Symbol.for("react.scope") : 60119;
function lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ru:
        switch (e = e.type, e) {
          case Pu:
          case ri:
          case ql:
          case ei:
          case bl:
          case li:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ni:
              case oi:
              case ai:
              case ii:
              case ti:
                return e;
              default:
                return t;
            }
        }
      case _u:
        return t;
    }
  }
}
function Df(e) {
  return lt(e) === ri;
}
J.AsyncMode = Pu;
J.ConcurrentMode = ri;
J.ContextConsumer = ni;
J.ContextProvider = ti;
J.Element = Ru;
J.ForwardRef = oi;
J.Fragment = ql;
J.Lazy = ai;
J.Memo = ii;
J.Portal = _u;
J.Profiler = ei;
J.StrictMode = bl;
J.Suspense = li;
J.isAsyncMode = function(e) {
  return Df(e) || lt(e) === Pu;
};
J.isConcurrentMode = Df;
J.isContextConsumer = function(e) {
  return lt(e) === ni;
};
J.isContextProvider = function(e) {
  return lt(e) === ti;
};
J.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ru;
};
J.isForwardRef = function(e) {
  return lt(e) === oi;
};
J.isFragment = function(e) {
  return lt(e) === ql;
};
J.isLazy = function(e) {
  return lt(e) === ai;
};
J.isMemo = function(e) {
  return lt(e) === ii;
};
J.isPortal = function(e) {
  return lt(e) === _u;
};
J.isProfiler = function(e) {
  return lt(e) === ei;
};
J.isStrictMode = function(e) {
  return lt(e) === bl;
};
J.isSuspense = function(e) {
  return lt(e) === li;
};
J.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ql || e === ri || e === ei || e === bl || e === li || e === Tm || typeof e == "object" && e !== null && (e.$$typeof === ai || e.$$typeof === ii || e.$$typeof === ti || e.$$typeof === ni || e.$$typeof === oi || e.$$typeof === _m || e.$$typeof === Pm || e.$$typeof === Lm || e.$$typeof === Rm);
};
J.typeOf = lt;
zf.exports = J;
var Nm = zf.exports, Of = Nm, Mm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, If = {};
If[Of.ForwardRef] = Mm;
If[Of.Memo] = zm;
var Dm = !0;
function Om(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Ff = function(t, n, r) {
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
  Dm === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $f = function(t, n, r) {
  Ff(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var l = n;
    do
      t.insert(n === l ? "." + o : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function Im(e) {
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
var Fm = {
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
}, $m = /[A-Z]|^ms/g, jm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, jf = function(t) {
  return t.charCodeAt(1) === 45;
}, As = function(t) {
  return t != null && typeof t != "boolean";
}, Fi = /* @__PURE__ */ vm(function(e) {
  return jf(e) ? e : e.replace($m, "-$&").toLowerCase();
}), Us = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(jm, function(r, o, l) {
          return Lt = {
            name: o,
            styles: l,
            next: Lt
          }, o;
        });
  }
  return Fm[t] !== 1 && !jf(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function so(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Lt = {
          name: n.name,
          styles: n.styles,
          next: Lt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Lt = {
              name: r.name,
              styles: r.styles,
              next: Lt
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return Am(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Lt, i = n(e);
        return Lt = l, so(e, t, i);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function Am(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += so(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? r += l + "{" + t[i] + "}" : As(i) && (r += Fi(l) + ":" + Us(l, i) + ";");
      else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var a = 0; a < i.length; a++)
          As(i[a]) && (r += Fi(l) + ":" + Us(l, i[a]) + ";");
      else {
        var u = so(e, t, i);
        switch (l) {
          case "animation":
          case "animationName": {
            r += Fi(l) + ":" + u + ";";
            break;
          }
          default:
            r += l + "{" + u + "}";
        }
      }
    }
  return r;
}
var Bs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Lt, Lu = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, l = "";
  Lt = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, l += so(r, n, i)) : l += i[0];
  for (var a = 1; a < t.length; a++)
    l += so(r, n, t[a]), o && (l += i[a]);
  Bs.lastIndex = 0;
  for (var u = "", s; (s = Bs.exec(l)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    s[1];
  var p = Im(l) + u;
  return {
    name: p,
    styles: l,
    next: Lt
  };
}, Um = function(t) {
  return t();
}, Af = ha["useInsertionEffect"] ? ha["useInsertionEffect"] : !1, Bm = Af || Um, Vs = Af || T.useLayoutEffect, ui = {}.hasOwnProperty, Uf = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Cm({
    key: "css"
  }) : null
);
Uf.Provider;
var Bf = function(t) {
  return /* @__PURE__ */ T.forwardRef(function(n, r) {
    var o = T.useContext(Uf);
    return t(n, o, r);
  });
}, Vf = /* @__PURE__ */ T.createContext({}), ya = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Wf = function(t, n) {
  var r = {};
  for (var o in n)
    ui.call(n, o) && (r[o] = n[o]);
  return r[ya] = t, r;
}, Vm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ff(n, r, o), Bm(function() {
    return $f(n, r, o);
  }), null;
}, Wm = /* @__PURE__ */ Bf(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[ya], l = [r], i = "";
  typeof e.className == "string" ? i = Om(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var a = Lu(l, void 0, T.useContext(Vf));
  i += t.key + "-" + a.name;
  var u = {};
  for (var s in e)
    ui.call(e, s) && s !== "css" && s !== ya && (u[s] = e[s]);
  return u.ref = n, u.className = i, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Vm, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ T.createElement(o, u));
}), Hf = Wm, Hm = io.Fragment;
function ln(e, t, n) {
  return ui.call(t, "css") ? io.jsx(Hf, Wf(e, t), n) : io.jsx(e, t, n);
}
function Qm(e, t, n) {
  return ui.call(t, "css") ? io.jsxs(Hf, Wf(e, t), n) : io.jsxs(e, t, n);
}
var El = {}, Qf = { exports: {} }, it = {}, Kf = { exports: {} }, Yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(N, O) {
    var U = N.length;
    N.push(O);
    e:
      for (; 0 < U; ) {
        var ee = U - 1 >>> 1, oe = N[ee];
        if (0 < o(oe, O))
          N[ee] = O, N[U] = oe, U = ee;
        else
          break e;
      }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0)
      return null;
    var O = N[0], U = N.pop();
    if (U !== O) {
      N[0] = U;
      e:
        for (var ee = 0, oe = N.length, ut = oe >>> 1; ee < ut; ) {
          var Ve = 2 * (ee + 1) - 1, En = N[Ve], It = Ve + 1, Hn = N[It];
          if (0 > o(En, U))
            It < oe && 0 > o(Hn, En) ? (N[ee] = Hn, N[It] = U, ee = It) : (N[ee] = En, N[Ve] = U, ee = Ve);
          else if (It < oe && 0 > o(Hn, U))
            N[ee] = Hn, N[It] = U, ee = It;
          else
            break e;
        }
    }
    return O;
  }
  function o(N, O) {
    var U = N.sortIndex - O.sortIndex;
    return U !== 0 ? U : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, a = i.now();
    e.unstable_now = function() {
      return i.now() - a;
    };
  }
  var u = [], s = [], p = 1, m = null, h = 3, g = !1, y = !1, w = !1, C = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var O = n(s); O !== null; ) {
      if (O.callback === null)
        r(s);
      else if (O.startTime <= N)
        r(s), O.sortIndex = O.expirationTime, t(u, O);
      else
        break;
      O = n(s);
    }
  }
  function c(N) {
    if (w = !1, v(N), !y)
      if (n(u) !== null)
        y = !0, he(k);
      else {
        var O = n(s);
        O !== null && Re(c, O.startTime - N);
      }
  }
  function k(N, O) {
    y = !1, w && (w = !1, f(L), L = -1), g = !0;
    var U = h;
    try {
      for (v(O), m = n(u); m !== null && (!(m.expirationTime > O) || N && !K()); ) {
        var ee = m.callback;
        if (typeof ee == "function") {
          m.callback = null, h = m.priorityLevel;
          var oe = ee(m.expirationTime <= O);
          O = e.unstable_now(), typeof oe == "function" ? m.callback = oe : m === n(u) && r(u), v(O);
        } else
          r(u);
        m = n(u);
      }
      if (m !== null)
        var ut = !0;
      else {
        var Ve = n(s);
        Ve !== null && Re(c, Ve.startTime - O), ut = !1;
      }
      return ut;
    } finally {
      m = null, h = U, g = !1;
    }
  }
  var _ = !1, x = null, L = -1, F = 5, D = -1;
  function K() {
    return !(e.unstable_now() - D < F);
  }
  function q() {
    if (x !== null) {
      var N = e.unstable_now();
      D = N;
      var O = !0;
      try {
        O = x(!0, N);
      } finally {
        O ? xe() : (_ = !1, x = null);
      }
    } else
      _ = !1;
  }
  var xe;
  if (typeof d == "function")
    xe = function() {
      d(q);
    };
  else if (typeof MessageChannel < "u") {
    var ve = new MessageChannel(), X = ve.port2;
    ve.port1.onmessage = q, xe = function() {
      X.postMessage(null);
    };
  } else
    xe = function() {
      C(q, 0);
    };
  function he(N) {
    x = N, _ || (_ = !0, xe());
  }
  function Re(N, O) {
    L = C(function() {
      N(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, he(k));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(N) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = h;
    }
    var U = h;
    h = O;
    try {
      return N();
    } finally {
      h = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, O) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var U = h;
    h = N;
    try {
      return O();
    } finally {
      h = U;
    }
  }, e.unstable_scheduleCallback = function(N, O, U) {
    var ee = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? ee + U : ee) : U = ee, N) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3;
    }
    return oe = U + oe, N = { id: p++, callback: O, priorityLevel: N, startTime: U, expirationTime: oe, sortIndex: -1 }, U > ee ? (N.sortIndex = U, t(s, N), n(u) === null && N === n(s) && (w ? (f(L), L = -1) : w = !0, Re(c, U - ee))) : (N.sortIndex = oe, t(u, N), y || g || (y = !0, he(k))), N;
  }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(N) {
    var O = h;
    return function() {
      var U = h;
      h = O;
      try {
        return N.apply(this, arguments);
      } finally {
        h = U;
      }
    };
  };
})(Yf);
Kf.exports = Yf;
var Km = Kf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gf = T, ot = Km;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xf = /* @__PURE__ */ new Set(), co = {};
function Vn(e, t) {
  pr(e, t), pr(e + "Capture", t);
}
function pr(e, t) {
  for (co[e] = t, e = 0; e < t.length; e++)
    Xf.add(t[e]);
}
var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ga = Object.prototype.hasOwnProperty, Ym = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ws = {}, Hs = {};
function Gm(e) {
  return ga.call(Hs, e) ? !0 : ga.call(Ws, e) ? !1 : Ym.test(e) ? Hs[e] = !0 : (Ws[e] = !0, !1);
}
function Xm(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Xm(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new Ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nu = /[\-:]([a-z])/g;
function Mu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Nu,
    Mu
  );
  Fe[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Nu, Mu);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Nu, Mu);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zu(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zm(t, n, o, r) && (n = null), r || o === null ? Gm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kt = Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Uo = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Yn = Symbol.for("react.fragment"), Du = Symbol.for("react.strict_mode"), wa = Symbol.for("react.profiler"), Zf = Symbol.for("react.provider"), Jf = Symbol.for("react.context"), Ou = Symbol.for("react.forward_ref"), Sa = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Iu = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), qf = Symbol.for("react.offscreen"), Qs = Symbol.iterator;
function Nr(e) {
  return e === null || typeof e != "object" ? null : (e = Qs && e[Qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pe = Object.assign, $i;
function Vr(e) {
  if ($i === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $i = t && t[1] || "";
    }
  return `
` + $i + e;
}
var ji = !1;
function Ai(e, t) {
  if (!e || ji)
    return "";
  ji = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var o = s.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, a = l.length - 1; 1 <= i && 0 <= a && o[i] !== l[a]; )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || o[i] !== l[a]) {
                var u = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ji = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function Jm(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ai(e.type, !1), e;
    case 11:
      return e = Ai(e.type.render, !1), e;
    case 1:
      return e = Ai(e.type, !0), e;
    default:
      return "";
  }
}
function xa(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case Kn:
      return "Portal";
    case wa:
      return "Profiler";
    case Du:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jf:
        return (e.displayName || "Context") + ".Consumer";
      case Zf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ou:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Iu:
        return t = e.displayName || null, t !== null ? t : xa(e.type) || "Memo";
      case qt:
        t = e._payload, e = e._init;
        try {
          return xa(e(t));
        } catch {
        }
    }
  return null;
}
function qm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xa(t);
    case 8:
      return t === Du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function bf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function bm(e) {
  var t = bf(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Bo(e) {
  e._valueTracker || (e._valueTracker = bm(e));
}
function ed(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = bf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function xl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ka(e, t) {
  var n = t.checked;
  return pe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ks(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = mn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function td(e, t) {
  t = t.checked, t != null && zu(e, "checked", t, !1);
}
function Ca(e, t) {
  td(e, t);
  var n = mn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ta(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ta(e, t.type, mn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ys(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ta(e, t, n) {
  (t !== "number" || xl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wr = Array.isArray;
function lr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ra(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(P(91));
  return pe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(P(92));
      if (Wr(n)) {
        if (1 < n.length)
          throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: mn(n) };
}
function nd(e, t) {
  var n = mn(t.value), r = mn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Xs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _a(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? rd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vo, od = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Vo = Vo || document.createElement("div"), Vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vo.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function fo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, e0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function(e) {
  e0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Yr[t] = Yr[e];
  });
});
function ld(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Yr.hasOwnProperty(e) && Yr[e] ? ("" + t).trim() : t + "px";
}
function id(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = ld(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var t0 = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pa(e, t) {
  if (t) {
    if (t0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(P(62));
  }
}
function La(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Na = null;
function Fu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ma = null, ir = null, ar = null;
function Zs(e) {
  if (e = zo(e)) {
    if (typeof Ma != "function")
      throw Error(P(280));
    var t = e.stateNode;
    t && (t = pi(t), Ma(e.stateNode, e.type, t));
  }
}
function ad(e) {
  ir ? ar ? ar.push(e) : ar = [e] : ir = e;
}
function ud() {
  if (ir) {
    var e = ir, t = ar;
    if (ar = ir = null, Zs(e), t)
      for (e = 0; e < t.length; e++)
        Zs(t[e]);
  }
}
function sd(e, t) {
  return e(t);
}
function cd() {
}
var Ui = !1;
function fd(e, t, n) {
  if (Ui)
    return e(t, n);
  Ui = !0;
  try {
    return sd(e, t, n);
  } finally {
    Ui = !1, (ir !== null || ar !== null) && (cd(), ud());
  }
}
function po(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = pi(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(P(231, t, typeof n));
  return n;
}
var za = !1;
if (Vt)
  try {
    var Mr = {};
    Object.defineProperty(Mr, "passive", { get: function() {
      za = !0;
    } }), window.addEventListener("test", Mr, Mr), window.removeEventListener("test", Mr, Mr);
  } catch {
    za = !1;
  }
function n0(e, t, n, r, o, l, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Gr = !1, kl = null, Cl = !1, Da = null, r0 = { onError: function(e) {
  Gr = !0, kl = e;
} };
function o0(e, t, n, r, o, l, i, a, u) {
  Gr = !1, kl = null, n0.apply(r0, arguments);
}
function l0(e, t, n, r, o, l, i, a, u) {
  if (o0.apply(this, arguments), Gr) {
    if (Gr) {
      var s = kl;
      Gr = !1, kl = null;
    } else
      throw Error(P(198));
    Cl || (Cl = !0, Da = s);
  }
}
function Wn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Js(e) {
  if (Wn(e) !== e)
    throw Error(P(188));
}
function i0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wn(e), t === null)
      throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n)
          return Js(o), e;
        if (l === r)
          return Js(o), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return)
      n = o, r = l;
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          i = !0, n = o, r = l;
          break;
        }
        if (a === r) {
          i = !0, r = o, n = l;
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (a === r) {
            i = !0, r = l, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!i)
          throw Error(P(189));
      }
    }
    if (n.alternate !== r)
      throw Error(P(190));
  }
  if (n.tag !== 3)
    throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function pd(e) {
  return e = i0(e), e !== null ? hd(e) : null;
}
function hd(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = hd(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var md = ot.unstable_scheduleCallback, qs = ot.unstable_cancelCallback, a0 = ot.unstable_shouldYield, u0 = ot.unstable_requestPaint, Ee = ot.unstable_now, s0 = ot.unstable_getCurrentPriorityLevel, $u = ot.unstable_ImmediatePriority, vd = ot.unstable_UserBlockingPriority, Tl = ot.unstable_NormalPriority, c0 = ot.unstable_LowPriority, yd = ot.unstable_IdlePriority, si = null, zt = null;
function f0(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function")
    try {
      zt.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var kt = Math.clz32 ? Math.clz32 : h0, d0 = Math.log, p0 = Math.LN2;
function h0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (d0(e) / p0 | 0) | 0;
}
var Wo = 64, Ho = 4194304;
function Hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = Hr(a) : (l &= i, l !== 0 && (r = Hr(l)));
  } else
    i = n & ~o, i !== 0 ? r = Hr(i) : l !== 0 && (r = Hr(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - kt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function m0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function v0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - kt(l), a = 1 << i, u = o[i];
    u === -1 ? (!(a & n) || a & r) && (o[i] = m0(a, t)) : u <= t && (e.expiredLanes |= a), l &= ~a;
  }
}
function Oa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function gd() {
  var e = Wo;
  return Wo <<= 1, !(Wo & 4194240) && (Wo = 64), e;
}
function Bi(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function No(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function y0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - kt(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function ju(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Z = 0;
function wd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Sd, Au, Ed, xd, kd, Ia = !1, Qo = [], an = null, un = null, sn = null, ho = /* @__PURE__ */ new Map(), mo = /* @__PURE__ */ new Map(), en = [], g0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      un = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mo.delete(t.pointerId);
  }
}
function zr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = zo(t), t !== null && Au(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function w0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return an = zr(an, e, t, n, r, o), !0;
    case "dragenter":
      return un = zr(un, e, t, n, r, o), !0;
    case "mouseover":
      return sn = zr(sn, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return ho.set(l, zr(ho.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, mo.set(l, zr(mo.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Cd(e) {
  var t = Pn(e.target);
  if (t !== null) {
    var n = Wn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = dd(n), t !== null) {
          e.blockedOn = t, kd(e.priority, function() {
            Ed(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function sl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Na = r, n.target.dispatchEvent(r), Na = null;
    } else
      return t = zo(n), t !== null && Au(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ec(e, t, n) {
  sl(e) && n.delete(t);
}
function S0() {
  Ia = !1, an !== null && sl(an) && (an = null), un !== null && sl(un) && (un = null), sn !== null && sl(sn) && (sn = null), ho.forEach(ec), mo.forEach(ec);
}
function Dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ia || (Ia = !0, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, S0)));
}
function vo(e) {
  function t(o) {
    return Dr(o, e);
  }
  if (0 < Qo.length) {
    Dr(Qo[0], e);
    for (var n = 1; n < Qo.length; n++) {
      var r = Qo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (an !== null && Dr(an, e), un !== null && Dr(un, e), sn !== null && Dr(sn, e), ho.forEach(t), mo.forEach(t), n = 0; n < en.length; n++)
    r = en[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && (n = en[0], n.blockedOn === null); )
    Cd(n), n.blockedOn === null && en.shift();
}
var ur = Kt.ReactCurrentBatchConfig, _l = !0;
function E0(e, t, n, r) {
  var o = Z, l = ur.transition;
  ur.transition = null;
  try {
    Z = 1, Uu(e, t, n, r);
  } finally {
    Z = o, ur.transition = l;
  }
}
function x0(e, t, n, r) {
  var o = Z, l = ur.transition;
  ur.transition = null;
  try {
    Z = 4, Uu(e, t, n, r);
  } finally {
    Z = o, ur.transition = l;
  }
}
function Uu(e, t, n, r) {
  if (_l) {
    var o = Fa(e, t, n, r);
    if (o === null)
      Ji(e, t, r, Pl, n), bs(e, r);
    else if (w0(o, e, t, n, r))
      r.stopPropagation();
    else if (bs(e, r), t & 4 && -1 < g0.indexOf(e)) {
      for (; o !== null; ) {
        var l = zo(o);
        if (l !== null && Sd(l), l = Fa(e, t, n, r), l === null && Ji(e, t, r, Pl, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      Ji(e, t, r, null, n);
  }
}
var Pl = null;
function Fa(e, t, n, r) {
  if (Pl = null, e = Fu(r), e = Pn(e), e !== null)
    if (t = Wn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = dd(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Pl = e, null;
}
function Td(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (s0()) {
        case $u:
          return 1;
        case vd:
          return 4;
        case Tl:
        case c0:
          return 16;
        case yd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, Bu = null, cl = null;
function Rd() {
  if (cl)
    return cl;
  var e, t = Bu, n = t.length, r, o = "value" in nn ? nn.value : nn.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return cl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ko() {
  return !0;
}
function tc() {
  return !1;
}
function at(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var a in e)
      e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(l) : l[a]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ko : tc, this.isPropagationStopped = tc, this;
  }
  return pe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ko);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ko);
  }, persist: function() {
  }, isPersistent: Ko }), t;
}
var xr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vu = at(xr), Mo = pe({}, xr, { view: 0, detail: 0 }), k0 = at(Mo), Vi, Wi, Or, ci = pe({}, Mo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (Vi = e.screenX - Or.screenX, Wi = e.screenY - Or.screenY) : Wi = Vi = 0, Or = e), Vi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wi;
} }), nc = at(ci), C0 = pe({}, ci, { dataTransfer: 0 }), T0 = at(C0), R0 = pe({}, Mo, { relatedTarget: 0 }), Hi = at(R0), _0 = pe({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), P0 = at(_0), L0 = pe({}, xr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), N0 = at(L0), M0 = pe({}, xr, { data: 0 }), rc = at(M0), z0 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, D0 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, O0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function I0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = O0[e]) ? !!t[e] : !1;
}
function Wu() {
  return I0;
}
var F0 = pe({}, Mo, { key: function(e) {
  if (e.key) {
    var t = z0[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? D0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wu, charCode: function(e) {
  return e.type === "keypress" ? fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $0 = at(F0), j0 = pe({}, ci, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oc = at(j0), A0 = pe({}, Mo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wu }), U0 = at(A0), B0 = pe({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), V0 = at(B0), W0 = pe({}, ci, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), H0 = at(W0), Q0 = [9, 13, 27, 32], Hu = Vt && "CompositionEvent" in window, Xr = null;
Vt && "documentMode" in document && (Xr = document.documentMode);
var K0 = Vt && "TextEvent" in window && !Xr, _d = Vt && (!Hu || Xr && 8 < Xr && 11 >= Xr), lc = String.fromCharCode(32), ic = !1;
function Pd(e, t) {
  switch (e) {
    case "keyup":
      return Q0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ld(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Y0(e, t) {
  switch (e) {
    case "compositionend":
      return Ld(t);
    case "keypress":
      return t.which !== 32 ? null : (ic = !0, lc);
    case "textInput":
      return e = t.data, e === lc && ic ? null : e;
    default:
      return null;
  }
}
function G0(e, t) {
  if (Gn)
    return e === "compositionend" || !Hu && Pd(e, t) ? (e = Rd(), cl = Bu = nn = null, Gn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _d && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var X0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!X0[e.type] : t === "textarea";
}
function Nd(e, t, n, r) {
  ad(r), t = Ll(t, "onChange"), 0 < t.length && (n = new Vu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Zr = null, yo = null;
function Z0(e) {
  Bd(e, 0);
}
function fi(e) {
  var t = Jn(e);
  if (ed(t))
    return e;
}
function J0(e, t) {
  if (e === "change")
    return t;
}
var Md = !1;
if (Vt) {
  var Qi;
  if (Vt) {
    var Ki = "oninput" in document;
    if (!Ki) {
      var uc = document.createElement("div");
      uc.setAttribute("oninput", "return;"), Ki = typeof uc.oninput == "function";
    }
    Qi = Ki;
  } else
    Qi = !1;
  Md = Qi && (!document.documentMode || 9 < document.documentMode);
}
function sc() {
  Zr && (Zr.detachEvent("onpropertychange", zd), yo = Zr = null);
}
function zd(e) {
  if (e.propertyName === "value" && fi(yo)) {
    var t = [];
    Nd(t, yo, e, Fu(e)), fd(Z0, t);
  }
}
function q0(e, t, n) {
  e === "focusin" ? (sc(), Zr = t, yo = n, Zr.attachEvent("onpropertychange", zd)) : e === "focusout" && sc();
}
function b0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fi(yo);
}
function ev(e, t) {
  if (e === "click")
    return fi(t);
}
function tv(e, t) {
  if (e === "input" || e === "change")
    return fi(t);
}
function nv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Tt = typeof Object.is == "function" ? Object.is : nv;
function go(e, t) {
  if (Tt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ga.call(t, o) || !Tt(e[o], t[o]))
      return !1;
  }
  return !0;
}
function cc(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function fc(e, t) {
  var n = cc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cc(n);
  }
}
function Dd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Od() {
  for (var e = window, t = xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = xl(e.document);
  }
  return t;
}
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function rv(e) {
  var t = Od(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Dd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = fc(n, l);
        var i = fc(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ov = Vt && "documentMode" in document && 11 >= document.documentMode, Xn = null, $a = null, Jr = null, ja = !1;
function dc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ja || Xn == null || Xn !== xl(r) || (r = Xn, "selectionStart" in r && Qu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jr && go(Jr, r) || (Jr = r, r = Ll($a, "onSelect"), 0 < r.length && (t = new Vu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xn)));
}
function Yo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zn = { animationend: Yo("Animation", "AnimationEnd"), animationiteration: Yo("Animation", "AnimationIteration"), animationstart: Yo("Animation", "AnimationStart"), transitionend: Yo("Transition", "TransitionEnd") }, Yi = {}, Id = {};
Vt && (Id = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function di(e) {
  if (Yi[e])
    return Yi[e];
  if (!Zn[e])
    return e;
  var t = Zn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Id)
      return Yi[e] = t[n];
  return e;
}
var Fd = di("animationend"), $d = di("animationiteration"), jd = di("animationstart"), Ad = di("transitionend"), Ud = /* @__PURE__ */ new Map(), pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gn(e, t) {
  Ud.set(e, t), Vn(t, [e]);
}
for (var Gi = 0; Gi < pc.length; Gi++) {
  var Xi = pc[Gi], lv = Xi.toLowerCase(), iv = Xi[0].toUpperCase() + Xi.slice(1);
  gn(lv, "on" + iv);
}
gn(Fd, "onAnimationEnd");
gn($d, "onAnimationIteration");
gn(jd, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(Ad, "onTransitionEnd");
pr("onMouseEnter", ["mouseout", "mouseover"]);
pr("onMouseLeave", ["mouseout", "mouseover"]);
pr("onPointerEnter", ["pointerout", "pointerover"]);
pr("onPointerLeave", ["pointerout", "pointerover"]);
Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), av = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function hc(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, l0(r, t, void 0, e), e.currentTarget = null;
}
function Bd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i], u = a.instance, s = a.currentTarget;
          if (a = a.listener, u !== l && o.isPropagationStopped())
            break e;
          hc(o, a, s), l = u;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (a = r[i], u = a.instance, s = a.currentTarget, a = a.listener, u !== l && o.isPropagationStopped())
            break e;
          hc(o, a, s), l = u;
        }
    }
  }
  if (Cl)
    throw e = Da, Cl = !1, Da = null, e;
}
function ie(e, t) {
  var n = t[Wa];
  n === void 0 && (n = t[Wa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Vd(t, e, 2, !1), n.add(r));
}
function Zi(e, t, n) {
  var r = 0;
  t && (r |= 4), Vd(n, e, r, t);
}
var Go = "_reactListening" + Math.random().toString(36).slice(2);
function wo(e) {
  if (!e[Go]) {
    e[Go] = !0, Xf.forEach(function(n) {
      n !== "selectionchange" && (av.has(n) || Zi(n, !1, e), Zi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Go] || (t[Go] = !0, Zi("selectionchange", !1, t));
  }
}
function Vd(e, t, n, r) {
  switch (Td(t)) {
    case 1:
      var o = E0;
      break;
    case 4:
      o = x0;
      break;
    default:
      o = Uu;
  }
  n = o.bind(null, t, n, e), o = void 0, !za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ji(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var a = r.stateNode.containerInfo;
          if (a === o || a.nodeType === 8 && a.parentNode === o)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var u = i.tag;
              if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o))
                return;
              i = i.return;
            }
          for (; a !== null; ) {
            if (i = Pn(a), i === null)
              return;
            if (u = i.tag, u === 5 || u === 6) {
              r = l = i;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
  fd(function() {
    var s = l, p = Fu(n), m = [];
    e: {
      var h = Ud.get(e);
      if (h !== void 0) {
        var g = Vu, y = e;
        switch (e) {
          case "keypress":
            if (fl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = $0;
            break;
          case "focusin":
            y = "focus", g = Hi;
            break;
          case "focusout":
            y = "blur", g = Hi;
            break;
          case "beforeblur":
          case "afterblur":
            g = Hi;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = nc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = T0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = U0;
            break;
          case Fd:
          case $d:
          case jd:
            g = P0;
            break;
          case Ad:
            g = V0;
            break;
          case "scroll":
            g = k0;
            break;
          case "wheel":
            g = H0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = N0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = oc;
        }
        var w = (t & 4) !== 0, C = !w && e === "scroll", f = w ? h !== null ? h + "Capture" : null : h;
        w = [];
        for (var d = s, v; d !== null; ) {
          v = d;
          var c = v.stateNode;
          if (v.tag === 5 && c !== null && (v = c, f !== null && (c = po(d, f), c != null && w.push(So(d, c, v)))), C)
            break;
          d = d.return;
        }
        0 < w.length && (h = new g(h, y, null, n, p), m.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", h && n !== Na && (y = n.relatedTarget || n.fromElement) && (Pn(y) || y[Wt]))
          break e;
        if ((g || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = s, y = y ? Pn(y) : null, y !== null && (C = Wn(y), y !== C || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = s), g !== y)) {
          if (w = nc, c = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = oc, c = "onPointerLeave", f = "onPointerEnter", d = "pointer"), C = g == null ? h : Jn(g), v = y == null ? h : Jn(y), h = new w(c, d + "leave", g, n, p), h.target = C, h.relatedTarget = v, c = null, Pn(p) === s && (w = new w(f, d + "enter", y, n, p), w.target = v, w.relatedTarget = C, c = w), C = c, g && y)
            t: {
              for (w = g, f = y, d = 0, v = w; v; v = Qn(v))
                d++;
              for (v = 0, c = f; c; c = Qn(c))
                v++;
              for (; 0 < d - v; )
                w = Qn(w), d--;
              for (; 0 < v - d; )
                f = Qn(f), v--;
              for (; d--; ) {
                if (w === f || f !== null && w === f.alternate)
                  break t;
                w = Qn(w), f = Qn(f);
              }
              w = null;
            }
          else
            w = null;
          g !== null && mc(m, h, g, w, !1), y !== null && C !== null && mc(m, C, y, w, !0);
        }
      }
      e: {
        if (h = s ? Jn(s) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
          var k = J0;
        else if (ac(h))
          if (Md)
            k = tv;
          else {
            k = b0;
            var _ = q0;
          }
        else
          (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = ev);
        if (k && (k = k(e, s))) {
          Nd(m, k, n, p);
          break e;
        }
        _ && _(e, h, s), e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && Ta(h, "number", h.value);
      }
      switch (_ = s ? Jn(s) : window, e) {
        case "focusin":
          (ac(_) || _.contentEditable === "true") && (Xn = _, $a = s, Jr = null);
          break;
        case "focusout":
          Jr = $a = Xn = null;
          break;
        case "mousedown":
          ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ja = !1, dc(m, n, p);
          break;
        case "selectionchange":
          if (ov)
            break;
        case "keydown":
        case "keyup":
          dc(m, n, p);
      }
      var x;
      if (Hu)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Gn ? Pd(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (_d && n.locale !== "ko" && (Gn || L !== "onCompositionStart" ? L === "onCompositionEnd" && Gn && (x = Rd()) : (nn = p, Bu = "value" in nn ? nn.value : nn.textContent, Gn = !0)), _ = Ll(s, L), 0 < _.length && (L = new rc(L, e, null, n, p), m.push({ event: L, listeners: _ }), x ? L.data = x : (x = Ld(n), x !== null && (L.data = x)))), (x = K0 ? Y0(e, n) : G0(e, n)) && (s = Ll(s, "onBeforeInput"), 0 < s.length && (p = new rc("onBeforeInput", "beforeinput", null, n, p), m.push({ event: p, listeners: s }), p.data = x));
    }
    Bd(m, t);
  });
}
function So(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = po(e, n), l != null && r.unshift(So(e, l, o)), l = po(e, t), l != null && r.push(So(e, l, o))), e = e.return;
  }
  return r;
}
function Qn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mc(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, s = a.stateNode;
    if (u !== null && u === r)
      break;
    a.tag === 5 && s !== null && (a = s, o ? (u = po(n, l), u != null && i.unshift(So(n, u, a))) : o || (u = po(n, l), u != null && i.push(So(n, u, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var uv = /\r\n?/g, sv = /\u0000|\uFFFD/g;
function vc(e) {
  return (typeof e == "string" ? e : "" + e).replace(uv, `
`).replace(sv, "");
}
function Xo(e, t, n) {
  if (t = vc(t), vc(e) !== t && n)
    throw Error(P(425));
}
function Nl() {
}
var Aa = null, Ua = null;
function Ba(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Va = typeof setTimeout == "function" ? setTimeout : void 0, cv = typeof clearTimeout == "function" ? clearTimeout : void 0, yc = typeof Promise == "function" ? Promise : void 0, fv = typeof queueMicrotask == "function" ? queueMicrotask : typeof yc < "u" ? function(e) {
  return yc.resolve(null).then(e).catch(dv);
} : Va;
function dv(e) {
  setTimeout(function() {
    throw e;
  });
}
function qi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), vo(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  vo(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function gc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kr = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + kr, Eo = "__reactProps$" + kr, Wt = "__reactContainer$" + kr, Wa = "__reactEvents$" + kr, pv = "__reactListeners$" + kr, hv = "__reactHandles$" + kr;
function Pn(e) {
  var t = e[Nt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Wt] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = gc(e); e !== null; ) {
          if (n = e[Nt])
            return n;
          e = gc(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function zo(e) {
  return e = e[Nt] || e[Wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(P(33));
}
function pi(e) {
  return e[Eo] || null;
}
var Ha = [], qn = -1;
function wn(e) {
  return { current: e };
}
function ae(e) {
  0 > qn || (e.current = Ha[qn], Ha[qn] = null, qn--);
}
function le(e, t) {
  qn++, Ha[qn] = e.current, e.current = t;
}
var vn = {}, Be = wn(vn), Ze = wn(!1), Fn = vn;
function hr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function Ml() {
  ae(Ze), ae(Be);
}
function wc(e, t, n) {
  if (Be.current !== vn)
    throw Error(P(168));
  le(Be, t), le(Ze, n);
}
function Wd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(P(108, qm(e) || "Unknown", o));
  return pe({}, n, r);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, Fn = Be.current, le(Be, e), le(Ze, Ze.current), !0;
}
function Sc(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(P(169));
  n ? (e = Wd(e, t, Fn), r.__reactInternalMemoizedMergedChildContext = e, ae(Ze), ae(Be), le(Be, e)) : ae(Ze), le(Ze, n);
}
var jt = null, hi = !1, bi = !1;
function Hd(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function mv(e) {
  hi = !0, Hd(e);
}
function Sn() {
  if (!bi && jt !== null) {
    bi = !0;
    var e = 0, t = Z;
    try {
      var n = jt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      jt = null, hi = !1;
    } catch (o) {
      throw jt !== null && (jt = jt.slice(e + 1)), md($u, Sn), o;
    } finally {
      Z = t, bi = !1;
    }
  }
  return null;
}
var bn = [], er = 0, Dl = null, Ol = 0, ft = [], dt = 0, $n = null, At = 1, Ut = "";
function Tn(e, t) {
  bn[er++] = Ol, bn[er++] = Dl, Dl = e, Ol = t;
}
function Qd(e, t, n) {
  ft[dt++] = At, ft[dt++] = Ut, ft[dt++] = $n, $n = e;
  var r = At;
  e = Ut;
  var o = 32 - kt(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - kt(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, At = 1 << 32 - kt(t) + o | n << o | r, Ut = l + e;
  } else
    At = 1 << l | n << o | r, Ut = e;
}
function Ku(e) {
  e.return !== null && (Tn(e, 1), Qd(e, 1, 0));
}
function Yu(e) {
  for (; e === Dl; )
    Dl = bn[--er], bn[er] = null, Ol = bn[--er], bn[er] = null;
  for (; e === $n; )
    $n = ft[--dt], ft[dt] = null, Ut = ft[--dt], ft[dt] = null, At = ft[--dt], ft[dt] = null;
}
var rt = null, tt = null, ue = !1, xt = null;
function Kd(e, t) {
  var n = pt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, tt = cn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $n !== null ? { id: At, overflow: Ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, tt = null, !0) : !1;
    default:
      return !1;
  }
}
function Qa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ka(e) {
  if (ue) {
    var t = tt;
    if (t) {
      var n = t;
      if (!Ec(e, t)) {
        if (Qa(e))
          throw Error(P(418));
        t = cn(n.nextSibling);
        var r = rt;
        t && Ec(e, t) ? Kd(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, rt = e);
      }
    } else {
      if (Qa(e))
        throw Error(P(418));
      e.flags = e.flags & -4097 | 2, ue = !1, rt = e;
    }
  }
}
function xc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function Zo(e) {
  if (e !== rt)
    return !1;
  if (!ue)
    return xc(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps)), t && (t = tt)) {
    if (Qa(e))
      throw Yd(), Error(P(418));
    for (; t; )
      Kd(e, t), t = cn(t.nextSibling);
  }
  if (xc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = cn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else
    tt = rt ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Yd() {
  for (var e = tt; e; )
    e = cn(e.nextSibling);
}
function mr() {
  tt = rt = null, ue = !1;
}
function Gu(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var vv = Kt.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    t = pe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Il = wn(null), Fl = null, tr = null, Xu = null;
function Zu() {
  Xu = tr = Fl = null;
}
function Ju(e) {
  var t = Il.current;
  ae(Il), e._currentValue = t;
}
function Ya(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function sr(e, t) {
  Fl = e, Xu = tr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ge = !0), e.firstContext = null);
}
function mt(e) {
  var t = e._currentValue;
  if (Xu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, tr === null) {
      if (Fl === null)
        throw Error(P(308));
      tr = e, Fl.dependencies = { lanes: 0, firstContext: e };
    } else
      tr = tr.next = e;
  return t;
}
var Ln = null;
function qu(e) {
  Ln === null ? Ln = [e] : Ln.push(e);
}
function Gd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, qu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ht(e, r);
}
function Ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function bu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Bt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, Q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ht(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, qu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ht(e, n);
}
function dl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ju(e, n);
  }
}
function kc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else
      o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function $l(e, t, n, r) {
  var o = e.updateQueue;
  bt = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a, s = u.next;
    u.next = null, i === null ? l = s : i.next = s, i = u;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, a = p.lastBaseUpdate, a !== i && (a === null ? p.firstBaseUpdate = s : a.next = s, p.lastBaseUpdate = u));
  }
  if (l !== null) {
    var m = o.baseState;
    i = 0, p = s = u = null, a = l;
    do {
      var h = a.lane, g = a.eventTime;
      if ((r & h) === h) {
        p !== null && (p = p.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, w = a;
          switch (h = t, g = n, w.tag) {
            case 1:
              if (y = w.payload, typeof y == "function") {
                m = y.call(g, m, h);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = w.payload, h = typeof y == "function" ? y.call(g, m, h) : y, h == null)
                break e;
              m = pe({}, m, h);
              break e;
            case 2:
              bt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [a] : h.push(a));
      } else
        g = { eventTime: g, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, p === null ? (s = p = g, u = m) : p = p.next = g, i |= h;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null)
          break;
        h = a, a = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
      }
    } while (1);
    if (p === null && (u = m), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else
      l === null && (o.shared.lanes = 0);
    An |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Cc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var Zd = new Gf.Component().refs;
function Ga(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var mi = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), o = pn(e), l = Bt(r, o);
  l.payload = t, n != null && (l.callback = n), t = fn(e, l, o), t !== null && (Ct(t, e, o, r), dl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = He(), o = pn(e), l = Bt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = fn(e, l, o), t !== null && (Ct(t, e, o, r), dl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = He(), r = pn(e), o = Bt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = fn(e, o, r), t !== null && (Ct(t, e, r, n), dl(t, e, r));
} };
function Tc(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !go(n, r) || !go(o, l) : !0;
}
function Jd(e, t, n) {
  var r = !1, o = vn, l = t.contextType;
  return typeof l == "object" && l !== null ? l = mt(l) : (o = Je(t) ? Fn : Be.current, r = t.contextTypes, l = (r = r != null) ? hr(e, o) : vn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = mi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Rc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mi.enqueueReplaceState(t, t.state, null);
}
function Xa(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Zd, bu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = mt(l) : (l = Je(t) ? Fn : Be.current, o.context = hr(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ga(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && mi.enqueueReplaceState(o, o.state, null), $l(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(P(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var a = o.refs;
        a === Zd && (a = o.refs = {}), i === null ? delete a[l] : a[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(P(284));
    if (!n._owner)
      throw Error(P(290, e));
  }
  return e;
}
function Jo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _c(e) {
  var t = e._init;
  return t(e._payload);
}
function qd(e) {
  function t(f, d) {
    if (e) {
      var v = f.deletions;
      v === null ? (f.deletions = [d], f.flags |= 16) : v.push(d);
    }
  }
  function n(f, d) {
    if (!e)
      return null;
    for (; d !== null; )
      t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function o(f, d) {
    return f = hn(f, d), f.index = 0, f.sibling = null, f;
  }
  function l(f, d, v) {
    return f.index = v, e ? (v = f.alternate, v !== null ? (v = v.index, v < d ? (f.flags |= 2, d) : v) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, v, c) {
    return d === null || d.tag !== 6 ? (d = ia(v, f.mode, c), d.return = f, d) : (d = o(d, v), d.return = f, d);
  }
  function u(f, d, v, c) {
    var k = v.type;
    return k === Yn ? p(f, d, v.props.children, c, v.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qt && _c(k) === d.type) ? (c = o(d, v.props), c.ref = Ir(f, d, v), c.return = f, c) : (c = gl(v.type, v.key, v.props, null, f.mode, c), c.ref = Ir(f, d, v), c.return = f, c);
  }
  function s(f, d, v, c) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = aa(v, f.mode, c), d.return = f, d) : (d = o(d, v.children || []), d.return = f, d);
  }
  function p(f, d, v, c, k) {
    return d === null || d.tag !== 7 ? (d = On(v, f.mode, c, k), d.return = f, d) : (d = o(d, v), d.return = f, d);
  }
  function m(f, d, v) {
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return d = ia("" + d, f.mode, v), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Uo:
          return v = gl(d.type, d.key, d.props, null, f.mode, v), v.ref = Ir(f, null, d), v.return = f, v;
        case Kn:
          return d = aa(d, f.mode, v), d.return = f, d;
        case qt:
          var c = d._init;
          return m(f, c(d._payload), v);
      }
      if (Wr(d) || Nr(d))
        return d = On(d, f.mode, v, null), d.return = f, d;
      Jo(f, d);
    }
    return null;
  }
  function h(f, d, v, c) {
    var k = d !== null ? d.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return k !== null ? null : a(f, d, "" + v, c);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Uo:
          return v.key === k ? u(f, d, v, c) : null;
        case Kn:
          return v.key === k ? s(f, d, v, c) : null;
        case qt:
          return k = v._init, h(
            f,
            d,
            k(v._payload),
            c
          );
      }
      if (Wr(v) || Nr(v))
        return k !== null ? null : p(f, d, v, c, null);
      Jo(f, v);
    }
    return null;
  }
  function g(f, d, v, c, k) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return f = f.get(v) || null, a(d, f, "" + c, k);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Uo:
          return f = f.get(c.key === null ? v : c.key) || null, u(d, f, c, k);
        case Kn:
          return f = f.get(c.key === null ? v : c.key) || null, s(d, f, c, k);
        case qt:
          var _ = c._init;
          return g(f, d, v, _(c._payload), k);
      }
      if (Wr(c) || Nr(c))
        return f = f.get(v) || null, p(d, f, c, k, null);
      Jo(d, c);
    }
    return null;
  }
  function y(f, d, v, c) {
    for (var k = null, _ = null, x = d, L = d = 0, F = null; x !== null && L < v.length; L++) {
      x.index > L ? (F = x, x = null) : F = x.sibling;
      var D = h(f, x, v[L], c);
      if (D === null) {
        x === null && (x = F);
        break;
      }
      e && x && D.alternate === null && t(f, x), d = l(D, d, L), _ === null ? k = D : _.sibling = D, _ = D, x = F;
    }
    if (L === v.length)
      return n(f, x), ue && Tn(f, L), k;
    if (x === null) {
      for (; L < v.length; L++)
        x = m(f, v[L], c), x !== null && (d = l(x, d, L), _ === null ? k = x : _.sibling = x, _ = x);
      return ue && Tn(f, L), k;
    }
    for (x = r(f, x); L < v.length; L++)
      F = g(x, f, L, v[L], c), F !== null && (e && F.alternate !== null && x.delete(F.key === null ? L : F.key), d = l(F, d, L), _ === null ? k = F : _.sibling = F, _ = F);
    return e && x.forEach(function(K) {
      return t(f, K);
    }), ue && Tn(f, L), k;
  }
  function w(f, d, v, c) {
    var k = Nr(v);
    if (typeof k != "function")
      throw Error(P(150));
    if (v = k.call(v), v == null)
      throw Error(P(151));
    for (var _ = k = null, x = d, L = d = 0, F = null, D = v.next(); x !== null && !D.done; L++, D = v.next()) {
      x.index > L ? (F = x, x = null) : F = x.sibling;
      var K = h(f, x, D.value, c);
      if (K === null) {
        x === null && (x = F);
        break;
      }
      e && x && K.alternate === null && t(f, x), d = l(K, d, L), _ === null ? k = K : _.sibling = K, _ = K, x = F;
    }
    if (D.done)
      return n(
        f,
        x
      ), ue && Tn(f, L), k;
    if (x === null) {
      for (; !D.done; L++, D = v.next())
        D = m(f, D.value, c), D !== null && (d = l(D, d, L), _ === null ? k = D : _.sibling = D, _ = D);
      return ue && Tn(f, L), k;
    }
    for (x = r(f, x); !D.done; L++, D = v.next())
      D = g(x, f, L, D.value, c), D !== null && (e && D.alternate !== null && x.delete(D.key === null ? L : D.key), d = l(D, d, L), _ === null ? k = D : _.sibling = D, _ = D);
    return e && x.forEach(function(q) {
      return t(f, q);
    }), ue && Tn(f, L), k;
  }
  function C(f, d, v, c) {
    if (typeof v == "object" && v !== null && v.type === Yn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Uo:
          e: {
            for (var k = v.key, _ = d; _ !== null; ) {
              if (_.key === k) {
                if (k = v.type, k === Yn) {
                  if (_.tag === 7) {
                    n(f, _.sibling), d = o(_, v.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (_.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qt && _c(k) === _.type) {
                  n(f, _.sibling), d = o(_, v.props), d.ref = Ir(f, _, v), d.return = f, f = d;
                  break e;
                }
                n(f, _);
                break;
              } else
                t(f, _);
              _ = _.sibling;
            }
            v.type === Yn ? (d = On(v.props.children, f.mode, c, v.key), d.return = f, f = d) : (c = gl(v.type, v.key, v.props, null, f.mode, c), c.ref = Ir(f, d, v), c.return = f, f = c);
          }
          return i(f);
        case Kn:
          e: {
            for (_ = v.key; d !== null; ) {
              if (d.key === _)
                if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                  n(f, d.sibling), d = o(d, v.children || []), d.return = f, f = d;
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else
                t(f, d);
              d = d.sibling;
            }
            d = aa(v, f.mode, c), d.return = f, f = d;
          }
          return i(f);
        case qt:
          return _ = v._init, C(f, d, _(v._payload), c);
      }
      if (Wr(v))
        return y(f, d, v, c);
      if (Nr(v))
        return w(f, d, v, c);
      Jo(f, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, d !== null && d.tag === 6 ? (n(f, d.sibling), d = o(d, v), d.return = f, f = d) : (n(f, d), d = ia(v, f.mode, c), d.return = f, f = d), i(f)) : n(f, d);
  }
  return C;
}
var vr = qd(!0), bd = qd(!1), Do = {}, Dt = wn(Do), xo = wn(Do), ko = wn(Do);
function Nn(e) {
  if (e === Do)
    throw Error(P(174));
  return e;
}
function es(e, t) {
  switch (le(ko, t), le(xo, e), le(Dt, Do), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _a(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _a(t, e);
  }
  ae(Dt), le(Dt, t);
}
function yr() {
  ae(Dt), ae(xo), ae(ko);
}
function ep(e) {
  Nn(ko.current);
  var t = Nn(Dt.current), n = _a(t, e.type);
  t !== n && (le(xo, e), le(Dt, n));
}
function ts(e) {
  xo.current === e && (ae(Dt), ae(xo));
}
var fe = wn(0);
function jl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ea = [];
function ns() {
  for (var e = 0; e < ea.length; e++)
    ea[e]._workInProgressVersionPrimary = null;
  ea.length = 0;
}
var pl = Kt.ReactCurrentDispatcher, ta = Kt.ReactCurrentBatchConfig, jn = 0, de = null, Pe = null, Ne = null, Al = !1, qr = !1, Co = 0, yv = 0;
function $e() {
  throw Error(P(321));
}
function rs(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tt(e[n], t[n]))
      return !1;
  return !0;
}
function os(e, t, n, r, o, l) {
  if (jn = l, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pl.current = e === null || e.memoizedState === null ? Ev : xv, e = n(r, o), qr) {
    l = 0;
    do {
      if (qr = !1, Co = 0, 25 <= l)
        throw Error(P(301));
      l += 1, Ne = Pe = null, t.updateQueue = null, pl.current = kv, e = n(r, o);
    } while (qr);
  }
  if (pl.current = Ul, t = Pe !== null && Pe.next !== null, jn = 0, Ne = Pe = de = null, Al = !1, t)
    throw Error(P(300));
  return e;
}
function ls() {
  var e = Co !== 0;
  return Co = 0, e;
}
function _t() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? de.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
}
function vt() {
  if (Pe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Pe.next;
  var t = Ne === null ? de.memoizedState : Ne.next;
  if (t !== null)
    Ne = t, Pe = e;
  else {
    if (e === null)
      throw Error(P(310));
    Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, Ne === null ? de.memoizedState = Ne = e : Ne = Ne.next = e;
  }
  return Ne;
}
function To(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function na(e) {
  var t = vt(), n = t.queue;
  if (n === null)
    throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Pe, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var a = i = null, u = null, s = l;
    do {
      var p = s.lane;
      if ((jn & p) === p)
        u !== null && (u = u.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var m = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (a = u = m, i = r) : u = u.next = m, de.lanes |= p, An |= p;
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? i = r : u.next = a, Tt(r, t.memoizedState) || (Ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, de.lanes |= l, An |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ra(e) {
  var t = vt(), n = t.queue;
  if (n === null)
    throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    Tt(l, t.memoizedState) || (Ge = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function tp() {
}
function np(e, t) {
  var n = de, r = vt(), o = t(), l = !Tt(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ge = !0), r = r.queue, is(lp.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || Ne !== null && Ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ro(9, op.bind(null, n, r, o, t), void 0, null), Me === null)
      throw Error(P(349));
    jn & 30 || rp(n, t, o);
  }
  return o;
}
function rp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function op(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ip(t) && ap(e);
}
function lp(e, t, n) {
  return n(function() {
    ip(t) && ap(e);
  });
}
function ip(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function ap(e) {
  var t = Ht(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Pc(e) {
  var t = _t();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: To, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sv.bind(null, de, e), [t.memoizedState, e];
}
function Ro(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function up() {
  return vt().memoizedState;
}
function hl(e, t, n, r) {
  var o = _t();
  de.flags |= e, o.memoizedState = Ro(1 | t, n, void 0, r === void 0 ? null : r);
}
function vi(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Pe !== null) {
    var i = Pe.memoizedState;
    if (l = i.destroy, r !== null && rs(r, i.deps)) {
      o.memoizedState = Ro(t, n, l, r);
      return;
    }
  }
  de.flags |= e, o.memoizedState = Ro(1 | t, n, l, r);
}
function Lc(e, t) {
  return hl(8390656, 8, e, t);
}
function is(e, t) {
  return vi(2048, 8, e, t);
}
function sp(e, t) {
  return vi(4, 2, e, t);
}
function cp(e, t) {
  return vi(4, 4, e, t);
}
function fp(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function dp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vi(4, 4, fp.bind(null, t, e), n);
}
function as() {
}
function pp(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function hp(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function mp(e, t, n) {
  return jn & 21 ? (Tt(n, t) || (n = gd(), de.lanes |= n, An |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ge = !0), e.memoizedState = n);
}
function gv(e, t) {
  var n = Z;
  Z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ta.transition;
  ta.transition = {};
  try {
    e(!1), t();
  } finally {
    Z = n, ta.transition = r;
  }
}
function vp() {
  return vt().memoizedState;
}
function wv(e, t, n) {
  var r = pn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, yp(e))
    gp(t, n);
  else if (n = Gd(e, t, n, r), n !== null) {
    var o = He();
    Ct(n, e, r, o), wp(n, t, r);
  }
}
function Sv(e, t, n) {
  var r = pn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yp(e))
    gp(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, a = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = a, Tt(a, i)) {
          var u = t.interleaved;
          u === null ? (o.next = o, qu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Gd(e, t, o, r), n !== null && (o = He(), Ct(n, e, r, o), wp(n, t, r));
  }
}
function yp(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function gp(e, t) {
  qr = Al = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ju(e, n);
  }
}
var Ul = { readContext: mt, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, Ev = { readContext: mt, useCallback: function(e, t) {
  return _t().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: mt, useEffect: Lc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hl(
    4194308,
    4,
    fp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return hl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return hl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = _t();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = _t();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wv.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = _t();
  return e = { current: e }, t.memoizedState = e;
}, useState: Pc, useDebugValue: as, useDeferredValue: function(e) {
  return _t().memoizedState = e;
}, useTransition: function() {
  var e = Pc(!1), t = e[0];
  return e = gv.bind(null, e[1]), _t().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, o = _t();
  if (ue) {
    if (n === void 0)
      throw Error(P(407));
    n = n();
  } else {
    if (n = t(), Me === null)
      throw Error(P(349));
    jn & 30 || rp(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Lc(lp.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Ro(9, op.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = _t(), t = Me.identifierPrefix;
  if (ue) {
    var n = Ut, r = At;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Co++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = yv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, xv = {
  readContext: mt,
  useCallback: pp,
  useContext: mt,
  useEffect: is,
  useImperativeHandle: dp,
  useInsertionEffect: sp,
  useLayoutEffect: cp,
  useMemo: hp,
  useReducer: na,
  useRef: up,
  useState: function() {
    return na(To);
  },
  useDebugValue: as,
  useDeferredValue: function(e) {
    var t = vt();
    return mp(t, Pe.memoizedState, e);
  },
  useTransition: function() {
    var e = na(To)[0], t = vt().memoizedState;
    return [e, t];
  },
  useMutableSource: tp,
  useSyncExternalStore: np,
  useId: vp,
  unstable_isNewReconciler: !1
}, kv = { readContext: mt, useCallback: pp, useContext: mt, useEffect: is, useImperativeHandle: dp, useInsertionEffect: sp, useLayoutEffect: cp, useMemo: hp, useReducer: ra, useRef: up, useState: function() {
  return ra(To);
}, useDebugValue: as, useDeferredValue: function(e) {
  var t = vt();
  return Pe === null ? t.memoizedState = e : mp(t, Pe.memoizedState, e);
}, useTransition: function() {
  var e = ra(To)[0], t = vt().memoizedState;
  return [e, t];
}, useMutableSource: tp, useSyncExternalStore: np, useId: vp, unstable_isNewReconciler: !1 };
function gr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Jm(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function oa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Za(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Cv = typeof WeakMap == "function" ? WeakMap : Map;
function Sp(e, t, n) {
  n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Vl || (Vl = !0, iu = r), Za(e, t);
  }, n;
}
function Ep(e, t, n) {
  n = Bt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Za(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Za(e, t), typeof r != "function" && (dn === null ? dn = /* @__PURE__ */ new Set([this]) : dn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Nc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cv();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = jv.bind(null, e, t, n), t.then(e, e));
}
function Mc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, fn(n, t, 1))), n.lanes |= 1), e);
}
var Tv = Kt.ReactCurrentOwner, Ge = !1;
function We(e, t, n, r) {
  t.child = e === null ? bd(t, null, n, r) : vr(t, e.child, n, r);
}
function Dc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return sr(t, o), r = os(e, t, n, r, l, o), n = ls(), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qt(e, t, o)) : (ue && n && Ku(t), t.flags |= 1, We(e, t, r, o), t.child);
}
function Oc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !ms(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, xp(e, t, l, r, o)) : (e = gl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : go, n(i, r) && e.ref === t.ref)
      return Qt(e, t, o);
  }
  return t.flags |= 1, e = hn(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function xp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (go(l, r) && e.ref === t.ref)
      if (Ge = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ge = !0);
      else
        return t.lanes = e.lanes, Qt(e, t, o);
  }
  return Ja(e, t, n, r, o);
}
function kp(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(rr, et), et |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(rr, et), et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, le(rr, et), et |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, le(rr, et), et |= r;
  return We(e, t, o, n), t.child;
}
function Cp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ja(e, t, n, r, o) {
  var l = Je(n) ? Fn : Be.current;
  return l = hr(t, l), sr(t, o), n = os(e, t, n, r, l, o), r = ls(), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Qt(e, t, o)) : (ue && r && Ku(t), t.flags |= 1, We(e, t, n, o), t.child);
}
function Ic(e, t, n, r, o) {
  if (Je(n)) {
    var l = !0;
    zl(t);
  } else
    l = !1;
  if (sr(t, o), t.stateNode === null)
    ml(e, t), Jd(t, n, r), Xa(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var u = i.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = mt(s) : (s = Je(n) ? Fn : Be.current, s = hr(t, s));
    var p = n.getDerivedStateFromProps, m = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== s) && Rc(t, i, r, s), bt = !1;
    var h = t.memoizedState;
    i.state = h, $l(t, r, i, o), u = t.memoizedState, a !== r || h !== u || Ze.current || bt ? (typeof p == "function" && (Ga(t, n, p, r), u = t.memoizedState), (a = bt || Tc(t, n, a, r, h, u, s)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Xd(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : wt(t.type, a), i.props = s, m = t.pendingProps, h = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = mt(u) : (u = Je(n) ? Fn : Be.current, u = hr(t, u));
    var g = n.getDerivedStateFromProps;
    (p = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== m || h !== u) && Rc(t, i, r, u), bt = !1, h = t.memoizedState, i.state = h, $l(t, r, i, o);
    var y = t.memoizedState;
    a !== m || h !== y || Ze.current || bt ? (typeof g == "function" && (Ga(t, n, g, r), y = t.memoizedState), (s = bt || Tc(t, n, s, r, h, y, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = s) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return qa(e, t, n, r, l, o);
}
function qa(e, t, n, r, o, l) {
  Cp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && Sc(t, n, !1), Qt(e, t, l);
  r = t.stateNode, Tv.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = vr(t, e.child, null, l), t.child = vr(t, null, a, l)) : We(e, t, a, l), t.memoizedState = r.state, o && Sc(t, n, !0), t.child;
}
function Tp(e) {
  var t = e.stateNode;
  t.pendingContext ? wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wc(e, t.context, !1), es(e, t.containerInfo);
}
function Fc(e, t, n, r, o) {
  return mr(), Gu(o), t.flags |= 256, We(e, t, n, r), t.child;
}
var ba = { dehydrated: null, treeContext: null, retryLane: 0 };
function eu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rp(e, t, n) {
  var r = t.pendingProps, o = fe.current, l = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), le(fe, o & 1), e === null)
    return Ka(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = wi(i, r, 0, null), e = On(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = eu(n), t.memoizedState = ba, e) : us(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null))
    return Rv(e, t, i, r, a, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = hn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? l = hn(a, l) : (l = On(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? eu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ba, r;
  }
  return l = e.child, e = l.sibling, r = hn(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function us(e, t) {
  return t = wi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qo(e, t, n, r) {
  return r !== null && Gu(r), vr(t, e.child, null, n), e = us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Rv(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = oa(Error(P(422))), qo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = wi({ mode: "visible", children: r.children }, o, 0, null), l = On(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && vr(t, e.child, null, i), t.child.memoizedState = eu(i), t.memoizedState = ba, l);
  if (!(t.mode & 1))
    return qo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var a = r.dgst;
    return r = a, l = Error(P(419)), r = oa(l, r, void 0), qo(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Ge || a) {
    if (r = Me, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Ht(e, o), Ct(r, e, o, -1));
    }
    return hs(), r = oa(Error(P(421))), qo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Av.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, tt = cn(o.nextSibling), rt = t, ue = !0, xt = null, e !== null && (ft[dt++] = At, ft[dt++] = Ut, ft[dt++] = $n, At = e.id, Ut = e.overflow, $n = t), t = us(t, r.children), t.flags |= 4096, t);
}
function $c(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ya(e.return, t, n);
}
function la(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function _p(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (We(e, t, r.children, n), r = fe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && $c(e, n, t);
          else if (e.tag === 19)
            $c(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (le(fe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && jl(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), la(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && jl(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        la(t, !0, n, null, l);
        break;
      case "together":
        la(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ml(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Qt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), An |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function _v(e, t, n) {
  switch (t.tag) {
    case 3:
      Tp(t), mr();
      break;
    case 5:
      ep(t);
      break;
    case 1:
      Je(t.type) && zl(t);
      break;
    case 4:
      es(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      le(Il, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (le(fe, fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Rp(e, t, n) : (le(fe, fe.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return _p(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), le(fe, fe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, kp(e, t, n);
  }
  return Qt(e, t, n);
}
var Pp, tu, Lp, Np;
Pp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
tu = function() {
};
Lp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Nn(Dt.current);
    var l = null;
    switch (n) {
      case "input":
        o = ka(e, o), r = ka(e, r), l = [];
        break;
      case "select":
        o = pe({}, o, { value: void 0 }), r = pe({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Ra(e, o), r = Ra(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl);
    }
    Pa(n, r);
    var i;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var a = o[s];
          for (i in a)
            a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (co.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (a = o != null ? o[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in u)
              u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
          } else
            n || (l || (l = []), l.push(
              s,
              n
            )), n = u;
        else
          s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (l = l || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (co.hasOwnProperty(s) ? (u != null && s === "onScroll" && ie("scroll", e), l || a === u || (l = [])) : (l = l || []).push(s, u));
    }
    n && (l = l || []).push("style", n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Np = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fr(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Pv(e, t, n) {
  var r = t.pendingProps;
  switch (Yu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Je(t.type) && Ml(), je(t), null;
    case 3:
      return r = t.stateNode, yr(), ae(Ze), ae(Be), ns(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (su(xt), xt = null))), tu(e, t), je(t), null;
    case 5:
      ts(t);
      var o = Nn(ko.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Lp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(P(166));
          return je(t), null;
        }
        if (e = Nn(Dt.current), Zo(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[Nt] = t, r[Eo] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Qr.length; o++)
                ie(Qr[o], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie(
                "error",
                r
              ), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Ks(r, l), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, ie("invalid", r);
              break;
            case "textarea":
              Gs(r, l), ie("invalid", r);
          }
          Pa(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children" ? typeof a == "string" ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && Xo(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Xo(
                r.textContent,
                a,
                e
              ), o = ["children", "" + a]) : co.hasOwnProperty(i) && a != null && i === "onScroll" && ie("scroll", r);
            }
          switch (n) {
            case "input":
              Bo(r), Ys(r, l, !0);
              break;
            case "textarea":
              Bo(r), Xs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Nl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Nt] = t, e[Eo] = r, Pp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = La(n, r), n) {
              case "dialog":
                ie("cancel", e), ie("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Qr.length; o++)
                  ie(Qr[o], e);
                o = r;
                break;
              case "source":
                ie("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  e
                ), ie("load", e), o = r;
                break;
              case "details":
                ie("toggle", e), o = r;
                break;
              case "input":
                Ks(e, r), o = ka(e, r), ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = pe({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                Gs(e, r), o = Ra(e, r), ie("invalid", e);
                break;
              default:
                o = r;
            }
            Pa(n, o), a = o;
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var u = a[l];
                l === "style" ? id(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && od(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && fo(e, u) : typeof u == "number" && fo(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (co.hasOwnProperty(l) ? u != null && l === "onScroll" && ie("scroll", e) : u != null && zu(e, l, u, i));
              }
            switch (n) {
              case "input":
                Bo(e), Ys(e, r, !1);
                break;
              case "textarea":
                Bo(e), Xs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? lr(e, !!r.multiple, l, !1) : r.defaultValue != null && lr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Nl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null)
        Np(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(P(166));
        if (n = Nn(ko.current), Nn(Dt.current), Zo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (l = r.nodeValue !== n) && (e = rt, e !== null))
            switch (e.tag) {
              case 3:
                Xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (ae(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ue && tt !== null && t.mode & 1 && !(t.flags & 128))
          Yd(), mr(), t.flags |= 98560, l = !1;
        else if (l = Zo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(P(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(P(317));
            l[Nt] = t;
          } else
            mr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), l = !1;
        } else
          xt !== null && (su(xt), xt = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || fe.current & 1 ? Le === 0 && (Le = 3) : hs())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return yr(), tu(e, t), e === null && wo(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Ju(t.type._context), je(t), null;
    case 17:
      return Je(t.type) && Ml(), je(t), null;
    case 19:
      if (ae(fe), l = t.memoizedState, l === null)
        return je(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          Fr(l, !1);
        else {
          if (Le !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = jl(e), i !== null) {
                for (t.flags |= 128, Fr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return le(fe, fe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && Ee() > wr && (t.flags |= 128, r = !0, Fr(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = jl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Fr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ue)
              return je(t), null;
          } else
            2 * Ee() - l.renderingStartTime > wr && n !== 1073741824 && (t.flags |= 128, r = !0, Fr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Ee(), t.sibling = null, n = fe.current, le(fe, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? et & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Lv(e, t) {
  switch (Yu(t), t.tag) {
    case 1:
      return Je(t.type) && Ml(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yr(), ae(Ze), ae(Be), ns(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ts(t), null;
    case 13:
      if (ae(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(P(340));
        mr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(fe), null;
    case 4:
      return yr(), null;
    case 10:
      return Ju(t.type._context), null;
    case 22:
    case 23:
      return ps(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bo = !1, Ue = !1, Nv = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else
      n.current = null;
}
function nu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var jc = !1;
function Mv(e, t) {
  if (Aa = _l, e = Od(), Qu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, a = -1, u = -1, s = 0, p = 0, m = e, h = null;
          t:
            for (; ; ) {
              for (var g; m !== n || o !== 0 && m.nodeType !== 3 || (a = i + o), m !== l || r !== 0 && m.nodeType !== 3 || (u = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
                h = m, m = g;
              for (; ; ) {
                if (m === e)
                  break t;
                if (h === n && ++s === o && (a = i), h === l && ++p === r && (u = i), (g = m.nextSibling) !== null)
                  break;
                m = h, h = m.parentNode;
              }
              m = g;
            }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ua = { focusedElem: e, selectionRange: n }, _l = !1, z = t; z !== null; )
    if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, z = e;
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps, C = y.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : wt(t.type, w), C);
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (c) {
          me(t, t.return, c);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, z = e;
          break;
        }
        z = t.return;
      }
  return y = jc, jc = !1, y;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && nu(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yi(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ru(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Mp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Mp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Eo], delete t[Wa], delete t[pv], delete t[hv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ac(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zp(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; )
      ou(e, t, n), e = e.sibling;
}
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; )
      lu(e, t, n), e = e.sibling;
}
var De = null, St = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; )
    Dp(e, t, n), n = n.sibling;
}
function Dp(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function")
    try {
      zt.onCommitFiberUnmount(si, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ue || nr(n, t);
    case 6:
      var r = De, o = St;
      De = null, Zt(e, t, n), De = r, St = o, De !== null && (St ? (e = De, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null && (St ? (e = De, n = n.stateNode, e.nodeType === 8 ? qi(e.parentNode, n) : e.nodeType === 1 && qi(e, n), vo(e)) : qi(De, n.stateNode));
      break;
    case 4:
      r = De, o = St, De = n.stateNode.containerInfo, St = !0, Zt(e, t, n), De = r, St = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && nu(n, t, i), o = o.next;
        } while (o !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!Ue && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Zt(e, t, n), Ue = r) : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nv()), t.forEach(function(r) {
      var o = Uv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, i = t, a = i;
        e:
          for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                De = a.stateNode, St = !1;
                break e;
              case 3:
                De = a.stateNode.containerInfo, St = !0;
                break e;
              case 4:
                De = a.stateNode.containerInfo, St = !0;
                break e;
            }
            a = a.return;
          }
        if (De === null)
          throw Error(P(160));
        Dp(l, i, o), De = null, St = !1;
        var u = o.alternate;
        u !== null && (u.return = null), o.return = null;
      } catch (s) {
        me(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Op(t, e), t = t.sibling;
}
function Op(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Rt(e), r & 4) {
        try {
          br(3, e, e.return), yi(3, e);
        } catch (w) {
          me(e, e.return, w);
        }
        try {
          br(5, e, e.return);
        } catch (w) {
          me(e, e.return, w);
        }
      }
      break;
    case 1:
      gt(t, e), Rt(e), r & 512 && n !== null && nr(n, n.return);
      break;
    case 5:
      if (gt(t, e), Rt(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          fo(o, "");
        } catch (w) {
          me(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null)
          try {
            a === "input" && l.type === "radio" && l.name != null && td(o, l), La(a, i);
            var s = La(a, l);
            for (i = 0; i < u.length; i += 2) {
              var p = u[i], m = u[i + 1];
              p === "style" ? id(o, m) : p === "dangerouslySetInnerHTML" ? od(o, m) : p === "children" ? fo(o, m) : zu(o, p, m, s);
            }
            switch (a) {
              case "input":
                Ca(o, l);
                break;
              case "textarea":
                nd(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null ? lr(o, !!l.multiple, g, !1) : h !== !!l.multiple && (l.defaultValue != null ? lr(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : lr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Eo] = l;
          } catch (w) {
            me(e, e.return, w);
          }
      }
      break;
    case 6:
      if (gt(t, e), Rt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(P(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (w) {
          me(e, e.return, w);
        }
      }
      break;
    case 3:
      if (gt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          vo(t.containerInfo);
        } catch (w) {
          me(e, e.return, w);
        }
      break;
    case 4:
      gt(t, e), Rt(e);
      break;
    case 13:
      gt(t, e), Rt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (fs = Ee())), r & 4 && Uc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (s = Ue) || p, gt(t, e), Ue = s) : gt(t, e), Rt(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !p && e.mode & 1)
          for (z = e, p = e.child; p !== null; ) {
            for (m = z = p; z !== null; ) {
              switch (h = z, g = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  br(4, h, h.return);
                  break;
                case 1:
                  nr(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (w) {
                      me(r, n, w);
                    }
                  }
                  break;
                case 5:
                  nr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Vc(m);
                    continue;
                  }
              }
              g !== null ? (g.return = h, z = g) : Vc(m);
            }
            p = p.sibling;
          }
        e:
          for (p = null, m = e; ; ) {
            if (m.tag === 5) {
              if (p === null) {
                p = m;
                try {
                  o = m.stateNode, s ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = m.stateNode, u = m.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = ld("display", i));
                } catch (w) {
                  me(e, e.return, w);
                }
              }
            } else if (m.tag === 6) {
              if (p === null)
                try {
                  m.stateNode.nodeValue = s ? "" : m.memoizedProps;
                } catch (w) {
                  me(e, e.return, w);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e)
                break e;
              p === m && (p = null), m = m.return;
            }
            p === m && (p = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      gt(t, e), Rt(e), r & 4 && Uc(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (fo(o, ""), r.flags &= -33);
          var l = Ac(e);
          lu(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Ac(e);
          ou(e, a, i);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zv(e, t, n) {
  z = e, Ip(e);
}
function Ip(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || bo;
      if (!i) {
        var a = o.alternate, u = a !== null && a.memoizedState !== null || Ue;
        a = bo;
        var s = Ue;
        if (bo = i, (Ue = u) && !s)
          for (z = o; z !== null; )
            i = z, u = i.child, i.tag === 22 && i.memoizedState !== null ? Wc(o) : u !== null ? (u.return = i, z = u) : Wc(o);
        for (; l !== null; )
          z = l, Ip(l), l = l.sibling;
        z = o, bo = a, Ue = s;
      }
      Bc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, z = l) : Bc(e);
  }
}
function Bc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || yi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && Cc(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && vo(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Ue || t.flags & 512 && ru(t);
      } catch (h) {
        me(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function Vc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function Wc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yi(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, o, u);
            }
          }
          var l = t.return;
          try {
            ru(t);
          } catch (u) {
            me(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ru(t);
          } catch (u) {
            me(t, i, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, z = a;
      break;
    }
    z = t.return;
  }
}
var Dv = Math.ceil, Bl = Kt.ReactCurrentDispatcher, ss = Kt.ReactCurrentOwner, ht = Kt.ReactCurrentBatchConfig, Q = 0, Me = null, Te = null, Ie = 0, et = 0, rr = wn(0), Le = 0, _o = null, An = 0, gi = 0, cs = 0, eo = null, Ye = null, fs = 0, wr = 1 / 0, $t = null, Vl = !1, iu = null, dn = null, el = !1, rn = null, Wl = 0, to = 0, au = null, vl = -1, yl = 0;
function He() {
  return Q & 6 ? Ee() : vl !== -1 ? vl : vl = Ee();
}
function pn(e) {
  return e.mode & 1 ? Q & 2 && Ie !== 0 ? Ie & -Ie : vv.transition !== null ? (yl === 0 && (yl = gd()), yl) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Td(e.type)), e) : 1;
}
function Ct(e, t, n, r) {
  if (50 < to)
    throw to = 0, au = null, Error(P(185));
  No(e, n, r), (!(Q & 2) || e !== Me) && (e === Me && (!(Q & 2) && (gi |= n), Le === 4 && tn(e, Ie)), qe(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (wr = Ee() + 500, hi && Sn()));
}
function qe(e, t) {
  var n = e.callbackNode;
  v0(e, t);
  var r = Rl(e, e === Me ? Ie : 0);
  if (r === 0)
    n !== null && qs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && qs(n), t === 1)
      e.tag === 0 ? mv(Hc.bind(null, e)) : Hd(Hc.bind(null, e)), fv(function() {
        !(Q & 6) && Sn();
      }), n = null;
    else {
      switch (wd(r)) {
        case 1:
          n = $u;
          break;
        case 4:
          n = vd;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = yd;
          break;
        default:
          n = Tl;
      }
      n = Wp(n, Fp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Fp(e, t) {
  if (vl = -1, yl = 0, Q & 6)
    throw Error(P(327));
  var n = e.callbackNode;
  if (cr() && e.callbackNode !== n)
    return null;
  var r = Rl(e, e === Me ? Ie : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Hl(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var l = jp();
    (Me !== e || Ie !== t) && ($t = null, wr = Ee() + 500, Dn(e, t));
    do
      try {
        Fv();
        break;
      } catch (a) {
        $p(e, a);
      }
    while (1);
    Zu(), Bl.current = l, Q = o, Te !== null ? t = 0 : (Me = null, Ie = 0, t = Le);
  }
  if (t !== 0) {
    if (t === 2 && (o = Oa(e), o !== 0 && (r = o, t = uu(e, o))), t === 1)
      throw n = _o, Dn(e, 0), tn(e, r), qe(e, Ee()), n;
    if (t === 6)
      tn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ov(o) && (t = Hl(e, r), t === 2 && (l = Oa(e), l !== 0 && (r = l, t = uu(e, l))), t === 1))
        throw n = _o, Dn(e, 0), tn(e, r), qe(e, Ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Rn(e, Ye, $t);
          break;
        case 3:
          if (tn(e, r), (r & 130023424) === r && (t = fs + 500 - Ee(), 10 < t)) {
            if (Rl(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              He(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Va(Rn.bind(null, e, Ye, $t), t);
            break;
          }
          Rn(e, Ye, $t);
          break;
        case 4:
          if (tn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - kt(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Dv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Va(Rn.bind(null, e, Ye, $t), r);
            break;
          }
          Rn(e, Ye, $t);
          break;
        case 5:
          Rn(e, Ye, $t);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return qe(e, Ee()), e.callbackNode === n ? Fp.bind(null, e) : null;
}
function uu(e, t) {
  var n = eo;
  return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = Hl(e, t), e !== 2 && (t = Ye, Ye = n, t !== null && su(t)), e;
}
function su(e) {
  Ye === null ? Ye = e : Ye.push.apply(Ye, e);
}
function Ov(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!Tt(l(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function tn(e, t) {
  for (t &= ~cs, t &= ~gi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Hc(e) {
  if (Q & 6)
    throw Error(P(327));
  cr();
  var t = Rl(e, 0);
  if (!(t & 1))
    return qe(e, Ee()), null;
  var n = Hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oa(e);
    r !== 0 && (t = r, n = uu(e, r));
  }
  if (n === 1)
    throw n = _o, Dn(e, 0), tn(e, t), qe(e, Ee()), n;
  if (n === 6)
    throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rn(e, Ye, $t), qe(e, Ee()), null;
}
function ds(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (wr = Ee() + 500, hi && Sn());
  }
}
function Un(e) {
  rn !== null && rn.tag === 0 && !(Q & 6) && cr();
  var t = Q;
  Q |= 1;
  var n = ht.transition, r = Z;
  try {
    if (ht.transition = null, Z = 1, e)
      return e();
  } finally {
    Z = r, ht.transition = n, Q = t, !(Q & 6) && Sn();
  }
}
function ps() {
  et = rr.current, ae(rr);
}
function Dn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cv(n)), Te !== null)
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch (Yu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ml();
          break;
        case 3:
          yr(), ae(Ze), ae(Be), ns();
          break;
        case 5:
          ts(r);
          break;
        case 4:
          yr();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          Ju(r.type._context);
          break;
        case 22:
        case 23:
          ps();
      }
      n = n.return;
    }
  if (Me = e, Te = e = hn(e.current, null), Ie = et = t, Le = 0, _o = null, cs = gi = An = 0, Ye = eo = null, Ln !== null) {
    for (t = 0; t < Ln.length; t++)
      if (n = Ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    Ln = null;
  }
  return e;
}
function $p(e, t) {
  do {
    var n = Te;
    try {
      if (Zu(), pl.current = Ul, Al) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Al = !1;
      }
      if (jn = 0, Ne = Pe = de = null, qr = !1, Co = 0, ss.current = null, n === null || n.return === null) {
        Le = 1, _o = t, Te = null;
        break;
      }
      e: {
        var l = e, i = n.return, a = n, u = t;
        if (t = Ie, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var s = u, p = a, m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var g = Mc(i);
          if (g !== null) {
            g.flags &= -257, zc(g, i, a, l, t), g.mode & 1 && Nc(l, s, t), t = g, u = s;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(u), t.updateQueue = w;
            } else
              y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Nc(l, s, t), hs();
              break e;
            }
            u = Error(P(426));
          }
        } else if (ue && a.mode & 1) {
          var C = Mc(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), zc(C, i, a, l, t), Gu(gr(u, a));
            break e;
          }
        }
        l = u = gr(u, a), Le !== 4 && (Le = 2), eo === null ? eo = [l] : eo.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = Sp(l, u, t);
              kc(l, f);
              break e;
            case 1:
              a = u;
              var d = l.type, v = l.stateNode;
              if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (dn === null || !dn.has(v)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var c = Ep(l, a, t);
                kc(l, c);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Up(n);
    } catch (k) {
      t = k, Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function jp() {
  var e = Bl.current;
  return Bl.current = Ul, e === null ? Ul : e;
}
function hs() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), Me === null || !(An & 268435455) && !(gi & 268435455) || tn(Me, Ie);
}
function Hl(e, t) {
  var n = Q;
  Q |= 2;
  var r = jp();
  (Me !== e || Ie !== t) && ($t = null, Dn(e, t));
  do
    try {
      Iv();
      break;
    } catch (o) {
      $p(e, o);
    }
  while (1);
  if (Zu(), Q = n, Bl.current = r, Te !== null)
    throw Error(P(261));
  return Me = null, Ie = 0, Le;
}
function Iv() {
  for (; Te !== null; )
    Ap(Te);
}
function Fv() {
  for (; Te !== null && !a0(); )
    Ap(Te);
}
function Ap(e) {
  var t = Vp(e.alternate, e, et);
  e.memoizedProps = e.pendingProps, t === null ? Up(e) : Te = t, ss.current = null;
}
function Up(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Lv(n, t), n !== null) {
        n.flags &= 32767, Te = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Le = 6, Te = null;
        return;
      }
    } else if (n = Pv(n, t, et), n !== null) {
      Te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function Rn(e, t, n) {
  var r = Z, o = ht.transition;
  try {
    ht.transition = null, Z = 1, $v(e, t, n, r);
  } finally {
    ht.transition = o, Z = r;
  }
  return null;
}
function $v(e, t, n, r) {
  do
    cr();
  while (rn !== null);
  if (Q & 6)
    throw Error(P(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (y0(e, l), e === Me && (Te = Me = null, Ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || el || (el = !0, Wp(Tl, function() {
    return cr(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = ht.transition, ht.transition = null;
    var i = Z;
    Z = 1;
    var a = Q;
    Q |= 4, ss.current = null, Mv(e, n), Op(n, e), rv(Ua), _l = !!Aa, Ua = Aa = null, e.current = n, zv(n), u0(), Q = a, Z = i, ht.transition = l;
  } else
    e.current = n;
  if (el && (el = !1, rn = e, Wl = o), l = e.pendingLanes, l === 0 && (dn = null), f0(n.stateNode), qe(e, Ee()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vl)
    throw Vl = !1, e = iu, iu = null, e;
  return Wl & 1 && e.tag !== 0 && cr(), l = e.pendingLanes, l & 1 ? e === au ? to++ : (to = 0, au = e) : to = 0, Sn(), null;
}
function cr() {
  if (rn !== null) {
    var e = wd(Wl), t = ht.transition, n = Z;
    try {
      if (ht.transition = null, Z = 16 > e ? 16 : e, rn === null)
        var r = !1;
      else {
        if (e = rn, rn = null, Wl = 0, Q & 6)
          throw Error(P(331));
        var o = Q;
        for (Q |= 4, z = e.current; z !== null; ) {
          var l = z, i = l.child;
          if (z.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var p = z;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, p, l);
                  }
                  var m = p.child;
                  if (m !== null)
                    m.return = p, z = m;
                  else
                    for (; z !== null; ) {
                      p = z;
                      var h = p.sibling, g = p.return;
                      if (Mp(p), p === s) {
                        z = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = g, z = h;
                        break;
                      }
                      z = g;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var C = w.sibling;
                    w.sibling = null, w = C;
                  } while (w !== null);
                }
              }
              z = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, z = i;
          else
            e:
              for (; z !== null; ) {
                if (l = z, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, z = f;
                  break e;
                }
                z = l.return;
              }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          i = z;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null)
            v.return = i, z = v;
          else
            e:
              for (i = d; z !== null; ) {
                if (a = z, a.flags & 2048)
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yi(9, a);
                    }
                  } catch (k) {
                    me(a, a.return, k);
                  }
                if (a === i) {
                  z = null;
                  break e;
                }
                var c = a.sibling;
                if (c !== null) {
                  c.return = a.return, z = c;
                  break e;
                }
                z = a.return;
              }
        }
        if (Q = o, Sn(), zt && typeof zt.onPostCommitFiberRoot == "function")
          try {
            zt.onPostCommitFiberRoot(si, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      Z = n, ht.transition = t;
    }
  }
  return !1;
}
function Qc(e, t, n) {
  t = gr(n, t), t = Sp(e, t, 1), e = fn(e, t, 1), t = He(), e !== null && (No(e, 1, t), qe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3)
    Qc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
          e = gr(n, e), e = Ep(t, e, 1), t = fn(t, e, 1), e = He(), t !== null && (No(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = He(), e.pingedLanes |= e.suspendedLanes & n, Me === e && (Ie & n) === n && (Le === 4 || Le === 3 && (Ie & 130023424) === Ie && 500 > Ee() - fs ? Dn(e, 0) : cs |= n), qe(e, t);
}
function Bp(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ho, Ho <<= 1, !(Ho & 130023424) && (Ho = 4194304)) : t = 1);
  var n = He();
  e = Ht(e, t), e !== null && (No(e, t, n), qe(e, n));
}
function Av(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Bp(e, n);
}
function Uv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Bp(e, n);
}
var Vp;
Vp = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current)
      Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ge = !1, _v(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else
    Ge = !1, ue && t.flags & 1048576 && Qd(t, Ol, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ml(e, t), e = t.pendingProps;
      var o = hr(t, Be.current);
      sr(t, n), o = os(null, t, r, e, o, n);
      var l = ls();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (l = !0, zl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, bu(t), o.updater = mi, t.stateNode = o, o._reactInternals = t, Xa(t, r, e, n), t = qa(null, t, r, !0, l, n)) : (t.tag = 0, ue && l && Ku(t), We(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ml(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Vv(r), e = wt(r, e), o) {
          case 0:
            t = Ja(null, t, r, e, n);
            break e;
          case 1:
            t = Ic(null, t, r, e, n);
            break e;
          case 11:
            t = Dc(null, t, r, e, n);
            break e;
          case 14:
            t = Oc(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wt(r, o), Ja(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wt(r, o), Ic(e, t, r, o, n);
    case 3:
      e: {
        if (Tp(t), e === null)
          throw Error(P(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Xd(e, t), $l(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = gr(Error(P(423)), t), t = Fc(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = gr(Error(P(424)), t), t = Fc(e, t, r, n, o);
            break e;
          } else
            for (tt = cn(t.stateNode.containerInfo.firstChild), rt = t, ue = !0, xt = null, n = bd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mr(), r === o) {
            t = Qt(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ep(t), e === null && Ka(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Ba(r, o) ? i = null : l !== null && Ba(r, l) && (t.flags |= 32), Cp(e, t), We(e, t, i, n), t.child;
    case 6:
      return e === null && Ka(t), null;
    case 13:
      return Rp(e, t, n);
    case 4:
      return es(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vr(t, null, r, n) : We(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wt(r, o), Dc(e, t, r, o, n);
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, le(Il, r._currentValue), r._currentValue = i, l !== null)
          if (Tt(l.value, i)) {
            if (l.children === o.children && !Ze.current) {
              t = Qt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      u = Bt(-1, n & -n), u.tag = 2;
                      var s = l.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null ? u.next = u : (u.next = p.next, p.next = u), s.pending = u;
                      }
                    }
                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ya(
                      l.return,
                      n,
                      t
                    ), a.lanes |= n;
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10)
                i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (i = l.return, i === null)
                  throw Error(P(341));
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ya(i, n, t), i = l.sibling;
              } else
                i = l.child;
              if (i !== null)
                i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (l = i.sibling, l !== null) {
                    l.return = i.return, i = l;
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        We(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, sr(t, n), o = mt(o), r = r(o), t.flags |= 1, We(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = wt(r, t.pendingProps), o = wt(r.type, o), Oc(e, t, r, o, n);
    case 15:
      return xp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : wt(r, o), ml(e, t), t.tag = 1, Je(r) ? (e = !0, zl(t)) : e = !1, sr(t, n), Jd(t, r, o), Xa(t, r, o, n), qa(null, t, r, !0, e, n);
    case 19:
      return _p(e, t, n);
    case 22:
      return kp(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Wp(e, t) {
  return md(e, t);
}
function Bv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function pt(e, t, n, r) {
  return new Bv(e, t, n, r);
}
function ms(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Vv(e) {
  if (typeof e == "function")
    return ms(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ou)
      return 11;
    if (e === Iu)
      return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return n === null ? (n = pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function gl(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    ms(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Yn:
          return On(n.children, o, l, t);
        case Du:
          i = 8, o |= 8;
          break;
        case wa:
          return e = pt(12, n, t, o | 2), e.elementType = wa, e.lanes = l, e;
        case Sa:
          return e = pt(13, n, t, o), e.elementType = Sa, e.lanes = l, e;
        case Ea:
          return e = pt(19, n, t, o), e.elementType = Ea, e.lanes = l, e;
        case qf:
          return wi(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Zf:
                i = 10;
                break e;
              case Jf:
                i = 9;
                break e;
              case Ou:
                i = 11;
                break e;
              case Iu:
                i = 14;
                break e;
              case qt:
                i = 16, r = null;
                break e;
            }
          throw Error(P(130, e == null ? e : typeof e, ""));
      }
  return t = pt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function On(e, t, n, r) {
  return e = pt(7, e, r, t), e.lanes = n, e;
}
function wi(e, t, n, r) {
  return e = pt(22, e, r, t), e.elementType = qf, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ia(e, t, n) {
  return e = pt(6, e, null, t), e.lanes = n, e;
}
function aa(e, t, n) {
  return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wv(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bi(0), this.expirationTimes = Bi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function vs(e, t, n, r, o, l, i, a, u) {
  return e = new Wv(e, t, n, a, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = pt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bu(l), e;
}
function Hv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Hp(e) {
  if (!e)
    return vn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1)
      throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n))
      return Wd(e, n, t);
  }
  return t;
}
function Qp(e, t, n, r, o, l, i, a, u) {
  return e = vs(n, r, !0, e, o, l, i, a, u), e.context = Hp(null), n = e.current, r = He(), o = pn(n), l = Bt(r, o), l.callback = t ?? null, fn(n, l, o), e.current.lanes = o, No(e, o, r), qe(e, r), e;
}
function Si(e, t, n, r) {
  var o = t.current, l = He(), i = pn(o);
  return n = Hp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = fn(o, t, i), e !== null && (Ct(e, o, i, l), dl(e, o, i)), i;
}
function Ql(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ys(e, t) {
  Kc(e, t), (e = e.alternate) && Kc(e, t);
}
function Qv() {
  return null;
}
var Kp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function gs(e) {
  this._internalRoot = e;
}
Ei.prototype.render = gs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(P(409));
  Si(e, t, null, null);
};
Ei.prototype.unmount = gs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function() {
      Si(null, e, null, null);
    }), t[Wt] = null;
  }
};
function Ei(e) {
  this._internalRoot = e;
}
Ei.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++)
      ;
    en.splice(n, 0, e), n === 0 && Cd(e);
  }
};
function ws(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Yc() {
}
function Kv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var s = Ql(i);
        l.call(s);
      };
    }
    var i = Qp(t, r, e, 0, null, !1, !1, "", Yc);
    return e._reactRootContainer = i, e[Wt] = i.current, wo(e.nodeType === 8 ? e.parentNode : e), Un(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var s = Ql(u);
      a.call(s);
    };
  }
  var u = vs(e, 0, !1, null, null, !1, !1, "", Yc);
  return e._reactRootContainer = u, e[Wt] = u.current, wo(e.nodeType === 8 ? e.parentNode : e), Un(function() {
    Si(t, u, n, r);
  }), u;
}
function ki(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var u = Ql(i);
        a.call(u);
      };
    }
    Si(t, i, e, o);
  } else
    i = Kv(n, t, e, o, r);
  return Ql(i);
}
Sd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 && (ju(t, n | 1), qe(t, Ee()), !(Q & 6) && (wr = Ee() + 500, Sn()));
      }
      break;
    case 13:
      Un(function() {
        var r = Ht(e, 1);
        if (r !== null) {
          var o = He();
          Ct(r, e, 1, o);
        }
      }), ys(e, 1);
  }
};
Au = function(e) {
  if (e.tag === 13) {
    var t = Ht(e, 134217728);
    if (t !== null) {
      var n = He();
      Ct(t, e, 134217728, n);
    }
    ys(e, 134217728);
  }
};
Ed = function(e) {
  if (e.tag === 13) {
    var t = pn(e), n = Ht(e, t);
    if (n !== null) {
      var r = He();
      Ct(n, e, t, r);
    }
    ys(e, t);
  }
};
xd = function() {
  return Z;
};
kd = function(e, t) {
  var n = Z;
  try {
    return Z = e, t();
  } finally {
    Z = n;
  }
};
Ma = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ca(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pi(r);
            if (!o)
              throw Error(P(90));
            ed(r), Ca(r, o);
          }
        }
      }
      break;
    case "textarea":
      nd(e, n);
      break;
    case "select":
      t = n.value, t != null && lr(e, !!n.multiple, t, !1);
  }
};
sd = ds;
cd = Un;
var Yv = { usingClientEntryPoint: !1, Events: [zo, Jn, pi, ad, ud, ds] }, $r = { findFiberByHostInstance: Pn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Gv = { bundleType: $r.bundleType, version: $r.version, rendererPackageName: $r.rendererPackageName, rendererConfig: $r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Kt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = pd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: $r.findFiberByHostInstance || Qv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      si = tl.inject(Gv), zt = tl;
    } catch {
    }
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yv;
it.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ws(t))
    throw Error(P(200));
  return Hv(e, t, null, n);
};
it.createRoot = function(e, t) {
  if (!ws(e))
    throw Error(P(299));
  var n = !1, r = "", o = Kp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = vs(e, 1, !1, null, null, n, !1, r, o), e[Wt] = t.current, wo(e.nodeType === 8 ? e.parentNode : e), new gs(t);
};
it.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = pd(t), e = e === null ? null : e.stateNode, e;
};
it.flushSync = function(e) {
  return Un(e);
};
it.hydrate = function(e, t, n) {
  if (!xi(t))
    throw Error(P(200));
  return ki(null, e, t, !0, n);
};
it.hydrateRoot = function(e, t, n) {
  if (!ws(e))
    throw Error(P(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Kp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Qp(t, null, e, 1, n ?? null, o, !1, l, i), e[Wt] = t.current, wo(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Ei(t);
};
it.render = function(e, t, n) {
  if (!xi(t))
    throw Error(P(200));
  return ki(null, e, t, !1, n);
};
it.unmountComponentAtNode = function(e) {
  if (!xi(e))
    throw Error(P(40));
  return e._reactRootContainer ? (Un(function() {
    ki(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Wt] = null;
    });
  }), !0) : !1;
};
it.unstable_batchedUpdates = ds;
it.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xi(n))
    throw Error(P(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(P(38));
  return ki(e, t, n, !1, r);
};
it.version = "18.2.0-next-9e3b772b8-20220608";
function Yp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp);
    } catch (e) {
      console.error(e);
    }
}
Yp(), Qf.exports = it;
var Gp = Qf.exports;
const Eg = /* @__PURE__ */ hf(Gp);
var Gc = Gp;
El.createRoot = Gc.createRoot, El.hydrateRoot = Gc.hydrateRoot;
var Xv = /* @__PURE__ */ Bf(function(e, t) {
  var n = e.styles, r = Lu([n], void 0, T.useContext(Vf)), o = T.useRef();
  return Vs(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", l), i.hydrate([u])), o.current = [i, a], function() {
      i.flush();
    };
  }, [t]), Vs(function() {
    var l = o.current, i = l[0], a = l[1];
    if (a) {
      l[1] = !1;
      return;
    }
    if (r.next !== void 0 && $f(t, r.next, !0), i.tags.length) {
      var u = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = u, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
});
function Zv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Lu(t);
}
function Xp(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Xp(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function on() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Xp(e)) && (r && (r += " "), r += t);
  return r;
}
const no = (e) => typeof e == "number" && !isNaN(e), Bn = (e) => typeof e == "string", Xe = (e) => typeof e == "function", wl = (e) => Bn(e) || Xe(e) ? e : null, ua = (e) => T.isValidElement(e) || Bn(e) || Xe(e) || no(e);
function Jv(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    o.minHeight = "initial", o.height = r + "px", o.transition = `all ${n}ms`, requestAnimationFrame(() => {
      o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, n);
    });
  });
}
function Ci(e) {
  let { enter: t, exit: n, appendPosition: r = !1, collapse: o = !0, collapseDuration: l = 300 } = e;
  return function(i) {
    let { children: a, position: u, preventExitTransition: s, done: p, nodeRef: m, isIn: h } = i;
    const g = r ? `${t}--${u}` : t, y = r ? `${n}--${u}` : n, w = T.useRef(0);
    return T.useLayoutEffect(() => {
      const C = m.current, f = g.split(" "), d = (v) => {
        v.target === m.current && (C.dispatchEvent(new Event("d")), C.removeEventListener("animationend", d), C.removeEventListener("animationcancel", d), w.current === 0 && v.type !== "animationcancel" && C.classList.remove(...f));
      };
      C.classList.add(...f), C.addEventListener("animationend", d), C.addEventListener("animationcancel", d);
    }, []), T.useEffect(() => {
      const C = m.current, f = () => {
        C.removeEventListener("animationend", f), o ? Jv(C, p, l) : p();
      };
      h || (s ? f() : (w.current = 1, C.className += ` ${y}`, C.addEventListener("animationend", f)));
    }, [h]), re.createElement(re.Fragment, null, a);
  };
}
function Xc(e, t) {
  return e != null ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: t } : {};
}
const ct = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(e, t) {
  return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
}, off(e, t) {
  if (t) {
    const n = this.list.get(e).filter((r) => r !== t);
    return this.list.set(e, n), this;
  }
  return this.list.delete(e), this;
}, cancelEmit(e) {
  const t = this.emitQueue.get(e);
  return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
}, emit(e) {
  this.list.has(e) && this.list.get(e).forEach((t) => {
    const n = setTimeout(() => {
      t(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n);
  });
} }, nl = (e) => {
  let { theme: t, type: n, ...r } = e;
  return re.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`, ...r });
}, sa = { info: function(e) {
  return re.createElement(nl, { ...e }, re.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return re.createElement(nl, { ...e }, re.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return re.createElement(nl, { ...e }, re.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return re.createElement(nl, { ...e }, re.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return re.createElement("div", { className: "Toastify__spinner" });
} };
function qv(e) {
  const [, t] = T.useReducer((g) => g + 1, 0), [n, r] = T.useState([]), o = T.useRef(null), l = T.useRef(/* @__PURE__ */ new Map()).current, i = (g) => n.indexOf(g) !== -1, a = T.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: i, getToast: (g) => l.get(g) }).current;
  function u(g) {
    let { containerId: y } = g;
    const { limit: w } = a.props;
    !w || y && a.containerId !== y || (a.count -= a.queue.length, a.queue = []);
  }
  function s(g) {
    r((y) => g == null ? [] : y.filter((w) => w !== g));
  }
  function p() {
    const { toastContent: g, toastProps: y, staleId: w } = a.queue.shift();
    h(g, y, w);
  }
  function m(g, y) {
    let { delay: w, staleId: C, ...f } = y;
    if (!ua(g) || function(q) {
      return !o.current || a.props.enableMultiContainer && q.containerId !== a.props.containerId || l.has(q.toastId) && q.updateId == null;
    }(f))
      return;
    const { toastId: d, updateId: v, data: c } = f, { props: k } = a, _ = () => s(d), x = v == null;
    x && a.count++;
    const L = { ...k, style: k.toastStyle, key: a.toastKey++, ...Object.fromEntries(Object.entries(f).filter((q) => {
      let [xe, ve] = q;
      return ve != null;
    })), toastId: d, updateId: v, data: c, closeToast: _, isIn: !1, className: wl(f.className || k.toastClassName), bodyClassName: wl(f.bodyClassName || k.bodyClassName), progressClassName: wl(f.progressClassName || k.progressClassName), autoClose: !f.isLoading && (F = f.autoClose, D = k.autoClose, F === !1 || no(F) && F > 0 ? F : D), deleteToast() {
      const q = Xc(l.get(d), "removed");
      l.delete(d), ct.emit(4, q);
      const xe = a.queue.length;
      if (a.count = d == null ? a.count - a.displayedToast : a.count - 1, a.count < 0 && (a.count = 0), xe > 0) {
        const ve = d == null ? a.props.limit : 1;
        if (xe === 1 || ve === 1)
          a.displayedToast++, p();
        else {
          const X = ve > xe ? xe : ve;
          a.displayedToast = X;
          for (let he = 0; he < X; he++)
            p();
        }
      } else
        t();
    } };
    var F, D;
    L.iconOut = function(q) {
      let { theme: xe, type: ve, isLoading: X, icon: he } = q, Re = null;
      const N = { theme: xe, type: ve };
      return he === !1 || (Xe(he) ? Re = he(N) : T.isValidElement(he) ? Re = T.cloneElement(he, N) : Bn(he) || no(he) ? Re = he : X ? Re = sa.spinner() : ((O) => O in sa)(ve) && (Re = sa[ve](N))), Re;
    }(L), Xe(f.onOpen) && (L.onOpen = f.onOpen), Xe(f.onClose) && (L.onClose = f.onClose), L.closeButton = k.closeButton, f.closeButton === !1 || ua(f.closeButton) ? L.closeButton = f.closeButton : f.closeButton === !0 && (L.closeButton = !ua(k.closeButton) || k.closeButton);
    let K = g;
    T.isValidElement(g) && !Bn(g.type) ? K = T.cloneElement(g, { closeToast: _, toastProps: L, data: c }) : Xe(g) && (K = g({ closeToast: _, toastProps: L, data: c })), k.limit && k.limit > 0 && a.count > k.limit && x ? a.queue.push({ toastContent: K, toastProps: L, staleId: C }) : no(w) ? setTimeout(() => {
      h(K, L, C);
    }, w) : h(K, L, C);
  }
  function h(g, y, w) {
    const { toastId: C } = y;
    w && l.delete(w);
    const f = { content: g, props: y };
    l.set(C, f), r((d) => [...d, C].filter((v) => v !== w)), ct.emit(4, Xc(f, f.props.updateId == null ? "added" : "updated"));
  }
  return T.useEffect(() => (a.containerId = e.containerId, ct.cancelEmit(3).on(0, m).on(1, (g) => o.current && s(g)).on(5, u).emit(2, a), () => {
    l.clear(), ct.emit(3, a);
  }), []), T.useEffect(() => {
    a.props = e, a.isToastActive = i, a.displayedToast = n.length;
  }), { getToastToRender: function(g) {
    const y = /* @__PURE__ */ new Map(), w = Array.from(l.values());
    return e.newestOnTop && w.reverse(), w.forEach((C) => {
      const { position: f } = C.props;
      y.has(f) || y.set(f, []), y.get(f).push(C);
    }), Array.from(y, (C) => g(C[0], C[1]));
  }, containerRef: o, isToastActive: i };
}
function Zc(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function Jc(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function bv(e) {
  const [t, n] = T.useState(!1), [r, o] = T.useState(!1), l = T.useRef(null), i = T.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, a = T.useRef(e), { autoClose: u, pauseOnHover: s, closeToast: p, onClick: m, closeOnClick: h } = e;
  function g(c) {
    if (e.draggable) {
      c.nativeEvent.type === "touchstart" && c.nativeEvent.preventDefault(), i.didMove = !1, document.addEventListener("mousemove", f), document.addEventListener("mouseup", d), document.addEventListener("touchmove", f), document.addEventListener("touchend", d);
      const k = l.current;
      i.canCloseOnClick = !0, i.canDrag = !0, i.boundingRect = k.getBoundingClientRect(), k.style.transition = "", i.x = Zc(c.nativeEvent), i.y = Jc(c.nativeEvent), e.draggableDirection === "x" ? (i.start = i.x, i.removalDistance = k.offsetWidth * (e.draggablePercent / 100)) : (i.start = i.y, i.removalDistance = k.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function y(c) {
    if (i.boundingRect) {
      const { top: k, bottom: _, left: x, right: L } = i.boundingRect;
      c.nativeEvent.type !== "touchend" && e.pauseOnHover && i.x >= x && i.x <= L && i.y >= k && i.y <= _ ? C() : w();
    }
  }
  function w() {
    n(!0);
  }
  function C() {
    n(!1);
  }
  function f(c) {
    const k = l.current;
    i.canDrag && k && (i.didMove = !0, t && C(), i.x = Zc(c), i.y = Jc(c), i.delta = e.draggableDirection === "x" ? i.x - i.start : i.y - i.start, i.start !== i.x && (i.canCloseOnClick = !1), k.style.transform = `translate${e.draggableDirection}(${i.delta}px)`, k.style.opacity = "" + (1 - Math.abs(i.delta / i.removalDistance)));
  }
  function d() {
    document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", d), document.removeEventListener("touchmove", f), document.removeEventListener("touchend", d);
    const c = l.current;
    if (i.canDrag && i.didMove && c) {
      if (i.canDrag = !1, Math.abs(i.delta) > i.removalDistance)
        return o(!0), void e.closeToast();
      c.style.transition = "transform 0.2s, opacity 0.2s", c.style.transform = `translate${e.draggableDirection}(0)`, c.style.opacity = "1";
    }
  }
  T.useEffect(() => {
    a.current = e;
  }), T.useEffect(() => (l.current && l.current.addEventListener("d", w, { once: !0 }), Xe(e.onOpen) && e.onOpen(T.isValidElement(e.children) && e.children.props), () => {
    const c = a.current;
    Xe(c.onClose) && c.onClose(T.isValidElement(c.children) && c.children.props);
  }), []), T.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || C(), window.addEventListener("focus", w), window.addEventListener("blur", C)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", w), window.removeEventListener("blur", C));
  }), [e.pauseOnFocusLoss]);
  const v = { onMouseDown: g, onTouchStart: g, onMouseUp: y, onTouchEnd: y };
  return u && s && (v.onMouseEnter = C, v.onMouseLeave = w), h && (v.onClick = (c) => {
    m && m(c), i.canCloseOnClick && p();
  }), { playToast: w, pauseToast: C, isRunning: t, preventExitTransition: r, toastRef: l, eventHandlers: v };
}
function Zp(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return re.createElement("button", { className: `Toastify__close-button Toastify__close-button--${n}`, type: "button", onClick: (o) => {
    o.stopPropagation(), t(o);
  }, "aria-label": r }, re.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, re.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function ey(e) {
  let { delay: t, isRunning: n, closeToast: r, type: o = "default", hide: l, className: i, style: a, controlledProgress: u, progress: s, rtl: p, isIn: m, theme: h } = e;
  const g = l || u && s === 0, y = { ...a, animationDuration: `${t}ms`, animationPlayState: n ? "running" : "paused", opacity: g ? 0 : 1 };
  u && (y.transform = `scaleX(${s})`);
  const w = on("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${h}`, `Toastify__progress-bar--${o}`, { "Toastify__progress-bar--rtl": p }), C = Xe(i) ? i({ rtl: p, type: o, defaultClassName: w }) : on(w, i);
  return re.createElement("div", { role: "progressbar", "aria-hidden": g ? "true" : "false", "aria-label": "notification timer", className: C, style: y, [u && s >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && s < 1 ? null : () => {
    m && r();
  } });
}
const ty = (e) => {
  const { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: o } = bv(e), { closeButton: l, children: i, autoClose: a, onClick: u, type: s, hideProgressBar: p, closeToast: m, transition: h, position: g, className: y, style: w, bodyClassName: C, bodyStyle: f, progressClassName: d, progressStyle: v, updateId: c, role: k, progress: _, rtl: x, toastId: L, deleteToast: F, isIn: D, isLoading: K, iconOut: q, closeOnClick: xe, theme: ve } = e, X = on("Toastify__toast", `Toastify__toast-theme--${ve}`, `Toastify__toast--${s}`, { "Toastify__toast--rtl": x }, { "Toastify__toast--close-on-click": xe }), he = Xe(y) ? y({ rtl: x, position: g, type: s, defaultClassName: X }) : on(X, y), Re = !!_ || !a, N = { closeToast: m, type: s, theme: ve };
  let O = null;
  return l === !1 || (O = Xe(l) ? l(N) : T.isValidElement(l) ? T.cloneElement(l, N) : Zp(N)), re.createElement(h, { isIn: D, done: F, position: g, preventExitTransition: n, nodeRef: r }, re.createElement("div", { id: L, onClick: u, className: he, ...o, style: w, ref: r }, re.createElement("div", { ...D && { role: k }, className: Xe(C) ? C({ type: s }) : on("Toastify__toast-body", C), style: f }, q != null && re.createElement("div", { className: on("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !K }) }, q), re.createElement("div", null, i)), O, re.createElement(ey, { ...c && !Re ? { key: `pb-${c}` } : {}, rtl: x, theme: ve, delay: a, isRunning: t, isIn: D, closeToast: m, hide: p, type: s, style: v, className: d, controlledProgress: Re, progress: _ || 0 })));
}, Ti = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, ny = Ci(Ti("bounce", !0));
Ci(Ti("slide", !0));
Ci(Ti("zoom"));
Ci(Ti("flip"));
const cu = T.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: o } = qv(e), { className: l, style: i, rtl: a, containerId: u } = e;
  function s(p) {
    const m = on("Toastify__toast-container", `Toastify__toast-container--${p}`, { "Toastify__toast-container--rtl": a });
    return Xe(l) ? l({ position: p, rtl: a, defaultClassName: m }) : on(m, wl(l));
  }
  return T.useEffect(() => {
    t && (t.current = r.current);
  }, []), re.createElement("div", { ref: r, className: "Toastify", id: u }, n((p, m) => {
    const h = m.length ? { ...i } : { ...i, pointerEvents: "none" };
    return re.createElement("div", { className: s(p), style: h, key: `container-${p}` }, m.map((g, y) => {
      let { content: w, props: C } = g;
      return re.createElement(ty, { ...C, isIn: o(C.toastId), style: { ...C.style, "--nth": y + 1, "--len": m.length }, key: `toast-${C.key}` }, w);
    }));
  }));
});
cu.displayName = "ToastContainer", cu.defaultProps = { position: "top-right", transition: ny, autoClose: 5e3, closeButton: Zp, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let ca, _n = /* @__PURE__ */ new Map(), Kr = [], ry = 1;
function Jp() {
  return "" + ry++;
}
function oy(e) {
  return e && (Bn(e.toastId) || no(e.toastId)) ? e.toastId : Jp();
}
function ro(e, t) {
  return _n.size > 0 ? ct.emit(0, e, t) : Kr.push({ content: e, options: t }), t.toastId;
}
function Kl(e, t) {
  return { ...t, type: t && t.type || e, toastId: oy(t) };
}
function rl(e) {
  return (t, n) => ro(t, Kl(e, n));
}
function ce(e, t) {
  return ro(e, Kl("default", t));
}
ce.loading = (e, t) => ro(e, Kl("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), ce.promise = function(e, t, n) {
  let r, { pending: o, error: l, success: i } = t;
  o && (r = Bn(o) ? ce.loading(o, n) : ce.loading(o.render, { ...n, ...o }));
  const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, u = (p, m, h) => {
    if (m == null)
      return void ce.dismiss(r);
    const g = { type: p, ...a, ...n, data: h }, y = Bn(m) ? { render: m } : m;
    return r ? ce.update(r, { ...g, ...y }) : ce(y.render, { ...g, ...y }), h;
  }, s = Xe(e) ? e() : e;
  return s.then((p) => u("success", i, p)).catch((p) => u("error", l, p)), s;
}, ce.success = rl("success"), ce.info = rl("info"), ce.error = rl("error"), ce.warning = rl("warning"), ce.warn = ce.warning, ce.dark = (e, t) => ro(e, Kl("default", { theme: "dark", ...t })), ce.dismiss = (e) => {
  _n.size > 0 ? ct.emit(1, e) : Kr = Kr.filter((t) => e != null && t.options.toastId !== e);
}, ce.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), ct.emit(5, e);
}, ce.isActive = (e) => {
  let t = !1;
  return _n.forEach((n) => {
    n.isToastActive && n.isToastActive(e) && (t = !0);
  }), t;
}, ce.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const n = function(r, o) {
      let { containerId: l } = o;
      const i = _n.get(l || ca);
      return i && i.getToast(r);
    }(e, t);
    if (n) {
      const { props: r, content: o } = n, l = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Jp() };
      l.toastId !== e && (l.staleId = e);
      const i = l.render || o;
      delete l.render, ro(i, l);
    }
  }, 0);
}, ce.done = (e) => {
  ce.update(e, { progress: 1 });
}, ce.onChange = (e) => (ct.on(4, e), () => {
  ct.off(4, e);
}), ce.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, ce.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, ct.on(2, (e) => {
  ca = e.containerId || e, _n.set(ca, e), Kr.forEach((t) => {
    ct.emit(0, t.content, t.options);
  }), Kr = [];
}).on(3, (e) => {
  _n.delete(e.containerId || e), _n.size === 0 && ct.off(0).off(1).off(5);
});
const ly = () => /* @__PURE__ */ ln(Xv, { styles: Zv`*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-via-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-to-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}
::before, ::after {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:  normal;
  font-variation-settings:  normal;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b, strong {
  font-weight: bolder;
}
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
dialog {
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button, [role="button"] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}
img, video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-via-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-to-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}` }), iy = () => /* @__PURE__ */ Qm(Hm, { children: [
  /* @__PURE__ */ ln(ly, {}),
  /* @__PURE__ */ ln(cu, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Se() {
  return Se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Se.apply(this, arguments);
}
var ge;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ge || (ge = {}));
function ay(e) {
  e === void 0 && (e = {});
  let {
    initialEntries: t = ["/"],
    initialIndex: n,
    v5Compat: r = !1
  } = e, o;
  o = t.map((g, y) => p(g, typeof g == "string" ? null : g.state, y === 0 ? "default" : void 0));
  let l = u(n ?? o.length - 1), i = ge.Pop, a = null;
  function u(g) {
    return Math.min(Math.max(g, 0), o.length - 1);
  }
  function s() {
    return o[l];
  }
  function p(g, y, w) {
    y === void 0 && (y = null);
    let C = fu(o ? s().pathname : "/", g, y, w);
    return yn(C.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(g)), C;
  }
  function m(g) {
    return typeof g == "string" ? g : Ri(g);
  }
  return {
    get index() {
      return l;
    },
    get action() {
      return i;
    },
    get location() {
      return s();
    },
    createHref: m,
    createURL(g) {
      return new URL(m(g), "http://localhost");
    },
    encodeLocation(g) {
      let y = typeof g == "string" ? Ot(g) : g;
      return {
        pathname: y.pathname || "",
        search: y.search || "",
        hash: y.hash || ""
      };
    },
    push(g, y) {
      i = ge.Push;
      let w = p(g, y);
      l += 1, o.splice(l, o.length, w), r && a && a({
        action: i,
        location: w,
        delta: 1
      });
    },
    replace(g, y) {
      i = ge.Replace;
      let w = p(g, y);
      o[l] = w, r && a && a({
        action: i,
        location: w,
        delta: 0
      });
    },
    go(g) {
      i = ge.Pop;
      let y = u(l + g), w = o[y];
      l = y, a && a({
        action: i,
        location: w,
        delta: g
      });
    },
    listen(g) {
      return a = g, () => {
        a = null;
      };
    }
  };
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function yn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function uy() {
  return Math.random().toString(36).substr(2, 8);
}
function fu(e, t, n, r) {
  return n === void 0 && (n = null), Se({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Ot(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || uy()
  });
}
function Ri(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Ot(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var we;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(we || (we = {}));
const sy = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function cy(e) {
  return e.index === !0;
}
function du(e, t, n, r) {
  return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((o, l) => {
    let i = [...n, l], a = typeof o.id == "string" ? o.id : i.join("-");
    if (V(o.index !== !0 || !o.children, "Cannot specify children on an index route"), V(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), cy(o)) {
      let u = Se({}, o, t(o), {
        id: a
      });
      return r[a] = u, u;
    } else {
      let u = Se({}, o, t(o), {
        id: a,
        children: void 0
      });
      return r[a] = u, o.children && (u.children = du(o.children, t, i, r)), u;
    }
  });
}
function Mn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ot(t) : t, o = Oo(r.pathname || "/", n);
  if (o == null)
    return null;
  let l = qp(e);
  dy(l);
  let i = null;
  for (let a = 0; i == null && a < l.length; ++a)
    i = Ey(
      l[a],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Cy(o)
    );
  return i;
}
function fy(e, t) {
  let {
    route: n,
    pathname: r,
    params: o
  } = e;
  return {
    id: n.id,
    pathname: r,
    params: o,
    data: t[n.id],
    handle: n.handle
  };
}
function qp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, a) => {
    let u = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l
    };
    u.relativePath.startsWith("/") && (V(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
    let s = In([r, u.relativePath]), p = n.concat(u);
    l.children && l.children.length > 0 && (V(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')
    ), qp(l.children, t, p, s)), !(l.path == null && !l.index) && t.push({
      path: s,
      score: wy(s, l.index),
      routesMeta: p
    });
  };
  return e.forEach((l, i) => {
    var a;
    if (l.path === "" || !((a = l.path) != null && a.includes("?")))
      o(l, i);
    else
      for (let u of bp(l.path))
        o(l, i, u);
  }), t;
}
function bp(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [n, ...r] = t, o = n.endsWith("?"), l = n.replace(/\?$/, "");
  if (r.length === 0)
    return o ? [l, ""] : [l];
  let i = bp(r.join("/")), a = [];
  return a.push(...i.map((u) => u === "" ? l : [l, u].join("/"))), o && a.push(...i), a.map((u) => e.startsWith("/") && u === "" ? "/" : u);
}
function dy(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Sy(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const py = /^:\w+$/, hy = 3, my = 2, vy = 1, yy = 10, gy = -2, qc = (e) => e === "*";
function wy(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(qc) && (r += gy), t && (r += my), n.filter((o) => !qc(o)).reduce((o, l) => o + (py.test(l) ? hy : l === "" ? vy : yy), r);
}
function Sy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ey(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, o = "/", l = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i], u = i === n.length - 1, s = o === "/" ? t : t.slice(o.length) || "/", p = xy({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: u
    }, s);
    if (!p)
      return null;
    Object.assign(r, p.params);
    let m = a.route;
    l.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: In([o, p.pathname]),
      pathnameBase: Ly(In([o, p.pathnameBase])),
      route: m
    }), p.pathnameBase !== "/" && (o = In([o, p.pathnameBase]));
  }
  return l;
}
function xy(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = ky(e.path, e.caseSensitive, e.end), o = t.match(n);
  if (!o)
    return null;
  let l = o[0], i = l.replace(/(.)\/+$/, "$1"), a = o.slice(1);
  return {
    params: r.reduce((s, p, m) => {
      let {
        paramName: h,
        isOptional: g
      } = p;
      if (h === "*") {
        let w = a[m] || "";
        i = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[m];
      return g && !y ? s[h] = void 0 : s[h] = Ty(y || "", h), s;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e
  };
}
function ky(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), yn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (i, a, u) => (r.push({
    paramName: a,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r];
}
function Cy(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return yn(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Ty(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return yn(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function Oo(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ry(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = ""
  } = typeof e == "string" ? Ot(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : _y(n, t) : t,
    search: Ny(r),
    hash: My(o)
  };
}
function _y(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
  }), n.length > 1 ? n.join("/") : "/";
}
function fa(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function eh(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Py(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string" ? o = Ot(e) : (o = Se({}, e), V(!o.pathname || !o.pathname.includes("?"), fa("?", "pathname", "search", o)), V(!o.pathname || !o.pathname.includes("#"), fa("#", "pathname", "hash", o)), V(!o.search || !o.search.includes("#"), fa("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "", i = l ? "/" : o.pathname, a;
  if (r || i == null)
    a = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; )
        h.shift(), m -= 1;
      o.pathname = h.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let u = Ry(o, a), s = i && i !== "/" && i.endsWith("/"), p = (l || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || p) && (u.pathname += "/"), u;
}
const In = (e) => e.join("/").replace(/\/\/+/g, "/"), Ly = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Ny = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, My = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class th {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1), this.status = t, this.statusText = n || "", this.internal = o, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
}
function nh(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const rh = ["post", "put", "patch", "delete"], zy = new Set(rh), Dy = ["get", ...rh], Oy = new Set(Dy), Iy = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Fy = /* @__PURE__ */ new Set([307, 308]), da = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, $y = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, jr = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, jy = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), lh = "remix-router-transitions";
function Ay(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u", r = !n;
  V(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let o;
  if (e.mapRouteProperties)
    o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    o = (E) => ({
      hasErrorBoundary: S(E)
    });
  } else
    o = jy;
  let l = {}, i = du(e.routes, o, void 0, l), a, u = e.basename || "/", s = Se({
    v7_fetcherPersist: !1,
    v7_normalizeFormMethod: !1,
    v7_prependBasename: !1
  }, e.future), p = null, m = /* @__PURE__ */ new Set(), h = null, g = null, y = null, w = e.hydrationData != null, C = Mn(i, e.history.location, u), f = null;
  if (C == null) {
    let S = st(404, {
      pathname: e.history.location.pathname
    }), {
      matches: E,
      route: R
    } = af(i);
    C = E, f = {
      [R.id]: S
    };
  }
  let d = (
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    !C.some((S) => S.route.lazy) && // And we have to either have no loaders or have been provided hydrationData
    (!C.some((S) => S.route.loader) || e.hydrationData != null)
  ), v, c = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: C,
    initialized: d,
    navigation: da,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || f,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, k = ge.Pop, _ = !1, x, L = !1, F = /* @__PURE__ */ new Map(), D = null, K = !1, q = !1, xe = [], ve = [], X = /* @__PURE__ */ new Map(), he = 0, Re = -1, N = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), ut = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), En = !1;
  function It() {
    if (p = e.history.listen((S) => {
      let {
        action: E,
        location: R,
        delta: M
      } = S;
      if (En) {
        En = !1;
        return;
      }
      yn(Ve.size === 0 || M != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let $ = Ls({
        currentLocation: c.location,
        nextLocation: R,
        historyAction: E
      });
      if ($ && M != null) {
        En = !0, e.history.go(M * -1), Fo($, {
          state: "blocked",
          location: R,
          proceed() {
            Fo($, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: R
            }), e.history.go(M);
          },
          reset() {
            let j = new Map(c.blockers);
            j.set($, jr), ke({
              blockers: j
            });
          }
        });
        return;
      }
      return xn(E, R);
    }), n) {
      Zy(t, F);
      let S = () => Jy(t, F);
      t.addEventListener("pagehide", S), D = () => t.removeEventListener("pagehide", S);
    }
    return c.initialized || xn(ge.Pop, c.location), v;
  }
  function Hn() {
    p && p(), D && D(), m.clear(), x && x.abort(), c.fetchers.forEach((S, E) => Io(E)), c.blockers.forEach((S, E) => Ps(E));
  }
  function hh(S) {
    return m.add(S), () => m.delete(S);
  }
  function ke(S, E) {
    c = Se({}, c, S);
    let R = [], M = [];
    s.v7_fetcherPersist && c.fetchers.forEach(($, j) => {
      $.state === "idle" && (oe.has(j) ? M.push(j) : R.push(j));
    }), m.forEach(($) => $(c, {
      deletedFetchers: M,
      unstable_viewTransitionOpts: E
    })), s.v7_fetcherPersist && (R.forEach(($) => c.fetchers.delete($)), M.forEach(($) => Io($)));
  }
  function Cr(S, E) {
    var R, M;
    let $ = c.actionData != null && c.navigation.formMethod != null && Et(c.navigation.formMethod) && c.navigation.state === "loading" && ((R = S.state) == null ? void 0 : R._isRedirect) !== !0, j;
    E.actionData ? Object.keys(E.actionData).length > 0 ? j = E.actionData : j = null : $ ? j = c.actionData : j = null;
    let B = E.loaderData ? lf(c.loaderData, E.loaderData, E.matches || [], E.errors) : c.loaderData, A = c.blockers;
    A.size > 0 && (A = new Map(A), A.forEach((se, H) => A.set(H, jr)));
    let I = _ === !0 || c.navigation.formMethod != null && Et(c.navigation.formMethod) && ((M = S.state) == null ? void 0 : M._isRedirect) !== !0;
    a && (i = a, a = void 0), K || k === ge.Pop || (k === ge.Push ? e.history.push(S, S.state) : k === ge.Replace && e.history.replace(S, S.state));
    let te;
    if (k === ge.Pop) {
      let se = F.get(c.location.pathname);
      se && se.has(S.pathname) ? te = {
        currentLocation: c.location,
        nextLocation: S
      } : F.has(S.pathname) && (te = {
        currentLocation: S,
        nextLocation: c.location
      });
    } else if (L) {
      let se = F.get(c.location.pathname);
      se ? se.add(S.pathname) : (se = /* @__PURE__ */ new Set([S.pathname]), F.set(c.location.pathname, se)), te = {
        currentLocation: c.location,
        nextLocation: S
      };
    }
    ke(Se({}, E, {
      actionData: j,
      loaderData: B,
      historyAction: k,
      location: S,
      initialized: !0,
      navigation: da,
      revalidation: "idle",
      restoreScrollPosition: Ms(S, E.matches || c.matches),
      preventScrollReset: I,
      blockers: A
    }), te), k = ge.Pop, _ = !1, L = !1, K = !1, q = !1, xe = [], ve = [];
  }
  async function xs(S, E) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let R = pu(c.location, c.matches, u, s.v7_prependBasename, S, E == null ? void 0 : E.fromRouteId, E == null ? void 0 : E.relative), {
      path: M,
      submission: $,
      error: j
    } = bc(s.v7_normalizeFormMethod, !1, R, E), B = c.location, A = fu(c.location, M, E && E.state);
    A = Se({}, A, e.history.encodeLocation(A));
    let I = E && E.replace != null ? E.replace : void 0, te = ge.Push;
    I === !0 ? te = ge.Replace : I === !1 || $ != null && Et($.formMethod) && $.formAction === c.location.pathname + c.location.search && (te = ge.Replace);
    let se = E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0, H = Ls({
      currentLocation: B,
      nextLocation: A,
      historyAction: te
    });
    if (H) {
      Fo(H, {
        state: "blocked",
        location: A,
        proceed() {
          Fo(H, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A
          }), xs(S, E);
        },
        reset() {
          let ne = new Map(c.blockers);
          ne.set(H, jr), ke({
            blockers: ne
          });
        }
      });
      return;
    }
    return await xn(te, A, {
      submission: $,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: j,
      preventScrollReset: se,
      replace: E && E.replace,
      enableViewTransition: E && E.unstable_viewTransition
    });
  }
  function mh() {
    if (Li(), ke({
      revalidation: "loading"
    }), c.navigation.state !== "submitting") {
      if (c.navigation.state === "idle") {
        xn(c.historyAction, c.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      xn(k || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation
      });
    }
  }
  async function xn(S, E, R) {
    x && x.abort(), x = null, k = S, K = (R && R.startUninterruptedRevalidation) === !0, Ch(c.location, c.matches), _ = (R && R.preventScrollReset) === !0, L = (R && R.enableViewTransition) === !0;
    let M = a || i, $ = R && R.overrideNavigation, j = Mn(M, E, u);
    if (!j) {
      let ne = st(404, {
        pathname: E.pathname
      }), {
        matches: _e,
        route: kn
      } = af(M);
      Ni(), Cr(E, {
        matches: _e,
        loaderData: {},
        errors: {
          [kn.id]: ne
        }
      });
      return;
    }
    if (c.initialized && !q && Hy(c.location, E) && !(R && R.submission && Et(R.submission.formMethod))) {
      Cr(E, {
        matches: j
      });
      return;
    }
    x = new AbortController();
    let B = Ur(e.history, E, x.signal, R && R.submission), A, I;
    if (R && R.pendingError)
      I = {
        [oo(j).route.id]: R.pendingError
      };
    else if (R && R.submission && Et(R.submission.formMethod)) {
      let ne = await vh(B, E, R.submission, j, {
        replace: R.replace
      });
      if (ne.shortCircuited)
        return;
      A = ne.pendingActionData, I = ne.pendingActionError, $ = pa(E, R.submission), B = new Request(B.url, {
        signal: B.signal
      });
    }
    let {
      shortCircuited: te,
      loaderData: se,
      errors: H
    } = await yh(B, E, j, $, R && R.submission, R && R.fetcherSubmission, R && R.replace, A, I);
    te || (x = null, Cr(E, Se({
      matches: j
    }, A ? {
      actionData: A
    } : {}, {
      loaderData: se,
      errors: H
    })));
  }
  async function vh(S, E, R, M, $) {
    $ === void 0 && ($ = {}), Li();
    let j = Gy(E, R);
    ke({
      navigation: j
    });
    let B, A = mu(M, E);
    if (!A.route.action && !A.route.lazy)
      B = {
        type: we.error,
        error: st(405, {
          method: S.method,
          pathname: E.pathname,
          routeId: A.route.id
        })
      };
    else if (B = await Ar("action", S, A, M, l, o, u), S.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (fr(B)) {
      let I;
      return $ && $.replace != null ? I = $.replace : I = B.location === c.location.pathname + c.location.search, await Tr(c, B, {
        submission: R,
        replace: I
      }), {
        shortCircuited: !0
      };
    }
    if (lo(B)) {
      let I = oo(M, A.route.id);
      return ($ && $.replace) !== !0 && (k = ge.Push), {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [I.route.id]: B.error
        }
      };
    }
    if (zn(B))
      throw st(400, {
        type: "defer-action"
      });
    return {
      pendingActionData: {
        [A.route.id]: B.data
      }
    };
  }
  async function yh(S, E, R, M, $, j, B, A, I) {
    let te = M || pa(E, $), se = $ || j || cf(te), H = a || i, [ne, _e] = ef(e.history, c, R, se, E, q, xe, ve, U, O, H, u, A, I);
    if (Ni((b) => !(R && R.some((yt) => yt.route.id === b)) || ne && ne.some((yt) => yt.route.id === b)), Re = ++he, ne.length === 0 && _e.length === 0) {
      let b = Rs();
      return Cr(E, Se({
        matches: R,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: I || null
      }, A ? {
        actionData: A
      } : {}, b ? {
        fetchers: new Map(c.fetchers)
      } : {})), {
        shortCircuited: !0
      };
    }
    if (!K) {
      _e.forEach((yt) => {
        let Xt = c.fetchers.get(yt.key), ye = Br(void 0, Xt ? Xt.data : void 0);
        c.fetchers.set(yt.key, ye);
      });
      let b = A || c.actionData;
      ke(Se({
        navigation: te
      }, b ? Object.keys(b).length === 0 ? {
        actionData: null
      } : {
        actionData: b
      } : {}, _e.length > 0 ? {
        fetchers: new Map(c.fetchers)
      } : {}));
    }
    _e.forEach((b) => {
      X.has(b.key) && Yt(b.key), b.controller && X.set(b.key, b.controller);
    });
    let kn = () => _e.forEach((b) => Yt(b.key));
    x && x.signal.addEventListener("abort", kn);
    let {
      results: Cn,
      loaderResults: _r,
      fetcherResults: Mi
    } = await Cs(c.matches, R, ne, _e, S);
    if (S.signal.aborted)
      return {
        shortCircuited: !0
      };
    x && x.signal.removeEventListener("abort", kn), _e.forEach((b) => X.delete(b.key));
    let Ft = uf(Cn);
    if (Ft) {
      if (Ft.idx >= ne.length) {
        let b = _e[Ft.idx - ne.length].key;
        O.add(b);
      }
      return await Tr(c, Ft.result, {
        replace: B
      }), {
        shortCircuited: !0
      };
    }
    let {
      loaderData: Gt,
      errors: $o
    } = of(c, R, ne, _r, I, _e, Mi, ut);
    ut.forEach((b, yt) => {
      b.subscribe((Xt) => {
        (Xt || b.done) && ut.delete(yt);
      });
    });
    let zi = Rs(), Di = _s(Re), Oi = zi || Di || _e.length > 0;
    return Se({
      loaderData: Gt,
      errors: $o
    }, Oi ? {
      fetchers: new Map(c.fetchers)
    } : {});
  }
  function ks(S) {
    return s.v7_fetcherPersist && (ee.set(S, (ee.get(S) || 0) + 1), oe.has(S) && oe.delete(S)), c.fetchers.get(S) || $y;
  }
  function gh(S, E, R, M) {
    if (r)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    X.has(S) && Yt(S);
    let $ = a || i, j = pu(c.location, c.matches, u, s.v7_prependBasename, R, E, M == null ? void 0 : M.relative), B = Mn($, j, u);
    if (!B) {
      Rr(S, E, st(404, {
        pathname: j
      }));
      return;
    }
    let {
      path: A,
      submission: I,
      error: te
    } = bc(s.v7_normalizeFormMethod, !0, j, M);
    if (te) {
      Rr(S, E, te);
      return;
    }
    let se = mu(B, A);
    if (_ = (M && M.preventScrollReset) === !0, I && Et(I.formMethod)) {
      wh(S, E, A, se, B, I);
      return;
    }
    U.set(S, {
      routeId: E,
      path: A
    }), Sh(S, E, A, se, B, I);
  }
  async function wh(S, E, R, M, $, j) {
    if (Li(), U.delete(S), !M.route.action && !M.route.lazy) {
      let ye = st(405, {
        method: j.formMethod,
        pathname: R,
        routeId: E
      });
      Rr(S, E, ye);
      return;
    }
    let B = c.fetchers.get(S), A = Xy(j, B);
    c.fetchers.set(S, A), ke({
      fetchers: new Map(c.fetchers)
    });
    let I = new AbortController(), te = Ur(e.history, R, I.signal, j);
    X.set(S, I);
    let se = he, H = await Ar("action", te, M, $, l, o, u);
    if (te.signal.aborted) {
      X.get(S) === I && X.delete(S);
      return;
    }
    if (oe.has(S)) {
      c.fetchers.set(S, Jt(void 0)), ke({
        fetchers: new Map(c.fetchers)
      });
      return;
    }
    if (fr(H))
      if (X.delete(S), Re > se) {
        let ye = Jt(void 0);
        c.fetchers.set(S, ye), ke({
          fetchers: new Map(c.fetchers)
        });
        return;
      } else {
        O.add(S);
        let ye = Br(j);
        return c.fetchers.set(S, ye), ke({
          fetchers: new Map(c.fetchers)
        }), Tr(c, H, {
          fetcherSubmission: j
        });
      }
    if (lo(H)) {
      Rr(S, E, H.error);
      return;
    }
    if (zn(H))
      throw st(400, {
        type: "defer-action"
      });
    let ne = c.navigation.location || c.location, _e = Ur(e.history, ne, I.signal), kn = a || i, Cn = c.navigation.state !== "idle" ? Mn(kn, c.navigation.location, u) : c.matches;
    V(Cn, "Didn't find any matches after fetcher action");
    let _r = ++he;
    N.set(S, _r);
    let Mi = Br(j, H.data);
    c.fetchers.set(S, Mi);
    let [Ft, Gt] = ef(
      e.history,
      c,
      Cn,
      j,
      ne,
      q,
      xe,
      ve,
      U,
      O,
      kn,
      u,
      {
        [M.route.id]: H.data
      },
      void 0
      // No need to send through errors since we short circuit above
    );
    Gt.filter((ye) => ye.key !== S).forEach((ye) => {
      let Pr = ye.key, zs = c.fetchers.get(Pr), Rh = Br(void 0, zs ? zs.data : void 0);
      c.fetchers.set(Pr, Rh), X.has(Pr) && Yt(Pr), ye.controller && X.set(Pr, ye.controller);
    }), ke({
      fetchers: new Map(c.fetchers)
    });
    let $o = () => Gt.forEach((ye) => Yt(ye.key));
    I.signal.addEventListener("abort", $o);
    let {
      results: zi,
      loaderResults: Di,
      fetcherResults: Oi
    } = await Cs(c.matches, Cn, Ft, Gt, _e);
    if (I.signal.aborted)
      return;
    I.signal.removeEventListener("abort", $o), N.delete(S), X.delete(S), Gt.forEach((ye) => X.delete(ye.key));
    let b = uf(zi);
    if (b) {
      if (b.idx >= Ft.length) {
        let ye = Gt[b.idx - Ft.length].key;
        O.add(ye);
      }
      return Tr(c, b.result);
    }
    let {
      loaderData: yt,
      errors: Xt
    } = of(c, c.matches, Ft, Di, void 0, Gt, Oi, ut);
    if (c.fetchers.has(S)) {
      let ye = Jt(H.data);
      c.fetchers.set(S, ye);
    }
    _s(_r), c.navigation.state === "loading" && _r > Re ? (V(k, "Expected pending action"), x && x.abort(), Cr(c.navigation.location, {
      matches: Cn,
      loaderData: yt,
      errors: Xt,
      fetchers: new Map(c.fetchers)
    })) : (ke({
      errors: Xt,
      loaderData: lf(c.loaderData, yt, Cn, Xt),
      fetchers: new Map(c.fetchers)
    }), q = !1);
  }
  async function Sh(S, E, R, M, $, j) {
    let B = c.fetchers.get(S), A = Br(j, B ? B.data : void 0);
    c.fetchers.set(S, A), ke({
      fetchers: new Map(c.fetchers)
    });
    let I = new AbortController(), te = Ur(e.history, R, I.signal);
    X.set(S, I);
    let se = he, H = await Ar("loader", te, M, $, l, o, u);
    if (zn(H) && (H = await uh(H, te.signal, !0) || H), X.get(S) === I && X.delete(S), te.signal.aborted)
      return;
    if (oe.has(S)) {
      c.fetchers.set(S, Jt(void 0)), ke({
        fetchers: new Map(c.fetchers)
      });
      return;
    }
    if (fr(H))
      if (Re > se) {
        let _e = Jt(void 0);
        c.fetchers.set(S, _e), ke({
          fetchers: new Map(c.fetchers)
        });
        return;
      } else {
        O.add(S), await Tr(c, H);
        return;
      }
    if (lo(H)) {
      Rr(S, E, H.error);
      return;
    }
    V(!zn(H), "Unhandled fetcher deferred data");
    let ne = Jt(H.data);
    c.fetchers.set(S, ne), ke({
      fetchers: new Map(c.fetchers)
    });
  }
  async function Tr(S, E, R) {
    let {
      submission: M,
      fetcherSubmission: $,
      replace: j
    } = R === void 0 ? {} : R;
    E.revalidate && (q = !0);
    let B = fu(S.location, E.location, {
      _isRedirect: !0
    });
    if (V(B, "Expected a location on the redirect navigation"), n) {
      let ne = !1;
      if (E.reloadDocument)
        ne = !0;
      else if (oh.test(E.location)) {
        const _e = e.history.createURL(E.location);
        ne = // Hard reload if it's an absolute URL to a new origin
        _e.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Oo(_e.pathname, u) == null;
      }
      if (ne) {
        j ? t.location.replace(E.location) : t.location.assign(E.location);
        return;
      }
    }
    x = null;
    let A = j === !0 ? ge.Replace : ge.Push, {
      formMethod: I,
      formAction: te,
      formEncType: se
    } = S.navigation;
    !M && !$ && I && te && se && (M = cf(S.navigation));
    let H = M || $;
    if (Fy.has(E.status) && H && Et(H.formMethod))
      await xn(A, B, {
        submission: Se({}, H, {
          formAction: E.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: _
      });
    else {
      let ne = pa(B, M);
      await xn(A, B, {
        overrideNavigation: ne,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: $,
        // Preserve this flag across redirects
        preventScrollReset: _
      });
    }
  }
  async function Cs(S, E, R, M, $) {
    let j = await Promise.all([...R.map((I) => Ar("loader", $, I, E, l, o, u)), ...M.map((I) => I.matches && I.match && I.controller ? Ar("loader", Ur(e.history, I.path, I.controller.signal), I.match, I.matches, l, o, u) : {
      type: we.error,
      error: st(404, {
        pathname: I.path
      })
    })]), B = j.slice(0, R.length), A = j.slice(R.length);
    return await Promise.all([sf(S, R, B, B.map(() => $.signal), !1, c.loaderData), sf(S, M.map((I) => I.match), A, M.map((I) => I.controller ? I.controller.signal : null), !0)]), {
      results: j,
      loaderResults: B,
      fetcherResults: A
    };
  }
  function Li() {
    q = !0, xe.push(...Ni()), U.forEach((S, E) => {
      X.has(E) && (ve.push(E), Yt(E));
    });
  }
  function Rr(S, E, R) {
    let M = oo(c.matches, E);
    Io(S), ke({
      errors: {
        [M.route.id]: R
      },
      fetchers: new Map(c.fetchers)
    });
  }
  function Io(S) {
    let E = c.fetchers.get(S);
    X.has(S) && !(E && E.state === "loading" && N.has(S)) && Yt(S), U.delete(S), N.delete(S), O.delete(S), oe.delete(S), c.fetchers.delete(S);
  }
  function Eh(S) {
    if (s.v7_fetcherPersist) {
      let E = (ee.get(S) || 0) - 1;
      E <= 0 ? (ee.delete(S), oe.add(S)) : ee.set(S, E);
    } else
      Io(S);
    ke({
      fetchers: new Map(c.fetchers)
    });
  }
  function Yt(S) {
    let E = X.get(S);
    V(E, "Expected fetch controller: " + S), E.abort(), X.delete(S);
  }
  function Ts(S) {
    for (let E of S) {
      let R = ks(E), M = Jt(R.data);
      c.fetchers.set(E, M);
    }
  }
  function Rs() {
    let S = [], E = !1;
    for (let R of O) {
      let M = c.fetchers.get(R);
      V(M, "Expected fetcher: " + R), M.state === "loading" && (O.delete(R), S.push(R), E = !0);
    }
    return Ts(S), E;
  }
  function _s(S) {
    let E = [];
    for (let [R, M] of N)
      if (M < S) {
        let $ = c.fetchers.get(R);
        V($, "Expected fetcher: " + R), $.state === "loading" && (Yt(R), N.delete(R), E.push(R));
      }
    return Ts(E), E.length > 0;
  }
  function xh(S, E) {
    let R = c.blockers.get(S) || jr;
    return Ve.get(S) !== E && Ve.set(S, E), R;
  }
  function Ps(S) {
    c.blockers.delete(S), Ve.delete(S);
  }
  function Fo(S, E) {
    let R = c.blockers.get(S) || jr;
    V(R.state === "unblocked" && E.state === "blocked" || R.state === "blocked" && E.state === "blocked" || R.state === "blocked" && E.state === "proceeding" || R.state === "blocked" && E.state === "unblocked" || R.state === "proceeding" && E.state === "unblocked", "Invalid blocker state transition: " + R.state + " -> " + E.state);
    let M = new Map(c.blockers);
    M.set(S, E), ke({
      blockers: M
    });
  }
  function Ls(S) {
    let {
      currentLocation: E,
      nextLocation: R,
      historyAction: M
    } = S;
    if (Ve.size === 0)
      return;
    Ve.size > 1 && yn(!1, "A router only supports one blocker at a time");
    let $ = Array.from(Ve.entries()), [j, B] = $[$.length - 1], A = c.blockers.get(j);
    if (!(A && A.state === "proceeding") && B({
      currentLocation: E,
      nextLocation: R,
      historyAction: M
    }))
      return j;
  }
  function Ni(S) {
    let E = [];
    return ut.forEach((R, M) => {
      (!S || S(M)) && (R.cancel(), E.push(M), ut.delete(M));
    }), E;
  }
  function kh(S, E, R) {
    if (h = S, y = E, g = R || null, !w && c.navigation === da) {
      w = !0;
      let M = Ms(c.location, c.matches);
      M != null && ke({
        restoreScrollPosition: M
      });
    }
    return () => {
      h = null, y = null, g = null;
    };
  }
  function Ns(S, E) {
    return g && g(S, E.map((M) => fy(M, c.loaderData))) || S.key;
  }
  function Ch(S, E) {
    if (h && y) {
      let R = Ns(S, E);
      h[R] = y();
    }
  }
  function Ms(S, E) {
    if (h) {
      let R = Ns(S, E), M = h[R];
      if (typeof M == "number")
        return M;
    }
    return null;
  }
  function Th(S) {
    l = {}, a = du(S, o, void 0, l);
  }
  return v = {
    get basename() {
      return u;
    },
    get state() {
      return c;
    },
    get routes() {
      return i;
    },
    get window() {
      return t;
    },
    initialize: It,
    subscribe: hh,
    enableScrollRestoration: kh,
    navigate: xs,
    fetch: gh,
    revalidate: mh,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (S) => e.history.createHref(S),
    encodeLocation: (S) => e.history.encodeLocation(S),
    getFetcher: ks,
    deleteFetcher: Eh,
    dispose: Hn,
    getBlocker: xh,
    deleteBlocker: Ps,
    _internalFetchControllers: X,
    _internalActiveDeferreds: ut,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Th
  }, v;
}
function Uy(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function pu(e, t, n, r, o, l, i) {
  let a, u;
  if (l != null && i !== "path") {
    a = [];
    for (let p of t)
      if (a.push(p), p.route.id === l) {
        u = p;
        break;
      }
  } else
    a = t, u = t[t.length - 1];
  let s = Py(o || ".", eh(a).map((p) => p.pathnameBase), Oo(e.pathname, n) || e.pathname, i === "path");
  return o == null && (s.search = e.search, s.hash = e.hash), (o == null || o === "" || o === ".") && u && u.route.index && !Ss(s.search) && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (s.pathname = s.pathname === "/" ? n : In([n, s.pathname])), Ri(s);
}
function bc(e, t, n, r) {
  if (!r || !Uy(r))
    return {
      path: n
    };
  if (r.formMethod && !Yy(r.formMethod))
    return {
      path: n,
      error: st(405, {
        method: r.formMethod
      })
    };
  let o = () => ({
    path: n,
    error: st(400, {
      type: "invalid-body"
    })
  }), l = r.formMethod || "get", i = e ? l.toUpperCase() : l.toLowerCase(), a = ah(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Et(i))
        return o();
      let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(r.body.entries()).reduce((g, y) => {
          let [w, C] = y;
          return "" + g + w + "=" + C + `
`;
        }, "")
      ) : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!Et(i))
        return o();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0
          }
        };
      } catch {
        return o();
      }
    }
  }
  V(typeof FormData == "function", "FormData is not available in this environment");
  let u, s;
  if (r.formData)
    u = hu(r.formData), s = r.formData;
  else if (r.body instanceof FormData)
    u = hu(r.body), s = r.body;
  else if (r.body instanceof URLSearchParams)
    u = r.body, s = rf(u);
  else if (r.body == null)
    u = new URLSearchParams(), s = new FormData();
  else
    try {
      u = new URLSearchParams(r.body), s = rf(u);
    } catch {
      return o();
    }
  let p = {
    formMethod: i,
    formAction: a,
    formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0
  };
  if (Et(p.formMethod))
    return {
      path: n,
      submission: p
    };
  let m = Ot(n);
  return t && m.search && Ss(m.search) && u.append("index", ""), m.search = "?" + u, {
    path: Ri(m),
    submission: p
  };
}
function By(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ef(e, t, n, r, o, l, i, a, u, s, p, m, h, g) {
  let y = g ? Object.values(g)[0] : h ? Object.values(h)[0] : void 0, w = e.createURL(t.location), C = e.createURL(o), f = g ? Object.keys(g)[0] : void 0, v = By(n, f).filter((k, _) => {
    if (k.route.lazy)
      return !0;
    if (k.route.loader == null)
      return !1;
    if (Vy(t.loaderData, t.matches[_], k) || i.some((F) => F === k.route.id))
      return !0;
    let x = t.matches[_], L = k;
    return tf(k, Se({
      currentUrl: w,
      currentParams: x.params,
      nextUrl: C,
      nextParams: L.params
    }, r, {
      actionResult: y,
      defaultShouldRevalidate: (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        l || // Clicked the same link, resubmitted a GET form
        w.pathname + w.search === C.pathname + C.search || // Search params affect all loaders
        w.search !== C.search || ih(x, L)
      )
    }));
  }), c = [];
  return u.forEach((k, _) => {
    if (!n.some((K) => K.route.id === k.routeId))
      return;
    let x = Mn(p, k.path, m);
    if (!x) {
      c.push({
        key: _,
        routeId: k.routeId,
        path: k.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let L = t.fetchers.get(_), F = mu(x, k.path), D = !1;
    s.has(_) ? D = !1 : a.includes(_) ? D = !0 : L && L.state !== "idle" && L.data === void 0 ? D = l : D = tf(F, Se({
      currentUrl: w,
      currentParams: t.matches[t.matches.length - 1].params,
      nextUrl: C,
      nextParams: n[n.length - 1].params
    }, r, {
      actionResult: y,
      defaultShouldRevalidate: l
    })), D && c.push({
      key: _,
      routeId: k.routeId,
      path: k.path,
      matches: x,
      match: F,
      controller: new AbortController()
    });
  }), [v, c];
}
function Vy(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), o = e[n.route.id] === void 0;
  return r || o;
}
function ih(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function tf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean")
      return n;
  }
  return t.defaultShouldRevalidate;
}
async function nf(e, t, n) {
  if (!e.lazy)
    return;
  let r = await e.lazy();
  if (!e.lazy)
    return;
  let o = n[e.id];
  V(o, "No route found in manifest");
  let l = {};
  for (let i in r) {
    let u = o[i] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    i !== "hasErrorBoundary";
    yn(!u, 'Route "' + o.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')), !u && !sy.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, Se({}, t(o), {
    lazy: void 0
  }));
}
async function Ar(e, t, n, r, o, l, i, a) {
  a === void 0 && (a = {});
  let u, s, p, m = (y) => {
    let w, C = new Promise((f, d) => w = d);
    return p = () => w(), t.signal.addEventListener("abort", p), Promise.race([y({
      request: t,
      params: n.params,
      context: a.requestContext
    }), C]);
  };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let w, C = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          m(y).catch((f) => {
            w = f;
          }),
          nf(n.route, l, o)
        ]);
        if (w)
          throw w;
        s = C[0];
      } else if (await nf(n.route, l, o), y = n.route[e], y)
        s = await m(y);
      else if (e === "action") {
        let w = new URL(t.url), C = w.pathname + w.search;
        throw st(405, {
          method: t.method,
          pathname: C,
          routeId: n.route.id
        });
      } else
        return {
          type: we.data,
          data: void 0
        };
    else if (y)
      s = await m(y);
    else {
      let w = new URL(t.url), C = w.pathname + w.search;
      throw st(404, {
        pathname: C
      });
    }
    V(s !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (y) {
    u = we.error, s = y;
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (Ky(s)) {
    let y = s.status;
    if (Iy.has(y)) {
      let f = s.headers.get("Location");
      if (V(f, "Redirects returned/thrown from loaders/actions must have a Location header"), !oh.test(f))
        f = pu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, f);
      else if (!a.isStaticRequest) {
        let d = new URL(t.url), v = f.startsWith("//") ? new URL(d.protocol + f) : new URL(f), c = Oo(v.pathname, i) != null;
        v.origin === d.origin && c && (f = v.pathname + v.search + v.hash);
      }
      if (a.isStaticRequest)
        throw s.headers.set("Location", f), s;
      return {
        type: we.redirect,
        status: y,
        location: f,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    if (a.isRouteRequest)
      throw {
        type: u === we.error ? we.error : we.data,
        response: s
      };
    let w, C = s.headers.get("Content-Type");
    return C && /\bapplication\/json\b/.test(C) ? w = await s.json() : w = await s.text(), u === we.error ? {
      type: u,
      error: new th(y, s.statusText, w),
      headers: s.headers
    } : {
      type: we.data,
      data: w,
      statusCode: s.status,
      headers: s.headers
    };
  }
  if (u === we.error)
    return {
      type: u,
      error: s
    };
  if (Qy(s)) {
    var h, g;
    return {
      type: we.deferred,
      deferredData: s,
      statusCode: (h = s.init) == null ? void 0 : h.status,
      headers: ((g = s.init) == null ? void 0 : g.headers) && new Headers(s.init.headers)
    };
  }
  return {
    type: we.data,
    data: s
  };
}
function Ur(e, t, n, r) {
  let o = e.createURL(ah(t)).toString(), l = {
    signal: n
  };
  if (r && Et(r.formMethod)) {
    let {
      formMethod: i,
      formEncType: a
    } = r;
    l.method = i.toUpperCase(), a === "application/json" ? (l.headers = new Headers({
      "Content-Type": a
    }), l.body = JSON.stringify(r.json)) : a === "text/plain" ? l.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? l.body = hu(r.formData) : l.body = r.formData;
  }
  return new Request(o, l);
}
function hu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function rf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries())
    t.append(n, r);
  return t;
}
function Wy(e, t, n, r, o) {
  let l = {}, i = null, a, u = !1, s = {};
  return n.forEach((p, m) => {
    let h = t[m].route.id;
    if (V(!fr(p), "Cannot handle redirect results in processLoaderData"), lo(p)) {
      let g = oo(e, h), y = p.error;
      r && (y = Object.values(r)[0], r = void 0), i = i || {}, i[g.route.id] == null && (i[g.route.id] = y), l[h] = void 0, u || (u = !0, a = nh(p.error) ? p.error.status : 500), p.headers && (s[h] = p.headers);
    } else
      zn(p) ? (o.set(h, p.deferredData), l[h] = p.deferredData.data) : l[h] = p.data, p.statusCode != null && p.statusCode !== 200 && !u && (a = p.statusCode), p.headers && (s[h] = p.headers);
  }), r && (i = r, l[Object.keys(r)[0]] = void 0), {
    loaderData: l,
    errors: i,
    statusCode: a || 200,
    loaderHeaders: s
  };
}
function of(e, t, n, r, o, l, i, a) {
  let {
    loaderData: u,
    errors: s
  } = Wy(t, n, r, o, a);
  for (let p = 0; p < l.length; p++) {
    let {
      key: m,
      match: h,
      controller: g
    } = l[p];
    V(i !== void 0 && i[p] !== void 0, "Did not find corresponding fetcher result");
    let y = i[p];
    if (!(g && g.signal.aborted))
      if (lo(y)) {
        let w = oo(e.matches, h == null ? void 0 : h.route.id);
        s && s[w.route.id] || (s = Se({}, s, {
          [w.route.id]: y.error
        })), e.fetchers.delete(m);
      } else if (fr(y))
        V(!1, "Unhandled fetcher revalidation redirect");
      else if (zn(y))
        V(!1, "Unhandled fetcher deferred data");
      else {
        let w = Jt(y.data);
        e.fetchers.set(m, w);
      }
  }
  return {
    loaderData: u,
    errors: s
  };
}
function lf(e, t, n, r) {
  let o = Se({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (t.hasOwnProperty(i) ? t[i] !== void 0 && (o[i] = t[i]) : e[i] !== void 0 && l.route.loader && (o[i] = e[i]), r && r.hasOwnProperty(i))
      break;
  }
  return o;
}
function oo(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function af(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: t
    }],
    route: t
  };
}
function st(e, t) {
  let {
    pathname: n,
    routeId: r,
    method: o,
    type: l
  } = t === void 0 ? {} : t, i = "Unknown Server Error", a = "Unknown @remix-run/router error";
  return e === 400 ? (i = "Bad Request", o && n && r ? a = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : l === "defer-action" ? a = "defer() is not supported in actions" : l === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (i = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (i = "Not Found", a = 'No route matches URL "' + n + '"') : e === 405 && (i = "Method Not Allowed", o && n && r ? a = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')), new th(e || 500, i, new Error(a), !0);
}
function uf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (fr(n))
      return {
        result: n,
        idx: t
      };
  }
}
function ah(e) {
  let t = typeof e == "string" ? Ot(e) : e;
  return Ri(Se({}, t, {
    hash: ""
  }));
}
function Hy(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function zn(e) {
  return e.type === we.deferred;
}
function lo(e) {
  return e.type === we.error;
}
function fr(e) {
  return (e && e.type) === we.redirect;
}
function Qy(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function Ky(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Yy(e) {
  return Oy.has(e.toLowerCase());
}
function Et(e) {
  return zy.has(e.toLowerCase());
}
async function sf(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i], u = t[i];
    if (!u)
      continue;
    let s = e.find((m) => m.route.id === u.route.id), p = s != null && !ih(s, u) && (l && l[u.route.id]) !== void 0;
    if (zn(a) && (o || p)) {
      let m = r[i];
      V(m, "Expected an AbortSignal for revalidating fetcher deferred result"), await uh(a, m, o).then((h) => {
        h && (n[i] = h || n[i]);
      });
    }
  }
}
async function uh(e, t, n) {
  if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
    if (n)
      try {
        return {
          type: we.data,
          data: e.deferredData.unwrappedData
        };
      } catch (o) {
        return {
          type: we.error,
          error: o
        };
      }
    return {
      type: we.data,
      data: e.deferredData.data
    };
  }
}
function Ss(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function mu(e, t) {
  let n = typeof t == "string" ? Ot(t).search : t.search;
  if (e[e.length - 1].route.index && Ss(n || ""))
    return e[e.length - 1];
  let r = eh(e);
  return r[r.length - 1];
}
function cf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: l,
    json: i
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0
      };
  }
}
function pa(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Gy(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function Br(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Xy(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function Jt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function Zy(e, t) {
  try {
    let n = e.sessionStorage.getItem(lh);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, l] of Object.entries(r || {}))
        l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {
  }
}
function Jy(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t)
      n[r] = [...o];
    try {
      e.sessionStorage.setItem(lh, JSON.stringify(n));
    } catch (r) {
      yn(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yl() {
  return Yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yl.apply(this, arguments);
}
const sh = /* @__PURE__ */ T.createContext(null), ch = /* @__PURE__ */ T.createContext(null), fh = /* @__PURE__ */ T.createContext(null), _i = /* @__PURE__ */ T.createContext(null), Pi = /* @__PURE__ */ T.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), dh = /* @__PURE__ */ T.createContext(null);
function Es() {
  return T.useContext(_i) != null;
}
function qy() {
  return Es() || V(!1), T.useContext(_i).location;
}
function by(e, t, n) {
  Es() || V(!1);
  let {
    navigator: r
  } = T.useContext(fh), {
    matches: o
  } = T.useContext(Pi), l = o[o.length - 1], i = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = qy(), s;
  if (t) {
    var p;
    let w = typeof t == "string" ? Ot(t) : t;
    a === "/" || (p = w.pathname) != null && p.startsWith(a) || V(!1), s = w;
  } else
    s = u;
  let m = s.pathname || "/", h = a === "/" ? m : m.slice(a.length) || "/", g = Mn(e, {
    pathname: h
  }), y = og(g && g.map((w) => Object.assign({}, w, {
    params: Object.assign({}, i, w.params),
    pathname: In([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? a : In([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), o, n);
  return t && y ? /* @__PURE__ */ T.createElement(_i.Provider, {
    value: {
      location: Yl({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, s),
      navigationType: ge.Pop
    }
  }, y) : y;
}
function eg() {
  let e = ug(), t = nh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, o = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  }, l = null;
  return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ T.createElement("pre", {
    style: o
  }, n) : null, l);
}
const tg = /* @__PURE__ */ T.createElement(eg, null);
class ng extends T.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error || n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ T.createElement(Pi.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ T.createElement(dh.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function rg(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, o = T.useContext(sh);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ T.createElement(Pi.Provider, {
    value: t
  }, r);
}
function og(e, t, n) {
  var r;
  if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let l = e, i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = l.findIndex((u) => u.route.id && (i == null ? void 0 : i[u.route.id]));
    a >= 0 || V(!1), l = l.slice(0, Math.min(l.length, a + 1));
  }
  return l.reduceRight((a, u, s) => {
    let p = u.route.id ? i == null ? void 0 : i[u.route.id] : null, m = null;
    n && (m = u.route.errorElement || tg);
    let h = t.concat(l.slice(0, s + 1)), g = () => {
      let y;
      return p ? y = m : u.route.Component ? y = /* @__PURE__ */ T.createElement(u.route.Component, null) : u.route.element ? y = u.route.element : y = a, /* @__PURE__ */ T.createElement(rg, {
        match: u,
        routeContext: {
          outlet: a,
          matches: h,
          isDataRoute: n != null
        },
        children: y
      });
    };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0) ? /* @__PURE__ */ T.createElement(ng, {
      location: n.location,
      revalidation: n.revalidation,
      component: m,
      error: p,
      children: g(),
      routeContext: {
        outlet: null,
        matches: h,
        isDataRoute: !0
      }
    }) : g();
  }, null);
}
var vu = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(vu || {});
function lg(e) {
  let t = T.useContext(ch);
  return t || V(!1), t;
}
function ig(e) {
  let t = T.useContext(Pi);
  return t || V(!1), t;
}
function ag(e) {
  let t = ig(), n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function ug() {
  var e;
  let t = T.useContext(dh), n = lg(vu.UseRouteError), r = ag(vu.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function yu(e) {
  V(!1);
}
function sg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ge.Pop,
    navigator: l,
    static: i = !1
  } = e;
  Es() && V(!1);
  let a = t.replace(/^\/*/, "/"), u = T.useMemo(() => ({
    basename: a,
    navigator: l,
    static: i
  }), [a, l, i]);
  typeof r == "string" && (r = Ot(r));
  let {
    pathname: s = "/",
    search: p = "",
    hash: m = "",
    state: h = null,
    key: g = "default"
  } = r, y = T.useMemo(() => {
    let w = Oo(s, a);
    return w == null ? null : {
      location: {
        pathname: w,
        search: p,
        hash: m,
        state: h,
        key: g
      },
      navigationType: o
    };
  }, [a, s, p, m, h, g, o]);
  return y == null ? null : /* @__PURE__ */ T.createElement(fh.Provider, {
    value: u
  }, /* @__PURE__ */ T.createElement(_i.Provider, {
    children: n,
    value: y
  }));
}
new Promise(() => {
});
function gu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return T.Children.forEach(e, (r, o) => {
    if (!/* @__PURE__ */ T.isValidElement(r))
      return;
    let l = [...t, o];
    if (r.type === T.Fragment) {
      n.push.apply(n, gu(r.props.children, l));
      return;
    }
    r.type !== yu && V(!1), !r.props.index || !r.props.children || V(!1);
    let i = {
      id: r.props.id || l.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (i.children = gu(r.props.children, l)), n.push(i);
  }), n;
}
function cg(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && Object.assign(t, {
    element: /* @__PURE__ */ T.createElement(e.Component),
    Component: void 0
  }), e.ErrorBoundary && Object.assign(t, {
    errorElement: /* @__PURE__ */ T.createElement(e.ErrorBoundary),
    ErrorBoundary: void 0
  }), t;
}
function fg(e, t) {
  return Ay({
    basename: t == null ? void 0 : t.basename,
    future: Yl({}, t == null ? void 0 : t.future, {
      v7_prependBasename: !0
    }),
    history: ay({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: e,
    mapRouteProperties: cg
  }).initialize();
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const dg = /* @__PURE__ */ T.createContext({
  isTransitioning: !1
}), pg = /* @__PURE__ */ T.createContext(/* @__PURE__ */ new Map()), hg = "startTransition", ff = ha[hg];
function mg(e) {
  ff ? ff(e) : e();
}
class vg {
  constructor() {
    this.status = "pending", this.promise = new Promise((t, n) => {
      this.resolve = (r) => {
        this.status === "pending" && (this.status = "resolved", t(r));
      }, this.reject = (r) => {
        this.status === "pending" && (this.status = "rejected", n(r));
      };
    });
  }
}
function yg(e) {
  let {
    fallbackElement: t,
    router: n,
    future: r
  } = e, [o, l] = T.useState(n.state), [i, a] = T.useState(), [u, s] = T.useState({
    isTransitioning: !1
  }), [p, m] = T.useState(), [h, g] = T.useState(), [y, w] = T.useState(), C = T.useRef(/* @__PURE__ */ new Map()), {
    v7_startTransition: f
  } = r || {}, d = T.useCallback((x) => {
    f ? mg(x) : x();
  }, [f]), v = T.useCallback((x, L) => {
    let {
      deletedFetchers: F,
      unstable_viewTransitionOpts: D
    } = L;
    F.forEach((K) => C.current.delete(K)), x.fetchers.forEach((K, q) => {
      K.data !== void 0 && C.current.set(q, K.data);
    }), !D || n.window == null || typeof n.window.document.startViewTransition != "function" ? d(() => l(x)) : h && p ? (p.resolve(), h.skipTransition(), w({
      state: x,
      currentLocation: D.currentLocation,
      nextLocation: D.nextLocation
    })) : (a(x), s({
      isTransitioning: !0,
      currentLocation: D.currentLocation,
      nextLocation: D.nextLocation
    }));
  }, [n.window, h, p, C, d]);
  T.useLayoutEffect(() => n.subscribe(v), [n, v]), T.useEffect(() => {
    u.isTransitioning && m(new vg());
  }, [u.isTransitioning]), T.useEffect(() => {
    if (p && i && n.window) {
      let x = i, L = p.promise, F = n.window.document.startViewTransition(async () => {
        d(() => l(x)), await L;
      });
      F.finished.finally(() => {
        m(void 0), g(void 0), a(void 0), s({
          isTransitioning: !1
        });
      }), g(F);
    }
  }, [d, i, p, n.window]), T.useEffect(() => {
    p && i && o.location.key === i.location.key && p.resolve();
  }, [p, h, o.location, i]), T.useEffect(() => {
    !u.isTransitioning && y && (a(y.state), s({
      isTransitioning: !0,
      currentLocation: y.currentLocation,
      nextLocation: y.nextLocation
    }), w(void 0));
  }, [u.isTransitioning, y]);
  let c = T.useMemo(() => ({
    createHref: n.createHref,
    encodeLocation: n.encodeLocation,
    go: (x) => n.navigate(x),
    push: (x, L, F) => n.navigate(x, {
      state: L,
      preventScrollReset: F == null ? void 0 : F.preventScrollReset
    }),
    replace: (x, L, F) => n.navigate(x, {
      replace: !0,
      state: L,
      preventScrollReset: F == null ? void 0 : F.preventScrollReset
    })
  }), [n]), k = n.basename || "/", _ = T.useMemo(() => ({
    router: n,
    navigator: c,
    static: !1,
    basename: k
  }), [n, c, k]);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(sh.Provider, {
    value: _
  }, /* @__PURE__ */ T.createElement(ch.Provider, {
    value: o
  }, /* @__PURE__ */ T.createElement(pg.Provider, {
    value: C.current
  }, /* @__PURE__ */ T.createElement(dg.Provider, {
    value: u
  }, /* @__PURE__ */ T.createElement(sg, {
    basename: k,
    location: o.location,
    navigationType: o.historyAction,
    navigator: c
  }, o.initialized ? /* @__PURE__ */ T.createElement(gg, {
    routes: n.routes,
    state: o
  }) : t))))), null);
}
function gg(e) {
  let {
    routes: t,
    state: n
  } = e;
  return by(t, void 0, n);
}
var df;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(df || (df = {}));
var pf;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(pf || (pf = {}));
const wg = gu(/* @__PURE__ */ ln(yu, { path: "/", children: /* @__PURE__ */ ln(yu, { path: "program-constructor", lazy: () => import("./index-febcad7e.js") }) }));
class Sg {
  constructor(t) {
    this.routes = t;
  }
  init() {
    const t = document.createElement("div");
    document.body.appendChild(t), El.createRoot(t).render(/* @__PURE__ */ ln(iy, {}));
  }
  match(t) {
    return !!Mn(this.routes, {
      pathname: t
    });
  }
  render(t, n) {
    El.createRoot(n).render(/* @__PURE__ */ ln(re.StrictMode, { children: /* @__PURE__ */ ln(yg, { router: fg(this.routes, {
      initialEntries: [t]
    }) }) }));
  }
}
const ph = new Sg(wg);
ph.init();
window.ReactProvider = ph;
export {
  ce as Q,
  re as R,
  Vf as T,
  Qm as a,
  Om as b,
  Ff as c,
  ha as d,
  Eg as e,
  io as f,
  hf as g,
  Gp as h,
  $f as i,
  ln as j,
  Zv as k,
  ph as l,
  vm as m,
  T as r,
  Lu as s,
  Bm as u,
  Bf as w
};
